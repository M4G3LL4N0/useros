import Link from "next/link";

const cols = [
  {
    title: "Product",
    links: [
      { href: "/demo", label: "User Intelligence Engine" },
      { href: "/dashboard", label: "Dashboard" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#02050c]/90">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="text-lg font-semibold text-white">UserOS</div>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400">
              The customer understanding layer for founders who would rather be wrong in a doc than wrong in
              production.
            </p>
            <p className="mt-4 text-xs text-slate-500">
              Built for deep work: interviews, reviews, tickets, notes, and messy reality—turned into a build
              order.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{c.title}</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {c.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="transition hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-white/5 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} UserOS. All rights reserved.</span>
          <span className="text-slate-600">Local MVP. No data leaves your session in the demo engine.</span>
        </div>
      </div>
    </footer>
  );
}
