import React, { useState } from 'react';
import { Train, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { RAILWAY_GK_TOPICS } from '../data/rrb/railwayGk';
import { CURRENT_AFFAIRS_ITEMS } from '../data/rrb/currentAffairs';

export const RailwayGKPage: React.FC<{ onNavigate: (tab: string) => void }> = ({ onNavigate }) => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'railway_gk' | 'current_affairs'>('railway_gk');

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <Breadcrumb
        items={[
          { label: language === 'hi' ? 'सामान्य ज्ञान' : 'General Knowledge' },
          { label: language === 'hi' ? 'भारतीय रेल GK एवं समसामयिकी' : 'Indian Railways GK & Current Affairs' },
        ]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white shadow-xl space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
          <Train className="w-3.5 h-3.5" />
          High-Frequency Railway GK & Current Affairs
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          {language === 'hi' ? 'भारतीय रेल सामान्य ज्ञान एवं समसामयिकी मास्टर' : 'Indian Railways GK & Current Affairs Master'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
          {language === 'hi'
            ? '1853 से वर्तमान वंदे भारत और कवच तकनीक तक के ऐतिहासिक तथ्य, 19 ज़ोन, विश्व कीर्तिमान और रेलवे समसामयिकी।'
            : 'Authentic historical milestones, 19 zonal headquarters, engineering records, and high-yield railway current affairs.'}
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 gap-4 text-xs sm:text-sm font-bold">
        <button
          onClick={() => setActiveTab('railway_gk')}
          className={`py-3 px-2 border-b-2 flex items-center gap-1.5 transition-all ${
            activeTab === 'railway_gk'
              ? 'border-blue-600 text-blue-600 dark:text-blue-400'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          <Train className="w-4 h-4" />
          <span>Indian Railways GK</span>
        </button>

        <button
          onClick={() => setActiveTab('current_affairs')}
          className={`py-3 px-2 border-b-2 flex items-center gap-1.5 transition-all ${
            activeTab === 'current_affairs'
              ? 'border-blue-600 text-blue-600 dark:text-blue-400'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          <Clock className="w-4 h-4 text-indigo-500" />
          <span>Current Affairs Engine</span>
        </button>
      </div>

      {/* Tab 1: Railway GK */}
      {activeTab === 'railway_gk' && (
        <div className="space-y-5">
          {RAILWAY_GK_TOPICS.map((topic) => (
            <div
              key={topic.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 uppercase">
                  {topic.category}
                </span>
                <span className="text-xs text-amber-600 dark:text-amber-400 font-semibold">
                  {t(topic.examSignificance)}
                </span>
              </div>

              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                {t(topic.title)}
              </h2>

              <div className="space-y-2 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                {topic.facts.map((fact, fIdx) => (
                  <div key={fIdx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 flex items-start gap-2">
                    <span className="text-blue-600 font-bold shrink-0 mt-0.5">•</span>
                    <span>{t(fact)}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 2: Current Affairs */}
      {activeTab === 'current_affairs' && (
        <div className="space-y-4">
          {CURRENT_AFFAIRS_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                  {item.category}
                </span>
                <span className="text-xs text-slate-400 font-mono">{item.date}</span>
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                {t(item.headline)}
              </h3>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {t(item.summary)}
              </p>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span className="text-blue-600 font-medium">{t(item.examRelevance)}</span>
                <span>Source: {item.source}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
