import BlogPost from "@/components/BlogPost";

export const metadata = {
  title: "Preparing for Due Diligence: A Founder's Financial Checklist | Ocean Park Financial",
};

export default function Post() {
  return (
    <BlogPost
      title="Preparing for Due Diligence: A Founder&#39;s Financial Checklist"
      category="Fundraising"
      date="December 2025"
      readTime="10 min read"
    >
      <p>
        You&apos;ve had a great pitch meeting. The partner is excited. They want to move forward
        with due diligence. This is where deals are made — or lost. Here&apos;s how to make sure
        your financial house is in order before investors start looking under the hood.
      </p>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Clean Financial Statements</h2>
      <p>
        At minimum, you need GAAP-compliant income statements, balance sheets, and cash flow
        statements for the past two to three years (or since inception if you&apos;re earlier
        stage). Monthly granularity is expected. If your financials are on a cash basis, consider
        converting to accrual — it&apos;s what institutional investors expect.
      </p>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Revenue Detail and Contracts</h2>
      <p>
        Investors will want to understand your revenue composition. Prepare a detailed breakdown
        by customer, by product line, and by contract type. Have your key customer contracts
        organized and accessible. If you have concentration risk — where one or two customers
        represent a large percentage of revenue — be ready to address it proactively.
      </p>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Cap Table Accuracy</h2>
      <p>
        Your capitalization table needs to be perfect. Every option grant, every SAFE note, every
        convertible instrument should be documented and reconciled. Sloppy cap tables are a red
        flag that can derail deals. Use a cap table management tool and keep it current.
      </p>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Tax Compliance</h2>
      <p>
        All federal, state, and local tax filings should be current. Any outstanding tax
        liabilities need to be disclosed. If you operate in multiple states, make sure your
        nexus analysis and sales tax filings are up to date. Tax surprises during due diligence
        erode trust quickly.
      </p>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Financial Model</h2>
      <p>
        Your forward-looking financial model should be a connected three-statement model with
        clearly stated assumptions. Investors will stress-test your assumptions, so make sure
        they&apos;re defensible and grounded in actual business data. Include at least three
        scenarios: base, upside, and downside.
      </p>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Data Room</h2>
      <p>
        Organize everything into a virtual data room before investors ask. Categories should
        include corporate documents, financial statements, tax returns, contracts, IP
        documentation, employee agreements, and insurance policies. A well-organized data room
        signals professionalism and accelerates the timeline.
      </p>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Start Early</h2>
      <p>
        The biggest mistake founders make is waiting until a term sheet is imminent to get
        organized. Start building your data room and cleaning up your financials at least three
        months before you plan to fundraise. The best time to prepare for due diligence is when
        you don&apos;t need to — it&apos;s much harder to do under the pressure of an active deal.
      </p>
    </BlogPost>
  );
}
