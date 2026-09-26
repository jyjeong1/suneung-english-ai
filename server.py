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
            }).encode())
            return
        super().do_GET()

    def do_POST(self):
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
REFRESH_INTERVAL = 2 * 24 * 3600  # 2일 (초)
REFRESH_COUNT = 100  # 교체할 문제 수
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

            # 기존 200문제 중 뒤쪽 100문제를 새 문제로 교체
            keep = existing[:REFRESH_COUNT]  # 앞 100문제 유지
            updated = keep + new_questions[:REFRESH_COUNT]  # 뒤 100문제 교체

            # questions.js 덮어쓰기
            js_content = f"// Prof.AI 수능영어 문제은행 — {len(updated)}문제\n"
            js_content += f"// 마지막 교체: {datetime.now().strftime('%Y-%m-%d %H:%M')}\n"
            js_content += f"const QUESTION_BANK = {json.dumps(updated, ensure_ascii=False, indent=2)};\n"

            with open(QUESTIONS_PATH, 'w', encoding='utf-8') as f:
                f.write(js_content)

            print(f"  🎉 교체 완료! {len(keep)}(유지) + {len(new_questions[:REFRESH_COUNT])}(신규) = {len(updated)}문제")

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
        print(f"🔄 문제은행 자동 교체: {REFRESH_INTERVAL//3600}시간마다 {REFRESH_COUNT}문제")
    else:
        print(f"⚠️  서버 API 키 없음 (학생이 직접 키 입력 필요)")
    print(f"🚀 Prof.AI 수능영어 서버 시작: http://localhost:{PORT}")
    print(f"   종료: Ctrl+C")
    server.serve_forever()
