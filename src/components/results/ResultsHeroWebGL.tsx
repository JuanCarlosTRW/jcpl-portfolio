"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically import UnicornScene to ensure it only runs client-side
const UnicornScene = dynamic(
  () => import("unicornstudio-react/next"),
  { ssr: false }
);

export default function ResultsHeroWebGL() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <div className="mt-6 w-full max-w-[1100px] mx-auto px-6">
      <div
        className="w-full h-[240px] sm:h-[320px] rounded-2xl overflow-hidden border border-[rgba(37,99,235,0.15)] bg-cg-card"
        aria-label="Results hero animation"
      >
        {/* Only render animation after mount and if reduced motion is not preferred */}
        {mounted && !prefersReducedMotion && (
          <UnicornScene
            projectId="hU6U4mKRHf6q7lApTLwx"
            sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js"
            width="100%"
            height="100%"
            production={true}
            scale={1}
            dpi={1.5}
            fps={60}
            lazyLoad={true}
          />
        )}
        {/* Reduced motion: static fallback — dark panel, no animation */}
        {mounted && prefersReducedMotion && (
          <div className="w-full h-full bg-cg-card" aria-hidden="true" />
        )}
      </div>
    </div>
  );
}
