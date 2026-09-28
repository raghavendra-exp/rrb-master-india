import React, { useState, useEffect } from 'react';
import { Layers, Timer, CheckCircle, AlertTriangle, ArrowRight, RotateCcw } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Breadcrumb } from '../layout/Breadcrumb';

interface CBATQuestion {
  id: string;
  type: 'odd_sum' | 'classification' | 'spatial_grid';
  prompt: string;
  numbers?: number[];
  correctSum?: number;
  options?: string[];
  correctOptionIndex?: number;
}

const SAMPLE_CBAT_QUESTIONS: CBATQuestion[] = [
  {
    id: 'cbat-1',
    type: 'odd_sum',
    prompt: 'Add ONLY the odd numbers (1, 3, 5, 7, 9). Do NOT add even numbers:',
    numbers: [4, 7, 2, 9, 6, 3, 8, 5, 2, 1],
    correctSum: 25, // 7 + 9 + 3 + 5 + 1 = 25
  },
  {
    id: 'cbat-2',
    type: 'odd_sum',
    prompt: 'Add ONLY the odd numbers (1, 3, 5, 7, 9). Do NOT add even numbers:',
    numbers: [6, 3, 8, 7, 4, 1, 5, 6, 9, 2],
    correctSum: 25, // 3 + 7 + 1 + 5 + 9 = 25
  },
  {
    id: 'cbat-3',
    type: 'odd_sum',
    prompt: 'Add ONLY the odd numbers (1, 3, 5, 7, 9). Do NOT add even numbers:',
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    correctSum: 25, // 1 + 3 + 5 + 7 + 9 = 25
  },
  {
    id: 'cbat-4',
    type: 'odd_sum',
    prompt: 'Add ONLY the odd numbers (1, 3, 5, 7, 9). Do NOT add even numbers:',
    numbers: [8, 9, 4, 3, 6, 7, 2, 5, 8, 3],
    correctSum: 27, // 9 + 3 + 7 + 5 + 3 = 27
  },
  {
    id: 'cbat-5',
    type: 'classification',
    prompt: 'Selective Attention / Classification: Which group of letters does not follow the standard shift rule?',
    options: ['BDFF', 'PRTT', 'KMNN', 'SUWW'],
    correctOptionIndex: 2,
  },
];

export const CBATLab: React.FC<{ onNavigate: (tab: string) => void }> = ({ onNavigate }) => {
  const { language } = useLanguage();

  const [activeBattery, setActiveBattery] = useState<'odd_sum' | 'spatial' | 'personality'>('odd_sum');
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [inputVal, setInputVal] = useState<string>('');
  const [timeLeft, setTimeLeft] = useState<number>(120);
  const [isTestActive, setIsTestActive] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    let timer: number;
    if (isTestActive && timeLeft > 0) {
      timer = window.setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsTestActive(false);
            setIsSubmitted(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isTestActive, timeLeft]);

  const handleStart = () => {
    setIsTestActive(true);
    setIsSubmitted(false);
    setTimeLeft(120);
    setCurrentQIndex(0);
    setUserAnswers({});
    setInputVal('');
  };

  const handleNextQuestion = () => {
    if (inputVal !== '') {
      setUserAnswers((prev) => ({ ...prev, [SAMPLE_CBAT_QUESTIONS[currentQIndex].id]: Number(inputVal) }));
      setInputVal('');
    }
    if (currentQIndex < SAMPLE_CBAT_QUESTIONS.length - 1) {
      setCurrentQIndex((prev) => prev + 1);
    } else {
      setIsTestActive(false);
      setIsSubmitted(true);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    SAMPLE_CBAT_QUESTIONS.forEach((q) => {
      if (q.type === 'odd_sum' && userAnswers[q.id] === q.correctSum) {
        correct++;
      } else if (q.type === 'classification' && userAnswers[q.id] === q.correctOptionIndex) {
        correct++;
      }
    });
    // RDSO T-score estimation formula: T = 50 + 10 * ((Score - Mean) / SD)
    // Mean = 2.5, SD = 1.0 approx for 5 questions
    const raw = correct;
    const tScore = Math.min(80, Math.max(20, Math.round(50 + 10 * ((raw - 2.5) / 1.0))));
    return { raw, total: SAMPLE_CBAT_QUESTIONS.length, tScore, passed: tScore >= 42 };
  };

  const currentQ = SAMPLE_CBAT_QUESTIONS[currentQIndex];
  const results = isSubmitted ? calculateScore() : null;

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <Breadcrumb
        items={[
          { label: language === 'hi' ? 'विशेष दक्षता' : 'Specialized Labs' },
          { label: language === 'hi' ? 'सीबीएटी साइको लैब' : 'CBAT Aptitude Lab' },
        ]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-900 via-indigo-950 to-slate-900 text-white shadow-xl relative overflow-hidden">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            RDSO Lucknow Computer Based Aptitude Test (CBAT)
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {language === 'hi' ? 'आरआरबी सीबीएटी (साइको) एप्टीट्यूड लैब' : 'RRB CBAT Psycho Aptitude Lab'}
          </h1>
          <p className="text-xs sm:text-sm text-purple-200 max-w-2xl leading-relaxed">
            {language === 'hi'
              ? 'स्टेशन मास्टर एवं ट्रैफिक असिस्टेंट पदों हेतु अनिवार्य 5-बैटरी साइको परीक्षण। प्रत्येक टेस्ट बैटरी में न्यूनतम 42 का T-Score प्राप्त करना अनिवार्य है (कोई श्रेणीगत छूट नहीं)।'
              : 'Mandatory 5-battery psychological assessment for Station Master & Traffic Assistant. Candidates must secure at least 42 T-Score in EACH battery separately.'}
          </p>
        </div>
      </div>

      {/* Battery Selector */}
      <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <button
          onClick={() => setActiveBattery('odd_sum')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeBattery === 'odd_sum' ? 'bg-purple-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          {language === 'hi' ? '1. चयनात्मक ध्यान (विषम संख्याओं का योग)' : '1. Selective Attention (Sum of Odd Numbers)'}
        </button>
        <button
          onClick={() => setActiveBattery('spatial')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeBattery === 'spatial' ? 'bg-purple-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          {language === 'hi' ? '2. स्थानिक स्कैनिंग (लघुत्तम मार्ग)' : '2. Spatial Scanning (Shortest Route)'}
        </button>
        <button
          onClick={() => setActiveBattery('personality')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeBattery === 'personality' ? 'bg-purple-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          {language === 'hi' ? '3. सूचना व्यवस्था / व्यक्तित्व' : '3. Information Ordering & Personality'}
        </button>
      </div>

      {/* Main Interactive Test Area */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        {!isTestActive && !isSubmitted ? (
          <div className="text-center py-8 max-w-lg mx-auto space-y-4">
            <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-600 flex items-center justify-center mx-auto">
              <Layers className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              {language === 'hi' ? 'चयनात्मक ध्यान परीक्षण (विषम संख्या योग ड्रिल)' : 'Selective Attention Battery: Odd Numbers Sum'}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              {language === 'hi'
                ? 'नियम: आपको संख्याओं की एक श्रृंखला दिखाई जाएगी। आपको केवल विषम संख्याओं (1, 3, 5, 7, 9) को जोड़ना है और सम संख्याओं को पूरी तरह छोड़ना है।'
                : 'Instructions: Add only the odd numbers (1, 3, 5, 7, 9) shown in the sequence. Ignore all even numbers (2, 4, 6, 8, 0).'}
            </p>
            <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/30 text-purple-900 dark:text-purple-300 text-xs font-semibold">
              Time Allowed: 120 Seconds • 5 Fast Questions • Target T-Score: 42+
            </div>
            <button
              onClick={handleStart}
              className="py-3 px-8 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm transition-all shadow-md cursor-pointer"
            >
              {language === 'hi' ? 'बैटरी परीक्षण प्रारंभ करें' : 'Start Battery Drill'}
            </button>
          </div>
        ) : isTestActive ? (
          <div className="space-y-6">
            {/* Battery Header & Timer */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Question {currentQIndex + 1} of {SAMPLE_CBAT_QUESTIONS.length}
              </span>
              <div className="flex items-center gap-1.5 font-mono text-sm font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/50 px-3 py-1.5 rounded-xl border border-purple-200 dark:border-purple-800">
                <Timer className="w-4 h-4" />
                <span>
                  {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
                </span>
              </div>
            </div>

            {/* Question Prompt */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                {currentQ.prompt}
              </h3>

              {currentQ.type === 'odd_sum' && currentQ.numbers && (
                <div className="flex flex-wrap gap-3 justify-center py-6 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800">
                  {currentQ.numbers.map((num, i) => (
                    <div
                      key={i}
                      className="w-12 h-14 sm:w-14 sm:h-16 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 flex items-center justify-center text-xl sm:text-2xl font-black text-slate-900 dark:text-white shadow-xs"
                    >
                      {num}
                    </div>
                  ))}
                </div>
              )}

              {currentQ.type === 'classification' && currentQ.options && (
                <div className="grid grid-cols-2 gap-3 py-4">
                  {currentQ.options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => setInputVal(String(idx))}
                      className={`p-4 rounded-xl border font-mono font-bold text-base transition-all ${
                        inputVal === String(idx)
                          ? 'border-purple-600 bg-purple-50 dark:bg-purple-950/40 text-purple-600'
                          : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}

              {/* Number Input if odd_sum */}
              {currentQ.type === 'odd_sum' && (
                <div className="flex items-center gap-3 max-w-xs mx-auto">
                  <input
                    type="number"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    placeholder="Enter Sum..."
                    autoFocus
                    className="w-full text-center text-xl font-bold p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 outline-none focus:border-purple-600"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleNextQuestion();
                    }}
                  />
                </div>
              )}

              <div className="flex justify-end pt-4">
                <button
                  onClick={handleNextQuestion}
                  className="py-2.5 px-6 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <span>{currentQIndex === SAMPLE_CBAT_QUESTIONS.length - 1 ? 'Finish Battery' : 'Next Question'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Results View */
          results && (
            <div className="space-y-6 text-center py-4">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto ${
                  results.passed ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-950/50' : 'bg-red-100 text-red-600 dark:bg-red-950/50'
                }`}
              >
                {results.passed ? <CheckCircle className="w-8 h-8" /> : <AlertTriangle className="w-8 h-8" />}
              </div>

              <div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                    results.passed ? 'bg-emerald-600 text-white' : 'bg-red-600 text-white'
                  }`}
                >
                  {results.passed ? 'T-Score Cutoff Cleared (Qualified)' : 'Below 42 T-Score (Needs Practice)'}
                </span>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-3">
                  Calculated T-Score: <span className="text-purple-600 dark:text-purple-400">{results.tScore}</span>
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Raw Score: {results.raw} out of {results.total} correct
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 text-xs text-slate-600 dark:text-slate-300 max-w-lg mx-auto text-left space-y-2">
                <p className="font-bold text-slate-800 dark:text-slate-100">Official RDSO Lucknow CBAT Rules:</p>
                <ul className="list-disc pl-4 space-y-1 text-[11px] text-slate-500 dark:text-slate-400">
                  <li>In real CBAT, candidates must qualify in EACH of the 5 test batteries independently with minimum 42 T-Score.</li>
                  <li>No relaxation in T-Score is permitted for SC, ST, OBC, EWS, or Ex-Servicemen.</li>
                  <li>In final merit, CBT-2 carries 70% weightage and CBAT carries 30% weightage for Station Master.</li>
                </ul>
              </div>

              <button
                onClick={handleStart}
                className="py-2.5 px-6 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 cursor-pointer shadow-md"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retry Battery Drill</span>
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
};
