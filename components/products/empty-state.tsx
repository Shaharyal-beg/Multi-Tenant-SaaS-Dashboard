"use client";

import { Package, Plus } from "lucide-react";

type EmptyStateProps = {
  onAddProduct: () => void;
};

export function EmptyState({ onAddProduct }: EmptyStateProps) {
  return (
    <div
      className="flex min-h-[500px] items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50/50 p-12"
      style={{
        animation: "reveal-up-enter 600ms cubic-bezier(0.22, 1, 0.36, 1) both",
      }}
    >
      <div className="max-w-md text-center">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200">
          <Package className="h-10 w-10 text-slate-400" />
        </div>

        {/* Text */}
        <h3 className="mb-2 text-xl font-semibold text-slate-900">
          No products yet
        </h3>
        <p className="mb-6 text-sm leading-relaxed text-slate-600">
          Get started by adding your first product. You can manage inventory,
          pricing, and track sales all in one place.
        </p>

        {/* CTA Button */}
        <button
          onClick={onAddProduct}
          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-teal-600 to-cyan-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-md hover:brightness-110"
        >
          <Plus className="h-4 w-4" />
          Add Your First Product
        </button>

        {/* Features List */}
        <div className="mt-10 space-y-3 text-left">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100">
              <svg
                className="h-3 w-3 text-teal-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900">
                Track inventory in real-time
              </p>
              <p className="text-xs text-slate-500">
                Monitor stock levels and get low-stock alerts
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100">
              <svg
                className="h-3 w-3 text-teal-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900">
                Organize by category
              </p>
              <p className="text-xs text-slate-500">
                Group products for easy management
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100">
              <svg
                className="h-3 w-3 text-teal-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900">
                Multi-currency support
              </p>
              <p className="text-xs text-slate-500">
                Sell globally with automatic conversion
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
