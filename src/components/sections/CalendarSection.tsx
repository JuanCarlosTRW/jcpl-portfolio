"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "@/context/LocaleContext";

const CAL_SCRIPT_ID = "cal-embed-script";
const CAL_CONTAINER_ID = "my-cal-inline-15min";
const CAL_SCRIPT_URL = "https://app.cal.com/embed/embed.js";

declare global {
  interface Window {
    Cal?: ((action: string, namespace?: string, opts?: Record<string, unknown>) => void) & {
      ns?: Record<string, (action: string, opts?: Record<string, unknown>) => void>;
    };
  }
}

function loadCalScript(): Promise<void> {
  return new Promise((resolve) => {
    if (document.getElementById(CAL_SCRIPT_ID)) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.id = CAL_SCRIPT_ID;
    script.src = CAL_SCRIPT_URL;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => resolve();
    document.head.appendChild(script);
  });
}

function waitForCal(): Promise<typeof window.Cal> {
  return new Promise((resolve) => {
    let attempts = 0;
    const maxRetries = 50;
    const interval = 100;
    const check = () => {
      if (typeof window.Cal === "function") {
        resolve(window.Cal);
        return;
      }
      if (attempts < maxRetries) {
        attempts++;
        setTimeout(check, interval);
      } else {
        resolve(window.Cal as typeof window.Cal);
      }
    };
    check();
  });
}

function initCalEmbed(): void {
  const Cal = window.Cal;
  if (typeof Cal !== "function") return;

  Cal("init", "15min", { origin: "https://app.cal.com" });

  const tryInline = (attempts = 0) => {
    const ns = Cal.ns?.["15min"];
    if (ns) {
      ns("inline", {
        elementOrSelector: `#${CAL_CONTAINER_ID}`,
        config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
        calLink: "clientgrowth/15min",
      });
      ns("ui", { hideEventTypeDetails: false, layout: "month_view" });
      return;
    }
    if (attempts < 50) {
      setTimeout(() => tryInline(attempts + 1), 100);
    }
  };
  tryInline();
}

export default function CalendarSection() {
  const t = useTranslations();
  const sectionRef = useRef<HTMLElement>(null);
  const initRef = useRef(false);
  const [calReady, setCalReady] = useState(false);

  useEffect(() => {
    if (initRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting || initRef.current) return;
        initRef.current = true;

        const run = async () => {
          await loadCalScript();
          await waitForCal();
          const container = document.getElementById(CAL_CONTAINER_ID);
          if (container && typeof window.Cal === "function") {
            initCalEmbed();
            setTimeout(() => setCalReady(true), 400);
          } else {
            setCalReady(true);
          }
        };

        run();
      },
      { rootMargin: "100px", threshold: 0 }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => (el ? observer.unobserve(el) : undefined);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="book-call"
      className="bg-[#0A0A0A] pt-20 pb-20 md:pt-[120px] md:pb-[120px]"
    >
      <div className="mx-auto max-w-[900px] px-4 md:px-6">
        <h2 className="text-[36px] font-semibold text-white">
          {t<string>("bookCall.headline")}
        </h2>
        <p className="mb-8 text-base opacity-70 text-white">
          {t<string>("bookCall.body")}
        </p>

        <div className="relative h-[650px] w-full overflow-hidden rounded-[14px] border border-white/[0.08] bg-[#111111] md:h-[750px]">
          {!calReady && (
            <div
              className="absolute inset-0 z-10 flex h-full items-center justify-center bg-[#111111] text-white/70 text-[15px]"
              aria-live="polite"
            >
              Loading calendar…
            </div>
          )}
          <div
            id={CAL_CONTAINER_ID}
            className="h-full w-full overflow-scroll"
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
          />
        </div>
      </div>
    </section>
  );
}
