import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  tone?: "sky" | "violet" | "teal" | "neutral";
  className?: string;
};

const toneMap: Record<NonNullable<BadgeProps["tone"]>, string> = {
  sky: "border-sky-400/30 bg-sky-400/10 text-sky-100",
  violet: "border-violet-400/30 bg-violet-500/10 text-violet-100",
  teal: "border-teal-400/30 bg-teal-400/10 text-teal-100",
  neutral: "border-white/10 bg-white/5 text-slate-200",
};

export function Badge({ children, tone = "neutral", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]",
        toneMap[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
