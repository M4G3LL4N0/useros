export type UserMapInput = {
  startupIdea: string;
  targetCustomer: string;
  currentAlternative: string;
  biggestPain: string;
  priceRange: string;
  marketType: string;
  urgencyLevel: string;
  founderConfidence: string;
};

export type UserMapReport = {
  userClarityScore: number;
  painIntensityScore: number;
  buildConfidenceScore: number;
  idealCustomerProfile: string;
  emotionalTruth: string;
  buyingTrigger: string;
  existingAlternativeRisk: string;
  mvpRecommendation: string;
  firstFiveFeatures: string[];
  interviewQuestions: string[];
  landingPage: {
    headline: string;
    subheadline: string;
    cta: string;
    problemStatement: string;
  };
  founderWarning: string;
  nextAction: string;
};

const VAGUE_CUSTOMER = /\b(everyone|anyone|people|users?|businesses?|founders?|companies)\b/i;
const HIGH_FRICTION_ALTS =
  /\b(spreadsheet|excel|google sheets|manual|consultant|agency|nothing|pen and paper|sticky notes|email threads?|google)\b/i;
const ENTERPRISE_PRICE = /\b(\$?\s*[5-9]\s*k|\$?\s*\d{2,}\s*k|enterprise|custom pricing|six figures|10k\+)\b/i;

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, Math.round(n)));
}

function wordCount(s: string) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

function normalize(s: string) {
  return s.trim().replace(/\s+/g, " ");
}

function titleCaseSnippet(s: string, max = 80) {
  const t = normalize(s);
  if (!t) return "this opportunity";
  return t.length > max ? `${t.slice(0, max).trim()}…` : t;
}

function urgencyWeight(u: string) {
  const v = u.toLowerCase();
  if (v.includes("high")) return 1;
  if (v.includes("medium")) return 0.65;
  return 0.35;
}

function confidenceWeight(c: string) {
  const v = c.toLowerCase();
  if (v.includes("high")) return 1;
  if (v.includes("medium")) return 0.6;
  return 0.3;
}

function marketHint(m: string) {
  const v = m.toLowerCase();
  if (v.includes("b2b")) return "B2B buyers who need proof, ROI, and a safe rollout path.";
  if (v.includes("b2c")) return "B2C users who decide fast, compare loudly, and churn without warning if the job is not done.";
  if (v.includes("marketplace")) return "two-sided participants where liquidity and trust are the real product.";
  if (v.includes("prosumer")) return "prosumers who will pay for speed, but only if the workflow feels obvious on day one.";
  if (v.includes("internal")) return "internal teams where adoption hinges on managers, IT, and change management.";
  return "buyers who need a crisp reason to switch from what already works well enough.";
}

function alternativeNarrative(alt: string) {
  const a = alt.toLowerCase();
  if (/\b(nothing|none|n\/a)\b/.test(a)) {
    return "They are not actively buying yet. The risk is apathy, not a competitor landing page.";
  }
  if (/\b(spreadsheet|excel|sheets?)\b/.test(a)) {
    return "Spreadsheets win because they are flexible. Your wedge is reliability, fewer errors, and a workflow that removes copy-paste.";
  }
  if (/\b(manual|pen|paper|sticky)\b/.test(a)) {
    return "Manual processes signal pain, but also inertia. Your product must be dramatically easier than \"the way we have always done it.\"";
  }
  if (/\b(consultant|agency)\b/.test(a)) {
    return "Consultants are expensive but trusted. You win on speed, repeatability, and transparent outcomes.";
  }
  if (/\b(google|notion|slack|jira|zendesk)\b/.test(a)) {
    return "Big platforms are the default. You win by doing one job radically better, not by replacing their whole stack.";
  }
  return "Whatever they use today is \"good enough\" until a trigger makes the pain undeniable. Map that trigger in real interviews.";
}

function buyingTriggerLine(urgency: string, pain: string, alt: string) {
  const u = urgencyWeight(urgency);
  const painT = titleCaseSnippet(pain, 120);
  const altL = alt.toLowerCase();
  if (u >= 0.85) {
    return `A deadline event (launch, audit, hiring spike, revenue target) forces them to fix "${painT}" instead of tolerating ${altL || "the workaround"}.`;
  }
  if (/\b(spreadsheet|manual|email)\b/.test(altL)) {
    return `The moment the workaround creates a visible mistake, lost money, or public embarrassment, "${painT}" becomes urgent.`;
  }
  return `They act when the cost of waiting exceeds the cost of switching—usually after a concrete failure tied to ${painT || "this problem"}.`;
}

function mvpLine(idea: string, pain: string, alt: string, market: string) {
  const i = titleCaseSnippet(idea, 100);
  const p = titleCaseSnippet(pain, 90);
  return `Ship a narrow workflow that proves you can remove ${p || "the core pain"} for ${marketHint(market).split(".")[0]}. Anchor it to ${i || "your concept"} with one measurable outcome in week one.`;
}

function featureList(pain: string, alt: string, market: string): string[] {
  const p = titleCaseSnippet(pain, 60);
  const a = titleCaseSnippet(alt, 40);
  const m = titleCaseSnippet(market, 28) || "this market";
  return [
    `Guided onboarding that finishes the first success job in under 10 minutes, tied to ${p || "the pain"}`,
    `A single dashboard that shows the outcome users actually care about (not vanity metrics)`,
    `Import or sync from ${a || "their current tool"} so switching does not feel like a science project`,
    `Role-based workflows for the real decision-maker vs day-to-day operator in ${m}`,
    `Evidence capture: quotes, screenshots, and timestamps so you can iterate without guessing`,
  ];
}

function interviewQuestions(input: UserMapInput): string[] {
  const c = titleCaseSnippet(input.targetCustomer, 60);
  const pain = titleCaseSnippet(input.biggestPain, 80);
  return [
    `Walk me through the last time ${pain || "this problem"} cost you real time, money, or reputation.`,
    `What did you try right before you almost gave up? What almost worked?`,
    `Who else has to say yes before you can change tools or process?`,
    `If you could wave a wand and fix one step only, what would it be—and what would \"done\" look like?`,
    `What would make you trust a new product here: proof, referrals, a pilot, pricing, or something else?`,
    `When ${c || "your customer"} says they are \"fine,\" what are they actually tolerating?`,
    `What metric would you put on a dashboard to prove this problem is solved?`,
    `What is the embarrassing workaround you would never post on LinkedIn—but still rely on?`,
    `How do you discover alternatives today: peers, Google, analysts, communities?`,
    `If we shipped something small next week, what would you need to see on day three to keep going?`,
  ];
}

export function generateUserMapReport(input: UserMapInput): UserMapReport {
  const idea = normalize(input.startupIdea);
  const customer = normalize(input.targetCustomer);
  const alt = normalize(input.currentAlternative);
  const pain = normalize(input.biggestPain);
  const price = normalize(input.priceRange);
  const market = normalize(input.marketType) || "your market";
  const urgency = normalize(input.urgencyLevel) || "medium";
  const founderConf = normalize(input.founderConfidence) || "medium";

  const ideaWords = wordCount(idea);
  const customerWords = wordCount(customer);
  const painWords = wordCount(pain);
  const altWords = wordCount(alt);

  let clarity =
    38 +
    Math.min(22, ideaWords * 1.4) +
    Math.min(18, customerWords * 2.2) +
    Math.min(14, painWords * 1.6) +
    Math.min(8, altWords * 1.1);

  if (customerWords < 4) clarity -= 18;
  if (VAGUE_CUSTOMER.test(customer) && customerWords < 10) clarity -= 14;
  if (ideaWords < 6) clarity -= 12;
  if (painWords < 5) clarity -= 10;

  let painScore =
    32 +
    urgencyWeight(urgency) * 34 +
    Math.min(18, painWords * 1.2) +
    (HIGH_FRICTION_ALTS.test(alt) ? 14 : 4) +
    (ENTERPRISE_PRICE.test(price) ? 8 : 0);

  const founderW = confidenceWeight(founderConf);
  const clarityNorm = clarity / 100;

  let buildConfidence = 40 + founderW * 28 + clarityNorm * 26;
  if (founderW > 0.75 && clarityNorm < 0.55) buildConfidence -= 22;
  if (founderW < 0.45 && clarityNorm > 0.65) buildConfidence += 8;

  clarity = clamp(clarity, 12, 100);
  painScore = clamp(painScore, 18, 100);
  buildConfidence = clamp(buildConfidence, 15, 100);

  const ideaShort = titleCaseSnippet(idea, 140);
  const customerShort = titleCaseSnippet(customer, 120);
  const painShort = titleCaseSnippet(pain, 140);

  const icp = `Start with ${customerShort || "a tight segment you can name in one sentence"}. They are living with ${painShort || "a recurring pain"} while using ${alt || "a patchwork fix"}. Your first wedge is the smallest group where the pain shows up weekly, budgets exist, and you can reach 20 conversations without ads. The idea anchor is: ${ideaShort || "your concept"}—keep the segment smaller until replies get specific.`;

  const emotional = `They do not want \"software.\" They want relief from the anxiety of dropping balls, looking unprepared, or being the person who has to clean up a mess that was preventable. Speak to the identity shift: from firefighting to in control.`;

  const altRisk = alternativeNarrative(alt);

  let founderWarning =
    "The riskiest assumption is that the pain is frequent enough to pull them away from what already works.";
  if (founderW > 0.75 && clarityNorm < 0.58) {
    founderWarning =
      "High founder confidence with fuzzy customer evidence is how teams ship the wrong MVP fast. Slow down and bank ten real conversations before you fall in love with the build plan.";
  }
  if (VAGUE_CUSTOMER.test(customer)) {
    founderWarning =
      "A vague target customer hides weak positioning. Rewrite the segment until a stranger could find ten of them on LinkedIn in 15 minutes.";
  }
  if (ENTERPRISE_PRICE.test(price) && urgencyWeight(urgency) > 0.8) {
    founderWarning =
      "High price plus high urgency often means procurement and security reviews. Your dangerous assumption is that a single user can pull the purchase through.";
  }

  const nextAction =
    clarityNorm < 0.55
      ? "Book five 30-minute interviews with people who match your target segment. Ask for stories, not opinions."
      : "Turn this map into a one-page hypothesis doc: segment, pain, trigger, and the smallest paid pilot you can offer in 14 days.";

  const headline =
    painShort.length > 8
      ? `Stop ${painShort.split(" ").slice(0, 6).join(" ")} from stealing your week`
      : `A calmer way to run ${ideaShort.split(" ").slice(0, 5).join(" ") || "this workflow"}`;

  const sub =
    ideaShort.length > 12
      ? `${ideaShort}—built for ${customerShort || "teams who need proof fast"}.`
      : `Purpose-built for ${customerShort || "teams who need proof fast"}.`;

  return {
    userClarityScore: clarity,
    painIntensityScore: painScore,
    buildConfidenceScore: Math.round(buildConfidence),
    idealCustomerProfile: icp,
    emotionalTruth: emotional,
    buyingTrigger: buyingTriggerLine(urgency, pain, alt),
    existingAlternativeRisk: altRisk,
    mvpRecommendation: mvpLine(idea, pain, alt, market),
    firstFiveFeatures: featureList(pain, alt, market),
    interviewQuestions: interviewQuestions(input),
    landingPage: {
      headline,
      subheadline: sub,
      cta: "See the workflow",
      problemStatement: `Most teams still solve ${painShort || "this"} with ${alt || "workarounds"}. That means rework, slow handoffs, and decisions made without clean data.`,
    },
    founderWarning,
    nextAction,
  };
}
