"use client";

import dynamic from "next/dynamic";

const UnicornScene = dynamic(() => import("unicornstudio-react/next"), {
  ssr: false,
});

export default function AboutPage() {
  return (
    <div style={{ background: "#0D0B09", minHeight: "100vh" }}>
      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-36 md:pb-16 text-center px-6">
        <p
          className="uppercase mb-4"
          style={{
            fontSize: 12,
            letterSpacing: "0.15em",
            color: "#D4A853",
            fontFamily: "var(--font-dm-sans), sans-serif",
          }}
        >
          WHO I AM
        </p>
        <h1
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 300,
            color: "#F0EAD6",
            lineHeight: 1.1,
          }}
        >
          I watched good businesses lose to worse ones.
          <br />
          The difference was never the work.
        </h1>
      </section>

      {/* Two-column: animation + bio */}
      <section className="pb-20 px-6">
        <div
          className="about-page-grid mx-auto"
          style={{
            maxWidth: 1000,
            display: "grid",
            gridTemplateColumns: "45% 55%",
            gap: 48,
            alignItems: "start",
          }}
        >
          <style>{`@media (max-width: 767px) { .about-page-grid { grid-template-columns: 1fr !important; } }`}</style>

          {/* Left — Unicorn Studio portrait */}
          <div
            className="about-page-anim"
            style={{
              borderRadius: 12,
              overflow: "hidden",
              aspectRatio: "3 / 4",
              maxWidth: 420,
            }}
          >
            <UnicornScene
              projectId="bi8sQ4960W9R0aV2JSta"
              sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.6/dist/unicornStudio.umd.js"
              width="100%"
              height="100%"
              dpi={1.5}
              scale={1}
            />
          </div>

          {/* Right — text */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: 15,
                color: "rgba(240,234,214,0.85)",
                lineHeight: 1.7,
                marginBottom: 20,
              }}
            >
              I build acquisition systems for local service businesses across
              Canada and the United States. Every engagement is tracked to one
              metric: qualified calls on the calendar. I only take on clients I
              am confident I can move the needle for.
            </p>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: 15,
                color: "rgba(240,234,214,0.85)",
                lineHeight: 1.7,
                marginBottom: 20,
              }}
            >
              I started building these systems at 16. I am 18 now. By the time
              most people finish their first internship, I will have run more
              live ad accounts than most agency employees touch in a career.
            </p>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: 15,
                color: "rgba(240,234,214,0.85)",
                lineHeight: 1.7,
                marginBottom: 32,
              }}
            >
              The work was never the problem. The infrastructure was. That is
              the gap I built Client Growth to close.
            </p>

            {/* Stat bar */}
            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: 13,
                color: "#D4A853",
                letterSpacing: "0.08em",
              }}
            >
              $41,085 tracked &nbsp;&middot;&nbsp; 5 systems live
              &nbsp;&middot;&nbsp; Canada + United States
            </p>
          </div>
        </div>
      </section>

      {/* How I operate */}
      <section className="pb-20 px-6">
        <div className="mx-auto" style={{ maxWidth: 1000 }}>
          <h2
            className="text-center mb-12"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 300,
              color: "#F0EAD6",
            }}
          >
            One operator. Full accountability.
          </h2>

          <div
            className="about-cards-grid grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {[
              {
                title: "Personally built",
                body: "Every site, campaign, and optimization is done by me. Not delegated.",
              },
              {
                title: "Direct access",
                body: "You message me. I respond. No account managers. No tickets.",
              },
              {
                title: "Selective by design",
                body: "I only take on clients I know I can produce a return for.",
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: "#141210",
                  border: "1px solid rgba(212,168,83,0.1)",
                  borderRadius: 16,
                  padding: 32,
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: 22,
                    color: "#F0EAD6",
                    marginBottom: 12,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: 14,
                    color: "rgba(240,234,214,0.55)",
                    lineHeight: 1.6,
                  }}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h2
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(24px, 4vw, 36px)",
            color: "#F0EAD6",
          }}
        >
          Ready to see what this system can do for your business?
        </h2>
        <p
          className="mt-3"
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 15,
            color: "rgba(240,234,214,0.5)",
          }}
        >
          One call. I review your market before we speak. No pitch. No pressure.
        </p>
        <div className="mt-6">
          <a
            href="/apply"
            className="inline-block rounded-md px-8 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] transition-transform hover:scale-[1.02]"
            style={{ background: "#D4A853", color: "#0D0B09", borderRadius: 6 }}
          >
            Apply to be a Partner →
          </a>
        </div>
        <p
          className="mt-3"
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 13,
            color: "rgba(240,234,214,0.35)",
          }}
        >
          Response within 24 hours.
        </p>
      </section>
    </div>
  );
}
