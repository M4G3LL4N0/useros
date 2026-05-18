import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { pricingTiers } from "@/lib/data";
import { cn } from "@/lib/utils";

type PricingProps = {
  compact?: boolean;
};

export function Pricing({ compact }: PricingProps) {
  const tiers = compact ? pricingTiers.slice(0, 3) : pricingTiers;

  return (
    <div className="grid gap-6 lg:grid-cols-4">
      {tiers.map((tier) => (
        <Card
          key={tier.name}
          glow={tier.highlighted ? "violet" : "none"}
          className={cn(
            "flex flex-col",
            tier.highlighted && "border-indigo-400/30 bg-gradient-to-b from-indigo-500/10 to-transparent",
          )}
        >
          <div className="flex items-baseline justify-between gap-3">
            <div>
              <div className="text-sm font-semibold text-white">{tier.name}</div>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-3xl font-semibold text-white">{tier.price}</span>
                {tier.cadence ? <span className="text-sm text-slate-400">{tier.cadence}</span> : null}
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">{tier.description}</p>
          <ul className="mt-6 space-y-2 text-sm text-slate-200">
            {tier.features.map((f) => (
              <li key={f} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-r from-sky-400 to-teal-300" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button
              href={tier.name === "Enterprise" ? "/contact" : "/demo"}
              variant={tier.highlighted ? "primary" : "secondary"}
              className="w-full"
            >
              {tier.cta}
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}

export function PricingFooterLink() {
  return (
    <p className="mt-8 text-center text-sm text-slate-500">
      Need procurement, security review, or a pilot with your team?{" "}
      <Link href="/contact" className="text-slate-200 underline-offset-4 hover:underline">
        Contact
      </Link>
      .
    </p>
  );
}
