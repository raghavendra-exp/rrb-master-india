import type { Flashcard } from '../../types';

export const FLASHCARD_ITEMS: Flashcard[] = [
  {
    id: 'fc-01',
    category: 'Railway GK',
    front: {
      en: 'What is the track gauge width of Indian Railways Broad Gauge (BG)?',
      hi: 'भारतीय रेलवे के ब्रॉड गेज (BG) की पटरी चौड़ाई कितनी होती है?',
    },
    back: {
      en: '1676 mm (5 feet 6 inches)',
      hi: '1676 मिमी (5 फीट 6 इंच)',
    },
    notes: {
      en: 'Standard Gauge is 1435 mm (used in Metros); Metre Gauge is 1000 mm; Narrow Gauge is 762 mm or 610 mm.',
      hi: 'मानक गेज 1435 मिमी (मेट्रो में); मीटर गेज 1000 मिमी; नैरो गेज 762 मिमी या 610 मिमी होता है।',
    },
  },
  {
    id: 'fc-02',
    category: 'Railway GK',
    front: {
      en: 'Where is the Indian Railway National Academy (NAIR) situated?',
      hi: 'भारतीय रेलवे का राष्ट्रीय अकादमी (NAIR) कहाँ स्थित है?',
    },
    back: {
      en: 'Vadodara (Gujarat) - Pratap Vilas Palace',
      hi: 'वडोदरा (गुजरात) - प्रताप विलास पैलेस',
    },
    notes: {
      en: 'National Academy of Indian Railways trains Group A and Group B railway officers and is now part of Gati Shakti Vishwavidyalaya.',
      hi: 'यह ग्रुप A और B अधिकारियों का शीर्ष प्रशिक्षण संस्थान है और अब गति शक्ति विश्वविद्यालय का हिस्सा है।',
    },
  },
  {
    id: 'fc-03',
    category: 'General Science',
    front: {
      en: 'Which enzyme in human saliva begins the digestion of starch into maltose?',
      hi: 'मानव लार में कौन सा एंजाइम स्टार्च को माल्टोज़ में तोड़ना शुरू करता है?',
    },
    back: {
      en: 'Salivary Amylase (also known as Ptyalin)',
      hi: 'लार एमाइलेज़ (टायलिन - Ptyalin)',
    },
    notes: {
      en: 'Operates at optimum pH of ~6.8. Digestion of carbohydrates starts in the mouth itself.',
      hi: 'यह लगभग 6.8 pH पर कार्य करता है। कार्बोहाइड्रेट का पाचन मुखगुहा में ही प्रारंभ हो जाता है।',
    },
  },
  {
    id: 'fc-04',
    category: 'General Science',
    front: {
      en: 'What is the value of Universal Gravitational Constant (G)?',
      hi: 'सार्वत्रिक गुरुत्वाकर्षण नियतांक (G) का मान कितना होता है?',
    },
    back: {
      en: '6.674 × 10⁻¹¹ N·m²/kg²',
      hi: '6.674 × 10⁻¹¹ न्यूटन·मीटर²/किग्रा²',
    },
    notes: {
      en: 'First experimentally determined by Henry Cavendish in 1798 using a torsion balance.',
      hi: 'हेनरी कैवेंडिश ने 1798 में मरोड़ तुला (टॉर्शन बैलेंस) द्वारा इसका प्रायोगिक मान निकाला था।',
    },
  },
  {
    id: 'fc-05',
    category: 'Static GK',
    front: {
      en: 'Which Article of the Indian Constitution provides for the Joint Sitting of both Houses of Parliament?',
      hi: 'भारतीय संविधान का कौन सा अनुच्छेद संसद के दोनों सदनों की संयुक्त बैठक का प्रावधान करता है?',
    },
    back: {
      en: 'Article 108 (Summoned by President, Presided over by Speaker of Lok Sabha)',
      hi: 'अनुच्छेद 108 (राष्ट्रपति द्वारा बुलाई जाती है, लोकसभा अध्यक्ष द्वारा अध्यक्षता)',
    },
    notes: {
      en: 'Joint sitting does not apply to Money Bills (Article 110) or Constitutional Amendment Bills (Article 368).',
      hi: 'संयुक्त बैठक धन विधेयक या संविधान संशोधन विधेयक पर लागू नहीं होती।',
    },
  },
  {
    id: 'fc-06',
    category: 'Formulas',
    front: {
      en: 'What is the sum of interior angles of an n-sided polygon?',
      hi: 'n भुजाओं वाले बहुभुज के सभी आंतरिक कोणों का योग कितना होता है?',
    },
    back: {
      en: '(n - 2) × 180°',
      hi: '(n - 2) × 180°',
    },
    notes: {
      en: 'Each interior angle of regular polygon = [(n - 2) × 180°] / n. Each exterior angle = 360° / n.',
      hi: 'समबहुभुज का प्रत्येक आंतरिक कोण = [(n - 2) × 180°] / n तथा बाह्य कोण = 360° / n।',
    },
  },
  {
    id: 'fc-07',
    category: 'Technical',
    front: {
      en: 'In Civil Engineering, what is the standard sleeper density in Indian Railways broad gauge mainline?',
      hi: 'सिविल इंजीनियरिंग में, भारतीय रेल ब्रॉड गेज मुख्य लाइन पर मानक स्लीपर घनत्व कितना होता है?',
    },
    back: {
      en: 'M + 7 to M + 8 sleepers per rail length (typically 1660 sleepers/km)',
      hi: 'M + 7 से M + 8 प्रति रेल लंबाई (सामान्यतः 1660 स्लीपर प्रति किलोमीटर)',
    },
    notes: {
      en: 'Where M is the length of one rail in metres (13 m for broad gauge in India).',
      hi: 'जहाँ M एक रेल की लंबाई (भारत में 13 मीटर ब्रॉड गेज) होती है।',
    },
  },
  {
    id: 'fc-08',
    category: 'Current Affairs',
    front: {
      en: 'What is the maximum operational speed designed for the Mumbai-Ahmedabad High-Speed Rail Corridor?',
      hi: 'मुंबई-अहमदाबाद हाई-स्पीड रेल कॉरिडोर हेतु डिजाइन की गई अधिकतम परिचालन गति क्या है?',
    },
    back: {
      en: '320 km/h (Operating Speed) / 350 km/h (Design Speed)',
      hi: '320 किमी/घंटा (परिचालन गति) / 350 किमी/घंटा (डिजाइन गति)',
    },
    notes: {
      en: 'Constructed by NHSRCL with Japanese E5 Series Shinkansen technology over 508 km.',
      hi: 'एनएचएसआरसीएल द्वारा 508 किमी लंबे मार्ग पर जापानी शिंकानसेन E5 तकनीक से निर्मित।',
    },
  },
  {
    id: 'fc-09',
    category: 'Railway GK',
    front: {
      en: 'What is the Safety Integrity Level (SIL) certification achieved by KAVACH ATP system?',
      hi: 'कवच स्वचालित ट्रेन सुरक्षा प्रणाली को कौन सा संरक्षा प्रमाणन (SIL) प्राप्त है?',
    },
    back: {
      en: 'SIL-4 (Safety Integrity Level 4)',
      hi: 'SIL-4 (सर्वोच्च संरक्षा स्तर 4)',
    },
    notes: {
      en: 'Guarantees probability of dangerous failure is less than 1 in 10,000 years. Highest railway automation standard.',
      hi: 'यह 10,000 वर्षों में 1 से भी कम विफलता दर सुनिश्चित करता है।',
    },
  },
  {
    id: 'fc-10',
    category: 'Railway GK',
    front: {
      en: 'What is the exact height of the Chenab Rail Arch Bridge above the river bed?',
      hi: 'चिनाब रेलवे आर्च ब्रिज की नदी तल से सटीक ऊंचाई कितनी है?',
    },
    back: {
      en: '359 meters (35 meters taller than the Eiffel Tower)',
      hi: '359 मीटर (पेरिस के एफिल टॉवर से 35 मीटर ऊंचा)',
    },
    notes: {
      en: 'Located in Reasi district of J&K on the Udhampur-Srinagar-Baramulla Rail Link (USBRL). World highest railway bridge.',
      hi: 'जम्मू-कश्मीर के रियासी जिले में USBRL परियोजना के तहत निर्मित विश्व का सबसे ऊंचा रेलवे पुल।',
    },
  },
  {
    id: 'fc-11',
    category: 'Railway GK',
    front: {
      en: 'What is the length of the world\'s longest railway platform at Hubballi Junction?',
      hi: 'हुब्बल्लि जंक्शन पर स्थित विश्व के सबसे लंबे रेलवे प्लेटफॉर्म की लंबाई कितनी है?',
    },
    back: {
      en: '1,507 meters (Platform No. 8)',
      hi: '1,507 मीटर (प्लेटफॉर्म सं. 8)',
    },
    notes: {
      en: 'Shree Siddharoodha Swamiji Hubballi Station (Karnataka, South Western Railway). Guinness World Record holder.',
      hi: 'दक्षिण पश्चिम रेलवे के हुब्बल्लि स्टेशन का प्लेटफॉर्म सं. 8 गिनीज बुक रिकॉर्ड धारक है।',
    },
  },
  {
    id: 'fc-12',
    category: 'Railway GK',
    front: {
      en: 'What is the horsepower rating of India\'s most powerful locomotive WAG-12B?',
      hi: 'भारत के सबसे शक्तिशाली लोकोमोटिव WAG-12B की हॉर्सपावर क्षमता कितनी है?',
    },
    back: {
      en: '12,000 Horsepower (Twin-section Electric Freight)',
      hi: '12,000 हॉर्सपावर (ट्विन-सेक्शन विद्युत मालगाड़ी इंजन)',
    },
    notes: {
      en: 'Manufactured by MELPL at Madhepura, Bihar in joint venture with Alstom France. Hauls 6,000-tonne freight trains at 120 km/h.',
      hi: 'मधेपुरा (बिहार) में एल्सटॉम के साथ संयुक्त उद्यम द्वारा निर्मित।',
    },
  },
  {
    id: 'fc-13',
    category: 'Railway GK',
    front: {
      en: 'Which manufacturing unit designed and built the first Vande Bharat Express (Train 18)?',
      hi: 'किस विनिर्माण इकाई ने पहली वंदे भारत एक्सप्रेस (ट्रेन 18) को डिजाइन और निर्मित किया?',
    },
    back: {
      en: 'Integral Coach Factory (ICF), Perambur, Chennai',
      hi: 'इंटीग्रल कोच फैक्ट्री (ICF), पेरंबूर, चेन्नई',
    },
    notes: {
      en: 'Inaugural service flagged off on 15 February 2019 between New Delhi and Varanasi.',
      hi: 'पहली ट्रेन 15 फरवरी 2019 को नई दिल्ली से वाराणसी के बीच शुरू की गई थी।',
    },
  },
  {
    id: 'fc-14',
    category: 'Railway GK',
    front: {
      en: 'What are the 4 aspects of modern Indian Railways colour light signalling and their meanings?',
      hi: 'भारतीय रेलवे के आधुनिक 4-एस्पेक्ट कलर लाइट सिग्नल के रंग और उनके अर्थ क्या हैं?',
    },
    back: {
      en: 'Green (Clear/Normal Speed), Double Yellow (Attention/30 km/h), Yellow (Caution/Be ready to stop), Red (Danger/Stop)',
      hi: 'हरा (क्लीयर - पूर्ण गति), डबल पीला (अटेंशन - 30 किमी/घंटा), पीला (कॉशन - रुकने को तैयार), लाल (खतरा - पूर्ण स्टॉप)',
    },
    notes: {
      en: 'Essential knowledge for Station Master CBAT and RRB JE S&T engineering.',
      hi: 'स्टेशन मास्टर साइको एवं जेई एसएंडटी परीक्षा हेतु अनिवार्य।',
    },
  },
  {
    id: 'fc-15',
    category: 'Current Affairs',
    front: {
      en: 'Who is the current Chairman and Chief Executive Officer (CEO) of the Railway Board?',
      hi: 'वर्तमान में रेलवे बोर्ड के अध्यक्ष एवं मुख्य कार्यकारी अधिकारी (CEO) कौन हैं?',
    },
    back: {
      en: 'Shri Satish Kumar (appointed 2024)',
      hi: 'श्री सतीश कुमार (2024 में नियुक्त)',
    },
    notes: {
      en: 'Distinguished 1986 batch IRSEE officer who succeeded Jaya Varma Sinha.',
      hi: '1986 बैच के वरिष्ठ आईआरएसईई अधिकारी जिन्होंने जया वर्मा सिन्हा का स्थान लिया।',
    },
  },
  {
    id: 'fc-16',
    category: 'Current Affairs',
    front: {
      en: 'At the 45th FIDE Chess Olympiad in Budapest, what historic milestone did India achieve?',
      hi: 'बुडापेस्ट में 45वें शतरंज ओलंपियाड में भारत ने कौन सा ऐतिहासिक मील का पत्थर हासिल किया?',
    },
    back: {
      en: 'Historic Double Gold: Won 1st place in BOTH Open and Women’s Categories',
      hi: 'ऐतिहासिक दोहरा स्वर्ण: ओपन और महिला दोनों वर्गों में प्रथम स्थान (स्वर्ण पदक)',
    },
    notes: {
      en: 'Led by D Gukesh, Arjun Erigaisi, Harika Dronavalli, and Divya Deshmukh.',
      hi: 'डी गुकेश, अर्जुन एरिगैसी, हरिका द्रोणावल्ली और दिव्या देशमुख के नेतृत्व में।',
    },
  },
  {
    id: 'fc-17',
    category: 'Current Affairs',
    front: {
      en: 'What is the monthly free electricity limit provided under PM-Surya Ghar: Muft Bijli Yojana?',
      hi: 'पीएम-सूर्य घर: मुफ्त बिजली योजना के तहत प्रति माह कितनी मुफ्त बिजली प्रदान की जाती है?',
    },
    back: {
      en: 'Up to 300 units of free electricity per month for 1 crore households',
      hi: '1 करोड़ परिवारों को प्रति माह 300 यूनिट तक मुफ्त बिजली',
    },
    notes: {
      en: 'Total scheme outlay of ₹75,021 crore with direct subsidies up to ₹78,000 for 3 kW solar plants.',
      hi: 'कुल ₹75,021 करोड़ का परिव्यय और 3 किलोवाट तक के प्लांट हेतु ₹78,000 तक की प्रत्यक्ष सब्सिडी।',
    },
  },
];
