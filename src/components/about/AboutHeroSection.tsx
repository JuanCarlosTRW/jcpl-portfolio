"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";

const UnicornScene = dynamic(() => import("unicornstudio-react/next"), {
  ssr: false,
});

const SDK_URL =
  "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.5/dist/unicornStudio.umd.js";

const CULTURE_SCREENSHOT =
  "https://static.wixstatic.com/media/62f926_c777df5150064641aa49c6369141af8c~mv2.png";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Results", href: "/results" },
  { label: "Services", href: "/services" },
];

export default function AboutHeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkBreakpoint = () => {
      const w = window.innerWidth;
      setIsMobile(w < 768);
      setIsTablet(w >= 768 && w < 1024);
    };
    checkBreakpoint();
    window.addEventListener("resize", checkBreakpoint);
    return () => window.removeEventListener("resize", checkBreakpoint);
  }, []);

  const handleMenuClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="about-hero-section" style={{ background: "#0D0B09" }}>
      <div className="about-hero-wrapper">
        {/* Layer 1: Unicorn Studio Background */}
        <div className="about-hero-bg" aria-hidden="true">
          <UnicornScene
            jsonFilePath="/scenes/about-hero.json"
            sdkUrl={SDK_URL}
            width="100%"
            height="100%"
            dpi={1.5}
            scale={1}
            fps={60}
            lazyLoad={true}
          />
        </div>

        {/* Layer 2: Text Overlay */}
        <div className="about-hero-content">
          {/* Headline group — top left */}
          <div className="about-hero-headline-group">
            <h1 className="about-hero-headline">ABOUT</h1>
            <p className="about-hero-eyebrow">CLIENT GROWTH &middot; 2026</p>
          </div>

          {/* Body paragraph — bottom right (desktop) / bottom center (mobile) */}
          <p className="about-hero-body">
            I close the gap between a great service business and the customers
            already searching for it. Website, ads, SEO, and AI. Built as one
            connected system. Run personally. Measured by calls and revenue,
            nothing else.
          </p>
        </div>

        {/* Layer 3: Desktop Thumbnail Cards */}
        {!isMobile && !isTablet && (
          <div className="about-hero-thumbnails">
            <div className="about-hero-thumb">
              <Image
                src="/images/proof/elite-calendar.png"
                alt="Elite Barbershop — fully booked calendar"
                width={160}
                height={100}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <div className="about-hero-thumb">
              <Image
                src={CULTURE_SCREENSHOT}
                alt="Culture Barbershop — website"
                width={160}
                height={100}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
          </div>
        )}

        {/* Layer 4: Bottom Navigation Bar */}
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
                onClick={handleMenuClick}
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
        .about-hero-section {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0;
        }

        /* ── Wrapper: responsive card vs full-bleed ── */
        .about-hero-wrapper {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          border-radius: 0;
        }

        /* ── Background ── */
        .about-hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .about-hero-bg canvas {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover;
        }

        /* ── Text overlay ── */
        .about-hero-content {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
        }

        .about-hero-headline-group {
          position: absolute;
          left: 6%;
          top: 42%;
        }

        .about-hero-headline {
          font-family: var(--font-cormorant), "Cormorant Garamond", serif;
          font-weight: 700;
          font-size: clamp(64px, 10vw, 120px);
          text-transform: uppercase;
          color: #fff;
          line-height: 0.9;
          margin: 0;
          text-shadow: 0 2px 20px rgba(0, 0, 0, 0.6),
            0 4px 40px rgba(0, 0, 0, 0.4);
        }

        .about-hero-eyebrow {
          font-family: var(--font-dm-sans), "DM Sans", sans-serif;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: #fff;
          margin-top: 12px;
          text-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
        }

        .about-hero-body {
          position: absolute;
          left: 58%;
          top: 60%;
          max-width: 340px;
          font-family: var(--font-dm-sans), "DM Sans", sans-serif;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.6;
          color: #fff;
          margin: 0;
          text-shadow: 0 1px 12px rgba(0, 0, 0, 0.6),
            0 2px 24px rgba(0, 0, 0, 0.3);
        }

        /* ── Thumbnail cards (desktop only) ── */
        .about-hero-thumbnails {
          position: absolute;
          right: 4%;
          bottom: 100px;
          z-index: 3;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .about-hero-thumb {
          width: 160px;
          height: 100px;
          border-radius: 8px;
          border: 1px solid #d4a853;
          overflow: hidden;
          background: #181410;
        }

        /* ── Bottom nav ── */
        .about-hero-nav {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 4;
          background: rgba(13, 11, 9, 0.5);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-top: 1px solid rgba(212, 168, 83, 0.12);
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

        .about-hero-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid #d4a853;
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

        /* ── Tablet (768–1023px) ── */
        @media (min-width: 768px) and (max-width: 1023px) {
          .about-hero-section {
            padding: 16px;
          }

          .about-hero-wrapper {
            border-radius: 24px;
            height: 100vh;
          }

          .about-hero-body {
            left: 50%;
            top: auto;
            bottom: 120px;
            transform: translateX(-50%);
            text-align: center;
          }

          .about-hero-headline-group {
            left: 6%;
            top: 38%;
          }

          .about-hero-nav {
            border-radius: 0 0 24px 24px;
          }
        }

        /* ── Mobile (<768px) ── */
        @media (max-width: 767px) {
          .about-hero-section {
            padding: 16px 0;
            display: flex;
            justify-content: center;
          }

          .about-hero-wrapper {
            width: 85vw;
            height: 85vh;
            border-radius: 24px;
          }

          .about-hero-headline-group {
            left: 8%;
            top: 30%;
          }

          .about-hero-headline {
            font-size: clamp(48px, 14vw, 80px);
          }

          .about-hero-eyebrow {
            font-size: 11px;
            margin-top: 8px;
          }

          .about-hero-body {
            left: 8%;
            right: 8%;
            top: auto;
            bottom: 100px;
            max-width: none;
            font-size: 14px;
            text-align: left;
          }

          .about-hero-avatar {
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
      `}</style>
    </section>
  );
}
