"use client";

import dynamic from "next/dynamic";
import AnimatedSection from "@/components/ui/AnimatedSection";

const UnicornScene = dynamic(() => import("unicornstudio-react/next"), {
  ssr: false,
});

export default function AboutSection() {
  return (
    <section id="about" style={{ background: "#131009", paddingTop: "clamp(64px,10vw,120px)", paddingBottom: "clamp(64px,10vw,120px)" }}>
      <div className="max-w-[1060px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Unicorn Studio animated portrait */}
          <AnimatedSection direction="left">
            <div
              className="rounded-xl overflow-hidden max-h-[280px] lg:max-h-none"
              style={{
                maxWidth: 480,
                aspectRatio: "4/5",
                background: "#0D0B09",
              }}
            >
              <UnicornScene
                jsonFilePath="/scenes/about-portrait.json"
                sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.5/dist/unicornStudio.umd.js"
                width="100%"
                height="100%"
                dpi={1.5}
                scale={1}
              />
            </div>
          </AnimatedSection>

          {/* Right: text */}
          <AnimatedSection direction="right" delay={0.1}>
            <p className="text-[11px] uppercase tracking-[0.16em] mb-4" style={{ color: "#D4A853" }}>WHO I AM</p>
            <h2
              className="text-[clamp(24px,3.5vw,36px)] font-extrabold text-white leading-[1.12] mb-8 tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              I watched good businesses lose to worse ones. The difference was never the work.
            </h2>
            <div className="space-y-4">
              <p className="text-[15px] text-[#D2C9B8] leading-[1.75]">
                I build acquisition systems for local service businesses across Canada and the United States. Every engagement is tracked to one metric: qualified calls on the calendar. Every system built and optimized personally.
              </p>
              <p className="text-[15px] text-[#D2C9B8] leading-[1.75]">
                I started noticing the gap at 16. Good operators losing jobs to competitors half their quality because the other guy had a $400 website on Page 1 and Google Ads running.
              </p>
              <p className="text-[15px] text-[#D2C9B8] leading-[1.75]">
                The work was never the problem. The infrastructure was. That is the gap I built Client Growth to close.
              </p>
            </div>
            <p className="mt-6 text-[13px]" style={{ color: "#D4A853" }}>
              5 systems shipped &nbsp;·&nbsp; Canada + United States &nbsp;·&nbsp; 1 operator
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
