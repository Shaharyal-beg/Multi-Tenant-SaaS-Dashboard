import Link from "next/link";
import type { ReactNode } from "react";

import { FeatureCard } from "@/components/marketing/feature-card";
import { LogoMark } from "@/components/marketing/logo-mark";
import { MobileNav } from "@/components/marketing/mobile-nav";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#security", label: "Security" },
  { href: "#how-it-works", label: "How it Works" },
];

const featureCards = [
  {
    title: "Multi-tenant",
    description:
      "Each organization has its own workspace with fully isolated data. No data mixing between companies.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Role-based access",
    description:
      "Control who can do what with Owner, Admin, Member, and Viewer roles. Enterprise-grade security.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Advanced analytics",
    description:
      "Track revenue, user activity, and product performance. Make data-driven decisions with real-time insights.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 20V10m5 10V4m5 16v-7" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 20h16" />
      </svg>
    ),
  },
];

const workflowCards = [
  {
    eyebrow: "Product Management",
    title: "Manage your inventory with ease",
    points: [
      "Add, edit, and delete products",
      "Search & filter with advanced options",
      "Track stock and status in real-time",
      "Upload and manage product images",
    ],
    theme: "teal" as const,
  },
  {
    eyebrow: "Team Collaboration",
    title: "Work together seamlessly",
    points: [
      "Invite team members via email",
      "Assign roles: Owner, Admin, Member, Viewer",
      "Manage team permissions",
      "Remove or update user access",
    ],
    theme: "blue" as const,
  },
  {
    eyebrow: "Analytics Dashboard",
    title: "Understand your performance",
    points: [
      "Revenue insights and tracking",
      "User activity monitoring",
      "Product performance stats",
      "Growth metrics and KPIs",
    ],
    theme: "violet" as const,
    note: "Available for Admin & Owner only",
  },
];

const roleCards = [
  {
    title: "Owner",
    description: "Full control over everything",
    color: "from-rose-500 to-orange-400",
    points: ["Manage billing", "Delete organization", "All admin permissions"],
  },
  {
    title: "Admin",
    description: "Manage business data",
    color: "from-amber-400 to-yellow-500",
    points: ["Manage products & users", "View analytics", "Limited settings access"],
  },
  {
    title: "Member",
    description: "Create and manage data",
    color: "from-sky-500 to-indigo-500",
    points: ["Create products", "Manage assigned data", "Limited admin access"],
  },
  {
    title: "Viewer",
    description: "Read-only access",
    color: "from-slate-400 to-slate-500",
    points: ["View dashboard", "View products", "No edit permissions"],
  },
];

const steps = [
  { step: "01", title: "Sign up & create account", description: "Get started with your free account in seconds." },
  { step: "02", title: "Create organization", description: "Set up your workspace and become the owner." },
  { step: "03", title: "Invite your team", description: "Add team members and start collaborating." },
];

const securityPillars = [
  {
    title: "Secure authentication",
    description: "Protected routes, session-based login flows, and guarded organization boundaries.",
  },
  {
    title: "Data isolation",
    description: "Each company operates in a fully isolated workspace with no cross-tenant data leakage.",
  },
  {
    title: "Scalable performance",
    description: "SSR-friendly architecture, efficient fetching patterns, and UI tuned for fast load times.",
  },
];

const footerGroups = [
  { title: "Product", links: ["Features", "Security", "Analytics"] },
  { title: "Company", links: ["About", "Customers", "Careers"] },
  { title: "Resources", links: ["Documentation", "Guides", "API"] },
];

function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/60 bg-white/75 px-4 py-3 shadow-[0_18px_40px_-26px_rgba(15,23,42,0.35)] backdrop-blur">
      <div className="text-xs uppercase tracking-[0.22em] text-slate-500">{label}</div>
      <div className="mt-1 text-xl font-semibold tracking-[-0.03em] text-slate-950">{value}</div>
    </div>
  );
}

function FeatureShowcase({ theme }: { theme: "teal" | "blue" | "violet" }) {
  const themeMap = {
    teal: { shell: "from-teal-100 via-white to-cyan-100", line: "from-teal-500 to-cyan-500", chip: "bg-teal-500/12 text-teal-700" },
    blue: { shell: "from-sky-100 via-white to-indigo-100", line: "from-sky-500 to-indigo-500", chip: "bg-sky-500/12 text-sky-700" },
    violet: { shell: "from-violet-100 via-white to-fuchsia-100", line: "from-violet-500 to-fuchsia-500", chip: "bg-violet-500/12 text-violet-700" },
  } as const;

  const selectedTheme = themeMap[theme];

  return (
    <div className={`relative overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br ${selectedTheme.shell} p-6 shadow-[0_40px_120px_-48px_rgba(15,23,42,0.4)]`}>
      <div className="absolute inset-x-8 top-0 h-px bg-white/70" />
      <div className="absolute -right-12 top-8 h-24 w-24 rounded-full bg-white/70 blur-3xl" />
      <div className="rounded-[1.5rem] border border-white/80 bg-white/90 p-5 shadow-[0_24px_70px_-34px_rgba(15,23,42,0.45)] backdrop-blur">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Workspace view</div>
            <div className="mt-2 text-lg font-semibold tracking-[-0.03em] text-slate-950">Live operations snapshot</div>
          </div>
          <div className={`rounded-full px-3 py-1 text-xs font-semibold ${selectedTheme.chip}`}>Real-time</div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.25rem] border border-slate-200/80 bg-slate-950 p-4 text-white shadow-[0_16px_55px_-34px_rgba(15,23,42,0.95)]">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Performance</span>
              <span>+18.4%</span>
            </div>
            <div className="mt-4 grid h-28 grid-cols-7 items-end gap-2">
              {[35, 54, 48, 66, 58, 82, 72].map((height) => (
                <div key={height} className={`hero-bar rounded-t-full bg-gradient-to-t ${selectedTheme.line}`} style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <StatPill label="Products" value="1,234" />
            <StatPill label="Users" value="3,456" />
            <StatPill label="Orders" value="892" />
          </div>
        </div>
      </div>
    </div>
  );
}

function RoleIcon({ title }: { title: string }) {
  const icons: Record<string, ReactNode> = {
    Owner: <path d="M12 17.75L6.122 20.84l1.123-6.547L2.49 9.66l6.574-.954L12 2.75l2.936 5.956 6.574.954-4.756 4.633 1.123 6.547z" strokeLinecap="round" strokeLinejoin="round" />,
    Admin: <path d="M12 3l7 4v5c0 4.25-2.88 8.17-7 9-4.12-.83-7-4.75-7-9V7l7-4z" strokeLinecap="round" strokeLinejoin="round" />,
    Member: <><path d="M12 12a4 4 0 100-8 4 4 0 000 8z" strokeLinecap="round" strokeLinejoin="round" /><path d="M4.5 20.5a7.5 7.5 0 0115 0" strokeLinecap="round" strokeLinejoin="round" /></>,
    Viewer: <><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="3" /></>,
  };

  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      {icons[title]}
    </svg>
  );
}

function MockStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.25rem] border border-slate-800 bg-white/4 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
      <div className="text-xs uppercase tracking-[0.22em] text-slate-400">{label}</div>
      <div className="mt-1 text-xl font-semibold tracking-[-0.03em] text-white">{value}</div>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="hero-enter relative mx-auto w-full max-w-[38rem]">
      <div className="pointer-events-none absolute -left-8 top-20 hidden h-28 w-28 rounded-full bg-cyan-300/30 blur-3xl sm:block" />
      <div className="pointer-events-none absolute -right-8 top-10 hidden h-36 w-36 rounded-full bg-teal-400/30 blur-3xl sm:block" />
      <div className="absolute -right-4 top-8 hidden rounded-[1.5rem] border border-white/70 bg-white/82 p-4 shadow-[0_26px_80px_-34px_rgba(15,23,42,0.4)] backdrop-blur md:block hero-float-delayed">
        <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Active users</div>
        <div className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-slate-950">3.4K</div>
        <div className="mt-2 inline-flex rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">+23% this month</div>
      </div>
      <div className="absolute -bottom-5 left-0 hidden rounded-[1.5rem] border border-slate-200/80 bg-slate-950 px-5 py-4 text-white shadow-[0_30px_80px_-30px_rgba(15,23,42,0.88)] md:block hero-float">
        <div className="text-xs uppercase tracking-[0.22em] text-slate-400">Team activity</div>
        <div className="mt-3 flex items-center gap-3">
          <div className="flex -space-x-2">
            {["JD", "AK", "LM"].map((initials) => (
              <div key={initials} className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 bg-slate-800 text-xs font-semibold text-white">{initials}</div>
            ))}
          </div>
          <div className="text-sm text-slate-300">12 updates shipped today</div>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.34),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.96),rgba(255,255,255,0.78))] p-4 shadow-[0_40px_120px_-44px_rgba(15,23,42,0.5)] backdrop-blur-xl sm:p-6">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
        <div className="rounded-[1.6rem] border border-slate-200/70 bg-slate-950 p-5 shadow-[0_35px_100px_-48px_rgba(15,23,42,0.9)]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-slate-400">Workspace analytics</div>
              <div className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">$2,394,821</div>
            </div>
            <div className="rounded-full bg-emerald-400/10 px-3 py-1.5 text-sm font-semibold text-emerald-300">+12.5%</div>
          </div>
          <div className="mt-5 grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="rounded-[1.5rem] border border-slate-800 bg-white/4 p-4">
              <div className="flex items-center justify-between text-sm text-slate-400">
                <span>Revenue velocity</span>
                <span>Last 7 days</span>
              </div>
              <div className="mt-6 grid h-40 grid-cols-7 items-end gap-2">
                {[38, 62, 51, 76, 58, 84, 68].map((height, index) => (
                  <div key={height} className="hero-bar rounded-t-[1rem] bg-gradient-to-t from-teal-500 via-cyan-400 to-sky-300" style={{ height: `${height}%`, animationDelay: `${index * 90}ms` }} />
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <MockStat label="Products" value="1,234" />
              <MockStat label="Users" value="3,456" />
              <MockStat label="Orders" value="892" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_18%,#f8fafc_100%)] text-slate-950">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[44rem] bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.18),transparent_45%),radial-gradient(circle_at_18%_18%,rgba(59,130,246,0.12),transparent_22%),radial-gradient(circle_at_82%_12%,rgba(20,184,166,0.16),transparent_22%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,white,transparent_82%)] opacity-40" />
      <header className="sticky top-0 z-50 border-b border-white/60 bg-white/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/65">
        <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3 transition hover:opacity-90">
            <LogoMark className="h-10 w-10" />
            <div>
              <div className="text-base font-semibold tracking-[-0.03em] text-slate-950">SaaSify</div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Multi-tenant OS</div>
            </div>
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-slate-600 transition hover:text-slate-950">{link.label}</a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <Link href="/login" className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-white hover:text-slate-950">Log in</Link>
            <Link href="/signup" className="inline-flex items-center rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_20px_50px_-24px_rgba(15,23,42,0.95)] transition duration-300 hover:-translate-y-0.5 hover:bg-slate-900">Get Started</Link>
          </div>
          <MobileNav links={navLinks} />
        </div>
      </header>
      <main>
        <section className="relative mx-auto max-w-7xl px-4 pb-24 pt-14 sm:px-6 lg:px-8 lg:pb-32 lg:pt-20">
          <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-10">
            <div className="max-w-2xl">
              <Reveal variant="fade">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-teal-800 shadow-[0_18px_60px_-30px_rgba(13,148,136,0.45)] backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-teal-500 shadow-[0_0_0_6px_rgba(20,184,166,0.14)]" />
                  Multi-tenant SaaS Platform
                </div>
              </Reveal>
              <Reveal className="mt-7" delay={80}>
                <h1 className="max-w-4xl text-balance text-5xl font-semibold tracking-[-0.07em] text-slate-950 sm:text-6xl lg:text-7xl">Manage your business all in one place.</h1>
              </Reveal>
              <Reveal className="mt-6" delay={160}>
                <p className="max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">A powerful admin dashboard built for modern teams. Manage products, collaborate with your team, and track analytics in one secure platform.</p>
              </Reveal>
              <Reveal className="mt-10 flex flex-col gap-4 sm:flex-row" delay={240}>
                <Link href="/signup" className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_28px_65px_-30px_rgba(15,23,42,0.95)] transition duration-300 hover:-translate-y-0.5 hover:bg-slate-900">Start Free Trial</Link>
                <button type="button" className="inline-flex items-center justify-center rounded-full border border-slate-300/80 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-[0_18px_60px_-34px_rgba(15,23,42,0.35)] backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:text-slate-950">Watch Demo</button>
              </Reveal>
              <Reveal className="mt-10 grid gap-3 sm:grid-cols-3" delay={320}>
                <StatPill label="No credit card" value="Required" />
                <StatPill label="Trial period" value="14 days" />
                <StatPill label="Built for" value="Teams" />
              </Reveal>
            </div>
            <Reveal variant="left" delay={140}>
              <DashboardMockup />
            </Reveal>
          </div>
        </section>
        <section id="features" className="relative py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <SectionHeading eyebrow="Platform overview" title="Experience that grows with your scale" description="Everything you need to run a modern business with a product surface that feels fast, clear, and trustworthy." />
            </Reveal>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {featureCards.map((feature, index) => (
                <Reveal key={feature.title} delay={index * 110}>
                  <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <section className="relative py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.86),rgba(241,245,249,0.86))] p-8 shadow-[0_40px_120px_-50px_rgba(15,23,42,0.45)] backdrop-blur xl:p-12">
              <Reveal>
                <SectionHeading eyebrow="Social proof" title="Why teams prefer SaaSify" description="Built for companies that want clear operational visibility without the complexity of stitching multiple internal tools together." />
              </Reveal>
              <div className="mt-14 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                <Reveal>
                  <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                    {[["3k+", "Active organizations"], ["180K", "Products managed"], ["10+", "Countries worldwide"]].map(([value, label], index) => (
                      <div key={label} className="rounded-[1.7rem] border border-white/80 bg-white/85 p-6 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.35)]" style={{ animationDelay: `${index * 90}ms` }}>
                        <div className="text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">{value}</div>
                        <div className="mt-2 text-sm text-slate-600">{label}</div>
                      </div>
                    ))}
                  </div>
                </Reveal>
                <Reveal delay={100}>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="group rounded-[1.8rem] border border-slate-200/80 bg-slate-950 p-7 text-white shadow-[0_30px_100px_-42px_rgba(15,23,42,0.95)] transition duration-300 hover:-translate-y-1.5">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/10">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      </div>
                      <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em]">No setup volatility</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">Get started in minutes. No complex configuration or technical setup required.</p>
                    </div>
                    <div className="group rounded-[1.8rem] border border-white/80 bg-white/88 p-7 shadow-[0_30px_100px_-42px_rgba(15,23,42,0.3)] backdrop-blur transition duration-300 hover:-translate-y-1.5">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/12 text-teal-700 ring-1 ring-teal-500/10">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-slate-950">Built for scale</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">From startups to enterprises. Our platform scales with your business growth.</p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
        <section className="relative py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <SectionHeading eyebrow="Core features" title="Everything you need to manage your business" description="The existing feature set stays intact, but the presentation now mirrors how a polished SaaS product explains capability and value." />
            </Reveal>
            <div className="mt-16 space-y-16">
              {workflowCards.map((workflow, index) => {
                const isReversed = index % 2 === 1;
                return (
                  <div key={workflow.title} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                    <Reveal className={isReversed ? "lg:order-2" : ""}>
                      <div className="max-w-xl">
                        <div className="inline-flex rounded-full border border-slate-200/80 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-700 shadow-[0_18px_50px_-32px_rgba(15,23,42,0.35)] backdrop-blur">{workflow.eyebrow}</div>
                        <h3 className="mt-6 text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">{workflow.title}</h3>
                        <ul className="mt-8 space-y-4">
                          {workflow.points.map((point) => (
                            <li key={point} className="flex items-start gap-3 text-slate-600">
                              <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-slate-950 text-white shadow-[0_12px_30px_-18px_rgba(15,23,42,0.8)]"><svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 13l4 4L19 7" /></svg></span>
                              <span className="text-base leading-7">{point}</span>
                            </li>
                          ))}
                        </ul>
                        {workflow.note ? <div className="mt-6 inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700">{workflow.note}</div> : null}
                      </div>
                    </Reveal>
                    <Reveal className={isReversed ? "lg:order-1" : ""} delay={120} variant={isReversed ? "right" : "left"}>
                      <FeatureShowcase theme={workflow.theme} />
                    </Reveal>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section id="security" className="relative py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200/70 bg-slate-950 px-6 py-10 text-white shadow-[0_45px_120px_-52px_rgba(15,23,42,0.95)] sm:px-10 lg:px-12">
              <Reveal>
                <SectionHeading eyebrow="Security first architecture" title="Designed for trust, control, and performance" description="Secure authentication system, role-based authorization, data isolation per organization, input validation, and protected API access are built into the product story." align="left" />
              </Reveal>
              <div className="mt-12 grid gap-5 lg:grid-cols-3">
                {securityPillars.map((pillar, index) => (
                  <Reveal key={pillar.title} delay={index * 100}>
                    <div className="rounded-[1.6rem] border border-white/10 bg-white/6 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur">
                      <div className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">{pillar.title}</div>
                      <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{pillar.description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="relative py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <SectionHeading eyebrow="RBAC" title="Role-Based Access Control" description="Control who can do what inside your organization with clear permissions and a model that scales from a small team to a large workspace." />
            </Reveal>
            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {roleCards.map((role, index) => (
                <Reveal key={role.title} delay={index * 100}>
                  <div className="group rounded-[1.8rem] border border-slate-200/70 bg-white/90 p-6 shadow-[0_28px_80px_-44px_rgba(15,23,42,0.35)] backdrop-blur transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_34px_90px_-44px_rgba(15,23,42,0.45)]">
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${role.color} text-white shadow-[0_16px_40px_-22px_rgba(15,23,42,0.55)]`}><RoleIcon title={role.title} /></div>
                    <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-slate-950">{role.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{role.description}</p>
                    <ul className="mt-6 space-y-3 text-sm text-slate-600">
                      {role.points.map((point) => (
                        <li key={point} className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-slate-950" /><span>{point}</span></li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <section id="how-it-works" className="relative py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <SectionHeading eyebrow="How it works" title="Get started in minutes" description="From first signup to a fully collaborative workspace, the setup path is intentionally simple and conversion-friendly." />
            </Reveal>
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {steps.map((item, index) => (
                <Reveal key={item.step} delay={index * 100}>
                  <div className="group relative overflow-hidden rounded-[1.8rem] border border-slate-200/70 bg-white/88 p-8 shadow-[0_24px_80px_-42px_rgba(15,23,42,0.32)] backdrop-blur transition duration-300 hover:-translate-y-1.5">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-0 transition group-hover:opacity-100" />
                    <div className="text-6xl font-semibold tracking-[-0.06em] text-slate-200">{item.step}</div>
                    <h3 className="mt-6 text-xl font-semibold tracking-[-0.03em] text-slate-950">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <section className="relative py-24 sm:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.32),transparent_34%),linear-gradient(135deg,#0f172a,#0b1120_45%,#0f766e)] px-6 py-12 text-center text-white shadow-[0_45px_130px_-58px_rgba(15,23,42,0.95)] sm:px-10 lg:px-14">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.18),transparent_22%)]" />
                <div className="relative">
                  <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-teal-100 backdrop-blur">Launch-ready marketing surface</div>
                  <h2 className="mt-6 text-balance text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Ready to level up your business?</h2>
                  <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-200">Join thousands of companies managing their operations with SaaSify.</p>
                  <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                    <Link href="/signup" className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_24px_70px_-32px_rgba(255,255,255,0.65)] transition duration-300 hover:-translate-y-0.5 hover:bg-slate-100">Start Free Trial</Link>
                    <button type="button" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/8 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/12">Schedule Demo</button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <footer className="border-t border-slate-200/70 bg-white/75 py-12 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[1.2fr_repeat(3,0.8fr)]">
            <div>
              <div className="flex items-center gap-3">
                <LogoMark className="h-10 w-10" />
                <div>
                  <div className="text-base font-semibold tracking-[-0.03em] text-slate-950">SaaSify</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Multi-tenant OS</div>
                </div>
              </div>
              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600">Powerful multi-tenant SaaS platform for modern businesses managing products, teams, analytics, and organization-level operations.</p>
            </div>
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{group.title}</h4>
                <ul className="mt-5 space-y-3 text-sm text-slate-600">
                  {group.links.map((link) => (
                    <li key={link}><a href="#" className="transition hover:text-slate-950">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex sm:items-center sm:justify-between">
            <p>© 2026 SaaSify. All rights reserved.</p>
            <div className="mt-3 flex gap-4 sm:mt-0">
              <a href="#" className="transition hover:text-slate-950">Privacy</a>
              <a href="#" className="transition hover:text-slate-950">Terms</a>
              <a href="#" className="transition hover:text-slate-950">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
