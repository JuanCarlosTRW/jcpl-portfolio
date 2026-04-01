import { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import ApplyIntakeForm from "@/components/home/ApplyIntakeForm";

export const metadata: Metadata = buildMetadata({
  title: "Book a Diagnostic Call | Client Growth",
  description:
    "This is not a discovery call. It is an actual audit. I review your pipeline, your competitors, and your current traffic sources before we speak.",
  path: "/apply",
});

export default function ApplyPage() {
  return (
    <div style={{ background: "#0D0B09", minHeight: "100vh" }}>
      {/* ══ SECTION 1: HERO + FORM (above the fold) ══ */}
      <section className="pt-32 pb-6 md:pt-36 md:pb-8" style={{ background: "#0D0B09" }}>
        <div className="max-w-[640px] mx-auto px-6 text-center">
          <p
            className="text-[11px] uppercase tracking-[0.16em] mb-5"
            style={{ color: "#D4A853" }}
          >
            THE DIAGNOSTIC
          </p>
          <h1
            className="text-[clamp(28px,4.5vw,44px)] font-extrabold text-white leading-[1.1] mb-5 tracking-[-0.025em]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Book your diagnostic. I will tell you if I can help.
          </h1>
          <p className="text-[16px] text-[#D2C9B8] leading-[1.7] max-w-[520px] mx-auto mb-8">
            This is not a discovery call. It is an actual audit. I review your pipeline, your competitors, and your current traffic sources before we speak.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-10">
            {[
              { icon: "\u26A1", text: "Response within 24h" },
              { icon: "\uD83D\uDD12", text: "100% confidential" },
              { icon: "\u2728", text: "Limited spots per quarter" },
            ].map((badge) => (
              <span
                key={badge.text}
                className="text-[13px] flex items-center gap-1.5"
                style={{ color: "rgba(240,234,214,0.5)" }}
              >
                <span>{badge.icon}</span> {badge.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FRICTION-REDUCTION BLOCK ══ */}
      <section className="pb-6 md:pb-8" style={{ background: "#0D0B09" }}>
        <div className="max-w-[540px] mx-auto px-6">
          <div
            className="rounded-xl p-6 md:p-8"
            style={{
              background: "#131009",
              border: "1px solid rgba(212,168,83,0.12)",
            }}
          >
            <h2
              className="text-[20px] font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              This is not a sales form.
            </h2>
            <p className="text-[14px] text-[#D2C9B8] leading-[1.75]">
              Fill this out and I will review your business, your market, and your pipeline before we speak. You will hear from me within 24 hours, by email, directly from me. No assistant. No automated sequence. If I can produce a return for your business, I will tell you exactly how. If I cannot, I will tell you that too. You will not be asked to pay anything on this form.
            </p>
          </div>
        </div>
      </section>

      {/* ══ THE FORM ══ */}
      <ApplyIntakeForm />

      {/* ══ SECTION 2: PROOF BLOCK ══ */}
      <section className="py-14 md:py-20" style={{ background: "#0D0B09" }}>
        <div className="max-w-[760px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                stat: "$41,085",
                sub: "revenue",
                client: "Triple W Rentals",
                owner: "Westin Wayne Walker",
                time: "30 days",
              },
              {
                stat: "Targeting #1",
                sub: "SEO campaign active",
                client: "Elite Barbershop",
                owner: "Hadi",
                time: "In progress",
              },
              {
                stat: "Website",
                sub: "Full custom build",
                client: "Culture Barbershop",
                owner: "Tobari",
                time: "Delivered",
              },
            ].map((card) => (
              <div
                key={card.client}
                className="rounded-lg p-6 text-center"
                style={{
                  background: "#131009",
                  border: "1px solid rgba(212,168,83,0.12)",
                }}
              >
                <p
                  className="text-[28px] font-extrabold tracking-[-0.02em] leading-none mb-1"
                  style={{ color: "#D4A853" }}
                >
                  {card.stat}
                </p>
                <p className="text-[13px] text-white mb-3">{card.sub}</p>
                <p className="text-[12px]" style={{ color: "#A69D8D" }}>
                  {card.client}
                </p>
                <p className="text-[11px]" style={{ color: "#756D63" }}>
                  {card.time}
                </p>
              </div>
            ))}
          </div>
          <p className="text-[13px] text-center mt-5" style={{ color: "#756D63", fontStyle: "italic" }}>
            Every result from a live account. I can walk you through any of them on the call.
          </p>
        </div>
      </section>

      {/* ══ SECTION 3: TESTIMONIAL ══ */}
      <section className="py-10" style={{ background: "#0D0B09" }}>
        <div className="max-w-[600px] mx-auto px-6">
          <div
            className="rounded-lg p-6"
            style={{
              background: "rgba(212,168,83,0.04)",
              borderLeft: "2px solid #D4A853",
            }}
          >
            <p
              className="text-[15px] italic leading-[1.7] mb-3"
              style={{ color: "#D2C9B8" }}
            >
              &ldquo;First call came in 9 days. We had tried two agencies before this. Nothing came close.&rdquo;
            </p>
            <p className="text-[13px]" style={{ color: "#756D63" }}>
              — Westin Wayne Walker, Triple W Rentals, Texas
            </p>
          </div>
        </div>
      </section>

      {/* ══ SECTION 4: CLOSING LINE ══ */}
      <section className="py-12" style={{ background: "#0D0B09" }}>
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <p className="text-[15px]" style={{ color: "#D2C9B8" }}>
            Full engagement starts at{" "}
            <span style={{ color: "#D4A853", fontWeight: 600 }}>$2,500/month</span>.{" "}
            No retainer until I confirm fit.
          </p>
        </div>
      </section>
    </div>
  );
}
