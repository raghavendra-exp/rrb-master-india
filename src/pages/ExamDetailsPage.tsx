import React, { useState } from 'react';
import {
  PlayCircle,
  FileCheck,
  Layers,
  ExternalLink,
  BookOpen,
  Table,
  Maximize2,
  X,
  ChevronRight,
  Award,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { EXAMS_DATA } from '../data/rrb/exams';
import { RRB_POSTS } from '../data/rrb/posts';
import {
  MASTER_SECTIONS_DATA,
  CROSS_TIER_PROFILE_MATRIX,
  type ExamSectionData,
} from '../data/rrb/masterTopics';
import type { ExamId } from '../types';

interface ExamDetailsPageProps {
  examId: ExamId;
  onNavigate: (tab: string, extraData?: unknown) => void;
  onStartMock: (examId: ExamId, stage: string) => void;
}

export const ExamDetailsPage: React.FC<ExamDetailsPageProps> = ({
  examId,
  onNavigate,
  onStartMock,
}) => {
  const { t, language } = useLanguage();
  const exam = EXAMS_DATA[examId];
  const [activeTab, setActiveTab] = useState<'overview' | 'stages' | 'curriculum' | 'posts' | 'eligibility' | 'matrix'>('overview');
  const [ntpcTier, setNtpcTier] = useState<'graduate' | 'undergraduate'>('graduate');
  const [selectedImageModal, setSelectedImageModal] = useState<string | null>(null);

  if (!exam) return null;

  const relevantPosts = RRB_POSTS.filter((p) => p.examId === examId);

  // Match master section
  let primaryMasterSection: ExamSectionData | undefined;
  if (examId === 'rrb-ntpc') {
    primaryMasterSection = MASTER_SECTIONS_DATA.find(
      (s) => s.sectionId === (ntpcTier === 'graduate' ? 'ntpc-graduate' : 'ntpc-undergrad')
    );
  } else if (examId === 'rrb-group-d') {
    primaryMasterSection = MASTER_SECTIONS_DATA.find((s) => s.sectionId === 'group-d');
  } else if (examId === 'rrb-je') {
    primaryMasterSection = MASTER_SECTIONS_DATA.find((s) => s.sectionId === 'rrb-je');
  }

  // Get matching infographic
  const examInfographic =
    examId === 'rrb-ntpc'
      ? {
          src: './assets/rrb_railway_operations.jpg',
          title: language === 'hi' ? 'भारतीय रेल संचालन, ट्रैक एवं कवच इन्फोग्राफिक' : 'Indian Railways Operations, Track & KAVACH Infographic',
          desc: language === 'hi' ? 'वंदे भारत, WAG-12 लोकोमोटिव, 1676 मिमी ब्रॉड गेज एवं कवच 4.0 प्रणाली' : 'Vande Bharat, WAG-12 Loco, 1676mm Broad Gauge & KAVACH 4.0 System',
        }
      : examId === 'rrb-group-d'
      ? {
          src: './assets/rrb_physics_optics_circuits.jpg',
          title: language === 'hi' ? 'ग्रुप डी उच्च वेटेज सामान्य विज्ञान (25 अंक) आरेख' : 'Group D High-Weightage General Science (25 Marks) Schematic',
          desc: language === 'hi' ? 'गोलीय दर्पण/लेंस किरण आरेख, ओम का नियम एवं 0-14 pH पैमाना' : 'Spherical Mirrors/Lenses Ray Tracing, Ohm’s Law & 0-14 pH Scale',
        }
      : {
          src: './assets/rrb_science_engineering_lab.jpg',
          title: language === 'hi' ? 'आरआरबी जेई इंजीनियरिंग एवं तकनीकी विज्ञान लैब' : 'RRB JE Technical Engineering & Applied Science Blueprint',
          desc: language === 'hi' ? 'सिविल, मैकेनिकल, इलेक्ट्रिकल एवं इलेक्ट्रॉनिक्स कोर अनुशासन' : 'Civil, Mechanical, Electrical, and Electronics Core Disciplines',
        };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Breadcrumb
        items={[
          { label: language === 'hi' ? 'आरआरबी परीक्षाएं' : 'RRB Exams' },
          { label: t(exam.title) },
        ]}
        onNavigate={onNavigate}
      />

      {/* Hero Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
            {exam.code}
          </span>
          <a
            href={exam.officialNotificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-blue-200 hover:text-white transition-colors bg-white/10 px-3 py-1 rounded-xl backdrop-blur-md"
          >
            <span>{language === 'hi' ? 'आधिकारिक अधिसूचना पोर्टल' : 'Official Notification Portal'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div>
          <h1 className="text-2xl sm:text-4xl font-black tracking-tight">{t(exam.title)}</h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl leading-relaxed">
            {t(exam.subtitle)}
          </p>
        </div>

        {/* NTPC Graduate vs Undergrad Tier Switcher */}
        {examId === 'rrb-ntpc' && (
          <div className="inline-flex p-1 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 gap-1 text-xs font-bold">
            <button
              onClick={() => setNtpcTier('graduate')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                ntpcTier === 'graduate' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-300 hover:text-white'
              }`}
            >
              🎓 {language === 'hi' ? 'ग्रेजुएट स्तर (लेवल 5 व 6 • 3,548 पद)' : 'Graduate Tier (Levels 5 & 6 • 3,548 Posts)'}
            </button>
            <button
              onClick={() => setNtpcTier('undergraduate')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                ntpcTier === 'undergraduate' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-300 hover:text-white'
              }`}
            >
              📜 {language === 'hi' ? 'अंडरग्रेजुएट स्तर (लेवल 2 व 3)' : 'Undergraduate Tier (Levels 2 & 3)'}
            </button>
          </div>
        )}

        {/* Quick Launch Actions */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={() => onStartMock(examId, exam.stages[0]?.id || 'CBT')}
            className="py-2.5 px-5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md transition-all cursor-pointer"
          >
            <PlayCircle className="w-4 h-4" />
            <span>Launch {exam.stages[0]?.name.en.split(' ')[0] || 'CBT'} Simulation Mock</span>
          </button>

          <button
            onClick={() => onNavigate('practice', { exam: examId })}
            className="py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold flex items-center gap-2 border border-white/20 transition-all cursor-pointer"
          >
            <FileCheck className="w-4 h-4" />
            <span>Chapter Practice (5,000+ PYQs)</span>
          </button>

          <button
            onClick={() => onNavigate('syllabus', { exam: examId })}
            className="py-2.5 px-4 rounded-xl bg-emerald-600/80 hover:bg-emerald-600 text-white text-xs sm:text-sm font-bold flex items-center gap-2 border border-emerald-400/30 transition-all cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>Master Syllabus Engine →</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 gap-2 sm:gap-4 text-xs sm:text-sm font-bold overflow-x-auto scrollbar-none">
        {(
          [
            { id: 'overview', label: language === 'hi' ? 'सिंहावलोकन' : 'Overview' },
            { id: 'stages', label: language === 'hi' ? 'परीक्षा चरण' : 'Exam Stages' },
            { id: 'curriculum', label: language === 'hi' ? 'पाठ्यक्रम मॉड्यूल' : 'Curriculum Modules' },
            { id: 'posts', label: language === 'hi' ? 'पद विवरण' : 'Posts & Pay' },
            { id: 'eligibility', label: language === 'hi' ? 'पात्रता मानक' : 'Eligibility' },
            { id: 'matrix', label: language === 'hi' ? 'क्रॉस-टियर तुलना' : 'Cross-Tier Matrix' },
          ] as const
        ).map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-3 px-2 border-b-2 transition-all whitespace-nowrap cursor-pointer ${
              activeTab === tab.id
                ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab: Overview */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Post Profile & Filters Core Card */}
          {primaryMasterSection && (
            <div className="bg-gradient-to-br from-blue-50/70 via-indigo-50/40 to-white dark:from-slate-900 dark:to-blue-950/40 p-6 rounded-3xl border border-blue-200 dark:border-blue-900/60 shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-blue-600 text-white font-bold text-xs">
                  Section {primaryMasterSection.sectionNumber}
                </span>
                <div>
                  <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                    {t(primaryMasterSection.title)}
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {t(primaryMasterSection.subtitle)}
                  </p>
                </div>
              </div>

              {/* Designations Grid */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 block">
                  {language === 'hi' ? 'अधिसूचित पद एवं पदनाम (Official Designations):' : 'Officially Notified Post Designations:'}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {primaryMasterSection.postProfiles.designations.map((desig, dIdx) => (
                    <div
                      key={dIdx}
                      className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2 shadow-2xs"
                    >
                      <Award className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{t(desig)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testing Engine & Evaluation Core */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1">
                  <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block">
                    {language === 'hi' ? 'परीक्षा इंजन (Testing Engine)' : 'Testing Engine Filter'}
                  </span>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    {t(primaryMasterSection.postProfiles.testingEngine)}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1">
                  <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider block">
                    {language === 'hi' ? 'मूल्यांकन कोर (Evaluation Core)' : 'Evaluation Core Focus'}
                  </span>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    {t(primaryMasterSection.postProfiles.evaluationCore)}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Visual Technical Infographic Banner */}
          <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row items-center gap-5">
            <div className="relative group cursor-pointer shrink-0" onClick={() => setSelectedImageModal(examInfographic.src)}>
              <img
                src={examInfographic.src}
                alt={examInfographic.title}
                className="w-full md:w-80 h-44 object-cover rounded-2xl border border-slate-200 dark:border-slate-700 group-hover:scale-102 transition-transform shadow-md"
              />
              <div className="absolute inset-0 bg-black/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-1.5 backdrop-blur-2xs">
                <Maximize2 className="w-4 h-4" />
                <span>{language === 'hi' ? 'बड़ा देखें' : 'Click to Zoom'}</span>
              </div>
            </div>
            <div className="space-y-2 text-xs">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold uppercase tracking-wider text-[10px]">
                {language === 'hi' ? 'तकनीकी इन्फोग्राफिक' : 'Technical Infographic'}
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {examInfographic.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {examInfographic.desc}
              </p>
              <button
                onClick={() => setSelectedImageModal(examInfographic.src)}
                className="text-blue-600 font-bold flex items-center gap-1 hover:underline pt-1 cursor-pointer"
              >
                <span>{language === 'hi' ? 'पूर्ण आकार में खोलें' : 'Open Full Blueprint'}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Selection Stage Engine Flow */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-600" />
              {language === 'hi' ? 'आधिकारिक भर्ती चरण प्रवाह (Selection Stage Engine)' : 'Official Selection Stage Engine'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {exam.selectionProcess.map((step, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 text-xs flex items-start gap-2.5"
                >
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                    {idx + 1}
                  </span>
                  <span className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    {t(step)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <span className="text-[11px] font-medium text-slate-400">Total Stages</span>
              <p className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                {exam.stages.length} Stages
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <span className="text-[11px] font-medium text-slate-400">Negative Marking</span>
              <p className="text-xl font-bold text-red-500 mt-1">1/3rd Mark</p>
            </div>
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <span className="text-[11px] font-medium text-slate-400">Available Posts</span>
              <p className="text-xl font-bold text-blue-600 mt-1">{relevantPosts.length} Posts</p>
            </div>
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <span className="text-[11px] font-medium text-slate-400">Application Fee</span>
              <p className="text-xl font-bold text-emerald-600 mt-1">₹500 / ₹250</p>
            </div>
          </div>
        </div>
      )}

      {/* Tab: Stages & Pattern */}
      {activeTab === 'stages' && (
        <div className="space-y-6">
          {exam.stages.map((stage) => (
            <div
              key={stage.id}
              className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {t(stage.name)}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {stage.questions > 0
                      ? `${stage.questions} Questions • ${stage.marks} Marks • ${stage.durationMinutes} Minutes Duration`
                      : 'Qualifying Test Stage'}
                  </p>
                </div>
                {stage.questions > 0 && (
                  <button
                    onClick={() => onStartMock(examId, stage.id)}
                    className="py-1.5 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                  >
                    <PlayCircle className="w-3.5 h-3.5" />
                    <span>Mock Test</span>
                  </button>
                )}
              </div>

              {stage.sections.length > 0 && (
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead className="text-[11px] uppercase bg-slate-50 dark:bg-slate-800/60 text-slate-500">
                      <tr>
                        <th className="py-2.5 px-3 rounded-l-lg">Subject / Section</th>
                        <th className="py-2.5 px-3">Questions</th>
                        <th className="py-2.5 px-3 rounded-r-lg">Marks</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {stage.sections.map((sec, sIdx) => (
                        <tr key={sIdx}>
                          <td className="py-2.5 px-3 font-semibold text-slate-800 dark:text-slate-200">
                            {t(sec.bilingualSubject)}
                          </td>
                          <td className="py-2.5 px-3">{sec.questions}</td>
                          <td className="py-2.5 px-3 font-bold text-blue-600">{sec.marks}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Tab: Curriculum Modules */}
      {activeTab === 'curriculum' && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                {language === 'hi' ? 'आधिकारिक पाठ्यक्रम मॉड्यूल ब्रेकडाउन' : 'Official Curriculum Modules Breakdown'}
              </h3>
              <p className="text-xs text-slate-500">
                {language === 'hi' ? 'सभी उप-विषय, आधिकारिक सूत्र एवं परीक्षा वेटेज' : 'Comprehensive topics, official formulas and CBT weightage'}
              </p>
            </div>
            <button
              onClick={() => onNavigate('syllabus', { exam: examId })}
              className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold flex items-center gap-1.5 hover:bg-blue-500 cursor-pointer"
            >
              <span>{language === 'hi' ? 'संपूर्ण मास्टर सिलेबस पेज खोलें' : 'Open Full Master Syllabus'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {primaryMasterSection?.modules.map((mod) => (
            <div
              key={mod.id}
              className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {t(mod.title)}
                  </h4>
                  <p className="text-xs text-slate-500">{t(mod.subtitle)}</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-bold border border-blue-200 dark:border-blue-900">
                  CBT-1: {mod.weightage.cbt1} {mod.weightage.cbt2 ? `• CBT-2: ${mod.weightage.cbt2}` : ''}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {mod.subTopics.map((sub) => (
                  <div
                    key={sub.id}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 space-y-2 text-xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900 dark:text-white">
                        {t(sub.title)}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-bold">
                        {t(sub.examRelevance)}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {t(sub.summary)}
                    </p>
                    {sub.formulas && sub.formulas.length > 0 && (
                      <div className="p-2 rounded-lg bg-blue-100/50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 font-mono text-[11px] text-blue-900 dark:text-blue-200">
                        {sub.formulas[0]}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab: Posts */}
      {activeTab === 'posts' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {relevantPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                  {post.payLevel} • {post.initialPay}
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  Med: {post.medicalStandard.split(' ')[0]}
                </span>
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                {t(post.postName)}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                {t(post.jobDuties)}
              </p>
              <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-between">
                <span>Dept: {t(post.department)}</span>
                <button
                  onClick={() => onNavigate('posts')}
                  className="text-blue-600 font-bold hover:underline cursor-pointer"
                >
                  Full Profile →
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab: Eligibility */}
      {activeTab === 'eligibility' && (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Official Eligibility Requirements ({exam.code})
          </h3>
          <div className="space-y-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <span className="font-bold text-slate-800 dark:text-slate-200 block mb-1">Age Limit:</span>
              <p>{exam.eligibility.ageRange}</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 space-y-2">
              <span className="font-bold text-slate-800 dark:text-slate-200 block">Educational Qualifications:</span>
              {exam.eligibility.qualifications.map((q, qIdx) => (
                <p key={qIdx}>• {t(q)}</p>
              ))}
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <span className="font-bold text-slate-800 dark:text-slate-200 block mb-1">Fee Structure & Refund:</span>
              <p>General/OBC: {exam.eligibility.feeGeneral}</p>
              <p className="mt-1">Reserved Categories / Females: {exam.eligibility.feeReserved}</p>
            </div>
          </div>
        </div>
      )}

      {/* Tab: Cross-Tier Profile Matrix */}
      {activeTab === 'matrix' && (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <Table className="w-5 h-5 text-blue-600" />
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {language === 'hi'
                  ? 'खंड 5: रेलवे भर्ती परीक्षा क्रॉस-टियर तुलना मैट्रिक्स'
                  : 'SECTION 5: Railway Examinations Cross-Tier Profile Matrix'}
              </h3>
              <p className="text-xs text-slate-500">
                {language === 'hi'
                  ? 'चारों प्रमुख रेलवे श्रेणियों (एनटीपीसी ग्रेजुएट, 12वीं, ग्रुप डी, जेई) का 7-पैरामीटर आधिकारिक तुलनात्मक विश्लेषण'
                  : '7-parameter definitive structural comparison across all four railway recruitment tiers'}
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold uppercase text-[11px]">
                  <th className="p-3 border border-slate-200 dark:border-slate-700">Parameter</th>
                  <th className="p-3 border border-slate-200 dark:border-slate-700 text-blue-700 dark:text-blue-300">NTPC Graduate</th>
                  <th className="p-3 border border-slate-200 dark:border-slate-700 text-indigo-700 dark:text-indigo-300">NTPC Undergrad</th>
                  <th className="p-3 border border-slate-200 dark:border-slate-700 text-purple-700 dark:text-purple-300">Group D (Level-1)</th>
                  <th className="p-3 border border-slate-200 dark:border-slate-700 text-amber-700 dark:text-amber-300">RRB JE (Technical)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {CROSS_TIER_PROFILE_MATRIX.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="p-3 font-bold text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900">
                      {t(row.parameter)}
                    </td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                      {t(row.ntpcGraduate)}
                    </td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                      {t(row.ntpcUndergraduate)}
                    </td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">
                      {t(row.groupD)}
                    </td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">
                      {t(row.rrbJE)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Image Modal */}
      {selectedImageModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImageModal(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 bg-slate-800 border-b border-slate-700 text-white">
              <span className="font-bold text-sm">
                {language === 'hi' ? 'आधिकारिक रेलवे तकनीकी आरेख' : 'Official Railway Technical Schematic'}
              </span>
              <button
                onClick={() => setSelectedImageModal(null)}
                className="p-1 rounded-lg hover:bg-slate-700 text-slate-300 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-2 overflow-auto max-h-[80vh]">
              <img
                src={selectedImageModal}
                alt="Enlarged schematic"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
