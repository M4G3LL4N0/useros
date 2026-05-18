import type { Metadata } from "next";
import { SubpageVisual } from "@/components/SubpageVisual";
import { Section } from "@/components/site/Section";
import { Pricing, PricingFooterLink } from "@/components/site/Pricing";
import { CTA } from "@/components/site/CTA";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "UserOS plans: Free, Pro at $29/month, Studio at $99/month, and Enterprise for teams, accelerators, and venture studios.",
};

export default function PricingPage() {
  return (
    <>
    <SubpageVisual variant="pricing" />
      <>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Section
          className="px-0 py-0"
          eyebrow="Pricing"
          title="Pick the depth of truth you need this week."
          description="Free is for one deep map. Pro is for founders on a weekly rhythm. Studio is for parallel bets. Enterprise is for orgs that need shared rubrics and governance."
          align="center"
        />
        <div className="mt-12">
          <Pricing />
          <PricingFooterLink />
        </div>
      </div>
      <CTA
        title="Ready to stop building on vibes?"
        body="Start with the demo engine. When the map becomes your weekly source of truth, Pro is the natural next step."
        primaryHref="/demo"
        primaryLabel="Try the demo"
        secondaryHref="/contact"
        secondaryLabel="Talk with us"
      />
    </>
  </>
  )
}
