import { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import AboutHeroSection from "@/components/about/AboutHeroSection";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "One operator. One system. Full accountability. I am 18 and I have produced more verified revenue for clients than most agencies twice my size.",
  path: "/about",
});

const TIMELINE = [
  { date: "Q4 2025", client: "Triple W Rentals", result: "$41,085 in revenue. 30 days. $900 ad spend." },
  { date: "Q4 2025", client: "Elite Barbershop", result: "90 new clients in 90 days. Calendar fully booked." },
  { date: "Q1 2026", client: "Culture Barbershop", result: "Page 1 Google in under 60 days. First booking in 11 days." },
];

export default function AboutPage() {
  return (
    <>
      {/* SECTION 1 — CINEMATIC HERO */}
      <AboutHeroSection />

      {/* SECTION 2 — ORIGIN STORY */}
      <section className="py-16 md:py-24" style={{ background: "#131009", borderTop: "1px solid rgba(212,168,83,0.07)" }}>
        <div className="max-w-[760px] mx-auto px-6">
          <p className="text-[11px] uppercase tracking-[0.16em] mb-4" style={{ color: "#D4A853" }}>WHY THIS EXISTS</p>
          <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold text-white leading-[1.12] mb-8 tracking-[-0.02em]">
            I watched good businesses lose to worse ones. The difference was never the work.
          </h2>
          <div className="space-y-5 max-w-[600px]">
            <p className="text-[16px] text-[#D2C9B8] leading-[1.75]">
              I started noticing it at 16. A painter in my city doing exceptional work, losing jobs to a competitor with a mediocre crew and a $400 website that ranked on Page 1. A barbershop with a lineup out the door on Saturdays, invisible online. Contractors with years of reputation getting undercut by operations half their quality because the other guy had Google Ads running.
            </p>
            <p className="text-[16px] text-[#D2C9B8] leading-[1.75]">
              The work was not the problem. The infrastructure was. Nobody was finding these businesses before they found someone else.
            </p>
            <p className="text-[16px] text-[#D2C9B8] leading-[1.75]">
              The moment that confirmed it: I sat across from a contractor who had been in business for 12 years, watching him lose 60% of his market to a two-year-old company that had spent $1,200 on Google Ads the previous month. His work was better. His reputation was better. He was invisible where it mattered. That is the gap I built Client Growth to close.
            </p>
            <p className="text-[16px] text-[#D2C9B8] leading-[1.75]">
              I started building these systems at 16. By the time most people graduate, I will have run more live ad accounts than most agency employees touch in a career. Every system on this site was built and managed personally. The results are public.
            </p>
            <p className="text-[16px] text-[#D2C9B8] leading-[1.75]">
              Not as a freelancer who builds websites. As an operator who builds the full system and runs it continuously until the pipeline is full. I measure success in qualified calls and revenue. Nothing else gets reported.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — THE MODEL */}
      <section className="py-16 md:py-24" style={{ background: "#0D0B09", borderTop: "1px solid rgba(212,168,83,0.07)" }}>
        <div className="max-w-[760px] mx-auto px-6">
          <p className="text-[11px] uppercase tracking-[0.16em] mb-4" style={{ color: "#D4A853" }}>HOW I OPERATE</p>
          <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold text-white leading-[1.12] mb-8 tracking-[-0.02em]">
            Three clients. Every system built personally. Full accountability.
          </h2>
          <div className="space-y-5 max-w-[600px] mb-14">
            <p className="text-[16px] text-[#D2C9B8] leading-[1.75]">
              Most agencies grow by adding clients and adding staff. The work gets diluted. A junior account manager runs your campaigns six months in. Your results reflect their learning curve, not the system that produced your first results.
            </p>
            <p className="text-[16px] text-[#D2C9B8] leading-[1.75]">
              I built Client Growth around the opposite constraint. Three active partnerships maximum. Not artificial scarcity. Operational reality. More than three live systems and I cannot give each one the weekly attention it needs to compound. I will not take a fourth client until I can serve them at the same standard as the first.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "3 MAX", body: "Active partnerships at any time.", sub: "Every system gets full weekly attention." },
              { title: "PERSONALLY BUILT", body: "Every site, campaign, and optimization done by me.", sub: "Not delegated." },
              { title: "DIRECT ACCESS", body: "You message me. I respond.", sub: "No account managers. No tickets." },
            ].map((col) => (
              <div key={col.title} className="p-6 rounded-xl" style={{ background: "#131009", border: "1px solid rgba(212,168,83,0.12)" }}>
                <p className="text-[13px] font-bold tracking-[0.1em] uppercase mb-3" style={{ color: "#D4A853" }}>{col.title}</p>
                <p className="text-[14px] text-white leading-[1.6] mb-1">{col.body}</p>
                <p className="text-[13px]" style={{ color: "rgba(255,255,255,0.4)" }}>{col.sub}</p>
              </div>
            ))}
          </div>

          {/* Rejection story */}
          <p className="mt-10 text-[15px] text-[#A69D8D] leading-[1.7] max-w-[600px]" style={{ fontStyle: "italic" }}>
            Last quarter I turned down a dental clinic because their market was too saturated to produce a return I could stand behind. That is not a sales tactic. That is the filter that protects every result on this site.
          </p>
        </div>
      </section>

      {/* SECTION 4 — PARTNERSHIP TIMELINE (replaces generic stats) */}
      <section className="py-16 md:py-24" style={{ background: "#131009", borderTop: "1px solid rgba(212,168,83,0.07)" }}>
        <div className="max-w-[760px] mx-auto px-6">
          <p className="text-[11px] uppercase tracking-[0.16em] mb-4" style={{ color: "#D4A853" }}>THE RECORD</p>
          <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold text-white leading-[1.12] mb-10 tracking-[-0.02em]">
            Every partnership. What was built. What it produced.
          </h2>
          <div className="space-y-6">
            {TIMELINE.map((entry) => (
              <div
                key={entry.client}
                className="flex gap-5 p-6 rounded-xl"
                style={{
                  background: "#0D0B09",
                  border: "1px solid rgba(212,168,83,0.12)",
                  borderLeft: "2px solid #D4A853",
                }}
              >
                <div className="flex-shrink-0">
                  <p className="text-[11px] uppercase tracking-[0.14em] font-bold" style={{ color: "#D4A853" }}>
                    {entry.date}
                  </p>
                </div>
                <div>
                  <p className="text-[15px] font-bold text-white mb-1">{entry.client}</p>
                  <p className="text-[14px] text-[#A69D8D] leading-[1.6]">{entry.result}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[14px] mt-8" style={{ color: "#D4A853", fontStyle: "italic" }}>
            Every number on this site is real or it does not get published. No projections. No hypotheticals. Live accounts only.
          </p>
          <Link href="/results" className="text-[14px] font-semibold hover:underline mt-4 inline-block" style={{ color: "#D4A853" }}>
            See full results &rarr;
          </Link>
        </div>
      </section>

      {/* SECTION 5 — THE COMMITMENT */}
      <section className="py-16 md:py-24" style={{ background: "#0D0B09", borderTop: "1px solid rgba(212,168,83,0.07)" }}>
        <div className="max-w-[760px] mx-auto px-6">
          <p className="text-[11px] uppercase tracking-[0.16em] mb-4" style={{ color: "#D4A853" }}>BEFORE YOU SIGN ANYTHING</p>
          <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold text-white leading-[1.12] mb-8 tracking-[-0.02em]">
            If I cannot produce a return, I tell you before you pay anything.
          </h2>
          <p className="text-[16px] text-[#D2C9B8] leading-[1.75] mb-10 max-w-[600px]">
            I review every business before agreeing to work together. I look at the market, the competition, the search volume, the current funnel. If the numbers do not support a return on $2,500/month, I say that on the review call. I have turned clients down. I will do it again. That is not a sales tactic. It is how I protect the track record that makes this work.
          </p>
        </div>
      </section>

      {/* SECTION 6 — FINAL CTA */}
      <section className="py-20 md:py-28" style={{ background: "#1A1510", borderTop: "1px solid rgba(212,168,83,0.07)" }}>
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.16em] mb-4" style={{ color: "#D4A853" }}>APPLY</p>
          <h2 className="text-[clamp(26px,3.5vw,38px)] font-extrabold text-white leading-[1.15] mb-6 tracking-[-0.02em]">
            One spot is open. See if it is the right fit.
          </h2>
          <p className="text-[16px] text-[#D2C9B8] leading-[1.7] mb-8 max-w-[520px] mx-auto">
            Short application. I review your market before the call. If I can produce a return, you get a call link within 24 hours. If I cannot, I tell you directly. No pitch. No pressure. No retainer until fit is confirmed.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold transition-all hover:brightness-110"
            style={{ background: "#D4A853", color: "#0D0B09", letterSpacing: "0.06em", textTransform: "uppercase", borderRadius: 6 }}
          >
            Book a Diagnostic Call &rarr;
          </Link>
          <p className="mt-4 text-[13px]" style={{ color: "#756D63" }}>
            Response within 24 hours. Full engagement starts at $2,500/month.
          </p>
        </div>
      </section>
    </>
  );
}
