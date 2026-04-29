"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type MobileNavProps = {
  links: Array<{ href: string; label: string }>;
};

export function MobileNav({ links }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
        onClick={() => setIsOpen((open) => !open)}
        className="group inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200/80 bg-white/85 text-slate-900 shadow-[0_10px_35px_-22px_rgba(15,23,42,0.9)] backdrop-blur transition hover:border-slate-300 hover:bg-white"
      >
        <span className="relative block h-4 w-5">
          <span
            className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
              isOpen ? "top-1.5 rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 top-3 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
              isOpen ? "top-1.5 -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      <div
        className={`absolute inset-x-0 top-[calc(100%+0.75rem)] origin-top rounded-[2rem] border border-white/60 bg-white/92 p-5 shadow-[0_28px_90px_-30px_rgba(15,23,42,0.45)] backdrop-blur-xl transition duration-300 ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-200 pt-4">
          <Link
            href="/login"
            onClick={() => setIsOpen(false)}
            className="rounded-2xl border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            onClick={() => setIsOpen(false)}
            className="rounded-2xl bg-slate-950 px-4 py-3 text-center text-sm font-semibold text-white shadow-[0_18px_40px_-22px_rgba(15,23,42,0.95)] transition hover:-translate-y-0.5 hover:bg-slate-900"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}