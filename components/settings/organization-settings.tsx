"use client";

import { useState } from "react";
import { Building2, AlertTriangle, Trash2, Save } from "lucide-react";

export function OrganizationSettings() {
  const [orgName, setOrgName] = useState("Acme Corp");
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Organization Settings
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Manage your organization profile and preferences
        </p>
      </div>

      {/* Organization Details */}
      <div className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold text-slate-900">
          Organization Details
        </h3>
        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Organization Name
            </label>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                className="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-4 text-slate-900 transition-all focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Organization ID
            </label>
            <div className="flex items-center gap-3">
              <input
                type="text"
                value="org_2kXq9Bz4Ln7Pm8Yw"
                disabled
                className="flex-1 rounded-lg border border-slate-300 bg-slate-50 px-4 py-2.5 text-slate-600"
              />
              <button className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-all hover:bg-slate-50">
                Copy
              </button>
            </div>
            <p className="mt-1 text-xs text-slate-500">
              Use this ID for API integrations
            </p>
          </div>
        </div>
      </div>

      {/* Organization Logo */}
      <div className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold text-slate-900">
          Organization Logo
        </h3>
        <div className="flex items-center gap-6">
          <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 text-2xl font-bold text-white">
            AC
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-slate-900">
              Upload organization logo
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Recommended size: 512x512px. Max 2MB.
            </p>
            <div className="mt-3 flex gap-3">
              <button className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-all hover:bg-slate-50">
                Upload Logo
              </button>
              <button className="text-sm font-medium text-red-600 transition-colors hover:text-red-700">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Workspace Information */}
      <div className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold text-slate-900">
          Workspace Information
        </h3>
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <div className="text-sm font-medium text-slate-600">
                Total Members
              </div>
              <div className="mt-1 text-2xl font-bold text-slate-900">6</div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <div className="text-sm font-medium text-slate-600">
                Created On
              </div>
              <div className="mt-1 text-2xl font-bold text-slate-900">
                Jan 2024
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="rounded-xl border-2 border-red-200 bg-red-50/50 p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-100">
            <AlertTriangle className="h-5 w-5 text-red-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-red-900">Danger Zone</h3>
            <p className="mt-1 text-sm text-red-700">
              Permanently delete this organization and all of its data. This
              action cannot be undone.
            </p>
            <button
              onClick={() => setShowDeleteModal(true)}
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-red-700"
            >
              <Trash2 className="h-4 w-4" />
              Delete Organization
            </button>
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

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-100">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">
              Delete Organization
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Are you absolutely sure? This will permanently delete the
              organization and all associated data. This action cannot be
              undone.
            </p>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50"
              >
                Cancel
              </button>
              <button className="flex-1 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-red-700">
                Delete Forever
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
