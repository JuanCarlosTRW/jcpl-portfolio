"use client";

export default function TestimonialBlock() {
  return (
    <section
      className="px-6 md:px-12 lg:px-20 py-10"
      style={{
        background: "#131009",
        borderTop: "1px solid rgba(212, 168, 83, 0.12)",
      }}
    >
      <div className="max-w-[600px] mx-auto text-center">
        <blockquote
          className="font-medium leading-relaxed"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.125rem)",
            color: "#F5F0E8",
          }}
        >
          <span style={{ color: "#D4A853" }}>&ldquo;</span>Juan rebuilt our
          entire online presence from scratch. First booking came in 11 days.
          Calendar has not had a gap since.&rdquo;
        </blockquote>

        <div className="mt-7 flex items-center justify-center gap-4">
          <div
            className="w-11 h-11 rounded-full overflow-hidden flex items-center justify-center shrink-0"
            style={{ background: "#181410", border: "1px solid #2A2318" }}
          >
            <img
              src="/images/logos/culture.png"
              alt="Culture Barbershop"
              className="w-7 h-7 object-contain"
            />
          </div>
          <div className="text-left">
            <p className="text-sm font-medium" style={{ color: "#F5F0E8" }}>
              Mike S.
            </p>
            <p className="text-xs" style={{ color: "#756D63" }}>
              Culture Barbershop, Montreal
            </p>
          </div>
        </div>

        <p className="mt-6" style={{ fontSize: "0.78rem", color: "#756D63" }}>
          Every result on this page came from the same acquisition system.
        </p>
      </div>
    </section>
  );
}
