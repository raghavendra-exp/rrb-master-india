import type { TopicStudyGuide } from './topicStudyNotes';

export const MATH_TOPIC_STUDY_GUIDES: Record<string, TopicStudyGuide> = {
  // =========================================================================
  // 1. FRACTIONS & HCF-LCM
  // =========================================================================
  'fractions-hcf-lcm': {
    topicId: 'fractions-hcf-lcm',
    title: {
      en: 'Fractions, Decimals, HCF & LCM (Advanced Models)',
      hi: 'भिन्न, दशमलव, म.स.प. एवं ल.स.प. (उन्नत अनुप्रयोग)',
    },
    subjectCategory: { en: 'Quantitative Aptitude', hi: 'संख्यात्मक अभिरुचि' },
    targetExam: { en: 'RRB NTPC / Group D / ALP / JE CBT-1', hi: 'आरआरबी एनटीपीसी / ग्रुप डी / एएलपी / जेई' },
    recommendedStudyTime: '3.0 Hours',
    blueprintImage: {
      src: './assets/rrb_master_curriculum.jpg',
      caption: {
        en: 'HCF-LCM & Fractional Dynamics Flowchart',
        hi: 'म.स.प.-ल.स.प. एवं भिन्नों का गणितीय प्रवाह आरेख',
      },
    },
    conceptualTheory: {
      heading: {
        en: 'Fundamental Theory of Common Multiples, Factors & Periodic Cycles',
        hi: 'समापवर्तक, समापवर्त्य एवं चक्रीय अंतरालों के मूल सिद्धांत',
      },
      deepExplanation: {
        en: 'Highest Common Factor (HCF / GCD) represents the greatest positive integer that divides two or more integers without a remainder. Least Common Multiple (LCM) is the smallest positive integer that is divisible by all given numbers. In RRB examinations, HCF and LCM are applied to physical periodic scenarios: church bells tolling at different time intervals, athletes running around a circular track meeting at the starting point, traffic light synchronization at busy railway junctions, and tiling rectangular surfaces with minimum identical square tiles. For fractions, LCM is given by (LCM of Numerators) / (HCF of Denominators), and HCF is given by (HCF of Numerators) / (LCM of Denominators).',
        hi: 'महत्तम समापवर्तक (HCF / GCD) वह सबसे बड़ी धनात्मक संख्या है जो दी गई संख्याओं को पूर्णतः विभाजित करती है। लघुत्तम समापवर्त्य (LCM) वह सबसे छोटी धनात्मक संख्या है जो दी गई सभी संख्याओं से पूर्णतः विभाज्य हो। रेलवे परीक्षाओं में ल.स.प. और म.स.प. का प्रयोग व्यावहारिक चक्रीय घटनाओं में होता है: अलग-अलग अंतरालों पर बजने वाली घंटियों का एक साथ बजना, वृत्ताकार ट्रैक पर धावकों का प्रारंभिक बिंदु पर पुनः मिलना, रेलवे सिग्नलों का एक साथ बदलना, तथा न्यूनतम वर्गाकार टाइलों से आयताकार फर्श को ढकना। भिन्नों के लिए: भिन्नों का LCM = (अंशों का LCM) / (हरों का HCF) तथा भिन्नों का HCF = (अंशों का HCF) / (हरों का LCM)।',
      },
      keyMechanisms: [
        {
          en: 'Product Property: For any two numbers A and B, HCF(A, B) × LCM(A, B) = A × B. (Note: This rule strictly holds for 2 numbers, not generally for 3 or more).',
          hi: 'गुणनफल नियम: किन्हीं दो संख्याओं A और B के लिए: HCF(A, B) × LCM(A, B) = A × B होता है। (ध्यान दें: यह नियम केवल 2 संख्याओं पर लागू होता है, 3 पर नहीं)।',
        },
        {
          en: 'Circular Track Loop Meeting Time: If three runners take t1, t2, and t3 seconds respectively to complete one circular lap, they will all meet together at the starting point after LCM(t1, t2, t3) seconds.',
          hi: 'वृत्ताकार ट्रैक मिलन समय: यदि तीन धावक एक चक्कर पूरा करने में क्रमशः t1, t2 और t3 सेकंड लेते हैं, तो वे प्रारंभिक बिंदु पर पुनः LCM(t1, t2, t3) सेकंड बाद मिलेंगे।',
        },
        {
          en: 'Bells Tolling at Intervals: If bells toll at intervals of a, b, c seconds, the time between simultaneous tolls is LCM(a, b, c). Total tolls in T hours = [T (in seconds) / LCM] + 1 (the first toll at t = 0).',
          hi: 'घंटियों के बजने का अंतराल: यदि घंटियां a, b, c सेकंड के अंतराल पर बजती हैं, तो एक साथ बजने का अंतराल LCM(a, b, c) होगा। T समय में कुल बार बजना = [T (सेकंड में) / LCM] + 1 (प्रारंभिक बजना t=0 पर)।',
        },
        {
          en: 'Division with Remainder Models: (1) Greatest number dividing x, y, z leaving remainder r in each case = HCF(x - r, y - r, z - r) or HCF(|x - y|, |y - z|, |z - x|). (2) Least number divided by x, y, z leaving remainder r in each case = LCM(x, y, z) + r.',
          hi: 'शेषफल आधारित विभाजन: (1) वह बड़ी संख्या जिससे x, y, z को भाग देने पर प्रत्येक दशा में r शेष बचे = HCF(x - r, y - r, z - r)। (2) वह छोटी संख्या जिसे x, y, z से भाग देने पर प्रत्येक दशा में r शेष बचे = LCM(x, y, z) + r।',
        },
      ],
    },
    formulasAndLaws: [
      {
        label: 'LCM of Fractions',
        expression: 'LCM(a/b, c/d, e/f) = LCM(a, c, e) / HCF(b, d, f)',
        explanation: { en: 'Always reduce fractions to lowest terms before applying this formula.', hi: 'सूत्र लगाने से पूर्व भिन्नों को सरलतम रूप में अवश्य बदलें।' },
      },
      {
        label: 'HCF of Fractions',
        expression: 'HCF(a/b, c/d, e/f) = HCF(a, c, e) / LCM(b, d, f)',
        explanation: { en: 'HCF of fractions always produces a fraction smaller than or equal to the smallest fraction.', hi: 'भिन्नों का HCF हमेशा सबसे छोटी भिन्न से छोटा या उसके बराबर होता है।' },
      },
      {
        label: 'Two Number Product Law',
        expression: 'HCF × LCM = Number₁ × Number₂',
        explanation: { en: 'If ratio of numbers is x : y and HCF is H, then numbers are Hx and Hy, and LCM = H × x × y.', hi: 'यदि संख्याओं का अनुपात x : y और HCF = H है, तो संख्याएं Hx और Hy होंगी, तथा LCM = H × x × y होगा।' },
      },
      {
        label: 'Common Difference Remainder',
        expression: 'Number = LCM(x, y, z) × k - d  [where d = (x - r₁) = (y - r₂) = (z - r₃)]',
        explanation: { en: 'Used when different remainders have a constant difference with their respective divisors.', hi: 'जब विभिन्न भाजकों और उनके शेषफलों का अंतर (d) समान हो।' },
      },
    ],
    workedExamples: [
      {
        id: 'hcf-ex-1',
        level: 'CBT-1 Foundation',
        question: {
          en: 'Find the LCM of 2/3, 8/9, 16/81, and 10/27.',
          hi: '2/3, 8/9, 16/81 तथा 10/27 का ल.स.प. (LCM) ज्ञात कीजिए।',
        },
        standardSolution: {
          en: 'Step 1: Formula: LCM of fractions = (LCM of Numerators) / (HCF of Denominators).\nStep 2: Numerators are 2, 8, 16, 10. Prime factors: 2 = 2¹, 8 = 2³, 16 = 2⁴, 10 = 2 × 5. LCM(2, 8, 16, 10) = 2⁴ × 5 = 16 × 5 = 80.\nStep 3: Denominators are 3, 9, 81, 27. Highest common factor dividing 3, 9, 81, 27 is 3.\nStep 4: LCM = 80 / 3.',
          hi: 'चरण 1: भिन्नों का LCM = (अंशों का LCM) / (हरों का HCF)।\nचरण 2: अंश हैं: 2, 8, 16, 10। इनका LCM = 80।\nचरण 3: हर हैं: 3, 9, 81, 27। इनका HCF = 3।\nचरण 4: अभीष्ट LCM = 80 / 3।',
        },
        topperShortcut: {
          en: '⚡ 10-Second Mental Rule: Numerators: largest is 16, multiple with 10 is 80. Denominators: smallest is 3, divides all (9, 81, 27). Answer = 80/3 directly!',
          hi: '⚡ 10-सेकंड ट्रिक: अंशों का ल.स.प. 80, हरों का म.स.प. 3। सीधा उत्तर = 80/3!',
        },
      },
      {
        id: 'hcf-ex-2',
        level: 'CBT-2 Advanced',
        question: {
          en: 'Six bells commence tolling together and toll at intervals of 2, 4, 6, 8, 10, and 12 seconds respectively. In 30 minutes, how many times do they toll together?',
          hi: 'छह घंटियां एक साथ बजना शुरू होती हैं और क्रमशः 2, 4, 6, 8, 10 और 12 सेकंड के अंतराल पर बजती हैं। 30 मिनट में वे कितनी बार एक साथ बजेंगी?',
        },
        standardSolution: {
          en: 'Step 1: Find the LCM of 2, 4, 6, 8, 10, 12 seconds.\n2 = 2, 4 = 2², 6 = 2 × 3, 8 = 2³, 10 = 2 × 5, 12 = 2² × 3.\nLCM = 2³ × 3 × 5 = 8 × 15 = 120 seconds = 2 minutes.\nStep 2: The bells toll together every 2 minutes.\nStep 3: In 30 minutes, number of intervals = 30 / 2 = 15.\nStep 4: Including the initial toll at start (t = 0), total tolls = 15 + 1 = 16 times.',
          hi: 'चरण 1: 2, 4, 6, 8, 10, 12 का LCM = 120 सेकंड = 2 मिनट।\nचरण 2: घंटियां प्रत्येक 2 मिनट पर एक साथ बजती हैं।\nचरण 3: 30 मिनट में अंतरालों की संख्या = 30 / 2 = 15 बार।\nचरण 4: प्रारंभ में एक साथ बजने को जोड़कर (t=0 पर): 15 + 1 = 16 बार।',
        },
        topperShortcut: {
          en: '⚠️ TCS Exam Trap: 90% students answer 15! Always add +1 for the starting toll. Answer = (30/2) + 1 = 16 times.',
          hi: '⚠️ टीसीएस परीक्षा जाल: अधिकांश छात्र 15 उत्तर लगाते हैं! शुरुआत वाले बजने के लिए हमेशा +1 करें। उत्तर = 15 + 1 = 16 बार।',
        },
      },
    ],
    commonTraps: [
      {
        en: 'Forgetting "+1" in tolling bells: The question states "they commence tolling together". This means at time t = 0 they toll once. Total tolls = (Total time / LCM) + 1.',
        hi: 'घंटियों वाले प्रश्न में "+1" भूलना: प्रश्न में लिखा होता है "एक साथ बजना शुरू होती हैं", अतः t = 0 पर वे 1 बार बज चुकी हैं। कुल बार = (समय / LCM) + 1।',
      },
      {
        en: 'Unreduced fractions trap: Finding LCM of 2/4 and 3/6 without reducing to 1/2 and 1/2 leads to incorrect HCF/LCM values. Always simplify fractions first.',
        hi: 'सरल न किए गए भिन्न: 2/4 और 3/6 का ल.स.प. निकालने से पहले उन्हें 1/2 में बदलना अनिवार्य है।',
      },
    ],
    topperSpeedHacks: [
      {
        en: 'Ratio to Number Trick: If ratio of two numbers is a : b and their HCF is H, the numbers are aH and bH, LCM is H·a·b, and their Sum is H(a + b). If sum and HCF are given, pairs = factors of (Sum / H).',
        hi: 'अनुपात-संख्या ट्रिक: यदि दो संख्याओं का अनुपात a : b और HCF = H है, तो संख्याएं aH और bH होंगी, LCM = H·a·b तथा योग = H(a + b) होगा।',
      },
    ],
    quickRevisionBulletPoints: [
      { en: 'HCF of two co-prime numbers is always 1.', hi: 'दो सह-अभाज्य संख्याओं का म.स.प. हमेशा 1 होता है।' },
      { en: 'LCM is always a multiple of HCF.', hi: 'ल.स.प. हमेशा म.स.प. का पूर्ण गुणज होता है।' },
      { en: 'For 3 numbers, A × B × C is NOT equal to HCF × LCM.', hi: 'तीन संख्याओं के लिए गुणनफल HCF × LCM के बराबर नहीं होता।' },
    ],
    relatedPracticeCategory: 'Quantitative Aptitude',
  },

  // =========================================================================
  // 2. ALGEBRA, FUNCTIONS & PROGRESSIONS
  // =========================================================================
  'algebra-functions-progressions': {
    topicId: 'algebra-functions-progressions',
    title: {
      en: 'Algebra, Quadratic Equations, Progressions (AP/GP) & Polynomials',
      hi: 'बीजगणित, द्विघात समीकरण, श्रेणियां (समानांतर व गुणोत्तर) एवं बहुपद',
    },
    subjectCategory: { en: 'Quantitative Aptitude', hi: 'संख्यात्मक अभिरुचि' },
    targetExam: { en: 'RRB NTPC CBT-2 / JE / Group D', hi: 'आरआरबी एनटीपीसी सीबीटी-2 / जेई / ग्रुप डी' },
    recommendedStudyTime: '3.5 Hours',
    blueprintImage: {
      src: './assets/rrb_master_curriculum.jpg',
      caption: {
        en: 'Algebraic Equations & Progressions Blueprint',
        hi: 'बीजगणितीय समीकरण एवं श्रेणी विश्लेषण ब्लूप्रिंट',
      },
    },
    conceptualTheory: {
      heading: {
        en: 'Algebraic Identities, Roots of Polynomials & Sequence Progressions',
        hi: 'बीजगणितीय सर्वसमिकाएं, मूलों की प्रकृति एवं अनुक्रम श्रेणियां',
      },
      deepExplanation: {
        en: 'Algebra in Railway exams tests symmetric expressions and polynomial transformations. For quadratic equation ax² + bx + c = 0, the roots are given by the quadratic formula x = (-b ± √(b² - 4ac)) / 2a. The discriminant D = b² - 4ac determines the nature of roots: D > 0 (real and distinct), D = 0 (real and equal), and D < 0 (complex conjugate). Relations between roots α and β: α + β = -b/a and αβ = c/a. For Arithmetic Progressions (AP), consecutive terms have a constant difference d, while for Geometric Progressions (GP), consecutive terms have a constant ratio r. In TCS patterns, expressions like x + 1/x = k are frequently asked to find x² + 1/x², x³ + 1/x³, and x⁵ + 1/x⁵.',
        hi: 'रेलवे परीक्षाओं में बीजगणित सममित व्यंजकों और बहुपदों के रूपांतरण पर केंद्रित होता है। द्विघात समीकरण ax² + bx + c = 0 के मूल x = (-b ± √(b² - 4ac)) / 2a होते हैं। विविक्तकर (Discriminant) D = b² - 4ac मूलों की प्रकृति बताता है: D > 0 (वास्तविक व भिन्न), D = 0 (वास्तविक व बराबर), D < 0 (काल्पनिक)। मूलों का योग α + β = -b/a तथा गुणनफल αβ = c/a होता है। समानांतर श्रेणी (AP) में पदों का अंतर d नियत रहता है, जबकि गुणोत्तर श्रेणी (GP) में अनुपात r नियत रहता है। टीसीएस पैटर्न में x + 1/x = k के आधार पर x² + 1/x², x³ + 1/x³ एवं x⁵ + 1/x⁵ के मान पूछे जाते हैं।',
      },
      keyMechanisms: [
        {
          en: 'Power Symmetrical Reductions: If x + 1/x = k, then: (1) x² + 1/x² = k² - 2. (2) x³ + 1/x³ = k³ - 3k. (3) x⁴ + 1/x⁴ = (k² - 2)² - 2. (4) x⁵ + 1/x⁵ = (x² + 1/x²)(x³ + 1/x³) - (x + 1/x).',
          hi: 'सममित घात न्यूनीकरण: यदि x + 1/x = k है, तो: (1) x² + 1/x² = k² - 2। (2) x³ + 1/x³ = k³ - 3k। (3) x⁴ + 1/x⁴ = (k² - 2)² - 2। (4) x⁵ + 1/x⁵ = (x² + 1/x²)(x³ + 1/x³) - (x + 1/x)।',
        },
        {
          en: 'Conditional Identity: If a + b + c = 0, then a³ + b³ + c³ = 3abc. Furthermore, if a² + b² + c² - ab - bc - ca = 0, then a = b = c.',
          hi: 'शर्तयुक्त सर्वसमिका: यदि a + b + c = 0 है, तो a³ + b³ + c³ = 3abc होता है। इसके अतिरिक्त, यदि a² + b² + c² - ab - bc - ca = 0 है, तो a = b = c होता है।',
        },
        {
          en: 'Arithmetic Progression (AP): nth term Tn = a + (n - 1)d. Sum of n terms Sn = (n / 2)[2a + (n - 1)d] = (n / 2)(first term + last term).',
          hi: 'समानांतर श्रेणी (AP): nवां पद Tn = a + (n - 1)d। प्रथम n पदों का योग Sn = (n / 2)[2a + (n - 1)d] = (n / 2)(प्रथम पद + अंतिम पद)।',
        },
        {
          en: 'Infinite Geometric Progression: If |r| < 1, the sum to infinity S∞ = a / (1 - r).',
          hi: 'अनंत गुणोत्तर श्रेणी: यदि |r| < 1 है, तो अनंत पदों का योग S∞ = a / (1 - r) होता है।',
        },
      ],
    },
    formulasAndLaws: [
      {
        label: 'Symmetric Root Sums',
        expression: 'α² + β² = (α + β)² - 2αβ  |  α³ + β³ = (α + β)³ - 3αβ(α + β)',
        explanation: { en: 'Evaluate higher powers of roots directly using coefficients -b/a and c/a.', hi: 'गुणांकों -b/a और c/a का उपयोग करके मूलों की उच्च घातें ज्ञात करना।' },
      },
      {
        label: 'Condition for a + b + c = 0',
        expression: 'a³ + b³ + c³ - 3abc = (a + b + c)(a² + b² + c² - ab - bc - ca)',
        explanation: { en: 'If (a + b + c) = 0, expression simplifies instantly to a³ + b³ + c³ = 3abc.', hi: 'यदि (a + b + c) = 0 हो, तो a³ + b³ + c³ = 3abc हो जाता है।' },
      },
      {
        label: 'AP Sum Formula',
        expression: 'Sₙ = (n / 2)[2a + (n - 1)d] = n × (Mean of First and Last term)',
        explanation: { en: 'Sum equals number of terms multiplied by the arithmetic mean.', hi: 'पदों की संख्या × (प्रथम और अंतिम पद का औसत)।' },
      },
      {
        label: 'Sum of Infinite GP',
        expression: 'S_∞ = a / (1 - r)  [valid for -1 < r < 1]',
        explanation: { en: 'Calculates bouncing ball distance and infinite series limits.', hi: 'उछलती गेंद द्वारा तय कुल दूरी तथा अनंत श्रेणियों के योग हेतु।' },
      },
    ],
    workedExamples: [
      {
        id: 'alg-ex-1',
        level: 'CBT-1 Foundation',
        question: {
          en: 'If x + 1/x = 4, find the value of x⁵ + 1/x⁵.',
          hi: 'यदि x + 1/x = 4 है, तो x⁵ + 1/x⁵ का मान ज्ञात कीजिए।',
        },
        standardSolution: {
          en: 'Step 1: Calculate x² + 1/x² = k² - 2 = 4² - 2 = 16 - 2 = 14.\nStep 2: Calculate x³ + 1/x³ = k³ - 3k = 4³ - 3(4) = 64 - 12 = 52.\nStep 3: Multiply: (x² + 1/x²)(x³ + 1/x³) = x⁵ + 1/x⁵ + (x + 1/x).\nStep 4: Substitute known values: 14 × 52 = x⁵ + 1/x⁵ + 4.\n728 = x⁵ + 1/x⁵ + 4 => x⁵ + 1/x⁵ = 728 - 4 = 724.',
          hi: 'चरण 1: x² + 1/x² = 4² - 2 = 14।\nचरण 2: x³ + 1/x³ = 4³ - 3(4) = 64 - 12 = 52।\nचरण 3: (x² + 1/x²)(x³ + 1/x³) = x⁵ + 1/x⁵ + (x + 1/x)।\nचरण 4: 14 × 52 = x⁵ + 1/x⁵ + 4 => 728 - 4 = 724।',
        },
        topperShortcut: {
          en: '⚡ Topper Formula: x⁵ + 1/x⁵ = (k² - 2)(k³ - 3k) - k. Directly calculate: (14 × 52) - 4 = 728 - 4 = 724 in 15 seconds!',
          hi: '⚡ सीधा सूत्र: x⁵ + 1/x⁵ = (k² - 2)(k³ - 3k) - k = (14 × 52) - 4 = 724 मात्र 15 सेकंड में!',
        },
      },
      {
        id: 'alg-ex-2',
        level: 'CBT-2 Advanced',
        question: {
          en: 'If the roots of equation 2x² - 7x + 3 = 0 are α and β, find the value of (α/β + β/α).',
          hi: 'यदि समीकरण 2x² - 7x + 3 = 0 के मूल α और β हैं, तो (α/β + β/α) का मान ज्ञात कीजिए।',
        },
        standardSolution: {
          en: 'Step 1: For ax² + bx + c = 0, a = 2, b = -7, c = 3.\nSum of roots: α + β = -b/a = -(-7)/2 = 7/2.\nProduct of roots: αβ = c/a = 3/2.\nStep 2: Simplify required expression: α/β + β/α = (α² + β²) / αβ.\nStep 3: Since α² + β² = (α + β)² - 2αβ = (7/2)² - 2(3/2) = 49/4 - 3 = (49 - 12)/4 = 37/4.\nStep 4: (α/β + β/α) = (37/4) / (3/2) = (37/4) × (2/3) = 37 / 6.',
          hi: 'चरण 1: a = 2, b = -7, c = 3। मूलों का योग: α + β = 7/2। मूलों का गुणनफल: αβ = 3/2।\nचरण 2: (α/β + β/α) = (α² + β²) / αβ।\nचरण 3: α² + β² = (7/2)² - 2(3/2) = 49/4 - 3 = 37/4।\nचरण 4: (37/4) / (3/2) = 37 / 6।',
        },
        topperShortcut: {
          en: '⚡ Shortcut Identity: (α/β + β/α) = (b² - 2ac) / ac. Directly: [(-7)² - 2(2)(3)] / [2 × 3] = (49 - 12) / 6 = 37/6!',
          hi: '⚡ सीधा सूत्र: (b² - 2ac) / ac = (49 - 12) / 6 = 37/6!',
        },
      },
    ],
    commonTraps: [
      {
        en: 'Sign error in b/a: Sum of roots is -b/a, NOT +b/a. In 2x² - 7x + 3 = 0, b = -7, so -b/a = -(-7)/2 = +7/2.',
        hi: 'चिह्न त्रुटि: मूलों का योग -b/a होता है, न कि +b/a। 2x² - 7x + 3 = 0 में b = -7 है, अतः -b/a = +7/2 होगा।',
      },
    ],
    topperSpeedHacks: [
      {
        en: 'AP Middle Term Property: For an odd number of terms in AP, the sum Sn = (Middle Term) × (Number of Terms).',
        hi: 'AP मध्य पद नियम: विषम पदों वाली AP में: कुल योग = (मध्य पद) × (कुल पदों की संख्या)।',
      },
    ],
    quickRevisionBulletPoints: [
      { en: 'If x + 1/x = 2, then x = 1. (xⁿ + 1/xⁿ = 2 for all n).', hi: 'यदि x + 1/x = 2 है, तो x = 1 होगा। (सभी n हेतु xⁿ + 1/xⁿ = 2)।' },
      { en: 'If x + 1/x = -2, then x = -1.', hi: 'यदि x + 1/x = -2 है, तो x = -1 होगा।' },
      { en: 'If x + 1/x = 1, then x³ = -1. (x³ + 1 = 0).', hi: 'यदि x + 1/x = 1 है, तो x³ = -1 होगा।' },
    ],
    relatedPracticeCategory: 'Quantitative Aptitude',
  },

  // =========================================================================
  // 3. GEOMETRY, COORDINATE & MENSURATION
  // =========================================================================
  'geometry-coordinate-mensuration': {
    topicId: 'geometry-coordinate-mensuration',
    title: {
      en: 'Geometry, Coordinate Geometry & 2D/3D Mensuration',
      hi: 'ज्यामिति, निर्देशांक ज्यामिति एवं 2D/3D क्षेत्रमिति',
    },
    subjectCategory: { en: 'Quantitative Aptitude', hi: 'संख्यात्मक अभिरुचि' },
    targetExam: { en: 'RRB NTPC CBT-2 / JE / Group D', hi: 'आरआरबी एनटीपीसी / जेई / ग्रुप डी' },
    recommendedStudyTime: '4.0 Hours',
    blueprintImage: {
      src: './assets/rrb_master_curriculum.jpg',
      caption: {
        en: 'Geometric Theorems & Spatial Mensuration Matrix',
        hi: 'ज्यामितीय प्रमेय एवं त्रिविमीय क्षेत्रमिति मैट्रिक्स',
      },
    },
    conceptualTheory: {
      heading: {
        en: 'Circle Theorems, Tangents, Coordinate Distances & Solid Geometry',
        hi: 'वृत्त प्रमेय, स्पर्श रेखाएं, निर्देशांक दूरी एवं ठोस ज्यामिति',
      },
      deepExplanation: {
        en: 'Geometry and Mensuration constitute 15-20% of the advanced mathematics section in RRB NTPC CBT-2 and JE. Circle theorems emphasize that the angle subtended by an arc at the center is double the angle subtended at any point on the remaining circumference. The angle in a semicircle is a right angle (90°). In a cyclic quadrilateral, opposite angles are supplementary (sum = 180°). For intersecting chords, PA × PB = PC × PD. For a tangent PT and secant PAB, PT² = PA × PB. Coordinate geometry models distance between points (x₁, y₁) and (x₂, y₂) via √[(x₂ - x₁)² + (y₂ - y₁)²], internal section formula [(mx₂ + nx₁)/(m+n), (my₂ + ny₁)/(m+n)], and area of triangle using determinants. 3D Mensuration models cylinders, cones, spheres, hemispheres, and frustums with conservation of volume during melting and recasting.',
        hi: 'आरआरबी एनटीपीसी सीबीटी-2 और जेई में ज्यामिति और क्षेत्रमिति का 15-20% भार होता है। वृत्त प्रमेयों में: किसी चाप द्वारा केंद्र पर अंतरित कोण, शेष परिधि के किसी बिंदु पर अंतरित कोण का दोगुना होता है। अर्धवृत्त में बना कोण समकोण (90°) होता है। चक्रीय चतुर्भुज के सम्मुख कोणों का योग 180° होता है। प्रतिच्छेदी जीवाओं में: PA × PB = PC × PD। स्पर्श रेखा PT और छेदक रेखा PAB में: PT² = PA × PB होता है। निर्देशांक ज्यामिति में दो बिंदुओं के बीच दूरी d = √[(x₂ - x₁)² + (y₂ - y₁)²], विभाजन सूत्र एवं त्रिभुज का क्षेत्रफल प्रमुख हैं। 3D क्षेत्रमिति में ठोसों को पिघलाकर नए ठोस बनाने में आयतन के संरक्षण का सिद्धांत लागू होता है।',
      },
      keyMechanisms: [
        {
          en: 'Tangent-Secant Theorem: If PT is a tangent from external point P to circle, and PAB is a secant line cutting the circle at A and B, then PT² = PA × PB.',
          hi: 'स्पर्श रेखा-छेदक रेखा प्रमेय: यदि बाह्य बिंदु P से PT स्पर्श रेखा है तथा PAB छेदक रेखा है जो वृत्त को A और B पर काटती है, तो PT² = PA × PB होता है।',
        },
        {
          en: 'Alternate Segment Theorem: The angle between a tangent and a chord through the point of contact is equal to the angle subtended by the chord in the alternate segment.',
          hi: 'एकांतर वृत्तखंड प्रमेय: स्पर्श बिंदु से खींची गई जीवा और स्पर्श रेखा के बीच का कोण, उस जीवा द्वारा एकांतर वृत्तखंड में बनाए गए कोण के बराबर होता है।',
        },
        {
          en: 'Common Tangents of Two Circles: Direct Common Tangent (DCT) length = √[d² - (r₁ - r₂)²]. Transverse Common Tangent (TCT) length = √[d² - (r₁ + r₂)²], where d is distance between centers.',
          hi: 'दो वृत्तों की उभयनिष्ठ स्पर्श रेखाएं: अनुस्पर्श रेखा (DCT) = √[d² - (r₁ - r₂)²]। तिर्यक स्पर्श रेखा (TCT) = √[d² - (r₁ + r₂)²], जहाँ d केंद्रों के बीच की दूरी है।',
        },
        {
          en: 'Melting & Recasting Invariance: When a solid is melted to form smaller solids, Total Initial Volume = Sum of Final Volumes. n = Volume of Large Solid / Volume of 1 Small Solid.',
          hi: 'पिघलाने एवं ढालने का नियम: जब किसी ठोस को पिघलाकर छोटे ठोस बनाए जाते हैं, तो प्रारंभिक कुल आयतन = अंतिम कुल आयतन। गोलियों की संख्या n = बड़े ठोस का आयतन / 1 छोटी गोली का आयतन।',
        },
      ],
    },
    formulasAndLaws: [
      {
        label: 'Direct Common Tangent (DCT)',
        expression: 'L_DCT = √[d² - (r₁ - r₂)²]',
        explanation: { en: 'Length of direct common tangent between two non-intersecting circles.', hi: 'दो वृत्तों की सीधी उभयनिष्ठ स्पर्श रेखा की लंबाई।' },
      },
      {
        label: 'Sphere & Cylinder Volumes',
        expression: 'V_sphere = (4/3)πr³  |  V_cylinder = πr²h  |  V_cone = (1/3)πr²h',
        explanation: { en: 'Ratio of Volume of Cone : Sphere : Cylinder of same radius and height 2r is 1 : 2 : 3.', hi: 'समान त्रिज्या और ऊँचाई 2r वाले शंकु : गोला : बेलन के आयतन का अनुपात 1 : 2 : 3 होता है।' },
      },
      {
        label: 'Triangle Coordinate Area',
        expression: 'Area = (1/2)|x₁(y₂ - y₃) + x₂(y₃ - y₁) + x₃(y₁ - y₂)|',
        explanation: { en: 'If Area = 0, the three points are collinear.', hi: 'यदि क्षेत्रफल = 0 आए, तो तीनों बिंदु संरेखीय (collinear) होते हैं।' },
      },
      {
        label: 'Frustum Volume',
        expression: 'V = (1/3)πh(R² + r² + Rr)',
        explanation: { en: 'Volume of bucket or conical frustum with top radius R and bottom radius r.', hi: 'शंकु के छिन्नक (बाल्टी) का आयतन।' },
      },
    ],
    workedExamples: [
      {
        id: 'geo-ex-1',
        level: 'CBT-2 Advanced',
        question: {
          en: 'From an external point P, a tangent PT of length 12 cm is drawn to a circle. A secant PAB passes through center and cuts circle at A and B. If PA = 8 cm, find the length of chord AB and radius of circle.',
          hi: 'एक बाह्य बिंदु P से वृत्त पर 12 सेमी लंबी स्पर्श रेखा PT खींची गई है। एक छेदक रेखा PAB वृत्त को A और B पर काटती है। यदि PA = 8 सेमी है, तो जीवा AB की लंबाई ज्ञात कीजिए।',
        },
        standardSolution: {
          en: 'Step 1: Apply Tangent-Secant Theorem: PT² = PA × PB.\nStep 2: 12² = 8 × PB => 144 = 8 × PB => PB = 144 / 8 = 18 cm.\nStep 3: Since PB = PA + AB, we have 18 = 8 + AB => AB = 18 - 8 = 10 cm.\nAnswer: Length of chord AB = 10 cm.',
          hi: 'चरण 1: स्पर्श रेखा-छेदक रेखा प्रमेय: PT² = PA × PB।\nचरण 2: 12² = 8 × PB => 144 = 8 × PB => PB = 18 सेमी।\nचरण 3: PB = PA + AB => 18 = 8 + AB => AB = 18 - 8 = 10 सेमी।\nउत्तर: जीवा AB की लंबाई = 10 सेमी।',
        },
        topperShortcut: {
          en: '⚡ 15-Second Rule: PB = PT² / PA = 144 / 8 = 18 cm. AB = PB - PA = 18 - 8 = 10 cm directly!',
          hi: '⚡ सीधा कैलकुलेशन: PB = 144 / 8 = 18 सेमी। AB = 18 - 8 = 10 सेमी!',
        },
      },
      {
        id: 'geo-ex-2',
        level: 'CBT-1 Foundation',
        question: {
          en: 'A solid metallic sphere of radius 6 cm is melted and recast into small spherical balls of radius 2 cm each. Find the number of balls formed.',
          hi: '6 सेमी त्रिज्या वाले एक ठोस धातु के गोले को पिघलाकर 2 सेमी त्रिज्या की छोटी गोलियां बनाई जाती हैं। बनने वाली गोलियों की संख्या ज्ञात कीजिए।',
        },
        standardSolution: {
          en: 'Step 1: Volume of large sphere V₁ = (4/3)π R³ = (4/3)π (6)³.\nStep 2: Volume of one small ball V₂ = (4/3)π r³ = (4/3)π (2)³.\nStep 3: Number of balls n = V₁ / V₂ = [(4/3)π (6)³] / [(4/3)π (2)³] = (6 / 2)³ = 3³ = 27 balls.',
          hi: 'चरण 1: बड़े गोले का आयतन V₁ = (4/3)π (6)³।\nचरण 2: छोटी गोली का आयतन V₂ = (4/3)π (2)³।\nचरण 3: गोलियों की संख्या n = (R / r)³ = (6 / 2)³ = 3³ = 27 गोलियां।',
        },
        topperShortcut: {
          en: '⚡ Scaling Law: Number of 3D identical shapes = (Linear Dimension Ratio)³ = (6/2)³ = 3³ = 27 balls in 5 seconds!',
          hi: '⚡ 3D अनुपात नियम: n = (R / r)³ = (6 / 2)³ = 27 गोलियां मात्र 5 सेकंड में!',
        },
      },
    ],
    commonTraps: [
      {
        en: 'Radius vs Diameter trap: Questions frequently give diameter instead of radius. Always divide diameter by 2 before applying volume formulas.',
        hi: 'व्यास बनाम त्रिज्या जाल: प्रश्न में अक्सर व्यास दिया होता है। आयतन सूत्र में रखने से पूर्व व्यास को 2 से भाग देकर त्रिज्या अवश्य निकालें।',
      },
      {
        en: 'Surface Area vs Curved Surface Area: In a cylinder, Total Surface Area = 2πrh + 2πr²; Curved Surface Area = 2πrh. In hemisphere, Total SA = 3πr² while Curved SA = 2πr².',
        hi: 'संपूर्ण पृष्ठ बनाम वक्र पृष्ठ: अर्धगोले का वक्र पृष्ठ 2πr² होता है जबकि संपूर्ण पृष्ठ 3πr² होता है।',
      },
    ],
    topperSpeedHacks: [
      {
        en: 'Divisibility by 11 Hack (π calculations): In mensuration problems involving π (22/7), the answer must be divisible by 11 (unless radius or height is a fractional multiple). Check odd-even digit difference of options!',
        hi: '11 से विभाज्यता का हैक: जिन प्रश्नों में π (22/7) आता है, उनके उत्तर 11 से अवश्य विभाज्य होते हैं। विकल्पों के विषम-सम अंकों का अंतर जांचें!',
      },
    ],
    quickRevisionBulletPoints: [
      { en: 'Sum of interior angles of an n-sided polygon = (n - 2) × 180°.', hi: 'n भुजाओं वाले बहुभुज के अंतःकोणों का योग = (n - 2) × 180°।' },
      { en: 'Sum of exterior angles of any convex polygon is always 360°.', hi: 'किसी भी बहुभुज के बाह्य कोणों का योग हमेशा 360° होता है।' },
      { en: 'Number of diagonals in an n-sided polygon = n(n - 3) / 2.', hi: 'n भुजाओं वाले बहुभुज में विकर्णों की संख्या = n(n - 3) / 2।' },
    ],
    relatedPracticeCategory: 'Quantitative Aptitude',
  },

  // =========================================================================
  // 4. TRIGONOMETRY, HEIGHTS & DISTANCES
  // =========================================================================
  'trigonometry-height-distances': {
    topicId: 'trigonometry-height-distances',
    title: {
      en: 'Trigonometry, Identities, Heights & Distances',
      hi: 'त्रिकोणमिति, सर्वसमिकाएं, ऊँचाई एवं दूरी',
    },
    subjectCategory: { en: 'Quantitative Aptitude', hi: 'संख्यात्मक अभिरुचि' },
    targetExam: { en: 'RRB NTPC CBT-1 & 2 / JE / Group D', hi: 'आरआरबी एनटीपीसी / जेई / ग्रुप डी' },
    recommendedStudyTime: '3.0 Hours',
    blueprintImage: {
      src: './assets/rrb_master_curriculum.jpg',
      caption: {
        en: 'Trigonometric Ratios & Elevation/Depression Angles',
        hi: 'त्रिकोणमितीय अनुपात एवं उन्नयन/अवनमन कोण ब्लूप्रिंट',
      },
    },
    conceptualTheory: {
      heading: {
        en: 'Pythagorean Trigonometric Foundations & Ratio Triangle Methods',
        hi: 'पाइथागोरस त्रिकोणमितीय आधार एवं अनुपात त्रिभुज विधि',
      },
      deepExplanation: {
        en: 'Trigonometry in RRB examinations revolves around three primary pillars: fundamental identities (sin²θ + cos²θ = 1, sec²θ - tan²θ = 1, cosec²θ - cot²θ = 1), complementary angle pairs (sin θ = cos(90° - θ), tan θ = cot(90° - θ), sec θ = cosec(90° - θ)), and rapid resolution of Heights and Distances without traditional trigonometric calculations. By using the standard ratio triangles: in a 30°-60°-90° right triangle, sides opposite to angles are in the ratio 1 : √3 : 2. In a 45°-45°-90° right triangle, sides are in the ratio 1 : 1 : √2. Using these two standard ratio templates, 95% of railway height and distance questions (broken trees, ships approaching a lighthouse, shadows of towers at different times of day) can be solved mentally in under 20 seconds without writing multi-step equations.',
        hi: 'रेलवे परीक्षाओं में त्रिकोणमिति तीन प्रमुख स्तंभों पर आधारित होती है: मूल सर्वसमिकाएं (sin²θ + cos²θ = 1, sec²θ - tan²θ = 1, cosec²θ - cot²θ = 1), पूरक कोण युग्म (sin θ = cos(90° - θ), tan θ = cot(90° - θ)) तथा बिना समीकरण बनाए ऊँचाई और दूरी के प्रश्नों का तीव्र समाधान। अनुपात त्रिभुज विधि: 30°-60°-90° वाले समकोण त्रिभुज में कोणों के सम्मुख भुजाओं का अनुपात 1 : √3 : 2 होता है। 45°-45°-90° त्रिभुज में भुजाओं का अनुपात 1 : 1 : √2 होता है। इन दो अनुपातों से रेलवे के 95% ऊँचाई-दूरी प्रश्न (टूटा हुआ पेड़, लाइटहाउस की ओर आता जहाज, मीनार की छाया) बिना समीकरण लिखे 20 सेकंड में हल हो जाते हैं।',
      },
      keyMechanisms: [
        {
          en: 'Complementary Angle Cancellation: Whenever α + β = 90°, sin α / cos β = 1, tan α · tan β = 1, and sin²α + sin²β = 1. Used heavily in TCS simplification chains.',
          hi: 'पूरक कोण निरसन: जब भी α + β = 90° हो: sin α / cos β = 1, tan α · tan β = 1, तथा sin²α + sin²β = 1 होता है।',
        },
        {
          en: '30°-60°-90° Ratio Standard: Side opposite 30° = x, side opposite 60° = x√3, Hypotenuse = 2x.',
          hi: '30°-60°-90° अनुपात: 30° के सामने वाली भुजा = x, 60° के सामने = x√3, कर्ण = 2x।',
        },
        {
          en: '45°-45°-90° Ratio Standard: Both perpendicular sides = x, Hypotenuse = x√2.',
          hi: '45°-45°-90° अनुपात: दोनों लंबवत भुजाएं = x, कर्ण = x√2।',
        },
        {
          en: 'Two-Point Distance Model: If a tower of height h is observed from two points in line with angles 30° and 60°, the distance between the observation points d = 2h / √3, and distance from foot to 60° point is h / √3.',
          hi: 'दो-बिंदु दूरी मॉडल: यदि h ऊँचाई की मीनार को 30° और 60° के कोणों से देखा जाए, तो दोनों बिंदुओं के बीच दूरी d = 2h / √3 होती है।',
        },
      ],
    },
    formulasAndLaws: [
      {
        label: 'Fundamental Pythagorean Identities',
        expression: 'sin²θ + cos²θ = 1  |  sec²θ - tan²θ = 1  |  cosec²θ - cot²θ = 1',
        explanation: { en: 'Note: sec θ + tan θ = 1 / (sec θ - tan θ). If sec θ + tan θ = k, then sec θ = (k² + 1) / 2k.', hi: 'यदि sec θ + tan θ = k हो, तो sec θ = (k² + 1) / 2k तथा tan θ = (k² - 1) / 2k होता है।' },
      },
      {
        label: 'Complementary Product Law',
        expression: 'tan 1° · tan 2° ··· tan 89° = 1',
        explanation: { en: 'Symmetric complementary pairs tan θ · tan(90° - θ) = 1 multiply out to unity.', hi: 'पूरक कोण युग्म आपस में कटकर 1 बनाते हैं।' },
      },
      {
        label: 'Tower Height from Angles α and β',
        expression: 'h = d / (cot α - cot β)',
        explanation: { en: 'Calculates height when moving towards or away from tower by distance d.', hi: 'मीनार की ओर d दूरी चलने पर कोण α से β होने पर ऊँचाई का सूत्र।' },
      },
    ],
    workedExamples: [
      {
        id: 'trig-ex-1',
        level: 'CBT-1 Foundation',
        question: {
          en: 'If sec θ + tan θ = 5, find the value of sin θ.',
          hi: 'यदि sec θ + tan θ = 5 है, तो sin θ का मान ज्ञात कीजिए।',
        },
        standardSolution: {
          en: 'Step 1: Identity: sec²θ - tan²θ = 1 => (sec θ + tan θ)(sec θ - tan θ) = 1.\nStep 2: Since sec θ + tan θ = 5, sec θ - tan θ = 1/5 = 0.2.\nStep 3: Add the two equations: 2 sec θ = 5 + 0.2 = 5.2 => sec θ = 2.6 = 26/10 = 13/5.\nStep 4: In a right triangle, sec θ = Hypotenuse / Adjacent = 13 / 5.\nOpposite side = √(13² - 5²) = √(169 - 25) = √144 = 12.\nStep 5: sin θ = Opposite / Hypotenuse = 12 / 13.',
          hi: 'चरण 1: sec²θ - tan²θ = 1 => sec θ - tan θ = 1/5।\nचरण 2: जोड़ने पर: 2 sec θ = 5 + 1/5 = 26/5 => sec θ = 13/5।\nचरण 3: कर्ण = 13, आधार = 5 => लंब = √(13² - 5²) = 12।\nचरण 4: sin θ = लंब / कर्ण = 12 / 13।',
        },
        topperShortcut: {
          en: '⚡ 15-Second Direct Formula: sin θ = (k² - 1) / (k² + 1). Put k = 5: sin θ = (5² - 1) / (5² + 1) = (25 - 1) / (25 + 1) = 24 / 26 = 12 / 13 in 1 step!',
          hi: '⚡ सीधा सूत्र: sin θ = (k² - 1) / (k² + 1) = (25 - 1) / (25 + 1) = 24 / 26 = 12 / 13 मात्र 10 सेकंड में!',
        },
      },
      {
        id: 'trig-ex-2',
        level: 'CBT-2 Advanced',
        question: {
          en: 'The angle of elevation of the top of a tower from a point on the ground is 30°. On walking 50 meters towards the tower, the angle of elevation becomes 60°. Find the height of the tower.',
          hi: 'भूमि के एक बिंदु से मीनार के शीर्ष का उन्नयन कोण 30° है। मीनार की ओर 50 मीटर चलने पर उन्नयन कोण 60° हो जाता है। मीनार की ऊँचाई ज्ञात कीजिए।',
        },
        standardSolution: {
          en: 'Step 1: Let height of tower be h. Distance from foot to 60° point be x. Distance to 30° point = x + 50.\nStep 2: From 60° triangle: tan 60° = h / x => √3 = h / x => x = h / √3.\nStep 3: From 30° triangle: tan 30° = h / (x + 50) => 1 / √3 = h / (h/√3 + 50).\nStep 4: Cross multiply: h/√3 + 50 = h√3 => 50 = h√3 - h/√3 = h(3 - 1)/√3 = 2h / √3.\nStep 5: h = (50 × √3) / 2 = 25√3 ≈ 25 × 1.732 = 43.3 meters.',
          hi: 'चरण 1: माना मीनार की ऊँचाई h है। 60° कोण पर दूरी x = h / √3।\nचरण 2: 30° त्रिभुज में: tan 30° = h / (x + 50) => x + 50 = h√3।\nचरण 3: h/√3 + 50 = h√3 => 50 = 2h / √3 => h = 25√3 मीटर।',
        },
        topperShortcut: {
          en: '⚡ 30°-60° Distance Trick: In any 30°-60° shift, distance walked d = 2x, where x is distance from 60° point to foot. x = 50 / 2 = 25 m. Height h = x√3 = 25√3 m. Zero calculations!',
          hi: '⚡ 30°-60° अनुपात ट्रिक: चली गई दूरी d = 2x (जहाँ x आधार से 60° बिंदु की दूरी है)। x = 50 / 2 = 25 मी। ऊँचाई h = x√3 = 25√3 मीटर। बिना कलम चलाए हल!',
        },
      },
    ],
    commonTraps: [
      {
        en: 'Elevation vs Depression confusion: Angle of depression from observer to an object on ground is ALWAYS equal to the angle of elevation from object to observer (alternate interior angles). Draw the horizontal reference line correctly.',
        hi: 'उन्नयन बनाम अवनमन भ्रम: अवनमन कोण हमेशा उन्नयन कोण के बराबर होता है (एकांतर कोण)। क्षैतिज रेखा सही बनाएं।',
      },
    ],
    topperSpeedHacks: [
      {
        en: 'Value Substitution Method: In proving or simplifying trigonometric algebraic expressions with no angles specified, substitute θ = 45° (or 30°/60° if tan/cot is present and avoid 0 in denominator).',
        hi: 'मान प्रतिस्थापन विधि: सर्वसमिकाओं को हल करते समय θ = 45° रखकर विकल्पों की सीधी तुलना करें।',
      },
    ],
    quickRevisionBulletPoints: [
      { en: '√3 ≈ 1.732, √2 ≈ 1.414.', hi: '√3 ≈ 1.732, √2 ≈ 1.414।' },
      { en: 'tan 45° = 1. In a 45° elevation, Height = Distance.', hi: 'tan 45° = 1। 45° उन्नयन कोण पर ऊँचाई = आधार दूरी।' },
      { en: 'tan 15° = 2 - √3, tan 75° = 2 + √3.', hi: 'tan 15° = 2 - √3, tan 75° = 2 + √3।' },
    ],
    relatedPracticeCategory: 'Quantitative Aptitude',
  },

  // =========================================================================
  // 5. STATISTICS & DATA INTERPRETATION
  // =========================================================================
  'statistics-data-interpretation': {
    topicId: 'statistics-data-interpretation',
    title: {
      en: 'Statistics, Dispersion Metrics & Data Interpretation',
      hi: 'सांख्यिकी, विक्षेपण माप एवं समंक व्याख्या (DI)',
    },
    subjectCategory: { en: 'Quantitative Aptitude', hi: 'संख्यात्मक अभिरुचि' },
    targetExam: { en: 'RRB NTPC CBT-1 & 2 / Group D', hi: 'आरआरबी एनटीपीसी / ग्रुप डी' },
    recommendedStudyTime: '3.0 Hours',
    blueprintImage: {
      src: './assets/rrb_master_curriculum.jpg',
      caption: {
        en: 'Statistical Dispersion & Data Interpretation Architecture',
        hi: 'सांख्यिकीय विक्षेपण एवं समंक व्याख्या संरचना',
      },
    },
    conceptualTheory: {
      heading: {
        en: 'Measures of Central Tendency, Standard Deviation & Graphical DI',
        hi: 'केंद्रीय प्रवृत्ति के माप, मानक विचलन एवं आरेखीय समंक व्याख्या',
      },
      deepExplanation: {
        en: 'Statistics is one of the highest scoring yet most frequently misunderstood topics in RRB CBT examinations. The three central measures are Mean (arithmetic average x̄ = Σx / N), Median (middle value of data arranged in ascending order; for even N, average of (N/2)th and (N/2 + 1)th terms), and Mode (most frequently occurring value). Karl Pearson’s empirical relationship connects them: Mode = 3 Median - 2 Mean. Dispersion measures include Range (Max - Min), Mean Deviation, Variance (σ² = Σ(x - x̄)² / N), and Standard Deviation (σ = √Variance). Note: Standard deviation is ALWAYS positive. Coefficient of Variation (CV = (σ / x̄) × 100%) measures consistency and stability (lower CV means more consistent). Data Interpretation (DI) tests percentage changes, ratios, weighted averages, and degrees-to-percentage conversions in pie charts (360° = 100%, 1% = 3.6°).',
        hi: 'सांख्यिकी रेलवे सीबीटी परीक्षाओं में सबसे अधिक अंक दिलाने वाले विषयों में से एक है। केंद्रीय प्रवृत्ति के तीन प्रमुख माप हैं: माध्य (अंकगणितीय औसत x̄ = Σx / N), माध्यिका (आरोही क्रम में व्यवस्थित आंकड़ों का मध्य मान; सम N हेतु N/2वें एवं (N/2 + 1)वें पदों का औसत), तथा बहुलक (सर्वाधिक आवृत्ति वाला मान)। कार्ल पियर्सन का आनुभविक संबंध: बहुलक = 3 माध्यिका - 2 माध्य। विक्षेपण मापों में परास (Range = अधिकतम - न्यूनतम), प्रसरण (Variance σ² = Σ(x - x̄)² / N), तथा मानक विचलन (Standard Deviation σ = √Variance) शामिल हैं। ध्यान दें: मानक विचलन हमेशा धनात्मक होता है। विचरण गुणांक (CV = (σ / x̄) × 100%) निरंतरता और स्थिरता का माप है (कम CV = अधिक स्थिर)। पाई चार्ट में: 360° = 100%, 1% = 3.6° होता है।',
      },
      keyMechanisms: [
        {
          en: 'Empirical Relationship: Mode = 3(Median) - 2(Mean). If Mean and Median are given, Mode can be calculated directly without raw data.',
          hi: 'आनुभविक सूत्र: बहुलक = 3(माध्यिका) - 2(माध्य)। यदि माध्य और माध्यिका ज्ञात हों, तो बहुलक सीधे निकाला जा सकता है।',
        },
        {
          en: 'Standard Deviation Non-Negativity: Variance is the mean of squared deviations. Standard deviation is the positive square root of variance: σ = +√Variance.',
          hi: 'मानक विचलन की धनात्मकता: प्रसरण विचलनों के वर्गों का माध्य है। मानक विचलन हमेशा प्रसरण का धनात्मक वर्गमूल होता है: σ = +√Variance।',
        },
        {
          en: 'Grouped Median Formula: Median = L + [((N/2) - CF) / f] × h, where L is lower limit of median class, CF is cumulative frequency of preceding class, f is frequency of median class, and h is class width.',
          hi: 'वर्गीकृत आंकड़ों की माध्यिका: Median = L + [((N/2) - CF) / f] × h, जहाँ L माध्यिका वर्ग की निम्न सीमा, CF पूर्व वर्ग की संचयी आवृत्ति, f माध्यिका वर्ग की आवृत्ति, तथा h वर्ग अंतराल है।',
        },
        {
          en: 'Pie Chart Conversion: Angle θ = (Percentage / 100) × 360°. Percentage = (Angle θ / 360°) × 100%. 10% = 36°, 25% = 90°, 50% = 180°.',
          hi: 'पाई चार्ट रूपांतरण: कोण θ = (प्रतिशत / 100) × 360°। प्रतिशत = (कोण θ / 360°) × 100%। 10% = 36°, 25% = 90°।',
        },
      ],
    },
    formulasAndLaws: [
      {
        label: 'Pearson Empirical Mode',
        expression: 'Mode = 3 × Median - 2 × Mean',
        explanation: { en: 'Connects central tendencies in moderately skewed distributions.', hi: 'माध्य, माध्यिका और बहुलक का संबंध सूत्र।' },
      },
      {
        label: 'Standard Deviation & Variance',
        expression: 'σ = √(Variance)  |  Variance = σ²',
        explanation: { en: 'If variance is 144, standard deviation is +12 (never -12).', hi: 'यदि प्रसरण 144 है, तो मानक विचलन +12 होगा (ऋणात्मक नहीं)।' },
      },
      {
        label: 'Coefficient of Variation (CV)',
        expression: 'CV = (σ / x̄) × 100%',
        explanation: { en: 'Measures relative dispersion. Data with smaller CV is more consistent and reliable.', hi: 'सापेक्ष विचरण का माप। कम CV वाला डेटा अधिक स्थिर व विश्वसनीय होता है।' },
      },
    ],
    workedExamples: [
      {
        id: 'stat-ex-1',
        level: 'CBT-1 Foundation',
        question: {
          en: 'If the mean and median of a data set are 15 and 14 respectively, find the mode of the distribution.',
          hi: 'यदि किसी डेटा समुच्चय का माध्य 15 और माध्यिका 14 है, तो उसका बहुलक ज्ञात कीजिए।',
        },
        standardSolution: {
          en: 'Step 1: Apply Karl Pearson empirical formula: Mode = 3 × Median - 2 × Mean.\nStep 2: Substitute given values: Mode = 3(14) - 2(15) = 42 - 30 = 12.\nAnswer: Mode = 12.',
          hi: 'चरण 1: सूत्र: बहुलक = 3 × माध्यिका - 2 × माध्य।\nचरण 2: मान रखने पर: बहुलक = 3(14) - 2(15) = 42 - 30 = 12।\nउत्तर: बहुलक = 12।',
        },
        topperShortcut: {
          en: '⚡ Direct Mental Calculation: (3 × 14) - (2 × 15) = 42 - 30 = 12 in 5 seconds!',
          hi: '⚡ सीधा कैलकुलेशन: 42 - 30 = 12 मात्र 5 सेकंड में!',
        },
      },
      {
        id: 'stat-ex-2',
        level: 'CBT-2 Advanced',
        question: {
          en: 'Find the variance and standard deviation of the numbers: 3, 5, 7, 9, 11.',
          hi: 'संख्याओं 3, 5, 7, 9, 11 का प्रसरण एवं मानक विचलन ज्ञात कीजिए।',
        },
        standardSolution: {
          en: 'Step 1: Calculate Mean x̄ = (3 + 5 + 7 + 9 + 11) / 5 = 35 / 5 = 7.\nStep 2: Find deviations from mean (x - x̄): (3-7)=-4, (5-7)=-2, (7-7)=0, (9-7)=2, (11-7)=4.\nStep 3: Square the deviations: (-4)²=16, (-2)²=4, 0²=0, 2²=4, 4²=16.\nStep 4: Variance σ² = Sum of squared deviations / N = (16 + 4 + 0 + 4 + 16) / 5 = 40 / 5 = 8.\nStep 5: Standard Deviation σ = √Variance = √8 = 2√2 ≈ 2.828.',
          hi: 'चरण 1: माध्य x̄ = 35 / 5 = 7।\nचरण 2: माध्य से विचलन: -4, -2, 0, 2, 4।\nचरण 3: विचलनों का वर्ग: 16, 4, 0, 4, 16।\nचरण 4: प्रसरण σ² = 40 / 5 = 8।\nचरण 5: मानक विचलन σ = √8 = 2√2 ≈ 2.828।',
        },
        topperShortcut: {
          en: '⚡ AP Variance Shortcut: For consecutive odd/even numbers with difference d, Variance = d²(n² - 1) / 12. Here d = 2, n = 5: Variance = 2²(25 - 1) / 12 = 4(24) / 12 = 8. Standard Deviation = √8 = 2√2!',
          hi: '⚡ AP प्रसरण शॉर्टकट: समानांतर श्रेणी हेतु प्रसरण = d²(n² - 1) / 12 = 4(24) / 12 = 8। मानक विचलन = √8 = 2√2!',
        },
      },
    ],
    commonTraps: [
      {
        en: 'Negative Standard Deviation Trap: If variance is 81, options often include +9, -9, ±9, and 81. Standard deviation is ALWAYS POSITIVE (+9). Marking ±9 results in -0.33 negative mark!',
        hi: 'ऋणात्मक मानक विचलन जाल: यदि प्रसरण 81 है, तो मानक विचलन केवल +9 होगा, ±9 नहीं। ±9 चुनने पर -0.33 अंक कटेंगे!',
      },
    ],
    topperSpeedHacks: [
      {
        en: 'Adding/Multiplying Constants to Data: (1) If constant k is added to all items: Mean and Median increase by k, but Standard Deviation and Variance REMAIN UNCHANGED. (2) If all items are multiplied by k: Mean, Median, and SD are multiplied by k, but Variance is multiplied by k².',
        hi: 'आंकड़ों में स्थिरांक जोड़ना/गुणा करना: (1) यदि सभी पदों में k जोड़ा जाए: माध्य व माध्यिका k बढ़ेंगे, परंतु मानक विचलन व प्रसरण अपरिवर्तित रहेंगे। (2) यदि k से गुणा किया जाए: माध्य, माध्यिका व SD में k से गुणा होगा, लेकिन प्रसरण में k² से गुणा होगा।',
      },
    ],
    quickRevisionBulletPoints: [
      { en: 'Median is the best measure of central tendency when extreme outliers exist.', hi: 'चरम मानों (outliers) की उपस्थिति में माध्यिका सबसे उपयुक्त केंद्रीय माप है।' },
      { en: 'Range = Maximum Value - Minimum Value.', hi: 'परास (Range) = अधिकतम मान - न्यूनतम मान।' },
      { en: 'Variance of constant series (5, 5, 5, 5) is 0.', hi: 'समान संख्याओं की श्रेणी (5, 5, 5) का प्रसरण शून्य होता है।' },
    ],
    relatedPracticeCategory: 'Quantitative Aptitude',
  },
};
