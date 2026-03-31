"use client";

import { Reveal } from "@/components/motion";

export default function AboutOriginStory() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "#131009",
        borderTop: "1px solid rgba(212,168,83,0.07)",
        paddingTop: "clamp(80px, 10vw, 120px)",
        paddingBottom: "clamp(80px, 10vw, 120px)",
      }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 20% 30%, rgba(212,168,83,0.03) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[720px] mx-auto px-6 md:px-8">
        <Reveal>
          <p
            className="uppercase tracking-[0.16em] mb-5"
            style={{
              fontSize: "11px",
              color: "#D4A853",
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            WHY THIS EXISTS
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <h2
            className="font-extrabold text-white leading-[1.12] mb-10 tracking-[-0.02em]"
            style={{ fontSize: "clamp(26px, 3.8vw, 40px)" }}
          >
            I watched good businesses lose to worse ones. The difference was never
            the work.
          </h2>
        </Reveal>

        <div className="space-y-6 max-w-[620px]">
          <Reveal delay={0.1}>
            <p className="text-[16px] leading-[1.8]" style={{ color: "#D2C9B8" }}>
              I started noticing it at 16. A painter in my city doing exceptional
              work, losing jobs to a competitor with a mediocre crew and a $400
              website that ranked on Page 1. A barbershop with a lineup out the door
              on Saturdays, invisible online. Contractors with years of reputation
              getting undercut by operations half their quality because the other guy
              had Google Ads running.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p
              className="text-[17px] font-medium leading-[1.7]"
              style={{
                color: "#F5F0E8",
                borderLeft: "2px solid rgba(212,168,83,0.5)",
                paddingLeft: 20,
              }}
            >
              The work was not the problem. The infrastructure was. Nobody was
              finding these businesses before they found someone else.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-[16px] leading-[1.8]" style={{ color: "#D2C9B8" }}>
              The moment that confirmed it: I sat across from a contractor who had
              been in business for 12 years, watching him lose 60% of his market to
              a two-year-old company that had spent $1,200 on Google Ads the
              previous month. His work was better. His reputation was better. He was
              invisible where it mattered.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="text-[16px] leading-[1.8]" style={{ color: "#D2C9B8" }}>
              That is the gap I built Client Growth to close. Not as a freelancer
              who builds websites. As an operator who builds the full system and runs
              it continuously until the pipeline is full. I measure success in
              qualified calls and revenue. Nothing else gets reported.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
