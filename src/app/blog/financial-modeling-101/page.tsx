import BlogPost from "@/components/BlogPost";

export const metadata = {
  title: "Financial Modeling 101: Building Your First Three-Statement Model | Ocean Park Financial",
};

export default function Post() {
  return (
    <BlogPost
      title="Financial Modeling 101: Building Your First Three-Statement Model"
      category="Financial Strategy"
      date="September 2025"
      readTime="12 min read"
    >
      <p>
        A connected three-statement financial model — linking the income statement, balance sheet,
        and cash flow statement — is the foundation of every serious financial plan. Whether
        you&apos;re fundraising, planning headcount, or just trying to understand your business
        better, here&apos;s how to build one.
      </p>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Start With the Income Statement</h2>
      <p>
        The income statement (or P&L) is your starting point. Build it from the top down: start
        with revenue, subtract cost of goods sold to get gross profit, then subtract operating
        expenses to get operating income. Your revenue model should be bottoms-up wherever
        possible — driven by specific assumptions about customers, pricing, and growth rates
        rather than top-down market sizing.
      </p>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Build the Balance Sheet</h2>
      <p>
        The balance sheet captures your assets, liabilities, and equity at a point in time. For
        most startups, the key balance sheet items are cash, accounts receivable, accounts
        payable, debt, and equity. The balance sheet must balance — total assets must equal total
        liabilities plus equity. If it doesn&apos;t, you have an error somewhere.
      </p>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Connect With the Cash Flow Statement</h2>
      <p>
        The cash flow statement bridges the income statement and balance sheet. It starts with
        net income, adjusts for non-cash items like depreciation, and then accounts for changes
        in working capital, capital expenditures, and financing activities. The ending cash
        balance on your cash flow statement must match the cash line on your balance sheet.
        This connection is what makes the model dynamic and internally consistent.
      </p>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Assumptions Drive Everything</h2>
      <p>
        The quality of your model depends entirely on the quality of your assumptions. Create a
        dedicated assumptions tab where every key input is clearly labeled and easy to change.
        Revenue growth rate, headcount plan, average salary, customer acquisition cost — all of
        these should be adjustable from one place. This makes scenario analysis as simple as
        changing a few cells.
      </p>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Build for Scenarios</h2>
      <p>
        A model with one scenario is an opinion. A model with three scenarios is a tool.
        Build in the ability to toggle between base, upside, and downside cases. This lets you
        answer questions like: what happens if we grow 50% slower than projected? What if we
        lose our biggest customer? What if we raise less than we planned?
      </p>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Common Mistakes to Avoid</h2>
      <p>
        <strong className="text-white">Hardcoded numbers:</strong> Every number in your model
        should flow from an assumption or a formula. Hardcoded values are impossible to audit
        and break when you try to run scenarios.
      </p>
      <p>
        <strong className="text-white">Circular references:</strong> These happen most often with
        interest expense calculations. Use an iterative calculation or a simplifying assumption
        to break the circularity.
      </p>
      <p>
        <strong className="text-white">Over-complexity:</strong> Your model should be as simple
        as possible while still capturing the key dynamics of your business. A 50-tab model that
        nobody understands is less useful than a clean 5-tab model that everyone trusts.
      </p>

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">When to Get Help</h2>
      <p>
        If financial modeling isn&apos;t your strength, that&apos;s completely normal — it
        shouldn&apos;t have to be. A fractional CFO can build or refine your model, train your
        team to use it, and ensure it tells the story investors and board members need to hear.
        The model is a living document that should evolve as your business does.
      </p>
    </BlogPost>
  );
}
