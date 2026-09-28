import type { FormulaItem } from '../../types';

export const FORMULA_ITEMS: FormulaItem[] = [
  {
    id: 'form-math-ci-diff',
    subject: 'Arithmetic',
    title: {
      en: 'Difference Between Compound Interest and Simple Interest (2 & 3 Years)',
      hi: 'चक्रवृद्धि ब्याज एवं साधारण ब्याज में अंतर (2 एवं 3 वर्ष)',
    },
    formula: '2 Years: D = P(R/100)²  |  3 Years: D = P(R/100)² × (3 + R/100)',
    explanation: {
      en: 'Where D is the difference between CI and SI, P is Principal sum, and R is annual interest rate.',
      hi: 'जहाँ D = CI और SI का अंतर, P = मूलधन, तथा R = वार्षिक ब्याज दर प्रतिशत है।',
    },
    example: {
      en: 'If difference between CI and SI on ₹10,000 at 10% for 2 years is asked: D = 10000 × (10/100)² = ₹100.',
      hi: 'यदि ₹10,000 पर 10% वार्षिक दर से 2 वर्ष के CI और SI का अंतर: D = 10000 × (1/10)² = ₹100।',
    },
    examApplicability: ['rrb-ntpc', 'rrb-group-d', 'rrb-je'],
  },
  {
    id: 'form-math-successive-pct',
    subject: 'Arithmetic',
    title: {
      en: 'Successive Percentage Change / Equivalent Discount Formula',
      hi: 'क्रमिक प्रतिशत परिवर्तन एवं समतुल्य छूट सूत्र',
    },
    formula: 'Net % Change = a + b + (a × b) / 100',
    explanation: {
      en: 'Used when a value changes by a% followed by b%. Use negative sign for discount or reduction.',
      hi: 'जब किसी राशि में पहले a% और फिर b% का बदलाव हो। छूट या कमी के लिए ऋणात्मक चिह्न (-) लगाएं।',
    },
    example: {
      en: 'Two successive discounts of 20% and 10%: Net Discount = -20 - 10 + ((-20)(-10))/100 = -30 + 2 = -28%.',
      hi: '20% और 10% की दो क्रमिक छूट: कुल छूट = -20 - 10 + 2 = -28% (यानी 28% समतुल्य छूट)।',
    },
    examApplicability: ['rrb-ntpc', 'rrb-group-d', 'rrb-je'],
  },
  {
    id: 'form-math-mode-relation',
    subject: 'Statistics',
    title: {
      en: 'Empirical Relationship Between Mode, Median, and Mean',
      hi: 'बहुलक (Mode), माध्यिका (Median) एवं माध्य (Mean) में आनुभविक संबंध',
    },
    formula: 'Mode = 3(Median) - 2(Mean)',
    explanation: {
      en: 'Classic RRB favourite question for moderately skewed distributions.',
      hi: 'आरआरबी का सर्वाधिक पसंदीदा प्रश्न जो असममित बंटन में तीनों केंद्रीय प्रवृत्तियों को जोड़ता है।',
    },
    example: {
      en: 'If Mean = 24 and Median = 26, then Mode = 3(26) - 2(24) = 78 - 48 = 30.',
      hi: 'यदि माध्य = 24 तथा माध्यिका = 26 हो, तो बहुलक = 3(26) - 2(24) = 78 - 48 = 30 होगा।',
    },
    examApplicability: ['rrb-ntpc', 'rrb-group-d'],
  },
  {
    id: 'form-math-mensuration-sphere',
    subject: 'Mensuration',
    title: {
      en: 'Sphere and Hemisphere Volume & Surface Area Formulas',
      hi: 'गोला एवं अर्धगोला आयतन तथा पृष्ठीय क्षेत्रफल',
    },
    formula: 'Sphere Vol = (4/3)πr³ | Total Surface = 4πr² | Hemisphere TSA = 3πr²',
    explanation: {
      en: 'Note that the total surface area of a solid hemisphere includes the circular base flat area (2πr² + πr² = 3πr²).',
      hi: 'ठोस अर्धगोले का संपूर्ण पृष्ठीय क्षेत्रफल आधार वृत्त जोड़कर 3πr² होता है, जबकि वक्र पृष्ठ 2πr² होता है।',
    },
    example: {
      en: 'Radius r = 7 cm: Total Surface Area of solid hemisphere = 3 × (22/7) × 7 × 7 = 462 cm².',
      hi: 'त्रिज्या r = 7 सेमी: ठोस अर्धगोले का संपूर्ण पृष्ठीय क्षेत्रफल = 3 × (22/7) × 49 = 462 वर्ग सेमी।',
    },
    examApplicability: ['rrb-ntpc', 'rrb-group-d', 'rrb-je'],
  },
  {
    id: 'form-sci-kinematics',
    subject: 'Physics',
    title: {
      en: 'Newton Three Equations of Motion Under Uniform Acceleration',
      hi: 'एकसमान त्वरण के अधीन गति के तीन समीकरण',
    },
    formula: '1) v = u + at  |  2) s = ut + (1/2)at²  |  3) v² = u² + 2as',
    explanation: {
      en: 'Where u = initial velocity, v = final velocity, a = acceleration, s = displacement, t = time.',
      hi: 'जहाँ u = प्रारंभिक वेग, v = अंतिम वेग, a = त्वरण, s = विस्थापन, t = समय है।',
    },
    example: {
      en: 'A train starts from rest (u=0) with acceleration 2 m/s² for 10 s: Distance s = 0 + 0.5 × 2 × 10² = 100 m.',
      hi: 'विरामावस्था से 2 m/s² के त्वरण से 10 सेकंड चलने पर तय दूरी: s = 0 + 0.5 × 2 × 100 = 100 मीटर।',
    },
    examApplicability: ['rrb-group-d', 'rrb-je', 'rrb-ntpc'],
  },
  {
    id: 'form-sci-electricity-power',
    subject: 'Physics',
    title: {
      en: 'Ohm’s Law and Electric Power Dissipation Formulas',
      hi: 'ओम का नियम एवं विद्युत शक्ति क्षय सूत्र',
    },
    formula: 'V = IR  |  Power P = VI = I²R = V²/R  |  Energy = P × t (kWh)',
    explanation: {
      en: '1 commercial unit of electricity = 1 kWh = 3.6 × 10⁶ Joules.',
      hi: 'विद्युत की 1 व्यावसायिक यूनिट = 1 किलोवाट घंटा (kWh) = 3.6 × 10⁶ जूल।',
    },
    example: {
      en: 'An appliance draws 5 A from 220 V line for 2 hours: Energy = (220 × 5 × 2)/1000 = 2.2 kWh (units).',
      hi: '220 V पर 5 A धारा 2 घंटे तक लेने पर विद्युत खपत = (220 × 5 × 2) / 1000 = 2.2 यूनिट।',
    },
    examApplicability: ['rrb-group-d', 'rrb-je'],
  },
  {
    id: 'form-eng-bending',
    subject: 'Engineering',
    title: {
      en: 'Euler-Bernoulli Beam Bending Equation (Civil & Mechanical)',
      hi: 'बीम बंकन का यूलर-बरनौली समीकरण (सिविल एवं मैकेनिकल)',
    },
    formula: 'M / I = σ / y = E / R',
    explanation: {
      en: 'M = Bending Moment, I = Moment of Inertia, σ = Bending stress, y = distance from neutral axis, E = Young Modulus, R = Radius of curvature.',
      hi: 'M = बंकन आघूर्ण, I = जड़त्व आघूर्ण, σ = बंकन प्रतिबल, y = तटस्थ अक्ष से दूरी, E = यंग मापांक, R = वक्रता त्रिज्या।',
    },
    example: {
      en: 'Section Modulus Z = I / y_max. Maximum bending stress σ_max = M / Z.',
      hi: 'अनुप्रस्थ काट मापांक Z = I / y_max। अधिकतम बंकन प्रतिबल σ_max = M / Z।',
    },
    examApplicability: ['rrb-je'],
  },
];
