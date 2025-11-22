// --- Component: BrandMark (inline SVG) ---
"use client";

type BrandMarkProps = {
  className?: string;
  title?: string;
};

export function BrandMark({ className, title }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 96 96"
      role="img"
      aria-label={title ?? "ReinforceLab logomark"}
      className={`text-white ${className ?? ""}`}
    >
      <defs>
        <linearGradient
          id="rl-grad"
          x1="10"
          y1="10"
          x2="86"
          y2="86"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#6B5BFF" />
          <stop offset="0.5" stopColor="#00D6B5" />
          <stop offset="1" stopColor="#6B5BFF" />
        </linearGradient>
      </defs>
      <rect
        x="10"
        y="10"
        width="76"
        height="76"
        rx="22"
        fill="url(#rl-grad)"
        opacity="0.9"
      />
      <path
        d="M32 54c0-12 8.5-24 16-24s16 12 16 24-8.5 20-16 20c-4.5 0-9-2.5-12-6"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 44c4-6 9-10 16-10s12 4 16 10"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
      <circle cx="48" cy="38" r="4" fill="white" />
    </svg>
  );
}
