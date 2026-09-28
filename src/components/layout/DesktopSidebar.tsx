import React from 'react';
import {
  LayoutDashboard,
  Train,
  BookOpen,
  HelpCircle,
  PlayCircle,
  FileCheck,
  Zap,
  Activity,
  Layers,
  MapPin,
  Award,
  HeartPulse,
  Bell,
  Calendar,
  Bookmark,
  Sparkles,
  Calculator,
  Compass,
  FileText,
  Keyboard,
  ShieldCheck,
  Flame,
  Clock,
  Wrench,
  X,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface DesktopSidebarProps {
  activeTab: string;
  onNavigate: (tab: string) => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

export const DesktopSidebar: React.FC<DesktopSidebarProps> = ({
  activeTab,
  onNavigate,
  isOpenMobile,
  onCloseMobile,
}) => {
  const { t, language } = useLanguage();

  const handleNavClick = (tabKey: string) => {
    onNavigate(tabKey);
    onCloseMobile();
  };

  const navGroups = [
    {
      label: language === 'hi' ? 'मुख्य एवं परीक्षाएं' : 'Core & Examinations',
      items: [
        { key: 'dashboard', label: t('dashboard'), icon: LayoutDashboard },
        { key: 'exam-discovery', label: t('examDiscovery'), icon: Compass, badge: 'Smart' },
        { key: 'rrb-ntpc', label: t('ntpc'), icon: Train, badge: 'CEN 05/2024' },
        { key: 'rrb-group-d', label: t('groupD'), icon: Train, badge: 'Level-1' },
        { key: 'rrb-je', label: t('je'), icon: Wrench, badge: 'Technical' },
      ],
    },
    {
      label: language === 'hi' ? 'तैयारी एवं परीक्षण' : 'Preparation & Testing',
      items: [
        { key: 'mock-tests', label: t('mockTests'), icon: PlayCircle, badge: 'CBT Live' },
        { key: 'practice', label: t('practice'), icon: FileCheck },
        { key: 'questions', label: t('pyqs'), icon: HelpCircle },
        { key: 'speed-lab', label: t('speedLab'), icon: Zap },
        { key: 'syllabus', label: t('syllabus'), icon: BookOpen },
        { key: 'flashcards', label: t('flashcards'), icon: Sparkles },
        { key: 'formulas', label: t('formulaBook'), icon: Calculator },
        { key: 'shortcuts', label: t('shortcuts'), icon: Flame },
        { key: 'books', label: t('books'), icon: BookOpen },
        { key: 'error-notebook', label: t('errorNotebook'), icon: Bookmark },
        { key: 'study-planner', label: t('studyPlanner'), icon: Calendar },
      ],
    },
    {
      label: language === 'hi' ? 'विशेष दक्षता लैब' : 'Specialized Labs',
      items: [
        { key: 'pet-lab', label: t('petLab'), icon: Activity, badge: 'Group D' },
        { key: 'cbat-lab', label: t('cbatLab'), icon: Layers, badge: 'Psycho' },
        { key: 'typing-lab', label: t('typingLab'), icon: Keyboard, badge: 'NTPC' },
        { key: 'je-technical', label: t('technicalEngine'), icon: Wrench, badge: 'JE CBT-2' },
      ],
    },
    {
      label: language === 'hi' ? 'सामान्य ज्ञान एवं समसामयिकी' : 'GK & Current Affairs',
      items: [
        { key: 'railway-gk', label: t('railwayGk'), icon: Train },
        { key: 'current-affairs', label: t('currentAffairs'), icon: Clock },
      ],
    },
    {
      label: language === 'hi' ? 'आधिकारिक सूचना एवं भर्ती विवरण' : 'Official Recruitment Info',
      items: [
        { key: 'updates', label: language === 'hi' ? 'नवीनतम सूचनाएं' : 'Latest Updates', icon: Bell, badge: 'Live' },
        { key: 'vacancies', label: t('vacancies'), icon: FileText },
        { key: 'cutoffs', label: t('cutoffs'), icon: Award },
        { key: 'zones', label: t('zones'), icon: MapPin },
        { key: 'posts', label: t('jobProfiles'), icon: Award },
        { key: 'medical', label: t('medicalInfo'), icon: HeartPulse },
        { key: 'dv-checklist', label: t('dvChecklist'), icon: ShieldCheck },
      ],
    },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-xs lg:hidden"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col transition-transform duration-300 lg:translate-x-0 ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-full'
        } lg:static lg:z-0 lg:h-[calc(100vh-4.25rem)] shrink-0`}
      >
        {/* Mobile Header */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between lg:hidden">
          <div className="flex items-center gap-2">
            <Train className="w-5 h-5 text-blue-600" />
            <span className="font-extrabold text-slate-900 dark:text-white">RRB MASTER INDIA</span>
          </div>
          <button
            onClick={onCloseMobile}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Navigation Items */}
        <div className="flex-1 overflow-y-auto p-3 space-y-6 scrollbar-thin">
          {navGroups.map((group, gIdx) => (
            <div key={gIdx} className="space-y-1">
              <div className="px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                {group.label}
              </div>
              {group.items.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.key;
                return (
                  <button
                    key={item.key}
                    onClick={() => handleNavClick(item.key)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-400 dark:text-slate-500'}`} />
                      <span className="truncate">{item.label}</span>
                    </div>
                    {item.badge && (
                      <span
                        className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md uppercase tracking-wider shrink-0 ${
                          isActive
                            ? 'bg-blue-700 text-white'
                            : 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* Sidebar Footer info */}
        <div className="p-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50 text-[11px] text-slate-500 dark:text-slate-400 text-center">
          <p className="font-semibold text-slate-700 dark:text-slate-300">RRB MASTER INDIA v2.6</p>
          <p className="text-[10px] text-slate-400 mt-0.5">Updated for CEN 2024-2026 Cyclical Cycle</p>
        </div>
      </aside>
    </>
  );
};
