"use client";

import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import HeroWebGLBackground from "./HeroWebGLBackground";
import { prefersReducedMotion } from "@/lib/motion";
import styles from "./HeroAvatarFrame.module.css";
import "./hero.css";

/* ═══════════════════════════════════════════════════
   COMPONENT — Command Bridge Hero
   WebGL background + overlays only (no ticker, headline, CTA)
   ═══════════════════════════════════════════════════ */
export default function Hero() {
	const sectionRef = useRef<HTMLElement>(null);
	const frameRef = useRef<HTMLDivElement>(null);
	const bgLayerRef = useRef<HTMLDivElement>(null);
	const contentLayerRef = useRef<HTMLDivElement>(null);

	/* ── Mousemove parallax (bg: 6px, content: 3px) ── */
	const handleMouseMove = useCallback((e: MouseEvent) => {
		if (prefersReducedMotion()) return;
		const cx = (e.clientX / window.innerWidth - 0.5) * 2;
		const cy = (e.clientY / window.innerHeight - 0.5) * 2;

		if (bgLayerRef.current) {
			gsap.to(bgLayerRef.current, {
				x: cx * 6,
				y: cy * 6,
				duration: 1.2,
				ease: "power2.out",
				overwrite: "auto",
			});
		}
		if (contentLayerRef.current) {
			gsap.to(contentLayerRef.current, {
				x: cx * 3,
				y: cy * 3,
				duration: 1.4,
				ease: "power2.out",
				overwrite: "auto",
			});
		}
	}, []);

	useEffect(() => {
		window.addEventListener("mousemove", handleMouseMove, { passive: true });
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, [handleMouseMove]);

	/* ── GSAP cinematic entrance timeline ── */
	useEffect(() => {
		const reduced = prefersReducedMotion();

		if (reduced && frameRef.current) {
			gsap.set(frameRef.current, { opacity: 1, y: 0 });
			return;
		}

		const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

		if (frameRef.current) {
			tl.fromTo(
				frameRef.current,
				{ opacity: 0, y: 30 },
				{ opacity: 1, y: 0, duration: 0.8 },
				0
			);
		}

		return () => {
			tl.kill();
		};
	}, []);

	return (
		<section
			ref={sectionRef}
			className="cb"
			aria-label="Hero — Growth Systems"
		>
			{/* Ambient drift */}
			<div className="cb-ambient" aria-hidden="true" />

			{/* HERO — full-bleed WebGL + overlays */}
			<div ref={frameRef} className={`cb-frame ${styles.frame}`} style={{ opacity: 0 }}>

				{/* LAYER 1 — WebGL background */}
				<div ref={bgLayerRef} className="cb-layer cb-layer--bg" aria-hidden="true">
					<HeroWebGLBackground />
				</div>

				{/* LAYER 2 — Readability overlays */}
				<div className="cb-layer cb-overlay-top" aria-hidden="true" />
				<div className="cb-layer cb-overlay-vignette" aria-hidden="true" />
				<div className="cb-layer cb-grain" aria-hidden="true" />

				{/* LAYER 3 — Content (empty, structure preserved for future use) */}
				<div ref={contentLayerRef} className="cb-content-wrap">
					<div className="cb-content" />
				</div>

			</div>
		</section>
	);
}
