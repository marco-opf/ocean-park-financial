import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import Collapsible from "@/components/Collapsible";

export const metadata = {
  title: "Industries | Ocean Park Financial",
  description: "Deep financial expertise across Tech & SaaS, Media & Entertainment, Consumer Packaged Goods, and Venture Capital.",
};

const industries = [
  {
    id: "tech",
    name: "Tech & SaaS",
    tagline: "Financial Infrastructure for High-Growth Tech",
    description:
      "From pre-revenue startups to scaling SaaS platforms, we understand the unique financial complexities of technology companies. Subscription revenue recognition, ARR/MRR tracking, and burn rate management are second nature to us.",
    challenges: [
      "Complex revenue recognition for subscription and usage-based models",
      "Rapid scaling requiring dynamic financial models that evolve monthly",
      "Investor reporting demands across seed, Series A, B, and beyond",
      "Managing burn rate while investing aggressively in product and growth",
      "Multi-entity structures and international operations",
    ],
    solutions: [
      {
        title: "SaaS Metrics & KPI Dashboards",
        detail: "Custom dashboards tracking ARR, MRR, churn, LTV, CAC, and cohort analysis. Real-time visibility into the metrics your board and investors care about most.",
      },
      {
        title: "Revenue Recognition (ASC 606)",
        detail: "Proper revenue recognition for subscription, licensing, and hybrid models. Compliant, clean, and audit-ready from day one.",
      },
      {
        title: "Fundraising Financial Models",
        detail: "Investor-grade financial models, data room preparation, and due diligence support that accelerate your fundraising timeline.",
      },
    ],
  },
  {
    id: "media",
    name: "Media & Entertainment",
    tagline: "Creative Industries, Strategic Finance",
    description:
      "The media landscape is complex — multiple revenue streams, content production costs, advertising models, and distribution agreements. We bring financial clarity to creative businesses.",
    challenges: [
      "Multiple revenue streams with different recognition timing",
      "Content production budgeting and cost amortization",
      "Digital advertising revenue complexity and reconciliation",
      "Talent contracts and participation accounting",
      "Rapid shifts in distribution models and platform economics",
    ],
    solutions: [
      {
        title: "Content P&L Management",
        detail: "Granular profit and loss tracking by title, series, or project. Know exactly which content is driving revenue and which needs optimization.",
      },
      {
        title: "Ad Revenue Optimization",
        detail: "Reconciliation and analysis of advertising revenue across platforms, with variance analysis and yield optimization insights.",
      },
      {
        title: "Production Budget Oversight",
        detail: "Pre-production financial planning, cost tracking during production, and post-production analysis to maximize ROI on creative investments.",
      },
    ],
  },
  {
    id: "cpg",
    name: "Consumer Packaged Goods",
    tagline: "Scaling CPG Brands with Financial Precision",
    description:
      "CPG businesses face unique financial challenges — inventory management, COGS optimization, trade spend tracking, and channel economics. We help brands scale profitably across DTC, retail, and wholesale channels.",
    challenges: [
      "Inventory valuation and cost of goods sold optimization",
      "Multi-channel economics across DTC, Amazon, and retail",
      "Trade promotion spend tracking and ROI analysis",
      "Scaling from DTC to retail distribution with different margin structures",
      "Cash flow management with seasonal demand cycles",
    ],
    solutions: [
      {
        title: "Margin & COGS Analysis",
        detail: "Deep analysis of product margins, manufacturing costs, and landed costs to identify opportunities for margin improvement across your portfolio.",
      },
      {
        title: "Channel Profitability",
        detail: "True profitability analysis by channel — DTC, Amazon, wholesale, retail — accounting for all costs including marketing, logistics, and trade spend.",
      },
      {
        title: "Inventory & Cash Flow Planning",
        detail: "Forecasting models that balance inventory investment with cash flow needs, accounting for lead times, seasonality, and growth projections.",
      },
    ],
  },
  {
    id: "vc",
    name: "Venture Capital",
    tagline: "Fund Accounting & Portfolio Expertise",
    description:
      "Venture capital funds require specialized accounting expertise — from fund formation to LP reporting to portfolio valuations. We speak the language of GPs, LPs, and portfolio companies.",
    challenges: [
      "Complex fund structures with multiple entities and vehicles",
      "Fair value accounting and portfolio company valuations",
      "Management fee and carried interest calculations",
      "LP reporting requirements and capital call management",
      "Regulatory compliance and audit requirements",
    ],
    solutions: [
      {
        title: "Fund Accounting & Administration",
        detail: "Complete fund accounting services including NAV calculations, capital account maintenance, and waterfall computations for complex fund structures.",
      },
      {
        title: "LP Reporting",
        detail: "Quarterly and annual LP reports, K-1 preparation, and capital call/distribution notices that meet institutional LP expectations.",
      },
      {
        title: "Portfolio Support",
        detail: "Financial oversight and CFO support for portfolio companies, helping your investments build the financial infrastructure they need to succeed.",
      },
    ],
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-purple" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-black to-brand-purple/5" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-brand-purple font-medium text-sm tracking-widest uppercase mb-8">
            Industries We Serve
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[0.95] mb-6">
            Deep Expertise
            <br />
            <span className="text-brand-purple">Where It Matters</span>
          </h1>
          <p className="text-brand-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed">
            We don&apos;t try to be everything to everyone. Our focus on four key sectors means we bring genuine depth and industry-specific insight to every engagement.
          </p>
        </div>
      </section>

      {/* Industry Quick Links */}
      <section className="border-y border-white/5 bg-brand-dark/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <a
                key={industry.id}
                href={`#${industry.id}`}
                className="px-6 py-3 rounded-lg border border-white/10 text-brand-gray-300 hover:text-brand-purple hover:border-brand-purple/30 transition-all text-sm font-medium"
              >
                {industry.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Sections */}
      {industries.map((industry, index) => (
        <section
          key={industry.id}
          id={industry.id}
          className={`py-24 ${index % 2 === 0 ? "" : "bg-brand-dark/30"}`}
        >
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-brand-purple font-medium text-sm tracking-widest uppercase mb-4">
                {industry.tagline}
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{industry.name}</h2>
              <p className="text-brand-gray-300 text-lg leading-relaxed max-w-3xl">
                {industry.description}
              </p>
            </div>

            {/* Challenges */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-white mb-6">Common Challenges</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {industry.challenges.map((challenge, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-brand-black/50 border border-white/5">
                    <div className="w-2 h-2 rounded-full bg-brand-purple mt-2 shrink-0" />
                    <p className="text-brand-gray-300 text-sm">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">How We Help</h3>
              <div className="space-y-4">
                {industry.solutions.map((solution, i) => (
                  <Collapsible key={i} title={solution.title} defaultOpen={i === 0}>
                    <p>{solution.detail}</p>
                  </Collapsible>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-brand-purple/10 via-brand-dark/50 to-brand-purple/10 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Don&apos;t See Your <span className="text-brand-purple">Industry</span>?
          </h2>
          <p className="text-brand-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            While we specialize in four core sectors, our financial expertise translates across industries. Let&apos;s talk about your specific needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 bg-brand-purple text-brand-black font-semibold rounded-lg hover:bg-brand-purple-light transition-all duration-300 text-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
