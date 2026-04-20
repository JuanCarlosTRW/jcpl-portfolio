"use client";

export default function PadlockEmbed() {
  return (
    <div
      className="absolute inset-0 rounded-[12px] overflow-hidden"
      style={{
        background: "#050404",
        border: "1px solid rgba(212, 168, 83, 0.12)",
      }}
    >
      <iframe
        src="/padlock/index.html"
        title="Unlock predictable demand"
        loading="lazy"
        className="absolute inset-0 w-full h-full"
        style={{ border: 0, background: "transparent", pointerEvents: "none" }}
        sandbox="allow-scripts allow-same-origin"
      />
      <div
        className="absolute left-4 top-4 text-[10px] font-medium tracking-[0.16em] uppercase"
        style={{ color: "var(--text-muted, #A69D8D)" }}
      >
        Unlock · ready
      </div>
    </div>
  );
}
