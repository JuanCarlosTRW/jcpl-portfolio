"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function PremiumNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 left-0 w-full z-[100]"
      style={{
        background: scrolled ? "rgba(13,11,9,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "background 0.3s ease, backdrop-filter 0.3s ease",
      }}
    >
      <div
        className="flex items-center justify-between"
        style={{
          padding: "28px 60px",
        }}
      >
        {/* Left — Work link */}
        <Link
          href="/results"
          aria-label="View our work"
          className="nav-link"
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 11,
            fontWeight: 500,
            textTransform: "uppercase" as const,
            letterSpacing: "0.12em",
            color: "rgba(240,234,214,0.45)",
            textDecoration: "none",
            transition: "color 0.25s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(240,234,214,1)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,234,214,0.45)")}
        >
          Work
        </Link>

        {/* Center — Logo */}
        <Link
          href="/"
          aria-label="Client Growth — Home"
          className="absolute left-1/2 -translate-x-1/2"
          style={{ textDecoration: "none" }}
        >
          <span
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: 22,
              fontWeight: 400,
              letterSpacing: "0.02em",
              color: "#F0EAD6",
            }}
          >
            Client{" "}
            <span style={{ color: "#D4A853" }}>Growth</span>
          </span>
        </Link>

        {/* Right — Results + CTA */}
        <div className="flex items-center gap-8">
          <Link
            href="/results"
            aria-label="View client results"
            className="nav-link hidden sm:inline-block"
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 11,
              fontWeight: 500,
              textTransform: "uppercase" as const,
              letterSpacing: "0.12em",
              color: "rgba(240,234,214,0.45)",
              textDecoration: "none",
              transition: "color 0.25s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(240,234,214,1)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,234,214,0.45)")}
          >
            Results
          </Link>

          <Link
            href="/apply"
            aria-label="Work with me"
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 11,
              fontWeight: 500,
              textTransform: "uppercase" as const,
              letterSpacing: "0.1em",
              background: "#D4A853",
              color: "#0D0B09",
              padding: "10px 24px",
              borderRadius: 0,
              textDecoration: "none",
              transition: "filter 0.2s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = "brightness(1.12)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = "none";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Work With Me
          </Link>
        </div>
      </div>

      {/* Mobile responsive override */}
      <style jsx>{`
        @media (max-width: 768px) {
          nav > div {
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
            padding: 0 16px !important;
            width: 100% !important;
            box-sizing: border-box !important;
            overflow: hidden !important;
            height: 56px !important;
          }
          nav > div > a:first-child {
            font-size: 16px !important;
            white-space: nowrap !important;
            flex-shrink: 1 !important;
            min-width: 0 !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
          }
          nav > div > a:first-child span {
            font-size: 16px !important;
          }
          nav > div > div:last-child a:last-child {
            flex-shrink: 0 !important;
            font-size: 11px !important;
            padding: 8px 14px !important;
            white-space: nowrap !important;
          }
        }
      `}</style>
    </nav>
  );
}
