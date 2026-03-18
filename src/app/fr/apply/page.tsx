import type { Metadata } from "next";
import ApplyForm from "@/components/ApplyForm";
import SpotsLeftSection from "@/components/home/SpotsLeftSection";

export const metadata: Metadata = {
  title: "Postuler | Réserver un appel diagnostic",
  description:
    "Postulez pour un partenariat de croissance avec Client Growth. Chaque candidature est examinée personnellement. Si la compatibilité est là, vous aurez une réponse directe dans les 24 heures.",
  alternates: {
    canonical: "https://clientgrowth.ca/fr/apply",
    languages: {
      "en": "https://clientgrowth.ca/apply",
      "fr": "https://clientgrowth.ca/fr/apply",
      "x-default": "https://clientgrowth.ca/apply",
    },
  },
};

export default function FrApplyPage() {
  return (
    <div
      className="relative overflow-hidden"
      style={{ background: "#0D0B09", minHeight: "100vh" }}
    >
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
          background: "radial-gradient(ellipse, rgba(212,168,83,0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "200px",
          height: "1px",
          background: "linear-gradient(to right, transparent, rgba(212,168,83,0.35), transparent)",
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
