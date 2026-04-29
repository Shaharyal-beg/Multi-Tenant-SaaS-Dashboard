"use client";

import { useState, FormEvent } from "react";
import { X, Mail, Send } from "lucide-react";
import { UserRole, getRoleLabel, getRoleGradient } from "./role-badge";

type InviteMemberModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onInvite: (email: string, role: UserRole) => void;
  currentUserRole: UserRole;
};

export function InviteMemberModal({
  isOpen,
  onClose,
  onInvite,
  currentUserRole,
}: InviteMemberModalProps) {
  const [email, setEmail] = useState("");
  const [selectedRole, setSelectedRole] = useState<UserRole>("member");
  const [error, setError] = useState("");

  // Determine available roles based on current user role
  const availableRoles: UserRole[] =
    currentUserRole === "owner"
      ? ["admin", "member", "viewer"]
      : currentUserRole === "admin"
      ? ["member", "viewer"]
      : [];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate email
    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Send invite
    onInvite(email, selectedRole);
    
    // Reset form
    setEmail("");
    setSelectedRole("member");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-900/50 p-4 backdrop-blur-sm">
      <div
        className="relative w-full max-w-md rounded-2xl border border-slate-200 bg-white shadow-2xl"
        style={{
          animation: "modal-enter 300ms cubic-bezier(0.22, 1, 0.36, 1) both",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600">
              <Mail className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Invite Team Member
              </h2>
              <p className="text-sm text-slate-500">
                Send an invitation to join your organization
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-900"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-5">
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                className={`w-full rounded-lg border px-4 py-2.5 text-slate-900 transition-all focus:outline-none focus:ring-2 ${
                  error
                    ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                    : "border-slate-300 focus:border-teal-500 focus:ring-teal-500/20"
                }`}
                placeholder="colleague@company.com"
              />
              {error && (
                <p className="mt-2 text-sm text-red-600">{error}</p>
              )}
            </div>

            {/* Role Selection */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Select Role
              </label>
              <div className="space-y-2">
                {availableRoles.map((role) => (
                  <label
                    key={role}
                    className={`flex cursor-pointer items-center gap-4 rounded-lg border-2 p-4 transition-all ${
                      selectedRole === role
                        ? "border-teal-500 bg-teal-50/50 ring-2 ring-teal-500/20"
                        : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="role"
                      value={role}
                      checked={selectedRole === role}
                      onChange={(e) => setSelectedRole(e.target.value as UserRole)}
                      className="h-4 w-4 border-slate-300 text-teal-600 focus:ring-teal-500"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-900">
                          {getRoleLabel(role)}
                        </span>
                        <span
                          className={`h-2 w-2 rounded-full bg-gradient-to-r ${getRoleGradient(
                            role
                          )}`}
                        />
                      </div>
                      <p className="mt-0.5 text-sm text-slate-500">
                        {role === "admin" &&
                          "Can manage products, team members, and settings"}
                        {role === "member" &&
                          "Can view and edit products and team data"}
                        {role === "viewer" && "Read-only access to all data"}
                      </p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Info Box */}
            <div className="rounded-lg bg-blue-50 p-4">
              <div className="flex gap-3">
                <div className="shrink-0">
                  <svg
                    className="h-5 w-5 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="text-sm text-blue-900">
                  <p className="font-medium">Invitation Details</p>
                  <p className="mt-1 text-blue-700">
                    An email invitation will be sent to this address with
                    instructions to join your organization.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="mt-6 flex items-center justify-end gap-3 border-t border-slate-200 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-teal-600 to-cyan-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-md hover:brightness-110"
            >
              <Send className="h-4 w-4" />
              Send Invitation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
