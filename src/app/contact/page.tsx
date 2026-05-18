import type { Metadata } from "next";
import { SubpageVisual } from "@/components/SubpageVisual";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/site/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact UserOS for studios, accelerators, and product teams exploring deeper workflows.",
};

export default function ContactPage() {
  return (
    <>
    <SubpageVisual variant="contact" />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Contact</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Talk with UserOS</h1>
        <p className="mt-6 text-lg leading-relaxed text-slate-300">
          Studios, accelerators, and product teams: if you want a deeper workflow than the public demo, send a note.
          This form is local-only for the MVP—nothing is transmitted yet.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <ContactForm />

        <div className="space-y-4">
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-white">What to include</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>Who you believe the first user is.</li>
              <li>What proof you already have—and what you are missing.</li>
              <li>Whether you need founder workflows, team mode, or procurement.</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-white">Prefer to explore first?</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Run the User Intelligence Engine on the demo page. It is the fastest way to see how UserOS thinks.
            </p>
            <div className="mt-4">
              <Button href="/demo" variant="secondary">
                Open demo
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </>
  )
}
