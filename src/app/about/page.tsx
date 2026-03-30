import { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "One operator. One system. Full accountability. I am 18 and I have produced more verified revenue for clients than most agencies twice my size.",
  path: "/about",
});

const STATS = [
  { value: "$41,085", label: "Revenue generated", detail: "Triple W Rentals", sub: "Google Ads · First 30 days · $900 ad spend" },
  { value: "90", label: "New clients acquired", detail: "Elite Barbershop", sub: "Full acquisition system · 90 days · Built from zero" },
  { value: "Page 1", label: "Google ranking", detail: "Culture Barbershop", sub: "Competitive Montreal market · Under 60 days" },
];

const PROOF_LINES = [
  "One went live in 9 days.",
  "One booked their first qualified call on day 7.",
  "One generated $2,716 in revenue in month one.",
];

export default function AboutPage() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="pt-36 pb-16 md:pb-24" style={{ background: "#0D0B09" }}>
        <div className="max-w-[760px] mx-auto px-6">
          <p className="text-[11px] uppercase tracking-[0.16em] mb-5" style={{ color: "#D4A853" }}>
            ABOUT
          </p>
          <h1 className="text-[clamp(28px,4.5vw,46px)] font-extrabold text-white leading-[1.08] mb-6 tracking-[-0.025em]">
            I am 18. I have produced more verified revenue for clients than most agencies twice my size.
          </h1>
          <p className="text-[17px] text-[#D2C9B8] leading-[1.7] mb-10 max-w-[580px]">
            Not because I work harder. Because I run one connected system, personally, for three clients at a time. No handoffs. No account managers. No dilution.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-bold"
              style={{ background: "#D4A853", color: "#0D0B09", letterSpacing: "0.06em", textTransform: "uppercase" }}
            >
              Book a Diagnostic Call &rarr;
            </Link>
            <Link
              href="/results"
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm"
              style={{ color: "rgba(240,234,214,0.5)", border: "1px solid rgba(240,234,214,0.1)" }}
            >
              See the Results &rarr;
            </Link>
          </div>
          <div className="flex flex-wrap gap-4 text-xs" style={{ color: "#A69D8D" }}>
            <span>Response within 24h</span>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>&middot;</span>
            <span>No retainer until fit is confirmed</span>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>&middot;</span>
            <span className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span style={{ color: "rgb(110,231,183)" }}>One spot currently open</span>
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 2 — THE ORIGIN */}
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
              I built Client Growth to close that gap. Not as a freelancer who builds websites. As an operator who builds the full system — site, ads, SEO, AI search visibility — and runs it continuously until the pipeline is full. I measure success in qualified calls and revenue. Nothing else gets reported.
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
              I built Client Growth around the opposite constraint. Three active partnerships maximum. Not artificial scarcity — operational reality. More than three live systems and I cannot give each one the weekly attention it needs to compound. I will not take a fourth client until I can serve them at the same standard as the first.
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
        </div>
      </section>

      {/* SECTION 4 — THE RECORD */}
      <section className="py-16 md:py-24" style={{ background: "#131009", borderTop: "1px solid rgba(212,168,83,0.07)" }}>
        <div className="max-w-[760px] mx-auto px-6">
          <p className="text-[11px] uppercase tracking-[0.16em] mb-4" style={{ color: "#D4A853" }}>VERIFIED RECORD</p>
          <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold text-white leading-[1.12] mb-10 tracking-[-0.02em]">
            The results are public. Every number tied to a real account.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {STATS.map((s) => (
              <div key={s.detail} className="p-6 rounded-xl" style={{ background: "#0D0B09", border: "1px solid rgba(212,168,83,0.12)" }}>
                <p className="text-[36px] font-extrabold text-white tracking-[-0.03em] leading-none mb-2">{s.value}</p>
                <p className="text-[14px] text-[#D2C9B8] mb-1">{s.label} · {s.detail}</p>
                <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.35)" }}>{s.sub}</p>
              </div>
            ))}
          </div>
          <p className="text-[14px] mb-6" style={{ color: "#D4A853", fontStyle: "italic" }}>
            Every number on this site is real or it does not get published. No projections. No hypotheticals. Live accounts only.
          </p>
          <Link href="/results" className="text-[14px] font-semibold hover:underline" style={{ color: "#D4A853" }}>
            See full results &rarr;
          </Link>
        </div>
      </section>

      {/* SECTION 5 — THE COMMITMENT */}
      <section className="py-16 md:py-24" style={{ background: "#0D0B09", borderTop: "1px solid rgba(212,168,83,0.07)" }}>
        <div className="max-w-[760px] mx-auto px-6">
          <p className="text-[11px] uppercase tracking-[0.16em] mb-4" style={{ color: "#D4A853" }}>BEFORE YOU SIGN ANYTHING</p>
          <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold text-white leading-[1.12] mb-8 tracking-[-0.02em]">
            If I cannot produce a return, I will tell you before you pay anything.
          </h2>
          <p className="text-[16px] text-[#D2C9B8] leading-[1.75] mb-10 max-w-[600px]">
            I review every business before agreeing to work together. I look at the market, the competition, the search volume, the current funnel. If the numbers do not support a return on $2,500/month, I say that on the review call. I have turned clients down. I will do it again. That is not a sales tactic. It is how I protect the track record that makes this work.
          </p>
          <div className="p-6 rounded-lg max-w-[480px]" style={{ background: "rgba(212,168,83,0.04)", border: "1px solid rgba(212,168,83,0.15)" }}>
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] mb-4" style={{ color: "#D4A853" }}>Last 3 partnerships:</p>
            <ul className="space-y-2">
              {PROOF_LINES.map((line) => (
                <li key={line} className="flex items-start gap-2.5 text-[14px]" style={{ color: "#D2C9B8" }}>
                  <span style={{ color: "#D4A853", flexShrink: 0 }}>&middot;</span>{line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 6 — FINAL CTA */}
      <section className="py-20 md:py-28" style={{ background: "#1A1510", borderTop: "1px solid rgba(212,168,83,0.07)" }}>
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.16em] mb-4" style={{ color: "#D4A853" }}>APPLY</p>
          <h2 className="text-[clamp(26px,3.5vw,38px)] font-extrabold text-white leading-[1.15] mb-6 tracking-[-0.02em]">
            One spot is open. Book the diagnostic call.
          </h2>
          <p className="text-[16px] text-[#D2C9B8] leading-[1.7] mb-8 max-w-[520px] mx-auto">
            Short application. I review your market before the call. If I can produce a return, you get a call link within 24 hours. If I cannot, I tell you directly. No pitch. No pressure. No retainer until fit is confirmed.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold"
            style={{ background: "#D4A853", color: "#0D0B09", letterSpacing: "0.06em", textTransform: "uppercase" }}
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
