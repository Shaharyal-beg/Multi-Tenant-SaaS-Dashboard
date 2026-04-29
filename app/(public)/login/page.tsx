"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";

import { AuthInput } from "@/components/auth/auth-input";
import { AuthShell } from "@/components/auth/auth-shell";
import { SocialAuthButtons } from "@/components/auth/social-auth-buttons";

type LoginErrors = {
  email?: string;
  password?: string;
};

function validateLogin(email: string, password: string): LoginErrors {
  const errors: LoginErrors = {};

  if (!email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!password.trim()) {
    errors.password = "Password is required.";
  }

  return errors;
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showErrors, setShowErrors] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const errors = useMemo(() => validateLogin(email, password), [email, password]);
  const hasErrors = Boolean(errors.email || errors.password);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setShowErrors(true);
    setSubmitMessage("");

    if (hasErrors) {
      setSubmitMessage("Please fix the highlighted fields and try again.");
      return;
    }

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 900));

    setIsSubmitting(false);
    setSubmitMessage("Demo mode: connect this form to your auth API.");
  }

  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to continue managing your workspace, products, and team operations."
      footerPrompt="Don't have an account?"
      footerLinkText="Create one"
      footerLinkHref="/signup"
    >
      <form className="space-y-5" onSubmit={handleSubmit} noValidate>
        <SocialAuthButtons />

        <div className="flex items-center gap-3 py-1">
          <div className="h-px flex-1 bg-slate-200" />
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">or continue with email</span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <AuthInput
          id="login-email"
          type="email"
          autoComplete="email"
          label="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          error={showErrors ? errors.email : undefined}
          required
        />

        <AuthInput
          id="login-password"
          type="password"
          autoComplete="current-password"
          label="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          error={showErrors ? errors.password : undefined}
          required
        />

        <div className="flex items-center justify-between gap-3 text-sm">
          <label className="inline-flex items-center gap-2 text-slate-600">
            <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500" />
            Remember me
          </label>
          <Link
            href="#"
            className="font-medium text-slate-700 underline decoration-slate-300 underline-offset-4 transition hover:text-slate-950 hover:decoration-slate-500"
          >
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white shadow-[0_20px_60px_-28px_rgba(15,23,42,0.95)] transition duration-200 hover:-translate-y-0.5 hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              Signing in...
            </>
          ) : (
            "Sign In"
          )}
        </button>

        <p aria-live="polite" className="min-h-5 text-center text-xs font-medium text-rose-600 sm:text-left">
          {submitMessage}
        </p>
      </form>
    </AuthShell>
  );
}
