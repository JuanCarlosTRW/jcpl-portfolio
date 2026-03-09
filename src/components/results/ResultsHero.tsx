"use client";

const aggregateStats = [
  { label: "Revenue", value: "$41,085" },
  { label: "Per call", value: "$27" },
  { label: "Days to live", value: "11" },
  { label: "ROAS", value: "33x" },
];

export default function ResultsHero() {
  return (
    <section
      className="relative pt-36 pb-20 md:pb-24"
      style={{ backgroundColor: "#0D0B09" }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(212,168,83,0.08) 0%, transparent 70%)",
        }}
      />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,168,83,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,83,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-[760px] mx-auto text-center px-6">
        <h1 className="text-[clamp(32px,4.5vw,48px)] font-extrabold text-white leading-[1.1] mb-5 tracking-[-0.025em]">
          $41,085 in Revenue Generated. Every Number Verified.
        </h1>
        <p className="text-[18px] text-[#D2C9B8] leading-[1.7] max-w-[640px] mx-auto mb-10">
          Every result on this page comes from a live client account. If I cannot
          point to real numbers, I do not publish.
        </p>

        {/* Aggregate stats row */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {aggregateStats.map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-2">
              <span className="text-lg md:text-xl font-bold text-[#D4A853]">
                {stat.value}
              </span>
              <span className="text-sm text-[#D2C9B8]">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
