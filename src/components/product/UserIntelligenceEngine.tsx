"use client";

import { useMemo, useState } from "react";
import { generateUserMapReport, type UserMapInput, type UserMapReport } from "@/lib/scoring";
import { ReportPanel } from "@/components/product/ReportPanel";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const emptyInput: UserMapInput = {
  startupIdea: "",
  targetCustomer: "",
  currentAlternative: "",
  biggestPain: "",
  priceRange: "",
  marketType: "B2B",
  urgencyLevel: "Medium",
  founderConfidence: "Medium",
};

type FieldProps = {
  label: string;
  hint?: string;
  children: React.ReactNode;
};

function Field({ label, hint, children }: FieldProps) {
  return (
    <label className="block space-y-2">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-sm font-medium text-slate-200">{label}</span>
        {hint ? <span className="text-xs text-slate-500">{hint}</span> : null}
      </div>
      {children}
    </label>
  );
}

export function UserIntelligenceEngine({ embedded }: { embedded?: boolean }) {
  const [input, setInput] = useState<UserMapInput>(emptyInput);
  const [report, setReport] = useState<UserMapReport | null>(null);

  const canSubmit = useMemo(() => {
    return (
      input.startupIdea.trim().length > 8 &&
      input.targetCustomer.trim().length > 3 &&
      input.biggestPain.trim().length > 6
    );
  }, [input]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setReport(generateUserMapReport(input));
  }

  return (
    <div className={cn("grid gap-8", embedded ? "lg:grid-cols-1" : "lg:grid-cols-[1fr_1.05fr]")}>
      <Card glow="blue" className={cn("p-6 sm:p-8", embedded && "lg:max-w-3xl")}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <Badge tone="sky">User Intelligence Engine</Badge>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Generate a user map
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              No API keys. Everything runs locally in your browser. Strong answers in, stronger briefs out.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <Field label="Startup idea" hint="What are you exploring?">
            <textarea
              required
              rows={3}
              value={input.startupIdea}
              onChange={(e) => setInput({ ...input, startupIdea: e.target.value })}
              placeholder="Example: A copilot that rebuilds onboarding playbooks from support tickets."
              className="w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-slate-100 outline-none ring-0 transition placeholder:text-slate-600 focus:border-sky-400/40"
            />
          </Field>

          <Field label="Target customer" hint="Narrow beats clever.">
            <input
              required
              value={input.targetCustomer}
              onChange={(e) => setInput({ ...input, targetCustomer: e.target.value })}
              placeholder="Example: RevOps managers at 200–800 employee SaaS companies in the US."
              className="w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-slate-100 outline-none placeholder:text-slate-600 focus:border-sky-400/40"
            />
          </Field>

          <Field label="Current alternative" hint="What do they use today?">
            <input
              value={input.currentAlternative}
              onChange={(e) => setInput({ ...input, currentAlternative: e.target.value })}
              placeholder="Spreadsheet, consultant, nothing, Zendesk macros…"
              className="w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-slate-100 outline-none placeholder:text-slate-600 focus:border-sky-400/40"
            />
          </Field>

          <Field label="Biggest suspected pain" hint="In their words, not yours.">
            <textarea
              required
              rows={3}
              value={input.biggestPain}
              onChange={(e) => setInput({ ...input, biggestPain: e.target.value })}
              placeholder="Example: Handoffs between sales and CS keep breaking, so renewals surprise everyone."
              className="w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-slate-100 outline-none placeholder:text-slate-600 focus:border-sky-400/40"
            />
          </Field>

          <Field label="Price range" hint="Rough is fine.">
            <input
              value={input.priceRange}
              onChange={(e) => setInput({ ...input, priceRange: e.target.value })}
              placeholder="$29/mo, $500–2k ACV, enterprise…"
              className="w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-slate-100 outline-none placeholder:text-slate-600 focus:border-sky-400/40"
            />
          </Field>

          <div className="grid gap-4 sm:grid-cols-3">
            <Field label="Market type">
              <select
                value={input.marketType}
                onChange={(e) => setInput({ ...input, marketType: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-slate-950/50 px-3 py-3 text-sm text-slate-100 outline-none focus:border-sky-400/40"
              >
                <option>B2B</option>
                <option>B2C</option>
                <option>Prosumer</option>
                <option>Marketplace</option>
                <option>Internal tools</option>
              </select>
            </Field>
            <Field label="Urgency">
              <select
                value={input.urgencyLevel}
                onChange={(e) => setInput({ ...input, urgencyLevel: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-slate-950/50 px-3 py-3 text-sm text-slate-100 outline-none focus:border-sky-400/40"
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </Field>
            <Field label="Founder confidence">
              <select
                value={input.founderConfidence}
                onChange={(e) => setInput({ ...input, founderConfidence: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-slate-950/50 px-3 py-3 text-sm text-slate-100 outline-none focus:border-sky-400/40"
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </Field>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Button type="submit" variant="primary" className="sm:min-w-[220px]">
              Generate User Map
            </Button>
            <p className="text-xs text-slate-500">
              {canSubmit
                ? "Ready when you are."
                : "Add a sharper idea, customer, and pain to unlock the full report."}
            </p>
          </div>
        </form>
      </Card>

      <div className="min-w-0">
        {report ? (
          <ReportPanel report={report} />
        ) : (
          <Card className="h-full min-h-[320px] border-dashed border-white/10 bg-slate-950/30 p-8">
            <div className="flex h-full flex-col justify-center space-y-4">
              <h3 className="text-lg font-semibold text-white">Your report will land here</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                You will get scores, a tight ICP narrative, triggers, MVP guidance, features, interview questions,
                landing copy, and the one dangerous assumption to kill early.
              </p>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-xs text-slate-500">
                Tip: name a segment you can find in the wild. If you cannot find ten of them in fifteen minutes,
                the segment is still too wide.
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
