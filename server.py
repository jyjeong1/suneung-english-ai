#!/usr/bin/env python3
"""Prof.AI 수능영어 서버 — 로컬 + Render 클라우드 배포 겸용"""
import http.server
import json
import urllib.request
import ssl
import os
import threading
import time
import random
from datetime import date, datetime

PORT = int(os.environ.get('PORT', 8080))
SERVER_API_KEY = os.environ.get('CLAUDE_API_KEY', '')
TOSS_SECRET_KEY = os.environ.get('TOSS_SECRET_KEY', '')  # test_sk_... 또는 live_sk_...
DAILY_LIMIT = int(os.environ.get('DAILY_LIMIT', 10))  # 인당 하루 API 호출 제한

# 인당 일일 사용량 추적 {날짜: {uid: 횟수}}
usage_tracker = {}

# 문제은행 서버 메모리 로드
question_bank = []
question_ids = {}  # {qid: index} 미리 계산
question_by_type = {}  # {type: [questions]} 미리 분류

def get_qid(q):
    return (q.get('passage', '') or '')[:80].strip()

def load_question_bank():
    global question_bank, question_ids, question_by_type
    try:
        with open(os.path.join(os.path.dirname(__file__), 'questions.js'), 'r', encoding='utf-8') as f:
            content = f.read()
        start = content.find('[')
        end = content.rfind(']') + 1
        if start >= 0 and end > 0:
            question_bank = json.loads(content[start:end])
            # 인덱스 미리 계산
            question_ids = {}
            question_by_type = {}
            for i, q in enumerate(question_bank):
                question_ids[get_qid(q)] = i
                t = q.get('_type', '')
                if t not in question_by_type:
                    question_by_type[t] = []
                question_by_type[t].append(q)
            print(f"📦 문제은행 로드: {len(question_bank)}문제, {len(question_by_type)}유형")
    except Exception as e:
        print(f"⚠️ 문제은행 로드 실패: {e}")

load_question_bank()

# 사용자별 푼 문제 이력 {uid: set(인덱스)}
user_question_history = {}

def check_rate_limit(uid):
    """일일 사용량 체크. True면 허용, False면 초과"""
    if not uid or not SERVER_API_KEY:
        return True  # 서버키 없으면 제한 없음 (로컬)
    today = date.today().isoformat()
    if today not in usage_tracker:
        usage_tracker.clear()  # 이전 날짜 데이터 정리
        usage_tracker[today] = {}
    count = usage_tracker[today].get(uid, 0)
    if count >= DAILY_LIMIT:
        return False
    usage_tracker[today][uid] = count + 1
    return True

class AppHandler(http.server.SimpleHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, x-api-key, x-user-id, anthropic-version, anthropic-dangerous-direct-browser-access')
        self.end_headers()

    def do_GET(self):
        if self.path == '/api/status':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({
                'hasServerKey': bool(SERVER_API_KEY),
                'dailyLimit': DAILY_LIMIT,
                'questionCount': len(question_bank),
            }).encode())
            return
        if self.path.startswith('/api/questions'):
            from urllib.parse import urlparse, parse_qs
            params = parse_qs(urlparse(self.path).query)
            q_type = params.get('type', [''])[0]
            count = int(params.get('count', ['1'])[0])
            uid = params.get('uid', [''])[0]

            # 사용자가 푼 문제 제외 (클라이언트에서 전달한 exclude 목록)
            exclude_raw = params.get('exclude', ['[]'])[0]
            try:
                from urllib.parse import unquote
                exclude_list = json.loads(unquote(exclude_raw))
            except:
                exclude_list = []
            exclude_set = set(exclude_list)

            def get_qid(q):
                return (q.get('passage', '') or '')[:80].replace('  ', ' ').strip()

            available = [q for q in question_bank
                        if (not q_type or q.get('_type') == q_type)
                        and get_qid(q) not in exclude_set]

            # 부족하면 전체에서 (이력 무시)
            if len(available) < count:
                available = [q for q in question_bank
                            if not q_type or q.get('_type') == q_type]

            selected = random.sample(available, min(count, len(available)))

            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(selected, ensure_ascii=False).encode())
            return
        super().do_GET()

    def do_POST(self):
        if self.path == '/api/questions':
            content_length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_length)
            data = json.loads(body) if body else {}

            q_type = data.get('type', '')
            count = int(data.get('count', 1))
            exclude_set = set(data.get('exclude', []))

            # 미리 분류된 유형별 목록 사용 (빠름)
            pool = question_by_type.get(q_type, question_bank) if q_type else question_bank
            if exclude_set:
                available = [q for q in pool if get_qid(q) not in exclude_set]
            else:
                available = pool

            if len(available) < count:
                available = pool

            selected = random.sample(available, min(count, len(available)))

            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(selected, ensure_ascii=False).encode())
            return

        if self.path == '/api/claude':
            content_length = int(self.headers['Content-Length'])
            body = self.rfile.read(content_length)
            data = json.loads(body)

            # 서버 키 사용 시 rate limit 체크
            uid = self.headers.get('x-user-id', '')
            if SERVER_API_KEY and not check_rate_limit(uid):
                self.send_response(429)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({
                    'error': {'message': f'일일 사용 제한({DAILY_LIMIT}회)을 초과했습니다. 내일 다시 이용해주세요.'}
                }).encode())
                return

            api_key = SERVER_API_KEY or self.headers.get('x-api-key', '')

            if not api_key:
                self.send_response(401)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({'error': {'message': 'API 키가 설정되지 않았습니다'}}).encode())
                return

            req_body = json.dumps({
                'model': data.get('model', 'claude-haiku-4-5'),
                'max_tokens': data.get('max_tokens', 2000),
                'messages': data.get('messages', []),
            }).encode('utf-8')

            req = urllib.request.Request(
                'https://api.anthropic.com/v1/messages',
                data=req_body,
                headers={
                    'Content-Type': 'application/json',
                    'x-api-key': api_key,
                    'anthropic-version': '2023-06-01',
                },
                method='POST'
            )

            try:
                ctx = ssl.create_default_context()
                try:
                    import certifi
                    ctx.load_verify_locations(certifi.where())
                except ImportError:
                    pass
                try:
                    resp_to_use = urllib.request.urlopen(req, context=ctx)
                except ssl.SSLCertVerificationError:
                    ctx = ssl._create_unverified_context()
                    resp_to_use = urllib.request.urlopen(req, context=ctx)
                with resp_to_use as response:
                    result = response.read()
                    self.send_response(200)
                    self.send_header('Content-Type', 'application/json')
                    self.send_header('Access-Control-Allow-Origin', '*')
                    self.end_headers()
                    self.wfile.write(result)
            except urllib.error.HTTPError as e:
                error_body = e.read()
                self.send_response(e.code)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(error_body)
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({'error': {'message': str(e)}}).encode())
        elif self.path == '/api/payment/confirm':
            content_length = int(self.headers['Content-Length'])
            body = self.rfile.read(content_length)
            data = json.loads(body)

            if not TOSS_SECRET_KEY:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({'error': '결제 시크릿 키가 설정되지 않았습니다'}).encode())
                return

            import base64
            auth_header = base64.b64encode(f"{TOSS_SECRET_KEY}:".encode()).decode()

            req_body = json.dumps({
                'paymentKey': data.get('paymentKey'),
                'orderId': data.get('orderId'),
                'amount': data.get('amount'),
            }).encode('utf-8')

            req = urllib.request.Request(
                'https://api.tosspayments.com/v1/payments/confirm',
                data=req_body,
                headers={
                    'Content-Type': 'application/json',
                    'Authorization': f'Basic {auth_header}',
                },
                method='POST'
            )

            try:
                ctx = ssl.create_default_context()
                resp = urllib.request.urlopen(req, context=ctx)
                result = resp.read()
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(result)
            except urllib.error.HTTPError as e:
                error_body = e.read()
                self.send_response(e.code)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(error_body)
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({'error': str(e)}).encode())
        else:
            self.send_response(404)
            self.end_headers()

    def log_message(self, format, *args):
        print(f"  {args[0]}")

# ═══════════════════════════════════════
# 문제은행 자동 교체 (2일마다 100문제)
# ═══════════════════════════════════════
REFRESH_INTERVAL = 7 * 24 * 3600  # 1주일 (초)
REFRESH_COUNT = 70  # 추가할 문제 수
QUESTIONS_PATH = os.path.join(os.path.dirname(__file__), 'questions.js')

TYPES_FOR_REFRESH = {
    "blank": "한국 수능 영어 빈칸 추론 문제를 5개 생성하세요.\n★필수: 지문 220~260단어, 10~14문장, 문장당 15~22단어. 학술 소재(심리학/철학/사회학/인지과학). perceive,facilitate,inherent,phenomenon,paradox 등 학술어휘 4~8개 포함. 빈칸을 ___________로 표시.\n반드시 JSON 배열로만 출력:\n[{\"type\":\"빈칸 추론\",\"passage\":\"지문(220단어이상)\",\"choices\":[\"①\",\"②\",\"③\",\"④\",\"⑤\"],\"answer\":0,\"explanation\":\"해설\",\"wrong_explanations\":{},\"_type\":\"blank\",\"given_sentence\":null}]",
    "insert": "한국 수능 영어 문장 삽입 문제를 5개 생성하세요.\n★필수: 지문 220~260단어, 10~14문장. 학술 소재. attribute,consequence,facilitate 등 학술어휘 4~6개. (①)~(⑤) 삽입위치. given_sentence에 However/Therefore 등 접속사 포함.\n반드시 JSON 배열로만 출력:\n[{\"type\":\"문장 삽입\",\"passage\":\"지문(220단어이상)\",\"given_sentence\":\"접속사포함문장\",\"choices\":[\"①\",\"②\",\"③\",\"④\",\"⑤\"],\"answer\":0,\"explanation\":\"해설\",\"wrong_explanations\":{},\"_type\":\"insert\"}]",
    "grammar": "한국 수능 영어 어법 판단 문제를 5개 생성하세요.\n★필수: 지문 220~260단어, 10~14문장. 학술 소재. 학술어휘 4~6개. ①word/②word/③word/④word/⑤word를 각각 다른 문장에 분산 배치. 문법포인트: 수동태/관계대명사/분사/to부정사/수일치 다양하게.\n반드시 JSON 배열로만 출력:\n[{\"type\":\"어법 판단\",\"passage\":\"지문(220단어이상)\",\"choices\":[\"①w\",\"②w\",\"③w\",\"④w\",\"⑤w\"],\"answer\":0,\"explanation\":\"해설\",\"wrong_explanations\":{},\"_type\":\"grammar\",\"given_sentence\":null}]",
    "vocab": "한국 수능 영어 어휘 적절성 문제를 5개 생성하세요.\n★필수: 지문 220~260단어, 10~14문장. 학술 소재. 학술어휘 4~6개. ①word/②word/③word/④word/⑤word를 각각 다른 문장에 분산. 부적절한 어휘 1개는 반의어 함정.\n반드시 JSON 배열로만 출력:\n[{\"type\":\"어휘 적절성\",\"passage\":\"지문(220단어이상)\",\"choices\":[\"①w\",\"②w\",\"③w\",\"④w\",\"⑤w\"],\"answer\":0,\"explanation\":\"해설\",\"wrong_explanations\":{},\"_type\":\"vocab\",\"given_sentence\":null}]",
    "main_idea": "한국 수능 영어 요지/주제 파악 문제를 5개 생성하세요.\n★필수: 지문 200~250단어, 9~13문장. 학술 소재. perspective,consequence,fundamental 등 학술어휘 3~5개. 선택지 5개(한국어 20~40자).\n반드시 JSON 배열로만 출력:\n[{\"type\":\"요지/주제\",\"passage\":\"지문(200단어이상)\",\"choices\":[\"①\",\"②\",\"③\",\"④\",\"⑤\"],\"answer\":0,\"explanation\":\"해설\",\"wrong_explanations\":{},\"_type\":\"main_idea\",\"given_sentence\":null}]",
    "order": "한국 수능 영어 글의 순서 문제를 5개 생성하세요.\n★필수: 도입부2~3문장+(A)(B)(C)각3~4문장, 총 220~260단어. 학술 소재. 학술어휘 4~6개. 각 단락에 접속사(However/Therefore)나 지시어(this/such) 순서단서 포함.\n반드시 JSON 배열로만 출력:\n[{\"type\":\"글의 순서\",\"passage\":\"도입부\\n(A)...\\n(B)...\\n(C)...(220단어이상)\",\"choices\":[\"①(A)-(C)-(B)\",\"②(B)-(A)-(C)\",\"③(B)-(C)-(A)\",\"④(C)-(A)-(B)\",\"⑤(C)-(B)-(A)\"],\"answer\":0,\"explanation\":\"해설\",\"wrong_explanations\":{},\"_type\":\"order\",\"given_sentence\":null}]",
}

def call_api_for_refresh(prompt):
    """서버 측 API 호출 (문제 생성용)"""
    if not SERVER_API_KEY:
        return None
    req_body = json.dumps({
        "model": "claude-haiku-4-5",
        "max_tokens": 4096,
        "messages": [{"role": "user", "content": prompt}],
    }).encode("utf-8")
    req = urllib.request.Request(
        "https://api.anthropic.com/v1/messages",
        data=req_body,
        headers={
            "Content-Type": "application/json",
            "x-api-key": SERVER_API_KEY,
            "anthropic-version": "2023-06-01",
        },
        method="POST"
    )
    ctx = ssl.create_default_context()
    try:
        import certifi
        ctx.load_verify_locations(certifi.where())
    except ImportError:
        pass
    try:
        resp = urllib.request.urlopen(req, context=ctx, timeout=120)
    except ssl.SSLCertVerificationError:
        ctx = ssl._create_unverified_context()
        resp = urllib.request.urlopen(req, context=ctx, timeout=120)
    result = json.loads(resp.read())
    return result["content"][0]["text"]

def parse_json_array(text):
    start = text.find("[")
    end = text.rfind("]") + 1
    if start < 0 or end <= 0:
        return []
    try:
        return json.loads(text[start:end])
    except json.JSONDecodeError:
        return []

def refresh_questions():
    """100문제를 새로 생성하여 questions.js의 절반을 교체"""
    while True:
        try:
            # 다음 교체까지 대기
            time.sleep(REFRESH_INTERVAL)
            if not SERVER_API_KEY:
                continue

            print(f"\n🔄 [{datetime.now().strftime('%Y-%m-%d %H:%M')}] 문제은행 교체 시작 (100문제)")

            # 기존 문제 로드
            if not os.path.exists(QUESTIONS_PATH):
                continue
            with open(QUESTIONS_PATH, 'r', encoding='utf-8') as f:
                content = f.read()
            start = content.find("[")
            end = content.rfind("]") + 1
            if start < 0:
                continue
            existing = json.loads(content[start:end])

            # 유형별 ~17문제씩 생성 (6유형 × 17 ≈ 100)
            new_questions = []
            types_list = list(TYPES_FOR_REFRESH.items())
            for type_key, prompt in types_list:
                target = 17 if type_key in ['blank', 'order'] else 16
                generated = 0
                attempts = 0
                while generated < target and attempts < 5:
                    attempts += 1
                    try:
                        result = call_api_for_refresh(prompt)
                        if not result:
                            break
                        questions = parse_json_array(result)
                        for q in questions:
                            if '_type' not in q:
                                q['_type'] = type_key
                            if 'given_sentence' not in q:
                                q['given_sentence'] = None
                            if 'wrong_explanations' not in q:
                                q['wrong_explanations'] = {}
                        new_questions.extend(questions)
                        generated += len(questions)
                        print(f"  ✅ {type_key}: +{len(questions)} (총 {generated}/{target})")
                    except Exception as e:
                        print(f"  ⚠️ {type_key} 생성 실패: {e}")
                    time.sleep(1)

            if len(new_questions) < 50:
                print(f"  ❌ 생성 부족 ({len(new_questions)}문제) — 교체 취소")
                continue

            # 기존 문제에 새 문제 추가 (대체 아님)
            updated = existing + new_questions[:REFRESH_COUNT]

            # questions.js 덮어쓰기
            js_content = f"// Prof.AI 수능영어 문제은행 — {len(updated)}문제\n"
            js_content += f"// 마지막 추가: {datetime.now().strftime('%Y-%m-%d %H:%M')}\n"
            js_content += f"const QUESTION_BANK = {json.dumps(updated, ensure_ascii=False, indent=2)};\n"

            with open(QUESTIONS_PATH, 'w', encoding='utf-8') as f:
                f.write(js_content)

            print(f"  🎉 추가 완료! 기존 {len(existing)} + 신규 {len(new_questions[:REFRESH_COUNT])} = {len(updated)}문제")
            load_question_bank()  # 서버 메모리도 갱신

            # 신규 문제를 감수용 파일에도 추가
            sample_path = os.path.join(os.path.dirname(__file__), 'questions_sample.js')
            try:
                sample_existing = []
                if os.path.exists(sample_path):
                    with open(sample_path, 'r', encoding='utf-8') as sf:
                        sc = sf.read()
                    ss = sc.find('['); se = sc.rfind(']') + 1
                    if ss >= 0 and se > 0:
                        sample_existing = json.loads(sc[ss:se])
                sample_updated = sample_existing + new_questions[:REFRESH_COUNT]
                sample_js = f"// Prof.AI 감수용 문제 — {len(sample_updated)}문제\n"
                sample_js += f"// 마지막 추가: {datetime.now().strftime('%Y-%m-%d %H:%M')}\n"
                sample_js += f"const QUESTION_BANK = {json.dumps(sample_updated, ensure_ascii=False, indent=2)};\n"
                with open(sample_path, 'w', encoding='utf-8') as sf:
                    sf.write(sample_js)
                print(f"  📋 감수용에도 추가: {len(sample_updated)}문제 (신규 {len(new_questions[:REFRESH_COUNT])})")
            except Exception as se:
                print(f"  ⚠️ 감수용 파일 업데이트 실패: {se}")

        except Exception as e:
            print(f"  ❌ 문제은행 교체 오류: {e}")

if __name__ == '__main__':
    server = http.server.HTTPServer(('0.0.0.0', PORT), AppHandler)
    if SERVER_API_KEY:
        print(f"🔑 서버 API 키 설정됨 (학생 키 입력 불필요)")
        print(f"📊 일일 사용 제한: 인당 {DAILY_LIMIT}회")
        # 문제은행 자동 교체 스레드 시작
        refresh_thread = threading.Thread(target=refresh_questions, daemon=True)
        refresh_thread.start()
        print(f"🔄 문제은행 자동 추가: {REFRESH_INTERVAL//3600//24}일마다 {REFRESH_COUNT}문제 누적")
    else:
        print(f"⚠️  서버 API 키 없음 (학생이 직접 키 입력 필요)")
    print(f"🚀 Prof.AI 수능영어 서버 시작: http://localhost:{PORT}")
    print(f"   종료: Ctrl+C")
    server.serve_forever()
