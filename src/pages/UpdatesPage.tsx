import React, { useState } from 'react';
import { Bell, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { LIVE_NOTIFICATIONS } from '../data/rrb/notifications';

export const UpdatesPage: React.FC<{ onNavigate: (tab: string) => void }> = ({ onNavigate }) => {
  const { t, language } = useLanguage();
  const [filterCat, setFilterCat] = useState<string>('ALL');

  const filtered = LIVE_NOTIFICATIONS.filter((n) => {
    if (filterCat === 'ALL') return true;
    return n.category === filterCat;
  });

  const getBadge = (cat: string) => {
    switch (cat) {
      case 'important':
        return <span className="px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 font-bold text-[10px] uppercase">🔴 Important</span>;
      case 'deadline':
        return <span className="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 font-bold text-[10px] uppercase">🟠 Deadline</span>;
      case 'new':
        return <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-bold text-[10px] uppercase">🟢 New</span>;
      case 'info':
      default:
        return <span className="px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-bold text-[10px] uppercase">🔵 Information</span>;
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <Breadcrumb
        items={[
          { label: language === 'hi' ? 'सूचनाएं' : 'Notifications' },
          { label: language === 'hi' ? 'आरआरबी नवीनतम अपडेट केंद्र' : 'RRB Live Updates Center' },
        ]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white shadow-xl space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
          <Bell className="w-3.5 h-3.5" />
          Official Centralized Employment Notices (CEN)
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          {language === 'hi' ? 'आरआरबी नवीनतम आधिकारिक सूचना एवं अपडेट केंद्र' : 'RRB Live Updates & Official Notice Center'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
          {language === 'hi'
            ? 'परीक्षा कैलेंडर, शुद्धिपत्र (Corrigendum), सिटी इंटिमेशन एवं ई-कॉल लेटर की सत्यापित आधिकारिक घोषणाएं।'
            : 'Track official notifications, exam schedules, city intimation slips, and result publications.'}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
        {['ALL', 'important', 'deadline', 'new', 'info'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterCat(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all uppercase tracking-wider ${
              filterCat === cat
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                {getBadge(item.category)}
                <span className="text-xs font-bold text-slate-400 font-mono">{item.date}</span>
              </div>
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                {item.rrbCode}
              </span>
            </div>

            <h3 className="font-bold text-base text-slate-900 dark:text-white leading-snug">
              {t(item.title)}
            </h3>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {t(item.summary)}
            </p>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <a
                href={item.officialPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-1.5 px-3 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 hover:bg-blue-600 hover:text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
              >
                <span>{language === 'hi' ? 'आधिकारिक नोटिस देखें' : 'View Official Notice'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
