"use client";

import { servicesPaymentMethods } from "@/lib/content";
import { Reveal } from "@/components/motion";

/**
 * PaymentTrustRow — displays accepted payment method badges.
 * TODO: Confirm actual accepted payment methods with business owner.
 * Currently renders placeholders for unconfirmed methods.
 */
export default function PaymentTrustRow() {
  return (
    <Reveal>
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.15em] text-[var(--text-muted)] font-medium mb-4">
          Accepted Payment Methods
        </p>
        <div
          className="payment-trust-row"
          role="list"
          aria-label="Accepted payment methods"
        >
          {servicesPaymentMethods.map((method) => (
            <div
              key={method.name}
              className="payment-icon"
              role="listitem"
              aria-label={`${method.name}${!method.confirmed ? " (to be confirmed)" : ""}`}
              title={!method.confirmed ? `${method.name} — pending confirmation` : method.name}
            >
              {/* TODO: Replace with actual SVG brand icons once payment methods confirmed */}
              <span>{method.name.length > 6 ? method.name.slice(0, 4) : method.name}</span>
            </div>
          ))}
        </div>
        {servicesPaymentMethods.some((m) => !m.confirmed) && (
          <p className="text-[0.65rem] text-[var(--text-muted)]/60 mt-2">
            {/* This line is hidden from users but flags for dev review */}
            {/* TODO: Confirm payment methods and update content.ts */}
          </p>
        )}
      </div>
    </Reveal>
  );
}
