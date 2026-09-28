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
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface DashboardProps {
  onNavigate: (tab: string, extraData?: unknown) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const { language } = useLanguage();

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

          {/* Quick CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('mock-tests')}
              className="py-3 px-6 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg shadow-blue-500/30 transition-all cursor-pointer"
            >
              <PlayCircle className="w-4 h-4" />
              <span>{language === 'hi' ? 'लाइव सीबीटी मॉक शुरू करें' : 'Launch Real CBT Mock'}</span>
            </button>

            <button
              onClick={() => onNavigate('exam-discovery')}
              className="py-3 px-5 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold flex items-center gap-2 backdrop-blur-md border border-white/20 transition-all cursor-pointer"
            >
              <Compass className="w-4 h-4 text-amber-400" />
              <span>{language === 'hi' ? 'पात्रता खोजक (Eligibility)' : 'Which RRB Exam Can I Apply For?'}</span>
            </button>
          </div>
        </div>

        {/* Ambient Decorative background glow */}
        <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
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
            <span className="text-[11px] text-blue-600 dark:text-blue-400">CEN 05/2024 & 06/2024</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
            <span className="font-bold text-purple-600 dark:text-purple-400 block">Q4: Oct - Dec</span>
            <span className="font-semibold text-slate-800 dark:text-slate-200 mt-1 block">Level-1 (Group D) & JE</span>
            <span className="text-[11px] text-slate-500">CEN 03/2024 & Level-1</span>
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
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 uppercase tracking-wider">
                  CEN 05/2024 & 06/2024
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
              className="mt-6 w-full py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Explore NTPC Hub</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Group D */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 uppercase tracking-wider">
                  Level-1 Posts
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
              className="mt-6 w-full py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Explore Group D Hub</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* RRB JE */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 uppercase tracking-wider">
                  CEN 03/2024
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
              className="mt-6 w-full py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-purple-600 dark:hover:bg-purple-600 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Explore JE Hub</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
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
            className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 cursor-pointer shadow-xs transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Keyboard className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">Typing Speed Lab</h3>
            <p className="text-[11px] text-slate-500 mt-0.5">30 WPM English / 25 WPM Hindi with official 5% error rule</p>
          </div>

          <div
            onClick={() => onNavigate('cbat-lab')}
            className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-purple-500 cursor-pointer shadow-xs transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">CBAT Psycho Lab</h3>
            <p className="text-[11px] text-slate-500 mt-0.5">Station Master 5-battery test drills & T-score simulator</p>
          </div>

          <div
            onClick={() => onNavigate('pet-lab')}
            className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 cursor-pointer shadow-xs transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">Group D PET Lab</h3>
            <p className="text-[11px] text-slate-500 mt-0.5">1000m running timer & 35kg/20kg weight carry log</p>
          </div>

          <div
            onClick={() => onNavigate('speed-lab')}
            className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500 cursor-pointer shadow-xs transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">Calculation Speed Lab</h3>
            <p className="text-[11px] text-slate-500 mt-0.5">Rapid mental arithmetic & 30-sec GK recall sprints</p>
          </div>
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
    </div>
  );
};
