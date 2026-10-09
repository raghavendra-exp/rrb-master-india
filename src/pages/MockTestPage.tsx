import React from 'react';
import { PlayCircle, Clock, History } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { getStoredMockResults } from '../utils/storage';
import type { ExamId } from '../types';

interface MockTestPageProps {
  onStartMock: (
    examId: ExamId,
    stage: string,
    customDuration?: number,
    questionCount?: number
  ) => void;
  onNavigate: (tab: string) => void;
}

export const MockTestPage: React.FC<MockTestPageProps> = ({ onStartMock, onNavigate }) => {
  const { language } = useLanguage();
  const pastResults = getStoredMockResults();

  const mockConfigs = [
    {
      id: 'mock-ntpc-cbt1',
      examId: 'rrb-ntpc' as ExamId,
      stage: 'CBT-1',
      title: 'RRB NTPC CBT-1 Full Exam Simulation',
      questions: 100,
      duration: 90,
      subjects: 'General Awareness (40) + Mathematics (30) + Reasoning (30)',
      color: 'blue',
    },
    {
      id: 'mock-ntpc-cbt2',
      examId: 'rrb-ntpc' as ExamId,
      stage: 'CBT-2',
      title: 'RRB NTPC CBT-2 Full Exam Simulation',
      questions: 120,
      duration: 90,
      subjects: 'General Awareness (50) + Mathematics (35) + Reasoning (35)',
      color: 'indigo',
    },
    {
      id: 'mock-group-d-cbt',
      examId: 'rrb-group-d' as ExamId,
      stage: 'CBT',
      title: 'RRB Group D (Level-1) Full Exam Simulation',
      questions: 100,
      duration: 90,
      subjects: 'General Science (25) + Mathematics (25) + Reasoning (30) + GA (20)',
      color: 'emerald',
    },
    {
      id: 'mock-je-cbt1',
      examId: 'rrb-je' as ExamId,
      stage: 'CBT-1',
      title: 'RRB JE CBT-1 Screening Simulation',
      questions: 100,
      duration: 90,
      subjects: 'Mathematics (30) + Science (30) + Reasoning (25) + GA (15)',
      color: 'purple',
    },
    {
      id: 'mock-je-cbt2',
      examId: 'rrb-je' as ExamId,
      stage: 'CBT-2',
      title: 'RRB JE CBT-2 Technical Discipline Simulation',
      questions: 150,
      duration: 120,
      subjects: 'Technical Abilities (100) + GA (15) + Physics/Chemistry (15) + Computers (10) + Environment (10)',
      color: 'amber',
    },
    {
      id: 'mock-mini-sprint',
      examId: 'rrb-ntpc' as ExamId,
      stage: 'Mini Sprint',
      title: '15-Minute Daily Speed Mock Test',
      questions: 15,
      duration: 15,
      subjects: 'Mixed High-Yield Questions from All Subjects',
      color: 'rose',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Breadcrumb
        items={[
          { label: language === 'hi' ? 'परीक्षण एवं अभ्यास' : 'Testing & Practice' },
          { label: language === 'hi' ? 'लाइव सीबीटी मॉक टेस्ट' : 'Live CBT Mock Tests' },
        ]}
        onNavigate={onNavigate}
      />

      {/* Hero Header */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
            <PlayCircle className="w-3.5 h-3.5" />
            TCS iON Authentic Interface Simulator
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {language === 'hi' ? 'आधिकारिक सीबीटी मॉक टेस्ट सिमुलेटर' : 'Official CBT Mock Test Simulator'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
            {language === 'hi'
              ? 'वास्तविक परीक्षा जैसा माहौल: प्रश्न पैलेट, मार्क फॉर रिव्यू, 1/3 नकारात्मक अंकन एवं स्वचालित सबमिशन।'
              : 'Authentic exam environment: Question palette, review status, real timer, 1/3 negative marking & deep score analytics.'}
          </p>
        </div>

        <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20 text-center shrink-0">
          <div className="text-xs text-blue-200">Past Tests Taken</div>
          <div className="text-2xl font-black text-amber-400">{pastResults.length}</div>
        </div>
      </div>

      {/* Available Full Mock Tests Grid */}
      <div className="space-y-4">
        <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
          {language === 'hi' ? 'उपलब्ध संपूर्ण मॉक टेस्ट' : 'Available Official CBT Simulations'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {mockConfigs.map((m) => (
            <div
              key={m.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 uppercase">
                    {m.stage}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{m.duration} Mins</span>
                  </div>
                </div>

                <h3 className="font-extrabold text-base text-slate-900 dark:text-white leading-snug">
                  {m.title}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {m.subjects}
                </p>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 flex justify-between font-mono">
                  <span>Questions: {m.questions}</span>
                  <span className="text-red-500 font-semibold">-0.33 Negative</span>
                </div>
              </div>

              <button
                onClick={() => onStartMock(m.examId, m.stage, m.duration, m.questions)}
                className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
              >
                <PlayCircle className="w-4 h-4" />
                <span>Launch Mock Test</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Past Mock Test Attempts History */}
      {pastResults.length > 0 && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
              <History className="w-4 h-4 text-blue-600" />
              <span>{language === 'hi' ? 'पूर्व मॉक टेस्ट परिणाम एवं विश्लेषण' : 'Past Mock Test Attempts & Analytics'}</span>
            </h3>
            <span className="text-xs text-slate-400">{pastResults.length} records</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left text-slate-700 dark:text-slate-300">
              <thead className="text-[11px] uppercase bg-slate-50 dark:bg-slate-800/60 text-slate-500">
                <tr>
                  <th className="py-2.5 px-3 rounded-l-lg">Date</th>
                  <th className="py-2.5 px-3">Test Title</th>
                  <th className="py-2.5 px-3">Attempted</th>
                  <th className="py-2.5 px-3">Correct</th>
                  <th className="py-2.5 px-3">Accuracy</th>
                  <th className="py-2.5 px-3 rounded-r-lg">Net Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {pastResults.slice(0, 10).map((res) => (
                  <tr key={res.id}>
                    <td className="py-2.5 px-3 text-slate-500 font-mono">{res.date}</td>
                    <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-white">
                      {res.testTitle}
                    </td>
                    <td className="py-2.5 px-3">{res.attempted}</td>
                    <td className="py-2.5 px-3 text-emerald-600 font-semibold">{res.correct}</td>
                    <td className="py-2.5 px-3 font-bold">{res.accuracy}%</td>
                    <td className="py-2.5 px-3 font-black text-blue-600 dark:text-blue-400">
                      {res.score} / {res.maxScore}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
