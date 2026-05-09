export type DifficultyLevel = "easy" | "medium" | "hard";

export type ExamType =
  | "multiple choice"
  | "open questions"
  | "oral exam"
  | "problem solving"
  | "mixed";

export interface Course {
  id: string;
  name: string;
  area: string;
  progress: number;
  nextExamDate: string;
  upcomingDeadline: string;
  topics: string[];
}

export interface StudySource {
  id: string;
  title: string;
  courseId: string;
  topic: string;
  date: string;
  type: "pdf" | "docx" | "txt" | "markdown" | "lecture notes" | "notebook";
  difficulty: DifficultyLevel;
  origin: "manual" | "upload" | "google-cloud-placeholder";
}

export interface Flashcard {
  id: string;
  courseId: string;
  topic: string;
  front: string;
  back: string;
  tags: string[];
  difficulty: DifficultyLevel;
  status: "new" | "learning" | "reviewing" | "mastered";
  nextReviewDate: string;
  cloze?: string;
  activeRecallQuestion: string;
}

export interface ExamPrepInput {
  courseId: string;
  topic: string;
  examDate: string;
  availableStudyHours: number;
  difficulty: DifficultyLevel;
  examType: ExamType;
}

export interface ExamPrepOutput {
  studyPlan: string[];
  priorityTopics: string[];
  keyConcepts: string[];
  practiceQuestions: string[];
  flashcards: string[];
  commonMistakes: string[];
  lastMinuteReviewSheet: string[];
}
