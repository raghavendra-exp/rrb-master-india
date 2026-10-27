import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Book,
  FileText,
  Calculator,
  Brain,
  FlaskConical,
  Globe,
  Train,
  Wrench,
  Zap,
  Layers,
  ShieldCheck,
  ArrowLeft,
  ArrowRight,
  Search,
  Sparkles,
  Clock,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Lightbulb,
  Maximize2,
  ChevronRight,
  SlidersHorizontal,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import type { ExamId } from '../types';
import {
  BOOK_CHAPTERS,
  BOOK_SECTIONS,
  type BookChapterMetadata,
  getChaptersForExam,
} from '../data/rrb/bookChapters';
import { TOPIC_STUDY_GUIDES, type TopicStudyGuide } from '../data/rrb/topicStudyNotes';
import { ACTUAL_BOOK_PYQS } from '../data/rrb/actualBookPYQs';

interface BookTutorialsPageProps {
  onNavigate: (tab: string) => void;
  initialTopicId?: string;
  initialExamId?: ExamId | 'ALL';
}

export const BookTutorialsPage: React.FC<BookTutorialsPageProps> = ({
  onNavigate,
  initialTopicId,
  initialExamId = 'ALL',
}) => {
  const { t, language } = useLanguage();

  // Active state filters
  const [selectedExam, setSelectedExam] = useState<ExamId | 'ALL'>(initialExamId);
  const [selectedSection, setSelectedSection] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Active reading chapter (null means Table of Contents view)
  const [activeChapterNumber, setActiveChapterNumber] = useState<number | null>(() => {
    if (initialTopicId) {
      const match = BOOK_CHAPTERS.find((ch) => ch.topicId === initialTopicId);
      return match ? match.chapterNumber : null;
    }
    return null;
  });

  // Reading options
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [imageModalUrl, setImageModalUrl] = useState<string | null>(null);

  // Practice quiz interactive answers state: { [questionId: string]: number }
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});

  // Filtered chapters list
  const filteredChapters = useMemo(() => {
    let list = BOOK_CHAPTERS;
    if (selectedExam !== 'ALL') {
      list = getChaptersForExam(selectedExam);
    }
    if (selectedSection !== 'ALL') {
      list = list.filter((ch) => ch.sectionCategory === selectedSection);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((ch) => {
        const guide = TOPIC_STUDY_GUIDES[ch.topicId];
        return (
          ch.topicId.toLowerCase().includes(q) ||
          ch.sectionTitle.en.toLowerCase().includes(q) ||
          ch.sectionTitle.hi.toLowerCase().includes(q) ||
          (guide && guide.title.en.toLowerCase().includes(q)) ||
          (guide && guide.title.hi.toLowerCase().includes(q)) ||
          ch.tags.some((tag) => tag.toLowerCase().includes(q))
        );
      });
    }
    return list;
  }, [selectedExam, selectedSection, searchQuery]);

  // Current active chapter metadata and study guide
  const activeChapterMeta = useMemo(() => {
    if (!activeChapterNumber) return null;
    return BOOK_CHAPTERS.find((ch) => ch.chapterNumber === activeChapterNumber) || null;
  }, [activeChapterNumber]);

  const activeStudyGuide: TopicStudyGuide | null = useMemo(() => {
    if (!activeChapterMeta) return null;
    return TOPIC_STUDY_GUIDES[activeChapterMeta.topicId] || null;
  }, [activeChapterMeta]);

  // Find practice questions for this chapter from ACTUAL_BOOK_PYQS
  const chapterPracticeQuestions = useMemo(() => {
    if (!activeChapterMeta) return [];
    // Match by topic, tags or subject
    const matches = ACTUAL_BOOK_PYQS.filter((q) => {
      const hasTagMatch = q.tags.some((t) => activeChapterMeta.tags.includes(t));
      const hasTopicMatch =
        q.topic.toLowerCase().includes(activeChapterMeta.topicId) ||
        activeChapterMeta.tags.some((t) => q.topic.toLowerCase().includes(t));
      return hasTagMatch || hasTopicMatch;
    });

    if (matches.length >= 3) {
      return matches.slice(0, 6);
    }
    // Fallback: match by subject category
    const categoryMatches = ACTUAL_BOOK_PYQS.filter((q) => {
      if (activeChapterMeta.sectionCategory === 'math') return q.subject === 'Mathematics';
      if (activeChapterMeta.sectionCategory === 'reasoning') return q.subject === 'Reasoning';
      if (activeChapterMeta.sectionCategory === 'science') return q.subject === 'General Science';
      if (activeChapterMeta.sectionCategory === 'railways') return q.subject === 'General Awareness';
      return false;
    });
    return categoryMatches.slice(0, 5);
  }, [activeChapterMeta]);

  // Navigation handlers
  const handleNextChapter = () => {
    if (!activeChapterNumber) return;
    const nextChapter = BOOK_CHAPTERS.find((ch) => ch.chapterNumber === activeChapterNumber + 1);
    if (nextChapter) {
      setActiveChapterNumber(nextChapter.chapterNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevChapter = () => {
    if (!activeChapterNumber) return;
    const prevChapter = BOOK_CHAPTERS.find((ch) => ch.chapterNumber === activeChapterNumber - 1);
    if (prevChapter) {
      setActiveChapterNumber(prevChapter.chapterNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderSectionIcon = (cat: BookChapterMetadata['sectionCategory']) => {
    switch (cat) {
      case 'math':
        return <Calculator className="w-4 h-4 text-blue-500" />;
      case 'reasoning':
        return <Brain className="w-4 h-4 text-indigo-500" />;
      case 'science':
        return <FlaskConical className="w-4 h-4 text-emerald-500" />;
      case 'railways':
        return <Train className="w-4 h-4 text-amber-500" />;
      case 'gk':
        return <Globe className="w-4 h-4 text-purple-500" />;
      case 'engineering':
        return <Wrench className="w-4 h-4 text-rose-500" />;
      case 'alp-trade':
        return <Zap className="w-4 h-4 text-teal-500" />;
      case 'operations':
        return <Layers className="w-4 h-4 text-cyan-500" />;
      case 'rpf':
        return <ShieldCheck className="w-4 h-4 text-red-500" />;
      default:
        return <BookOpen className="w-4 h-4 text-blue-500" />;
    }
  };

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'large':
        return 'text-base sm:text-lg leading-relaxed';
      case 'xlarge':
        return 'text-lg sm:text-xl leading-loose';
      case 'normal':
      default:
        return 'text-sm sm:text-base leading-relaxed';
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-12">
      <Breadcrumb
        items={[
          { label: language === 'hi' ? 'पाठ्यक्रम एवं अध्ययन' : 'Curriculum & Study' },
          {
            label:
              language === 'hi'
                ? 'आरआरबी मास्टर डिजिटल पाठ्यपुस्तक'
                : 'RRB Master Digital Textbook',
          },
          ...(activeChapterMeta
            ? [
                {
                  label: `Ch.${activeChapterMeta.chapterNumber}: ${
                    language === 'hi'
                      ? activeStudyGuide?.title.hi || activeChapterMeta.sectionTitle.hi
                      : activeStudyGuide?.title.en || activeChapterMeta.sectionTitle.en
                  }`,
                },
              ]
            : []),
        ]}
        onNavigate={onNavigate}
      />

      {/* ========================================================================= */}
      {/* 1. VIEW MODE A: TABLE OF CONTENTS & CHAPTER SELECTION GRID               */}
      {/* ========================================================================= */}
      {!activeChapterNumber && (
        <div className="space-y-6">
          {/* Hero Banner */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white shadow-2xl relative overflow-hidden border border-blue-900/50 space-y-4">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
            <div className="relative space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-500/30">
                  <Book className="w-3.5 h-3.5" />
                  Official RRB Zero-Books Comprehensive Textbook (46 Chapters)
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
                  <Sparkles className="w-3 h-3" />
                  Section-Wise • Exam-Wise • Multi-Tier Solved Proofs
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
                {language === 'hi'
                  ? 'आरआरबी मास्टर डिजिटल पाठ्यपुस्तक: विस्तृत अध्याय, सूत्र एवं सिद्धान्त'
                  : 'RRB Master Digital Textbook: Comprehensive Chapters & Theory'}
              </h1>

              <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
                {language === 'hi'
                  ? 'किसी भी अतिरिक्त भौतिक पुस्तक की आवश्यकता के बिना प्रथम प्रयास में परीक्षा उत्तीर्ण करने हेतु निर्मित आधिकारिक पाठ्यपुस्तक। प्रत्येक अध्याय में गहन अवधारणात्मक सिद्धांत, गणितीय उपपत्तियां, 10-सेकंड टॉपर शॉर्टकट, परीक्षक के भ्रम (-0.33 अंक बचाव), एवं वास्तविक परीक्षा प्रश्नों का संग्रह सम्मिलित है।'
                  : 'An authoritative, self-contained digital textbook engineered for first-attempt success without needing any physical books. Every chapter integrates conceptual theory, mathematical proofs, 10-second topper shortcuts, examiner trap warnings, and authentic practice questions.'}
              </p>

              {/* Search Bar inside Hero */}
              <div className="relative max-w-2xl pt-2">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-5.5 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    language === 'hi'
                      ? 'अध्याय, सूत्र, विषय अथवा कीवर्ड खोजें (उदा. BODMAS, KAVACH, Levers, Euler)...'
                      : 'Search chapters, formulas, theorems, or keywords (e.g. BODMAS, KAVACH, Levers, Euler)...'
                  }
                  className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white/10 hover:bg-white/15 focus:bg-slate-900 border border-white/20 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Exam Selector Filter Pills */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>{language === 'hi' ? 'परीक्षा अनुसार फ़िल्टर करें:' : 'Filter by Railway Exam:'}</span>
              </span>
              <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                {filteredChapters.length} / 46 {language === 'hi' ? 'अध्याय उपलब्ध' : 'Chapters Available'}
              </span>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
              {[
                { id: 'ALL', label: { en: 'All 46 Chapters (Master Volume)', hi: 'सभी 46 अध्याय (मास्टर वॉल्यूम)' } },
                { id: 'rrb-ntpc', label: { en: 'NTPC Graduate (Levels 5 & 6)', hi: 'एनटीपीसी स्नातक' } },
                { id: 'rrb-group-d', label: { en: 'Group D (Level-1 Posts)', hi: 'ग्रुप डी (लेवल-1)' } },
                { id: 'rrb-je', label: { en: 'Junior Engineer (CEN 04/2026)', hi: 'आरआरबी जेई (तकनीकी)' } },
                { id: 'rrb-alp', label: { en: 'ALP (Assistant Loco Pilot)', hi: 'एएलपी (लोको पायलट)' } },
                { id: 'rrb-technician', label: { en: 'Technicians (Gr I & III)', hi: 'तकनीशियन' } },
                { id: 'rrb-station-master', label: { en: 'Station Master & Ops', hi: 'स्टेशन मास्टर' } },
                { id: 'rrb-rpf', label: { en: 'RPF SI & Constable', hi: 'आरपीएफ पुलिस' } },
              ].map((exam) => (
                <button
                  key={exam.id}
                  onClick={() => setSelectedExam(exam.id as ExamId | 'ALL')}
                  className={`px-3.5 py-2 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer ${
                    selectedExam === exam.id
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {t(exam.label)}
                </button>
              ))}
            </div>
          </div>

          {/* Section Domain Filters */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
            <button
              onClick={() => setSelectedSection('ALL')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                selectedSection === 'ALL'
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }`}
            >
              {language === 'hi' ? 'सभी विषय खंड' : 'All Subject Domains'}
            </button>
            {BOOK_SECTIONS.map((sec) => (
              <button
                key={sec.id}
                onClick={() => setSelectedSection(sec.id)}
                className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedSection === sec.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                }`}
              >
                {renderSectionIcon(sec.id)}
                <span>{t(sec.title)}</span>
              </button>
            ))}
          </div>

          {/* 46 Chapters Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredChapters.map((ch) => {
              const guide = TOPIC_STUDY_GUIDES[ch.topicId];
              return (
                <div
                  key={ch.chapterNumber}
                  onClick={() => {
                    setActiveChapterNumber(ch.chapterNumber);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-blue-500/40 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group space-y-3"
                >
                  <div className="space-y-2.5">
                    {/* Chapter & Domain Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-6 h-6 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-mono font-black text-xs flex items-center justify-center">
                          {ch.chapterNumber}
                        </span>
                        <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          {renderSectionIcon(ch.sectionCategory)}
                          <span>{t(ch.sectionTitle)}</span>
                        </span>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                        {ch.difficulty}
                      </span>
                    </div>

                    {/* Chapter Title */}
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                      {guide ? t(guide.title) : t(ch.sectionTitle)}
                    </h3>

                    {/* Conceptual Summary Snippet */}
                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                      {guide
                        ? t(guide.conceptualTheory.deepExplanation).substring(0, 140) + '...'
                        : 'Comprehensive textbook chapter detailing core principles, formulas and proofs.'}
                    </p>
                  </div>

                  {/* Chapter Footer Metadata */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1 font-mono">
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span>{ch.estimatedMinutes} Mins Read</span>
                      </span>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                        {t(ch.examWeightage)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-0.5 transition-transform">
                      <span>{language === 'hi' ? 'अध्याय पढ़ें' : 'Read Chapter'}</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. VIEW MODE B: FULL BOOK CHAPTER READER                                 */}
      {/* ========================================================================= */}
      {activeChapterNumber && activeChapterMeta && activeStudyGuide && (
        <div className="space-y-6">
          {/* Top Sticky Reading Controls Bar */}
          <div className="sticky top-16 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={() => {
                setActiveChapterNumber(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'विषय-सूची पर लौटें' : 'Table of Contents'}</span>
            </button>

            {/* Chapter Selector Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 hidden sm:inline">
                {language === 'hi' ? 'अध्याय:' : 'Chapter:'}
              </span>
              <select
                value={activeChapterNumber}
                onChange={(e) => {
                  setActiveChapterNumber(Number(e.target.value));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-bold p-1.5 px-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              >
                {BOOK_CHAPTERS.map((ch) => (
                  <option key={ch.chapterNumber} value={ch.chapterNumber}>
                    Ch.{ch.chapterNumber}: {ch.topicId}
                  </option>
                ))}
              </select>
            </div>

            {/* Font Size & Jump Actions */}
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-xl p-0.5 text-xs font-bold text-slate-600 dark:text-slate-400">
                <button
                  onClick={() => setFontSize('normal')}
                  className={`px-2 py-1 rounded-lg transition-all cursor-pointer ${
                    fontSize === 'normal' ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-xs' : ''
                  }`}
                  title="Normal Text Size"
                >
                  A
                </button>
                <button
                  onClick={() => setFontSize('large')}
                  className={`px-2 py-1 rounded-lg transition-all cursor-pointer ${
                    fontSize === 'large' ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-xs' : ''
                  }`}
                  title="Large Text Size"
                >
                  A+
                </button>
                <button
                  onClick={() => setFontSize('xlarge')}
                  className={`px-2 py-1 rounded-lg transition-all cursor-pointer ${
                    fontSize === 'xlarge' ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-xs' : ''
                  }`}
                  title="Extra Large Text Size"
                >
                  A++
                </button>
              </div>

              {/* Prev / Next Header Buttons */}
              <button
                onClick={handlePrevChapter}
                disabled={activeChapterNumber <= 1}
                className="p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 disabled:opacity-30 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                title="Previous Chapter"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleNextChapter}
                disabled={activeChapterNumber >= BOOK_CHAPTERS.length}
                className="p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 disabled:opacity-30 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                title="Next Chapter"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Chapter Main Container */}
          <article className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
            {/* Chapter Header Banner */}
            <div className="space-y-3 border-b border-slate-200 dark:border-slate-800 pb-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-black text-xs uppercase tracking-wider font-mono">
                    Chapter {activeChapterMeta.chapterNumber} of 46
                  </span>
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    {renderSectionIcon(activeChapterMeta.sectionCategory)}
                    <span>{t(activeChapterMeta.sectionTitle)}</span>
                  </span>
                </div>

                <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/20">
                  {t(activeChapterMeta.examWeightage)}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-snug">
                {t(activeStudyGuide.title)}
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 pt-1">
                <span className="flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
                  <Clock className="w-3.5 h-3.5 text-blue-500" />
                  <span>Est. Study Time: {activeStudyGuide.recommendedStudyTime}</span>
                </span>
                <span>•</span>
                <span>Target Exams: {t(activeStudyGuide.targetExam)}</span>
                <span>•</span>
                <span>Difficulty: {activeChapterMeta.difficulty}</span>
              </div>
            </div>

            {/* Quick Section Anchors Menu */}
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 flex flex-wrap gap-2 text-xs font-bold">
              <a href="#theory" className="px-3 py-1 rounded-xl bg-white dark:bg-slate-700 shadow-2xs hover:text-blue-600 transition-colors">
                1. Comprehensive Theory
              </a>
              <a href="#formulas" className="px-3 py-1 rounded-xl bg-white dark:bg-slate-700 shadow-2xs hover:text-blue-600 transition-colors">
                2. Formulas & Theorems ({activeStudyGuide.formulasAndLaws.length})
              </a>
              {activeStudyGuide.blueprintImage && (
                <a href="#blueprint" className="px-3 py-1 rounded-xl bg-white dark:bg-slate-700 shadow-2xs hover:text-blue-600 transition-colors">
                  3. Technical Blueprint
                </a>
              )}
              <a href="#examples" className="px-3 py-1 rounded-xl bg-white dark:bg-slate-700 shadow-2xs hover:text-blue-600 transition-colors">
                4. Solved Problems & Shortcuts ({activeStudyGuide.workedExamples.length})
              </a>
              <a href="#traps" className="px-3 py-1 rounded-xl bg-white dark:bg-slate-700 shadow-2xs hover:text-blue-600 transition-colors">
                5. Examiner Traps (-0.33)
              </a>
              <a href="#revision" className="px-3 py-1 rounded-xl bg-white dark:bg-slate-700 shadow-2xs hover:text-blue-600 transition-colors">
                6. Revision Blueprint
              </a>
              {chapterPracticeQuestions.length > 0 && (
                <a href="#practice" className="px-3 py-1 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 shadow-2xs hover:text-emerald-800 transition-colors">
                  7. Practice Drill ({chapterPracticeQuestions.length} PYQs)
                </a>
              )}
            </div>

            {/* ========================================================================= */}
            {/* SUBSECTION 1: COMPREHENSIVE TEXTBOOK THEORY & MECHANISMS                  */}
            {/* ========================================================================= */}
            <section id="theory" className="space-y-4 pt-2">
              <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  {t(activeStudyGuide.conceptualTheory.heading)}
                </h2>
              </div>

              {/* In-depth Conceptual Text */}
              <div className={`text-slate-800 dark:text-slate-200 space-y-4 ${getFontSizeClass()}`}>
                <div className="p-5 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 text-blue-950 dark:text-blue-100 leading-relaxed">
                  {t(activeStudyGuide.conceptualTheory.deepExplanation)}
                </div>
              </div>

              {/* Key Mechanisms Callouts */}
              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4 text-amber-500" />
                  <span>{language === 'hi' ? 'महत्वपूर्ण परिचालन क्रियाविधियां एवं नियम:' : 'Key Operational Mechanisms & Governing Principles:'}</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {activeStudyGuide.conceptualTheory.keyMechanisms.map((mech, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-1.5"
                    >
                      <span className="text-[10px] font-black uppercase text-blue-600 dark:text-blue-400 font-mono block">
                        Mechanism {idx + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                        {t(mech)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ========================================================================= */}
            {/* SUBSECTION 2: FORMULAS, LAWS & THEOREMS REPOSITORY                       */}
            {/* ========================================================================= */}
            <section id="formulas" className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                <div className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-emerald-600" />
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                    {language === 'hi' ? 'सूत्र, नियम एवं प्रमेय संग्रह' : 'Mathematical Formulas, Laws & Theorems'}
                  </h2>
                </div>
                <span className="text-xs font-mono font-bold text-slate-400">
                  {activeStudyGuide.formulasAndLaws.length} Formulas
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeStudyGuide.formulasAndLaws.map((f, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-slate-800/70 dark:to-blue-950/20 border border-slate-200 dark:border-slate-700/70 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-blue-600 dark:text-blue-400">
                        {f.label}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">Rule #{i + 1}</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900 text-emerald-400 font-mono text-xs sm:text-sm font-black overflow-x-auto shadow-inner border border-slate-800">
                      <code>{f.expression}</code>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {t(f.explanation)}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* ========================================================================= */}
            {/* SUBSECTION 3: TECHNICAL BLUEPRINTS & INFOGRAPHICS                         */}
            {/* ========================================================================= */}
            {activeStudyGuide.blueprintImage && (
              <section id="blueprint" className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                  <Zap className="w-5 h-5 text-amber-500" />
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                    {language === 'hi' ? 'तकनीकी ब्लूप्रिंट एवं आरेख' : 'Technical Schematics & Blueprint'}
                  </h2>
                </div>

                <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 relative group">
                  <img
                    src={activeStudyGuide.blueprintImage.src}
                    alt={t(activeStudyGuide.blueprintImage.caption)}
                    className="w-full max-h-96 object-contain mx-auto transition-transform group-hover:scale-[1.01]"
                  />
                  <button
                    onClick={() => setImageModalUrl(activeStudyGuide.blueprintImage!.src)}
                    className="absolute top-4 right-4 px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-900 text-white text-xs font-bold flex items-center gap-1.5 backdrop-blur-md cursor-pointer transition-all"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Zoom Full Resolution</span>
                  </button>
                  <div className="p-3 bg-slate-900/90 text-center text-xs text-slate-300 border-t border-slate-800">
                    {t(activeStudyGuide.blueprintImage.caption)}
                  </div>
                </div>
              </section>
            )}

            {/* ========================================================================= */}
            {/* SUBSECTION 4: MULTI-TIER SOLVED PROBLEMS & TOPPER SHORTCUTS               */}
            {/* ========================================================================= */}
            <section id="examples" className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                    {language === 'hi' ? 'हल किए गए उदाहरण एवं 10-सेकंड टॉपर शॉर्टकट' : 'Multi-Tier Solved Problems & 10s Topper Hacks'}
                  </h2>
                </div>
                <span className="text-xs font-mono font-bold text-slate-400">
                  {activeStudyGuide.workedExamples.length} Examples
                </span>
              </div>

              <div className="space-y-5">
                {activeStudyGuide.workedExamples.map((ex, index) => (
                  <div
                    key={ex.id || index}
                    className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/80 shadow-xs space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono">
                        {ex.level} • Example {index + 1}
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono">Standard TCS Question Pattern</span>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-relaxed">
                      {t(ex.question)}
                    </h4>

                    {/* Standard Detailed Solution */}
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Standard Step-by-Step Textbook Method:
                      </span>
                      <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed font-sans">
                        {t(ex.standardSolution)}
                      </div>
                    </div>

                    {/* Topper Speed Shortcut Box */}
                    <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 space-y-1">
                      <span className="text-[11px] font-black text-amber-600 dark:text-amber-400 flex items-center gap-1.5 uppercase tracking-wider">
                        <Zap className="w-4 h-4 text-amber-500" />
                        <span>Topper 10-Second Calculation Speed Hack:</span>
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-amber-950 dark:text-amber-200 leading-relaxed">
                        {t(ex.topperShortcut)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ========================================================================= */}
            {/* SUBSECTION 5: EXAMINER TRAPS (-0.33 PENALTY WARNINGS)                     */}
            {/* ========================================================================= */}
            <section id="traps" className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                <AlertTriangle className="w-5 h-5 text-rose-600" />
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  {language === 'hi' ? 'परीक्षक के भ्रम एवं नकारात्मक अंकन (-0.33) से बचाव' : 'Examiner Traps & Negative Marking (-0.33) Avoidance'}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {activeStudyGuide.commonTraps.map((trap, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-red-50/60 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 space-y-1.5"
                  >
                    <span className="text-[10px] font-black uppercase text-red-600 dark:text-red-400 font-mono block">
                      ⚠ Examiner Trap #{idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-red-950 dark:text-red-200 leading-relaxed">
                      {t(trap)}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* ========================================================================= */}
            {/* SUBSECTION 6: FIRST-ATTEMPT REVISION BLUEPRINT                            */}
            {/* ========================================================================= */}
            <section id="revision" className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  {language === 'hi' ? 'प्रथम प्रयास रिविजन ब्लूप्रिंट एवं स्मरण सूत्र' : 'First-Attempt Revision Blueprint & Mnemonics'}
                </h2>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950 text-white space-y-4 border border-blue-900/40 shadow-md">
                <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                  ⚡ 7-Day & 30-Day Memory Retention Checkpoints:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200">
                  {activeStudyGuide.quickRevisionBulletPoints.map((bp, i) => (
                    <div key={i} className="flex items-start gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{t(bp)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ========================================================================= */}
            {/* SUBSECTION 7: AUTHENTIC PRACTICE DRILL (ACTUAL EXAM MCQs)                 */}
            {/* ========================================================================= */}
            {chapterPracticeQuestions.length > 0 && (
              <section id="practice" className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-emerald-600" />
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                      {language === 'hi' ? 'प्रामाणिक पाठ्यपुस्तक अभ्यास प्रश्न' : 'Authentic Textbook Practice Drill'}
                    </h2>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    {chapterPracticeQuestions.length} Questions Cited from YCT / Kiran / Platform
                  </span>
                </div>

                <div className="space-y-5">
                  {chapterPracticeQuestions.map((q, qIndex) => {
                    const selectedOpt = quizAnswers[q.id];
                    const isAnswered = selectedOpt !== undefined;
                    const isCorrect = isAnswered && selectedOpt === q.answerIndex;

                    return (
                      <div
                        key={q.id}
                        className="p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-xs space-y-4"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-mono">
                            Q.{qIndex + 1} • {q.shift || q.year}
                          </span>
                          {q.bookCitation && (
                            <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                              Ref: {q.bookCitation}
                            </span>
                          )}
                        </div>

                        <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-relaxed">
                          {t(q.question)}
                        </h4>

                        {/* Interactive Options */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                          {q.options.map((opt, optIdx) => {
                            let btnStyle =
                              'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-blue-950/30';
                            if (isAnswered) {
                              if (optIdx === q.answerIndex) {
                                btnStyle = 'bg-emerald-500 text-white font-bold border-emerald-600 shadow-xs';
                              } else if (optIdx === selectedOpt) {
                                btnStyle = 'bg-rose-500 text-white font-bold border-rose-600';
                              } else {
                                btnStyle = 'opacity-40 bg-slate-100 dark:bg-slate-800 text-slate-400 border-transparent';
                              }
                            }

                            return (
                              <button
                                key={optIdx}
                                disabled={isAnswered}
                                onClick={() => {
                                  setQuizAnswers((prev) => ({ ...prev, [q.id]: optIdx }));
                                }}
                                className={`p-3 rounded-xl border text-left flex items-start gap-2.5 transition-all cursor-pointer ${btnStyle}`}
                              >
                                <span className="w-5 h-5 rounded-md bg-black/10 flex items-center justify-center font-bold text-xs shrink-0">
                                  {String.fromCharCode(65 + optIdx)}
                                </span>
                                <span>{t(opt)}</span>
                              </button>
                            );
                          })}
                        </div>

                        {/* Feedback & Explanation Box */}
                        {isAnswered && (
                          <div
                            className={`p-4 rounded-xl border space-y-2 ${
                              isCorrect
                                ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-100'
                                : 'bg-rose-50 dark:bg-rose-950/30 border-rose-300 dark:border-rose-800 text-rose-950 dark:text-rose-100'
                            }`}
                          >
                            <div className="flex items-center gap-1.5 font-bold text-xs">
                              {isCorrect ? (
                                <>
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                  <span>Correct Answer! (+1.00 Mark)</span>
                                </>
                              ) : (
                                <>
                                  <XCircle className="w-4 h-4 text-rose-600" />
                                  <span>Incorrect (-0.33 Mark Penalty). Correct Option is ({String.fromCharCode(65 + q.answerIndex)})</span>
                                </>
                              )}
                            </div>

                            <div className="text-xs whitespace-pre-line leading-relaxed pt-1 border-t border-black/10 dark:border-white/10 font-sans">
                              {t(q.explanation)}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Chapter Footer Navigation */}
            <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={handlePrevChapter}
                disabled={activeChapterNumber <= 1}
                className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 disabled:opacity-40 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous Chapter</span>
              </button>

              <button
                onClick={() => onNavigate('mock-test')}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <PlayCircleIcon className="w-4 h-4" />
                <span>Test Topic in Live CBT Mock Exam</span>
              </button>

              <button
                onClick={handleNextChapter}
                disabled={activeChapterNumber >= BOOK_CHAPTERS.length}
                className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 disabled:opacity-40 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>Next Chapter</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </article>
        </div>
      )}

      {/* Image Zoom Modal */}
      {imageModalUrl && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setImageModalUrl(null)}
        >
          <div className="max-w-5xl max-h-[90vh] bg-slate-900 rounded-3xl p-3 border border-white/20 relative">
            <img
              src={imageModalUrl}
              alt="High Resolution Technical Blueprint"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl mx-auto"
            />
            <div className="text-center text-xs text-slate-300 mt-2 font-mono">
              Click anywhere to dismiss high-resolution viewer
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Internal mini icon for button
const PlayCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polygon points="10 8 16 12 10 16 10 8" />
  </svg>
);
