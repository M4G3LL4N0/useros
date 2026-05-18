import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  align?: "left" | "center";
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  align = "left",
}: SectionProps) {
  return (
    <section id={id} className={cn("mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20", className)}>
      <div className={cn(align === "center" && "mx-auto max-w-3xl text-center")}>
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{eyebrow}</p>
        ) : null}
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-pretty text-base leading-relaxed text-slate-400 sm:text-lg">{description}</p>
        ) : null}
      </div>
      {children ? <div className={cn("mt-10", align === "center" && "mx-auto max-w-4xl")}>{children}</div> : null}
    </section>
  );
}
