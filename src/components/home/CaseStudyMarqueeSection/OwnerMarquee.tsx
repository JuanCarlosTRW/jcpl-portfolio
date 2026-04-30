"use client";

import { usePrefersReducedMotionSafe } from "@/components/motion/usePrefersReducedMotionSafe";
import MarqueeCard from "./MarqueeCard";
import { useMarqueeTrack } from "./useMarqueeTrack";
import { ownerCards } from "./data";

const IDLE_SPEED_PX_S = -34; // negative = leftward

export default function OwnerMarquee() {
  const reduced = usePrefersReducedMotionSafe();
  const { viewportRef, trackRef } = useMarqueeTrack({
    baseSpeed: IDLE_SPEED_PX_S,
    velocityMultiplier: 0.4,
    enabled: !reduced,
  });

  if (reduced) {
    return (
      <div className="csm-row csm-row--owners" aria-label="Founders we work with">
        <div className="csm-row__viewport csm-row__viewport--static">
          <div className="csm-row__track">
            {ownerCards.map((card, i) => (
              <MarqueeCard card={card} key={`static-${i}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="csm-row csm-row--owners"
      role="region"
      aria-label="Founders we work with"
    >
      <div className="csm-row__viewport" ref={viewportRef}>
        <div className="csm-row__track" ref={trackRef}>
          {ownerCards.map((card, i) => (
            <MarqueeCard card={card} key={`a-${i}`} />
          ))}
          {ownerCards.map((card, i) => (
            <MarqueeCard card={card} ariaHidden key={`b-${i}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
