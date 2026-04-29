"use client";

import { useState } from "react";
import {
  SettingsNavigation,
  SettingsTab,
} from "@/components/settings/settings-navigation";
import { ProfileSettings } from "@/components/settings/profile-settings";
import { OrganizationSettings } from "@/components/settings/organization-settings";
import { SecuritySettings } from "@/components/settings/security-settings";
import { TeamSettings } from "@/components/settings/team-settings";
import { BillingSettings } from "@/components/settings/billing-settings";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<SettingsTab>("profile");

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileSettings />;
      case "organization":
        return <OrganizationSettings />;
      case "security":
        return <SecuritySettings />;
      case "team":
        return <TeamSettings />;
      case "billing":
        return <BillingSettings />;
      default:
        return <ProfileSettings />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div
        style={{
          animation: "hero-enter 600ms cubic-bezier(0.22, 1, 0.36, 1) both",
        }}
      >
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Settings
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Manage your account, organization, and preferences
        </p>
      </div>

      {/* Settings Container */}
      <div
        className="grid gap-6 lg:grid-cols-[280px_1fr]"
        style={{
          animation: "reveal-up-enter 600ms cubic-bezier(0.22, 1, 0.36, 1) both",
          animationDelay: "100ms",
        }}
      >
        {/* Sidebar Navigation */}
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm">
            <SettingsNavigation
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          </div>
        </aside>

        {/* Content Area */}
        <main
          key={activeTab}
          style={{
            animation: "settings-content-enter 400ms cubic-bezier(0.22, 1, 0.36, 1) both",
          }}
        >
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
