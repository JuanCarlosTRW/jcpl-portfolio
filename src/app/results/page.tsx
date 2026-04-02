import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Results — Client Growth",
  description: "Verified results from real client accounts. $41,085 in revenue from $900 in ad spend. See what the acquisition system produces.",
};

const CLIENTS = [
  {
    badge: "DELIVERED",
    badgeStyle: { background: "rgba(212,168,83,0.12)", color: "#D4A853" },
    label: "BARBERSHOP · MONTREAL",
    title: "Full custom website + booking flow",
    description: "Conversion website designed and built. Mobile-optimized booking flow included.",
    testimonial: "\"Juan built the website exactly how I wanted it. Highly recommend.\"",
    attribution: "Tobari, Culture Barbershop · Montreal, QC",
    link: "https://culturemtl.ca",
  },
  {
    badge: "IN PROGRESS",
    badgeStyle: { background: "rgba(76,175,80,0.1)", color: "rgba(76,175,80,0.8)" },
    label: "BARBERSHOP · MONTREAL",
    title: "Custom website + local SEO campaign",
    description: "Conversion website designed and built. Local SEO campaign launched, competing for top position in Google.",
    testimonial: "\"I love it. Very nice and professional.\"",
    attribution: "Hadi, Elite Barbershop · Montreal, QC",
    link: "https://elitebyhadi.com",
  },
  {
    badge: "DELIVERED",
    badgeStyle: { background: "rgba(212,168,83,0.12)", color: "#D4A853" },
    label: "PAINTING CONTRACTOR · DALLAS-FORT WORTH",
    title: "Conversion website",
    description: "Full custom website built for the DFW painting market. Designed for quote requests.",
    testimonial: "\"Professional website that represents the brand. Built exactly what was needed.\"",
    attribution: "Wesley, Absolute Painting · Dallas-Fort Worth",
    link: "https://absolutepainting.vercel.app/quote",
  },
  {
    badge: "DELIVERED",
    badgeStyle: { background: "rgba(212,168,83,0.12)", color: "#D4A853" },
    label: "DENTAL CLINIC · LAVAL",
    title: "Custom website + booking funnel",
    description: "Full custom website designed and built. Booking funnel included.",
    testimonial: null,
    attribution: null,
    link: "https://as.centredentairese.com",
  },
];

export default function ResultsPage() {
  return (
    <div style={{ background: "#0D0B09", minHeight: "100vh" }}>
      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-36 md:pb-16 text-center px-6">
        <p className="uppercase mb-4" style={{ fontSize: 12, letterSpacing: "0.15em", color: "#D4A853", fontFamily: "var(--font-dm-sans), sans-serif" }}>
          PROVEN OUTCOMES
        </p>
        <h1 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 300, color: "#F0EAD6", lineHeight: 1.1 }}>
          Five businesses. Same system. Real outcomes.
        </h1>
        <p className="mt-4 mx-auto" style={{ maxWidth: 600, fontSize: 16, color: "rgba(240, 234, 214, 0.6)", lineHeight: 1.6, fontFamily: "var(--font-dm-sans), sans-serif" }}>
          Every result below came from the same acquisition system. One operator. Verified numbers.
        </p>
      </section>

      {/* Lead Result — Triple W */}
      <section className="pb-16 px-6">
        <div className="mx-auto" style={{ maxWidth: 900, background: "#141210", border: "1px solid rgba(212,168,83,0.15)", borderRadius: 16, padding: "48px 40px" }}>
          <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(240,234,214,0.4)" }}>
            RV RENTAL · TEXAS · GOOGLE ADS
          </p>

          <p className="mt-6" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(56px, 10vw, 96px)", fontWeight: 300, color: "#F0EAD6", lineHeight: 1 }}>
            $41,085
          </p>
          <p className="mt-2" style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 18, color: "rgba(240,234,214,0.7)" }}>
            in revenue. First 30 days.
          </p>

          <p className="mt-4" style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 16, color: "#F0EAD6", fontWeight: 600 }}>
            $46 returned per $1 of ad spend.
          </p>
          <p className="mt-2" style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 13, color: "rgba(240,234,214,0.35)" }}>
            Live account. Last verified February 2026.
          </p>

          {/* Dashboard screenshot */}
          <div className="mt-8" style={{ borderRadius: 12, overflow: "hidden", border: "1px solid rgba(212,168,83,0.1)" }}>
            <Image
              src="https://static.wixstatic.com/media/62f926_5c7a609ac5c143e48028810fda21af82~mv2.png"
              alt="Triple W Rentals live Google Ads account dashboard"
              width={900}
              height={500}
              quality={80}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Testimonial */}
          <div className="mt-8" style={{ borderLeft: "3px solid #D4A853", paddingLeft: 20 }}>
            <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 15, color: "rgba(240,234,214,0.7)", fontStyle: "italic", lineHeight: 1.7 }}>
              &ldquo;Since Juan came on, we have been getting way more quality leads. Business is doing extremely well in the city now.&rdquo;
            </p>
            <p className="mt-2" style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 13, color: "rgba(240,234,214,0.4)" }}>
              Westin Wayne Walker, Triple W Rentals · Texas
            </p>
          </div>

          {/* What was delivered */}
          <p className="mt-6" style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(240,234,214,0.35)" }}>
            What was built:
          </p>
          <p className="mt-2" style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 13, color: "rgba(240,234,214,0.5)" }}>
            Google Ads &nbsp;·&nbsp; Conversion Website &nbsp;·&nbsp; Booking Flow &nbsp;·&nbsp; Weekly Optimization
          </p>
          <a
            href="https://triplewrentals.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 hover:underline"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 14, color: "#D4A853", textDecoration: "none" }}
          >
            View live site →
          </a>
        </div>
      </section>

      {/* Client Delivery Grid */}
      <section className="pb-16 px-6">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-5" style={{ maxWidth: 900 }}>
          {CLIENTS.map((client) => (
            <div
              key={client.title}
              className="relative"
              style={{ background: "#141210", border: "1px solid rgba(212,168,83,0.1)", borderRadius: 16, padding: 32 }}
            >

              {/* Badge */}
              <span
                className="inline-block mb-4"
                style={{
                  ...client.badgeStyle,
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "4px 10px",
                  borderRadius: 4,
                }}
              >
                {client.badge}
              </span>

              <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(240,234,214,0.35)" }}>
                {client.label}
              </p>

              <h3 className="mt-2 mb-2" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: 22, color: "#F0EAD6" }}>
                {client.title}
              </h3>

              <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 14, color: "rgba(240,234,214,0.55)", lineHeight: 1.5 }}>
                {client.description}
              </p>

              {client.testimonial && (
                <div className="mt-4" style={{ borderLeft: "2px solid #D4A853", paddingLeft: 12 }}>
                  <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 13, fontStyle: "italic", color: "rgba(240,234,214,0.5)", lineHeight: 1.6 }}>
                    {client.testimonial}
                  </p>
                  <p className="mt-1" style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 12, color: "rgba(240,234,214,0.35)" }}>
                    {client.attribution}
                  </p>
                </div>
              )}

              <a
                href={client.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 hover:underline"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 14, color: "#D4A853", textDecoration: "none" }}
              >
                View live site →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(24px, 4vw, 36px)", color: "#F0EAD6" }}>
          Ready to see what this system can do for your business?
        </h2>
        <p className="mt-3" style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 15, color: "rgba(240,234,214,0.5)" }}>
          One call. I review your market before we speak. No pitch. No pressure.
        </p>
        <div className="mt-6">
          <a href="/#book-call" className="inline-block rounded-md px-8 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] transition-transform hover:scale-[1.02]" style={{ background: "#D4A853", color: "#0D0B09", borderRadius: 6 }}>
            Apply to be a Partner →
          </a>
        </div>
        <p className="mt-3" style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 13, color: "rgba(240,234,214,0.35)" }}>
          Response within 24 hours. No retainer until I confirm fit.
        </p>
      </section>
    </div>
  );
}
