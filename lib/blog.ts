export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO date
  readTime: string;
  category: string;
  body: BlogBlock[];
}

export const posts: BlogPost[] = [
  {
    slug: "why-most-isos-cant-save-high-risk-merchants",
    title: "Why most ISOs can't save high-risk merchants",
    excerpt:
      "Most processors decline first and ask questions never. Here's what actually determines whether a high-risk account gets approved — and stays approved.",
    date: "2026-05-04",
    readTime: "5 min read",
    category: "Underwriting",
    body: [
      {
        type: "p",
        text: "A merchant gets declined by three processors in a row and assumes the business itself is the problem. Usually it isn't. Most ISOs resell risk appetite from a bank they don't control, so the moment an account looks even slightly outside the box, the application gets routed straight to decline — not because the underwriting says no, but because nobody upstream wants to spend time finding out.",
      },
      {
        type: "h3",
        text: "Risk tolerance is borrowed, not owned",
      },
      {
        type: "p",
        text: "When a processor doesn't hold its own banking relationships, every file is judged against someone else's risk matrix. That matrix is built for the average merchant, not yours. CBD, nutraceuticals, travel, telehealth, adult, firearms accessories, high-ticket coaching — none of these are uninsurable categories. They're categories that require a direct underwriting conversation instead of an automated score.",
      },
      {
        type: "p",
        text: "We hold our own banking lines, which means the underwriter reviewing your file can actually say yes to something a matrix would auto-reject — and back that decision with a real relationship instead of a policy document.",
      },
      {
        type: "h3",
        text: "What we actually look at",
      },
      {
        type: "list",
        items: [
          "Real processing history, not just a credit score",
          "Chargeback ratio trend, not just the current number",
          "How the business actually fulfills — not just what the website says",
          "Whether the founder can explain the model in plain language",
        ],
      },
      {
        type: "p",
        text: "Approval is the easy part. The harder problem is staying approved through volume spikes, seasonality, and the occasional bad batch of chargebacks — which is why we build the relationship to last past the first statement.",
      },
    ],
  },
  {
    slug: "the-real-cost-of-reselling-someone-elses-gateway",
    title: "The real cost of reselling someone else's gateway",
    excerpt:
      "White-label sounds simple until your roadmap depends on a vendor's roadmap. Here's what actually breaks when you resell instead of build.",
    date: "2026-04-18",
    readTime: "4 min read",
    category: "Platform",
    body: [
      {
        type: "p",
        text: "Every reseller pitch sounds the same: launch fast, skip the engineering, take a cut of the volume. What the pitch leaves out is what happens eighteen months in, when your biggest merchant needs a feature the underlying gateway has no roadmap for, and you're stuck relaying support tickets to a vendor who doesn't know your business exists.",
      },
      {
        type: "h3",
        text: "You don't control the thing your brand is named on",
      },
      {
        type: "p",
        text: "A resold gateway means someone else decides uptime, someone else decides which card networks get supported first, and someone else decides when (or if) a bug gets fixed. Your name is on the checkout page. Your support line takes the call. But the actual lever that fixes the problem belongs to a company that has never heard of your merchants.",
      },
      {
        type: "h3",
        text: "What building instead of reselling actually buys you",
      },
      {
        type: "list",
        items: [
          "Direct control over uptime, routing logic, and release timing",
          "The ability to underwrite edge cases a resold platform would auto-decline",
          "A pricing structure that isn't padded by three layers of markup",
          "A support relationship where the person who built it answers the phone",
        ],
      },
      {
        type: "p",
        text: "White-label still has a place — it's how we run the REDO.com style partnerships, where a brand keeps its name on every screen while we operate the gateway underneath. The difference is who's actually holding the infrastructure. If it's a reseller three layers removed from the rails, the roadmap was never yours to begin with.",
      },
    ],
  },
  {
    slug: "what-underwriting-actually-looks-at-before-you-go-live",
    title: "What underwriting actually looks at before you go live",
    excerpt:
      "Most merchants treat underwriting as a black box. It isn't — it's a short list of signals, and most applications fail on the same two or three.",
    date: "2026-03-22",
    readTime: "4 min read",
    category: "Underwriting",
    body: [
      {
        type: "p",
        text: "Underwriting gets treated like a black box because most processors never explain what's actually being evaluated. In practice, it's a short, repeatable list — and most declines come down to the same two or three gaps showing up over and over.",
      },
      {
        type: "h3",
        text: "The signals that matter most",
      },
      {
        type: "list",
        items: [
          "Business model clarity — can you explain how money moves in one sentence?",
          "Fulfillment proof — shipping records, delivery confirmations, service logs",
          "Processing history — prior statements, even if they're imperfect",
          "Refund and chargeback policy — written, visible, and actually enforced",
          "Principal background — open judgments, prior terminations, MATCH list status",
        ],
      },
      {
        type: "p",
        text: "None of these need to be perfect. A merchant with a documented chargeback spike from a single bad supplier is a very different file than one with no explanation at all. The fix in the first case is a paragraph of context. The fix in the second case is months of guesswork from an underwriter who has no reason to extend the benefit of the doubt.",
      },
      {
        type: "h3",
        text: "Bring the context, not just the application",
      },
      {
        type: "p",
        text: "The fastest approvals we process aren't the lowest-risk merchants — they're the ones who show up with the story already documented. Three months of statements, a one-paragraph explanation of the model, and a refund policy that's actually live on the site turns a multi-week underwriting cycle into a same-week approval.",
      },
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
