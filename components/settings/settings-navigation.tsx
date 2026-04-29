"use client";

import { User, Building2, Shield, CreditCard, Users, LucideIcon } from "lucide-react";

export type SettingsTab = "profile" | "organization" | "security" | "billing" | "team";

type Tab = {
  id: SettingsTab;
  label: string;
  icon: LucideIcon;
  description: string;
};

const tabs: Tab[] = [
  {
    id: "profile",
    label: "Profile",
    icon: User,
    description: "Manage your personal information",
  },
  {
    id: "organization",
    label: "Organization",
    icon: Building2,
    description: "Configure organization settings",
  },
  {
    id: "security",
    label: "Security",
    icon: Shield,
    description: "Password and authentication",
  },
  {
    id: "team",
    label: "Team Settings",
    icon: Users,
    description: "Role and permission controls",
  },
  {
    id: "billing",
    label: "Billing",
    icon: CreditCard,
    description: "Plans and payment methods",
  },
];

type SettingsNavigationProps = {
  activeTab: SettingsTab;
  onTabChange: (tab: SettingsTab) => void;
};

export function SettingsNavigation({
  activeTab,
  onTabChange,
}: SettingsNavigationProps) {
  return (
    <nav className="space-y-1">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`group flex w-full items-start gap-3 rounded-lg px-4 py-3 text-left transition-all ${
              isActive
                ? "bg-gradient-to-r from-teal-50 to-cyan-50 text-teal-900 shadow-sm ring-1 ring-teal-200"
                : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            <Icon
              className={`mt-0.5 h-5 w-5 shrink-0 transition-transform group-hover:scale-110 ${
                isActive ? "text-teal-600" : "text-slate-400"
              }`}
            />
            <div className="min-w-0 flex-1">
              <div className={`font-semibold ${isActive ? "text-teal-900" : "text-slate-900"}`}>
                {tab.label}
              </div>
              <div className={`text-xs ${isActive ? "text-teal-700" : "text-slate-500"}`}>
                {tab.description}
              </div>
            </div>
            {isActive && (
              <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal-500" />
            )}
          </button>
        );
      })}
    </nav>
  );
}
