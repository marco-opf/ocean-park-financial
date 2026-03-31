import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import Collapsible from "@/components/Collapsible";

export const metadata = {
  title: "Services | Ocean Park Financial",
  description:
    "Fractional CFO, financial strategy, accounting, system selection, and clean-up services for growing companies.",
};

/* ============================================================
   PRICING TIERS (editorial format, matching IntelliChoice model)
   ============================================================ */

const pricingTiers = [
  {
    name: "Foundation",
    price: "From $1,000/mo",
    description:
      "You want clean books and reliable reporting — handled correctly and consistently — so you're not second-guessing your numbers every month. This is stable monthly accounting delivered by our team for businesses with straightforward needs.",
    bestFor:
      "early-stage or bootstrapped businesses who want someone they can trust to \"just take care of it.\"",
    whatsInside: [
      "Monthly bookkeeping & bank reconciliations",
      "Credit card reconciliation",
      "Income statement & balance sheet",
      "Basic accounts payable management",
      "Transaction categorization & cleanup",
      "Up to 200 transactions/month",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "From $2,500/mo",
    description:
      "You're growing — and the financial \"basics\" aren't enough anymore. More hiring, more invoices, more moving parts. The numbers might be accurate, but they're not giving you clear direction. This level gives you stronger reporting, better cash visibility, and a financial setup that can support expansion without constant cleanup.",
    bestFor:
      "companies at or above $500K in revenue that need stronger reporting, cash flow visibility, and the financial structure to support hiring and expansion.",
    whatsInside: [
      "Everything in Foundation, plus:",
      "Cash flow forecasting — near-term visibility, not just historical data",
      "Payroll integration & oversight",
      "Bill pay — vendor payments handled",
      "Accounts receivable management",
      "QuickBooks optimization — set up for your industry and stage",
      "Advanced reporting — budget vs. actual, KPI tracking",
      "Multi-state sales tax compliance",
      "Weekly Slack or email check-ins",
    ],
  },
  {
    name: "Scale",
    price: "From $5,000/mo",
    description:
      "You're not looking for \"better reporting.\" This is for founders making decisions that affect payroll, runway, and investor confidence — and want a partner who can help them stay ahead of risk, protect cash, and make growth decisions with clear visibility.",
    bestFor:
      "funded startups and scaling companies in Tech, Media, CPG, and VC who need CFO-level guidance, investor-ready reporting, and proactive forecasting — so decisions aren't made under pressure.",
    whatsInside: [
      "Everything in Growth, plus:",
      "Fractional CFO strategic partnership",
      "Board & investor reporting packages",
      "Financial modeling & scenario analysis",
      "Fundraising support & data room preparation",
      "Revenue recognition (ASC 606)",
      "Multi-entity consolidation",
      "KPI dashboards & custom reporting",
      "Weekly strategy calls",
      "Team mentorship & training",
      "Direct board & investor interface as needed",
    ],
  },
];

/* ============================================================
   SERVICE DETAIL SECTIONS (with collapsibles)
   ============================================================ */

const serviceDetails = [
  {
    id: "fractional-cfo",
    title: "Fractional CFO",
    tagline: "Executive-Level Financial Leadership",
    description:
      "A full-time CFO costs $300K–$500K per year. Most startups and growing businesses can't justify that expense — but they still need strategic financial leadership. Our Fractional CFO service gives you the expertise of a seasoned CFO on a flexible, part-time basis. This is included in our Scale tier — or available as a standalone engagement.",
    features: [
      {
        title: "Strategic Financial Planning",
        detail:
          "Long-range financial planning aligned with your business goals, growth trajectory, and market position. We build models that inform real decisions — not academic exercises.",
      },
      {
        title: "Cash Flow Management & Forecasting",
        detail:
          "Proactive cash flow forecasting and management to ensure you always know your runway, burn rate, and path to profitability. Weekly cash position reporting and 13-week rolling forecasts.",
      },
      {
        title: "Board & Investor Reporting",
        detail:
          "Professional-grade financial packages for board meetings, investor updates, and due diligence. Monthly board decks with variance analysis, KPI tracking, and management commentary.",
      },
      {
        title: "Fundraising & Capital Strategy",
        detail:
          "Financial modeling, pitch deck financials, data room preparation, and due diligence support for Seed through Series C and beyond. We've supported over $500M in transactions.",
      },
      {
        title: "KPI Tracking & Custom Dashboards",
        detail:
          "Custom dashboards and reporting frameworks that surface the metrics that matter most to your business. Real-time visibility into ARR, MRR, churn, LTV, CAC, and industry-specific KPIs.",
      },
      {
        title: "Budget Creation & Variance Analysis",
        detail:
          "Annual and quarterly budgets with monthly variance analysis and real-time tracking against actuals. Understand where you're over or under — and why.",
      },
    ],
  },
  {
    id: "system-selection",
    title: "System Selection & Implementation",
    tagline: "The Right Tools for Your Business",
    description:
      "Outgrowing QuickBooks? Not sure which ERP to choose? We evaluate, select, and implement the financial systems that fit your business today and scale for tomorrow. Available as a standalone project engagement.",
    features: [
      {
        title: "Needs Assessment & Requirements",
        detail:
          "Deep analysis of your current processes, pain points, and requirements to define the ideal system profile for your business. We document everything before recommending anything.",
      },
      {
        title: "Vendor Evaluation & Selection",
        detail:
          "Comprehensive vendor comparison with structured scoring across functionality, cost, scalability, and integration capabilities. We coordinate demos and negotiate on your behalf.",
      },
      {
        title: "Implementation & Project Management",
        detail:
          "End-to-end project management of system implementations — from data migration to configuration to testing to go-live. We keep the project on track and on budget.",
      },
      {
        title: "Training, Adoption & Ongoing Support",
        detail:
          "Hands-on team training, comprehensive documentation, and ongoing support to ensure full adoption and maximum ROI from your new systems.",
      },
    ],
  },
  {
    id: "cleanup",
    title: "Clean-Up & Optimization",
    tagline: "Get Your Financials Back on Track",
    description:
      "Behind on your books? Financials in disarray after a transition? We'll organize, reconcile, and optimize your past financial data so you can move forward with confidence and a clean slate. Project-based pricing starting at $2,500.",
    features: [
      {
        title: "Historical Reconciliation",
        detail:
          "Systematic clean-up and reconciliation of past months or years of financial data. We untangle the mess — whether it's miscategorized transactions, unreconciled accounts, or missing documentation.",
      },
      {
        title: "Chart of Accounts Restructuring",
        detail:
          "Optimize your chart of accounts for clarity, reporting accuracy, and alignment with your business model. A clean COA is the foundation of meaningful financial reporting.",
      },
      {
        title: "Process Optimization & Documentation",
        detail:
          "Streamline your financial workflows, eliminate redundancies, and implement best practices that prevent future disorganization. We document everything so your team can maintain it.",
      },
      {
        title: "Audit Preparation & Support",
        detail:
          "Get your financial records audit-ready with organized documentation, proper classifications, clean supporting schedules, and direct coordination with your auditors.",
      },
    ],
  },
];

/* ============================================================
   SERVICE TERMS
   ============================================================ */

const serviceTerms = [
  {
    title: "Engagement Structure",
    content:
      "All engagements begin with a complimentary 30-minute discovery call followed by a detailed scope-of-work proposal. Monthly retainer engagements require a minimum 3-month initial commitment. Project-based engagements have defined timelines and milestones outlined in the proposal.",
  },
  {
    title: "Billing & Payment",
    content:
      "Monthly retainer fees are invoiced on the 1st of each month and due within 15 days. Project-based engagements are billed 50% upfront and 50% upon completion (or in milestone increments for larger projects). We accept ACH, wire transfer, and credit card payments.",
  },
  {
    title: "Scope & Adjustments",
    content:
      "Pricing is based on anticipated scope and complexity. If your needs exceed the agreed scope, we'll discuss adjustments before proceeding. Additional hours beyond retainer limits are billed at $250/hour for CFO services and $150/hour for accounting services.",
  },
  {
    title: "Confidentiality & Data Security",
    content:
      "All client information is treated as strictly confidential. We maintain secure, encrypted systems for all financial data and use industry-standard access controls. Our team signs comprehensive NDAs as part of every engagement.",
  },
  {
    title: "Cancellation & Transition",
    content:
      "After the initial commitment period, monthly engagements can be cancelled with 30 days written notice. Upon termination, we provide a complete handover package including all financial records, documentation, system access credentials, and a transition memo to ensure continuity.",
  },
  {
    title: "What's Not Included",
    content:
      "Our services do not include tax preparation or filing (we partner with trusted CPA firms for tax work), legal advice, investment advisory services, or insurance brokerage. Software subscription fees, bank charges, and third-party service costs are borne by the client.",
  },
];

/* ============================================================
   PAGE
   ============================================================ */

export default function ServicesPage() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-purple z-10" />
        <div className="absolute inset-0 bg-brand-black" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(183,148,246,0.1), transparent)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16">
          <p className="text-brand-purple font-semibold text-xs tracking-[0.25em] uppercase mb-10">
            Our Services
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight mb-8">
            Tailored Solutions for
            <br />
            <span className="text-brand-purple">Every Stage</span>
          </h1>
          <p className="text-brand-gray-300 text-xl max-w-2xl leading-relaxed font-light">
            From monthly bookkeeping to fractional CFO leadership, we deliver the financial
            infrastructure your business needs to thrive.
          </p>
        </div>
      </section>

      {/* ==================== PRICING TIERS (editorial layout) ==================== */}
      <section className="py-28 lg:py-36" style={{ backgroundColor: "#0E0E0E" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <SectionHeading
            eyebrow="Choose Your Level"
            title="Three Ways to"
            highlight="Work Together"
            description="Each tier is designed for a different stage of growth. Not sure which is right? That's what the discovery call is for."
          />

          <div className="grid lg:grid-cols-3 gap-0 lg:gap-0">
            {pricingTiers.map((tier, i) => (
              <div
                key={tier.name}
                className="py-12 lg:px-10 first:lg:pl-0 last:lg:pr-0"
                style={{
                  borderRight:
                    i < pricingTiers.length - 1
                      ? "1px solid rgba(255,255,255,0.06)"
                      : "none",
                  borderBottom:
                    "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {/* Tier Name */}
                <h3 className="text-3xl lg:text-4xl font-light text-white tracking-tight mb-4" style={{ fontStyle: "normal" }}>
                  {tier.name}
                </h3>

                {/* Price */}
                <p className="text-brand-purple font-semibold text-sm mb-6" style={{ fontStyle: "italic" }}>
                  {tier.price}
                </p>

                {/* Purple separator line */}
                <div className="w-full h-0.5 bg-brand-purple mb-8" />

                {/* Description */}
                <p className="text-brand-gray-300 text-base leading-relaxed mb-8">
                  {tier.description}
                </p>

                {/* Best For */}
                <p className="text-brand-gray-300 text-base leading-relaxed mb-10">
                  <span className="text-white font-bold">Best for</span>{" "}
                  {tier.bestFor}
                </p>

                {/* Divider */}
                <div className="w-full" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} />

                {/* What's Inside — collapsible */}
                <Collapsible title="What's inside">
                  <ul className="space-y-3">
                    {tier.whatsInside.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        {j === 0 && item.startsWith("Everything") ? (
                          <span className="text-brand-gray-200 text-sm font-medium">{item}</span>
                        ) : (
                          <>
                            <span className="text-brand-purple mt-1.5 shrink-0">•</span>
                            <span className="text-brand-gray-300 text-sm">{item}</span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </Collapsible>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-12 py-5 bg-brand-purple text-brand-black font-bold rounded-xl hover:bg-brand-purple-light transition-all duration-300 hover:shadow-2xl hover:shadow-brand-purple/25 hover:-translate-y-0.5 text-base"
            >
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== SERVICE DETAIL SECTIONS ==================== */}
      {serviceDetails.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className="py-28 lg:py-36"
          style={{
            backgroundColor: index % 2 === 0 ? "#0A0A0A" : "#0E0E0E",
          }}
        >
          <div className="max-w-5xl mx-auto px-8 lg:px-16">
            <div className="mb-16">
              <p className="text-brand-purple font-semibold text-xs tracking-[0.25em] uppercase mb-6">
                {service.tagline}
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight">
                {service.title}
              </h2>
              <p className="text-brand-gray-300 text-lg leading-relaxed max-w-3xl font-light">
                {service.description}
              </p>
            </div>

            <div className="space-y-4">
              {service.features.map((feature, i) => (
                <Collapsible key={i} title={feature.title} defaultOpen={i === 0}>
                  <p>{feature.detail}</p>
                </Collapsible>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ==================== SERVICE TERMS ==================== */}
      <section className="py-28 lg:py-36">
        <div className="max-w-5xl mx-auto px-8 lg:px-16">
          <SectionHeading
            eyebrow="Engagement Details"
            title="Service"
            highlight="Terms"
            description="Transparency is one of our core values. Here's how our engagements work."
          />
          <div className="space-y-4">
            {serviceTerms.map((term, i) => (
              <Collapsible key={i} title={term.title} defaultOpen={i === 0}>
                <p>{term.content}</p>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PROCESS ==================== */}
      <section className="py-28 lg:py-36" style={{ backgroundColor: "#0E0E0E" }}>
        <div className="max-w-5xl mx-auto px-8 lg:px-16">
          <SectionHeading
            eyebrow="How We Work"
            title="Our"
            highlight="Process"
            description="A simple, structured approach to getting started."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Discovery Call",
                description:
                  "A complimentary 30-minute call to understand your business, challenges, and goals. We listen first — no sales pitch.",
              },
              {
                step: "02",
                title: "Custom Proposal",
                description:
                  "A tailored engagement plan with clear scope, deliverables, timeline, and pricing. No cookie-cutter packages — everything is built for you.",
              },
              {
                step: "03",
                title: "Execution & Partnership",
                description:
                  "We hit the ground running, integrating seamlessly with your team and delivering results from day one. Regular check-ins ensure we stay aligned.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative p-10 rounded-2xl"
                style={{
                  backgroundColor: "#0A0A0A",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <span className="text-7xl font-black text-white/[0.03] absolute top-6 right-8 select-none">
                  {item.step}
                </span>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: "rgba(183,148,246,0.1)" }}
                >
                  <span className="text-brand-purple font-bold text-sm">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 relative">{item.title}</h3>
                <p className="text-brand-gray-300 leading-relaxed relative text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section
        className="py-28 lg:py-36 border-y border-white/10"
        style={{
          background:
            "linear-gradient(135deg, rgba(183,148,246,0.06) 0%, #0E0E0E 50%, rgba(183,148,246,0.06) 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-8 lg:px-16 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
            Not Sure What You <span className="text-brand-purple">Need</span>?
          </h2>
          <p className="text-brand-gray-300 text-lg md:text-xl mb-14 max-w-2xl mx-auto font-light">
            That&apos;s what the discovery call is for. Let&apos;s talk about where your business
            is today and where you want it to go.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-12 py-5 bg-brand-purple text-brand-black font-bold rounded-xl hover:bg-brand-purple-light transition-all duration-300 hover:shadow-2xl hover:shadow-brand-purple/25 hover:-translate-y-0.5 text-lg"
          >
            Book Your Free Discovery Call
          </Link>
        </div>
      </section>
    </>
  );
}
