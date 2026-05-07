import { AppShell } from "@/components/AppShell";
import { SectionCard } from "@/components/SectionCard";
import { StatCard } from "@/components/StatCard";
import { courses, studySources } from "@/data/mockData";

export default function DashboardPage() {
  return (
    <AppShell title="Study Dashboard">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Active Courses" value={courses.length} />
        <StatCard label="Upcoming Exams" value={courses.length} />
        <StatCard label="Recent Sources" value={studySources.length} />
        <StatCard
          label="Average Progress"
          value={`${Math.round(courses.reduce((acc, c) => acc + c.progress, 0) / courses.length)}%`}
        />
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <SectionCard title="Current Subjects">
          <ul className="space-y-2 text-sm text-slate-700">
            {courses.map((course) => (
              <li key={course.id} className="rounded-md bg-slate-50 p-3">
                <p className="font-medium">{course.name}</p>
                <p className="text-slate-500">{course.area}</p>
                <p className="mt-1 text-slate-600">Progress: {course.progress}%</p>
              </li>
            ))}
          </ul>
        </SectionCard>
        <SectionCard title="Upcoming Exams & Deadlines">
          <ul className="space-y-2 text-sm text-slate-700">
            {courses.map((course) => (
              <li key={course.id} className="rounded-md bg-slate-50 p-3">
                <p className="font-medium">{course.name}</p>
                <p>Exam: {course.nextExamDate}</p>
                <p>Deadline: {course.upcomingDeadline}</p>
              </li>
            ))}
          </ul>
        </SectionCard>
      </div>
    </AppShell>
  );
}
