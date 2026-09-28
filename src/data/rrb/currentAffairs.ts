import type { BilingualText } from '../../types';

export interface CurrentAffairItem {
  id: string;
  date: string;
  category: 'Railways' | 'National' | 'Economy' | 'Science & Tech' | 'Sports' | 'Awards & Honors';
  headline: BilingualText;
  summary: BilingualText;
  examRelevance: BilingualText;
  source: string;
}

export const CURRENT_AFFAIRS_ITEMS: CurrentAffairItem[] = [
  {
    id: 'ca-2026-01',
    date: '2026-02-10',
    category: 'Railways',
    headline: {
      en: 'Indian Railways Deploys Next-Gen Kavach 4.0 on Over 10,000 Route Kilometers',
      hi: 'भारतीय रेल ने 10,000 रूट किलोमीटर से अधिक पर अगली पीढ़ी के कवच 4.0 की स्थापना की',
    },
    summary: {
      en: 'The Ministry of Railways accelerated the deployment of Kavach 4.0, which incorporates 5G LTE-R capabilities and real-time station master alerts, enhancing automatic braking on high-density trunk routes including Delhi-Mumbai and Delhi-Howrah.',
      hi: 'रेल मंत्रालय ने कवच 4.0 की स्थापना में तेजी लाई है, जिसमें 5G LTE-R क्षमताएं और वास्तविक समय स्टेशन मास्टर अलर्ट शामिल हैं, जिससे दिल्ली-मुंबई और दिल्ली-हावड़ा जैसे व्यस्त मार्गों पर स्वतः ब्रेक सुरक्षा बढ़ी है।',
    },
    examRelevance: {
      en: 'Crucial for RRB NTPC CBT-2 and RRB JE S&T engineering sections.',
      hi: 'आरआरबी एनटीपीसी सीबीटी-2 एवं आरआरबी जेई एसएंडटी तकनीकी परीक्षा हेतु अत्यंत महत्वपूर्ण।',
    },
    source: 'Ministry of Railways Press Release (PIB)',
  },
  {
    id: 'ca-2026-02',
    date: '2026-01-25',
    category: 'Science & Tech',
    headline: {
      en: 'ISRO Successfully Launches NVS-02 Navigation Satellite with Indigenous Atomic Clock',
      hi: 'इसरो ने स्वदेशी परमाणु घड़ी से युक्त NVS-02 नेविगेशन उपग्रह का सफल प्रक्षेपण किया',
    },
    summary: {
      en: 'ISRO launched the second-generation NavIC satellite equipped with a space-grade Rubidium atomic clock developed by Space Applications Centre (SAC), Ahmedabad, boosting positioning accuracy for Indian transport systems including Railways.',
      hi: 'इसरो ने स्पेस एप्लीकेशन सेंटर (SAC) अहमदाबाद द्वारा विकसित रूबिडियम परमाणु घड़ी से युक्त दूसरी पीढ़ी का नाविक उपग्रह प्रक्षेपित किया, जिससे रेल सहित परिवहन प्रणालियों की नेविगेशन सटीकता बढ़ी।',
    },
    examRelevance: {
      en: 'Important for RRB NTPC and JE General Science & Technology section.',
      hi: 'आरआरबी एनटीपीसी एवं जेई सामान्य विज्ञान व प्रौद्योगिकी खंड हेतु महत्वपूर्ण।',
    },
    source: 'ISRO Official Bulletin',
  },
  {
    id: 'ca-2026-03',
    date: '2026-01-15',
    category: 'National',
    headline: {
      en: 'Cabinet Approves PM-Surya Ghar: Muft Bijli Yojana for 1 Crore Households',
      hi: 'केंद्रीय मंत्रिमंडल ने 1 करोड़ परिवारों हेतु पीएम-सूर्य घर: मुफ्त बिजली योजना को मंजूरी दी',
    },
    summary: {
      en: 'The landmark scheme provides ₹75,000 crore investment to provide up to 300 units of free solar electricity monthly to households, integrating rooftop solar setups with grid infrastructure.',
      hi: 'इस योजना के तहत ₹75,000 करोड़ के परिव्यय से 1 करोड़ घरों को प्रति माह 300 यूनिट तक मुफ्त सौर बिजली प्रदान करने हेतु रूफटॉप सोलर ग्रिड स्थापित किए जा रहे हैं।',
    },
    examRelevance: {
      en: 'Frequently asked in Government Schemes portion of Railway exams.',
      hi: 'सरकारी योजनाओं वाले भाग में रेलवे परीक्षाओं में नियमित पूछा जाने वाला प्रश्न।',
    },
    source: 'PIB Delhi',
  },
  {
    id: 'ca-2025-04',
    date: '2025-12-28',
    category: 'Railways',
    headline: {
      en: 'Western Dedicated Freight Corridor (WDFC) 100% Electrification Completed',
      hi: 'पश्चिमी समर्पित माल गलियारे (WDFC) का 100% विद्युतीकरण पूर्ण',
    },
    summary: {
      en: 'DFCCIL announced complete electrical energization of the 1,506 km Dadri (UP) to Jawaharlal Nehru Port (JNPT, Navi Mumbai) corridor, enabling 25-tonne axle load double-stack container trains.',
      hi: 'डीएफसीसीआईएल ने दादरी से जेएनपीटी (1,506 किमी) के पूरे पश्चिमी गलियारे के विद्युतीकरण की घोषणा की, जिससे 25 टन एक्सल लोड वाली डबल-स्टैक कंटेनर ट्रेनें चल सकेंगी।',
    },
    examRelevance: {
      en: 'Key Railway GK & Infrastructure topic for NTPC Graduate & JE.',
      hi: 'एनटीपीसी स्नातक एवं जेई हेतु मुख्य रेलवे सामान्य ज्ञान व अवसंरचना का विषय।',
    },
    source: 'DFCCIL Official Annual Review',
  },
  {
    id: 'ca-2025-05',
    date: '2025-11-14',
    category: 'Sports',
    headline: {
      en: 'National Games 2025: Indian Railways Sports Promotion Board (RSPB) Tops Medal Tally',
      hi: 'राष्ट्रीय खेल 2025: रेलवे खेल संवर्धन बोर्ड (RSPB) पदक तालिका में शीर्ष पर',
    },
    summary: {
      en: 'Railway athletes secured over 70 gold medals across track & field, wrestling, weightlifting, and archery, maintaining Indian Railways leadership in national sports development.',
      hi: 'रेलवे के एथलीटों ने ट्रैक एवं फील्ड, कुश्ती, भारोत्तोलन और तीरंदाजी में 70 से अधिक स्वर्ण पदक जीतकर राष्ट्रीय खेल विकास में अपना दबदबा बनाए रखा।',
    },
    examRelevance: {
      en: 'Sports & Awards section of all Railway recruitment tests.',
      hi: 'सभी रेलवे भर्ती परीक्षाओं का खेल एवं पुरस्कार खंड।',
    },
    source: 'Railway Sports Promotion Board',
  },
];
