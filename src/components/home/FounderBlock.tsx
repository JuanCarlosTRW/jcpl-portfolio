import Image from "next/image";
import Link from "next/link";

const JUAN_IMG_SRC =
  "https://static.wixstatic.com/media/62f926_557272f0fa6547d9b0c8d0518959c14b~mv2.jpeg";

const CHIPS = [
  "3 active partnerships max",
  "Every system built personally",
  "Direct access. No middlemen.",
];

export default function FounderBlock() {
  return (
    <section className="py-16 md:py-24" style={{ background: "#1A1510" }}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16 md:items-center">

          {/* Portrait */}
          <div className="max-w-[480px] mx-auto md:mx-0">
            <Image
              src={JUAN_IMG_SRC}
              alt="Juan Carlos Portillo-Laflamme — founder and sole operator of Client Growth"
              width={480}
              height={640}
              quality={80}
              sizes="(max-width: 768px) 100vw, 480px"
              className="w-full h-auto object-cover object-top"
              style={{
                borderRadius: 10,
                border: "1px solid #2A2318",
              }}
            />
          </div>

          {/* Copy */}
          <div className="flex flex-col gap-5">
            <p
              style={{
                fontSize: "0.6875rem",
                letterSpacing: "0.15em",
                color: "#D4A853",
                textTransform: "uppercase",
              }}
            >
              WHO RUNS THE SYSTEM
            </p>

            <h2
              className="text-white font-bold"
              style={{ fontSize: "1.875rem", lineHeight: 1.2, margin: 0 }}
            >
              One operator. Full accountability.
            </h2>

            <p
              style={{
                fontSize: "1.0625rem",
                color: "#D2C9B8",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Client Growth was built to avoid the biggest failure point in
              agency work: fragmented execution across too many people.
            </p>

            <div>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "#A8998A",
                  lineHeight: 1.75,
                  marginBottom: "0.875rem",
                }}
              >
                Most service businesses do not need more vendors. They need one
                system built and managed by someone who sees the full picture.
              </p>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "#A8998A",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                I keep the model intentionally small so strategy, conversion,
                acquisition, and optimization stay connected. No account manager
                in the middle. No junior team learning on your budget. No
                handoffs between people who only own one piece of the result.
              </p>
            </div>

            {/* Trust chips */}
            <div className="flex flex-wrap" style={{ gap: 8 }}>
              {CHIPS.map((chip) => (
                <span
                  key={chip}
                  style={{
                    background: "#221D17",
                    border: "1px solid #2A2318",
                    borderLeft: "3px solid #D4A853",
                    color: "#D2C9B8",
                    fontSize: "0.8rem",
                    padding: "8px 16px",
                    borderRadius: 6,
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* Closing line */}
            <p
              style={{
                fontSize: "0.875rem",
                color: "#7A6E62",
                lineHeight: 1.65,
                borderTop: "1px solid #2A2318",
                paddingTop: 20,
                margin: 0,
              }}
            >
              If performance improves, you know why. If something is
              underperforming, you know who owns it.
            </p>

            {/* Trust-deepening path */}
            <Link
              href="/about"
              style={{
                fontSize: "0.78rem",
                color: "#5E5650",
                letterSpacing: "-0.006em",
                textDecoration: "none",
                transition: "color 180ms ease",
              }}
              onMouseOver={(e) => { e.currentTarget.style.color = "#A69D8D"; }}
              onMouseOut={(e) => { e.currentTarget.style.color = "#5E5650"; }}
            >
              Why this model works →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
