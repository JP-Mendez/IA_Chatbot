import { AppShell } from "@/components/AppShell";
import { SectionCard } from "@/components/SectionCard";
import { courses, studySources } from "@/data/mockData";

export default function SourcesPage() {
  return (
    <AppShell title="Source Management">
      <div className="grid gap-4 lg:grid-cols-2">
        <SectionCard title="Add Study Source">
          <form className="grid gap-3 text-sm">
            <input className="rounded-md border border-slate-300 px-3 py-2" placeholder="Source title" />
            <select className="rounded-md border border-slate-300 px-3 py-2" defaultValue="">
              <option value="" disabled>
                Select course
              </option>
              {courses.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.name}
                </option>
              ))}
            </select>
            <input className="rounded-md border border-slate-300 px-3 py-2" placeholder="Topic" />
            <select className="rounded-md border border-slate-300 px-3 py-2" defaultValue="pdf">
              <option value="pdf">PDF</option>
              <option value="docx">DOCX</option>
              <option value="txt">TXT</option>
              <option value="markdown">Markdown</option>
              <option value="lecture notes">Lecture notes</option>
            </select>
            <p className="rounded-md border border-dashed border-slate-300 bg-slate-50 p-3 text-slate-600">
              File upload placeholder for PDF, DOCX, TXT, Markdown and lecture notes.
            </p>
            <button type="button" className="rounded-md bg-slate-900 px-4 py-2 text-white">
              Save Source (Mock)
            </button>
          </form>
        </SectionCard>
        <SectionCard title="NotebookLM / Google Cloud Sources">
          <p className="mb-3 text-sm text-slate-600">
            Future integration target for Google Drive, NotebookLM-style notebooks, and Google Cloud Storage.
          </p>
          <ul className="space-y-2 text-sm">
            {studySources.map((source) => (
              <li key={source.id} className="rounded-md bg-slate-50 p-3">
                <p className="font-medium">{source.title}</p>
                <p className="text-slate-500">
                  {source.type.toUpperCase()} · {source.difficulty} · {source.date}
                </p>
                <p className="text-slate-600">
                  Metadata: course={source.courseId}, topic={source.topic}, origin={source.origin}
                </p>
              </li>
            ))}
          </ul>
        </SectionCard>
      </div>
    </AppShell>
  );
}
