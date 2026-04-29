"use client";

import { Lock, ShieldAlert } from "lucide-react";
import { UserRole } from "@/components/team/role-badge";

type AccessBlockedProps = {
  userRole: UserRole;
};

export function AccessBlocked({ userRole }: AccessBlockedProps) {
  return (
    <div className="flex min-h-[600px] items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50/50 p-12">
      <div className="max-w-md text-center">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100">
          <Lock className="h-10 w-10 text-amber-600" />
        </div>

        {/* Text */}
        <h3 className="mb-2 text-xl font-semibold text-slate-900">
          Analytics Access Restricted
        </h3>
        <p className="mb-6 text-sm leading-relaxed text-slate-600">
          Your current role (<span className="font-semibold capitalize">{userRole}</span>) 
          does not have permission to view full analytics. Contact your organization owner 
          to request access.
        </p>

        {/* Info Box */}
        <div className="rounded-xl bg-blue-50 p-4 text-left">
          <div className="flex gap-3">
            <ShieldAlert className="h-5 w-5 shrink-0 text-blue-600" />
            <div className="text-sm text-blue-900">
              <p className="font-semibold">Who can access analytics?</p>
              <ul className="mt-2 space-y-1 text-blue-700">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  Organization Owners - Full access
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  Admins - Full access
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button className="mt-6 inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50">
          Contact Owner
        </button>
      </div>
    </div>
  );
}

type LimitedAnalyticsProps = {
  userRole: UserRole;
};

export function LimitedAnalytics({ userRole }: LimitedAnalyticsProps) {
  return (
    <div className="space-y-6">
      {/* Limited View Banner */}
      <div className="rounded-xl border border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 p-5">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-100">
            <ShieldAlert className="h-5 w-5 text-amber-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-amber-900">Limited Analytics View</h3>
            <p className="mt-1 text-sm text-amber-700">
              You're viewing a limited analytics dashboard. Upgrade to Admin or Owner role 
              for full insights and detailed reports.
            </p>
          </div>
        </div>
      </div>

      {/* Limited Stats */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm">
          <div className="text-sm font-medium text-slate-600">Your Activity</div>
          <div className="mt-2 text-3xl font-bold text-slate-900">42</div>
          <div className="mt-2 text-xs text-slate-500">Actions this month</div>
        </div>

        <div className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm">
          <div className="text-sm font-medium text-slate-600">Team Activity</div>
          <div className="mt-2 text-3xl font-bold text-slate-900">156</div>
          <div className="mt-2 text-xs text-slate-500">Total team actions</div>
        </div>
      </div>

      {/* Upgrade CTA */}
      <div className="rounded-xl border border-teal-200 bg-gradient-to-r from-teal-50 to-cyan-50 p-6">
        <h3 className="font-semibold text-slate-900">Unlock Full Analytics</h3>
        <p className="mt-1 text-sm text-slate-600">
          Get detailed insights, custom reports, and advanced metrics with an upgraded role.
        </p>
        <button className="mt-4 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-teal-600 to-cyan-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-md hover:brightness-110">
          Request Access
        </button>
      </div>
    </div>
  );
}
