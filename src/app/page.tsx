import Link from "next/link";
import { TrustStrip } from "@/components/TrustStrip";
import { MarketingGraphicsStack } from "@/components/MarketingGraphicsStack";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { CTA } from "@/components/site/CTA";
import { Pricing, PricingFooterLink } from "@/components/site/Pricing";
import { UserLayerGrid } from "@/components/product/UserLayerGrid";
import { DashboardPreview } from "@/components/product/DashboardPreview";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { faqItems, useCases } from "@/lib/data";

export default function HomePage() {
  return (
    <>        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <TrustStrip />
        </div>
        <MarketingGraphicsStack />

      <Hero />

      <Section
        eyebrow="The real bottleneck"
        title="Most startups do not fail because they cannot build."
        description="They fail because they build the wrong thing for the wrong user with the wrong message. Shipping fast only helps if you are aimed at a truth that survives contact with reality."
      />

      <Section
        eyebrow="Solution"
        title="UserOS helps founders understand the user before they build the product."
        description="You get a living map: segment clarity, emotional truth, triggers, alternative risk, MVP wedge, interview questions, and copy that sounds like your user—not a generic persona PDF."
        className="border-y border-white/5 bg-white/[0.02]"
      />

      <Section
        eyebrow="Why now"
        title="Code is getting cheaper. Customer understanding is getting more valuable."
        description="AI removes the excuse that discovery is too slow. The founders who win will treat customer truth as infrastructure—not a slide in a pitch deck."
        className="border-y border-white/5 bg-white/[0.02]"
      />

      <Section
        id="framework"
        eyebrow="The User Understanding Framework"
        title="Ten layers. One map. A build order you can defend."
        description="UserOS compresses months of fuzzy thinking into a founder-grade brief: who hurts, what they say, what they do, what they pay, and what to validate next."
      >
        <UserLayerGrid />
      </Section>

      <Section
        id="product"
        eyebrow="Product demo preview"
        title="Before you open Cursor, understand who you are building for."
        description="This is the same intelligence surface you get in the full demo: scores, narrative, triggers, and the next action that keeps you honest."
      >
        <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-white">Paste the messy inputs</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Ideas, interview snippets, competitor reviews, tickets, Reddit threads—anything that captures how
                people talk when they are not performing for a pitch.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                <li>Signals become scores you can track over time.</li>
                <li>Scores become a roadmap you can ship against.</li>
                <li>Roadmaps become copy that sounds like your user.</li>
              </ul>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href="/demo">Open the interactive demo</Button>
                <Button href="/dashboard" variant="secondary">
                  View dashboard mock
                </Button>
              </div>
            </Card>
            <p className="text-xs text-slate-500">
              Your first MVP should come from customer evidence, not founder excitement.
            </p>
          </div>
          <DashboardPreview />
        </div>
      </Section>

      <Section
        eyebrow="Founder workflow"
        title="A tight loop: map, talk, ship, measure."
        description="UserOS is built to sit at the center of how serious founders operate when the world is noisy and the calendar is full."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Capture signals",
              body: "Drop in notes, transcripts, reviews, and half-baked hypotheses. The engine looks for pain, language, and risk.",
            },
            {
              title: "Generate a map",
              body: "Turn scattered inputs into a segment story, emotional truth, triggers, and alternative risk.",
            },
            {
              title: "Run better interviews",
              body: "Walk in with questions engineered to falsify your riskiest assumptions—not to collect compliments.",
            },
            {
              title: "Ship a wedge MVP",
              body: "Leave with a prioritized feature list tied to a single measurable outcome in the first two weeks.",
            },
          ].map((s) => (
            <Card key={s.title} className="p-6">
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Use cases"
        title="Built for builders who cannot afford to guess."
        description="If your job is to turn ambiguity into a decision, UserOS is the layer that keeps the user in the room."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((u) => (
            <Card key={u.title} className="p-5">
              <h3 className="text-base font-semibold text-white">{u.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{u.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Pricing preview"
        title="Start free. Upgrade when the map becomes your operating system."
        description="No surprise limits on learning. Pay when UserOS becomes a weekly ritual, not a one-off novelty."
      >
        <Pricing compact />
        <div className="mt-8 flex justify-center">
          <Button href="/pricing" variant="secondary">
            Compare plans
          </Button>
        </div>
        <PricingFooterLink />
      </Section>

      <Section
        eyebrow="FAQ"
        title="Straight answers."
        description="If something here feels fuzzy, we have not done our job yet."
        align="center"
      >
        <div className="mx-auto max-w-3xl space-y-4 text-left">
          {faqItems.map((item) => (
            <Card key={item.q} className="p-5">
              <h3 className="text-base font-semibold text-white">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.a}</p>
            </Card>
          ))}
        </div>
      </Section>

      <CTA
        title="UserOS helps founders understand the user before they build the product."
        body="Fall in love with the user before you fall in love with the product. Map the first 100 with evidence, language, and a wedge you can ship."
        primaryHref="/demo"
        primaryLabel="Map your first 100 users"
        secondaryHref="/contact"
        secondaryLabel="Contact"
      />

      <div className="mx-auto max-w-6xl px-4 pb-10 text-center text-xs text-slate-600 sm:px-6 lg:px-8">
        <Link href="/about" className="hover:text-slate-400">
          Read our mission
        </Link>
        <span className="mx-2 text-slate-700">·</span>
        <Link href="/pricing" className="hover:text-slate-400">
          View pricing
        </Link>
      </div>
    </>
  );
}
