"use client";

import { Check, CreditCard, Download, Calendar } from "lucide-react";

type Plan = {
  name: string;
  price: number;
  interval: "month" | "year";
  features: string[];
  current: boolean;
};

const plans: Plan[] = [
  {
    name: "Free",
    price: 0,
    interval: "month",
    features: [
      "Up to 3 team members",
      "Basic analytics",
      "5GB storage",
      "Email support",
    ],
    current: true,
  },
  {
    name: "Pro",
    price: 29,
    interval: "month",
    features: [
      "Up to 20 team members",
      "Advanced analytics",
      "50GB storage",
      "Priority support",
      "Custom integrations",
    ],
    current: false,
  },
  {
    name: "Enterprise",
    price: 99,
    interval: "month",
    features: [
      "Unlimited team members",
      "Full analytics suite",
      "Unlimited storage",
      "24/7 phone support",
      "Custom integrations",
      "SLA guarantee",
    ],
    current: false,
  },
];

export function BillingSettings() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Billing & Subscription
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Manage your subscription plan and payment methods
        </p>
      </div>

      {/* Current Plan */}
      <div className="rounded-xl border border-teal-200 bg-gradient-to-r from-teal-50 to-cyan-50 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-slate-900">
                Free Plan
              </h3>
              <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-700">
                Current Plan
              </span>
            </div>
            <p className="mt-1 text-sm text-slate-600">
              You're on the free plan. Upgrade for more features and capacity.
            </p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-slate-900">$0</div>
            <div className="text-sm text-slate-600">/month</div>
          </div>
        </div>
      </div>

      {/* Available Plans */}
      <div>
        <h3 className="mb-4 text-lg font-semibold text-slate-900">
          Available Plans
        </h3>
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border-2 p-6 transition-all ${
                plan.current
                  ? "border-teal-500 bg-teal-50/50 ring-2 ring-teal-500/20"
                  : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg"
              }`}
            >
              <div className="mb-4">
                <h4 className="text-xl font-bold text-slate-900">
                  {plan.name}
                </h4>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900">
                    ${plan.price}
                  </span>
                  <span className="text-slate-600">/{plan.interval}</span>
                </div>
              </div>

              <ul className="mb-6 space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                disabled={plan.current}
                className={`w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition-all ${
                  plan.current
                    ? "cursor-not-allowed bg-slate-100 text-slate-400"
                    : "bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-sm hover:shadow-md hover:brightness-110"
                }`}
              >
                {plan.current ? "Current Plan" : "Upgrade"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Method */}
      <div className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-semibold text-slate-900">
          Payment Method
        </h3>
        <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 p-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600">
              <CreditCard className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="font-semibold text-slate-900">
                No payment method
              </div>
              <p className="text-sm text-slate-600">
                Add a payment method to upgrade
              </p>
            </div>
          </div>
          <button className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-all hover:bg-slate-50">
            Add Card
          </button>
        </div>
      </div>

      {/* Billing History */}
      <div className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">
            Billing History
          </h3>
          <button className="inline-flex items-center gap-2 text-sm font-medium text-teal-600 transition-colors hover:text-teal-700">
            <Download className="h-4 w-4" />
            Download All
          </button>
        </div>

        <div className="space-y-3">
          {[
            {
              date: "Apr 1, 2024",
              amount: "$0.00",
              status: "Free Plan",
              invoice: null,
            },
            {
              date: "Mar 1, 2024",
              amount: "$0.00",
              status: "Free Plan",
              invoice: null,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 p-4"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-200">
                  <Calendar className="h-5 w-5 text-slate-600" />
                </div>
                <div>
                  <div className="font-medium text-slate-900">{item.date}</div>
                  <div className="text-sm text-slate-600">{item.status}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-slate-900">
                  {item.amount}
                </div>
                {item.invoice && (
                  <button className="text-sm text-teal-600 hover:text-teal-700">
                    Download
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
