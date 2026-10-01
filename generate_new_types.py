#!/usr/bin/env python3
"""빠진 6개 유형 30문제 생성"""
import json, urllib.request, ssl, time, re, os

API_KEY = os.environ.get("CLAUDE_API_KEY", "")

TYPES = {
    "purpose": {
        "name": "글의 목적",
        "count": 5,
        "prompt": """한국 수능 영어 글의 목적 (18번 스타일) 문제를 5개 생성하세요.

요구사항:
- 각 지문: 150~200단어 영어, 편지/이메일/공지/안내문 형식
- "다음 글의 목적으로 가장 적절한 것은?" 형식
- 선택지: 5개 (한국어), 정답 1 + 매력적 오답 4
- 글의 목적 예시: 불만 제기, 감사 표현, 행사 안내, 도움 요청, 추천, 사과, 초대 등
- 난이도: 수능 18번 수준 (기본)
- 5개 문제의 소재가 서로 겹치지 않게

반드시 아래 JSON 배열 형식으로만 출력하세요 (다른 텍스트 없이):
[
  {
    "type": "글의 목적",
    "passage": "지문",
    "choices": ["①한국어 선택지1","②한국어 선택지2","③한국어 선택지3","④한국어 선택지4","⑤한국어 선택지5"],
    "answer": 0,
    "explanation": "정답 해설 (한국어)",
    "wrong_explanations": {}
  }
]"""
    },
    "mood": {
        "name": "심경 추론",
        "count": 5,
        "prompt": """한국 수능 영어 심경/분위기 추론 (19번 스타일) 문제를 5개 생성하세요.

요구사항:
- 각 지문: 180~220단어 영어, 서사적/묘사적 지문 (소설/에세이 스타일)
- "밑줄 친 부분에 나타난 'I(또는 인물)'의 심경으로 가장 적절한 것은?" 또는 "글에 드러난 분위기로 가장 적절한 것은?"
- 선택지: 5개 (영어 형용사 쌍), 예: ①excited and hopeful ②anxious and frustrated 등
- 감정 변화가 드러나는 서사적 지문
- 난이도: 수능 19번 수준
- 5개 문제의 소재가 서로 겹치지 않게

반드시 아래 JSON 배열 형식으로만 출력하세요 (다른 텍스트 없이):
[
  {
    "type": "심경 추론",
    "passage": "지문",
    "choices": ["①감정1","②감정2","③감정3","④감정4","⑤감정5"],
    "answer": 0,
    "explanation": "정답 해설 (한국어)",
    "wrong_explanations": {}
  }
]"""
    },
    "claim": {
        "name": "필자의 주장",
        "count": 5,
        "prompt": """한국 수능 영어 필자의 주장 (20번 스타일) 문제를 5개 생성하세요.

요구사항:
- 각 지문: 180~220단어 영어, 설득적/논증적 글
- "글에서 필자가 주장하는 바로 가장 적절한 것은?" 형식
- 선택지: 5개 (한국어), 정답 1 + 주제는 비슷하지만 논점이 다른 오답 4
- 소재: 교육, 건강, 환경, 사회, 직장생활 등 실용적 주제
- 난이도: 수능 20번 수준
- 5개 문제의 소재가 서로 겹치지 않게

반드시 아래 JSON 배열 형식으로만 출력하세요 (다른 텍스트 없이):
[
  {
    "type": "필자의 주장",
    "passage": "지문",
    "choices": ["①한국어 선택지1","②한국어 선택지2","③한국어 선택지3","④한국어 선택지4","⑤한국어 선택지5"],
    "answer": 0,
    "explanation": "정답 해설 (한국어)",
    "wrong_explanations": {}
  }
]"""
    },
    "title": {
        "name": "제목 추론",
        "count": 5,
        "prompt": """한국 수능 영어 제목 추론 (24번 스타일) 문제를 5개 생성하세요.

요구사항:
- 각 지문: 180~220단어 영어, 학술적/교양적 소재
- "글의 제목으로 가장 적절한 것은?" 형식
- 선택지: 5개 (영어 제목), 정답 1 + 매력적 오답 4
- 제목은 은유적/함축적 표현 포함 (예: "The Hidden Cost of Perfectionism")
- 오답 제목: 지문의 일부 내용만 반영하거나 핵심을 비껴간 제목
- 난이도: 수능 24번 수준 (중상)
- 5개 문제의 소재가 서로 겹치지 않게

반드시 아래 JSON 배열 형식으로만 출력하세요 (다른 텍스트 없이):
[
  {
    "type": "제목 추론",
    "passage": "지문",
    "choices": ["①영어제목1","②영어제목2","③영어제목3","④영어제목4","⑤영어제목5"],
    "answer": 0,
    "explanation": "정답 해설 (한국어)",
    "wrong_explanations": {}
  }
]"""
    },
    "irrelevant": {
        "name": "무관한 문장",
        "count": 5,
        "prompt": """한국 수능 영어 무관한 문장 (35번 스타일) 문제를 5개 생성하세요.

요구사항:
- 각 지문: 180~220단어 영어, 5개 문장에 ①②③④⑤ 번호 표시
- "글의 흐름과 관계 없는 문장은?" 형식
- 정답인 무관한 문장: 주제와 비슷한 소재이지만 글의 논지와 무관한 내용
- 나머지 4문장: 글의 논리적 흐름에 필수적인 문장
- 무관한 문장은 그 자체로는 의미가 있지만 이 글의 맥락에서 벗어나야 함
- 난이도: 수능 35번 수준 (중)
- 5개 문제의 소재가 서로 겹치지 않게

반드시 아래 JSON 배열 형식으로만 출력하세요 (다른 텍스트 없이):
[
  {
    "type": "무관한 문장",
    "passage": "도입부 문장들. ①문장1 ②문장2 ③문장3 ④문장4 ⑤문장5",
    "choices": ["①","②","③","④","⑤"],
    "answer": 0,
    "explanation": "정답 해설 (한국어, 왜 이 문장이 무관한지 설명)",
    "wrong_explanations": {}
  }
]"""
    },
    "summary": {
        "name": "요약문 완성",
        "count": 5,
        "prompt": """한국 수능 영어 요약문 완성 (40번 스타일) 문제를 5개 생성하세요.

요구사항:
- 각 지문: 200~240단어 영어
- 지문 아래에 요약문: "위 글의 요지를 한 문장으로 요약하고자 한다. 빈칸 (A)와 (B)에 들어갈 말로 가장 적절한 것은?"
- 요약문 형식: "_____(A)_____ ... _____(B)_____." (핵심 내용을 압축한 한 문장)
- 선택지: 5개, 각각 (A)-(B) 쌍으로 구성
- 예시: ①(A) innovative - (B) restrict ②(A) traditional - (B) expand 등
- 난이도: 수능 40번 수준 (중상)
- 5개 문제의 소재가 서로 겹치지 않게

반드시 아래 JSON 배열 형식으로만 출력하세요 (다른 텍스트 없이):
[
  {
    "type": "요약문 완성",
    "passage": "본문 지문",
    "given_sentence": "요약문 (빈칸 (A)와 (B) 포함)",
    "choices": ["①(A) word1 - (B) word2","②(A) word3 - (B) word4","③(A) word5 - (B) word6","④(A) word7 - (B) word8","⑤(A) word9 - (B) word10"],
    "answer": 0,
    "explanation": "정답 해설 (한국어)",
    "wrong_explanations": {}
  }
]"""
    },
}


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


def main():
    all_questions = {}
    total = 0

    for type_key, type_info in TYPES.items():
        all_questions[type_key] = []
        needed = type_info["count"]
        batch_num = 0

        print(f"\n{'='*50}")
        print(f"📝 {type_info['name']} ({needed}문제)")
        print(f"{'='*50}")

        while len(all_questions[type_key]) < needed:
            batch_num += 1
            print(f"  배치 {batch_num}: 생성 중... ({len(all_questions[type_key])}/{needed})")
            try:
                result = call_api(type_info["prompt"])
                questions = safe_parse(result)
                for q in questions:
                    q["_type"] = type_key
                    if "given_sentence" not in q:
                        q["given_sentence"] = None
                    if "wrong_explanations" not in q:
                        q["wrong_explanations"] = {}
                all_questions[type_key].extend(questions)
                print(f"  ✅ {len(questions)}문제 (총 {len(all_questions[type_key])}/{needed})")
            except Exception as e:
                print(f"  ❌ 에러: {e}")
            if len(all_questions[type_key]) >= needed:
                break
            time.sleep(1)

        all_questions[type_key] = all_questions[type_key][:needed]
        total += len(all_questions[type_key])

    # questions_new_types.js 저장
    flat = []
    for key in TYPES:
        flat.extend(all_questions[key])

    js = f"// Prof.AI 신규 유형 — {total}문제\n"
    js += "// " + ", ".join(f"{v['name']} {len(all_questions[k])}" for k, v in TYPES.items()) + "\n"
    js += f"const QUESTION_BANK = {json.dumps(flat, ensure_ascii=False, indent=2)};\n"
    with open("questions_new_types.js", "w") as f:
        f.write(js)

    # 기존 questions.js에 합치기
    with open("questions.js", "r") as f:
        text = f.read()
    s2 = text.find("["); e2 = text.rfind("]") + 1
    existing = json.loads(text[s2:e2])

    merged = existing + flat
    merged_types = {}
    for q in merged:
        t = q.get("_type", "?")
        merged_types[t] = merged_types.get(t, 0) + 1

    js2 = f"// 수능영어AI 문제은행 — {len(merged)}문제\n"
    js2 += "// 유형별: " + ", ".join(f"{t} {c}" for t, c in sorted(merged_types.items())) + "\n"
    js2 += "// 신규 6개 유형 30문제 추가 (2026-10-01)\n"
    js2 += f"const QUESTION_BANK = {json.dumps(merged, ensure_ascii=False, indent=2)};\n"
    with open("questions.js", "w") as f:
        f.write(js2)

    print(f"\n{'='*50}")
    print(f"🎉 완료! 신규 {total}문제 생성")
    for k, v in TYPES.items():
        print(f"  {v['name']}: {len(all_questions[k])}문제")
    print(f"\n문제은행 합계: {len(merged)}문제")
    for t, c in sorted(merged_types.items()):
        print(f"  {t}: {c}")
    print(f"{'='*50}")


if __name__ == "__main__":
    main()
