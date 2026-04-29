"use client";

import { useState } from "react";
import { DollarSign, Users, Package, TrendingUp } from "lucide-react";
import { MetricCard } from "@/components/analytics/metric-card";
import { LineChart } from "@/components/analytics/line-chart";
import { BarChart } from "@/components/analytics/bar-chart";
import { DonutChart } from "@/components/analytics/donut-chart";
import { ActivityInsights } from "@/components/analytics/activity-insights";
import { AnalyticsFilters } from "@/components/analytics/analytics-filters";
import { AccessBlocked, LimitedAnalytics } from "@/components/analytics/access-control";
import { UserRole } from "@/components/team/role-badge";

// Mock data
const revenueData = [
  { label: "Jan", value: 45000 },
  { label: "Feb", value: 52000 },
  { label: "Mar", value: 48000 },
  { label: "Apr", value: 61000 },
  { label: "May", value: 58000 },
  { label: "Jun", value: 72000 },
  { label: "Jul", value: 68000 },
  { label: "Aug", value: 79000 },
  { label: "Sep", value: 85000 },
  { label: "Oct", value: 91000 },
  { label: "Nov", value: 88000 },
  { label: "Dec", value: 95000 },
];

const weeklyData = [
  { label: "Mon", value: 4200 },
  { label: "Tue", value: 5100 },
  { label: "Wed", value: 4800 },
  { label: "Thu", value: 6200 },
  { label: "Fri", value: 5900 },
  { label: "Sat", value: 7100 },
  { label: "Sun", value: 6800 },
];

const categoryData = [
  { label: "Electronics", value: 156, color: "#3b82f6" },
  { label: "Clothing", value: 89, color: "#8b5cf6" },
  { label: "Books", value: 134, color: "#14b8a6" },
  { label: "Home & Garden", value: 67, color: "#f59e0b" },
  { label: "Sports", value: 43, color: "#ec4899" },
];

export default function AnalyticsPage() {
  // Mock user role - replace with real auth
  const userRole: UserRole = "admin"; // Change to "member" or "viewer" to test access control

  const hasFullAccess = ["owner", "admin"].includes(userRole);
  const hasLimitedAccess = userRole === "member";
  const isBlocked = userRole === "viewer";

  const [dateRange, setDateRange] = useState("30d");
  const [metricType, setMetricType] = useState("all");

  // Blocked view
  if (isBlocked) {
    return (
      <div className="space-y-6">
        <div
          style={{
            animation: "hero-enter 600ms cubic-bezier(0.22, 1, 0.36, 1) both",
          }}
        >
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Analytics
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Business performance insights and metrics
          </p>
        </div>

        <AccessBlocked userRole={userRole} />
      </div>
    );
  }

  // Limited view
  if (hasLimitedAccess) {
    return (
      <div className="space-y-6">
        <div
          style={{
            animation: "hero-enter 600ms cubic-bezier(0.22, 1, 0.36, 1) both",
          }}
        >
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Analytics
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Business performance insights and metrics
          </p>
        </div>

        <LimitedAnalytics userRole={userRole} />
      </div>
    );
  }

  // Full access view
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div
        className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        style={{
          animation: "hero-enter 600ms cubic-bezier(0.22, 1, 0.36, 1) both",
        }}
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Analytics
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Business performance insights and metrics
          </p>
        </div>

        {/* Filters */}
        <AnalyticsFilters
          onDateRangeChange={setDateRange}
          onMetricTypeChange={setMetricType}
        />
      </div>

      {/* KPI Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Revenue"
          value="$95,420"
          change={23.5}
          icon={DollarSign}
          gradient="var(--tw-gradient-stops) from-emerald-500 to-teal-600"
          delay={0}
        />
        <MetricCard
          title="Active Users"
          value="2,543"
          change={12.8}
          icon={Users}
          gradient="var(--tw-gradient-stops) from-blue-500 to-cyan-600"
          delay={100}
        />
        <MetricCard
          title="Total Products"
          value={489}
          change={8.2}
          icon={Package}
          gradient="var(--tw-gradient-stops) from-purple-500 to-pink-600"
          delay={200}
        />
        <MetricCard
          title="Growth Rate"
          value="18.4"
          change={5.3}
          icon={TrendingUp}
          gradient="var(--tw-gradient-stops) from-orange-500 to-amber-600"
          suffix="%"
          delay={300}
        />
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Line Chart - Full Width on Mobile, 2 cols on Desktop */}
        <div className="lg:col-span-2">
          <LineChart
            title="Revenue Growth"
            data={revenueData}
            color="rgb(20, 184, 166)"
          />
        </div>

        {/* Donut Chart */}
        <div>
          <DonutChart title="Products by Category" data={categoryData} />
        </div>
      </div>

      {/* Bar Chart and Activity */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Bar Chart */}
        <div className="lg:col-span-2">
          <BarChart
            title="Weekly Activity"
            subtitle="User engagement this week"
            data={weeklyData}
          />
        </div>

        {/* Activity Insights */}
        <div>
          <ActivityInsights />
        </div>
      </div>

      {/* Performance Summary */}
      <div
        className="rounded-2xl border border-slate-200/80 bg-gradient-to-r from-slate-50 to-slate-100 p-6"
        style={{
          animation: "reveal-up-enter 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
          animationDelay: "600ms",
        }}
      >
        <h3 className="mb-4 text-lg font-semibold text-slate-900">
          Performance Summary
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-sm font-medium text-slate-600">
              Conversion Rate
            </div>
            <div className="mt-1 text-2xl font-bold text-slate-900">3.24%</div>
            <div className="mt-1 text-xs text-emerald-600">+0.5% from last period</div>
          </div>
          <div>
            <div className="text-sm font-medium text-slate-600">
              Avg. Order Value
            </div>
            <div className="mt-1 text-2xl font-bold text-slate-900">$127</div>
            <div className="mt-1 text-xs text-emerald-600">+$12 from last period</div>
          </div>
          <div>
            <div className="text-sm font-medium text-slate-600">
              Customer Retention
            </div>
            <div className="mt-1 text-2xl font-bold text-slate-900">87.5%</div>
            <div className="mt-1 text-xs text-emerald-600">+2.1% from last period</div>
          </div>
          <div>
            <div className="text-sm font-medium text-slate-600">
              Churn Rate
            </div>
            <div className="mt-1 text-2xl font-bold text-slate-900">2.8%</div>
            <div className="mt-1 text-xs text-red-600">+0.3% from last period</div>
          </div>
        </div>
      </div>
    </div>
  );
}
