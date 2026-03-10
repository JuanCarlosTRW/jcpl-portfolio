"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useTranslations } from "@/context/LocaleContext";

const CAL_LINK = "clientgrowth/15min";
const CAL_BOOKING_URL = `https://app.cal.com/${CAL_LINK}?layout=column&hideEventTypeDetails=1&theme=dark`;

const BallPit = dynamic(() => import("./BallPit"), {
  ssr: false,
  loading: () => <div className="min-h-[360px] bg-transparent" aria-hidden />,
});

const DIAGNOSTIC_STEPS = [
  {
    num: "01",
    body: "I audit your pipeline, your competitors, and your current traffic sources.",
  },
  {
    num: "02",
    body: "I show you where you are losing calls and what fixing it is worth.",
  },
  {
    num: "03",
    body: "I tell you if I can help. No pitch. No pressure.",
  },
];

export default function CalendarSection() {
  const t = useTranslations();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setIsVisible(true);
        }
      },
      { rootMargin: "100px", threshold: 0 }
    );
    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => (el ? observer.unobserve(el) : undefined);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="book-call"
      className="pt-20 pb-20 md:pt-[120px] md:pb-[120px]"
      style={{ background: "#1A1510" }}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12 lg:gap-16">
          {/* Left column: eyebrow + headline + steps + notice */}
          <div className="relative min-h-[400px] min-w-0 md:w-[40%] lg:w-[38%] shrink-0">
            {/* Ball pit as background layer */}
            {isVisible && (
              <div
                className="absolute inset-0 hidden md:block"
                style={{ minHeight: 400 }}
                aria-hidden
              >
                <BallPit
                  className="absolute inset-0 h-full w-full"
                  colors={[0x9b8bc6, 0x3b82f6, 0xffffff]}
                  followCursor={false}
                />
              </div>
            )}
            <div className="relative z-10">
              <span
                className="uppercase block mb-3"
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.15em",
                  color: "#D4A853",
                  fontWeight: 500,
                }}
              >
                THE DIAGNOSTIC
              </span>

              <h2 className="text-[clamp(1.75rem,3.5vw,2.25rem)] font-bold leading-tight text-white">
                {t<string>("bookCall.headline")}
              </h2>

              <p className="mt-4 text-sm text-white/70 leading-relaxed">
                {t<string>("bookCall.body")}
              </p>

              {/* What happens on the call */}
              <div className="mt-8 space-y-5">
                {DIAGNOSTIC_STEPS.map((step) => (
                  <div key={step.num} className="flex items-start gap-3">
                    <span
                      className="shrink-0 font-mono text-xs mt-0.5"
                      style={{ color: "rgba(212,168,83,0.6)" }}
                    >
                      {step.num}
                    </span>
                    <p className="text-sm leading-relaxed" style={{ color: "#D2C9B8" }}>
                      {step.body}
                    </p>
                  </div>
                ))}
              </div>

              {/* Notice */}
              <div
                className="mt-8 rounded-lg p-4"
                role="status"
                style={{
                  background: "rgba(212,168,83,0.08)",
                  border: "1px solid rgba(212,168,83,0.22)",
                }}
              >
                <p className="text-xs leading-relaxed" style={{ color: "#A69D8D" }}>
                  {t<string>("bookCall.notice")}
                </p>
              </div>
            </div>
          </div>

          {/* Right column: calendar */}
          <div className="flex flex-1 flex-col">
            <div
              className="relative min-h-[560px] overflow-hidden rounded-xl md:min-h-[640px] cal-embed-wrapper"
              style={{
                background: "#1A1510",
                border: "1px solid #2A2318",
                borderRadius: 12,
                padding: 6,
                overflow: "hidden",
              }}
            >
              {!isVisible ? (
                <div
                  className="flex h-full min-h-[520px] items-center justify-center text-[15px] md:min-h-[600px]"
                  style={{ color: "#A69D8D" }}
                  aria-live="polite"
                >
                  Loading calendar…
                </div>
              ) : (
                <iframe
                  src={CAL_BOOKING_URL}
                  title="Book a call"
                  className="h-full min-h-[520px] w-full border-0 rounded-lg md:min-h-[600px]"
                  style={{ width: "100%", height: "100%" }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
