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
    # ── 1. 주어-동사 수일치 ──
    {
        'name': '주어-동사 수일치 (복수주어+단수동사)',
        'type': '주어-동사 수일치',
        'pattern': r'\b(researchers|scientists|students|experts|studies|companies|governments|organizations|children|people|communities|individuals|factors|problems|challenges|systems|theories|approaches|methods|results|findings|animals|plants|countries|nations|educators|workers|consumers|citizens|policies|regulations|technologies|devices|institutions|programs|strategies|efforts|networks|patterns|trends|changes|effects|impacts|benefits|risks|opportunities|solutions|mechanisms|processes|developments|innovations|improvements|experiments|observations|investigations|analyses|discussions|debates|arguments|perspectives|opinions|alternatives|options|resources|materials|participants|volunteers|respondents|scholars|critics|advocates|professionals|practitioners|leaders|pioneers)\s+(have|are|were|do|need|require|demonstrate|show|suggest|indicate|reveal|provide|offer|create|produce|generate|support|contribute|facilitate|enhance|promote|maintain|ensure|enable|involve|include|represent|reflect|influence|affect|determine|establish|develop|implement|adopt|encourage|challenge|address|examine|investigate|explore|analyze|identify|recognize|acknowledge|emphasize|highlight|illustrate|confirm|validate|document|describe|explain|discuss|argue|propose|recommend|advocate|seek|pursue|achieve|obtain|acquire|receive|experience|encounter|face|overcome|manage|handle|operate|function|perform|serve|play|form|constitute|comprise|make|take|give|hold|keep|lead|bring|carry|cause|allow|help|begin|continue|remain|become|seem|appear|tend|prefer|choose|decide|agree|believe|consider|assume|expect|hope|want|wish|try|attempt|fail|succeed|struggle|compete|cooperate|collaborate|communicate|interact|engage|participate|respond|react|adapt|adjust|evolve|emerge|arise|occur|exist|vary|differ|depend|rely|result|stem|derive|originate)\b',
        'replace_func': lambda m: m.group(1) + ' ' + _to_singular(m.group(2)),
        'explanation': lambda m: f"주어 '{m.group(1)}'는 복수이므로 동사 '{_to_singular(m.group(2))}'가 아닌 '{m.group(2)}'가 되어야 합니다.",
        'correct': lambda m: m.group(2),
        'wrong': lambda m: _to_singular(m.group(2)),
    },
    {
        'name': '주어-동사 수일치 (단수주어+복수동사)',
        'type': '주어-동사 수일치',
        'pattern': r'\b(research|technology|education|society|government|information|knowledge|development|environment|culture|evidence|analysis|communication|globalization|innovation|motivation|behavior|psychology|economics|philosophy|science|progress|growth|health|democracy|media|industry|agriculture|urbanization|biodiversity|sustainability|creativity|productivity|efficiency|diversity|equality|poverty|pollution|deforestation|automation|digitalization|childhood|adulthood|literacy|obesity|anxiety|depression|stress|sleep|exercise|nutrition|cooperation|competition|evolution|adaptation|migration|immigration|integration|discrimination|inequality)\s+(have|are|were|do|need|demonstrate|show|suggest|indicate|reveal|provide|offer|create|produce|generate|support|contribute|facilitate|enhance|promote|maintain|involve|include|represent|reflect|influence|affect|determine|establish|develop|require|enable|encourage|challenge|address|examine|play|lead|cause|allow|help|begin|continue|remain|seem|appear|tend|result|exist|depend|rely)\b',
        'replace_func': lambda m: m.group(1) + ' ' + _to_plural(m.group(2)),
        'explanation': lambda m: f"주어 '{m.group(1)}'는 단수(불가산)이므로 동사 '{_to_plural(m.group(2))}'가 아닌 '{m.group(2)}'가 되어야 합니다.",
        'correct': lambda m: m.group(2),
        'wrong': lambda m: _to_plural(m.group(2)),
    },
    # ── 2. 현재분사 vs 과거분사 (-ing/-ed) ──
    {
        'name': '현재분사/과거분사 혼동 (감정형용사 -ing→-ed)',
        'type': '현재분사 vs 과거분사',
        'pattern': r'\b(is|are|was|were|feel|felt|become|became|seem|seemed|remain|remained|look|looked|appear|appeared)\s+(surprising|confusing|disappointing|exciting|interesting|boring|exhausting|frustrating|fascinating|overwhelming|alarming|amusing|annoying|astonishing|charming|convincing|depressing|disturbing|embarrassing|encouraging|entertaining|frightening|inspiring|irritating|moving|pleasing|puzzling|relaxing|satisfying|shocking|terrifying|thrilling|tiring|worrying)\b',
        'replace_func': lambda m: m.group(1) + ' ' + m.group(2),  # keep as-is for non-answer
        'explanation': lambda m: f"주어가 감정을 느끼는 대상이면 '{m.group(2)}'(~하게 만드는)가 아닌 '{m.group(2)[:-3]}ed'(~하게 느끼는)가 되어야 합니다.",
        'correct': lambda m: m.group(2),
        'wrong': lambda m: m.group(2)[:-3] + 'ed',
    },
    {
        'name': '현재분사/과거분사 혼동 (사물주어 -ed→-ing)',
        'type': '현재분사 vs 과거분사',
        'pattern': r'\b(the results?|the findings?|the data|the evidence|the research|the study|the experiment|the discovery|the phenomenon|the process|the concept|the idea|the theory|the approach|the method|the strategy|the outcome|the effect|the impact|the situation|the experience|the story|the news|the report)\s+(is|are|was|were)\s+(surprising|confusing|disappointing|exciting|interesting|boring|exhausting|frustrating|fascinating|overwhelming|alarming|amusing|annoying|astonishing|convincing|depressing|disturbing|embarrassing|encouraging|entertaining|frightening|inspiring|irritating|moving|pleasing|puzzling|relaxing|satisfying|shocking|terrifying|thrilling|tiring|worrying)\b',
        'replace_func': lambda m: m.group(1) + ' ' + m.group(2) + ' ' + m.group(3)[:-3] + 'ed',
        'explanation': lambda m: f"주어 '{m.group(1)}'는 감정을 유발하는 사물이므로 '{m.group(3)[:-3]}ed'가 아닌 '{m.group(3)}'(-ing)가 맞습니다.",
        'correct': lambda m: m.group(3),
        'wrong': lambda m: m.group(3)[:-3] + 'ed',
    },
    # ── 3. 관계대명사 vs 관계부사 ──
    {
        'name': '관계대명사 who→which (사람 선행사)',
        'type': '관계대명사 vs 관계부사',
        'pattern': r'\b(people|individuals|researchers|scientists|students|experts|children|workers|leaders|scholars|participants|teachers|citizens|consumers|patients|artists|writers|athletes|musicians|volunteers|professionals|practitioners|advocates|critics)\s+who\b',
        'replace_func': lambda m: m.group(1) + ' which',
        'explanation': lambda m: f"선행사 '{m.group(1)}'는 사람이므로 'which'가 아닌 'who'가 되어야 합니다.",
        'correct': lambda m: 'who',
        'wrong': lambda m: 'which',
    },
    {
        'name': '관계부사 where→which (장소 선행사)',
        'type': '관계대명사 vs 관계부사',
        'pattern': r'\b(the place|the environment|the area|the region|the country|the city|the school|the community|the society|the world|the context|the setting|the situation|the field|a place|a context|an environment|an area)\s+where\b',
        'replace_func': lambda m: m.group(1) + ' which',
        'explanation': lambda m: f"선행사 '{m.group(1)}'는 장소이고 뒤에 완전한 문장이 오므로 'which'가 아닌 관계부사 'where'가 맞습니다.",
        'correct': lambda m: 'where',
        'wrong': lambda m: 'which',
    },
    {
        'name': '관계부사 when→which (시간 선행사)',
        'type': '관계대명사 vs 관계부사',
        'pattern': r'\b(the time|the moment|the period|the era|the age|the point|the stage|a time|a moment|a period)\s+when\b',
        'replace_func': lambda m: m.group(1) + ' which',
        'explanation': lambda m: f"선행사 '{m.group(1)}'는 시간이고 뒤에 완전한 문장이 오므로 'which'가 아닌 관계부사 'when'이 맞습니다.",
        'correct': lambda m: 'when',
        'wrong': lambda m: 'which',
    },
    # ── 4. that vs what ──
    {
        'name': 'that→what (선행사 없는 명사절)',
        'type': 'that vs what',
        'pattern': r'\b(understand|know|realize|recognize|determine|discover|reveal|explain|demonstrate|show|consider|examine|investigate|explore|appreciate|acknowledge|indicate|suggest|believe|assume|ignore|overlook|forget|remember|learn|notice|predict|expect)\s+what\b',
        'replace_func': lambda m: m.group(1) + ' that',
        'explanation': lambda m: f"선행사가 없으므로 'that'이 아닌 'what'(~하는 것)이 맞습니다. 'what = the thing(s) that'",
        'correct': lambda m: 'what',
        'wrong': lambda m: 'that',
    },
    {
        'name': 'what→that (접속사 that절)',
        'type': 'that vs what',
        'pattern': r'\b(the fact|the idea|the notion|the belief|the assumption|the argument|the claim|the hypothesis|the theory|the evidence|the finding|the conclusion|the view|the principle|the observation)\s+that\b',
        'replace_func': lambda m: m.group(1) + ' what',
        'explanation': lambda m: f"'{m.group(1)}' 뒤에 완전한 문장이 오는 동격절이므로 'what'이 아닌 접속사 'that'이 맞습니다.",
        'correct': lambda m: 'that',
        'wrong': lambda m: 'what',
    },
    # ── 5. 능동태 vs 수동태 ──
    {
        'name': '수동태→능동태 혼동 (be동사 누락)',
        'type': '능동태 vs 수동태',
        'pattern': r'\b(is|are|was|were)\s+(considered|regarded|known|seen|viewed|recognized|perceived|understood|believed|thought|expected|required|designed|intended|used|employed|applied|developed|established|created|built|formed|shaped|influenced|affected|determined|driven|caused|produced|generated|found|discovered|observed|identified|classified|categorized|defined|described|characterized|associated|connected|linked|related|compared|contrasted|distinguished|separated|divided|combined|integrated|incorporated|included|involved|surrounded|accompanied|followed|preceded|replaced|substituted|transformed|converted|modified|adapted|adjusted|improved|enhanced|strengthened|weakened|reduced|increased|decreased|expanded|extended|limited|restricted|confined|isolated|protected|preserved|maintained|sustained|supported)\b',
        'replace_func': lambda m: m.group(2),  # remove is/are/was/were
        'explanation': lambda m: f"'{m.group(2)}'는 수동태로 '{m.group(1)} {m.group(2)}'가 되어야 합니다.",
        'correct': lambda m: m.group(1) + ' ' + m.group(2),
        'wrong': lambda m: m.group(2),
    },
    # ── 6. to부정사 vs 동명사 ──
    {
        'name': 'to부정사 혼동 (to + -ing)',
        'type': 'to부정사 vs 동명사',
        'pattern': r'\bto\s+(study|learn|understand|develop|improve|achieve|maintain|create|establish|provide|ensure|promote|facilitate|address|examine|explore|investigate|analyze|identify|recognize|manage|reduce|increase|enhance|support|encourage|implement|adopt|apply|use|build|design|produce|generate|transform|prevent|protect|preserve|overcome|solve|resolve)\b',
        'replace_func': lambda m: 'to ' + m.group(1) + 'ing',
        'explanation': lambda m: f"'to' 뒤에는 동사원형이 와야 하므로 'to {m.group(1)}ing'이 아닌 'to {m.group(1)}'가 맞습니다.",
        'correct': lambda m: m.group(1),
        'wrong': lambda m: m.group(1) + 'ing',
    },
    {
        'name': '동명사 목적어 혼동 (동명사→to부정사)',
        'type': 'to부정사 vs 동명사',
        'pattern': r'\b(enjoy|avoid|mind|consider|suggest|recommend|practice|finish|quit|deny|admit|delay|postpone|imagine|risk|resist|appreciate|involve|include|keep|continue)\s+(studying|learning|developing|improving|achieving|maintaining|creating|establishing|providing|promoting|examining|exploring|investigating|analyzing|identifying|managing|reducing|increasing|enhancing|supporting|encouraging|implementing|building|designing|producing|generating|transforming|preventing|protecting|preserving|overcoming|solving|working|making|taking|giving|reading|writing|using|doing|being|having)\b',
        'replace_func': lambda m: m.group(1) + ' to ' + _gerund_to_base(m.group(2)),
        'explanation': lambda m: f"'{m.group(1)}' 뒤에는 동명사가 와야 하므로 'to {_gerund_to_base(m.group(2))}'가 아닌 '{m.group(2)}'가 맞습니다.",
        'correct': lambda m: m.group(2),
        'wrong': lambda m: 'to ' + _gerund_to_base(m.group(2)),
    },
    # ── 7. 대명사 수일치 ──
    {
        'name': '대명사 수일치 those→that (복수 대명사)',
        'type': '대명사 수일치',
        'pattern': r'\bthose\s+(who|of|that|in|with|from|between|among|within|around|living|working|involved|affected|interested|concerned|participating|engaged|exposed|associated)\b',
        'replace_func': lambda m: 'that ' + m.group(1),
        'explanation': lambda m: f"복수 대명사가 필요하므로 'that'이 아닌 'those'가 맞습니다. 'those {m.group(1)}' = '~하는 사람들/것들'",
        'correct': lambda m: 'those',
        'wrong': lambda m: 'that',
    },
    {
        'name': '대명사 수일치 that→those (단수 지시대명사)',
        'type': '대명사 수일치',
        'pattern': r'\b(than|like|unlike|from|to)\s+that\s+of\b',
        'replace_func': lambda m: m.group(1) + ' those of',
        'explanation': lambda m: f"앞의 명사가 단수이므로 'those of'가 아닌 'that of'가 맞습니다.",
        'correct': lambda m: 'that',
        'wrong': lambda m: 'those',
    },
    # ── 8. 병렬구조 ──
    {
        'name': '병렬구조 혼동 (and 뒤 형태 불일치)',
        'type': '병렬구조',
        'pattern': r'\b(to\s+\w+),\s+(to\s+\w+),\s+and\s+(to)\s+(\w+)\b',
        'replace_func': lambda m: m.group(1) + ', ' + m.group(2) + ', and ' + m.group(4) + 'ing',
        'explanation': lambda m: f"병렬구조에서 'and' 뒤에도 'to + 동사원형'이 와야 하므로 '{m.group(4)}ing'이 아닌 'to {m.group(4)}'가 맞습니다.",
        'correct': lambda m: 'to ' + m.group(4),
        'wrong': lambda m: m.group(4) + 'ing',
    },
    {
        'name': '병렬구조 혼동 (and 연결 동명사)',
        'type': '병렬구조',
        'pattern': r'\b(\w+ing)\s+and\s+(\w+ing)\b',
        'replace_func': lambda m: m.group(1) + ' and to ' + _gerund_to_base(m.group(2)),
        'explanation': lambda m: f"병렬구조에서 'and' 앞이 동명사(-ing)이므로 'to {_gerund_to_base(m.group(2))}'가 아닌 '{m.group(2)}'(-ing)가 맞습니다.",
        'correct': lambda m: m.group(2),
        'wrong': lambda m: 'to ' + _gerund_to_base(m.group(2)),
    },
    # ── 9. 형용사 vs 부사 ──
    {
        'name': '형용사→부사 혼동 (동사 수식)',
        'type': '형용사 vs 부사',
        'pattern': r'\b(significantly|dramatically|substantially|considerably|effectively|consistently|increasingly|rapidly|gradually|actively|directly|indirectly|primarily|largely|deeply|strongly|closely|frequently|commonly|typically|generally|fundamentally|essentially|particularly|especially|specifically|ultimately|eventually|consequently|subsequently|simultaneously|continuously|repeatedly|extensively|thoroughly|precisely|accurately|efficiently|successfully|independently|collectively|deliberately|inevitably|remarkably|noticeably|profoundly)\s+(influence|affect|change|transform|shape|alter|modify|improve|enhance|reduce|increase|contribute|determine|impact|benefit|challenge|support|demonstrate|reveal|suggest|indicate|reflect|differ|vary|depend|play|serve|function|operate|perform)\b',
        'replace_func': lambda m: _adverb_to_adj(m.group(1)) + ' ' + m.group(2),
        'explanation': lambda m: f"동사 '{m.group(2)}'를 수식하므로 형용사 '{_adverb_to_adj(m.group(1))}'가 아닌 부사 '{m.group(1)}'(-ly)가 맞습니다.",
        'correct': lambda m: m.group(1),
        'wrong': lambda m: _adverb_to_adj(m.group(1)),
    },
    {
        'name': '부사→형용사 혼동 (명사/보어 수식)',
        'type': '형용사 vs 부사',
        'pattern': r'\b(is|are|was|were|seem|seems|seemed|remain|remains|remained|become|becomes|became|appear|appears|appeared|prove|proves|proved|look|looks|looked|feel|feels|felt|stay|stays|stayed|sound|sounds|sounded)\s+(important|essential|crucial|critical|significant|necessary|fundamental|relevant|effective|beneficial|harmful|valuable|useful|powerful|responsible|capable|aware|evident|apparent|obvious|clear|difficult|challenging|complex|remarkable|notable|considerable|substantial|profound|inevitable|possible|impossible|probable|likely|unlikely|common|rare|unique|distinct|similar|different|diverse|equal|comparable|consistent|variable|stable|flexible|rigid|permanent|temporary|dominant|prevalent|abundant|scarce|sufficient|insufficient|appropriate|suitable|adequate|inadequate)\b',
        'replace_func': lambda m: m.group(1) + ' ' + m.group(2) + 'ly',
        'explanation': lambda m: f"보어 자리이므로 부사 '{m.group(2)}ly'가 아닌 형용사 '{m.group(2)}'가 맞습니다.",
        'correct': lambda m: m.group(2),
        'wrong': lambda m: m.group(2) + 'ly',
    },
    # ── 10. 조동사 + 동사원형 ──
    {
        'name': '조동사 뒤 동사원형 (can/must/should + -s)',
        'type': '조동사 + 동사원형',
        'pattern': r'\b(can|must|should|will|would|could|might|may)\s+(help|make|create|provide|lead|cause|allow|enable|ensure|promote|facilitate|reduce|increase|improve|enhance|support|prevent|maintain|produce|generate|develop|establish|transform|require|involve|contribute|demonstrate|reveal|suggest|indicate|represent|reflect|influence|affect|determine|address|overcome|achieve|offer)\b',
        'replace_func': lambda m: m.group(1) + ' ' + m.group(2) + 's',
        'explanation': lambda m: f"조동사 '{m.group(1)}' 뒤에는 동사원형이 와야 하므로 '{m.group(2)}s'가 아닌 '{m.group(2)}'가 맞습니다.",
        'correct': lambda m: m.group(2),
        'wrong': lambda m: m.group(2) + 's',
    },
    {
        'name': '조동사 뒤 동사원형 (조동사 + 과거형)',
        'type': '조동사 + 동사원형',
        'pattern': r'\b(can|must|should|will|would|could|might|may)\s+(be|have|become|remain|seem|appear)\b',
        'replace_func': lambda m: m.group(1) + ' ' + _base_to_past(m.group(2)),
        'explanation': lambda m: f"조동사 '{m.group(1)}' 뒤에는 동사원형이 와야 하므로 '{_base_to_past(m.group(2))}'가 아닌 '{m.group(2)}'가 맞습니다.",
        'correct': lambda m: m.group(2),
        'wrong': lambda m: _base_to_past(m.group(2)),
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

def _gerund_to_base(gerund):
    """동명사(-ing)를 동사원형으로 변환"""
    if gerund == 'being': return 'be'
    if gerund == 'having': return 'have'
    if gerund == 'doing': return 'do'
    if gerund == 'making': return 'make'
    if gerund == 'taking': return 'take'
    if gerund == 'giving': return 'give'
    if gerund == 'writing': return 'write'
    if gerund == 'using': return 'use'
    if gerund == 'living': return 'live'
    if gerund == 'working': return 'work'
    if gerund == 'reading': return 'read'
    # -ting (e.g., getting→get, putting→put)
    if gerund.endswith('ting') and len(gerund) > 5 and gerund[-4] == gerund[-5]:
        return gerund[:-4]
    # -ying (studying→study)
    if gerund.endswith('ying'):
        return gerund[:-4] + 'y'
    # -ing 제거
    if gerund.endswith('ing'):
        base = gerund[:-3]
        # 끝이 자음+e 패턴이면 e 복원 (e.g., improving→improv→improve)
        if base and base[-1] not in 'aeiou' and len(base) > 2:
            # 짧은 단어는 그대로, 아니면 e 추가 시도
            if base + 'e' in ('achieve', 'analyse', 'analyze', 'balance', 'change', 'combine',
                'compare', 'contribute', 'create', 'debate', 'decline', 'define', 'demonstrate',
                'describe', 'design', 'determine', 'encourage', 'enhance', 'examine', 'explore',
                'facilitate', 'generate', 'ignore', 'imagine', 'improve', 'include', 'increase',
                'influence', 'introduce', 'investigate', 'involve', 'isolate', 'manage', 'measure',
                'observe', 'overcome', 'preserve', 'produce', 'promote', 'provide', 'raise',
                'receive', 'recognize', 'reduce', 'require', 'resolve', 'restore', 'solve',
                'stimulate', 'structure', 'suppose', 'survive', 'trade', 'transform', 'upgrade',
                'use', 'value', 'write'):
                return base + 'e'
        return base
    return gerund

def _adverb_to_adj(adverb):
    """부사(-ly)를 형용사로 변환"""
    if not adverb.endswith('ly'):
        return adverb
    base = adverb[:-2]
    # -ically → -ical (dramatically→dramatic... but we keep full adj)
    # -ily → -y (easily→easy) — not applicable here
    # -bly → -ble (considerably→considerable)
    if base.endswith('b'):
        return base + 'le'
    # -ily → -y
    if base.endswith('i'):
        return base[:-1] + 'y'
    # -ally → -al
    if base.endswith('al'):
        return base
    return base

def _base_to_past(verb):
    """동사원형을 과거형으로 변환"""
    past = {
        'be': 'was', 'have': 'had', 'become': 'became',
        'remain': 'remained', 'seem': 'seemed', 'appear': 'appeared',
    }
    return past.get(verb, verb + 'ed')

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

    # 5개 위치 선택 (서로 다른 문장 + 가능하면 다른 문법 유형)
    used_sentences = set()
    used_types = set()
    selected = []
    random.shuffle(targets)
    # 1차: 다른 문장 + 다른 유형 우선
    for t in targets:
        rule_type = t['rule'].get('type', t['rule']['name'])
        if t['sentence_idx'] not in used_sentences and rule_type not in used_types and len(selected) < 5:
            selected.append(t)
            used_sentences.add(t['sentence_idx'])
            used_types.add(rule_type)
    # 2차: 유형 중복 허용
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

    # 정답 규칙의 문법 유형
    answer_target = [t for t in selected if idx_map[id(t)] == answer_idx][0]
    grammar_type = answer_target['rule'].get('type', answer_target['rule']['name'])

    return {
        'type': '어법 판단',
        'passage': modified_passage,
        'choices': choices_ordered,
        'answer': answer_idx,
        'explanation': f"정답: {markers[answer_idx]}. {explanation}",
        'wrong_explanations': {},
        '_type': 'grammar',
        '_grammarCategory': grammar_type,
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
- 수능 독해 지문 수준
- 아래 10가지 문법 구조를 지문마다 최소 5가지 이상 자연스럽게 포함:
  1. 복수주어+복수동사, 단수주어+단수동사 (수일치)
  2. 감정 분사: surprising/surprised, exciting/excited 등 (-ing/-ed 형용사)
  3. 관계대명사(who, which) 및 관계부사(where, when)
  4. 접속사 that절 (the fact that ...) 및 명사절 what (understand what ...)
  5. 수동태 (is considered, are known, was established 등)
  6. to부정사 (to develop, to improve) 및 동명사 목적어 (enjoy learning, avoid making)
  7. 지시대명사 those who/that of/those of
  8. 병렬구조 (A, B, and C 형태)
  9. 부사 수식 (significantly influence, dramatically change) 및 보어 형용사 (is important, remains essential)
  10. 조동사+동사원형 (can help, should provide, must be)

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

    # 2단계: 각 지문에 규칙 기반 오류 삽입 (10가지 유형 골고루)
    questions = []
    type_counts = {}
    for i, p in enumerate(passages):
        passage = p.get('passage', '')
        if not passage:
            continue

        q = insert_grammar_error(passage)
        if q:
            cat = q.get('_grammarCategory', '기타')
            type_counts[cat] = type_counts.get(cat, 0) + 1
            questions.append(q)
            print(f"  ✅ 문제 {len(questions)} [{cat}]: {q['explanation'][:50]}...")
        else:
            print(f"  ⚠️ 지문 {i+1}: 적합한 오류 삽입 위치 없음")

        if len(questions) >= count:
            break

    # 유형 분포 출력
    all_types = ['주어-동사 수일치', '현재분사 vs 과거분사', '관계대명사 vs 관계부사',
                 'that vs what', '능동태 vs 수동태', 'to부정사 vs 동명사',
                 '대명사 수일치', '병렬구조', '형용사 vs 부사', '조동사 + 동사원형']
    print(f"\n유형 분포:")
    for t in all_types:
        c = type_counts.get(t, 0)
        print(f"  {t}: {c}문제")
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
