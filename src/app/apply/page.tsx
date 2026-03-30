import { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import ApplyIntakeForm from "@/components/home/ApplyIntakeForm";

export const metadata: Metadata = buildMetadata({
  title: "Apply | Client Growth",
  description:
    "One spot is open this quarter. Book a diagnostic call. I review your market before the call and tell you exactly where you are losing calls.",
  path: "/apply",
});

export default function ApplyPage() {
  return (
    <div style={{ background: "#0D0B09", minHeight: "100vh" }}>
      {/* SECTION 1 — CONFIRMATION HEADLINE */}
      <section className="pt-36 pb-10" style={{ background: "#0D0B09" }}>
        <div className="max-w-[640px] mx-auto px-6 text-center">
          <p
            className="text-[11px] uppercase tracking-[0.16em] mb-5"
            style={{ color: "#D4A853" }}
          >
            APPLY
          </p>
          <h1
            className="text-[clamp(28px,4.5vw,44px)] font-extrabold text-white leading-[1.1] mb-5 tracking-[-0.025em]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            You are three minutes from knowing exactly where your pipeline is leaking.
          </h1>
          <p className="text-[16px] text-[#D2C9B8] leading-[1.7] max-w-[500px] mx-auto">
            Short form. I review your market within 24 hours. If I can produce a return, you get a call link. If I cannot, I tell you directly.
          </p>
        </div>
      </section>

      {/* SECTION 2 — PROOF CARD (Triple W anchor) */}
      <section className="pb-10" style={{ background: "#0D0B09" }}>
        <div className="max-w-[540px] mx-auto px-6">
          <div
            className="rounded-xl p-6"
            style={{
              background: "#131009",
              border: "1px solid rgba(212,168,83,0.15)",
              borderTop: "2px solid #D4A853",
            }}
          >
            <p
              className="text-[11px] uppercase tracking-[0.14em] mb-5"
              style={{ color: "#756D63" }}
            >
              The last system I built before this spot opened
            </p>
            <div className="flex flex-wrap gap-6 mb-4">
              <div>
                <p
                  className="text-[28px] font-extrabold tracking-[-0.02em] leading-none mb-1"
                  style={{ color: "#D4A853" }}
                >
                  $41,085
                </p>
                <p className="text-[12px]" style={{ color: "#A69D8D" }}>
                  Revenue in 30 days
                </p>
              </div>
              <div>
                <p
                  className="text-[28px] font-extrabold tracking-[-0.02em] leading-none mb-1"
                  style={{ color: "#D4A853" }}
                >
                  $900
                </p>
                <p className="text-[12px]" style={{ color: "#A69D8D" }}>
                  Ad spend
                </p>
              </div>
              <div>
                <p
                  className="text-[28px] font-extrabold tracking-[-0.02em] leading-none mb-1"
                  style={{ color: "#D4A853" }}
                >
                  30 days
                </p>
                <p className="text-[12px]" style={{ color: "#A69D8D" }}>
                  Timeline
                </p>
              </div>
            </div>
            <p className="text-[12px]" style={{ color: "#756D63", fontStyle: "italic" }}>
              Triple W Rentals, Texas. Verified against live Google Ads account. Last verified February 2026.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT HAPPENS NEXT */}
      <section className="pb-12" style={{ background: "#0D0B09" }}>
        <div className="max-w-[540px] mx-auto px-6">
          <p
            className="text-[11px] uppercase tracking-[0.16em] mb-6"
            style={{ color: "#D4A853" }}
          >
            WHAT HAPPENS NEXT
          </p>
          <div className="space-y-6">
            {[
              {
                num: "01",
                title: "Submit the form.",
                body: "I review your market, your competitors, and your current pipeline within 24 hours.",
              },
              {
                num: "02",
                title: "I send you a call link if I believe I can produce a return.",
                body: "Not every business moves forward. If yours does, you hear from me within a day.",
              },
              {
                num: "03",
                title: "On the call, I show you exactly where you are losing calls and what fixing it is worth.",
                body: "No pitch. No retainer until fit is confirmed. If I cannot produce a return for your business, I tell you on the call before you pay anything.",
              },
            ].map((step) => (
              <div key={step.num} className="flex gap-4">
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold"
                  style={{
                    background: "rgba(212,168,83,0.1)",
                    color: "#D4A853",
                    border: "1px solid rgba(212,168,83,0.2)",
                  }}
                >
                  {step.num}
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-white mb-1 leading-[1.3]">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-[#A69D8D] leading-[1.7]">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — INTAKE FORM */}
      <ApplyIntakeForm />

      {/* SECTION 5 — TRUST SIGNALS */}
      <section className="py-10" style={{ background: "#0D0B09" }}>
        <div className="max-w-[540px] mx-auto px-6 text-center space-y-2">
          <p className="text-[13px] text-[#D2C9B8] leading-[1.6]">
            Response within 24 hours.
          </p>
          <p className="text-[13px] text-[#D2C9B8] leading-[1.6]">
            No commitment to apply.
          </p>
          <p className="text-[13px] text-[#D2C9B8] leading-[1.6]">
            I have turned clients down. If you are not a fit, I tell you directly.
          </p>
        </div>
      </section>
    </div>
  );
}
