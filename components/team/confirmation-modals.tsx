"use client";

import { X, AlertTriangle, Shield, UserX } from "lucide-react";
import { TeamMember } from "./team-members-list";
import { UserRole, getRoleLabel } from "./role-badge";
import { useState } from "react";

type ChangeRoleModalProps = {
  isOpen: boolean;
  member: TeamMember | null;
  onClose: () => void;
  onConfirm: (newRole: UserRole) => void;
  currentUserRole: UserRole;
};

export function ChangeRoleModal({
  isOpen,
  member,
  onClose,
  onConfirm,
  currentUserRole,
}: ChangeRoleModalProps) {
  const [selectedRole, setSelectedRole] = useState<UserRole>(
    member?.role || "member"
  );

  if (!isOpen || !member) return null;

  const availableRoles: UserRole[] =
    currentUserRole === "owner"
      ? ["admin", "member", "viewer"]
      : ["member", "viewer"];

  const handleConfirm = () => {
    onConfirm(selectedRole);
    onClose();
  };

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
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Change Role
              </h2>
              <p className="text-sm text-slate-500">Update member permissions</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-900"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-5">
            <p className="text-sm text-slate-600">
              You're changing the role for{" "}
              <span className="font-semibold text-slate-900">
                {member.name}
              </span>
            </p>
          </div>

          {/* Role Selection */}
          <div className="space-y-2">
            {availableRoles.map((role) => (
              <label
                key={role}
                className={`flex cursor-pointer items-center gap-3 rounded-lg border-2 p-3 transition-all ${
                  selectedRole === role
                    ? "border-teal-500 bg-teal-50/50 ring-2 ring-teal-500/20"
                    : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <input
                  type="radio"
                  name="newRole"
                  value={role}
                  checked={selectedRole === role}
                  onChange={(e) => setSelectedRole(e.target.value as UserRole)}
                  className="h-4 w-4 border-slate-300 text-teal-600 focus:ring-teal-500"
                />
                <span className="font-semibold text-slate-900">
                  {getRoleLabel(role)}
                </span>
              </label>
            ))}
          </div>

          {/* Warning */}
          <div className="mt-5 rounded-lg bg-amber-50 p-4">
            <div className="flex gap-3">
              <AlertTriangle className="h-5 w-5 shrink-0 text-amber-600" />
              <p className="text-sm text-amber-900">
                Changing roles will immediately update this member's permissions
                and access levels.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 border-t border-slate-200 px-6 py-4">
          <button
            onClick={onClose}
            className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-md hover:brightness-110"
          >
            Update Role
          </button>
        </div>
      </div>
    </div>
  );
}

type RemoveMemberModalProps = {
  isOpen: boolean;
  member: TeamMember | null;
  onClose: () => void;
  onConfirm: () => void;
};

export function RemoveMemberModal({
  isOpen,
  member,
  onClose,
  onConfirm,
}: RemoveMemberModalProps) {
  if (!isOpen || !member) return null;

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
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-rose-600">
              <UserX className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Remove Member
              </h2>
              <p className="text-sm text-slate-500">
                This action cannot be undone
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

        {/* Content */}
        <div className="p-6">
          <div className="mb-5 rounded-lg bg-red-50 p-4">
            <div className="flex gap-3">
              <AlertTriangle className="h-5 w-5 shrink-0 text-red-600" />
              <div className="text-sm text-red-900">
                <p className="font-semibold">Warning: Permanent Action</p>
                <p className="mt-1">
                  You are about to remove{" "}
                  <span className="font-semibold">{member.name}</span> from your
                  organization. They will immediately lose access to all data and
                  features.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3 text-sm text-slate-600">
            <p>This will:</p>
            <ul className="list-inside list-disc space-y-1 pl-2">
              <li>Revoke all permissions and access</li>
              <li>Remove them from all projects and teams</li>
              <li>Cancel any pending invitations</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 border-t border-slate-200 px-6 py-4">
          <button
            onClick={onClose}
            className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="rounded-lg bg-gradient-to-r from-red-600 to-rose-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-md hover:brightness-110"
          >
            Remove Member
          </button>
        </div>
      </div>
    </div>
  );
}
