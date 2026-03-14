"use client";

import Image from "next/image";
import Link from "next/link";

const JUAN_IMG_SRC =
  "https://static.wixstatic.com/media/62f926_557272f0fa6547d9b0c8d0518959c14b~mv2.jpeg";

const CHIPS = [
  "3 active partnerships max",
  "Every system built personally",
  "Direct access. No middlemen.",
];

export default function FounderBlock() {
  return (
    <section className="py-20 md:py-28" style={{ background: "#1A1510" }}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <p
          className="text-center uppercase mb-12 md:mb-16"
          style={{
            fontSize: "0.6875rem",
            letterSpacing: "0.15em",
            color: "#D4A853",
          }}
        >
          WHO RUNS THE SYSTEM
        </p>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16 md:items-center">

          {/* Portrait */}
          <div className="max-w-[440px] mx-auto md:mx-0 relative">
            <Image
              src={JUAN_IMG_SRC}
              alt="Juan Carlos Portillo-Laflamme, founder and sole operator of Client Growth"
              width={440}
              height={590}
              quality={85}
              sizes="(max-width: 768px) 100vw, 440px"
              className="w-full h-auto object-cover object-top"
              style={{
                borderRadius: 12,
                border: "1px solid #2A2318",
              }}
            />
            {/* Subtle bottom-fade overlay for polish */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "30%",
                borderRadius: "0 0 12px 12px",
                background: "linear-gradient(to top, rgba(26,21,16,0.6) 0%, transparent 100%)",
                pointerEvents: "none",
              }}
            />
          </div>

          {/* Copy */}
          <div className="flex flex-col gap-6">

            <h2
              className="text-white font-bold"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)", lineHeight: 1.15, margin: 0 }}
            >
              One operator. Full accountability.
            </h2>

            <p
              style={{
                fontSize: "1.0625rem",
                color: "#D2C9B8",
                lineHeight: 1.68,
                margin: 0,
              }}
            >
              Most service businesses have tried the agency route. Multiple contacts. Handoffs between departments. A junior account manager running things six months in.
            </p>

            <div className="flex flex-col gap-4">
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "#A8998A",
                  lineHeight: 1.78,
                  margin: 0,
                }}
              >
                I built Client Growth around the opposite model. Three active partnerships maximum. Every system built and optimized personally. No account manager between us.
              </p>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "#A8998A",
                  lineHeight: 1.78,
                  margin: 0,
                }}
              >
                Strategy, conversion, paid acquisition, and optimization stay connected because the same person runs all of it. That person is me.
              </p>
            </div>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-2">
              {CHIPS.map((chip) => (
                <span
                  key={chip}
                  style={{
                    background: "#221D17",
                    border: "1px solid #2A2318",
                    borderLeft: "3px solid rgba(212,168,83,0.65)",
                    color: "#D2C9B8",
                    fontSize: "0.8125rem",
                    padding: "9px 16px",
                    borderRadius: 6,
                    lineHeight: 1.3,
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* Closing line */}
            <p
              style={{
                fontSize: "0.875rem",
                color: "#7A6E62",
                lineHeight: 1.68,
                borderTop: "1px solid #2A2318",
                paddingTop: 20,
                margin: 0,
              }}
            >
              If performance improves, you know why. If something is
              underperforming, you know who owns it.
            </p>

            <Link
              href="/about"
              style={{
                fontSize: "0.8125rem",
                color: "#8A7E74",
                letterSpacing: "-0.006em",
                textDecoration: "none",
                transition: "color 180ms ease",
              }}
              onMouseOver={(e) => { e.currentTarget.style.color = "#D2C9B8"; }}
              onMouseOut={(e) => { e.currentTarget.style.color = "#8A7E74"; }}
            >
              Why this model works →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
