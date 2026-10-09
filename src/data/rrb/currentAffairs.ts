import type { BilingualText } from '../../types';

export interface CurrentAffairItem {
  id: string;
  date: string;
  category: 'Railways' | 'National' | 'Economy' | 'Science & Tech' | 'Sports' | 'Awards & Honors';
  headline: BilingualText;
  summary: BilingualText;
  keyPoints?: BilingualText[];
  examRelevance: BilingualText;
  source: string;
}

export const CURRENT_AFFAIRS_ITEMS: CurrentAffairItem[] = [
  // ==========================================
  // 1. RAILWAYS CURRENT AFFAIRS (2025 - 2026)
  // ==========================================
  {
    id: 'ca-rail-2026-01',
    date: '2026-09-15',
    category: 'Railways',
    headline: {
      en: 'Indian Railways Rolls Out Kavach 4.0 Specification Nationwide on High-Density Corridors',
      hi: 'भारतीय रेल ने उच्च-घनत्व वाले गलियारों पर राष्ट्रव्यापी स्तर पर कवच 4.0 मानक प्रणाली लागू की',
    },
    summary: {
      en: 'The Ministry of Railways officially commissioned the RDSO-approved Kavach 4.0 across Delhi-Mumbai and Delhi-Howrah trunk corridors. Version 4.0 integrates 5G LTE-R high-bandwidth wireless communication, optical fiber network redundancy, and real-time station master computer interlocking diagnostics.',
      hi: 'रेल मंत्रालय ने दिल्ली-मुंबई और दिल्ली-हावड़ा मुख्य रेल मार्गों पर आरडीएसओ द्वारा स्वीकृत कवच 4.0 को आधिकारिक रूप से चालू किया। इसमें 5G LTE-R वायरलेस संचार, ऑप्टिकल फाइबर बैकबोन और रीयल-टाइम स्टेशन इंटरलॉकिंग डायग्नोस्टिक्स शामिल हैं।',
    },
    keyPoints: [
      { en: 'Certified to SIL-4 safety integrity standard (error chance < 1 in 10,000 years)', hi: 'SIL-4 संरक्षा मानक से प्रमाणित (त्रुटि की संभावना 10,000 वर्ष में 1 से भी कम)' },
      { en: 'Automated emergency braking on Signal Passed at Danger (SPAD)', hi: 'लाल सिग्नल पार करने (SPAD) पर स्वतः आपातकालीन ब्रेक' },
      { en: 'Direct loco-to-loco anti-collision calculation via UHF 400 MHz radio', hi: 'UHF 400 MHz रेडियो द्वारा सीधे लोको-टू-लोको टक्कर-रोधी गणना' },
    ],
    examRelevance: {
      en: 'Highest-yield question in RRB NTPC CBT-2 and RRB JE S&T / Electrical branches.',
      hi: 'आरआरबी एनटीपीसी सीबीटी-2 और आरआरबी जेई एसएंडटी / इलेक्ट्रिकल शाखाओं हेतु अत्यंत महत्वपूर्ण।',
    },
    source: 'Ministry of Railways / PIB New Delhi',
  },
  {
    id: 'ca-rail-2026-02',
    date: '2026-09-01',
    category: 'Railways',
    headline: {
      en: 'First Vande Bharat Sleeper Trainset Unveiled for Commercial Operations',
      hi: 'वाणिज्यिक परिचालन हेतु पहली वंदे भारत स्लीपर ट्रेनसेट का अनावरण',
    },
    summary: {
      en: 'BEML and Integral Coach Factory (ICF) unveiled the 16-coach Vande Bharat Sleeper prototype engineered for 160 km/h operational speeds on overnight intercity trunk routes. The train features crash-worthy austenitic steel car bodies, sensor-operated bio-vacuum toilets, and ergonomic berths with integrated USB fast charging.',
      hi: 'बीईएमएल (BEML) और इंटीग्रल कोच फैक्ट्री (ICF) ने 160 किमी/घंटा की परिचालन गति हेतु 16-डिब्बों वाली वंदे भारत स्लीपर ट्रेन का अनावरण किया। इसमें क्रैश-वर्दी स्टेनलेस स्टील डिब्बे, सेंसर-संचालित बायो-वैक्यूम शौचालय और एर्गोनोमिक बर्थ शामिल हैं।',
    },
    keyPoints: [
      { en: 'Total 16 coaches (11 AC 3-Tier, 4 AC 2-Tier, 1 First AC)', hi: 'कुल 16 डिब्बे (11 एसी 3-टियर, 4 एसी 2-टियर, 1 फर्स्ट एसी)' },
      { en: 'Designed for 160 km/h with potential to upgrade to 200 km/h', hi: '160 किमी/घंटा की गति हेतु डिजाइन, 200 किमी/घंटा तक अपग्रेड करने योग्य' },
    ],
    examRelevance: {
      en: 'Frequently asked under Modern Rolling Stock & Vande Bharat series.',
      hi: 'आधुनिक रोलिंग स्टॉक और वंदे भारत श्रृंखला के तहत नियमित रूप से पूछा जाने वाला प्रश्न।',
    },
    source: 'ICF Chennai / Railway Board Press Release',
  },
  {
    id: 'ca-rail-2026-03',
    date: '2026-08-20',
    category: 'Railways',
    headline: {
      en: 'Amrit Bharat Station Scheme Surpasses 500 Completed Station Redevelopments',
      hi: 'अमृत भारत स्टेशन योजना: 500 से अधिक रेलवे स्टेशनों का पुनर्विकास कार्य पूर्ण',
    },
    summary: {
      en: 'Under the flagship Amrit Bharat Station Scheme (ABSS), modern roof plazas, multi-modal transport hubs, Divyangjan-friendly access, 12-meter wide foot overbridges, and local artisan "One Station One Product" kiosks have been completed at over 500 stations out of 1,337 targeted stations across India.',
      hi: 'अमृत भारत स्टेशन योजना (ABSS) के तहत देश भर के 1,337 लक्षित स्टेशनों में से 500 से अधिक स्टेशनों पर रूफ प्लाजा, मल्टी-मॉडल कनेक्टिविटी, दिव्यांगजन-अनुकूल रैंप और "वन स्टेशन वन प्रोडक्ट" कियोस्क का निर्माण पूरा किया जा चुका है।',
    },
    examRelevance: {
      en: 'Top recurring question in Government Schemes and Infrastructure sections.',
      hi: 'सरकारी योजनाओं और अवसंरचना खंड में सर्वाधिक बार पूछा जाने वाला प्रश्न।',
    },
    source: 'Ministry of Railways Official Dashboard',
  },
  {
    id: 'ca-rail-2026-04',
    date: '2026-07-28',
    category: 'Railways',
    headline: {
      en: 'Trial Train Runs Completed on Chenab Rail Arch Bridge & Anji Khad Bridge on USBRL',
      hi: 'चिनाब आर्च ब्रिज एवं अंजी खड्ड केबल ब्रिज (USBRL परियोजना) पर सफल ट्रायल रन पूर्ण',
    },
    summary: {
      en: 'Northern Railway completed full-speed electric locomotive trial runs over the 359-meter-high Chenab Arch Bridge and the 193-meter pylon Anji Khad cable-stayed bridge on the Katra-Banihal section, establishing direct all-weather broad gauge rail connectivity between the Kashmir Valley and Kanyakumari.',
      hi: 'उत्तर रेलवे ने कटरा-बनिहाल खंड पर 359 मीटर ऊंचे चिनाब आर्च ब्रिज और 193 मीटर ऊंचे अंजी खड्ड केबल-स्टेड ब्रिज पर पूर्ण गति से विद्युत लोकोमोटिव का सफल ट्रायल पूरा किया, जिससे कश्मीर घाटी का कन्याकुमारी से सीधा रेल संपर्क स्थापित हुआ।',
    },
    keyPoints: [
      { en: 'World Highest Railway Arch Bridge: 359 meters above riverbed', hi: 'विश्व का सबसे ऊंचा रेलवे आर्च ब्रिज: नदी तल से 359 मीटर ऊंचा' },
      { en: 'India\'s First Cable-Stayed Railway Bridge: Anji Khad Bridge', hi: 'भारत का पहला केबल-आधारित रेलवे पुल: अंजी खड्ड पुल' },
    ],
    examRelevance: {
      en: 'Guaranteed question across all upcoming Railway CBT examinations.',
      hi: 'आगामी सभी रेलवे सीबीटी परीक्षाओं में 100% संभावित प्रश्न।',
    },
    source: 'Northern Railway / USBRL Project Directorate',
  },
  {
    id: 'ca-rail-2026-05',
    date: '2026-06-15',
    category: 'Railways',
    headline: {
      en: 'Indian Railways Tests India’s First Zero-Emission Hydrogen Train on Jind-Sonipat Section',
      hi: 'भारतीय रेल ने जींद-सोनीपत खंड पर भारत की पहली शून्य-उत्सर्जन हाइड्रोजन ट्रेन का परीक्षण किया',
    },
    summary: {
      en: 'Under the "Hydrogen for Heritage" programme, Indian Railways conducted trials of its first hydrogen fuel cell-powered passenger train on the 89-km Jind–Sonipat section in Haryana. The train replaces diesel traction with green hydrogen fuel cells and lithium-ion batteries, emitting only pure water vapor.',
      hi: '"हाइड्रोजन फॉर हेरिटेज" पहल के तहत हरियाणा के 89 किमी जींद-सोनीपत रेलमार्ग पर भारत की पहली हाइड्रोजन ईंधन सेल ट्रेन का परीक्षण किया गया। यह ट्रेन केवल शुद्ध जल वाष्प उत्सर्जित करती है और डीजल पर निर्भरता समाप्त करती है।',
    },
    examRelevance: {
      en: 'Science & Green Energy technology question for RRB JE & NTPC.',
      hi: 'आरआरबी जेई एवं एनटीपीसी हेतु विज्ञान और हरित ऊर्जा प्रौद्योगिकी का प्रश्न।',
    },
    source: 'RDSO Lucknow Green Energy Cell',
  },
  {
    id: 'ca-rail-2026-06',
    date: '2026-05-10',
    category: 'Railways',
    headline: {
      en: 'Namo Bharat Rapid Rail (Vande Metro) Launched for Short-Distance Intercity Travel',
      hi: 'कम दूरी की इंटरसिटी यात्रा हेतु नमो भारत रैपिड रेल (वंदे मेट्रो) सेवा प्रारंभ',
    },
    summary: {
      en: 'Indian Railways introduced the "Namo Bharat Rapid Rail" designed for rapid unreserved intercity commuting between cities within a 150-250 km radius. Featuring fully air-conditioned walkthrough coaches, automatic plug doors, rapid acceleration of 0.8 m/s², and top speed of 130 km/h.',
      hi: 'भारतीय रेल ने 150-250 किमी के दायरे में स्थित शहरों के बीच दैनिक यात्रियों हेतु "नमो भारत रैपिड रेल" शुरू की। इसमें पूर्णतः वातानुकूलित कोच, स्वचालित दरवाजे और 130 किमी/घंटा की गति है।',
    },
    examRelevance: {
      en: 'Urban & regional transport GK topic in RRB examinations.',
      hi: 'रेलवे परीक्षाओं में शहरी व क्षेत्रीय परिवहन सामान्य ज्ञान का विषय।',
    },
    source: 'PIB Delhi',
  },
  {
    id: 'ca-rail-2026-07',
    date: '2026-04-05',
    category: 'Railways',
    headline: {
      en: 'Broad Gauge Electrification Exceeds 96.5% of Entire Indian Railways Network',
      hi: 'भारतीय रेलवे के संपूर्ण ब्रॉड गेज नेटवर्क का विद्युतीकरण 96.5% के पार पहुंचा',
    },
    summary: {
      en: 'Central Organisation for Railway Electrification (CORE) and Zonal Railways announced that over 63,000 route kilometers of broad gauge lines have been energized with 25 kV AC electric traction, making Indian Railways the largest electrified railway system globally and moving towards Mission Net Zero Carbon by 2030.',
      hi: 'रेलवे विद्युतीकरण संगठन (CORE) ने घोषणा की कि 63,000 से अधिक रूट किलोमीटर ब्रॉड गेज लाइनों को 25 kV AC विद्युत ट्रैक्शन पर विद्युतीकृत कर दिया गया है, जिससे भारतीय रेल विश्व का सबसे बड़ा विद्युतीकृत रेल नेटवर्क बन गया है।',
    },
    examRelevance: {
      en: 'Key statistic tested under Environment & Sustainable Indian Railways.',
      hi: 'पर्यावरण एवं सतत विकास खंड में बार-बार पूछा जाने वाला संख्यात्मक तथ्य।',
    },
    source: 'CORE Prayagraj / Ministry of Railways',
  },
  {
    id: 'ca-rail-2026-08',
    date: '2026-03-20',
    category: 'Railways',
    headline: {
      en: 'Satish Kumar Appointed as Chairman & CEO of the Railway Board',
      hi: 'सतीश कुमार रेलवे बोर्ड के अध्यक्ष एवं मुख्य कार्यकारी अधिकारी (CEO) नियुक्त',
    },
    summary: {
      en: 'Shri Satish Kumar, a distinguished Indian Railway Service of Electrical Engineers (IRSEE) officer with over 34 years of experience, assumed charge as the Chairman & Chief Executive Officer (CEO) of the Railway Board, succeeding Jaya Varma Sinha.',
      hi: '34 वर्षों से अधिक का अनुभव रखने वाले वरिष्ठ आईआरएसईई (IRSEE) अधिकारी श्री सतीश कुमार ने जया वर्मा सिन्हा के स्थान पर रेलवे बोर्ड के नए अध्यक्ष एवं मुख्य कार्यकारी अधिकारी (CEO) का पदभार संभाला।',
    },
    examRelevance: {
      en: 'Essential current appointments question in all Railway exams.',
      hi: 'सभी रेलवे भर्ती परीक्षाओं में अनिवार्य रूप से पूछा जाने वाला नियुक्ति संबंधी प्रश्न।',
    },
    source: 'Appointments Committee of the Cabinet (ACC)',
  },

  // ==========================================
  // 2. NATIONAL AFFAIRS & GOVERNMENT SCHEMES
  // ==========================================
  {
    id: 'ca-nat-2026-09',
    date: '2026-08-30',
    category: 'National',
    headline: {
      en: 'PM-Surya Ghar: Muft Bijli Yojana Crosses 50 Lakh Household Rooftop Solar Registrations',
      hi: 'पीएम-सूर्य घर: मुफ्त बिजली योजना के तहत 50 लाख से अधिक परिवारों का पंजीकरण संपन्न',
    },
    summary: {
      en: 'The ₹75,021 crore national solar scheme aims to provide up to 300 units of free electricity per month to 1 crore households. Subsidies up to ₹78,000 are directly transferred into bank accounts for installing 3 kW rooftop solar plants.',
      hi: '₹75,021 करोड़ की इस राष्ट्रीय योजना का लक्ष्य 1 करोड़ परिवारों को प्रति माह 300 यूनिट तक मुफ्त बिजली प्रदान करना है। इसके तहत 3 किलोवाट तक के रूफटॉप सोलर पर ₹78,000 तक की प्रत्यक्ष सब्सिडी दी जा रही है।',
    },
    examRelevance: {
      en: 'Most asked government scheme in 2025–2026 recruitment examinations.',
      hi: '2025-2026 की परीक्षाओं में सर्वाधिक बार पूछी गई केंद्रीय योजना।',
    },
    source: 'Ministry of New and Renewable Energy (MNRE)',
  },
  {
    id: 'ca-nat-2026-10',
    date: '2026-08-25',
    category: 'National',
    headline: {
      en: 'Unified Pension Scheme (UPS) Approved for Central Government & Railway Employees',
      hi: 'केंद्र सरकार एवं रेलवे कर्मचारियों हेतु एकीकृत पेंशन योजना (UPS) को ऐतिहासिक मंजूरी',
    },
    summary: {
      en: 'The Union Cabinet approved the Unified Pension Scheme (UPS) ensuring an assured pension of 50% of the average basic pay drawn over the last 12 months prior to retirement for employees with at least 25 years of service, along with inflation indexation (DA relief).',
      hi: 'केंद्रीय मंत्रिमंडल ने एकीकृत पेंशन योजना (UPS) को मंजूरी दी, जिसमें न्यूनतम 25 वर्ष की सेवा वाले कर्मचारियों को सेवानिवृत्ति से पूर्व अंतिम 12 महीनों के औसत मूल वेतन का 50% सुनिश्चित पेंशन तथा महंगाई राहत (DR) दी जाएगी।',
    },
    examRelevance: {
      en: 'High relevance for government employee service rules and current affairs.',
      hi: 'सरकारी सेवा नियमों और समसामयिकी दोनों के लिए अत्यंत प्रासंगिक।',
    },
    source: 'Cabinet Committee on Economic Affairs (CCEA)',
  },
  {
    id: 'ca-nat-2026-11',
    date: '2026-07-15',
    category: 'National',
    headline: {
      en: 'India Semiconductor Mission: Commercial Chip Fabrication Begins in Dholera & Morigaon',
      hi: 'इंडिया सेमीकंडक्टर मिशन: धोलेरा (गुजरात) और मोरीगांव (असम) में चिप निर्माण इकाइयों की स्थापना',
    },
    summary: {
      en: 'Under the ₹76,000 crore India Semiconductor Mission (ISM), Tata Electronics in partnership with PSMC (Taiwan) commenced facility build-outs for India’s first commercial 28nm semiconductor wafer fab in Dholera, Gujarat, alongside OSAT packaging units in Morigaon (Assam) and Sanand (Gujarat).',
      hi: '₹76,000 करोड़ के सेमीकंडक्टर मिशन के तहत गुजरात के धोलेरा में भारत का पहला 28nm सेमीकंडक्टर फैब और असम के मोरीगांव में उन्नत पैकेजिंग प्लांट स्थापित किए जा रहे हैं।',
    },
    examRelevance: {
      en: 'Critical Science & Technology and Industrial Economy topic.',
      hi: 'विज्ञान, प्रौद्योगिकी और औद्योगिक अर्थव्यवस्था का महत्वपूर्ण विषय।',
    },
    source: 'Ministry of Electronics and IT (MeitY)',
  },
  {
    id: 'ca-nat-2026-12',
    date: '2026-06-25',
    category: 'National',
    headline: {
      en: 'Implementation of the Three New Criminal Laws: BNS, BNSS, and BSA Across India',
      hi: 'तीन नए आपराधिक कानूनों: बीएनएस (BNS), बीएनएसएस (BNSS) एवं बीएसए (BSA) का देशव्यापी क्रियान्वयन',
    },
    summary: {
      en: 'The Bharatiya Nyaya Sanhita (BNS), Bharatiya Nagarik Suraksha Sanhita (BNSS), and Bharatiya Sakshya Adhiniyam (BSA) came into nationwide effect, replacing the colonial-era Indian Penal Code (IPC 1860), Code of Criminal Procedure (CrPC 1898), and Indian Evidence Act (1872).',
      hi: 'औपनिवेशिक काल के आईपीसी 1860, सीआरपीसी 1898 और साक्ष्य अधिनियम 1872 के स्थान पर भारतीय न्याय संहिता (BNS), भारतीय नागरिक सुरक्षा संहिता (BNSS) और भारतीय साक्ष्य अधिनियम (BSA) लागू हुए।',
    },
    examRelevance: {
      en: 'Polity & Legal framework section in RRB NTPC CBT-1 and CBT-2.',
      hi: 'आरआरबी एनटीपीसी सीबीटी-1 और सीबीटी-2 के राजव्यवस्था खंड का प्रमुख विषय।',
    },
    source: 'Ministry of Home Affairs / Gazette of India',
  },

  // ==========================================
  // 3. SCIENCE, SPACE & DEFENCE TECHNOLOGY
  // ==========================================
  {
    id: 'ca-sci-2026-13',
    date: '2026-09-10',
    category: 'Science & Tech',
    headline: {
      en: 'Cabinet Approves Chandrayaan-4 Lunar Sample Return Mission and Venus Mission (Shukrayaan)',
      hi: 'केंद्रीय मंत्रिमंडल ने चंद्रयान-4 (चंद्रमा नमूना वापसी) एवं शुक्र मिशन (शुक्रयान) को मंजूरी दी',
    },
    summary: {
      en: 'The Union Cabinet sanctioned ₹2,104 crore for Chandrayaan-4, designed to land on the Moon, collect lunar rock and soil samples, and safely return them to Earth using a modular docking architecture. The cabinet also approved the Venus Orbiter Mission (Shukrayaan) to explore the atmosphere of Venus.',
      hi: 'केंद्रीय मंत्रिमंडल ने चंद्रयान-4 मिशन हेतु ₹2,104 करोड़ स्वीकृत किए, जो चंद्रमा से नमूने एकत्र कर पृथ्वी पर सुरक्षित वापस लाएगा। इसके साथ ही शुक्र ग्रह के अध्ययन हेतु शुक्रयान मिशन को भी मंजूरी दी गई।',
    },
    examRelevance: {
      en: 'ISRO space missions are universally tested in RRB exams.',
      hi: 'इसरो के अंतरिक्ष मिशन रेलवे परीक्षाओं में अनिवार्य रूप से पूछे जाते हैं।',
    },
    source: 'Department of Space / ISRO Press Release',
  },
  {
    id: 'ca-sci-2026-14',
    date: '2026-08-18',
    category: 'Science & Tech',
    headline: {
      en: 'ISRO Successfully Executes Gaganyaan Integrated Air-Drop & Humanoid Robot "Vyommitra" Trials',
      hi: 'इसरो ने गगनयान एयर-ड्रॉप और मानवरूपी रोबोट "व्योममित्र" के सफल परीक्षण पूरे किए',
    },
    summary: {
      en: 'ISRO and the Indian Air Force completed parachute deceleration tests and simulated micro-gravity operations for "Vyommitra" (half-humanoid robot) ahead of the maiden uncrewed orbital flight (Gaganyaan G1) aboard the LVM3 launch vehicle.',
      hi: 'इसरो ने एलवीएम3 रॉकेट से होने वाली पहली मानवरहित गगनयान कक्षा उड़ान (G1) से पूर्व पैराशूट परीक्षण और मानवरूपी रोबोट "व्योममित्र" के सिम्युलेशन परीक्षण सफलतापूर्वक पूरे किए।',
    },
    examRelevance: {
      en: 'Frequently asked Science & Technology question.',
      hi: 'विज्ञान और प्रौद्योगिकी खंड में नियमित रूप से पूछा जाने वाला प्रश्न।',
    },
    source: 'ISRO Official Update',
  },
  {
    id: 'ca-sci-2026-15',
    date: '2026-07-02',
    category: 'Science & Tech',
    headline: {
      en: 'India’s Second Nuclear-Powered Submarine INS Arighaat Commissioned at Visakhapatnam',
      hi: 'भारत की दूसरी परमाणु चालित बैलिस्टिक मिसाइल पनडुब्बी आईएनएस अरिघात (INS Arighaat) नौसेना में शामिल',
    },
    summary: {
      en: 'India commissioned its second indigenous nuclear-powered ballistic missile submarine (SSBN) INS Arighaat into the Indian Navy at Visakhapatnam. Armed with nuclear-capable K-15 Sagarika submarine-launched ballistic missiles (SLBMs), it significantly strengthens India’s nuclear triad deterrence.',
      hi: 'विशाखापट्टनम में भारत की दूसरी स्वदेशी परमाणु चालित बैलिस्टिक मिसाइल पनडुब्बी INS अरिघात को नौसेना में शामिल किया गया। यह K-15 सागरिका मिसाइलों से लैस है और भारत की परमाणु त्रिमूर्ति को सुदृढ़ करती है।',
    },
    examRelevance: {
      en: 'Important Defence & National Security topic.',
      hi: 'रक्षा एवं राष्ट्रीय सुरक्षा खंड हेतु महत्वपूर्ण प्रश्न।',
    },
    source: 'Ministry of Defence / Indian Navy',
  },
  {
    id: 'ca-sci-2026-16',
    date: '2026-05-20',
    category: 'Science & Tech',
    headline: {
      en: 'IndiaAI Mission: ₹10,372 Crore Allocation for Sovereign Supercomputing GPU Clusters',
      hi: 'इंडिया एआई (IndiaAI) मिशन: 10,000+ जीपीयू वाले संप्रभु सुपरकंप्यूटिंग क्लस्टर हेतु ₹10,372 करोड़ स्वीकृत',
    },
    summary: {
      en: 'The Government of India approved the comprehensive IndiaAI Mission aimed at democratizing AI computing power by creating a centralized national cluster of 10,000+ GPUs to support startups, scientific researchers, and public transportation logistics.',
      hi: 'भारत सरकार ने देश में 10,000 से अधिक जीपीयू (GPU) की क्षमता वाला सुपरकंप्यूटिंग इंफ्रास्ट्रक्चर बनाने हेतु इंडिया एआई मिशन को मंजूरी दी, जिससे परिवहन, कृषि और स्वास्थ्य में स्वदेशी एआई मॉडल विकसित किए जा सकें।',
    },
    examRelevance: {
      en: 'High relevance for Computer & IT basics and current affairs.',
      hi: 'कंप्यूटर ज्ञान और समसामयिकी दोनों के लिए अत्यंत महत्वपूर्ण।',
    },
    source: 'Ministry of Electronics and Information Technology (MeitY)',
  },

  // ==========================================
  // 4. ECONOMY & UNION BUDGET HIGHLIGHTS
  // ==========================================
  {
    id: 'ca-eco-2026-17',
    date: '2026-08-01',
    category: 'Economy',
    headline: {
      en: 'Union Budget Allocates Record ₹2.55 Lakh Crore Capital Expenditure to Railways',
      hi: 'केंद्रीय बजट में रेलवे को ₹2.55 लाख करोड़ का अब तक का रिकॉर्ड पूंजीगत परिव्यय (Capex) आवंटित',
    },
    summary: {
      en: 'The Union Budget provided a historic capital allocation of ₹2,55,393 crore for Indian Railways focusing on three dedicated economic railway corridors: Energy, Mineral and Cement Corridors; Port Connectivity Corridors; and High Traffic Density Corridors.',
      hi: 'केंद्रीय बजट में भारतीय रेल के लिए ₹2,55,393 करोड़ का रिकॉर्ड पूंजीगत आवंटन किया गया। इसका मुख्य ध्यान तीन आर्थिक गलियारों (ऊर्जा, खनिज व सीमेंट गलियारा; बंदरगाह कनेक्टिविटी; एवं उच्च यातायात घनत्व गलियारा) पर है।',
    },
    keyPoints: [
      { en: 'Total Capex: ₹2,55,393 Crore', hi: 'कुल पूंजीगत व्यय: ₹2,55,393 करोड़' },
      { en: '40,000 normal rail coaches to be converted to Vande Bharat standards', hi: '40,000 सामान्य रेल डिब्बों को वंदे भारत मानकों में अपग्रेड किया जाएगा' },
    ],
    examRelevance: {
      en: 'Direct budget figures are asked in RRB NTPC Graduate & JE.',
      hi: 'आरआरबी एनटीपीसी स्नातक और जेई में सीधे बजट आंकड़ों पर आधारित प्रश्न।',
    },
    source: 'Union Budget Documents / Ministry of Finance',
  },
  {
    id: 'ca-eco-2026-18',
    date: '2026-07-10',
    category: 'Economy',
    headline: {
      en: 'Gross GST Revenue Collections Cross ₹1.85 Lakh Crore Mark Consistently',
      hi: 'सकल जीएसटी (GST) राजस्व संग्रह निरंतर ₹1.85 लाख करोड़ के आंकड़े को पार कर गया',
    },
    summary: {
      en: 'Monthly Gross Goods and Services Tax (GST) collections maintained record buoyancy, averaging over ₹1.80–1.87 lakh crore monthly, driven by domestic transaction compliance and electronic e-way bill generation for rail and road freight.',
      hi: 'घरेलू आर्थिक गतिविधियों और ई-वे बिल प्रणाली के कारण मासिक जीएसटी संग्रह निरंतर ₹1.80 से ₹1.87 लाख करोड़ के पार रहा, जो मजबूत आर्थिक विकास को दर्शाता है।',
    },
    examRelevance: {
      en: 'Tested under Indian Economy and Fiscal indicators.',
      hi: 'भारतीय अर्थव्यवस्था और राजकोषीय संकेतकों के तहत पूछा जाने वाला प्रश्न।',
    },
    source: 'Ministry of Finance Press Release',
  },
  {
    id: 'ca-eco-2026-19',
    date: '2026-06-05',
    category: 'Economy',
    headline: {
      en: 'India Retains World’s Fastest-Growing Major Economy Status with 7.2% GDP Growth',
      hi: 'भारत 7.2% की जीडीपी विकास दर के साथ विश्व की सबसे तेजी से बढ़ती प्रमुख अर्थव्यवस्था बना रहा',
    },
    summary: {
      en: 'The National Statistical Office (NSO) and RBI confirmed India\'s real GDP expansion at 7.2% for the fiscal year, outperforming global emerging markets, powered by robust public capital expenditure, manufacturing expansion, and services trade.',
      hi: 'राष्ट्रीय सांख्यिकी कार्यालय (NSO) और आरबीआई के अनुसार भारत की वास्तविक जीडीपी वृद्धि दर 7.2% रही, जिससे भारत विश्व की सबसे तेजी से विकसित होती प्रमुख अर्थव्यवस्था बना रहा।',
    },
    examRelevance: {
      en: 'Foundational macroeconomic indicator for all competitive exams.',
      hi: 'सभी प्रतियोगी परीक्षाओं हेतु बुनियादी व्यापक आर्थिक संकेतक।',
    },
    source: 'NSO / Reserve Bank of India (RBI)',
  },

  // ==========================================
  // 5. SPORTS & GLOBAL AWARDS
  // ==========================================
  {
    id: 'ca-spt-2026-20',
    date: '2026-09-23',
    category: 'Sports',
    headline: {
      en: 'Historic Double Gold for India at the 45th FIDE Chess Olympiad in Budapest',
      hi: 'बुडापेस्ट में 45वें शतरंज ओलंपियाड में भारत ने जीता ऐतिहासिक दोहरा स्वर्ण पदक (ओपन एवं महिला वर्ग)',
    },
    summary: {
      en: 'India created history by winning gold medals in BOTH the Open and Women’s categories at the 45th Chess Olympiad in Budapest, Hungary. The Open team was led by D Gukesh and Arjun Erigaisi, while the Women’s team was led by Harika Dronavalli, Divya Deshmukh, and Vantika Agrawal.',
      hi: 'हंगरी के बुडापेस्ट में आयोजित 45वें शतरंज ओलंपियाड में भारत ने ओपन और महिला दोनों श्रेणियों में स्वर्ण पदक जीतकर नया इतिहास रचा। डी गुकेश, अर्जुन एरिगैसी, दिव्या देशमुख और वंतिका अग्रवाल ने शानदार प्रदर्शन किया।',
    },
    keyPoints: [
      { en: 'Venue: Budapest, Hungary', hi: 'स्थान: बुडापेस्ट, हंगरी' },
      { en: 'Individual Individual Gold: D Gukesh (Board 1), Arjun Erigaisi (Board 3), Divya Deshmukh (Board 3)', hi: 'व्यक्तिगत स्वर्ण: डी गुकेश, अर्जुन एरिगैसी, दिव्या देशमुख' },
    ],
    examRelevance: {
      en: 'Guaranteed top sports question in RRB NTPC & Group D.',
      hi: 'आरआरबी एनटीपीसी एवं ग्रुप डी में सर्वाधिक संभावित खेल संबंधी प्रश्न।',
    },
    source: 'FIDE Official Tournament Report',
  },
  {
    id: 'ca-spt-2026-21',
    date: '2026-09-08',
    category: 'Sports',
    headline: {
      en: 'India Finishes Paris Paralympics with Record 29 Medals Including 7 Golds',
      hi: 'भारत ने पेरिस पैरालंपिक 2024 में 7 स्वर्ण सहित रिकॉर्ड 29 पदकों के साथ समापन किया',
    },
    summary: {
      en: 'Indian para-athletes registered their best-ever performance at the Paris Paralympic Games, clinching 29 medals (7 Gold, 9 Silver, 13 Bronze). Gold medalists included Navdeep Singh (Men’s Javelin F41), Sumit Antil (Men’s Javelin F64), Avani Lekhara (10m Air Rifle SH1), and Nitesh Kumar (Para Badminton).',
      hi: 'भारतीय पैरा-एथलीटों ने पेरिस पैरालंपिक में 7 स्वर्ण, 9 रजत और 13 कांस्य सहित कुल 29 पदक जीतकर ऐतिहासिक प्रदर्शन किया। नवदीप सिंह (भाला फेंक), सुमित अंतिल (भाला फेंक), और अवनि लेखरा (निशानेबाजी) ने स्वर्ण पदक जीते।',
    },
    keyPoints: [
      { en: 'Total Medals: 29 (7 Gold, 9 Silver, 13 Bronze) - 18th in medal tally', hi: 'कुल पदक: 29 (7 स्वर्ण, 9 रजत, 13 कांस्य) - पदक तालिका में 18वां स्थान' },
      { en: 'Sumit Antil retained his javelin Gold medal with Paralympic record', hi: 'सुमित अंतिल ने पैरालंपिक रिकॉर्ड के साथ अपना स्वर्ण पदक बरकरार रखा' },
    ],
    examRelevance: {
      en: 'Universal sports question in all Railway exam shifts.',
      hi: 'सभी रेलवे परीक्षा शिफ्टों में अनिवार्य रूप से पूछा जाने वाला खेल प्रश्न।',
    },
    source: 'Paralympic Committee of India / Paris 2024 Organising Committee',
  },
  {
    id: 'ca-spt-2026-22',
    date: '2026-08-12',
    category: 'Sports',
    headline: {
      en: 'Paris Olympics 2024: Manu Bhaker Becomes First Independent Indian to Win Two Medals at a Single Olympics',
      hi: 'पेरिस ओलंपिक: मनु भाकर एक ही ओलंपिक में दो पदक जीतने वाली स्वतंत्र भारत की पहली एथलीट बनीं',
    },
    summary: {
      en: 'Manu Bhaker won two bronze medals in shooting (Women’s 10m Air Pistol and Mixed Team 10m Air Pistol with Sarabjot Singh). Neeraj Chopra secured silver in Men\'s Javelin Throw, and Aman Sehrawat won bronze in Men\'s 57kg Wrestling.',
      hi: 'मनु भाकर ने निशानेबाजी में दो कांस्य पदक जीतकर इतिहास रचा। नीरज चोपड़ा ने भाला फेंक में रजत पदक और अमन सहरावत ने कुश्ती में कांस्य पदक जीता।',
    },
    examRelevance: {
      en: 'Key Olympic trivia asked in General Awareness.',
      hi: 'सामान्य ज्ञान में पूछे जाने वाले प्रमुख ओलंपिक तथ्य।',
    },
    source: 'Indian Olympic Association (IOA)',
  },
  {
    id: 'ca-spt-2026-23',
    date: '2026-06-29',
    category: 'Sports',
    headline: {
      en: 'India Wins ICC Men’s T20 World Cup in Barbados Defeating South Africa',
      hi: 'भारत ने बारबाडोस में दक्षिण अफ्रीका को हराकर आईसीसी पुरुष टी20 विश्व कप जीता',
    },
    summary: {
      en: 'Led by Rohit Sharma, India clinched the ICC Men’s T20 World Cup title in Bridgetown, Barbados, remaining undefeated throughout the tournament. Virat Kohli was named Player of the Match in the final, and Jasprit Bumrah was awarded Player of the Tournament.',
      hi: 'रोहित शर्मा के नेतृत्व में भारत ने दक्षिण अफ्रीका को 7 रनों से हराकर टी20 विश्व कप जीता। जसप्रीत बुमराह को प्लेयर ऑफ द टूर्नामेंट और विराट कोहली को फाइनल में प्लेयर ऑफ द मैच चुना गया।',
    },
    examRelevance: {
      en: 'Frequently asked cricket and sports trophy question.',
      hi: 'क्रिकेट एवं खेलकूद ट्रॉफियों संबंधी नियमित प्रश्न।',
    },
    source: 'International Cricket Council (ICC)',
  },

  // ==========================================
  // 6. AWARDS & KEY NATIONAL HONORS
  // ==========================================
  {
    id: 'ca-awd-2026-24',
    date: '2026-04-10',
    category: 'Awards & Honors',
    headline: {
      en: 'Government Confers Bharat Ratna Upon Five Eminent Personalities',
      hi: 'सरकार द्वारा पांच महान विभूतियों को देश के सर्वोच्च नागरिक सम्मान भारत रत्न से अलंकृत किया गया',
    },
    summary: {
      en: 'The President of India conferred the Bharat Ratna upon: 1) Karpoori Thakur (social justice pioneer & former Bihar CM); 2) Lal Krishna Advani (former Deputy Prime Minister); 3) P. V. Narasimha Rao (former Prime Minister & economic reformer); 4) Chaudhary Charan Singh (former Prime Minister & farmers\' leader); and 5) Dr. M. S. Swaminathan (Father of the Indian Green Revolution).',
      hi: 'राष्ट्रपति द्वारा कर्पूरी ठाकुर, लाल कृष्ण आडवाणी, पी. वी. नरसिम्हा राव, चौधरी चरण सिंह, और डॉ. एम. एस. स्वामीनाथन को मरणोपरांत/प्रत्यक्ष रूप से भारत रत्न से सम्मानित किया गया।',
    },
    keyPoints: [
      { en: 'Highest civilian award established in 1954', hi: '1954 में स्थापित सर्वोच्च नागरिक सम्मान' },
      { en: 'Dr. M. S. Swaminathan: Agricultural scientist who pioneered Green Revolution in India', hi: 'डॉ. एम. एस. स्वामीनाथन: भारत में हरित क्रांति के जनक' },
    ],
    examRelevance: {
      en: 'Highest-yield awards question for RRB NTPC CBT-1 & Group D.',
      hi: 'आरआरबी एनटीपीसी सीबीटी-1 एवं ग्रुप डी हेतु सर्वोच्च संभावित पुरस्कार प्रश्न।',
    },
    source: 'Rashtrapati Bhavan Official Notification',
  },
  {
    id: 'ca-awd-2026-25',
    date: '2026-03-15',
    category: 'Awards & Honors',
    headline: {
      en: 'Dadasaheb Phalke Lifetime Achievement Award Conferred on Mithun Chakraborty',
      hi: 'अभिनेता मिथुन चक्रवर्ती को 70वें राष्ट्रीय फिल्म पुरस्कारों में दादा साहब फाल्के पुरस्कार से सम्मानित किया गया',
    },
    summary: {
      en: 'Legendary Indian actor, producer, and social worker Mithun Chakraborty was conferred India\'s highest award in the field of cinema—the Dadasaheb Phalke Award—for his iconic contributions to Indian cinema across five decades.',
      hi: 'भारतीय सिनेमा में पांच दशकों के उत्कृष्ट योगदान हेतु दिग्गज अभिनेता मिथुन चक्रवर्ती को सिनेमा के सर्वोच्च सम्मान दादा साहब फाल्के लाइफटाइम अचीवमेंट पुरस्कार से सम्मानित किया गया।',
    },
    examRelevance: {
      en: 'Tested regularly in Cinema & Cultural Awards portion.',
      hi: 'सिनेमा और सांस्कृतिक पुरस्कार वाले भाग में नियमित रूप से पूछा जाने वाला प्रश्न।',
    },
    source: 'Ministry of Information and Broadcasting',
  },
  {
    id: 'ca-awd-2026-26',
    date: '2026-01-26',
    category: 'Awards & Honors',
    headline: {
      en: 'Padma Awards 2026: 132 Distinguished Citizens Honored for Exceptional Service',
      hi: 'पद्म पुरस्कार: कला, सामाजिक कार्य, विज्ञान और साहित्य में 132 नागरिकों को सम्मान',
    },
    summary: {
      en: 'The President conferred 5 Padma Vibhushan, 17 Padma Bhushan, and 110 Padma Shri awards. Padma Vibhushan recipients included former Vice President M. Venkaiah Naidu, legendary actress Vyjayanthimala Bali, classical dancer Padma Subrahmanyam, actor Konidela Chiranjeevi, and social reformer Bindeshwar Pathak (posthumous - founder of Sulabh International).',
      hi: 'एम. वेंकैया नायडू, वैजयंतीमाला बाली, पद्मा सुब्रह्मण्यम, चिरंजीवी और बिंदेश्वर पाठक (मरणोपरांत) को पद्म विभूषण से सम्मानित किया गया।',
    },
    examRelevance: {
      en: 'Padma Vibhushan recipients list is a staple RRB GA question.',
      hi: 'पद्म विभूषण प्राप्तकर्ताओं की सूची रेलवे सामान्य जागरूकता का अनिवार्य प्रश्न है।',
    },
    source: 'Ministry of Home Affairs / Press Information Bureau',
  },
];
