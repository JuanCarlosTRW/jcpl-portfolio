import { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import ApplyForm from "@/components/ApplyForm";
import SpotsLeftSection from "@/components/home/SpotsLeftSection";

export const metadata: Metadata = buildMetadata({
  title: "Apply — Client Growth",
  description:
    "Apply for a growth partnership with Client Growth. Every application is reviewed personally. If there's a fit, you'll hear directly within 24 hours.",
  path: "/apply",
});

export default function ApplyPage() {
  return (
    <div
      className="relative overflow-hidden"
      style={{ background: "#0D0B09", minHeight: "100vh" }}
    >
      {/* Atmospheric orb — restrained ambient light above the gate */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(212,168,83,0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      {/* Hairline gold accent at top of content */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "200px",
          height: "1px",
          background:
            "linear-gradient(to right, transparent, rgba(212,168,83,0.35), transparent)",
          zIndex: 1,
        }}
      />
      <div className="relative" style={{ zIndex: 2 }}>
        <SpotsLeftSection variant="compact" />
        <ApplyForm />
      </div>
    </div>
  );
}
