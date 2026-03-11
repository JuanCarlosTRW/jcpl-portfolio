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
    <>
      <SpotsLeftSection variant="compact" />
      <ApplyForm />
    </>
  );
}
