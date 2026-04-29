"use client";

import { Plus, UserPlus, BarChart3 } from "lucide-react";

type QuickAction = {
  label: string;
  icon: typeof Plus;
  color: string;
  href: string;
};

const actions: QuickAction[] = [
  {
    label: "Add Product",
    icon: Plus,
    color: "from-teal-500 to-cyan-600",
    href: "/products",
  },
  {
    label: "Invite User",
    icon: UserPlus,
    color: "from-purple-500 to-pink-600",
    href: "/team",
  },
  {
    label: "View Analytics",
    icon: BarChart3,
    color: "from-blue-500 to-indigo-600",
    href: "/analytics",
  },
];

export function QuickActions() {
  return (
    <div
      className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm"
      style={{
        animation: "reveal-up-enter 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
        animationDelay: "400ms",
      }}
    >
      <h3 className="mb-4 text-lg font-semibold text-slate-900">
        Quick Actions
      </h3>

      <div className="space-y-3">
        {actions.map((action, index) => {
          const Icon = action.icon;
          const delay = 500 + index * 80;

          return (
            <button
              key={action.label}
              className="group relative w-full overflow-hidden rounded-xl border border-slate-200 bg-white p-4 text-left transition-all duration-300 hover:border-slate-300 hover:shadow-lg"
              style={{
                animation:
                  "reveal-fade-enter 500ms cubic-bezier(0.22, 1, 0.36, 1) both",
                animationDelay: `${delay}ms`,
              }}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${action.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
              />

              <div className="relative flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${action.color} shadow-lg transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>

                <div className="flex-1">
                  <div className="font-semibold text-slate-900 group-hover:text-slate-900">
                    {action.label}
                  </div>
                  <div className="text-xs text-slate-500">
                    Click to get started
                  </div>
                </div>

                <svg
                  className="h-5 w-5 text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-slate-600"
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
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
