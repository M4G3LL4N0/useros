import type { UserMapReport } from "@/lib/scoring";
import { ScoreCard } from "@/components/product/ScoreCard";
import { Card } from "@/components/ui/Card";

type ReportPanelProps = {
  report: UserMapReport;
};

export function ReportPanel({ report }: ReportPanelProps) {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <ScoreCard
          label="User clarity"
          value={report.userClarityScore}
          hint="How specific your inputs are about who hurts, how, and why now."
        />
        <ScoreCard
          label="Pain intensity"
          value={report.painIntensityScore}
          hint="How loud the pain is when urgency, economics, and workarounds stack up."
        />
        <ScoreCard
          label="Build confidence"
          value={report.buildConfidenceScore}
          hint="How ready you are to build without fooling yourself on evidence."
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card glow="blue" className="p-6">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Ideal customer profile</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-100">{report.idealCustomerProfile}</p>
        </Card>
        <Card glow="violet" className="p-6">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Emotional truth</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-100">{report.emotionalTruth}</p>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="p-6">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Buying trigger</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-100">{report.buyingTrigger}</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Existing alternative risk</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-100">{report.existingAlternativeRisk}</p>
        </Card>
      </div>

      <Card glow="teal" className="p-6">
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">MVP recommendation</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-100">{report.mvpRecommendation}</p>
      </Card>

      <Card className="p-6">
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">First five features</h3>
        <ol className="mt-4 space-y-3 text-sm text-slate-100">
          {report.firstFiveFeatures.map((f, i) => (
            <li key={f} className="flex gap-3">
              <span className="font-mono text-xs text-slate-500">{i + 1}</span>
              <span>{f}</span>
            </li>
          ))}
        </ol>
      </Card>

      <Card className="p-6">
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Interview questions</h3>
        <ul className="mt-4 space-y-3 text-sm text-slate-100">
          {report.interviewQuestions.map((q) => (
            <li key={q} className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-r from-sky-400 to-indigo-400" />
              <span>{q}</span>
            </li>
          ))}
        </ul>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="p-6">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Landing page copy</h3>
          <div className="mt-4 space-y-3 text-sm">
            <div>
              <div className="text-xs text-slate-500">Headline</div>
              <p className="mt-1 font-semibold text-white">{report.landingPage.headline}</p>
            </div>
            <div>
              <div className="text-xs text-slate-500">Subheadline</div>
              <p className="mt-1 text-slate-200">{report.landingPage.subheadline}</p>
            </div>
            <div>
              <div className="text-xs text-slate-500">Primary CTA</div>
              <p className="mt-1 text-slate-200">{report.landingPage.cta}</p>
            </div>
            <div>
              <div className="text-xs text-slate-500">Problem statement</div>
              <p className="mt-1 text-slate-200">{report.landingPage.problemStatement}</p>
            </div>
          </div>
        </Card>
        <div className="grid gap-4">
          <Card glow="violet" className="p-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Founder warning</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-100">{report.founderWarning}</p>
          </Card>
          <Card className="border-sky-400/25 bg-sky-500/5 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-200/80">Next action</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-100">{report.nextAction}</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
