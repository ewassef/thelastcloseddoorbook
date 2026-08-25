/**
 * Site-wide configuration.
 *
 * The design ships two section toggles (`showPraise`, `showEvents`) plus a
 * launch-status enum for the retailer rows. They live here so the switches are
 * one edit away from the content, not buried in markup.
 */

export const SITE = {
  /** Canonical origin. GitHub Pages serves one custom domain; the other redirects. */
  url: "https://thelastcloseddoor.com",
  title: "The Last Closed Door",
  subtitle: "A Novel of Systems, Incentives, and Change",
  author: "Eddie Wassef",
  edition: "First edition, 2026",
  isbn: "979-8-9964307-0-3",
} as const;

/**
 * Retailer status. "Coming soon" | "Pre-order" | "Available now".
 * Flip to "Available now" and fill in `RETAILERS[].url` on publication day.
 */
export type BuyStatus = "Coming soon" | "Pre-order" | "Available now";

export const BUY_STATUS = "Coming soon" as BuyStatus;

export const BUY_HEADLINE =
  BUY_STATUS === "Available now" ? "Available now" : "Publishing in 2026";

/**
 * Early praise is off until real quotes exist. The design's placeholder card
 * copy ("Reviewer name · Title, Company") is not fit to publish; turn this on
 * once PRAISE below holds attributed quotes.
 */
export const SHOW_PRAISE = false;

/** Speaking section runs on real Sessionize data — see app/speaking-data.ts. */
export const SHOW_SPEAKING = true;

/**
 * Mailing-list endpoint. GitHub Pages is static, so signups need an external
 * form handler (Buttondown, ConvertKit, Formspree, a Worker…). Set
 * NEXT_PUBLIC_SIGNUP_ENDPOINT at build time to switch the form on; while it is
 * empty the panel points people at LinkedIn instead of silently dropping
 * addresses.
 */
export const SIGNUP_ENDPOINT = process.env.NEXT_PUBLIC_SIGNUP_ENDPOINT ?? "";

export const LINKS = {
  medium: "https://medium.com/@ewassef",
  publication: "https://medium.com/archetypical-software",
  archetypical: "https://archetypical.software",
  linkedin: "https://www.linkedin.com/in/eddiewassef/",
  twitter: "https://twitter.com/ewassef",
  github: "https://github.com/ewassef",
  sessionize: "https://sessionize.com/eddie-wassef/",
} as const;

export const RETAILERS: {
  name: string;
  url?: string;
  status?: string;
}[] = [
  { name: "Amazon, paperback & hardcover" },
  { name: "Kindle edition" },
  { name: "Audible audiobook", status: "Planned" },
  { name: "Barnes & Noble", status: "Planned" },
];

export const POSTS = [
  {
    url: "https://medium.com/archetypical-software/build-data-that-cooperates-0d1b058d9dce",
    meta: "Sep 18, 2025 · 6 min read",
    title: "Build Data That Cooperates",
    blurb:
      "Avoiding the data modeling anti-patterns that quietly make every query, migration, and integration harder than it needed to be.",
  },
  {
    url: "https://medium.com/archetypical-software/ride-the-vibe-a0c240357b0f",
    meta: "Sep 18, 2025 · 5 min read",
    title: "Ride the Vibe",
    blurb:
      "Vibe coding produces magical prototypes in record time. Without guardrails it also produces a codebase nobody wants to own.",
  },
  {
    url: "https://medium.com/archetypical-software/sdlc-is-dead-391d9d1defdb",
    meta: "Sep 5, 2025 · 5 min read",
    title: "SDLC is Dead",
    blurb:
      "Phased-gate development can't keep pace with continuous everything. What replaces it, and what that costs.",
  },
];

/** Populate with attributed quotes, then set SHOW_PRAISE to true. */
export const PRAISE: { quote: string; attribution: string }[] = [];

export const DISCUSSION_QUESTIONS = [
  "Where in your own organization is a door being held closed out of habit rather than reason?",
  "The narrator says nothing in that first meeting. What would you have said, and what would it have cost you?",
  "“Governance is not the enemy. Invisible governance is.” Where is your governance invisible?",
  "The book argues enterprises run on hidden memory: seniority, folklore, knowing which meeting matters. What memory would you externalize first?",
  "Who in the story is right for the wrong reasons? Who is wrong for the right ones?",
  "“The point is not to create a temporary corporate initiative.” What of your current work would survive a leadership change?",
];
