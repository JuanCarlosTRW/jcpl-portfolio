"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[999] md:hidden flex items-center justify-between px-5 transition-all duration-300"
      style={{
        background: "#0D0B09",
        borderTop: "1px solid rgba(212,168,83,0.3)",
        height: 60,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(100%)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <span className="text-[12px]" style={{ color: "#D4A853" }}>1 spot open</span>
      <Link
        href="/#book-call"
        className="text-[13px] font-semibold"
        style={{
          background: "#D4A853",
          color: "#0D0B09",
          borderRadius: 6,
          padding: "10px 20px",
          textDecoration: "none",
        }}
      >
        Apply to be a Partner →
      </Link>
    </div>
  );
}
