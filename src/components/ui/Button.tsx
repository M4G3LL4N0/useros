import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  type = "button",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold tracking-tight transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/80";

  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-sky-400 via-indigo-400 to-teal-300 text-slate-950 shadow-[0_18px_60px_rgba(56,189,248,0.25)] hover:brightness-110"
      : variant === "secondary"
        ? "border border-white/15 bg-white/5 text-white hover:border-white/25 hover:bg-white/10"
        : "text-slate-200 hover:text-white";

  const classes = cn(base, styles, className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
