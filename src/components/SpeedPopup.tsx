"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useLocale } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";
import { useLenis } from "@/context/LenisContext";

/**
 * SpeedPopup — Premium informational modal.
 * Appears 10 seconds after page load, once per session.
 * Glass/dark aesthetic, accessible, keyboard-friendly.
 */
export default function SpeedPopup() {
  const { locale } = useLocale();
  const sp = translations[locale].speedPopup;
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const backdropRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const scrollLockRef = useRef<{ y: number; active: boolean }>({ y: 0, active: false });
  const lenisRef = useLenis();

  /* Show after 10s — once per session */
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("speed-popup-shown")) return;

    const timer = setTimeout(() => {
      setVisible(true);
      sessionStorage.setItem("speed-popup-shown", "1");
      // Focus the close button after opening
      requestAnimationFrame(() => closeBtnRef.current?.focus());
    }, 45000);

    return () => clearTimeout(timer);
  }, []);

  /* Close handler with exit animation */
  const close = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      setClosing(false);
    }, 300);
  }, []);

  /* ESC key closes */
  useEffect(() => {
    if (!visible) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [visible, close]);

  /* Click outside panel closes */
  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === backdropRef.current) close();
    },
    [close]
  );

  /* iOS-safe scroll lock when open */
  useEffect(() => {
    const lenis = lenisRef.current;
    if (visible && !closing) {
      if (!scrollLockRef.current.active) {
        const y = lenis ? lenis.scroll : window.scrollY;
        scrollLockRef.current = { y, active: true };
        document.body.style.overflow = "hidden";
        document.body.style.position = "fixed";
        document.body.style.top = `-${y}px`;
        document.body.style.width = "100%";
        lenis?.stop();
      }
    } else {
      if (scrollLockRef.current.active) {
        const { y } = scrollLockRef.current;
        scrollLockRef.current.active = false;
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        if (lenis) {
          lenis.scrollTo(y, { immediate: true });
          lenis.start();
        } else {
          window.scrollTo(0, y);
        }
      }
    }
    return () => {
      if (scrollLockRef.current.active) {
        const { y } = scrollLockRef.current;
        scrollLockRef.current.active = false;
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        const l = lenisRef.current;
        if (l) { l.scrollTo(y, { immediate: true }); l.start(); }
        else window.scrollTo(0, y);
      }
    };
  }, [visible, closing, lenisRef]);

  if (!visible) return null;

  return (
    <div
      ref={backdropRef}
      className={`speed-popup-backdrop ${closing ? "speed-popup-closing" : ""}`}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="speed-popup-title"
    >
      <div ref={panelRef} className="speed-popup-panel">
        {/* Animated border glow */}
        <div className="speed-popup-glow" aria-hidden="true" />

        {/* Close button */}
        <button
          ref={closeBtnRef}
          className="speed-popup-close"
          onClick={close}
          aria-label={sp.closeLabel}
          type="button"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Eyebrow */}
        <p className="speed-popup-eyebrow">{sp.eyebrow}</p>

        {/* Title */}
        <h2 id="speed-popup-title" className="speed-popup-title">
          {sp.title}
        </h2>

        {/* Accent line */}
        <div className="speed-popup-accent" aria-hidden="true" />

        {/* Body text */}
        <p className="speed-popup-body">
          {sp.body}<strong className="speed-popup-highlight">{sp.highlight}</strong>
        </p>
      </div>
    </div>
  );
}
