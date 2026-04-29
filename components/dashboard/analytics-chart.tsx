"use client";

import { TrendingUp, TrendingDown } from "lucide-react";

type DataPoint = {
  label: string;
  value: number;
};

type AnalyticsChartProps = {
  title: string;
  data: DataPoint[];
  trend?: "up" | "down";
  trendValue?: string;
};

export function AnalyticsChart({
  title,
  data,
  trend = "up",
  trendValue = "+12.5%",
}: AnalyticsChartProps) {
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div
      className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm"
      style={{
        animation: "reveal-up-enter 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
        animationDelay: "200ms",
      }}
    >
      {/* Header */}
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <p className="mt-1 text-sm text-slate-500">Last 7 days</p>
        </div>

        <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-1.5">
          {trend === "up" ? (
            <TrendingUp className="h-4 w-4 text-emerald-600" />
          ) : (
            <TrendingDown className="h-4 w-4 text-red-600" />
          )}
          <span
            className={`text-sm font-semibold ${
              trend === "up" ? "text-emerald-600" : "text-red-600"
            }`}
          >
            {trendValue}
          </span>
        </div>
      </div>

      {/* Chart */}
      <div className="relative h-64">
        <div className="flex h-full items-end justify-between gap-2">
          {data.map((point, index) => {
            const height = (point.value / maxValue) * 100;
            const delay = index * 50;

            return (
              <div key={point.label} className="group flex flex-1 flex-col">
                {/* Bar */}
                <div className="relative flex flex-1 items-end">
                  <div
                    className="hero-bar w-full rounded-t-lg bg-gradient-to-t from-teal-500 to-cyan-400 transition-all duration-300 hover:from-teal-600 hover:to-cyan-500"
                    style={{
                      height: `${height}%`,
                      animationDelay: `${delay}ms`,
                    }}
                  >
                    {/* Value Tooltip */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-slate-900 px-2 py-1 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                      {point.value.toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* Label */}
                <div className="mt-3 text-center text-xs font-medium text-slate-500">
                  {point.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Grid Lines */}
        <div className="pointer-events-none absolute inset-0">
          {[0, 25, 50, 75, 100].map((percent) => (
            <div
              key={percent}
              className="absolute inset-x-0 border-t border-dashed border-slate-200"
              style={{ top: `${100 - percent}%` }}
            />
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 flex items-center justify-center gap-6 border-t border-slate-100 pt-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-400" />
          <span className="text-slate-600">Revenue</span>
        </div>
      </div>
    </div>
  );
}
