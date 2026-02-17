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
export const servicesHero = {
  label: "Services",
  headline: "Turn Unpredictable Leads Into Predictable Growth",
  headlineAccent: "Predictable Growth",
  subheadline:
    "For service businesses ready to get found, fill their calendar, or dominate their market — in as little as 2 weeks.",
  primaryCTA: "Book a 15-min Fit Call",
  secondaryCTA: "See the 3-Step Growth Plan",
  trustItems: [
    "Response within 24h",
    "No long-term lock-in",
    "Transparent milestone delivery",
  ],
};

export const servicesProofBar = {
  stats: [
    { value: "$20K+", label: "Revenue generated for clients" },
    { value: "<24h", label: "Avg. response time" },
    { value: "<30 days", label: "To first qualified leads" },
    { value: "100%", label: "Client retention rate" },
  ],
  logoRowLabel: "Trusted by service businesses across North America",
};

export const serviceTiers = [
  {
    name: "Foundation",
    icon: "foundation" as const,
    tagline: "Get online. Get credible. Get found.",
    bestFor: "Businesses with no website or an outdated one",
    coreOutcome: "A professional website that turns visitors into booked calls — live in 2–3 weeks.",
    deliverables: [
      "Conversion-optimized website (up to 5 pages)",
      "Mobile-first responsive design",
      "Local SEO + Google Business setup",
      "Contact form + booking integration",
      "Speed & performance optimization",
    ],
    extraDeliverables: [
      "Brand-aligned visual design",
      "On-page copywriting guidance",
      "Launch report + next-steps roadmap",
    ],
    timeline: "2–3 weeks",
    firstWin: "Website live + indexed on Google",
    impact: "Your website becomes your hardest-working salesperson.",
    cta: "Start Foundation",
  },
  {
    name: "Growth",
    icon: "growth" as const,
    tagline: "Fill your calendar with qualified leads.",
    bestFor: "Businesses ready to invest in ads and automation",
    coreOutcome: "A complete lead generation engine — ads, AI, and automated booking — live in 3–4 weeks.",
    deliverables: [
      "Everything in Foundation",
      "Google Ads funnel (campaigns + landing pages)",
      "Advanced SEO + GEO (AI search visibility)",
      "AI receptionist for 24/7 lead capture",
      "Automated qualification + booking system",
    ],
    extraDeliverables: [
      "Monthly performance reporting",
      "Conversion tracking setup",
      "Ad creative direction",
    ],
    timeline: "3–4 weeks + ongoing",
    firstWin: "First qualified leads within 30 days",
    impact: "Predictable lead flow. No more feast-or-famine months.",
    cta: "Apply for Growth",
    featured: true,
  },
  {
    name: "Scale",
    icon: "scale" as const,
    tagline: "Dominate your market. Systematize growth.",
    bestFor: "Multi-location or high-revenue businesses",
    coreOutcome: "Multi-channel market dominance with AI automation and strategic partnership.",
    deliverables: [
      "Everything in Growth",
      "Multi-location SEO/GEO strategy",
      "Conversion rate optimization (A/B testing)",
      "Multi-channel ads (Google + Meta)",
      "Custom AI automation workflows",
    ],
    extraDeliverables: [
      "Priority support + strategy calls",
      "Quarterly growth roadmap",
      "Heatmap analysis + UX recommendations",
    ],
    timeline: "4–6 weeks + ongoing",
    firstWin: "Market dominance plan + first multi-channel results",
    impact: "You become the obvious choice. Leads come in systematically.",
    cta: "Book Scale Call",
  },
];

export const servicesDecisionAssist = {
  headline: "How to Choose Your Plan",
  options: [
    { stage: "Just getting started online?", plan: "Foundation", description: "Get a professional, conversion-ready website fast." },
    { stage: "Ready to generate leads consistently?", plan: "Growth", description: "Add ads, AI, and automated booking to your site." },
    { stage: "Multi-location or scaling aggressively?", plan: "Scale", description: "Dominate your market with full-stack growth." },
  ],
};

export const servicesFAQ = [
  {
    question: "What does this cost?",
    answer: "Engagements start at $5,000/month for the complete system — setup, management, and optimization included. Most clients see ROI within the first month. Specifics are discussed on the fit call.",
  },
  {
    question: "How fast will I see results?",
    answer: "Foundation clients go live in 2–3 weeks. Growth clients typically see first qualified leads within 30 days. One client generated $20,000 in confirmed bookings in month one.",
  },
  {
    question: "Is there a long-term contract?",
    answer: "No. All engagements are month-to-month after the initial build phase. You stay because it works, not because you're locked in.",
  },
  {
    question: "Who is this NOT for?",
    answer: "Businesses under $5,000/month in revenue, companies looking for a quick logo or one-off landing page, or anyone not ready to commit to a growth system. This is a partnership, not a transaction.",
  },
  {
    question: "How do you communicate and report?",
    answer: "You get a dedicated Slack channel (or email if preferred), milestone updates at every phase, and monthly performance reports with Growth and Scale plans. No black boxes.",
  },
  {
    question: "Is payment secure?",
    answer: "All payments are processed through Stripe with bank-level encryption. We accept Visa, Mastercard, Amex, and bank transfer. CAD and USD accepted.",
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
    { label: "Best For", values: ["No website or outdated one", "Ready for ads + automation", "Multi-location / high-revenue"] },
    { label: "Setup Time", values: ["2–3 weeks", "3–4 weeks", "4–6 weeks"] },
    { label: "Typical First Win", values: ["Site live + indexed", "First qualified leads <30 days", "Multi-channel dominance plan"] },
    { label: "Acquisition Channels", values: ["Website + Local SEO", "Website + Ads + SEO + AI", "Multi-channel + AI workflows"] },
    { label: "AI Layer", values: ["—", "AI receptionist + chatbot", "Custom AI automation"] },
    { label: "Booking Flow", values: ["Contact form", "Automated qualification + booking", "Advanced qualification + routing"] },
    { label: "Reporting", values: ["Launch report", "Monthly performance", "Monthly + Quarterly roadmap"] },
    { label: "Support Level", values: ["Email", "Email + monthly check-in", "Priority + strategy calls"] },
  ],
  helperText: "Not sure which tier fits? Start with Foundation if you need a professional presence, Growth if you're ready to generate leads, or Scale if you want to own your market.",
};

/* ─── Services: Guarantees (unified risk reversal) ─── */
export const servicesGuarantees = [
  {
    icon: "clock",
    title: "24h Response Guarantee",
    description: "Every inquiry answered within one business day. No ghosting.",
  },
  {
    icon: "milestone",
    title: "Milestone Delivery",
    description: "Clear checkpoints at every phase. You always know where things stand.",
  },
  {
    icon: "shield",
    title: "No-Fit Honesty",
    description: "If we're not the right partner, we'll tell you upfront — not after you've paid.",
  },
  {
    icon: "unlock",
    title: "No Lock-In",
    description: "You own everything we build. Month-to-month after the initial build.",
  },
];

/* ─── Services: Payment Methods ─── */
export const servicesPaymentMethods = [
  { name: "Visa", icon: "visa" },
  { name: "Mastercard", icon: "mastercard" },
  { name: "Amex", icon: "amex" },
  { name: "Bank Transfer", icon: "bank" },
];
export const servicesPaymentLine = "Secure payment processing by Stripe · CAD/USD accepted";

/* ─── Services: Final CTA ─── */
export const servicesFinalCTA = {
  headline: "Your Pipeline Won't Build Itself",
  subheadline:
    "Book a 15-minute fit call. We'll review your business, identify the highest-leverage growth move, and determine if we're the right partner.",
  primary: "Book Your Fit Call",
  secondary: "See Case Studies",
  trustBadges: [
    { icon: "⚡", text: "Response within 24 hours" },
    { icon: "🔒", text: "100% confidential" },
    { icon: "📋", text: "Limited spots per quarter" },
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
