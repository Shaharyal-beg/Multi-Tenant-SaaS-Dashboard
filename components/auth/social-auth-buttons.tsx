export function SocialAuthButtons() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <button
        type="button"
        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M22.5 12.24c0-.82-.07-1.4-.23-2H12v3.9h6.03c-.12.97-.76 2.42-2.2 3.4l-.02.13 3.24 2.46.22.02c2.03-1.84 3.23-4.55 3.23-7.91Z"
            fill="#4285F4"
          />
          <path
            d="M12 22.75c2.95 0 5.43-.95 7.24-2.6l-3.44-2.6c-.92.63-2.16 1.08-3.8 1.08-2.89 0-5.33-1.85-6.2-4.42l-.13.01-3.37 2.56-.05.12A10.95 10.95 0 0 0 12 22.75Z"
            fill="#34A853"
          />
          <path
            d="M5.8 14.21A6.66 6.66 0 0 1 5.44 12c0-.77.14-1.5.35-2.2l-.01-.15-3.41-2.6-.11.05A10.71 10.71 0 0 0 1.2 12c0 1.72.42 3.35 1.16 4.8l3.44-2.6Z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.37c2.03 0 3.39.86 4.17 1.57l3.05-2.9C17.42 2.4 14.95 1.25 12 1.25 7.74 1.25 4.06 3.62 2.25 7.1l3.52 2.7c.88-2.57 3.32-4.43 6.23-4.43Z"
            fill="#EB4335"
          />
        </svg>
        Continue with Google
      </button>

      <button
        type="button"
        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 .75A11.25 11.25 0 0 0 .75 12a11.25 11.25 0 0 0 7.69 10.68c.56.1.77-.24.77-.54 0-.27-.01-.98-.02-1.92-3.12.67-3.78-1.48-3.78-1.48-.5-1.26-1.24-1.6-1.24-1.6-1.02-.69.08-.67.08-.67 1.12.08 1.7 1.13 1.7 1.13 1 .1 1.95-.7 2.43-1.08.1-.7.39-1.18.7-1.45-2.49-.28-5.1-1.23-5.1-5.48 0-1.21.44-2.2 1.15-2.98-.11-.28-.5-1.42.11-2.95 0 0 .95-.3 3.11 1.13a10.97 10.97 0 0 1 5.66 0c2.16-1.42 3.1-1.13 3.1-1.13.62 1.53.23 2.67.12 2.95.72.78 1.15 1.77 1.15 2.98 0 4.26-2.62 5.2-5.13 5.47.4.35.76 1.02.76 2.08 0 1.49-.01 2.7-.01 3.06 0 .3.2.65.78.54A11.25 11.25 0 0 0 23.25 12 11.25 11.25 0 0 0 12 .75Z" />
        </svg>
        Continue with GitHub
      </button>
    </div>
  );
}