import React, { useState } from 'react';
import { Calculator, Flame, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { FORMULA_ITEMS } from '../data/rrb/formulas';
import { SHORTCUT_ITEMS } from '../data/rrb/shortcuts';

export const FormulasShortcutsPage: React.FC<{ onNavigate: (tab: string) => void }> = ({ onNavigate }) => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'formulas' | 'shortcuts'>('formulas');
  const [selectedSubject, setSelectedSubject] = useState<string>('ALL');

  const filteredFormulas = FORMULA_ITEMS.filter((f) => {
    if (selectedSubject === 'ALL') return true;
    return f.subject === selectedSubject;
  });

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <Breadcrumb
        items={[
          { label: language === 'hi' ? 'गणित एवं विज्ञान' : 'Math & Science' },
          { label: language === 'hi' ? 'फॉर्मूला मास्टर एवं शॉर्टकट ट्रिक्स' : 'Formula Master & Shortcut Lab' },
        ]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white shadow-xl space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
          <Calculator className="w-3.5 h-3.5" />
          High-Yield Math & Physics Constants
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          {language === 'hi' ? 'आरआरबी फॉर्मूला मास्टर एवं शॉर्टकट ट्रिक्स लैब' : 'RRB Formula Master & Shortcut Tricks Lab'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
          {language === 'hi'
            ? 'अंकगणित, क्षेत्रमिति, भौतिकी और इंजीनियरिंग के प्रमाणित सूत्र एवं समय बचाने वाली वैध शॉर्टकट ट्रिक्स।'
            : 'Mathematically verified shortcuts and formulas to save precious seconds in Railway CBT.'}
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 gap-4 text-xs sm:text-sm font-bold">
        <button
          onClick={() => setActiveTab('formulas')}
          className={`py-3 px-2 border-b-2 flex items-center gap-1.5 transition-all ${
            activeTab === 'formulas'
              ? 'border-blue-600 text-blue-600 dark:text-blue-400'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          <Calculator className="w-4 h-4" />
          <span>Formula Master</span>
        </button>

        <button
          onClick={() => setActiveTab('shortcuts')}
          className={`py-3 px-2 border-b-2 flex items-center gap-1.5 transition-all ${
            activeTab === 'shortcuts'
              ? 'border-blue-600 text-blue-600 dark:text-blue-400'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          <Flame className="w-4 h-4 text-amber-500" />
          <span>Shortcut Lab (Speed Tricks)</span>
        </button>
      </div>

      {/* Tab 1: Formulas */}
      {activeTab === 'formulas' && (
        <div className="space-y-4">
          {/* Subject Filter */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {['ALL', 'Arithmetic', 'Statistics', 'Mensuration', 'Physics', 'Engineering'].map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubject(sub)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                  selectedSubject === sub
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredFormulas.map((form) => (
              <div
                key={form.id}
                className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                    {form.subject}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {form.examApplicability.join(', ').toUpperCase()}
                  </span>
                </div>

                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  {t(form.title)}
                </h3>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 font-mono text-sm font-bold text-blue-600 dark:text-blue-400 border border-slate-200/60 dark:border-slate-700/60">
                  {form.formula}
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {t(form.explanation)}
                </p>

                <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 text-[11px] text-emerald-900 dark:text-emerald-300 font-medium">
                  <strong>Example:</strong> {t(form.example)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Shortcuts */}
      {activeTab === 'shortcuts' && (
        <div className="space-y-5">
          {SHORTCUT_ITEMS.map((sc) => (
            <div
              key={sc.id}
              className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5" />
                  <span>{sc.speedAdvantage}</span>
                </span>
                <span className="text-xs font-mono text-slate-400">{sc.subject}</span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                {t(sc.topic)}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {/* Standard Method */}
                <div className="p-4 rounded-2xl bg-red-50/50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/40 space-y-1.5">
                  <span className="font-bold text-red-700 dark:text-red-400 uppercase text-[10px] tracking-wider block">
                    Conventional / Standard Method
                  </span>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{t(sc.standardMethod)}</p>
                </div>

                {/* Shortcut Method */}
                <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40 space-y-1.5">
                  <span className="font-bold text-emerald-700 dark:text-emerald-400 uppercase text-[10px] tracking-wider block">
                    Speed Shortcut Trick
                  </span>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{t(sc.shortcutMethod)}</p>
                </div>
              </div>

              {/* Example Question & Solved Breakdown */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2 text-xs">
                <div className="font-semibold text-slate-900 dark:text-white">
                  <strong>Example Question:</strong> {t(sc.exampleQuestion)}
                </div>
                <div className="text-blue-700 dark:text-blue-300 font-medium">
                  <strong>Instant Solution:</strong> {t(sc.solution)}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
