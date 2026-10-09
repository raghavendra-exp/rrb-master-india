import type { BilingualText } from '../../types';

export interface RailwayGkTopic {
  id: string;
  level: 'basic' | 'intermediate' | 'advance';
  category: string;
  title: BilingualText;
  facts: BilingualText[];
  technicalSpecs?: { label: string; value: string }[];
  examSignificance: BilingualText;
}

export const RAILWAY_GK_TOPICS: RailwayGkTopic[] = [
  // =========================================================================
  // LEVEL 1: BASIC / FOUNDATIONAL RAILWAYS KNOWLEDGE (प्रारंभिक स्तर)
  // =========================================================================
  {
    id: 'railway-history-origin',
    level: 'basic',
    category: 'Historical Milestones',
    title: {
      en: 'The Dawn of Indian Railways (1853 to Independence)',
      hi: 'भारतीय रेल का उद्भव एवं ऐतिहासिक मील के पत्थर (1853 से स्वतंत्रता)',
    },
    facts: [
      {
        en: 'First passenger train in India ran on 16 April 1853 between Bori Bunder (Mumbai) and Thane, covering 34 km with 400 passengers across 14 carriages.',
        hi: 'भारत में पहली यात्री ट्रेन 16 अप्रैल 1853 को बोरी बंदर (मुंबई) से ठाणे के बीच 34 किमी की दूरी पर 14 डिब्बों में 400 यात्रियों के साथ चली थी।',
      },
      {
        en: 'The inaugural train was hauled by three steam locomotives named Sultan, Sindh, and Sahib, operated by Great Indian Peninsula Railway (GIPR).',
        hi: 'पहली ट्रेन को ग्रेट इंडियन पेनिनसुला रेलवे (GIPR) द्वारा संचालित तीन भाप इंजनों - सुल्तान, सिंध और साहिब द्वारा खींचा गया था।',
      },
      {
        en: 'Lord Dalhousie is acknowledged as the "Father of Indian Railways" for formulating the trunk railway development policy in India (1853 Minute).',
        hi: 'लॉर्ड डलहौजी को भारत में मुख्य रेलवे विकास नीति तैयार करने के कारण "भारतीय रेलवे का जनक" माना जाता है।',
      },
      {
        en: 'First passenger railway line in Eastern India opened on 15 August 1854 between Howrah and Hooghly (38 km) by the East Indian Railway (EIR).',
        hi: 'पूर्वी भारत में पहली यात्री रेल लाइन 15 अगस्त 1854 को ईस्ट इंडियन रेलवे (EIR) द्वारा हावड़ा से हुगली (38 किमी) के बीच खोली गई।',
      },
      {
        en: 'First passenger train in South India operated on 1 July 1856 between Royapuram (Madras) and Wallajah Road (Arcot) by Madras Railway.',
        hi: 'दक्षिण भारत में पहली यात्री ट्रेन 1 जुलाई 1856 को मद्रास रेलवे द्वारा रोयापुरम (मद्रास) से वालाजाह रोड (आर्कोट) के बीच चली।',
      },
      {
        en: 'First electric train in India ran on 3 February 1925 from Bombay Victoria Terminus to Kurla Harbour on 1500V DC traction.',
        hi: 'भारत में पहली विद्युत ट्रेन 3 फरवरी 1925 को बॉम्बे वीटी से कुर्ला हार्बर के बीच 1500V डीसी ओवरहेड ट्रैक्शन पर चलाई गई थी।',
      },
      {
        en: 'Nationalization of Indian Railways occurred in 1951, integrating over 42 independent railway systems into 6 initial zones.',
        hi: 'भारतीय रेल का राष्ट्रीयकरण वर्ष 1951 में हुआ, जिससे 42 से अधिक स्वतंत्र प्रणालियों को 6 प्रारंभिक ज़ोनों में एकीकृत किया गया।',
      },
    ],
    technicalSpecs: [
      { label: 'Inaugural Date', value: '16 April 1853' },
      { label: 'First Distance', value: '34 km (21 miles)' },
      { label: 'Steam Locos', value: 'Sultan, Sindh, Sahib' },
      { label: 'Nationalization Year', value: '1951' },
    ],
    examSignificance: {
      en: 'High Frequency: Appears in over 85% of RRB NTPC CBT-1 & Group D General Awareness question sets.',
      hi: 'अति महत्वपूर्ण: आरआरबी एनटीपीसी सीबीटी-1 एवं ग्रुप डी सामान्य ज्ञान के 85% से अधिक प्रश्नपत्रों में पूछा जाता है।',
    },
  },
  {
    id: 'railway-gauges-specs',
    level: 'basic',
    category: 'Track & Infrastructure Basics',
    title: {
      en: 'Railway Gauges in India: Dimensions & Standards',
      hi: 'भारत में रेलवे ट्रैक गेज: मानक माप एवं विशेषताएं',
    },
    facts: [
      {
        en: 'Broad Gauge (BG): 1,676 mm (5 ft 6 in) width. Accounts for over 96.5% of total Indian Railways route network and handles nearly 100% of freight and passenger traffic under Project Unigauge (launched in 1992).',
        hi: 'ब्रॉड गेज (BG): 1,676 मिमी (5 फीट 6 इंच)। प्रोजेक्ट यूनिगेज (1992 में शुरू) के तहत भारतीय रेल के 96.5% से अधिक नेटवर्क को ब्रॉड गेज में बदल दिया गया है।',
      },
      {
        en: 'Standard Gauge: 1,435 mm (4 ft 8½ in). Standard worldwide; exclusively adopted in India for urban Mass Rapid Transit Systems (Delhi Metro, Mumbai Metro, Namma Metro, RRTS) and the Mumbai-Ahmedabad High-Speed Rail.',
        hi: 'मानक गेज: 1,435 मिमी (4 फीट 8½ इंच)। भारत में मेट्रो रेल नेटवर्क, आरआरटीएस और मुंबई-अहमदाबाद बुलेट ट्रेन हेतु मानक गेज का उपयोग किया जाता है।',
      },
      {
        en: 'Metre Gauge (MG): 1,000 mm (3 ft 3⅜ in). Historically prevalent, currently retained only on select heritage preservation sections (e.g. Nilgiri Mountain Railway).',
        hi: 'मीटर गेज (MG): 1,000 मिमी (3 फीट 3⅜ इंच)। अब यह केवल कुछ धरोहर और पर्वतीय लाइनों (जैसे नीलगिरि माउंटेन रेलवे) तक सीमित है।',
      },
      {
        en: 'Narrow Gauge (NG): 762 mm (2 ft 6 in) and 610 mm (2 ft 0 in). Used on UNESCO mountain railways including Kalka-Shimla (762 mm), Darjeeling Himalayan Railway (610 mm), and Matheran Hill Railway (610 mm).',
        hi: 'नैरो गेज (NG): 762 मिमी (2 फीट 6 इंच) एवं 610 मिमी (2 फीट)। कालका-शिमला (762 मिमी), दार्जिलिंग (610 मिमी) एवं माथेरान (610 मिमी) धरोहर लाइनों पर प्रयुक्त।',
      },
    ],
    technicalSpecs: [
      { label: 'Broad Gauge Width', value: '1,676 mm (5 ft 6 in)' },
      { label: 'Standard Gauge Width', value: '1,435 mm (4 ft 8.5 in)' },
      { label: 'Metre Gauge Width', value: '1,000 mm (3 ft 3.375 in)' },
      { label: 'Narrow Gauge Width', value: '762 mm / 610 mm' },
    ],
    examSignificance: {
      en: 'Direct numeric question in RRB JE CBT-1 & Group D Science/General Awareness.',
      hi: 'आरआरबी जेई सीबीटी-1 एवं ग्रुप डी में सीधे संख्यात्मक मान संबंधी प्रश्न।',
    },
  },
  {
    id: 'railway-zones-hqs',
    level: 'basic',
    category: 'Zones & Headquarters',
    title: {
      en: 'Complete Directory of 19 Railway Zones and Headquarters',
      hi: '19 रेलवे ज़ोन और उनके मुख्यालयों की संपूर्ण आधिकारिक संदर्शिका',
    },
    facts: [
      { en: '1. Northern Railway (NR) - Headquarters: New Delhi (Largest zone by route length)', hi: '1. उत्तर रेलवे (NR) - मुख्यालय: नई दिल्ली (रूट लंबाई में सबसे बड़ा ज़ोन)' },
      { en: '2. Western Railway (WR) - Headquarters: Mumbai (Churchgate)', hi: '2. पश्चिम रेलवे (WR) - मुख्यालय: मुंबई (चर्चगेट)' },
      { en: '3. Central Railway (CR) - Headquarters: Mumbai (Chhatrapati Shivaji Maharaj Terminus - CSMT)', hi: '3. मध्य रेलवे (CR) - मुख्यालय: मुंबई (सीएसएमटी)' },
      { en: '4. Eastern Railway (ER) - Headquarters: Kolkata (Fairlie Place)', hi: '4. पूर्व रेलवे (ER) - मुख्यालय: कोलकाता (फेयरली प्लेस)' },
      { en: '5. Southern Railway (SR) - Headquarters: Chennai Central (First zone formed in 1951)', hi: '5. दक्षिण रेलवे (SR) - मुख्यालय: चेन्नई सेंट्रल (1951 में बना पहला ज़ोन)' },
      { en: '6. South Central Railway (SCR) - Headquarters: Secunderabad', hi: '6. दक्षिण मध्य रेलवे (SCR) - मुख्यालय: सिकंदराबाद' },
      { en: '7. East Coast Railway (ECoR) - Headquarters: Bhubaneswar (Highest freight loading zone)', hi: '7. पूर्व तट रेलवे (ECoR) - मुख्यालय: भुवनेश्वर (सर्वाधिक माल लदान ज़ोन)' },
      { en: '8. North Eastern Railway (NER) - Headquarters: Gorakhpur', hi: '8. पूर्वोत्तर रेलवे (NER) - मुख्यालय: गोरखपुर' },
      { en: '9. Northeast Frontier Railway (NFR) - Headquarters: Maligaon, Guwahati', hi: '9. पूर्वोत्तर सीमांत रेलवे (NFR) - मुख्यालय: मालीगांव, गुवाहाटी' },
      { en: '10. North Central Railway (NCR) - Headquarters: Prayagraj', hi: '10. उत्तर मध्य रेलवे (NCR) - मुख्यालय: प्रयागराज' },
      { en: '11. South Eastern Railway (SER) - Headquarters: Kolkata (Garden Reach)', hi: '11. दक्षिण पूर्व रेलवे (SER) - मुख्यालय: कोलकाता (गार्डन रीच)' },
      { en: '12. South East Central Railway (SECR) - Headquarters: Bilaspur (Highest freight revenue generator)', hi: '12. दक्षिण पूर्व मध्य रेलवे (SECR) - मुख्यालय: बिलासपुर (सर्वाधिक माल राजस्व)' },
      { en: '13. South Western Railway (SWR) - Headquarters: Hubballi', hi: '13. दक्षिण पश्चिम रेलवे (SWR) - मुख्यालय: हुब्बल्लि' },
      { en: '14. West Central Railway (WCR) - Headquarters: Jabalpur (First 100% electrified zone in 2021)', hi: '14. पश्चिम मध्य रेलवे (WCR) - मुख्यालय: जबलपुर (2021 में पहला पूर्ण विद्युतीकृत ज़ोन)' },
      { en: '15. East Central Railway (ECR) - Headquarters: Hajipur', hi: '15. पूर्व मध्य रेलवे (ECR) - मुख्यालय: हाजीपुर' },
      { en: '16. North Western Railway (NWR) - Headquarters: Jaipur', hi: '16. उत्तर पश्चिम रेलवे (NWR) - मुख्यालय: जयपुर' },
      { en: '17. Metro Railway Kolkata - Headquarters: Kolkata (Designated 17th independent zone in 2010)', hi: '17. कोलकाता मेट्रो रेलवे - मुख्यालय: कोलकाता (2010 में 17वां स्वतंत्र ज़ोन बना)' },
      { en: '18. South Coast Railway (SCoR) - Headquarters: Visakhapatnam (Announced 18th Zone, covering Waltair, Vijayawada, Guntur, Guntakal)', hi: '18. दक्षिण तट रेलवे (SCoR) - मुख्यालय: विशाखापट्टनम (घोषित 18वां ज़ोन)' },
      { en: '19. Konkan Railway Corporation (KRCL) - Operational route (Roha to Thokur, 741 km), headquarters at CBD Belapur, Navi Mumbai.', hi: '19. कोंकण रेलवे (KRCL) - रोहा से थोकूर (741 किमी), मुख्यालय सीबीडी बेलापुर, नवी मुंबई।' },
    ],
    technicalSpecs: [
      { label: 'Total Railway Zones', value: '18 + Metro Railway' },
      { label: 'Total Operating Divisions', value: '70 Divisions' },
      { label: 'First Zone Created', value: 'Southern Railway (14 April 1951)' },
      { label: 'Highest Revenue Zone', value: 'SECR (Bilaspur)' },
    ],
    examSignificance: {
      en: 'Guaranteed 2-3 questions in every RRB NTPC and Group D CBT exam paper.',
      hi: 'आरआरबी एनटीपीसी एवं ग्रुप डी परीक्षा में 2 से 3 प्रश्न अनिवार्य रूप से पूछे जाते हैं।',
    },
  },
  {
    id: 'railway-apex-governance',
    level: 'basic',
    category: 'Governance & Structure',
    title: {
      en: 'Apex Governance: Ministry of Railways & Railway Board Hierarchy',
      hi: 'शीर्ष प्रशासनिक ढांचा: रेल मंत्रालय एवं रेलवे बोर्ड पदानुक्रम',
    },
    facts: [
      {
        en: 'The Railway Board was first constituted in March 1905 under the recommendations of the Sir Thomas Robertson Committee.',
        hi: 'रेलवे बोर्ड का गठन पहली बार मार्च 1905 में सर थॉमस रॉबर्टसन समिति की सिफारिशों पर किया गया था।',
      },
      {
        en: 'The Indian Railway Act 1890 was replaced by the modern Indian Railways Act, 1989, which governs operations, safety, and tariff regulations.',
        hi: 'भारतीय रेलवे अधिनियम 1890 को भारतीय रेलवे अधिनियम 1989 द्वारा प्रतिस्थापित किया गया, जो परिचालन और संरक्षा का मूल आधार है।',
      },
      {
        en: 'Separation of Railway Budget: In 1924, following the Sir William Acworth Committee Report (1920-21), the Railway Budget was separated from the General Budget.',
        hi: 'रेल बजट का पृथक्करण: वर्ष 1924 में सर विलियम एकवर्थ समिति (1920-21) की रिपोर्ट के आधार पर रेल बजट को आम बजट से अलग किया गया।',
      },
      {
        en: 'Merger of Railway Budget: In 2017, after 92 years of separation, the Railway Budget was merged back into the Union Budget on the recommendations of the Bibek Debroy Committee.',
        hi: 'रेल बजट का विलय: 92 वर्षों के बाद वर्ष 2017 में विवेक देबरॉय समिति की सिफारिशों पर रेल बजट को पुनः आम बजट में समाहित कर दिया गया।',
      },
      {
        en: 'Indian Railway Management Service (IRMS): Restructured single central cadre replacing 8 distinct legacy civil and engineering services to eliminate departmental silos.',
        hi: 'भारतीय रेलवे प्रबंधन सेवा (IRMS): विभागीय बाधाओं को दूर करने हेतु 8 पुरानी सेवाओं के स्थान पर एक एकीकृत केंद्रीय सेवा का गठन।',
      },
    ],
    technicalSpecs: [
      { label: 'Railway Board Formed', value: 'March 1905' },
      { label: 'Acworth Committee', value: '1920-21 (Budget Separation)' },
      { label: 'Bibek Debroy Committee', value: '2015 (Budget Merger in 2017)' },
      { label: 'Current Minister of Railways', value: 'Shri Ashwini Vaishnaw' },
    ],
    examSignificance: {
      en: 'Acworth & Bibek Debroy committees are recurring questions in all NTPC Graduate exams.',
      hi: 'एकवर्थ और विवेक देबरॉय समिति संबंधी प्रश्न प्रत्येक स्नातक स्तर की परीक्षा में पूछे जाते हैं।',
    },
  },

  // =========================================================================
  // LEVEL 2: INTERMEDIATE / OPERATIONAL & ROLLING STOCK KNOWLEDGE (मध्यम स्तर)
  // =========================================================================
  {
    id: 'railway-production-units',
    level: 'intermediate',
    category: 'Production Units & Manufacturing',
    title: {
      en: 'Complete Directory of Indian Railways Production Units (PUs)',
      hi: 'भारतीय रेलवे की प्रमुख विनिर्माण इकाइयों (Production Units) की संपूर्ण संदर्शिका',
    },
    facts: [
      {
        en: 'Chittaranjan Locomotive Works (CLW) - Located in Chittaranjan, Asansol (West Bengal). Founded in 1950, named after Deshbandhu Chittaranjan Das. Manufactures 3-phase high horse-power electric locomotives (WAP-7, WAG-9HC). World record for highest annual locomotive output.',
        hi: 'चित्तरंजन लोकोमोटिव वर्क्स (CLW) - चित्तरंजन, आसनसोल (पश्चिम बंगाल)। स्थापना 1950। यह 3-फेज उच्च हॉर्सपावर विद्युत लोकोमोटिव (WAP-7, WAG-9HC) बनाता है।',
      },
      {
        en: 'Banaras Locomotive Works (BLW) - Located in Varanasi (Uttar Pradesh). Formerly Diesel Locomotive Works (DLW), transformed into 100% electric locomotive production facility. Manufactured India\'s first converted Dual-Mode Locomotive.',
        hi: 'बनारस लोकोमोटिव वर्क्स (BLW) - वाराणसी (उत्तर प्रदेश)। पूर्व में डीजल लोकोमोटिव वर्क्स (DLW), अब 100% विद्युत लोकोमोटिव विनिर्माण केंद्र।',
      },
      {
        en: 'Integral Coach Factory (ICF) - Located in Perambur, Chennai (Tamil Nadu). Established in 1955 with Swiss collaboration. Designed and manufactured the revolutionary Vande Bharat Express (Train 18), Vande Sleeper, and Amrit Bharat coaches.',
        hi: 'इंटीग्रल कोच फैक्ट्री (ICF) - पेरंबूर, चेन्नई (तमिलनाडु)। स्थापना 1955। वंदे भारत एक्सप्रेस (ट्रेन 18), वंदे स्लीपर और अमृत भारत कोचों का निर्माता।',
      },
      {
        en: 'Rail Coach Factory (RCF) - Located in Kapurthala (Punjab). Established in 1986. Pioneer in manufacturing Linke Hofmann Busch (LHB) German-design stainless steel coaches.',
        hi: 'रेल कोच फैक्ट्री (RCF) - कपूरथला (पंजाब)। स्थापना 1986। एलएचबी (LHB) स्टेनलेस स्टील आधुनिक डिब्बों के निर्माण में अग्रणी।',
      },
      {
        en: 'Modern Coach Factory (MCF) - Located in Lalganj, Raebareli (Uttar Pradesh). Established in 2012. State-of-the-art automated coach manufacturing facility utilizing robotic welding and laser cutting.',
        hi: 'मॉडर्न कोच फैक्ट्री (MCF) - लालगंज, रायबरेली (उत्तर प्रदेश)। स्थापना 2012। अत्याधुनिक रोबोटिक वेल्डिंग सक्षम स्मार्ट कोच निर्माण इकाई।',
      },
      {
        en: 'Rail Wheel Factory (RWF) - Located in Yelahanka, Bengaluru (Karnataka). Established in 1984. Produces cast steel railway wheels, axles, and wheelsets using pressure pouring technology.',
        hi: 'रेल व्हील फैक्ट्री (RWF) - येलहंका, बेंगलुरु (कर्नाटक)। स्थापना 1984। दबाव ढलाई तकनीक द्वारा पहियों और धुरों (Axles) का निर्माण।',
      },
      {
        en: 'Rail Wheel Plant (RWP) - Located in Bela, Saran district (Bihar). Commissioned in 2014 to meet indigenous wheel requirements for freight and passenger cars.',
        hi: 'रेल व्हील प्लांट (RWP) - बेला, सारण (बिहार)। स्थापना 2014। मालगाड़ियों एवं यात्री डिब्बों हेतु स्वदेशी पहिया निर्माण।',
      },
      {
        en: 'Patiala Locomotive Works (PLW) - Located in Patiala (Punjab). Formerly Diesel-Loco Modernisation Works (DMW). Manufactures 3-phase electric locos, electric shunters, and precision components.',
        hi: 'पटियाला लोकोमोटिव वर्क्स (PLW) - पटियाला (पंजाब)। पूर्व में DMW। 3-फेज इलेक्ट्रिक लोको और सटीक स्पेयर पार्ट्स निर्माता।',
      },
    ],
    technicalSpecs: [
      { label: 'Vande Bharat Maker', value: 'ICF Perambur (Chennai)' },
      { label: 'Highest Output Loco Plant', value: 'CLW (Chittaranjan)' },
      { label: 'Wheel Factories', value: 'RWF Yelahanka & RWP Bela' },
      { label: 'LHB Pioneer', value: 'RCF Kapurthala' },
    ],
    examSignificance: {
      en: 'Frequently tested in "Match Unit with Location" questions across RRB JE and NTPC.',
      hi: 'आरआरबी जेई और एनटीपीसी में विनिर्माण इकाई और स्थान के मिलान वाले प्रश्न।',
    },
  },
  {
    id: 'railway-locomotives-classification',
    level: 'intermediate',
    category: 'Rolling Stock & Traction',
    title: {
      en: 'Locomotive Classification System & Rolling Stock Tech',
      hi: 'लोकोमोटिव वर्गीकरण प्रणाली (Nomenclature) एवं रोलिंग स्टॉक तकनीक',
    },
    facts: [
      {
        en: '4-Letter / 5-Letter Locomotive Classification Code: First letter = Track Gauge (W: Broad Gauge, Y: Metre Gauge, Z: Narrow Gauge 762mm, N: Narrow Gauge 610mm). Second letter = Motive Power (A: AC Electric, D: Diesel, C: DC Electric, CA: Dual AC/DC). Third letter = Traffic Duty (P: Passenger, G: Goods/Freight, M: Mixed Passenger & Goods, S: Shunting). Fourth letter = Sequential generation / Horsepower series (e.g. 7 = 6,000 HP class, 9 = 6,120 HP class).',
        hi: 'लोकोमोटिव नामकरण प्रणाली: पहला अक्षर = गेज (W: ब्रॉड गेज, Y: मीटर गेज)। दूसरा = ईंधन (A: AC विद्युत, D: डीजल)। तीसरा = कार्य (P: यात्री, G: मालगाड़ी, M: मिश्रित, S: शंटिंग)। चौथा = हॉर्सपावर वर्ग (जैसे 7 = 6000 HP, 9 = 6120 HP)।',
      },
      {
        en: 'WAP-7: The undisputed flagship electric passenger locomotive of Indian Railways. 6,000 HP, 3-phase induction motor, regenerative braking, maximum operating speed of 140 km/h (capable up to 160 km/h). Equipped with Hotel Load converter providing electrical power to train coaches directly from OHE, eliminating diesel power cars.',
        hi: 'WAP-7: भारतीय रेल का प्रमुख यात्री विद्युत लोकोमोटिव। 6,000 HP, 3-फेज इंडक्शन मोटर, रीजेनरेटिव ब्रेकिंग और होटल लोड तकनीक जिससे डीजल जनरेटर कार की आवश्यकता समाप्त हो गई।',
      },
      {
        en: 'WAG-12B (Prima T8): India\'s most powerful locomotive (12,000 Horsepower). Twin-section electric heavy freight locomotive manufactured by Madhepura Electric Locomotive Private Limited (MELPL - joint venture between Ministry of Railways & Alstom). Capable of hauling 6,000-tonne freight trains at 120 km/h on Dedicated Freight Corridors.',
        hi: 'WAG-12B: भारत का सबसे शक्तिशाली लोकोमोटिव (12,000 हॉर्सपावर)। मधेपुरा (बिहार) में एल्सटॉम के साथ संयुक्त उद्यम द्वारा निर्मित। डीएफसी पर 6,000 टन की मालगाड़ियों को 120 किमी/घंटा की गति से खींचने में सक्षम।',
      },
      {
        en: 'LHB (Linke Hofmann Busch) vs ICF Coaches: LHB coaches are made of austenitic stainless steel, equipped with Center Buffer Couplers (CBC) preventing capsizing/climbing during accidents (anti-telescopic design), disc brakes for rapid deceleration, and designed for 160–200 km/h operating speeds. ICF coaches use carbon steel with screw couplings and tread brakes, limited to 110–120 km/h.',
        hi: 'LHB बनाम ICF कोच: LHB कोच जर्मन डिजाइन के स्टेनलेस स्टील डिब्बे हैं, जिनमें सेंटर बफर कपलर (CBC) होता है जो दुर्घटना में डिब्बों को एक-दूसरे पर चढ़ने से रोकता है (एंटी-टेलीस्कोपिक)। इसमें डिस्क ब्रेक होते हैं और यह 160-200 किमी/घंटा की गति हेतु प्रमाणित है।',
      },
    ],
    technicalSpecs: [
      { label: 'WAP-7 Power', value: '6,000 HP (4,474 kW)' },
      { label: 'WAG-12B Power', value: '12,000 HP (World Record Heavy Haul)' },
      { label: 'OHE Voltage', value: '25,000 Volts (25 kV) AC at 50 Hz' },
      { label: 'Coach Coupler Type', value: 'AAR Tightlock CBC on LHB' },
    ],
    examSignificance: {
      en: 'Essential for RRB JE Electrical & Mechanical Engineering CBT-2 and NTPC General Awareness.',
      hi: 'आरआरबी जेई इलेक्ट्रिकल व मैकेनिकल तकनीकी परीक्षा और एनटीपीसी सामान्य ज्ञान हेतु अपरिहार्य।',
    },
  },
  {
    id: 'railway-engineering-wonders',
    level: 'intermediate',
    category: 'Engineering Marvels & Records',
    title: {
      en: 'World Records and Engineering Wonders of Indian Railways',
      hi: 'भारतीय रेल के विश्व कीर्तिमान, विशाल पुल एवं इंजीनियरिंग चमत्कार',
    },
    facts: [
      {
        en: 'World Highest Railway Arch Bridge: Chenab Rail Bridge in Reasi district of Jammu & Kashmir on the Udhampur-Srinagar-Baramulla Rail Link (USBRL). Stands 359 meters (1,178 ft) above the river bed, 35 meters higher than the Eiffel Tower in Paris. Designed to withstand blast forces and wind speeds up to 266 km/h.',
        hi: 'विश्व का सबसे ऊंचा रेलवे आर्च ब्रिज: जम्मू-कश्मीर के रियासी जिले में चिनाब नदी पर बना पुल (USBRL परियोजना)। यह नदी तल से 359 मीटर ऊंचा है (एफिल टॉवर से 35 मीटर ऊंचा) और 266 किमी/घंटा तक की हवा का सामना कर सकता है।',
      },
      {
        en: 'India\'s First Cable-Stayed Railway Bridge: Anji Khad Bridge in Reasi (J&K). Features an asymmetrical cable-stayed deck supported by a central pylon towering 193 meters, engineered specifically for high seismic activity and complex geology.',
        hi: 'भारत का पहला केबल-आधारित रेलवे पुल: अंजी खड्ड पुल (जम्मू-कश्मीर)। इसमें 193 मीटर ऊंचे एकल केंद्रीय तोरण (Pylon) पर आधारित केबल-स्टेड डेक है, जो उच्च भूकंपीय क्षेत्र में निर्मित है।',
      },
      {
        en: 'World Longest Railway Platform: Platform No. 8 at Shree Siddharoodha Swamiji Hubballi Junction (SWR, Karnataka), measuring exactly 1,507 meters. Recognized by Guinness World Records, overtaking Gorakhpur Junction (1,366 meters).',
        hi: 'विश्व का सबसे लंबा रेलवे प्लेटफॉर्म: श्री सिद्धारूढ़ स्वामीजी हुब्बल्लि जंक्शन (कर्नाटक) का प्लेटफॉर्म सं. 8 (1,507 मीटर लंबा)। इसने गोरखपुर (1,366 मीटर) को पीछे छोड़कर गिनीज बुक में स्थान बनाया।',
      },
      {
        en: 'New Pamban Sea Bridge: India\'s first vertical-lift sea bridge connecting Mandapam on mainland India to Rameswaram Island in Tamil Nadu. The 72.5-meter central navigational span lifts vertically by 17 meters to allow maritime ships to pass beneath.',
        hi: 'नया पंबन समुद्री पुल: भारत का पहला वर्टिकल-लिफ्ट रेलवे समुद्री पुल, जो मंडपम को रामेश्वरम द्वीप (तमिलनाडु) से जोड़ता है। इसका 72.5 मीटर का केंद्रीय हिस्सा जहाजों के गुजरने हेतु 17 मीटर ऊपर उठ सकता है।',
      },
      {
        en: 'Longest Rail Tunnel in India: Pir Panjal Railway Tunnel (T-80), measuring 11.215 km on the Banihal-Qazigund section of Kashmir Railway. India\'s longest under-construction tunnel is T-49 (12.75 km) on USBRL.',
        hi: 'भारत की सबसे लंबी चालू रेल सुरंग: पीर पंजाल सुरंग (T-80), लंबाई 11.215 किमी (बनिहाल-काजीगुंड खंड)। सबसे लंबी निर्माणाधीन सुरंग T-49 (12.75 किमी) है।',
      },
      {
        en: 'Four UNESCO Mountain Railway Heritage Sites: Darjeeling Himalayan Railway (inscribed 1999), Nilgiri Mountain Railway with unique rack and pinion system (2005), Kalka-Shimla Railway (2008), and Chhatrapati Shivaji Maharaj Terminus (2004).',
        hi: 'यूनेस्को विश्व धरोहर स्थल: दार्जिलिंग हिमालयन रेलवे (1999), नीलगिरि माउंटेन रेलवे (रैक एवं पिनियन तकनीक - 2005), कालका-शिमला रेलवे (2008), एवं छत्रपति शिवाजी महाराज टर्मिनस मुंबई (2004)।',
      },
      {
        en: 'Official Mascot of Indian Railways: "Bholu the Guard Elephant" carrying an emerald green signal lamp, unveiled in 2002 by the Railway Board commemorating the 150th anniversary of Indian Railways.',
        hi: 'भारतीय रेल का आधिकारिक शुभंकर: "भोलू हाथी" (हरी बत्ती वाली लालटेन लिए), जिसे वर्ष 2002 में भारतीय रेल के 150 वर्ष पूरे होने के उपलक्ष्य में अपनाया गया।',
      },
    ],
    technicalSpecs: [
      { label: 'Highest Arch Bridge', value: 'Chenab Bridge (359m high)' },
      { label: 'Longest Platform', value: 'Hubballi Station (1,507m)' },
      { label: 'Longest Operational Tunnel', value: 'Pir Panjal T-80 (11.215 km)' },
      { label: 'First Sea Lift Bridge', value: 'New Pamban Bridge (Tamil Nadu)' },
    ],
    examSignificance: {
      en: 'Direct GK questions asked across 100% of Railway online shift papers.',
      hi: 'सभी ऑनलाइन शिफ्टों में अनिवार्य रूप से पूछे जाने वाले राष्ट्रीय गौरव एवं कीर्तिमान।',
    },
  },

  // =========================================================================
  // LEVEL 3: ADVANCE / PRO TECHNICAL & MODERN SYSTEMS (उन्नत / प्रो स्तर)
  // =========================================================================
  {
    id: 'railway-kavach-technical-deepdive',
    level: 'advance',
    category: 'Safety Systems & TCAS',
    title: {
      en: 'KAVACH (TCAS): Architectural Architecture & Working Principles',
      hi: 'कवच (TCAS) संरक्षा प्रणाली: तकनीकी वास्तुकला एवं कार्य प्रणाली',
    },
    facts: [
      {
        en: 'KAVACH is India\'s indigenously developed Automatic Train Protection (ATP) system, engineered jointly by RDSO Lucknow and Indian technology vendors (Medha, HBL, Kernex). Officially designated by the Ministry of Railways as National Automatic Train Protection System.',
        hi: 'कवच (KAVACH) भारत की स्वदेशी स्वचालित ट्रेन सुरक्षा प्रणाली है, जिसे आरडीएसओ (RDSO) और भारतीय कंपनियों ने संयुक्त रूप से विकसित किया है।',
      },
      {
        en: 'Safety Integrity Level: Certified to SIL-4 (Safety Integrity Level 4) - the highest safety certification standard in railway automation globally, guaranteeing an error probability of less than 1 in 10,000 years.',
        hi: 'संरक्षा स्तर: इसे SIL-4 (Safety Integrity Level 4) प्रमाणन प्राप्त है, जो वैश्विक रेलवे में उच्चतम संरक्षा मानक है।',
      },
      {
        en: 'Tri-Tier System Architecture: 1) Stationary Kavach at stations connected to Electronic Interlocking (EI); 2) Loco Kavach onboard locomotives with Driver Machine Interface (DMI) and brake interface units; 3) RFID Tags installed on track sleepers at 1 km intervals and turnouts for precise spatial position calculation.',
        hi: 'त्रि-स्तरीय संरचना: 1) स्टेशनों पर स्टेशनरी कवच जो इलेक्ट्रॉनिक इंटरलॉकिंग से जुड़ा होता है; 2) इंजनों में लोको कवच व ड्राइवर इंटरफ़ेस; 3) ट्रैक स्लीपरों पर प्रत्येक 1 किमी पर लगे आरएफआईडी (RFID) टैग जो सटीक स्थान निर्धारित करते हैं।',
      },
      {
        en: 'Wireless Communication & Braking: Operates over duplex UHF Radio frequencies (400–470 MHz) with seamless transition to 5G LTE-R. Automatically applies emergency brakes if the loco pilot passes a red signal (SPAD - Signal Passed At Danger) or exceeds dynamic speed limits.',
        hi: 'वायरलेस संचार व ब्रेकिंग: 400-470 MHz यूएचएफ रेडियो और 5G LTE-R पर संचालित। यदि लोको पायलट लाल सिग्नल पार करता है (SPAD) या गति सीमा से अधिक गति करता है, तो यह स्वतः ब्रेक लगा देता है।',
      },
      {
        en: 'Anti-Collision Protection: Continuously calculates distance between two trains on the same track and automatically stops both trains when a collision threat (head-on, rear-end, or side collision) is detected. Also generates auto-whistling at level crossing gates.',
        hi: 'टक्कर रोधी सुरक्षा: समान ट्रैक पर दो ट्रेनों के बीच दूरी की गणना कर आमने-सामने या पीछे से होने वाली टक्कर को रोकने हेतु दोनों ट्रेनों को स्वतः रोक देता है।',
      },
    ],
    technicalSpecs: [
      { label: 'Safety Certification', value: 'SIL-4 (CENELEC Standards)' },
      { label: 'Radio Frequency', value: 'UHF 400–470 MHz / 5G LTE-R' },
      { label: 'Key Components', value: 'RFID Tags, Loco Unit, Station Unit' },
      { label: 'Latest Upgrade', value: 'Kavach 4.0 Specification (2024–2026)' },
    ],
    examSignificance: {
      en: 'Top priority topic in RRB JE Electronics / S&T / Electrical CBT-2 and NTPC CBT-2 General Awareness.',
      hi: 'आरआरबी जेई एसएंडटी / इलेक्ट्रिकल तकनीकी परीक्षा और एनटीपीसी सीबीटी-2 हेतु सर्वोच्च प्राथमिकता।',
    },
  },
  {
    id: 'railway-signalling-interlocking',
    level: 'advance',
    category: 'Signalling & Telecommunication',
    title: {
      en: 'Railway Signalling: Absolute Block, Automatic Block & Electronic Interlocking',
      hi: 'रेलवे सिग्नलिंग: एब्सोल्यूट ब्लॉक, ऑटोमैटिक ब्लॉक एवं इलेक्ट्रॉनिक इंटरलॉकिंग',
    },
    facts: [
      {
        en: 'Absolute Block System vs Automatic Block System: In Absolute Block, only ONE train is permitted to occupy the block section between two stations at any given time. In Automatic Block, the line between two stations is subdivided into multiple automatic block sections protected by 3-aspect or 4-aspect signals, allowing multiple trains to follow each other safely in the same direction, dramatically increasing line capacity.',
        hi: 'एब्सोल्यूट ब्लॉक बनाम ऑटोमैटिक ब्लॉक: एब्सोल्यूट ब्लॉक में दो स्टेशनों के बीच एक समय में केवल एक ही ट्रेन जा सकती है। ऑटोमैटिक ब्लॉक में लाइन को कई उप-खंडों में विभाजित किया जाता है, जिससे एक ही दिशा में एक के पीछे एक कई ट्रेनें चल सकती हैं।',
      },
      {
        en: '4-Aspect Colour Light Signalling: 1) Green = Clear (Proceed at maximum permissible line speed, next two signals are clear); 2) Double Yellow = Attention (Proceed prepared to pass next signal at restricted speed of 30 km/h or diverge); 3) Yellow = Caution (Proceed prepared to stop at next signal); 4) Red = Danger / Stop.',
        hi: '4-एस्पेक्ट कलर लाइट सिग्नल: 1) हरा = क्लीयर (स्वीकृत अधिकतम गति से चलें); 2) डबल पीला = अटेंशन (अगले सिग्नल को 30 किमी/घंटा या डायवर्जन हेतु तैयार रहें); 3) पीला = कॉशन (अगले सिग्नल पर रुकने हेतु तैयार रहें); 4) लाल = खतरा (पूर्णतः रुकें)।',
      },
      {
        en: 'Electronic Interlocking (EI): Microprocessor-based digital interlocking system with dual hardware redundancy (warm standby), replacing electro-mechanical lever frames and relay interlocking. Controls signals, points, and level crossing gates via fail-safe logic computers.',
        hi: 'इलेक्ट्रॉनिक इंटरलॉकिंग (EI): माइक्रोप्रोसेसर आधारित डिजिटल सिस्टम, जो पुराने रिले और लीवर सिस्टम का स्थान लेता है और कंप्यूटर लॉजिक द्वारा सिग्नल व पॉइंट को सुरक्षित नियंत्रित करता है।',
      },
      {
        en: 'Axle Counters (SSDAC / MSDAC): Electronic sensors mounted on rails that count the number of wheel axles entering and leaving a track section. If entering axle count equals leaving axle count, the section is verified as clear, immune to track ballast contamination.',
        hi: 'एक्सल काउंटर (SSDAC / MSDAC): रेल की पटरी पर लगे सेंसर जो ट्रैक खंड में प्रवेश करने और बाहर निकलने वाले पहियों की धुरों की गिनती कर ट्रैक के खाली होने की पुष्टि करते हैं।',
      },
    ],
    technicalSpecs: [
      { label: '4 Signal Aspects', value: 'Green, Double Yellow, Yellow, Red' },
      { label: 'Axle Counter Types', value: 'SSDAC (Single) & MSDAC (Multi)' },
      { label: 'Modern Interlocking', value: 'Electronic Interlocking (EI)' },
      { label: 'Track Detection', value: 'DC Track Circuits & Audio Frequency' },
    ],
    examSignificance: {
      en: 'High-yield conceptual questions in RRB JE CBT-2 S&T branch and Station Master CBAT aptitude context.',
      hi: 'आरआरबी जेई एसएंडटी परीक्षा और स्टेशन मास्टर अभिरुचि परीक्षण (CBAT) हेतु तकनीकी आधार।',
    },
  },
  {
    id: 'railway-track-pway-engineering',
    level: 'advance',
    category: 'Civil & Track Engineering',
    title: {
      en: 'Permanent Way (P-Way) Engineering: Rails, Sleepers & Welded Tracks',
      hi: 'स्थायी मार्ग (Permanent Way) इंजीनियरिंग: रेल, स्लीपर एवं वेल्डेड ट्रैक',
    },
    facts: [
      {
        en: 'Standard Rail Sections: 60 kg/m (UIC-60) rails are the primary standard for all major trunk lines and high-density routes, capable of handling 25-tonne to 32.5-tonne axle loads. 52 kg/m rails are used on secondary routes. 90 UTS (Ultimate Tensile Strength = 90 kg/mm²) head-hardened steel rails are used for sharp curves and metro networks.',
        hi: 'मानक रेल सेक्शन: मुख्य और भारी माल मार्गों पर 60 किग्रा/मीटर (UIC-60) रेल का उपयोग होता है, जो 25 से 32.5 टन एक्सल लोड वहन करने में सक्षम है। द्वितीयक मार्गों पर 52 किग्रा/मीटर रेल प्रयुक्त होती है।',
      },
      {
        en: 'Pre-Stressed Concrete (PSC) Sleepers: Weighing ~285 kg, designed for 250 kN dynamic loads with a service life exceeding 50 years. Fastened using Pandrol clips (Mark-III / Mark-V elastic rail clips) and rubber grooved pads to insulate rails for track circuits.',
        hi: 'पीएससी (Pre-Stressed Concrete) स्लीपर: वजन लगभग 285 किग्रा, 50 वर्ष से अधिक की आयु। पेंड्रोल क्लिप (मार्क-III इलास्टिक क्लिप) और रबर पैड द्वारा रेल को जकड़कर रखा जाता है।',
      },
      {
        en: 'LWR (Long Welded Rails) & CWR (Continuous Welded Rails): Welded rail lengths exceeding 1 km that eliminate fish-plated rail joints. Eliminates "clickety-clack" noise, reduces wheel-rail impact wear, and enhances ride comfort and safety. Welded via Mobile Flash Butt Welding and Thermit Welding.',
        hi: 'एलडब्ल्यूआर (LWR) एवं सीडब्ल्यूआर (CWR): 1 किमी से अधिक लंबाई की वेल्डेड रेल पटरियां जो फिश-प्लेट जोड़ों को समाप्त कर देती हैं। इससे घर्षण कम होता है, रेल की आयु बढ़ती है और तेज गति संभव होती है।',
      },
      {
        en: 'Ballast Cushion & Cross-Drainage: Standard ballast cushion depth under sleepers is 300 mm to 350 mm on broad gauge routes using clean, hard, angular machine-crushed granite stone ballast to distribute load, drain water, and absorb vibrations.',
        hi: 'गिट्टी (बैलास्ट) कुशन: स्लीपर के नीचे 300 से 350 मिमी गहरी कठोर कोणीय ग्रेनाइट गिट्टी बिछाई जाती है जो भार वितरण, जल निकासी और कंपन अवशोषण का कार्य करती है।',
      },
    ],
    technicalSpecs: [
      { label: 'Standard Heavy Rail', value: '60 kg/m UIC-60' },
      { label: 'Steel Grade', value: '90 UTS Head-Hardened' },
      { label: 'Sleeper Spacing', value: '1,660 sleepers per km (60 cm center-to-center)' },
      { label: 'Ballast Depth', value: '300 mm to 350 mm clean stone cushion' },
    ],
    examSignificance: {
      en: 'Core technical questions for RRB JE Civil Engineering CBT-2 and Group D Track Maintainer duties.',
      hi: 'आरआरबी जेई सिविल इंजीनियरिंग सीबीटी-2 और ग्रुप डी ट्रैक मेंटेनर कार्यप्रणाली हेतु कोर तकनीकी ज्ञान।',
    },
  },
  {
    id: 'railway-dedicated-freight-corridors',
    level: 'advance',
    category: 'Freight & Logistics Revolution',
    title: {
      en: 'Dedicated Freight Corridors (DFCCIL): Eastern & Western Corridors',
      hi: 'समर्पित माल गलियारा निगम (DFCCIL): पूर्वी एवं पश्चिमी गलियारे',
    },
    facts: [
      {
        en: 'DFCCIL (Dedicated Freight Corridor Corporation of India Limited) was incorporated in 2006 under the Ministry of Railways to construct and operate high-speed, heavy-haul freight railway corridors.',
        hi: 'डीएफसीसीआईएल (DFCCIL) की स्थापना वर्ष 2006 में भारी माल परिवहन को यात्री लाइनों से अलग करने हेतु एक विशेष कंपनी के रूप में की गई।',
      },
      {
        en: 'Western DFC (WDFC): Spanning 1,506 km from Dadri (Uttar Pradesh) to Jawaharlal Nehru Port (JNPT, Navi Mumbai). Features High-Rise OHE with 7.45-meter contact wire height enabling world-first double-stack container trains on broad gauge electric traction.',
        hi: 'पश्चिमी डीएफसी (WDFC): दादरी (उत्तर प्रदेश) से जेएनपीटी (नवी मुंबई) तक 1,506 किमी लंबा। इसमें 7.45 मीटर ऊंची ओएचई (High-Rise OHE) है, जिससे विश्व में पहली बार ब्रॉड गेज पर डबल-स्टैक कंटेनर ट्रेनें विद्युत ट्रैक्शन पर दौड़ती हैं।',
      },
      {
        en: 'Eastern DFC (EDFC): Spanning 1,875 km from Sahnewal (Ludhiana, Punjab) to Dankuni (West Bengal). Fully automated with Operation Control Centre (OCC) at Prayagraj (one of the largest operational control centers in the world). Built primarily for transporting coal, steel, and agricultural cargo.',
        hi: 'पूर्वी डीएफसी (EDFC): साहनेवाल (लुधियाना, पंजाब) से दानकुनी (पश्चिम बंगाल) तक 1,875 किमी। इसका विशालतम संचालन नियंत्रण केंद्र (OCC) प्रयागराज में स्थित है। मुख्य रूप से कोयला, इस्पात और खाद्यान्न परिवहन हेतु।',
      },
      {
        en: 'Heavy-Haul Parameters: 25-tonne axle load tracks engineered with automated Ro-Ro (Roll-on Roll-off) truck-on-train facilities, moving freight at average speeds of 75–100 km/h (compared to 25 km/h on conventional mixed lines).',
        hi: 'हैवी हॉल मानक: 25 टन एक्सल लोड ट्रैक, जो 75 से 100 किमी/घंटा की गति से मालगाड़ियों का संचालन करते हैं, जिससे लॉजिस्टिक्स लागत में भारी कमी आई है।',
      },
    ],
    technicalSpecs: [
      { label: 'WDFC Length', value: '1,506 km (Dadri to JNPT)' },
      { label: 'EDFC Length', value: '1,875 km (Ludhiana to Dankuni)' },
      { label: 'Max Train Speed', value: '100 km/h for 1.5 km long trains' },
      { label: 'Operations Center', value: 'OCC Subedarganj, Prayagraj' },
    ],
    examSignificance: {
      en: 'Major infrastructure topic in RRB NTPC Goods Train Manager and Commercial posts examinations.',
      hi: 'आरआरबी एनटीपीसी गुड्स ट्रेन मैनेजर और कमर्शियल पदों की परीक्षा हेतु अत्यंत महत्वपूर्ण।',
    },
  },
  {
    id: 'railway-high-speed-and-future-tech',
    level: 'advance',
    category: 'Future Technologies & Bullet Train',
    title: {
      en: 'Mumbai-Ahmedabad Bullet Train & Future Railway Tech',
      hi: 'मुंबई-अहमदाबाद बुलेट ट्रेन (MAHSR), हाइड्रोजन ट्रेन एवं भविष्य की रेलवे तकनीक',
    },
    facts: [
      {
        en: 'Mumbai-Ahmedabad High Speed Rail (MAHSR): India\'s first bullet train project spanning 508.17 km with 12 stations (4 in Maharashtra, 8 in Gujarat). Being executed by National High Speed Rail Corporation Limited (NHSRCL) with Japanese Shinkansen E5 Series technology.',
        hi: 'मुंबई-अहमदाबाद हाई स्पीड रेल (MAHSR): भारत की पहली 508.17 किमी लंबी बुलेट ट्रेन परियोजना, जिसमें 12 स्टेशन हैं। यह जापानी शिंकानसेन E5 तकनीक पर आधारित है और 320 किमी/घंटा की गति से संचालित होगी।',
      },
      {
        en: 'Undersea Rail Tunnel: Includes India\'s first 21-km long underground/undersea rail tunnel package between Bandra Kurla Complex (BKC) and Shilphata, with a 7-km stretch running undersea beneath Thane Creek.',
        hi: 'समुद्र के नीचे रेल सुरंग: ठाणे क्रीक के नीचे 7 किमी सहित बीकेसी (मुंबई) से शिलफाटा के बीच 21 किमी लंबी भारत की पहली समुद्र-तटीय रेल सुरंग।',
      },
      {
        en: 'Hydrogen for Heritage: Indian Railways initiative to operate zero-emission hydrogen-powered fuel cell trains on 8 heritage and picturesque mountain routes (starting with Jind-Sonipat 89 km section of Northern Railway). Uses hydrogen fuel cells and lithium-ion batteries releasing only water vapor.',
        hi: 'हाइड्रोजन ट्रेन (Hydrogen for Heritage): भारतीय रेल द्वारा 8 हेरिटेज और पर्वतीय मार्गों पर शून्य-उत्सर्जन वाली हाइड्रोजन ईंधन सेल ट्रेनें चलाने की योजना (उत्तरी रेलवे के जींद-सोनीपत मार्ग पर परीक्षण)।',
      },
      {
        en: 'Vande Bharat Sleeper: Developed by BEML Bangalore and ICF Chennai for long-distance overnight intercity journeys (160 km/h). Features crash-worthy steel car bodies, sensor-controlled bio-vacuum toilets, ergonomic berths, and aerodynamic front noses.',
        hi: 'वंदे भारत स्लीपर: लंबी दूरी की रात्रिकालीन यात्रा हेतु बीईएमएल (BEML) और आईसीएफ द्वारा निर्मित 160 किमी/घंटा की गति वाली ट्रेन।',
      },
    ],
    technicalSpecs: [
      { label: 'MAHSR Speed', value: '320 km/h operational (350 km/h design)' },
      { label: 'MAHSR Length', value: '508.17 km (12 stations)' },
      { label: 'Undersea Tunnel', value: '7 km stretch in Thane Creek' },
      { label: 'Hydrogen Route', value: 'Jind-Sonipat (Northern Railway)' },
    ],
    examSignificance: {
      en: 'Modern cutting-edge questions in RRB NTPC Graduate, JE, and Group D General Awareness.',
      hi: 'आरआरबी एनटीपीसी स्नातक, जेई एवं ग्रुप डी सामान्य ज्ञान के आधुनिक समसामयिक प्रश्न।',
    },
  },
];
