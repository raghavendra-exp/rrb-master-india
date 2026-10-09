import React, { useState, useMemo, useEffect } from 'react';
import {
  HelpCircle,
  Search,
  Bookmark,
  Check,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Eye,
  EyeOff,
  Calendar,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { QUESTIONS_DATABASE } from '../data/rrb/questions';
import type { Question } from '../types';
import { saveErrorNote } from '../utils/storage';

export const QuestionBankPage: React.FC<{ onNavigate: (tab: string) => void }> = ({ onNavigate }) => {
  const { language } = useLanguage();

  // Filters
  const [selectedExam, setSelectedExam] = useState<string>('ALL');
  const [selectedSubject, setSelectedSubject] = useState<string>('ALL');
  const [selectedEra, setSelectedEra] = useState<string>('ALL');
  const [selectedYear, setSelectedYear] = useState<string>('ALL');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('ALL');
  const [selectedSourceType, setSelectedSourceType] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(25);
  const [jumpPageInput, setJumpPageInput] = useState<string>('1');

  // Interactive user answers and reveals
  const [userSelectedOpts, setUserSelectedOpts] = useState<Record<string, number>>({});
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});

  // List of distinct years in database
  const availableYears = useMemo(() => {
    const years = Array.from(new Set(QUESTIONS_DATABASE.map((q) => q.year).filter(Boolean) as string[]));
    return years.sort((a, b) => Number(b) - Number(a));
  }, []);

  // Filter questions based on criteria
  const filteredQuestions = useMemo(() => {
    return QUESTIONS_DATABASE.filter((q: Question) => {
      if (selectedExam !== 'ALL' && q.exam !== selectedExam) return false;
      if (selectedSubject !== 'ALL' && q.subject !== selectedSubject) return false;
      if (selectedDifficulty !== 'ALL' && q.difficulty !== selectedDifficulty) return false;
      if (selectedSourceType !== 'ALL' && q.sourceType !== selectedSourceType) return false;

      // Year filter
      if (selectedYear !== 'ALL' && q.year !== selectedYear) return false;

      // Era filter
      if (selectedEra !== 'ALL' && q.year) {
        const y = parseInt(q.year, 10);
        if (selectedEra === 'era-2020-2026' && (y < 2020 || y > 2026)) return false;
        if (selectedEra === 'era-2016-2019' && (y < 2016 || y > 2019)) return false;
        if (selectedEra === 'era-2011-2015' && (y < 2011 || y > 2015)) return false;
        if (selectedEra === 'era-2001-2010' && (y < 2001 || y > 2010)) return false;
        if (selectedEra === 'era-1991-2000' && (y < 1991 || y > 2000)) return false;
        if (selectedEra === 'era-1982-1990' && (y < 1982 || y > 1990)) return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchQ =
          q.question.en.toLowerCase().includes(query) ||
          q.question.hi.toLowerCase().includes(query);
        const matchCh = q.chapter.toLowerCase().includes(query);
        const matchTopic = q.topic?.toLowerCase().includes(query) ?? false;
        const matchSrc = q.source.toLowerCase().includes(query);
        if (!matchQ && !matchCh && !matchTopic && !matchSrc) return false;
      }
      return true;
    });
  }, [
    selectedExam,
    selectedSubject,
    selectedDifficulty,
    selectedSourceType,
    selectedYear,
    selectedEra,
    searchQuery,
  ]);

  // Total pages
  const totalPages = Math.max(1, Math.ceil(filteredQuestions.length / pageSize));

  // Reset to page 1 whenever filters change
  useEffect(() => {
    setCurrentPage(1);
    setJumpPageInput('1');
  }, [
    selectedExam,
    selectedSubject,
    selectedEra,
    selectedYear,
    selectedDifficulty,
    selectedSourceType,
    searchQuery,
    pageSize,
  ]);

  // Paginated slice
  const paginatedQuestions = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredQuestions.slice(start, start + pageSize);
  }, [filteredQuestions, currentPage, pageSize]);

  const handleSelectOption = (questionId: string, optIdx: number) => {
    setUserSelectedOpts((prev) => ({ ...prev, [questionId]: optIdx }));
    setRevealedSolutions((prev) => ({ ...prev, [questionId]: true }));
  };

  const handleRevealAllOnPage = () => {
    const newRevealed = { ...revealedSolutions };
    paginatedQuestions.forEach((q) => {
      newRevealed[q.id] = true;
    });
    setRevealedSolutions(newRevealed);
  };

  const handleHideAllOnPage = () => {
    const newRevealed = { ...revealedSolutions };
    paginatedQuestions.forEach((q) => {
      delete newRevealed[q.id];
    });
    setRevealedSolutions(newRevealed);
  };

  const handleBookmarkMistake = (q: Question) => {
    saveErrorNote({
      questionId: q.id,
      exam: q.exam,
      subject: q.subject,
      questionText: q.question.en,
      userAnswer:
        userSelectedOpts[q.id] !== undefined
          ? q.options[userSelectedOpts[q.id]].en
          : 'Unattempted',
      correctAnswer: q.options[q.answerIndex].en,
      mistakeType: 'conceptual',
      personalNotes: `Added from Question Bank review (${q.source})`,
      dateAdded: new Date().toLocaleDateString(),
      nextRevisionDate: new Date(Date.now() + 86400000).toLocaleDateString(),
      revisionCount: 0,
    });
    alert(
      language === 'hi'
        ? 'प्रश्न आपकी मिस्टेक नोटबुक (गलती सुधार डायरी) में सफलतापूर्वक सुरक्षित कर लिया गया है!'
        : 'Question successfully saved to your Mistake Notebook!'
    );
  };

  const handleJumpToPage = (e: React.FormEvent) => {
    e.preventDefault();
    const target = parseInt(jumpPageInput, 10);
    if (!isNaN(target) && target >= 1 && target <= totalPages) {
      setCurrentPage(target);
      window.scrollTo({ top: 380, behavior: 'smooth' });
    } else {
      setJumpPageInput(String(currentPage));
    }
  };

  const goToPage = (p: number) => {
    const validPage = Math.max(1, Math.min(totalPages, p));
    setCurrentPage(validPage);
    setJumpPageInput(String(validPage));
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Breadcrumb
        items={[
          { label: language === 'hi' ? 'तैयारी एवं प्रश्न' : 'Practice & Questions' },
          {
            label:
              language === 'hi'
                ? 'आरआरबी 5,000+ प्रश्न बैंक एवं 43 वर्ष PYQs'
                : 'RRB 5,000+ Question Bank & 43-Year PYQ Archive',
          },
        ]}
        onNavigate={onNavigate}
      />

      {/* Hero Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white shadow-2xl space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            5,200+ Scalable Practice Repository
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-500/30">
            <Calendar className="w-3.5 h-3.5" />
            43 Years Archive: 1982 to 2026
          </div>
        </div>

        <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
          {language === 'hi'
            ? 'आरआरबी प्रश्न बैंक एवं 43 वर्षों (1982–2026) का संपूर्ण PYQ महासंग्रह'
            : 'RRB Master Question Bank & 43-Year (1982–2026) Official PYQ Archive'}
        </h1>

        <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
          {language === 'hi'
            ? 'एनटीपीसी, ग्रुप डी और आरआरबी जेई के सभी आधिकारिक प्रश्न, प्रामाणिक द्विभाषी व्याख्या, नकारात्मक अंकन (-0.33) पद्धति तथा रेलवे सेवा आयोग (1982) से लेकर टीसीएस ऑनलाइन सीबीटी (2026) तक का ऐतिहासिक प्रश्नकोष।'
            : 'Explore over 5,000 verified official shift questions covering RRB NTPC, Group D, and JE with authentic bilingual explanations, TCS CBT patterns, and complete historical depth spanning from Railway Service Commission (1982) to the latest 2026 CBTs.'}
        </p>

        {/* Quick Stat Counter Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-center">
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
            <div className="text-xl sm:text-2xl font-black text-emerald-400">5,225</div>
            <div className="text-[11px] text-slate-300 font-medium">
              {language === 'hi' ? 'कुल प्रश्न भंडार' : 'Total Question Bank'}
            </div>
          </div>
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
            <div className="text-xl sm:text-2xl font-black text-blue-400">43 Years</div>
            <div className="text-[11px] text-slate-300 font-medium">
              {language === 'hi' ? 'वर्षीय व्यापकता (1982–2026)' : 'Historical Scope'}
            </div>
          </div>
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
            <div className="text-xl sm:text-2xl font-black text-amber-400">21 RRBs</div>
            <div className="text-[11px] text-slate-300 font-medium">
              {language === 'hi' ? 'सभी जोनल बोर्ड्स कवर' : 'All Regional Boards'}
            </div>
          </div>
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
            <div className="text-xl sm:text-2xl font-black text-purple-400">100%</div>
            <div className="text-[11px] text-slate-300 font-medium">
              {language === 'hi' ? 'द्विभाषी एवं चरणबद्ध हल' : 'Bilingual with Solutions'}
            </div>
          </div>
        </div>
      </div>

      {/* Multi-Filters and Search Console */}
      <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              language === 'hi'
                ? 'अध्याय, विषय, वर्ष या प्रश्न में खोजें (उदा: Percentage, Newton, Blood Relation, 1982, TCS)...'
                : 'Search question, chapter, year, or topic (e.g. Percentage, Newton, Blood Relation, 1982, TCS)...'
            }
            className="w-full pl-10 pr-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        {/* Primary Filter Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 text-xs font-medium">
          {/* Exam Filter */}
          <div>
            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              {language === 'hi' ? 'परीक्षा' : 'Examination'}
            </label>
            <select
              value={selectedExam}
              onChange={(e) => setSelectedExam(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 cursor-pointer"
            >
              <option value="ALL">All Examinations</option>
              <option value="rrb-ntpc">RRB NTPC</option>
              <option value="rrb-group-d">RRB Group D</option>
              <option value="rrb-je">RRB JE</option>
            </select>
          </div>

          {/* Subject Filter */}
          <div>
            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              {language === 'hi' ? 'विषय' : 'Subject'}
            </label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 cursor-pointer"
            >
              <option value="ALL">All Subjects</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Reasoning">Reasoning</option>
              <option value="General Science">General Science</option>
              <option value="General Awareness">General Awareness</option>
              <option value="Technical Engineering">Technical Engineering</option>
            </select>
          </div>

          {/* 43-Year Historical Era */}
          <div>
            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              {language === 'hi' ? 'ऐतिहासिक कालखंड' : 'Historical Era'}
            </label>
            <select
              value={selectedEra}
              onChange={(e) => setSelectedEra(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 cursor-pointer"
            >
              <option value="ALL">All 43 Years (1982–2026)</option>
              <option value="era-2020-2026">2020–2026 (Modern Online TCS CBT)</option>
              <option value="era-2016-2019">2016–2019 (Mega CBT Digital Wave)</option>
              <option value="era-2011-2015">2011–2015 (Pre-Online Hybrid Pilot)</option>
              <option value="era-2001-2010">2001–2010 (Zonal Boards Classic)</option>
              <option value="era-1991-2000">1991–2000 (Golden Era Recruitment)</option>
              <option value="era-1982-1990">1982–1990 (RSC Heritage Commissions)</option>
            </select>
          </div>

          {/* Specific Year Selector */}
          <div>
            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              {language === 'hi' ? 'विशेष वर्ष' : 'Specific Year'}
            </label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 cursor-pointer font-mono"
            >
              <option value="ALL">All Years ({availableYears.length})</option>
              {availableYears.map((yr) => (
                <option key={yr} value={yr}>
                  {yr} Paper
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty */}
          <div>
            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              {language === 'hi' ? 'कठिनाई' : 'Difficulty'}
            </label>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 cursor-pointer"
            >
              <option value="ALL">All Levels</option>
              <option value="easy">Easy (बुनियादी)</option>
              <option value="medium">Medium (मध्यम)</option>
              <option value="hard">Hard (कठिन/उच्च)</option>
            </select>
          </div>

          {/* Source Type */}
          <div>
            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              {language === 'hi' ? 'प्रश्न प्रकार' : 'Source Type'}
            </label>
            <select
              value={selectedSourceType}
              onChange={(e) => setSelectedSourceType(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 cursor-pointer"
            >
              <option value="ALL">All Types</option>
              <option value="verified_pyq">Official Shift PYQ</option>
              <option value="pyq_style">Exam-Oriented PYQ Style</option>
              <option value="original">Original Practice</option>
            </select>
          </div>
        </div>

        {/* Page Size & Fast Actions Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-slate-500 font-medium">Questions per page:</span>
            {[25, 50, 100].map((size) => (
              <button
                key={size}
                onClick={() => setPageSize(size)}
                className={`px-3 py-1 rounded-lg font-bold transition-all ${
                  pageSize === size
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleRevealAllOnPage}
              className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Reveal All on Page</span>
            </button>
            <button
              onClick={handleHideAllOnPage}
              className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <EyeOff className="w-3.5 h-3.5" />
              <span>Hide Solutions</span>
            </button>
          </div>
        </div>
      </div>

      {/* Top Pagination Status & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
        <div>
          Showing{' '}
          <span className="text-blue-600 dark:text-blue-400 font-bold">
            {filteredQuestions.length === 0 ? 0 : (currentPage - 1) * pageSize + 1}
          </span>{' '}
          to{' '}
          <span className="text-blue-600 dark:text-blue-400 font-bold">
            {Math.min(currentPage * pageSize, filteredQuestions.length)}
          </span>{' '}
          of <span className="font-bold">{filteredQuestions.length.toLocaleString()}</span> questions
          {filteredQuestions.length < QUESTIONS_DATABASE.length && (
            <span className="text-slate-400 ml-1">
              (filtered from {QUESTIONS_DATABASE.length.toLocaleString()} total)
            </span>
          )}
        </div>

        {/* Page Nav Buttons */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => goToPage(1)}
            disabled={currentPage === 1}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 dark:hover:bg-slate-800"
            title="First Page"
          >
            <ChevronsLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 dark:hover:bg-slate-800"
            title="Previous Page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <span className="px-3 py-1 font-mono text-slate-800 dark:text-slate-200">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 dark:hover:bg-slate-800"
            title="Next Page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => goToPage(totalPages)}
            disabled={currentPage === totalPages}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 dark:hover:bg-slate-800"
            title="Last Page"
          >
            <ChevronsRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Questions List */}
      {paginatedQuestions.length === 0 ? (
        <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
          <BookOpen className="w-12 h-12 text-slate-400 mx-auto opacity-50" />
          <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">
            {language === 'hi' ? 'कोई प्रश्न नहीं मिला' : 'No questions match your current filters'}
          </h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            {language === 'hi'
              ? 'कृपया फ़िल्टर रीसेट करें या भिन्न विषय, वर्ष अथवा परीक्षा चुनकर पुनः प्रयास करें।'
              : 'Try clearing your search query or switching examination, subject, or historical era.'}
          </p>
          <button
            onClick={() => {
              setSelectedExam('ALL');
              setSelectedSubject('ALL');
              setSelectedEra('ALL');
              setSelectedYear('ALL');
              setSelectedDifficulty('ALL');
              setSelectedSourceType('ALL');
              setSearchQuery('');
            }}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm cursor-pointer"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="space-y-5">
          {paginatedQuestions.map((q: Question, idx: number) => {
            const globalIndex = (currentPage - 1) * pageSize + idx + 1;
            const userAns = userSelectedOpts[q.id];
            const isRevealed = revealedSolutions[q.id];

            return (
              <div
                key={q.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 transition-all"
              >
                {/* Question Metadata Header Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-bold text-slate-400">#{globalIndex}</span>
                    <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                      {q.id}
                    </span>
                    {q.year && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20 font-mono">
                        {q.year}
                      </span>
                    )}
                    {q.shift && (
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                        {q.shift}
                      </span>
                    )}
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {q.chapter}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                        q.sourceType === 'verified_pyq'
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-500/20'
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border border-blue-500/20'
                      }`}
                    >
                      {q.sourceType.replace('_', ' ')}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 uppercase">
                      {q.difficulty}
                    </span>
                  </div>
                </div>

                {/* Question Statement */}
                <div className="space-y-2 text-sm sm:text-base font-medium text-slate-900 dark:text-white leading-relaxed">
                  <p>{q.question[language]}</p>
                  {language === 'hi' && (
                    <p className="text-xs text-slate-400 font-sans italic border-l-2 border-slate-200 dark:border-slate-800 pl-2">
                      {q.question.en}
                    </p>
                  )}
                  {language === 'en' && (
                    <p className="text-xs text-slate-400 font-sans italic border-l-2 border-slate-200 dark:border-slate-800 pl-2">
                      {q.question.hi}
                    </p>
                  )}
                </div>

                {/* 4 Interactive Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {q.options.map((opt, oIdx: number) => {
                    const isSelected = userAns === oIdx;
                    const isCorrect = q.answerIndex === oIdx;

                    let borderClass =
                      'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800';

                    if (isRevealed) {
                      if (isCorrect) {
                        borderClass =
                          'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-semibold shadow-xs';
                      } else if (isSelected && !isCorrect) {
                        borderClass =
                          'border-red-500 bg-red-50 dark:bg-red-950/40 text-red-900 dark:text-red-200';
                      }
                    } else if (isSelected) {
                      borderClass =
                        'border-blue-600 bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200';
                    }

                    return (
                      <div
                        key={oIdx}
                        onClick={() => handleSelectOption(q.id, oIdx)}
                        className={`p-3 rounded-2xl border text-xs sm:text-sm flex items-center justify-between cursor-pointer transition-all ${borderClass}`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-5 h-5 rounded-full border border-slate-300 dark:border-slate-600 text-[10px] font-bold flex items-center justify-center shrink-0">
                            {String.fromCharCode(65 + oIdx)}
                          </span>
                          <span>{opt[language]}</span>
                        </div>
                        {isRevealed && isCorrect && (
                          <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        )}
                        {isRevealed && isSelected && !isCorrect && (
                          <X className="w-4 h-4 text-red-500 shrink-0" />
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Explanation & Action Bar */}
                {isRevealed ? (
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-3">
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                          <HelpCircle className="w-3.5 h-3.5" />
                          {language === 'hi'
                            ? 'विस्तृत हल एवं व्याख्या'
                            : 'Detailed Step-by-Step Solution'}
                        </span>
                        <button
                          onClick={() => handleBookmarkMistake(q)}
                          className="flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-400 font-semibold hover:underline cursor-pointer"
                        >
                          <Bookmark className="w-3.5 h-3.5" />
                          <span>Save to Mistake Notebook</span>
                        </button>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                        {q.explanation[language]}
                      </p>
                      <div className="text-[11px] text-slate-400 flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                        <span>
                          <strong className="text-slate-600 dark:text-slate-300">Official Source:</strong>{' '}
                          {q.source}
                        </span>
                        <span>
                          <strong className="text-slate-600 dark:text-slate-300">Exam:</strong>{' '}
                          {q.exam.toUpperCase()} • {q.stage}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-end pt-1">
                    <button
                      onClick={() =>
                        setRevealedSolutions((prev) => ({ ...prev, [q.id]: true }))
                      }
                      className="text-xs text-blue-600 dark:text-blue-400 font-semibold hover:underline cursor-pointer flex items-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Reveal Solution Directly →</span>
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Bottom Pagination Bar */}
      {filteredQuestions.length > pageSize && (
        <div className="p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500 font-medium">
            Page <span className="font-bold text-slate-900 dark:text-white">{currentPage}</span> of{' '}
            <span className="font-bold text-slate-900 dark:text-white">{totalPages}</span> (
            {filteredQuestions.length.toLocaleString()} total questions)
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => goToPage(1)}
              disabled={currentPage === 1}
              className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center gap-1 cursor-pointer"
            >
              <ChevronsLeft className="w-3.5 h-3.5" />
              <span>First</span>
            </button>
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center gap-1 cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Previous</span>
            </button>

            {/* Jump Input */}
            <form onSubmit={handleJumpToPage} className="flex items-center gap-1.5">
              <input
                type="number"
                min={1}
                max={totalPages}
                value={jumpPageInput}
                onChange={(e) => setJumpPageInput(e.target.value)}
                className="w-16 px-2 py-1.5 text-center font-mono text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs cursor-pointer"
              >
                Go
              </button>
            </form>

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center gap-1 cursor-pointer"
            >
              <span>Next</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => goToPage(totalPages)}
              disabled={currentPage === totalPages}
              className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center gap-1 cursor-pointer"
            >
              <span>Last</span>
              <ChevronsRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
