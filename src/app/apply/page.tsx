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
      {/* SECTION 1 — HERO */}
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
            One spot is open. See if it is the right fit.
          </h1>
          <p className="text-[16px] text-[#D2C9B8] leading-[1.7] max-w-[500px] mx-auto">
            Short application. I review your market before the call. If I can produce a return, you hear back within 24 hours.
          </p>
        </div>
      </section>

      {/* SECTION 2 — PROOF REINFORCEMENT */}
      <section className="pb-10" style={{ background: "#0D0B09" }}>
        <div className="max-w-[540px] mx-auto px-6">
          <div
            className="rounded-xl p-6"
            style={{
              background: "#131009",
              border: "1px solid rgba(212,168,83,0.15)",
            }}
          >
            <p
              className="text-[14px] text-white leading-[1.6] mb-4"
              style={{ fontWeight: 500 }}
            >
              $41,085 generated. 90 new clients acquired. Page 1 rankings delivered.
            </p>

            {/* Testimonial placeholder — Juan fills in real quote */}
            <div
              className="rounded-lg p-4 mb-4"
              style={{
                background: "rgba(212,168,83,0.04)",
                borderLeft: "2px solid #D4A853",
              }}
            >
              <p
                className="text-[14px] italic leading-[1.65]"
                style={{ color: "#D2C9B8" }}
              >
                &ldquo;[Testimonial quote goes here]&rdquo;
              </p>
              <p className="text-[12px] mt-2" style={{ color: "#756D63" }}>
                — [Name], [Business] · [City]
              </p>
            </div>

            <p className="text-[12px]" style={{ color: "#756D63" }}>
              Every number is from a live account.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — THE FORM */}
      <ApplyIntakeForm />

      {/* SECTION 4 — WHAT HAPPENS NEXT */}
      <section className="py-12" style={{ background: "#0D0B09" }}>
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
                body: "I review your market, competitors, and current traffic within 24 hours.",
              },
              {
                num: "02",
                body: "If I can produce a return, you get a call link with a custom audit.",
              },
              {
                num: "03",
                body: "On the call, I show you exactly where you are losing calls and what fixing it is worth.",
              },
            ].map((step) => (
              <div key={step.num} className="flex gap-4 items-start">
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
                <p className="text-[14px] text-[#D2C9B8] leading-[1.7] pt-1">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
