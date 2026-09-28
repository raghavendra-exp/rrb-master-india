import React, { useState, useEffect, useRef } from 'react';
import { Keyboard, Timer, RotateCcw, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Breadcrumb } from '../layout/Breadcrumb';

const SAMPLE_TEXTS = {
  en: [
    'Indian Railways is the fourth largest national railway system in the world by size. It manages thousands of passenger trains daily and connects remote geographical regions. Candidates aspiring for clerical and typist posts under Non Technical Popular Categories must acquire steady typing speed and high precision to handle administrative correspondence and computer operations efficiently. Regular practice with standard keyboard layouts develops muscle memory and minimizes keystroke errors under timed examination pressure.',
    'Modernization of railway signalling and track infrastructure is taking place across all eighteen railway zones. The indigenous automatic train protection system Kavach prevents collisions and ensures passenger safety at high speeds. Station masters and clerical staff work round the clock to maintain seamless movement of goods freight trains and express passenger services while adhering to strict safety protocols.',
  ],
  hi: [
    'भारतीय रेल विश्व की विशालतम रेल प्रणालियों में से एक है। यह प्रतिदिन करोड़ों यात्रियों को उनके गंतव्य तक पहुंचाती है। गैर तकनीकी लोकप्रिय श्रेणियों के अंतर्गत लिपिकीय पदों हेतु कंप्यूटर पर टंकण गति और शुद्धता अनिवार्य है। अभ्यर्थियों को नियमित अभ्यास द्वारा अपनी गति और शुद्धता में सुधार करना चाहिए ताकि परीक्षा के समय किसी प्रकार का दबाव न रहे।',
  ],
};

export const TypingLab: React.FC<{ onNavigate: (tab: string) => void }> = ({ onNavigate }) => {
  const { language } = useLanguage();

  const [testLang, setTestLang] = useState<'en' | 'hi'>('en');
  const [targetDuration, setTargetDuration] = useState<number>(60); // 60s for quick test, 300s, 600s
  const selectedTextIndex = 0;
  const [typedInput, setTypedInput] = useState<string>('');
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [strictBackspace, setStrictBackspace] = useState<boolean>(false);

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const timerRef = useRef<number | null>(null);

  const passage = SAMPLE_TEXTS[testLang][selectedTextIndex] || SAMPLE_TEXTS[testLang][0];

  useEffect(() => {
    setTimeLeft(targetDuration);
    setTypedInput('');
    setIsActive(false);
    setIsFinished(false);
  }, [targetDuration, testLang, selectedTextIndex]);

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      timerRef.current = window.setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            setIsActive(false);
            setIsFinished(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, timeLeft]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (isFinished) return;
    if (!isActive && typedInput.length === 0) {
      setIsActive(true);
    }
    setTypedInput(e.target.value);
  };

  const handleReset = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setTimeLeft(targetDuration);
    setTypedInput('');
    setIsActive(false);
    setIsFinished(false);
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  // Calculations according to official RRB formula
  const wordsTyped = typedInput.trim().split(/\s+/).filter(Boolean).length;
  const passageWords = passage.trim().split(/\s+/);
  const typedWordsList = typedInput.trim().split(/\s+/);

  let errorWordsCount = 0;
  typedWordsList.forEach((w, idx) => {
    if (passageWords[idx] !== w) {
      errorWordsCount++;
    }
  });

  const minutesElapsed = (targetDuration - timeLeft) / 60 || 0.01;
  const grossWPM = Math.round(wordsTyped / minutesElapsed) || 0;

  // Official RRB rule: 5% of total words typed are ignored as permissible error
  const permissibleErrors = Math.round(wordsTyped * 0.05);
  const excessErrors = Math.max(0, errorWordsCount - permissibleErrors);
  // RRB Formula: Penalty is 10 times the excess errors
  const penalizedWords = Math.max(0, wordsTyped - excessErrors * 10);
  const netWPM = Math.max(0, Math.round(penalizedWords / (targetDuration / 60))) || 0;

  const accuracy = wordsTyped > 0 ? Math.max(0, Math.round(((wordsTyped - errorWordsCount) / wordsTyped) * 100)) : 100;
  const requiredSpeed = testLang === 'en' ? 30 : 25;
  const isPassed = netWPM >= requiredSpeed && accuracy >= 85;

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <Breadcrumb
        items={[
          { label: language === 'hi' ? 'विशेष दक्षता' : 'Specialized Labs' },
          { label: language === 'hi' ? 'आरआरबी टाइपिंग स्पीड लैब' : 'RRB Typing Speed Lab' },
        ]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-900 via-blue-900 to-slate-900 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Keyboard className="w-3.5 h-3.5" />
            Official RRB NTPC Typing Skill Test Protocol
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {language === 'hi' ? 'आरआरबी टाइपिंग स्पीड टेस्ट लैब' : 'RRB NTPC Typing Speed Lab'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
            {language === 'hi'
              ? 'आधिकारिक आरआरबी 5% छूट नियम और 10 गुना जुर्माना सूत्र पर आधारित। अंग्रेजी न्यूनतम 30 WPM / हिंदी न्यूनतम 25 WPM।'
              : 'Based on official RRB formula (5% error relaxation, 10x penalty for excess errors). English: 30 WPM / Hindi: 25 WPM.'}
          </p>
        </div>

        {/* Live Speed Stats Badge */}
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20 shrink-0">
          <div className="text-center px-2">
            <div className="text-xs text-blue-200 uppercase font-semibold">Net Speed</div>
            <div className="text-2xl font-black text-amber-400">{netWPM} <span className="text-xs font-normal text-white">WPM</span></div>
          </div>
          <div className="w-px h-8 bg-white/20" />
          <div className="text-center px-2">
            <div className="text-xs text-blue-200 uppercase font-semibold">Accuracy</div>
            <div className="text-2xl font-black text-emerald-400">{accuracy}%</div>
          </div>
        </div>
      </div>

      {/* Controls & Mode Selection */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {/* Language choice */}
          <div className="flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800">
            <button
              onClick={() => setTestLang('en')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                testLang === 'en' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              English (30 WPM)
            </button>
            <button
              onClick={() => setTestLang('hi')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                testLang === 'hi' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              हिंदी (25 WPM)
            </button>
          </div>

          {/* Duration choice */}
          <div className="flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800">
            {[60, 180, 600].map((sec) => (
              <button
                key={sec}
                onClick={() => setTargetDuration(sec)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  targetDuration === sec ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-xs' : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                {sec === 600 ? '10 Mins (Official)' : `${sec / 60} Min`}
              </button>
            ))}
          </div>
        </div>

        {/* Timer & Reset */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-mono text-sm font-bold px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
            <Timer className="w-4 h-4 text-blue-600" />
            <span>
              {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
            </span>
          </div>

          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'रीसेट' : 'Reset'}</span>
          </button>
        </div>
      </div>

      {/* Typing Playground */}
      <div className="grid grid-cols-1 gap-6">
        {/* Source Passage */}
        <div className="bg-slate-50 dark:bg-slate-900/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-800">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center justify-between">
            <span>{language === 'hi' ? 'टाइप करने हेतु मूल गद्यांश' : 'Master Typing Passage (CEN Official Style)'}</span>
            <span className="text-[11px] font-mono text-slate-400">{passage.split(/\s+/).length} Words</span>
          </div>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300 font-serif select-none">
            {passage}
          </p>
        </div>

        {/* Input Box */}
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
              {language === 'hi' ? 'यहाँ टाइप करना शुरू करें (टाइप करते ही टाइमर प्रारंभ हो जाएगा)' : 'Start typing below (Timer starts automatically on first keypress):'}
            </span>
            <label className="flex items-center gap-1.5 text-xs text-slate-500 cursor-pointer">
              <input
                type="checkbox"
                checked={strictBackspace}
                onChange={(e) => setStrictBackspace(e.target.checked)}
                className="rounded text-blue-600"
              />
              <span>{language === 'hi' ? 'बैकस्पेस प्रतिबंध' : 'Disable Backspace (TCS Strict Mode)'}</span>
            </label>
          </div>

          <textarea
            ref={inputRef}
            rows={5}
            value={typedInput}
            onChange={handleInputChange}
            disabled={isFinished}
            onKeyDown={(e) => {
              if (strictBackspace && e.key === 'Backspace') {
                e.preventDefault();
              }
            }}
            placeholder={
              testLang === 'hi'
                ? 'यहाँ हिंदी में टाइप करें... (Press any key to begin)'
                : 'Type the passage here exactly as shown above...'
            }
            className="w-full p-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 text-sm sm:text-base leading-relaxed focus:border-blue-500 outline-none font-mono resize-none shadow-inner"
          />
        </div>
      </div>

      {/* Result Card when Finished or in Progress */}
      {(isFinished || typedInput.length > 50) && (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              {language === 'hi' ? 'आधिकारिक आरआरबी मूल्यांकन रिपोर्ट' : 'Official RRB Typing Performance Analysis'}
            </h3>
            {isFinished && (
              <span
                className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                  isPassed ? 'bg-emerald-600 text-white' : 'bg-red-600 text-white'
                }`}
              >
                {isPassed ? (language === 'hi' ? 'सफल (QUALIFIED)' : 'QUALIFIED') : (language === 'hi' ? 'असफल (NOT QUALIFIED)' : 'NOT QUALIFIED')}
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <div className="text-xs text-slate-400 font-medium">Gross Speed</div>
              <div className="text-xl font-bold text-slate-800 dark:text-slate-100 mt-1">{grossWPM} WPM</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <div className="text-xs text-slate-400 font-medium">Errors Counted</div>
              <div className="text-xl font-bold text-red-500 mt-1">{errorWordsCount}</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <div className="text-xs text-slate-400 font-medium">5% Free Mistakes</div>
              <div className="text-xl font-bold text-emerald-600 mt-1">{permissibleErrors}</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <div className="text-xs text-slate-400 font-medium">Net Evaluated WPM</div>
              <div className="text-xl font-black text-blue-600 dark:text-blue-400 mt-1">{netWPM}</div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/30 text-xs text-blue-900 dark:text-blue-300 leading-relaxed">
            <strong>Official RRB Rule Summary:</strong> For Junior Clerk, Accounts Clerk, Senior Clerk, and JAA posts,
            candidates must attain a net speed of 30 WPM in English or 25 WPM in Hindi. Up to 5% mistakes of total words
            typed are forgiven. Beyond 5%, each mistake incurs a penalty of 10 words subtracted from the total word count.
          </div>
        </div>
      )}
    </div>
  );
};
