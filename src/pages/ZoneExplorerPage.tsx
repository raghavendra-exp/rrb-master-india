import React, { useState } from 'react';
import { MapPin, ExternalLink, Phone, Mail, Search, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { RRB_ZONES } from '../data/rrb/zones';

export const ZoneExplorerPage: React.FC<{ onNavigate: (tab: string) => void }> = ({ onNavigate }) => {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredZones = RRB_ZONES.filter((z) => {
    const q = searchQuery.toLowerCase();
    return (
      z.name.en.toLowerCase().includes(q) ||
      z.name.hi.toLowerCase().includes(q) ||
      z.code.toLowerCase().includes(q) ||
      z.region.en.toLowerCase().includes(q) ||
      z.railwayZones.some((rz) => rz.toLowerCase().includes(q))
    );
  });

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Breadcrumb
        items={[
          { label: language === 'hi' ? 'आरआरबी क्षेत्र' : 'RRB Directories' },
          { label: language === 'hi' ? '21 आरआरबी ज़ोन एक्सप्लोरर' : '21 Official RRB Zones' },
        ]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white shadow-xl space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5" />
          Official Regional Portals of Indian Railways
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          {language === 'hi' ? '21 रेलवे भर्ती बोर्ड (आरआरबी) एवं ज़ोन एक्सप्लोरर' : '21 Official Railway Recruitment Boards (RRB) Explorer'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
          {language === 'hi'
            ? 'सभी 21 आधिकारिक आरआरबी के पोर्टल, नोटिस बोर्ड, एडमिट कार्ड लिंक, परिणाम और सहायता नंबर। कभी भी किसी तृतीय-पक्ष या अनधिकृत लिंक पर भरोसा न करें।'
            : 'Access official portals, notices, admit card windows, and direct helplines for all 21 authorized RRB boards. Zero fabricated or broken links.'}
        </p>
      </div>

      {/* Search Input */}
      <div className="relative max-w-md">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={language === 'hi' ? 'आरआरबी या रेलवे ज़ोन खोजें (उदा: Mumbai, Chandigarh, NR)...' : 'Search board or zone (e.g. Mumbai, Chandigarh, NR)...'}
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs sm:text-sm text-slate-900 dark:text-white outline-none focus:border-blue-500 shadow-2xs"
        />
      </div>

      {/* Zones Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredZones.map((zone) => (
          <div
            key={zone.code}
            className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono">
                  {zone.code}
                </span>
                <span className="text-[11px] font-semibold text-slate-400">
                  {t(zone.region)}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  {t(zone.name)}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Zones: {zone.railwayZones.join(', ')}
                </p>
              </div>

              <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 pt-2 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span className="truncate">{zone.helpline}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span className="truncate">{zone.email}</span>
                </div>
                <div className="flex items-start gap-2 pt-1 text-[11px] text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span className="line-clamp-2">{t(zone.address)}</span>
                </div>
              </div>
            </div>

            {/* Direct Official Links */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2 text-xs">
              <a
                href={zone.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="py-1.5 px-3 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white text-slate-700 dark:text-slate-300 font-semibold transition-colors flex items-center gap-1.5"
              >
                <span>Website</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href={zone.noticeBoardUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-1.5 px-3 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 hover:bg-blue-600 hover:text-white font-semibold transition-colors flex items-center gap-1.5"
              >
                <FileText className="w-3 h-3" />
                <span>Notices</span>
              </a>

              <a
                href={zone.resultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-1.5 px-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-600 hover:text-white font-semibold transition-colors"
              >
                Results
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
