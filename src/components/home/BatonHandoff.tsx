"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

const steps = [
  {
    number: "1",
    title: "You apply",
    body: "Fill out the form. It takes under 2 minutes.",
  },
  {
    number: "2",
    title: "I review your business",
    body: "I look at your market, your competitors, and your current setup before we speak. The call is a diagnosis, not a pitch.",
  },
  {
    number: "3",
    title: "You get an answer within 24 hours",
    body: "I email you directly. If I can move the needle, I tell you exactly how. If I cannot, I tell you that too. Before you pay anything.",
  },
];

export default function BatonHandoff() {
  return (
    <section
      style={{
        background: "#131009",
        paddingTop: "clamp(48px, 6vw, 80px)",
        paddingBottom: "clamp(48px, 6vw, 80px)",
      }}
    >
      <div className="mx-auto max-w-[960px] px-6">
        <AnimatedSection direction="up">
          <p
            className="text-center uppercase mb-3"
            style={{
              fontSize: "11px",
              letterSpacing: "0.12em",
              color: "#D4A853",
            }}
          >
            WHAT HAPPENS NEXT
          </p>
          <h3
            className="text-center font-bold text-white mb-12"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
          >
            Three steps. No ambiguity.
          </h3>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} direction="up" delay={i * 0.1}>
              <div className="text-center md:text-left">
                <span
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full mb-4 font-bold"
                  style={{
                    fontSize: "1.125rem",
                    color: "#0D0B09",
                    background: "#D4A853",
                  }}
                >
                  {step.number}
                </span>
                <p
                  className="font-semibold text-white mb-2"
                  style={{ fontSize: "1rem" }}
                >
                  {step.title}
                </p>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#A69D8D",
                    lineHeight: 1.65,
                  }}
                >
                  {step.body}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
