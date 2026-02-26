"use client";

import { useRef, useEffect, useCallback, Fragment } from "react";
import gsap from "gsap";
import UnicornBackground from "./UnicornBackground";
import { prefersReducedMotion } from "@/lib/motion";
import "./hero.css";

/* ═══════════════════════════════════════════════════
   COPY
   ═══════════════════════════════════════════════════ */
const EYEBROW = "Growth Architecture™";
const HEADLINE = "DOMINATE YOUR MARKET";
const MECHANISM =
	"One system: conversion site, Google Ads for ready-to-hire buyers, and AI that qualifies leads before your phone rings.";
const PROOF =
	"Last result: $900 ad spend → $41,084.85 revenue. Texas RV company. 30 days.";
const CTA_PRIMARY = {
	label: "Apply. I\u2019ll review you in 24h.",
	href: "/apply",
};

/* ═══════════════════════════════════════════════════
   COMPONENT — Avatar-style hero
   Layer stack:
     hero-bg        WebGL scene   (z-0, sibling of frame)
     hero-vignette  dark overlay  (z-1, sibling of frame)
     hero-frame     rounded frame (z-2)
       hero-notch   top plate     (z-5, overflows top)
       hero-corner  4 brackets    (z-3, inside frame)
       hero-glass   glass panel   fills frame
         content    headline+CTA  (z-3 within glass)
   ═══════════════════════════════════════════════════ */
export default function Hero() {
	/* ── Refs ── */
	const frameRef       = useRef<HTMLDivElement>(null);
	const headlineRef    = useRef<HTMLSpanElement>(null);
	const eyebrowRef     = useRef<HTMLDivElement>(null);
	const mechRef        = useRef<HTMLParagraphElement>(null);
	const proofRef       = useRef<HTMLParagraphElement>(null);
	const ctaRef         = useRef<HTMLDivElement>(null);
	const bgLayerRef     = useRef<HTMLDivElement>(null);
	const contentWrapRef = useRef<HTMLDivElement>(null);

	/* ── Mousemove parallax: bg 5px, content 2.5px (opposite axis) ── */
	const handleMouseMove = useCallback((e: MouseEvent) => {
		if (prefersReducedMotion()) return;
		const cx = (e.clientX / window.innerWidth  - 0.5) * 2;
		const cy = (e.clientY / window.innerHeight - 0.5) * 2;

		if (bgLayerRef.current) {
			gsap.to(bgLayerRef.current, {
				x: cx * 5,
				y: cy * 5,
				duration: 1.2,
				ease: "power2.out",
				overwrite: "auto",
			});
		}

		if (contentWrapRef.current) {
			gsap.to(contentWrapRef.current, {
				x: cx * 2.5,
				y: cy * 2.5,
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

	/* ── GSAP cinematic entrance ── */
	useEffect(() => {
		const reduced = prefersReducedMotion();

		const allEls = [
			frameRef.current,
			eyebrowRef.current,
			mechRef.current,
			proofRef.current,
			ctaRef.current,
		].filter(Boolean);

		if (reduced) {
			allEls.forEach((el) => gsap.set(el, { opacity: 1, y: 0 }));
			if (headlineRef.current) {
				gsap.set(headlineRef.current.querySelectorAll("[data-char]"), {
					opacity: 1,
					y: 0,
				});
			}
			return;
		}

		const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

		// 1. Frame rises in
		if (frameRef.current) {
			tl.fromTo(
				frameRef.current,
				{ opacity: 0, y: 30 },
				{ opacity: 1, y: 0, duration: 0.8 },
				0
			);
		}

		// 2. Eyebrow
		if (eyebrowRef.current) {
			tl.fromTo(
				eyebrowRef.current,
				{ opacity: 0, y: 14 },
				{ opacity: 1, y: 0, duration: 0.6 },
				0.3
			);
		}

		// 3. Headline chars stagger (0.04s/char)
		if (headlineRef.current) {
			const chars = headlineRef.current.querySelectorAll("[data-char]");
			if (chars.length) {
				tl.fromTo(
					chars,
					{ opacity: 0, y: 40 },
					{ opacity: 1, y: 0, duration: 0.7, stagger: 0.04 },
					0.45
				);
			}
		}

		// 4. Mechanism line
		if (mechRef.current) {
			tl.fromTo(
				mechRef.current,
				{ opacity: 0, y: 18 },
				{ opacity: 1, y: 0, duration: 0.65 },
				0.9
			);
		}

		// 5. Proof line
		if (proofRef.current) {
			tl.fromTo(
				proofRef.current,
				{ opacity: 0, y: 12 },
				{ opacity: 1, y: 0, duration: 0.55 },
				1.15
			);
		}

		// 6. CTA appears last
		if (ctaRef.current) {
			tl.fromTo(
				ctaRef.current,
				{ opacity: 0, y: 16 },
				{ opacity: 1, y: 0, duration: 0.55 },
				1.35
			);
		}

		return () => { tl.kill(); };
	}, []);

	return (
		<section className="hero" aria-label="Hero — Growth Systems">

			{/* ═══ LAYER 1 — WebGL background ═══ */}
			<div ref={bgLayerRef} className="hero-bg" aria-hidden="true">
				<UnicornBackground />
			</div>

			{/* ═══ LAYER 2 — Vignette overlay ═══ */}
			<div className="hero-vignette" aria-hidden="true" />

			{/* ═══ LAYER 3 — Avatar frame ═══ */}
			<div ref={frameRef} className="hero-frame" style={{ opacity: 0 }}>

				{/* Notch — centered plate overlapping the top border */}
				<div className="hero-notch" aria-hidden="true">
					<div className="hero-notch-line" />
					<span>CLIENT&nbsp;GROWTH</span>
					<div className="hero-notch-line" />
				</div>

				{/* Corner brackets — accent marks at all 4 inside corners */}
				<div className="hero-corner hero-corner--tl" aria-hidden="true" />
				<div className="hero-corner hero-corner--tr" aria-hidden="true" />
				<div className="hero-corner hero-corner--bl" aria-hidden="true" />
				<div className="hero-corner hero-corner--br" aria-hidden="true" />

				{/* Glass panel — tinted fill, clips all inner content */}
				<div className="hero-glass">

					{/* Vertical side labels (Avatar: "2024" / "NETFLIX") */}
					<div className="hero-side-text hero-side-text--left" aria-hidden="true">
						JCPL · BUILD
					</div>
					<div className="hero-side-text hero-side-text--right" aria-hidden="true">
						GROWTH SYS
					</div>

					{/* Bottom center ornament */}
					<div className="hero-bottom-gem" aria-hidden="true" />

					{/* ═══ Content layer ═══ */}
					<div ref={contentWrapRef} className="hero-content-wrap">
						<div className="hero-content">

							{/* Eyebrow */}
							<div ref={eyebrowRef} className="hero-eyebrow" style={{ opacity: 0 }}>
								<span className="hero-eyebrow-dot" aria-hidden="true" />
								<span>{EYEBROW}</span>
							</div>

							{/* DOMINATE H1 — words wrapped in hero-word (white-space:nowrap)
							    so the browser only line-breaks at word boundaries */}
							<h1 className="hero-headline">
								<span ref={headlineRef} aria-label={HEADLINE}>
									{HEADLINE.split(" ").map((word, wi, arr) => (
										<Fragment key={wi}>
											<span className="hero-word" aria-hidden="true">
												{word.split("").map((char, ci) => (
													<span key={ci} data-char="" className="hero-char">
														{char}
													</span>
												))}
											</span>
											{/* Plain space = natural word-boundary break opportunity */}
											{wi < arr.length - 1 && " "}
										</Fragment>
									))}
								</span>
							</h1>

							{/* Mechanism line */}
							<p ref={mechRef} className="hero-mechanism" style={{ opacity: 0 }}>
								{MECHANISM}
							</p>

							{/* Proof line */}
							<p ref={proofRef} className="hero-proof" style={{ opacity: 0 }}>
								{PROOF}
							</p>

							{/* CTA */}
							<div ref={ctaRef} className="hero-cta-wrap" style={{ opacity: 0 }}>
								<a href={CTA_PRIMARY.href} className="hero-cta">
									{CTA_PRIMARY.label}
									<span className="hero-cta-arrow" aria-hidden="true">→</span>
								</a>
							</div>

						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
