"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <Card className="p-6 sm:p-8" glow="violet">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="text-sm font-medium text-slate-200" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-slate-100 outline-none placeholder:text-slate-600 focus:border-indigo-400/40"
            placeholder="Alex Founder"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-200" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-slate-100 outline-none placeholder:text-slate-600 focus:border-indigo-400/40"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-200" htmlFor="role">
            Role
          </label>
          <input
            id="role"
            name="role"
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-slate-100 outline-none placeholder:text-slate-600 focus:border-indigo-400/40"
            placeholder="Founder, PM, partner, operator…"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-200" htmlFor="message">
            What are you trying to figure out?
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-slate-100 outline-none placeholder:text-slate-600 focus:border-indigo-400/40"
            placeholder="Tell us about the user, the market, and what evidence you already have."
          />
        </div>
        <Button type="submit" variant="primary" className="w-full sm:w-auto">
          Send message
        </Button>
        {submitted ? (
          <p className="text-sm text-teal-200">
            Received locally. In production, this would route to your inbox or CRM.
          </p>
        ) : null}
      </form>
    </Card>
  );
}
