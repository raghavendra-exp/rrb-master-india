import React, { useState, useMemo } from 'react';
import {
  Train,
  Clock,
  Search,
  Sparkles,
  CheckCircle2,
  Maximize2,
  X,
  Layers,
  Award,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { RAILWAY_GK_TOPICS, type RailwayGkTopic } from '../data/rrb/railwayGk';
import { CURRENT_AFFAIRS_ITEMS, type CurrentAffairItem } from '../data/rrb/currentAffairs';
import { RAILWAY_BLUEPRINTS } from '../data/rrb/railwayBlueprints';

export const RailwayGKPage: React.FC<{ onNavigate: (tab: string) => void }> = ({ onNavigate }) => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'knowledge_hub' | 'current_affairs'>('knowledge_hub');
  const [selectedImageModal, setSelectedImageModal] = useState<string | null>(null);
  const [selectedBlueprintId, setSelectedBlueprintId] = useState<string>('signals-track');

  // Knowledge Hub Filters
  const [selectedLevel, setSelectedLevel] = useState<'ALL' | 'basic' | 'intermediate' | 'advance'>('ALL');
  const [gkSearch, setGkSearch] = useState<string>('');

  // Current Affairs Filters
  const [selectedCaCategory, setSelectedCaCategory] = useState<string>('ALL');
  const [caSearch, setCaSearch] = useState<string>('');

  // Filtered Railway GK topics
  const filteredGkTopics = useMemo(() => {
    return RAILWAY_GK_TOPICS.filter((topic: RailwayGkTopic) => {
      if (selectedLevel !== 'ALL' && topic.level !== selectedLevel) return false;
      if (gkSearch.trim()) {
        const query = gkSearch.toLowerCase();
        const matchTitle =
          topic.title.en.toLowerCase().includes(query) ||
          topic.title.hi.toLowerCase().includes(query);
        const matchCat = topic.category.toLowerCase().includes(query);
        const matchFact = topic.facts.some(
          (f) => f.en.toLowerCase().includes(query) || f.hi.toLowerCase().includes(query)
        );
        const matchSpec = topic.technicalSpecs?.some(
          (s) => s.label.toLowerCase().includes(query) || s.value.toLowerCase().includes(query)
        );
        if (!matchTitle && !matchCat && !matchFact && !matchSpec) return false;
      }
      return true;
    });
  }, [selectedLevel, gkSearch]);

  // Filtered Current Affairs
  const filteredCaItems = useMemo(() => {
    return CURRENT_AFFAIRS_ITEMS.filter((item: CurrentAffairItem) => {
      if (selectedCaCategory !== 'ALL' && item.category !== selectedCaCategory) return false;
      if (caSearch.trim()) {
        const query = caSearch.toLowerCase();
        const matchH =
          item.headline.en.toLowerCase().includes(query) ||
          item.headline.hi.toLowerCase().includes(query);
        const matchS =
          item.summary.en.toLowerCase().includes(query) ||
          item.summary.hi.toLowerCase().includes(query);
        const matchCat = item.category.toLowerCase().includes(query);
        if (!matchH && !matchS && !matchCat) return false;
      }
      return true;
    });
  }, [selectedCaCategory, caSearch]);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Breadcrumb
        items={[
          { label: language === 'hi' ? 'सामान्य ज्ञान' : 'General Knowledge' },
          {
            label:
              language === 'hi'
                ? 'भारतीय रेल संपूर्ण ज्ञानकोष एवं 2026-2027 समसामयिकी'
                : 'Indian Railways Complete Knowledge & 2026-2027 Current Affairs',
          },
        ]}
        onNavigate={onNavigate}
      />

      {/* Hero Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white shadow-2xl space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
            <Train className="w-3.5 h-3.5" />
            Complete Indian Railways Master Knowledge (Basic to Pro)
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
            <Clock className="w-3.5 h-3.5" />
            2026–2027 Up-to-Date Current Affairs
          </div>
        </div>

        <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
          {language === 'hi'
            ? 'भारतीय रेल संपूर्ण ज्ञानकोष (बुनियादी से प्रो/एडवांस) एवं नवीनतम समसामयिकी'
            : 'Indian Railways Master Encyclopedia (Basic to Pro) & Current Affairs Engine'}
        </h1>

        <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
          {language === 'hi'
            ? '1853 के प्रथम भाप इंजन से लेकर 19 ज़ोन, रोलिंग स्टॉक, कवच 4.0, 4-एस्पेक्ट सिग्नलिंग, 60 kg/m UIC-60 रेल, पश्चिमी व पूर्वी डीएफसी, बुलेट ट्रेन और 2026–2027 की संपूर्ण राष्ट्रीय, वैज्ञानिक, आर्थिक व खेल समसामयिकी।'
            : 'From 1853 steam origins to 19 zonal headquarters, locomotive classes, SIL-4 Kavach 4.0 architecture, P-Way civil engineering, and exhaustive 2026–2027 current affairs with complete bilingual parity.'}
        </p>

        {/* Primary View Switcher */}
        <div className="flex flex-wrap gap-2 pt-2">
          <button
            onClick={() => setActiveTab('knowledge_hub')}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'knowledge_hub'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white/10 text-slate-200 hover:bg-white/20'
            }`}
          >
            <Train className="w-4 h-4" />
            <span>
              {language === 'hi'
                ? `रेलवे ज्ञानकोष: बेसिक से प्रो (${RAILWAY_GK_TOPICS.length} मॉड्यूल)`
                : `Railways Encyclopedia: Basic to Pro (${RAILWAY_GK_TOPICS.length} Modules)`}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('current_affairs')}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'current_affairs'
                ? 'bg-emerald-600 text-white shadow-lg'
                : 'bg-white/10 text-slate-200 hover:bg-white/20'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>
              {language === 'hi'
                ? `समसामयिकी इंजन 2025–2026 (${CURRENT_AFFAIRS_ITEMS.length} घटनाएं)`
                : `Current Affairs Engine 2025–2026 (${CURRENT_AFFAIRS_ITEMS.length} Events)`}
            </span>
          </button>
        </div>
      </div>

      {/* TAB 1: RAILWAY KNOWLEDGE HUB (BASIC TO ADVANCE/PRO) */}
      {activeTab === 'knowledge_hub' && (
        <div className="space-y-6">
          {/* Level Switcher & Search Bar */}
          <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={gkSearch}
                onChange={(e) => setGkSearch(e.target.value)}
                placeholder={
                  language === 'hi'
                    ? 'रेलवे इतिहास, ज़ोन, लोकोमोटिव, कवच, सिग्नलिंग या ट्रैक इंजीनियरिंग में खोजें...'
                    : 'Search Railway history, zones, locomotives, Kavach, signalling, or P-Way engineering...'
                }
                className="w-full pl-10 pr-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white outline-none focus:border-blue-500"
              />
            </div>

            {/* Level Selector Pills */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Depth Level:</span>
                {[
                  { id: 'ALL', label: 'All Levels (संपूर्ण)' },
                  { id: 'basic', label: 'Level 1: Basic / Foundation' },
                  { id: 'intermediate', label: 'Level 2: Intermediate / Operations' },
                  { id: 'advance', label: 'Level 3: Advance / Pro Technical' },
                ].map((lvl) => (
                  <button
                    key={lvl.id}
                    onClick={() => setSelectedLevel(lvl.id as 'ALL' | 'basic' | 'intermediate' | 'advance')}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      selectedLevel === lvl.id
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {lvl.label}
                  </button>
                ))}
              </div>

              <div className="text-xs font-semibold text-slate-400">
                Showing {filteredGkTopics.length} of {RAILWAY_GK_TOPICS.length} Topics
              </div>
            </div>
          </div>

          {/* Interactive Railway Visual Engineering & Operations Blueprint Studio */}
          {(() => {
            const activeBlueprint =
              RAILWAY_BLUEPRINTS.find((b) => b.id === selectedBlueprintId) || RAILWAY_BLUEPRINTS[0];

            return (
              <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 text-white p-5 sm:p-7 rounded-3xl border border-blue-500/30 shadow-xl space-y-6">
                {/* Header & Blueprint Selector Tabs */}
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="p-2 rounded-xl bg-blue-600 text-white">
                        <Layers className="w-4 h-4" />
                      </span>
                      <div>
                        <h2 className="text-base sm:text-lg font-black tracking-tight text-white">
                          {language === 'hi'
                            ? 'भारतीय रेल: आधिकारिक तकनीकी एवं परिचालन आरेख दीर्घा'
                            : 'Indian Railways: Visual Engineering & Operations Blueprint Studio'}
                        </h2>
                        <p className="text-xs text-blue-200">
                          {language === 'hi'
                            ? 'आरआरबी परीक्षाओं के लिए सर्वाधिक महत्वपूर्ण 5 विस्तृत तकनीकी आरेख एवं अवधारणाएं'
                            : 'Explore 5 high-yield explainable engineering blueprints with complete specifications and exam Q&A'}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedImageModal(activeBlueprint.src)}
                      className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-blue-200 hover:text-white text-xs font-bold flex items-center gap-1.5 border border-white/20 transition-all cursor-pointer"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>{language === 'hi' ? 'बड़ा देखें' : 'Zoom Active Blueprint'}</span>
                    </button>
                  </div>

                  {/* 5 Selector Tabs */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 pt-1">
                    {RAILWAY_BLUEPRINTS.map((bp) => {
                      const isSelected = bp.id === activeBlueprint.id;
                      return (
                        <button
                          key={bp.id}
                          onClick={() => setSelectedBlueprintId(bp.id)}
                          className={`p-2.5 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between gap-1 ${
                            isSelected
                              ? 'bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-600/30'
                              : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          <span className="text-[10px] font-bold uppercase tracking-wider block truncate opacity-80">
                            {bp.id === 'signals-track'
                              ? '🚦 Track & Signals'
                              : bp.id === 'loco-traction'
                              ? '⚡ 25kV Traction'
                              : bp.id === 'kavach-atp'
                              ? '🛡️ Kavach 4.0 ATP'
                              : bp.id === 'zones-dfc-map'
                              ? '🗺️ 17 Zones & DFC'
                              : '🚆 Fleet & Ops'}
                          </span>
                          <span className="text-xs font-bold line-clamp-1">
                            {t(bp.badge)}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Main Blueprint Showcase Card */}
                <div className="bg-slate-900/80 rounded-2xl p-4 sm:p-6 border border-white/10 space-y-5">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Left: Image with Zoom Overlay */}
                    <div
                      className="lg:col-span-5 relative group cursor-pointer overflow-hidden rounded-2xl border border-white/20 shadow-lg"
                      onClick={() => setSelectedImageModal(activeBlueprint.src)}
                    >
                      <img
                        src={activeBlueprint.src}
                        alt={t(activeBlueprint.title)}
                        className="w-full h-56 sm:h-64 object-cover group-hover:scale-103 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 backdrop-blur-2xs text-white">
                        <Maximize2 className="w-6 h-6 text-blue-400 animate-pulse" />
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-600/90">
                          {language === 'hi' ? 'पूर्ण आकार में खोलें (Click to Zoom)' : 'Click to View Full Blueprint'}
                        </span>
                      </div>
                      <div className="absolute bottom-2 left-2 right-2 p-1.5 rounded-lg bg-black/70 backdrop-blur-md text-[10px] text-slate-300 text-center font-mono">
                        {language === 'hi' ? 'उच्च रिज़ॉल्यूशन तकनीकी आरेख' : 'High-Resolution Engineering Diagram'}
                      </div>
                    </div>

                    {/* Right: Technical Details & Specifications */}
                    <div className="lg:col-span-7 space-y-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-bold uppercase tracking-wider text-[10px] border border-blue-500/30">
                            {t(activeBlueprint.badge)}
                          </span>
                          <span className="text-[11px] font-mono text-slate-400">
                            ID: {activeBlueprint.id}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-black text-white leading-snug">
                          {t(activeBlueprint.title)}
                        </h3>
                        <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                          {t(activeBlueprint.shortDesc)}
                        </p>
                      </div>

                      {/* Technical Specs Table */}
                      <div className="space-y-1.5 pt-1">
                        <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block">
                          {language === 'hi' ? 'मुख्य तकनीकी विनिर्देश (Technical Specs):' : 'Key Engineering Specifications:'}
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          {activeBlueprint.detailedSpecs.map((spec, sIdx) => (
                            <div
                              key={sIdx}
                              className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-0.5"
                            >
                              <span className="text-[10px] font-semibold text-slate-400 block">
                                {t(spec.label)}
                              </span>
                              <span className="font-bold text-slate-100 text-[11px] block">
                                {t(spec.value)}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Key Takeaways & Exam Q&A Strip */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-3 border-t border-white/10 text-xs">
                    {/* Key Takeaways */}
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                      <span className="font-bold text-blue-300 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                        {language === 'hi' ? 'महत्वपूर्ण अवधारणाएं (Core Takeaways):' : 'Core Conceptual Takeaways:'}
                      </span>
                      <ul className="space-y-1.5 text-slate-300 text-[11px] leading-relaxed">
                        {activeBlueprint.keyTakeaways.map((takeaway, tIdx) => (
                          <li key={tIdx} className="flex items-start gap-1.5">
                            <span className="text-blue-400 font-bold">•</span>
                            <span>{t(takeaway)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* High-Yield Exam Questions */}
                    <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-2">
                      <span className="font-bold text-amber-300 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-amber-400" />
                        {language === 'hi' ? 'आरआरबी परीक्षा में पूछे जाने वाले प्रश्न:' : 'Frequently Tested in RRB Exams:'}
                      </span>
                      <div className="space-y-2 text-[11px]">
                        {activeBlueprint.examQuestions.map((q, qIdx) => (
                          <div key={qIdx} className="space-y-0.5 border-b border-amber-500/10 pb-1.5 last:border-0 last:pb-0">
                            <div className="flex items-center justify-between text-[10px] text-amber-400 font-semibold">
                              <span>Q{qIdx + 1}: {q.examTag}</span>
                            </div>
                            <p className="font-medium text-slate-200">
                              {t(q.question)}
                            </p>
                            <p className="text-emerald-400 font-bold">
                              Ans: {t(q.answer)}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Topics Grid */}
          <div className="space-y-6">
            {filteredGkTopics.map((topic) => (
              <div
                key={topic.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 hover:border-blue-500/40 transition-colors"
              >
                {/* Header Badge Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                        topic.level === 'basic'
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                          : topic.level === 'intermediate'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
                          : 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300'
                      }`}
                    >
                      {topic.level === 'basic'
                        ? 'LEVEL 1: BASIC'
                        : topic.level === 'intermediate'
                        ? 'LEVEL 2: INTERMEDIATE'
                        : 'LEVEL 3: ADVANCE / PRO'}
                    </span>

                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {topic.category}
                    </span>
                  </div>

                  <div className="text-xs text-amber-600 dark:text-amber-400 font-semibold flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{t(topic.examSignificance)}</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white leading-snug">
                  {t(topic.title)}
                </h2>

                {/* Technical Specs Bar if available */}
                {topic.technicalSpecs && topic.technicalSpecs.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                    {topic.technicalSpecs.map((spec, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-2.5 rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50"
                      >
                        <span className="text-[10px] font-bold text-slate-500 uppercase block tracking-wider">
                          {spec.label}
                        </span>
                        <span className="text-xs sm:text-sm font-black text-blue-700 dark:text-blue-300 font-mono mt-0.5 block truncate">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Detailed Facts */}
                <div className="space-y-2 pt-1">
                  {topic.facts.map((fact, fIdx) => (
                    <div
                      key={fIdx}
                      className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex items-start gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                        {fIdx + 1}
                      </div>
                      <div className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 font-sans">
                        {t(fact)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: CURRENT AFFAIRS ENGINE (2025–2026/2027) */}
      {activeTab === 'current_affairs' && (
        <div className="space-y-6">
          {/* Category Filter & Search Bar */}
          <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={caSearch}
                onChange={(e) => setCaSearch(e.target.value)}
                placeholder={
                  language === 'hi'
                    ? 'कवच 4.0, बजट, चंद्रयान-4, ओलंपिक, शतरंज, नियुक्ति या योजना में खोजें...'
                    : 'Search Kavach 4.0, budget, Chandrayaan-4, Olympics, Chess Olympiad, schemes...'
                }
                className="w-full pl-10 pr-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white outline-none focus:border-emerald-500"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Category:</span>
                {[
                  { id: 'ALL', label: 'All Categories' },
                  { id: 'Railways', label: 'Railways (रेलवे)' },
                  { id: 'National', label: 'National Schemes' },
                  { id: 'Science & Tech', label: 'Science & Space' },
                  { id: 'Economy', label: 'Economy & Budget' },
                  { id: 'Sports', label: 'Sports & Olympics' },
                  { id: 'Awards & Honors', label: 'Awards & Honors' },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCaCategory(cat.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      selectedCaCategory === cat.id
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              <div className="text-xs font-semibold text-slate-400">
                Showing {filteredCaItems.length} of {CURRENT_AFFAIRS_ITEMS.length} Events
              </div>
            </div>
          </div>

          {/* Current Affairs Cards Grid */}
          <div className="space-y-4">
            {filteredCaItems.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3.5 hover:border-emerald-500/40 transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                        item.category === 'Railways'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
                          : item.category === 'Science & Tech'
                          ? 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300'
                          : item.category === 'Sports'
                          ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                          : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                      }`}
                    >
                      {item.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400">{item.date}</span>
                  </div>

                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    {t(item.examRelevance)}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-snug">
                  {t(item.headline)}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  {t(item.summary)}
                </p>

                {/* Key Points if available */}
                {item.keyPoints && item.keyPoints.length > 0 && (
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-1.5">
                    <strong className="block text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                      Key Highlights for Examination:
                    </strong>
                    {item.keyPoints.map((kp, kpIdx) => (
                      <div key={kpIdx} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{t(kp)}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Official Source: {item.source}</span>
                  <span className="font-mono">ID: {item.id}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Image Modal */}
      {selectedImageModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImageModal(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 bg-slate-800 border-b border-slate-700 text-white">
              <span className="font-bold text-sm">
                {language === 'hi' ? 'भारतीय रेल आधिकारिक तकनीकी आरेख' : 'Official Indian Railways Technical Schematic'}
              </span>
              <button
                onClick={() => setSelectedImageModal(null)}
                className="p-1 rounded-lg hover:bg-slate-700 text-slate-300 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-2 overflow-auto max-h-[80vh]">
              <img
                src={selectedImageModal}
                alt="Enlarged schematic"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

