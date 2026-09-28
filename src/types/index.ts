export type Language = 'en' | 'hi';

export interface BilingualText {
  en: string;
  hi: string;
}

export type ExamId = 'rrb-ntpc' | 'rrb-group-d' | 'rrb-je';

export interface OfficialSource {
  title: string;
  url: string;
  notificationNo: string;
  lastVerified: string;
}

export interface PostDetails {
  id: string;
  postName: BilingualText;
  examId: ExamId;
  level: string; // Undergraduate / Graduate / Technical
  payLevel: string; // Level 2, 3, 5, 6, 7
  initialPay: string;
  department: BilingualText;
  qualification: BilingualText;
  ageLimit: string;
  medicalStandard: string; // A-2, A-3, B-2, C-2
  typingRequired: boolean;
  cbatRequired: boolean;
  jobDuties: BilingualText;
  careerProgression: BilingualText;
  selectionStages: string[];
}

export interface ExamStage {
  id: string;
  name: BilingualText;
  questions: number;
  marks: number;
  durationMinutes: number;
  negativeMarking: string;
  sections: {
    subject: string;
    bilingualSubject: BilingualText;
    questions: number;
    marks: number;
  }[];
}

export interface ExamConfig {
  id: ExamId;
  code: string;
  title: BilingualText;
  subtitle: BilingualText;
  currentCEN: string;
  officialNotificationUrl: string;
  eligibility: {
    ageRange: string;
    qualifications: BilingualText[];
    feeGeneral: string;
    feeReserved: string;
  };
  stages: ExamStage[];
  selectionProcess: BilingualText[];
  posts: PostDetails[];
}

export interface Question {
  id: string;
  exam: ExamId;
  stage: 'CBT-1' | 'CBT-2' | 'CBT';
  subject: 'Mathematics' | 'Reasoning' | 'General Science' | 'General Awareness' | 'Technical Engineering';
  chapter: string;
  topic: string;
  difficulty: 'easy' | 'medium' | 'hard';
  year?: string;
  shift?: string;
  question: BilingualText;
  options: [BilingualText, BilingualText, BilingualText, BilingualText];
  answerIndex: number; // 0, 1, 2, 3
  explanation: BilingualText;
  sourceType: 'verified_pyq' | 'pyq_style' | 'original';
  source: string;
  tags: string[];
}

export interface RRBZone {
  code: string;
  name: BilingualText;
  officialWebsite: string;
  region: BilingualText;
  railwayZones: string[];
  noticeBoardUrl: string;
  admitCardUrl: string;
  resultUrl: string;
  helpline: string;
  email: string;
  address: BilingualText;
}

export interface LiveNotification {
  id: string;
  title: BilingualText;
  category: 'important' | 'deadline' | 'new' | 'info';
  date: string;
  exam: ExamId | 'ALL';
  officialPdfUrl: string;
  rrbCode: string;
  summary: BilingualText;
}

export interface BookItem {
  id: string;
  title: string;
  author: string;
  publisher: string;
  edition: string;
  exam: ExamId | 'ALL';
  subject: string;
  description: BilingualText;
  syllabusCoverage: BilingualText;
  legitimateBuyUrl: string;
  publisherUrl: string;
  isNcertOrGovt?: boolean;
}

export interface FormulaItem {
  id: string;
  subject: 'Arithmetic' | 'Algebra' | 'Geometry' | 'Mensuration' | 'Trigonometry' | 'Statistics' | 'Physics' | 'Engineering';
  title: BilingualText;
  formula: string;
  explanation: BilingualText;
  example: BilingualText;
  examApplicability: ExamId[];
}

export interface ShortcutItem {
  id: string;
  subject: string;
  topic: BilingualText;
  standardMethod: BilingualText;
  shortcutMethod: BilingualText;
  speedAdvantage: string;
  exampleQuestion: BilingualText;
  solution: BilingualText;
}

export interface Flashcard {
  id: string;
  category: 'Railway GK' | 'Static GK' | 'General Science' | 'Current Affairs' | 'Formulas' | 'Technical';
  front: BilingualText;
  back: BilingualText;
  notes?: BilingualText;
}

export interface ErrorNote {
  questionId: string;
  exam: ExamId;
  subject: string;
  questionText: string;
  userAnswer: string;
  correctAnswer: string;
  mistakeType: 'conceptual' | 'calculation' | 'misread' | 'guess' | 'time_pressure' | 'careless';
  personalNotes: string;
  dateAdded: string;
  nextRevisionDate: string;
  revisionCount: number;
}

export interface MockTestResult {
  id: string;
  examId: ExamId;
  stageId: string;
  testTitle: string;
  date: string;
  totalQuestions: number;
  attempted: number;
  correct: number;
  incorrect: number;
  unattempted: number;
  score: number;
  maxScore: number;
  percentage: number;
  accuracy: number;
  timeSpentSeconds: number;
  sectionBreakdown: {
    sectionName: string;
    correct: number;
    incorrect: number;
    score: number;
  }[];
}
