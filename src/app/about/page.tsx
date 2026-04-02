import type { Metadata } from "next";
import AboutSection from "@/components/home/AboutSection";

export const metadata: Metadata = {
  title: "About — Client Growth",
  description: "I build acquisition systems for local service businesses across Canada and the United States.",
};

export default function AboutPage() {
  return (
    <div style={{ background: "#0D0B09", minHeight: "100vh" }}>
      <div className="pt-24 md:pt-28">
        <AboutSection />
      </div>

      {/* CTA */}
      <section className="py-16 px-6 text-center" style={{ background: "#131009" }}>
        <div className="mx-auto" style={{ maxWidth: 500 }}>
          <a
            href="/apply"
            className="inline-block rounded-md px-8 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] transition-transform hover:scale-[1.02]"
            style={{ background: "#D4A853", color: "#0D0B09", borderRadius: 6 }}
          >
            Apply to be a Partner →
          </a>
        </div>
      </section>
    </div>
  );
}
