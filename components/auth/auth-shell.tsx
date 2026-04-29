import Link from "next/link";
import type { ReactNode } from "react";

import { LogoMark } from "@/components/marketing/logo-mark";

type AuthShellProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
  footerPrompt: string;
  footerLinkText: string;
  footerLinkHref: string;
};

const spotlightBullets = [
  "Organization-level data isolation",
  "Role-based access control (Owner/Admin/Member/Viewer)",
  "Fast, secure workspace operations",
];

export function AuthShell({
  title,
  subtitle,
  children,
  footerPrompt,
  footerLinkText,
  footerLinkHref,
}: AuthShellProps) {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] text-slate-950">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_15%_15%,rgba(56,189,248,0.16),transparent_24%),radial-gradient(circle_at_85%_10%,rgba(20,184,166,0.2),transparent_24%),radial-gradient(circle_at_50%_0%,rgba(148,163,184,0.1),transparent_38%)]" />

      <div className="relative mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 px-4 py-6 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:py-8">
        <section className="hidden overflow-hidden rounded-[2rem] border border-white/80 bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.28),transparent_38%),linear-gradient(140deg,#0f172a,#0f2f3a_58%,#0f766e)] p-8 text-white shadow-[0_40px_120px_-44px_rgba(15,23,42,0.72)] lg:flex lg:flex-col">
          <div className="hero-enter">
            <Link href="/" className="inline-flex items-center gap-3">
              <LogoMark className="h-10 w-10" />
              <div>
                <div className="text-base font-semibold tracking-[-0.03em]">SaaSify</div>
                <div className="text-xs uppercase tracking-[0.2em] text-teal-100/80">Multi-tenant OS</div>
              </div>
            </Link>

            <h2 className="mt-12 max-w-md text-4xl font-semibold tracking-[-0.05em]">
              Build and scale your organization from one secure workspace.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-slate-200">
              Designed for startups and teams that need products, analytics, and team management in one premium dashboard experience.
            </p>
          </div>

          <div className="mt-10 space-y-3">
            {spotlightBullets.map((item) => (
              <div
                key={item}
                className="hero-enter flex items-center gap-3 rounded-2xl border border-white/12 bg-white/8 px-4 py-3 backdrop-blur"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/16 text-white">
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm text-slate-100">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto grid grid-cols-2 gap-4 pt-8">
            <div className="hero-float rounded-2xl border border-white/12 bg-white/10 p-4 backdrop-blur">
              <div className="text-xs uppercase tracking-[0.22em] text-slate-200/80">Active orgs</div>
              <div className="mt-2 text-2xl font-semibold tracking-[-0.04em]">3K+</div>
            </div>
            <div className="hero-float-delayed rounded-2xl border border-white/12 bg-white/10 p-4 backdrop-blur">
              <div className="text-xs uppercase tracking-[0.22em] text-slate-200/80">Products</div>
              <div className="mt-2 text-2xl font-semibold tracking-[-0.04em]">180K</div>
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center py-6 sm:py-10 lg:py-0">
          <div className="auth-form-enter w-full max-w-lg rounded-[2rem] border border-white/80 bg-white/88 p-6 shadow-[0_40px_120px_-56px_rgba(15,23,42,0.4)] backdrop-blur-xl sm:p-8">
            <div className="mb-8 text-center sm:text-left">
              <Link href="/" className="inline-flex items-center gap-3 lg:hidden">
                <LogoMark className="h-9 w-9" />
                <span className="text-sm font-semibold tracking-[-0.02em] text-slate-900">SaaSify</span>
              </Link>
              <h1 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">{title}</h1>
              <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">{subtitle}</p>
            </div>

            {children}

            <p className="mt-7 text-center text-sm text-slate-600 sm:text-left">
              {footerPrompt}{" "}
              <Link
                href={footerLinkHref}
                className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 transition hover:decoration-slate-600"
              >
                {footerLinkText}
              </Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}