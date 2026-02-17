"use client";

import { useEffect, useRef, useState } from "react";
import { unicornHeroConfig } from "@/lib/unicornHeroConfig";

const UNICORN_SCRIPT_SRC =
  "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js";

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

    let unicornInstance: any = null;
    let destroyed = false;

    function init() {
      const US = (window as any).UnicornStudio;
      if (US && typeof US.init === "function" && containerRef.current) {
        try {
          unicornInstance = US.init({
            container: containerRef.current,
            config: unicornHeroConfig,
            ...(window.innerWidth < 768 ? { dpi: 1 } : {}),
          });
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
        if (!destroyed) setTimeout(init, 100);
      };
      script.onerror = () => setFailed(true);
      document.body.appendChild(script);
    } else {
      setTimeout(init, 100);
    }

    return () => {
      destroyed = true;
      if (unicornInstance && typeof unicornInstance.destroy === "function") {
        unicornInstance.destroy();
      }
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
    />
  );
}
