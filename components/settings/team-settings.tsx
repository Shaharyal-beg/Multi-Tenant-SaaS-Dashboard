"use client";

import { useState } from "react";
import { UserCog, Shield, Eye, Save } from "lucide-react";
import { UserRole } from "@/components/team/role-badge";

export function TeamSettings() {
  const [defaultRole, setDefaultRole] = useState<UserRole>("member");
  const [allowInvites, setAllowInvites] = useState(true);
  const [requireApproval, setRequireApproval] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Team Settings</h2>
        <p className="mt-1 text-sm text-slate-600">
          Configure default roles and team permissions
        </p>
      </div>

      {/* Default Role Assignment */}
      <div className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold text-slate-900">
          Default Role Assignment
        </h3>
        <p className="mb-4 text-sm text-slate-600">
          New team members will be assigned this role by default when they join
        </p>

        <div className="space-y-3">
          {(["member", "viewer"] as UserRole[]).map((role) => (
            <label
              key={role}
              className={`flex cursor-pointer items-center gap-4 rounded-lg border-2 p-4 transition-all ${
                defaultRole === role
                  ? "border-teal-500 bg-teal-50/50 ring-2 ring-teal-500/20"
                  : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              <input
                type="radio"
                name="defaultRole"
                value={role}
                checked={defaultRole === role}
                onChange={(e) => setDefaultRole(e.target.value as UserRole)}
                className="h-4 w-4 border-slate-300 text-teal-600 focus:ring-teal-500"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold capitalize text-slate-900">
                    {role}
                  </span>
                  {role === "member" ? (
                    <Shield className="h-4 w-4 text-emerald-600" />
                  ) : (
                    <Eye className="h-4 w-4 text-slate-600" />
                  )}
                </div>
                <p className="mt-0.5 text-sm text-slate-600">
                  {role === "member"
                    ? "Can view and edit products and team data"
                    : "Read-only access to all data"}
                </p>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Invitation Settings */}
      <div className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold text-slate-900">
          Invitation Settings
        </h3>

        <div className="space-y-4">
          {/* Allow Invites */}
          <div className="flex items-start justify-between gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="flex-1">
              <div className="font-semibold text-slate-900">
                Allow team invitations
              </div>
              <p className="mt-1 text-sm text-slate-600">
                Members can invite new people to the organization
              </p>
            </div>
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                checked={allowInvites}
                onChange={(e) => setAllowInvites(e.target.checked)}
                className="peer sr-only"
              />
              <div className="peer h-6 w-11 rounded-full bg-slate-300 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-gradient-to-r peer-checked:from-teal-600 peer-checked:to-cyan-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-teal-500/20"></div>
            </label>
          </div>

          {/* Require Approval */}
          <div className="flex items-start justify-between gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="flex-1">
              <div className="font-semibold text-slate-900">
                Require approval for new members
              </div>
              <p className="mt-1 text-sm text-slate-600">
                Admins must approve before new members can join
              </p>
            </div>
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                checked={requireApproval}
                onChange={(e) => setRequireApproval(e.target.checked)}
                className="peer sr-only"
              />
              <div className="peer h-6 w-11 rounded-full bg-slate-300 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-gradient-to-r peer-checked:from-teal-600 peer-checked:to-cyan-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-teal-500/20"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Permission Rules */}
      <div className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold text-slate-900">
          Permission Rules
        </h3>
        <div className="space-y-3">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="mb-2 flex items-center gap-2">
              <UserCog className="h-4 w-4 text-purple-600" />
              <span className="font-semibold text-slate-900">Owners</span>
            </div>
            <ul className="space-y-1 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-slate-400" />
                Full access to all features and settings
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-slate-400" />
                Can manage billing and delete organization
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="mb-2 flex items-center gap-2">
              <Shield className="h-4 w-4 text-blue-600" />
              <span className="font-semibold text-slate-900">Admins</span>
            </div>
            <ul className="space-y-1 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-slate-400" />
                Can manage members, products, and settings
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-slate-400" />
                Cannot delete organization or manage billing
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="mb-2 flex items-center gap-2">
              <UserCog className="h-4 w-4 text-emerald-600" />
              <span className="font-semibold text-slate-900">Members</span>
            </div>
            <ul className="space-y-1 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-slate-400" />
                Can view and edit products and team data
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-slate-400" />
                Limited access to organization settings
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="mb-2 flex items-center gap-2">
              <Eye className="h-4 w-4 text-slate-600" />
              <span className="font-semibold text-slate-900">Viewers</span>
            </div>
            <ul className="space-y-1 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-slate-400" />
                Read-only access to all data
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-slate-400" />
                Cannot make any changes
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex items-center justify-end gap-3 rounded-xl border border-slate-200/80 bg-slate-50 p-4">
        <button className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:bg-white">
          Cancel
        </button>
        <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-teal-600 to-cyan-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-md hover:brightness-110">
          <Save className="h-4 w-4" />
          Save Changes
        </button>
      </div>
    </div>
  );
}
