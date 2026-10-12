import type { BilingualText } from '../../types';

export interface SubTopicDetail {
  id: string;
  title: BilingualText;
  summary: BilingualText;
  bulletPoints: BilingualText[];
  formulas?: string[];
  examRelevance: BilingualText;
  keyTerms?: string[];
}

export interface MasterSubjectModule {
  id: string;
  title: BilingualText;
  subtitle: BilingualText;
  iconType: string;
  weightage: {
    cbt1: string;
    cbt2?: string;
    groupD?: string;
  };
  subTopics: SubTopicDetail[];
}

export interface ExamSectionData {
  sectionNumber: number;
  sectionId: string;
  title: BilingualText;
  subtitle: BilingualText;
  postProfiles: {
    designations: BilingualText[];
    testingEngine: BilingualText;
    evaluationCore: BilingualText;
  };
  modules: MasterSubjectModule[];
  asciiTree?: {
    title: string;
    content: string;
  };
}

export interface CrossTierMatrixRow {
  parameter: BilingualText;
  ntpcGraduate: BilingualText;
  ntpcUndergraduate: BilingualText;
  groupD: BilingualText;
  rrbJE: BilingualText;
}

export const CROSS_TIER_PROFILE_MATRIX: CrossTierMatrixRow[] = [
  {
    parameter: { en: 'Minimum Academic Bar', hi: 'न्यूनतम शैक्षणिक योग्यता' },
    ntpcGraduate: { en: 'University Graduation Degree (Any Stream)', hi: 'किसी भी संकाय में विश्वविद्यालय स्नातक डिग्री' },
    ntpcUndergraduate: { en: '10+2 / Higher Secondary (50% min)', hi: '10+2 / उच्चतर माध्यमिक (न्यूनतम 50% अंक)' },
    groupD: { en: '10th Standard or ITI (NCVT Apprenticeship)', hi: '10वीं कक्षा अथवा आईटीआई (NCVT अप्रेंटिस)' },
    rrbJE: { en: 'Engineering Diploma / Degree in relevant branch', hi: 'संबंधित इंजीनियरिंग शाखा में डिप्लोमा अथवा बी.टेक डिग्री' },
  },
  {
    parameter: { en: 'Written Stages Filter', hi: 'लिखित परीक्षा चरण' },
    ntpcGraduate: { en: 'CBT-1 (100 Qs / 90m) & CBT-2 (120 Qs / 90m)', hi: 'सीबीटी-1 (100 प्रश्न) एवं सीबीटी-2 (120 प्रश्न)' },
    ntpcUndergraduate: { en: 'CBT-1 (100 Qs / 90m) & CBT-2 (120 Qs / 90m)', hi: 'सीबीटी-1 (100 प्रश्न) एवं सीबीटी-2 (120 प्रश्न)' },
    groupD: { en: 'Single Comprehensive CBT (100 Qs / 90m)', hi: 'एकल व्यापक सीबीटी (100 प्रश्न / 90 मिनट)' },
    rrbJE: { en: 'CBT-1 (100 Qs Non-Tech) & CBT-2 (150 Qs Technical)', hi: 'सीबीटी-1 (100 प्रश्न गैर-तकनीकी) एवं सीबीटी-2 (150 प्रश्न)' },
  },
  {
    parameter: { en: 'Technical Core Loading', hi: 'तकनीकी कोर पाठ्यक्रम भार' },
    ntpcGraduate: { en: 'Absent (Pure General Non-Technical)', hi: 'अनुपस्थित (पूर्णतः सामान्य गैर-तकनीकी)' },
    ntpcUndergraduate: { en: 'Absent (Pure General Non-Technical)', hi: 'अनुपस्थित (पूर्णतः सामान्य गैर-तकनीकी)' },
    groupD: { en: 'Absent (Elementary Non-Technical)', hi: 'अनुपस्थित (प्रारंभिक गैर-तकनीकी)' },
    rrbJE: { en: '100 Marks Engineering Core in CBT-2', hi: 'सीबीटी-2 में 100 अंकों का कोर इंजीनियरिंग पाठ्यक्रम' },
  },
  {
    parameter: { en: 'Allied Science Loading', hi: 'संबद्ध विज्ञान भार' },
    ntpcGraduate: { en: 'Integrated into General Awareness (10-12 Qs)', hi: 'सामान्य जागरूकता में एकीकृत (10-12 प्रश्न)' },
    ntpcUndergraduate: { en: 'Basic General Science (8-10 Qs in GA)', hi: 'बुनियादी सामान्य विज्ञान (8-10 प्रश्न)' },
    groupD: { en: '25 Marks Pure Section (Class 10 NCERT)', hi: '25 अंकों का समर्पित खंड (10वीं एनसीईआरटी स्तर)' },
    rrbJE: { en: 'CBT-1: 30 Qs Science + CBT-2: Computers & Env (35 Qs)', hi: 'सीबीटी-1: 30 प्रश्न विज्ञान + सीबीटी-2: कंप्यूटर व पर्यावरण (35 प्रश्न)' },
  },
  {
    parameter: { en: 'Psychometric CBAT', hi: 'मनोवैज्ञानिक योग्यता (CBAT / साइको)' },
    ntpcGraduate: { en: 'Mandatory for Station Master & Traffic Assistant', hi: 'स्टेशन मास्टर एवं ट्रैफिक असिस्टेंट हेतु अनिवार्य (1:8 अनुपात)' },
    ntpcUndergraduate: { en: 'Absent', hi: 'अनुपस्थित' },
    groupD: { en: 'Absent', hi: 'अनुपस्थित' },
    rrbJE: { en: 'Absent', hi: 'अनुपस्थित' },
  },
  {
    parameter: { en: 'Typing Proficiency TST', hi: 'टाइपिंग दक्षता परीक्षा (TST)' },
    ntpcGraduate: { en: 'Senior Clerk & Jr. Accounts Assistant (30 WPM Eng / 25 WPM Hindi)', hi: 'सीनियर क्लर्क व जेएए हेतु (30 wpm अंग्रेजी / 25 wpm हिंदी)' },
    ntpcUndergraduate: { en: 'Junior Clerk & Accounts Clerk (30 WPM Eng / 25 WPM Hindi)', hi: 'जूनियर क्लर्क व अकाउंट्स क्लर्क हेतु (30 wpm / 25 wpm)' },
    groupD: { en: 'Absent', hi: 'अनुपस्थित' },
    rrbJE: { en: 'Absent', hi: 'अनुपस्थित' },
  },
  {
    parameter: { en: 'Physical Filter (PET)', hi: 'शारीरिक दक्षता परीक्षण (PET)' },
    ntpcGraduate: { en: 'Absent (Direct Medical Examination)', hi: 'अनुपस्थित (केवल चिकित्सा परीक्षण)' },
    ntpcUndergraduate: { en: 'Absent (Direct Medical Examination)', hi: 'अनुपस्थित (केवल चिकित्सा परीक्षण)' },
    groupD: { en: 'Mandatory: 35kg/20kg Sandbag carry + 1000m running', hi: 'अनिवार्य: 35/20 किग्रा वजन ढोना + 1000 मीटर दौड़' },
    rrbJE: { en: 'Absent (Direct Medical Examination)', hi: 'अनुपस्थित (केवल चिकित्सा परीक्षण)' },
  },
];

export const MASTER_SECTIONS_DATA: ExamSectionData[] = [
  // =========================================================================
  // SECTION 1: RRB NTPC GRADUATE LEVEL (7th CPC Levels 5 & 6)
  // =========================================================================
  {
    sectionNumber: 1,
    sectionId: 'ntpc-graduate',
    title: { en: 'SECTION 1: RRB NTPC GRADUATE LEVEL', hi: 'खंड 1: आरआरबी एनटीपीसी ग्रेजुएट लेवल' },
    subtitle: { en: '7th CPC Pay Levels 5 & 6 Executive & Supervisory Roles', hi: '7वें वेतन आयोग के पे-लेवल 5 एवं 6 के कार्यकारी व पर्यवेक्षी पद' },
    postProfiles: {
      designations: [
        { en: 'Station Master (Level 6 • ₹35,400 Basic)', hi: 'स्टेशन मास्टर (लेवल 6 • ₹35,400 मूल वेतन)' },
        { en: 'Goods Train Manager / Guard (Level 5 • ₹29,200 Basic)', hi: 'गुड्स ट्रेन मैनेजर / गार्ड (लेवल 5 • ₹29,200 मूल वेतन)' },
        { en: 'Chief Commercial cum Ticket Supervisor (Level 6)', hi: 'चीफ कमर्शियल कम टिकट सुपरवाइजर (लेवल 6)' },
        { en: 'Senior Clerk cum Typist (Level 5)', hi: 'सीनियर क्लर्क कम टाइपिस्ट (लेवल 5)' },
        { en: 'Junior Accounts Assistant cum Typist (Level 5)', hi: 'जूनियर अकाउंट्स असिस्टेंट कम टाइपिस्ट (लेवल 5)' },
      ],
      testingEngine: {
        en: 'CBT-1 (100 Qs / 90 Mins) → CBT-2 (120 Qs / 90 Mins) → CBAT (Psychometric for Station Master) or Typing Skill Test (30 WPM English / 25 WPM Hindi) → Document Verification & Medical (A-2 / B-2 / C-2)',
        hi: 'सीबीटी-1 (100 प्रश्न / 90 मिनट) → सीबीटी-2 (120 प्रश्न / 90 मिनट) → सीबीएटी (स्टेशन मास्टर हेतु साइको) अथवा टाइपिंग टेस्ट (30 wpm अंग्रेजी / 25 wpm हिंदी) → दस्तावेज़ सत्यापन एवं मेडिकल',
      },
      evaluationCore: {
        en: 'Deep focus on advanced multi-step arithmetic, high-tier analytical logic, and intensive data interpretations.',
        hi: 'उन्नत बहु-चरणीय अंकगणित, उच्च-स्तरीय विश्लेषणात्मक तर्कशक्ति और गहन डेटा व्याख्या (DI) पर विशेष बल।',
      },
    },
    modules: [
      {
        id: 'ntpc-grad-math',
        title: { en: 'Advanced Mathematics & Quantitative Aptitude', hi: 'उन्नत गणित एवं संख्यात्मक अभिरुचि' },
        subtitle: { en: 'Calculative speed, complex multi-concept arithmetic, algebra & statistics', hi: 'गणना गति, बहु-अवधारणात्मक अंकगणित, बीजगणित एवं सांख्यिकी' },
        iconType: 'math',
        weightage: { cbt1: '30 Qs (30 Marks)', cbt2: '35 Qs (35 Marks)' },
        subTopics: [
          {
            id: 'num-sys-simplification',
            title: { en: 'Number System & Simplification', hi: 'संख्या पद्धति एवं सरलीकरण' },
            summary: {
              en: 'Divisibility rules up to 3-digit numbers; Remainder theorems, Euler’s totient theorem, unit digit calculation; surds, indices, rationalization; BODMAS chains with complex nested brackets; recurring decimals to fractional conversions.',
              hi: '3-अंकीय संख्याओं तक विभाज्यता नियम; शेषफल प्रमेय, यूलर टोटिएंट प्रमेय, इकाई अंक गणना; करणी, घातांक, परिमेयकरण; जटिल कोष्ठकों वाली बॉडमास श्रृंखलाएं; आवर्त दशमलव का भिन्न में रूपांतरण।',
            },
            bulletPoints: [
              { en: 'Divisibility tests for composite divisors (e.g. 72 = 8 × 9, 88 = 8 × 11, 99 = 9 × 11).', hi: 'संयुक्त विभाजकों (जैसे 72, 88, 99) के लिए विभाज्यता नियम परीक्षण।' },
              { en: 'Euler’s Totient Function φ(n) for finding remainders in large powers: a^φ(n) ≡ 1 (mod n).', hi: 'बड़ी घातों में शेषफल ज्ञात करने के लिए यूलर का टोटिएंट फलन φ(n)।' },
              { en: 'Unit digit cyclicity rule for powers of 2, 3, 7, and 8 (cyclicity of 4).', hi: '2, 3, 7 और 8 की घातों के लिए इकाई अंक चक्रीयता नियम (चक्र 4)।' },
              { en: 'Conversion of pure and mixed recurring decimals (0.ā = a/9, 0.ab̄ = (ab - a)/90).', hi: 'शुद्ध एवं मिश्रित आवर्त दशमलव का भिन्न में रूपांतरण।' },
            ],
            formulas: [
              'Dividend = (Divisor × Quotient) + Remainder',
              'Euler Theorem: If gcd(a, n) = 1, then a^φ(n) ≡ 1 (mod n)',
              'Recurring Decimal: 0.ab̄ = (ab - a) / 90',
            ],
            examRelevance: { en: 'Appears in every shift (3-4 questions in CBT-1, 4-5 in CBT-2)', hi: 'प्रत्येक शिफ्ट में 3-4 प्रश्न सीबीटी-1 में तथा 4-5 प्रश्न सीबीटी-2 में' },
            keyTerms: ['Euler Totient', 'Divisibility 88/72', 'Unit Digit Cyclicity', 'Rationalization'],
          },
          {
            id: 'fractions-hcf-lcm',
            title: { en: 'Fractions & HCF-LCM Applications', hi: 'भिन्न एवं म.स.-ल.स. अनुप्रयोग' },
            summary: {
              en: 'Linear and fractional equations; successive LCM/HCF scenarios (bell ringing at intervals, circular track meeting loops); relationship between LCM, HCF, and product of two variable numbers or expressions.',
              hi: 'रैखिक एवं भिन्न समीकरण; क्रमिक ल.स./म.स. परिदृश्य (अंतरालों पर घंटियों का बजना, वृत्ताकार ट्रैक पर मिलन चक्र); दो चरों/व्यंजकों के ल.स., म.स. और गुणनफल का संबंध।',
            },
            bulletPoints: [
              { en: 'HCF of fractions = (HCF of numerators) / (LCM of denominators).', hi: 'भिन्नों का म.स. = (अंशों का म.स.) / (हरों का ल.स.)।' },
              { en: 'LCM of fractions = (LCM of numerators) / (HCF of denominators).', hi: 'भिन्नों का ल.स. = (अंशों का ल.स.) / (हरों का म.स.)।' },
              { en: 'First meeting on circular track: LCM of [Circumference / Relative Speed].', hi: 'वृत्ताकार ट्रैक पर पहला मिलन: [परिधि / सापेक्ष गति] का ल.स.।' },
            ],
            formulas: ['LCM(a, b) × HCF(a, b) = a × b', 'Circular Meeting Time = LCM(T₁, T₂, T₃)'],
            examRelevance: { en: 'Direct recurring questions on bell ringing intervals and circular tracks', hi: 'घंटियों के बजने और धावकों के मिलन समय पर सीधे प्रश्न' },
          },
          {
            id: 'commercial-arithmetic',
            title: { en: 'Commercial Arithmetic: %, P&L, Ratio, CI-SI', hi: 'व्यावसायिक अंकगणित: प्रतिशत, लाभ-हानि, अनुपात, ब्याज' },
            summary: {
              en: 'Successive percentage changes; population models; fault-weight dealer tricks, marked price vs. cost price vs. discount matrix, article-to-price transactions; compounded, duplicate, triplicate ratios, asset divisions, partnership matrices; CI half-yearly/quarterly, SI-CI 2/3/4 year differences, loan installment structures.',
              hi: 'क्रमिक प्रतिशत परिवर्तन; जनसंख्या वृद्धि मॉडल; बेईमान दुकानदार के त्रुटिपूर्ण वजन वाले प्रश्न, अंकित मूल्य बनाम क्रय मूल्य बनाम छूट आव्यूह; जटिल, द्विघाती, त्रिघाती अनुपात, साझेदारी; अर्धवार्षिक/तिमाही चक्रवृद्धि ब्याज, 2/3/4 वर्ष के अंतर और ऋण किस्त संरचनाएं।',
            },
            bulletPoints: [
              { en: 'Faulty weights: Gain % = [Error / (True Value - Error)] × 100.', hi: 'दोषपूर्ण वजन लाभ % = [त्रुटि / (सत्य मान - त्रुटि)] × 100।' },
              { en: 'Marked price relation: CP / MP = (100 - Discount%) / (100 + Profit%).', hi: 'क्रय मूल्य / अंकित मूल्य = (100 - छूट%) / (100 + लाभ%)।' },
              { en: 'Partnership profit ratio: P₁ : P₂ = (Investment₁ × Time₁) : (Investment₂ × Time₂).', hi: 'साझेदारी लाभ अनुपात = (पूंजी₁ × समय₁) : (पूंजी₂ × समय₂)।' },
              { en: 'Loan installments for CI: P = x/(1 + r/100) + x/(1 + r/100)² + ...', hi: 'चक्रवृद्धि ब्याज पर ऋण की समान वार्षिक किस्त सूत्र।' },
            ],
            formulas: [
              '2-Year CI - SI Difference: D₂ = P(R/100)²',
              '3-Year CI - SI Difference: D₃ = P(R/100)² × (3 + R/100)',
              '4-Year CI - SI Difference: D₄ = P(R/100)² × [6 + 4(R/100) + (R/100)²]',
              'MP / CP = (100 + Profit%) / (100 - Discount%)',
            ],
            examRelevance: { en: 'Heavy 8-10 questions in CBT-1 and 10-12 questions in CBT-2', hi: 'सीबीटी-1 में 8-10 और सीबीटी-2 में 10-12 प्रश्न' },
          },
          {
            id: 'kinematics-work-metrics',
            title: { en: 'Kinematics & Work Metrics (Time, Speed, Distance, Pipes)', hi: 'गतिकी एवं कार्य मेट्रिक्स (समय-कार्य, चाल, रेलगाड़ी, नल)' },
            summary: {
              en: 'Alternate days working patterns; pipe efficiency variations (leaks, cistern drainage capacity, variables processing); wages distribution equations based on efficiency units; relative velocity models; trains crossing platforms, moving bodies, and each other (same vs. opposite vectors); upstream, downstream, still water speeds of boats; average speed over unequal distance metrics.',
              hi: 'एकांतर दिनों में कार्य; नल और टंकी की दक्षता (रिसाव, निकासी क्षमता); दक्षता आधारित मजदूरी वितरण; सापेक्ष वेग मॉडल; प्लेटफार्म व गतिमान वस्तुओं को पार करती ट्रेनें (समान व विपरीत दिशा); नाव की धारा के अनुकूल/प्रतिकूल चाल; असमान दूरियों पर औसत चाल।',
            },
            bulletPoints: [
              { en: 'Trains crossing each other in opposite directions: Relative Speed = S₁ + S₂; Time = (L₁ + L₂) / (S₁ + S₂).', hi: 'विपरीत दिशा में ट्रेनें: सापेक्ष चाल = S₁ + S₂; समय = (L₁ + L₂) / (S₁ + S₂)।' },
              { en: 'Trains crossing in same direction: Relative Speed = |S₁ - S₂|; Time = (L₁ + L₂) / |S₁ - S₂|.', hi: 'समान दिशा में ट्रेनें: सापेक्ष चाल = |S₁ - S₂|; समय = (L₁ + L₂) / |S₁ - S₂|।' },
              { en: 'Boat upstream = u - v; Boat downstream = u + v; Still water speed u = (Down + Up) / 2; Stream speed v = (Down - Up) / 2.', hi: 'नाव शांत जल में u = (Down + Up) / 2; धारा की चाल v = (Down - Up) / 2।' },
              { en: 'Average speed over 2 equal distances = 2xy / (x + y); over 3 equal distances = 3xyz / (xy + yz + zx).', hi: '2 समान दूरियों पर औसत चाल = 2xy / (x + y); 3 समान दूरियों पर = 3xyz / (xy + yz + zx)।' },
            ],
            formulas: [
              'Train Crossing Platform: Time = (Length_train + Length_platform) / Speed_train',
              'Speed Conversion: 1 km/h = 5/18 m/s  |  1 m/s = 18/5 km/h',
              'Wage Share = (Individual Efficiency / Total Efficiency) × Total Wage',
            ],
            examRelevance: { en: 'Core railway topic: 4-5 high-yield questions in every shift', hi: 'रेलवे का मुख्य विषय: प्रत्येक शिफ्ट में 4-5 प्रश्न' },
          },
          {
            id: 'algebra-functions-progressions',
            title: { en: 'Elementary Algebra, Functions & Progressions (AP & GP)', hi: 'प्रारंभिक बीजगणित, फलन एवं श्रेणियां (समान्तर व गुणोत्तर)' },
            summary: {
              en: 'Linear systems with 2 and 3 variables; roots of quadratic equations, discriminant analysis (Δ = b² - 4ac); factorization of polynomials; maximum and minimum values of algebraic functions; arithmetic and geometric progressions (AP & GP - sum and nth term equations).',
              hi: '2 और 3 चरों वाले रैखिक निकाय; द्विघात समीकरणों के मूल, विविक्तकर विश्लेषण (Δ = b² - 4ac); बहुपदों का गुणनखंडन; बीजगणितीय फलनों के उच्चिष्ठ व निम्निष्ठ मान; समान्तर और गुणोत्तर श्रेणियां (AP & GP का nवां पद व योग)।',
            },
            bulletPoints: [
              { en: 'Quadratic Discriminant: Δ > 0 (real & distinct), Δ = 0 (real & equal), Δ < 0 (imaginary/complex roots).', hi: 'विविक्तकर: Δ > 0 (वास्तविक व भिन्न), Δ = 0 (वास्तविक व बराबर), Δ < 0 (काल्पनिक मूल)।' },
              { en: 'Sum of roots α + β = -b/a; Product of roots αβ = c/a.', hi: 'मूलों का योग α + β = -b/a; मूलों का गुणनफल αβ = c/a।' },
              { en: 'AP nth term: T_n = a + (n - 1)d; Sum: S_n = (n/2)[2a + (n - 1)d].', hi: 'समान्तर श्रेणी का nवां पद T_n = a + (n - 1)d; योग S_n = (n/2)[2a + (n - 1)d]।' },
              { en: 'GP nth term: T_n = a·r^(n - 1); Sum: S_n = a(r^n - 1)/(r - 1).', hi: 'गुणोत्तर श्रेणी का nवां पद T_n = a·r^(n - 1); योग S_n = a(r^n - 1)/(r - 1)।' },
            ],
            formulas: [
              'Quadratic Formula: x = [-b ± √(b² - 4ac)] / (2a)',
              'AP Sum: S_n = (n/2)(First_term + Last_term)',
              'GP Infinite Sum (for |r| < 1): S_∞ = a / (1 - r)',
            ],
            examRelevance: { en: '2-3 questions in CBT-1, 3-4 in CBT-2', hi: 'सीबीटी-1 में 2-3 और सीबीटी-2 में 3-4 प्रश्न' },
          },
          {
            id: 'geometry-coordinate-mensuration',
            title: { en: 'Geometry, Coordinate Systems & 2D/3D Mensuration', hi: 'ज्यामिति, निर्देशांक ज्यामिति एवं 2D/3D क्षेत्रमिति' },
            summary: {
              en: 'Parallel lines, interior/exterior angles; triangle centers (Incenter, Orthocenter, Circumcenter, Centroid) and congruence/similarity criteria; circle theorems (tangents, chord segments intersection properties); Cartesian coordinate planes, line slopes, distance between two points, section formula; areas of irregular polygons, sectors of circles, pathways inside/outside rectangular fields; volumes and total surface areas of prisms, pyramids, right circular cones, cylinders, spheres, hemispheres, and frustums of a cone.',
              hi: 'समांतर रेखाएं, आंतरिक/बाह्य कोण; त्रिभुज के केंद्र (अंतःकेंद्र, लंबकेंद्र, परिकेंद्र, केंद्रक); वृत्त प्रमेय (स्पर्शरेखाएं, जीवा प्रतिच्छेदन गुण); कार्तीय तल, रेखा की प्रवणता (ढाल), दो बिंदुओं के बीच की दूरी, विभाजन सूत्र; अनियमित बहुभुज, त्रिज्यखंड, रास्तों का क्षेत्रफल; प्रिज्म, पिरामिड, शंकु, बेलन, गोला, अर्धगोला एवं शंकु के छिन्नक (Frustum) का आयतन व पृष्ठीय क्षेत्रफल।',
            },
            bulletPoints: [
              { en: 'Distance between (x₁, y₁) and (x₂, y₂) = √[(x₂ - x₁)² + (y₂ - y₁)²].', hi: 'दो बिंदुओं के बीच दूरी = √[(x₂ - x₁)² + (y₂ - y₁)²]।' },
              { en: 'Section formula for internal division in ratio m:n = ((mx₂ + nx₁)/(m+n), (my₂ + ny₁)/(m+n)).', hi: 'm:n अनुपात में आंतरिक विभाजन का निर्देशांक सूत्र।' },
              { en: 'Intercept of chords: PA × PB = PC × PD (for intersecting chords AB and CD).', hi: 'जीवा प्रतिच्छेदन प्रमेय: PA × PB = PC × PD।' },
              { en: 'Tangent-Secant Theorem: PT² = PA × PB.', hi: 'स्पर्शरेखा-छेदक रेखा प्रमेय: PT² = PA × PB।' },
              { en: 'Frustum of Cone: Volume = (1/3)πh(R² + r² + Rr); Slant height l = √[h² + (R - r)²].', hi: 'शंकु का छिन्नक: आयतन = (1/3)πh(R² + r² + Rr); तिर्यक ऊंचाई l = √[h² + (R - r)²]।' },
            ],
            formulas: [
              'Slope of Line: m = (y₂ - y₁) / (x₂ - x₁) = -A / B',
              'Cone Frustum Volume: V = (1/3)πh(R² + r² + Rr)',
              'Cone Frustum Curved Surface: CSA = π(R + r)l',
              'Sphere TSA = 4πr²  |  Hemisphere TSA = 3πr²',
            ],
            examRelevance: { en: '5-6 questions in CBT-1, 6-7 in CBT-2', hi: 'सीबीटी-1 में 5-6 और सीबीटी-2 में 6-7 प्रश्न' },
          },
          {
            id: 'trigonometry-height-distances',
            title: { en: 'Trigonometry & Heights and Distances', hi: 'त्रिकोणमिति एवं ऊंचाई और दूरी' },
            summary: {
              en: 'Complementary angle identities; height and distance problems involving two objects with multiple angles of elevation/depression from a single viewpoint.',
              hi: 'पूरक कोण सर्वसमिकाएं; एकल बिंदु से एक से अधिक उन्नयन/अवनमन कोणों वाले दो वस्तुओं के ऊंचाई और दूरी संबंधी प्रश्न।',
            },
            bulletPoints: [
              { en: 'Complementary pairs: sin θ = cos(90° - θ), tan θ = cot(90° - θ), sec θ = cosec(90° - θ).', hi: 'पूरक कोण: sin θ = cos(90° - θ), tan θ = cot(90° - θ)।' },
              { en: 'Pythagorean identities: sin²θ + cos²θ = 1, 1 + tan²θ = sec²θ, 1 + cot²θ = cosec²θ.', hi: 'मूलभूत सर्वसमिकाएं: sin²θ + cos²θ = 1, sec²θ - tan²θ = 1।' },
              { en: 'Standard 30°-60°-90° ratio (1 : √3 : 2) and 45°-45°-90° ratio (1 : 1 : √2).', hi: 'मानक त्रिभुज अनुपात: 30°-60°-90° (1 : √3 : 2) एवं 45°-45°-90° (1 : 1 : √2)।' },
            ],
            formulas: [
              'Height from two points on same side: h = d / (cot θ₁ - cot θ₂)',
              'Height from two points on opposite sides: h = d / (cot θ₁ + cot θ₂)',
            ],
            examRelevance: { en: '2-3 questions in CBT-1, 3 questions in CBT-2', hi: 'सीबीटी-1 में 2-3 और सीबीटी-2 में 3 प्रश्न' },
          },
          {
            id: 'statistics-data-interpretation',
            title: { en: 'Elementary Statistics & Data Interpretation (DI)', hi: 'प्रारंभिक सांख्यिकी एवं आंकड़ा व्याख्या (DI)' },
            summary: {
              en: 'Direct, assumed mean, and step-deviation methods for grouped data; Median of grouped data; Modal classification; Standard deviation, variance, coefficient of variation; Complex multi-variable tables, pie charts with degree-to-percentage transformations, stacked bar charts, and line graphs depicting comparative corporate growths.',
              hi: 'वर्गीकृत आंकड़ों के लिए प्रत्यक्ष, कल्पित माध्य एवं पद-विचलन विधियां; वर्गीकृत आंकड़ों की माध्यिका; बहुलक वर्गीकरण; मानक विचलन, प्रसरण (Variance), विचरण गुणांक (CV); बहु-चरणीय सारणियां, डिग्री से प्रतिशत में पाई चार्ट, स्टैक्ड बार चार्ट एवं लाइन ग्राफ।',
            },
            bulletPoints: [
              { en: 'Grouped Median formula: L + [((N/2) - CF) / f] × h.', hi: 'वर्गीकृत आंकड़ों की माध्यिका: L + [((N/2) - CF) / f] × h।' },
              { en: 'Mode = 3(Median) - 2(Mean).', hi: 'बहुलक = 3(माध्यिका) - 2(माध्य)।' },
              { en: 'Variance = (Standard Deviation)².', hi: 'प्रसरण = (मानक विचलन)²।' },
              { en: 'Coefficient of Variation (CV) = (Standard Deviation / Mean) × 100.', hi: 'विचरण गुणांक (CV) = (मानक विचलन / माध्य) × 100।' },
              { en: 'Pie chart conversion: 360° = 100%, 1% = 3.6°, 1° = (5/18)%.', hi: 'पाई चार्ट रूपांतरण: 360° = 100%, 1% = 3.6°, 1° = (5/18)%।' },
            ],
            formulas: [
              'Grouped Median = L + [((N/2) - CF) / f] × h',
              'Grouped Mode = L + [(f₁ - f₀) / (2f₁ - f₀ - f₂)] × h',
              'Variance σ² = Σ(x - μ)² / N',
              'Coefficient of Variation (CV) = (σ / x̄) × 100',
            ],
            examRelevance: { en: '4-5 questions in CBT-1, 6-8 questions in CBT-2 (Heavy DI sets)', hi: 'सीबीटी-1 में 4-5 और सीबीटी-2 में 6-8 प्रश्न (गहन DI सेट)' },
          },
        ],
      },
      {
        id: 'ntpc-grad-reasoning',
        title: { en: 'General Intelligence & Advanced Reasoning', hi: 'सामान्य बुद्धिमत्ता एवं उच्च-स्तरीय तर्कशक्ति' },
        subtitle: { en: 'Puzzles, seating grids, syllogisms & critical analytical logic', hi: 'पहेलियां, बैठने की व्यवस्था, न्याय निगमन एवं विश्लेषणात्मक तर्क' },
        iconType: 'brain',
        weightage: { cbt1: '30 Qs (30 Marks)', cbt2: '35 Qs (35 Marks)' },
        subTopics: [
          {
            id: 'series-analogies-coding',
            title: { en: 'Advanced Series, Analogies & Matrix Coding', hi: 'उन्नत श्रृंखला, सादृश्यता एवं आव्यूह कोडिंग' },
            summary: {
              en: 'Complex mixed alphanumeric progressions; double-step number patterns; abstract shape analogies; semantic and symbolic grouping tests; matrix-based decoding; positional value shifting (forward/reverse alphabetical pairing, e.g., A=26, Z=1); conditional sentence coding ("sky is blue" coded as "da ma la").',
              hi: 'मिश्रित अक्षरांकीय श्रृंखला; दोहरे-चरण वाले संख्या पैटर्न; अमूर्त आकृति सादृश्यता; आव्यूह कोडिंग; विपरीत अक्षरांकीय मान (A=26, Z=1, B=25, Y=2); सशर्त वाक्य कोडिंग ("sky is blue" -> "da ma la")।',
            },
            bulletPoints: [
              { en: 'Reverse alphabet pairing rule: Sum of forward and reverse positions is always 27 (A+Z = 1+26 = 27).', hi: 'विपरीत वर्णमाला युग्म नियम: प्रारंभिक व विपरीत स्थानों का योग सदैव 27 होता है।' },
              { en: 'Double-step difference series where 2nd tier differences form arithmetic or square progressions.', hi: 'द्वितीय-स्तरीय अंतर श्रृंखला जहां दूसरा अंतर वर्ग या घन बनता है।' },
            ],
            examRelevance: { en: '5-6 questions in both CBT-1 and CBT-2', hi: 'दोनों चरणों में 5-6 प्रश्न' },
          },
          {
            id: 'syllogisms-structural-logic',
            title: { en: 'Structural Logic & Aristotelian Syllogisms', hi: 'संरचनात्मक तर्क एवं न्याय निगमन' },
            summary: {
              en: 'Classical Aristotelian syllogisms with 3 or 4 statements (including "Only", "A few", "At least", "Possibility" variations); structural fallacies.',
              hi: '3 या 4 कथनों वाले शास्त्रीय न्याय निगमन (जिनमें "केवल", "कुछ ही", "कम से कम", "संभावना" रूप शामिल हैं); तार्किक दोष।',
            },
            bulletPoints: [
              { en: '"Only A are B" translates strictly to "All B are A", and B can never intersect any other element.', hi: '"केवल A, B हैं" का अर्थ "सभी B, A हैं" होता है और B किसी अन्य से नहीं जुड़ सकता।' },
              { en: '"A few A are B" is equivalent to standard "Some A are B".', hi: '"कुछ ही A, B हैं" सामान्य "कुछ A, B हैं" के समान है।' },
              { en: 'Possibility conclusions: If there is no definite negative relation, a possibility is valid.', hi: 'संभावना निष्कर्ष: यदि कोई निश्चित नकारात्मक संबंध न हो तो संभावना मान्य होती है।' },
            ],
            examRelevance: { en: '3-4 questions in every CBT shift', hi: 'प्रत्येक शिफ्ट में 3-4 प्रश्न' },
          },
          {
            id: 'puzzles-seating-matrix',
            title: { en: 'Puzzles & Seating Configurations', hi: 'पहेलियां एवं बैठक व्यवस्था' },
            summary: {
              en: 'Linear seating (North, South, mixed orientations); circular arrangements facing inward/outward; floor-based puzzles; matrix scheduling grid problems (7 persons, 7 days, 7 unique attributes).',
              hi: 'रैखिक बैठक (उत्तर, दक्षिण, मिश्रित दिशा); वृत्ताकार बैठक (केंद्रोन्मुख व बाहर की ओर मुख); मंजिल आधारित पहेलियां; 7 व्यक्ति, 7 दिन और 7 विशेषताओं वाली ग्रिड शेड्यूलिंग पहेलियां।',
            },
            bulletPoints: [
              { en: 'Dual variable circular seating: 8 persons with individual hobbies/professions.', hi: 'द्वि-चरणीय वृत्ताकार बैठक: 8 व्यक्ति और उनके अलग-अलग व्यवसाय/पसंद।' },
              { en: 'Floor puzzles with lift and vacant floor conditions.', hi: 'मंजिल पहेली जिसमें खाली मंजिल या लिफ्ट की शर्तें हों।' },
            ],
            examRelevance: { en: 'Heavy 6-8 questions in CBT-2 (Decisive topper section)', hi: 'सीबीटी-2 में 6-8 प्रश्न (टॉपर निर्णायक खंड)' },
          },
          {
            id: 'venn-direction-blood',
            title: { en: 'Venn Diagrams, Coded Direction & Blood Relations', hi: 'वेन आरेख, कोडेड दिशा ज्ञान एवं रक्त संबंध' },
            summary: {
              en: '3-circle and 4-circle intersection analytics calculating specific isolated regions; coded direction sense (e.g., A#B means A is north of B); multi-generational coded family trees.',
              hi: '3-वृत्त व 4-वृत्त प्रतिच्छेदन विश्लेषण; कोडेड दिशा ज्ञान (A#B का अर्थ A, B के उत्तर में है); बहु-पीढ़ी वाले कोडेड परिवार वृक्ष।',
            },
            bulletPoints: [
              { en: 'Set formula: n(A ∪ B ∪ C) = n(A) + n(B) + n(C) - n(A∩B) - n(B∩C) - n(C∩A) + n(A∩B∩C).', hi: '3 समुच्चयों का वेन आरेख सूत्र।' },
              { en: 'Coded relations: P + Q (Father), P - Q (Mother), P × Q (Brother), P ÷ Q (Sister).', hi: 'प्रतीकात्मक रक्त संबंध समीकरण हल करना।' },
            ],
            examRelevance: { en: '4-5 questions in CBT-1 and CBT-2', hi: 'दोनों चरणों में 4-5 प्रश्न' },
          },
          {
            id: 'critical-reasoning-data-suff',
            title: { en: 'Critical Reasoning & Data Sufficiency', hi: 'विश्लेषणात्मक तर्क एवं डेटा पर्याप्तता' },
            summary: {
              en: 'Statement and Assumptions; Statement and Arguments (evaluating weak vs. strong structural claims); Cause and Effect identification; Statement and Course of Action (pragmatic, non-extreme administrative steps); Determining if 1, 2, or 3 statements independently or combined are sufficient to evaluate a logic puzzle.',
              hi: 'कथन एवं पूर्वधारणाएं; कथन एवं तर्क (ठोस बनाम कमजोर तर्क); कारण एवं प्रभाव; कथन एवं कार्यवाही (व्यावहारिक, गैर-चरम प्रशासनिक कदम); 1, 2 या 3 कथनों की स्वतंत्रता अथवा संयुक्त पर्याप्तता जांच।',
            },
            bulletPoints: [
              { en: 'Course of Action must resolve the root problem without creating an extreme secondary crisis.', hi: 'प्रशासनिक कार्यवाही समस्या का समाधान करे बिना कोई नया संकट खड़ा किए।' },
              { en: 'Strong arguments must be factual, directly relevant, and backed by constitutional/social logic.', hi: 'ठोस तर्क तथ्यात्मक, सीधे प्रासंगिक और संवैधानिक/सामाजिक तर्क पर आधारित होने चाहिए।' },
            ],
            examRelevance: { en: '5-6 questions in CBT-2', hi: 'सीबीटी-2 में 5-6 प्रश्न' },
          },
        ],
      },
      {
        id: 'ntpc-grad-ga',
        title: { en: 'General Awareness (Graduate Matrix)', hi: 'सामान्य जागरूकता (ग्रेजुएट स्तर)' },
        subtitle: { en: 'Current affairs, history, polity, geography, science & economy', hi: 'समसामयिकी, इतिहास, राजव्यवस्था, भूगोल, विज्ञान एवं अर्थव्यवस्था' },
        iconType: 'globe',
        weightage: { cbt1: '40 Qs (40 Marks)', cbt2: '50 Qs (50 Marks)' },
        subTopics: [
          {
            id: 'current-affairs-sports-summits',
            title: { en: 'Contemporary Current Affairs & Global Milestones', hi: 'समकालीन समसामयिकी एवं वैश्विक शिखर सम्मेलन' },
            summary: {
              en: 'National and global milestones; bilateral summits; G20, BRICS, and UN resolutions; Olympic, Commonwealth, and domestic sports analytics; defense tech acquisitions; new regulatory indices (NITI Aayog, IMF world economic outlooks).',
              hi: 'राष्ट्रीय व वैश्विक मील के पत्थर; द्विपक्षीय शिखर सम्मेलन; G20, ब्रिक्स, यूएन प्रस्ताव; ओलंपिक, राष्ट्रमंडल, खेल पदक; रक्षा प्रौद्योगिकी (INS अरिघात, अग्नि मिसाइलें); नीति आयोग व आईएमएफ सूचकांक।',
            },
            bulletPoints: [
              { en: 'Coverage of past 12 months with deep focus on India-hosted summits and multilateral summits.', hi: 'विगत 12 माह के राष्ट्रीय व अंतर्राष्ट्रीय घटनाक्रम।' },
              { en: 'National sports awards (Khel Ratna, Arjuna, Dronacharya) and record holders.', hi: 'राष्ट्रीय खेल पुरस्कार एवं रिकॉर्ड धारक।' },
            ],
            examRelevance: { en: '10-12 questions in CBT-1, 14-16 questions in CBT-2', hi: 'सीबीटी-1 में 10-12 और सीबीटी-2 में 14-16 प्रश्न' },
          },
          {
            id: 'history-culture-freedom',
            title: { en: 'Indian Art, Culture & Liberation Struggle (1885-1947)', hi: 'भारतीय कला, संस्कृति एवं स्वतंत्रता संग्राम (1885-1947)' },
            summary: {
              en: 'Architectural evolution across ancient dynastic phases (Nagara, Dravida, Vesara styles); classical literature texts, authors, and regional dialects; structural features of classical and folk performing arts; socio-economic impacts of colonial land revenue transformations (Zamindari, Ryotwari, Mahalwari); structural dynamics of the Indian National Movement from 1885 to 1947, profiling moderate, extremist, Gandhian, and revolutionary movements.',
              hi: 'प्राचीन राजवंशों की स्थापत्य कला (नागर, द्रविड़, वेसर शैली); शास्त्रीय साहित्य व भाषाएं; शास्त्रीय नृत्य व लोक कलाएं; औपनिवेशिक भू-राजस्व प्रणालियां (जमींदारी, रैयतवाड़ी, महालवाड़ी); 1885 से 1947 का स्वतंत्रता आंदोलन (उदारवादी, उग्रवादी, गांधीवादी एवं क्रांतिकारी धाराएं)।',
            },
            bulletPoints: [
              { en: 'Temple architecture: Sun Temple Konark, Brihadisvara, Khajuraho, Elephanta caves.', hi: 'मंदिर वास्तुकला: कोणार्क, बृहदेश्वर, खजुराहो, एलोरा-एलिफेंटा गुफाएं।' },
              { en: 'Congress sessions: 1907 Surat split, 1916 Lucknow pact, 1929 Lahore Purna Swaraj, 1931 Karachi resolution.', hi: 'कांग्रेस के ऐतिहासिक अधिवेशन: 1907 सूरत, 1916 लखनऊ, 1929 लाहौर, 1931 कराची।' },
            ],
            examRelevance: { en: '6-8 questions in both CBT stages', hi: 'दोनों चरणों में 6-8 प्रश्न' },
          },
          {
            id: 'geography-environment-chokepoints',
            title: { en: 'Indian & World Geography & Geomorphology', hi: 'भारत एवं विश्व का भूगोल एवं भू-आकृतिक विज्ञान' },
            summary: {
              en: 'Geomorphological features, tectonic zones; drainage networks, multi-purpose river valley projects; industrial mapping, global shipping corridors, choke points (Malacca, Hormuz, Bab-el-Mandeb, Suez), and climate distribution.',
              hi: 'भू-आकृतिक विशेषताएं, टेक्टोनिक प्लेटें व भूकंपीय क्षेत्र; अपवाह तंत्र (सिंधु, गंगा, ब्रह्मपुत्र, प्रायद्वीपीय नदियां); बहुउद्देशीय नदी घाटी परियोजनाएं; औद्योगिक गलियारे; वैश्विक समुद्री व्यापार चोकपॉइंट्स (मलक्का, होर्मुज, बाब-अल-मंदेब, स्वेज नहर) एवं जलवायु वर्गीकरण।',
            },
            bulletPoints: [
              { en: 'River origin, tributaries, and major dams (Tehri, Bhakra Nangal, Hirakud, Sardar Sarovar).', hi: 'नदियों का उद्गम, सहायक नदियां व प्रमुख बांध (टिहरी, भाखड़ा, हीराकुंड, सरदार सरोवर)।' },
              { en: 'Mountain passes of Himalayas: Zoji La, Shipki La, Nathu La, Rohtang, Lipulekh.', hi: 'हिमालय के प्रमुख दर्रे: ज़ोजिला, शिपकी ला, नाथू ला, रोहतांग, लिपुलेख।' },
            ],
            examRelevance: { en: '5-6 questions in both CBT stages', hi: 'दोनों चरणों में 5-6 प्रश्न' },
          },
          {
            id: 'polity-constitution-mechanics',
            title: { en: 'Polity and Constitutional Mechanics', hi: 'भारतीय राजव्यवस्था एवं संवैधानिक तंत्र' },
            summary: {
              en: 'Framing of the Constitution; Fundamental Rights (Articles 12-35), Directive Principles (Articles 36-51), Fundamental Duties (Article 51A); Union/State Executives (President, Governor, PM, CM), Parliament, Judiciary (Supreme Court, High Courts); local self-government structures (73rd & 74th Amendments); statutory and constitutional commissions (CAG, Election Commission, UPSC, Finance Commission).',
              hi: 'संविधान सभा एवं निर्माण; मौलिक अधिकार (अनुच्छेद 12-35), नीति निर्देशक तत्व (36-51), मौलिक कर्तव्य (51A); राष्ट्रपति, प्रधानमंत्री, संसद (लोकसभा-राज्यसभा); न्यायपालिका (सर्वोच्च व उच्च न्यायालय); 73वां व 74वां संविधान संशोधन (पंचायती राज व नगर पालिका); संवैधानिक आयोग (कैग, चुनाव आयोग, वित्त आयोग)।',
            },
            bulletPoints: [
              { en: 'Key Articles: Art 21 (Right to Life), Art 32 (Constitutional Remedies & Writs), Art 280 (Finance Commission), Art 324 (Election Commission), Art 352/356/360 (Emergency).', hi: 'महत्वपूर्ण अनुच्छेद: 21, 32 (रिट्स), 280 (वित्त आयोग), 324 (चुनाव आयोग), 352/356/360 (आपातकाल)।' },
              { en: 'Constitutional amendment process under Article 368.', hi: 'अनुच्छेद 368 के अंतर्गत संविधान संशोधन प्रक्रिया।' },
            ],
            examRelevance: { en: '6-7 questions in CBT-1 and CBT-2', hi: 'दोनों चरणों में 6-7 प्रश्न' },
          },
          {
            id: 'science-space-nuclear-it',
            title: { en: 'Scientific Developments: Space, Nuclear, AI & IT', hi: 'वैज्ञानिक विकास: अंतरिक्ष, परमाणु, एआई एवं आईटी' },
            summary: {
              en: 'ISRO missions (Chandrayaan-3/4, Aditya-L1, Gaganyaan, Shukrayaan), satellite launch vehicles (PSLV, GSLV, LVM3), deep-space explorations; Department of Atomic Energy installations, nuclear power reactor generations (Pressurised Heavy Water Reactors, Fast Breeder Reactors at Kalpakkam); computing advancements, AI models, supercomputers (PARAM series - PARAM Siddhi, PARAM Shivay).',
              hi: 'इसरो मिशन (चंद्रयान-3/4, आदित्य-L1, गगनयान); प्रक्षेपण यान (PSLV, GSLV, LVM3); परमाणु ऊर्जा विभाग, 3-चरणीय परमाणु कार्यक्रम (PHWR, प्रोटोटाइप फास्ट ब्रीडर रिएक्टर कलपक्कम); कृत्रिम बुद्धिमत्ता (AI) मॉडल, सुपरकंप्यूटर (परम सिद्धि, परम शिवाय)।',
            },
            bulletPoints: [
              { en: 'Launch vehicles: PSLV (4 stages solid/liquid/solid/liquid), LVM3 (Fat Boy - cryogenic C25 upper stage).', hi: 'प्रक्षेपण यान: पीएसएलवी (4 चरण), एलवीएम-3 (क्रायोजेनिक C25 चरण)।' },
              { en: 'India’s 3-Stage Nuclear Programme: Stage 1 (PHWR Natural Uranium), Stage 2 (FBR Plutonium-239), Stage 3 (Thorium-232 based AHWR).', hi: 'भारत का 3-चरणीय परमाणु कार्यक्रम: यूरेनियम, प्लूटोनियम व थोरियम-आधारित।' },
            ],
            examRelevance: { en: '4-5 questions in CBT-1, 6 questions in CBT-2', hi: 'सीबीटी-1 में 4-5 और सीबीटी-2 में 6 प्रश्न' },
          },
          {
            id: 'economy-development-paradigms',
            title: { en: 'Indian Economy & Macroeconomic Frameworks', hi: 'भारतीय अर्थव्यवस्था एवं समष्टिगत वित्तीय ढांचा' },
            summary: {
              en: 'Macroeconomic metrics (GDP, GVA, Inflation indicators - WPI/CPI); monetary policy parameters set by RBI (Repo rate, Reverse repo, CRR, SLR); fiscal frameworks, Union Budget, GST structural slabs (0%, 5%, 12%, 18%, 28%); priority sector lending parameters; demographic dynamics and census indicators.',
              hi: 'समष्टिगत आर्थिक संकेतक (GDP, GVA, मुद्रास्फीति WPI/CPI); आरबीआई मौद्रिक नीति (रेपो रेट, रिवर्स रेपो, CRR, SLR); केंद्रीय बजट, राजकोषीय घाटा, जीएसटी स्लैब (0%, 5%, 12%, 18%, 28%); प्राथमिकता प्राप्त क्षेत्र ऋण (PSL); जनसांख्यिकी व जनगणना।',
            },
            bulletPoints: [
              { en: 'Monetary Policy Committee (MPC): 6 members, bi-monthly policy review, inflation target 4% ± 2%.', hi: 'मौद्रिक नीति समिति (MPC): 6 सदस्य, द्विमासिक समीक्षा, मुद्रास्फीति लक्ष्य 4% ± 2%।' },
              { en: 'GST 101st Constitutional Amendment Act 2016, dual GST model (CGST, SGST, IGST).', hi: 'जीएसटी: 101वां संविधान संशोधन 2016, दोहरा जीएसटी मॉडल।' },
            ],
            examRelevance: { en: '4-5 questions in CBT-1, 5-6 questions in CBT-2', hi: 'सीबीटी-1 में 4-5 और सीबीटी-2 में 5-6 प्रश्न' },
          },
        ],
      },
      {
        id: 'ntpc-grad-railway-ops',
        title: { en: 'Railway-Specific Operations & General Knowledge', hi: 'भारतीय रेलवे परिचालन एवं सामान्य ज्ञान' },
        subtitle: { en: 'Track gauges, zones, Kavach, DFCs & production units', hi: 'ट्रैक गेज मानक, ज़ोन, कवच, डीएफसी एवं उत्पादन इकाइयां' },
        iconType: 'train',
        weightage: { cbt1: '5-6 Qs (Integrated)', cbt2: '8-10 Qs (High Priority)' },
        subTopics: [
          {
            id: 'evolution-zones-hqs',
            title: { en: 'Evolution, 17+ Zones & Exact Headquarters', hi: 'इतिहास, 17+ परिचालन ज़ोन एवं मुख्यालय' },
            summary: {
              en: 'Historical milestones from the first commercial run in 1853 (Bori Bunder to Thane, 34 km, 3 locomotives Sultan, Sindh, Sahib); nationalization timelines in 1951; Structural distribution of the 17 Operational Zones (plus Kolkata Metro and upcoming SCoR Visakhapatnam) along with their exact headquarter hubs.',
              hi: '1853 की पहली ट्रेन (बोरीबंदर से ठाणे, 34 किमी, 3 इंजन सुल्तान, सिंध, साहिब) से लेकर 1951 राष्ट्रीयकरण; 17 परिचालन ज़ोन + कोलकाता मेट्रो + विशाखापत्तनम (SCoR) के सटीक मुख्यालय।',
            },
            bulletPoints: [
              { en: 'Northern Railway (New Delhi), Western Railway (Mumbai Churchgate), Central Railway (Mumbai CSMT), Eastern Railway (Kolkata Fairlie Place).', hi: 'उत्तर रेलवे (नई दिल्ली), पश्चिम रेलवे (मुंबई चर्चगेट), मध्य रेलवे (मुंबई सीएसएमटी), पूर्व रेलवे (कोलकाता)।' },
              { en: 'Southern Railway (Chennai), South Western Railway (Hubballi), East Coast Railway (Bhubaneswar), North Eastern Railway (Gorakhpur).', hi: 'दक्षिण रेलवे (चेन्नई), दक्षिण पश्चिम रेलवे (हुबली), पूर्व तट रेलवे (भुवनेश्वर), पूर्वोत्तर रेलवे (गोरखपुर)।' },
            ],
            examRelevance: { en: 'Direct recurring matching questions in every shift', hi: 'ज़ोन और मुख्यालय मिलान पर प्रत्येक शिफ्ट में प्रश्न' },
          },
          {
            id: 'track-gauges-specs',
            title: { en: 'Technical Track Gauge Classifications', hi: 'रेलवे ट्रैक गेज वर्गीकरण एवं तकनीकी मानक' },
            summary: {
              en: 'Complete railway track gauge specifications officially notified by Indian Railways:\n• Broad Gauge: 1676 mm (5 ft 6 in) — >96.5% of network under Project Unigauge\n• Standard Gauge: 1435 mm (4 ft 8½ in) — Metros and High-Speed Rail (MAHSR)\n• Metre Gauge: 1000 mm (3 ft 3⅜ in)\n• Narrow Gauge: 762 mm (2 ft 6 in) and 610 mm (2 ft) — Kalka-Shimla, Darjeeling Himalayan Railway.',
              hi: 'भारतीय रेलवे के आधिकारिक गेज मानक:\n• ब्रॉड गेज (बड़ी लाइन): 1676 मिमी (5 फीट 6 इंच) — प्रोजेक्ट यूनिगेज के तहत 96.5%+ नेटवर्क\n• मानक गेज: 1435 मिमी — मेट्रो व बुलेट ट्रेन\n• मीटर गेज: 1000 मिमी (3 फीट 3⅜ इंच)\n• नैरो गेज (छोटी लाइन): 762 मिमी (2 फीट 6 इंच) व 610 मिमी (2 फीट) — कालका-शिमला, दार्जिलिंग।',
            },
            bulletPoints: [
              { en: 'Broad Gauge clearance and axle load standards (22.9t standard, 25t DFC heavy-haul).', hi: 'ब्रॉड गेज एक्सल लोड: 22.9 टन मानक, 25 टन डीएफसी भारी माल ढुलाई।' },
              { en: 'Heritage lines operating on 610 mm (Darjeeling) and 762 mm (Kalka-Shimla, Nilgiri rack railway).', hi: 'विश्व धरोहर नैरो गेज लाइनें: दार्जिलिंग (610 मिमी) एवं कालका-शिमला (762 मिमी)।' },
            ],
            examRelevance: { en: 'Guaranteed 1-2 questions on track gauges and rail dimensions', hi: 'गेज चौड़ाई और रेल पटरी विनिर्देशों पर अनिवार्य 1-2 प्रश्न' },
          },
          {
            id: 'modern-systems-kavach-dfc-pus',
            title: { en: 'Modern Systems: KAVACH 4.0, DFCs & Production Units', hi: 'आधुनिक प्रणालियां: कवच 4.0, डीएफसी एवं उत्पादन इकाइयां' },
            summary: {
              en: 'Signaling modernizations like KAVACH (Automatic Train Protection system, SIL-4 certified); Dedicated Freight Corridors (Western DFC 1506 km Dadri-JNPT, Eastern DFC 1875 km Ludhiana-Dankuni); Production units (ICF Chennai, RCF Kapurthala, BLW Varanasi, CLW Asansol, PLW Patiala, RWF Bengaluru).',
              hi: 'स्वचालित ट्रेन सुरक्षा प्रणाली कवच 4.0 (SIL-4 सुरक्षा प्रमाणन); डेडिकेटेड फ्रेट कॉरिडोर (पश्चिमी डीएफसी 1506 किमी दादरी-जेएनपीटी, पूर्वी डीएफसी 1875 किमी लुधियाना-दनकुनी); उत्पादन इकाइयां (ICF चेन्नई - वंदे भारत, RCF कपूरथला - एलएचबी, BLW वाराणसी - रेल इंजन, CLW आसनसोल, RWF बेंगलुरु - पहिए)।',
            },
            bulletPoints: [
              { en: 'Kavach technology: RFID tags on track sleepers every 1 km, UHF 400 MHz radio, automatic brake application on Signal Passed at Danger (SPAD).', hi: 'कवच तकनीक: ट्रैक पर 1 किमी पर आरएफआईडी टैग, UHF 400 MHz रेडियो, लाल सिग्नल पार करने पर स्वतः ब्रेक।' },
              { en: 'Vande Bharat trainsets: Distributed traction power, 160 km/h operational speed, manufactured at ICF Chennai.', hi: 'वंदे भारत ट्रेन: वितरित ट्रैक्शन शक्ति, 160 किमी/घंटा गति, आईसीएफ चेन्नई में निर्मित।' },
            ],
            examRelevance: { en: 'High weightage modern technical questions in CBT-2', hi: 'सीबीटी-2 में उच्च अंक भार वाले आधुनिक रेलवे प्रश्न' },
          },
        ],
      },
    ],
  },

  // =========================================================================
  // SECTION 2: RRB NTPC UNDERGRADUATE LEVEL (7th CPC Levels 2 & 3)
  // =========================================================================
  {
    sectionNumber: 2,
    sectionId: 'ntpc-undergraduate',
    title: { en: 'SECTION 2: RRB NTPC UNDERGRADUATE LEVEL', hi: 'खंड 2: आरआरबी एनटीपीसी अंडरग्रेजुएट लेवल' },
    subtitle: { en: '7th CPC Pay Levels 2 & 3 (12th / Higher Secondary Entry)', hi: '7वें वेतन आयोग के पे-लेवल 2 एवं 3 (12वीं उत्तीर्ण प्रवेश स्तर)' },
    postProfiles: {
      designations: [
        { en: 'Commercial cum Ticket Clerk (Level 3 • ₹21,700 Basic)', hi: 'कमर्शियल कम टिकट क्लर्क (लेवल 3 • ₹21,700 मूल वेतन)' },
        { en: 'Junior Clerk cum Typist (Level 2 • ₹19,900 Basic)', hi: 'जूनियर क्लर्क कम टाइपिस्ट (लेवल 2 • ₹19,900 मूल वेतन)' },
        { en: 'Accounts Clerk cum Typist (Level 2 • ₹19,900 Basic)', hi: 'अकाउंट्स क्लर्क कम टाइपिस्ट (लेवल 2 • ₹19,900 मूल वेतन)' },
        { en: 'Junior Time Keeper (Level 2 • ₹19,900 Basic)', hi: 'जूनियर टाइम कीपर (लेवल 2 • ₹19,900 मूल वेतन)' },
        { en: 'Trains Clerk (Level 2 • ₹19,900 Basic)', hi: 'ट्रेन्स क्लर्क (लेवल 2 • ₹19,900 मूल वेतन)' },
      ],
      testingEngine: {
        en: 'CBT-1 (100 Qs / 90 Mins) → CBT-2 (120 Qs / 90 Mins) → Typing Skill Test (30 WPM English / 25 WPM Hindi for Clerical Posts on PC) → Document Verification & Medical Examination',
        hi: 'सीबीटी-1 (100 प्रश्न / 90 मिनट) → सीबीटी-2 (120 प्रश्न / 90 मिनट) → टाइपिंग टेस्ट (क्लर्क पदों हेतु 30 wpm अंग्रेजी / 25 wpm हिंदी) → दस्तावेज़ सत्यापन एवं मेडिकल',
      },
      evaluationCore: {
        en: 'Direct computation speed, rapid pattern recognition, and memory-based static information extraction.',
        hi: 'प्रत्यक्ष गणना गति, तीव्र पैटर्न पहचान और तथ्यात्मक स्मृति-आधारित सामान्य ज्ञान पर केंद्रित।',
      },
    },
    modules: [
      {
        id: 'ntpc-ug-math',
        title: { en: 'Mathematics (Undergraduate Tier)', hi: 'गणित (अंडरग्रेजुएट स्तर)' },
        subtitle: { en: 'Direct computational arithmetic, percentages, speed-distance & basic algebra', hi: 'प्रत्यक्ष गणनात्मक अंकगणित, प्रतिशत, चाल-दूरी एवं सरल बीजगणित' },
        iconType: 'math',
        weightage: { cbt1: '30 Qs (30 Marks)', cbt2: '35 Qs (35 Marks)' },
        subTopics: [
          {
            id: 'ug-numerical-basics',
            title: { en: 'Numerical Basics: BODMAS, Fractions & Roots', hi: 'मूलभूत गणना: बॉडमास, भिन्न एवं वर्गमूल' },
            summary: {
              en: 'Simplification using BODMAS; fraction matching, ascending/descending sorting; square roots and cube roots calculation by factorization or division methods; decimal-to-fraction conversions.',
              hi: 'बॉडमास नियम द्वारा सरलीकरण; भिन्नों का आरोही/अवरोही क्रम; गुणनखंड व भाग विधि द्वारा वर्गमूल एवं घनमूल; दशमलव से भिन्न रूपांतरण।',
            },
            bulletPoints: [
              { en: 'Rapid square root identification using unit-digit patterns (ends in 1 -> root ends in 1 or 9).', hi: 'इकाई अंक देखकर वर्गमूल की पहचान (इकाई 1 -> मूल 1 या 9)।' },
              { en: 'Comparing fractions using cross-multiplication method (a/b vs c/d: compare ad and bc).', hi: 'वज्र-गुणन विधि द्वारा भिन्नों की तुलना (a/b और c/d में ad और bc की तुलना)।' },
            ],
            examRelevance: { en: '6-7 direct simplification questions in CBT-1', hi: 'सीबीटी-1 में 6-7 सीधे सरलीकरण प्रश्न' },
          },
          {
            id: 'ug-arithmetic-equations',
            title: { en: 'Arithmetic Equations: %, Profit-Loss, Ratio, SI & Basic CI', hi: 'अंकगणितीय समीकरण: प्रतिशत, लाभ-हानि, अनुपात, साधारण व चक्रवृद्धि ब्याज' },
            summary: {
              en: 'Direct applications of Percentages, Ratio and Proportion; calculation of Profit and Loss margins, simple discounts; calculation of Simple Interest and basic non-nested Compound Interest variables.',
              hi: 'प्रतिशत, अनुपात व समानुपात के प्रत्यक्ष अनुप्रयोग; लाभ-हानि मार्जिन, सरल छूट; साधारण ब्याज एवं बुनियादी गैर-जटिल चक्रवृद्धि ब्याज।',
            },
            bulletPoints: [
              { en: 'Profit % = (Profit / CP) × 100; Loss % = (Loss / CP) × 100.', hi: 'लाभ % = (लाभ / क्रय मूल्य) × 100; हानि % = (हानि / क्रय मूल्य) × 100।' },
              { en: 'Simple Interest: SI = (P × R × T) / 100; Amount A = P + SI.', hi: 'साधारण ब्याज SI = (P × R × T) / 100।' },
            ],
            examRelevance: { en: '8-10 questions in CBT-1 and CBT-2', hi: 'दोनों चरणों में 8-10 प्रश्न' },
          },
          {
            id: 'ug-work-movement',
            title: { en: 'Work and Movement Dynamics: Time-Work, Speed-Distance, Trains', hi: 'कार्य एवं गति: समय-कार्य, चाल-दूरी, रेलगाड़ी' },
            summary: {
              en: 'Simple Time and Work unit methods; direct speed-distance-time calculations; trains passing poles or stationary objects; basic average speed problems.',
              hi: 'सरल समय और कार्य इकाई विधि; प्रत्यक्ष चाल-दूरी-समय गणना; खंभों अथवा स्थिर वस्तुओं को पार करती रेलगाड़ियां; औसत चाल।',
            },
            bulletPoints: [
              { en: 'Train passing a pole/standing man: Distance = Length of Train; Time = Length / Speed.', hi: 'खंभे को पार करती ट्रेन: दूरी = ट्रेन की लंबाई; समय = लंबाई / चाल।' },
              { en: 'Two men walking towards each other: Relative Speed = S₁ + S₂.', hi: 'परस्पर विपरीत दिशा में चलते व्यक्ति: सापेक्ष चाल = S₁ + S₂।' },
            ],
            examRelevance: { en: '5-6 questions in CBT-1 and CBT-2', hi: 'दोनों चरणों में 5-6 प्रश्न' },
          },
          {
            id: 'ug-basic-mensuration-algebra',
            title: { en: 'Basic Mensuration & Elementary Algebra', hi: 'प्रारंभिक क्षेत्रमिति एवं बीजगणित' },
            summary: {
              en: 'Perimeter and area of basic geometric shapes (squares, rectangles, circles, triangles); linear algebraic expressions with single variables.',
              hi: 'वर्ग, आयत, वृत्त एवं त्रिभुज का परिमाप व क्षेत्रफल; एकल चर वाले रैखिक बीजगणितीय व्यंजक।',
            },
            bulletPoints: [
              { en: 'Circle: Perimeter = 2πr; Area = πr²; Semicircle perimeter = πr + 2r.', hi: 'वृत्त: परिधि = 2πr; क्षेत्रफल = πr²; अर्धवृत्त परिमाप = πr + 2r।' },
              { en: 'Rectangle: Area = l × b; Perimeter = 2(l + b); Diagonal = √(l² + b²).', hi: 'आयत: क्षेत्रफल = l × b; परिमाप = 2(l + b); विकर्ण = √(l² + b²)।' },
            ],
            examRelevance: { en: '4-5 questions in CBT-1 and CBT-2', hi: 'दोनों चरणों में 4-5 प्रश्न' },
          },
        ],
      },
      {
        id: 'ntpc-ug-reasoning',
        title: { en: 'General Intelligence & Reasoning (Undergraduate Tier)', hi: 'सामान्य बुद्धिमत्ता एवं तर्कशक्ति (12वीं स्तर)' },
        subtitle: { en: 'Alphanumeric series, coding, direction sense & visual classification', hi: 'अक्षरांकीय श्रृंखला, कोडिंग, दिशा ज्ञान व दृश्य वर्गीकरण' },
        iconType: 'brain',
        weightage: { cbt1: '30 Qs (30 Marks)', cbt2: '35 Qs (35 Marks)' },
        subTopics: [
          {
            id: 'ug-alphanumeric-coding',
            title: { en: 'Alphanumeric Sequences & Basic Coding-Decoding', hi: 'अक्षरांकीय श्रृंखला एवं सरल कोडिंग' },
            summary: {
              en: 'Direct pattern identification in symbol-letter-number chains; finding the missing term in simple arithmetic series; direct letter shifting (e.g., +1, -1 variations); numerical value assignment to words based on alphabetical positions.',
              hi: 'प्रतीक-अक्षर-संख्या श्रृंखला में पैटर्न पहचान; सरल अंक श्रृंखला में लुप्त पद; अक्षरों का प्रत्यक्ष विस्थापन (+1, -1 आदि); वर्णमाला स्थानों के आधार पर शब्द का मान निकालना।',
            },
            bulletPoints: [
              { en: 'EJOTY rule for 5th, 10th, 15th, 20th, 25th alphabet positions.', hi: 'EJOTY नियम: E=5, J=10, O=15, T=20, Y=25।' },
              { en: 'Direct substitution coding where letters correspond to fixed numbers.', hi: 'प्रत्यक्ष प्रतिस्थापन कोडिंग।' },
            ],
            examRelevance: { en: '7-8 questions in CBT-1', hi: 'सीबीटी-1 में 7-8 प्रश्न' },
          },
          {
            id: 'ug-direction-family-visual',
            title: { en: 'Direction, Family Logic & Visual Grouping', hi: 'दिशा ज्ञान, रक्त संबंध एवं दृश्य वर्गीकरण' },
            summary: {
              en: 'Standard navigation tracks (North-South-East-West directional shifts, final distance calculations); direct relationship pointer trees ("pointing to a photograph..."); odd-one-out tests; classification of words; simple Venn diagrams mapping obvious group classifications (e.g., Animals, Mammals, Cows).',
              hi: 'मानक दिशा परिवर्तन (उत्तर-दक्षिण-पूर्व-पश्चिम, अंतिम दूरी); तस्वीर की ओर इशारा करते हुए रक्त संबंध; विषम शब्द/संख्या छांटना; सरल वेन आरेख (जैसे पशु, स्तनधारी, गाय)।',
            },
            bulletPoints: [
              { en: 'Pythagoras theorem in final distance calculation: Distance = √(North² + East²).', hi: 'अंतिम दूरी में पाइथागोरस प्रमेय।' },
              { en: 'Direct pointer relations: "He is the only son of my mother’s father" -> Uncle / Maternal Uncle.', hi: 'प्रत्यक्ष रक्त संबंध पहचान।' },
            ],
            examRelevance: { en: '8-10 questions in CBT-1 and CBT-2', hi: 'दोनों चरणों में 8-10 प्रश्न' },
          },
        ],
      },
      {
        id: 'ntpc-ug-ga',
        title: { en: 'General Awareness & Science Foundations', hi: 'सामान्य जागरूकता एवं विज्ञान नींव' },
        subtitle: { en: '10th NCERT science facts, static GK, national symbols & schemes', hi: '10वीं एनसीईआरटी विज्ञान तथ्य, स्टैटिक जीके, राष्ट्रीय प्रतीक व योजनाएं' },
        iconType: 'globe',
        weightage: { cbt1: '40 Qs (40 Marks)', cbt2: '50 Qs (50 Marks)' },
        subTopics: [
          {
            id: 'ug-applied-science-10th',
            title: { en: 'Applied General Science (10th Standard Core)', hi: 'व्यावहारिक सामान्य विज्ञान (10वीं स्तर)' },
            summary: {
              en: 'Basic biological facts (human organs, dietary vitamins, common viral/bacterial infections); core chemical properties (common names of salts, chemical formulas, acid-base neutralizations); elementary physics concepts (units of measurement, laws of motion, reflection, refraction).',
              hi: 'मूलभूत जीव विज्ञान (मानव अंग, विटामिन व रोग, सामान्य जीवाणु/विषाणु संक्रमण); रासायनिक गुण (लवणों के सामान्य नाम, रासायनिक सूत्र, अम्ल-क्षार उदासीनीकरण); भौतिकी सिद्धांत (मापन की इकाइयां, गति के नियम, प्रकाश का परावर्तन व अपवर्तन)।',
            },
            bulletPoints: [
              { en: 'Common chemical names: Baking soda (NaHCO₃), Washing soda (Na₂CO₃·10H₂O), Bleaching powder (CaOCl₂), Caustic soda (NaOH).', hi: 'रसायनों के नाम: बेकिंग सोडा (NaHCO₃), धावन सोडा (Na₂CO₃·10H₂O), विरंजक चूर्ण (CaOCl₂)।' },
              { en: 'Vitamins & Deficiency: Vit A (Night blindness), Vit B1 (Beriberi), Vit C (Scurvy), Vit D (Rickets), Vit K (Blood clotting).', hi: 'विटामिन व हीनताजन्य रोग: विटामिन A (रतौंधी), B1 (बेरीबेरी), C (स्कर्वी), D (रिकेट्स), K (रक्त थक्का)।' },
            ],
            examRelevance: { en: '10-12 questions in CBT-1 and CBT-2', hi: 'दोनों चरणों में 10-12 प्रश्न' },
          },
          {
            id: 'ug-static-gk-freedom',
            title: { en: 'Static General Knowledge & National Monuments', hi: 'स्टैटिक सामान्य ज्ञान, नदियां, राष्ट्रीय उद्यान व योजनाएं' },
            summary: {
              en: 'Core facts regarding the Indian National Movement; important national monuments, wild life reserves; major national parks; key Indian river systems; capitals and currencies of prominent global nations; central articles of the Indian Constitution; primary union government schemes.',
              hi: 'भारतीय स्वतंत्रता आंदोलन के प्रमुख तथ्य; राष्ट्रीय स्मारक, वन्यजीव अभयारण्य, राष्ट्रीय उद्यान; प्रमुख नदी प्रणालियां; विश्व के प्रमुख देशों की राजधानियां व मुद्राएं; संविधान के प्रमुख अनुच्छेद; प्रमुख केंद्रीय कल्याणकारी योजनाएं।',
            },
            bulletPoints: [
              { en: 'National Parks: Kaziranga (Assam - One horned rhino), Jim Corbett (Uttarakhand), Gir (Gujarat - Asiatic Lion), Kanha (Madhya Pradesh).', hi: 'राष्ट्रीय उद्यान: काजीरंगा (असम), जिम कॉर्बेट (उत्तराखंड), गिर (गुजरात), कान्हा (मध्य प्रदेश)।' },
              { en: 'River Origins: Ganga (Gangotri/Bhagirathi), Indus (Mansarovar), Yamuna (Yamunotri), Godavari (Trimbakeshwar), Krishna (Mahabaleshwar).', hi: 'नदियों का उद्गम: गंगा (गंगोत्री), सिंधु (मानसरोवर), गोदावरी (त्र्यंबकेश्वर), कृष्णा (महाबलेश्वर)।' },
            ],
            examRelevance: { en: '15-18 questions in CBT-1 and CBT-2', hi: 'दोनों चरणों में 15-18 प्रश्न' },
          },
        ],
      },
    ],
  },

  // =========================================================================
  // SECTION 3: RRB GROUP D / LEVEL-1
  // =========================================================================
  {
    sectionNumber: 3,
    sectionId: 'group-d',
    title: { en: 'SECTION 3: RRB GROUP D / LEVEL-1', hi: 'खंड 3: आरआरबी ग्रुप डी / लेवल-1 भर्ती' },
    subtitle: { en: '7th CPC Pay Level 1 Dedicated Infrastructure & Maintenance Roles', hi: '7वें वेतन आयोग का पे-लेवल 1 (ट्रैक मेंटेनर, पॉइंट्समैन व सहायक पद)' },
    postProfiles: {
      designations: [
        { en: 'Assistant Track Maintainer Grade-IV (Level 1 • ₹18,000 Basic)', hi: 'ट्रैक मेंटेनर ग्रेड-IV (लेवल 1 • ₹18,000 मूल वेतन)' },
        { en: 'Assistant Pointsman (Traffic Operations • Level 1)', hi: 'असिस्टेंट पॉइंट्समैन (यातायात परिचालन • लेवल 1)' },
        { en: 'Assistant Workshop (Mechanical / Carriage & Wagon)', hi: 'असिस्टेंट वर्कशॉप (मैकेनिकल / कैरिज एवं वैगन)' },
        { en: 'Assistant Signal & Telecom (S&T)', hi: 'असिस्टेंट सिग्नल एवं टेलीकॉम (S&T)' },
        { en: 'Assistant Loco Shed (Diesel / Electrical)', hi: 'असिस्टेंट लोको शेड (डीजल / इलेक्ट्रिकल)' },
        { en: 'Assistant C&W (Carriage & Wagon)', hi: 'असिस्टेंट सीएंडडब्ल्यू (कैरिज एवं वैगन)' },
      ],
      testingEngine: {
        en: 'Single-Stage Computer Based Test (CBT - 100 Qs / 90 Mins) → Physical Efficiency Test (PET - Male: 35 kg weight carry for 100m in 2m + 1000m run in 4m 15s; Female: 20 kg weight carry + 1000m run in 5m 40s) → Document Verification (1:1 Ratio) → Medical Examination (A-2, A-3, B-1, B-2, C-1)',
        hi: 'एकल-चरणीय सीबीटी (100 प्रश्न / 90 मिनट) → शारीरिक दक्षता परीक्षा (PET - पुरुष: 35 किग्रा वजन 100 मी 2 मिनट में + 1000 मी दौड़ 4 मिनट 15 सेकंड में; महिला: 20 किग्रा वजन + 1000 मी दौड़ 5 मिनट 40 सेकंड में) → दस्तावेज़ सत्यापन (1:1 अनुपात) → चिकित्सा परीक्षण',
      },
      evaluationCore: {
        en: 'High-speed calculation of elementary modules with a specialized, heavy focus on core 10th-standard laboratory sciences (25 Marks dedicated Science section).',
        hi: 'प्रारंभिक गणित-रीजनिंग की तीव्र गणना और 10वीं एनसीईआरटी प्रयोगशाला विज्ञान (25 अंक समर्पित विज्ञान खंड) पर अत्यधिक बल।',
      },
    },
    asciiTree: {
      title: 'GROUP D GENERAL SCIENCE BRANCH ARCHITECTURE',
      content: `                          GROUP D GENERAL SCIENCE (25 MARKS)
                                     │
       ┌─────────────────────────────┼─────────────────────────────┐
       ▼                             ▼                             ▼
    PHYSICS (9-10 MARKS)          CHEMISTRY (8-9 MARKS)         BIOLOGY (7-8 MARKS)
• Optics & Lens Formulas     • Chemical Balancing           • Taxonomy/Classifications
• Ohm's Law & Circuitry      • Periodic Law Mechanics       • Human Organ Systems
• Newton's Kinematics        • Acid-Base pH Dynamics        • Genetics & Nutrition
• Gravitation & Energy       • Metals & Metallurgy          • Ecology & 10% Law`,
    },
    modules: [
      {
        id: 'group-d-science-core',
        title: { en: 'General Science (High Weightage Core - 25 Marks)', hi: 'सामान्य विज्ञान (उच्च अंक भार कोर - 25 अंक)' },
        subtitle: { en: 'Class 10 NCERT Physics, Chemistry & Biology with laboratory numericals', hi: '10वीं एनसीईआरटी भौतिकी, रसायन एवं जीव विज्ञान आंकिक प्रश्नों सहित' },
        iconType: 'flask',
        weightage: { cbt1: '25 Questions (25 Marks) - Highest Science Weightage in RRB', groupD: '25 Marks' },
        subTopics: [
          {
            id: 'physics-mechanics-optics-electricity',
            title: { en: 'Physics: Mechanics, Optics, Electricity & Magnetism', hi: 'भौतिकी: यांत्रिकी, प्रकाशिकी, विद्युत एवं चुंबकत्व' },
            summary: {
              en: 'Units and dimensions, scalar and vector quantities; Newton’s laws of motion, linear momentum (p=mv), inertia; work, power (P=W/t), energy (Kinetic Energy Ek=½mv², Potential Energy Ep=mgh), law of conservation of energy; gravitation (F = G(m₁m₂)/r²), acceleration due to gravity (g); Reflection, spherical mirrors (mirror formula: 1/f = 1/v + 1/u); refraction, Snell’s law, total internal reflection; lenses (lens formula: 1/f = 1/v - 1/u, power of a lens P = 1/f in diopters); human eye defects (myopia, hypermetropia) and lens corrections; Electric current (I=Q/t), potential difference (V), Ohm’s law (V=IR), resistance (R = ρ·l/A); series and parallel combinations of resistors; heating effects of electric current (Joule’s heating H=I²Rt), electric power (P=VI); magnetic field lines, Fleming’s left-hand and right-hand rules, electromagnetic induction basics.',
              hi: 'मात्रक एवं विमाएं; न्यूटन के गति के नियम, संवेग (p=mv), जड़त्व; कार्य, शक्ति (P=W/t), गतिज ऊर्जा (Ek=½mv²), स्थितिज ऊर्जा (Ep=mgh), ऊर्जा संरक्षण का नियम; गुरुत्वाकर्षण (F = G(m₁m₂)/r²), गुरुत्वीय त्वरण (g); गोलीय दर्पण (दर्पण सूत्र: 1/f = 1/v + 1/u); अपवर्तन, स्नेल का नियम, पूर्ण आंतरिक परावर्तन; लेंस सूत्र (1/f = 1/v - 1/u), लेंस की क्षमता (P = 1/f डायोप्टर); दृष्टि दोष (निकट दृष्टि दोष मायोपिया - अवतल लेंस, दूर दृष्टि दोष हाइपरमेट्रोपिया - उत्तल लेंस); विद्युत धारा (I=Q/t), ओम का नियम (V=IR), प्रतिरोध (R = ρ·l/A); प्रतिरोधकों का श्रेणी व समानांतर क्रम; जूल का तापन नियम (H=I²Rt), विद्युत शक्ति (P=VI); फ्लेमिंग का बाएं व दाएं हाथ का नियम, विद्युत चुंबकीय प्रेरण।',
            },
            bulletPoints: [
              { en: 'Ohm’s law series vs parallel: Series R_eq = R₁ + R₂ + R₃; Parallel 1/R_eq = 1/R₁ + 1/R₂ + 1/R₃.', hi: 'श्रेणी क्रम में धारा समान रहती है; समानांतर क्रम में विभवांतर समान रहता है।' },
              { en: 'Mirror formula: 1/f = 1/v + 1/u with sign convention (concave mirror f is negative).', hi: 'दर्पण सूत्र: 1/f = 1/v + 1/u (अवतल दर्पण की फोकस दूरी ऋणात्मक होती है)।' },
              { en: 'Lens formula: 1/f = 1/v - 1/u; Magnification m = v/u = h_i / h_o.', hi: 'लेंस सूत्र: 1/f = 1/v - 1/u; आवर्धन m = v/u = h_i / h_o।' },
              { en: 'Fleming’s Left-Hand Rule: Thumb = Force/Motion, Forefinger = Magnetic Field, Middle finger = Current (Motors).', hi: 'फ्लेमिंग का वामहस्त नियम (विद्युत मोटर): अंगूठा = बल/गति, तर्जनी = चुंबकीय क्षेत्र, मध्यमा = धारा।' },
            ],
            formulas: [
              'Mirror Formula: 1/f = 1/v + 1/u',
              'Lens Formula: 1/f = 1/v - 1/u',
              'Lens Power: P = 1 / f (in metres) Diopters (D)',
              'Resistance: R = ρ × (l / A)',
              'Ohm’s Law: V = IR  |  Power: P = VI = I²R = V²/R',
              'Joule’s Heating: H = I²Rt',
              'Gravitational Force: F = G(m₁m₂) / r²',
              'Kinetic Energy: Ek = (1/2)mv²  |  Potential Energy: Ep = mgh',
            ],
            examRelevance: { en: '9-10 questions in Group D CBT (Highest numerical weightage)', hi: 'ग्रुप डी में 9-10 प्रश्न (सबसे अधिक आंकिक प्रश्न)' },
            keyTerms: ['Mirror Formula', 'Lens Power Diopter', 'Ohm Law', 'Fleming Left Hand', 'Joule Heating'],
          },
          {
            id: 'chemistry-reactions-periodic-acids',
            title: { en: 'Chemistry: Reactions, Periodic Table, Acids & Carbon', hi: 'रसायन विज्ञान: रासायनिक अभिक्रियाएं, आवर्त सारणी, अम्ल व कार्बन' },
            summary: {
              en: 'Types of chemical reactions (combination, decomposition, displacement, double displacement, oxidation-reduction/redox); balancing chemical equations; Early attempts (Dobereiner’s triads, Newlands’ law of octaves); Mendeleev’s periodic table; Modern Periodic Table (groups, periods, periodic trends: atomic radius, metallic character, electronegativity, ionization energy); Concept of pH scale (pH = -log[H+]); indicators (litmus, phenolphthalein, methyl orange); manufacturing process, properties, and applications of Bleaching powder, Baking soda, Washing soda, and Plaster of Paris (CaSO₄·½H₂O); physical and chemical properties of metals and non-metals, reactivity series, metallurgy basics, corrosion prevention (galvanization, anodizing); Covalent bonding, catenation, tetravalency of carbon, homologous series, nomenclature of carbon compounds with functional groups, ethanol and ethanoic acid, soaps and detergents structure.',
              hi: 'रासायनिक अभिक्रियाओं के प्रकार (संयोजन, वियोजन/अपघटन, विस्थापन, द्विविस्थापन, रेडॉक्स); समीकरणों का संतुलन; डोबेराइनर के त्रिक, न्यूलैंड्स का अष्टक नियम; मेंडेलीव की आवर्त सारणी; आधुनिक आवर्त सारणी (18 वर्ग, 7 आवर्त, प्रवृत्तियां: परमाणु त्रिज्या, धात्विक गुण, विद्युतऋणात्मकता, आयनन ऊर्जा); pH पैमाना (pH = -log[H+]); सूचक (लिटमस, फेनोल्फथलीन, मेथिल ऑरेंज); विरंजक चूर्ण, बेकिंग सोडा, धावन सोडा एवं प्लास्टर ऑफ पेरिस (CaSO₄·½H₂O); धातुओं की सक्रियता श्रेणी, धातु कर्म, संक्षारण से बचाव (यशदलेपन/गैल्वनीकरण); कार्बन का सहसंयोजी आबंधन, श्रृंखलन, चतुःसंयोजकता, समजातीय श्रेणी, एथेनॉल व एथेनोइक अम्ल, साबुन व अपमार्जक (मिसेल संरचना)।',
            },
            bulletPoints: [
              { en: 'Modern Periodic Law: Properties of elements are periodic functions of their atomic numbers (Henry Moseley 1913).', hi: 'आधुनिक आवर्त नियम: तत्वों के गुण उनके परमाणु क्रमांकों के आवर्ती फलन होते हैं (हेनरी मोज़ले 1913)।' },
              { en: 'Periodic Trends: Across period -> Atomic radius decreases, electronegativity increases. Down group -> Radius increases, metallic character increases.', hi: 'आवर्त में बाएं से दाएं जाने पर परमाणु त्रिज्या घटती है; वर्ग में नीचे जाने पर त्रिज्या बढ़ती है।' },
              { en: 'Plaster of Paris reaction: CaSO₄·2H₂O (Gypsum at 373 K) -> CaSO₄·½H₂O + 1½H₂O.', hi: 'जिप्सम को 373 K पर गर्म करने पर प्लास्टर ऑफ पेरिस बनता है।' },
              { en: 'Reactivity series top to bottom: K > Na > Ca > Mg > Al > Zn > Fe > Pb > [H] > Cu > Hg > Ag > Au.', hi: 'धातुओं की सक्रियता श्रेणी: K > Na > Ca > Mg > Al > Zn > Fe > Pb > H > Cu > Ag > Au।' },
            ],
            formulas: [
              'pH Equation: pH = -log₁₀[H⁺]  |  pOH = -log₁₀[OH⁻]  |  pH + pOH = 14',
              'Plaster of Paris: CaSO₄·(1/2)H₂O',
              'Gypsum: CaSO₄·2H₂O',
              'Bleaching Powder: CaOCl₂',
              'Baking Soda: NaHCO₃  |  Washing Soda: Na₂CO₃·10H₂O',
              'Rusting of Iron: 4Fe + 3O₂ + xH₂O → 2Fe₂O₃·xH₂O',
            ],
            examRelevance: { en: '8-9 questions in Group D CBT', hi: 'ग्रुप डी सीबीटी में 8-9 प्रश्न' },
            keyTerms: ['Modern Periodic Table', 'Moseley', 'Plaster of Paris', 'Reactivity Series', 'Micelle'],
          },
          {
            id: 'biology-physiology-genetics-ecology',
            title: { en: 'Life Sciences / Biology: Cells, Human Systems, Genetics & Ecology', hi: 'जीव विज्ञान: कोशिका, मानव तंत्र, आनुवंशिकी एवं पारिस्थितिकी' },
            summary: {
              en: 'Plant cells vs. animal cells; functions of cell organelles (mitochondria - powerhouse, ribosomes - protein synthesis, chloroplasts); photosynthesis mechanism, transpiration, plant hormones (auxins, gibberellins, cytokinin, abscisic acid - stress hormone); tropic movements in plants (phototropism, geotropism); Human Digestive system (enzymes: ptyalin/amylase, pepsin, trypsin, lipase, bile); Circulatory system (human 4-chambered heart, double circulation, RBC, WBC, platelets, plasma, blood groups ABO and Rh factor); Respiratory system (aerobic in mitochondria yielding 36/38 ATP vs anaerobic in cytoplasm, alveoli gas exchange); Excretory system (structure of nephron, glomerular filtration, tubular reabsorption, urine formation); Nervous system (reflex arc, human brain: forebrain cerebrum, midbrain, hindbrain cerebellum & medulla oblongata); Mendel’s experiments (monohybrid 3:1 phenotypic ratio, dihybrid 9:3:3:1 ratio), sex determination in humans (XX female, XY male); Food chains, trophic levels, Lindeman’s 10% energy transfer law; ozone layer depletion mechanisms by CFCs; waste management.',
              hi: 'पादप बनाम जंतु कोशिका; कोशिकांग (माइटोकॉन्ड्रिया - ऊर्जा गृह, राइबोसोम - प्रोटीन संश्लेषण, हरितलवक); प्रकाश संश्लेषण, वाष्पोत्सर्जन, पादप हार्मोन (ऑक्सिन, जिबरेलिन, साइटोकाइनिन, एब्सिसिक अम्ल); मानव पाचन तंत्र (एंजाइम: पेप्सिन, ट्रिप्सिन, लाइपेस, पित्त रस); परिसंचरण तंत्र (4-कक्षीय हृदय, दोहरा परिसंचरण, रुधिर वर्ग ABO व Rh कारक); श्वसन तंत्र (वायवीय श्वसन - 38 ATP बनाम अवायवीय श्वसन, कूपिकाओं में गैस विनिमय); उत्सर्जन तंत्र (नेफ्रॉन की संरचना, केशिकागुच्छ निस्यंदन, मूत्र निर्माण); तंत्रिका तंत्र (प्रतिवर्ती चाप, मानव मस्तिष्क: प्रमस्तिष्क, अनुमस्तिष्क, मेडुला); मेंडल के नियम (एकसंकर क्रॉस 3:1, द्विसंकर क्रॉस 9:3:3:1), मानव में लिंग निर्धारण (XX स्त्री, XY पुरुष); खाद्य श्रृंखला, 10% ऊर्जा स्थानांतरण नियम (लिंडेमान); ओजोन क्षरण (CFCs)।',
            },
            bulletPoints: [
              { en: 'Lindeman’s 10% Law: Only 10% of chemical energy is transferred from one trophic level to the next.', hi: 'लिंडेमान का 10% नियम: केवल 10% ऊर्जा एक पोषण स्तर से अगले पोषण स्तर तक पहुंचती है।' },
              { en: 'Digestive Enzymes: Salivary Amylase (Starch -> Maltose), Pepsin (Proteins in stomach), Trypsin (Proteins in intestine), Lipase (Fats -> Fatty acids).', hi: 'पाचक एंजाइम: एमाइलेज (स्टार्च), पेप्सिन (प्रोटीन), ट्रिप्सिन (प्रोटीन), लाइपेस (वसा)।' },
              { en: 'Brain centers: Cerebrum (Intelligence, memory, voluntary actions), Cerebellum (Balance and posture), Medulla Oblongata (Involuntary breathing, heartbeat).', hi: 'मस्तिष्क केंद्र: प्रमस्तिष्क (बुद्धि, स्मृति), अनुमस्तिष्क (संतुलन), मेडुला (हृदय गति, श्वास)।' },
            ],
            formulas: [
              'Photosynthesis: 6CO₂ + 6H₂O + Sunlight → C₆H₁₂O₆ + 6O₂',
              'Aerobic Respiration: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energy (36-38 ATP)',
              'Mendel Phenotypic Ratio: Monohybrid 3:1  |  Dihybrid 9:3:3:1',
              'Energy Transfer: E_(n+1) = 0.10 × E_n',
            ],
            examRelevance: { en: '7-8 questions in Group D CBT', hi: 'ग्रुप डी सीबीटी में 7-8 प्रश्न' },
            keyTerms: ['Nephron', 'Mitochondria ATP', 'Double Circulation', 'Mendel 9:3:3:1', '10% Energy Law'],
          },
        ],
      },
      {
        id: 'group-d-math-matrix',
        title: { en: 'Mathematics (Group D Matrix - 25 Marks)', hi: 'गणित (ग्रुप डी मैट्रिक्स - 25 अंक)' },
        subtitle: { en: 'High-speed BODMAS, arithmetic shortcuts, age, clock & pipes', hi: 'तीव्र बॉडमास, अंकगणित शॉर्टकट, आयु, घड़ी व नल-टंकी' },
        iconType: 'math',
        weightage: { cbt1: '25 Questions (25 Marks)', groupD: '25 Marks' },
        subTopics: [
          {
            id: 'group-d-math-speed-arithmetic',
            title: { en: 'Speed Arithmetic, Clocks, Calendars & Pipes', hi: 'तीव्र अंकगणित, घड़ी, कैलेंडर एवं नल-टंकी' },
            summary: {
              en: 'Complete application of BODMAS notation; Number System shortcuts; Squares, square roots; Age calculation equations; Calendar dates and clock hand angle equations; Pipes and cistern configurations; unitary methods; commercial percentages, profit calculations, loss distributions, ratios, simple interest, basic non-nested compound interest equations.',
              hi: 'बॉडमास संकेतन का पूर्ण अनुप्रयोग; संख्या पद्धति शॉर्टकट; वर्ग, वर्गमूल; आयु संबंधी समीकरण; कैलेंडर तिथियां एवं घड़ी की सुइयों के बीच कोण समीकरण; नल एवं टंकी; प्रतिशत, लाभ-हानि, अनुपात, साधारण व चक्रवृद्धि ब्याज।',
            },
            bulletPoints: [
              { en: 'Angle between clock hands: θ = |(30 × H) - (11/2 × M)| degrees.', hi: 'घड़ी की सुइयों के बीच कोण: θ = |(30 × H) - (11/2 × M)| अंश।' },
              { en: 'Leap year rules: Divisible by 4, but century year must be divisible by 400 (e.g. 2000 is leap, 1900 is not).', hi: 'लीप वर्ष: 4 से विभाज्य, शताब्दी वर्ष 400 से विभाज्य होना अनिवार्य।' },
            ],
            formulas: ['Clock Angle: θ = |30H - 5.5M|°'],
            examRelevance: { en: '25 core questions in Group D CBT', hi: 'ग्रुप डी सीबीटी में 25 मुख्य प्रश्न' },
          },
        ],
      },
      {
        id: 'group-d-reasoning-matrix',
        title: { en: 'General Intelligence & Reasoning (Group D - 30 Marks)', hi: 'सामान्य बुद्धिमत्ता एवं तर्कशक्ति (30 अंक)' },
        subtitle: { en: 'Missing variables, tracking grids, syllogisms & arguments', hi: 'लुप्त पद, ट्रैकिंग ग्रिड, न्याय निगमन व कथन-तर्क' },
        iconType: 'brain',
        weightage: { cbt1: '30 Questions (30 Marks) - Largest Section', groupD: '30 Marks' },
        subTopics: [
          {
            id: 'group-d-reasoning-topics',
            title: { en: 'Pattern Configurations & Logical Deductions', hi: 'पैटर्न संरचना एवं तार्किक निष्कर्ष' },
            summary: {
              en: 'Finding missing variables in alphabet/number chains; spatial arrangement mapping; simple tracking grids; Syllogisms with direct standard assertions; basic statement-argument evaluations; direction changes tracking.',
              hi: 'वर्णमाला/संख्या श्रृंखला में लुप्त पद; स्थानिक व्यवस्था; सरल ट्रैकिंग ग्रिड; मानक न्याय निगमन; कथन एवं तर्क मूल्यांकन; दिशा परिवर्तन ट्रैकिंग।',
            },
            bulletPoints: [
              { en: 'Speed solving standard syllogisms using Venn diagrams.', hi: 'वेन आरेख द्वारा तीव्र न्याय निगमन समाधान।' },
              { en: 'Odd-one-out shape matching and paper folding spatial logic.', hi: 'अशाब्दिक आकृति मिलान व पेपर कटिंग।' },
            ],
            examRelevance: { en: '30 questions in Group D CBT (Highest question count)', hi: 'ग्रुप डी सीबीटी में 30 प्रश्न (सर्वाधिक प्रश्न)' },
          },
        ],
      },
    ],
  },

  // =========================================================================
  // SECTION 4: RRB JE (JUNIOR ENGINEER)
  // =========================================================================
  {
    sectionNumber: 4,
    sectionId: 'rrb-je',
    title: { en: 'SECTION 4: RRB JE (JUNIOR ENGINEER)', hi: 'खंड 4: आरआरबी जेई (कनिष्ठ अभियंता)' },
    subtitle: { en: 'CEN 04/2026 & CEN 03/2024 Technical Recruitments (Civil, Mech, Elec, ECE/IT, DMS, CMA)', hi: 'सीईएन 04/2026 व 03/2024 इंजीनियरिंग संकाय भर्ती (सिविल, मैकेनिकल, इलेक्ट्रिकल, इलेक्ट्रॉनिक्स/आईटी, डीएमएस, सीएमए)' },
    postProfiles: {
      designations: [
        { en: 'Junior Engineer / Civil (Track, Bridge, Works • ₹35,400 Basic)', hi: 'जूनियर इंजीनियर / सिविल (ट्रैक, ब्रिज, वर्क्स • ₹35,400 मूल वेतन)' },
        { en: 'Junior Engineer / Mechanical (C&W, Workshop, Diesel Shed)', hi: 'जूनियर इंजीनियर / मैकेनिकल (कैरिज एवं वैगन, वर्कशॉप, डीजल शेड)' },
        { en: 'Junior Engineer / Electrical (Traction OHE, General Services, EMU/MEMU)', hi: 'जूनियर इंजीनियर / इलेक्ट्रिकल (ट्रैक्शन ओएचई, जनरल सर्विसेज, ईएमयू)' },
        { en: 'Junior Engineer / S&T (Signal & Telecommunication • Kavach Operations)', hi: 'जूनियर इंजीनियर / एसएंडटी (सिग्नल एवं दूरसंचार • कवच प्रणाली)' },
        { en: 'Junior Engineer / IT (Information Technology)', hi: 'जूनियर इंजीनियर / आईटी (सूचना प्रौद्योगिकी)' },
        { en: 'Depot Material Superintendent (DMS • Stores)', hi: 'डिपो सामग्री अधीक्षक (DMS • स्टोर्स)' },
        { en: 'Chemical & Metallurgical Assistant (CMA)', hi: 'केमिकल एवं मेटैलर्जिकल असिस्टेंट (CMA)' },
      ],
      testingEngine: {
        en: 'CBT-1 (100 Qs / 90 Mins - Screening non-technical layer: Maths 30, Reasoning 25, Science 30, GA 15) → CBT-2 (150 Qs / 120 Mins: 100 Marks pure technical engineering core + 50 Marks allied engineering sciences: GA 15, Physics & Chem 15, Computers 10, Environment 10) → Document Verification & Medical (A-3 for Traffic/Track, B-1 for Sheds)',
        hi: 'सीबीटी-1 (100 प्रश्न / 90 मिनट स्क्रीनिंग: गणित 30, रीजनिंग 25, विज्ञान 30, GA 15) → सीबीटी-2 (150 प्रश्न / 120 मिनट: 100 अंक तकनीकी इंजीनियरिंग + 50 अंक सामान्य/संबद्ध: GA 15, भौतिकी-रसायन 15, कंप्यूटर 10, पर्यावरण 10) → दस्तावेज़ सत्यापन एवं मेडिकल',
      },
      evaluationCore: {
        en: 'Rigorous engineering technical competency covering 100 marks of diploma-level curriculum alongside essential engineering allied sciences (Computers & Environmental Pollution Control).',
        hi: 'डिप्लोमा स्तर के 100 अंकों के कोर इंजीनियरिंग पाठ्यक्रम और संबद्ध इंजीनियरिंग विज्ञान (कंप्यूटर व पर्यावरण नियंत्रण) पर गहन तकनीकी मूल्यांकन।',
      },
    },
    asciiTree: {
      title: 'RRB JE CBT-2 TECHNICAL DISCIPLINE TREES',
      content: `                          CIVIL ENGINEERING TREE (100 MARKS)
                                     │
       ┌─────────────────────────────┼─────────────────────────────┐
       ▼                             ▼                             ▼
 BUILDING MATERIALS            SURVEYING & GEOTECH          STRUCTURAL DESIGN
• Concrete mix design         • Theodolite, total station   • Slenderness ratios
• Bricks, lime testing        • Shear strength properties   • Prestressed concrete
• W/C ratio, IS:456           • Mohr-Coulomb failure        • Highway & P-Way tracks

                        ELECTRONICS & TELECOM TREE (100 MARKS)
                                     │
       ┌─────────────────────────────┼─────────────────────────────┐
       ▼                             ▼                             ▼
SEMICONDUCTOR CIRCUITS        DIGITAL & SYSTEMS             COMMUNICATION SYSTEMS
• BJT, MOSFET biasing         • 8085/8086 microprocessors   • Sampling & Quantization
• Op-Amp parameters           • Logic gate minimization     • PCM, ASK, FSK, PSK
• Filters & Oscillators       • Flip-Flops & Counters       • Kavach SIL-4 Protocol`,
    },
    modules: [
      {
        id: 'je-tech-civil',
        title: { en: 'Civil & Allied Engineering Stream (100 Marks CBT-2)', hi: 'सिविल एवं संबद्ध इंजीनियरिंग शाखा (100 अंक सीबीटी-2)' },
        subtitle: { en: 'Building materials, surveying, geotech, structures, hydraulics & railway engineering', hi: 'निर्माण सामग्री, सर्वेक्षण, भू-तकनीकी, संरचनाएं, हाइड्रोलिक्स व रेलवे इंजीनियरिंग' },
        iconType: 'building',
        weightage: { cbt1: 'Screened in CBT-1', cbt2: '100 Technical Marks' },
        subTopics: [
          {
            id: 'civil-materials-surveying-structures',
            title: { en: 'Materials, Surveying, Geotech & Structural RCC/Steel', hi: 'सामग्री, सर्वेक्षण, भू-तकनीकी एवं संरचनात्मक डिजाइन' },
            summary: {
              en: 'Building Materials: Physical and chemical properties of building stones; manufacturing, composition, and testing of structural bricks, lime, and cement; Concrete Technology: water-cement ratio, workability metrics, concrete mix design parameters, additives, non-destructive testing techniques;\nSurveying: Principles of surveying, chain, compass, leveling, contouring, theodolite surveying, curves plotting; Total Station, GPS, GIS applications;\nMechanics of Materials & Geotechnical Engineering: Stress-strain, Hooke’s law, elastic constants; SFD and BMD for determinate structures; column buckling equations, slenderness ratio; index properties of soils, grain-size distribution, liquid limit, plastic limit; permeability, compaction, consolidation properties; shear strength parameters, Mohr-Coulomb failure criterion, bearing capacity foundations;\nStructural Engineering (RCC & Steel): Design philosophies (working stress method vs. limit state method); singly/doubly reinforced beams, solid slabs, axially loaded columns, footing structures; Steel Design: bolted and welded connections, tension and compression members, plate girders, industrial roof trusses; Prestressed Concrete: basic concepts, loss of prestress computations.',
              hi: 'निर्माण सामग्री: इमारती पत्थर, ईंट, चूना व सीमेंट के गुण व परीक्षण; कंक्रीट प्रौद्योगिकी: जल-सीमेंट अनुपात, सुकार्यता (Workability), कंक्रीट मिक्स डिजाइन, गैर-विनाशकारी परीक्षण (NDT);\nसर्वेक्षण: सर्वेक्षण के सिद्धांत, चेन, कंपास, लेवलिंग, कंटूरिंग, थियोडोलाइट, वक्र रेखाएं, टोटल स्टेशन, जीपीएस व जीआईएस;\nसामग्री यांत्रिकी एवं भू-तकनीकी: प्रतिबल-विकृति, हुक का नियम, बंकन आघूर्ण (BMD) व कर्तन बल (SFD) आरेख, कॉलम बकलिंग यूलर सूत्र, तनुता अनुपात (Slenderness ratio); मृदा यांत्रिकी, अटरबर्ग सीमाएं, पारगम्यता, संघनन, अपरूपण सामर्थ्य मोहर-कूलॉम सिद्धांत, धारण क्षमता;\nसंरचनात्मक डिजाइन (RCC व स्टील): सीमित अवस्था विधि (LSM), बीम, स्लैब, कॉलम, नींव; स्टील कनेक्शन (बोल्ट व वेल्ड), प्लेट गर्डर, रूफ ट्रस; पूर्व-प्रतिबलित कंक्रीट (Prestressed Concrete) एवं हानियां।',
            },
            bulletPoints: [
              { en: 'Euler’s Buckling Load for Columns: P_cr = (π²EI) / (L_eff)².', hi: 'यूलर का बकलिंग भार सूत्र: P_cr = (π²EI) / (L_eff)²।' },
              { en: 'Bending Equation: M / I = σ / y = E / R; Section Modulus Z = I / y.', hi: 'बंकन समीकरण: M / I = σ / y = E / R।' },
              { en: 'Mohr-Coulomb shear strength: τ = c + σ·tan φ.', hi: 'मोहर-कूलॉम अपरूपण सामर्थ्य सूत्र: τ = c + σ·tan φ।' },
            ],
            formulas: [
              'Euler Column Buckling: P_cr = (π²EI) / (L_e)²',
              'Shear Stress in Beams: τ = (VAȳ) / (Ib)',
              'Mohr-Coulomb Criterion: τ = c + σ tan(φ)',
              'Slump Cone Dimensions: 10 cm top × 20 cm bottom × 30 cm height',
            ],
            examRelevance: { en: '60 marks of Civil Technical CBT-2', hi: 'सिविल तकनीकी खंड के 60 अंक' },
            keyTerms: ['Concrete Mix IS:456', 'Total Station', 'Euler Buckling', 'Mohr Coulomb', 'Limit State LSM'],
          },
          {
            id: 'civil-hydraulics-railway-environmental',
            title: { en: 'Hydraulics, Railway P-Way & Environmental Engineering', hi: 'हाइड्रोलिक्स, रेलवे स्थाई मार्ग (P-Way) एवं पर्यावरण इंजीनियरिंग' },
            summary: {
              en: 'Fluid properties, manometry, hydrostatics; fluid kinematics, continuity equation, Bernoulli’s theorem, venturimeter; flow through open channels, hydraulic jump; hydrology cycle, precipitation estimation, hydrographs; irrigation engineering: crop water requirements (Delta and Duty properties), design of unlined and lined irrigation canals;\nHighway & Railway Engineering: Geometric design of highways: sight distances (SSD, OSD), super-elevation; Railway Engineering: permanent way components, rails (60 kg/m UIC-60), sleepers (PSC 285 kg), ballast (300-350 mm cushion), fastenings; geometric design of railway tracks: super-elevation, cant deficiency, points and crossings;\nEnvironmental Engineering: Water demands estimations, quality standards, treatment processes (sedimentation, coagulation, filtration, disinfection); waste-water characteristics, sewerage layouts, activated sludge process, trickling filters; air pollution and solid waste management.',
              hi: 'द्रव यांत्रिकी: द्रव गुण, मैनोमीटर, सातत्य समीकरण, बरनौली प्रमेय, वेंचुरीमीटर, ओपन चैनल प्रवाह, हाइड्रोलिक जंप; जल विज्ञान, जल विज्ञान आरेख; सिंचाई: फसल जल मांग (डेल्टा एवं ड्यूटी સંબંધ Δ = 8.64B/D);\nराजमार्ग एवं रेलवे इंजीनियरिंग: ज्यामितीय डिजाइन, दृष्टि दूरी (SSD, OSD), बाह्योत्थान (Super-elevation); रेलवे स्थाई मार्ग (P-Way): रेल पटरियां (60 किग्रा/मी UIC), स्लीपर (PSC कंक्रीट), गिट्टी (बैलास्ट 300-350 मिमी), रेल फिटिंग्स; पटरियों का ज्यामितीय डिजाइन: सुपर-एलिवेशन, कैंट न्यूनता (Cant deficiency), पॉइंट्स एवं क्रॉसिंग्स;\nपर्यावरणीय इंजीनियरिंग: जल मांग, जल शोधन (अवसादन, स्कंदन, निस्यंदन, रोगाणुनाशन); सीवेज उपचार (सक्रिय आपंक प्रणाली ASP, ट्रिकलिंग फिल्टर); वायु व ठोस अपशिष्ट प्रबंधन।',
            },
            bulletPoints: [
              { en: 'Railway Equilibrium Super-elevation: e = (G·V²) / (127·R), where G is dynamic gauge (1750 mm for BG).', hi: 'रेलवे सुपर-एलिवेशन सूत्र: e = (G·V²) / (127·R)।' },
              { en: 'Duty and Delta relation: Δ = (8.64 × B) / D (in metres).', hi: 'ड्यूटी एवं डेल्टा संबंध: Δ = (8.64 × B) / D (मीटर में)।' },
              { en: 'Bernoulli’s Equation: P/ρg + v²/2g + z = Constant.', hi: 'बरनौली समीकरण: दाब शीर्ष + गतिज शीर्ष + स्थितिज शीर्ष = नियतांक।' },
            ],
            formulas: [
              'Super-elevation (Railway BG): e = (GV²) / (127R)',
              'Irrigation Duty-Delta: Δ = (8.64 × B) / D metres',
              'Bernoulli Equation: (p / γ) + (v² / 2g) + z = C',
              'Darcy-Weisbach Pipe Head Loss: h_f = (4fLv²) / (2gd)',
            ],
            examRelevance: { en: '40 marks of Civil Technical CBT-2', hi: 'सिविल तकनीकी खंड के 40 अंक' },
            keyTerms: ['P-Way UIC-60', 'Cant Deficiency', 'Bernoulli', 'Duty Delta', 'Activated Sludge ASP'],
          },
        ],
      },
      {
        id: 'je-tech-mechanical',
        title: { en: 'Mechanical & Allied Engineering Stream (100 Marks CBT-2)', hi: 'मैकेनिकल एवं संबद्ध इंजीनियरिंग शाखा (100 अंक सीबीटी-2)' },
        subtitle: { en: 'Mechanics, TOM, fluid machinery, thermodynamics, IC engines, RAC & production', hi: 'यांत्रिकी, मशीन सिद्धांत, द्रव मशीनरी, थर्मोडायनामिक्स, आईसी इंजन व विनिर्माण' },
        iconType: 'wrench',
        weightage: { cbt1: 'Screened in CBT-1', cbt2: '100 Technical Marks' },
        subTopics: [
          {
            id: 'mech-som-tom-fluids',
            title: { en: 'Strength of Materials, Theory of Machines & Fluid Machinery', hi: 'पदार्थ सामर्थ्य, मशीन सिद्धांत एवं द्रव मशीनरी' },
            summary: {
              en: 'Free-body diagrams, equilibrium, friction; trusses analysis; simple stress and strain, shear stress, principal stresses (Mohr’s circle); torsion of circular shafts; thin and thick cylinders under pressure; deflection of determinate beams;\nKinematic pairs, mechanism inversions, velocity and acceleration analysis; flywheels and governors tuning equations; cams and followers profiles; gears and gear trains classification; design of cotter joints, knuckle joints, riveted and welded joints, shafts, keys, couplings, spur gears, and screw jacks;\nFluid statics, buoyancy, laminar and turbulent flows, boundary layer theory, flow through pipes, Darcy-Weisbach equation; Hydraulic Turbines: Pelton wheel (impulse), Francis and Kaplan (reaction) performance parameters; centrifugal pumps working mechanics, cavitation index.',
              hi: 'मुक्त पिंड आरेख (FBD), संतुलन, घर्षण; ट्रस विश्लेषण; प्रतिबल एवं विकृति, मुख्य प्रतिबल (मोहर वृत्त); वृत्ताकार शाफ्ट का मरोड़ (Torsion); पतले व मोटे बेलन; बीम का विक्षेपण;\nशुद्धगतिक युग्म (Kinematic pairs), उत्क्रमण, वेग व त्वरण विश्लेषण; गतिपालक चक्र (Flywheel) व गवर्नर; कैम व फॉलोवर; गियर व गियर ट्रेन; कटर जोड़, नकल जोड़, रिवेट, शाफ्ट, कपलिंग, स्क्रू जैक डिजाइन;\nद्रव स्थैतिकी, उत्प्लावकता, लैमिनार व विक्षुब्ध प्रवाह, सीमांत परत, डार्सी-वेसबैक समीकरण; हाइड्रोलिक टरबाइन: पेल्टन व्हील (आवेग), फ्रांसिस व काप्लान (प्रतिक्रिया); अपकेंद्रीय पंप (Centrifugal pump) एवं कैविटेशन।',
            },
            bulletPoints: [
              { en: 'Torsion Equation: T / J = τ / r = Gθ / L; Polar Modulus Z_p = J / r.', hi: 'शाफ्ट मरोड़ समीकरण: T / J = τ / r = Gθ / L।' },
              { en: 'Thin Cylinder Hoop Stress σ_h = pd / 2t; Longitudinal Stress σ_l = pd / 4t.', hi: 'पतले बेलन में हूप प्रतिबल = pd / 2t; अनुदैर्ध्य प्रतिबल = pd / 4t।' },
              { en: 'Specific Speed of Turbines: N_s = (N√P) / (H^(5/4)).', hi: 'टरबाइन की विशिष्ट गति: N_s = (N√P) / (H^(5/4))।' },
            ],
            formulas: [
              'Torsion Formula: T/J = τ/r = Gθ/L',
              'Thin Cylinder Hoop Stress: σ_h = pd / (2t)',
              'Thin Cylinder Longitudinal Stress: σ_l = pd / (4t)',
              'Turbine Specific Speed: N_s = (N√P) / H^(5/4)',
            ],
            examRelevance: { en: '50 marks of Mechanical Technical CBT-2', hi: 'मैकेनिकल तकनीकी खंड के 50 अंक' },
          },
          {
            id: 'mech-thermo-ic-rac-production',
            title: { en: 'Thermodynamics, IC Engines, RAC & Manufacturing Tech', hi: 'ऊष्मागतिकी, आईसी इंजन, आरएसी एवं विनिर्माण तकनीक' },
            summary: {
              en: 'First and second laws of thermodynamics, entropy concept, availability; air standard cycles: Otto (petrol), Diesel, Dual, and Brayton (gas turbine) cycles; vapor power Rankine cycle with reheat and regeneration;\nHeat Transfer: conduction through plain and composite walls, fins analysis; free and forced convection; radiation heat transfer, Stefan-Boltzmann law, view factors;\nCombustion processes in SI and CI engines, detonation, knocking; carburetion and fuel injection; indicated/brake power, mechanical & thermal efficiencies; Vapor Compression Refrigeration System (VCRS), refrigerants eco-properties; psychrometric processes, air conditioning load estimations;\nCasting processes: pattern allowances, molding sand, gating system, casting defects; Welding: arc, gas, TIG, MIG, resistance welding; Machining: mechanics of metal cutting, Merchant’s circle diagram, tool life equation (Taylor’s equation: VT^n = C), turning, milling, drilling; Metrology: limits, fits, tolerances, interferometry.',
              hi: 'ऊष्मागतिकी के प्रथम व द्वितीय नियम, एंट्रॉपी; वायु मानक चक्र: ऑटो (पेट्रोल), डीजल, डुअल, ब्रेटन; वाष्प शक्ति रैंकिन चक्र (पुनःतापन व पुनर्जनन);\nऊष्मा संचरण: चालन (फूरियर नियम), संवहन (न्यूटन शीतलन नियम), विकिरण (स्टीफन-बोल्ट्जमान नियम E = σT⁴);\nआईसी इंजन: एसआई व सीआई दहन, नॉकिंग, ईंधन इंजेक्शन, ब्रेक पावर व दक्षता; वाष्प संपीडन प्रशीतन प्रणाली (VCRS), प्रशीतक गुण; साइक्रोमेट्रिक प्रक्रम;\nकास्टिंग (ढलाई): पैटर्न छूट, गेटिंग प्रणाली, ढलाई दोष; वेल्डिंग: TIG, MIG, प्रतिरोध वेल्डिंग; मशीनिंग: मर्चेंट वृत्त आरेख, टेलर का टूल लाइफ समीकरण (VT^n = C); मेट्रोलॉजी: लिमिट, फिट व टॉलरेंस।',
            },
            bulletPoints: [
              { en: 'Taylor’s Tool Life Equation: VT^n = C, where V is cutting speed, T is tool life, n is exponent.', hi: 'टेलर का टूल लाइफ समीकरण: VT^n = C।' },
              { en: 'Carnot Efficiency: η = 1 - (T_L / T_H); Otto cycle efficiency η = 1 - (1 / r^(γ - 1)).', hi: 'कार्नो दक्षता: η = 1 - (T_L / T_H); ऑटो चक्र दक्षता η = 1 - (1 / r^(γ - 1))।' },
              { en: 'Stefan-Boltzmann Radiation Law: E = ε·σ·A·T⁴ (where σ = 5.67 × 10⁻⁸ W/m²K⁴).', hi: 'स्टीफन-बोल्ट्जमान विकिरण नियम: E = εσAT⁴।' },
            ],
            formulas: [
              'Taylor Tool Life: VT^n = C',
              'Carnot Engine Efficiency: η = 1 - (T_c / T_h)',
              'Otto Cycle Efficiency: η = 1 - [1 / r^(γ - 1)]',
              'Stefan-Boltzmann Radiation: E = ε × σ × A × T⁴',
              'Refrigeration COP: COP_VCRS = Refrigerating Effect / Compressor Work',
            ],
            examRelevance: { en: '50 marks of Mechanical Technical CBT-2', hi: 'मैकेनिकल तकनीकी खंड के 50 अंक' },
          },
        ],
      },
      {
        id: 'je-tech-electrical',
        title: { en: 'Electrical & Allied Engineering Stream (100 Marks CBT-2)', hi: 'इलेक्ट्रिकल एवं संबद्ध इंजीनियरिंग शाखा (100 अंक सीबीटी-2)' },
        subtitle: { en: 'Circuits, machines, power systems, measurements & power electronics', hi: 'परिपथ विश्लेषण, विद्युत मशीनें, पावर सिस्टम, मापन व पावर इलेक्ट्रॉनिक्स' },
        iconType: 'zap',
        weightage: { cbt1: 'Screened in CBT-1', cbt2: '100 Technical Marks' },
        subTopics: [
          {
            id: 'elec-circuits-machines-drives',
            title: { en: 'Network Analysis, Machines, Power Systems & Electronics', hi: 'नेटवर्क विश्लेषण, विद्युत मशीनें, पावर सिस्टम एवं इलेक्ट्रॉनिक्स' },
            summary: {
              en: 'Mesh and nodal analysis; network theorems: Thevenin’s, Norton’s, Superposition, Maximum Power Transfer theorems; transient response of R-L, R-C, and R-L-C circuits; three-phase AC systems, star-delta transformations, power measurement methods;\nConcepts of flux, mmf, reluctance, Faraday’s laws of electromagnetic induction, self and mutual inductance, magnetic hysteresis, eddy current losses; electrostatic fields, Gauss’s law, capacitance calculations;\nDC Machines: construction, armature windings, EMF and torque equations, speed control of DC motors, starters;\nTransformers: equivalent circuit, losses, efficiency, voltage regulation, autotransformers, 3-phase transformer connections;\nInduction Motors: 3-phase motors rotating magnetic field, slip-torque characteristics, equivalent circuit, circle diagram, starters; single-phase induction motors;\nSynchronous Machines: alternators EMF equation, armature reaction, voltage regulation (EMF, MMF, ZPF methods); synchronous motors V-curves and inverted V-curves, synchronous condenser;\nHydro, thermal, and nuclear power plant generation cycles; transmission line parameters (R, L, C), performance of short, medium, and long lines, insulators, corona effect, underground cables; fault analysis (symmetrical and unsymmetrical), switchgear: circuit breakers, protective relays;\nMoving iron (MI), moving coil (PMMC), dynamometer, and induction type instruments; digital voltmeters, CRO; transducers (LVDT, strain gauges, thermocouples);\nCharacteristics of SCR, DIAC, TRIAC, MOSFET, IGBT; phase-controlled rectifiers, inverters, choppers, cycloconverters; speed control of DC and AC drives.',
              hi: 'मेश व नोडल विश्लेषण; नेटवर्क प्रमेय: थेवेनिन, नॉर्टन, सुपरपोजिशन, अधिकतम शक्ति स्थानांतरण (MPTT); R-L, R-C व R-L-C परिपथों की क्षणिक अनुक्रिया; 3-फेज स्टार-डेल्टा रूपांतरण;\nचुंबकीय परिपथ: फ्लक्स, mmf, रिलेकटेंस, फैराडे के नियम, स्व-प्रेरण व अन्योन्य प्रेरण, हिस्टेरेसिस व भंवर धारा हानियां;\nडीसी मशीनें: संरचना, EMF व टॉर्क समीकरण, डीसी मोटर गति नियंत्रण व स्टार्टर;\nट्रांसफार्मर: तुल्य परिपथ, हानियां, दक्षता, वोल्टेज रेगुलेशन, ऑटो-ट्रांसफार्मर;\nप्रेरण मोटर: 3-फेज घूर्णी चुंबकीय क्षेत्र, स्लिप-टॉर्क वक्र, स्टार्टर; 1-फेज मोटर;\nतुल्यकालिक मशीनें: अल्टरनेटर EMF समीकरण, वोल्टेज रेगुलेशन (ZPF/EMF विधि); तुल्यकालिक मोटर V-वक्र एवं कंडेनसर;\nविद्युत उत्पादन (जल, तापीय, परमाणु); संचरण लाइनें (लघु, मध्यम, दीर्घ), कोरोना प्रभाव, भूमिगत केबल; फॉल्ट विश्लेषण, सर्किट ब्रेकर व सुरक्षात्मक रिले;\nमापक यंत्र: PMMC (केवल डीसी), MI (एसी व डीसी दोनों), डायनेमोमीटर वाटमीटर, CRO, LVDT, थर्मोकपल;\nपावर इलेक्ट्रॉनिक्स: SCR, TRIAC, MOSFET, IGBT; रेक्टिफायर, इन्वर्टर, चॉपर, ड्राइव गति नियंत्रण।',
            },
            bulletPoints: [
              { en: 'Maximum Power Transfer Theorem: R_L = R_th (for DC) or Z_L = Z_th* (complex conjugate for AC).', hi: 'अधिकतम शक्ति स्थानांतरण प्रमेय: R_L = R_th।' },
              { en: 'Synchronous speed formula: N_s = (120 × f) / P; Slip s = (N_s - N) / N_s.', hi: 'तुल्यकालिक गति: N_s = (120 × f) / P; स्लिप s = (N_s - N) / N_s।' },
              { en: 'Transformer EMF Equation: E = 4.44 × f × N × Φ_m.', hi: 'ट्रांसफार्मर EMF समीकरण: E = 4.44 × f × N × Φ_m।' },
            ],
            formulas: [
              'Synchronous Speed: N_s = (120 × f) / P',
              'Slip: s = (N_s - N) / N_s',
              'Transformer EMF: E = 4.44 × f × N × Φ_m',
              'Max Power Transfer: P_max = V_th² / (4R_th)',
              'Induction Motor Rotor Frequency: f_r = s × f',
            ],
            examRelevance: { en: '100 marks of Electrical Technical CBT-2', hi: 'इलेक्ट्रिकल तकनीकी खंड के 100 अंक' },
          },
        ],
      },
      {
        id: 'je-tech-electronics-telecom',
        title: { en: 'Electronics, IT & Signal & Telecom Stream (100 Marks CBT-2)', hi: 'इलेक्ट्रॉनिक्स, आईटी एवं दूरसंचार शाखा (100 अंक सीबीटी-2)' },
        subtitle: { en: 'Semiconductors, Op-Amps, 8085/8086 microprocessors, communications & networking', hi: 'अर्धचालक, ऑप-एम्प, 8085/8086 माइक्रोप्रोसेसर, संचार व नेटवर्किंग' },
        iconType: 'cpu',
        weightage: { cbt1: 'Screened in CBT-1', cbt2: '100 Technical Marks' },
        subTopics: [
          {
            id: 'ece-analog-digital-micros-comms',
            title: { en: 'Analog, Digital, Microprocessors & Communication Engineering', hi: 'एनालॉग, डिजिटल, माइक्रोप्रोसेसर एवं संचार इंजीनियरिंग' },
            summary: {
              en: 'P-N junction diode characteristics, rectifiers, zener diodes, clippers, clampers; BJT and FET/MOSFET: structure, biasing, small-signal equivalent circuits, amplifiers; Op-Amps characteristics, inverting/non-inverting amplifiers, integrators, differentiators, active filters, oscillators (Wien-bridge, Hartley, Colpitts);\nNumber systems and codes; Boolean algebra, Karnaugh maps (K-map) minimization up to 4 variables; combinational circuits: multiplexers, demultiplexers, encoders, decoders, adders, subtractors; sequential circuits: latches, flip-flops (SR, JK, D, T), counters, shift registers; Microprocessors: 8085 and 8086 architecture, assembly language programming, memory interfacing, peripheral devices (8255, 8253);\nFourier series and transforms, Laplace transforms, LTI systems; Analog Communication: AM, FM, PM generation and detection; Digital Communication: sampling theorem, quantization, PCM, Delta Modulation; digital modulation schemes: ASK, FSK, PSK, QAM; TDM, FDM;\nTwo-port network parameters (Z, Y, ABCD, h); bridge circuits (Maxwell, Hay, Schering, Wien bridges);\nData structures (arrays, linked lists, stacks, queues, trees); OOP using C++/Java; operating systems (scheduling, deadlocks); computer networks: OSI 7-layer model, TCP/IP protocol suite.',
              hi: 'पी-एन संधि डायोड, जेनर डायोड, क्लिपर, क्लैम्पर; BJT एवं MOSFET बायसिंग, प्रवर्धक (Amplifiers); आप्रेशनल एम्पलीफायर (Op-Amp) गुणधर्म (आदर्श इनपुट प्रतिबाधा अनंत, आउटपुट प्रतिबाधा शून्य), इनवर्टिंग व नॉन-इनवर्टिंग प्रवर्धक, समाकलक, अवकलक, दोलित्र (Oscillators);\nबूलियन बीजगणित, K-मैप सरलीकरण (4 चर); संयोजन परिपथ (मल्टीप्लेक्सर MUX, डीमल्टीप्लेक्सर, एनकोडर, डिकोडर, योजक/सबट्रैक्टर); अनुक्रमिक परिपथ (फ्लिप-फ्लॉप SR, JK, D, T, काउंटर, शिफ्ट रजिस्टर); 8085 व 8086 माइक्रोप्रोसेसर आर्किटेक्चर, असेंबली भाषा, इंटरफेसिंग चिप्स (8255, 8253);\nसिग्नल व संचार: फूरियर व लाप्लास रूपांतरण; एनालॉग संचार (AM, FM, PM); डिजिटल संचार (नाइक्विस्ट सैंपलिंग प्रमेय, क्वांटाइजेशन, पल्स कोड मॉड्यूलेशन PCM, डेल्टा मॉड्यूलेशन); डिजिटल मॉड्यूलेशन (ASK, FSK, PSK, QAM); TDM व FDM;\nटू-पोर्ट नेटवर्क पैरामीटर (Z, Y, ABCD, h); मापन ब्रिज (मैक्सवेल, हे, शेरिंग, वीन ब्रिज);\nडेटा संरचनाएं (स्टैक, कतार, लिंक्ड लिस्ट, ट्री); ओएस शेड्यूलिंग व डेडलॉक; कंप्यूटर नेटवर्क OSI 7-लेयर व TCP/IP।',
            },
            bulletPoints: [
              { en: 'Nyquist Sampling Theorem: Minimum sampling frequency f_s ≥ 2 × f_max to prevent aliasing.', hi: 'नाइक्विस्ट सैंपलिंग प्रमेय: f_s ≥ 2 × f_max (अलियासिंग रोकने हेतु)।' },
              { en: 'Op-Amp Inverting Gain: A_v = -R_f / R_1; Non-Inverting Gain: A_v = 1 + (R_f / R_1).', hi: 'ऑप-एम्प लाभ सूत्र: इनवर्टिंग = -R_f / R_1; नॉन-इनवर्टिंग = 1 + (R_f / R_1)।' },
              { en: 'De Morgan’s Laws: (A + B)’ = A’ · B’ and (A · B)’ = A’ + B’.', hi: 'डी मॉर्गन नियम: (A + B)’ = A’ · B’ एवं (A · B)’ = A’ + B’।' },
              { en: '8085 Microprocessor: 8-bit data bus, 16-bit address bus (can address 64 KB memory), 5 hardware interrupts (TRAP, RST 7.5, RST 6.5, RST 5.5, INTR).', hi: '8085 माइक्रोप्रोसेसर: 8-बिट डेटा बस, 16-बिट एड्रेस बस (64 KB मेमोरी), 5 हार्डवेयर इंटरप्ट (TRAP गैर-मास्क करने योग्य)।' },
            ],
            formulas: [
              'Nyquist Sampling Rate: f_s ≥ 2 × f_max',
              'Op-Amp Inverting Gain: V_out / V_in = -R_f / R_in',
              'Op-Amp Non-Inverting Gain: V_out / V_in = 1 + (R_f / R_in)',
              'De Morgan Law: (A + B)’ = A’ · B’  |  (A · B)’ = A’ + B’',
              'Transistor Current Relation: I_E = I_B + I_C  |  α = β / (1 + β)',
            ],
            examRelevance: { en: '100 marks of Electronics/S&T Technical CBT-2', hi: 'इलेक्ट्रॉनिक्स/एसएंडटी तकनीकी खंड के 100 अंक' },
            keyTerms: ['Nyquist Sampling', '8085 TRAP', 'K-Map 4 Variables', 'Op-Amp Inverting', 'PCM Modulations'],
          },
        ],
      },
      {
        id: 'je-allied-computers-it',
        title: { en: 'Basics of Computers & IT Applications (Allied - 15 Marks CBT-2)', hi: 'कंप्यूटर एवं सूचना प्रौद्योगिकी के मूल तत्व (संबद्ध - 15 अंक सीबीटी-2)' },
        subtitle: { en: 'Mandatory allied section for all engineering branches in CBT-2', hi: 'सीबीटी-2 में सभी इंजीनियरिंग शाखाओं के लिए अनिवार्य संबद्ध खंड' },
        iconType: 'laptop',
        weightage: { cbt1: 'Integrated in GA', cbt2: '10-15 Questions (10-15 Marks)' },
        subTopics: [
          {
            id: 'computers-hardware-os-networks',
            title: { en: 'Computer Architecture, Operating Systems & Networks', hi: 'कंप्यूटर आर्किटेक्चर, ऑपरेटिंग सिस्टम एवं नेटवर्किंग' },
            summary: {
              en: 'Hardware Architecture: Input/Output devices interface standards; CPU processing subunits (ALU, Control Unit), cache memory levels (L1, L2, L3), Primary memory classifications (RAM, ROM, PROM, EPROM), Secondary storage profiles (SSD, HDD, NVMe architectures);\nOperating Systems & Software: Single-user vs. multi-user operating systems, kernel functions, Windows vs. Linux command structures (grep, ls, chmod, sudo); MS Office suite deep shortcuts (Excel data tables, VLOOKUP, XLOOKUP, Word automation templates);\nNetworking & Internet Infrastructure: LAN, WAN, MAN configurations, structural network topologies (Star, Mesh, Ring, Bus); IP addressing configurations (IPv4 32-bit vs. IPv6 128-bit protocols, Class A, B, C subnet masks); data transmission routing pipelines, encryption basics; computer virus profiles (Trojan, Ransomware, Worms) and firewall mitigation patterns.',
              hi: 'हार्डवेयर आर्किटेक्चर: इनपुट/आउटपुट डिवाइस; सीपीयू संरचना (ALU, कंट्रोल यूनिट), कैश मेमोरी (L1, L2, L3), प्राथमिक मेमोरी (RAM, ROM, PROM, EPROM), द्वितीयक भंडारण (SSD, HDD, NVMe);\nऑपरेटिंग सिस्टम व सॉफ्टवेयर: कर्नेल कार्यप्रणाली, विंडोज बनाम लिनक्स कमांड (grep, chmod, sudo); एमएस ऑफिस शॉर्टकट्स (एक्सेल सूत्र VLOOKUP, XLOOKUP);\nनेटवर्किंग व इंटरनेट: LAN, WAN, MAN, नेटवर्क टोपोलॉजी (स्टार, मेश, रिंग, बस); आईपी एड्रेस (IPv4 32-बिट बनाम IPv6 128-बिट, सबनेट मास्क); डेटा राउटिंग, एन्क्रिप्शन; वायरस व मैलवेयर (ट्रोजन, रैंसमवेयर, वर्म) एवं फ़ायरवॉल सुरक्षा।',
            },
            bulletPoints: [
              { en: 'OSI 7 Layers (bottom to top): Physical -> Data Link -> Network -> Transport -> Session -> Presentation -> Application.', hi: 'OSI 7 परतें (नीचे से ऊपर): भौतिक -> डेटा लिंक -> नेटवर्क -> ट्रांसपोर्ट -> सेशन -> प्रेजेंटेशन -> एप्लीकेशन।' },
              { en: 'IPv4 vs IPv6: IPv4 has 32 bits (4 octets, 4.3 billion addresses); IPv6 has 128 bits (8 groups of 4 hex digits).', hi: 'IPv4 (32 बिट, 4 दशमलव भाग); IPv6 (128 बिट, 8 हेक्साडेसिमल समूह)।' },
              { en: 'Malware distinction: Worms self-replicate without host files; Trojans disguise as legitimate software; Ransomware encrypts user files demanding ransom.', hi: 'मैलवेयर अंतर: वर्म स्वतः फैलते हैं; ट्रोजन धोखे से स्थापित होते हैं; रैंसमवेयर डेटा लॉक कर फिरौती मांगते हैं।' },
            ],
            examRelevance: { en: 'Guaranteed 10-15 marks for all streams in JE CBT-2', hi: 'जेई सीबीटी-2 में सभी शाखाओं के लिए 10-15 अंक' },
            keyTerms: ['OSI 7 Layers', 'IPv4 vs IPv6', 'ALU Cache L1', 'Ransomware', 'Linux chmod'],
          },
        ],
      },
      {
        id: 'je-allied-environment-pollution',
        title: { en: 'Environment & Pollution Control (Allied - 10 Marks CBT-2)', hi: 'पर्यावरण एवं प्रदूषण नियंत्रण (संबद्ध - 10 अंक सीबीटी-2)' },
        subtitle: { en: 'Ecosystems, air/water/noise pollution control & climate treaties', hi: 'पारिस्थितिकी तंत्र, वायु/जल/ध्वनि प्रदूषण नियंत्रण एवं जलवायु संधियां' },
        iconType: 'leaf',
        weightage: { cbt1: 'Integrated in GA', cbt2: '10 Questions (10 Marks)' },
        subTopics: [
          {
            id: 'env-ecosystems-pollution-climate',
            title: { en: 'Pollution Mitigation, Waste Management & Global Climate Accords', hi: 'प्रदूषण निवारण, अपशिष्ट प्रबंधन एवं वैश्विक जलवायु समझौते' },
            summary: {
              en: 'Ecosystem Dynamics: Structure of biosphere, biotic and abiotic components; biogeochemical cycles (Carbon, Nitrogen, Hydrological cycles); ecological successions;\nPollution Classification & Control Metrics:\n• Air Pollution: Industrial emissions monitoring, particulate matter parameters (PM2.5, PM10), gaseous pollutants control devices (Electrostatic Precipitators - ESP removes 99%+ fly ash, Scrubber installations remove SO₂);\n• Water Pollution: Industrial wastewater treatment workflows, Biochemical Oxygen Demand (BOD), Chemical Oxygen Demand (COD) parameter testing; Eutrophication tracking;\n• Soil & Noise Pollution: Industrial heavy metal contaminations (Lead, Mercury - Minamata disease, Cadmium - Itai-itai disease); decibel mitigation boundaries (CPCB day/night noise limits);\nSolid & Hazardous Waste Management: Classifications of Municipal, Hazardous, Electronic (E-waste), and Biomedical wastes; processing methods: sanitary landfills, incineration, pyrolysis, composting;\nGlobal Climate Vectors: Greenhouse Effect mechanisms, Global Warming Potentials (GWP); Acid Rain chemical pathways (H₂SO₄ and HNO₃ formed by SO₂ and NO₂); Stratospheric Ozone layer depletion equations (Chlorofluorocarbons impact, Dobson unit measurement); international environmental protocols (Kyoto Protocol 1997 - carbon credits, Paris Agreement 2015 - 1.5°C threshold, Montreal Protocol 1987 - ODS phaseout).',
              hi: 'पारिस्थितिकी तंत्र: जैवमंडल संरचना, जैव व अजैव घटक; जैव-भू-रासायनिक चक्र (कार्बन, नाइट्रोजन चक्र); पारिस्थितिक अनुक्रमण;\nप्रदूषण वर्गीकरण एवं नियंत्रण:\n• वायु प्रदूषण: औद्योगिक उत्सर्जन, कणिकीय पदार्थ (PM2.5, PM10), नियंत्रण उपकरण (इलेक्ट्रोस्टैटिक प्रेसिपिटेटर ESP - 99%+ राख हटाता है, वेट स्क्रबर - SO₂ हटाता है);\n• जल प्रदूषण: औद्योगिक अपशिष्ट जल उपचार, बीओडी (BOD), सीओडी (COD) परीक्षण; सुपोषण (Eutrophication);\n• मृदा व ध्वनि प्रदूषण: भारी धातु संदूषण (पारा - मिनामाता रोग, कैडमियम - इटाई-इटाई रोग); CPCB द्वारा निर्धारित डेसिबल सीमाएं;\nठोस एवं खतरनाक अपशिष्ट प्रबंधन: ई-कचरा, जैव-चिकित्सा अपशिष्ट; निस्तारण विधियां: लैंडफिल, भस्मीकरण (Incineration), पायरोलिसिस, कम्पोस्टिंग;\nवैश्विक जलवायु परिवर्तन: ग्रीनहाउस प्रभाव, अम्लीय वर्षा (SO₂ व NO₂ से H₂SO₄ व HNO₃); ओजोन परत क्षरण (CFCs, डॉबसन इकाई);\nअंतर्राष्ट्रीय संधियां: मॉन्ट्रियल प्रोटोकॉल 1987 (ओजोन क्षरणकारी पदार्थ), क्योटो प्रोटोकॉल 1997 (कार्बन क्रेडिट), पेरिस समझौता 2015 (तापमान वृद्धि 1.5°C तक सीमित रखना)।',
            },
            bulletPoints: [
              { en: 'BOD (Biochemical Oxygen Demand): Higher BOD indicates higher organic pollution and lower dissolved oxygen (DO) in water.', hi: 'बीओडी (BOD): उच्च बीओडी का अर्थ अधिक कार्बनिक प्रदूषण और जल में घुली ऑक्सीजन (DO) की कमी है।' },
              { en: 'Electrostatic Precipitator (ESP): Uses high voltage electrodes (40-70 kV) to charge dust particles collected on grounded plates.', hi: 'इलेक्ट्रोस्टैटिक प्रेसिपिटेटर (ESP): उच्च वोल्टेज पर उड़ने वाली राख को 99%+ तक अलग करता है।' },
              { en: 'Montreal Protocol (1987): The most successful global treaty; phase-out of Chlorofluorocarbons (CFCs) and Halons.', hi: 'मॉन्ट्रियल प्रोटोकॉल 1987: सीएफसी और ओजोन क्षयकारी पदार्थों को समाप्त करने की वैश्विक संधि।' },
              { en: 'Minamata disease caused by Methylmercury (Hg); Itai-Itai disease caused by Cadmium (Cd).', hi: 'पारे (Hg) से मिनामाता रोग; कैडमियम (Cd) से इटाई-इटाई रोग होता है।' },
            ],
            formulas: [
              'BOD = (DO_initial - DO_final) × Dilution Factor',
              'Acid Rain Formation: SO₂ + H₂O → H₂SO₃  |  2SO₂ + O₂ + 2H₂O → 2H₂SO₄',
              'Ozone Destruction Cycle: CFCl₃ + UV → CFCl₂ + Cl•  |  Cl• + O₃ → ClO• + O₂',
              'Dobson Unit (DU): 1 DU = 0.01 mm thickness of pure ozone layer at STP',
            ],
            examRelevance: { en: 'Guaranteed 10 questions in JE CBT-2 for all branches', hi: 'जेई सीबीटी-2 में सभी शाखाओं के लिए 10 अनिवार्य प्रश्न' },
            keyTerms: ['Electrostatic Precipitator ESP', 'BOD COD', 'Montreal Protocol', 'Minamata Mercury', 'Dobson Unit'],
          },
        ],
      },
    ],
  },
];
