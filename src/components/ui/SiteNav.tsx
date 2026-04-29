"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import KnightLogo from "@/components/ui/KnightLogo";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { useLocale } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";
import { usePrefersReducedMotionSafe } from "@/components/motion/usePrefersReducedMotionSafe";

const GOLD_BORDER = "rgba(212, 168, 83, 0.18)";
const NAV_BG = "linear-gradient(180deg, #1A1208 0%, #0D0B09 100%)";

export default function SiteNav() {
  const pathname = usePathname();
  const { locale } = useLocale();
  const nav = translations[locale].nav;
  const reducedMotion = usePrefersReducedMotionSafe();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: nav.results, href: "/results", anchor: "", isCta: false },
    { name: nav.about, href: "/about", anchor: "", isCta: false },
    { name: nav.pricing, href: "/#pricing", anchor: "pricing", isCta: false },
    { name: nav.apply, href: "/apply", anchor: "", isCta: true },
  ];

  useEffect(() => {
    if (!menuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    setMenuOpen(false);
    if (!anchor) return;
    if (pathname !== "/") return;
    const el = document.getElementById(anchor);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const slideDuration = reducedMotion ? 0 : 0.32;
  const fadeDuration = reducedMotion ? 0 : 0.2;

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[60] grid items-stretch"
        style={{
          height: 72,
          background: NAV_BG,
          borderBottom: `1px solid ${GOLD_BORDER}`,
          gridTemplateColumns: "1fr auto 1fr",
        }}
      >
        <div className="flex items-center pl-6">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="site-menu-panel"
            className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-[var(--brand-accent)] rounded-sm"
            style={{ background: "none", border: "none", cursor: "pointer", padding: "8px 4px" }}
          >
            <span
              aria-hidden="true"
              style={{ display: "inline-flex", flexDirection: "column", gap: 4, width: 18 }}
            >
              <span style={{ display: "block", height: 1, width: "100%", background: "#F5F0E8" }} />
              <span style={{ display: "block", height: 1, width: "100%", background: "#F5F0E8" }} />
              <span style={{ display: "block", height: 1, width: "100%", background: "#F5F0E8" }} />
            </span>
            <span
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#F5F0E8",
                fontWeight: 500,
              }}
            >
              MENU
            </span>
          </button>
        </div>

        <Link
          href="/"
          className="flex items-center gap-3 px-8"
          aria-label="Client Growth — home"
          style={{ borderLeft: `1px solid ${GOLD_BORDER}`, borderRight: `1px solid ${GOLD_BORDER}` }}
        >
          <KnightLogo size={36} spinInterval={8000} />
          <span
            className="brand-lockup"
            style={{
              display: "inline-flex",
              flexDirection: "column",
              fontFamily: "var(--font-cormorant), Georgia, serif",
              color: "#F5F0E8",
              textTransform: "uppercase",
              lineHeight: 1.0,
              letterSpacing: "0.18em",
            }}
          >
            <span style={{ fontSize: 9, fontWeight: 400, opacity: 0.85 }}>THE</span>
            <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.16em" }}>CLIENT GROWTH</span>
            <span style={{ fontSize: 9, fontWeight: 400, opacity: 0.85 }}>AGENCY</span>
          </span>
        </Link>

        <div className="flex items-center justify-end pr-6">
          <Link
            href="/apply"
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 11,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#F5F0E8",
              fontWeight: 500,
              padding: "8px 4px",
            }}
          >
            CONTACT
          </Link>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: fadeDuration }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-[70]"
              style={{ background: "rgba(0,0,0,0.6)" }}
            />
            <motion.aside
              key="panel"
              id="site-menu-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: slideDuration, ease: [0.32, 0.72, 0.24, 1] }}
              className="fixed top-0 left-0 bottom-0 z-[80] menu-panel"
              style={{
                background: "var(--bg-surface, #131009)",
                borderRight: `1px solid ${GOLD_BORDER}`,
                width: 320,
                maxWidth: "100vw",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className="flex items-center justify-between" style={{ height: 72, padding: "0 24px", borderBottom: `1px solid ${GOLD_BORDER}` }}>
                <span
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: 11,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#A69D8D",
                  }}
                >
                  MENU
                </span>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "#F5F0E8",
                    fontSize: 22,
                    lineHeight: 1,
                    padding: 4,
                  }}
                >
                  ×
                </button>
              </div>

              <nav className="flex flex-col gap-1" style={{ padding: "32px 24px" }}>
                {navItems.map((item) => {
                  const isAnchor = item.href.startsWith("/#");
                  const baseStyle: React.CSSProperties = {
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: 26,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: item.isCta ? "#0D0B09" : "#F5F0E8",
                    background: item.isCta ? "#D4A853" : "transparent",
                    padding: item.isCta ? "12px 18px" : "10px 0",
                    borderRadius: item.isCta ? 8 : 0,
                    fontWeight: item.isCta ? 600 : 400,
                    display: "inline-block",
                    width: item.isCta ? "fit-content" : "auto",
                    marginTop: item.isCta ? 12 : 0,
                  };

                  if (isAnchor) {
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => handleAnchorClick(e, item.anchor)}
                        style={baseStyle}
                      >
                        {item.name}
                      </a>
                    );
                  }
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      style={baseStyle}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>

              <div
                className="mt-auto flex items-center"
                style={{
                  padding: "20px 24px",
                  borderTop: `1px solid ${GOLD_BORDER}`,
                }}
              >
                <LanguageSwitcher />
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>

      <style>{`
        @media (max-width: 640px) {
          .brand-lockup span:nth-child(1),
          .brand-lockup span:nth-child(3) {
            font-size: 8px !important;
          }
          .brand-lockup span:nth-child(2) {
            font-size: 12px !important;
          }
          .menu-panel {
            width: 100vw !important;
          }
        }
      `}</style>
    </>
  );
}
