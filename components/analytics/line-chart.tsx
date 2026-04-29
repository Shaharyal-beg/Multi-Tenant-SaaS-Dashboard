"use client";

import { TrendingUp } from "lucide-react";

type DataPoint = {
  label: string;
  value: number;
};

type LineChartProps = {
  title: string;
  data: DataPoint[];
  color?: string;
  height?: number;
};

export function LineChart({
  title,
  data,
  color = "rgb(20, 184, 166)",
  height = 320,
}: LineChartProps) {
  const maxValue = Math.max(...data.map((d) => d.value));
  const minValue = Math.min(...data.map((d) => d.value));
  const range = maxValue - minValue;

  const getY = (value: number) => {
    return ((maxValue - value) / range) * (height - 60) + 20;
  };

  const points = data.map((point, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = (getY(point.value) / height) * 100;
    return `${x},${y}`;
  }).join(" ");

  const totalGrowth = data.length > 1
    ? ((data[data.length - 1].value - data[0].value) / data[0].value) * 100
    : 0;

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
          <p className="mt-1 text-sm text-slate-500">Last {data.length} periods</p>
        </div>

        <div className="flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-1.5">
          <TrendingUp className="h-4 w-4 text-emerald-600" />
          <span className="text-sm font-semibold text-emerald-600">
            +{totalGrowth.toFixed(1)}%
          </span>
        </div>
      </div>

      {/* Chart */}
      <div className="relative" style={{ height: `${height}px` }}>
        <svg
          viewBox={`0 0 100 100`}
          className="h-full w-full"
          preserveAspectRatio="none"
        >
          {/* Grid Lines */}
          {[0, 25, 50, 75, 100].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="100"
              y2={y}
              stroke="#e2e8f0"
              strokeWidth="0.2"
              strokeDasharray="2,2"
            />
          ))}

          {/* Gradient Fill */}
          <defs>
            <linearGradient id="lineGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="0.2" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Area Fill */}
          <polygon
            points={`0,100 ${points} 100,100`}
            fill="url(#lineGradient)"
            style={{
              animation: "line-draw 1200ms cubic-bezier(0.22, 1, 0.36, 1) both",
              animationDelay: "400ms",
            }}
          />

          {/* Line */}
          <polyline
            points={points}
            fill="none"
            stroke={color}
            strokeWidth="0.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              animation: "line-draw 1200ms cubic-bezier(0.22, 1, 0.36, 1) both",
              animationDelay: "400ms",
            }}
          />

          {/* Data Points */}
          {data.map((point, index) => {
            const x = (index / (data.length - 1)) * 100;
            const y = (getY(point.value) / height) * 100;

            return (
              <g key={index}>
                <circle
                  cx={x}
                  cy={y}
                  r="1"
                  fill="white"
                  stroke={color}
                  strokeWidth="0.6"
                  className="transition-all hover:r-2"
                  style={{
                    animation: `dot-appear 400ms cubic-bezier(0.22, 1, 0.36, 1) both`,
                    animationDelay: `${600 + index * 50}ms`,
                  }}
                />
              </g>
            );
          })}
        </svg>

        {/* Labels */}
        <div className="absolute inset-x-0 -bottom-6 flex justify-between px-1 text-xs text-slate-500">
          {data.map((point, index) => (
            <span key={index} className={index % 2 === 0 ? "" : "hidden sm:block"}>
              {point.label}
            </span>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-8 flex items-center justify-center gap-6 border-t border-slate-100 pt-4">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full" style={{ backgroundColor: color }} />
          <span className="text-sm text-slate-600">Revenue</span>
        </div>
      </div>
    </div>
  );
}
