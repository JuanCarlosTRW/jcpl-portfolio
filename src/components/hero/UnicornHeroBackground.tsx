"use client";
import React, { useEffect, useRef, useState } from "react";

const UNICORN_SCRIPT_SRC =
  "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js";

// DO NOT MODIFY: Provided JSON config
// eslint-disable-next-line @typescript-eslint/no-var-requires
const unicornConfig = require("../../lib/unicornConfig");


export default function UnicornHeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setFailed(true);
      return;
    }

    let unicornInstance: any = null;
    let script: HTMLScriptElement | null = null;
    let destroyed = false;

    const init = () => {
      if (window.UnicornStudio && containerRef.current) {
        try {
          unicornInstance = window.UnicornStudio.init({
            container: containerRef.current,
            config: unicornConfig,
            ...(window.innerWidth < 768 ? { dpi: 1 } : {})
          });
        } catch (e) {
          setFailed(true);
        }
      } else {
        setFailed(true);
      }
    };

    const loadScript = () => {
      if (window.UnicornStudio) {
        requestIdleCallback ? requestIdleCallback(init) : setTimeout(init, 100);
        return;
      }
      script = document.createElement("script");
      script.src = UNICORN_SCRIPT_SRC;
      script.async = true;
      script.onload = () => {
        if (destroyed) return;
        requestIdleCallback ? requestIdleCallback(init) : setTimeout(init, 100);
      };
      script.onerror = () => setFailed(true);
      document.body.appendChild(script);
    };

    loadScript();

    return () => {
      destroyed = true;
      if (unicornInstance && typeof unicornInstance.destroy === "function") {
        unicornInstance.destroy();
      }
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  if (failed) {
    return (
      <div
        className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-black/80 via-black/60 to-black/90"
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
    />
  );
}
