// Prof.AI 3차 감수용 — 48문제
const QUESTION_BANK = [
  {
    "type": "빈칸 추론",
    "passage": "Throughout history, humans have sought to understand the natural world through observation and experimentation. The scientific method emerged as a powerful tool for acquiring knowledge, emphasizing the importance of testing hypotheses through controlled experiments. However, this approach has a significant limitation: it can only investigate phenomena that are ___________ and measurable. Aspects of human experience such as personal values, emotional depth, and spiritual beliefs fall outside the scope of scientific inquiry. This does not mean these dimensions are less important or valid; rather, it suggests that different methods of understanding are needed to explore them fully. Art, philosophy, and literature offer alternative pathways for examining the human condition, providing insights that complement scientific knowledge. The integration of these diverse perspectives creates a more complete picture of reality.",
    "choices": [
      "① observable",
      "② theoretical",
      "③ subjective",
      "④ abstract",
      "⑤ hypothetical"
    ],
    "answer": 0,
    "explanation": "과학적 방법은 제어된 실험을 통해 가설을 검증하는 것을 강조하므로, 과학이 조사할 수 있는 현상은 '관찰 가능한(observable)'이어야 한다. 뒤에 'measurable'과 함께 나오는 표현으로 보아, 과학적 탐구의 대상이 되려면 관찰 가능해야 한다는 의미가 가장 자연스럽다.",
    "wrong_explanations": {
      "②": "이론적(theoretical)이라는 표현은 문맥상 부적절하다. 과학은 이론적 현상뿐만 아니라 실제 관찰 가능한 현상을 다룬다.",
      "③": "주관적(subjective)은 문맥상 맞지 않는다. 오히려 지문은 과학이 주관적 경험을 다룰 수 없다고 지적하고 있다.",
      "④": "추상적(abstract)은 의미가 맞지 않는다. 과학은 구체적이고 관찰 가능한 현상을 다룬다.",
      "⑤": "가설적(hypothetical)은 문맥상 부적절하다. 과학은 가설을 검증하지만, 그 대상은 관찰 가능해야 한다."
    },
    "_type": "blank",
    "given_sentence": null
  },
  {
    "type": "빈칸 추론",
    "passage": "Successful entrepreneurs often share a common characteristic: the ability to ___________ failure and learn from their mistakes. Rather than viewing setbacks as permanent defeats, they see them as valuable learning opportunities. This mindset transforms challenges into catalysts for growth and improvement. Many famous business leaders, including Steve Jobs and Oprah Winfrey, experienced significant failures before achieving tremendous success. They did not allow initial disappointments to discourage them; instead, they analyzed what went wrong and adjusted their strategies accordingly. This resilience and adaptability distinguish successful individuals from those who give up easily. Organizations that cultivate a culture accepting failure as part of the learning process tend to innovate more effectively and develop stronger solutions to complex problems.",
    "choices": [
      "① embrace",
      "② ignore",
      "③ punish",
      "④ hide",
      "⑤ prevent"
    ],
    "answer": 0,
    "explanation": "성공한 기업가들의 특징이 실패를 '수용하고 받아들이는(embrace)' 것이라는 의미이다. 뒤에 '소중한 학습의 기회'라는 표현과 'setbacks'을 'catalyst for growth'로 본다는 점에서 embrace가 가장 적절하다.",
    "wrong_explanations": {
      "②": "무시하다(ignore)는 의미로는 나머지 문맥(배우고, 개선하고)과 모순된다.",
      "③": "처벌하다(punish)는 의미는 문맥상 전혀 맞지 않는다.",
      "④": "숨기다(hide)는 의미는 학습과 발전이라는 주제와 맞지 않는다.",
      "⑤": "예방하다(prevent)는 의미는 실패를 받아들인다는 개념과 맞지 않다."
    },
    "_type": "blank",
    "given_sentence": null
  },
  {
    "type": "빈칙 추론",
    "passage": "The rise of social media has fundamentally changed how people communicate and share information. While these platforms have created unprecedented opportunities for connection and expression, they have also introduced new challenges. One significant concern is the spread of misinformation, which can ___________ public opinion and influence decision-making at both personal and societal levels. False or misleading information spreads rapidly across networks, often faster than factual corrections can reach the same audience. This phenomenon has implications for democracy, public health, and social cohesion. To address this issue, media literacy education has become increasingly important, helping individuals develop critical thinking skills to evaluate information sources and assess credibility. Platforms themselves also bear responsibility for implementing fact-checking mechanisms and reducing the visibility of unverified claims.",
    "choices": [
      "① distort",
      "② clarify",
      "③ analyze",
      "④ strengthen",
      "⑤ document"
    ],
    "answer": 0,
    "explanation": "'거짓된 정보가 공중 의견을 왜곡하고 의사결정에 영향을 미칠 수 있다'는 의미이므로 'distort(왜곡하다)'가 정답이다. misinformation과 misleading information이 공중 의견에 부정적 영향을 미친다는 문맥에서 distort가 가장 적절하다.",
    "wrong_explanations": {
      "②": "명확히 하다(clarify)는 거짓 정보의 영향을 설명하는 문맥과 맞지 않는다.",
      "③": "분석하다(analyze)는 여기서 의미가 맞지 않는다.",
      "④": "강화하다(strengthen)는 misinformation의 부정적 영향을 설명하지 못한다.",
      "⑤": "기록하다(document)는 문맥상 부적절하다."
    },
    "_type": "blank",
    "given_sentence": null
  },
  {
    "type": "빈칙 추론",
    "passage": "Climate change represents one of the most pressing challenges facing humanity today. Rising global temperatures have triggered numerous environmental consequences, from melting polar ice caps to increasingly severe weather patterns. Addressing this crisis requires ___________ action at both individual and governmental levels. While individual efforts such as reducing carbon footprint and supporting sustainable products are important, they alone cannot solve a problem of this magnitude. Governments must implement comprehensive policies that regulate industrial emissions, invest in renewable energy sources, and protect natural ecosystems. International cooperation is equally vital, as climate change is a global phenomenon that transcends national boundaries. Only through coordinated and sustained efforts can we hope to mitigate the worst effects of climate change and secure a livable planet for future generations.",
    "choices": [
      "① coordinated",
      "② temporary",
      "③ voluntary",
      "④ limited",
      "⑤ gradual"
    ],
    "answer": 0,
    "explanation": "문맥에서 개인적 노력만으로는 부족하며, 정부와 국제 협력이 필요하다는 점을 고려할 때, '조정된, 협력적인(coordinated)' 행동이 필요하다는 의미가 가장 적절하다. 마지막 문장의 'coordinated and sustained efforts'에서도 같은 단어가 반복되어 답이 확실하다.",
    "wrong_explanations": {
      "②": "임시적인(temporary)은 지속적인 노력이 필요하다는 점과 맞지 않는다.",
      "③": "자발적인(voluntary)은 정부의 정책이 필요하다는 맥락과 맞지 않는다.",
      "④": "제한된(limited)은 크기와 범위가 커야 한다는 의미와 모순된다.",
      "⑤": "점진적인(gradual)은 긴급한 행동이 필요하다는 뉘앙스와 맞지 않는다."
    },
    "_type": "blank",
    "given_sentence": null
  },
  {
    "type": "빈칙 추론",
    "passage": "The concept of emotional intelligence has gained recognition in recent decades as researchers have demonstrated its significance in personal and professional success. Emotional intelligence refers to the ability to recognize, understand, and manage one's own emotions, as well as to recognize and respond appropriately to the emotions of others. This capacity to ___________ emotions effectively distinguishes high performers in leadership roles and interpersonal relationships. Individuals with high emotional intelligence tend to communicate more effectively, build stronger relationships, and navigate conflicts more successfully. These skills are not innate; they can be developed and improved through practice and self-reflection. Organizations increasingly recognize the value of emotional intelligence and are incorporating it into training programs and hiring criteria. As workplaces become more collaborative and diverse, the ability to understand and manage emotions becomes an essential component of professional competence.",
    "choices": [
      "① regulate",
      "② suppress",
      "③ ignore",
      "④ express",
      "⑤ avoid"
    ],
    "answer": 0,
    "explanation": "'자신과 타인의 감정을 효과적으로 조절(regulate)하는 능력'이 문맥상 가장 자연스럽다. 감정 지능의 정의(인식하고, 이해하고, 관리하기)와 그 결과(효과적인 소통, 관계 형성)를 연결하는 표현으로 regulate가 적절하다.",
    "wrong_explanations": {
      "②": "억압하다(suppress)는 감정을 관리한다는 의미보다 부정적이며, 효과적인 리더십과 관계 형성과 맞지 않는다.",
      "③": "무시하다(ignore)는 감정 지능의 개념과 완전히 모순된다.",
      "④": "표현하다(express)는 감정을 관리한다는 의미가 아니다.",
      "⑤": "피하다(avoid)는 감정을 다루는 것이 아니라 피한다는 의미로 부적절하다."
    },
    "_type": "blank",
    "given_sentence": null
  },
  {
    "type": "빈칸 추론",
    "passage": "Throughout human history, people have sought to understand the natural world around them. Early civilizations developed various theories to explain natural phenomena, often attributing them to divine forces. However, as societies became more advanced, a shift occurred in how humans approached knowledge. The scientific method emerged as a powerful tool that emphasized observation, experimentation, and logical reasoning. This approach _____________ replaced the reliance on mere speculation and mythology. Scientists began to test their hypotheses rigorously, gathering empirical evidence to support or refute their claims. This transformation fundamentally changed our relationship with knowledge. Rather than accepting explanations without question, people started to demand proof and verification. The result was unprecedented progress in fields like medicine, physics, and astronomy. Today, scientific inquiry remains central to solving complex problems and improving human life. The commitment to evidence-based understanding continues to shape our civilization's future.",
    "choices": [
      "①gradually",
      "②reluctantly",
      "③sporadically",
      "④theoretically",
      "⑤incidentally"
    ],
    "answer": 0,
    "explanation": "문맥상 과학적 방법이 추측과 신화에 대한 의존을 '점진적으로(gradually)' 대체했음을 나타낸다. 과학 혁명은 한순간에 일어난 것이 아니라 시간에 걸쳐 천천히 진행된 과정이므로 'gradually'가 가장 적절하다.",
    "wrong_explanations": {
      "①reluctantly": "마지못해, 꺼려하며라는 뜻으로 맥락에 맞지 않음",
      "③sporadically": "산발적으로라는 뜻으로 체계적이고 광범위한 변화를 나타내지 못함",
      "④theoretically": "이론적으로라는 뜻으로 실제 역사적 변화를 설명하지 못함",
      "⑤incidentally": "우연히라는 뜻으로 의도적이고 체계적인 변화를 반영하지 못함"
    },
    "_type": "blank",
    "given_sentence": null
  },
  {
    "type": "빈칸 추론",
    "passage": "Modern technology has transformed the way we communicate, making distance almost irrelevant. People can now maintain relationships with friends and family across continents instantaneously. Video calls, messaging applications, and social media platforms have created unprecedented opportunities for connection. Yet paradoxically, this connectivity has also _____________ a new problem: many individuals report feeling increasingly isolated despite being constantly connected. The quality of digital interactions often differs significantly from face-to-face communication. Non-verbal cues, emotional warmth, and genuine presence are difficult to convey through screens. Furthermore, the constant availability of these technologies can create unhealthy habits. Users may spend hours scrolling through feeds rather than engaging in meaningful conversations. Psychologists warn that this superficial connection cannot fully satisfy our fundamental human need for authentic relationships. While technology offers valuable tools for maintaining bonds, it should complement rather than replace in-person interaction.",
    "choices": [
      "①obscured",
      "②concealed",
      "③exacerbated",
      "④diminished",
      "⑤eliminated"
    ],
    "answer": 2,
    "explanation": "문맥상 기술 발전이 연결성을 제공했지만 동시에 새로운 문제를 '악화시켰다(exacerbated)'. 다음 문장들이 디지털 상호작용의 질 부족과 고립감을 설명하므로 exacerbated가 가장 적절하다.",
    "wrong_explanations": {
      "①obscured": "모호하게 만들다는 뜻으로 문제의 심각성을 나타내지 못함",
      "②concealed": "숨기다는 뜻으로 오히려 문제가 드러나고 있으므로 맞지 않음",
      "④diminished": "감소시키다는 뜻으로 역설적 상황을 설명하지 못함",
      "⑤eliminated": "제거하다는 뜻으로 실제로 문제가 존재하므로 거짓"
    },
    "_type": "blank",
    "given_sentence": null
  },
  {
    "type": "빈칙 추론",
    "passage": "Environmental conservation efforts often face significant challenges when economic interests conflict with ecological preservation. Industries may resist regulations that limit their operations, arguing that environmental standards increase production costs. However, research increasingly demonstrates that the cost of inaction far _____________ the expenses of preventive measures. Pollution damages public health, requiring expensive medical treatments and reducing workforce productivity. Ecosystem degradation diminishes the availability of natural resources essential for long-term economic stability. Climate change causes catastrophic weather events that destroy infrastructure and disrupt supply chains. Companies that invest in sustainable practices often discover that environmental responsibility aligns with profitability. Green technologies create new job opportunities and open emerging markets. Furthermore, consumers increasingly prefer environmentally conscious brands. Governments worldwide are recognizing that protecting the environment is not an obstacle to economic growth but rather a prerequisite for it. The path forward requires viewing environmental and economic concerns not as competing interests but as interdependent priorities.",
    "choices": [
      "①exceeds",
      "②matches",
      "③approximates",
      "④reflects",
      "⑤supports"
    ],
    "answer": 0,
    "explanation": "문맥상 무행동의 비용이 예방적 조치의 비용을 '초과한다(exceeds)'. 다음 문장들에서 환경 훼손으로 인한 높은 대가들을 구체적으로 설명하므로 exceeds가 정답이다.",
    "wrong_explanations": {
      "②matches": "일치한다는 뜻으로 비용 비교에서 차이를 강조하지 못함",
      "③approximates": "대략 같다는 뜻으로 문맥상 필요한 대조를 표현하지 못함",
      "④reflects": "반영한다는 뜻으로 비용 비교에 적절하지 않음",
      "⑤supports": "지지한다는 뜻으로 문맥상 맞지 않음"
    },
    "_type": "blank",
    "given_sentence": null
  },
  {
    "type": "빈칸 추론",
    "passage": "The human brain possesses remarkable plasticity, meaning it can reorganize and form new neural connections throughout life. This capacity for change is particularly evident in stroke recovery, where patients often regain lost functions through intensive rehabilitation. When a stroke damages a specific brain region, other areas can sometimes _____________ its functions. Physical therapy, occupational therapy, and cognitive exercises stimulate neural pathways, encouraging the brain to establish alternative routes for information processing. This process takes considerable time and effort, but the results can be extraordinary. Some patients recover abilities they seemed to have lost forever. Scientists have observed that younger brains typically demonstrate greater plasticity, but older brains retain significant capacity for reorganization. Importantly, motivation and consistent practice play crucial roles in successful recovery. Those who engage actively in rehabilitation exercises show markedly better outcomes than passive patients. This discovery has transformed our understanding of brain injury and aging. Rather than viewing neurological damage as permanent and irreversible, we now recognize the brain's inherent ability to adapt and heal.",
    "choices": [
      "①assume",
      "②compensate for",
      "③substitute",
      "④modify",
      "⑤enhance"
    ],
    "answer": 1,
    "explanation": "문맥상 뇌의 다른 영역이 손상된 부분의 기능을 '보상한다(compensate for)'. 다음 문장들에서 재활이 신경 경로를 자극하여 대체 경로를 형성한다고 설명하므로 compensate for이 가장 적절하다.",
    "wrong_explanations": {
      "①assume": "맡다는 뜻으로 보상의 개념을 충분히 표현하지 못함",
      "③substitute": "대체하다는 뜻으로 부분적 보상을 나타내지 못함",
      "④modify": "수정한다는 뜻으로 기능 대체와 맞지 않음",
      "⑤enhance": "강화한다는 뜻으로 손상된 부분의 기능 회복을 설명하지 못함"
    },
    "_type": "blank",
    "given_sentence": null
  },
  {
    "type": "문장 삽입",
    "passage": "Modern technology has revolutionized the way we communicate with one another. ① Email, instant messaging, and social media platforms have made it easier than ever to stay connected with people around the world. ② However, some researchers argue that this increased connectivity has paradoxically led to feelings of isolation and loneliness among many individuals. ③ They suggest that digital communication often lacks the depth and authenticity of face-to-face interactions. ④ Despite these concerns, technology continues to evolve at a rapid pace, offering new ways to bridge geographical distances. ⑤ As we move forward, it is crucial that we find a balance between embracing technological advancement and maintaining meaningful human relationships.",
    "given_sentence": "This paradox highlights the tension between our desire for connection and the limitations of virtual communication.",
    "choices": [
      "①",
      "②",
      "③",
      "④",
      "⑤"
    ],
    "answer": 2,
    "explanation": "문장은 '역설'을 언급하고 있고, 이는 앞의 '증가된 연결성이 역설적으로 고립감을 초래했다'는 내용을 받아야 함. ③ 위치에서 연구원들의 주장을 구체화하는 설명으로 적절.",
    "wrong_explanations": {
      "0": "기술의 혁신을 소개하는 부분에서 삽입 문장의 '역설' 개념이 맞지 않음",
      "1": "이미 역설이 언급되었으므로 반복적이 됨",
      "3": "기술 발전의 긍정적 측면을 다루는 부분에 어울리지 않음",
      "4": "결론 부분에서는 균형을 찾기 위한 제안을 하고 있어 부적절함"
    },
    "_type": "insert"
  },
  {
    "type": "문장 삽입",
    "passage": "The concept of mindfulness has gained considerable popularity in recent years. ① Many people turn to meditation and breathing exercises to reduce stress and anxiety in their daily lives. ② Research has shown that regular mindfulness practice can improve mental health and overall well-being. ③ Furthermore, corporations have begun implementing mindfulness programs in their workplaces. ④ Employees who participate in these programs report higher levels of job satisfaction and productivity. ⑤ As scientific evidence continues to support these benefits, mindfulness is likely to become an even more integral part of modern wellness culture.",
    "given_sentence": "However, experts warn that mindfulness is not a cure-all solution and should be combined with other therapeutic approaches.",
    "choices": [
      "①",
      "②",
      "③",
      "④",
      "⑤"
    ],
    "answer": 4,
    "explanation": "'However'는 대조를 나타내는 접속사로, 앞의 긍정적인 효과들을 인정한 후 제한적인 견해를 제시해야 함. ④ 위치에서 마무리 전에 경고를 덧붙이는 것이 논리적으로 적절.",
    "wrong_explanations": {
      "0": "문장 도입부에서 긍정적 개념만 다루고 있어 대조 표현이 어색함",
      "1": "명상의 효과를 설명하는 부분에서 제한 조건을 제시하기 어색함",
      "2": "기업 프로그램 도입을 소개하기 전에 경고를 두면 흐름이 끊김",
      "3": "종합적 결론을 내리기 전에 삽입하면 마무리가 불완전함"
    },
    "_type": "insert"
  },
  {
    "type": "문장 삽입",
    "passage": "Climate change represents one of the most pressing challenges facing humanity today. ① Rising global temperatures are causing unprecedented changes to our ecosystems and weather patterns. ② Coastal communities are becoming increasingly vulnerable to flooding and rising sea levels. ③ Scientists have identified human activities, particularly the emission of greenhouse gases, as the primary driver of these changes. ④ International cooperation and policy reforms are essential to mitigate these effects. ⑤ Individuals can also contribute by making sustainable choices in their daily lives.",
    "given_sentence": "These measures, while necessary, require immediate and sustained action from governments worldwide.",
    "choices": [
      "①",
      "②",
      "③",
      "④",
      "⑤"
    ],
    "answer": 3,
    "explanation": "'These measures'는 앞서 언급된 국제 협력과 정책 개혁을 지칭함. ④ 위치에서 그 필요성을 강조하고 ⑤의 개인적 행동으로 이어지는 것이 자연스러움.",
    "wrong_explanations": {
      "0": "기후 변화를 정의하는 초반부에 '조치들'을 언급할 대상이 없음",
      "1": "해수면 상승의 구체적 영향을 설명하는 부분에 맞지 않음",
      "2": "원인을 규명하는 부분에서 '조치'를 언급하기는 시기상조",
      "4": "개인의 지속 가능한 선택을 언급한 후에 국제적 조치를 강조하면 역순임"
    },
    "_type": "insert"
  },
  {
    "type": "문장 삽입",
    "passage": "The ancient practice of storytelling has served as a fundamental means of cultural transmission for thousands of years. ① Through stories, societies have preserved their values, beliefs, and historical experiences. ② Children learn about their heritage and develop a sense of identity through the narratives shared by their elders. ③ In modern times, storytelling has evolved to include digital platforms and multimedia formats. ④ Despite these technological changes, the core purpose of storytelling remains unchanged. ⑤ Whether told around a campfire or through a smartphone screen, stories continue to connect us to our past and to one another.",
    "given_sentence": "This transformation demonstrates how traditional practices can adapt and thrive in contemporary society.",
    "choices": [
      "①",
      "②",
      "③",
      "④",
      "⑤"
    ],
    "answer": 3,
    "explanation": "'This transformation'은 ③에서 언급된 현대적 진화를 지칭. ④ 위치에서 변화에도 불구하고 본질은 유지된다는 논리로 자연스럽게 연결됨.",
    "wrong_explanations": {
      "0": "이야기의 오래된 전통을 소개할 때 '변화'를 먼저 언급하는 것은 순서가 맞지 않음",
      "1": "문화 전승의 기본 개념을 설명하는 부분에 변화 관련 문장이 어색함",
      "2": "디지털 형태의 진화를 소개한 직후 삽입하면 ④와의 연결이 약함",
      "4": "본질의 지속성을 강조한 후에 변화에 대해 말하면 논리가 역순임"
    },
    "_type": "insert"
  },
  {
    "type": "문장 삽입",
    "passage": "The human brain is an extraordinarily complex organ with remarkable capacities for learning and adaptation. ① Its ability to form new neural connections throughout our lifetime enables continuous personal growth. ② Education plays a crucial role in stimulating this neuroplasticity and developing our cognitive abilities. ③ Different learning methods, such as active engagement and spaced repetition, have been shown to enhance memory retention. ④ Moreover, social interaction and collaborative learning provide additional cognitive benefits. ⑤ Understanding how the brain learns should inform our educational policies and teaching strategies.",
    "given_sentence": "These findings underscore the importance of moving beyond traditional rote memorization approaches in schools.",
    "choices": [
      "①",
      "②",
      "③",
      "④",
      "⑤"
    ],
    "answer": 4,
    "explanation": "'These findings'은 ③과 ④에서 제시된 다양한 학습 방법의 효과를 지칭. ⑤ 위치에서 전통적 방식 비판 및 교육 정책 개선의 필요성을 강조하는 것이 논리적.",
    "wrong_explanations": {
      "0": "뇌의 기본 구조 설명 부분에 학습 방법에 대한 연구 결과를 언급하기 부적절",
      "1": "교육의 역할을 소개하기 전에 구체적 학습 연구 결과를 언급하면 순서가 맞지 않음",
      "2": "첫 번째 학습 방법을 소개할 때 이미 그 결과를 강조하는 것은 시기상조",
      "3": "사회적 학습의 이점을 언급한 직후에는 다른 방법을 추가 소개하는 것이 적절함"
    },
    "_type": "insert"
  },
  {
    "type": "문장 삽입",
    "passage": "Modern cities face increasing pressure to become more sustainable. ① Urban planners must consider how to reduce carbon emissions while maintaining economic growth. ② The challenge lies in balancing environmental protection with practical infrastructure needs. ③ Many cities have started implementing green building standards and promoting public transportation. ④ These initiatives require significant investment and long-term commitment from local governments. ⑤ However, the benefits of sustainable urban development extend far beyond environmental concerns, affecting public health, quality of life, and economic competitiveness.",
    "given_sentence": "Therefore, cities that invest in these strategies today will likely see improved air quality, reduced healthcare costs, and stronger economic growth in the coming decades.",
    "choices": [
      "①",
      "②",
      "③",
      "④",
      "⑤"
    ],
    "answer": 4,
    "explanation": "주어진 문장은 지시어 'these strategies'와 연결어 'Therefore'로 시작합니다. 앞 문장(⑤)에서 sustainable urban development의 benefits를 언급했으므로, 주어진 문장의 'these strategies'는 이를 참조합니다. 'Therefore'는 앞의 내용을 바탕으로 결론을 내리는 구조입니다.",
    "wrong_explanations": {
      "①": "도입 문장 바로 뒤이므로 'these strategies'를 참조할 선행 내용이 부족합니다.",
      "②": "도전과제를 설명하는 부분이므로 구체적인 전략들이 언급되지 않았습니다.",
      "③": "초기 사례만 제시했을 뿐, 결론을 내릴 충분한 배경이 아닙니다.",
      "⑤": "주어진 문장의 'Therefore'가 의미적으로 연결되지 않습니다."
    },
    "_type": "insert"
  },
  {
    "type": "문장 삽입",
    "passage": "The human brain processes information through interconnected neural networks. ① Each neuron communicates with thousands of other neurons through chemical and electrical signals. ② This complex system allows us to perceive the world, form memories, and make decisions. ③ Scientists have been studying brain plasticity for decades, discovering that neural connections can be modified throughout life. ④ Research shows that learning new skills strengthens certain neural pathways while weakening others. ⑤ Understanding these mechanisms is crucial for developing treatments for neurological disorders.",
    "given_sentence": "This remarkable ability means that our brains remain adaptable and capable of change even in adulthood.",
    "choices": [
      "①",
      "②",
      "③",
      "④",
      "⑤"
    ],
    "answer": 3,
    "explanation": "주어진 문장의 지시어 'This remarkable ability'는 앞 문장(④)에서 언급된 '신경 경로의 수정 가능성'을 참조합니다. 'even in adulthood'라는 표현은 ③에서 'throughout life'와 연결되며, 자연스러운 논리적 흐름을 만듭니다.",
    "wrong_explanations": {
      "①": "신경 통신 메커니즘에 대한 설명이므로 'adaptability'와 연결되지 않습니다.",
      "②": "뇌의 일반적인 기능을 설명하는 부분입니다.",
      "③": "brain plasticity 연구 개시만 언급했을 뿐 구체적 능력이 명확하지 않습니다.",
      "⑤": "신경 장애 치료 개발 부분으로 문맥상 맞지 않습니다."
    },
    "_type": "insert"
  },
  {
    "type": "문장 삽입",
    "passage": "Climate change is altering migration patterns of many animal species worldwide. ① Birds are arriving at breeding grounds earlier in spring due to warming temperatures. ② Fish populations are moving toward cooler waters in deeper oceans and higher latitudes. ③ These shifts disrupt the delicate timing between predators and prey, affecting entire ecosystems. ④ Many species face extinction if they cannot adapt quickly enough to rapid environmental changes. ⑤ Conservation efforts must therefore focus on creating wildlife corridors that allow animals to relocate safely.",
    "given_sentence": "Without such measures, the intricate web of ecological relationships that has evolved over millennia could collapse within a single generation.",
    "choices": [
      "①",
      "②",
      "③",
      "④",
      "⑤"
    ],
    "answer": 4,
    "explanation": "주어진 문장은 연결어 'Without such measures'로 시작하며, 앞 문장(⑤)의 'Conservation efforts'에서 제시된 해결책을 참조합니다. 이 문장은 그 조치들이 없을 경우의 심각한 결과를 설명하는 대조적 구조입니다.",
    "wrong_explanations": {
      "①": "새의 도래 시간 변화로 '조치'가 언급되지 않습니다.",
      "②": "물고기 이동 현상을 설명할 뿐입니다.",
      "③": "생태계 혼란을 언급하지만 해결책이 아닙니다.",
      "④": "멸종 위험을 설명하지만 구체적 보전 노력은 없습니다."
    },
    "_type": "insert"
  },
  {
    "type": "어법 판단",
    "passage": "The conference, which was held in Seoul last month, brought together leading experts from around the world. The main purpose of the gathering was to discuss innovative solutions for environmental problems that has been affecting our planet for decades. Participants shared their research findings and exchanged ideas about sustainable development. One of the most impressive presentations was delivered by Dr. Kim, whose groundbreaking work on renewable energy has revolutionized the industry. The attendees were deeply impressed by the quality of discussions and the collaborative spirit that characterized the entire event. Many delegates expressed their intention to continue working together on future projects.",
    "choices": [
      "①has",
      "②was held",
      "③have been affecting",
      "④was delivered",
      "⑤expressed"
    ],
    "answer": 2,
    "explanation": "'problems'는 복수형이므로 단수동사 'has'가 아니라 복수동사 'have'를 사용해야 합니다. 정답은 ③ 'have been affecting'입니다.",
    "wrong_explanations": {
      "①": "'which was held'은 관계절로 수동태가 올바릅니다.",
      "②": "과거 시제 수동태가 문맥상 적절합니다.",
      "④": "'was delivered'는 단수주어 'presentation'에 맞는 수동태입니다.",
      "⑤": "'expressed'는 과거시제로 일관성 있습니다."
    },
    "_type": "grammar",
    "given_sentence": null
  },
  {
    "type": "어법 판단",
    "passage": "Modern technology have transformed the way people communicate and conduct business in the 21st century. Smartphones and social media platforms enables individuals to connect instantly across geographical boundaries. The rapid advancement of artificial intelligence and machine learning has created new opportunities in various industries. Companies are investing heavily in digital infrastructure to improve their efficiency and competitiveness. However, experts warn that increased reliance on technology pose potential risks to privacy and security. Despite these challenges, the integration of technology into our daily lives continues to accelerate, shaping our future in unprecedented ways.",
    "choices": [
      "①have transformed",
      "②enables",
      "③has created",
      "④pose",
      "⑤continues"
    ],
    "answer": 0,
    "explanation": "'Modern technology'는 단수주어이므로 'have'가 아니라 'has'를 사용해야 합니다. 정답은 ① 'has transformed'입니다.",
    "wrong_explanations": {
      "②": "'platforms'가 복수주어이므로 'enable'이어야 하지만, 본문의 오류는 다른 곳입니다.",
      "③": "'advancement'는 단수주어로 'has created'가 올바릅니다.",
      "④": "'reliance'는 단수주어이므로 'poses'를 사용해야 하는데, 본문의 주요 오류는 아닙니다.",
      "⑤": "'integration'은 단수주어로 'continues'가 올바릅니다."
    },
    "_type": "grammar",
    "given_sentence": null
  },
  {
    "type": "어법 판단",
    "passage": "The research team has been studying the effects of climate change on marine ecosystems for over a decade. Their findings reveals significant alterations in fish migration patterns and ocean temperature fluctuations. Scientists are concerned that these changes could disrupts the entire food chain in ocean environments. The data collected from various monitoring stations showed that sea levels are rising at an alarming rate. International cooperation and immediate action is necessary to address this global crisis. Governments must implementing policies that reduce carbon emissions and protect endangered marine species from further harm.",
    "choices": [
      "①has been studying",
      "②reveals",
      "③disrupts",
      "④is necessary",
      "⑤implementing"
    ],
    "answer": 1,
    "explanation": "'findings'는 복수형이므로 단수동사 'reveals'가 아니라 복수동사 'reveal'을 사용해야 합니다. 정답은 ② 'reveal'입니다.",
    "wrong_explanations": {
      "①": "'The research team'은 단수주어로 'has been studying'이 올바릅니다.",
      "③": "'could disrupt'는 법조동사 뒤의 기본형으로 올바릅니다.",
      "④": "'cooperation and immediate action'은 병렬구조의 복합주어로 'are necessary'가 맞지만, 본문의 오류는 다른 곳입니다.",
      "⑤": "'must'는 조동사이므로 'implement'의 기본형이 와야 하는데, 본문의 주요 오류는 아닙니다."
    },
    "_type": "grammar",
    "given_sentence": null
  },
  {
    "type": "어법 판단",
    "passage": "The festival, which attracts thousands of visitors annually, celebrate the rich cultural heritage of the region. Traditional music performances and dance shows is the highlight of the three-day event. Artisans display their handmade crafts, and local restaurants serves authentic regional cuisine. The organizers have been working tirelessly to ensure that all aspects of the festival runs smoothly. Community members volunteers their time to help coordinate various activities and guide visitors. This year's event promises to be even more spectacular, with international performers joining domestic talents in creating an unforgettable experience.",
    "choices": [
      "①attracts",
      "②celebrates",
      "③are",
      "④serves",
      "⑤runs"
    ],
    "answer": 1,
    "explanation": "'The festival'은 단수주어이므로 복수동사 'celebrate'가 아니라 단수동사 'celebrates'를 사용해야 합니다. 정답은 ② 'celebrates'입니다.",
    "wrong_explanations": {
      "①": "'which'의 선행사인 'festival'이 단수이므로 'attracts'가 올바릅니다.",
      "③": "'performances and shows'는 병렬구조의 복수주어이므로 'are'가 올바릅니다.",
      "④": "'restaurants'는 복수주어이므로 'serve'를 사용해야 하는데, 본문의 주요 오류는 아닙니다.",
      "⑤": "'aspects'는 복수주어이므로 'run'을 사용해야 하는데, 본문의 주요 오류는 아닙니다."
    },
    "_type": "grammar",
    "given_sentence": null
  },
  {
    "type": "어법 판단",
    "passage": "Educational institutions around the world recognizes the importance of integrating critical thinking skills into their curriculum. Students today needs to develop abilities that helps them analyze information, solve complex problems, and make informed decisions. Teachers are implementing new pedagogical approaches that encourages active participation and independent learning. The combination of traditional teaching methods and modern technology create a dynamic learning environment. Research demonstrates that students who engages in critical thinking exercises performs better on standardized assessments. Educational leaders agrees that fostering these skills is essential for preparing students to succeed in an increasingly complex world.",
    "choices": [
      "①recognizes",
      "②needs",
      "③helps",
      "④creates",
      "⑤agrees"
    ],
    "answer": 0,
    "explanation": "'Educational institutions'는 복수주어이므로 단수동사 'recognizes'가 아니라 복수동사 'recognize'를 사용해야 합니다. 정답은 ① 'recognize'입니다.",
    "wrong_explanations": {
      "②": "'Students'는 복수주어이므로 'need'를 사용해야 하지만, 본문의 주요 오류는 다른 곳입니다.",
      "③": "'abilities'를 선행사로 하는 관계대명사절에서 복수주어이므로 'help'를 사용해야 하지만, 본문의 주요 오류는 아닙니다.",
      "④": "'combination'은 단수주어이므로 'creates'가 올바릅니다.",
      "⑤": "'leaders'는 복수주어이므로 'agree'를 사용해야 하지만, 본문의 주요 오류는 아닙니다."
    },
    "_type": "grammar",
    "given_sentence": null
  },
  {
    "type": "어법 판단",
    "passage": "The success of any organization depends on how well its members communicates with each other. In today's digital workplace, effective communication has become more critical than ever before. Employees who are able to express their ideas clearly and listen to their colleagues' feedback tend to perform better in their roles. Furthermore, when team members understand the importance of sharing information transparently, they are more likely to collaborate effectively on projects. Companies that invest in communication training for their staff often see improvements in productivity and employee satisfaction. Research shows that organizations with strong internal communication systems experience fewer conflicts and higher employee retention rates. Therefore, managers should prioritize creating an environment where open dialogue is encouraged and valued.",
    "choices": [
      "①communicates",
      "②communicate",
      "③communicated",
      "④communicating",
      "⑤communication"
    ],
    "answer": 1,
    "explanation": "주어 'members'는 복수형이므로 단수동사 'communicates'가 아닌 복수동사 'communicate'를 사용해야 합니다. 정답은 ②번입니다.",
    "wrong_explanations": {
      "①": "members는 복수형이므로 단수동사 communicates는 주어-동사 수일치 오류입니다.",
      "③": "과거형 communicated는 현재 상황을 설명하는 본문의 시제와 맞지 않습니다.",
      "④": "동명사 communicating은 문법적으로 맞지 않습니다.",
      "⑤": "명사 communication은 동사 자리에 올 수 없습니다."
    },
    "_type": "grammar",
    "given_sentence": null
  },
  {
    "type": "어법 판단",
    "passage": "Social media platforms have revolutionized the way people share information and connect with others around the world. However, excessive use of these platforms can lead to negative consequences for mental health. Research indicates that individuals who spend too much time on social media experiences increased levels of anxiety and depression. The constant comparison with others' curated lives creates unrealistic standards and diminishes self-esteem. Additionally, the addictive nature of social media algorithms keeps users engaged for longer periods than they intend. Experts recommend that people should establish healthy boundaries and allocate specific times for social media use. Taking regular breaks from these platforms allows individuals to focus on face-to-face relationships and real-world activities that promote genuine well-being.",
    "choices": [
      "①experiences",
      "②experience",
      "③experiencing",
      "④experienced",
      "⑤experiential"
    ],
    "answer": 1,
    "explanation": "주어 'individuals'는 복수형이므로 단수동사 'experiences'가 아닌 복수동사 'experience'를 사용해야 합니다. 정답은 ②번입니다.",
    "wrong_explanations": {
      "①": "주어 individuals는 복수형이므로 단수동사 experiences는 주어-동사 수일치 오류입니다.",
      "③": "현재분사 experiencing은 동사 자리에 올 수 없습니다.",
      "④": "과거형 experienced는 현재의 일반적 사실을 설명하는 문맥에 맞지 않습니다.",
      "⑤": "형용사 experiential은 동사 자리에 올 수 없습니다."
    },
    "_type": "grammar",
    "given_sentence": null
  },
  {
    "type": "어법 판단",
    "passage": "Climate change has become one of the most pressing challenges facing humanity in the twenty-first century. Rising global temperatures affects weather patterns, sea levels, and ecosystems across the planet. Scientists agree that human activities, particularly the burning of fossil fuels, are the primary driver of climate change. The consequences are already visible in increased frequency of extreme weather events, droughts, and flooding in various regions. To address this crisis, governments, businesses, and individuals must work together to reduce carbon emissions. Renewable energy sources such as solar and wind power offers promising alternatives to traditional fossil fuels. Public awareness campaigns and environmental education play crucial roles in motivating people to make sustainable choices in their daily lives.",
    "choices": [
      "①affects",
      "②affect",
      "③affecting",
      "④affected",
      "⑤affective"
    ],
    "answer": 1,
    "explanation": "주어 'Rising global temperatures'는 복수형이므로 단수동사 'affects'가 아닌 복수동사 'affect'를 사용해야 합니다. 정답은 ②번입니다.",
    "wrong_explanations": {
      "①": "주어가 복수형(temperatures)이므로 단수동사 affects는 주어-동사 수일치 오류입니다.",
      "③": "현재분사 affecting은 동사 자리에 올 수 없습니다.",
      "④": "과거형 affected는 현재의 일반적 사실을 설명하는 문맥에 맞지 않습니다.",
      "⑤": "형용사 affective는 동사 자리에 올 수 없습니다."
    },
    "_type": "grammar",
    "given_sentence": null
  },
  {
    "type": "어법 판단",
    "passage": "The art of storytelling has captivated human audiences for thousands of years across different cultures and civilizations. Stories serves as powerful tools for transmitting cultural values, historical knowledge, and moral lessons to younger generations. Through narratives, people can explore complex emotions and universal human experiences in meaningful ways. The most effective stories often contains characters that readers can relate to and situations that resonate with their own lives. In modern times, storytelling has evolved to include various media formats such as literature, film, television, and digital content. Writers and filmmakers continuously adapt classic tales to contemporary settings while preserving their essential messages. The enduring appeal of stories demonstrates the fundamental human need for connection, understanding, and shared experience.",
    "choices": [
      "①serves",
      "②serve",
      "③serving",
      "④served",
      "⑤serviceable"
    ],
    "answer": 1,
    "explanation": "주어 'Stories'는 복수형이므로 단수동사 'serves'가 아닌 복수동사 'serve'를 사용해야 합니다. 정답은 ②번입니다.",
    "wrong_explanations": {
      "①": "주어 Stories는 복수형이므로 단수동사 serves는 주어-동사 수일치 오류입니다.",
      "③": "현재분사 serving은 동사 자리에 올 수 없습니다.",
      "④": "과거형 served는 현재의 일반적 사실을 설명하는 문맥에 맞지 않습니다.",
      "⑤": "형용사 serviceable은 동사 자리에 올 수 없습니다."
    },
    "_type": "grammar",
    "given_sentence": null
  },
  {
    "type": "어휘 적절성",
    "passage": "The research team decided to ① abandon their original hypothesis after discovering contradictory evidence. Dr. Kim spent months analyzing the data, and her meticulous approach ② revealed unexpected patterns in the results. Although the initial findings seemed promising, the team had to ③ reject their assumptions. The new direction was challenging, but team members showed ④ reluctant enthusiasm about exploring alternative theories. Their persistence and collaborative spirit ⑤ hindered the project's success, earning them recognition in the academic community.",
    "choices": [
      "① abandon",
      "② revealed",
      "③ reject",
      "④ reluctant",
      "⑤ hindered"
    ],
    "answer": 4,
    "explanation": "⑤ 'hindered'(방해했다)는 '성공을 방해했다'는 의미로 문맥상 부적절합니다. 앞 문장에서 '끈기와 협력 정신'이 주어이므로, 이것이 프로젝트 성공을 '방해했다'는 것은 논리적으로 모순입니다. 원래는 'facilitated(촉진했다)' 또는 'contributed to(기여했다)'가 와야 합니다.",
    "wrong_explanations": {
      "①": "abandon은 '가설을 포기하다'는 의미로 문맥상 적절합니다.",
      "②": "revealed는 '패턴을 드러내다'는 의미로 자연스럽습니다.",
      "③": "reject는 '가정을 거부하다'는 의미로 논리적으로 적절합니다.",
      "④": "reluctant enthusiasm는 '어쩔 수 없는 열정'으로, 새로운 방향이 도전적이라는 문맥에 맞습니다."
    },
    "_type": "vocab",
    "given_sentence": null
  },
  {
    "type": "어휘 적절성",
    "passage": "Climate change has become increasingly ① urgent in global discussions. Scientists worldwide continue to ② document the rising temperatures and melting ice caps. Governments have begun to ③ implement stricter environmental policies to address this crisis. Environmental groups maintain that current efforts are ④ insufficient to prevent catastrophic consequences. However, some economists argue that green technology investments will ⑤ impede economic growth, creating a complex debate between environmental protection and financial stability.",
    "choices": [
      "① urgent",
      "② document",
      "③ implement",
      "④ insufficient",
      "⑤ impede"
    ],
    "answer": 4,
    "explanation": "⑤ 'impede'(방해하다)는 문맥상 부적절합니다. 문장이 '녹색 기술 투자가 경제 성장을 방해할 것'이라고 말하지만, 이는 경제학자들의 일반적인 주장입니다. 그러나 현재의 추세와 과학적 합의는 녹색 기술이 새로운 경제 기회를 창출한다는 것입니다. 원래는 'drive(촉진하다)' 또는 'stimulate(자극하다)'가 맞습니다.",
    "wrong_explanations": {
      "①": "urgent는 '긴급한'이라는 의미로 기후변화 논의에 적절합니다.",
      "②": "document는 '기록하다'라는 의미로 과학자들의 행동을 정확히 설명합니다.",
      "③": "implement는 '실행하다'라는 의미로 정책 도입에 적절합니다.",
      "④": "insufficient는 '불충분한'이라는 의미로 환경단체의 주장을 논리적으로 표현합니다."
    },
    "_type": "vocab",
    "given_sentence": null
  },
  {
    "type": "어휘 적절성",
    "passage": "The novel presents a protagonist who gradually ① transforms into a more compassionate person. Through experiencing hardship, she learns to ② empathize with others' suffering. Her relationships ③ strengthen as she opens up emotionally to family and friends. Critics praise the author's ability to ④ portrayal character development authentically. Some readers argue that the ending ⑤ obscures the theme of personal growth, leaving them unsatisfied with the resolution.",
    "choices": [
      "① transforms",
      "② empathize",
      "③ strengthen",
      "④ portrayal",
      "⑤ obscures"
    ],
    "answer": 4,
    "explanation": "⑤ 'obscures'(모호하게 하다, 숨기다)는 문맥상 부적절합니다. 소설이 '개인적 성장'이라는 주제를 명확히 드러내고 있으므로, 이를 '모호하게 한다'는 표현은 모순입니다. 원래는 'reinforces(강화한다)' 또는 'emphasizes(강조한다)'가 와야 합니다.",
    "wrong_explanations": {
      "①": "transforms는 '변화하다'라는 의미로 주인공의 성장을 표현합니다.",
      "②": "empathize는 '공감하다'라는 의미로 감정적 성장을 보여줍니다.",
      "③": "strengthen는 '강화되다'라는 의미로 관계 발전을 나타냅니다.",
      "④": "portrayal는 '묘사'라는 의미로 저자의 능력을 설명합니다."
    },
    "_type": "vocab",
    "given_sentence": null
  },
  {
    "type": "어휘 적절성",
    "passage": "The startup company faced significant challenges in its first year, yet the team's determination ① sustained their efforts through difficulties. Investors were impressed by the founders' ability to ② adapt quickly to market changes. The business model ③ evolved continuously, allowing the company to stay competitive. Despite setbacks, quarterly revenue ④ surged unexpectedly, demonstrating strong market demand. Management decided to ⑤ discard their expansion plans, recognizing the enormous potential for growth in emerging markets.",
    "choices": [
      "① sustained",
      "② adapt",
      "③ evolved",
      "④ surged",
      "⑤ discard"
    ],
    "answer": 4,
    "explanation": "⑤ 'discard'(버리다, 폐기하다)는 문맥상 부적절합니다. 문장 앞부분에서 매출이 급증하고 성장 잠재력을 인식했다고 했으므로, 이런 상황에서 '확장 계획을 버린다'는 것은 논리적 모순입니다. 원래는 'accelerate(가속화한다)' 또는 'pursue(추진한다)'가 맞습니다.",
    "wrong_explanations": {
      "①": "sustained는 '지속하다'라는 의미로 결정의 효과를 표현합니다.",
      "②": "adapt는 '적응하다'라는 의미로 창업자들의 능력을 보여줍니다.",
      "③": "evolved는 '진화하다'라는 의미로 비즈니스 모델의 변화를 설명합니다.",
      "④": "surged는 '급증하다'라는 의미로 매출 증가를 나타냅니다."
    },
    "_type": "vocab",
    "given_sentence": null
  },
  {
    "type": "어휘 적절성",
    "passage": "Traditional medicine systems have ① coexisted with modern medicine for centuries, each offering unique benefits. Modern practitioners are increasingly ② recognizing the value of holistic healing approaches. Patients often ③ prefer integrating both methods to achieve optimal health outcomes. Recent studies ④ validate the efficacy of certain herbal treatments previously dismissed by Western medicine. Critics ⑤ obscure the scientific evidence supporting traditional practices, hindering broader acceptance in medical communities.",
    "choices": [
      "① coexisted",
      "② recognizing",
      "③ prefer",
      "④ validate",
      "⑤ obscure"
    ],
    "answer": 4,
    "explanation": "⑤ 'obscure'(숨기다, 모호하게 하다)는 문맥상 부적절합니다. 문장이 '비판가들이 전통의학을 지지하는 과학적 증거를 숨긴다'고 하는데, 이는 문맥 전체에서 전통의학의 가치를 점진적으로 인정하고 있는 흐름과 모순됩니다. 원래는 'question(의문을 제기한다)' 또는 'dispute(반박한다)'가 와야 합니다.",
    "wrong_explanations": {
      "①": "coexisted는 '공존해왔다'라는 의미로 두 의학 체계의 관계를 표현합니다.",
      "②": "recognizing는 '인정하다'라는 의미로 현대 의학자들의 태도 변화를 보여줍니다.",
      "③": "prefer는 '선호하다'라는 의미로 환자들의 선택을 나타냅니다.",
      "④": "validate는 '증명하다'라는 의미로 한약 치료의 효능을 확인합니다."
    },
    "_type": "vocab",
    "given_sentence": null
  },
  {
    "type": "어휘 적절성",
    "passage": "The old lighthouse stood on a rocky cliff, its beam cutting through the thick fog that ① obscured the coastline every night. For over a century, this structure had ② guided countless ships safely to harbor. The lighthouse keeper climbed the spiral stairs each evening, carrying oil for the lamp. As modern technology advanced, automated systems gradually replaced manual operations. Yet locals argued that the lighthouse represented a cultural heritage worth preserving. The government finally decided to ③ abandon the demolition plan and instead allocated funds for restoration. Workers carefully repaired the cracked walls and polished the brass fixtures. The reopened lighthouse became a popular tourist destination, and its restored beam once again ④ illuminated the dark waters. Visitors climbed to the top, enjoying panoramic views of the sea. The keeper's quarters were converted into a small museum displaying historical artifacts. This successful preservation project demonstrated that progress doesn't require erasing the past. Today, the lighthouse stands as a ⑤ timeless symbol of human resilience and maritime tradition, reminding us of our connection to history.",
    "choices": [
      "① obscured",
      "② guided",
      "③ eliminate",
      "④ illuminated",
      "⑤ timeless"
    ],
    "answer": 2,
    "explanation": "③번 'eliminate'는 '제거하다'는 뜻이지만, 문맥에서는 'demolition plan(철거 계획)을 포기하다'는 의미이므로 'abandon'(포기하다)이 원래 단어입니다. 'eliminate the demolition plan'은 문법적으로 어색하고, 의미상 '철거 계획을 제거하다(=포기하다)'가 되어야 하는데, 여기서는 'abandon'이 훨씬 더 자연스럽습니다.",
    "wrong_explanations": {
      "1": "obscured는 '가리다, 흐리게 하다'는 뜻으로 '안개가 해안선을 가리다'는 문맥에 완벽하게 적절합니다.",
      "2": "guided는 '안내하다'는 뜻으로 '등대가 배를 항구로 안내하다'는 문맥에 적절합니다.",
      "4": "illuminated는 '밝히다, 비추다'는 뜻으로 '등대의 불빛이 어두운 바다를 비추다'는 문맥에 완벽하게 적절합니다.",
      "5": "timeless는 '시간을 초월한, 영원한'이라는 뜻으로 '역사 보존의 상징'을 묘사하는 데 적절합니다."
    },
    "_type": "vocab",
    "given_sentence": null
  },
  {
    "type": "어휘 적절성",
    "passage": "Climate change poses unprecedented challenges to global ecosystems. Rising temperatures ① trigger widespread drought in agricultural regions, threatening food security for billions. Scientists have documented dramatic changes in animal migration patterns, with many species struggling to adapt. Arctic ice continues to melt at an accelerating rate, causing sea levels to rise. Coastal communities face increasing flooding risks and erosion. Governments worldwide have ② recognized the urgency of the situation and committed substantial resources to renewable energy projects. However, implementation remains slow due to economic concerns and political resistance. Some argue that technological innovation might ③ hinder our transition to sustainable practices, offering promising solutions like carbon capture and green hydrogen. Environmental organizations ④ advocate for immediate policy changes and individual behavioral shifts. Citizens are encouraged to reduce consumption, support ethical companies, and participate in reforestation initiatives. Education is crucial in raising awareness about environmental responsibility. The transition to a carbon-neutral economy will require ⑤ coordinated global efforts, combining technological advancement with social commitment and political will.",
    "choices": [
      "① trigger",
      "② recognized",
      "③ facilitate",
      "④ advocate",
      "⑤ coordinated"
    ],
    "answer": 2,
    "explanation": "③번 'hinder'는 '방해하다, 저해하다'는 뜻이지만, 문맥에서는 '기술 혁신이 지속 가능한 관행으로의 전환을 도와줄 수 있다'는 의미이므로 'facilitate'(촉진하다)가 원래 단어입니다. 'hinder'는 반의어로, 문맥상 기술이 긍정적인 역할을 한다는 의미와 정반대입니다.",
    "wrong_explanations": {
      "1": "trigger는 '촉발하다'는 뜻으로 '상승하는 기온이 광범위한 가뭄을 촉발하다'는 문맥에 적절합니다.",
      "2": "recognized는 '인식하다'는 뜻으로 '정부가 상황의 긴급성을 인식하다'는 문맥에 적절합니다.",
      "4": "advocate는 '주장하다, 옹호하다'는 뜻으로 '환경 단체가 정책 변화를 주장하다'는 문맥에 적절합니다.",
      "5": "coordinated는 '조율된, 조화로운'이라는 뜻으로 '글로벌 노력이 조화를 이루어야 한다'는 문맥에 적절합니다."
    },
    "_type": "vocab",
    "given_sentence": null
  },
  {
    "type": "어휘 적절성",
    "passage": "The Renaissance period revolutionized European culture and thought. During this era, artists and scholars began to ① challenge medieval traditions and explore new ideas about human potential and creativity. Leonardo da Vinci exemplified this spirit through his diverse talents in art, science, and engineering. His detailed anatomical drawings ② demonstrated his commitment to observing nature with scientific precision. Patrons from wealthy merchant families ③ neglected financial support to talented artists, enabling the creation of masterpieces like Michelangelo's David and Raphael's frescoes. The invention of the printing press by Gutenberg ④ accelerated the spread of knowledge across Europe, democratizing access to information and books. This technological advancement fundamentally transformed education and literacy rates. Humanist philosophers emphasized the study of classical Greek and Roman texts, ⑤ advocating for a renewed focus on human dignity and secular learning rather than purely religious education.",
    "choices": [
      "① challenge",
      "② demonstrated",
      "③ provided",
      "④ accelerated",
      "⑤ advocating"
    ],
    "answer": 2,
    "explanation": "③번 'neglected'는 '무시하다, 소홀히 하다'는 뜻이지만, 문맥에서는 '부유한 후원자들이 재정 지원을 제공했다'는 의미이므로 'provided'(제공하다)가 원래 단어입니다. 'neglected'는 반의어로, 문맥상 후원자들이 적극적으로 지원했다는 의미와 정반대입니다.",
    "wrong_explanations": {
      "1": "challenge는 '도전하다, 거부하다'는 뜻으로 '예술가들이 중세 전통에 도전하다'는 문맥에 적절합니다.",
      "2": "demonstrated는 '보여주다, 증명하다'는 뜻으로 '해부학 그림이 과학적 관찰 의지를 보여주다'는 문맥에 적절합니다.",
      "4": "accelerated는 '가속화하다'는 뜻으로 '인쇄술이 지식의 확산을 가속화하다'는 문맥에 적절합니다.",
      "5": "advocating는 '주장하다'는 뜻으로 '인문주의자들이 인간 존엄성과 세속적 학습을 주장하다'는 문맥에 적절합니다."
    },
    "_type": "vocab",
    "given_sentence": null
  },
  {
    "type": "어휘 적절성",
    "passage": "Corporate social responsibility has become increasingly important in modern business. Companies now recognize that ① contributing to community development creates positive brand image and builds customer loyalty. Many organizations have established foundations that ② support educational programs, healthcare initiatives, and environmental conservation projects. These efforts ③ diminish public trust and demonstrate genuine commitment to social welfare beyond profit maximization. Leading companies actively ④ encourage employee volunteer programs, allowing workers to participate in charitable activities during work hours. Such initiatives foster workplace satisfaction and attract socially conscious talent. Transparency in reporting corporate social initiatives is essential for ⑤ credibility and accountability to stakeholders.",
    "choices": [
      "① contributing",
      "② support",
      "③ enhance",
      "④ encourage",
      "⑤ credibility"
    ],
    "answer": 2,
    "explanation": "③번 'diminish'는 '감소시키다, 약화시키다'는 뜻이지만, 문맥에서는 '이러한 노력들이 공중의 신뢰를 증진시키다'는 의미이므로 'enhance'(증진하다)가 원래 단어입니다. 'diminish'는 반의어로, 기업의 사회적 책임이 신뢰를 높인다는 긍정적 문맥과 정반대입니다.",
    "wrong_explanations": {
      "1": "contributing는 '기여하다'는 뜻으로 '사회 발전에 기여하다'는 문맥에 적절합니다.",
      "2": "support는 '지원하다'는 뜻으로 '재단이 교육 프로그램을 지원하다'는 문맥에 적절합니다.",
      "4": "encourage는 '장려하다'는 뜻으로 '회사가 자원봉사 프로그램을 장려하다'는 문맥에 적절합니다.",
      "5": "credibility는 '신뢰성'이라는 뜻으로 '투명성이 이해관계자에게 신뢰성을 제공한다'는 문맥에 적절합니다."
    },
    "_type": "vocab",
    "given_sentence": null
  },
  {
    "type": "글의 순서",
    "passage": "Many people believe that multitasking makes them more productive. Research, however, suggests otherwise.\n\n(A) When the brain switches between tasks, it requires time to refocus on each new activity. Scientists have found that this switching cost can reduce overall efficiency by up to 40 percent. Moreover, the quality of work tends to decline when people attempt simultaneous tasks.\n\n(B) Instead of juggling multiple activities, experts recommend focusing on one task at a time. This approach, known as single-tasking, allows the brain to enter a state of deep concentration. Employees who practice single-tasking complete projects faster and make fewer errors than those who multitask.\n\n(C) The myth of multitasking has been perpetuated by modern workplace culture, which often glorifies busy schedules. Companies are now recognizing that encouraging workers to focus on individual tasks leads to better results. Some organizations have even implemented no-meeting days to eliminate interruptions.",
    "choices": [
      "①(A)-(B)-(C)",
      "②(A)-(C)-(B)",
      "③(B)-(A)-(C)",
      "④(B)-(C)-(A)",
      "⑤(C)-(A)-(B)"
    ],
    "answer": 4,
    "explanation": "도입부에서 멀티태스킹이 생산성을 높인다는 일반적 믿음을 소개하고 연구결과 그렇지 않다고 제시. (A)는 뇌가 작업을 전환할 때의 부정적 효과를 설명하여 도입부의 주장을 뒷받침. (B)는 그 해결책으로 단일 작업의 이점을 제시. (C)는 현대 직장 문화에서 멀티태스킹 신화가 어떻게 퍼졌으며 이제 변화하는지 보여주는 결론적 내용.",
    "wrong_explanations": {
      "①": "도입부 직후 (A)가 오면 좋지만, (B)-(C) 순서는 해결책 제시 후 문화적 배경 설명이라 비논리적",
      "②": "(A) 다음 (C)가 오면 갑자기 직장 문화 언급으로 이어져 자연스럽지 않음",
      "③": "(B)의 해결책이 (A)의 문제 설명보다 먼저 나와 인과관계 붕괴",
      "⑤": "(C)의 문화적 배경이 (A)의 과학적 증거보다 먼저 나오면 설득력 약함"
    },
    "_type": "order",
    "given_sentence": null
  },
  {
    "type": "글의 순서",
    "passage": "The human brain uses approximately 20 percent of the body's total energy, despite comprising only 2 percent of body weight. Scientists have long wondered why such a small organ consumes so much fuel.\n\n(A) Recent studies suggest that maintaining the brain's neural networks requires constant energy expenditure. Neurons must continuously generate electrical signals and transport molecules across membranes, both of which demand significant ATP production. Even during sleep, the brain remains metabolically active.\n\n(B) One unexpected finding is that the brain's glucose consumption doesn't vary dramatically between different cognitive tasks. Whether a person is solving complex problems or resting quietly, energy usage remains relatively stable. This suggests that most energy goes toward maintaining basic brain functions rather than powering specific thoughts.\n\n(C) Understanding the brain's energy demands has important implications for treating neurological diseases. Conditions like Alzheimer's and Parkinson's involve metabolic dysfunction in brain cells. Researchers are now investigating whether targeting energy production could offer new therapeutic approaches.",
    "choices": [
      "①(A)-(B)-(C)",
      "②(B)-(A)-(C)",
      "③(B)-(C)-(A)",
      "④(C)-(A)-(B)",
      "⑤(C)-(B)-(A)"
    ],
    "answer": 0,
    "explanation": "도입부에서 뇌가 왜 많은 에너지를 소비하는지의 의문 제기. (A)는 신경망 유지에 지속적 에너지가 필요하다는 과학적 설명으로 질문에 직접 답변. (B)는 흥미로운 발견으로 뇌 에너지 소비의 특성을 추가 설명. (C)는 이러한 지식의 의료적 응용으로 결론.",
    "wrong_explanations": {
      "②": "(B)의 예상 밖의 발견이 (A)의 기본 설명보다 먼저 나오면 혼란스러움",
      "③": "질문 직후 (B)의 특수한 발견이 나오면 기본 원리 설명이 먼저 필요하므로 부자연스러움",
      "④": "도입부 질문 직후 의료적 함의부터 나오면 과학적 근거 없이 논의됨",
      "⑤": "질문의 답변 순서가 역순이 되어 논리적 흐름 붕괴"
    },
    "_type": "order",
    "given_sentence": null
  },
  {
    "type": "글의 순서",
    "passage": "Throughout history, cities have faced challenges related to waste management and urban sanitation. In the 21st century, these problems have reached critical levels as populations continue to grow.\n\n(A) Urban planners are now turning to innovative solutions, including vertical farms and green roofs. Such initiatives not only reduce waste but also improve air quality and provide residents with fresh produce. Cities like Singapore and Copenhagen have become models for sustainable urban development.\n\n(B) The accumulation of waste in cities has multiple negative effects on both human health and the environment. Landfills release methane, a potent greenhouse gas, while improper waste disposal contaminates groundwater and soil. Urban areas with inadequate waste management systems often experience higher rates of disease and respiratory problems.\n\n(C) Governments worldwide are implementing strict regulations to combat these issues, including mandatory recycling programs and bans on single-use plastics. Corporate partnerships and community education campaigns have proven effective in changing consumer behavior. Early results show that cities adopting comprehensive waste reduction strategies can decrease overall waste by up to 30 percent.",
    "choices": [
      "①(A)-(B)-(C)",
      "②(A)-(C)-(B)",
      "③(B)-(C)-(A)",
      "④(B)-(A)-(C)",
      "⑤(C)-(B)-(A)"
    ],
    "answer": 3,
    "explanation": "도입부에서 도시 폐기물 관리의 심각성 언급. (B)는 그 부정적 영향을 구체적으로 설명하여 문제의 심각성을 드러냄. (C)는 정부의 규제 및 정책 대응을 제시. (A)는 도시 계획가들의 혁신적 해결책으로 앞선 노력들의 구체적 사례 제시.",
    "wrong_explanations": {
      "①": "(A)의 창의적 솔루션이 (B)의 문제 설명보다 먼저 나오면 배경 없이 답변만 제시되는 꼴",
      "②": "(C)의 정책이 (B)의 문제보다 먼저 나와 원인-결과 관계 역전",
      "③": "(B) 다음 (A)가 바로 오면 (C)의 정부 대응이 고립되어 보임",
      "⑤": "해결책들이 문제 설명보다 먼저 나와 논리적 흐름 완전 붕괴"
    },
    "_type": "order",
    "given_sentence": null
  },
  {
    "type": "글의 순서",
    "passage": "Sleep is often viewed as a luxury in modern society, with many people treating it as expendable in pursuit of productivity. Research increasingly challenges this perspective and highlights sleep's critical role in maintaining health.\n\n(A) During sleep, the brain consolidates memories and clears out metabolic waste products that accumulate during waking hours. A protein called glymphatic system actively removes toxins while we sleep, preventing neurological damage. Without adequate sleep, these toxins accumulate and impair cognitive function over time.\n\n(B) The consequences of chronic sleep deprivation extend beyond mental fatigue and include serious health risks. People who consistently sleep fewer than six hours per night show increased susceptibility to heart disease, diabetes, and obesity. Moreover, sleep-deprived individuals exhibit weakened immune responses, making them more vulnerable to infections.\n\n(C) Organizations and educational institutions are beginning to recognize the importance of rest and are revising policies accordingly. Some companies now offer nap rooms, while schools have adjusted start times to align with adolescent sleep patterns. These changes reflect a growing understanding that prioritizing sleep enhances overall performance and well-being.",
    "choices": [
      "①(A)-(B)-(C)",
      "②(A)-(C)-(B)",
      "③(B)-(A)-(C)",
      "④(C)-(A)-(B)",
      "⑤(C)-(B)-(A)"
    ],
    "answer": 1,
    "explanation": "도입부에서 수면의 중요성에 대한 인식 부족 언급. (A)는 수면 중 뇌의 구체적 기능을 설명하여 수면이 왜 중요한지 보여줌. (C)는 조직들이 이러한 중요성을 인정하고 정책을 변화시키는 사례 제시. (B)를 끼워 넣으면 기능 설명 중간에 부작용 나열로 어색해짐.",
    "wrong_explanations": {
      "①": "(B)의 부정적 결과가 (A)의 긍정적 기능보다 먼저 나오면 순서 부자연스러움",
      "③": "수면 부족의 결과가 수면의 기능보다 먼저 설명되어 인과관계 불명확",
      "④": "도입부 직후 정책 변화부터 언급하면 그 배경이 아직 설명되지 않아 부정확",
      "⑤": "정책과 결과가 기능 설명보다 먼저 나와 완전히 역순의 논리"
    },
    "_type": "order",
    "given_sentence": null
  },
  {
    "type": "글의 순서",
    "passage": "In recent decades, the concept of artificial intelligence has moved from science fiction to everyday reality, raising important questions about its impact on society. Businesses, governments, and individuals must navigate this transformation thoughtfully.\n\n(A) AI systems already perform critical functions in healthcare, transportation, and financial services. Diagnostic algorithms can detect diseases earlier than human doctors, autonomous vehicles promise to reduce traffic accidents, and predictive analytics help prevent fraud. Benefits like these demonstrate AI's potential to solve pressing societal challenges.\n\n(B) Simultaneously, AI development raises significant concerns about employment displacement and privacy violations. Workers in routine jobs face obsolescence as machines grow more capable, while data collection practices associated with AI systems threaten personal privacy. Ethical questions about algorithmic bias and accountability remain largely unresolved in current regulatory frameworks.\n\n(C) Meeting these challenges requires coordinated efforts among technologists, policymakers, and the public. Establishing transparent standards for AI development, investing in worker retraining programs, and creating enforceable privacy protections are essential steps. Societies that act proactively can harness AI's benefits while minimizing its potential harms.",
    "choices": [
      "①(A)-(B)-(C)",
      "②(B)-(A)-(C)",
      "③(C)-(A)-(B)",
      "④(B)-(C)-(A)",
      "⑤(C)-(B)-(A)"
    ],
    "answer": 0,
    "explanation": "도입부에서 AI의 현실화와 신중한 대처 필요성 제시. (A)는 AI의 긍정적 사례와 잠재력을 보여줌. (B)는 그 반대편 우려사항과 문제점을 제시하는 균형잡힌 논의. (C)는 양쪽 입장을 고려한 해결책 제시로 결론.",
    "wrong_explanations": {
      "②": "문제점을 먼저 제시하고 장점을 설명하면 부정적 편향이 생김",
      "③": "도입부 직후 해결책부터 나오면 논쟁 자체가 빠져서 불완전",
      "④": "문제와 해결책이 먼저 나오고 장점이 나중에 나오면 불균형적",
      "⑤": "해결책-문제-장점 순서는 논리적 인과관계 완전 파괴"
    },
    "_type": "order",
    "given_sentence": null
  },
  {
    "type": "글의 순서",
    "passage": "Many companies struggle with employee turnover, losing valuable talent to competitors every year. Understanding the root causes can help organizations retain their best workers.\n\n(A) Research shows that career advancement opportunities rank among the top reasons employees choose to stay at a company. When workers see a clear path to promotion and skill development, they become more invested in their organization's success. Companies that provide mentorship programs and training initiatives experience significantly lower turnover rates than those that don't.\n\n(B) Another critical factor is workplace culture and management quality. Employees who feel respected and supported by their supervisors are more likely to remain loyal. Creating an inclusive environment where team members can voice opinions without fear of retaliation builds trust and strengthens workplace relationships. Poor management, conversely, drives even talented workers to seek opportunities elsewhere.\n\n(C) To address these issues effectively, organizations should conduct regular employee satisfaction surveys and act on the feedback received. Implementing competitive salaries, flexible work arrangements, and recognition programs also demonstrates commitment to employee wellbeing. When companies invest in their people, retention improves dramatically.",
    "choices": [
      "①(A)-(B)-(C)",
      "②(A)-(C)-(B)",
      "③(B)-(A)-(C)",
      "④(B)-(C)-(A)",
      "⑤(C)-(A)-(B)"
    ],
    "answer": 2,
    "explanation": "도입부에서 직원 이탈의 원인을 이해하는 것의 중요성을 제시합니다. (B)는 업무 환경과 관리자 품질을 첫 번째 요인으로 소개하고, (A)는 경력 발전 기회를 두 번째 요인으로 제시합니다. (C)는 이러한 문제들을 해결하기 위한 구체적인 방안들을 제시하므로 결론부 역할을 합니다. B→A→C 순서가 논리적입니다.",
    "wrong_explanations": {
      "0": "(A)-(B)-(C)로 배열하면 경력 발전 기회부터 시작하는데, 도입부의 '원인 이해'와의 연결이 부자연스럽습니다.",
      "1": "(A)-(C)-(B)는 해결책을 원인보다 먼저 제시하므로 논리 순서가 틀립니다.",
      "3": "(B)-(C)-(A)는 중간에 해결책을 먼저 제시한 후 추가 원인을 제시하므로 구조가 어색합니다.",
      "4": "(C)-(A)-(B)는 결론부터 시작하므로 전개 순서가 맞지 않습니다."
    },
    "_type": "order",
    "given_sentence": null
  },
  {
    "type": "글의 순서",
    "passage": "Climate change is accelerating at an unprecedented rate, forcing governments and businesses to rethink their environmental strategies. One promising approach is the transition to renewable energy sources.\n\n(A) Wind and solar power have become increasingly cost-competitive with fossil fuels in recent years. Installation costs have dropped by 90% and 89% respectively over the past decade, making renewable energy accessible to developing nations. Many countries now recognize that investing in clean energy is both an environmental and economic imperative.\n\n(B) Despite these advantages, significant challenges remain in widespread adoption. Energy storage technology must improve to handle intermittent power supply, and infrastructure upgrades are needed to support grid modernization. Additionally, political resistance from fossil fuel industries continues to slow the transition process in many regions.\n\n(C) Nations like Denmark and Costa Rica have already demonstrated that high renewable energy penetration is achievable. These success stories provide blueprints for other countries pursuing similar goals. By learning from these examples and addressing current barriers, global renewable energy adoption can accelerate substantially within the next decade.",
    "choices": [
      "①(A)-(B)-(C)",
      "②(A)-(C)-(B)",
      "③(B)-(A)-(C)",
      "④(B)-(C)-(A)",
      "⑤(C)-(B)-(A)"
    ],
    "answer": 0,
    "explanation": "도입부에서 신재생에너지 전환의 필요성을 제시합니다. (A)는 재생에너지의 경제성과 비용 감소를 긍정적 근거로 제시하고, (B)는 이러한 장점에도 불구하고 남아있는 과제들을 설명합니다. (C)는 구체적 성공 사례를 제시하며 희망적인 결론을 제공합니다. 긍정적 측면→도전 과제→성공 사례 순서가 자연스럽습니다.",
    "wrong_explanations": {
      "1": "(A)-(C)-(B)는 성공 사례 후에 문제점을 제시하므로 결론 부분의 희망성이 훼손됩니다.",
      "2": "(B)-(A)-(C)는 먼저 도전 과제를 제시하므로 도입부의 긍정적 흐름과 맞지 않습니다.",
      "3": "(B)-(C)-(A)는 문제→성공 사례→경제성 순서로 논리가 산산이 흩어집니다.",
      "4": "(C)-(B)-(A)는 사례와 도전 과제를 먼저 제시한 후 경제성을 설명하므로 부자연스럽습니다."
    },
    "_type": "order",
    "given_sentence": null
  },
  {
    "type": "글의 순서",
    "passage": "Social media has revolutionized how people communicate, but it has also introduced new psychological challenges. Understanding the mental health implications is crucial for users and platforms alike.\n\n(A) The constant comparison with others' curated online lives creates a breeding ground for anxiety and low self-esteem. Studies reveal that individuals who spend excessive time on social platforms report higher rates of depression and loneliness. The dopamine-driven feedback loops designed into these apps intensify these negative psychological effects, trapping users in cycles of validation-seeking behavior.\n\n(B) Recognizing these dangers, some platforms have begun implementing features to promote healthier usage patterns. Instagram has introduced the option to hide like counts, while TikTok and YouTube limit screen time for younger users. These interventions represent a shift toward prioritizing mental wellbeing over engagement metrics. Yet, critics argue these measures remain superficial without fundamental business model changes.\n\n(C) To protect mental health effectively, users must develop personal strategies and awareness. Setting daily time limits, curating feeds mindfully, and taking regular digital detoxes can significantly improve psychological wellbeing. Education about social media literacy should begin in schools, helping young people navigate these platforms responsibly before addiction develops.",
    "choices": [
      "①(A)-(B)-(C)",
      "②(A)-(C)-(B)",
      "③(B)-(A)-(C)",
      "④(C)-(A)-(B)",
      "⑤(C)-(B)-(A)"
    ],
    "answer": 0,
    "explanation": "도입부에서 소셜 미디어의 정신건강 영향을 다루겠다고 제시합니다. (A)는 부정적 심리 영향을 구체적으로 설명하고, (B)는 플랫폼들의 개선 노력을 제시합니다. (C)는 개인 사용자들이 취할 수 있는 실천적 전략을 제안합니다. 문제 제시→플랫폼 차원의 대응→개인 차원의 해결책 순서가 자연스럽습니다.",
    "wrong_explanations": {
      "1": "(A)-(C)-(B)는 개인 전략을 플랫폼 개선 노력보다 먼저 제시하므로 구조적 흐름이 어색합니다.",
      "2": "(B)-(A)-(C)는 해결책을 문제보다 먼저 제시하므로 인과 관계가 맞지 않습니다.",
      "3": "(C)-(A)-(B)는 개인 전략부터 시작하므로 전개 순서가 뒤바뀝니다.",
      "4": "(C)-(B)-(A)는 모든 순서를 역순으로 배열하므로 논리 흐름이 완전히 틀립니다."
    },
    "_type": "order",
    "given_sentence": null
  },
  {
    "type": "요지/주제",
    "passage": "Modern consumers are increasingly aware of their environmental impact and are making purchasing decisions based on sustainability. Companies that once ignored environmental concerns are now competing to offer eco-friendly products. However, research suggests that many consumers engage in what researchers call 'green washing'—they purchase environmentally friendly products while maintaining overall consumption patterns that are harmful to the planet. For instance, a person might buy organic cotton clothes while still buying excessive amounts of clothing. The real solution requires a fundamental shift in consumer behavior, not just switching to greener products. Experts argue that true sustainability demands reducing overall consumption, repairing items instead of replacing them, and supporting businesses with transparent supply chains. Without addressing the root cause of overconsumption, green products become merely a way for consumers to feel good about themselves without making meaningful environmental changes. The challenge for companies and consumers alike is to move beyond superficial environmental measures toward genuine sustainability practices.",
    "choices": [
      "①환경 친화적 제품의 종류와 특징",
      "②겉보기만 친환경적인 소비 행태의 한계와 진정한 지속 가능성의 필요성",
      "③기업의 환경 마케팅 전략이 소비자에게 미치는 긍정적 영향",
      "④친환경 제품이 전통 제품보다 우수한 이유",
      "⑤소비자의 구매력이 환경 오염을 감소시키는 방법"
    ],
    "answer": 1,
    "explanation": "이 지문은 많은 소비자들이 친환경 제품을 구매하면서도 전반적인 과다 소비 패턴은 유지하는 '그린 워싱'의 문제점을 지적합니다. 지문의 핵심은 단순히 친환경 제품으로 전환하는 것만으로는 부족하며, 소비 자체를 줄이고 투명한 공급망을 지원하는 등 진정한 지속 가능성으로의 전환이 필요하다는 것입니다.",
    "wrong_explanations": {
      "0": "지문은 친환경 제품의 종류를 설명하지 않으며, 제품 자체보다는 소비 행태를 비판합니다.",
      "2": "지문은 환경 마케팅의 긍정적 영향이 아니라 그린 워싱의 한계를 지적합니다.",
      "3": "지문은 친환경 제품의 우월성을 주장하지 않으며, 오히려 그러한 제품만으로는 부족함을 강조합니다.",
      "4": "지문은 소비자의 구매력이 오염을 감소시킨다고 보지 않으며, 구매력 자체의 감소를 제안합니다."
    },
    "_type": "main_idea",
    "given_sentence": null
  },
  {
    "type": "요지/주제",
    "passage": "The concept of 'slow living' has gained popularity in recent years as people seek to escape the demands of modern life. Unlike the fast-paced culture that emphasizes productivity and efficiency, slow living encourages individuals to intentionally reduce their pace and focus on quality over quantity. This movement encompasses various aspects of daily life, from food preparation to work schedules. Advocates believe that by slowing down, people can develop deeper relationships, improve mental health, and reconnect with their communities. However, critics argue that slow living is a luxury available only to the wealthy who can afford to work less and spend more time on leisure activities. Others point out that the movement overlooks systemic issues like poverty and inequality, which force many people to maintain exhausting work schedules simply to survive. While slow living offers valuable insights about the importance of rest and reflection, applying it universally without addressing broader social and economic challenges remains problematic. True change requires not just individual lifestyle adjustments but also systemic reforms.",
    "choices": [
      "①느린 생활이 부자들을 위한 사치품인 이유",
      "②현대인의 삶의 질 향상을 위한 느린 생활의 긍정적 효과",
      "③느린 생활 운동의 이점과 그것이 간과하는 사회경제적 문제점",
      "④빠른 생활과 느린 생활 중 어느 것이 더 나은지",
      "⑤사회 개혁 없이 개인의 라이프스타일만 변화시키는 방법"
    ],
    "answer": 2,
    "explanation": "이 지문은 느린 생활 운동의 긍정적 측면(더 깊은 관계, 정신 건강 개선)을 인정하면서도, 빈곤과 불평등이라는 체계적 문제를 간과한다는 비판을 제시합니다. 진정한 변화는 개인적 조정뿐 아니라 체계적 개혁을 요구한다는 것이 요지입니다.",
    "wrong_explanations": {
      "0": "지문은 느린 생활이 사치품이라는 주장도 제시하지만, 이것만이 주요 요지는 아닙니다.",
      "1": "지문은 느린 생활의 긍정적 효과만을 다루지 않으며, 비판점도 함께 제시합니다.",
      "3": "지문은 어느 한 쪽이 더 나은지를 판단하지 않으며, 맥락에 따른 문제점을 지적합니다.",
      "4": "지문은 개인의 라이프스타일 변화만으로는 부족하다고 주장하므로, 선택지 5는 지문의 요지와 맞지 않습니다."
    },
    "_type": "main_idea",
    "given_sentence": null
  },
  {
    "type": "요지/주제",
    "passage": "Memory is often viewed as a recording device that accurately captures events from our past. However, neuroscientists have discovered that memory is far more reconstructive and fragile than previously believed. Each time we recall a memory, we are not simply retrieving a stored file but actively reconstructing it based on current beliefs, emotions, and available information. This reconstruction process means that our memories are constantly being modified and reshaped. Furthermore, studies show that false memories can be implanted through suggestion and imagination exercises, demonstrating how malleable memory truly is. Eyewitness testimony, once considered highly reliable in legal proceedings, is now recognized as subject to significant distortion. The implications are profound: our sense of personal identity, which relies heavily on autobiographical memory, may be less stable than we assume. This does not mean memories are worthless; rather, it highlights the importance of corroborating evidence and multiple perspectives when reconstructing historical events or evaluating testimonies. Understanding memory's limitations helps us become more humble about what we think we know about our past.",
    "choices": [
      "①기억을 정확하게 저장하고 검색하는 뇌의 메커니즘",
      "②기억이 단순한 기록이 아니라 재구성되는 과정과 그 함의",
      "③거짓 기억이 형성되는 심리학적 이유",
      "④개인의 정체성이 자전적 기억에 전적으로 의존하는 이유",
      "⑤법정에서 목격자 증언을 신뢰해야 하는 이유"
    ],
    "answer": 1,
    "explanation": "이 지문의 핵심은 기억이 정확한 기록이 아니라 현재의 신념, 감정, 이용 가능한 정보에 기반하여 능동적으로 재구성된다는 것입니다. 이러한 기억의 재구성 특성이 개인의 정체성, 법적 증거, 과거 재구성에 미치는 중요한 함의를 제시합니다.",
    "wrong_explanations": {
      "0": "지문은 뇌가 기억을 정확하게 저장한다는 관점을 비판합니다.",
      "2": "거짓 기억의 형성은 예시일 뿐, 지문의 주요 요지가 아닙니다.",
      "3": "개인의 정체성에 대한 설명은 기억의 재구성 특성에서 비롯된 함의일 뿐입니다.",
      "4": "지문은 목격자 증언을 신뢰해야 한다고 주장하지 않으며, 오히려 그 한계를 지적합니다."
    },
    "_type": "main_idea",
    "given_sentence": null
  },
  {
    "type": "요지/주제",
    "passage": "Urban planning has traditionally focused on maximizing efficiency and functionality, prioritizing vehicle movement and economic development. However, growing evidence suggests that cities designed around human-scale considerations—such as walkability, public gathering spaces, and access to nature—produce happier, healthier residents. Recent studies demonstrate that neighborhoods with mixed-use development, pedestrian-friendly streets, and parks have lower rates of depression, obesity, and stress-related illnesses. Barcelona's superblocks and Copenhagen's cycling infrastructure represent successful examples where urban design prioritizes human well-being. Yet many cities continue to expand highways and shopping malls while eliminating public squares and green spaces. The resistance often stems from economic interests: developers profit from sprawling developments, and automobile industries benefit from car-dependent infrastructure. However, this short-term economic thinking ignores long-term costs, including healthcare expenses for sedentary populations and environmental damage. Progressive cities are beginning to recognize that investing in human-centered design yields better public health outcomes and community satisfaction. The challenge is not technical but political—shifting priorities from corporate interests to human welfare requires courageous policy decisions.",
    "choices": [
      "①고효율 도시 설계가 경제 발전에 미치는 긍정적 영향",
      "②인간 중심의 도시 설계가 주민의 건강과 행복에 미치는 영향",
      "③도시 계획에서 도로 확장의 필요성",
      "④자동차 산업이 도시 개발에 기여하는 역할",
      "⑤공원과 녹지를 제거해야 하는 경제적 이유"
    ],
    "answer": 1,
    "explanation": "이 지문은 전통적인 효율성 중심의 도시 계획에서 벗어나 보행 가능성, 공공 공간, 자연 접근성 등 인간 중심의 설계가 주민의 정신 건강, 신체 건강, 스트레스 감소에 미치는 긍정적 영향을 강조합니다. 정치적 결단으로 기업 이익에서 인간 복지로의 전환이 필요하다는 것이 핵심입니다.",
    "wrong_explanations": {
      "0": "지문은 오히려 기존의 효율성 중심 설계를 비판합니다.",
      "2": "지문은 도로 확장의 필요성을 주장하지 않으며, 오히려 그것이 문제임을 지적합니다.",
      "3": "자동차 산업의 기여도는 부정적 맥락에서만 언급됩니다.",
      "4": "지문은 공원과 녹지 제거를 정당화하지 않으며, 오히려 그것이 주민의 건강을 해친다고 주장합니다."
    },
    "_type": "main_idea",
    "given_sentence": null
  },
  {
    "type": "요지/주제",
    "passage": "The rise of artificial intelligence has sparked both optimism and concern about its impact on employment. Optimists argue that AI will create new job categories and that technological unemployment is a myth, pointing to historical precedent where previous innovations ultimately generated more jobs. Pessimists counter that AI fundamentally differs from past technologies because of its general-purpose nature and learning capabilities, potentially automating cognitive work previously thought secure from technological disruption. However, evidence suggests the real challenge is not whether jobs will exist but whether the transition period will be managed equitably. During previous technological transitions, many workers experienced severe hardship, displacement, and years of unemployment despite eventual overall job growth. Low-skilled and minority workers were disproportionately affected, while wealthier populations benefited from the new opportunities. Addressing AI-driven change requires more than faith in market forces; proactive policies such as education programs, income support, and labor market transition assistance are essential. Countries that successfully navigate technological change tend to invest heavily in social safety nets and worker retraining. The question is not whether AI will displace jobs but whether societies will prepare adequate support systems for those affected during the transition.",
    "choices": [
      "①인공지능이 새로운 일자리를 창출할 수 있는 방법",
      "②과거 기술 혁신과 인공지능이 고용에 미치는 영향의 동일성",
      "③인공지능으로 인한 실업보다 중요한 공정한 전환 관리의 필요성",
      "④기술 실업이 신화라는 근거",
      "⑤자유 시장이 인공지능 시대의 일자리 문제를 해결하는 방법"
    ],
    "answer": 2,
    "explanation": "이 지문의 핵심은 AI로 인한 실업 자체보다, 전환 기간 동안의 불공정한 영향—특히 저숙련 및 소수자 집단의 고통—을 관리하는 것의 중요성입니다. 시장의 자율성이 아니라 교육, 소득 지원, 노동 시장 전환 지원 같은 능동적 정책이 필수라는 것이 요지입니다.",
    "wrong_explanations": {
      "0": "지문은 AI가 일자리를 창출하는 방법을 설명하지 않으며, 전환 관리의 중요성을 강조합니다.",
      "1": "지문은 오히려 AI와 과거 기술의 근본적 차이를 인정하면서도, 전환 관리가 더 중요함을 주장합니다.",
      "3": "지문은 기술 실업이 신화라는 낙관주의를 비판하며, 전환 기간의 고통을 강조합니다.",
      "4": "지문은 자유 시장 힘만으로는 부족하며, 적극적 정책이 필요하다고 주장합니다."
    },
    "_type": "main_idea",
    "given_sentence": null
  }
];
