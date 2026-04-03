"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-navy border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-2 h-10 bg-brand-purple rounded-full" />
              <div>
                <span className="text-lg font-bold text-white">Ocean Park</span>
                <span className="block text-xs text-brand-purple font-medium tracking-widest uppercase">
                  Financial
                </span>
              </div>
            </Link>
            <p className="text-brand-gray-400 text-sm leading-relaxed">
              White-glove financial advisory services for companies of all sizes. Your trusted partner for executive-level financial strategy.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Fractional CFO",
                "Financial Strategy",
                "Accounting & Bookkeeping",
                "System Selection",
                "Clean-Up & Optimization",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-brand-gray-400 text-sm hover:text-brand-purple transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
              Industries
            </h4>
            <ul className="space-y-3">
              {[
                "Tech & SaaS",
                "Media & Entertainment",
                "Consumer Packaged Goods",
                "Venture Capital",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/industries"
                    className="text-brand-gray-400 text-sm hover:text-brand-purple transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm text-brand-gray-400">
              <li>Santa Monica, California</li>
              <li>
                <a href="mailto:info@oceanparkfinancial.co" className="hover:text-brand-purple transition-colors">
                  info@oceanparkfinancial.co
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Ocean Park Financial, LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/contact" className="text-brand-gray-500 text-xs hover:text-brand-purple transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-brand-gray-500 text-xs hover:text-brand-purple transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
