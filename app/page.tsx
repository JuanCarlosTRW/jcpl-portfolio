import React from "react";
import { HeroCommandCenter } from "../src/components/HeroCommandCenter";
import { AgitationCards } from "../src/components/AgitationCards";
import { SystemTimeline } from "../src/components/SystemTimeline";
import { TransformationCompare } from "../src/components/TransformationCompare";
import { EvidenceRoom } from "../src/components/EvidenceRoom";
import { PartnerAuthority } from "../src/components/PartnerAuthority";
import { QualificationFormStepper } from "../src/components/QualificationFormStepper";

export default function HomePage() {
  return (
    <main className="bg-black min-h-screen">
      <HeroCommandCenter />
      <AgitationCards />
      <SystemTimeline />
      <TransformationCompare />
      <EvidenceRoom />
      <PartnerAuthority />
      <QualificationFormStepper />
    </main>
  );
}
