import type { BilingualText } from '../../types';

export interface MedicalCategoryDetail {
  category: string;
  generalFitness: BilingualText;
  distantVision: BilingualText;
  nearVision: BilingualText;
  colorVisionRequired: boolean;
  lasikAllowed: boolean;
  applicablePosts: BilingualText[];
  specialConditions: BilingualText;
}

export const RAILWAY_MEDICAL_STANDARDS: MedicalCategoryDetail[] = [
  {
    category: 'A-1',
    generalFitness: {
      en: 'Physically fit in all respects without any infirmity or physical disability',
      hi: 'शारीरिक रूप से पूर्णतः स्वस्थ, बिना किसी विकलांगता अथवा दुर्बलता के',
    },
    distantVision: {
      en: '6/6, 6/6 without glasses (Fogging test permissible). Must pass field of vision and night vision.',
      hi: 'बिना चश्मे के 6/6, 6/6। दृश्य क्षेत्र एवं रात्रि दृष्टि परीक्षण अनिवार्य।',
    },
    nearVision: {
      en: 'Snellen 0.6, 0.6 without glasses',
      hi: 'बिना चश्मे के 0.6, 0.6',
    },
    colorVisionRequired: true,
    lasikAllowed: false,
    applicablePosts: [
      { en: 'Assistant Loco Pilot (ALP)', hi: 'सहायक लोको पायलट' },
    ],
    specialConditions: {
      en: 'Strictly NO LASIK / refractive surgery allowed. Must pass Ishihara color blindness test, binocular vision, and mesopic vision.',
      hi: 'लेसिक या रिफ्रैक्टिव सर्जरी पूरी तरह प्रतिबंधित। इशिहारा कलर विज़न, द्विनेत्रीय दृष्टि एवं मेसोपिक विज़न अनिवार्य।',
    },
  },
  {
    category: 'A-2',
    generalFitness: {
      en: 'Physically fit in all respects for arduous railway operational duties',
      hi: 'रेल परिचालन के कठिन दायित्वों हेतु शारीरिक रूप से पूर्णतः स्वस्थ',
    },
    distantVision: {
      en: '6/9, 6/9 without glasses (No glasses allowed for Station Master & Train Manager)',
      hi: 'बिना चश्मे के 6/9, 6/9 (स्टेशन मास्टर एवं ट्रेन मैनेजर हेतु चश्मा स्वीकार्य नहीं)',
    },
    nearVision: {
      en: 'Snellen 0.6, 0.6 with or without glasses',
      hi: 'चश्मे के साथ या बिना चश्मे के 0.6, 0.6',
    },
    colorVisionRequired: true,
    lasikAllowed: false,
    applicablePosts: [
      { en: 'Station Master (NTPC Level 6)', hi: 'स्टेशन मास्टर (NTPC)' },
      { en: 'Goods Train Manager (NTPC Level 5)', hi: 'गुड्स ट्रेन मैनेजर (NTPC)' },
      { en: 'Traffic Assistant (NTPC Level 4)', hi: 'ट्रैफिक असिस्टेंट (NTPC)' },
      { en: 'Assistant Pointsman (Group D Level 1)', hi: 'असिस्टेंट प्वॉइंट्समैन (Group D)' },
    ],
    specialConditions: {
      en: 'LASIK surgery strictly prohibited. Candidates found with LASIK history during slit lamp test will be disqualified.',
      hi: 'लेसिक सर्जरी सख्त रूप से अमान्य। स्लिट लैंप जांच में लेसिक का इतिहास पाए जाने पर अपात्र घोषित किया जाएगा।',
    },
  },
  {
    category: 'A-3',
    generalFitness: {
      en: 'Physically fit for outdoor supervisory and technical maintenance duties',
      hi: 'आउटडोर पर्यवेक्षी एवं तकनीकी रखरखाव कार्यों हेतु शारीरिक रूप से स्वस्थ',
    },
    distantVision: {
      en: '6/9, 6/9 with or without glasses (Power of lenses not to exceed 2.0 Diopters)',
      hi: 'चश्मे के साथ या बिना 6/9, 6/9 (लेंस की क्षमता +2.0D या -2.0D से अधिक न हो)',
    },
    nearVision: {
      en: 'Snellen 0.6, 0.6 with or without glasses',
      hi: 'चश्मे के साथ या बिना 0.6, 0.6',
    },
    colorVisionRequired: true,
    lasikAllowed: false,
    applicablePosts: [
      { en: 'Junior Engineer (Civil, Mechanical, Electrical, S&T)', hi: 'कनिष्ठ अभियंता (जेई - सभी तकनीकी शाखाएं)' },
      { en: 'Signal & Telecom Maintainers', hi: 'सिग्नल एवं टेलीकॉम मेंटेनर' },
    ],
    specialConditions: {
      en: 'Must pass tests for Color Vision, Binocular Vision, Field of Vision, and Night Vision. LASIK not permitted.',
      hi: 'कलर विज़न, द्विनेत्रीय दृष्टि, दृष्टि क्षेत्र और नाइट विज़न टेस्ट पास करना अनिवार्य। लेसिक सर्जरी मान्य नहीं।',
    },
  },
  {
    category: 'B-1',
    generalFitness: {
      en: 'Physically fit in all respects for track and shed maintenance duties',
      hi: 'ट्रैक एवं शेड रखरखाव संबंधी कार्यों हेतु शारीरिक रूप से स्वस्थ',
    },
    distantVision: {
      en: '6/9, 6/12 with or without glasses (Power of lenses not to exceed 4.0 Diopters)',
      hi: 'चश्मे के साथ या बिना 6/9, 6/12 (लेंस क्षमता 4.0D से अधिक न हो)',
    },
    nearVision: {
      en: 'Snellen 0.6, 0.6 with or without glasses when reading or close work is required',
      hi: 'निकट दृष्टि 0.6, 0.6 चश्मे के साथ या बिना',
    },
    colorVisionRequired: true,
    lasikAllowed: true,
    applicablePosts: [
      { en: 'Track Maintainer Grade IV (Group D)', hi: 'ट्रैक मेंटेनर ग्रेड IV (ग्रुप डी)' },
      { en: 'Bridge Maintenance Staff', hi: 'पुल रखरखाव कर्मी' },
      { en: 'C&W Workshop Technicians', hi: 'सीएंडडब्ल्यू वर्कशॉप तकनीशियन' },
    ],
    specialConditions: {
      en: 'Color vision required. Power of lens up to 4 Diopters permissible. Hearing must be normal.',
      hi: 'कलर विज़न आवश्यक। 4 डायोप्टर तक का चश्मा मान्य। श्रवण क्षमता (कान) सामान्य होना अनिवार्य।',
    },
  },
  {
    category: 'B-2',
    generalFitness: {
      en: 'Physically fit for commercial passenger and ticketing operations',
      hi: 'वाणिज्यिक, टिकटिंग एवं यात्री सेवा कार्यों हेतु शारीरिक रूप से स्वस्थ',
    },
    distantVision: {
      en: '6/9, 6/12 with or without glasses (Power of lenses not to exceed 4.0 Diopters)',
      hi: 'चश्मे के साथ या बिना 6/9, 6/12 (लेंस क्षमता अधिकतम 4.0D)',
    },
    nearVision: {
      en: 'Snellen 0.6 with or without glasses for reading',
      hi: 'निकट दृष्टि 0.6 चश्मे के साथ या बिना',
    },
    colorVisionRequired: false,
    lasikAllowed: true,
    applicablePosts: [
      { en: 'Senior Commercial cum Ticket Supervisor (NTPC Level 5)', hi: 'वरिष्ठ वाणिज्यिक सह टिकट पर्यवेक्षक' },
      { en: 'Commercial cum Ticket Clerk (NTPC Level 3)', hi: 'वाणिज्यिक सह टिकट लिपिक' },
    ],
    specialConditions: {
      en: 'Color vision is NOT mandatory for B-2. Binocular vision test applies.',
      hi: 'B-2 श्रेणी के लिए कलर विज़न अनिवार्य नहीं है। द्विनेत्रीय दृष्टि परीक्षण आवश्यक।',
    },
  },
  {
    category: 'C-1',
    generalFitness: {
      en: 'Physically fit for indoor workshop and technical laboratory work',
      hi: 'इनडोर वर्कशॉप, डिपो एवं तकनीकी प्रयोगशाला कार्यों हेतु स्वस्थ',
    },
    distantVision: {
      en: '6/12, 6/18 with or without glasses',
      hi: 'चश्मे के साथ या बिना 6/12, 6/18',
    },
    nearVision: {
      en: 'Snellen 0.6 with or without glasses when reading',
      hi: 'पढ़ने हेतु 0.6 चश्मे के साथ या बिना',
    },
    colorVisionRequired: false,
    lasikAllowed: true,
    applicablePosts: [
      { en: 'Assistant Workshop / Stores (Group D Level 1)', hi: 'सहायक वर्कशॉप / स्टोर्स' },
      { en: 'Junior Engineer (IT)', hi: 'कनिष्ठ अभियंता (आईटी)' },
      { en: 'Depot Material Superintendent (DMS)', hi: 'डिपो सामग्री अधीक्षक (DMS)' },
    ],
    specialConditions: {
      en: 'Color vision not required. Suitable for candidates wearing prescribed spectacles.',
      hi: 'कलर विज़न अनिवार्य नहीं। चश्मा पहनने वाले अभ्यर्थी पात्र हैं।',
    },
  },
  {
    category: 'C-2',
    generalFitness: {
      en: 'Physically fit for general office and ministerial clerical positions',
      hi: 'सामान्य कार्यालय एवं लिपिकीय पदों हेतु स्वस्थ',
    },
    distantVision: {
      en: '6/12 with or without glasses in better eye',
      hi: 'बेहतर आंख में चश्मे के साथ या बिना 6/12',
    },
    nearVision: {
      en: 'Snellen 0.6 with or without glasses for clerical work',
      hi: 'लिपिकीय कार्य हेतु 0.6 चश्मे के साथ या बिना',
    },
    colorVisionRequired: false,
    lasikAllowed: true,
    applicablePosts: [
      { en: 'Senior Clerk cum Typist (NTPC Level 5)', hi: 'वरिष्ठ लिपिक सह टंकक' },
      { en: 'Junior Account Assistant cum Typist (NTPC Level 5)', hi: 'कनिष्ठ लेखा सहायक सह टंकक' },
      { en: 'Junior Clerk cum Typist (NTPC Level 2)', hi: 'कनिष्ठ लिपिक सह टंकक' },
      { en: 'Accounts Clerk cum Typist (NTPC Level 2)', hi: 'लेखा लिपिक सह टंकक' },
    ],
    specialConditions: {
      en: 'Most relaxed medical standard. Relaxations applicable for PwBD (Persons with Benchmark Disabilities).',
      hi: 'सर्वाधिक सरल चिकित्सा मानक। दिव्यांग अभ्यर्थियों (PwBD) हेतु भी उपयुक्त।',
    },
  },
];
