import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export interface BreadcrumbItem {
  label: string;
  tabKey?: string;
  onClick?: () => void;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  onNavigate: (tab: string) => void;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, onNavigate }) => {
  const { language } = useLanguage();

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 py-2 px-3 sm:px-4 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-xs mb-4 overflow-x-auto whitespace-nowrap scrollbar-none"
    >
      <button
        onClick={() => onNavigate('dashboard')}
        className="flex items-center gap-1 hover:text-blue-700 dark:hover:text-blue-400 transition-colors shrink-0 text-slate-700 dark:text-slate-200 font-semibold"
      >
        <Home className="w-3.5 h-3.5" />
        <span>{language === 'hi' ? 'मुख्य पृष्ठ' : 'Home'}</span>
      </button>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 mx-1.5 text-slate-400 dark:text-slate-500 shrink-0" />
            {isLast ? (
              <span className="font-semibold text-blue-700 dark:text-blue-400 shrink-0">
                {item.label}
              </span>
            ) : (
              <button
                onClick={() => {
                  if (item.onClick) item.onClick();
                  else if (item.tabKey) onNavigate(item.tabKey);
                }}
                className="hover:text-blue-700 dark:hover:text-blue-400 hover:underline transition-colors shrink-0"
              >
                {item.label}
              </button>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
