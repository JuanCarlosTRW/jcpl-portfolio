import type { Metadata } from "next";
import AboutFull from "@/components/about/AboutFull";

export const metadata: Metadata = {
  title: "About | Client Growth",
  description: "I build acquisition systems for local service businesses across Canada and the United States.",
};

export default function AboutPage() {
  return (
    <div style={{ background: "#0D0B09", minHeight: "100vh" }}>
      <div className="pt-24 md:pt-28">
        <AboutFull />
      </div>
    </div>
  );
}
