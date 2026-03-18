"use client";

import { useLocale } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";

export default function TechStack() {
  const { locale } = useLocale();
  const ts = translations[locale].services.techStack;

  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 border-t" style={{ background: "#131009", borderColor: "#2A2318" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8" style={{ background: "rgba(212,168,83,0.6)" }} />
          <span className="text-xs tracking-[0.2em] uppercase font-medium" style={{ color: "#756D63" }}>
            {ts.label}
          </span>
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight max-w-[600px]">
          {ts.heading}
        </h2>
        <p className="mt-3 text-sm max-w-[520px]" style={{ color: "#A69D8D" }}>
          {ts.sub}
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ts.items.map((item, i) => (
            <div
              key={i}
              className="p-5 rounded-xl"
              style={{ background: "#1A1510", border: "1px solid #1E1A14", borderLeft: "3px solid rgba(212,168,83,0.35)" }}
            >
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.15em] mb-1"
                style={{ color: "#D4A853", opacity: 0.7 }}
              >
                {item.role}
              </p>
              <p className="text-sm font-semibold text-white mb-2">{item.name}</p>
              <p className="text-sm leading-relaxed" style={{ color: "#756D63" }}>
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs max-w-[560px]" style={{ color: "#4A4540" }}>
          Each layer compounds the next.
        </p>
      </div>
    </section>
  );
}
