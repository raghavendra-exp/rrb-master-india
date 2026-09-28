import React, { useState } from 'react';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { LEGITIMATE_BOOKS } from '../data/rrb/books';

export const BookLibraryPage: React.FC<{ onNavigate: (tab: string) => void }> = ({ onNavigate }) => {
  const { t, language } = useLanguage();
  const [filterExam, setFilterExam] = useState<string>('ALL');

  const filteredBooks = LEGITIMATE_BOOKS.filter((b) => {
    if (filterExam === 'ALL') return true;
    return b.exam === filterExam || b.exam === 'ALL';
  });

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Breadcrumb
        items={[
          { label: language === 'hi' ? 'अध्ययन सामग्री' : 'Study Material' },
          { label: language === 'hi' ? 'प्रमाणिक पुस्तक पुस्तकालय' : 'Legitimate Book Library' },
        ]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 text-white shadow-xl space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5" />
          100% Anti-Piracy & Copyright-Safe Directory
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          {language === 'hi' ? 'आरआरबी प्रमाणिक पुस्तक पुस्तकालय' : 'RRB Legitimate Book Library'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
          {language === 'hi'
            ? 'किरण, यूसीटी, दिशा, अरिहंत और एनसीईआरटी जैसी स्थापित प्रकाशन संस्थाओं की प्रामाणिक पुस्तकें। हम किसी भी अनधिकृत या पायरेटेड पीडीएफ का वितरण नहीं करते हैं।'
            : 'Curated repository of standard textbooks from established publishers. Direct legitimate store and official government educational links.'}
        </p>
      </div>

      {/* Anti Piracy Banner */}
      <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-900 dark:text-emerald-300 flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-bold">Strict Anti-Piracy Policy (Zero Copyright Infringement):</p>
          <p className="text-[11px] leading-relaxed text-emerald-800 dark:text-emerald-400">
            RRB Master India respects intellectual property rights. We provide authorized syllabus-to-book mapping and direct
            candidates to official publisher stores, government educational repositories (ePathshala & NCERT), and verified book vendors.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
        {['ALL', 'rrb-ntpc', 'rrb-group-d', 'rrb-je'].map((ex) => (
          <button
            key={ex}
            onClick={() => setFilterExam(ex)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
              filterExam === ex
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
            }`}
          >
            {ex === 'ALL' ? 'All Books & Resources' : ex.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Books Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                  {book.subject}
                </span>
                <span className="text-xs text-slate-400 font-medium">{book.edition}</span>
              </div>

              <div>
                <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white leading-snug">
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
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 text-[11px] text-slate-600 dark:text-slate-400 space-y-1">
                <strong className="block text-slate-800 dark:text-slate-200">Syllabus Coverage:</strong>
                <span>{t(book.syllabusCoverage)}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3 text-xs">
              <a
                href={book.publisherUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 font-medium"
              >
                Publisher Info
              </a>

              <a
                href={book.legitimateBuyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <span>{book.isNcertOrGovt ? 'Open Free Govt Resource' : 'View Verified Purchase Portal'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
