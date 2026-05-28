'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('done');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

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
            {/* Social links */}
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.tiktok.com/@cableco"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-8 h-8 flex items-center justify-center rounded border border-[#E8E6E1] text-[#888] hover:text-[#1C1C1C] hover:border-[#1C1C1C] transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/cableco"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 flex items-center justify-center rounded border border-[#E8E6E1] text-[#888] hover:text-[#1C1C1C] hover:border-[#1C1C1C] transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
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
                <Link href="/about" className="text-sm text-[#666] hover:text-[#1C1C1C] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-sm text-[#666] hover:text-[#1C1C1C] transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-sm text-[#666] hover:text-[#1C1C1C] transition-colors">
                  Returns & Refunds
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
            {status === 'done' ? (
              <p className="text-sm text-green-600 font-medium">You&apos;re subscribed!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 border border-[#E8E6E1] rounded px-3 py-2 text-sm bg-white text-[#1C1C1C] placeholder:text-[#AAA] focus:outline-none focus:border-[#1C1C1C] transition-colors"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-[#1C1C1C] hover:bg-[#333] disabled:opacity-60 text-white text-sm font-medium px-4 py-2 rounded transition-colors whitespace-nowrap"
                >
                  {status === 'loading' ? '...' : 'Subscribe'}
                </button>
              </form>
            )}
            {status === 'error' && (
              <p className="text-xs text-red-500 mt-2">Something went wrong. Try again.</p>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
