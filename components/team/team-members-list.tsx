"use client";

import { useState } from "react";
import { MoreVertical, Shield, UserX, Mail } from "lucide-react";
import { RoleBadge, UserRole } from "./role-badge";

export type TeamMember = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: "active" | "invited";
  avatar?: string;
  joinedAt: string;
};

type TeamMembersListProps = {
  members: TeamMember[];
  currentUserRole: UserRole;
  currentUserId: string;
  onChangeRole: (member: TeamMember) => void;
  onRemoveMember: (member: TeamMember) => void;
  onResendInvite: (member: TeamMember) => void;
};

export function TeamMembersList({
  members,
  currentUserRole,
  currentUserId,
  onChangeRole,
  onRemoveMember,
  onResendInvite,
}: TeamMembersListProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Permission checks
  const canManageRoles = ["owner", "admin"].includes(currentUserRole);
  const canRemoveMembers = currentUserRole === "owner";

  const canManageMember = (member: TeamMember) => {
    if (member.id === currentUserId) return false;
    if (member.role === "owner") return false;
    if (currentUserRole === "owner") return true;
    if (currentUserRole === "admin" && member.role !== "admin") return true;
    return false;
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="space-y-3">
      {members.map((member, index) => {
        const canManage = canManageMember(member);
        const isCurrentUser = member.id === currentUserId;

        return (
          <div
            key={member.id}
            className="group relative overflow-hidden rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-200 hover:border-slate-300 hover:shadow-md"
            style={{
              animation:
                "reveal-fade-enter 400ms cubic-bezier(0.22, 1, 0.36, 1) both",
              animationDelay: `${index * 40}ms`,
            }}
          >
            {/* Background Gradient on Hover */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-teal-500/5 to-cyan-500/5 blur-2xl" />
            </div>

            <div className="relative flex items-center justify-between gap-4">
              {/* Left Section - User Info */}
              <div className="flex min-w-0 flex-1 items-center gap-4">
                {/* Avatar */}
                <div className="relative shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-slate-700 to-slate-900 text-sm font-bold text-white ring-2 ring-white shadow-md">
                    {getInitials(member.name)}
                  </div>
                  {member.status === "active" && (
                    <div className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500" />
                  )}
                </div>

                {/* Name and Email */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="truncate font-semibold text-slate-900">
                      {member.name}
                    </h3>
                    {isCurrentUser && (
                      <span className="shrink-0 rounded-full bg-teal-100 px-2 py-0.5 text-xs font-medium text-teal-700">
                        You
                      </span>
                    )}
                  </div>
                  <p className="truncate text-sm text-slate-500">
                    {member.email}
                  </p>
                </div>
              </div>

              {/* Right Section - Role, Status, Actions */}
              <div className="flex shrink-0 items-center gap-4">
                {/* Role Badge */}
                <div className="hidden sm:block">
                  <RoleBadge role={member.role} />
                </div>

                {/* Status */}
                <div className="hidden md:block">
                  {member.status === "invited" ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700 ring-1 ring-inset ring-amber-600/20">
                      <Mail className="h-3 w-3" />
                      Invited
                    </span>
                  ) : (
                    <span className="text-sm text-slate-500">
                      {member.joinedAt}
                    </span>
                  )}
                </div>

                {/* Actions Dropdown */}
                {canManage && (
                  <div className="relative">
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === member.id ? null : member.id
                        )
                      }
                      className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-900"
                    >
                      <MoreVertical className="h-4 w-4" />
                    </button>

                    {activeDropdown === member.id && (
                      <>
                        <div
                          className="fixed inset-0 z-10"
                          onClick={() => setActiveDropdown(null)}
                        />
                        <div className="absolute right-0 top-full z-20 mt-1 w-48 rounded-lg border border-slate-200 bg-white p-1 shadow-xl">
                          {canManageRoles && (
                            <button
                              onClick={() => {
                                onChangeRole(member);
                                setActiveDropdown(null);
                              }}
                              className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-700 transition-colors hover:bg-slate-50"
                            >
                              <Shield className="h-4 w-4" />
                              Change Role
                            </button>
                          )}

                          {member.status === "invited" && (
                            <button
                              onClick={() => {
                                onResendInvite(member);
                                setActiveDropdown(null);
                              }}
                              className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-700 transition-colors hover:bg-slate-50"
                            >
                              <Mail className="h-4 w-4" />
                              Resend Invite
                            </button>
                          )}

                          {canRemoveMembers && (
                            <>
                              <div className="my-1 h-px bg-slate-200" />
                              <button
                                onClick={() => {
                                  onRemoveMember(member);
                                  setActiveDropdown(null);
                                }}
                                className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-red-600 transition-colors hover:bg-red-50"
                              >
                                <UserX className="h-4 w-4" />
                                Remove Member
                              </button>
                            </>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                )}

                {!canManage && isCurrentUser && (
                  <div className="w-10" /> // Spacer for alignment
                )}
              </div>
            </div>

            {/* Mobile: Role and Status */}
            <div className="mt-3 flex items-center gap-3 sm:hidden">
              <RoleBadge role={member.role} size="sm" />
              {member.status === "invited" && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2 py-0.5 text-xs font-semibold text-amber-700">
                  <Mail className="h-3 w-3" />
                  Invited
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
