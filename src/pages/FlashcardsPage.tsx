import React, { useState } from 'react';
import { Sparkles, RotateCw, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { FLASHCARD_ITEMS } from '../data/rrb/flashcards';

export const FlashcardsPage: React.FC<{ onNavigate: (tab: string) => void }> = ({ onNavigate }) => {
  const { language } = useLanguage();

  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [knownCards, setKnownCards] = useState<Record<string, boolean>>({});

  const filteredCards = FLASHCARD_ITEMS.filter((c) => {
    if (selectedCategory === 'ALL') return true;
    return c.category === selectedCategory;
  });

  const currentCard = filteredCards[currentIndex] || filteredCards[0];

  const handleNext = () => {
    setIsFlipped(false);
    if (currentIndex < filteredCards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    setIsFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const markKnown = (known: boolean) => {
    if (!currentCard) return;
    setKnownCards((prev) => ({ ...prev, [currentCard.id]: known }));
    handleNext();
  };

  const knownCount = Object.values(knownCards).filter(Boolean).length;
  const categories = ['ALL', 'Railway GK', 'General Science', 'Static GK', 'Formulas', 'Technical', 'Current Affairs'];

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Breadcrumb
        items={[
          { label: language === 'hi' ? 'तैयारी उपकरण' : 'Preparation Tools' },
          { label: language === 'hi' ? 'फ्लैशकार्ड्स (SRS)' : 'Flashcards (SRS)' },
        ]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white shadow-xl space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          Spaced Repetition System (SRS)
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          {language === 'hi' ? 'आरआरबी परीक्षा फ्लैशकार्ड्स' : 'RRB Rapid Flashcards'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
          {language === 'hi'
            ? 'वैज्ञानिक स्मरण तकनीक: कार्ड पर क्लिक करके उत्तर देखें और अपनी स्मृति का परीक्षण करें।'
            : 'Master essential railway facts, science concepts, and formulas through active recall.'}
        </p>
      </div>

      {/* Categories Bar */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Flashcard Area */}
      {currentCard && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400 font-semibold px-2">
            <span>
              Card {currentIndex + 1} of {filteredCards.length} {knownCount > 0 && `(Mastered: ${knownCount})`}
            </span>
            <span className="font-mono text-blue-600 dark:text-blue-400">{currentCard.category}</span>
          </div>

          {/* Card Container with Click to Flip */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="w-full min-h-[260px] sm:min-h-[300px] rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 p-8 shadow-lg flex flex-col justify-between cursor-pointer transition-all hover:border-blue-500 relative select-none"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 uppercase">
                {isFlipped ? 'Answer (Click to Flip Back)' : 'Question (Click to Reveal)'}
              </span>
              <RotateCw className="w-4 h-4 text-slate-400" />
            </div>

            <div className="py-6 text-center space-y-3">
              <p className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-relaxed">
                {isFlipped ? currentCard.back[language] : currentCard.front[language]}
              </p>
              {isFlipped && currentCard.notes && (
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-lg mx-auto pt-2 border-t border-slate-100 dark:border-slate-800">
                  {currentCard.notes[language]}
                </p>
              )}
            </div>

            <div className="text-center text-[11px] text-slate-400">
              {isFlipped ? 'Tap anywhere to hide answer' : 'Tap to reveal answer'}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between gap-3 pt-2">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-700 disabled:opacity-40 text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={() => markKnown(false)}
                className="py-2.5 px-4 rounded-xl bg-red-100 dark:bg-red-950/60 hover:bg-red-200 text-red-700 dark:text-red-300 text-xs font-bold transition-colors"
              >
                Needs Revision
              </button>
              <button
                onClick={() => markKnown(true)}
                className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors"
              >
                <CheckCircle className="w-4 h-4" />
                <span>I Knew This</span>
              </button>
            </div>

            <button
              onClick={handleNext}
              className="py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
