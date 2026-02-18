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
  headline: "Growth Systems That Fill Your Calendar",
  subheadline:
    "Conversion websites, paid funnels, and AI automation — engineered as one system to generate qualified booked calls for service businesses.",
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

/* ─── Section B: Client Reality (Pain Bullets) ─── */
export const clientReality = {
  label: "The Reality",
  headline: "Most Service Businesses Don\u2019t Have a Growth System",
  subheadline: "They have a collection of disconnected tactics that leak money every month.",
  pains: [
    {
      icon: "ghost",
      title: "Invisible Online",
      detail: "Clients search. You don\u2019t appear. Competitors take every call you should have owned.",
    },
    {
      icon: "leak",
      title: "Visitors Don\u2019t Convert",
      detail: "Your site gets traffic but no one books. No trust signals, no clear next step, no follow-up.",
    },
    {
      icon: "scatter",
      title: "Scattered Vendors",
      detail: "A web designer here, an ad buyer there. Nobody owns the outcome. You coordinate everything.",
    },
    {
      icon: "clock",
      title: "Revenue Left on the Table",
      detail: "Every week without a system is revenue you\u2019ll never recover. The compounding cost is real.",
    },
  ],
};

/* ─── Section C: Strategic Gap (Truth Blocks) ─── */
export const strategicGap = {
  label: "The Insight",
  headline: "The Problem Isn\u2019t Traffic. It\u2019s Architecture.",
  truths: [
    {
      heading: "More ads won\u2019t fix a broken funnel.",
      body: "If your website doesn\u2019t convert, paid traffic just burns faster. The issue is never volume alone \u2014 it\u2019s the system behind it.",
    },
    {
      heading: "A pretty website isn\u2019t a growth asset.",
      body: "Design without strategy is decoration. Every page, every element must drive one outcome: a qualified booked call.",
    },
    {
      heading: "Disconnected tools create disconnected results.",
      body: "When your site, ads, SEO, and follow-up don\u2019t talk to each other, leads slip through the cracks. Architecture beats tactics.",
    },
  ],
};

/* ─── Section D: The Growth Architecture (Framework Cards) ─── */
export const growthArchitecture = {
  label: "The System",
  headline: "The Growth Architecture\u2122",
  subheadline: "Four integrated layers that turn online presence into predictable revenue.",
  pillars: [
    {
      id: "authority",
      title: "Authority Layer",
      subtitle: "Be found. Be trusted.",
      points: [
        "Conversion-engineered website",
        "SEO & AI search (GEO) optimization",
        "Professional positioning & copy",
      ],
      accent: "violet",
    },
    {
      id: "conversion",
      title: "Conversion Layer",
      subtitle: "Turn visitors into booked calls.",
      points: [
        "Trust signals & social proof",
        "Frictionless booking flow",
        "AI qualification chatbot",
      ],
      accent: "cyan",
    },
    {
      id: "acquisition",
      title: "Acquisition Layer",
      subtitle: "Drive qualified demand.",
      points: [
        "Google Ads with intent targeting",
        "Retargeting & follow-up sequences",
        "Landing pages per service/location",
      ],
      accent: "violet",
    },
    {
      id: "optimization",
      title: "Optimization Layer",
      subtitle: "Compound results monthly.",
      points: [
        "Conversion rate optimization",
        "Cost per lead reduction",
        "Monthly reporting & scaling",
      ],
      accent: "cyan",
    },
  ],
};

/* ─── Section E: Featured Case Study ─── */
export const featuredCase = {
  label: "Proof",
  headline: "Real Results. Real Revenue.",
  slug: "rv-rental-texas",
  client: "RV Rental Company \u2014 Texas",
  result: "$20,000",
  resultLabel: "in confirmed bookings",
  timeframe: "First 30 days",
  method: "Full Google Ads funnel + conversion landing pages",
  supporting: [
    { metric: "3x", label: "Online bookings increase" },
    { metric: "<30", label: "Days to first qualified leads" },
    { metric: "40%", label: "New client booking growth" },
  ],
  cta: "View All Case Studies",
};

/* ─── Section F: How We Work (Process) ─── */
export const howWeWork = {
  label: "The Process",
  headline: "Three Phases. One Outcome.",
  subheadline: "Every engagement follows the same proven structure.",
  steps: [
    {
      number: "01",
      title: "Diagnose",
      description: "We audit your current presence, identify the highest-leverage bottleneck, and map the full growth system before writing a single line of code.",
      duration: "Week 1",
    },
    {
      number: "02",
      title: "Engineer",
      description: "We build the complete system \u2014 website, ads, AI automation, booking flow \u2014 as one integrated architecture. No handoffs. No fragmentation.",
      duration: "Weeks 2\u20134",
    },
    {
      number: "03",
      title: "Scale",
      description: "Continuous data-driven optimization: lower cost per lead, higher conversion rates, and compounding returns every month.",
      duration: "Ongoing",
    },
  ],
};

/* ─── Section G: Differentiation ─── */
export const differentiation = {
  label: "The Difference",
  headline: "This Isn\u2019t Freelance Work",
  subheadline: "It\u2019s a growth partnership with one owner, one system, and one outcome metric.",
  comparisons: [
    { dimension: "Ownership", them: "5+ vendors \u2014 you coordinate everything", us: "One partner owns the entire pipeline" },
    { dimension: "Speed", them: "8\u201312 weeks, stalled handoffs", us: "2\u20134 weeks, unified execution" },
    { dimension: "Accountability", them: "Everyone points elsewhere", us: "One owner, one outcome metric" },
    { dimension: "Lead Quality", them: "No feedback loop between channels", us: "Built-in qualification and scoring" },
    { dimension: "Reporting", them: "Scattered dashboards, no attribution", us: "Single report, full-funnel visibility" },
    { dimension: "Cost of Delay", them: "Months lost to misalignment", us: "Compounding returns from week one" },
  ],
};

/* ─── Section H: Qualification + Final CTA ─── */
export const qualification = {
  forYouIf: [
    "You run a service business that depends on booked appointments",
    "You\u2019re generating $5K+/month and ready to invest in growth",
    "You want one integrated system \u2014 not five disconnected freelancers",
    "You\u2019re serious about dominating your local market",
  ],
  notForYouIf: [
    "You\u2019re looking for a quick logo or one-off landing page",
    "Your business is under $5K/month revenue",
    "You want to \u201Ctry a few ads\u201D without committing to a system",
  ],
};
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
  label: "Growth Systems for Service Businesses",
  headline: "Turn inconsistent leads into a predictable booking system.",
  subheadline:
    "Positioning + conversion architecture + acquisition — engineered as a system.",
  primaryCTA: "Apply (2 min)",
  secondaryCTA: "View Case Studies",
  trustItems: [
    "Response within 24h",
    "Milestone delivery",
    "No lock-in",
  ],
};

export const servicesProofBar = {
  stats: [
    { value: "$20K+", label: "Revenue generated for clients", verifiable: true },
    { value: "6+", label: "Businesses worked with", verifiable: true },
    { value: "4", label: "Industries served", verifiable: true },
  ],
  logoRowLabel: "As seen working with service businesses across North America",
  socialProof: ["Premier RV Rentals", "Elite Cuts Barbershop", "Sharp Fade Studio"],
};

/* ─── Services: Quick Qualification ─── */
export const servicesQualification = {
  bestFor: [
    "Service business owner aiming for predictable acquisition",
    "Tired of referral dependency and unpredictable revenue",
    "Wants premium execution with measurable infrastructure",
    "Ready to invest in a system, not a one-off project",
  ],
  notFor: [
    "Lowest-price shoppers looking for the cheapest option",
    "\u201CJust a website\u201D requests with no growth intent",
    "Anyone unwilling to implement or collaborate",
    "Businesses under $5K/month in revenue",
  ],
};

export const serviceTiers = [
  {
    name: "Foundation",
    icon: "foundation" as const,
    tagline: "Get online. Get credible. Get found.",
    outcome: "Launch a conversion-ready digital presence that earns trust and captures leads.",
    bestFor: "New or rebranding service businesses",
    deliverables: [
      "Premium conversion website (up to 5 pages)",
      "Conversion copywriting & positioning",
      "Mobile-first, fast, secure build",
      "GA4 & event tracking baseline",
      "Launch checklist & QA",
    ],
    timeline: "2\u20133 weeks",
    firstWin: "Go live with a high-converting, credible presence.",
    planCTA: "Apply (2 min)",
  },
  {
    name: "Growth",
    icon: "growth" as const,
    tagline: "Fill your calendar with qualified leads.",
    outcome: "Engineer a predictable lead generation system with ads, AI, and automated booking.",
    bestFor: "Owners ready to scale beyond referrals",
    deliverables: [
      "Everything in Foundation",
      "Google Ads or Meta Ads funnel",
      "Funnel optimization & landing pages",
      "AI lead qualification chatbot",
      "Monthly performance reporting",
    ],
    timeline: "30\u201345 days",
    firstWin: "First qualified leads in your pipeline.",
    planCTA: "Apply (2 min)",
    featured: true,
  },
  {
    name: "Scale",
    icon: "scale" as const,
    tagline: "Dominate your market. Systematize growth.",
    outcome: "Multiply acquisition channels and automate operations for compounding returns.",
    bestFor: "Ambitious teams seeking compounding growth",
    deliverables: [
      "Everything in Growth",
      "Multi-channel acquisition strategy",
      "Advanced automation workflows",
      "Custom AI integrations",
      "Ongoing CRO & strategic support",
    ],
    timeline: "45\u201360 days",
    firstWin: "Automated, multi-channel lead flow.",
    planCTA: "Apply (2 min)",
  },
];

/* ─── Services: Included in Every Plan ─── */
export const servicesIncluded = [
  { title: "Tracking Baseline", description: "GA4 & event tracking from day one." },
  { title: "Performance Baseline", description: "Speed, Core Web Vitals, mobile-optimized." },
  { title: "Launch Checklist & QA", description: "Comprehensive testing before every launch." },
  { title: "Ownership & Handoff", description: "You own everything we build. Full access." },
  { title: "Reporting Cadence", description: "Clear performance reports, no vanity metrics." },
  { title: "Communication Standards", description: "Dedicated channel, 24h response time." },
];

/* ─── Services: Recommender Quiz ─── */
export const servicesQuiz = {
  headline: "Not Sure Which Plan Fits?",
  subheadline: "Answer 2 quick questions. We\u2019ll recommend the right tier.",
  questions: [
    {
      id: "leads",
      question: "Where do most leads come from today?",
      options: [
        { label: "Referrals / word of mouth", value: "referrals", rec: "Foundation" as const },
        { label: "Some ads, some organic", value: "mixed", rec: "Growth" as const },
        { label: "Paid ads or multiple channels", value: "ads", rec: "Scale" as const },
      ],
    },
    {
      id: "bottleneck",
      question: "What\u2019s the biggest bottleneck?",
      options: [
        { label: "No professional presence online", value: "no-presence", rec: "Foundation" as const },
        { label: "Not enough qualified leads", value: "not-enough", rec: "Growth" as const },
        { label: "No system to scale what works", value: "no-system", rec: "Scale" as const },
      ],
    },
  ],
};

/* ─── Services: Proof Block ─── */
export const servicesProof = {
  label: "Featured Transformation",
  client: "RV Rental Company \u2014 Texas",
  situation: "Family-owned RV rental with 8 vehicles. Zero online acquisition. Revenue was entirely referral-based and unpredictable.",
  diagnosis: "The market was active. The business simply didn\u2019t exist online. No ads, no funnel, no follow-up.",
  build: "Full Google Ads funnel: keyword research, conversion-optimized landing pages, automated booking qualification flow.",
  outcome: "$20,000 in confirmed bookings within the first 30 days.",
  slug: "rv-rental-texas",
  caption: "GA4 / Ads metrics (redacted for client privacy).",
};

/* ─── Services: Process Steps ─── */
export const servicesProcess = {
  headline: "A simple process.",
  steps: [
    {
      number: "01",
      title: "Diagnose",
      description: "Audit + bottleneck map + execution plan.",
    },
    {
      number: "02",
      title: "Engineer",
      description: "Build the system + tracking + launch.",
    },
    {
      number: "03",
      title: "Scale",
      description: "Optimize, iterate, expand channels.",
    },
  ],
};

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
    question: "How fast do we see a first win?",
    answer: "Foundation clients go live in 2\u20133 weeks. Growth clients typically see first qualified leads within 30 days. Timeline depends on your market and readiness.",
  },
  {
    question: "What do you need from me?",
    answer: "Clear goals, timely feedback, and access to existing assets (if any). I handle the heavy lifting \u2014 you stay focused on running your business.",
  },
  {
    question: "Any contracts or lock-in?",
    answer: "No long-term contracts. Engagements are milestone-based and transparent. You stay because it works, not because you\u2019re locked in.",
  },
  {
    question: "What if it\u2019s not a fit?",
    answer: "If we\u2019re not a fit, you\u2019ll get honest feedback and recommendations \u2014 no hard sell. I\u2019d rather pass than deliver subpar work.",
  },
  {
    question: "How do you measure success?",
    answer: "Pipeline metrics, conversion rates, and ROI \u2014 not vanity stats. Every engagement includes tracking from day one.",
  },
  {
    question: "What happens after I apply?",
    answer: "You\u2019ll receive a short qualification review within 24 hours. If we\u2019re aligned, I\u2019ll send you a link to book a strategy call.",
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
  headline: "I\u2019m Juan Carlos \u2014 Growth Partner for Service Businesses",
  subhead: "I build systems that turn attention into booked calls.",
  mechanism: [
    "Positioning → funnel path → traffic → automation → booking.",
    "No handoffs. No disconnected freelancers. One operator owns the outcome.",
  ],
  mechanismBullets: [
    "Positioning + offer clarity (so the message converts)",
    "Conversion path + tracking (so you can see ROI)",
    "Traffic + automation (so it compounds)",
  ],
  story: [
    "I didn\u2019t start in marketing. I started by studying what actually makes service businesses grow \u2014 then I built systems to make it happen.",
    "After watching too many owners get burned by pretty deliverables with zero outcomes, I decided to operate differently.",
    "I build complete growth systems \u2014 not isolated assets. Every piece is engineered for one outcome: more qualified booked calls on your calendar.",
  ],
  philosophy: {
    headline: "I Win When You Win",
    body: "I don\u2019t measure success in deliverables. I measure it in revenue generated, calls booked, and markets dominated. If your business isn\u2019t growing, the system isn\u2019t done.",
  },
  advantage: {
    headline: "Why Integrated Systems Beat Fragmented Freelancers",
    points: [
      {
        text: "A web designer builds your site. A media buyer runs your ads. An SEO person optimizes keywords. A chatbot vendor sets automation. None of them talk to each other.",
        accent: false,
      },
      {
        text: "I own the entire pipeline \u2014 from positioning to conversion to traffic to AI automation to booking. Every piece reinforces the others.",
        accent: true,
      },
      {
        text: "The result: faster launches, lower costs, fewer communication gaps, and a system that compounds instead of fragmenting.",
        accent: false,
      },
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
  { metric: "6+", label: "Systems shipped" },
  { metric: "2–4 wks", label: "Typical launch timeline" },
  { metric: "4", label: "Niches served" },
  { metric: "3", label: "Active systems running" },
];

/* ─── About: Operating Principles ─── */
export const aboutPrinciples = [
  {
    title: "Revenue first",
    description: "Measured in booked calls + revenue — not vanity metrics.",
  },
  {
    title: "Full-stack ownership",
    description: "I own the path end-to-end: positioning → booking. No handoffs.",
  },
  {
    title: "Selective partnerships",
    description: "Max 3 active clients per quarter to protect focus and execution quality.",
  },
];

/* ─── About: Working Model Timeline ─── */
export const aboutTimeline = [
  {
    phase: "Kickoff",
    title: "Strategy & Foundation",
    duration: "Week 1",
    description:
      "Deep-dive into your market, offer, and constraints. We define positioning and map the growth system.",
    deliverables: "Offer map • funnel architecture • tracking plan",
  },
  {
    phase: "Build",
    title: "System Build & Launch",
    duration: "Weeks 2–4",
    description:
      "I build the conversion website, funnel path, tracking, and automation — then launch with clarity.",
    deliverables: "Website + funnel • automation • analytics live",
  },
  {
    phase: "Optimize",
    title: "Optimize & Scale",
    duration: "Ongoing",
    description:
      "We improve conversion, lower costs, and scale what works based on real performance data.",
    deliverables: "Weekly optimization loop • reporting • compounding improvements",
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
    { label: "Best for", values: ["New / rebranding", "Scaling owners", "Ambitious teams"] },
    { label: "Timeline", values: ["2\u20133 weeks", "30\u201345 days", "45\u201360 days"] },
    { label: "Core deliverables", values: ["Site, funnel, copy", "+ Ads, AI, reporting", "+ Multi-channel, automation"] },
    { label: "Acquisition layer", values: ["Organic / SEO", "Paid + organic", "Multi-channel"] },
    { label: "Tracking", values: ["GA4 / events", "GA4 + reporting", "Advanced + custom"] },
    { label: "Automation / AI", values: ["\u2014", "Lead qualification", "Custom integrations"] },
    { label: "Support cadence", values: ["Launch support", "Monthly", "Ongoing + strategy"] },
    { label: "Outcome focus", values: ["Credibility", "Pipeline", "Scale & leverage"] },
  ],
};

/* ─── Services: Standards (Risk Reversal) ─── */
export const servicesGuarantees = [
  {
    icon: "milestone",
    title: "Milestone Delivery",
    description: "Clear checkpoints at every phase. You always know where things stand.",
  },
  {
    icon: "unlock",
    title: "No Lock-In",
    description: "You own everything we build. Month-to-month after the initial build.",
  },
  {
    icon: "shield",
    title: "Honest Fit Assessment",
    description: "If we\u2019re not the right partner, we\u2019ll tell you upfront \u2014 not after you\u2019ve paid.",
  },
  {
    icon: "clock",
    title: "Evidence on Request",
    description: "Redacted case data available for serious prospects. Results are verifiable.",
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
  headline: "Ready to build a real acquisition system?",
  subheadline:
    "Short application. If we\u2019re a fit, you\u2019ll receive a call link within 24 hours.",
  primary: "Apply (2 min)",
  secondary: "View Case Studies",
  trustBadges: [
    { icon: "\u26A1", text: "Response within 24 hours" },
    { icon: "\uD83D\uDD12", text: "100% confidential" },
    { icon: "\uD83D\uDCCB", text: "Limited spots per quarter" },
  ],
};

/* ─── Services: Micro Quiz ─── */
export const servicesMicroQuiz = {
  headline: "Not Sure Which Plan Fits?",
  subheadline: "Answer 2 quick questions to get a recommendation.",
  questions: [
    {
      id: "leads",
      question: "Where do most leads come from today?",
      options: [
        { label: "Referrals / word of mouth", value: "referrals", points: { Foundation: 3, Growth: 1, Scale: 0 } },
        { label: "Some ads, some organic", value: "mixed", points: { Foundation: 0, Growth: 3, Scale: 1 } },
        { label: "Paid ads or multiple channels", value: "ads", points: { Foundation: 0, Growth: 1, Scale: 3 } },
      ],
    },
    {
      id: "bottleneck",
      question: "What\u2019s the biggest bottleneck?",
      options: [
        { label: "No professional presence online", value: "no-presence", points: { Foundation: 3, Growth: 1, Scale: 0 } },
        { label: "Not enough qualified leads", value: "not-enough", points: { Foundation: 0, Growth: 3, Scale: 1 } },
        { label: "No system to scale what works", value: "no-system", points: { Foundation: 0, Growth: 1, Scale: 3 } },
      ],
    },
  ],
  results: {
    Foundation: {
      title: "We recommend: Foundation",
      reason: "You need a professional, conversion-ready presence before anything else.",
      cta: "Apply (2 min)",
    },
    Growth: {
      title: "We recommend: Growth",
      reason: "You\u2019re ready for ads, AI, and automated lead generation.",
      cta: "Apply (2 min)",
    },
    Scale: {
      title: "We recommend: Scale",
      reason: "You need multi-channel dominance and advanced automation.",
      cta: "Apply (2 min)",
    },
  },
};

/* ─── Services: Sticky Mobile CTA ─── */
export const stickyMobileCTA = {
  label: "Ready to grow?",
  cta: "Apply (2 min)",
  href: "/apply",
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
