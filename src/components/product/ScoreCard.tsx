import { cn } from "@/lib/utils";

type ScoreCardProps = {
  label: string;
  value: number;
  hint?: string;
};

export function ScoreCard({ label, value, hint }: ScoreCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/[0.03] p-4",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.02)]",
      )}
    >
      <div className="text-xs uppercase tracking-[0.16em] text-slate-500">{label}</div>
      <div className="mt-2 flex items-end gap-2">
        <div className="text-3xl font-semibold text-white">{value}</div>
        <span className="pb-1 text-xs text-slate-500">/ 100</span>
      </div>
      <div className="metric-bar mt-3">
        <span style={{ width: `${value}%` }} />
      </div>
      {hint ? <p className="mt-3 text-xs leading-relaxed text-slate-400">{hint}</p> : null}
    </div>
  );
}
