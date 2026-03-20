"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { trackEvent } from "@/lib/analytics";
import { useLocale } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";

const Prism = dynamic(() => import("./Prism"), { ssr: false });

export default function ServicesSection() {
  const { locale, lp } = useLocale();
  const a = translations[locale].homepage.acquisitionSystem;

  return (
    <SectionWrapper
      id="services"
      className="border-t border-[#2A2318]"
      style={{
        position: "relative",
        background: "#0D0B09",
        paddingTop: "clamp(56px, 8vw, 96px)",
        paddingBottom: "clamp(56px, 8vw, 96px)",
        overflow: "hidden",
      }}
    >
      {/* Prism WebGL background — dimmed so content stays legible */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, opacity: 0.18, pointerEvents: "none", zIndex: 0 }}
      >
        <Prism
          animationType="rotate"
          timeScale={0.4}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0}
          glow={1}
          bloom={1}
          transparent
          suspendWhenOffscreen
        />
      </div>

      {/* Dark bottom fade so section blends into next section */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "40%",
          background: "linear-gradient(to bottom, transparent 0%, #0D0B09 100%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div className="max-w-[900px] mx-auto px-4 sm:px-6" style={{ position: "relative", zIndex: 2 }}>
        {/* Section label + heading */}
        <div className="text-center mb-10">
          <p
            className="uppercase mb-4"
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              color: "#D4A853",
            }}
          >
            {a.eyebrow}
          </p>
          <h2
            className="font-bold text-white mb-4"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            {a.h2}
          </h2>
          <p
            style={{
              fontSize: "0.9375rem",
              color: "#A69D8D",
              maxWidth: 460,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            {a.sub}
          </p>
        </div>

        {/* ── Premium System Diagram ── */}
        <div
          style={{
            background: "#0F0D0B",
            border: "1px solid rgba(212,168,83,0.18)",
            borderRadius: 14,
            padding: "36px 28px 28px",
          }}
        >
          {/* Phases wrapper — horizontal on desktop, vertical on mobile */}
          <div className="phases-wrapper flex flex-col md:flex-row md:items-start md:gap-0">

            {/* Phase 01 — Attract */}
            <div className="phase flex-1 md:pr-6 md:border-r" style={{ borderColor: "rgba(212,168,83,0.12)" }}>
              <div className="phase-header mb-4">
                <span
                  className="block"
                  style={{ fontSize: "10px", letterSpacing: "0.14em", color: "rgba(212,168,83,0.6)", fontWeight: 600, textTransform: "uppercase", marginBottom: 4 }}
                >
                  01
                </span>
                <span
                  className="block font-semibold"
                  style={{ fontSize: "15px", color: "#D4A853", marginBottom: 2 }}
                >
                  {a.attract}
                </span>
                <span
                  className="block"
                  style={{ fontSize: "11px", color: "rgba(237,229,213,0.38)" }}
                >
                  {a.attractSub}
                </span>
              </div>
              <div
                aria-hidden="true"
                style={{ height: 1, background: "rgba(212,168,83,0.12)", marginBottom: 16 }}
              />
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                <li>
                  <span className="block" style={{ color: "#EDE5D5", fontSize: "13px", fontWeight: 500 }}>{a.googleAds}</span>
                  <span className="block" style={{ color: "rgba(237,229,213,0.38)", fontSize: "11px", marginTop: 2 }}>{a.googleAdsSub}</span>
                </li>
                <li>
                  <span className="block" style={{ color: "#EDE5D5", fontSize: "13px", fontWeight: 500 }}>{a.localSeo}</span>
                  <span className="block" style={{ color: "rgba(237,229,213,0.38)", fontSize: "11px", marginTop: 2 }}>{a.localSeoSub}</span>
                </li>
                <li>
                  <span className="block" style={{ color: "#EDE5D5", fontSize: "13px", fontWeight: 500 }}>{a.geoAi}</span>
                  <span className="block" style={{ color: "rgba(237,229,213,0.38)", fontSize: "11px", marginTop: 2 }}>{a.geoAiSub}</span>
                </li>
              </ul>
            </div>

            {/* Arrow — desktop only */}
            <div
              className="hidden md:flex items-center justify-center flex-shrink-0"
              style={{ width: 40, paddingTop: 8 }}
              aria-hidden="true"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M15 8l4 4-4 4" stroke="#D4A853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Mobile divider between phases */}
            <div
              className="md:hidden"
              aria-hidden="true"
              style={{ height: 1, background: "rgba(212,168,83,0.18)", margin: "20px 0" }}
            />

            {/* Phase 02 — Convert */}
            <div className="phase flex-1 md:px-6 md:border-r" style={{ borderColor: "rgba(212,168,83,0.12)" }}>
              <div className="phase-header mb-4">
                <span
                  className="block"
                  style={{ fontSize: "10px", letterSpacing: "0.14em", color: "rgba(212,168,83,0.6)", fontWeight: 600, textTransform: "uppercase", marginBottom: 4 }}
                >
                  02
                </span>
                <span
                  className="block font-semibold"
                  style={{ fontSize: "15px", color: "#D4A853", marginBottom: 2 }}
                >
                  {a.convert}
                </span>
                <span
                  className="block"
                  style={{ fontSize: "11px", color: "rgba(237,229,213,0.38)" }}
                >
                  {a.convertSub}
                </span>
              </div>
              <div
                aria-hidden="true"
                style={{ height: 1, background: "rgba(212,168,83,0.12)", marginBottom: 16 }}
              />
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                <li>
                  <span className="block" style={{ color: "#EDE5D5", fontSize: "13px", fontWeight: 500 }}>{a.conversionWebsite}</span>
                  <span className="block" style={{ color: "rgba(237,229,213,0.38)", fontSize: "11px", marginTop: 2 }}>{a.conversionWebsiteSub}</span>
                </li>
                <li>
                  <span className="block" style={{ color: "#EDE5D5", fontSize: "13px", fontWeight: 500 }}>{a.conversionCopy}</span>
                  <span className="block" style={{ color: "rgba(237,229,213,0.38)", fontSize: "11px", marginTop: 2 }}>{a.conversionCopySub}</span>
                </li>
                <li>
                  <span className="block" style={{ color: "#EDE5D5", fontSize: "13px", fontWeight: 500 }}>{a.aiVoiceAgent}</span>
                  <span className="block" style={{ color: "rgba(237,229,213,0.38)", fontSize: "11px", marginTop: 2 }}>{a.aiVoiceAgentSub}</span>
                </li>
              </ul>
            </div>

            {/* Arrow — desktop only */}
            <div
              className="hidden md:flex items-center justify-center flex-shrink-0"
              style={{ width: 40, paddingTop: 8 }}
              aria-hidden="true"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M15 8l4 4-4 4" stroke="#D4A853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Mobile divider between phases */}
            <div
              className="md:hidden"
              aria-hidden="true"
              style={{ height: 1, background: "rgba(212,168,83,0.18)", margin: "20px 0" }}
            />

            {/* Phase 03 — Compound */}
            <div className="phase flex-1 md:pl-6">
              <div className="phase-header mb-4">
                <span
                  className="block"
                  style={{ fontSize: "10px", letterSpacing: "0.14em", color: "rgba(212,168,83,0.6)", fontWeight: 600, textTransform: "uppercase", marginBottom: 4 }}
                >
                  03
                </span>
                <span
                  className="block font-semibold"
                  style={{ fontSize: "15px", color: "#D4A853", marginBottom: 2 }}
                >
                  {a.compound}
                </span>
                <span
                  className="block"
                  style={{ fontSize: "11px", color: "rgba(237,229,213,0.38)" }}
                >
                  {a.compoundSub}
                </span>
              </div>
              <div
                aria-hidden="true"
                style={{ height: 1, background: "rgba(212,168,83,0.12)", marginBottom: 16 }}
              />
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                <li>
                  <span className="block" style={{ color: "#EDE5D5", fontSize: "13px", fontWeight: 500 }}>{a.weeklyOptimization}</span>
                  <span className="block" style={{ color: "rgba(237,229,213,0.38)", fontSize: "11px", marginTop: 2 }}>{a.weeklyOptimizationSub}</span>
                </li>
                <li>
                  <span className="block" style={{ color: "#EDE5D5", fontSize: "13px", fontWeight: 500 }}>{a.monthlyReporting}</span>
                  <span className="block" style={{ color: "rgba(237,229,213,0.38)", fontSize: "11px", marginTop: 2 }}>{a.monthlyReportingSub}</span>
                </li>
                <li>
                  <span className="block" style={{ color: "#EDE5D5", fontSize: "13px", fontWeight: 500 }}>{a.expansionLayers}</span>
                  <span className="block" style={{ color: "rgba(237,229,213,0.38)", fontSize: "11px", marginTop: 2 }}>{a.expansionLayersSub}</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Footer line */}
          <p
            style={{
              textAlign: "center",
              fontSize: "11px",
              color: "rgba(237,229,213,0.35)",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              marginTop: 22,
              paddingTop: 16,
            }}
          >
            {a.footerLine}
          </p>
        </div>

        {/* ── Custom Website Callout Card ── */}
        <div
          className="mt-6"
          style={{
            border: "1px solid rgba(212,168,83,0.2)",
            borderRadius: 10,
            padding: "24px 28px",
            background: "#0F0D0B",
          }}
        >
          <p
            style={{
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#D4A853",
              marginBottom: 10,
            }}
          >
            {a.websiteCalloutLabel}
          </p>
          <h3
            style={{
              fontSize: "16px",
              fontWeight: 500,
              color: "#EDE5D5",
              marginBottom: 10,
              lineHeight: 1.3,
            }}
          >
            {a.websiteCalloutHeadline}
          </h3>
          <p
            style={{
              fontSize: "13px",
              color: "rgba(237,229,213,0.55)",
              lineHeight: 1.65,
            }}
          >
            {a.websiteCalloutBody}
          </p>
        </div>

        {/* Footer link */}
        <div className="text-center mt-9">
          <Link
            href={lp("/services")}
            className="inline-flex items-center gap-1.5 transition-colors"
            style={{ fontSize: "0.8125rem", color: "#A69D8D" }}
            onClick={() => trackEvent("services_link_clicked")}
            onMouseOver={(e) => {
              e.currentTarget.style.color = "#D2C9B8";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = "#A69D8D";
            }}
          >
            {a.seeFullSystem}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
