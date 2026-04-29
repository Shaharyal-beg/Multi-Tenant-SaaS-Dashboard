type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className = "h-9 w-9" }: LogoMarkProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="14" fill="url(#saasify-gradient)" />
      <path
        d="M11 24.7V14.2C11 12.985 11.985 12 13.2 12H18.9C22.8212 12 26 15.1788 26 19.1C26 23.0212 22.8212 26.2 18.9 26.2H13.2C11.985 26.2 11 25.215 11 24.7Z"
        fill="white"
        fillOpacity="0.98"
      />
      <path
        d="M18.6 15.5H15.1V22.6H18.6C20.5606 22.6 22.15 21.0106 22.15 19.05C22.15 17.0894 20.5606 15.5 18.6 15.5Z"
        fill="#0F172A"
        fillOpacity="0.18"
      />
      <path d="M24.5 10.5L30 16" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M24.5 16L30 10.5" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
      <defs>
        <linearGradient
          id="saasify-gradient"
          x1="4"
          y1="4"
          x2="36"
          y2="36"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#14B8A6" />
          <stop offset="0.5" stopColor="#0F766E" />
          <stop offset="1" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>
    </svg>
  );
}