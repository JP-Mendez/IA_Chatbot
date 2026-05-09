import { AppShell } from "@/components/AppShell";
import { SectionCard } from "@/components/SectionCard";
import { flashcards } from "@/data/mockData";

export default function FlashcardsPage() {
  return (
    <AppShell title="Memory & Memorization System">
      <SectionCard title="Spaced Repetition Flashcards">
        <div className="grid gap-3 md:grid-cols-2">
          {flashcards.map((card) => (
            <article key={card.id} className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm">
              <p className="text-xs uppercase text-slate-500">
                {card.topic} · {card.difficulty} · {card.status}
              </p>
              <p className="mt-2 font-medium">Front: {card.front}</p>
              <p className="mt-1 text-slate-700">Back: {card.back}</p>
              <p className="mt-2">Active recall: {card.activeRecallQuestion}</p>
              {card.cloze ? <p className="mt-1">Cloze: {card.cloze}</p> : null}
              <p className="mt-2 text-slate-600">Next review: {card.nextReviewDate}</p>
            </article>
          ))}
        </div>
      </SectionCard>
    </AppShell>
  );
}
