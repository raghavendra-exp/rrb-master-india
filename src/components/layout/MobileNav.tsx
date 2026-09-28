import React from 'react';
import { LayoutDashboard, Train, FileCheck, PlayCircle, Menu } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface MobileNavProps {
  activeTab: string;
  onNavigate: (tab: string) => void;
  onOpenMenu: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ activeTab, onNavigate, onOpenMenu }) => {
  const { language } = useLanguage();

  const navItems = [
    { key: 'dashboard', label: language === 'hi' ? 'होम' : 'Home', icon: LayoutDashboard },
    { key: 'rrb-ntpc', label: language === 'hi' ? 'परीक्षाएं' : 'Exams', icon: Train },
    { key: 'practice', label: language === 'hi' ? 'अभ्यास' : 'Practice', icon: FileCheck },
    { key: 'mock-tests', label: language === 'hi' ? 'मॉक टेस्ट' : 'Mocks', icon: PlayCircle },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-3 py-1 flex items-center justify-around shadow-lg">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.key;
        return (
          <button
            key={item.key}
            onClick={() => onNavigate(item.key)}
            className={`flex flex-col items-center py-1 px-2 rounded-lg text-[10px] font-medium transition-colors ${
              isActive
                ? 'text-blue-600 dark:text-blue-400 font-bold'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Icon className="w-5 h-5 mb-0.5" />
            <span>{item.label}</span>
          </button>
        );
      })}

      <button
        onClick={onOpenMenu}
        className="flex flex-col items-center py-1 px-2 rounded-lg text-[10px] font-medium text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
      >
        <Menu className="w-5 h-5 mb-0.5" />
        <span>{language === 'hi' ? 'मेनू' : 'Menu'}</span>
      </button>
    </div>
  );
};
