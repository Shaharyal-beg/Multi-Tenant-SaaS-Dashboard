"use client";

import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

type MetricCardProps = {
  title: string;
  value: string | number;
  change: number;
  icon: LucideIcon;
  gradient: string;
  delay?: number;
  prefix?: string;
  suffix?: string;
};

export function MetricCard({
  title,
  value,
  change,
  icon: Icon,
  gradient,
  delay = 0,
  prefix = "",
  suffix = "",
}: MetricCardProps) {
  const isPositive = change >= 0;

  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-lg"
      style={{
        animation: "stat-card-enter 600ms cubic-bezier(0.22, 1, 0.36, 1) both",
        animationDelay: `${delay}ms`,
      }}
    >
      {/* Background Gradient Effect */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" 
           style={{ backgroundImage: `linear-gradient(to bottom right, ${gradient})` }} />

      <div className="relative">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-slate-600">{title}</p>
            <div className="mt-3 flex items-baseline gap-2">
              <h3 className="text-3xl font-bold tracking-tight text-slate-900">
                {prefix}{typeof value === 'number' ? value.toLocaleString() : value}{suffix}
              </h3>
            </div>
          </div>

          {/* Icon */}
          <div
            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br shadow-lg transition-transform duration-300 group-hover:scale-110`}
            style={{ backgroundImage: `linear-gradient(to bottom right, ${gradient})` }}
          >
            <Icon className="h-7 w-7 text-white" />
          </div>
        </div>

        {/* Change Indicator */}
        <div className="mt-4 flex items-center gap-2">
          <div
            className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${
              isPositive
                ? "bg-emerald-50 text-emerald-700"
                : "bg-red-50 text-red-700"
            }`}
          >
            {isPositive ? (
              <TrendingUp className="h-3.5 w-3.5" />
            ) : (
              <TrendingDown className="h-3.5 w-3.5" />
            )}
            {Math.abs(change)}%
          </div>
          <span className="text-sm text-slate-500">vs last period</span>
        </div>
      </div>

      {/* Hover Border Effect */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 ring-inset ring-slate-400/20 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}
