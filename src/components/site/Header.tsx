"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#product", label: "Product" },
  { href: "/demo", label: "Demo" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/dashboard", label: "Dashboard" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#030711]/80 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-sky-500/30 via-indigo-500/25 to-teal-400/20 shadow-[0_0_40px_rgba(56,189,248,0.25)]">
              <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-sky-200 to-teal-200" />
            </span>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight text-white">UserOS</div>
              <div className="text-[11px] text-slate-400">Customer intelligence</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="transition hover:text-white">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button href="/demo" variant="secondary" className="hidden px-4 py-2 text-xs lg:inline-flex">
              Try the demo
            </Button>
            <Button href="/demo" variant="primary" className="hidden px-4 py-2 text-sm md:inline-flex">
              Map users
            </Button>
            <Button href="/demo" variant="primary" className="inline-flex px-3 py-2 text-xs md:hidden">
              Demo
            </Button>
            <button
              type="button"
              className="inline-flex h-10 min-w-[2.75rem] items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 text-xs font-semibold text-slate-200 md:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        <div
          id="mobile-nav"
          className={cn(
            "md:hidden",
            open ? "mt-4 border-t border-white/5 pt-4" : "hidden",
          )}
        >
          <div className="flex flex-col gap-3 text-sm text-slate-200">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-lg px-2 py-2 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Button href="/demo" variant="primary" className="mt-2 w-full">
              Map your first 100 users
            </Button>
            <p className="px-2 pt-1 text-[11px] leading-relaxed text-slate-500">
              Demo segments and scores use sample data — not live CRM records or revenue guarantees.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
