import type { TopicStudyGuide } from './topicStudyNotes';

export const REASONING_TOPIC_STUDY_GUIDES: Record<string, TopicStudyGuide> = {
  // =========================================================================
  // 1. SERIES, ANALOGIES & CODING-DECODING
  // =========================================================================
  'series-analogies-coding': {
    topicId: 'series-analogies-coding',
    title: {
      en: 'Series Patterns, Analogies & Letter-Number Coding Architecture',
      hi: 'श्रेणी प्रतिरूप, सादृश्यता एवं अक्षर-संख्या कोडिंग संरचना',
    },
    subjectCategory: { en: 'General Intelligence & Reasoning', hi: 'सामान्य बुद्धिमत्ता एवं तर्कशक्ति' },
    targetExam: { en: 'RRB NTPC CBT-1 & 2 / Group D / ALP / RPF', hi: 'आरआरबी एनटीपीसी / ग्रुप डी / एएलपी / आरपीएफ' },
    recommendedStudyTime: '3.0 Hours',
    blueprintImage: {
      src: './assets/rrb_master_curriculum.jpg',
      caption: {
        en: 'Analytical Reasoning & Positional Cypher Matrix',
        hi: 'विश्लेषणात्मक तर्कशक्ति एवं स्थानीय साइफर मैट्रिक्स',
      },
    },
    conceptualTheory: {
      heading: {
        en: 'Positional Alphabetic Coding, Twin Differences & Number Series Heuristics',
        hi: 'वर्णमाला स्थिति कोडिंग, द्वि-अंतर एवं संख्या श्रेणी प्रतिरूप',
      },
      deepExplanation: {
        en: 'Coding-Decoding and Series represent the foundation of reasoning speed in RRB exams, typically generating 8 to 12 questions in CBT-1. In alphabetic coding, the English alphabet (A to Z) corresponds to positions 1 to 26. The EJOTY benchmark (E=5, J=10, O=15, T=20, Y=25) and CFILORUX benchmark (multiples of 3) provide instant positional lookup. Opposites pairing relies on the rule that the sum of positions of opposite letters is ALWAYS 27: A(1) + Z(26) = 27, B(2) + Y(25) = 27, C(3) + X(24) = 27, D(4) + W(23) = 27, E(5) + V(22) = 27 (EV), F(6) + U(21) = 27 (FU), G(7) + T(20) = 27 (GT Road), H(8) + S(19) = 27 (High School), I(9) + R(18) = 27 (Indian Railway), J(10) + Q(17) = 27 (Jungle Queen), K(11) + P(16) = 27 (Kurta Pyjama), L(12) + O(15) = 27 (Love), M(13) + N(14) = 27 (Man). Number series in TCS exams follow 4 core patterns: (1) Prime gaps, (2) Double difference (arithmetic of differences), (3) n² ± k or n³ ± k patterns, and (4) Alternate intertwined series.',
        hi: 'कोडिंग-डिकोडिंग और श्रृंखला आरआरबी सीबीटी-1 में 8 से 12 प्रश्नों का आधार बनती है। वर्णमाला में A से Z की स्थितियां 1 से 26 होती हैं। EJOTY (5, 10, 15, 20, 25) द्वारा किसी भी अक्षर की स्थिति तुरंत जांची जा सकती है। विपरीत अक्षरों (Opposites) का योग हमेशा 27 होता है: A+Z=27, B+Y=27, C+X=27, D+W=27 (Doodh Wala), E+V=27 (EV), F+U=27 (Fair Unfair), G+T=27 (GT Road), H+S=27 (High School), I+R=27 (Indian Railway), J+Q=27 (Jungle Queen), K+P=27 (Kurta Pyjama), L+O=27 (Love), M+N=27 (Man)। टीसीएस परीक्षाओं में संख्या श्रृंखला 4 मुख्य प्रतिरूपों पर चलती है: अभाज्य संख्याओं का अंतर, दोहरे अंतर की श्रेणी, n² ± k अथवा n³ ± k की श्रेणी, एवं एकांतर मिश्रित श्रृंखलाएं।',
      },
      keyMechanisms: [
        {
          en: 'Opposites Sum 27 Rule: Opposite of letter with position P is (27 - P). Example: Position of T is 20, so opposite is 27 - 20 = 7 (G).',
          hi: 'विपरीत अक्षर नियम: किसी अक्षर P का विपरीत अक्षर (27 - P) होता है। जैसे T (20) का विपरीत = 27 - 20 = 7 (G)।',
        },
        {
          en: 'Double Difference Heuristic: When consecutive differences do not show an obvious pattern, compute the differences of the differences. If second difference is constant, original series is quadratic an² + bn + c.',
          hi: 'दोहरा अंतर नियम: जब पदों का अंतर स्पष्ट न हो, तो अंतरालों का पुनः अंतर निकालें। यदि दूसरा अंतर समान हो, तो श्रृंखला द्विघातीय होती है।',
        },
        {
          en: 'Cubic and Square Signatures: Memorize squares up to 35² and cubes up to 20³. 63 = 4³ - 1 = 8² - 1; 124 = 5³ - 1; 215 = 6³ - 1; 342 = 7³ - 1; 511 = 8³ - 1; 728 = 9³ - 1.',
          hi: 'घन एवं वर्ग पहचान: 35 तक के वर्ग और 20 तक के घन याद रखें। जैसे 63 = 4³ - 1; 124 = 5³ - 1; 215 = 6³ - 1; 342 = 7³ - 1; 511 = 8³ - 1।',
        },
        {
          en: 'Cross/Diagonal Coding: Words like RAIL coded as SBJM often have shifts on diagonal pairs (R -> S, A -> B, I -> J, L -> M) or reversed order (L -> M, I -> J, A -> B, R -> S).',
          hi: 'तिर्यक कोडिंग: अक्षरों के क्रम को उलटा करके या क्रॉस करके +1/-1 का विस्थापन किया जाता है।',
        },
      ],
    },
    formulasAndLaws: [
      {
        label: 'Letter Position Identity',
        expression: 'Position(Forward) + Position(Reverse) = 27',
        explanation: { en: 'For any letter in English alphabet, sum of forward and backward rank is 27.', hi: 'किसी भी अक्षर के आगे और पीछे के क्रमांक का योग 27 होता है।' },
      },
      {
        label: 'EJOTY Position Benchmarks',
        expression: 'E = 5, J = 10, O = 15, T = 20, Y = 25',
        explanation: { en: 'Anchor points for 2-second letter position lookup.', hi: 'अक्षरों की स्थिति तीव्रता से ज्ञात करने हेतु मुख्य मानक।' },
      },
    ],
    workedExamples: [
      {
        id: 'cod-ex-1',
        level: 'CBT-1 Foundation',
        question: {
          en: 'In a certain code language, if RAIL is coded as 36-2-18-24, how will EXAM be coded in that language?',
          hi: 'एक निश्चित कूट भाषा में, यदि RAIL को 36-2-18-24 लिखा जाता है, तो EXAM को उसी भाषा में कैसे लिखा जाएगा?',
        },
        standardSolution: {
          en: 'Step 1: Determine positional numbers for letters in RAIL:\nR = 18, A = 1, I = 9, L = 12.\nStep 2: Compare with code: 18 × 2 = 36, 1 × 2 = 2, 9 × 2 = 18, 12 × 2 = 24.\nPattern: Each letter’s alphabetical position is multiplied by 2.\nStep 3: Apply pattern to EXAM:\nE = 5 => 5 × 2 = 10\nX = 24 => 24 × 2 = 48\nA = 1 => 1 × 2 = 2\nM = 13 => 13 × 2 = 26.\nAnswer: EXAM is coded as 10-48-2-26.',
          hi: 'चरण 1: RAIL के अक्षरों के क्रमांक: R=18, A=1, I=9, L=12।\nचरण 2: कूट से तुलना: 18×2=36, 1×2=2, 9×2=18, 12×2=24। नियम: प्रत्येक क्रमांक का 2 गुना।\nचरण 3: EXAM पर लागू करें: E(5×2=10), X(24×2=48), A(1×2=2), M(13×2=26)।\nउत्तर: 10-48-2-26।',
        },
        topperShortcut: {
          en: '⚡ 5-Second Verification: Check first and last digits: E=5×2=10, M=13×2=26. Look at options starting with 10 and ending with 26. Immediate elimination!',
          hi: '⚡ विकल्प एलिमिनेशन: पहला अक्षर E (5×2=10) और अंतिम M (13×2=26)। केवल वही विकल्प चुनें जो 10 से शुरू और 26 पर समाप्त हो!',
        },
      },
      {
        id: 'ser-ex-2',
        level: 'CBT-2 Advanced',
        question: {
          en: 'Find the missing number in the series: 6, 25, 62, 123, 214, ?',
          hi: 'श्रृंखला में लुप्त संख्या ज्ञात कीजिए: 6, 25, 62, 123, 214, ?',
        },
        standardSolution: {
          en: 'Step 1: Check relation to perfect cubes:\n6 = 2³ - 2 = 8 - 2\n25 = 3³ - 2 = 27 - 2\n62 = 4³ - 2 = 64 - 2\n123 = 5³ - 2 = 125 - 2\n214 = 6³ - 2 = 216 - 2.\nStep 2: The pattern is n³ - 2 starting from n = 2.\nStep 3: The next term for n = 7: 7³ - 2 = 343 - 2 = 341.',
          hi: 'चरण 1: घनों से संबंध देखें:\n6 = 2³ - 2\n25 = 3³ - 2\n62 = 4³ - 2\n123 = 5³ - 2\n214 = 6³ - 2।\nचरण 2: अगला पद n = 7 हेतु: 7³ - 2 = 343 - 2 = 341।\nउत्तर: 341।',
        },
        topperShortcut: {
          en: '⚡ Instant Cube Recognition: Numbers close to 8, 27, 64, 125, 216 are n³ - 2. Next cube is 343; 343 - 2 = 341 directly!',
          hi: '⚡ घन पहचान ट्रिक: 8, 27, 64, 125, 216 के निकट की संख्याएं n³ - 2 हैं। अगला घन 343 है; 343 - 2 = 341 सीधा उत्तर!',
        },
      },
    ],
    commonTraps: [
      {
        en: 'Assuming linear arithmetic in exponential jumps: When numbers jump from single digits to hundreds (e.g. 3, 10, 101, ?), the pattern is n² + 1, NOT addition. Always check multiplication and powers first when growth is steep.',
        hi: 'तीव्र वृद्धि में जोड़ का भ्रम: जब संख्याएं अचानक बहुत तेजी से बढ़ें (जैसे 3, 10, 101), तो यह n² + 1 का प्रतिरूप होता है।',
      },
    ],
    topperSpeedHacks: [
      {
        en: 'Option First/Last Elimination: In 4-letter words, never decode all 4 letters. Decode 1st letter to eliminate 2 options, then decode last letter to pick the right answer in 8 seconds.',
        hi: 'विकल्प उन्मूलन विधि: चारों अक्षरों को कभी डिकोड न करें। केवल प्रथम और अंतिम अक्षर से 8 सेकंड में सही विकल्प चुनें।',
      },
    ],
    quickRevisionBulletPoints: [
      { en: 'Opposite of Indian Railway is I ↔ R (9 + 18 = 27).', hi: 'इंडियन रेलवे: I ↔ R (9 + 18 = 27)।' },
      { en: 'Opposite of Jungle Queen is J ↔ Q (10 + 17 = 27).', hi: 'जंगल क्वीन: J ↔ Q (10 + 17 = 27)।' },
      { en: 'Fibonacci series adds previous two terms: 1, 1, 2, 3, 5, 8, 13, 21.', hi: 'फाइबोनैचि श्रृंखला पिछले दो पदों का योग होती है।' },
    ],
    relatedPracticeCategory: 'General Intelligence & Reasoning',
  },

  // =========================================================================
  // 2. PUZZLES, SEATING ARRANGEMENTS & MATRIX
  // =========================================================================
  'puzzles-seating-matrix': {
    topicId: 'puzzles-seating-matrix',
    title: {
      en: 'Puzzles, Seating Arrangements (Linear & Circular) & Multi-Attribute Matrix',
      hi: 'पहेलियां, बैठक व्यवस्था (रैखिक व वृत्तीय) एवं बहु-विशेषता मैट्रिक्स',
    },
    subjectCategory: { en: 'General Intelligence & Reasoning', hi: 'सामान्य बुद्धिमत्ता एवं तर्कशक्ति' },
    targetExam: { en: 'RRB NTPC CBT-2 / Station Master / JE', hi: 'आरआरबी एनटीपीसी सीबीटी-2 / स्टेशन मास्टर' },
    recommendedStudyTime: '4.0 Hours',
    blueprintImage: {
      src: './assets/rrb_master_curriculum.jpg',
      caption: {
        en: 'Seating Arrangement Logic & Matrix Resolution Engine',
        hi: 'बैठक व्यवस्था तर्क एवं मैट्रिक्स समाधान इंजन',
      },
    },
    conceptualTheory: {
      heading: {
        en: 'Spatial Orientation, Circular Clockwise/Anti-Clockwise & Parallel Rows',
        hi: 'स्थानिक अभिविन्यास, वृत्ताकार दक्षिणावर्त/वामावर्त एवं समानांतर पंक्तियां',
      },
      deepExplanation: {
        en: 'Seating Arrangements and Puzzles carry the highest weightage in RRB NTPC CBT-2 (10-15 marks out of 35 in Reasoning). There are three primary configurations: (1) Linear Arrangements: Single row facing North (Left is candidate’s left, Right is candidate’s right) or South (Left is candidate’s right), and Parallel rows facing each other. (2) Circular Arrangements: All persons facing center (Clockwise = Left, Anti-clockwise = Right), facing outwards (Clockwise = Right, Anti-clockwise = Left), and mixed orientations. (3) Multi-attribute Matrix / Floor Puzzles: Persons assigned to distinct departments, cities, languages, or floors (1 to 8). The golden rule of high-speed puzzle solving in RRB is: NEVER START WITH NEGATIVE CLUES. Begin exclusively with definite positional anchors (e.g. "B sits third to the left of A", "P lives on the 3rd floor"), draw two parallel possibility cases (Case 1 and Case 2), and eliminate the violating case on the subsequent condition.',
        hi: 'आरआरबी एनटीपीसी सीबीटी-2 में पहेलियां और बैठक व्यवस्था सबसे अधिक वेटेज (रीजनिंग के 35 में से 10-15 अंक) रखती हैं। इसके 3 प्रमुख प्रकार हैं: (1) रैखिक बैठक: उत्तर की ओर उन्मुख (बायां = आपका बायां, दायां = आपका दायां) अथवा दक्षिण की ओर उन्मुख, तथा आमने-सामने दो समानांतर पंक्तियां। (2) वृत्ताकार बैठक: केंद्र की ओर उन्मुख (दक्षिणावर्त/Clockwise = बायां, वामावर्त/Anti-clockwise = दायां), केंद्र से बाहर उन्मुख, एवं मिश्रित दिशा। (3) बहु-विशेषता मैट्रिक्स/मंजिल पहेली: व्यक्तियों को उनके विभागों, शहरों या मंजिलों से सुमेलित करना। पहेली हल करने का स्वर्णिम नियम: कभी भी नकारात्मक कथनों से शुरुआत न करें। हमेशा निश्चित स्थिति वाले कथन से शुरुआत करें और 2 समानांतर केस बनाकर चलें।',
      },
      keyMechanisms: [
        {
          en: 'Facing Center Orientation: Facing Center: Moving Clockwise means moving to the LEFT. Moving Counter-Clockwise means moving to the RIGHT.',
          hi: 'केंद्रोन्मुख नियम: यदि सभी केंद्र की ओर देख रहे हैं: दक्षिणावर्त (Clockwise) चलना = बायीं ओर जाना। वामावर्त (Anti-clockwise) चलना = दायीं ओर जाना।',
        },
        {
          en: '"And" vs "Who" Linkage Rule: In "A sits second to left of B, who is third to right of C", "who" refers to the IMMEDIATE PRECEDING person B. In "A sits second to left of B and is third to right of C", "and" refers to the FIRST person A.',
          hi: '"और" बनाम "जो" का नियम: "A, B के बाएं दूसरा है, जो C के दाएं तीसरा है" में "जो" शब्द B के लिए आया है। "A, B के बाएं दूसरा है और C के दाएं तीसरा है" में "और" शब्द A के लिए आया है।',
        },
        {
          en: 'Dual-Case Elimination Technique: Always sketch two diagrams simultaneously. When a clue says "X is adjacent to Y", put X on left of Y in Case 1, and X on right of Y in Case 2. One case will automatically contradict later.',
          hi: 'दोहरा केस एलिमिनेशन: हमेशा दो चित्र एक साथ बनाएं। जब कहा जाए कि X, Y का पड़ोसी है, तो केस 1 में X को Y के बाएं रखें और केस 2 में दाएं। एक केस स्वतः निरस्त हो जाएगा।',
        },
      ],
    },
    formulasAndLaws: [
      {
        label: 'Relative Circular Position',
        expression: 'Opposite Person in Circle of N people = (Current Position + N/2) [for even N]',
        explanation: { en: 'In a circle of 8 people, person opposite to #1 is 1 + 8/2 = #5.', hi: '8 व्यक्तियों के वृत्त में #1 के ठीक सामने 1 + 4 = #5 होगा।' },
      },
    ],
    workedExamples: [
      {
        id: 'puz-ex-1',
        level: 'CBT-2 Advanced',
        question: {
          en: 'Six persons A, B, C, D, E, and F are sitting around a circular table facing the center. A is to the immediate left of B. C is between A and D. F is between B and E. Who is sitting opposite to C?',
          hi: 'छह व्यक्ति A, B, C, D, E और F एक वृत्ताकार मेज के चारों ओर केंद्र की ओर मुख करके बैठे हैं। A, B के ठीक बाएं है। C, A और D के बीच है। F, B और E के बीच है। C के ठीक सामने कौन बैठा है?',
        },
        standardSolution: {
          en: 'Step 1: Circular table with 6 seats facing center (Clockwise = Left, Counter-clockwise = Right).\nStep 2: Place B at bottom (Position 1). Since A is immediate left of B (clockwise), place A at Position 2.\nStep 3: "C is between A and D". Since Position 2 is A, Position 3 must be C and Position 4 must be D.\nStep 4: "F is between B and E". Since Position 1 is B, Position 6 must be F and Position 5 must be E.\nPositions in clockwise order: B(1), A(2), C(3), D(4), E(5), F(6).\nStep 5: Person opposite to C (Position 3) in a 6-seat circle is 3 + 6/2 = Position 6, which is F.\nAnswer: F is sitting opposite to C.',
          hi: 'चरण 1: 6 सीटों वाला वृत्त (दक्षिणावर्त = बायां)।\nचरण 2: B को स्थान 1 पर रखें। A, B के ठीक बाएं है => A स्थान 2 पर।\nचरण 3: C, A और D के बीच है => C स्थान 3 पर और D स्थान 4 पर।\nचरण 4: F, B और E के बीच है => F स्थान 6 पर और E स्थान 5 पर।\nचरण 5: दक्षिणावर्त क्रम: B(1), A(2), C(3), D(4), E(5), F(6)।\nस्थान 3 (C) के ठीक सामने स्थान 6 (F) है।\nउत्तर: F।',
        },
        topperShortcut: {
          en: '⚡ Direct Opposite Formula: Total = 6. Opposite of 3rd person is 3 + 3 = 6th person. Looking at F between B and E, 6th position is F in 10 seconds!',
          hi: '⚡ सीधा सूत्र: 6 व्यक्तियों में 3 के सामने 3 + 3 = 6ठा व्यक्ति होगा जो कि F है!',
        },
      },
    ],
    commonTraps: [
      {
        en: '"Who" vs "And" misinterpretation: 80% puzzle errors stem from linking the conjunction to the wrong subject. Remember: "Who / Whom / Whose" attaches to the nearest noun.',
        hi: '"जो" और "और" में त्रुटि: "जो" हमेशा निकटतम व्यक्ति से जुड़ता है, जबकि "और" वाक्य के पहले व्यक्ति से जुड़ता है।',
      },
    ],
    topperSpeedHacks: [
      {
        en: 'Floor Puzzle Anchor: In 7-floor puzzles (Floors 1 to 7), always look for clues mentioning "Top floor", "Ground floor", or "Even numbered floor prime number" (Floor 2). This fixes an immediate anchor.',
        hi: 'मंजिल पहेली ट्रिक: हमेशा सबसे ऊपर, सबसे नीचे या सम संख्या वाली अभाज्य मंजिल (मंजिल 2) के कथन से शुरुआत करें।',
      },
    ],
    quickRevisionBulletPoints: [
      { en: 'In North-facing row, Left is candidate’s left, Right is candidate’s right.', hi: 'उत्तर की ओर मुख: बायां आपका बायां, दायां आपका दायां।' },
      { en: 'In South-facing row, Left is candidate’s right, Right is candidate’s left.', hi: 'दक्षिण की ओर मुख: बायां आपका दायां, दायां आपका बायां।' },
    ],
    relatedPracticeCategory: 'General Intelligence & Reasoning',
  },

  // =========================================================================
  // 3. VENN DIAGRAMS, DIRECTION SENSE & BLOOD RELATIONS
  // =========================================================================
  'venn-direction-blood': {
    topicId: 'venn-direction-blood',
    title: {
      en: 'Venn Diagrams, Direction & Distance, and Coded Blood Relations',
      hi: 'वेन आरेख, दिशा एवं दूरी, तथा कूटबद्ध रक्त संबंध',
    },
    subjectCategory: { en: 'General Intelligence & Reasoning', hi: 'सामान्य बुद्धिमत्ता एवं तर्कशक्ति' },
    targetExam: { en: 'RRB NTPC CBT-1 & 2 / Group D / ALP / RPF', hi: 'आरआरबी एनटीपीसी / ग्रुप डी / एएलपी / आरपीएफ' },
    recommendedStudyTime: '3.0 Hours',
    blueprintImage: {
      src: './assets/rrb_master_curriculum.jpg',
      caption: {
        en: 'Spatial Vector & Kinship Genealogy Diagram',
        hi: 'स्थानिक सदिश एवं पारिवारिक वंशावली आरेख',
      },
    },
    conceptualTheory: {
      heading: {
        en: 'Coordinate Displacement, Shadow Geometry & Kinship Tree Mapping',
        hi: 'निर्देशांक विस्थापन, छाया ज्यामिति एवं वंशावली वृक्ष निरूपण',
      },
      deepExplanation: {
        en: 'This module encompasses three high-scoring logical reasoning areas: (1) Direction and Distance: The four cardinal directions (North, South, East, West) and four ordinal directions (North-East, North-West, South-East, South-West). Right turn is always 90° clockwise, and Left turn is always 90° counter-clockwise. Shortest straight-line distance is computed using Pythagoras theorem d = √(Δx² + Δy²). Shadow Geometry: At Sunrise (sun in East), shadows fall towards WEST. At Sunset (sun in West), shadows fall towards EAST. At 12:00 Noon, there is NO shadow. (2) Coded Blood Relations: Family tree hierarchy maps generations vertically (Grandparents -> Parents -> Self/Siblings -> Children) and gender (+ for Male, - for Female, double horizontal line = for marriage, single horizontal - for siblings). (3) Venn Diagrams: Evaluates logical class inclusions (Subsets: Dogs ⊂ Mammals ⊂ Animals), disjoint sets, and 3-circle overlap computations |A ∪ B ∪ C|.',
        hi: 'यह मॉड्यूल तीन प्रमुख विषयों को समाहित करता है: (1) दिशा एवं दूरी: चार मुख्य दिशाएं (उत्तर, दक्षिण, पूर्व, पश्चिम) और चार उप-दिशाएं (उत्तर-पूर्व, उत्तर-पश्चिम आदि)। दायां मोड़ = 90° दक्षिणावर्त, बायां मोड़ = 90° वामावर्त। न्यूनतम सीधी दूरी पाइथागोरस प्रमेय d = √(Δx² + Δy²) से ज्ञात होती है। छाया के नियम: सूर्योदय के समय (सूर्य पूर्व में) छाया पश्चिम की ओर पड़ती है। सूर्यास्त के समय (सूर्य पश्चिम में) छाया पूर्व की ओर पड़ती है। दोपहर 12 बजे कोई छाया नहीं बनती। (2) रक्त संबंध: वंशावली वृक्ष में पीढ़ियों को लंबवत रूप में दर्शाया जाता है (+ पुरुष हेतु, - महिला हेतु, = वैवाहिक संबंध हेतु, - भाई-बहन हेतु)। (3) वेन आरेख: तार्किक वर्गों के समावेशन एवं 3 वृत्तों के उभयनिष्ठ क्षेत्रों का विश्लेषण।',
      },
      keyMechanisms: [
        {
          en: 'Pythagorean Triplets for Speed: Memorize standard right-triangle integer triplets: (3, 4, 5), (5, 12, 13), (7, 24, 25), (8, 15, 17), (9, 40, 41), (11, 60, 61), (12, 35, 37), (20, 21, 29). Scaled triplets (6, 8, 10) frequently appear.',
          hi: 'पाइथागोरस त्रिक: (3, 4, 5), (5, 12, 13), (7, 24, 25), (8, 15, 17), (9, 40, 41)। जब भी 5 मी और 12 मी के लंबवत विस्थापन हों, न्यूनतम दूरी तुरंत 13 मी होगी।',
        },
        {
          en: 'Morning Shadow Rule: At sunrise, sun is in East, so shadow is on WEST. If a person faces North in the morning, their shadow is to their LEFT. If they face South, shadow is to their RIGHT.',
          hi: 'सुबह की छाया का नियम: सूर्योदय के समय छाया पश्चिम में होती है। यदि व्यक्ति का मुख उत्तर की ओर है, तो छाया उसके बायीं ओर होगी। यदि दक्षिण की ओर है, तो दायीं ओर होगी।',
        },
        {
          en: 'Generation Gap Notation in Blood Relations: Self generation = 0 (brother, sister, cousin, spouse). +1 generation (father, mother, uncle, aunt). +2 generation (grandfather, grandmother). -1 generation (son, daughter, nephew, niece). -2 generation (grandson, granddaughter).',
          hi: 'रक्त संबंध पीढ़ी अंतर: स्वयं की पीढ़ी = 0। +1 पीढ़ी = माता, पिता, चाचा। +2 पीढ़ी = दादा, दादी। -1 पीढ़ी = पुत्र, पुत्री, भतीजा। -2 पीढ़ी = पोता, पोती।',
        },
      ],
    },
    formulasAndLaws: [
      {
        label: 'Straight Line Displacement',
        expression: 'Distance = √[(x₂ - x₁)² + (y₂ - y₁)²]',
        explanation: { en: 'Straight line distance between final and starting point.', hi: 'प्रारंभिक एवं अंतिम बिंदु के मध्य सीधी न्यूनतम दूरी।' },
      },
      {
        label: '3-Circle Venn Union Formula',
        expression: '|A ∪ B ∪ C| = n(A) + n(B) + n(C) - n(A∩B) - n(B∩C) - n(C∩A) + n(A∩B∩C)',
        explanation: { en: 'Calculates total individuals across three overlapping categories.', hi: 'तीन परस्पर व्यापी श्रेणियों के कुल व्यक्तियों की गणना।' },
      },
    ],
    workedExamples: [
      {
        id: 'dir-ex-1',
        level: 'CBT-1 Foundation',
        question: {
          en: 'A person walks 12 km North, then turns Right and walks 5 km. How far is he from his starting point and in which direction?',
          hi: 'एक व्यक्ति 12 किमी उत्तर की ओर चलता है, फिर दाएं मुड़कर 5 किमी चलता है। वह अपने प्रारंभिक बिंदु से कितनी दूरी पर और किस दिशा में है?',
        },
        standardSolution: {
          en: 'Step 1: Coordinate mapping from origin (0, 0):\nWalks 12 km North => reaches point (0, 12).\nTurns Right (East) and walks 5 km => reaches point (5, 12).\nStep 2: Distance from origin = √(5² + 12²) = √(25 + 144) = √169 = 13 km.\nStep 3: Point (5, 12) is in the First Quadrant relative to (0, 0), which is North-East.\nAnswer: 13 km, North-East.',
          hi: 'चरण 1: मूल बिंदु (0, 0) से: 12 किमी उत्तर => (0, 12)। दाएं मुड़कर (पूर्व में) 5 किमी => (5, 12)।\nचरण 2: न्यूनतम दूरी = √(5² + 12²) = √169 = 13 किमी।\nचरण 3: दिशा: उत्तर-पूर्व (North-East)।\nउत्तर: 13 किमी, उत्तर-पूर्व।',
        },
        topperShortcut: {
          en: '⚡ Triplet Recognition: 5 and 12 perpendicular legs immediately give 13 km hypotenuse! North + East = North-East in 3 seconds!',
          hi: '⚡ पाइथागोरस त्रिक: 5 और 12 का त्रिक = 13 किमी! उत्तर + पूर्व = उत्तर-पूर्व मात्र 3 सेकंड में!',
        },
      },
      {
        id: 'bld-ex-2',
        level: 'CBT-2 Advanced',
        question: {
          en: 'Pointing to a photograph, a woman says, "His brother’s father is the only son of my grandfather." How is the woman related to the man in the photograph?',
          hi: 'एक तस्वीर की ओर इशारा करते हुए एक महिला कहती है, "उसके भाई के पिता मेरे दादाजी के इकलौते पुत्र हैं।" महिला का तस्वीर वाले व्यक्ति से क्या संबंध है?',
        },
        standardSolution: {
          en: 'Step 1: Break statement backwards from speaker: "the only son of my grandfather".\nMy grandfather’s only son = My Father.\nStep 2: Connect to the man in the photograph: "His brother’s father" = "the man’s father".\nStep 3: Therefore, "the man’s father" = "My father".\nStep 4: Since they share the same father, the woman is the man’s Sister.\nAnswer: Sister.',
          hi: 'चरण 1: अंत से शुरू करें: "मेरे दादाजी के इकलौते पुत्र" = मेरे पिता।\nचरण 2: तस्वीर वाले व्यक्ति से जोड़ें: "उसके भाई के पिता" = उस व्यक्ति के पिता।\nचरण 3: अतः उस व्यक्ति के पिता = मेरे पिता।\nचरण 4: दोनों के पिता एक ही हैं, अतः वह महिला उस व्यक्ति की बहन (Sister) है।\nउत्तर: बहन (Sister)।',
        },
        topperShortcut: {
          en: '⚡ Backward Decoding: "Only son of my grandfather" = Father. "His father is my father" => Brother/Sister relationship. The woman is his Sister in 5 seconds!',
          hi: '⚡ उलटा डिकोडिंग: दादाजी का इकलौता पुत्र = पिता। उसके पिता मेरे पिता = बहन!',
        },
      },
    ],
    commonTraps: [
      {
        en: 'Gender Assumption Trap in Blood Relations: Never assume gender based on names (e.g. Suman, Kiran, Sonu can be male or female in questions). Gender is determined ONLY by pronouns (he/she) or explicit relational tags (mother, brother, son).',
        hi: 'नाम से लिंग का अनुमान लगाना: सुमन, किरण, सोनू जैसे नामों से लिंग का अनुमान न लगाएं। लिंग केवल सर्वनाम (वह/उसका) या संबंध (भाई/बहन) से ही तय करें।',
      },
    ],
    topperSpeedHacks: [
      {
        en: 'Net Turn Trick in Directions: Each Right turn = +90°, each Left turn = -90°. If a person turns 3 Right and 2 Left: Net turn = 3(+90°) + 2(-90°) = +90° (single Right turn). Ignore the zig-zags!',
        hi: 'शुद्ध मोड़ विधि: दायां मोड़ = +90°, बायां = -90°। 3 दाएं और 2 बाएं का शुद्ध परिणाम = केवल 1 दायां मोड़ (+90°)!',
      },
    ],
    quickRevisionBulletPoints: [
      { en: 'East is 90° clockwise from North.', hi: 'उत्तर से दक्षिणावर्त 90° पर पूर्व होता है।' },
      { en: 'Maternal uncle = Mother’s brother. Paternal uncle = Father’s brother.', hi: 'मामा = माता का भाई। चाचा = पिता का भाई।' },
    ],
    relatedPracticeCategory: 'General Intelligence & Reasoning',
  },

  // =========================================================================
  // 4. CRITICAL REASONING & DATA SUFFICIENCY
  // =========================================================================
  'critical-reasoning-data-suff': {
    topicId: 'critical-reasoning-data-suff',
    title: {
      en: 'Statement & Assumptions, Course of Action & Data Sufficiency',
      hi: 'कथन एवं पूर्वधारणाएं, कार्यवाही के तरीके एवं समंक पर्याप्तता',
    },
    subjectCategory: { en: 'General Intelligence & Reasoning', hi: 'सामान्य बुद्धिमत्ता एवं तर्कशक्ति' },
    targetExam: { en: 'RRB NTPC CBT-2 / Station Master / JE', hi: 'आरआरबी एनटीपीसी सीबीटी-2 / स्टेशन मास्टर' },
    recommendedStudyTime: '3.5 Hours',
    blueprintImage: {
      src: './assets/rrb_master_curriculum.jpg',
      caption: {
        en: 'Deductive Logic & Sufficiency Decision Flowchart',
        hi: 'निगमनात्मक तर्क एवं पर्याप्तता निर्णय प्रवाह आरेख',
      },
    },
    conceptualTheory: {
      heading: {
        en: 'Implicit Premise Validation, Course of Action Pragmatism & Sufficiency Checks',
        hi: 'अंतर्निहित पूर्वधारणा सत्यापन, व्यावहारिक कार्यवाही एवं पर्याप्तता परीक्षण',
      },
      deepExplanation: {
        en: 'Critical Reasoning in RRB NTPC Level 5/6 and Station Master evaluates administrative decision-making, executive temperament, and objective data validation. (1) Statement & Assumptions: An assumption is an unstated, implicit premise that the speaker/author takes for granted while making the statement. A valid assumption must directly support the statement, must NOT contain extreme words ("only", "all", "never", "best", "definitely"), and must NOT assume hypothetical external scenarios. (2) Statement & Course of Action: An administrative course of action must be a realistic, pragmatic step that mitigates or solves the problem without creating a worse secondary problem. Harsh, disproportionate punishments are invalid. (3) Statement & Arguments: Strong arguments are backed by facts, constitutional rights, or economic realities; Weak arguments are based on emotions, superstitions, or mere personal bias. (4) Data Sufficiency: Tests whether the question can be answered using Statement 1 alone, Statement 2 alone, both combined, or neither. The critical rule is: DO NOT ACTUALLY CALCULATE THE NUMERICAL ANSWER; only verify whether a UNIQUE solution is mathematically determinable.',
        hi: 'आरआरबी एनटीपीसी लेवल 5/6 और स्टेशन मास्टर में क्रिटिकल रीजनिंग प्रशासनिक निर्णय क्षमता और निष्पक्ष तर्क का परीक्षण करती है। (1) कथन एवं पूर्वधारणाएं: पूर्वधारणा वह अव्यक्त विचार है जिसे वक्ता कथन कहते समय सत्य मान लेता है। वैध पूर्वधारणा कथन का प्रत्यक्ष समर्थन करती है, इसमें अतिवादी शब्द ("केवल", "सभी", "कभी नहीं", "सर्वोत्तम") नहीं होने चाहिए। (2) कथन एवं कार्यवाही: कार्यवाही व्यावहारिक और यथार्थवादी होनी चाहिए जो समस्या का समाधान करे बिना कोई नई विकट समस्या उत्पन्न किए। अत्यधिक कठोर या अनुपातहीन दंड अमान्य होते हैं। (3) कथन एवं तर्क: मजबूत तर्क तथ्यों और संवैधानिक मूल्यों पर आधारित होते हैं; कमजोर तर्क भावनाओं या अंधविश्वासों पर आधारित होते हैं। (4) समंक पर्याप्तता (Data Sufficiency): इसमें यह जांचना होता है कि क्या कथन 1 या कथन 2 या दोनों मिलकर अद्वितीय उत्तर दे सकते हैं। स्वर्णिम नियम: वास्तविक उत्तर की गणना न करें, केवल यह देखें कि क्या अद्वितीय उत्तर संभव है।',
      },
      keyMechanisms: [
        {
          en: 'Negation Test for Assumptions: If you negate (reverse) the assumption and the original statement collapses or becomes meaningless, then the assumption is DEFINITELY VALID. If the statement still holds, the assumption is INVALID.',
          hi: 'नकार परीक्षण (Negation Test): यदि पूर्वधारणा को उलट दिया जाए और कथन निरर्थक हो जाए, तो वह पूर्वधारणा 100% मान्य है। यदि कथन पर कोई प्रभाव न पड़े, तो वह अमान्य है।',
        },
        {
          en: 'Course of Action Feasibility Check: (1) Does it solve the problem? (2) Is it feasible/practical? (3) Does it avoid creating a bigger problem? If YES to all three, the course of action is correct.',
          hi: 'कार्यवाही की जांच: (1) क्या यह समस्या को कम करती है? (2) क्या यह व्यावहारिक है? (3) क्या इससे कोई बड़ा संकट तो उत्पन्न नहीं हो रहा? तीनों हां होने पर कार्यवाही सही है।',
        },
        {
          en: 'Data Sufficiency Trap - Unique Value Requirement: In questions like "What is the age of X?", if Statement 1 gives two possible ages (e.g. x = 20 or 35), Statement 1 is NOT SUFFICIENT. A unique single value is mandatory.',
          hi: 'समंक पर्याप्तता जाल: यदि कथन 1 से दो संभावित उत्तर मिलते हैं (जैसे x = 20 या 35), तो कथन 1 पर्याप्त नहीं है। एक अद्वितीय मान होना अनिवार्य है।',
        },
      ],
    },
    formulasAndLaws: [
      {
        label: 'Negation Test Rule',
        expression: 'Statement ⇏ ~Assumption (Valid Assumption if Negation breaks Statement)',
        explanation: { en: 'Infallible method to confirm implicit premises.', hi: 'पूर्वधारणाओं की सत्यता जांचने की अचूक विधि।' },
      },
      {
        label: 'Data Sufficiency Options Matrix',
        expression: '1 Alone | 2 Alone | Either 1 or 2 | Neither 1 nor 2 | Both 1 and 2 together',
        explanation: { en: '5-choice decision tree for data sufficiency.', hi: 'समंक पर्याप्तता का 5-विकल्पीय निर्णय ढांचा।' },
      },
    ],
    workedExamples: [
      {
        id: 'crit-ex-1',
        level: 'CBT-2 Advanced',
        question: {
          en: 'Statement: "Please do not use cell phones while crossing railway tracks" — An announcement by Railway Administration.\nAssumptions:\nI. People may pay attention to the announcement and stop using cell phones while crossing tracks.\nII. Cell phone use while crossing railway tracks poses a severe hazard of accidents.',
          hi: 'कथन: "कृपया रेलवे ट्रैक पार करते समय मोबाइल फोन का उपयोग न करें" — रेलवे प्रशासन द्वारा एक उद्घोषणा।\nपूर्वधारणाएं:\nI. लोग उद्घोषणा पर ध्यान दे सकते हैं और ट्रैक पार करते समय फोन का उपयोग बंद कर सकते हैं।\nII. रेलवे ट्रैक पार करते समय फोन का उपयोग दुर्घटनाओं का गंभीर खतरा पैदा करता है।',
        },
        standardSolution: {
          en: 'Step 1: Analyze Assumption I: Whenever an administration issues a notice or warning, it inherently assumes that people will read/listen to it and adhere to it. Without this assumption, issuing the announcement would be futile. Assumption I is implicit.\nStep 2: Analyze Assumption II: The reason for specifically warning against cell phone use on tracks is the inherent danger/hazard of distracted walking resulting in train collisions. Assumption II is implicit.\nAnswer: Both Assumptions I and II are implicit.',
          hi: 'चरण 1: पूर्वधारणा I: जब भी प्रशासन कोई चेतावनी जारी करता है, तो यह मानकर चलता है कि लोग इसे सुनेंगे और इसका पालन करेंगे। अतः पूर्वधारणा I अंतर्निहित है।\nचरण 2: पूर्वधारणा II: ट्रैक पर फोन उपयोग न करने की चेतावनी इसलिए दी गई है क्योंकि इससे ट्रेन दुर्घटना का गंभीर खतरा है। अतः पूर्वधारणा II अंतर्निहित है।\nउत्तर: पूर्वधारणाएं I और II दोनों अंतर्निहित हैं।',
        },
        topperShortcut: {
          en: '⚡ Administration Notice Rule: Any announcement/advertisement ALWAYS assumes that: (1) Audience exists, (2) Audience will heed the message, and (3) The cause being addressed is real and hazardous. Both valid instantly!',
          hi: '⚡ प्रशासनिक सूचना नियम: किसी भी सरकारी सूचना में यह अंतर्निहित होता है कि लोग उसे सुनेंगे तथा समस्या वास्तविक है। दोनों स्वतः सही!',
        },
      },
    ],
    commonTraps: [
      {
        en: 'Extreme Language Trap: Assumptions containing words like "all", "only", "always", "never", "best", "sole" are 99% INVALID in RRB exams unless explicitly stated in the premise.',
        hi: 'अतिवादी शब्दों का जाल: पूर्वधारणाओं में "सभी", "केवल", "हमेशा", "कभी नहीं" जैसे शब्द 99% मामलों में अमान्य होते हैं।',
      },
    ],
    topperSpeedHacks: [
      {
        en: 'Never Calculate in Data Sufficiency: Once you see that you have two independent linear equations with two variables (e.g. 2x + 3y = 12 and 5x - y = 4), STOP! Do not solve for x and y. You know both equations together give unique solutions. Mark "Both Together" and save 45 seconds!',
        hi: 'गणना कभी न करें: यदि दो चरों में दो स्वतंत्र रैखिक समीकरण मिल जाएं, तो x और y का मान निकालने मत बैठिए। तुरंत "दोनों मिलकर पर्याप्त हैं" चुनकर 45 सेकंड बचाएं!',
      },
    ],
    quickRevisionBulletPoints: [
      { en: 'An argument is strong only if it is practical, factual, and logically sound.', hi: 'तर्क तभी मजबूत माना जाता है जब वह व्यावहारिक, तथ्यात्मक और तार्किक हो।' },
      { en: 'Course of action must directly attack the root cause of the problem.', hi: 'कार्यवाही समस्या के मूल कारण पर सीधा प्रहार करने वाली होनी चाहिए।' },
    ],
    relatedPracticeCategory: 'General Intelligence & Reasoning',
  },
};
