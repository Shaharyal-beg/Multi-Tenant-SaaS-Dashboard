"use client";

import { useState } from "react";
import { UserPlus, Users as UsersIcon, UserCheck, Clock } from "lucide-react";
import { TeamMembersList, TeamMember } from "@/components/team/team-members-list";
import { InviteMemberModal } from "@/components/team/invite-member-modal";
import {
  ChangeRoleModal,
  RemoveMemberModal,
} from "@/components/team/confirmation-modals";
import { UserRole } from "@/components/team/role-badge";
import { Toast } from "@/components/team/toast";

// Mock data - replace with real API calls
const mockMembers: TeamMember[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@acmecorp.com",
    role: "owner",
    status: "active",
    joinedAt: "Jan 2024",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah@acmecorp.com",
    role: "admin",
    status: "active",
    joinedAt: "Feb 2024",
  },
  {
    id: "3",
    name: "Michael Chen",
    email: "michael@acmecorp.com",
    role: "member",
    status: "active",
    joinedAt: "Mar 2024",
  },
  {
    id: "4",
    name: "Emily Rodriguez",
    email: "emily@acmecorp.com",
    role: "member",
    status: "active",
    joinedAt: "Mar 2024",
  },
  {
    id: "5",
    name: "David Park",
    email: "david@acmecorp.com",
    role: "viewer",
    status: "active",
    joinedAt: "Apr 2024",
  },
  {
    id: "6",
    name: "Lisa Anderson",
    email: "lisa@acmecorp.com",
    role: "member",
    status: "invited",
    joinedAt: "Invited 2d ago",
  },
];

export default function TeamPage() {
  const [members, setMembers] = useState<TeamMember[]>(mockMembers);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [isChangeRoleModalOpen, setIsChangeRoleModalOpen] = useState(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  
  // Toast state
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error" | "info";
    isVisible: boolean;
  }>({
    message: "",
    type: "success",
    isVisible: false,
  });

  // Current user (mock - replace with real auth)
  const currentUserId = "1";
  const currentUserRole: UserRole = "owner";

  const showToast = (message: string, type: "success" | "error" | "info" = "success") => {
    setToast({ message, type, isVisible: true });
  };

  const handleInviteMember = (email: string, role: UserRole) => {
    const newMember: TeamMember = {
      id: String(members.length + 1),
      name: email.split("@")[0],
      email,
      role,
      status: "invited",
      joinedAt: "Just now",
    };
    setMembers([...members, newMember]);
    showToast(`Invitation sent to ${email}`);
  };

  const handleChangeRole = (member: TeamMember) => {
    setSelectedMember(member);
    setIsChangeRoleModalOpen(true);
  };

  const handleConfirmRoleChange = (newRole: UserRole) => {
    if (selectedMember) {
      setMembers(
        members.map((m) =>
          m.id === selectedMember.id ? { ...m, role: newRole } : m
        )
      );
      showToast(
        `${selectedMember.name}'s role updated to ${newRole.charAt(0).toUpperCase() + newRole.slice(1)}`
      );
    }
  };

  const handleRemoveMember = (member: TeamMember) => {
    setSelectedMember(member);
    setIsRemoveModalOpen(true);
  };

  const handleConfirmRemove = () => {
    if (selectedMember) {
      setMembers(members.filter((m) => m.id !== selectedMember.id));
      showToast(`${selectedMember.name} has been removed from the team`, "info");
    }
  };

  const handleResendInvite = (member: TeamMember) => {
    showToast(`Invitation resent to ${member.email}`);
  };

  // Calculate stats
  const stats = {
    total: members.length,
    active: members.filter((m) => m.status === "active").length,
    invited: members.filter((m) => m.status === "invited").length,
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div
        className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        style={{
          animation: "hero-enter 600ms cubic-bezier(0.22, 1, 0.36, 1) both",
        }}
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Team
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Manage your organization members and permissions
          </p>
        </div>

        <button
          onClick={() => setIsInviteModalOpen(true)}
          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-teal-600 to-cyan-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-md hover:brightness-110"
        >
          <UserPlus className="h-4 w-4" />
          Invite Member
        </button>
      </div>

      {/* Stats Cards */}
      <div
        className="grid gap-4 sm:grid-cols-3"
        style={{
          animation: "reveal-up-enter 600ms cubic-bezier(0.22, 1, 0.36, 1) both",
          animationDelay: "100ms",
        }}
      >
        <div className="overflow-hidden rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600">
              <UsersIcon className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-sm font-medium text-slate-600">
                Total Members
              </div>
              <div className="mt-1 text-3xl font-bold text-slate-900">
                {stats.total}
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600">
              <UserCheck className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-sm font-medium text-slate-600">Active</div>
              <div className="mt-1 text-3xl font-bold text-emerald-600">
                {stats.active}
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-sm font-medium text-slate-600">Pending</div>
              <div className="mt-1 text-3xl font-bold text-amber-600">
                {stats.invited}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Members List */}
      <div
        style={{
          animation: "reveal-up-enter 600ms cubic-bezier(0.22, 1, 0.36, 1) both",
          animationDelay: "200ms",
        }}
      >
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-slate-900">
            Team Members
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            {stats.active} active member{stats.active !== 1 ? "s" : ""} in your
            organization
          </p>
        </div>

        <TeamMembersList
          members={members}
          currentUserRole={currentUserRole}
          currentUserId={currentUserId}
          onChangeRole={handleChangeRole}
          onRemoveMember={handleRemoveMember}
          onResendInvite={handleResendInvite}
        />
      </div>

      {/* Role Permissions Info */}
      <div
        className="rounded-xl border border-blue-200/80 bg-gradient-to-r from-blue-50 to-cyan-50 p-6"
        style={{
          animation: "reveal-up-enter 600ms cubic-bezier(0.22, 1, 0.36, 1) both",
          animationDelay: "300ms",
        }}
      >
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-900">
          Role Permissions
        </h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-1 font-semibold text-slate-900">Owner</div>
            <p className="text-sm text-slate-600">
              Full access to all features and settings
            </p>
          </div>
          <div>
            <div className="mb-1 font-semibold text-slate-900">Admin</div>
            <p className="text-sm text-slate-600">
              Can manage members, products, and team data
            </p>
          </div>
          <div>
            <div className="mb-1 font-semibold text-slate-900">Member</div>
            <p className="text-sm text-slate-600">
              Can view and edit products and team data
            </p>
          </div>
          <div>
            <div className="mb-1 font-semibold text-slate-900">Viewer</div>
            <p className="text-sm text-slate-600">
              Read-only access to all data
            </p>
          </div>
        </div>
      </div>

      {/* Modals */}
      <InviteMemberModal
        isOpen={isInviteModalOpen}
        onClose={() => setIsInviteModalOpen(false)}
        onInvite={handleInviteMember}
        currentUserRole={currentUserRole}
      />

      <ChangeRoleModal
        isOpen={isChangeRoleModalOpen}
        member={selectedMember}
        onClose={() => {
          setIsChangeRoleModalOpen(false);
          setSelectedMember(null);
        }}
        onConfirm={handleConfirmRoleChange}
        currentUserRole={currentUserRole}
      />

      <RemoveMemberModal
        isOpen={isRemoveModalOpen}
        member={selectedMember}
        onClose={() => {
          setIsRemoveModalOpen(false);
          setSelectedMember(null);
        }}
        onConfirm={handleConfirmRemove}
      />

      {/* Toast Notification */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={() => setToast({ ...toast, isVisible: false })}
      />
    </div>
  );
}
