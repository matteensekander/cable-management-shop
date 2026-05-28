export const metadata = {
  title: 'Returns & Refunds — CableCo',
  description: 'CableCo return and refund policy. 30-day hassle-free returns on all orders.',
};

export default function ReturnsPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-[#1C1C1C] mb-2">Returns & Refunds</h1>
      <p className="text-[#888] mb-10 text-sm">Last updated: May 2026</p>

      <div className="space-y-6 text-sm text-[#666] leading-relaxed">

        <div className="border border-[#E8E6E1] rounded-[4px] p-6 bg-white">
          <h2 className="font-semibold text-[#1C1C1C] mb-3 flex items-center gap-2">
            <span className="text-lg">✅</span> 30-Day Return Policy
          </h2>
          <p>
            We offer a <strong className="text-[#1C1C1C]">30-day return window</strong> on all products.
            If you&apos;re not completely satisfied with your purchase for any reason, contact us within
            30 days of receiving your order and we&apos;ll make it right.
          </p>
        </div>

        <div className="border border-[#E8E6E1] rounded-[4px] p-6 bg-white">
          <h2 className="font-semibold text-[#1C1C1C] mb-3 flex items-center gap-2">
            <span className="text-lg">📋</span> Eligibility
          </h2>
          <ul className="space-y-2">
            {[
              'Item must be returned within 30 days of delivery',
              'Item must be unused or defective',
              'Original packaging preferred but not required',
              'Proof of purchase required (your order confirmation email)',
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-[#1C1C1C] mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-[#E8E6E1] rounded-[4px] p-6 bg-white">
          <h2 className="font-semibold text-[#1C1C1C] mb-3 flex items-center gap-2">
            <span className="text-lg">💳</span> Refunds
          </h2>
          <p>
            Once your return is approved, your refund will be processed to your original payment method
            within <strong className="text-[#1C1C1C]">5–10 business days</strong>. You&apos;ll receive
            an email confirmation when the refund is issued.
          </p>
        </div>

        <div className="border border-[#E8E6E1] rounded-[4px] p-6 bg-white">
          <h2 className="font-semibold text-[#1C1C1C] mb-3 flex items-center gap-2">
            <span className="text-lg">❌</span> Non-Returnable Items
          </h2>
          <p>Items that have been heavily used or damaged by the customer are not eligible for return.</p>
        </div>

        <div className="bg-[#F8F7F4] border border-[#E8E6E1] rounded-[4px] p-6">
          <h2 className="font-semibold text-[#1C1C1C] mb-2">How to start a return</h2>
          <p>
            Email us at{' '}
            <a href="mailto:matteensekander@gmail.com" className="text-[#1C1C1C] underline underline-offset-2">
              matteensekander@gmail.com
            </a>{' '}
            with your order details and reason for return. We respond within 24 hours.
          </p>
        </div>

      </div>
    </div>
  );
}
