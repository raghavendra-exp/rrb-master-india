import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  ArrowRight,
  GraduationCap,
  FileText,
  FlaskConical,
  Wrench,
  Layers,
  Search,
  Calculator,
  Brain,
  Globe,
  Train,
  Zap,
  Laptop,
  Leaf,
  Building2,
  Sparkles,
  Cpu,
  ChevronDown,
  ChevronUp,
  Image as ImageIcon,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import {
  MASTER_SECTIONS_DATA,
  CROSS_TIER_PROFILE_MATRIX,
  type ExamSectionData,
  type MasterSubjectModule,
} from '../data/rrb/masterTopics';

export const SyllabusPage: React.FC<{ onNavigate: (tab: string) => void }> = ({ onNavigate }) => {
  const { t, language } = useLanguage();

  // Active section tab: 'ntpc-graduate' | 'ntpc-undergraduate' | 'group-d' | 'rrb-je' | 'cross-tier'
  const [activeSectionId, setActiveSectionId] = useState<string>('ntpc-graduate');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedTopics, setExpandedTopics] = useState<Record<string, boolean>>({});
  const [showImageBanner, setShowImageBanner] = useState<boolean>(true);
  const [currentImageModal, setCurrentImageModal] = useState<string | null>(null);

  // Toggle topic expansion
  const toggleTopic = (id: string) => {
    setExpandedTopics((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Expand all / collapse all
  const expandAll = (module: MasterSubjectModule) => {
    const newState: Record<string, boolean> = { ...expandedTopics };
    module.subTopics.forEach((st) => {
      newState[st.id] = true;
    });
    setExpandedTopics(newState);
  };

  const collapseAll = (module: MasterSubjectModule) => {
    const newState: Record<string, boolean> = { ...expandedTopics };
    module.subTopics.forEach((st) => {
      newState[st.id] = false;
    });
    setExpandedTopics(newState);
  };

  // Active Section Data
  const activeSection: ExamSectionData | undefined = useMemo(() => {
    return MASTER_SECTIONS_DATA.find((s) => s.sectionId === activeSectionId);
  }, [activeSectionId]);

  // Filtered Modules based on Search Query
  const filteredModules = useMemo(() => {
    if (!activeSection) return [];
    if (!searchQuery.trim()) return activeSection.modules;

    const query = searchQuery.toLowerCase().trim();
    return activeSection.modules
      .map((mod) => {
        const matchesModule =
          mod.title.en.toLowerCase().includes(query) ||
          mod.title.hi.toLowerCase().includes(query) ||
          mod.subtitle.en.toLowerCase().includes(query) ||
          mod.subtitle.hi.toLowerCase().includes(query);

        const matchingSubTopics = mod.subTopics.filter((st) => {
          return (
            st.title.en.toLowerCase().includes(query) ||
            st.title.hi.toLowerCase().includes(query) ||
            st.summary.en.toLowerCase().includes(query) ||
            st.summary.hi.toLowerCase().includes(query) ||
            (st.formulas && st.formulas.some((f) => f.toLowerCase().includes(query))) ||
            (st.keyTerms && st.keyTerms.some((k) => k.toLowerCase().includes(query))) ||
            st.bulletPoints.some(
              (bp) => bp.en.toLowerCase().includes(query) || bp.hi.toLowerCase().includes(query)
            )
          );
        });

        if (matchesModule || matchingSubTopics.length > 0) {
          return {
            ...mod,
            subTopics: matchesModule ? mod.subTopics : matchingSubTopics,
          };
        }
        return null;
      })
      .filter(Boolean) as MasterSubjectModule[];
  }, [activeSection, searchQuery]);

  // Helper icon selector
  const renderModuleIcon = (iconType: string) => {
    switch (iconType) {
      case 'math':
        return <Calculator className="w-5 h-5 text-blue-600" />;
      case 'brain':
        return <Brain className="w-5 h-5 text-indigo-600" />;
      case 'globe':
        return <Globe className="w-5 h-5 text-emerald-600" />;
      case 'train':
        return <Train className="w-5 h-5 text-amber-600" />;
      case 'flask':
        return <FlaskConical className="w-5 h-5 text-rose-600" />;
      case 'building':
        return <Building2 className="w-5 h-5 text-amber-700" />;
      case 'wrench':
        return <Wrench className="w-5 h-5 text-orange-600" />;
      case 'zap':
        return <Zap className="w-5 h-5 text-yellow-500" />;
      case 'cpu':
        return <Cpu className="w-5 h-5 text-cyan-600" />;
      case 'laptop':
        return <Laptop className="w-5 h-5 text-blue-500" />;
      case 'leaf':
        return <Leaf className="w-5 h-5 text-emerald-600" />;
      default:
        return <BookOpen className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Breadcrumb
        items={[
          { label: language === 'hi' ? 'पाठ्यक्रम' : 'Syllabus' },
          { label: language === 'hi' ? 'आधिकारिक आरआरबी मास्टर पाठ्यक्रम एवं विषय संरचना' : 'Official RRB Master Curriculum & Topic Architecture' },
        ]}
        onNavigate={onNavigate}
      />

      {/* Header Banner */}
      <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-blue-950 via-indigo-950 to-slate-900 text-white shadow-2xl relative overflow-hidden border border-blue-900/50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="relative space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-500/30">
              <BookOpen className="w-3.5 h-3.5" />
              Official Railway Board Curriculum (CEN 2024–2026)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
              <Sparkles className="w-3 h-3" />
              Graduate • Undergraduate • Group D • JE
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
            {language === 'hi'
              ? 'आरआरबी मास्टर पाठ्यक्रम: विस्तृत अध्याय, सूत्र एवं विषय संरचना'
              : 'RRB Master Curriculum: Comprehensive Topics, Formulas & Architecture'}
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            {language === 'hi'
              ? 'एनटीपीसी ग्रेजुएट, अंडरग्रेजुएट, ग्रुप डी और आरआरबी जेई के लिए आधिकारिक अधिसूचनाओं (CEN 05/2024, 06/2024, 03/2024, RRC 01/2019) के आधार पर निर्मित पूर्णतः विस्तृत पाठ्यक्रम।'
              : 'Comprehensive topic-by-topic breakdown directly aligned with official Centralized Employment Notices. Includes post profiles, testing engines, core formulas, and engineering discipline trees.'}
          </p>

          {/* Section Selector Tabs */}
          <div className="flex flex-wrap gap-2 pt-2">
            <button
              onClick={() => {
                setActiveSectionId('ntpc-graduate');
                setSearchQuery('');
              }}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeSectionId === 'ntpc-graduate'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-white/10 text-slate-300 hover:bg-white/15'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Section 1: NTPC Graduate</span>
            </button>

            <button
              onClick={() => {
                setActiveSectionId('ntpc-undergraduate');
                setSearchQuery('');
              }}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeSectionId === 'ntpc-undergraduate'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-white/10 text-slate-300 hover:bg-white/15'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Section 2: NTPC Undergrad</span>
            </button>

            <button
              onClick={() => {
                setActiveSectionId('group-d');
                setSearchQuery('');
              }}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeSectionId === 'group-d'
                  ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/30'
                  : 'bg-white/10 text-slate-300 hover:bg-white/15'
              }`}
            >
              <FlaskConical className="w-4 h-4" />
              <span>Section 3: Group D (Science 25M)</span>
            </button>

            <button
              onClick={() => {
                setActiveSectionId('rrb-je');
                setSearchQuery('');
              }}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeSectionId === 'rrb-je'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'bg-white/10 text-slate-300 hover:bg-white/15'
              }`}
            >
              <Wrench className="w-4 h-4" />
              <span>Section 4: RRB JE (Tech 100M)</span>
            </button>

            <button
              onClick={() => {
                setActiveSectionId('cross-tier');
                setSearchQuery('');
              }}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeSectionId === 'cross-tier'
                  ? 'bg-amber-500 text-slate-950 font-black shadow-lg shadow-amber-500/30'
                  : 'bg-white/10 text-slate-300 hover:bg-white/15'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Section 5: Cross-Tier Matrix</span>
            </button>
          </div>
        </div>
      </div>

      {/* Visual Curriculum Infographic Banner */}
      {showImageBanner && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                {language === 'hi' ? 'आरआरबी परीक्षा पाठ्यक्रम इन्फोग्राफिक आरेख' : 'RRB Curriculum Visual Architecture Infographic'}
              </span>
            </div>
            <button
              onClick={() => setShowImageBanner(false)}
              className="text-slate-400 hover:text-slate-600 text-xs font-medium cursor-pointer"
            >
              {language === 'hi' ? 'छुपाएं' : 'Hide'}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              className="group relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 cursor-pointer shadow-sm hover:shadow-md transition-all"
              onClick={() => setCurrentImageModal('/assets/rrb_master_curriculum.jpg')}
            >
              <img
                src="/assets/rrb_master_curriculum.jpg"
                alt="RRB Recruitment Curriculum Overview"
                className="w-full h-48 sm:h-56 object-cover group-hover:scale-102 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3.5">
                <span className="text-white text-xs font-bold">
                  {language === 'hi' ? 'संपूर्ण आरआरबी पाठ्यक्रम ब्लूप्रिंट (वंदे भारत)' : 'Master RRB Curriculum Blueprint (Vande Bharat)'}
                </span>
              </div>
            </div>

            <div
              className="group relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 cursor-pointer shadow-sm hover:shadow-md transition-all"
              onClick={() => setCurrentImageModal('/assets/rrb_science_engineering_lab.jpg')}
            >
              <img
                src="/assets/rrb_science_engineering_lab.jpg"
                alt="Railway Group D & JE Technical Laboratory"
                className="w-full h-48 sm:h-56 object-cover group-hover:scale-102 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3.5">
                <span className="text-white text-xs font-bold">
                  {language === 'hi' ? 'ग्रुप डी विज्ञान एवं जेई तकनीकी प्रयोगशाला आरेख' : 'Group D Science & JE Technical Laboratory Schematic'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full Screen Image Modal */}
      {currentImageModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setCurrentImageModal(null)}
        >
          <div className="relative max-w-5xl w-full bg-slate-900 rounded-3xl overflow-hidden p-2 border border-slate-700 shadow-2xl">
            <img
              src={currentImageModal}
              alt="Curriculum Schematic"
              className="w-full max-h-[85vh] object-contain rounded-2xl"
            />
            <button
              onClick={() => setCurrentImageModal(null)}
              className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/60 text-white font-bold text-xs hover:bg-black/90 cursor-pointer"
            >
              ✕ Close
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SECTION 5: CROSS-TIER MATRIX VIEW                                        */}
      {/* ========================================================================= */}
      {activeSectionId === 'cross-tier' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 uppercase tracking-wider">
                Section 5
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1.5">
                {language === 'hi' ? 'रेलवे भर्ती परीक्षा क्रॉस-टियर प्रोफ़ाइल मैट्रिक्स' : 'Railway Examinations Cross-Tier Profile Matrix'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                {language === 'hi'
                  ? 'एनटीपीसी ग्रेजुएट, अंडरग्रेजुएट, ग्रुप डी और आरआरबी जेई के बीच शैक्षणिक, लिखित चरण, तकनीकी भार व शारीरिक मानकों का तुलनात्मक विश्लेषण।'
                  : 'Factual cross-examination comparison of minimum academic qualification, stage filters, technical loadings, psychometric CBAT, and physical testing.'}
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                  <th className="p-3.5 font-bold text-slate-800 dark:text-slate-200 w-1/5">
                    {language === 'hi' ? 'मूल्यांकन पैरामीटर' : 'Evaluated Parameter'}
                  </th>
                  <th className="p-3.5 font-bold text-blue-700 dark:text-blue-300 w-1/5">
                    NTPC Graduate (L5 & L6)
                  </th>
                  <th className="p-3.5 font-bold text-indigo-700 dark:text-indigo-300 w-1/5">
                    NTPC Undergraduate (L2 & L3)
                  </th>
                  <th className="p-3.5 font-bold text-rose-700 dark:text-rose-300 w-1/5">
                    Group D / Level-1
                  </th>
                  <th className="p-3.5 font-bold text-purple-700 dark:text-purple-300 w-1/5">
                    RRB JE (Junior Engineer)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                {CROSS_TIER_PROFILE_MATRIX.map((row, rIdx) => (
                  <tr
                    key={rIdx}
                    className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
                  >
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white bg-slate-50/30 dark:bg-slate-800/20">
                      {t(row.parameter)}
                    </td>
                    <td className="p-3.5 text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                      {t(row.ntpcGraduate)}
                    </td>
                    <td className="p-3.5 text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                      {t(row.ntpcUndergraduate)}
                    </td>
                    <td className="p-3.5 text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                      {t(row.groupD)}
                    </td>
                    <td className="p-3.5 text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                      {t(row.rrbJE)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SECTIONS 1 - 4: DETAILED EXAM MODULES & POST PROFILE                      */}
      {/* ========================================================================= */}
      {activeSection && activeSectionId !== 'cross-tier' && (
        <div className="space-y-6">
          {/* Post Profile & Testing Engine Card */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-500/20 text-blue-700 dark:text-blue-300 uppercase tracking-wider font-mono">
                  {t(activeSection.title)}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1.5">
                  {t(activeSection.subtitle)}
                </h2>
              </div>
            </div>

            {/* Designations Badges */}
            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400 block">
                {language === 'hi' ? 'आधिकारिक पद एवं पदनाम (Official Designations):' : 'Official Post Designations:'}
              </span>
              <div className="flex flex-wrap gap-2">
                {activeSection.postProfiles.designations.map((desig, dIdx) => (
                  <span
                    key={dIdx}
                    className="px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold border border-slate-200/80 dark:border-slate-700 shadow-2xs"
                  >
                    {t(desig)}
                  </span>
                ))}
              </div>
            </div>

            {/* Testing Engine Pipeline & Evaluation Core */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-1">
              <div className="p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/50 space-y-1.5">
                <span className="font-bold text-blue-950 dark:text-blue-300 block uppercase text-[10px] tracking-wider">
                  {language === 'hi' ? 'परीक्षण इंजन एवं चरण (Testing Engine):' : 'Testing Engine Pipeline:'}
                </span>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {t(activeSection.postProfiles.testingEngine)}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/50 space-y-1.5">
                <span className="font-bold text-amber-950 dark:text-amber-300 block uppercase text-[10px] tracking-wider">
                  {language === 'hi' ? 'मूल्यांकन कोर एवं दक्षता (Evaluation Core):' : 'Evaluation Core:'}
                </span>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {t(activeSection.postProfiles.evaluationCore)}
                </p>
              </div>
            </div>

            {/* Specialized ASCII Tree / Branch Architecture Diagram */}
            {activeSection.asciiTree && (
              <div className="pt-2">
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 text-emerald-400 font-mono text-[11px] sm:text-xs overflow-x-auto border border-slate-800 shadow-inner space-y-2">
                  <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800">
                    <span className="text-[10px] uppercase font-bold text-amber-400">
                      {activeSection.asciiTree.title}
                    </span>
                    <span className="text-[10px] text-slate-500">Official Branch Taxonomy</span>
                  </div>
                  <pre className="whitespace-pre leading-relaxed font-mono">
                    {activeSection.asciiTree.content}
                  </pre>
                </div>
              </div>
            )}
          </div>

          {/* Search & Topic Filter Bar */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  language === 'hi'
                    ? 'अध्याय, सूत्र, प्रमेय या विषय खोजें (उदा. Euler, Mirror, BODMAS, Kavach, Nephron)...'
                    : 'Search any topic, theorem, formula, or law (e.g. Euler, Mirror, BODMAS, Kavach, Nephron)...'
                }
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-semibold cursor-pointer shrink-0"
              >
                Clear
              </button>
            )}
          </div>

          {/* Subject Modules List */}
          <div className="space-y-6">
            {filteredModules.length === 0 ? (
              <div className="p-8 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 text-slate-500 text-sm">
                No matching topics found for "{searchQuery}". Try a different keyword.
              </div>
            ) : (
              filteredModules.map((module) => (
                <div
                  key={module.id}
                  className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5"
                >
                  {/* Module Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 shrink-0 mt-0.5">
                        {renderModuleIcon(module.iconType)}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                          {t(module.title)}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          {t(module.subtitle)}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 self-start sm:self-center">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900 font-mono">
                        CBT-1: {module.weightage.cbt1}
                      </span>
                      {module.weightage.cbt2 && (
                        <span className="text-[11px] font-bold px-2.5 py-1 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-900 font-mono">
                          CBT-2: {module.weightage.cbt2}
                        </span>
                      )}
                      <div className="flex items-center gap-1 ml-2">
                        <button
                          onClick={() => expandAll(module)}
                          className="text-[10px] text-blue-600 dark:text-blue-400 font-bold hover:underline cursor-pointer"
                        >
                          Expand All
                        </button>
                        <span className="text-slate-300">|</span>
                        <button
                          onClick={() => collapseAll(module)}
                          className="text-[10px] text-slate-500 font-bold hover:underline cursor-pointer"
                        >
                          Collapse All
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Sub-Topics List */}
                  <div className="space-y-4">
                    {module.subTopics.map((st) => {
                      const isExpanded = expandedTopics[st.id] ?? true;
                      return (
                        <div
                          key={st.id}
                          className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 overflow-hidden transition-all"
                        >
                          {/* Subtopic Header */}
                          <div
                            onClick={() => toggleTopic(st.id)}
                            className="p-4 flex items-center justify-between gap-3 cursor-pointer select-none hover:bg-slate-100/60 dark:hover:bg-slate-800/60 transition-colors"
                          >
                            <div className="space-y-1">
                              <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
                                <span>{t(st.title)}</span>
                                {st.formulas && st.formulas.length > 0 && (
                                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-bold font-mono">
                                    {st.formulas.length} Formulas
                                  </span>
                                )}
                              </h4>
                              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                                {t(st.summary)}
                              </p>
                            </div>

                            <button className="p-1 rounded-lg text-slate-400 shrink-0">
                              {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                            </button>
                          </div>

                          {/* Expanded Content */}
                          {isExpanded && (
                            <div className="p-4 pt-0 space-y-3.5 border-t border-slate-200/60 dark:border-slate-800 text-xs">
                              {/* Bullet points */}
                              <div className="space-y-1.5 pt-2">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                                  {language === 'hi' ? 'मुख्य पाठ्यक्रम बिंदु (Core Points):' : 'Key Syllabus Directives:'}
                                </span>
                                {st.bulletPoints.map((bp, bIdx) => (
                                  <div key={bIdx} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                                    <span className="text-blue-600 font-bold mt-0.5">•</span>
                                    <span className="leading-relaxed">{t(bp)}</span>
                                  </div>
                                ))}
                              </div>

                              {/* Formulas Box */}
                              {st.formulas && st.formulas.length > 0 && (
                                <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
                                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 block flex items-center gap-1">
                                    <Calculator className="w-3 h-3" />
                                    <span>Official Formulas & Mathematical Models</span>
                                  </span>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 font-mono text-[11px] text-blue-900 dark:text-blue-200">
                                    {st.formulas.map((f, fIdx) => (
                                      <div
                                        key={fIdx}
                                        className="p-2 rounded-lg bg-blue-50/60 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40 font-semibold"
                                      >
                                        {f}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Key terms and relevance */}
                              <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-slate-100 dark:border-slate-800/60 text-[11px]">
                                {st.keyTerms && (
                                  <div className="flex flex-wrap gap-1 items-center">
                                    <span className="text-slate-400 text-[10px] font-medium mr-1">Tags:</span>
                                    {st.keyTerms.map((kt, kIdx) => (
                                      <span
                                        key={kIdx}
                                        className="px-2 py-0.5 rounded-md bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium text-[10px]"
                                      >
                                        {kt}
                                      </span>
                                    ))}
                                  </div>
                                )}

                                <div className="text-slate-500 italic text-[10px]">
                                  <strong>Weightage:</strong> {t(st.examRelevance)}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Direct Action Link */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-xs">
                    <span className="text-slate-400 text-[11px]">
                      {module.subTopics.length} comprehensive modules loaded
                    </span>
                    <button
                      onClick={() => onNavigate('questions')}
                      className="py-2 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer"
                    >
                      <span>Practice {t(module.title).split(' ')[0]} MCQs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};
