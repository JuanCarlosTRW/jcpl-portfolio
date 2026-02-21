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
            <h2 className="text-lg font-semibold text-white mb-3">1. Information I Collect</h2>
            <p className="text-sm text-cg-secondary leading-relaxed">
              When you submit the application form, I collect your name, email address, business details, and information about your marketing goals. This information is used solely to assess fit and respond to your inquiry.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">2. How I Use Your Information</h2>
            <p className="text-sm text-cg-secondary leading-relaxed">
              I use the information you provide to evaluate partnership fit, communicate with you about my services, and improve the intake process. I do not sell, rent, or share your personal information with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">3. Analytics</h2>
            <p className="text-sm text-cg-secondary leading-relaxed">
              This site does not currently use third-party analytics. No tracking pixels or advertising cookies are set.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">4. Cookies</h2>
            <p className="text-sm text-cg-secondary leading-relaxed">
              Only essential cookies required for site functionality are used. No advertising or retargeting cookies are set.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">5. Data Retention</h2>
            <p className="text-sm text-cg-secondary leading-relaxed">
              Application data is retained for up to 12 months. You may request deletion of your data at any time by contacting me.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">6. Your Rights</h2>
            <p className="text-sm text-cg-secondary leading-relaxed">
              You have the right to access, correct, or delete any personal data I hold about you. To exercise these rights, contact me at the address below.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">7. Contact</h2>
            <p className="text-sm text-cg-secondary leading-relaxed">
              For privacy-related inquiries:{" "}
              <a
                href="mailto:juan@clientgrowth.ca"
                className="text-cg-accent hover:underline"
              >
                juan@clientgrowth.ca
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
