import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Language, BilingualText } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (content: BilingualText | string) => string;
  ui: Record<string, string>;
}

const UI_DICTIONARY: Record<Language, Record<string, string>> = {
  en: {
    siteName: 'RRB MASTER INDIA',
    siteSubtitle: 'Comprehensive Railway Recruitment Preparation Platform',
    officialPortal: 'Official Railway Preparation Engine',
    dashboard: 'Dashboard',
    exams: 'RRB Exams',
    ntpc: 'RRB NTPC',
    groupD: 'RRB Group D / Level-1',
    je: 'RRB JE (Technical)',
    syllabus: 'Syllabus & Pattern',
    books: 'Legitimate Books',
    pyqs: 'Previous Year Questions (PYQs)',
    practice: 'Practice Engine',
    mockTests: 'Live CBT Mock Tests',
    speedLab: 'Speed Lab',
    typingLab: 'Typing Speed Lab',
    cbatLab: 'CBAT Aptitude Lab',
    petLab: 'PET Physical Lab',
    technicalEngine: 'JE Technical Hub',
    flashcards: 'Flashcards (SRS)',
    formulaBook: 'Formula Master',
    shortcuts: 'Shortcut Lab',
    railwayGk: 'Indian Railways GK',
    currentAffairs: 'Current Affairs Engine',
    vacancies: 'Vacancy Tracker',
    cutoffs: 'Cutoff Database',
    results: 'Result Center',
    admitCards: 'Admit Card Portal',
    zones: '21 RRB Zone Explorer',
    jobProfiles: 'Post & Job Profiles',
    medicalInfo: 'Medical Standards',
    dvChecklist: 'DV Document Checklist',
    esmModule: 'Ex-Servicemen (ESM) Portal',
    studyPlanner: 'Study Planner & Roadmap',
    errorNotebook: 'Mistake Notebook',
    examDiscovery: 'Which RRB Exam Can I Apply For?',
    searchPlaceholder: 'Search exams, posts, topics, formulas, questions (Ctrl + K)...',
    startMockTest: 'Launch Official Simulation',
    viewDetails: 'View Details',
    officialSource: 'Official Source',
    negativeMarking: 'Negative Marking: 1/3rd Mark',
    totalQuestions: 'Total Questions',
    totalMarks: 'Total Marks',
    duration: 'Duration',
    minutes: 'Minutes',
    years: 'Years',
    languageToggle: 'हिंदी',
    english: 'English',
    hindi: 'हिंदी',
    saveAndNext: 'Save & Next',
    markForReview: 'Mark for Review & Next',
    clearResponse: 'Clear Response',
    submitExam: 'Submit Test',
    questionPalette: 'Question Palette',
    answered: 'Answered',
    notAnswered: 'Not Answered',
    markedForReview: 'Marked for Review',
    notVisited: 'Not Visited',
    testSummary: 'Test Summary',
    scoreCard: 'Score Card',
    accuracy: 'Accuracy',
    totalScore: 'Total Score',
    viewSolutions: 'Review All Solutions',
    filterBy: 'Filter By',
    all: 'All',
    easy: 'Easy',
    medium: 'Medium',
    hard: 'Hard',
    verifiedPYQ: 'Verified Official PYQ',
    pyqStyle: 'Exam-Oriented PYQ-Style',
    original: 'Original Practice Question',
    copyrightSafeNotice: 'Copyright Safe: Original explanations, verified official notifications, and legitimate book references.',
    noPiracyNotice: 'Strict Anti-Piracy Policy: We link directly to official RRB portals, NCERT, and legitimate publishers.',
  },
  hi: {
    siteName: 'आरआरबी मास्टर इंडिया',
    siteSubtitle: 'सम्पूर्ण रेलवे भर्ती परीक्षा तैयारी मंच',
    officialPortal: 'आधिकारिक रेलवे परीक्षा तैयारी इंजन',
    dashboard: 'डैशबोर्ड',
    exams: 'आरआरबी परीक्षाएं',
    ntpc: 'आरआरबी एनटीपीसी (NTPC)',
    groupD: 'आरआरबी ग्रुप डी / लेवल-1',
    je: 'आरआरबी जूनियर इंजीनियर (JE)',
    syllabus: 'पाठ्यक्रम और परीक्षा पैटर्न',
    books: 'प्रमाणिक पुस्तकें',
    pyqs: 'गत वर्षों के प्रश्न (PYQs)',
    practice: 'अभ्यास इंजन',
    mockTests: 'लाइव सीबीटी मॉक टेस्ट',
    speedLab: 'स्पीड लैब (गणना गति)',
    typingLab: 'टाइपिंग स्पीड टेस्ट लैब',
    cbatLab: 'सीबीएटी साइको एप्टीट्यूड लैब',
    petLab: 'पीईटी शारीरिक दक्षता लैब',
    technicalEngine: 'जेई तकनीकी हब',
    flashcards: 'फ्लैशकार्ड्स (स्मरण प्रणाली)',
    formulaBook: 'फॉर्मूला मास्टर',
    shortcuts: 'शॉर्टकट ट्रिक्स लैब',
    railwayGk: 'भारतीय रेल सामान्य ज्ञान',
    currentAffairs: 'समसामयिकी (करेंट अफेयर्स)',
    vacancies: 'रिक्ति ट्रैकर (Vacancies)',
    cutoffs: 'कट-ऑफ डेटाबेस (Cutoffs)',
    results: 'परीक्षा परिणाम केंद्र',
    admitCards: 'प्रवेश पत्र (Admit Cards)',
    zones: '21 आरआरबी ज़ोन एक्सप्लोरर',
    jobProfiles: 'पद एवं कार्य विवरण (Job Profiles)',
    medicalInfo: 'रेलवे चिकित्सा मानक (Medical)',
    dvChecklist: 'दस्तावेज़ सत्यापन चेकलिस्ट',
    esmModule: 'भूतपूर्व सैनिक (ESM) पोर्टल',
    studyPlanner: 'अध्ययन योजना और रोडमैप',
    errorNotebook: 'त्रुटि पुस्तिका (Mistake Notebook)',
    examDiscovery: 'मैं किस रेलवे परीक्षा के लिए पात्र हूँ?',
    searchPlaceholder: 'परीक्षा, पद, विषय, सूत्र, प्रश्न खोजें (Ctrl + K)...',
    startMockTest: 'आधिकारिक परीक्षा सिमुलेशन शुरू करें',
    viewDetails: 'विवरण देखें',
    officialSource: 'आधिकारिक स्रोत',
    negativeMarking: 'नकारात्मक अंकन: 1/3 अंक',
    totalQuestions: 'कुल प्रश्न',
    totalMarks: 'कुल अंक',
    duration: 'अवधि',
    minutes: 'मिनट',
    years: 'वर्ष',
    languageToggle: 'English',
    english: 'English',
    hindi: 'हिंदी',
    saveAndNext: 'सहेजें और अगला',
    markForReview: 'समीक्षा हेतु चिह्नित करें',
    clearResponse: 'उत्तर हटाएं',
    submitExam: 'परीक्षा जमा करें',
    questionPalette: 'प्रश्न पैलेट',
    answered: 'उत्तर दिया',
    notAnswered: 'उत्तर नहीं दिया',
    markedForReview: 'समीक्षा हेतु चिह्नित',
    notVisited: 'नहीं देखा गया',
    testSummary: 'परीक्षा सारांश',
    scoreCard: 'स्कोर कार्ड',
    accuracy: 'सटीकता',
    totalScore: 'कुल प्राप्तांक',
    viewSolutions: 'सभी हल एवं व्याख्या देखें',
    filterBy: 'फ़िल्टर करें',
    all: 'सभी',
    easy: 'सरल',
    medium: 'मध्यम',
    hard: 'कठिन',
    verifiedPYQ: 'सत्यापित आधिकारिक PYQ',
    pyqStyle: 'परीक्षा-उन्मुख PYQ-स्टाइल',
    original: 'मौलिक अभ्यास प्रश्न',
    copyrightSafeNotice: 'कॉपीराइट सुरक्षित: मौलिक व्याख्याएं, आधिकारिक अधिसूचनाएं और वैध पुस्तक संदर्भ।',
    noPiracyNotice: 'पायरेसी रहित नीति: हम केवल आधिकारिक आरआरबी पोर्टल, एनसीईआरटी और वैध प्रकाशकों को लिंक करते हैं।',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('rrb_language');
    return (saved === 'hi' || saved === 'en') ? saved : 'en';
  });

  useEffect(() => {
    localStorage.setItem('rrb_language', language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState(prev => (prev === 'en' ? 'hi' : 'en'));
  };

  const t = (content: BilingualText | string): string => {
    if (!content) return '';
    if (typeof content === 'string') {
      return UI_DICTIONARY[language][content] || content;
    }
    return content[language] || content.en || '';
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
        ui: UI_DICTIONARY[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
