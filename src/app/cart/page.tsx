'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  const [loading, setLoading] = React.useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: cartItems.map(({ product, quantity }) => ({
            name: product.name,
            price: product.price,
            quantity,
            image: product.image,
          })),
        }),
      });
      const { url } = await res.json();
      window.location.href = url;
    } catch {
      alert('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-[#1C1C1C] mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-24">
          <svg
            className="mx-auto mb-6 text-[#C8C6C1]"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          <p className="text-[#888] mb-6">Your cart is empty.</p>
          <Link
            href="/shop"
            className="bg-[#1C1C1C] hover:bg-[#333] text-white px-6 py-3 rounded text-sm font-medium transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Cart table */}
          <div className="flex-1">
            {/* Desktop table header */}
            <div className="hidden md:grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 pb-3 border-b border-[#E8E6E1] text-xs uppercase tracking-widest text-[#888] font-medium">
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Total</span>
              <span></span>
            </div>

            <ul className="divide-y divide-[#E8E6E1]">
              {cartItems.map(({ product, quantity }) => (
                <li key={product.slug} className="py-5">
                  {/* Mobile layout */}
                  <div className="flex gap-4 md:hidden">
                    <div className="relative w-20 h-20 bg-[#F0EEE9] rounded flex-shrink-0 overflow-hidden">
                      <Image src={product.image} alt={product.name} fill className="object-cover" sizes="80px" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-[#1C1C1C]">{product.name}</p>
                      <p className="text-sm text-[#888] mt-0.5">${product.price.toFixed(2)} each</p>
                      <div className="flex items-center gap-2 mt-3">
                        <button
                          onClick={() => updateQuantity(product.slug, quantity - 1)}
                          className="w-7 h-7 border border-[#E8E6E1] rounded text-sm flex items-center justify-center hover:border-[#1C1C1C] transition-colors"
                        >
                          −
                        </button>
                        <span className="text-sm w-6 text-center">{quantity}</span>
                        <button
                          onClick={() => updateQuantity(product.slug, quantity + 1)}
                          className="w-7 h-7 border border-[#E8E6E1] rounded text-sm flex items-center justify-center hover:border-[#1C1C1C] transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <p className="text-sm font-semibold text-[#1C1C1C] mt-2">
                        ${(product.price * quantity).toFixed(2)}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(product.slug)}
                      className="text-[#888] hover:text-[#1C1C1C] transition-colors self-start p-1"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </div>

                  {/* Desktop layout */}
                  <div className="hidden md:grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 items-center">
                    {/* Product */}
                    <div className="flex items-center gap-4">
                      <div className="relative w-14 h-14 bg-[#F0EEE9] rounded flex-shrink-0 overflow-hidden">
                        <Image src={product.image} alt={product.name} fill className="object-cover" sizes="56px" />
                      </div>
                      <div>
                        <Link
                          href={`/product/${product.slug}`}
                          className="text-sm font-medium text-[#1C1C1C] hover:text-[#555] transition-colors"
                        >
                          {product.name}
                        </Link>
                        <p className="text-xs text-[#888] mt-0.5 capitalize">{product.category}</p>
                      </div>
                    </div>
                    {/* Price */}
                    <span className="text-sm text-[#666]">${product.price.toFixed(2)}</span>
                    {/* Quantity */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(product.slug, quantity - 1)}
                        className="w-7 h-7 border border-[#E8E6E1] rounded text-sm flex items-center justify-center hover:border-[#1C1C1C] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="text-sm w-6 text-center">{quantity}</span>
                      <button
                        onClick={() => updateQuantity(product.slug, quantity + 1)}
                        className="w-7 h-7 border border-[#E8E6E1] rounded text-sm flex items-center justify-center hover:border-[#1C1C1C] transition-colors"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    {/* Total */}
                    <span className="text-sm font-medium text-[#1C1C1C]">
                      ${(product.price * quantity).toFixed(2)}
                    </span>
                    {/* Remove */}
                    <button
                      onClick={() => removeFromCart(product.slug)}
                      className="text-[#888] hover:text-[#1C1C1C] transition-colors p-1"
                      aria-label="Remove item"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link
                href="/shop"
                className="text-sm text-[#888] hover:text-[#1C1C1C] transition-colors flex items-center gap-1"
              >
                &larr; Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-white border border-[#E8E6E1] rounded-[4px] p-6 sticky top-24">
              <h2 className="text-base font-semibold text-[#1C1C1C] mb-5">Order Summary</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#888]">Subtotal</span>
                  <span className="text-[#1C1C1C]">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#888]">Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="border-t border-[#E8E6E1] pt-3 flex justify-between font-semibold text-base">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </div>
              <button
                onClick={handleCheckout}
                disabled={loading}
                className="mt-6 w-full bg-[#1C1C1C] hover:bg-[#333] disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium py-3.5 rounded text-sm transition-colors"
              >
                {loading ? 'Redirecting to Stripe…' : 'Proceed to Checkout'}
              </button>
              <p className="mt-4 text-xs text-[#888] text-center">
                Free shipping on all orders
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
