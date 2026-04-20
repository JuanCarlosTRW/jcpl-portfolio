"use client";

export default function EarthEmbed() {
  return (
    <div
      className="absolute inset-0 rounded-[12px] overflow-hidden"
      style={{
        background: "radial-gradient(1400px 900px at 50% 50%, #1a1208 0%, #0e0a04 60%, #050301 100%)",
        border: "1px solid rgba(212, 168, 83, 0.12)",
      }}
    >
      <iframe
        src="/earth/index.html"
        title="Global reach"
        loading="lazy"
        className="absolute inset-0 w-full h-full"
        style={{ border: 0, background: "transparent", pointerEvents: "none" }}
        sandbox="allow-scripts allow-same-origin"
      />
      <div
        className="absolute left-4 top-4 text-[10px] font-medium tracking-[0.16em] uppercase"
        style={{ color: "var(--text-muted, #A69D8D)" }}
      >
        Global reach · live
      </div>
    </div>
  );
}
