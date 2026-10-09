import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { DesktopSidebar } from './components/layout/DesktopSidebar';
import { MobileNav } from './components/layout/MobileNav';
import { Footer } from './components/layout/Footer';
import { GlobalSearchModal } from './components/layout/GlobalSearchModal';

// Pages & Labs
import { Dashboard } from './pages/Dashboard';
import { ExamDetailsPage } from './pages/ExamDetailsPage';
import { ExamDiscoveryTool } from './components/calculator/ExamDiscoveryTool';
import { TypingLab } from './components/typing/TypingLab';
import { CBATLab } from './components/cbat/CBATLab';
import { PETLab } from './components/pet/PETLab';
import { MockTestPage } from './pages/MockTestPage';
import { QuestionBankPage } from './pages/QuestionBankPage';
import { SpeedLabPage } from './pages/SpeedLabPage';
import { FlashcardsPage } from './pages/FlashcardsPage';
import { FormulasShortcutsPage } from './pages/FormulasShortcutsPage';
import { BookLibraryPage } from './pages/BookLibraryPage';
import { UpdatesPage } from './pages/UpdatesPage';
import { VacancyCutoffPage } from './pages/VacancyCutoffPage';
import { ZoneExplorerPage } from './pages/ZoneExplorerPage';
import { PostExplorerPage } from './pages/PostExplorerPage';
import { MedicalPage } from './pages/MedicalPage';
import { DVChecklistPage } from './pages/DVChecklistPage';
import { ErrorNotebookPage } from './pages/ErrorNotebookPage';
import { StudyPlannerPage } from './pages/StudyPlannerPage';
import { JETechnicalPage } from './pages/JETechnicalPage';
import { RailwayGKPage } from './pages/RailwayGKPage';
import { SyllabusPage } from './pages/SyllabusPage';
import { CBTTestEngine } from './components/cbt/CBTTestEngine';

import { QUESTIONS_DATABASE } from './data/rrb/questions';
import type { ExamId, Question } from './types';

const MainApp: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>('dashboard');
  const [isSidebarOpenMobile, setIsSidebarOpenMobile] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Active CBT test simulation state
  const [activeTestSession, setActiveTestSession] = useState<{
    examId: ExamId;
    stage: string;
    duration: number;
    title: string;
    questions: Question[];
  } | null>(null);

  // URL Hash synchronization for resilient GitHub Pages routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (hash) {
        setCurrentTab(hash);
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (tab: string) => {
    setCurrentTab(tab);
    window.location.hash = `#/${tab}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartMockTest = (
    examId: ExamId,
    stage: string,
    customDuration?: number,
    questionCount?: number
  ) => {
    let pool = QUESTIONS_DATABASE.filter((q) => q.exam === examId);
    if (pool.length === 0) {
      pool = QUESTIONS_DATABASE;
    }

    // Determine target question count based on stage or explicit param
    const targetCount =
      questionCount ||
      (stage === 'Mini Sprint'
        ? 15
        : stage === 'CBT-2' && examId === 'rrb-je'
        ? 150
        : stage === 'CBT-2' && examId === 'rrb-ntpc'
        ? 120
        : 100);

    // Shuffle and pick targetCount questions for a fresh realistic CBT exam session
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const testQuestions = shuffled.slice(0, Math.min(targetCount, shuffled.length));

    setActiveTestSession({
      examId,
      stage,
      duration: customDuration || (stage === 'CBT-2' && examId === 'rrb-je' ? 120 : 90),
      title: `${examId.toUpperCase().replace('-', ' ')} ${stage} Official Simulation (${testQuestions.length} Qs)`,
      questions: testQuestions,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      {/* Global Navbar */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onToggleSidebar={() => setIsSidebarOpenMobile((prev) => !prev)}
        onNavigate={handleNavigate}
        activeTab={currentTab}
      />

      {/* Main Body with Desktop Sidebar */}
      <div className="flex-1 flex max-w-[1920px] w-full mx-auto">
        <DesktopSidebar
          activeTab={currentTab}
          onNavigate={handleNavigate}
          isOpenMobile={isSidebarOpenMobile}
          onCloseMobile={() => setIsSidebarOpenMobile(false)}
        />

        {/* Dynamic Page Content */}
        <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8">
          {currentTab === 'dashboard' && <Dashboard onNavigate={handleNavigate} />}
          {currentTab === 'rrb-ntpc' && (
            <ExamDetailsPage
              examId="rrb-ntpc"
              onNavigate={handleNavigate}
              onStartMock={handleStartMockTest}
            />
          )}
          {currentTab === 'rrb-group-d' && (
            <ExamDetailsPage
              examId="rrb-group-d"
              onNavigate={handleNavigate}
              onStartMock={handleStartMockTest}
            />
          )}
          {currentTab === 'rrb-je' && (
            <ExamDetailsPage
              examId="rrb-je"
              onNavigate={handleNavigate}
              onStartMock={handleStartMockTest}
            />
          )}
          {currentTab === 'exam-discovery' && <ExamDiscoveryTool onNavigate={handleNavigate} />}
          {currentTab === 'mock-tests' && (
            <MockTestPage onStartMock={handleStartMockTest} onNavigate={handleNavigate} />
          )}
          {(currentTab === 'practice' || currentTab === 'questions') && (
            <QuestionBankPage onNavigate={handleNavigate} />
          )}
          {currentTab === 'typing-lab' && <TypingLab onNavigate={handleNavigate} />}
          {currentTab === 'cbat-lab' && <CBATLab onNavigate={handleNavigate} />}
          {currentTab === 'pet-lab' && <PETLab onNavigate={handleNavigate} />}
          {currentTab === 'speed-lab' && <SpeedLabPage onNavigate={handleNavigate} />}
          {currentTab === 'flashcards' && <FlashcardsPage onNavigate={handleNavigate} />}
          {(currentTab === 'formulas' || currentTab === 'shortcuts') && (
            <FormulasShortcutsPage onNavigate={handleNavigate} />
          )}
          {currentTab === 'books' && <BookLibraryPage onNavigate={handleNavigate} />}
          {currentTab === 'updates' && <UpdatesPage onNavigate={handleNavigate} />}
          {(currentTab === 'vacancies' || currentTab === 'cutoffs') && (
            <VacancyCutoffPage onNavigate={handleNavigate} />
          )}
          {currentTab === 'zones' && <ZoneExplorerPage onNavigate={handleNavigate} />}
          {currentTab === 'posts' && <PostExplorerPage onNavigate={handleNavigate} />}
          {currentTab === 'medical' && <MedicalPage onNavigate={handleNavigate} />}
          {currentTab === 'dv-checklist' && <DVChecklistPage onNavigate={handleNavigate} />}
          {currentTab === 'error-notebook' && <ErrorNotebookPage onNavigate={handleNavigate} />}
          {currentTab === 'study-planner' && <StudyPlannerPage onNavigate={handleNavigate} />}
          {currentTab === 'je-technical' && <JETechnicalPage onNavigate={handleNavigate} />}
          {(currentTab === 'railway-gk' || currentTab === 'current-affairs') && (
            <RailwayGKPage onNavigate={handleNavigate} />
          )}
          {currentTab === 'syllabus' && <SyllabusPage onNavigate={handleNavigate} />}

          {/* Site Footer */}
          <Footer onNavigate={handleNavigate} />
        </main>
      </div>

      {/* Live CBT Exam Engine Modal */}
      {activeTestSession && (
        <CBTTestEngine
          questions={activeTestSession.questions}
          examId={activeTestSession.examId}
          stageName={activeTestSession.stage}
          durationMinutes={activeTestSession.duration}
          testTitle={activeTestSession.title}
          onExit={() => setActiveTestSession(null)}
        />
      )}

      {/* Global Search Dialog */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectResult={(tab) => handleNavigate(tab)}
      />

      {/* Mobile Bottom Navigation */}
      <MobileNav
        activeTab={currentTab}
        onNavigate={handleNavigate}
        onOpenMenu={() => setIsSidebarOpenMobile(true)}
      />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <MainApp />
      </LanguageProvider>
    </ThemeProvider>
  );
}
