import React, { useState } from 'react';
import {
  ExternalLink,
  ShieldCheck,
  BookOpen,
  Globe,
  Award,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { LEGITIMATE_BOOKS } from '../data/rrb/books';
import { INTERNET_RESOURCES, type InternetResource } from '../data/rrb/resources';

export const BookLibraryPage: React.FC<{ onNavigate: (tab: string) => void }> = ({ onNavigate }) => {
  const { t, language } = useLanguage();
  const [activeLibraryTab, setActiveLibraryTab] = useState<'books' | 'resources'>('books');
  const [filterExam, setFilterExam] = useState<string>('ALL');
  const [filterSubject, setFilterSubject] = useState<string>('ALL');
  const [filterResourceCategory, setFilterResourceCategory] = useState<string>('ALL');

  const filteredBooks = LEGITIMATE_BOOKS.filter((b) => {
    if (filterExam !== 'ALL' && b.exam !== filterExam && b.exam !== 'ALL') return false;
    if (filterSubject !== 'ALL' && b.subject !== filterSubject) return false;
    return true;
  });

  const filteredResources = INTERNET_RESOURCES.filter((res) => {
    if (filterResourceCategory !== 'ALL' && res.category !== filterResourceCategory) return false;
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Breadcrumb
        items={[
          { label: language === 'hi' ? 'अध्ययन सामग्री' : 'Study Material' },
          {
            label:
              language === 'hi'
                ? 'प्रामाणिक पुस्तक एवं आधिकारिक पोर्टल केंद्र'
                : 'Standard Textbooks & Official Web Portals',
          },
        ]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 text-white shadow-2xl space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            100% Anti-Piracy & Copyright-Safe Directory
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-500/30">
            <Globe className="w-3.5 h-3.5" />
            Direct Government & Publisher Links
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
          {language === 'hi'
            ? 'आरआरबी प्रामाणिक पुस्तक पुस्तकालय एवं इंटरनेट संसाधन'
            : 'RRB Standard Books & Official Free Internet Portals'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
          {language === 'hi'
            ? 'किरण, यूसीटी, पिनेकल, दिशा, अरिहंत और लूसेंट जैसी शीर्ष प्रकाशन संस्थाओं की प्रामाणिक पाठ्यपुस्तकें एवं भारत सरकार के निःशुल्क शैक्षणिक पोर्टल (NCERT, ePathshala, NPTEL, RDSO साइको, NDLI)। हम किसी भी अनधिकृत या पायरेटेड पीडीएफ का वितरण नहीं करते हैं।'
            : 'Curated repository of standard textbooks and official government educational repositories. Direct links to publisher authorized portals and free government learning platforms.'}
        </p>

        {/* Tab Switcher inside Header */}
        <div className="flex flex-wrap gap-2 pt-2">
          <button
            onClick={() => setActiveLibraryTab('books')}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeLibraryTab === 'books'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white/10 text-slate-200 hover:bg-white/20'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>
              {language === 'hi'
                ? `प्रामाणिक पुस्तकें (${LEGITIMATE_BOOKS.length})`
                : `Standard Textbooks (${LEGITIMATE_BOOKS.length})`}
            </span>
          </button>
          <button
            onClick={() => setActiveLibraryTab('resources')}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeLibraryTab === 'resources'
                ? 'bg-emerald-600 text-white shadow-lg'
                : 'bg-white/10 text-slate-200 hover:bg-white/20'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>
              {language === 'hi'
                ? `निःशुल्क सरकारी पोर्टल (${INTERNET_RESOURCES.length})`
                : `Free Govt & Web Portals (${INTERNET_RESOURCES.length})`}
            </span>
          </button>
        </div>
      </div>

      {/* Anti-Piracy Policy Notice */}
      <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-900 dark:text-emerald-300 flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-bold">Strict Anti-Piracy Policy (Zero Copyright Infringement):</p>
          <p className="text-[11px] leading-relaxed text-emerald-800 dark:text-emerald-400">
            RRB Master India respects intellectual property rights. We provide authorized syllabus-to-book mapping and direct
            candidates to official publisher stores, government educational repositories (ePathshala & NCERT), and verified vendors.
            No unauthorized PDFs are stored or served on this platform.
          </p>
        </div>
      </div>

      {/* TAB 1: CURATED STANDARD TEXTBOOKS */}
      {activeLibraryTab === 'books' && (
        <div className="space-y-5">
          {/* Filters Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Exam:</span>
              {['ALL', 'rrb-ntpc', 'rrb-group-d', 'rrb-je'].map((ex) => (
                <button
                  key={ex}
                  onClick={() => setFilterExam(ex)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    filterExam === ex
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {ex === 'ALL' ? 'All Exams' : ex.toUpperCase().replace('-', ' ')}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Subject:</span>
              <select
                value={filterSubject}
                onChange={(e) => setFilterSubject(e.target.value)}
                className="p-2 rounded-xl text-xs border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium cursor-pointer"
              >
                <option value="ALL">All Subjects</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Reasoning">Reasoning</option>
                <option value="General Science">General Science</option>
                <option value="General Awareness">General Awareness</option>
                <option value="Current Affairs">Current Affairs</option>
                <option value="Technical Engineering">Technical Engineering</option>
              </select>
            </div>
          </div>

          {/* Books Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 flex flex-col justify-between hover:border-blue-500/40 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                      {book.subject}
                    </span>
                    <span className="text-xs text-slate-400 font-medium font-mono">{book.edition}</span>
                  </div>

                  <div>
                    <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white leading-snug">
                      {book.title}
                    </h3>
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold mt-1">
                      Publisher: {book.publisher} • Author: {book.author}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {t(book.description)}
                  </p>

                  {/* Syllabus Mapping */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 text-[11px] text-slate-600 dark:text-slate-400 space-y-1 border border-slate-100 dark:border-slate-800">
                    <strong className="block text-slate-800 dark:text-slate-200 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Syllabus Coverage:</span>
                    </strong>
                    <span>{t(book.syllabusCoverage)}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3 text-xs">
                  <a
                    href={book.publisherUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 font-medium hover:underline"
                  >
                    Publisher Details
                  </a>

                  <a
                    href={book.legitimateBuyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer"
                  >
                    <span>
                      {book.isNcertOrGovt
                        ? 'Open Free Govt Portal'
                        : 'Official Purchase Portal'}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: FREE OFFICIAL GOVERNMENT & WEB PORTALS */}
      {activeLibraryTab === 'resources' && (
        <div className="space-y-5">
          {/* Resource Category Filter */}
          <div className="flex flex-wrap items-center gap-2 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Category:</span>
            {[
              { id: 'ALL', label: 'All Portals' },
              { id: 'official_portal', label: 'Official RRB Portals' },
              { id: 'cbat_psycho', label: 'RDSO CBAT / Psycho' },
              { id: 'ncert_epathshala', label: 'NCERT & ePathshala' },
              { id: 'nptel_engineering', label: 'SWAYAM / NPTEL (JE)' },
              { id: 'digital_library', label: 'National Digital Library' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterResourceCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  filterResourceCategory === cat.id
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredResources.map((res: InternetResource) => (
              <div
                key={res.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 flex flex-col justify-between hover:border-emerald-500/40 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                      {res.category.replace('_', ' ').toUpperCase()}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <Sparkles className="w-3 h-3" />
                      100% Free Official Govt Resource
                    </span>
                  </div>

                  <div>
                    <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white leading-snug">
                      {language === 'hi' ? res.hindiTitle : res.title}
                    </h3>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
                      Provider: {res.provider}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {res.description[language]}
                  </p>

                  {/* Aspirant Utility */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 text-[11px] text-slate-600 dark:text-slate-400 space-y-1 border border-slate-100 dark:border-slate-800">
                    <strong className="block text-slate-800 dark:text-slate-200 font-bold flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-blue-500" />
                      <span>{language === 'hi' ? 'अभ्यर्थियों हेतु उपयोगिता:' : 'Utility for Aspirants:'}</span>
                    </strong>
                    <span>{res.utilityForAspirants[language]}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {res.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-mono"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3 text-xs">
                  <span className="text-slate-400 text-[11px] font-mono truncate max-w-[200px]">
                    {res.url}
                  </span>

                  <a
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer shrink-0"
                  >
                    <span>
                      {res.category === 'ncert_epathshala'
                        ? language === 'hi'
                          ? 'निःशुल्क पुस्तकें डाउनलोड करें'
                          : 'Download Free PDF Books'
                        : language === 'hi'
                        ? 'आधिकारिक पोर्टल खोलें'
                        : 'Open Official Portal'}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
