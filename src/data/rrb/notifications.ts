import type { LiveNotification } from '../../types';

export const LIVE_NOTIFICATIONS: LiveNotification[] = [
  {
    id: 'NOTIF-2026-001',
    title: {
      en: 'RRB NTPC CEN 05/2024 (Graduate) & CEN 06/2024 (Undergraduate) CBT-1 Examination Schedule',
      hi: 'आरआरबी एनटीपीसी सीईएन 05/2024 (स्नातक) एवं सीईएन 06/2024 (अंडरग्रेजुएट) सीबीटी-1 परीक्षा समय सारिणी',
    },
    category: 'important',
    date: '2026-02-15',
    exam: 'rrb-ntpc',
    officialPdfUrl: 'https://www.rrbcdg.gov.in',
    rrbCode: 'Railway Board Central',
    summary: {
      en: 'Official notification regarding CBT-1 schedule across multiple phases. City intimation slip to be activated 10 days prior to exam date and e-call letters 4 days prior.',
      hi: 'विभिन्न चरणों में सीबीटी-1 परीक्षा कार्यक्रम संबंधी आधिकारिक सूचना। परीक्षा शहर सूचना पर्ची परीक्षा से 10 दिन पूर्व और ई-कॉल लेटर 4 दिन पूर्व सक्रिय होंगे।',
    },
  },
  {
    id: 'NOTIF-2026-002',
    title: {
      en: 'RRB JE CEN 03/2024 CBT-2 Technical Stage Exam Dates and Discipline-wise City Slip',
      hi: 'आरआरबी जेई सीईएन 03/2024 सीबीटी-2 तकनीकी चरण परीक्षा तिथियां एवं शाखावार सिटी स्लिप',
    },
    category: 'new',
    date: '2026-01-28',
    exam: 'rrb-je',
    officialPdfUrl: 'https://rrbsecunderabad.gov.in',
    rrbCode: 'Railway Board Central',
    summary: {
      en: 'Detailed guidelines for CBT-2 featuring 100 Technical Questions mapped to Civil, Mechanical, Electrical, Electronics, and IT engineering streams.',
      hi: 'सिविल, मैकेनिकल, इलेक्ट्रिकल, इलेक्ट्रॉनिक्स और आईटी इंजीनियरिंग शाखाओं के 100 तकनीकी प्रश्नों वाली सीबीटी-2 परीक्षा के विस्तृत दिशानिर्देश जारी।',
    },
  },
  {
    id: 'NOTIF-2026-003',
    title: {
      en: 'RRB Group D (Level-1) Physical Efficiency Test (PET) Standardized Protocol & Biometric Verification',
      hi: 'आरआरबी ग्रुप डी (लेवल-1) शारीरिक दक्षता परीक्षा (PET) मानकीकृत प्रोटोकॉल एवं बायोमेट्रिक सत्यापन',
    },
    category: 'info',
    date: '2026-01-10',
    exam: 'rrb-group-d',
    officialPdfUrl: 'https://www.rrbmumbai.gov.in',
    rrbCode: 'Railway Recruitment Cell',
    summary: {
      en: 'RFID chip-enabled timing system instructions for 1000m running and 35kg/20kg weight carrying test for PET qualifying round.',
      hi: 'पीईटी अर्हक दौर के लिए 1000 मीटर दौड़ और 35 किग्रा/20 किग्रा वजन वहन परीक्षा हेतु आरएफआईडी चिप सक्षम समय मापन प्रणाली के निर्देश।',
    },
  },
  {
    id: 'NOTIF-2026-004',
    title: {
      en: 'Ministry of Railways Annual Recruitment Calendar 2025-2026: Regular Cyclic Recruitments',
      hi: 'रेल मंत्रालय का वार्षिक भर्ती कैलेंडर 2025-2026: नियमित चक्रीय भर्तियां घोषित',
    },
    category: 'important',
    date: '2025-12-18',
    exam: 'ALL',
    officialPdfUrl: 'https://indianrailways.gov.in',
    rrbCode: 'Ministry of Railways',
    summary: {
      en: 'Annual cycle schedule: ALP (Jan-Mar), Technicians (Apr-Jun), Non-Technical Categories Graduate & Undergraduate (Jul-Sep), Level-1 & JE (Oct-Dec).',
      hi: 'वार्षिक चक्र: एएलपी (जनवरी-मार्च), तकनीशियन (अप्रैल-जून), एनटीपीसी स्नातक व 12वीं (जुलाई-सितंबर), लेवल-1 और जेई (अक्टूबर-दिसंबर)।',
    },
  },
  {
    id: 'NOTIF-2026-005',
    title: {
      en: 'Aadhaar Based Biometric Authentication Mandatory for all RRB CBT Stages',
      hi: 'सभी आरआरबी सीबीटी चरणों के लिए आधार आधारित बायोमेट्रिक प्रमाणीकरण अनिवार्य',
    },
    category: 'deadline',
    date: '2025-11-20',
    exam: 'ALL',
    officialPdfUrl: 'https://www.rrbchennai.gov.in',
    rrbCode: 'All 21 RRBs',
    summary: {
      en: 'Candidates must bring original Aadhaar Card to exam centers. Entry will not be permitted without authentic biometric verification.',
      hi: 'अभ्यर्थियों को परीक्षा केंद्र पर मूल आधार कार्ड लाना अनिवार्य है। प्रामाणिक बायोमेट्रिक सत्यापन के बिना प्रवेश नहीं दिया जाएगा।',
    },
  },
];
