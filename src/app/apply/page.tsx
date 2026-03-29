import { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import DiagnosticForm from "@/components/home/DiagnosticForm";

export const metadata: Metadata = buildMetadata({
  title: "Apply | Client Growth",
  description:
    "Book a diagnostic call with Client Growth. I review your market before the call and tell you exactly where you're losing calls.",
  path: "/apply",
});

export default function ApplyPage() {
  return (
    <div
      className="relative overflow-hidden"
      style={{ background: "#0D0B09", minHeight: "100vh" }}
    >
      {/* Minimal hero */}
      <div className="pt-32 pb-8 text-center px-6" style={{ maxWidth: 560, margin: "0 auto" }}>
        <p
          className="uppercase mb-4"
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
            color: "#D4A853",
            fontWeight: 600,
          }}
        >
          APPLY
        </p>
        <h1
          className="font-bold text-white mb-4"
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            lineHeight: 1.15,
          }}
        >
          Book your diagnostic. I will tell you if I can help.
        </h1>
        <p style={{ fontSize: "0.95rem", color: "#A69D8D", lineHeight: 1.6 }}>
          This is not a discovery call. It is an actual audit.
        </p>
      </div>

      {/* Reuse the same DiagnosticForm from homepage */}
      <DiagnosticForm />
    </div>
  );
}
