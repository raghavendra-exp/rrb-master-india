import type { LiveNotification } from '../../types';

export const LIVE_NOTIFICATIONS: LiveNotification[] = [
  // =========================================================================
  // OFFICIAL CBT EXAM SCHEDULE & CITY INTIMATION ADVISORIES
  // =========================================================================
  {
    id: 'NOTIF-2026-CBT-DATES-SCHEDULE',
    title: {
      en: 'Official Examination Schedule: CBT-1 Dates Announced for RRB JE, ALP, Paramedical & NTPC',
      hi: 'आधिकारिक परीक्षा समय सारिणी: आरआरबी जेई, एएलपी, पैरामेडिकल एवं एनटीपीसी सीबीटी-1 तिथियां घोषित',
    },
    category: 'important',
    date: '2026-10-27',
    exam: 'ALL',
    officialPdfUrl: 'https://rrbapply.gov.in',
    rrbCode: 'Railway Recruitment Control Board (RRCB) / All 21 RRBs',
    summary: {
      en: 'Ministry of Railways has issued the synchronized Computer Based Test (CBT) dates across ongoing recruitment cycles: (1) RRB Junior Engineer (CEN 04/2026 & 03/2024): 27 and 28 October 2026; (2) RRB Assistant Loco Pilot (CEN 01/2026 & 01/2024): 03 to 05 November 2026; (3) RRB Paramedical Staff (CEN 05/2026 & 04/2024): 23 and 25 November 2026; (4) RRB NTPC Graduate & Undergraduate (CEN 06/2026 & 07/2026): Tentatively commencing from 4th week of December 2026.',
      hi: 'रेल मंत्रालय द्वारा जारी समकालिक सीबीटी परीक्षा तिथियां: (1) आरआरबी जेई (CEN 04/2026 व 03/2024): 27 व 28 अक्टूबर 2026; (2) आरआरबी एएलपी (CEN 01/2026 व 01/2024): 03 से 05 नवंबर 2026; (3) आरआरबी पैरामेडिकल (CEN 05/2026 व 04/2024): 23 व 25 नवंबर 2026; (4) आरआरबी एनटीपीसी स्नातक व 12वीं स्तर (CEN 06/2026 व 07/2026): दिसंबर 2026 के चौथे सप्ताह से संभावित।',
    },
  },
  {
    id: 'NOTIF-2026-CITY-INTIMATION-ADVISORY',
    title: {
      en: 'Advisory on City Intimation Slip, e-Call Letters, Aadhaar Biometric Entry & Free Travel Pass',
      hi: 'परीक्षा शहर पर्ची, ई-कॉल लेटर, आधार बायोमेट्रिक प्रवेश एवं निःशुल्क यात्रा पास परामर्श',
    },
    category: 'important',
    date: '2026-10-26',
    exam: 'ALL',
    officialPdfUrl: 'https://rrbapply.gov.in',
    rrbCode: 'Railway Board Central',
    summary: {
      en: 'Crucial candidate advisory for CBT appearances: (1) Exam City & Date Intimation Slip becomes active exactly 10 days prior to the respective exam date on regional RRB websites. (2) e-Call Letter (Admit Card) download starts exactly 4 days before candidate\'s scheduled exam date. (3) SC/ST candidates are provided Free Sleeper Class Railway Travel Authority on their slips. (4) Aadhaar-linked biometric authentication is strictly mandatory at the entrance gate before entering the test lab. (5) Strictly prohibited inside test centers: mobile phones, Bluetooth devices, smart watches, calculators, metallic ornaments.',
      hi: 'सीबीटी परीक्षाओं हेतु अत्यंत महत्वपूर्ण दिशा-निर्देश: (1) परीक्षा शहर एवं तिथि पर्ची संबंधित परीक्षा तिथि से ठीक 10 दिन पहले जारी की जाती है। (2) ई-कॉल लेटर (एडमिट कार्ड) परीक्षा तिथि से 4 दिन पहले डाउनलोड होना प्रारंभ होता है। (3) एससी/एसटी अभ्यर्थियों हेतु निःशुल्क स्लीपर क्लास रेल यात्रा पास ई-कॉल लेटर के साथ संलग्न रहता है। (4) परीक्षा हॉल में प्रवेश के लिए आधार आधारित बायोमेट्रिक सत्यापन अनिवार्य है। (5) मोबाइल, ब्लूटूथ, स्मार्टवॉच, कैलकुलेटर और धातु की वस्तुएं पूरी तरह से प्रतिबंधित हैं।',
    },
  },
  // =========================================================================
  // OFFICIAL 2026 CALENDAR NOTIFICATIONS (CEN 01/2026 to CEN 10/2026)
  // =========================================================================
  {
    id: 'NOTIF-2026-CEN-01-ALP',
    title: {
      en: 'Centralised Employment Notice CEN No. 01/2026: Recruitment for Assistant Loco Pilot (ALP)',
      hi: 'केंद्रीकृत रोजगार अधिसूचना सीईएन सं. 01/2026: सहायक लोको पायलट (ALP) भर्ती',
    },
    category: 'new',
    date: '2026-01-20',
    exam: 'rrb-alp',
    officialPdfUrl: 'https://rrbapply.gov.in',
    rrbCode: 'RRB Jammu-Srinagar (Nodal) / All 21 RRBs',
    summary: {
      en: 'Official notification CEN 01/2026 released for Assistant Loco Pilot (ALP) across Indian Railways running cadres. Selection Pipeline: CBT-1 (75 Qs / 60 Mins screening) -> CBT-2 Part A (100 Qs / 90 Mins core merit: Basic Science & Engineering 40, Maths 25, Reasoning 25, GA 10) + Part B (75 Qs / 60 Mins Trade Qualifying 35%) -> CBAT (Psychometric Test with 5 Batteries, min T-Score 42) -> 1:1 DV & Medical (A-1 Medical Standard: 6/6 distance vision without glasses is mandatory).',
      hi: 'भारतीय रेल के रनिंग संवर्ग हेतु सहायक लोको पायलट (एएलपी) के लिए अधिसूचना सीईएन 01/2026 जारी। चयन प्रक्रिया: सीबीटी-1 (75 प्रश्न / 60 मिनट स्क्रीनिंग) -> सीबीटी-2 भाग A (100 प्रश्न / 90 मिनट मेरिट: बेसिक साइंस एंड इंजीनियरिंग 40, गणित 25, रीजनिंग 25, जीए 10) + भाग B (75 प्रश्न / 60 मिनट ट्रेड क्वालीफाइंग 35%) -> सीबीएटी (5 बैटरियों वाला साइको टेस्ट, न्यूनतम T-स्कोर 42) -> 1:1 डीवी एवं मेडिकल (A-1 मेडिकल मानक: बिना चश्मे के 6/6 दृष्टि अनिवार्य)।',
    },
  },
  {
    id: 'NOTIF-2026-CEN-02-TECH',
    title: {
      en: 'Centralised Employment Notice CEN No. 02/2026: Recruitment of Technicians (All Grades — Grade I Signal & Grade III)',
      hi: 'केंद्रीकृत रोजगार अधिसूचना सीईएन सं. 02/2026: तकनीशियन (सभी ग्रेड — ग्रेड I सिग्नल एवं ग्रेड III) भर्ती',
    },
    category: 'new',
    date: '2026-03-09',
    exam: 'rrb-technician',
    officialPdfUrl: 'https://rrbapply.gov.in',
    rrbCode: 'RRB Thiruvananthapuram (Nodal) / All 21 RRBs',
    summary: {
      en: 'CEN 02/2026 announced for Technician Grade I Signal (Pay Level 5, B.Sc/Diploma/B.Tech in Physics/Electronics/IT/CS) and Technician Grade III (Pay Level 2, Matriculation + ITI/NAC across various trades: Fitter, Welder, Electrician, Machinist, Track Machine, etc.). Single CBT per level (100 Qs / 90 Mins, 1/3rd negative marking). Grade I Signal features 40 marks Basic Science & Engineering + 15 marks Computer Applications.',
      hi: 'तकनीशियन ग्रेड I सिग्नल (लेवल 5: भौतिकी/इलेक्ट्रॉनिक्स/आईटी में बीएससी/डिप्लोमा) एवं तकनीशियन ग्रेड III (लेवल 2: 10वीं + आईटीआई/एनएसी विभिन्न ट्रेड्स: फिटर, वेल्डर, इलेक्ट्रीशियन, मशीनिस्ट) हेतु अधिसूचना सीईएन 02/2026। प्रत्येक स्तर हेतु एकल सीबीटी (100 प्रश्न / 90 मिनट, 1/3 नकारात्मक अंकन)। ग्रेड I सिग्नल में 40 अंक बेसिक साइंस एंड इंजीनियरिंग + 15 अंक कंप्यूटर अनुप्रयोग सम्मिलित।',
    },
  },
  {
    id: 'NOTIF-2026-CEN-03-SECTION-CONTROLLER',
    title: {
      en: 'Centralised Employment Notice CEN No. 03/2026: Recruitment for Section Controller (Traffic Operations)',
      hi: 'केंद्रीकृत रोजगार अधिसूचना सीईएन सं. 03/2026: सेक्शन कंट्रोलर (परिचालन/यातायात) भर्ती',
    },
    category: 'new',
    date: '2026-06-18',
    exam: 'rrb-section-controller',
    officialPdfUrl: 'https://rrbapply.gov.in',
    rrbCode: 'RRB Mumbai (Nodal) / Indian Railways Operating Department',
    summary: {
      en: 'CEN 03/2026 released for Section Controller positions in Railway Operating Control Rooms. Critical role overseeing train graphs, headway, block sections, and real-time train movement. Evaluation: CBT-1 Screening -> CBT-2 Advanced (Train Operations, Railway Signaling, Speed Restrictions, Accident Protocols) -> CBAT Psycho Test -> A-2 Medical Standard.',
      hi: 'रेलवे कंट्रोल रूम्स में सेक्शन कंट्रोलर पदों हेतु अधिसूचना सीईएन 03/2026 जारी। ट्रेन ग्राफ, हेडवे, ब्लॉक सेक्शन और वास्तविक समय में ट्रेन संचालन का नियंत्रण। चयन: सीबीटी-1 -> सीबीटी-2 उन्नत (ट्रेन संचालन, सिग्नलिंग, कॉशन ऑर्डर, दुर्घटना प्रोटोकॉल) -> सीबीएटी साइको टेस्ट -> A-2 मेडिकल मानक।',
    },
  },
  {
    id: 'NOTIF-2026-CEN-04-JE',
    title: {
      en: 'Centralised Employment Notice CEN No. 04/2026: Recruitment for Junior Engineer (JE / DMS / CMA) — 3,993 Vacancies',
      hi: 'केंद्रीकृत रोजगार अधिसूचना सीईएन सं. 04/2026: कनिष्ठ अभियंता (JE / DMS / CMA) भर्ती — 3,993 रिक्तियां',
    },
    category: 'new',
    date: '2026-08-14',
    exam: 'rrb-je',
    officialPdfUrl: 'https://www.rrbbbs.gov.in',
    rrbCode: 'RRB Bhubaneswar (Nodal) / All 21 RRBs',
    summary: {
      en: 'CEN 04/2026 online applications active from 14 August to 13 September 2026 for 3,993 Technical Supervisory posts: Junior Engineer (Civil, Mechanical, Electrical, Electronics, S&T, CS/IT), Depot Material Superintendent (DMS), and Chemical & Metallurgical Assistant (CMA). CBT-1 (100 Qs / 90 Mins non-tech) -> CBT-2 (150 Qs / 120 Mins: 100 Technical + 15 GA + 15 Physics/Chem + 10 Computers + 10 Environment). Virtual scientific calculator enabled on CBT-2 screens.',
      hi: '3,993 तकनीकी पर्यवेक्षी पदों हेतु ऑनलाइन आवेदन 14 अगस्त से 13 सितंबर 2026 तक: जूनियर इंजीनियर (सिविल, मैकेनिकल, इलेक्ट्रिकल, इलेक्ट्रॉनिक्स, एसएंडटी, आईटी), डिपो सामग्री अधीक्षक (DMS) एवं रासायनिक सहायक (CMA)। सीबीटी-1 (100 प्रश्न गैर-तकनीकी) -> सीबीटी-2 (150 प्रश्न: 100 तकनीकी + 15 जीए + 15 भौतिकी/रसायन + 10 कंप्यूटर + 10 पर्यावरण)। सीबीटी-2 स्क्रीन पर वर्चुअल साइंटिफिक कैलकुलेटर उपलब्ध।',
    },
  },
  {
    id: 'NOTIF-2026-CEN-05-PARAMEDICAL',
    title: {
      en: 'Centralised Employment Notice CEN No. 05/2026: Recruitment for Paramedical Staff (Nursing Superintendent, Pharmacist, Lab Tech)',
      hi: 'केंद्रीकृत रोजगार अधिसूचना सीईएन सं. 05/2026: पैरामेडिकल स्टाफ (नर्सिंग सुपरिटेंडेंट, फार्मासिस्ट, लैब तकनीशियन) भर्ती',
    },
    category: 'new',
    date: '2026-08-22',
    exam: 'rrb-paramedical',
    officialPdfUrl: 'https://rrbapply.gov.in',
    rrbCode: 'RRB Patna (Nodal) / Railway Medical Services',
    summary: {
      en: 'CEN 05/2026 announced for Paramedical categories in Railway Hospitals and Health Units across India: Nursing Superintendent, Pharmacist Grade III, Medical Lab Technologist, Radiographer, Dietician, and Dental Hygienist. Single CBT (100 Qs / 90 Mins: Professional Knowledge 70 Qs, General Science 10 Qs, General Awareness 10 Qs, Arithmetic & Reasoning 10 Qs).',
      hi: 'भारतीय रेल चिकित्सालयों हेतु पैरामेडिकल संवर्ग अधिसूचना सीईएन 05/2026: नर्सिंग सुपरिटेंडेंट, फार्मासिस्ट, लैब टेक्नोलॉजिस्ट, रेडियोग्राफर एवं डायटीशियन। एकल सीबीटी (100 प्रश्न / 90 मिनट: व्यावसायिक ज्ञान 70 प्रश्न, सामान्य विज्ञान 10 प्रश्न, सामान्य जागरूकता 10 प्रश्न, अंकगणित व रीजनिंग 10 प्रश्न)।',
    },
  },
  {
    id: 'NOTIF-2026-CEN-06-NTPC-GRAD',
    title: {
      en: 'Centralised Employment Notice CEN No. 06/2026: Recruitment for NTPC (Graduate Level — Levels 5 & 6) — 3,548 Vacancies',
      hi: 'केंद्रीकृत रोजगार अधिसूचना सीईएन सं. 06/2026: एनटीपीसी (स्नातक स्तर — पे लेवल 5 व 6) भर्ती — 3,548 रिक्तियां',
    },
    category: 'new',
    date: '2026-10-08',
    exam: 'rrb-ntpc',
    officialPdfUrl: 'https://rrbapply.gov.in',
    rrbCode: 'RRB Prayagraj (Nodal) / All 21 RRBs',
    summary: {
      en: 'Official notification CEN 06/2026 published for 3,548 Graduate posts across 21 RRBs. Application Window: 08 October to 06 November 2026 (Fee payment up to 08 Nov). Posts: Goods Train Manager (2,750), Senior Clerk Cum Typist (371), Junior Accounts Assistant Cum Typist (300), and Chief Commercial Cum Ticket Supervisor (127). IMPORTANT REFORM: Typing Skill Test DISPENSED WITH for CEN 06/2026 per Para 13.0(c). Selection solely via CBT-1 (100 Qs) -> CBT-2 (120 Qs) -> 1:1 DV & Medical.',
      hi: '21 आरआरबी में 3,548 स्नातक पदों हेतु अधिसूचना सीईएन 06/2026 जारी। आवेदन विंडो: 08 अक्टूबर से 06 नवंबर 2026 तक। अधिसूचित पद: गुड्स ट्रेन मैनेजर (2,750), सीनियर क्लर्क (371), जूनियर अकाउंट्स असिस्टेंट (300) एवं चीफ कमर्शियल सुपरवाइजर (127)। ऐतिहासिक सुधार: पैरा 13.0(c) के तहत टाइपिंग टेस्ट समाप्त! चयन केवल सीबीटी-1 -> सीबीटी-2 -> 1:1 डीवी एवं मेडिकल द्वारा।',
    },
  },
  {
    id: 'NOTIF-2026-CEN-07-NTPC-UG',
    title: {
      en: 'Centralised Employment Notice CEN No. 07/2026: Recruitment for NTPC (Undergraduate Level — Levels 2 & 3)',
      hi: 'केंद्रीकृत रोजगार अधिसूचना सीईएन सं. 07/2026: एनटीपीसी (12वीं उत्तीर्ण स्तर — पे लेवल 2 व 3) भर्ती',
    },
    category: 'new',
    date: '2026-10-15',
    exam: 'rrb-ntpc',
    officialPdfUrl: 'https://rrbapply.gov.in',
    rrbCode: 'RRB Ahmedabad (Nodal) / All 21 RRBs',
    summary: {
      en: 'CEN 07/2026 published for Undergraduate 10+2 posts: Commercial cum Ticket Clerk (Pay Level 3), Accounts Clerk cum Typist (Level 2), Junior Clerk cum Typist (Level 2), and Trains Clerk (Level 2). Application Window: 15 October to 13 November 2026. Minimum eligibility: 12th (+2 Stage) with at least 50% aggregate marks for UR/OBC. Testing via CBT-1 -> CBT-2 -> Typing Skill Test (30 WPM English / 25 WPM Hindi).',
      hi: '12वीं उत्तीर्ण पदों हेतु सीईएन 07/2026 जारी: कमर्शियल कम टिकट क्लर्क (लेवल 3), एकाउंट्स क्लर्क कम टाइपिस्ट (लेवल 2), जूनियर क्लर्क कम टाइपिस्ट (लेवल 2) एवं ट्रेन्स क्लर्क (लेवल 2)। आवेदन विंडो: 15 अक्टूबर से 13 नवंबर 2026। पात्रता: 12वीं में न्यूनतम 50% अंक (UR/OBC)। सीबीटी-1 -> सीबीटी-2 -> टाइपिंग टेस्ट (30 WPM अंग्रेजी / 25 WPM हिंदी)।',
    },
  },
  {
    id: 'NOTIF-2026-CEN-08-STATION-MASTER',
    title: {
      en: 'Centralised Employment Notice CEN No. 08/2026: Special Graduate Drive for Station Master (Level 6)',
      hi: 'केंद्रीकृत रोजगार अधिसूचना सीईएन सं. 08/2026: स्टेशन मास्टर (लेवल 6) विशेष स्नातक भर्ती अभियान',
    },
    category: 'new',
    date: '2026-10-27',
    exam: 'rrb-station-master',
    officialPdfUrl: 'https://rrbapply.gov.in',
    rrbCode: 'Ministry of Railways / Operating Department',
    summary: {
      en: 'Specialized centralized drive CEN 08/2026 announced exclusively for Station Master vacancies across newly commissioned DFC links, high-speed chords, and 3rd/4th line expansions. Application Window: 27 October to 25 November 2026. Evaluation includes CBT-1 -> CBT-2 -> RDSO CBAT (Psychometric Test with Intelligence, Selective Attention, Spatial, and Personality Batteries) -> A-2 Medical Standard (Rigorous color perception and distance vision tests).',
      hi: 'डीएफसी लिंक, नई लाइनों एवं स्टेशनों हेतु केवल स्टेशन मास्टर (लेवल 6) पदों के लिए विशेष भर्ती अभियान सीईएन 08/2026 जारी। आवेदन विंडो: 27 अक्टूबर से 25 नवंबर 2026। चयन प्रक्रिया: सीबीटी-1 -> सीबीटी-2 -> आरडीएसओ सीबीएटी साइको परीक्षा (बुद्धिमत्ता, चयनात्मक ध्यान, स्थानिक दिशा परीक्षण) -> A-2 मेडिकल मानक।',
    },
  },
  {
    id: 'NOTIF-2026-CEN-09-GROUP-D',
    title: {
      en: 'Centralised Employment Notice CEN No. 09/2026 (Tentative): Recruitment for Level-1 (Group D — Track Maintainer & Pointsman)',
      hi: 'केंद्रीकृत रोजगार अधिसूचना सीईएन सं. 09/2026 (प्रस्तावित): लेवल-1 (ग्रुप डी — ट्रैक मेंटेनर एवं प्वॉइंट्समैन) भर्ती',
    },
    category: 'important',
    date: '2026-10-25',
    exam: 'rrb-group-d',
    officialPdfUrl: 'https://www.rrbcdg.gov.in',
    rrbCode: 'RRB Chandigarh (Nodal) / All RRCs',
    summary: {
      en: 'Tentative notification scheduled for release in November–December 2026 for extensive Level-1 vacancies (Track Maintainer Grade IV, Pointsman, Assistant Workshop, Assistant C&W, Assistant S&T). Minimum educational criteria: 10th pass OR ITI from NCVT/SCVT or NAC certificate. Single Stage CBT (100 Qs / 90 Mins with 25 marks high-weightage Science) -> RFID-timed PET (Male 1000m in 4m 15s + 35kg carry; Female 1000m in 5m 40s + 20kg carry).',
      hi: 'नवंबर-दिसंबर 2026 में संभावित वृहद लेवल-1 अधिसूचना (ट्रैक मेंटेनर ग्रेड IV, प्वॉइंट्समैन, असिस्टेंट वर्कशॉप, सीएंडडब्ल्यू, एसएंडटी)। योग्यता: 10वीं पास अथवा आईटीआई/एनएसी। एकल सीबीटी (100 प्रश्न / 90 मिनट: 25 अंक सामान्य विज्ञान) -> आरएफआईडी चिप पीईटी दौड़ (पुरुष 1000 मी 4 मिनट 15 सेकंड + 35 किग्रा वजन; महिला 1000 मी 5 मिनट 40 सेकंड + 20 किग्रा वजन)।',
    },
  },
  {
    id: 'NOTIF-2026-CEN-10-MINISTERIAL',
    title: {
      en: 'Centralised Employment Notice CEN No. 10/2026 (Tentative): Ministerial & Isolated Categories',
      hi: 'केंद्रीकृत रोजगार अधिसूचना सीईएन सं. 10/2026 (प्रस्तावित): मिनिस्ट्रियल एवं आइसोलेटेड श्रेणियां भर्ती',
    },
    category: 'info',
    date: '2026-10-26',
    exam: 'rrb-ministerial',
    officialPdfUrl: 'https://rrbapply.gov.in',
    rrbCode: 'RRB Kolkata (Nodal)',
    summary: {
      en: 'Expected late 2026 cycle notification for specialized cadres including Junior Stenographer (English/Hindi: 80 WPM shorthand test), Chief Law Assistant, Junior Translator (Hindi), Staff & Welfare Inspector, and Fingerprint Examiner. Selection via CBT + Trade/Stenography/Translation Skill Test + DV & Medical.',
      hi: '2026 के अंत में संभावित अधिसूचना: जूनियर स्टेनोग्राफर (अंग्रेजी/हिंदी 80 WPM शॉर्टहैंड), चीफ लॉ असिस्टेंट, जूनियर अनुवादक, कल्याण निरीक्षक एवं फिंगरप्रिंट परीक्षक। चयन: सीबीटी + आशुलिपि/अनुवाद दक्षता परीक्षा + डीवी व मेडिकल।',
    },
  },

  // =========================================================================
  // CONCURRENT ACTIVE RECRUITMENT CYCLES (CEN 01/2024 to CEN 09/2025)
  // =========================================================================
  {
    id: 'NOTIF-2024-CEN-01-ALP-REVISED',
    title: {
      en: 'CEN 01/2024 (Active Cycle): Assistant Loco Pilot (ALP) — Vacancies Increased to 18,799 Posts',
      hi: 'सीईएन 01/2024 (सक्रिय चक्र): सहायक लोको पायलट (ALP) — रिक्तियां बढ़ाकर 18,799 पद की गईं',
    },
    category: 'important',
    date: '2026-06-25',
    exam: 'rrb-alp',
    officialPdfUrl: 'https://rrbapply.gov.in',
    rrbCode: 'Railway Board Central',
    summary: {
      en: 'Ministry of Railways significantly increased ALP vacancies from initial 5,696 to 18,799 across all zonal railways to meet intensive operational demands. Ongoing stages include CBT-1 screening and CBT-2 Part A + Part B trade evaluations.',
      hi: 'रेल मंत्रालय ने बढ़ती परिचालन आवश्यकताओं को पूरा करने हेतु एएलपी रिक्तियों को 5,696 से बढ़ाकर 18,799 कर दिया। सीबीटी-1 स्क्रीनिंग एवं सीबीटी-2 भाग A व भाग B ट्रेड परीक्षाएं संचालित।',
    },
  },
  {
    id: 'NOTIF-2024-CEN-02-TECH-REVISED',
    title: {
      en: 'CEN 02/2024 (Active Cycle): Technicians (Grade I Signal & Grade III) — 14,298 Total Vacancies',
      hi: 'सीईएन 02/2024 (सक्रिय चक्र): तकनीशियन (ग्रेड I सिग्नल एवं ग्रेड III) — कुल 14,298 रिक्तियां',
    },
    category: 'important',
    date: '2026-07-15',
    exam: 'rrb-technician',
    officialPdfUrl: 'https://rrbapply.gov.in',
    rrbCode: 'Railway Board Central',
    summary: {
      en: 'Active technician recruitment cycle encompassing 1,092 Grade I Signal posts (Pay Level 5) and 13,206 Grade III posts (Pay Level 2). City intimation slips and CBT schedules released on regional RRB portals.',
      hi: 'सक्रिय तकनीशियन भर्ती चक्र में 1,092 ग्रेड I सिग्नल पद एवं 13,206 ग्रेड III पद शामिल। परीक्षा शहर पर्चियां एवं सीबीटी समय सारिणी क्षेत्रीय आरआरबी पोर्टलों पर उपलब्ध।',
    },
  },
  {
    id: 'NOTIF-2024-CEN-03-JE',
    title: {
      en: 'CEN 03/2024 (Active Cycle): Junior Engineer (JE / DMS / CMA) — 7,951 Vacancies CBT-2 Schedules',
      hi: 'सीईएन 03/2024 (सक्रिय चक्र): कनिष्ठ अभियंता (JE / DMS / CMA) — 7,951 पद सीबीटी-2 परीक्षा कार्यक्रम',
    },
    category: 'important',
    date: '2026-05-12',
    exam: 'rrb-je',
    officialPdfUrl: 'https://rrbapply.gov.in',
    rrbCode: 'RRB Secunderabad / All RRBs',
    summary: {
      en: 'CBT-2 technical examination stages conducted for 7,951 engineering supervisor posts. Candidates provided on-screen virtual scientific calculator during technical sessions.',
      hi: '7,951 इंजीनियरिंग पर्यवेक्षक पदों हेतु सीबीटी-2 तकनीकी परीक्षाएं आयोजित। अभ्यर्थियों को कंप्यूटर स्क्रीन पर वर्चुअल साइंटिफिक कैलकुलेटर की सुविधा।',
    },
  },
  {
    id: 'NOTIF-2024-CEN-05-NTPC-GRAD',
    title: {
      en: 'CEN 05/2024 (Active Cycle): NTPC (Graduate) — 8,113 Vacancies CBT-1 & CBT-2 Progression',
      hi: 'सीईएन 05/2024 (सक्रिय चक्र): एनटीपीसी (स्नातक) — 8,113 पद सीबीटी-1 एवं सीबीटी-2 चरण',
    },
    category: 'important',
    date: '2026-09-02',
    exam: 'rrb-ntpc',
    officialPdfUrl: 'https://rrbapply.gov.in',
    rrbCode: 'RRB Ahmedabad / Prayagraj',
    summary: {
      en: 'Active graduate recruitment cycle encompassing 8,113 posts (Chief Commercial cum Ticket Supervisor: 1,736, Station Master: 994, Goods Train Manager: 3,144, Junior Accounts Assistant: 1,507, Senior Clerk: 732).',
      hi: '8,113 स्नातक पदों हेतु सक्रिय भर्ती (चीफ कमर्शियल सुपरवाइजर: 1,736, स्टेशन मास्टर: 994, गुड्स ट्रेन मैनेजर: 3,144, जूनियर एकाउंट्स असिस्टेंट: 1,507, सीनियर क्लर्क: 732)।',
    },
  },
  {
    id: 'NOTIF-2024-CEN-06-NTPC-UG',
    title: {
      en: 'CEN 06/2024 (Active Cycle): NTPC (Undergraduate) — 3,445 Vacancies Examination Window',
      hi: 'सीईएन 06/2024 (सक्रिय चक्र): एनटीपीसी (12वीं उत्तीर्ण) — 3,445 पद परीक्षा कार्यक्रम',
    },
    category: 'important',
    date: '2026-09-10',
    exam: 'rrb-ntpc',
    officialPdfUrl: 'https://rrbapply.gov.in',
    rrbCode: 'RRB Ahmedabad',
    summary: {
      en: 'Active undergraduate recruitment for 3,445 vacancies across Commercial cum Ticket Clerk (2,022), Junior Clerk cum Typist (990), Accounts Clerk cum Typist (361), and Trains Clerk (72).',
      hi: '3,445 अंडरग्रेजुएट पदों हेतु सक्रिय भर्ती: कमर्शियल क्लर्क (2,022), जूनियर क्लर्क (990), एकाउंट्स क्लर्क (361) एवं ट्रेन्स क्लर्क (72)।',
    },
  },
  {
    id: 'NOTIF-2024-CEN-RPF-SI-CONSTABLE',
    title: {
      en: 'CEN RPF 01/2024 & CEN RPF 02/2024: Sub-Inspector (452 Posts) & Constable (4,208 Posts) — 4,660 Vacancies',
      hi: 'सीईएन आरपीएफ 01/2024 व 02/2024: सब-इंस्पेक्टर (452 पद) एवं कांस्टेबल (4,208 पद) — कुल 4,660 रिक्तियां',
    },
    category: 'new',
    date: '2026-04-15',
    exam: 'rrb-rpf',
    officialPdfUrl: 'https://rrbapply.gov.in',
    rrbCode: 'Railway Protection Force / RRB',
    summary: {
      en: 'Unified recruitment for 4,660 security personnel in Railway Protection Force (RPF) and Railway Protection Special Force (RPSF). Single CBT (120 Qs / 90 Mins: GA 50, Arithmetic 35, Reasoning 35) followed by physical endurance test (1600m run, Long Jump, High Jump).',
      hi: 'रेलवे सुरक्षा बल (आरपीएफ) एवं आरपीएसएफ में 4,660 पदों हेतु संयुक्त भर्ती। एकल सीबीटी (120 प्रश्न / 90 मिनट: जीए 50, अंकगणित 35, रीजनिंग 35) एवं इसके उपरांत पीईटी/पीएमटी शारीरिक परीक्षण।',
    },
  },
  {
    id: 'NOTIF-2024-CEN-04-PARAMEDICAL',
    title: {
      en: 'CEN 04/2024 (Active Cycle): Paramedical Categories — 1,376 Vacancies',
      hi: 'सीईएन 04/2024 (सक्रिय चक्र): पैरामेडिकल श्रेणियां — 1,376 रिक्तियां',
    },
    category: 'info',
    date: '2026-08-01',
    exam: 'rrb-paramedical',
    officialPdfUrl: 'https://rrbapply.gov.in',
    rrbCode: 'RRB Patna',
    summary: {
      en: 'Active cycle for 1,376 specialized hospital posts including Nursing Superintendent (713 posts), Pharmacist (246 posts), and Health Inspector.',
      hi: '1,376 विशिष्ट चिकित्सालय पदों हेतु सक्रिय भर्ती: नर्सिंग सुपरिटेंडेंट (713 पद), फार्मासिस्ट (246 पद) एवं स्वास्थ्य निरीक्षक।',
    },
  },
  {
    id: 'NOTIF-2024-CEN-08-LEVEL-1',
    title: {
      en: 'CEN 08/2024 & CEN 09/2025: Level-1 (Group D) — 22,195+ Vacancies & Standardized PET Protocol',
      hi: 'सीईएन 08/2024 व 09/2025: लेवल-1 (ग्रुप डी) — 22,195+ रिक्तियां एवं मानकीकृत पीईटी प्रोटोकॉल',
    },
    category: 'important',
    date: '2026-06-10',
    exam: 'rrb-group-d',
    officialPdfUrl: 'https://www.rrbcdg.gov.in',
    rrbCode: 'RRB Chandigarh (Nodal)',
    summary: {
      en: 'Concurrent active Level-1 cycle across Indian Railways zones. Single stage CBT followed by biometric and RFID chip-timed Physical Efficiency Test.',
      hi: 'भारतीय रेल के विभिन्न ज़ोनों में सक्रिय लेवल-1 चक्र। एकल चरण सीबीटी के उपरांत बायोमेट्रिक एवं आरएफआईडी चिप सक्षम शारीरिक दक्षता परीक्षण।',
    },
  },
  {
    id: 'NOTIF-2026-CALENDAR-ANNUAL',
    title: {
      en: 'Official Ministry of Railways Annual Recruitment Calendar (Quarterly Progression System)',
      hi: 'रेल मंत्रालय का आधिकारिक वार्षिक भर्ती कैलेंडर (त्रैमासिक प्रगति प्रणाली)',
    },
    category: 'important',
    date: '2026-01-10',
    exam: 'ALL',
    officialPdfUrl: 'https://indianrailways.gov.in',
    rrbCode: 'Railway Board New Delhi',
    summary: {
      en: 'Standardized annual recruitment flow: Jan–Mar: ALP (Assistant Loco Pilot) | Apr–Jun: Technicians (Grade I & III) | Jul–Sep: Non-Technical Popular Categories (Graduate & Undergraduate) | Oct–Dec: Junior Engineers, Paramedical Categories, Level-1 (Group D), and Ministerial & Isolated Categories.',
      hi: 'मानकीकृत वार्षिक भर्ती कैलेंडर: जनवरी-मार्च: एएलपी (सहायक लोको पायलट) | अप्रैल-जून: तकनीशियन (ग्रेड I व III) | जुलाई-सितंबर: एनटीपीसी (स्नातक एवं 12वीं स्तर) | अक्टूबर-दिसंबर: जूनियर इंजीनियर, पैरामेडिकल, लेवल-1 (ग्रुप डी) एवं मिनिस्ट्रियल श्रेणियां।',
    },
  },
];
