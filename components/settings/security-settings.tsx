"use client";

import { useState } from "react";
import { Shield, Smartphone, Monitor, LogOut, Check } from "lucide-react";

type Session = {
  id: string;
  device: string;
  location: string;
  lastActive: string;
  isCurrent: boolean;
};

const mockSessions: Session[] = [
  {
    id: "1",
    device: "Chrome on macOS",
    location: "San Francisco, CA",
    lastActive: "Active now",
    isCurrent: true,
  },
  {
    id: "2",
    device: "Safari on iPhone",
    location: "San Francisco, CA",
    lastActive: "2 hours ago",
    isCurrent: false,
  },
  {
    id: "3",
    device: "Firefox on Windows",
    location: "New York, NY",
    lastActive: "1 day ago",
    isCurrent: false,
  },
];

export function SecuritySettings() {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [sessions, setSessions] = useState(mockSessions);

  const handleLogoutAll = () => {
    setSessions(sessions.filter((s) => s.isCurrent));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Security Settings
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Manage your account security and authentication
        </p>
      </div>

      {/* Two-Factor Authentication */}
      <div className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600">
                <Smartphone className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Two-Factor Authentication
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Add an extra layer of security to your account
                </p>
              </div>
            </div>

            {twoFactorEnabled && (
              <div className="mt-4 rounded-lg bg-emerald-50 p-4">
                <div className="flex items-center gap-2 text-emerald-700">
                  <Check className="h-4 w-4" />
                  <span className="text-sm font-semibold">
                    Two-factor authentication is enabled
                  </span>
                </div>
                <p className="mt-1 text-xs text-emerald-600">
                  Your account is protected with an additional security layer
                </p>
              </div>
            )}
          </div>

          <label className="relative inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              checked={twoFactorEnabled}
              onChange={(e) => setTwoFactorEnabled(e.target.checked)}
              className="peer sr-only"
            />
            <div className="peer h-6 w-11 rounded-full bg-slate-300 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-gradient-to-r peer-checked:from-teal-600 peer-checked:to-cyan-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-teal-500/20"></div>
          </label>
        </div>
      </div>

      {/* Active Sessions */}
      <div className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Active Sessions
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Manage devices where you're currently signed in
            </p>
          </div>
          <button
            onClick={handleLogoutAll}
            className="inline-flex items-center gap-2 rounded-lg border border-red-300 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 transition-all hover:bg-red-100"
          >
            <LogOut className="h-4 w-4" />
            Logout All
          </button>
        </div>

        <div className="space-y-3">
          {sessions.map((session) => (
            <div
              key={session.id}
              className={`rounded-lg border p-4 transition-all ${
                session.isCurrent
                  ? "border-teal-200 bg-teal-50/50"
                  : "border-slate-200 bg-slate-50/50 hover:bg-slate-100"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                      session.isCurrent
                        ? "bg-teal-100"
                        : "bg-slate-200"
                    }`}
                  >
                    <Monitor
                      className={`h-5 w-5 ${
                        session.isCurrent
                          ? "text-teal-600"
                          : "text-slate-600"
                      }`}
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-slate-900">
                        {session.device}
                      </h4>
                      {session.isCurrent && (
                        <span className="rounded-full bg-teal-100 px-2 py-0.5 text-xs font-semibold text-teal-700">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-slate-600">
                      {session.location}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">
                      {session.lastActive}
                    </p>
                  </div>
                </div>

                {!session.isCurrent && (
                  <button className="text-sm font-medium text-red-600 transition-colors hover:text-red-700">
                    Revoke
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Security Recommendations */}
      <div className="rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50 p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100">
            <Shield className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-blue-900">
              Security Recommendations
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-blue-700">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                Enable two-factor authentication for enhanced security
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                Use a strong, unique password
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                Review active sessions regularly
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
