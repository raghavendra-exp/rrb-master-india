import type { TopicStudyGuide } from './topicStudyNotes';

export const ENGINEERING_TOPIC_STUDY_GUIDES: Record<string, TopicStudyGuide> = {
  // =========================================================================
  // 1. CIVIL HYDRAULICS, RAILWAY TURNOUTS & ENVIRONMENTAL
  // =========================================================================
  'civil-hydraulics-railway-environmental': {
    topicId: 'civil-hydraulics-railway-environmental',
    title: {
      en: 'Civil Engineering: Hydraulics, P-Way Turnouts & Environmental Engineering',
      hi: 'सिविल इंजीनियरिंग: जल विज्ञान, पी-वे टर्नआउट एवं पर्यावरण इंजीनियरिंग',
    },
    subjectCategory: { en: 'Technical Engineering (Civil)', hi: 'तकनीकी इंजीनियरिंग (सिविल)' },
    targetExam: { en: 'RRB JE CBT-2 (Civil Engineering)', hi: 'आरआरबी जेई सीबीटी-2 (सिविल इंजीनियरिंग)' },
    recommendedStudyTime: '4.0 Hours',
    blueprintImage: {
      src: './assets/rrb_science_engineering_lab.jpg',
      caption: {
        en: 'Hydraulic Flow & P-Way Turnout Geometry Blueprint',
        hi: 'हाइड्रोलिक प्रवाह एवं पी-वे टर्नआउट ज्यामिति ब्लूप्रिंट',
      },
    },
    conceptualTheory: {
      heading: {
        en: 'Fluid Dynamics, Pipe Losses, Track Points & Crossings, and Wastewater Treatment',
        hi: 'तरल गतिकी, पाइप घर्षण हानि, ट्रैक पॉइंट्स व क्रॉसिंग्स, एवं अपशिष्ट जल उपचार',
      },
      deepExplanation: {
        en: 'This specialized discipline core for RRB JE Civil covers three major domains: (1) Fluid Mechanics & Hydraulics: Bernoulli’s energy conservation equation along a streamline: P/γ + v²/(2g) + z = Constant. Darcy-Weisbach head loss equation for viscous flow through pipes: h_f = 4flv² / (2gd) or f’lv² / (2gd). Open channel flow using Manning’s formula: v = (1/n) · R^(2/3) · S^(1/2). (2) Railway Track Engineering (Turnouts): A turnout enables trains to divert from one track to another. Components include a pair of points (switches with stock rail and tongue rail), lead rails, check rails, and crossing (frog). Standard angles in Indian Railways: 1 in 8.5 (speed restriction 15 km/h on loop line) and 1 in 12 (speed limit 30 km/h). Sleeper spacing at crossings is rigorously maintained. (3) Environmental Engineering: Water treatment stages (Screening -> Aeration -> Coagulation with Alum Al₂(SO₄)₃ -> Flocculation -> Sedimentation -> Rapid Sand Filtration -> Disinfection via Chlorination). Wastewater testing relies on Biochemical Oxygen Demand (BOD₅ at 20°C: standard dilution test measuring oxygen consumed by microorganisms in 5 days). Chemical Oxygen Demand (COD) measures total chemically oxidizable matter using potassium dichromate (K₂Cr₂O₇); COD is ALWAYS greater than or equal to BOD.',
        hi: 'आरआरबी जेई सिविल इंजीनियरिंग के इस खंड में तीन प्रमुख क्षेत्र हैं: (1) तरल यांत्रिकी एवं जल विज्ञान: बर्नौली का ऊर्जा संरक्षण समीकरण (दाब शीर्ष + गतिज शीर्ष + स्थितिज शीर्ष = नियतांक)। पाइपों में घर्षण हानि हेतु डार्सी-वेसबैक समीकरण: h_f = 4flv² / (2gd)। खुले चैनलों में मैनिंग का सूत्र: v = (1/n) · R^(2/3) · S^(1/2)। (2) रेलवे ट्रैक इंजीनियरिंग (टर्नआउट्स): ट्रेनों को एक ट्रैक से दूसरे ट्रैक पर मोड़ने हेतु टर्नआउट का उपयोग होता है। इसमें टंग रेल, स्टॉक रेल, चेक रेल और क्रॉसिंग शामिल होती हैं। भारतीय रेल में दो मानक क्रॉसिंग प्रयुक्त होती हैं: 1 in 8.5 (लूप लाइन पर गति सीमा 15 किमी/घंटा) एवं 1 in 12 (गति सीमा 30 किमी/घंटा)। (3) पर्यावरण इंजीनियरिंग: जल शोधन के चरण (स्क्रीनिंग -> वातन -> फिटकरी द्वारा स्कंदन -> अवसादन -> तीव्र बालू निस्यंदन -> क्लोरीन द्वारा रोगाणुनाशन)। अपशिष्ट जल परीक्षण में 5-दिवसीय जैव रासायनिक ऑक्सीजन मांग (BOD₅ at 20°C) तथा रासायनिक ऑक्सीजन मांग (COD) प्रमुख हैं। हमेशा COD ≥ BOD होता है।',
      },
      keyMechanisms: [
        {
          en: 'Turnout Speed Restrictions in Indian Railways: 1 in 8.5 crossing: Maximum permissible turnout speed is 15 km/h. 1 in 12 crossing: Maximum turnout speed is 30 km/h (upgraded to 50 km/h on curved thick-web switches).',
          hi: 'टर्नआउट गति सीमाएं: 1 in 8.5 क्रॉसिंग पर अधिकतम गति 15 किमी/घंटा होती है। 1 in 12 क्रॉसिंग पर अधिकतम गति 30 किमी/घंटा होती है।',
        },
        {
          en: 'BOD vs COD Relationship: BOD measures biodegradable organic matter. COD measures both biodegradable and non-biodegradable oxidizable matter. Ratio BOD₅ / COD < 0.2 indicates non-biodegradable industrial toxic waste.',
          hi: 'BOD बनाम COD: BOD केवल जैव निम्नीकरणीय कार्बनिक पदार्थों को मापता है, जबकि COD सभी ऑक्सीकरण योग्य पदार्थों को मापता है। हमेशा COD का मान BOD से अधिक होता है।',
        },
        {
          en: 'Hydraulic Jump Energy Dissipation: Occurs when supercritical flow (Froude number Fr > 1) transitions to subcritical flow (Fr < 1), dissipating substantial kinetic energy below spillways.',
          hi: 'हाइड्रोलिक जंप: जब प्रवाह सुपरक्रिटिकल (Fr > 1) से सबक्रिटिकल (Fr < 1) में बदलता है, तो ऊर्जा का भारी क्षय होता है।',
        },
      ],
    },
    formulasAndLaws: [
      {
        label: 'Darcy-Weisbach Friction Loss',
        expression: 'h_f = (4 × f × L × v²) / (2 × g × d)',
        explanation: { en: 'Head loss due to pipe wall friction in turbulent pipe flow.', hi: 'पाइप में घर्षण के कारण होने वाली शीर्ष हानि का सूत्र।' },
      },
      {
        label: 'Manning’s Open Channel Formula',
        expression: 'v = (1 / n) × R^(2/3) × S^(1/2)',
        explanation: { en: 'Calculates flow velocity in sewers, drains, and open canals.', hi: 'सीवर और खुली नहरों में जल प्रवाह वेग का सूत्र।' },
      },
      {
        label: '5-Day BOD Formula',
        expression: 'BOD₅ = (DO_initial - DO_final) × Dilution Factor',
        explanation: { en: 'Standard 20°C incubation test for wastewater strength.', hi: 'अपशिष्ट जल प्रदूषण मापन हेतु 5-दिवसीय बीओडी परीक्षण।' },
      },
    ],
    workedExamples: [
      {
        id: 'civ-ex-1',
        level: 'RRB JE Technical',
        question: {
          en: 'What is the maximum permissible operating speed for a passenger train negotiating a 1 in 8.5 turnout switch on Indian Railways Broad Gauge track?',
          hi: 'भारतीय रेल ब्रॉड गेज ट्रैक पर 1 in 8.5 टर्नआउट क्रॉसिंग से गुजरने वाली ट्रेन की अधिकतम अनुमेय गति कितनी होती है?',
        },
        standardSolution: {
          en: 'Step 1: Indian Railways Permanent Way Manual specifies permissible turnout speed limits based on crossing angle.\nStep 2: A 1 in 8.5 turnout has an acute diverging angle, creating sharp centrifugal acceleration on diverging stock.\nStep 3: The maximum speed permitted on 1 in 8.5 turnout is strictly 15 km/h.\nAnswer: 15 km/h.',
          hi: 'चरण 1: भारतीय रेल पी-वे नियमावली के अनुसार क्रॉसिंग के कोण पर गति सीमा निर्धारित होती है।\nचरण 2: 1 in 8.5 टर्नआउट पर तीक्ष्ण मोड़ होने के कारण गति सीमा 15 किमी/घंटा रखी जाती है।\nउत्तर: 15 किमी/घंटा।',
        },
        topperShortcut: {
          en: '⚡ 2-Second JE Fact: 1 in 8.5 = 15 km/h | 1 in 12 = 30 km/h. Standard twin benchmark!',
          hi: '⚡ सीधा तथ्य: 1 in 8.5 = 15 किमी/घंटा | 1 in 12 = 30 किमी/घंटा।',
        },
      },
    ],
    commonTraps: [
      {
        en: 'Friction factor vs Coefficient of friction: Darcy friction factor f’ = 4f, where f is Fanning friction factor. Make sure whether the question specifies Darcy friction factor (h_f = f’Lv²/2gd) or coefficient of friction (h_f = 4flv²/2gd).',
        hi: 'घर्षण गुणांक भ्रम: डार्सी घर्षण गुणांक f’ = 4f होता है। प्रश्न में ध्यान दें कि 4 का गुणा सूत्र में करना है या गुणांक में पहले से शामिल है।',
      },
    ],
    topperSpeedHacks: [
      {
        en: 'Disinfection Order in Water Treatment: Disinfection via chlorine (residual 0.2 mg/L after 30 min contact time) is ALWAYS the final stage before pumping to distribution reservoirs.',
        hi: 'क्लोरीनीकरण का नियम: 30 मिनट संपर्क समय के बाद नलों में 0.2 मिलीग्राम/लीटर अवशिष्ट क्लोरीन रहनी चाहिए।',
      },
    ],
    quickRevisionBulletPoints: [
      { en: 'BOD of drinking water must be 0 mg/L.', hi: 'पीने के पानी का BOD शून्य (0 mg/L) होना चाहिए।' },
      { en: 'Froude number Fr = v / √(gy). Fr = 1 is Critical flow.', hi: 'फ्राउड संख्या Fr = 1 पर क्रांतिक प्रवाह (Critical flow) होता है।' },
    ],
    relatedPracticeCategory: 'JE Technical Core',
  },

  // =========================================================================
  // 2. MECHANICAL SOM, TOM & FLUID DYNAMICS
  // =========================================================================
  'mech-som-tom-fluids': {
    topicId: 'mech-som-tom-fluids',
    title: {
      en: 'Mechanical: Strength of Materials (SOM), Theory of Machines (TOM) & Fluids',
      hi: 'मैकेनिकल: पदार्थों की सामर्थ्य (SOM), मशीनों के सिद्धांत (TOM) एवं द्रव यांत्रिकी',
    },
    subjectCategory: { en: 'Technical Engineering (Mechanical)', hi: 'तकनीकी इंजीनियरिंग (मैकेनिकल)' },
    targetExam: { en: 'RRB JE CBT-2 (Mechanical Engineering)', hi: 'आरआरबी जेई सीबीटी-2 (मैकेनिकल)' },
    recommendedStudyTime: '4.0 Hours',
    blueprintImage: {
      src: './assets/rrb_science_engineering_lab.jpg',
      caption: {
        en: 'Mechanical Mechanics & Gear Train Kinematics Blueprint',
        hi: 'यांत्रिक संरचना एवं गियर ट्रेन गतिज ब्लूप्रिंट',
      },
    },
    conceptualTheory: {
      heading: {
        en: 'Stress-Strain Tensors, Bending/Torsion Equations & Epicyclic Gear Trains',
        hi: 'प्रतिबल-विकृति टेंसर, नमन एवं मरोड़ समीकरण, एवं एपिसाइक्लिक गियर ट्रेन',
      },
      deepExplanation: {
        en: 'Strength of Materials (SOM) and Theory of Machines (TOM) form the analytical backbone of RRB JE Mechanical: (1) Stress and Strain: Hooke’s Law states stress σ = E · ε (within elastic limit). Elastic Constants: Young’s Modulus E, Shear Modulus G, Bulk Modulus K, and Poisson’s Ratio μ. Relations: E = 2G(1 + μ) = 3K(1 - 2μ) = 9KG / (3K + G). Pure Bending Equation: M/I = σ/y = E/R (where M is bending moment, I is moment of inertia, σ is bending stress, y is distance from neutral axis, R is radius of curvature). Torsion Equation for circular shafts: T/J = τ/r = Gθ/L. (2) Theory of Machines: Kinematic Pairs: Lower pairs (surface/area contact: sliding, turning, screw), Higher pairs (line/point contact: cam and follower, meshing gears, ball bearings). Degrees of freedom by Kutzbach criterion: F = 3(n - 1) - 2j - h. Gear terminology: Module m = D / T (pitch diameter / number of teeth), Circular Pitch p_c = πm, Diametral Pitch P_d = T / D. In Epicyclic gear trains, velocity ratios are determined using the tabular method relative to the revolving arm.',
        hi: 'मैकेनिकल इंजीनियरिंग में एसओएम और टीओएम सबसे महत्वपूर्ण विषय हैं: (1) पदार्थों की सामर्थ्य (SOM): हुक का नियम प्रतिबल = E × विकृति। प्रत्यास्थता गुणांकों में संबंध: E = 2G(1 + μ) = 3K(1 - 2μ) = 9KG / (3K + G)। शुद्ध नमन समीकरण: M/I = σ/y = E/R। वृत्ताकार शाफ्ट का मरोड़ समीकरण: T/J = τ/r = Gθ/L। (2) मशीनों के सिद्धांत (TOM): गतिज युग्म: निम्न युग्म (सतह संपर्क: स्लाइडिंग, टर्निंग, स्क्रू), उच्च युग्म (रेखा या बिंदु संपर्क: कैम-फॉलोअर, गियर मेशिंग, बॉल बेयरिंग)। कुट्जबैक सूत्र द्वारा स्वतंत्रता की कोटि: F = 3(n - 1) - 2j - h। गियर शब्दावली: मॉड्यूल m = D / T (पिच व्यास / दांतों की संख्या), वृत्तीय पिच p_c = πm। एपिसाइक्लिक गियर ट्रेन में वेग अनुपात सारणी विधि द्वारा निकाला जाता है।',
      },
      keyMechanisms: [
        {
          en: 'Elastic Modulus Triple Relations: Memorize: E = 2G(1 + μ) and E = 3K(1 - 2μ). If Poisson’s ratio μ = 0.25, E = 2G(1.25) = 2.5G => G = 0.4E.',
          hi: 'प्रत्यास्थता गुणांक संबंध: E = 2G(1 + μ) एवं E = 3K(1 - 2μ)। प्वॉइसन अनुपात μ = 0.25 होने पर G = 0.4E होता है।',
        },
        {
          en: 'Lower vs Higher Pair Distinction: Lower pairs have AREA/SURFACE contact (e.g. piston in cylinder, nut and bolt). Higher pairs have POINT/LINE contact (e.g. cam and follower, ball bearings, roller bearings).',
          hi: 'निम्न बनाम उच्च युग्म: सतह संपर्क वाले युग्म निम्न युग्म (Lower pair) कहलाते हैं (पिस्टन-सिलेंडर)। बिंदु या रेखा संपर्क वाले युग्म उच्च युग्म (Higher pair) कहलाते हैं (कैम-फॉलोअर, बॉल बेयरिंग)।',
        },
      ],
    },
    formulasAndLaws: [
      {
        label: 'Pure Bending Equation',
        expression: 'M / I = σ / y = E / R',
        explanation: { en: 'Relates bending moment M, section inertia I, stress σ, fiber distance y, and radius R.', hi: 'बीम पर नमन आघूर्ण, प्रतिबल एवं वक्रता त्रिज्या का संबंध।' },
      },
      {
        label: 'Pure Torsion Equation',
        expression: 'T / J = τ / r = (G × θ) / L',
        explanation: { en: 'Calculates shear stress τ and angle of twist θ in shafts under torque T.', hi: 'शाफ्ट में टॉर्क, अपरूपण प्रतिबल और मरोड़ कोण का सूत्र।' },
      },
      {
        label: 'Gear Module Definition',
        expression: 'm = D / T  |  Circular Pitch p_c = π × m',
        explanation: { en: 'Module m is the fundamental size index of gear teeth in mm.', hi: 'गियर दांतों का मॉड्यूल m = पिच व्यास / दांतों की संख्या।' },
      },
    ],
    workedExamples: [
      {
        id: 'mech-ex-1',
        level: 'RRB JE Technical',
        question: {
          en: 'A solid circular shaft of diameter 40 mm is subjected to a torque of 500 N·m. What is the maximum shear stress induced at the outer surface of the shaft?',
          hi: '40 मिमी व्यास वाले एक ठोस वृत्ताकार शाफ्ट पर 500 N·m का टॉर्क लगाया जाता है। शाफ्ट की बाहरी सतह पर उत्पन्न अधिकतम अपरूपण प्रतिबल कितना होगा?',
        },
        standardSolution: {
          en: 'Step 1: Polar moment of inertia for solid circular shaft: J = π d⁴ / 32.\nStep 2: Polar section modulus Z_p = J / r = (π d⁴ / 32) / (d / 2) = π d³ / 16.\nStep 3: Maximum shear stress τ_max = T / Z_p = 16 T / (π d³).\nStep 4: Substitute values: T = 500 N·m = 500 × 10³ N·mm. d = 40 mm.\nτ_max = (16 × 500 × 10³) / (π × 40³) = 8,000,000 / (π × 64,000) = 125 / π ≈ 39.79 MPa.\nAnswer: 39.79 N/mm² (MPa).',
          hi: 'चरण 1: ठोस शाफ्ट का पोलर सेक्शन मॉडुलस Z_p = π d³ / 16।\nचरण 2: अधिकतम अपरूपण प्रतिबल τ = 16 T / (π d³)।\nचरण 3: T = 500 × 10³ N·mm, d = 40 मिमी।\nτ = (16 × 500 × 10³) / (π × 64,000) = 125 / π ≈ 39.79 MPa।\nउत्तर: 39.79 MPa।',
        },
        topperShortcut: {
          en: '⚡ Formula Code: τ = 16T / πd³. Directly: 16(500,000)/(64,000π) = 125/π ≈ 39.8 MPa!',
          hi: '⚡ सीधा सूत्र: τ = 16T / πd³ = 125/π ≈ 39.8 MPa!',
        },
      },
    ],
    commonTraps: [
      {
        en: 'Diameter cubed vs Fourth power: Polar moment of inertia J has d⁴ (πd⁴/32), but Polar Section Modulus Z_p has d³ (πd³/16). Stress calculation uses d³, not d⁴!',
        hi: 'd³ बनाम d⁴ भ्रम: पोलर जड़त्व आघूर्ण J में d⁴ होता है, परंतु प्रतिबल गणना में पोलर सेक्शन मॉडुलस Z_p प्रयुक्त होता है जिसमें d³ आता है।',
      },
    ],
    topperSpeedHacks: [
      {
        en: 'Poisson’s Ratio Limits: For practical engineering materials, Poisson’s ratio μ lies strictly between 0 and 0.5. For cork, μ ≈ 0; for rubber, μ ≈ 0.5 (incompressible).',
        hi: 'प्वॉइसन अनुपात की सीमाएं: इंजीनियरिंग पदार्थों हेतु μ का मान 0 से 0.5 के बीच होता है। कॉर्क हेतु 0, रबर हेतु 0.5।',
      },
    ],
    quickRevisionBulletPoints: [
      { en: 'Bending stress at the neutral axis of a beam is always ZERO.', hi: 'बीम के न्यूट्रल अक्ष पर नमन प्रतिबल हमेशा शून्य होता है।' },
      { en: 'Shear stress at the neutral axis of a rectangular beam is MAXIMUM (1.5 × average).', hi: 'आयताकार बीम के न्यूट्रल अक्ष पर अपरूपण प्रतिबल अधिकतम (1.5 गुना औसत) होता है।' },
    ],
    relatedPracticeCategory: 'JE Technical Core',
  },

  // =========================================================================
  // 3. MECHANICAL THERMO, IC ENGINES, RAC & PRODUCTION
  // =========================================================================
  'mech-thermo-ic-rac-production': {
    topicId: 'mech-thermo-ic-rac-production',
    title: {
      en: 'Mechanical: Thermodynamics, IC Engines, Refrigeration & Manufacturing',
      hi: 'मैकेनिकल: ऊष्मागतिकी, आईसी इंजन, प्रशीतन एवं उत्पादन तकनीक',
    },
    subjectCategory: { en: 'Technical Engineering (Mechanical)', hi: 'तकनीकी इंजीनियरिंग (मैकेनिकल)' },
    targetExam: { en: 'RRB JE CBT-2 (Mechanical Engineering)', hi: 'आरआरबी जेई सीबीटी-2 (मैकेनिकल)' },
    recommendedStudyTime: '4.0 Hours',
    blueprintImage: {
      src: './assets/rrb_science_engineering_lab.jpg',
      caption: {
        en: 'Thermodynamic Power Cycles & Tool Life Kinetics',
        hi: 'ऊष्मागतिकी पावर चक्र एवं टूल आयु गतिज आरेख',
      },
    },
    conceptualTheory: {
      heading: {
        en: 'Thermodynamic Laws, Air-Standard Cycles, Vapour Compression & Tool Wear',
        hi: 'ऊष्मागतिकी नियम, वायु-मानक चक्र, वाष्प संपीड़न एवं टूल घिसाव समीकरण',
      },
      deepExplanation: {
        en: 'Thermodynamic Laws & Cycles: (1) First Law: δQ = dU + δW (energy conservation). Second Law: Kelvin-Planck statement (impossible to build 100% efficient heat engine) and Clausius statement (heat cannot spontaneously flow from colder to hotter body without external work). (2) Carnot Cycle: Reversible benchmark with efficiency η = 1 - T_L / T_H (temperatures in Kelvin). Otto Cycle (constant volume heat addition, petrol engines): efficiency η = 1 - 1 / r^(γ-1). Diesel Cycle (constant pressure heat addition): for same compression ratio r, Otto cycle efficiency > Diesel cycle efficiency. (3) Refrigeration & AC: 1 Ton of Refrigeration (1 TR) = 3.517 kW = 210 kJ/min (rate of heat extraction to freeze 1 ton of water at 0°C into ice in 24 hours). Vapour Compression Refrigeration Cycle (VCRC) has 4 components: Compressor (isentropic compression) -> Condenser (heat rejection at high P) -> Expansion Valve (isenthalpic throttling, h₁ = h₂) -> Evaporator (refrigeration effect at low P). COP = Refrigeration Effect / Compressor Work. (4) Manufacturing: Taylor’s Tool Life Equation: V · T^n = C (where V is cutting speed, T is tool life, n is tool exponent: HSS n ≈ 0.1-0.2, Carbide n ≈ 0.2-0.4, Ceramic n ≈ 0.4-0.6).',
        hi: 'ऊष्मागतिकी नियम एवं चक्र: (1) प्रथम नियम: δQ = dU + δW। द्वितीय नियम: केल्विन-प्लैंक कथन (100% दक्ष इंजन असंभव) एवं क्लॉसियस कथन (ऊष्मा स्वतः ठंडे से गर्म निकाय की ओर नहीं जा सकती)। (2) कार्नो चक्र: अधिकतम दक्षता η = 1 - T_L / T_H (तापमान केल्विन में)। ऑटो चक्र (पेट्रोल इंजन): दक्षता η = 1 - 1 / r^(γ-1)। समान संपीड़न अनुपात पर ऑटो चक्र की दक्षता डीजल चक्र से अधिक होती है। (3) प्रशीतन (RAC): 1 टन प्रशीतन (1 TR) = 3.517 kW = 210 kJ/मिनट। वाष्प संपीड़न चक्र (VCRC) के 4 भाग: कंप्रेसर (आइसेंट्रोपिक संपीड़न) -> कंडेंसर (ऊष्मा उत्सर्जन) -> विस्तार वाल्व (सम-एन्थैल्पी थ्रॉटलिंग h₁ = h₂) -> इवेपोरेटर (शीतलन प्रभाव)। COP = प्रशीतन प्रभाव / कार्य। (4) उत्पादन: टेलर का टूल आयु समीकरण: V · T^n = C (जहाँ V कर्तन गति, T टूल आयु, n टूल घातांक है)।',
      },
      keyMechanisms: [
        {
          en: 'Absolute Temperature in Carnot Efficiency: Always convert Celsius to Kelvin: T(K) = T(°C) + 273.15. If heat source is 327°C, T_H = 327 + 273 = 600 K. Using Celsius yields completely invalid negative or >100% efficiencies!',
          hi: 'कार्नो सूत्र में परम ताप: तापमान को हमेशा केल्विन में बदलें: T(K) = T(°C) + 273। 327°C का अर्थ T = 600 K है। सेल्सियस का प्रयोग करने पर उत्तर पूरी तरह गलत आएगा!',
        },
        {
          en: '1 TR Definition in Engineering Units: 1 TR = 3.517 kW = 3.517 kJ/s = 210 kJ/min = 50 kcal/min. High-frequency unit conversion question in RRB JE Mechanical.',
          hi: '1 TR की इकाइयां: 1 TR = 3.517 kW = 210 kJ/मिनट = 50 kcal/मिनट।',
        },
      ],
    },
    formulasAndLaws: [
      {
        label: 'Carnot Engine Efficiency',
        expression: 'η_Carnot = 1 - (T_L / T_H) = (T_H - T_L) / T_H',
        explanation: { en: 'Upper bound theoretical efficiency of any heat engine between two temperatures.', hi: 'दो तापमानों के मध्य कार्यरत किसी भी ऊष्मा इंजन की अधिकतम सैद्धांतिक दक्षता।' },
      },
      {
        label: 'Taylor’s Tool Life Law',
        expression: 'V × T^n = C',
        explanation: { en: 'Relates cutting speed V to tool lifespan T in metal machining.', hi: 'धातु कर्तन गति V एवं टूल आयु T का संबंध।' },
      },
    ],
    workedExamples: [
      {
        id: 'thermo-ex-1',
        level: 'RRB JE Technical',
        question: {
          en: 'A Carnot heat engine operates between temperatures of 327°C and 27°C. Find its thermal efficiency.',
          hi: 'एक कार्नो ऊष्मा इंजन 327°C और 27°C के तापमानों के बीच कार्य करता है। इसकी तापीय दक्षता ज्ञात कीजिए।',
        },
        standardSolution: {
          en: 'Step 1: Convert temperatures from Celsius to Kelvin:\nT_H = 327 + 273 = 600 K.\nT_L = 27 + 273 = 300 K.\nStep 2: Apply Carnot efficiency formula: η = 1 - (T_L / T_H).\nStep 3: η = 1 - (300 / 600) = 1 - 0.5 = 0.5 = 50%.\nAnswer: 50%.',
          hi: 'चरण 1: तापमान को केल्विन में बदलें: T_H = 327 + 273 = 600 K। T_L = 27 + 273 = 300 K।\nचरण 2: सूत्र: η = 1 - (T_L / T_H) = 1 - (300 / 600) = 0.5 = 50%।\nउत्तर: 50%।',
        },
        topperShortcut: {
          en: '⚡ 5-Second Mental Calculation: T_H = 600 K, T_L = 300 K. ΔT / T_H = 300 / 600 = 50% directly!',
          hi: '⚡ सीधा उत्तर: (600 - 300) / 600 = 300 / 600 = 50%!',
        },
      },
    ],
    commonTraps: [
      {
        en: 'Isenthalpic process in Expansion Valve: The expansion process in a vapour compression refrigerator throttling valve is ISENTHALPIC (h₁ = h₂), NOT isentropic. Enthalpy remains constant; entropy increases.',
        hi: 'विस्तार वाल्व में एन्थैल्पी नियत: रेफ्रिजरेटर के विस्तार वाल्व (थ्रॉटलिंग) में एन्थैल्पी स्थिर (h₁ = h₂) रहती है, एन्ट्रॉपी नहीं।',
      },
    ],
    topperSpeedHacks: [
      {
        en: 'Doubling Speed Tool Life Effect: In Taylor’s equation VT^n = C, since n is positive, doubling the cutting speed V drastically REDUCES tool life T by a factor of (1/2)^(1/n).',
        hi: 'टूल आयु प्रभाव: कर्तन गति V को दोगुना करने पर टूल की आयु T बहुत तेजी से घट जाती है।',
      },
    ],
    quickRevisionBulletPoints: [
      { en: 'Throttling process has zero heat transfer (Q = 0) and zero work transfer (W = 0).', hi: 'थ्रॉटलिंग प्रक्रिया में ऊष्मा स्थानांतरण एवं कार्य दोनों शून्य होते हैं।' },
      { en: 'COP of heat pump = 1 + COP of refrigerator.', hi: 'हीट पंप का COP = 1 + रेफ्रिजरेटर का COP।' },
    ],
    relatedPracticeCategory: 'JE Technical Core',
  },

  // =========================================================================
  // 4. ELECTRICAL CIRCUITS, MACHINES & DRIVES
  // =========================================================================
  'elec-circuits-machines-drives': {
    topicId: 'elec-circuits-machines-drives',
    title: {
      en: 'Electrical: Network Theorems, AC/DC Machines, Transformers & Slip',
      hi: 'इलेक्ट्रिकल: नेटवर्क प्रमेय, एसी/डीसी मशीनें, ट्रांसफॉर्मर एवं स्लिप',
    },
    subjectCategory: { en: 'Technical Engineering (Electrical)', hi: 'तकनीकी इंजीनियरिंग (इलेक्ट्रिकल)' },
    targetExam: { en: 'RRB JE CBT-2 (Electrical Engineering)', hi: 'आरआरबी जेई सीबीटी-2 (इलेक्ट्रिकल)' },
    recommendedStudyTime: '4.0 Hours',
    blueprintImage: {
      src: './assets/rrb_railway_loco_traction.jpg',
      caption: {
        en: 'Electric Traction Power Circuit & Induction Machine Topology',
        hi: 'विद्युत कर्षण पावर परिपथ एवं प्रेरण मोटर संरचना',
      },
    },
    conceptualTheory: {
      heading: {
        en: 'Circuit Network Theorems, Transformer Core Losses & 3-Phase Induction Slip',
        hi: 'परिपथ नेटवर्क प्रमेय, ट्रांसफॉर्मर कोर हानियां एवं 3-फेज प्रेरण मोटर स्लिप',
      },
      deepExplanation: {
        en: 'Electrical Engineering in RRB JE covers fundamental circuit analysis and heavy rotating machines: (1) Network Theorems: Thevenin’s Theorem reduces any linear two-terminal circuit to an open-circuit voltage V_th in series with resistance R_th. Norton’s Theorem reduces it to a short-circuit current source I_sc in parallel with R_th (V_th = I_sc · R_th). Maximum Power Transfer Theorem: Maximum power is transferred from source to load when load resistance R_L equals internal source resistance R_th (efficiency at maximum power is 50%). (2) Transformers: Static AC machine transferring power without frequency change. Transformation ratio K = V₂ / V₁ = N₂ / N₁ = I₁ / I₂. Losses: Core/Iron loss (Hysteresis loss P_h ∝ f · B_max^1.6 and Eddy current loss P_e ∝ f² · B_max² · t²; minimized by laminating core with silicon steel) and Copper loss (P_cu = I²R, load-dependent). Maximum efficiency occurs when Iron Loss = Copper Loss. (3) 3-Phase Induction Motor (Workhorse of Indian Railways 3-Phase Locos WAP-7 / WAG-9): Synchronous speed N_s = 120f / P. Rotor runs at speed N_r < N_s. Slip s = (N_s - N_r) / N_s. Rotor frequency f_r = s · f. At standstill, N_r = 0, so slip s = 1. At synchronous speed, s = 0 (zero torque developed).',
        hi: 'आरआरबी जेई इलेक्ट्रिकल में परिपथ सिद्धांत और घूर्णी मशीनें मुख्य आधार हैं: (1) नेटवर्क प्रमेय: थेवेनिन प्रमेय किसी भी जटिल परिपथ को एक वोल्टेज स्रोत V_th और श्रेणी प्रतिरोध R_th में बदलता है। नॉरटन प्रमेय इसे धारा स्रोत I_sc और समानांतर R_th में बदलता है। अधिकतम शक्ति स्थानांतरण प्रमेय: स्रोत से लोड में अधिकतम शक्ति तब जाती है जब लोड प्रतिरोध R_L = आंतरिक प्रतिरोध R_th हो (अधिकतम शक्ति पर दक्षता 50% होती है)। (2) ट्रांसफॉर्मर: स्थिर एसी मशीन जो बिना आवृत्ति बदले शक्ति स्थानांतरित करती है। हानियां: लौह हानि (हिस्टेरेसिस + भंवर धारा हानि; सिलिकॉन स्टील की पत्तियों/लैमिनेशन से कम की जाती है) एवं कॉपर हानि (I²R)। अधिकतम दक्षता की शर्त: लौह हानि = ताम्र हानि (Iron Loss = Copper Loss)। (3) 3-फेज प्रेरण मोटर (भारतीय रेल के WAP-7 व WAG-9 इंजनों में प्रयुक्त): तुल्यकालिक गति N_s = 120f / P। स्लिप s = (N_s - N_r) / N_s। रोटर आवृत्ति f_r = s · f। स्थिर अवस्था (Standstill) पर स्लिप s = 1 होती है।',
      },
      keyMechanisms: [
        {
          en: 'Eddy Current Loss Reduction: Eddy current loss is proportional to the square of lamination thickness (t²). By slicing the transformer core into thin varnished laminations (0.35 mm to 0.5 mm), eddy current circulating loops are restricted, reducing heating loss dramatically.',
          hi: 'भंवर धारा हानि का निवारण: भंवर धारा हानि पत्तियों की मोटाई के वर्ग (t²) के समानुपाती होती है। कोर को पतली लैमिनेटेड पत्तियों में बांटने से भंवर धारा हानि न्यूनतम हो जाती है।',
        },
        {
          en: 'Condition for Maximum Transformer Efficiency: Constant Core Loss (P_i) = Variable Copper Loss (P_cu). The load at maximum efficiency is x = √(P_i / P_cu_full_load).',
          hi: 'ट्रांसफॉर्मर की अधिकतम दक्षता की शर्त: लौह हानि = ताम्र हानि (Iron Loss = Copper Loss)।',
        },
      ],
    },
    formulasAndLaws: [
      {
        label: 'Induction Motor Synchronous Speed',
        expression: 'N_s = (120 × f) / P',
        explanation: { en: 'Speed of rotating magnetic field in RPM (f = frequency in Hz, P = number of poles).', hi: 'घूर्णी चुंबकीय क्षेत्र की गति (f = 50 Hz, 4-ध्रुव हेतु N_s = 1500 RPM)।' },
      },
      {
        label: 'Induction Motor Slip',
        expression: 's = (N_s - N_r) / N_s  |  f_rotor = s × f_supply',
        explanation: { en: 'Fractional difference between synchronous field and mechanical rotor speed.', hi: 'तुल्यकालिक गति और रोटर गति का सापेक्ष अंतर।' },
      },
    ],
    workedExamples: [
      {
        id: 'elec-ex-1',
        level: 'RRB JE Technical',
        question: {
          en: 'A 4-pole, 50 Hz three-phase induction motor runs at a rotor speed of 1440 RPM. Find its percentage slip and rotor current frequency.',
          hi: 'एक 4-ध्रुव, 50 Hz तीन-फेज प्रेरण मोटर 1440 RPM की रोटर गति पर चलती है। इसका प्रतिशत स्लिप और रोटर धारा की आवृत्ति ज्ञात कीजिए।',
        },
        standardSolution: {
          en: 'Step 1: Calculate synchronous speed N_s = 120f / P = (120 × 50) / 4 = 6000 / 4 = 1500 RPM.\nStep 2: Rotor speed N_r = 1440 RPM.\nStep 3: Slip s = (N_s - N_r) / N_s = (1500 - 1440) / 1500 = 60 / 1500 = 0.04 = 4%.\nStep 4: Rotor current frequency f_r = s × f = 0.04 × 50 = 2 Hz.\nAnswer: Slip = 4%; Rotor Frequency = 2 Hz.',
          hi: 'चरण 1: तुल्यकालिक गति N_s = (120 × 50) / 4 = 1500 RPM।\nचरण 2: रोटर गति N_r = 1440 RPM।\nचरण 3: स्लिप s = (1500 - 1440) / 1500 = 60 / 1500 = 0.04 = 4%।\nचरण 4: रोटर आवृत्ति f_r = s × f = 0.04 × 50 = 2 Hz।\nउत्तर: स्लिप = 4%; रोटर आवृत्ति = 2 Hz।',
        },
        topperShortcut: {
          en: '⚡ 10-Second Calculation: 4 poles at 50 Hz = 1500 RPM. Difference = 1500 - 1440 = 60. 60 / 1500 = 4%. Rotor f = 4% of 50 = 2 Hz directly!',
          hi: '⚡ सीधा उत्तर: अंतर = 60 RPM। स्लिप = 60/1500 = 4%। रोटर आवृत्ति = 4% of 50 = 2 Hz!',
        },
      },
    ],
    commonTraps: [
      {
        en: 'Transformer on DC Trap: If a transformer primary is connected to a DC supply of rated voltage, it will BURN OUT immediately. Since frequency of DC is 0, inductive reactance X_L = 2πfL = 0, causing excessive current to flow through small primary resistance.',
        hi: 'ट्रांसफॉर्मर को डीसी से जोड़ना: यदि ट्रांसफॉर्मर को डीसी सप्लाई दी जाए, तो उसकी वाइंडिंग जल जाएगी क्योंकि डीसी में f = 0 होने से प्रेरक प्रतिघात शून्य हो जाता है।',
      },
    ],
    topperSpeedHacks: [
      {
        en: 'Maximum Power Transfer Efficiency: At the condition of Maximum Power Transfer (R_L = R_th), the power transferred is maximum, but the efficiency is ONLY 50% because an equal amount of power is dissipated inside the source resistance R_th.',
        hi: 'अधिकतम शक्ति स्थानांतरण पर दक्षता: जब लोड को अधिकतम शक्ति मिलती है (R_L = R_th), तब परिपथ की दक्षता केवल 50% होती है।',
      },
    ],
    quickRevisionBulletPoints: [
      { en: 'DC series motor should NEVER be started on no-load (dangerous runaway speed).', hi: 'डीसी सीरीज मोटर को कभी भी बिना लोड के चालू नहीं करना चाहिए।' },
      { en: 'Electric traction locos (WAP-7) use 3-phase squirrel cage induction motors.', hi: 'इलेक्ट्रिक लोकोमोटिव में 3-फेज स्क्विरल केज प्रेरण मोटर प्रयुक्त होती है।' },
    ],
    relatedPracticeCategory: 'JE Technical Core',
  },

  // =========================================================================
  // 5. ELECTRONICS, MICROPROCESSORS & COMMUNICATIONS
  // =========================================================================
  'ece-analog-digital-micros-comms': {
    topicId: 'ece-analog-digital-micros-comms',
    title: {
      en: 'Electronics: Op-Amps, Digital Logic, 8085 Microprocessor & Communications',
      hi: 'इलेक्ट्रॉनिक्स: ऑप-एम्प, डिजिटल लॉजिक, 8085 माइक्रोप्रोसेसर एवं संचार प्रणाली',
    },
    subjectCategory: { en: 'Technical Engineering (Electronics / S&T)', hi: 'तकनीकी इंजीनियरिंग (इलेक्ट्रॉनिक्स)' },
    targetExam: { en: 'RRB JE CBT-2 (Electronics & S&T) / Tech Grade 1', hi: 'आरआरबी जेई सीबीटी-2 / तकनीशियन ग्रेड 1' },
    recommendedStudyTime: '4.0 Hours',
    blueprintImage: {
      src: './assets/rrb_railway_signals_track.jpg',
      caption: {
        en: 'Digital Logic Gates & Telecommunications Hierarchy',
        hi: 'डिजिटल लॉजिक गेट्स एवं दूरसंचार पदानुक्रम ब्लूप्रिंट',
      },
    },
    conceptualTheory: {
      heading: {
        en: 'Operational Amplifiers, Logic Minimization, 8085 Interrupts & Nyquist Sampling',
        hi: 'ऑपरेशनल एम्पलीफायर, लॉजिक न्यूनीकरण, 8085 व्यवधान एवं निक्विस्ट सैंपलिंग',
      },
      deepExplanation: {
        en: 'Electronics & Telecommunication is pivotal for Railway Signaling, Track Circuits, and KAVACH ATP: (1) Analog Electronics: Ideal Op-Amp properties: Infinite input impedance (R_in = ∞), Zero output impedance (R_out = 0), Infinite open-loop gain (A_ol = ∞), Infinite bandwidth, and Infinite Common Mode Rejection Ratio (CMRR). Inverting amplifier gain: A_v = -R_f / R_in. Non-inverting gain: A_v = 1 + R_f / R_in. Virtual ground concept exists due to infinite open-loop gain. (2) Digital Electronics: De Morgan’s Laws: (A + B)’ = A’ · B’ and (A · B)’ = A’ + B’. Universal gates: NAND and NOR (any Boolean function can be implemented using only NAND or only NOR). Flip-flops: SR (forbidden state S=1, R=1), JK (race-around condition solved by Master-Slave configuration), D (data/delay), T (toggle). (3) Microprocessors (8085): 8-bit microprocessor with 16-bit address bus (can address 2¹⁶ = 64 KB memory) and 8-bit multiplexed data bus (AD0 - AD7). Interrupts hierarchy: TRAP (non-maskable, highest priority, vector address 0024H) -> RST 7.5 (003CH) -> RST 6.5 (0034H) -> RST 5.5 (002CH) -> INTR (lowest priority, non-vectored). (4) Communications: Modulation index for AM: m = (V_max - V_min) / (V_max + V_min). Nyquist Sampling Theorem: To accurately reconstruct a continuous signal of maximum frequency f_m without aliasing, sampling rate f_s must satisfy f_s ≥ 2 · f_m.',
        hi: 'इलेक्ट्रॉनिक्स एवं दूरसंचार रेलवे सिग्नलिंग, ट्रैक सर्किट और कवच प्रणाली का हृदय है: (1) एनालॉग इलेक्ट्रॉनिक्स: आदर्श ऑप-एम्प (Op-Amp) के गुण: अनंत इनपुट प्रतिबाधा (R_in = ∞), शून्य आउटपुट प्रतिबाधा (R_out = 0), अनंत ओपन-लूप गेन, एवं अनंत CMRR। इनवर्टिंग एम्पलीफायर गेन: A_v = -R_f / R_in। नॉन-इनवर्टिंग गेन: A_v = 1 + R_f / R_in। (2) डिजिटल इलेक्ट्रॉनिक्स: डी-मॉर्गन नियम: (A + B)’ = A’ · B’ एवं (A · B)’ = A’ + B’। यूनिवर्सल गेट्स: केवल NAND और NOR (इनसे कोई भी लॉजिक सर्किट बनाया जा सकता है)। (3) माइक्रोप्रोसेसर 8085: 8-बिट सीपीयू, 16-बिट एड्रेस बस (64 KB मेमोरी को एड्रेस कर सकता है)। व्यवधान (Interrupts) प्राथमिकता क्रम: TRAP (गैर-मास्केबल, सर्वोच्च प्राथमिकता, पता 0024H) -> RST 7.5 -> RST 6.5 -> RST 5.5 -> INTR (सबसे निम्न प्राथमिकता)। (4) संचार प्रणाली: निक्विस्ट सैंपलिंग प्रमेय: किसी सिग्नल को बिना विरूपण (aliasing) के पुनर्निर्मित करने हेतु सैंपलिंग दर f_s ≥ 2 · f_m होनी चाहिए।',
      },
      keyMechanisms: [
        {
          en: '8085 Interrupt Priority & Maskability: TRAP is the ONLY non-maskable interrupt (cannot be disabled by DI instruction) and has the highest priority. All RST interrupts (7.5, 6.5, 5.5) and INTR are maskable.',
          hi: '8085 व्यवधान प्राथमिकता: TRAP एकमात्र गैर-मास्केबल (Non-maskable) व्यवधान है जिसे किसी निर्देश द्वारा रोका नहीं जा सकता और इसकी प्राथमिकता सर्वोच्च है।',
        },
        {
          en: 'Nyquist Minimum Sampling Rate: If human voice ranges up to 3.4 kHz (rounded to 4 kHz for telephony), the minimum sampling frequency required is f_s = 2 × 4 kHz = 8 kHz (8,000 samples per second, standard for PCM telecommunication).',
          hi: 'निक्विस्ट दर: 4 kHz के टेलीफोनिक वॉइस सिग्नल हेतु न्यूनतम सैंपलिंग दर f_s = 2 × 4 = 8 kHz (8,000 सैंपल्स प्रति सेकंड) होती है।',
        },
      ],
    },
    formulasAndLaws: [
      {
        label: 'Nyquist Criterion',
        expression: 'f_s ≥ 2 × f_max',
        explanation: { en: 'Prevents frequency overlap and aliasing distortion in ADC conversions.', hi: 'एनालॉग से डिजिटल रूपांतरण में एलियासिंग दोष से बचाव हेतु न्यूनतम सैंपलिंग दर।' },
      },
      {
        label: 'Op-Amp Inverting vs Non-Inverting',
        expression: 'A_inv = -R_f / R_in  |  A_non_inv = 1 + (R_f / R_in)',
        explanation: { en: 'Closed-loop voltage gains with negative feedback.', hi: 'नेगेटिव फीडबैक के साथ इनवर्टिंग एवं नॉन-इनवर्टिंग वोल्टेज लाभ।' },
      },
    ],
    workedExamples: [
      {
        id: 'ece-ex-1',
        level: 'RRB JE Technical',
        question: {
          en: 'Which interrupt in the 8085 microprocessor is non-maskable and possesses the highest priority among all hardware interrupts?',
          hi: '8085 माइक्रोप्रोसेसर में कौन सा व्यवधान (Interrupt) गैर-मास्केबल (Non-maskable) है और सभी हार्डवेयर व्यवधानों में सर्वोच्च प्राथमिकता रखता है?',
        },
        standardSolution: {
          en: 'Step 1: The 8085 microprocessor has 5 hardware interrupts: TRAP, RST 7.5, RST 6.5, RST 5.5, and INTR.\nStep 2: TRAP is both edge and level-triggered, has the highest priority, and is non-maskable (it cannot be ignored or disabled by software instructions).\nAnswer: TRAP.',
          hi: 'चरण 1: 8085 माइक्रोप्रोसेसर में 5 हार्डवेयर व्यवधान होते हैं: TRAP, RST 7.5, RST 6.5, RST 5.5 एवं INTR।\nचरण 2: TRAP सर्वोच्च प्राथमिकता वाला गैर-मास्केबल व्यवधान है जिसे अनदेखा नहीं किया जा सकता।\nउत्तर: TRAP (वेक्टर पता 0024H)।',
        },
        topperShortcut: {
          en: '⚡ 1-Second JE Rule: Non-maskable + Highest Priority = TRAP!',
          hi: '⚡ सीधा उत्तर: गैर-मास्केबल + सर्वोच्च प्राथमिकता = TRAP!',
        },
      },
    ],
    commonTraps: [
      {
        en: 'Universal Gate Identification: XOR and XNOR are NOT universal gates. Only NAND and NOR can build all logic gates by themselves. Do not select XOR!',
        hi: 'यूनिवर्सल गेट भ्रम: केवल NAND और NOR ही यूनिवर्सल गेट हैं। XOR यूनिवर्सल गेट नहीं है।',
      },
    ],
    topperSpeedHacks: [
      {
        en: '8085 Address Bus Memory Limit: 16-bit address lines directly access 2¹⁶ = 65,536 memory locations = exactly 64 KB of RAM/ROM.',
        hi: '8085 मेमोरी क्षमता: 16-बिट एड्रेस बस 2¹⁶ = 64 KB मेमोरी को सीधे एक्सेस कर सकती है।',
      },
    ],
    quickRevisionBulletPoints: [
      { en: 'An ideal operational amplifier has infinite input impedance and zero output impedance.', hi: 'आदर्श ऑप-एम्प का इनपुट प्रतिरोध अनंत और आउटपुट प्रतिरोध शून्य होता है।' },
      { en: 'Race-around condition in JK flip-flop occurs when J=1, K=1 and clock pulse width > propagation delay.', hi: 'JK फ्लिप-फ्लॉप में रेस-अराउंड स्थिति J=1, K=1 पर होती है।' },
    ],
    relatedPracticeCategory: 'JE Technical Core',
  },
};
