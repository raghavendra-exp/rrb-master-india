import React, { useState } from 'react';
import {
  X,
  BookOpen,
  Book,
  Calculator,
  Zap,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Maximize2,
  Minimize2,
  FileText,
  Clock,
  CheckCircle2,
  Image as ImageIcon,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import type { BilingualText } from '../../types';
import type { SubTopicDetail } from '../../data/rrb/masterTopics';
import {
  TOPIC_STUDY_GUIDES,
  type TopicStudyGuide,
} from '../../data/rrb/topicStudyNotes';

interface TopicStudyReaderModalProps {
  subTopic: SubTopicDetail;
  moduleTitle: BilingualText;
  examTitle: BilingualText;
  onClose: () => void;
  onNavigateToPractice?: (category: string) => void;
  onSelectSubTopic?: (subTopicId: string) => void;
  allSubTopicsInModule?: SubTopicDetail[];
}

export const TopicStudyReaderModal: React.FC<TopicStudyReaderModalProps> = ({
  subTopic,
  moduleTitle,
  examTitle,
  onClose,
  onNavigateToPractice,
  onSelectSubTopic,
  allSubTopicsInModule = [],
}) => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'theory' | 'formulas' | 'examples' | 'traps' | 'blueprint' | 'revision'>('theory');
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [imageZoomed, setImageZoomed] = useState<boolean>(false);

  // Retrieve or generate study guide
  const studyGuide: TopicStudyGuide = React.useMemo(() => {
    if (TOPIC_STUDY_GUIDES[subTopic.id]) {
      return TOPIC_STUDY_GUIDES[subTopic.id];
    }

    // Default intelligent synthesizer based on SubTopic metadata
    const formulasList = (subTopic.formulas || []).map((f, i) => ({
      label: `Key Formula ${i + 1}`,
      expression: f,
      explanation: {
        en: `Standard mathematical model and application rule for ${subTopic.title.en}.`,
        hi: `${subTopic.title.hi} हेतु मानक गणितीय एवं अनुप्रयोग नियम।`,
      },
    }));

    return {
      topicId: subTopic.id,
      title: subTopic.title,
      subjectCategory: moduleTitle,
      targetExam: examTitle,
      recommendedStudyTime: '3.0 Hours',
      blueprintImage: {
        src: './assets/rrb_master_curriculum.jpg',
        caption: {
          en: `Comprehensive Master Architecture Schematic for ${subTopic.title.en}`,
          hi: `${subTopic.title.hi} हेतु व्यापक मास्टर आर्किटेक्चर आरेख`,
        },
      },
      conceptualTheory: {
        heading: {
          en: `Foundational Principles & Examination Scope: ${subTopic.title.en}`,
          hi: `मूल सिद्धांत एवं परीक्षा दायरा: ${subTopic.title.hi}`,
        },
        deepExplanation: subTopic.summary,
        keyMechanisms: subTopic.bulletPoints,
      },
      formulasAndLaws: formulasList,
      workedExamples: [
        {
          id: `${subTopic.id}-ex-auto`,
          level: 'CBT-1 Foundation',
          question: {
            en: `Standard TCS Examination Question: Which fundamental rule or model directly governs the application of ${subTopic.title.en}?`,
            hi: `मानक टीसीएस परीक्षा प्रश्न: कौन सा मूल नियम अथवा मॉडल ${subTopic.title.hi} के अनुप्रयोग को सीधे नियंत्रित करता है?`,
          },
          standardSolution: {
            en: `Step 1: Identify given parameters and apply core domain logic.\nStep 2: Relate to official syllabus weightage: ${subTopic.examRelevance.en}.\nStep 3: Verification ensures complete accuracy without negative marking penalty.`,
            hi: `चरण 1: दिए गए मानकों की पहचान करें और कोर डोमेन लॉजिक लागू करें।\nचरण 2: आधिकारिक पाठ्यक्रम भार से संबंध: ${subTopic.examRelevance.hi}।\nचरण 3: सत्यापन बिना नकारात्मक अंकन के पूर्ण सटीकता सुनिश्चित करता है।`,
          },
          topperShortcut: {
            en: `⚡ Topper 10-Second Shortcut: Eliminate non-conforming choices using unit dimensions and digital root properties. Saves 45 seconds per question!`,
            hi: `⚡ 10-सेकंड टॉपर शॉर्टकट: इकाई आयामों और डिजिटल रूट गुणों का उपयोग करके असंगत विकल्पों को तुरंत बाहर करें।`,
          },
        },
      ],
      commonTraps: [
        {
          en: 'Inadvertent unit mismatch: Ensure all distance, time, and currency units are converted to the same standard SI system before calculation.',
          hi: 'इकाई असंगति: गणना से पहले सुनिश्चित करें कि दूरी, समय और मुद्रा की सभी इकाइयां समान मानक प्रणाली में परिवर्तित हों।',
        },
        {
          en: 'Exam haste penalty: In negative marking exams (-1/3rd mark), never guess without eliminating at least two contradictory options.',
          hi: 'नकारात्मक अंकन: 1/3 अंक की पेनल्टी से बचने के लिए कम से कम 2 विकल्पों को खारिज किए बिना अनुमान न लगाएं।',
        },
      ],
      topperSpeedHacks: [
        {
          en: 'Digital Root Verification: Calculate the sum of digits modulo 9 of the problem statement and match it with the multiple choice options.',
          hi: 'डिजिटल सम विधि: प्रश्न के अंकों का योग (mod 9) निकालें और सीधे सही विकल्प से मिलान करें।',
        },
        {
          en: 'Extreme Value Elimination: The correct option in TCS CBT exams rarely sits at the extreme numerical boundary unless supported by dimensional symmetry.',
          hi: 'चरम मानों को हटाना: टीसीएस सीबीटी में सही उत्तर प्रायः मध्यवर्ती सीमाओं में होता है।',
        },
      ],
      quickRevisionBulletPoints: subTopic.bulletPoints,
      relatedPracticeCategory: moduleTitle.en,
    };
  }, [subTopic, moduleTitle, examTitle]);

  // Find index in current module for Prev / Next navigation
  const currentIndex = allSubTopicsInModule.findIndex((st) => st.id === subTopic.id);
  const prevSubTopic = currentIndex > 0 ? allSubTopicsInModule[currentIndex - 1] : null;
  const nextSubTopic = currentIndex < allSubTopicsInModule.length - 1 ? allSubTopicsInModule[currentIndex + 1] : null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-hidden animate-in fade-in duration-200">
      <div
        className={`bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col transition-all duration-300 overflow-hidden ${
          isFullScreen ? 'w-full h-full rounded-none' : 'w-full max-w-5xl max-h-[92vh]'
        }`}
      >
        {/* Top Header Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="p-2.5 rounded-2xl bg-blue-600 text-white shrink-0 shadow-md shadow-blue-600/30">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 uppercase tracking-wider font-mono">
                  {t(studyGuide.targetExam)}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 font-mono flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Zero-Books Master Edition</span>
                </span>
                <span className="text-[10px] text-slate-500 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{studyGuide.recommendedStudyTime}</span>
                </span>
              </div>
              <h2 className="text-base sm:text-xl font-black text-slate-900 dark:text-white truncate mt-0.5">
                {t(studyGuide.title)}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => {
                onClose();
                window.location.hash = `#/book-tutorials`;
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 hover:bg-blue-600 hover:text-white text-xs font-bold transition-all cursor-pointer"
              title="Open in Full Digital Textbook"
            >
              <Book className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'पाठ्यपुस्तक मोड' : 'Book Mode'}</span>
            </button>
            <button
              onClick={() => setIsFullScreen(!isFullScreen)}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              title={isFullScreen ? 'Exit Full Screen' : 'Full Screen Mode'}
            >
              {isFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              title="Close Reader"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 px-4 sm:px-6 pt-2 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-x-auto shrink-0 scrollbar-none">
          <button
            onClick={() => setActiveTab('theory')}
            className={`px-3.5 py-2.5 text-xs sm:text-sm font-bold flex items-center gap-1.5 border-b-2 transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'theory'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>{language === 'hi' ? 'गहन सिद्धांत' : 'Deep Theory'}</span>
          </button>

          <button
            onClick={() => setActiveTab('formulas')}
            className={`px-3.5 py-2.5 text-xs sm:text-sm font-bold flex items-center gap-1.5 border-b-2 transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'formulas'
                ? 'border-amber-600 text-amber-600 dark:text-amber-400'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>{language === 'hi' ? 'सूत्र व नियम' : 'Formulas & Laws'}</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-200 dark:bg-slate-800 font-mono">
              {studyGuide.formulasAndLaws.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('examples')}
            className={`px-3.5 py-2.5 text-xs sm:text-sm font-bold flex items-center gap-1.5 border-b-2 transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'examples'
                ? 'border-emerald-600 text-emerald-600 dark:text-emerald-400'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Zap className="w-4 h-4" />
            <span>{language === 'hi' ? 'हल सहित उदाहरण' : 'Worked Examples'}</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-mono font-bold">
              {studyGuide.workedExamples.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('traps')}
            className={`px-3.5 py-2.5 text-xs sm:text-sm font-bold flex items-center gap-1.5 border-b-2 transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'traps'
                ? 'border-rose-600 text-rose-600 dark:text-rose-400'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <AlertTriangle className="w-4 h-4" />
            <span>{language === 'hi' ? 'परीक्षा ट्रैप्स व हैक्स' : 'Traps & Hacks'}</span>
          </button>

          {studyGuide.blueprintImage && (
            <button
              onClick={() => setActiveTab('blueprint')}
              className={`px-3.5 py-2.5 text-xs sm:text-sm font-bold flex items-center gap-1.5 border-b-2 transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'blueprint'
                  ? 'border-purple-600 text-purple-600 dark:text-purple-400'
                  : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              <span>{language === 'hi' ? 'इंजीनियरिंग आरेख' : 'Visual Blueprint'}</span>
            </button>
          )}

          <button
            onClick={() => setActiveTab('revision')}
            className={`px-3.5 py-2.5 text-xs sm:text-sm font-bold flex items-center gap-1.5 border-b-2 transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'revision'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>{language === 'hi' ? 'त्वरित पुनरावृत्ति' : 'Quick Revision'}</span>
          </button>
        </div>

        {/* Scrollable Main Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-7 space-y-6">
          {/* TAB 1: DEEP THEORY */}
          {activeTab === 'theory' && (
            <div className="space-y-6 max-w-4xl">
              <div className="p-5 rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-900/50 space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 block">
                  {t(studyGuide.conceptualTheory.heading)}
                </span>
                <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed font-serif">
                  {t(studyGuide.conceptualTheory.deepExplanation)}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>
                    {language === 'hi'
                      ? 'प्रमुख कार्यप्रणाली एवं मुख्य घटक (Core Operational Mechanisms):'
                      : 'Core Operational Mechanisms & Examination Axioms:'}
                  </span>
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {studyGuide.conceptualTheory.keyMechanisms.map((mech, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 shadow-2xs flex items-start gap-3.5"
                    >
                      <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {mIdx + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {t(mech)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Connected Blueprint Mini Preview */}
              {studyGuide.blueprintImage && (
                <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-3 border border-slate-800">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                      <ImageIcon className="w-4 h-4" />
                      <span>Associated Visual Diagram & Engineering Blueprint</span>
                    </span>
                    <button
                      onClick={() => setActiveTab('blueprint')}
                      className="text-xs text-blue-400 hover:text-blue-300 font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <span>View Full Schematic</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div
                    onClick={() => setActiveTab('blueprint')}
                    className="relative rounded-xl overflow-hidden cursor-pointer group h-40 bg-slate-950"
                  >
                    <img
                      src={studyGuide.blueprintImage.src}
                      alt="Blueprint"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex items-end p-3">
                      <p className="text-xs text-slate-300 font-medium line-clamp-1">
                        {t(studyGuide.blueprintImage.caption)}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: FORMULAS & LAWS */}
          {activeTab === 'formulas' && (
            <div className="space-y-4 max-w-4xl">
              <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/70 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-200 leading-relaxed">
                {language === 'hi'
                  ? 'नीचे दिए गए सभी सूत्र एवं नियम रेलवे भर्ती बोर्ड (RRB) की परीक्षाओं में सीधे संख्यात्मक प्रश्नों के समाधान हेतु आवश्यक हैं।'
                  : 'Official formulas, mathematical relations, and scientific laws frequently used across CBT-1 & CBT-2 numerical problems.'}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {studyGuide.formulasAndLaws.map((item, fIdx) => (
                  <div
                    key={fIdx}
                    className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                        {item.label}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">Model #{fIdx + 1}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950 text-emerald-400 font-mono text-xs sm:text-sm font-bold border border-slate-800 shadow-inner overflow-x-auto">
                      {item.expression}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {t(item.explanation)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: WORKED EXAMPLES */}
          {activeTab === 'examples' && (
            <div className="space-y-6 max-w-4xl">
              <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/70 dark:border-emerald-900/40 text-xs text-emerald-900 dark:text-emerald-200 leading-relaxed">
                {language === 'hi'
                  ? 'वास्तविक टीसीएस परीक्षा पैटर्न पर आधारित चरणबद्ध हल एवं 10-सेकंड टॉपर स्पीड हैक्स।'
                  : 'Step-by-step verified examination solutions paired with 10-second topper shortcuts to minimize exam time.'}
              </div>

              <div className="space-y-6">
                {studyGuide.workedExamples.map((ex, eIdx) => (
                  <div
                    key={ex.id || eIdx}
                    className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 shadow-sm overflow-hidden"
                  >
                    {/* Question Header */}
                    <div className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700/80 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-600 text-white font-mono shadow-xs">
                          {ex.level}
                        </span>
                        <span className="text-xs font-mono font-bold text-slate-400">
                          Problem #{eIdx + 1}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-relaxed">
                        {t(ex.question)}
                      </p>
                    </div>

                    {/* Standard Method */}
                    <div className="p-4 sm:p-5 space-y-2.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                        {language === 'hi' ? 'चरणबद्ध मानक समाधान (Step-by-Step Method):' : 'Standard Examination Solution:'}
                      </span>
                      <pre className="whitespace-pre-wrap font-sans text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50/50 dark:bg-slate-900/40 p-4 rounded-2xl border border-slate-200/60 dark:border-slate-800">
                        {t(ex.standardSolution)}
                      </pre>
                    </div>

                    {/* Topper 10-Second Shortcut Box */}
                    <div className="p-4 sm:p-5 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border-t border-amber-200/60 dark:border-amber-900/40 space-y-1.5">
                      <span className="text-xs font-black uppercase tracking-wider text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
                        <Zap className="w-4 h-4 fill-amber-500 text-amber-500" />
                        <span>Topper 10-Second Shortcut Hack</span>
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-amber-950 dark:text-amber-200 leading-relaxed">
                        {t(ex.topperShortcut)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: TRAPS & SPEED HACKS */}
          {activeTab === 'traps' && (
            <div className="space-y-6 max-w-4xl">
              {/* Examiner Traps */}
              <div className="space-y-3">
                <h3 className="text-sm font-black uppercase tracking-wider text-rose-600 dark:text-rose-400 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  <span>
                    {language === 'hi'
                      ? 'घातक परीक्षा त्रुटियां एवं नकारात्मक अंकन जाल (Avoidable Examiner Traps):'
                      : 'Common Negative Marking Traps (Where 90% Students Lose 0.33 Marks):'}
                  </span>
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {studyGuide.commonTraps.map((trap, tIdx) => (
                    <div
                      key={tIdx}
                      className="p-4 rounded-2xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200/80 dark:border-rose-900/50 flex items-start gap-3"
                    >
                      <span className="w-6 h-6 rounded-full bg-rose-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        !
                      </span>
                      <p className="text-xs sm:text-sm text-rose-950 dark:text-rose-200 leading-relaxed">
                        {t(trap)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Topper Speed Hacks */}
              <div className="space-y-3 pt-2">
                <h3 className="text-sm font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  <span>
                    {language === 'hi'
                      ? 'टॉपर गति युक्तियाँ एवं विकल्प विलोपन (Topper Speed Hacks & Option Elimination):'
                      : 'Speed Hacks & Smart Elimination Techniques:'}
                  </span>
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {studyGuide.topperSpeedHacks.map((hack, hIdx) => (
                    <div
                      key={hIdx}
                      className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-900/50 flex items-start gap-3"
                    >
                      <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        ✓
                      </span>
                      <p className="text-xs sm:text-sm text-emerald-950 dark:text-emerald-200 leading-relaxed font-semibold">
                        {t(hack)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: VISUAL BLUEPRINT */}
          {activeTab === 'blueprint' && studyGuide.blueprintImage && (
            <div className="space-y-4 max-w-4xl">
              <div className="p-4 rounded-2xl bg-purple-50/60 dark:bg-purple-950/30 border border-purple-200/80 dark:border-purple-900/50 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300">
                    Official Railway Schematic & Visual Architecture
                  </h4>
                  <p className="text-xs text-purple-900 dark:text-purple-200 mt-0.5">
                    {t(studyGuide.blueprintImage.caption)}
                  </p>
                </div>
                <button
                  onClick={() => setImageZoomed(true)}
                  className="px-3 py-1.5 rounded-xl bg-purple-600 text-white font-bold text-xs hover:bg-purple-700 transition-colors cursor-pointer shrink-0"
                >
                  Zoom In (HD)
                </button>
              </div>

              <div
                onClick={() => setImageZoomed(true)}
                className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-950 cursor-pointer relative group"
              >
                <img
                  src={studyGuide.blueprintImage.src}
                  alt="Engineering Blueprint"
                  className="w-full max-h-[500px] object-contain mx-auto group-hover:scale-[1.01] transition-transform duration-300"
                />
                <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-slate-950/80 text-white text-xs font-bold backdrop-blur-md border border-slate-700 flex items-center gap-1.5 pointer-events-none">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Click to Inspect Fullscreen</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: QUICK REVISION */}
          {activeTab === 'revision' && (
            <div className="space-y-4 max-w-4xl">
              <div className="p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200/80 dark:border-indigo-900/50 text-xs text-indigo-900 dark:text-indigo-200 leading-relaxed">
                {language === 'hi'
                  ? 'परीक्षा के अंतिम 5 मिनट के लिए महत्वपूर्ण पुनरावृत्ति बिंदु।'
                  : 'High-yield memory retention points for rapid review before entering the examination hall.'}
              </div>

              <div className="space-y-2.5">
                {studyGuide.quickRevisionBulletPoints.map((pt, pIdx) => (
                  <div
                    key={pIdx}
                    className="p-3.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 flex items-start gap-3 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium"
                  >
                    <span className="w-2 h-2 rounded-full bg-indigo-600 mt-1.5 shrink-0" />
                    <span>{t(pt)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Action Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          {/* Prev / Next chapter controls */}
          <div className="flex items-center gap-2 self-start sm:self-center">
            {prevSubTopic && onSelectSubTopic && (
              <button
                onClick={() => onSelectSubTopic(prevSubTopic.id)}
                className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span className="truncate max-w-[120px]">{t(prevSubTopic.title)}</span>
              </button>
            )}
            {nextSubTopic && onSelectSubTopic && (
              <button
                onClick={() => onSelectSubTopic(nextSubTopic.id)}
                className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span className="truncate max-w-[120px]">{t(nextSubTopic.title)}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
            >
              {language === 'hi' ? 'बंद करें' : 'Close'}
            </button>
            {onNavigateToPractice && (
              <button
                onClick={() => {
                  onClose();
                  onNavigateToPractice(studyGuide.relatedPracticeCategory);
                }}
                className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-2 transition-colors shadow-lg shadow-blue-600/30 cursor-pointer"
              >
                <span>{language === 'hi' ? 'इस विषय के प्रश्न हल करें' : 'Practice Topic MCQs'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Fullscreen Blueprint Lightbox */}
      {imageZoomed && studyGuide.blueprintImage && (
        <div
          onClick={() => setImageZoomed(false)}
          className="fixed inset-0 z-60 bg-black/95 flex flex-col items-center justify-center p-4 cursor-zoom-out animate-in fade-in"
        >
          <button
            onClick={() => setImageZoomed(false)}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={studyGuide.blueprintImage.src}
            alt="Zoomed Blueprint"
            className="max-w-[95vw] max-h-[85vh] object-contain rounded-2xl shadow-2xl"
          />
          <p className="text-slate-300 text-sm mt-3 text-center max-w-2xl font-mono">
            {t(studyGuide.blueprintImage.caption)}
          </p>
        </div>
      )}
    </div>
  );
};
