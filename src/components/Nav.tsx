'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import CartDrawer from './CartDrawer';

export default function Nav() {
  const { cartCount, setIsCartOpen, isCartOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-40 bg-[#F8F7F4] border-b border-[#E8E6E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="font-bold text-xl text-[#1C1C1C] tracking-tight">
              CableCo
            </Link>

            {/* Center Nav Links — desktop */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="text-sm text-[#1C1C1C] hover:text-[#555] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/shop"
                className="text-sm text-[#1C1C1C] hover:text-[#555] transition-colors"
              >
                Shop
              </Link>
              <Link
                href="/ai-assistant"
                className="text-sm text-[#1C1C1C] hover:text-[#555] transition-colors"
              >
                AI Assistant
              </Link>
            </div>

            {/* Right: Cart icon */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-[#1C1C1C] hover:text-[#555] transition-colors"
                aria-label="Open cart"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-[#1C1C1C] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none">
                    {cartCount > 99 ? '99+' : cartCount}
                  </span>
                )}
              </button>

              {/* Mobile hamburger */}
              <button
                className="md:hidden p-2 text-[#1C1C1C]"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle mobile menu"
              >
                {mobileOpen ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile nav slide-in */}
        {mobileOpen && (
          <div className="md:hidden border-t border-[#E8E6E1] bg-[#F8F7F4] px-4 py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="text-sm text-[#1C1C1C] py-1"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-sm text-[#1C1C1C] py-1"
              onClick={() => setMobileOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/ai-assistant"
              className="text-sm text-[#1C1C1C] py-1"
              onClick={() => setMobileOpen(false)}
            >
              AI Assistant
            </Link>
          </div>
        )}
      </nav>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
