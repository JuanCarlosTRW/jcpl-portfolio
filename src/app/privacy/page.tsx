import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Client Growth collects, uses, and protects your personal information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main className="bg-[#030812] min-h-screen">
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-cg-accent mb-4">Legal</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
          Privacy Policy
        </h1>
        <p className="text-sm text-cg-secondary mb-10">
          Last updated: February 2026
        </p>

        <div className="prose-custom space-y-8">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">1. Information We Collect</h2>
            <p className="text-sm text-cg-secondary leading-relaxed">
              When you submit our application form, we collect your name, email address, business details, and information about your marketing goals. We use this information solely to assess fit and respond to your inquiry.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">2. How We Use Your Information</h2>
            <p className="text-sm text-cg-secondary leading-relaxed">
              We use the information you provide to evaluate partnership fit, communicate with you about our services, and improve our intake process. We do not sell, rent, or share your personal information with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">3. Analytics</h2>
            <p className="text-sm text-cg-secondary leading-relaxed">
              We use Google Analytics 4 (GA4) to understand how visitors interact with our website. This data is anonymized and used only to improve our content and user experience. You can opt out via your browser settings or the Google Analytics opt-out extension.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">4. Cookies</h2>
            <p className="text-sm text-cg-secondary leading-relaxed">
              Our website uses essential cookies required for site functionality. Analytics cookies (GA4) are used to measure performance. No advertising or retargeting cookies are set without your consent.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">5. Data Retention</h2>
            <p className="text-sm text-cg-secondary leading-relaxed">
              Application data is retained for up to 12 months. You may request deletion of your data at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">6. Your Rights</h2>
            <p className="text-sm text-cg-secondary leading-relaxed">
              You have the right to access, correct, or delete any personal data we hold about you. To exercise these rights, contact us at the address below.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">7. Contact</h2>
            <p className="text-sm text-cg-secondary leading-relaxed">
              For privacy-related inquiries, contact us at:{" "}
              <a
                href="mailto:hello@clientgrowth.ca"
                className="text-cg-accent hover:underline"
              >
                hello@clientgrowth.ca
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
