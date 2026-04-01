"use client";

export default function StatsBar() {
  return (
    <section
      style={{
        background: "#131009",
        borderTop: "1px solid #2A2318",
        borderBottom: "1px solid #2A2318",
        padding: "32px 0",
      }}
    >
      <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 text-center">
        <div>
          <p className="text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold text-white tracking-tight leading-none mb-1">2</p>
          <p className="text-[13px] text-[#D2C9B8] mb-0.5">Active client systems running</p>
          <p className="text-[11px] text-[#756D63]">Q1 2026</p>
        </div>
        <div style={{ width: 1, height: 48, background: "#2A2318" }} className="hidden sm:block" />
        <div>
          <p className="text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold text-white tracking-tight leading-none mb-1">3 max</p>
          <p className="text-[13px] text-[#D2C9B8] mb-0.5">Partnerships I take at a time</p>
          <p className="text-[11px] text-[#756D63]">1 spot currently open</p>
        </div>
      </div>
      <p className="text-[11px] text-center mt-4" style={{ color: "#756D63" }}>Last updated: April 2026</p>
    </section>
  );
}
