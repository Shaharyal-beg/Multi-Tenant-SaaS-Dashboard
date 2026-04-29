"use client";

import {
  TrendingUp,
  UserPlus,
  Package,
  DollarSign,
  AlertCircle,
  CheckCircle,
  LucideIcon,
} from "lucide-react";

type ActivityEvent = {
  id: string;
  type: "user" | "product" | "revenue" | "alert" | "success";
  message: string;
  timestamp: string;
  icon: LucideIcon;
  iconColor: string;
};

const mockActivities: ActivityEvent[] = [
  {
    id: "1",
    type: "revenue",
    message: "Revenue spike detected: +42% increase in last hour",
    timestamp: "5 minutes ago",
    icon: DollarSign,
    iconColor: "from-emerald-500 to-teal-600",
  },
  {
    id: "2",
    type: "user",
    message: "12 new users joined in the last hour",
    timestamp: "23 minutes ago",
    icon: UserPlus,
    iconColor: "from-blue-500 to-cyan-600",
  },
  {
    id: "3",
    type: "product",
    message: "3 new products added to inventory",
    timestamp: "1 hour ago",
    icon: Package,
    iconColor: "from-purple-500 to-pink-600",
  },
  {
    id: "4",
    type: "success",
    message: "Monthly revenue goal achieved (102%)",
    timestamp: "2 hours ago",
    icon: CheckCircle,
    iconColor: "from-emerald-500 to-green-600",
  },
  {
    id: "5",
    type: "alert",
    message: "Server response time increased by 15%",
    timestamp: "3 hours ago",
    icon: AlertCircle,
    iconColor: "from-amber-500 to-orange-600",
  },
];

export function ActivityInsights() {
  return (
    <div
      className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm"
      style={{
        animation: "reveal-up-enter 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
        animationDelay: "500ms",
      }}
    >
      {/* Header */}
      <div className="border-b border-slate-100 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Activity Insights
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Recent events and notifications
            </p>
          </div>
          <button className="text-sm font-medium text-teal-600 transition-colors hover:text-teal-700">
            View All
          </button>
        </div>
      </div>

      {/* Activity List */}
      <div className="divide-y divide-slate-100">
        {mockActivities.map((activity, index) => {
          const Icon = activity.icon;
          const delay = 600 + index * 60;

          return (
            <div
              key={activity.id}
              className="group px-6 py-4 transition-colors hover:bg-slate-50/50"
              style={{
                animation:
                  "reveal-fade-enter 400ms cubic-bezier(0.22, 1, 0.36, 1) both",
                animationDelay: `${delay}ms`,
              }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${activity.iconColor} shadow-sm transition-transform duration-200 group-hover:scale-110`}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-900">
                    {activity.message}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    {activity.timestamp}
                  </p>
                </div>

                {/* Indicator */}
                <div className="shrink-0">
                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="border-t border-slate-100 px-6 py-4">
        <button className="w-full rounded-lg border border-slate-200 bg-slate-50/50 py-2.5 text-sm font-medium text-slate-700 transition-all hover:border-slate-300 hover:bg-white hover:shadow-sm">
          Load More Events
        </button>
      </div>
    </div>
  );
}
