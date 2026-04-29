import type { ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
};

export function FeatureCard({
  icon,
  title,
  description,
  className = "",
}: FeatureCardProps) {
  return (
    <div
      className={[
        "group relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/88 p-7 shadow-[0_18px_70px_-36px_rgba(15,23,42,0.45)] backdrop-blur transition duration-300 hover:-translate-y-1.5 hover:border-teal-200 hover:shadow-[0_30px_80px_-34px_rgba(13,148,136,0.35)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-teal-300 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/70 bg-gradient-to-br from-white to-slate-50 text-slate-900 shadow-[0_18px_35px_-24px_rgba(15,23,42,0.55)] transition group-hover:scale-105 group-hover:shadow-[0_22px_50px_-24px_rgba(13,148,136,0.45)]">
        {icon}
      </div>
      <h3 className="text-lg font-semibold tracking-[-0.02em] text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">{description}</p>
    </div>
  );
}