import React, { useState } from 'react';
import {
  HelpCircle,
  Search,
  Bookmark,
  Check,
  X,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { QUESTIONS_DATABASE } from '../data/rrb/questions';
import type { Question } from '../types';
import { saveErrorNote } from '../utils/storage';

export const QuestionBankPage: React.FC<{ onNavigate: (tab: string) => void }> = ({ onNavigate }) => {
  const { language } = useLanguage();

  const [selectedExam, setSelectedExam] = useState<string>('ALL');
  const [selectedSubject, setSelectedSubject] = useState<string>('ALL');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('ALL');
  const [selectedSourceType, setSelectedSourceType] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [userSelectedOpts, setUserSelectedOpts] = useState<Record<string, number>>({});
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});

  const filteredQuestions = QUESTIONS_DATABASE.filter((q: Question) => {
    if (selectedExam !== 'ALL' && q.exam !== selectedExam) return false;
    if (selectedSubject !== 'ALL' && q.subject !== selectedSubject) return false;
    if (selectedDifficulty !== 'ALL' && q.difficulty !== selectedDifficulty) return false;
    if (selectedSourceType !== 'ALL' && q.sourceType !== selectedSourceType) return false;
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const matchQ = q.question.en.toLowerCase().includes(query) || q.question.hi.toLowerCase().includes(query);
      const matchCh = q.chapter.toLowerCase().includes(query);
      if (!matchQ && !matchCh) return false;
    }
    return true;
  });

  const handleSelectOption = (questionId: string, optIdx: number) => {
    setUserSelectedOpts((prev) => ({ ...prev, [questionId]: optIdx }));
    setRevealedSolutions((prev) => ({ ...prev, [questionId]: true }));
  };

  const handleBookmarkMistake = (q: Question) => {
    saveErrorNote({
      questionId: q.id,
      exam: q.exam,
      subject: q.subject,
      questionText: q.question.en,
      userAnswer:
        userSelectedOpts[q.id] !== undefined ? q.options[userSelectedOpts[q.id]].en : 'Unattempted',
      correctAnswer: q.options[q.answerIndex].en,
      mistakeType: 'conceptual',
      personalNotes: 'Added from Question Bank review',
      dateAdded: new Date().toLocaleDateString(),
      nextRevisionDate: new Date(Date.now() + 86400000).toLocaleDateString(),
      revisionCount: 0,
    });
    alert('Question successfully saved to your Mistake Notebook!');
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <Breadcrumb
        items={[
          { label: language === 'hi' ? 'तैयारी एवं प्रश्न' : 'Practice & Questions' },
          { label: language === 'hi' ? 'आरआरबी प्रश्न बैंक एवं गत वर्ष प्रश्न (PYQ)' : 'RRB Question Bank & PYQ Master' },
        ]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white shadow-xl space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5" />
          Scalable High-Quality Question Repository
        </div>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
          {language === 'hi' ? 'आरआरबी प्रश्न बैंक एवं आधिकारिक PYQ मास्टर' : 'RRB Question Bank & Official PYQ Master'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
          {language === 'hi'
            ? 'सत्यापित आधिकारिक गत वर्ष के प्रश्न, विस्तृत द्विभाषी चरणबद्ध हल एवं टीसीएस पैटर्न आधारित प्रश्न संग्रह।'
            : 'Explore verified official previous year shift questions, authentic solutions, and exam-oriented practice questions with complete source transparency.'}
        </p>
      </div>

      {/* Search & Multi-Filters Bar */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={language === 'hi' ? 'अध्याय या प्रश्न में खोजें (उदा: Percentage, Newton, River)...' : 'Search question or chapter (e.g. Percentage, Newton, River)...'}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white outline-none focus:border-blue-500"
          />
        </div>

        {/* Filters Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
          {/* Exam Filter */}
          <select
            value={selectedExam}
            onChange={(e) => setSelectedExam(e.target.value)}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200"
          >
            <option value="ALL">All Examinations</option>
            <option value="rrb-ntpc">RRB NTPC</option>
            <option value="rrb-group-d">RRB Group D</option>
            <option value="rrb-je">RRB JE</option>
          </select>

          {/* Subject Filter */}
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200"
          >
            <option value="ALL">All Subjects</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Reasoning">Reasoning</option>
            <option value="General Science">General Science</option>
            <option value="General Awareness">General Awareness</option>
            <option value="Technical Engineering">Technical Engineering</option>
          </select>

          {/* Difficulty Filter */}
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200"
          >
            <option value="ALL">All Difficulties</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>

          {/* Source Type Filter */}
          <select
            value={selectedSourceType}
            onChange={(e) => setSelectedSourceType(e.target.value)}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200"
          >
            <option value="ALL">All Question Types</option>
            <option value="verified_pyq">Verified Official PYQ</option>
            <option value="pyq_style">Exam-Oriented PYQ Style</option>
            <option value="original">Original Practice</option>
          </select>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-5">
        <div className="flex items-center justify-between text-xs text-slate-500 font-semibold px-1">
          <span>Showing {filteredQuestions.length} Questions</span>
          <span>Authentic 1/3 Negative Marking Benchmark</span>
        </div>

        {filteredQuestions.map((q: Question, idx: number) => {
          const userAns = userSelectedOpts[q.id];
          const isRevealed = revealedSolutions[q.id];

          return (
            <div
              key={q.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
            >
              {/* Question Metadata Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-slate-400">#{idx + 1}</span>
                  <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                    {q.id}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {q.chapter}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                      q.sourceType === 'verified_pyq'
                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400'
                        : 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400'
                    }`}
                  >
                    {q.sourceType.replace('_', ' ')}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400 uppercase">
                    {q.difficulty}
                  </span>
                </div>
              </div>

              {/* Question Statement */}
              <div className="space-y-1.5 text-sm sm:text-base font-medium text-slate-900 dark:text-white leading-relaxed">
                <p>{q.question[language]}</p>
                {language === 'hi' && (
                  <p className="text-xs text-slate-400 font-sans italic">{q.question.en}</p>
                )}
              </div>

              {/* 4 Interactive Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {q.options.map((opt, oIdx: number) => {
                  const isSelected = userAns === oIdx;
                  const isCorrect = q.answerIndex === oIdx;

                  let borderClass = 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800';

                  if (isRevealed) {
                    if (isCorrect) {
                      borderClass = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-semibold';
                    } else if (isSelected && !isCorrect) {
                      borderClass = 'border-red-500 bg-red-50 dark:bg-red-950/40 text-red-900 dark:text-red-200';
                    }
                  } else if (isSelected) {
                    borderClass = 'border-blue-600 bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200';
                  }

                  return (
                    <div
                      key={oIdx}
                      onClick={() => handleSelectOption(q.id, oIdx)}
                      className={`p-3 rounded-xl border text-xs sm:text-sm flex items-center justify-between cursor-pointer transition-all ${borderClass}`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full border border-slate-300 dark:border-slate-600 text-[10px] font-bold flex items-center justify-center shrink-0">
                          {String.fromCharCode(65 + oIdx)}
                        </span>
                        <span>{opt[language]}</span>
                      </div>
                      {isRevealed && isCorrect && <Check className="w-4 h-4 text-emerald-600 shrink-0" />}
                      {isRevealed && isSelected && !isCorrect && <X className="w-4 h-4 text-red-500 shrink-0" />}
                    </div>
                  );
                })}
              </div>

              {/* Explanation & Action Bar */}
              {isRevealed ? (
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                        {language === 'hi' ? 'विस्तृत हल एवं व्याख्या' : 'Detailed Step-by-Step Solution'}
                      </span>
                      <button
                        onClick={() => handleBookmarkMistake(q)}
                        className="flex items-center gap-1 text-xs text-amber-600 dark:text-amber-400 font-semibold hover:underline cursor-pointer"
                      >
                        <Bookmark className="w-3.5 h-3.5" />
                        <span>Log to Mistake Notebook</span>
                      </button>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                      {q.explanation[language]}
                    </p>
                    <div className="text-[11px] text-slate-400 flex items-center justify-between pt-1">
                      <span>Official Source: {q.source}</span>
                      <span>Exam: {q.exam.toUpperCase()}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex justify-end pt-1">
                  <button
                    onClick={() => setRevealedSolutions((prev) => ({ ...prev, [q.id]: true }))}
                    className="text-xs text-blue-600 dark:text-blue-400 font-semibold hover:underline cursor-pointer"
                  >
                    Reveal Solution Directly →
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
