"use client";

import { useEffect } from "react";

const SDK_URL =
	"https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js";
const SCRIPT_ID = "unicornstudio-embed";
const PROJECT_ID = "XM6RVpVCzZNadvE1Pxqw";

/**
 * Full-bleed WebGL background via Unicorn Studio.
 *
 * - Client-only: no `window` usage outside useEffect
 * - Script dedup: checks DOM id + window.UnicornStudio sentinel
 * - Init mirrors the official embed snippet exactly
 * - Reduced motion: skips WebGL; CSS shows static gradient fallback
 * - Cover behavior: CSS forces canvas to fill container; scale(1.06) prevents letterboxing
 */
export default function UnicornBackground() {
	useEffect(() => {
		if (typeof window === "undefined") return;

		// Skip WebGL for prefers-reduced-motion (static gradient fallback via CSS)
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

		const w = window as Window & { UnicornStudio?: { isInitialized: boolean; init?: () => void } };

		const u = w.UnicornStudio;
		if (u && u.init) {
			// SDK already loaded — call init immediately or after DOM ready
			if (document.readyState === "loading") {
				document.addEventListener("DOMContentLoaded", () => u.init?.(), { once: true });
			} else {
				u.init();
			}
			return;
		}

		// SDK not yet loaded — set sentinel and inject script once
		if (!document.getElementById(SCRIPT_ID)) {
			w.UnicornStudio = { isInitialized: false };
			const script = document.createElement("script");
			script.id = SCRIPT_ID;
			script.src = SDK_URL;
			script.onload = () => {
				const us = (window as Window & { UnicornStudio?: { init?: () => void } }).UnicornStudio;
				if (document.readyState === "loading") {
					document.addEventListener("DOMContentLoaded", () => us?.init?.(), { once: true });
				} else {
					us?.init?.();
				}
			};
			(document.head || document.body).appendChild(script);
		}
	}, []);

	return (
		<div className="hero-bg-wrap" aria-hidden="true">
			{/* scale(1.06) ensures full cover — no letterboxing at any aspect ratio */}
			<div
				data-us-project={PROJECT_ID}
				style={{
					position: "absolute",
					inset: 0,
					width: "100%",
					height: "100%",
					transform: "scale(1.06)",
					transformOrigin: "center center",
				}}
			/>
		</div>
	);
}
