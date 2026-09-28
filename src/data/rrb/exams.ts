import type { ExamConfig } from '../../types';

export const EXAMS_DATA: Record<string, ExamConfig> = {
  'rrb-ntpc': {
    id: 'rrb-ntpc',
    code: 'CEN 05/2024 & CEN 06/2024',
    title: {
      en: 'RRB NTPC (Non-Technical Popular Categories)',
      hi: 'आरआरबी एनटीपीसी (गैर-तकनीकी लोकप्रिय श्रेणियां)',
    },
    subtitle: {
      en: 'Undergraduate (Level 2 & 3) & Graduate (Level 5 & 6) Centralized Employment Notification',
      hi: 'स्नातक (लेवल 5 एवं 6) एवं 12वीं उत्तीर्ण (लेवल 2 एवं 3) केंद्रीकृत रोजगार अधिसूचना',
    },
    currentCEN: 'CEN 05/2024 (Graduate) & CEN 06/2024 (Undergraduate)',
    officialNotificationUrl: 'https://indianrailways.gov.in/railwayboard/view_section.jsp?lang=0&id=0,4,1244',
    eligibility: {
      ageRange: '18-33 Years (Undergraduate) / 18-36 Years (Graduate) with applicable OBC/SC/ST/ESM relaxations',
      qualifications: [
        {
          en: 'Undergraduate Posts: 12th (+2 Stage) or equivalent with not less than 50% marks in aggregate for UR/OBC',
          hi: 'अंडरग्रेजुएट पद: 12वीं (+2 चरण) या समकक्ष परीक्षा में न्यूनतम 50% अंकों के साथ उत्तीर्ण',
        },
        {
          en: 'Graduate Posts: University Degree or its equivalent from a recognized University',
          hi: 'ग्रेजुएट पद: किसी मान्यता प्राप्त विश्वविद्यालय से स्नातक उपाधि (डिग्री) या समकक्ष',
        },
      ],
      feeGeneral: '₹500 (₹400 refundable on appearing in CBT-1)',
      feeReserved: '₹250 (Fully refundable on appearing in CBT-1 for SC/ST/ESM/Female/PwBD/EBC)',
    },
    stages: [
      {
        id: 'cbt-1',
        name: { en: 'CBT-1 (Screening Test - Common for All Posts)', hi: 'सीबीटी-1 (स्क्रीनिंग परीक्षा - सभी पदों के लिए सामान्य)' },
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
            bilingualSubject: { en: 'Mathematics', hi: 'गणित (अंकगणित व बीजगणित)' },
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
        name: { en: 'CBT-2 (Main Examination - Separate for Each Pay Level)', hi: 'सीबीटी-2 (मुख्य परीक्षा - प्रत्येक पे लेवल हेतु पृथक)' },
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
          en: 'CBAT / Typing Skill Test (Post Specific)',
          hi: 'सीबीएटी (साइको) / टाइपिंग कौशल परीक्षा (पद अनुसार)',
        },
        questions: 0,
        marks: 0,
        durationMinutes: 10,
        negativeMarking: 'Qualifying in nature; T-score of 42 minimum per battery for CBAT',
        sections: [],
      },
      {
        id: 'dv-medical',
        name: {
          en: 'Document Verification & Medical Examination',
          hi: 'दस्तावेज़ सत्यापन एवं चिकित्सा परीक्षण',
        },
        questions: 0,
        marks: 0,
        durationMinutes: 0,
        negativeMarking: 'Qualifying',
        sections: [],
      },
    ],
    selectionProcess: [
      {
        en: '1st Stage Computer Based Test (CBT-1) common for all posts',
        hi: 'प्रथम चरण कंप्यूटर आधारित परीक्षा (CBT-1) सभी पदों के लिए',
      },
      {
        en: '2nd Stage Computer Based Test (CBT-2) separate for each 7th CPC Pay Level (Level 2, 3, 5, 6)',
        hi: 'द्वितीय चरण सीबीटी-2 प्रत्येक पे लेवल (लेवल 2, 3, 5, 6) हेतु पृथक',
      },
      {
        en: 'Computer Based Aptitude Test (CBAT) for Station Master and Traffic Assistant',
        hi: 'कंप्यूटर आधारित योग्यता परीक्षण (CBAT साइको) स्टेशन मास्टर एवं ट्रैफिक असिस्टेंट हेतु',
      },
      {
        en: 'Typing Skill Test (TST) for Junior Clerk cum Typist, Accounts Clerk, Senior Clerk, Junior Account Assistant',
        hi: 'टाइपिंग स्किल टेस्ट: जूनियर क्लर्क, अकाउंट्स क्लर्क, सीनियर क्लर्क, जूनियर अकाउंट असिस्टेंट हेतु',
      },
      {
        en: 'Document Verification (DV) based on CBT-2 & Skill Test merit',
        hi: 'सीबीटी-2 एवं कौशल परीक्षा की मेरिट के आधार पर दस्तावेज़ सत्यापन',
      },
      {
        en: 'Medical Examination by Railway Medical Authorities as per post classification',
        hi: 'रेलवे चिकित्सा प्राधिकरण द्वारा पदवार निर्धारित चिकित्सा श्रेणी का परीक्षण',
      },
    ],
    posts: [],
  },

  'rrb-group-d': {
    id: 'rrb-group-d',
    code: 'CEN RRC 01/2019 & CEN 08/2024',
    title: {
      en: 'RRB Group D / Level-1 (Track Maintainer, Pointsman & Workshops)',
      hi: 'आरआरबी ग्रुप डी / लेवल-1 (ट्रैक मेंटेनर, प्वॉइंट्समैन एवं वर्कशॉप्स)',
    },
    subtitle: {
      en: '7th CPC Pay Level 1 Posts in Various Technical & Operational Departments of Indian Railways',
      hi: 'भारतीय रेल के विभिन्न तकनीकी एवं परिचालन विभागों में 7वें वेतन आयोग के लेवल 1 पद',
    },
    currentCEN: 'CEN RRC 01/2019 / Level-1 2024-2025 Calendar',
    officialNotificationUrl: 'https://indianrailways.gov.in/railwayboard/view_section.jsp?lang=0&id=0,4,1244',
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
        name: { en: 'Computer Based Test (CBT - Single Stage)', hi: 'कंप्यूटर आधारित परीक्षा (CBT - एकल चरण)' },
        questions: 100,
        marks: 100,
        durationMinutes: 90,
        negativeMarking: '1/3rd mark deducted per wrong answer',
        sections: [
          {
            subject: 'General Science',
            bilingualSubject: { en: 'General Science (10th Standard Physics, Chemistry, Life Sciences)', hi: 'सामान्य विज्ञान (10वीं स्तर भौतिकी, रसायन, जीव विज्ञान)' },
            questions: 25,
            marks: 25,
          },
          {
            subject: 'Mathematics',
            bilingualSubject: { en: 'Mathematics', hi: 'गणित (संख्या पद्धति, प्रतिशत, कार्य-समय आदि)' },
            questions: 25,
            marks: 25,
          },
          {
            subject: 'General Intelligence & Reasoning',
            bilingualSubject: { en: 'General Intelligence & Reasoning', hi: 'सामान्य बुद्धिमत्ता एवं तर्कशक्ति' },
            questions: 30,
            marks: 30,
          },
          {
            subject: 'General Awareness',
            bilingualSubject: { en: 'General Awareness & Current Affairs', hi: 'सामान्य जागरूकता एवं समसामयिकी' },
            questions: 20,
            marks: 20,
          },
        ],
      },
      {
        id: 'pet',
        name: { en: 'Physical Efficiency Test (PET)', hi: 'शारीरिक दक्षता परीक्षण (PET)' },
        questions: 0,
        marks: 0,
        durationMinutes: 10,
        negativeMarking: 'Mandatory Qualifying; Strictly timed',
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
        en: 'Single Stage Computer Based Test (CBT) covering 100 questions across 4 subjects',
        hi: '100 प्रश्नों और 4 विषयों पर आधारित एकल चरण सीबीटी परीक्षा',
      },
      {
        en: 'Physical Efficiency Test (PET): 1000m running + 35kg/20kg weight carrying test (Qualifying)',
        hi: 'शारीरिक दक्षता परीक्षा (PET): 1000 मीटर दौड़ + 35 किग्रा/20 किग्रा वजन ढोने की परीक्षा',
      },
      {
        en: 'Document Verification (DV) for candidates qualifying PET in order of CBT merit',
        hi: 'सीबीटी मेरिट एवं पीईटी उत्तीर्ण अभ्यर्थियों के लिए दस्तावेज़ सत्यापन',
      },
      {
        en: 'Medical Examination by Railway Medical team as per A-2, B-1, B-2, C-1 categories',
        hi: 'रेलवे चिकित्सा टीम द्वारा चिकित्सा मानकों का विस्तृत परीक्षण',
      },
    ],
    posts: [],
  },

  'rrb-je': {
    id: 'rrb-je',
    code: 'CEN 03/2024',
    title: {
      en: 'RRB JE (Junior Engineer, DMS, CMA & Chemical Supervisor)',
      hi: 'आरआरबी जेई (कनिष्ठ अभियंता, डीएमएस एवं सीएमए भर्ती)',
    },
    subtitle: {
      en: 'Centralized Employment Notification for Technical Supervisory Cadres in Indian Railways',
      hi: 'भारतीय रेल के तकनीकी पर्यवेक्षी संवर्गों हेतु केंद्रीकृत रोजगार अधिसूचना',
    },
    currentCEN: 'CEN 03/2024',
    officialNotificationUrl: 'https://indianrailways.gov.in/railwayboard/view_section.jsp?lang=0&id=0,4,1244',
    eligibility: {
      ageRange: '18-36 Years (as per CEN 03/2024 with 3-year COVID age relaxation)',
      qualifications: [
        {
          en: 'Junior Engineer: 3-year Diploma in Engineering or B.E./B.Tech in relevant engineering discipline from a recognized University/Institute',
          hi: 'कनिष्ठ अभियंता: मान्यता प्राप्त संस्थान से संबंधित इंजीनियरिंग शाखा में 3 वर्षीय डिप्लोमा या बी.ई./बी.टेक डिग्री',
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
        name: { en: 'CBT-1 (Screening Test - Non-Technical Foundation)', hi: 'सीबीटी-1 (स्क्रीनिंग परीक्षा - गैर-तकनीकी आधार)' },
        questions: 100,
        marks: 100,
        durationMinutes: 90,
        negativeMarking: '1/3rd mark deducted per wrong answer',
        sections: [
          {
            subject: 'Mathematics',
            bilingualSubject: { en: 'Mathematics', hi: 'गणित' },
            questions: 30,
            marks: 30,
          },
          {
            subject: 'General Intelligence & Reasoning',
            bilingualSubject: { en: 'General Intelligence & Reasoning', hi: 'सामान्य बुद्धिमत्ता एवं तर्कशक्ति' },
            questions: 25,
            marks: 25,
          },
          {
            subject: 'General Awareness',
            bilingualSubject: { en: 'General Awareness', hi: 'सामान्य जागरूकता' },
            questions: 15,
            marks: 15,
          },
          {
            subject: 'General Science',
            bilingualSubject: { en: 'General Science (Physics & Chemistry up to 10th std)', hi: 'सामान्य विज्ञान (10वीं स्तर भौतिकी व रसायन)' },
            questions: 30,
            marks: 30,
          },
        ],
      },
      {
        id: 'cbt-2',
        name: { en: 'CBT-2 (Main Examination - Technical Discipline Core)', hi: 'सीबीटी-2 (मुख्य परीक्षा - तकनीकी विषय कोर)' },
        questions: 150,
        marks: 150,
        durationMinutes: 120,
        negativeMarking: '1/3rd mark deducted per wrong answer',
        sections: [
          {
            subject: 'General Awareness',
            bilingualSubject: { en: 'General Awareness', hi: 'सामान्य जागरूकता' },
            questions: 15,
            marks: 15,
          },
          {
            subject: 'Physics & Chemistry',
            bilingualSubject: { en: 'Physics & Chemistry', hi: 'भौतिकी एवं रसायन विज्ञान' },
            questions: 15,
            marks: 15,
          },
          {
            subject: 'Basics of Computers and Applications',
            bilingualSubject: { en: 'Basics of Computers and Applications', hi: 'कंप्यूटर अनुप्रयोगों के मूल तत्व' },
            questions: 10,
            marks: 10,
          },
          {
            subject: 'Basics of Environment and Pollution Control',
            bilingualSubject: { en: 'Basics of Environment and Pollution Control', hi: 'पर्यावरण एवं प्रदूषण नियंत्रण के मूल तत्व' },
            questions: 10,
            marks: 10,
          },
          {
            subject: 'Technical Engineering',
            bilingualSubject: { en: 'Technical Abilities (Discipline Specific)', hi: 'तकनीकी क्षमताएं (संबंधित इंजीनियरिंग शाखा)' },
            questions: 100,
            marks: 100,
          },
        ],
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
        en: '1st Stage Computer Based Test (CBT-1) purely screening in nature',
        hi: 'प्रथम चरण सीबीटी-1 केवल स्क्रीनिंग परीक्षा के रूप में',
      },
      {
        en: '2nd Stage Computer Based Test (CBT-2) with 100 technical questions based on diploma syllabus',
        hi: 'द्वितीय चरण सीबीटी-2 जिसमें 100 तकनीकी प्रश्न संबंधित डिप्लोमा पाठ्यक्रम पर आधारित होते हैं',
      },
      {
        en: 'Shortlisting for Document Verification based on normalized marks in CBT-2',
        hi: 'सीबीटी-2 के सामान्यीकृत (नॉर्मलाइज्ड) अंकों के आधार पर डीवी हेतु चयन',
      },
      {
        en: 'Rigorous Medical Examination by Railway Hospitals (A-3 for most JE posts)',
        hi: 'रेलवे चिकित्सालयों द्वारा कड़े चिकित्सा मानकों का परीक्षण (अधिकांश जेई पदों हेतु A-3)',
      },
    ],
    posts: [],
  },
};
