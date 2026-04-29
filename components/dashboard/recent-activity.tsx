"use client";

import { LucideIcon, UserPlus, Package, Settings as SettingsIcon, ShoppingCart, Trash2 } from "lucide-react";

type Activity = {
  id: string;
  type: "user" | "product" | "settings" | "order" | "delete";
  message: string;
  timestamp: string;
  user?: string;
  icon: LucideIcon;
  iconColor: string;
};

const recentActivities: Activity[] = [
  {
    id: "1",
    type: "user",
    message: "Sarah Johnson joined the team",
    timestamp: "2 minutes ago",
    user: "SJ",
    icon: UserPlus,
    iconColor: "from-emerald-500 to-teal-500",
  },
  {
    id: "2",
    type: "product",
    message: "New product 'Premium Widget' was added",
    timestamp: "1 hour ago",
    user: "JD",
    icon: Package,
    iconColor: "from-blue-500 to-cyan-500",
  },
  {
    id: "3",
    type: "order",
    message: "Order #4521 completed successfully",
    timestamp: "3 hours ago",
    user: "AM",
    icon: ShoppingCart,
    iconColor: "from-purple-500 to-pink-500",
  },
  {
    id: "4",
    type: "settings",
    message: "Organization settings were updated",
    timestamp: "5 hours ago",
    user: "JD",
    icon: SettingsIcon,
    iconColor: "from-orange-500 to-amber-500",
  },
  {
    id: "5",
    type: "delete",
    message: "Product 'Old Widget' was removed",
    timestamp: "1 day ago",
    user: "SJ",
    icon: Trash2,
    iconColor: "from-red-500 to-rose-500",
  },
];

export function RecentActivity() {
  return (
    <div
      className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm"
      style={{
        animation: "reveal-up-enter 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
        animationDelay: "300ms",
      }}
    >
      <div className="border-b border-slate-100 px-6 py-4">
        <h3 className="text-lg font-semibold text-slate-900">
          Recent Activity
        </h3>
        <p className="mt-1 text-sm text-slate-500">
          Latest updates from your organization
        </p>
      </div>

      <div className="divide-y divide-slate-100">
        {recentActivities.map((activity, index) => {
          const Icon = activity.icon;
          const delay = 400 + index * 50;

          return (
            <div
              key={activity.id}
              className="group px-6 py-4 transition-colors hover:bg-slate-50/50"
              style={{
                animation:
                  "reveal-fade-enter 500ms cubic-bezier(0.22, 1, 0.36, 1) both",
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

                {/* User Avatar */}
                {activity.user && (
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-slate-600 to-slate-800 text-xs font-bold text-white">
                    {activity.user}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t border-slate-100 px-6 py-4">
        <button className="w-full rounded-lg border border-slate-200 bg-slate-50/50 py-2.5 text-sm font-medium text-slate-700 transition-all hover:border-slate-300 hover:bg-white hover:shadow-sm">
          View All Activity
        </button>
      </div>
    </div>
  );
}
