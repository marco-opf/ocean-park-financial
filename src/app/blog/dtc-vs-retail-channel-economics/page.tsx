import BlogPost from "@/components/BlogPost";

export const metadata = {
  title: "DTC vs. Retail: Understanding Channel Economics for CPG Brands | Ocean Park Financial",
};

export default function Post() {
  return (
    <BlogPost
      title="DTC vs. Retail: Understanding Channel Economics for CPG Brands"
      category="CPG"
      date="October 2025"
      readTime="8 min read"
    >
      <p>
        The margin math is different for every channel. A product that&apos;s highly profitable
        sold direct-to-consumer might lose money in retail — and vice versa. Here&apos;s how to
        think about channel economics as a CPG founder.
      </p>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Direct-to-Consumer Economics</h2>
      <p>
        DTC is attractive because you own the customer relationship and capture the full retail
        margin. But that margin comes with costs that are easy to underestimate: customer
        acquisition costs (which continue to rise across all digital channels), fulfillment and
        shipping expenses, returns processing, and the technology stack required to run an
        e-commerce operation. True DTC profitability requires disciplined CAC management and
        strong repeat purchase rates.
      </p>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Amazon as a Channel</h2>
      <p>
        Amazon is its own beast. The platform gives you access to massive traffic, but between
        referral fees (typically 15%), FBA fees, advertising costs, and the constant pressure
        of competition, your margins can get squeezed significantly. Factor in the lack of
        customer data ownership and the risk of Amazon launching competing products, and you
        need to be very intentional about your Amazon strategy.
      </p>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Retail and Wholesale</h2>
      <p>
        Getting into retail sounds like a milestone — and it is. But the economics are different
        from what most founders expect. Wholesale margins are typically 50% of retail, meaning
        you sell to the retailer at half the shelf price. Add in slotting fees, trade promotions,
        chargebacks, and deductions, and your actual margin per unit can be surprisingly thin.
        Volume makes up for it, but only if you manage costs carefully.
      </p>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Blended Approach</h2>
      <p>
        Most successful CPG brands don&apos;t pick one channel — they build a portfolio. DTC for
        margin and customer data. Amazon for reach and discovery. Retail for credibility and
        scale. The key is understanding the true unit economics of each channel and allocating
        resources accordingly. A product that costs $5 to make and sells for $20 DTC might need
        a completely different pricing strategy at wholesale.
      </p>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Trade Spend Tracking</h2>
      <p>
        One of the most overlooked areas in CPG finance is trade spend — the money you invest
        in promotions, displays, and retailer incentives. For many CPG brands, trade spend
        represents 15 to 25 percent of gross revenue. Yet most founders have poor visibility
        into what they&apos;re spending and what return they&apos;re getting. Building a trade
        spend tracking system is essential for retail profitability.
      </p>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Know Your True Cost</h2>
      <p>
        The bottom line is this: you need to know your fully loaded cost per unit for each
        channel, including all the hidden costs that don&apos;t show up on a simple P&L. Only
        then can you make smart decisions about where to invest, where to pull back, and how
        to price your products for sustainable growth.
      </p>
    </BlogPost>
  );
}
