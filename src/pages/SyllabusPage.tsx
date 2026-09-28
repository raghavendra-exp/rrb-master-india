import React, { useState } from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumb } from '../components/layout/Breadcrumb';

interface SubjectSyllabus {
  id: string;
  name: string;
  hindiName: string;
  topics: { name: string; hindiName: string }[];
  weightageNTPC: string;
  weightageGroupD: string;
  weightageJE: string;
}

const SYLLABUS_DATA: SubjectSyllabus[] = [
  {
    id: 'math',
    name: 'Mathematics',
    hindiName: 'गणित (अंकगणित, बीजगणित, रेखागणित)',
    topics: [
      { name: 'Number System & BODMAS', hindiName: 'संख्या पद्धति एवं बॉडमास' },
      { name: 'Decimals & Fractions', hindiName: 'दशमलव एवं भिन्न' },
      { name: 'LCM and HCF', hindiName: 'लघुत्तम समापवर्त्य एवं महत्तम समापवर्तक' },
      { name: 'Ratio and Proportion', hindiName: 'अनुपात एवं समानुपात' },
      { name: 'Percentages', hindiName: 'प्रतिशतता' },
      { name: 'Mensuration (2D & 3D)', hindiName: 'क्षेत्रमिति (2D एवं 3D)' },
      { name: 'Time and Work, Pipes & Cistern', hindiName: 'समय और कार्य, नल और टंकी' },
      { name: 'Time, Speed and Distance (Trains)', hindiName: 'समय, चाल और दूरी (रेलगाड़ी संबंधी)' },
      { name: 'Simple & Compound Interest', hindiName: 'साधारण एवं चक्रवृद्धि ब्याज' },
      { name: 'Profit and Loss', hindiName: 'लाभ और हानि' },
      { name: 'Elementary Algebra', hindiName: 'प्रारंभिक बीजगणित' },
      { name: 'Geometry and Trigonometry', hindiName: 'ज्यामिति एवं त्रिकोणमिति' },
      { name: 'Elementary Statistics (Mean, Median, Mode)', hindiName: 'सांख्यिकी (माध्य, माध्यिका, बहुलक)' },
      { name: 'Calendar and Clock', hindiName: 'कैलेंडर एवं घड़ी' },
    ],
    weightageNTPC: '30 Qs in CBT-1, 35 Qs in CBT-2',
    weightageGroupD: '25 Questions in CBT',
    weightageJE: '30 Qs in CBT-1',
  },
  {
    id: 'reasoning',
    name: 'General Intelligence & Reasoning',
    hindiName: 'सामान्य बुद्धिमत्ता एवं तर्कशक्ति',
    topics: [
      { name: 'Analogies (Word & Number)', hindiName: 'सादृश्यता (शब्द एवं संख्या)' },
      { name: 'Alphabetical and Number Series', hindiName: 'वर्णमाला एवं संख्या श्रृंखला' },
      { name: 'Coding and Decoding', hindiName: 'कोडिंग और डिकोडिंग' },
      { name: 'Mathematical Operations', hindiName: 'गणितीय संक्रियाएं' },
      { name: 'Relationships (Blood Relations)', hindiName: 'रक्त संबंध' },
      { name: 'Syllogism & Deductions', hindiName: 'न्याय निगमन' },
      { name: 'Jumbling & Venn Diagrams', hindiName: 'क्रम व्यवस्था एवं वेन आरेख' },
      { name: 'Data Interpretation & Sufficiency', hindiName: 'आंकड़ा व्याख्या एवं पर्याप्तता' },
      { name: 'Conclusions and Decision Making', hindiName: 'निष्कर्ष एवं निर्णय क्षमता' },
      { name: 'Analytical Reasoning & Seating Arrangements', hindiName: 'विश्लेषणात्मक तर्कशक्ति एवं बैठक व्यवस्था' },
      { name: 'Direction Sense & Classification', hindiName: 'दिशा ज्ञान एवं वर्गीकरण' },
      { name: 'Statement - Arguments and Assumptions', hindiName: 'कथन - तर्क एवं पूर्वधारणाएं' },
    ],
    weightageNTPC: '30 Qs in CBT-1, 35 Qs in CBT-2',
    weightageGroupD: '30 Questions in CBT',
    weightageJE: '25 Qs in CBT-1',
  },
  {
    id: 'science',
    name: 'General Science (10th Standard NCERT)',
    hindiName: 'सामान्य विज्ञान (10वीं सीबीएसई/एनसीईआरटी स्तर)',
    topics: [
      { name: 'Physics: Motion, Work, Energy & Power', hindiName: 'भौतिकी: गति, कार्य, ऊर्जा एवं शक्ति' },
      { name: 'Physics: Gravitation & Fluid Pressure', hindiName: 'भौतिकी: गुरुत्वाकर्षण एवं द्रव दाब' },
      { name: 'Physics: Light - Reflection and Refraction', hindiName: 'भौतिकी: प्रकाश - परावर्तन एवं अपवर्तन' },
      { name: 'Physics: Electricity & Magnetic Effects', hindiName: 'भौतिकी: विद्युत एवं चुंबकीय प्रभाव' },
      { name: 'Chemistry: Chemical Reactions & Equations', hindiName: 'रसायन: रासायनिक अभिक्रियाएं एवं समीकरण' },
      { name: 'Chemistry: Acids, Bases and Salts', hindiName: 'रसायन: अम्ल, क्षारक एवं लवण' },
      { name: 'Chemistry: Metals and Non-Metals', hindiName: 'रसायन: धातु एवं अधातु' },
      { name: 'Chemistry: Periodic Classification of Elements', hindiName: 'रसायन: तत्वों का आवर्ती वर्गीकरण' },
      { name: 'Chemistry: Carbon and its Compounds', hindiName: 'रसायन: कार्बन एवं उसके यौगिक' },
      { name: 'Biology: Life Processes (Nutrition, Respiration)', hindiName: 'जीव विज्ञान: जैव प्रक्रम (पोषण, श्वसन)' },
      { name: 'Biology: Control and Coordination (Hormones)', hindiName: 'जीव विज्ञान: नियंत्रण एवं समन्वय (हार्मोन)' },
      { name: 'Biology: Reproduction and Heredity', hindiName: 'जीव विज्ञान: प्रजनन एवं आनुवंशिकी' },
      { name: 'Biology: Environment & Ecology', hindiName: 'जीव विज्ञान: हमारा पर्यावरण एवं पारिस्थितिकी' },
    ],
    weightageNTPC: 'Integrated in General Awareness (10-12 Qs)',
    weightageGroupD: '25 Questions in CBT (Highest Science Weightage)',
    weightageJE: '30 Qs in CBT-1 + 15 Qs in CBT-2',
  },
  {
    id: 'awareness',
    name: 'General Awareness & Current Affairs',
    hindiName: 'सामान्य जागरूकता एवं समसामयिकी',
    topics: [
      { name: 'Current Events of National and International Importance', hindiName: 'राष्ट्रीय एवं अंतर्राष्ट्रीय समसामयिक घटनाएं' },
      { name: 'Indian History and Freedom Struggle (1857-1947)', hindiName: 'भारतीय इतिहास एवं स्वतंत्रता संग्राम' },
      { name: 'Physical, Social and Economic Geography of India & World', hindiName: 'भारत एवं विश्व का भूगोल' },
      { name: 'Indian Polity and Constitution (Articles, Amendments)', hindiName: 'भारतीय राजव्यवस्था एवं संविधान' },
      { name: 'Indian Economy & Five Year Plans', hindiName: 'भारतीय अर्थव्यवस्था' },
      { name: 'Transport Systems in India (Indian Railways Focus)', hindiName: 'भारत की परिवहन प्रणालियां (रेलवे विशेष)' },
      { name: 'Environmental Issues & Climate Summits', hindiName: 'पर्यावरणीय मुद्दे एवं जलवायु शिखर सम्मेलन' },
      { name: 'Basics of Computers and Computer Applications', hindiName: 'कंप्यूटर एवं सूचना प्रौद्योगिकी के मूल तत्व' },
      { name: 'Government Flagship Welfare Schemes', hindiName: 'सरकारी प्रमुख योजनाएं' },
      { name: 'Famous Personalities, Sports, Awards & Honors', hindiName: 'प्रसिद्ध व्यक्तित्व, खेल एवं पुरस्कार' },
    ],
    weightageNTPC: '40 Qs in CBT-1, 50 Qs in CBT-2 (Dominant Section)',
    weightageGroupD: '20 Questions in CBT',
    weightageJE: '15 Qs in CBT-1 + 15 Qs in CBT-2',
  },
];

export const SyllabusPage: React.FC<{ onNavigate: (tab: string) => void }> = ({ onNavigate }) => {
  const { language } = useLanguage();
  const [selectedSubject, setSelectedSubject] = useState<string>('math');

  const activeSubject = SYLLABUS_DATA.find((s) => s.id === selectedSubject) || SYLLABUS_DATA[0];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <Breadcrumb
        items={[
          { label: language === 'hi' ? 'पाठ्यक्रम' : 'Syllabus' },
          { label: language === 'hi' ? 'आधिकारिक आरआरबी पाठ्यक्रम एवं परीक्षा पैटर्न' : 'Official RRB Syllabus & Pattern' },
        ]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white shadow-xl space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5" />
          Official Railway Board Curriculum
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          {language === 'hi' ? 'आरआरबी परीक्षा पाठ्यक्रम एवं विषयवार अंक वितरण' : 'RRB Examination Syllabus & Topic Weightage'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
          {language === 'hi'
            ? 'एनटीपीसी, ग्रुप डी और जेई के लिए आधिकारिक विषयों, अध्यायों और उप-विषयों का सटीक विवरण।'
            : 'Exact chapter-by-chapter official syllabus breakdown mapped across NTPC, Group D, and JE.'}
        </p>
      </div>

      {/* Subject Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
        {SYLLABUS_DATA.map((sub) => (
          <button
            key={sub.id}
            onClick={() => setSelectedSubject(sub.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 ${
              selectedSubject === sub.id
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
            }`}
          >
            {language === 'hi' ? sub.hindiName.split(' ')[0] : sub.name}
          </button>
        ))}
      </div>

      {/* Subject Details Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            {language === 'hi' ? activeSubject.hindiName : activeSubject.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3 text-xs">
            <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 font-semibold">
              <strong>NTPC:</strong> {activeSubject.weightageNTPC}
            </div>
            <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-semibold">
              <strong>Group D:</strong> {activeSubject.weightageGroupD}
            </div>
            <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-900 dark:text-purple-200 font-semibold">
              <strong>JE:</strong> {activeSubject.weightageJE}
            </div>
          </div>
        </div>

        {/* Topics Grid */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            {language === 'hi' ? 'आधिकारिक पाठ्यक्रम अध्याय एवं विषय' : 'Official Curriculum Chapters & Topics'}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {activeSubject.topics.map((tItem, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 text-xs flex items-center justify-between"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 font-bold flex items-center justify-center text-[10px] shrink-0">
                    {idx + 1}
                  </span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {language === 'hi' ? tItem.hindiName : tItem.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Action Link */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-end">
          <button
            onClick={() => onNavigate('questions')}
            className="py-2.5 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-colors shadow-sm"
          >
            <span>Practice {activeSubject.name} Questions</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
