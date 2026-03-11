"use client";

import Image from "next/image";

const JUAN_IMG_SRC = "https://static.wixstatic.com/media/62f926_557272f0fa6547d9b0c8d0518959c14b~mv2.jpeg";

const BADGES = [
  "3 active partnerships max",
  "Every system built personally",
  "Direct access, no middlemen",
];

export default function FounderBlock() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ background: "#1A1510" }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 md:items-center">
          <div className="relative max-w-[520px] mx-auto md:mx-0 overflow-hidden">
            <div className="founder-photo-wrapper rounded-xl overflow-hidden" style={{ border: "1px solid #2A2318" }}>
              <Image
                src={JUAN_IMG_SRC}
                alt="Juan Carlos Portillo-Laflamme, founder of Client Growth"
                width={520}
                height={693}
                quality={80}
                sizes="(max-width: 768px) 100vw, 520px"
                className="w-full h-auto object-cover object-top"
                style={{ borderRadius: 12 }}
              />
            </div>
          </div>

          <div>
            <p
              className="uppercase mb-3"
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                color: "#D4A853",
              }}
            >
              WHO BUILDS THIS
            </p>

            <p
              className="text-white font-bold mb-4"
              style={{ fontSize: "1.5rem", lineHeight: 1.4 }}
            >
              I run Client Growth solo. Three clients at a time.
            </p>

            <p
              className="mb-6"
              style={{
                fontSize: "1rem",
                color: "#D2C9B8",
                lineHeight: 1.75,
              }}
            >
              Every system I build gets my direct attention, every week. No junior staff on your account. No account manager between us. When something breaks at 9 PM, I fix it that night.
            </p>

            <p
              className="mb-8"
              style={{
                fontSize: "1rem",
                color: "#D2C9B8",
                lineHeight: 1.75,
              }}
            >
              I own every system from diagnostic to first booked call. No handoffs. Direct access. That is not a limitation of this model — it is the point.
            </p>

            <div className="flex flex-wrap gap-2" style={{ gap: 8 }}>
              {BADGES.map((badge) => (
                <span
                  key={badge}
                  className="inline-block rounded-md"
                  style={{
                    background: "#221D17",
                    border: "1px solid #2A2318",
                    borderLeft: "3px solid #D4A853",
                    color: "#D2C9B8",
                    fontSize: "0.8rem",
                    padding: "8px 16px",
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
