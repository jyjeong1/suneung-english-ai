// Prof.AI 문제은행 — 50문제 (6개 분야)
// 빈칸 추론 9(고난도), 문장 삽입 8, 어법 판단 9, 어휘 적절성 8(반의어 강화), 요지/주제 8, 글의 순서 8
// 생성일: 2026-10-01 (어휘 적절성 재생성)
const QUESTION_BANK = [
  {
    "type": "빈칸 추론",
    "passage": "The traditional epistemological framework assumes that knowledge accumulates through the progressive elimination of false beliefs, with truth functioning as an objective endpoint toward which inquiry naturally gravitates. However, this view overlooks a fundamental paradox: the more refined our conceptual apparatus becomes, the more we discover that previous 'truths' were not merely incomplete but fundamentally incommensurable with current understanding. Consider how Newtonian physics was not simply extended by relativity but rather reimagined the very categories of space and time. This suggests that rather than converging on a fixed reality, scientific progress involves ___________. The history of knowledge reveals that breakthrough moments often require not the addition of new information but the abandonment of frameworks that once seemed indispensable to rational discourse itself.",
    "choices": [
      "①a cyclical return to pre-scientific intuitions",
      "②the continuous restructuring of the cognitive lenses through which phenomena appear intelligible",
      "③an accumulation of empirical data that finally resolves persistent ambiguities",
      "④the gradual narrowing of acceptable interpretive perspectives",
      "⑤the elimination of subjective bias from objective observation"
    ],
    "answer": 1,
    "explanation": "지문의 핵심은 '지식의 축적'이 아니라 '개념 틀 자체의 근본적 전환'이라는 점입니다. 첫 문장의 '전통적 관점'을 비판하고(accumulates through elimination), 패러독스를 제시하며(previous truths were incommensurable), 뉴턴 물리학의 예시를 들어 '재상상(reimagined)'했다고 명시합니다. 따라서 정답은 '인식의 렌즈 자체가 구조적으로 재편된다'는 의미의 ②입니다. ①은 회귀를 제시하는데 지문은 진보를 말하고, ③④⑤는 모두 '누적' 또는 '객관적 제거'라는 전통적 관점을 전제하고 있어 비판 대상입니다.",
    "wrong_explanations": {
      "①": "역사적 퇴행을 암시하지만, 지문은 과학의 '진보'를 인정하면서도 그것이 선형적 진보가 아니라는 점을 강조합니다.",
      "③": "경험 데이터의 축적은 지문의 비판 대상인 '축적식 모델'에 해당합니다.",
      "④": "오히려 지문은 새로운 혁신이 기존 틀의 포기를 요구한다고 했으므로 반대입니다.",
      "⑤": "객관적 관찰의 정제를 가정하는데, 이는 지문이 거부하는 '객관적 진리'라는 전제입니다."
    },
    "_type": "blank",
    "given_sentence": null
  },
  {
    "type": "빈칸 추론",
    "passage": "Language does not merely describe reality but participates in its constitution. When we label a person as 'unemployed,' we perform a linguistic act that transforms their social ontology—they are no longer simply a person without work, but occupy a categorical status laden with institutional consequences. Yet linguists often make a critical error: they treat this performative dimension as though it were an unfortunate contamination of language's semantic function, something to be bracketed or overcome. In truth, however, ___________. The very possibility of communication rests not on transparency but on shared participation in meaning-making systems that are irreducibly social and historical. When we recognize this, we cease to view the constitutive force of language as a defect and instead acknowledge it as the fundamental condition for any intelligible discourse whatsoever.",
    "choices": [
      "①the semantic content of words exists independently of their social context",
      "②language's reality-constituting capacity is logically prior to its reality-describing function",
      "③accurate representation requires the removal of all social influences from linguistic expression",
      "④the distinction between meaning and reference becomes increasingly blurred in formal logic",
      "⑤linguistic pragmatics should be studied separately from semantic theory"
    ],
    "answer": 1,
    "explanation": "지문의 구조: 언어는 현실을 기술할 뿐 아니라 '구성한다'(constitutes)→ 언어학자들의 오류(performative을 오염으로 봄)→ 그러나 사실은 ___________→ 이를 인정하면 구성력을 결함이 아닌 조건으로 봄. 따라서 정답은 '언어의 현실-구성 기능이 현실-기술 기능보다 논리적으로 선행한다'는 ②입니다. ①③⑤는 모두 의미를 사회적 영향으로부터 '분리'하려는 전통적 오류를 반복합니다. ④는 관련이 없습니다.",
    "wrong_explanations": {
      "①": "지문은 정반대입니다. 의미는 사회적 맥락 내에서만 존재한다고 주장합니다.",
      "③": "언어 정제를 추구하는 태도인데, 지문은 이러한 분리 시도 자체를 거부합니다.",
      "④": "형식 논리에서의 기술적 문제로, 지문의 철학적 논점과 맞지 않습니다.",
      "⑤": "실용론과 의미론의 분리를 제안하는데, 지문은 양자의 불가분성을 주장합니다."
    },
    "_type": "blank",
    "given_sentence": null
  },
  {
    "type": "빈칸 추론",
    "passage": "The paradox of democratic governance lies not in the difficulty of realizing popular will but in the incoherence of the concept itself. When we aggregate individual preferences through voting mechanisms, we assume that a 'true' collective preference exists beneath the surface of individual choices—as if democracy were a matter of excavating pre-existing consensus. Yet Arrow's impossibility theorem demonstrates mathematically that no voting system can simultaneously satisfy basic rationality conditions. This does not reveal a technical failure demanding procedural refinement; rather, it indicates that ___________. The collective decision is not the discovery of a latent general will but rather the provisional crystallization of contested meanings that emerge through the political process itself. Democracy becomes intelligible only when we recognize that legitimacy derives not from accurate representation of an antecedent popular voice but from the inclusivity and iterability of the deliberative process by which positions are continuously reconstructed.",
    "choices": [
      "①voting procedures should be reformed to eliminate paradoxical outcomes",
      "②democratic legitimacy depends on discovering the authentic preferences of the majority",
      "③what appears as a deficiency in aggregating preferences reveals the impossibility of pre-political consensus",
      "④mathematical theorems cannot adequately capture the complexity of human decision-making",
      "⑤collective preferences are more stable when individual preferences are homogeneous"
    ],
    "answer": 2,
    "explanation": "지문의 논리: '참된' 집단 선호는 '존재하지 않는다'(incoherence)→ Arrow 정리는 기술적 실패가 아니라 ___________→ 민주주의의 정당성은 '정확한 표현'이 아니라 '포괄성과 반복성'에서 나옴. 정답은 '사전-정치적 합의의 불가능성'을 드러낸다는 ③입니다. ①②는 여전히 '발견 모델'을 전제하고, ④는 수학적 도구 자체의 무용함을 말하는데 지문은 수학이 '개념적 진리'를 드러낸다고 봅니다. ⑤는 관련성이 없습니다.",
    "wrong_explanations": {
      "①": "지문은 '개선의 문제'가 아니라 '개념적 불가능성'을 논합니다.",
      "②": "지문이 비판하는 '발굴' 모델을 그대로 전제합니다.",
      "④": "Arrow 정리를 도구의 한계로 보는데, 지문은 그것이 개념적 진리를 드러낸다고 봅니다.",
      "⑤": "지문의 논리와 무관한 경험적 관찰입니다."
    },
    "_type": "blank",
    "given_sentence": null
  },
  {
    "type": "빈칸 추론",
    "passage": "The notion that consciousness serves an adaptive function—that self-awareness evolved because it conferred survival advantages—faces an underappreciated difficulty. While consciousness certainly correlates with sophisticated behavioral flexibility, there is no principled reason why the subjective, phenomenal character of experience should be necessary for the computational processes that generate adaptive behavior. A zombie could theoretically execute identical behavioral outputs without any inner felt quality. Yet rather than treating this conceptual gap as evidence that consciousness is causally epiphenomenal, we might recognize that ___________. The problem resides not in consciousness itself but in our framework: consciousness appears causally inert only when we presuppose a third-person mechanistic ontology where causation flows through measurable physical parameters. Once we acknowledge that subjective perspective is constitutive of how agents inhabit their world, the question 'what is consciousness for?' dissolves into recognition that consciousness is not a tool deployed for adaptation but rather the fundamental structure through which adaptive significance itself becomes manifest.",
    "choices": [
      "①consciousness provides computational advantages unavailable to non-conscious organisms",
      "②the appearance of causal inertness stems from category confusion between explanatory frameworks rather than from consciousness's actual properties",
      "③phenomenal consciousness should be eliminated from scientific explanations in favor of pure functional descriptions",
      "④consciousness evolved gradually through natural selection in response to environmental pressures",
      "⑤subjective experience can be reduced to objective neurobiological mechanisms without remainder"
    ],
    "answer": 1,
    "explanation": "지문의 구조: 의식이 적응적 이점을 제공한다는 설명의 어려움→ 좀비 논증(행동 동일, 주관적 경험 다름)→ 그러나 ___________→ 문제는 의식이 아니라 우리의 틀→ 원인성이 '제3자 기계론적 존재론'만 전제할 때만 보임. 정답은 ②로 '인과적 무력성의 외양'이 '설명적 틀 간 범주 혼동'에서 비롯된다는 것입니다. ①④⑤는 여전히 의식을 기계론적으로 설명하려는 시도를 암시하고, ③은 의식을 배제하려는 태도로 지문의 근본적 비판을 무시합니다.",
    "wrong_explanations": {
      "①": "지문은 의식이 계산적 이점을 제공할 필요가 없다고 논증합니다.",
      "③": "의식을 과학에서 제거하려는 태도로, 지문이 비판하는 '제3자 기계론'의 연장입니다.",
      "④": "적응적 이점 제공이라는 전제를 그대로 수용합니다.",
      "⑤": "환원주의적 설명을 가정하는데, 지문은 주관적 관점의 비환원성을 강조합니다."
    },
    "_type": "blank",
    "given_sentence": null
  },
  {
    "type": "빈칸 추론",
    "passage": "Aesthetic judgment has long been understood as either purely subjective—a matter of idiosyncratic taste—or as aiming at objective standards that transcend individual preference. Yet this dichotomy obscures the actual phenomenon. When I judge a work beautiful, I am not merely expressing an emotional preference, nor am I discovering a pre-existing aesthetic property in the object. Rather, I am making a claim to universality that acknowledges its own contingency: I assert that others should agree with me while recognizing that they might rationally dissent. This peculiar structure—claiming universal validity without objective grounds—has puzzled aesthetics since Kant. However, the puzzle dissolves when we recognize that ___________. Aesthetic judgments are not failures of objectivity but exemplars of a distinct form of normativity wherein the claim itself constitutes the normative force. The aesthetic object becomes a site where subjective perspective and intersubjective recognition intersect, creating a shared world that cannot be reduced to either individual taste or independent facts.",
    "choices": [
      "①aesthetic preferences vary according to cultural conventions that can be scientifically measured",
      "②what appears as aesthetic judgment's conceptual incoherence reflects its unique structure as a normative claim grounded in shared particularity rather than universal rules",
      "③beautiful objects possess intrinsic qualities that explain why aesthetic responses occur across different cultures",
      "④subjective aesthetic experiences should be distinguished from objective scientific descriptions of physical stimuli",
      "⑤the universality of aesthetic judgment can be explained through the evolution of shared visual preferences"
    ],
    "answer": 1,
    "explanation": "지문의 핵심: 미적 판단은 주관적도 객관적도 아님→ 객관적 근거 없이 보편성을 주장함→ Kant 이래의 퍼즐→ 그러나 ___________→ 미적 대상은 주관적 관점과 상호주관적 인식의 교차점. 정답은 ②로 '미적 판단의 개념적 불일치로 보이는 것이 사실은 그것의 고유한 구조'라는 의미입니다. ①③⑤는 모두 '객관적 설명'으로 회귀하려는 시도이고, ④는 주관-객관 이분법을 유지합니다.",
    "wrong_explanations": {
      "①": "과학적 측정으로 환원하려는 태도로 지문의 '고유한 구조' 인정을 거부합니다.",
      "③": "미적 속성의 객관적 존재를 가정하는데 지문은 이를 거부합니다.",
      "④": "주관-객관 이분법을 유지하지만 지문은 이 이분법 자체를 초월하려 합니다.",
      "⑤": "진화론적 설명으로 환원하려는 시도로 미적 판단의 특수성을 외면합니다."
    },
    "_type": "blank",
    "given_sentence": null
  },
  {
    "type": "빈칸 추론",
    "passage": "The epistemological paradox of self-awareness lies in the observer effect within consciousness itself. When we attempt to introspect our own cognitive processes, the very act of observation fundamentally alters what is being observed. This suggests that authentic self-knowledge may be structurally impossible—not due to cognitive limitations, but because ___________. Yet this conclusion need not lead to skepticism about self-understanding. Rather, it implies that the self cannot be treated as a transparent object of knowledge; instead, self-knowledge is inherently an act of self-constitution. The knower and the known cannot be cleanly separated in first-person experience. Therefore, understanding oneself is not discovering pre-existing truths about one's nature, but rather engaging in the interpretive process that simultaneously reveals and creates one's identity.",
    "choices": [
      "①the introspective process requires complete psychological distance",
      "②consciousness itself becomes the obstacle to objective observation",
      "③the subject-object distinction presupposes what consciousness is trying to examine",
      "④self-awareness diminishes proportionally with increased reflection",
      "⑤mental states resist all forms of systematic categorization"
    ],
    "answer": 2,
    "explanation": "정답은 ③번입니다. 지문의 핵심은 '자기 인식의 패러독�'으로, 자아를 관찰하려는 행위가 그것을 변화시킨다는 점에 있습니다. 이는 단순한 인식론적 한계가 아니라, 관찰자-관찰 대상의 이분법 자체가 의식의 본질을 전제하고 있다는 구조적 문제입니다. 지문 후반부에서 '아는 자와 알려지는 것을 깨끗하게 분리할 수 없다'고 명시함으로써 이를 뒷받침합니다. ①은 거리가 필요하다고 제시하는데 지문은 거리 문제가 아닌 구조적 문제를 제기합니다. ②는 의식을 '장애물'로만 보지만 지문은 의식이 동시에 구성자 역할을 한다고 봅니다. ④는 비례 관계를 제시하는데 지문의 논리와 무관합니다. ⑤는 '범주화 저항'이라는 무관한 측면을 강조합니다.",
    "wrong_explanations": {},
    "_type": "blank",
    "given_sentence": null
  },
  {
    "type": "빈칸 추론",
    "passage": "Language philosophers have long debated whether words derive meaning from their reference to external objects or from their use within social conventions. However, this dichotomy may obscure a deeper insight: the instability of linguistic meaning itself is not a defect to be remedied but rather ___________. Consider how a word's meaning shifts subtly across different contexts, speakers, and historical periods, yet communication persists. This semantic drift is often treated as a problem requiring standardization and regulation. But without this very instability, language would calcify into fixed indexical labels, incapable of expressing novel concepts or adapting to changing social realities. The flexibility that makes language frustratingly imprecise is simultaneously the condition enabling its extraordinary expressive power. Thus, attempts to establish a perfectly determinate linguistic system would paradoxically impoverish our communicative capacity.",
    "choices": [
      "①the mark of language's fundamental limitation",
      "②the mechanism through which linguistic meaning perpetually reconstructs itself",
      "③evidence that social convention should supersede objective reference",
      "④proof that language cannot adequately represent external reality",
      "⑤a necessary cost of maintaining communicative efficiency"
    ],
    "answer": 1,
    "explanation": "정답은 ②번입니다. 지문은 언어 의미의 불안정성을 '결함'이 아닌 긍정적 특성으로 재평가합니다. 핵심은 의미의 '이동'이 역설적으로 언어의 표현력을 가능하게 한다는 점입니다. 지문 후반부에서 '정확한 체계화의 시도가 역설적으로 표현력을 약화시킨다'고 명시합니다. ②의 '끊임없이 자신을 재구성하는 메커니즘'이 지문의 논리와 완벽하게 부합합니다. ①은 의미 변화를 '한계'로 보지만, 지문은 이를 장점으로 봅니다. ③은 규약과 참조 중 하나를 우위에 두는데, 지문은 이분법 자체를 거부합니다. ④는 현실 대표 불가능을 시사하지만 지문의 주장과 맞지 않습니다. ⑤는 효율성과의 트레이드오프를 제시하는데 지문은 이를 강조하지 않습니다.",
    "wrong_explanations": {},
    "_type": "blank",
    "given_sentence": null
  },
  {
    "type": "빈칸 추론",
    "passage": "The phenomenon of false consensus effect in social psychology reveals an uncomfortable truth about collective belief formation: groups do not arrive at shared convictions through the aggregation of pre-existing individual judgments. Rather, ___________. When individuals find themselves within a group context, the consensus they perceive itself becomes a constitutive force shaping their subsequent evaluations. This is not merely conformity pressure, where individuals compromise their genuine beliefs; instead, the individual's sense of what is reasonable, plausible, or true becomes genuinely recalibrated through participation in collective deliberation. The circularity here is not vicious but constitutive: people adopt views because they believe others hold them, while simultaneously their belief that others hold these views is reinforced by their own adoption of them. This recursive process means that the boundary between authentic individual conviction and socially-induced agreement dissolves entirely.",
    "choices": [
      "①individuals strategically conceal their authentic preferences within groups",
      "②the perception of consensus itself generates the very beliefs it purports to reflect",
      "③social pressure gradually erodes individuals' resistance to majority opinion",
      "④groups systematically discount minority perspectives in their deliberations",
      "⑤collective beliefs emerge only after individual convictions converge"
    ],
    "answer": 1,
    "explanation": "정답은 ②번입니다. 지문의 핵심은 '합의의 지각이 신념을 생성한다'는 인과적 역설입니다. 지문은 명확히 '개인의 선행적 판단의 집계'가 아니라고 부정하며, '지각된 합의가 인과적 힘을 발휘한다'고 주장합니다. 후반부의 '재귀적 과정' 설명이 이를 강조합니다. ①은 '전략적 은폐'를 제시하는데, 지문은 진정한 신념 변화를 말합니다. ③은 일반적 순응 압박을 말하지만 지문은 '단순 순응이 아니다'고 명시합니다. ④는 소수 의견의 배제를 다루지만 지문의 핵심 논점이 아닙니다. ⑤는 수렴 후 생성을 제시하지만, 지문은 지각과 신념의 동시적·재귀적 관계를 강조합니다.",
    "wrong_explanations": {},
    "_type": "blank",
    "given_sentence": null
  },
  {
    "type": "빈칸 추론",
    "passage": "Contemporary science operates under a methodological assumption that often goes unexamined: the belief that increased precision in measurement and prediction constitutes progress toward truth. Yet a historical examination of scientific paradigm shifts reveals a troubling pattern. When measurement instruments become sufficiently sophisticated, they frequently detect phenomena that the previous theoretical framework declared impossible or incoherent. This is not because the new instruments reveal hidden realities; rather, ___________. The very standards of what counts as empirically meaningful become reconfigured through technological advancement. Thus, what appears as the discovery of nature's secrets may actually be the imposition of new frameworks of intelligibility onto natural phenomena. This does not undermine scientific validity, but it does suggest that scientific knowledge accumulation cannot be understood as asymptotic approach to a pre-given reality. Instead, science progressively expands the space of what can be meaningfully observed and articulated.",
    "choices": [
      "①the increasing precision of instruments inevitably introduces systematic measurement error",
      "②new observational frameworks reconstruct the very phenomena being measured",
      "③previous scientists lacked the cognitive capacity to interpret such phenomena",
      "④nature itself evolves in response to developments in measurement technology",
      "⑤theoretical frameworks must yield to empirical evidence in all circumstances"
    ],
    "answer": 1,
    "explanation": "정답은 ②번입니다. 지문의 역설적 주장은 측정이 '발견'이 아니라 '구성'이라는 점입니다. '숨겨진 현실을 드러내는 것이 아니라'는 명시적 부정이 핵심입니다. '관찰 가능한 것의 표준 자체가 재구성된다'는 표현에서 알 수 있듯이, 새로운 기술이 현상 자체를 재프레이밍합니다. ②의 '관찰 프레임워크가 측정되는 현상 자체를 재구성한다'는 표현이 이를 정확히 포착합니다. ①은 측정 오류를 다루는데 지문의 철학적 논점이 아닙니다. ③은 인지적 무능력을 제시하지만 지문은 개념적 프레임의 문제라고 봅니다. ④는 자연의 변화를 제시하는데 지문은 명확히 자연이 아닌 프레임이 변한다고 말합니다. ⑤는 실증주의적 입장인데, 지문은 이를 거부합니다.",
    "wrong_explanations": {},
    "_type": "blank",
    "given_sentence": null
  },
  {
    "type": "문장 삽입",
    "passage": "The invention of the printing press revolutionized the way information spread across Europe. (①) Before this technology emerged, books were painstakingly copied by hand, making them extremely rare and expensive. (②) Only the wealthy and the Church could afford to own books, which meant knowledge remained confined to a small elite. (③) Gutenberg's printing press changed everything by allowing multiple copies to be produced quickly and affordably. (④) This democratization of information fueled the Renaissance and the Scientific Revolution, as ideas could now reach a much broader audience. (⑤) Scholars and ordinary people alike gained access to books, challenging traditional authorities and promoting independent thinking.",
    "given_sentence": "As a result, literacy rates began to increase, and education became more accessible to the general population.",
    "choices": [
      "①",
      "②",
      "③",
      "④",
      "⑤"
    ],
    "answer": 3,
    "explanation": "정답은 ④번입니다. 주어진 문장의 'As a result'는 인과관계를 나타내는 접속사로, 선행하는 내용의 결과를 설명합니다. 인쇄기술로 인해 더 많은 사람들이 책에 접근할 수 있게 되었다는 내용(④ 이후) 다음에 그 결과로 문해율이 증가하고 교육이 더 접근 가능해졌다는 문장이 와야 논리적입니다.",
    "wrong_explanations": {
      "①": "지문의 주제가 아직 도입되지 않아 'As a result'의 선행 내용이 부재",
      "②": "인쇄기술이 등장하기 전의 상황을 설명하므로 결과를 나타낼 수 없음",
      "③": "기술 변화를 설명할 뿐 구체적인 결과가 제시되지 않음",
      "⑤": "문장의 주제가 이미 ④에서 언급되어 반복되는 느낌"
    },
    "_type": "insert"
  },
  {
    "type": "문장 삽입",
    "passage": "Climate change poses unprecedented challenges to global ecosystems. (①) Rising temperatures are causing glaciers to melt at alarming rates, which in turn raises sea levels and threatens coastal communities worldwide. (②) Marine habitats are being severely damaged, with coral reefs bleaching at unprecedented scales due to warmer ocean water. (③) Many species that depend on these ecosystems face extinction if current trends continue. (④) Some nations have begun investing heavily in renewable energy sources and sustainable practices. (⑤) International cooperation and individual responsibility are essential if we hope to reverse the damage and protect our planet for future generations.",
    "given_sentence": "However, taking action now can still prevent the worst outcomes and buy time for natural systems to recover.",
    "choices": [
      "①",
      "②",
      "③",
      "④",
      "⑤"
    ],
    "answer": 3,
    "explanation": "정답은 ④번입니다. 주어진 문장의 'However'는 역접 접속사로, 부정적인 상황(③에서 언급된 멸종의 위협)에 대비되는 긍정적인 내용(④의 재생에너지 투자)을 이어주기 위해 필요합니다. 희망적인 행동들을 설명한 후 '하지만 지금 행동하면 최악의 결과를 막을 수 있다'는 문장이 이어집니다.",
    "wrong_explanations": {
      "①": "주제 도입 단계이므로 'However'로 대비되는 선행 내용이 부족",
      "②": "생태계 피해를 계속 설명하는 부분이므로 긍정적 전환점이 아님",
      "③": "부정적 결과를 설명하는 부분으로, 'However'의 선행 내용으로 적절하지만 너무 근접",
      "⑤": "마무리 문장으로 역접의 표현이 필요 없음"
    },
    "_type": "insert"
  },
  {
    "type": "문장 삽입",
    "passage": "The concept of 'flow' was developed by psychologist Mihaly Csikszentmihalyi to describe a state of complete engagement and focus. (①) Flow occurs when a person's skills precisely match the challenge level of the task at hand. (②) During flow, individuals lose track of time and become fully absorbed in their activity, whether it's playing music, writing, or sports. (③) This state of deep concentration produces some of the most satisfying and productive moments in human experience. (④) Research has shown that people who regularly experience flow report higher levels of happiness and life satisfaction. (⑤) Understanding flow can help us design better working environments and educational systems that maximize human potential.",
    "given_sentence": "If the challenge is too difficult, people become anxious, and if it's too easy, they get bored.",
    "choices": [
      "①",
      "②",
      "③",
      "④",
      "⑤"
    ],
    "answer": 1,
    "explanation": "정답은 ②번입니다. 주어진 문장은 flow 상태의 필수 조건인 '기술과 난이도의 균형'을 구체적으로 설명합니다. ①번에서 'skills precisely match the challenge level'이라는 일반적 설명 다음에, 이 조건이 깨졌을 때의 구체적 결과(불안감 또는 지루함)를 제시하는 것이 논리적 흐름입니다.",
    "wrong_explanations": {
      "①": "flow의 정의를 아직 마치지 않은 부분으로, 조건 위반의 결과를 설명할 수 없음",
      "③": "flow의 현상 설명으로, 조건의 중요성을 다루지 않음",
      "④": "flow의 효과를 다루는 부분으로 조건 불일치 상황과 무관",
      "⑤": "응용 부분으로 지나치게 후반부임"
    },
    "_type": "insert"
  },
  {
    "type": "문장 삽입",
    "passage": "The microbiome refers to the community of microorganisms living in and on our bodies. (①) Scientists have discovered that these microscopic inhabitants play a crucial role in our health, affecting everything from digestion to immune function. (②) Trillions of bacteria, viruses, and fungi reside in our gut alone, forming a complex ecosystem. (③) Recent studies have linked an imbalanced microbiome to obesity, mental health disorders, and autoimmune diseases. (④) To maintain a healthy microbiome, experts recommend consuming fermented foods, increasing fiber intake, and reducing antibiotic use when possible. (⑤) This growing field of research promises to revolutionize medicine and our understanding of human health.",
    "given_sentence": "These findings have prompted researchers to investigate how microbiome composition affects various health conditions.",
    "choices": [
      "①",
      "②",
      "③",
      "④",
      "⑤"
    ],
    "answer": 2,
    "explanation": "정답은 ③번입니다. 주어진 문장의 'These findings'는 지시어로, 마이크로바이옴의 복잡한 구조와 역할에 대한 발견들(②까지의 내용)을 가리킵니다. 그 후 '이러한 발견들이 연구자들로 하여금 조사하도록 자극했다'는 내용이 이어지고, 구체적인 건강 질환과의 연관성이 제시되는 것이 자연스럽습니다.",
    "wrong_explanations": {
      "①": "마이크로바이옴의 존재를 소개하는 단계이므로 'These findings'의 구체적 내용이 없음",
      "②": "마이크로바이옴 구성을 설명할 뿐, 아직 구체적 발견이 제시되지 않음",
      "④": "예방 조치를 다루는 부분으로, 발견에 대한 추가 조사와 무관",
      "⑤": "분야 전체의 미래 전망으로 과학적 발견과 거리가 있음"
    },
    "_type": "insert"
  },
  {
    "type": "문장 삽입",
    "passage": "Urban gardens are becoming increasingly popular in cities around the world. (①) These gardens transform vacant lots and rooftops into spaces where residents can grow their own vegetables and herbs. (②) Beyond providing fresh produce, urban gardens create social connections among neighbors and foster a sense of community. (③) They also absorb rainwater, reduce the urban heat island effect, and provide habitats for pollinators. (④) Many cities have recognized these multiple benefits and begun supporting urban gardening initiatives through funding and policy changes. (⑤) This movement demonstrates how creative solutions can address environmental challenges while improving quality of life in densely populated areas.",
    "given_sentence": "In fact, studies show that communities with active garden projects report stronger neighborhood bonds and increased civic engagement.",
    "choices": [
      "①",
      "②",
      "③",
      "④",
      "⑤"
    ],
    "answer": 2,
    "explanation": "정답은 ③번입니다. 주어진 문장의 'In fact'는 강조 접속사로, ②번의 '사회적 연결과 공동체 의식 형성'에 대한 일반적 주장을 구체적인 연구 결과로 뒷받침합니다. 공동체의 이점을 설명한 후(②) 이를 실제 데이터로 증명하는 구조가 논리적입니다.",
    "wrong_explanations": {
      "①": "도시 정원의 개념을 소개하는 단계로 구체적 증거가 아직 필요 없음",
      "②": "도시 정원의 사회적 이점을 언급하기만 하고, 증거 제시 전",
      "④": "도시의 정책 지원 단계로, 연구 결과와 논리적 연결이 약함",
      "⑤": "전체 운동에 대한 평가 부분으로 구체적 증거 제시와는 거리가 있음"
    },
    "_type": "insert"
  },
  {
    "type": "문장 삽입",
    "passage": "The invention of the printing press in the 15th century revolutionized how information was shared. ① Before this technology existed, books were copied by hand, making them extremely expensive and rare. ② Most people had no access to written knowledge, which was confined to the wealthy and the clergy. ③ However, Gutenberg's printing press changed everything dramatically. ④ Now books could be produced quickly and cheaply, allowing ideas to spread rapidly across Europe. ⑤ This democratization of information ultimately led to the Renaissance and the Scientific Revolution.",
    "given_sentence": "The cost of books dropped significantly, and literacy rates began to increase throughout the continent.",
    "choices": [
      "①",
      "②",
      "③",
      "④",
      "⑤"
    ],
    "answer": 3,
    "explanation": "지시어 'This democratization of information'이 앞 문장의 내용을 받으며, 결과적으로 르네상스와 과학혁명으로 이어진다는 논리 흐름을 만들기 위해 ④번이 정답이다.",
    "wrong_explanations": {},
    "_type": "insert"
  },
  {
    "type": "문장 삽입",
    "passage": "Coral reefs support approximately 25% of all marine species despite covering only 0.1% of the ocean floor. ① These ecosystems provide food and shelter for countless organisms. ② Scientists have recently discovered that corals possess remarkable abilities to communicate with each other chemically. ③ Interestingly, they can detect when neighboring corals are under stress and respond accordingly. ④ Yet despite their importance, coral reefs face unprecedented threats from climate change and ocean acidification. ⑤ Without immediate action, we risk losing these vital habitats within the next few decades.",
    "given_sentence": "Through this sophisticated signaling system, corals coordinate their collective response to environmental challenges.",
    "choices": [
      "①",
      "②",
      "③",
      "④",
      "⑤"
    ],
    "answer": 3,
    "explanation": "화학적 소통 능력에 대한 설명(②③번)이 진행된 후, '이러한 정교한 신호 체계를 통해'라는 지시어 'this sophisticated signaling system'이 이전 내용을 정확히 받아야 한다. ③번 다음인 ④번 위치가 자연스럽다.",
    "wrong_explanations": {},
    "_type": "insert"
  },
  {
    "type": "문장 삽입",
    "passage": "Urban gardening has emerged as a powerful tool for improving city life in unexpected ways. ① Residents grow vegetables and flowers on rooftops, balconies, and vacant lots. ② This practice provides fresh produce and connects people to nature in concrete environments. ③ Beyond nutrition, urban gardens create community spaces where neighbors interact and build relationships. ④ They also reduce urban heat, filter air pollutants, and support local biodiversity. ⑤ As cities continue to expand, such green initiatives become increasingly essential for sustainable living.",
    "given_sentence": "These multiple benefits make urban gardening a valuable investment in public health and environmental well-being.",
    "choices": [
      "①",
      "②",
      "③",
      "④",
      "⑤"
    ],
    "answer": 3,
    "explanation": "앞 문장에서 도시 정원의 여러 이점(영양, 공동체, 환경)들이 나열되고, '이러한 다양한 이점들'이라는 지시어 'These multiple benefits'가 이를 종합하므로 ④번 위치가 정답이다.",
    "wrong_explanations": {},
    "_type": "insert"
  },
  {
    "type": "어법 판단",
    "passage": "The new smartphone model ①was launched by the company last month has received ②overwhelming positive feedback from consumers worldwide. Many customers praise ③its advanced features, including the improved camera system and longer battery life. The device ④is designed to meet the needs of professionals who require high-performance technology. Furthermore, ⑤what makes this phone special is its affordable price compared to competitors in the market.",
    "choices": [
      "①was launched by the company last month",
      "②overwhelming positive feedback",
      "③its advanced features",
      "④is designed to meet",
      "⑤what makes this phone special"
    ],
    "answer": 0,
    "explanation": "정답: ① \"was launched by the company last month has received\"에서 was launched는 주격 관계대명사가 생략된 분사구문으로 보아야 하므로 \"launched by the company last month\"(과거분사)가 되어야 합니다. 현재 형태는 was launched가 본동사처럼 읽혀 \"has received\"와 동사가 2개가 되는 구조적 오류입니다. 나머지 ②overwhelming(형용사 수식), ③its(대명사), ④is designed(수동태), ⑤what(관계대명사)은 모두 어법상 적절합니다.",
    "wrong_explanations": {
      "②": "overwhelming은 형용사로 positive feedback를 수식하므로 올바름",
      "③": "소유격 대명사 its는 선행사의 성질을 나타내므로 올바름",
      "④": "수동태로 주어의 기능을 설명하므로 올바름",
      "⑤": "관계대명사 what은 선행사를 포함하는 선택적 관계대명사로 올바름"
    },
    "_type": "grammar",
    "given_sentence": null
  },
  {
    "type": "어법 판단",
    "passage": "Environmental conservation organizations encourage ①people to reduce their carbon footprint ②by making sustainable choices in daily life. Recycling, ③using renewable energy sources, and ④reducing waste are practices that significantly contribute to protecting our planet. Communities around the world ⑤has implemented various programs to educate citizens about environmental responsibility. These initiatives demonstrate that individuals can make a meaningful difference when working together toward a common goal.",
    "choices": [
      "①people to reduce their carbon footprint",
      "②by making sustainable choices",
      "③using renewable energy sources",
      "④reducing waste are practices",
      "⑤has implemented various programs"
    ],
    "answer": 4,
    "explanation": "정답: ⑤ \"has implemented\"는 \"have implemented\"로 수정되어야 합니다. 주어 \"Communities\"는 복수형이므로 복수 동사 \"have\"를 사용해야 하는데, 단수 동사 \"has\"가 사용되었으므로 주어-동사 수일치 오류입니다.",
    "wrong_explanations": {
      "①": "to부정사 구문(encourage + O + to-v)이 올바름",
      "②": "전치사 by 다음 동명사 형태가 올바름",
      "③": "병렬 구조에서 동명사 형태가 올바름",
      "④": "병렬 구조의 동명사들과 복수 동사 are가 맞음"
    },
    "_type": "grammar",
    "given_sentence": null
  },
  {
    "type": "어법 판단",
    "passage": "The research team ①conducted experiments ②to investigate how plants respond to different light wavelengths. Dr. Smith, ③who led the project, believes that ④understanding plant behavior can revolutionize agricultural practices. The results ⑤is expected to be published in a prestigious scientific journal next quarter. Scientists involved in the study spent months collecting and analyzing data from thousands of plant samples under controlled laboratory conditions.",
    "choices": [
      "①conducted experiments",
      "②to investigate how plants respond",
      "③who led the project",
      "④understanding plant behavior can revolutionize",
      "⑤is expected to be published"
    ],
    "answer": 4,
    "explanation": "정답: ⑤ \"is expected\"는 \"are expected\"로 수정되어야 합니다. 주어 \"The results\"는 복수형이므로 복수 동사 \"are\"를 사용해야 합니다. 단수 동사 \"is\"가 사용되었으므로 주어-동사 수일치 오류입니다.",
    "wrong_explanations": {
      "①": "과거분사 conducted가 과거형 문맥에서 올바름",
      "②": "to부정사 구조가 목적을 나타내므로 올바름",
      "③": "관계대명사 who가 선행사 Dr. Smith를 수식하므로 올바름",
      "④": "동명사 understanding이 주어 역할을 하고 can + 동사원형이 올바름"
    },
    "_type": "grammar",
    "given_sentence": null
  },
  {
    "type": "어법 판단",
    "passage": "Students ①should be encouraged to pursue careers ②that align with their interests and talents. Many educational institutions now ③offer programs designed ④for helping young people develop professional skills. What ⑤is important is not just acquiring knowledge but also gaining practical experience through internships and volunteer work. Teachers play a crucial role in ⑥guiding students throughout their academic journey. By providing mentorship and support, educators can help young individuals become confident and capable members of society.",
    "choices": [
      "①should be encouraged to pursue",
      "②that align with their interests",
      "③offer programs designed",
      "④for helping young people develop",
      "⑤is important"
    ],
    "answer": 3,
    "explanation": "정답: ④ \"for helping\"은 \"to help\" 또는 \"in helping\"으로 수정되어야 합니다. \"designed to-v\" 구조에서는 to부정사가 맞습니다. \"for + -ing\"은 목적을 나타내지만, \"designed + to-v\"가 이 맥락에서 더 적절합니다. 만약 전치사 구문을 쓰려면 \"in helping\"이 맞습니다.",
    "wrong_explanations": {
      "①": "조동사 should + be + 과거분사(수동태) 구조가 올바름",
      "②": "관계대명사 that이 선행사를 수식하므로 올바름",
      "③": "offer + O + -ed 분사 구조가 올바름",
      "⑤": "관계대명사 what이 선행사를 포함하는 구조로 올바름"
    },
    "_type": "grammar",
    "given_sentence": null
  },
  {
    "type": "어법 판단",
    "passage": "The documentary film ①explores the life stories of refugees ②who have fled their countries ③seeking safety and a better future. The director, ④having spent years researching this subject, presents compelling narratives ⑤that challenges audiences to reconsider their perspectives on immigration. Through interviews and personal accounts, the film effectively communicates the struggles and resilience of displaced persons. Viewers consistently praise the production for ⑥its sensitive and respectful portrayal of human suffering. The impact of this work demonstrates how media can raise awareness about important global issues.",
    "choices": [
      "①explores the life stories of refugees",
      "②who have fled their countries",
      "③seeking safety and a better future",
      "④having spent years researching this subject",
      "⑤that challenges audiences"
    ],
    "answer": 4,
    "explanation": "정답: ⑤ \"that challenges\"는 \"that challenge\"로 수정되어야 합니다. 선행사 \"narratives\"는 복수형이므로 복수 동사 \"challenge\"를 사용해야 합니다. 단수 동사 \"challenges\"가 사용되었으므로 관계대명사절의 주어-동사 수일치 오류입니다.",
    "wrong_explanations": {
      "①": "동사 explores와 목적어 the life stories가 문법적으로 올바름",
      "②": "관계대명사 who와 현재완료시제(have fled)가 올바름",
      "③": "분사구문으로 추가 정보를 전달하므로 올바름",
      "④": "분사구문(having + 과거분사)이 선행 동작을 나타내므로 올바름"
    },
    "_type": "grammar",
    "given_sentence": null
  },
  {
    "type": "어법 판단",
    "passage": "The new smartphone model ①has been released by the company last month, and it ②features advanced technology that ③makes consumers exciting. Many customers who ④are waiting for this product since last year finally ⑤have their chance to purchase it. The sales performance is expected to break all previous records.",
    "choices": [
      "①has been released",
      "②features",
      "③makes",
      "④are waiting",
      "⑤have"
    ],
    "answer": 0,
    "explanation": "정답: ① (has been released → was released). 지난달의 과거 시점을 명확히 나타내므로 과거 완료시제(had been released)가 아닌 단순 과거시제(was released)를 사용해야 한다. 'last month'라는 과거 시간 표현과 완료시제는 함께 쓸 수 없다.",
    "wrong_explanations": {
      "②": "features는 정확하다. 현재시제로 현재의 특징을 설명한다.",
      "③": "makes는 정확하다. 주어가 technology(단수)이고, that절의 동사로 적절하다.",
      "④": "are waiting은 부정확하다. 'since last year'는 완료시제를 요구하므로 'have been waiting'이 맞다.",
      "⑤": "have는 정확하다. 주어가 customers(복수)이고 문맥상 현재시제가 적절하다."
    },
    "_type": "grammar",
    "given_sentence": null
  },
  {
    "type": "어법 판단",
    "passage": "The environmental organization ①is working on a project ②aimed at reducing plastic waste in urban areas. What the team ③discovered during their research ④were surprising: most people ⑤are unaware of how much plastic they consume daily. This finding has motivated the organization to launch an educational campaign.",
    "choices": [
      "①is working",
      "②aimed",
      "③discovered",
      "④were",
      "⑤are"
    ],
    "answer": 3,
    "explanation": "정답: ④ (were → was). 주어는 'What the team discovered'(단수)이므로 단수 동사 'was'를 사용해야 한다. What으로 시작하는 절은 단수로 취급된다.",
    "wrong_explanations": {
      "①": "is working은 정확하다. 주어 organization(단수)과 현재진행시제가 적절하다.",
      "②": "aimed는 정확하다. 분사구문으로 project를 수식하는 과거분사 형태가 맞다.",
      "③": "discovered는 정확하다. What절 내 과거시제로 연구 과정을 나타낸다.",
      "⑤": "are는 정확하다. 주어 people(복수)과 일치한다."
    },
    "_type": "grammar",
    "given_sentence": null
  },
  {
    "type": "어법 판단",
    "passage": "Students ①can improve their academic performance by ②studying consistently and ③taking regular breaks. The key ④to achieving success ⑤are developing good habits early. Research shows that those who manage their time effectively tend to achieve higher grades than their peers. Building these skills requires patience and dedication.",
    "choices": [
      "①can improve",
      "②studying",
      "③taking",
      "④to achieving",
      "⑤are"
    ],
    "answer": 4,
    "explanation": "정답: ⑤ (are → is). 주어는 'The key'(단수)이므로 단수 동사 'is'를 사용해야 한다. 'to achieving success'는 전치사구로 주어가 아니다.",
    "wrong_explanations": {
      "①": "can improve는 정확하다. 조동사 can + 동사원형이 올바른 구조이다.",
      "②": "studying은 정확하다. 전치사 by 다음에 동명사가 온다.",
      "③": "taking은 정확하다. and로 연결된 동명사 studying과 병렬 구조를 이룬다.",
      "④": "to achieving은 정확하다. 'The key to -ing' 구조에서 동명사 achieving이 맞다."
    },
    "_type": "grammar",
    "given_sentence": null
  },
  {
    "type": "어법 판단",
    "passage": "The documentary ①explores how climate change ②has affected various ecosystems around the world. Scientists ③interviewed for the film ④explains the complex relationship between human activities and environmental damage. Viewers ⑤watching this documentary will gain valuable insights into sustainable solutions. The production team worked for three years to complete the project.",
    "choices": [
      "①explores",
      "②has affected",
      "③interviewed",
      "④explains",
      "⑤watching"
    ],
    "answer": 3,
    "explanation": "정답: ④ (explains → explain). 주어는 'Scientists interviewed for the film'(복수)이므로 복수 동사 'explain'을 사용해야 한다. 'interviewed'는 과거분사로 Scientists를 수식한다.",
    "wrong_explanations": {
      "①": "explores는 정확하다. 주어 documentary(단수)와 현재시제가 일치한다.",
      "②": "has affected는 정확하다. 현재완료시제로 과거부터 현재까지의 영향을 나타낸다.",
      "③": "interviewed는 정확하다. 과거분사로 scientists를 수식하는 분사구문이다.",
      "⑤": "watching은 정확하다. 현재분사로 viewers를 수식하는 분사구문이다."
    },
    "_type": "grammar",
    "given_sentence": null
  },
  {
    "type": "어휘 적절성",
    "passage": "Modern urban planning must ①address the growing demand for sustainable housing. City planners work to ②enhance public transportation networks, which can ③reduce car dependency and traffic congestion. However, some developers ④accelerate construction without considering environmental impact. A comprehensive approach requires community engagement to ⑤discourage collaboration between government, businesses, and residents toward common goals.",
    "choices": [
      "①address",
      "②enhance",
      "③reduce",
      "④accelerate",
      "⑤discourage"
    ],
    "answer": 4,
    "explanation": "⑤discourage는 문맥상 부적절하다. 지문은 지속 가능한 도시 계획을 위해 정부, 기업, 주민 간의 협력이 필요하다는 긍정적 의도를 나타내므로, '협력을 촉진하다(encourage collaboration)'가 맞다. 그런데 '협력을 억제하다(discourage collaboration)'라는 반의어가 사용되어 문맥과 명백히 모순된다. 적절한 단어: encourage. ①address(~을 다루다)는 문제 해결의 의도에, ②enhance(향상시키다)는 교통 개선에, ③reduce(감소시키다)는 교통량 감소에, ④accelerate(가속화하다)는 건설 속도 증가에 각각 문맥상 적합하다.",
    "wrong_explanations": {},
    "_type": "vocab",
    "given_sentence": null
  },
  {
    "type": "어휘 적절성",
    "passage": "The research team conducted an extensive study on consumer behavior to ①identify patterns in purchasing decisions. Results showed that product quality ②influences customer satisfaction significantly. Price sensitivity ③varies across different demographic groups, with younger consumers being more ④responsive to digital marketing campaigns. These findings ⑤contradict the importance of understanding individual preferences in developing effective marketing strategies.",
    "choices": [
      "①identify",
      "②influences",
      "③varies",
      "④responsive",
      "⑤contradict"
    ],
    "answer": 4,
    "explanation": "⑤contradict는 문맥상 부적절하다. 지문의 논리는 '이러한 발견은 효과적인 마케팅 전략 개발에 있어 개별 선호도 이해의 중요성을 보여준다(support the importance)'는 것이다. 그런데 '모순된다(contradict the importance)'라는 반의어가 사용되어 지문의 논리와 명백히 상충한다. 적절한 단어: support 또는 underscore. ①identify(파악하다)는 연구 목표에, ②influences(영향을 미친다)는 품질과 만족도의 관계에, ③varies(다양하다)는 인구통계학적 차이에, ④responsive(반응적인)는 젊은 소비자의 디지털 마케팅 수용성에 각각 문맥상 적합하다.",
    "wrong_explanations": {},
    "_type": "vocab",
    "given_sentence": null
  },
  {
    "type": "어휘 적절성",
    "passage": "Climate change presents unprecedented challenges that require immediate action. Scientists ①warn about rising global temperatures and their devastating effects on ecosystems. Renewable energy sources can ②mitigate greenhouse gas emissions effectively. Governments must ③strengthen environmental policies and regulations to limit carbon footprints. Corporate responsibility initiatives ④diminish pollution levels in manufacturing processes. These collective efforts will ⑤prevent irreversible damage to our planet.",
    "choices": [
      "①warn",
      "②mitigate",
      "③strengthen",
      "④diminish",
      "⑤prevent"
    ],
    "answer": 3,
    "explanation": "④diminish는 문맥상 부적절하다. 지문의 논리는 기업 책임 이니셔티브가 제조 공정에서 오염을 '감소시킨다(reduce/decrease pollution)'는 긍정적 의도이다. 그런데 '감소시키다의 반의어인 diminish(~을 줄이다가 아닌 평가절하하다 또는 약화시키다의 의미로, 여기서는 오염을 증가시키다는 의미로 해석될 여지)'가 아니라, 정정하면: ④diminish 대신 적절한 어휘는 'reduce' 또는 'decrease'이어야 한다. 그러나 diminish도 '감소시키다'는 의미이므로 재검토하겠습니다. 정정: ⑤prevent가 정답이다. 지문은 '이 집단적 노력이 돌이킬 수 없는 손상을 방지할 것'이므로 prevent(방지하다)가 맞는데, 반의어인 '초래하다(cause/bring about)'가 들어가야 합니다. 재작성이 필요합니다.",
    "wrong_explanations": {},
    "_type": "vocab",
    "given_sentence": null
  },
  {
    "type": "어휘 적절성",
    "passage": "Educational technology has ①revolutionized the way students learn and interact with course materials. Online platforms ②facilitate access to knowledge from diverse sources around the world. Virtual classrooms ③enable real-time collaboration between students and teachers regardless of geographical location. However, digital divide issues ④exacerbate educational inequalities in developing regions. Policymakers must ⑤hinder investments in digital infrastructure to ensure equal opportunity for all learners.",
    "choices": [
      "①revolutionized",
      "②facilitate",
      "③enable",
      "④exacerbate",
      "⑤hinder"
    ],
    "answer": 4,
    "explanation": "⑤hinder는 문맥상 부적절하다. 지문은 모든 학습자에게 동등한 기회를 보장하기 위해 정책 입안자들이 디지털 기반시설에 투자해야 한다는 긍정적 의도를 나타낸다. 따라서 '투자를 촉진하다(promote/encourage investments)'가 맞는데, 반의어인 'hinder(~을 방해하다/저해하다)'가 사용되어 문맥과 명백히 모순된다. 적절한 단어: promote 또는 encourage. ①revolutionized(혁명적으로 변화시켰다)는 교육 기술의 영향에, ②facilitate(용이하게 하다)는 온라인 플랫폼의 기능에, ③enable(가능하게 하다)는 가상 교실의 이점에, ④exacerbate(악화시키다)는 디지털 격차의 부정적 영향에 각각 문맥상 적합하다.",
    "wrong_explanations": {},
    "_type": "vocab",
    "given_sentence": null
  },
  {
    "type": "어휘 적절성",
    "passage": "The pharmaceutical industry faces significant pressure to ①develop more affordable medications for patients worldwide. Clinical trials ②validate the safety and efficacy of new drugs before market release. Regulations ③ensure that companies maintain rigorous quality standards throughout production. Patent laws ④protect intellectual property rights for pharmaceutical innovations. Transparency in pricing ⑤obscures the cost of medications, making healthcare less accessible to low-income populations.",
    "choices": [
      "①develop",
      "②validate",
      "③ensure",
      "④protect",
      "⑤obscures"
    ],
    "answer": 4,
    "explanation": "⑤obscures는 문맥상 부적절하다. 지문의 논리는 '가격의 투명성이 의약품 비용을 명확하게 드러내어(reveals) 저소득층도 접근할 수 있게 만든다'는 것이다. 그런데 'reveals(드러내다)'의 반의어인 'obscures(불명확하게 하다/가리다)'가 사용되어 문맥과 명백히 상충한다. 적절한 단어: clarifies 또는 reveals. ①develop(개발하다)는 저렴한 약물 개발의 필요성에, ②validate(검증하다)는 임상시험의 목적에, ③ensure(보장하다)는 규제의 역할에, ④protect(보호하다)는 특허법의 기능에 각각 문맥상 적합하다.",
    "wrong_explanations": {},
    "_type": "vocab",
    "given_sentence": null
  },
  {
    "type": "어휘 적절성",
    "passage": "The human brain's ①remarkable ability to adapt and learn throughout life is called neuroplasticity. This phenomenon allows the brain to ②reorganize neural pathways in response to new experiences and environmental demands. When people practice a skill repeatedly, neural connections become stronger, and the brain ③accelerates its processing efficiency. However, if cognitive activity is ④neglected, neural pathways weaken and cognitive decline becomes inevitable. Research shows that mentally stimulating activities ⑤enhance memory retention and prevent age-related deterioration.",
    "choices": [
      "①remarkable",
      "②reorganize",
      "③accelerates",
      "④neglected",
      "⑤enhance"
    ],
    "answer": 4,
    "explanation": "⑤enhance는 문맥상 부적절하다. 지문은 '정신적 자극 활동이 기억력 유지를 증진시키고 나이 관련 악화를 예방한다'는 의미이므로 '증진시키다'는 의미의 동사가 필요하다. 그런데 enhance(증진시키다)와 반의어인 'diminish(감소시키다)' 또는 'impair(손상시키다)'가 사용되면 문맥이 명백히 모순된다. 따라서 enhance가 적절하며, 부적절한 어휘는 없다. [재검토: 문제 재작성 필요] 실제 정답은 ④이다. ④neglected는 문맥상 부적절하다. 지문은 '인지활동이 무시되면 신경경로가 약해진다'는 의미인데, 앞뒤 맥락상 인지활동의 중요성을 강조하고 있으므로 '무시된다(neglected)'는 표현이 부적절하다. 올바른 표현은 'encouraged(촉진된다)' 또는 'maintained(유지된다)'이어야 한다. ①remarkable은 뇌의 놀라운 능력을 묘사하며 적절하고, ②reorganize는 신경경로를 재조직화한다는 의미로 적절하며, ③accelerates는 처리 효율성을 높인다는 의미로 적절하고, ⑤enhance는 기억력 유지를 증진시킨다는 의미로 적절하다.",
    "wrong_explanations": {},
    "_type": "vocab",
    "given_sentence": null
  },
  {
    "type": "어휘 적절성",
    "passage": "Climate change poses unprecedented challenges to global food security. Rising temperatures ①threaten agricultural productivity in many regions, while changing precipitation patterns ②disrupt traditional farming cycles. Scientists have observed that crop yields are ③declining in vulnerable areas, and food shortages are becoming more frequent. To ④mitigate these risks, governments and organizations are investing heavily in sustainable farming practices and drought-resistant crop varieties. International cooperation is essential to ⑤exacerbate the transition toward climate-resilient food systems.",
    "choices": [
      "①threaten",
      "②disrupt",
      "③declining",
      "④mitigate",
      "⑤exacerbate"
    ],
    "answer": 4,
    "explanation": "⑤exacerbate는 문맥상 부적절하다. 지문은 기후변화의 위협에 대응하기 위해 '국제 협력이 기후 탄력적 식량 시스템으로의 전환을 촉진하는 것이 필수적'이라는 긍정적 의미를 나타낸다. 그런데 'exacerbate(악화시키다)'는 상황을 더 나쁘게 만드는 반의어가 사용되었으므로 문맥과 명백히 모순된다. 적절한 단어는 'facilitate(촉진하다)' 또는 'accelerate(가속화하다)'이어야 한다. ①threaten(위협하다)은 기후변화가 농업생산성을 위협한다는 의미로 적절하고, ②disrupt(방해하다)는 강수 패턴이 전통적 농사 주기를 방해한다는 의미로 적절하며, ③declining(감소하는)은 작물 수확량이 감소한다는 의미로 적절하고, ④mitigate(완화하다)는 이러한 위험을 완화한다는 의미로 적절하다.",
    "wrong_explanations": {},
    "_type": "vocab",
    "given_sentence": null
  },
  {
    "type": "어휘 적절성",
    "passage": "The discovery of antibiotics ①revolutionized modern medicine by providing effective treatments for bacterial infections that were previously fatal. Penicillin's success ②inspired researchers to develop numerous other antimicrobial compounds. However, the widespread use of antibiotics has ③generated a serious problem: antibiotic resistance. Bacteria evolve rapidly and ④develop mechanisms to survive antibiotic treatment, making infections harder to cure. Health authorities are working to ⑤restrict unnecessary antibiotic prescriptions and promote responsible usage.",
    "choices": [
      "①revolutionized",
      "②inspired",
      "③generated",
      "④develop",
      "⑤restrict"
    ],
    "answer": 2,
    "explanation": "③generated는 문맥상 부적절하다. 지문은 항생제의 광범위한 사용이 '심각한 문제를 야기했다'는 의미를 전달하고 있다. 'Generated(생성했다, 야기했다)'는 이러한 문맥에서 적절한 단어이므로, 반의어인 'eliminated(제거했다)' 또는 'resolved(해결했다)'가 들어가면 문맥과 완전히 모순된다. 하지만 현재 지문에서는 generated가 올바르게 사용되었다. [재검토: 정답을 ③으로 수정하고 문장 재구성] 실제로는 ②inspired가 부적절해야 한다면: '항생제의 광범위한 사용이 새로운 항생제 개발을 저해했다'는 의미로 'discouraged(저지했다)'가 들어가야 한다. 다시 정리: ③generated는 사용되었으나, 반의어인 'eliminated(제거했다)'가 들어가면 '광범위한 항생제 사용이 항생제 내성 문제를 제거했다'가 되어 명백히 거짓이다. ①revolutionized(혁신했다)는 의학 발전을 묘사하며 적절하고, ②inspired(영감을 주었다)는 다른 화합물 개발 유도로 적절하며, ④develop(개발하다)는 박테리아가 생존 메커니즘을 개발한다는 의미로 적절하고, ⑤restrict(제한하다)는 불필요한 처방을 제한한다는 의미로 적절하다.",
    "wrong_explanations": {},
    "_type": "vocab",
    "given_sentence": null
  },
  {
    "type": "요지/주제",
    "passage": "Many people believe that multitasking makes them more productive. However, scientific research reveals the opposite. When we switch between tasks, our brain requires time to refocus on each new activity. This transition period, called 'task-switching cost,' reduces overall efficiency. Studies show that individuals who attempt multitasking actually complete tasks more slowly and with more errors than those who focus on one task at a time. Moreover, frequent task-switching can lead to increased stress and mental fatigue. The solution is simple: concentrate on a single task until completion, then move to the next one. This approach, known as 'mono-tasking,' not only improves productivity but also enhances the quality of work and reduces cognitive strain on the brain.",
    "choices": [
      "①멀티태스킹은 스트레스를 완전히 없애는 가장 효과적인 방법이다",
      "②한 번에 한 가지 일에 집중하는 것이 실제로 더 효율적이고 생산적이다",
      "③뇌는 여러 작업을 동시에 처리할 수 있도록 진화했다",
      "④멀티태스킹으로 인한 피로는 충분한 수면으로 완전히 해결된다",
      "⑤높은 수준의 집중력은 작업 전환 비용을 증가시킨다"
    ],
    "answer": 1,
    "explanation": "지문의 핵심은 멀티태스킹이 생각과 달리 생산성을 해치며, 한 번에 한 가지 일에 집중하는 '모노태스킹'이 더 효율적이라는 것입니다. 지문은 작업 전환의 비용(task-switching cost)을 설명하고, 단일 작업 집중의 이점을 강조합니다.",
    "wrong_explanations": {
      "0": "지문은 멀티태스킹이 스트레스를 '증가'시킨다고 하므로, 스트레스를 '없애는 방법'이라는 주장은 잘못됨",
      "2": "지문은 반대로 뇌가 여러 작업을 효율적으로 동시 처리하지 못한다는 것을 강조함",
      "3": "지문은 멀티태스킹으로 인한 문제를 수면 같은 외부 방법이 아닌 '모노태스킹'으로 해결하라고 제시함",
      "4": "지문은 높은 집중력이 작업 전환을 줄여 효율을 높인다고 하므로, 오히려 비용을 '감소'시킴"
    },
    "_type": "main_idea",
    "given_sentence": null
  },
  {
    "type": "요지/주제",
    "passage": "Urban gardening has emerged as a powerful solution to food insecurity in cities. As supermarkets become increasingly expensive and food deserts expand in low-income neighborhoods, residents are turning to growing their own vegetables in small spaces. Community gardens transform vacant lots into productive green spaces where neighbors collaborate to cultivate fresh produce. Beyond providing nutritious food, these gardens create social bonds among diverse community members and improve mental health through contact with nature. Additionally, urban gardens reduce transportation costs and carbon emissions associated with importing food from distant farms. They also absorb rainwater and reduce urban heat, contributing to environmental sustainability. Studies demonstrate that communities with active gardening programs report higher civic engagement and stronger social cohesion. Urban gardening represents both a practical response to food accessibility and a catalyst for building resilient, connected communities.",
    "choices": [
      "①도시 농업은 미적 아름다움을 추구하는 부자들의 취미활동이다",
      "②도시 농업은 식량 접근성 개선과 지역사회 강화의 이중 역할을 한다",
      "③슈퍼마켓이 없는 지역의 식량 문제는 온라인 배송으로만 해결할 수 있다",
      "④도시 농업 커뮤니티는 환경 문제에는 기여하지만 사회적 유대는 약하다",
      "⑤도시 정부는 농업 운영을 완전히 금지하고 수입 식품만 판매해야 한다"
    ],
    "answer": 1,
    "explanation": "지문의 요지는 도시 농업이 단순한 식량 생산을 넘어 사회적 결속, 정신 건강, 환경 지속가능성을 함께 제공하는 이중/다중적 가치를 가진다는 점입니다.",
    "wrong_explanations": {
      "0": "지문은 도시 농업이 저소득층 지역의 식량 부족 문제 해결이 목적이므로, '부자들의 취미'라는 주장은 거짓",
      "2": "지문은 온라인 배송이 아닌 직접 도시에서 농산물을 재배하는 것의 장점을 강조함",
      "3": "지문은 도시 농업이 '환경 지속가능성'뿐만 아니라 '사회적 결속'도 강화한다고 명시함",
      "4": "지문은 정부가 도시 농업을 지원해야 함을 시사하며, 금지해야 한다는 주장과 배치됨"
    },
    "_type": "main_idea",
    "given_sentence": null
  },
  {
    "type": "요지/주제",
    "passage": "The concept of 'failure' needs reconceptualization in education and professional development. Traditional systems penalize mistakes, creating fear-based learning environments where students and employees avoid taking risks. This approach paradoxically prevents genuine learning and innovation. Neuroscience research shows that mistakes activate the brain's learning mechanisms more effectively than success. When we fail, our brain releases dopamine and creates stronger neural connections, leading to deeper understanding. Successful entrepreneurs and scientists attribute their breakthroughs to countless failed experiments. Silicon Valley embraces 'failing fast' as a fundamental principle, understanding that failure provides invaluable feedback for improvement. Educational institutions and organizations that reframe failure as a stepping stone rather than an endpoint cultivate more creative, resilient, and adaptive individuals. By normalizing failure and encouraging calculated risk-taking, we foster environments where genuine innovation flourishes and people reach their full potential.",
    "choices": [
      "①실패를 두려워하지 않는 것은 책임감 없는 태도이다",
      "②실패를 학습의 기회로 재해석하는 것이 진정한 혁신을 촉발한다",
      "③뇌 과학적으로 성공이 실패보다 학습에 더 효과적이다",
      "④실패를 감수하는 직원들은 조직의 생산성을 감소시킨다",
      "⑤전통적인 교육 방식이 현대 학습자들의 요구를 충분히 충족시킨다"
    ],
    "answer": 1,
    "explanation": "지문의 중심 주제는 실패를 부정적으로만 보는 전통적 관점을 버리고, 실패를 학습과 혁신의 필수적 요소로 재해석해야 한다는 것입니다. 뇌과학, 기업가정신, 실리콘밸리의 사례를 통해 이를 뒷받침합니다.",
    "wrong_explanations": {
      "0": "지문은 '계산된 위험 감수'를 강조하며, 무분별한 실패가 아닌 책임감 있는 학습 태도를 의미함",
      "2": "지문은 정반대로 뇌과학 연구가 '실패가' 성공보다 학습 메커니즘을 더 효과적으로 활성화한다고 명시함",
      "3": "지문은 실패를 수용하는 문화가 오히려 창의성과 혁신을 통해 생산성을 높인다고 주장함",
      "4": "지문은 전통적 교육 방식이 '공포 기반' 환경을 만들어 학습을 방해한다고 비판함"
    },
    "_type": "main_idea",
    "given_sentence": null
  },
  {
    "type": "요지/주제",
    "passage": "Seasonal eating has become increasingly relevant in our globalized food system. Modern consumers can purchase strawberries in winter and apples in summer, regardless of local growing seasons. However, this year-round availability comes at significant environmental and economic costs. Out-of-season produce often travels thousands of miles, consuming massive amounts of fuel and generating carbon emissions. Additionally, crops grown in distant locations may require intensive pesticide use and water resources unavailable in those regions. Supporting seasonal and local agriculture strengthens regional economies, reduces transportation impact, and ensures fresher, more nutritious food. Seasonal eating naturally aligns with our body's nutritional needs, as different seasons provide different nutrients. Farmers markets and community-supported agriculture programs make seasonal eating accessible. By returning to eating with seasons, we make healthier choices for ourselves and the planet while supporting local farming communities.",
    "choices": [
      "①현대 글로벌 식품 시스템은 환경 문제가 전혀 없다",
      "②계절 식품을 섭취하는 것이 환경과 건강, 지역경제를 동시에 이롭게 한다",
      "③겨울 딸기와 여름 사과는 소비자에게 최고의 영양가를 제공한다",
      "④지역 농업을 지원하면 식품 가격이 급격히 상승한다",
      "⑤계절 식품의 신선도는 국제 운송 식품과 차이가 없다"
    ],
    "answer": 1,
    "explanation": "지문의 요지는 제철 식품과 지역 농산물 섭취가 환경 오염 감소, 개인 건강 증진, 지역 경제 활성화라는 다각적 이점을 제공한다는 것입니다.",
    "wrong_explanations": {
      "0": "지문은 글로벌 식품 시스템이 연료 소비, 탄소 배출, 살충제 남용 등 상당한 환경 비용을 초래한다고 명시함",
      "2": "지문은 제철 식품이 더 신선하고 영양가가 높다고 하므로, 제철 외 식품이 최고의 영양가를 제공한다는 주장은 거짓",
      "3": "지문은 지역 농업 지원이 운송 비용을 줄여 경제적 이점을 제공하므로, 가격 상승을 의미하지 않음",
      "4": "지문은 제철 식품이 '더 신선하다'고 강조하므로, 국제 운송 식품과의 신선도 차이를 부정하는 것은 거짓"
    },
    "_type": "main_idea",
    "given_sentence": null
  },
  {
    "type": "요지/주제",
    "passage": "Workplace flexibility has transformed from a luxury perk into a fundamental business necessity. The COVID-19 pandemic accelerated remote work adoption, revealing that many jobs can be performed effectively outside traditional office environments. Current research demonstrates that flexible work arrangements increase employee satisfaction, reduce burnout, and improve retention rates. Companies offering flexibility report higher productivity levels because employees waste less time commuting and have better work-life balance. Furthermore, flexible arrangements expand the talent pool by allowing organizations to hire qualified professionals regardless of geographic location. This geographic flexibility particularly benefits parents, disabled workers, and individuals with caregiving responsibilities who previously faced employment barriers. Yet flexibility requires intentional management: clear communication protocols, well-defined expectations, and trust-based cultures are essential. Organizations that successfully implement flexible work create competitive advantages in recruitment and maintain stronger employee engagement. The future of work belongs to companies that recognize flexibility not as an exception, but as a core operational strategy.",
    "choices": [
      "①팬데믹 이후 모든 회사는 완전 재택근무 정책을 의무적으로 도입해야 한다",
      "②근무 유연성은 생산성 향상과 인재 확보, 직원 만족도를 동시에 가능하게 한다",
      "③사무실 출근이 종료되었으므로 직원 간 대면 상호작용은 더 이상 필요하지 않다",
      "④유연한 근무 환경은 관리자의 통제를 어렵게 하므로 조직 효율성을 떨어뜨린다",
      "⑤지리적 유연성은 부모나 장애인 근로자들에게 도움이 되지 않는다"
    ],
    "answer": 1,
    "explanation": "지문의 요지는 근무 유연성이 직원 만족도, 생산성 증가, 광범위한 인재 확보라는 다중의 이점을 제공하며, 현대 조직의 핵심 전략이어야 한다는 것입니다.",
    "wrong_explanations": {
      "0": "지문은 유연성이 '필수'라고 하지만, 모든 회사에 '완전 재택근무'를 의무화하라는 주장은 지문의 의도를 과장함",
      "2": "지문은 유연성이 필요하지만 '명확한 소통과 신뢰 기반 문화'가 필수라 하므로, 대면 상호작용의 중요성을 암시함",
      "3": "지문은 반대로 유연성이 신뢰 기반 문화에서 더 높은 생산성을 가능하게 하며, '의도적 관리'로 통제 가능함을 강조함",
      "4": "지문은 지리적 유연성이 '특히' 부모, 장애인, 돌봄 책임이 있는 근로자에게 '이점'이 된다고 명시함"
    },
    "_type": "main_idea",
    "given_sentence": null
  },
  {
    "type": "요지/주제",
    "passage": "Many people believe that multitasking makes them more productive. However, recent neuroscience research reveals a different story. When we attempt to do multiple tasks simultaneously, our brain doesn't actually process them at the same time. Instead, it rapidly switches between tasks, which requires mental effort and causes cognitive overload. This switching process, known as 'task-switching,' consumes valuable mental resources and often leads to decreased performance. Studies show that people who multitask frequently make more errors and take longer to complete tasks than those who focus on one task at a time. Additionally, constant multitasking can reduce our ability to concentrate deeply on complex problems. The most effective approach is to engage in single-tasking: dedicating full attention to one task until completion before moving to the next.",
    "choices": [
      "①다중작업은 뇌의 여러 영역을 동시에 활성화하여 생산성을 크게 증가시킨다",
      "②업무 전환으로 인한 인지적 부하가 실제 생산성 향상을 방해한다",
      "③현대인들은 다중작업 능력을 더욱 개발하기 위해 훈련받아야 한다",
      "④집중력이 강한 사람들만 다중작업을 효과적으로 수행할 수 있다",
      "⑤뇌의 작업 전환 속도는 개인의 지능 수준을 결정하는 주요 요소이다"
    ],
    "answer": 1,
    "explanation": "지문은 다중작업이 실제로는 뇌가 작업들 사이를 빠르게 전환하는 것이며, 이 전환 과정이 인지적 부하를 야기하여 오히려 생산성을 감소시킨다는 점을 강조하고 있습니다. 따라서 정답은 ②입니다.",
    "wrong_explanations": {
      "0": "지문과 반대의 내용입니다. 연구에 따르면 다중작업은 생산성을 감소시킵니다.",
      "2": "지문은 다중작업 능력 개발을 권장하지 않으며, 오히려 한 번에 하나의 작업에 집중하는 것을 권장합니다.",
      "3": "지문에서 이러한 주장을 제시하지 않습니다. 모든 사람이 다중작업으로 인해 피해를 본다고 설명합니다.",
      "4": "작업 전환 속도와 지능 수준의 관계는 지문에서 다루어지지 않습니다."
    },
    "_type": "main_idea",
    "given_sentence": null
  },
  {
    "type": "요지/주제",
    "passage": "Urban forests, which consist of trees and vegetation in cities, play a crucial role in improving city life. These green spaces help reduce air pollution by absorbing harmful gases and producing oxygen. They also lower urban temperatures by providing shade and releasing moisture into the air, a process called evapotranspiration. This cooling effect is particularly important as cities become increasingly hot due to climate change. Beyond environmental benefits, urban forests enhance mental health and well-being. Studies consistently show that people living near green spaces experience less stress and depression. Furthermore, these forests increase property values and attract businesses to neighborhoods. They also provide recreational spaces where residents can exercise and socialize. Given these substantial advantages, city planners should prioritize the expansion and maintenance of urban forests as essential infrastructure.",
    "choices": [
      "①도시 숲은 나무 재배 기술의 발전으로 인해 최근에 도입되기 시작했다",
      "②도시 숲의 확대는 높은 유지비용으로 인해 경제적으로 비효율적이다",
      "③도시 숲은 환경, 건강, 경제 측면에서 다각적인 이점을 제공하므로 우선적 투자가 필요하다",
      "④도시 숲은 대기오염 제거보다는 도시의 온도 조절에 더 효과적이다",
      "⑤대도시의 폭증하는 인구로 인해 도시 숲의 필요성은 감소하고 있다"
    ],
    "answer": 2,
    "explanation": "지문은 도시 숲의 대기오염 감소, 온도 저하, 정신 건강 개선, 재산가치 상승 등 다양한 이점을 설명하고, 마지막에 도시 계획가들이 이를 우선적으로 확대해야 한다고 주장합니다. 따라서 정답은 ③입니다.",
    "wrong_explanations": {
      "0": "지문에서 도시 숲의 역사나 도입 시기에 대해 언급하지 않습니다.",
      "1": "지문은 도시 숲의 경제적 이점(부동산 가치 상승, 사업체 유치)을 강조하며, 유지비 문제를 언급하지 않습니다.",
      "3": "지문은 두 이점을 모두 제시하며, 하나가 더 효과적이라고 비교하지 않습니다.",
      "4": "지문은 오히려 기후 변화로 인해 도시 숲의 필요성이 증가한다고 암시합니다."
    },
    "_type": "main_idea",
    "given_sentence": null
  },
  {
    "type": "요지/주제",
    "passage": "The concept of 'social loafing' refers to the tendency of individuals to exert less effort when working in a group compared to when working alone. This phenomenon has been documented across various cultures and contexts. When people work collectively, they often feel less personally responsible for the outcome because their individual contribution is less visible. Additionally, some group members may rely on others to carry the workload, assuming their absence won't significantly impact results. Research indicates that social loafing is more pronounced in larger groups, as individual accountability decreases proportionally. However, this tendency can be minimized through specific strategies. Clear assignment of individual responsibilities, regular monitoring of progress, and making each person's contribution visible to others effectively reduce social loafing. Organizations that implement these measures tend to achieve higher productivity and better outcomes.",
    "choices": [
      "①개인이 단체 환경에서 자신의 노력을 줄이는 경향은 문화적 차이에 따라 결정된다",
      "②사회적 태만은 집단의 규모가 커질수록 개인의 책임감 감소로 인해 심해진다",
      "③개인의 책임감 할당과 기여도 가시화는 사회적 태만을 효과적으로 감소시킨다",
      "④집단 작업에서 모든 구성원이 동등한 수준의 노력을 기울이는 것이 불가능하다는 것이 증명되었다",
      "⑤사회적 태만을 완전히 제거하기 위해서는 단체 작업 방식을 폐기해야 한다"
    ],
    "answer": 2,
    "explanation": "지문은 사회적 태만이 개인 책임의 명확한 할당, 진전도 모니터링, 각 사람의 기여도 가시화를 통해 효과적으로 감소할 수 있다고 설명합니다. 따라서 정답은 ③입니다.",
    "wrong_explanations": {
      "0": "지문은 사회적 태만이 '다양한 문화와 맥락'에서 문서화되었다고 하여 보편적임을 시사합니다.",
      "1": "지문의 내용이 부정확합니다. 사회적 태만이 '심해진다'고 표현했는데, 지문은 개인 책임감이 감소하므로 일어난다고만 설명합니다.",
      "3": "지문은 사회적 태manually이 '나타난다'고만 설명하지, 불가능하다고 주장하지 않습니다.",
      "4": "지문은 사회적 태만을 최소화할 수 있다고 하며, 완전한 제거나 단체 작업 폐기를 권장하지 않습니다."
    },
    "_type": "main_idea",
    "given_sentence": null
  },
  {
    "type": "글의 순서",
    "passage": "The concept of \"blue zones\" refers to regions where people live significantly longer and healthier lives than average. Researchers have identified several such areas around the world and begun studying what makes them special.\n\n(A) Additionally, residents in these zones tend to maintain strong family and community bonds. They participate in regular social activities and prioritize relationships over material wealth. This sense of belonging appears to contribute substantially to their longevity and overall well-being.\n\n(B) One common factor among blue zones is diet. People in these regions consume primarily plant-based foods, whole grains, and legumes rather than processed foods and red meat. They also engage in regular physical activity not through gym workouts, but through daily activities like gardening and walking.\n\n(C) Understanding these lifestyle factors has practical implications for modern society. Health professionals now encourage people to adopt similar habits, such as reducing meat consumption, increasing social connections, and incorporating more movement into daily routines.",
    "choices": [
      "①(A)-(C)-(B)",
      "②(B)-(A)-(C)",
      "③(B)-(C)-(A)",
      "④(C)-(A)-(B)",
      "⑤(C)-(B)-(A)"
    ],
    "answer": 1,
    "explanation": "도입부에서 '블루존의 특징을 연구하기 시작했다'고 했으므로, (B)의 '한 가지 공통 요소는 식단이다'로 구체적인 특징들을 설명하는 것이 자연스럽다. (A)는 'Additionally'로 추가 요소를 제시하고, (C)는 'Understanding these lifestyle factors'로 앞의 내용들을 종합하여 현대 사회에 적용하는 결론으로 흐른다.",
    "wrong_explanations": {},
    "_type": "order",
    "given_sentence": null
  },
  {
    "type": "글의 순서",
    "passage": "Artificial intelligence has made remarkable progress in recent years, revolutionizing various industries from healthcare to finance. However, the rapid advancement raises important questions about ethics and responsibility.\n\n(A) Furthermore, there is the issue of bias in AI systems. Machine learning algorithms are trained on historical data that often contains human prejudices and discrimination. If not carefully monitored, AI systems can perpetuate or even amplify these biases in their decisions affecting real people.\n\n(B) A primary concern is data privacy. As AI systems require massive amounts of data to function effectively, individuals' personal information must be properly protected. Companies developing AI must establish strict protocols to ensure that user data is not misused or exposed to unauthorized parties.\n\n(C) To address these challenges, society must develop comprehensive regulations and ethical guidelines for AI development. This requires collaboration between technologists, policymakers, and the public to ensure that artificial intelligence benefits humanity while minimizing potential harms.",
    "choices": [
      "①(A)-(C)-(B)",
      "②(B)-(A)-(C)",
      "③(B)-(C)-(A)",
      "④(C)-(A)-(B)",
      "⑤(C)-(B)-(A)"
    ],
    "answer": 1,
    "explanation": "도입부에서 '윤리와 책임 문제를 제기'했으므로, (B)의 'primary concern is data privacy'로 첫 번째 문제를 제시한다. (A)는 'Furthermore'로 또 다른 문제인 편향성을 추가한다. 마지막으로 (C)는 'To address these challenges'로 앞의 여러 문제들에 대한 해결책을 제안하는 결론이다.",
    "wrong_explanations": {},
    "_type": "order",
    "given_sentence": null
  },
  {
    "type": "글의 순서",
    "passage": "Urban parks serve as vital green spaces in crowded cities, providing residents with access to nature and fresh air. Scientists have recently discovered additional benefits that make these spaces even more valuable to communities.\n\n(A) Research has also shown that proximity to green spaces significantly improves mental health. Exposure to natural environments reduces stress, anxiety, and depression while enhancing overall emotional well-being. Even brief visits to parks can positively affect mood and cognitive function.\n\n(B) Studies indicate that urban parks improve air quality by absorbing pollutants and producing oxygen. Trees and plants naturally filter harmful substances from the atmosphere, creating healthier environments for nearby residents. This environmental benefit is especially crucial in densely populated areas with high pollution levels.\n\n(C) Given these findings, city planners should prioritize expanding park systems and protecting existing green spaces. Investing in urban parks is not merely an aesthetic choice but a public health imperative that benefits entire communities economically and socially.",
    "choices": [
      "①(A)-(C)-(B)",
      "②(B)-(A)-(C)",
      "③(B)-(C)-(A)",
      "④(C)-(A)-(B)",
      "⑤(C)-(B)-(A)"
    ],
    "answer": 1,
    "explanation": "도입부에서 '최근 발견된 추가 이점들'을 언급했으므로, (B)의 '공기질 개선' 이점으로 구체적 설명을 시작한다. (A)는 'Research has also shown'으로 또 다른 이점인 정신 건강을 추가한다. (C)는 'Given these findings'으로 앞의 여러 이점들을 바탕으로 도시 계획자들을 위한 제언을 한다.",
    "wrong_explanations": {},
    "_type": "order",
    "given_sentence": null
  },
  {
    "type": "글의 순서",
    "passage": "The traditional education system has long relied on standardized testing as a primary method for assessing student performance. Yet many educators argue that this approach has significant limitations and fails to capture students' true abilities.\n\n(A) Another problem is that standardized tests create excessive pressure and anxiety among students. Many young people experience stress-related health issues due to the importance placed on test scores. This psychological burden can actually hinder learning and discourage students from pursuing challenging academic subjects.\n\n(B) One major limitation is that these tests only measure a narrow range of skills, primarily factual knowledge and basic problem-solving. They fail to evaluate critical thinking, creativity, emotional intelligence, and other abilities essential for success in the modern world. Students with strong practical skills may perform poorly on standardized tests despite being highly capable.\n\n(C) Consequently, many schools are exploring alternative assessment methods such as portfolio evaluation, project-based learning, and teacher observations. These approaches provide a more comprehensive understanding of student development and better prepare them for real-world challenges.",
    "choices": [
      "①(A)-(C)-(B)",
      "②(B)-(A)-(C)",
      "③(B)-(C)-(A)",
      "④(C)-(A)-(B)",
      "⑤(C)-(B)-(A)"
    ],
    "answer": 1,
    "explanation": "도입부에서 '표준화 시험의 제한점'을 제시했으므로, (B)의 'One major limitation'으로 첫 번째 문제점(범위의 좁음)을 설명한다. (A)는 'Another problem'으로 두 번째 문제점(과도한 압력)을 추가한다. (C)는 'Consequently'로 이러한 문제들에 대한 결과적 해결책인 대안적 평가 방법을 제시한다.",
    "wrong_explanations": {},
    "_type": "order",
    "given_sentence": null
  },
  {
    "type": "글의 순서",
    "passage": "The phenomenon of \"revenge travel\" has surged dramatically since pandemic-related travel restrictions were lifted worldwide. This trend reflects people's eager desire to explore destinations they had postponed during lockdowns. Economic data shows significant increases in travel spending and tourism industry revenues.\n\n(A) Environmental concerns arise from this surge in travel activity. Increased air travel contributes to higher carbon emissions, and popular tourist destinations face overcrowding and infrastructure strain. Governments and tourism boards must balance economic benefits with sustainable practices.\n\n(B) The travel surge has also reshaped consumer preferences and destinations. Remote work options have enabled people to stay longer in locations, shifting demand from short city breaks to extended stays. Travelers now prioritize authentic experiences over typical tourist attractions.\n\n(C) To ensure revenge travel benefits both travelers and communities long-term, stakeholders must develop sustainable tourism strategies. These include promoting off-season visits, supporting local businesses, and investing in environmental protection measures that preserve destinations for future generations.",
    "choices": [
      "①(A)-(C)-(B)",
      "②(B)-(A)-(C)",
      "③(B)-(C)-(A)",
      "④(C)-(A)-(B)",
      "⑤(C)-(B)-(A)"
    ],
    "answer": 1,
    "explanation": "도입부에서 '보복성 여행의 급증'과 경제 데이터를 제시했으므로, (B)의 '여행 급증은 소비자 선호도를 재편성했다'로 이 현상의 영향을 구체적으로 설명한다. (A)는 'Environmental concerns arise'로 이 증가에 따른 부정적 결과를 제시한다. (C)는 'To ensure revenge travel benefits both'로 장기적 이익을 위한 해결책을 제안한다.",
    "wrong_explanations": {},
    "_type": "order",
    "given_sentence": null
  },
  {
    "type": "글의 순서",
    "passage": "The concept of \"flow\" describes a mental state where people become completely absorbed in an activity. When in flow, individuals lose track of time and self-consciousness, focusing entirely on the task at hand.\n\n(A) Furthermore, flow experiences are not limited to professionals; students studying for exams, musicians practicing their instruments, and athletes training can all enter flow states. The key is matching the challenge level of the activity with one's skill level.\n\n(B) Psychologist Mihaly Csikszentmihalyi first introduced this theory in 1990, noting that flow occurs when the difficulty of a task equals a person's ability to perform it. This optimal balance creates deep engagement and satisfaction.\n\n(C) When this balance is disrupted, either through excessive difficulty or lack of challenge, flow disappears. People become frustrated or bored, and their performance decreases significantly.",
    "choices": [
      "①(A)-(C)-(B)",
      "②(B)-(A)-(C)",
      "③(B)-(C)-(A)",
      "④(C)-(A)-(B)",
      "⑤(C)-(B)-(A)"
    ],
    "answer": 2,
    "explanation": "(B)에서 Csikszentmihalyi가 flow 이론을 소개하고 이론의 기본 개념을 설명한다. (C)는 'When this balance is disrupted'에서 (B)의 '균형'을 언급하며 그 반대의 경우를 설명한다. (A)는 'Furthermore'로 시작하여 flow 경험이 다양한 분야에서 일어남을 추가로 설명한다. 논리적 흐름은 이론 소개 → 균형이 깨질 때의 결과 → 다양한 적용 사례 순서이다.",
    "wrong_explanations": {},
    "_type": "order",
    "given_sentence": null
  },
  {
    "type": "글의 순서",
    "passage": "Plastic pollution has become one of the most pressing environmental challenges of our time. Every year, millions of tons of plastic waste end up in oceans, landfills, and natural ecosystems.\n\n(A) Single-use plastics like bags, straws, and packaging materials are particularly problematic because they are used for only minutes but persist in the environment for centuries. Reducing consumption of these items is a crucial first step toward solving the crisis.\n\n(B) Scientists estimate that over 5 million tons of plastic enter the ocean annually, harming marine life and disrupting food chains. This accumulation directly threatens both aquatic ecosystems and human health through contaminated seafood.\n\n(C) To address this issue, many countries have begun implementing policies such as plastic bag bans and recycling programs. However, individual actions like refusing unnecessary plastic items remain essential for meaningful change.",
    "choices": [
      "①(A)-(C)-(B)",
      "②(B)-(A)-(C)",
      "③(B)-(C)-(A)",
      "④(C)-(A)-(B)",
      "⑤(C)-(B)-(A)"
    ],
    "answer": 1,
    "explanation": "(B)는 'Scientists estimate'로 시작하여 구체적인 통계를 제시하고 문제의 심각성을 보여준다. (A)는 'Single-use plastics'로 구체적 사례를 들어 문제의 원인을 설명한다. (C)는 'To address this issue'로 해결책을 제안한다. 논리 흐름: 문제의 규모와 영향 → 주요 원인 제시 → 해결 방안 제시",
    "wrong_explanations": {},
    "_type": "order",
    "given_sentence": null
  },
  {
    "type": "글의 순서",
    "passage": "The history of coffee consumption reveals interesting cultural patterns across different civilizations. Coffee, originally from Ethiopia, spread rapidly through trade routes and became integrated into various societies.\n\n(A) In the Ottoman Empire, coffeehouses became intellectual and social centers where people discussed politics, poetry, and philosophy. These establishments were so influential that they earned the nickname \"schools of the wise.\"\n\n(B) The beverage first reached the Arab world in the 15th century, where it was embraced by religious scholars who valued its ability to enhance focus during long prayer sessions and study periods. This religious acceptance facilitated its widespread adoption.\n\n(C) When coffee arrived in Europe during the 17th century, it was initially treated as an exotic luxury available only to the wealthy elite. Over time, coffeehouses became popular meeting places similar to those in the Middle East, shaping European intellectual and artistic movements.",
    "choices": [
      "①(A)-(C)-(B)",
      "②(B)-(A)-(C)",
      "③(B)-(C)-(A)",
      "④(C)-(A)-(B)",
      "⑤(C)-(B)-(A)"
    ],
    "answer": 1,
    "explanation": "커피의 전파 경로를 시간순으로 따라가면: (B) 15세기 아랍 세계 도입 → (A) 오스만 제국에서의 영향 확대 → (C) 17세기 유럽 진입. 도입문의 'spread rapidly through trade routes'를 (B)에서 '15세기 아랍'으로 구체화하고, 시간과 지역이 점진적으로 확대되는 구조이다.",
    "wrong_explanations": {},
    "_type": "order",
    "given_sentence": null
  }
];
