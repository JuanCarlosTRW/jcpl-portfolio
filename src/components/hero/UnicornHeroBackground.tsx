"use client";

import { useEffect, useRef, useState } from "react";

const UNICORN_SCRIPT_SRC =
  "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js";

const PROJECT_ID = "fSdFsn2BDZ3UDERv6Wix";

export default function UnicornHeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    /* Respect reduced-motion preference */
    if (
      typeof window === "undefined" ||
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      setFailed(true);
      return;
    }

    let destroyed = false;

    function tryInit() {
      const US = (window as any).UnicornStudio;
      if (US && typeof US.init === "function") {
        try {
          US.init();
        } catch {
          setFailed(true);
        }
      } else {
        setFailed(true);
      }
    }

    /* Prevent duplicate script loads */
    if (!document.querySelector(`script[src="${UNICORN_SCRIPT_SRC}"]`)) {
      const script = document.createElement("script");
      script.src = UNICORN_SCRIPT_SRC;
      script.async = true;
      script.onload = () => {
        if (!destroyed) setTimeout(tryInit, 100);
      };
      script.onerror = () => setFailed(true);
      document.body.appendChild(script);
    } else {
      setTimeout(tryInit, 100);
    }

    return () => {
      destroyed = true;
    };
  }, []);

  if (failed) {
    return (
      <div
        className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#0a0a1a] via-[#0d0d2b] to-[#0a0a1a]"
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-none"
      aria-hidden="true"
      style={{ width: "100%", height: "100%" }}
      data-us-project={PROJECT_ID}
    />
  );
}
