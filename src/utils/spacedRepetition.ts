import type { Flashcard } from "@/types";

const dayInMs = 24 * 60 * 60 * 1000;

const statusIntervals: Record<Flashcard["status"], number> = {
  new: 1,
  learning: 2,
  reviewing: 5,
  mastered: 10,
};

const difficultyModifiers: Record<Flashcard["difficulty"], number> = {
  easy: 2,
  medium: 1,
  hard: 0,
};

export function calculateNextReviewDate(card: Pick<Flashcard, "status" | "difficulty">): string {
  const days = statusIntervals[card.status] + difficultyModifiers[card.difficulty];
  return new Date(Date.now() + days * dayInMs).toISOString().slice(0, 10);
}
