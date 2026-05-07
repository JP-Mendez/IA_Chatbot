import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { SectionCard } from "@/components/SectionCard";
import { courses } from "@/data/mockData";

export default function CoursesPage() {
  return (
    <AppShell title="Courses">
      <SectionCard title="Current Courses">
        <div className="grid gap-3 md:grid-cols-2">
          {courses.map((course) => (
            <article key={course.id} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-lg font-medium">{course.name}</h3>
              <p className="text-sm text-slate-600">{course.area}</p>
              <p className="mt-2 text-sm">Topic progress: {course.progress}%</p>
              <Link className="mt-3 inline-block text-sm font-medium text-indigo-700" href={`/courses/${course.id}`}>
                View course detail →
              </Link>
            </article>
          ))}
        </div>
      </SectionCard>
    </AppShell>
  );
}
