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
    slug: "fraud-doesnt-end-at-checkout-revenue-protection-lifecycle",
    title: "Fraud Doesn't End at Checkout",
    excerpt:
      "For many merchants, fraud prevention begins and ends at checkout. In reality, that is often where a different kind of fraud begins — and why revenue protection has to extend before, during, and after the sale.",
    date: "2026-06-20",
    readTime: "7 min read",
    category: "Strategy",
    body: [
      {
        type: "p",
        text: "For many merchants, fraud prevention still begins and ends at checkout. The transaction is approved, the order ships, and the assumption is that the risk has passed. In reality, that is often where a different kind of fraud begins.",
      },
      {
        type: "p",
        text: "Modern commerce fraud is no longer limited to stolen cards and fake identities. It now extends into returns abuse, false claims, chargebacks, friendly fraud, refund manipulation, reseller abuse, and policy exploitation. In other words, a merchant can win the transaction and still lose the revenue.",
      },
      {
        type: "p",
        text: "That is why revenue protection cannot be viewed as a single fraud tool at checkout. It has to be approached as a full lifecycle strategy — one that protects the business before the sale, during the sale, and after the sale.",
      },
      {
        type: "h3",
        text: "The Old View of Fraud Is Too Narrow",
      },
      {
        type: "p",
        text: "Traditional fraud prevention has focused almost entirely on the payment event itself:",
      },
      {
        type: "list",
        items: [
          "Is the card stolen?",
          "Does AVS match?",
          "Does the billing address look risky?",
          "Is the transaction likely to chargeback immediately?",
        ],
      },
      {
        type: "p",
        text: "Those checks still matter, but they only address one part of the problem. Fraud today often shows up after the order has already been accepted and fulfilled. Merchants are increasingly dealing with customers — or organized bad actors — who know how to exploit return policies, file false item-not-received claims, abuse warranties, or dispute legitimate purchases with their bank.",
      },
      {
        type: "p",
        text: "This creates a dangerous blind spot. A merchant may believe they have strong fraud controls because they are blocking suspicious orders, while margin is quietly being lost through post-purchase abuse.",
      },
      {
        type: "h3",
        text: "Fraud Has Moved Beyond the Checkout Page",
      },
      {
        type: "p",
        text: "The ecommerce and retail landscape has changed. Fraud is no longer just about preventing unauthorized transactions. It is also about identifying and limiting behavior that erodes revenue after the payment clears. Common examples include:",
      },
      {
        type: "h3",
        text: "Friendly Fraud and Chargeback Abuse",
      },
      {
        type: "p",
        text: "A legitimate customer receives the product, keeps it, and then disputes the charge anyway. Sometimes it is confusion. Sometimes it is opportunistic abuse. Either way, the merchant can lose the product, the revenue, the shipping cost, and incur chargeback fees on top of it.",
      },
      {
        type: "h3",
        text: "Return and Refund Abuse",
      },
      {
        type: "p",
        text: "Customers may wear, use, or resell products and then return them outside the spirit of the policy. Others repeatedly buy multiple versions of an item with the intent to send most of them back, creating significant operational and margin drag. In higher-risk cases, merchants face empty-box returns, item swaps, or false damage claims.",
      },
      {
        type: "h3",
        text: "Policy Gaming",
      },
      {
        type: "p",
        text: "Bad actors often learn exactly how a merchant's support, warranty, exchange, or refund process works and then exploit it. If a business has generous policies but no visibility into repeat abuse patterns, those policies can become a liability rather than a growth lever.",
      },
      {
        type: "h3",
        text: "False Claims After Fulfillment",
      },
      {
        type: "p",
        text: "Item never arrived. The box was empty. The product was damaged. Some of these claims are legitimate and need to be handled well. Some are not. The problem is that merchants who lack post-purchase risk intelligence are often forced to make expensive decisions with incomplete information.",
      },
      {
        type: "h3",
        text: "The Real Cost of Fraud Is Larger Than the Chargeback",
      },
      {
        type: "p",
        text: "When merchants think about fraud, they often focus on direct payment loss. But the real cost is much broader. Fraud and abuse create downstream damage across the business:",
      },
      {
        type: "list",
        items: [
          "Lost product and lost revenue",
          "Chargeback fees and dispute overhead",
          "Increased refund volume",
          "Shipping and restocking costs",
          "Higher customer support burden",
          "Lower team efficiency",
          "Increased processor scrutiny and risk exposure",
          "Reduced margins and weaker retention economics",
        ],
      },
      {
        type: "p",
        text: "This is why fraud prevention should not be isolated inside a checkout tool or treated as a narrow risk function. It directly affects profitability, customer experience, operational workload, and long-term merchant health.",
      },
      {
        type: "h3",
        text: "Revenue Protection Requires a Full Lifecycle Approach",
      },
      {
        type: "p",
        text: "At Proficient, we believe merchants need to think about fraud and revenue protection as a connected system rather than a one-time event. The strongest strategy protects revenue across three stages.",
      },
      {
        type: "h3",
        text: "Before the Sale: Prevent Bad Transactions Before They Happen",
      },
      {
        type: "p",
        text: "Revenue protection starts before an order is ever placed. This is where the foundation matters most: merchant setup, payment infrastructure, underwriting alignment, fraud controls, and clear operational policies. The goal is to reduce preventable risk without damaging conversion. That includes:",
      },
      {
        type: "list",
        items: [
          "Structuring payment flows correctly",
          "Using fraud tools and rules that fit the business model",
          "Reducing unnecessary false declines",
          "Building clear policies around shipping, returns, and exchanges",
          "Making sure the merchant account and acquiring setup can support the business long term",
        ],
      },
      {
        type: "p",
        text: "This stage is about creating the right operating environment. A merchant with poor payment infrastructure or weak pre-transaction controls will often feel the effects later in the form of disputes, losses, and processor pressure.",
      },
      {
        type: "h3",
        text: "During the Sale: Optimize Approval, Detect Risk, and Preserve Good Orders",
      },
      {
        type: "p",
        text: "The checkout moment is still critical. Merchants need to identify truly bad transactions while preserving legitimate sales. Overly aggressive fraud settings block good customers; overly permissive settings let bad orders through. During the sale, revenue protection means:",
      },
      {
        type: "list",
        items: [
          "Screening for fraud signals without killing conversion",
          "Optimizing payment routing and acceptance",
          "Reducing false declines",
          "Using human review or layered decisioning where needed",
          "Capturing the right transaction data for downstream dispute defense",
        ],
      },
      {
        type: "p",
        text: "This is not just about stopping fraud. It is about maximizing good revenue while controlling avoidable loss.",
      },
      {
        type: "h3",
        text: "After the Sale: Protect Revenue from Returns Abuse, Claims, and Friendly Fraud",
      },
      {
        type: "p",
        text: "This is the stage too many merchants underinvest in — and where a growing amount of revenue is lost. Post-purchase revenue protection means watching what happens after the payment is approved:",
      },
      {
        type: "list",
        items: [
          "Are there repeat refund abusers?",
          "Are certain customers or order patterns tied to chargebacks?",
          "Are false item-not-received claims increasing?",
          "Are return policies being exploited by repeat offenders?",
          "Are exchanges being used strategically to preserve revenue instead of defaulting to refunds?",
        ],
      },
      {
        type: "p",
        text: "A merchant that lacks visibility here may think they have a fraud problem at checkout when the real issue is happening in returns, support, and disputes. The best merchants are now treating post-purchase operations as a core part of risk management. They understand that customer experience and fraud prevention are no longer separate functions. They overlap.",
      },
      {
        type: "h3",
        text: "Customer Experience and Fraud Prevention Are Now Connected",
      },
      {
        type: "p",
        text: "Fraud prevention used to be viewed as a gatekeeper function, while customer experience was viewed as a growth function. In reality, merchants need both working together.",
      },
      {
        type: "p",
        text: "A merchant that blocks too many legitimate customers creates friction and loses sales. A merchant that makes returns or support painful damages loyalty. But a merchant that gives away refunds, accepts abusive claims, and overlooks repeat policy abuse will slowly erode margin.",
      },
      {
        type: "p",
        text: "The answer is not to become more aggressive across the board. It is to become more intelligent. Merchants need better visibility into who they are serving, how customers behave over time, and where abuse is actually occurring. That means connecting payment performance, fraud signals, chargeback patterns, support behavior, returns data, and operational policies into a more complete picture.",
      },
      {
        type: "h3",
        text: "The Future of Fraud Prevention Is Revenue Protection",
      },
      {
        type: "p",
        text: "The merchants that win over the next several years will not be the ones that simply add another checkout fraud filter. They will be the ones that understand revenue protection as an operating discipline. That means asking bigger questions:",
      },
      {
        type: "list",
        items: [
          "How do we stop bad transactions before they happen?",
          "How do we increase approval rates without increasing fraud?",
          "How do we reduce false declines and preserve legitimate revenue?",
          "How do we limit chargebacks and friendly fraud?",
          "How do we prevent returns, claims, and refund abuse from draining margin?",
          "How do we create a better customer experience while still protecting the business?",
        ],
      },
      {
        type: "p",
        text: "Those questions cannot be answered by one tool alone. They require the right payment infrastructure, the right risk controls, the right post-purchase processes, and the right strategic partner.",
      },
      {
        type: "h3",
        text: "Final Thoughts",
      },
      {
        type: "p",
        text: "Fraud does not end when a payment is approved. In many cases, it has only changed form.",
      },
      {
        type: "p",
        text: "If merchants want to protect revenue in today's environment, they need to stop viewing fraud as a checkout problem and start treating it as a full customer-lifecycle challenge. That means protecting the business before the sale, during the sale, and after the sale.",
      },
      {
        type: "p",
        text: "At Proficient, that is how we think about revenue protection. It is not just about blocking bad transactions. It is about helping merchants build stronger payment infrastructure, improve approval performance, reduce losses, and keep more of the revenue they earn.",
      },
      {
        type: "p",
        text: "Because in modern commerce, the sale is only the beginning of the risk — and protecting revenue requires seeing the full picture.",
      },
    ],
  },
  {
    slug: "commercial-finance-capital-lending-fuel-your-business",
    title: "Adding Fuel to Growth: Capital Lending in Many Forms for the Businesses We Process",
    excerpt:
      "Access to capital is not a separate conversation from payment processing — it is a natural extension of it. Proficient connects businesses to commercial finance partners across every lending category, because growth requires more than a gateway.",
    date: "2026-06-18",
    readTime: "5 min read",
    category: "Finance",
    body: [
      {
        type: "p",
        text: "Every business that processes payments has a cash flow story. Revenue comes in, expenses go out, and somewhere in between sits the capital needed to hire, expand, purchase equipment, manage inventory, or bridge a slow season. Most businesses treat the payment processor and the lending conversation as two entirely separate relationships. They do not have to be.",
      },
      {
        type: "p",
        text: "Proficient works with a network of commercial finance lenders across every major lending category. Because we see the cash flow directly through processing, the businesses we work with are positioned to access capital faster, with better context behind the application, and in the form that actually fits how their business operates.",
      },
      {
        type: "h3",
        text: "Why payment processors and capital belong in the same conversation",
      },
      {
        type: "p",
        text: "A lender evaluating a business application is trying to answer one question: can this business repay? Processing data answers that question more directly than a tax return or a balance sheet. Revenue volume, transaction consistency, seasonality patterns, and chargeback ratios tell a complete story about how a business actually performs — not just how it looked at year-end.",
      },
      {
        type: "p",
        text: "When the processor and the lender are working from the same data, the underwriting conversation is faster and the approval is more accurately sized to what the business can actually support. That is the advantage of sourcing capital through a relationship that already knows your numbers.",
      },
      {
        type: "h3",
        text: "The forms capital takes",
      },
      {
        type: "p",
        text: "Different business needs call for different capital structures. Proficient connects businesses to lenders across all of the following:",
      },
      {
        type: "list",
        items: [
          "Working capital loans — short-term funding for payroll, inventory, and operational gaps between revenue cycles",
          "Revenue-based financing — capital repaid as a percentage of monthly revenue, sized to cash flow rather than a fixed schedule",
          "Equipment financing and leasing — dedicated funding for machinery, technology, vehicles, or infrastructure with the asset itself as collateral",
          "Merchant cash advances — lump-sum advances repaid through a portion of daily card volume, available quickly with minimal documentation",
          "Business lines of credit — revolving access to capital drawn as needed, ideal for businesses with variable or seasonal cash flow",
          "Invoice factoring — immediate liquidity against outstanding receivables, converting unpaid invoices into working capital without waiting on customer payment cycles",
          "SBA-backed programs — government-supported lending for qualified businesses seeking longer terms and lower rates for expansion or acquisition",
          "Commercial real estate financing — purchase, refinance, or construction funding for businesses investing in their physical footprint",
        ],
      },
      {
        type: "h3",
        text: "Matching the capital to the need",
      },
      {
        type: "p",
        text: "The wrong type of capital is expensive even when the rate looks right. A business that takes a 24-month term loan to solve a 90-day cash flow gap is paying interest on money it does not need for most of the loan period. A business that uses a revolving line to fund equipment it will use for seven years is refinancing that equipment every year.",
      },
      {
        type: "p",
        text: "Proficient's role is to match the structure to the actual need. We look at what the capital is for, how long it needs to last, how the repayment will interact with cash flow, and which lending partners have the appetite and the product for that specific situation. The goal is not to find any capital — it is to find the right capital.",
      },
      {
        type: "h3",
        text: "Capital for businesses that processing relationships already support",
      },
      {
        type: "p",
        text: "High-risk merchants, newer businesses, and operators in specialized industries are often told they do not qualify for conventional financing. The same factors that make a business harder to place with a standard processor — product category, revenue concentration, chargeback history — can create friction in a standard lending application.",
      },
      {
        type: "p",
        text: "Because Proficient already works in these categories on the processing side, our lending relationships extend into them as well. A merchant we process for has a documented cash flow history, a cleared underwriting relationship, and a processor that can speak to their business model. That context opens doors that a standalone lending application often cannot.",
      },
      {
        type: "p",
        text: "If you are a business that processes with Proficient — or one that is looking to — the capital conversation is available alongside the processing conversation. Growth requires more than a gateway. We can help with both.",
      },
    ],
  },
  {
    slug: "custom-payment-system-built-around-your-business",
    title: "Your Payment System Should Be Built for Your Business, Not Borrowed from Someone Else's",
    excerpt:
      "Off-the-shelf processors are built for the average merchant. If your business is not average — different pricing models, complex routing needs, high-risk categories, or platform-scale volume — the average solution will cost you.",
    date: "2026-06-18",
    readTime: "5 min read",
    category: "Platform",
    body: [
      {
        type: "p",
        text: "The default payment stack most businesses inherit was designed to onboard as many merchants as possible with as little friction as possible. That is not the same as being designed for your business. When your revenue model is subscription-based, your checkout is embedded in a platform you built, your customer base operates internationally, or your product category sits outside the standard risk matrix — the default stack starts showing its edges.",
      },
      {
        type: "p",
        text: "Proficient designs payment systems from the infrastructure up, built around what your business actually does rather than adapted from what a standard processor already offers.",
      },
      {
        type: "h3",
        text: "What off-the-shelf costs you",
      },
      {
        type: "p",
        text: "An off-the-shelf processor charges what it charges and routes how it routes. You get a merchant account, an API, and a rate schedule that was built for their margin, not yours. If you want a different routing path, a custom risk tolerance, a specific settlement window, or a gateway that integrates directly with software you built — you are working against the product instead of with it.",
      },
      {
        type: "p",
        text: "The cost shows up in basis points you cannot negotiate, authorization rates lower than they should be, development time spent working around API limitations, and eventual termination risk when your volume or category no longer fits the processor's appetite. A payment system that was never designed for your business will eventually make that clear.",
      },
      {
        type: "h3",
        text: "What designing for your business actually looks like",
      },
      {
        type: "p",
        text: "Building a payment system around a specific business starts with understanding what the business does — not at the product level, but at the transaction level. How does money move? Who initiates the payment? What triggers a refund? What does a dispute pattern look like for this category? What volume is expected in month one versus month twelve? What happens at peak?",
      },
      {
        type: "p",
        text: "From that picture, the architecture follows. Proficient builds across four layers that are configured specifically for each business relationship:",
      },
      {
        type: "list",
        items: [
          "Gateway architecture — custom routing logic, failover paths, and network selection based on your transaction profile and volume",
          "Underwriting parameters — risk tolerance and approval criteria set around your actual business model, not a category average",
          "Software and tooling — APIs, webhooks, dashboards, and reporting built to connect with your existing stack rather than requiring you to adapt to ours",
          "Banking lines — direct relationships with acquiring banks selected for your category, volume tier, and geographic footprint",
        ],
      },
      {
        type: "h3",
        text: "Business models that standard processors handle poorly",
      },
      {
        type: "p",
        text: "Some business models are structurally difficult for off-the-shelf processors to support well. Not because the businesses are problematic, but because the standard product was not designed with them in mind.",
      },
      {
        type: "list",
        items: [
          "Subscription and recurring billing businesses with trial-to-paid conversion structures and high cancellation rates",
          "Marketplaces and platforms that split payments across multiple sellers with variable payout timing",
          "High-ticket merchants in services, coaching, or professional categories where individual transaction size is well above standard averages",
          "High-risk verticals — nutraceuticals, telehealth, adult, travel, firearms accessories — where the standard processor relationship ends at the first chargeback spike",
          "Software platforms embedding payments as a feature inside a product they built and own",
          "International merchants processing in multiple currencies with cross-border settlement complexity",
        ],
      },
      {
        type: "p",
        text: "Each of these situations benefits from a payment system designed with the business model in mind from the start — not retrofitted into one that was built for someone else.",
      },
      {
        type: "h3",
        text: "The difference between configuration and architecture",
      },
      {
        type: "p",
        text: "Most processors offer some degree of configuration: you can adjust retry logic, set velocity limits, add descriptor text. Configuration works within the boundaries of the existing system. Architecture sets the boundaries.",
      },
      {
        type: "p",
        text: "When Proficient builds a payment system for a specific business, the routing decisions, the risk parameters, the settlement structure, and the software layer are all built for that business from the start. If the business changes — new product line, new geography, new volume tier — the system can change with it, because the team that built it is still running it.",
      },
      {
        type: "h3",
        text: "Starting the conversation",
      },
      {
        type: "p",
        text: "The starting point is not a form or a rate quote. It is a conversation about what your business does, where it is going, and what the current payment setup is costing you — in fees, in declined transactions, in development time, or in risk.",
      },
      {
        type: "p",
        text: "If you have outgrown the processor you started with, or if you are building something new and want the payment infrastructure designed correctly from the beginning, that is the conversation Proficient is built for.",
      },
    ],
  },
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
