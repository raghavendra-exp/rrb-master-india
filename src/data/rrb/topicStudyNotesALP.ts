import type { TopicStudyGuide } from './topicStudyNotes';

export const ALP_TECH_TOPIC_STUDY_GUIDES: Record<string, TopicStudyGuide> = {
  // =========================================================================
  // 1. ALP BASIC SCIENCE, ENGINEERING DRAWING & SIMPLE MACHINES
  // =========================================================================
  'alp-basic-science-drawing': {
    topicId: 'alp-basic-science-drawing',
    title: {
      en: 'ALP Basic Science & Engineering: Drawing, Levers, Work-Power & Safety',
      hi: 'एएलपी बेसिक साइंस एंड इंजीनियरिंग: ड्राइंग, उत्तोलक, कार्य-ऊर्जा एवं सुरक्षा',
    },
    subjectCategory: { en: 'Basic Science & Engineering (40 Marks)', hi: 'बेसिक साइंस एंड इंजीनियरिंग (40 अंक)' },
    targetExam: { en: 'RRB ALP CBT-2 (Part A) & Technician Grade I Signal', hi: 'आरआरबी एएलपी सीबीटी-2 एवं तकनीशियन' },
    recommendedStudyTime: '4.5 Hours',
    blueprintImage: {
      src: './assets/rrb_railway_loco_traction.jpg',
      caption: {
        en: 'Basic Engineering Science & Mechanical Levers Blueprint',
        hi: 'बेसिक इंजीनियरिंग साइंस एवं यांत्रिक उत्तोलक ब्लूप्रिंट',
      },
    },
    conceptualTheory: {
      heading: {
        en: 'Engineering Projections, Simple Machines (Classes of Levers) & Fire Classification',
        hi: 'इंजीनियरिंग प्रक्षेप (प्रोजेक्शन), सरल मशीनें (उत्तोलक के प्रकार) एवं अग्नि वर्गीकरण',
      },
      deepExplanation: {
        en: 'Basic Science & Engineering carries 40 marks in RRB ALP CBT-2 Part A and Technician Grade I. (1) Engineering Drawing: Drawing Sheets (ISO standard): A0 (841 × 1189 mm, area 1 m²), A1 (594 × 841 mm), A2 (420 × 594 mm), A3 (297 × 420 mm), A4 (210 × 297 mm). Projections: First Angle Projection (object between observer and projection plane; Top view below Front view; widely used in Europe and India BIS) vs Third Angle Projection (projection plane between observer and object; Top view above Front view; used in USA). Line Types: Continuous thick (visible outlines), Continuous thin (dimension/extension lines), Dashed (hidden lines), Long chain thin with thick ends (cutting plane line), Long chain thin (center lines). (2) Levers and Simple Machines: Mechanical Advantage MA = Load / Effort. Velocity Ratio VR = Distance moved by Effort / Distance moved by Load. Efficiency η = MA / VR × 100%. Three Orders of Levers: Class 1 Lever (Fulcrum in middle: scissors, crowbar, seesaw, hand pump, railway semaphore signal wire lever; MA can be >, =, or < 1). Class 2 Lever (Load in middle: wheelbarrow, nutcracker, bottle opener, railway brake lever; MA is ALWAYS > 1). Class 3 Lever (Effort in middle: tweezers, human arm, tongs, fishing rod; MA is ALWAYS < 1). (3) Occupational Safety & Fire Fighting: Class A Fire (ordinary combustibles: wood, paper, cloth; Water/Soda-acid extinguisher). Class B Fire (flammable liquids: petrol, diesel, oil; Foam or Dry Powder extinguisher). Class C Fire (gases and electrical equipment fires; CO₂ or Dry Powder extinguisher; NEVER use water on live electrical fires). Class D Fire (combustible metals: magnesium, sodium; Special dry powder extinguisher).',
        hi: 'आरआरबी एएलपी सीबीटी-2 भाग A और तकनीशियन ग्रेड 1 में बेसिक साइंस एंड इंजीनियरिंग का 40 अंकों का सबसे बड़ा भार होता है। (1) इंजीनियरिंग ड्राइंग: ड्राइंग शीट मानक: A0 (841 × 1189 मिमी, क्षेत्रफल 1 वर्ग मीटर), A1, A2, A3, A4 (210 × 297 मिमी)। प्रक्षेप (Projection): प्रथम कोण प्रक्षेप (First Angle: वस्तु प्रेक्षक और तल के बीच होती है; टॉप व्यू फ्रंट व्यू के नीचे बनता है - भारत और BIS में मानक) बनाम तृतीय कोण प्रक्षेप (Third Angle: टॉप व्यू फ्रंट व्यू के ऊपर बनता है - यूएसए मानक)। रेखाएं: मोटी रेखा (बाहरी रूपरेखा), टूटी रेखा (छिपी हुई रेखाएं), चेन पतली रेखा (केंद्र रेखा)। (2) उत्तोलक एवं सरल मशीनें: यांत्रिक लाभ MA = भार / प्रयास। वेग अनुपात VR = प्रयास द्वारा चली दूरी / भार द्वारा चली दूरी। दक्षता η = (MA / VR) × 100%। उत्तोलक के प्रकार: प्रथम श्रेणी उत्तोलक (आलंब/Fulcrum मध्य में: कैंची, सी-सॉ, रेलवे सिग्नल वायर उत्तोलक; MA >, =, < 1 हो सकता है)। द्वितीय श्रेणी उत्तोलक (भार/Load मध्य में: पहिया ठेला, सरोता, बोतल ओपनर; MA हमेशा > 1 होता है)। तृतीय श्रेणी उत्तोलक (प्रयास/Effort मध्य में: चिमटा, मनुष्य की भुजा; MA हमेशा < 1 होता है)। (3) व्यावसायिक सुरक्षा एवं अग्निशामक: वर्ग A (लकड़ी, कागज, कपड़ा - जल/सोडा एसिड शामक)। वर्ग B (ज्वलनशील तरल: पेट्रोल, डीजल - फोम/झाग शामक)। वर्ग C (विद्युत उपकरण एवं गैस - CO₂ या सूखा पाउडर शामक; विद्युत आग पर पानी कभी न डालें)। वर्ग D (धात्विक आग - सूखा पाउडर)।',
      },
      keyMechanisms: [
        {
          en: 'FLE Mnemonic for 3 Orders of Levers: 1-2-3 = F-L-E. In Class 1, Fulcrum is in middle. In Class 2, Load is in middle. In Class 3, Effort is in middle. Infallible memory tool!',
          hi: 'उत्तोलक FLE नियम: 1-2-3 = F-L-E। प्रथम श्रेणी = Fulcrum (आलंब) बीच में। द्वितीय श्रेणी = Load (भार) बीच में। तृतीय श्रेणी = Effort (प्रयास) बीच में।',
        },
        {
          en: 'Electrical Fire Safety Rule: On electrical fires (Class C), NEVER use water because tap water conducts electricity, causing fatal electrocution to the operator. Use Carbon Dioxide (CO₂) or Dry Chemical Powder.',
          hi: 'विद्युत अग्नि सुरक्षा: विद्युत आग पर कभी भी पानी न डालें क्योंकि पानी विद्युत का सुचालक होता है। हमेशा कार्बन डाइऑक्साइड (CO₂) या सूखे चूर्ण का प्रयोग करें।',
        },
      ],
    },
    formulasAndLaws: [
      {
        label: 'Mechanical Advantage & Efficiency',
        expression: 'MA = Load / Effort  |  VR = d_E / d_L  |  Efficiency = MA / VR',
        explanation: { en: 'Fundamental law governing all mechanical lifting machines.', hi: 'यांत्रिक लाभ, वेग अनुपात एवं मशीन दक्षता का मूल सूत्र।' },
      },
      {
        label: 'A0 Drawing Sheet Dimensions',
        expression: '841 mm × 1189 mm  |  Area = Exactly 1.0 m²',
        explanation: { en: 'Ratio of sides in ISO drawing sheets is 1 : √2.', hi: 'ड्राइंग शीट की भुजाओं का अनुपात 1 : √2 होता है।' },
      },
    ],
    workedExamples: [
      {
        id: 'alp-ex-1',
        level: 'CBT-2 Advanced',
        question: {
          en: 'In a simple lifting machine, an effort of 25 N lifts a load of 100 N. If the effort moves 20 cm while the load moves 4 cm, find the Mechanical Advantage (MA), Velocity Ratio (VR), and Efficiency of the machine.',
          hi: 'एक सरल उठाने वाली मशीन में 25 N का प्रयास 100 N का भार उठाता है। यदि प्रयास 20 सेमी चलता है जबकि भार 4 सेमी चलता है, तो मशीन का यांत्रिक लाभ (MA), वेग अनुपात (VR) एवं दक्षता ज्ञात कीजिए।',
        },
        standardSolution: {
          en: 'Step 1: Mechanical Advantage MA = Load / Effort = 100 N / 25 N = 4.\nStep 2: Velocity Ratio VR = Distance of Effort / Distance of Load = 20 cm / 4 cm = 5.\nStep 3: Efficiency η = (MA / VR) × 100% = (4 / 5) × 100% = 80%.\nAnswer: MA = 4; VR = 5; Efficiency = 80%.',
          hi: 'चरण 1: यांत्रिक लाभ MA = भार / प्रयास = 100 / 25 = 4।\nचरण 2: वेग अनुपात VR = प्रयास दूरी / भार दूरी = 20 / 4 = 5।\nचरण 3: दक्षता η = (MA / VR) × 100% = (4 / 5) × 100% = 80%।\nउत्तर: MA = 4; VR = 5; दक्षता = 80%।',
        },
        topperShortcut: {
          en: '⚡ 10-Second Calculation: MA = 100/25 = 4. VR = 20/4 = 5. Efficiency = 4/5 = 80% directly in 1 step!',
          hi: '⚡ सीधा उत्तर: MA = 4, VR = 5, दक्षता = 4/5 = 80%!',
        },
      },
    ],
    commonTraps: [
      {
        en: 'Mechanical Advantage of Class 3 Levers: In Class 3 levers (tweezers, tongs), effort is between fulcrum and load. Therefore, effort arm is shorter than load arm, and MA is ALWAYS LESS THAN 1 (MA < 1). It provides speed/reach advantage, not force magnification.',
        hi: 'तृतीय श्रेणी उत्तोलक का यांत्रिक लाभ: चिमटा या मनुष्य की भुजा जैसे तृतीय श्रेणी उत्तोलकों का यांत्रिक लाभ हमेशा 1 से कम (MA < 1) होता है।',
      },
    ],
    topperSpeedHacks: [
      {
        en: 'First Angle Projection Symbol: In First Angle Projection, the frustum of a cone is shown with the small circle on the right side of the trapezoid view.',
        hi: 'प्रथम कोण प्रक्षेप का प्रतीक: ट्रैपेजॉइड के दायीं ओर छोटा वृत्त दिखाई देता है।',
      },
    ],
    quickRevisionBulletPoints: [
      { en: 'Class 2 lever (wheelbarrow, nutcracker) ALWAYS has MA > 1.', hi: 'द्वितीय श्रेणी उत्तोलक (पहिया ठेला, सरोता) का MA हमेशा 1 से बड़ा होता है।' },
      { en: 'A0 drawing sheet area is exactly 1 square meter.', hi: 'A0 ड्राइंग शीट का क्षेत्रफल ठीक 1 वर्ग मीटर होता है।' },
    ],
    relatedPracticeCategory: 'Basic Science & Engineering',
  },

  // =========================================================================
  // 2. STATION MASTER & SECTION CONTROLLER TRAFFIC OPERATIONS
  // =========================================================================
  'station-master-operations': {
    topicId: 'station-master-operations',
    title: {
      en: 'Station Master & Section Controller Operations: Interlocking, Block Systems & Safety',
      hi: 'स्टेशन मास्टर एवं सेक्शन कंट्रोलर परिचालन: इंटरलॉकिंग, ब्लॉक सिस्टम एवं सुरक्षा',
    },
    subjectCategory: { en: 'Railway Traffic Operations', hi: 'रेलवे यातायात परिचालन' },
    targetExam: { en: 'RRB NTPC (Station Master Level 6) & Section Controller (CEN 03/2026)', hi: 'स्टेशन मास्टर एवं सेक्शन कंट्रोलर' },
    recommendedStudyTime: '4.0 Hours',
    blueprintImage: {
      src: './assets/rrb_railway_kavach_atp.jpg',
      caption: {
        en: 'Station Electronic Interlocking & Route Relay System',
        hi: 'स्टेशन इलेक्ट्रॉनिक इंटरलॉकिंग एवं रूट रिले प्रणाली',
      },
    },
    conceptualTheory: {
      heading: {
        en: 'Block Working Rules, Point Operation, Interlocking Principles & Accident Relief',
        hi: 'ब्लॉक संचालन नियम, पॉइंट परिचालन, इंटरलॉकिंग सिद्धांत एवं दुर्घटना राहत प्रणाली',
      },
      deepExplanation: {
        en: 'Station Master (SM) and Section Controller are the primary traffic guardians of Indian Railways running: (1) Block Working Systems: Absolute Block System (only one train is permitted inside a block section between two consecutive block stations at any given time; line clear granted via Block Instrument / Axle Counter) vs Automatic Block System (track is continuously divided into smaller automated signaling blocks 1 km to 1.5 km long; multiple trains can follow each other on green/double yellow/yellow signals under automatic track circuits). (2) Signaling & Interlocking: Electronic Interlocking (EI) and Route Relay Interlocking (RRI) guarantee that signals cannot be taken "OFF" (Green/Yellow) unless all facing points on the route are correctly set, clamped, locked, and the track circuit confirms the route is completely unoccupied. (3) Station Working Rules (SWR): Every station has a customized SWR document governing berthing capacity, loop line lengths (standard CSR 715 meters for full rake), gradients, and shunting rules. (4) Operating Forms & Documents: T/369(3b) (Authority to pass a defective signal at Danger), T/A 912 (Authority to proceed on Automatic Block during failure), Caution Order T/409 (Notifies speed restrictions on track due to maintenance), Working Timetable (WTT - internal operational bible specifying maximum permissible speeds, sectional run times, and crossing loops).',
        hi: 'स्टेशन मास्टर और सेक्शन कंट्रोलर भारतीय रेल के परिचालन और सुरक्षा के मुख्य कर्णधार हैं: (1) ब्लॉक संचालन प्रणालियां: एब्सोल्यूट ब्लॉक सिस्टम (दो स्टेशनों के बीच ब्लॉक सेक्शन में एक समय में केवल एक ही ट्रेन जा सकती है) बनाम ऑटोमैटिक ब्लॉक सिस्टम (ट्रैक लगातार 1 से 1.5 किमी के स्वचालित सिग्नलों में बंटा होता है, जहाँ कई ट्रेनें सुरक्षित दूरी पर एक के पीछे एक चल सकती हैं)। (2) इंटरलॉकिंग सिद्धांत: इलेक्ट्रॉनिक इंटरलॉकिंग (EI) यह सुनिश्चित करती है कि जब तक पूरे रूट के पॉइंट्स सही ढंग से सेट और लॉक न हों तथा ट्रैक सर्किट द्वारा ट्रैक खाली प्रमाणित न हो, तब तक सिग्नल कभी हरा (Green) नहीं हो सकता। (3) स्टेशन वर्किंग रूल्स (SWR): प्रत्येक स्टेशन की विशिष्ट कार्य नियमावली होती है जिसमें लूप लाइन की लंबाई (मानक CSR 715 मीटर), ढलान और शंटिंग नियम लिखे होते हैं। (4) रेलवे परिचालन फॉर्म: T/369(3b) (खराब सिग्नल को लाल/डेंजर स्थिति में पार करने का प्राधिकार), T/409 (कॉशन ऑर्डर - ट्रैक गति सीमा की लिखित सूचना), वर्किंग टाइम टेबल (WTT - आंतरिक परिचालन समय सारिणी)।',
      },
      keyMechanisms: [
        {
          en: 'Absolute vs Automatic Block Distinction: In Absolute Block, the section capacity is limited by station-to-station distance. In Automatic Block, automated track circuits allow high line capacity with multiple trains in transit on the same track separated by signal aspects.',
          hi: 'एब्सोल्यूट बनाम ऑटोमैटिक ब्लॉक: एब्सोल्यूट ब्लॉक में दो स्टेशनों के बीच केवल 1 ट्रेन चलती है। ऑटोमैटिक ब्लॉक में ऑटोमैटिक सिग्नलों के कारण एक ही ट्रैक पर कई ट्रेनें सुरक्षित रूप से पीछे-पीछे चलती हैं।',
        },
        {
          en: 'Standard Loop Line Clear Standing Room (CSR): Standard length of loop lines in Indian Railways Broad Gauge is 715 meters to accommodate full-length freight rakes (58 wagons + brake van) and 24-coach passenger trains.',
          hi: 'मानक लूप लाइन लंबाई (CSR): मालगाड़ियों और 24-कोच वाली यात्री ट्रेनों को खड़ा करने हेतु भारतीय रेल की मानक लूप लाइन की लंबाई 715 मीटर होती है।',
        },
      ],
    },
    formulasAndLaws: [
      {
        label: 'Section Headway Formula',
        expression: 'Headway Time = Block Clearance Time + Sighting Time + Driver Reaction Time',
        explanation: { en: 'Determines the minimum safe time separation between consecutive trains.', hi: 'दो लगातार ट्रेनों के बीच न्यूनतम सुरक्षित समय अंतराल की गणना।' },
      },
    ],
    workedExamples: [
      {
        id: 'sm-ex-1',
        level: 'RRB JE Technical',
        question: {
          en: 'What is the standard Clear Standing Room (CSR) length for a loop line on Indian Railways Broad Gauge network to accommodate a full rake?',
          hi: 'भारतीय रेल ब्रॉड गेज नेटवर्क पर एक पूरी रैक (मालगाड़ी/यात्री ट्रेन) को खड़ा करने हेतु लूप लाइन की मानक लंबाई (Clear Standing Room - CSR) कितनी होती है?',
        },
        standardSolution: {
          en: 'Step 1: Indian Railways Permanent Way and Operating Manuals prescribe standardized CSR for Broad Gauge crossing stations.\nStep 2: A full 58-wagon BOXN/BCN freight rake plus locomotive and brake van requires at least 686 meters, standardized with margins to 715 meters.\nAnswer: 715 meters.',
          hi: 'चरण 1: भारतीय रेल परिचालन नियमावली के अनुसार ब्रॉड गेज स्टेशनों पर लूप लाइन की मानक लंबाई 715 मीटर निर्धारित है।\nउत्तर: 715 मीटर।',
        },
        topperShortcut: {
          en: '⚡ 2-Second Recall: Loop Line CSR = 715 meters. Standard non-negotiable benchmark!',
          hi: '⚡ सीधा उत्तर: लूप लाइन लंबाई = 715 मीटर!',
        },
      },
    ],
    commonTraps: [
      {
        en: 'T/369(3b) vs Caution Order T/409: T/369(3b) authorizes passing a defective fixed signal at Danger. T/409 is a Caution Order issued to Loco Pilots notifying speed restrictions on track due to maintenance or engineering works.',
        hi: 'T/369(3b) बनाम T/409: T/369(3b) खराब सिग्नल को पार करने का अधिकार पत्र है। T/409 कॉशन ऑर्डर (सावधानी आदेश) है जो ट्रैक की गति सीमा बताता है।',
      },
    ],
    topperSpeedHacks: [
      {
        en: 'CBAT Psycho Test Strategy for Station Master: Minimum qualifying score is a T-score of 42 in EACH of the 5 battery tests (Intelligence, Selective Attention, Spatial, Following Directions, and Personality). Scoring 80 in 4 batteries and 41 in one battery results in REJECTION! Aim for balanced accuracy.',
        hi: 'साइको टेस्ट रणनीति: सभी 5 बैटरियों में से प्रत्येक में न्यूनतम 42 T-स्कोर लाना अनिवार्य है। यदि किसी एक में भी 41 रह गया, तो अभ्यर्थी असफल हो जाएगा। संतुलन सबसे महत्वपूर्ण है।',
      },
    ],
    quickRevisionBulletPoints: [
      { en: 'Fixed signals: Distant, Home, Starter, Advanced Starter.', hi: 'स्टेशन के स्थिर सिग्नल: डिस्टेंट, होम, स्टार्टर, एडवांस्ड स्टार्टर।' },
      { en: 'Caution Order form number is T/409.', hi: 'कॉशन ऑर्डर का फॉर्म नंबर T/409 होता है।' },
    ],
    relatedPracticeCategory: 'Railway GK & Operations',
  },

  // =========================================================================
  // 3. RPF SECURITY & RAILWAY ACT APTITUDE
  // =========================================================================
  'rpf-security-aptitude': {
    topicId: 'rpf-security-aptitude',
    title: {
      en: 'RPF Security Aptitude: Railway Property Act 1966 & Railways Act 1989',
      hi: 'आरपीएफ सुरक्षा अभिरुचि: रेलवे संपत्ति अधिनियम 1966 एवं रेल अधिनियम 1989',
    },
    subjectCategory: { en: 'Railway Security & Legal Aptitude', hi: 'रेलवे सुरक्षा एवं विधिक अभिरुचि' },
    targetExam: { en: 'RRB RPF Sub-Inspector & Constable (CEN RPF 01 & 02/2024)', hi: 'आरपीएफ एसआई एवं कांस्टेबल' },
    recommendedStudyTime: '3.0 Hours',
    blueprintImage: {
      src: './assets/rrb_master_curriculum.jpg',
      caption: {
        en: 'Railway Protection Force Security & Legal Enforcement Matrix',
        hi: 'रेलवे सुरक्षा बल सुरक्षा एवं विधिक प्रवर्तन संरचना',
      },
    },
    conceptualTheory: {
      heading: {
        en: 'Statutory Powers of RPF, RP(UP) Act 1966 & Critical Penal Sections of Railways Act 1989',
        hi: 'आरपीएफ की वैधानिक शक्तियां, RP(UP) एक्ट 1966 एवं रेल अधिनियम 1989 की धाराएं',
      },
      deepExplanation: {
        en: 'Railway Protection Force (RPF) is an armed force of the Union constituted under the Railway Protection Force Act, 1957. Key Statutory Functions: (1) Railway Property (Unlawful Possession) Act, 1966 [RP(UP) Act]: Section 3 prescribes punishment for possession of stolen railway property (imprisonment up to 5 years). An RPF officer has power of inquiry (under Section 8) and powers analogous to a police officer for arresting without warrant any person reasonably suspected of possessing unlawful railway property (under Section 6). (2) The Railways Act, 1989 - Key Offence Sections: Section 137 (Fraudulently traveling without ticket or proper pass), Section 141 (Needlessly interfering with means of communication in a train — illegal alarm chain pulling / ACP; punishment up to 1 year jail or ₹1,000 fine), Section 144 (Prohibition on unauthorized hawking and touting at railway stations), Section 145 (Drunkenness or nuisance on railways), Section 146 (Obstructing railway servant in his duty), Section 153 & 154 (Endangering safety of persons traveling by railway by rash or negligent act), Section 156 (Traveling on roof, step, or engine of a train), Section 162 (Entering ladies compartment). (3) Physical Standards for RPF: Constable Male (1600m run in 5m 45s, Long Jump 14 ft, High Jump 4 ft); Constable Female (800m run in 3m 40s, Long Jump 9 ft, High Jump 3 ft); Height requirement: 165 cm for UR/OBC Male, 157 cm for Female.',
        hi: 'रेलवे सुरक्षा बल (RPF) 1957 के अधिनियम के तहत संघ का एक सशस्त्र बल है। (1) रेलवे संपत्ति (विधि विरुद्ध कब्जा) अधिनियम, 1966 [RP(UP) Act]: धारा 3 के तहत रेलवे संपत्ति के अवैध कब्जे पर 5 वर्ष तक का कारावास हो सकता है। धारा 6 के तहत आरपीएफ अधिकारी बिना वारंट गिरफ्तारी कर सकता है। (2) रेल अधिनियम, 1989 की महत्वपूर्ण धाराएं: धारा 137 (बिना टिकट यात्रा), धारा 141 (अनावश्यक अलार्म चेन खींचना - 1 वर्ष की जेल या ₹1,000 जुर्माना), धारा 144 (अवैध फेरी लगाना/हॉकिंग), धारा 145 (नशा या उपद्रव करना), धारा 146 (रेल सेवक के कार्य में बाधा डालना), धारा 153 व 154 (ट्रेन यात्रियों की सुरक्षा खतरे में डालना), धारा 156 (ट्रेन की छत या पायदान पर यात्रा करना), धारा 162 (महिला डिब्बे में अनधिकृत प्रवेश)। (3) शारीरिक मानक: पुरुष कांस्टेबल (1600 मीटर दौड़ 5 मिनट 45 सेकंड, 14 फीट लंबी कूद, 4 फीट ऊंची कूद); महिला कांस्टेबल (800 मीटर दौड़ 3 मिनट 40 सेकंड, 9 फीट लंबी कूद, 3 फीट ऊंची कूद)।',
      },
      keyMechanisms: [
        {
          en: 'Section 141 Alarm Chain Pulling (ACP) Rule: Pulling the emergency brake alarm chain without sufficient and reasonable cause is punishable under Section 141 of The Railways Act 1989 with imprisonment up to one year, or with fine up to ₹1,000, or with both.',
          hi: 'धारा 141 अलार्म चेन खींचना (ACP): बिना उचित कारण के ट्रेन की जंजीर खींचना रेल अधिनियम 1989 की धारा 141 के तहत दंडनीय है (1 वर्ष तक का कारावास या ₹1,000 तक का जुर्माना या दोनों)।',
        },
        {
          en: 'Section 156 Roof Riding Penalty: Traveling on the roof, step, footboard, or engine of a train is prohibited under Section 156 of Railways Act 1989 (punishable with imprisonment up to 3 months or fine up to ₹500).',
          hi: 'धारा 156 छत पर यात्रा: ट्रेन की छत, पायदान या इंजन पर यात्रा करना धारा 156 के तहत दंडनीय है (3 माह तक का कारावास या ₹500 जुर्माना)।',
        },
      ],
    },
    formulasAndLaws: [
      {
        label: 'Alarm Chain Pulling Penalty',
        expression: 'Section 141 of Railways Act 1989: Up to 1 Year Jail or ₹1,000 Fine',
        explanation: { en: 'Penal action for illegal alarm chain pulling without emergency.', hi: 'अनावश्यक जंजीर खींचने पर कानूनी दंड का प्रावधान।' },
      },
    ],
    workedExamples: [
      {
        id: 'rpf-ex-1',
        level: 'CBT-1 Foundation',
        question: {
          en: 'Under which Section of The Railways Act, 1989 is unauthorized alarm chain pulling (ACP) in a running train without reasonable cause punishable?',
          hi: 'रेल अधिनियम, 1989 की किस धारा के तहत बिना किसी उचित कारण के चलती ट्रेन में अलार्म चेन खींचना (ACP) दंडनीय अपराध है?',
        },
        standardSolution: {
          en: 'Step 1: The Railways Act 1989 outlines penal provisions for offenses on railway property and rolling stock.\nStep 2: Section 141 specifically deals with "Needlessly interfering with means of communication in a train" (alarm chain).\nAnswer: Section 141.',
          hi: 'चरण 1: रेल अधिनियम 1989 रेलवे परिसर में किए जाने वाले अपराधों के लिए दंड निर्धारित करता है।\nचरण 2: धारा 141 में "ट्रेन में संचार साधनों (अलार्म चेन) में अनावश्यक हस्तक्षेप" के लिए दंड का प्रावधान है।\nउत्तर: धारा 141।',
        },
        topperShortcut: {
          en: '⚡ 1-Second RPF Rule: Alarm Chain Pulling = Section 141 of Railways Act 1989!',
          hi: '⚡ सीधा उत्तर: अलार्म चेन खींचना = धारा 141!',
        },
      },
    ],
    commonTraps: [
      {
        en: 'Section 137 vs 138: Section 137 covers fraudulent travel without ticket with intent to defraud (criminal offense). Section 138 covers accidental/ordinary travel without ticket (civil recovery of fare and excess charge).',
        hi: 'धारा 137 बनाम 138: धारा 137 में धोखाधड़ी की नीयत से बिना टिकट यात्रा (आपराधिक मामला) शामिल है। धारा 138 में सामान्य बिना टिकट यात्रा (किराया व जुर्माना वसूली) है।',
      },
    ],
    topperSpeedHacks: [
      {
        en: 'RPF Constable 1600m Timing Target: To clear the rigorous 5 minutes 45 seconds PET running benchmark, pace your 400m track laps at 80-82 seconds per lap. Lap 1: 80s, Lap 2: 85s, Lap 3: 88s, Lap 4 sprint: 80s = 333s = 5m 33s safely within limit!',
        hi: '1600 मी दौड़ रणनीति: 5 मिनट 45 सेकंड में दौड़ पूरी करने हेतु 400 मीटर के प्रत्येक चक्कर को 82-84 सेकंड में पूरा करने का अभ्यास करें।',
      },
    ],
    quickRevisionBulletPoints: [
      { en: 'RPF Act was passed in 1957.', hi: 'आरपीएफ अधिनियम 1957 में पारित किया गया था।' },
      { en: 'Section 144 of Railways Act prohibits unauthorized hawking and vending.', hi: 'रेल अधिनियम की धारा 144 अनधिकृत हॉकिंग/फेरी लगाने को प्रतिबंधित करती है।' },
    ],
    relatedPracticeCategory: 'Railway GK & Operations',
  },
};
