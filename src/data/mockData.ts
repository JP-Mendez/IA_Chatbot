import { calculateNextReviewDate } from "@/utils/spacedRepetition";
import type { Course, ExamPrepOutput, Flashcard, StudySource } from "@/types";

export const courses: Course[] = [
  {
    id: "neuro-physiology",
    name: "Neurophysiology",
    area: "Biomedical Engineering",
    progress: 62,
    nextExamDate: "2026-05-21",
    upcomingDeadline: "2026-05-12",
    topics: ["Action potentials", "Synaptic plasticity", "Sensory pathways"],
  },
  {
    id: "ml-biomed",
    name: "Machine Learning for Biomedicine",
    area: "Machine Learning",
    progress: 47,
    nextExamDate: "2026-05-28",
    upcomingDeadline: "2026-05-15",
    topics: ["Bias-variance", "Model validation", "Feature engineering"],
  },
  {
    id: "calc-systems",
    name: "Calculus for Dynamical Systems",
    area: "Mathematics",
    progress: 71,
    nextExamDate: "2026-06-02",
    upcomingDeadline: "2026-05-14",
    topics: ["Gradient fields", "Partial derivatives", "Optimization"],
  },
];

export const studySources: StudySource[] = [
  {
    id: "src-1",
    title: "Lecture 04 - Synaptic Transmission",
    courseId: "neuro-physiology",
    topic: "Synaptic plasticity",
    date: "2026-05-04",
    type: "pdf",
    difficulty: "hard",
    origin: "upload",
  },
  {
    id: "src-2",
    title: "NotebookLM Notes - Hebbian Learning",
    courseId: "neuro-physiology",
    topic: "Learning mechanisms",
    date: "2026-05-05",
    type: "notebook",
    difficulty: "medium",
    origin: "google-cloud-placeholder",
  },
  {
    id: "src-3",
    title: "Cross-validation Handbook",
    courseId: "ml-biomed",
    topic: "Model validation",
    date: "2026-05-03",
    type: "markdown",
    difficulty: "medium",
    origin: "manual",
  },
  {
    id: "src-4",
    title: "Gradient & Hessian Cheat Sheet",
    courseId: "calc-systems",
    topic: "Optimization",
    date: "2026-05-01",
    type: "txt",
    difficulty: "easy",
    origin: "upload",
  },
];

const flashcardSeed: Omit<Flashcard, "nextReviewDate">[] = [
  {
    id: "fc-1",
    courseId: "neuro-physiology",
    topic: "Action potentials",
    front: "What event opens voltage-gated sodium channels?",
    back: "Membrane depolarization beyond threshold triggers channel opening.",
    tags: ["neuron", "electrophysiology"],
    difficulty: "medium",
    status: "learning",
    activeRecallQuestion: "Why does refractory period preserve unidirectional conduction?",
    cloze: "The {{refractory period}} limits immediate reactivation of sodium channels.",
  },
  {
    id: "fc-2",
    courseId: "ml-biomed",
    topic: "Bias-variance",
    front: "High variance usually means what behavior in training vs test error?",
    back: "Very low training error but high test error due to overfitting.",
    tags: ["generalization", "modeling"],
    difficulty: "hard",
    status: "reviewing",
    activeRecallQuestion: "How would regularization reduce variance in a noisy dataset?",
  },
  {
    id: "fc-3",
    courseId: "calc-systems",
    topic: "Optimization",
    front: "What does the Hessian matrix tell you near a critical point?",
    back: "Its eigenvalues indicate local curvature and point classification.",
    tags: ["multivariable", "analysis"],
    difficulty: "easy",
    status: "new",
    activeRecallQuestion: "Why can a zero gradient still fail to be a minimum?",
    cloze: "A {{saddle point}} has zero gradient but mixed Hessian eigenvalue signs.",
  },
];

export const flashcards: Flashcard[] = flashcardSeed.map((card) => ({
  ...card,
  nextReviewDate: calculateNextReviewDate(card),
}));

export const examPrepOutputByCourse: Record<string, ExamPrepOutput> = {
  "neuro-physiology": {
    studyPlan: [
      "Day 1-2: Rebuild membrane potential basics + annotated diagrams",
      "Day 3-4: Synaptic transmission and receptor families",
      "Day 5: Solve oral-style mechanism comparison prompts",
      "Day 6: Timed mixed practice + correction session",
    ],
    priorityTopics: ["Synaptic plasticity", "Action potential phases", "Neurotransmitter pathways"],
    keyConcepts: ["Long-term potentiation", "EPSP vs IPSP", "Signal integration"],
    practiceQuestions: [
      "Compare AMPA and NMDA receptor kinetics.",
      "Explain how myelination changes conduction velocity.",
      "Predict outcome of reduced extracellular calcium in synaptic release.",
    ],
    flashcards: ["Receptor types", "Ionic gradients", "Plasticity rules"],
    commonMistakes: [
      "Confusing threshold potential with resting potential",
      "Ignoring inhibitory interneuron role in network behavior",
    ],
    lastMinuteReviewSheet: [
      "Membrane equation terms",
      "Synapse sequence timeline",
      "High-yield definitions and mechanism contrasts",
    ],
  },
};

export const knowledgeAcquisitionSteps = [
  "Step 1: Diagnose prior knowledge with quick baseline questions.",
  "Step 2: Explain topic from foundations to advanced detail.",
  "Step 3: Provide guided examples and analogies.",
  "Step 4: Test the student with active recall prompts.",
  "Step 5: Correct mistakes with precise feedback.",
  "Step 6: Generate a revision plan for retention.",
];
