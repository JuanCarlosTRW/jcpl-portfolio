import { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import ApplyForm from "@/components/ApplyForm";

export const metadata: Metadata = buildMetadata({
  title: "Apply: Start Your Growth Partnership",
  description:
    "Apply to work with Client Growth. Answer a few quick questions and I'll personally review your application within 24 hours.",
  path: "/apply",
});

const tierMap: Record<string, string> = {
  foundation: "Foundation Architecture — $2,500 build + $1,200/month",
  performance: "Performance Engine — $2,500/month + ad spend",
  ownership: "Market Ownership — $4,000/month + ad spend",
};

export default async function ApplyPage({
  searchParams,
}: {
  searchParams: Promise<{ tier?: string }>;
}) {
  const params = await searchParams;
  const initialTier = params.tier ? (tierMap[params.tier] ?? "") : "";
  return <ApplyForm initialTier={initialTier} />;
}
