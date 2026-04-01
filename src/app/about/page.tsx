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
  { date: "Q4 2025", client: "Triple W Rentals", result: "$41,085 in revenue. 30 days. $900 ad spend.", href: "/results/triple-w-rentals" },
  { date: "Q4 2025", client: "Elite Barbershop", result: "SEO campaign launched. Targeting #1 in local search.", href: "/results/elite-barbershop" },
  { date: "Q1 2026", client: "Culture Barbershop", result: "Full custom website delivered. Booking flow live. Local SEO in setup.", href: "/results/culture-barbershop" },
];

export default function AboutPage() {
  return (
    <>
      {/* SECTION 1 — CINEMATIC HERO */}
      {/* TODO: Juan — replace with new vertical headshot. Keep same layout and glitch treatment. */}
      <AboutHeroSection />

      {/* SECTION 2 — ORIGIN STORY */}
      <section className="py-16 md:py-24" style={{ background: "#FFFFFF", borderTop: "1px solid #E5E7EB" }}>
        <div className="max-w-[760px] mx-auto px-6">
          <p className="text-[11px] uppercase tracking-[0.16em] mb-4" style={{ color: "#2563EB" }}>WHO I AM</p>

          {/* Stat bar */}
          <p
            className="mb-8 rounded-lg px-6 py-3"
            style={{
              fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
              color: "#1A3A6B",
              background: "#EEF2FF",
              fontFamily: "var(--font-cormorant), Georgia, serif",
              letterSpacing: "0.02em",
            }}
          >
            5 systems shipped &nbsp;|&nbsp; Markets: Canada + United States &nbsp;|&nbsp; 1 operator
          </p>

          <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold leading-[1.12] mb-8 tracking-[-0.02em]" style={{ color: "#1A3A6B" }}>
            I watched good businesses lose to worse ones. The difference was never the work.
          </h2>
          <div className="space-y-5 max-w-[600px]">
            <p className="text-[16px] leading-[1.75]" style={{ color: "#1A1A1A" }}>
              I have built acquisition systems and conversion websites for service businesses across Canada and the United States: barbershops, dental clinics, painting contractors, RV rental operators. Every engagement is tracked to one metric: qualified calls on the calendar. I run a maximum of 3 active partnerships at a time, by design.
            </p>
            <p className="text-[16px] leading-[1.75]" style={{ color: "#1A1A1A" }}>
              I started noticing the gap at 16. A painter in my city doing exceptional work, losing jobs to a competitor with a mediocre crew and a $400 website that ranked on Page 1. A barbershop with a lineup out the door on Saturdays, invisible online. Contractors with years of reputation getting undercut by operations half their quality because the other guy had Google Ads running.
            </p>
            <p className="text-[16px] leading-[1.75]" style={{ color: "#1A1A1A" }}>
              The work was not the problem. The infrastructure was. Nobody was finding these businesses before they found someone else.
            </p>
            <p className="text-[16px] leading-[1.75]" style={{ color: "#1A1A1A" }}>
              The moment that confirmed it: I sat across from a contractor who had been in business for 12 years, watching him lose 60% of his market to a two-year-old company that had spent $1,200 on Google Ads the previous month. His work was better. His reputation was better. He was invisible where it mattered. That is the gap I built Client Growth to close.
            </p>
            <p className="text-[16px] leading-[1.75]" style={{ color: "#1A1A1A" }}>
              I started building these systems at 16. By the time most people graduate, I will have run more live ad accounts than most agency employees touch in a career. Every system on this site was built and managed personally. The results are public.
            </p>
            <p className="text-[16px] leading-[1.75]" style={{ color: "#1A1A1A" }}>
              Not as a freelancer who builds websites. As an operator who builds the full system and runs it continuously until the pipeline is full. I measure success in qualified calls and revenue. Nothing else gets reported.
            </p>
          </div>

          {/* Subtle mid-section CTA */}
          <div className="mt-12 pt-8" style={{ borderTop: "1px solid #E5E7EB" }}>
            <Link
              href="/apply"
              className="text-[14px] transition-opacity duration-200 hover:opacity-70"
              style={{ color: "#1A3A6B", letterSpacing: "0.02em" }}
            >
              See if this is the right fit &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3 — HOW I OPERATE */}
      <section className="py-16 md:py-24" style={{ background: "#FFFFFF", borderTop: "1px solid #E5E7EB" }}>
        <div className="max-w-[760px] mx-auto px-6">
          <p className="text-[11px] uppercase tracking-[0.16em] mb-4" style={{ color: "#2563EB" }}>HOW I OPERATE</p>
          <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold leading-[1.12] mb-8 tracking-[-0.02em]" style={{ color: "#1A3A6B" }}>
            Three clients. Every system built personally. Full accountability.
          </h2>
          <div className="space-y-5 max-w-[600px] mb-14">
            <p className="text-[16px] leading-[1.75]" style={{ color: "#1A1A1A" }}>
              Most agencies grow by adding clients and adding staff. The work gets diluted. A junior account manager runs your campaigns six months in. Your results reflect their learning curve, not the system that produced your first results.
            </p>
            <p className="text-[16px] leading-[1.75]" style={{ color: "#1A1A1A" }}>
              I built Client Growth around the opposite constraint. I run a maximum of 3 active partnerships at a time. Not artificial scarcity. Operational reality. More than three live systems and I cannot give each one the weekly attention it needs to compound. I will not take a fourth client until I can serve them at the same standard as the first.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "3 ACTIVE MAX", body: "I run a maximum of 3 active partnerships at a time.", sub: "Every system gets full weekly attention." },
              { title: "PERSONALLY BUILT", body: "Every site, campaign, and optimization done by me.", sub: "Not delegated." },
              { title: "DIRECT ACCESS", body: "You message me. I respond.", sub: "No account managers. No tickets." },
            ].map((col) => (
              <div key={col.title} className="p-6 rounded-lg" style={{ background: "#F0F4FF", borderLeft: "3px solid #1A3A6B", borderRadius: 8 }}>
                <p className="text-[13px] font-bold tracking-[0.1em] uppercase mb-3" style={{ color: "#1A3A6B" }}>{col.title}</p>
                <p className="text-[14px] leading-[1.6] mb-1" style={{ color: "#1A1A1A" }}>{col.body}</p>
                <p className="text-[13px]" style={{ color: "#4B5563" }}>{col.sub}</p>
              </div>
            ))}
          </div>

          {/* Rejection story */}
          <p className="mt-10 text-[15px] leading-[1.7] max-w-[600px]" style={{ fontStyle: "italic", color: "#4B5563" }}>
            Last quarter I turned down a dental clinic because their market was too saturated to produce a return I could stand behind. That is not a sales tactic. That is the filter that protects every result on this site.
          </p>
        </div>
      </section>

      {/* SECTION 4 — THE RECORD (clickable cards) */}
      <section className="py-16 md:py-24" style={{ background: "#FFFFFF", borderTop: "1px solid #E5E7EB" }}>
        <div className="max-w-[760px] mx-auto px-6">
          <p className="text-[11px] uppercase tracking-[0.16em] mb-4" style={{ color: "#2563EB" }}>THE RECORD</p>
          <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold leading-[1.12] mb-10 tracking-[-0.02em]" style={{ color: "#1A3A6B" }}>
            Every partnership. What was built. What it produced.
          </h2>
          <div className="space-y-6">
            {TIMELINE.map((entry) => (
              <Link
                key={entry.client}
                href={entry.href}
                className="flex gap-5 p-6 rounded-lg transition-all duration-300 record-card"
                style={{
                  borderRadius: 8,
                  textDecoration: "none",
                  background: "#F0F4FF",
                  borderLeft: "3px solid #1A3A6B",
                }}
              >
                <div className="flex-shrink-0">
                  <p className="text-[11px] uppercase tracking-[0.14em] font-bold" style={{ color: "#2563EB" }}>
                    {entry.date}
                  </p>
                </div>
                <div>
                  <p className="text-[15px] font-bold mb-1" style={{ color: "#1A3A6B" }}>{entry.client}</p>
                  <p className="text-[14px] leading-[1.6]" style={{ color: "#4B5563" }}>{entry.result}</p>
                </div>
              </Link>
            ))}
          </div>
          <Link href="/results" className="text-[14px] font-semibold hover:underline mt-4 inline-block" style={{ color: "#1A3A6B" }}>
            See full results &rarr;
          </Link>
        </div>
      </section>

      {/* SECTION 5 — FINAL CTA */}
      <section className="py-20 md:py-28" style={{ background: "#FFFFFF", borderTop: "1px solid #E5E7EB" }}>
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.16em] mb-4" style={{ color: "#2563EB" }}>APPLY</p>
          <h2 className="text-[clamp(26px,3.5vw,38px)] font-extrabold leading-[1.15] mb-6 tracking-[-0.02em]" style={{ color: "#1A3A6B" }}>
            One spot is open. See if it is the right fit.
          </h2>
          <p className="text-[16px] leading-[1.7] mb-8 max-w-[520px] mx-auto" style={{ color: "#1A1A1A" }}>
            Short application. I review your market before the call. If I can produce a return, you get a call link within 24 hours. If I cannot, I tell you directly. No pitch. No pressure. No retainer until fit is confirmed.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold transition-all hover:brightness-110"
            style={{ background: "#1A3A6B", color: "#FFFFFF", letterSpacing: "0.06em", textTransform: "uppercase", borderRadius: 6 }}
          >
            Apply for a Diagnostic Call &rarr;
          </Link>
          <p className="mt-4 text-[13px]" style={{ color: "#4B5563" }}>
            Response within 24 hours. Full engagement starts at $2,500/month.
          </p>
        </div>
      </section>
    </>
  );
}
