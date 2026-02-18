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
      data-us-project="ssYW0pynFtz9VELi2aKl"
      style={{
        width: "768px",
        height: "1024px",
        borderRadius: "32px",
        overflow: "hidden",
        background: "transparent",
        margin: "40px auto 0 auto", // Move container lower
        paddingTop: 0, // Remove any vertical padding
        paddingBottom: 0
      }}
    />
  );
}
