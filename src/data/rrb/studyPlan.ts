import type { BilingualText } from '../../types';

export interface RoadmapLevel {
  levelNumber: number;
  title: BilingualText;
  description: BilingualText;
  actionItems: BilingualText[];
  recommendedTools: string[];
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
