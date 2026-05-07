import { AppShell } from "@/components/AppShell";
import { SectionCard } from "@/components/SectionCard";
import { knowledgeAcquisitionSteps } from "@/data/mockData";

const notesTemplates = [
  "Cornell notes",
  "Detailed academic summary",
  "Short oral explanation",
  "Exam-focused summary",
  "Definitions list",
  "Formula sheet",
  "What the professor may ask",
];

export default function StudyPlanPage() {
  return (
    <AppShell title="Knowledge Acquisition & Notes Generator">
      <div className="grid gap-4 lg:grid-cols-2">
        <SectionCard title="Knowledge Acquisition Mode">
          <ol className="list-inside list-decimal space-y-2 text-sm text-slate-700">
            {knowledgeAcquisitionSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </SectionCard>
        <SectionCard title="Notes Generator Outputs">
          <ul className="space-y-2 text-sm text-slate-700">
            {notesTemplates.map((template) => (
              <li key={template} className="rounded-md bg-slate-50 p-3">
                {template}
              </li>
            ))}
          </ul>
        </SectionCard>
      </div>
    </AppShell>
  );
}
