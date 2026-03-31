import BlogPost from "@/components/BlogPost";

export const metadata = {
  title: "The Runway Reality Check: What Founders Get Wrong About Cash | Ocean Park Financial",
};

export default function Post() {
  return (
    <BlogPost
      title="The Runway Reality Check: What Founders Get Wrong About Cash"
      category="Cash Flow"
      date="March 2026"
      readTime="8 min read"
    >
      <p>
        Most founders think runway is simple math: cash in the bank divided by monthly burn rate.
        If you have $1.2 million and you&apos;re burning $100K per month, you have 12 months of runway.
        Simple, right?
      </p>
      <p>
        Not even close. This back-of-the-napkin calculation is one of the most dangerous
        oversimplifications in startup finance — and it leads founders to make critical mistakes
        that can sink otherwise promising companies.
      </p>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Burn Rate Illusion</h2>
      <p>
        Your burn rate is not a fixed number. It fluctuates month to month based on hiring
        timelines, vendor payments, seasonal patterns, and one-time expenses. The month you
        sign a new office lease looks very different from a month where you&apos;re just paying
        salaries and cloud hosting.
      </p>
      <p>
        Smart founders track both gross burn (total cash out) and net burn (cash out minus cash
        in). If you&apos;re only looking at gross burn, you&apos;re ignoring revenue entirely — and
        that paints a misleadingly grim picture if you&apos;re generating any income at all.
      </p>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Three Runway Numbers You Actually Need</h2>
      <p>
        Instead of a single runway figure, you should be tracking three scenarios at all times:
      </p>
      <p>
        <strong className="text-white">Best case:</strong> What&apos;s your runway if revenue grows as
        projected and you hold expenses steady? This is your optimistic planning number.
      </p>
      <p>
        <strong className="text-white">Base case:</strong> What&apos;s your runway if revenue stays flat
        and expenses grow modestly with planned hires? This is your operating reality.
      </p>
      <p>
        <strong className="text-white">Worst case:</strong> What&apos;s your runway if a major customer
        churns, a deal slips, or you face an unexpected expense? This is your survival number.
      </p>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Hidden Cash Killers</h2>
      <p>
        Beyond the burn rate miscalculation, several cash flow traps catch founders off guard.
        Accounts receivable is a big one — you may have booked $50K in revenue, but if your
        customers are on Net 60 terms, that cash won&apos;t hit your account for two months.
        Revenue on paper is not cash in the bank.
      </p>
      <p>
        Prepaid expenses are another silent killer. Annual software contracts, insurance premiums,
        and security deposits all create large cash outflows that don&apos;t show up evenly in your
        monthly P&L but absolutely impact your bank balance.
      </p>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">When to Start Fundraising</h2>
      <p>
        If you&apos;re planning to raise your next round, the conventional wisdom says to start
        6 months before you run out of cash. In reality, you should start 9 to 12 months out.
        Fundraising takes longer than you expect, and investors can smell desperation from a mile
        away. The best time to raise is when you don&apos;t urgently need the money.
      </p>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Bottom Line</h2>
      <p>
        Cash management isn&apos;t glamorous, but it&apos;s the difference between companies that
        survive to find product-market fit and those that run out of time. Build a real cash flow
        model, track it weekly, and make sure someone on your team — whether that&apos;s a
        full-time CFO or a fractional one — is watching the numbers with the rigor they deserve.
      </p>
    </BlogPost>
  );
}
