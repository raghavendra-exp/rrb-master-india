import React, { useState } from 'react';
import { Award, HeartPulse, GraduationCap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { RRB_POSTS } from '../data/rrb/posts';

export const PostExplorerPage: React.FC<{ onNavigate: (tab: string) => void }> = ({ onNavigate }) => {
  const { t, language } = useLanguage();
  const [selectedExam, setSelectedExam] = useState<string>('ALL');

  const filteredPosts = RRB_POSTS.filter((p) => {
    if (selectedExam === 'ALL') return true;
    return p.examId === selectedExam;
  });

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Breadcrumb
        items={[
          { label: language === 'hi' ? 'भर्ती एवं पद' : 'Recruitments & Posts' },
          { label: language === 'hi' ? 'रेलवे पद एवं कार्य विवरण' : 'Railway Job & Post Explorer' },
        ]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 text-white shadow-xl space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
          <Award className="w-3.5 h-3.5" />
          7th CPC Pay Matrix & Job Descriptions
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          {language === 'hi' ? 'रेलवे पद, वेतन स्तर एवं कार्य प्रोफाइल एक्सप्लोरर' : 'Railway Post, Pay Level & Job Profile Explorer'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
          {language === 'hi'
            ? 'स्टेशन मास्टर, गुड्स ट्रेन मैनेजर, ट्रैक मेंटेनर और जूनियर इंजीनियर तक सभी पदों के कार्य, पदोन्नति की संभावनाएं और मेडिकल मानक देखें।'
            : 'Explore complete post details, 7th CPC initial pay, departments, visual medical categories, and career progression ladders without arbitrary rankings.'}
        </p>
      </div>

      {/* Exam Filter Buttons */}
      <div className="flex gap-2 p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm overflow-x-auto scrollbar-none">
        <button
          onClick={() => setSelectedExam('ALL')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 ${
            selectedExam === 'ALL' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          {language === 'hi' ? 'सभी पद (All Posts)' : 'All Posts'}
        </button>
        <button
          onClick={() => setSelectedExam('rrb-ntpc')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 ${
            selectedExam === 'rrb-ntpc' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          RRB NTPC (Level 2, 3, 5, 6)
        </button>
        <button
          onClick={() => setSelectedExam('rrb-group-d')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 ${
            selectedExam === 'rrb-group-d' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          RRB Group D (Level 1)
        </button>
        <button
          onClick={() => setSelectedExam('rrb-je')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 ${
            selectedExam === 'rrb-je' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          RRB JE (Technical Level 6)
        </button>
      </div>

      {/* Posts Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                  {post.payLevel} • Initial Basic {post.initialPay}
                </span>
                <span className="text-[11px] font-semibold text-slate-400">
                  {post.level} Cadre
                </span>
              </div>

              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white">
                  {t(post.postName)}
                </h3>
                <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                  Dept: {t(post.department)}
                </p>
              </div>

              {/* Qualification & Age */}
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-xs space-y-1.5 text-slate-700 dark:text-slate-300">
                <div className="flex items-start gap-1.5">
                  <GraduationCap className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Qualification:</strong> {t(post.qualification)}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                  <span>Age Limit: {post.ageLimit}</span>
                </div>
              </div>

              {/* Medical Standard & Skill */}
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 font-semibold">
                  <HeartPulse className="w-3.5 h-3.5" />
                  <span>Med: {post.medicalStandard.split(' ')[0]}</span>
                </span>

                {post.typingRequired && (
                  <span className="px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 font-bold text-[10px] uppercase">
                    Typing Test Required
                  </span>
                )}
                {post.cbatRequired && (
                  <span className="px-2 py-0.5 rounded-md bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-400 font-bold text-[10px] uppercase">
                    CBAT Psycho Required
                  </span>
                )}
              </div>

              {/* Job Duties */}
              <div className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                <p className="font-bold text-slate-800 dark:text-slate-100">Key Duties:</p>
                <p className="leading-relaxed text-[11px]">{t(post.jobDuties)}</p>
              </div>

              {/* Career Progression */}
              <div className="p-3 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40 text-[11px] text-blue-950 dark:text-blue-200">
                <strong className="block text-blue-800 dark:text-blue-300 mb-0.5">Career Progression Ladder:</strong>
                <span>{t(post.careerProgression)}</span>
              </div>
            </div>

            {/* Selection Stages */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Stages: </span>
              {post.selectionStages.join(' → ')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
