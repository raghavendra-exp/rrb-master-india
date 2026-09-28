import React, { useState } from 'react';
import { Calendar, CheckCircle2, Circle, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { ZERO_TO_RRB_ROADMAP } from '../data/rrb/studyPlan';
import { getRoadmapProgress, toggleRoadmapLevel } from '../utils/storage';

export const StudyPlannerPage: React.FC<{ onNavigate: (tab: string) => void }> = ({ onNavigate }) => {
  const { t, language } = useLanguage();

  const [completedLevels, setCompletedLevels] = useState<number[]>(getRoadmapProgress());
  const [targetExam, setTargetExam] = useState<string>('rrb-ntpc');
  const [dailyHours, setDailyHours] = useState<number>(6);
  const [daysRemaining, setDaysRemaining] = useState<number>(90);

  const handleToggle = (levelNum: number) => {
    const updated = toggleRoadmapLevel(levelNum);
    setCompletedLevels(updated);
  };

  const progressPercentage = Math.round((completedLevels.length / ZERO_TO_RRB_ROADMAP.length) * 100);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <Breadcrumb
        items={[
          { label: language === 'hi' ? 'रणनीति एवं योजना' : 'Strategy & Planning' },
          { label: language === 'hi' ? 'अध्ययन योजनाकार एवं 10-स्तरीय रोडमैप' : 'Study Planner & 10-Level Roadmap' },
        ]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white shadow-xl space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
          <Calendar className="w-3.5 h-3.5" />
          Zero-to-RRB Milestone Architecture
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          {language === 'hi' ? 'शून्य से आरआरबी चयन: 10-स्तरीय रोडमैप' : 'Zero-to-RRB Selection: 10-Level Strategic Roadmap'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
          {language === 'hi'
            ? 'परीक्षा के चयन से लेकर अंतिम नियुक्ति तक के 10 वैज्ञानिक चरण। अपनी प्रगति को ट्रैक करें और दैनिक अध्ययन योजना बनाएं।'
            : 'Track your milestones from basic foundation to final medical appointment with personalized daily time allocation.'}
        </p>
      </div>

      {/* Overall Roadmap Progress Bar */}
      <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
        <div className="flex items-center justify-between text-xs font-bold">
          <span className="text-slate-800 dark:text-slate-200">
            Roadmap Completion: {completedLevels.length} of {ZERO_TO_RRB_ROADMAP.length} Levels
          </span>
          <span className="text-blue-600 dark:text-blue-400 font-mono text-sm">{progressPercentage}%</span>
        </div>
        <div className="w-full h-3 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-emerald-500 transition-all duration-500 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Dynamic Schedule Calculator */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
        <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Clock className="w-4 h-4 text-blue-600" />
          <span>Dynamic Daily Study Allocation Generator</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div>
            <label className="block text-slate-500 font-medium mb-1">Target Examination</label>
            <select
              value={targetExam}
              onChange={(e) => setTargetExam(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
            >
              <option value="rrb-ntpc">RRB NTPC (CEN 05 & 06/2024)</option>
              <option value="rrb-group-d">RRB Group D (Level-1)</option>
              <option value="rrb-je">RRB JE (Technical CEN 03/2024)</option>
            </select>
          </div>

          <div>
            <label className="block text-slate-500 font-medium mb-1">Daily Study Hours: {dailyHours}h</label>
            <input
              type="range"
              min="2"
              max="12"
              value={dailyHours}
              onChange={(e) => setDailyHours(Number(e.target.value))}
              className="w-full accent-blue-600 mt-2"
            />
          </div>

          <div>
            <label className="block text-slate-500 font-medium mb-1">Estimated Days Remaining: {daysRemaining}d</label>
            <input
              type="range"
              min="15"
              max="180"
              value={daysRemaining}
              onChange={(e) => setDaysRemaining(Number(e.target.value))}
              className="w-full accent-blue-600 mt-2"
            />
          </div>
        </div>

        {/* Calculated Daily Allocation Breakdown */}
        <div className="p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/50 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
          <div className="p-2">
            <span className="text-slate-500 block">Mathematics</span>
            <span className="font-bold text-sm text-blue-700 dark:text-blue-300 mt-0.5 block">
              {(dailyHours * 0.3).toFixed(1)} Hours
            </span>
          </div>
          <div className="p-2">
            <span className="text-slate-500 block">Reasoning</span>
            <span className="font-bold text-sm text-indigo-700 dark:text-indigo-300 mt-0.5 block">
              {(dailyHours * 0.25).toFixed(1)} Hours
            </span>
          </div>
          <div className="p-2">
            <span className="text-slate-500 block">Science / Technical</span>
            <span className="font-bold text-sm text-purple-700 dark:text-purple-300 mt-0.5 block">
              {(dailyHours * 0.25).toFixed(1)} Hours
            </span>
          </div>
          <div className="p-2">
            <span className="text-slate-500 block">Mocks & Revision</span>
            <span className="font-bold text-sm text-emerald-700 dark:text-emerald-300 mt-0.5 block">
              {(dailyHours * 0.2).toFixed(1)} Hours
            </span>
          </div>
        </div>
      </div>

      {/* 10-Level Roadmap Cards List */}
      <div className="space-y-4">
        <h2 className="text-base font-bold text-slate-900 dark:text-white">
          {language === 'hi' ? '10-स्तरीय तैयारी रोडमैप' : 'The 10 Strategic Roadmap Levels'}
        </h2>

        {ZERO_TO_RRB_ROADMAP.map((item) => {
          const isDone = completedLevels.includes(item.levelNumber);
          return (
            <div
              key={item.levelNumber}
              className={`p-5 rounded-3xl border transition-all ${
                isDone
                  ? 'border-emerald-300 dark:border-emerald-800/80 bg-emerald-50/30 dark:bg-emerald-950/15'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono">
                      Level {item.levelNumber}
                    </span>
                    <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                      {t(item.title)}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {t(item.description)}
                  </p>

                  <div className="space-y-1 pt-2">
                    {item.actionItems.map((act, aIdx) => (
                      <div key={aIdx} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-1.5">
                        <span className="text-blue-600 mt-0.5 font-bold">•</span>
                        <span>{t(act)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.recommendedTools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Toggle Button */}
                <button
                  onClick={() => handleToggle(item.levelNumber)}
                  className={`p-2 rounded-xl transition-colors cursor-pointer shrink-0 ${
                    isDone
                      ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-600'
                      : 'border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {isDone ? <CheckCircle2 className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
