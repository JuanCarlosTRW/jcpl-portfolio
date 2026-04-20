"use client";

export default function Mock1TrafficDiagnosis() {
  return (
    <div
      className="absolute inset-0 rounded-[12px] overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, rgba(30,26,20,0.92) 0%, rgba(40,33,22,0.92) 100%)",
        border: "1px solid rgba(212, 168, 83, 0.12)",
      }}
    >
      <div className="absolute inset-0 p-5 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div
            className="text-[10px] font-medium tracking-[0.16em] uppercase"
            style={{ color: "var(--text-muted, #A69D8D)" }}
          >
            Funnel Diagnostic
          </div>
          <div
            className="px-2 py-0.5 rounded-full text-[10px] font-medium"
            style={{
              background: "rgba(212, 168, 83, 0.14)",
              color: "var(--brand-accent)",
              border: "1px solid rgba(212, 168, 83, 0.28)",
            }}
          >
            Live
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <StatTile label="Qualified calls" value="47" delta="+32%" />
          <StatTile label="Cost / call" value="$33" delta="−18%" />
        </div>

        <div className="relative flex-1 rounded-[10px] p-3" style={{
          background: "rgba(13, 11, 9, 0.55)",
          border: "1px solid rgba(212, 168, 83, 0.08)",
        }}>
          <div className="absolute inset-0 p-3">
            <svg
              viewBox="0 0 200 80"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <defs>
                <linearGradient id="spark-fill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#D4A853" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#D4A853" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,62 C20,58 40,55 60,48 C80,41 100,38 120,28 C140,20 160,18 180,12 L200,8"
                fill="none"
                stroke="#D4A853"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M0,62 C20,58 40,55 60,48 C80,41 100,38 120,28 C140,20 160,18 180,12 L200,8 L200,80 L0,80 Z"
                fill="url(#spark-fill)"
              />
              <circle cx="180" cy="12" r="3" fill="#D4A853" />
              <circle cx="180" cy="12" r="6" fill="#D4A853" fillOpacity="0.2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatTile({
  label,
  value,
  delta,
}: {
  label: string;
  value: string;
  delta: string;
}) {
  return (
    <div
      className="rounded-[10px] px-3 py-2.5"
      style={{
        background: "rgba(13, 11, 9, 0.55)",
        border: "1px solid rgba(212, 168, 83, 0.10)",
      }}
    >
      <div
        className="text-[10px] tracking-wide uppercase mb-1"
        style={{ color: "var(--text-muted, #A69D8D)" }}
      >
        {label}
      </div>
      <div className="flex items-baseline gap-2">
        <span
          className="font-serif text-[22px] leading-none"
          style={{ color: "var(--text-primary)" }}
        >
          {value}
        </span>
        <span
          className="text-[10px] font-medium"
          style={{ color: "var(--brand-accent)" }}
        >
          {delta}
        </span>
      </div>
    </div>
  );
}
