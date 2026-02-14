import React from "react";
import { SystemTimeline } from "../src/components/SystemTimeline";

export default function SystemPage() {
  return (
    <main className="bg-black min-h-screen">
      <SystemTimeline />
      {/* TODO: Add per-step visuals, CTA after step 3 and at bottom (Milestone B) */}
    </main>
  );
}
