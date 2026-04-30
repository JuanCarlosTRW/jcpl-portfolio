"use client";

import { usePrefersReducedMotionSafe } from "@/components/motion/usePrefersReducedMotionSafe";
import { caseStudyLogos } from "@/components/hero/LogoLoopData";
import LogoCell from "./LogoCell";
import { useMarqueeTrack } from "./useMarqueeTrack";

const IDLE_SPEED_PX_S = 24; // positive = rightward

export default function LogoMarquee() {
  const reduced = usePrefersReducedMotionSafe();
  const { viewportRef, trackRef } = useMarqueeTrack({
    baseSpeed: IDLE_SPEED_PX_S,
    velocityMultiplier: 0.28,
    enabled: !reduced,
  });

  if (reduced) {
    return (
      <div className="csm-row csm-row--logos" aria-label="Client logos">
        <div className="csm-row__viewport csm-row__viewport--static">
          <div className="csm-row__track">
            {caseStudyLogos.map((logo, i) => (
              <LogoCell logo={logo} key={`static-${i}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="csm-row csm-row--logos"
      role="region"
      aria-label="Client logos"
    >
      <div className="csm-row__viewport" ref={viewportRef}>
        <div className="csm-row__track" ref={trackRef}>
          {caseStudyLogos.map((logo, i) => (
            <LogoCell logo={logo} key={`a-${i}`} />
          ))}
          {caseStudyLogos.map((logo, i) => (
            <LogoCell logo={logo} ariaHidden key={`b-${i}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
