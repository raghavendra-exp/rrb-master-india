import type { BilingualText } from '../../types';

export interface RoadmapLevel {
  levelNumber: number;
  title: BilingualText;
  description: BilingualText;
  actionItems: BilingualText[];
  recommendedTools: string[];
}

export interface DailyRoutineSlot {
  timeSlot: string;
  activity: BilingualText;
  focusArea: BilingualText;
  duration: string;
  slotType: 'core' | 'drill' | 'revision' | 'mock' | 'fitness';
}

export interface WeeklyScheduleDay {
  day: BilingualText;
  schedule: BilingualText;
  targetMocks: number;
}

export interface PreparationCircumstance {
  id: 'full-time' | 'working-pro' | 'college-student' | 'crash-course';
  name: BilingualText;
  badge: BilingualText;
  description: BilingualText;
  dailyHours: string;
  totalDurationMonths: string;
  targetAudience: BilingualText;
  dailyRoutine: DailyRoutineSlot[];
  weeklyPlan: WeeklyScheduleDay[];
  strategyPillars: BilingualText[];
  proTips: BilingualText[];
  commonPitfalls: BilingualText[];
}

export interface SubjectAllocation {
  subject: BilingualText;
  hours: number;
  percentage: number;
  topperScoringTarget: string;
  keyFocusAreas: BilingualText[];
  topperEdge: BilingualText;
}

export interface ScoreMilestone {
  monthRange: string;
  phaseName: BilingualText;
  cumulativeHours: number;
  expectedMockScore: string;
  keyMilestones: BilingualText[];
}

export interface TopperBenchmark {
  examId: string;
  examName: BilingualText;
  qualification: BilingualText;
  competitionContext: BilingualText;
  totalHoursRequired: number;
  idealTimelineMonths: string;
  topperTargetScore: {
    cbt1: string;
    cbt2?: string;
    cutoffSafetyMargin: string;
    targetPercentile: string;
    rationale: BilingualText;
  };
  subjectHoursBreakdown: SubjectAllocation[];
  scoreProgressionMilestones: ScoreMilestone[];
  topperSecretHabits: BilingualText[];
  fatalMistakesToAvoid: BilingualText[];
}

export const ZERO_TO_RRB_ROADMAP: RoadmapLevel[] = [
  {
    levelNumber: 0,
    title: { en: 'Level 0: Choose Exam & Eligibility Check', hi: 'स्तर 0: सही परीक्षा का चयन एवं पात्रता जांच' },
    description: {
      en: 'Determine whether you qualify for NTPC (Undergrad vs Graduate), Group D, or JE based on age, educational qualification, and medical standards.',
      hi: 'अपनी आयु, शैक्षणिक योग्यता और चिकित्सा मानकों के आधार पर तय करें कि आप एनटीपीसी, ग्रुप डी या जेई में से किसके लिए पात्र हैं।',
    },
    actionItems: [
      { en: 'Use the "Which RRB Exam Can I Apply For?" Discovery Tool', hi: '"मैं किस परीक्षा के लिए पात्र हूँ?" टूल से अपनी पात्रता जांचें' },
      { en: 'Review 7th CPC Pay Matrix and job profiles to set target post', hi: '7वें वेतन आयोग के पे-लेवल और कार्य विवरण देखकर लक्ष्य पद निर्धारित करें' },
      { en: 'Verify eyesight criteria with IRMM Medical Standards (A-2, A-3, B-1, C-2)', hi: 'रेलवे मेडिकल मैनुअल के अनुसार अपने आंखों के विज़न की जांच करें' },
    ],
    recommendedTools: ['Exam Discovery Tool', 'Job Profile Explorer', 'Medical Center'],
  },
  {
    levelNumber: 1,
    title: { en: 'Level 1: Understand the Official Notification', hi: 'स्तर 1: आधिकारिक अधिसूचना का गहन विश्लेषण' },
    description: {
      en: 'Carefully study the latest Centralized Employment Notice (CEN) for your chosen recruitment.',
      hi: 'संबंधित भर्ती की नवीनतम केंद्रीकृत रोजगार अधिसूचना (CEN) का ध्यानपूर्वक अध्ययन करें।',
    },
    actionItems: [
      { en: 'Note application timelines, fee structure, and category certificates', hi: 'आवेदन तिथियों, परीक्षा शुल्क और जाति/श्रेणी प्रमाणपत्रों के प्रारूप को समझें' },
      { en: 'Check zone-wise vacancies and past cutoff benchmarks', hi: 'विभिन्न 21 आरआरबी ज़ोन की रिक्तियों और पूर्व कट-ऑफ का अध्ययन करें' },
      { en: 'Confirm whether your target post needs Typing or CBAT', hi: 'स्पष्ट करें कि आपके पद के लिए टाइपिंग टेस्ट या सीबीएटी (साइको) आवश्यक है या नहीं' },
    ],
    recommendedTools: ['Zone Explorer', 'Vacancy Tracker', 'Cutoff Database'],
  },
  {
    levelNumber: 2,
    title: { en: 'Level 2: Deconstruct the Exam Pattern & Syllabus', hi: 'स्तर 2: परीक्षा पैटर्न और विस्तृत पाठ्यक्रम' },
    description: {
      en: 'Break down CBT stages, subject-wise weightage, duration, and 1/3rd negative marking rules.',
      hi: 'परीक्षा के चरणों, विषयवार अंक वितरण, समय सीमा और 1/3 नकारात्मक अंकन नियमों को समझें।',
    },
    actionItems: [
      { en: 'Map Mathematics (30 Qs in CBT-1, 35 in CBT-2 for NTPC; 25 in Group D)', hi: 'गणित के विषयों का परीक्षावार अंक भार देखें' },
      { en: 'Map General Science (25 Qs in Group D; 30 Qs in JE CBT-1; integrated in NTPC GA)', hi: 'सामान्य विज्ञान के 10वीं स्तर भौतिकी, रसायन व जीव विज्ञान का पाठ्यक्रम नोट करें' },
      { en: 'Review Technical discipline syllabus for RRB JE CBT-2 (100 Qs)', hi: 'आरआरबी जेई सीबीटी-2 के 100 तकनीकी प्रश्नों के डिप्लोमा पाठ्यक्रम का विश्लेषण करें' },
    ],
    recommendedTools: ['Syllabus Page', 'Formula Master', 'Legitimate Books'],
  },
  {
    levelNumber: 3,
    title: { en: 'Level 3: Strong Foundation with NCERT & Basics', hi: 'स्तर 3: एनसीईआरटी और मूलभूत सिद्धांतों की नींव' },
    description: {
      en: 'Clear your basic concepts from Class 9 & 10 NCERT books and fundamental arithmetic rules.',
      hi: 'कक्षा 9 और 10 की एनसीईआरटी पुस्तकों तथा अंकगणित के मूल नियमों से अपने बुनियादी सिद्धांतों को सुदृढ़ करें।',
    },
    actionItems: [
      { en: 'Read NCERT Class 9th & 10th Science chapters line by line', hi: 'एनसीईआरटी विज्ञान के 9वीं व 10वीं के अध्यायों का गहन अध्ययन करें' },
      { en: 'Master mental arithmetic, tables up to 30, squares up to 50, cubes up to 25', hi: '30 तक पहाड़े, 50 तक वर्ग और 25 तक घन याद करें' },
      { en: 'Learn fraction-to-percentage conversion chart', hi: 'भिन्न से प्रतिशत रूपांतरण तालिका को कंठस्थ करें' },
    ],
    recommendedTools: ['Formula Master', 'Flashcards', 'Legitimate Books (NCERT)'],
  },
  {
    levelNumber: 4,
    title: { en: 'Level 4: Chapter-wise Concept Mastery & Shortcuts', hi: 'स्तर 4: अध्यायवार अवधारणाएं एवं शॉर्टकट ट्रिक्स' },
    description: {
      en: 'Master each chapter methodically: Standard concept, derivation, fast shortcut trick, and solved examples.',
      hi: 'प्रत्येक अध्याय को व्यवस्थित रूप से सीखें: सामान्य विधि, सिद्ध करना, तीव्र शॉर्टकट और हल किए गए उदाहरण।',
    },
    actionItems: [
      { en: 'Study LCM Unit method for Time & Work and Pipes & Cisterns', hi: 'समय और कार्य के लिए ल.स. इकाई विधि का अभ्यास करें' },
      { en: 'Learn Alligation rule for fast mixture and profit problems', hi: 'मिश्रण और लाभ-हानि प्रश्नों को तीव्र गति से हल करने के लिए एलिगेशन सीखें' },
      { en: 'Review 3-Year CI-SI difference and speed conversions (18:5 rule)', hi: 'चक्रवृद्धि-साधारण ब्याज अंतर और ट्रेन गति रूपांतरण सूत्र सीखें' },
    ],
    recommendedTools: ['Shortcut Lab', 'Formula Book'],
  },
  {
    levelNumber: 5,
    title: { en: 'Level 5: Topic-wise Timed Practice & Speed Lab', hi: 'स्तर 5: विषयवार समयबद्ध अभ्यास एवं स्पीड लैब' },
    description: {
      en: 'Solve 20 to 50 questions per topic under timed conditions to build speed without sacrificing accuracy.',
      hi: 'सटीकता बनाए रखते हुए गति बढ़ाने के लिए प्रति विषय 20 से 50 प्रश्नों का समयबद्ध अभ्यास करें।',
    },
    actionItems: [
      { en: 'Train with Speed Lab for rapid calculations and GK recall', hi: 'तीव्र गणना और सामान्य ज्ञान स्मरण हेतु स्पीड लैब में अभ्यास करें' },
      { en: 'Maintain accuracy above 85% before trying to reduce solving time', hi: 'समय कम करने से पहले अपनी सटीकता को 85% से ऊपर रखने का लक्ष्य रखें' },
    ],
    recommendedTools: ['Practice Engine', 'Speed Lab'],
  },
  {
    levelNumber: 6,
    title: { en: 'Level 6: Previous Year Questions (PYQ) Mastery', hi: 'स्तर 6: पिछले वर्षों के प्रश्न पत्रों (PYQ) का गहन अभ्यास' },
    description: {
      en: 'Solve all recent TCS-pattern papers from 2018 to present across all shifts.',
      hi: '2018 से लेकर अब तक के सभी शिफ्टों के टीसीएस पैटर्न वाले प्रश्न पत्रों को हल करें।',
    },
    actionItems: [
      { en: 'Practice verified PYQs for NTPC, Group D, and JE', hi: 'एनटीपीसी, ग्रुप डी और जेई के सत्यापित गत वर्ष प्रश्नों का अभ्यास करें' },
      { en: 'Identify high-weightage topics and recurring question formats', hi: 'अधिक अंक भार वाले अध्यायों और बार-बार पूछे जाने वाले पैटर्नों को पहचानें' },
    ],
    recommendedTools: ['PYQ Master', 'Question Bank'],
  },
  {
    levelNumber: 7,
    title: { en: 'Level 7: Sectional Tests & Time Management', hi: 'स्तर 7: अनुभागीय परीक्षण और समय प्रबंधन' },
    description: {
      en: 'Take timed sectional tests (Maths, Reasoning, Science, GA) to optimize question selection.',
      hi: 'प्रश्नों के सही चयन हेतु समयबद्ध अनुभागीय टेस्ट (गणित, रीजनिंग, विज्ञान, सामान्य ज्ञान) दें।',
    },
    actionItems: [
      { en: 'Practice leaving tricky/lengthy questions for round 2', hi: 'कठिन और समय लेने वाले प्रश्नों को दूसरे राउंड के लिए छोड़ना सीखें' },
      { en: 'Limit General Awareness section to 12 minutes in the actual exam', hi: 'वास्तविक परीक्षा में सामान्य जागरूकता खंड को 12 मिनट में पूरा करने का अभ्यास करें' },
    ],
    recommendedTools: ['Practice Engine', 'CBT Test Engine'],
  },
  {
    levelNumber: 8,
    title: { en: 'Level 8: Full-Length Real CBT Mock Test Simulations', hi: 'स्तर 8: पूर्णकालिक वास्तविक सीबीटी मॉक टेस्ट' },
    description: {
      en: 'Simulate the exact 90-minute or 120-minute examination in the authentic TCS iON interface.',
      hi: 'प्रामाणिक टीसीएस इंटरफेस में पूरे 90 अथवा 120 मिनट के मॉक टेस्ट का सिमुलेशन करें।',
    },
    actionItems: [
      { en: 'Take full mock tests in examination-like environment without distractions', hi: 'बिना किसी व्यवधान के परीक्षा जैसे माहौल में पूर्ण मॉक टेस्ट दें' },
      { en: 'Practice using the Question Palette, Mark for Review, and Clear Response', hi: 'प्रश्न पैलेट, मार्क फॉर रिव्यू और उत्तर मिटाने की कार्यप्रणाली में निपुण हों' },
    ],
    recommendedTools: ['Live CBT Mock Tests'],
  },
  {
    levelNumber: 9,
    title: { en: 'Level 9: Error Notebook & Weak Area Eradication', hi: 'स्तर 9: त्रुटि विश्लेषण एवं कमजोर क्षेत्रों का निवारण' },
    description: {
      en: 'Review every incorrect and unattempted question in your Mistake Notebook with systematic spaced repetition.',
      hi: 'प्रत्येक गलत और अनुत्तरित प्रश्न को अपनी मिस्टेक नोटबुक में वर्गीकृत करें और नियमित दोहराएं।',
    },
    actionItems: [
      { en: 'Tag errors: Conceptual, Calculation, Misread, Guess, Time Pressure', hi: 'गलतियों को वर्गीकृत करें: वैचारिक, गणनात्मक, गलत पढ़ना, तुक्का या समय का दबाव' },
      { en: 'Revise logged error questions on Day 1, 3, 7, 15, and 30', hi: '1, 3, 7, 15 और 30 दिन के अंतराल पर दर्ज प्रश्नों का पुनः अभ्यास करें' },
    ],
    recommendedTools: ['Error Notebook', 'Flashcards'],
  },
  {
    levelNumber: 10,
    title: { en: 'Level 10: Stage-Specific Readiness (PET / CBAT / Typing / DV)', hi: 'स्तर 10: विशेष चरण तैयारी (पीईटी, साइको, टाइपिंग एवं डीवी)' },
    description: {
      en: 'Transition seamlessly into your post-specific second or third stage requirements.',
      hi: 'अपने लक्षित पद के अनुसार द्वितीय या तृतीय चरण की विशिष्ट आवश्यकताओं की तैयारी करें।',
    },
    actionItems: [
      { en: 'Group D: Train daily for 1000m running and 35kg/20kg weight carrying in PET Lab', hi: 'ग्रुप डी: पीईटी लैब में 1000 मीटर दौड़ और वजन ढोने का नियमित अभ्यास करें' },
      { en: 'Station Master: Practice 5 battery psycho tests in CBAT Lab', hi: 'स्टेशन मास्टर: सीबीएटी लैब में 5 बैटरी साइको टेस्ट का अभ्यास करें' },
      { en: 'Clerical Posts: Reach 35+ WPM English / 30+ WPM Hindi in Typing Lab', hi: 'लिपिक पद: टाइपिंग लैब में 35+ wpm अंग्रेजी या 30+ wpm हिंदी गति प्राप्त करें' },
      { en: 'Prepare original certificates using the DV Checklist', hi: 'दस्तावेज़ सत्यापन चेकलिस्ट की मदद से सभी मूल प्रमाणपत्र तैयार रखें' },
    ],
    recommendedTools: ['PET Lab', 'CBAT Lab', 'Typing Speed Lab', 'DV Checklist'],
  },
];

export const PREPARATION_CIRCUMSTANCES: PreparationCircumstance[] = [
  {
    id: 'full-time',
    name: { en: 'Full-Time Dedicated Aspirant', hi: 'पूर्णकालिक समर्पित अभ्यर्थी' },
    badge: { en: '8-10 Hours / Day • 4-6 Months', hi: '8-10 घंटे / दिन • 4-6 माह' },
    dailyHours: '8 – 10 Hours',
    totalDurationMonths: '4 to 6 Months (900 – 1,100 Hours)',
    targetAudience: {
      en: 'Aspirants solely preparing for RRB with no college or office commitments.',
      hi: 'ऐसे अभ्यर्थी जो बिना किसी नौकरी या कॉलेज दबाव के पूर्णतः रेलवे परीक्षा की तैयारी कर रहे हैं।',
    },
    description: {
      en: 'High-intensity dual-phase architecture: rapid concept foundation in 45 days, followed by heavy 80+ daily question drills, bi-weekly mocks, and deep mistake eradication.',
      hi: 'उच्च तीव्रता रणनीति: पहले 45 दिनों में बुनियादी अवधारणाएं पूरी करें, तत्पश्चात दैनिक 80+ प्रश्न हल, सप्ताह में 2 पूर्ण मॉक और मिस्टेक नोटबुक पर गहन कार्य करें।',
    },
    dailyRoutine: [
      {
        timeSlot: '06:00 AM – 08:30 AM',
        activity: { en: 'Mathematics & Mental Arithmetic', hi: 'गणित एवं गणना अभ्यास' },
        focusArea: { en: 'Fresh morning mind: Speed calculations, tables, squares, 40-50 practice problems', hi: 'प्रातःकाल तीव्र मस्तिष्क: 40-50 अंकगणित प्रश्न, पहाड़े, वर्ग, तीव्र हल' },
        duration: '2.5 Hours',
        slotType: 'core',
      },
      {
        timeSlot: '09:30 AM – 11:30 AM',
        activity: { en: 'General Intelligence & Reasoning', hi: 'तर्कशक्ति एवं बौद्धिक क्षमता' },
        focusArea: { en: 'Puzzles, Seating Arrangement, Syllogisms, Coding-Decoding (35-40 timed Qs)', hi: 'पहेलियाँ, बैठने की व्यवस्था, न्याय निगमन, कोडिंग-डिकोडिंग (35-40 प्रश्न)' },
        duration: '2.0 Hours',
        slotType: 'drill',
      },
      {
        timeSlot: '12:00 PM – 01:30 PM',
        activity: { en: 'General Science (Class 9-10 NCERT)', hi: 'सामान्य विज्ञान (9वीं-10वीं एनसीईआरटी)' },
        focusArea: { en: 'Line-by-line NCERT reading, physics formulas, chemical equations & biological processes', hi: 'एनसीईआरटी लाइन-दर-लाइन अध्ययन, भौतिकी सूत्र, रासायनिक अभिक्रियाएं व जीव विज्ञान' },
        duration: '1.5 Hours',
        slotType: 'core',
      },
      {
        timeSlot: '03:00 PM – 04:30 PM',
        activity: { en: 'Railway GK & Current Affairs Capsule', hi: 'रेलवे सामान्य ज्ञान एवं समसामयिकी' },
        focusArea: { en: 'Vande Bharat specs, Kavach, Railway Zones, past 12 months national & sports events', hi: 'वंदे भारत, कवच प्रणाली, रेलवे ज़ोन, पिछले 12 माह की राष्ट्रीय व खेल घटनाएं' },
        duration: '1.5 Hours',
        slotType: 'revision',
      },
      {
        timeSlot: '05:00 PM – 06:30 PM',
        activity: { en: 'Full Mock Test / Sectional Speed Test', hi: 'पूर्ण मॉक टेस्ट / अनुभागीय गति परीक्षण' },
        focusArea: { en: 'Strict 90-minute CBT simulation without distractions in authentic TCS interface', hi: 'वास्तविक टीसीएस इंटरफ़ेस में बिना भटकाव के 90 मिनट का प्रामाणिक सीबीटी टेस्ट' },
        duration: '1.5 Hours',
        slotType: 'mock',
      },
      {
        timeSlot: '07:30 PM – 09:00 PM',
        activity: { en: 'In-Depth Mock Analysis & Mistake Logging', hi: 'मॉक टेस्ट का गहन विश्लेषण एवं त्रुटि डायरी' },
        focusArea: { en: '1:1 Rule: Analyze every wrong and unattempted question; tag reason in Mistake Notebook', hi: '1:1 नियम: प्रत्येक गलत व छूटे प्रश्न का विश्लेषण; मिस्टेक नोटबुक में कारण दर्ज करें' },
        duration: '1.5 Hours',
        slotType: 'revision',
      },
      {
        timeSlot: '09:30 PM – 10:15 PM',
        activity: { en: 'Spaced Flashcards & Sleep Consolidation', hi: 'फ्लैशकार्ड पुनरावृत्ति एवं सोने से पूर्व दोहराव' },
        focusArea: { en: 'Active recall using Formula Master and Railway flashcards before sleep', hi: 'सोने से पूर्व फॉर्मूला मास्टर व फ्लैशकार्ड द्वारा सक्रिय पुनरावृत्ति' },
        duration: '45 Mins',
        slotType: 'revision',
      },
    ],
    weeklyPlan: [
      { day: { en: 'Monday to Thursday', hi: 'सोमवार से गुरुवार' }, schedule: { en: 'Syllabus chapter mastery + 100 topic questions daily across Maths, Reasoning & Science', hi: 'पाठ्यक्रम अध्यायों की पूर्णता + प्रतिदिन 100 विषयवार प्रश्न' }, targetMocks: 1 },
      { day: { en: 'Friday', hi: 'शुक्रवार' }, schedule: { en: 'TCS Shift PYQ marathons (2 complete shifts with detailed solution checks)', hi: 'टीसीएस गत वर्ष शिफ्ट मैराथन (2 संपूर्ण शिफ्टों का गहन अभ्यास)' }, targetMocks: 2 },
      { day: { en: 'Saturday', hi: 'शनिवार' }, schedule: { en: 'Full CBT Simulation #1 + 3 hours exhaustive post-test forensic analysis', hi: 'पूर्ण सीबीटी मॉक टेस्ट #1 + 3 घंटे का व्यापक विश्लेषण' }, targetMocks: 1 },
      { day: { en: 'Sunday', hi: 'रविवार' }, schedule: { en: 'Full Mock #2 + Mistake Notebook weekly revision + 45-min outdoor jog/PET fitness', hi: 'पूर्ण मॉक #2 + मिस्टेक डायरी की साप्ताहिक पुनरावृत्ति + 45 मिनट दौड़/फिटनेस' }, targetMocks: 1 },
    ],
    strategyPillars: [
      { en: 'The 1:1 Rule: Never spend 90 mins on a test without spending at least 90 mins analyzing it.', hi: '1:1 नियम: 90 मिनट का टेस्ट देने के बाद कम से कम 90 मिनट उसके गहन विश्लेषण पर अवश्य दें।' },
      { en: 'Dual Daily Core: Mathematics in the morning (peak cognitive energy) and Science in afternoon.', hi: 'सुबह के समय गणित (सर्वोच्च एकाग्रता) और दोपहर में विज्ञान का अध्ययन करें।' },
      { en: 'Spaced Error Eradication: Review logged mistake notebook entries on Day 1, 3, 7, and 21.', hi: 'गलतियों की पुनरावृत्ति 1, 3, 7 और 21वें दिन अवश्य करें।' },
    ],
    proTips: [
      { en: 'Do not collect dozens of PDF books. Stick to 1 standard source per subject and solve it 3 times.', hi: 'सैकड़ों पीडीएफ के पीछे न भागें। प्रति विषय 1 प्रामाणिक पुस्तक चुनें और उसे 3 बार हल करें।' },
      { en: 'Maintain 85%+ accuracy in easy & moderate questions before trying to speed up.', hi: 'गति बढ़ाने से पहले सरल व मध्यम प्रश्नों में 85%+ सटीकता हासिल करें।' },
    ],
    commonPitfalls: [
      { en: 'Spending 5 hours daily watching passive video streams without solving pen-and-paper problems.', hi: 'बिना पेन-पेपर उठाए केवल यूट्यूब वीडियो देखने में घंटों बर्बाद करना।' },
      { en: 'Neglecting physical fitness until after the CBT result (causes injury in PET).', hi: 'सीबीटी परिणाम तक शारीरिक व्यायाम की उपेक्षा करना (दौड़ में चोट का कारण)।' },
    ],
  },
  {
    id: 'working-pro',
    name: { en: 'Working Professional Aspirant', hi: 'नौकरीपेशा अभ्यर्थी' },
    badge: { en: '3-4h Weekday • 8-9h Weekend • 7-9 Months', hi: '3-4 घंटे सप्ताह दिन • 8-9 घंटे सप्ताहांत • 7-9 माह' },
    dailyHours: '3 – 4 Hours (Weekdays) / 8 – 9 Hours (Weekends)',
    totalDurationMonths: '7 to 9 Months (800 – 950 Hours)',
    targetAudience: {
      en: 'Employed individuals in private sector, IT, or contract roles wanting job security in Indian Railways.',
      hi: 'प्राइवेट या आईटी में कार्यरत युवा जो भारतीय रेलवे में स्थायी सरकारी नौकरी चाहते हैं।',
    },
    description: {
      en: 'Bimodal split: High-focus 100-minute morning study before office, commute micro-learning, 90-minute evening drills, and massive weekend mock & analysis marathons.',
      hi: 'द्वि-चरणीय रणनीति: ऑफिस से पहले सुबह 100 मिनट एकाग्र अध्ययन, यात्रा में मोबाइल माइक्रो-लर्निंग, शाम को 90 मिनट प्रश्न हल, और शनिवार-रविवार को 8+ घंटे मॉक मैराथन।',
    },
    dailyRoutine: [
      {
        timeSlot: '05:45 AM – 07:30 AM',
        activity: { en: 'Morning Power Block: Mathematics / Technical', hi: 'प्रातःकालीन ऊर्जा ब्लॉक: गणित अथवा तकनीकी' },
        focusArea: { en: 'Highest brain stamina: Arithmetic, algebra, or engineering formulas (30-40 solved problems)', hi: 'दिन की उच्चतम ऊर्जा: अंकगणित व बीजगणित के 30-40 हल प्रश्न (फोन म्यूट रखें)' },
        duration: '1 Hour 45 Mins',
        slotType: 'core',
      },
      {
        timeSlot: 'Commute / Lunch Break',
        activity: { en: 'Mobile Micro-Learning & Railway GK', hi: 'यात्रा/लंच में मोबाइल माइक्रो-लर्निंग' },
        focusArea: { en: '30-40 mins on Railway GK Flashcards, daily current affairs summary, Formula Master app', hi: 'मोबाइल पर रेलवे सामान्य ज्ञान फ्लैशकार्ड, दैनिक समसामयिकी व फॉर्मूला मास्टर का त्वरित अभ्यास' },
        duration: '45 Mins',
        slotType: 'drill',
      },
      {
        timeSlot: '08:30 PM – 10:15 PM',
        activity: { en: 'Evening Drill Block: Reasoning & Science', hi: 'सायंकालीन ब्लॉक: रीजनिंग एवं विज्ञान' },
        focusArea: { en: '30 Reasoning problems (seating/puzzles) + 1 NCERT Science chapter review', hi: '30 रीजनिंग प्रश्न (सिटिंग/पजल्स) + 1 एनसीईआरटी विज्ञान अध्याय' },
        duration: '1 Hour 45 Mins',
        slotType: 'drill',
      },
      {
        timeSlot: '10:15 PM – 10:45 PM',
        activity: { en: 'Night Mistake Review & Wind-Down', hi: 'रात्रि त्रुटि समीक्षा' },
        focusArea: { en: '15-20 min quick review of previously tagged weak questions before sleeping', hi: 'सोने से पहले 20 मिनट पुरानी गलतियों का त्वरित अवलोकन' },
        duration: '30 Mins',
        slotType: 'revision',
      },
    ],
    weeklyPlan: [
      { day: { en: 'Monday to Thursday', hi: 'सोमवार से गुरुवार' }, schedule: { en: 'Strict morning + evening daily routines (approx 3.5 hrs/day = 14 hours total)', hi: 'नियमित सुबह + शाम रूटीन (लगभग 3.5 घंटे/दिन = 14 घंटे)' }, targetMocks: 0 },
      { day: { en: 'Friday Evening', hi: 'शुक्रवार शाम' }, schedule: { en: '1 Sectional timed speed test (Maths or Science) + backlog clearance', hi: '1 समयबद्ध अनुभागीय टेस्ट (गणित अथवा विज्ञान)' }, targetMocks: 0 },
      { day: { en: 'Saturday (Full Day)', hi: 'शनिवार (पूर्ण दिन)' }, schedule: { en: '8.5 Hours: 09:00 AM Full CBT Mock #1 + 2.5h deep analysis; Afternoon 100 PYQ problems; Evening Railway GK', hi: '8.5 घंटे: सुबह 9 बजे फुल मॉक #1 + 2.5 घंटे विश्लेषण; दोपहर 100 PYQ; शाम को रेलवे GK' }, targetMocks: 1 },
      { day: { en: 'Sunday (Full Day)', hi: 'रविवार (पूर्ण दिन)' }, schedule: { en: '8.5 Hours: Morning Full CBT Mock #2 + analysis; Afternoon weak areas revision; Evening 45-min jog', hi: '8.5 घंटे: सुबह फुल मॉक #2 + विश्लेषण; कमजोर अध्यायों का पुनः अभ्यास; शाम को 45 मिनट दौड़' }, targetMocks: 1 },
    ],
    strategyPillars: [
      { en: 'Protect the Morning Slot: Never check office emails or social media before the 07:30 AM study block ends.', hi: 'सुबह का समय सुरक्षित रखें: 07:30 बजे तक ऑफिस ईमेल या फोन बिल्कुल न छुएं।' },
      { en: 'Weekends are Exam Days: 50% of your total weekly study hours must occur between Saturday and Sunday.', hi: 'सप्ताहांत का अधिकतम उपयोग: आपके पूरे सप्ताह का 50% अध्ययन शनिवार-रविवार को होना चाहिए।' },
      { en: 'Leverage commute micro-intervals for passive memory items (GK, Current Affairs, Formulas).', hi: 'यात्रा के समय का उपयोग तथ्यात्मक विषयों (GK, करंट अफेयर्स, सूत्रों) के त्वरित स्मरण के लिए करें।' },
    ],
    proTips: [
      { en: 'Inform family and colleagues that weekends are dedicated to study until the exam date.', hi: 'परिवार को स्पष्ट करें कि परीक्षा तक सप्ताहांत पूरी तरह अध्ययन हेतु आरक्षित है।' },
      { en: 'Take 10 to 12 days earned leave (EL) right before the CBT exam for final mock surges.', hi: 'परीक्षा से ठीक पहले 10-12 दिन का अवकाश (EL) लेकर केवल फुल मॉक टेस्ट दें।' },
    ],
    commonPitfalls: [
      { en: 'Postponing all study to the evening after tiring office work (mental fatigue causes zero retention).', hi: 'थकाऊ ऑफिस के बाद सारा अध्ययन रात पर टालना (मानसिक थकान से स्मरण शक्ति शून्य हो जाती है)।' },
      { en: 'Skipping weekend mock tests due to social gatherings or fatigue.', hi: 'सामाजिक कार्यक्रमों के कारण सप्ताहांत के मॉक टेस्ट छोड़ देना।' },
    ],
  },
  {
    id: 'college-student',
    name: { en: 'College / Final Year Student', hi: 'कॉलेज / अंतिम वर्ष के छात्र' },
    badge: { en: '4-5 Hours / Day • 6-8 Months', hi: '4-5 घंटे / दिन • 6-8 माह' },
    dailyHours: '4 – 5 Hours (Weekdays) / 7 – 8 Hours (Vacations & Weekends)',
    totalDurationMonths: '6 to 8 Months (800 – 900 Hours)',
    targetAudience: {
      en: 'B.Tech, Diploma, B.Sc, or B.Com students aiming to crack RRB NTPC or RRB JE immediately upon graduating.',
      hi: 'डिप्लोमा, बी.टेक या डिग्री अंतिम वर्ष के छात्र जो कॉलेज पूरा होते ही रेलवे में नियुक्ति चाहते हैं।',
    },
    description: {
      en: 'Synergistic alignment: Leverage college quantitative aptitude training for RRB Maths & Reasoning, utilize semester breaks for massive 8-hour study surges, and master NCERT science during evenings.',
      hi: 'सकारात्मक समन्वय: कॉलेज कैंपस प्लेसमेंट एप्टीट्यूड को रेलवे गणित-रीजनिंग से जोड़ें, सेमेस्टर ब्रेक में 8 घंटे प्रतिदिन अध्ययन करें और शाम को विज्ञान व तकनीकी मजबूत करें।',
    },
    dailyRoutine: [
      {
        timeSlot: '06:30 AM – 08:15 AM',
        activity: { en: 'Pre-College Arithmetic & Algebra', hi: 'कॉलेज पूर्व अंकगणित एवं बीजगणित' },
        focusArea: { en: 'Dual benefit: Solves campus aptitude + RRB CBT-1 Maths requirements (30 problems)', hi: 'दोहरा लाभ: कैंपस प्लेसमेंट और रेलवे सीबीटी-1 दोनों के लिए 30 गणित प्रश्न' },
        duration: '1 Hour 45 Mins',
        slotType: 'core',
      },
      {
        timeSlot: 'College Free Periods',
        activity: { en: 'Reasoning Puzzles & General Science Flashcards', hi: 'कॉलेज फ्री पीरियड: रीजनिंग एवं विज्ञान' },
        focusArea: { en: 'Solve 20 puzzle questions or review periodic table / physics formulas on tablet/phone', hi: 'खाली समय में 20 रीजनिंग पजल्स या विज्ञान फॉर्मूले का अभ्यास' },
        duration: '45 Mins',
        slotType: 'drill',
      },
      {
        timeSlot: '05:30 PM – 07:00 PM',
        activity: { en: 'General Science or Technical Core (for JE)', hi: 'सामान्य विज्ञान अथवा तकनीकी (जेई हेतु)' },
        focusArea: { en: 'Class 10 NCERT science chapters or Diploma/B.Tech engineering basics (Civil/Mech/Elec/ECE)', hi: '10वीं एनसीईआरटी विज्ञान अथवा इंजीनियरिंग ट्रेड (मैकेनिकल, इलेक्ट्रिकल, सिविल) के मूल सिद्धांत' },
        duration: '1.5 Hours',
        slotType: 'core',
      },
      {
        timeSlot: '08:30 PM – 10:15 PM',
        activity: { en: 'PYQ Shift Practice & Sectional Test', hi: 'गत वर्ष प्रश्न शिफ्ट एवं अनुभागीय टेस्ट' },
        focusArea: { en: '1 Timed 45-minute sectional drill + 45-minute error review', hi: '1 समयबद्ध 45 मिनट का टेस्ट + 45 मिनट गलतियों का विश्लेषण' },
        duration: '1 Hour 45 Mins',
        slotType: 'mock',
      },
    ],
    weeklyPlan: [
      { day: { en: 'Monday to Friday', hi: 'सोमवार से शुक्रवार' }, schedule: { en: 'Daily 4.5 hours focused study balancing college attendance and semester assignments', hi: 'कॉलेज उपस्थिति के साथ प्रतिदिन 4.5 घंटे का संतुलित अध्ययन' }, targetMocks: 1 },
      { day: { en: 'Saturday', hi: 'शनिवार' }, schedule: { en: '6.5 Hours: Morning Full CBT Mock + 2h analysis; Afternoon Technical / Science deep dive', hi: '6.5 घंटे: सुबह फुल मॉक + 2 घंटे विश्लेषण; दोपहर में तकनीकी/विज्ञान का गहन अध्ययन' }, targetMocks: 1 },
      { day: { en: 'Sunday', hi: 'रविवार' }, schedule: { en: '7 Hours: PYQ marathon (150 problems); Current affairs 3-month revision; Mistake notebook review', hi: '7 घंटे: 150 PYQ प्रश्न; 3 माह के करंट अफेयर्स; मिस्टेक डायरी का दोहराव' }, targetMocks: 1 },
    ],
    strategyPillars: [
      { en: 'Aptitude Synergy: Use college CRT (Campus Recruitment Training) hours directly for RRB quantitative practice.', hi: 'कैंपस प्लेसमेंट ट्रेनिंग के समय का सीधा उपयोग रेलवे एप्टीट्यूड के लिए करें।' },
      { en: 'Vacation Surges: When semester exams end, switch instantly to 9-hour full-time mode for 3-4 weeks.', hi: 'सेमेस्टर परीक्षा समाप्त होते ही 3-4 सप्ताह के लिए 9 घंटे प्रतिदिन वाले फुल-टाइम मोड में आएं।' },
    ],
    proTips: [
      { en: 'Form a dedicated 2-person study pair in college to cross-check solutions and maintain discipline.', hi: 'कॉलेज में 1 गंभीर सहपाठी के साथ मिलकर प्रश्नों के समाधान और अनुशासन की जांच करें।' },
    ],
    commonPitfalls: [
      { en: 'Letting college fest or semester assignment panic disrupt 2-3 continuous weeks of RRB rhythm.', hi: 'कॉलेज फेस्ट या असाइनमेंट के कारण लगातार 2-3 सप्ताह रेलवे पढ़ाई से दूर हो जाना।' },
    ],
  },
  {
    id: 'crash-course',
    name: { en: '60–90 Day Fast-Track / Crash Mode', hi: '60-90 दिवसीय फास्ट-ट्रैक / क्रैश मोड' },
    badge: { en: '9-11 Hours / Day • 2-3 Months', hi: '9-11 घंटे / दिन • 2-3 माह' },
    dailyHours: '9 – 11 Hours',
    totalDurationMonths: '2 to 3 Months (550 – 700 Hours)',
    targetAudience: {
      en: 'Aspirants with basic awareness after official exam dates or city intimation are announced.',
      hi: 'परीक्षा तिथि घोषित होने के बाद तीव्र गति से स्कोर में 20+ अंकों का उछाल चाहने वाले अभ्यर्थी।',
    },
    description: {
      en: 'Ruthless 80/20 Pareto focus: Cut theoretical textbooks completely. Concentrate 70% of energy on 2018–2024 TCS PYQ shift questions, high-frequency chapters, daily mock drills, and red-flag error elimination.',
      hi: '80/20 पारेटो सिद्धांत: मोटी किताबें छोड़ें। 70% ऊर्जा 2018-2024 टीसीएस गत वर्ष प्रश्नों, सबसे अधिक अंक वाले अध्यायों, प्रतिदिन 1 फुल मॉक और गलतियों के निवारण पर लगाएं।',
    },
    dailyRoutine: [
      {
        timeSlot: '06:00 AM – 08:45 AM',
        activity: { en: 'High-Yield Mathematics Speed Drill', hi: 'अधिक अंक वाले गणित अध्यायों का स्पीड ड्रिल' },
        focusArea: { en: 'Focus only on top 8 chapters: Number System, Percentages, SI-CI, Time & Work, Speed & Train, Mensuration', hi: 'केवल मुख्य 8 अध्याय: संख्या पद्धति, प्रतिशत, चक्रवृद्धि ब्याज, समय-कार्य, रेलगाड़ी, क्षेत्रमिति' },
        duration: '2 Hours 45 Mins',
        slotType: 'core',
      },
      {
        timeSlot: '09:30 AM – 12:00 PM',
        activity: { en: 'High-Yield Reasoning & Puzzles', hi: 'महत्वपूर्ण रीजनिंग एवं पजल्स' },
        focusArea: { en: '50 PYQ problems: Syllogisms, Linear/Circular seating, Coding, Statement & Conclusion', hi: '50 गत वर्ष प्रश्न: न्याय निगमन, सिटिंग अरेंजमेंट, कोडिंग, कथन-निष्कर्ष' },
        duration: '2.5 Hours',
        slotType: 'drill',
      },
      {
        timeSlot: '01:00 PM – 03:00 PM',
        activity: { en: 'Rapid Science & Formula Master', hi: 'तीव्र विज्ञान एवं फॉर्मूला मास्टर' },
        focusArea: { en: 'Class 10 NCERT high-frequency physics numericals (Optics & Electricity) + Chemistry periodic table', hi: '10वीं एनसीईआरटी प्रकाश, विद्युत के आंकिक प्रश्न व आवर्त सारणी के नियम' },
        duration: '2.0 Hours',
        slotType: 'core',
      },
      {
        timeSlot: '04:00 PM – 05:30 PM',
        activity: { en: 'Full CBT Mock Simulation (Daily)', hi: 'दैनिक पूर्ण सीबीटी मॉक टेस्ट' },
        focusArea: { en: 'Strict 90-minute real TCS iON interface timed exam', hi: '90 मिनट का वास्तविक टीसीएस इंटरफेस समयबद्ध टेस्ट' },
        duration: '1.5 Hours',
        slotType: 'mock',
      },
      {
        timeSlot: '06:00 PM – 08:00 PM',
        activity: { en: 'Forensic Error Breakdown & Red Notebook', hi: 'गलतियों का सूक्ष्म विश्लेषण एवं रेड नोटबुक' },
        focusArea: { en: 'Resolve every negative mark question. Identify if mistake was conceptual, calculation, or silly misread', hi: 'प्रत्येक गलत प्रश्न का पुनर्परीक्षण; गलती का सही कारण लिखकर तुरंत सुधारें' },
        duration: '2.0 Hours',
        slotType: 'revision',
      },
      {
        timeSlot: '09:00 PM – 10:15 PM',
        activity: { en: 'Last 12 Months Current Affairs + Railway GK', hi: 'पिछले 12 माह के करंट अफेयर्स + रेलवे GK' },
        focusArea: { en: 'Rapid monthly capsules: Budget, sports winners, appointments, Vande Bharat & Kavach updates', hi: 'मासिक कैप्सूल: बजट, खेल विजेता, नई नियुक्तियां, वंदे भारत व कवच 4.0' },
        duration: '1 Hour 15 Mins',
        slotType: 'revision',
      },
    ],
    weeklyPlan: [
      { day: { en: 'Monday to Saturday', hi: 'सोमवार से शनिवार' }, schedule: { en: 'Repeat high-yield daily loop (1 Mock Test every single day = 6 full mocks/week)', hi: 'प्रतिदिन 1 फुल मॉक टेस्ट = प्रति सप्ताह 6 पूर्ण मॉक टेस्ट और गहन विश्लेषण' }, targetMocks: 6 },
      { day: { en: 'Sunday', hi: 'रविवार' }, schedule: { en: 'Zero new theory: 100% revision of Mistake Notebook + 3-hour speed calculation drill', hi: 'कोई नया सिद्धांत नहीं: केवल मिस्टेक नोटबुक की पुनरावृत्ति और स्पीड ड्रिल' }, targetMocks: 1 },
    ],
    strategyPillars: [
      { en: 'Pareto Law: 20% of the syllabus creates 80% of RRB questions. Master that 20% to perfection.', hi: 'पारेटो नियम: 20% पाठ्यक्रम से 80% प्रश्न आते हैं। पहले उस 20% पर पूर्ण महारत हासिल करें।' },
      { en: 'Daily Full Mock is Mandatory: In the last 60 days, giving mocks is your main textbook.', hi: 'प्रतिदिन मॉक अनिवार्य: अंतिम 60 दिनों में मॉक टेस्ट ही आपकी मुख्य पाठ्यपुस्तक है।' },
    ],
    proTips: [
      { en: 'Do not start new obscure topics in the last 20 days. Strengthen your 75% strong areas to 100% accuracy.', hi: 'अंतिम 20 दिनों में कोई नया कठिन विषय न छेड़ें। अपने 75% मजबूत क्षेत्रों में 100% सटीकता लाएं।' },
    ],
    commonPitfalls: [
      { en: 'Giving mocks without analyzing mistakes (you will repeat the exact same errors in the actual exam).', hi: 'बिना विश्लेषण के मॉक देना (आप वास्तविक परीक्षा में भी वही गलतियां दोहराएंगे)।' },
    ],
  },
];

export const TOPPER_BENCHMARKS: TopperBenchmark[] = [
  {
    examId: 'rrb-ntpc-graduate',
    examName: { en: 'RRB NTPC Graduate (CEN 06/2026)', hi: 'आरआरबी एनटीपीसी ग्रेजुएट (CEN 06/2026)' },
    qualification: { en: 'Graduation in Any Discipline (Level 5 & 6)', hi: 'किसी भी विषय में स्नातक (लेवल 5 एवं 6)' },
    competitionContext: {
      en: 'Over 80-100 lakh applicants compete for top-tier posts like Station Master, Goods Train Manager, and Senior Commercial Supervisor.',
      hi: 'स्टेशन मास्टर, गुड्स ट्रेन मैनेजर और सीनियर कमर्शियल सुपरवाइजर जैसे पदों के लिए 80 लाख से अधिक अभ्यर्थी प्रतिस्पर्धा करते हैं।',
    },
    totalHoursRequired: 950,
    idealTimelineMonths: '7 to 9 Months (Working: 8h/wknd, Full-time: 5-6 Months)',
    topperTargetScore: {
      cbt1: '86+ / 100 (Raw: 80+)',
      cbt2: '102+ / 120 (Raw: 96+)',
      cutoffSafetyMargin: 'Cutoff + 16 to 22 Marks',
      targetPercentile: '99.4+ Percentile',
      rationale: {
        en: 'Scoring right on the cutoff line leads to elimination in the CBAT ratio (1:8) or losing your home zone division in final merit. A +18 mark margin guarantees 1st choice post in your home railway zone.',
        hi: 'कट-ऑफ के बिल्कुल करीब अंक लाने पर साइको (1:8 अनुपात) में बाहर होने या गृह ज़ोन न मिलने का जोखिम रहता है। 18+ अंकों की बढ़त गृह ज़ोन में पहली पसंद का पद सुनिश्चित करती है।',
      },
    },
    subjectHoursBreakdown: [
      {
        subject: { en: 'Mathematics (Arithmetic & Advanced)', hi: 'गणित (अंकगणित एवं एडवांस)' },
        hours: 240,
        percentage: 25,
        topperScoringTarget: 'CBT-1: 28+/30 | CBT-2: 33+/35',
        keyFocusAreas: [
          { en: 'Number System, HCF-LCM, Surds & Indices', hi: 'संख्या पद्धति, म.स.-ल.स., घातांक व करणी' },
          { en: 'Percentages, Profit & Loss, SI & CI (3-year formulas)', hi: 'प्रतिशत, लाभ-हानि, साधारण व चक्रवृद्धि ब्याज' },
          { en: 'Time & Work (LCM unit method), Speed-Time-Distance & Trains', hi: 'समय-कार्य (ल.स. विधि), चाल-समय-दूरी व ट्रेन' },
          { en: 'Mensuration 2D & 3D, Basic Trigonometry & Heights', hi: 'क्षेत्रमिति 2D व 3D, त्रिकोणमिति एवं ऊंचाई-दूरी' },
        ],
        topperEdge: {
          en: 'Solving 80% of arithmetic questions without writing lengthy algebra steps, using unit digits, digit sum, and options elimination.',
          hi: 'यूनिट डिजिट, डिजिट सम और विकल्पों को हटाकर 80% अंकगणित बिना लंबे समीकरण लिखे हल करना।',
        },
      },
      {
        subject: { en: 'General Intelligence & Reasoning', hi: 'सामान्य बुद्धिमत्ता एवं तर्कशक्ति' },
        hours: 190,
        percentage: 20,
        topperScoringTarget: 'CBT-1: 28+/30 | CBT-2: 33+/35',
        keyFocusAreas: [
          { en: 'Linear & Circular Seating Arrangement (2-minute limit)', hi: 'सिटिंग अरेंजमेंट (2 मिनट के भीतर हल)' },
          { en: 'Syllogisms (100% accuracy using Venn/150 rule)', hi: 'न्याय निगमन (वेन आरेख से 100% सटीकता)' },
          { en: 'Coding-Decoding, Blood Relations & Direction Sense', hi: 'कोडिंग-डिकोडिंग, रक्त संबंध व दिशा परीक्षण' },
          { en: 'Statement-Assumptions & Cause-Effect (TCS favorites)', hi: 'कथन-पूर्वधारणाएं व कारण-प्रभाव (टीसीएस का प्रिय भाग)' },
        ],
        topperEdge: {
          en: 'Completing all 30 Reasoning questions in under 22 minutes with 95%+ accuracy to save time for Mathematics calculations.',
          hi: 'सभी 30 प्रश्नों को 95%+ सटीकता के साथ 22 मिनट के भीतर पूरा कर गणित के लिए समय बचाना।',
        },
      },
      {
        subject: { en: 'General Awareness & Indian Railway GK', hi: 'सामान्य जागरूकता एवं भारतीय रेलवे GK' },
        hours: 320,
        percentage: 34,
        topperScoringTarget: 'CBT-1: 30+/40 | CBT-2: 38+/50',
        keyFocusAreas: [
          { en: 'Class 9-10 NCERT Science (Physics laws, Chemistry tables, Biology)', hi: '9वीं-10वीं एनसीईआरटी विज्ञान (भौतिकी, रसायन, जीव विज्ञान)' },
          { en: 'Indian Polity (Articles, Amendments, Parliamentary procedures)', hi: 'भारतीय राजव्यवस्था (अनुच्छेद, संशोधन, संसद)' },
          { en: 'Modern Indian History & Geography (Rivers, Passes, Minerals)', hi: 'आधुनिक इतिहास एवं भारत का भूगोल (नदियां, दर्रे, खनिज)' },
          { en: 'Railway GK: Vande Bharat, Kavach, IR zones, Railway Budget & History', hi: 'रेलवे ज्ञान: वंदे भारत, कवच, ज़ोन, बजट और रेलवे इतिहास' },
          { en: 'Last 12 Months Current Affairs (Govt Schemes, Sports, Summits)', hi: 'पिछले 12 माह के समसामयिकी (योजनाएं, खेल, सम्मेलन)' },
        ],
        topperEdge: {
          en: 'Finishing the 40-50 GA questions in exactly 10-12 minutes with zero blind guesses, avoiding the deadly 1/3rd negative penalty.',
          hi: 'पूरे 40-50 प्रश्नों को ठीक 10-12 मिनट में बिना किसी अंधाधुंध तुक्के के हल कर 1/3 नेगेटिव अंकन से बचना।',
        },
      },
      {
        subject: { en: 'Full CBT Mocks & Detailed Forensics', hi: 'पूर्ण सीबीटी मॉक एवं विस्तृत विश्लेषण' },
        hours: 140,
        percentage: 15,
        topperScoringTarget: '60+ Full Mocks Taken | Mistake Notebook Maintained',
        keyFocusAreas: [
          { en: 'TCS 2-Round Test Strategy simulation', hi: 'टीसीएस 2-राउंड टेस्ट रणनीति का अभ्यास' },
          { en: 'Time distribution discipline: GA 12m, Reasoning 22m, Maths 35m, Review 20m', hi: 'समय विभाजन: GA 12 मिनट, रीजनिंग 22 मिनट, गणित 35 मिनट, रिव्यू 20 मिनट' },
          { en: 'Mistake classification: Conceptual vs Calculation vs Misread', hi: 'गलतियों का वर्गीकरण: वैचारिक बनाम गणनात्मक बनाम गलत पढ़ना' },
        ],
        topperEdge: {
          en: '1:1 ratio maintained on every mock test; never takes a mock without fully dissecting every wrong question.',
          hi: 'प्रत्येक मॉक पर 1:1 का अनुपात; बिना पूर्ण विश्लेषण के कभी दूसरा मॉक टेस्ट न देना।',
        },
      },
      {
        subject: { en: 'CBAT Psycho Readiness (Station Master)', hi: 'सीबीएटी साइको तैयारी (स्टेशन मास्टर)' },
        hours: 60,
        percentage: 6,
        topperScoringTarget: 'T-Score 55+ across all 5 test batteries (Min cutoff: 42)',
        keyFocusAreas: [
          { en: 'Intelligence Test (Classification of figures)', hi: 'बुद्धिमत्ता परीक्षण (आकृतियों का वर्गीकरण)' },
          { en: 'Selective Attention Test (Sum of odd numbers)', hi: 'चयनात्मक ध्यान परीक्षण (विषम संख्याओं का योग)' },
          { en: 'Spatial Scanning (Shortest route finding in grid)', hi: 'स्थानिक स्कैनिंग (ग्रिड में सबसे छोटा रास्ता खोजना)' },
          { en: 'Information Ordering & Personality assessment', hi: 'सूचना क्रमबद्धता एवं व्यक्तित्व परीक्षण' },
        ],
        topperEdge: {
          en: 'Regular practice in authentic computerized psycho interface starting right after CBT-2.',
          hi: 'सीबीटी-2 समाप्त होते ही प्रामाणिक कंप्यूटराइज्ड साइको इंटरफेस में नियमित अभ्यास।',
        },
      },
    ],
    scoreProgressionMilestones: [
      {
        monthRange: 'Months 1 – 2 (Foundation)',
        phaseName: { en: 'Core Concepts & Formula Mastery', hi: 'मूल अवधारणाएं एवं फॉर्मूला निपुणता' },
        cumulativeHours: 250,
        expectedMockScore: '48 – 60 / 100',
        keyMilestones: [
          { en: 'Complete NCERT Class 9-10 Science line-by-line', hi: '9वीं-10वीं एनसीईआरटी विज्ञान का पूर्ण अध्ययन' },
          { en: 'Master 30 math shortcuts and tables up to 30', hi: 'गणित के 30 शॉर्टकट और 30 तक पहाड़े कंठस्थ' },
          { en: 'Clear basic reasoning logic and Venn diagrams', hi: 'रीजनिंग के बुनियादी नियम और वेन आरेख स्पष्ट' },
        ],
      },
      {
        monthRange: 'Months 3 – 4 (PYQ Acceleration)',
        phaseName: { en: 'TCS Shift Papers & High-Volume Drills', hi: 'टीसीएस गत वर्ष शिफ्ट एवं उच्च-मात्रा अभ्यास' },
        cumulativeHours: 520,
        expectedMockScore: '68 – 76 / 100',
        keyMilestones: [
          { en: 'Solve 2,500+ verified TCS PYQs from NTPC 2019-2022', hi: 'एनटीपीसी 2019-2022 के 2,500+ प्रामाणिक गत वर्ष प्रश्न हल' },
          { en: 'Reasoning speed reduced to under 25 minutes for 30 Qs', hi: '30 रीजनिंग प्रश्नों का समय 25 मिनट से कम' },
          { en: 'First 20 Full Mocks taken with active Mistake Notebook', hi: 'मिस्टेक नोटबुक के साथ पहले 20 फुल मॉक टेस्ट पूरे' },
        ],
      },
      {
        monthRange: 'Months 5 – 6 (Topper Calibration)',
        phaseName: { en: 'Weakness Elimination & Speed Perfection', hi: 'कमजोरियों का समूल नाश एवं गति परिपक्वता' },
        cumulativeHours: 780,
        expectedMockScore: '78 – 86 / 100',
        keyMilestones: [
          { en: 'Accuracy in Mathematics & Reasoning exceeds 92%', hi: 'गणित और रीजनिंग में सटीकता 92% से अधिक' },
          { en: 'Railway GK and past 12 months Current Affairs 100% memorized', hi: 'रेलवे GK और 12 माह के समसामयिकी कंठस्थ' },
          { en: '40 Full Mocks taken; unattempted questions under 10', hi: '40 फुल मॉक पूरे; छूटे हुए प्रश्न 10 से कम' },
        ],
      },
      {
        monthRange: 'Final 30 Days (Peak Performance)',
        phaseName: { en: 'Full CBT Simulation & Confidence Lockdown', hi: 'पूर्ण सीबीटी सिमुलेशन एवं शिखर प्रदर्शन' },
        cumulativeHours: 950,
        expectedMockScore: '86 – 94 / 100',
        keyMilestones: [
          { en: 'Consistently hitting 85+ raw marks in mock tests across all shifts', hi: 'सभी शिफ्टों के मॉक टेस्ट में लगातार 85+ रॉ मार्क्स' },
          { en: 'Negative marks restricted to under 3 per 100 questions', hi: '100 प्रश्नों में नकारात्मक अंक 3 से भी कम' },
          { en: 'Mental calmness and 2-Round test strategy mastered', hi: 'परीक्षा तनाव से मुक्ति और 2-राउंड रणनीति में पूर्ण नियंत्रण' },
        ],
      },
    ],
    topperSecretHabits: [
      { en: 'The 2-Round Exam Strategy: In Round 1 (first 45 mins), answer all easy, direct questions (aim for 55-60 attempts). In Round 2 (next 35 mins), solve moderate calculations. In last 10 mins, verify marked-for-review.', hi: '2-राउंड परीक्षा रणनीति: पहले 45 मिनट में केवल सरल प्रश्न करें (55-60 प्रश्न हल)। अगले 35 मिनट में मध्यम गणनाएं करें। अंतिम 10 मिनट में मार्क-फॉर-रिव्यू प्रश्नों का सत्यापन करें।' },
      { en: 'Never guess blindly in General Awareness. Leaving a question blank gives 0; guessing wrong costs -0.33, dropping hundreds of ranks in normalized merit.', hi: 'सामान्य ज्ञान में कभी तुक्का न लगाएं। प्रश्न छोड़ने पर 0 मिलता है, पर गलत तुक्के पर -0.33 कटता है जो नॉर्मलाइजेशन में सैकड़ों रैंक नीचे गिरा देता है।' },
      { en: 'Maintain a physical Red Error Notebook divided by subject, and re-solve every logged error until zero mistakes occur.', hi: 'विषयवार विभाजित एक फिजिकल रेड एरर नोटबुक बनाएं और उसमें दर्ज हर गलती को तब तक दोबारा हल करें जब तक त्रुटि शून्य न हो जाए।' },
    ],
    fatalMistakesToAvoid: [
      { en: 'Treating CBT-1 casually because it is only qualifying (poor habits in CBT-1 directly cause failure in the 120-mark CBT-2).', hi: 'सीबीटी-1 को केवल क्वालीफाइंग समझकर ढिलाई बरतना (सीबीटी-1 की खराब आदतें सीबीटी-2 के 120 अंकों में विफलता लाती हैं)।' },
      { en: 'Ignoring the 70:30 formula for Station Master (CBT-2 is 70% and CBAT is 30% of final merit).', hi: 'स्टेशन मास्टर के लिए 70:30 अनुपात की अनदेखी करना (अंतिम मेरिट में सीबीटी-2 70% और साइको 30% जुड़ता है)।' },
    ],
  },
  {
    examId: 'rrb-ntpc-undergraduate',
    examName: { en: 'RRB NTPC Undergraduate (Level 2 & 3)', hi: 'आरआरबी एनटीपीसी अंडरग्रेजुएट (लेवल 2 एवं 3)' },
    qualification: { en: '12th Pass (10+2) in Any Stream', hi: '12वीं (10+2) किसी भी संकाय में' },
    competitionContext: {
      en: 'Cutoffs are notoriously higher (often 85-92 normalized) because millions of 12th pass candidates and over-qualified graduates compete for limited clerk and ticket collector seats.',
      hi: 'कट-ऑफ अत्यधिक ऊंची (अक्सर 85-92 नॉर्मलाइज्ड) रहती है क्योंकि 12वीं पास और ग्रेजुएट दोनों क्लर्क व टिकट कलेक्टर पदों के लिए प्रतिस्पर्धा करते हैं।',
    },
    totalHoursRequired: 720,
    idealTimelineMonths: '5 to 7 Months (Full-time: 3-4 Months)',
    topperTargetScore: {
      cbt1: '88+ / 100 (Raw: 82+)',
      cbt2: '105+ / 120 (Raw: 98+)',
      cutoffSafetyMargin: 'Cutoff + 15 to 20 Marks',
      targetPercentile: '99.5+ Percentile',
      rationale: {
        en: 'Due to massive applicant pools in Level 2 & 3, even a 0.5 mark deficit causes elimination. Toppers score 98%+ raw accuracy in Mathematics and Reasoning.',
        hi: 'लेवल 2 और 3 में विशाल प्रतिस्पर्धा के कारण 0.5 अंक का अंतर भी बाहर कर देता है। टॉपर गणित और रीजनिंग में 98%+ रॉ सटीकता हासिल करते हैं।',
      },
    },
    subjectHoursBreakdown: [
      {
        subject: { en: 'Mathematics (10th Standard Speed Arithmetic)', hi: 'गणित (10वीं स्तर का तीव्र अंकगणित)' },
        hours: 210,
        percentage: 29,
        topperScoringTarget: 'CBT-1: 29+/30 | CBT-2: 34+/35',
        keyFocusAreas: [
          { en: 'BODMAS, Simplification & Decimal Fractions', hi: 'बोडमास, सरलीकरण एवं दशमलव भिन्न' },
          { en: 'Ratio & Proportion, Percentage & Profit-Loss', hi: 'अनुपात-समानुपात, प्रतिशत एवं लाभ-हानि' },
          { en: 'Simple & Compound Interest, Averages', hi: 'साधारण एवं चक्रवृद्धि ब्याज, औसत' },
          { en: 'Speed-Distance-Time, Unitary Method, 2D Geometry', hi: 'चाल-दूरी-समय, ऐकिक नियम, 2D ज्यामिति' },
        ],
        topperEdge: {
          en: 'Near-perfect score: Toppers lose at most 1 mark across the entire 30/35 math questions.',
          hi: 'लगभग 100% स्कोर: टॉपर पूरे 30/35 प्रश्नों में अधिकतम 1 अंक ही खोते हैं।'
        },
      },
      {
        subject: { en: 'General Intelligence & Reasoning', hi: 'सामान्य बुद्धिमत्ता एवं तर्कशक्ति' },
        hours: 170,
        percentage: 24,
        topperScoringTarget: 'CBT-1: 29+/30 | CBT-2: 34+/35',
        keyFocusAreas: [
          { en: 'Alphabetical & Number Series, Missing Terms', hi: 'वर्णमाला एवं संख्या श्रृंखला, लुप्त पद' },
          { en: 'Analogies, Venn Diagrams & Blood Relations', hi: 'सादृश्यता, वेन आरेख एवं रक्त संबंध' },
          { en: 'Seating Arrangement (Row & Circle)', hi: 'सिटिंग अरेंजमेंट (पंक्ति एवं वृत्त)' },
          { en: 'Direction, Distance & Order-Ranking', hi: 'दिशा, दूरी एवं क्रम व्यवस्था' },
        ],
        topperEdge: {
          en: 'Zero errors on standard pattern questions; speed of 45 seconds per reasoning question.',
          hi: 'मानक पैटर्नों पर शून्य त्रुटि; प्रति रीजनिंग प्रश्न 45 सेकंड की गति।'
        },
      },
      {
        subject: { en: 'General Awareness & Science', hi: 'सामान्य ज्ञान एवं विज्ञान' },
        hours: 210,
        percentage: 29,
        topperScoringTarget: 'CBT-1: 30+/40 | CBT-2: 37+/50',
        keyFocusAreas: [
          { en: 'Indian Geography, National Parks, Rivers, Dams', hi: 'भारत का भूगोल, राष्ट्रीय उद्यान, नदियां, बांध' },
          { en: 'Constitution & Fundamental Rights/Duties', hi: 'संविधान, मौलिक अधिकार एवं कर्तव्य' },
          { en: '10th NCERT Physics, Chemistry, Biology essentials', hi: '10वीं एनसीईआरटी विज्ञान के मुख्य तथ्य' },
          { en: 'Current Affairs (Last 10 Months) & Static GK', hi: 'पिछले 10 माह के समसामयिकी एवं स्टैटिक GK' },
        ],
        topperEdge: {
          en: 'Mastery over static GK tables (First in India, capitals, UNESCO sites, festivals, dances).',
          hi: 'स्टैटिक GK तालिकाओं पर पूर्ण नियंत्रण (भारत में प्रथम, राजधानियां, यूनेस्को धरोहर, लोकनृत्य)।'
        },
      },
      {
        subject: { en: 'Mocks & Typing Preparation (Clerk Posts)', hi: 'मॉक टेस्ट एवं टाइपिंग अभ्यास' },
        hours: 130,
        percentage: 18,
        topperScoringTarget: 'Typing: 40+ WPM English / 35+ WPM Hindi (>95% accuracy)',
        keyFocusAreas: [
          { en: '50+ Full Mock Tests in real TCS interface', hi: '50+ फुल मॉक टेस्ट वास्तविक टीसीएस इंटरफेस में' },
          { en: 'Daily 30-minute touch typing on desktop keyboard without looking at keys', hi: 'डेस्कटॉप कीबोर्ड पर बिना देखे प्रतिदिन 30 मिनट टच टाइपिंग का अभ्यास' },
          { en: 'Handling punctuation and capitalization in official typing software', hi: 'विराम चिह्नों और बड़े अक्षरों का त्रुटिरहित टाइपिंग अभ्यास' },
        ],
        topperEdge: {
          en: 'Starting typing practice 2 months before CBT-2, so typing test day has zero keyboard anxiety.',
          hi: 'सीबीटी-2 से 2 महीने पहले ही टाइपिंग अभ्यास शुरू करना ताकि टाइपिंग टेस्ट के दिन कोई घबराहट न हो।'
        },
      },
    ],
    scoreProgressionMilestones: [
      {
        monthRange: 'Months 1 – 2',
        phaseName: { en: 'Speed Arithmetic & Basic Reasoning', hi: 'तीव्र अंकगणित एवं बुनियादी रीजनिंग' },
        cumulativeHours: 220,
        expectedMockScore: '55 – 68 / 100',
        keyMilestones: [
          { en: 'Finish Arithmetic syllabus with 200 solved problems per chapter', hi: 'प्रति अध्याय 200 हल प्रश्नों के साथ अंकगणित पूर्ण' },
          { en: 'Static GK master charts memorized', hi: 'स्टैटिक GK चार्ट्स कंठस्थ' },
        ],
      },
      {
        monthRange: 'Months 3 – 4',
        phaseName: { en: 'PYQ Shift Marathon & Sectional Drills', hi: 'गत वर्ष प्रश्न शिफ्ट मैराथन एवं अनुभागीय टेस्ट' },
        cumulativeHours: 480,
        expectedMockScore: '74 – 82 / 100',
        keyMilestones: [
          { en: 'Solve all 2019-2022 NTPC Level 2 & 3 shift papers', hi: '2019-2022 एनटीपीसी लेवल 2 व 3 के सभी शिफ्ट हल' },
          { en: 'Typing speed crosses 30 WPM in English', hi: 'अंग्रेजी में टाइपिंग गति 30 WPM के पार' },
        ],
      },
      {
        monthRange: 'Month 5 – Final',
        phaseName: { en: 'Full Mock Calibration & 90+ Score Surge', hi: 'फुल मॉक कैलिब्रेशन एवं 90+ स्कोर लक्ष्य' },
        cumulativeHours: 720,
        expectedMockScore: '86 – 94 / 100',
        keyMilestones: [
          { en: 'Consistent 88+ mock score with <4 negative marks', hi: 'लगातार 88+ मॉक स्कोर और 4 से कम गलत उत्तर' },
          { en: 'Typing speed stabilized at 38-42 WPM with 97% accuracy', hi: '97% सटीकता के साथ 38-42 WPM टाइपिंग गति स्थिर' },
        ],
      },
    ],
    topperSecretHabits: [
      { en: 'Speed-Accuracy Lock: Never sacrifice accuracy to attempt 5 extra questions. Attempting 88 with 96% accuracy beats attempting 98 with 80% accuracy due to 1/3 negative marks.', hi: 'सटीकता सर्वोपरि: 5 अतिरिक्त प्रश्न हल करने के लिए सटीकता न खोएं। 96% सटीकता के साथ 88 प्रयास, 80% सटीकता वाले 98 प्रयासों से कहीं बेहतर नॉर्मलाइज्ड स्कोर लाते हैं।' },
      { en: 'Simultaneous Typing: Clerical post aspirants do not wait for CBT results to start typing.', hi: 'साथ-साथ टाइपिंग: क्लर्क पद के अभ्यर्थी सीबीटी परिणाम की प्रतीक्षा किए बिना अभी से टाइपिंग शुरू करते हैं।' },
    ],
    fatalMistakesToAvoid: [
      { en: 'Assuming 12th standard questions are child’s play (TCS sets high-speed calculation traps in simplification and CI-SI).', hi: '12वीं स्तर के प्रश्नों को बहुत सरल समझना (टीसीएस सरलीकरण व ब्याज में जटिल गणनाएं पूछता है)।' },
    ],
  },
  {
    examId: 'rrb-group-d',
    examName: { en: 'RRB Group D / Level-1 Recruitment', hi: 'आरआरबी ग्रुप डी / लेवल-1 भर्ती' },
    qualification: { en: '10th Pass / ITI (National Apprenticeship NCVT)', hi: '10वीं पास / आईटीआई (NCVT अप्रेंटिस)' },
    competitionContext: {
      en: 'Highest applicant volume in Indian exams (over 1.15 crore applicants in CEN RRC 01/2019). The difference between qualifying and getting selected is scoring in General Science numericals.',
      hi: 'भारत में सबसे अधिक आवेदन (1.15 करोड़ से अधिक)। अंतिम चयन का मुख्य अंतर 10वीं एनसीईआरटी विज्ञान के न्यूमेरिकल हल करने से आता है।',
    },
    totalHoursRequired: 650,
    idealTimelineMonths: '4 to 6 Months (Dedicated 4-5h/day)',
    topperTargetScore: {
      cbt1: '82+ / 100 (Raw: 74+)',
      cutoffSafetyMargin: 'Cutoff + 14 to 18 Marks',
      targetPercentile: '99.0+ Percentile',
      rationale: {
        en: 'High marks ensure you get favorable post allotments like Pointsman, Assistant Workshop, or Signal & Telecom instead of high-strain Track Maintainer Grade-IV, and prevents elimination in the 1:1 DV cutoff.',
        hi: 'उच्च अंक ट्रैक मेंटेनर की जगह पॉइंट्समैन, वर्कशॉप या सिग्नल व टेलीकॉम जैसे बेहतर पद दिलाते हैं, और 1:1 दस्तावेज सत्यापन में मेरिट से बाहर होने से बचाते हैं।',
      },
    },
    subjectHoursBreakdown: [
      {
        subject: { en: 'General Science (Class 10 NCERT Line-by-Line)', hi: 'सामान्य विज्ञान (10वीं एनसीईआरटी लाइन-दर-लाइन)' },
        hours: 190,
        percentage: 29,
        topperScoringTarget: '22+ / 25 Marks (The Deciding Topper Pillar)',
        keyFocusAreas: [
          { en: 'Physics Numericals: Ohm’s Law, Mirrors, Lenses, Work-Energy, Kinematics', hi: 'भौतिकी आंकिक प्रश्न: ओम का नियम, दर्पण, लेंस, कार्य-ऊर्जा, गति के समीकरण' },
          { en: 'Chemistry: Modern Periodic Table trends, Balancing reactions, Acids-Bases-Salts', hi: 'रसायन: आवर्त सारणी के नियम, रासायनिक अभिक्रियाएं, अम्ल-क्षार-लवण' },
          { en: 'Biology: Human circulatory, nervous & digestive systems; Plant tissues & hormones', hi: 'जीव विज्ञान: मानव परिसंचरण, तंत्रिका व पाचन तंत्र; पादप ऊतक व हॉर्मोन' },
        ],
        topperEdge: {
          en: 'Solving numericals that 90% of candidates skip. While average students score 12-14 in Science, toppers score 22-24/25.',
          hi: 'उन आंकिक प्रश्नों को हल करना जिन्हें 90% छात्र छोड़ देते हैं। औसत छात्र 12-14 लाते हैं, जबकि टॉपर 22-24/25 अंक लाते हैं।'
        },
      },
      {
        subject: { en: 'Mathematics (Speed Arithmetic & Basic Algebra)', hi: 'गणित (तीव्र अंकगणित एवं बीजगणित)' },
        hours: 170,
        percentage: 26,
        topperScoringTarget: '23+ / 25 Marks',
        keyFocusAreas: [
          { en: 'Number System, Divisibility Rules, LCM-HCF, Fractions', hi: 'संख्या पद्धति, विभाज्यता नियम, ल.स.-म.स., भिन्न' },
          { en: 'Time & Work, Pipes & Cisterns, Speed-Time-Distance', hi: 'समय-कार्य, नल-टंकी, चाल-समय-दूरी' },
          { en: 'Percentages, Profit & Loss, Simple & Compound Interest', hi: 'प्रतिशत, लाभ-हानि, साधारण व चक्रवृद्धि ब्याज' },
          { en: 'Mensuration (Cylinder, Cone, Sphere formulas)', hi: 'क्षेत्रमिति (बेलन, शंकु, गोला सूत्र)' },
        ],
        topperEdge: {
          en: 'Mastery over unit digit calculations and mental arithmetic so maths is finished in under 28 minutes.',
          hi: 'इकाई अंक और मौखिक गणना पर नियंत्रण जिससे 28 मिनट में पूरा गणित समाप्त हो जाता है।'
        },
      },
      {
        subject: { en: 'General Intelligence & Reasoning', hi: 'तर्कशक्ति एवं बौद्धिक क्षमता' },
        hours: 160,
        percentage: 25,
        topperScoringTarget: '27+ / 30 Marks',
        keyFocusAreas: [
          { en: 'Venn Diagrams, Syllogisms & Logical Sequences', hi: 'वेन आरेख, न्याय निगमन एवं तार्किक क्रम' },
          { en: 'Coding-Decoding, Series Completion & Analogies', hi: 'कोडिंग-डिकोडिंग, श्रेणी पूर्णता एवं सादृश्यता' },
          { en: 'Direction Sense, Blood Relations & Mathematical Operations', hi: 'दिशा परीक्षण, रक्त संबंध एवं गणितीय संक्रियाएं' },
        ],
        topperEdge: {
          en: 'Fast identification of tricky questions to leave for round 2, avoiding time traps.',
          hi: 'कठिन प्रश्नों को तुरंत पहचानकर दूसरे राउंड के लिए छोड़ना ताकि समय न फंसे।'
        },
      },
      {
        subject: { en: 'General Awareness & Current Affairs', hi: 'सामान्य ज्ञान एवं समसामयिकी' },
        hours: 70,
        percentage: 11,
        topperScoringTarget: '12 – 14 / 20 Marks',
        keyFocusAreas: [
          { en: 'Railway GK: Zones, Headquarters, Vande Bharat, Kavach, Budget', hi: 'रेलवे ज्ञान: ज़ोन, मुख्यालय, वंदे भारत, कवच, रेल बजट' },
          { en: 'Current Affairs (Past 8 Months): Sports, Awards, Chief Ministers, Schemes', hi: 'पिछले 8 माह के समसामयिकी: खेल, पुरस्कार, मुख्यमंत्री, प्रमुख योजनाएं' },
          { en: 'Static GK: Capital, Currencies, Dams, National Parks', hi: 'स्टैटिक GK: राजधानियां, मुद्राएं, बांध, राष्ट्रीय उद्यान' },
        ],
        topperEdge: {
          en: 'Zero time wasted reading thick history/geography books; strict focus on high-yield static tables.',
          hi: 'मोटी इतिहास/भूगोल की किताबें पढ़ने में समय न गंवाना; केवल महत्वपूर्ण तालिकाओं पर ध्यान देना।'
        },
      },
      {
        subject: { en: 'Physical Efficiency Test (PET) Conditioning', hi: 'शारीरिक दक्षता परीक्षण (पीईटी) तैयारी' },
        hours: 60,
        percentage: 9,
        topperScoringTarget: '1000m in <3:50 (M) / <5:10 (F) | 35kg/20kg Sandbag Carry in <1:30',
        keyFocusAreas: [
          { en: '1000m Continuous Running on ground/track without stopping', hi: 'ग्राउंड पर बिना रुके 1000 मीटर निरंतर दौड़ का अभ्यास' },
          { en: 'Weight Carrying: 35 kg sandbag for males, 20 kg for females over 100m in 2 minutes', hi: 'रेत की बोरी (पुरुष 35 किग्रा, महिला 20 किग्रा) को 2 मिनट में 100 मीटर तक ले जाना' },
          { en: 'Shin splint prevention, breathing cadence, hydration discipline', hi: 'पैरों के खिंचाव से बचाव, श्वास नियंत्रण और उचित जलपान' },
        ],
        topperEdge: {
          en: 'Starting running 60 days before CBT so the body is conditioned; zero risk of failure or injury at PET.',
          hi: 'सीबीटी से 60 दिन पूर्व दौड़ शुरू करना जिससे शरीर अनुकूलित रहे और पीईटी में विफलता का जोखिम शून्य हो।'
        },
      },
    ],
    scoreProgressionMilestones: [
      {
        monthRange: 'Months 1 – 2',
        phaseName: { en: 'NCERT Science & Math Foundation', hi: 'एनसीईआरटी विज्ञान एवं गणित नींव' },
        cumulativeHours: 220,
        expectedMockScore: '48 – 60 / 100',
        keyMilestones: [
          { en: 'Class 9-10 NCERT Science chapters summarized line by line', hi: '9वीं-10वीं एनसीईआरटी विज्ञान के नोट्स तैयार' },
          { en: 'Mastered arithmetic formulas & tables up to 25', hi: 'अंकगणित सूत्र व 25 तक पहाड़े कंठस्थ' },
        ],
      },
      {
        monthRange: 'Months 3 – 4',
        phaseName: { en: 'PYQ Shift Drills & Science Numericals', hi: 'गत वर्ष प्रश्न एवं विज्ञान आंकिक प्रश्न' },
        cumulativeHours: 450,
        expectedMockScore: '68 – 76 / 100',
        keyMilestones: [
          { en: 'Solved all 135+ shifts of RRC Group D 2018 & 2022', hi: 'आरआरसी ग्रुप डी 2018 व 2022 के सभी 135+ शिफ्ट हल' },
          { en: 'Mastered physics numericals in optics, electricity & mechanics', hi: 'प्रकाश, विद्युत व यांत्रिकी के आंकिक प्रश्नों में निपुणता' },
          { en: 'Started 1000m running 4 mornings a week', hi: 'सप्ताह में 4 दिन 1000 मीटर दौड़ का अभ्यास प्रारंभ' },
        ],
      },
      {
        monthRange: 'Final 30-45 Days',
        phaseName: { en: 'Daily Full Mocks & PET Simulation', hi: 'दैनिक फुल मॉक एवं पीईटी सिमुलेशन' },
        cumulativeHours: 650,
        expectedMockScore: '80 – 88 / 100',
        keyMilestones: [
          { en: 'Raw mock scores consistently between 75-82', hi: 'मॉक टेस्ट में रॉ स्कोर लगातार 75-82 के बीच' },
          { en: '1000m running completed easily in under 4 minutes', hi: '1000 मीटर दौड़ 4 मिनट से कम में आसानी से पूरी' },
        ],
      },
    ],
    topperSecretHabits: [
      { en: 'The Science Numericals Edge: Most coaching institutes ignore numericals. Toppers solve every numerical problem from Class 9 & 10 NCERT textbooks.', hi: 'विज्ञान न्यूमेरिकल की ताकत: अधिकांश छात्र न्यूमेरिकल छोड़ते हैं। टॉपर 9वीं-10वीं एनसीईआरटी के हर न्यूमेरिकल को हल करते हैं।' },
      { en: 'Daily Morning Physical Fitness: 40 minutes of jogging every alternate morning keeps stamina ready for PET without post-CBT panic.', hi: 'प्रातःकालीन फिटनेस: सप्ताह में 3-4 दिन 40 मिनट दौड़ने से पीईटी की दौड़ बिना किसी तनाव के पार हो जाती है।' },
    ],
    fatalMistakesToAvoid: [
      { en: 'Waiting for CBT results before starting running (leads to leg cramps, shin splints, and failure in PET).', hi: 'दौड़ की तैयारी सीबीटी परिणाम के बाद शुरू करना (पैरों में खिंचाव व पीईटी में असफलता का प्रमुख कारण)।' },
    ],
  },
  {
    examId: 'rrb-je',
    examName: { en: 'RRB JE (Junior Engineer - CEN 03/2024)', hi: 'आरआरबी जेई (कनिष्ठ अभियंता - CEN 03/2024)' },
    qualification: { en: 'Diploma / Degree in Engineering (Civil, Mech, Elec, ECE, CS/IT)', hi: 'इंजीनियरिंग में डिप्लोमा / डिग्री (सिविल, मैकेनिकल, इलेक्ट्रिकल, इलेक्ट्रॉनिक्स, आईटी)' },
    competitionContext: {
      en: 'Two distinct competitive filters: CBT-1 is 100% non-technical screening (100 marks), while CBT-2 final merit is heavily technical (100 marks technical core out of 150 total).',
      hi: 'दोहरी चुनौती: सीबीटी-1 पूरी तरह गैर-तकनीकी स्क्रीनिंग है (100 अंक), जबकि सीबीटी-2 फाइनल मेरिट में 150 में से 100 अंक कोर इंजीनियरिंग के होते हैं।',
    },
    totalHoursRequired: 1100,
    idealTimelineMonths: '8 to 10 Months (Working: 9-10m, Full-time: 6-7m)',
    topperTargetScore: {
      cbt1: '84+ / 100 (Screening 15x shortlist)',
      cbt2: '118+ / 150 (Tech: 82+/100, Non-tech: 36+/50)',
      cutoffSafetyMargin: 'Cutoff + 15 to 20 Marks',
      targetPercentile: '99.2+ Percentile',
      rationale: {
        en: 'CBT-1 shortlists 15 times the vacancy, but CBT-2 determines 100% of the final appointment merit. Toppers prepare technical core concurrently with CBT-1 non-tech from Month 1.',
        hi: 'सीबीटी-1 केवल 15 गुना अभ्यर्थियों को छांटता है, पर सीबीटी-2 से ही 100% अंतिम नियुक्ति तय होती है। टॉपर पहले महीने से ही तकनीकी और गैर-तकनीकी दोनों साथ पढ़ते हैं।',
      },
    },
    subjectHoursBreakdown: [
      {
        subject: { en: 'Core Engineering Technical Discipline (100 Marks CBT-2)', hi: 'कोर इंजीनियरिंग तकनीकी विषय (100 अंक सीबीटी-2)' },
        hours: 460,
        percentage: 42,
        topperScoringTarget: '82+ / 100 Marks in CBT-2',
        keyFocusAreas: [
          { en: 'Civil / Mech / Elec / ECE / IT official RRB syllabus', hi: 'सिविल / मैकेनिकल / इलेक्ट्रिकल / इलेक्ट्रॉनिक्स / आईटी का आधिकारिक पाठ्यक्रम' },
          { en: 'Diploma-level standard concepts & formula derivations', hi: 'डिप्लोमा स्तर के मूल सिद्धांत एवं सूत्र' },
          { en: '3,000+ objective MCQs from past RRB JE, SSC JE & State AE/JE papers', hi: 'आरआरबी जेई, एसएससी जेई और स्टेट जेई के 3,000+ वस्तुनिष्ठ प्रश्न' },
        ],
        topperEdge: {
          en: 'Solving standard handbook formulas and IS codes / machine design data rapidly without hesitation.',
          hi: 'हैंडबुक सूत्रों और कोड्स को कंठस्थ रखना जिससे तकनीकी प्रश्न 40 सेकंड में हल होते हैं।'
        },
      },
      {
        subject: { en: 'General Science (CBT-1: 30 Qs + CBT-2: 15 Qs)', hi: 'सामान्य विज्ञान (सीबीटी-1: 30 प्रश्न + सीबीटी-2: 15 प्रश्न)' },
        hours: 180,
        percentage: 16,
        topperScoringTarget: 'CBT-1: 26+/30 | CBT-2: 13+/15',
        keyFocusAreas: [
          { en: 'Class 10 NCERT Physics & Chemistry', hi: '10वीं एनसीईआरटी भौतिकी एवं रसायन विज्ञान' },
          { en: 'Applied science numericals & practical applications', hi: 'व्यावहारिक विज्ञान के आंकिक प्रश्न एवं अनुप्रयोग' },
        ],
        topperEdge: {
          en: 'Leverages engineering background to score full marks in physics electricity, mechanics, and chemistry.',
          hi: 'इंजीनियरिंग पृष्ठभूमि का लाभ उठाकर भौतिकी और रसायन में पूरे अंक हासिल करना।'
        },
      },
      {
        subject: { en: 'Mathematics (CBT-1: 30 Marks)', hi: 'गणित (सीबीटी-1: 30 अंक)' },
        hours: 180,
        percentage: 16,
        topperScoringTarget: '27+ / 30 Marks',
        keyFocusAreas: [
          { en: 'Algebra, Geometry, Trigonometry, Coordinate Geometry', hi: 'बीजगणित, ज्यामिति, त्रिकोणमिति, निर्देशांक ज्यामिति' },
          { en: 'Arithmetic (Percentages, Profit-Loss, Time-Work, Speed-Time)', hi: 'अंकगणित (प्रतिशत, लाभ-हानि, समय-कार्य, चाल-समय)' },
        ],
        topperEdge: {
          en: 'Engineers naturally grasp math concepts; toppers master rapid speed tricks to finish in 25 minutes.',
          hi: 'शॉर्टकट ट्रिक्स से 25 मिनट के भीतर गणित पूरा करना।'
        },
      },
      {
        subject: { en: 'General Intelligence & Reasoning (CBT-1: 25 Marks)', hi: 'तर्कशक्ति एवं बौद्धिक क्षमता (सीबीटी-1: 25 अंक)' },
        hours: 120,
        percentage: 11,
        topperScoringTarget: '23+ / 25 Marks',
        keyFocusAreas: [
          { en: 'Analytical reasoning, Seating arrangements, Syllogisms', hi: 'विश्लेषणात्मक तर्कशक्ति, सिटिंग अरेंजमेंट, न्याय निगमन' },
          { en: 'Non-verbal spatial reasoning, Paper folding, Mirror images', hi: 'अशाब्दिक स्थानिक तर्कशक्ति, पेपर फोल्डिंग, दर्पण प्रतिबिम्ब' },
        ],
        topperEdge: {
          en: 'Near-zero negative marks; skips doubtful questions cleanly.',
          hi: 'लगभग शून्य नकारात्मक अंक; संदिग्ध प्रश्नों को तुरंत छोड़ना।'
        },
      },
      {
        subject: { en: 'Computers, Environment & General Awareness (CBT-2: 35 Marks)', hi: 'कंप्यूटर, पर्यावरण एवं सामान्य ज्ञान (सीबीटी-2: 35 अंक)' },
        hours: 90,
        percentage: 8,
        topperScoringTarget: '27+ / 35 Marks in CBT-2',
        keyFocusAreas: [
          { en: 'Basics of Computers & Applications (10 Marks): Hardware, OS, MS Office, Networking', hi: 'कंप्यूटर के मूल सिद्धांत (10 अंक): हार्डवेयर, ओएस, एमएस ऑफिस, नेटवर्किंग' },
          { en: 'Basics of Environment & Pollution Control (10 Marks): Air, water, noise, ozone, global warming', hi: 'पर्यावरण एवं प्रदूषण नियंत्रण (10 अंक): वायु, जल, ध्वनि, ओजोन, ग्लोबल वार्मिंग' },
          { en: 'General Awareness (15 Marks): Current affairs, Railway tech, Indian economy', hi: 'सामान्य जागरूकता (15 अंक): समसामयिकी, रेलवे तकनीक, भारतीय अर्थव्यवस्था' },
        ],
        topperEdge: {
          en: 'Computer and Environment are 20 easy marks that most engineers overlook until the last week.',
          hi: 'कंप्यूटर और पर्यावरण के 20 आसान अंक जिन्हें अधिकांश छात्र अंतिम सप्ताह तक नजरअंदाज कर देते हैं।'
        },
      },
      {
        subject: { en: 'CBT-1 & CBT-2 Simulations & Technical Mocks', hi: 'सीबीटी-1 व सीबीटी-2 सिमुलेशन एवं तकनीकी मॉक' },
        hours: 70,
        percentage: 7,
        topperScoringTarget: '30 CBT-1 Mocks + 25 Full CBT-2 Technical Simulations',
        keyFocusAreas: [
          { en: '100-mark screening speed drills', hi: '100 अंकों के स्क्रीनिंग गति परीक्षण' },
          { en: '150-mark 120-minute CBT-2 endurance simulation with virtual calculator practice', hi: '150 अंकों के 120 मिनट सीबीटी-2 टेस्ट और वर्चुअल कैलकुलेटर का अभ्यास' },
        ],
        topperEdge: {
          en: 'Comfortable using the RRB JE on-screen Virtual Calculator for complex engineering calculations.',
          hi: 'जटिल इंजीनियरिंग गणनाओं के लिए स्क्रीन पर उपलब्ध वर्चुअल कैलकुलेटर में पारंगत होना।'
        },
      },
    ],
    scoreProgressionMilestones: [
      {
        monthRange: 'Months 1 – 3',
        phaseName: { en: 'Dual Foundation: Non-Tech + Core Theory', hi: 'दोहरी नींव: गैर-तकनीकी + कोर थ्योरी' },
        cumulativeHours: 350,
        expectedMockScore: 'CBT-1: 52-64 / 100',
        keyMilestones: [
          { en: 'Maths and Science foundation complete', hi: 'गणित एवं विज्ञान की नींव पूर्ण' },
          { en: '50% of Engineering diploma syllabus notes completed', hi: 'इंजीनियरिंग डिप्लोमा पाठ्यक्रम के 50% नोट्स तैयार' },
        ],
      },
      {
        monthRange: 'Months 4 – 6',
        phaseName: { en: 'CBT-1 Screening Mastery & Technical Drills', hi: 'सीबीटी-1 स्क्रीनिंग निपुणता एवं तकनीकी अभ्यास' },
        cumulativeHours: 720,
        expectedMockScore: 'CBT-1: 72-82 / 100 | CBT-2: 85-98 / 150',
        keyMilestones: [
          { en: 'All 2019 RRB JE CBT-1 shifts solved', hi: '2019 आरआरबी जेई सीबीटी-1 के सभी शिफ्ट हल' },
          { en: '2,000 technical discipline MCQs solved', hi: 'कोर ट्रेड के 2,000 वस्तुनिष्ठ प्रश्न हल' },
        ],
      },
      {
        monthRange: 'Months 7 – 9 (CBT-2 Deciding Phase)',
        phaseName: { en: '150-Mark CBT-2 Full Simulation & Topper Peak', hi: '150 अंकों का सीबीटी-2 सिमुलेशन एवं शिखर स्कोर' },
        cumulativeHours: 1100,
        expectedMockScore: 'CBT-1: 84+ / 100 | CBT-2: 118 – 130 / 150',
        keyMilestones: [
          { en: 'Technical score exceeds 82/100 consistently', hi: 'तकनीकी खंड में लगातार 82/100 से अधिक अंक' },
          { en: 'Computers & Environment sections yielding 18+/20', hi: 'कंप्यूटर एवं पर्यावरण खंड में 18+/20 अंक' },
        ],
      },
    ],
    topperSecretHabits: [
      { en: 'Never wait for CBT-1 results to start technical engineering preparation. The gap between CBT-1 and CBT-2 is usually only 35-50 days, which is impossible for 100 marks of engineering syllabus.', hi: 'तकनीकी तैयारी शुरू करने के लिए सीबीटी-1 परिणाम का इंतजार कभी न करें। सीबीटी-1 और 2 के बीच केवल 35-50 दिन मिलते हैं, जिसमें इंजीनियरिंग पाठ्यक्रम दोहराना असंभव होता है।' },
      { en: 'Master the on-screen Virtual Calculator in CBT-2 mock practice; using manual calculation wastes valuable time.', hi: 'सीबीटी-2 मॉक टेस्ट में ऑन-स्क्रीन वर्चुअल कैलकुलेटर का नियमित अभ्यास करें; हाथ से गणना में समय बर्बाद न करें।' },
    ],
    fatalMistakesToAvoid: [
      { en: 'Studying only technical engineering and failing CBT-1 non-technical screening.', hi: 'केवल तकनीकी विषय पढ़ना और सीबीटी-1 की गैर-तकनीकी स्क्रीनिंग में ही बाहर हो जाना।' },
      { en: 'Ignoring the 20 marks of Computers & Environment in CBT-2, which decide the top ranks.', hi: 'सीबीटी-2 में कंप्यूटर और पर्यावरण के 20 आसान अंकों की उपेक्षा करना जो टॉप रैंक तय करते हैं।' },
    ],
  },
];
