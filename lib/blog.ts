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
    slug: "intelligent-returns-claims-portal-retain-revenue",
    title: "Intelligent Returns and Claims: Turning Post-Purchase Costs into Revenue",
    excerpt:
      "Most businesses treat returns and claims as damage control. The ones that win treat them as the last chance to keep a customer — and build a system that makes that the default outcome.",
    date: "2026-06-18",
    readTime: "5 min read",
    category: "Strategy",
    body: [
      {
        type: "p",
        text: "A customer who files a return or submits a claim has already made a decision: they are not satisfied with the outcome of the transaction. What happens next determines whether they become a repeat buyer or a chargeback.",
      },
      {
        type: "p",
        text: "Most returns and claims portals are built to process, not to retain. The merchant gets a refund request, issues the credit, and absorbs the loss. The customer gets their money back and buys from someone else. The only winner is the cost center that just grew.",
      },
      {
        type: "p",
        text: "An intelligent returns and claims system changes the goal. The objective is not to process the return faster. It is to make the exchange, the replacement, or the resolution so seamless that the customer sees no reason to go anywhere else.",
      },
      {
        type: "h3",
        text: "Why most post-purchase operations fail on revenue",
      },
      {
        type: "p",
        text: "The default returns flow treats every customer identically: submit a form, receive a label, wait for a refund. There is no differentiation between a first-time buyer who received a defective unit and a repeat customer with a history of high-value orders. There is no logic that asks whether this person might prefer an exchange over a refund, or whether a credit toward their next order would resolve the issue at a fraction of the cost.",
      },
      {
        type: "p",
        text: "That uniformity is expensive. A blanket refund issued to a customer who would have accepted an exchange at a lower cost is lost revenue. A claims process that routes every dispute to manual review is a staffing cost that scales with volume. A portal with no personalization is a churn machine.",
      },
      {
        type: "h3",
        text: "What an AI-driven portal does differently",
      },
      {
        type: "p",
        text: "Intelligent returns infrastructure reads the context of each request before presenting options. Order history, customer lifetime value, reason for return, product category, fulfillment data, and prior claim history all feed a decision layer that determines what resolution to offer first.",
      },
      {
        type: "list",
        items: [
          "High-value repeat customers are routed to instant exchange or credit options before a refund is presented",
          "First-time buyers with defective-unit claims receive proactive replacement offers with no return required",
          "Customers flagged for return abuse patterns are handled through manual review rather than instant approval",
          "Reason codes are parsed to surface fulfillment issues before they generate a second wave of returns",
          "Every resolution path is tracked for downstream revenue impact, not just cost reduction",
        ],
      },
      {
        type: "p",
        text: "The result is a portal that behaves differently for different customers — not because the rules are arbitrary, but because the data supports a better outcome for both sides.",
      },
      {
        type: "h3",
        text: "Turning refunds into exchanges",
      },
      {
        type: "p",
        text: "A refund ends the relationship. An exchange continues it. The gap between those two outcomes is almost always a UX problem: the customer defaults to refund because that option is presented first, is easiest to complete, and requires the least decision-making.",
      },
      {
        type: "p",
        text: "An intelligent portal reverses the default. It surfaces exchange options with pre-populated alternatives based on what the customer originally bought, offers instant credit that does not require a return shipment for lower-cost items, and makes the exchange path faster than the refund path. When the path of least resistance leads to a retained order, more customers take it.",
      },
      {
        type: "h3",
        text: "Claims as a trust signal",
      },
      {
        type: "p",
        text: "A claim — damage in transit, missing item, wrong product — is a moment of high emotional investment for the customer. They are not just dissatisfied. They are waiting to find out whether the business will do the right thing without making them fight for it.",
      },
      {
        type: "p",
        text: "Businesses that resolve claims quickly, without friction, and without requiring the customer to prove their case three times, create loyalty that a discount code never could. The customer remembers that the problem was fixed, not that the problem happened. That memory is worth more than the cost of the replacement.",
      },
      {
        type: "p",
        text: "Automating that resolution — instant approval for claims under a defined threshold, pre-authorized replacements for documented carrier issues, real-time status updates — removes the friction that turns a minor incident into a chargeback or a negative review.",
      },
      {
        type: "h3",
        text: "From cost center to profit driver",
      },
      {
        type: "p",
        text: "Post-purchase operations become a profit driver when three things are true: the resolution cost is lower than a refund for most customers, the retained customer spends again, and the data from returns feeds upstream decisions about fulfillment, product quality, and fraud.",
      },
      {
        type: "list",
        items: [
          "Resolution cost per case drops when automation handles the high-volume, low-complexity requests",
          "Exchange and credit resolutions retain the order value instead of removing it from revenue",
          "Return reason data identifies fulfillment and product issues before they compound",
          "Fraud detection on claims patterns reduces write-offs without increasing friction for legitimate customers",
          "Customer lifetime value increases when the post-purchase experience matches the pre-purchase promise",
        ],
      },
      {
        type: "p",
        text: "Proficient builds intelligent returns and claims infrastructure as part of a broader revenue protection strategy. The same processing relationship that handles authorization and chargeback management also supports the post-purchase layer — because revenue protection does not end when the payment is approved.",
      },
      {
        type: "p",
        text: "If your current returns process measures success by refunds processed, it is measuring the wrong thing. The number that matters is revenue retained.",
      },
    ],
  },
  {
    slug: "medusa-js-direct-integration-no-middle-gateway",
    title: "Proficient integrates directly with Medusa.js — no middle gateway",
    excerpt:
      "Most Medusa.js payment plugins route transactions through a third-party gateway before they reach a processor. Proficient connects directly to Medusa — one fewer layer, one fewer point of failure, and no extra fee in the middle.",
    date: "2026-06-17",
    readTime: "4 min read",
    category: "Platform",
    body: [
      {
        type: "p",
        text: "Medusa.js has become the go-to headless commerce framework for teams that want full control over their stack. You own the storefront, the admin, and the data — but the moment a customer clicks pay, most setups quietly route that transaction through a third-party gateway before it ever reaches a processor. That middle layer adds latency, introduces another failure point, and almost always costs something.",
      },
      {
        type: "p",
        text: "Proficient built a direct Medusa payment plugin that eliminates that layer entirely.",
      },
      {
        type: "h3",
        text: "How most Medusa payment setups work",
      },
      {
        type: "p",
        text: "The typical integration looks like this: Medusa talks to Stripe (or Braintree, or Adyen), which talks to a card network, which talks to the issuing bank. Every hop in that chain is a place where the transaction can time out, get declined for the wrong reason, or cost you basis points you never agreed to.",
      },
      {
        type: "p",
        text: "For standard merchants, the convenience of that model is usually worth the tradeoff. For merchants with higher volume, complex product categories, or elevated chargeback exposure, the middle gateway becomes the weakest link — and the one you have the least visibility into.",
      },
      {
        type: "h3",
        text: "What a direct integration changes",
      },
      {
        type: "list",
        items: [
          "Transactions go from Medusa directly to our processing infrastructure — no third-party gateway in the middle",
          "Authorization decisions happen at the processor level, not filtered through a gateway's own risk rules",
          "Routing logic is configurable — you can optimize for approval rate, cost, or both depending on the transaction",
          "Chargebacks and disputes surface directly in your Medusa admin, not buried in a separate gateway dashboard",
          "No per-transaction gateway fee stacked on top of interchange and processor margin",
        ],
      },
      {
        type: "h3",
        text: "Built for merchants Stripe declines",
      },
      {
        type: "p",
        text: "One of the main reasons teams come to us is that their product category gets flagged by consumer-facing gateways. Nutraceuticals, telehealth, subscription boxes with free-trial structures, high-ticket coaching — these are not unprocessable categories. They are categories that need a direct underwriting relationship and a processor that is not applying a consumer-gateway risk filter on top of card network rules.",
      },
      {
        type: "p",
        text: "Because our Medusa plugin connects to our own infrastructure, the underwriting conversation happens with us — not with a gateway that will pass the merchant through to a processor they do not know and cannot talk to.",
      },
      {
        type: "h3",
        text: "Drop-in, not a rebuild",
      },
      {
        type: "p",
        text: "The integration is a standard Medusa payment provider. It installs via npm, registers in your Medusa config, and handles the full transaction lifecycle: authorization, capture, void, and refund. Your storefront does not change. Your checkout flow does not change. The only thing that changes is what is behind it.",
      },
      {
        type: "p",
        text: "If you are already on Medusa and hitting a wall with your current payment setup — declined applications, gateway-level risk flags, or per-transaction costs that do not scale — reach out. We will walk through what a direct integration would look like for your specific setup.",
      },
    ],
  },
  {
    slug: "protecting-revenue-before-during-after-the-sale",
    title: "Protecting Revenue Before the Sale, During the Sale, and After the Sale",
    excerpt:
      "Most businesses think about payment processing only when a customer clicks Buy Now. The reality is that revenue protection begins long before the transaction occurs and continues long after.",
    date: "2026-06-17",
    readTime: "5 min read",
    category: "Strategy",
    body: [
      {
        type: "p",
        text: "Most businesses think about payment processing only when a customer clicks Buy Now. The reality is that revenue protection begins long before the transaction occurs and continues long after the payment is approved.",
      },
      {
        type: "p",
        text: "At Proficient.tech, we believe that payments are only one component of a larger revenue protection strategy. Every business faces threats to profitability from fraudulent transactions, declining authorization rates, unnecessary processing costs, chargebacks, return abuse, and customer attrition. Addressing only one part of the equation leaves revenue exposed.",
      },
      {
        type: "h3",
        text: "Before the Sale: Preventing Bad Transactions",
      },
      {
        type: "p",
        text: "Revenue protection starts before an order is ever placed.",
      },
      {
        type: "p",
        text: "Fraudulent purchases, account takeovers, card testing attacks, and high-risk transactions can create costly chargebacks, increase operational burden, and jeopardize processor relationships. Proficient helps businesses implement intelligent risk controls designed to identify suspicious activity before it becomes a problem.",
      },
      {
        type: "p",
        text: "By reducing fraudulent transactions before authorization, merchants can protect margins, preserve customer trust, and maintain healthier processing environments.",
      },
      {
        type: "h3",
        text: "During the Sale: Optimizing Payment Performance",
      },
      {
        type: "p",
        text: "Every approved transaction matters.",
      },
      {
        type: "p",
        text: "Many businesses unknowingly lose revenue through excessive processing costs, poor authorization performance, outdated payment infrastructure, or unnecessary friction during checkout. Even small improvements in acceptance rates and transaction costs can have a significant impact on profitability over time.",
      },
      {
        type: "p",
        text: "Proficient works with merchants to optimize payment infrastructure, improve transaction routing, increase approval rates, and reduce unnecessary costs. The goal is simple: maximize legitimate sales while minimizing payment-related friction and expense.",
      },
      {
        type: "p",
        text: "When payments work efficiently, businesses capture more revenue from customers who are already ready to buy.",
      },
      {
        type: "h3",
        text: "After the Sale: Defending Revenue and Increasing Retention",
      },
      {
        type: "p",
        text: "The customer journey does not end after payment approval.",
      },
      {
        type: "p",
        text: "Returns, claims, friendly fraud, chargebacks, and customer dissatisfaction can quickly erode margins if not managed properly. Many merchants focus heavily on acquiring customers while overlooking the revenue leakage that occurs after fulfillment.",
      },
      {
        type: "p",
        text: "Proficient helps businesses implement post-purchase strategies that reduce losses from claims, disputes, and abuse while creating opportunities to retain customers through improved service experiences. The result is stronger customer relationships, increased lifetime value, and greater revenue retention.",
      },
      {
        type: "h3",
        text: "The Revenue Protection Mindset",
      },
      {
        type: "p",
        text: "The most successful businesses do not view payments as a standalone function. They view revenue protection as a continuous process that spans the entire customer lifecycle.",
      },
      {
        type: "list",
        items: [
          "Before the sale, stop bad transactions.",
          "During the sale, optimize acceptance and reduce costs.",
          "After the sale, protect revenue and strengthen customer retention.",
        ],
      },
      {
        type: "p",
        text: "This holistic approach allows merchants to keep more of what they earn while creating better experiences for legitimate customers.",
      },
      {
        type: "p",
        text: "At Proficient.tech, our mission is simple: help businesses protect, optimize, and grow revenue at every stage of the transaction lifecycle.",
      },
      {
        type: "p",
        text: "Because the best revenue is not just the revenue you generate—it's the revenue you keep.",
      },
    ],
  },
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
