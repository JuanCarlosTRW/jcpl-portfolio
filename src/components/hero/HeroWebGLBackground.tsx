"use client";

import { useEffect, useRef } from "react";

const SDK_URL =
    "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js";
const SCRIPT_ID = "unicornstudio-embed";
const PROJECT_ID = "UykNLkYklTyqyIZODvIi";

/**
 * Renders a Unicorn Studio WebGL scene as a full-bleed background.
 *
 * - Client-only: no `window` usage outside useEffect
 * - Script dedup: guarded by DOM id check
 * - Responsive: aspect-ratio 1440/900 wrapper, absolute child fills it
 * - Non-blocking: script loads after hydration
 */
export default function HeroWebGLBackground() {
    const wrapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const initUnicorn = () => {
            const us = (window as any).UnicornStudio;
            if (us && typeof us.init === "function") {
                us.init();
            }
        };

        // If SDK already loaded, just re-init (picks up new project containers)
        if (document.getElementById(SCRIPT_ID)) {
            initUnicorn();
            return;
        }

        // Load SDK once
        const script = document.createElement("script");
        script.id = SCRIPT_ID;
        script.src = SDK_URL;
        script.async = true;
        script.onload = () => initUnicorn();
        document.head.appendChild(script);
    }, []);

    return (
        <div ref={wrapRef} className="hero-webgl-wrap" aria-hidden="true">
            <div
                data-us-project={PROJECT_ID}
                style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                }}
            />
        </div>
    );
}
