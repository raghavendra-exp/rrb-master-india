import type { BilingualText } from '../../types';

export interface RailwayBlueprint {
  id: string;
  src: string;
  title: BilingualText;
  badge: BilingualText;
  category: 'track_signaling' | 'traction_loco' | 'kavach_atp' | 'network_zones' | 'fleet_operations';
  shortDesc: BilingualText;
  detailedSpecs: {
    label: BilingualText;
    value: BilingualText;
  }[];
  keyTakeaways: BilingualText[];
  examQuestions: {
    question: BilingualText;
    answer: BilingualText;
    examTag: string;
  }[];
}

export const RAILWAY_BLUEPRINTS: RailwayBlueprint[] = [
  {
    id: 'signals-track',
    src: './assets/rrb_railway_signals_track.jpg',
    badge: {
      en: 'P-Way Track Anatomy & MACLS Signals',
      hi: 'पी-वे ट्रैक संरचना एवं 4-एस्पेक्ट सिग्नलिंग',
    },
    title: {
      en: 'Broad Gauge (1676 mm) Track Cross-Section & Four-Aspect Color Light Signaling (MACLS)',
      hi: 'ब्रॉड गेज (1676 मिमी) ट्रैक क्रॉस-सेक्शन एवं 4-एस्पेक्ट कलर लाइट सिग्नलिंग (MACLS)',
    },
    category: 'track_signaling',
    shortDesc: {
      en: 'Detailed civil engineering blueprint of Indian Railways Broad Gauge 1676 mm track, showing UIC 60 kg/m rail (head, web, foot), ERC Mark-V clips, PSC sleepers, 300 mm ballast cushion, cant/super-elevation, and 4-aspect signal aspects (Red, Yellow, Double Yellow, Green).',
      hi: 'भारतीय रेल ब्रॉड गेज (1676 मिमी) का विस्तृत इंजीनियरिंग आरेख: यूआईसी 60 किग्रा/मी रेल, ईआरसी मार्क-V क्लिप, पीएससी स्लीपर, 300 मिमी गिट्टी कुशन, कैंट सुपर-एलिवेशन एवं 4-एस्पेक्ट कलर लाइट सिग्नल (लाल, पीला, दोहरा पीला, हरा)।',
    },
    detailedSpecs: [
      {
        label: { en: 'Track Gauge Width', hi: 'ट्रैक गेज चौड़ाई' },
        value: { en: '1676 mm (5 ft 6 in) standard Broad Gauge', hi: '1676 मिमी (5 फीट 6 इंच) मानक ब्रॉड गेज' },
      },
      {
        label: { en: 'Standard Rail Section', hi: 'मानक रेल सेक्शन' },
        value: { en: 'UIC 60 kg/m (172 mm height, 90 UTS steel)', hi: 'यूआईसी 60 किग्रा/मी (172 मिमी ऊंचाई, 90 यूटीएस इस्पात)' },
      },
      {
        label: { en: 'Sleeper Type & Fasteners', hi: 'स्लीपर प्रकार एवं फास्टनर' },
        value: { en: 'Pre-stressed Concrete (PSC) Sleeper with ERC Mark-V Pandrol Clips', hi: 'पीएससी कंक्रीट स्लीपर एवं ईआरसी मार्क-V पेंड्रोल क्लिप' },
      },
      {
        label: { en: 'Clean Ballast Cushion', hi: 'साफ गिट्टी की गहराई' },
        value: { en: '300 mm to 350 mm under sleeper on Group A trunk routes', hi: 'ग्रुप ए मुख्य मार्गों पर स्लीपर के नीचे 300 से 350 मिमी' },
      },
      {
        label: { en: 'Cant / Super-elevation Formula', hi: 'कैंट / सुपर-एलिवेशन सूत्र' },
        value: { en: 'e = (G × V²) / (127 × R) where G = 1750 mm dynamic gauge', hi: 'e = (G × V²) / (127 × R) जहां G = 1750 मिमी डायनामिक गेज' },
      },
      {
        label: { en: 'Signaling Hierarchy', hi: 'सिग्नल पदानुक्रम' },
        value: { en: 'Distant Signal → Inner Distant → Home Signal → Starter Signal', hi: 'डिस्टेंस सिग्नल → इनर डिस्टेंस → होम सिग्नल → स्टार्टर सिग्नल' },
      },
    ],
    keyTakeaways: [
      {
        en: 'Broad Gauge (1676 mm) forms >95% of Indian Railways active passenger and freight network under Project Unigauge.',
        hi: 'प्रोजेक्ट यूनिगेज के तहत ब्रॉड गेज (1676 मिमी) भारतीय रेल के 95% से अधिक सक्रिय नेटवर्क का आधार है।',
      },
      {
        en: 'Double Yellow aspect signals "Attention": Proceed with caution and be prepared to pass the next signal at restricted speed (indicates train is being diverted to a loop line).',
        hi: 'दोहरा पीला (Double Yellow) "अटेंशन" दर्शाता है: सावधानीपूर्वक आगे बढ़ें और अगले सिग्नल पर सीमित गति में रहने हेतु तैयार रहें (लूप लाइन डायवर्जन)।',
      },
      {
        en: 'UIC 60 kg/m rail carries axle loads up to 25 to 30 tonnes, vital for 130–160 km/h Vande Bharat operations and freight corridors.',
        hi: 'यूआईसी 60 किग्रा/मी रेल 25 से 30 टन एक्सल लोड वहन करती है, जो 130-160 किमी/घंटा वंदे भारत और माल ढुलाई के लिए आवश्यक है।',
      },
    ],
    examQuestions: [
      {
        question: {
          en: 'What is the standard track gauge distance between inner faces of rail heads on Indian Railways Broad Gauge?',
          hi: 'भारतीय रेलवे के ब्रॉड गेज पर रेल शीर्षों के भीतरी किनारों के बीच मानक दूरी कितनी होती है?',
        },
        answer: {
          en: '1676 mm (5 feet 6 inches)',
          hi: '1676 मिमी (5 फीट 6 इंच)',
        },
        examTag: 'RRB NTPC & Group D',
      },
      {
        question: {
          en: 'What does a "Double Yellow" light signal in 4-aspect automatic signaling indicate to the loco pilot?',
          hi: '4-एस्पेक्ट ऑटोमैटिक सिग्नलिंग में लोको पायलट को "डबल येलो" (दोहरी पीली) बत्ती क्या संकेत देती है?',
        },
        answer: {
          en: 'Attention: Proceed cautiously and be prepared to pass next signal at caution (or turnout loop line)',
          hi: 'अटेंशन (सावधान): सावधानी से आगे बढ़ें और अगले सिग्नल को प्रतिबंधित गति से पार करने को तैयार रहें',
        },
        examTag: 'RRB JE & NTPC CBT-2',
      },
      {
        question: {
          en: 'What is the formula for Equilibrium Super-elevation (e) on a curved railway track?',
          hi: 'रेलवे वक्राकार ट्रैक पर संतुलन सुपर-एलिवेशन (e) की गणना का सूत्र क्या है?',
        },
        answer: {
          en: 'e = (G × V²) / (127 × R) where G = Gauge width, V = Speed in km/h, R = Radius in metres',
          hi: 'e = (G × V²) / (127 × R) जहां G = गेज, V = गति (किमी/घंटा), R = वक्र की त्रिज्या (मीटर)',
        },
        examTag: 'RRB JE Civil Core',
      },
    ],
  },
  {
    id: 'loco-traction',
    src: './assets/rrb_railway_loco_traction.jpg',
    badge: {
      en: '25 kV Traction & Locomotive Code',
      hi: '25 kV विद्युत कर्षण एवं लोको कोड',
    },
    title: {
      en: '25 kV AC Electric Traction, Overhead Equipment (OHE) & Locomotive Nomenclature',
      hi: '25 kV AC विद्युत कर्षण, ओवरहेड तार प्रणाली (OHE) एवं लोकोमोटिव वर्गीकरण',
    },
    category: 'traction_loco',
    shortDesc: {
      en: 'Engineering schematic of Indian Railways 25 kV AC 50 Hz single-phase traction power flow, OHE catenary/dropper/contact wire system, locomotive pantograph, traction transformer, 3-phase induction traction motors, decoded locomotive nomenclature (WAP-7 & WAG-12), and LHB coach with FIAT bogie.',
      hi: '25,000 वोल्ट एसी 50 हर्ट्ज विद्युत कर्षण प्रवाह, ओएचई कैटेनरी/कॉन्टैक्ट वायर, पेंटोग्राफ, ट्रैक्शन ट्रांसफार्मर, 3-फेज मोटर, लोकोमोटिव नामकरण कोड (WAP-7 एवं WAG-12) तथा एलएचबी कोच और फिएट बोगी का विस्तृत आरेख।',
    },
    detailedSpecs: [
      {
        label: { en: 'OHE Voltage & Frequency', hi: 'ओएचई वोल्टेज एवं आवृत्ति' },
        value: { en: '25,000 Volts (25 kV) AC, 50 Hz Single Phase', hi: '25,000 वोल्ट (25 kV) AC, 50 Hz सिंगल फेज' },
      },
      {
        label: { en: 'Normal Contact Wire Height', hi: 'सामान्य कॉन्टैक्ट वायर ऊंचाई' },
        value: { en: '5.60 metres above rail level (7.45 m on Western DFC for double-stack containers)', hi: 'रेल स्तर से 5.60 मीटर (पश्चिमी डीएफसी पर डबल-स्टैक कंटेनर हेतु 7.45 मीटर)' },
      },
      {
        label: { en: 'Loco Nomenclature Letters', hi: 'लोकोमोटिव नामकरण अक्षर' },
        value: { en: '1st = Gauge (W/Y/Z), 2nd = Power (A=AC, D=Diesel), 3rd = Service (P=Passenger, G=Goods, M=Mixed)', hi: '1st = गेज (W), 2nd = कर्षण (A=विद्युत, D=डीजल), 3rd = सेवा (P=यात्री, G=मालगाड़ी)' },
      },
      {
        label: { en: 'WAP-7 Locomotive Power', hi: 'WAP-7 लोकोमोटिव पावर' },
        value: { en: '6,350 Horsepower (4,740 kW), 140–160 km/h top speed, Co-Co bogie', hi: '6,350 हॉर्सपावर (4,740 kW), 140–160 किमी/घंटा, Co-Co बोगी' },
      },
      {
        label: { en: 'WAG-12B Twin Locomotive', hi: 'WAG-12B ट्विन लोकोमोटिव' },
        value: { en: '12,000 Horsepower (9,000 kW), Bo-Bo + Bo-Bo axle arrangement, 6000T haulage', hi: '12,000 हॉर्सपावर (9,000 kW), Bo-Bo + Bo-Bo व्यवस्था, 6000 टन क्षमता' },
      },
      {
        label: { en: 'Passenger Coach Bogie', hi: 'यात्री डिब्बा बोगी' },
        value: { en: 'LHB Stainless Steel body with German FIAT bogie, axle-mounted disc brakes', hi: 'एलएचबी स्टेनलेस स्टील बॉडी, जर्मन फिएट बोगी, एक्सल-माउंटेड डिस्क ब्रेक' },
      },
    ],
    keyTakeaways: [
      {
        en: 'The return traction current flows from the locomotive wheels through the rails and return conductors back to the traction substation (TSS).',
        hi: 'विद्युत कर्षण का रिटर्न करंट लोकोमोटिव के पहियों से होकर पटरियों तथा रिटर्न कंडक्टरों के माध्यम से ट्रैक्शन सबस्टेशन (TSS) में लौटता है।',
      },
      {
        en: 'LHB coaches feature anti-telescopic construction and Center Buffer Couplers (CBC) that prevent coaches from climbing on top of each other during collisions.',
        hi: 'एलएचबी कोचों में एंटी-टेलीस्कोपिक तकनीक और सीबीसी कपलर होते हैं जो दुर्घटना के समय डिब्बों को एक-दूसरे के ऊपर चढ़ने से रोकते हैं।',
      },
      {
        en: 'Regenerative braking in 3-phase electric locomotives feeds electrical energy back into the 25 kV overhead grid during deceleration.',
        hi: '3-फेज इलेक्ट्रिक लोकोमोटिव में रीजेनेरेटिव ब्रेकिंग ट्रेन रुकते समय बिजली को वापस 25 kV ओएचई ग्रिड में फीड करती है।',
      },
    ],
    examQuestions: [
      {
        question: {
          en: 'What does the abbreviation "WAP" stand for in an Indian Railways electric locomotive like WAP-7?',
          hi: 'भारतीय रेलवे के इलेक्ट्रिक लोकोमोटिव WAP-7 में "WAP" का क्या अर्थ है?',
        },
        answer: {
          en: 'W = Broad Gauge (1676 mm), A = AC Electric Traction, P = Passenger Service',
          hi: 'W = ब्रॉड गेज (1676 मिमी), A = एसी इलेक्ट्रिक कर्षण, P = यात्री सेवा (Passenger)',
        },
        examTag: 'RRB NTPC, Group D & JE',
      },
      {
        question: {
          en: 'What type of braking system is equipped on modern LHB coaches in Indian Railways?',
          hi: 'भारतीय रेलवे के आधुनिक एलएचबी (LHB) कोचों में किस प्रकार की ब्रेक प्रणाली होती है?',
        },
        answer: {
          en: 'Axle-Mounted Disc Brake System with Wheel Slide Protection (WSP)',
          hi: 'एक्सल-माउंटेड डिस्क ब्रेक प्रणाली व्हील स्लाइड प्रोटेक्शन (WSP) सहित',
        },
        examTag: 'RRB JE Mechanical & NTPC',
      },
      {
        question: {
          en: 'What is the horsepower of India’s most powerful electric freight locomotive, the WAG-12B?',
          hi: 'भारत के सबसे शक्तिशाली मालगाड़ी इलेक्ट्रिक लोकोमोटिव WAG-12B की अश्वशक्ति (Horsepower) कितनी है?',
        },
        answer: {
          en: '12,000 Horsepower (manufactured at Madhepura, Bihar in joint venture with Alstom)',
          hi: '12,000 हॉर्सपावर (मधेपुरा, बिहार में एल्सटॉम के सहयोग से निर्मित)',
        },
        examTag: 'RRB NTPC & General Awareness',
      },
    ],
  },
  {
    id: 'kavach-atp',
    src: './assets/rrb_railway_kavach_atp.jpg',
    badge: {
      en: 'Kavach 4.0 Anti-Collision ATP',
      hi: 'कवच 4.0 टक्कर-रोधी सुरक्षा प्रणाली',
    },
    title: {
      en: 'KAVACH 4.0: Comprehensive Automatic Train Protection (ATP) System Architecture',
      hi: 'कवच 4.0: संपूर्ण स्वचालित ट्रेन सुरक्षा (ATP) प्रणाली वास्तुकला एवं तकनीक',
    },
    category: 'kavach_atp',
    shortDesc: {
      en: 'Complete technical overview of Indian Railways indigenously developed SIL-4 KAVACH 4.0 ATP system: Loco Unit (DMI console, Vital Computer, Brake Interface Unit, RFID Reader), Trackside equipment (sleeper RFID tags, Station Electronic Interlocking, UHF 400 MHz radio tower), automated SPAD braking, head-on collision avoidance, and auto-whistling.',
      hi: 'आरडीएसओ द्वारा विकसित स्वदेशी SIL-4 कवच 4.0 प्रणाली: लोको यूनिट (DMI डिस्प्ले, वाइटल कंप्यूटर, बीआईयू ब्रेक इंटरफेस, आरएफआईडी रीडर), ट्रैकसाइड उपकरण (स्लीपर टैग, स्टेशन ईआई, यूएचएफ 400 मेगाहर्ट्ज टावर), एसपीएडी आपातकालीन ब्रेक, सीधी टक्कर रोकथाम एवं ऑटो-सीटी।',
    },
    detailedSpecs: [
      {
        label: { en: 'Safety Standard Certification', hi: 'संरक्षा मानक प्रमाणीकरण' },
        value: { en: 'Safety Integrity Level 4 (SIL-4) - Error probability < 1 in 10,000 years', hi: 'सेफ्टी इंटीग्रिटी लेवल 4 (SIL-4) - त्रुटि संभावना 10,000 वर्ष में 1 से कम' },
      },
      {
        label: { en: 'Wireless Communication Band', hi: 'वायरलेस संचार फ्रीक्वेंसी' },
        value: { en: 'UHF 400–470 MHz radio spectrum (with 5G LTE-R upgrade in Kavach 4.0)', hi: 'यूएचएफ 400–470 मेगाहर्ट्ज रेडियो स्पेक्ट्रम (कवच 4.0 में 5G LTE-R अपग्रेड)' },
      },
      {
        label: { en: 'Loco Cab Interface', hi: 'लोको कैब इंटरफेस' },
        value: { en: 'Driver Machine Interface (DMI) with continuous real-time speed & Movement Authority (MA)', hi: 'ड्राइवर मशीन इंटरफेस (DMI) निरंतर गति और मूवमेंट अथॉरिटी सहित' },
      },
      {
        label: { en: 'Trackside Tagging', hi: 'ट्रैकसाइड टैगिंग' },
        value: { en: 'Passive RFID tags fitted on track sleepers every 1 km and near signals', hi: 'ट्रैक स्लीपरों पर प्रति 1 किमी और सिग्नलों के पास पैसिव आरएफआईडी टैग' },
      },
      {
        label: { en: 'Brake Application Interface', hi: 'ब्रेक अनुप्रयोग इंटरफेस' },
        value: { en: 'Brake Interface Unit (BIU) connected directly to locomotive pneumatic brake pipe', hi: 'ब्रेक इंटरफेस यूनिट (BIU) जो सीधे न्यूमेटिक ब्रेक पाइप से जुड़ी है' },
      },
      {
        label: { en: 'Optical Fiber Backbone', hi: 'ऑप्टिकल फाइबर बैकबोन' },
        value: { en: '24/48-core OFC network connecting Station Electronic Interlockings', hi: 'स्टेशन इलेक्ट्रॉनिक इंटरलॉकिंग को जोड़ने वाला 24/48-कोर ओएफसी नेटवर्क' },
      },
    ],
    keyTakeaways: [
      {
        en: 'SPAD Prevention: If a loco pilot fails to brake when approaching a red signal, KAVACH automatically applies emergency brakes, bringing the train to a complete stop before the signal.',
        hi: 'एसपीएडी रोकथाम: यदि लोको पायलट लाल सिग्नल के पास ब्रेक नहीं लगाता, तो कवच स्वचालित रूप से आपातकालीन ब्रेक लगाकर ट्रेन को सिग्नल से पहले रोक देता है।',
      },
      {
        en: 'Head-On & Rear-End Protection: When two KAVACH-fitted trains enter the same block section, direct radio transceivers detect the closing distance and automatically brake both trains.',
        hi: 'टक्कर से सुरक्षा: जब एक ही ट्रैक पर दो ट्रेनें आमने-सामने या पीछे से आती हैं, तो रेडियो संचार खतरे को भांपकर दोनों ट्रेनों में स्वतः ब्रेक लगा देता है।',
      },
      {
        en: 'Auto-Whistling: KAVACH reads whistling markers approaching unmanned/manned level crossings and sounds the loco horn automatically to protect motorists.',
        hi: 'ऑटो-सीटी: रेलवे क्रॉसिंग के पास लगे सीटी मार्कर को पढ़कर कवच ड्राइवर के बिना भी स्वतः हॉर्न बजाता है।',
      },
    ],
    examQuestions: [
      {
        question: {
          en: 'What does "SPAD" stand for in Indian Railways safety protocol and Kavach operations?',
          hi: 'भारतीय रेलवे सुरक्षा प्रोटोकॉल और कवच संचालन में "SPAD" का पूर्ण रूप क्या है?',
        },
        answer: {
          en: 'Signal Passed at Danger (a dangerous condition where a train passes a red stop signal)',
          hi: 'सिग्नल पास्ड एट डेंजर (Signal Passed at Danger - लाल सिग्नल पार करने की खतरनाक स्थिति)',
        },
        examTag: 'RRB NTPC CBT-2 & JE S&T',
      },
      {
        question: {
          en: 'Which Indian research organization designed and developed the KAVACH ATP system?',
          hi: 'कवच (KAVACH) स्वचालित ट्रेन सुरक्षा प्रणाली को किस भारतीय शोध संगठन ने विकसित किया है?',
        },
        answer: {
          en: 'Research Designs and Standards Organisation (RDSO), Lucknow',
          hi: 'अनुसंधान डिजाइन और मानक संगठन (RDSO), लखनऊ',
        },
        examTag: 'RRB NTPC, JE & Group D',
      },
      {
        question: {
          en: 'To what Safety Integrity Level (SIL) is the Indian Railways Kavach system certified?',
          hi: 'भारतीय रेलवे की कवच प्रणाली किस सेफ्टी इंटीग्रिटी लेवल (SIL) से प्रमाणित है?',
        },
        answer: {
          en: 'SIL-4 (highest international safety integrity certification)',
          hi: 'SIL-4 (अंतरराष्ट्रीय स्तर पर सर्वोच्च संरक्षा प्रमाणीकरण)',
        },
        examTag: 'RRB JE Technical & S&T',
      },
    ],
  },
  {
    id: 'zones-dfc-map',
    src: './assets/rrb_railway_zones_map.jpg',
    badge: {
      en: '17 Zonal HQs & Dedicated Freight Corridors',
      hi: '17 ज़ोन मुख्यालय एवं डीएफसी कॉरिडोर',
    },
    title: {
      en: 'Indian Railways 17 Zonal Headquarters, DFC Corridors & Track Gauge Standards',
      hi: 'भारतीय रेल: 17 ज़ोन मुख्यालय, डेडिकेटेड फ्रेट कॉरिडोर (DFC) एवं ट्रैक गेज तुलना',
    },
    category: 'network_zones',
    shortDesc: {
      en: 'Comprehensive geographic map of Indian Railways 17 Zonal Headquarters across the country, Western DFC (Dadri to JNPT), Eastern DFC (Ludhiana to Dankuni), and comparative parameters of Broad Gauge (1676 mm), Standard Gauge (1435 mm), and Metre Gauge (1000 mm).',
      hi: 'भारत के 17 रेलवे ज़ोन मुख्यालयों का आधिकारिक नक्शा, पश्चिमी डीएफसी (दादरी से जेएनपीटी), पूर्वी डीएफसी (लुधियाना से दानकुनी) तथा ब्रॉड गेज (1676 मिमी), स्टैंडर्ड गेज (1435 मिमी) और मीटर गेज (1000 मिमी) का तुलनात्मक विश्लेषण।',
    },
    detailedSpecs: [
      {
        label: { en: 'Total Railway Zones', hi: 'कुल रेलवे ज़ोन' },
        value: { en: '17 Operational Zones + Kolkata Metro Railway (18 total entities, 68 Divisions)', hi: '17 परिचालित ज़ोन + कोलकाता मेट्रो रेलवे (कुल 18 इकाइयां, 68 मंडल)' },
      },
      {
        label: { en: 'Western DFC (WDFC) Terminals', hi: 'पश्चिमी डीएफसी टर्मिनल' },
        value: { en: 'Dadri (Uttar Pradesh) to Jawaharlal Nehru Port Trust - JNPT (Maharashtra) • 1,504 km', hi: 'दादरी (उत्तर प्रदेश) से जवाहरलाल नेहरू पोर्ट ट्रस्ट - जेएनपीटी (महाराष्ट्र) • 1,504 किमी' },
      },
      {
        label: { en: 'Eastern DFC (EDFC) Terminals', hi: 'पूर्वी डीएफसी टर्मिनल' },
        value: { en: 'Sahnewal/Ludhiana (Punjab) to Dankuni (West Bengal) • 1,856 km', hi: 'साहनेवाल/लुधियाना (पंजाब) से दानकुनी (पश्चिम बंगाल) • 1,856 किमी' },
      },
      {
        label: { en: 'DFC Operating Speed', hi: 'डीएफसी परिचालन गति' },
        value: { en: '100 km/h maximum speed for 12,000 HP heavy-haul container trains', hi: '12,000 हॉर्सपावर भारी कंटेनर ट्रेनों हेतु अधिकतम 100 किमी/घंटा' },
      },
      {
        label: { en: 'High-Speed Rail Gauge', hi: 'बुलेट ट्रेन / हाई-स्पीड गेज' },
        value: { en: 'Standard Gauge (1435 mm / 4 ft 8.5 in) for Mumbai-Ahmedabad Bullet Train & Metro networks', hi: 'स्टैंडर्ड गेज (1435 मिमी / 4 फीट 8.5 इंच) मुंबई-अहमदाबाद बुलेट ट्रेन व मेट्रो हेतु' },
      },
      {
        label: { en: 'Heritage Scenic Lines Gauge', hi: 'हेरिटेज पर्वतीय रेल गेज' },
        value: { en: 'Narrow Gauge 762 mm (Kalka-Shimla) & 610 mm (Darjeeling Himalayan Railway)', hi: 'नैरो गेज 762 मिमी (कालका-शिमला) एवं 610 मिमी (दार्जिलिंग हिमालयन रेलवे)' },
      },
    ],
    keyTakeaways: [
      {
        en: 'Western DFC features high-rise OHE with 7.45 m contact wire height, enabling double-stack container trains on flat-car wagons.',
        hi: 'पश्चिमी डीएफसी में 7.45 मीटर ऊंचे तार लगे हैं, जिससे डबल-स्टैक कंटेनर ट्रेनें आसानी से चल सकती हैं।',
      },
      {
        en: 'Kolkata has the unique distinction of housing three separate railway zonal headquarters: Eastern Railway (Fairlie Place), South Eastern Railway (Garden Reach), and Metro Railway (Park Street).',
        hi: 'कोलकाता में तीन रेलवे मुख्यालय स्थित हैं: पूर्व रेलवे (फेयरली प्लेस), दक्षिण पूर्व रेलवे (गार्डन रीच), और मेट्रो रेलवे (पार्क स्ट्रीट)।',
      },
      {
        en: 'The Indian Railways network spans over 68,000 route kilometers, with >94% electrified at 25 kV AC.',
        hi: 'भारतीय रेल नेटवर्क 68,000 से अधिक रूट किलोमीटर में फैला है, जिसका 94% से अधिक भाग 25 kV AC पर विद्युतीकृत है।',
      },
    ],
    examQuestions: [
      {
        question: {
          en: 'Which Indian city serves as the headquarters for three distinct railway zones/entities?',
          hi: 'कौन सा भारतीय शहर तीन अलग-अलग रेलवे ज़ोन/इकाइयों के मुख्यालय के रूप में कार्य करता है?',
        },
        answer: {
          en: 'Kolkata (Eastern Railway, South Eastern Railway, and Kolkata Metro)',
          hi: 'कोलकाता (पूर्व रेलवे, दक्षिण पूर्व रेलवे, एवं कोलकाता मेट्रो)',
        },
        examTag: 'RRB NTPC & Group D',
      },
      {
        question: {
          en: 'What are the terminal stations of the Western Dedicated Freight Corridor (WDFC)?',
          hi: 'पश्चिमी डेडिकेटेड फ्रेट कॉरिडोर (WDFC) के शुरुआती और अंतिम टर्मिनल स्टेशन कौन से हैं?',
        },
        answer: {
          en: 'Dadri (Uttar Pradesh) to JNPT / Navi Mumbai (Maharashtra)',
          hi: 'दादरी (उत्तर प्रदेश) से जेएनपीटी / नवी मुंबई (महाराष्ट्र)',
        },
        examTag: 'RRB NTPC CBT-2 & JE',
      },
      {
        question: {
          en: 'What track gauge is used in the Mumbai-Ahmedabad High-Speed Bullet Train project?',
          hi: 'मुंबई-अहमदाबाद हाई-स्पीड बुलेट ट्रेन परियोजना में किस ट्रैक गेज का उपयोग किया जा रहा है?',
        },
        answer: {
          en: 'Standard Gauge (1435 mm / 4 feet 8.5 inches)',
          hi: 'मानक गेज / स्टैंडर्ड गेज (1435 मिमी / 4 फीट 8.5 इंच)',
        },
        examTag: 'RRB NTPC & General Studies',
      },
    ],
  },
  {
    id: 'operations-fleet',
    src: './assets/rrb_railway_operations.jpg',
    badge: {
      en: 'Vande Bharat & Heavy Freight Rolling Stock',
      hi: 'वंदे भारत एवं भारी मालगाड़ी रोलिंग स्टॉक',
    },
    title: {
      en: 'Modern Rolling Stock Fleet: Vande Bharat Express & WAG-12B Freight Locomotive',
      hi: 'आधुनिक रोलिंग स्टॉक बेड़ा: वंदे भारत एक्सप्रेस एवं WAG-12B फ्रेट लोकोमोटिव',
    },
    category: 'fleet_operations',
    shortDesc: {
      en: 'Technical overview of India’s semi-high-speed distributed traction Vande Bharat trainsets engineered at ICF Chennai and WAG-12B twin-section 12,000 HP heavy-haul freight locomotive built at Madhepura, Bihar.',
      hi: 'आईसीएफ चेन्नई द्वारा विकसित सेमी-हाई-स्पीड डिस्ट्रीब्यूटेड ट्रैक्शन वंदे भारत ट्रेनसेट और मधेपुरा, बिहार में निर्मित WAG-12B 12,000 हॉर्सपावर भारी मालगाड़ी लोकोमोटिव का तकनीकी विवरण।',
    },
    detailedSpecs: [
      {
        label: { en: 'Vande Bharat Acceleration', hi: 'वंदे भारत त्वरण' },
        value: { en: '0 to 100 km/h in 52 seconds (faster than high-speed bullet trains)', hi: '0 से 100 किमी/घंटा मात्र 52 सेकंड में (बुलेट ट्रेन से भी तीव्र गति)' },
      },
      {
        label: { en: 'Vande Bharat Energy Savings', hi: 'वंदे भारत ऊर्जा बचत' },
        value: { en: 'Regenerative braking returns up to 30% electrical power back into grid', hi: 'रीजेनेरेटिव ब्रेकिंग ग्रिड में 30% तक विद्युत ऊर्जा लौटाती है' },
      },
      {
        label: { en: 'WAG-12B Haulage Capacity', hi: 'WAG-12B ढुलाई क्षमता' },
        value: { en: '6,000 tonnes at 100 km/h speed on 1 in 100 gradient', hi: '1 in 100 ढलान पर 100 किमी/घंटा की गति से 6,000 टन भार' },
      },
      {
        label: { en: 'Coupler Type', hi: 'कपलर प्रकार' },
        value: { en: 'Tightlock AAR Center Buffer Coupler (CBC) with anti-climbing features', hi: 'एंटी-क्लाइम्बिंग सुरक्षा युक्त टाइटलॉक सीबीसी कपलर' },
      },
    ],
    keyTakeaways: [
      {
        en: 'Vande Bharat uses distributed traction power where every second coach is a Motor Coach (MC), eliminating the need for a separate bulky locomotive.',
        hi: 'वंदे भारत में डिस्ट्रीब्यूटेड ट्रैक्शन होता है जिसमें हर दूसरा कोच मोटर कोच होता है, जिससे अलग इंजन की जरूरत नहीं पड़ती।',
      },
      {
        en: 'The WAG-12B is equipped with insulated-gate bipolar transistor (IGBT) based propulsion technology for superior tractive effort (706 kN starting).',
        hi: 'WAG-12B में आईजीबीटी (IGBT) आधारित प्रोपल्शन तकनीक है जो 706 kN का शक्तिशाली शुरुआती ट्रैक्शन प्रदान करती है।',
      },
    ],
    examQuestions: [
      {
        question: {
          en: 'Where was India’s first semi-high speed train, Vande Bharat Express (Train 18), manufactured?',
          hi: 'भारत की पहली सेमी-हाई-स्पीड ट्रेन, वंदे भारत एक्सप्रेस (ट्रेन 18), का निर्माण कहां हुआ था?',
        },
        answer: {
          en: 'Integral Coach Factory (ICF), Perambur, Chennai',
          hi: 'इंटीग्रल कोच फैक्ट्री (ICF), पेरंबूर, चेन्नई',
        },
        examTag: 'RRB NTPC & Group D',
      },
      {
        question: {
          en: 'What is the starting tractive effort of the 12,000 HP WAG-12B electric freight locomotive?',
          hi: '12,000 हॉर्सपावर वाले WAG-12B इलेक्ट्रिक मालगाड़ी लोकोमोटिव का शुरुआती ट्रैक्शन (Tractive Effort) कितना है?',
        },
        answer: {
          en: '706 kN (kilonewtons)',
          hi: '706 kN (किलोन्यूटन)',
        },
        examTag: 'RRB JE Technical Electrical',
      },
    ],
  },
];
