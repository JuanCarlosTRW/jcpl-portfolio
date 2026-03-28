"use client";

import { useState, useEffect } from "react";
import UnicornScene from "unicornstudio-react/next";

export default function UnicornStudioEmbed() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

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
      <UnicornScene
        projectId="dyHEFIsGA1gwshhB9NPf"
        sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.4/dist/unicornStudio.umd.js"
        width="100%"
        height="600px"
      />
    </section>
  );
}
