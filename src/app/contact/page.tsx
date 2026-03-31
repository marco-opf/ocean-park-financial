"use client";

import { useState } from "react";
import Collapsible from "@/components/Collapsible";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    revenue: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    alert("Thank you! We'll be in touch within 24 hours.");
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-purple" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-black to-brand-purple/5" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-brand-purple font-medium text-sm tracking-widest uppercase mb-8">
            Get in Touch
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[0.95] mb-6">
            Let&apos;s Start a
            <br />
            <span className="text-brand-purple">Conversation</span>
          </h1>
          <p className="text-brand-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed">
            Ready to bring financial clarity to your business? Book a complimentary discovery call or send us a message.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-24 bg-brand-dark/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-white mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-brand-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-lg bg-brand-black border border-white/10 text-white placeholder:text-brand-gray-500 focus:outline-none focus:border-brand-purple transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-lg bg-brand-black border border-white/10 text-white placeholder:text-brand-gray-500 focus:outline-none focus:border-brand-purple transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-brand-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-lg bg-brand-black border border-white/10 text-white placeholder:text-brand-gray-500 focus:outline-none focus:border-brand-purple transition-colors"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-gray-300 mb-2">
                      Annual Revenue Range
                    </label>
                    <select
                      value={formData.revenue}
                      onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-lg bg-brand-black border border-white/10 text-white focus:outline-none focus:border-brand-purple transition-colors appearance-none"
                    >
                      <option value="" className="bg-brand-dark">Select range</option>
                      <option value="pre-revenue" className="bg-brand-dark">Pre-Revenue</option>
                      <option value="0-1m" className="bg-brand-dark">$0 – $1M</option>
                      <option value="1-5m" className="bg-brand-dark">$1M – $5M</option>
                      <option value="5-20m" className="bg-brand-dark">$5M – $20M</option>
                      <option value="20m+" className="bg-brand-dark">$20M+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-gray-300 mb-2">
                    Service of Interest
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-lg bg-brand-black border border-white/10 text-white focus:outline-none focus:border-brand-purple transition-colors appearance-none"
                  >
                    <option value="" className="bg-brand-dark">Select a service</option>
                    <option value="fractional-cfo" className="bg-brand-dark">Fractional CFO</option>
                    <option value="financial-strategy" className="bg-brand-dark">Financial Strategy</option>
                    <option value="accounting" className="bg-brand-dark">Accounting &amp; Bookkeeping</option>
                    <option value="system-selection" className="bg-brand-dark">System Selection &amp; Implementation</option>
                    <option value="cleanup" className="bg-brand-dark">Clean-Up &amp; Optimization</option>
                    <option value="not-sure" className="bg-brand-dark">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-gray-300 mb-2">
                    Tell Us About Your Needs
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-lg bg-brand-black border border-white/10 text-white placeholder:text-brand-gray-500 focus:outline-none focus:border-brand-purple transition-colors resize-none"
                    placeholder="What are you looking for help with? Tell us about your business, stage, and any specific challenges..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 bg-brand-purple text-brand-black font-semibold rounded-lg hover:bg-brand-purple-light transition-all duration-300 hover:shadow-lg hover:shadow-brand-purple/20"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Info Sidebar */}
            <div className="lg:col-span-2">
              <div className="sticky top-28 space-y-8">
                {/* Direct Contact */}
                <div className="p-8 rounded-2xl bg-brand-black border border-white/5">
                  <h3 className="text-lg font-bold text-white mb-6">Direct Contact</h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-brand-purple/10 flex items-center justify-center text-brand-purple shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-brand-gray-400 text-xs mb-1">Email</p>
                        <a href="mailto:info@oceanparkfinance.com" className="text-white text-sm hover:text-brand-purple transition-colors">
                          info@oceanparkfinance.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-brand-purple/10 flex items-center justify-center text-brand-purple shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-brand-gray-400 text-xs mb-1">Location</p>
                        <p className="text-white text-sm">Beverly Hills, California</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-brand-purple/10 flex items-center justify-center text-brand-purple shrink-0">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-brand-gray-400 text-xs mb-1">LinkedIn</p>
                        <a
                          href="https://www.linkedin.com/in/tonipenevacpa/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white text-sm hover:text-brand-purple transition-colors"
                        >
                          Toni Peneva, CPA
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What to Expect */}
                <div className="p-8 rounded-2xl bg-brand-black border border-white/5">
                  <h3 className="text-lg font-bold text-white mb-4">What to Expect</h3>
                  <div className="space-y-4">
                    {[
                      { step: "1", text: "We respond within 24 hours" },
                      { step: "2", text: "30-minute complimentary discovery call" },
                      { step: "3", text: "Custom proposal within one week" },
                      { step: "4", text: "Onboarding and kickoff" },
                    ].map((item) => (
                      <div key={item.step} className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple text-xs font-bold shrink-0">
                          {item.step}
                        </span>
                        <p className="text-brand-gray-300 text-sm">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Common <span className="text-brand-purple">Questions</span>
          </h2>
          <div className="space-y-4">
            <Collapsible title="How much do your services cost?">
              <p>
                Our pricing is tailored to each engagement based on scope, complexity, and frequency. Fractional CFO engagements typically range from $3,000 to $15,000 per month depending on time commitment. We&apos;ll provide a clear, transparent proposal after our discovery call.
              </p>
            </Collapsible>
            <Collapsible title="Do you work with companies outside of California?">
              <p>
                Yes! While we&apos;re based in Beverly Hills, we work with companies across the United States. Most of our engagements are conducted virtually, with in-person meetings available for Los Angeles-area clients.
              </p>
            </Collapsible>
            <Collapsible title="How quickly can you start?">
              <p>
                For most engagements, we can begin within 1–2 weeks of signing. For urgent situations like fundraising support or audit preparation, we can often accommodate faster timelines.
              </p>
            </Collapsible>
            <Collapsible title="What's the minimum engagement length?">
              <p>
                We typically recommend a minimum three-month engagement for fractional CFO services to allow time for proper onboarding, assessment, and implementation. Project-based work such as clean-ups and system implementations have defined timelines based on scope.
              </p>
            </Collapsible>
          </div>
        </div>
      </section>
    </>
  );
}
