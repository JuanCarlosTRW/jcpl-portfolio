"use client";

import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { useLocale } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";

function CheckIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
      <path d="M4 8.5l3 3 5-5.5" stroke="#D4A853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
      <path d="M4 4l8 8M12 4l-8 8" stroke="#756D63" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function QualificationCTA() {
  const { locale } = useLocale();
  const f = translations[locale].homepage.fitNotFit;

  const forYouIf = [f.rightFit1, f.rightFit2, f.rightFit3];
  const notForYouIf = [f.notFit1, f.notFit2, f.notFit3];

  return (
    <section id="qualify" className="relative overflow-hidden py-16 border-b border-[#2A2318]" style={{ background: "#0D0B09" }}>
      <SectionWrapper className="relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <SectionLabel label={f.eyebrow} className="mb-4 !text-[#D4A853]" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              This is not for everyone. Here is who it is for.
            </h2>
            <p className="text-[#A69D8D] text-base md:text-lg text-center">
              {f.sub}
            </p>
          </div>

          <Reveal>
            <div className="grid gap-6 md:grid-cols-2 mb-12 fitment-cards">
              <div
                className="rounded-2xl p-7 md:p-8 lift-card fit-card fit-card-positive"
                style={{
                  border: "1px solid rgba(212,168,83,0.35)",
                  background: "#1E1A14",
                  boxShadow: "0 0 40px rgba(212, 168, 83, 0.04) inset",
                }}
              >
                <h3 className="text-[1.25rem] font-bold text-white mb-5">
                  You are the right fit if:
                </h3>
                <ul className="space-y-3.5">
                  {forYouIf.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] leading-[1.7]" style={{ color: "#D2C9B8" }}>
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="rounded-2xl p-7 md:p-8 lift-card fit-card fit-card-negative"
                style={{
                  border: "1px solid #2A2318",
                  background: "#1E1A14",
                }}
              >
                <h3 className="text-[1.25rem] font-bold text-white mb-5">
                  This is not the right fit if:
                </h3>
                <ul className="space-y-3.5">
                  {notForYouIf.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] leading-[1.7]" style={{ color: "#D2C9B8" }}>
                      <XIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </Reveal>

          <Reveal delay={0.1}>
            <div
              className="border-t pt-12 pb-10"
              style={{ borderColor: "#2A2318" }}
            >
              {/* Gold accent line */}
            </div>
          </Reveal>
        </div>
      </SectionWrapper>
    </section>
  );
}
