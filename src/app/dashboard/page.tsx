import type { Metadata } from "next";
import { SubpageVisual } from "@/components/SubpageVisual";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  painThemesMock,
  researchTasksMock,
  roadmapPreviewMock,
  savedMapsMock,
  urgencyUsersMock,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Mock founder dashboard: saved user maps, signal strength, pain themes, urgency, research tasks, and roadmap preview.",
};

export default function DashboardPage() {
  return (
    <>
    <SubpageVisual variant="dashboard" />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Badge tone="teal">Founder command center</Badge>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Dashboard</h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">
            Mock data for the MVP: what a weekly operating view could look like once maps accumulate and patterns
            surface.
          </p>
        </div>
        <Button href="/demo">New user map</Button>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        <Card className="p-6 lg:col-span-2" glow="blue">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-semibold text-white">Saved user maps</h2>
            <span className="text-xs text-slate-500">Last updated</span>
          </div>
          <div className="mt-5 space-y-3">
            {savedMapsMock.map((m) => (
              <div
                key={m.id}
                className="flex flex-col gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <div className="font-medium text-white">{m.name}</div>
                  <div className="mt-1 text-xs text-slate-500">Signal strength {m.signal}/100 · Urgency {m.urgency}</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="metric-bar w-32">
                    <span style={{ width: `${m.signal}%` }} />
                  </div>
                  <span className="text-xs text-slate-500">{m.updated}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6" glow="violet">
          <h2 className="text-lg font-semibold text-white">Signal strength</h2>
          <p className="mt-2 text-sm text-slate-400">Blended clarity across active maps.</p>
          <div className="mt-6 text-4xl font-semibold text-white">81</div>
          <div className="metric-bar mt-3">
            <span style={{ width: "81%" }} />
          </div>
          <p className="mt-4 text-xs leading-relaxed text-slate-500">
            When this drifts down, your segments are getting fuzzy or your inputs are getting thin.
          </p>
        </Card>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-white">Top pain themes</h2>
          <div className="mt-5 space-y-4">
            {painThemesMock.map((p) => (
              <div key={p.label}>
                <div className="flex items-center justify-between text-sm text-slate-200">
                  <span>{p.label}</span>
                  <span className="font-mono text-xs text-slate-500">{p.strength}</span>
                </div>
                <div className="metric-bar mt-2">
                  <span style={{ width: `${p.strength}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold text-white">Highest urgency users</h2>
          <div className="mt-5 space-y-3">
            {urgencyUsersMock.map((u) => (
              <div key={u.name} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm text-slate-100">{u.name}</div>
                  <div className="font-mono text-xs text-slate-400">{u.score}</div>
                </div>
                <div className="metric-bar mt-3">
                  <span style={{ width: `${u.score}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Card className="p-6" glow="teal">
          <h2 className="text-lg font-semibold text-white">Next research tasks</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-200">
            {researchTasksMock.map((t) => (
              <li key={t} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-r from-sky-400 to-teal-300" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold text-white">Product roadmap preview</h2>
          <div className="mt-5 space-y-3">
            {roadmapPreviewMock.map((r) => (
              <div key={r.item} className="rounded-xl border border-white/10 bg-slate-950/40 p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{r.phase}</div>
                <div className="mt-2 text-sm text-slate-100">{r.item}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  </>
  )
}
