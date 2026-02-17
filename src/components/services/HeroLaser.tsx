"use client";
import { useEffect, useRef } from "react";

const UNICORN_SCRIPT_SRC = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js";
const PROJECT_ID = "TYGPIf4mmys0ZtEKycno";

declare global {
  interface Window {
    UnicornStudio?: any;
  }
}

export default function HeroLaser() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function tryInit() {
      if (window.UnicornStudio && typeof window.UnicornStudio.init === "function") {
        window.UnicornStudio.init();
        console.log("UnicornStudio.init() called");
      } else {
        console.warn("UnicornStudio not available yet");
      }
    }
    // Prevent duplicate script loads
    if (!document.querySelector(`script[src="${UNICORN_SCRIPT_SRC}"]`)) {
      const script = document.createElement("script");
      script.src = UNICORN_SCRIPT_SRC;
      script.async = true;
      script.onload = () => {
        console.log("UnicornStudio script loaded");
        setTimeout(tryInit, 100);
      };
      document.body.appendChild(script);
    } else {
      console.log("UnicornStudio script already present");
      setTimeout(tryInit, 100);
    }
    // Cleanup: nothing
    return () => {};
  }, []);

  return (
    <div
      ref={containerRef}
      data-us-project={PROJECT_ID}
      className="hero-laser-bg hero-laser-debug"
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        background: "transparent",
        border: "2px dashed #33ccff",
      }}
    />
  );
}
