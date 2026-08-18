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
    slug: "medusa-shopify-migration-tool-proficient-payments",
    title: "Medusa Just Made Leaving Shopify Dramatically Easier. Here's What Comes Next.",
    excerpt:
      "Medusa's new AI-powered migration tool transfers your Shopify catalog, inventory, and pricing automatically. The data moves in hours. The payment layer still needs to be built — and that's where the real cost savings live.",
    date: "2026-08-18",
    readTime: "6 min read",
    category: "Platform",
    body: [
      {
        type: "p",
        text: "Medusa published a migration tool on August 6, 2026 that changes the calculus on leaving Shopify. The tool integrates directly into Medusa's MCP server and uses an AI agent to transfer ecommerce data — products, variants, pricing, images, inventory levels, and collections — from a Shopify store to a Medusa project, with minimal manual intervention. What used to take weeks of data mapping and custom scripting can now be handled in a single agent-driven workflow.",
      },
      {
        type: "p",
        text: "For merchants who have been waiting for the migration story to mature before making the move, this is the release worth paying attention to. But a clean data migration is only the first part of the equation. The payment layer — the part of the switch that actually changes what a merchant pays on every transaction — still needs to be handled separately, and it is where most of the long-term cost savings live.",
      },
      {
        type: "h3",
        text: "What the Migration Tool Actually Does",
      },
      {
        type: "p",
        text: "Medusa's migration tool supports two approaches. The first pulls data directly through Shopify's API — an idempotent, resumable process that can be triggered via CLI, scheduled, or run through the admin. It handles full inventory quantities and stores images natively. The second converts a Shopify product export CSV into Medusa's import format, which is faster for one-time migrations but does not include inventory quantities and references the original Shopify CDN URLs rather than re-hosting images.",
      },
      {
        type: "p",
        text: "By default, the agent migrates products, variants, pricing, product images, inventory levels, and collections and categories. Orders and customers can be added through extended configuration. The agent asks which approach to use if it is not specified, builds the necessary flows and customizations, and guides the merchant through verifying the import before going live.",
      },
      {
        type: "p",
        text: "For most mid-size merchants, the custom API method is the cleaner path: inventory quantities transfer correctly, images are re-hosted, and the import is resumable if something interrupts the process. For a merchant that wants to move quickly and can rebuild inventory separately, the CSV method gets catalog data into Medusa in a single pass.",
      },
      {
        type: "h3",
        text: "The Cost Argument Has Always Been Strong. Now the Migration Story Matches It.",
      },
      {
        type: "p",
        text: "Medusa Cloud is priced at approximately one-tenth the cost of Shopify Plus. There are no transaction fees. There are no GMV taxes. A merchant doing $2 million per year on Shopify Plus pays $24,000 annually in platform fees before a single transaction fee is counted. On Medusa Cloud, the equivalent hosting and infrastructure cost is a fraction of that — and the transaction fee structure is determined entirely by the payment processor the merchant chooses, not by the platform.",
      },
      {
        type: "p",
        text: "That last point is where the real money lives. Shopify's transaction fees — 0.5% to 2% on every sale processed outside of Shopify Payments — are a platform-level penalty that compounds with every dollar of revenue. At $2 million in annual volume, a 1% transaction fee is $20,000 per year paid to Shopify for the privilege of not using their payment processor. At $5 million, it is $50,000. None of that converts into anything. It simply leaves.",
      },
      {
        type: "h3",
        text: "Moving the Data Is the Easier Problem",
      },
      {
        type: "p",
        text: "The new migration tool solves the data problem efficiently. Products, variants, pricing, and inventory transfer in hours. What it does not solve is the payment layer — and for merchants paying Shopify transaction fees, or operating in categories where Shopify Payments applies restrictions, the payment layer is where the migration actually pays for itself.",
      },
      {
        type: "p",
        text: "Medusa's payment architecture is built around modular provider plugins. Any payment provider can be dropped in without changing the storefront or the checkout flow. That structure is specifically what allows a direct processor integration — one that routes transactions straight to the acquiring bank, with no consumer-facing gateway in the middle and no platform taking a cut of the volume.",
      },
      {
        type: "h3",
        text: "What Proficient Adds to a Medusa Migration",
      },
      {
        type: "p",
        text: "Proficient builds direct payment integrations for Medusa. A native provider plugin installs via npm, registers in the Medusa config, and handles the full transaction lifecycle — authorization, capture, void, and refund — connected to Proficient's own processing infrastructure. No Shopify checkout. No platform transaction fee. No consumer gateway deciding which product categories it is comfortable approving.",
      },
      {
        type: "list",
        items: [
          "No transaction fees on top of processing costs — the fee structure is between the merchant and the processor, with no platform layer taking a percentage of volume",
          "In-house underwriting for every merchant type — including the categories Shopify Payments and Stripe routinely decline: nutraceuticals, telehealth, subscriptions with trial structures, high-ticket services, adult, and others",
          "Direct acquiring relationships — authorization decisions happen at the processor level, not filtered through a gateway applying its own risk layer on top of card network rules",
          "Configurable routing logic — optimized for approval rate, cost, or category-specific performance depending on the merchant's transaction profile",
          "Capital access wired to processing history — merchants processing through Proficient can access working capital, revenue-based financing, and equipment lending without starting a separate lender conversation from scratch",
        ],
      },
      {
        type: "h3",
        text: "The Sequence That Makes the Move Make Sense",
      },
      {
        type: "p",
        text: "The practical migration sequence for a merchant moving from Shopify to Medusa with Proficient handling payments is straightforward. Set up a Medusa Cloud project. Run the migration tool to transfer catalog and inventory. Integrate the Proficient payment provider plugin. Configure the merchant account with Proficient — which involves underwriting conversations that Shopify never required because Shopify Payments handled it in the background. Build or migrate the storefront. Go live.",
      },
      {
        type: "p",
        text: "The payment infrastructure conversation — underwriting, merchant account structure, gateway architecture — is the part that takes the most lead time, which is why it should start early in the migration process, not after the storefront is built. A merchant who starts the Proficient conversation at the same time they start the Medusa setup can have payment infrastructure ready before the migration is complete.",
      },
      {
        type: "h3",
        text: "Who This Migration Story Is Right For",
      },
      {
        type: "p",
        text: "The Medusa migration tool lowers the effort threshold for a move that was already financially justified for a significant share of Shopify merchants. The merchants for whom this makes the most immediate sense are those already feeling the constraints:",
      },
      {
        type: "list",
        items: [
          "Merchants paying Shopify transaction fees every month because their category or volume structure does not fit Shopify Payments",
          "Merchants who need checkout customization that Shopify's APIs do not support",
          "Merchants in restricted categories who want a processing relationship built around their actual business model",
          "Merchants approaching the revenue scale where platform fees are a visible line item on the P&L",
          "Merchants building for B2B, marketplaces, subscriptions, or other workflows that Shopify's extension model handles poorly",
        ],
      },
      {
        type: "p",
        text: "For those merchants, Medusa's migration tool removes the last significant friction point in the switch — the catalog transfer. The platform fee savings start on the day the merchant goes live on Medusa. The transaction fee savings start the moment the first order processes through Proficient instead of Shopify Payments.",
      },
      {
        type: "p",
        text: "If you are evaluating a Shopify migration and want to understand what the payment infrastructure looks like on the other side, that is the conversation to start at info@proficient.tech. We scope the merchant account structure, advise on the Medusa payment integration, and give an honest assessment of whether the migration economics make sense for the specific business.",
      },
    ],
  },
  {
    slug: "mca-vs-accounts-receivable-vs-factoring-comparison",
    title: "MCA, Accounts Receivable Financing, and Factoring: What Each Is, When Each Fits, and Why Most Businesses End Up in the Wrong One",
    excerpt:
      "Merchant cash advances, AR lines, and factoring are three distinct capital structures that solve three distinct cash flow problems. The businesses that end up in the wrong product usually got there because the lender they talked to only offered one. Proficient offers all three.",
    date: "2026-08-06",
    readTime: "7 min read",
    category: "Finance",
    body: [
      {
        type: "p",
        text: "When a business needs capital quickly, the first product it finds is usually the product it ends up with — not because it was the right fit, but because a lender pitched it and the business did not know to ask for something different. Merchant cash advances, accounts receivable financing, and factoring all solve cash flow problems. They solve different cash flow problems, through different structures, with different costs and tradeoffs.",
      },
      {
        type: "p",
        text: "Most lenders offer one. A merchant cash advance shop will structure everything as an MCA. A factoring company will structure everything as a factored receivable. Neither is wrong, exactly — but neither is necessarily right for the business in front of them.",
      },
      {
        type: "p",
        text: "Understanding the difference between these three structures is how a business avoids paying for the wrong product.",
      },
      {
        type: "h3",
        text: "Merchant Cash Advance (MCA)",
      },
      {
        type: "p",
        text: "An MCA is not a loan. It is a purchase of future revenue. A lender advances a lump sum today in exchange for a fixed amount of future sales, collected as a percentage of daily or weekly card volume — or, in some structures, total business revenue. There is no fixed term, no fixed monthly payment, and no interest rate in the traditional sense. The cost is expressed as a factor rate: a 1.3 factor rate on a $100,000 advance means the business repays $130,000 total, collected automatically as a percentage of sales until the total is reached.",
      },
      {
        type: "p",
        text: "Because repayment scales with revenue, slower months produce smaller payments and faster months produce larger ones. The advance does not require collateral in the traditional sense — the future revenue itself is the collateral. Approval is based primarily on processing volume and consistency, not credit score or financial statements.",
      },
      {
        type: "p",
        text: "MCAs fund quickly — often within one to two business days — with minimal documentation. That speed and accessibility make them the default product for businesses that need capital fast, have limited credit history, or operate in categories that traditional lenders approach cautiously.",
      },
      {
        type: "p",
        text: "The tradeoff is cost. Factor rates of 1.2 to 1.5 — sometimes higher for shorter-history or higher-risk profiles — translate to effective annual rates that are meaningfully higher than conventional debt. For a business that can qualify for an AR line or a factoring arrangement, an MCA is almost always the more expensive path. For a business that cannot, it may be the only available path.",
      },
      {
        type: "h3",
        text: "Accounts Receivable Financing",
      },
      {
        type: "p",
        text: "Accounts receivable financing is a revolving credit line secured by outstanding invoices. The business pledges its receivables as collateral and draws against an approved borrowing base — typically 75% to 90% of eligible invoices — as needed. It is debt: the business retains ownership of its receivables, continues to collect from customers directly, and repays the drawn balance as invoices are paid.",
      },
      {
        type: "p",
        text: "The structure is well-suited to B2B businesses with recurring, creditworthy customers and predictable invoice cycles. As receivables grow, the available credit grows with them. As invoices are collected, the balance is repaid and the capacity is restored. Unlike a term loan, an AR line is not sized to a specific need — it scales with the business.",
      },
      {
        type: "p",
        text: "The cost is interest on the outstanding drawn balance, which is typically lower than an MCA factor rate on an annualized basis. Setup involves an underwriting process — lenders evaluate receivables quality, customer creditworthiness, and business financials — so it is not as fast as an MCA. But for a business with strong receivables that qualifies, it is usually the most efficient revolving capital structure available.",
      },
      {
        type: "p",
        text: "The key requirement: the business needs to have real B2B receivables. AR financing does not work for consumer businesses, businesses paid immediately at point of sale, or businesses with a single customer who represents most of the receivables balance.",
      },
      {
        type: "h3",
        text: "Factoring",
      },
      {
        type: "p",
        text: "Factoring is the sale of receivables, not a loan against them. A business sells its outstanding invoices to a factor at a discount — typically receiving 75% to 95% of the invoice value immediately. The factor then owns the invoices, collects directly from the business's customers, and releases the remaining balance (minus fees) once the invoice is paid.",
      },
      {
        type: "p",
        text: "Because the business is selling an asset rather than borrowing against it, factoring does not create debt on the balance sheet. The cost is a discount rate — typically 1.5% to 3% per 30 days — applied to the invoice value. Funding is fast: same-day to 24 hours in most cases once the relationship is established.",
      },
      {
        type: "p",
        text: "The approval decision in factoring is based primarily on the creditworthiness of the business's customers, not the business itself. A company with a short history or imperfect credit can often factor invoices that its customers — large, creditworthy companies — are obligated to pay. That makes factoring available to younger businesses and industries where customer payment terms are long.",
      },
      {
        type: "p",
        text: "The structural difference from AR financing is important: in factoring, the factor collects directly from customers. The business's customer now knows their invoice was factored — in some structures, they pay the factor directly. For most B2B relationships, this is not a problem. For some, it matters. Businesses with sensitive customer relationships that need to remain confidential typically prefer an AR line, which keeps collections entirely in-house.",
      },
      {
        type: "h3",
        text: "The Direct Comparison",
      },
      {
        type: "list",
        items: [
          "What secures it — MCA: future revenue stream. AR line: receivables pledged as collateral. Factoring: receivables sold outright.",
          "Who holds the debt — MCA: the business (advance to be repaid). AR line: the business. Factoring: no debt — asset sold.",
          "Repayment structure — MCA: automatic percentage of daily or weekly sales. AR line: as invoices are collected by the business. Factoring: factor collects from customers directly.",
          "Typical cost — MCA: 1.2 to 1.5 factor rate. AR line: interest on drawn balance, generally lowest annualized cost. Factoring: 1.5% to 3% per 30 days on invoice value.",
          "Speed to fund — MCA: 1 to 2 business days. AR line: 1 to 3 weeks to set up, then fast draws. Factoring: same-day to 24 hours once established.",
          "Business type — MCA: any business with consistent revenue; strong fit for B2C and card-heavy operations. AR line: B2B businesses with recurring invoices. Factoring: B2B businesses with slow-paying customers.",
          "Approval basis — MCA: processing volume and consistency. AR line: receivables quality and business financials. Factoring: customer creditworthiness.",
          "Collections — MCA: business collects from customers normally. AR line: business collects from customers normally. Factoring: factor collects from customers.",
          "Balance sheet treatment — MCA: liability. AR line: liability. Factoring: off-balance-sheet (sale of asset).",
        ],
      },
      {
        type: "h3",
        text: "When to Use Each",
      },
      {
        type: "p",
        text: "An MCA makes sense when the business needs capital quickly, processes meaningful card volume or consistent revenue, and either does not qualify for an AR line or factoring or needs funding faster than those structures allow. It is also the right structure when repayment flexibility matters — a business with seasonal revenue cycles may prefer a repayment that moves with sales rather than a fixed obligation.",
      },
      {
        type: "p",
        text: "Accounts receivable financing makes sense for a B2B business with a steady flow of invoices, creditworthy customers, and a need for ongoing revolving access to capital. It is the most cost-efficient structure for businesses that qualify, and the revolving nature means it does not need to be re-underwritten every time the business needs to draw.",
      },
      {
        type: "p",
        text: "Factoring makes sense when the business has large invoices with long payment terms, customers who pay slowly but reliably, and a tolerance for the factor collecting directly. It is particularly valuable for younger businesses that cannot qualify for a conventional AR line but have strong customer relationships underlying their receivables — and for businesses that do not want to carry the debt on their balance sheet.",
      },
      {
        type: "h3",
        text: "The Reason Businesses End Up in the Wrong Product",
      },
      {
        type: "p",
        text: "The most common reason a business takes an MCA when it should have factored — or takes a factoring arrangement when an AR line would have been cheaper — is that the lender it talked to only offered one product. An MCA provider has no incentive to explain that a factoring relationship would be more efficient. A factoring company has no mechanism to offer a revolving AR line. The business does not know to shop differently because it does not know the products are different.",
      },
      {
        type: "p",
        text: "The result is predictable: businesses in expensive products they did not need to be in, paying factor rates on capital that could have been accessed through a revolving line at a fraction of the cost, or carrying unnecessary debt when a factoring sale would have kept the balance sheet cleaner.",
      },
      {
        type: "h3",
        text: "What Proficient Offers Across All Three",
      },
      {
        type: "p",
        text: "Proficient works with businesses on merchant cash advances, accounts receivable financing, and factoring — including recourse, non-recourse, and international factoring structures. The starting point is the business's actual situation: what it needs the capital for, what assets it has to work with, how repayment interacts with its cash flow cycle, and what the customers on the other side of the receivables look like.",
      },
      {
        type: "p",
        text: "For businesses that process payments through Proficient, that conversation is shorter — processing history, revenue consistency, and transaction patterns are already known, which accelerates underwriting across all three structures and typically results in better sizing.",
      },
      {
        type: "p",
        text: "For businesses approaching the conversation cold, the same framework applies: assess the situation, identify the right structure, match to the right lending relationship. Not every business needs an MCA. Not every business qualifies for an AR line. The goal is to find the structure that fits — not the one the lender happened to be selling that day.",
      },
      {
        type: "p",
        text: "If you are trying to understand which structure fits your business, that is the conversation to start at info@proficient.tech.",
      },
    ],
  },
  {
    slug: "medusa-proficient-vs-shopify-plus-headless",
    title: "Medusa + Proficient vs. Shopify Plus Headless: A Straight Comparison for Operators Who Need Payment Control",
    excerpt:
      "Shopify Headless and Medusa solve the same surface-level problem — custom commerce — but they represent fundamentally different ownership models. For most merchants who need control over payments, categories, or checkout, the distinction is the entire decision.",
    date: "2026-07-29",
    readTime: "8 min read",
    category: "Platform",
    body: [
      {
        type: "p",
        text: "The pitch for headless commerce sounds the same regardless of which platform it comes from: own your storefront, build what you want, decouple the frontend from the backend. Shopify Plus Headless and Medusa both make that promise. The difference is which parts of the promise they actually keep.",
      },
      {
        type: "p",
        text: "Shopify Headless gives merchants a custom storefront on top of Shopify's commerce engine — one that Shopify hosts, controls, and sets the rules for. Medusa gives merchants a customizable storefront and a customizable commerce engine. The merchant controls both. That distinction looks small on a feature comparison slide. In practice, it determines whether a merchant can use the processor they need, build the checkout they designed, and operate in the product categories their business actually serves.",
      },
      {
        type: "h3",
        text: "What Shopify Plus Headless Actually Is",
      },
      {
        type: "p",
        text: "Shopify describes Hydrogen as its headless toolkit and Oxygen as its global storefront hosting layer. Merchants can also build on Next.js or another frontend framework. But the commerce engine — products, orders, customers, inventory, checkout — runs on Shopify's infrastructure, under Shopify's policies, through Shopify's checkout architecture.",
      },
      {
        type: "p",
        text: "What that means operationally: the storefront is yours. The commerce engine is not. Checkout customization is still gated by what Shopify exposes through its APIs, and the checkout page itself remains under Shopify's control. Payment processing runs through Shopify's ecosystem — third-party processors are permitted, but Shopify's rules and transaction fees apply. The merchant has decoupled the presentation layer. Everything underneath it belongs to Shopify.",
      },
      {
        type: "h3",
        text: "What Medusa Actually Is",
      },
      {
        type: "p",
        text: "Medusa is an open-source headless commerce engine. It handles the backend of a commerce operation — product catalog, inventory, orders, fulfillment, promotions, customer data — through APIs that any frontend can connect to. The storefront, the checkout, the admin interface, the data model: all of it is the merchant's to build, host, and modify.",
      },
      {
        type: "p",
        text: "Medusa's payment architecture is built around modular provider plugins. A payment provider manages authorization, capture, voids, refunds, and saved methods — and any provider can be swapped in without changing the storefront or the checkout flow. That modular design is specifically what makes Medusa structurally compatible with a processor-direct integration like Proficient's, rather than requiring the merchant to route through a consumer-facing gateway.",
      },
      {
        type: "p",
        text: "Medusa Cloud reduces the operational burden significantly by providing managed deployment, databases, Redis, storage, scaling, and storefront hosting — while keeping the code and data exportable. Medusa currently advertises a 0% GMV platform fee. Hosting and development still cost money, but the merchant is not paying a percentage of every sale to the platform.",
      },
      {
        type: "h3",
        text: "The Direct Comparison",
      },
      {
        type: "p",
        text: "Across the dimensions that matter most for merchants evaluating the two platforms:",
      },
      {
        type: "list",
        items: [
          "Commerce backend — Shopify Plus Headless: Shopify-hosted and controlled. Medusa: open-source, extensible, merchant-owned.",
          "Checkout — Shopify Plus Headless: primarily Shopify's checkout, limited by what its APIs expose. Medusa: fully customizable, built and owned by the merchant.",
          "Payments — Shopify Plus Headless: closely tied to Shopify's payment ecosystem; third-party processors permitted but subject to transaction fees. Medusa: processor-agnostic payment modules; integrate NMI or any other provider without a platform fee.",
          "Source code ownership — Shopify Plus Headless: merchant owns the storefront code, not Shopify's core platform. Medusa: merchant owns storefront and backend code.",
          "Hosting — Shopify Plus Headless: Shopify hosts the backend; Oxygen can host Hydrogen. Medusa: Medusa Cloud or self-hosted.",
          "Platform fee — Shopify Plus Headless: subscription plus payment and transaction-related costs. Medusa: 0% GMV platform fee; hosting and development costs apply.",
          "Vendor lock-in — Shopify Plus Headless: moderate to high. Medusa: low.",
          "Custom business logic — Shopify Plus Headless: limited to Shopify's extension model. Medusa: deep backend, workflow, and data-model customization.",
          "Specialized industries — Shopify Plus Headless: subject to Shopify and processor policies. Medusa: greater freedom, subject to the chosen bank and processor.",
          "Deployment speed — Shopify Plus Headless: generally faster. Medusa: more engineering work required.",
          "Operational burden — Shopify Plus Headless: lower. Medusa: higher, especially when self-hosted.",
        ],
      },
      {
        type: "h3",
        text: "Where Shopify Plus Wins",
      },
      {
        type: "p",
        text: "Shopify Plus is the stronger choice when the merchant wants proven enterprise infrastructure without the engineering investment to build and maintain it. The administrative experience is polished and merchant-friendly. International selling through Shopify Markets is mature and well-integrated. The app ecosystem, agency network, and third-party integrations are large enough that most standard functionality already exists. Shopify's checkout conversion is well-optimized.",
      },
      {
        type: "p",
        text: "For an established mainstream brand that processes through conventional channels, sells in standard categories, and wants a custom storefront without rebuilding the entire commerce operation underneath it — Shopify Plus Headless delivers that outcome faster and with less infrastructure responsibility.",
      },
      {
        type: "h3",
        text: "Where Medusa Wins",
      },
      {
        type: "p",
        text: "Medusa is stronger when the merchant needs something Shopify's architecture structurally cannot provide:",
      },
      {
        type: "list",
        items: [
          "Direct control over the checkout and payment layer — not limited to what Shopify exposes through its APIs",
          "A specific acquiring relationship: NMI, a specialized processor, or a direct banking line that Shopify's transaction fee structure would penalize",
          "Custom authorization and capture rules — subscription trial logic, B2B net terms, multi-vendor split payments, or anything outside the standard card-present model",
          "Unique business workflows: B2B ordering, marketplace payouts, subscription management, or fulfillment logic that does not fit Shopify's extension model",
          "Full ownership of the backend code and commerce data — not just the storefront",
          "Freedom from Shopify's platform policies and the transaction fee penalty for not using Shopify Payments",
          "A path for product categories that Shopify Payments or Stripe may not comfortably support: nutraceuticals, telehealth, high-ticket coaching, adult content, certain subscription structures",
        ],
      },
      {
        type: "h3",
        text: "The Payment Distinction — Why Headless Shopify Is Not Processor-Agnostic",
      },
      {
        type: "p",
        text: "This is the point most comparisons miss. Going headless on Shopify does not make a merchant processor-agnostic. The storefront is decoupled from the commerce engine — but the merchant is still operating through Shopify's checkout architecture, still subject to Shopify's payment policies, and still paying Shopify's transaction fees on third-party processors. A custom frontend changes what the customer sees. It does not change what happens when they click pay.",
      },
      {
        type: "p",
        text: "Medusa separates all three layers: the storefront, the commerce engine, and the payment provider. Each can be replaced independently. That architecture is what makes a processor-direct integration possible — and it is the reason Proficient built its integration on Medusa rather than on any Shopify surface.",
      },
      {
        type: "h3",
        text: "What Proficient Adds to the Medusa Stack",
      },
      {
        type: "p",
        text: "A Medusa storefront with Proficient as the payment provider connects directly to Proficient's processing infrastructure. There is no consumer-facing gateway in the middle, no Shopify transaction fee on top of processing costs, and no automated risk filter from a platform that does not know the merchant's business model.",
      },
      {
        type: "list",
        items: [
          "Transactions route from Medusa directly to Proficient's acquiring relationships — authorization decisions happen at the processor level",
          "In-house underwriting covers the categories Shopify Payments and Stripe routinely decline: nutraceuticals, telehealth, subscriptions with trial structures, high-ticket services, and others",
          "Routing logic is configurable at the processor level — optimized for approval rate, cost, or category-specific performance",
          "No per-transaction gateway fee stacked on top of interchange and processor margin",
          "The merchant account and the commerce platform are owned by the same relationship — when the business changes, the payment infrastructure can change with it",
        ],
      },
      {
        type: "h3",
        text: "The Decision Framework",
      },
      {
        type: "p",
        text: "The right answer depends on what the business actually needs. If the primary goal is a custom-looking storefront with enterprise reliability and a fast implementation, Shopify Plus Headless achieves that. If the primary goal is control — over payments, checkout, product categories, or the infrastructure underneath the commerce operation — Shopify Headless does not solve the problem, because the constraint is not the storefront. It is the platform beneath it.",
      },
      {
        type: "p",
        text: "Merchants who have been declined by Shopify Payments, who are paying transaction fees on every sale as a penalty for using a different processor, who need a checkout flow that Shopify's APIs do not support, or who are building for a category that a consumer-facing gateway approaches cautiously — those are not problems a headless Shopify frontend solves. Those are problems that require a different commerce engine underneath, and a payment partner that was built for the merchant's specific business model.",
      },
      {
        type: "p",
        text: "If that is the situation, the Medusa and Proficient combination is the architecture worth evaluating. The storefront, the commerce engine, and the payment infrastructure are all owned by the merchant — not borrowed from a platform that can reprice, restrict, or terminate any of it.",
      },
      {
        type: "p",
        text: "Start that conversation at info@proficient.tech.",
      },
    ],
  },
  {
    slug: "shopify-to-medusa-migration-case-proficient",
    title: "The Case for Leaving Shopify: Why Medusa.js and Proficient Change the Math",
    excerpt:
      "Shopify works until it doesn't — transaction fees on every sale, Shopify Payments rejecting entire product categories, checkout you cannot touch, and a platform that owns your customer relationship as much as you do. Medusa.js gives you the stack back. Proficient handles payments, underwriting, and the migration.",
    date: "2026-07-23",
    readTime: "7 min read",
    category: "Platform",
    body: [
      {
        type: "p",
        text: "Shopify is an excellent product for a specific merchant: one selling physical goods in a conventional category, processing through Shopify Payments, and growing at a pace where platform constraints have not yet become a ceiling. For that merchant, the tradeoffs are invisible. The fees are a cost of doing business. The restrictions on checkout customization are somebody else's problem.",
      },
      {
        type: "p",
        text: "For every other merchant — the one in a restricted category, the one paying 0.5 to 2 percent transaction fees because Shopify Payments won't approve them, the one whose checkout flow is limited by what Shopify exposes through its APIs, the one building a brand that needs to own its customer experience end to end — the platform is a ceiling, not a foundation.",
      },
      {
        type: "p",
        text: "This is the conversation Proficient has regularly with merchants who have outgrown the platform they started on. It is not a case against Shopify. It is a case for understanding exactly what you are paying for — and whether the cost still makes sense.",
      },
      {
        type: "h3",
        text: "What Shopify Actually Costs",
      },
      {
        type: "p",
        text: "The advertised monthly plan cost is the smallest part of the bill. The real Shopify cost structure for a merchant not using Shopify Payments looks like this:",
      },
      {
        type: "list",
        items: [
          "Transaction fees: 0.5 to 2 percent on every sale, every month, forever — on top of whatever your payment processor charges",
          "App fees: the functionality Shopify does not include out of the box is sold back to you through its app marketplace, often at $50 to $200 per month per app",
          "Theme and storefront constraints: meaningful design and UX control requires either a developer working within Shopify's Liquid templating system or a costly headless Shopify setup that still keeps you on Shopify's infrastructure",
          "Checkout lock-in: Shopify controls the checkout page. Custom checkout flows, branded experiences, and non-standard purchase structures require Shopify Plus at $2,000 per month minimum",
          "Category restrictions: Shopify Payments does not support nutraceuticals, certain supplements, adult products, firearms accessories, high-ticket coaching, certain travel products, and dozens of other legitimate categories — forcing merchants into third-party processors and the transaction fee penalty that comes with them",
        ],
      },
      {
        type: "p",
        text: "For a merchant doing $500,000 per year in revenue, a 1.5 percent transaction fee is $7,500 annually paid directly to Shopify for the privilege of using a non-Shopify processor — before processing fees, app fees, or plan costs. At $2 million in revenue, that number is $30,000. It does not compound into anything. It just leaves.",
      },
      {
        type: "h3",
        text: "What Medusa.js Is",
      },
      {
        type: "p",
        text: "Medusa.js is an open-source headless commerce engine. It handles the backend of an e-commerce operation — product catalog, inventory, orders, fulfillment, customer data, promotions — through a set of APIs that any frontend can connect to. The storefront, the checkout, the customer account experience: all of it is yours to build however you want.",
      },
      {
        type: "p",
        text: "There are no transaction fees. There is no app marketplace where core functionality is sold back to you. There is no checkout page that Medusa controls. You own the infrastructure, the data, and the customer relationship in a way that a SaaS platform structurally cannot allow.",
      },
      {
        type: "p",
        text: "Medusa 2.0 introduced a modular architecture that makes the platform genuinely production-grade for complex merchant operations — multi-region pricing, advanced inventory management, flexible fulfillment, and a plugin ecosystem built around open standards rather than a proprietary marketplace.",
      },
      {
        type: "h3",
        text: "The Payment Problem — and Why Proficient Solves It",
      },
      {
        type: "p",
        text: "The most common objection to leaving Shopify is payments. Shopify Payments, for all its restrictions, is simple: it is already there, it is already set up, and the merchant does not have to think about it. Moving to Medusa means choosing a payment provider, integrating it, and getting the merchant account set up separately.",
      },
      {
        type: "p",
        text: "Proficient built a native Medusa.js payment provider plugin that routes transactions directly to Proficient's processing infrastructure. It installs via npm, handles the full transaction lifecycle, and requires no changes to the storefront or checkout UI.",
      },
      {
        type: "p",
        text: "More importantly: Proficient underwrites merchant accounts in-house, with direct banking lines. The merchants Shopify Payments rejects — the ones paying transaction fees every month as a penalty — are the merchants Proficient was built to approve. Moving from Shopify to Medusa with Proficient handling payments removes the transaction fee, removes the category restriction, and gives the merchant a processing infrastructure built around their business.",
      },
      {
        type: "h3",
        text: "The Benefits of Making the Move",
      },
      {
        type: "list",
        items: [
          "No platform transaction fees — 0.5 to 2 percent saved on every sale, compounding at scale",
          "Full checkout ownership — design, copy, flow, upsells, and purchase structure are entirely yours",
          "No category restrictions — Proficient underwrites the product categories Shopify Payments declines",
          "Storefront freedom — build in Next.js, Nuxt, Remix, or any frontend framework without a theme system imposing structure",
          "Direct payment infrastructure — one npm install connects Medusa to Proficient's banking lines",
          "Better data ownership — customer, order, and transaction data lives in your infrastructure, not a platform you are renting",
          "Lower total cost at scale — Medusa is open source; the cost of infrastructure replaces the cost of platform fees rather than adding to them",
          "Access to business capital — Proficient's merchant accounts include access to capital tied directly to processing history, available to Medusa merchants on the same terms",
        ],
      },
      {
        type: "h3",
        text: "What the Migration Actually Looks Like",
      },
      {
        type: "p",
        text: "A Shopify-to-Medusa migration is a technical project, not a copy-paste. The backend data — products, customers, orders, inventory — migrates through standard export and import processes. The storefront is rebuilt in whatever frontend framework the merchant or their development team prefers. The payment integration is a single Proficient provider plugin.",
      },
      {
        type: "p",
        text: "The realistic scope for a mid-size merchant with an established catalog and customer base is four to twelve weeks of development work, depending on the complexity of the storefront and any custom functionality that was handled by Shopify apps. Proficient consults on the payment and infrastructure side of the migration — scoping the gateway architecture, setting up the merchant account, and ensuring the payment layer is live and tested before the storefront goes public.",
      },
      {
        type: "p",
        text: "The merchants for whom this makes the most sense are those who are already feeling the platform constraints: paying transaction fees, hitting checkout customization limits, operating in a restricted category, or approaching the revenue scale where the platform fees are a line item worth examining.",
      },
      {
        type: "h3",
        text: "When to Have This Conversation",
      },
      {
        type: "p",
        text: "The right time to evaluate a platform migration is before the cost of staying is obvious — not after years of transaction fees that could have funded the development work several times over. Merchants who do the math at $500,000 in annual revenue find the decision much easier than those who wait until $3 million and are calculating how much they have already paid.",
      },
      {
        type: "p",
        text: "Proficient offers a free consultation for merchants evaluating the move. We scope the payment infrastructure, advise on merchant account structure, and give an honest assessment of whether the migration economics make sense for the specific business — without selling a project that is not justified.",
      },
      {
        type: "p",
        text: "If you are processing on Shopify and want to understand what leaving the platform would actually cost and save, that is the conversation to start at info@proficient.tech.",
      },
    ],
  },
  {
    slug: "business-capital-for-payment-processing-merchants",
    title: "Your Sales History Is Already an Approval. You Just Haven't Used It Yet.",
    excerpt:
      "Cash flow gaps, equipment needs, inventory timing, hiring — the same problems slow every growing business down. If you are already processing payments with Proficient, you have something most borrowers spend months trying to prove: a live record of what your business actually earns.",
    date: "2026-07-23",
    readTime: "5 min read",
    category: "Finance",
    body: [
      {
        type: "p",
        text: "Every merchant hits the same walls. A seasonal spike is coming and inventory needs to be bought now. A piece of equipment breaks and the replacement cannot wait for a bank to schedule an underwriting call. A marketing campaign that would double customer acquisition is sitting on hold because the cash is not there yet. A new hire that would free up 20 hours a week goes unfilled because payroll is already tight.",
      },
      {
        type: "p",
        text: "These are not signs of a failing business. They are signs of a growing one. The problem is that traditional financing was not built for the way merchants actually operate — it was built for businesses that can wait weeks for an approval, survive a credit pull, and produce two years of audited financials on demand.",
      },
      {
        type: "p",
        text: "Proficient Business Capital is different because it starts from a different place entirely.",
      },
      {
        type: "h3",
        text: "The Problems Merchants Face Every Day",
      },
      {
        type: "p",
        text: "Before talking about capital, it helps to name what actually stops merchants from growing:",
      },
      {
        type: "list",
        items: [
          "Cash flow gaps between when expenses hit and when revenue arrives",
          "Equipment failures or upgrades that cannot wait for a slow approval process",
          "Marketing and customer acquisition campaigns that require upfront spend",
          "Inventory that needs to be purchased ahead of demand — before the sales exist to fund it",
          "Hiring and expansion that is ready to happen but the cash is not",
          "Bank timelines that turn a two-week opportunity into a missed one",
        ],
      },
      {
        type: "p",
        text: "None of these problems are signs of poor management. They are the normal friction of building a business in real time. The merchants who solve them faster grow faster.",
      },
      {
        type: "h3",
        text: "You Are Already Processing. That Data Already Exists.",
      },
      {
        type: "p",
        text: "If you are processing payments through Proficient, you are already generating the data that most lenders spend months trying to verify. Your sales volume, consistency, seasonality, and trajectory are not things you need to prove — they are things we can already see.",
      },
      {
        type: "p",
        text: "Business Capital uses that processing history to unlock funding without the paperwork, credit checks, or waiting periods that make bank loans impractical for merchants operating on real business timelines. The approval is not based on what a credit bureau says about you from three years ago. It is based on what your business is actually doing right now.",
      },
      {
        type: "h3",
        text: "How It Works",
      },
      {
        type: "p",
        text: "The process is designed to stay out of the way of running your business:",
      },
      {
        type: "list",
        items: [
          "Pre-approved offer in your portal — your loan amount is calculated from your actual sales history, not a generic formula",
          "Simple application — complete in just a few clicks, no credit checks, no lengthy paperwork",
          "Fast funding — accepted offers typically fund within 1 to 2 business days",
          "Automatic repayment — paid back as a percentage of your daily sales, so payments scale with revenue instead of hitting at a fixed date regardless of how business is going",
          "One simple fixed fee — no interest, no late fees, no compounding surprises",
        ],
      },
      {
        type: "h3",
        text: "When Merchants Use It",
      },
      {
        type: "p",
        text: "Business Capital tends to be most useful at specific moments in the business cycle:",
      },
      {
        type: "list",
        items: [
          "Seasonal peaks — buying inventory, staffing up, or running promotions before the revenue wave arrives",
          "Growth phases — opening a second location, adding a product line, or scaling a channel that is already working",
          "Equipment or infrastructure needs — replacing or upgrading tools that the business runs on",
          "After onboarding — new merchants who see early traction and want to move faster",
          "During account reviews — when expansion conversations naturally surface the capital question",
        ],
      },
      {
        type: "h3",
        text: "Capital That Fits How You Actually Run a Business",
      },
      {
        type: "p",
        text: "Traditional financing asks you to slow down so it can catch up. It requires documentation of what you have already done, evaluated through a process that takes longer than most business decisions have to wait.",
      },
      {
        type: "p",
        text: "Business Capital through Proficient is the opposite. Because the payment relationship already exists, the data already exists, and the underwriting can move at the speed the business actually requires. No disruption to operations. No invasive process. Just access to capital that is already tied to how well your business is performing.",
      },
      {
        type: "p",
        text: "If you are processing payments with Proficient and want to know what your pre-approved offer looks like, the conversation starts with your account team — or reach us directly at info@proficient.tech.",
      },
    ],
  },
  {
    slug: "commercial-finance-full-suite-proficient-lending-partners",
    title: "The Full Spectrum of Commercial Finance: What Proficient's Lending Partners Can Do",
    excerpt:
      "Most businesses know about bank loans. Far fewer know about the non-bank commercial financing options that cover the gaps — asset-based lines, factoring, purchase-order funding, equipment capital, and growth financing up to $40 million. Proficient's lending partners offer all of it.",
    date: "2026-07-08",
    readTime: "6 min read",
    category: "Finance",
    body: [
      {
        type: "p",
        text: "Bank financing is designed for businesses that already look like they do not need it: strong balance sheets, clean credit, predictable cash flow, and assets that fit a conventional underwriting box. The businesses that most need capital are often the ones that do not fit that profile.",
      },
      {
        type: "p",
        text: "Proficient's commercial finance partner network operates outside the bank model. Non-bank lenders with facilities ranging from $50,000 to $40 million, advance rates of 75% to 95% on eligible assets, same-day funding in certain cases, and no monthly minimums — structured around how businesses actually operate rather than how a bank wants them to look on paper.",
      },
      {
        type: "p",
        text: "Here is the full suite of what is available through our lending relationships.",
      },
      {
        type: "h3",
        text: "Asset-Based Revolving Lines of Credit",
      },
      {
        type: "p",
        text: "Senior-secured revolving facilities backed primarily by accounts receivable and inventory. Unlike a traditional term loan, a revolving line scales with the business — as receivables and inventory grow, the available credit grows with them. This is one of the most flexible structures available for businesses with strong asset bases but variable or seasonal revenue cycles.",
      },
      {
        type: "p",
        text: "Asset-based lending extends this further: flexible credit secured by a combination of receivables, inventory, and equipment. Businesses that carry multiple asset types can borrow against the full collateral pool rather than being limited to one category.",
      },
      {
        type: "h3",
        text: "Factoring",
      },
      {
        type: "p",
        text: "Factoring converts unpaid invoices into immediate working capital without taking on debt. A business sells its receivables to a lender at a discount and receives cash now rather than waiting 30, 60, or 90 days for customers to pay.",
      },
      {
        type: "p",
        text: "Proficient's lending partners offer the full range of factoring structures:",
      },
      {
        type: "list",
        items: [
          "Recourse factoring: the business retains credit risk if the customer does not pay",
          "Non-recourse factoring: the lender absorbs the credit risk on approved invoices",
          "International factoring: cross-border receivables financing for businesses with overseas customers",
          "Receivables management: collections, credit protection, and ongoing receivables administration as part of the facility",
        ],
      },
      {
        type: "p",
        text: "For businesses that invoice other businesses and carry significant outstanding receivables at any given time, factoring can replace a working capital loan entirely — turning the receivables ledger itself into a liquidity facility.",
      },
      {
        type: "h3",
        text: "Inventory Financing",
      },
      {
        type: "p",
        text: "For businesses where the asset is inventory rather than receivables, inventory financing uses eligible stock as collateral to fund operations. Retailers, distributors, and manufacturers that carry significant inventory between purchase and sale can borrow against that inventory rather than waiting for it to convert to cash through sales.",
      },
      {
        type: "h3",
        text: "Purchase-Order Financing",
      },
      {
        type: "p",
        text: "Purchase-order financing solves a specific problem: a business has a firm order from a creditworthy customer but does not have the cash to produce or source the product to fulfill it. The lender finances the cost of goods or production tied directly to the confirmed order, the order is fulfilled, and the lender is repaid when the customer pays.",
      },
      {
        type: "p",
        text: "This structure is purpose-built for businesses that win orders larger than their current working capital can support — manufacturers, importers, distributors, and product companies that need to close the gap between receiving an order and receiving payment.",
      },
      {
        type: "h3",
        text: "Equipment Financing",
      },
      {
        type: "p",
        text: "Equipment financing covers both directions: acquiring new assets and extracting capital from assets already owned. Structures include equipment leases and equipment-finance agreements for purchasing machinery, vehicles, technology, or other essential business equipment.",
      },
      {
        type: "p",
        text: "For businesses that own unencumbered equipment, sale-leaseback structures allow the business to monetize existing assets while retaining use of the equipment — converting a fixed asset into immediate working capital without disrupting operations.",
      },
      {
        type: "h3",
        text: "CPG+ Growth Capital",
      },
      {
        type: "p",
        text: "Consumer-product brands have specific capital needs that general commercial lenders often underserve: inventory-heavy balance sheets, long cash conversion cycles, seasonal demand patterns, and retail payment terms that can stretch 60 to 90 days. CPG+ growth capital is non-dilutive financing designed specifically for established consumer brands navigating exactly these dynamics.",
      },
      {
        type: "p",
        text: "This structure allows brands to fund growth — new SKUs, retail expansion, seasonal inventory builds — without giving up equity or taking on debt that does not fit the seasonality of the business.",
      },
      {
        type: "h3",
        text: "Industries Our Partners Work In",
      },
      {
        type: "p",
        text: "Non-bank commercial lenders are specifically suited to industries that conventional banks approach cautiously. Proficient's lending partners actively serve:",
      },
      {
        type: "list",
        items: [
          "Construction and contracting",
          "Staffing and professional employer organizations",
          "Transportation and logistics",
          "Manufacturing and distribution",
          "Ammunition and firearms accessories",
          "Cannabis and ancillary cannabis businesses",
          "Oilfield services and energy",
          "Professional services",
          "Consumer packaged goods",
          "Importers and exporters with international receivables",
        ],
      },
      {
        type: "p",
        text: "Many of these industries are either underserved or explicitly excluded by traditional bank underwriting. Non-bank commercial finance was built for this territory.",
      },
      {
        type: "h3",
        text: "What the Structure Looks Like",
      },
      {
        type: "p",
        text: "Facilities range from $50,000 for smaller working-capital needs up to $40 million for established middle-market businesses. Advance rates on eligible receivables typically run from 75% to 95%, depending on the quality of the receivables and the structure of the facility. Factoring rates generally fall between 1.5% and 3% per 30 days depending on the transaction. Same-day funding is available in qualifying situations, and facilities are structured without monthly minimums that penalize businesses for variable draw patterns.",
      },
      {
        type: "p",
        text: "The right structure depends on what the business needs the capital for, what assets it has to secure the facility, and how the repayment interacts with actual cash flow timing. Proficient's role is to match the business to the right structure and the right lender — not to fit every situation into the same product.",
      },
      {
        type: "p",
        text: "If your business has been told it does not qualify for conventional financing, or if the products a bank offers simply do not fit how your business operates, that is exactly the situation our commercial finance network is designed for. Reach out to start the conversation.",
      },
    ],
  },
  {
    slug: "medusa-2-17-2-async-payments-pending-authorization",
    title: "Medusa 2.17.2 Just Made Async Payment Methods First-Class. Here's Why Marketplace Builders Should Care.",
    excerpt:
      "Medusa's 2.17.2 release shipped native support for asynchronous payment methods built around a new pending_authorization status. If you're building a marketplace, selling B2B, or serving markets where bank-based payments dominate — this is the release that removes a wall people have been climbing over for two years.",
    date: "2026-07-08",
    readTime: "6 min read",
    category: "Platform",
    body: [
      {
        type: "p",
        text: "Medusa's 2.17.2 release (July 1, 2026) shipped something that looks like a small changelog line and is actually a structural change to how money can move through a Medusa store: native support for asynchronous payment methods, built around a new pending_authorization payment status.",
      },
      {
        type: "p",
        text: "If you only ever take cards, you can skip this one. If you're building a marketplace, selling B2B, or serving customers in markets where bank-based payments dominate — this is the release that removes a wall people have been climbing over for two years.",
      },
      {
        type: "h3",
        text: "The Problem It Solves",
      },
      {
        type: "p",
        text: "Card payments are synchronous. The customer confirms, the processor answers in about two seconds, and the checkout knows immediately whether it can place the order. Medusa's payment lifecycle was built around that assumption: a payment session moves from pending to authorized in one request, and the order is created on the far side of authorization.",
      },
      {
        type: "p",
        text: "A large share of real-world payment methods do not work that way. ACH debits in the US take one to three business days to settle and can fail days after they are initiated. SEPA Direct Debit in Europe behaves similarly. Bank transfers, Pix-style push payments, boleto-style vouchers, and payment links all share the same shape: the customer commits at checkout, but confirmation arrives later, out-of-band, via a webhook from the provider.",
      },
      {
        type: "p",
        text: "Until now, Medusa had no intermediate state between processing and authorized. There was no sanctioned way to say this payment is legitimately in flight — create the order and confirm it later. Teams that needed async methods ended up forking the payment workflows, abusing manual-capture semantics, or building shadow order states outside the core — all of which meant every Medusa upgrade became a merge-conflict negotiation.",
      },
      {
        type: "h3",
        text: "What Actually Changed",
      },
      {
        type: "p",
        text: "2.17.2 introduces a pending_authorization status that a payment provider can return during authorization. When it does, Medusa allows the order to be created before the payment is authorized, and the authorization confirmation flows in later through the provider's webhook handling. The support runs through the Payment module, the core checkout workflows, the first-party Stripe provider, the JS SDK, and the admin dashboard — so the deferred state is visible and handled consistently everywhere an order's payment status matters.",
      },
      {
        type: "p",
        text: "Two design choices are worth appreciating. First, it is opt-in at the provider level: a payment provider that never returns pending_authorization behaves exactly as before, so nothing breaks for existing integrations. Second, it puts the async decision where it belongs — in the provider, which is the only component that actually knows whether a given payment method confirms synchronously or not.",
      },
      {
        type: "h3",
        text: "It Unlocks the High-Ticket Segment",
      },
      {
        type: "p",
        text: "The economics of async rails are the whole point. Card processing costs roughly 2.9% plus 30 cents; ACH typically costs a fraction of a percent, often capped at a few dollars. On an $80 consumer order, nobody cares. On a $12,000 B2B wholesale order, the difference is real margin — and B2B buyers frequently prefer bank debit because it maps to how their accounts-payable process already works. B2B commerce on headless platforms has been growing fast; the payment rail that segment wants was the one Medusa could not cleanly support until this release.",
      },
      {
        type: "h3",
        text: "It Changes the Risk Model — and That's an Operations Problem",
      },
      {
        type: "p",
        text: "With cards, payment failure happens before the order exists. With async methods, failure happens after — an ACH debit can return unpaid (insufficient funds, closed account, disputed authorization) days later, when the order is already in your fulfillment pipeline. Supporting pending_authorization at the platform level is necessary but not sufficient: you still need policy.",
      },
      {
        type: "list",
        items: [
          "When do you reserve inventory — on authorization or on capture?",
          "Do you gate fulfillment on capture, or ship on pending authorization?",
          "What is your dunning flow when a debit bounces?",
          "Who eats the loss on a marketplace — the platform or the vendor?",
        ],
      },
      {
        type: "p",
        text: "These are underwriting and treasury questions wearing an engineering costume, and they are exactly the questions that separate we integrated a gateway from we built a payments operation.",
      },
      {
        type: "h3",
        text: "For Marketplaces, It Compounds",
      },
      {
        type: "p",
        text: "Marketplace payments already involve split funds, platform fees, and vendor payout timing. Add async methods and you get a new question: when a $10,000 ACH order is pending authorization, when does the vendor's share become payable? The safe answer — hold transfers until the debit clears — requires your split-payment logic and your payment-status logic to talk to each other.",
      },
      {
        type: "p",
        text: "Platforms that get this right can offer vendors something genuinely differentiated: low-fee, high-ticket bank payments without eating the return risk blindly. That is a meaningful competitive advantage in B2B and wholesale marketplace categories where payment cost is a real line item.",
      },
      {
        type: "h3",
        text: "If You Maintain a Payment Provider (or Plan To)",
      },
      {
        type: "p",
        text: "The upgrade path for provider authors is pleasantly small. Your authorization path returns pending_authorization for payment method types that confirm out-of-band, and your webhook handler maps the provider's confirmation event to the authorized action when it lands. Card-only providers can ignore the feature entirely.",
      },
      {
        type: "p",
        text: "If you are building against the release, note one adjacent detail: 2.17.0 shipped a worker-mode startup regression, so target 2.17.1 or later — practically, just go straight to 2.17.2.",
      },
      {
        type: "p",
        text: "We are building in this space ourselves: our open-source Stripe Connect onboarding and split-payments plugin for Medusa v2 targets 2.17.2, with async method support (ACH and SEPA via pending_authorization) on the near-term roadmap precisely because of this release.",
      },
      {
        type: "h3",
        text: "The Bigger Signal",
      },
      {
        type: "p",
        text: "Platform maturity in commerce tends to follow the same arc: first the catalog, then the checkout, then the money movement — and the money movement is always last because it is the hardest to abstract. Medusa adding a deferred authorization state to its core is a signal that the platform is graduating from cards work to payments infrastructure, the layer where marketplaces, B2B, and regional payment methods live.",
      },
      {
        type: "p",
        text: "That layer is also where most teams underestimate the work. The status enum is the easy part; the underwriting, onboarding, fee logic, and failure handling around it are where projects stall.",
      },
      {
        type: "p",
        text: "Proficient builds payment infrastructure for headless commerce — gateway integrations, merchant underwriting and KYB onboarding, split payments, and PayFac architecture on Medusa and adjacent platforms. If you are wrestling with async payments, marketplace splits, or vendor onboarding, reach out at proficient.tech.",
      },
    ],
  },
  {
    slug: "medusa-js-payment-partner-proficient",
    title: "Medusa.js Commerce Deserves a Payment Partner That Builds Too",
    excerpt:
      "Medusa.js gives merchants full ownership of their commerce stack. But the payment layer is where that control usually ends. Proficient changes that — with a direct plugin, in-house underwriting, and infrastructure that scales with what merchants are actually building.",
    date: "2026-06-20",
    readTime: "5 min read",
    category: "Platform",
    body: [
      {
        type: "p",
        text: "Medusa.js gives merchants something most commerce platforms do not: genuine ownership of the stack. Custom storefront, custom admin, custom data, custom workflows. The platform is built for teams that do not want to be constrained by what someone else decided commerce should look like.",
      },
      {
        type: "p",
        text: "But payment infrastructure has historically been the exception to that ownership. Even on a fully custom Medusa build, most merchants end up routing through Stripe — which means accepting Stripe's risk filters, Stripe's pricing, Stripe's approval logic, and Stripe's definition of which businesses are allowed to process.",
      },
      {
        type: "p",
        text: "Proficient changes that. A direct Medusa.js payment provider plugin connects to Proficient's own processing infrastructure, and the merchant's payment layer becomes as configurable and controllable as the rest of their stack.",
      },
      {
        type: "h3",
        text: "Who the Proficient and Medusa.js Partnership Is Built For",
      },
      {
        type: "p",
        text: "Not every Medusa merchant needs to move off Stripe. But several categories consistently hit friction that a direct processing relationship resolves:",
      },
      {
        type: "list",
        items: [
          "High-risk product categories — nutraceuticals, telehealth, supplements, adult content, travel, and others that Stripe flags or terminates without warning",
          "High-volume merchants whose interchange costs warrant direct rate negotiation rather than standard gateway markup",
          "Subscription and recurring businesses with trial-to-paid structures and elevated cancellation or refund rates",
          "Marketplaces and multi-vendor platforms that need split payment logic and per-seller risk tracking",
          "B2B merchants running invoice-based or net-terms payment workflows",
          "International merchants needing multi-currency routing and cross-border settlement optimization",
          "Agencies and platform builders creating white-label commerce experiences for clients who need their own payment identity",
        ],
      },
      {
        type: "h3",
        text: "What a Direct Integration Unlocks",
      },
      {
        type: "p",
        text: "When Proficient is the payment provider in a Medusa build, the merchant gets more than a working checkout. They get a processing relationship that is aligned to their actual business:",
      },
      {
        type: "list",
        items: [
          "Transactions route directly to Proficient's processing infrastructure — built for low latency and in-house risk evaluation",
          "Authorization decisions are made by underwriters who know the business model, not by an automated matrix calibrated for low-risk averages",
          "Routing logic is configurable at the processor level — optimized for approval rate, cost, or category-specific performance",
          "The full transaction lifecycle (authorization, capture, void, refund) is handled by the same relationship — not split across a gateway and a processor",
          "No per-transaction gateway fee on top of interchange and processing margin",
        ],
      },
      {
        type: "h3",
        text: "Approval Rates Are a Revenue Problem",
      },
      {
        type: "p",
        text: "One of the fastest places the Proficient integration pays for itself is authorization rate improvement. Gateway-layer processors apply their own approval filters before the transaction reaches the card network — which means a legitimate order can fail not because the customer's bank declined it, but because the processor's risk layer flagged the transaction type.",
      },
      {
        type: "p",
        text: "With Proficient, routing decisions are made at the processor level with direct acquiring relationships calibrated to the merchant's specific transaction profile. Higher approval rates on legitimate orders translate directly to revenue — and for high-volume Medusa merchants, even small percentage improvements compound quickly.",
      },
      {
        type: "h3",
        text: "Chargeback Defense Connected to the Transaction",
      },
      {
        type: "p",
        text: "When chargebacks happen on a Stripe integration, the dispute data lives in Stripe. The merchant has to pull it manually and build their defense from a system that is separate from their Medusa order data. When Proficient is the processor, chargeback data connects directly to the transaction record — the processing relationship owns both the authorization and the dispute.",
      },
      {
        type: "p",
        text: "That connection matters for merchants in categories with elevated chargeback exposure, for Medusa merchants running subscription businesses, and for anyone building a multi-vendor marketplace where dispute patterns need to be tracked at the seller level and fed back into underwriting decisions.",
      },
      {
        type: "h3",
        text: "Capital Access for Medusa Merchants That Are Scaling",
      },
      {
        type: "p",
        text: "Merchants running meaningful volume through Proficient have access to commercial finance relationships that come with the processing partnership. Revenue-based financing, working capital, equipment lending, and lines of credit can be structured around actual processing data rather than backward-looking financials.",
      },
      {
        type: "p",
        text: "For Medusa merchants that are scaling — adding product categories, entering new markets, building out fulfillment infrastructure, or acquiring inventory ahead of a peak season — having capital access through the same relationship as payment infrastructure removes a friction point that usually requires starting an entirely separate conversation with an unrelated lender.",
      },
      {
        type: "h3",
        text: "White-Label for Agencies Building on Medusa",
      },
      {
        type: "p",
        text: "Medusa.js is a common foundation for agencies and platform builders creating commerce experiences under a client's brand. Proficient's white-label processing works the same way: the client's checkout, the client's domain, the client's brand — with Proficient operating the gateway and banking infrastructure behind it.",
      },
      {
        type: "p",
        text: "For agencies building on Medusa, this means offering clients a complete commerce stack that includes payment infrastructure — without depending on a consumer-facing gateway that can terminate the account without notice, without explanation, and without regard for the agency's relationship with the client.",
      },
      {
        type: "h3",
        text: "The Plugin Is the Starting Point",
      },
      {
        type: "p",
        text: "The Proficient Medusa payment provider installs via npm, registers in the Medusa config, and handles authorization, capture, void, and refund without requiring changes to the storefront or checkout UI. It is designed to drop into an existing Medusa build with minimal friction.",
      },
      {
        type: "p",
        text: "But the plugin is just the entry point. What comes with it — the underwriting relationship, the processing infrastructure, the capital access, the chargeback defense, and the white-label capability — is the part that makes Medusa commerce genuinely ownable at every layer.",
      },
      {
        type: "p",
        text: "If you are building on Medusa and want payment infrastructure that matches the quality of the rest of your stack, that is the conversation Proficient is built for.",
      },
    ],
  },
  {
    slug: "protecting-your-business-proficients-holistic-view",
    title: "Protection Isn't a Product. It's a System.",
    excerpt:
      "Most businesses assemble a patchwork of solutions — a fraud tool here, a processor there, a lender somewhere else. The gaps between those solutions are where revenue is lost. Proficient is built to close them.",
    date: "2026-06-20",
    readTime: "5 min read",
    category: "Strategy",
    body: [
      {
        type: "p",
        text: "Most businesses treat payment protection as a checklist — add a fraud tool, pick a processor, find a lender when needed. Each solution solves a narrow problem. None of them talk to each other.",
      },
      {
        type: "p",
        text: "The gaps between point solutions are where revenue quietly disappears: a fraud tool that does not share data with the gateway, a processor that does not understand the business model, a chargeback that could have been defended but was not because nobody owned it.",
      },
      {
        type: "p",
        text: "Proficient was built around a different belief: that protecting a business requires seeing the whole picture, not just one corner of it.",
      },
      {
        type: "h3",
        text: "The Patchwork Problem",
      },
      {
        type: "p",
        text: "When protection is fragmented across vendors, each vendor optimizes for their own metric — not for the health of the business as a whole. The fraud tool optimizes for declined transactions. The processor optimizes for approved volume. The dispute manager optimizes for response rates. None of them share context.",
      },
      {
        type: "p",
        text: "The result is a business that is technically covered at every layer but genuinely protected at none of them — because no single partner has the visibility to see how one layer is affecting the others.",
      },
      {
        type: "h3",
        text: "Three Pillars, One Partner",
      },
      {
        type: "p",
        text: "Proficient operates across three areas that most businesses treat as separate relationships:",
      },
      {
        type: "list",
        items: [
          "Payments — custom payment gateways, processing infrastructure, banking lines, and merchant account placement across every category including high-risk",
          "Technology — payment software, platform integrations, gateway architecture, routing logic, and the tooling built around the processing relationship",
          "Finance — commercial capital access across working capital, equipment financing, revenue-based lending, merchant cash advances, lines of credit, invoice factoring, and SBA programs",
        ],
      },
      {
        type: "p",
        text: "When all three operate under one relationship, information flows between them. Processing data informs capital underwriting. Underwriting alignment improves approval rates. Fraud signals from transactions inform post-purchase risk decisions. The whole system is more accurate than any of its parts in isolation.",
      },
      {
        type: "h3",
        text: "Fraud Prevention That Sees the Full Lifecycle",
      },
      {
        type: "p",
        text: "Most fraud tools see the checkout moment and nothing else. Proficient's view of fraud prevention extends across the full transaction lifecycle — before the sale, during the sale, and after the sale — because that is where fraud actually lives today.",
      },
      {
        type: "p",
        text: "Pre-transaction controls, checkout optimization, post-purchase claims intelligence, chargeback defense, and returns abuse detection are not separate functions. They are one connected system. A business that manages all of them from one vantage point has a significant advantage over one that handles each in isolation.",
      },
      {
        type: "h3",
        text: "Underwriting That Knows the Business",
      },
      {
        type: "p",
        text: "One of the most common failure points in payment relationships is misaligned underwriting — a merchant account approved for a business model the processor does not actually understand, or a capital product sized for the wrong repayment structure.",
      },
      {
        type: "p",
        text: "Because Proficient holds direct banking relationships and does its own underwriting, account approval is based on how the business actually operates — not on how it fits into a risk matrix built for someone else. That alignment produces better approval rates, more stable accounts, and capital structures that fit the actual cash flow.",
      },
      {
        type: "h3",
        text: "Capital That Connects to Processing",
      },
      {
        type: "p",
        text: "Access to capital through a relationship that already knows your processing history is a different experience from applying to a lender cold. The data is already there — revenue volume, seasonality, transaction consistency, chargeback exposure. The underwriting conversation is faster and the sizing is more accurate.",
      },
      {
        type: "p",
        text: "For businesses that are growing, expanding into new categories, or managing cash flow gaps between revenue cycles, having capital access wired into the same relationship as payment infrastructure removes a significant coordination burden.",
      },
      {
        type: "h3",
        text: "What a Holistic Partner Actually Changes",
      },
      {
        type: "list",
        items: [
          "One relationship that understands how the business model, processing setup, fraud exposure, and capital needs interact",
          "Fraud decisions informed by transaction history, not just rule sets",
          "Underwriting aligned to the actual business, not a generic risk category",
          "Capital access that uses live processing data rather than backward-looking financials",
          "Post-purchase protection that connects to pre-transaction controls",
          "A processor that can grow with the business without requiring a new relationship at every inflection point",
        ],
      },
      {
        type: "p",
        text: "Patchwork solutions create patchwork protection. The gaps are invisible until they cost something.",
      },
      {
        type: "p",
        text: "Proficient is built for businesses that want a partner with the full picture — one that sees payments, technology, fraud, capital, and underwriting as a single system rather than a list of separate problems.",
      },
      {
        type: "p",
        text: "If your current setup requires you to manage multiple vendors to cover what should be one relationship, that is the conversation we are built for.",
      },
    ],
  },
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
        text: "Proficient built a direct Medusa payment plugin that connects straight to Proficient's processing infrastructure.",
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
          "Transactions go from Medusa directly to our processing infrastructure",
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

export const relatedPostsMap: Record<string, string[]> = {
  "medusa-shopify-migration-tool-proficient-payments": [
    "shopify-to-medusa-migration-case-proficient",
    "medusa-proficient-vs-shopify-plus-headless",
    "medusa-js-direct-integration-no-middle-gateway",
  ],
  "mca-vs-accounts-receivable-vs-factoring-comparison": [
    "commercial-finance-full-suite-proficient-lending-partners",
    "business-capital-for-payment-processing-merchants",
    "commercial-finance-capital-lending-fuel-your-business",
  ],
  "medusa-proficient-vs-shopify-plus-headless": [
    "shopify-to-medusa-migration-case-proficient",
    "medusa-js-payment-partner-proficient",
    "medusa-js-direct-integration-no-middle-gateway",
  ],
  "shopify-to-medusa-migration-case-proficient": [
    "medusa-proficient-vs-shopify-plus-headless",
    "medusa-js-direct-integration-no-middle-gateway",
    "medusa-js-payment-partner-proficient",
  ],
  "business-capital-for-payment-processing-merchants": [
    "commercial-finance-full-suite-proficient-lending-partners",
    "commercial-finance-capital-lending-fuel-your-business",
    "what-underwriting-actually-looks-at-before-you-go-live",
  ],
  "commercial-finance-full-suite-proficient-lending-partners": [
    "business-capital-for-payment-processing-merchants",
    "commercial-finance-capital-lending-fuel-your-business",
    "why-most-isos-cant-save-high-risk-merchants",
  ],
  "medusa-2-17-2-async-payments-pending-authorization": [
    "medusa-js-payment-partner-proficient",
    "medusa-js-direct-integration-no-middle-gateway",
  ],
  "medusa-js-payment-partner-proficient": [
    "medusa-2-17-2-async-payments-pending-authorization",
    "medusa-js-direct-integration-no-middle-gateway",
    "custom-payment-system-built-around-your-business",
  ],
  "protecting-your-business-proficients-holistic-view": [
    "fraud-doesnt-end-at-checkout-revenue-protection-lifecycle",
    "protecting-revenue-before-during-after-the-sale",
    "intelligent-returns-claims-portal-retain-revenue",
  ],
  "fraud-doesnt-end-at-checkout-revenue-protection-lifecycle": [
    "protecting-revenue-before-during-after-the-sale",
    "intelligent-returns-claims-portal-retain-revenue",
    "protecting-your-business-proficients-holistic-view",
  ],
  "commercial-finance-capital-lending-fuel-your-business": [
    "business-capital-for-payment-processing-merchants",
    "commercial-finance-full-suite-proficient-lending-partners",
  ],
  "custom-payment-system-built-around-your-business": [
    "the-real-cost-of-reselling-someone-elses-gateway",
    "why-most-isos-cant-save-high-risk-merchants",
    "medusa-js-direct-integration-no-middle-gateway",
  ],
  "intelligent-returns-claims-portal-retain-revenue": [
    "fraud-doesnt-end-at-checkout-revenue-protection-lifecycle",
    "protecting-revenue-before-during-after-the-sale",
    "protecting-your-business-proficients-holistic-view",
  ],
  "medusa-js-direct-integration-no-middle-gateway": [
    "medusa-js-payment-partner-proficient",
    "custom-payment-system-built-around-your-business",
    "medusa-2-17-2-async-payments-pending-authorization",
  ],
  "protecting-revenue-before-during-after-the-sale": [
    "fraud-doesnt-end-at-checkout-revenue-protection-lifecycle",
    "intelligent-returns-claims-portal-retain-revenue",
    "protecting-your-business-proficients-holistic-view",
  ],
  "why-most-isos-cant-save-high-risk-merchants": [
    "what-underwriting-actually-looks-at-before-you-go-live",
    "the-real-cost-of-reselling-someone-elses-gateway",
    "custom-payment-system-built-around-your-business",
  ],
  "the-real-cost-of-reselling-someone-elses-gateway": [
    "why-most-isos-cant-save-high-risk-merchants",
    "custom-payment-system-built-around-your-business",
    "what-underwriting-actually-looks-at-before-you-go-live",
  ],
  "what-underwriting-actually-looks-at-before-you-go-live": [
    "why-most-isos-cant-save-high-risk-merchants",
    "the-real-cost-of-reselling-someone-elses-gateway",
    "business-capital-for-payment-processing-merchants",
  ],
};

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
