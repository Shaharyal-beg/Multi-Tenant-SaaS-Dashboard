"use client";

type CategoryData = {
  label: string;
  value: number;
  color: string;
};

type DonutChartProps = {
  title: string;
  data: CategoryData[];
};

export function DonutChart({ title, data }: DonutChartProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  
  let currentAngle = -90;
  const segments = data.map((item) => {
    const percentage = (item.value / total) * 100;
    const angle = (percentage / 100) * 360;
    const startAngle = currentAngle;
    currentAngle += angle;
    
    return {
      ...item,
      percentage,
      startAngle,
      endAngle: currentAngle,
    };
  });

  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = (angleInDegrees * Math.PI) / 180;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  const describeArc = (x: number, y: number, radius: number, startAngle: number, endAngle: number) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    
    return [
      "M", start.x, start.y,
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
    ].join(" ");
  };

  return (
    <div
      className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm"
      style={{
        animation: "reveal-up-enter 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
        animationDelay: "400ms",
      }}
    >
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="mt-1 text-sm text-slate-500">Category breakdown</p>
      </div>

      <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start lg:justify-between">
        {/* Donut Chart */}
        <div className="relative h-48 w-48 shrink-0">
          <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
            {segments.map((segment, index) => (
              <g key={segment.label}>
                <path
                  d={describeArc(50, 50, 35, segment.startAngle, segment.endAngle)}
                  fill="none"
                  stroke={segment.color}
                  strokeWidth="14"
                  className="transition-all hover:stroke-[16]"
                  style={{
                    strokeDasharray: "1000",
                    strokeDashoffset: "1000",
                    animation: `donut-draw 1000ms cubic-bezier(0.22, 1, 0.36, 1) both`,
                    animationDelay: `${600 + index * 100}ms`,
                  }}
                />
              </g>
            ))}
          </svg>

          {/* Center Label */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-2xl font-bold text-slate-900">{total}</div>
            <div className="text-xs text-slate-500">Total</div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex-1 space-y-3">
          {segments.map((segment, index) => (
            <div
              key={segment.label}
              className="flex items-center justify-between gap-4 rounded-lg border border-slate-100 bg-slate-50/50 px-4 py-3 transition-colors hover:bg-slate-100"
              style={{
                animation: "reveal-fade-enter 400ms cubic-bezier(0.22, 1, 0.36, 1) both",
                animationDelay: `${700 + index * 80}ms`,
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: segment.color }}
                />
                <span className="text-sm font-medium text-slate-700">
                  {segment.label}
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-semibold text-slate-900">
                  {segment.value}
                </span>
                <span className="text-xs text-slate-500">
                  ({segment.percentage.toFixed(1)}%)
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
