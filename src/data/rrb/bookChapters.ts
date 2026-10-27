import type { ExamId, BilingualText } from '../../types';

export interface BookChapterMetadata {
  chapterNumber: number;
  topicId: string;
  sectionCategory:
    | 'math'
    | 'reasoning'
    | 'science'
    | 'gk'
    | 'railways'
    | 'engineering'
    | 'alp-trade'
    | 'operations'
    | 'rpf';
  sectionTitle: BilingualText;
  applicableExams: ExamId[];
  difficulty: 'Foundation' | 'Moderate' | 'Advanced' | 'Specialist';
  pageCountEstimate: number;
  estimatedMinutes: number;
  examWeightage: BilingualText;
  tags: string[];
}

export const BOOK_SECTIONS: {
  id: BookChapterMetadata['sectionCategory'];
  title: BilingualText;
  iconName: string;
  color: string;
}[] = [
  {
    id: 'math',
    title: { en: 'Mathematics & Quantitative Aptitude', hi: 'गणित एवं संख्यात्मक अभिरुचि' },
    iconName: 'Calculator',
    color: 'blue',
  },
  {
    id: 'reasoning',
    title: { en: 'General Intelligence & Reasoning', hi: 'सामान्य बुद्धिमत्ता एवं तर्कशक्ति' },
    iconName: 'Brain',
    color: 'indigo',
  },
  {
    id: 'science',
    title: { en: 'General Science (Physics, Chemistry, Life Science)', hi: 'सामान्य विज्ञान (भौतिकी, रसायन, जीव विज्ञान)' },
    iconName: 'FlaskConical',
    color: 'emerald',
  },
  {
    id: 'railways',
    title: { en: 'Indian Railways Heritage, Infrastructure & Kavach', hi: 'भारतीय रेल धरोहर, अवसंरचना एवं कवच प्रणाली' },
    iconName: 'Train',
    color: 'amber',
  },
  {
    id: 'gk',
    title: { en: 'General Awareness, Constitution & Freedom Movement', hi: 'सामान्य ज्ञान, संविधान एवं स्वतंत्रता संग्राम' },
    iconName: 'Globe',
    color: 'purple',
  },
  {
    id: 'engineering',
    title: { en: 'RRB JE Technical Engineering Disciplines', hi: 'आरआरबी जेई तकनीकी इंजीनियरिंग संवर्ग' },
    iconName: 'Wrench',
    color: 'rose',
  },
  {
    id: 'alp-trade',
    title: { en: 'ALP Basic Science, Drawing & Simple Machines', hi: 'एएलपी बेसिक साइंस, ड्राइंग एवं सरल मशीनें' },
    iconName: 'Zap',
    color: 'teal',
  },
  {
    id: 'operations',
    title: { en: 'Station Master & Section Controller Operations', hi: 'स्टेशन मास्टर एवं परिचालन नियंत्रण नियम' },
    iconName: 'Layers',
    color: 'cyan',
  },
  {
    id: 'rpf',
    title: { en: 'RPF Security Aptitude & Railway Acts', hi: 'आरपीएफ सुरक्षा अभिरुचि एवं रेलवे अधिनियम' },
    iconName: 'ShieldCheck',
    color: 'red',
  },
];

export const BOOK_CHAPTERS: BookChapterMetadata[] = [
  // =========================================================================
  // VOLUME 1: ADVANCED MATHEMATICS & COMMERCIAL ARITHMETIC
  // =========================================================================
  {
    chapterNumber: 1,
    topicId: 'num-sys-simplification',
    sectionCategory: 'math',
    sectionTitle: { en: 'Mathematics: Number System', hi: 'गणित: संख्या पद्धति' },
    applicableExams: ['rrb-ntpc', 'rrb-group-d', 'rrb-je', 'rrb-alp', 'rrb-technician', 'rrb-rpf'],
    difficulty: 'Advanced',
    pageCountEstimate: 24,
    estimatedMinutes: 45,
    examWeightage: { en: '4–6 Questions in CBT-1 & CBT-2', hi: 'सीबीटी-1 व 2 में 4-6 प्रश्न' },
    tags: ['divisibility', 'remainders', 'eulers-totient', 'bodmas', 'surds', 'unit-digit'],
  },
  {
    chapterNumber: 2,
    topicId: 'fractions-hcf-lcm',
    sectionCategory: 'math',
    sectionTitle: { en: 'Mathematics: Fractions & HCF-LCM', hi: 'गणित: भिन्न एवं ल.स.प.-म.स.प.' },
    applicableExams: ['rrb-ntpc', 'rrb-group-d', 'rrb-je', 'rrb-alp', 'rrb-technician', 'rrb-rpf'],
    difficulty: 'Moderate',
    pageCountEstimate: 18,
    estimatedMinutes: 35,
    examWeightage: { en: '2–3 Questions (Bell Tolls, Circular Loops)', hi: '2-3 प्रश्न (घंटी अंतराल, वृत्ताकार ट्रैक)' },
    tags: ['hcf', 'lcm', 'circular-track', 'bell-tolling', 'fraction-lcm', 'co-prime'],
  },
  {
    chapterNumber: 3,
    topicId: 'commercial-arithmetic',
    sectionCategory: 'math',
    sectionTitle: { en: 'Mathematics: Commercial Arithmetic', hi: 'गणित: व्यावसायिक अंकगणित' },
    applicableExams: ['rrb-ntpc', 'rrb-group-d', 'rrb-je', 'rrb-alp', 'rrb-technician', 'rrb-rpf'],
    difficulty: 'Advanced',
    pageCountEstimate: 30,
    estimatedMinutes: 50,
    examWeightage: { en: '6–8 Questions (High-Weightage Core)', hi: '6-8 प्रश्न (अत्यधिक महत्वपूर्ण कोर)' },
    tags: ['percentage', 'profit-loss', 'false-weight', 'si-ci-difference', 'installments', 'partnerships'],
  },
  {
    chapterNumber: 4,
    topicId: 'kinematics-work-metrics',
    sectionCategory: 'math',
    sectionTitle: { en: 'Mathematics: Kinematics & Work Metrics', hi: 'गणित: गतिविज्ञान एवं कार्य-समय' },
    applicableExams: ['rrb-ntpc', 'rrb-group-d', 'rrb-je', 'rrb-alp', 'rrb-technician', 'rrb-rpf'],
    difficulty: 'Advanced',
    pageCountEstimate: 28,
    estimatedMinutes: 50,
    examWeightage: { en: '5–7 Questions (Trains, Pipes, Alternate Days)', hi: '5-7 प्रश्न (रेलगाड़ी, पाइप, एकांतर दिन)' },
    tags: ['time-and-work', 'pipes-and-cisterns', 'train-crossings', 'relative-velocity', 'boats-and-streams'],
  },
  {
    chapterNumber: 5,
    topicId: 'algebra-functions-progressions',
    sectionCategory: 'math',
    sectionTitle: { en: 'Mathematics: Algebra & Progressions', hi: 'गणित: बीजगणित एवं श्रेणियां' },
    applicableExams: ['rrb-ntpc', 'rrb-je', 'rrb-alp', 'rrb-group-d'],
    difficulty: 'Advanced',
    pageCountEstimate: 22,
    estimatedMinutes: 40,
    examWeightage: { en: '3–4 Questions (Quadratics, AP-GP)', hi: '3-4 प्रश्न (द्विघात, AP-GP)' },
    tags: ['quadratic-equations', 'discriminant', 'ap-gp', 'polynomials', 'reciprocal-powers'],
  },
  {
    chapterNumber: 6,
    topicId: 'geometry-coordinate-mensuration',
    sectionCategory: 'math',
    sectionTitle: { en: 'Mathematics: Geometry & Mensuration', hi: 'गणित: ज्यामिति एवं क्षेत्रमिति' },
    applicableExams: ['rrb-ntpc', 'rrb-je', 'rrb-group-d'],
    difficulty: 'Advanced',
    pageCountEstimate: 32,
    estimatedMinutes: 55,
    examWeightage: { en: '4–5 Questions (2D/3D Volumes, Centers of Triangles)', hi: '4-5 प्रश्न (ठोस आयतन, त्रिभुज केंद्र)' },
    tags: ['circles', 'triangles', 'mensuration-3d', 'prisms', 'frustum', 'coordinate-geometry'],
  },
  {
    chapterNumber: 7,
    topicId: 'trigonometry-height-distances',
    sectionCategory: 'math',
    sectionTitle: { en: 'Mathematics: Trigonometry & Heights', hi: 'गणित: त्रिकोणमिति एवं ऊंचाई-दूरी' },
    applicableExams: ['rrb-ntpc', 'rrb-je', 'rrb-alp'],
    difficulty: 'Moderate',
    pageCountEstimate: 20,
    estimatedMinutes: 35,
    examWeightage: { en: '2–3 Questions (Identities, 30-60-90 Ratio)', hi: '2-3 प्रश्न (सर्वसमिकाएं, 30-60-90 अनुपात)' },
    tags: ['trigonometry', 'heights-and-distances', 'pythagoras', 'complementary-angles'],
  },
  {
    chapterNumber: 8,
    topicId: 'statistics-data-interpretation',
    sectionCategory: 'math',
    sectionTitle: { en: 'Mathematics: Statistics & DI', hi: 'गणित: सांख्यिकी एवं समंक व्याख्या' },
    applicableExams: ['rrb-ntpc', 'rrb-je', 'rrb-group-d'],
    difficulty: 'Moderate',
    pageCountEstimate: 22,
    estimatedMinutes: 40,
    examWeightage: { en: '4–6 Questions (Mode-Median-Mean, Variance, Histograms)', hi: '4-6 प्रश्न (बहुलक, माध्यिका, प्रसरण)' },
    tags: ['statistics', 'mean-median-mode', 'standard-deviation', 'variance', 'pie-charts', 'bar-graphs'],
  },
  {
    chapterNumber: 9,
    topicId: 'ug-numerical-basics',
    sectionCategory: 'math',
    sectionTitle: { en: 'Mathematics: Undergraduate Foundations', hi: 'गणित: 12वीं स्तर संख्यात्मक आधार' },
    applicableExams: ['rrb-ntpc', 'rrb-group-d'],
    difficulty: 'Foundation',
    pageCountEstimate: 18,
    estimatedMinutes: 30,
    examWeightage: { en: '4–5 Questions (V-BODMAS, Telescoping Surds)', hi: '4-5 प्रश्न (V-बोडमास, करणी)' },
    tags: ['bodmas', 'recurring-decimals', 'divisibility-72', 'surds'],
  },
  {
    chapterNumber: 10,
    topicId: 'group-d-math-speed-arithmetic',
    sectionCategory: 'math',
    sectionTitle: { en: 'Mathematics: Group D Speed Arithmetic', hi: 'गणित: ग्रुप डी तीव्र गणना' },
    applicableExams: ['rrb-group-d', 'rrb-technician'],
    difficulty: 'Foundation',
    pageCountEstimate: 20,
    estimatedMinutes: 35,
    examWeightage: { en: '25 Marks Total Section Weightage', hi: 'कुल 25 अंक का खंड भार' },
    tags: ['vedic-math', 'digital-root', 'fast-square-root', 'harmonic-speed'],
  },

  // =========================================================================
  // VOLUME 2: GENERAL INTELLIGENCE & ANALYTICAL REASONING
  // =========================================================================
  {
    chapterNumber: 11,
    topicId: 'series-analogies-coding',
    sectionCategory: 'reasoning',
    sectionTitle: { en: 'Reasoning: Coding & Series Architecture', hi: 'तर्कशक्ति: कोडिंग एवं शृंखला' },
    applicableExams: ['rrb-ntpc', 'rrb-group-d', 'rrb-je', 'rrb-alp', 'rrb-technician', 'rrb-rpf'],
    difficulty: 'Moderate',
    pageCountEstimate: 22,
    estimatedMinutes: 40,
    examWeightage: { en: '5–7 Questions (EJOTY, Opposites Sum 27)', hi: '5-7 प्रश्न (EJOTY, विपरीत अक्षर योग 27)' },
    tags: ['coding-decoding', 'number-series', 'analogies', 'ejoty', 'alphabet-ranks'],
  },
  {
    chapterNumber: 12,
    topicId: 'syllogisms-structural-logic',
    sectionCategory: 'reasoning',
    sectionTitle: { en: 'Reasoning: Modern Syllogisms', hi: 'तर्कशक्ति: आधुनिक न्याय निगमन' },
    applicableExams: ['rrb-ntpc', 'rrb-group-d', 'rrb-je', 'rrb-alp', 'rrb-rpf'],
    difficulty: 'Advanced',
    pageCountEstimate: 24,
    estimatedMinutes: 45,
    examWeightage: { en: '3–5 Questions (Only a Few, Possibility)', hi: '3-5 प्रश्न (केवल कुछ, संभावना)' },
    tags: ['syllogisms', 'only-a-few', 'possibility', 'venn-logic', 'either-or'],
  },
  {
    chapterNumber: 13,
    topicId: 'puzzles-seating-matrix',
    sectionCategory: 'reasoning',
    sectionTitle: { en: 'Reasoning: Puzzles & Seating Matrix', hi: 'तर्कशक्ति: पहेलियां एवं बैठक व्यवस्था' },
    applicableExams: ['rrb-ntpc', 'rrb-je', 'rrb-station-master'],
    difficulty: 'Advanced',
    pageCountEstimate: 28,
    estimatedMinutes: 50,
    examWeightage: { en: '4–6 Questions (Circular, Linear, Multi-Floor)', hi: '4-6 प्रश्न (वृत्ताकार, रैखिक, बहु-मंजिला)' },
    tags: ['seating-arrangement', 'puzzles', 'circular-facing', 'floor-puzzle', 'case-elimination'],
  },
  {
    chapterNumber: 14,
    topicId: 'venn-direction-blood',
    sectionCategory: 'reasoning',
    sectionTitle: { en: 'Reasoning: Direction, Blood Relations & Venn', hi: 'तर्कशक्ति: दिशा, रक्त संबंध एवं वेन' },
    applicableExams: ['rrb-ntpc', 'rrb-group-d', 'rrb-je', 'rrb-alp', 'rrb-rpf'],
    difficulty: 'Moderate',
    pageCountEstimate: 22,
    estimatedMinutes: 40,
    examWeightage: { en: '4–6 Questions (Shadows, Coded Relations)', hi: '4-6 प्रश्न (परछाई, कोडेड संबंध)' },
    tags: ['direction-sense', 'shadow-geometry', 'blood-relations', 'coded-family-tree', 'venn-diagrams'],
  },
  {
    chapterNumber: 15,
    topicId: 'critical-reasoning-data-suff',
    sectionCategory: 'reasoning',
    sectionTitle: { en: 'Reasoning: Critical Logic & Data Sufficiency', hi: 'तर्कशक्ति: विश्लेषणात्मक तर्क व समंक पर्याप्तता' },
    applicableExams: ['rrb-ntpc', 'rrb-je', 'rrb-station-master'],
    difficulty: 'Advanced',
    pageCountEstimate: 20,
    estimatedMinutes: 35,
    examWeightage: { en: '3–4 Questions (Statement-Assumptions, Courses of Action)', hi: '3-4 प्रश्न (कथन-पूर्वधारणा, कार्यवाही)' },
    tags: ['statement-assumptions', 'course-of-action', 'data-sufficiency', 'negation-test'],
  },
  {
    chapterNumber: 16,
    topicId: 'group-d-reasoning-topics',
    sectionCategory: 'reasoning',
    sectionTitle: { en: 'Reasoning: Group D High-Yield Logic', hi: 'तर्कशक्ति: ग्रुप डी उच्च-अंक तर्कशक्ति' },
    applicableExams: ['rrb-group-d', 'rrb-technician'],
    difficulty: 'Moderate',
    pageCountEstimate: 22,
    estimatedMinutes: 40,
    examWeightage: { en: '30 Marks Total Section Weightage', hi: 'कुल 30 अंक का खंड भार' },
    tags: ['mirror-image', 'water-image', 'paper-folding', 'non-verbal', '100-50-syllogism'],
  },

  // =========================================================================
  // VOLUME 3: GENERAL SCIENCE (PHYSICS, CHEMISTRY, LIFE PROCESSES)
  // =========================================================================
  {
    chapterNumber: 17,
    topicId: 'physics-mechanics-optics-electricity',
    sectionCategory: 'science',
    sectionTitle: { en: 'General Science: Physics', hi: 'सामान्य विज्ञान: भौतिकी' },
    applicableExams: ['rrb-group-d', 'rrb-ntpc', 'rrb-je', 'rrb-alp', 'rrb-technician'],
    difficulty: 'Advanced',
    pageCountEstimate: 30,
    estimatedMinutes: 55,
    examWeightage: { en: '8–10 Questions (Mirrors, Lenses, Circuits, 1 kWh = 3.6 MJ)', hi: '8-10 प्रश्न (दर्पण, लेंस, परिपथ)' },
    tags: ['ray-optics', 'snells-law', 'ohms-law', 'power-of-lens', 'joules-heating', 'work-energy'],
  },
  {
    chapterNumber: 18,
    topicId: 'chemistry-reactions-periodic-acids',
    sectionCategory: 'science',
    sectionTitle: { en: 'General Science: Chemistry', hi: 'सामान्य विज्ञान: रसायन शास्त्र' },
    applicableExams: ['rrb-group-d', 'rrb-ntpc', 'rrb-je', 'rrb-alp', 'rrb-technician'],
    difficulty: 'Moderate',
    pageCountEstimate: 26,
    estimatedMinutes: 45,
    examWeightage: { en: '7–9 Questions (Moseley Periodic Table, pH, Salts)', hi: '7-9 प्रश्न (आवर्त सारणी, pH मान, लवण)' },
    tags: ['modern-periodic-table', 'chemical-reactions', 'ph-scale', 'acids-bases', 'baking-soda'],
  },
  {
    chapterNumber: 19,
    topicId: 'biology-physiology-genetics-ecology',
    sectionCategory: 'science',
    sectionTitle: { en: 'General Science: Biology & Physiology', hi: 'सामान्य विज्ञान: जीव विज्ञान एवं शरीर क्रिया विज्ञान' },
    applicableExams: ['rrb-group-d', 'rrb-ntpc', 'rrb-je', 'rrb-paramedical'],
    difficulty: 'Moderate',
    pageCountEstimate: 28,
    estimatedMinutes: 50,
    examWeightage: { en: '8–10 Questions (Nephron, 4-Chambered Heart, Genetics)', hi: '8-10 प्रश्न (नेफ्रॉन, 4-कक्षीय हृदय, आनुवंशिकी)' },
    tags: ['human-heart', 'nephron', 'neuron', 'mendel-genetics', 'photosynthesis', 'digestive-enzymes'],
  },
  {
    chapterNumber: 20,
    topicId: 'ug-applied-science-10th',
    sectionCategory: 'science',
    sectionTitle: { en: 'General Science: NCERT 10th Applied Science', hi: 'सामान्य विज्ञान: एनसीईआरटी 10वीं अनुप्रयुक्त विज्ञान' },
    applicableExams: ['rrb-ntpc', 'rrb-group-d'],
    difficulty: 'Foundation',
    pageCountEstimate: 22,
    estimatedMinutes: 40,
    examWeightage: { en: '10–12 Questions in NTPC Undergrad & Group D', hi: 'एनटीपीसी 12वीं व ग्रुप डी में 10-12 प्रश्न' },
    tags: ['ncert-science', 'electricity-circuits', 'lens-formula', 'human-eye', 'chemical-bonding'],
  },

  // =========================================================================
  // VOLUME 4: INDIAN RAILWAYS INFRASTRUCTURE, KAVACH & ROLLING STOCK
  // =========================================================================
  {
    chapterNumber: 21,
    topicId: 'evolution-zones-hqs',
    sectionCategory: 'railways',
    sectionTitle: { en: 'Indian Railways: History, Zones & Production Units', hi: 'भारतीय रेल: इतिहास, ज़ोन एवं उत्पादन इकाइयां' },
    applicableExams: ['rrb-ntpc', 'rrb-group-d', 'rrb-je', 'rrb-alp', 'rrb-station-master', 'rrb-rpf'],
    difficulty: 'Moderate',
    pageCountEstimate: 24,
    estimatedMinutes: 40,
    examWeightage: { en: '3–5 Questions (16 April 1853, 17 Zones, CLW/DLW)', hi: '3-5 प्रश्न (16 अप्रैल 1853, 17 ज़ोन, उत्पादन इकाइयां)' },
    tags: ['railway-history', '17-zones', 'zonal-hqs', 'production-units', 'clw', 'dlw', 'icf'],
  },
  {
    chapterNumber: 22,
    topicId: 'track-gauges-specs',
    sectionCategory: 'railways',
    sectionTitle: { en: 'Indian Railways: Permanent Way & Track Engineering', hi: 'भारतीय रेल: स्थायी मार्ग (P-Way) एवं ट्रैक मानक' },
    applicableExams: ['rrb-je', 'rrb-group-d', 'rrb-alp', 'rrb-technician'],
    difficulty: 'Advanced',
    pageCountEstimate: 26,
    estimatedMinutes: 45,
    examWeightage: { en: '4–6 Questions (BG 1676mm, UIC 60, Cant, Sleepers)', hi: '4-6 प्रश्न (ब्रॉड गेज 1676mm, UIC 60 रेल, कैंट)' },
    tags: ['broad-gauge', 'uic-60-rail', 'psc-sleepers', 'cant-superelevation', 'pandrol-clip'],
  },
  {
    chapterNumber: 23,
    topicId: 'modern-systems-kavach-dfc-pus',
    sectionCategory: 'railways',
    sectionTitle: { en: 'Indian Railways: Kavach 4.0 ATP, DFC & Vande Bharat', hi: 'भारतीय रेल: कवच 4.0 एटीपी, डीएफसी एवं वंदे भारत' },
    applicableExams: ['rrb-ntpc', 'rrb-je', 'rrb-alp', 'rrb-station-master', 'rrb-section-controller'],
    difficulty: 'Specialist',
    pageCountEstimate: 28,
    estimatedMinutes: 50,
    examWeightage: { en: '4–6 Questions (SIL-4 Kavach, Western/Eastern DFC, Train 18)', hi: '4-6 प्रश्न (कवच 4.0, डीएफसी, ट्रेन 18)' },
    tags: ['kavach-atp', 'sil-4', 'rfid-sleepers', 'eastern-dfc', 'western-dfc', 'vande-bharat', 'wap-7'],
  },

  // =========================================================================
  // VOLUME 5: GENERAL AWARENESS, POLITY & FREEDOM MOVEMENT
  // =========================================================================
  {
    chapterNumber: 24,
    topicId: 'polity-constitution-mechanics',
    sectionCategory: 'gk',
    sectionTitle: { en: 'General Awareness: Indian Constitution & Polity', hi: 'सामान्य ज्ञान: भारतीय संविधान एवं राजव्यवस्था' },
    applicableExams: ['rrb-ntpc', 'rrb-group-d', 'rrb-je', 'rrb-rpf'],
    difficulty: 'Moderate',
    pageCountEstimate: 26,
    estimatedMinutes: 45,
    examWeightage: { en: '4–6 Questions (Fundamental Rights, Article 32 Writs)', hi: '4-6 प्रश्न (मौलिक अधिकार, अनुच्छेद 32 रिट)' },
    tags: ['constitution', 'fundamental-rights', 'preamble', 'article-32', 'writs', 'amendments'],
  },
  {
    chapterNumber: 25,
    topicId: 'history-culture-freedom',
    sectionCategory: 'gk',
    sectionTitle: { en: 'General Awareness: Freedom Struggle & Culture', hi: 'सामान्य ज्ञान: स्वतंत्रता संग्राम एवं संस्कृति' },
    applicableExams: ['rrb-ntpc', 'rrb-group-d', 'rrb-rpf'],
    difficulty: 'Moderate',
    pageCountEstimate: 26,
    estimatedMinutes: 45,
    examWeightage: { en: '5–7 Questions (1885 INC, Gandhi Movements, 1929 Lahore)', hi: '5-7 प्रश्न (कांग्रेस अधिवेशन, गांधीजी के आंदोलन)' },
    tags: ['freedom-struggle', 'inc-sessions', 'non-cooperation', 'quit-india', 'dandi-march', '8-classical-dances'],
  },
  {
    chapterNumber: 26,
    topicId: 'geography-environment-chokepoints',
    sectionCategory: 'gk',
    sectionTitle: { en: 'General Awareness: Indian & World Geography', hi: 'सामान्य ज्ञान: भारतीय एवं विश्व भूगोल' },
    applicableExams: ['rrb-ntpc', 'rrb-group-d', 'rrb-je', 'rrb-rpf'],
    difficulty: 'Moderate',
    pageCountEstimate: 24,
    estimatedMinutes: 40,
    examWeightage: { en: '4–5 Questions (River Basins, Panch Prayag, Tehri Dam)', hi: '4-5 प्रश्न (नदी बेसिन, पंच प्रयाग, बांध)' },
    tags: ['river-systems', 'himalayan-rivers', 'panch-prayag', 'tehri-dam', 'mountain-passes'],
  },
  {
    chapterNumber: 27,
    topicId: 'economy-development-paradigms',
    sectionCategory: 'gk',
    sectionTitle: { en: 'General Awareness: Indian Economy & RBI Policy', hi: 'सामान्य ज्ञान: भारतीय अर्थव्यवस्था एवं मौद्रिक नीति' },
    applicableExams: ['rrb-ntpc', 'rrb-je'],
    difficulty: 'Moderate',
    pageCountEstimate: 20,
    estimatedMinutes: 35,
    examWeightage: { en: '3–4 Questions (GDP/NNP, Repo Rate, GST Article 279A)', hi: '3-4 प्रश्न (जीडीपी, रेपो रेट, जीएसटी)' },
    tags: ['indian-economy', 'rbi-repo-rate', 'gst-council', 'fiscal-deficit', 'budget-merger'],
  },
  {
    chapterNumber: 28,
    topicId: 'science-space-nuclear-it',
    sectionCategory: 'gk',
    sectionTitle: { en: 'General Awareness: Space, Nuclear & Defense Technology', hi: 'सामान्य ज्ञान: अंतरिक्ष, परमाणु एवं रक्षा प्रौद्योगिकी' },
    applicableExams: ['rrb-ntpc', 'rrb-group-d', 'rrb-je'],
    difficulty: 'Moderate',
    pageCountEstimate: 22,
    estimatedMinutes: 40,
    examWeightage: { en: '3–5 Questions (ISRO Chandrayaan-3, Kudankulam, BrahMos)', hi: '3-5 प्रश्न (चंद्रयान-3, कुडनकुलम, ब्रह्मोस)' },
    tags: ['isro', 'chandrayaan-3', 'nuclear-power-plants', 'brahmos', 'drdo-missiles'],
  },
  {
    chapterNumber: 29,
    topicId: 'current-affairs-sports-summits',
    sectionCategory: 'gk',
    sectionTitle: { en: 'General Awareness: Current Affairs & Sports', hi: 'सामान्य ज्ञान: समसामयिकी, खेल एवं सम्मेलन' },
    applicableExams: ['rrb-ntpc', 'rrb-group-d', 'rrb-je', 'rrb-rpf'],
    difficulty: 'Moderate',
    pageCountEstimate: 22,
    estimatedMinutes: 40,
    examWeightage: { en: '6–8 Questions in CBT-1 & CBT-2', hi: 'सीबीटी-1 व 2 में 6-8 प्रश्न' },
    tags: ['current-affairs', 'amrit-bharat-stations', 'grand-slams', 'olympics', 'g20-summits'],
  },

  // =========================================================================
  // VOLUME 6: RRB JE TECHNICAL DISCIPLINES (100 MARKS CBT-2)
  // =========================================================================
  {
    chapterNumber: 30,
    topicId: 'civil-materials-surveying-structures',
    sectionCategory: 'engineering',
    sectionTitle: { en: 'JE Civil: Materials, Surveying & Structures', hi: 'जेई सिविल: निर्माण सामग्री, सर्वेक्षण व संरचना' },
    applicableExams: ['rrb-je'],
    difficulty: 'Specialist',
    pageCountEstimate: 32,
    estimatedMinutes: 60,
    examWeightage: { en: '25–30 Marks in CBT-2 Civil Paper', hi: 'सीबीटी-2 सिविल पेपर में 25-30 अंक' },
    tags: ['cement-testing', 'surveying-total-station', 'rcc-limit-state', 'is-456', 'pway-cant-deficiency'],
  },
  {
    chapterNumber: 31,
    topicId: 'civil-hydraulics-railway-environmental',
    sectionCategory: 'engineering',
    sectionTitle: { en: 'JE Civil: Hydraulics & Railway Engineering', hi: 'जेई सिविल: द्रवचालिती एवं रेलवे इंजीनियरिंग' },
    applicableExams: ['rrb-je'],
    difficulty: 'Specialist',
    pageCountEstimate: 28,
    estimatedMinutes: 55,
    examWeightage: { en: '20–25 Marks in CBT-2 Civil Paper', hi: 'सीबीटी-2 सिविल पेपर में 20-25 अंक' },
    tags: ['darcy-weisbach', 'railway-turnouts', '1-in-12-switch', 'bod-cod', 'bernoulli'],
  },
  {
    chapterNumber: 32,
    topicId: 'mech-som-tom-fluids',
    sectionCategory: 'engineering',
    sectionTitle: { en: 'JE Mechanical: SOM, TOM & Fluid Mechanics', hi: 'जेई मैकेनिकल: पदार्थ सामर्थ्य, मशीन सिद्धांत व तरल' },
    applicableExams: ['rrb-je'],
    difficulty: 'Specialist',
    pageCountEstimate: 32,
    estimatedMinutes: 60,
    examWeightage: { en: '25–30 Marks in CBT-2 Mechanical Paper', hi: 'सीबीटी-2 मैकेनिकल पेपर में 25-30 अंक' },
    tags: ['pure-bending', 'torsion-equation', 'gear-module', 'governor', 'continuity-equation'],
  },
  {
    chapterNumber: 33,
    topicId: 'mech-thermo-ic-rac-production',
    sectionCategory: 'engineering',
    sectionTitle: { en: 'JE Mechanical: Thermodynamics & Manufacturing', hi: 'जेई मैकेनिकल: ऊष्मागतिकी एवं उत्पादन' },
    applicableExams: ['rrb-je'],
    difficulty: 'Specialist',
    pageCountEstimate: 30,
    estimatedMinutes: 55,
    examWeightage: { en: '25–30 Marks in CBT-2 Mechanical Paper', hi: 'सीबीटी-2 मैकेनिकल पेपर में 25-30 अंक' },
    tags: ['carnot-efficiency', 'otto-cycle', '1-tr-cooling', 'taylor-tool-life', 'arc-welding'],
  },
  {
    chapterNumber: 34,
    topicId: 'elec-circuits-machines-drives',
    sectionCategory: 'engineering',
    sectionTitle: { en: 'JE Electrical: Circuits, Machines & Drives', hi: 'जेई इलेक्ट्रिकल: परिपथ, मशीनें एवं ड्राइव्स' },
    applicableExams: ['rrb-je'],
    difficulty: 'Specialist',
    pageCountEstimate: 34,
    estimatedMinutes: 60,
    examWeightage: { en: '30–35 Marks in CBT-2 Electrical Paper', hi: 'सीबीटी-2 इलेक्ट्रिकल पेपर में 30-35 अंक' },
    tags: ['thevenin-theorem', 'transformer-efficiency', 'induction-motor-slip', 'dc-motor-torque'],
  },
  {
    chapterNumber: 35,
    topicId: 'ece-analog-digital-micros-comms',
    sectionCategory: 'engineering',
    sectionTitle: { en: 'JE Electronics: Analog, Digital & 8085 Micro', hi: 'जेई इलेक्ट्रॉनिक्स: एनालॉग, डिजिटल व 8085' },
    applicableExams: ['rrb-je'],
    difficulty: 'Specialist',
    pageCountEstimate: 30,
    estimatedMinutes: 55,
    examWeightage: { en: '25–30 Marks in CBT-2 Electronics Paper', hi: 'सीबीटी-2 इलेक्ट्रॉनिक्स पेपर में 25-30 अंक' },
    tags: ['op-amp-virtual-ground', 'logic-gates', '8085-microprocessor', 'nyquist-rate', 'ofc-attenuation'],
  },
  {
    chapterNumber: 36,
    topicId: 'computers-hardware-os-networks',
    sectionCategory: 'engineering',
    sectionTitle: { en: 'Basics of Computers & Applications (10 Marks)', hi: 'कंप्यूटर एवं अनुप्रयोग मूल सिद्धांत (10 अंक)' },
    applicableExams: ['rrb-je', 'rrb-technician'],
    difficulty: 'Moderate',
    pageCountEstimate: 20,
    estimatedMinutes: 35,
    examWeightage: { en: '10 Mandatory Marks in RRB JE CBT-2', hi: 'आरआरबी जेई सीबीटी-2 में अनिवार्य 10 अंक' },
    tags: ['cpu-registers', 'os-virtual-memory', 'ipv4-vs-ipv6', 'tcp-udp', 'cyber-security'],
  },
  {
    chapterNumber: 37,
    topicId: 'env-ecosystems-pollution-climate',
    sectionCategory: 'engineering',
    sectionTitle: { en: 'Environment & Pollution Control (10 Marks)', hi: 'पर्यावरण एवं प्रदूषण नियंत्रण (10 अंक)' },
    applicableExams: ['rrb-je'],
    difficulty: 'Moderate',
    pageCountEstimate: 18,
    estimatedMinutes: 35,
    examWeightage: { en: '10 Mandatory Marks in RRB JE CBT-2', hi: 'आरआरबी जेई सीबीटी-2 में अनिवार्य 10 अंक' },
    tags: ['air-water-pollution', 'bod-cod', 'montreal-protocol', 'kyoto-paris-agreement', 'e-waste'],
  },

  // =========================================================================
  // VOLUME 7: ALP BASIC SCIENCE, ENGINEERING DRAWING & TRADE
  // =========================================================================
  {
    chapterNumber: 38,
    topicId: 'alp-basic-science-drawing',
    sectionCategory: 'alp-trade',
    sectionTitle: { en: 'ALP: Basic Science, Drawing & Levers (40 Marks)', hi: 'एएलपी: बेसिक साइंस, ड्राइंग व उत्तोलक (40 अंक)' },
    applicableExams: ['rrb-alp', 'rrb-technician'],
    difficulty: 'Specialist',
    pageCountEstimate: 32,
    estimatedMinutes: 60,
    examWeightage: { en: '40 Marks in RRB ALP CBT-2 Part A & Tech Gr I', hi: 'एएलपी सीबीटी-2 व तकनीशियन में 40 अंक' },
    tags: ['engineering-drawing', 'iso-a0-sheet', 'first-angle-projection', 'fle-levers', 'class-c-fire'],
  },

  // =========================================================================
  // VOLUME 8: STATION MASTER & SECTION CONTROLLER OPERATIONS
  // =========================================================================
  {
    chapterNumber: 39,
    topicId: 'station-master-operations',
    sectionCategory: 'operations',
    sectionTitle: { en: 'Station Master: Block Working & Safety Rules', hi: 'स्टेशन मास्टर: ब्लॉक कार्यप्रणाली व सुरक्षा नियम' },
    applicableExams: ['rrb-station-master', 'rrb-section-controller', 'rrb-ntpc'],
    difficulty: 'Specialist',
    pageCountEstimate: 30,
    estimatedMinutes: 55,
    examWeightage: { en: 'Station Master CBT-2 & RDSO CBAT Aptitude', hi: 'स्टेशन मास्टर सीबीटी-2 एवं साइको टेस्ट' },
    tags: ['absolute-block', 'automatic-block', 'electronic-interlocking', 'csr-715m', 't-409-caution', 'cbat-tscore-42'],
  },

  // =========================================================================
  // VOLUME 9: RAILWAY PROTECTION FORCE (RPF LAW & SECURITY)
  // =========================================================================
  {
    chapterNumber: 40,
    topicId: 'rpf-security-aptitude',
    sectionCategory: 'rpf',
    sectionTitle: { en: 'RPF: Security Aptitude & Railways Act 1989', hi: 'आरपीएफ: सुरक्षा अभिरुचि व रेलवे अधिनियम 1989' },
    applicableExams: ['rrb-rpf'],
    difficulty: 'Specialist',
    pageCountEstimate: 24,
    estimatedMinutes: 45,
    examWeightage: { en: 'RPF SI & Constable Core Discipline & Legal Powers', hi: 'आरपीएफ सब-इंस्पेक्टर व कांस्टेबल कानूनी शक्तियां' },
    tags: ['rpup-act-1966', 'railways-act-1989', 'section-141-acp', 'section-156-roof', '1600m-pet-pacing'],
  },

  // =========================================================================
  // VOLUME 10: UNDERGRADUATE FOUNDATIONS DRILL
  // =========================================================================
  {
    chapterNumber: 41,
    topicId: 'ug-arithmetic-equations',
    sectionCategory: 'math',
    sectionTitle: { en: 'Commercial Arithmetic: Profit-Loss & CI Formulas', hi: 'व्यावसायिक अंकगणित: लाभ-हानि व ब्याज सूत्र' },
    applicableExams: ['rrb-ntpc', 'rrb-group-d'],
    difficulty: 'Foundation',
    pageCountEstimate: 20,
    estimatedMinutes: 35,
    examWeightage: { en: '5–6 Questions in NTPC 10+2 & Group D', hi: 'एनटीपीसी 12वीं व ग्रुप डी में 5-6 प्रश्न' },
    tags: ['cp-mp-ratio', 'dishonest-dealer', 'si-ci-difference-3yr', 'partnership-months'],
  },
  {
    chapterNumber: 42,
    topicId: 'ug-work-movement',
    sectionCategory: 'math',
    sectionTitle: { en: 'Work & Movement: Alternate Days & Train Lengths', hi: 'कार्य एवं गति: एकांतर दिन व रेलगाड़ी लंबाई' },
    applicableExams: ['rrb-ntpc', 'rrb-group-d'],
    difficulty: 'Foundation',
    pageCountEstimate: 20,
    estimatedMinutes: 35,
    examWeightage: { en: '4–5 Questions in CBT-1 & Level-1', hi: 'सीबीटी-1 व लेवल-1 में 4-5 प्रश्न' },
    tags: ['train-length-invariance', 'm1d1h1', 'pipe-drainage', 'boat-speed-formula'],
  },
  {
    chapterNumber: 43,
    topicId: 'ug-basic-mensuration-algebra',
    sectionCategory: 'math',
    sectionTitle: { en: 'Mensuration & Algebra: 2D Paths & Melting Invariance', hi: 'क्षेत्रमिति व बीजगणित: 2D रास्ते व पिघलाने का नियम' },
    applicableExams: ['rrb-ntpc', 'rrb-group-d'],
    difficulty: 'Foundation',
    pageCountEstimate: 22,
    estimatedMinutes: 40,
    examWeightage: { en: '4–5 Questions in CBT-1 & Level-1', hi: 'सीबीटी-1 व लेवल-1 में 4-5 प्रश्न' },
    tags: ['outer-path-area', 'solid-melting-invariance', 'reciprocal-cubes', 'quadratic-roots'],
  },
  {
    chapterNumber: 44,
    topicId: 'ug-alphanumeric-coding',
    sectionCategory: 'reasoning',
    sectionTitle: { en: 'Alphanumeric Reasoning: Reverse Ranks & Operators', hi: 'वर्ण-संख्या तर्कशक्ति: उल्टे क्रमांक व संक्रियाएं' },
    applicableExams: ['rrb-ntpc', 'rrb-group-d'],
    difficulty: 'Foundation',
    pageCountEstimate: 18,
    estimatedMinutes: 30,
    examWeightage: { en: '5–6 Questions in CBT-1', hi: 'सीबीटी-1 में 5-6 प्रश्न' },
    tags: ['reverse-alphabet-rank', 'operator-bodmas', 'symbol-series'],
  },
  {
    chapterNumber: 45,
    topicId: 'ug-direction-family-visual',
    sectionCategory: 'reasoning',
    sectionTitle: { en: 'Analytical Reasoning: Shadows & Generation Trees', hi: 'विश्लेषणात्मक तर्कशक्ति: परछाई व पीढ़ी वृक्ष' },
    applicableExams: ['rrb-ntpc', 'rrb-group-d'],
    difficulty: 'Foundation',
    pageCountEstimate: 20,
    estimatedMinutes: 35,
    examWeightage: { en: '4–5 Questions in CBT-1', hi: 'सीबीटी-1 में 4-5 प्रश्न' },
    tags: ['sunrise-shadow-west', 'pythagorean-triplets', 'family-generation-tree', 'pointing-photo'],
  },
  {
    chapterNumber: 46,
    topicId: 'ug-static-gk-freedom',
    sectionCategory: 'gk',
    sectionTitle: { en: 'Static GK: Freedom Movement & 1853 First Train', hi: 'स्टैटिक सामान्य ज्ञान: स्वतंत्रता संग्राम व 1853 ट्रेन' },
    applicableExams: ['rrb-ntpc', 'rrb-group-d'],
    difficulty: 'Foundation',
    pageCountEstimate: 22,
    estimatedMinutes: 40,
    examWeightage: { en: '6–8 Questions in CBT-1', hi: 'सीबीटी-1 में 6-8 प्रश्न' },
    tags: ['inc-presidents', '1929-purna-swaraj', 'article-32-writs', '16-april-1853', 'sindh-sultan-sahib'],
  },
];

export function getChaptersForExam(examId: ExamId | 'ALL'): BookChapterMetadata[] {
  if (examId === 'ALL') return BOOK_CHAPTERS;
  return BOOK_CHAPTERS.filter((ch) => ch.applicableExams.includes(examId));
}

export function getChaptersForSection(
  sectionCategory: BookChapterMetadata['sectionCategory'] | 'ALL'
): BookChapterMetadata[] {
  if (sectionCategory === 'ALL') return BOOK_CHAPTERS;
  return BOOK_CHAPTERS.filter((ch) => ch.sectionCategory === sectionCategory);
}

export function searchChapters(query: string): BookChapterMetadata[] {
  if (!query.trim()) return BOOK_CHAPTERS;
  const q = query.toLowerCase().trim();
  return BOOK_CHAPTERS.filter((ch) => {
    return (
      ch.topicId.toLowerCase().includes(q) ||
      ch.sectionTitle.en.toLowerCase().includes(q) ||
      ch.sectionTitle.hi.toLowerCase().includes(q) ||
      ch.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  });
}
