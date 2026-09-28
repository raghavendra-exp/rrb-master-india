import type { ShortcutItem } from '../../types';

export const SHORTCUT_ITEMS: ShortcutItem[] = [
  {
    id: 'sc-time-and-work-lcm',
    subject: 'Mathematics',
    topic: {
      en: 'Time & Work: The LCM Total Units Method',
      hi: 'समय एवं कार्य: ल.स. (LCM) इकाई विधि',
    },
    standardMethod: {
      en: 'Calculate 1 day work as 1/A and 1/B, then add 1/A + 1/B = (A+B)/AB, then take reciprocal AB/(A+B). Leads to complex fraction arithmetic under exam stress.',
      hi: 'पारंपरिक विधि में 1 दिन का कार्य 1/A और 1/B मानकर जोड़ते हैं: 1/A + 1/B = (A+B)/AB, फिर व्युत्क्रम लेते हैं। इसमें भिन्न की गणना में समय बर्बाद होता है।',
    },
    shortcutMethod: {
      en: 'Take LCM of days as "Total Work Units". Divide Total Units by days of each person to get daily efficiencies (units/day). Add efficiencies and divide total units by sum of efficiencies.',
      hi: 'दिनों का ल.स.प. (LCM) लेकर उसे "कुल कार्य इकाइयां" मान लें। प्रत्येक व्यक्ति की दैनिक कार्य क्षमता (यूनिट/दिन) निकालें। कुल इकाइयों को दोनों की कुल क्षमता से भाग दें।',
    },
    speedAdvantage: 'Saves 45 seconds per question and eliminates fraction calculation errors.',
    exampleQuestion: {
      en: 'A can complete a project in 12 days and B in 15 days. Working together, in how many days will they finish?',
      hi: 'A किसी कार्य को 12 दिनों में और B 15 दिनों में पूरा कर सकता है। दोनों मिलकर इसे कितने दिनों में समाप्त करेंगे?',
    },
    solution: {
      en: 'LCM of 12 and 15 = 60 units (Total Work). Efficiency of A = 60/12 = 5 units/day. Efficiency of B = 60/15 = 4 units/day. Combined efficiency = 5 + 4 = 9 units/day. Time required = 60 / 9 = 20/3 = 6⅔ days!',
      hi: '12 और 15 का LCM = 60 यूनिट (कुल कार्य)। A की क्षमता = 60/12 = 5 यूनिट/दिन। B की क्षमता = 60/15 = 4 यूनिट/दिन। दोनों की संयुक्त क्षमता = 5 + 4 = 9 यूनिट/दिन। कुल समय = 60 / 9 = 20/3 = 6⅔ दिन!',
    },
  },
  {
    id: 'sc-train-speed-conversion',
    subject: 'Mathematics',
    topic: {
      en: 'Time, Speed & Distance: Fast Train Platform Crossing',
      hi: 'चाल, समय और दूरी: रेलगाड़ी एवं प्लेटफॉर्म पार करने की तीव्र ट्रिक',
    },
    standardMethod: {
      en: 'Convert speed using × (1000/3600), set up equation Distance = Speed × Time, where Distance = Length of Train + Length of Platform.',
      hi: 'चाल को 1000/3600 से गुणा करना, फिर दूरी = चाल × समय समीकरण बनाना, जहाँ कुल दूरी = ट्रेन की लंबाई + प्लेटफॉर्म की लंबाई।',
    },
    shortcutMethod: {
      en: 'Remember the 18 : 5 benchmark rule! Speed in km/h is a multiple of 18; Speed in m/s is the same multiple of 5! (e.g. 72 km/h = 4 × 18 → 4 × 5 = 20 m/s). Then Time = (L_train + L_platform) / (m/s speed).',
      hi: '18 : 5 का सुनहरा पैमाना याद रखें! किमी/घंटा 18 का गुणज होता है तो मी/से 5 का वही गुणज होता है! (उदा. 72 km/h = 4 × 18 → 4 × 5 = 20 m/s)। फिर समय = (ट्रेन लंबाई + प्लेटफॉर्म लंबाई) / चाल (मी/से)।',
    },
    speedAdvantage: 'Instant mental conversion in 2 seconds without pen-and-paper scratchwork.',
    exampleQuestion: {
      en: 'A 240 m long train running at 72 km/h crosses a 160 m long platform. Find time taken.',
      hi: '72 किमी/घंटा की गति से चल रही 240 मीटर लंबी ट्रेन 160 मीटर लंबे प्लेटफॉर्म को कितने समय में पार करेगी?',
    },
    solution: {
      en: '72 km/h = 4 × 18 → Speed = 4 × 5 = 20 m/s. Total distance = 240 + 160 = 400 m. Time = 400 / 20 = 20 seconds!',
      hi: '72 km/h = 4 × 18 → गति = 4 × 5 = 20 m/s। कुल दूरी = 240 + 160 = 400 मी। समय = 400 / 20 = 20 सेकंड!',
    },
  },
  {
    id: 'sc-alligation-mixture',
    subject: 'Mathematics',
    topic: {
      en: 'Mixtures & Alligation: Cross Difference Ratio Rule',
      hi: 'मिश्रण एवं पृथक्करण (Alligation): क्रॉस अंतर अनुपात नियम',
    },
    standardMethod: {
      en: 'Create algebraic equations with variables x and (Total - x): C1(x) + C2(Total - x) = Mean(Total). Takes 60-80 seconds.',
      hi: 'अज्ञात चर x और (Total - x) मानकर समीकरण बनाएं: C1(x) + C2(Total - x) = माध्य(Total)। हल करने में 60-80 सेकंड लगते हैं।',
    },
    shortcutMethod: {
      en: 'Write Cheaper price on left, Dearer price on right, Mean price in center. Cross subtract: (Dearer - Mean) : (Mean - Cheaper). This directly gives the quantity ratio!',
      hi: 'सस्ती वस्तु बाईं ओर, महंगी दाईं ओर, और औसत मूल्य केंद्र में लिखें। क्रॉस घटाएं: (महंगा - औसत) : (औसत - सस्ता)। यह सीधे मात्राओं का अनुपात देता है!',
    },
    speedAdvantage: 'Solves complex mixture and profit-loss questions in under 15 seconds.',
    exampleQuestion: {
      en: 'In what ratio should wheat at ₹24/kg be mixed with wheat at ₹34/kg to produce a mixture worth ₹30/kg?',
      hi: '₹24/किग्रा वाले गेहूं को ₹34/किग्रा वाले गेहूं के साथ किस अनुपात में मिलाया जाए कि मिश्रण का मूल्य ₹30/किग्रा हो जाए?',
    },
    solution: {
      en: 'Left: 24, Right: 34, Center: 30. Cross subtraction: (34 - 30) = 4 on left; (30 - 24) = 6 on right. Ratio = 4 : 6 = 2 : 3!',
      hi: 'बायां: 24, दायां: 34, केंद्र: 30। क्रॉस घटाव: (34 - 30) = 4 बाईं ओर; (30 - 24) = 6 दाईं ओर। अनुपात = 4 : 6 = 2 : 3!',
    },
  },
];
