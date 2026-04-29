import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
  action?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  action,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <div className="mb-5 inline-flex rounded-full border border-teal-200/70 bg-teal-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-teal-800 shadow-[0_10px_40px_-24px_rgba(13,148,136,0.75)]">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-pretty text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  );
}