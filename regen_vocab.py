#!/usr/bin/env python3
"""어휘 적절성 8문제 재생성 — 반의어 함정 강화"""
import json, urllib.request, ssl, time, re, os

API_KEY = os.environ.get("CLAUDE_API_KEY", "")

PROMPT = """한국 수능 영어 어휘 적절성 (30번 스타일) 문제를 5개 생성하세요.

이 유형의 핵심: 지문에서 밑줄 친 5개 어휘 중 문맥상 부적절한 것 1개를 고르는 문제입니다.

★★★ 가장 중요한 규칙 ★★★
정답(부적절한 어휘)은 반드시 해당 위치에 반의어/반대 의미가 들어가 있어야 합니다.
예시:
- 문맥상 "증가시키다"가 맞는데 "감소시키다(decrease)"가 적혀 있는 경우
- 문맥상 "촉진하다"가 맞는데 "억제하다(inhibit)"가 적혀 있는 경우
- 문맥상 "협력"이 맞는데 "경쟁(competition)"이 적혀 있는 경우

★ 오답(적절한 어휘 4개)은 문맥에 완벽하게 맞아야 합니다. 조금이라도 어색하면 안 됩니다.
★ 정답(부적절한 어휘 1개)은 문맥과 명백하게 반대되어야 합니다. 미묘한 차이가 아닌, 확실한 반의어여야 합니다.

작성 과정:
1. 먼저 모든 단어가 문맥상 적절한 완벽한 지문을 작성합니다.
2. 그 중 1개의 단어를 그 단어의 반의어로 교체합니다.
3. 교체된 반의어가 문맥과 명백히 모순되는지 확인합니다.

요구사항:
- 각 지문: 180~220단어 영어, 학술적 소재
- 밑줄 친 어휘 5개를 ①word ②word ③word ④word ⑤word 형식으로 지문 안에 표시
- 그 중 문맥상 부적절한 것 1개 (반의어가 들어가 있음)
- 해설에 반드시 포함: (1) 왜 부적절한지, (2) 어떤 단어가 적절한지(원래 단어), (3) 나머지 4개는 왜 적절한지
- 정답 번호(answer)를 0부터 세어 정확히 표기 (①=0, ②=1, ③=2, ④=3, ⑤=4)
- 5개 문제의 소재가 서로 겹치지 않게

반드시 아래 JSON 배열 형식으로만 출력하세요 (다른 텍스트 없이):
[
  {
    "type": "어휘 적절성",
    "passage": "지문 (밑줄 어휘를 ①word ②word ③word ④word ⑤word로 표시)",
    "choices": ["①word1", "②word2", "③word3", "④word4", "⑤word5"],
    "answer": 0,
    "explanation": "정답 해설 (한국어). ①word1은 문맥상 '~하다'가 적절한데 반의어인 'word1(~하다)'이 사용되었으므로 부적절하다. 적절한 단어: antonym. 나머지 ②③④⑤는 각각 문맥에 적합하다.",
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
        return []


all_qs = []
for batch in range(1, 5):
    print(f"배치 {batch} 생성 중...")
    try:
        result = call_api(PROMPT)
        qs = safe_parse(result)
        for q in qs:
            q["_type"] = "vocab"
            if "given_sentence" not in q:
                q["given_sentence"] = None
            if "wrong_explanations" not in q:
                q["wrong_explanations"] = {}
        all_qs.extend(qs)
        print(f"  ✅ {len(qs)}문제 (총 {len(all_qs)})")
    except Exception as ex:
        print(f"  ❌ 에러: {ex}")
    if len(all_qs) >= 8:
        break
    time.sleep(1)

all_qs = all_qs[:8]
print(f"\n어휘 적절성 {len(all_qs)}문제 생성 완료")

# 해설에 반의어 정보 있는지 확인
for i, q in enumerate(all_qs):
    print(f"  #{i+1} 정답: {q['choices'][q['answer']]} | 해설: {q['explanation'][:60]}...")

# 기존 questions_50.js 로드 후 vocab 교체
with open("questions_50.js", "r") as f:
    text = f.read()
s2 = text.find("[")
e2 = text.rfind("]") + 1
bank = json.loads(text[s2:e2])

non_vocab = [q for q in bank if q.get("_type") != "vocab"]
new_bank = []
# 원래 순서 유지: blank → insert → grammar → vocab → main_idea → order
type_order = ["blank", "insert", "grammar", "vocab", "main_idea", "order"]
by_type = {}
for q in non_vocab:
    t = q["_type"]
    if t not in by_type:
        by_type[t] = []
    by_type[t].append(q)
by_type["vocab"] = all_qs

for t in type_order:
    new_bank.extend(by_type.get(t, []))

js = "// Prof.AI 문제은행 — 50문제 (6개 분야)\n"
js += "// 빈칸 추론 9(고난도), 문장 삽입 8, 어법 판단 9, 어휘 적절성 8(반의어 강화), 요지/주제 8, 글의 순서 8\n"
js += f"// 생성일: 2026-10-01 (어휘 적절성 재생성)\n"
js += f"const QUESTION_BANK = {json.dumps(new_bank, ensure_ascii=False, indent=2)};\n"

with open("questions_50.js", "w") as f:
    f.write(js)
print(f"\nquestions_50.js 업데이트 완료 ({len(new_bank)}문제)")
