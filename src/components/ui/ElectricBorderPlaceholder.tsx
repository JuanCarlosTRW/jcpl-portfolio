"use client";
import { useEffect, useRef } from "react";

export default function ElectricBorderPlaceholder({
  width = 1440,
  height = 900,
  project = "l4nPH1yvHWPQ4QgIRlYp",
  className = "",
}: {
  width?: number;
  height?: number;
  project?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.UnicornStudio && window.UnicornStudio.init) {
      window.UnicornStudio.init();
    } else {
      if (!document.getElementById("unicornstudio-script")) {
        const script = document.createElement("script");
        script.id = "unicornstudio-script";
        script.src =
          "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js";
        script.onload = () => {
          window.UnicornStudio?.init();
        };
        document.body.appendChild(script);
      }
    }
  }, []);

  return (
    <div
      ref={ref}
      data-us-project={project}
      style={{ width, height }}
      className={className}
    />
  );
}
