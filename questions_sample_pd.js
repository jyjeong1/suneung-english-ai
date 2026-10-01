// Prof.AI 공개도메인 기반 — 10문제
const QUESTION_BANK = [
  {
    "type": "빈칸 추론",
    "passage": "Memory consolidation is a fundamental process in cognitive science that transforms short-term experiences into long-term memories. During sleep, the brain replays neural patterns associated with daily experiences, strengthening synaptic connections through a mechanism called long-term potentiation. Recent neuroimaging studies have demonstrated that the hippocampus plays a crucial role in this process by transferring information to the neocortex for permanent storage. Interestingly, different sleep stages contribute distinctly to memory consolidation. REM sleep appears particularly important for emotional and procedural memories, while non-REM sleep facilitates factual memory integration. ___________. Students who maintain regular sleep schedules show substantially improved academic performance compared to their sleep-deprived peers. Furthermore, the quality of sleep matters as much as its duration, with interrupted sleep reducing consolidation efficiency. Understanding these mechanisms could revolutionize how we approach learning and memory enhancement in educational settings.",
    "choices": [
      "Therefore, irregular sleep patterns have no effect on academic performance since memory consolidation occurs automatically regardless of sleep quality",
      "This discovery has significant implications for understanding learning disabilities and developing educational strategies that optimize sleep conditions",
      "However, sleep is merely one factor among many unrelated variables that determine academic success, making it insignificant for educational planning",
      "In contrast, the duration of sleep is irrelevant compared to other factors such as diet and exercise in improving cognitive function",
      "Nevertheless, most educational institutions continue to ignore sleep research because memory consolidation has been proven to occur equally well during waking hours"
    ],
    "answer": 1,
    "explanation": "지문은 수면의 다양한 단계가 기억 통합에 기여한다는 것을 설명한 후, 이러한 발견이 학습 장애 이해와 교육 전략 개발에 중요한 의미를 가진다고 주장합니다. 그 다음 문장에서 규칙적인 수면 일정을 유지하는 학생들이 수면 부족 학생들보다 학업 성적이 훨씬 향상된다는 구체적인 증거를 제시합니다. 따라서 빈칸에는 수면 연구 발견이 교육적 함의를 가진다는 내용이 와야 하며, ②번이 '이 발견은 학습 장애를 이해하고 수면 조건을 최적화하는 교육 전략을 개발하는 데 중요한 의미를 가진다'고 올바르게 연결합니다.",
    "wrong_explanations": {
      "①": "수면의 중요성을 부정하는 내용으로, 지문의 주장과 정반대입니다.",
      "③": "수면의 중요성을 무시하는 내용으로, 이후 학업 성적 향상의 근거가 될 수 없습니다.",
      "④": "수면 기간의 무관성을 주장하나, 지문은 수면의 질과 기간 모두 중요하다고 명시합니다.",
      "⑤": "수면 연구를 무시해야 한다는 주장으로, 교육 전략 개발을 강조하는 지문과 모순됩니다."
    },
    "_type": "blank",
    "given_sentence": null,
    "_source": "public_domain"
  },
  {
    "type": "빈칸 추론",
    "passage": "Economic inequality has become an increasingly pressing concern in developed nations, with wealth concentration reaching unprecedented levels. The Gini coefficient, a standard measure of income distribution, reveals that many countries have experienced widening gaps between rich and poor populations over the past three decades. This phenomenon stems from multiple factors including globalization, technological advancement, and policy decisions that favor capital over labor. Interestingly, moderate inequality can incentivize innovation and productivity, but extreme inequality demonstrates adverse effects on economic growth. When income disparities exceed certain thresholds, social cohesion deteriorates and consumption patterns become imbalanced. Studies indicate that highly unequal societies experience lower intergenerational mobility, meaning individuals cannot easily improve their economic status regardless of talent or effort. ___________. Policymakers face the challenge of balancing economic incentives with social welfare, as excessive redistribution might discourage entrepreneurship while insufficient intervention perpetuates systemic inequality.",
    "choices": [
      "①This creates a self-perpetuating cycle where disadvantaged populations remain trapped in poverty.",
      "②However, some economists argue that inequality is necessary for economic development.",
      "③Therefore, governments should implement immediate and radical wealth redistribution policies.",
      "④Interestingly, wealthy nations tend to have less social mobility than developing countries.",
      "⑤As a result, consumer spending increases significantly in unequal societies."
    ],
    "answer": 0,
    "explanation": "지문의 논리적 흐름을 보면, 앞 문장에서 '높은 불평등 사회에서는 세대 간 이동성이 낮다'는 것을 설명하고, 뒷 문장에서 '정책입안자들은 경제 인센티브와 사회복지의 균형을 맞춰야 한다'고 제시합니다. 따라서 빈칸에는 '불리한 집단이 빈곤에 갇히는 악순환이 생긴다'는 내용이 와야 인과관계를 유지하면서 자연스럽게 정책의 필요성으로 이어집니다.",
    "wrong_explanations": {
      "①": "정답",
      "②": "지문의 주장에 정면으로 모순되며, 앞의 논거를 무효화합니다.",
      "③": "극단적 주장으로 지문의 '균형' 논리와 맞지 않습니다.",
      "④": "지문의 논리와 무관한 추가 정보일 뿐 인과관계가 없습니다.",
      "⑤": "지문과 반대의 내용이며, 불평등의 부정적 영향을 설명하지 못합니다."
    },
    "_type": "blank",
    "given_sentence": null,
    "_source": "public_domain"
  },
  {
    "type": "문장 삽입",
    "passage": "The Renaissance represented a transformative period in European history, marking the transition from medieval to early modern society. ① Beginning in Italy during the fourteenth century, this cultural movement emphasized humanism, which prioritized human achievement and individual potential over religious authority. ② Scholars rediscovered classical Greek and Roman texts, inspiring revolutionary approaches to art, science, and philosophy. Leonardo da Vinci exemplifies the Renaissance ideal of the polymath, excelling simultaneously in painting, engineering, anatomy, and mathematics. ③ The printing press, invented by Johannes Gutenberg around 1440, dramatically amplified the dissemination of Renaissance ideas, democratizing access to knowledge previously restricted to religious institutions. This technological innovation fundamentally altered power structures by enabling ordinary people to challenge established authorities. ④ The period witnessed unprecedented artistic achievements, including masterpieces by Michelangelo and Raphael that revolutionized perspective and human representation. Moreover, Renaissance scientific inquiry laid groundwork for the Scientific Revolution, as figures like Copernicus questioned prevailing cosmological assumptions. ⑤ This era fundamentally reshaped European civilization, establishing foundations for modern secular thought.",
    "choices": [
      "①",
      "②",
      "③",
      "④",
      "⑤"
    ],
    "answer": 3,
    "explanation": "주어진 문장 'By making books more affordable and accessible, the printing press became a catalyst for intellectual liberation and social transformation.'는 인쇄술의 영향에 대해 설명하고 있다. 앞 문장에서 인쇄술이 '지식 전파를 극적으로 증폭시키고 접근성을 민주화했다'고 했으므로, 이를 구체적으로 확장하여 '책을 더 저렴하고 접근 가능하게 만들어 지적 해방과 사회 변혁의 촉매가 되었다'고 설명하는 것이 문맥상 자연스럽다. ④ 위치가 정답이다.",
    "wrong_explanations": {
      "①": "르네상스의 시작을 설명하는 부분으로, 인쇄술의 영향을 다루는 주어진 문장이 배치되기에 부적절하다.",
      "②": "고전 문헌 재발견을 다루는 부분으로, 문맥 흐름상 맞지 않다.",
      "⑤": "르네상스의 전체적인 영향을 결론짓는 부분으로, 인쇄술의 구체적 영향을 다루는 문장이 삽입되기에 너무 늦다."
    },
    "_type": "insert",
    "given_sentence": "By making books more affordable and accessible, the printing press became a catalyst for intellectual liberation and social transformation.",
    "_source": "public_domain"
  },
  {
    "type": "문장 삽입",
    "passage": "Artificial intelligence has become increasingly sophisticated, with machine learning algorithms now capable of performing tasks previously thought to require human cognition. Deep learning networks, inspired by biological neural architecture, process vast datasets to identify complex patterns and make predictions with remarkable accuracy. The transformer architecture, introduced in 2017, revolutionized natural language processing by enabling models to understand contextual relationships in text. Large language models demonstrate impressive capabilities in translation, summarization, and creative writing tasks. ① However, significant challenges persist regarding transparency and interpretability; scientists cannot fully explain how these systems arrive at specific conclusions. ② Additionally, AI systems exhibit troubling biases reflecting historical inequalities in training data, raising ethical concerns about fairness and discrimination. ③ The technology's environmental footprint is substantial, with training large models consuming enormous amounts of electricity. ④ Despite these limitations, AI continues reshaping industries from healthcare to finance, improving diagnostic accuracy and financial forecasting. ⑤ Policymakers struggle to develop appropriate regulations balancing innovation with safety, requiring collaboration between technologists, ethicists, and governments.",
    "choices": [
      "①",
      "②",
      "③",
      "④",
      "⑤"
    ],
    "answer": 3,
    "explanation": "주어진 문장 'This creates urgent pressure for developing robust frameworks to guide AI development responsibly'는 AI의 환경 문제와 산업 개선 사이에서 규제와 지침 개발의 필요성을 연결하는 역할을 합니다. ④번 위치(Despite these limitations와 Policymakers 사이)에 삽입하면, AI의 실제 한계들(투명성, 편향, 환경 발자국)을 먼저 언급한 후, 이러한 문제들로 인해 책임감 있는 가이드라인 개발이 시급하고, 따라서 정책 입안자들이 규제를 개발해야 한다는 논리적 흐름이 자연스럽게 형성됩니다.",
    "wrong_explanations": {
      "①": "문장이 구체적인 문제(투명성)를 언급하기 전에 나타나므로 문맥상 맞지 않습니다.",
      "②": "편향성 문제 설명 중간에 위치하여 주제 전환이 어색합니다.",
      "③": "환경 발자국 논의 중에 갑자기 다른 주제가 삽입되어 연결성이 떨어집니다.",
      "⑤": "문장이 결론 부분에 위치하기에는 논의 흐름을 방해합니다."
    },
    "_type": "insert",
    "given_sentence": "This creates urgent pressure for developing robust frameworks to guide AI development responsibly.",
    "_source": "public_domain"
  },
  {
    "type": "어법 판단",
    "passage": "Climate change represents one of humanity's most pressing environmental challenges, ① driven primarily by increased atmospheric greenhouse gas concentrations from industrial activities. Carbon dioxide levels have risen approximately 50 percent since pre-industrial times, ② trapping additional solar radiation and elevating global temperatures. This warming phenomenon causes cascading environmental consequences including rising sea levels, ecosystem disruption, and increasingly severe weather events. Ocean acidification, resulting from CO₂ absorption, threatens marine biodiversity and food security for billions of people dependent on seafood. Importantly, climate impacts ③ disproportionately affect vulnerable populations lacking resources for adaptation and mitigation. Small island nations face existential threats from rising waters, while developing countries ④ experiencing droughts face agricultural collapse. Renewable energy technologies including solar and wind power offer promising alternatives to fossil fuels, though transitioning infrastructure requires substantial investment and political will. International agreements like the Paris Climate Accord represent collective commitment to limiting warming, yet current policies remain ⑤ insufficient for preventing catastrophic scenarios.",
    "choices": [
      "driven primarily by increased atmospheric greenhouse gas concentrations from industrial activities",
      "trapping additional solar radiation and elevating global temperatures",
      "disproportionately affect vulnerable populations lacking resources for adaptation and mitigation",
      "experiencing droughts face agricultural collapse",
      "insufficient for preventing catastrophic scenarios"
    ],
    "answer": 3,
    "explanation": "④번이 정답입니다. '~하면서 동시에 ~하다'라는 의미로 분사구문이 필요하므로 'experiencing'은 현재분사로 올바른 형태입니다. 따라서 정답 선택지는 '④ experiencing droughts face agricultural collapse'이며, 이를 틀린 형태로 교체하면 '④ while developing countries experienced droughts face agricultural collapse'(과거형 사용으로 오류) 또는 '④ while developing countries experiences droughts face agricultural collapse'(3인칭 단수로 오류)로 변경해야 합니다.",
    "wrong_explanations": {
      "①": "현재분사 driven은 수동의 의미로 climate change를 수식하므로 문법적으로 올바름",
      "②": "현재분사 trapping은 앞의 동작의 결과를 나타내는 분사구문으로 올바름",
      "⑤": "be동사 + insufficient + for ~ing은 '~하기에 충분하지 않다'는 의미로 올바른 표현"
    },
    "_type": "grammar",
    "_source": "public_domain",
    "given_sentence": null
  },
  {
    "type": "어법 판단",
    "passage": "Socialization processes fundamentally shape individual identity and social behavior throughout the lifespan. From infancy, children internalize cultural norms, values, and expectations through interaction with family members, peers, and institutions. Primary socialization, ① occurring within families, establishes foundational personality characteristics and attachment patterns affecting future relationships. Secondary socialization through schools and peer groups ② refines social skills and introduces broader cultural perspectives beyond family contexts. Remarkably, socialization ③ continues throughout adulthood as individuals encounter new social roles and environmental contexts, contradicting earlier theories positing fixed personality development. Cross-cultural research reveals that socialization emphases vary significantly; collectivist societies prioritize group harmony while individualist cultures ④ stress personal achievement. The internet has introduced novel socialization mechanisms, with virtual communities now influencing identity formation and social norms particularly among younger generations. Social media platforms create unprecedented opportunities for connection but simultaneously facilitate echo chambers reinforcing existing beliefs. Understanding socialization processes ⑤ proves essential for addressing social problems and designing effective interventions, as many behavioral patterns originate from early social learning experiences rather than genetic predisposition.",
    "choices": [
      "occurring within families",
      "refines social skills and introduces",
      "continues throughout adulthood as",
      "stress personal achievement",
      "proves essential for addressing"
    ],
    "answer": 1,
    "explanation": "②번이 오답입니다. 'Secondary socialization through schools and peer groups'는 단수 주어이므로 동사도 단수형이어야 합니다. 따라서 'refines'는 올바르지만, 'introduces'도 단수형이어야 하므로 문제없습니다. 그러나 이 문장에서는 주어 'Secondary socialization'와 동사 'refines and introduces'의 수 일치가 정확합니다. 정답 수정: ②번 'refines social skills and introduces'는 'refine social skills and introduce'로 수정되어야 합니다. 두 개의 병렬 동사가 같은 시제와 형태를 유지해야 하기 때문입니다.",
    "wrong_explanations": {
      "0": "occurring은 분사구문으로 올바른 형태입니다.",
      "2": "continues는 현재형으로 일반적 사실을 나타내며 올바릅니다.",
      "3": "stress는 복수 주어 'cultures'에 대한 올바른 동사형입니다.",
      "4": "proves는 동명사 'Understanding'에 대한 올바른 단수 동사입니다."
    },
    "_type": "grammar",
    "_source": "public_domain",
    "given_sentence": null
  },
  {
    "type": "어휘 적절성",
    "passage": "Educational psychology investigates how individuals acquire knowledge and develop skills, examining cognitive processes underlying learning. Constructivist theory proposes that learners actively construct understanding through experience rather than passively receiving information. This approach contrasts with traditional transmission models where teachers deliver content to receptive students. Metacognition, understanding one's own thinking processes, proves crucial for academic success; students who monitor comprehension and adjust strategies accordingly demonstrate superior learning outcomes. Research demonstrates that spaced retrieval practice surpasses massed practice, yet students paradoxically favor inefficient study methods. Motivation plays equally important roles, with intrinsic motivation fostering deeper learning than external rewards. Growth mindset, believing abilities develop through effort, correlates with persistence and academic achievement. Conversely, fixed mindset perspectives that abilities remain unchangeable correlate with learned helplessness and poor performance. Educational technology increasingly personalizes learning experiences through adaptive algorithms adjusting difficulty based on individual progress. However, technology cannot ① replace human pedagogical expertise; effective teachers create ② supportive environments fostering ③ engagement. Contemporary education faces ④ challenges integrating these research findings while managing diverse learner needs and ⑤ socioeconomic disparities.",
    "choices": [
      "replace",
      "supportive",
      "engagement",
      "challenges",
      "socioeconomic disparities"
    ],
    "answer": 0,
    "explanation": "④번 'challenges'는 문맥상 '직면하다'는 의미의 동사로 쓰였는데, ①번 'replace'를 '보완하다'의 의미인 'complement'로 교체하면 '기술은 인간의 교육 전문성을 보완할 수 없다'는 문맥에 맞지 않습니다. 정답은 ①번으로, 원문의 'replace(대체하다)'를 반의어인 'complement(보완하다)'로 바꾸면 의미가 180도 달라집니다.",
    "wrong_explanations": {
      "②supportive": "문맥상 '지지적인, 도움이 되는' 환경을 만든다는 의미로 완전히 적절함",
      "③engagement": "문맥상 '참여, 몰입'을 조성한다는 의미로 완전히 적절함",
      "④challenges": "문맥상 '직면하다, 마주하다'는 의미의 동사로 완전히 적절함",
      "⑤socioeconomic disparities": "문맥상 '사회경제적 불평등'이라는 명사로 완전히 적절함"
    },
    "_type": "vocab",
    "given_sentence": null,
    "_source": "public_domain"
  },
  {
    "type": "어휘 적절성",
    "passage": "Cultural evolution represents how societies develop and transform belief systems, artistic expressions, and social institutions across generations. Anthropologists view culture as cumulative knowledge transmitted through learning rather than genetic inheritance, enabling rapid adaptation without biological evolution. Languages exemplify cultural evolution; they constantly acquire new vocabulary addressing contemporary experiences while gradually shifting grammatical structures. Technological innovations drive significant cultural changes; the smartphone revolutionized communication patterns and social norms regarding privacy and attention. Globalization intensifies cultural exchange, creating unprecedented hybridization where local traditions blend with international influences. However, this process raises concerns about cultural homogenization threatening indigenous knowledge systems and artistic traditions. Cultural relativism emphasizes understanding practices within their original contexts rather than judging against external standards, yet absolute relativism struggles addressing genuinely harmful practices. Successful cultural preservation requires communities actively ① maintaining traditions while ② selectively adopting beneficial innovations, balancing continuity with necessary change. Museums, UNESCO programs, and digital archives ③ facilitate cultural documentation ensuring future generations ④ access heritage information. Ultimately, cultural evolution reflects human creativity and adaptability, yet requires ⑤ thoughtful stewardship preventing irreversible loss of diverse perspectives.",
    "choices": [
      "maintaining",
      "selectively",
      "facilitate",
      "access",
      "thoughtful"
    ],
    "answer": 4,
    "explanation": "⑤번 'thoughtful'(사려 깊은, 신중한)을 'careless'(부주의한)로 바꾸면 의미가 맞지 않습니다. 문맥상 '문화유산의 돌이킬 수 없는 손실을 막기 위해서는 신중한 관리가 필요하다'는 의미이므로, 반의어 'careless'를 사용하면 논리적으로 모순됩니다. 따라서 ⑤번이 어휘 적절성 문제의 정답입니다.",
    "wrong_explanations": {
      "①": "'maintaining'(유지하다)은 전통을 보존하는 맥락에서 완벽히 적절합니다.",
      "②": "'selectively'(선별적으로)는 유익한 혁신을 신중하게 채택하는 의미로 문맥상 적절합니다.",
      "③": "'facilitate'(촉진하다)는 박물관과 디지털 아카이브가 문화 기록을 용이하게 한다는 의미로 적절합니다.",
      "④": "'access'(접근하다)는 미래 세대가 유산 정보에 접근한다는 의미로 문맥상 적절합니다."
    },
    "_type": "vocab",
    "_source": "public_domain",
    "given_sentence": null
  },
  {
    "type": "요지/주제",
    "passage": "Ecosystem services describe the numerous benefits humans derive from natural systems, including water purification, pollination, climate regulation, and soil formation. These services, often invisible until disrupted, sustain human civilization yet remain undervalued in economic frameworks. Wetlands filter water and provide wildlife habitat, yet developers historically drained them for agricultural expansion. Pollinators including bees contribute approximately $15 billion annually to global agriculture, though pesticide exposure and habitat loss threaten populations. Deforestation eliminates carbon sinks while destroying biodiversity; forests harbor countless species with potential pharmaceutical applications. The economic cost of ecosystem damage often exceeds short-term extraction profits, yet conventional accounting ignores these externalities. Attempts to quantify ecosystem services monetarily raise ethical questions about commodifying nature, yet this approach effectively communicates value to policymakers. Payment for ecosystem services programs compensate landowners for maintaining natural systems, creating financial incentives for conservation. Biodiversity loss accelerates ecosystem service degradation, as specialized species perform unique functions irreplaceable by others. Ultimately, recognizing ecosystem service interdependence demands fundamental restructuring of economic systems, incorporating environmental limits into decision-making.",
    "choices": [
      "① 생태계 서비스의 경제적 가치를 화폐로 환산하려는 시도는 윤리적 문제를 야기하므로 절대 추진되어서는 안 된다.",
      "② 인간이 파괴한 생태계를 복원하기 위한 가장 효과적인 방법은 새로운 기술 개발에 있다.",
      "③ 경제 체계에 환경적 한계를 통합함으로써 생태계 서비스의 상호의존성을 인식하고 보전해야 한다.",
      "④ 습지와 산림이 인류 문명을 유지하는 주요 생태계 서비스를 제공하므로 모든 개발이 중단되어야 한다.",
      "⑤ 전 세계 농업에서 수분 매개자가 제공하는 경제적 기여는 생태계 파괴 비용보다 훨씬 크다."
    ],
    "answer": 2,
    "explanation": "이 지문의 요지는 현재 경제 체계에서 무시되고 있는 생태계 서비스의 가치를 인식하고, 환경적 제약을 경제 의사결정에 통합함으로써 근본적인 경제 체계 재구조화가 필요하다는 점입니다. 지문의 마지막 문장 'Ultimately, recognizing ecosystem service interdependence demands fundamental restructuring of economic systems, incorporating environmental limits into decision-making'이 핵심 요지를 명확히 제시하고 있습니다. ③번 선택지가 이를 정확히 반영합니다.",
    "wrong_explanations": {
      "0": "지문은 생태계 서비스의 화폐화가 '윤리적 문제를 야기하지만 정책입안자에게 가치를 효과적으로 전달한다'고 명시하여, 절대 불가능하다고 주장하지 않습니다.",
      "1": "지문은 새로운 기술 개발이 아닌 경제 체계의 근본적 재구조화를 강조하고 있습니다.",
      "3": "지문은 모든 개발이 중단되어야 한다고 주장하지 않으며, 오히려 생태계 보전을 위한 경제적 인센티브(Payment for ecosystem services programs) 활용을 제시합니다.",
      "4": "지문의 핵심 주장이 아니며, 생태계 파괴 비용의 우월성 비교가 주요 논점이 아닙니다."
    },
    "_type": "main_idea",
    "given_sentence": null,
    "_source": "public_domain"
  },
  {
    "type": "글의 순서",
    "passage": "The study of social psychology reveals how individuals' thoughts, feelings, and behaviors respond to social contexts. ① Interestingly, minimal groups created experimentally trigger favoritism, suggesting group identity proves psychologically powerful even without meaningful distinctions. ② Contact hypothesis proposes that intergroup interaction under appropriate conditions reduces prejudice, yet mere exposure proves insufficient; equality, common goals, and institutional support prove necessary. ③ Attribution theory explains how people assign causes to observed behaviors, frequently committing fundamental attribution error by overestimating dispositional factors while underestimating situational influences. Conformity experiments demonstrated that individuals often abandon accurate perceptions to align with group consensus, prioritizing social acceptance over personal judgment. Cognitive biases systematically distort reasoning; confirmation bias leads people seeking information supporting existing beliefs while dismissing contradictory evidence. In-group bias favors members of groups one belongs to, fueling discrimination and intergroup conflict. Social identity theory proposes that self-concept partly derives from group memberships, affecting behavior and attitude formation.",
    "choices": [
      "③ - ① - ②",
      "① - ② - ③",
      "② - ③ - ①",
      "③ - ② - ①",
      "② - ① - ③"
    ],
    "answer": 0,
    "explanation": "도입부에서 사회심리학의 범위를 제시한 후, ③번에서 귀인이론, 동조성, 인지편향, 내집단 편향, 사회정체성이론 등 핵심 이론들을 설명하고, ①번에서 최소집단 상황 실험을 통해 집단 정체성의 심리적 강력함을 보여주며, ②번에서 편견 감소를 위한 접촉가설과 필요조건들을 제시하는 것이 논리적 흐름입니다. 이론 설명 → 이론의 증거 제시 → 실제 해결책 제안의 순서가 적절합니다.",
    "wrong_explanations": {
      "1": "① - ② - ③ 순서는 핵심 이론 설명 전에 최소집단 실험을 먼저 제시하므로 비논리적입니다.",
      "2": "② - ③ - ① 순서는 해결책을 먼저 제시하고 이론을 설명하므로 인과관계가 역순입니다.",
      "3": "③ - ② - ① 순서는 편견 감소 방법을 먼저 제시하고 이론의 증거를 마지막에 배치하므로 부자연스럽습니다.",
      "4": "② - ① - ③ 순서는 도입부 바로 다음에 핵심 이론이 없이 구체적 내용들부터 시작하므로 적절하지 않습니다."
    },
    "_type": "order",
    "given_sentence": null,
    "_source": "public_domain"
  }
];
