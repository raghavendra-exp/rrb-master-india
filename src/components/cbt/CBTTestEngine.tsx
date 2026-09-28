import React, { useState, useEffect } from 'react';
import {
  Timer,
  ChevronLeft,
  ChevronRight,
  Bookmark,
  Award,
  BookOpen,
  Check,
  X,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../../context/LanguageContext';
import type { Question, ExamId, MockTestResult } from '../../types';
import { saveMockResult, saveErrorNote } from '../../utils/storage';

interface CBTTestEngineProps {
  questions: Question[];
  examId: ExamId;
  stageName: string;
  durationMinutes: number;
  testTitle: string;
  onExit: () => void;
}

type QuestionStatus = 'not_visited' | 'not_answered' | 'answered' | 'marked_for_review' | 'answered_marked_for_review';

export const CBTTestEngine: React.FC<CBTTestEngineProps> = ({
  questions,
  examId,
  stageName,
  durationMinutes,
  testTitle,
  onExit,
}) => {
  const { language } = useLanguage();

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [statuses, setStatuses] = useState<Record<number, QuestionStatus>>({ 0: 'not_answered' });
  const [timeLeft, setTimeLeft] = useState<number>(durationMinutes * 60);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [showSummaryModal, setShowSummaryModal] = useState<boolean>(false);
  const [isReviewMode, setIsReviewMode] = useState<boolean>(false);
  const [questionLang, setQuestionLang] = useState<'en' | 'hi'>(language);

  // Timer countdown
  useEffect(() => {
    if (isSubmitted || isReviewMode) return;
    const interval = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleSubmitTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isSubmitted, isReviewMode]);

  const currentQ = questions[currentIndex];

  const handleSelectOption = (optIndex: number) => {
    if (isSubmitted && !isReviewMode) return;
    setSelectedAnswers((prev) => ({ ...prev, [currentIndex]: optIndex }));
  };

  const handleClearResponse = () => {
    setSelectedAnswers((prev) => {
      const copy = { ...prev };
      delete copy[currentIndex];
      return copy;
    });
    setStatuses((prev) => ({ ...prev, [currentIndex]: 'not_answered' }));
  };

  const handleSaveAndNext = () => {
    const hasAnswer = selectedAnswers[currentIndex] !== undefined;
    setStatuses((prev) => ({
      ...prev,
      [currentIndex]: hasAnswer ? 'answered' : 'not_answered',
    }));
    if (currentIndex < questions.length - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      if (!statuses[nextIdx]) {
        setStatuses((prev) => ({ ...prev, [nextIdx]: 'not_answered' }));
      }
    }
  };

  const handleMarkForReviewAndNext = () => {
    const hasAnswer = selectedAnswers[currentIndex] !== undefined;
    setStatuses((prev) => ({
      ...prev,
      [currentIndex]: hasAnswer ? 'answered_marked_for_review' : 'marked_for_review',
    }));
    if (currentIndex < questions.length - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      if (!statuses[nextIdx]) {
        setStatuses((prev) => ({ ...prev, [nextIdx]: 'not_answered' }));
      }
    }
  };

  const handleJumpToQuestion = (index: number) => {
    if (!statuses[index]) {
      setStatuses((prev) => ({ ...prev, [index]: 'not_answered' }));
    }
    setCurrentIndex(index);
  };

  // Submit Evaluation
  const handleSubmitTest = () => {
    setShowSummaryModal(false);
    setIsSubmitted(true);

    let correct = 0;
    let incorrect = 0;
    let unattempted = 0;

    questions.forEach((q, idx) => {
      const ans = selectedAnswers[idx];
      if (ans === undefined) {
        unattempted++;
      } else if (ans === q.answerIndex) {
        correct++;
      } else {
        incorrect++;
      }
    });

    const totalQuestions = questions.length;
    // 1/3 negative marking
    const rawScore = correct * 1 - incorrect * (1 / 3);
    const finalScore = Math.max(0, Math.round(rawScore * 100) / 100);
    const accuracy = correct + incorrect > 0 ? Math.round((correct / (correct + incorrect)) * 100) : 0;
    const percentage = Math.round((finalScore / totalQuestions) * 100);

    const testResult: MockTestResult = {
      id: `RES-${Date.now()}`,
      examId,
      stageId: stageName,
      testTitle,
      date: new Date().toLocaleDateString(),
      totalQuestions,
      attempted: correct + incorrect,
      correct,
      incorrect,
      unattempted,
      score: finalScore,
      maxScore: totalQuestions,
      percentage,
      accuracy,
      timeSpentSeconds: durationMinutes * 60 - timeLeft,
      sectionBreakdown: [],
    };

    saveMockResult(testResult);

    if (percentage >= 60) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  };

  // Counts for palette
  const countAnswered = Object.values(statuses).filter((s) => s === 'answered').length;
  const countNotAnswered = Object.values(statuses).filter((s) => s === 'not_answered').length;
  const countMarkedReview = Object.values(statuses).filter((s) => s === 'marked_for_review').length;
  const countAnsweredMarkedReview = Object.values(statuses).filter((s) => s === 'answered_marked_for_review').length;
  const countNotVisited = questions.length - Object.keys(statuses).length;

  const formatTimer = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-100 dark:bg-slate-950 flex flex-col overflow-hidden select-none font-sans">
      {/* Top CBT Header */}
      <header className="bg-slate-900 text-white px-4 sm:px-6 py-2.5 flex items-center justify-between border-b border-slate-800 shrink-0">
        <div className="flex items-center gap-3">
          <div className="font-extrabold text-sm sm:text-base tracking-tight text-white flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span>{testTitle}</span>
          </div>
          <span className="hidden md:inline-block px-2 py-0.5 rounded text-[11px] font-bold bg-blue-900 text-blue-200 border border-blue-700">
            {stageName}
          </span>
        </div>

        {/* Timer & Controls */}
        <div className="flex items-center gap-3">
          {/* Question Lang toggle */}
          <button
            onClick={() => setQuestionLang((prev) => (prev === 'en' ? 'hi' : 'en'))}
            className="text-xs px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold transition-colors"
          >
            {questionLang === 'en' ? 'हिन्दी में देखें' : 'View in English'}
          </button>

          {!isSubmitted && (
            <div className="flex items-center gap-2 bg-slate-800/90 px-3 py-1 rounded-lg border border-slate-700 font-mono font-bold text-amber-400 text-xs sm:text-sm">
              <Timer className="w-4 h-4 text-amber-400" />
              <span>{formatTimer(timeLeft)}</span>
            </div>
          )}

          <button
            onClick={onExit}
            className="text-xs px-2.5 py-1 rounded bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors"
          >
            Exit Exam
          </button>
        </div>
      </header>

      {/* Main Examination Layout */}
      {!isSubmitted || isReviewMode ? (
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Left: Question Pane */}
          <main className="flex-1 flex flex-col overflow-y-auto p-4 sm:p-6 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800">
            {/* Question Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 shrink-0">
              <div className="flex items-center gap-2">
                <span className="font-bold text-base text-slate-900 dark:text-white">
                  Question No. {currentIndex + 1}
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-medium">
                  {currentQ.subject}
                </span>
                <span className="text-[11px] text-slate-400 hidden sm:inline">
                  • {currentQ.chapter}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold">
                <span className="text-emerald-600 dark:text-emerald-400">+1.00</span>
                <span className="text-slate-400">/</span>
                <span className="text-red-500">-0.33</span>
              </div>
            </div>

            {/* Question Text */}
            <div className="py-4 text-sm sm:text-base text-slate-800 dark:text-slate-100 font-medium leading-relaxed whitespace-pre-line">
              {currentQ.question[questionLang]}
            </div>

            {/* Options */}
            <div className="space-y-3 py-2">
              {currentQ.options.map((opt, oIdx) => {
                const isSelected = selectedAnswers[currentIndex] === oIdx;
                const isCorrect = currentQ.answerIndex === oIdx;
                let optionStyle = 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800';

                if (isReviewMode) {
                  if (isCorrect) {
                    optionStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200';
                  } else if (isSelected && !isCorrect) {
                    optionStyle = 'border-red-500 bg-red-50 dark:bg-red-950/40 text-red-900 dark:text-red-200';
                  }
                } else if (isSelected) {
                  optionStyle = 'border-blue-600 bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 font-semibold';
                }

                return (
                  <div
                    key={oIdx}
                    onClick={() => !isReviewMode && handleSelectOption(oIdx)}
                    className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${optionStyle}`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                        isSelected
                          ? 'border-blue-600 bg-blue-600 text-white'
                          : 'border-slate-300 dark:border-slate-600 text-slate-500'
                      }`}
                    >
                      {String.fromCharCode(65 + oIdx)}
                    </div>
                    <div className="text-xs sm:text-sm leading-relaxed">{opt[questionLang]}</div>
                    {isReviewMode && isCorrect && <Check className="w-5 h-5 text-emerald-600 shrink-0 ml-auto" />}
                    {isReviewMode && isSelected && !isCorrect && (
                      <X className="w-5 h-5 text-red-500 shrink-0 ml-auto" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Explanation in Review Mode */}
            {isReviewMode && (
              <div className="mt-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    Step-by-Step Explanation
                  </span>
                  <button
                    onClick={() => {
                      saveErrorNote({
                        questionId: currentQ.id,
                        exam: currentQ.exam,
                        subject: currentQ.subject,
                        questionText: currentQ.question.en,
                        userAnswer:
                          selectedAnswers[currentIndex] !== undefined
                            ? currentQ.options[selectedAnswers[currentIndex]].en
                            : 'Unattempted',
                        correctAnswer: currentQ.options[currentQ.answerIndex].en,
                        mistakeType: 'conceptual',
                        personalNotes: 'Logged from CBT test review',
                        dateAdded: new Date().toLocaleDateString(),
                        nextRevisionDate: new Date(Date.now() + 86400000).toLocaleDateString(),
                        revisionCount: 0,
                      });
                      alert('Added question to your Mistake Notebook!');
                    }}
                    className="flex items-center gap-1 text-xs text-amber-600 dark:text-amber-400 font-semibold hover:underline"
                  >
                    <Bookmark className="w-3.5 h-3.5" />
                    <span>Save to Mistake Notebook</span>
                  </button>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                  {currentQ.explanation[questionLang]}
                </p>
                <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                  <span>Source: {currentQ.source}</span>
                  <span className="uppercase font-mono">{currentQ.sourceType}</span>
                </div>
              </div>
            )}

            {/* Bottom Controls Bar */}
            <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 shrink-0">
              <div className="flex items-center gap-2">
                {!isReviewMode ? (
                  <>
                    <button
                      onClick={handleMarkForReviewAndNext}
                      className="px-3.5 py-2 rounded-xl border border-purple-300 dark:border-purple-800 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-950/40 text-xs font-bold transition-colors"
                    >
                      Mark for Review & Next
                    </button>
                    <button
                      onClick={handleClearResponse}
                      className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold transition-colors"
                    >
                      Clear Response
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setIsReviewMode(false)}
                    className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold"
                  >
                    Back to Scorecard
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                  disabled={currentIndex === 0}
                  className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 disabled:opacity-40 text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>

                {!isReviewMode ? (
                  <button
                    onClick={handleSaveAndNext}
                    className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1 shadow-sm transition-colors"
                  >
                    Save & Next <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1))}
                    disabled={currentIndex === questions.length - 1}
                    className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold flex items-center gap-1"
                  >
                    Next <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </main>

          {/* Right: Question Palette */}
          <aside className="w-full md:w-80 bg-slate-50 dark:bg-slate-950 border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-800 p-4 flex flex-col shrink-0">
            {/* Status Legend */}
            <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 dark:text-slate-300 mb-4 pb-3 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded cbt-answered flex items-center justify-center font-bold text-[10px]">
                  {countAnswered}
                </span>
                <span>Answered</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded cbt-not-answered flex items-center justify-center font-bold text-[10px]">
                  {countNotAnswered}
                </span>
                <span>Not Answered</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded cbt-review flex items-center justify-center font-bold text-[10px]">
                  {countMarkedReview}
                </span>
                <span>Marked Review</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded cbt-not-visited flex items-center justify-center font-bold text-[10px]">
                  {countNotVisited}
                </span>
                <span>Not Visited</span>
              </div>
            </div>

            {/* Questions Grid */}
            <div className="flex-1 overflow-y-auto">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Question Palette ({questions.length})
              </div>
              <div className="grid grid-cols-5 gap-2 pr-1">
                {questions.map((_, idx) => {
                  const status = statuses[idx] || 'not_visited';
                  const isCurrent = idx === currentIndex;
                  let colorClass = 'cbt-not-visited';
                  if (status === 'answered') colorClass = 'cbt-answered';
                  else if (status === 'not_answered') colorClass = 'cbt-not-answered';
                  else if (status === 'marked_for_review') colorClass = 'cbt-review';
                  else if (status === 'answered_marked_for_review') colorClass = 'cbt-review-answered';

                  return (
                    <button
                      key={idx}
                      onClick={() => handleJumpToQuestion(idx)}
                      className={`w-9 h-9 rounded-lg font-bold text-xs flex items-center justify-center cursor-pointer transition-all ${colorClass} ${
                        isCurrent ? 'ring-2 ring-blue-500 scale-105' : ''
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submit Button */}
            {!isSubmitted && (
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 mt-auto">
                <button
                  onClick={() => setShowSummaryModal(true)}
                  className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-colors shadow-md"
                >
                  Submit Final Test
                </button>
              </div>
            )}
          </aside>
        </div>
      ) : (
        /* Scorecard View */
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
          <div className="w-full max-w-2xl bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 shadow-2xl text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center mx-auto">
              <Award className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Official Examination Completed
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
                Your Scorecard & Performance
              </h2>
              <p className="text-xs text-slate-500 mt-1">{testTitle} • Authentic 1/3 Negative Marking Applied</p>
            </div>

            {/* Score Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-700/50">
                <div className="text-xs text-slate-400">Correct</div>
                <div className="text-xl font-bold text-emerald-600 mt-1">
                  {Object.entries(selectedAnswers).filter(([idx, ans]) => ans === questions[Number(idx)].answerIndex).length}
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-700/50">
                <div className="text-xs text-slate-400">Incorrect</div>
                <div className="text-xl font-bold text-red-500 mt-1">
                  {Object.entries(selectedAnswers).filter(([idx, ans]) => ans !== questions[Number(idx)].answerIndex).length}
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-700/50">
                <div className="text-xs text-slate-400">Accuracy</div>
                <div className="text-xl font-bold text-blue-600 mt-1">
                  {Math.round(
                    (Object.entries(selectedAnswers).filter(([idx, ans]) => ans === questions[Number(idx)].answerIndex).length /
                      Math.max(1, Object.keys(selectedAnswers).length)) *
                      100
                  )}%
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-700/50">
                <div className="text-xs text-slate-400">Net Marks</div>
                <div className="text-xl font-black text-slate-900 dark:text-white mt-1">
                  {(
                    Object.entries(selectedAnswers).filter(([idx, ans]) => ans === questions[Number(idx)].answerIndex).length * 1 -
                    Object.entries(selectedAnswers).filter(([idx, ans]) => ans !== questions[Number(idx)].answerIndex).length *
                      (1 / 3)
                  ).toFixed(2)}
                </div>
              </div>
            </div>

            {/* Review Solutions Button */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => {
                  setIsReviewMode(true);
                  setCurrentIndex(0);
                }}
                className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                <span>Review All Solutions & Explanations</span>
              </button>
              <button
                onClick={onExit}
                className="py-3 px-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs sm:text-sm transition-colors"
              >
                Close Engine
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {showSummaryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 max-w-md w-full border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Are you sure you want to submit?
            </h3>
            <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300 py-2 border-y border-slate-100 dark:border-slate-800">
              <div className="flex justify-between">
                <span>Total Questions:</span>
                <span className="font-bold">{questions.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Answered:</span>
                <span className="font-bold text-emerald-600">{countAnswered + countAnsweredMarkedReview}</span>
              </div>
              <div className="flex justify-between">
                <span>Not Answered:</span>
                <span className="font-bold text-red-500">{countNotAnswered}</span>
              </div>
              <div className="flex justify-between">
                <span>Marked for Review:</span>
                <span className="font-bold text-purple-600">{countMarkedReview}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowSummaryModal(false)}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold"
              >
                Resume Test
              </button>
              <button
                onClick={handleSubmitTest}
                className="flex-1 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-md"
              >
                Confirm Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
