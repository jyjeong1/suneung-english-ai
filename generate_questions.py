#!/usr/bin/env python3
"""수능 영어 문제은행 200문제 자동 생성 스크립트"""
import json
import urllib.request
import ssl
import time
import os

API_KEY = os.environ.get("CLAUDE_API_KEY", "")  # 환경변수에서 가져오기

TYPES = {
    "blank": {
        "name": "빈칸 추론",
        "count": 34,
        "prompt": """한국 수능 영어 빈칸 추론 (33번 스타일) 문제를 5개 생성하세요.

요구사항:
- 각 지문: 학술적 소재 (심리학/철학/사회학/경제학/인지과학/생물학/역사 중 다양하게), 영어 180~220단어
- 빈칸: 지문의 핵심 주장이 담긴 문장의 일부를 ___________로 표시
- 선택지: 5개 (정답 1 + 매력적 오답 4)
- 난이도: 중간 (고2~고3 수준)
- 5개 문제의 소재가 서로 겹치지 않게

반드시 아래 JSON 배열 형식으로만 출력하세요 (다른 텍스트 없이):
[
  {
    "type": "빈칸 추론",
    "passage": "지문 (빈칸을 ___________로 표시)",
    "choices": ["①선택지1","②선택지2","③선택지3","④선택지4","⑤선택지5"],
    "answer": 0,
    "explanation": "정답 해설 (한국어)",
    "wrong_explanations": {}
  },
  ...
]"""
    },
    "insert": {
        "name": "문장 삽입",
        "count": 33,
        "prompt": """한국 수능 영어 문장 삽입 (38번 스타일) 문제를 5개 생성하세요.

요구사항:
- 각 지문: 180~220단어 영어, (①)(②)(③)(④)(⑤)로 삽입 위치 표시
- 주어진 문장(given_sentence): 접속사/지시어가 포함된 문장
- 정답이 되는 위치가 논리적으로 명확하게
- 난이도: 중간 (고2~고3 수준)
- 5개 문제의 소재가 서로 겹치지 않게

반드시 아래 JSON 배열 형식으로만 출력하세요 (다른 텍스트 없이):
[
  {
    "type": "문장 삽입",
    "passage": "지문 ((①)(②)(③)(④)(⑤)로 위치 표시)",
    "given_sentence": "삽입할 문장",
    "choices": ["①","②","③","④","⑤"],
    "answer": 0,
    "explanation": "정답 해설 (한국어, 접속사/지시어 단서 설명)",
    "wrong_explanations": {}
  },
  ...
]"""
    },
    "grammar": {
        "name": "어법 판단",
        "count": 33,
        "prompt": """한국 수능 영어 어법성 판단 (29번 스타일) 문제를 5개 생성하세요.

요구사항:
- 각 지문: 180~220단어 영어
- 밑줄 친 부분 5개를 ①word/②word/③word/④word/⑤word 형식으로 표시
- 그 중 어법상 틀린 것 1개
- 난이도: 중간 (고2~고3 수준)
- 문법 포인트: 수동태/능동태, 관계대명사, 분사, to부정사/동명사, 주어-동사 수일치 등 다양하게
- 5개 문제의 소재가 서로 겹치지 않게

반드시 아래 JSON 배열 형식으로만 출력하세요 (다른 텍스트 없이):
[
  {
    "type": "어법 판단",
    "passage": "지문 (밑줄 부분을 ①word/②word/③word/④word/⑤word 형식으로)",
    "choices": ["①word1", "②word2", "③word3", "④word4", "⑤word5"],
    "answer": 0,
    "explanation": "정답 해설 (한국어, 문법 규칙 설명)",
    "wrong_explanations": {}
  },
  ...
]"""
    },
    "vocab": {
        "name": "어휘 적절성",
        "count": 33,
        "prompt": """한국 수능 영어 어휘 적절성 (30번 스타일) 문제를 5개 생성하세요.

요구사항:
- 각 지문: 180~220단어 영어
- 밑줄 친 어휘 5개를 ①word/②word/③word/④word/⑤word 형식으로 표시
- 그 중 문맥상 부적절한 것 1개 (반의어 함정)
- 난이도: 중간 (고2~고3 수준)
- 5개 문제의 소재가 서로 겹치지 않게

반드시 아래 JSON 배열 형식으로만 출력하세요 (다른 텍스트 없이):
[
  {
    "type": "어휘 적절성",
    "passage": "지문 (밑줄 어휘를 ①word/②word/③word/④word/⑤word로)",
    "choices": ["①word1", "②word2", "③word3", "④word4", "⑤word5"],
    "answer": 0,
    "explanation": "정답 해설 (한국어, 왜 부적절하고 어떤 단어가 적절한지)",
    "wrong_explanations": {}
  },
  ...
]"""
    },
    "main_idea": {
        "name": "요지/주제",
        "count": 33,
        "prompt": """한국 수능 영어 요지/주제 파악 (22번 스타일) 문제를 5개 생성하세요.

요구사항:
- 각 지문: 180~220단어 영어
- "글의 요지로 가장 적절한 것은?" 형식
- 선택지: 5개 (한국어), 정답 1 + 왜곡 오답 4
- 난이도: 중간 (고2~고3 수준)
- 5개 문제의 소재가 서로 겹치지 않게

반드시 아래 JSON 배열 형식으로만 출력하세요 (다른 텍스트 없이):
[
  {
    "type": "요지/주제",
    "passage": "지문",
    "choices": ["①한국어 선택지1","②한국어 선택지2","③한국어 선택지3","④한국어 선택지4","⑤한국어 선택지5"],
    "answer": 0,
    "explanation": "정답 해설 (한국어)",
    "wrong_explanations": {}
  },
  ...
]"""
    },
    "order": {
        "name": "글의 순서",
        "count": 34,
        "prompt": """한국 수능 영어 글의 순서 (36번 스타일) 문제를 5개 생성하세요.

요구사항:
- 주어진 글 다음에 이어질 순서로 가장 적절한 것을 고르는 문제
- 지문: 도입부 + (A)(B)(C) 세 단락, 총 180~220단어
- 선택지: (A)-(C)-(B), (B)-(A)-(C), (B)-(C)-(A), (C)-(A)-(B), (C)-(B)-(A)
- 난이도: 중간 (고2~고3 수준)
- 5개 문제의 소재가 서로 겹치지 않게

반드시 아래 JSON 배열 형식으로만 출력하세요 (다른 텍스트 없이):
[
  {
    "type": "글의 순서",
    "passage": "도입부\\n\\n(A) ...\\n\\n(B) ...\\n\\n(C) ...",
    "choices": ["①(A)-(C)-(B)","②(B)-(A)-(C)","③(B)-(C)-(A)","④(C)-(A)-(B)","⑤(C)-(B)-(A)"],
    "answer": 0,
    "explanation": "정답 해설 (한국어, 접속사/지시어 단서 설명)",
    "wrong_explanations": {}
  },
  ...
]"""
    },
}

def call_api(prompt):
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
            "x-api-key": API_KEY,
            "anthropic-version": "2023-06-01",
        },
        method="POST",
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


def parse_questions(text):
    """JSON 배열 추출"""
    # [ 로 시작하는 부분 찾기
    start = text.find("[")
    end = text.rfind("]") + 1
    if start < 0 or end <= 0:
        return []
    try:
        return json.loads(text[start:end])
    except json.JSONDecodeError:
        print("  ⚠️ JSON 파싱 실패, 스킵")
        return []


def main():
    all_questions = {}
    total = 0

    for type_key, type_info in TYPES.items():
        all_questions[type_key] = []
        needed = type_info["count"]
        batch_num = 0

        print(f"\n{'='*50}")
        print(f"📝 {type_info['name']} ({needed}문제 목표)")
        print(f"{'='*50}")

        while len(all_questions[type_key]) < needed:
            batch_num += 1
            remaining = needed - len(all_questions[type_key])
            print(f"  배치 {batch_num}: 생성 중... (현재 {len(all_questions[type_key])}/{needed})")

            try:
                result = call_api(type_info["prompt"])
                questions = parse_questions(result)

                for q in questions:
                    q["_type"] = type_key
                    if "given_sentence" not in q:
                        q["given_sentence"] = None
                    if "wrong_explanations" not in q:
                        q["wrong_explanations"] = {}

                all_questions[type_key].extend(questions)
                print(f"  ✅ {len(questions)}문제 생성 (총 {len(all_questions[type_key])}/{needed})")

            except Exception as e:
                print(f"  ❌ 에러: {e}")

            time.sleep(1)  # API 부하 방지

        # 필요한 수만큼만 유지
        all_questions[type_key] = all_questions[type_key][:needed]
        total += len(all_questions[type_key])
        print(f"  🎯 {type_info['name']}: {len(all_questions[type_key])}문제 완료")

    # questions.js 파일 생성
    flat_list = []
    for type_key in TYPES:
        flat_list.extend(all_questions[type_key])

    js_content = f"// 수능영어AI 문제은행 — {total}문제 (자동 생성)\n"
    js_content += f"// 유형별: " + ", ".join(f"{v['name']} {len(all_questions[k])}문제" for k, v in TYPES.items()) + "\n"
    js_content += f"const QUESTION_BANK = {json.dumps(flat_list, ensure_ascii=False, indent=2)};\n"

    output_path = os.path.join(os.path.dirname(__file__), "questions.js")
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(js_content)

    print(f"\n{'='*50}")
    print(f"🎉 완료! 총 {total}문제 생성")
    print(f"📁 저장: {output_path}")
    print(f"📊 파일 크기: {os.path.getsize(output_path) / 1024:.1f} KB")
    print(f"{'='*50}")


if __name__ == "__main__":
    main()
