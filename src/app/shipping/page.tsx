export const metadata = {
  title: 'Shipping Information — CableCo',
  description: 'Shipping times, delivery estimates, and order tracking for CableCo orders.',
};

export default function ShippingPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-[#1C1C1C] mb-2">Shipping Information</h1>
      <p className="text-[#888] mb-10 text-sm">Everything you need to know about delivery times and tracking.</p>

      <div className="space-y-8">

        {/* Processing */}
        <div className="border border-[#E8E6E1] rounded-[4px] p-6 bg-white">
          <h2 className="font-semibold text-[#1C1C1C] mb-3 flex items-center gap-2">
            <span className="text-lg">📦</span> Order Processing
          </h2>
          <p className="text-sm text-[#666] leading-relaxed">
            All orders are processed within <strong className="text-[#1C1C1C]">1–3 business days</strong> of purchase.
            You will receive a confirmation email once your order has been dispatched.
          </p>
        </div>

        {/* Delivery */}
        <div className="border border-[#E8E6E1] rounded-[4px] p-6 bg-white">
          <h2 className="font-semibold text-[#1C1C1C] mb-3 flex items-center gap-2">
            <span className="text-lg">🚚</span> Delivery Time
          </h2>
          <p className="text-sm text-[#666] leading-relaxed mb-4">
            We ship to the United States and Canada. Estimated delivery times after dispatch:
          </p>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2.5 border-b border-[#F0EEE9]">
              <span className="text-sm text-[#444]">United States</span>
              <span className="text-sm font-semibold text-[#1C1C1C]">5–15 business days</span>
            </div>
            <div className="flex justify-between items-center py-2.5">
              <span className="text-sm text-[#444]">Canada</span>
              <span className="text-sm font-semibold text-[#1C1C1C]">10–20 business days</span>
            </div>
          </div>
          <p className="text-xs text-[#AAA] mt-4">
            Delivery times may vary due to carrier delays, customs processing, or high demand periods.
          </p>
        </div>

        {/* Free shipping */}
        <div className="border border-[#E8E6E1] rounded-[4px] p-6 bg-white">
          <h2 className="font-semibold text-[#1C1C1C] mb-3 flex items-center gap-2">
            <span className="text-lg">✅</span> Free Shipping — Always
          </h2>
          <p className="text-sm text-[#666] leading-relaxed">
            We offer <strong className="text-[#1C1C1C]">free shipping on every order</strong> — no minimum spend, no hidden fees.
            The price you see at checkout is the price you pay.
          </p>
        </div>

        {/* Tracking */}
        <div className="border border-[#E8E6E1] rounded-[4px] p-6 bg-white">
          <h2 className="font-semibold text-[#1C1C1C] mb-3 flex items-center gap-2">
            <span className="text-lg">🔍</span> Order Tracking
          </h2>
          <p className="text-sm text-[#666] leading-relaxed">
            Once your order ships, you will receive a tracking number via email so you can follow your package every step of the way.
            If you haven&apos;t received tracking info within 4 business days of ordering, please contact us.
          </p>
        </div>

        {/* Questions */}
        <div className="bg-[#F8F7F4] border border-[#E8E6E1] rounded-[4px] p-6">
          <h2 className="font-semibold text-[#1C1C1C] mb-2">Questions about your order?</h2>
          <p className="text-sm text-[#666]">
            Email us at <a href="mailto:matteensekander@gmail.com" className="text-[#1C1C1C] underline underline-offset-2">matteensekander@gmail.com</a> and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

      </div>
    </div>
  );
}
