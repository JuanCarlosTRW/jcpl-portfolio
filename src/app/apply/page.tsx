"use client";

import { useState, FormEvent } from "react";
import { trackEvent } from "@/lib/analytics";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ApplyPage() {
  const [fullName, setFullName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  function isValidEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!fullName || !businessName || !isValidEmail(email)) return;

    setStatus("submitting");
    trackEvent("apply_form_submit");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName,
          email,
          businessName,
          businessWebsite: website,
        }),
      });

      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      trackEvent("form_submit");
    } catch {
      setStatus("error");
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: 8,
    background: "rgba(255, 255, 255, 0.04)",
    border: "1px solid rgba(212, 168, 83, 0.2)",
    color: "#F5F0E8",
    fontSize: 15,
    fontFamily: "var(--font-dm-sans), sans-serif",
    outline: "none",
    transition: "border-color 180ms ease, box-shadow 180ms ease",
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.style.borderColor = "#D4A853";
    e.currentTarget.style.boxShadow = "0 0 0 2px rgba(212, 168, 83, 0.1)";
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.style.borderColor = "rgba(212, 168, 83, 0.2)";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <div style={{ background: "#0D0B09", minHeight: "100vh" }}>
      <section className="pt-32 pb-20 px-6">
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          {/* Heading */}
          <h1
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 300,
              color: "#F0EAD6",
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            Apply to be a partner
          </h1>

          {/* Subheading */}
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 16,
              color: "rgba(240, 234, 214, 0.6)",
              lineHeight: 1.65,
              marginBottom: 40,
            }}
          >
            I review your market, competitors, and current setup before we
            speak. If I can move the needle, I tell you exactly how. If I
            cannot, I tell you that too.
          </p>

          {/* Form */}
          {status === "success" ? (
            <div
              style={{
                background: "#1E1A14",
                border: "1px solid rgba(212,168,83,0.25)",
                borderRadius: 12,
                padding: "48px 32px",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "rgba(212,168,83,0.12)",
                  color: "#D4A853",
                  fontSize: "1.5rem",
                  marginBottom: 16,
                }}
              >
                &#10003;
              </span>
              <p
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#F5F0E8",
                  marginBottom: 8,
                }}
              >
                Application received.
              </p>
              <p style={{ fontSize: 14, color: "#A69D8D" }}>
                I will review your business within 24 hours and email you
                directly.
              </p>
            </div>
          ) : status === "error" ? (
            <div
              style={{
                background: "#1E1A14",
                border: "1px solid rgba(192,57,43,0.3)",
                borderRadius: 12,
                padding: "48px 32px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#F5F0E8",
                  marginBottom: 8,
                }}
              >
                Something went wrong.
              </p>
              <p style={{ fontSize: 14, color: "#A69D8D", marginBottom: 16 }}>
                Email{" "}
                <a
                  href="mailto:juan@clientgrowth.ca"
                  style={{ color: "#D4A853", textDecoration: "underline" }}
                >
                  juan@clientgrowth.ca
                </a>{" "}
                directly.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                style={{
                  padding: "10px 20px",
                  borderRadius: 8,
                  background: "rgba(255,255,255,0.06)",
                  color: "#F5F0E8",
                  border: "1px solid #2A2318",
                  fontSize: 14,
                  cursor: "pointer",
                }}
              >
                Try again
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Full name"
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                <input
                  type="text"
                  required
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="Business name"
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                <input
                  type="text"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="Website URL (if you have one)"
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />

                <button
                  type="submit"
                  disabled={
                    status === "submitting" ||
                    !fullName ||
                    !businessName ||
                    !isValidEmail(email)
                  }
                  style={{
                    width: "100%",
                    padding: "16px 24px",
                    borderRadius: 10,
                    background: "#D4A853",
                    color: "#0D0B09",
                    fontSize: 16,
                    fontWeight: 700,
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    border: "none",
                    cursor:
                      status === "submitting" ? "not-allowed" : "pointer",
                    opacity:
                      status === "submitting" ||
                      !fullName ||
                      !businessName ||
                      !isValidEmail(email)
                        ? 0.6
                        : 1,
                    transition: "filter 180ms ease",
                  }}
                  onMouseOver={(e) => {
                    if (status !== "submitting")
                      (e.currentTarget as HTMLButtonElement).style.filter =
                        "brightness(1.1)";
                  }}
                  onMouseOut={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.filter =
                      "none";
                  }}
                >
                  {status === "submitting" ? "Submitting..." : "Submit application"}
                </button>
              </div>
            </form>
          )}

          {/* Trust line */}
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 13,
              color: "#756D63",
              textAlign: "center",
              marginTop: 20,
              lineHeight: 1.6,
            }}
          >
            No payment before fit is confirmed. I respond within 24 hours.
          </p>

          {/* Proof quote */}
          <div
            style={{
              marginTop: 40,
              padding: 20,
              borderLeft: "2px solid #D4A853",
              background: "rgba(212,168,83,0.04)",
              borderRadius: "0 8px 8px 0",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: 14,
                fontStyle: "italic",
                color: "#D2C9B8",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              &ldquo;Since Juan came on, we have been getting way more quality
              leads. Business is doing extremely well in the city now.&rdquo;
            </p>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: 12,
                color: "#756D63",
                marginTop: 8,
                marginBottom: 0,
              }}
            >
              Westin Wayne Walker, Triple W Rentals &middot; Texas
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
