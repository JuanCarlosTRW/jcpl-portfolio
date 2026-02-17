"use client";

import { useEffect, useRef, useState } from "react";

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

    async function boot() {
      try {
        /* 1. Fetch config JSON from public/ (static asset) */
        const res = await fetch("/unicorn-config.json");
        if (!res.ok) throw new Error("Config fetch failed");
        const config = await res.json();

        /* 2. Load SDK script if not already present */
        await loadScript();

        /* 3. Init Unicorn Studio with config */
        if (destroyed || !containerRef.current) return;
        const US = (window as any).UnicornStudio;
        if (!US || typeof US.init !== "function") {
          setFailed(true);
          return;
        }

        unicornInstance = US.init({
          container: containerRef.current,
          config,
          ...(window.innerWidth < 768 ? { dpi: 1 } : {}),
        });
      } catch {
        if (!destroyed) setFailed(true);
      }
    }

    function loadScript(): Promise<void> {
      return new Promise((resolve, reject) => {
        if ((window as any).UnicornStudio) {
          resolve();
          return;
        }
        const existing = document.querySelector(
          `script[src="${UNICORN_SCRIPT_SRC}"]`
        );
        if (existing) {
          existing.addEventListener("load", () => resolve());
          /* If script is already loaded (cached), resolve immediately */
          if ((window as any).UnicornStudio) resolve();
          return;
        }
        const script = document.createElement("script");
        script.src = UNICORN_SCRIPT_SRC;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error("Script load failed"));
        document.body.appendChild(script);
      });
    }

    boot();

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
