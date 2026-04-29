"use client";

import { Users, Package, DollarSign, Activity } from "lucide-react";
import { StatCard } from "@/components/dashboard/stat-card";
import { AnalyticsChart } from "@/components/dashboard/analytics-chart";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { QuickActions } from "@/components/dashboard/quick-actions";

// Mock data for analytics chart
const chartData = [
  { label: "Mon", value: 4200 },
  { label: "Tue", value: 5100 },
  { label: "Wed", value: 4800 },
  { label: "Thu", value: 6200 },
  { label: "Fri", value: 5900 },
  { label: "Sat", value: 7100 },
  { label: "Sun", value: 6800 },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div
        className="page-header"
        style={{
          animation: "hero-enter 600ms cubic-bezier(0.22, 1, 0.36, 1) both",
        }}
      >
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Dashboard
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Welcome back! Here's what's happening with your organization today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Users"
          value="2,543"
          change="+12.5%"
          changeType="positive"
          icon={Users}
          iconColor="from-blue-500 to-cyan-600"
          delay={0}
        />
        <StatCard
          title="Total Products"
          value="189"
          change="+8.2%"
          changeType="positive"
          icon={Package}
          iconColor="from-purple-500 to-pink-600"
          delay={100}
        />
        <StatCard
          title="Revenue"
          value="$52,340"
          change="+23.1%"
          changeType="positive"
          icon={DollarSign}
          iconColor="from-emerald-500 to-teal-600"
          delay={200}
        />
        <StatCard
          title="Active Sessions"
          value="1,234"
          change="-4.3%"
          changeType="negative"
          icon={Activity}
          iconColor="from-orange-500 to-amber-600"
          delay={300}
        />
      </div>

      {/* Analytics Chart - Full Width */}
      <div>
        <AnalyticsChart
          title="Revenue Overview"
          data={chartData}
          trend="up"
          trendValue="+12.5%"
        />
      </div>

      {/* Two Column Layout - Activity & Quick Actions */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RecentActivity />
        </div>

        <div>
          <QuickActions />
        </div>
      </div>

      {/* Role-Based Information Banner */}
      <div
        className="overflow-hidden rounded-2xl border border-teal-200/80 bg-gradient-to-r from-teal-50 to-cyan-50 p-6 shadow-sm"
        style={{
          animation: "reveal-up-enter 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
          animationDelay: "600ms",
        }}
      >
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 shadow-lg">
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-semibold text-slate-900">
              You're on the Free Plan
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Upgrade to unlock advanced analytics, unlimited team members, and
              priority support.
            </p>
            <button className="mt-4 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-teal-600 to-cyan-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-md hover:brightness-110">
              Upgrade Now
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
