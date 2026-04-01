"use client";
import { useEffect, useRef } from "react";

const FALLBACK_SRC = "/images/juan-headshot.jpeg";

export default function FounderUnicornProfile() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const initUS = () => {
      if (window.UnicornStudio?.init) {
        window.UnicornStudio.init({ element: el });
      }
    };

    // Check if script already loaded
    const existingScript = document.querySelector(
      'script[src*="unicornStudio.umd.js"]'
    );

    if (window.UnicornStudio?.init) {
      // Already loaded — re-init scoped to this container
      setTimeout(initUS, 50);
    } else if (existingScript) {
      // Script loading — wait for it
      setTimeout(initUS, 400);
    } else {
      // First load — inject script
      window.UnicornStudio = { isInitialized: false } as any;
      const s = document.createElement("script");
      s.src =
        "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js";
      s.onload = () => setTimeout(initUS, 50);
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      data-us-project="bi8sQ4960W9R0aV2JSta"
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "16px",
        overflow: "hidden",
        background: "#181410",
        backgroundImage: `url(${FALLBACK_SRC})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    />
  );
}
