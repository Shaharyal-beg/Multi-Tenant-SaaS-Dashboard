import type { InputHTMLAttributes } from "react";

type AuthInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export function AuthInput({
  id,
  label,
  error,
  className,
  ...props
}: AuthInputProps) {
  return (
    <div className="space-y-2">
      <div className="group relative">
        <input
          id={id}
          placeholder=" "
          className={[
            "peer w-full rounded-2xl border bg-white/70 px-4 pb-3 pt-6 text-sm text-slate-900 outline-none transition duration-200",
            "placeholder:text-transparent focus:bg-white",
            error
              ? "border-rose-300 ring-2 ring-rose-100"
              : "border-slate-200 focus:border-teal-400 focus:ring-4 focus:ring-teal-100",
            className ?? "",
          ].join(" ")}
          {...props}
        />
        <label
          htmlFor={id}
          className="pointer-events-none absolute left-4 top-2 text-xs font-medium uppercase tracking-[0.16em] text-slate-500 transition peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-[0.16em] peer-focus:text-teal-700"
        >
          {label}
        </label>
      </div>
      {error ? <p className="text-xs font-medium text-rose-600">{error}</p> : null}
    </div>
  );
}