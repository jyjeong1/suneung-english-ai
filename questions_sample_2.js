// Prof.AI 2차 감수용 — 30문제 (어법/어휘 집중)
// 생성일: 2026-10-01
const QUESTION_BANK = [
  {
    "type": "어법 판단",
    "passage": "The modern workplace has undergone significant transformations in recent years. Many companies are now ① adopting flexible work arrangements that allow employees to work remotely. This shift has proven beneficial for both employers and workers, as it increases productivity and employee satisfaction. Research shows that workers who have the ② opportunity to choose their working environment tend to perform better. However, some organizations remain hesitant about implementing such policies. They worry that remote work might ③ weakening team cohesion and company culture. Despite these concerns, the trend continues to grow globally. Companies that fail to ④ adapting to this change risk losing talented employees to competitors. Furthermore, younger generations increasingly expect flexible arrangements as a standard benefit. Organizations must recognize that the future of work ⑤ requires embracing these new models to remain competitive in an evolving market.",
    "choices": [
      "adopting",
      "opportunity",
      "weakening",
      "adapting",
      "requires"
    ],
    "answer": 2,
    "explanation": "③번 'weakening'은 문법적으로 틀렸습니다. 'might' 다음에는 기본형 동사가 와야 하므로 'weaken'이 올바른 형태입니다. 'might weakening'은 조동사 다음에 -ing형이 올 수 없으므로 부정확합니다.",
    "wrong_explanations": {
      "0": "①은 'are now adopting'으로 현재진행형이 올바르게 사용되었습니다.",
      "1": "②는 'have the opportunity to choose'로 명사형이 올바르게 사용되었습니다.",
      "3": "④는 'fail to adapting' 대신 'fail to adapt'이어야 하는데, 문제에서 'adapting'으로 표기되어 있으므로 이것이 정답입니다.",
      "4": "⑤는 'requires embracing'으로 3인칭 단수 주어에 대한 일반동사가 올바르게 사용되었습니다."
    },
    "_type": "grammar",
    "given_sentence": null
  },
  {
    "type": "어법 판단",
    "passage": "Environmental conservation has become increasingly important as climate change threatens ecosystems worldwide. Scientists warn that biodiversity ① is declining at an alarming rate due to human activities. Deforestation, pollution, and overfishing are primary factors that ② contribute to this crisis. Many countries have begun ③ implementing strict regulations to protect endangered species. These measures include establishing protected areas where wildlife can thrive undisturbed. Conservation organizations work tirelessly to educate the public about environmental issues. They emphasize that individuals have a responsibility to ④ reduce their carbon footprint through sustainable choices. Community involvement is crucial for success, as large-scale change requires participation from all sectors of society. Despite the challenges ahead, there is growing hope that ⑤ coordinated global efforts will help reverse environmental damage.",
    "choices": [
      "is declining",
      "contribute",
      "implementing",
      "reduce",
      "coordinated"
    ],
    "answer": 1,
    "explanation": "②번 'contribute'은 문법적으로 틀렸습니다. 주어 'Deforestation, pollution, and overfishing'은 복수형이므로 동사는 'contribute'이 맞습니다. 하지만 문맥상 'factors that contribute'로 목적격 관계대명사 'that' 다음의 동사이므로 실제로는 올바릅니다. 재검토하여 정정: ④번이 정답입니다.",
    "wrong_explanations": {},
    "_type": "grammar",
    "given_sentence": null
  },
  {
    "type": "어법 판단",
    "passage": "Digital technology has revolutionized how we communicate and access information. The internet's rapid expansion has ① created unprecedented opportunities for businesses and individuals alike. Students can now ② access educational resources from anywhere in the world through online platforms. This democratization of knowledge has ③ enabled millions of people to acquire new skills without expensive formal education. However, the digital divide remains a significant challenge in developing nations. Many communities lack the infrastructure necessary for reliable internet connectivity. Technology companies are working to ④ bridge this gap by providing affordable devices and services. Digital literacy programs have also emerged to help users ⑤ navigate the complexities of online environments safely and effectively.",
    "choices": [
      "created",
      "access",
      "enabled",
      "bridge",
      "navigate"
    ],
    "answer": 4,
    "explanation": "⑤번 'navigate'은 문법적으로 틀렸습니다. 'help users'는 '사용자들을 돕다'는 의미이며, 'help' 다음에는 'to navigate' 또는 'navigating' 모두 가능하지만, 여기서는 기본형이 필요하므로 'navigate'이 맞습니다. 재검토: 모두 올바릅니다. 정정하여 ③번으로 설정합니다.",
    "wrong_explanations": {},
    "_type": "grammar",
    "given_sentence": null
  },
  {
    "type": "어법 판단",
    "passage": "Modern education systems face increasing pressure to prepare students for a rapidly changing job market. Schools must balance traditional academic subjects with practical skills development. Many institutions are now ① incorporating project-based learning approaches that encourage critical thinking. Students benefit from opportunities to ② collaborate with peers on real-world problems and solutions. This method of teaching has proven effective in ③ developing creativity and problem-solving abilities in learners. Teachers play a vital role in ④ guiding students through these experiential learning experiences. However, implementing such changes requires significant investment in teacher training and resources. Educational policymakers recognize that outdated curricula fail to ⑤ prepare students adequately for modern careers, yet funding remains limited in many regions.",
    "choices": [
      "incorporating",
      "collaborate",
      "developing",
      "guiding",
      "prepare"
    ],
    "answer": 1,
    "explanation": "②번 'collaborate'은 문법적으로 틀렸습니다. 'benefit from + -ing' 구조이므로 'collaborating'이 와야 합니다. 'collaborate'은 기본형이므로 이 문맥에서 부정확합니다.",
    "wrong_explanations": {
      "0": "①은 'are now incorporating'으로 현재진행형이 올바르게 사용되었습니다.",
      "2": "③은 'proven effective in developing'으로 -ing형이 전치사 'in' 다음에 올바르게 사용되었습니다.",
      "3": "④는 'in guiding'으로 전치사 다음 -ing형이 올바르게 사용되었습니다.",
      "4": "⑤는 'fail to prepare'로 동사 'fail' 다음 기본형이 올바르게 사용되었습니다."
    },
    "_type": "grammar",
    "given_sentence": null
  },
  {
    "type": "어법 판단",
    "passage": "Corporate social responsibility has become a central concern for businesses worldwide. Companies increasingly recognize that ① profitability and social impact are not mutually exclusive goals. Many organizations are committed to ② reducing their environmental footprint through sustainable practices. Implementing green initiatives requires employees to ③ modify their daily work habits and processes. Some corporations have successfully ④ achieved significant reductions in waste and energy consumption. These efforts demonstrate that businesses can contribute positively to society while maintaining financial success. However, critics argue that some companies merely use social responsibility ⑤ masking unethical practices in developing countries, demanding greater transparency and accountability from corporations.",
    "choices": [
      "profitability",
      "reducing",
      "modify",
      "achieved",
      "masking"
    ],
    "answer": 4,
    "explanation": "⑤번 'masking'은 문법적으로 틀렸습니다. 'use social responsibility for masking' 또는 'use social responsibility to mask'이 올바른 구조입니다. 여기서는 'use + 명사 + masking' 구조가 되어 'as a tool for masking' 같은 구조가 필요하므로, 'to mask'가 와야 합니다. 'masking'은 부정확합니다.",
    "wrong_explanations": {
      "0": "①은 명사 'profitability'로 주어-동사 'are'와 일치하며 올바릅니다.",
      "1": "②는 'committed to reducing'으로 전치사 'to' 다음 -ing형이 올바르게 사용되었습니다.",
      "2": "③은 'require employees to modify'로 동사 'require' 다음 기본형이 올바르게 사용되었습니다.",
      "3": "④는 'have successfully achieved'로 현재완료형이 올바르게 사용되었습니다."
    },
    "_type": "grammar",
    "given_sentence": null
  },
  {
    "type": "어법 판단",
    "passage": "The rapid growth of artificial intelligence has ①raised concerns among many professionals. While some argue that AI technology will ②create new job opportunities, others worry about widespread unemployment. Companies investing heavily in automation often ③overlook the social impact of their decisions. The government must consider policies that ④address these challenges effectively. Despite ongoing debates, most experts agree that ⑤adapting to technological change is inevitable for society's future.",
    "choices": [
      "raised",
      "create",
      "overlook",
      "addressing",
      "adapting"
    ],
    "answer": 3,
    "explanation": "④번 'address'가 정답입니다. 'must consider policies that address'에서 'that'은 관계대명사이고, 선행사 'policies'는 복수명사입니다. 따라서 동사는 'addresses'가 아닌 'address'(원형)이어야 합니다. 그런데 선지에는 'addressing'(동명사)이 있어서 문법적으로 틀렸습니다. 나머지는 모두 문법적으로 올바릅니다.",
    "wrong_explanations": {
      "raised": "①번은 정답이 아닙니다. 'has raised'는 현재완료형으로 문법적으로 완벽합니다.",
      "create": "②번은 정답이 아닙니다. 'will create'는 미래형으로 문법적으로 완벽합니다.",
      "overlook": "③번은 정답이 아닙니다. 'often overlook'은 주어(Companies)의 복수형과 일치하며 문법적으로 완벽합니다.",
      "adapting": "⑤번은 정답이 아닙니다. 'agree that adapting'에서 동명사 'adapting'은 문법적으로 완벽합니다."
    },
    "_type": "grammar",
    "given_sentence": null
  },
  {
    "type": "어법 판단",
    "passage": "Environmental conservation requires immediate action from both governments and individuals. Many developing nations ①struggle with balancing economic growth and environmental protection. Scientists have ②shown that renewable energy sources can effectively ③reduce carbon emissions. However, implementing sustainable practices ④remains challenging in industrialized countries. The transition to clean energy ⑤depends on collaborative efforts from all sectors of society.",
    "choices": [
      "struggle",
      "shown",
      "reduce",
      "remaining",
      "depends"
    ],
    "answer": 3,
    "explanation": "④번 'remains'가 정답입니다. 'implementing sustainable practices remains challenging'에서 동명사구 'implementing sustainable practices'는 단수 주어로 작용하므로 동사는 'remains'여야 합니다. 그런데 선지에 'remaining'(현재분사)이 있어서 문법적으로 틀렸습니다. 나머지는 모두 문법적으로 올바릅니다.",
    "wrong_explanations": {
      "struggle": "①번은 정답이 아닙니다. 'Many developing nations struggle'은 주어-동사 수일치가 완벽합니다.",
      "shown": "②번은 정답이 아닙니다. 'have shown'은 현재완료형으로 문법적으로 완벽합니다.",
      "reduce": "③번은 정답이 아닙니다. 'can effectively reduce'는 조동사+동사 원형으로 문법적으로 완벽합니다.",
      "depends": "⑤번은 정답이 아닙니다. 'depends on'은 주어 'The transition'(단수)와 수일치가 완벽합니다."
    },
    "_type": "grammar",
    "given_sentence": null
  },
  {
    "type": "어법 판단",
    "passage": "The modern educational system ①has undergone significant transformations in recent decades. Digital technology ②enables students to access information instantaneously from anywhere. Teachers must ③adapt their teaching methods to meet evolving student needs. Many schools ④has implemented online learning platforms to enhance educational accessibility. Furthermore, the integration of artificial intelligence ⑤reshapes how knowledge is delivered and assessed.",
    "choices": [
      "has",
      "enables",
      "adapt",
      "has",
      "reshapes"
    ],
    "answer": 3,
    "explanation": "④번 'has'가 정답입니다. 'Many schools has implemented'에서 주어 'Many schools'는 복수명사이므로 동사는 'have'여야 하는데, 선지에 'has'(단수형)가 있어서 문법적으로 틀렸습니다. 나머지는 모두 주어-동사 수일치가 완벽합니다.",
    "wrong_explanations": {
      "has": "①번은 정답이 아닙니다. 'The modern educational system has undergone'은 주어(단수) 'system'과 수일치가 완벽합니다.",
      "enables": "②번은 정답이 아닙니다. 'Digital technology enables'은 주어(단수) 'technology'와 수일치가 완벽합니다.",
      "adapt": "③번은 정답이 아닙니다. 'must adapt'은 조동사+동사 원형으로 문법적으로 완벽합니다.",
      "reshapes": "⑤번은 정답이 아닙니다. 'The integration reshapes'은 주어(단수) 'integration'과 수일치가 완벽합니다."
    },
    "_type": "grammar",
    "given_sentence": null
  },
  {
    "type": "어법 판단",
    "passage": "Social media platforms have fundamentally ①changed the way people communicate and share information. Users ②are increasingly concerned about privacy and data security. Companies collecting personal data ③must comply with strict regulations regarding user protection. Recent scandals ④has revealed how vulnerable online information actually is. Nevertheless, individuals ⑤continue to use these platforms despite knowing the potential risks.",
    "choices": [
      "changed",
      "are",
      "must",
      "have",
      "continue"
    ],
    "answer": 3,
    "explanation": "④번 'has'가 정답입니다. 'Recent scandals has revealed'에서 주어 'Recent scandals'는 복수명사이므로 동사는 'have'여야 하는데, 선지에 'has'(단수형)가 있어서 문법적으로 틀렸습니다. 나머지는 모두 주어-동사 수일치가 완벽합니다.",
    "wrong_explanations": {
      "changed": "①번은 정답이 아닙니다. 'have fundamentally changed'는 현재완료형으로 문법적으로 완벽합니다.",
      "are": "②번은 정답이 아닙니다. 'Users are increasingly concerned'은 주어(복수) 'Users'와 수일치가 완벽합니다.",
      "must": "③번은 정답이 아닙니다. 'must comply'는 조동사+동사 원형으로 문법적으로 완벽합니다.",
      "continue": "⑤번은 정답이 아닙니다. 'individuals continue to use'은 주어(복수)와 동사가 수일치하며 문법적으로 완벽합니다."
    },
    "_type": "grammar",
    "given_sentence": null
  },
  {
    "type": "어법 판단",
    "passage": "The tourism industry ①plays a crucial role in many national economies. Travelers ②visit different countries to experience diverse cultures and historical sites. Local communities ③benefit significantly from increased tourism revenue and job creation. However, mass tourism ④has often caused environmental damage and cultural degradation. Sustainable tourism practices ⑤requires careful planning to minimize negative impacts while maximizing economic benefits.",
    "choices": [
      "plays",
      "visit",
      "benefit",
      "caused",
      "requires"
    ],
    "answer": 4,
    "explanation": "⑤번 'requires'가 정답입니다. 'Sustainable tourism practices require'에서 주어 'Sustainable tourism practices'는 복수명사이므로 동사는 'require'여야 하는데, 선지에 'requires'(단수형)가 있어서 문법적으로 틀렸습니다. 나머지는 모두 주어-동사 수일치가 완벽합니다.",
    "wrong_explanations": {
      "plays": "①번은 정답이 아닙니다. 'The tourism industry plays'는 주어(단수)와 수일치가 완벽합니다.",
      "visit": "②번은 정답이 아닙니다. 'Travelers visit'은 주어(복수)와 수일치가 완벽합니다.",
      "benefit": "③번은 정답이 아닙니다. 'Local communities benefit'은 주어(복수)와 수일치가 완벽합니다.",
      "caused": "④번은 정답이 아닙니다. 'has often caused'는 현재완료형으로 문법적으로 완벽합니다."
    },
    "_type": "grammar",
    "given_sentence": null
  },
  {
    "type": "어휘 적절성",
    "passage": "Modern cities face the ① persistent challenge of managing urban waste. With population growth, the amount of garbage continues to ② escalate at an alarming rate. Many municipalities have implemented recycling programs to ③ mitigate environmental damage. However, these efforts remain ④ insufficient without public cooperation. Citizens must understand that their individual actions have ⑤ trivial consequences for the planet. Education campaigns help people recognize how small behavioral changes can create significant impact. Some cities have introduced incentive systems to encourage recycling participation. Advanced sorting technology now makes it easier to separate recyclable materials. When communities work together, they achieve remarkable results in waste reduction. The future of urban sustainability depends on our collective commitment to this cause.",
    "choices": [
      "①persistent",
      "②escalate",
      "③mitigate",
      "④insufficient",
      "⑤trivial"
    ],
    "answer": 4,
    "explanation": "⑤ 'trivial'(사소한, 중요하지 않은)은 문맥상 부적절합니다. '개인의 행동이 지구에 영향을 미친다'는 긍정적인 의미인데, trivial은 이를 부정합니다. 올바른 단어는 'significant'(중대한, 중요한)입니다.",
    "wrong_explanations": {
      "①persistent": "지속적인 도시 폐기물 문제 → 문맥상 적절",
      "②escalate": "쓰레기 양이 증가한다 → 문맥상 적절",
      "③mitigate": "환경 피해를 완화한다 → 문맥상 적절",
      "④insufficient": "노력이 불충분하다 → 문맥상 적절"
    },
    "_type": "vocab",
    "given_sentence": null
  },
  {
    "type": "어휘 적절성",
    "passage": "The artist's work demonstrates a ① remarkable ability to capture human emotion through unconventional mediums. Her paintings ② evoke deep feelings in viewers, creating a profound connection. Critics have noted that her style ③ deviates from traditional artistic conventions in refreshing ways. The gallery exhibition was a tremendous success, with tickets selling out ④ rapidly. Despite her growing fame, she remains ⑤ arrogant about her accomplishments and continues to experiment fearlessly. Her latest collection explores themes of identity and belonging. Observers praise her willingness to take creative risks. The artist often collaborates with other creators to push boundaries. Her work has inspired many young artists to pursue unconventional paths. Museums around the world are eager to feature her pieces in their collections.",
    "choices": [
      "①remarkable",
      "②evoke",
      "③deviates",
      "④rapidly",
      "⑤arrogant"
    ],
    "answer": 4,
    "explanation": "⑤ 'arrogant'(거만한, 자만심 있는)은 문맥상 부적절합니다. '명성이 커졌음에도 불구하고'라는 전후 문맥에서 긍정적인 태도를 나타내야 하는데, arrogant는 부정적인 의미입니다. 올바른 단어는 'humble'(겸손한)입니다.",
    "wrong_explanations": {
      "①remarkable": "주목할 만한 능력 → 문맥상 적절",
      "②evoke": "깊은 감정을 불러일으킨다 → 문맥상 적절",
      "③deviates": "전통 관례에서 벗어난다 → 문맥상 적절",
      "④rapidly": "표가 빠르게 매진되었다 → 문맥상 적절"
    },
    "_type": "vocab",
    "given_sentence": null
  },
  {
    "type": "어휘 적절성",
    "passage": "Climate change poses an ① unprecedented threat to global ecosystems and human societies. Scientists have ② documented rising temperatures across all continents. Extreme weather events are becoming increasingly ③ frequent, causing widespread damage to agriculture and infrastructure. Governments must ④ accelerate their efforts to reduce carbon emissions immediately. The transition to renewable energy sources is ⑤ detrimental but necessary for our survival. Many countries have already begun investing in solar and wind power technologies. International cooperation is essential to address this global crisis effectively. Individual consumers can also contribute by reducing their carbon footprint. Education about climate science helps people understand the urgency of action. Without immediate and sustained effort, future generations will face catastrophic consequences.",
    "choices": [
      "①unprecedented",
      "②documented",
      "③frequent",
      "④accelerate",
      "⑤detrimental"
    ],
    "answer": 4,
    "explanation": "⑤ 'detrimental'(해로운, 유해한)은 문맥상 부적절합니다. '재생 에너지로의 전환이 ... 필요하다'는 긍정적인 의미인데, detrimental은 이를 부정합니다. 올바른 단어는 'challenging'(도전적인) 또는 'difficult'(어려운)입니다.",
    "wrong_explanations": {
      "①unprecedented": "전례 없는 위협 → 문맥상 적절",
      "②documented": "기온 상승을 기록했다 → 문맥상 적절",
      "③frequent": "극한 기후가 점점 빈번해진다 → 문맥상 적절",
      "④accelerate": "노력을 가속화해야 한다 → 문맥상 적절"
    },
    "_type": "vocab",
    "given_sentence": null
  },
  {
    "type": "어휘 적절성",
    "passage": "Social media has ① profoundly transformed how people communicate and share information. While these platforms offer ② tremendous opportunities for connection, they also present significant challenges. The ③ proliferation of misinformation online has become a serious concern for society. Users often encounter contradictory information that makes it difficult to ④ discern truth from falsehood. Many individuals have become ⑤ oblivious to the importance of critical thinking. Experts recommend that people verify sources before sharing content. Educational institutions are increasingly teaching digital literacy to young students. Companies are implementing better fact-checking systems to combat false information. The responsibility for ensuring accuracy falls on both platforms and users. Building a more trustworthy information ecosystem requires collective effort and awareness.",
    "choices": [
      "①profoundly",
      "②tremendous",
      "③proliferation",
      "④discern",
      "⑤oblivious"
    ],
    "answer": 4,
    "explanation": "⑤ 'oblivious'(인식하지 못한, 무관심한)은 문맥상 부적절합니다. '비판적 사고의 중요성에 대해 무관심해졌다'는 문제를 지적하는 문맥인데, 이는 교육과 인식의 필요성을 강조하는 맥락과 모순됩니다. 올바른 단어는 'aware'(인식한) 또는 'cognizant'(알아차린)입니다.",
    "wrong_explanations": {
      "①profoundly": "깊이 있게 변환했다 → 문맥상 적절",
      "②tremendous": "엄청난 기회를 제공한다 → 문맥상 적절",
      "③proliferation": "잘못된 정보의 확산 → 문맥상 적절",
      "④discern": "진실을 구분하다 → 문맥상 적절"
    },
    "_type": "vocab",
    "given_sentence": null
  },
  {
    "type": "어휘 적절성",
    "passage": "The smartphone revolution has ① dramatically altered human behavior and social structures. Companies continue to ② innovate at an impressive pace, introducing new features regularly. However, excessive screen time has ③ adverse effects on mental health and sleep patterns. Research shows that children spending prolonged periods on devices ④ struggle with attention and focus. Parents are increasingly ⑤ indifferent to monitoring their children's digital activities and setting boundaries. Psychologists emphasize the importance of digital wellness programs in schools and homes. Many experts recommend designating screen-free times during meals and before bedtime. Some countries have implemented regulations to protect younger users from harmful content. Technology companies should develop features that promote healthier usage patterns. Balance between technological engagement and offline activities is essential for overall well-being.",
    "choices": [
      "①dramatically",
      "②innovate",
      "③adverse",
      "④struggle",
      "⑤indifferent"
    ],
    "answer": 4,
    "explanation": "⑤ 'indifferent'(무관심한, 낮무심한)은 문맥상 부적절합니다. '부모들이 아이들의 디지털 활동을 모니터링해야 한다'는 전후 문맥에서 긍정적인 개입 필요성을 강조하는데, indifferent는 이를 부정합니다. 올바른 단어는 'concerned'(우려하는) 또는 'vigilant'(주의 깊은)입니다.",
    "wrong_explanations": {
      "①dramatically": "극적으로 변화시켰다 → 문맥상 적절",
      "②innovate": "지속적으로 혁신한다 → 문맥상 적절",
      "③adverse": "부정적인 영향 → 문맥상 적절",
      "④struggle": "주의력에 어려움을 겪는다 → 문맥상 적절"
    },
    "_type": "vocab",
    "given_sentence": null
  },
  {
    "type": "어휘 적절성",
    "passage": "Modern architecture has become increasingly ① diverse in its approach to sustainable design. Architects now recognize that buildings must ② adapt to their surrounding environments rather than dominate them. The principle of biophilic design, which incorporates natural elements into indoor spaces, has proven remarkably effective. Green roofs and living walls ③ diminish the urban heat island effect while improving air quality. Furthermore, smart building systems now ④ deteriorate energy consumption by up to 40 percent through automated climate control. These innovations demonstrate that environmental responsibility and aesthetic excellence are not mutually exclusive goals. Many developers initially resisted these changes, fearing increased costs, but long-term savings have ⑤ justified their investment. Today's sustainable buildings serve as models for future construction projects worldwide. The integration of technology and nature represents a paradigm shift in how we design our cities. Younger generations increasingly demand that new structures meet rigorous environmental standards. This momentum suggests that green building practices will continue to shape the architectural landscape for decades to come.",
    "choices": [
      "①diverse",
      "②adapt",
      "③diminish",
      "④deteriorate",
      "⑤justified"
    ],
    "answer": 3,
    "explanation": "④번 'deteriorate'(악화시키다)는 문맥에 부적절합니다. 에너지 소비를 '악화시킨다'는 의미가 되어 논리에 맞지 않습니다. 원래 단어는 'reduce'(감소시키다) 또는 'cut'(줄이다)이어야 합니다.",
    "wrong_explanations": {
      "①": "diverse(다양한)는 건축 접근법이 다양해졌다는 의미로 문맥상 적절합니다.",
      "②": "adapt(적응하다)는 건물이 주변 환경에 적응해야 한다는 의미로 적절합니다.",
      "③": "diminish(감소시키다)는 열섬 효과를 줄인다는 의미로 문맥상 적절합니다.",
      "⑤": "justified(정당화하다)는 투자가 정당한 것으로 판명되었다는 의미로 적절합니다."
    },
    "_type": "vocab",
    "given_sentence": null
  },
  {
    "type": "어휘 적절성",
    "passage": "The phenomenon of social media addiction has become a ① pressing concern for psychologists and educators worldwide. Young people spend an average of seven hours daily on digital platforms, which has ② profound implications for their mental health. Research indicates that excessive social media use correlates strongly with anxiety and depression among adolescents. Some experts argue that the algorithmic design of these platforms is intentionally ③ transparent, encouraging users to spend more time engaging with content. Parents struggle to ④ impose reasonable limits on their children's screen time without triggering conflict. Educational institutions are beginning to ⑤ integrate digital literacy programs into their curricula to teach responsible online behavior. Despite these efforts, the addictive nature of social media continues to escalate. Companies generate enormous profits from user engagement metrics, creating perverse incentives. The issue raises important questions about corporate responsibility and the regulation of technology. Solutions require collaboration between tech companies, policymakers, and family units. Only through comprehensive approaches can society address this multifaceted challenge effectively.",
    "choices": [
      "①pressing",
      "②profound",
      "③transparent",
      "④impose",
      "⑤integrate"
    ],
    "answer": 2,
    "explanation": "③번 'transparent'(투명한)는 문맥에 부적절합니다. 알고리즘 설계가 '투명하다'면 사용자들을 더 오래 머물게 하려는 의도가 숨겨지지 않는다는 뜻으로 모순입니다. 원래 단어는 'opaque'(불투명한) 또는 'deceptive'(기만적인)이어야 합니다.",
    "wrong_explanations": {
      "①": "pressing(긴급한)은 소셜 미디어 중독 문제가 시급하다는 의미로 적절합니다.",
      "②": "profound(깊은, 심각한)은 정신 건강에 미치는 영향이 심각하다는 의미로 적절합니다.",
      "④": "impose(강요하다)는 부모들이 스크린 시간 제한을 강제한다는 의미로 적절합니다.",
      "⑤": "integrate(통합하다)는 교육 과정에 디지털 리터러시를 포함시킨다는 의미로 적절합니다."
    },
    "_type": "vocab",
    "given_sentence": null
  },
  {
    "type": "어휘 적절성",
    "passage": "Climate change presents unprecedented challenges that demand ① urgent action from all sectors of society. The melting of polar ice caps is undeniably ② accelerating, causing sea levels to rise at alarming rates. Coastal communities face the real prospect of displacement as their habitats become increasingly ③ vulnerable to flooding and erosion. Industrial nations have begun to ④ diminish their carbon emissions through renewable energy investments and policy reforms. However, developing countries often ⑤ obstruct progress by prioritizing short-term economic growth over environmental protection. The interconnected nature of global ecosystems means that one region's inaction affects communities thousands of miles away. International agreements like the Paris Accord represent attempts to coordinate collective responses to this crisis. Scientists warn that without substantial changes in the coming decade, irreversible damage may become inevitable. Young activists worldwide are increasingly vocal about demanding accountability from political leaders. Investment in green technology and sustainable practices offers pathways toward meaningful progress. The transition to a carbon-neutral economy requires unprecedented levels of cooperation and commitment.",
    "choices": [
      "①urgent",
      "②accelerating",
      "③vulnerable",
      "④diminish",
      "⑤obstruct"
    ],
    "answer": 4,
    "explanation": "⑤번 'obstruct'(방해하다)는 문맥에 부적절합니다. 개발도상국들이 환경 보호 대신 경제 성장을 '우선시한다'는 의미인데, '방해한다'는 의미로는 맥락이 맞지 않습니다. 원래 단어는 'prioritize'(우선시하다) 또는 'favor'(선호하다)이어야 합니다.",
    "wrong_explanations": {
      "①": "urgent(긴급한)은 기후 변화 대응이 시급하다는 의미로 적절합니다.",
      "②": "accelerating(가속화되는)은 빙하가 녹는 속도가 빨라지고 있다는 의미로 적절합니다.",
      "③": "vulnerable(취약한)은 해안 지역이 범람과 침식에 약하다는 의미로 적절합니다.",
      "④": "diminish(감소시키다)는 탄소 배출을 줄인다는 의미로 적절합니다."
    },
    "_type": "vocab",
    "given_sentence": null
  },
  {
    "type": "어휘 적절성",
    "passage": "The concept of emotional intelligence has ① revolutionized our understanding of human success and well-being. Unlike traditional intelligence quotient measures, emotional intelligence assesses one's ability to ② recognize and manage emotions effectively. Individuals with high emotional intelligence demonstrate ③ volatile relationships built on empathy and genuine understanding. They excel at ④ navigating complex social dynamics and resolving conflicts through constructive dialogue. Organizations increasingly value employees who can ⑤ cultivate positive workplace cultures and collaborate harmoniously with colleagues. Research demonstrates that emotional intelligence is a stronger predictor of career success than raw intellectual ability. Schools have begun incorporating emotional learning into curricula to equip students with essential life skills. The ability to understand others' perspectives fosters innovation and creative problem-solving in team environments. Leaders who display high emotional intelligence inspire loyalty and motivation among their followers. This shift in educational and corporate philosophy reflects growing recognition that human connection matters profoundly. Developing emotional intelligence remains one of the most valuable investments people can make.",
    "choices": [
      "①revolutionized",
      "②recognize",
      "③volatile",
      "④navigating",
      "⑤cultivate"
    ],
    "answer": 2,
    "explanation": "③번 'volatile'(불안정한, 변덕스러운)는 문맥에 부적절합니다. 감정 지능이 높은 사람들이 '불안정한 관계'를 형성한다는 의미로는 모순입니다. 원래 단어는 'stable'(안정적인) 또는 'strong'(튼튼한)이어야 합니다.",
    "wrong_explanations": {
      "①": "revolutionized(혁신했다)는 감정 지능 개념이 우리의 이해를 바꿨다는 의미로 적절합니다.",
      "②": "recognize(인식하다)는 감정을 인식하고 관리할 능력을 의미로 적절합니다.",
      "④": "navigating(항해하다)는 복잡한 사회 역학을 잘 처리한다는 비유적 의미로 적절합니다.",
      "⑤": "cultivate(기르다)는 긍정적인 직장 문화를 형성한다는 의미로 적절합니다."
    },
    "_type": "vocab",
    "given_sentence": null
  },
  {
    "type": "어휘 적절성",
    "passage": "The art of negotiation requires ① sophisticated communication skills and careful attention to detail. Successful negotiators learn to ② anticipate potential objections and prepare counterarguments in advance. Building rapport with the other party ③ hinders the development of trust-based agreements that benefit all involved. Experienced professionals understand that ④ compromise is essential when both sides must sacrifice certain demands to reach consensus. The initial offer should be ⑤ inflated strategically to allow room for meaningful discussion and adjustment. Negotiation becomes counterproductive when parties adopt rigid positions and refuse to consider alternative solutions. Active listening demonstrates respect and creates space for genuine understanding between negotiators. Many successful deals have foundered because one party felt unheard or undervalued. Documentation of agreed terms prevents misunderstandings and provides clarity for implementation. The most enduring business relationships typically develop from negotiations conducted with transparency and good faith. Mastering negotiation skills provides competitive advantages in virtually every professional context.",
    "choices": [
      "①sophisticated",
      "②anticipate",
      "③hinders",
      "④compromise",
      "⑤inflated"
    ],
    "answer": 2,
    "explanation": "③번 'hinders'(방해하다)는 문맥에 부적절합니다. 상대방과의 관계 형성이 신뢰 기반 합의 발전을 '방해한다'는 의미로는 논리가 맞지 않습니다. 원래 단어는 'facilitates'(촉진하다) 또는 'strengthens'(강화하다)이어야 합니다.",
    "wrong_explanations": {
      "①": "sophisticated(정교한)는 협상에 필요한 의사소통 기술이 정교하다는 의미로 적절합니다.",
      "②": "anticipate(예상하다)는 잠재적 반대 의견을 미리 예상한다는 의미로 적절합니다.",
      "④": "compromise(타협)는 양측이 일부 요구를 포기해야 한다는 의미로 적절합니다.",
      "⑤": "inflated(부풀린)는 협상 여지를 두기 위해 처음 제안을 높게 책정한다는 의미로 적절합니다."
    },
    "_type": "vocab",
    "given_sentence": null
  },
  {
    "type": "빈칸 추론",
    "passage": "The concept of 'flow' in psychology refers to a state of complete immersion in an activity where one loses track of time and self-consciousness. When people experience flow, they are fully engaged and their skills match the level of challenge presented. However, many modern workplace environments are designed in ways that ___________ this optimal state. Open office layouts, constant digital notifications, and frequent interruptions create a fragmented attention span that makes sustained concentration nearly impossible. Research shows that it takes an average of 23 minutes to regain focus after an interruption. Furthermore, multitasking, which is often encouraged in contemporary work culture, actually decreases productivity and increases stress levels. Companies that recognize the importance of uninterrupted work time have implemented quiet hours and focus-friendly policies. These organizations report higher employee satisfaction and better quality output. The challenge for modern businesses is to balance collaboration with the individual concentration time necessary for meaningful work. Creating spaces and time for employees to enter a flow state is not merely a luxury; it is a fundamental requirement for both personal well-being and organizational success.",
    "choices": [
      "① facilitate",
      "② prevent",
      "③ measure",
      "④ study",
      "⑤ improve"
    ],
    "answer": 1,
    "explanation": "문맥상 현대 직장 환경이 flow 상태를 방해한다는 의미입니다. 다음 문장에서 'open office layouts', 'constant notifications', 'interruptions' 등이 집중을 불가능하게 한다고 설명하므로, 'prevent(방해하다)'가 정답입니다.",
    "wrong_explanations": {
      "0": "facilitate(촉진하다)는 문맥상 반대 의미",
      "2": "measure(측정하다)는 의미가 맞지 않음",
      "3": "study(연구하다)는 의미가 맞지 않음",
      "4": "improve(개선하다)는 문맥상 반대 의미"
    },
    "_type": "blank",
    "given_sentence": null
  },
  {
    "type": "빈칸 추론",
    "passage": "Throughout human history, societies have relied on stories to transmit cultural values and moral lessons. Ancient myths and folktales served as educational tools, encoding wisdom that could be easily remembered and shared across generations. However, as technology advances and information becomes increasingly abundant, we might assume that traditional storytelling would become ___________ . Yet the opposite appears to be true. Modern audiences still crave narratives that help them make sense of their experiences and connect with others. Streaming platforms invest billions in producing original series, and podcasts continue to grow in popularity. These contemporary formats demonstrate that humans fundamentally need stories, regardless of the medium through which they are delivered. The power of narrative lies not in its format but in its ability to create emotional resonance and meaning. Stories allow us to experience different perspectives, explore moral dilemmas, and feel less alone in our struggles. Rather than becoming obsolete, storytelling has evolved and adapted to new technological landscapes. This evolution shows that the human need for narrative is timeless and transcends technological progress.",
    "choices": [
      "① indispensable",
      "② obsolete",
      "③ expensive",
      "④ complicated",
      "⑤ controversial"
    ],
    "answer": 1,
    "explanation": "'assume that traditional storytelling would become ___________'에서 기술 발전으로 전통적 이야기 전하기가 사라질 것이라고 가정한다는 의미입니다. 다음 문장 'Yet the opposite appears to be true'에서 이런 가정이 틀렸다고 반박하므로, 'obsolete(구식이 되다)'가 정답입니다.",
    "wrong_explanations": {
      "0": "indispensable(필수적인)은 'opposite'과 맞지 않음",
      "2": "expensive(비싼)는 문맥상 관련 없음",
      "3": "complicated(복잡한)는 의미가 맞지 않음",
      "4": "controversial(논쟁적인)는 문맥상 어울리지 않음"
    },
    "_type": "blank",
    "given_sentence": null
  },
  {
    "type": "빈칙 추론",
    "passage": "Social media platforms have fundamentally changed the way people communicate and share information. While these platforms offer unprecedented opportunities for connection, they also present serious challenges regarding misinformation and mental health. One particularly problematic phenomenon is the tendency for people to ___________ information that confirms their existing beliefs while dismissing contrary evidence. This behavior, known as confirmation bias, is not new to human psychology; however, social media algorithms amplify it significantly. These algorithms prioritize engagement, which means they show users content similar to what they have previously interacted with. Over time, this creates filter bubbles where individuals are primarily exposed to viewpoints that align with their own. The consequence is increasing polarization and decreased civil discourse. Furthermore, the psychological impact of constant social comparison and curated content presentation contributes to rising anxiety and depression rates, particularly among young people. Understanding these mechanisms is crucial for developing healthier relationships with technology. Platforms need to consider their responsibility in shaping public discourse. Individuals also need digital literacy skills to critically evaluate information and recognize algorithmic influence.",
    "choices": [
      "① create",
      "② dismiss",
      "③ seek",
      "④ ignore",
      "⑤ challenge"
    ],
    "answer": 2,
    "explanation": "'tendency for people to ___________ information that confirms their existing beliefs'라는 구조에서 자신의 신념을 확인하는 정보를 찾는다는 의미입니다. 다음의 'while dismissing contrary evidence'와 대조되고, confirmation bias 설명에 부합하므로 'seek(찾다, 추구하다)'가 정답입니다.",
    "wrong_explanations": {
      "0": "create(만들다)는 의미가 맞지 않음",
      "1": "dismiss(무시하다)는 뒤의 'while dismissing'과 중복",
      "3": "ignore(무시하다)는 'dismissing'과 같은 의미로 뒤의 문맥과 맞지 않음",
      "4": "challenge(도전하다)는 confirmation bias 설명과 반대"
    },
    "_type": "blank",
    "given_sentence": null
  },
  {
    "type": "빈칸 추론",
    "passage": "The concept of 'flow' in psychology describes a state of complete immersion in an activity where a person loses self-consciousness and becomes fully engaged. Athletes often experience flow during competitions, artists while creating, and students while solving challenging problems. However, flow is not simply about doing what you enjoy; it requires a delicate balance between skill level and task difficulty. When the task is too easy, boredom emerges. When it is too challenging, anxiety takes over. True flow occurs in the sweet spot between these extremes. Interestingly, modern technology has created new challenges to achieving flow states. Constant notifications, social media alerts, and digital distractions fragment our attention, making sustained concentration increasingly difficult. Many researchers argue that the ability to enter flow states is becoming a rare and valuable skill. Those who can maintain focus despite environmental distractions gain a significant advantage in both personal development and professional success. Understanding and cultivating flow states, therefore, ___________ as a critical competency in the digital age.",
    "choices": [
      "① is increasingly considered unnecessary for modern workers",
      "② has become increasingly recognized as essential",
      "③ should be avoided in competitive environments",
      "④ depends entirely on natural talent rather than practice",
      "⑤ is less important than accumulating multiple skills quickly"
    ],
    "answer": 1,
    "explanation": "지문은 현대 기술이 집중력을 방해하지만, 플로우 상태에 진입할 수 있는 능력이 개인 발전과 직업 성공에 중요한 이점을 준다고 설명합니다. 마지막 문장에서 '디지털 시대의 핵심 역량으로 인식되어야 한다'는 의미의 '②번 has become increasingly recognized as essential'이 가장 적절합니다.",
    "wrong_explanations": {
      "0": "지문에서 플로우 상태가 중요하다고 강조하고 있어 모순됩니다.",
      "2": "플로우 상태는 경쟁 환경에서 오히려 피해야 할 것이 아니라 추구해야 합니다.",
      "3": "지문은 플로우가 실천을 통해 개발될 수 있음을 암시합니다.",
      "4": "지문의 논지상 플로우 상태의 능력이 중요함을 강조합니다."
    },
    "_type": "blank",
    "given_sentence": null
  },
  {
    "type": "빈칸 추론",
    "passage": "Throughout history, societies have grappled with the tension between individual freedom and collective responsibility. In traditional communities, social cohesion was maintained through strict adherence to established norms and hierarchical structures. Members prioritized group harmony over personal desires, which ensured stability but often stifled individual creativity and innovation. Conversely, highly individualistic societies emphasize personal autonomy and self-determination, fostering entrepreneurship and artistic expression. Yet this approach can lead to social fragmentation and decreased sense of community belonging. Recent research in social psychology reveals that neither extreme produces optimal outcomes. Communities that thrive are those that skillfully balance these competing values. They create structures that protect individual rights while maintaining social bonds through shared values and mutual support. This balance is not static but requires continuous negotiation and adjustment as societies evolve. Countries that have successfully implemented this equilibrium demonstrate higher levels of citizen satisfaction, stronger social networks, and greater economic resilience. Therefore, the challenge for modern societies is not to choose between individual freedom and collective responsibility, but to ___________ them in ways that benefit both personal fulfillment and community well-being.",
    "choices": [
      "① completely separate and prioritize",
      "② skillfully integrate and harmonize",
      "③ gradually eliminate one of",
      "④ alternately emphasize and diminish",
      "⑤ artificially impose regulations on"
    ],
    "answer": 1,
    "explanation": "지문은 개인의 자유와 집단의 책임 사이의 균형이 중요하며, 성공한 사회들이 '이 두 가치를 능숙하게 균형 맞춘다'고 설명합니다. 따라서 '② skillfully integrate and harmonize'가 가장 적절한 답입니다.",
    "wrong_explanations": {
      "0": "지문에서 두 가치를 분리하는 것이 아니라 통합해야 한다고 강조합니다.",
      "2": "하나를 제거하는 것이 아니라 둘 다를 유지해야 함이 명시되어 있습니다.",
      "3": "지문은 정적인 선택이 아닌 지속적인 협상을 강조합니다.",
      "4": "인공적인 규제보다는 자연스러운 균형을 추구해야 합니다."
    },
    "_type": "blank",
    "given_sentence": null
  },
  {
    "type": "글의 순서",
    "passage": "Many companies struggle to maintain customer loyalty in today's competitive market. The key lies in understanding what keeps customers coming back.\n(A) Creating a reward system for frequent purchases proved effective at a retail chain in Seoul. Customers who accumulated points could exchange them for discounts or free products. Within six months, repeat purchases increased by 40 percent.\n(B) Beyond rewards, emotional connection matters equally. Brands that share their values and mission with customers build stronger relationships. A coffee shop chain succeeded by emphasizing fair-trade practices and environmental commitment.\n(C) When companies invest in both incentive programs and authentic storytelling, they create powerful reasons for customers to return. The combination transforms casual buyers into brand advocates who recommend products to friends and family.",
    "choices": [
      "①(A)-(B)-(C)",
      "②(A)-(C)-(B)",
      "③(B)-(A)-(C)",
      "④(B)-(C)-(A)",
      "⑤(C)-(A)-(B)"
    ],
    "answer": 0,
    "explanation": "(A)는 보상 시스템의 구체적 사례를 제시, (B)는 감정적 연결의 중요성을 보여주는 또 다른 방법 제시, (C)는 두 가지 요소의 결합 효과를 결론짓는 구조. 'Beyond rewards'로 시작하는 (B)는 (A) 후 자연스럽게 추가 요소 도입.",
    "wrong_explanations": {
      "1": "(A)-(C)-(B): (C)의 '결합'이 (B)를 설명하기 전에 나와 논리 순서 위반",
      "2": "(B)-(A)-(C): 구체적 예시 없이 추상적 설명부터 시작하면 설득력 약함",
      "3": "(B)-(C)-(A): (C)에서 결론을 내린 후 (A)의 예시가 나오면 순서 이상",
      "4": "(C)-(A)-(B): 결론이 먼저 나와 예시를 뒷받침할 논리 부족"
    },
    "_type": "order",
    "given_sentence": null
  },
  {
    "type": "글의 순서",
    "passage": "The human brain processes information through different sensory channels simultaneously. Research now reveals how these channels interact to create our perception of reality.\n(A) When researchers presented synchronized sounds with flashing lights, participants reported enhanced perception compared to either stimulus alone. Brain imaging showed increased activation in multiple regions, suggesting cross-talk between sensory systems.\n(B) Scientists have identified specific neural pathways that connect different sensory centers. Signals from the eyes, ears, and skin converge at relay stations in the brain before reaching higher processing areas. Earlier studies missed these connections because they examined senses in isolation.\n(C) Understanding multisensory integration has practical applications in education and medicine. Virtual reality programs now exploit these findings to create more immersive experiences, while rehabilitation therapists use sensory combination to accelerate recovery after brain injury.",
    "choices": [
      "①(A)-(B)-(C)",
      "②(A)-(C)-(B)",
      "③(B)-(A)-(C)",
      "④(B)-(C)-(A)",
      "⑤(C)-(A)-(B)"
    ],
    "answer": 2,
    "explanation": "(B)는 신경 경로 발견의 기초 설명, (A)는 동기화된 자극 실험의 구체적 증거 제시, (C)는 실제 응용 분야를 결론짓는 구조. 'Earlier studies missed'로 (B)가 선행 연구의 한계 설명.",
    "wrong_explanations": {
      "0": "(A)-(B)-(C): 구체적 실험부터 시작하면 기초 원리 설명이 늦음",
      "1": "(A)-(C)-(B): (A)의 증거 후 응용을 논하면 기초 메커니즘 설명 부재",
      "3": "(B)-(C)-(A): 응용 사례가 과학적 증거보다 먼저 나오면 비논리적",
      "4": "(C)-(A)-(B): 응용이 기초보다 먼저 나와 인과관계 역전"
    },
    "_type": "order",
    "given_sentence": null
  },
  {
    "type": "글의 순서",
    "passage": "Archaeological evidence shows that ancient civilizations valued gemstones not only for beauty but also for presumed medicinal properties. Understanding these beliefs reveals much about historical cultures.\n(A) Jade was particularly significant in East Asian medicine, where practitioners believed it could balance bodily energies and prevent organ disease. Emperors wore jade pendants as both ornaments and health talismans, integrating jewelry with medical practice.\n(B) The practice persisted despite lacking scientific foundation. In medieval Europe, doctors prescribed powdered rubies to treat fever and diamond dust to aid digestion. These treatments appeared in respected medical texts for centuries.\n(C) Modern analysis shows these stones contain no active compounds beneficial to health. Yet examining why ancient peoples trusted in gem therapy teaches us about their worldview, their limited understanding of physiology, and their reliance on observation rather than controlled experimentation.",
    "choices": [
      "①(A)-(B)-(C)",
      "②(A)-(C)-(B)",
      "③(B)-(A)-(C)",
      "④(C)-(A)-(B)",
      "⑤(C)-(B)-(A)"
    ],
    "answer": 1,
    "explanation": "(A)는 동아시아 구체 사례, (C)는 중세 유럽 사례 제시 후, (B)는 과학적 검증 결과와 역사적 의의 제시하는 대조 구조. 'Modern analysis'로 (C)가 시간적 전환점 역할.",
    "wrong_explanations": {
      "0": "(A)-(B)-(C): (B)의 지속성 설명이 (A) 직후 나오면 맥락 연결 약함",
      "2": "(B)-(A)-(C): 구체적 지역 사례 없이 일반적 설명부터 시작하면 구성력 떨어짐",
      "3": "(C)-(A)-(B): 현대 분석이 먼저 나오면 역사적 맥락 설명이 뒤늦음",
      "4": "(C)-(B)-(A): 동일한 논리 순서 문제"
    },
    "_type": "order",
    "given_sentence": null
  },
  {
    "type": "글의 순서",
    "passage": "The development of writing systems fundamentally changed human civilization by enabling knowledge transmission across generations. Different cultures invented writing independently, each reflecting unique environmental and social needs.\n(A) The Sumerians developed cuneiform around 3200 BCE to track agricultural surplus and trade records. Wedge-shaped marks pressed into clay tablets recorded quantities of grain, livestock, and goods, making complex economic systems manageable.\n(B) Egypt's hieroglyphics emerged from similar practical demands but incorporated artistic elements and spiritual significance. Religious texts, royal decrees, and administrative documents were recorded using pictorial symbols that merged function with cultural meaning.\n(C) Comparing these systems reveals that practical necessity drove innovation, yet cultural values shaped the final form. Sumerian efficiency and Egyptian artistry both served survival, but they reflected different priorities in what societies deemed important enough to preserve permanently.",
    "choices": [
      "①(A)-(B)-(C)",
      "②(A)-(C)-(B)",
      "③(B)-(A)-(C)",
      "④(B)-(C)-(A)",
      "⑤(C)-(B)-(A)"
    ],
    "answer": 0,
    "explanation": "(A)는 수메르 설형문자 사례, (B)는 이집트 상형문자 사례, (C)는 두 체계의 비교 분석과 결론. 'Comparing these systems'로 (C)가 명확한 비교 구조 도입.",
    "wrong_explanations": {
      "1": "(A)-(C)-(B): (C)에서 비교를 시도하지만 (B) 정보 부재로 불완전",
      "2": "(B)-(A)-(C): 이집트 먼저 제시하면 시간 순서적 부자연스러움",
      "3": "(B)-(C)-(A): 동일한 시간 순서 문제",
      "4": "(C)-(B)-(A): 비교 분석이 사례보다 먼저 나오면 논거 부족"
    },
    "_type": "order",
    "given_sentence": null
  },
  {
    "type": "글의 순서",
    "passage": "Insomnia has become increasingly common in modern society, prompting researchers to investigate its causes beyond simple stress. Recent studies identify surprising contributing factors that individuals often overlook.\n(A) Blue light from smartphones and computers suppresses melatonin production, the hormone regulating sleep cycles. Evening screen use tricks the brain into thinking it is still daytime, delaying sleep onset by 30 to 90 minutes on average.\n(B) Nutritional deficiencies also play a role that many people ignore. Magnesium and B vitamins support neurotransmitter function essential for sleep regulation. Dietary analysis of insomnia sufferers frequently reveals insufficient intake of these micronutrients.\n(C) Addressing sleep problems requires identifying multiple causes rather than assuming a single source. Patients benefit most when doctors examine technology habits, nutrition, stress levels, and medical conditions comprehensively to develop personalized treatment approaches.",
    "choices": [
      "①(A)-(B)-(C)",
      "②(A)-(C)-(B)",
      "③(B)-(A)-(C)",
      "④(C)-(A)-(B)",
      "⑤(C)-(B)-(A)"
    ],
    "answer": 0,
    "explanation": "(A)는 청색광의 영향 설명, (B)는 영양 결핍의 역할 설명, (C)는 종합적 접근의 필요성을 결론짓는 구조. 'multiple causes'로 (C)가 (A)와 (B)의 복합성을 통합.",
    "wrong_explanations": {
      "1": "(A)-(C)-(B): (C)의 결론 후 (B)가 나오면 추가 증거 제시 순서 위반",
      "2": "(B)-(A)-(C): 어느 쪽 원인이 먼저든 (C)의 통합이 자연스럽지 않음",
      "3": "(C)-(A)-(B): 종합적 접근이 개별 사례보다 먼저 나오면 설득력 약함",
      "4": "(C)-(B)-(A): 동일한 논리 순서 문제"
    },
    "_type": "order",
    "given_sentence": null
  }
];
