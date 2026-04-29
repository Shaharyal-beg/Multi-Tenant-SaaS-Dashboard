"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  Users,
  BarChart3,
  Settings,
  ChevronLeft,
} from "lucide-react";
import { useState } from "react";
import { LogoMark } from "@/components/marketing/logo-mark";

const navItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Products",
    href: "/products",
    icon: Package,
  },
  {
    name: "Team",
    href: "/team",
    icon: Users,
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: BarChart3,
    role: ["owner", "admin"], // Role-based visibility
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Mock user role - in production, get from auth context
  const userRole = "admin";

  const visibleNavItems = navItems.filter(
    (item) => !item.role || item.role.includes(userRole)
  );

  return (
    <aside
      className={`relative flex h-screen flex-col border-r border-slate-200/80 bg-white transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Logo Section */}
      <div className="flex h-16 items-center justify-between border-b border-slate-200/60 px-4">
        <Link
          href="/dashboard"
          className={`flex items-center gap-3 transition-opacity ${
            isCollapsed ? "opacity-0" : "opacity-100"
          }`}
        >
          <LogoMark className="h-8 w-8 shrink-0" />
          <div className={`${isCollapsed ? "hidden" : "block"}`}>
            <div className="text-sm font-semibold tracking-[-0.02em] text-slate-900">
              SaaSify
            </div>
            <div className="text-[10px] uppercase tracking-[0.15em] text-slate-500">
              Dashboard
            </div>
          </div>
        </Link>

        {isCollapsed && <LogoMark className="h-8 w-8" />}
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
        {visibleNavItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-r from-teal-500/10 to-cyan-500/10 text-teal-700 shadow-sm"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
              title={isCollapsed ? item.name : undefined}
            >
              {isActive && (
                <div className="absolute inset-y-0 left-0 w-1 rounded-r-full bg-gradient-to-b from-teal-500 to-cyan-500" />
              )}

              <Icon
                className={`h-5 w-5 shrink-0 transition-transform group-hover:scale-110 ${
                  isActive ? "text-teal-600" : "text-slate-400"
                }`}
              />

              <span
                className={`${
                  isCollapsed ? "hidden" : "block"
                } truncate transition-all`}
              >
                {item.name}
              </span>

              {isActive && !isCollapsed && (
                <div className="ml-auto h-1.5 w-1.5 rounded-full bg-teal-500" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Collapse Toggle */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="group m-3 flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
        title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        <ChevronLeft
          className={`h-4 w-4 transition-transform ${
            isCollapsed ? "rotate-180" : ""
          }`}
        />
        {!isCollapsed && <span>Collapse</span>}
      </button>

      {/* Upgrade Card (for collapsed state show tooltip) */}
      {!isCollapsed && (
        <div className="m-3 rounded-xl border border-teal-100 bg-gradient-to-br from-teal-50 to-cyan-50 p-4">
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-teal-900">
            Free Plan
          </div>
          <p className="mb-3 text-xs leading-relaxed text-slate-600">
            Upgrade to unlock advanced analytics and unlimited team members.
          </p>
          <button className="w-full rounded-lg bg-gradient-to-r from-teal-600 to-cyan-600 px-3 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:shadow-md hover:brightness-110">
            Upgrade Now
          </button>
        </div>
      )}
    </aside>
  );
}
