"use client";


import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";
import { caseStudyLogos } from "@/components/hero/LogoLoopData";

// Pick 3 strongest proof clients (custom order for credibility)
const proofCards = [
  {
    ...caseStudyLogos[1], // Absolute Painting
    proof: "Booked 17 calls in 30 days. $41,085 revenue from $900 ad spend.",
  },
  {
    ...caseStudyLogos[0], // Elite Barbershop
    proof: "Doubled new client bookings. 3x ROI in first month.",
  },
  {
    ...caseStudyLogos[4], // Centre Dentaire
    proof: "$33 avg cost per qualified call.",
  },
];

export default function ProofOrbitSection() {
  return (
    <SectionWrapper id="clients" variant="surface">
      <Reveal className="mx-auto max-w-xl text-center">
        <SectionLabel label="Active Systems" className="mb-5" />
        <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold leading-tight tracking-tight text-white">
          Proof. Not Promises.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[16px] leading-relaxed text-sv-text-sub">
          Every card below is a real, active client system built and managed on this platform.
        </p>
      </Reveal>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-7 max-w-5xl mx-auto">
        {proofCards.map((card, i) => (
          <div
            key={card.name}
            className="group bg-gradient-to-br from-[#18181b] to-[#101012] border border-zinc-800 rounded-2xl p-7 flex flex-col items-center shadow-lg transition-transform duration-200 hover:-translate-y-1.5 hover:shadow-2xl hover:border-emerald-500/60"
            style={{ minHeight: 320 }}
          >
            <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-5">
              <img src={card.src} alt={card.name} className="w-10 h-10 object-contain opacity-80" />
            </div>
            <div className="text-lg font-semibold text-white mb-1 text-center">{card.name}</div>
            <div className="text-xs uppercase tracking-widest text-zinc-500 mb-3 text-center">{card.industryLabel}</div>
            <div className="text-[15px] text-zinc-300 text-center leading-relaxed mb-2">{card.proof}</div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <span className="inline-block bg-zinc-900/80 border border-zinc-800 rounded-full px-5 py-2 text-sm text-zinc-400 font-medium">
          +2 systems currently in build
        </span>
      </div>
    </SectionWrapper>
  );
}
