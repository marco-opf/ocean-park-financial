import Link from "next/link";

interface BlogPostProps {
  title: string;
  category: string;
  date: string;
  readTime: string;
  children: React.ReactNode;
}

export default function BlogPost({ title, category, date, readTime, children }: BlogPostProps) {
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
        <div className="relative z-10 max-w-3xl mx-auto px-8 lg:px-16">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-brand-gray-400 text-sm mb-10 hover:text-brand-purple transition-colors"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Blog
          </Link>
          <div className="flex items-center gap-4 mb-8">
            <span
              className="px-4 py-1.5 rounded-full text-brand-purple text-xs font-semibold tracking-wide"
              style={{ backgroundColor: "rgba(183,148,246,0.1)" }}
            >
              {category}
            </span>
            <span className="text-brand-gray-500 text-sm">{date}</span>
            <span className="text-brand-gray-500 text-sm">{readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
            {title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-8 lg:px-16">
          <div className="prose-custom space-y-8 text-brand-gray-300 text-lg leading-relaxed">
            {children}
          </div>

          {/* Author */}
          <div
            className="mt-20 p-8 rounded-2xl flex items-center gap-6"
            style={{ backgroundColor: "#111111", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center shrink-0"
              style={{ backgroundColor: "rgba(183,148,246,0.12)" }}
            >
              <span className="text-2xl font-bold text-brand-purple">TP</span>
            </div>
            <div>
              <p className="text-white font-bold text-lg">Toni Peneva, CPA</p>
              <p className="text-brand-gray-400 text-sm mt-1">
                Founder &amp; CEO, Ocean Park Financial. Fractional CFO specializing in Tech, Media, CPG, and VC.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 border-y border-white/10"
        style={{
          background: "linear-gradient(135deg, rgba(183,148,246,0.06) 0%, #0E0E0E 50%, rgba(183,148,246,0.06) 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-8 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">
            Need Help With Your <span className="text-brand-purple">Finances</span>?
          </h2>
          <p className="text-brand-gray-300 text-lg mb-10 font-light">
            Book a free discovery call to discuss how Ocean Park Financial can support your growth.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-5 bg-brand-purple text-brand-black font-bold rounded-xl hover:bg-brand-purple-light transition-all duration-300 text-base"
          >
            Book a Call
          </Link>
        </div>
      </section>
    </>
  );
}
