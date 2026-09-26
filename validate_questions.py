#!/usr/bin/env python3
"""
Prof.AI 문제 난이도 검증 시스템
— 실제 수능 기출과 AI 생성 문제를 비교 분석
"""
import json
import os
import re
import math

# ═══════════════════════════════════════
# 수능 기출 기준 데이터 (2022~2024 평균)
# ═══════════════════════════════════════
SUNEUNG_STANDARDS = {
    "blank": {  # 33번 빈칸추론
        "name": "빈칸 추론",
        "passage_words": (180, 250),      # 지문 단어 수 범위
        "avg_word_length": (4.8, 5.8),    # 평균 단어 길이
        "sentence_count": (8, 15),         # 문장 수
        "avg_sentence_length": (15, 25),   # 평균 문장 길이 (단어)
        "academic_ratio": (0.08, 0.18),    # 학술 어휘 비율
        "expected_accuracy": (30, 55),     # 기대 정답률 (%)
        "difficulty": "상",
    },
    "insert": {  # 38번 문장삽입
        "name": "문장 삽입",
        "passage_words": (180, 250),
        "avg_word_length": (4.5, 5.5),
        "sentence_count": (8, 14),
        "avg_sentence_length": (14, 22),
        "academic_ratio": (0.06, 0.15),
        "expected_accuracy": (35, 60),
        "difficulty": "중상",
    },
    "grammar": {  # 29번 어법
        "name": "어법 판단",
        "passage_words": (180, 250),
        "avg_word_length": (4.5, 5.5),
        "sentence_count": (8, 14),
        "avg_sentence_length": (14, 22),
        "academic_ratio": (0.05, 0.12),
        "expected_accuracy": (45, 70),
        "difficulty": "중",
    },
    "vocab": {  # 30번 어휘
        "name": "어휘 적절성",
        "passage_words": (180, 250),
        "avg_word_length": (4.5, 5.5),
        "sentence_count": (8, 14),
        "avg_sentence_length": (14, 22),
        "academic_ratio": (0.05, 0.12),
        "expected_accuracy": (45, 70),
        "difficulty": "중",
    },
    "main_idea": {  # 22번 요지
        "name": "요지/주제",
        "passage_words": (150, 220),
        "avg_word_length": (4.3, 5.3),
        "sentence_count": (7, 13),
        "avg_sentence_length": (13, 21),
        "academic_ratio": (0.04, 0.10),
        "expected_accuracy": (55, 80),
        "difficulty": "하",
    },
    "order": {  # 36번 순서
        "name": "글의 순서",
        "passage_words": (170, 240),
        "avg_word_length": (4.5, 5.5),
        "sentence_count": (8, 14),
        "avg_sentence_length": (13, 22),
        "academic_ratio": (0.05, 0.12),
        "expected_accuracy": (40, 65),
        "difficulty": "중",
    },
}

# 수능 빈출 학술 어휘 (AWL - Academic Word List 일부)
ACADEMIC_WORDS = set([
    "abstract", "acknowledge", "acquire", "adapt", "adequate", "alternative",
    "analyze", "anticipate", "apparent", "appreciate", "approach", "appropriate",
    "assert", "assess", "assume", "attribute", "capacity", "challenge",
    "circumstance", "cognitive", "coincide", "communicate", "community",
    "compensate", "complex", "component", "comprehensive", "conceive",
    "conclude", "conflict", "conscious", "consequence", "considerable",
    "consist", "constant", "constitute", "construct", "contemporary",
    "context", "contribute", "conventional", "convince", "correspond",
    "crucial", "cultural", "decline", "demonstrate", "deny", "derive",
    "despite", "dimension", "diminish", "distinct", "diverse", "domain",
    "domestic", "dominant", "dramatic", "eliminate", "emerge", "emphasis",
    "enable", "encounter", "enhance", "enormous", "ensure", "environment",
    "establish", "evaluate", "evidence", "evolve", "exceed", "exclude",
    "exhibit", "expand", "explicit", "exploit", "external", "facilitate",
    "factor", "feature", "fundamental", "generate", "hypothesis",
    "identify", "ignorance", "illustrate", "implication", "implicit",
    "impose", "incentive", "incorporate", "indicate", "individual",
    "inevitable", "influence", "inherent", "initial", "instance",
    "integrate", "interact", "internal", "interpret", "invest",
    "investigate", "involve", "isolate", "justify", "maintain",
    "manifest", "manipulate", "mechanism", "merely", "modify",
    "monitor", "nevertheless", "notion", "obtain", "obvious",
    "occupy", "occur", "outcome", "overall", "parallel", "participate",
    "perceive", "perspective", "phenomenon", "pose", "potential",
    "predominant", "presumably", "previous", "primarily", "principle",
    "priority", "proceed", "proportion", "pursue", "radical",
    "rational", "reinforce", "relevant", "reluctant", "rely",
    "require", "resolve", "resource", "respond", "restrict",
    "reveal", "revenue", "reverse", "rigid", "robust",
    "seek", "significant", "simulate", "sole", "sophisticated",
    "specific", "stable", "strategy", "structural", "subsequent",
    "substantial", "sufficient", "sustain", "symbolic", "tendency",
    "theme", "thereby", "threaten", "transform", "transmit",
    "trigger", "ultimate", "undergo", "underlie", "undertake",
    "uniform", "unique", "utilize", "valid", "vary", "whereby",
])


def analyze_passage(passage):
    """지문을 분석하여 정량적 지표 추출"""
    # HTML/특수문자 제거
    clean = re.sub(r'<[^>]+>', '', passage)
    clean = re.sub(r'[①②③④⑤\(\)\[\]___]', '', clean)
    clean = re.sub(r'\s+', ' ', clean).strip()

    # 단어 추출
    words = re.findall(r"[a-zA-Z']+", clean)
    if not words:
        return None

    # 문장 추출
    sentences = re.split(r'[.!?]+', clean)
    sentences = [s.strip() for s in sentences if len(s.strip()) > 5]

    word_count = len(words)
    avg_word_len = sum(len(w) for w in words) / word_count if word_count else 0
    sentence_count = len(sentences)
    avg_sentence_len = word_count / sentence_count if sentence_count else 0

    # 학술 어휘 비율
    academic_count = sum(1 for w in words if w.lower() in ACADEMIC_WORDS)
    academic_ratio = academic_count / word_count if word_count else 0

    # 어휘 다양성 (Type-Token Ratio)
    unique_words = set(w.lower() for w in words)
    ttr = len(unique_words) / word_count if word_count else 0

    # 긴 단어 비율 (7자 이상)
    long_word_ratio = sum(1 for w in words if len(w) >= 7) / word_count if word_count else 0

    return {
        "word_count": word_count,
        "avg_word_length": round(avg_word_len, 2),
        "sentence_count": sentence_count,
        "avg_sentence_length": round(avg_sentence_len, 2),
        "academic_ratio": round(academic_ratio, 3),
        "ttr": round(ttr, 3),
        "long_word_ratio": round(long_word_ratio, 3),
    }


def validate_question(question, standards):
    """개별 문제를 수능 기준과 비교 검증"""
    q_type = question.get("_type", "")
    if q_type not in standards:
        return {"valid": False, "reason": f"알 수 없는 유형: {q_type}"}

    std = standards[q_type]
    passage = question.get("passage", "")
    analysis = analyze_passage(passage)

    if not analysis:
        return {"valid": False, "reason": "지문 분석 실패", "type": q_type}

    issues = []
    score = 100  # 100점 만점

    # 1. 단어 수 체크
    wmin, wmax = std["passage_words"]
    if analysis["word_count"] < wmin * 0.8:
        issues.append(f"지문 너무 짧음 ({analysis['word_count']}단어, 기준 {wmin}~{wmax})")
        score -= 20
    elif analysis["word_count"] > wmax * 1.2:
        issues.append(f"지문 너무 김 ({analysis['word_count']}단어, 기준 {wmin}~{wmax})")
        score -= 10

    # 2. 평균 단어 길이
    awl_min, awl_max = std["avg_word_length"]
    if analysis["avg_word_length"] < awl_min - 0.5:
        issues.append(f"어휘 수준 낮음 (평균 {analysis['avg_word_length']}자, 기준 {awl_min}~{awl_max})")
        score -= 15
    elif analysis["avg_word_length"] > awl_max + 0.5:
        issues.append(f"어휘 수준 높음 (평균 {analysis['avg_word_length']}자)")
        score -= 5

    # 3. 문장 수
    smin, smax = std["sentence_count"]
    if analysis["sentence_count"] < smin - 2:
        issues.append(f"문장 수 부족 ({analysis['sentence_count']}문장, 기준 {smin}~{smax})")
        score -= 10
    elif analysis["sentence_count"] > smax + 3:
        issues.append(f"문장 수 과다 ({analysis['sentence_count']}문장)")
        score -= 5

    # 4. 평균 문장 길이
    asl_min, asl_max = std["avg_sentence_length"]
    if analysis["avg_sentence_length"] < asl_min - 3:
        issues.append(f"문장 너무 짧음 (평균 {analysis['avg_sentence_length']}단어/문장)")
        score -= 15
    elif analysis["avg_sentence_length"] > asl_max + 5:
        issues.append(f"문장 너무 김 (평균 {analysis['avg_sentence_length']}단어/문장)")
        score -= 10

    # 5. 학술 어휘 비율
    ar_min, ar_max = std["academic_ratio"]
    if analysis["academic_ratio"] < ar_min * 0.5:
        issues.append(f"학술 어휘 부족 ({analysis['academic_ratio']*100:.1f}%, 기준 {ar_min*100:.0f}~{ar_max*100:.0f}%)")
        score -= 15
    elif analysis["academic_ratio"] > ar_max * 1.5:
        issues.append(f"학술 어휘 과다 ({analysis['academic_ratio']*100:.1f}%)")
        score -= 5

    # 6. 선택지 수 체크
    choices = question.get("choices", [])
    if len(choices) != 5:
        issues.append(f"선택지 수 부적절 ({len(choices)}개, 기준 5개)")
        score -= 20

    # 7. 정답 인덱스 체크
    answer = question.get("answer", -1)
    if answer < 0 or answer >= len(choices):
        issues.append(f"정답 인덱스 오류 ({answer})")
        score -= 30

    # 8. 해설 유무
    if not question.get("explanation"):
        issues.append("해설 없음")
        score -= 10

    # 등급 판정
    if score >= 85:
        grade = "A (수능 부합)"
    elif score >= 70:
        grade = "B (양호)"
    elif score >= 50:
        grade = "C (보통)"
    else:
        grade = "D (개선 필요)"

    return {
        "valid": score >= 50,
        "score": max(0, score),
        "grade": grade,
        "type": q_type,
        "type_name": std["name"],
        "difficulty": std["difficulty"],
        "analysis": analysis,
        "issues": issues,
    }


def validate_question_bank(questions_path):
    """전체 문제은행 검증"""
    print("=" * 60)
    print("  Prof.AI 문제은행 난이도 검증 리포트")
    print("  (수능 기출 2022~2024 기준)")
    print("=" * 60)

    # 문제 로드
    with open(questions_path, 'r', encoding='utf-8') as f:
        content = f.read()
    start = content.find("[")
    end = content.rfind("]") + 1
    questions = json.loads(content[start:end])

    print(f"\n총 문제 수: {len(questions)}")

    # 유형별 분석
    type_results = {}
    all_results = []

    for i, q in enumerate(questions):
        result = validate_question(q, SUNEUNG_STANDARDS)
        all_results.append(result)

        q_type = result.get("type", "unknown")
        if q_type not in type_results:
            type_results[q_type] = {"scores": [], "issues": [], "grades": {"A": 0, "B": 0, "C": 0, "D": 0}}
        type_results[q_type]["scores"].append(result.get("score", 0))
        type_results[q_type]["issues"].extend(result.get("issues", []))
        grade_letter = result.get("grade", "D")[0]
        type_results[q_type]["grades"][grade_letter] += 1

    # 유형별 리포트
    print("\n" + "─" * 60)
    print("  유형별 분석")
    print("─" * 60)

    total_a, total_b, total_c, total_d = 0, 0, 0, 0

    for q_type, data in sorted(type_results.items()):
        std = SUNEUNG_STANDARDS.get(q_type, {})
        scores = data["scores"]
        avg_score = sum(scores) / len(scores) if scores else 0
        g = data["grades"]
        total_a += g["A"]; total_b += g["B"]; total_c += g["C"]; total_d += g["D"]

        print(f"\n  [{std.get('name', q_type)}] (수능 난이도: {std.get('difficulty', '?')})")
        print(f"  문제 수: {len(scores)}")
        print(f"  평균 점수: {avg_score:.1f}/100")
        print(f"  등급 분포: A({g['A']}) B({g['B']}) C({g['C']}) D({g['D']})")

        # 주요 이슈 집계
        issue_counts = {}
        for issue in data["issues"]:
            key = issue.split("(")[0].strip()
            issue_counts[key] = issue_counts.get(key, 0) + 1
        if issue_counts:
            top_issues = sorted(issue_counts.items(), key=lambda x: -x[1])[:3]
            print(f"  주요 이슈: {', '.join(f'{k}({v}건)' for k,v in top_issues)}")

    # 전체 요약
    total = len(all_results)
    overall_avg = sum(r.get("score", 0) for r in all_results) / total if total else 0

    print("\n" + "═" * 60)
    print("  전체 요약")
    print("═" * 60)
    print(f"  총 문제: {total}")
    print(f"  평균 점수: {overall_avg:.1f}/100")
    print(f"  등급 분포:")
    print(f"    A (수능 부합): {total_a} ({total_a/total*100:.0f}%)")
    print(f"    B (양호):      {total_b} ({total_b/total*100:.0f}%)")
    print(f"    C (보통):      {total_c} ({total_c/total*100:.0f}%)")
    print(f"    D (개선 필요): {total_d} ({total_d/total*100:.0f}%)")
    print(f"  합격률 (A+B):    {(total_a+total_b)/total*100:.0f}%")
    print("═" * 60)

    # D등급 문제 상세
    d_questions = [(i, r) for i, r in enumerate(all_results) if r.get("grade", "D")[0] == "D" and len(r.get("grade", "")) > 0]
    if d_questions:
        print(f"\n⚠️ D등급 문제 상세 ({len(d_questions)}건):")
        for idx, r in d_questions[:10]:
            print(f"  문제 #{idx+1} [{r.get('type_name','')}] 점수:{r.get('score',0)} — {', '.join(r.get('issues',[]))}")

    return all_results


if __name__ == "__main__":
    questions_path = os.path.join(os.path.dirname(__file__), "questions.js")
    if os.path.exists(questions_path):
        validate_question_bank(questions_path)
    else:
        print("questions.js 파일이 없습니다.")
