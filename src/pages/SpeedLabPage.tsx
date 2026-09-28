import React, { useState, useEffect } from 'react';
import { Zap, Timer, RotateCcw, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumb } from '../components/layout/Breadcrumb';

interface SpeedDrillQuestion {
  question: string;
  answer: number;
}

const generateArithmeticQuestion = (): SpeedDrillQuestion => {
  const types = ['multiply', 'square', 'percentage'];
  const type = types[Math.floor(Math.random() * types.length)];

  if (type === 'square') {
    const n = Math.floor(Math.random() * 30) + 11; // 11 to 40
    return { question: `${n}² = ?`, answer: n * n };
  } else if (type === 'percentage') {
    const pct = [10, 20, 25, 30, 50][Math.floor(Math.random() * 5)];
    const val = (Math.floor(Math.random() * 20) + 1) * 20; // Multiple of 20
    return { question: `${pct}% of ${val} = ?`, answer: (pct * val) / 100 };
  } else {
    const a = Math.floor(Math.random() * 15) + 6;
    const b = Math.floor(Math.random() * 15) + 6;
    return { question: `${a} × ${b} = ?`, answer: a * b };
  }
};

export const SpeedLabPage: React.FC<{ onNavigate: (tab: string) => void }> = ({ onNavigate }) => {
  const { language } = useLanguage();

  const drillDuration = 30; // 30 seconds sprint
  const [timeLeft, setTimeLeft] = useState<number>(30);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const [currentQ, setCurrentQ] = useState<SpeedDrillQuestion>(generateArithmeticQuestion());
  const [userInput, setUserInput] = useState<string>('');
  const [score, setScore] = useState<{ correct: number; incorrect: number }>({ correct: 0, incorrect: 0 });

  useEffect(() => {
    let timer: number;
    if (isActive && timeLeft > 0) {
      timer = window.setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsActive(false);
            setIsFinished(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isActive, timeLeft]);

  const handleStart = () => {
    setTimeLeft(drillDuration);
    setScore({ correct: 0, incorrect: 0 });
    setIsActive(true);
    setIsFinished(false);
    setUserInput('');
    setCurrentQ(generateArithmeticQuestion());
  };

  const handleAnswerSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (userInput.trim() === '') return;

    const num = Number(userInput.trim());
    if (num === currentQ.answer) {
      setScore((prev) => ({ ...prev, correct: prev.correct + 1 }));
    } else {
      setScore((prev) => ({ ...prev, incorrect: prev.incorrect + 1 }));
    }

    setUserInput('');
    setCurrentQ(generateArithmeticQuestion());
  };

  const totalAttempted = score.correct + score.incorrect;
  const accuracy = totalAttempted > 0 ? Math.round((score.correct / totalAttempted) * 100) : 0;
  const avgSeconds = totalAttempted > 0 ? ((drillDuration - timeLeft) / totalAttempted).toFixed(1) : '0';

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Breadcrumb
        items={[
          { label: language === 'hi' ? 'दक्षता प्रयोगशालाएं' : 'Preparation Labs' },
          { label: language === 'hi' ? 'आरआरबी स्पीड लैब' : 'RRB Speed Lab' },
        ]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-600 via-orange-600 to-slate-900 text-white shadow-xl space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider">
          <Zap className="w-3.5 h-3.5" />
          Rapid Calculation & Mental Arithmetic Sprint
        </div>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
          {language === 'hi' ? 'आरआरबी स्पीड लैब (गणना गति परीक्षक)' : 'RRB Mental Speed Lab'}
        </h1>
        <p className="text-xs sm:text-sm text-amber-100 max-w-xl leading-relaxed">
          {language === 'hi'
            ? '30 सेकंड का तीव्र गणना स्प्रिंट: वर्ग, प्रतिशत, गुणा एवं त्वरित मानसिक संक्रियाएं।'
            : 'Train your brain for instantaneous arithmetic recall without rough paper calculation.'}
        </p>
      </div>

      {/* Speed Lab Playground */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm text-center space-y-6">
        {!isActive && !isFinished ? (
          <div className="py-8 max-w-md mx-auto space-y-4">
            <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-600 flex items-center justify-center mx-auto">
              <Zap className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              {language === 'hi' ? '30 सेकंड तीव्र गणना स्प्रिंट' : '30-Second Calculation Sprint'}
            </h2>
            <p className="text-xs text-slate-500">
              Solve as many questions as you can before the clock runs out! Press Enter after each answer.
            </p>
            <button
              onClick={handleStart}
              className="py-3 px-8 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-md transition-colors cursor-pointer"
            >
              Start Sprint
            </button>
          </div>
        ) : isActive ? (
          <div className="space-y-6 max-w-md mx-auto">
            {/* Timer and Score Counter */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 font-mono text-sm font-bold text-amber-600 bg-amber-50 dark:bg-amber-950/40 px-3 py-1.5 rounded-xl border border-amber-200 dark:border-amber-900">
                <Timer className="w-4 h-4" />
                <span>{timeLeft}s Left</span>
              </div>
              <div className="text-xs font-bold text-emerald-600">
                Score: {score.correct} / {totalAttempted}
              </div>
            </div>

            {/* Question Display */}
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700">
              <span className="text-4xl sm:text-5xl font-black font-mono text-slate-900 dark:text-white">
                {currentQ.question}
              </span>
            </div>

            {/* Answer Input */}
            <form onSubmit={handleAnswerSubmit} className="flex gap-2">
              <input
                type="number"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                autoFocus
                placeholder="Type answer & Enter..."
                className="w-full text-center text-2xl font-bold p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white outline-none focus:border-amber-500"
              />
              <button
                type="submit"
                className="px-5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm"
              >
                Submit
              </button>
            </form>
          </div>
        ) : (
          /* Finished Result */
          <div className="space-y-6 max-w-md mx-auto py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center mx-auto">
              <Award className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-black text-slate-900 dark:text-white">
              Sprint Complete!
            </h3>

            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800">
                <div className="text-xs text-slate-400">Correct</div>
                <div className="text-xl font-bold text-emerald-600">{score.correct}</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800">
                <div className="text-xs text-slate-400">Accuracy</div>
                <div className="text-xl font-bold text-blue-600">{accuracy}%</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800">
                <div className="text-xs text-slate-400">Sec / Question</div>
                <div className="text-xl font-bold text-amber-600">{avgSeconds}s</div>
              </div>
            </div>

            <button
              onClick={handleStart}
              className="py-2.5 px-6 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-1.5 shadow-md cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retry Sprint</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
