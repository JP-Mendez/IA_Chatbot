import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100 px-4 py-20">
      <main className="mx-auto flex max-w-4xl flex-col gap-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-medium uppercase tracking-wider text-indigo-600">NeuroStudy Agent</p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
          AI study agent for high-performance academic preparation
        </h1>
        <p className="max-w-3xl text-slate-600">
          Organize complex sources, train active recall, generate exam plans, and study with a tutor that
          helps you think instead of just giving answers.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/dashboard" className="rounded-md bg-slate-900 px-5 py-2.5 text-white">
            Enter Dashboard
          </Link>
          <Link href="/agent" className="rounded-md border border-slate-300 px-5 py-2.5 text-slate-800">
            Open AI Study Agent
          </Link>
        </div>
      </main>
    </div>
  );
}
