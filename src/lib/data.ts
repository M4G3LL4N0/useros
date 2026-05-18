export const faqItems = [
  {
    q: "Is UserOS only for technical founders?",
    a: "No. If you can describe a user, a pain, and what they do today, you can use it. The output is plain English: who to talk to, what to ask, and what to build first.",
  },
  {
    q: "Does this replace user interviews?",
    a: "It does not replace conversations. It makes them sharper. You walk in with better questions, clearer hypotheses, and a faster way to turn messy notes into a build order.",
  },
  {
    q: "Does this require an API key?",
    a: "Not for the MVP demo on this site. The engine runs locally in your browser so you can explore the workflow without wiring payments or keys.",
  },
  {
    q: "Can I use it before I have a product?",
    a: "Yes. That is the point. UserOS is built for the blank page stage—when you have signals, doubts, and a half-formed idea, but not a roadmap you trust yet.",
  },
  {
    q: "Can I use it for multiple startup ideas?",
    a: "On the free tier, map one idea deeply. Pro and Studio are built for founders who run parallel experiments and need separate maps without mixing context.",
  },
] as const;

export const useCases = [
  {
    title: "First-time founders",
    body: "Turn anxiety into a checklist: segment, pain language, triggers, and a first MVP that matches evidence.",
  },
  {
    title: "Non-technical founders",
    body: "Get a founder-grade brief you can hand to a builder, designer, or AI coding agent without losing the user story.",
  },
  {
    title: "Venture studios",
    body: "Standardize how every new company starts: customer truth first, product second, distribution third.",
  },
  {
    title: "Product teams",
    body: "Align PM, design, and eng on who the user is, what counts as success, and what not to build.",
  },
  {
    title: "Accelerators",
    body: "Give cohorts a shared language for customer discovery before demo day narratives solidify too early.",
  },
  {
    title: "Agencies",
    body: "Front-load strategy so scoping stops guessing and retainers start with a truth base, not vibes.",
  },
  {
    title: "Hackathon builders",
    body: "Compress discovery into a map you can execute in a weekend without building the wrong \"cool\" feature.",
  },
  {
    title: "AI app builders",
    body: "When code is cheap, differentiation is understanding. UserOS helps you pick the workflow worth automating.",
  },
] as const;

export const savedMapsMock = [
  {
    id: "map-01",
    name: "Ops copilot for mid-market SaaS",
    signal: 86,
    urgency: "High",
    updated: "2h ago",
  },
  {
    id: "map-02",
    name: "Compliance automation for clinics",
    signal: 74,
    urgency: "Medium",
    updated: "Yesterday",
  },
  {
    id: "map-03",
    name: "Founder CRM for studio portfolios",
    signal: 69,
    urgency: "Medium",
    updated: "3d ago",
  },
] as const;

export const painThemesMock = [
  { label: "Workarounds that hide risk", strength: 92 },
  { label: "Tool sprawl without a source of truth", strength: 84 },
  { label: "Slow approvals blocking revenue", strength: 78 },
  { label: "Onboarding that dies after day one", strength: 71 },
] as const;

export const urgencyUsersMock = [
  { name: "RevOps lead, 200–800 employees", score: 94 },
  { name: "Clinical ops manager, multi-site", score: 88 },
  { name: "Portfolio operator, venture studio", score: 81 },
] as const;

export const researchTasksMock = [
  "Run 5 interviews focused on the last expensive failure, not future hypotheticals.",
  "Collect 10 voice-of-customer phrases from reviews, tickets, and community threads.",
  "Validate willingness to pay with a paid pilot outline, not a survey.",
] as const;

export const roadmapPreviewMock = [
  { phase: "Week 1–2", item: "Single-user workflow with measurable outcome" },
  { phase: "Week 3–4", item: "Evidence capture + export for founder memos" },
  { phase: "Week 5–6", item: "Team mode + permissioned sharing" },
] as const;

export const pricingTiers = [
  {
    name: "Free",
    price: "$0",
    cadence: "forever",
    description: "One deep map. Enough to pressure-test an idea before you commit.",
    features: ["1 user map", "Basic report sections", "Local demo engine"],
    cta: "Start free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    cadence: "/month",
    description: "For founders shipping on loop who need unlimited exploration.",
    features: [
      "Unlimited user maps",
      "Interview question packs by segment",
      "MVP roadmap generator",
      "Export-ready briefs",
    ],
    cta: "Get Pro",
    highlighted: true,
  },
  {
    name: "Studio",
    price: "$99",
    cadence: "/month",
    description: "For studios and agencies running parallel bets with shared playbooks.",
    features: [
      "Multiple startups",
      "Competitor review mining workflows",
      "Investor-ready narrative templates",
      "Shared workspace + tags",
    ],
    cta: "Talk to sales",
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    description: "For product orgs, accelerators, and venture factories at scale.",
    features: ["SSO and audit trails", "Private data handling", "Custom rubrics", "Dedicated success"],
    cta: "Contact us",
    highlighted: false,
  },
] as const;
