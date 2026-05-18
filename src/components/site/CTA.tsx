import { Button } from "@/components/ui/Button";

type CTAProps = {
  title: string;
  body: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CTA({
  title,
  body,
  primaryHref = "/demo",
  primaryLabel = "Open the engine",
  secondaryHref = "/contact",
  secondaryLabel = "Talk with us",
}: CTAProps) {
  return (
    <section className="border-y border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
          <p className="mt-3 text-base leading-relaxed text-slate-400 sm:text-lg">{body}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={primaryHref}>{primaryLabel}</Button>
          <Button href={secondaryHref} variant="secondary">
            {secondaryLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
