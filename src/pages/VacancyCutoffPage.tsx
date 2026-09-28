import React, { useState } from 'react';
import { Award, Filter, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { VACANCIES_DATA } from '../data/rrb/vacancies';
import { CUTOFFS_DATA } from '../data/rrb/cutoffs';

export const VacancyCutoffPage: React.FC<{ onNavigate: (tab: string) => void }> = ({ onNavigate }) => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'vacancies' | 'cutoffs'>('vacancies');
  const [selectedExam, setSelectedExam] = useState<string>('ALL');

  const filteredVacancies = VACANCIES_DATA.filter((v) => {
    if (selectedExam === 'ALL') return true;
    return v.exam.toLowerCase().includes(selectedExam.toLowerCase());
  });

  const filteredCutoffs = CUTOFFS_DATA.filter((c) => {
    if (selectedExam === 'ALL') return true;
    return c.exam.toLowerCase().includes(selectedExam.toLowerCase());
  });

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Breadcrumb
        items={[
          { label: language === 'hi' ? 'भर्ती सांख्यिकी' : 'Recruitment Stats' },
          { label: language === 'hi' ? 'रिक्तियां एवं कट-ऑफ डेटाबेस' : 'Vacancies & Cutoff Database' },
        ]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 text-white shadow-xl space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
          <Award className="w-3.5 h-3.5" />
          Authentic Centralized Recruitment Statistics
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          {language === 'hi' ? 'आरआरबी रिक्ति ट्रैकर एवं ऐतिहासिक कट-ऑफ डेटाबेस' : 'RRB Vacancy Tracker & Historical Cutoff Database'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
          {language === 'hi'
            ? 'ज़ोनवार और श्रेणीवार (UR, OBC, SC, ST, EWS, ESM) विस्तृत रिक्ति तालिका और पूर्व परीक्षाओं के सामान्यीकृत कट-ऑफ अंक।'
            : 'Explore zone-wise, post-wise, and category-wise vacancies alongside historical normalized cutoff scores.'}
        </p>
      </div>

      {/* Tab Switcher & Exam Filter */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-slate-900 p-2 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800">
          <button
            onClick={() => setActiveTab('vacancies')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'vacancies' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Vacancy Tracker
          </button>
          <button
            onClick={() => setActiveTab('cutoffs')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'cutoffs' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Historical Cutoff Database
          </button>
        </div>

        {/* Exam Filter */}
        <div className="flex items-center gap-2">
          <Filter className="w-3.5 h-3.5 text-slate-400" />
          <select
            value={selectedExam}
            onChange={(e) => setSelectedExam(e.target.value)}
            className="text-xs p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200"
          >
            <option value="ALL">All Examinations</option>
            <option value="ntpc">RRB NTPC</option>
            <option value="group d">RRB Group D</option>
            <option value="je">RRB JE</option>
          </select>
        </div>
      </div>

      {/* Tab 1: Vacancies */}
      {activeTab === 'vacancies' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              Official Vacancies Distribution
            </h2>
            <span className="text-xs text-emerald-600 font-semibold">Verified from CEN Annexures</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left text-slate-700 dark:text-slate-300">
              <thead className="text-[11px] uppercase bg-slate-50 dark:bg-slate-800/60 text-slate-500 font-semibold">
                <tr>
                  <th className="py-3 px-3 rounded-l-xl">Exam & Board</th>
                  <th className="py-3 px-3">Post & Level</th>
                  <th className="py-3 px-3 text-center">UR</th>
                  <th className="py-3 px-3 text-center">OBC</th>
                  <th className="py-3 px-3 text-center">SC</th>
                  <th className="py-3 px-3 text-center">ST</th>
                  <th className="py-3 px-3 text-center">EWS</th>
                  <th className="py-3 px-3 text-center font-bold text-blue-600">Total</th>
                  <th className="py-3 px-3 text-center rounded-r-xl">ESM</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {filteredVacancies.map((v) => (
                  <tr key={v.id}>
                    <td className="py-3 px-3 font-semibold text-slate-900 dark:text-white">
                      <div>{v.exam}</div>
                      <div className="text-[11px] text-slate-400 font-normal">{v.rrbName}</div>
                    </td>
                    <td className="py-3 px-3">
                      <div>{v.postName}</div>
                      <div className="text-[10px] text-slate-400">{v.payLevel}</div>
                    </td>
                    <td className="py-3 px-3 text-center">{v.ur}</td>
                    <td className="py-3 px-3 text-center">{v.obc}</td>
                    <td className="py-3 px-3 text-center">{v.sc}</td>
                    <td className="py-3 px-3 text-center">{v.st}</td>
                    <td className="py-3 px-3 text-center">{v.ews}</td>
                    <td className="py-3 px-3 text-center font-black text-blue-600 dark:text-blue-400 text-sm">
                      {v.total}
                    </td>
                    <td className="py-3 px-3 text-center text-slate-500">{v.esm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 2: Cutoffs */}
      {activeTab === 'cutoffs' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 text-xs text-amber-900 dark:text-amber-300 flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>
              <strong>Crucial Transparency Notice:</strong> Cutoffs shown here are historical normalized scores published by
              RRB in past cycles. Historical cutoffs depend on paper difficulty, shift normalization, and vacancy ratio, and
              do NOT predict future examination cutoffs.
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left text-slate-700 dark:text-slate-300">
              <thead className="text-[11px] uppercase bg-slate-50 dark:bg-slate-800/60 text-slate-500 font-semibold">
                <tr>
                  <th className="py-3 px-3 rounded-l-xl">Exam & Stage</th>
                  <th className="py-3 px-3">RRB Region & Post</th>
                  <th className="py-3 px-3 text-center">UR</th>
                  <th className="py-3 px-3 text-center">OBC</th>
                  <th className="py-3 px-3 text-center">SC</th>
                  <th className="py-3 px-3 text-center">ST</th>
                  <th className="py-3 px-3 text-center">EWS</th>
                  <th className="py-3 px-3 text-center rounded-r-xl">ESM</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-mono">
                {filteredCutoffs.map((c) => (
                  <tr key={c.id}>
                    <td className="py-3 px-3 font-sans font-semibold text-slate-900 dark:text-white">
                      <div>{c.exam}</div>
                      <div className="text-[11px] text-slate-400 font-normal">{c.stage}</div>
                    </td>
                    <td className="py-3 px-3 font-sans">
                      <div className="font-semibold">{c.rrb}</div>
                      <div className="text-[11px] text-slate-400">{c.post}</div>
                    </td>
                    <td className="py-3 px-3 text-center font-bold text-slate-900 dark:text-white">{c.ur}</td>
                    <td className="py-3 px-3 text-center">{c.obc}</td>
                    <td className="py-3 px-3 text-center">{c.sc}</td>
                    <td className="py-3 px-3 text-center">{c.st}</td>
                    <td className="py-3 px-3 text-center">{c.ews}</td>
                    <td className="py-3 px-3 text-center text-slate-400">{c.esm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
