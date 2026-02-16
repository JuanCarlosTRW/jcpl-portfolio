/* ─── Centralized Content & Copy ─── */

export const siteConfig = {
  name: "Juan Carlos",
  title: "Growth Systems for Service Businesses",
  url: "https://juancarlos.dev",
  description:
    "I build premium acquisition systems for service businesses — conversion websites, paid funnels, SEO/GEO, and AI automation to generate qualified booked calls.",
  ogImage: "/og.png",
  twitterHandle: "@juancarlostrw",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
] as const;

export const ctaCopy = {
  primary: "Apply for Growth Partnership",
  secondary: "See Case Studies",
  tertiary: "See If We're a Fit",
  href: "/apply",
};

/* ─── Hero ─── */
export const hero = {
  headline: "I Build Growth Systems That Fill Your Calendar",
  subheadline:
    "Premium acquisition systems for service businesses — conversion websites, paid funnels, SEO/GEO, and AI automation that generate qualified booked calls.",
  rotatingNiches: [
    "Barbershops",
    "RV Rentals",
    "Dental Practices",
    "Real Estate",
    "Local Service Businesses",
  ],
  cta: ctaCopy.primary,
};

/* ─── Problem Section ─── */
export const problemSection = {
  label: "The Real Problem",
  headline: "A Weak Online Presence Is Costing You Real Money",
  problems: [
    {
      stat: "97%",
      description: "of consumers search online before choosing a local business",
    },
    {
      stat: "70%",
      description: "of potential clients leave a website in under 10 seconds",
    },
    {
      stat: "$0",
      description:
        "is what you earn from visitors who can't find you, don't trust you, or can't book you",
    },
  ],
  body: "Most service businesses don't have a lead generation problem — they have a trust and conversion problem. Your website looks outdated. Your ads lead nowhere. And you're invisible to the AI tools your future clients are already using.",
};

/* ─── Presence-to-Pipeline System ─── */
export const systemSteps = [
  {
    step: 1,
    title: "Positioning & Offer Clarity",
    description:
      "Define who you serve, what makes you different, and craft an offer that compels action.",
  },
  {
    step: 2,
    title: "Conversion Website",
    description:
      "A premium, fast-loading site engineered to turn every visitor into a booked call.",
  },
  {
    step: 3,
    title: "Traffic Activation",
    description:
      "Google Ads, SEO, and GEO (AI search optimization) so qualified prospects find you first.",
  },
  {
    step: 4,
    title: "AI Assist Layer",
    description:
      "An AI receptionist that answers questions, qualifies leads, and books appointments 24/7.",
  },
  {
    step: 5,
    title: "Qualification & Booking",
    description:
      "Automated screening so only serious, qualified leads make it onto your calendar.",
  },
  {
    step: 6,
    title: "Optimization & Scale",
    description:
      "Continuous data-driven improvements to lower cost per lead and scale what works.",
  },
];

/* ─── Results Preview ─── */
export const resultsPreview = {
  label: "Proven Results",
  headline: "Real Outcomes. Real Revenue.",
  featured: {
    stat: "$20,000",
    context: "generated in month one",
    client: "RV Rental Company",
    method: "Google Ads Funnel",
  },
  highlights: [
    { metric: "2", label: "Barbershop websites delivered" },
    { metric: "3", label: "Active client growth systems" },
    { metric: "<30", label: "Days to first qualified leads" },
  ],
};

/* ─── Why Work With Me ─── */
export const whySection = {
  label: "The Advantage",
  headline: "One Integrated Partner. Not Five Disconnected Freelancers.",
  points: [
    {
      title: "Strategy + Execution Under One Roof",
      description:
        "No more juggling a web designer, an ad agency, an SEO person, and a chatbot vendor. I own the entire pipeline.",
    },
    {
      title: "Built for Service Businesses",
      description:
        "I specialize in barbershops, RV rentals, dental practices, and local services. I know your clients, your margins, and your growth levers.",
    },
    {
      title: "Revenue-Focused, Not Deliverable-Focused",
      description:
        "I don't hand you a pretty website and disappear. Every piece I build is measured by booked calls and revenue generated.",
    },
    {
      title: "AI-Native From Day One",
      description:
        "Your competitors aren't optimizing for AI search or using AI receptionists yet. That's your window — and I help you seize it.",
    },
  ],
};

/* ─── Services / Tiers ─── */
export const serviceTiers = [
  {
    name: "Foundation",
    tagline: "Get online. Get credible. Get found.",
    bestFor:
      "Service businesses that need a professional online presence and aren't currently generating leads online.",
    deliverables: [
      "Premium conversion-optimized website (up to 5 pages)",
      "Mobile-first responsive design",
      "Basic SEO setup (local keywords, Google Business optimization)",
      "Contact form + booking integration",
      "Speed & performance optimization",
    ],
    timeline: "2–3 weeks",
    impact:
      "Stop losing clients to competitors who simply look more professional online. Your website becomes your hardest-working salesperson.",
    cta: "Apply for Growth Partnership",
  },
  {
    name: "Growth",
    tagline: "Fill your calendar with qualified leads.",
    bestFor:
      "Established businesses ready to actively generate leads through ads and search, not just wait for word of mouth.",
    deliverables: [
      "Everything in Foundation",
      "Google Ads funnel (campaign setup, landing pages, tracking)",
      "Advanced SEO + GEO optimization (AI search visibility)",
      "AI receptionist / chatbot for 24/7 lead capture",
      "Qualification flow + automated booking system",
      "Monthly performance reporting",
    ],
    timeline: "3–4 weeks setup + ongoing optimization",
    impact:
      "Predictable lead flow. Qualified prospects booking directly into your calendar. No more feast-or-famine months.",
    cta: "Apply for Growth Partnership",
    featured: true,
  },
  {
    name: "Scale",
    tagline: "Dominate your market. Systematize growth.",
    bestFor:
      "Multi-location or high-revenue businesses ready to scale aggressively and own their local market.",
    deliverables: [
      "Everything in Growth",
      "Multi-location SEO/GEO strategy",
      "Advanced conversion rate optimization (A/B testing, heatmaps)",
      "Multi-channel ad management (Google + Meta)",
      "Custom AI automation workflows",
      "Priority support + strategy calls",
      "Quarterly growth roadmap",
    ],
    timeline: "4–6 weeks setup + ongoing partnership",
    impact:
      "You become the obvious choice in your market. Leads come in systematically. You focus on running your business — I focus on filling it.",
    cta: "Apply for Growth Partnership",
  },
];

/* ─── Case Studies ─── */
export const caseStudies = [
  {
    slug: "rv-rental-google-ads",
    title: "From Zero Online Leads to $20,000 in Month One",
    client: "Premier RV Rentals",
    industry: "RV Rentals",
    heroStat: "$20,000",
    heroLabel: "Revenue in first 30 days",
    context:
      "A regional RV rental company with a solid fleet but zero online lead generation. All bookings came from repeat clients and word of mouth — leaving massive revenue on the table during peak season.",
    problem:
      "No online presence beyond a basic listing. No paid advertising. No way to capture or qualify leads digitally. Competitors were running Google Ads and dominating search results.",
    strategy:
      "Built a complete Google Ads funnel: keyword research targeting high-intent rental queries, conversion-optimized landing pages with urgency and trust signals, and an automated booking qualification flow.",
    execution: [
      "Researched and segmented high-intent keywords by location and season",
      "Designed and built dedicated landing pages with social proof and scarcity",
      "Set up conversion tracking across the entire funnel",
      "Launched targeted Google Search campaigns with tight ad group structure",
      "Implemented automated follow-up sequences for unconverted leads",
    ],
    outcome:
      "$20,000 USD in confirmed bookings within the first 30 days of campaign launch. Cost per acquisition well below industry average. Client expanded fleet by 2 vehicles to meet demand.",
    takeaway:
      "When you combine high-intent traffic with a conversion-optimized funnel, results aren't gradual — they're immediate. The system paid for itself in the first week.",
    tags: ["Google Ads", "Landing Pages", "Conversion Funnel", "Lead Generation"],
  },
  {
    slug: "elite-cuts-barbershop",
    title: "A Premium Barbershop Website That Matches the Craft",
    client: "Elite Cuts Barbershop",
    industry: "Barbershops",
    heroStat: "3x",
    heroLabel: "Online booking increase",
    context:
      "A high-end barbershop known for exceptional cuts but with a dated website that didn't reflect the quality of their work. Walk-ins were steady, but online bookings were nearly nonexistent.",
    problem:
      "The existing website was a generic template — slow, not mobile-friendly, and with no clear way to book an appointment. Clients were calling instead of booking online, creating scheduling chaos.",
    strategy:
      "Designed and built a premium, mobile-first website that showcased the shop's atmosphere and craft, with a seamless booking flow integrated directly into the experience.",
    execution: [
      "Professional visual design reflecting the shop's premium positioning",
      "Mobile-first development (80% of their traffic is mobile)",
      "Integrated online booking system with service selection",
      "Gallery showcasing work quality and shop atmosphere",
      "Local SEO optimization for neighborhood search terms",
    ],
    outcome:
      "Online bookings tripled within 6 weeks. Phone calls for scheduling dropped by 60%. The owner now spends zero time managing the calendar manually.",
    takeaway:
      "Your website is your first impression. When it matches the quality of your work, clients trust you before they ever walk through the door.",
    tags: ["Web Design", "Booking System", "Local SEO", "Mobile-First"],
  },
  {
    slug: "sharp-fade-studio",
    title: "From Instagram-Only to a Full Digital Presence",
    client: "Sharp Fade Studio",
    industry: "Barbershops",
    heroStat: "40%",
    heroLabel: "More new client bookings",
    context:
      "A trendy barbershop with a strong Instagram following but no website. All communication happened through DMs, leading to lost bookings and no way to capture search traffic.",
    problem:
      "Relying solely on Instagram meant missing clients searching Google for 'barbershop near me.' There was no professional landing page, no SEO presence, and no automated booking — just DMs and phone tag.",
    strategy:
      "Built a conversion-focused website that served as the hub for all online activity — connecting Instagram content, Google search visibility, and a frictionless booking experience.",
    execution: [
      "Designed a bold, modern site matching the studio's brand aesthetic",
      "Integrated Instagram feed to leverage existing social proof",
      "Built booking flow with service selection and barber preference",
      "Optimized for local SEO keywords and Google Maps visibility",
      "Added review showcase and trust signals throughout",
    ],
    outcome:
      "40% increase in new client bookings within the first month. Google search visibility went from invisible to top 5 for key local terms. DM booking requests dropped as clients self-served.",
    takeaway:
      "Instagram builds awareness. A website converts that awareness into booked appointments. You need both — and the website needs to be as sharp as your brand.",
    tags: ["Web Design", "Local SEO", "Social Integration", "Booking System"],
  },
];

/* ─── About ─── */
export const aboutContent = {
  headline: "I'm Juan Carlos — Growth Partner for Service Businesses",
  story: [
    "I didn't start in marketing. I started by studying what actually makes businesses grow — then I built the systems to make it happen.",
    "After seeing too many service business owners get burned by agencies that deliver pretty designs but zero results, I decided to do things differently.",
    "I build complete growth systems — not isolated deliverables. Every website, every ad campaign, every AI automation I create is engineered for one outcome: more qualified booked calls on your calendar.",
  ],
  philosophy: {
    headline: "I Win When You Win",
    body: "I don't measure success in deliverables. I measure it in revenue generated, calls booked, and markets dominated. If your business isn't growing, I haven't done my job.",
  },
  advantage: {
    headline: "Why Integrated Systems Beat Fragmented Freelancers",
    points: [
      "A web designer builds you a site. A media buyer runs your ads. An SEO person optimizes keywords. A chatbot vendor sets up automation. None of them talk to each other.",
      "I own the entire pipeline — from positioning to conversion to traffic to AI automation to booking. Every piece is built to reinforce the others.",
      "The result: faster launches, lower costs, zero communication gaps, and a system that compounds instead of fragmenting.",
    ],
  },
};

/* ─── Apply Form ─── */
export const formSteps = [
  {
    id: "contact",
    title: "Let's Start With You",
    fields: [
      { name: "name", label: "Your Name", type: "text" as const, required: true },
      { name: "email", label: "Email Address", type: "email" as const, required: true },
    ],
  },
  {
    id: "business",
    title: "Tell Me About Your Business",
    fields: [
      {
        name: "businessType",
        label: "What type of business do you run?",
        type: "select" as const,
        required: true,
        options: [
          "Barbershop",
          "RV Rental",
          "Dental Practice",
          "Real Estate",
          "Other Local Service",
        ],
      },
      {
        name: "monthlyRevenue",
        label: "Approximate monthly revenue",
        type: "select" as const,
        required: true,
        options: [
          "Under $5,000",
          "$5,000 – $15,000",
          "$15,000 – $50,000",
          "$50,000 – $100,000",
          "$100,000+",
        ],
      },
    ],
  },
  {
    id: "marketing",
    title: "Your Current Marketing",
    fields: [
      {
        name: "leadSource",
        label: "Where do most of your clients come from right now?",
        type: "select" as const,
        required: true,
        options: [
          "Word of mouth only",
          "Social media",
          "Google / search",
          "Paid ads",
          "A mix of channels",
        ],
      },
      {
        name: "adBudget",
        label: "Monthly advertising budget",
        type: "select" as const,
        required: true,
        options: [
          "Not spending on ads yet",
          "Under $1,000/month",
          "$1,000 – $3,000/month",
          "$3,000 – $10,000/month",
          "$10,000+/month",
        ],
      },
    ],
  },
  {
    id: "goals",
    title: "Your Growth Goals",
    fields: [
      {
        name: "goal",
        label: "What's your primary goal in the next 90 days?",
        type: "select" as const,
        required: true,
        options: [
          "Get a professional website",
          "Start generating leads online",
          "Scale an existing lead source",
          "Automate booking / follow-up",
          "Dominate my local market",
        ],
      },
      {
        name: "timeline",
        label: "When do you want to get started?",
        type: "select" as const,
        required: true,
        options: [
          "Immediately",
          "Within 2 weeks",
          "Within a month",
          "Just exploring options",
        ],
      },
    ],
  },
];

/* ─── Qualification logic ─── */
export function isQualifiedLead(data: Record<string, string>): boolean {
  const disqualifiers = [
    data.monthlyRevenue === "Under $5,000",
    data.timeline === "Just exploring options",
  ];
  return !disqualifiers.some(Boolean);
}

/* ─── About: Trust Strip ─── */
export const aboutTrustStrip = [
  { metric: "6+", label: "Client systems delivered" },
  { metric: "4", label: "Niches served" },
  { metric: "3", label: "Active growth systems running" },
];

/* ─── About: Operating Principles ─── */
export const aboutPrinciples = [
  "Revenue first — every deliverable is measured by booked calls and revenue generated.",
  "Full-stack ownership — I own the pipeline from positioning to booking, no handoffs.",
  "Selective partnerships — I take a limited number of clients per quarter to guarantee results.",
];

/* ─── About: Working Model Timeline ─── */
export const aboutTimeline = [
  {
    phase: "Kickoff",
    title: "Strategy & Foundation",
    duration: "Week 1",
    description:
      "Deep-dive into your business, market, and goals. We define positioning, craft your offer, and map the entire growth system.",
  },
  {
    phase: "Build",
    title: "System Build & Launch",
    duration: "Weeks 2–4",
    description:
      "I build your conversion website, set up ad funnels, configure AI automation, and launch everything with tracking in place.",
  },
  {
    phase: "Optimize",
    title: "Optimize & Scale",
    duration: "Ongoing",
    description:
      "Continuous data-driven improvements — lowering cost per lead, improving conversion rates, and scaling what works.",
  },
];

/* ─── Case Study Metadata ─── */
export const caseStudyMeta: Record<string, { industry: string; duration: string; budgetRange: string; primaryChannel: string }> = {
  "rv-rental-google-ads": {
    industry: "RV Rentals",
    duration: "Ongoing (month 1 results shown)",
    budgetRange: "$1,000–$3,000/mo",
    primaryChannel: "Google Ads",
  },
  "elite-cuts-barbershop": {
    industry: "Barbershops",
    duration: "3-week build + ongoing",
    budgetRange: "Project-based",
    primaryChannel: "Web Design + Local SEO",
  },
  "sharp-fade-studio": {
    industry: "Barbershops",
    duration: "2-week build + ongoing",
    budgetRange: "Project-based",
    primaryChannel: "Web Design + Social Integration",
  },
};

/* ─── Services: Comparison Row ─── */
export const servicesComparison = {
  headers: ["", "Foundation", "Growth", "Scale"],
  rows: [
    { label: "Setup Time", values: ["2–3 weeks", "3–4 weeks", "4–6 weeks"] },
    { label: "Channels", values: ["Website + Local SEO", "Website + Ads + SEO + AI", "Multi-channel + AI workflows"] },
    { label: "Reporting", values: ["Launch report", "Monthly", "Monthly + Quarterly roadmap"] },
    { label: "First Milestone", values: ["Site live + indexed", "First qualified leads", "Market dominance plan"] },
  ],
};

/* ─── Services: Fit Guidance ─── */
export const servicesFitGuidance: Record<string, { bestFit: string[]; notFit: string[] }> = {
  Foundation: {
    bestFit: [
      "You have no website or an outdated one",
      "You rely entirely on word of mouth",
      "You need to look professional online fast",
    ],
    notFit: [
      "You already have a high-converting site",
      "You need paid ads management",
    ],
  },
  Growth: {
    bestFit: [
      "You have a decent site but no lead flow",
      "You're ready to invest in ads",
      "You want automated booking and AI",
    ],
    notFit: [
      "You don't have product-market fit yet",
      "Monthly revenue is under $5,000",
    ],
  },
  Scale: {
    bestFit: [
      "You're multi-location or high-revenue",
      "You want to dominate your local market",
      "You need advanced automation and A/B testing",
    ],
    notFit: [
      "You're just getting started online",
      "You want a one-time project, not a partnership",
    ],
  },
};
