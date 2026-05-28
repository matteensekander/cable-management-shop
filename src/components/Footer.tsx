'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[#E8E6E1] bg-[#F8F7F4] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p className="font-bold text-xl text-[#1C1C1C] mb-3">CableCo</p>
            <p className="text-sm text-[#666] leading-relaxed max-w-xs">
              Tame the cable chaos. One desk at a time.
            </p>
            <p className="text-xs text-[#999] mt-4">
              © {new Date().getFullYear()} CableCo. All rights reserved.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold text-[#1C1C1C] uppercase tracking-widest mb-4">
              Navigate
            </p>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-[#666] hover:text-[#1C1C1C] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-sm text-[#666] hover:text-[#1C1C1C] transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <Link href="/ai-assistant" className="text-sm text-[#666] hover:text-[#1C1C1C] transition-colors">
                  AI Assistant
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-sm text-[#666] hover:text-[#1C1C1C] transition-colors">
                  Cart
                </Link>
              </li>
              <li className="pt-2 border-t border-[#E8E6E1]">
                <Link href="/fulfillment" className="text-xs text-[#BBB] hover:text-[#888] transition-colors">
                  Owner: Fulfillment Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p className="text-xs font-semibold text-[#1C1C1C] uppercase tracking-widest mb-4">
              Stay in the loop
            </p>
            <p className="text-sm text-[#666] mb-4">
              Setup tips, new products, and desk inspiration. No spam.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thanks for subscribing!');
              }}
              className="flex gap-2"
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="flex-1 border border-[#E8E6E1] rounded px-3 py-2 text-sm bg-white text-[#1C1C1C] placeholder:text-[#AAA] focus:outline-none focus:border-[#1C1C1C] transition-colors"
              />
              <button
                type="submit"
                className="bg-[#1C1C1C] hover:bg-[#333] text-white text-sm font-medium px-4 py-2 rounded transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
