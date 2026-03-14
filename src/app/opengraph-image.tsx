import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Client Growth. Growth Infrastructure for Service Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#0D0B09",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* Subtle gold glow top-right */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(212,168,83,0.12) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        {/* Brand mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 48,
          }}
        >
          <div
            style={{
              width: 6,
              height: 24,
              background: "#D4A853",
              borderRadius: 2,
            }}
          />
          <span
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: "#D4A853",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Client Growth
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: "#F5F0E8",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            maxWidth: 820,
            marginBottom: 28,
          }}
        >
          Growth Infrastructure for Service Businesses.
        </div>

        {/* Proof stat */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            paddingLeft: 14,
            borderLeft: "2px solid rgba(212,168,83,0.45)",
          }}
        >
          <span
            style={{
              fontSize: 20,
              color: "#A69D8D",
              letterSpacing: "-0.01em",
            }}
          >
            <span style={{ color: "#D4A853", fontWeight: 700 }}>$41,085</span>
            {" "}generated from{" "}
            <span style={{ color: "#C8A05A", fontWeight: 500 }}>$900</span>
            {" "}in ad spend, within 30 days.
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
