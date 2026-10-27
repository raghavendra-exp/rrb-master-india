import type { BilingualText } from '../../types';
import { MATH_TOPIC_STUDY_GUIDES } from './topicStudyNotesMath';
import { REASONING_TOPIC_STUDY_GUIDES } from './topicStudyNotesReasoning';
import { GK_RAILWAY_TOPIC_STUDY_GUIDES } from './topicStudyNotesGK';
import { ENGINEERING_TOPIC_STUDY_GUIDES } from './topicStudyNotesEngineering';
import { ALP_TECH_TOPIC_STUDY_GUIDES } from './topicStudyNotesALP';
import { UG_AND_GROUP_D_TOPIC_STUDY_GUIDES } from './topicStudyNotesUGAndGroupD';

export interface SolvedWorkedExample {
  id: string;
  level: 'CBT-1 Foundation' | 'CBT-2 Advanced' | 'Group D Special' | 'RRB JE Technical';
  question: BilingualText;
  standardSolution: BilingualText;
  topperShortcut: BilingualText;
}

export interface TopicStudyGuide {
  topicId: string;
  title: BilingualText;
  subjectCategory: BilingualText;
  targetExam: BilingualText;
  recommendedStudyTime: string;
  blueprintImage?: {
    src: string;
    caption: BilingualText;
  };
  conceptualTheory: {
    heading: BilingualText;
    deepExplanation: BilingualText;
    keyMechanisms: BilingualText[];
  };
  formulasAndLaws: {
    label: string;
    expression: string;
    explanation: BilingualText;
  }[];
  workedExamples: SolvedWorkedExample[];
  commonTraps: BilingualText[];
  topperSpeedHacks: BilingualText[];
  quickRevisionBulletPoints: BilingualText[];
  relatedPracticeCategory: string;
}

const CORE_TOPIC_STUDY_GUIDES: Record<string, TopicStudyGuide> = {
  // =========================================================================
  // 1. NUMBER SYSTEM & ADVANCED SIMPLIFICATION (NTPC Graduate / Undergrad)
  // =========================================================================
  'num-sys-simplification': {
    topicId: 'num-sys-simplification',
    title: {
      en: 'Number System, Divisibility Rules & Remainder Theorems',
      hi: 'संख्या पद्धति, विभाज्यता नियम एवं शेषफल प्रमेय',
    },
    subjectCategory: { en: 'Quantitative Aptitude', hi: 'संख्यात्मक अभिरुचि' },
    targetExam: { en: 'RRB NTPC CBT-1 & CBT-2 / Group D', hi: 'आरआरबी एनटीपीसी सीबीटी-1, 2 एवं ग्रुप डी' },
    recommendedStudyTime: '3.5 Hours',
    blueprintImage: {
      src: './assets/rrb_master_curriculum.jpg',
      caption: {
        en: 'Quantitative Aptitude Master Blueprint: Arithmetic & Number Theory Hierarchy',
        hi: 'संख्यात्मक अभिरुचि मास्टर ब्लूप्रिंट: अंकगणित एवं संख्या सिद्धांत पदानुक्रम',
      },
    },
    conceptualTheory: {
      heading: {
        en: 'Core Principles of Divisibility, Unit Cyclicity & Remainder Arithmetic',
        hi: 'विभाज्यता, इकाई अंक चक्रीयता एवं शेषफल अंकगणित के मूल सिद्धांत',
      },
      deepExplanation: {
        en: 'Number System in RRB examinations tests computational efficiency and algebraic divisibility. The fundamental Euclidean division algorithm states that for any dividend A and non-zero divisor B, A = (B × Q) + R where 0 ≤ R < B. In TCS-conducted RRB examinations, questions heavily focus on composite divisibility (72, 88, 99) where a number must satisfy co-prime component tests simultaneously. Euler’s totient theorem φ(n) provides the remainder when large powers are divided by composite or prime numbers.',
        hi: 'आरआरबी परीक्षाओं में संख्या पद्धति गणना गति और बीजगणितीय विभाज्यता का परीक्षण करती है। यूक्लिडियन विभाजन एल्गोरिदम के अनुसार किसी भाज्य A और गैर-शून्य भाजक B के लिए: A = (B × Q) + R, जहाँ 0 ≤ R < B होता है। टीसीएस द्वारा आयोजित परीक्षाओं में संयुक्त विभाजकों (72, 88, 99) पर सबसे अधिक प्रश्न पूछे जाते हैं, जहाँ संख्या को सह-अभाज्य गुणनखंडों के नियमों को एक साथ संतुष्ट करना होता है। यूलर टोटिएंट फलन φ(n) बड़ी घातों वाले प्रश्नों में तीव्र शेषफल प्रदान करता है।',
      },
      keyMechanisms: [
        {
          en: 'Composite Divisibility (Co-prime Split): To test divisibility by 72, the number must satisfy tests for 8 (last 3 digits divisible by 8) and 9 (sum of all digits divisible by 9) simultaneously.',
          hi: 'संयुक्त विभाजकता (सह-अभाज्य विभाजन): 72 से विभाज्यता जांचने के लिए संख्या को 8 (अंतिम 3 अंक 8 से भाज्य) और 9 (सभी अंकों का योग 9 से भाज्य) दोनों से एक साथ विभाज्य होना होगा।',
        },
        {
          en: 'Divisibility by 11: The difference between the sum of digits at odd places and the sum of digits at even places must be either 0 or a multiple of 11.',
          hi: '11 से विभाज्यता: विषम स्थानों के अंकों के योग और सम स्थानों के अंकों के योग का अंतर 0 या 11 का गुणज होना चाहिए।',
        },
        {
          en: 'Cyclicity of Unit Digits: Numbers ending in 2, 3, 7, 8 have a cyclicity of 4. Numbers ending in 4 and 9 have a cyclicity of 2 (odd/even powers). Numbers ending in 0, 1, 5, 6 retain their unit digit across all positive integer powers.',
          hi: 'इकाई अंक की चक्रीयता: 2, 3, 7, 8 पर समाप्त होने वाली संख्याओं की चक्रीयता 4 होती है। 4 और 9 की चक्रीयता 2 होती है (विषम/सम घात)। 0, 1, 5, 6 का इकाई अंक सभी धनात्मक पूर्णांक घातों पर अपरिवर्तित रहता है।',
        },
        {
          en: 'Euler’s Totient Theorem: If gcd(a, n) = 1, then a^φ(n) ≡ 1 (mod n). For a prime p, φ(p) = p - 1. For n = p^a · q^b, φ(n) = n(1 - 1/p)(1 - 1/q).',
          hi: 'यूलर का प्रमेय: यदि gcd(a, n) = 1 है, तो a^φ(n) ≡ 1 (mod n)। अभाज्य संख्या p हेतु φ(p) = p - 1 होता है।',
        },
        {
          en: 'Recurring Decimal Fractions: Pure recurring decimal 0.p̄ = p/9. Mixed recurring decimal 0.pq̄ = (pq - p) / 90. For 0.pqr̄ = (pqr - pq) / 900.',
          hi: 'आवर्त दशमलव भिन्न: शुद्ध आवर्त 0.p̄ = p/9। मिश्रित आवर्त 0.pq̄ = (pq - p) / 90। 0.pqr̄ = (pqr - pq) / 900।',
        },
      ],
    },
    formulasAndLaws: [
      {
        label: 'Division Lemma',
        expression: 'Dividend = (Divisor × Quotient) + Remainder',
        explanation: { en: 'Basic division equality where 0 ≤ Remainder < Divisor.', hi: 'मूल विभाजन समीकरण जहाँ 0 ≤ शेषफल < भाजक।' },
      },
      {
        label: 'Euler Totient Remainder',
        expression: 'a^φ(n) ≡ 1 (mod n) [when gcd(a, n) = 1]',
        explanation: { en: 'Reduces enormous powers into small remainder modulo operations.', hi: 'बड़ी घातों को लघु शेषफल मॉड्यूलो गणना में बदलता है।' },
      },
      {
        label: 'Mixed Recurring Conversion',
        expression: '0.ab̄ = (ab - a) / 90  |  0.abc̄ = (abc - ab) / 900',
        explanation: { en: 'Converts non-terminating recurring repeating numbers into exact rational fractions.', hi: 'अनंत आवर्त दशमलव संख्याओं को सटीक परिमेय भिन्न में बदलता है।' },
      },
      {
        label: 'Sum of First n Natural Numbers',
        expression: 'Σn = n(n + 1) / 2  |  Σn² = n(n + 1)(2n + 1) / 6',
        explanation: { en: 'Fundamental series sums for consecutive integer calculations.', hi: 'लगातार पूर्णांकों के योग और वर्गों के योग का सूत्र।' },
      },
    ],
    workedExamples: [
      {
        id: 'num-ex-1',
        level: 'CBT-2 Advanced',
        question: {
          en: 'If a 9-digit number 785x3678y is completely divisible by 72, find the value of (5x - 3y) for the largest possible value of y.',
          hi: 'यदि 9-अंकों की संख्या 785x3678y, 72 से पूर्णतः विभाज्य है, तो y के अधिकतम संभव मान के लिए (5x - 3y) का मान ज्ञात कीजिए।',
        },
        standardSolution: {
          en: 'Step 1: 72 = 8 × 9. Test divisibility by 8 on last 3 digits: 78y must be divisible by 8. Dividing 780 by 8: 780 = 8 × 97 + 4. Next multiple is 784 (y = 4). No other single-digit value makes 78y divisible by 8 since 784 + 8 = 792. Thus y = 4.\nStep 2: Test divisibility by 9: Sum of digits = 7 + 8 + 5 + x + 3 + 6 + 7 + 8 + 4 = 48 + x. For (48 + x) to be divisible by 9, nearest multiple is 54. Hence 48 + x = 54 => x = 6.\nStep 3: Evaluate (5x - 3y) = 5(6) - 3(4) = 30 - 12 = 18.',
          hi: 'चरण 1: 72 = 8 × 9। अंतिम 3 अंकों (78y) पर 8 से विभाज्यता: 78y को 8 से कटना चाहिए। 784 ÷ 8 = 98। अतः y = 4 (एकमात्र 1-अंकीय मान)।\nचरण 2: 9 से विभाज्यता: अंकों का योग = 7+8+5+x+3+6+7+8+4 = 48 + x। 48 के बाद 9 का गुणज 54 है, अतः x = 54 - 48 = 6।\nचरण 3: (5x - 3y) = 5(6) - 3(4) = 30 - 12 = 18।',
        },
        topperShortcut: {
          en: '⚡ 10-Second Speed Hack: 78y ÷ 8: 78 / 8 leaves remainder 6. 6y is divisible by 8 only when y = 4 (since 64 ÷ 8 = 8). Sum of digits modulo 9: (7+8+5+3+6+7+8+4+x) mod 9 = (3+x) mod 9 = 0 => x = 6. Immediately 5(6) - 3(4) = 18. Answer locked in 12 seconds.',
          hi: '⚡ 10-सेकंड टॉपर हैक: 78 ÷ 8 में शेष 6 बचता है। 6y केवल 64 पर कटता है => y = 4। 9 से अंकों का योग शेष: (48 + x) => 4+8=12 => 1+2=3 => 3+x=9 => x=6। 5(6) - 3(4) = 18।',
        },
      },
      {
        id: 'num-ex-2',
        level: 'CBT-1 Foundation',
        question: {
          en: 'Find the remainder when 37^102 is divided by 7.',
          hi: '37^102 को 7 से विभाजित करने पर शेषफल क्या होगा?',
        },
        standardSolution: {
          en: 'Step 1: Simplify the base modulo 7: 37 = (5 × 7) + 2 => 37 ≡ 2 (mod 7).\nStep 2: By Fermat’s Little Theorem: Since 7 is prime and gcd(2, 7) = 1, 2^(7-1) = 2^6 ≡ 1 (mod 7).\nStep 3: Divide the exponent by 6: 102 = 6 × 17 (exact multiple).\nStep 4: Therefore, 2^102 = (2^6)^17 ≡ 1^17 ≡ 1 (mod 7). Remainder = 1.',
          hi: 'चरण 1: आधार को 7 से छोटा करें: 37 ÷ 7 शेष = 2। अतः 37 ≡ 2 (mod 7)।\nचरण 2: फर्मेट प्रमेय: अभाज्य 7 हेतु 2^(7-1) = 2^6 ≡ 1 (mod 7)।\nचरण 3: घात 102 को 6 से विभाजित करें: 102 = 6 × 17 (पूर्ण विभाजन)।\nचरण 4: 2^102 = (2^6)^17 ≡ 1^17 = 1। अतः शेषफल = 1।',
        },
        topperShortcut: {
          en: '⚡ Direct Remainder Hack: 37 mod 7 = 2. 2³ = 8 ≡ +1 (mod 7). 102 is divisible by 3 (102 = 3 × 34). So (2³)^34 ≡ (+1)^34 = 1. Solved mentally without pencil in 4 seconds!',
          hi: '⚡ मौखिक समाधान: 37 mod 7 = 2। 2³ = 8 ≡ +1 (mod 7)। चूंकि 102 = 3 × 34 है, इसलिए (+1)^34 = 1। बिना पेन-कॉपी मात्र 4 सेकंड में उत्तर।',
        },
      },
    ],
    commonTraps: [
      {
        en: 'Forgetting co-prime condition: Testing 12 as 2 × 6 is INCORRECT because 2 and 6 are not co-prime. Always use co-prime factors: 12 = 3 × 4, 72 = 8 × 9, 88 = 8 × 11.',
        hi: 'सह-अभाज्य नियम भूलना: 12 को 2 × 6 से जाँचना गलत है क्योंकि 2 और 6 सह-अभाज्य नहीं हैं। सदैव 3 × 4 का प्रयोग करें। 72 हेतु 8 × 9, 88 हेतु 8 × 11।',
      },
      {
        en: 'Cyclicity 0 power confusion: When the power is a multiple of 4, the effective power is 4, NOT 0. (e.g. 7^48 has effective power 4 => 7^4 unit digit is 1).',
        hi: 'घात के 4 से पूर्णतः कटने पर भूल: जब घात 4 से पूरी कट जाए, तो घात 4 ली जाती है, 0 नहीं (जैसे 7^48 में घात 4 => 7^4 का इकाई अंक 1)।',
      },
    ],
    topperSpeedHacks: [
      {
        en: 'Digital Root (Navashankh Method): In simplification BODMAS problems, compute the sum of digits of every term modulo 9. The digital root of the question must match the digital root of the correct option.',
        hi: 'डिजिटल सम (नवांशंक पद्धति): जटिल सरलीकरण में सभी पदों के अंकों का योग (mod 9) निकालें। प्रश्न का डिजिटल सम सही विकल्प के डिजिटल सम से 100% मेल खाएगा।',
      },
      {
        en: 'Last 2 Digits for 25 and 4: For divisibility by 4 or 25, only inspect the last 2 digits. For 8 and 125, only inspect the last 3 digits.',
        hi: 'अंतिम अंकों का नियम: 4 और 25 के लिए केवल अंतिम 2 अंक देखें। 8 और 125 के लिए केवल अंतिम 3 अंक देखें।',
      },
    ],
    quickRevisionBulletPoints: [
      { en: 'Divisibility by 8 requires last 3 digits divisible by 8.', hi: '8 से विभाज्यता हेतु अंतिम 3 अंक 8 से कटने चाहिए।' },
      { en: 'Divisibility by 9 requires sum of all digits divisible by 9.', hi: '9 से विभाज्यता हेतु सभी अंकों का योग 9 से कटना चाहिए।' },
      { en: 'Fermat theorem: a^(p-1) ≡ 1 (mod p) where p is a prime number and gcd(a, p) = 1.', hi: 'फर्मेट प्रमेय: a^(p-1) ≡ 1 (mod p) जहाँ p अभाज्य है।' },
      { en: 'Unit digit of x^n: divide n by 4, take remainder r (if r=0, take 4).', hi: 'इकाई अंक ज्ञात करने के लिए घात को 4 से भाग दें, शेष r लें (यदि r=0 तो 4 लें)।' },
    ],
    relatedPracticeCategory: 'Mathematics',
  },

  // =========================================================================
  // 2. KINEMATICS & WORK METRICS (TRAINS, TSD, PIPES, TIME & WORK)
  // =========================================================================
  'kinematics-work-metrics': {
    topicId: 'kinematics-work-metrics',
    title: {
      en: 'Kinematics & Work Metrics: Train Crossings, Relative Speed, Pipes & Cisterns',
      hi: 'गतिकी एवं कार्य मेट्रिक्स: रेलगाड़ी, सापेक्ष चाल, समय-कार्य एवं नल-टंकी',
    },
    subjectCategory: { en: 'Quantitative Aptitude', hi: 'संख्यात्मक अभिरुचि' },
    targetExam: { en: 'RRB NTPC CBT-1 & CBT-2 / Group D / RRB JE', hi: 'आरआरबी एनटीपीसी, ग्रुप डी एवं जेई' },
    recommendedStudyTime: '4.0 Hours',
    blueprintImage: {
      src: './assets/rrb_railway_operations.jpg',
      caption: {
        en: 'Railway Kinematics Blueprint: Train Speed, Acceleration Vectors & Relative Crossings',
        hi: 'रेलवे गतिकी ब्लूप्रिंट: ट्रेन गति, त्वरण सदिश एवं सापेक्ष क्रॉसिंग गणना',
      },
    },
    conceptualTheory: {
      heading: {
        en: 'Physics of Relative Motion, Moving Trains & Rate of Fluid Flow',
        hi: 'सापेक्ष गति, गतिशील रेलगाड़ी की भौतिकी एवं द्रव प्रवाह दर',
      },
      deepExplanation: {
        en: 'Kinematics in railway examinations carries maximum direct operational relevance. When a train of length L crosses a stationary point object (pole, person, signal), distance travelled is L. When crossing an extended object (platform, bridge, tunnel of length P), total distance is L + P. When two trains cross each other, total distance is always the sum of both lengths (L1 + L2), while their relative speed is (S1 + S2) in opposite directions and |S1 - S2| in the same direction. For Time & Work, efficiency is inversely proportional to time taken: Work = Efficiency × Time.',
        hi: 'रेलवे परीक्षाओं में गतिकी का सीधा व्यावहारिक महत्व है। जब L लंबाई की ट्रेन किसी बिंदु वस्तु (खंभा, व्यक्ति, सिग्नल) को पार करती है, तो तय दूरी L होती है। जब वह किसी प्लेटफार्म या पुल (लंबाई P) को पार करती है, तो दूरी L + P होती है। दो ट्रेनों के क्रॉसिंग में कुल दूरी सदैव दोनों की लंबाइयों का योग (L1 + L2) होती है, जबकि विपरीत दिशा में सापेक्ष चाल (S1 + S2) और समान दिशा में |S1 - S2| होती है। समय एवं कार्य में: कुल कार्य = दक्षता × समय।',
      },
      keyMechanisms: [
        {
          en: 'Unit Conversion Rule: To convert km/h to m/s, multiply by 5/18. To convert m/s to km/h, multiply by 18/5.',
          hi: 'इकाई रूपांतरण: किमी/घंटा से मी/सेकंड में बदलने हेतु 5/18 से गुणा करें। मी/सेकंड से किमी/घंटा हेतु 18/5 से गुणा करें।',
        },
        {
          en: 'Boats and Streams: Upstream speed = (u - v); Downstream speed = (u + v). Still water speed u = (Down + Up) / 2; Stream rate v = (Down - Up) / 2.',
          hi: 'नाव एवं धारा: धारा के प्रतिकूल चाल = u - v; अनुकूल चाल = u + v। शांत जल में चाल u = (अनुकूल + प्रतिकूल) / 2; धारा की चाल v = (अनुकूल - प्रतिकूल) / 2।',
        },
        {
          en: 'Pipes and Cisterns with Leaks: Inflow pipe adds positive work (+1/A); Leak performs negative work (-1/B). Net capacity per hour = 1/A - 1/B.',
          hi: 'नल और रिसाव: भरने वाला नल धनात्मक कार्य (+1/A) करता है; रिसाव ऋणात्मक कार्य (-1/B) करता है। प्रति घंटे शुद्ध कार्य = 1/A - 1/B।',
        },
        {
          en: 'Alternate Working Days: Calculate work done in 1 complete cycle (e.g., 2 days or 3 days), then divide total units by cycle units to find remaining work.',
          hi: 'एकांतर दिवस कार्य: 1 पूर्ण चक्र (जैसे 2 या 3 दिन) में हुआ कार्य ज्ञात करें, फिर कुल इकाइयों को चक्र इकाइयों से भाग देकर शेष कार्य निकालें।',
        },
      ],
    },
    formulasAndLaws: [
      {
        label: 'Train Crossing Platform',
        expression: 'Time = (Length_train + Length_platform) / Speed_train (in m/s)',
        explanation: { en: 'Fundamental train traversing formula across an extended stationary obstacle.', hi: 'प्लेटफार्म या पुल को पार करने में लगा समय।' },
      },
      {
        label: 'Opposite Relative Crossing',
        expression: 'Time = (L₁ + L₂) / (S₁ + S₂)',
        explanation: { en: 'Two trains crossing each other approaching from opposite directions.', hi: 'विपरीत दिशा में आ रही दो ट्रेनों का क्रॉसिंग समय।' },
      },
      {
        label: 'Average Speed (Equal Distances)',
        expression: 'V_avg = 2·S₁·S₂ / (S₁ + S₂)',
        explanation: { en: 'Harmonic mean of two speeds over equal travel distance segments.', hi: 'दो समान दूरियों पर भिन्न चालों की औसत चाल (हरात्मक माध्य)।' },
      },
      {
        label: 'Work-Efficiency Relation',
        expression: 'Total Work = LCM(Time_A, Time_B, Time_C)  |  Efficiency = Work / Time',
        explanation: { en: 'The LCM Unit Method for instant integer work solutions without fractions.', hi: 'बिना भिन्न के पूर्णांक इकाइयों द्वारा समय-कार्य हल करने की ल.स. विधि।' },
      },
    ],
    workedExamples: [
      {
        id: 'train-ex-1',
        level: 'CBT-2 Advanced',
        question: {
          en: 'A 240-meter long train moving at 72 km/h crosses a platform in 27 seconds. How much time will it take to cross another train of length 360 meters standing stationary on the adjacent track?',
          hi: '72 किमी/घंटा की गति से चल रही 240 मीटर लंबी ट्रेन एक प्लेटफार्म को 27 सेकंड में पार करती है। यह ट्रेन बगल के ट्रैक पर खड़ी 360 मीटर लंबी दूसरी ट्रेन को पार करने में कितना समय लेगी?',
        },
        standardSolution: {
          en: 'Step 1: Convert speed to m/s: Speed = 72 × (5/18) = 20 m/s.\nStep 2: Distance covered in 27 seconds = Speed × Time = 20 × 27 = 540 meters.\nStep 3: Distance = L_train + L_platform => 540 = 240 + L_platform => L_platform = 300 m.\nStep 4: Crossing stationary train of 360 m: Total distance = L1 + L2 = 240 + 360 = 600 meters.\nStep 5: Time = Total Distance / Speed = 600 / 20 = 30 seconds.',
          hi: 'चरण 1: चाल को मी/सेकंड में बदलें: चाल = 72 × (5/18) = 20 मी/सेकंड।\nचरण 2: 27 सेकंड में तय दूरी = 20 × 27 = 540 मीटर।\nचरण 3: कुल दूरी = ट्रेन + प्लेटफार्म => 540 = 240 + प्लेटफार्म => प्लेटफार्म = 300 मीटर।\nचरण 4: खड़ी ट्रेन (360 मीटर) को पार करने में कुल दूरी = 240 + 360 = 600 मीटर।\nचरण 5: समय = कुल दूरी ÷ चाल = 600 ÷ 20 = 30 सेकंड।',
        },
        topperShortcut: {
          en: '⚡ Direct Ratio Hack: Speed is 20 m/s. Platform length calculation was actually unnecessary! Crossing distance for 360m train is simply (240 + 360) = 600m. Time = 600 / 20 = 30s. Don’t waste time finding platform length when question doesn’t ask for it!',
          hi: '⚡ टॉपर शॉर्टकट: 72 किमी/घंटा = 20 मी/सेकंड। प्लेटफार्म की लंबाई निकालना व्यर्थ समय गंवाना है! सीधे 360 मी ट्रेन को पार करने की दूरी = 240 + 360 = 600 मीटर। समय = 600 ÷ 20 = 30 सेकंड।',
        },
      },
      {
        id: 'work-ex-2',
        level: 'CBT-1 Foundation',
        question: {
          en: 'A can complete a project in 16 days and B in 24 days. With the help of C, they complete the work together in 6 days. If the total wage for the work is ₹7200, find C’s share.',
          hi: 'A किसी कार्य को 16 दिनों में तथा B 24 दिनों में कर सकता है। C की सहायता से वे तीनों मिलकर कार्य 6 दिनों में समाप्त करते हैं। यदि कार्य की कुल मजदूरी ₹7200 है, तो C का हिस्सा ज्ञात कीजिए।',
        },
        standardSolution: {
          en: 'Step 1: Assume total work = LCM(16, 24, 6) = 48 units.\nStep 2: Efficiency of A = 48 / 16 = 3 units/day.\nEfficiency of B = 48 / 24 = 2 units/day.\nTotal Efficiency of (A + B + C) = 48 / 6 = 8 units/day.\nStep 3: Efficiency of C = 8 - (3 + 2) = 3 units/day.\nStep 4: Wage is distributed in ratio of efficiency: A : B : C = 3 : 2 : 3.\nTotal parts = 3 + 2 + 3 = 8 parts = ₹7200 => 1 part = ₹900.\nStep 5: C’s share = 3 × 900 = ₹2700.',
          hi: 'चरण 1: कुल कार्य = ल.स.(16, 24, 6) = 48 इकाइयां।\nचरण 2: A की दक्षता = 48 ÷ 16 = 3 इकाई/दिन।\nB की दक्षता = 48 ÷ 24 = 2 इकाई/दिन।\n(A + B + C) की संयुक्त दक्षता = 48 ÷ 6 = 8 इकाई/दिन।\nचरण 3: C की दक्षता = 8 - (3 + 2) = 3 इकाई/दिन।\nचरण 4: मजदूरी दक्षता अनुपात में बंटेगी: A:B:C = 3:2:3 (कुल 8 भाग = ₹7200 => 1 भाग = ₹900)।\nचरण 5: C का हिस्सा = 3 × 900 = ₹2700।',
        },
        topperShortcut: {
          en: '⚡ Fraction Hack: In 6 days, A does 6/16 = 3/8 of work. B does 6/24 = 1/4 = 2/8 of work. Together A and B did 5/8 of work. Thus C did 1 - 5/8 = 3/8 of work. C’s money = 3/8 × ₹7200 = 3 × ₹900 = ₹2700.',
          hi: '⚡ भिन्न हैक: 6 दिन में A ने 6/16 = 3/8 काम किया। B ने 6/24 = 2/8 काम किया। दोनों ने 5/8 किया, तो C ने 3/8 काम किया। C की मजदूरी = 3/8 × 7200 = ₹2700।',
        },
      },
    ],
    commonTraps: [
      {
        en: 'Forgetting speed conversion: Using km/h directly with meters without converting via 5/18 leads to huge calculation errors.',
        hi: 'चाल रूपांतरण भूलना: दूरी मीटर में और चाल किमी/घंटा में सीधे रख देना सबसे बड़ी गलती है। पहले 5/18 से गुणा करें।',
      },
      {
        en: 'Equal time vs equal distance average speed: If time is equal, V_avg = (S1 + S2)/2. If distance is equal, V_avg = 2·S1·S2 / (S1 + S2).',
        hi: 'औसत चाल का भ्रम: समान समय पर औसत चाल (S1+S2)/2 होती है। समान दूरी पर 2S1S2/(S1+S2) होती है।',
      },
    ],
    topperSpeedHacks: [
      {
        en: 'Train Meeting Point Trick: If trains start simultaneously from A and B and meet after time T, and then take T1 and T2 to reach respective destinations: S1 / S2 = √(T2 / T1).',
        hi: 'ट्रेन मिलन उपरांत चाल अनुपात: यदि मिलने के बाद गंतव्य तक पहुंचने में समय T1 और T2 लगे, तो: चाल₁ / चाल₂ = √(T₂ / T₁)।',
      },
    ],
    quickRevisionBulletPoints: [
      { en: '1 km/h = 5/18 m/s; 1 m/s = 18/5 km/h.', hi: '1 किमी/घंटा = 5/18 मी/सेकंड; 1 मी/सेकंड = 18/5 किमी/घंटा।' },
      { en: 'Relative speed in opposite direction = S1 + S2.', hi: 'विपरीत दिशा में सापेक्ष चाल = S1 + S2।' },
      { en: 'Relative speed in same direction = |S1 - S2|.', hi: 'समान दिशा में सापेक्ष चाल = |S1 - S2|।' },
      { en: 'Still water boat speed = (Downstream + Upstream) / 2.', hi: 'शांत जल में नाव की चाल = (अनुकूल + प्रतिकूल) / 2।' },
    ],
    relatedPracticeCategory: 'Mathematics',
  },

  // =========================================================================
  // 3. GROUP D & JE SCIENCE: PHYSICS (LIGHT, OPTICS, ELECTRICITY & MECHANICS)
  // =========================================================================
  'physics-mechanics-optics-electricity': {
    topicId: 'physics-mechanics-optics-electricity',
    title: {
      en: 'High-Weightage Physics: Optics (Mirrors/Lenses), Current Electricity & Mechanics',
      hi: 'उच्च-अंक भौतिकी: प्रकाशिकी (दर्पण/लेंस), विद्युत धारा एवं यांत्रिकी',
    },
    subjectCategory: { en: 'General Science', hi: 'सामान्य विज्ञान' },
    targetExam: { en: 'RRB Group D (25 Marks Science) & RRB JE CBT-1/2', hi: 'आरआरबी ग्रुप डी (25 अंक विज्ञान) एवं आरआरबी जेई' },
    recommendedStudyTime: '4.5 Hours',
    blueprintImage: {
      src: './assets/rrb_physics_optics_circuits.jpg',
      caption: {
        en: 'Applied Physics Laboratory Blueprint: Ray Optics, Circuit Laws & Energy Conversion',
        hi: 'प्रायोगिक भौतिकी प्रयोगशाला ब्लूप्रिंट: किरण प्रकाशिकी, परिपथ नियम एवं ऊर्जा रूपांतरण',
      },
    },
    conceptualTheory: {
      heading: {
        en: 'Principles of Reflection, Refraction, Ohm’s Law & Newton’s Mechanics',
        hi: 'परावर्तन, अपवर्तन, ओम का नियम एवं न्यूटन की यांत्रिकी के सिद्धांत',
      },
      deepExplanation: {
        en: 'Physics in Railway Group D constitutes over 8 to 10 marks out of the 25 Science questions, following NCERT Class 10 strictly. Light questions demand precise Cartesian sign convention mastery: distances measured in the direction of incident light are positive (+), while those opposite are negative (-). A concave mirror has a negative focal length (f < 0), whereas a convex mirror has a positive focal length (f > 0). For lenses, convex lens converges rays with f > 0, while concave lens diverges rays with f < 0. Current Electricity explores Ohm’s law V = IR, Joule’s law of heating H = I²Rt, and equivalent resistances in series and parallel combinations.',
        hi: 'रेलवे ग्रुप डी में 25 विज्ञान प्रश्नों में से भौतिकी के 8 से 10 प्रश्न पूछे जाते हैं, जो पूर्णतः 10वीं एनसीईआरटी पर आधारित होते हैं। प्रकाशिकी में कार्तीय चिह्न परिपाटी सर्वाधिक महत्वपूर्ण है: आपतित किरण की दिशा में दूरियां धनात्मक (+) तथा विपरीत दिशा में ऋणात्मक (-) ली जाती हैं। अवतल दर्पण की फोकस दूरी ऋणात्मक (f < 0) तथा उत्तल दर्पण की धनात्मक (f > 0) होती है। लेंस में उत्तल लेंस अभिसारी (f > 0) एवं अवतल लेंस अपसारी (f < 0) होता है। विद्युत धारा में ओम का नियम V = IR, जूल का तापन नियम H = I²Rt और श्रेणी व समानांतर परिपथ मुख्य हैं।',
      },
      keyMechanisms: [
        {
          en: 'Mirror Formula vs Lens Formula: Mirror uses 1/f = 1/v + 1/u. Lens uses 1/f = 1/v - 1/u.',
          hi: 'दर्पण सूत्र बनाम लेंस सूत्र: दर्पण में 1/f = 1/v + 1/u। लेंस में 1/f = 1/v - 1/u।',
        },
        {
          en: 'Linear Magnification: For mirrors, m = -v/u = h_i / h_o. For lenses, m = +v/u = h_i / h_o. If m is negative, image is real and inverted; if positive, virtual and erect.',
          hi: 'रेखीय आवर्धन: दर्पण हेतु m = -v/u = h_i/h_o। लेंस हेतु m = +v/u = h_i/h_o। ऋणात्मक m वास्तविक व उलटे प्रतिबिंब को तथा धनात्मक m आभासी व सीधे प्रतिबिंब को दर्शाता है।',
        },
        {
          en: 'Power of a Lens: P = 1 / f(in meters). Unit is Dioptre (D). Converging (convex) lens has positive power (+D), diverging (concave) lens has negative power (-D).',
          hi: 'लेंस की क्षमता: P = 1 / f(मीटर में)। मात्रक डायोप्टर (D) है। उत्तल लेंस की क्षमता धनात्मक (+D) तथा अवतल लेंस की ऋणात्मक (-D) होती है।',
        },
        {
          en: 'Resistors in Series & Parallel: In series, R_eq = R1 + R2 + R3 (current remains identical). In parallel, 1/R_eq = 1/R1 + 1/R2 + 1/R3 (potential difference V remains identical).',
          hi: 'प्रतिरोधों का संयोजन: श्रेणीक्रम में R_eq = R1 + R2 + R3 (धारा I समान रहती है)। समानांतर क्रम में 1/R_eq = 1/R1 + 1/R2 (विभवांतर V समान रहता है)।',
        },
      ],
    },
    formulasAndLaws: [
      {
        label: 'Mirror Equation',
        expression: '1/f = 1/v + 1/u  |  R = 2f',
        explanation: { en: 'Relates object distance u, image distance v, and focal length f for spherical mirrors.', hi: 'गोलीय दर्पणों के लिए वस्तु दूरी u, प्रतिबिंब दूरी v और फोकस दूरी f का संबंध।' },
      },
      {
        label: 'Lens Formula & Power',
        expression: '1/f = 1/v - 1/u  |  P = 1/f(m) [Dioptres]',
        explanation: { en: 'Refraction through thin lenses and optical power calculation.', hi: 'पतले लेंसों से अपवर्तन एवं प्रकाशीय क्षमता का सूत्र।' },
      },
      {
        label: 'Ohm’s Law & Resistivity',
        expression: 'V = I · R  |  R = ρ · (L / A)',
        explanation: { en: 'Electric potential, current, resistance, and material resistivity ρ.', hi: 'विभवांतर, धारा, प्रतिरोध एवं विशिष्ट प्रतिरोध (प्रतिरोधकता)।' },
      },
      {
        label: 'Joule’s Heating Effect',
        expression: 'H = I² · R · t = V · I · t = (V² / R) · t',
        explanation: { en: 'Thermal energy dissipated across an electrical conductor of resistance R.', hi: 'R प्रतिरोध वाले चालक में उत्पन्न ऊष्मीय ऊर्जा।' },
      },
    ],
    workedExamples: [
      {
        id: 'optics-ex-1',
        level: 'Group D Special',
        question: {
          en: 'An object is placed at a distance of 20 cm in front of a concave mirror of focal length 15 cm. Find the image distance and nature of the image.',
          hi: '15 सेमी फोकस दूरी वाले एक अवतल दर्पण के सामने 20 सेमी की दूरी पर एक वस्तु रखी गई है। प्रतिबिंब की दूरी एवं उसकी प्रकृति ज्ञात कीजिए।',
        },
        standardSolution: {
          en: 'Step 1: Apply Cartesian Sign Convention: Concave mirror => f = -15 cm. Object in front => u = -20 cm.\nStep 2: Mirror Formula: 1/f = 1/v + 1/u => 1/(-15) = 1/v + 1/(-20).\nStep 3: Rearrange: 1/v = -1/15 + 1/20 = (-4 + 3) / 60 = -1/60.\nStep 4: Image distance v = -60 cm.\nStep 5: Magnification m = -v/u = -(-60) / (-20) = -3.\nConclusion: Since v is negative, the image is formed 60 cm in front of the mirror, is REAL, INVERTED, and 3 times MAGNIFIED.',
          hi: 'चरण 1: कार्तीय चिह्न परिपाटी: अवतल दर्पण हेतु f = -15 सेमी। वस्तु दर्पण के सामने u = -20 सेमी।\nचरण 2: दर्पण सूत्र: 1/f = 1/v + 1/u => -1/15 = 1/v - 1/20।\nचरण 3: 1/v = -1/15 + 1/20 = (-4 + 3) / 60 = -1/60 => v = -60 सेमी।\nचरण 4: आवर्धन m = -v/u = -(-60)/(-20) = -3।\nनिष्कर्ष: प्रतिबिंब दर्पण के आगे 60 सेमी पर, वास्तविक, उल्टा एवं 3 गुना बड़ा बनेगा।',
        },
        topperShortcut: {
          en: '⚡ Visual Position Hack: Object is between C (30 cm) and F (15 cm). From ray optics rules: When object is between C and F, image MUST form beyond C (>30 cm), real and magnified. Immediately eliminate options with v < 30 cm or positive v! You get v = -60 cm in 3 seconds.',
          hi: '⚡ किरण स्थिति हैक: वस्तु वक्रता केंद्र C (30 सेमी) और F (15 सेमी) के बीच है। नियम: जब वस्तु C और F के बीच हो, तो प्रतिबिंब C से परे (>30 सेमी) वास्तविक व बड़ा बनता है। + मान वाले विकल्प तुरंत खारिज करें।',
        },
      },
      {
        id: 'elec-ex-2',
        level: 'CBT-1 Foundation',
        question: {
          en: 'Three identical resistors of 6 Ω each are connected such that two are in parallel, and this combination is connected in series with the third. Find the equivalent resistance of the entire circuit.',
          hi: '6 Ω के तीन समान प्रतिरोधों को इस प्रकार जोड़ा गया है कि दो समानांतर क्रम में हैं, और यह संयोजन तीसरे प्रतिरोध के साथ श्रेणीक्रम में है। संपूर्ण परिपथ का तुल्य प्रतिरोध ज्ञात कीजिए।',
        },
        standardSolution: {
          en: 'Step 1: Parallel combination of two 6 Ω resistors: 1/R_p = 1/6 + 1/6 = 2/6 = 1/3 => R_p = 3 Ω.\nStep 2: Series combination of R_p with third 6 Ω resistor: R_eq = R_p + R_3 = 3 + 6 = 9 Ω.',
          hi: 'चरण 1: दो 6 Ω प्रतिरोध समानांतर में: 1/R_p = 1/6 + 1/6 = 2/6 => R_p = 3 Ω।\nचरण 2: यह संयोजन तीसरे 6 Ω के साथ श्रेणी में: R_eq = 3 + 6 = 9 Ω।',
        },
        topperShortcut: {
          en: '⚡ Identical Resistor Rule: Two identical resistors of R in parallel have equivalent R/2. Here 6/2 = 3 Ω. In series add 6: 3 + 6 = 9 Ω. Mental arithmetic in 2 seconds!',
          hi: '⚡ समान प्रतिरोध नियम: दो समान R प्रतिरोध समानांतर में हों तो तुल्य मान R/2 होता है (6/2 = 3 Ω)। श्रेणी में जोड़ें: 3 + 6 = 9 Ω।',
        },
      },
    ],
    commonTraps: [
      {
        en: 'Mixing sign of u and f: In optics, u is ALWAYS negative (-u) in standard Cartesian convention. Forgetting this flips the sign of v completely.',
        hi: 'u और f के चिह्न में भूल: कार्तीय परिपाटी में वस्तु दूरी u सदैव ऋणात्मक (-u) होती है। इसे भूलने से प्रतिबिंब की दूरी और प्रकृति दोनों गलत हो जाते हैं।',
      },
      {
        en: 'Power formula unit error: P = 1/f only when focal length f is in METERS. If given in cm, use P = 100 / f(cm).',
        hi: 'क्षमता सूत्र में मात्रक त्रुटि: P = 1/f केवल तभी होता है जब f मीटर में हो। यदि सेमी में हो तो P = 100/f(सेमी) प्रयोग करें।',
      },
    ],
    topperSpeedHacks: [
      {
        en: 'Electric Power Units Hack: 1 Commercial Unit of electricity = 1 kWh = 3.6 × 10^6 Joules = 3.6 MJ.',
        hi: 'विद्युत ऊर्जा मात्रक हैक: 1 व्यावसायिक यूनिट = 1 किलोवाट घंटा (kWh) = 3.6 × 10^6 जूल।',
      },
    ],
    quickRevisionBulletPoints: [
      { en: 'Concave mirror: f is negative; Convex mirror: f is positive.', hi: 'अवतल दर्पण: f ऋणात्मक; उत्तल दर्पण: f धनात्मक।' },
      { en: 'Refractive index n = c / v (speed of light in vacuum / speed in medium).', hi: 'अपवर्तनांक n = c / v (निर्वात में प्रकाश चाल / माध्यम में चाल)।' },
      { en: 'Ohm’s law: V = IR; slope of V-I graph gives resistance R.', hi: 'ओम का नियम: V = IR; V-I ग्राफ की प्रवणता प्रतिरोध R देती है।' },
      { en: 'Resistors in parallel have same potential difference across each branch.', hi: 'समानांतर क्रम में जुड़े प्रत्येक प्रतिरोधक पर विभवांतर समान रहता है।' },
    ],
    relatedPracticeCategory: 'General Science',
  },

  // =========================================================================
  // 4. RAILWAY OPERATIONS, KAVACH 4.0, TRACTION & PERMANENT WAY
  // =========================================================================
  'modern-systems-kavach-dfc-pus': {
    topicId: 'modern-systems-kavach-dfc-pus',
    title: {
      en: 'Modern Railway Systems: Kavach 4.0 ATP, 25 kV AC Traction, DFC & Vande Bharat',
      hi: 'आधुनिक रेलवे प्रणालियाँ: कवच 4.0 एटीपी, 25 kV एसी ट्रैक्शन, डीएफसी एवं वंदे भारत',
    },
    subjectCategory: { en: 'Railway Engineering & GK', hi: 'रेलवे इंजीनियरिंग एवं सामान्य ज्ञान' },
    targetExam: { en: 'All RRB Exams (NTPC, JE, Group D, ALP)', hi: 'समस्त आरआरबी परीक्षाएं (एनटीपीसी, जेई, ग्रुप डी, एएलपी)' },
    recommendedStudyTime: '3.0 Hours',
    blueprintImage: {
      src: './assets/rrb_railway_kavach_atp.jpg',
      caption: {
        en: 'Kavach 4.0 Automatic Train Protection (ATP) Architecture Blueprint: LocoSIG, Station Kavach & RFID',
        hi: 'कवच 4.0 ऑटोमैटिक ट्रेन प्रोटेक्शन (एटीपी) आर्किटेक्चर ब्लूप्रिंट: लोकोसिग, स्टेशन कवच एवं आरएफआईडी',
      },
    },
    conceptualTheory: {
      heading: {
        en: 'Architecture of SIL-4 Safety Systems, 25 kV Electric Traction & High-Speed Trainsets',
        hi: 'SIL-4 संरक्षा प्रणाली आर्किटेक्चर, 25 kV विद्युत ट्रैक्शन एवं हाई-स्पीड ट्रेनसेट',
      },
      deepExplanation: {
        en: 'Indian Railways has undergone massive technological modernization centered on safety, electrification, and dedicated freight transit. Kavach 4.0 is an indigenously developed Automatic Train Protection (ATP) system certified to Safety Integrity Level 4 (SIL-4) standard. It features Onboard Loco Kavach, Trackside RFID tags spaced at 1 km intervals, Station Kavach connected to Electronic Interlocking (EI), and Towers communicating over 433 MHz UHF radio with GSM-R / LTE-R backup. It enforces continuous speed monitoring, prevents Signal Passing At Danger (SPAD), regulates braking automatically if the loco pilot fails to respond, and prevents head-on/rear-end collisions using SOS broadcast.',
        hi: 'भारतीय रेल ने संरक्षा, 100% विद्युतीकरण और समर्पित माल गलियारों पर आधारित व्यापक तकनीकी आधुनिकिकरण किया है। कवच 4.0 भारत द्वारा स्वदेशी रूप से विकसित ऑटोमैटिक ट्रेन प्रोटेक्शन (ATP) प्रणाली है जो सेफ्टी इंटीग्रिटी लेवल 4 (SIL-4) प्रमाणित है। इसमें लोको कवच, ट्रैक पर 1 किमी अंतराल पर लगे RFID टैग्स, स्टेशन कवच (इलेक्ट्रॉनिक इंटरलॉकिंग से जुड़ा) और 433 MHz UHF रेडियो टावर शामिल हैं। यह गति की निरंतर निगरानी करता है, खतरे के सिग्नल को पार करने (SPAD) पर स्वतः ब्रेक लगाता है, और आमने-सामने की टक्कर रोकता है।',
      },
      keyMechanisms: [
        {
          en: 'Brake Interface Unit (BIU): Electro-pneumatic hardware interfaced directly into the train’s brake pipe (BP) and distributor valves to execute emergency braking without manual human intervention.',
          hi: 'ब्रेक इंटरफेस यूनिट (BIU): ट्रेन के ब्रेक पाइप (BP) से जुड़ा इलेक्ट्रो-न्यूमैटिक हार्डवेयर जो मानवीय हस्तक्षेप के बिना आपातकालीन ब्रेक लगाता है।',
        },
        {
          en: 'OHE Electric Traction: 25 kV AC, 50 Hz single-phase supply. Contact wire height is 5.5 meters on mainlines and 7.5 meters on Western DFC to accommodate double-stack container trains.',
          hi: 'OHE विद्युत ट्रैक्शन: 25 kV AC, 50 Hz सिंगल-फेज आपूर्ति। सामान्य लाइनों पर संपर्क तार की ऊंचाई 5.5 मीटर तथा पश्चिमी डीएफसी पर डबल-स्टैक कंटेनर हेतु 7.5 मीटर है।',
        },
        {
          en: 'Dedicated Freight Corridors (DFCCIL): Western DFC (1506 km, Dadri to JNPT Mumbai) and Eastern DFC (1337 km, Ludhiana to Sonnagar). Designed for 25-tonne / 32.5-tonne axle load and 100 km/h freight speed.',
          hi: 'डेडिकेटेड फ्रेट कॉरिडोर (DFCCIL): पश्चिमी डीएफसी (1506 किमी, दादरी से जेएनपीटी मुंबई) एवं पूर्वी डीएफसी (1337 किमी, लुधियाना से सोननगर)। 25/32.5 टन एक्सल लोड व 100 किमी/घंटा मालगाड़ी गति।',
        },
        {
          en: 'Vande Bharat Trainsets: Distributed power rolling stock (Train 18) built by ICF Chennai. Accelerates from 0 to 100 km/h in 52 seconds with regenerative braking recovering 30% electrical energy.',
          hi: 'वंदे भारत ट्रेनसेट: आईसीएफ चेन्नई द्वारा निर्मित डिस्ट्रीब्यूटेड पावर रोलिंग स्टॉक (ट्रेन 18)। 0 से 100 किमी/घंटा गति मात्र 52 सेकंड में प्राप्त करती है तथा पुनर्योजी ब्रेकिंग से 30% ऊर्जा बचाती है।',
        },
      ],
    },
    formulasAndLaws: [
      {
        label: 'Traction Power Equation',
        expression: 'P = V · I · cos(φ)  [25 kV AC Single Phase]',
        explanation: { en: 'Electric traction active power delivered from substation feeding posts (FP).', hi: 'विद्युत सबस्टेशनों से ट्रैक्शन मोटर को प्रदत्त वास्तविक शक्ति।' },
      },
      {
        label: 'Braking Distance Deceleration',
        expression: 'v² = u² - 2·a·s  =>  s = u² / (2·a)',
        explanation: { en: 'Kinematic emergency braking stopping distance calculated by Kavach ATP computer.', hi: 'कवच एटीपी कंप्यूटर द्वारा आपातकालीन अवरोधन दूरी की गणना।' },
      },
      {
        label: 'Broad Gauge Standard',
        expression: 'Gauge = 1676 mm (5 ft 6 in)  |  Rail Grade = 60 kg/m (90 UTS)',
        explanation: { en: 'Primary mainline track geometry and rail specification across Indian Railways.', hi: 'भारतीय रेल की मुख्य लाइनों की ब्रॉड गेज चौड़ाई और रेल पटरी विनिर्देश।' },
      },
    ],
    workedExamples: [
      {
        id: 'kavach-ex-1',
        level: 'CBT-2 Advanced',
        question: {
          en: 'Which wireless frequency band does Kavach 4.0 primarily utilize for communication between the loco unit and wayside station equipment, and what safety integrity certification level does it hold?',
          hi: 'कवच 4.0 लोको यूनिट एवं ट्रैक-साइड स्टेशन उपकरणों के मध्य संचार हेतु मुख्य रूप से किस रेडियो फ्रीक्वेंसी बैंड का उपयोग करता है, और इसे कौन सा संरक्षा प्रमाणन स्तर प्राप्त है?',
        },
        standardSolution: {
          en: 'Step 1: Frequency band: Kavach 4.0 operates on the 433 MHz Ultra High Frequency (UHF) radio band for station-to-loco duplex telemetry, backed up with GSM-R / LTE-R 4G/5G railway wireless networks.\nStep 2: Safety certification: It holds Safety Integrity Level 4 (SIL-4), the highest global benchmark for railway signaling safety from independent safety assessors (ISA).\nStep 3: Track tag hardware: High-frequency RFID tags embedded on sleepers transmit absolute geographic kilometer coordinates and gradient data to the loco as it passes overhead.',
          hi: 'चरण 1: रेडियो आवृत्ति: कवच 4.0 स्टेशन और लोकोमोटिव के बीच संचार हेतु 433 MHz UHF (अल्ट्रा हाई फ्रीक्वेंसी) बैंड का उपयोग करता है।\nचरण 2: संरक्षा प्रमाणन: इसे SIL-4 (सेफ्टी इंटीग्रिटी लेवल 4) प्राप्त है, जो वैश्विक रेलवे में संरक्षा का उच्चतम स्तर है।\nचरण 3: ट्रैक हार्डवेयर: स्लीपरों पर लगे आरएफआईडी (RFID) टैग्स ट्रेन के गुजरते ही सटीक किलोमीटर और ढलान का डेटा इंजन को भेजते हैं।',
        },
        topperShortcut: {
          en: '⚡ Direct Exam Memory Formula: Kavach = UHF 433 MHz + SIL-4 + RFID + BIU (Brake Interface Unit). RDSO developed in Hyderabad (Medha, HBL, Kernex). Direct question in CBT-2!',
          hi: '⚡ सीधा स्मृति सूत्र: कवच = 433 MHz UHF + SIL-4 प्रमाणन + RFID टैग्स + BIU (ब्रेक इंटरफेस)। आरडीएसओ लखनऊ द्वारा विकसित। परीक्षा में 100% आने वाला तथ्य।',
        },
      },
    ],
    commonTraps: [
      {
        en: 'Confusing WDFC and EDFC endpoints: Western DFC runs Dadri to JNPT Mumbai (1506 km). Eastern DFC runs Ludhiana to Sonnagar (1337 km - Sonnagar to Dankuni is PPP).',
        hi: 'डीएफसी के छोरों में भ्रम: पश्चिमी डीएफसी दादरी से जेएनपीटी मुंबई (1506 किमी) है। पूर्वी डीएफसी साहनेवाल (लुधियाना) से सोननगर (1337 किमी) है।',
      },
      {
        en: 'Kavach technology type: Kavach is NOT European ETCS Level 2; it is an indigenous Indian ATP system complying with similar SIL-4 standards but engineered at 1/4th the international capital cost.',
        hi: 'कवच तकनीक का भ्रम: कवच यूरोपीय ईटीसीएस नहीं है, बल्कि भारत का स्वदेशी एटीपी सिस्टम है जिसकी लागत विदेशी प्रणालियों से एक-चौथाई है।',
      },
    ],
    topperSpeedHacks: [
      {
        en: 'Locomotive Code Decoding: WAP-7 = W (Broad Gauge), A (AC Electric 25kV), P (Passenger), 7 (Generation 7). WAG-12B = W (Broad Gauge), A (AC Electric), G (Goods/Freight), 12 (12,000 Horsepower Alstom Madhepura).',
        hi: 'लोकोमोटिव नामकरण हैक: WAP-7 => W (ब्रॉड गेज), A (एसी ट्रैक्शन 25kV), P (यात्री पैसेंजर), 7 (7वीं पीढ़ी)। WAG-12B => W (ब्रॉड गेज), A (एसी), G (गुड्स मालगाड़ी), 12 (12,000 हॉर्सपावर)।',
      },
    ],
    quickRevisionBulletPoints: [
      { en: 'Kavach is certified to SIL-4 safety standard.', hi: 'कवच SIL-4 संरक्षा मानक प्रमाणित है।' },
      { en: 'Indian Railways mainline traction uses 25 kV AC 50 Hz single phase.', hi: 'भारतीय रेल मुख्य लाइनों पर 25 kV AC 50 Hz विद्युत का उपयोग करती है।' },
      { en: 'Broad Gauge width = 1676 mm; Standard Gauge = 1435 mm (Metro).', hi: 'ब्रॉड गेज = 1676 मिमी; स्टैंडर्ड गेज = 1435 मिमी (मेट्रो)।' },
      { en: 'Vande Bharat Express (Train 18) was designed and manufactured by ICF Chennai.', hi: 'वंदे भारत एक्सप्रेस का निर्माण आईसीएफ चेन्नई द्वारा किया गया।' },
    ],
    relatedPracticeCategory: 'Railway Knowledge',
  },

  // =========================================================================
  // 5. RRB JE TECHNICAL: CIVIL ENGINEERING (MATERIALS, SURVEYING, P-WAY)
  // =========================================================================
  'civil-materials-surveying-structures': {
    topicId: 'civil-materials-surveying-structures',
    title: {
      en: 'RRB JE Civil Core: Building Materials, Surveying, RCC & Railway P-Way',
      hi: 'आरआरबी जेई सिविल कोर: निर्माण सामग्री, सर्वेक्षण, आरसीसी एवं रेलवे स्थायी मार्ग',
    },
    subjectCategory: { en: 'Engineering Technical (100 Marks)', hi: 'इंजीनियरिंग तकनीकी (100 अंक)' },
    targetExam: { en: 'RRB JE CBT-2 (Civil & Allied Engineering)', hi: 'आरआरबी जेई सीबीटी-2 (सिविल इंजीनियरिंग)' },
    recommendedStudyTime: '5.0 Hours',
    blueprintImage: {
      src: './assets/rrb_railway_signals_track.jpg',
      caption: {
        en: 'Civil P-Way Engineering Blueprint: UIC 60 kg/m Rails, PSC Sleepers, Ballast & Points',
        hi: 'सिविल पी-वे इंजीनियरिंग ब्लूप्रिंट: यूआईसी 60 किग्रा/मी पटरी, पीएससी स्लीपर, गिट्टी एवं पॉइंट्स',
      },
    },
    conceptualTheory: {
      heading: {
        en: 'Principles of Civil Materials, Geodetic Surveying, Limit State RCC & P-Way Alignment',
        hi: 'निर्माण सामग्री, सर्वेक्षण, सीमा अवस्था आरसीसी एवं पी-वे संरेखण के सिद्धांत',
      },
      deepExplanation: {
        en: 'Civil Engineering in RRB JE CBT-2 carries the highest single-discipline weightage of 100 marks. Topics cover Building Materials (cement hydration, Bogue compounds C3S, C2S, C3A, C4AF, concrete workability slump test), Surveying (chain correction, compass magnetic declination, theodolite balancing, reciprocal levelling to eliminate curvature and refraction errors), Structural Mechanics (bending and shear stress distribution), RCC Design (IS 456:2000 limit state method, balanced under-reinforced and over-reinforced sections), and Permanent Way Engineering (super-elevation cant e = G·V² / 127R, cant deficiency, fishplates, sleeper density M+7 to M+10).',
        hi: 'आरआरबी जेई सीबीटी-2 में सिविल इंजीनियरिंग 100 अंकों का भार रखती है। इसमें निर्माण सामग्री (सीमेंट जलयोजन, बोग यौगिक C3S, C2S, C3A, C4AF, कंक्रीट स्लंप टेस्ट), सर्वेक्षण (श्रृंखला सुधार, चुंबकीय दिक्पात, थियोडोलाइट, व्युत्क्रम तलक्षण), संरचनात्मक यांत्रिकी, आरसीसी डिजाइन (IS 456:2000 लिमिट स्टेट विधि) एवं रेलवे स्थायी मार्ग (कैंट e = GV²/127R, स्लीपर घनत्व M+7) शामिल हैं।',
      },
      keyMechanisms: [
        {
          en: 'Bogue Compounds in Portland Cement: C3S (Tricalcium Silicate) produces early strength (7 days). C2S (Dicalcium Silicate) gives progressive ultimate long-term strength. C3A reacts fastest and causes flash set.',
          hi: 'सीमेंट में बोग यौगिक: C3S प्रारंभिक शक्ति (7 दिन) देता है। C2S दीर्घकालिक अंतिम शक्ति प्रदान करता है। C3A सबसे तेज प्रतिक्रिया करता है और त्वरित जमाव (फ्लैश सेट) का कारण बनता है।',
        },
        {
          en: 'Super-elevation (Cant) on Railway Curves: Equilibrium cant e = (G · V²) / (127 · R), where G = gauge (1.75m dynamic BG), V = speed in km/h, R = radius of curvature in meters.',
          hi: 'रेलवे वक्र पर कैंट (सुपर-एलिवेशन): संतुलन कैंट e = (G · V²) / (127 · R), जहाँ G = ब्रॉड गेज (1.75 मी डायनामिक), V = गति (किमी/घंटा), R = वक्र त्रिज्या (मीटर)।',
        },
        {
          en: 'Curvature and Refraction Correction in Levelling: Combined correction C_c = 0.0673 · d² meters (always subtractive from staff reading), where d is distance in kilometers.',
          hi: 'तलक्षण में संयुक्त सुधार: C_c = 0.0673 · d² मीटर (सदैव घटाया जाता है), जहाँ d दूरी किलोमीटर में है।',
        },
        {
          en: 'IS 456:2000 Under-reinforced Beam Failure: Steel yields first (tensile failure), providing visible ductile warning with large deflections before concrete crushes.',
          hi: 'अंडर-रीइन्फोर्स्ड बीम: पहले स्टील में पराभव (उपज) होता है, जिससे कंक्रीट टूटने से पहले पर्याप्त लचीली चेतावनी और झुकाव मिलता है।',
        },
      ],
    },
    formulasAndLaws: [
      {
        label: 'Railway Super-elevation (Cant)',
        expression: 'e = G · V² / (127 · R)  [for BG: e = 1.315 · V² / R mm]',
        explanation: { en: 'Equilibrium elevation of outer rail to counteract centrifugal acceleration.', hi: 'अपकेंद्री त्वरण को संतुलित करने हेतु बाहरी पटरी का आवश्यक उत्थान।' },
      },
      {
        label: 'Curvature & Refraction Combined Correction',
        expression: 'C_comb = -0.0673 · d²  (in meters, d in km)',
        explanation: { en: 'Geodetic correction applied to long-distance levelling staff measurements.', hi: 'लंबी दूरी के तलक्षण में स्टाफ पाठ्यांक पर लगाया जाने वाला सुधार।' },
      },
      {
        label: 'IS 456 Limiting Depth of Neutral Axis',
        expression: 'x_u,max / d = 0.53 (Fe 250), 0.48 (Fe 415), 0.46 (Fe 500)',
        explanation: { en: 'Neutral axis depth factor in limit state RCC flexural design.', hi: 'लिमिट स्टेट डिजाइन में उदासीन अक्ष की अधिकतम गहराई अनुपात।' },
      },
    ],
    workedExamples: [
      {
        id: 'civil-ex-1',
        level: 'RRB JE Technical',
        question: {
          en: 'Calculate the equilibrium super-elevation required for a Broad Gauge railway track on a 2-degree curve for an equilibrium train speed of 80 km/h.',
          hi: '80 किमी/घंटा की संतुलन गति के लिए 2-डिग्री के वक्र पर ब्रॉड गेज रेलवे ट्रैक हेतु आवश्यक संतुलन सुपर-एलिवेशन (कैंट) की गणना कीजिए।',
        },
        standardSolution: {
          en: 'Step 1: Radius of curvature from degree of curve: R = 1750 / D = 1750 / 2 = 875 meters.\nStep 2: Apply BG Cant Formula: e = (G · V²) / (127 · R) = (1.676 dynamic 1.75 × 80²) / (127 × 875).\nUsing standard Indian Railways empirical formula for BG: e = (1.315 · V²) / R = (1.315 × 80²) / 875.\nStep 3: Calculate: 1.315 × 6400 / 875 = 8416 / 875 = 9.618 cm = 96.2 mm.\nConclusion: Equilibrium super-elevation e = 9.62 cm (or 96.2 mm).',
          hi: 'चरण 1: वक्र की त्रिज्या: R = 1750 / D = 1750 / 2 = 875 मीटर।\nचरण 2: ब्रॉड गेज कैंट सूत्र: e = (1.315 × V²) / R = (1.315 × 80²) / 875।\nचरण 3: मान: 1.315 × 6400 ÷ 875 = 8416 ÷ 875 = 9.62 सेमी (96.2 मिमी)।\nउत्तर: आवश्यक संतुलन कैंट = 96.2 मिमी।',
        },
        topperShortcut: {
          en: '⚡ 15-Second Direct Hack: Memorize R = 1750 / D => R = 875m. Cant e = 1.315 × (V² / R) = 1.315 × (6400 / 875) ≈ 1.315 × 7.31 = 9.6 cm = 96 mm. Always round off to nearest mm.',
          hi: '⚡ सीधा सूत्र: R = 1750 / 2 = 875 मी। e = 1.315 × 6400 / 875 = 96.2 मिमी। रेलवे जेई का सर्वाधिक दोहराया जाने वाला प्रश्न!',
        },
      },
    ],
    commonTraps: [
      {
        en: 'Confusing Radius and Degree of Curve: On a 30m chain chord, R = 1718.9 / D. Indian Railways standard uses R = 1750 / D (approx). Verify question specification.',
        hi: 'त्रिज्या और डिग्री में अंतर: 30 मी श्रृंखला पर R = 1719/D होता है, जबकि 20 मी पर R = 1146/D। रेलवे में सामान्यतः R = 1750/D प्रयुक्त होता है।',
      },
      {
        en: 'Over-reinforced beam pitfall: Over-reinforced sections are prohibited by IS 456 because concrete fails suddenly in brittle compression without prior visual warning.',
        hi: 'ओवर-रीइन्फोर्स्ड बीम की गलती: IS 456 ओवर-रीइन्फोर्स्ड डिजाइन की अनुमति नहीं देता क्योंकि कंक्रीट बिना चेतावनी अचानक टूट जाता है।',
      },
    ],
    topperSpeedHacks: [
      {
        en: 'Slump Test Values: 0-25 mm (very low - road pavements), 25-50 mm (low - mass concrete/canals), 50-100 mm (medium - normal RCC beams/slabs), 100-150 mm (high - congested reinforcement).',
        hi: 'स्लंप टेस्ट मान: 25-50 मिमी (मास कंक्रीट), 50-100 मिमी (सामान्य आरसीसी बीम/स्लैब), 100-150 मिमी (घने सुदृढ़ीकरण वाले कॉलम)।',
      },
    ],
    quickRevisionBulletPoints: [
      { en: 'C3S is responsible for 7-day early strength of concrete.', hi: 'C3S कंक्रीट की 7-दिवसीय प्रारंभिक शक्ति के लिए उत्तरदायी है।' },
      { en: 'Reciprocal levelling eliminates collimation error, curvature error, and refraction error.', hi: 'व्युत्क्रम तलक्षण से कोलिमेशन त्रुटि, वक्रता त्रुटि एवं अपवर्तन त्रुटि तीनों समाप्त हो जाती हैं।' },
      { en: 'Cant deficiency for BG tracks in Indian Railways is generally limited to 75 mm (100 mm for nominated routes).', hi: 'भारतीय रेल ब्रॉड गेज पर कैंट डेफिशिएंसी की सामान्य सीमा 75 मिमी है।' },
      { en: 'Standard sleeper density in IR mainline tracks is M + 7 (where M is rail length in meters).', hi: 'भारतीय रेल में मानक स्लीपर घनत्व M + 7 होता है।' },
    ],
    relatedPracticeCategory: 'Technical Stream',
  },

  // =========================================================================
  // 6. RRB JE CBT-2 ALLIED: BASICS OF COMPUTERS & APPLICATIONS (15 MARKS)
  // =========================================================================
  'computers-hardware-os-networks': {
    topicId: 'computers-hardware-os-networks',
    title: {
      en: 'Basics of Computers & Applications: Architecture, OS, Networking & Security',
      hi: 'कंप्यूटर एवं अनुप्रयोगों के मूल सिद्धांत: आर्किटेक्चर, ओएस, नेटवर्किंग एवं सुरक्षा',
    },
    subjectCategory: { en: 'Allied Engineering (15 Marks)', hi: 'संबद्ध इंजीनियरिंग (15 अंक)' },
    targetExam: { en: 'RRB JE CBT-2 (Mandatory 15 Marks for All Branches)', hi: 'आरआरबी जेई सीबीटी-2 (सभी शाखाओं हेतु 15 अंक)' },
    recommendedStudyTime: '3.0 Hours',
    blueprintImage: {
      src: './assets/rrb_science_engineering_lab.jpg',
      caption: {
        en: 'Computer Science & Networking Lab Architecture: OSI Stack, Memory Hierarchy & Logic Gates',
        hi: 'कंप्यूटर विज्ञान एवं नेटवर्किंग लैब आर्किटेक्चर: ओएसआई 7-लेयर, मेमोरी पदानुक्रम एवं लॉजिक गेट्स',
      },
    },
    conceptualTheory: {
      heading: {
        en: 'Von Neumann Architecture, Memory Hierarchy, OSI Model & Cyber Security',
        hi: 'वॉन न्यूमैन आर्किटेक्चर, मेमोरी पदानुक्रम, ओएसआई मॉडल एवं साइबर सुरक्षा',
      },
      deepExplanation: {
        en: 'Basics of Computers carries a guaranteed 15 marks in RRB JE CBT-2 across all engineering streams. Core topics start with CPU components (ALU, Control Unit, Registers: PC, MAR, MDR, IR). Memory hierarchy ranges from fastest/smallest to slowest/largest: Registers → L1/L2/L3 Cache → RAM (Volatile) → Solid State Drive / HDD → Optical/Magnetic Tape. Operating Systems handle process management (CPU scheduling: FCFS, SJF, Round Robin), virtual memory paging, and deadlock handling. Networking covers the 7 layers of the OSI model, TCP/IP protocol suite, IPv4 (32-bit) vs IPv6 (128-bit), subnet masks, and network security (firewalls, encryption, phishing, ransomware, Trojan horses).',
        hi: 'आरआरबी जेई सीबीटी-2 में सभी इंजीनियरिंग शाखाओं हेतु कंप्यूटर का 15 अंकों का अनिवार्य खंड होता है। इसमें सीपीयू घटक (ALU, CU, रजिस्टर्स जैसे PC, MAR, IR), मेमोरी पदानुक्रम (रजिस्टर → कैश L1/L2 → रैम → एसएसडी/हार्ड डिस्क), ऑपरेटिंग सिस्टम (प्रोसेस शेड्यूलिंग, वर्चुअल मेमोरी पेजिंग, डेडलॉक), नेटवर्किंग का 7-लेयर ओएसआई (OSI) मॉडल, टीसीपी/आईपी, IPv4 (32-बिट) बनाम IPv6 (128-बिट) और साइबर सुरक्षा (फ़ायरवॉल, वायरस, ट्रोजन, रैंसमवेयर) शामिल हैं।',
      },
      keyMechanisms: [
        {
          en: 'Memory Hierarchy Speed: CPU Registers (< 1 ns) > L1 Cache (1-2 ns) > L2/L3 Cache (5-20 ns) > Main RAM (50-100 ns) > NVMe SSD (microseconds) > HDD (milliseconds).',
          hi: 'मेमोरी गति पदानुक्रम: सीपीयू रजिस्टर (<1 ns) > L1 कैश > L2/L3 कैश > मुख्य रैम (DRAM) > एसएसडी > हार्ड डिस्क।',
        },
        {
          en: 'OSI 7 Layers (Bottom to Top): 1. Physical (bits, cables), 2. Data Link (frames, MAC, switches), 3. Network (packets, IP, routers), 4. Transport (segments, TCP/UDP, port numbers), 5. Session, 6. Presentation (SSL/TLS encryption, JPEG/ASCII), 7. Application (HTTP, FTP, DNS, SMTP).',
          hi: 'ओएसआई की 7 परतें: 1. फिजिकल (बिट्स), 2. डेटा लिंक (फ्रेम्स, मैक एड्रेस), 3. नेटवर्क (पैकेट्स, आईपी एड्रेस), 4. ट्रांसपोर्ट (सेगमेंट, टीसीपी/यूडीपी), 5. सेशन, 6. प्रेजेंटेशन (एन्क्रिप्शन), 7. एप्लीकेशन (HTTP, DNS)।',
        },
        {
          en: 'IPv4 vs IPv6 Addressing: IPv4 is 32 bits (4 octets, e.g. 192.168.1.1). IPv6 is 128 bits (8 hexadecimal groups separated by colons, provides 2^128 addresses).',
          hi: 'IPv4 बनाम IPv6: IPv4 32 बिट्स का होता है (जैसे 192.168.1.1)। IPv6 128 बिट्स का होता है (हेक्साडेसिमल प्रारूप, 2^128 पते)।',
        },
        {
          en: 'TCP vs UDP: TCP is connection-oriented, reliable, with 3-way handshake and retransmission. UDP is connectionless, unreliable, fast, best for live video streaming and gaming.',
          hi: 'टीसीपी बनाम यूडीपी: टीसीपी कनेक्शन-ओरिएंटेड, विश्वसनीय (3-वे हैंडशेक) होता है। यूडीपी कनेक्शन-रहित, तेज और लाइव स्ट्रीमिंग के लिए उपयुक्त होता है।',
        },
      ],
    },
    formulasAndLaws: [
      {
        label: 'Binary Memory Capacity Scale',
        expression: '1 Byte = 8 bits  |  1 KB = 1024 Bytes  |  1 MB = 1024 KB  |  1 GB = 1024 MB',
        explanation: { en: 'Powers of 2 scale (2^10 = 1024) used for computer memory calculations.', hi: 'कंप्यूटर मेमोरी की 2 की घातों वाली द्विआधारी गणना प्रणाली।' },
      },
      {
        label: 'IPv4 Total Address Pool',
        expression: 'Total Addresses = 2^32 ≈ 4.29 Billion',
        explanation: { en: 'Theoretical maximum unique address space of standard 32-bit IPv4 protocol.', hi: 'मानक 32-बिट IPv4 पतों की कुल संख्या।' },
      },
    ],
    workedExamples: [
      {
        id: 'comp-ex-1',
        level: 'RRB JE Technical',
        question: {
          en: 'Which layer of the OSI reference model is responsible for end-to-end communication, error detection, flow control, and port addressing?',
          hi: 'ओएसआई (OSI) संदर्भ मॉडल की कौन सी परत एंड-टू-एंड संचार, त्रुटि पहचान, प्रवाह नियंत्रण एवं पोर्ट एड्रेसिंग के लिए उत्तरदायी है?',
        },
        standardSolution: {
          en: 'Step 1: Inspect layer roles: Physical layer handles raw bits over physical media. Data Link layer handles node-to-node hop delivery and MAC addressing. Network layer handles logical IP routing and packet forwarding between networks.\nStep 2: Transport layer (Layer 4) handles host-to-host end-to-end communication, segmentation, flow control (sliding window), error recovery, and port addressing (TCP port 80 for HTTP, port 443 for HTTPS).\nStep 3: Correct answer: Transport Layer (Layer 4).',
          hi: 'चरण 1: परतों के कार्य: फिजिकल लेयर बिट्स ट्रांसमिट करती है। डेटा लिंक लेयर नोड-टू-नोड हॉप डिलीवरी और मैक एड्रेस संभालती है। नेटवर्क लेयर आईपी पैकेट रूटिंग करती है।\nचरण 2: ट्रांसपोर्ट लेयर (परत 4) एंड-टू-एंड संचार, प्रवाह नियंत्रण, त्रुटि सुधार एवं पोर्ट एड्रेसिंग (जैसे HTTP हेतु 80) संभालती है।\nचरण 3: सही उत्तर: ट्रांसपोर्ट लेयर (परत 4)।',
        },
        topperShortcut: {
          en: '⚡ OSI Mnemonic: "Please Do Not Throw Sausage Pizza Away" => Physical, Data Link, Network, Transport, Session, Presentation, Application. "Port & End-to-End" always equals Transport Layer!',
          hi: '⚡ याद रखने की ट्रिक: "PDNTSPA" => फिजिकल, डेटा लिंक, नेटवर्क, ट्रांसपोर्ट, सेशन, प्रेजेंटेशन, एप्लीकेशन। जहां भी "पोर्ट" या "एंड-टू-एंड" आए => ट्रांसपोर्ट लेयर!',
        },
      },
    ],
    commonTraps: [
      {
        en: 'RAM vs ROM volatility: RAM is VOLATILE (loses data on power down). ROM is NON-VOLATILE (retains BIOS/firmware when power is lost).',
        hi: 'रैम और रोम में भ्रम: RAM वोलेटाइल (अस्थिर) है जो बिजली जाने पर मिट जाती है। ROM नॉन-वोलेटाइल (स्थिर) है।',
      },
      {
        en: 'Router layer: A router operates at Network Layer (Layer 3), NOT Transport layer. A switch operates at Data Link Layer (Layer 2).',
        hi: 'राउटर की लेयर: राउटर नेटवर्क लेयर (लेयर 3) पर कार्य करता है। स्विच सामान्यतः डेटा लिंक लेयर (लेयर 2) पर कार्य करता है।',
      },
    ],
    topperSpeedHacks: [
      {
        en: 'Well-Known Port Numbers: HTTP = 80, HTTPS = 443, FTP = 20/21, SSH = 22, Telnet = 23, DNS = 53, SMTP = 25.',
        hi: 'प्रमुख पोर्ट नंबर: HTTP = 80, HTTPS = 443, SSH = 22, DNS = 53, SMTP (ईमेल) = 25।',
      },
    ],
    quickRevisionBulletPoints: [
      { en: 'IPv4 is 32 bits; IPv6 is 128 bits.', hi: 'IPv4 32 बिट्स का तथा IPv6 128 बिट्स का होता है।' },
      { en: 'Registers are the fastest storage memory inside the CPU chip.', hi: 'रजिस्टर सीपीयू चिप के अंदर की सबसे तेज मेमोरी है।' },
      { en: 'MAC address is 48 bits (6 bytes) hardware address burned into the NIC.', hi: 'मैक (MAC) एड्रेस 48 बिट्स (6 बाइट्स) का हार्डवेयर पता होता है।' },
      { en: 'Phishing is a social engineering attack disguised as a trustworthy entity to steal credentials.', hi: 'फ़िशिंग एक सोशल इंजीनियरिंग हमला है जो पहचान चुराने के लिए किया जाता है।' },
    ],
    relatedPracticeCategory: 'Technical Stream',
  },

  // =========================================================================
  // 7. RRB JE CBT-2 ALLIED: ENVIRONMENT & POLLUTION CONTROL (10 MARKS)
  // =========================================================================
  'env-ecosystems-pollution-climate': {
    topicId: 'env-ecosystems-pollution-climate',
    title: {
      en: 'Environment & Pollution Control: Ecosystems, Waste, Ozone & Treaties',
      hi: 'पर्यावरण एवं प्रदूषण नियंत्रण: पारिस्थितिकी तंत्र, अपशिष्ट, ओजोन एवं संधियां',
    },
    subjectCategory: { en: 'Allied Engineering (10 Marks)', hi: 'संबद्ध इंजीनियरिंग (10 अंक)' },
    targetExam: { en: 'RRB JE CBT-2 (Mandatory 10 Marks for All Branches)', hi: 'आरआरबी जेई सीबीटी-2 (सभी शाखाओं हेतु 10 अंक)' },
    recommendedStudyTime: '2.5 Hours',
    blueprintImage: {
      src: './assets/rrb_science_engineering_lab.jpg',
      caption: {
        en: 'Environmental Engineering & Pollution Monitoring Laboratory Schematic',
        hi: 'पर्यावरण इंजीनियरिंग एवं प्रदूषण निगरानी प्रयोगशाला योजनाबद्ध आरेख',
      },
    },
    conceptualTheory: {
      heading: {
        en: 'Ecosystem Dynamics, Air & Water Quality Indicators, Global Warming & Treaties',
        hi: 'पारिस्थितिकी गतिशीलता, वायु एवं जल गुणवत्ता संकेतक, ग्लोबल वार्मिंग एवं अंतर्राष्ट्रीय संधियां',
      },
      deepExplanation: {
        en: 'Environment and Pollution Control is an allied subject in RRB JE CBT-2 carrying 10 marks. Concepts focus on ecological hierarchies (producers, primary/secondary consumers, decomposers), trophic level 10% energy transfer rule (Lindeman’s law), and bio-magnification (DDT concentration increases up the food chain). Air pollution covers PM2.5 and PM10 particulates, primary vs secondary pollutants (Ozone in troposphere and PAN are secondary), and acid rain (SO2 and NOx forming H2SO4 and HNO3 with pH < 5.6). Water pollution highlights Biochemical Oxygen Demand (BOD) and Chemical Oxygen Demand (COD) as metrics of organic contamination, and eutrophication caused by excess nitrogen/phosphorus runoffs.',
        hi: 'पर्यावरण एवं प्रदूषण नियंत्रण आरआरबी जेई सीबीटी-2 में 10 अंकों का अनिवार्य विषय है। इसमें पारिस्थितिकी पिरामिड, खाद्य श्रृंखला में 10% ऊर्जा स्थानांतरण का लिंडेमैन नियम, बायो-मैग्निफिकेशन (डीडीटी का शीर्ष उपभोक्ताओं में संचय), वायु प्रदूषण (PM2.5, PM10, प्राथमिक व द्वितीयक प्रदूषक), अम्लीय वर्षा (SO2 व NOx द्वारा pH < 5.6) शामिल हैं। जल प्रदूषण में जैव रासायनिक ऑक्सीजन मांग (BOD), रासायनिक ऑक्सीजन मांग (COD) और सुपोषण (यूट्रोफिकेशन) मुख्य हैं। अंतर्राष्ट्रीय संधियों में मॉन्ट्रियल प्रोटोकॉल (ओजोन परत) और क्योटो प्रोटोकॉल (ग्रीनहाउस गैसें) प्रमुख हैं।',
      },
      keyMechanisms: [
        {
          en: 'Lindeman’s 10% Law: Only about 10% of the energy stored as biomass in one trophic level is passed on to the next. The remaining 90% is lost during metabolic processes and heat.',
          hi: 'लिंडेमैन का 10% ऊर्जा नियम: एक पोषण स्तर से अगले पोषण स्तर तक केवल 10% ऊर्जा ही स्थानांतरित होती है। शेष 90% जैविक क्रियाओं और ऊष्मा में नष्ट हो जाती है।',
        },
        {
          en: 'BOD vs COD: BOD (Biochemical Oxygen Demand) measures dissolved oxygen consumed by aerobic microorganisms to decompose organic matter over 5 days at 20°C. COD measures total oxygen required to chemically oxidize all organic and inorganic pollutants. COD is ALWAYS greater than or equal to BOD.',
          hi: 'BOD बनाम COD: BOD 5 दिनों में 20°C पर सूक्ष्मजीवों द्वारा कार्बनिक पदार्थों के अपघटन हेतु आवश्यक ऑक्सीजन है। COD रासायनिक रूप से सभी पदार्थों को ऑक्सीकृत करने हेतु आवश्यक ऑक्सीजन है। COD सदैव BOD से अधिक होता है।',
        },
        {
          en: 'Acid Rain Chemistry: Sulfur dioxide (SO2) and Nitrogen oxides (NOx) react with atmospheric moisture to form Sulfuric acid (H2SO4) and Nitric acid (HNO3). Normal rain pH is ~5.6; acid rain has pH < 5.6.',
          hi: 'अम्लीय वर्षा: SO2 और NOx वायुमंडलीय नमी से क्रिया करके सल्फ्यूरिक अम्ल (H2SO4) और नाइट्रिक अम्ल (HNO3) बनाते हैं। जब वर्षा जल का pH 5.6 से कम हो तो उसे अम्लीय वर्षा कहते हैं।',
        },
        {
          en: 'Key International Environmental Protocols: Montreal Protocol (1987) for phasing out Ozone-Depleting Substances (CFCs/Halons). Kyoto Protocol (1997) for legally binding Greenhouse Gas reduction. Paris Agreement (2015) limiting global temperature rise well below 2.0°C (aiming for 1.5°C).',
          hi: 'प्रमुख अंतर्राष्ट्रीय संधियां: मॉन्ट्रियल प्रोटोकॉल (1987) - ओजोन परत क्षरण रोकने (CFCs पर रोक)। क्योटो प्रोटोकॉल (1997) - ग्रीनहाउस गैस उत्सर्जन में कमी। पेरिस समझौता (2015) - वैश्विक तापमान वृद्धि को 1.5°C तक सीमित रखना।',
        },
      ],
    },
    formulasAndLaws: [
      {
        label: 'Lindeman’s 10% Trophic Transfer',
        expression: 'Energy_Level_(n+1) = 0.10 × Energy_Level_n',
        explanation: { en: 'Governs maximum length of viable ecological food chains (rarely exceeds 4-5 levels).', hi: 'पारिस्थितिक खाद्य श्रृंखला की व्यावहारिक लंबाई को नियंत्रित करने वाला नियम।' },
      },
      {
        label: 'Acid Rain Threshold',
        expression: 'pH < 5.6  [Due to dissolved H₂SO₄ & HNO₃]',
        explanation: { en: 'Differentiates natural clean rainfall from anthropogenically acidified precipitation.', hi: 'प्राकृतिक वर्षा जल और अम्लीय वर्षा के मध्य pH का सीमांकन।' },
      },
    ],
    workedExamples: [
      {
        id: 'env-ex-1',
        level: 'RRB JE Technical',
        question: {
          en: 'Which of the following atmospheric pollutants is classified as a SECONDARY pollutant, and which international treaty specifically addresses the protection of the stratospheric ozone layer?',
          hi: 'निम्नलिखित में से कौन सा वायुमंडलीय प्रदूषक "द्वितीयक प्रदूषक" (Secondary Pollutant) के रूप में वर्गीकृत है, और कौन सी अंतर्राष्ट्रीय संधि विशेष रूप से समतापमंडलीय ओजोन परत के संरक्षण से संबंधित है?',
        },
        standardSolution: {
          en: 'Step 1: Primary vs Secondary pollutants: Primary pollutants are emitted directly from sources (e.g. CO, SO2, NO, particulate matter). Secondary pollutants are formed through atmospheric photochemical reactions between primary pollutants (e.g. Ground-level Ozone O3, Peroxyacetyl Nitrate PAN, Photochemical Smog).\nStep 2: International Ozone treaty: The Montreal Protocol on Substances that Deplete the Ozone Layer was agreed in 1987 (effective 1989) to phase out chlorofluorocarbons (CFCs) and halons.\nStep 3: Answer: Secondary pollutant = Ozone (O3) or PAN; Treaty = Montreal Protocol.',
          hi: 'चरण 1: प्राथमिक बनाम द्वितीयक प्रदूषक: प्राथमिक प्रदूषक सीधे स्रोतों से निकलते हैं (जैसे CO, SO2, NOx)। द्वितीयक प्रदूषक वातावरण में रासायनिक क्रियाओं द्वारा बनते हैं (जैसे क्षोभमंडलीय ओजोन O3, PAN, प्रकाश-रासायनिक स्मॉग)।\nचरण 2: ओजोन परत संधि: मॉन्ट्रियल प्रोटोकॉल (1987) समतापमंडलीय ओजोन परत को नुकसान पहुंचाने वाले CFCs पर प्रतिबंध लगाने हेतु बनाया गया था।\nचरण 3: सही उत्तर: द्वितीयक प्रदूषक = ओजोन (O3); संधि = मॉन्ट्रियल प्रोटोकॉल।',
        },
        topperShortcut: {
          en: '⚡ Direct Treaty Memory Code: Montreal = Ozone (1987) | Kyoto = Carbon/GHG (1997) | Basel = Hazardous Waste (1989) | Ramsar = Wetlands (1971) | Paris = 1.5°C Climate (2015). Guaranteed 2 marks in RRB JE CBT-2!',
          hi: '⚡ सीधा संधि कोड: मॉन्ट्रियल = ओजोन (1987) | क्योटो = ग्रीनहाउस गैसें (1997) | बेसल = खतरनाक अपशिष्ट (1989) | रामसर = आर्द्रभूमि (1971) | पेरिस = 1.5°C जलवायु (2015)।',
        },
      },
    ],
    commonTraps: [
      {
        en: 'Ozone: Good vs Bad Ozone: Stratospheric ozone is BENEFICIAL (blocks UV rays). Tropospheric (ground-level) ozone is HARMFUL (secondary pollutant and greenhouse gas).',
        hi: 'ओजोन का दोहरा रूप: समताप मंडल (Stratosphere) की ओजोन जीवन रक्षक है। क्षोभमंडल (Troposphere) की सतही ओजोन हानिकारक द्वितीयक प्रदूषक है।',
      },
      {
        en: 'BOD vs COD ratio: COD is always greater than BOD because COD oxidizes both biodegradable and non-biodegradable compounds.',
        hi: 'BOD और COD में भूल: COD का मान सदैव BOD से अधिक होता है क्योंकि यह जैव-अपघट्य और गैर-अपघट्य दोनों को मापता है।',
      },
    ],
    topperSpeedHacks: [
      {
        en: 'Major Greenhouse Gases in Order of Warming Impact: Water vapor (H2O) > Carbon dioxide (CO2) > Methane (CH4) > Nitrous oxide (N2O) > Ozone (O3) > CFCs.',
        hi: 'प्रमुख ग्रीनहाउस गैसें: जलवाष्प > कार्बन डाइऑक्साइड (CO2) > मीथेन (CH4) > नाइट्रस ऑक्साइड (N2O) > क्लोरोफ्लोरोकार्बन (CFCs)।',
      },
    ],
    quickRevisionBulletPoints: [
      { en: 'Montreal Protocol (1987) protects the stratospheric ozone layer.', hi: 'मॉन्ट्रियल प्रोटोकॉल (1987) ओजोन परत के संरक्षण हेतु है।' },
      { en: 'Kyoto Protocol (1997) targets the reduction of greenhouse gases.', hi: 'क्योटो प्रोटोकॉल (1997) ग्रीनहाउस गैसों के उत्सर्जन में कटौती हेतु है।' },
      { en: 'BOD5 is measured over 5 days at 20°C.', hi: 'BOD5 का मापन 20°C तापमान पर 5 दिनों तक किया जाता है।' },
      { en: 'Acid rain has a pH value strictly below 5.6.', hi: 'अम्लीय वर्षा का pH मान 5.6 से कम होता है।' },
    ],
    relatedPracticeCategory: 'Technical Stream',
  },

  // =========================================================================
  // 8. COMMERCIAL ARITHMETIC: PERCENTAGE, PROFIT-LOSS, CI-SI, INSTALLMENTS
  // =========================================================================
  'commercial-arithmetic': {
    topicId: 'commercial-arithmetic',
    title: {
      en: 'Commercial Arithmetic: Profit & Loss, Faulty Weights, CI-SI Differences & Installments',
      hi: 'व्यावसायिक अंकगणित: लाभ-हानि, बेईमान दुकानदार, चक्रवृद्धि ब्याज अंतर एवं ऋण किश्तें',
    },
    subjectCategory: { en: 'Quantitative Aptitude', hi: 'संख्यात्मक अभिरुचि' },
    targetExam: { en: 'RRB NTPC (Levels 2-6) & Group D', hi: 'आरआरबी एनटीपीसी एवं ग्रुप डी' },
    recommendedStudyTime: '4.0 Hours',
    blueprintImage: {
      src: './assets/rrb_master_curriculum.jpg',
      caption: {
        en: 'Quantitative Commercial Math Blueprint: Compound Growth & Market Transactions',
        hi: 'व्यावसायिक गणित ब्लूप्रिंट: चक्रवृद्धि वृद्धि एवं बाजार लेन-देन मैट्रिक्स',
      },
    },
    conceptualTheory: {
      heading: {
        en: 'Principles of Margin, Discount Multipliers, Compounding Frequencies & Annuities',
        hi: 'लाभ मार्जिन, छूट गुणक, चक्रवृद्धि आवृत्ति एवं समान वार्षिक किश्तों के सिद्धांत',
      },
      deepExplanation: {
        en: 'Commercial Arithmetic generates 8 to 12 questions across RRB NTPC CBT-1 & CBT-2. In Profit and Loss, Cost Price (CP) is the fundamental 100% baseline. Marked Price (MP) connects to CP through the golden identity: CP / MP = (100 - Discount%) / (100 + Profit%). In dishonest dealer scenarios, profit arises from cheating on weight: Gain% = [Error / (True Weight - Error)] × 100. In Compound Interest, when interest is compounded half-yearly, rate becomes R/2 and time becomes 2T; when quarterly, rate is R/4 and time is 4T. The difference between CI and SI over 2 years is P(R/100)², and over 3 years is P(R/100)² × (3 + R/100). Equal annual installments for loans under CI follow the present value annuity formula: P = x/(1+R/100) + x/(1+R/100)².',
        hi: 'आरआरबी एनटीपीसी सीबीटी-1 व 2 में व्यावसायिक अंकगणित से 8-12 प्रश्न पूछे जाते हैं। लाभ-हानि में क्रय मूल्य (CP) 100% आधार होता है। अंकित मूल्य (MP) और क्रय मूल्य का स्वर्णिम संबंध है: CP / MP = (100 - छूट%) / (100 + लाभ%)। बेईमान दुकानदार के वजन संबंधी प्रश्नों में: लाभ% = [त्रुटि / (सत्य मान - त्रुटि)] × 100। चक्रवृद्धि ब्याज (CI) में अर्धवार्षिक गणना पर दर R/2 व समय 2T, तथा त्रैमासिक गणना पर दर R/4 व समय 4T होता है। 2 वर्ष का CI और SI का अंतर P(R/100)² तथा 3 वर्ष का अंतर P(R/100)² × (3 + R/100) होता है। ऋण की वार्षिक किश्तों में: P = x/(1+R/100) + x/(1+R/100)²।',
      },
      keyMechanisms: [
        {
          en: 'Golden Formula for MP & CP: MP / CP = (100 + Profit%) / (100 - Discount%). Eliminates 3-step equations directly.',
          hi: 'अंकित मूल्य व क्रय मूल्य का सीधा संबंध: MP / CP = (100 + लाभ%) / (100 - छूट%)। यह 3 चरणों की गणना को समाप्त कर देता है।',
        },
        {
          en: 'Dishonest Weight Gain: If a trader claims to sell at CP but uses 800g instead of 1kg: Profit% = [(1000 - 800) / 800] × 100 = (200 / 800) × 100 = 25%.',
          hi: 'बेईमान दुकानदार का वजन लाभ: यदि व्यापारी 1 किग्रा के स्थान पर 800 ग्राम तौलता है: लाभ% = (200 / 800) × 100 = 25%।',
        },
        {
          en: 'CI-SI 2-Year Difference: D2 = P · (R / 100)². For 3-Year: D3 = P · (R / 100)² · (3 + R / 100) = D2 · (3 + R / 100).',
          hi: '2 व 3 वर्ष के CI-SI अंतर: D2 = P(R/100)²। D3 = D2 × (3 + R/100)।',
        },
        {
          en: 'Loan Installment under CI: If each installment is ₹x at R%: Principal P = x / (1 + r) + x / (1 + r)² + ... where r = R/100.',
          hi: 'ऋण की चक्रवृद्धि किश्त: यदि प्रत्येक किश्त ₹x है: मूलधन P = x/(1+r) + x/(1+r)²।',
        },
      ],
    },
    formulasAndLaws: [
      {
        label: 'Golden Ratio (MP vs CP)',
        expression: 'MP / CP = (100 + P%) / (100 - D%)',
        explanation: { en: 'Direct single-fraction calculation relating marked price to purchase cost.', hi: 'अंकित मूल्य और क्रय मूल्य का सीधा अनुपात।' },
      },
      {
        label: '2-Year CI - SI Difference',
        expression: 'D₂ = P · (R / 100)²',
        explanation: { en: 'Exact difference between compound and simple interest over 2 years.', hi: '2 वर्ष के लिए चक्रवृद्धि एवं साधारण ब्याज का अंतर।' },
      },
      {
        label: '3-Year CI - SI Difference',
        expression: 'D₃ = P · (R / 100)² · (3 + R / 100)',
        explanation: { en: 'Exact difference between compound and simple interest over 3 years.', hi: '3 वर्ष के लिए चक्रवृद्धि एवं साधारण ब्याज का अंतर।' },
      },
    ],
    workedExamples: [
      {
        id: 'ci-ex-1',
        level: 'CBT-2 Advanced',
        question: {
          en: 'The difference between compound interest and simple interest on a certain sum of money at 10% per annum for 3 years is ₹155. Find the principal sum.',
          hi: 'किसी निश्चित राशि पर 10% वार्षिक ब्याज की दर से 3 वर्ष के चक्रवृद्धि ब्याज और साधारण ब्याज का अंतर ₹155 है। वह मूलधन राशि ज्ञात कीजिए।',
        },
        standardSolution: {
          en: 'Step 1: Formula for 3-year CI - SI difference: D3 = P · (R/100)² · (3 + R/100).\nStep 2: Substitute values: 155 = P · (10/100)² · (3 + 10/100) = P · (1/100) · (3.1) = P · (31 / 1000).\nStep 3: Solve for P: P = (155 × 1000) / 31.\nSince 31 × 5 = 155: P = 5 × 1000 = ₹5000.\nPrincipal sum = ₹5000.',
          hi: 'चरण 1: 3 वर्ष के अंतर का सूत्र: D3 = P × (R/100)² × (3 + R/100)।\nचरण 2: मान रखें: 155 = P × (1/100) × (31/10) = P × (31 / 1000)।\nचरण 3: P = (155 × 1000) ÷ 31। चूंकि 31 × 5 = 155 है, अतः P = 5 × 1000 = ₹5000।',
        },
        topperShortcut: {
          en: '⚡ 5-Second Effective Rate Hack: For 10%, 3-yr SI = 30%. 3-yr CI = 33.1%. Difference = 3.1%. Here 3.1% = ₹155 => 1% = 155 / 3.1 = ₹50 => 100% Principal = ₹5000. Mental math in 5 seconds!',
          hi: '⚡ प्रभावी दर हैक: 10% पर 3 वर्ष का SI = 30%। 3 वर्ष का CI = 33.1%। अंतर = 3.1%। 3.1% = ₹155 => 1% = ₹50 => 100% (मूलधन) = ₹5000।',
        },
      },
    ],
    commonTraps: [
      {
        en: 'Confusing profit on SP vs CP: Profit% is ALWAYS calculated on CP unless explicitly stated in the question as "calculated on selling price".',
        hi: 'लाभ की गणना: लाभ% सदैव CP (क्रय मूल्य) पर निकाला जाता है, जब तक कि प्रश्न में स्पष्ट रूप से "विक्रय मूल्य पर" न लिखा हो।',
      },
    ],
    topperSpeedHacks: [
      {
        en: 'Successive Percentage Formula: Net change = x + y + (x · y / 100). For discounts: Net Discount = d1 + d2 - (d1 · d2 / 100).',
        hi: 'क्रमिक प्रतिशत सूत्र: कुल बदलाव = x + y + xy/100। दो क्रमिक छूटों हेतु = d1 + d2 - (d1 × d2 / 100)।',
      },
    ],
    quickRevisionBulletPoints: [
      { en: 'MP / CP = (100 + Profit%) / (100 - Discount%).', hi: 'अंकित मूल्य / क्रय मूल्य = (100 + लाभ%) / (100 - छूट%)।' },
      { en: '2-year CI - SI difference D2 = P(R/100)²', hi: '2 वर्ष का अंतर D2 = P(R/100)²।' },
      { en: 'Effective CI rate for 10% over 2 years is 21%, over 3 years is 33.1%.', hi: '10% दर पर 2 वर्ष की प्रभावी CI दर 21% व 3 वर्ष में 33.1% होती है।' },
    ],
    relatedPracticeCategory: 'Mathematics',
  },

  // =========================================================================
  // 9. CHEMISTRY: CHEMICAL REACTIONS, PERIODIC TABLE, ACIDS & BASES (GROUP D)
  // =========================================================================
  'chemistry-reactions-periodic-acids': {
    topicId: 'chemistry-reactions-periodic-acids',
    title: {
      en: 'High-Weightage Chemistry: Chemical Reactions, Modern Periodic Table, Acids, Bases & Salts',
      hi: 'उच्च-अंक रसायन विज्ञान: रासायनिक अभिक्रियाएं, आधुनिक आवर्त सारणी, अम्ल, क्षार एवं लवण',
    },
    subjectCategory: { en: 'General Science (25 Marks)', hi: 'सामान्य विज्ञान (25 अंक)' },
    targetExam: { en: 'RRB Group D (25 Marks Science) & RRB JE CBT-1', hi: 'आरआरबी ग्रुप डी एवं आरआरबी जेई' },
    recommendedStudyTime: '4.0 Hours',
    blueprintImage: {
      src: './assets/rrb_physics_optics_circuits.jpg',
      caption: {
        en: 'Chemistry Laboratory Blueprint: Periodic Trends, pH Scale & Chemical Reaction Balances',
        hi: 'रसायन विज्ञान प्रयोगशाला ब्लूप्रिंट: आवर्त प्रवृत्तियां, pH पैमाना एवं रासायनिक संतुलन',
      },
    },
    conceptualTheory: {
      heading: {
        en: 'Reaction Kinetics, Moseley’s Law, Periodic Trends & Industrial Salts',
        hi: 'अभिक्रिया गतिज, मोसले का नियम, आवर्त प्रवृत्तियां एवं औद्योगिक लवण',
      },
      deepExplanation: {
        en: 'Chemistry in Group D covers essential NCERT Class 10 concepts. Chemical reactions include Combination (A+B→AB), Decomposition (Thermal, Electrolytic, Photolytic: 2AgCl → 2Ag + Cl2), Displacement (Zn + CuSO4 → ZnSO4 + Cu), Double Displacement (precipitation of BaSO4), and Redox reactions (simultaneous oxidation and reduction). The Modern Periodic Table developed by Henry Moseley (1913) arranges elements by Atomic Number (Z), featuring 18 Groups (vertical columns) and 7 Periods (horizontal rows). Periodic trends show that Atomic Radius decreases across a period (left to right due to increased effective nuclear charge) and increases down a group (due to addition of shells). Electronegativity and Ionization Energy increase across a period and decrease down a group. Acids produce H+ (aq) ions (pH < 7), while bases yield OH- (aq) ions (pH > 7). Important industrial salts include Bleaching Powder (CaOCl2), Baking Soda (NaHCO3), Washing Soda (Na2CO3·10H2O), and Plaster of Paris (CaSO4·½H2O).',
        hi: 'ग्रुप डी में रसायन विज्ञान 10वीं एनसीईआरटी पर आधारित है। रासायनिक अभिक्रियाओं में संयोजन, वियोजन (ऊष्मीय, वैद्युत, प्रकाशीय: 2AgCl → 2Ag + Cl2), विस्थापन (Zn + CuSO4 → ZnSO4 + Cu), द्विविस्थापन (BaSO4 अवक्षेपण) एवं रेडॉक्स शामिल हैं। हेनरी मोसले (1913) की आधुनिक आवर्त सारणी परमाणु क्रमांक (Z) पर आधारित है, जिसमें 18 वर्ग एवं 7 आवर्त हैं। आवर्त में बाएं से दाएं जाने पर परमाणु त्रिज्या घटती है जबकि विद्युत ऋणात्मकता व आयनन ऊर्जा बढ़ती है। वर्ग में नीचे जाने पर परमाणु त्रिज्या बढ़ती है। अम्ल H+ आयन देते हैं (pH < 7), क्षार OH- आयन देते हैं (pH > 7)। प्रमुख लवण: विरंजक चूर्ण (CaOCl2), बेकिंग सोडा (NaHCO3), धावन सोडा (Na2CO3·10H2O) और प्लास्टर ऑफ पेरिस (CaSO4·½H2O)।',
      },
      keyMechanisms: [
        {
          en: 'Moseley’s Modern Periodic Law: The physical and chemical properties of elements are periodic functions of their ATOMIC NUMBERS (Z), not atomic masses.',
          hi: 'आधुनिक आवर्त नियम: तत्वों के भौतिक एवं रासायनिक गुण उनके परमाणु क्रमांकों (Atomic Number) के आवर्ती फलन होते हैं।',
        },
        {
          en: 'Periodic Trends Summary: Atomic size decreases left to right, increases top to bottom. Ionization energy and electronegativity increase left to right, decrease top to bottom. Fluorine is the most electronegative element.',
          hi: 'आवर्त प्रवृत्तियां: बाएं से दाएं परमाणु आकार घटता है, नीचे जाने पर बढ़ता है। आयनन ऊर्जा व विद्युत ऋणात्मकता बाएं से दाएं बढ़ती है। फ्लोरीन (F) सर्वाधिक विद्युत ऋणात्मक तत्व है।',
        },
        {
          en: 'Plaster of Paris Preparation: Heating Gypsum (CaSO4·2H2O) at 373 K (100°C) yields Plaster of Paris: CaSO4·2H2O → CaSO4·½H2O + 1½ H2O. When mixed with water, it re-hardens into gypsum.',
          hi: 'प्लास्टर ऑफ पेरिस: जिप्सम (CaSO4·2H2O) को 373 K (100°C) पर गर्म करने से प्लास्टर ऑफ पेरिस (CaSO4·½H2O) बनता है।',
        },
        {
          en: 'pH Scale & Indicators: pH = -log10[H+]. Neutral pH = 7. Acidic < 7, Basic > 7. Litmus turns red in acid and blue in base. Phenolphthalein is colourless in acid and pink in base. Methyl orange is red in acid and yellow in base.',
          hi: 'pH पैमाना एवं सूचक: उदासीन pH = 7। अम्ल में लिटमस लाल, क्षार में नीला होता है। फिनॉल्फथलीन अम्ल में रंगहीन, क्षार में गुलाबी होता है। मिथाइल ऑरेंज अम्ल में लाल, क्षार में पीला होता है।',
        },
      ],
    },
    formulasAndLaws: [
      {
        label: 'pH Mathematical Definition',
        expression: 'pH = -log₁₀[H⁺]  |  pH + pOH = 14 (at 25°C)',
        explanation: { en: 'Quantitative hydrogen ion concentration metric.', hi: 'हाइड्रोजन आयन सांद्रता का लघुगणकीय पैमाना।' },
      },
      {
        label: 'Plaster of Paris Formulation',
        expression: 'CaSO₄·½H₂O  (Calcium Sulphate Hemihydrate)',
        explanation: { en: 'Chemical formula of Plaster of Paris.', hi: 'प्लास्टर ऑफ पेरिस का रासायनिक नाम व सूत्र।' },
      },
      {
        label: 'Baking Soda vs Washing Soda',
        expression: 'Baking Soda: NaHCO₃  |  Washing Soda: Na₂CO₃·10H₂O',
        explanation: { en: 'Sodium hydrogen carbonate vs Sodium carbonate decahydrate.', hi: 'सोडियम हाइड्रोजन कार्बोनेट बनाम सोडियम कार्बोनेट डेकाहाइड्रेट।' },
      },
    ],
    workedExamples: [
      {
        id: 'chem-ex-1',
        level: 'Group D Special',
        question: {
          en: 'What happens when Bleaching Powder is exposed to air for a long duration, and what is the chemical formula of bleaching powder?',
          hi: 'जब विरंजक चूर्ण (Bleaching Powder) को लंबे समय तक हवा में खुला छोड़ दिया जाता है तो क्या होता है, और इसका रासायनिक सूत्र क्या है?',
        },
        standardSolution: {
          en: 'Step 1: Chemical formula: Bleaching powder is Calcium Oxychloride, CaOCl2.\nStep 2: Air exposure reaction: Atmospheric carbon dioxide reacts with CaOCl2: CaOCl2 + CO2 → CaCO3 + Cl2 ↑.\nStep 3: Result: It loses its chlorine gas and thereby loses its bleaching and disinfecting potency.\nAnswer: Formula is CaOCl2; it reacts with atmospheric CO2 releasing Chlorine gas (Cl2).',
          hi: 'चरण 1: रासायनिक सूत्र: विरंजक चूर्ण का सूत्र कैल्शियम ऑक्सीक्लोराइड (CaOCl2) है।\nचरण 2: वायु से क्रिया: वायुमंडलीय CO2 से क्रिया करके यह क्लोरीन गैस मुक्त करता है: CaOCl2 + CO2 → CaCO3 + Cl2 ↑।\nचरण 3: परिणाम: इसकी विरंजन क्षमता समाप्त हो जाती है।',
        },
        topperShortcut: {
          en: '⚡ Direct Exam Code: Bleaching Powder = CaOCl2 (reacts with dry slaked lime Ca(OH)2 + Cl2). Forms CaCO3 + Cl2 in open air. 100% recurring question in Group D!',
          hi: '⚡ सीधा परीक्षा कोड: विरंजक चूर्ण = CaOCl2। शुष्क बुझे चूने Ca(OH)2 पर Cl2 की क्रिया से बनता है। हवा में Cl2 छोड़ता है।',
        },
      },
    ],
    commonTraps: [
      {
        en: 'Baking Soda vs Baking Powder: Baking Soda is pure NaHCO3. Baking Powder is a mixture of NaHCO3 and an edible mild acid like Tartaric acid (which prevents bitter taste from Na2CO3).',
        hi: 'बेकिंग सोडा बनाम बेकिंग पाउडर: बेकिंग सोडा केवल NaHCO3 है। बेकिंग पाउडर में NaHCO3 के साथ टार्टरिक अम्ल मिलाया जाता है ताकि कड़वा स्वाद न आए।',
      },
    ],
    topperSpeedHacks: [
      {
        en: 'Natural Acids Cheat Sheet: Vinegar = Acetic acid | Lemon/Orange = Citric acid | Tomato = Oxalic acid | Curd = Lactic acid | Tamarind = Tartaric acid | Ant/Nettle sting = Methanoic (Formic) acid.',
        hi: 'प्राकृतिक अम्ल तालिका: सिरका = एसिटिक अम्ल | नींबू = साइट्रिक अम्ल | टमाटर = ऑक्सालिक अम्ल | दही = लैक्टिक अम्ल | इमली = टार्टरिक अम्ल | चींटी का डंक = मेथेनोइक (फॉर्मिक) अम्ल।',
      },
    ],
    quickRevisionBulletPoints: [
      { en: 'Modern Periodic Table has 18 Groups and 7 Periods.', hi: 'आधुनिक आवर्त सारणी में 18 वर्ग और 7 आवर्त होते हैं।' },
      { en: 'Fluorine is the most electronegative element in the periodic table.', hi: 'फ्लोरीन आवर्त सारणी का सर्वाधिक विद्युत ऋणात्मक तत्व है।' },
      { en: 'Plaster of Paris formula is CaSO4·½H2O.', hi: 'प्लास्टर ऑफ पेरिस का सूत्र CaSO4·½H2O है।' },
      { en: 'Ant sting contains methanoic (formic) acid; neutralized with baking soda.', hi: 'चींटी के डंक में मेथेनोइक अम्ल होता है; इसे बेकिंग सोडा से शांत किया जाता है।' },
    ],
    relatedPracticeCategory: 'General Science',
  },

  // =========================================================================
  // 10. BIOLOGY: HUMAN PHYSIOLOGY (NEPHRON, NEURON, CIRCULATION) & GENETICS
  // =========================================================================
  'biology-physiology-genetics-ecology': {
    topicId: 'biology-physiology-genetics-ecology',
    title: {
      en: 'High-Weightage Biology: Human Physiology (Nephron, Neuron, Heart), Genetics & Botany',
      hi: 'उच्च-अंक जीव विज्ञान: मानव शरीर क्रिया विज्ञान (नेफ्रॉन, न्यूरॉन, हृदय), आनुवंशिकी एवं वनस्पति विज्ञान',
    },
    subjectCategory: { en: 'General Science (25 Marks)', hi: 'सामान्य विज्ञान (25 अंक)' },
    targetExam: { en: 'RRB Group D (25 Marks Science) & RRB NTPC CBT-1', hi: 'आरआरबी ग्रुप डी एवं आरआरबी एनटीपीसी' },
    recommendedStudyTime: '4.5 Hours',
    blueprintImage: {
      src: './assets/rrb_science_engineering_lab.jpg',
      caption: {
        en: 'Biological Science Laboratory Schematic: Cellular Filtration, Neural Synapse & Plant Tissue',
        hi: 'जीव विज्ञान प्रयोगशाला आरेख: कोशिकीय निस्पंदन, तंत्रिका सिनेप्स एवं पादप ऊतक',
      },
    },
    conceptualTheory: {
      heading: {
        en: 'Renal Filtration in Nephron, Neural Action Potentials, Mendel’s Laws & Plant Hormones',
        hi: 'नेफ्रॉन में वृक्क निस्पंदन, न्यूरॉन में तंत्रिका आवेग, मेंडल के नियम एवं पादप हार्मोन',
      },
      deepExplanation: {
        en: 'Biology carries 8-10 direct questions in Group D and 4-6 in NTPC CBT-1. Core human physiology centers on the Excretory System: the functional structural filtration unit of the kidney is the Nephron (Bowman’s capsule, Glomerulus ultrafiltration, Henle’s loop, and reabsorption of glucose, amino acids, and water). The Nervous System is controlled by Neurons: transmission flows Dendrite → Cell Body (Cyton) → Axon → Axon Terminal → across the Synapse via neurotransmitters (Acetylcholine). The Human Heart features double circulation (Pulmonary and Systemic): deoxygenated blood enters the Right Atrium via Vena Cava, pumped by Right Ventricle to lungs through Pulmonary Artery (only artery carrying deoxygenated blood); oxygenated blood returns via Pulmonary Veins to Left Atrium, pumped through Aorta by Left Ventricle. Genetics follows Gregor Mendel’s laws using Pisum sativum: Monohybrid phenotypic ratio is 3:1 (genotypic 1:2:1); Dihybrid phenotypic ratio is 9:3:3:1. Plant hormones regulate growth: Auxin promotes cell elongation and phototropism, Gibberellin promotes stem elongation, Cytokinin promotes cell division, and Abscisic Acid (ABA) inhibits growth and causes leaf wilting.',
        hi: 'ग्रुप डी में जीव विज्ञान से 8-10 प्रश्न पूछे जाते हैं। उत्सर्जन तंत्र की मूल कार्यात्मक इकाई नेफ्रॉन (Nephron) है, जिसमें बोमन संपुट और ग्लोमेरुलस द्वारा रक्त का परा-निस्पंदन होता है। तंत्रिका तंत्र की इकाई न्यूरॉन (Neuron) है, जिसमें आवेग डेन्ड्राइट → कोशिका काय (सायटन) → एक्सॉन → सिनेप्स के माध्यम से गति करता है। मानव हृदय में दोहरा परिसंचरण होता है: पल्मोनरी धमनी एकमात्र धमनी है जो अशुद्ध रक्त ले जाती है, तथा पल्मोनरी शिरा एकमात्र शिरा है जो शुद्ध रक्त फेफड़ों से बाएं आलिंद में लाती है। आनुवंशिकी में मेंडल के मटर (Pisum sativum) पर प्रयोग: एकसंकर अनुपात 3:1 (जीनोटाइप 1:2:1) तथा द्विसंकर अनुपात 9:3:3:1 होता है। पादप हार्मोन: ऑक्सिन (कोशिका वृद्धि), जिबरेलिन (तने की वृद्धि), साइटोकाइनिन (कोशिका विभाजन), और एब्सिसिक एसिड (ABA - वृद्धि रोधक एवं पत्तियां गिराने वाला)।',
      },
      keyMechanisms: [
        {
          en: 'Nephron Filtration & Reabsorption: Ultrafiltration occurs under high hydrostatic pressure in Glomerulus into Bowman’s capsule. Selective reabsorption of glucose, amino acids, salts, and major water occurs along the Proximal Convoluted Tubule (PCT).',
          hi: 'नेफ्रॉन निस्पंदन: बोमन संपुट के ग्लोमेरुलस में रक्त का उच्च दाब पर परा-निस्पंदन होता है। ग्लूकोज, अमीनो अम्ल और लवणों का पुनःअवशोषण समीपस्थ संवलित नलिका (PCT) में होता है।',
        },
        {
          en: 'Pulmonary Blood Exceptions: Pulmonary Artery is the ONLY artery that carries deoxygenated blood (from heart to lungs). Pulmonary Vein is the ONLY vein that carries oxygenated blood (from lungs to left atrium).',
          hi: 'रक्त वाहिकाओं के अपवाद: पल्मोनरी धमनी एकमात्र धमनी है जो अनाक्सीकृत (अशुद्ध) रक्त ले जाती है। पल्मोनरी शिरा एकमात्र शिरा है जो आक्सीकृत (शुद्ध) रक्त ले जाती है।',
        },
        {
          en: 'Mendel’s Inheritance Ratios: Monohybrid F2 Generation = Phenotype 3:1 (Tall:Dwarf), Genotype 1:2:1 (TT:Tt:tt). Dihybrid F2 Generation = 9:3:3:1.',
          hi: 'मेंडल के अनुपात: एकसंकर F2 पीढ़ी = लक्षणप्ररूप 3:1, जीनप्ररूप 1:2:1। द्विसंकर F2 पीढ़ी लक्षणप्ररूप = 9:3:3:1।',
        },
        {
          en: 'Phytohormones Roles: Growth promoters = Auxin (phototropism), Gibberellin (seed germination/stem growth), Cytokinin (rapid cell division in fruits/seeds). Growth inhibitor = Abscisic acid (ABA - stomata closing, stress hormone). Fruit ripening = Ethylene gas.',
          hi: 'पादप हार्मोन कार्य: ऑक्सिन (प्रकाशानुवर्तन), जिबरेलिन (अंकुरण व वृद्धि), साइटोकाइनिन (कोशिका विभाजन)। वृद्धि रोधक = एब्सिसिक अम्ल (स्टोमेटा बंद करना, तनाव हार्मोन)। फल पकाना = एथिलीन गैस।',
        },
      ],
    },
    formulasAndLaws: [
      {
        label: 'Mendel Monohybrid Phenotypic Ratio',
        expression: '3 : 1  [Tall : Dwarf]',
        explanation: { en: 'Phenotypic distribution of F2 generation in single trait cross.', hi: 'F2 पीढ़ी में एकसंकर क्रॉस का बाह्य रूप अनुपात।' },
      },
      {
        label: 'Mendel Dihybrid Phenotypic Ratio',
        expression: '9 : 3 : 3 : 1  [Round Yellow : Round Green : Wrinkled Yellow : Wrinkled Green]',
        explanation: { en: 'Independent assortment distribution in two simultaneous traits.', hi: 'द्विसंकर क्रॉस की F2 पीढ़ी का स्वतंत्र अपव्यूहन अनुपात।' },
      },
    ],
    workedExamples: [
      {
        id: 'bio-ex-1',
        level: 'Group D Special',
        question: {
          en: 'Which plant hormone is responsible for the ripening of fruits, and which hormone promotes cell division in plants?',
          hi: 'फलों को पकाने के लिए कौन सा पादप हार्मोन उत्तरदायी है, और पौधों में तीव्र कोशिका विभाजन को कौन सा हार्मोन प्रेरित करता है?',
        },
        standardSolution: {
          en: 'Step 1: Fruit ripening: Ethylene (C2H4) is a gaseous phytohormone that promotes fruit ripening and abscission of leaves.\nStep 2: Cell division: Cytokinin is the plant growth hormone that actively promotes cell division, found in highest concentrations in areas of rapid cell division like root apices and developing fruits.\nAnswer: Fruit ripening = Ethylene; Cell division = Cytokinin.',
          hi: 'चरण 1: फल पकाना: एथिलीन (Ethylene) एकमात्र गैसीय पादप हार्मोन है जो फलों को पकाने हेतु उत्तरदायी है।\nचरण 2: कोशिका विभाजन: साइटोकाइनिन (Cytokinin) वह हार्मोन है जो तीव्र कोशिका विभाजन को प्रेरित करता है।\nउत्तर: फल पकाना = एथिलीन; कोशिका विभाजन = साइटोकाइनिन।',
        },
        topperShortcut: {
          en: '⚡ Plant Hormone Rapid Trick: "Ethylene = Ripening Gas" | "Cyto = Cell division" | "Auxin = Bends to Light (Tip)" | "ABA = Wilting/Stress (Anti-growth)". Direct 1-mark lock!',
          hi: '⚡ पादप हार्मोन ट्रिक: "एथिलीन = फल पकाने वाली गैस" | "साइटोकाइनिन = कोशिका विभाजन" | "ऑक्सिन = प्रकाश की ओर मुड़ना" | "ABA = पत्तियां गिराना (तनाव हार्मोन)"।',
        },
      },
    ],
    commonTraps: [
      {
        en: 'Nephron vs Neuron: Nephron is the filtration unit of the KIDNEY (excretory). Neuron is the transmission unit of the BRAIN/NERVOUS SYSTEM.',
        hi: 'नेफ्रॉन और न्यूरॉन में भ्रम: नेफ्रॉन गुर्दे (Kidney) की उत्सर्जन इकाई है। न्यूरॉन मस्तिष्क व तंत्रिका तंत्र की तंत्रिका इकाई है।',
      },
    ],
    topperSpeedHacks: [
      {
        en: 'Digestive Enzymes Shortcut: Saliva = Amylase (Ptyalin - breaks starch) | Stomach = Pepsin (breaks protein in acidic HCl medium) | Pancreas = Trypsin (protein) + Lipase (emulsified fats) | Liver = Bile juice (alkaline, emulsifies fat, contains NO enzymes).',
        hi: 'पाचन एंजाइम कोड: लार = टायलिन/एमाइलेज (स्टार्च) | आमाशय = पेप्सिन (प्रोटीन) | अग्न्याशय = ट्रिप्सिन + लाइपेज (वसा) | यकृत (लिवर) = पित्त रस (वसा का इमल्सीकरण, इसमें कोई एंजाइम नहीं होता)।',
      },
    ],
    quickRevisionBulletPoints: [
      { en: 'Nephron is the structural and functional unit of the kidney.', hi: 'नेफ्रॉन गुर्दे की संरचनात्मक एवं कार्यात्मक इकाई है।' },
      { en: 'Pulmonary artery carries deoxygenated blood; pulmonary vein carries oxygenated blood.', hi: 'पल्मोनरी धमनी अशुद्ध रक्त तथा पल्मोनरी शिरा शुद्ध रक्त ले जाती है।' },
      { en: 'Mendel’s monohybrid ratio is 3:1 (phenotypic) and 1:2:1 (genotypic).', hi: 'मेंडल का एकसंकर अनुपात 3:1 (लक्षणप्ररूप) और 1:2:1 (जीनप्ररूप) है।' },
      { en: 'Ethylene is the only gaseous plant hormone responsible for fruit ripening.', hi: 'एथिलीन फल पकाने वाला एकमात्र गैसीय पादप हार्मोन है।' },
    ],
    relatedPracticeCategory: 'General Science',
  },

  // =========================================================================
  // 11. GENERAL INTELLIGENCE: SYLLOGISMS, STRUCTURAL LOGIC & SEATING PUZZLES
  // =========================================================================
  'syllogisms-structural-logic': {
    topicId: 'syllogisms-structural-logic',
    title: {
      en: 'Advanced Reasoning: Syllogisms (Only, A Few, Possibility) & Structural Logic',
      hi: 'उन्नत तर्कशक्ति: न्याय निगमन (केवल, कुछ, संभावना) एवं संरचनात्मक तर्क',
    },
    subjectCategory: { en: 'General Intelligence & Reasoning', hi: 'सामान्य बुद्धि एवं तर्कशक्ति' },
    targetExam: { en: 'RRB NTPC (CBT-1 & CBT-2) / RRB JE / Group D', hi: 'आरआरबी एनटीपीसी, ग्रुप डी एवं जेई' },
    recommendedStudyTime: '3.5 Hours',
    blueprintImage: {
      src: './assets/rrb_master_curriculum.jpg',
      caption: {
        en: 'Reasoning Master Logic Matrix: Syllogistic Venn Mapping & Deductive Sets',
        hi: 'तर्कशक्ति मास्टर लॉजिक मैट्रिक्स: न्याय निगमन वेन आरेख एवं निगमनात्मक समुच्चय',
      },
    },
    conceptualTheory: {
      heading: {
        en: 'Venn Diagram Modeling, Reverse Deduction & Modern Quantifier Mechanics',
        hi: 'वेन आरेख मॉडलिंग, विपरीत निगमन एवं आधुनिक परिमाणक यांत्रिकी',
      },
      deepExplanation: {
        en: 'Syllogisms in recent TCS-conducted RRB examinations feature modern quantifiers: "Only A is B", "Only a few A are B", and "Some A can be B (Possibility)". Traditional Venn rules must be updated. "Only A is B" means "All B are A", and no other entity can ever become B (B is exclusive to A). "Only a few A are B" implies TWO simultaneous facts: 1. Some A are B, AND 2. Some A are definitely NOT B. A conclusion stated as a "Possibility" is true if even one valid Venn diagram can represent it without violating the given statements. Conversely, a definite conclusion is only true if it holds in EVERY possible Venn diagram.',
        hi: 'टीसीएस द्वारा आयोजित आधुनिक आरआरबी परीक्षाओं में न्याय निगमन में नए परिमाणक पूछे जाते हैं: "केवल A, B है", "केवल कुछ A, B हैं", और "संभावना (Possibility)"। "केवल A, B है" का अर्थ है कि "सभी B, A हैं" और B किसी अन्य तत्व से कभी नहीं जुड़ सकता (B केवल A का अनन्य भाग है)। "केवल कुछ A, B हैं" का अर्थ दोहरी स्थिति है: 1. कुछ A, B हैं, तथा 2. कुछ A निश्चित रूप से B नहीं हैं। किसी निष्कर्ष में "संभावना" तभी सही होती है जब कथनों का उल्लंघन किए बिना कम से कम एक वेन आरेख में वह संभव हो।',
      },
      keyMechanisms: [
        {
          en: '"Only a few A are B" Rule: It is a compound statement. It means "Some A are B" is TRUE, and "Some A are NOT B" is also TRUE. However, "All A can be B" is strictly FALSE.',
          hi: '"केवल कुछ A, B हैं": इसका अर्थ है "कुछ A, B हैं" (सत्य) तथा "कुछ A, B नहीं हैं" (भी सत्य)। लेकिन "सभी A के B होने की संभावना" सदैव असत्य होगी।',
        },
        {
          en: '"Only A is B" Rule: Converts to "All B are A", with a negative restriction that B cannot overlap with any other circle C under any condition.',
          hi: '"केवल A, B है": इसका अर्थ है "सभी B, A हैं", और B का किसी तीसरे वृत्त C के साथ संबंध कभी संभव नहीं हो सकता।',
        },
        {
          en: 'Either-Or Complementary Pairs: Condition 1: Both individual conclusions must be independently doubtful (false definitely). Condition 2: Subject and predicate must be identical. Condition 3: One positive and one negative pair: (Some + No) OR (All + Some Not). Note: (All + No) NEVER forms Either-Or.',
          hi: '"या तो I या II" (Either-Or) के 3 नियम: 1. दोनों निष्कर्ष स्वतंत्र रूप से असत्य/संदेहास्पद हों। 2. दोनों में कर्ता (Subject) व विधेय (Predicate) समान हों। 3. पूरक युग्म: (कुछ + कोई नहीं) अथवा (सभी + कुछ नहीं)। "सभी + कोई नहीं" कभी आइदर-ऑर नहीं बनाता।',
        },
      ],
    },
    formulasAndLaws: [
      {
        label: 'Only a few Decoupling',
        expression: 'Only a few A are B  <=>  (Some A are B) + (Some A are NOT B)',
        explanation: { en: 'Compound quantifier translation rule.', hi: 'केवल कुछ परिमाणक का द्वि-चरणीय विखंडन नियम।' },
      },
      {
        label: 'Possibility Elimination Test',
        expression: 'If Definite Conclusion is FALSE and no negative cross-barrier exists => Possibility is TRUE',
        explanation: { en: 'Rapid possibility verification method.', hi: 'संभावना निष्कर्ष की त्वरित जांच पद्धति।' },
      },
    ],
    workedExamples: [
      {
        id: 'syl-ex-1',
        level: 'CBT-2 Advanced',
        question: {
          en: 'Statements: 1. Only a few Rails are Trains. 2. All Trains are Engines. 3. No Engine is a Bogie.\nConclusions: I. All Rails can never be Bogies. II. Some Rails can be Trains.',
          hi: 'कथन: 1. केवल कुछ रेल, ट्रेन हैं। 2. सभी ट्रेन, इंजन हैं। 3. कोई इंजन, बोगी नहीं है।\nनिष्कर्ष: I. सभी रेल कभी बोगी नहीं हो सकतीं। II. कुछ रेल, ट्रेन हो सकती हैं।',
        },
        standardSolution: {
          en: 'Step 1: Analyze statement 1: "Only a few Rails are Trains" => Some Rails are Trains, and Some Rails are NOT Trains.\nStep 2: Connect with statement 2 & 3: The common part of Rails that are Trains are also inside Engine. Since No Engine is a Bogie, the part of Rails inside Trains/Engine can NEVER be Bogie.\nConclusion I: "All Rails can never be Bogies" means Some Rails are definitely NOT Bogies. This is 100% TRUE because the Rails inside Trains cannot touch Bogie.\nStep 3: Analyze Conclusion II: "Some Rails can be Trains" is phrased as possibility. But "Some Rails ARE Trains" is a DEFINITE FACT from statement 1. When something is already 100% definitely true, stating it as a "possibility" is logically FALSE in examination rules.\nConclusion: Only Conclusion I follows.',
          hi: 'चरण 1: कथन 1: "केवल कुछ रेल, ट्रेन हैं" => कुछ रेल निश्चित रूप से ट्रेन हैं।\nचरण 2: कथन 2 व 3: जो रेल ट्रेन हैं, वे इंजन भी हैं। कोई इंजन बोगी नहीं है, अतः रेल का वह हिस्सा कभी बोगी नहीं हो सकता। निष्कर्ष I: "सभी रेल कभी बोगी नहीं हो सकतीं" (अर्थात कुछ रेल कभी बोगी नहीं हैं) 100% सत्य है।\nचरण 3: निष्कर्ष II: "कुछ रेल ट्रेन हो सकती हैं (संभावना)"। चूंकि कथन से यह पहले से ही निश्चित रूप से सत्य है, इसलिए पहले से ज्ञात तथ्य को "संभावना" कहना गलत होता है।\nउत्तर: केवल निष्कर्ष I अनुसरण करता है।',
        },
        topperShortcut: {
          en: '⚡ TCS Trap Hack: "Already Definite Fact + Possibility = FALSE". Since Some Rails ARE already Trains, saying "can be" makes it invalid. Conclusion I is directly true by cross-boundary of Engine and Bogie. Answer: Only I follows.',
          hi: '⚡ टीसीएस ट्रैप हैक: जो तथ्य पहले से 100% सत्य हो, उसमें "संभावना" (Can be) लगाना अमान्य होता है। अतः केवल निष्कर्ष I अनुसरण करता है।',
        },
      },
    ],
    commonTraps: [
      {
        en: 'Definite vs Possibility Trap: If a conclusion is definitely true in reality, a possibility statement of that fact is marked FALSE in RRB/TCS reasoning.',
        hi: 'निश्चितता बनाम संभावना जाल: यदि कोई निष्कर्ष पहले से निश्चित रूप से सत्य है, तो उसकी संभावना को परीक्षा में असत्य माना जाता है।',
      },
    ],
    topperSpeedHacks: [
      {
        en: 'Negative Cross Barrier Check: If there is no "NO" statement connecting Circle A and Circle B, ANY positive possibility (Some A can be B, All A can be B) is automatically TRUE!',
        hi: 'क्रॉस बैरियर हैक: यदि दो वृत्तों के बीच कोई "कोई नहीं" (NO) का प्रतिबंध नहीं है, तो उनके बीच कोई भी धनात्मक संभावना (Can be) स्वतः सत्य होती है!',
      },
    ],
    quickRevisionBulletPoints: [
      { en: '"Only a few" means both "Some are" and "Some are not" are true.', hi: '"केवल कुछ" का अर्थ है "कुछ हैं" और "कुछ नहीं हैं" दोनों सत्य हैं।' },
      { en: '"All + No" does NOT form an Either-Or pair.', hi: '"सभी + कोई नहीं" कभी आइदर-ऑर नहीं बनाता।' },
      { en: 'Possibility is true whenever at least one Venn configuration supports it without conflict.', hi: 'संभावना तभी सत्य होती है जब बिना विरोध के कम से कम एक वेन आरेख में वह संभव हो।' },
    ],
    relatedPracticeCategory: 'General Intelligence & Reasoning',
  },

  // =========================================================================
  // 12. GENERAL AWARENESS: POLITY & CONSTITUTION (ARTICLES, PREAMBLE, RIGHTS)
  // =========================================================================
  'polity-constitution-mechanics': {
    topicId: 'polity-constitution-mechanics',
    title: {
      en: 'Indian Polity & Constitution: Preamble, Fundamental Rights, Articles & Amendments',
      hi: 'भारतीय राजव्यवस्था एवं संविधान: प्रस्तावना, मौलिक अधिकार, प्रमुख अनुच्छेद एवं संशोधन',
    },
    subjectCategory: { en: 'General Awareness', hi: 'सामान्य जागरूकता' },
    targetExam: { en: 'RRB NTPC CBT-1 & CBT-2 / RRB JE / Group D', hi: 'आरआरबी एनटीपीसी, जेई एवं ग्रुप डी' },
    recommendedStudyTime: '3.5 Hours',
    blueprintImage: {
      src: './assets/rrb_master_curriculum.jpg',
      caption: {
        en: 'General Awareness Blueprint: Constitutional Framework, Federal Structure & Judiciary',
        hi: 'सामान्य जागरूकता ब्लूप्रिंट: संवैधानिक ढांचा, संघीय व्यवस्था एवं न्यायपालिका',
      },
    },
    conceptualTheory: {
      heading: {
        en: 'Constitutional Architecture, Fundamental Rights Enforceability & Emergency Provisions',
        hi: 'संवैधानिक ढांचा, मौलिक अधिकारों की प्रवर्तनीयता एवं आपातकालीन प्रावधान',
      },
      deepExplanation: {
        en: 'Indian Polity is one of the highest scoring, static sections in RRB NTPC (5-7 questions) and JE (3-4 questions). The Constitution of India was adopted on 26 November 1949 and came into effect on 26 January 1950. The Preamble declares India to be a "Sovereign Socialist Secular Democratic Republic". The words "Socialist, Secular, Integrity" were added by the 42nd Constitutional Amendment Act, 1976. Part III (Articles 12-35) enshrines Fundamental Rights, justifiable under Article 32 (called the "Heart and Soul of the Constitution" by Dr. B.R. Ambedkar) through 5 constitutional writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, and Quo-Warranto. Part IV covers Directive Principles of State Policy (DPSP, Articles 36-51, non-justiciable, borrowed from Ireland). Part IV-A covers Fundamental Duties (Article 51A, 11 duties, added by 42nd Amendment on Swaran Singh Committee recommendation, 11th duty added by 86th Amendment 2002). Emergency provisions in Part XVIII cover National Emergency (Article 352), State Emergency / President’s Rule (Article 356), and Financial Emergency (Article 360).',
        hi: 'भारतीय राजव्यवस्था आरआरबी एनटीपीसी में 5-7 अंक तथा जेई में 3-4 अंक दिलाती है। संविधान 26 नवंबर 1949 को अंगीकृत हुआ तथा 26 जनवरी 1950 को लागू हुआ। 42वें संविधान संशोधन 1976 द्वारा प्रस्तावना में "समाजवादी, पंथनिरपेक्ष और अखंडता" शब्द जोड़े गए। भाग III (अनुच्छेद 12-35) मौलिक अधिकारों से संबंधित है, जिन्हें अनुच्छेद 32 (डॉ. आंबेडकर द्वारा "संविधान की आत्मा") के तहत 5 रिटों द्वारा लागू कराया जा सकता है: बंदी प्रत्यक्षीकरण, परमादेश, प्रतिषेध, उत्प्रेषण एवं अधिकार पृच्छा। भाग IV में नीति निर्देशक तत्व (अनुच्छेद 36-51, आयरलैंड से प्रेरित) हैं। भाग IV-A में मौलिक कर्तव्य (अनुच्छेद 51A, स्वर्ण सिंह समिति, कुल 11 कर्तव्य) हैं। आपातकाल: राष्ट्रीय (अनुच्छेद 352), राष्ट्रपति शासन (अनुच्छेद 356), वित्तीय (अनुच्छेद 360)।',
      },
      keyMechanisms: [
        {
          en: '5 Writs of Supreme Court (Article 32) & High Court (Article 226): Habeas Corpus ("To have the body"), Mandamus ("We command"), Prohibition (prevents lower court exceeding jurisdiction), Certiorari ("To be certified"), Quo-Warranto ("By what authority").',
          hi: '5 संवैधानिक रिटें: बंदी प्रत्यक्षीकरण (शरीर प्रस्तुत करो), परमादेश (हम आज्ञा देते हैं), प्रतिषेध (अधिकार क्षेत्र से बाहर जाने से रोकना), उत्प्रेषण (प्रमाणित होना), अधिकार पृच्छा (किस अधिकार से)।',
        },
        {
          en: 'Emergency Articles: Article 352 (National Emergency on grounds of War, External Aggression, or Armed Rebellion). Article 356 (President’s Rule in States). Article 360 (Financial Emergency - never invoked in India till date).',
          hi: 'आपातकालीन अनुच्छेद: अनुच्छेद 352 (राष्ट्रीय आपातकाल), अनुच्छेद 356 (राज्यों में राष्ट्रपति शासन), अनुच्छेद 360 (वित्तीय आपातकाल - भारत में आज तक कभी नहीं लगा)।',
        },
        {
          en: 'Key Amendments: 42nd (1976 - "Mini Constitution"), 44th (1978 - Right to Property removed from FR to legal right Article 300A), 61st (1989 - Voting age lowered from 21 to 18), 73rd & 74th (1992 - Panchayati Raj & Municipalities), 86th (2002 - Right to Education Article 21A), 101st (2016 - GST).',
          hi: 'प्रमुख संशोधन: 42वां (1976 - लघु संविधान), 44वां (1978 - संपत्ति का अधिकार कानूनी अधिकार 300A बना), 61वां (1989 - मतदान आयु 21 से 18 वर्ष), 73वां (पंचायती राज), 86वां (2002 - शिक्षा का अधिकार 21A), 101वां (GST)।',
        },
      ],
    },
    formulasAndLaws: [
      {
        label: 'Constitutional Articles Core Matrix',
        expression: 'FR: 12-35  |  DPSP: 36-51  |  FD: 51A  |  President: 52-62  |  Finance Commission: 280  |  Amendments: 368',
        explanation: { en: 'High-frequency article clusters in Railway CBT exams.', hi: 'रेलवे सीबीटी में सर्वाधिक पूछे जाने वाले अनुच्छेद समूह।' },
      },
    ],
    workedExamples: [
      {
        id: 'pol-ex-1',
        level: 'CBT-1 Foundation',
        question: {
          en: 'Which Constitutional Amendment Act reduced the voting age in India from 21 years to 18 years, and which Article was amended?',
          hi: 'किस संविधान संशोधन अधिनियम द्वारा भारत में मतदान की आयु 21 वर्ष से घटाकर 18 वर्ष की गई थी, और किस अनुच्छेद में संशोधन किया गया था?',
        },
        standardSolution: {
          en: 'Step 1: Amendment Act: The 61st Constitutional Amendment Act, 1988 (came into force on 28 March 1989 during the tenure of Prime Minister Rajiv Gandhi).\nStep 2: Article amended: Article 326 of the Constitution, which governs elections to the Lok Sabha and State Legislative Assemblies on the basis of adult suffrage.\nAnswer: 61st Amendment Act, 1988; Article 326.',
          hi: 'चरण 1: संशोधन अधिनियम: 61वां संविधान संशोधन अधिनियम, 1988 (28 मार्च 1989 को लागू हुआ, राजीव गांधी सरकार के समय)।\nचरण 2: संबंधित अनुच्छेद: अनुच्छेद 326 (लोकसभा एवं विधानसभा चुनावों में वयस्क मताधिकार)।\nउत्तर: 61वां संशोधन अधिनियम, 1988; अनुच्छेद 326।',
        },
        topperShortcut: {
          en: '⚡ Direct Memory Code: "61st Amendment = 21 to 18 Voting Age = Article 326". Memorize in 1 line!',
          hi: '⚡ सीधा स्मृति कोड: 61वां संशोधन = 21 से 18 वर्ष मतदान आयु = अनुच्छेद 326।',
        },
      },
    ],
    commonTraps: [
      {
        en: 'Right to Property trap: Right to Property is NO LONGER a Fundamental Right. It was deleted by the 44th Amendment Act, 1978 and moved to Article 300A as an ordinary legal/constitutional right.',
        hi: 'संपत्ति के अधिकार का भ्रम: संपत्ति का अधिकार अब मौलिक अधिकार नहीं है। इसे 44वें संशोधन 1978 द्वारा हटाकर अनुच्छेद 300A के तहत कानूनी अधिकार बना दिया गया।',
      },
    ],
    topperSpeedHacks: [
      {
        en: 'Fundamental Rights Parts Shortcut: Equality (14-18) | Freedom (19-22) | Against Exploitation (23-24) | Freedom of Religion (25-28) | Cultural & Educational (29-30) | Remedies (32).',
        hi: 'मौलिक अधिकार क्रम: समानता (14-18) | स्वतंत्रता (19-22) | शोषण के विरुद्ध (23-24) | धर्म की स्वतंत्रता (25-28) | संस्कृति व शिक्षा (29-30) | संवैधानिक उपचार (32)।',
      },
    ],
    quickRevisionBulletPoints: [
      { en: 'Dr. B.R. Ambedkar termed Article 32 as the "Heart and Soul of the Constitution".', hi: 'डॉ. बी.आर. आंबेडकर ने अनुच्छेद 32 को "संविधान का हृदय और आत्मा" कहा।' },
      { en: 'Right to Education is under Article 21A, added by the 86th Amendment Act (2002).', hi: 'शिक्षा का अधिकार अनुच्छेद 21A में है, जिसे 86वें संशोधन (2002) द्वारा जोड़ा गया।' },
      { en: 'Article 368 empowers the Parliament to amend the Constitution.', hi: 'अनुच्छेद 368 संसद को संविधान संशोधन की शक्ति प्रदान करता है।' },
      { en: 'Financial Emergency (Article 360) has never been declared in India.', hi: 'भारत में वित्तीय आपातकाल (अनुच्छेद 360) कभी लागू नहीं हुआ है।' },
    ],
    relatedPracticeCategory: 'General Awareness',
  },
};

export const TOPIC_STUDY_GUIDES: Record<string, TopicStudyGuide> = {
  ...CORE_TOPIC_STUDY_GUIDES,
  ...MATH_TOPIC_STUDY_GUIDES,
  ...REASONING_TOPIC_STUDY_GUIDES,
  ...GK_RAILWAY_TOPIC_STUDY_GUIDES,
  ...ENGINEERING_TOPIC_STUDY_GUIDES,
  ...ALP_TECH_TOPIC_STUDY_GUIDES,
  ...UG_AND_GROUP_D_TOPIC_STUDY_GUIDES,
};
