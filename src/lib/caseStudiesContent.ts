export type CaseStudy = {
  slug: string;
  label: string;
  client: string;
  industry: string;
  location: string;
  headline: string;
  subtext: string;
  situation: {
    who: string;
    problem: string;
    revenueStage: string;
    bottleneck: string;
  };
  diagnosis: {
    title: string;
    paragraphs: string[];
    highlighted: string;
  };
  architecture: {
    layers: { title: string; icon: string; description: string }[];
  };
  results: {
    metrics: { value: string; label: string }[];
  };
  insight: {
    quote: string;
    body: string;
  };
  beforeAfter: { before: string; after: string };
  whatChanged: string[];
  artifacts: { type: string; src: string; alt: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "rv-rental-texas",
    label: "Case Study #01",
    client: "RV Rental Company",
    industry: "Tourism / Rental",
    location: "Texas, USA",
    headline: "From Empty Calendar to $20,000 in 30 Days",
    subtext:
      "How we engineered a full Google Ads funnel for a Texas RV rental company — delivering $20K in new revenue in the first month of deployment.",
    situation: {
      who: "Family-owned RV rental business in Texas with 8 vehicles and no reliable online acquisition channel.",
      problem: "Bookings were entirely referral-based. No paid traffic. No conversion system. Revenue was unpredictable month-to-month.",
      revenueStage: "Pre-growth. $5–8K/month with capacity for 3x more.",
      bottleneck: "No visibility online, no system to capture demand. Leaving money on the table every peak-season week.",
    },
    diagnosis: {
      title: "The Hidden Bottleneck",
      paragraphs: [
        "The problem wasn't demand. The RV rental market in Texas is highly active — especially spring through fall. People were searching. The business simply didn't exist online.",
        "The real issue was architecture. No Google Ads presence, no optimized landing page, no follow-up system. Competitors were capturing every search query this owner should have owned.",
        "Throwing budget at ads without a conversion-ready funnel would have burned cash. We had to build the full system before spending a dollar.",
      ],
      highlighted: "The market was ready. The infrastructure wasn't.",
    },
    architecture: {
      layers: [
        {
          title: "Authority Layer",
          icon: "01",
          description: "Rebuilt the online presence with a conversion-first landing page — clear offer, trust signals, and premium visual design.",
        },
        {
          title: "Conversion Layer",
          icon: "02",
          description: "Engineered a high-intent booking flow with objection handling, social proof, and a frictionless CTA.",
        },
        {
          title: "Acquisition Layer",
          icon: "03",
          description: "Launched Google Ads campaigns targeting high-intent local searches. Tight keyword structure, negative keyword filters, geo-targeting.",
        },
        {
          title: "Optimization Loop",
          icon: "04",
          description: "Tracked every click, lead, and booking. Iteratively adjusted bids, copy, and targeting based on real data within the first two weeks.",
        },
      ],
    },
    results: {
      metrics: [
        { value: "$20K", label: "Revenue in Month 1" },
        { value: "30", label: "Days to Results" },
        { value: "3.8x", label: "Return on Ad Spend" },
        { value: "100%", label: "Calendar Booked Out" },
      ],
    },
    insight: {
      quote: "Most businesses don't have a traffic problem. They have a conversion architecture problem.",
      body: "Running ads to a weak page is burning money. The funnel — page, offer, intent, follow-up — has to be engineered before any dollar is spent on traffic. That's the difference between a campaign that breaks even and one that pays for itself 4x over.",
    },
    beforeAfter: { before: "$5–8K/mo referral-only", after: "$20K+ Month 1 with paid traffic" },
    whatChanged: [
      "Google Ads funnel built from scratch, live in under 2 weeks",
      "Landing page conversion rate optimized for mobile-first RV searchers",
      "3.8x ROAS achieved in first 30 days",
    ],
    artifacts: [
      { type: "screenshot", src: "", alt: "Google Ads dashboard (redacted)" },
      { type: "dashboard", src: "", alt: "Booking confirmation log (redacted)" },
    ],
  },
  {
    slug: "barbershop-90-clients",
    label: "Case Study #02",
    client: "Premium Barbershop",
    industry: "Beauty / Personal Care",
    location: "Canada",
    headline: "From Walk-Ins Only to 90 New Clients in 3 Months",
    subtext:
      "How a premium website funnel transformed a barbershop's client acquisition — generating 90 booked appointments in 90 days without referrals.",
    situation: {
      who: "Single-location premium barbershop with a strong product but zero digital infrastructure.",
      problem: "Growth was 100% word-of-mouth. No website, no online booking, no way for new clients to discover or convert online.",
      revenueStage: "Established locally, limited by acquisition ceiling.",
      bottleneck: "No digital presence meant no scalability. The owner was working harder to maintain the same revenue.",
    },
    diagnosis: {
      title: "The Hidden Bottleneck",
      paragraphs: [
        "The barbershop had a real competitive advantage — premium service, loyal clients, great atmosphere. But none of that was visible online. A Google search returned nothing.",
        "The bottleneck wasn't service quality. It was discoverability and conversion. Potential clients searched, found competitors, and booked elsewhere.",
        "The fix wasn't just a website. It was a full acquisition funnel — designed to convert strangers into booked appointments without any manual effort from the owner.",
      ],
      highlighted: "Great service is invisible without a system to surface it.",
    },
    architecture: {
      layers: [
        {
          title: "Authority Layer",
          icon: "01",
          description: "Built a premium website that matched the brand's real quality — strong imagery, clear positioning, and trust signals.",
        },
        {
          title: "Conversion Layer",
          icon: "02",
          description: "Integrated online booking directly into the site flow. Removed every friction point between discovery and appointment.",
        },
        {
          title: "Acquisition Layer",
          icon: "03",
          description: "Optimized for local SEO and Google Maps presence. New clients could find and book within 60 seconds of discovery.",
        },
        {
          title: "Optimization Loop",
          icon: "04",
          description: "Tracked booking sources and conversion rates. Refined the funnel based on where drop-offs occurred.",
        },
      ],
    },
    results: {
      metrics: [
        { value: "90", label: "New Clients in 3 Months" },
        { value: "3x", label: "Increase in New Bookings" },
        { value: "0", label: "Ad Spend Required" },
        { value: "90", label: "Days to Full Impact" },
      ],
    },
    insight: {
      quote: "A referral-only business has a ceiling. A system-driven business has a runway.",
      body: "Word of mouth is powerful — but it's not scalable. The moment you build a digital acquisition system, you decouple your growth from your personal network. That's when the business becomes an asset, not just a job.",
    },
    beforeAfter: { before: "100% referral, no digital presence", after: "90 new clients via website funnel in 90 days" },
    whatChanged: [
      "Premium website built with full booking integration",
      "Google Maps and local SEO optimized from day one",
      "90 new client bookings within the first quarter",
    ],
    artifacts: [
      { type: "screenshot", src: "", alt: "Website booking flow (redacted)" },
      { type: "dashboard", src: "", alt: "Appointment analytics (redacted)" },
    ],
  },
  {
    slug: "barbershop-premium-website",
    label: "Case Study #03",
    client: "Barbershop — Brand Rebuild",
    industry: "Beauty / Personal Care",
    location: "Canada",
    headline: "A Premium Brand Identity for a Modern Barbershop",
    subtext:
      "How a fully custom, personalized website elevated a barbershop's brand perception and positioned them as the premium choice in their market.",
    situation: {
      who: "Established barbershop with a loyal base but outdated digital presence that undercut their real quality.",
      problem: "The existing website and branding didn't match the in-person experience. Premium clients were being lost to competitors with better-looking digital presence.",
      revenueStage: "Stable revenue, but premium positioning not reflected online.",
      bottleneck: "Brand perception gap — the digital presence was communicating average when the service was exceptional.",
    },
    diagnosis: {
      title: "The Hidden Bottleneck",
      paragraphs: [
        "First impressions are made online before the client ever walks in. An outdated website doesn't just look bad — it actively repels the high-value clients you want.",
        "The issue wasn't the service. It was the signal. Potential premium clients were evaluating the website and choosing competitors who looked more established.",
        "We needed to build a digital presence that matched — and elevated — the real quality of the in-person experience.",
      ],
      highlighted: "Your website is your first handshake. Make it premium.",
    },
    architecture: {
      layers: [
        {
          title: "Authority Layer",
          icon: "01",
          description: "Designed a fully custom, personalized brand identity — logo direction, color palette, typography — aligned with premium positioning.",
        },
        {
          title: "Conversion Layer",
          icon: "02",
          description: "Built a website that converts visitors into booked clients — with clear service presentation, pricing, and direct booking CTAs.",
        },
        {
          title: "Acquisition Layer",
          icon: "03",
          description: "Structured the site for Google discoverability — local SEO foundations baked into every page from launch.",
        },
        {
          title: "Optimization Loop",
          icon: "04",
          description: "Post-launch review cycle to optimize conversion points and update content as the business evolved.",
        },
      ],
    },
    results: {
      metrics: [
        { value: "100%", label: "Brand Perception Upgrade" },
        { value: "1", label: "Week to Launch" },
        { value: "Premium", label: "Market Position Achieved" },
        { value: "↑", label: "Average Client Value" },
      ],
    },
    insight: {
      quote: "You cannot charge premium prices with an average digital presence.",
      body: "Price resistance almost always comes from a perception gap. When your brand looks as good as your service actually is, premium pricing becomes natural — not a negotiation.",
    },
    beforeAfter: { before: "Outdated site, average brand perception", after: "Premium website, elevated market position" },
    whatChanged: [
      "Fully custom website designed to premium standards",
      "Brand identity aligned with high-end positioning",
      "Local SEO foundations implemented from launch",
    ],
    artifacts: [
      { type: "screenshot", src: "", alt: "Website design preview (redacted)" },
    ],
  },
  {
    slug: "rv-rental-ai-voice-agent",
    label: "Case Study #04",
    client: "RV Rental Company — AI Upgrade",
    industry: "Tourism / Rental",
    location: "Texas, USA",
    headline: "24/7 Lead Qualification with Zero Human Overhead",
    subtext:
      "How we deployed an AI voice agent for the same Texas RV rental company — handling every inbound inquiry automatically, qualifying leads, and booking calls without lifting a finger.",
    situation: {
      who: "The same RV rental company from Case #01 — now generating inbound leads via Google Ads, but owner overwhelmed by volume of inquiries.",
      problem: "More leads than the owner could manually respond to. Slow follow-up was costing bookings. Revenue was being left unrealized.",
      revenueStage: "Post-growth phase — revenue up, but operational bottleneck emerging.",
      bottleneck: "The acquisition system worked too well. Manual lead handling became the new constraint.",
    },
    diagnosis: {
      title: "The Hidden Bottleneck",
      paragraphs: [
        "This is the second-stage problem most growth agencies never talk about. You fix acquisition — then operations breaks. The business couldn't scale without either hiring or automating.",
        "Hiring was premature and expensive at this stage. The answer was an AI voice agent that could handle inbound inquiries 24/7, qualify leads based on trip dates and vehicle fit, and route serious prospects to a booking confirmation.",
        "The system needed to feel human, respond instantly, and never let a lead go cold.",
      ],
      highlighted: "Scaling acquisition without scaling operations is the next unlock.",
    },
    architecture: {
      layers: [
        {
          title: "Authority Layer",
          icon: "01",
          description: "Trained the AI agent on the business's tone, offer, and FAQ — so every interaction felt personal and on-brand.",
        },
        {
          title: "Conversion Layer",
          icon: "02",
          description: "Built qualification logic into the conversation flow — the agent identified high-intent leads and moved them to booking without human input.",
        },
        {
          title: "Acquisition Layer",
          icon: "03",
          description: "Connected the agent to the existing inbound funnel — every new lead from Google Ads was automatically contacted within 60 seconds.",
        },
        {
          title: "Optimization Loop",
          icon: "04",
          description: "Reviewed call transcripts weekly to improve qualification logic and conversation quality based on real interactions.",
        },
      ],
    },
    results: {
      metrics: [
        { value: "<60s", label: "Response Time to Every Lead" },
        { value: "24/7", label: "Availability Without Staff" },
        { value: "0", label: "Leads Left Uncontacted" },
        { value: "↑40%", label: "Booking Conversion Rate" },
      ],
    },
    insight: {
      quote: "The business that responds first wins. AI makes that mathematically guaranteed.",
      body: "Speed-to-lead is the single highest-leverage variable in any service business. The company that calls back in 5 minutes closes 10x more than the one that calls back in 2 hours. AI voice agents make sub-60-second response a permanent, unbreakable system.",
    },
    beforeAfter: { before: "Manual follow-up, slow response, lost leads", after: "AI handles all inbound, 60s response, 0 leads lost" },
    whatChanged: [
      "AI voice agent deployed and connected to inbound funnel",
      "Response time dropped to under 60 seconds for every lead",
      "Booking conversion rate increased 40% with automated qualification",
    ],
    artifacts: [
      { type: "log", src: "", alt: "AI call transcript sample (redacted)" },
      { type: "dashboard", src: "", alt: "Lead response time analytics (redacted)" },
    ],
  },
];

// Legacy export for backward compatibility
export const caseStudiesContent = {
  eyebrow: "Case Evidence",
  title: "Measured Results. No Hype.",
  subtitle: "Every outcome below is from a real engagement. Metrics are independently verified. Results vary by market, offer, and execution.",
  featuredCase: {
    client: caseStudies[0].client,
    context: caseStudies[0].situation.who,
    problem: caseStudies[0].situation.problem,
    intervention: "Deployed full Google Ads funnel with conversion-optimized landing page and ROAS tracking.",
    mechanism: "Integrated traffic, qualification, and conversion engine.",
    primaryMetric: { label: "Revenue in Month 1", value: 20000, suffix: "$" },
    supportingMetrics: [
      { label: "Return on Ad Spend", value: "3.8x" },
      { label: "Time to Results", value: "30 days" },
      { label: "Calendar Fill Rate", value: "100%" },
    ],
    beforeAfter: caseStudies[0].beforeAfter,
    whatChanged: caseStudies[0].whatChanged,
    artifacts: caseStudies[0].artifacts,
  },
  secondaryCases: [
    {
      client: "Premium Barbershop",
      metric: "+90 New Clients / 3 Months",
      summary: "Website funnel for a barbershop with zero digital presence.",
      bullets: [
        "90 new booked clients in 90 days",
        "0 ad spend required",
        "3x increase in new bookings",
      ],
    },
    {
      client: "RV Rental — AI Voice Agent",
      metric: "<60s Response Time / 0 Leads Lost",
      summary: "AI voice agent deployed for automated 24/7 lead qualification.",
      bullets: [
        "Every inbound lead contacted in under 60 seconds",
        "40% increase in booking conversion",
        "Zero staff overhead added",
      ],
    },
  ],
  disclaimer: "All results are client-reported and independently verified. Your results will vary based on market, offer, and execution quality.",
  cta: {
    label: "Apply for Selective Partnership",
    href: "/apply",
    note: "We work with a limited number of partners per quarter.",
  },
};
