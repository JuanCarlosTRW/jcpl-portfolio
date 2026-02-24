"use client";

import { Reveal } from "@/components/motion";

export default function GuaranteesStrip() {
  return (
    <Reveal>
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 mt-12">

        {/* Left: Featured standard */}
        <div
          className="rounded-2xl p-8 flex flex-col justify-between"
          style={{
            background: "#0F1623",
            border: "1px solid rgba(59, 130, 246, 0.12)",
            minHeight: "420px",
          }}
        >
          <div>
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
              style={{ color: "#3B82F6" }}
            >
              THE STANDARD
            </p>
            <h3
              className="text-2xl font-semibold leading-snug mb-5"
              style={{ color: "#F1F5F9" }}
            >
              Every number is real or it does not get published.
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#475569" }}
            >
              Every result on this site comes from a live client account. No projections. No hypotheticals. If I cannot point to a real campaign with real numbers, I do not publish it. Before you sign anything, I can walk you through exactly where each result came from.
            </p>
          </div>
          <div>
            <p
              className="text-5xl font-bold mt-8 leading-none"
              style={{ color: "#E2F0FF" }}
            >
              $30,000
            </p>
            <p
              className="text-xs mt-2"
              style={{ color: "#334155" }}
            >
              Most recent verifiable result. 30 days.
            </p>
          </div>
        </div>

        {/* Right: Three stacked smaller standards */}
        <div className="flex flex-col gap-4">
          <div
            className="rounded-2xl p-6"
            style={{ background: "#0F1623", border: "1px solid rgba(148, 163, 184, 0.08)" }}
          >
            <p
              className="text-base font-semibold mb-2"
              style={{ color: "#CBD5E1" }}
            >
              You always know what is being built.
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#475569" }}
            >
              Every phase has a defined output. Website live by week two. Ads running by week three. Nothing moves forward without you seeing what was delivered.
            </p>
          </div>
          <div
            className="rounded-2xl p-6"
            style={{ background: "#0F1623", border: "1px solid rgba(148, 163, 184, 0.08)" }}
          >
            <p
              className="text-base font-semibold mb-2"
              style={{ color: "#CBD5E1" }}
            >
              Month-to-month after the build. No exceptions.
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#475569" }}
            >
              You own the website, the ad accounts, the tracking setup. Everything. If you leave, you take it all. I keep nothing.
            </p>
          </div>
          <div
            className="rounded-2xl p-6"
            style={{ background: "#0F1623", border: "1px solid rgba(148, 163, 184, 0.08)" }}
          >
            <p
              className="text-base font-semibold mb-2"
              style={{ color: "#CBD5E1" }}
            >
              I will tell you if it is not a fit before you pay.
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#475569" }}
            >
              If your market is too small, your margins too thin, or your operation not ready, I say it on the first call. I do not take money from businesses I cannot move the needle for.
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
