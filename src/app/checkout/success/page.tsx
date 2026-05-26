import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="max-w-lg mx-auto px-4 py-24 text-center">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <h1 className="text-3xl font-bold text-[#1C1C1C] mb-3">Order confirmed!</h1>
      <p className="text-[#888] mb-8">
        Thanks for your purchase. You&apos;ll receive a confirmation email shortly.
      </p>
      <Link
        href="/shop"
        className="bg-[#1C1C1C] hover:bg-[#333] text-white px-6 py-3 rounded text-sm font-medium transition-colors"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
