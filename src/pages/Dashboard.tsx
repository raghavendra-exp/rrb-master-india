import React from 'react';
import {
  PlayCircle,
  Zap,
  Layers,
  Activity,
  Keyboard,
  Compass,
  Calendar,
  ArrowRight,
  Sparkles,
  ChevronRight,
  BookOpen,
  Globe,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface DashboardProps {
  onNavigate: (tab: string, extraData?: unknown) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const { language } = useLanguage();
  const [activeModalImage, setActiveModalImage] = React.useState<string | null>(null);

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      {/* Hero Master Section */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-950 text-white p-6 sm:p-10 shadow-2xl border border-blue-900/40">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            {language === 'hi' ? 'सम्पूर्ण रेलवे भर्ती परीक्षा मंच 2026-2027' : 'Integrated Railway Preparation Engine 2026-2027'}
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            RRB MASTER INDIA
          </h1>

          <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
            {language === 'hi'
              ? 'आरआरबी एनटीपीसी (स्नातक व 12वीं) • ग्रुप डी (लेवल-1) • कनिष्ठ अभियंता (JE)। आधिकारिक अधिसूचनाएं, वास्तविक सीबीटी सिमुलेटर, 21 भर्ती बोर्ड, पीईटी/साइको/टाइपिंग लैब एवं संपूर्ण पाठ्यक्रम।'
              : 'RRB NTPC (Graduate & Undergraduate) • Group D (Level-1) • RRB JE (Technical). Official CEN notifications, authentic TCS-pattern CBT mocks, 21 RRB zone directories, PET/CBAT/Typing speed labs, and comprehensive question banks.'}
          </p>

          {/* Key Metrics Stats Pill Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1 max-w-2xl">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10 hover-card-lift">
              <div className="text-base sm:text-lg font-black text-amber-400">5,200+</div>
              <div className="text-[10px] text-slate-300 font-semibold">{language === 'hi' ? 'अभ्यास व PYQs' : 'Practice & PYQs'}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10 hover-card-lift">
              <div className="text-base sm:text-lg font-black text-emerald-400">43 Years</div>
              <div className="text-[10px] text-slate-300 font-semibold">{language === 'hi' ? '1982-2026 अभिलेखागार' : '1982–2026 Archive'}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10 hover-card-lift">
              <div className="text-base sm:text-lg font-black text-blue-400">21 Zones</div>
              <div className="text-[10px] text-slate-300 font-semibold">{language === 'hi' ? 'आधिकारिक आरआरबी' : 'Official Boards'}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10 hover-card-lift">
              <div className="text-base sm:text-lg font-black text-purple-300">100% Free</div>
              <div className="text-[10px] text-slate-300 font-semibold">{language === 'hi' ? 'पारदर्शी व सुरक्षित' : 'Anti-Piracy Open'}</div>
            </div>
          </div>

          {/* Quick CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <button
              onClick={() => onNavigate('mock-tests')}
              className="py-3 px-6 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg shadow-blue-500/30 transition-all cursor-pointer hover-card-lift"
            >
              <PlayCircle className="w-4 h-4" />
              <span>{language === 'hi' ? 'लाइव सीबीटी मॉक शुरू करें' : 'Launch Real CBT Mock'}</span>
            </button>

            <button
              onClick={() => onNavigate('exam-discovery')}
              className="py-3 px-5 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold flex items-center gap-2 backdrop-blur-md border border-white/20 transition-all cursor-pointer hover-card-lift"
            >
              <Compass className="w-4 h-4 text-amber-400" />
              <span>{language === 'hi' ? 'पात्रता खोजक (Eligibility)' : 'Which RRB Exam Can I Apply For?'}</span>
            </button>
          </div>
        </div>

        {/* Ambient Decorative background glow */}
        <div className="absolute right-0 bottom-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none overflow-hidden" />
      </section>

      {/* Live Cyclic Calendar Highlight */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-blue-600" />
            <h2 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              {language === 'hi' ? 'रेलवे बोर्ड वार्षिक भर्ती कैलेंडर' : 'Ministry of Railways Annual Recruitment Cycle'}
            </h2>
          </div>
          <button
            onClick={() => onNavigate('updates')}
            className="text-xs text-blue-600 hover:underline flex items-center gap-1 font-semibold"
          >
            <span>{language === 'hi' ? 'सभी देखें' : 'View All Notices'}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
            <span className="font-bold text-blue-600 dark:text-blue-400 block">Q1: Jan - Mar</span>
            <span className="font-semibold text-slate-800 dark:text-slate-200 mt-1 block">ALP (Assistant Loco Pilot)</span>
            <span className="text-[11px] text-slate-500">CEN 01 Cycle</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
            <span className="font-bold text-indigo-600 dark:text-indigo-400 block">Q2: Apr - Jun</span>
            <span className="font-semibold text-slate-800 dark:text-slate-200 mt-1 block">Technicians (Gr I & III)</span>
            <span className="text-[11px] text-slate-500">CEN 02 Cycle</span>
          </div>
          <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900">
            <span className="font-bold text-blue-700 dark:text-blue-300 block">Q3: Jul - Sep</span>
            <span className="font-semibold text-blue-900 dark:text-blue-100 mt-1 block">NTPC (Grad & Undergrad)</span>
            <span className="text-[11px] text-blue-600 dark:text-blue-400">CEN 06/2026 & 05/2024</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
            <span className="font-bold text-purple-600 dark:text-purple-400 block">Q4: Oct - Dec</span>
            <span className="font-semibold text-slate-800 dark:text-slate-200 mt-1 block">Level-1 (Group D) & JE</span>
            <span className="text-[11px] text-slate-500">CEN 04/2026, 03/2024 & Level-1</span>
          </div>
        </div>
      </section>

      {/* 3 Core Examinations Cards */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
            {language === 'hi' ? 'प्रमुख रेलवे भर्ती परीक्षाएं' : 'Primary Examination Hubs'}
          </h2>
          <span className="text-xs text-slate-500">Official CEN Grounded</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* NTPC */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 border-t-4 border-t-blue-500 shadow-sm hover:shadow-xl transition-all hover-card-lift flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 uppercase tracking-wider">
                  CEN 06/2026 & 05/2024
                </span>
                <span className="text-xs font-semibold text-slate-400">Level 2 to 6</span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                RRB NTPC Master
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Station Master, Goods Train Manager, Commercial Supervisors, Senior & Junior Typist Clerks.
              </p>
              <div className="text-xs space-y-1 text-slate-600 dark:text-slate-300 pt-2 border-t border-slate-100 dark:border-slate-800">
                <div className="flex justify-between">
                  <span>CBT-1 Duration:</span>
                  <span className="font-bold">90 Mins (100 Qs)</span>
                </div>
                <div className="flex justify-between">
                  <span>CBT-2 Duration:</span>
                  <span className="font-bold">90 Mins (120 Qs)</span>
                </div>
                <div className="flex justify-between">
                  <span>Skill Test:</span>
                  <span className="font-bold text-amber-600">CBAT / Typing</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => onNavigate('rrb-ntpc')}
              className="mt-6 w-full py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm hover:shadow"
            >
              <span>Explore NTPC Hub</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Group D */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 border-t-4 border-t-emerald-500 shadow-sm hover:shadow-xl transition-all hover-card-lift flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 uppercase tracking-wider">
                  CEN 08/2024 & 09/2025
                </span>
                <span className="text-xs font-semibold text-slate-400">7th CPC Level 1</span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                RRB Group D Master
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Track Maintainer Gr IV, Assistant Pointsman, Workshop Assistants across Indian Railways divisions.
              </p>
              <div className="text-xs space-y-1 text-slate-600 dark:text-slate-300 pt-2 border-t border-slate-100 dark:border-slate-800">
                <div className="flex justify-between">
                  <span>CBT Duration:</span>
                  <span className="font-bold">90 Mins (100 Qs)</span>
                </div>
                <div className="flex justify-between">
                  <span>General Science:</span>
                  <span className="font-bold">25 Marks (10th NCERT)</span>
                </div>
                <div className="flex justify-between">
                  <span>Physical Test:</span>
                  <span className="font-bold text-emerald-600">PET (1000m + Weight)</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => onNavigate('rrb-group-d')}
              className="mt-6 w-full py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm hover:shadow"
            >
              <span>Explore Group D Hub</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* RRB JE */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 border-t-4 border-t-purple-500 shadow-sm hover:shadow-xl transition-all hover-card-lift flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 uppercase tracking-wider">
                  CEN 04/2026 & 03/2024
                </span>
                <span className="text-xs font-semibold text-slate-400">7th CPC Level 6</span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                RRB JE Master
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Junior Engineers in Civil, Mechanical, Electrical, Electronics, S&T, Computer / IT, and DMS cadres.
              </p>
              <div className="text-xs space-y-1 text-slate-600 dark:text-slate-300 pt-2 border-t border-slate-100 dark:border-slate-800">
                <div className="flex justify-between">
                  <span>CBT-1 Screening:</span>
                  <span className="font-bold">90 Mins (100 Qs)</span>
                </div>
                <div className="flex justify-between">
                  <span>CBT-2 Technical:</span>
                  <span className="font-bold">120 Mins (150 Qs)</span>
                </div>
                <div className="flex justify-between">
                  <span>Technical Weightage:</span>
                  <span className="font-bold text-purple-600">100 Technical Marks</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => onNavigate('rrb-je')}
              className="mt-6 w-full py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-purple-600 dark:hover:bg-purple-600 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm hover:shadow"
            >
              <span>Explore JE Hub</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 5-Section Master Curriculum & Technical Infrastructure Showcase */}
      <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl space-y-6 border border-blue-900/50">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              {language === 'hi' ? 'आधिकारिक 5-खंड पाठ्यक्रम एवं तकनीकी रूपरेखा' : 'Official 5-Section Master Curriculum & Blueprint'}
            </div>
            <h2 className="text-xl sm:text-2xl font-black">
              {language === 'hi'
                ? 'रेलवे परीक्षा पाठ्यक्रम, विज्ञान प्रयोगशाला एवं तकनीकी कोर'
                : 'Railway Master Curriculum, Science Lab & Technical Engineering Core'}
            </h2>
          </div>
          <button
            onClick={() => onNavigate('syllabus')}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-md"
          >
            <span>{language === 'hi' ? 'संपूर्ण पाठ्यक्रम एक्सप्लोरर' : 'Explore All 5 Sections'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Section Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Section 1 */}
          <div
            onClick={() => onNavigate('syllabus', { section: 1 })}
            className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/50 transition-all cursor-pointer space-y-2 flex flex-col justify-between"
          >
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-300 uppercase tracking-wider">
                Section 1 • Levels 5 & 6
              </span>
              <h4 className="font-bold text-sm text-white">NTPC Graduate Level</h4>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Station Master, Goods Guard, Sr Clerk. Advanced Math (Euler totient, divisibility, grouped median), 7x7 matrix puzzles, Syllogisms.
              </p>
            </div>
            <span className="text-xs font-bold text-blue-400 flex items-center gap-1 pt-1">
              View Syllabus →
            </span>
          </div>

          {/* Section 2 */}
          <div
            onClick={() => onNavigate('syllabus', { section: 2 })}
            className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-400/50 transition-all cursor-pointer space-y-2 flex flex-col justify-between"
          >
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 uppercase tracking-wider">
                Section 2 • Levels 2 & 3
              </span>
              <h4 className="font-bold text-sm text-white">NTPC Undergrad Level</h4>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Junior Clerk, Trains Clerk, Commercial Clerk. Speed calculation, BODMAS, cross-multiplication, EJOTY, Class 10 Science facts.
              </p>
            </div>
            <span className="text-xs font-bold text-indigo-400 flex items-center gap-1 pt-1">
              View Syllabus →
            </span>
          </div>

          {/* Section 3 */}
          <div
            onClick={() => onNavigate('syllabus', { section: 3 })}
            className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-400/50 transition-all cursor-pointer space-y-2 flex flex-col justify-between"
          >
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 uppercase tracking-wider">
                Section 3 • Level 1
              </span>
              <h4 className="font-bold text-sm text-white">Group D Science Lab (25M)</h4>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Optics ray tracing (1/f = 1/v + 1/u), Ohm’s law circuits, pH 0-14, POP at 373K, Mendel 9:3:3:1, Lindeman 10% trophic law.
              </p>
            </div>
            <span className="text-xs font-bold text-emerald-400 flex items-center gap-1 pt-1">
              View Science Lab →
            </span>
          </div>

          {/* Section 4 */}
          <div
            onClick={() => onNavigate('je-technical')}
            className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-400/50 transition-all cursor-pointer space-y-2 flex flex-col justify-between"
          >
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300 uppercase tracking-wider">
                Section 4 • Level 6
              </span>
              <h4 className="font-bold text-sm text-white">RRB JE Technical (150M)</h4>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                100M Core Engineering (Civil, Mech, Elec, EC/S&T) + 15M Computers (OSI, CPU) + 10M Environment (ESP, BOD/COD).
              </p>
            </div>
            <span className="text-xs font-bold text-purple-400 flex items-center gap-1 pt-1">
              View Technical Hub →
            </span>
          </div>
        </div>

        {/* Visual Infographics Gallery Row */}
        <div className="pt-2 border-t border-white/10 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                {language === 'hi' ? 'भारतीय रेल एवं तकनीकी आरेख दीर्घा (8 विस्तृत ब्लूप्रिंट्स)' : 'Indian Railways & Technical Blueprint Studio (8 Schematics)'}
              </span>
              <span className="text-[11px] text-blue-300">
                {language === 'hi' ? 'सिग्नलिंग, 25kV ओएचई, कवच 4.0, 17 ज़ोन, ट्रैक एवं लैब आरेखों पर क्लिक कर बड़ा देखें' : 'Click any blueprint to inspect in full-resolution zoom lightbox'}
              </span>
            </div>
            <button
              onClick={() => onNavigate('railway-gk')}
              className="text-xs font-bold text-amber-300 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>{language === 'hi' ? 'रेलवे ज्ञानकोष स्टूडियो खोलें →' : 'Explore All Railway Blueprints →'}</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {/* 1. Track & Signals */}
            <div
              onClick={() => setActiveModalImage('./assets/rrb_railway_signals_track.jpg')}
              className="group relative rounded-2xl overflow-hidden border border-white/15 bg-slate-900 cursor-pointer hover-card-lift shadow-md"
            >
              <img
                src="./assets/rrb_railway_signals_track.jpg"
                alt="P-Way Track & Signals"
                className="w-full h-24 sm:h-28 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="p-2 bg-slate-900/90 text-[10px] font-bold text-slate-200 truncate flex items-center justify-between">
                <span>🚦 P-Way & MACLS Signals</span>
                <span className="text-blue-400">🔍</span>
              </div>
            </div>

            {/* 2. 25kV Traction & OHE */}
            <div
              onClick={() => setActiveModalImage('./assets/rrb_railway_loco_traction.jpg')}
              className="group relative rounded-2xl overflow-hidden border border-white/15 bg-slate-900 cursor-pointer hover-card-lift shadow-md"
            >
              <img
                src="./assets/rrb_railway_loco_traction.jpg"
                alt="25kV Traction & OHE"
                className="w-full h-24 sm:h-28 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="p-2 bg-slate-900/90 text-[10px] font-bold text-slate-200 truncate flex items-center justify-between">
                <span>⚡ 25kV Traction & OHE</span>
                <span className="text-blue-400">🔍</span>
              </div>
            </div>

            {/* 3. Kavach 4.0 ATP */}
            <div
              onClick={() => setActiveModalImage('./assets/rrb_railway_kavach_atp.jpg')}
              className="group relative rounded-2xl overflow-hidden border border-white/15 bg-slate-900 cursor-pointer hover-card-lift shadow-md"
            >
              <img
                src="./assets/rrb_railway_kavach_atp.jpg"
                alt="Kavach 4.0 ATP Architecture"
                className="w-full h-24 sm:h-28 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="p-2 bg-slate-900/90 text-[10px] font-bold text-slate-200 truncate flex items-center justify-between">
                <span>🛡️ Kavach 4.0 ATP System</span>
                <span className="text-blue-400">🔍</span>
              </div>
            </div>

            {/* 4. 17 Zones & DFCs Map */}
            <div
              onClick={() => setActiveModalImage('./assets/rrb_railway_zones_map.jpg')}
              className="group relative rounded-2xl overflow-hidden border border-white/15 bg-slate-900 cursor-pointer hover-card-lift shadow-md"
            >
              <img
                src="./assets/rrb_railway_zones_map.jpg"
                alt="17 Zones & DFC Corridors"
                className="w-full h-24 sm:h-28 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="p-2 bg-slate-900/90 text-[10px] font-bold text-slate-200 truncate flex items-center justify-between">
                <span>🗺️ 17 Zones & DFC Map</span>
                <span className="text-blue-400">🔍</span>
              </div>
            </div>

            {/* 5. Railway Operations */}
            <div
              onClick={() => setActiveModalImage('./assets/rrb_railway_operations.jpg')}
              className="group relative rounded-2xl overflow-hidden border border-white/15 bg-slate-900 cursor-pointer hover-card-lift shadow-md"
            >
              <img
                src="./assets/rrb_railway_operations.jpg"
                alt="Railway Operations"
                className="w-full h-24 sm:h-28 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="p-2 bg-slate-900/90 text-[10px] font-bold text-slate-200 truncate flex items-center justify-between">
                <span>🚆 Vande Bharat & WAG-12</span>
                <span className="text-blue-400">🔍</span>
              </div>
            </div>

            {/* 6. Physics Optics & Circuits */}
            <div
              onClick={() => setActiveModalImage('./assets/rrb_physics_optics_circuits.jpg')}
              className="group relative rounded-2xl overflow-hidden border border-white/15 bg-slate-900 cursor-pointer hover-card-lift shadow-md"
            >
              <img
                src="./assets/rrb_physics_optics_circuits.jpg"
                alt="Physics Optics & Circuits"
                className="w-full h-24 sm:h-28 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="p-2 bg-slate-900/90 text-[10px] font-bold text-slate-200 truncate flex items-center justify-between">
                <span>🔬 Optics & Circuits (25M)</span>
                <span className="text-blue-400">🔍</span>
              </div>
            </div>

            {/* 7. Engineering Lab */}
            <div
              onClick={() => setActiveModalImage('./assets/rrb_science_engineering_lab.jpg')}
              className="group relative rounded-2xl overflow-hidden border border-white/15 bg-slate-900 cursor-pointer hover-card-lift shadow-md"
            >
              <img
                src="./assets/rrb_science_engineering_lab.jpg"
                alt="Engineering Lab"
                className="w-full h-24 sm:h-28 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="p-2 bg-slate-900/90 text-[10px] font-bold text-slate-200 truncate flex items-center justify-between">
                <span>⚙️ JE Applied Science Lab</span>
                <span className="text-blue-400">🔍</span>
              </div>
            </div>

            {/* 8. Master Curriculum */}
            <div
              onClick={() => setActiveModalImage('./assets/rrb_master_curriculum.jpg')}
              className="group relative rounded-2xl overflow-hidden border border-white/15 bg-slate-900 cursor-pointer hover-card-lift shadow-md"
            >
              <img
                src="./assets/rrb_master_curriculum.jpg"
                alt="Master Curriculum"
                className="w-full h-24 sm:h-28 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="p-2 bg-slate-900/90 text-[10px] font-bold text-slate-200 truncate flex items-center justify-between">
                <span>📚 Master Curriculum Blueprint</span>
                <span className="text-blue-400">🔍</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Preparation Labs Section */}
      <section className="space-y-4">
        <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
          {language === 'hi' ? 'विशेष दक्षता एवं तैयारी प्रयोगशालाएं' : 'Specialized Skill & Testing Labs'}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div
            onClick={() => onNavigate('typing-lab')}
            className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 cursor-pointer shadow-xs transition-all group hover-card-lift"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Keyboard className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">Typing Speed Lab</h3>
            <p className="text-[11px] text-slate-500 mt-0.5">30 WPM English / 25 WPM Hindi with official 5% error rule</p>
          </div>

          <div
            onClick={() => onNavigate('cbat-lab')}
            className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-purple-500 cursor-pointer shadow-xs transition-all group hover-card-lift"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">CBAT Psycho Lab</h3>
            <p className="text-[11px] text-slate-500 mt-0.5">Station Master 5-battery test drills & T-score simulator</p>
          </div>

          <div
            onClick={() => onNavigate('pet-lab')}
            className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 cursor-pointer shadow-xs transition-all group hover-card-lift"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">Group D PET Lab</h3>
            <p className="text-[11px] text-slate-500 mt-0.5">1000m running timer & 35kg/20kg weight carry log</p>
          </div>

          <div
            onClick={() => onNavigate('speed-lab')}
            className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500 cursor-pointer shadow-xs transition-all group hover-card-lift"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">Calculation Speed Lab</h3>
            <p className="text-[11px] text-slate-500 mt-0.5">Rapid mental arithmetic & 30-sec GK recall sprints</p>
          </div>
        </div>
      </section>

      {/* 5,000+ Question Bank & 43-Year PYQ Archive Highlight */}
      <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-blue-900/40">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            {language === 'hi' ? 'विशाल 5,200+ अभ्यास प्रश्नकोष' : 'Massive 5,200+ Practice Repository'}
          </div>
          <h2 className="text-xl sm:text-2xl font-black">
            {language === 'hi'
              ? '5,000+ अभ्यास प्रश्न एवं 43 वर्षों (1982–2026) का संपूर्ण PYQ महासंग्रह'
              : '5,000+ Practice Questions & 43-Year (1982–2026) Official PYQ Archive'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {language === 'hi'
              ? 'रेलवे सेवा आयोग (1982) से लेकर नवीनतम टीसीएस ऑनलाइन सीबीटी (2026) तक के सभी प्रश्न, द्विभाषी व्याख्या, विस्तृत चरणबद्ध हल एवं निःशुल्क सरकारी शैक्षिक संसाधन।'
              : 'Complete archive covering Railway Service Commissions (1982) up to TCS online CBTs (2026). Authentic bilingual step-by-step solutions with 1/3 negative marking calibration.'}
          </p>
        </div>

        <div className="flex flex-wrap sm:flex-nowrap gap-3 shrink-0">
          <button
            onClick={() => onNavigate('questions')}
            className="px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>{language === 'hi' ? '5,000+ प्रश्न बैंक खोलें' : 'Browse 5,000+ Questions'}</span>
          </button>
          <button
            onClick={() => onNavigate('books')}
            className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold flex items-center gap-2 backdrop-blur-md border border-white/20 transition-all cursor-pointer"
          >
            <Globe className="w-4 h-4 text-emerald-400" />
            <span>{language === 'hi' ? 'सरकारी पोर्टल एवं पुस्तकें' : 'Govt Portals & Books'}</span>
          </button>
        </div>
      </section>

      {/* Factual Exam Comparison Table (Section 12 of Prompt) */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            {language === 'hi' ? 'आरआरबी परीक्षा तुलना चार्ट (Factual Comparison)' : 'Official Exam Comparison Matrix'}
          </h2>
          <p className="text-xs text-slate-500">
            {language === 'hi' ? 'आधिकारिक अधिसूचनाओं पर आधारित तथ्यात्मक तुलना' : 'Dynamic factual comparison derived from official notifications'}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left text-slate-700 dark:text-slate-300">
            <thead className="text-[11px] uppercase tracking-wider bg-slate-50 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400">
              <tr>
                <th className="py-3 px-4 rounded-l-xl">Feature</th>
                <th className="py-3 px-4">RRB NTPC</th>
                <th className="py-3 px-4">RRB Group D</th>
                <th className="py-3 px-4 rounded-r-xl">RRB JE</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              <tr>
                <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">Qualification</td>
                <td className="py-3 px-4">12th Pass (50%) or Graduation</td>
                <td className="py-3 px-4">10th Pass OR ITI / NAC</td>
                <td className="py-3 px-4">3-Yr Engineering Diploma or B.Tech</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">Pay Matrix Level</td>
                <td className="py-3 px-4">Level 2, 3, 5, 6 (₹19,900 to ₹35,400)</td>
                <td className="py-3 px-4">Level 1 (₹18,000)</td>
                <td className="py-3 px-4">Level 6 (₹35,400)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">Main CBT Subjects</td>
                <td className="py-3 px-4">Maths, Reasoning, General Awareness</td>
                <td className="py-3 px-4">Maths, Reasoning, Science, GA</td>
                <td className="py-3 px-4">General Subjects + 100 Technical Qs</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">Physical Test (PET)</td>
                <td className="py-3 px-4 text-slate-400">No General PET</td>
                <td className="py-3 px-4 font-bold text-emerald-600">Yes (1000m Run + 35kg/20kg Weight)</td>
                <td className="py-3 px-4 text-slate-400">No General PET</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">Aptitude / Skill Stage</td>
                <td className="py-3 px-4 font-semibold text-blue-600">CBAT (Station Master) / Typing Test</td>
                <td className="py-3 px-4 text-slate-400">None (Direct DV after PET)</td>
                <td className="py-3 px-4 font-semibold text-purple-600">Technical Abilities in CBT-2</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">Negative Marking</td>
                <td className="py-3 px-4">1/3rd Mark per wrong answer</td>
                <td className="py-3 px-4">1/3rd Mark per wrong answer</td>
                <td className="py-3 px-4">1/3rd Mark per wrong answer</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* High-Resolution Infographic Lightbox Modal */}
      {activeModalImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveModalImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-slate-900 rounded-3xl overflow-hidden p-3 border border-slate-700 shadow-2xl space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-2 pt-1">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                {language === 'hi' ? 'उच्च-रिज़ॉल्यूशन आधिकारिक तकनीकी आरेख' : 'High-Resolution Official Technical Schematic'}
              </span>
              <button
                onClick={() => setActiveModalImage(null)}
                className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors cursor-pointer"
              >
                ✕ Close
              </button>
            </div>
            <img
              src={activeModalImage}
              alt="Official Schematic Diagram"
              className="w-full max-h-[80vh] object-contain rounded-2xl bg-slate-950"
            />
            <div className="flex justify-between items-center px-2 pb-1 text-xs text-slate-400">
              <span>{language === 'hi' ? 'आरआरबी मास्टर इंडिया प्रामाणिक सामग्री' : 'RRB Master India Official Blueprint'}</span>
              <button
                onClick={() => {
                  const targetTab = activeModalImage.includes('curriculum')
                    ? 'syllabus'
                    : activeModalImage.includes('railway')
                    ? 'railway-gk'
                    : activeModalImage.includes('physics')
                    ? 'formulas'
                    : 'je-technical';
                  setActiveModalImage(null);
                  onNavigate(targetTab);
                }}
                className="text-blue-400 hover:text-blue-300 font-bold flex items-center gap-1 cursor-pointer"
              >
                <span>{language === 'hi' ? 'संबंधित खंड पर जाएं →' : 'Go to Corresponding Section →'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
