import React, { useState } from 'react';
import {
  Bell,
  ExternalLink,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  FileText,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { LIVE_NOTIFICATIONS } from '../data/rrb/notifications';

export const UpdatesPage: React.FC<{ onNavigate: (tab: string) => void }> = ({ onNavigate }) => {
  const { t, language } = useLanguage();
  const [filterCat, setFilterCat] = useState<string>('ALL');

  const filtered = LIVE_NOTIFICATIONS.filter((n) => {
    if (filterCat === 'ALL') return true;
    return n.category === filterCat;
  });

  const getBadge = (cat: string) => {
    switch (cat) {
      case 'important':
        return (
          <span className="px-2.5 py-0.5 rounded-full bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 font-bold text-[10px] uppercase tracking-wider">
            🔴 Important
          </span>
        );
      case 'deadline':
        return (
          <span className="px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 font-bold text-[10px] uppercase tracking-wider">
            🟠 Deadline
          </span>
        );
      case 'new':
        return (
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-bold text-[10px] uppercase tracking-wider">
            🟢 New Notice
          </span>
        );
      case 'info':
      default:
        return (
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-bold text-[10px] uppercase tracking-wider">
            🔵 Information
          </span>
        );
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Breadcrumb
        items={[
          { label: language === 'hi' ? 'सूचनाएं' : 'Notifications' },
          { label: language === 'hi' ? 'आरआरबी नवीनतम अपडेट केंद्र' : 'RRB Live Updates Center' },
        ]}
        onNavigate={onNavigate}
      />

      {/* Main Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white shadow-2xl space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
          <Bell className="w-3.5 h-3.5" />
          Official Centralized Employment Notices (CEN)
        </div>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
          {language === 'hi'
            ? 'आरआरबी नवीनतम आधिकारिक सूचना एवं अपडेट केंद्र'
            : 'RRB Live Updates & Official Notice Center'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
          {language === 'hi'
            ? 'रेलवे भर्ती बोर्डों द्वारा जारी आधिकारिक रोजगार अधिसूचनाएं (CEN), परीक्षा कैलेंडर, शुद्धिपत्र, आवेदन लिंक एवं महत्वपूर्ण नियम परिवर्तन।'
            : 'Track authenticated official notices, detailed CEN breakdowns, important dates, live photo guidelines, and examination schedules.'}
        </p>
      </div>

      {/* SPOTLIGHT NOTIFICATION CARD: CEN No. 06/2026 (Graduate) */}
      <div className="bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white border border-blue-500/40 shadow-xl space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-black uppercase tracking-wider border border-emerald-500/30 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              LATEST OFFICIAL NOTIFICATION: CEN 06/2026
            </span>
            <span className="text-xs font-mono font-bold text-slate-300 bg-white/10 px-2.5 py-0.5 rounded-full">
              Published: 08.10.2026
            </span>
          </div>

          <a
            href="https://rrbapply.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-all shadow-md"
          >
            <span>{language === 'hi' ? 'आवेदन पोर्टल (rrbapply.gov.in)' : 'Apply Online at rrbapply.gov.in'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white leading-snug">
            {language === 'hi'
              ? 'केंद्रीकृत रोजगार अधिसूचना सं. 06/2026: गैर-तकनीकी लोकप्रिय श्रेणियां (स्नातक) — 3,548 पद'
              : 'Centralised Employment Notification CEN No. 06/2026: Non-Technical Popular Categories (Graduate) — 3,548 Posts'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Ministry of Railways, Government of India • 21 Railway Recruitment Boards
          </p>
        </div>

        {/* Key Dates Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
              Application Opening
            </span>
            <span className="text-sm font-black text-emerald-400 font-mono mt-0.5 block">08.10.2026</span>
            <span className="text-[10px] text-slate-400">Online on rrbapply.gov.in</span>
          </div>
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
              Closing Date
            </span>
            <span className="text-sm font-black text-amber-400 font-mono mt-0.5 block">06.11.2026</span>
            <span className="text-[10px] text-slate-400">Till 23:59 Hours</span>
          </div>
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
              Fee Payment Deadline
            </span>
            <span className="text-sm font-black text-blue-400 font-mono mt-0.5 block">08.11.2026</span>
            <span className="text-[10px] text-slate-400">Online (UPI / Cards / Net Banking)</span>
          </div>
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
              Modification Window
            </span>
            <span className="text-sm font-black text-purple-400 font-mono mt-0.5 block">09.11 to 18.11.2026</span>
            <span className="text-[10px] text-slate-400">₹250 Non-refundable fee</span>
          </div>
        </div>

        {/* 4 Notified Posts Breakdown Table */}
        <div className="bg-slate-950/60 rounded-2xl p-4 border border-white/10 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-blue-400" />
              <span>{language === 'hi' ? 'अधिसूचित 4 पद एवं रिक्तियां (CEN 06/2026)' : 'Notified 4 Posts & Vacancy Breakdown'}</span>
            </h3>
            <span className="text-xs font-mono font-bold text-emerald-400">Total: 3,548 Posts</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300">Cat No. 1</span>
                <span className="font-bold text-amber-300">Level 6 (₹35,400)</span>
              </div>
              <h4 className="font-bold text-white text-sm">Chief Commercial Cum Ticket Supervisor</h4>
              <p className="text-[11px] text-slate-300">Medical: B-2 • Vacancies: <strong className="text-white">127</strong></p>
            </div>

            <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-500/30 text-blue-200">Cat No. 2</span>
                <span className="font-bold text-amber-300">Level 5 (₹29,200)</span>
              </div>
              <h4 className="font-bold text-white text-sm">Goods Train Manager</h4>
              <p className="text-[11px] text-slate-200">Medical: A-2 • Vacancies: <strong className="text-emerald-400 text-sm">2,750</strong> (Largest Share)</p>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300">Cat No. 3</span>
                <span className="font-bold text-amber-300">Level 5 (₹29,200)</span>
              </div>
              <h4 className="font-bold text-white text-sm">Junior Accounts Assistant Cum Typist</h4>
              <p className="text-[11px] text-slate-300">Medical: C-2 • Vacancies: <strong className="text-white">300</strong></p>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300">Cat No. 4</span>
                <span className="font-bold text-amber-300">Level 5 (₹29,200)</span>
              </div>
              <h4 className="font-bold text-white text-sm">Senior Clerk Cum Typist</h4>
              <p className="text-[11px] text-slate-300">Medical: C-2 • Vacancies: <strong className="text-white">371</strong></p>
            </div>
          </div>
        </div>

        {/* Critical Exam Reform Alerts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-1.5">
            <div className="flex items-center gap-1.5 font-bold text-amber-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Para 13.0 (c): Typing Skill Test DISPENSED WITH!</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              {language === 'hi'
                ? 'सीईएन 06/2026 में सीनियर क्लर्क एवं जूनियर एकाउंट्स असिस्टेंट हेतु कंप्यूटर आधारित टाइपिंग परीक्षा (CBTST) समाप्त कर दी गई है! चयन केवल सीबीटी-1 एवं सीबीटी-2 मेरिट पर होगा। टाइपिंग दक्षता की जांच सेवा में कार्यभार ग्रहण करने के पश्चात होगी।'
                : 'The Computer Based Typing Skill Test (CBTST) for recruitment to Senior Clerk Cum Typist and Junior Accounts Assistant Cum Typist has been dispensed with for CEN No. 06/2026. Selection is based purely on CBT merit; basic proficiency will be assessed on the job after joining.'}
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-blue-500/10 border border-blue-500/30 space-y-1.5">
            <div className="flex items-center gap-1.5 font-bold text-blue-300">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>Para 14.4 & 7.4: Live Photo & Aadhaar Refund Rules</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              {language === 'hi'
                ? 'पूर्व-मौजूदा फोटो अपलोड की आवश्यकता नहीं है; आवेदन करते समय वेबकैम या मोबाइल कैमरे से लाइव फोटो कैप्चर की जाएगी। परीक्षा शुल्क वापसी (₹400/₹250) सीबीटी-1 में उपस्थित होने पर सीधे आधार-लिंक्ड बैंक खाते (NPCI) में होगी।'
                : 'No pre-existing photograph upload required; live photo will be captured directly via webcam/mobile camera during application. Exam fee refund (₹400 / ₹250) is automatically routed to candidate’s Aadhaar-seeded bank account validated via NPCI.'}
            </p>
          </div>
        </div>

        {/* Quick Links inside Spotlight */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/10 text-xs">
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('vacancies')}
              className="font-bold text-blue-300 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>View All 21 RRB Vacancies Table</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <span className="text-slate-500">•</span>
            <button
              onClick={() => onNavigate('posts')}
              className="font-bold text-blue-300 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>Explore Post Eligibility & Job Profiles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="text-[11px] text-slate-400 font-mono">
            Age Limit: 18-33 Years (as on 01.01.2027)
          </div>
        </div>
      </div>

      {/* SYNCHRONIZED CBT EXAM SCHEDULE & ADVISORY DASHBOARD */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
              <Calendar className="w-5 h-5" />
            </span>
            <div>
              <h2 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                <span>{language === 'hi' ? 'आधिकारिक सीबीटी परीक्षा तिथियां एवं समय सारिणी' : 'Official CBT Examination Schedule & Timeline'}</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase">
                  ACTIVE SCHEDULE
                </span>
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {language === 'hi'
                  ? 'रेलवे भर्ती नियंत्रण बोर्ड (RRCB) द्वारा जारी समकालिक परीक्षा तिथियां एवं शहर पर्ची नियम'
                  : 'Synchronized CBT schedule released by Railway Recruitment Control Board (RRCB) across all 21 RRBs'}
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('mock-test')}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
          >
            <span>{language === 'hi' ? 'परीक्षा अनुरूप मॉक टेस्ट दें' : 'Launch Exam-Ready CBT Mock'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 Exam Scheduled Date Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/50 dark:from-amber-950/20 dark:to-orange-950/10 border border-amber-200 dark:border-amber-900/50 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 font-mono">
                CEN 04/2026 & 03/2024
              </span>
              <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase">CBT-1</span>
            </div>
            <h3 className="font-extrabold text-slate-900 dark:text-white text-sm">
              RRB Junior Engineer (JE / DMS / CMA)
            </h3>
            <div className="space-y-0.5 pt-1 border-t border-amber-200/60 dark:border-amber-900/40">
              <span className="text-[10px] text-slate-500 dark:text-slate-400 block">Scheduled Exam Dates:</span>
              <span className="text-sm font-black text-amber-600 dark:text-amber-400 font-mono block">
                27 & 28 October 2026
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400">100 Qs • 90 Mins • Screening</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50/50 dark:from-emerald-950/20 dark:to-teal-950/10 border border-emerald-200 dark:border-emerald-900/50 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-mono">
                CEN 01/2026 & 01/2024
              </span>
              <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase">CBT-1</span>
            </div>
            <h3 className="font-extrabold text-slate-900 dark:text-white text-sm">
              RRB Assistant Loco Pilot (ALP)
            </h3>
            <div className="space-y-0.5 pt-1 border-t border-emerald-200/60 dark:border-emerald-900/40">
              <span className="text-[10px] text-slate-500 dark:text-slate-400 block">Scheduled Exam Dates:</span>
              <span className="text-sm font-black text-emerald-600 dark:text-emerald-400 font-mono block">
                03 to 05 November 2026
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400">75 Qs • 60 Mins • Running Cadre</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50/50 dark:from-purple-950/20 dark:to-indigo-950/10 border border-purple-200 dark:border-purple-900/50 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-700 dark:text-purple-300 font-mono">
                CEN 05/2026 & 04/2024
              </span>
              <span className="text-[10px] font-bold text-purple-600 dark:text-purple-400 uppercase">Single CBT</span>
            </div>
            <h3 className="font-extrabold text-slate-900 dark:text-white text-sm">
              RRB Paramedical Staff
            </h3>
            <div className="space-y-0.5 pt-1 border-t border-purple-200/60 dark:border-purple-900/40">
              <span className="text-[10px] text-slate-500 dark:text-slate-400 block">Scheduled Exam Dates:</span>
              <span className="text-sm font-black text-purple-600 dark:text-purple-400 font-mono block">
                23 & 25 November 2026
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400">100 Qs • 90 Mins • Professional 70M</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50/50 dark:from-blue-950/20 dark:to-cyan-950/10 border border-blue-200 dark:border-blue-900/50 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-700 dark:text-blue-300 font-mono">
                CEN 06/2026 & 07/2026
              </span>
              <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase">CBT-1</span>
            </div>
            <h3 className="font-extrabold text-slate-900 dark:text-white text-sm">
              RRB NTPC (Grad & Undergrad)
            </h3>
            <div className="space-y-0.5 pt-1 border-t border-blue-200/60 dark:border-blue-900/40">
              <span className="text-[10px] text-slate-500 dark:text-slate-400 block">Tentative Timeline:</span>
              <span className="text-sm font-black text-blue-600 dark:text-blue-400 font-mono block">
                4th Week of December 2026
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400">100 Qs • 90 Mins • All RRBs</span>
            </div>
          </div>
        </div>

        {/* 3 Critical Official Candidate Instructions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs pt-1">
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-1">
            <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-600" />
              <span>City Intimation: 10 Days Prior</span>
            </span>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
              {language === 'hi'
                ? 'परीक्षा शहर, तिथि एवं शिफ्ट की पर्ची परीक्षा से ठीक 10 दिन पहले आधिकारिक पोर्टल पर लाइव होती है।'
                : 'Exam City and Date intimation slip link becomes active exactly 10 days before the scheduled exam date on regional RRB sites.'}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-1">
            <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-emerald-600" />
              <span>e-Call Letter: 4 Days Prior</span>
            </span>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
              {language === 'hi'
                ? 'एडमिट कार्ड (ई-कॉल लेटर) डाउनलोड परीक्षा तिथि से ठीक 4 दिन पहले प्रारंभ होता है। एससी/एसटी अभ्यर्थियों को स्लीपर पास संलग्न मिलता है।'
                : 'e-Call letter download begins strictly 4 days before individual exam dates. Free sleeper railway travel authority is provided for SC/ST candidates.'}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-1">
            <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />
              <span>Mandatory Aadhaar Biometric</span>
            </span>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
              {language === 'hi'
                ? 'परीक्षा हॉल में प्रवेश के लिए आधार-लिंक्ड बायोमेट्रिक फिंगरप्रिंट अनिवार्य है। मूल आधार कार्ड अवश्य साथ लाएं।'
                : 'Aadhaar-linked biometric authentication is mandatory at test centers. Candidates must bring their original Aadhaar card for entry.'}
            </p>
          </div>
        </div>
      </div>

      {/* Filter Tabs for Other Notifications */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
        {['ALL', 'new', 'important', 'deadline', 'info'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterCat(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all uppercase tracking-wider cursor-pointer ${
              filterCat === cat
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            {cat === 'ALL' ? 'All Notices' : cat}
          </button>
        ))}
      </div>

      {/* Notifications Archive List */}
      <div className="space-y-4">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3.5 hover:border-blue-500/30 transition-all"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                {getBadge(item.category)}
                <span className="text-xs font-bold text-slate-400 font-mono flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{item.date}</span>
                </span>
              </div>
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 font-mono">
                {item.rrbCode}
              </span>
            </div>

            <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white leading-snug">
              {t(item.title)}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {t(item.summary)}
            </p>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
              <span className="text-[11px] text-slate-400 font-mono">
                Notice ID: {item.id}
              </span>
              <a
                href={item.officialPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-1.5 px-3.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 hover:bg-blue-600 hover:text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
              >
                <span>{language === 'hi' ? 'आधिकारिक पोर्टल खोलें' : 'Open Official Portal'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
