import React, { useState, useMemo } from 'react';
import {
  Calendar,
  CheckCircle2,
  Circle,
  Clock,
  Trophy,
  Target,
  Briefcase,
  GraduationCap,
  Zap,
  AlertTriangle,
  TrendingUp,
  Award,
  ArrowRight,
  ShieldCheck,
  BarChart3,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import {
  ZERO_TO_RRB_ROADMAP,
  PREPARATION_CIRCUMSTANCES,
  TOPPER_BENCHMARKS,
} from '../data/rrb/studyPlan';
import { getRoadmapProgress, toggleRoadmapLevel } from '../utils/storage';

type PlannerTab = 'roadmap' | 'timelines' | 'topper';

export const StudyPlannerPage: React.FC<{ onNavigate: (tab: string) => void }> = ({ onNavigate }) => {
  const { t, language } = useLanguage();

  // Active top-level tab
  const [activeTab, setActiveTab] = useState<PlannerTab>('roadmap');

  // Roadmap Progress State
  const [completedLevels, setCompletedLevels] = useState<number[]>(getRoadmapProgress());

  // Dynamic Daily Schedule Calculator State
  const [targetExam, setTargetExam] = useState<string>('rrb-ntpc');
  const [dailyHours, setDailyHours] = useState<number>(6);
  const [daysRemaining, setDaysRemaining] = useState<number>(90);

  // Circumstance Timelines State
  const [selectedCircumstanceId, setSelectedCircumstanceId] = useState<string>('full-time');

  // Topper Blueprint & Calculator State
  const [selectedBenchmarkExamId, setSelectedBenchmarkExamId] = useState<string>('rrb-ntpc-graduate');
  const [calcCurrentStage, setCalcCurrentStage] = useState<'beginner' | 'intermediate' | 'advanced'>('intermediate');
  const [calcDailyHours, setCalcDailyHours] = useState<number>(5);
  const [calcAmbition, setCalcAmbition] = useState<'topper' | 'cutoff'>('topper');

  const handleToggleRoadmap = (levelNum: number) => {
    const updated = toggleRoadmapLevel(levelNum);
    setCompletedLevels(updated);
  };

  const progressPercentage = Math.round((completedLevels.length / ZERO_TO_RRB_ROADMAP.length) * 100);

  // Selected Circumstance object
  const activeCircumstance = useMemo(() => {
    return PREPARATION_CIRCUMSTANCES.find((c) => c.id === selectedCircumstanceId) || PREPARATION_CIRCUMSTANCES[0];
  }, [selectedCircumstanceId]);

  // Selected Topper Benchmark object
  const activeBenchmark = useMemo(() => {
    return TOPPER_BENCHMARKS.find((b) => b.examId === selectedBenchmarkExamId) || TOPPER_BENCHMARKS[0];
  }, [selectedBenchmarkExamId]);

  // Dynamic Topper Calculation
  const calculationResults = useMemo(() => {
    const baseHours = activeBenchmark.totalHoursRequired;

    // Adjustment factor based on current stage
    let stageFactor = 1.0;
    if (calcCurrentStage === 'beginner') stageFactor = 1.0;
    else if (calcCurrentStage === 'intermediate') stageFactor = 0.65;
    else if (calcCurrentStage === 'advanced') stageFactor = 0.40;

    // Adjustment factor based on ambition (Cutoff vs Topper +18 marks)
    let ambitionFactor = calcAmbition === 'topper' ? 1.0 : 0.75;

    const netHoursNeeded = Math.round(baseHours * stageFactor * ambitionFactor);
    const totalDays = Math.max(15, Math.ceil(netHoursNeeded / calcDailyHours));
    const totalMonths = (totalDays / 30.4).toFixed(1);

    // Subject breakdown for daily hours
    const mathHours = (calcDailyHours * 0.28).toFixed(1);
    const reasoningHours = (calcDailyHours * 0.22).toFixed(1);
    const scienceOrTechHours = (calcDailyHours * 0.28).toFixed(1);
    const mockAndRevHours = (calcDailyHours * 0.22).toFixed(1);

    return {
      netHoursNeeded,
      totalDays,
      totalMonths,
      mathHours,
      reasoningHours,
      scienceOrTechHours,
      mockAndRevHours,
    };
  }, [activeBenchmark, calcCurrentStage, calcDailyHours, calcAmbition]);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <Breadcrumb
        items={[
          { label: language === 'hi' ? 'रणनीति एवं योजना' : 'Strategy & Planning' },
          { label: language === 'hi' ? 'अध्ययन योजनाकार, समय-सारणी एवं टॉपर ब्लूप्रिंट' : 'Study Planner, Timelines & Topper Blueprint' },
        ]}
        onNavigate={onNavigate}
      />

      {/* Header Banner */}
      <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-blue-950 via-indigo-950 to-slate-900 text-white shadow-2xl relative overflow-hidden border border-blue-900/50">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="relative space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
              <Trophy className="w-3.5 h-3.5" />
              {language === 'hi' ? 'आरआरबी मास्टर रणनीति इंजन' : 'RRB Master Strategy Engine'}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-500/30">
              <Sparkles className="w-3 h-3" />
              {language === 'hi' ? 'वास्तविक टीसीएस परीक्षा आधारित' : 'TCS Pattern Grounded'}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
            {language === 'hi'
              ? 'शून्य से चयन: अध्ययन रोडमैप, विभिन्न समय-सारणी एवं टॉपर ब्लूप्रिंट'
              : 'Zero to Selection: Roadmap, Circumstance Timelines & Topper Blueprint'}
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            {language === 'hi'
              ? 'पूर्णकालिक अभ्यर्थी, नौकरीपेशा अथवा कॉलेज छात्रों के लिए विशेष दैनिक रूटीन। परीक्षावार अध्ययन घंटे, कट-ऑफ सुरक्षा मार्जिन और टॉपर बनने का वास्तविक गणित।'
              : 'Personalized preparation architectures for full-time aspirants, working professionals, and college students. Includes exam-specific study hours, cutoff safety margins, and the blueprint to rank in the top 1%.'}
          </p>

          {/* Navigation Tab Switcher */}
          <div className="flex flex-wrap gap-2 pt-2">
            <button
              onClick={() => setActiveTab('roadmap')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'roadmap'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-white/10 text-slate-300 hover:bg-white/15'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>{language === 'hi' ? '10-स्तरीय रोडमैप' : '10-Level Roadmap'}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/20 font-mono">
                {completedLevels.length}/11
              </span>
            </button>

            <button
              onClick={() => setActiveTab('timelines')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'timelines'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-white/10 text-slate-300 hover:bg-white/15'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>{language === 'hi' ? 'परिस्थितियों अनुसार समय-सारणी' : 'Circumstance Timelines'}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-bold">
                4 Modes
              </span>
            </button>

            <button
              onClick={() => setActiveTab('topper')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'topper'
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30 font-black'
                  : 'bg-white/10 text-slate-300 hover:bg-white/15'
              }`}
            >
              <Trophy className="w-4 h-4" />
              <span>{language === 'hi' ? 'टॉपर ब्लूप्रिंट एवं कैलकुलेटर' : 'Topper Blueprint & Calculator'}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/20 font-bold">
                Top 1%
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: 10-LEVEL ROADMAP                                                   */}
      {/* ========================================================================= */}
      {activeTab === 'roadmap' && (
        <div className="space-y-6">
          {/* Overall Roadmap Progress Bar */}
          <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="flex items-center justify-between text-xs sm:text-sm font-bold">
              <span className="text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                {language === 'hi' ? 'रोडमैप पूर्णता प्रगति:' : 'Roadmap Progress:'}{' '}
                {completedLevels.length} of {ZERO_TO_RRB_ROADMAP.length} {language === 'hi' ? 'स्तर पूर्ण' : 'Levels Complete'}
              </span>
              <span className="text-blue-600 dark:text-blue-400 font-mono text-base font-black">
                {progressPercentage}%
              </span>
            </div>
            <div className="w-full h-3.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-500 transition-all duration-500 rounded-full"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              {language === 'hi'
                ? 'जैसे-जैसे आप प्रत्येक स्तर को पूरा करते जाएं, चेकबॉक्स पर क्लिक करें। आपकी प्रगति स्थानीय रूप से सहेजी जाती है।'
                : 'Click the checkmark icon as you achieve each strategic milestone. Progress is persistently saved.'}
            </p>
          </div>

          {/* Dynamic Daily Allocation Generator */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>{language === 'hi' ? 'दैनिक अध्ययन समय आबंटन जनरेटर' : 'Dynamic Daily Study Allocation Generator'}</span>
              </h2>
              <span className="text-xs text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-950/50 px-2.5 py-1 rounded-full border border-blue-200 dark:border-blue-900">
                {targetExam === 'rrb-ntpc' ? 'NTPC Mode' : targetExam === 'rrb-group-d' ? 'Group D Mode' : 'JE Mode'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div>
                <label className="block text-slate-500 dark:text-slate-400 font-semibold mb-1">
                  {language === 'hi' ? 'लक्षित आरआरबी परीक्षा' : 'Target Examination'}
                </label>
                <select
                  value={targetExam}
                  onChange={(e) => setTargetExam(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
                >
                  <option value="rrb-ntpc">RRB NTPC (CEN 05 & 06/2026)</option>
                  <option value="rrb-group-d">RRB Group D (Level-1)</option>
                  <option value="rrb-je">RRB JE (Technical CEN 03/2024)</option>
                </select>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-slate-500 dark:text-slate-400 font-semibold">
                    {language === 'hi' ? 'दैनिक अध्ययन घंटे:' : 'Daily Study Hours:'}
                  </label>
                  <span className="font-bold text-blue-600 dark:text-blue-400 font-mono">{dailyHours}h</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="12"
                  value={dailyHours}
                  onChange={(e) => setDailyHours(Number(e.target.value))}
                  className="w-full accent-blue-600 mt-2"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-slate-500 dark:text-slate-400 font-semibold">
                    {language === 'hi' ? 'शेष अनुमानित दिन:' : 'Estimated Days Remaining:'}
                  </label>
                  <span className="font-bold text-blue-600 dark:text-blue-400 font-mono">{daysRemaining}d</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="180"
                  value={daysRemaining}
                  onChange={(e) => setDaysRemaining(Number(e.target.value))}
                  className="w-full accent-blue-600 mt-2"
                />
              </div>
            </div>

            {/* Calculated Daily Allocation Breakdown */}
            <div className="p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/50 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900/80 shadow-sm border border-slate-100 dark:border-slate-800">
                <span className="text-slate-500 block text-[11px]">{language === 'hi' ? 'गणित' : 'Mathematics'}</span>
                <span className="font-black text-sm text-blue-700 dark:text-blue-300 mt-0.5 block font-mono">
                  {(dailyHours * 0.3).toFixed(1)} {language === 'hi' ? 'घंटे' : 'Hours'}
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">30% Volume</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900/80 shadow-sm border border-slate-100 dark:border-slate-800">
                <span className="text-slate-500 block text-[11px]">{language === 'hi' ? 'रीजनिंग' : 'Reasoning'}</span>
                <span className="font-black text-sm text-indigo-700 dark:text-indigo-300 mt-0.5 block font-mono">
                  {(dailyHours * 0.25).toFixed(1)} {language === 'hi' ? 'घंटे' : 'Hours'}
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">25% Volume</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900/80 shadow-sm border border-slate-100 dark:border-slate-800">
                <span className="text-slate-500 block text-[11px]">
                  {targetExam === 'rrb-je' ? (language === 'hi' ? 'तकनीकी कोर' : 'Technical Core') : (language === 'hi' ? 'विज्ञान / GA' : 'Science / GA')}
                </span>
                <span className="font-black text-sm text-purple-700 dark:text-purple-300 mt-0.5 block font-mono">
                  {(dailyHours * 0.25).toFixed(1)} {language === 'hi' ? 'घंटे' : 'Hours'}
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">25% Volume</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900/80 shadow-sm border border-slate-100 dark:border-slate-800">
                <span className="text-slate-500 block text-[11px]">{language === 'hi' ? 'मॉक एवं पुनरावृत्ति' : 'Mocks & Revision'}</span>
                <span className="font-black text-sm text-emerald-700 dark:text-emerald-300 mt-0.5 block font-mono">
                  {(dailyHours * 0.2).toFixed(1)} {language === 'hi' ? 'घंटे' : 'Hours'}
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">20% Analysis</span>
              </div>
            </div>
          </div>

          {/* 10-Level Roadmap Cards List */}
          <div className="space-y-4">
            <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-500" />
              <span>{language === 'hi' ? '10-स्तरीय विस्तृत रणनीतिक रोडमैप' : 'The 10 Strategic Roadmap Levels'}</span>
            </h2>

            {ZERO_TO_RRB_ROADMAP.map((item) => {
              const isDone = completedLevels.includes(item.levelNumber);
              return (
                <div
                  key={item.levelNumber}
                  className={`p-5 rounded-3xl border transition-all ${
                    isDone
                      ? 'border-emerald-300 dark:border-emerald-800/80 bg-emerald-50/30 dark:bg-emerald-950/15'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-black px-2.5 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono">
                          Level {item.levelNumber}
                        </span>
                        <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                          {t(item.title)}
                        </h3>
                      </div>

                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        {t(item.description)}
                      </p>

                      <div className="space-y-1 pt-2">
                        {item.actionItems.map((act, aIdx) => (
                          <div key={aIdx} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-1.5">
                            <span className="text-blue-600 mt-0.5 font-bold">•</span>
                            <span>{t(act)}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {item.recommendedTools.map((tool, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Toggle Button */}
                    <button
                      onClick={() => handleToggleRoadmap(item.levelNumber)}
                      className={`p-2.5 rounded-2xl transition-colors cursor-pointer shrink-0 ${
                        isDone
                          ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-600 shadow-sm'
                          : 'border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                      title={isDone ? 'Mark Incomplete' : 'Mark Completed'}
                    >
                      {isDone ? <CheckCircle2 className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: CIRCUMSTANCE TIMELINES                                             */}
      {/* ========================================================================= */}
      {activeTab === 'timelines' && (
        <div className="space-y-6">
          {/* Circumstance Selector Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {PREPARATION_CIRCUMSTANCES.map((circ) => {
              const isSelected = circ.id === selectedCircumstanceId;
              let Icon = Briefcase;
              if (circ.id === 'full-time') Icon = Target;
              else if (circ.id === 'college-student') Icon = GraduationCap;
              else if (circ.id === 'crash-course') Icon = Zap;

              return (
                <button
                  key={circ.id}
                  onClick={() => setSelectedCircumstanceId(circ.id)}
                  className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-blue-600 dark:border-blue-500 bg-blue-50 dark:bg-blue-950/40 shadow-sm'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400'}`} />
                    <span className={`text-xs font-bold ${isSelected ? 'text-blue-900 dark:text-blue-200' : 'text-slate-700 dark:text-slate-300'}`}>
                      {t(circ.name)}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-mono font-medium">
                    {t(circ.badge)}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Circumstance Detailed Profile */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 text-xs font-bold border border-blue-200 dark:border-blue-900 mb-2">
                  <Clock className="w-3.5 h-3.5" />
                  {t(activeCircumstance.badge)}
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  {t(activeCircumstance.name)}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    {language === 'hi' ? 'लक्षित अभ्यर्थी: ' : 'Target Profile: '}
                  </span>
                  {t(activeCircumstance.targetAudience)}
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-right sm:text-right shrink-0">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">
                  {language === 'hi' ? 'कुल तैयारी अवधि' : 'Total Preparation Span'}
                </span>
                <span className="text-base font-black text-blue-600 dark:text-blue-400 font-mono">
                  {activeCircumstance.totalDurationMonths}
                </span>
                <span className="text-[10px] text-slate-500 block">
                  {activeCircumstance.dailyHours}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/40 p-4 rounded-2xl border border-slate-200/60 dark:border-slate-800">
              {t(activeCircumstance.description)}
            </p>

            {/* Daily Hour-by-Hour Routine */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span>{language === 'hi' ? 'आदर्श दैनिक घंटा-दर-घंटा समय-सारणी (Daily Routine)' : 'Ideal Hour-by-Hour Daily Routine'}</span>
              </h3>

              <div className="space-y-2">
                {activeCircumstance.dailyRoutine.map((slot, sIdx) => {
                  let badgeColor = 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300';
                  if (slot.slotType === 'drill') badgeColor = 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300';
                  else if (slot.slotType === 'mock') badgeColor = 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300';
                  else if (slot.slotType === 'revision') badgeColor = 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300';
                  else if (slot.slotType === 'fitness') badgeColor = 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300';

                  return (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs hover:border-blue-300 dark:hover:border-blue-800 transition-colors"
                    >
                      <div className="space-y-1 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-mono font-bold text-slate-900 dark:text-slate-100 text-xs">
                            {slot.timeSlot}
                          </span>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${badgeColor}`}>
                            {slot.slotType}
                          </span>
                          <span className="font-bold text-slate-800 dark:text-slate-200">
                            {t(slot.activity)}
                          </span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed">
                          {t(slot.focusArea)}
                        </p>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="font-mono font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg text-[11px]">
                          {slot.duration}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Weekly Timetable Plan */}
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-indigo-600" />
                <span>{language === 'hi' ? 'साप्ताहिक समय-सारणी एवं मॉक परीक्षण योजना' : 'Weekly Timetable & Mock Test Cadence'}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {activeCircumstance.weeklyPlan.map((plan, pIdx) => (
                  <div
                    key={pIdx}
                    className="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900 dark:text-white">
                        {t(plan.day)}
                      </span>
                      {plan.targetMocks > 0 && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">
                          {plan.targetMocks} Full Mock{plan.targetMocks > 1 ? 's' : ''}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-[11px] leading-relaxed">
                      {t(plan.schedule)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategy Pillars, Pro-Tips & Pitfalls in 3 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {/* Strategy Pillars */}
              <div className="p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/50 space-y-2 text-xs">
                <h4 className="font-bold text-blue-950 dark:text-blue-300 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>{language === 'hi' ? 'रणनीतिक स्तंभ' : 'Strategy Pillars'}</span>
                </h4>
                <ul className="space-y-1.5 text-slate-700 dark:text-slate-300 text-[11px]">
                  {activeCircumstance.strategyPillars.map((pil, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>{t(pil)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Topper Pro-Tips */}
              <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/50 space-y-2 text-xs">
                <h4 className="font-bold text-emerald-950 dark:text-emerald-300 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>{language === 'hi' ? 'टॉपर प्रो-टिप्स' : 'Topper Pro-Tips'}</span>
                </h4>
                <ul className="space-y-1.5 text-slate-700 dark:text-slate-300 text-[11px]">
                  {activeCircumstance.proTips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>{t(tip)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Common Pitfalls to Avoid */}
              <div className="p-4 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/50 space-y-2 text-xs">
                <h4 className="font-bold text-rose-950 dark:text-rose-300 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  <span>{language === 'hi' ? 'घातक गलतियों से बचें' : 'Pitfalls to Avoid'}</span>
                </h4>
                <ul className="space-y-1.5 text-slate-700 dark:text-slate-300 text-[11px]">
                  {activeCircumstance.commonPitfalls.map((pit, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-rose-600 font-bold">•</span>
                      <span>{t(pit)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: TOPPER BLUEPRINT & HOURS CALCULATOR                                */}
      {/* ========================================================================= */}
      {activeTab === 'topper' && (
        <div className="space-y-6">
          {/* Sub-section A: Personalized Topper Time & Hours Calculator */}
          <div className="bg-gradient-to-br from-amber-500/10 via-blue-500/5 to-slate-900/40 p-6 rounded-3xl border border-amber-300/40 dark:border-amber-500/30 shadow-lg space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
                  <Trophy className="w-3.5 h-3.5" />
                  {language === 'hi' ? 'व्यक्तिगत टॉपर समय कैलकुलेटर' : 'Personalized Topper Time Estimator'}
                </div>
                <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                  {language === 'hi'
                    ? 'आरआरबी परीक्षा में टॉपर (Top 1% Ranker) बनने में कितना समय लगेगा?'
                    : 'How Much Time Does It Take to Become an RRB Topper (Top 1%)?'}
                </h2>
              </div>
            </div>

            {/* Interactive Calculator Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
              {/* Target Exam */}
              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5">
                  {language === 'hi' ? '1. लक्षित आरआरबी परीक्षा' : '1. Target RRB Exam'}
                </label>
                <select
                  value={selectedBenchmarkExamId}
                  onChange={(e) => setSelectedBenchmarkExamId(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
                >
                  <option value="rrb-ntpc-graduate">RRB NTPC Graduate (L5 & 6)</option>
                  <option value="rrb-ntpc-undergraduate">RRB NTPC Undergraduate (L2 & 3)</option>
                  <option value="rrb-group-d">RRB Group D (Level-1)</option>
                  <option value="rrb-je">RRB JE (Junior Engineer)</option>
                </select>
              </div>

              {/* Current Mock Score Range */}
              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5">
                  {language === 'hi' ? '2. वर्तमान तैयारी स्तर' : '2. Current Prep Level'}
                </label>
                <select
                  value={calcCurrentStage}
                  onChange={(e) => setCalcCurrentStage(e.target.value as any)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
                >
                  <option value="beginner">
                    {language === 'hi' ? 'शुरुआती (0-40 अंक - शून्य स्तर)' : 'Beginner (0-40 Marks, Fresh)'}
                  </option>
                  <option value="intermediate">
                    {language === 'hi' ? 'मध्यम (40-65 अंक - बेसिक स्पष्ट)' : 'Intermediate (40-65 Marks, Basics clear)'}
                  </option>
                  <option value="advanced">
                    {language === 'hi' ? 'उन्नत (65-75+ अंक - केवल गति/सटीकता)' : 'Advanced (65-75+ Marks, Fine tuning)'}
                  </option>
                </select>
              </div>

              {/* Daily Hours Slider */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-slate-700 dark:text-slate-300 font-bold">
                    {language === 'hi' ? '3. दैनिक अध्ययन घंटे:' : '3. Daily Study Hours:'}
                  </label>
                  <span className="font-black text-amber-600 dark:text-amber-400 font-mono text-sm">
                    {calcDailyHours}h
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="12"
                  value={calcDailyHours}
                  onChange={(e) => setCalcDailyHours(Number(e.target.value))}
                  className="w-full accent-amber-500 mt-2"
                />
                <span className="text-[10px] text-slate-500 block mt-1">
                  {calcDailyHours >= 8 ? (language === 'hi' ? 'पूर्णकालिक मोड' : 'Full-Time Mode') : calcDailyHours <= 4 ? (language === 'hi' ? 'नौकरीपेशा मोड' : 'Working Pro Mode') : (language === 'hi' ? 'संतुलित मोड' : 'Balanced Mode')}
                </span>
              </div>

              {/* Ambition Level */}
              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1.5">
                  {language === 'hi' ? '4. लक्ष्य स्तर' : '4. Target Ambition'}
                </label>
                <select
                  value={calcAmbition}
                  onChange={(e) => setCalcAmbition(e.target.value as any)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
                >
                  <option value="topper">
                    🏆 {language === 'hi' ? 'टॉपर (कट-ऑफ +18 अंक / गृह ज़ोन)' : 'Topper (Cutoff + 18 Marks, Top 1%)'}
                  </option>
                  <option value="cutoff">
                    🎯 {language === 'hi' ? 'सामान्य चयन (केवल कट-ऑफ पार)' : 'Bare Cutoff (Qualify Borderline)'}
                  </option>
                </select>
              </div>
            </div>

            {/* Dynamic Output Dashboard */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm text-center">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">
                  {language === 'hi' ? 'आवश्यक कुल अध्ययन घंटे' : 'Total Study Hours Needed'}
                </span>
                <span className="text-xl sm:text-2xl font-black text-blue-600 dark:text-blue-400 font-mono mt-1 block">
                  ~{calculationResults.netHoursNeeded}h
                </span>
                <span className="text-[10px] text-slate-500 block mt-0.5">
                  {calcDailyHours}h / day pace
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm text-center">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">
                  {language === 'hi' ? 'अनुमानित कैलेंडर समय' : 'Estimated Calendar Time'}
                </span>
                <span className="text-xl sm:text-2xl font-black text-amber-600 dark:text-amber-400 font-mono mt-1 block">
                  {calculationResults.totalMonths} {language === 'hi' ? 'माह' : 'Months'}
                </span>
                <span className="text-[10px] text-slate-500 block mt-0.5">
                  ({calculationResults.totalDays} {language === 'hi' ? 'दिन' : 'Days'})
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm text-center">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">
                  {language === 'hi' ? 'लक्षित सीबीटी-1 स्कोर' : 'Target CBT-1 Score'}
                </span>
                <span className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono mt-1 block">
                  {calcAmbition === 'topper' ? activeBenchmark.topperTargetScore.cbt1.split(' ')[0] : '72+ / 100'}
                </span>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold block mt-0.5">
                  {calcAmbition === 'topper' ? 'Top 1% Percentile' : 'Borderline Safe'}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm text-center">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">
                  {language === 'hi' ? 'कट-ऑफ सुरक्षा मार्जिन' : 'Cutoff Safety Margin'}
                </span>
                <span className="text-xl sm:text-2xl font-black text-indigo-600 dark:text-indigo-400 font-mono mt-1 block">
                  {calcAmbition === 'topper' ? '+16 to 22 Marks' : '+2 to 5 Marks'}
                </span>
                <span className="text-[10px] text-slate-500 block mt-0.5">
                  {calcAmbition === 'topper' ? (language === 'hi' ? 'गृह ज़ोन सुनिश्चित' : 'Guaranteed Home Zone') : (language === 'hi' ? 'अंतिम मेरिट जोखिम' : 'High Merit Risk')}
                </span>
              </div>
            </div>

            {/* Daily Subject Distribution based on calculated daily hours */}
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
              <span className="font-bold text-slate-800 dark:text-slate-200 block">
                {language === 'hi'
                  ? `दैनिक ${calcDailyHours} घंटे का वैज्ञानिक विषयवार विभाजन:`
                  : `Scientific Subject Distribution for Your ${calcDailyHours} Daily Hours:`}
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900">
                  <span className="text-slate-500 block text-[10px]">{language === 'hi' ? 'गणित' : 'Maths'}</span>
                  <span className="font-black text-blue-700 dark:text-blue-300 font-mono text-sm">
                    {calculationResults.mathHours}h
                  </span>
                </div>
                <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900">
                  <span className="text-slate-500 block text-[10px]">{language === 'hi' ? 'रीजनिंग' : 'Reasoning'}</span>
                  <span className="font-black text-indigo-700 dark:text-indigo-300 font-mono text-sm">
                    {calculationResults.reasoningHours}h
                  </span>
                </div>
                <div className="p-2 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900">
                  <span className="text-slate-500 block text-[10px]">
                    {selectedBenchmarkExamId === 'rrb-je' ? (language === 'hi' ? 'तकनीकी कोर' : 'Technical') : (language === 'hi' ? 'विज्ञान / GA' : 'Science / GA')}
                  </span>
                  <span className="font-black text-purple-700 dark:text-purple-300 font-mono text-sm">
                    {calculationResults.scienceOrTechHours}h
                  </span>
                </div>
                <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900">
                  <span className="text-slate-500 block text-[10px]">{language === 'hi' ? 'मॉक टेस्ट व त्रुटि सुधार' : 'Mocks & Error Log'}</span>
                  <span className="font-black text-emerald-700 dark:text-emerald-300 font-mono text-sm">
                    {calculationResults.mockAndRevHours}h
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-section B: Deep Exam Topper Blueprint & Subject Breakdown */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            {/* Exam Selector Buttons */}
            <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-100 dark:border-slate-800">
              {TOPPER_BENCHMARKS.map((b) => (
                <button
                  key={b.examId}
                  onClick={() => setSelectedBenchmarkExamId(b.examId)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    b.examId === selectedBenchmarkExamId
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {t(b.examName)}
                </button>
              ))}
            </div>

            {/* Topper Target Score Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-amber-300 font-mono text-xs uppercase tracking-wider font-bold">
                    {t(activeBenchmark.qualification)}
                  </span>
                  <h3 className="text-lg sm:text-xl font-black mt-0.5">
                    {t(activeBenchmark.examName)} {language === 'hi' ? 'टॉपर स्कोर लक्ष्य' : 'Topper Score Blueprint'}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1.5 rounded-xl bg-amber-400 text-slate-950 font-black text-xs font-mono shadow">
                    Target: {activeBenchmark.topperTargetScore.cbt1}
                  </span>
                  {activeBenchmark.topperTargetScore.cbt2 && (
                    <span className="px-3 py-1.5 rounded-xl bg-white/20 text-white font-black text-xs font-mono">
                      CBT-2: {activeBenchmark.topperTargetScore.cbt2}
                    </span>
                  )}
                </div>
              </div>

              {/* Rationale Alert */}
              <div className="p-3 rounded-xl bg-white/10 text-xs text-slate-200 leading-relaxed border border-white/10">
                <span className="font-bold text-amber-300">
                  {language === 'hi' ? 'कट-ऑफ +18 अंक का सुरक्षा नियम: ' : 'The Cutoff + 18 Marks Safety Rule: '}
                </span>
                {t(activeBenchmark.topperTargetScore.rationale)}
              </div>
            </div>

            {/* Subject-Wise Time Allocation & Scoring Targets */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-blue-600" />
                <span>{language === 'hi' ? 'विषयवार अध्ययन घंटे एवं टॉपर स्कोर लक्ष्य' : 'Subject Hours Breakdown & Scoring Targets'}</span>
              </h4>

              <div className="space-y-3">
                {activeBenchmark.subjectHoursBreakdown.map((sub, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3 text-xs"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono font-bold text-[11px]">
                          {sub.percentage}% ({sub.hours}h)
                        </span>
                        <h5 className="font-bold text-sm text-slate-900 dark:text-white">
                          {t(sub.subject)}
                        </h5>
                      </div>

                      <span className="text-xs font-black text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-lg border border-emerald-200 dark:border-emerald-900 self-start sm:self-auto font-mono">
                        Target: {sub.topperScoringTarget}
                      </span>
                    </div>

                    {/* Progress Bar of Subject Weight */}
                    <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                      <div
                        className="h-full bg-blue-600 rounded-full"
                        style={{ width: `${sub.percentage * 2}%` }}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-1 text-[11px]">
                      {/* Key Focus Areas */}
                      <div className="space-y-1">
                        <span className="text-slate-400 font-semibold block uppercase text-[10px]">
                          {language === 'hi' ? 'उच्च-प्राथमिकता विषय:' : 'High-Priority Topics:'}
                        </span>
                        {sub.keyFocusAreas.map((f, fIdx) => (
                          <div key={fIdx} className="text-slate-700 dark:text-slate-300 flex items-start gap-1">
                            <span className="text-blue-500 font-bold">•</span>
                            <span>{t(f)}</span>
                          </div>
                        ))}
                      </div>

                      {/* Topper Competitive Edge */}
                      <div className="p-2.5 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-900/50">
                        <span className="text-amber-800 dark:text-amber-300 font-bold block text-[10px] uppercase mb-0.5">
                          {language === 'hi' ? 'टॉपर का गुप्त लाभ (The Topper Edge):' : 'The Topper Competitive Edge:'}
                        </span>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                          {t(sub.topperEdge)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Score Progression Milestones */}
            <div className="space-y-3 pt-2">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                <span>{language === 'hi' ? 'माह-दर-माह मॉक स्कोर लक्ष्य एवं मील के पत्थर' : 'Month-by-Month Mock Score Progression'}</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                {activeBenchmark.scoreProgressionMilestones.map((m, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850 space-y-2 relative"
                  >
                    <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block font-mono">
                      {m.monthRange}
                    </span>
                    <h5 className="font-bold text-slate-900 dark:text-white text-xs">
                      {t(m.phaseName)}
                    </h5>

                    <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
                      <span className="text-[10px] text-slate-400 block">{language === 'hi' ? 'अपेक्षित मॉक स्कोर' : 'Expected Mock Score'}</span>
                      <span className="font-black text-sm text-emerald-600 dark:text-emerald-400 font-mono">
                        {m.expectedMockScore}
                      </span>
                    </div>

                    <ul className="space-y-1 text-[11px] text-slate-600 dark:text-slate-300 pt-1">
                      {m.keyMilestones.map((km, kIdx) => (
                        <li key={kIdx} className="flex items-start gap-1">
                          <span className="text-emerald-500 font-bold">•</span>
                          <span>{t(km)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Topper Secret Habits & Fatal Mistakes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {/* Topper Habits */}
              <div className="p-4 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50 space-y-2.5 text-xs">
                <h4 className="font-bold text-amber-950 dark:text-amber-200 flex items-center gap-1.5 text-sm">
                  <Trophy className="w-4 h-4 text-amber-600" />
                  <span>{language === 'hi' ? 'टॉपर की 3 गुप्त आदतें' : 'The 3 Topper Secret Habits'}</span>
                </h4>
                <div className="space-y-2 text-[11px] text-slate-700 dark:text-slate-300">
                  {activeBenchmark.topperSecretHabits.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-1.5">
                      <span className="text-amber-600 font-bold text-sm leading-none mt-0.5">✓</span>
                      <p className="leading-relaxed">{t(h)}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fatal Mistakes */}
              <div className="p-4 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/50 space-y-2.5 text-xs">
                <h4 className="font-bold text-rose-950 dark:text-rose-200 flex items-center gap-1.5 text-sm">
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  <span>{language === 'hi' ? 'घातक गलतियां जो 95% छात्रों को बाहर करती हैं' : 'Fatal Mistakes That Knock Out 95% Aspirants'}</span>
                </h4>
                <div className="space-y-2 text-[11px] text-slate-700 dark:text-slate-300">
                  {activeBenchmark.fatalMistakesToAvoid.map((m, idx) => (
                    <div key={idx} className="flex items-start gap-1.5">
                      <span className="text-rose-600 font-bold text-sm leading-none mt-0.5">✗</span>
                      <p className="leading-relaxed">{t(m)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Tool Jump CTA */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="space-y-0.5">
                <span className="font-bold text-slate-900 dark:text-white block">
                  {language === 'hi' ? 'अपनी तैयारी को तुरंत टेस्ट करें' : 'Test Your Readiness Right Now'}
                </span>
                <span className="text-slate-500 dark:text-slate-400 text-[11px]">
                  {language === 'hi'
                    ? 'वास्तविक टीसीएस इंटरफेस में 90 मिनट का लाइव सीबीटी मॉक टेस्ट देकर अपना वर्तमान बेंचमार्क जानें।'
                    : 'Take a full-length 90-minute CBT Mock in the authentic TCS iON interface to check your current baseline.'}
                </span>
              </div>
              <button
                onClick={() => onNavigate('mock-tests')}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold flex items-center justify-center gap-1.5 transition-all shadow-md shrink-0 cursor-pointer"
              >
                <span>{language === 'hi' ? 'लाइव मॉक टेस्ट दें' : 'Take Live CBT Mock'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
