import type { BilingualText } from '../../types';

export interface RailwayGkTopic {
  id: string;
  category: string;
  title: BilingualText;
  facts: BilingualText[];
  examSignificance: BilingualText;
}

export const RAILWAY_GK_TOPICS: RailwayGkTopic[] = [
  {
    id: 'railway-history-origin',
    category: 'Historical Milestones',
    title: {
      en: 'The Dawn of Indian Railways (1853 to Independence)',
      hi: 'भारतीय रेल का उद्भव एवं ऐतिहासिक मील के पत्थर (1853 से स्वतंत्रता)',
    },
    facts: [
      {
        en: 'First passenger train in India ran on 16 April 1853 between Bori Bunder (Mumbai) and Thane, covering 34 km with 400 passengers.',
        hi: 'भारत में पहली यात्री ट्रेन 16 अप्रैल 1853 को बोरी बंदर (मुंबई) से ठाणे के बीच 34 किमी की दूरी पर 400 यात्रियों के साथ चली थी।',
      },
      {
        en: 'The inaugural train was hauled by three steam locomotives named Sultan, Sindh, and Sahib.',
        hi: 'पहली ट्रेन को तीन भाप इंजनों - सुल्तान, सिंध और साहिब द्वारा खींचा गया था।',
      },
      {
        en: 'First electric train ran on 3 February 1925 from Bombay Victoria Terminus to Kurla Harbour on 1500V DC traction.',
        hi: 'पहली विद्युत ट्रेन 3 फरवरी 1925 को बॉम्बे वीटी से कुर्ला हार्बर के बीच 1500V डीसी पर चलाई गई थी।',
      },
      {
        en: 'Nationalization of Indian Railways took place in 1951, integrating various company railways and princely state lines.',
        hi: 'भारतीय रेल का राष्ट्रीयकरण वर्ष 1951 में हुआ, जिससे विभिन्न निजी और रियासती रेल प्रणालियों का एकीकरण हुआ।',
      },
    ],
    examSignificance: {
      en: 'High Frequency: Consistently tested in RRB NTPC CBT-1 & Group D General Awareness.',
      hi: 'अति महत्वपूर्ण: आरआरबी एनटीपीसी एवं ग्रुप डी में बार-बार पूछे जाने वाले प्रश्न।',
    },
  },
  {
    id: 'railway-zones-hqs',
    category: 'Zones & Headquarters',
    title: {
      en: 'Complete List of Railway Zones and Headquarters',
      hi: 'रेलवे ज़ोन और उनके मुख्यालयों की संपूर्ण सूची',
    },
    facts: [
      {
        en: 'Northern Railway (NR) - Headquarters: New Delhi',
        hi: 'उत्तर रेलवे (NR) - मुख्यालय: नई दिल्ली',
      },
      {
        en: 'Western Railway (WR) - Headquarters: Mumbai (Churchgate)',
        hi: 'पश्चिम रेलवे (WR) - मुख्यालय: मुंबई (चर्चगेट)',
      },
      {
        en: 'Central Railway (CR) - Headquarters: Mumbai (CSMT)',
        hi: 'मध्य रेलवे (CR) - मुख्यालय: मुंबई (सीएसएमटी)',
      },
      {
        en: 'Eastern Railway (ER) - Headquarters: Kolkata (Fairlie Place)',
        hi: 'पूर्व रेलवे (ER) - मुख्यालय: कोलकाता (फेयरली प्लेस)',
      },
      {
        en: 'Southern Railway (SR) - Headquarters: Chennai Central',
        hi: 'दक्षिण रेलवे (SR) - मुख्यालय: चेन्नई सेंट्रल',
      },
      {
        en: 'South Central Railway (SCR) - Headquarters: Secunderabad',
        hi: 'दक्षिण मध्य रेलवे (SCR) - मुख्यालय: सिकंदराबाद',
      },
      {
        en: 'East Coast Railway (ECoR) - Headquarters: Bhubaneswar',
        hi: 'पूर्व तट रेलवे (ECoR) - मुख्यालय: भुवनेश्वर',
      },
      {
        en: 'North Eastern Railway (NER) - Headquarters: Gorakhpur',
        hi: 'पूर्वोत्तर रेलवे (NER) - मुख्यालय: गोरखपुर',
      },
      {
        en: 'Northeast Frontier Railway (NFR) - Headquarters: Maligaon (Guwahati)',
        hi: 'पूर्वोत्तर सीमांत रेलवे (NFR) - मुख्यालय: मालीगांव (गुवाहाटी)',
      },
      {
        en: 'North Central Railway (NCR) - Headquarters: Prayagraj',
        hi: 'उत्तर मध्य रेलवे (NCR) - मुख्यालय: प्रयागराज',
      },
      {
        en: 'South Eastern Railway (SER) - Headquarters: Kolkata (Garden Reach)',
        hi: 'दक्षिण पूर्व रेलवे (SER) - मुख्यालय: कोलकाता (गार्डन रीच)',
      },
      {
        en: 'South East Central Railway (SECR) - Headquarters: Bilaspur',
        hi: 'दक्षिण पूर्व मध्य रेलवे (SECR) - मुख्यालय: बिलासपुर',
      },
      {
        en: 'South Western Railway (SWR) - Headquarters: Hubballi',
        hi: 'दक्षिण पश्चिम रेलवे (SWR) - मुख्यालय: हुब्बल्लि',
      },
      {
        en: 'West Central Railway (WCR) - Headquarters: Jabalpur',
        hi: 'पश्चिम मध्य रेलवे (WCR) - मुख्यालय: जबलपुर',
      },
      {
        en: 'East Central Railway (ECR) - Headquarters: Hajipur',
        hi: 'पूर्व मध्य रेलवे (ECR) - मुख्यालय: हाजीपुर',
      },
      {
        en: 'North Western Railway (NWR) - Headquarters: Jaipur',
        hi: 'उत्तर पश्चिम रेलवे (NWR) - मुख्यालय: जयपुर',
      },
      {
        en: 'Metro Railway Kolkata - Headquarters: Kolkata (Designated Zone in 2010)',
        hi: 'कोलकाता मेट्रो रेलवे - मुख्यालय: कोलकाता (2010 में स्वतंत्र ज़ोन घोषित)',
      },
      {
        en: 'South Coast Railway (SCoR - 18th Zone Announced) - Headquarters: Visakhapatnam',
        hi: 'दक्षिण तट रेलवे (SCoR - 18वां घोषित ज़ोन) - मुख्यालय: विशाखापट्टनम',
      },
    ],
    examSignificance: {
      en: 'Match the Following questions appear in nearly 70% of Railway CBT papers.',
      hi: 'मुख्यालय मिलान संबंधी प्रश्न लगभग 70% रेलवे परीक्षाओं में पूछे जाते हैं।',
    },
  },
  {
    id: 'railway-modern-tech',
    category: 'Modern Rail Technology',
    title: {
      en: 'Kavach Automatic Train Protection & Vande Bharat Technology',
      hi: 'कवच स्वचालित ट्रेन सुरक्षा प्रणाली एवं वंदे भारत तकनीक',
    },
    facts: [
      {
        en: 'KAVACH is an indigenously developed Automatic Train Protection (ATP) system by RDSO (Research Designs and Standards Organisation). It achieved Safety Integrity Level 4 (SIL-4) certification.',
        hi: 'कवच (KAVACH) आरडीएसओ द्वारा स्वदेशी रूप से विकसित स्वचालित ट्रेन सुरक्षा प्रणाली है, जिसे SIL-4 संरक्षा प्रमाणन प्राप्त है।',
      },
      {
        en: 'Kavach automatically applies brakes if the loco pilot fails to brake when approaching Red Signal (SPAD - Signal Passed At Danger) and prevents head-on/rear-end collisions using UHF radio and RFID tags.',
        hi: 'यदि लोको पायलट लाल सिग्नल पर ब्रेक नहीं लगाता है, तो कवच स्वतः ब्रेक लगा देता है और रेडियो तरंगों तथा आरएफआईडी की मदद से आमने-सामने की टक्कर रोकता है।',
      },
      {
        en: 'Vande Bharat Express (Train 18) was designed and manufactured by Integral Coach Factory (ICF), Perambur, Chennai. First train flagged off on 15 February 2019 (New Delhi to Varanasi).',
        hi: 'वंदे भारत एक्सप्रेस (ट्रेन 18) को इंटीग्रल कोच फैक्ट्री (ICF) चेन्नई द्वारा डिजाइन व निर्मित किया गया। पहली ट्रेन 15 फरवरी 2019 को नई दिल्ली-वाराणसी मार्ग पर चली।',
      },
      {
        en: 'Amrit Bharat Express trains are push-pull locomotive-hauled non-AC sleeper and general class trains with aerodynamic locos at both ends.',
        hi: 'अमृत भारत एक्सप्रेस पुश-पुल तकनीक पर आधारित गैर-वातानुकूलित स्लीपर व सामान्य श्रेणी ट्रेन है, जिसके दोनों सिरों पर लोकोमोटिव होते हैं।',
      },
    ],
    examSignificance: {
      en: 'Top current affairs topic in RRB NTPC CBT-2 and RRB JE Technical sections.',
      hi: 'आरआरबी एनटीपीसी सीबीटी-2 और जेई तकनीकी खंड में सर्वाधिक संभावित समसामयिकी विषय।',
    },
  },
  {
    id: 'railway-engineering-wonders',
    category: 'Infrastructure & Engineering Records',
    title: {
      en: 'World Records and Engineering Feats of Indian Railways',
      hi: 'भारतीय रेल के विश्व कीर्तिमान एवं इंजीनियरिंग चमत्कार',
    },
    facts: [
      {
        en: 'World Highest Railway Arch Bridge: Chenab Bridge in Reasi district of J&K, standing 359 meters above the river bed (35m higher than the Eiffel Tower).',
        hi: 'विश्व का सबसे ऊंचा रेलवे आर्च ब्रिज: जम्मू-कश्मीर में चिनाब नदी पर बना पुल, जो नदी तल से 359 मीटर ऊंचा है (एफिल टॉवर से 35 मीटर ऊंचा)।',
      },
      {
        en: 'World Longest Railway Platform: Shree Siddharoodha Swamiji Hubballi Station platform #8 (Karnataka), measuring 1,507 meters (Guinness Record).',
        hi: 'विश्व का सबसे लंबा रेलवे प्लेटफॉर्म: श्री सिद्धारूढ़ स्वामीजी हुब्बल्लि स्टेशन (कर्नाटक) का प्लेटफॉर्म सं. 8, जिसकी लंबाई 1,507 मीटर है।',
      },
      {
        en: 'Longest Rail-cum-Road Bridge in India: Bogibeel Bridge across the Brahmaputra River in Assam, spanning 4.94 km.',
        hi: 'भारत का सबसे लंबा रेल-सह-सड़क पुल: असम में ब्रह्मपुत्र नदी पर बना बोगीबील पुल, जिसकी लंबाई 4.94 किमी है।',
      },
      {
        en: 'Four UNESCO Mountain Railways: Darjeeling Himalayan Railway (1999), Nilgiri Mountain Railway (2005), Kalka-Shimla Railway (2008), and CSMT Mumbai (2004).',
        hi: 'चार यूनेस्को विश्व धरोहर स्थल: दार्जिलिंग हिमालयन रेलवे (1999), नीलगिरि माउंटेन रेलवे (2005), कालका-शिमला रेलवे (2008), और सीएसएमटी मुंबई (2004)।',
      },
      {
        en: 'Official Mascot: Bholu the Guard Elephant holding an emerald green signal lamp, unveiled in 2002 for the 150th anniversary of Indian Railways.',
        hi: 'आधिकारिक शुभंकर: भोलू हाथी (हरी बत्ती वाली लालटेन लिए), जिसे 2002 में भारतीय रेल के 150 वर्ष पूरे होने पर अनावरित किया गया था।',
      },
    ],
    examSignificance: {
      en: 'Guaranteed questions in all Railway general awareness shifts.',
      hi: 'सभी रेलवे सामान्य ज्ञान शिफ्टों में सीधे पूछे जाने वाले तथ्य।',
    },
  },
];
