/* ─── Centralized Content & Copy ─── */

export const siteConfig = {
  name: "Client Growth",
  title: "Predictable Qualified Calls for Service Businesses",
  url: "https://clientgrowth.ca",
  description:
    "Client Growth builds complete acquisition systems for service businesses. Conversion websites, Google Ads, and AI automation that generate predictable booked calls.",
  ogImage: "/og.png",
  twitterHandle: "@clientgrowthca",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Results", href: "/results" },
  { label: "About", href: "/about" },
] as const;

export const ctaCopy = {
  primary: "Apply for Growth Partnership",
  secondary: "See Results",
  tertiary: "Apply for Growth Partnership",
  href: "/apply",
};

/* ─── Hero ─── */
export const hero = {
  overline: "FOR SERVICE BUSINESSES",
  headline: "Your Business Deserves\nto Be the First Name\nThey See.",
  subheadline:
    "Right now, buyers in your city are searching your exact service. Most of them will call your competitor. Not because their work is better. Because their infrastructure exists and yours does not. I build the system that changes that.",
  cta: "Apply for Growth Partnership →",
  ctaSecondary: "See Real Results",
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
  body: "Most service businesses don't have a lead generation problem. They have a trust and conversion problem. Your website looks outdated. Your ads lead nowhere. And you're invisible to the AI tools your future clients are already using.",
};

/* ─── Growth Architecture System ─── */
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
      "I build the conversion website, funnel path, tracking, and automation. Then I launch with full clarity on what success looks like.",
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
  label: "REAL RESULTS",
  featured: {
  stat: "$41,085",
    context: "generated in month one",
    client: "RV Rental Company",
    method: "Google Ads Funnel",
  },
  highlights: [
    { metric: "$900", label: "Total ad spend" },
    { metric: "46x", label: "Return on ad spend" },
    { metric: "30", label: "Days to results" },
  ],
};

/* ─── Section B: Client Reality (Pain Bullets) ─── */
export const clientReality = {
  label: "THE REALITY",
  headline: "Your Work Is Good.\nYour Pipeline Shouldn't Be This Uncertain.",
  pains: [
    {
      icon: "ghost",
      title: "People in Your City Are Searching. You're Easy to Miss.",
      detail: "If you don't show up where they look — Google, Maps, AI search — that call goes somewhere else. Before you knew it existed."
    },
    {
      icon: "leak",
      title: "Your Website Looks Fine. It Doesn't Convert.",
      detail: "A site that doesn't answer 'why you, why now' immediately is not an asset. It is leakage. Visitors arrive, feel nothing, and call whoever was clearer."
    },
    {
      icon: "clock",
      title: "You're Doing Marketing on Top of Everything Else.",
      detail: "That makes it inconsistent, reactive, and easy to abandon when work gets busy. A system that depends on your available hours cannot compound."
    },
    {
      icon: "scatter",
      title: "Referrals Keep You Alive. They Don't Build Predictability.",
      detail: "Good months. Quiet months. No control over what comes next. If your pipeline depends on who someone happens to mention you to, you're waiting — not growing."
    }
  ],
};

/* ─── Section C: Strategic Gap (Truth Blocks) ─── */
export const strategicGap = {
  label: "THE INSIGHT",
  headline: "The Businesses Winning Locally\nAren't Working Harder. They're Set Up Better.",
  truths: [
    {
      heading: "Throwing money at ads won't fix a broken funnel.",
      body: "I've sat across from business owners who spent thousands on Google Ads and had nothing to show for it. Not because ads don't work, but because the page they sent traffic to didn't convert. The ad was fine. The system behind it was broken."
    },
    {
      heading: "A website that doesn't convert is just a business card.",
      body: "Design without intent is decoration. Every single element on every page needs a job: move this person one step closer to picking up the phone. If it doesn't do that, it's costing you."
    },
    {
      heading: "When your tools don't connect, leads disappear.",
      body: "Your site, your ads, your follow-up. If they're not working as one system, you're losing people in the gaps. The businesses dominating your market aren't smarter than you. They're just more connected."
    }
  ],
};

/* ─── Section D: The Growth Architecture (Framework Cards) ─── */
export const growthArchitecture = {
  label: "THE SYSTEM",
  headline: "The Growth Architecture™",
  subheadline: "Four integrated layers. Each one makes the others stronger. Built as one connected system in 2 to 4 weeks. Most clients see their first booked call within 11 days of going live.",
  pillars: [
    {
      id: "authority",
      title: "Show Up First. Own the Search.",
      subtitle: "I position you on Google and AI tools like ChatGPT at the exact moment buyers in your city are ready to call, before your competitors even know this exists, leaving you the full field to dominate.",
      points: [
        "A website that makes you the obvious choice",
        "SEO and GEO (AI search) so you rank above competitors",
        "Copy written to dominate your local market"
      ],
      accent: "violet"
    },
    {
      id: "conversion",
      title: "Turn More Visitors Into Booked Calls.",
      subtitle: "Most websites lose 95% of their visitors. I build a booking system that turns people already interested into calls already booked, without you even needing to lift a finger.",
      points: [
        "Trust signals that kill hesitation instantly",
        "A booking flow that fills your calendar",
        "AI that qualifies leads before they reach you"
      ],
      accent: "cyan"
    },
    {
      id: "acquisition",
      title: "Get in Front of People Ready to Buy Right Now.",
      subtitle: "I run Google Ads targeting buyers with purchase intent, not browsers. Every campaign built around one goal: more calls from people ready to hire you today.",
      points: [
        "Ads that target buyers, not window shoppers",
        "Dedicated pages per service and city you want to own"
      ],
      accent: "violet"
    },
    {
      id: "optimization",
      title: "Your Results Get Better Every Single Week.",
      subtitle: "I look at the numbers every week and cut what is not working. Lower cost per lead. More calls. The system compounds so you pull further ahead of your competition over time.",
      points: [
        "Conversion improvements every single month",
        "Your cost per lead goes down, not up",
        "You see exactly what is working and what changed"
      ],
      accent: "cyan"
    }
  ],
};

/* ─── Section E: Featured Case Study ─── */
export const featuredCase = {
  label: "PROOF",
  headline: "$41,085 from $900 in ad spend. Page 1 in under 60 days.",
  slug: "rv-rental-texas",
  client: "RV RENTAL COMPANY, TEXAS",
  result: "$41,085",
  resultLabel: "in revenue. First 30 days.",
  timeframe: "$900 IN AD SPEND · GOOGLE ADS FUNNEL · 30 DAYS",
  supporting: [
    { metric: "$900", label: "AD SPEND" },
    { metric: "46x", label: "RETURN ON AD SPEND" },
    { metric: "30", label: "DAYS TO RESULTS" }
  ],
  callout: "Every $1 in ad spend returned $46 in revenue.",
  cta: "View All Results →",
};

/* ─── Section F: How We Work (Process) ─── */
export const howWeWork = {
  label: "THE PROCESS",
  headline: "Three Phases. One Outcome.",
  steps: [
    {
      number: "01",
      title: "Market Gap Report",
      description: "Before I write a line of code, you know exactly where your competitors are exposed.",
      duration: "72 hours"
    },
    {
      number: "02",
      title: "System Launch",
      description: "Site, ads, tracking, automation. All live. All connected.",
      duration: "11 days median"
    },
    {
      number: "03",
      title: "Compound Loop",
      description: "Every week I cut waste and double what converts. Cost per call drops monthly.",
      duration: "Ongoing"
    }
  ],
};

/* ─── Marble System Animation (3-step visualization) ─── */
export const marbleSystemSection = {
  label: "THE SYSTEM",
  headline: "Market Gap Report. System Launch. Compound Loop.",
  subheadline: "Three steps. Live in 11 days.",
  steps: [
    {
      title: "Market Gap Report",
      copy: "Before I write a line of code, you know exactly where your competitors are exposed.",
      timeline: "72 hours",
      deliverables: ["Market Gap Report", "Funnel Audit", "90-Day Roadmap"],
    },
    {
      title: "System Launch",
      copy: "Site, ads, tracking, automation. All live. All connected.",
      timeline: "11 days median",
      deliverables: ["Live Website", "Ads Campaign", "Booking System", "Tracking Dashboard"],
    },
    {
      title: "Compound Loop",
      copy: "Every week I cut waste and double what converts. Cost per call drops monthly.",
      timeline: "Ongoing",
      deliverables: ["Weekly Performance Report", "Monthly Review Call", "Conversion Improvements"],
    },
  ],
};

/* ─── Section G: Differentiation ─── */
export const differentiation = {
  label: "THE DIFFERENCE",
  headline: "Most Agencies Optimize for Hours Billed. I Optimize for Calls Booked.",
  subheadline: "An agency delivers the project and invoices. I measure success by one number: qualified calls on your calendar. If that number does not grow, I have not done my job.",
  comparisons: [
    { dimension: "Ownership", them: "5+ vendors, no single owner", us: "One partner owns the full pipeline" },
    { dimension: "Speed", them: "8 to 12 weeks, constant delays", us: "2 to 4 weeks, unified execution" },
    { dimension: "After Launch", them: "Project done. They're gone.", us: "Monthly optimization, ongoing growth" },
    { dimension: "Metric", them: "Monthly PDF nobody reads", us: "Weekly loop tied to booked calls" },
    { dimension: "Asset Ownership", them: "You license. They own the stack.", us: "You own site, data, infrastructure" },
    { dimension: "Cost Transparency", them: "Impressions and clicks", us: "Cost per qualified call, tracked live" }
  ],
};

/* ─── Services Showcase (Figma-style section) ─── */
export type ServiceBgKey = "website" | "seo" | "geo" | "copy" | "googleAds";

export type HeroMediaType = "transparent-logo" | "framed-image";

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  accentColor: string;
  hoverAccentColor: string;
  imagePosition?: string;
  imageScale?: number;
  bgKey: ServiceBgKey;
  mediaType?: HeroMediaType;
  useGlow?: boolean;
}

export const servicesShowcaseContent = {
  brandTitle: "Conversion-Built Marketing Systems",
  brandParagraph:
    "Website, SEO, GEO, copywriting, and Google Ads. Engineered to turn clicks into booked calls. One integrated system, not five disconnected freelancers.",
  services: [
    {
      id: "website",
      title: "Conversion Website System",
      subtitle: "Trust + action in one experience",
      description:
        "A premium site engineered to turn clicks into booked calls. Fast, clean, persuasive.",
      imageUrl:
        "https://static.wixstatic.com/media/62f926_e3cee4593847417db3870fd5cfa77faa~mv2.png",
      imageAlt: "Conversion website showcase",
      accentColor: "#F97316",
      hoverAccentColor: "#F97316",
      imagePosition: "center",
      imageScale: 2.0,
      bgKey: "website" as const,
    },
    {
      id: "seo",
      title: "SEO That Compounds",
      subtitle: "Rank above competitors over time",
      description:
        "Technical + content SEO that compounds. Get found when buyers are searching.",
      imageUrl:
        "https://static.wixstatic.com/media/62f926_fd8b1bd527a4497695e774ae1df51cfc~mv2.png",
      imageAlt: "SEO presence showcase",
      accentColor: "#22C55E",
      hoverAccentColor: "#22C55E",
      imagePosition: "center",
      imageScale: 2.0,
      bgKey: "seo" as const,
    },
    {
      id: "geo",
      title: "AI Search Presence",
      subtitle: "Show up inside AI answers",
      description:
        "Get recommended inside AI answers with structured authority signals.",
      imageUrl:
        "https://static.wixstatic.com/media/62f926_cf52e554f5cb495faf0bc5b909f688b3~mv2.png",
      imageAlt: "GEO AI search presence showcase",
      accentColor: "#A855F7",
      hoverAccentColor: "#A855F7",
      imagePosition: "center",
      imageScale: 2.0,
      bgKey: "geo" as const,
      mediaType: "transparent-logo" as const,
      useGlow: true,
    },
    {
      id: "copy",
      title: "Copy Engineered to Convert",
      subtitle: "Words engineered to sell",
      description:
        "Messaging, offers, and landing-page copy built to convert cold traffic into revenue.",
      imageUrl:
          "https://static.wixstatic.com/media/62f926_7bd90c38d7be4dd9ae467b545839def3~mv2.png",
      imageAlt: "Copywriting showcase",
      accentColor: "#FACC15",
      hoverAccentColor: "#FACC15",
      imagePosition: "72% center",
      imageScale: 2.0,
      bgKey: "copy" as const,
    },
    {
      id: "googleAds",
      title: "Google Ads",
      subtitle: "Paid traffic that converts",
      description:
        "Intent-driven campaigns engineered to turn search demand into qualified booked calls.",
      imageUrl:
        "https://static.wixstatic.com/media/62f926_c3708c1116804f7e932491f79e53867a~mv2.png",
      imageAlt: "Google Ads campaigns showcase",
      accentColor: "#3B82F6",
      hoverAccentColor: "#3B82F6",
      imagePosition: "center",
      imageScale: 2.0,
      bgKey: "googleAds" as const,
      mediaType: "transparent-logo" as const,
      useGlow: true,
    },
  ],
} as const;

/* ─── Section H: Qualification + Final CTA ─── */
export const qualification = {
  forYouIf: [
    "You lie awake knowing the work is out there. You just can't find it online.",
    "You're generating consistent revenue and ready to invest in infrastructure that compounds month over month.",
    "Your pipeline leans too heavily on referrals and word of mouth.",
    "You're tired of watching competitors rank above you for work you do better.",
    "You want one person who owns the full picture, not five vendors you have to coordinate."
  ],
  notForYouIf: [
    "You want a logo, a brochure site, or a one-off project.",
    "Your business is under $5K per month in revenue.",
    "You want to test the waters with no real commitment behind it.",
    "You are not prepared for a 90-day initial run.",
    "You expect results without showing up for a one-hour onboarding call."
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
        "Your competitors aren't optimizing for AI search or using AI receptionists yet. That's your window. I help you seize it.",
    },
  ],
};

/* ─── Services / Tiers ─── */
export const servicesHero = {
  label: "Growth Systems for Service Businesses",
  headline: "Turn inconsistent leads into a predictable booking system.",
  subheadline:
    "Positioning + conversion architecture + acquisition, engineered as a system.",
  primaryCTA: "Apply for Growth Partnership",
  secondaryCTA: "View Results",
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
    timeline: "1\u20132 weeks",
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
  { title: "Ownership & Handoff", description: "You own everything I build. Full access." },
  { title: "Reporting Cadence", description: "Clear performance reports, no vanity metrics." },
  { title: "Communication Standards", description: "Dedicated channel, 24h response time." },
];

/* ─── Services: Recommender Quiz ─── */
export const servicesQuiz = {
  headline: "Not Sure Which Plan Fits?",
  subheadline: "Answer 2 quick questions. I\u2019ll recommend the right tier.",
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
  headline: "Three Phases. One Outcome.",
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
    question: "I ran Google Ads before and lost money. Why would this be different?",
    answer: "Because ads without a conversion system are just expensive traffic. You got clicks. The site that received them was not built to close. The targeting was not built around purchase intent. The landing page was probably your homepage. I have seen this exact story more times than I can count. The clicks were real. Everything behind them was not built. I build the infrastructure first. Then the ads run. The difference between losing money on ads and 46x return on ad spend is the system that receives the traffic.",
    featured: true,
  },
  {
    question: "What is the minimum I should spend on ads?",
    answer: "I recommend starting at $500 per month. At $33 per qualified call, that is roughly 15 calls. One closed job usually covers the entire system cost for the month. Most clients scale ad spend once they see the math.",
  },
  {
    question: "How fast can this go live?",
    answer: "Median 11 days from signed agreement to live system. That includes the diagnostic audit, full website build, and campaign setup. Most clients see their first inbound call within 2 weeks of going live.",
  },
  {
    question: "What do I need to provide?",
    answer: "Access to your Google Business Profile and domain registrar. I handle everything else.",
  },
  {
    question: "What if it doesn't work?",
    answer: "If I don't see a path to ROI, I tell you on the diagnostic call. Before you pay anything.",
  },
  {
    question: "Any contracts or lock-in?",
    answer: "No long-term contracts. Engagements are milestone-based and transparent. You stay because it works, not because you're locked in.",
  },
  {
    question: "How do you measure success?",
    answer: "Pipeline metrics, conversion rates, and ROI. Not vanity stats. Every engagement includes tracking from day one.",
  },
  {
    question: "What happens after I apply?",
    answer: "You'll receive a short qualification review within 24 hours. If there's a good fit, I'll send you a Google Meet link to set up a strategy call.",
  },
];

/* ─── Case Studies ─── */
export const caseStudies = [
  {
    slug: "rv-rental-google-ads",
    title: "Triple W Rentals",
    client: "RV RENTALS",
    industry: "RV Rentals",
  heroStat: "$41,085",
    heroLabel: "Revenue in first 30 days",
    context:
  "From zero online presence to $41,085 in revenue in the first 30 days. $900 in ad spend.",
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
  "$41,085 in confirmed bookings within the first 30 days. $900 in ad spend.",
    takeaway:
  "From zero online presence to $41,085 in revenue in the first 30 days. $900 in ad spend.",
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
      "The existing website was a generic template: slow, not mobile-friendly, and with no clear way to book an appointment. Clients were calling instead of booking online, creating scheduling chaos.",
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
      "Relying solely on Instagram meant missing clients searching Google for 'barbershop near me.' There was no professional landing page, no SEO presence, and no automated booking. Just DMs and phone tag.",
    strategy:
      "Built a conversion-focused website that served as the hub for all online activity: connecting Instagram content, Google search visibility, and a frictionless booking experience.",
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
      "Instagram builds awareness. A website converts that awareness into booked appointments. You need both, and the website needs to be as sharp as your brand.",
    tags: ["Web Design", "Local SEO", "Social Integration", "Booking System"],
  },
];

/* ─── About ─── */
export const aboutContent = {
  headline: "Juan Carlos. Growth Partner\nfor Service Businesses.",
  subhead: "I build systems that turn attention into booked calls.",
  mechanism: [
    "Most business owners I talk to are great at what they do. They just never built the infrastructure to let people find them. That is the gap I close. Website, ads, SEO, GEO, automation, designed as one system so the right clients reach you first, already convinced you are the right choice."
  ],
  mechanismBullets: [
    "Built around your market and your offer",
    "Every component measured by one outcome: calls booked",
    "I stay in it with you after launch",
  ],
  story: [], // Not used on page
  philosophy: {
    headline: "I Win When You Win",
    body: "I do not measure success in deliverables. I measure it in revenue generated, calls booked, and markets dominated. If your business is not growing, the system is not done.",
  },
  advantage: {
    headline: "Why Integrated Systems\nBeat Fragmented Freelancers",
    points: [
      {
        text: "Web designer, media buyer, SEO person, chatbot vendor. None of them talk to each other.",
        accent: false,
      },
      {
        text: "Deliverables ship in silos. No unified strategy.",
        accent: false,
      },
      {
        text: "You become the project manager for five contractors.",
        accent: false,
      },
      {
        text: "Communication gaps erode results and timelines.",
        accent: false,
      },
      {
        text: "You pay for execution and own zero strategy.",
        accent: false,
      },
      {
        text: "One operator owns positioning, funnel, traffic, and automation as one connected system.",
        accent: true,
      },
      {
        text: "Every layer is built to reinforce the others. Compounding, not fragmenting.",
        accent: true,
      },
      {
        text: "Faster launches, lower costs, and a system that scales.",
        accent: true,
      },
    ],
    resultLine: "The result: faster launches, lower costs, fewer handoffs and a system that compounds over time.",
    tableLine: "Fragmentation costs: handoffs, delays, and lost leads.",
  },
};
// About: Working with me (first 30 days)
export const workingWithMe = {
  overline: "WORKING WITH ME",
  headline: "The First 30 Days",
  phases: [
    {
      title: "Days 1–3",
      desc: "Discovery call, market gap audit, and 90-day roadmap. We define what success looks like and lock the offer.",
    },
    {
      title: "Days 4–11",
      desc: "System build. Website, funnel, tracking, and ads architecture. Median launch: 11 days from kickoff.",
    },
    {
      title: "Days 12–30",
      desc: "Optimization and first calls. I iterate on conversion and cost per call. You start seeing booked appointments.",
    },
  ],
};

// About: How I Built This (NEW SECTION)
export const aboutHowIBuiltThis = {
  overline: "THE APPROACH",
  heading: "Why I Operate Differently\nThan Everyone Else in This Space.",
  paragraphs: [
    "I got into this because I saw a pattern. Business owners who do incredible work, losing clients every week to competitors who simply show up first online. Not because the competition was better. Because they had a better system.",
    "I built Client Growth around one belief: the businesses that win locally will be the ones who combine SEO, paid ads, and AI automation into one compounding system while everyone else is still figuring out which freelancer to hire next."
  ]
};

/* ─── Apply Form ─── */
export const formSteps = [
  {
    id: "contact",
    title: "About You",
    fields: [
      { name: "name", label: "Your Name", type: "text" as const, required: true },
      { name: "email", label: "Email Address", type: "email" as const, required: true },
    ],
  },
  {
    id: "business",
    title: "Your Business",
    fields: [
      {
        name: "businessType",
        label: "What type of service business do you run?",
        type: "select" as const,
        required: true,
        options: [
          "Trades & Home Services",
          "Health & Wellness",
          "Medical / Dental",
          "Professional Services",
          "Real Estate",
          "Hospitality & Events",
          "Education & Coaching",
          "Other Service Business",
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
    title: "Your Situation",
    fields: [
      {
        name: "leadSource",
        label: "Where do most of your clients come from today?",
        type: "select" as const,
        required: true,
        options: [
          "Word of mouth only",
          "Social media",
          "Google / search",
          "Paid advertising",
          "A mix of channels",
        ],
      },
      {
        name: "adBudget",
        label: "Monthly advertising budget",
        type: "select" as const,
        required: true,
        options: [
          "Not currently running ads",
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
    title: "Goals & Readiness",
    fields: [
      { name: "businessName", label: "Business Name", type: "text" as const, required: true },
      { name: "businessWebsite", label: "Business Website (optional)", type: "text" as const, required: false },
      {
        name: "planType",
        label: "What does your acquisition system currently lack most?",
        type: "select" as const,
        required: true,
        options: [
          "A consistent online presence",
          "A website that converts visitors",
          "More qualified inbound leads",
          "Scalable paid traffic",
          "Automated follow-up and booking",
        ],
      },
      {
        name: "goal",
        label: "What's your primary goal in the next 90 days?",
        type: "select" as const,
        required: true,
        options: [
          "Establish a strong online presence",
          "Build a consistent lead pipeline",
          "Scale an existing channel",
          "Automate booking and follow-up",
          "Own the top position in my market",
        ],
      },
      {
        name: "timeline",
        label: "When are you looking to get started?",
        type: "select" as const,
        required: true,
        options: [
          "Ready to move now",
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
  { metric: "6+", label: "Systems built" },
  { metric: "2–4 wks", label: "Typical launch timeline" },
  { metric: "4", label: "Niches served" },
  { metric: "3", label: "Active partnerships" },
];

/* ─── About: Operating Principles ─── */
export const aboutPrinciples = [
  {
    title: "Revenue first",
    description: "Measured in booked calls + revenue. Not vanity metrics.",
  },
  {
    title: "Full-stack ownership",
    description: "I own the path end-to-end: positioning → booking. No handoffs.",
  },
  {
    title: "Selective partnerships",
    description: "Max 3 active partnerships per quarter. Focus is the product.",
  },
];

/* ─── About: Working Model Timeline ─── */
export const aboutTimeline = [
  {
    phase: "Kickoff",
    title: "Strategy & Foundation",
    duration: "Week 1",
    description:
      "Deep-dive into your market, offer, and constraints. I define positioning and map the full growth system before a single line of code gets written.",
    deliverables: "Offer map • funnel architecture • tracking plan",
  },
  {
    phase: "Build",
    title: "System Build & Launch",
    duration: "Weeks 2–4",
    description:
      "I build the conversion website, funnel path, tracking, and automation, then launch with clarity.",
    deliverables: "Website + funnel • automation • analytics live",
  },
  {
    phase: "Optimize",
    title: "Optimize & Scale",
    duration: "Ongoing",
    description:
      "I improve conversion, lower costs, and scale what works based on real performance data.",
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
    description: "You own everything I build. Month-to-month after the initial build.",
  },
  {
    icon: "shield",
    title: "Honest Fit Assessment",
    description: "If I\u2019m not the right partner, I\u2019ll tell you upfront, not after you\u2019ve paid.",
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
    "Short application. If there\u2019s a fit, you\u2019ll receive a call link within 24 hours.",
  primary: "Apply (2 min)",
  secondary: "View Results",
  trustBadges: [
    { icon: "lightning", text: "Response within 24 hours" },
    { icon: "lock", text: "100% confidential" },
    { icon: "clipboard", text: "Limited spots per quarter" },
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
      title: "Recommended: Foundation",
      reason: "You need a professional, conversion-ready presence before anything else.",
      cta: "Apply (2 min)",
    },
    Growth: {
      title: "Recommended: Growth",
      reason: "You\u2019re ready for ads, AI, and automated lead generation.",
      cta: "Apply (2 min)",
    },
    Scale: {
      title: "Recommended: Scale",
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
