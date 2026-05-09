import { notFound } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { SectionCard } from "@/components/SectionCard";
import { courses, studySources } from "@/data/mockData";

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = courses.find((entry) => entry.id === id);

  if (!course) {
    notFound();
  }

  const relatedSources = studySources.filter((source) => source.courseId === course.id);

  return (
    <AppShell title={`${course.name} · Detail`}>
      <div className="grid gap-4 lg:grid-cols-2">
        <SectionCard title="Progress by Topic">
          <ul className="space-y-2 text-sm">
            {course.topics.map((topic) => (
              <li key={topic} className="rounded-md bg-slate-50 p-3">
                {topic}
              </li>
            ))}
          </ul>
        </SectionCard>
        <SectionCard title="Recent Materials">
          <ul className="space-y-2 text-sm">
            {relatedSources.map((source) => (
              <li key={source.id} className="rounded-md bg-slate-50 p-3">
                <p className="font-medium">{source.title}</p>
                <p className="text-slate-500">{source.topic}</p>
              </li>
            ))}
          </ul>
        </SectionCard>
      </div>
    </AppShell>
  );
}
