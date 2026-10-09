import type { BilingualText } from '../../types';

export interface InternetResource {
  id: string;
  title: string;
  hindiTitle: string;
  category: 'official_portal' | 'cbat_psycho' | 'ncert_epathshala' | 'nptel_engineering' | 'digital_library';
  provider: string;
  url: string;
  isFree: boolean;
  description: BilingualText;
  utilityForAspirants: BilingualText;
  tags: string[];
}

export const INTERNET_RESOURCES: InternetResource[] = [
  {
    id: 'res-rrbapply-portal',
    title: 'Official Centralized Railway Application Portal (rrbapply.gov.in)',
    hindiTitle: 'रेलवे भर्ती बोर्ड आधिकारिक केंद्रीकृत आवेदन पोर्टल (rrbapply.gov.in)',
    category: 'official_portal',
    provider: 'Ministry of Railways, Govt of India',
    url: 'https://rrbapply.gov.in',
    isFree: true,
    description: {
      en: 'The centralized government gateway for submitting applications, downloading e-call letters, viewing exam city intimation slips, checking normalized scorecards, and filing objections.',
      hi: 'ऑनलाइन आवेदन, ई-कॉल लेटर डाउनलोड, परीक्षा शहर पर्ची, सामान्यीकृत स्कोरकार्ड एवं उत्तर कुंजी आपत्तियां दर्ज कराने का एकमात्र आधिकारिक केंद्रीकृत पोर्टल।',
    },
    utilityForAspirants: {
      en: 'Mandatory portal for all RRB recruitments (NTPC, Group D, JE, ALP, Technicians). Use for Aadhaar link verification and fee refund tracking.',
      hi: 'सभी रेलवे भर्तियों (NTPC, ग्रुप डी, JE, ALP) हेतु अनिवार्य पोर्टल। आधार लिंक सत्यापन एवं शुल्क वापसी की स्थिति जांचें।',
    },
    tags: ['official', 'portal', 'admit-card', 'city-slip', 'results'],
  },
  {
    id: 'res-rdso-psycho',
    title: 'RDSO Psychological Aptitude Test (CBAT) Guidelines & Practice Booklets',
    hindiTitle: 'आरडीएसओ मनोवैज्ञानिक अभिरुचि परीक्षण (CBAT) दिशानिर्देश एवं अभ्यास पुस्तिकाएं',
    category: 'cbat_psycho',
    provider: 'Research Designs & Standards Organisation (RDSO), Lucknow',
    url: 'https://rdso.indianrailways.gov.in/view_section.jsp?lang=0&id=0,2,17',
    isFree: true,
    description: {
      en: 'Official RDSO Psycho-Technical Directorate guidelines, battery test structures, and sample test batteries for Station Master (NTPC) and Assistant Loco Pilot (ALP).',
      hi: 'आरडीएसओ के आधिकारिक दिशानिर्देश, 5-बैटरी परीक्षण संरचना एवं स्टेशन मास्टर व एएलपी हेतु प्रामाणिक अभ्यास पुस्तिकाएं।',
    },
    utilityForAspirants: {
      en: 'Essential for understanding exact CBAT time limits, Odd Numbers Sum drills, Shortest Route Spatial map rules, and minimum T-score 42 criteria.',
      hi: 'सीबीटी के पश्चात स्टेशन मास्टर हेतु अनिवार्य। वास्तविक समय सीमा, विषम संख्या योग ड्रिल एवं न्यूनतम टी-स्कोर 42 की मानक जानकारी।',
    },
    tags: ['cbat', 'rdso', 'psycho', 'station-master', 'alp'],
  },
  {
    id: 'res-ncert-textbooks',
    title: 'NCERT Free Digital Textbooks Repository (Classes 6 to 12)',
    hindiTitle: 'एनसीईआरटी निःशुल्क डिजिटल पाठ्यपुस्तक पोर्टल (कक्षा 6 से 12)',
    category: 'ncert_epathshala',
    provider: 'NCERT, Ministry of Education',
    url: 'https://ncert.nic.in/textbook.php',
    isFree: true,
    description: {
      en: 'Official government portal providing direct, free PDF downloads of complete Class 9th and 10th Science (Physics, Chemistry, Biology) and Social Sciences textbooks.',
      hi: 'कक्षा 9 और 10 के विज्ञान (भौतिकी, रसायन, जीव विज्ञान) और सामाजिक विज्ञान की संपूर्ण पाठ्यपुस्तकों को निःशुल्क पीडीएफ रूप में डाउनलोड करने का आधिकारिक पोर्टल।',
    },
    utilityForAspirants: {
      en: 'The authentic base from which Railway Boards frame General Science questions in Group D and NTPC.',
      hi: 'ग्रुप डी एवं एनटीपीसी में 25 अंकों के सामान्य विज्ञान के अधिकांश प्रश्न इसी पाठ्यक्रम से सीधे पूछे जाते हैं।',
    },
    tags: ['ncert', 'general-science', 'physics', 'chemistry', 'biology', 'free'],
  },
  {
    id: 'res-epathshala-mobile',
    title: 'ePathshala Digital Learning Portal & Mobile App',
    hindiTitle: 'ई-पाठशाला डिजिटल शिक्षण पोर्टल एवं मोबाइल ऐप',
    category: 'ncert_epathshala',
    provider: 'CIET-NCERT & Govt of India',
    url: 'https://epathshala.nic.in',
    isFree: true,
    description: {
      en: 'Interactive audio, video, ePub, and flipbook learning modules accessible across web and Android/iOS for seamless revision of static concepts.',
      hi: 'वेब एवं मोबाइल पर सुलभ इंटरैक्टिव ऑडियो, वीडियो और ई-पुस्तकें, जो विज्ञान और इतिहास के बुनियादी सिद्धांतों को आसानी से समझाने में सहायक हैं।',
    },
    utilityForAspirants: {
      en: 'Free multimedia content for candidates studying in Hindi and English medium without requiring physical books.',
      hi: 'हिंदी और अंग्रेजी दोनों माध्यमों के अभ्यर्थियों के लिए बिना किसी शुल्क के संपूर्ण अध्ययन सामग्री उपलब्ध।',
    },
    tags: ['epathshala', 'ncert', 'audio-video', 'ebooks'],
  },
  {
    id: 'res-swayam-nptel-engg',
    title: 'SWAYAM & NPTEL Video Lectures for RRB JE Technical Disciplines',
    hindiTitle: 'स्वयं (SWAYAM) एवं एनपीटीईएल इंजीनियरिंग व्याख्यान (आरआरबी जेई हेतु)',
    category: 'nptel_engineering',
    provider: 'Ministry of Education & IITs / IISc',
    url: 'https://nptel.ac.in',
    isFree: true,
    description: {
      en: 'World-class, free video lecture modules and lecture notes taught by IIT professors across Civil, Mechanical, Electrical, Electronics, and Computer Science engineering.',
      hi: 'आईआईटी एवं आईआईएससी के प्राध्यापकों द्वारा सिविल, मैकेनिकल, इलेक्ट्रिकल, इलेक्ट्रॉनिक्स और कंप्यूटर साइंस हेतु निःशुल्क वीडियो व्याख्यान एवं नोट्स।',
    },
    utilityForAspirants: {
      en: 'Unmatched conceptual depth for RRB JE CBT-II 100-mark technical portion (Fluid Mechanics, SOM, Thermodynamics, Circuit Theory, RCC, Digital Electronics).',
      hi: 'आरआरबी जेई सीबीटी-2 के 100 अंकों के तकनीकी खंड (थर्मोडायनेमिक्स, सोम, हाइड्रोलिक्स, सर्किट थ्योरी) में सर्वोच्च अंक प्राप्त करने के लिए सर्वोत्तम।',
    },
    tags: ['je', 'technical', 'civil', 'mechanical', 'electrical', 'nptel', 'free'],
  },
  {
    id: 'res-ndli-library',
    title: 'National Digital Library of India (NDLI - IIT Kharagpur)',
    hindiTitle: 'राष्ट्रीय डिजिटल पुस्तकालय (NDLI - आईआईटी खड़गपुर)',
    category: 'digital_library',
    provider: 'IIT Kharagpur & Ministry of Education',
    url: 'https://ndl.iitkgp.ac.in',
    isFree: true,
    description: {
      en: 'India’s largest open digital archive containing over 100 million educational assets, research articles, solved competitive question archives, and technical handbooks.',
      hi: '10 करोड़ से अधिक शैक्षणिक संसाधनों, प्रतियोगी परीक्षा संग्रहों और तकनीकी संदर्भ ग्रंथों वाला भारत का विशालतम खुला डिजिटल पुस्तकालय।',
    },
    utilityForAspirants: {
      en: 'Access to standard technical reference manuals, formulas, and historical questions completely free of charge.',
      hi: 'मानक इंजीनियरिंग संदर्भावलियां, सूत्र संकलन एवं पिछले वर्षों के प्रश्नपत्र पूर्णतः निःशुल्क उपलब्ध।',
    },
    tags: ['ndli', 'library', 'free', 'research', 'books'],
  },
  {
    id: 'res-cris-railway-portal',
    title: 'Centre for Railway Information Systems (CRIS) Official Knowledge Base',
    hindiTitle: 'रेलवे सूचना प्रणाली केंद्र (CRIS) आधिकारिक तकनीकी ज्ञान केंद्र',
    category: 'official_portal',
    provider: 'Indian Railways / CRIS',
    url: 'https://cris.org.in',
    isFree: true,
    description: {
      en: 'Technical data and development updates on Indian Railways IT systems: Freight Operations Information System (FOIS), Passenger Reservation System (PRS), National Train Enquiry System (NTES), and Kavach.',
      hi: 'भारतीय रेल की प्रमुख सूचना प्रणालियों (FOIS, PRS, NTES, UTS मोबाइल एवं कवच) का आधिकारिक तकनीकी विवरण।',
    },
    utilityForAspirants: {
      en: 'Critical resource for Railway Current Affairs, modern signalling, and specialized general awareness questions asked in NTPC and JE.',
      hi: 'रेलवे करंट अफेयर्स, आधुनिक सिग्नलिंग और एनटीपीसी/जेई में पूछे जाने वाले विभागीय तकनीकी सामान्य ज्ञान हेतु उपयोगी।',
    },
    tags: ['cris', 'railway-gk', 'current-affairs', 'kavach', 'fois'],
  },
];
