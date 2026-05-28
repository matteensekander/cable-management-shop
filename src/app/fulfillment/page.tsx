const products = [
  {
    name: 'Under-Desk Cable Tray',
    yourPrice: 24.99,
    aliCost: 4.00,
    link: 'https://www.aliexpress.us/item/3256807335975547.html',
    badge: '4.5★ · 4,000+ sold',
    notes: 'Direct link to exact item. At checkout enter the customer\'s address, not yours.',
  },
  {
    name: 'Velcro Cable Tie Pack 50ct',
    yourPrice: 9.99,
    aliCost: 1.61,
    link: 'https://www.aliexpress.us/item/3256806893053801.html',
    badge: '4.9★ · 5,000+ sold',
    notes: 'Direct link to exact item. Order the 50-pack size option.',
  },
  {
    name: 'Cable Raceway Kit',
    yourPrice: 19.99,
    aliCost: 5.16,
    link: 'https://www.aliexpress.us/item/3256811636365177.html',
    badge: '4.9★ · 5,000+ sold',
    notes: 'Direct link to exact item. Select the 2-meter or 3-meter option.',
  },
  {
    name: 'Complete Desk Cable Kit',
    yourPrice: 49.99,
    aliCost: 17.00,
    link: '',
    badge: 'Bundle — 4 separate orders',
    notes: 'Order these 4 items separately and they\'ll ship to the customer: 1× Cable Tray + 1× Velcro Ties + 1× Cable Clips + 1× Cable Management Box. Use the individual links below.',
    isBundle: true,
    bundleItems: [
      { name: 'Cable Tray', link: 'https://www.aliexpress.us/item/3256807335975547.html' },
      { name: 'Velcro Ties', link: 'https://www.aliexpress.us/item/3256806893053801.html' },
      { name: 'Cable Clips', link: 'https://www.aliexpress.us/item/3256809010911014.html' },
      { name: 'Cable Box', link: 'https://www.aliexpress.us/item/3256811990842193.html' },
    ],
  },
  {
    name: 'Cable Sleeve 6ft',
    yourPrice: 14.99,
    aliCost: 2.50,
    link: 'https://www.aliexpress.com/item/32826787908.html',
    badge: '4.8★ · 10,000+ sold',
    notes: 'Select the 2m (6ft) length and 10–15mm width. Black color.',
  },
  {
    name: 'Adhesive Cable Clips 30ct',
    yourPrice: 7.99,
    aliCost: 1.47,
    link: 'https://www.aliexpress.us/item/3256809010911014.html',
    badge: '4.9★ · 4,000+ sold',
    notes: 'Direct link to exact item. Select 30-piece pack option.',
  },
  {
    name: 'Cable Management Box',
    yourPrice: 29.99,
    aliCost: 10.77,
    link: 'https://www.aliexpress.us/item/3256811990842193.html',
    badge: '4.9★ · 10,000+ sold',
    notes: 'Direct link to exact item. Best seller with huge order count — reliable supplier.',
  },
  {
    name: 'Dual Monitor Cable Kit',
    yourPrice: 39.99,
    aliCost: 13.00,
    link: '',
    badge: 'Bundle — 3 separate orders',
    notes: 'Order these 3 items separately: 1× Raceway Kit + 1× Velcro Ties + 1× Cable Clips.',
    isBundle: true,
    bundleItems: [
      { name: 'Raceway Kit', link: 'https://www.aliexpress.us/item/3256811636365177.html' },
      { name: 'Velcro Ties', link: 'https://www.aliexpress.us/item/3256806893053801.html' },
      { name: 'Cable Clips', link: 'https://www.aliexpress.us/item/3256809010911014.html' },
    ],
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
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                <div>
                  <h3 className="font-semibold text-[#1C1C1C]">{p.name}</h3>
                  <span className="text-xs text-amber-600 font-medium">{p.badge}</span>
                </div>
                <div className="flex items-center gap-3 text-sm flex-shrink-0 flex-wrap">
                  <span className="text-[#888]">You charge: <strong className="text-[#1C1C1C]">${p.yourPrice.toFixed(2)}</strong></span>
                  <span className="text-[#888]">Cost: <strong className="text-[#1C1C1C]">~${p.aliCost.toFixed(2)}</strong></span>
                  <span className="bg-green-100 text-green-700 font-semibold px-2.5 py-1 rounded text-xs">
                    +${profit.toFixed(2)} profit ({margin}%)
                  </span>
                </div>
              </div>
              <p className="text-sm text-[#666] mb-3">{p.notes}</p>

              {'isBundle' in p && p.isBundle && p.bundleItems ? (
                <div className="flex flex-wrap gap-2">
                  {p.bundleItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 bg-[#1C1C1C] hover:bg-[#333] text-white text-xs font-medium px-3 py-2 rounded transition-colors"
                    >
                      Order: {item.name} →
                    </a>
                  ))}
                </div>
              ) : (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#1C1C1C] hover:bg-[#333] text-white text-xs font-medium px-4 py-2 rounded transition-colors"
                >
                  Open AliExpress →
                </a>
              )}
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
