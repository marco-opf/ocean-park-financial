"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Fractional CFO", href: "/services#fractional-cfo" },
      { label: "Financial Strategy", href: "/services#financial-strategy" },
      { label: "Accounting & Bookkeeping", href: "/services#accounting" },
      { label: "System Selection & Implementation", href: "/services#system-selection" },
      { label: "Clean-Up & Optimization", href: "/services#cleanup" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    dropdown: [
      { label: "Tech & SaaS", href: "/industries#tech" },
      { label: "Media & Entertainment", href: "/industries#media" },
      { label: "Consumer Packaged Goods", href: "/industries#cpg" },
      { label: "Venture Capital", href: "/industries#vc" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-black/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-2 h-10 bg-brand-purple rounded-full group-hover:h-12 transition-all duration-300" />
            <div>
              <span className="text-xl font-bold text-white tracking-tight">
                Ocean Park
              </span>
              <span className="block text-xs text-brand-purple font-medium tracking-widest uppercase">
                Financial
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown && handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1 ${
                    pathname === link.href
                      ? "text-brand-purple"
                      : "text-brand-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                  {link.dropdown && (
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeDropdown === link.label ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                {link.dropdown && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-brand-dark border border-white/10 rounded-xl shadow-2xl shadow-brand-purple/5 overflow-hidden animate-fadeIn">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-5 py-3 text-sm text-brand-gray-300 hover:text-white hover:bg-brand-purple/10 transition-colors border-l-2 border-transparent hover:border-brand-purple"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-6 py-2.5 bg-brand-purple text-brand-black text-sm font-semibold rounded-lg hover:bg-brand-purple-light transition-colors"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-brand-gray-300 hover:text-white"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-brand-dark border-t border-white/5 animate-fadeIn">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className={`block px-4 py-3 text-sm font-medium rounded-lg ${
                    pathname === link.href
                      ? "text-brand-purple bg-brand-purple/10"
                      : "text-brand-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="ml-4 mt-1 space-y-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2 text-xs text-brand-gray-400 hover:text-brand-purple"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="block mt-4 px-4 py-3 bg-brand-purple text-brand-black text-sm font-semibold rounded-lg text-center"
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </nav>
  );
}
