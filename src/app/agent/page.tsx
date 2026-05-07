import { AppShell } from "@/components/AppShell";
import { SectionCard } from "@/components/SectionCard";
import { systemPrompts } from "@/lib/prompts";

const sampleAgentOutputs = [
  "Concept explanation: Synaptic plasticity adjusts synapse strength via receptor trafficking and signaling cascades.",
  "Key definitions extracted: LTP, LTD, temporal summation, inhibitory gating.",
  "Concept map (text): Action potential -> calcium influx -> vesicle fusion -> receptor activation -> downstream plasticity.",
  "Socratic question: Which part of this pathway fails first if calcium channels are blocked?",
  "Feedback: You used the term depolarization correctly, but did not differentiate presynaptic vs postsynaptic mechanisms.",
];

export default function AgentPage() {
  return (
    <AppShell title="AI Study Agent">
      <div className="grid gap-4 lg:grid-cols-2">
        <SectionCard title="Ask the Agent">
          <div className="space-y-3">
            <textarea
              className="min-h-32 w-full rounded-md border border-slate-300 px-3 py-2"
              placeholder="Ask about a topic or source..."
            />
            <div className="flex flex-wrap gap-2 text-xs">
              {Object.keys(systemPrompts).map((mode) => (
                <span key={mode} className="rounded-full bg-slate-100 px-3 py-1">
                  {mode}
                </span>
              ))}
            </div>
            <button type="button" className="rounded-md bg-slate-900 px-4 py-2 text-white">
              Generate Response (Mock)
            </button>
          </div>
        </SectionCard>
        <SectionCard title="Sample Structured Output">
          <ul className="space-y-2 text-sm text-slate-700">
            {sampleAgentOutputs.map((item) => (
              <li key={item} className="rounded-md bg-slate-50 p-3">
                {item}
              </li>
            ))}
          </ul>
        </SectionCard>
      </div>
    </AppShell>
  );
}
