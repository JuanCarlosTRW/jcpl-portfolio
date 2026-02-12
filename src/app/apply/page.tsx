import { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import ApplyForm from "@/components/ApplyForm";

export const metadata: Metadata = buildMetadata({
  title: "Apply — Work With Juan Carlos",
  description:
    "Apply to work together. Answer a few quick questions and, if we're a fit, book a free strategy call to discuss your growth system.",
  path: "/apply",
});

export default function ApplyPage() {
  return <ApplyForm />;
}
