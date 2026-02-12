import { siteConfig, serviceTiers, systemSteps } from "@/lib/content";

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Juan Carlos",
    url: siteConfig.url,
    jobTitle: "Growth Partner & Marketing Strategist",
    description: siteConfig.description,
    knowsAbout: [
      "Digital Marketing",
      "Conversion Rate Optimization",
      "Google Ads",
      "SEO",
      "GEO",
      "AI Automation",
      "Web Development",
    ],
  };
}

export function generateProfessionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${siteConfig.name} Growth Systems`,
    url: siteConfig.url,
    description: siteConfig.description,
    provider: {
      "@type": "Person",
      name: "Juan Carlos",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Growth System Packages",
      itemListElement: serviceTiers.map((tier) => ({
        "@type": "Offer",
        name: tier.name,
        description: tier.tagline,
      })),
    },
  };
}

export function generateServiceSchema() {
  return serviceTiers.map((tier) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${tier.name} Growth System`,
    description: tier.tagline,
    provider: {
      "@type": "Person",
      name: "Juan Carlos",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
  }));
}

export function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the Presence-to-Pipeline System™?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `A proven 6-step framework: ${systemSteps.map((s) => s.title).join(", ")}. It transforms your online presence into a predictable pipeline of qualified booked calls.`,
        },
      },
      {
        "@type": "Question",
        name: "What types of businesses do you work with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I primarily work with barbershops, RV rental companies, dental practices, real estate businesses, and other local service businesses.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly can I expect results?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most clients see their first qualified leads within 30 days of launch. One RV rental client generated $20,000 in confirmed bookings in their first month.",
        },
      },
      {
        "@type": "Question",
        name: "What makes you different from a typical marketing agency?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I own the entire pipeline — from positioning to conversion website to traffic activation to AI automation to booking. No fragmented freelancers. One integrated system, one accountable partner.",
        },
      },
    ],
  };
}
