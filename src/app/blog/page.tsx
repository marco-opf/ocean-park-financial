import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Blog | Ocean Park Financial",
  description: "Insights on financial strategy, cash flow management, and founder-focused financial leadership.",
};

const featuredPost = {
  title: "The Runway Reality Check: What Founders Get Wrong About Cash",
  excerpt:
    "Most founders think runway is simple math: cash divided by monthly burn. But the reality is far more nuanced. Here's what you need to know to avoid the most common cash management mistakes that sink promising startups.",
  date: "March 2026",
  readTime: "8 min read",
  category: "Cash Flow",
  slug: "/blog/runway-reality-check",
};

const posts = [
  {
    title: "When to Hire a Fractional CFO: 7 Signs Your Business Is Ready",
    excerpt:
      "You don't need a full-time CFO to get CFO-level insights. Here are the telltale signs it's time to bring in a fractional financial leader.",
    date: "February 2026",
    readTime: "6 min read",
    category: "Fractional CFO",
    slug: "/blog/when-to-hire-fractional-cfo",
  },
  {
    title: "SaaS Metrics That Actually Matter: Beyond ARR and MRR",
    excerpt:
      "Every SaaS founder tracks ARR and MRR, but the metrics that truly predict success go deeper. Here's what your board should be seeing.",
    date: "January 2026",
    readTime: "7 min read",
    category: "Tech & SaaS",
    slug: "/blog/saas-metrics-that-matter",
  },
  {
    title: "Preparing for Due Diligence: A Founder's Financial Checklist",
    excerpt:
      "Fundraising due diligence can make or break a deal. Get your financial house in order before investors start asking questions.",
    date: "December 2025",
    readTime: "10 min read",
    category: "Fundraising",
    slug: "/blog/preparing-for-due-diligence",
  },
  {
    title: "The True Cost of Bad Bookkeeping for Startups",
    excerpt:
      "Messy books don't just create tax headaches â they erode investor confidence, lead to bad decisions, and can cost you your next round.",
    date: "November 2025",
    readTime: "5 min read",
    category: "Accounting",
    slug: "/blog/cost-of-bad-bookkeeping",
  },
  {
    title: "DTC vs. Retail: Understanding Channel Economics for CPG Brands",
    excerpt:
      "The margin math is different for every channel. Here's how to think about DTC, Amazon, and retail profitability as a CPG founder.",
    date: "October 2025",
    readTime: "8 min read",
    category: "CPG",
    slug: "/blog/dtc-vs-retail-channel-economics",
  },
  {
    title: "Financial Modeling 101: Building Your First Three-Statement Model",
    excerpt:
      "A connected income statement, balance sheet, and cash flow model is the foundation of every good financial plan. Here's how to build one.",
    date: "September 2025",
    readTime: "12 min read",
    category: "Financial Strategy",
    slug: "/blog/financial-modeling-101",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-purple z-10" />
        <div className="absolute inset-0 bg-brand-black" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(183,148,246,0.1), transparent)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16">
          <p className="text-brand-purple font-semibold text-xs tracking-[0.25em] uppercase mb-10">
            Insights &amp; Resources
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight mb-8">
            The Ocean Park
            <br />
            <span className="text-brand-purple">Blog</span>
          </h1>
          <p className="text-brand-gray-300 text-xl max-w-2xl leading-relaxed font-light">
            Financial insights, founder resources, and strategic perspectives from the Ocean Park Financial team.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20" style={{ backgroundColor: "#0E0E0E" }}>
        <div className="max-w-5xl mx-auto px-8 lg:px-16">
          <p className="text-brand-purple font-semibold text-xs tracking-[0.25em] uppercase mb-10">
            Featured Article
          </p>
          <Link href={featuredPost.slug} className="group block">
            <div
              className="p-10 md:p-14 rounded-2xl relative overflow-hidden transition-all duration-300"
              style={{ backgroundColor: "#0A0A0A", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-purple" />
              <div className="flex items-center gap-4 mb-8">
                <span
                  className="px-4 py-1.5 rounded-full text-brand-purple text-xs font-semibold"
                  style={{ backgroundColor: "rgba(183,148,246,0.1)" }}
                >
                  {featuredPost.category}
                </span>
                <span className="text-brand-gray-500 text-sm">{featuredPost.date}</span>
                <span className="text-brand-gray-500 text-sm">{featuredPost.readTime}</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 group-hover:text-brand-purple transition-colors tracking-tight">
                {featuredPost.title}
              </h2>
              <p className="text-brand-gray-300 text-lg leading-relaxed max-w-3xl font-light">
                {featuredPost.excerpt}
              </p>
              <p className="mt-8 text-brand-purple font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                Read article
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-28">
        <div className="max-w-5xl mx-auto px-8 lg:px-16">
          <SectionHeading
            eyebrow="All Articles"
            title="Latest"
            highlight="Insights"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link
                key={post.title}
                href={post.slug}
                className="group p-8 rounded-2xl transition-all duration-300"
                style={{ backgroundColor: "#111111", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="px-3 py-1 rounded-full text-brand-purple text-xs font-semibold"
                    style={{ backgroundColor: "rgba(183,148,246,0.1)" }}
                  >
                    {post.category}
                  </span>
                  <span className="text-brand-gray-500 text-xs">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-purple transition-colors">
                  {post.title}
                </h3>
                <p className="text-brand-gray-400 text-sm leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-brand-gray-500 text-xs">{post.date}</span>
                  <span className="text-brand-purple text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
