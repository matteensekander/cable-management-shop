const products = [
  {
    name: 'Under-Desk Cable Tray',
    yourPrice: 24.99,
    aliCost: 6.00,
    link: 'https://www.aliexpress.com/w/wholesale-cable-management-tray-under-desk.html',
    notes: 'Search "under desk cable tray clamp mount steel mesh". Pick one with 4+ stars, 500+ orders.',
  },
  {
    name: 'Velcro Cable Tie Pack 50ct',
    yourPrice: 9.99,
    aliCost: 1.50,
    link: 'https://www.aliexpress.com/w/wholesale-velcro-cable-ties.html',
    notes: 'Search "velcro cable ties 50 pack black reusable". Very cheap, huge margin.',
  },
  {
    name: 'Cable Raceway Kit',
    yourPrice: 19.99,
    aliCost: 5.00,
    link: 'https://www.aliexpress.com/w/wholesale-cable-raceway-kit.html',
    notes: 'Search "cable raceway wall kit with adhesive". Look for 6ft kit with connectors included.',
  },
  {
    name: 'Complete Desk Cable Kit',
    yourPrice: 49.99,
    aliCost: 18.00,
    link: 'https://www.aliexpress.com/w/wholesale-cable-management-kit.html',
    notes: 'Bundle: order 1x tray (~$6) + 1x velcro ties (~$2) + 1x clips (~$2) + 1x box (~$8) separately and ship together, OR find a pre-made kit listing.',
  },
  {
    name: 'Cable Sleeve 6ft',
    yourPrice: 14.99,
    aliCost: 2.50,
    link: 'https://www.aliexpress.com/w/wholesale-braided-cable-sleeve.html',
    notes: 'Search "braided cable sleeve split loom 6ft black". Check it has the lengthwise slit.',
  },
  {
    name: 'Adhesive Cable Clips 30ct',
    yourPrice: 7.99,
    aliCost: 1.50,
    link: 'https://www.aliexpress.com/w/wholesale-adhesive-cable-clips.html',
    notes: 'Search "self adhesive cable clips 30 pack". Get mixed sizes if possible.',
  },
  {
    name: 'Cable Management Box',
    yourPrice: 29.99,
    aliCost: 12.00,
    link: 'https://www.aliexpress.com/w/wholesale-cable-management-box.html',
    notes: 'Search "cable management box power strip hider". Make sure interior fits standard power strip.',
  },
  {
    name: 'Dual Monitor Cable Kit',
    yourPrice: 39.99,
    aliCost: 15.00,
    link: 'https://www.aliexpress.com/w/wholesale-cable-management-kit.html',
    notes: 'Bundle: order 1x raceway kit (~$5) + 1x velcro 30ct (~$1.50) + 1x clips 20ct (~$1.50) + 1x sleeve 3ft (~$1.50). Ship together.',
  },
];

export default function FulfillmentPage() {
  const totalAvgProfit = products.reduce((sum, p) => sum + (p.yourPrice - p.aliCost), 0) / products.length;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1C1C1C] mb-2">Fulfillment Guide</h1>
        <p className="text-[#888] text-sm">Private page — bookmark this. When an order comes in, follow these steps.</p>
      </div>

      {/* How to fulfill */}
      <div className="bg-[#F0EEE9] border border-[#E8E6E1] rounded p-6 mb-8">
        <h2 className="font-semibold text-[#1C1C1C] mb-4">How to fulfill every order (3 steps)</h2>
        <ol className="space-y-3 text-sm text-[#444]">
          <li className="flex gap-3"><span className="font-bold text-[#1C1C1C] w-5">1.</span> Check your <a href="https://dashboard.stripe.com/payments" target="_blank" rel="noreferrer" className="underline text-[#1C1C1C]">Stripe dashboard</a> for new payments. Click the payment to see the customer name, address, and what they ordered.</li>
          <li className="flex gap-3"><span className="font-bold text-[#1C1C1C] w-5">2.</span> Find the product in the table below → click the AliExpress link → find a matching item → add to cart → at checkout enter the <strong>customer&apos;s address</strong> (not yours).</li>
          <li className="flex gap-3"><span className="font-bold text-[#1C1C1C] w-5">3.</span> Keep the AliExpress tracking number. If the customer emails asking where their order is, check that tracking number.</li>
        </ol>
      </div>

      {/* Products table */}
      <div className="space-y-4">
        {products.map((p) => {
          const profit = p.yourPrice - p.aliCost;
          const margin = Math.round((profit / p.yourPrice) * 100);
          return (
            <div key={p.name} className="border border-[#E8E6E1] rounded bg-white p-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <h3 className="font-semibold text-[#1C1C1C]">{p.name}</h3>
                <div className="flex items-center gap-4 text-sm flex-shrink-0">
                  <span className="text-[#888]">You charge: <strong className="text-[#1C1C1C]">${p.yourPrice.toFixed(2)}</strong></span>
                  <span className="text-[#888]">AliExpress cost: <strong className="text-[#1C1C1C]">~${p.aliCost.toFixed(2)}</strong></span>
                  <span className="bg-green-100 text-green-700 font-semibold px-2.5 py-1 rounded text-xs">
                    +${profit.toFixed(2)} profit ({margin}%)
                  </span>
                </div>
              </div>
              <p className="text-sm text-[#666] mb-3">{p.notes}</p>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#1C1C1C] hover:bg-[#333] text-white text-xs font-medium px-4 py-2 rounded transition-colors"
              >
                Open AliExpress →
              </a>
            </div>
          );
        })}
      </div>

      {/* Summary */}
      <div className="mt-8 border-t border-[#E8E6E1] pt-6 text-sm text-[#888]">
        Average profit per order: <strong className="text-[#1C1C1C]">${totalAvgProfit.toFixed(2)}</strong> &nbsp;·&nbsp;
        Shipping time from AliExpress to US: <strong className="text-[#1C1C1C]">7–15 days</strong> &nbsp;·&nbsp;
        Tip: tell customers &ldquo;ships within 2–3 business days&rdquo; to give yourself time.
      </div>
    </div>
  );
}
