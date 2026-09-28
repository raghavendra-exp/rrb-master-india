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
];
