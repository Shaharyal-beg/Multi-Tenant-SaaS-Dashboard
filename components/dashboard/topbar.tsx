"use client";

import { useState } from "react";
import {
  Search,
  Bell,
  ChevronDown,
  Building2,
  User,
  Settings,
  LogOut,
  Menu,
  Check,
} from "lucide-react";

type Organization = {
  id: string;
  name: string;
  role: string;
};

const mockOrgs: Organization[] = [
  { id: "1", name: "Acme Corp", role: "Owner" },
  { id: "2", name: "TechStart Inc", role: "Admin" },
  { id: "3", name: "DevStudio", role: "Member" },
];

export function Topbar({ onMenuClick }: { onMenuClick?: () => void }) {
  const [currentOrg, setCurrentOrg] = useState(mockOrgs[0]);
  const [showOrgDropdown, setShowOrgDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [notifications] = useState(3);

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200/80 bg-white/80 px-4 backdrop-blur-md sm:px-6">
      {/* Mobile Menu Button */}
      <button
        onClick={onMenuClick}
        className="mr-3 rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Left Section - Organization Switcher */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <button
            onClick={() => setShowOrgDropdown(!showOrgDropdown)}
            className="group flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all hover:border-slate-300 hover:shadow"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-teal-500 to-cyan-600 text-xs font-bold text-white">
              {currentOrg.name.charAt(0)}
            </div>
            <div className="hidden text-left sm:block">
              <div className="text-sm font-semibold text-slate-900">
                {currentOrg.name}
              </div>
              <div className="text-xs text-slate-500">{currentOrg.role}</div>
            </div>
            <ChevronDown className="h-4 w-4 text-slate-400 transition-transform group-hover:text-slate-600" />
          </button>

          {/* Organization Dropdown */}
          {showOrgDropdown && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setShowOrgDropdown(false)}
              />
              <div className="absolute left-0 top-full z-20 mt-2 w-64 rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
                <div className="mb-2 px-2 py-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Your Organizations
                </div>
                {mockOrgs.map((org) => (
                  <button
                    key={org.id}
                    onClick={() => {
                      setCurrentOrg(org);
                      setShowOrgDropdown(false);
                    }}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors hover:bg-slate-50"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-teal-500 to-cyan-600 text-xs font-bold text-white">
                      {org.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-slate-900">
                        {org.name}
                      </div>
                      <div className="text-xs text-slate-500">{org.role}</div>
                    </div>
                    {currentOrg.id === org.id && (
                      <Check className="h-4 w-4 text-teal-600" />
                    )}
                  </button>
                ))}
                <div className="my-2 h-px bg-slate-200" />
                <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50">
                  <Building2 className="h-4 w-4" />
                  Create Organization
                </button>
              </div>
            </>
          )}
        </div>

        {/* Search Bar - Hidden on mobile */}
        <div className="relative hidden lg:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-64 rounded-lg border border-slate-200 bg-slate-50/50 py-2 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 transition-all focus:border-teal-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20"
          />
        </div>
      </div>

      {/* Right Section - Notifications & User Menu */}
      <div className="flex items-center gap-2">
        {/* Notifications */}
        <button className="relative rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900">
          <Bell className="h-5 w-5" />
          {notifications > 0 && (
            <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-[10px] font-bold text-white">
              {notifications}
            </span>
          )}
        </button>

        {/* User Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowUserDropdown(!showUserDropdown)}
            className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-2 py-1.5 transition-all hover:border-slate-300 hover:shadow-sm sm:px-3"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-xs font-bold text-white">
              JD
            </div>
            <div className="hidden text-left sm:block">
              <div className="text-sm font-medium text-slate-900">
                John Doe
              </div>
            </div>
            <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
          </button>

          {/* User Dropdown Menu */}
          {showUserDropdown && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setShowUserDropdown(false)}
              />
              <div className="absolute right-0 top-full z-20 mt-2 w-56 rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
                <div className="mb-2 border-b border-slate-100 px-3 py-2">
                  <div className="font-semibold text-slate-900">John Doe</div>
                  <div className="text-xs text-slate-500">
                    john@example.com
                  </div>
                </div>

                <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 transition-colors hover:bg-slate-50">
                  <User className="h-4 w-4" />
                  Profile
                </button>

                <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 transition-colors hover:bg-slate-50">
                  <Settings className="h-4 w-4" />
                  Settings
                </button>

                <div className="my-2 h-px bg-slate-200" />

                <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-50">
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
