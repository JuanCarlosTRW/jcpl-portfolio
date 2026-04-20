"use client";

export default function Mock2QualifiedCalls() {
  return (
    <div
      className="absolute inset-0 rounded-[12px] overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, rgba(30,26,20,0.92) 0%, rgba(40,33,22,0.92) 100%)",
        border: "1px solid rgba(212, 168, 83, 0.12)",
      }}
    >
      <div className="absolute inset-0 p-5 flex flex-col gap-3">
        <div
          className="text-[10px] font-medium tracking-[0.16em] uppercase"
          style={{ color: "var(--text-muted, #A69D8D)" }}
        >
          Incoming · Last 24h
        </div>

        <CallRow name="Kitchener, ON" number="(519) 555-0104" tag="Qualified" highlight />
        <CallRow name="Mississauga, ON" number="(905) 555-0188" tag="Qualified" />
        <CallRow name="Barrie, ON" number="(705) 555-0122" tag="Booked" />
        <CallRow name="London, ON" number="(519) 555-0167" tag="Qualified" />
      </div>
    </div>
  );
}

function CallRow({
  name,
  number,
  tag,
  highlight = false,
}: {
  name: string;
  number: string;
  tag: string;
  highlight?: boolean;
}) {
  return (
    <div
      className="flex items-center gap-3 rounded-[10px] px-3 py-2.5"
      style={{
        background: highlight
          ? "rgba(212, 168, 83, 0.08)"
          : "rgba(13, 11, 9, 0.55)",
        border: highlight
          ? "1px solid rgba(212, 168, 83, 0.35)"
          : "1px solid rgba(212, 168, 83, 0.08)",
      }}
    >
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
        style={{
          background: highlight
            ? "rgba(212, 168, 83, 0.18)"
            : "rgba(212, 168, 83, 0.08)",
          border: "1px solid rgba(212, 168, 83, 0.25)",
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 5.5A2.5 2.5 0 0 1 5.5 3h1.6a1 1 0 0 1 .97.76l.9 3.6a1 1 0 0 1-.27.97l-1.4 1.4a13 13 0 0 0 6 6l1.4-1.4a1 1 0 0 1 .97-.27l3.6.9a1 1 0 0 1 .76.97v1.6a2.5 2.5 0 0 1-2.5 2.5A15.5 15.5 0 0 1 3 5.5z"
            stroke="#D4A853"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <div
          className="text-[12px] font-medium truncate"
          style={{ color: "var(--text-primary)" }}
        >
          {name}
        </div>
        <div
          className="text-[11px] truncate"
          style={{ color: "var(--text-muted, #A69D8D)" }}
        >
          {number}
        </div>
      </div>
      <div
        className="text-[9px] tracking-wide uppercase font-medium px-2 py-0.5 rounded-full"
        style={{
          background: "rgba(212, 168, 83, 0.12)",
          color: "var(--brand-accent)",
          border: "1px solid rgba(212, 168, 83, 0.25)",
        }}
      >
        {tag}
      </div>
    </div>
  );
}
