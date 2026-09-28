import React, { useState } from 'react';
import {
  PlayCircle,
  FileCheck,
  Layers,
  ExternalLink,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { EXAMS_DATA } from '../data/rrb/exams';
import { RRB_POSTS } from '../data/rrb/posts';
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
  const [activeTab, setActiveTab] = useState<'overview' | 'stages' | 'posts' | 'eligibility'>('overview');

  if (!exam) return null;

  const relevantPosts = RRB_POSTS.filter((p) => p.examId === examId);

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
            <span>Chapter Practice</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 gap-4 text-xs sm:text-sm font-bold">
        {(['overview', 'stages', 'posts', 'eligibility'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 px-1 border-b-2 transition-all capitalize ${
              activeTab === tab
                ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab: Overview */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Stage Engine Flow */}
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
                  <span className="text-slate-700 dark:text-slate-300 leading-relaxed">
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
    </div>
  );
};
