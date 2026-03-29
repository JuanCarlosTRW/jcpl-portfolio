"use client";

import { useState, useEffect, useRef } from "react";

const SDK_URL =
  "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.4/dist/unicornStudio.umd.js";
const SCRIPT_ID = "unicornstudio-footer-sdk";

export default function UnicornStudioEmbed() {
  const [isMobile, setIsMobile] = useState(false);
  const embedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const initUS = () => {
      const us = (window as any).UnicornStudio;
      if (us?.init) {
        us.init();
      }
    };

    if ((window as any).UnicornStudio?.init) {
      setTimeout(initUS, 50);
    } else if (document.getElementById(SCRIPT_ID)) {
      setTimeout(initUS, 400);
    } else {
      if (!(window as any).UnicornStudio) {
        (window as any).UnicornStudio = { isInitialized: false };
      }
      const s = document.createElement("script");
      s.id = SCRIPT_ID;
      s.src = SDK_URL;
      s.async = true;
      s.onload = () => setTimeout(initUS, 50);
      document.head.appendChild(s);
    }
  }, [isMobile]);

  if (isMobile) {
    return (
      <section
        className="w-full"
        style={{ height: 200, background: "linear-gradient(to bottom, #1A1510, #0D0B09)" }}
        aria-hidden
      />
    );
  }

  return (
    <section className="w-full overflow-hidden" style={{ lineHeight: 0 }}>
      <div
        ref={embedRef}
        data-us-project-src="/scenes/footer-cg.json"
        aria-hidden="true"
        style={{ width: "100%", height: "600px" }}
      />
    </section>
  );
}
