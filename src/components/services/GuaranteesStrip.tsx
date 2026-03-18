"use client";

import { Reveal } from "@/components/motion";
import { useLocale } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";

export default function GuaranteesStrip() {
  const { locale } = useLocale();
  const g = translations[locale].services.guarantees;

  return (
    <Reveal>
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6">

        {/* Left: Featured standard */}
        <div
          className="relative rounded-xl p-8 flex flex-col justify-between overflow-hidden"
          style={{
            background: "#1E1A14",
            border: "1px solid #2A2318",
            borderTop: "2px solid #D4A853",
            minHeight: "400px",
          }}
        >
          {/* Orb */}
          <div
            className="absolute left-1/2 bottom-[20%] -translate-x-1/2 w-[300px] h-[200px] rounded-full pointer-events-none z-0 max-md:w-[180px] max-md:h-[120px]"
            style={{
              background: "radial-gradient(ellipse, rgba(212,168,83,0.06) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
            aria-hidden
          />
          <div className="relative z-10 flex flex-col justify-between h-full gap-10">
            <div>
              <p
                className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
                style={{ color: "#D4A853" }}
              >
                {g.standardLabel}
              </p>
              <h3
                className="text-2xl font-semibold leading-snug mb-5"
                style={{ color: "#F5F0E8" }}
              >
                {g.standardHeading}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#D2C9B8" }}
              >
                {g.standardBody}
              </p>
            </div>
            <div>
              <p
                className="text-xs"
                style={{ color: "#756D63" }}
              >
                {g.standardVerified}
              </p>
            </div>
          </div>
        </div>

        {/* Right: Three partnership standards */}
        <div className="flex flex-col gap-4">
          <div
            className="rounded-xl p-6"
            style={{
              background: "#1E1A14",
              border: "1px solid #2A2318",
              borderLeft: "3px solid rgba(212,168,83,0.35)",
            }}
          >
            <p
              className="text-base font-semibold mb-2"
              style={{ color: "#F5F0E8" }}
            >
              {g.milestone}
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#A69D8D" }}
            >
              {g.milestoneBody}
            </p>
          </div>
          <div
            className="rounded-xl p-6"
            style={{
              background: "#1E1A14",
              border: "1px solid #2A2318",
              borderLeft: "3px solid rgba(212,168,83,0.35)",
            }}
          >
            <p
              className="text-base font-semibold mb-2"
              style={{ color: "#F5F0E8" }}
            >
              {g.ownership}
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#A69D8D" }}
            >
              {g.ownershipBody}
            </p>
          </div>
          <div
            className="rounded-xl p-6"
            style={{
              background: "#1E1A14",
              border: "1px solid #2A2318",
              borderLeft: "3px solid rgba(212,168,83,0.35)",
            }}
          >
            <p
              className="text-base font-semibold mb-2"
              style={{ color: "#F5F0E8" }}
            >
              {g.preEngagement}
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#A69D8D" }}
            >
              {g.preEngagementBody}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
