import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "About | Ocean Park Financial",
  description: "Meet Toni Peneva, CPA — Founder & CEO of Ocean Park Financial. From Wall Street to Silicon Beach.",
};

const timeline = [
  {
    period: "Wall Street Origins",
    description:
      "Toni's finance journey began on Wall Street, supporting a managing director at a prominent hedge fund. This foundation in high-stakes financial management shaped her strategic approach to business finance.",
  },
  {
    period: "CPA & Public Accounting",
    description:
      "After earning her CPA, Toni spent a decade in public accounting, building deep expertise in audit, tax strategy, and financial compliance across multiple industries.",
  },
  {
    period: "Fractional CFO Leadership",
    description:
      "Expanding her impact through fractional CFO roles, Toni began working directly with founders and executive teams to drive operational excellence and financial clarity.",
  },
  {
    period: "Ocean Park Financial",
    description:
      "Founded Ocean Park Financial to provide white-glove financial advisory services, partnering as a trusted advisor for executive-level needs — from Silicon Valley to Silicon Beach.",
  },
];

const values = [
  {
    title: "Strategic Partnership",
    description: "We don't just crunch numbers. We become an extension of your leadership team, providing insight that drives real business outcomes.",
  },
  {
    title: "Operational Excellence",
    description: "Continuous improvement of operating controls, streamlined finance operations, and optimized processes that scale with your business.",
  },
  {
    title: "Industry Expertise",
    description: "Deep understanding of Tech, Media, CPG, and VC sectors means we speak your language and anticipate your challenges before they arise.",
  },
  {
    title: "Founder-First Approach",
    description: "Having worked alongside iconic founders for over 15 years, we understand the unique pressures and priorities of building something transformative.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-purple" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-black to-brand-purple/5" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-brand-purple font-medium text-sm tracking-widest uppercase mb-8">
            About Ocean Park Financial
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[0.95] mb-6">
            Built by a <span className="text-brand-purple">Founder</span>,
            <br />
            for Founders
          </h1>
          <p className="text-brand-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed">
            Ocean Park Financial delivers white-glove financial advisory services for companies of all sizes — partnering as your trusted advisor for executive-level needs.
          </p>
        </div>
      </section>

      {/* Toni Bio */}
      <section className="py-24 bg-brand-dark/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-2">
              <div className="sticky top-28">
                <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-brand-purple/20 to-brand-purple/5 border border-brand-purple/20 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center p-8">
                    <img
                      src="/toni-peneva.png"
                      alt="Toni Peneva, CPA"
                      className="w-28 h-28 mx-auto mb-6 rounded-full object-cover object-top"
                    />
                    <p className="text-white font-bold text-2xl mb-1">Toni Peneva</p>
                    <p className="text-brand-purple text-sm font-medium mb-4">CPA</p>
                    <p className="text-brand-gray-400 text-sm">Founder &amp; CEO</p>
                    <p className="text-brand-gray-400 text-sm">Ocean Park Financial, LLC</p>
                    <p className="text-brand-gray-400 text-sm mt-1">Santa Monica, California</p>

                    <div className="mt-8 pt-6 border-t border-white/10">
                      <p className="text-brand-gray-400 text-xs mb-3">Education</p>
                      <p className="text-white text-sm font-medium">B.S. Business Administration</p>
                      <p className="text-brand-gray-400 text-xs">Eastern Oregon University</p>
                    </div>
                  </div>
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-purple" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold text-white mb-8">
                Meet <span className="text-brand-purple">Toni Peneva</span>
              </h2>

              <div className="space-y-6 text-brand-gray-300 leading-relaxed">
                <p>
                  At the helm of the Ocean Park Financial team is CEO Toni Peneva, whose finance journey began on Wall Street, supporting a managing director at a prominent hedge fund. After earning her CPA, Toni spent a decade in public accounting and then expanded her impact through fractional CFO roles.
                </p>
                <p>
                  Drived by a passion for the business domain, she has spent the past 15 years working alongside iconic founders and innovative tech companies from Silicon Valley to Silicon Beach.
                </p>
                <p>
                  Toni serves as a dynamic CFO in a contract capacity, specializing in the intersection of finance and operational excellence within the Tech, Media, Consumer Packaged Goods (CPG), and Venture Capital (VC) sectors.
                </p>
                <p>
                  With nearly two decades of experience, Toni leverages a deep understanding of financial strategy and operational improvement to drive business optimization for early-stage venture-funded companies. Her role involves providing comprehensive accounting and finance solutions that not only enhance EBITDA but also streamline finance operations through continuous improvement of operating controls.
                </p>
                <p>
                  Toni&apos;s expertise spans multiple industries — from subscription-based models and digital advertising to CPG, community platforms, media, and bleeding-edge tech — equipping her with the strategic vision and hands-on experience to support transformative growth.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Journey"
            title="From Wall Street to"
            highlight="Silicon Beach"
          />
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div key={i} className="relative flex gap-8 pb-12 last:pb-0">
                {/* Line */}
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-brand-purple border-4 border-brand-black z-10" />
                  {i !== timeline.length - 1 && (
                    <div className="w-0.5 flex-1 bg-brand-purple/20" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-8">
                  <h3 className="text-xl font-bold text-white mb-3">{item.period}</h3>
                  <p className="text-brand-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-brand-dark/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Approach"
            title="What Sets Us"
            highlight="Apart"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-8 rounded-2xl bg-brand-black border border-white/5 hover:border-brand-purple/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-brand-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-brand-purple/10 via-brand-dark/50 to-brand-purple/10 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let&apos;s Build Your Financial <span className="text-brand-purple">Future</span>
          </h2>
          <p className="text-brand-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Schedule a complimentary discovery call with Toni to discuss how Ocean Park Financial can support your growth.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 bg-brand-purple text-brand-black font-semibold rounded-lg hover:bg-brand-purple-light transition-all duration-300 text-lg"
          >
            Book a Call
          </Link>
        </div>
      </section>
    </>
  );
}
