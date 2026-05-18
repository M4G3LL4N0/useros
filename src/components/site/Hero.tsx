import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { DashboardPreview } from "@/components/product/DashboardPreview";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl" />
        <div className="absolute right-[-120px] top-0 h-96 w-96 rounded-full bg-indigo-500/15 blur-3xl" />
        <div className="absolute bottom-[-80px] left-1/3 h-64 w-64 rounded-full bg-teal-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:py-20">
        <div>
          <Badge tone="sky">Founder command center</Badge>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.35rem] lg:leading-[1.05]">
            Build what users{" "}
            <span className="text-gradient-os">actually</span> want.
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-slate-300">
            UserOS turns startup ideas, interviews, reviews, Reddit posts, support tickets, and messy founder
            notes into a clear customer intelligence report, MVP roadmap, and product strategy.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/demo">Map your first 100 users</Button>
            <Button href="/demo" variant="secondary">
              Try the demo
            </Button>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Paste the idea. Get the user truth before you build.{" "}
            <Link href="/#framework" className="text-slate-300 underline-offset-4 hover:underline">
              See the framework
            </Link>
            .
          </p>
        </div>

        <DashboardPreview />
      </div>
    </section>
  );
}
