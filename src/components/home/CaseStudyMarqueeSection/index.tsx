"use client";

import OwnerMarquee from "./OwnerMarquee";
import LogoMarquee from "./LogoMarquee";
import "./styles.css";

export default function CaseStudyMarqueeSection() {
  return (
    <section id="testimonials" className="csm-section" aria-label="Case studies and clients">
      <div className="csm-eyebrow">
        <span className="csm-eyebrow__kicker">Proof · Founders we&apos;ve built for</span>
        <h2 className="csm-eyebrow__title">
          Real owners, real revenue, real systems shipping every week.
        </h2>
      </div>
      <OwnerMarquee />
      <LogoMarquee />
    </section>
  );
}
