import { Badge } from "@/components/ui/Badge";

export function DashboardPreview() {
  return (
    <div className="glass-panel relative overflow-hidden rounded-3xl p-6 sm:p-8 animate-float-soft">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <svg className="h-full w-full" viewBox="0 0 400 260" fill="none" aria-hidden>
          <path
            d="M20 200 C120 40 260 220 380 60"
            stroke="url(#osg)"
            strokeWidth="1.4"
            className="animate-pulse-line"
          />
          <path d="M40 210 L120 120 L200 170 L280 90 L360 130" stroke="rgba(148,163,184,0.35)" strokeWidth="1" />
          <defs>
            <linearGradient id="osg" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38bdf8" />
              <stop offset="0.5" stopColor="#818cf8" />
              <stop offset="1" stopColor="#2dd4bf" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative flex items-center justify-between gap-3">
        <div>
          <Badge tone="teal">Live signal preview</Badge>
          <p className="mt-3 text-lg font-semibold text-white">User Intelligence Engine</p>
          <p className="text-sm text-slate-400">Scores update from what you already know—before you ship.</p>
        </div>
        <div className="hidden text-right sm:block">
          <div className="text-xs uppercase tracking-[0.18em] text-slate-500">Session</div>
          <div className="font-mono text-sm text-slate-200">local · secure</div>
        </div>
      </div>

      <div className="relative mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="text-xs text-slate-500">User clarity</div>
          <div className="mt-2 text-3xl font-semibold text-white">84</div>
          <div className="metric-bar mt-3">
            <span style={{ width: "84%" }} />
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="text-xs text-slate-500">Pain intensity</div>
          <div className="mt-2 text-3xl font-semibold text-white">76</div>
          <div className="metric-bar mt-3">
            <span style={{ width: "76%" }} />
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="text-xs text-slate-500">Build confidence</div>
          <div className="mt-2 text-3xl font-semibold text-white">69</div>
          <div className="metric-bar mt-3">
            <span style={{ width: "69%" }} />
          </div>
        </div>
      </div>

      <div className="relative mt-6 grid gap-3 rounded-2xl border border-white/10 bg-slate-950/40 p-4 sm:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Ideal customer</div>
          <p className="mt-2 text-sm leading-relaxed text-slate-200">
            Ops leads at 200–800 person SaaS teams who are tired of revenue leaks from sloppy handoffs between
            sales and CS.
          </p>
        </div>
        <div className="rounded-xl border border-sky-400/20 bg-sky-500/5 p-3">
          <div className="text-xs text-sky-200/80">Next action</div>
          <p className="mt-1 text-sm text-slate-100">Run five interviews on the last expensive miss, not future
            hypotheticals.</p>
        </div>
      </div>
    </div>
  );
}
