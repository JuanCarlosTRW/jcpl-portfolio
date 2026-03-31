"use client";

import dynamic from "next/dynamic";

const UnicornScene = dynamic(() => import("unicornstudio-react/next"), {
  ssr: false,
});

export default function AboutHeroSection() {
  return (
    <section className="about-hero-section">
      {/* Unicorn Studio WebGL scene */}
      <div className="about-hero-card">
        <div className="about-hero-scene-wrapper" aria-hidden="true">
          <UnicornScene
            projectId="bi8sQ4960W9R0aV2JSta"
            sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.5/dist/unicornStudio.umd.js"
            width="100%"
            height="100%"
            scale={1}
            dpi={1.5}
            lazyLoad={true}
          />
        </div>

        {/* Text content */}
        <div className="about-hero-content">
          {/* Headline group */}
          <div className="about-hero-headline-group">
            <h1 className="about-hero-headline">ABOUT</h1>
            <p className="about-hero-eyebrow">CLIENT GROWTH &middot; 2026</p>
          </div>

          {/* Body paragraph */}
          <p className="about-hero-body">
            I close the gap between a great service business and the customers
            already searching for it. Website, ads, SEO, and AI. Built as one
            connected system. Run personally. Measured by calls and revenue,
            nothing else.
          </p>
        </div>
      </div>

      <style jsx>{`
        /* ── Section ── */
        .about-hero-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background: #0D0B09;
        }

        /* ── Scene card ── */
        .about-hero-card {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        .about-hero-scene-wrapper {
          position: absolute;
          inset: 0;
        }

        .about-hero-scene-wrapper > div,
        .about-hero-scene-wrapper canvas,
        .about-hero-scene-wrapper iframe {
          position: absolute !important;
          inset: 0 !important;
          width: 100% !important;
          height: 100% !important;
        }

        /* ── Text overlay ── */
        .about-hero-content {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .about-hero-headline-group {
          text-align: center;
        }

        .about-hero-headline {
          font-family: var(--font-cormorant), "Cormorant Garamond", serif;
          font-weight: 700;
          font-size: clamp(56px, 10vw, 130px);
          text-transform: uppercase;
          color: #fff;
          line-height: 0.9;
          margin: 0;
          text-shadow: 0 2px 30px rgba(0, 0, 0, 0.5),
            0 4px 60px rgba(0, 0, 0, 0.3);
        }

        .about-hero-eyebrow {
          font-family: var(--font-dm-sans), "DM Sans", sans-serif;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: rgba(255, 255, 255, 0.85);
          margin-top: 14px;
          text-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
        }

        .about-hero-body {
          position: absolute;
          bottom: 60px;
          left: 50%;
          transform: translateX(-50%);
          width: 85%;
          max-width: 520px;
          font-family: var(--font-dm-sans), "DM Sans", sans-serif;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.9);
          text-align: center;
          margin: 0;
          text-shadow: 0 1px 12px rgba(0, 0, 0, 0.6),
            0 2px 24px rgba(0, 0, 0, 0.3);
        }

        /* ── Mobile (<768px) ── */
        @media (max-width: 767px) {
          .about-hero-headline {
            font-size: clamp(48px, 14vw, 80px);
          }

          .about-hero-eyebrow {
            font-size: 11px;
            margin-top: 10px;
          }

          .about-hero-body {
            bottom: 40px;
            font-size: 14px;
            width: 88%;
          }
        }

        /* ── Desktop (1024+) ── */
        @media (min-width: 1024px) {
          .about-hero-content {
            flex-direction: row;
            align-items: flex-end;
            justify-content: space-between;
            padding: 0 5% 80px 5%;
          }

          .about-hero-headline-group {
            text-align: left;
          }

          .about-hero-headline {
            font-size: clamp(80px, 8vw, 140px);
          }

          .about-hero-body {
            position: relative;
            bottom: auto;
            left: auto;
            transform: none;
            max-width: 380px;
            text-align: left;
            width: auto;
            font-size: 15px;
          }
        }
      `}</style>
    </section>
  );
}
