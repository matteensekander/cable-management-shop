const products = [
  {
    name: 'Under-Desk Cable Tray',
    yourPrice: 24.99,
    cjCost: 4.00,
    link: 'https://cjdropshipping.com/product/magnetic-cable-clip-under-desk-cable-management-adjustable-cord-holder-wire-organizer-and-cable-management-wire-keeper-p-1763402968205897728.html',
    searchLink: 'https://cjdropshipping.com/search/?q=under+desk+cable+tray',
    badge: 'CJ — search or sourcing request',
    notes: 'CJ carries magnetic under-desk clips directly. For a wire mesh tray, click "Search CJ" and pick a tray with 4.5★+ and 500+ orders, or submit a sourcing request.',
    needsSourcing: true,
  },
  {
    name: 'Velcro Cable Tie Pack 50ct',
    yourPrice: 9.99,
    cjCost: 1.61,
    link: 'https://cjdropshipping.com/product/velcro-cable-management-p-A6C83246-4582-4C85-AEA9-D6F9375E4755.html',
    badge: 'CJ — confirmed product',
    notes: 'Direct CJ link. Select the 50-piece pre-cut tie option. Black color.',
    needsSourcing: false,
  },
  {
    name: 'Cable Raceway Kit',
    yourPrice: 19.99,
    cjCost: 5.16,
    link: 'https://cjdropshipping.com/search/?q=cable+raceway+wall+channel',
    badge: 'CJ — submit sourcing request',
    notes: 'Search CJ first. If no good match, go to cjdropshipping.com/sourcing and paste the AliExpress product URL — CJ will find a supplier within 48 hours.',
    needsSourcing: true,
  },
  {
    name: 'Complete Desk Cable Kit',
    yourPrice: 49.99,
    cjCost: 17.00,
    link: '',
    badge: 'Bundle — 4 separate CJ orders',
    notes: 'Place 4 separate CJ orders to the same customer address: 1× Cable Tray + 1× Velcro Ties + 1× Cable Clips + 1× Cable Box. Use the individual links below.',
    isBundle: true,
    bundleItems: [
      { name: 'Cable Tray', link: 'https://cjdropshipping.com/search/?q=under+desk+cable+tray' },
      { name: 'Velcro Ties', link: 'https://cjdropshipping.com/product/velcro-cable-management-p-A6C83246-4582-4C85-AEA9-D6F9375E4755.html' },
      { name: 'Cable Clips', link: 'https://cjdropshipping.com/search/?q=adhesive+cable+clips' },
      { name: 'Cable Box', link: 'https://cjdropshipping.com/search/?q=cable+management+box+power+strip' },
    ],
  },
  {
    name: 'Cable Sleeve 6ft',
    yourPrice: 14.99,
    cjCost: 2.50,
    link: 'https://cjdropshipping.com/search/?q=cable+sleeve+flexible+wire+loom',
    badge: 'CJ — search confirmed',
    notes: 'Search CJ for "cable sleeve" or "flexible wire loom". Select the 2m (6ft) length, 10–15mm width, black color. Pick seller with 4.5★+ rating.',
    needsSourcing: false,
  },
  {
    name: 'Adhesive Cable Clips 30ct',
    yourPrice: 7.99,
    cjCost: 1.47,
    link: 'https://cjdropshipping.com/search/?q=adhesive+cable+clips+self+adhesive+wire+holder',
    badge: 'CJ — search confirmed',
    notes: 'Search CJ for "adhesive cable clips". Select 30-piece pack, black or clear. Very lightweight — cheap shipping.',
    needsSourcing: false,
  },
  {
    name: 'Cable Management Box',
    yourPrice: 29.99,
    cjCost: 10.77,
    link: 'https://cjdropshipping.com/search/?q=cable+management+box+power+strip+cover',
    badge: 'CJ — submit sourcing request if needed',
    notes: 'Search CJ first. If no match, submit a sourcing request — these are common from Chinese manufacturers. Heavier item, ~$5–8 shipping from China.',
    needsSourcing: true,
  },
  {
    name: 'Dual Monitor Cable Kit',
    yourPrice: 39.99,
    cjCost: 13.00,
    link: '',
    badge: 'Bundle — 3 separate CJ orders',
    notes: 'Place 3 separate CJ orders to the same customer address: 1× Raceway Kit + 1× Velcro Ties + 1× Cable Clips.',
    isBundle: true,
    bundleItems: [
      { name: 'Raceway Kit', link: 'https://cjdropshipping.com/search/?q=cable+raceway+wall+channel' },
      { name: 'Velcro Ties', link: 'https://cjdropshipping.com/product/velcro-cable-management-p-A6C83246-4582-4C85-AEA9-D6F9375E4755.html' },
      { name: 'Cable Clips', link: 'https://cjdropshipping.com/search/?q=adhesive+cable+clips' },
    ],
  },
];

export default function FulfillmentPage() {
  const totalAvgProfit = products.reduce((sum, p) => sum + (p.yourPrice - p.cjCost), 0) / products.length;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-widest text-[#888] mb-2">Owner Only</p>
        <h1 className="text-3xl font-bold text-[#1C1C1C] mb-2">Fulfillment Guide</h1>
        <p className="text-[#888] text-sm">Private page — bookmark this. When an order comes in, follow these steps.</p>
      </div>

      {/* Why CJDropshipping */}
      <div className="bg-blue-50 border border-blue-200 rounded p-5 mb-6 text-sm text-blue-800">
        <strong>Using CJDropshipping</strong> (not AliExpress) — faster shipping (7–17 days), better quality control, dedicated support agent. Free to use, pay per order. Sign up at{' '}
        <a href="https://cjdropshipping.com" target="_blank" rel="noreferrer" className="underline font-medium">cjdropshipping.com</a>.
      </div>

      {/* How to fulfill */}
      <div className="bg-[#F0EEE9] border border-[#E8E6E1] rounded p-6 mb-8">
        <h2 className="font-semibold text-[#1C1C1C] mb-4">How to fulfill every order (3 steps)</h2>
        <ol className="space-y-3 text-sm text-[#444]">
          <li className="flex gap-3">
            <span className="font-bold text-[#1C1C1C] w-5">1.</span>
            Check your{' '}
            <a href="https://dashboard.stripe.com/payments" target="_blank" rel="noreferrer" className="underline text-[#1C1C1C]">Stripe dashboard</a>
            {' '}for new payments. Click the payment to see the customer name, address, and what they ordered.
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-[#1C1C1C] w-5">2.</span>
            Find the product below → click the CJ link → log into CJDropshipping → add to cart → at checkout enter the <strong>customer&apos;s address</strong> (not yours). CJ ships directly to them.
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-[#1C1C1C] w-5">3.</span>
            Save the CJ tracking number. If the customer asks where their order is, look it up at{' '}
            <a href="https://cjdropshipping.com/order.html" target="_blank" rel="noreferrer" className="underline text-[#1C1C1C]">CJ Orders page</a>.
          </li>
        </ol>
        <div className="mt-4 pt-4 border-t border-[#E0DED9] text-xs text-[#888]">
          <strong className="text-[#555]">For products marked &quot;sourcing request&quot;:</strong> Go to{' '}
          <a href="https://cjdropshipping.com/sourcing" target="_blank" rel="noreferrer" className="underline">cjdropshipping.com/sourcing</a>
          , describe the product or paste an AliExpress URL. CJ finds a supplier within 48 hours. Do this before your first order comes in.
        </div>
      </div>

      {/* Products table */}
      <div className="space-y-4">
        {products.map((p) => {
          const profit = p.yourPrice - p.cjCost;
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
                  <span className="text-[#888]">CJ cost: <strong className="text-[#1C1C1C]">~${p.cjCost.toFixed(2)}</strong></span>
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
                      Order on CJ: {item.name} →
                    </a>
                  ))}
                </div>
              ) : (
                <div className="flex gap-2 flex-wrap">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#1C1C1C] hover:bg-[#333] text-white text-xs font-medium px-4 py-2 rounded transition-colors"
                  >
                    Open on CJDropshipping →
                  </a>
                  {'needsSourcing' in p && p.needsSourcing && (
                    <a
                      href="https://cjdropshipping.com/sourcing"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 border border-[#E8E6E1] hover:border-[#1C1C1C] text-[#666] hover:text-[#1C1C1C] text-xs font-medium px-4 py-2 rounded transition-colors"
                    >
                      Submit Sourcing Request →
                    </a>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Summary */}
      <div className="mt-8 border-t border-[#E8E6E1] pt-6 text-sm text-[#888]">
        Average profit per order: <strong className="text-[#1C1C1C]">${totalAvgProfit.toFixed(2)}</strong> &nbsp;·&nbsp;
        CJ shipping to US: <strong className="text-[#1C1C1C]">7–17 days</strong> &nbsp;·&nbsp;
        Tip: tell customers &ldquo;ships within 2–3 business days&rdquo; to give yourself lead time.
      </div>
    </div>
  );
}
