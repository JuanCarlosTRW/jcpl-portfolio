"use client";
import { useEffect } from "react";

export default function FounderUnicornProfile() {
  // Inject UnicornStudio script and initialize on mount
  useEffect(() => {
    const u = window.UnicornStudio;
    if (u && u.init) {
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", function () {
          u.init();
        });
      } else {
        u.init();
      }
    } else {
      window.UnicornStudio = { isInitialized: !1 };
      const i = document.createElement("script");
      i.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js";
      i.onload = function () {
        if (document.readyState === "loading") {
          document.addEventListener("DOMContentLoaded", function () {
            window.UnicornStudio.init();
          });
        } else {
          window.UnicornStudio.init();
        }
      };
      (document.head || document.body).appendChild(i);
    }
  }, []);
  return (
    <div
      className="overflow-hidden w-full max-w-[768px] aspect-[3/4] mx-auto"
      style={{
        borderRadius: "32px",
        background: "transparent",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          data-us-project="bTc3PcQLbkD3NT7jXumo"
          style={{
            width: "768px",
            height: "1200px", // Increased height to show more of the top
            marginTop: "-80px", // Shift up to reveal more hair
            objectFit: "contain"
          }}
        />
      </div>
    </div>
  );
}
