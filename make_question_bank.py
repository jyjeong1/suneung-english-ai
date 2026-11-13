#!/usr/bin/env python3
"""수능영어 문제은행 HTML 생성기"""
import json, re, os

QUESTIONS_JS = os.path.join(os.path.dirname(__file__), "questions.js")
OUT_HTML     = os.path.join(os.path.dirname(__file__), "question_bank.html")

TYPE_NORM = {
    '빈칙 추론':'빈칸 추론', '어법 판断':'어법 판단',
    '어법 判断':'어법 판단', '요지':'요지/주제'
}

ACCT = "#0055d4"  # 영어 테마 (파랑)

def load_questions(path):
    with open(path, encoding="utf-8") as f:
        raw = f.read()
    m = re.search(r'const QUESTION_BANK\s*=\s*(\[[\s\S]+?\]);', raw)
    if not m:
        raise ValueError("QUESTION_BANK not found")
    return json.loads(m.group(1))

def esc(s):
    return str(s).replace("&","&amp;").replace("<","&lt;").replace(">","&gt;")

def norm_type(t):
    return TYPE_NORM.get(t, t)

def q_card(q, idx):
    qid      = q.get("_qid","")
    rev      = q.get("_reviewed", False)
    qtype    = norm_type(q.get("type",""))
    passage  = q.get("passage","")
    given    = q.get("given_sentence","")
    choices  = q.get("choices") or []
    ans      = q.get("answer", 0)
    expl     = q.get("explanation","")
    wrong    = q.get("wrong_explanations") or {}

    rev_badge = '<span style="color:#4ade80;font-size:11px;margin-left:6px">✔ 감수</span>' if rev else ""

    # 지문
    passage_html = f'<div style="background:rgba(255,255,255,0.04);border-left:3px solid {ACCT};padding:12px 14px;margin:10px 0;font-size:14px;line-height:1.9;color:#cbd5e1;border-radius:0 8px 8px 0">{esc(passage)}</div>' if passage else ""

    # 삽입 문장
    given_html = ""
    if given:
        given_html = f'<div style="background:rgba(0,85,212,0.1);border:1px solid rgba(0,85,212,0.3);padding:8px 12px;border-radius:8px;margin:8px 0;font-size:13px;color:#93c5fd"><b>삽입 문장:</b> {esc(given)}</div>'

    # 선택지
    choices_html = ""
    if choices:
        items = ""
        for i, c in enumerate(choices, 1):
            is_ans = (i == ans)
            ac = "#4ade80" if is_ans else "#aaa"
            fw = "700" if is_ans else "400"
            mark = "✓ " if is_ans else ""
            w_key = str(i-1) if not is_ans else None
            w_note = ""
            if w_key and wrong and w_key in wrong:
                w_note = f'<span style="font-size:11px;color:#f87171;margin-left:6px">[{esc(str(wrong[w_key])[:50])}]</span>'
            items += f'<div style="color:{ac};font-weight:{fw};margin:3px 0;font-size:13px">{mark}{esc(c)}{w_note}</div>'
        choices_html = f'<div style="margin:10px 0 6px">{items}</div>'

    # 해설
    expl_html = ""
    if expl:
        expl_html = f'''<details style="margin-top:10px">
<summary style="cursor:pointer;font-size:13px;color:{ACCT};user-select:none;font-weight:600">▶ 해설 보기</summary>
<div style="margin-top:8px;font-size:13px;color:#cbd5e1;line-height:1.8;background:rgba(0,85,212,0.06);padding:12px;border-radius:8px">{esc(expl)}</div>
</details>'''

    return f'''<div class="q-card" id="{qid}" style="background:rgba(0,85,212,0.07);border:1px solid rgba(0,85,212,0.25);border-left:4px solid {ACCT};border-radius:12px;padding:16px 18px;margin-bottom:14px">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;flex-wrap:wrap;gap:4px">
    <span style="font-size:12px;font-weight:700;background:rgba(0,85,212,0.2);color:#60a5fa;padding:2px 8px;border-radius:4px">{qid}</span>
    <span style="font-size:11px;color:#666">{idx}번 · {esc(qtype)} {rev_badge}</span>
  </div>
  {given_html}
  {passage_html}
  {choices_html}
  {expl_html}
</div>'''

def toc_links(types):
    links = ""
    for t in types:
        slug = t.replace(" ","_").replace("/","_")
        links += f'<a href="#{slug}" style="font-size:13px;color:{ACCT};text-decoration:none;margin:3px 8px 3px 0">{t}</a> '
    return links

def main():
    questions = load_questions(QUESTIONS_JS)

    # 유형 정규화
    for q in questions:
        q['_type_norm'] = norm_type(q.get('type',''))

    total    = len(questions)
    rev_cnt  = sum(1 for q in questions if q.get('_reviewed'))
    zero_cnt = sum(1 for q in questions if q.get('answer')==0)

    # 유형별 그룹화
    type_order = []
    type_groups = {}
    for q in questions:
        t = q['_type_norm']
        if t not in type_groups:
            type_groups[t] = []
            type_order.append(t)
        type_groups[t].append(q)

    body = ""
    idx_global = 0
    for t in type_order:
        slug = t.replace(" ","_").replace("/","_")
        qs = type_groups[t]
        body += f'<div class="type-header" id="{slug}" style="font-size:20px;font-weight:800;color:{ACCT};padding:12px 0;border-bottom:3px solid {ACCT};margin:32px 0 16px">{t} <span style="font-size:14px;font-weight:400;color:#666">({len(qs)}문제)</span></div>\n'
        for q in qs:
            idx_global += 1
            body += q_card(q, idx_global) + "\n"

    stat = f'총 {total}문제 | 감수완료 {rev_cnt} | answer 미설정 {zero_cnt}'

    html = f'''<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Prof.AI 수능영어 — 문제은행 ({total}문제)</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap');
*{{margin:0;padding:0;box-sizing:border-box}}
body{{font-family:'Noto Sans KR',sans-serif;background:#0a0f1a;color:#e0e0e0;max-width:960px;margin:0 auto;padding:20px}}
h1{{font-size:24px;font-weight:900;color:{ACCT};margin-bottom:8px}}
.summary{{font-size:13px;color:#888;margin-bottom:24px}}
.toc{{background:rgba(255,255,255,0.03);border:1px solid rgba(0,85,212,0.2);border-radius:12px;padding:16px;margin-bottom:24px}}
.toc h2{{font-size:16px;margin-bottom:10px;color:{ACCT}}}
details summary::-webkit-details-marker{{display:none}}
</style>
</head><body>
<h1>📘 Prof.AI 수능영어 — 문제은행</h1>
<div class="summary">RPI 공학박사 · 삼성전자/GE 연구원 · 29년 교수 감수 | {stat}</div>

<div class="toc">
  <h2>📌 목차 (유형별)</h2>
  {toc_links(type_order)}
</div>

{body}

<div style="text-align:center;margin:40px 0 20px;font-size:13px;color:#555">
  Prof.AI 수능영어 문제은행 · {total}문제 · 2026
</div>
</body></html>'''

    with open(OUT_HTML, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"✅ 생성 완료: {OUT_HTML} ({total}문제, {len(html)//1024}KB)")

if __name__ == "__main__":
    main()
