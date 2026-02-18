"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * ElectricBorderFrame — renders children (e.g. FounderCard) with
 * a UnicornStudio electric border effect as an absolute overlay.
 *
 * The overlay is pointer-events-none so it never blocks interaction.
 * UnicornStudio.init() is called once; it picks up all data-us-project divs.
 */
export default function ElectricBorderFrame({
  children,
  project = "l4nPH1yvHWPQ4QgIRlYp",
  className = "",
}: {
  children: ReactNode;
  project?: string;
  className?: string;
}) {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Delay init slightly so both UnicornStudio projects' DOM nodes exist
    const initUS = () => {
      if (window.UnicornStudio?.init) {
        window.UnicornStudio.init();
      }
    };

    if (window.UnicornStudio?.isInitialized !== undefined) {
      // Script already loaded — just re-init to pick up new nodes
      setTimeout(initUS, 100);
    } else if (!document.getElementById("unicornstudio-script-border")) {
      // FounderUnicornProfile may have already loaded the script.
      // Check if script tag exists with the same src.
      const existing = document.querySelector(
        'script[src*="unicornStudio.umd.js"]'
      );
      if (existing) {
        // Script is loaded or loading — wait then init
        setTimeout(initUS, 300);
      } else {
        const s = document.createElement("script");
        s.id = "unicornstudio-script-border";
        s.src =
          "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js";
        s.onload = () => setTimeout(initUS, 50);
        document.body.appendChild(s);
      }
    }
  }, []);

  return (
    <div className={`relative rounded-2xl ${className}`}>
      {/* Children (FounderCard / portrait) */}
      <div className="relative z-10">{children}</div>

      {/* Electric border overlay — fills same area, does not block clicks */}
      <div
        className="absolute inset-0 z-20 pointer-events-none rounded-2xl overflow-hidden"
        aria-hidden="true"
      >
        <div
          data-us-project={project}
          style={{ width: "100%", height: "100%", background: "transparent" }}
        />
      </div>
    </div>
  );
}
