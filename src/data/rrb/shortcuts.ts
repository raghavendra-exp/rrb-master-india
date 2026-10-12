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
  {
    id: 'sc-faulty-dealer-trick',
    subject: 'Mathematics',
    topic: {
      en: 'Profit & Loss: Faulty-Weight Dealer Profit Trick',
      hi: 'लाभ एवं हानि: बेईमान दुकानदार (दोषपूर्ण बाट) शॉर्टकट',
    },
    standardMethod: {
      en: 'Assume cost price of 1000g is ₹1000. Dealer sells 900g for ₹1000. Cost of 900g = ₹900. Profit = ₹100. Profit % = (100/900) × 100 = 11.11%. Takes 40 seconds of scratchwork.',
      hi: '1000 ग्राम का क्रय मूल्य ₹1000 मानकर 900 ग्राम का क्रय मूल्य ₹900 निकालना और फिर लाभ प्रतिशत की लंबी गणना करना।',
    },
    shortcutMethod: {
      en: 'Direct Golden Formula: Gain % = [Error / (True Weight - Error)] × 100% = [(Claimed - Actual) / Actual] × 100%.',
      hi: 'सीधा सूत्र: लाभ % = [त्रुटि / (सत्य मान - त्रुटि)] × 100% = [(दावाकृत वजन - वास्तविक वजन) / वास्तविक वजन] × 100%।',
    },
    speedAdvantage: 'Direct 5-second mental calculation without assuming variables or prices.',
    exampleQuestion: {
      en: 'A trader claims to sell goods at cost price, but uses a false weight of 920 grams for a 1 kg weight. What is his profit percentage?',
      hi: 'एक व्यापारी लागत मूल्य पर सामान बेचने का दावा करता है, लेकिन 1 किग्रा के स्थान पर 920 ग्राम के गलत बाट का उपयोग करता है। उसका लाभ प्रतिशत क्या है?',
    },
    solution: {
      en: 'Error = 1000 - 920 = 80g. Actual = 920g. Gain % = (80 / 920) × 100 = (2 / 23) × 100 = 200/23 = 8.69%!',
      hi: 'त्रुटि = 1000 - 920 = 80 ग्राम। लाभ % = (80 / 920) × 100 = 200/23 = 8.69%!',
    },
  },
  {
    id: 'sc-unit-digit-cyclicity',
    subject: 'Mathematics',
    topic: {
      en: 'Number System: Unit Digit Cyclicity Rule (2, 3, 7, 8)',
      hi: 'संख्या पद्धति: इकाई अंक ज्ञात करने का चक्रीयता नियम',
    },
    standardMethod: {
      en: 'Multiplying large exponents manually or writing out long power expansions. Impossible under CBT constraints.',
      hi: 'बड़ी घातों का पारंपरिक गुणा करना, जो ऑनलाइन परीक्षा में असंभव है।',
    },
    shortcutMethod: {
      en: 'Base endings 2, 3, 7, 8 have cyclicity 4. Divide power by 4 and take remainder r (if remainder is 0, use power 4). Base endings 4 and 9 have cyclicity 2 (4^odd=4, 4^even=6; 9^odd=9, 9^even=1). Endings 0, 1, 5, 6 always remain 0, 1, 5, 6.',
      hi: '2, 3, 7, 8 का चक्र 4 होता है। घात को 4 से भाग दें और शेषफल r लें (यदि शेष 0 हो, तो घात 4 लें)। 4 और 9 का चक्र 2 होता है। 0, 1, 5, 6 का इकाई अंक सदैव वही रहता है।',
    },
    speedAdvantage: 'Finds unit digit of any huge power expression in 8 seconds flat.',
    exampleQuestion: {
      en: 'What is the unit digit of the expression 7^105 + 3^64?',
      hi: 'व्यंजक 7^105 + 3^64 का इकाई अंक क्या होगा?',
    },
    solution: {
      en: 'For 7^105: 105 ÷ 4 leaves remainder 1 -> 7^1 = 7. For 3^64: 64 ÷ 4 leaves remainder 0 -> use 3^4 = 81 -> unit digit 1. Sum = 7 + 1 = 8!',
      hi: '7^105 हेतु: 105 को 4 से भाग देने पर शेषफल 1 -> 7^1 = 7। 3^64 हेतु: शेषफल 0 -> 3^4 = 81 -> इकाई अंक 1। कुल इकाई अंक = 7 + 1 = 8!',
    },
  },
  {
    id: 'sc-successive-lcm-bells',
    subject: 'Mathematics',
    topic: {
      en: 'HCF & LCM: Successive Bells Ringing & Circular Track Meetings',
      hi: 'ल.स.प.: घंटियों का एक साथ बजना एवं वृत्ताकार पथ पर मिलन',
    },
    standardMethod: {
      en: 'Listing individual multiples of each second interval in long tables.',
      hi: 'प्रत्येक समयांतराल के गुणजों की लंबी तालिका बनाना।',
    },
    shortcutMethod: {
      en: 'First common meeting time = LCM(t₁, t₂, t₃...). To find total occurrences in duration T: Total times = ⌊T / LCM⌋ + 1 (if starting together at t=0).',
      hi: 'पुनः एक साथ मिलने का समय = दी गई अवधियों का ल.स.प. (LCM)। कुल बारंबारता = ⌊कुल समय / LCM⌋ + 1 (यदि प्रारंभ में एक साथ बजी हों)।',
    },
    speedAdvantage: 'Direct single-step LCM solution saves up to 90 seconds.',
    exampleQuestion: {
      en: '6 church bells toll together at intervals of 2, 4, 6, 8, 10, and 12 seconds respectively. In 30 minutes, how many times will they toll together?',
      hi: '6 घंटियां क्रमशः 2, 4, 6, 8, 10 और 12 सेकंड के अंतराल पर बजती हैं। 30 मिनट में वे कितनी बार एक साथ बजेंगी?',
    },
    solution: {
      en: 'LCM(2, 4, 6, 8, 10, 12) = 120 seconds = 2 minutes. In 30 minutes: 30 / 2 = 15 times, plus the initial toll at start = 15 + 1 = 16 times!',
      hi: 'ल.स.प.(2, 4, 6, 8, 10, 12) = 120 सेकंड = 2 मिनट। 30 मिनट में: 30 / 2 = 15 बार + प्रारंभ में 1 बार = कुल 16 बार!',
    },
  },
  {
    id: 'sc-fraction-cross-multiply',
    subject: 'Mathematics',
    topic: {
      en: 'Fractions: Fast Comparison & Sorting (Cross-Product Rule)',
      hi: 'भिन्न: तीव्र तुलना एवं आरोही/अवरोही क्रम (क्रॉस-गुणन नियम)',
    },
    standardMethod: {
      en: 'Converting each fraction into 3-place decimals or finding huge common denominators.',
      hi: 'सभी भिन्नों को दशमलव में बदलना या बड़े हरों का ल.स. लेना, जिसमें अधिक समय लगता है।',
    },
    shortcutMethod: {
      en: 'To compare a/b and c/d: cross multiply! Compute a × d on left and b × c on right. If a×d > b×c, then a/b > c/d. Repeat pairwise for instant tournament sorting.',
      hi: 'a/b और c/d की तुलना हेतु: तिर्यक गुणा (a × d) और (b × c) करें। यदि a×d > b×c है तो a/b > c/d होगा।',
    },
    speedAdvantage: 'Sorts 4 fractions in 15 seconds without a single division step.',
    exampleQuestion: {
      en: 'Which is greater: 11/13 or 13/15?',
      hi: '11/13 और 13/15 में से कौन सी भिन्न बड़ी है?',
    },
    solution: {
      en: 'Cross-multiply: Left = 11 × 15 = 165. Right = 13 × 13 = 169. Since 169 > 165, 13/15 > 11/13!',
      hi: 'तिर्यक गुणा: बायां = 11 × 15 = 165। दायां = 13 × 13 = 169। चूँकि 169 > 165, अतः 13/15 बड़ी भिन्न है!',
    },
  },
];
