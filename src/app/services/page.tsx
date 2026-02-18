import { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import ServicesClient from "@/components/services/ServicesClient";
import "@/styles/services.css";

export const metadata: Metadata = buildMetadata({
  title: "Services — Growth Systems for Service Businesses",
  description:
    "Three clear service tiers to get you online, fill your calendar, and dominate your local market. Foundation, Growth, and Scale packages.",
  path: "/services",
});

export default function ServicesPage() {
  return <ServicesClient />;
}
