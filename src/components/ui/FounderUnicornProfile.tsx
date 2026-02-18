"use client";
import { useEffect } from "react";

export default function FounderUnicornProfile() {
  useEffect(() => {
    const initUS = () => {
      if (window.UnicornStudio?.init) {
        window.UnicornStudio.init();
      }
    };

    // Check if script already loaded
    const existingScript = document.querySelector(
      'script[src*="unicornStudio.umd.js"]'
    );

    if (window.UnicornStudio?.init) {
      // Already loaded — re-init to pick up this node
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
      data-us-project="bi8sQ4960W9R0aV2JSta"
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "16px",
        overflow: "hidden",
        background: "transparent",
      }}
    />
  );
}
