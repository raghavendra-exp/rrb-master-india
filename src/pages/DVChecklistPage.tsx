import React, { useState } from 'react';
import { ShieldCheck, CheckSquare, Square, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumb } from '../components/layout/Breadcrumb';

interface ChecklistItem {
  id: string;
  title: string;
  hindiTitle: string;
  description: string;
  categoryApplicability: string;
}

const DV_DOCUMENTS: ChecklistItem[] = [
  {
    id: 'doc-10th',
    title: 'Matriculation / High School Examination Certificate or Equivalent',
    hindiTitle: '10वीं (मैट्रिकुलेशन) प्रमाणपत्र एवं अंकपत्र (जन्म तिथि प्रमाण)',
    description: 'Proof for Date of Birth (DOB) and candidate father/mother name. Name must match exactly with online application.',
    categoryApplicability: 'Mandatory for All Candidates',
  },
  {
    id: 'doc-12th',
    title: '10+2 / Intermediate Certificate & Marksheets',
    hindiTitle: '12वीं (+2 चरण) अंकपत्र एवं प्रमाणपत्र',
    description: 'Mandatory for NTPC Undergraduate posts (Commercial cum Ticket Clerk, Junior Clerk cum Typist, Accounts Clerk).',
    categoryApplicability: 'NTPC Undergrad Posts',
  },
  {
    id: 'doc-grad',
    title: 'University Degree / Provisional Certificate & Marksheets',
    hindiTitle: 'विश्वविद्यालय स्नातक डिग्री अथवा प्रोविजनल प्रमाणपत्र',
    description: 'Mandatory for NTPC Graduate posts (Station Master, Goods Train Manager, Sr Commercial Clerk, Sr Clerk, JAA).',
    categoryApplicability: 'NTPC Graduate Posts',
  },
  {
    id: 'doc-diploma-degree',
    title: '3-Year Polytechnic Engineering Diploma or B.Tech Degree',
    hindiTitle: '3 वर्षीय इंजीनियरिंग डिप्लोमा अथवा बी.टेक डिग्री प्रमाणपत्र',
    description: 'Must be from a recognized university or AICTE-approved institution in relevant engineering branch for RRB JE.',
    categoryApplicability: 'RRB JE Technical Posts',
  },
  {
    id: 'doc-sc-st',
    title: 'SC / ST Community Certificate (Annexure-I Format)',
    hindiTitle: 'अनुसूचित जाति / जनजाति (SC/ST) जाति प्रमाणपत्र (Annexure-I)',
    description: 'Issued by competent authorities (DM/SDM/Tehsildar) in the exact format prescribed in official CEN notification.',
    categoryApplicability: 'SC / ST Candidates',
  },
  {
    id: 'doc-obc',
    title: 'OBC-NCL Certificate & Self-Declaration (Annexure-II & IIA)',
    hindiTitle: 'अन्य पिछड़ा वर्ग (OBC-NCL) नॉन-क्रीमी लेयर प्रमाणपत्र',
    description: 'Must NOT be older than 1 financial year from DV date. Mandatorily certifies that candidate does not belong to Creamy Layer.',
    categoryApplicability: 'OBC-NCL Candidates',
  },
  {
    id: 'doc-ews',
    title: 'EWS Income & Asset Certificate (Annexure-III)',
    hindiTitle: 'आर्थिक रूप से कमजोर वर्ग (EWS) आय एवं संपत्ति प्रमाणपत्र',
    description: 'Valid for the relevant financial year as specified in the recruitment notification.',
    categoryApplicability: 'EWS Candidates',
  },
  {
    id: 'doc-esm',
    title: 'Discharge Book / Pension Payment Order & Annexure-VII',
    hindiTitle: 'भूतपूर्व सैनिक डिस्चार्ज बुक, पेंशन आदेश एवं अनापत्ति प्रमाणपत्र',
    description: 'For Ex-Servicemen. Serving defence personnel must produce NOC and undertaking in Annexure-VII format.',
    categoryApplicability: 'Ex-Servicemen (ESM)',
  },
  {
    id: 'doc-aadhaar',
    title: 'Original Aadhaar Card & 6 Recent Color Passport Photographs',
    hindiTitle: 'मूल आधार कार्ड एवं 6 पासपोर्ट आकार के नवीनतम रंगीन फोटो',
    description: 'Original Aadhaar card used during online biometric registration along with identical passport photos.',
    categoryApplicability: 'Mandatory for All Candidates',
  },
];

export const DVChecklistPage: React.FC<{ onNavigate: (tab: string) => void }> = ({ onNavigate }) => {
  const { language } = useLanguage();
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});
  const [activeTab, setActiveTab] = useState<'checklist' | 'esm'>('checklist');

  const toggleCheck = (id: string) => {
    setCheckedDocs((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = Object.values(checkedDocs).filter(Boolean).length;

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <Breadcrumb
        items={[
          { label: language === 'hi' ? 'सत्यापन एवं आरक्षण' : 'Verification & Rules' },
          { label: language === 'hi' ? 'दस्तावेज़ सत्यापन एवं ESM' : 'DV Checklist & ESM Portal' },
        ]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white shadow-xl space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5" />
          Official Railway Document Verification Protocol
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          {language === 'hi' ? 'दस्तावेज़ सत्यापन (DV) चेकलिस्ट एवं ESM पोर्टल' : 'Document Verification Checklist & ESM Information'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
          {language === 'hi'
            ? 'आरआरबी दस्तावेज़ सत्यापन हेतु अनिवार्य मूल प्रमाण पत्रों की इंटरैक्टिव चेकलिस्ट और भूतपूर्व सैनिक (ESM) नियम।'
            : 'Interactive checklist for original certificates and comprehensive Ex-Servicemen reservation provisions.'}
        </p>
      </div>

      {/* Tab Selector */}
      <div className="flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800 w-fit">
        <button
          onClick={() => setActiveTab('checklist')}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
            activeTab === 'checklist' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          DV Document Checklist ({completedCount}/{DV_DOCUMENTS.length})
        </button>
        <button
          onClick={() => setActiveTab('esm')}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
            activeTab === 'esm' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          Ex-Servicemen (ESM) Portal
        </button>
      </div>

      {activeTab === 'checklist' ? (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
              {language === 'hi' ? 'मूल प्रमाणपत्र सत्यापन सूची' : 'Original Documents to Bring on DV Day'}
            </h2>
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
              Bring 2 sets of self-attested photocopies
            </span>
          </div>

          <div className="space-y-3">
            {DV_DOCUMENTS.map((doc) => {
              const isChecked = !!checkedDocs[doc.id];
              return (
                <div
                  key={doc.id}
                  onClick={() => toggleCheck(doc.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                    isChecked
                      ? 'border-emerald-500 bg-emerald-50/40 dark:bg-emerald-950/20'
                      : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                  }`}
                >
                  <div className="mt-0.5 shrink-0 text-emerald-600">
                    {isChecked ? <CheckSquare className="w-5 h-5" /> : <Square className="w-5 h-5 text-slate-400" />}
                  </div>

                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                        {language === 'hi' ? doc.hindiTitle : doc.title}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.2 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">
                        {doc.categoryApplicability}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {doc.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* ESM Module */
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
          <div className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500" />
              <span>Ex-Servicemen (ESM) Comprehensive Guidelines</span>
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              Rules and reservation benefits applicable to Ex-Servicemen under Railway recruitment boards.
              Note: Benefits differ between NTPC, Group D, and JE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white">1. Horizontal Reservation Quotas</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                • <strong>Group D (Level-1):</strong> 20% horizontal reservation in total vacancies.<br />
                • <strong>RRB NTPC:</strong> 10% horizontal reservation in Level 2, 3, 5, and 6 posts.<br />
                • <strong>RRB JE:</strong> ESM quota applies strictly as notified in CEN 03/2024.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white">2. Age Relaxation Scheme</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Length of military service rendered plus 3 years from the prescribed upper age limit (plus further
                relaxation for SC/ST/OBC ESM candidates).
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white">3. PET Exemption in Group D</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Ex-Servicemen candidates are exempted from the Physical Efficiency Test (PET) in Level-1 posts, subject to
                satisfying the specified medical categories.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white">4. Educational Equivalence</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Army Special Certificate of Education or corresponding Naval/Air Force certificate awarded after 15 years
                of military service is recognized as equivalent to Graduation for clerical posts.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
