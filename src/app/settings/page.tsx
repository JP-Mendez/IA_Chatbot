import { AppShell } from "@/components/AppShell";
import { SectionCard } from "@/components/SectionCard";

const integrationModules = [
  "Google Cloud Storage for uploads",
  "Vertex AI / Gemini response engine",
  "Google Drive source import",
  "NotebookLM-style source-grounded answers",
  "Firestore / Cloud SQL user data",
  "Google OAuth authentication",
];

export default function SettingsPage() {
  return (
    <AppShell title="Settings & Architecture Readiness">
      <SectionCard title="Google Cloud / NotebookLM Preparation">
        <ul className="space-y-2 text-sm text-slate-700">
          {integrationModules.map((item) => (
            <li key={item} className="rounded-md bg-slate-50 p-3">
              {item}
            </li>
          ))}
        </ul>
      </SectionCard>
    </AppShell>
  );
}
