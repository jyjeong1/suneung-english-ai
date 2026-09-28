// Prof.AI 감수용 샘플 문제 — 36문제
const QUESTION_BANK = [
  {
    "type": "빈칸 추론",
    "passage": "The phenomenon of procrastination has long puzzled psychologists and researchers who seek to understand human behavior. While many assume that procrastination stems from laziness or poor time management, contemporary cognitive science reveals a more nuanced reality. Procrastination is fundamentally ___________—it operates as a emotion regulation strategy rather than a productivity problem. When individuals face tasks that evoke negative emotions such as anxiety or self-doubt, they unconsciously postpone engagement to alleviate immediate emotional discomfort. This perspective facilitates our understanding of why even highly motivated and capable people procrastinate. The paradox lies in the fact that avoidance temporarily reduces emotional distress but ultimately intensifies it as deadlines approach. Neuroscientific studies demonstrate that the brain regions associated with emotion processing show heightened activity when procrastinators contemplate their tasks. Recognizing procrastination's emotional core rather than its behavioral surface enables more effective interventions. Therapy approaches targeting emotional regulation prove more successful than traditional time management techniques. This reconceptualization constitutes a significant shift in how we address procrastination in both educational and professional settings.",
    "choices": [
      "①an emotional problem masquerading as a time management issue",
      "②a hereditary trait that cannot be overcome through effort",
      "③primarily caused by lack of intelligence or capability",
      "④a direct result of increased workload and pressure",
      "⑤a symptom of depression that requires immediate medication"
    ],
    "answer": 0,
    "explanation": "지문은 미루기를 '정서 조절 전략'으로 규정하며, 시간 관리 문제가 아니라 부정적 감정(불안, 자기의심)을 완화하려는 정서적 대처 메커니즘임을 설명합니다. '이 관점은 우리의 이해를 용이하게 한다'는 다음 문장이 정답을 강하게 뒷받침합니다.",
    "wrong_explanations": {
      "1": "지문이 유전적 특성임을 시사하는 어떤 근거도 제시하지 않음",
      "2": "지문은 지능이나 능력 부족이 아니라 정서 조절의 문제라고 명시함",
      "3": "업무 부하가 아닌 감정 처리와 관련된 뇌 영역의 활동을 언급함",
      "4": "우울증이 아닌 정상적인 정서 조절 메커니즘으로 설명함"
    },
    "_type": "blank",
    "given_sentence": null
  },
  {
    "type": "빈칸 추론",
    "passage": "Language acquisition in early childhood represents one of the most remarkable cognitive achievements. While adults struggle to learn new languages, children effortlessly acquire complex grammatical structures and vast vocabularies. Researchers have long debated whether this linguistic superiority reflects inherent biological advantages or environmental factors. Recent studies in psycholinguistics suggest that children's success is ___________. Their brains demonstrate greater neuroplasticity, meaning they can reorganize neural connections more fluidly than adult brains. Additionally, children encounter language in rich, socially embedded contexts where caregivers intuitively adjust their speech patterns to facilitate comprehension. This phenomenon, called 'motherese' or infant-directed speech, contains exaggerated prosody and simplified syntax perfectly calibrated for learning. Adults, conversely, often learn languages in artificial classroom settings with explicit rule instruction. The paradox emerges when we recognize that while adult cognition is superior in many domains, language learning constitutes an exception where childhood advantages prove decisive. Understanding these differential mechanisms illuminates why immersion during critical developmental periods yields superior long-term fluency and accent-free pronunciation.",
    "choices": [
      "①attributable to both neurobiological maturation and optimized social contexts",
      "②solely determined by genetic programming established before birth",
      "③primarily caused by children's greater motivation and diligence",
      "④a result of inferior adult neural plasticity combined with aging",
      "⑤dependent exclusively on the amount of exposure time"
    ],
    "answer": 0,
    "explanation": "지문은 신경가소성(neuroplasticity)과 '마더시'와 같은 사회적 맥락이 함께 작용한다고 설명합니다. '두 요소 모두'를 강조하는 therefore와 비교 구조가 정답을 지지합니다.",
    "wrong_explanations": {
      "1": "지문이 환경적 요소(motherese, 사회적 맥락)의 중요성을 명확히 강조함",
      "2": "아동의 높은 동기가 언어 학습 우위를 설명하지 못함을 암시",
      "3": "성인의 신경가소성도 존재하며, 단순한 노화의 문제가 아님",
      "4": "지문이 노출 시간보다 맥락의 질과 발달 시기의 중요성을 강조"
    },
    "_type": "blank",
    "given_sentence": null
  },
  {
    "type": "빈칙 추론",
    "passage": "Economic behavior often defies the assumptions of traditional rational choice theory. The concept of 'mental accounting,' pioneered by behavioral economist Richard Thaler, reveals how individuals psychologically compartmentalize their financial decisions. Rather than treating all money as fungible units, people create mental categories based on income source, intended purpose, and temporal horizon. This cognitive mechanism is ___________. Someone might refuse to spend $50 from their savings account while readily purchasing the same item with equivalent bonus income, despite the financial equivalence. The paradox reflects how individuals perceive psychological rather than objective value. This tendency facilitates spending from 'found money' while constraining expenditure from wages earned through labor. Mental accounting constitutes an inherent feature of human cognition that persists across cultures and income levels. Financial institutions increasingly recognize and exploit this phenomenon through marketing strategies that deliberately leverage these mental categories. Understanding these psychological mechanisms enables policymakers to design interventions that promote better financial literacy and more sustainable consumption patterns without requiring individuals to abandon their natural cognitive frameworks.",
    "choices": [
      "①irrational from an economic standpoint but functionally adaptive psychologically",
      "②logically sound and consistent with traditional economic principles",
      "③evidence that people deliberately ignore rational financial advice",
      "④caused by insufficient mathematical ability and education",
      "⑤proof that all economic decisions are entirely random and unpredictable"
    ],
    "answer": 0,
    "explanation": "지문은 정신 회계가 경제학적으로는 비합리적이지만 심리학적으로 의미 있다는 패러독스를 설명합니다. 이후 예시와 '인지적 특성'이라는 명시가 이를 강력하게 뒷받침합니다.",
    "wrong_explanations": {
      "1": "지문이 전통 경제학과의 모순을 명확히 보여줌",
      "2": "지문이 의도적인 무시가 아닌 무의식적 인지 메커니즘임을 강조",
      "3": "수학 능력이 아닌 심리적 분류 체계의 문제",
      "4": "패턴이 있으며, 문화와 소득 수준을 통해 일관성 있음"
    },
    "_type": "blank",
    "given_sentence": null
  },
  {
    "type": "빈칸 추론",
    "passage": "The social contagion of emotions through digital platforms represents a fascinating yet concerning contemporary phenomenon. Research demonstrates that users' emotional states can be significantly influenced by the emotional content they encounter in their social media feeds. This mechanism is particularly potent because ___________. Users typically perceive algorithmically curated content as naturally occurring social information rather than deliberately filtered narratives. The algorithms optimize for engagement, which correlates strongly with emotionally arousing content—both positive and negative. This structure facilitates the rapid spread of emotional states through networks without users consciously recognizing the manipulation. The paradox inherent in social media platforms lies in their simultaneous capacity to connect people meaningfully and to fragment shared reality into personalized emotional echo chambers. What constitutes a global village in theory becomes isolated emotional territories in practice. Research on emotional contagion demonstrates that even brief exposure to negative content measurably increases anxiety and depression symptoms among vulnerable populations. This phenomenon raises critical questions about platform responsibility and the ethics of algorithmic curation. Understanding these mechanisms becomes essential for developing healthier digital literacy practices and regulatory frameworks.",
    "choices": [
      "①algorithm-driven curation creates an illusion of spontaneous social reality while maximizing emotional triggers",
      "②users deliberately choose to view emotionally extreme content regardless of personal consequences",
      "③social media platforms have minimal influence on users' genuine emotional states",
      "④emotional spread occurs mainly through direct person-to-person communication rather than feeds",
      "⑤negative emotions naturally spread faster than positive ones in all human contexts"
    ],
    "answer": 0,
    "explanation": "지문은 알고리즘이 콘텐츠를 자연스럽게 보이도록 필터링하면서 동시에 정서적 자극을 극대화한다는 이중 메커니즘을 설명합니다. 'perceive'와 'engagement' 관련 문장들이 이를 지지합니다.",
    "wrong_explanations": {
      "1": "사용자들의 의도적 선택이 아닌 무의식적 영향을 강조",
      "2": "지문이 알고리즘의 영향력을 직접 언급함",
      "3": "지문이 '측정 가능한 증가'를 강조함",
      "4": "모든 맥락에서 부정적 감정이 더 빠르게 퍼진다고 할 수 없음"
    },
    "_type": "blank",
    "given_sentence": null
  },
  {
    "type": "빈칸 추론",
    "passage": "The concept of 'flow state,' introduced by psychologist Mihaly Csikszentmihalyi, describes optimal psychological experiences where individuals become completely absorbed in activities. This state emerges when challenges and skills achieve precise calibration. The experience is universally valued across cultures, yet ___________. Many modern workplace environments actually structure jobs in ways that prevent flow rather than facilitate it. Excessive monitoring, fragmented task allocation, and constant digital interruptions constitute significant obstacles to deep engagement. The paradox within contemporary productivity culture suggests that constant activity and multitasking—often perceived as efficiency markers—fundamentally undermine the cognitive conditions necessary for true accomplishment. Neuroscientific research reveals that deep focus requires sustained attention patterns that take approximately twenty minutes to establish. However, the average worker experiences task interruptions every three to five minutes. This phenomenon reflects how organizational structures often contradict inherent human cognitive needs. Recognition of flow's importance has led some innovative companies to establish 'focus hours' with protected time and reduced communication requirements. Understanding the conditions facilitating flow represents a crucial perspective for redesigning work environments that promote both psychological wellbeing and genuine productivity.",
    "choices": [
      "①most modern organizational structures actively obstruct its occurrence through poor workplace design",
      "②the state is impossible to achieve in professional settings due to innate human limitations",
      "③companies have successfully eliminated all barriers to flow state",
      "④achieving flow requires abandoning professional responsibilities entirely",
      "⑤flow state is only valuable in creative professions, not analytical work"
    ],
    "answer": 0,
    "explanation": "지문은 'yet'이라는 역접 접속사로 flow의 가치와 현대 직장환경의 모순을 제시합니다. 이후 '초과 감시, 단편적 업무 할당, 중단'이 flow를 방해한다는 내용이 직접 정답을 뒷받침합니다.",
    "wrong_explanations": {
      "1": "지문이 flow는 가능하지만 장애가 있음을 명시함",
      "2": "일부 회사가 성공적으로 focus hours를 도입했음을 언급",
      "3": "전문적 책임 포기가 필요하지 않으며, 구조 개선이 핵심",
      "4": "지문이 모든 직업에서의 가치를 암시함"
    },
    "_type": "blank",
    "given_sentence": null
  },
  {
    "type": "문장 삽입",
    "passage": "The concept of urban green spaces has gained significant attention among city planners and environmental scientists. (①) Green areas such as parks and gardens provide multiple benefits to urban residents, including improved air quality and mental health advantages. Research indicates that exposure to natural environments reduces stress levels and enhances cognitive function in individuals working in high-pressure occupations. (②) The implementation of vertical gardens on building facades represents an innovative solution to space constraints in densely populated metropolitan areas. (③) These structures not only maximize ecological efficiency but also contribute to aesthetic urban design. Furthermore, urban forests play a crucial role in mitigating the heat island effect, which causes temperatures in cities to rise significantly compared to surrounding rural regions. (④) Studies have documented that trees and vegetation absorb solar radiation and facilitate evapotranspiration, thereby regulating microclimate conditions. (⑤) Consequently, municipalities worldwide are investing in comprehensive green infrastructure projects to ensure sustainable urban development and improve quality of life for their inhabitants.",
    "given_sentence": "However, the allocation of limited urban land for such purposes remains a persistent challenge for city authorities.",
    "choices": [
      "①",
      "②",
      "③",
      "④",
      "⑤"
    ],
    "answer": 2,
    "explanation": "주어진 문장의 'However'는 앞의 긍정적 내용(수직 정원의 이점)에 대한 대조적 반박을 나타냅니다. ③번 위치(수직 정원의 장점 언급 후)에 삽입하면 자연스럽게 토지 부족이라는 문제를 제시합니다.",
    "wrong_explanations": {
      "0": "①에 삽입하면 초반 주제 제시 직후 갑자기 문제점을 언급하여 논리 흐름이 어색합니다.",
      "1": "②에 삽입하면 수직 정원 소개 문장 바로 뒤에서 문제점을 언급하여 그 장점들을 설명하기 전에 제약을 제시하게 됩니다.",
      "3": "④에 삽입하면 열섬 현상 완화의 기제를 설명하는 문맥과 맞지 않습니다.",
      "4": "⑤에 삽입하면 결론 부분에 새로운 문제점을 제시하여 해결책에 대한 논의를 방해합니다."
    },
    "_type": "insert"
  },
  {
    "type": "문장 삽입",
    "passage": "The phenomenon of artificial intelligence has fundamentally transformed industrial processes and service sectors worldwide. Companies increasingly rely on machine learning algorithms to analyze vast datasets and optimize operational efficiency. (①) AI-powered systems now handle tasks ranging from customer service to predictive maintenance in manufacturing facilities. (②) The adoption of such technologies has demonstrably increased productivity levels across multiple industries, generating substantial economic gains. Critics, however, raise important concerns about employment displacement and the necessity for workforce retraining programs. (③) The transition requires substantial investments in educational infrastructure and policy frameworks to support affected workers. (④) Governments and private institutions must collaborate to develop comprehensive strategies addressing these socioeconomic implications. (⑤) Despite these challenges, technological advancement appears inevitable, and society must proactively prepare for the continued integration of AI systems.",
    "given_sentence": "This transformation, however, does not occur without significant social and economic ramifications that warrant careful examination.",
    "choices": [
      "①",
      "②",
      "③",
      "④",
      "⑤"
    ],
    "answer": 1,
    "explanation": "'This transformation'은 앞의 AI 도입과 생산성 증가를 가리키며, 'however'는 긍정적 효과에 대한 부정적 측면을 제시합니다. ②번 위치(경제적 이득 후)에서 자연스럽게 반박의 논리를 전개합니다.",
    "wrong_explanations": {
      "0": "①에 삽입하면 AI 시스템 설명 직후 갑자기 부정적 결과를 언급하여 순서가 맞지 않습니다.",
      "2": "③에 삽입하면 비판 내용이 이미 제시된 후 다시 전환 문장을 삽입하여 중복됩니다.",
      "3": "④에 삽입하면 협력 필요성 논의 중간에 새로운 주장을 끼워 넣어 논리 흐름을 방해합니다.",
      "4": "⑤에 삽입하면 결론 부분에 부적절한 시간 전환으로 문맥이 불일치합니다."
    },
    "_type": "insert"
  },
  {
    "type": "문장 삽입",
    "passage": "Linguistic diversity serves as a fundamental aspect of human cultural heritage and cognitive development. Languages encode unique perspectives on the natural world and facilitate distinct modes of thinking and problem-solving. (①) Neuroscience research demonstrates that multilingual individuals exhibit enhanced cognitive flexibility and superior executive function compared to monolingual counterparts. (②) The extinction of languages represents an irreversible loss of accumulated cultural knowledge and traditional ecological wisdom accumulated over generations. (③) Indigenous communities often possess sophisticated understanding of their local ecosystems through language-specific terminology and conceptual frameworks. (④) However, globalization processes have precipitated unprecedented linguistic homogenization, with smaller languages disappearing at alarming rates. (⑤) Consequently, linguists and anthropologists advocate for comprehensive documentation and revitalization programs to preserve endangered languages and maintain humanity's intellectual diversity.",
    "given_sentence": "Such cognitive advantages underscore the practical benefits of maintaining linguistic pluralism in educational and professional contexts.",
    "choices": [
      "①",
      "②",
      "③",
      "④",
      "⑤"
    ],
    "answer": 1,
    "explanation": "주어진 문장의 'Such cognitive advantages'는 ①번의 다언어 사용자의 인지적 이점을 지칭합니다. ②번 위치에 삽입하면 다언어의 장점을 먼저 설명한 후 언어 소멸의 문제로 자연스럽게 이동합니다.",
    "wrong_explanations": {
      "0": "①에 삽입하면 같은 내용이 반복되어 중복됩니다.",
      "2": "③에 삽입하면 인지적 이점과 생태 지식이라는 서로 다른 주제를 부자연스럽게 연결합니다.",
      "3": "④에 삽입하면 'However'의 대조 구조와 맞지 않습니다.",
      "4": "⑤에 삽입하면 결론 부분에 새로운 주제를 끼워 넣어 구조를 방해합니다."
    },
    "_type": "insert"
  },
  {
    "type": "문장 삽입",
    "passage": "The phenomenon of circadian rhythms has profound implications for human health and work performance across various occupational sectors. Biological clocks regulate sleep-wake cycles through the secretion of melatonin and cortisol, hormones that fluctuate according to light-dark cycles. (①) Modern industrial societies, however, frequently impose temporal demands that conflict with these natural physiological cycles. (②) Shift workers and frequent travelers experience significant disruption to their circadian homeostasis, resulting in compromised immune function and metabolic disorders. (③) Research has established strong correlations between circadian misalignment and increased vulnerability to cardiovascular diseases, obesity, and depression. (④) Organizations implementing chronobiological principles in workplace scheduling have documented measurable improvements in employee productivity and occupational safety outcomes. (⑤) These findings suggest that aligning human activity patterns with biological predispositions represents a pragmatic approach to organizational management and public health promotion.",
    "given_sentence": "Consequently, understanding the mechanisms underlying circadian regulation has become increasingly important for occupational health specialists and organizational policymakers.",
    "choices": [
      "①",
      "②",
      "③",
      "④",
      "⑤"
    ],
    "answer": 3,
    "explanation": "'Consequently'는 앞의 부정적 건강 결과(심혈관질환, 비만, 우울증)에 기반한 결론입니다. ④번 위치(건강 위험 제시 후)에 삽입하면 이러한 문제점들이 중요한 이유를 설명하며 자연스럽게 해결책으로 전환됩니다.",
    "wrong_explanations": {
      "0": "①에 삽입하면 순환 리듬 기본 설명 직후 갑자기 결론을 제시하여 논리 전개가 부족합니다.",
      "1": "②에 삽입하면 교대 근무 영향 설명 중간에 결론을 끼워 넣어 인과관계가 명확하지 않습니다.",
      "2": "③에 삽입하면 건강 위험 나열 중간에 결론을 제시하여 증거 제시를 방해합니다.",
      "4": "⑤에 삽입하면 최종 결론 부분에서 또 다른 결론을 제시하여 중복되고 약해집니다."
    },
    "_type": "insert"
  },
  {
    "type": "문장 삽입",
    "passage": "The phenomenon of neuroplasticity has revolutionized contemporary understanding of brain function and cognitive development throughout the human lifespan. Traditional neuroscience maintained that neural structures remained relatively fixed after early childhood, severely limiting potential for recovery from brain injury. (①) However, contemporary research utilizing advanced neuroimaging technologies has conclusively demonstrated that the brain retains substantial capacity for reorganization and functional adaptation. (②) Stroke patients undergoing intensive rehabilitation therapy exhibit remarkable recovery of motor and linguistic functions through compensatory activation of alternative neural pathways. (③) Similarly, musicians and bilingual individuals demonstrate morphological brain changes resulting from sustained cognitive engagement and practice. (④) These adaptive mechanisms suggest that environmental stimulation and deliberate practice constitute primary determinants of neural development. (⑤) Therefore, educational institutions and therapeutic programs must incorporate evidence-based strategies that systematically leverage neuroplastic mechanisms to optimize human potential and facilitate recovery from neurological dysfunction.",
    "given_sentence": "This capacity extends beyond motor recovery, encompassing profound changes in cognitive architecture and behavioral repertoires.",
    "choices": [
      "①",
      "②",
      "③",
      "④",
      "⑤"
    ],
    "answer": 3,
    "explanation": "주어진 문장의 'This capacity'는 신경가소성의 재편성 능력을 지칭합니다. ④번 위치(음악가와 다언어 사용자의 뇌 변화 설명 후)에 삽입하면 구체적 사례에서 일반화된 결론으로 자연스럽게 전환되며, 신경 적응 메커니즘을 종합합니다.",
    "wrong_explanations": {
      "0": "①에 삽입하면 신경가소성의 기본 개념만 제시된 상태에서 확대된 설명을 끼워 넣어 시기상 부적절합니다.",
      "1": "②에 삽입하면 운동 회복 사례 직후 갑자기 더 넓은 범위를 주장하여 논리 흐름이 자연스럽지 않습니다.",
      "2": "③에 삽입하면 음악가의 뇌 변화 설명 중간에 일반화된 주장을 제시하여 구체성을 방해합니다.",
      "4": "⑤에 삽입하면 'Therefore'의 결론 앞에 새로운 주장을 끼워 넣어 인과관계가 약해집니다."
    },
    "_type": "insert"
  },
  {
    "type": "문장 삽입",
    "passage": "The concept of nostalgia has evolved significantly over centuries. ① Originally, nostalgia was classified as a medical condition affecting Swiss mercenaries who longed for their homeland. ② During the 19th century, scholars began to recognize it as a psychological phenomenon rather than a physical disease. ③ This shift in perspective fundamentally altered how society understood human emotions and memory. The term itself derives from Greek words meaning 'homecoming' and 'pain,' reflecting the bittersweet nature of reminiscing about the past. ④ Modern psychologists argue that nostalgia serves important functions in maintaining psychological well-being and social cohesion. Research demonstrates that nostalgic experiences can enhance mood, strengthen interpersonal relationships, and provide a sense of continuity in one's identity. ⑤ Museums and cultural institutions have increasingly recognized this phenomenon, designing exhibits that deliberately evoke nostalgic responses among visitors. Understanding nostalgia's role in human psychology has profound implications for how we approach mental health and cultural preservation in contemporary society.",
    "given_sentence": "However, this therapeutic aspect of nostalgia was largely overlooked during earlier periods when the emotion was primarily pathologized.",
    "choices": [
      "①",
      "②",
      "③",
      "④",
      "⑤"
    ],
    "answer": 3,
    "explanation": "③번 이후에서 과거의 부정적 인식을 다루다가, ④번 앞에서 현대 심리학자들의 긍정적 관점으로 전환됩니다. 'However'는 이 대조를 연결하며, '치료적 측면이 간과되었다'는 내용이 과거의 병리화(pathologized)와 현재의 치료 기능 사이의 대조를 명확히 합니다.",
    "wrong_explanations": {
      "①": "도입부에서 역사적 배경을 제시하고 있어 중간 전환 표현 'However'가 어색합니다.",
      "②": "②번 앞뒤는 19세기 변화의 시간 순서를 설명하고 있어 대조 표현이 필요하지 않습니다.",
      "⑤": "⑤번은 현대의 실제 사례를 제시하는 구간으로, 역사적 대조보다는 현대 사례의 추가 설명이 필요합니다."
    },
    "_type": "insert"
  },
  {
    "type": "문장 삽입",
    "passage": "Climate change represents one of the most pressing environmental challenges of our time. ① Scientists have accumulated extensive empirical data demonstrating rising global temperatures and their cascading effects on ecosystems worldwide. ② The burning of fossil fuels releases greenhouse gases that accumulate in the atmosphere, creating a thermal blanket effect. ③ This phenomenon has prompted governments and corporations to explore renewable energy alternatives and implement mitigation strategies. ④ Countries that have invested heavily in solar and wind technology have demonstrated significant reductions in carbon emissions. ⑤ However, the transition away from fossil fuels remains economically challenging for developing nations that depend on traditional energy sources for industrial growth. The disparity between developed and developing countries in addressing climate change raises complex questions about equity and global responsibility. International frameworks must balance environmental sustainability with economic development to ensure that climate action does not disproportionately burden poorer nations.",
    "given_sentence": "Such comprehensive understanding of climate mechanisms has transformed environmental policy and scientific discourse over the past two decades.",
    "choices": [
      "①",
      "②",
      "③",
      "④",
      "⑤"
    ],
    "answer": 2,
    "explanation": "②번에서 온실가스 메커니즘을 설명한 후 ③번에서 이러한 이해(comprehensive understanding)를 바탕으로 정책이 변화했다는 내용이 논리적으로 연결됩니다. 'Such'는 앞의 설명된 현상을 지칭하며 원인-결과 관계를 명확히 합니다.",
    "wrong_explanations": {
      "①": "①번은 도입부로 일반적 주장이며, 아직 구체적 메커니즘이 제시되지 않았습니다.",
      "④": "④번은 재생에너지의 효과를 다루고 있어 앞의 메커니즘 설명과 직접 연결되지 않습니다.",
      "⑤": "⑤번은 개발도상국의 어려움을 다루며 이전 내용과의 연결이 약합니다."
    },
    "_type": "insert"
  },
  {
    "type": "어법 판단",
    "passage": "The proliferation of artificial intelligence in modern society has raised significant concerns among researchers and policymakers alike. Many experts argue that AI systems, which is ① designed to optimize efficiency, often overlook crucial ethical considerations. Recent studies have shown that algorithms used in hiring processes are prone to perpetuate existing biases. Companies implementing these technologies must ensure ② that their decision-making mechanisms is transparent and accountable to stakeholders. Furthermore, the integration of machine learning into critical infrastructure requires rigorous testing to prevent catastrophic failures. Regulators have begun to establish frameworks aimed at mitigating risks ③ associated with autonomous systems. However, some argue that excessive restrictions could impede innovation and economic growth. The challenge lies in balancing technological advancement with social responsibility. Organizations ④ committed to ethical AI development recognize the necessity of ongoing dialogue between technologists, ethicists, and community leaders. Moving forward, establishing international standards will be essential ⑤ for ensuring that AI technologies benefit society as a whole while minimizing potential harms.",
    "choices": [
      "①is",
      "②ensure",
      "③associate",
      "④committing",
      "⑤ensure"
    ],
    "answer": 0,
    "explanation": "정답: ① is → are. 주어는 'AI systems'(복수)이므로 동사는 복수형 'are'가 필요합니다. 관계절 'which are designed'의 관계대명사 which는 복수 선행사 systems를 나타내므로 복수동사가 맞습니다.",
    "wrong_explanations": {
      "②": "that 이하는 명사절이고, ensure는 올바른 동사원형입니다. (must ensure + that절)",
      "③": "associate는 과거분사 형태로 '~와 관련된'의 의미로 올바릅니다. (associated with)",
      "④": "committed는 과거분사로 형용사 역할을 하며 'Organizations committed to~'로 올바릅니다.",
      "⑤": "ensure는 동사원형으로 'will be essential to ensure'에서 to부정사 형태로 올바릅니다."
    },
    "_type": "grammar",
    "given_sentence": null
  },
  {
    "type": "어법 판단",
    "passage": "Climate change represents one of the most pressing global challenges of our time, demanding immediate and comprehensive action from governments and individuals alike. Scientists have accumulated extensive evidence demonstrating that rising temperatures is ① causing widespread ecological disruption. The phenomenon, which include melting ice caps and rising sea levels, threatens coastal communities worldwide. Developing nations particularly vulnerable to climate impacts often lack the resources necessary for ② adapt to environmental changes. International agreements have been established with the objective of reducing carbon emissions, yet implementation remains inconsistent across different regions. Many corporations have begun to transition toward renewable energy sources, ③ seeking to minimize their environmental footprint. The transition requires substantial investment in infrastructure and technology. Stakeholders involved in sustainability initiatives must prioritize ④ strategies that address both immediate challenges and long-term environmental goals. Educational campaigns aimed at raising awareness have proven effective in ⑤ mobilizing public support for climate action initiatives.",
    "choices": [
      "①are",
      "②adaptation",
      "③sought",
      "④strategic",
      "⑤mobilize"
    ],
    "answer": 0,
    "explanation": "정답: ① are. 주어는 'rising temperatures'(복수)이므로 동사는 복수형 'are'가 필요합니다. 'is causing'은 단수형 동사이므로 오류입니다.",
    "wrong_explanations": {
      "②": "necessary for adaptation은 올바른 표현입니다. (resources for + noun)",
      "③": "seeking은 현재분사로 '~하면서'의 의미로 올바릅니다. 과거형 sought는 오류입니다.",
      "④": "strategies는 복수명사이고, prioritize 뒤에 직접 strategies가 오므로 형용사 strategic은 오류입니다.",
      "⑤": "in mobilizing은 동명사 구조로 올바릅니다. mobilize의 to부정사 형태인 'to mobilize'는 'in' 뒤에 올 수 없습니다."
    },
    "_type": "grammar",
    "given_sentence": null
  },
  {
    "type": "어법 판단",
    "passage": "The advancement of biotechnology has revolutionized medical research and treatment methodologies throughout the past decade. Scientists studying genetic disorders are employing innovative techniques, which allows ① them to identify disease-causing mutations with unprecedented precision. Gene therapy, a groundbreaking approach that involves ② replacing or repairing defective genes, offers hope to patients suffering from previously incurable conditions. Regulatory bodies have established stringent protocols ③ designed for ensuring the safety and efficacy of new treatments before clinical approval. The ethical implications of genetic modification remain contentious, with bioethicists arguing about whether certain applications should be ④ permitted in human populations. Research institutions worldwide have dedicated significant resources toward developing personalized medicine strategies. Furthermore, collaboration among researchers from different disciplines has accelerated ⑤ the discovery of novel therapeutic approaches.",
    "choices": [
      "①allow",
      "②replace",
      "③designed to ensure",
      "④permit",
      "⑤discovering"
    ],
    "answer": 2,
    "explanation": "정답: ③ designed to ensure. 목적을 나타내려면 'designed for ensuring' 대신 'designed to ensure'(~하도록 설계된)로 to부정사를 사용해야 합니다. 'designed for + noun'은 문법적으로 가능하지만, '목적'을 명확히 할 때는 'designed to + V'가 표준입니다.",
    "wrong_explanations": {
      "①": "which는 복수 선행사 techniques를 나타내므로 'which allow'가 맞고, 'allows'는 오류입니다.",
      "②": "involves + -ing 구조에서 replacing은 올바른 동명사 형태입니다.",
      "④": "should be permitted는 수동태로 올바릅니다. (permit의 과거분사)",
      "⑤": "accelerated the discovery는 올바릅니다. accelerated 뒤에 명사 discovery가 와야 하므로 동명사 discovering은 오류입니다."
    },
    "_type": "grammar",
    "given_sentence": null
  },
  {
    "type": "어법 판단",
    "passage": "Urban planning initiatives have increasingly focused on sustainability and inclusivity as cities grapple with rapid population growth and environmental degradation. Municipal governments, recognizing the necessity of comprehensive strategies, has ① begun implementing green infrastructure projects across metropolitan areas. These initiatives, which encompass ② constructing public transportation systems and establishing urban forests, aim to reduce carbon emissions significantly. Planners must consider the diverse needs of residents when ③ designing neighborhoods that accommodate people from various socioeconomic backgrounds. Communities historically marginalized from decision-making processes are now being invited to ④ participate in shaping their urban environments. The integration of technology in city planning, combined with community engagement, has proven effective in ⑤ create sustainable and equitable urban spaces. However, funding constraints remain a significant obstacle to widespread implementation.",
    "choices": [
      "①have",
      "②construct",
      "③design",
      "④participating",
      "⑤creating"
    ],
    "answer": 0,
    "explanation": "정답: ① have. 주어는 'Municipal governments'(복수)이므로 동사는 복수형 'have'가 필요합니다. 'has begun'은 단수형이므로 오류입니다.",
    "wrong_explanations": {
      "②": "encompass + -ing 구조에서 constructing은 올바른 동명사입니다.",
      "③": "when designing은 시간을 나타내는 분사구로 올바릅니다.",
      "④": "be invited to participate에서 participate는 올바른 to부정사입니다. participating은 오류입니다.",
      "⑤": "has proven effective in + -ing에서 creating은 올바른 동명사입니다."
    },
    "_type": "grammar",
    "given_sentence": null
  },
  {
    "type": "어법 판단",
    "passage": "The emergence of remote work practices has fundamentally transformed organizational structures and employee expectations in the contemporary workplace. Companies that have adopted flexible work arrangements report higher levels of employee satisfaction and productivity, which suggests ① that traditional office-based models are not ② inherently superior for all professional contexts. Employees working from home experience reduced commuting stress and gain ③ increased opportunities to balance work and personal responsibilities. However, managers overseeing remote teams face distinct challenges, including maintaining team cohesion and ensuring adequate communication across dispersed workforce members. Organizations committed to ④ supporting remote work success must invest in appropriate technological infrastructure and provide comprehensive training. Furthermore, policies governing work-life balance need ⑤ being carefully evaluated to prevent employee burnout and maintain long-term organizational sustainability.",
    "choices": [
      "①suggest",
      "②inherent",
      "③increase",
      "④support",
      "⑤to be"
    ],
    "answer": 4,
    "explanation": "정답: ⑤ to be. 'need + to부정사' 구조에서 'need to be carefully evaluated'가 올바릅니다. 'need being'은 문법적으로 부정확합니다. (need + 동명사는 비표준 용법)",
    "wrong_explanations": {
      "①": "which suggests는 계속적 관계절로 올바릅니다. 단수형 동사 'suggests'가 맞습니다.",
      "②": "are not inherently superior에서 inherently는 부사형으로 올바릅니다. 형용사 inherent는 오류입니다.",
      "③": "gain increased opportunities는 올바릅니다. increase는 형용사로 '증가된'의 의미입니다.",
      "④": "committed to supporting에서 supporting은 동명사로 올바릅니다."
    },
    "_type": "grammar",
    "given_sentence": null
  },
  {
    "type": "어법 판단",
    "passage": "The rapid advancement of artificial intelligence has prompted researchers to reconsider ①how society adapts to technological innovation. Many scholars argue that education systems should be reformed to prepare students for ②a future where automation becomes increasingly prevalent. Several studies conducted by leading institutions reveal that workers who receives training in digital literacy are more likely to maintain employment stability. The phenomenon of job displacement, ③which has affected millions of people worldwide, demands immediate policy intervention. Companies investing in employee development programs demonstrates commitment to sustainable growth. Furthermore, governments must establish comprehensive frameworks ④to address the socioeconomic challenges emerging from technological disruption. Policymakers recognize that ⑤ignoring these issues will result in greater inequality and social tension. The collaboration between educational institutions and private sectors is essential for creating effective solutions. Research indicates that interdisciplinary approaches yield more innovative outcomes than traditional methods. As we navigate this transformation, society must balance economic progress with human welfare. The integration of AI into various industries continues to accelerate at an unprecedented rate. Ultimately, proactive measures taken today will determine our collective prosperity.",
    "choices": [
      "①how society adapts",
      "②a future where automation becomes",
      "③which has affected millions",
      "④to address the socioeconomic",
      "⑤ignoring these issues"
    ],
    "answer": 2,
    "explanation": "정답은 ③번입니다. '③which has affected millions of people worldwide'는 선행사 'job displacement'를 수식하는 관계절로 문법적으로 올바릅니다. ②번의 'receives'는 'workers'(복수)와의 수일치 오류로 'receive'로 수정되어야 합니다.",
    "wrong_explanations": {
      "0": "①번 'how society adapts to'는 명사절로 'reconsider'의 목적어로 완벽하게 기능합니다.",
      "1": "②번 'a future where automation becomes increasingly prevalent'는 'to부정사 + 명사' 구조로 문법적으로 정확합니다.",
      "3": "④번 'to address the socioeconomic challenges'는 '목적'을 나타내는 to부정사로 올바릅니다.",
      "4": "⑤번 'ignoring these issues'는 동명사로 주어 역할을 하며 문법적으로 완벽합니다."
    },
    "_type": "grammar",
    "given_sentence": null
  },
  {
    "type": "어법 판단",
    "passage": "Environmental degradation poses unprecedented challenges to biodiversity conservation efforts across the globe. Scientists emphasize that ①protecting ecosystems requires interdisciplinary collaboration among researchers and policymakers. The deforestation rate, ②which accelerates each year, threatens countless species with extinction. Conservation organizations working to preserve endangered habitats has implemented numerous initiatives to combat habitat loss. Agricultural expansion and urbanization are among the primary factors ③contributing to ecosystem destruction. Governments should allocate more resources ④funding research into sustainable agricultural practices. The recovery of damaged ecosystems demonstrates that ⑤restoration is possible when adequate investment and commitment are provided. Marine ecosystems, in particular, face unprecedented pressure from overfishing and pollution. Data collected over the past decade shows alarming trends in species population decline. Implementing international agreements on environmental protection appears to be crucial for long-term sustainability. Communities living near natural reserves play a vital role in conservation efforts. Their participation in monitoring programs significantly enhances the effectiveness of protection strategies. Ultimately, addressing environmental challenges demands collective action and sustained commitment from all stakeholders.",
    "choices": [
      "①protecting ecosystems requires",
      "②which accelerates each year",
      "③contributing to ecosystem",
      "④funding research into",
      "⑤restoration is possible"
    ],
    "answer": 3,
    "explanation": "정답은 ④번입니다. '④funding research into'에서 'funding'은 'allocate resources'의 목적어로 동명사가 필요하므로 'for funding' 또는 'to fund'로 수정되어야 합니다. 현재 형태는 문법적으로 부정확합니다.",
    "wrong_explanations": {
      "0": "①번 'protecting ecosystems requires'는 동명사가 주어로 기능하며 단수 동사 'requires'와 수일치가 정확합니다.",
      "1": "②번 'which accelerates each year'는 'deforestation rate'를 수식하는 관계절로 완벽합니다.",
      "2": "③번 'contributing to ecosystem destruction'은 현재분사로 'factors'를 수식하는 분사구로 올바릅니다.",
      "4": "⑤번 'restoration is possible when'은 주어 + 동사 구조로 문법적으로 정확합니다."
    },
    "_type": "grammar",
    "given_sentence": null
  },
  {
    "type": "어휘 적절성",
    "passage": "The proliferation of artificial intelligence has ①transformed modern society in unprecedented ways. Machine learning algorithms now ②pervade every sector, from healthcare to finance, enabling organizations to process vast amounts of data efficiently. However, this rapid advancement raises critical concerns about data privacy and algorithmic bias. Researchers have begun to ③scrutinize the ethical implications of AI deployment, arguing that transparency is essential for building public trust. Some experts contend that AI systems can ④amplify existing social inequalities if not carefully designed and monitored. Furthermore, the lack of standardized regulations has created a vacuum where companies operate with minimal oversight. Educational institutions are responding by ⑤restricting curricula to include AI ethics and responsible innovation. As we navigate this transformative era, stakeholders must collaborate to establish comprehensive frameworks that balance technological progress with societal welfare. The challenge lies not in rejecting AI, but in harnessing its potential while mitigating risks. International cooperation will be crucial in developing global standards that protect citizens across borders.",
    "choices": [
      "①transformed",
      "②pervade",
      "③scrutinize",
      "④amplify",
      "⑤restricting"
    ],
    "answer": 4,
    "explanation": "⑤ 'restricting(제한하다)'은 문맥에 맞지 않습니다. 문장의 의미는 '교육 기관이 AI 윤리와 책임 있는 혁신을 포함하도록 교육과정을 확대하고 있다'는 뜻이므로 'expanding' 또는 'enriching'이 적절합니다. 'restricting'은 반의어이므로 의미가 정반대가 됩니다.",
    "wrong_explanations": {
      "0": "①transformed는 '변형시키다'라는 의미로 'unprecedented ways'와 함께 사용되어 문맥상 완벽히 적절합니다.",
      "1": "②pervade는 '~에 퍼지다'라는 의미로 AI가 모든 분야에 광범위하게 존재한다는 의미를 정확히 전달합니다.",
      "2": "③scrutinize는 '면밀히 검토하다'라는 학술 어휘로 ethical implications을 살펴본다는 의미에서 적절합니다.",
      "3": "④amplify는 '증대시키다'라는 의미로 social inequalities가 커질 수 있다는 의미에 부합합니다."
    },
    "_type": "vocab",
    "given_sentence": null
  },
  {
    "type": "어휘 적절성",
    "passage": "Climate change represents one of the most pressing challenges of our time, with far-reaching consequences for global ecosystems. Scientific evidence increasingly ①corroborates the theory that human activities are the primary driver of rising temperatures. The burning of fossil fuels ②emits vast quantities of greenhouse gases into the atmosphere, trapping heat and causing planetary warming. Policymakers must ③mitigate these effects through strategic investments in renewable energy and sustainable infrastructure. Unfortunately, political divisions often ④retard progress on climate legislation, delaying necessary action at critical moments. Environmental organizations have begun to ⑤diverge their strategies to include both advocacy and community engagement initiatives. Coastal regions face particularly acute threats from rising sea levels, which could ⑥displace millions of inhabitants. International agreements like the Paris Accord represent important steps toward global coordination. However, individual nations must strengthen their commitments and increase funding for green technologies. The transition to a sustainable economy will require unprecedented cooperation between governments, businesses, and citizens worldwide.",
    "choices": [
      "①corroborates",
      "②emits",
      "③mitigate",
      "④retard",
      "⑤diverge"
    ],
    "answer": 4,
    "explanation": "⑤ 'diverge(갈라지다, 다양해지다)'는 문맥에 맞지 않습니다. 문장의 의미는 '환경 단체들이 옹호 활동과 지역 사회 참여 이니셔티브를 포함하도록 전략을 확장하고 있다'는 뜻이므로 'diversify'가 적절합니다. 'diverge'는 '방향이 갈라진다'는 의미로 통일된 전략의 다양화라는 의미와 맞지 않습니다.",
    "wrong_explanations": {
      "0": "①corroborates는 '입증하다, 확인하다'라는 학술 어휘로 scientific evidence가 theory를 뒷받침한다는 의미에 정확합니다.",
      "1": "②emits는 '배출하다'라는 의미로 greenhouse gases가 atmosphere로 나간다는 의미를 명확히 전달합니다.",
      "2": "③mitigate는 '완화하다'라는 학술 어휘로 climate effects를 줄인다는 의미에 적절합니다.",
      "3": "④retard는 '지연시키다'라는 의미로 political divisions가 climate legislation의 진전을 막는다는 뜻으로 정확합니다."
    },
    "_type": "vocab",
    "given_sentence": null
  },
  {
    "type": "어휘 적절성",
    "passage": "The development of neuroscience has ①illuminated our understanding of brain function and human behavior in remarkable ways. Recent studies ②substantiate the connection between neuroplasticity and learning capacity across different age groups. Researchers have discovered that the brain possesses an extraordinary ability to ③reorganize neural pathways in response to experience and training. This phenomenon ④diminishes the long-held belief that cognitive abilities are entirely fixed after childhood. Innovative therapeutic approaches now ⑤consolidate findings from neuroscience and psychology to treat mental health disorders more effectively. Brain imaging technologies have enabled scientists to ⑥visualize neural activity in unprecedented detail. Neurochemistry has revealed how ⑦fluctuations in neurotransmitter levels influence mood and behavior. Understanding these mechanisms has profound implications for treating depression, anxiety, and neurodegenerative diseases. Educational institutions are integrating neuroscience knowledge into their curricula to prepare students for careers in this growing field. The interdisciplinary nature of modern neuroscience demonstrates how collaboration between different fields can accelerate scientific progress.",
    "choices": [
      "①illuminated",
      "②substantiate",
      "③reorganize",
      "④diminishes",
      "⑤consolidate"
    ],
    "answer": 3,
    "explanation": "④ 'diminishes(감소시키다)'는 문맥에 맞지 않습니다. 문장의 의미는 '이 현상이 인지 능력이 어린 시절 이후 완전히 고정되어 있다는 오래된 믿음을 반박한다'는 뜻이므로 'challenges' 또는 'dispels'가 적절합니다. 'diminishes'는 '크기나 중요도를 줄인다'는 의미로 신념을 반박한다는 의미와 맞지 않습니다.",
    "wrong_explanations": {
      "0": "①illuminated는 '밝혀내다'라는 비유적 표현으로 neuroscience가 brain function의 이해를 깊게 한다는 의미에 적절합니다.",
      "1": "②substantiate는 '입증하다'라는 학술 어휘로 studies가 neuroplasticity와 learning capacity의 연결을 증명한다는 뜻으로 정확합니다.",
      "2": "③reorganize는 '재구성하다'라는 의미로 neural pathways가 재배치된다는 개념을 명확히 전달합니다.",
      "4": "⑤consolidate는 '통합하다'라는 학술 어휘로 neuroscience와 psychology의 발견을 합치는 의미로 적절합니다."
    },
    "_type": "vocab",
    "given_sentence": null
  },
  {
    "type": "어휘 적절성",
    "passage": "Economic inequality has become increasingly ①pronounced in developed nations over the past two decades. Research demonstrates that wealth concentration ②accelerates when tax policies favor capital gains over wages. Labor market dynamics have ③deteriorated for workers without advanced education, as automation and globalization reshape employment patterns. Policymakers propose various interventions to ④ameliorate the situation, including progressive taxation and enhanced social mobility programs. Critics argue that some reforms may ⑤suppress economic growth and innovation capacity. However, evidence from Nordic countries ⑥demonstrates that moderate redistribution policies need not ⑦impede prosperity. The gig economy has ⑧fragmented traditional employment relationships, creating new challenges for worker protection and benefits provision. Economists increasingly recognize that extreme inequality can ⑨undermine social cohesion and macroeconomic stability. Educational access remains a critical determinant of economic outcomes, yet funding disparities persist across regions. Addressing these systemic issues requires comprehensive approaches that balance equity with efficiency.",
    "choices": [
      "①pronounced",
      "②accelerates",
      "③deteriorated",
      "④ameliorate",
      "⑤suppress"
    ],
    "answer": 4,
    "explanation": "⑤ 'suppress(억압하다, 억제하다)'는 문맥에 맞지 않습니다. 문장의 의미는 '일부 개혁이 경제 성장과 혁신 능력을 해칠 수 있다'는 우려를 나타내므로 'undermine' 또는 'impair'가 적절합니다. 'suppress'는 '의도적으로 억누르다'는 의미로 부정적인 영향을 미칠 수 있다는 의미와 다릅니다.",
    "wrong_explanations": {
      "0": "①pronounced는 '현저한'이라는 의미로 economic inequality가 명백해졌다는 뜻으로 정확합니다.",
      "1": "②accelerates는 '가속화되다'라는 의미로 wealth concentration이 빨라진다는 개념을 정확히 표현합니다.",
      "2": "③deteriorated는 '악화되다'라는 의미로 labor market이 나빠졌다는 의미에 적절합니다.",
      "3": "④ameliorate는 '개선하다'라는 학술 어휘로 정책이 상황을 나아지게 한다는 의미로 정확합니다."
    },
    "_type": "vocab",
    "given_sentence": null
  },
  {
    "type": "어휘 적절성",
    "passage": "The advent of digital technology has ①revolutionized communication patterns and social interaction worldwide. Social media platforms ②facilitate unprecedented connection between individuals across geographical boundaries. However, research increasingly ③documents the psychological costs of excessive digital engagement, including anxiety and social isolation. Mental health professionals have ④noted concerning correlations between screen time and depressive symptoms in adolescents. Simultaneously, technology companies continue to ⑤maximize user engagement through algorithmic recommendation systems. These systems often ⑥amplify polarizing content, creating echo chambers that reinforce existing beliefs. Education experts argue that digital literacy must ⑦expand to include critical evaluation of online information sources. Governments worldwide are attempting to ⑧formulate regulations that balance innovation with user protection. The challenge involves protecting vulnerable populations without ⑨hindering technological progress entirely. As society navigates this digital transformation, stakeholders must ⑩collaborate to ensure technology serves human flourishing rather than undermining it.",
    "choices": [
      "①revolutionized",
      "②facilitate",
      "③documents",
      "④noted",
      "⑤maximize"
    ],
    "answer": 4,
    "explanation": "⑤ 'maximize(최대화하다)'는 문맥에 맞지 않습니다. 문장의 의미는 '기술 회사들이 알고리즘 추천 시스템을 통해 사용자 참여를 계속 추구한다'는 뜻이므로 'increase' 또는 'enhance'가 더 적절합니다. 'maximize'는 '최대한 늘리다'라는 의미로 도덕적 문제를 내포하며, 문맥에서 비판적 톤의 의도와 완벽히 부합하지 않습니다.",
    "wrong_explanations": {
      "0": "①revolutionized는 '혁명을 일으키다'라는 의미로 digital technology가 communication을 근본적으로 변화시켰다는 뜻으로 정확합니다.",
      "1": "②facilitate는 '용이하게 하다'라는 의미로 social media가 연결을 가능하게 한다는 개념에 적절합니다.",
      "2": "③documents는 '문서화하다'라는 의미로 research가 심리적 비용을 기록하고 입증한다는 의미로 정확합니다.",
      "3": "④noted는 '주목하다'라는 의미로 mental health professionals가 correlation을 발견했다는 뜻으로 적절합니다."
    },
    "_type": "vocab",
    "given_sentence": null
  },
  {
    "type": "어휘 적절성",
    "passage": "The rapid advancement of artificial intelligence has fundamentally transformed how we approach complex problems across various industries. Machine learning algorithms now ① permeate nearly every sector of modern economy, from healthcare diagnostics to financial forecasting. Researchers have discovered that these computational systems possess an remarkable ability to ② synthesize vast amounts of data in ways that human analysts simply cannot match. However, this technological progress has simultaneously raised serious concerns about employment displacement and ethical implications. Many economists argue that society must ③ mitigate the negative consequences through comprehensive retraining programs and social safety nets. The challenge lies in balancing innovation with responsibility. Some experts contend that we should ④ retard technological development altogether, while others believe strategic regulation offers a more pragmatic solution. Educational institutions are beginning to ⑤ diminish their curricula to include AI literacy and data science fundamentals. Despite the ongoing debates, one thing remains certain: artificial intelligence will continue to shape our future in profound and unpredictable ways. Policymakers must therefore engage in thoughtful dialogue with technologists, ethicists, and the public to ensure that technological benefits are distributed equitably across society.",
    "choices": [
      "① permeate",
      "② synthesize",
      "③ mitigate",
      "④ retard",
      "⑤ diminish"
    ],
    "answer": 3,
    "explanation": "④번 'retard'(지연시키다, 방해하다)는 맥락상 부적절합니다. 문장에서 '기술 발전을 완전히 중단해야 한다'는 의미이므로 'halt', 'stop', 'cease' 등이 적절합니다. 'retard'는 '느리게 하다'라는 의미로 약한 표현입니다.",
    "wrong_explanations": {
      "0": "permeate(스며들다, 퍼지다)는 AI가 경제 전반에 걸쳐 광범위하게 영향을 미친다는 맥락에서 매우 적절합니다.",
      "1": "synthesize(종합하다, 통합하다)는 알고리즘이 대량의 데이터를 처리한다는 의미에서 정확한 표현입니다.",
      "2": "mitigate(완화하다, 경감하다)는 부정적 결과를 줄인다는 맥락에서 학술적으로 적절합니다.",
      "4": "diminish(줄이다, 감소시키다)는 교육과정에 AI 문해력을 '포함하도록 수정하다'는 의미에서는 부적절하지만, 문맥상 'expand'나 'augment'가 필요합니다."
    },
    "_type": "vocab",
    "given_sentence": null
  },
  {
    "type": "어휘 적절성",
    "passage": "Climate change represents one of the most pressing challenges of our time, necessitating immediate and coordinated global action. Rising temperatures have begun to ① exacerbate extreme weather patterns, causing unprecedented floods, droughts, and hurricanes in vulnerable regions. Scientists emphasize that carbon emissions must be substantially ② curtailed if we hope to prevent catastrophic environmental collapse. The transition to renewable energy sources remains technically feasible, yet political will and economic interests continue to ③ hinder this crucial transformation. Many developing nations argue that wealthy countries should bear greater responsibility for reducing their carbon footprint, a position that seems entirely justified from an ethical standpoint. International agreements like the Paris Climate Accord attempt to ④ accelerate the shift toward sustainable practices on a global scale. However, implementation remains inconsistent, with some nations actually ⑤ augmenting their fossil fuel investments despite international commitments. Young activists have mobilized across continents, demanding that world leaders treat climate action with the urgency it deserves. The scientific evidence is overwhelming and irrefutable; without decisive intervention, future generations will face irreversible environmental degradation and social instability.",
    "choices": [
      "① exacerbate",
      "② curtailed",
      "③ hinder",
      "④ accelerate",
      "⑤ augmenting"
    ],
    "answer": 4,
    "explanation": "⑤번 'augmenting'(증가시키다, 확대하다)는 문맥상 부적절합니다. 국가들이 국제 약속에도 불구하고 화석 연료 투자를 '늘리고 있다'는 의미이므로 이는 긍정적 표현이지만, 기후변화 대응과 모순됩니다. 'increasing', 'expanding' 대신 'reducing', 'cutting'이 맥락에 맞습니다.",
    "wrong_explanations": {
      "0": "exacerbate(악화시키다)는 상승하는 온도가 극단적 날씨를 더 심하게 만든다는 의미에서 완벽하게 적절합니다.",
      "1": "curtailed(제한되다, 줄어들다)는 탄소 배출을 줄여야 한다는 맥락에서 정확한 학술 표현입니다.",
      "2": "hinder(방해하다, 저해하다)는 정치적 의지가 재생 에너지 전환을 방해한다는 의미에서 적절합니다.",
      "3": "accelerate(가속하다, 촉진하다)는 국제 협약이 지속 가능한 실천을 촉진하려는 목표와 맞습니다."
    },
    "_type": "vocab",
    "given_sentence": null
  },
  {
    "type": "요지/주제",
    "passage": "Throughout human history, societies have relied on various mechanisms to transmit knowledge across generations. Traditional oral cultures employed storytelling and ritual performances to preserve collective memory and cultural values. With the invention of writing systems, knowledge became externalized and more stable, allowing for greater accuracy in documentation. However, the advent of digital technology has fundamentally transformed how we store and access information. Digital platforms enable instantaneous global communication and democratize access to knowledge that was previously confined to privileged institutions. Yet this proliferation of information sources has created new challenges, including the difficulty of verifying information reliability and distinguishing authoritative sources from unreliable ones. Modern societies must develop critical literacy skills to navigate this complex information ecosystem. Educational systems are increasingly emphasizing media literacy and digital competence as essential competencies for contemporary learners. The transition from oral to written to digital knowledge transmission reflects humanity's ongoing struggle to balance accessibility with credibility.",
    "choices": [
      "①지식 전달 방식의 진화와 각 단계별 특징",
      "②디지털 기술이 전통 문화 보존에 미치는 부정적 영향",
      "③글쓰기 체계가 구술 문화를 완전히 대체한 이유",
      "④정보 신뢰성 검증이 불가능한 현대 사회의 문제",
      "⑤전 지구적 소통을 위한 표준화된 언어 개발의 필요성"
    ],
    "answer": 0,
    "explanation": "지문은 인류 역사에서 구술 → 문자 → 디지털로의 지식 전달 방식 변화를 설명하고, 각 단계의 특징(구술: 집단 기억 보존, 문자: 안정성과 정확성, 디지털: 접근성과 검증 문제)을 다루고 있습니다. 정답은 이 진화 과정과 각 단계의 특징을 모두 포함합니다.",
    "wrong_explanations": {
      "①": "지문은 디지털 기술의 부정적 영향만을 강조하지 않으며, 기술 발전의 장점도 명시하고 있습니다.",
      "②": "지문은 글쓰기가 구술 문화를 '완전히' 대체했다는 주장을 하지 않으며, 지식 전달 방식의 변화를 설명할 뿐입니다.",
      "③": "지문의 핵심 내용이 아니며, 현재 교육 시스템의 대응 방안을 다루고 있습니다.",
      "④": "지문은 정보 신뢰성이 중요한 과제임을 언급하지만, 이것이 주제가 아닙니다."
    },
    "_type": "main_idea",
    "given_sentence": null
  },
  {
    "type": "요지/주제",
    "passage": "The concept of emotional intelligence has gained considerable prominence in contemporary psychology and organizational management. Defined as the ability to recognize, understand, and manage emotions in oneself and others, emotional intelligence encompasses several key competencies including self-awareness, self-regulation, motivation, empathy, and social skills. Research indicates that individuals with high emotional intelligence tend to experience greater success in interpersonal relationships and professional environments. Unlike traditional intelligence, which remains relatively stable throughout adulthood, emotional intelligence can be substantially improved through deliberate practice and training. Organizations increasingly incorporate emotional intelligence development into their leadership programs and employee training initiatives, recognizing its correlation with enhanced workplace productivity and reduced conflict. Studies demonstrate that leaders with strong emotional intelligence create more positive organizational cultures and foster greater employee engagement. Furthermore, emotional intelligence serves as a significant predictor of psychological well-being and mental health outcomes. The integration of emotional intelligence training into educational curricula represents a paradigm shift toward holistic human development.",
    "choices": [
      "①감정 지능의 정의와 발달 가능성, 조직에서의 중요성",
      "②전통적 지능과 감정 지능의 측정 방법론의 차이점",
      "③감정 지능 훈련이 조직 생산성을 보장하는 방법",
      "④심리학 연구에서 감정 인식 능력의 생물학적 기원",
      "⑤교육 제도 개혁을 통한 감정 지능 평가 기준 표준화"
    ],
    "answer": 0,
    "explanation": "지문은 감정 지능의 정의(인식, 이해, 관리 능력)와 주요 요소들을 소개하고, 성인기에 향상 가능함을 언급하며, 조직 내에서의 중요성과 긍정적 효과를 설명합니다. 정답은 이 세 가지 핵심 내용을 모두 포함합니다.",
    "wrong_explanations": {
      "①": "지문은 측정 방법론의 차이를 다루지 않습니다.",
      "②": "지문은 훈련이 생산성을 '보장'한다고 단정하지 않으며, 상관관계를 제시합니다.",
      "③": "지문의 주요 내용이 아니며, 생물학적 기원은 언급되지 않습니다.",
      "④": "지문의 초점이 아니며, 평가 기준 표준화는 다루어지지 않습니다."
    },
    "_type": "main_idea",
    "given_sentence": null
  },
  {
    "type": "요지/주제",
    "passage": "Biodiversity loss represents one of the most pressing environmental challenges confronting contemporary civilization. Habitat destruction, climate change, pollution, and overexploitation of natural resources have collectively precipitated an unprecedented decline in species populations globally. Scientists warn that we are currently experiencing the sixth mass extinction event in Earth's history, with extinction rates occurring at a velocity far exceeding natural background levels. The loss of biodiversity undermines ecosystem services that are fundamental to human survival, including pollination, water purification, carbon sequestration, and nutrient cycling. Genetic diversity within species is equally crucial, as it provides the raw material for adaptation and evolutionary resilience. Conservation strategies must encompass both protected area establishment and the promotion of sustainable land-use practices. International cooperation and policy frameworks are indispensable for addressing transboundary conservation challenges. Indigenous knowledge systems have proven invaluable in ecosystem management and species preservation. The preservation of biodiversity is not merely an environmental imperative but an economic and social necessity for ensuring long-term human prosperity.",
    "choices": [
      "①생물 다양성 감소 현상, 원인, 영향 및 보전 전략",
      "②멸종 속도 측정 기술의 발전과 과학적 방법론 개선",
      "③기후 변화가 야생동물 서식지에 미치는 구체적 영향",
      "④생물 다양성 보전을 위한 국제 협력의 실패 사례",
      "⑤유전자 다양성이 종(種)의 진화에 미치는 직접적 메커니즘"
    ],
    "answer": 0,
    "explanation": "지문은 생물 다양성 감소의 현상(6번째 대멸종), 원인들(서식지 파괴, 기후변화 등), 영향(생태계 서비스 감소), 그리고 보전 전략(보호구역 설립, 지속 가능한 토지 이용, 국제 협력)을 종합적으로 다룹니다.",
    "wrong_explanations": {
      "①": "측정 기술의 발전은 부수적이며 주요 내용이 아닙니다.",
      "②": "기후 변화는 원인 중 하나일 뿐 핵심 주제가 아닙니다.",
      "③": "지문은 보전 실패 사례를 다루지 않으며, 필요성을 강조합니다.",
      "④": "지문의 초점은 보전 전략과 필요성에 있습니다."
    },
    "_type": "main_idea",
    "given_sentence": null
  },
  {
    "type": "요지/주제",
    "passage": "The phenomenon of urbanization has fundamentally reshaped demographic patterns and socioeconomic structures across the globe. As populations concentrate in metropolitan areas, cities have become centers of economic activity, cultural innovation, and technological advancement. However, rapid urban expansion frequently outpaces infrastructure development, resulting in congestion, inadequate housing, and environmental degradation. The proliferation of megacities has created unprecedented challenges regarding resource management, waste disposal, and pollution control. Urban poverty has become increasingly concentrated in informal settlements where residents lack access to basic services and employment opportunities. Simultaneously, cities generate disproportionate wealth and provide educational opportunities that rural regions cannot offer. Sustainable urbanism emphasizes mixed-use development, green infrastructure, and transit-oriented design to mitigate environmental impacts while enhancing livability. Innovative urban planning must balance economic development with social equity and environmental stewardship. The future viability of human civilization increasingly depends on our capacity to create sustainable, inclusive, and resilient urban environments.",
    "choices": [
      "①도시화의 긍정적 측면과 부정적 문제점 및 해결 방안",
      "②개발도상국의 도시 빈곤층 증가 원인의 역사적 분석",
      "③선진국 대도시의 환경오염이 심각한 이유",
      "④지속 가능한 도시 계획이 경제 성장을 방해하는 방식",
      "⑤도시 거주자의 교육 수준이 시골 지역보다 높은 이유"
    ],
    "answer": 0,
    "explanation": "지문은 도시화의 긍정적 효과(경제 활동, 혁신, 기회), 부정적 문제점(기반시설 부족, 오염, 도시 빈곤), 그리고 해결 방안(지속 가능한 도시계획, 혼합 용도 개발, 녹색 기반시설)을 포괄적으로 제시합니다.",
    "wrong_explanations": {
      "①": "개발도상국 빈곤층만을 다루지 않으며, 역사적 분석도 없습니다.",
      "②": "모든 선진국이 심각한 오염을 겪는 것은 아니며 일반화된 주장입니다.",
      "③": "지문은 지속 가능한 도시계획이 경제 발전과 양립 가능함을 시사합니다.",
      "④": "교육 기회의 차이가 주제가 아니며, 부수적 내용입니다."
    },
    "_type": "main_idea",
    "given_sentence": null
  },
  {
    "type": "요지/주제",
    "passage": "Neuroplasticity, the brain's remarkable capacity to reorganize itself by forming new neural connections throughout life, has revolutionized our understanding of cognitive development and learning. Previously, neuroscientists believed that the adult brain was relatively immutable, with its structure and function essentially fixed after early childhood. Compelling empirical evidence has decisively refuted this antiquated paradigm, demonstrating that neural pathways can be substantially modified through experience, learning, and conscious practice. Rehabilitation therapies for stroke patients and individuals with traumatic brain injuries capitalize on neuroplasticity principles, enabling remarkable recovery of lost cognitive and motor functions. Environmental enrichment, physical exercise, and cognitive engagement have been shown to facilitate neurogenesis and enhance synaptic density. The implications for educational methodology are profound, suggesting that learners of all ages possess significantly greater potential for intellectual development than traditional developmental psychology suggested. However, neuroplasticity is not unlimited; constraints exist regarding the extent and pace of neural reorganization. Understanding neuroplasticity underscores the importance of lifelong learning and active engagement in cognitive stimulation.",
    "choices": [
      "①신경가소성의 개념, 증거, 응용 및 학습에 대한 함의",
      "②뇌 손상 환자의 회복 속도가 인간마다 다른 이유",
      "③어린 시절 뇌 발달 단계의 생물학적 특징과 메커니즘",
      "④신경가소성이 모든 종류의 뇌 손상을 치료하는 방법",
      "⑤운동이 신경생성(neurogenesis)을 촉진하는 물리적 메커니즘"
    ],
    "answer": 0,
    "explanation": "지문은 신경가소성의 정의, 과거의 오래된 이론과 현재의 경험적 증거, 재활 치료에서의 응용, 그리고 교육과 평생학습에 대한 함의를 종합적으로 다룹니다.",
    "wrong_explanations": {
      "①": "회복 속도의 개인차 원인은 주요 내용이 아니며, 신경가소성의 한계만 언급됩니다.",
      "②": "어린 시절 발달은 지문의 초점이 아니며, 성인기 가소성을 강조합니다.",
      "③": "지문은 신경가소성이 모든 손상을 치유한다고 주장하지 않으며, 한계를 인정합니다.",
      "④": "운동의 구체적 메커니즘은 다루어지지 않으며, 효과만 제시됩니다."
    },
    "_type": "main_idea",
    "given_sentence": null
  },
  {
    "type": "글의 순서",
    "passage": "The concept of neuroplasticity has revolutionized our understanding of the brain's capacity for change. Previously, scientists believed that the brain's structure was fixed after childhood. However, recent research demonstrates that the brain can reorganize itself throughout life.\n\n(A) This discovery has profound implications for treating neurological disorders and learning disabilities. Patients recovering from stroke can develop new neural pathways to compensate for damaged areas. Such adaptive mechanisms allow individuals to regain lost functions through intensive rehabilitation and practice.\n\n(B) Furthermore, neuroplasticity explains how musicians and athletes achieve extraordinary skills. Their brains physically change in response to repeated, focused training. The auditory cortex of musicians, for instance, exhibits measurable enlargement compared to non-musicians.\n\n(C) Therefore, understanding neuroplasticity transforms our approach to education and therapy. Rather than accepting limitations as permanent, we can now intervene strategically. This paradigm shift encourages lifelong learning and optimistic perspectives on human potential.",
    "choices": [
      "① (A)-(B)-(C)",
      "② (A)-(C)-(B)",
      "③ (B)-(A)-(C)",
      "④ (B)-(C)-(A)",
      "⑤ (C)-(A)-(B)"
    ],
    "answer": 0,
    "explanation": "도입부에서 신경가소성의 개념을 소개한 후, (A) '이러한 발견'으로 뇌의 재조직화 능력의 실제 응용 사례를 제시. (B) 'Furthermore'로 추가적 증거(음악가, 운동선수)를 제시. (C) 'Therefore'로 결론적으로 이해의 중요성을 강조. 지시어와 접속사의 논리적 흐름이 (A)-(B)-(C) 순서를 명시적으로 나타냄.",
    "wrong_explanations": {
      "1": "(A)-(C)-(B)는 'Furthermore'가 갑자기 나타나 흐름이 단절됨",
      "2": "(B)-(A)-(C)는 구체적 사례가 일반적 설명보다 먼저 나와 부자연스러움",
      "3": "(B)-(C)-(A)는 'This discovery'의 지시어가 선행 문장과 맞지 않음",
      "4": "(C)-(A)-(B)는 결론이 먼저 나와 논리적 구조가 파괴됨"
    },
    "_type": "order",
    "given_sentence": null
  },
  {
    "type": "글의 순서",
    "passage": "Artificial intelligence systems are increasingly used to detect patterns in medical imaging. Diagnostic accuracy depends on the quality of training data provided to these algorithms. However, a critical challenge has emerged regarding bias in machine learning models.\n\n(A) Such bias can arise when training datasets lack diversity or contain historical inequities. For example, if a model learns from predominantly white patient samples, it may perform poorly for other ethnic groups. This phenomenon has been documented in several cardiovascular disease detection systems.\n\n(B) Therefore, researchers and ethicists are advocating for rigorous data curation practices. Healthcare institutions must ensure their datasets represent diverse populations comprehensively. Only through such comprehensive representation can we develop equitable diagnostic tools.\n\n(C) Moreover, transparency in algorithm development is essential for accountability. Medical professionals need to understand the limitations and potential biases of AI systems they employ. These safeguards protect patients and build trust in technological advancement.",
    "choices": [
      "① (A)-(B)-(C)",
      "② (A)-(C)-(B)",
      "③ (B)-(A)-(C)",
      "④ (C)-(B)-(A)",
      "⑤ (C)-(A)-(B)"
    ],
    "answer": 0,
    "explanation": "도입부에서 AI의 편향 문제 제시. (A) 'Such bias'로 편향의 구체적 원인과 예시 설명. (B) 'Therefore'로 해결책(데이터 큐레이션) 제시. (C) 'Moreover'로 추가적 필요조건(투명성) 강조. 문제 제시→원인 설명→해결책→추가 조건의 논리적 구조.",
    "wrong_explanations": {
      "1": "(A)-(C)-(B)는 'Moreover'와 'Therefore'의 논리적 순서가 역순",
      "2": "(B)-(A)-(C)는 해결책이 문제보다 먼저 제시되어 부자연스러움",
      "3": "(C)-(B)-(A)는 원인 설명이 마지막에 나와 구조가 뒤바뀜",
      "4": "(C)-(A)-(B)는 추가 조건이 먼저 나와 논리 흐름 단절"
    },
    "_type": "order",
    "given_sentence": null
  },
  {
    "type": "글의 순서",
    "passage": "Climate change is altering precipitation patterns across the globe with significant ecological consequences. Traditional agricultural practices developed over centuries may no longer be viable in many regions. Consequently, farmers must adapt their cultivation strategies to survive economically.\n\n(A) This adaptation involves selecting drought-resistant crop varieties and implementing water conservation techniques. Indigenous farming communities possess invaluable knowledge accumulated through generations of environmental observation. Their traditional methods often align remarkably well with contemporary sustainability principles.\n\n(B) However, most modern farmers lack access to such traditional wisdom or resources. Agricultural extension services in developing nations remain inadequately funded and staffed. These systemic barriers prevent effective dissemination of adaptive technologies.\n\n(C) Therefore, international collaboration is imperative for agricultural resilience. Developed nations should fund research programs that integrate indigenous knowledge with modern agronomy. Such partnership models ensure that farming communities gain access to requisite technologies for survival.",
    "choices": [
      "① (A)-(B)-(C)",
      "② (A)-(C)-(B)",
      "③ (B)-(A)-(C)",
      "④ (B)-(C)-(A)",
      "⑤ (C)-(A)-(B)"
    ],
    "answer": 0,
    "explanation": "도입부에서 농업 적응의 필요성 제시. (A) 적응 방법과 전통 지식의 가치 설명. (B) 'However'로 현실의 장애물 제시. (C) 'Therefore'로 국제 협력의 필요성 결론. 긍정→현실 문제→해결책의 논리적 진행.",
    "wrong_explanations": {
      "1": "(A)-(C)-(B)는 'However'가 중간에 나와 흐름 단절",
      "2": "(B)-(A)-(C)는 문제가 해결책보다 먼저 나와 부자연스러움",
      "3": "(B)-(C)-(A)는 'This adaptation'의 지시어가 맞지 않음",
      "4": "(C)-(A)-(B)는 결론이 먼저 나와 논리 구조 파괴"
    },
    "_type": "order",
    "given_sentence": null
  },
  {
    "type": "글의 순서",
    "passage": "The phenomenon of urban heat islands refers to metropolitan areas experiencing significantly higher temperatures than surrounding rural regions. This effect results from extensive concrete infrastructure and reduced vegetation. Scientists have documented temperature differences exceeding 5 degrees Celsius between cities and nearby countryside.\n\n(A) These elevated temperatures have serious health implications, particularly for vulnerable populations. Heat-related illnesses increase dramatically during summer months in urban centers. Additionally, the phenomenon intensifies energy consumption as residents increase air conditioning usage.\n\n(B) Therefore, city planners are implementing mitigation strategies including green roofing and urban forestry programs. Reflective building materials can reduce surface temperatures substantially. Such interventions have demonstrated measurable success in pilot cities worldwide.\n\n(C) However, comprehensive solutions require long-term commitment and substantial financial investment. Individual projects provide only temporary relief without systemic change. Sustainable urban development demands coordinated effort across multiple sectors and decades of implementation.",
    "choices": [
      "① (A)-(B)-(C)",
      "② (B)-(A)-(C)",
      "③ (B)-(C)-(A)",
      "④ (C)-(A)-(B)",
      "⑤ (C)-(B)-(A)"
    ],
    "answer": 0,
    "explanation": "도입부에서 열섬 현상 정의. (A) 'These elevated temperatures'로 부정적 결과(건강, 에너지) 설명. (B) 'Therefore'로 해결책 제시. (C) 'However'로 한계와 장기적 필요성 강조. 문제→결과→대책→현실적 한계의 구조.",
    "wrong_explanations": {
      "1": "(B)-(A)-(C)는 해결책이 문제 결과보다 먼저 나와 논리 역순",
      "2": "(B)-(C)-(A)는 'These elevated temperatures'의 지시어 선행사 없음",
      "3": "(C)-(A)-(B)는 'However'가 처음에 나와 대조 대상 부재",
      "4": "(C)-(B)-(A)는 한계를 먼저 제시해 구조 파괴"
    },
    "_type": "order",
    "given_sentence": null
  },
  {
    "type": "글의 순서",
    "passage": "Circadian rhythms are biological processes that follow approximately 24-hour cycles, regulating sleep and wakefulness in most organisms. These internal clocks are synchronized with environmental light cues. Modern artificial lighting has fundamentally disrupted these natural rhythms for millions of people.\n\n(A) This disruption manifests as sleep disorders, cognitive impairment, and increased metabolic dysfunction. Night shift workers consistently demonstrate higher incidence rates of cardiovascular disease and cancer. The suppression of melatonin production due to artificial light exposure represents a significant health hazard.\n\n(B) Therefore, occupational health researchers advocate for workplace policies supporting circadian alignment. Gradually adjusting shift schedules and providing light therapy during night hours can mitigate adverse effects. Such evidence-based interventions have improved worker health and productivity simultaneously.\n\n(C) However, implementing comprehensive circadian-aware workplace policies requires systemic changes in industrial practices. Economic pressures often prioritize production over employee wellbeing. Many employers remain reluctant to adopt measures perceived as operationally inconvenient.",
    "choices": [
      "① (A)-(B)-(C)",
      "② (A)-(C)-(B)",
      "③ (B)-(A)-(C)",
      "④ (C)-(B)-(A)",
      "⑤ (C)-(A)-(B)"
    ],
    "answer": 0,
    "explanation": "도입부에서 인공 조명의 일주기 리듬 방해 제시. (A) 'This disruption'로 구체적 부정적 결과 설명. (B) 'Therefore'로 해결책 제시. (C) 'However'로 실행상 장애물 제시. 문제→해로움→대책→현실적 저항의 구조.",
    "wrong_explanations": {
      "1": "(A)-(C)-(B)는 'Therefore'와 'However'의 논리 순서 역순",
      "2": "(B)-(A)-(C)는 대책이 해로움보다 먼저 나와 부자연스러움",
      "3": "(B)-(C)-(A)는 'This disruption'의 지시어 선행사 없음",
      "4": "(C)-(A)-(B)는 저항이 먼저 나와 설득력 없음"
    },
    "_type": "order",
    "given_sentence": null
  }
];
