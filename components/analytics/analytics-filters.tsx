"use client";

import { useState } from "react";
import { Calendar, ChevronDown, Filter } from "lucide-react";

type DateRange = "7d" | "30d" | "90d" | "1y";
type MetricType = "all" | "revenue" | "users" | "products";

type AnalyticsFiltersProps = {
  onDateRangeChange?: (range: DateRange) => void;
  onMetricTypeChange?: (type: MetricType) => void;
};

export function AnalyticsFilters({
  onDateRangeChange,
  onMetricTypeChange,
}: AnalyticsFiltersProps) {
  const [dateRange, setDateRange] = useState<DateRange>("30d");
  const [metricType, setMetricType] = useState<MetricType>("all");
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [showMetricDropdown, setShowMetricDropdown] = useState(false);

  const dateRangeOptions: { value: DateRange; label: string }[] = [
    { value: "7d", label: "Last 7 days" },
    { value: "30d", label: "Last 30 days" },
    { value: "90d", label: "Last 90 days" },
    { value: "1y", label: "Last year" },
  ];

  const metricOptions: { value: MetricType; label: string }[] = [
    { value: "all", label: "All Metrics" },
    { value: "revenue", label: "Revenue Only" },
    { value: "users", label: "Users Only" },
    { value: "products", label: "Products Only" },
  ];

  const handleDateRangeChange = (range: DateRange) => {
    setDateRange(range);
    setShowDateDropdown(false);
    onDateRangeChange?.(range);
  };

  const handleMetricTypeChange = (type: MetricType) => {
    setMetricType(type);
    setShowMetricDropdown(false);
    onMetricTypeChange?.(type);
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Date Range Filter */}
      <div className="relative">
        <button
          onClick={() => setShowDateDropdown(!showDateDropdown)}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-all hover:bg-slate-50"
        >
          <Calendar className="h-4 w-4" />
          {dateRangeOptions.find((opt) => opt.value === dateRange)?.label}
          <ChevronDown className="h-4 w-4" />
        </button>

        {showDateDropdown && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setShowDateDropdown(false)}
            />
            <div className="absolute left-0 top-full z-20 mt-2 w-48 rounded-lg border border-slate-200 bg-white p-1 shadow-xl">
              {dateRangeOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleDateRangeChange(option.value)}
                  className={`flex w-full items-center rounded-md px-3 py-2 text-sm transition-colors ${
                    dateRange === option.value
                      ? "bg-teal-50 font-semibold text-teal-700"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Metric Type Filter */}
      <div className="relative">
        <button
          onClick={() => setShowMetricDropdown(!showMetricDropdown)}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-all hover:bg-slate-50"
        >
          <Filter className="h-4 w-4" />
          {metricOptions.find((opt) => opt.value === metricType)?.label}
          <ChevronDown className="h-4 w-4" />
        </button>

        {showMetricDropdown && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setShowMetricDropdown(false)}
            />
            <div className="absolute left-0 top-full z-20 mt-2 w-48 rounded-lg border border-slate-200 bg-white p-1 shadow-xl">
              {metricOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleMetricTypeChange(option.value)}
                  className={`flex w-full items-center rounded-md px-3 py-2 text-sm transition-colors ${
                    metricType === option.value
                      ? "bg-teal-50 font-semibold text-teal-700"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Active Filters Indicator */}
      {(dateRange !== "30d" || metricType !== "all") && (
        <button
          onClick={() => {
            setDateRange("30d");
            setMetricType("all");
            onDateRangeChange?.("30d");
            onMetricTypeChange?.("all");
          }}
          className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
        >
          Clear filters
        </button>
      )}
    </div>
  );
}
