import React from 'react';
import { Search, Globe, Moon, Sun, Menu, Train, Bell, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';

interface NavbarProps {
  onOpenSearch: () => void;
  onToggleSidebar: () => void;
  onNavigate: (tab: string) => void;
  activeTab: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSearch,
  onToggleSidebar,
  onNavigate,
}) => {
  const { language, toggleLanguage } = useLanguage();
  const { toggleTheme, isDark } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors shadow-xs">
      {/* Top micro banner for official verification & anti-piracy notice */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 text-white text-[11px] py-1 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-500 text-slate-950 uppercase tracking-wider shrink-0">
            Govt / RRB Source Grounded
          </span>
          <span className="text-blue-100 hidden sm:inline">
            Official Indian Railways CEN 05/2024 (Graduate), 06/2024 (Undergraduate), 03/2024 (JE) & Level-1
          </span>
        </div>
        <div className="flex items-center gap-3 shrink-0 text-xs">
          <button
            onClick={() => onNavigate('updates')}
            className="flex items-center gap-1 text-amber-300 hover:text-white transition-colors"
          >
            <Bell className="w-3 h-3 text-amber-400 animate-pulse" />
            <span className="hidden md:inline">{language === 'hi' ? 'नवीनतम सूचनाएं' : 'Live Updates'}</span>
          </button>
          <span className="text-slate-400">|</span>
          <span className="flex items-center gap-1 text-emerald-300 font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span className="hidden md:inline">100% Anti-Piracy</span>
          </span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        {/* Left: Mobile Menu + Brand */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSidebar}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>

          <button
            onClick={() => onNavigate('dashboard')}
            className="flex items-center gap-2.5 text-left group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform shrink-0">
              <Train className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white">
                  RRB MASTER
                </span>
                <span className="px-1.5 py-0.2 rounded-md bg-amber-500/20 text-amber-700 dark:text-amber-400 text-[10px] font-bold tracking-widest uppercase">
                  INDIA
                </span>
              </div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium -mt-0.5 hidden sm:block">
                NTPC • Group D • JE Platform
              </p>
            </div>
          </button>
        </div>

        {/* Center: Search Trigger (Large Screens) */}
        <div className="flex-1 max-w-md mx-4 hidden md:block">
          <button
            onClick={onOpenSearch}
            className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200/80 dark:hover:bg-slate-700/80 text-slate-500 dark:text-slate-400 text-xs sm:text-sm border border-slate-200/80 dark:border-slate-700/80 transition-all cursor-pointer shadow-2xs"
          >
            <div className="flex items-center gap-2 truncate">
              <Search className="w-4 h-4 text-slate-400 shrink-0" />
              <span className="truncate">
                {language === 'hi' ? 'परीक्षा, पद, सूत्र, प्रश्न खोजें...' : 'Search exams, posts, formulas, PYQs...'}
              </span>
            </div>
            <kbd className="px-1.5 py-0.5 text-[10px] font-semibold text-slate-400 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded shadow-2xs shrink-0">
              Ctrl + K
            </kbd>
          </button>
        </div>

        {/* Right: Quick Tools & Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Mobile Search Button */}
          <button
            onClick={onOpenSearch}
            aria-label="Search"
            className="md:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Bilingual Language Switcher */}
          <button
            onClick={toggleLanguage}
            title={language === 'en' ? 'हिंदी में बदलें' : 'Switch to English'}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold hover:border-blue-500 dark:hover:border-blue-400 transition-all shadow-2xs"
          >
            <Globe className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>{language === 'en' ? 'हिन्दी' : 'English'}</span>
          </button>

          {/* Dark / Light Mode Switcher */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all shadow-2xs cursor-pointer"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-600" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
