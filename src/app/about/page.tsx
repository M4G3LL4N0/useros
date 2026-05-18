import type { Metadata } from "next";
import { SubpageVisual } from "@/components/SubpageVisual";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "UserOS exists so the future founder starts with customer truth, then builds with AI. Mission, beliefs, and how we think about evidence.",
};

export default function AboutPage() {
  return (
    <>
    <SubpageVisual variant="about" />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">About UserOS</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Mission</h1>
        <p className="mt-6 text-lg leading-relaxed text-slate-300">
          The future founder starts with customer truth, then builds with AI.
        </p>
      </div>

      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        <Card className="p-6 lg:col-span-2" glow="blue">
          <h2 className="text-xl font-semibold text-white">What we believe</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            UserOS is not a survey tool. It is not a generic AI wrapper. It is not a weak persona generator. It is a
            founder operating system for understanding customers before writing code.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            When models can ship features overnight, the durable edge is judgment: knowing which user to serve, which
            pain is acute, which message lands, and which MVP actually earns the next conversation.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            We help you fall in love with the user before you fall in love with the product—because the second one
            gets expensive fast.
          </p>
        </Card>
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-white">How we work</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>Evidence before aesthetics.</li>
            <li>Segments before slogans.</li>
            <li>Triggers before feature lists.</li>
            <li>Interviews before infrastructure.</li>
          </ul>
          <div className="mt-6">
            <Button href="/demo" className="w-full">
              Run the engine
            </Button>
          </div>
        </Card>
      </div>

      <Card className="mt-4 p-6">
        <h2 className="text-lg font-semibold text-white">What success looks like</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          You leave with a map you can defend in a room full of skeptics: who hurts, how they talk, what they use
          today, what would make them switch now, and the smallest build that proves you understand the problem.
        </p>
      </Card>
    </div>
  </>
  )
}
