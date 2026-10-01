#!/usr/bin/env python3
"""빈칸 추론 고난도 재생성"""
import json, urllib.request, ssl, time, re, os

API_KEY = os.environ.get("CLAUDE_API_KEY", "")

PROMPT = """한국 수능 영어 빈칸 추론 고난도 문제를 5개 생성하세요.

이것은 수능 33번 킬러 문항 수준입니다. 1등급 변별용 최고난도입니다.

핵심 요구사항:
- 각 지문: 200~240단어, 추상적·철학적·학술적 소재
- 소재: 인식론, 언어철학, 사회심리학, 과학철학, 인지과학, 미학, 정치철학, 경제행동학 등 추상적 주제
- 빈칸: 지문의 핵심 논지를 함축하는 추상적 표현 (구체적 단어가 아닌 개념적 구문)
- 빈칸 위치: 지문 중간~후반부의 핵심 주장 문장
- 선택지: 5개 모두 그럴듯해야 함 (정답과 오답의 차이가 미묘)
- 오답 함정: 지문에 나온 단어를 활용하되 논리적으로 미묘하게 틀린 선택지
- 정답은 지문의 전체 논리 흐름을 파악해야만 고를 수 있어야 함
- 단순 어휘 대입이 아닌 논리적 추론이 필요한 수준

난이도 기준:
- 정답률 25~35% (수능 33번 실제 정답률 수준)
- 지문을 대충 읽으면 오답을 고르게 되는 구조
- 핵심 논지의 역설적·반직관적 주장 포함

반드시 아래 JSON 배열 형식으로만 출력하세요 (다른 텍스트 없이):
[
  {
    "type": "빈칸 추론",
    "passage": "지문 (빈칸을 ___________로 표시)",
    "choices": ["①선택지1","②선택지2","③선택지3","④선택지4","⑤선택지5"],
    "answer": 0,
    "explanation": "정답 해설 (한국어, 왜 다른 선택지가 틀렸는지 포함)",
    "wrong_explanations": {}
  }
]"""


def call_api(prompt):
    body = json.dumps({
        "model": "claude-haiku-4-5",
        "max_tokens": 4096,
        "messages": [{"role": "user", "content": prompt}],
    }).encode()
    req = urllib.request.Request(
        "https://api.anthropic.com/v1/messages", data=body,
        headers={"Content-Type": "application/json", "x-api-key": API_KEY, "anthropic-version": "2023-06-01"},
        method="POST",
    )
    ctx = ssl._create_unverified_context()
    resp = urllib.request.urlopen(req, context=ctx, timeout=120)
    return json.loads(resp.read())["content"][0]["text"]


def safe_parse(text):
    # ```json ... ``` 마크다운 제거
    text = re.sub(r'```json\s*', '', text)
    text = re.sub(r'```\s*$', '', text)
    s = text.find("[")
    e = text.rfind("]") + 1
    if s < 0 or e <= 0:
        return []
    raw = text[s:e]
    try:
        return json.loads(raw)
    except json.JSONDecodeError as ex:
        print(f"  ⚠️ JSON 파싱 실패: {ex}")
        # 줄바꿈 이스케이프 시도
        raw2 = raw.replace('\n', '\\n').replace('\t', '\\t')
        try:
            return json.loads(raw2)
        except:
            print(f"  ⚠️ 재시도도 실패")
            return []


all_qs = []
for batch in range(1, 5):
    print(f"배치 {batch} 생성 중...")
    try:
        result = call_api(PROMPT)
        qs = safe_parse(result)
        for q in qs:
            q["_type"] = "blank"
            if "given_sentence" not in q:
                q["given_sentence"] = None
            if "wrong_explanations" not in q:
                q["wrong_explanations"] = {}
        all_qs.extend(qs)
        print(f"  ✅ {len(qs)}문제 (총 {len(all_qs)})")
    except Exception as ex:
        print(f"  ❌ 에러: {ex}")
    if len(all_qs) >= 9:
        break
    time.sleep(1)

all_qs = all_qs[:9]
print(f"\n고난도 빈칸추론 {len(all_qs)}문제 생성 완료")

# 기존 questions_50.js 로드 후 blank 교체
with open("questions_50.js", "r") as f:
    text = f.read()
s2 = text.find("[")
e2 = text.rfind("]") + 1
bank = json.loads(text[s2:e2])

non_blank = [q for q in bank if q.get("_type") != "blank"]
new_bank = all_qs + non_blank

js = "// Prof.AI 문제은행 — 50문제 (6개 분야)\n"
js += "// 빈칸 추론 9문제(고난도 킬러), 문장 삽입 8, 어법 판단 9, 어휘 적절성 8, 요지/주제 8, 글의 순서 8\n"
js += f"// 생성일: 2026-10-01 (빈칸 고난도 재생성)\n"
js += f"const QUESTION_BANK = {json.dumps(new_bank, ensure_ascii=False, indent=2)};\n"

with open("questions_50.js", "w") as f:
    f.write(js)
print(f"questions_50.js 업데이트 완료 ({len(new_bank)}문제)")
