"use client";

export default function TestimonialBlock() {
  return (
    <section
      className="px-6 md:px-12 lg:px-20 py-16 border-t border-[#2A2318]"
      style={{ background: "#131009" }}
    >
      <div className="max-w-[800px] mx-auto text-center">
        <blockquote
          className="text-lg md:text-xl leading-relaxed font-medium"
          style={{ color: "#D2C9B8" }}
        >
          &ldquo;Juan rebuilt our entire online presence from scratch. First booking came in 11 days. Calendar has not had a gap since.&rdquo;
        </blockquote>

        <div className="mt-6 flex items-center justify-center gap-4">
          <div
            className="w-12 h-12 rounded-full overflow-hidden border-2 flex items-center justify-center shrink-0 bg-zinc-800"
            style={{ borderColor: "#2A2318" }}
          >
            <img
              src="/images/logos/culture.png"
              alt="Culture Barbershop"
              className="w-8 h-8 object-contain"
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

        <p className="mt-4 text-xs" style={{ color: "#4A4540" }}>
          Result: First Google-sourced booking within 18 days of going live.
        </p>
      </div>
    </section>
  );
}
