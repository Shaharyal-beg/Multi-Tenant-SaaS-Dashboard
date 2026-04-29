"use client";

import { useEffect } from "react";
import { X, CheckCircle, AlertCircle, Info } from "lucide-react";

type ToastType = "success" | "error" | "info";

type ToastProps = {
  message: string;
  type?: ToastType;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
};

const toastConfig: Record<
  ToastType,
  { icon: typeof CheckCircle; colors: string }
> = {
  success: {
    icon: CheckCircle,
    colors: "bg-emerald-50 border-emerald-200 text-emerald-900",
  },
  error: {
    icon: AlertCircle,
    colors: "bg-red-50 border-red-200 text-red-900",
  },
  info: {
    icon: Info,
    colors: "bg-blue-50 border-blue-200 text-blue-900",
  },
};

export function Toast({
  message,
  type = "success",
  isVisible,
  onClose,
  duration = 3000,
}: ToastProps) {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  const config = toastConfig[type];
  const Icon = config.icon;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-6 sm:px-6 sm:pb-8">
      <div
        className={`pointer-events-auto flex max-w-md items-center gap-3 rounded-xl border px-5 py-4 shadow-lg ${config.colors}`}
        style={{
          animation: "toast-enter 300ms cubic-bezier(0.22, 1, 0.36, 1) both",
        }}
      >
        <Icon className="h-5 w-5 shrink-0" />
        <p className="flex-1 text-sm font-medium">{message}</p>
        <button
          onClick={onClose}
          className="shrink-0 rounded-lg p-1 transition-colors hover:bg-black/5"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
