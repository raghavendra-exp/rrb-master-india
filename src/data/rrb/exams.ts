import type { ExamConfig } from '../../types';

export const EXAMS_DATA: Record<string, ExamConfig> = {
  // =========================================================================
  // 1. RRB NTPC (GRADUATE & UNDERGRADUATE)
  // =========================================================================
  'rrb-ntpc': {
    id: 'rrb-ntpc',
    code: 'CEN 06/2026 (Graduate) & CEN 07/2026 (Undergrad) / CEN 05/2024 & 06/2024',
    title: {
      en: 'RRB NTPC (Non-Technical Popular Categories)',
      hi: 'आरआरबी एनटीपीसी (गैर-तकनीकी लोकप्रिय श्रेणियां)',
    },
    subtitle: {
      en: 'Graduate (CEN 06/2026: 08 Oct – 06 Nov 2026) & Undergraduate (CEN 07/2026: 15 Oct – 13 Nov 2026)',
      hi: 'स्नातक (सीईएन 06/2026: 08 अक्टूबर – 06 नवंबर 2026) एवं 12वीं उत्तीर्ण (सीईएन 07/2026: 15 अक्टूबर – 13 नवंबर 2026)',
    },
    currentCEN: 'CEN 06/2026 (08 Oct – 06 Nov 2026) & CEN 07/2026 (15 Oct – 13 Nov 2026)',
    officialNotificationUrl: 'https://rrbapply.gov.in',
    eligibility: {
      ageRange: '18-33 Years for Graduate (CEN 06/2026) | 18-30 Years for Undergraduate (CEN 07/2026) + Category Relaxations (OBC 3 yrs, SC/ST 5 yrs)',
      qualifications: [
        {
          en: 'Graduate Posts (CEN 06/2026): Bachelor Degree from a recognized University for Goods Train Manager, Chief Commercial Cum Ticket Supervisor, Senior Clerk Cum Typist, and Junior Accounts Assistant Cum Typist',
          hi: 'स्नातक पद (सीईएन 06/2026): मान्यता प्राप्त विश्वविद्यालय से स्नातक उपाधि (गुड्स ट्रेन मैनेजर, मुख्य वाणिज्यिक सह टिकट पर्यवेक्षक, सीनियर क्लर्क एवं जूनियर एकाउंट्स असिस्टेंट)',
        },
        {
          en: 'Undergraduate Posts (CEN 07/2026): 12th (+2 Stage) or equivalent with minimum 50% marks in aggregate for UR/OBC for Commercial cum Ticket Clerk, Accounts Clerk, Junior Clerk, and Trains Clerk',
          hi: 'अंडरग्रेजुएट पद (सीईएन 07/2026): 12वीं (+2 चरण) में न्यूनतम 50% अंकों के साथ उत्तीर्ण (कमर्शियल कम टिकट क्लर्क, एकाउंट्स क्लर्क, जूनियर क्लर्क एवं ट्रेन्स क्लर्क)',
        },
      ],
      feeGeneral: '₹500 (₹400 refundable on appearing in 1st Stage CBT directly to Aadhaar-seeded bank account)',
      feeReserved: '₹250 (₹250 fully refundable on appearing in 1st Stage CBT for SC/ST/ExSM/Female/PwBD/EBC)',
    },
    stages: [
      {
        id: 'cbt-1',
        name: { en: 'CBT-1 (Screening Test - Common for All Posts: 100 Qs / 90 Mins)', hi: 'सीबीटी-1 (स्क्रीनिंग परीक्षा - 100 प्रश्न / 90 मिनट)' },
        questions: 100,
        marks: 100,
        durationMinutes: 90,
        negativeMarking: '1/3rd mark deducted per wrong answer',
        sections: [
          {
            subject: 'General Awareness',
            bilingualSubject: { en: 'General Awareness & Current Affairs', hi: 'सामान्य जागरूकता एवं समसामयिकी' },
            questions: 40,
            marks: 40,
          },
          {
            subject: 'Mathematics',
            bilingualSubject: { en: 'Mathematics (Arithmetic & Advanced Algebra)', hi: 'गणित (अंकगणित व उन्नत बीजगणित)' },
            questions: 30,
            marks: 30,
          },
          {
            subject: 'General Intelligence & Reasoning',
            bilingualSubject: { en: 'General Intelligence & Reasoning', hi: 'सामान्य बुद्धिमत्ता एवं तर्कशक्ति' },
            questions: 30,
            marks: 30,
          },
        ],
      },
      {
        id: 'cbt-2',
        name: { en: 'CBT-2 (Main Examination: 120 Qs / 90 Mins - Separate per Pay Level)', hi: 'सीबीटी-2 (मुख्य परीक्षा: 120 प्रश्न / 90 मिनट - पे लेवल वार)' },
        questions: 120,
        marks: 120,
        durationMinutes: 90,
        negativeMarking: '1/3rd mark deducted per wrong answer',
        sections: [
          {
            subject: 'General Awareness',
            bilingualSubject: { en: 'General Awareness', hi: 'सामान्य जागरूकता' },
            questions: 50,
            marks: 50,
          },
          {
            subject: 'Mathematics',
            bilingualSubject: { en: 'Mathematics', hi: 'गणित' },
            questions: 35,
            marks: 35,
          },
          {
            subject: 'General Intelligence & Reasoning',
            bilingualSubject: { en: 'General Intelligence & Reasoning', hi: 'सामान्य बुद्धिमत्ता एवं तर्कशक्ति' },
            questions: 35,
            marks: 35,
          },
        ],
      },
      {
        id: 'skill-test',
        name: {
          en: 'Skill Stage (Typing Test for UG / DISPENSED WITH for CEN 06/2026 per Para 13.0(c))',
          hi: 'कौशल परीक्षा (12वीं पदों हेतु टाइपिंग / स्नातक CEN 06/2026 हेतु टाइपिंग समाप्त)',
        },
        questions: 0,
        marks: 0,
        durationMinutes: 10,
        negativeMarking: 'Qualifying: 30 WPM English / 25 WPM Hindi for Undergraduate Clerks',
        sections: [],
      },
      {
        id: 'dv-medical',
        name: { en: 'Document Verification & Medical Examination', hi: 'दस्तावेज़ सत्यापन एवं चिकित्सा परीक्षण' },
        questions: 0,
        marks: 0,
        durationMinutes: 0,
        negativeMarking: 'Qualifying',
        sections: [],
      },
    ],
    selectionProcess: [
      {
        en: '1st Stage Computer Based Test (CBT-1) common for all posts (100 Qs / 90 Mins)',
        hi: 'प्रथम चरण कंप्यूटर आधारित परीक्षा (CBT-1) सभी पदों के लिए (100 प्रश्न / 90 मिनट)',
      },
      {
        en: '2nd Stage Computer Based Test (CBT-2) separate for each 7th CPC Pay Level (120 Qs / 90 Mins)',
        hi: 'द्वितीय चरण सीबीटी-2 प्रत्येक पे लेवल हेतु पृथक (120 प्रश्न / 90 मिनट)',
      },
      {
        en: 'Computer Based Aptitude Test (CBAT) for Station Master posts (Special Drive CEN 08/2026)',
        hi: 'स्टेशन मास्टर पदों हेतु कंप्यूटर आधारित योग्यता परीक्षण (CBAT साइको)',
      },
      {
        en: 'Document Verification (DV) and Medical Examination by Railway Medical Authorities',
        hi: 'सीबीटी-2 एवं कौशल मेरिट के आधार पर दस्तावेज़ सत्यापन एवं रेलवे चिकित्सा परीक्षण',
      },
    ],
    posts: [],
  },

  // =========================================================================
  // 2. RRB ALP (ASSISTANT LOCO PILOT)
  // =========================================================================
  'rrb-alp': {
    id: 'rrb-alp',
    code: 'CEN 01/2026 & CEN 01/2024 (18,799 Vacancies)',
    title: {
      en: 'RRB ALP (Assistant Loco Pilot — Electric & Diesel Traction)',
      hi: 'आरआरबी एएलपी (सहायक लोको पायलट — विद्युत एवं डीजल ट्रैक्शन)',
    },
    subtitle: {
      en: 'CEN 01/2026 (Released Early 2026 Cycle) & CEN 01/2024 Running Cadres of Indian Railways',
      hi: 'सीईएन 01/2026 (प्रारंभिक 2026 चक्र) एवं 01/2024 भारतीय रेल रनिंग स्टाफ भर्ती',
    },
    currentCEN: 'CEN 01/2026 (Released early 2026 cycle) & CEN 01/2024 (18,799 Posts)',
    officialNotificationUrl: 'https://rrbapply.gov.in',
    eligibility: {
      ageRange: '18-30 Years (Up to 33 with Category Relaxation)',
      qualifications: [
        {
          en: 'Matriculation / 10th Pass PLUS ITI in approved trade (Fitter, Electrician, Instrument Mechanic, Millwright, Wireman, Tractor Mechanic, Diesel Mechanic, Turner, Machinist) OR 3-year Diploma in Mechanical / Electrical / Electronics / Automobile Engineering OR B.E./B.Tech in relevant branch',
          hi: '10वीं कक्षा उत्तीर्ण + मान्यता प्राप्त ट्रेड में ITI (फिटर, इलेक्ट्रीशियन, वायरमैन, डीजल मैकेनिक, टर्नर आदि) अथवा मैकेनिकल/इलेक्ट्रिकल/इलेक्ट्रॉनिक्स/ऑटोमोबाइल में 3 वर्षीय डिप्लोमा अथवा बी.ई./बी.टेक डिग्री',
        },
      ],
      feeGeneral: '₹500 (₹400 refunded after CBT-1)',
      feeReserved: '₹250 (Fully refunded for SC/ST/ESM/Female/PwBD)',
    },
    stages: [
      {
        id: 'cbt-1',
        name: { en: 'CBT-1 (Screening Test: 75 Qs / 60 Mins)', hi: 'सीबीटी-1 (स्क्रीनिंग परीक्षा: 75 प्रश्न / 60 मिनट)' },
        questions: 75,
        marks: 75,
        durationMinutes: 60,
        negativeMarking: '1/3rd mark deducted per wrong answer',
        sections: [
          { subject: 'Mathematics', bilingualSubject: { en: 'Mathematics', hi: 'गणित' }, questions: 20, marks: 20 },
          { subject: 'General Intelligence & Reasoning', bilingualSubject: { en: 'General Intelligence & Reasoning', hi: 'सामान्य बुद्धिमत्ता एवं तर्कशक्ति' }, questions: 25, marks: 25 },
          { subject: 'General Science', bilingualSubject: { en: 'General Science (10th Std Physics, Chem, Bio)', hi: 'सामान्य विज्ञान (10वीं भौतिकी, रसायन, जीव)' }, questions: 20, marks: 20 },
          { subject: 'General Awareness', bilingualSubject: { en: 'General Awareness & Current Affairs', hi: 'सामान्य जागरूकता' }, questions: 10, marks: 10 },
        ],
      },
      {
        id: 'cbt-2-part-a',
        name: { en: 'CBT-2 Part A (Merit Deciding: 100 Qs / 90 Mins)', hi: 'सीबीटी-2 भाग A (मेरिट निर्धारक: 100 प्रश्न / 90 मिनट)' },
        questions: 100,
        marks: 100,
        durationMinutes: 90,
        negativeMarking: '1/3rd mark deducted per wrong answer',
        sections: [
          { subject: 'Basic Science and Engineering', bilingualSubject: { en: 'Basic Science & Engineering (Drawing, Work-Power, Heat, Electricity)', hi: 'बेसिक साइंस एंड इंजीनियरिंग (ड्राइंग, कार्य-ऊर्जा, ऊष्मा, विद्युत)' }, questions: 40, marks: 40 },
          { subject: 'Mathematics', bilingualSubject: { en: 'Mathematics', hi: 'गणित' }, questions: 25, marks: 25 },
          { subject: 'General Intelligence & Reasoning', bilingualSubject: { en: 'General Intelligence & Reasoning', hi: 'सामान्य बुद्धिमत्ता एवं तर्कशक्ति' }, questions: 25, marks: 25 },
          { subject: 'General Awareness', bilingualSubject: { en: 'General Awareness', hi: 'सामान्य जागरूकता' }, questions: 10, marks: 10 },
        ],
      },
      {
        id: 'cbt-2-part-b',
        name: { en: 'CBT-2 Part B (Trade Qualifying: 75 Qs / 60 Mins — 35% Pass Mark)', hi: 'सीबीटी-2 भाग B (ट्रेड क्वालीफाइंग: 75 प्रश्न / 60 मिनट — न्यूनतम 35% अंक)' },
        questions: 75,
        marks: 75,
        durationMinutes: 60,
        negativeMarking: '1/3rd mark deducted per wrong answer',
        sections: [
          { subject: 'Technical Trade', bilingualSubject: { en: 'Designated ITI/Diploma Trade Curriculum (DGET Syllabus)', hi: 'निर्धारित ट्रेड पाठ्यक्रम (DGET अनुसार)' }, questions: 75, marks: 75 },
        ],
      },
      {
        id: 'cbat',
        name: { en: 'CBAT (Computer Based Aptitude Psycho Test: 5 Battery Tests — Min T-Score 42 in each)', hi: 'सीबीएटी (साइको एप्टीट्यूड टेस्ट: 5 बैटरियां — प्रत्येक में न्यूनतम T-स्कोर 42)' },
        questions: 0,
        marks: 30,
        durationMinutes: 70,
        negativeMarking: 'No negative marking in CBAT. Final Merit: 70% CBT-2 Part A + 30% CBAT',
        sections: [],
      },
      {
        id: 'dv-medical',
        name: { en: 'Document Verification & Strict A-1 Medical Examination', hi: 'दस्तावेज़ सत्यापन एवं कड़ा A-1 चिकित्सा परीक्षण' },
        questions: 0,
        marks: 0,
        durationMinutes: 0,
        negativeMarking: 'Mandatory A-1 Medical: 6/6 distance vision without glasses, normal color vision, binocular vision',
        sections: [],
      },
    ],
    selectionProcess: [
      { en: 'CBT-1 Screening Exam (75 Qs / 60 Mins)', hi: 'प्रथम चरण सीबीटी-1 स्क्रीनिंग परीक्षा' },
      { en: 'CBT-2 Part A (100 Qs / 90 Mins) for merit + Part B (75 Qs / 60 Mins) Trade qualifying at 35%', hi: 'द्वितीय चरण सीबीटी-2 भाग A (मेरिट) एवं भाग B (ट्रेड क्वालीफाइंग)' },
      { en: 'Computer Based Aptitude Test (CBAT Psycho) with 5 battery tests (70:30 Merit Weightage)', hi: 'कंप्यूटर आधारित साइको टेस्ट (70:30 मेरिट अनुपात)' },
      { en: 'A-1 Medical Standard (6/6 Distance Vision without glasses is strictly non-negotiable)', hi: 'A-1 मेडिकल मानक (बिना चश्मे के 6/6 दृष्टि अनिवार्य)' },
    ],
    posts: [],
  },

  // =========================================================================
  // 3. RRB TECHNICIAN (GRADE I SIGNAL & GRADE III)
  // =========================================================================
  'rrb-technician': {
    id: 'rrb-technician',
    code: 'CEN 02/2026 (Tentative) & CEN 02/2024 (14,298 Vacancies)',
    title: {
      en: 'RRB Technician (Grade I Signal — Level 5 & Grade III Trades — Level 2)',
      hi: 'आरआरबी तकनीशियन (ग्रेड I सिग्नल — लेवल 5 एवं ग्रेड III — लेवल 2)',
    },
    subtitle: {
      en: 'CEN 02/2026 (Early 2026 Cycle) & CEN 02/2024 (1,092 Signal + 13,206 Workshop/P-Way Posts)',
      hi: 'सीईएन 02/2026 (प्रारंभिक 2026 चक्र) एवं 02/2024 (1,092 सिग्नल + 13,206 वर्कशॉप/पी-वे पद)',
    },
    currentCEN: 'CEN 02/2026 (Tentative early 2026 cycle) & CEN 02/2024 (14,298 Posts)',
    officialNotificationUrl: 'https://rrbapply.gov.in',
    eligibility: {
      ageRange: 'Grade I Signal: 18-36 Years | Grade III: 18-33 Years (+ OBC/SC/ST relaxations)',
      qualifications: [
        {
          en: 'Technician Grade I Signal (Pay Level 5): Bachelor of Science (B.Sc) in Physics / Electronics / Computer Science / IT / Instrumentation OR 3-year Diploma in Engineering OR B.E./B.Tech in relevant branch',
          hi: 'तकनीशियन ग्रेड I सिग्नल (लेवल 5): भौतिकी/इलेक्ट्रॉनिक्स/कंप्यूटर साइंस/आईटी/इंस्ट्रुमेंटेशन में बीएससी अथवा इंजीनियरिंग डिप्लोमा अथवा बी.टेक डिग्री',
        },
        {
          en: 'Technician Grade III (Pay Level 2): Matriculation / 10th Pass PLUS ITI / NAC in relevant trade (Fitter, Welder, Electrician, Machinist, Diesel Mechanic, Track Machine, Carpenter, Painter, etc.)',
          hi: 'तकनीशियन ग्रेड III (लेवल 2): 10वीं उत्तीर्ण + संबंधित ट्रेड में आईटीआई अथवा राष्ट्रीय शिक्षुता प्रमाणपत्र (NAC)',
        },
      ],
      feeGeneral: '₹500 (₹400 refunded after CBT)',
      feeReserved: '₹250 (Fully refunded for SC/ST/ESM/Female/PwBD)',
    },
    stages: [
      {
        id: 'cbt-grade-1',
        name: { en: 'CBT for Grade I Signal (100 Qs / 90 Mins: 40 Marks Basic Science & Engg + 15 Marks Computers)', hi: 'ग्रेड I सिग्नल सीबीटी (100 प्रश्न / 90 मिनट: 40 अंक बेसिक साइंस एवं 15 अंक कंप्यूटर)' },
        questions: 100,
        marks: 100,
        durationMinutes: 90,
        negativeMarking: '1/3rd mark deducted per wrong answer',
        sections: [
          { subject: 'Basic Science and Engineering', bilingualSubject: { en: 'Basic Science & Engineering (Physics, Electronics, IT Core)', hi: 'बेसिक साइंस एंड इंजीनियरिंग' }, questions: 40, marks: 40 },
          { subject: 'Mathematics', bilingualSubject: { en: 'Mathematics (Matrices, Coordinate, Calculus, Sets)', hi: 'गणित (आव्यूह, निर्देशांक, कैलकुलस)' }, questions: 20, marks: 20 },
          { subject: 'Basics of Computers and Applications', bilingualSubject: { en: 'Basics of Computers & Applications', hi: 'कंप्यूटर अनुप्रयोगों के मूल तत्व' }, questions: 15, marks: 15 },
          { subject: 'General Intelligence & Reasoning', bilingualSubject: { en: 'General Intelligence & Reasoning', hi: 'सामान्य बुद्धिमत्ता एवं तर्कशक्ति' }, questions: 15, marks: 15 },
          { subject: 'General Awareness', bilingualSubject: { en: 'General Awareness', hi: 'सामान्य जागरूकता' }, questions: 10, marks: 10 },
        ],
      },
      {
        id: 'cbt-grade-3',
        name: { en: 'CBT for Grade III Trades (100 Qs / 90 Mins: 40 Marks General Science)', hi: 'ग्रेड III ट्रेड्स सीबीटी (100 प्रश्न / 90 मिनट: 40 अंक सामान्य विज्ञान)' },
        questions: 100,
        marks: 100,
        durationMinutes: 90,
        negativeMarking: '1/3rd mark deducted per wrong answer',
        sections: [
          { subject: 'General Science', bilingualSubject: { en: 'General Science (10th CBSE Physics, Chemistry, Biology)', hi: 'सामान्य विज्ञान (10वीं सीबीएसई स्तर)' }, questions: 40, marks: 40 },
          { subject: 'Mathematics', bilingualSubject: { en: 'Mathematics', hi: 'गणित' }, questions: 25, marks: 25 },
          { subject: 'General Intelligence & Reasoning', bilingualSubject: { en: 'General Intelligence & Reasoning', hi: 'सामान्य बुद्धिमत्ता एवं तर्कशक्ति' }, questions: 25, marks: 25 },
          { subject: 'General Awareness', bilingualSubject: { en: 'General Awareness', hi: 'सामान्य जागरूकता' }, questions: 10, marks: 10 },
        ],
      },
      {
        id: 'dv-medical',
        name: { en: 'Document Verification & Medical (B-1 for Signal, A-3/B-1/B-2 for Grade III)', hi: 'दस्तावेज़ सत्यापन एवं चिकित्सा परीक्षण' },
        questions: 0,
        marks: 0,
        durationMinutes: 0,
        negativeMarking: 'Qualifying',
        sections: [],
      },
    ],
    selectionProcess: [
      { en: 'Single Stage Computer Based Test (CBT) customized per pay level', hi: 'पे लेवल वार एकल कंप्यूटर आधारित परीक्षा (CBT)' },
      { en: 'Document Verification (DV) in 1:1 ratio based on normalized CBT marks', hi: 'नॉर्मलाइज्ड सीबीटी अंकों के आधार पर 1:1 अनुपात में डीवी' },
      { en: 'Prescribed Medical Fitness Examination (B-1 for Signal, B-1/B-2 for Workshops)', hi: 'पदवार निर्धारित चिकित्सा परीक्षण' },
    ],
    posts: [],
  },

  // =========================================================================
  // 4. RRB SECTION CONTROLLER
  // =========================================================================
  'rrb-section-controller': {
    id: 'rrb-section-controller',
    code: 'CEN 03/2026',
    title: {
      en: 'RRB Section Controller (Traffic Operations & Rail Control)',
      hi: 'आरआरबी सेक्शन कंट्रोलर (यातायात परिचालन एवं नियंत्रण कक्ष)',
    },
    subtitle: {
      en: 'CEN No. 03/2026 (Released Mid 2026 Cycle) Divisonal Control Rooms of Indian Railways',
      hi: 'सीईएन सं. 03/2026 (मध्य 2026 चक्र) मंडल नियंत्रण कक्ष रेल संचालन भर्ती',
    },
    currentCEN: 'CEN No. 03/2026 (Released mid 2026 cycle)',
    officialNotificationUrl: 'https://rrbapply.gov.in',
    eligibility: {
      ageRange: '20-33 Years (Reckoned as on notification cut-off)',
      qualifications: [
        {
          en: 'Degree from a recognized University or its equivalent. Preference for candidates with mathematical/analytical foundations or Railway Operations diplomas',
          hi: 'मान्यता प्राप्त विश्वविद्यालय से स्नातक उपाधि। विश्लेषणात्मक योग्यता अथवा रेलवे परिचालन डिप्लोमा धारकों को प्राथमिकता',
        },
      ],
      feeGeneral: '₹500 (₹400 refundable after CBT-1)',
      feeReserved: '₹250 (Fully refundable)',
    },
    stages: [
      {
        id: 'cbt-1',
        name: { en: 'CBT-1 (Screening Test: 100 Qs / 90 Mins)', hi: 'सीबीटी-1 (स्क्रीनिंग परीक्षा: 100 प्रश्न / 90 मिनट)' },
        questions: 100,
        marks: 100,
        durationMinutes: 90,
        negativeMarking: '1/3rd mark deducted per wrong answer',
        sections: [
          { subject: 'General Awareness', bilingualSubject: { en: 'General Awareness & Current Affairs', hi: 'सामान्य जागरूकता' }, questions: 40, marks: 40 },
          { subject: 'Mathematics', bilingualSubject: { en: 'Mathematics', hi: 'गणित' }, questions: 30, marks: 30 },
          { subject: 'General Intelligence & Reasoning', bilingualSubject: { en: 'General Intelligence & Reasoning', hi: 'तर्कशक्ति' }, questions: 30, marks: 30 },
        ],
      },
      {
        id: 'cbt-2',
        name: { en: 'CBT-2 (Advanced Operational Systems & Analytics: 120 Qs / 90 Mins)', hi: 'सीबीटी-2 (उन्नत परिचालन प्रणाली एवं विश्लेषण: 120 प्रश्न / 90 मिनट)' },
        questions: 120,
        marks: 120,
        durationMinutes: 90,
        negativeMarking: '1/3rd mark deducted per wrong answer',
        sections: [
          { subject: 'Railway Operations & Train Control', bilingualSubject: { en: 'Train Working Rules, Signaling, Block Systems, Headway, WTT', hi: 'ट्रेन संचालन नियम, सिग्नलिंग, ब्लॉक सिस्टम, हेडवे' }, questions: 50, marks: 50 },
          { subject: 'Quantitative Aptitude & Operations Research', bilingualSubject: { en: 'Speed-Distance-Time, Bottlenecks, Queuing, Graphs', hi: 'गति-दूरी-समय, बाधा विश्लेषण, ग्राफिकल रूटिंग' }, questions: 35, marks: 35 },
          { subject: 'Analytical Logic & Decision Making', bilingualSubject: { en: 'Emergency Decision Protocols, Routing Matrices, Contingency', hi: 'आपातकालीन निर्णय प्रोटोकॉल, रूटिंग मैट्रिक्स' }, questions: 35, marks: 35 },
        ],
      },
      {
        id: 'cbat',
        name: { en: 'CBAT (RDSO Psychometric Aptitude Test for Traffic Controllers)', hi: 'सीबीएटी (यातायात नियंत्रकों हेतु आरडीएसओ साइको टेस्ट)' },
        questions: 0,
        marks: 0,
        durationMinutes: 70,
        negativeMarking: 'Mandatory qualifying; Min T-score 42 in all 5 batteries',
        sections: [],
      },
      {
        id: 'dv-medical',
        name: { en: 'Document Verification & A-2 Medical Standard', hi: 'दस्तावेज़ सत्यापन एवं A-2 मेडिकल मानक' },
        questions: 0,
        marks: 0,
        durationMinutes: 0,
        negativeMarking: 'Strict A-2 Medical (Distance Vision 6/9, 6/9 without or with glasses)',
        sections: [],
      },
    ],
    selectionProcess: [
      { en: 'CBT-1 Screening Test', hi: 'प्रथम चरण सीबीटी-1 स्क्रीनिंग' },
      { en: 'CBT-2 Advanced Operational Control Test', hi: 'द्वितीय चरण सीबीटी-2 परिचालन नियंत्रण' },
      { en: 'RDSO Computer Based Aptitude Test (CBAT Psycho)', hi: 'आरडीएसओ साइको एप्टीट्यूड टेस्ट' },
      { en: 'Document Verification & A-2 Medical Examination', hi: 'दस्तावेज़ सत्यापन एवं A-2 चिकित्सा परीक्षण' },
    ],
    posts: [],
  },

  // =========================================================================
  // 5. RRB JE (JUNIOR ENGINEER / DMS / CMA)
  // =========================================================================
  'rrb-je': {
    id: 'rrb-je',
    code: 'CEN 04/2026 (14 Aug – 13 Sep 2026) & CEN 03/2024 (7,951 Vacancies)',
    title: {
      en: 'RRB JE (Junior Engineer, DMS, CMA & Chemical Supervisor)',
      hi: 'आरआरबी जेई (कनिष्ठ अभियंता, डीएमएस एवं सीएमए भर्ती)',
    },
    subtitle: {
      en: 'CEN 04/2026: 3,993 Vacancies (14 Aug – 13 Sep 2026) & CEN 03/2024: 7,951 Vacancies',
      hi: 'सीईएन 04/2026: 3,993 पद (14 अगस्त – 13 सितंबर 2026) एवं सीईएन 03/2024: 7,951 पद',
    },
    currentCEN: 'CEN No. 04/2026 (14 August – 13 September 2026) & CEN 03/2024 (7,951 Vacancies)',
    officialNotificationUrl: 'https://rrbapply.gov.in',
    eligibility: {
      ageRange: '18-36 Years (as per CEN notification with age relaxation)',
      qualifications: [
        {
          en: 'Junior Engineer: 3-year Diploma in Engineering OR B.E./B.Tech in relevant engineering discipline (Civil, Mechanical, Electrical, Electronics, S&T, CS/IT) from a recognized University/Institute',
          hi: 'कनिष्ठ अभियंता: मान्यता प्राप्त संस्थान से संबंधित इंजीनियरिंग शाखा में 3 वर्षीय डिप्लोमा अथवा बी.ई./बी.टेक डिग्री',
        },
        {
          en: 'DMS (Depot Material Superintendent): 3-year Diploma in Engineering in any discipline',
          hi: 'डीएमएस: किसी भी इंजीनियरिंग शाखा में 3 वर्षीय डिप्लोमा',
        },
        {
          en: 'CMA (Chemical & Metallurgical Assistant): Bachelor’s Degree in Science (Physics & Chemistry) with minimum 45% marks',
          hi: 'सीएमए: भौतिकी एवं रसायन विज्ञान में न्यूनतम 45% अंकों के साथ बीएससी डिग्री',
        },
      ],
      feeGeneral: '₹500 (₹400 refundable after CBT-1)',
      feeReserved: '₹250 (Fully refundable for SC/ST/ESM/Female/PwBD)',
    },
    stages: [
      {
        id: 'cbt-1',
        name: { en: 'CBT-1 (Screening Test - Non-Technical Foundation: 100 Qs / 90 Mins)', hi: 'सीबीटी-1 (स्क्रीनिंग परीक्षा - गैर-तकनीकी आधार: 100 प्रश्न / 90 मिनट)' },
        questions: 100,
        marks: 100,
        durationMinutes: 90,
        negativeMarking: '1/3rd mark deducted per wrong answer',
        sections: [
          { subject: 'Mathematics', bilingualSubject: { en: 'Mathematics', hi: 'गणित' }, questions: 30, marks: 30 },
          { subject: 'General Intelligence & Reasoning', bilingualSubject: { en: 'General Intelligence & Reasoning', hi: 'सामान्य बुद्धिमत्ता एवं तर्कशक्ति' }, questions: 25, marks: 25 },
          { subject: 'General Science', bilingualSubject: { en: 'General Science (Physics & Chemistry up to 10th std)', hi: 'सामान्य विज्ञान (10वीं स्तर भौतिकी व रसायन)' }, questions: 30, marks: 30 },
          { subject: 'General Awareness', bilingualSubject: { en: 'General Awareness', hi: 'सामान्य जागरूकता' }, questions: 15, marks: 15 },
        ],
      },
      {
        id: 'cbt-2',
        name: { en: 'CBT-2 (Main Examination - Technical Discipline Core: 150 Qs / 120 Mins)', hi: 'सीबीटी-2 (मुख्य परीक्षा - तकनीकी विषय कोर: 150 प्रश्न / 120 मिनट)' },
        questions: 150,
        marks: 150,
        durationMinutes: 120,
        negativeMarking: '1/3rd mark deducted per wrong answer (Virtual Calculator Enabled)',
        sections: [
          { subject: 'Technical Engineering', bilingualSubject: { en: 'Technical Abilities (Discipline Specific Engineering)', hi: 'तकनीकी क्षमताएं (संबंधित इंजीनियरिंग शाखा)' }, questions: 100, marks: 100 },
          { subject: 'General Awareness', bilingualSubject: { en: 'General Awareness', hi: 'सामान्य जागरूकता' }, questions: 15, marks: 15 },
          { subject: 'Physics & Chemistry', bilingualSubject: { en: 'Physics & Chemistry (Allied)', hi: 'भौतिकी एवं रसायन विज्ञान' }, questions: 15, marks: 15 },
          { subject: 'Basics of Computers and Applications', bilingualSubject: { en: 'Basics of Computers and Applications', hi: 'कंप्यूटर अनुप्रयोगों के मूल तत्व' }, questions: 10, marks: 10 },
          { subject: 'Basics of Environment and Pollution Control', bilingualSubject: { en: 'Basics of Environment and Pollution Control', hi: 'पर्यावरण एवं प्रदूषण नियंत्रण' }, questions: 10, marks: 10 },
        ],
      },
      {
        id: 'dv-medical',
        name: { en: 'Document Verification & Medical Examination (A-3 Medical Standard)', hi: 'दस्तावेज़ सत्यापन एवं चिकित्सा परीक्षण (A-3 मानक)' },
        questions: 0,
        marks: 0,
        durationMinutes: 0,
        negativeMarking: 'Qualifying',
        sections: [],
      },
    ],
    selectionProcess: [
      { en: '1st Stage Computer Based Test (CBT-1) purely screening in nature', hi: 'प्रथम चरण सीबीटी-1 केवल स्क्रीनिंग परीक्षा के रूप में' },
      { en: '2nd Stage Computer Based Test (CBT-2) with 100 technical questions based on diploma syllabus', hi: 'द्वितीय चरण सीबीटी-2 जिसमें 100 तकनीकी प्रश्न संबंधित डिप्लोमा पाठ्यक्रम पर आधारित होते हैं' },
      { en: 'Shortlisting for Document Verification based on normalized marks in CBT-2', hi: 'सीबीटी-2 के सामान्यीकृत अंकों के आधार पर डीवी हेतु चयन' },
      { en: 'Rigorous Medical Examination by Railway Hospitals (A-3 for most JE posts)', hi: 'रेलवे चिकित्सालयों द्वारा कड़े चिकित्सा मानकों का परीक्षण' },
    ],
    posts: [],
  },

  // =========================================================================
  // 6. RRB PARAMEDICAL STAFF
  // =========================================================================
  'rrb-paramedical': {
    id: 'rrb-paramedical',
    code: 'CEN 05/2026 (Tentative) & CEN 04/2024 (1,376 Vacancies)',
    title: {
      en: 'RRB Paramedical Staff (Nursing Superintendent, Pharmacist, Lab Tech)',
      hi: 'आरआरबी पैरामेडिकल स्टाफ (नर्सिंग सुपरिटेंडेंट, फार्मासिस्ट, लैब तकनीशियन)',
    },
    subtitle: {
      en: 'CEN 05/2026 (Released August 2026 Cycle) & CEN 04/2024 Railway Medical Services',
      hi: 'सीईएन 05/2026 (अगस्त 2026 चक्र) एवं सीईएन 04/2024 रेलवे स्वास्थ्य सेवा भर्ती',
    },
    currentCEN: 'CEN No. 05/2026 (Tentative August 2026 cycle) & CEN 04/2024',
    officialNotificationUrl: 'https://rrbapply.gov.in',
    eligibility: {
      ageRange: '20-40 Years (Nursing) | 20-35 Years (Pharmacist) | 18-33 Years (Lab Tech) + Relaxations',
      qualifications: [
        {
          en: 'Nursing Superintendent: B.Sc Nursing OR GNM with Nursing Council Registration',
          hi: 'नर्सिंग सुपरिटेंडेंट: बीएससी नर्सिंग अथवा जीएनएम नर्सिंग काउंसिल पंजीकरण के साथ',
        },
        {
          en: 'Pharmacist Grade III: 10+2 in Science with Diploma in Pharmacy (D.Pharm) or B.Pharm with Pharmacy Council registration',
          hi: 'फर्मासिस्ट: 12वीं विज्ञान + डी.फार्मा अथवा बी.फार्मा एवं फार्मेसी काउंसिल पंजीकरण',
        },
      ],
      feeGeneral: '₹500 (₹400 refundable)',
      feeReserved: '₹250 (Fully refundable)',
    },
    stages: [
      {
        id: 'cbt',
        name: { en: 'Single Stage CBT (100 Qs / 90 Mins: 70 Professional Knowledge + 30 Non-Tech)', hi: 'एकल सीबीटी (100 प्रश्न / 90 मिनट: 70 व्यावसायिक ज्ञान + 30 गैर-तकनीकी)' },
        questions: 100,
        marks: 100,
        durationMinutes: 90,
        negativeMarking: '1/3rd mark deducted per wrong answer',
        sections: [
          { subject: 'Professional Ability', bilingualSubject: { en: 'Professional Knowledge (Nursing / Pharmacy / Lab Technology)', hi: 'व्यावसायिक ज्ञान (नर्सिंग / फार्मेसी / लैब)' }, questions: 70, marks: 70 },
          { subject: 'General Science', bilingualSubject: { en: 'General Science', hi: 'सामान्य विज्ञान' }, questions: 10, marks: 10 },
          { subject: 'General Awareness', bilingualSubject: { en: 'General Awareness', hi: 'सामान्य जागरूकता' }, questions: 10, marks: 10 },
          { subject: 'General Arithmetic & Reasoning', bilingualSubject: { en: 'General Arithmetic, Intelligence & Reasoning', hi: 'अंकगणित एवं तर्कशक्ति' }, questions: 10, marks: 10 },
        ],
      },
      {
        id: 'dv-medical',
        name: { en: 'Document Verification & Medical (C-1 / C-2 Standard)', hi: 'दस्तावेज़ सत्यापन एवं चिकित्सा परीक्षण' },
        questions: 0,
        marks: 0,
        durationMinutes: 0,
        negativeMarking: 'Qualifying',
        sections: [],
      },
    ],
    selectionProcess: [
      { en: 'Single Stage CBT with 70% weight on core medical curriculum', hi: 'कोर मेडिकल विषय पर 70% भार सहित एकल सीबीटी' },
      { en: 'Document Verification of original certificates and state council registrations', hi: 'मूल प्रमाण पत्रों एवं काउंसिल पंजीकरण का सत्यापन' },
      { en: 'Hospital Medical Fitness Standard (C-1 / C-2)', hi: 'चिकित्सालय फिटनेस मानक परीक्षण' },
    ],
    posts: [],
  },

  // =========================================================================
  // 7. RRB STATION MASTER (SPECIAL GRADUATE DRIVE)
  // =========================================================================
  'rrb-station-master': {
    id: 'rrb-station-master',
    code: 'CEN 08/2026 (27 Oct – 25 Nov 2026) & CEN 06/2026',
    title: {
      en: 'RRB Station Master (Special Graduate Drive — Pay Level 6)',
      hi: 'आरआरबी स्टेशन मास्टर (विशेष स्नातक भर्ती अभियान — पे लेवल 6)',
    },
    subtitle: {
      en: 'CEN No. 08/2026: Application Window 27 October – 25 November 2026 Across DFCs & Mainline Hubs',
      hi: 'सीईएन सं. 08/2026: आवेदन विंडो 27 अक्टूबर – 25 नवंबर 2026 समर्पित माल गलियारों एवं मुख्य लाइनों हेतु',
    },
    currentCEN: 'CEN No. 08/2026 (27 October – 25 November 2026)',
    officialNotificationUrl: 'https://rrbapply.gov.in',
    eligibility: {
      ageRange: '18-33 Years (Reckoned as on 01.01.2027) + Relaxations',
      qualifications: [
        {
          en: 'Graduation Degree from a recognized University or equivalent. Rigorous vigilance clearance and cognitive aptitude',
          hi: 'मान्यता प्राप्त विश्वविद्यालय से स्नातक उपाधि। सतर्कता मंजूरी एवं संज्ञानात्मक योग्यता',
        },
      ],
      feeGeneral: '₹500 (₹400 refundable after CBT-1)',
      feeReserved: '₹250 (Fully refundable)',
    },
    stages: [
      {
        id: 'cbt-1',
        name: { en: 'CBT-1 Screening (100 Qs / 90 Mins)', hi: 'सीबीटी-1 स्क्रीनिंग (100 प्रश्न / 90 मिनट)' },
        questions: 100,
        marks: 100,
        durationMinutes: 90,
        negativeMarking: '1/3rd mark deducted per wrong answer',
        sections: [
          { subject: 'General Awareness', bilingualSubject: { en: 'General Awareness', hi: 'सामान्य जागरूकता' }, questions: 40, marks: 40 },
          { subject: 'Mathematics', bilingualSubject: { en: 'Mathematics', hi: 'गणित' }, questions: 30, marks: 30 },
          { subject: 'General Intelligence & Reasoning', bilingualSubject: { en: 'General Intelligence & Reasoning', hi: 'तर्कशक्ति' }, questions: 30, marks: 30 },
        ],
      },
      {
        id: 'cbt-2',
        name: { en: 'CBT-2 Level 6 Core (120 Qs / 90 Mins)', hi: 'सीबीटी-2 लेवल 6 कोर (120 प्रश्न / 90 मिनट)' },
        questions: 120,
        marks: 120,
        durationMinutes: 90,
        negativeMarking: '1/3rd mark deducted per wrong answer',
        sections: [
          { subject: 'General Awareness', bilingualSubject: { en: 'General Awareness', hi: 'सामान्य जागरूकता' }, questions: 50, marks: 50 },
          { subject: 'Mathematics', bilingualSubject: { en: 'Mathematics', hi: 'गणित' }, questions: 35, marks: 35 },
          { subject: 'General Intelligence & Reasoning', bilingualSubject: { en: 'General Intelligence & Reasoning', hi: 'तर्कशक्ति' }, questions: 35, marks: 35 },
        ],
      },
      {
        id: 'cbat',
        name: { en: 'CBAT (RDSO Psychometric Aptitude Test — 5 Batteries, Min 42 T-score)', hi: 'सीबीएटी (आरडीएसओ साइको टेस्ट — 5 बैटरियां, न्यूनतम 42 T-स्कोर)' },
        questions: 0,
        marks: 30,
        durationMinutes: 70,
        negativeMarking: 'No negative marking. Final Merit = 70% CBT-2 + 30% CBAT',
        sections: [],
      },
      {
        id: 'dv-medical',
        name: { en: 'Document Verification & A-2 Medical Standard', hi: 'दस्तावेज़ सत्यापन एवं A-2 मेडिकल मानक' },
        questions: 0,
        marks: 0,
        durationMinutes: 0,
        negativeMarking: 'A-2 Medical (Distance Vision 6/9, 6/9 without or with glasses)',
        sections: [],
      },
    ],
    selectionProcess: [
      { en: 'CBT-1 Screening (100 Qs)', hi: 'सीबीटी-1 स्क्रीनिंग (100 प्रश्न)' },
      { en: 'CBT-2 Level 6 Examination (120 Qs)', hi: 'सीबीटी-2 लेवल 6 मुख्य परीक्षा (120 प्रश्न)' },
      { en: 'RDSO Computer Based Aptitude Test (CBAT Psycho with 70:30 composite merit)', hi: 'आरडीएसओ साइको टेस्ट (70:30 मेरिट वेटेज)' },
      { en: 'A-2 Medical Fitness & Document Verification', hi: 'A-2 चिकित्सा परीक्षण एवं दस्तावेज़ सत्यापन' },
    ],
    posts: [],
  },

  // =========================================================================
  // 8. RRB GROUP D / LEVEL-1
  // =========================================================================
  'rrb-group-d': {
    id: 'rrb-group-d',
    code: 'CEN 09/2026 (Tentative) & CEN 08/2024 / CEN 09/2025',
    title: {
      en: 'RRB Group D / Level-1 (Track Maintainer, Pointsman & Workshops)',
      hi: 'आरआरबी ग्रुप डी / लेवल-1 (ट्रैक मेंटेनर, प्वॉइंट्समैन एवं वर्कशॉप्स)',
    },
    subtitle: {
      en: 'CEN 09/2026 (Expected Nov–Dec 2026) & CEN 08/2024 / 09/2025 7th CPC Level 1 Posts',
      hi: 'सीईएन 09/2026 (संभावित नवंबर-दिसंबर 2026) एवं सीईएन 08/2024 व 09/2025 7वें वेतन आयोग के लेवल 1 पद',
    },
    currentCEN: 'CEN No. 09/2026 (Tentative Expected Nov–Dec 2026) & CEN 08/2024',
    officialNotificationUrl: 'https://rrbapply.gov.in',
    eligibility: {
      ageRange: '18-33 Years (Normal) / Up to 36 with temporary relaxation + category benefits',
      qualifications: [
        {
          en: '10th Pass (OR) ITI from institutions recognized by NCVT/SCVT (or) National Apprenticeship Certificate (NAC) granted by NCVT',
          hi: '10वीं कक्षा उत्तीर्ण (या) NCVT/SCVT मान्यता प्राप्त संस्थानों से ITI (या) NCVT द्वारा प्रदत्त राष्ट्रीय शिक्षुता प्रमाणपत्र (NAC)',
        },
      ],
      feeGeneral: '₹500 (₹400 refunded after CBT)',
      feeReserved: '₹250 (Full refund for SC/ST/ESM/Female/PwBD)',
    },
    stages: [
      {
        id: 'cbt',
        name: { en: 'Computer Based Test (CBT - Single Stage: 100 Qs / 90 Mins)', hi: 'कंप्यूटर आधारित परीक्षा (CBT - एकल चरण: 100 प्रश्न / 90 मिनट)' },
        questions: 100,
        marks: 100,
        durationMinutes: 90,
        negativeMarking: '1/3rd mark deducted per wrong answer',
        sections: [
          { subject: 'General Science', bilingualSubject: { en: 'General Science (10th Standard Physics, Chemistry, Life Sciences - High Weightage 25 Marks)', hi: 'सामान्य विज्ञान (10वीं स्तर भौतिकी, रसायन, जीव विज्ञान - उच्च भार 25 अंक)' }, questions: 25, marks: 25 },
          { subject: 'Mathematics', bilingualSubject: { en: 'Mathematics', hi: 'गणित (संख्या पद्धति, प्रतिशत, कार्य-समय आदि)' }, questions: 25, marks: 25 },
          { subject: 'General Intelligence & Reasoning', bilingualSubject: { en: 'General Intelligence & Reasoning', hi: 'सामान्य बुद्धिमत्ता एवं तर्कशक्ति' }, questions: 30, marks: 30 },
          { subject: 'General Awareness', bilingualSubject: { en: 'General Awareness & Current Affairs', hi: 'सामान्य जागरूकता एवं समसामयिकी' }, questions: 20, marks: 20 },
        ],
      },
      {
        id: 'pet',
        name: { en: 'Physical Efficiency Test (PET - RFID Chip Timed)', hi: 'शारीरिक दक्षता परीक्षण (PET - आरएफआईडी चिप सक्षम)' },
        questions: 0,
        marks: 0,
        durationMinutes: 10,
        negativeMarking: 'Mandatory Qualifying: Male 1000m in 4m 15s + 35kg 100m; Female 1000m in 5m 40s + 20kg 100m',
        sections: [],
      },
      {
        id: 'dv-medical',
        name: { en: 'Document Verification & Medical Examination', hi: 'दस्तावेज़ सत्यापन एवं चिकित्सा परीक्षण' },
        questions: 0,
        marks: 0,
        durationMinutes: 0,
        negativeMarking: 'Qualifying',
        sections: [],
      },
    ],
    selectionProcess: [
      { en: 'Single Stage Computer Based Test (CBT) covering 100 questions across 4 subjects', hi: '100 प्रश्नों और 4 विषयों पर आधारित एकल चरण सीबीटी परीक्षा' },
      { en: 'Physical Efficiency Test (PET): 1000m running + 35kg/20kg weight carrying test (Qualifying)', hi: 'शारीरिक दक्षता परीक्षा (PET): 1000 मीटर दौड़ + वजन वहन परीक्षा' },
      { en: 'Document Verification (DV) in 1:1 ratio based on CBT normalized marks', hi: 'सीबीटी मेरिट के आधार पर दस्तावेज़ सत्यापन' },
      { en: 'Medical Examination by Railway Medical team as per A-2, B-1, B-2, C-1 categories', hi: 'रेलवे चिकित्सा टीम द्वारा चिकित्सा मानकों का विस्तृत परीक्षण' },
    ],
    posts: [],
  },

  // =========================================================================
  // 9. RRB MINISTERIAL & ISOLATED CATEGORIES
  // =========================================================================
  'rrb-ministerial': {
    id: 'rrb-ministerial',
    code: 'CEN 10/2026 (Tentative) & CEN 07/2024',
    title: {
      en: 'RRB Ministerial & Isolated Categories (Stenographer, Law Assistant, Translator)',
      hi: 'आरआरबी मिनिस्ट्रियल एवं आइसोलेटेड श्रेणियां (आशुलिपिक, विधि सहायक, अनुवादक)',
    },
    subtitle: {
      en: 'CEN No. 10/2026 (Expected Late 2026 Cycle) Specialized Headquarters Cadres',
      hi: 'सीईएन सं. 10/2026 (संभावित 2026 अंत) विशिष्ट जोनल मुख्यालय संवर्ग',
    },
    currentCEN: 'CEN No. 10/2026 (Tentative expected late 2026 cycle)',
    officialNotificationUrl: 'https://rrbapply.gov.in',
    eligibility: {
      ageRange: '18-40 Years (depending on cadre)',
      qualifications: [
        {
          en: 'Junior Stenographer: 12th pass with 80 WPM shorthand speed in English or Hindi',
          hi: 'जूनियर स्टेनोग्राफर: 12वीं उत्तीर्ण + 80 शब्द प्रति मिनट अंग्रेजी अथवा हिंदी आशुलिपि गति',
        },
        {
          en: 'Chief Law Assistant: Bachelor Degree in Law (LL.B) with at least 3 years standing as an advocate',
          hi: 'चीफ लॉ असिस्टेंट: विधि स्नातक (LL.B) + न्यूनतम 3 वर्ष का वकालत अनुभव',
        },
        {
          en: 'Junior Translator (Hindi): Master’s degree in Hindi with English or vice versa',
          hi: 'कनिष्ठ अनुवादक (हिंदी): हिंदी/अंग्रेजी में स्नातकोत्तर डिग्री',
        },
      ],
      feeGeneral: '₹500 (₹400 refundable)',
      feeReserved: '₹250 (Fully refundable)',
    },
    stages: [
      {
        id: 'cbt',
        name: { en: 'Single Stage CBT (100 Qs / 90 Mins)', hi: 'एकल सीबीटी (100 प्रश्न / 90 मिनट)' },
        questions: 100,
        marks: 100,
        durationMinutes: 90,
        negativeMarking: '1/3rd mark deducted per wrong answer',
        sections: [
          { subject: 'Professional Domain', bilingualSubject: { en: 'Professional Subject / Language / Law', hi: 'व्यावसायिक विषय / भाषा / विधि' }, questions: 50, marks: 50 },
          { subject: 'General Awareness', bilingualSubject: { en: 'General Awareness', hi: 'सामान्य जागरूकता' }, questions: 15, marks: 15 },
          { subject: 'General Intelligence & Reasoning', bilingualSubject: { en: 'General Intelligence & Reasoning', hi: 'तर्कशक्ति' }, questions: 15, marks: 15 },
          { subject: 'Mathematics', bilingualSubject: { en: 'Mathematics', hi: 'गणित' }, questions: 10, marks: 10 },
          { subject: 'General Science', bilingualSubject: { en: 'General Science', hi: 'सामान्य विज्ञान' }, questions: 10, marks: 10 },
        ],
      },
      {
        id: 'skill-test',
        name: { en: 'Skill Test (Stenography / Translation / Performance Test)', hi: 'कौशल परीक्षा (आशुलिपि / अनुवाद / प्रदर्शन परीक्षण)' },
        questions: 0,
        marks: 0,
        durationMinutes: 30,
        negativeMarking: 'Qualifying: 80 WPM shorthand with transcription transcription errors penalty',
        sections: [],
      },
      {
        id: 'dv-medical',
        name: { en: 'Document Verification & Medical Standard (C-1 / C-2)', hi: 'दस्तावेज़ सत्यापन एवं चिकित्सा परीक्षण' },
        questions: 0,
        marks: 0,
        durationMinutes: 0,
        negativeMarking: 'Qualifying',
        sections: [],
      },
    ],
    selectionProcess: [
      { en: 'Single Stage CBT', hi: 'एकल सीबीटी परीक्षा' },
      { en: 'Cadre-Specific Skill Test (Stenography Speed Test / Translation Exam)', hi: 'संवर्ग विशिष्ट कौशल परीक्षा' },
      { en: 'Document Verification & Medical Fitness', hi: 'दस्तावेज़ सत्यापन एवं चिकित्सा परीक्षण' },
    ],
    posts: [],
  },

  // =========================================================================
  // 10. RRB RPF (SUB-INSPECTOR & CONSTABLE)
  // =========================================================================
  'rrb-rpf': {
    id: 'rrb-rpf',
    code: 'CEN RPF 01/2024 (SI) & CEN RPF 02/2024 (Constable) — 4,660 Vacancies',
    title: {
      en: 'RRB RPF (Railway Protection Force — Sub-Inspector & Constable)',
      hi: 'आरआरबी आरपीएफ (रेलवे सुरक्षा बल — सब-इंस्पेक्टर एवं कांस्टेबल)',
    },
    subtitle: {
      en: 'CEN RPF 01/2024: 452 SI Posts (Level 6) & CEN RPF 02/2024: 4,208 Constable Posts (Level 3)',
      hi: 'सीईएन आरपीएफ 01/2024: 452 एसआई पद (लेवल 6) एवं 02/2024: 4,208 कांस्टेबल पद (लेवल 3)',
    },
    currentCEN: 'CEN RPF 01/2024 & CEN RPF 02/2024 (4,660 Vacancies)',
    officialNotificationUrl: 'https://rrbapply.gov.in',
    eligibility: {
      ageRange: 'Constable: 18-28 Years | Sub-Inspector: 20-28 Years (+ 3 yrs COVID relaxation + Category benefits)',
      qualifications: [
        {
          en: 'Sub-Inspector (SI): Graduate Degree from a recognized University in any stream',
          hi: 'सब-इंस्पेक्टर: किसी भी विषय में मान्यता प्राप्त विश्वविद्यालय से स्नातक डिग्री',
        },
        {
          en: 'Constable: 10th pass / Matriculation from a recognized educational Board',
          hi: 'कांस्टेबल: मान्यता प्राप्त शिक्षा बोर्ड से 10वीं कक्षा (मैट्रिक) उत्तीर्ण',
        },
      ],
      feeGeneral: '₹500 (₹400 refunded after CBT attendance)',
      feeReserved: '₹250 (Full refund for SC/ST/ESM/Female/EBC)',
    },
    stages: [
      {
        id: 'cbt',
        name: { en: 'Computer Based Test (CBT: 120 Qs / 90 Mins — 120 Marks)', hi: 'कंप्यूटर आधारित परीक्षा (CBT: 120 प्रश्न / 90 मिनट — 120 अंक)' },
        questions: 120,
        marks: 120,
        durationMinutes: 90,
        negativeMarking: '1/3rd mark deducted per wrong answer',
        sections: [
          { subject: 'General Awareness', bilingualSubject: { en: 'General Awareness (History, Constitution, Geography, Current Affairs, Science)', hi: 'सामान्य जागरूकता (इतिहास, संविधान, भूगोल, करंट अफेयर्स, विज्ञान)' }, questions: 50, marks: 50 },
          { subject: 'Arithmetic', bilingualSubject: { en: 'Arithmetic (Number Systems, Percentages, SI/CI, Profit-Loss, Work-Time)', hi: 'अंकगणित' }, questions: 35, marks: 35 },
          { subject: 'General Intelligence & Reasoning', bilingualSubject: { en: 'General Intelligence & Reasoning (Analogies, Coding, Syllogisms, Spatial)', hi: 'सामान्य बुद्धिमत्ता एवं तर्कशक्ति' }, questions: 35, marks: 35 },
        ],
      },
      {
        id: 'pet-pmt',
        name: { en: 'Physical Efficiency Test (PET) & Physical Measurement Test (PMT)', hi: 'शारीरिक दक्षता परीक्षण (PET) एवं शारीरिक मापन परीक्षण (PMT)' },
        questions: 0,
        marks: 0,
        durationMinutes: 20,
        negativeMarking: 'Qualifying: Male Constable 1600m in 5m 45s, Long Jump 14ft, High Jump 4ft; Female 800m in 3m 40s, LJ 9ft, HJ 3ft',
        sections: [],
      },
      {
        id: 'dv-medical',
        name: { en: 'Document Verification & Medical Standard (B-1 Category)', hi: 'दस्तावेज़ सत्यापन एवं चिकित्सा परीक्षण (B-1 श्रेणी)' },
        questions: 0,
        marks: 0,
        durationMinutes: 0,
        negativeMarking: 'Qualifying',
        sections: [],
      },
    ],
    selectionProcess: [
      { en: 'Single Stage CBT (120 Questions / 90 Mins)', hi: 'एकल सीबीटी परीक्षा (120 प्रश्न / 90 मिनट)' },
      { en: 'Physical Efficiency Test (PET) & Physical Measurement Test (PMT) (Qualifying)', hi: 'शारीरिक दक्षता परीक्षण (PET) एवं शारीरिक माप परीक्षण (PMT)' },
      { en: 'Document Verification (DV) in order of CBT merit', hi: 'सीबीटी मेरिट के आधार पर दस्तावेज़ सत्यापन' },
      { en: 'Medical Examination by Railway Doctors as per B-1 Medical Category', hi: 'B-1 मेडिकल श्रेणी के अनुसार विस्तृत रेलवे चिकित्सा परीक्षण' },
    ],
    posts: [],
  },
};
