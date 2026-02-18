"use client";

import FounderUnicornProfile from "./FounderUnicornProfile";

/**
 * FounderCard — animated portrait via UnicornStudio.
 * Fills container, transparent background, no extra chrome.
 */
export default function FounderCard() {
  return (
    <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-transparent">
      <FounderUnicornProfile />
    </div>
  );
}
