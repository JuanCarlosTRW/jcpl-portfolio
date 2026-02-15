"use client";

interface ImagePlaceholderProps {
  label?: string;
  icon?: string;
  aspect?: "video" | "square" | "portrait";
  variant?: "default" | "before" | "after";
  className?: string;
}

const aspectMap = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[4/5]",
};

export default function ImagePlaceholder({
  label = "Image placeholder",
  icon,
  aspect = "video",
  variant = "default",
  className = "",
}: ImagePlaceholderProps) {
  const isAfter = variant === "after";

  return (
    <div
      className={`
        relative overflow-hidden rounded-xl
        ${aspectMap[aspect]}
        flex flex-col items-center justify-center gap-3
        bg-white/[0.02] border
        ${isAfter ? "border-[var(--brand-accent)]/15" : "border-white/5"}
        ${className}
      `}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--text-muted) 1px, transparent 1px), linear-gradient(90deg, var(--text-muted) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Accent glow for "after" variant */}
      {isAfter && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--brand-accent)_0%,transparent_70%)] opacity-[0.04]" />
      )}

      <div className="relative z-10 flex flex-col items-center gap-2">
        {icon ? (
          <span className="text-4xl select-none" aria-hidden="true">
            {icon}
          </span>
        ) : (
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            className={isAfter ? "text-[var(--brand-alt)]" : "text-[var(--text-muted)]"}
            aria-hidden="true"
          >
            <rect
              x="4"
              y="8"
              width="32"
              height="24"
              rx="3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeOpacity="0.4"
            />
            <circle cx="14" cy="17" r="3" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" />
            <path
              d="M4 26l8-6 5 4 7-8 12 10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeOpacity="0.4"
              strokeLinejoin="round"
            />
          </svg>
        )}
        <span
          className={`text-xs tracking-wide ${
            isAfter ? "text-[var(--brand-alt)]/50" : "text-[var(--text-muted)]/60"
          }`}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
