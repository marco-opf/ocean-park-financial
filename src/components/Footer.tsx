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
                <a href="mailto:info@oceanparkfinance.com" className="hover:text-brand-purple transition-colors">
                  info@oceanparkfinance.com
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.linkedin.com/in/tonipenevacpa/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-brand-gray-400 hover:bg-brand-purple/20 hover:text-brand-purple transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
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
