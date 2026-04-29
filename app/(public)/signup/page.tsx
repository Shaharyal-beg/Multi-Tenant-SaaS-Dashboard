"use client";

import { FormEvent, useMemo, useState } from "react";

import { AuthInput } from "@/components/auth/auth-input";
import { AuthShell } from "@/components/auth/auth-shell";
import { SocialAuthButtons } from "@/components/auth/social-auth-buttons";

type SignupErrors = {
  fullName?: string;
  email?: string;
  organization?: string;
  password?: string;
  confirmPassword?: string;
};

function getPasswordStrength(password: string): number {
  if (!password) {
    return 0;
  }

  let score = 0;
  if (password.length >= 8) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;

  return score;
}

function validateSignup(fields: {
  fullName: string;
  email: string;
  organization: string;
  password: string;
  confirmPassword: string;
}): SignupErrors {
  const errors: SignupErrors = {};

  if (!fields.fullName.trim()) {
    errors.fullName = "Full name is required.";
  }

  if (!fields.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!fields.organization.trim()) {
    errors.organization = "Organization name is required.";
  }

  if (!fields.password) {
    errors.password = "Password is required.";
  } else if (fields.password.length < 8) {
    errors.password = "Use at least 8 characters.";
  }

  if (!fields.confirmPassword) {
    errors.confirmPassword = "Please confirm your password.";
  } else if (fields.confirmPassword !== fields.password) {
    errors.confirmPassword = "Passwords do not match.";
  }

  return errors;
}

const strengthLabel = ["Very weak", "Weak", "Fair", "Good", "Strong"];

export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showErrors, setShowErrors] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const errors = useMemo(
    () =>
      validateSignup({
        fullName,
        email,
        organization,
        password,
        confirmPassword,
      }),
    [fullName, email, organization, password, confirmPassword],
  );

  const passwordStrength = getPasswordStrength(password);
  const hasErrors = Boolean(
    errors.fullName || errors.email || errors.organization || errors.password || errors.confirmPassword,
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setShowErrors(true);
    setSubmitMessage("");

    if (hasErrors) {
      setSubmitMessage("Please resolve the highlighted fields to continue.");
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitMessage("Demo mode: wire this form to your organization onboarding API.");
  }

  return (
    <AuthShell
      title="Create your workspace"
      subtitle="Set up your account and organization to start managing products, teams, and analytics."
      footerPrompt="Already have an account?"
      footerLinkText="Sign in"
      footerLinkHref="/login"
    >
      <form className="space-y-5" onSubmit={handleSubmit} noValidate>
        <SocialAuthButtons />

        <div className="grid gap-5 sm:grid-cols-2">
          <AuthInput
            id="signup-name"
            type="text"
            autoComplete="name"
            label="Full name"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            error={showErrors ? errors.fullName : undefined}
            required
          />

          <AuthInput
            id="signup-email"
            type="email"
            autoComplete="email"
            label="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            error={showErrors ? errors.email : undefined}
            required
          />
        </div>

        <AuthInput
          id="signup-organization"
          type="text"
          autoComplete="organization"
          label="Organization name"
          value={organization}
          onChange={(event) => setOrganization(event.target.value)}
          error={showErrors ? errors.organization : undefined}
          required
        />

        <AuthInput
          id="signup-password"
          type="password"
          autoComplete="new-password"
          label="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          error={showErrors ? errors.password : undefined}
          required
        />

        <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-3">
          <div className="mb-2 flex items-center justify-between text-xs font-medium text-slate-600">
            <span>Password strength</span>
            <span>{strengthLabel[passwordStrength]}</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((bar) => (
              <div
                key={bar}
                className={[
                  "h-2 rounded-full transition",
                  passwordStrength >= bar
                    ? passwordStrength <= 1
                      ? "bg-rose-400"
                      : passwordStrength === 2
                        ? "bg-amber-400"
                        : passwordStrength === 3
                          ? "bg-sky-400"
                          : "bg-emerald-500"
                    : "bg-slate-200",
                ].join(" ")}
              />
            ))}
          </div>
        </div>

        <AuthInput
          id="signup-confirm-password"
          type="password"
          autoComplete="new-password"
          label="Confirm password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          error={showErrors ? errors.confirmPassword : undefined}
          required
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white shadow-[0_20px_60px_-28px_rgba(15,23,42,0.95)] transition duration-200 hover:-translate-y-0.5 hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              Creating account...
            </>
          ) : (
            "Create Account"
          )}
        </button>

        <p aria-live="polite" className="min-h-5 text-center text-xs font-medium text-rose-600 sm:text-left">
          {submitMessage}
        </p>
      </form>
    </AuthShell>
  );
}
