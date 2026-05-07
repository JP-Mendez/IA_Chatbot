import Link from "next/link";
import { ReactNode } from "react";

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/courses", label: "Courses" },
  { href: "/sources", label: "Sources" },
  { href: "/agent", label: "AI Study Agent" },
  { href: "/exam-prep", label: "Exam Prep" },
  { href: "/flashcards", label: "Flashcards" },
  { href: "/study-plan", label: "Study Plan" },
  { href: "/settings", label: "Settings" },
];

export function AppShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 lg:px-6">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              NeuroStudy Agent
            </Link>
            <p className="text-sm text-slate-500">Focused workspace for deep academic learning</p>
          </div>
          <nav className="flex flex-wrap gap-2 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 transition hover:bg-slate-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6 lg:px-6">
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        {children}
      </main>
    </div>
  );
}
