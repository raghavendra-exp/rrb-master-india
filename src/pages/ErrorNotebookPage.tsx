import React, { useState } from 'react';
import { Bookmark, Trash2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { getStoredErrorNotes, removeErrorNote } from '../utils/storage';
import type { ErrorNote } from '../types';

export const ErrorNotebookPage: React.FC<{ onNavigate: (tab: string) => void }> = ({ onNavigate }) => {
  const { language } = useLanguage();
  const [errorNotes, setErrorNotes] = useState<ErrorNote[]>(getStoredErrorNotes());
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');

  const handleDelete = (questionId: string) => {
    removeErrorNote(questionId);
    setErrorNotes(getStoredErrorNotes());
  };

  const filtered = errorNotes.filter((n) => {
    if (selectedFilter === 'ALL') return true;
    return n.mistakeType === selectedFilter;
  });

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <Breadcrumb
        items={[
          { label: language === 'hi' ? 'आत्म-विश्लेषण' : 'Self Analytics' },
          { label: language === 'hi' ? 'त्रुटि पुस्तिका (मिस्टेक नोटबुक)' : 'Mistake Notebook' },
        ]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-red-950 via-slate-900 to-indigo-950 text-white shadow-xl space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-bold uppercase tracking-wider">
          <Bookmark className="w-3.5 h-3.5" />
          Weak Area Eradication & Error Classification
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          {language === 'hi' ? 'आरआरबी त्रुटि पुस्तिका (मिस्टेक नोटबुक)' : 'RRB Mistake Notebook'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
          {language === 'hi'
            ? 'परीक्षा में बार-बार होने वाली गलतियों का वैज्ञानिक विश्लेषण: वैचारिक, गणनात्मक, प्रश्न को गलत पढ़ना या तुक्का लगाना।'
            : 'Systematic mistake logging across 1-day, 3-day, 7-day, 15-day, and 30-day spaced revision cycles.'}
        </p>
      </div>

      {/* Mistake Type Filters */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
        {['ALL', 'conceptual', 'calculation', 'misread', 'guess', 'time_pressure', 'careless'].map((type) => (
          <button
            key={type}
            onClick={() => setSelectedFilter(type)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold capitalize transition-all shrink-0 ${
              selectedFilter === type
                ? 'bg-red-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
            }`}
          >
            {type.replace('_', ' ')}
          </button>
        ))}
      </div>

      {/* Notes List */}
      {filtered.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center border border-slate-200 dark:border-slate-800 space-y-3">
          <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
            <Bookmark className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">No Errors Logged Yet</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
            Whenever you make a mistake in a CBT Mock Test or Question Bank, click "Log to Mistake Notebook" to track and
            revise it here.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((note) => (
            <div
              key={note.questionId}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
            >
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                    {note.questionId}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-400 uppercase">
                    {note.mistakeType.replace('_', ' ')}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-400 font-mono">Added: {note.dateAdded}</span>
                  <button
                    onClick={() => handleDelete(note.questionId)}
                    title="Remove after mastering"
                    className="p-1 rounded-lg text-slate-400 hover:text-red-600 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <p className="text-sm font-medium text-slate-900 dark:text-white leading-relaxed">
                {note.questionText}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/20 text-red-900 dark:text-red-300">
                  <strong className="block text-red-700 dark:text-red-400 mb-0.5">My Answer in Exam:</strong>
                  <span>{note.userAnswer}</span>
                </div>
                <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 text-emerald-900 dark:text-emerald-300">
                  <strong className="block text-emerald-700 dark:text-emerald-400 mb-0.5">Correct Answer:</strong>
                  <span>{note.correctAnswer}</span>
                </div>
              </div>

              {note.personalNotes && (
                <div className="text-xs text-slate-500 italic">
                  Personal Note: "{note.personalNotes}"
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
