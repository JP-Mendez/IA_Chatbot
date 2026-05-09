import { ReactNode } from "react";

export function SectionCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-lg font-medium tracking-tight">{title}</h2>
      {children}
    </section>
  );
}
