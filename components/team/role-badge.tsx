"use client";

import { LucideIcon } from "lucide-react";

export type UserRole = "owner" | "admin" | "member" | "viewer";

type RoleBadgeProps = {
  role: UserRole;
  size?: "sm" | "md";
};

const roleConfig: Record<
  UserRole,
  { label: string; color: string; gradient: string }
> = {
  owner: {
    label: "Owner",
    color: "bg-purple-50 text-purple-700 ring-purple-600/20",
    gradient: "from-purple-500 to-pink-600",
  },
  admin: {
    label: "Admin",
    color: "bg-blue-50 text-blue-700 ring-blue-600/20",
    gradient: "from-blue-500 to-cyan-600",
  },
  member: {
    label: "Member",
    color: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
    gradient: "from-emerald-500 to-teal-600",
  },
  viewer: {
    label: "Viewer",
    color: "bg-slate-50 text-slate-700 ring-slate-600/20",
    gradient: "from-slate-500 to-slate-600",
  },
};

export function RoleBadge({ role, size = "md" }: RoleBadgeProps) {
  const config = roleConfig[role];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-semibold ring-1 ring-inset ${
        config.color
      } ${size === "sm" ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-xs"}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${config.gradient}`}
      />
      {config.label}
    </span>
  );
}

export function getRoleLabel(role: UserRole): string {
  return roleConfig[role].label;
}

export function getRoleGradient(role: UserRole): string {
  return roleConfig[role].gradient;
}
