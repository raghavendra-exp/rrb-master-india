import type { TopicStudyGuide } from './topicStudyNotes';

export const UG_AND_GROUP_D_TOPIC_STUDY_GUIDES: Record<string, TopicStudyGuide> = {
  // =========================================================================
  // 1. NTPC UNDERGRADUATE: NUMERICAL BASICS & SIMPLIFICATION
  // =========================================================================
  'ug-numerical-basics': {
    topicId: 'ug-numerical-basics',
    title: {
      en: 'Numerical Foundations: BODMAS, Recurring Decimals, Divisibility & Surds',
      hi: 'संख्यात्मक आधारशिला: बोडमास (BODMAS), आवर्ती दशमलव, विभाज्यता एवं करणी',
    },
    subjectCategory: { en: 'Mathematics (30 Marks)', hi: 'गणित (30 अंक)' },
    targetExam: { en: 'RRB NTPC (Undergraduate Levels 2 & 3 - CEN 07/2026)', hi: 'आरआरबी एनटीपीसी 12वीं स्तर' },
    recommendedStudyTime: '3.0 Hours',
    blueprintImage: {
      src: './assets/rrb_master_curriculum.jpg',
      caption: {
        en: 'BODMAS Order of Operations & Fractional Conversion Architecture',
        hi: 'बोडमास संक्रिया क्रम एवं भिन्न रूपांतरण आर्किटेक्चर',
      },
    },
    conceptualTheory: {
      heading: {
        en: 'BODMAS Hierarchy, Recurring Decimal Rationalization & Fast Divisibility Tests',
        hi: 'बोडमास पदानुक्रम, आवर्त दशमलव का परिमेयकरण एवं त्वरित विभाज्यता परीक्षण',
      },
      deepExplanation: {
        en: 'Numerical ability forms 30% of the CBT-1 paper. (1) Strict BODMAS Operation Chain: V-BODMAS dictates: Vinculum (Bar bracket) -> Brackets (Parentheses () -> Curly {} -> Square []) -> Order/Of (multiplication having precedence over division) -> Division -> Multiplication -> Addition -> Subtraction. When consecutive divisions appear, e.g. a ÷ b ÷ c ÷ d, always evaluate strictly from LEFT to RIGHT: a × (1/b) × (1/c) × (1/d). (2) Recurring Decimals to Fractions: Pure recurring decimal 0.aaaa... = a/9; 0.abab... = ab/99; 0.abcabc... = abc/999. Mixed recurring decimal 0.abcccc... = (abcccc - ab) / 9900 (number of 9s equals count of repeating digits, number of 0s equals count of non-repeating digits). (3) Rapid Divisibility Checks: Divisibility by 7, 11, 13: Group the digits from right into triplets of 3 digits each, and compute the alternating sum. If the result is divisible by 7, 11, or 13, the entire number is divisible by that respective number. Divisibility by 72: Number must simultaneously satisfy divisibility by 8 (last 3 digits divisible by 8) and 9 (sum of digits divisible by 9). Divisibility by 88: Satisfies 8 and 11. (4) Surds and Rationalization: For expressions like 1/(√a + √b), multiply numerator and denominator by the conjugate (√a - √b) yielding (√a - √b)/(a - b). If consecutive surd differences equal 1, e.g., 1/(√9 + √8) + 1/(√8 + √7) + ... + 1/(√2 + 1), telescoping occurs, leaving only √9 - 1 = 3 - 1 = 2.',
        hi: 'एनटीपीसी 10+2 स्तर की सीबीटी-1 परीक्षा में सरलीकरण के 4-6 प्रश्न सीधे पूछे जाते हैं। (1) V-BODMAS नियम: विनिकुलम (रेखा कोष्ठक) -> छोटा कोष्ठक () -> मझला कोष्ठक {} -> बड़ा कोष्ठक [] -> Of/का (गुणा जो भाग से पहले हल होता है) -> भाग -> गुणा -> जोड़ -> घटाव। लगातार भाग (a ÷ b ÷ c) को हमेशा बाएं से दाएं हल करें: a × (1/b) × (1/c)। (2) आवर्ती दशमलव: शुद्ध आवर्ती 0.aaa... = a/9, 0.abab... = ab/99। मिश्रित आवर्ती 0.ab c̄ = (abc - ab) / 900 (जितने अंकों पर बार है उतने 9, जितने पर नहीं है उतने 0)। (3) विभाज्यता नियम: 7, 11 और 13 का संयुक्त नियम: दाईं ओर से 3-3 अंकों के जोड़े बनाकर एकांतर योग का अंतर निकालें। 72 से विभाज्यता के लिए संख्या को 8 (अंतिम 3 अंक) तथा 9 (अंकों का योग) दोनों से कटना अनिवार्य है। (4) करणी परिमेयकरण: 1/(√a + √b) = (√a - √b)/(a - b)। यदि लगातार पदों के वर्गों का अंतर 1 हो, तो टेलिस्कोपिक शृंखला में बीच के सभी पद कट जाते हैं।',
      },
      keyMechanisms: [
        {
          en: 'Consecutive Division Left-to-Right Rule: 120 ÷ 6 ÷ 4 ÷ 2 = 120 × (1/6) × (1/4) × (1/2) = 2.5. NEVER evaluate from right to left!',
          hi: 'लगातार भाग नियम: 120 ÷ 6 ÷ 4 ÷ 2 = 120 × 1/6 × 1/4 × 1/2 = 2.5। कभी भी दाईं तरफ से हल न करें।',
        },
        {
          en: 'Digital Sum Zero Rule: A digital root of 9 is treated as 0 in addition/subtraction verification, speeding up calculations fourfold.',
          hi: 'डिजिटल सम विधि: गणनाओं के सत्यापन में 9 के अंक को शून्य माना जाता है, जिससे विकल्प मिलान में भारी समय बचता है।',
        },
      ],
    },
    formulasAndLaws: [
      {
        label: 'Mixed Recurring Rationalization Formula',
        expression: '0.a_1...a_m \\overline{b_1...b_n} = \\frac{(Total\\ Number) - (Non\\ Repeating\\ Part)}{9...9 (n\\ times)\\ 0...0 (m\\ times)}',
        explanation: { en: 'Exact formula for converting any recurring decimal into p/q fraction form.', hi: 'किसी भी आवर्ती दशमलव को p/q भिन्न में बदलने का सटीक नियम।' },
      },
      {
        label: 'Telescoping Surds Summation',
        expression: '\\sum_{k=1}^{n} \\frac{1}{\\sqrt{k+1} + \\sqrt{k}} = \\sqrt{n+1} - 1',
        explanation: { en: 'Universal shortcut for consecutive square root denominator chains.', hi: 'लगातार करणी हरों के योग का सार्वत्रिक शॉर्टकट।' },
      },
    ],
    workedExamples: [
      {
        id: 'ug-math-ex1',
        level: 'CBT-1 Foundation',
        question: {
          en: 'Evaluate the expression: 48 - [25 - {15 - (8 - 6 - 2̄)}]',
          hi: 'मान ज्ञात कीजिए: 48 - [25 - {15 - (8 - 6 - 2̄)}]',
        },
        standardSolution: {
          en: 'Step 1: Evaluate vinculum bar (6 - 2) = 4.\nStep 2: Innermost parentheses: (8 - 4) = 4.\nStep 3: Curly braces: {15 - 4} = 11.\nStep 4: Square bracket: [25 - 11] = 14.\nStep 5: Final calculation: 48 - 14 = 34.',
          hi: 'चरण 1: रेखा कोष्ठक (6 - 2) = 4 हल करें।\nचरण 2: छोटा कोष्ठक: (8 - 4) = 4।\nचरण 3: मझला कोष्ठक: {15 - 4} = 11।\nचरण 4: बड़ा कोष्ठक: [25 - 11] = 14।\nचरण 5: अंतिम मान: 48 - 14 = 34।',
        },
        topperShortcut: {
          en: '⚡ 10-Second Speed Hack: Observe bar over 6-2 first. Without writing, track inside-out: 8-4=4 -> 15-4=11 -> 25-11=14 -> 48-14=34.',
          hi: '⚡ 10-सेकंड हैक: अंदर से बाहर की ओर मन ही मन हल करें: 8 - 4 = 4 -> 15 - 4 = 11 -> 25 - 11 = 14 -> 48 - 14 = 34।',
        },
      },
      {
        id: 'ug-math-ex2',
        level: 'CBT-2 Advanced',
        question: {
          en: 'Convert the mixed recurring decimal 0.384̄ into a vulgar fraction in simplest form.',
          hi: 'मिश्रित आवर्ती दशमलव 0.384̄ को सरलतम भिन्न के रूप में व्यक्त कीजिए।',
        },
        standardSolution: {
          en: 'Step 1: Identifying repeating and non-repeating digits: Total digits after decimal = 384, non-repeating part = 38.\nStep 2: Numerator = 384 - 38 = 346.\nStep 3: Denominator = one 9 (for repeating 4) and two 0s (for non-repeating 38) = 900.\nStep 4: Fraction = 346/900 = 173/450.',
          hi: 'चरण 1: कुल संख्या = 384, अनावर्ती भाग = 38।\nचरण 2: अंश = 384 - 38 = 346।\nचरण 3: हर = एक 9 (आवर्ती 4 के लिए) और दो 0 (अनावर्ती 38 के लिए) = 900।\nचरण 4: सरल रूप = 346/900 = 173/450।',
        },
        topperShortcut: {
          en: '⚡ Topper Trick: Direct formula: (384 - 38)/900 = 346/900 = 173/450. Solved in 8 seconds flat!',
          hi: '⚡ टॉपर नियम: (384 - 38)/900 = 346/900 = 173/450। 8 सेकंड में उत्तर!',
        },
      },
    ],
    commonTraps: [
      {
        en: 'Forgetting that vinculum (bar bracket) has precedence over negative signs preceding it: -(a - b) under bar becomes -(a - b) = -a + b.',
        hi: 'ऋणात्मक चिह्न के सामने रेखा कोष्ठक होने पर चिह्न परिवर्तन को भूलना सबसे आम त्रुटि है।',
      },
      {
        en: 'Confusing "Of" with multiplication: 36 ÷ 4 of 3 = 36 ÷ 12 = 3. Candidates incorrectly doing 36 ÷ 4 × 3 = 27 lose 1.33 marks!',
        hi: '"का" (Of) को साधारण गुणा समझना: 36 ÷ 4 का 3 = 36 ÷ 12 = 3। इसे 36 ÷ 4 × 3 = 27 हल करने पर -1.33 अंक कटते हैं!',
      },
    ],
    topperSpeedHacks: [
      {
        en: 'Digital Root Modulo 9 for complex multiplication options checking: match digital sum of question with digital sum of options.',
        hi: 'बड़ी गणनाओं में विकल्पों के इकाई अंक और डिजिटल सम की जांच करें, पूरी गणना कभी न करें।',
      },
    ],
    quickRevisionBulletPoints: [
      { en: 'Day 1: Master 20 V-BODMAS equations involving nested brackets and consecutive division signs.', hi: 'दिन 1: कोष्ठकों और लगातार भाग वाले 20 जटिल बोडमास प्रश्नों का अभ्यास करें।' },
      { en: 'Day 2: Practice recurring decimal rationalization and divisibility by 72, 88, 99.', hi: 'दिन 2: आवर्ती दशमलव एवं 72, 88, 99 से विभाज्यता के 15 प्रश्नों को हल करें।' },
    ],
    relatedPracticeCategory: 'Mathematics',
  },

  // =========================================================================
  // 2. NTPC UNDERGRADUATE: COMMERCIAL ARITHMETIC & EQUATIONS
  // =========================================================================
  'ug-arithmetic-equations': {
    topicId: 'ug-arithmetic-equations',
    title: {
      en: 'Commercial Arithmetic: Profit-Loss, Dishonest Dealer, SI-CI & Partnerships',
      hi: 'व्यावसायिक अंकगणित: लाभ-हानि, बेईमान दुकानदार, साधारण व चक्रवृद्धि ब्याज एवं साझेदारी',
    },
    subjectCategory: { en: 'Commercial Mathematics', hi: 'व्यावसायिक गणित' },
    targetExam: { en: 'RRB NTPC Undergraduate (CEN 07/2026)', hi: 'आरआरबी एनटीपीसी 12वीं स्तर' },
    recommendedStudyTime: '3.5 Hours',
    blueprintImage: {
      src: './assets/rrb_master_curriculum.jpg',
      caption: {
        en: 'Commercial Arithmetic Profit-Discount Matrix & CI Trees',
        hi: 'लाभ-छूट मैट्रिक्स एवं चक्रवृद्धि ब्याज वृक्ष आरेख',
      },
    },
    conceptualTheory: {
      heading: {
        en: 'CP-SP-MP Matrix, False Weights, Difference Formulas for SI vs CI & Dynamic Partnerships',
        hi: 'क्रय-विक्रय-अंकित मूल्य मैट्रिक्स, त्रुटिपूर्ण भार, SI-CI अंतर सूत्र एवं साझेदारी',
      },
      deepExplanation: {
        en: 'Commercial arithmetic carries 6 to 8 questions in NTPC CBT-1 & CBT-2. (1) Cost Price (CP), Marked Price (MP), and Selling Price (SP) Chain: MP is marked up by x% over CP, and then a discount of d% is given on MP to arrive at SP. Golden Ratio Relation: CP / MP = (100 - Discount%) / (100 + Profit%). If a loss occurs, CP / MP = (100 - Discount%) / (100 - Loss%). (2) Dishonest Dealer Concepts: Case A: Dealer sells at Cost Price but uses a false weight of w grams instead of True weight W (e.g. 900g instead of 1000g). Profit % = [Error / (True Value - Error)] × 100% = [(W - w) / w] × 100%. Case B: Dealer cheats both while buying (takes x% extra) and selling (gives y% less). Net Profit % = [(100 + x)/(100 - y) - 1] × 100%. (3) Simple vs Compound Interest Difference: For 2 years: Diff = P × (r/100)². For 3 years: Diff = P × (r/100)² × (300 + r) / 100. Effective CI Rate for 2 years at rate r%: CI rate = 2r + (r²/100)%. When compounded half-yearly, rate becomes r/2 and time periods double (2n); when quarterly, rate becomes r/4 and time becomes 4n. (4) Dynamic Partnerships: Profit share is proportional to the product of Investment (I) and Time (T): Profit_A : Profit_B = (I_A × T_A) : (I_B × T_B). When capital changes midway, use weighted capital months: (I₁ × t₁ + I₂ × t₂).',
        hi: 'व्यावसायिक अंकगणित से हर शिफ्ट में 6-8 प्रश्न आते हैं। (1) CP, MP और SP का स्वर्णिम संबंध: CP / MP = (100 - Discount%) / (100 + Profit%)। यह सूत्र बिना किसी समीकरण के सीधे क्रय मूल्य और अंकित मूल्य का अनुपात देता है। (2) बेईमान व्यापारी (Faulty Weight): यदि दुकानदार क्रय मूल्य पर बेचने का दावा करता है किंतु 1000 ग्राम के स्थान पर w ग्राम तौलता है, तो लाभ% = [(त्रुटि) / (दिया गया वास्तविक भार)] × 100 = [(1000 - w) / w] × 100%। (3) SI और CI का अंतर: 2 वर्ष हेतु अंतर D₂ = P(R/100)²। 3 वर्ष हेतु अंतर D₃ = P(R/100)² × [(300 + R)/100]। यदि ब्याज अर्धवार्षिक संयोजित हो, तो दर आधी (R/2) तथा समय दोगुना (2T) हो जाता है। (4) साझेदारी (Partnership): लाभ का अनुपात = (पूंजी × समय) के गुणनफल के बराबर होता है: P_A : P_B = (C_A × T_A) : (C_B × T_B)।',
      },
      keyMechanisms: [
        {
          en: 'Golden Formula for CP/MP: CP / MP = (100 - d) / (100 + p). Eliminates intermediate variable solving completely.',
          hi: 'CP/MP का सीधा सूत्र: CP / MP = (100 - छूट%) / (100 + लाभ%)। किसी भी मध्यवर्ती चर को माने बिना तुरंत उत्तर देता है।',
        },
        {
          en: '2-Year Effective CI Rate: At 10%, SI = 20%, CI = 21% (Diff = 1%). At 5%, SI = 10%, CI = 10.25% (Diff = 0.25%). Memorize these standard grids!',
          hi: 'प्रभावी ब्याज दर: 10% पर 2 वर्ष का SI = 20%, CI = 21% (अंतर = 1%)। 5% पर SI = 10%, CI = 10.25% (अंतर = 0.25%)।',
        },
      ],
    },
    formulasAndLaws: [
      {
        label: 'CP to MP Direct Ratio',
        expression: '\\frac{CP}{MP} = \\frac{100 - D\\%}{100 + P\\%}',
        explanation: { en: 'Connects Cost Price and Marked Price using discount and profit percentages.', hi: 'छूट एवं लाभ प्रतिशत के आधार पर क्रय व अंकित मूल्य का सीधा अनुपात।' },
      },
      {
        label: 'Difference between CI and SI for 3 Years',
        expression: 'D_3 = P \\left(\\frac{R}{100}\\right)^2 \\left(\\frac{300 + R}{100}\\right)',
        explanation: { en: 'Standard 3-year SI vs CI difference formula tested in all RRB papers.', hi: '3 वर्ष के चक्रवृद्धि एवं साधारण ब्याज के अंतर का सर्वप्रचलित सूत्र।' },
      },
    ],
    workedExamples: [
      {
        id: 'ug-arith-ex1',
        level: 'CBT-1 Foundation',
        question: {
          en: 'A shopkeeper allows a discount of 10% on the marked price and still makes a profit of 20%. If the cost price of the article is ₹450, find its marked price.',
          hi: 'एक दुकानदार अंकित मूल्य पर 10% की छूट देने के बाद भी 20% का लाभ अर्जित करता है। यदि वस्तु का क्रय मूल्य ₹450 हो, तो उसका अंकित मूल्य ज्ञात कीजिए।',
        },
        standardSolution: {
          en: 'Step 1: Apply CP/MP golden ratio: CP/MP = (100 - D)/(100 + P) = (100 - 10)/(100 + 20) = 90/120 = 3/4.\nStep 2: Given CP = ₹450 (which corresponds to 3 units).\nStep 3: 1 unit = 450 / 3 = ₹150.\nStep 4: MP = 4 units = 4 × 150 = ₹600.',
          hi: 'चरण 1: सूत्र लागू करें: CP/MP = (100 - 10)/(100 + 20) = 90/120 = 3/4।\nचरण 2: 3 इकाई (CP) = ₹450 -> 1 इकाई = ₹150।\nचरण 3: 4 इकाई (MP) = 4 × 150 = ₹600।',
        },
        topperShortcut: {
          en: '⚡ 10-Second Topper Method: MP = 450 × (120/90) = 450 × (4/3) = 600. Direct one-line multiplication!',
          hi: '⚡ 10-सेकंड हैक: MP = 450 × (120/90) = ₹600। केवल एक पंक्ति में हल!',
        },
      },
    ],
    commonTraps: [
      {
        en: 'Applying discount on Cost Price instead of Marked Price: Discount is ALWAYS computed on Marked Price (MP), never on Cost Price (CP).',
        hi: 'छूट की गणना क्रय मूल्य पर करना: छूट हमेशा अंकित मूल्य (MP) पर दी जाती है, क्रय मूल्य पर कभी नहीं।',
      },
      {
        en: 'Forgetting to convert time in half-yearly compounding: 1.5 years compounded semi-annually means n = 3 periods at r/2 rate.',
        hi: 'अर्धवार्षिक ब्याज में 1.5 वर्ष को n=3 अवधियां और दर को R/2 में बदलना न भूलें।',
      },
    ],
    topperSpeedHacks: [
      {
        en: 'Fractional Conversion of Percentages: 16.66% = 1/6, 14.28% = 1/7, 12.5% = 1/8, 11.11% = 1/9, 9.09% = 1/11. Speeds up multiplication instantly.',
        hi: 'प्रतिशतों को मानक भिन्नों में याद रखें: 16.66% = 1/6, 12.5% = 1/8, 9.09% = 1/11। गणना की गति तीन गुना बढ़ जाती है।',
      },
    ],
    quickRevisionBulletPoints: [
      { en: 'Master the CP/MP ratio shortcut and practice 10 dishonest dealer weight problems.', hi: 'CP/MP अनुपात सूत्र और बेईमान दुकानदार के 10 प्रश्नों को हल करें।' },
      { en: 'Memorize 2-year and 3-year SI-CI difference formulas and solve past TCS CBT-1 questions.', hi: '2 वर्ष एवं 3 वर्ष के SI-CI अंतर सूत्रों को कंठस्थ कर पिछले वर्षों के प्रश्न हल करें।' },
    ],
    relatedPracticeCategory: 'Mathematics',
  },

  // =========================================================================
  // 3. NTPC UNDERGRADUATE: WORK & MOVEMENT (KINEMATICS)
  // =========================================================================
  'ug-work-movement': {
    topicId: 'ug-work-movement',
    title: {
      en: 'Work & Movement: Alternate Days Work, Pipes-Leaks, Train Crossings & Boats',
      hi: 'कार्य एवं गति: एकांतर दिन कार्य, पाइप-रिसाव, रेलगाड़ी पार करने के नियम एवं नाव-धारा',
    },
    subjectCategory: { en: 'Applied Kinematics', hi: 'अनुप्रयुक्त गतिविज्ञान' },
    targetExam: { en: 'RRB NTPC Undergraduate & Level-1', hi: 'आरआरबी एनटीपीसी व ग्रुप डी' },
    recommendedStudyTime: '3.5 Hours',
    blueprintImage: {
      src: './assets/rrb_railway_signals_track.jpg',
      caption: {
        en: 'Relative Speed Vectors for Train Crossings and Efficiency Flow',
        hi: 'रेलगाड़ी सापेक्ष वेग सदिश एवं दक्षता प्रवाह आरेख',
      },
    },
    conceptualTheory: {
      heading: {
        en: 'LCM Efficiency Method, Negative Work (Pipes), Relative Velocity Models & Stream Vectors',
        hi: 'ल.स.प. दक्षता विधि, ऋणात्मक कार्य (पाइप रिसाव), सापेक्ष गति एवं धारा सदिश',
      },
      deepExplanation: {
        en: 'Time-Work and Speed-Time-Distance are high-frequency pillars in RRB exams. (1) Unit Efficiency Method: Total Work is assumed to be the LCM of given individual time periods. Efficiency = Total Units / Days taken. In alternate-day work (A on Day 1, B on Day 2), calculate the work done in a 2-day cycle. Divide total work by cycle work to find integer cycles, then compute leftover fractional work by the person whose turn begins. (2) Pipes and Cisterns: Inlet pipe does positive work (+), while leak/emptying pipe does negative work (-). If a pipe fills in x hours and leak empties in y hours (where y > x), net rate = 1/x - 1/y, filling cistern in (xy)/(y - x) hours. (3) Speed, Distance and Train Kinematics: Unit Conversion: 1 km/h = 5/18 m/s, and 1 m/s = 18/5 km/h. When a train of length L passes a stationary pole/man, Distance = L. When a train of length L₁ passes a platform/bridge of length L₂, Distance = L₁ + L₂. Relative Speed: In opposite directions, speeds ADD (S₁ + S₂). In same direction, speeds SUBTRACT (|S₁ - S₂|). Time to cross = (Total Lengths) / (Relative Speed). (4) Boats and Streams: Downstream Speed (D) = u + v (speed of boat + speed of stream). Upstream Speed (U) = u - v. Boat Speed in still water u = (D + U) / 2. Stream Speed v = (D - U) / 2.',
        hi: 'आरआरबी परीक्षाओं में कार्य-समय एवं चाल-दूरी से 5-7 प्रश्न निश्चित रूप से पूछे जाते हैं। (1) एलसीएम (LCM) दक्षता विधि: कुल कार्य को दिए गए दिनों का ल.स.प. मान लिया जाता है। दैनिक दक्षता = कुल कार्य / दिन। एकांतर दिनों (Alternate Days) में 2-दिन का एक चक्र बनाएं। कुल कार्य को चक्र के कार्य से भाग देकर पूर्ण चक्र ज्ञात करें, और शेष कार्य को अगले व्यक्ति की दक्षता से भाग दें। (2) पाइप एवं टंकी: भरने वाला पाइप धनात्मक कार्य (+) तथा रिसाव/खाली करने वाला पाइप ऋणात्मक कार्य (-) करता है। यदि भरने वाला x घंटे और रिसाव y घंटे में खाली करता है, तो टंकी भरने का समय = (xy) / (y - x)। (3) रेलगाड़ी संबंधित प्रश्न: 1 किमी/घंटा = 5/18 मीटर/सेकंड। खंभे/व्यक्ति को पार करने में तय दूरी = ट्रेन की लंबाई (L)। प्लेटफॉर्म/पुल को पार करने में तय दूरी = L₁ + L₂। विपरीत दिशा में सापेक्ष चाल जुड़ती है (S₁ + S₂), समान दिशा में सापेक्ष चाल घटती है (|S₁ - S₂|)। (4) नाव एवं धारा: धारा के अनुकूल चाल D = u + v, धारा के प्रतिकूल चाल U = u - v। शांत जल में नाव की चाल u = (D + U)/2, धारा की चाल v = (D - U)/2।',
      },
      keyMechanisms: [
        {
          en: 'M₁D₁H₁/W₁ = M₂D₂H₂/W₂ Rule: Universal proportionality equation connecting Men, Days, Hours and Work units.',
          hi: 'M₁D₁H₁/W₁ = M₂D₂H₂/W₂ नियम: व्यक्ति, दिन, घंटे और कार्य इकाइयों को जोड़ने वाला सार्वभौमिक सूत्र।',
        },
        {
          en: 'Train Length Summation Invariance: In train crossings, total distance traversed is ALWAYS L₁ + L₂, regardless of whether they move in opposite or same directions.',
          hi: 'दूरी अपरिवर्तनीयता: रेलगाड़ियों के एक-दूसरे को पार करने में तय दूरी हमेशा दोनों की लंबाइयों का योग (L₁ + L₂) होती है, चाहे दिशा समान हो या विपरीत।',
        },
      ],
    },
    formulasAndLaws: [
      {
        label: 'Relative Speed Crossing Time',
        expression: 'T = \\frac{L_1 + L_2}{S_1 \\pm S_2}',
        explanation: { en: 'Use (+) when moving in opposite directions, and (-) when moving in the same direction.', hi: 'विपरीत दिशा में चाल जोड़ें (+) और समान दिशा में चाल घटाएं (-)।' },
      },
      {
        label: 'Still Water Boat Speed',
        expression: 'u = \\frac{D + U}{2} \\quad | \\quad v = \\frac{D - U}{2}',
        explanation: { en: 'Computes boat speed and stream velocity from downstream and upstream values.', hi: 'अनुकूल व प्रतिकूल चालों से नाव व धारा की चाल ज्ञात करने का मानक सूत्र।' },
      },
    ],
    workedExamples: [
      {
        id: 'ug-work-ex1',
        level: 'CBT-1 Foundation',
        question: {
          en: 'A 240 m long train traveling at 72 km/h crosses a platform in 20 seconds. Find the length of the platform.',
          hi: '72 किमी/घंटा की गति से चल रही 240 मीटर लंबी रेलगाड़ी एक प्लेटफॉर्म को 20 सेकंड में पार करती है। प्लेटफॉर्म की लंबाई ज्ञात कीजिए।',
        },
        standardSolution: {
          en: 'Step 1: Convert speed into m/s: 72 × (5/18) = 20 m/s.\nStep 2: Total distance covered in 20 s = Speed × Time = 20 × 20 = 400 m.\nStep 3: Total distance = Train Length + Platform Length -> 400 = 240 + P.\nStep 4: Platform Length P = 400 - 240 = 160 meters.',
          hi: 'चरण 1: चाल को मीटर/सेकंड में बदलें: 72 × (5/18) = 20 मी/से।\nचरण 2: 20 सेकंड में तय कुल दूरी = 20 × 20 = 400 मीटर।\nचरण 3: कुल दूरी = ट्रेन की लंबाई + प्लेटफॉर्म की लंबाई -> 400 = 240 + P।\nचरण 4: प्लेटफॉर्म की लंबाई = 400 - 240 = 160 मीटर।',
        },
        topperShortcut: {
          en: '⚡ 10-Second Calculation: Distance = 20 m/s × 20 s = 400 m. Platform = 400 - 240 = 160 m. Instant mental math!',
          hi: '⚡ 10-सेकंड हैक: कुल दूरी = 20 × 20 = 400 मी। प्लेटफॉर्म = 400 - 240 = 160 मीटर।',
        },
      },
    ],
    commonTraps: [
      {
        en: 'Forgetting to convert km/h to m/s before dividing by seconds: Multiplying by 18/5 instead of 5/18 ruins the entire calculation.',
        hi: 'किमी/घंटे को मी/सेकंड में बदलते समय 5/18 के स्थान पर भूलवश 18/5 से गुणा करना।',
      },
    ],
    topperSpeedHacks: [
      {
        en: 'Speed Multiples of 18 km/h: 18 km/h = 5 m/s, 36 km/h = 10 m/s, 54 km/h = 15 m/s, 72 km/h = 20 m/s, 90 km/h = 25 m/s. Memorizing multiples saves conversion steps.',
        hi: '18 का पहाड़ा याद रखें: 18 km/h = 5 m/s, 36 = 10 m/s, 54 = 15 m/s, 72 = 20 m/s, 90 = 25 m/s। रूपांतरण का समय शून्य हो जाता है।',
      },
    ],
    quickRevisionBulletPoints: [
      { en: 'Practice 15 train crossing problems involving bridges, opposite trains, and moving men.', hi: 'प्लेटफॉर्म, खंभे और विपरीत दिशा वाली ट्रेनों के 15 प्रश्नों का अभ्यास करें।' },
      { en: 'Solve 10 alternate-day work scenarios using integer cycle division.', hi: 'एकांतर दिन वाले कार्य-समय के 10 प्रश्नों को चक्र विधि से हल करें।' },
    ],
    relatedPracticeCategory: 'Mathematics',
  },

  // =========================================================================
  // 4. NTPC UNDERGRADUATE: BASIC MENSURATION & ELEMENTARY ALGEBRA
  // =========================================================================
  'ug-basic-mensuration-algebra': {
    topicId: 'ug-basic-mensuration-algebra',
    title: {
      en: 'Mensuration & Elementary Algebra: 2D/3D Profiles & Quadratic Identities',
      hi: 'क्षेत्रमिति एवं प्रारंभिक बीजगणित: 2D/3D आकृतियां एवं द्विघात सर्वसमिकाएं',
    },
    subjectCategory: { en: 'Geometry & Algebra', hi: 'ज्यामिति एवं बीजगणित' },
    targetExam: { en: 'RRB NTPC Undergraduate (CEN 07/2026)', hi: 'आरआरबी एनटीपीसी 12वीं स्तर' },
    recommendedStudyTime: '3.0 Hours',
    blueprintImage: {
      src: './assets/rrb_master_curriculum.jpg',
      caption: {
        en: '2D/3D Mensuration Solid Geometries and Algebraic Expansions',
        hi: '2D/3D क्षेत्रमिति ठोस ज्यामितियां एवं बीजगणितीय प्रसार',
      },
    },
    conceptualTheory: {
      heading: {
        en: 'Perimeter, Pathway Areas, Solid Volume Invariance & Algebraic Reciprocal Power Chains',
        hi: 'परिमाप, रास्तों का क्षेत्रफल, ठोस आयतन अपरिवर्तनीयता एवं x + 1/x बीजगणित शृंखलाएं',
      },
      deepExplanation: {
        en: 'Mensuration and Algebra contribute 4 to 6 marks in CBT-1 and CBT-2. (1) Pathway Inside/Outside a Rectangular Field: For a rectangular field of length L and breadth B with a pathway of width w: Area of outer path = 2w(L + B + 2w). Area of inner path = 2w(L + B - 2w). Area of cross roads in the center = w(L + B - w). (2) 3D Solid Geometry and Melting Invariance: When one solid is melted and recast into another (e.g. sphere melted into small cones), Total Volume remains CONSTANT: Number of recast objects n = (Volume of original solid) / (Volume of one smaller object). Volume of Cylinder = πr²h, Total Surface Area = 2πr(r + h). Volume of Cone = (1/3)πr²h, Slant height l = √(r² + h²), Curved Surface Area = πrl. Volume of Sphere = (4/3)πr³, Surface Area = 4πr². Volume of Hemisphere = (2/3)πr³, Total Surface Area = 3πr². (3) Algebraic Reciprocal Power Ladders: If x + 1/x = k, then: x² + 1/x² = k² - 2; x³ + 1/x³ = k³ - 3k; x⁴ + 1/x⁴ = (k² - 2)² - 2. If x - 1/x = k, then: x² + 1/x² = k² + 2; x³ - 1/x³ = k³ + 3k. (4) Quadratic Equations: ax² + bx + c = 0. Sum of roots α + β = -b/a, Product of roots αβ = c/a. Discriminant Δ = b² - 4ac: if Δ > 0 (real and distinct), Δ = 0 (real and equal), Δ < 0 (imaginary/complex roots).',
        hi: 'क्षेत्रमिति एवं बीजगणित के 4-6 प्रश्न निश्चित रूप से आते हैं। (1) आयताकार मैदान में रास्तों का क्षेत्रफल: L लंबाई व B चौड़ाई वाले मैदान के चारों ओर w चौड़े बाहरी रास्ते का क्षेत्रफल = 2w(L + B + 2w)। भीतरी रास्ते का क्षेत्रफल = 2w(L + B - 2w)। बीचों-बीच परस्पर काटते रास्तों का क्षेत्रफल = w(L + B - w)। (2) पिघलाकर नए ठोस बनाना (Melting Invariance): जब किसी ठोस को पिघलाकर छोटी वस्तुएं बनाई जाती हैं, तो कुल आयतन समान रहता है। छोटी वस्तुओं की संख्या n = (मूल ठोस का आयतन) / (एक छोटी वस्तु का आयतन)। बेलन का आयतन = πr²h, शंकु का आयतन = 1/3 πr²h, गोले का आयतन = 4/3 πr³, अर्धगोले का संपूर्ण पृष्ठ = 3πr²। (3) बीजगणित x + 1/x शृंखला: यदि x + 1/x = k, तो x² + 1/x² = k² - 2 तथा x³ + 1/x³ = k³ - 3k। यदि x - 1/x = k, तो x² + 1/x² = k² + 2 तथा x³ - 1/x³ = k³ + 3k। (4) द्विघात समीकरण: ax² + bx + c = 0। मूलों का योग α + β = -b/a, मूलों का गुणनफल αβ = c/a। विविक्तकर (Discriminant) Δ = b² - 4ac।',
      },
      keyMechanisms: [
        {
          en: 'Hemisphere TSA vs CSA Trap: Curved Surface Area is 2πr², but Total Surface Area includes circular base (2πr² + πr² = 3πr²).',
          hi: 'अर्धगोला संपूर्ण पृष्ठ: वक्र पृष्ठ 2πr² होता है, किंतु संपूर्ण पृष्ठ में आधार का क्षेत्रफल जुड़ने से 3πr² बनता है।',
        },
        {
          en: 'x + 1/x = √3 Identity: If x + 1/x = √3, then x³ + 1/x³ = 0, which implies x⁶ + 1 = 0 or x⁶ = -1. Standard TCS question shortcut!',
          hi: 'x + 1/x = √3 सर्वसमिका: इससे x³ + 1/x³ = 0 होता है, जिसका अर्थ है x⁶ = -1। यह प्रश्न सीधे परीक्षा में पूछा जाता है।',
        },
      ],
    },
    formulasAndLaws: [
      {
        label: 'Cubic Reciprocal Identity',
        expression: 'x^3 + \\frac{1}{x^3} = k^3 - 3k \\quad \\text{when } x + \\frac{1}{x} = k',
        explanation: { en: 'Evaluates sum of cubes in seconds without expanding polynomial cubes.', hi: 'बिना लंबा विस्तार किए घनों का योग ज्ञात करने का सूत्र।' },
      },
      {
        label: 'Volume of Sphere and Cone Ratio',
        expression: 'V_{\\text{sphere}} = \\frac{4}{3}\\pi r^3 \\quad | \\quad V_{\\text{cone}} = \\frac{1}{3}\\pi r^2 h',
        explanation: { en: 'Core volume formulas used in metal recasting and melting questions.', hi: 'धातु को पिघलाकर नए आकार देने वाले प्रश्नों के मूल सूत्र।' },
      },
    ],
    workedExamples: [
      {
        id: 'ug-mens-ex1',
        level: 'CBT-1 Foundation',
        question: {
          en: 'If x + 1/x = 4, find the numerical value of x³ + 1/x³.',
          hi: 'यदि x + 1/x = 4 हो, तो x³ + 1/x³ का संख्यात्मक मान ज्ञात कीजिए।',
        },
        standardSolution: {
          en: 'Step 1: Formula for x³ + 1/x³ when x + 1/x = k is k³ - 3k.\nStep 2: Here k = 4.\nStep 3: k³ - 3k = 4³ - 3(4) = 64 - 12 = 52.',
          hi: 'चरण 1: सूत्र: x³ + 1/x³ = k³ - 3k।\nचरण 2: k = 4 रखने पर:\nचरण 3: 4³ - 3(4) = 64 - 12 = 52।',
        },
        topperShortcut: {
          en: '⚡ 5-Second Mental Calculation: 4³ - 3(4) = 64 - 12 = 52. Zero rough work needed!',
          hi: '⚡ 5-सेकंड गणना: 4³ - 12 = 52। बिना पेन उठाए उत्तर दें!',
        },
      },
    ],
    commonTraps: [
      {
        en: 'Forgetting to square the pathway width in corner overlaps: Outer path is 2w(L + B + 2w), not 2w(L + B).',
        hi: 'रास्ते के क्षेत्रफल में कोनों के ओवरलैप (+2w) को छोड़ देना।',
      },
    ],
    topperSpeedHacks: [
      {
        en: 'Value Substitution for Symmetrical Polynomials: When questions ask for (a³ + b³ + c³ - 3abc) with conditions like a + b + c = 0, substitute simple integer values like a=1, b=1, c=-2.',
        hi: 'सममित बीजगणितीय व्यंजकों में a=1, b=1, c=-2 जैसे मान रखकर 5 सेकंड में विकल्प जांचें।',
      },
    ],
    quickRevisionBulletPoints: [
      { en: 'Memorize formulas for cylinder, cone, sphere, frustum, and equilateral triangle.', hi: 'बेलन, शंकु, गोला, छिन्नक और समबाहु त्रिभुज के सभी सूत्र कंठस्थ करें।' },
      { en: 'Practice 10 questions on x + 1/x reciprocal power transformations.', hi: 'x + 1/x घात रूपांतरण के 10 प्रश्नों को हल करें।' },
    ],
    relatedPracticeCategory: 'Mathematics',
  },

  // =========================================================================
  // 5. NTPC UNDERGRADUATE: ALPHANUMERIC CODING & REASONING FOUNDATIONS
  // =========================================================================
  'ug-alphanumeric-coding': {
    topicId: 'ug-alphanumeric-coding',
    title: {
      en: 'Alphanumeric Reasoning: Coding-Decoding, Letter Chains & Operator Substitution',
      hi: 'वर्ण-संख्यात्मक रीजनिंग: कोडिंग-डिकोडिंग, अक्षर शृंखला एवं गणितीय संक्रियाएं',
    },
    subjectCategory: { en: 'General Intelligence (30 Marks)', hi: 'सामान्य बुद्धिमत्ता (30 अंक)' },
    targetExam: { en: 'RRB NTPC Undergraduate (CEN 07/2026)', hi: 'आरआरबी एनटीपीसी 12वीं स्तर' },
    recommendedStudyTime: '3.0 Hours',
    blueprintImage: {
      src: './assets/rrb_master_curriculum.jpg',
      caption: {
        en: 'Alphabetical Positional Values & Opposites (Sum 27) Matrix',
        hi: 'वर्णमाला क्रमांक एवं विपरीत अक्षर (योग 27) मैट्रिक्स',
      },
    },
    conceptualTheory: {
      heading: {
        en: 'EJOTY Coordinate System, Reverse Complement Pairs (Sum 27) & Direct Symbol Substitution',
        hi: 'EJOTY स्थिति तंत्र, विपरीत अक्षर युग्म (योग 27) एवं प्रत्यक्ष चिह्न प्रतिस्थापन',
      },
      deepExplanation: {
        en: 'General Intelligence constitutes 30 questions in CBT-1. (1) Alphabet Positional Grid: EJOTY establishes benchmarks at 5, 10, 15, 20, 25. CFILORUX gives multiples of 3 (3, 6, 9, 12, 15, 18, 21, 24). Reverse Positional Values: Reverse rank = 27 - Forward rank. Opposites (Sum = 27): A-Z (AZad), B-Y (BoY), C-X (CruX), D-W (Dew), E-V (EVen), F-U (FUll), G-T (GT Road), H-S (High School), I-R (Indian Railway), J-Q (Jungle Queen), K-P (KanPur), L-O (LOve), M-N (MaN). (2) Coding-Decoding Paradigms: Direct Letter Shift (+1, -2, prime shifts); Cross Coding (first letter coded to last or middle splits); Consonant/Vowel Differentiated Coding (vowels replaced by next vowel A->E->I->O->U, consonants by +1); Total Letter Count / Digit Sum coding. (3) Mathematical Operations: Substitution of operators where + means ÷, - means ×, etc. Always re-write the expression with substituted symbols and immediately apply strict BODMAS hierarchy. (4) Alphanumeric Symbol Series: Questions test "How many numbers are immediately preceded by a symbol and followed by a letter?" Use systematic abbreviation: [Symbol - Number - Letter] and scan only for the rarest component (usually symbols) to prevent eye fatigue.',
        hi: 'रीजनिंग में कोडिंग-डिकोडिंग और गणितीय संक्रियाओं के 5-7 प्रश्न निश्चित रूप से पूछे जाते हैं। (1) वर्णमाला स्थान मान: EJOTY (5, 10, 15, 20, 25) तथा CFILORUX (3 का पहाड़ा)। विपरीत अक्षर (योग 27) याद रखने के स्मृति सूत्र: A-Z (आज़ाद), B-Y (बॉय), C-X (क्रैक्स), D-W (ड्यू), E-V (इवनिंग), F-U (फन), G-T (जीटी रोड), H-S (हाई स्कूल), I-R (इंडियन रेलवे), J-Q (जंगल क्वीन), K-P (कानपुर), L-O (लव), M-N (मन)। (2) कोडिंग के प्रकार: अक्षरों का आगे-पीछे विस्थापन, क्रॉस कोडिंग (तिर्यक विस्थापन), स्वर/व्यंजन आधारित कोडिंग। (3) गणितीय संक्रियाएं (Mathematical Operations): जब प्रतीकों का अर्थ बदला जाए (+ का अर्थ ÷), तो नए चिह्नों को लिखकर तुरंत बोडमास (BODMAS) नियम से हल करें। (4) वर्ण-संख्या-प्रतीक शृंखला: "ऐसे कितने अंक हैं जिनके तुरंत पहले प्रतीक और बाद में अक्षर हो?" इसके लिए [प्रतीक - अंक - अक्षर] का पैटर्न बनाकर केवल प्रतीकों को स्कैन करें।',
      },
      keyMechanisms: [
        {
          en: 'Opposite Letters Sum Rule: The forward positional rank of any letter plus the forward positional rank of its opposite letter ALWAYS equals 27 (e.g. G=7, T=20 -> 7+20=27).',
          hi: 'विपरीत अक्षर योग 27: किसी भी अक्षर और उसके विपरीत अक्षर के क्रमांकों का योग हमेशा 27 होता है (G=7, T=20 -> 27)।',
        },
        {
          en: 'BODMAS in Operator Substitution: After replacing symbols, evaluate division and multiplication FIRST before addition. Examiner purposefully designs options based on left-to-right evaluation errors.',
          hi: 'चिह्न बदलने के बाद बोडमास लागू करना: पहले भाग और गुणा करें, फिर जोड़ और घटाव।',
        },
      ],
    },
    formulasAndLaws: [
      {
        label: 'Reverse Alphabet Rank',
        expression: '\\text{Reverse Rank} = 27 - \\text{Forward Rank}',
        explanation: { en: 'Instantly computes the position of any letter from Z backwards.', hi: 'Z से उल्टी दिशा में किसी भी अक्षर का क्रमांक निकालने का सूत्र।' },
      },
    ],
    workedExamples: [
      {
        id: 'ug-reas-ex1',
        level: 'CBT-1 Foundation',
        question: {
          en: 'If RAILWAY is coded as SBJMXBZ, how will STATION be coded in that same pattern?',
          hi: 'यदि RAILWAY को SBJMXBZ के रूप में कोडित किया जाता है, तो STATION को उसी कोड में कैसे लिखा जाएगा?',
        },
        standardSolution: {
          en: 'Step 1: Analyze shifts: R(+1)->S, A(+1)->B, I(+1)->J, L(+1)->M, W(+1)->X, A(+1)->B, Y(+1)->Z. Constant +1 shift.\nStep 2: Apply +1 shift to STATION:\nS(+1) = T\nT(+1) = U\nA(+1) = B\nT(+1) = U\nI(+1) = J\nO(+1) = P\nN(+1) = O\nStep 3: Result: TUBUJPO.',
          hi: 'चरण 1: विस्थापन देखें: R+1=S, A+1=B, I+1=J... प्रत्येक अक्षर में +1 की वृद्धि है।\nचरण 2: STATION पर +1 लागू करें:\nS->T, T->U, A->B, T->U, I->J, O->P, N->O।\nचरण 3: अभीष्ट कोड = TUBUJPO।',
        },
        topperShortcut: {
          en: '⚡ Elimination Hack: Look at first and last letters: S->T, N->O. Check options starting with T and ending with O. Eliminates 3 options in 4 seconds!',
          hi: '⚡ विकल्प निष्कासन: प्रथम अक्षर T और अंतिम अक्षर O होगा। केवल विकल्पों के प्रथम और अंतिम अक्षर देखकर 4 सेकंड में उत्तर चुनें!',
        },
      },
    ],
    commonTraps: [
      {
        en: 'Confusing "preceded by" with "followed by": "X preceded by Y" means Y comes BEFORE X (Y X). "X followed by Z" means Z comes AFTER X (X Z). Reversing this flips the answer.',
        hi: '"पहले" (Preceded) और "बाद" (Followed) में भ्रमित होना: "X के ठीक पहले Y" = Y X, "X के ठीक बाद Z" = X Z।',
      },
    ],
    topperSpeedHacks: [
      {
        en: 'Option Elimination using First & Last Letters: In coding questions, never write out the full word; check first letter and last letter across choices to find the unique option.',
        hi: 'कोडिंग में पूरा शब्द न लिखें; पहले और अंतिम अक्षर से सीधे सही विकल्प का चयन करें।',
      },
    ],
    quickRevisionBulletPoints: [
      { en: 'Memorize all 13 opposite letter pairs and practice backward alphabet counting.', hi: 'सभी 13 विपरीत अक्षर युग्मों को कंठस्थ करें।' },
      { en: 'Solve 20 mathematical symbol substitution questions adhering strictly to BODMAS.', hi: 'गणितीय संक्रियाओं के 20 प्रश्नों का अभ्यास करें।' },
    ],
    relatedPracticeCategory: 'General Intelligence',
  },

  // =========================================================================
  // 6. NTPC UNDERGRADUATE: DIRECTION SENSE, BLOOD RELATIONS & VENN
  // =========================================================================
  'ug-direction-family-visual': {
    topicId: 'ug-direction-family-visual',
    title: {
      en: 'Analytical Reasoning: 8-Point Direction Vectors, Shadows & Family Trees',
      hi: 'विश्लेषणात्मक रीजनिंग: 8-दिशा सदिश, परछाई के नियम एवं रक्त संबंध वृक्ष',
    },
    subjectCategory: { en: 'General Intelligence', hi: 'सामान्य बुद्धिमत्ता' },
    targetExam: { en: 'RRB NTPC Undergraduate & Level-1', hi: 'आरआरबी एनटीपीसी व ग्रुप डी' },
    recommendedStudyTime: '3.0 Hours',
    blueprintImage: {
      src: './assets/rrb_master_curriculum.jpg',
      caption: {
        en: '8-Cardinal Direction Compass and Family Tree Generation Levels',
        hi: '8-दिशा कंपास एवं रक्त संबंध पीढ़ी स्तर आरेख',
      },
    },
    conceptualTheory: {
      heading: {
        en: 'Cardinal Direction Angles, Sunrise/Sunset Shadow Invariance & Generation Hierarchy Trees',
        hi: 'प्रधान दिशाएं एवं कोण, सूर्योदय/सूर्यास्त परछाई नियम एवं पीढ़ी पदानुक्रम वृक्ष',
      },
      deepExplanation: {
        en: 'Direction Sense and Blood Relations are mandatory 4 to 6 questions in all RRB papers. (1) 8-Point Compass & Turning Angles: North (0°/360°), East (90°), South (180°), West (270°). Inter-cardinal directions: NE (45°), SE (135°), SW (225°), NW (315°). Right turn is ALWAYS 90° Clockwise; Left turn is ALWAYS 90° Counter-Clockwise. Net angle rotation = (Sum of CW angles) - (Sum of CCW angles). Shortest Distance between start and finish points: Always apply Pythagoras theorem: Distance = √(Δx² + Δy²). (2) Shadow Invariance Laws: Case 1: At SUNRISE (Sun is in East), shadows fall towards the WEST. If a person faces North, shadow is to their LEFT. If a person faces South, shadow is to their RIGHT. Case 2: At SUNSET (Sun is in West), shadows fall towards the EAST. If facing North, shadow is to their RIGHT; if facing South, shadow is to their LEFT. Case 3: At NOON (12:00 PM), Sun is overhead, so NO shadow is formed. (3) Blood Relations Generation Matrix: Always map standard symbols: Males = [+], Females = [-], Married couple = [A <=> B], Siblings = [A - B], Generation gap = vertical line. Generations: Level +2 (Grandparents), Level +1 (Parents, Uncles, Aunts), Level 0 (Self, Siblings, Cousins, Spouse), Level -1 (Children, Nephews, Nieces), Level -2 (Grandchildren). (4) Venn Diagrams: Identify categorical relationships: Universal inclusion (All A are B), Intersecting (Some A are B), Disjoint (No A is B). Common RRB trap: "Women, Mothers, Doctors" -> All Mothers are Women (nested circle), Doctors intersect both (some doctors are mothers, some women, some men).',
        hi: 'दिशा परीक्षण और रक्त संबंध से 4-6 प्रश्न हर परीक्षा में पूछे जाते हैं। (1) 8-दिशाएं और कोण: उत्तर (0°), पूर्व (90°), दक्षिण (180°), पश्चिम (270°)। दायां मुड़ना = 90° दक्षिणावर्त (Clockwise), बायां मुड़ना = 90° वामावर्त (Anticlockwise)। न्यूनतम सीधी दूरी हेतु पाइथागोरस प्रमेय लागू करें: d = √(x² + y²)। (2) परछाई (Shadow) के अकाट्य नियम: सूर्योदय के समय (सूर्य पूर्व में): परछाई हमेशा पश्चिम दिशा में गिरती है। उत्तर की ओर मुंह करने वाले के बाईं ओर, तथा दक्षिण की ओर मुंह करने वाले के दाईं ओर। सूर्यास्त के समय (सूर्य पश्चिम में): परछाई हमेशा पूर्व दिशा में गिरती है। दोपहर 12 बजे कोई परछाई नहीं बनती। (3) रक्त संबंध पीढ़ी वृक्ष: पुरुष = [+], महिला = [-], विवाहित जोड़ा = [A <=> B], भाई-बहन = [A - B], पीढ़ी अंतर = लंबवत रेखा (|)। (4) वेन आरेख: सभी माताएं महिलाएं हैं (पूर्ण समावेशन), जबकि डॉक्टर दोनों को काटता है।',
      },
      keyMechanisms: [
        {
          en: 'Pythagorean Triplets for Direction: Common distance triplets in RRB questions: 3-4-5, 5-12-13, 6-8-10, 8-15-17, 7-24-25, 9-40-41. Recognizing triplets gives the distance in 2 seconds.',
          hi: 'पाइथागोरस त्रिक (Pythagorean Triplets): 3-4-5, 5-12-13, 8-15-17, 7-24-25। इन्हें याद रखने से दूरी बिना गणना के सीधे ज्ञात हो जाती है।',
        },
        {
          en: 'Pointing to a Photograph Strategy: Break the statement into pieces starting from "My/मेरे": "He is the son of my father\'s only son" -> My father\'s only son = Myself -> His son = My son.',
          hi: 'तस्वीर की ओर इशारा वाले प्रश्न: हमेशा "मेरे" शब्द से उल्टा शुरू करें: "वह मेरे पिता के इकलौते पुत्र का बेटा है" -> पिता का इकलौता पुत्र = स्वयं -> उसका बेटा = मेरा बेटा।',
        },
      ],
    },
    formulasAndLaws: [
      {
        label: 'Net Angular Rotation',
        expression: '\\theta_{\\text{net}} = |\\sum \\text{Clockwise Turns} - \\sum \\text{Anticlockwise Turns}|',
        explanation: { en: 'Calculates final facing direction without drawing multiple intermediate diagrams.', hi: 'बिना बार-बार चित्र बनाए अंतिम मुख की दिशा ज्ञात करने का सूत्र।' },
      },
    ],
    workedExamples: [
      {
        id: 'ug-dir-ex1',
        level: 'CBT-1 Foundation',
        question: {
          en: 'One morning after sunrise, Suresh was standing facing a pole. The shadow of the pole fell exactly to his right. Which direction was Suresh facing?',
          hi: 'एक सुबह सूर्योदय के बाद, सुरेश एक खंभे के सामने खड़ा था। खंभे की परछाई ठीक उसके दाईं ओर पड़ रही थी। सुरेश का मुख किस दिशा में था?',
        },
        standardSolution: {
          en: 'Step 1: Time is morning (after sunrise), so Sun is in the EAST.\nStep 2: Therefore, all shadows fall towards the WEST.\nStep 3: The shadow falls to Suresh\'s RIGHT. This means WEST is to Suresh\'s right side.\nStep 4: If West is to someone\'s right, the person must be facing SOUTH.',
          hi: 'चरण 1: समय सूर्योदय का है, अतः सूर्य पूर्व दिशा में है।\nचरण 2: इसलिए सभी परछाइयां पश्चिम दिशा में गिरेंगी।\nचरण 3: परछाई सुरेश के दाईं ओर है, अर्थात पश्चिम दिशा सुरेश के दाएं हाथ की तरफ है।\nचरण 4: यदि पश्चिम दाएं हाथ की तरफ हो, तो सुरेश का मुख दक्षिण दिशा में होगा।',
        },
        topperShortcut: {
          en: '⚡ 5-Second Sunrise Shadow Rule: Right = South, Left = North. Question says shadow to right -> Answer is SOUTH!',
          hi: '⚡ 5-सेकंड सूर्योदय नियम: दायां = दक्षिण, बायां = उत्तर। प्रश्न में परछाई दाईं ओर है -> उत्तर = दक्षिण!',
        },
      },
    ],
    commonTraps: [
      {
        en: 'Assuming gender from names: In blood relations, NEVER deduce gender from names like "Kiran", "Suman", or "Bobby" unless specified by pronouns or relations.',
        hi: 'नाम से लिंग का अनुमान लगाना: रक्त संबंध में जब तक स्पष्ट रूप से पिता, माता, भाई या सर्वनाम न दिया हो, नाम से पुरुष या महिला न मानें।',
      },
    ],
    topperSpeedHacks: [
      {
        en: 'Net Angle Cancellation: A person turns 45° CW, 90° CCW, 135° CW. Net = (45 + 135) - 90 = 180 - 90 = 90° CW from original heading.',
        hi: 'कोणों का रद्दीकरण: दक्षिणावर्त कोणों को जोड़ें, वामावर्त को घटाएं। केवल परिणामी कोण ही मूल दिशा से घूमें।',
      },
    ],
    quickRevisionBulletPoints: [
      { en: 'Master sunrise and sunset shadow rules until instant recall is achieved.', hi: 'सूर्योदय एवं सूर्यास्त परछाई नियमों का मौखिक अभ्यास करें।' },
      { en: 'Draw standard generation trees for 15 complex coded family relation statements.', hi: 'कोडेड रक्त संबंध के 15 प्रश्नों के पीढ़ी वृक्ष बनाएं।' },
    ],
    relatedPracticeCategory: 'General Intelligence',
  },

  // =========================================================================
  // 7. NTPC UNDERGRADUATE: CLASS 10 CBSE APPLIED SCIENCE
  // =========================================================================
  'ug-applied-science-10th': {
    topicId: 'ug-applied-science-10th',
    title: {
      en: 'Class 10 CBSE Applied Science: Optics, Circuits, Periodic Classification & Biology',
      hi: '10वीं सीबीएसई अनुप्रयुक्त विज्ञान: प्रकाशिकी, विद्युत परिपथ, आवर्त सारणी एवं जीव विज्ञान',
    },
    subjectCategory: { en: 'General Science & Life Science', hi: 'सामान्य एवं जीव विज्ञान' },
    targetExam: { en: 'RRB NTPC (UG) & Group D Level-1', hi: 'आरआरबी एनटीपीसी व ग्रुप डी' },
    recommendedStudyTime: '4.0 Hours',
    blueprintImage: {
      src: './assets/rrb_physics_optics_circuits.jpg',
      caption: {
        en: 'Ray Optics Mirror/Lens Sign Conventions and Electrical Ohm Circuits',
        hi: 'किरण प्रकाशिकी दर्पण/लेंस चिह्न परिपाटी एवं विद्युत परिपथ आरेख',
      },
    },
    conceptualTheory: {
      heading: {
        en: 'Snell\'s Law, Mirror/Lens Equations, Ohm\'s Law, Modern Periodic Table & Human Physiology',
        hi: 'स्नेल का नियम, दर्पण/लेंस सूत्र, ओम का नियम, आधुनिक आवर्त सारणी एवं मानव शरीर क्रिया विज्ञान',
      },
      deepExplanation: {
        en: 'Science constitutes 15 to 25 marks across NTPC and Group D. (1) Ray Optics & Reflection/Refraction: Mirror Formula: 1/f = 1/v + 1/u. Magnification m = -v/u = h_i / h_o. Focal length of concave mirror is NEGATIVE, convex mirror is POSITIVE. Lens Formula: 1/f = 1/v - 1/u. Magnification m = +v/u. Power of a Lens P = 1/f (in meters), measured in Dioptres (D). Converging lens (convex) has positive power (+D); diverging lens (concave) has negative power (-D). Snell\'s Law: n₁ sin i = n₂ sin r. Total Internal Reflection (TIR) occurs when light travels from denser to rarer medium and angle of incidence exceeds critical angle (θ_c = sin⁻¹(1/n)). (2) Electricity & Heating Effect: Ohm\'s Law: V = IR. Resistance R = ρ(L/A). In series: R_eq = R₁ + R₂; in parallel: 1/R_eq = 1/R₁ + 1/R₂. Joule\'s Heating Law: H = I²Rt. Electric Power P = VI = I²R = V²/R. 1 commercial unit of electricity (1 kWh) = 3.6 × 10⁶ Joules. (3) Chemistry & Periodic Trends: Modern Periodic Law (Moseley, 1913): Properties are periodic functions of ATOMIC NUMBER (Z). 18 Groups, 7 Periods. Trends across a period (L to R): Atomic radius DECREASES, Electronegativity INCREASES, Ionization energy INCREASES. Trends down a group: Atomic radius INCREASES, Metallic character INCREASES. pH Scale: pH < 7 (Acidic), pH = 7 (Neutral), pH > 7 (Basic). Universal indicators: Litmus turns RED in acid, BLUE in base. Phenolphthalein is COLORLESS in acid, PINK in base. (4) Life Processes & Biology: Human Heart has 4 chambers: Right atrium receives deoxygenated blood from vena cava, right ventricle pumps to lungs via pulmonary artery (carries deoxygenated blood); left atrium receives oxygenated blood from pulmonary vein, left ventricle pumps to body via aorta. Functional unit of kidney = Nephron (filtration in Bowman\'s capsule/glomerulus). Master gland = Pituitary gland.',
        hi: 'एनटीपीसी और ग्रुप डी में विज्ञान का 15-25 अंकों का सबसे ठोस भार है। (1) प्रकाशिकी: दर्पण सूत्र: 1/f = 1/v + 1/u, आवर्धन m = -v/u। लेंस सूत्र: 1/f = 1/v - 1/u, आवर्धन m = +v/u। लेंस की क्षमता P = 1/f (मीटर में), मात्रक डायोप्टर (D)। उत्तल लेंस की क्षमता धनात्मक (+), अवतल लेंस की ऋणात्मक (-) होती है। पूर्ण आंतरिक परावर्तन (TIR): जब प्रकाश सघन से विरल माध्यम में जाता है और आपतन कोण क्रांतिक कोण से बड़ा होता है। (2) विद्युत: ओम का नियम V = IR। प्रतिरोध R = ρ(L/A)। श्रेणीक्रम में R = R₁ + R₂, समानांतर क्रम में 1/R = 1/R₁ + 1/R₂। जूल का ऊष्मीय नियम H = I²Rt। 1 यूनिट (1 kWh) = 3.6 × 10⁶ जूल। (3) रसायन शास्त्र: आधुनिक आवर्त सारणी (मोजले, 1913): तत्वों के गुण उनके परमाणु क्रमांक के आवर्ती फलन होते हैं। 18 वर्ग एवं 7 आवर्त। आवर्त में बाएं से दाएं जाने पर परमाणु त्रिज्या घटती है, विद्युत ऋणात्मकता बढ़ती है। लिटमस अम्ल में लाल, क्षार में नीला होता है। फिनॉल्फथलीन अम्ल में रंगहीन, क्षार में गुलाबी होता है। (4) जीव विज्ञान: मानव हृदय में 4 कोष्ठ होते हैं। फुफ्फुसीय धमनी (Pulmonary Artery) एकमात्र धमनी है जो अशुद्ध रक्त ले जाती है; फुफ्फुसीय शिरा शुद्ध रक्त लाती है। वृक्क (Kidney) की कार्यात्मक इकाई नेफ्रॉन (Nephron) है। मास्टर ग्रंथि पीयूष ग्रंथि (Pituitary) है।',
      },
      keyMechanisms: [
        {
          en: 'Pulmonary Vessel Exception Rule: All arteries carry oxygenated blood EXCEPT the Pulmonary Artery (carries deoxygenated blood to lungs). All veins carry deoxygenated blood EXCEPT the Pulmonary Vein (carries oxygenated blood from lungs).',
          hi: 'रक्त वाहिका अपवाद: सभी धमनियां शुद्ध रक्त ले जाती हैं, सिवाय फुफ्फुस धमनी के। सभी शिराएं अशुद्ध रक्त ले जाती हैं, सिवाय फुफ्फुस शिरा के।',
        },
        {
          en: '1 kWh to Joules Conversion: 1 kWh = 1 kW × 1 hour = 1000 W × 3600 s = 3.6 × 10⁶ J = 3.6 MJ. Repeated in over 50 past RRB question papers!',
          hi: 'विद्युत यूनिट मान: 1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ जूल। यह प्रश्न 50 से अधिक परीक्षाओं में पूछा गया है।',
        },
      ],
    },
    formulasAndLaws: [
      {
        label: 'Lens Formula & Power',
        expression: '\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u} \\quad | \\quad P = \\frac{1}{f(\\text{m})} \\text{ Dioptres (D)}',
        explanation: { en: 'Governs image formation in convex and concave spherical lenses.', hi: 'लेंस में प्रतिबिम्ब दूरी एवं डायोप्टर में लेंस क्षमता का सूत्र।' },
      },
      {
        label: 'Electrical Energy Consumption',
        expression: 'E = P \\times t = \\frac{V^2}{R} \\times t \\quad | \\quad 1\\text{ kWh} = 3.6 \\times 10^6\\text{ J}',
        explanation: { en: 'Calculates electrical units consumed and billing costs.', hi: 'विद्युत ऊर्जा उपभोग एवं वाणिज्यिक यूनिट गणना सूत्र।' },
      },
    ],
    workedExamples: [
      {
        id: 'ug-sci-ex1',
        level: 'CBT-1 Foundation',
        question: {
          en: 'An electric bulb of 100 W is used for 8 hours daily. How many units (kWh) of electrical energy are consumed in 30 days?',
          hi: '100 वॉट का एक विद्युत बल्ब प्रतिदिन 8 घंटे जलाया जाता है। 30 दिनों में कितने यूनिट (kWh) विद्युत ऊर्जा खर्च होगी?',
        },
        standardSolution: {
          en: 'Step 1: Total hours used = 8 hours/day × 30 days = 240 hours.\nStep 2: Total energy in Watt-hours = Power × Time = 100 W × 240 h = 24,000 Wh.\nStep 3: Convert to kWh (units) by dividing by 1000:\nUnits = 24,000 / 1000 = 24 kWh (units).',
          hi: 'चरण 1: कुल समय = 8 घंटे × 30 दिन = 240 घंटे।\nचरण 2: कुल ऊर्जा = 100 W × 240 h = 24,000 वाट-घंटे।\nचरण 3: यूनिट (kWh) में बदलने के लिए 1000 से भाग दें: 24,000 / 1000 = 24 यूनिट।',
        },
        topperShortcut: {
          en: '⚡ 5-Second Formula: Units = (Watts × Hours × Days) / 1000 = (100 × 8 × 30) / 1000 = 24 units.',
          hi: '⚡ सीधा सूत्र: यूनिट = (वॉट × घंटे × दिन) / 1000 = (100 × 8 × 30) / 1000 = 24 यूनिट।',
        },
      },
    ],
    commonTraps: [
      {
        en: 'Forgetting sign conventions in lens formula: Object distance u is ALWAYS negative (-u) for real objects placed on the left.',
        hi: 'लेंस एवं दर्पण सूत्र में वस्तु की दूरी u हमेशा ऋणात्मक (-u) ली जाती है।',
      },
    ],
    topperSpeedHacks: [
      {
        en: 'Resistors in Parallel Quick Shortcut: For two resistors in parallel, R_eq = (R₁ × R₂) / (R₁ + R₂). If identical resistors of resistance R are in parallel, R_eq = R / n.',
        hi: 'समानांतर क्रम में समान प्रतिरोध: n समान प्रतिरोधों का तुल्य मान सीधे R/n होता है।',
      },
    ],
    quickRevisionBulletPoints: [
      { en: 'Review NCERT Class 10 summary chapters for Light, Electricity, Periodic Table, and Life Processes.', hi: 'एनसीईआरटी कक्षा 10 के प्रकाश, विद्युत, आवर्त सारणी और जैव प्रक्रम अध्यायों का रिविजन करें।' },
      { en: 'Solve 15 numerical problems on lens power, series-parallel circuits, and electricity unit billing.', hi: 'लेंस क्षमता, परिपथ और बिजली बिल यूनिट के 15 संख्यात्मक प्रश्न हल करें।' },
    ],
    relatedPracticeCategory: 'General Science',
  },

  // =========================================================================
  // 8. NTPC UNDERGRADUATE: STATIC GK, FREEDOM STRUGGLE & RAILWAY LANDMARKS
  // =========================================================================
  'ug-static-gk-freedom': {
    topicId: 'ug-static-gk-freedom',
    title: {
      en: 'Static GK & Indian Heritage: Freedom Movement, Constitution & Railway Milestones',
      hi: 'स्टैटिक सामान्य ज्ञान: स्वतंत्रता संग्राम, भारतीय संविधान एवं रेलवे के ऐतिहासिक पड़ाव',
    },
    subjectCategory: { en: 'General Awareness (40 Marks)', hi: 'सामान्य जागरूकता (40 अंक)' },
    targetExam: { en: 'RRB NTPC (UG) & Group D Level-1', hi: 'आरआरबी एनटीपीसी व ग्रुप डी' },
    recommendedStudyTime: '3.5 Hours',
    blueprintImage: {
      src: './assets/railway_zones_map.jpg',
      caption: {
        en: 'Chronology of Freedom Struggle and Railway Heritage Landmarks',
        hi: 'स्वतंत्रता संग्राम कालक्रम एवं भारतीय रेल ऐतिहासिक धरोहर',
      },
    },
    conceptualTheory: {
      heading: {
        en: 'INC Milestones, Gandhian Mass Movements, Constitutional Framework & Railway Firsts',
        hi: 'कांग्रेस के प्रमुख अधिवेशन, गांधीवादी जनांदोलन, संवैधानिक ढांचा एवं रेलवे की ऐतिहासिक उपलब्धियां',
      },
      deepExplanation: {
        en: 'General Awareness forms 40% of CBT-1 and 42% of CBT-2. (1) Indian National Congress (INC) & Freedom Timeline: Founded on 28 December 1885 at Gokuldas Tejpal Sanskrit College, Bombay by A.O. Hume; first President W.C. Bonnerjee (72 delegates). 1905: Partition of Bengal by Lord Curzon -> Swadeshi Movement. 1906: Muslim League formed at Dhaka. 1907: Surat Split (Moderates vs Extremists). 1916: Lucknow Pact (INC and Muslim League unite, presided by A.C. Majumdar). 1919: Rowlatt Act (Black Act) and Jallianwala Bagh Massacre (13 April 1919) by General Dyer -> Rabindranath Tagore renounced Knighthood. 1920–22: Non-Cooperation Movement (suspended after Chauri Chaura incident on 4 Feb 1922). 1929: Lahore Session under Jawaharlal Nehru adopted Purna Swaraj (Complete Independence); Tricolor hoisted on Ravi river on 31 Dec 1929. 1930: Dandi Salt March (12 March to 6 April 1930, 240 miles from Sabarmati to Dandi with 78 followers). 1931: Gandhi-Irwin Pact. 1942: Quit India Movement (8 August 1942, Gowalia Tank Bombay; Gandhi gave "Do or Die" call). (2) Constitution Fundamentals: Drafted by Constituent Assembly in 2 years, 11 months, 18 days. Adopted on 26 Nov 1949 (Constitution Day), enforced on 26 Jan 1950. Fundamental Rights (Articles 12 to 35, Part III - Magna Carta of India). Article 32 (Right to Constitutional Remedies) called "Heart and Soul of Constitution" by Dr. B.R. Ambedkar (Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo-Warranto). Fundamental Duties (Article 51A, Part IVA) added by 42nd Amendment (1976) on Swaran Singh Committee recommendation. (3) Indian Railways Milestone Chronology: First passenger train on 16 April 1853 (Bombay Bori Bunder to Thane, 34 km, 3 steam locos: Sindh, Sultan, Sahib). First Electric Train on 3 Feb 1925 (Bombay VT to Kurla on 1500V DC). Railway Budget separated from General Budget in 1924 (Acworth Committee) and merged back in 2017 (Bibek Debroy Committee). National Rail Museum located at Chanakyapuri, New Delhi.',
        hi: 'सामान्य ज्ञान सीबीटी-1 में 40 अंक और सीबीटी-2 में 50 अंक का निर्णायक खंड है। (1) स्वतंत्रता संग्राम एवं कांग्रेस अधिवेशन: 28 दिसंबर 1885 को बॉम्बे में ए.ओ. ह्यूम द्वारा स्थापना, प्रथम अध्यक्ष डब्ल्यू.सी. बनर्जी (72 प्रतिनिधि)। 1905: बंगाल विभाजन (लॉर्ड कर्जन) -> स्वदेशी आंदोलन। 1907: सूरत विभाजन। 1916: लखनऊ समझौता (अंबिका चरण मजूमदार)। 13 अप्रैल 1919: जलियांवाला बाग हत्याकांड (जनरल डायर) -> रवींद्रनाथ टैगोर ने नाइटहुड त्यागी। 1920-22: असहयोग आंदोलन (4 फरवरी 1922 चौरी-चौरा कांड के बाद वापस)। 1929: लाहौर अधिवेशन (जवाहरलाल नेहरू) -> पूर्ण स्वराज संकल्प। 12 मार्च 1930: दांडी मार्च (साबरमती से दांडी 240 मील, 78 अनुयायी)। 8 अगस्त 1942: भारत छोड़ो आंदोलन ("करो या मरो" का नारा)। (2) भारतीय संविधान: निर्माण में 2 वर्ष, 11 माह, 18 दिन लगे। 26 नवंबर 1949 को अंगीकृत, 26 जनवरी 1950 को लागू। मौलिक अधिकार (अनुच्छेद 12-35, भाग III)। अनुच्छेद 32 को डॉ. अंबेडकर ने "संविधान की आत्मा एवं हृदय" कहा (5 रिट: बंदी प्रत्यक्षीकरण, परमादेश, प्रतिषेध, उत्प्रेषण, अधिकार पृच्छा)। मौलिक कर्तव्य (अनुच्छेद 51A) 42वें संशोधन 1976 (स्वर्ण सिंह समिति) द्वारा जोड़े गए। (3) भारतीय रेल के ऐतिहासिक पड़ाव: 16 अप्रैल 1853 को पहली ट्रेन (बोरीबंदर से ठाणे, 34 किमी, 3 इंजन: सिंध, सुल्तान, साहिब)। 3 फरवरी 1925 को पहली इलेक्ट्रिक ट्रेन (बॉम्बे वीटी से कुर्ला)। 1924 में एकवर्थ समिति की सिफारिश पर रेल बजट अलग हुआ, 2017 में बिबेक देबरॉय समिति की सिफारिश पर पुनः आम बजट में मिला दिया गया।',
      },
      keyMechanisms: [
        {
          en: 'Constitution Assembly Drafting Committee: Chaired by Dr. B.R. Ambedkar with 7 members. Objective Resolution moved by Pt. Nehru on 13 Dec 1946 became the Preamble.',
          hi: 'प्रारूप समिति (Drafting Committee): अध्यक्ष डॉ. बी.आर. अंबेडकर (7 सदस्य)। 13 दिसंबर 1946 को नेहरू द्वारा प्रस्तुत उद्देश्य प्रस्ताव ही आगे चलकर प्रस्तावना बना।',
        },
        {
          en: 'First 3 Steam Locomotives of 1853: Sindh, Sultan, and Sahib. Tested in almost every RRB exam cycle without fail.',
          hi: '1853 की पहली ट्रेन के तीन भाप इंजन: सिंध, सुल्तान और साहिब।',
        },
      ],
    },
    formulasAndLaws: [
      {
        label: 'Constitutional Writ Hierarchy',
        expression: '\\text{Article 32 (Supreme Court)} \\quad | \\quad \\text{Article 226 (High Courts)}',
        explanation: { en: 'Constitutional remedy mechanism for enforcement of Fundamental Rights.', hi: 'मौलिक अधिकारों के संरक्षण हेतु रिट जारी करने की सर्वोच्च एवं उच्च न्यायालय की शक्ति।' },
      },
    ],
    workedExamples: [
      {
        id: 'ug-gk-ex1',
        level: 'CBT-1 Foundation',
        question: {
          en: 'In which Indian National Congress session was the historic "Purna Swaraj" (Complete Independence) resolution passed?',
          hi: 'भारतीय राष्ट्रीय कांग्रेस के किस अधिवेशन में ऐतिहासिक "पूर्ण स्वराज" संकल्प पारित किया गया था?',
        },
        standardSolution: {
          en: 'Step 1: The Purna Swaraj resolution was passed in the 1929 Lahore Session.\nStep 2: The session was presided over by Jawaharlal Nehru.\nStep 3: On midnight of 31 December 1929, the tricolor flag was hoisted on the banks of river Ravi, and 26 January 1930 was fixed as Independence Day.',
          hi: 'चरण 1: पूर्ण स्वराज संकल्प वर्ष 1929 के लाहौर अधिवेशन में पारित हुआ।\nचरण 2: इस अधिवेशन की अध्यक्षता पं. जवाहरलाल नेहरू ने की थी।\nचरण 3: 31 दिसंबर 1929 की अर्धरात्रि को रावी नदी के तट पर तिरंगा फहराया गया तथा 26 जनवरी 1930 को स्वतंत्रता दिवस मनाने का निर्णय लिया गया।',
        },
        topperShortcut: {
          en: '⚡ Direct Recall: 1929 Lahore + Nehru = Purna Swaraj. Answer verified in 2 seconds!',
          hi: '⚡ सीधा स्मरण: 1929 लाहौर + नेहरू = पूर्ण स्वराज। 2 सेकंड में उत्तर!',
        },
      },
    ],
    commonTraps: [
      {
        en: 'Confusing Constitution Adoption date (26 Nov 1949) with Enforcement date (26 Jan 1950): Constitution Day is celebrated on 26 November, Republic Day on 26 January.',
        hi: 'संविधान अंगीकृत (26 नवंबर 1949) एवं लागू होने (26 जनवरी 1950) की तिथियों में भ्रम।',
      },
    ],
    topperSpeedHacks: [
      {
        en: 'Chronology Mnemonic for Gandhian Movements: Champaran (1917) -> Ahmedabad Mill (1918) -> Kheda (1918) -> Non-Cooperation (1920) -> Dandi (1930) -> Quit India (1942). Remember: "CAK - NDQ".',
        hi: 'गांधीवादी आंदोलनों का कालक्रम: चंपारण (1917) -> अहमदाबाद (1918) -> खेड़ा (1918) -> असहयोग (1920) -> दांडी (1930) -> भारत छोड़ो (1942)। सूत्र: "CAK-NDQ"।',
      },
    ],
    quickRevisionBulletPoints: [
      { en: 'Revise timeline of INC sessions from 1885 to 1947 focusing on presidents and major resolutions.', hi: '1885 से 1947 तक के प्रमुख कांग्रेस अधिवेशनों एवं उनके अध्यक्षों की सूची याद करें।' },
      { en: 'Memorize 5 Constitutional Writs under Article 32 and major Railway historical milestones.', hi: 'अनुच्छेद 32 की 5 रिटों और भारतीय रेल के प्रमुख ऐतिहासिक मील के पत्थरों को दोहराएं।' },
    ],
    relatedPracticeCategory: 'General Awareness',
  },

  // =========================================================================
  // 9. GROUP D LEVEL-1: SPEED ARITHMETIC & NUMERICAL APTITUDE (25 MARKS)
  // =========================================================================
  'group-d-math-speed-arithmetic': {
    topicId: 'group-d-math-speed-arithmetic',
    title: {
      en: 'Group D Speed Mathematics: Calculation Hacks, Divisibility & Rapid Commercial Math',
      hi: 'ग्रुप डी गति गणित: तीव्र गणना हैक्स, विभाज्यता एवं त्वरित व्यावसायिक गणित (25 अंक)',
    },
    subjectCategory: { en: 'Mathematics (25 Marks)', hi: 'गणित (25 अंक)' },
    targetExam: { en: 'RRB Group D (Level-1 - CEN 09/2026)', hi: 'आरआरबी ग्रुप डी (लेवल-1)' },
    recommendedStudyTime: '3.5 Hours',
    blueprintImage: {
      src: './assets/rrb_master_curriculum.jpg',
      caption: {
        en: 'Speed Arithmetic Calculation Trees and Fast Square Root Approximations',
        hi: 'तीव्र अंकगणित गणना वृक्ष एवं वर्गमूल सन्निकटन तकनीक',
      },
    },
    conceptualTheory: {
      heading: {
        en: 'Vedic Multiplication Bases, Digital Roots, Fast Square Roots & Group D High-Yield Shortcuts',
        hi: 'वैदिक गुणा आधार, डिजिटल सम, त्वरित वर्गमूल एवं ग्रुप डी उच्च-अंक शॉर्टकट',
      },
      deepExplanation: {
        en: 'Group D CBT features 25 dedicated mathematics questions with a 90-minute ceiling for 100 questions. Speed is paramount. (1) Fast Base-100 Multiplication: For multiplying two numbers near 100, e.g. 104 × 107: Deviations from 100 are +4 and +7. Cross add: 104 + 7 = 111. Multiply deviations: 4 × 7 = 28. Result = 11,128 in 3 seconds! For numbers below 100, e.g. 96 × 93: Deviations are -4 and -7. Cross add: 96 - 7 = 89. Multiply deviations: (-4) × (-7) = 28. Result = 8,928. (2) Fast Square Root of Perfect Squares: Look at unit digit: 1 -> ends in 1 or 9; 4 -> ends in 2 or 8; 5 -> ends in 5; 6 -> ends in 4 or 6; 9 -> ends in 3 or 7. To find √6889: strike out last two digits (89, ends in 9 -> unit digit is 3 or 7). Remaining number 68 lies between 8² (64) and 9² (81). So tens digit is 8. Compare 68 with 8 × 9 = 72. Since 68 < 72, choose the smaller unit digit (3). So √6889 = 83! (3) Successive Percentage Formula: Net % change = x + y + (xy / 100). If prices rise by 25%, consumption must be reduced by [r / (100 + r)] × 100% = [25 / 125] × 100% = 20% to keep expenditure constant. (4) Equal Distance Average Speed: When traveling equal distances at speed S₁ and S₂, Average Speed = 2S₁S₂ / (S₁ + S₂). When traveling 3 equal distances at speeds S₁, S₂, S₃: Avg Speed = 3S₁S₂S₃ / (S₁S₂ + S₂S₃ + S₃S₁).',
        hi: 'ग्रुप डी परीक्षा में 25 अंक का गणित अत्यंत महत्वपूर्ण है जहां 90 मिनट में 100 प्रश्न करने होते हैं। (1) 100 के निकट संख्याओं का वैदिक गुणा: 104 × 107 का मान: विचलन +4 और +7। तिर्यक योग: 104 + 7 = 111। विचलनों का गुणा: 4 × 7 = 28। उत्तर = 11,128 (मात्र 3 सेकंड में!)। 96 × 93: विचलन -4 और -7। तिर्यक घटाव: 96 - 7 = 89। गुणा: 4 × 7 = 28। उत्तर = 8,928। (2) पूर्ण वर्ग संख्याओं का त्वरित वर्गमूल: इकाई अंक नियम: 1 -> 1 या 9; 4 -> 2 या 8; 5 -> 5; 6 -> 4 या 6; 9 -> 3 या 7। √6889 ज्ञात करना: अंतिम दो अंक 89 का इकाई अंक 9 है (संभावित 3 या 7)। शेष 68, 8² (64) और 9² (81) के बीच है -> दहाई अंक 8। 68 की तुलना 8 × 9 = 72 से करें। चूंकि 68 < 72 है, इसलिए छोटा अंक 3 लें -> उत्तर = 83। (3) क्रमागत प्रतिशत परिवर्तन: कुल प्रभाव = x + y + (xy/100)। यदि मूल्य में 25% वृद्धि हो, तो व्यय अपरिवर्तित रखने हेतु उपभोग में कमी = [25 / (100 + 25)] × 100 = 20%। (4) समान दूरी हेतु औसत चाल: 2 चालों के लिए = 2S₁S₂ / (S₁ + S₂)। 3 समान दूरियों के लिए = 3S₁S₂S₃ / (S₁S₂ + S₂S₃ + S₃S₁)।',
      },
      keyMechanisms: [
        {
          en: 'Consumption Reduction Invariance: When price increases by 1/n, consumption must decrease by 1/(n + 1) to keep expenditure constant. E.g., +25% (+1/4) requires -20% (-1/5) reduction.',
          hi: 'उपभोग कमी का 1/n नियम: यदि मूल्य 1/n बढ़ता है, तो खर्च स्थिर रखने हेतु खपत में 1/(n+1) की कमी करनी होगी। (25% = 1/4 वृद्धि -> 1/5 = 20% कमी)।',
        },
        {
          en: 'Harmonic Mean for Average Speed: Average speed over equal distances is the harmonic mean of speeds, NEVER their arithmetic mean.',
          hi: 'औसत चाल का हरात्मक माध्य नियम: समान दूरी तय करने पर औसत चाल हमेशा हरात्मक माध्य (Harmonic Mean) होती है, साधारण औसत नहीं।',
        },
      ],
    },
    formulasAndLaws: [
      {
        label: 'Average Speed over Equal Distances',
        expression: 'S_{\\text{avg}} = \\frac{2 S_1 S_2}{S_1 + S_2}',
        explanation: { en: 'Direct formula for round trips or equal forward-backward journey legs.', hi: 'समान दूरी की दो यात्राओं हेतु औसत चाल का अचूक सूत्र।' },
      },
      {
        label: 'Net Successive Percentage Change',
        expression: '\\Delta\\% = x + y + \\frac{xy}{100}',
        explanation: { en: 'Evaluates successive discounts, population increments, and inflation impacts.', hi: 'क्रमागत छूट, जनसंख्या वृद्धि एवं मूल्य वृद्धि का संयुक्त प्रतिशत प्रभाव।' },
      },
    ],
    workedExamples: [
      {
        id: 'grp-math-ex1',
        level: 'CBT-1 Foundation',
        question: {
          en: 'A person travels from town A to town B at 60 km/h and returns from B to A at 40 km/h. What is his average speed for the entire journey?',
          hi: 'एक व्यक्ति शहर A से B तक 60 किमी/घंटा की गति से जाता है तथा B से A तक 40 किमी/घंटा की गति से लौटता है। पूरी यात्रा की औसत चाल क्या है?',
        },
        standardSolution: {
          en: 'Step 1: Distance both ways is identical, so apply 2S₁S₂/(S₁ + S₂).\nStep 2: S₁ = 60 km/h, S₂ = 40 km/h.\nStep 3: Average Speed = (2 × 60 × 40) / (60 + 40) = 4800 / 100 = 48 km/h.',
          hi: 'चरण 1: दोनों तरफ की दूरी समान है, अतः सूत्र 2S₁S₂ / (S₁ + S₂) लागू करें।\nचरण 2: S₁ = 60, S₂ = 40।\nचरण 3: औसत चाल = (2 × 60 × 40) / (60 + 40) = 4800 / 100 = 48 किमी/घंटा।',
        },
        topperShortcut: {
          en: '⚡ 5-Second Trap Avoidance: Arithmetic average is (60+40)/2 = 50 km/h (Option A - TRAP!). The harmonic answer is 48 km/h. Remember this classic!',
          hi: '⚡ 5-सेकंड चेतावनी: साधारण औसत 50 km/h गलत विकल्प है। सही उत्तर 48 km/h है।',
        },
      },
    ],
    commonTraps: [
      {
        en: 'Selecting arithmetic average for speed: Marking (60 + 40) / 2 = 50 km/h causes instant negative marking. Always use harmonic mean for equal distances.',
        hi: 'चाल का साधारण औसत निकालना: (60 + 40)/2 = 50 पर टिक करने से नकारात्मक अंकन होता है। सही उत्तर 48 है।',
      },
    ],
    topperSpeedHacks: [
      {
        en: 'Multiplication by 11 Hack: To multiply any two-digit number by 11, split digits and put their sum in between: 35 × 11 -> 3 _ 5 -> 3(3+5)5 = 385.',
        hi: '11 से गुणा करने का नियम: अंकों को अलग करके बीच में उनका योग रख दें: 35 × 11 -> 3(3+5)5 = 385।',
      },
    ],
    quickRevisionBulletPoints: [
      { en: 'Memorize squares up to 35 and cubes up to 15 for lightning-fast numerical arithmetic.', hi: '1 से 35 तक के वर्ग तथा 1 से 15 तक के घन कंठस्थ करें।' },
      { en: 'Practice 20 speed arithmetic problems using digital root option elimination.', hi: 'डिजिटल सम विधि से 20 प्रश्नों को विकल्प उन्मूलन द्वारा हल करें।' },
    ],
    relatedPracticeCategory: 'Mathematics',
  },

  // =========================================================================
  // 10. GROUP D LEVEL-1: HIGH-WEIGHTAGE REASONING TOPICS (30 MARKS)
  // =========================================================================
  'group-d-reasoning-topics': {
    topicId: 'group-d-reasoning-topics',
    title: {
      en: 'Group D Reasoning Mastery: Syllogisms, Mirror Images, Statement-Assumptions & Non-Verbal',
      hi: 'ग्रुप डी रीजनिंग मास्टरी: न्याय निगमन (सिलोगिज़्म), दर्पण प्रतिबिम्ब, कथन-पूर्वधारणाएं एवं अशाब्दिक तर्कशक्ति',
    },
    subjectCategory: { en: 'General Intelligence (30 Marks)', hi: 'सामान्य बुद्धिमत्ता (30 अंक)' },
    targetExam: { en: 'RRB Group D (Level-1 - CEN 09/2026)', hi: 'आरआरबी ग्रुप डी (लेवल-1)' },
    recommendedStudyTime: '3.5 Hours',
    blueprintImage: {
      src: './assets/rrb_master_curriculum.jpg',
      caption: {
        en: 'Syllogism Venn Intersection Overlaps and Mirror Lateral Inversion',
        hi: 'सिलोगिज़्म वेन आरेख परस्पर व्याप्ति एवं दर्पण पार्श्व व्युत्क्रमण',
      },
    },
    conceptualTheory: {
      heading: {
        en: '100-50 Syllogism Rules, Lateral Inversion Laws, Critical Assumption Identification & Paper Folding',
        hi: '100-50 न्याय निगमन नियम, पार्श्व व्युत्क्रमण नियम, पूर्वधारणा परीक्षण एवं कागज मोड़ना',
      },
      deepExplanation: {
        en: 'General Intelligence carries the largest single chunk in Group D (30 marks out of 100). (1) Modern Syllogism Mastery (100-50 / Venn Method): Premise Types: A (All S is P: S=100, P=50); E (No S is P: S=100, P=100); I (Some S is P: S=50, P=50); O (Some S is not P: S=50, P=100). Golden Rules: 1. Two positive premises ALWAYS yield a positive conclusion. 2. One positive and one negative premise yield a negative conclusion. 3. Two negative premises yield NO definite conclusion. 4. An item with value 50 in premises CANNOT become 100 in conclusion. Either/Or Condition: Subject and Predicate must be identical; one conclusion positive, one negative (A+O, or I+O, or I+E); both must be individually uncertain/false. (2) Mirror and Water Images: Mirror Image (Vertical mirror): Lateral inversion occurs (Left becomes Right, Right becomes Left, while Top and Bottom remain unchanged). Water Image (Horizontal mirror / reflection): Vertical inversion occurs (Top becomes Bottom, Bottom becomes Top, while Left and Right remain unchanged). (3) Statement and Assumptions: An assumption is something unsaid, taken for granted before making the statement. Rule 1: Assumptions containing absolute words like "only", "all", "never", "best", "definitely" are usually INVALID. Rule 2: An assumption that merely restates the statement is NOT a valid assumption. Rule 3: Government advertisements/notices assume that the public will read and adhere to them. (4) Paper Folding & Cutting: The unfolded shape is always the symmetric mirror reflection of the punched hole across each fold line. Work backwards from the last fold to the first fold.',
        hi: 'ग्रुप डी में रीजनिंग का 30 अंकों का सबसे बड़ा हिस्सा होता है। (1) न्याय निगमन (Syllogism): 1. दो सकारात्मक कथनों से केवल सकारात्मक निष्कर्ष निकलता है। 2. एक सकारात्मक और एक नकारात्मक कथन से केवल नकारात्मक निष्कर्ष निकलता है। 3. दो नकारात्मक कथनों से कोई निश्चित निष्कर्ष नहीं निकलता। Either/Or (या तो I या II) की शर्तें: दोनों निष्कर्षों के कर्ता और विधेय समान हों, एक सकारात्मक तथा दूसरा नकारात्मक हो, और दोनों व्यक्तिगत रूप से असत्य/संदेहास्पद हों। (2) दर्पण एवं जल प्रतिबिम्ब: दर्पण प्रतिबिम्ब (ऊर्ध्वाधर दर्पण): पार्श्व व्युत्क्रमण (बायां भाग दायां बन जाता है, दायां भाग बायां बन जाता है; ऊपर-नीचे अपरिवर्तित रहता है)। जल प्रतिबिम्ब (क्षैतिज दर्पण): ऊपर का भाग नीचे और नीचे का भाग ऊपर हो जाता है; दायां-बायां समान रहता है। (3) कथन एवं पूर्वधारणाएं: पूर्वधारणा वह छिपी हुई बात है जो कथन कहने से पूर्व वक्ता मानकर चलता है। नियम 1: "केवल", "सभी", "सर्वश्रेष्ठ", "हमेशा" जैसे अतिवादी शब्दों वाली पूर्वधारणाएं प्रायः अमान्य होती हैं। नियम 2: सरकारी अपीलों/विज्ञापनों की पूर्वधारणा होती है कि जनता उनका पालन करेगी। (4) कागज मोड़ना व काटना: मोड़े गए कागज को खोलने पर कट का आकार मोड़ वाली रेखा के सापेक्ष दर्पण प्रतिबिम्ब की तरह खुलता है।',
      },
      keyMechanisms: [
        {
          en: 'Either-Or Complementary Pairs in Syllogism: Valid pairs: [Some + No] and [Some + Some Not]. Note: [All + No] NEVER forms an either-or pair because both can be false simultaneously.',
          hi: 'Either-Or पूरक जोड़े: [Some + No] तथा [Some + Some Not]। ध्यान दें: [All + No] कभी भी Either-Or का जोड़ा नहीं बनाता है।',
        },
        {
          en: 'Mirror Image Invariant Letters: 11 English capital letters remain identical in a vertical plane mirror: A, H, I, M, O, T, U, V, W, X, Y. Memorizing these enables instant visual scanning.',
          hi: 'दर्पण में अपरिवर्तित रहने वाले 11 अक्षर: A, H, I, M, O, T, U, V, W, X, Y। इन्हें याद रखने से सीधे त्रुटि पकड़ी जा सकती है।',
        },
      ],
    },
    formulasAndLaws: [
      {
        label: 'Syllogism Conclusion Polarity Law',
        expression: '(+) + (+) = (+) \\quad | \\quad (+) + (-) = (-) \\quad | \\quad (-) + (-) = \\text{No Valid Conclusion}',
        explanation: { en: 'Determines conclusion polarity instantaneously without drawing diagrams.', hi: 'कथनों की प्रकृति से निष्कर्ष की धनात्मकता/ऋणात्मकता सीधे तय करने का नियम।' },
      },
    ],
    workedExamples: [
      {
        id: 'grp-reas-ex1',
        level: 'CBT-1 Foundation',
        question: {
          en: 'Statements:\n1. All Trains are Rails.\n2. Some Rails are Stations.\nConclusions:\nI. Some Trains are Stations.\nII. Some Rails are Trains.',
          hi: 'कथन:\n1. सभी ट्रेन रेल हैं।\n2. कुछ रेल स्टेशन हैं।\nनिष्कर्ष:\nI. कुछ ट्रेन स्टेशन हैं।\nII. कुछ रेल ट्रेन हैं।',
        },
        standardSolution: {
          en: 'Step 1: Check Conclusion I: Connects Trains and Stations via Rails. In statement 1, Rails is 50. In statement 2, Rails is 50. Since common term "Rails" is not 100 in at least one premise, no definite relation exists between Trains and Stations. Conclusion I does not follow.\nStep 2: Check Conclusion II: From Statement 1 ("All Trains are Rails"), conversion gives "Some Rails are Trains". This is valid and follows directly.\nStep 3: Answer: Only Conclusion II follows.',
          hi: 'चरण 1: निष्कर्ष I: ट्रेन और स्टेशन को जोड़ता है। दोनों कथनों में मध्य पद "रेल" किसी में भी 100% (सभी) नहीं है, अतः ट्रेन और स्टेशन में कोई निश्चित संबंध नहीं है। निष्कर्ष I असत्य है।\nचरण 2: निष्कर्ष II: कथन 1 ("सभी ट्रेन रेल हैं") का सीधा रूपांतरण "कुछ रेल ट्रेन हैं" होता है। अतः यह पूर्णतः सत्य है।\nचरण 3: उत्तर: केवल निष्कर्ष II अनुसरण करता है।',
        },
        topperShortcut: {
          en: '⚡ 8-Second Direct Conversion: "All A are B" immediately implies "Some B are A". Conclusion II is true on sight. Only Conclusion II follows!',
          hi: '⚡ 8-सेकंड हैक: "सभी A, B हैं" से "कुछ B, A हैं" स्वतः सत्य होता है। निष्कर्ष II देखते ही सही टिक करें!',
        },
      },
    ],
    commonTraps: [
      {
        en: 'Assuming "Possibility" when conclusion asks for "Definite": If conclusion does NOT state "is a possibility", it must hold true in 100% of all possible Venn diagrams.',
        hi: 'निश्चित निष्कर्ष को संभावना समझ लेना: जब तक प्रश्न में "होने की संभावना है" न लिखा हो, तब तक निष्कर्ष का 100% सत्य होना अनिवार्य है।',
      },
    ],
    topperSpeedHacks: [
      {
        en: 'Mirror Image Right-to-Left Scanning: In mirror image of words, the word is read from RIGHT to LEFT, and every individual letter is laterally inverted. Eliminate choices that do not start with inverted last letter.',
        hi: 'दर्पण प्रतिबिम्ब में शब्द को दाईं ओर से पढ़ना शुरू करें; जो विकल्प अंतिम अक्षर के उलटे रूप से शुरू नहीं होता, उसे तुरंत काटें।',
      },
    ],
    quickRevisionBulletPoints: [
      { en: 'Practice 25 syllogism questions focusing on "Some Not" and "Either-Or" conditions.', hi: 'न्याय निगमन के "Either-Or" और संभावना वाले 25 प्रश्नों का अभ्यास करें।' },
      { en: 'Solve 15 mirror image, water image, and paper folding exercises.', hi: 'दर्पण प्रतिबिम्ब, जल प्रतिबिम्ब और कागज मोड़ने के 15 प्रश्नों को हल करें।' },
    ],
    relatedPracticeCategory: 'General Intelligence',
  },
};
