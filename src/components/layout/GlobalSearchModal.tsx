import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, Train, Award, Calculator, FileText, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { EXAMS_DATA } from '../../data/rrb/exams';
import { RRB_POSTS } from '../../data/rrb/posts';
import { RRB_ZONES } from '../../data/rrb/zones';
import { FORMULA_ITEMS } from '../../data/rrb/formulas';
import { QUESTIONS_DATABASE } from '../../data/rrb/questions';
import { LIVE_NOTIFICATIONS } from '../../data/rrb/notifications';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (tab: string, extraData?: unknown) => void;
}

interface SearchResultItem {
  id: string;
  category: 'exam' | 'post' | 'zone' | 'formula' | 'question' | 'notification';
  title: string;
  subtitle: string;
  tabTarget: string;
  payload?: unknown;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({ isOpen, onClose, onSelectResult }) => {
  const { t, language } = useLanguage();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResultItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setResults([]);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Keyboard shortcut listener (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open triggered by parent state
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Perform search
  useEffect(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      setResults([]);
      return;
    }

    const matches: SearchResultItem[] = [];

    // Search Exams
    Object.values(EXAMS_DATA).forEach((exam) => {
      const enTitle = exam.title.en.toLowerCase();
      const hiTitle = exam.title.hi.toLowerCase();
      const code = exam.code.toLowerCase();
      if (enTitle.includes(q) || hiTitle.includes(q) || code.includes(q)) {
        matches.push({
          id: exam.id,
          category: 'exam',
          title: t(exam.title),
          subtitle: `${exam.code} • ${t(exam.subtitle)}`,
          tabTarget: exam.id,
        });
      }
    });

    // Search Posts
    RRB_POSTS.forEach((post) => {
      const enName = post.postName.en.toLowerCase();
      const hiName = post.postName.hi.toLowerCase();
      const dept = post.department.en.toLowerCase();
      if (enName.includes(q) || hiName.includes(q) || dept.includes(q)) {
        matches.push({
          id: post.id,
          category: 'post',
          title: t(post.postName),
          subtitle: `${post.payLevel} • ${post.initialPay} • ${t(post.department)}`,
          tabTarget: 'posts',
        });
      }
    });

    // Search Zones
    RRB_ZONES.forEach((zone) => {
      const enName = zone.name.en.toLowerCase();
      const hiName = zone.name.hi.toLowerCase();
      const code = zone.code.toLowerCase();
      if (enName.includes(q) || hiName.includes(q) || code.includes(q)) {
        matches.push({
          id: zone.code,
          category: 'zone',
          title: t(zone.name),
          subtitle: `${zone.railwayZones.join(', ')} • ${zone.helpline}`,
          tabTarget: 'zones',
        });
      }
    });

    // Search Formulas
    FORMULA_ITEMS.forEach((form) => {
      const enTitle = form.title.en.toLowerCase();
      const hiTitle = form.title.hi.toLowerCase();
      const formulaStr = form.formula.toLowerCase();
      if (enTitle.includes(q) || hiTitle.includes(q) || formulaStr.includes(q)) {
        matches.push({
          id: form.id,
          category: 'formula',
          title: t(form.title),
          subtitle: form.formula,
          tabTarget: 'formulas',
        });
      }
    });

    // Search Questions
    QUESTIONS_DATABASE.forEach((qItem) => {
      const enQ = qItem.question.en.toLowerCase();
      const hiQ = qItem.question.hi.toLowerCase();
      const ch = qItem.chapter.toLowerCase();
      if (enQ.includes(q) || hiQ.includes(q) || ch.includes(q)) {
        matches.push({
          id: qItem.id,
          category: 'question',
          title: `${qItem.id}: ${qItem.chapter}`,
          subtitle: t(qItem.question).slice(0, 90) + '...',
          tabTarget: 'questions',
          payload: qItem,
        });
      }
    });

    // Search Notifications
    LIVE_NOTIFICATIONS.forEach((n) => {
      const enT = n.title.en.toLowerCase();
      const hiT = n.title.hi.toLowerCase();
      if (enT.includes(q) || hiT.includes(q)) {
        matches.push({
          id: n.id,
          category: 'notification',
          title: t(n.title),
          subtitle: `${n.date} • ${n.rrbCode}`,
          tabTarget: 'updates',
        });
      }
    });

    setResults(matches.slice(0, 15));
    setSelectedIndex(0);
  }, [query, language]);

  const handleKeyDownInResults = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      e.preventDefault();
      handleSelect(results[selectedIndex]);
    }
  };

  const handleSelect = (item: SearchResultItem) => {
    onSelectResult(item.tabTarget, item.payload);
    onClose();
  };

  if (!isOpen) return null;

  const getCategoryIcon = (category: SearchResultItem['category']) => {
    switch (category) {
      case 'exam':
        return <Train className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      case 'post':
        return <Award className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
      case 'zone':
        return <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case 'formula':
        return <Calculator className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
      case 'question':
      case 'notification':
      default:
        return <FileText className="w-4 h-4 text-slate-600 dark:text-slate-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col"
        onKeyDown={handleKeyDownInResults}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={language === 'hi' ? 'परीक्षा, पद, ज़ोन, सूत्र या प्रश्न खोजें...' : 'Search exams, posts, zones, formulas, questions...'}
            className="w-full bg-transparent border-none outline-none text-slate-800 dark:text-slate-100 placeholder-slate-400 text-base"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block ml-2 px-2 py-0.5 text-[11px] font-semibold text-slate-500 bg-slate-100 dark:bg-slate-800 dark:text-slate-400 rounded-md border border-slate-200 dark:border-slate-700">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 divide-y divide-slate-100 dark:divide-slate-800/60">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-slate-400 text-sm">
              <p className="font-medium text-slate-600 dark:text-slate-300 mb-1">
                {language === 'hi' ? 'त्वरित वैश्विक खोज' : 'Quick Railway Explorer'}
              </p>
              <p className="text-xs">
                {language === 'hi' ? 'उदा: NTPC, Station Master, Track Maintainer, Formula, Mumbai...' : 'Try typing: NTPC, Station Master, Track Maintainer, Formula, Mumbai...'}
              </p>
            </div>
          ) : results.length === 0 ? (
            <div className="py-8 text-center text-slate-400 text-sm">
              {language === 'hi' ? 'कोई प्रासंगिक परिणाम नहीं मिला।' : 'No matching results found.'}
            </div>
          ) : (
            results.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={`${item.category}-${item.id}`}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-colors ${
                    isSelected
                      ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200'
                      : 'hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-800 dark:text-slate-200'
                  }`}
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 shrink-0 mt-0.5">
                      {getCategoryIcon(item.category)}
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-sm truncate flex items-center gap-2">
                        <span>{item.title}</span>
                        <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-mono">
                          {item.category}
                        </span>
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 ml-2" />
                </div>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="p-2.5 px-4 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
          <span>
            {results.length} {language === 'hi' ? 'परिणाम' : 'results found'}
          </span>
          <div className="flex items-center gap-3">
            <span>↑↓ {language === 'hi' ? 'नेविगेट' : 'Navigate'}</span>
            <span>↵ {language === 'hi' ? 'चुनें' : 'Select'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
