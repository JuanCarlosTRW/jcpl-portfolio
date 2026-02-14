import React from "react";
import { HeroCommandCenter } from "../components/HeroCommandCenter";
import { AgitationCards } from "../components/AgitationCards";
import { SystemTimeline } from "../components/SystemTimeline";
import { TransformationCompare } from "../components/TransformationCompare";
import { EvidenceRoom } from "../components/EvidenceRoom";
import { PartnerAuthority } from "../components/PartnerAuthority";
import { QualificationFormStepper } from "../components/QualificationFormStepper";

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
