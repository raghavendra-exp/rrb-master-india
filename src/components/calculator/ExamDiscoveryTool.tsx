import React, { useState } from 'react';
import { Compass, CheckCircle2, AlertCircle, ArrowRight, BookOpen } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Breadcrumb } from '../layout/Breadcrumb';

export const ExamDiscoveryTool: React.FC<{ onNavigate: (tab: string) => void }> = ({ onNavigate }) => {
  const { language } = useLanguage();

  const [age, setAge] = useState<number>(24);
  const [category, setCategory] = useState<'UR' | 'OBC' | 'SC' | 'ST' | 'EWS'>('UR');
  const [has10th, setHas10th] = useState<boolean>(true);
  const [hasITI, setHasITI] = useState<boolean>(false);
  const [has12th, setHas12th] = useState<boolean>(true);
  const [twelfthPercentage, setTwelfthPercentage] = useState<number>(65);
  const [hasGraduation, setHasGraduation] = useState<boolean>(true);
  const [graduationDiscipline, setGraduationDiscipline] = useState<'arts_comm_sci' | 'engineering' | 'science_physics_chem'>('arts_comm_sci');
  const [hasDiploma, setHasDiploma] = useState<boolean>(false);
  const [canType, setCanType] = useState<boolean>(true);
  const [distantVision, setDistantVision] = useState<'6/6' | '6/9' | '6/12' | 'poor'>('6/9');
  const [hasColorBlindness, setHasColorBlindness] = useState<boolean>(false);

  // Evaluation logic
  const isEligibleNTPCUndergrad = has12th && (twelfthPercentage >= 50 || category === 'SC' || category === 'ST') && age >= 18 && age <= (category === 'SC' || category === 'ST' ? 38 : category === 'OBC' ? 36 : 33);
  const isEligibleNTPCGraduate = hasGraduation && age >= 18 && age <= (category === 'SC' || category === 'ST' ? 41 : category === 'OBC' ? 39 : 36);
  const isEligibleGroupD = (has10th || hasITI) && age >= 18 && age <= (category === 'SC' || category === 'ST' ? 41 : category === 'OBC' ? 39 : 36);
  const isTechnicalDegreeOrDiploma = hasDiploma || (hasGraduation && graduationDiscipline === 'engineering');
  const isEligibleJE = isTechnicalDegreeOrDiploma && age >= 18 && age <= (category === 'SC' || category === 'ST' ? 41 : category === 'OBC' ? 39 : 36);

  // Medical viability checks
  const canDoA2 = (distantVision === '6/6' || distantVision === '6/9') && !hasColorBlindness;
  const canDoA3 = (distantVision === '6/6' || distantVision === '6/9') && !hasColorBlindness;

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <Breadcrumb
        items={[
          { label: language === 'hi' ? 'रेलवे भर्ती' : 'Railways' },
          { label: language === 'hi' ? 'पात्रता खोजक' : 'Exam Discovery Tool' },
        ]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            {language === 'hi' ? 'आधिकारिक आरआरबी पात्रता विश्लेषक' : 'Official RRB Eligibility Engine'}
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {language === 'hi' ? 'मैं किस आरआरबी परीक्षा के लिए आवेदन कर सकता हूँ?' : 'Which RRB Exam Can I Apply For?'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            {language === 'hi'
              ? 'अपनी आयु, शैक्षणिक योग्यता, टाइपिंग कौशल और दृष्टि मानकों को दर्ज करें। सिस्टम वर्तमान आधिकारिक CEN अधिसूचना नियमों के आधार पर आपकी सटीक पात्रता का विश्लेषण करेगा।'
              : 'Enter your age, qualifications, typing skills, and eyesight parameters. Our engine dynamically evaluates your exact eligibility against current CEN notifications.'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Form Inputs */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
          <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-blue-600" />
            {language === 'hi' ? 'अपनी व्यक्तिगत एवं शैक्षणिक जानकारी भरें' : 'Enter Your Qualifications & Profile'}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Age */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                {language === 'hi' ? 'आपकी आयु (वर्ष)' : 'Your Age (Years)'}: <span className="text-blue-600 font-bold">{age}</span>
              </label>
              <input
                type="range"
                min="17"
                max="45"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full accent-blue-600"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                {language === 'hi' ? 'आरक्षण श्रेणी' : 'Reservation Category'}
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as unknown as typeof category)}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white outline-none focus:border-blue-500"
              >
                <option value="UR">UR (Unreserved / General)</option>
                <option value="OBC">OBC-NCL (Non-Creamy Layer - 3 Yrs Age Relaxation)</option>
                <option value="SC">SC (Scheduled Caste - 5 Yrs Age Relaxation)</option>
                <option value="ST">ST (Scheduled Tribe - 5 Yrs Age Relaxation)</option>
                <option value="EWS">EWS (Economically Weaker Section)</option>
              </select>
            </div>
          </div>

          {/* Education Checkboxes */}
          <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-800">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {language === 'hi' ? 'शैक्षणिक योग्यताएं' : 'Educational Qualifications'}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <label className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={has10th}
                  onChange={(e) => setHas10th(e.target.checked)}
                  className="rounded text-blue-600 focus:ring-0"
                />
                <span className="text-slate-800 dark:text-slate-200 font-medium">
                  {language === 'hi' ? '10वीं कक्षा उत्तीर्ण (Matriculation)' : '10th Class Pass (Matric)'}
                </span>
              </label>

              <label className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasITI}
                  onChange={(e) => setHasITI(e.target.checked)}
                  className="rounded text-blue-600 focus:ring-0"
                />
                <span className="text-slate-800 dark:text-slate-200 font-medium">
                  {language === 'hi' ? 'आईटीआई / एनएसी (NCVT/SCVT)' : 'ITI / NAC (Apprenticeship)'}
                </span>
              </label>

              <label className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={has12th}
                  onChange={(e) => setHas12th(e.target.checked)}
                  className="rounded text-blue-600 focus:ring-0"
                />
                <span className="text-slate-800 dark:text-slate-200 font-medium">
                  {language === 'hi' ? '12वीं (+2 चरण) उत्तीर्ण' : '12th (+2 Stage) Pass'}
                </span>
              </label>

              <label className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasGraduation}
                  onChange={(e) => setHasGraduation(e.target.checked)}
                  className="rounded text-blue-600 focus:ring-0"
                />
                <span className="text-slate-800 dark:text-slate-200 font-medium">
                  {language === 'hi' ? 'स्नातक उपाधि (Bachelor Degree)' : 'Bachelor Degree (Graduate)'}
                </span>
              </label>
            </div>

            {has12th && (
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 space-y-1">
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                  {language === 'hi' ? '12वीं में कुल प्रतिशत' : '12th Overall Percentage'}: {twelfthPercentage}%
                </label>
                <input
                  type="range"
                  min="35"
                  max="100"
                  value={twelfthPercentage}
                  onChange={(e) => setTwelfthPercentage(Number(e.target.value))}
                  className="w-full accent-blue-600"
                />
                <p className="text-[11px] text-slate-400">
                  {language === 'hi' ? '*UR/OBC हेतु NTPC अंडरग्रेजुएट में 50% अनिवार्य है।' : '*50% minimum required for UR/OBC in NTPC Undergraduate.'}
                </p>
              </div>
            )}

            {hasGraduation && (
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 space-y-1">
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                  {language === 'hi' ? 'स्नातक संकाय (डिग्री स्ट्रीम)' : 'Graduation Stream'}
                </label>
                <select
                  value={graduationDiscipline}
                  onChange={(e) => setGraduationDiscipline(e.target.value as typeof graduationDiscipline)}
                  className="w-full text-xs p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                >
                  <option value="arts_comm_sci">Arts / Commerce / General Science (B.A, B.Com, B.Sc)</option>
                  <option value="engineering">Engineering / Technology (B.E / B.Tech - Eligible for RRB JE)</option>
                  <option value="science_physics_chem">B.Sc with Physics / Chemistry</option>
                </select>
              </div>
            )}

            {/* Technical Qualifications */}
            <div className="pt-2">
              <label className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasDiploma}
                  onChange={(e) => setHasDiploma(e.target.checked)}
                  className="rounded text-blue-600 focus:ring-0"
                />
                <span className="text-slate-800 dark:text-slate-200 font-medium text-xs">
                  {language === 'hi' ? 'इंजीनियरिंग में 3 वर्षीय डिप्लोमा' : '3-Year Polytechnic Engineering Diploma'}
                </span>
              </label>
            </div>

            {/* Skills & Medical */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {language === 'hi' ? 'कंप्यूटर टाइपिंग कौशल' : 'Computer Typing Proficiency'}
                </label>
                <select
                  value={canType ? 'yes' : 'no'}
                  onChange={(e) => setCanType(e.target.value === 'yes')}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                >
                  <option value="yes">{language === 'hi' ? 'हाँ (30 WPM English / 25 WPM Hindi)' : 'Yes (30 WPM English / 25 WPM Hindi)'}</option>
                  <option value="no">{language === 'hi' ? 'नहीं / अभी टाइपिंग गति नहीं है' : 'No / Cannot Type fast yet'}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {language === 'hi' ? 'दूर दृष्टि मानक (Eyesight)' : 'Distant Eyesight'}
                </label>
                <select
                  value={distantVision}
                  onChange={(e) => setDistantVision(e.target.value as unknown as typeof distantVision)}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                >
                  <option value="6/6">6/6 (Sharp Vision)</option>
                  <option value="6/9">6/9 (Normal Railway Standard)</option>
                  <option value="6/12">6/12 (Mild Spectacles)</option>
                  <option value="poor">&gt; 6/18 or High Power Glasses</option>
                </select>
              </div>
            </div>

            <label className="flex items-center gap-2 p-2.5 rounded-xl border border-amber-200 dark:border-amber-900/50 bg-amber-50/50 dark:bg-amber-950/20 cursor-pointer">
              <input
                type="checkbox"
                checked={hasColorBlindness}
                onChange={(e) => setHasColorBlindness(e.target.checked)}
                className="rounded text-amber-600 focus:ring-0"
              />
              <span className="text-amber-900 dark:text-amber-300 text-xs font-medium">
                {language === 'hi' ? 'कलर ब्लाइंडनेस (वर्णांधता) की समस्या है' : 'Diagnosed with Color Blindness / Defective Color Vision'}
              </span>
            </label>
          </div>
        </div>

        {/* Output Recommendations */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              {language === 'hi' ? 'आपकी संभावित पात्रता रिपोर्ट' : 'Your Eligibility Evaluation'}
            </h2>

            <div className="space-y-3">
              {/* RRB NTPC Graduate */}
              <div
                className={`p-3.5 rounded-xl border transition-all ${
                  isEligibleNTPCGraduate
                    ? 'border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/20'
                    : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 opacity-75'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                    RRB NTPC Graduate (Level 5 & 6)
                  </span>
                  {isEligibleNTPCGraduate ? (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white">
                      ELIGIBLE
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-400 text-white">
                      NOT ELIGIBLE
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  CEN 05/2024 • Age limit: 18-36 (UR)
                </p>
                {isEligibleNTPCGraduate && (
                  <div className="mt-2 text-xs text-emerald-800 dark:text-emerald-300 space-y-1">
                    <p className="font-medium">
                      ✓ Eligible for: Goods Train Manager (Level 5), Senior Commercial Supervisor (Level 5)
                    </p>
                    {canDoA2 ? (
                      <p className="text-emerald-700 dark:text-emerald-400 font-semibold">
                        ✓ Station Master (Level 6) with CBAT Aptitude Test
                      </p>
                    ) : (
                      <p className="text-amber-700 dark:text-amber-400 text-[11px]">
                        ⚠ Station Master requires A-2 medical (no glasses, normal color vision).
                      </p>
                    )}
                    {canType && (
                      <p>✓ Senior Clerk & Junior Account Assistant (Typing Required)</p>
                    )}
                  </div>
                )}
              </div>

              {/* RRB NTPC Undergrad */}
              <div
                className={`p-3.5 rounded-xl border transition-all ${
                  isEligibleNTPCUndergrad
                    ? 'border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/20'
                    : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 opacity-75'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                    RRB NTPC Undergraduate (Level 2 & 3)
                  </span>
                  {isEligibleNTPCUndergrad ? (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white">
                      ELIGIBLE
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-400 text-white">
                      NOT ELIGIBLE
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  CEN 06/2024 • Age limit: 18-33 (UR)
                </p>
                {isEligibleNTPCUndergrad && (
                  <div className="mt-2 text-xs text-emerald-800 dark:text-emerald-300 space-y-1">
                    <p className="font-medium">✓ Commercial cum Ticket Clerk (Level 3 - No Typing needed)</p>
                    {canType && <p>✓ Junior Clerk cum Typist & Accounts Clerk (Level 2)</p>}
                  </div>
                )}
              </div>

              {/* RRB Group D */}
              <div
                className={`p-3.5 rounded-xl border transition-all ${
                  isEligibleGroupD
                    ? 'border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/20'
                    : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 opacity-75'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                    RRB Group D / Level-1
                  </span>
                  {isEligibleGroupD ? (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white">
                      ELIGIBLE
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-400 text-white">
                      NOT ELIGIBLE
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  CEN RRC 01/2019 / Level-1 • Age: 18-36 (Relaxed)
                </p>
                {isEligibleGroupD && (
                  <div className="mt-2 text-xs text-emerald-800 dark:text-emerald-300">
                    <p className="font-medium">
                      ✓ Eligible for: Track Maintainer Gr IV, Assistant Pointsman, Workshop Assistant
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                      *Note: Must clear Physical Efficiency Test (PET) 1000m run and weight carry test.
                    </p>
                  </div>
                )}
              </div>

              {/* RRB JE */}
              <div
                className={`p-3.5 rounded-xl border transition-all ${
                  isEligibleJE
                    ? 'border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/20'
                    : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 opacity-75'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                    RRB JE (Junior Engineer)
                  </span>
                  {isEligibleJE ? (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white">
                      ELIGIBLE
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-400 text-white">
                      NOT ELIGIBLE
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  CEN 03/2024 • Requires Engineering Diploma or B.Tech
                </p>
                {isEligibleJE && (
                  <div className="mt-2 text-xs text-emerald-800 dark:text-emerald-300">
                    <p className="font-medium">✓ Junior Engineer (Civil, Mechanical, Electrical, S&T)</p>
                    {canDoA3 ? (
                      <p className="text-[11px] text-emerald-600 dark:text-emerald-400">✓ A-3 Medical standard passed</p>
                    ) : (
                      <p className="text-[11px] text-amber-600 dark:text-amber-400">⚠ Glasses allowed up to 2D in A-3</p>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>
                {language === 'hi'
                  ? 'अस्वीकरण: यह केवल सांकेतिक मार्गदर्शन है। अंतिम पात्रता संबंधित भर्ती बोर्ड की आधिकारिक अधिसूचना एवं दस्तावेज़ सत्यापन के अधीन है।'
                  : 'Disclaimer: This analysis is purely indicative. Final eligibility remains subject to the official notification published by RRBs and physical document verification.'}
              </span>
            </div>

            <button
              onClick={() => onNavigate(isEligibleNTPCGraduate ? 'rrb-ntpc' : isEligibleGroupD ? 'rrb-group-d' : 'rrb-je')}
              className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors shadow-md"
            >
              <span>{language === 'hi' ? 'लक्षित परीक्षा का संपूर्ण पाठ्यक्रम देखें' : 'Explore Target Exam Hub'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
