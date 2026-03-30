"use client";

import { useState, useEffect, Suspense, lazy } from "react";
import Link from "next/link";
import Image from "next/image";

const ShaderGradientCanvas = lazy(() =>
  import("@shadergradient/react").then((m) => ({ default: m.ShaderGradientCanvas }))
);
const ShaderGradient = lazy(() =>
  import("@shadergradient/react").then((m) => ({ default: m.ShaderGradient }))
);

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Results", href: "/results" },
  { label: "Services", href: "/services" },
];

export default function AboutHeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section className="about-hero-section">
      {/* Layer 0: ShaderGradient background — visible at rounded corners */}
      <div className="about-hero-gradient-bg" aria-hidden="true">
        <Suspense
          fallback={
            <div
              style={{
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(135deg, #ffe18f 0%, #dbaf63 50%, #e1b16e 100%)",
              }}
            />
          }
        >
          <ShaderGradientCanvas
            style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
            pointerEvents="none"
          >
            <ShaderGradient
              animate="on"
              brightness={1.2}
              cAzimuthAngle={180}
              cDistance={3.6}
              cPolarAngle={90}
              cameraZoom={1}
              color1="#ffe18f"
              color2="#dbaf63"
              color3="#e1b16e"
              envPreset="city"
              grain="on"
              lightType="3d"
              positionX={-1.4}
              positionY={0}
              positionZ={0}
              range="disabled"
              rangeEnd={40}
              rangeStart={0}
              reflection={0.1}
              rotationX={0}
              rotationY={10}
              rotationZ={50}
              type="plane"
              uAmplitude={1}
              uDensity={1.3}
              uFrequency={5.5}
              uSpeed={0.4}
              uStrength={4}
              uTime={0}
              wireframe={false}
            />
          </ShaderGradientCanvas>
        </Suspense>
      </div>

      {/* Layer 1: Photo card */}
      <div className="about-hero-card">
        {/* Headshot photo */}
        <div className="about-hero-photo-wrapper">
          <Image
            src="/images/juan-headshot-founder.jpeg"
            alt="Juan Carlos Portillo-Laflamme — Founder of Client Growth"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="about-hero-photo"
          />
          {/* Bottom gradient fade for readability */}
          <div className="about-hero-photo-fade" aria-hidden="true" />
        </div>

        {/* Layer 2: Text content */}
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

        {/* Layer 3: Bottom Navigation Bar */}
        <nav className="about-hero-nav">
          <div className="about-hero-nav-inner">
            {/* Left: Avatar */}
            <Link href="/about" className="about-hero-avatar-link">
              <Image
                src="/images/juan-headshot-founder.jpeg"
                alt="Juan — Founder"
                width={48}
                height={48}
                className="about-hero-avatar"
              />
            </Link>

            {/* Center: Nav Links (desktop only) */}
            {!isMobile && (
              <div className="about-hero-nav-links">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="about-hero-nav-link"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            {/* Right: CTA (desktop) or MENU (mobile) */}
            {isMobile ? (
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="about-hero-menu-btn"
                type="button"
              >
                MENU +
              </button>
            ) : (
              <Link href="/apply" className="about-hero-cta-btn">
                CONTACT +
              </Link>
            )}
          </div>
        </nav>
      </div>

      <style jsx>{`
        /* ── Section: full viewport with gradient behind ── */
        .about-hero-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 16px;
          overflow: hidden;
        }

        /* ── Gradient background fills entire section ── */
        .about-hero-gradient-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        /* ── Photo card ── */
        .about-hero-card {
          position: relative;
          z-index: 1;
          width: 100%;
          height: calc(100vh - 32px);
          border-radius: 28px;
          overflow: hidden;
        }

        .about-hero-photo-wrapper {
          position: absolute;
          inset: 0;
        }

        :global(.about-hero-photo) {
          object-fit: cover;
          object-position: center 20%;
          width: 100% !important;
          height: 100% !important;
        }

        .about-hero-photo-fade {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 55%;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.85) 0%,
            rgba(0, 0, 0, 0.5) 40%,
            transparent 100%
          );
          pointer-events: none;
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
          bottom: 100px;
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

        /* ── Bottom nav ── */
        .about-hero-nav {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 4;
          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 0 0 28px 28px;
        }

        .about-hero-nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 24px;
          max-width: 1280px;
          margin: 0 auto;
        }

        .about-hero-avatar-link {
          flex-shrink: 0;
          pointer-events: auto;
        }

        :global(.about-hero-avatar) {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1.5px solid rgba(255, 255, 255, 0.25);
          object-fit: cover;
        }

        .about-hero-nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
          pointer-events: auto;
        }

        .about-hero-nav-link {
          font-family: var(--font-dm-sans), "DM Sans", sans-serif;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #fff;
          text-decoration: none;
          transition: opacity 0.2s ease;
        }

        .about-hero-nav-link:hover {
          opacity: 0.7;
        }

        .about-hero-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 24px;
          background: #fff;
          color: #0d0b09;
          border-radius: 999px;
          font-family: var(--font-dm-sans), "DM Sans", sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-decoration: none;
          text-transform: uppercase;
          transition: opacity 0.2s ease;
          pointer-events: auto;
        }

        .about-hero-cta-btn:hover {
          opacity: 0.85;
        }

        .about-hero-menu-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 22px;
          background: #fff;
          color: #0d0b09;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          font-family: var(--font-dm-sans), "DM Sans", sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          pointer-events: auto;
        }

        /* ── Mobile (<768px) ── */
        @media (max-width: 767px) {
          .about-hero-section {
            padding: 12px;
          }

          .about-hero-card {
            width: 100%;
            height: calc(100vh - 24px);
            border-radius: 24px;
          }

          :global(.about-hero-photo) {
            object-position: center 15%;
          }

          .about-hero-headline {
            font-size: clamp(48px, 14vw, 80px);
          }

          .about-hero-eyebrow {
            font-size: 11px;
            margin-top: 10px;
          }

          .about-hero-body {
            bottom: 90px;
            font-size: 14px;
            width: 88%;
          }

          :global(.about-hero-avatar) {
            width: 40px;
            height: 40px;
          }

          .about-hero-nav-inner {
            padding: 12px 16px;
          }

          .about-hero-nav {
            border-radius: 0 0 24px 24px;
          }
        }

        /* ── Tablet (768–1023px) ── */
        @media (min-width: 768px) and (max-width: 1023px) {
          .about-hero-section {
            padding: 16px;
          }

          .about-hero-card {
            border-radius: 28px;
          }

          .about-hero-nav {
            border-radius: 0 0 28px 28px;
          }
        }

        /* ── Desktop (1024+) ── */
        @media (min-width: 1024px) {
          .about-hero-section {
            padding: 20px;
          }

          .about-hero-card {
            height: calc(100vh - 40px);
            border-radius: 32px;
          }

          .about-hero-content {
            flex-direction: row;
            align-items: flex-end;
            justify-content: space-between;
            padding: 0 5% 130px 5%;
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

          .about-hero-nav {
            border-radius: 0 0 32px 32px;
          }
        }
      `}</style>
    </section>
  );
}
