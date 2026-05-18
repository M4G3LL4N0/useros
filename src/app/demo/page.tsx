import type { Metadata } from "next";
import { SubpageVisual } from "@/components/SubpageVisual";
import { UserIntelligenceEngine } from "@/components/product/UserIntelligenceEngine";
import { Section } from "@/components/site/Section";

export const metadata: Metadata = {
  title: "Demo — User Intelligence Engine",
  description:
    "Run the local User Intelligence Engine: inputs become scores, ICP narrative, triggers, MVP guidance, interview questions, and landing copy.",
};

export default function DemoPage() {
  return (
    <>
    <SubpageVisual variant="demo" />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <Section
        align="center"
        eyebrow="Interactive MVP"
        title="User Intelligence Engine"
        description="Generate a realistic customer intelligence report with local mock logic. No API keys. No cold start tax. Just founder-grade structure from what you already know."
        className="px-0 py-0"
      />
      <div className="mt-10">
        <UserIntelligenceEngine />
      </div>
    </div>
  </>
  )
}
