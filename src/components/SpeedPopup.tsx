"use client";

import { useEffect, useState, useCallback, useRef } from "react";

/**
 * SpeedPopup — Premium informational modal.
 * Appears 10 seconds after page load, once per session.
 * Glass/dark aesthetic, accessible, keyboard-friendly.
 */
export default function SpeedPopup() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const backdropRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  /* Show after 10s — once per session */
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("speed-popup-shown")) return;

    const timer = setTimeout(() => {
      setVisible(true);
      sessionStorage.setItem("speed-popup-shown", "1");
      // Focus the close button after opening
      requestAnimationFrame(() => closeBtnRef.current?.focus());
    }, 10000);

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

  /* Lock body scroll when open */
  useEffect(() => {
    if (visible && !closing) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [visible, closing]);

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
          aria-label="Close popup"
          type="button"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Eyebrow */}
        <p className="speed-popup-eyebrow">My Promise</p>

        {/* Title */}
        <h2 id="speed-popup-title" className="speed-popup-title">
          SPEED
        </h2>

        {/* Accent line */}
        <div className="speed-popup-accent" aria-hidden="true" />

        {/* Body text */}
        <p className="speed-popup-body">
          I respect your time as much as I respect mine. This is why <strong className="speed-popup-highlight">99% of my projects launch within the first week.</strong>
        </p>
      </div>
    </div>
  );
}
