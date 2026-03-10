// Proprietary signal-routing SVG visual for Client Growth hero
export default function SignalRoutingSVG() {
  return (
    <svg width="420" height="420" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#18181b" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#09090b" stopOpacity="0.7" />
        </radialGradient>
        <linearGradient id="emeraldPath" x1="0" y1="0" x2="420" y2="420">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      {/* Background glow */}
      <circle cx="210" cy="210" r="200" fill="url(#bgGlow)" />
      {/* Signal routing path */}
      <path
        d="M60 320 Q120 180 210 210 Q300 240 360 100"
        stroke="url(#emeraldPath)"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
      {/* Subtle nodes */}
      <circle cx="60" cy="320" r="8" fill="#34d399" opacity="0.7" />
      <circle cx="210" cy="210" r="10" fill="#10b981" opacity="0.8" />
      <circle cx="360" cy="100" r="7" fill="#34d399" opacity="0.7" />
      {/* Signature pulse */}
      <ellipse cx="210" cy="210" rx="24" ry="8" fill="#10b981" opacity="0.12" />
    </svg>
  );
}
