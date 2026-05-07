import { AppShell } from "@/components/AppShell";
import { SectionCard } from "@/components/SectionCard";
import { courses, examPrepOutputByCourse } from "@/data/mockData";

const defaultOutput = examPrepOutputByCourse["neuro-physiology"];

export default function ExamPrepPage() {
  return (
    <AppShell title="Exam Preparation Mode">
      <div className="grid gap-4 lg:grid-cols-2">
        <SectionCard title="Exam Prep Workflow Inputs">
          <form className="grid gap-3 text-sm">
            <select className="rounded-md border border-slate-300 px-3 py-2" defaultValue={courses[0].id}>
              {courses.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.name}
                </option>
              ))}
            </select>
            <input className="rounded-md border border-slate-300 px-3 py-2" defaultValue="Synaptic plasticity" />
            <input className="rounded-md border border-slate-300 px-3 py-2" type="date" defaultValue="2026-05-21" />
            <input className="rounded-md border border-slate-300 px-3 py-2" type="number" defaultValue={14} />
            <select className="rounded-md border border-slate-300 px-3 py-2" defaultValue="hard">
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
            <select className="rounded-md border border-slate-300 px-3 py-2" defaultValue="mixed">
              <option>multiple choice</option>
              <option>open questions</option>
              <option>oral exam</option>
              <option>problem solving</option>
              <option>mixed</option>
            </select>
            <button type="button" className="rounded-md bg-slate-900 px-4 py-2 text-white">
              Generate Exam Kit (Mock)
            </button>
          </form>
        </SectionCard>
        <SectionCard title="Generated Exam Output">
          <div className="grid gap-3 text-sm">
            <OutputGroup title="Study plan" items={defaultOutput.studyPlan} />
            <OutputGroup title="Priority topics" items={defaultOutput.priorityTopics} />
            <OutputGroup title="Key concepts to master" items={defaultOutput.keyConcepts} />
            <OutputGroup title="Practice questions" items={defaultOutput.practiceQuestions} />
            <OutputGroup title="Flashcards" items={defaultOutput.flashcards} />
            <OutputGroup title="Common mistakes" items={defaultOutput.commonMistakes} />
            <OutputGroup title="Last-minute review sheet" items={defaultOutput.lastMinuteReviewSheet} />
          </div>
        </SectionCard>
      </div>
    </AppShell>
  );
}

function OutputGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="font-medium">{title}</p>
      <ul className="list-inside list-disc text-slate-700">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
