"use client";

const stack = [
  {
    name: "Next.js",
    role: "Page speed",
    detail:
      "Sub-second load times globally. Faster than anything running on WordPress or Squarespace. Load speed directly drives booking rate.",
  },
  {
    name: "Vercel",
    role: "Reliability",
    detail:
      "99.99% uptime on a global CDN. Your acquisition system stays live during your busiest season. No shared hosting failures.",
  },
  {
    name: "Google Ads",
    role: "Paid acquisition",
    detail:
      "Purchase-intent targeting measured to cost per qualified call. Spend optimized weekly against outcomes — not impressions.",
  },
  {
    name: "Retell AI",
    role: "Lead capture",
    detail:
      "Every inbound call captured and qualified after hours. No lead goes to voicemail. The system works while you are on a job.",
  },
  {
    name: "Google Analytics",
    role: "Revenue attribution",
    detail:
      "Every booking, call, and form traced back to its source. You see exactly what the system is producing and where each dollar went.",
  },
  {
    name: "Custom code",
    role: "Full ownership",
    detail:
      "Every site hand-coded. No WordPress, no proprietary CMS, no templates. Everything built is yours — permanently — from day one.",
  },
];

export default function TechStack() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 bg-[#09090b] border-t border-zinc-800/40">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-amber-500/60" />
          <span className="text-xs tracking-[0.2em] uppercase text-zinc-500 font-medium">
            Infrastructure Advantage
          </span>
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight max-w-[600px]">
          Built With Infrastructure. Not Page Builders.
        </h2>
        <p className="mt-3 text-sm text-zinc-400 max-w-[520px]">
          Your infrastructure determines your load speed, your search ranking, and what you own when the engagement ends. This system runs on the same production-grade stack used by companies that cannot afford slow pages or vendor lock-in.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stack.map((item, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-zinc-900/20"
              style={{ border: "1px solid #1E1A14", borderLeft: "3px solid rgba(212,168,83,0.35)" }}
            >
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.15em] mb-1"
                style={{ color: "#D4A853", opacity: 0.7 }}
              >
                {item.role}
              </p>
              <p className="text-sm font-semibold text-white mb-2">{item.name}</p>
              <p className="text-sm leading-relaxed" style={{ color: "#756D63" }}>
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs max-w-[560px]" style={{ color: "#4A4540" }}>
          Faster load reduces bounce. Custom code converts above template baseline. Full asset ownership removes platform risk. Each layer compounds the next.
        </p>
      </div>
    </section>
  );
}
