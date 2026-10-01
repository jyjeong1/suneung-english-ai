#!/usr/bin/env python3
"""
Prof.AI 어법 판단 문제 생성기 — 프로그래밍 기반 오류 삽입
1. AI가 문법 완벽한 지문 생성
2. 코드가 규칙 기반으로 1개 오류 삽입
3. 선지 자동 생성 (본문과 100% 일치)
"""
import json
import urllib.request
import ssl
import os
import re
import random

API_KEY = os.environ.get('CLAUDE_API_KEY', '')

def call_api(prompt):
    body = json.dumps({'model':'claude-haiku-4-5','max_tokens':4096,'messages':[{'role':'user','content':prompt}]}).encode()
    req = urllib.request.Request('https://api.anthropic.com/v1/messages', data=body,
        headers={'Content-Type':'application/json','x-api-key':API_KEY,'anthropic-version':'2023-06-01'}, method='POST')
    ctx = ssl.create_default_context()
    try:
        import certifi; ctx.load_verify_locations(certifi.where())
    except: pass
    try: resp = urllib.request.urlopen(req, context=ctx, timeout=120)
    except ssl.SSLCertVerificationError:
        ctx = ssl._create_unverified_context()
        resp = urllib.request.urlopen(req, context=ctx, timeout=120)
    return json.loads(resp.read())['content'][0]['text']

# ═══════════════════════════════════════
# 문법 오류 삽입 규칙
# ═══════════════════════════════════════
GRAMMAR_RULES = [
    {
        'name': '주어-동사 수일치 (복수주어+단수동사)',
        'pattern': r'\b(researchers|scientists|students|experts|studies|companies|governments|organizations|children|people|communities|individuals|factors|problems|challenges|systems|theories|approaches|methods|results|findings|animals|plants|countries|nations|educators|workers|consumers|citizens|policies|regulations|technologies|devices|institutions|programs|strategies|efforts|networks|patterns|trends|changes|effects|impacts|benefits|risks|opportunities|solutions|mechanisms|processes|developments|innovations|improvements|experiments|observations|investigations|analyses|discussions|debates|arguments|perspectives|opinions|alternatives|options|resources|materials|participants|volunteers|respondents|scholars|critics|advocates|professionals|practitioners|leaders|pioneers|researchers)\s+(have|are|were|do|need|require|demonstrate|show|suggest|indicate|reveal|provide|offer|create|produce|generate|support|contribute|facilitate|enhance|promote|maintain|ensure|enable|involve|include|represent|reflect|influence|affect|determine|establish|develop|implement|adopt|encourage|challenge|address|examine|investigate|explore|analyze|identify|recognize|acknowledge|emphasize|highlight|illustrate|confirm|validate|document|describe|explain|discuss|argue|propose|recommend|advocate|seek|pursue|achieve|obtain|acquire|receive|experience|encounter|face|overcome|manage|handle|operate|function|perform|serve|play|form|constitute|comprise|make|take|give|hold|keep|lead|bring|carry|cause|allow|help|begin|continue|remain|become|seem|appear|tend|prefer|choose|decide|agree|believe|consider|assume|expect|hope|want|wish|try|attempt|fail|succeed|struggle|compete|cooperate|collaborate|communicate|interact|engage|participate|respond|react|adapt|adjust|evolve|emerge|arise|occur|exist|vary|differ|depend|rely|result|stem|derive|originate)\b',
        'replace_func': lambda m: m.group(1) + ' ' + _to_singular(m.group(2)),
        'explanation': lambda m: f"주어 '{m.group(1)}'는 복수이므로 동사 '{_to_singular(m.group(2))}'가 아닌 '{m.group(2)}'가 되어야 합니다.",
        'correct': lambda m: m.group(2),
        'wrong': lambda m: _to_singular(m.group(2)),
    },
    {
        'name': '주어-동사 수일치 (단수주어+복수동사)',
        'pattern': r'\b(research|technology|education|society|government|information|knowledge|development|environment|culture|evidence|analysis|communication|globalization|innovation|motivation|behavior|psychology|economics|philosophy|science|progress|growth|health|democracy|media|industry|agriculture|urbanization|biodiversity|sustainability|creativity|productivity|efficiency|diversity|equality|poverty|pollution|deforestation|automation|digitalization|childhood|adulthood|childhood|literacy|obesity|anxiety|depression|stress|sleep|exercise|nutrition|cooperation|competition|evolution|adaptation|migration|immigration|integration|discrimination|inequality)\s+(have|are|were|do|need|demonstrate|show|suggest|indicate|reveal|provide|offer|create|produce|generate|support|contribute|facilitate|enhance|promote|maintain|involve|include|represent|reflect|influence|affect|determine|establish|develop|require|enable|encourage|challenge|address|examine|play|lead|cause|allow|help|begin|continue|remain|seem|appear|tend|result|exist|depend|rely)\b',
        'replace_func': lambda m: m.group(1) + ' ' + _to_plural(m.group(2)),
        'explanation': lambda m: f"주어 '{m.group(1)}'는 단수(불가산)이므로 동사 '{_to_plural(m.group(2))}'가 아닌 '{m.group(2)}'가 되어야 합니다.",
        'correct': lambda m: m.group(2),
        'wrong': lambda m: _to_plural(m.group(2)),
    },
    {
        'name': '능동/수동 혼동',
        'pattern': r'\b(is|are|was|were)\s+(considered|regarded|known|seen|viewed|recognized|perceived|understood|believed|thought|expected|required|designed|intended|used|employed|applied|developed|established|created|built|formed|shaped|influenced|affected|determined|driven|caused|produced|generated|found|discovered|observed|identified|classified|categorized|defined|described|characterized|associated|connected|linked|related|compared|contrasted|distinguished|separated|divided|combined|integrated|incorporated|included|involved|surrounded|accompanied|followed|preceded|replaced|substituted|transformed|converted|modified|adapted|adjusted|improved|enhanced|strengthened|weakened|reduced|increased|decreased|expanded|extended|limited|restricted|confined|isolated|protected|preserved|maintained|sustained|supported)\b',
        'replace_func': lambda m: m.group(2),  # remove is/are/was/were
        'explanation': lambda m: f"'{m.group(2)}'는 수동태로 '{m.group(1)} {m.group(2)}'가 되어야 합니다.",
        'correct': lambda m: m.group(1) + ' ' + m.group(2),
        'wrong': lambda m: m.group(2),
    },
    {
        'name': '관계대명사 who/which',
        'pattern': r'\b(people|individuals|researchers|scientists|students|experts|children|workers|leaders|scholars)\s+who\b',
        'replace_func': lambda m: m.group(1) + ' which',
        'explanation': lambda m: f"선행사 '{m.group(1)}'는 사람이므로 'which'가 아닌 'who'가 되어야 합니다.",
        'correct': lambda m: 'who',
        'wrong': lambda m: 'which',
    },
    {
        'name': '동명사/to부정사 혼동 (to + -ing)',
        'pattern': r'\bto\s+(study|learn|understand|develop|improve|achieve|maintain|create|establish|provide|ensure|promote|facilitate|address|examine|explore|investigate|analyze|identify|recognize|manage|reduce|increase|enhance|support|encourage|implement|adopt|apply|use|build|design|produce|generate|transform|prevent|protect|preserve|overcome|solve|resolve)\b',
        'replace_func': lambda m: 'to ' + m.group(1) + 'ing',
        'explanation': lambda m: f"'to' 뒤에는 동사원형이 와야 하므로 'to {m.group(1)}ing'이 아닌 'to {m.group(1)}'가 맞습니다.",
        'correct': lambda m: m.group(1),
        'wrong': lambda m: m.group(1) + 'ing',
    },
    {
        'name': '조동사 뒤 동사원형 (can/must/should + -s)',
        'pattern': r'\b(can|must|should|will|would|could|might|may)\s+(help|make|create|provide|lead|cause|allow|enable|ensure|promote|facilitate|reduce|increase|improve|enhance|support|prevent|maintain|produce|generate|develop|establish|transform|require|involve|contribute|demonstrate|reveal|suggest|indicate|represent|reflect|influence|affect|determine|address|overcome|achieve|offer)\b',
        'replace_func': lambda m: m.group(1) + ' ' + m.group(2) + 's',
        'explanation': lambda m: f"조동사 '{m.group(1)}' 뒤에는 동사원형이 와야 하므로 '{m.group(2)}s'가 아닌 '{m.group(2)}'가 맞습니다.",
        'correct': lambda m: m.group(2),
        'wrong': lambda m: m.group(2) + 's',
    },
]

def _to_singular(verb):
    """복수 동사를 단수로 변환"""
    if verb == 'have': return 'has'
    if verb == 'are': return 'is'
    if verb == 'were': return 'was'
    if verb == 'do': return 'does'
    if verb.endswith('y') and verb[-2] not in 'aeiou':
        return verb[:-1] + 'ies'
    if verb.endswith(('s','sh','ch','x','z','o')):
        return verb + 'es'
    return verb + 's'

def _to_plural(verb):
    """단수 동사를 복수로 변환 (3인칭 단수 → 원형)"""
    if verb == 'has': return 'have'
    if verb == 'is': return 'are'
    if verb == 'was': return 'were'
    if verb == 'does': return 'do'
    return verb  # 대부분 원형 그대로

def find_grammar_targets(passage):
    """지문에서 오류 삽입 가능한 위치 찾기"""
    targets = []
    sentences = re.split(r'(?<=[.!?])\s+', passage)

    for sent_idx, sentence in enumerate(sentences):
        for rule in GRAMMAR_RULES:
            for m in re.finditer(rule['pattern'], sentence, re.IGNORECASE):
                targets.append({
                    'sentence_idx': sent_idx,
                    'sentence': sentence,
                    'match': m,
                    'rule': rule,
                    'start': m.start(),
                    'end': m.end(),
                })
    return targets

def insert_grammar_error(passage, num_questions=5):
    """완벽한 지문에 문법 오류 1개를 삽입하여 어법 문제 생성"""
    sentences = re.split(r'(?<=[.!?])\s+', passage)
    targets = find_grammar_targets(passage)

    if len(targets) < 5:
        return None  # 충분한 타겟이 없음

    # 5개 위치 선택 (서로 다른 문장에서)
    used_sentences = set()
    selected = []
    random.shuffle(targets)
    for t in targets:
        if t['sentence_idx'] not in used_sentences and len(selected) < 5:
            selected.append(t)
            used_sentences.add(t['sentence_idx'])

    if len(selected) < 5:
        return None

    # 정답 위치 선택 (랜덤)
    answer_idx = random.randint(0, 4)
    markers = ['①', '②', '③', '④', '⑤']

    # 지문에 마커 삽입
    modified_passage = passage
    choices = []

    # 위치순 정렬 (뒤에서부터 삽입해야 인덱스 안 꼬임)
    selected.sort(key=lambda t: t['match'].start(), reverse=True)

    # 인덱스 재매핑
    idx_map = {}
    for new_idx, t in enumerate(sorted(selected, key=lambda t: t['match'].start())):
        idx_map[id(t)] = new_idx

    for t in selected:
        real_idx = idx_map[id(t)]
        marker = markers[real_idx]
        m = t['match']
        rule = t['rule']

        if real_idx == answer_idx:
            # 정답: 틀린 형태 삽입
            wrong_text = rule['replace_func'](m)
            wrong_word = rule['wrong'](m)
            correct_word = rule['correct'](m)
            explanation = rule['explanation'](m)

            modified_passage = modified_passage[:m.start()] + marker + wrong_text + modified_passage[m.end():]
            choices.append(marker + wrong_word)
        else:
            # 나머지: 원래 형태 유지 + 마커만 추가
            original = m.group(0)
            # 단어 1개만 선택
            words = original.split()
            if len(words) >= 2:
                target_word = words[-1]  # 동사 부분
            else:
                target_word = words[0]
            modified_passage = modified_passage[:m.start()] + marker + original + modified_passage[m.end():]
            choices.append(marker + target_word)

    # choices를 순서대로 정렬
    choices_ordered = [''] * 5
    for t in selected:
        real_idx = idx_map[id(t)]
        choices_ordered[real_idx] = choices[selected.index(t)] if selected.index(t) < len(choices) else ''

    return {
        'type': '어법 판단',
        'passage': modified_passage,
        'choices': choices_ordered,
        'answer': answer_idx,
        'explanation': f"정답: {markers[answer_idx]}. {explanation}",
        'wrong_explanations': {},
        '_type': 'grammar',
        'given_sentence': None,
        '_source': 'rule_based',
        '_grammarVerified': True,
    }


def generate_grammar_questions(count=10):
    """AI 지문 생성 + 규칙 기반 오류 삽입"""
    print(f"어법 판단 {count}문제 생성 시작...")

    # 1단계: AI에게 완벽한 지문 요청
    prompt = f"""학술적 영어 지문 {count + 5}개를 작성하세요.

조건:
- 각 지문 220~260단어, 10~14문장
- 모든 문법이 완벽해야 함 (오류 없이!)
- 소재: 심리학, 사회학, 경제학, 환경, 인지과학, 생물학, 교육, 역사, 기술, 문화 등 다양하게
- 주어-동사 수일치, 관계대명사, to부정사, 조동사 등 다양한 문법 구조 포함
- 수능 독해 지문 수준

반드시 JSON 배열로만 출력:
[{{"passage":"영어 지문"}}]"""

    print("  AI 지문 생성 중...")
    result = call_api(prompt)
    s = result.find('['); e = result.rfind(']') + 1
    if s < 0 or e <= 0:
        print("  ❌ 지문 생성 실패")
        return []

    passages = json.loads(result[s:e])
    print(f"  지문 {len(passages)}개 생성")

    # 2단계: 각 지문에 규칙 기반 오류 삽입
    questions = []
    for i, p in enumerate(passages):
        passage = p.get('passage', '')
        if not passage:
            continue

        q = insert_grammar_error(passage)
        if q:
            questions.append(q)
            print(f"  ✅ 문제 {len(questions)}: {q['explanation'][:50]}...")
        else:
            print(f"  ⚠️ 지문 {i+1}: 적합한 오류 삽입 위치 없음")

        if len(questions) >= count:
            break

    print(f"\n완료! {len(questions)}문제 생성")
    return questions


if __name__ == '__main__':
    questions = generate_grammar_questions(10)

    js = f"// Prof.AI 어법 판단 — 규칙 기반 오류 삽입 {len(questions)}문제\n"
    js += f"const QUESTION_BANK = {json.dumps(questions, ensure_ascii=False, indent=2)};\n"

    output = os.path.join(os.path.dirname(__file__), 'questions_grammar_rb.js')
    with open(output, 'w', encoding='utf-8') as f:
        f.write(js)
    print(f"저장: {output}")
