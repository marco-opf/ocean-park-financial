import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import Collapsible from "@/components/Collapsible";
import ClientsCarousel from "@/components/ClientsCarousel";

const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "50+", label: "Companies Served" },
  { value: "$500M+", label: "In Transactions Managed" },
];

const services = [
  {
    title: "Fractional CFO",
    description:
      "Executive-level financial leadership without the full-time overhead. Strategic guidance tailored to your growth stage.",
    icon: "01",
  },
  {
    title: "Financial Strategy",
    description:
      "Forward-looking financial planning, cash flow forecasting, and scenario modeling to help you scale with confidence.",
    icon: "02",
  },
  {
    title: "Accounting & Bookkeeping",
    description:
      "Comprehensive monthly accounting, reconciliations, and financial reporting that keeps your books clean and investor-ready.",
    icon: "03",
  },
  {
    title: "System Selection",
    description:
      "Evaluate, select, and implement the right financial systems for your business — ERP, accounting, and reporting tools.",
    icon: "04",
  },
];

const industries = [
  { name: "Tech & SaaS", description: "Subscription models, digital products, and high-growth startups" },
  { name: "Media & Entertainment", description: "Content creators, digital advertising, and streaming platforms" },
  { name: "Consumer Packaged Goods", description: "E-commerce brands, retail, and DTC companies" },
  { name: "Venture Capital", description: "Fund accounting, portfolio management, and LP reporting" },
];

const faqs = [
  {
    question: "What is a Fractional CFO?",
    answer:
      "A Fractional CFO is an experienced Chief Financial Officer who works with your business on a part-time or contract basis. You get executive-level financial leadership and strategic guidance without the cost of a full-time hire. This model is ideal for startups, growing companies, and businesses navigating transitions.",
  },
  {
    question: "Who is a good fit for Ocean Park Financial's services?",
    answer:
      "We work best with early-stage to mid-stage venture-funded companies, bootstrapped businesses generating revenue, and companies in the Tech, Media, CPG, and VC sectors. If you need strategic financial oversight but aren't ready for a full-time CFO, we're the right fit.",
  },
  {
    question: "How does the engagement process work?",
    answer:
      "We start with a complimentary discovery call to understand your business, goals, and pain points. From there, we propose a tailored engagement — whether that's ongoing fractional CFO support, a one-time project, or monthly accounting services. Engagements are flexible and scale with your needs.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "Toni Peneva and the Ocean Park Financial team specialize in Tech & SaaS, Media & Entertainment, Consumer Packaged Goods (CPG), and Venture Capital. This deep industry expertise means we speak your language and understand your unique financial challenges.",
  },
  {
    question: "How is Ocean Park Financial different from a traditional accounting firm?",
    answer:
      "We go far beyond bookkeeping. Ocean Park Financial provides strategic CFO-level guidance — cash flow management, financial modeling, investor relations support, and operational optimization. We're a partner in your growth, not just a number cruncher.",
  },
];

export default function Home() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Purple accent bar — left edge */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-purple z-10" />

        {/* Layered background */}
        <div className="absolute inset-0 bg-brand-black" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(183,148,246,0.12), transparent)",
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16 py-40 lg:py-48">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] tracking-tight mb-16">
            The Financial
            <br />
            <span className="text-brand-purple">Clarity</span> You
            <br className="hidden sm:block" /> Need
          </h1>

          <div className="flex flex-col sm:flex-row gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-brand-purple text-brand-black text-base font-bold rounded-xl hover:bg-brand-purple-light transition-all duration-300 hover:shadow-2xl hover:shadow-brand-purple/25 hover:-translate-y-0.5"
            >
              Book a Discovery Call
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-10 py-5 border-2 border-white/15 text-white text-base font-medium rounded-xl hover:border-brand-purple/40 hover:bg-white/5 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== STATS ==================== */}
      <section className="relative border-y border-white/10" style={{ backgroundColor: "#0E0E0E" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-16 lg:py-20">
          <div className="grid grid-cols-3 gap-12 lg:gap-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl lg:text-5xl font-black text-brand-purple tracking-tight">
                  {stat.value}
                </p>
                <p className="text-brand-gray-400 text-sm mt-3 tracking-wide uppercase font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ABOUT INTRO ==================== */}
      <section className="py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-28 items-center">
            <div>
              <SectionHeading
                eyebrow="About Ocean Park Financial"
                title="Your Trusted"
                highlight="Financial Partner"
                centered={false}
              />
              <p className="text-brand-gray-300 text-lg leading-relaxed mb-6">
                At the helm is CEO Toni Peneva, CPA, whose finance journey began on Wall Street
                supporting a managing director at a prominent hedge fund. After earning her CPA,
                Toni spent a decade in public accounting and then expanded her impact through
                fractional CFO roles.
              </p>
              <p className="text-brand-gray-300 text-lg leading-relaxed mb-10">
                Driven by a passion for the business domain, she has spent the past 15 years
                working alongside iconic founders and innovative tech companies from Silicon Valley
                to Silicon Beach.
              </p>
              <Link
                href="/about"
                className="group text-brand-purple font-semibold hover:text-brand-purple-light transition-colors inline-flex items-center gap-3 text-lg"
              >
                Learn more about Toni
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="relative">
              <div
                className="aspect-[4/5] rounded-3xl flex items-center justify-center relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(183,148,246,0.15) 0%, rgba(183,148,246,0.03) 100%)",
                  border: "1px solid rgba(183,148,246,0.2)",
                }}
              >
                <div className="text-center px-10">
                  <img
                    src="/toni-peneva.png"
                    alt="Toni Peneva, CPA"
                    className="w-32 h-32 mx-auto mb-8 rounded-full object-cover object-top"
                  />
                  <p className="text-white font-bold text-2xl mb-2">Toni Peneva, CPA</p>
                  <p className="text-brand-gray-400 text-base mb-1">Founder &amp; CEO</p>
                  <p className="text-brand-gray-500 text-sm">Santa Monica, California</p>
                </div>
                {/* left accent */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-purple" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES ==================== */}
      <section className="py-28 lg:py-36" style={{ backgroundColor: "#0E0E0E" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <SectionHeading
            eyebrow="What We Do"
            title="Services That Drive"
            highlight="Growth"
            description="Tailored financial solutions designed to empower companies to optimize operations, achieve financial clarity, and unlock their full potential."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative p-10 rounded-2xl transition-all duration-300"
                style={{
                  backgroundColor: "#0A0A0A",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {/* Number accent */}
                <span className="absolute top-8 right-10 text-7xl font-black text-white/[0.03] select-none">
                  {service.icon}
                </span>
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-8"
                  style={{ backgroundColor: "rgba(183,148,246,0.1)" }}
                >
                  <span className="text-brand-purple font-bold text-lg">{service.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-brand-gray-300 leading-relaxed text-base">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 text-brand-purple font-semibold text-lg hover:text-brand-purple-light transition-colors"
            >
              View all services
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== INDUSTRIES ==================== */}
      <section className="py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Deep Expertise Across"
            highlight="Key Sectors"
            description="From subscription-based models and digital advertising to CPG, community platforms, media, and bleeding-edge tech."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, i) => (
              <Link
                key={industry.name}
                href="/industries"
                className="group relative p-8 rounded-2xl transition-all duration-300 overflow-hidden"
                style={{
                  backgroundColor: "#111111",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <span className="absolute top-4 right-5 text-6xl font-black text-white/[0.03] select-none">
                  0{i + 1}
                </span>
                <h3 className="text-white font-bold text-xl mb-4 group-hover:text-brand-purple transition-colors relative">
                  {industry.name}
                </h3>
                <p className="text-brand-gray-400 text-sm leading-relaxed relative">
                  {industry.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CLIENTS & PARTNERS ==================== */}
      <section className="py-28 lg:py-36 overflow-hidden" style={{ backgroundColor: "#0E0E0E", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <SectionHeading
          eyebrow="Our Network"
          title="Clients &"
          highlight="Partners"
        />
        <ClientsCarousel />
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="py-28 lg:py-36">
        <div className="max-w-3xl mx-auto px-8 lg:px-16">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Have"
            highlight="Questions?"
            description="Everything you need to know about working with Ocean Park Financial."
          />
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Collapsible key={i} title={faq.question} defaultOpen={i === 0}>
                <p>{faq.answer}</p>
              </Collapsible>
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
            Ready to Gain Financial{" "}
            <span className="text-brand-purple">Clarity</span>?
          </h2>
          <p className="text-brand-gray-300 text-lg md:text-xl mb-14 max-w-2xl mx-auto leading-relaxed font-light">
            Let&apos;s talk about how Ocean Park Financial can help you navigate your next
            chapter — whether you&apos;re raising capital, optimizing cash flow, or preparing for
            scale.
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
