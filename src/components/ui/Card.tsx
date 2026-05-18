import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
  glow?: "blue" | "violet" | "teal" | "none";
};

const glowMap = {
  blue: "shadow-[0_0_0_1px_rgba(56,189,248,0.12),0_22px_70px_rgba(37,99,235,0.16)]",
  violet: "shadow-[0_0_0_1px_rgba(167,139,250,0.12),0_22px_70px_rgba(109,40,217,0.18)]",
  teal: "shadow-[0_0_0_1px_rgba(45,212,191,0.12),0_22px_70px_rgba(15,118,110,0.16)]",
  none: "",
};

export function Card({ children, className, glow = "none" }: CardProps) {
  return (
    <div className={cn("premium-card rounded-2xl p-6", glowMap[glow], className)}>{children}</div>
  );
}
