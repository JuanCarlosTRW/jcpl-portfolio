import { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import DiagnosticForm from "@/components/home/DiagnosticForm";

export const metadata: Metadata = buildMetadata({
  title: "Apply | Client Growth",
  description:
    "One spot is open this quarter. Book a diagnostic call. I review your market before the call and tell you exactly where you are losing calls.",
  path: "/apply",
});

const STEPS = [
  {
    num: "01",
    title: "I show you where you are losing calls right now.",
    body: "Before we speak, I audit your market, your competitors, and your current traffic sources. I come to the call with findings, not questions.",
  },
  {
    num: "02",
    title: "I tell you what fixing it is worth.",
    body: "I calculate the revenue opportunity in your specific market based on search volume, average job value, and current cost per call benchmarks. You see the math before you commit to anything.",
  },
  {
    num: "03",
    title: "I tell you directly if I can help.",
    body: "If the numbers support a return on $2,500/month, I tell you and we discuss next steps. If they do not, I tell you that too. No pressure either way. No follow-up pitch if the fit is not there.",
  },
];

const TESTIMONIALS = [
  {
    quote: "Juan rebuilt our entire online presence from scratch. First booking came in 11 days. Calendar has not had a gap since.",
    name: "Mike S.",
    role: "Culture Barbershop · Montreal, QC",
  },
  {
    quote: "First call came in 9 days. We had tried two agencies before this. Nothing came close.",
    name: "Tyler W.",
    role: "Triple W Rentals · Texas",
  },
  {
    quote: "90 new clients in 90 days. The system runs itself. Best investment I have made for the shop.",
    name: "Alex M.",
    role: "Elite Barbershop · Montreal, QC",
  },
];

export default function ApplyPage() {
  return (
    <div style={{ background: "#0D0B09", minHeight: "100vh" }}>
      {/* SECTION 1 — HERO */}
      <section className="pt-36 pb-14" style={{ background: "#0D0B09" }}>
        <div className="max-w-[680px] mx-auto px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.16em] mb-5" style={{ color: "#D4A853" }}>APPLY</p>
          <h1 className="text-[clamp(28px,4.5vw,44px)] font-extrabold text-white leading-[1.1] mb-6 tracking-[-0.025em]">
            One spot is open this quarter. Here is how to claim it.
          </h1>
          <p className="text-[17px] text-[#D2C9B8] leading-[1.7] mb-8 max-w-[540px] mx-auto">
            Short application. I review your market before the call. If I can produce a return, you get a call link within 24 hours. If I cannot, I tell you directly.{" "}
            <span style={{ color: "#D4A853" }}>Before you pay anything.</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs" style={{ color: "#A69D8D" }}>
            <span><span style={{ color: "#D4A853" }}>&#10003;</span> Response within 24 hours</span>
            <span><span style={{ color: "#D4A853" }}>&#10003;</span> No retainer until I confirm fit</span>
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

      {/* SECTION 2 — WHAT HAPPENS ON THE CALL */}
      <section className="py-16 md:py-24" style={{ background: "#131009", borderTop: "1px solid rgba(212,168,83,0.07)" }}>
        <div className="max-w-[760px] mx-auto px-6">
          <p className="text-[11px] uppercase tracking-[0.16em] mb-4" style={{ color: "#D4A853" }}>THE DIAGNOSTIC</p>
          <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold text-white leading-[1.12] mb-10 tracking-[-0.02em]">
            This is not a sales call. Here is exactly what happens.
          </h2>
          <div className="space-y-10">
            {STEPS.map((step) => (
              <div key={step.num} className="flex gap-5">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-bold"
                  style={{ background: "rgba(212,168,83,0.1)", color: "#D4A853", border: "1px solid rgba(212,168,83,0.2)" }}
                >
                  {step.num}
                </div>
                <div>
                  <h3 className="text-[17px] font-bold text-white mb-2 leading-[1.3]">{step.title}</h3>
                  <p className="text-[15px] text-[#D2C9B8] leading-[1.75] max-w-[520px]">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — PROOF */}
      <section className="py-16 md:py-24" style={{ background: "#0D0B09", borderTop: "1px solid rgba(212,168,83,0.07)" }}>
        <div className="max-w-[1000px] mx-auto px-6">
          <p className="text-[11px] uppercase tracking-[0.16em] mb-4" style={{ color: "#D4A853" }}>
            WHAT HAPPENS WHEN THE SYSTEM RUNS
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mb-10">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="p-6 rounded-xl"
                style={{ background: "#131009", border: "1px solid rgba(212,168,83,0.1)" }}
              >
                <p className="text-[15px] text-[#D2C9B8] leading-[1.7] mb-5 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-[13px] font-semibold text-white">{t.name}</p>
                <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.4)" }}>{t.role}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-[#D2C9B8] mb-3">
            $41,085 in revenue. 90 new clients. Built on the same system I would build for you.
          </p>
          <Link href="/results" className="text-[14px] font-semibold hover:underline" style={{ color: "#D4A853" }}>
            See full results &rarr;
          </Link>
        </div>
      </section>

      {/* SECTION 4 — BOOKING FORM */}
      <DiagnosticForm />

      {/* SECTION 5 — PRE-QUALIFY */}
      <section className="py-16 md:py-24" style={{ background: "#0D0B09", borderTop: "1px solid rgba(212,168,83,0.07)" }}>
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-[clamp(24px,3.5vw,32px)] font-extrabold text-white leading-[1.12] mb-10 tracking-[-0.02em] text-center">
            Before you apply.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Right fit */}
            <div className="p-6 rounded-xl" style={{ background: "#131009", border: "1px solid rgba(212,168,83,0.15)" }}>
              <p className="text-[13px] font-bold uppercase tracking-[0.1em] mb-5" style={{ color: "#D4A853" }}>
                This is the right fit if:
              </p>
              <ul className="space-y-3">
                {[
                  "You are generating consistent revenue ($5K+/month)",
                  "Your pipeline depends too heavily on referrals",
                  "You want a system that compounds — not a one-off project",
                  "You are ready to invest $2,500/month in infrastructure that pays back",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[14px] text-[#D2C9B8] leading-[1.5]">
                    <span style={{ color: "#D4A853", flexShrink: 0 }}>&middot;</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Not fit */}
            <div className="p-6 rounded-xl" style={{ background: "#131009", border: "1px solid #2A2318" }}>
              <p className="text-[13px] font-bold uppercase tracking-[0.1em] mb-5" style={{ color: "#756D63" }}>
                This is not the right fit if:
              </p>
              <ul className="space-y-3">
                {[
                  "Your business is under $5K/month in revenue",
                  "You want a logo, a brochure site, or a one-time deliverable",
                  "You want to test the waters with minimal commitment",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[14px] leading-[1.5]" style={{ color: "rgba(255,255,255,0.4)" }}>
                    <span style={{ color: "#756D63", flexShrink: 0 }}>&middot;</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center mt-10 text-[15px]" style={{ color: "#D4A853", fontStyle: "italic" }}>
            If I cannot produce a return, I tell you before you pay anything. That is the standard I hold myself to.
          </p>
        </div>
      </section>
    </div>
  );
}
