import React from 'react';
import { Train, ShieldCheck, ExternalLink, Heart } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const Footer: React.FC<{ onNavigate: (tab: string) => void }> = ({ onNavigate }) => {
  const { language } = useLanguage();

  return (
    <footer className="mt-16 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Train className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-base text-slate-900 dark:text-white">
                RRB MASTER INDIA
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              {language === 'hi'
                ? 'आरआरबी एनटीपीसी, ग्रुप डी एवं जेई भर्ती परीक्षाओं की प्रामाणिक, पारदर्शी और संपूर्ण तैयारी हेतु समर्पित राष्ट्रीय मंच।'
                : 'Integrated, copyright-safe, bilingual examination platform for Indian Railways recruitments (NTPC, Group D, JE).'}
            </p>
            <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Legitimate Official Data</span>
            </div>
          </div>

          {/* Quick Exam Hubs */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              {language === 'hi' ? 'प्रमुख भर्ती परीक्षाएं' : 'Major RRB Exams'}
            </h4>
            <ul className="text-xs space-y-1.5 text-slate-500 dark:text-slate-400">
              <li>
                <button onClick={() => onNavigate('rrb-ntpc')} className="hover:text-blue-600 transition-colors">
                  RRB NTPC (Graduate & Undergrad)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('rrb-group-d')} className="hover:text-blue-600 transition-colors">
                  RRB Group D (Level-1 Posts)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('rrb-je')} className="hover:text-blue-600 transition-colors">
                  RRB JE (Technical Disciplines)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('exam-discovery')} className="hover:text-blue-600 transition-colors">
                  {language === 'hi' ? 'पात्रता खोजक (Eligibility Discovery)' : 'Which RRB Exam Can I Apply For?'}
                </button>
              </li>
            </ul>
          </div>

          {/* Specialized Labs */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              {language === 'hi' ? 'दक्षता प्रयोगशालाएं' : 'Preparation Labs'}
            </h4>
            <ul className="text-xs space-y-1.5 text-slate-500 dark:text-slate-400">
              <li>
                <button onClick={() => onNavigate('mock-tests')} className="hover:text-blue-600 transition-colors">
                  Real CBT Examination Simulator
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('typing-lab')} className="hover:text-blue-600 transition-colors">
                  RRB Typing Speed Lab (EN / HI)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('cbat-lab')} className="hover:text-blue-600 transition-colors">
                  CBAT Aptitude Lab (Station Master)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pet-lab')} className="hover:text-blue-600 transition-colors">
                  Group D PET Training Lab
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('je-technical')} className="hover:text-blue-600 transition-colors">
                  JE Technical Abilities Hub
                </button>
              </li>
            </ul>
          </div>

          {/* Official Portals & Anti-Piracy Policy */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              {language === 'hi' ? 'आधिकारिक स्रोत एवं नीतियां' : 'Official Portals & Transparency'}
            </h4>
            <ul className="text-xs space-y-1.5 text-slate-500 dark:text-slate-400">
              <li>
                <a
                  href="https://indianrailways.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-blue-600 transition-colors"
                >
                  Ministry of Railways (Govt of India) <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <button onClick={() => onNavigate('zones')} className="hover:text-blue-600 transition-colors">
                  All 21 Official Regional RRB Websites
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('books')} className="hover:text-blue-600 transition-colors">
                  NCERT & Legitimate Book Guidelines
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('dv-checklist')} className="hover:text-blue-600 transition-colors">
                  Document Verification & ESM Rules
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400 space-y-2">
          <p className="max-w-3xl mx-auto leading-relaxed text-[11px]">
            <strong>Disclaimer & Transparency Notice:</strong> RRB MASTER INDIA is an independent, educational,
            open-access preparation platform. All examination calendars, Centralized Employment Notifications (CEN),
            syllabi, post descriptions, and physical standards are grounded directly in official publications of the
            Ministry of Railways, Government of India. We uphold a strict anti-piracy policy and do not distribute
            copyrighted PDFs or unauthorized coaching materials.
          </p>
          <div className="flex items-center justify-center gap-1 text-[11px] text-slate-400">
            <span>Built with precision & passion for Indian Railway aspirants</span>
            <Heart className="w-3 h-3 text-red-500 inline fill-red-500" />
            <span>• 2026-2027</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
