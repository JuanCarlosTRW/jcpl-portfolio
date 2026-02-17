"use client";
import { useEffect, useRef } from "react";

const UNICORN_SCRIPT_SRC = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js";
const PROJECT_ID = "TYGPIf4mmys0ZtEKycno";

export default function HeroLaser() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Prevent duplicate script loads
    if (!document.querySelector(`script[src="${UNICORN_SCRIPT_SRC}"]`)) {
      const script = document.createElement("script");
      script.src = UNICORN_SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
    // UnicornStudio auto-initializes on elements with data-us-project
    // No need for manual init
    return () => {};
  }, []);

  return (
    <div
      ref={containerRef}
      data-us-project={PROJECT_ID}
      className="hero-laser-bg"
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    />
  );
}
