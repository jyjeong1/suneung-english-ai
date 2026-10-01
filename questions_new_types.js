// Prof.AI 신규 유형 — 30문제
// 글의 목적 5, 심경 추론 5, 필자의 주장 5, 제목 추론 5, 무관한 문장 5, 요약문 완성 5
const QUESTION_BANK = [
  {
    "type": "글의 목적",
    "passage": "Dear Mr. Johnson, I am writing to express my sincere gratitude for your exceptional support during the recent marketing project. Your innovative ideas and dedication were instrumental in achieving our sales target ahead of schedule. The team truly appreciated your willingness to work extra hours and provide valuable feedback. Your contribution has not gone unnoticed, and I would like to formally recognize your efforts. Please know that your hard work is highly valued within our organization. I hope we can continue our collaboration on future projects. Thank you again for making a real difference. Best regards, Sarah",
    "choices": [
      "①과거 프로젝트에 대한 불만 사항 전달하기",
      "②향후 협력 조건에 대해 협상하기",
      "③탁월한 업무 수행에 대한 감사를 표현하기",
      "④새로운 마케팅 프로젝트 제안하기",
      "⑤팀 멤버들의 성과급 인상을 요청하기"
    ],
    "answer": 2,
    "explanation": "편지의 핵심은 'express my sincere gratitude'와 'Your contribution has not gone unnoticed'이다. 발신자는 Johnson의 뛰어난 업무 수행에 감사를 표현하고 있다.",
    "wrong_explanations": {
      "0": "불만 사항이 아니라 긍정적 평가가 담겨있다.",
      "1": "협상이나 조건 논의가 없다.",
      "3": "이미 완료된 프로젝트에 대한 감사이며 새로운 제안이 아니다.",
      "4": "성과급 인상 요청은 언급되지 않았다."
    },
    "_type": "purpose",
    "given_sentence": null
  },
  {
    "type": "글의 목적",
    "passage": "NOTICE TO ALL RESIDENTS: We are pleased to announce the annual Summer Community Festival scheduled for August 15th at Central Park. The event will feature live music, food vendors, children's activities, and fireworks at 9 PM. Free entry for all residents and their families. Activities begin at 2 PM. Please note that parking will be limited, so we recommend using public transportation or arriving early. Volunteers needed for event setup and management. Interested residents should contact the community office by August 10th. For more information, visit our website or call (555) 123-4567. We look forward to seeing you there!",
    "choices": [
      "①여름 축제 참여에 대한 주민들의 피드백 수집하기",
      "②중앙공원의 안전 문제에 대해 경고하기",
      "③여름 축제 행사에 대해 주민들에게 안내하기",
      "④공원 이용 시 주차료 인상을 공지하기",
      "⑤자원봉사자 모집을 위한 지원 자격 기준 제시하기"
    ],
    "answer": 2,
    "explanation": "공지문은 행사 일시, 장소, 프로그램 내용, 참여 방법 등 축제 전반에 대해 주민들을 안내하는 것이 주 목적이다.",
    "wrong_explanations": {
      "0": "이미 확정된 행사이며 피드백 수집이 아니다.",
      "1": "안전 경고가 아니라 행사 안내이다.",
      "3": "주차료 인상은 언급되지 않았다.",
      "4": "자원봉사자 모집은 부가적인 내용일 뿐 주 목적이 아니다."
    },
    "_type": "purpose",
    "given_sentence": null
  },
  {
    "type": "글의 목적",
    "passage": "Hi Emma, I hope this email finds you well. I'm reaching out because I have encountered some difficulties with the new software system we implemented last month. Several team members have reported issues with data synchronization, and some files have been corrupted during the migration process. These problems are significantly impacting our workflow and productivity. I would greatly appreciate your assistance in resolving these technical issues as soon as possible. Could you please schedule a meeting to discuss potential solutions? Your expertise would be invaluable in getting us back on track. Thank you for your prompt attention to this matter. Regards, Michael",
    "choices": [
      "①새로운 소프트웨어 시스템의 우수성을 칭찬하기",
      "②기술 전문가에게 소프트웨어 문제 해결을 요청하기",
      "③팀 멤버들의 기술 능력 부족을 지적하기",
      "④소프트웨어 구매 비용에 대한 환불을 요청하기",
      "⑤향후 마이그레이션 프로젝트 계획을 논의하기"
    ],
    "answer": 1,
    "explanation": "'I would greatly appreciate your assistance' 'Could you please schedule a meeting'이 명확한 도움 요청이다. Michael은 Emma에게 소프트웨어 문제 해결을 요청하고 있다.",
    "wrong_explanations": {
      "0": "오히려 문제점을 지적하고 있으므로 칭찬이 아니다.",
      "2": "팀 멤버의 능력을 비판하는 것이 아니라 시스템 문제이다.",
      "3": "환불 요청은 언급되지 않았다.",
      "4": "미래 계획 논의가 아니라 현재의 긴급한 문제 해결이다."
    },
    "_type": "purpose",
    "given_sentence": null
  },
  {
    "type": "글의 목적",
    "passage": "Dear Customer Service Team, I am writing to lodge a formal complaint regarding my recent purchase of a coffee maker (Model X-500) from your online store. Although the product description advertised a two-year warranty, the device malfunctioned after only three weeks of normal use. When I contacted your support team, the response was unhelpful and dismissive of my concerns. I have been a loyal customer for five years, and I find this level of service completely unacceptable. I expect either a full refund or a replacement unit immediately. Please respond within five business days, or I will be forced to escalate this matter to consumer protection agencies. I look forward to your prompt resolution. Sincerely, Robert Chen",
    "choices": [
      "①제품 구매 후 만족도에 대한 피드백 제공하기",
      "②결함 있는 제품과 불만족스러운 서비스에 대한 불만 제기하기",
      "③커피 메이커의 사용 방법에 대해 문의하기",
      "④향후 새로운 제품 구매 의향에 대해 통보하기",
      "⑤회사의 환불 정책에 대해 조언하기"
    ],
    "answer": 1,
    "explanation": "'lodge a formal complaint', 'unacceptable', 'expect either a full refund or a replacement'이 명확한 불만 제기와 요구이다. 고객은 결함 있는 제품과 부실한 서비스에 대해 불만을 표현하고 있다.",
    "wrong_explanations": {
      "0": "일반적인 피드백이 아니라 심각한 불만이다.",
      "2": "제품 사용 방법 문의가 아니라 불만 및 클레임이다.",
      "3": "향후 구매 의향이 아니라 현재의 문제 해결을 요구한다.",
      "4": "회사 정책 조언이 아니라 개인의 불만과 보상 요구이다."
    },
    "_type": "purpose",
    "given_sentence": null
  },
  {
    "type": "글의 목적",
    "passage": "Subject: Restaurant Recommendation Hi James, I hope you're doing well! I wanted to reach out because I recently discovered an amazing Italian restaurant called 'Bella Notte' and I think you would absolutely love it. You mentioned last month that you were looking for a good place to celebrate your anniversary, and this restaurant is perfect for that occasion. The ambiance is romantic, the service is impeccable, and the pasta is authentically delicious. I've been there twice now and never had a disappointing experience. The prices are reasonable for the quality you receive. I highly recommend making a reservation, as it gets quite busy on weekends. If you decide to go, please let me know how you like it! Best, Lisa",
    "choices": [
      "①레스토랑 이용 시 예약 방법에 대해 설명하기",
      "②특정 레스토랑을 방문하도록 강력히 권유하기",
      "③이탈리안 음식의 영양가에 대해 정보 제공하기",
      "④기념일 축하 파티 계획에 함께 참여해달라고 초대하기",
      "⑤레스토랑 서비스 품질 문제에 대해 불평하기"
    ],
    "answer": 1,
    "explanation": "'I think you would absolutely love it', 'I highly recommend'은 권유의 표현이다. Lisa는 기념일 축하에 적합한 이탈리안 레스토랑을 James에게 추천하고 있다.",
    "wrong_explanations": {
      "0": "예약 방법 자세한 설명이 아니라 추천에 중점이다.",
      "2": "음식의 영양가 정보 제공이 목적이 아니다.",
      "3": "파티 계획에 직접 참여 초대가 아니라 식당 추천이다.",
      "4": "불평이 아니라 긍정적인 추천이다."
    },
    "_type": "purpose",
    "given_sentence": null
  },
  {
    "type": "심경 추론",
    "passage": "The old violin had been sitting in my grandmother's attic for decades, forgotten among dusty boxes and faded photographs. When she passed away last month, I found myself holding it with trembling hands. The wood was cracked, the strings broken, and yet I could almost hear the melodies that once filled our small house. My grandfather had played it beautifully before the war took him away. As I carefully cleaned the instrument, memories flooded back—Sunday mornings, my grandmother humming softly in the kitchen, the way she would close her eyes when the music played. \"I've been waiting for someone to bring it back to life,\" she had whispered to me years ago. **Now, running my fingers along its weathered surface, I realized that this wasn't just a broken instrument; it was a bridge to a past I thought was lost forever.**",
    "choices": [
      "①nostalgic and melancholic",
      "②resentful and bitter",
      "③indifferent and detached",
      "④curious and excited",
      "⑤anxious and overwhelmed"
    ],
    "answer": 0,
    "explanation": "화자가 할머니의 유품인 낡은 바이올린을 통해 죽은 할아버지와 할머니의 추억들을 마주하게 된다. \"잃어버렸다고 생각한 과거로의 다리\"라는 표현에서 과거를 그리워하면서도 슬픈 감정(향수와 우수)이 드러난다. 할머니의 속삭임과 악기를 살리고자 하는 마음이 화자에게 전해지면서 감정적으로 깊이 있는 상태이다.",
    "_type": "mood",
    "given_sentence": null,
    "wrong_explanations": {}
  },
  {
    "type": "심경 추론",
    "passage": "I stood at the edge of the diving board, my toes curling over the rough surface. Below me, the pool stretched out like an endless blue expanse, and my friends were cheering from the water. \"Come on! You can do it!\" they shouted, their voices echoing in my ears. My heart pounded so hard I thought it might burst through my chest. I had been afraid of heights for as long as I could remember, and this ten-meter board had become my personal Everest. Every muscle in my body screamed at me to turn back, to climb down the ladder and pretend I had never promised to do this. But then I thought of all the times I had avoided challenges, all the opportunities I had missed because of fear. **Taking a deep breath, I looked down one more time, and something inside me shifted—fear was still there, but alongside it came a fierce determination that I had never felt before.**",
    "choices": [
      "①relieved and satisfied",
      "②fearful yet determined",
      "③confident and carefree",
      "④disappointed and ashamed",
      "⑤angry and defiant"
    ],
    "answer": 1,
    "explanation": "화자는 여전히 두려움을 느끼고 있지만(\"fear was still there\"), 동시에 \"fierce determination\"을 느낀다는 표현이 핵심이다. 두려움 속에서도 도전하려는 결연한 의지가 생겨났으므로 '두려우면서도 결연한' 심경이 가장 적절하다.",
    "_type": "mood",
    "given_sentence": null,
    "wrong_explanations": {}
  },
  {
    "type": "심경 추론",
    "passage": "The rejection letter arrived on a Tuesday morning, delivered by a cheerful mailman who had no idea he was crushing my dreams. I had spent months preparing my application to the art academy, pouring my heart into every sketch, every essay, every detail. My parents had believed in me. My teachers had told me I was talented. I had believed in myself too. But apparently, that wasn't enough. I sat on the kitchen floor, the letter trembling in my hands, unable to cry, unable to scream, unable to feel anything at all. My mother found me there an hour later and wrapped her arms around me without saying a word. Sometimes, I thought bitterly, hard work and passion mean nothing. **As days passed and the initial shock faded, I felt something else creeping in—not quite anger, but a hollow emptiness that seemed to swallow every reason I had ever had to create art.**",
    "choices": [
      "①devastated and hopeless",
      "②frustrated and rebellious",
      "③disillusioned and numb",
      "④resigned and peaceful",
      "⑤confused and skeptical"
    ],
    "answer": 2,
    "explanation": "\"hollow emptiness(공허감)\"와 \"shock faded(충격이 사라짐)\"이라는 표현에서 초기의 극심한 슬픔을 넘어 무감각하고 환멸된 심경이 드러난다. 예술을 만드는 이유까지도 빨아들이는 공허감은 환멸과 무감각의 조합을 의미한다.",
    "_type": "mood",
    "given_sentence": null,
    "wrong_explanations": {}
  },
  {
    "type": "심경 추론",
    "passage": "The hospital corridor seemed to stretch on forever, its white walls closing in around me as I walked toward Room 412. My daughter had been asking when Grandpa would come home, and I didn't know how to answer her anymore. The old man lying in the bed looked nothing like the father I remembered—smaller somehow, more fragile, as if time had compressed him into something barely recognizable. His eyes opened slowly when I entered, and recognition flickered there, just for a moment, before it faded into confusion again. I pulled the chair close and took his weathered hand in mine, careful not to disturb the tubes. We sat in silence for what felt like hours. **I wanted to tell him so many things—how much he meant to me, how much I regretted the words we never said, the time we wasted on trivial arguments—but the words stuck in my throat, and all I could do was hold his hand and let the tears fall silently.**",
    "choices": [
      "①regretful and heartbroken",
      "②guilty and resentful",
      "③peaceful and accepting",
      "④impatient and irritable",
      "⑤confused and lost"
    ],
    "answer": 0,
    "explanation": "화자가 아버지와 나눈 시간을 후회하고 있으며(\"regretted the words we never said\"), 눈물을 흘리는 모습에서 깊은 슬픔과 미안함이 드러난다. 죽음 앞에서의 후회와 그리움, 그리고 심장이 아픈 감정(heartbroken)이 명확히 나타난다.",
    "_type": "mood",
    "given_sentence": null,
    "wrong_explanations": {}
  },
  {
    "type": "심경 추론",
    "passage": "The letter arrived three months after I submitted my resignation. My old company wanted me back—more money, a better title, everything I thought I wanted a year ago. I stared at it in my cramped apartment, surrounded by unsold paintings and half-finished sculptures. The past year had been brutal: rejections from galleries, failed exhibitions, a bank account that dwindled week by week. There were nights when I questioned everything, when I wondered if I had made the biggest mistake of my life. But there were also mornings when I stood in front of my easel and felt something pure and undeniable—a sense of purpose that had never come from my corporate office. **As I read the letter one final time, I felt no temptation, no second thoughts, only a quiet certainty that I was exactly where I needed to be, struggling and uncertain though the path might be.**",
    "choices": [
      "①ambitious and impatient",
      "②conflicted and torn",
      "③resolved and at peace",
      "④bitter and resentful",
      "⑤hopeful and excited"
    ],
    "answer": 2,
    "explanation": "화자는 \"quiet certainty(조용한 확신)\"를 느끼고 있으며, 유혹이나 후회가 없다(\"no temptation, no second thoughts\")고 명시했다. 비록 \"struggling and uncertain(힘들고 불확실한)\" 상황이지만, 현재의 자리가 맞다는 굳은 심경이 드러나므로 '결연하고 평온한' 심경이 가장 적절하다.",
    "_type": "mood",
    "given_sentence": null,
    "wrong_explanations": {}
  },
  {
    "type": "필자의 주장",
    "passage": "Many educators argue that traditional classroom lectures should be replaced entirely by online learning platforms. However, this perspective overlooks crucial elements of human development. Face-to-face interaction in classrooms fosters critical social skills, emotional intelligence, and collaborative problem-solving abilities that digital platforms cannot adequately replicate. Students benefit from the spontaneous discussions, non-verbal communication cues, and peer relationships that emerge naturally in physical classrooms. Rather than choosing between traditional and digital education, we should integrate both approaches strategically. Physical classrooms should be preserved as primary learning environments while online tools serve as supplementary resources for knowledge reinforcement. This hybrid model respects the irreplaceable value of human connection in education while leveraging technological advantages.",
    "choices": [
      "①온라인 학습이 전통 교육을 완전히 대체해야 한다.",
      "②물리적 교실의 사회적 상호작용 가치를 간과해서는 안 된다.",
      "③디지털 플랫폼이 모든 교육 목표를 충족시킬 수 있다.",
      "④전통 교육만으로는 현대 학생들의 요구를 충족시킬 수 없다.",
      "⑤온라인 학습 도구는 교실 학습의 보조 자료로만 활용되어야 한다."
    ],
    "answer": 1,
    "explanation": "필자는 온라인 학습과 전통 교실 교육의 통합을 주장하며, 특히 대면 상호작용이 제공하는 사회적 기술, 감정 지능, 협업 능력의 가치를 강조합니다. 핵심 주장은 디지털 학습이 물리적 교실의 인간관계 형성 가치를 대체할 수 없다는 점입니다.",
    "wrong_explanations": {
      "①": "필자는 온라인 학습이 전통 교육을 '완전히 대체'해야 한다고 주장하지 않으며, 오히려 이를 비판합니다.",
      "③": "필자는 디지털 플랫폼만으로는 교육의 모든 목표를 충족시킬 수 없다고 주장합니다.",
      "④": "필자는 전통 교육만으로는 부족하다는 주장보다 두 방식의 통합을 강조합니다.",
      "⑤": "이는 부분적으로 맞지만, 필자의 핵심 주장은 물리적 교실의 고유한 가치에 대한 것입니다."
    },
    "_type": "claim",
    "given_sentence": null
  },
  {
    "type": "필자의 주장",
    "passage": "Corporate wellness programs have become increasingly popular, with companies investing millions in gym memberships and health initiatives for employees. Yet research reveals a troubling reality: these programs often fail to improve employee health outcomes significantly. The fundamental issue is that wellness initiatives focus on individual behavior change while ignoring systemic workplace factors. Excessive work hours, high stress environments, and poor work-life balance directly undermine health improvements employees attempt to make. Companies cannot expect employees to exercise regularly and maintain healthy diets when they are overworked and mentally exhausted. True corporate wellness requires fundamental restructuring of work conditions: reasonable working hours, manageable workloads, and genuinely supportive management practices. Without addressing these underlying issues, wellness programs remain superficial gestures that provide excellent marketing while delivering minimal health benefits.",
    "choices": [
      "①직원의 개인적 건강 행동 변화가 가장 중요하다.",
      "②기업 웰니스 프로그램에 더 많은 투자가 필요하다.",
      "③직장 환경과 조건의 개선이 웰니스의 핵심이다.",
      "④직원들이 운동과 식단 관리에 더 노력해야 한다.",
      "⑤웰니스 프로그램의 마케팅 전략을 개선해야 한다."
    ],
    "answer": 2,
    "explanation": "필자는 기업 웰니스 프로그램이 실패하는 근본 원인이 개인의 행동 변화만 강조하고 체계적인 직장 환경 문제를 무시하기 때문이라고 주장합니다. 진정한 웰니스는 업무 시간, 업무량, 경영진 지원 등 근본적인 직장 조건의 개선에서 출발해야 한다는 것이 핵심입니다.",
    "wrong_explanations": {
      "①": "필자는 개인의 행동 변화만으로는 부족하며 시스템 변화가 필요하다고 주장합니다.",
      "②": "필자는 더 많은 투자보다 근본적인 구조 개선을 주장합니다.",
      "④": "필자는 직원의 노력 부족이 아니라 직장 환경이 문제라고 지적합니다.",
      "⑤": "필자는 마케팅이 아니라 실질적인 직장 환경 개선을 강조합니다."
    },
    "_type": "claim",
    "given_sentence": null
  },
  {
    "type": "필자의 주장",
    "passage": "Environmental policies often emphasize individual actions like recycling, reducing plastic use, and energy conservation. While these efforts deserve recognition, they address symptoms rather than root causes of environmental degradation. Industrial production and corporate manufacturing account for over seventy percent of global carbon emissions, yet consumers bear the psychological burden of environmental responsibility. This creates an illusion that personal lifestyle changes can solve systemic environmental problems—they cannot. We have misidentified the problem by framing environmental crisis as a consumer issue rather than an industrial infrastructure issue. Substantial environmental improvement requires regulating industrial practices, transitioning to renewable energy sources at scale, and holding corporations accountable for emissions. Individual contributions matter psychologically, but transformative change demands systemic policy intervention targeting major polluters, not guilt-driven consumer campaigns.",
    "choices": [
      "①개인의 재활용과 에너지 절약 노력이 충분하다.",
      "②환경 책임을 개인 소비자에게 전가하는 것이 문제다.",
      "③플라스틱 사용 감소가 환경 오염 해결의 핵심이다.",
      "④환경 정책은 개인과 기업 모두에게 동등한 책임을 져야 한다.",
      "⑤심각한 환경 개선을 위해서는 산업 규제가 필수적이다."
    ],
    "answer": 4,
    "explanation": "필자는 환경 문제가 개인의 행동이 아닌 산업 구조의 문제이며, 근본적인 개선을 위해서는 산업 규제, 대규모 재생에너지 전환, 기업 책임 추구 등 시스템적 정책 개입이 필수적이라고 주장합니다.",
    "wrong_explanations": {
      "①": "필자는 개인의 노력만으로는 충분하지 않다고 명시적으로 주장합니다.",
      "②": "이는 부분적으로 맞지만, 필자의 핵심은 산업 규제의 필요성입니다.",
      "③": "필자는 플라스틱 감소가 근본적 해결책이 아니라고 봅니다.",
      "④": "필자는 개인과 기업의 책임이 동등하지 않으며 산업에 초점을 맞춰야 한다고 주장합니다."
    },
    "_type": "claim",
    "given_sentence": null
  },
  {
    "type": "필자의 주장",
    "passage": "The modern workplace increasingly glorifies the concept of 'hustle culture'—the belief that success requires constant work, minimal sleep, and perpetual self-improvement. Companies celebrate employees who work overtime and maintain productivity outside business hours. However, this ideology fundamentally contradicts neuroscience research on human performance and well-being. Our brains require adequate rest to consolidate memories, solve complex problems, and maintain emotional resilience. Burnout from excessive work reduces creativity, increases errors, and paradoxically decreases overall productivity. The most innovative and productive workers are those who maintain healthy boundaries between work and personal life. Rather than valorizing exhaustion, organizations should recognize that sustainable excellence emerges from well-rested employees with genuine personal fulfillment. Redefining workplace success to prioritize employee well-being over relentless productivity is not compassionate luxury—it is sound business strategy that benefits both workers and organizations.",
    "choices": [
      "①직원들은 성공을 위해 더 많은 시간을 일해야 한다.",
      "②장시간 근무가 기업의 생산성을 높인다.",
      "③충분한 휴식이 창의성과 업무 효율성을 증진시킨다.",
      "④일과 삶의 균형은 개인의 책임이지 조직의 책임이 아니다.",
      "⑤직원의 웰빙을 우선시하는 것은 비즈니스 전략이다."
    ],
    "answer": 4,
    "explanation": "필자는 휴식이 뇌의 기능 회복과 창의성 증진에 필수적이며, 지속적인 우수함은 충분한 휴식을 취하는 직원으로부터 나온다고 주장합니다. 직원 웰빙을 우선시하는 것이 단순한 인도주의적 배려가 아니라 기업과 개인 모두에게 이득이 되는 건전한 비즈니스 전략이라는 것이 핵심입니다.",
    "wrong_explanations": {
      "①": "필자는 오히려 과도한 근무가 실패한다고 주장합니다.",
      "②": "필자는 장시간 근무가 오히려 생산성을 감소시킨다고 명시합니다.",
      "③": "이는 필자의 주장을 지원하지만, '웰빙이 비즈니스 전략'이라는 핵심보다 구체성이 부족합니다.",
      "⑤": "필자의 핵심 주장과 가장 일치합니다."
    },
    "_type": "claim",
    "given_sentence": null
  },
  {
    "type": "필자의 주장",
    "passage": "University admission systems worldwide increasingly emphasize standardized test scores as primary evaluation criteria. Proponents argue that standardized tests provide objective, comparable measures of academic ability across diverse student populations. However, mounting evidence reveals that these tests primarily measure test-taking skills and socioeconomic advantage rather than genuine academic potential or intellectual capacity. Wealthy families invest in expensive test preparation courses, while disadvantaged students lack access to equivalent resources. Additionally, cultural biases embedded in test design systematically disadvantage minority students. These systems perpetuate educational inequality rather than identify merit. Universities should adopt holistic admissions approaches that evaluate creativity, resilience, intellectual curiosity, and real-world achievements alongside academic metrics. Standardized tests can serve as one data point among many, not as gatekeepers determining educational access. True meritocracy requires admissions systems that recognize diverse forms of excellence and eliminate structural barriers for underprivileged applicants.",
    "choices": [
      "①표준화 시험은 학생의 학업 능력을 객관적으로 측정한다.",
      "②대학 입시에서 표준화 시험의 비중을 더 늘려야 한다.",
      "③표준화 시험은 사회경제적 불평등을 반영하고 재생산한다.",
      "④소수 학생들은 더 나은 시험 준비 과정에 접근해야 한다.",
      "⑤입시 시스템은 문화적 다양성을 반영하는 시험 개발에 집중해야 한다."
    ],
    "answer": 2,
    "explanation": "필자는 표준화 시험이 진정한 학업 능력이 아닌 시험 기술과 사회경제적 이점을 측정하며, 교육 불평등을 심화시킨다고 주장합니다. 핵심은 표준화 시험이 교육 접근성의 진정한 장애물이 되고 있다는 것이고, 이를 하나의 데이터 포인트로 축소하고 다층적 입시 평가 시스템으로 전환해야 한다는 것입니다.",
    "wrong_explanations": {
      "①": "필자는 표준화 시험이 학업 능력의 객관적 측정이 아니라고 주장합니다.",
      "②": "필자는 오히려 표준화 시험의 비중을 줄일 것을 주장합니다.",
      "④": "필자는 시험 준비 과정의 접근성 개선이 아니라 입시 시스템 자체의 근본적 변화를 주장합니다.",
      "⑤": "시험 개발 개선보다 전체 입시 시스템의 다층적 전환이 필자의 중심 주장입니다."
    },
    "_type": "claim",
    "given_sentence": null
  },
  {
    "type": "제목 추론",
    "passage": "Most people assume that the brain's capacity for learning remains stable throughout life. However, neuroplasticity research reveals a different truth. The brain continuously reorganizes itself by forming new neural connections in response to experience and learning. This phenomenon occurs most dramatically during childhood, but the brain retains this ability well into old age. Studies show that learning a new language, practicing a musical instrument, or engaging in complex problem-solving can physically reshape brain structure. Even after stroke or injury, patients can recover lost functions by training different brain regions to compensate. This means that our cognitive potential is not fixed at birth but rather a dynamic resource that responds to how we engage with the world.",
    "choices": [
      "①The Decline of Brain Function with Age",
      "②The Brain's Lifelong Capacity for Transformation",
      "③How Children Learn Better Than Adults",
      "④The Role of Neural Connections in Memory",
      "⑤Why Musical Training Improves Intelligence"
    ],
    "answer": 1,
    "explanation": "지문은 뇌의 가소성(neuroplasticity)을 통해 인생 전반에 걸쳐 뇌가 지속적으로 변화하고 학습할 수 있다는 핵심을 강조합니다. 정답②는 '뇌의 평생 변화 능력'으로 지문의 중심 논제를 가장 잘 포함합니다.",
    "wrong_explanations": {
      "①": "나이가 들어감에 따른 뇌 기능 쇠퇴만 강조하므로, 지문에서 강조하는 '나이가 들어도 가소성이 유지된다'는 내용과 상충합니다.",
      "③": "아동의 학습 우월성에만 초점을 맞추어, 지문의 '성인도 학습 능력이 있다'는 핵심을 놓칩니다.",
      "④": "신경 연결의 메모리 역할은 부분적 내용일 뿐, 지문의 전체적 주제인 '변화 가능성'을 포괄하지 못합니다.",
      "⑤": "음악 훈련의 이점만 다루어 지문에서 다루는 다양한 학습 활동의 일부만 반영합니다."
    },
    "_type": "title",
    "given_sentence": null
  },
  {
    "type": "제목 추론",
    "passage": "The practice of multitasking has become a cultural norm in modern workplaces. Employees pride themselves on juggling multiple projects simultaneously, believing that this demonstrates productivity and efficiency. However, cognitive science research paints a different picture. When people attempt to focus on multiple tasks at once, they experience significant mental overhead as their brains switch between different cognitive contexts. Each switch incurs a 'switching cost'—a measurable loss of attention and accuracy. Studies consistently show that multitaskers make more errors, retain less information, and actually take longer to complete work compared to those who focus on single tasks. The brain's attention system evolved for sustained focus, not rapid context-switching. Organizations that promote a culture of deep, uninterrupted work actually see better results than those celebrating constant multitasking.",
    "choices": [
      "①Building a Productive Workplace Culture",
      "②The Illusion of Efficiency: Why Multitasking Backfires",
      "③How to Switch Between Tasks More Effectively",
      "④The Evolution of Human Attention Spans",
      "⑤Managing Multiple Projects in Modern Business"
    ],
    "answer": 1,
    "explanation": "지문은 '멀티태스킹이 실제로는 비효율적이라는 과학적 증거'를 중심으로 전개됩니다. 정답②의 '효율성의 환상: 왜 멀티태스킹이 역효과를 낼까'는 지문의 핵심 아이러니를 은유적으로 정확히 표현합니다.",
    "wrong_explanations": {
      "①": "생산성 있는 직장 문화 전반을 다루는 너무 광범위한 제목으로, 멀티태스킹의 해로움이라는 구체적 주장을 포함하지 않습니다.",
      "③": "더 효과적으로 작업을 전환하는 방법을 시사하는데, 이는 지문의 '멀티태스킹을 피해야 한다'는 권장사항과 반대됩니다.",
      "④": "인간 주의력의 진화 역사에 초점을 맞추어, 지문의 실용적 논증과 무관합니다.",
      "⑤": "현대 비즈니스에서의 복수 프로젝트 관리라는 중립적 표제로, 멀티태스킹의 부정적 측면이라는 핵심을 생략합니다."
    },
    "_type": "title",
    "given_sentence": null
  },
  {
    "type": "제목 추론",
    "passage": "Microplastics—tiny plastic fragments less than 5 millimeters in size—have become ubiquitous in our environment. They originate from the breakdown of larger plastic waste, synthetic clothing fibers released during washing, and microbeads in personal care products. What makes microplastics particularly insidious is their invisibility and persistence. These particles have been detected in marine ecosystems, freshwater systems, soil, and the atmosphere. Marine organisms consume microplastics, mistaking them for food, which then accumulate in the tissues of larger predators through bioaccumulation. Recent studies have even found microplastics in human blood and lung tissue, raising serious health concerns. The long-term effects on human health remain unclear, but researchers warn that we may be inadvertently ingesting toxic substances. Unlike large plastic waste that can be cleaned up, addressing the microplastics problem requires systemic changes to production and consumption practices.",
    "choices": [
      "①Cleaning Up Plastic Waste in the Ocean",
      "②The Invisible Threat Pervading Our World",
      "③How Microplastics Enter the Food Chain",
      "④The Rise of Synthetic Materials in Industry",
      "⑤Understanding the Types of Environmental Pollution"
    ],
    "answer": 2,
    "explanation": "지문의 핵심은 마이크로플라스틱이 환경 전반에 광범위하게 존재하고, 이것이 인간 건강을 위협하는 보이지 않는 문제라는 점입니다. 정답②의 '우리 세계에 만연한 보이지 않는 위협'은 마이크로플라스틱의 특성(invisibility)과 광범위한 오염(pervasive)을 은유적으로 정확히 표현합니다.",
    "wrong_explanations": {
      "①": "대형 플라스틱 폐기물 정소에만 초점을 맞추어, 마이크로플라스틱의 근본적으로 다른 특성과 해결 방안을 간과합니다.",
      "③": "마이크로플라스틱이 식이연쇄에 들어가는 방식만 다루어, 지문에서 강조하는 광범위한 환경 오염과 인간 건강 위협이라는 더 큰 맥락을 빠뜨립니다.",
      "④": "산업의 합성재료 증가만 논하여, 지문의 환경 오염과 건강 위험이라는 주요 관심사를 다루지 않습니다.",
      "⑤": "환경 오염의 유형 이해라는 너무 일반적인 제목으로, 마이크로플라스틱의 특수성과 위협성을 포함하지 못합니다."
    },
    "_type": "title",
    "given_sentence": null
  },
  {
    "type": "제목 추론",
    "passage": "The concept of 'slow living' has emerged as a countermovement to the accelerated pace of modern life. Originating in Italy with the slow food movement in the 1980s, this philosophy emphasizes intentionality, mindfulness, and savoring experiences rather than rushing through them. Practitioners of slow living consciously reduce their pace in eating, working, and social interactions. This doesn't mean complete rejection of productivity; rather, it prioritizes quality and meaning over quantity and speed. Research shows that people who adopt slow living practices report lower stress levels, improved relationships, and greater life satisfaction. Cities worldwide are establishing car-free zones and promoting local agriculture to support this lifestyle. Yet slow living isn't merely a personal preference—it represents a fundamental critique of consumer capitalism and its assumption that faster and more is always better. In choosing to slow down, individuals subtly resist the system demanding endless acceleration.",
    "choices": [
      "①The Global Growth of the Slow Food Movement",
      "②A Quiet Rebellion Against the Culture of Speed",
      "③Reducing Stress Through Mindful Eating Habits",
      "④How to Improve Work-Life Balance in Cities",
      "⑤The History of Consumer Capitalism and Resistance"
    ],
    "answer": 1,
    "explanation": "지문은 느린 삶이 단순한 생활방식의 선택이 아니라, 빠름과 많음을 추구하는 현대 체계에 대한 저항이자 비판이라는 점을 강조합니다. 정답②의 '속도 문화에 대한 조용한 반란'은 이러한 저항의 성격을 은유적으로 잘 표현합니다.",
    "wrong_explanations": {
      "①": "슬로우 푸드 운동의 세계적 성장만 다루어, 지문이 강조하는 '현대 체계에 대한 비판과 저항'이라는 더 광범위한 의미를 놓칩니다.",
      "③": "명상적 식습관을 통한 스트레스 감소만 강조하여, 느린 삶의 정치적·철학적 의미인 '체계 비판'을 간과합니다.",
      "④": "도시에서의 일과 삶의 균형이라는 실용적 조언에만 초점을 맞추어, 지문의 '자본주의 체계 자체에 대한 저항'이라는 근본적 주제를 포함하지 못합니다.",
      "⑤": "소비자 자본주의의 역사에 중점을 두어, 지문의 '현재 느린 삶의 실천'이라는 주요 내용을 배제합니다."
    },
    "_type": "title",
    "given_sentence": null
  },
  {
    "type": "제목 추론",
    "passage": "Many people believe that memory works like a video recording device, faithfully capturing and storing exact replicas of past events. Neuroscience research, however, has revealed that memory is fundamentally reconstructive. When we recall an event, we don't retrieve a stored file; instead, our brain actively reassembles fragments of sensory details, emotions, and contextual information. This reconstruction process is influenced by our current beliefs, expectations, and emotions at the moment of recall. False memories can be inadvertently created through suggestion, leading people to 'remember' events that never occurred. A person might confidently recall being lost in a shopping mall as a child after hearing family members discuss it repeatedly. These findings have profound implications for the reliability of eyewitness testimony in legal proceedings. While our memories feel authentic and complete, they are actually malleable narratives that we unknowingly revise each time we recall them.",
    "choices": [
      "①How the Brain Stores Information and Facts",
      "②The Unreliable Nature of Eyewitness Evidence",
      "③Memory as a Creative Act of Reconstruction",
      "④Why We Forget Important Childhood Experiences",
      "⑤The Psychological Basis of Human Emotions"
    ],
    "answer": 2,
    "explanation": "지문의 핵심은 '메모리가 정확한 기록이 아니라 현재의 신념과 감정에 의해 능동적으로 재구성되는 과정'이라는 점입니다. 정답③의 '메모리는 재구성의 창의적 행위'는 메모리의 정확성 환상에 대한 비판과 그 진정한 특성을 효과적으로 표현합니다.",
    "wrong_explanations": {
      "①": "뇌의 정보 저장 메커니즘을 다루는 제목인데, 이는 지문에서 비판하는 '메모리는 정확하게 저장된다'는 잘못된 믿음을 암시합니다.",
      "②": "목격자 증언의 신뢰성만 강조하여, 지문이 다루는 메모리의 재구성적 특성과 그 이유라는 더 광범위한 주제를 부분적으로만 포함합니다.",
      "④": "어린 시절의 경험을 잊어버리는 것에 초점을 맞추어, 지문의 '메모리가 어떻게 작동하는가'라는 근본적 질문을 다루지 않습니다.",
      "⑤": "인간 감정의 심리적 기초라는 일반적 주제로, 지문의 메모리 재구성이라는 특정한 논점을 벗어납니다."
    },
    "_type": "title",
    "given_sentence": null
  },
  {
    "type": "무관한 문장",
    "passage": "The concept of 'flow state' has become increasingly popular in psychology and self-help literature. ①Flow refers to a mental state of complete immersion in an activity where a person loses track of time and self-consciousness. ②Mihaly Csikszentmihalyi, a pioneering psychologist, developed this theory in the 1970s based on interviews with artists, musicians, and athletes. ③Many successful people have reported experiencing flow while engaged in hobbies such as gardening or cooking, which can provide relaxation and stress relief. ④To achieve flow, there must be a balance between the challenge level of the task and the person's skill level. ⑤When this balance is achieved, individuals experience heightened focus, increased productivity, and greater satisfaction with their work.",
    "choices": [
      "①",
      "②",
      "③",
      "④",
      "⑤"
    ],
    "answer": 2,
    "explanation": "③번 문장은 정원 가꾸기나 요리 같은 취미 활동의 이점을 언급하지만, 글의 주제인 '플로우 상태의 정의, 이론적 배경, 발생 조건'과 무관합니다. 글은 플로우의 특성과 조건을 설명하는데, 이 문장은 취미 활동의 치유적 가치로 초점이 벗어나 있습니다.",
    "_type": "irrelevant",
    "given_sentence": null,
    "wrong_explanations": {}
  },
  {
    "type": "무관한 문장",
    "passage": "Urban agriculture has emerged as a sustainable solution to food production challenges in cities. ①By cultivating plants in urban spaces such as rooftops, balconies, and community gardens, residents can reduce their carbon footprint and increase food security. ②Urban farming also strengthens community bonds as neighbors work together toward a common goal of producing fresh vegetables and fruits. ③Organic farming methods have gained popularity worldwide because consumers increasingly demand pesticide-free products. ④The practice provides educational opportunities for children to learn about plant growth and nutrition directly through hands-on experience. ⑤Furthermore, green spaces in cities can help regulate temperature, reduce pollution, and improve residents' mental health.",
    "choices": [
      "①",
      "②",
      "③",
      "④",
      "⑤"
    ],
    "answer": 2,
    "explanation": "③번 문장은 유기농 방법과 소비자 수요에 대한 일반적인 언급이지만, 글의 주제인 '도시 농업의 이점'과 직접적인 논리적 연결이 없습니다. 글의 흐름은 도시 농업의 환경적, 사회적, 교육적 이점을 설명하는데, 이 문장은 유기농의 일반적 추세로 벗어나 있습니다.",
    "_type": "irrelevant",
    "given_sentence": null,
    "wrong_explanations": {}
  },
  {
    "type": "무관한 문장",
    "passage": "The human brain's capacity to form new neural connections throughout life is known as neuroplasticity. ①This ability allows individuals to learn new skills, recover from brain injuries, and adapt to changing environments even in old age. ②Neuroscientists have discovered that repeated practice and consistent learning strengthen specific neural pathways in the brain. ③Different regions of the brain control different body functions, including movement, vision, and emotional regulation. ④Environmental enrichment, such as exposure to novel experiences and challenging mental tasks, can enhance neuroplasticity and cognitive function. ⑤Understanding neuroplasticity has revolutionized rehabilitation therapy for stroke patients and individuals with brain injuries.",
    "choices": [
      "①",
      "②",
      "③",
      "④",
      "⑤"
    ],
    "answer": 2,
    "explanation": "③번 문장은 뇌의 구조와 기능에 관한 기본 정보이지만, 글의 주제인 '신경가소성과 그 응용'과 무관합니다. 글은 신경가소성의 정의, 학습 방식, 향상 방법을 설명하는데, 이 문장은 뇌의 일반적 해부학적 정보로 논지를 벗어나 있습니다.",
    "_type": "irrelevant",
    "given_sentence": null,
    "wrong_explanations": {}
  },
  {
    "type": "무관한 문장",
    "passage": "Remote work has fundamentally transformed how companies manage their workforce and organizational culture. ①Employees working from home can often maintain better work-life balance and reduce commuting stress, leading to improved well-being. ②Video conferencing technology has enabled teams to collaborate effectively despite physical distance, making real-time communication possible. ③The average office worker spends approximately eight hours a day at their desk, which can lead to posture-related health issues. ④Companies have also benefited from reduced overhead costs associated with maintaining large office spaces and facilities. ⑤However, some organizations report challenges in maintaining team cohesion and company culture when employees are geographically dispersed.",
    "choices": [
      "①",
      "②",
      "③",
      "④",
      "⑤"
    ],
    "answer": 2,
    "explanation": "③번 문장은 사무실 근무와 관련된 건강 문제를 설명하지만, 글의 주제인 '원격근무의 영향과 이점, 도전과제'와 직접적으로 무관합니다. 글은 원격근무 도입의 결과를 다루는데, 이 문장은 전통 사무실 근무의 건강 문제로 초점이 벗어나 있습니다.",
    "_type": "irrelevant",
    "given_sentence": null,
    "wrong_explanations": {}
  },
  {
    "type": "무관한 문장",
    "passage": "The phenomenon of 'revenge bedtime procrastination' has become prevalent in modern society, particularly among workers with demanding schedules. ①This behavior involves delaying sleep to reclaim personal leisure time after long, exhausting workdays. ②People who engage in this practice often sacrifice sleep hours to watch television, scroll through social media, or pursue hobbies without interruption. ③Sleep deprivation has numerous negative effects on physical health, including increased risk of cardiovascular disease and weakened immune function. ④While this provides temporary psychological relief and a sense of autonomy, it ultimately creates a cycle of fatigue and reduced daytime productivity. ⑤Researchers suggest that establishing clear work-life boundaries and allocating sufficient free time during the day could effectively prevent this counterproductive behavior.",
    "choices": [
      "①",
      "②",
      "③",
      "④",
      "⑤"
    ],
    "answer": 2,
    "explanation": "③번 문장은 수면 부족의 일반적인 건강 영향을 설명하지만, 글의 주제인 '보복성 야행벽의 원인, 메커니즘, 해결책'과 직접적으로 무관합니다. 글은 이 특정 현상의 심리적 배경과 해결 방법을 다루는데, 이 문장은 수면 부족 일반의 의학적 결과로 맥락을 벗어나 있습니다.",
    "_type": "irrelevant",
    "given_sentence": null,
    "wrong_explanations": {}
  },
  {
    "type": "요약문 완성",
    "passage": "Throughout history, humans have relied on oral traditions to preserve cultural knowledge and values. Stories, myths, and legends were passed down from generation to generation through spoken word, serving as a repository of collective wisdom. However, the invention of writing systems fundamentally changed this landscape. Written records allowed information to be stored permanently and transmitted with greater accuracy across vast distances and extended periods. This shift enabled the development of complex civilizations, as written documentation could track laws, trade, scientific discoveries, and historical events. Yet this transition also created a dependency on literacy, excluding those unable to read and write. Moreover, the rise of digital technology has sparked new concerns about the fate of written communication itself. As societies increasingly rely on oral and visual media through podcasts, videos, and social networks, some scholars worry that traditional literacy skills may diminish. Nonetheless, writing remains a powerful tool for preserving nuance and complex ideas in ways that oral communication sometimes cannot achieve.",
    "given_sentence": "Writing systems have _____(A)_____ humanity's ability to preserve and transmit knowledge compared to oral traditions, yet this advantage may be _____(B)_____ by the emerging dominance of digital oral and visual media.",
    "choices": [
      "①(A) enhanced - (B) challenged",
      "②(A) limited - (B) strengthened",
      "③(A) replaced - (B) confirmed",
      "④(A) complicated - (B) supported",
      "⑤(A) prevented - (B) guaranteed"
    ],
    "answer": 0,
    "explanation": "지문의 핵심: 문자 체계는 구전보다 지식 보존과 전달에 있어 인류의 능력을 향상시켰으나(enhanced), 디지털 구술 및 시각 매체의 등장으로 인해 이러한 이점이 도전받고 있음(challenged). 문맥상 이 둘의 대비 관계가 명확하므로 ①이 정답이다.",
    "wrong_explanations": {
      "1": "limited와 strengthened는 문맥상 맞지 않음. 글에서 문자 체계가 지식 보존 능력을 제한했다고 하지 않음.",
      "2": "replaced는 '대체하다'는 의미로, 문자가 구전을 완전히 대체했다는 뜻인데 글의 주제와 맞지 않음.",
      "3": "complicated와 supported는 글의 대비 관계를 나타내지 못함.",
      "4": "prevented는 부정적 의미가 너무 강하며, guaranteed는 글의 우려 표현과 맞지 않음."
    },
    "_type": "summary"
  },
  {
    "type": "요약문 완성",
    "passage": "Consumer behavior has undergone a dramatic transformation with the rise of e-commerce and online shopping. Convenience and access to a vast array of products have made digital retail increasingly attractive to consumers. However, this shift has brought unexpected psychological consequences. Research shows that the overwhelming number of choices available online often leads to decision paralysis, where customers struggle to make purchases due to excessive options. Additionally, the absence of physical product interaction creates a disconnect between expectation and reality. When items arrive at customers' homes, they frequently discover that products don't match their mental images formed from digital descriptions and images. This phenomenon has contributed to rising return rates in online retail. Furthermore, the lack of human interaction in digital transactions reduces the emotional satisfaction that comes from personal service and relationship-building. Consequently, many retailers are now recognizing the need to blend online and offline experiences. Successful companies are implementing strategies that maintain the convenience of e-commerce while restoring elements of personal connection and tangible product evaluation that traditional brick-and-mortar stores provide.",
    "given_sentence": "Although online shopping provides _____(A)_____ benefits, the psychological drawbacks of excessive choice and reduced human interaction have _____(B)_____ retailers to integrate physical and digital retail experiences.",
    "choices": [
      "①(A) undeniable - (B) prompted",
      "②(A) minimal - (B) prevented",
      "③(A) temporary - (B) discouraged",
      "④(A) fictional - (B) forced",
      "⑤(A) questionable - (B) allowed"
    ],
    "answer": 0,
    "explanation": "지문의 요점: 온라인 쇼핑의 명백한(undeniable) 이점에도 불구하고, 과도한 선택지와 인간관계 부족의 심리적 단점이 소매업자들로 하여금(prompted) 온오프라인 경험을 통합하도록 이끌었다는 뜻. ①이 정답이다.",
    "wrong_explanations": {
      "1": "minimal은 '최소한의'로, 글에서 언급한 온라인 쇼핑의 많은 이점과 맞지 않음.",
      "2": "prevented는 '방지했다'는 의미로, 글의 문맥상 회사들이 통합 전략을 구현하고 있다고 했으므로 맞지 않음.",
      "3": "temporary와 discouraged는 글의 의도와 맞지 않으며, 회사들이 실제로 통합 전략을 추진 중이라는 사실과 불일치.",
      "4": "fictional은 '가상의, 허구의'로 부적절하며, allowed 역시 문맥상 능동적인 의도를 나타내지 못함."
    },
    "_type": "summary"
  },
  {
    "type": "요약문 완성",
    "passage": "The concept of work-life balance has evolved significantly in recent decades as technological advancements blur the boundaries between professional and personal life. Smartphones and laptops enable employees to work from anywhere at any time, theoretically offering greater flexibility. Yet paradoxically, this constant connectivity has intensified workplace demands rather than alleviating them. Employees now face expectations to respond to work communications during evenings, weekends, and holidays. The blurred boundaries have created a state of perpetual availability that many workers find exhausting and counterproductive. Research indicates that constant work interruption actually decreases productivity and increases stress-related health problems. Recognizing this paradox, forward-thinking organizations are now implementing policies that deliberately establish boundaries between work and personal time. Some companies have banned after-hours emails, designated technology-free zones, and encouraged employees to disconnect during vacations. These interventions acknowledge that true productivity and employee well-being require protected periods of rest. The emerging understanding is that balance isn't about juggling multiple demands simultaneously, but rather about creating distinct boundaries that allow individuals to fully engage in each domain of life.",
    "given_sentence": "While technology has _____(A)_____ the potential for flexible work arrangements, organizations are now _____(B)_____ formal boundaries to prevent the erosion of work-life balance.",
    "choices": [
      "①(A) created - (B) establishing",
      "②(A) diminished - (B) abandoning",
      "③(A) eliminated - (B) weakening",
      "④(A) complicated - (B) ignoring",
      "⑵(A) revealed - (B) enforcing"
    ],
    "answer": 0,
    "explanation": "지문의 요지: 기술이 유연한 업무 배치의 잠재성을 창출했으나(created), 조직들은 이제 업무-삶의 균형 침식을 방지하기 위해 형식적 경계를 수립하고 있음(establishing). ①이 정답이다.",
    "wrong_explanations": {
      "1": "diminished와 abandoning은 글의 의도와 반대. 조직들이 적극적으로 경계를 설정하고 있음.",
      "2": "eliminated는 '제거했다'는 의미로, 기술이 유연성 잠재성을 제거했다는 뜻은 부정확함.",
      "3": "complicated는 기술의 역할을 정확히 설명하지 못하며, ignoring은 글의 내용과 맞지 않음.",
      "4": "revealed와 enforcing은 어느 정도 가능하나, created와 establishing이 더 문맥에 자연스러움."
    },
    "_type": "summary"
  },
  {
    "type": "요약문 완성",
    "passage": "Urban gardens have emerged as a powerful response to the environmental and social challenges facing modern cities. These small-scale agricultural spaces, whether on rooftops, community plots, or vacant lots, provide multiple benefits beyond simple food production. First, urban gardens increase green spaces in concrete-dominated environments, improving air quality and reducing urban heat island effects. They also foster community connections by bringing neighbors together around a shared project. Additionally, urban gardening promotes food security by enabling residents to grow their own vegetables and fruits, reducing dependency on industrialized food systems and transportation. Environmental benefits include improved soil health, reduced food miles, and decreased carbon emissions. However, urban gardens face significant obstacles to widespread adoption. Limited space availability, soil contamination in industrial areas, and regulatory restrictions on land use present practical challenges. Furthermore, the time and knowledge required to maintain gardens successfully can deter casual participants. Despite these limitations, cities worldwide are recognizing that urban agriculture is not merely a hobby but a legitimate urban development strategy that contributes to sustainability, resilience, and quality of life.",
    "given_sentence": "Urban gardens offer substantial environmental and social advantages, yet their expansion is _____(A)_____ by practical constraints that cities must _____(B)_____ through policy reform and resource allocation.",
    "choices": [
      "①(A) unrestricted - (B) ignore",
      "②(A) hindered - (B) address",
      "③(A) motivated - (B) dismiss",
      "④(A) accelerated - (B) overcome",
      "⑤(A) limited - (B) minimize"
    ],
    "answer": 1,
    "explanation": "지문의 요점: 도시 정원은 많은 이점이 있으나, 실질적 제약으로 인해 확대가 저해되고(hindered), 이를 도시가 정책 개혁과 자원 할당을 통해 해결해야 함(address). ②가 정답이다.",
    "wrong_explanations": {
      "0": "unrestricted는 '제약이 없는'이라는 뜻으로, 글에서 명시한 다양한 장애물과 모순됨.",
      "2": "motivated는 '촉진된'이라는 의미로, 글의 문맥상 제약에 관한 내용과 맞지 않음.",
      "3": "accelerated는 '가속화된'이라는 뜻으로, 글에서 제약이 있다고 했으므로 부적절함.",
      "4": "limited와 minimize는 글의 의도보다 약한 표현이며, 적극적인 대응이 필요하다는 메시지를 나타내지 못함."
    },
    "_type": "summary"
  },
  {
    "type": "요약문 완성",
    "passage": "The traditional model of formal education, where students progress through predetermined curricula in age-based cohorts, is increasingly questioned by educators and policymakers. Critics argue that this standardized approach fails to accommodate diverse learning styles, paces, and interests among students. Consequently, alternative educational models have gained traction in recent years. Personalized learning, project-based education, and competency-based progression represent approaches that adapt to individual student needs. These alternatives recognize that effective learning occurs when students engage with content that aligns with their interests and developmental readiness. Technology has accelerated this shift by enabling customized learning pathways and real-time progress monitoring. However, transitioning away from traditional models presents significant challenges. Teachers require substantial professional development to implement new pedagogical approaches effectively. Additionally, assessment systems and institutional structures are designed around standardized metrics, making systemic change difficult. Furthermore, concerns exist about equity, as personalized approaches require robust technological infrastructure that not all schools can afford. Despite these obstacles, educational institutions increasingly acknowledge that one-size-fits-all instruction is inadequate for meeting diverse learner needs in the twenty-first century.",
    "given_sentence": "While standardized education systems are _____(A)_____ for failing to accommodate individual learning differences, implementing personalized alternatives remains _____(B)_____ due to resource constraints and institutional resistance.",
    "choices": [
      "①(A) praised - (B) straightforward",
      "②(A) criticized - (B) challenging",
      "③(A) supported - (B) prohibited",
      "④(A) dismissed - (B) inevitable",
      "⑤(A) abandoned - (B) impossible"
    ],
    "answer": 1,
    "explanation": "지문의 핵심: 표준화된 교육 시스템이 개인 학습 차이를 수용하지 못한다고 비판받고 있으며(criticized), 개인화된 대안 도입은 자원 부족과 제도적 저항으로 인해 어려움(challenging)이 있다는 뜻. ②가 정답이다.",
    "wrong_explanations": {
      "0": "praised는 '칭찬받는'이라는 뜻으로, 글에서 비판적 관점을 명확히 했으므로 맞지 않음.",
      "2": "supported와 prohibited는 글의 내용과 불일치. 지문은 비판적이며 변화는 어렵지만 가능함.",
      "3": "dismissed는 '무시된'이라는 뜻으로, 실제로 변화 필요성이 인정되고 있다는 내용과 맞지 않음.",
      "4": "abandoned는 '버려진'이라는 뜻이고, impossible은 글의 긍정적 전망과 모순됨."
    },
    "_type": "summary"
  }
];
