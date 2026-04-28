'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 flex flex-col transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E8E6E1]">
          <h2 className="font-semibold text-lg text-[#1C1C1C]">
            Cart{' '}
            {cartItems.length > 0 && (
              <span className="text-sm font-normal text-[#888]">
                ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})
              </span>
            )}
          </h2>
          <button
            onClick={onClose}
            className="text-[#1C1C1C] hover:text-[#555] transition-colors p-1"
            aria-label="Close cart"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#C8C6C1" strokeWidth="1.5" strokeLinecap="round">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              <p className="text-[#888] text-sm">Your cart is empty</p>
              <button
                onClick={onClose}
                className="text-sm text-[#1C1C1C] underline underline-offset-2"
              >
                Continue shopping
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-[#E8E6E1]">
              {cartItems.map(({ product, quantity }) => (
                <li key={product.slug} className="py-4 flex gap-4">
                  {/* Image placeholder */}
                  <div className="w-16 h-16 bg-[#F0EEE9] rounded flex-shrink-0 flex items-center justify-center">
                    <span className="text-[10px] text-[#888] text-center px-1 leading-tight">
                      {product.name}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[#1C1C1C] truncate">{product.name}</p>
                    <p className="text-sm text-[#888] mt-0.5">${product.price.toFixed(2)}</p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(product.slug, quantity - 1)}
                        className="w-6 h-6 border border-[#E8E6E1] rounded text-[#1C1C1C] text-sm flex items-center justify-center hover:border-[#1C1C1C] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="text-sm w-5 text-center">{quantity}</span>
                      <button
                        onClick={() => updateQuantity(product.slug, quantity + 1)}
                        className="w-6 h-6 border border-[#E8E6E1] rounded text-[#1C1C1C] text-sm flex items-center justify-center hover:border-[#1C1C1C] transition-colors"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Total + remove */}
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-sm font-medium text-[#1C1C1C]">
                      ${(product.price * quantity).toFixed(2)}
                    </span>
                    <button
                      onClick={() => removeFromCart(product.slug)}
                      className="text-[#888] hover:text-[#1C1C1C] transition-colors"
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
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-[#E8E6E1] px-6 py-5 space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-[#888]">Subtotal</span>
              <span className="font-semibold text-[#1C1C1C]">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-[#888]">Shipping and taxes calculated at checkout</p>
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/cart"
                onClick={onClose}
                className="border border-[#1C1C1C] text-[#1C1C1C] text-sm font-medium py-3 px-4 text-center rounded hover:bg-[#F0EEE9] transition-colors"
              >
                View Cart
              </Link>
              <button
                onClick={() => alert('Checkout coming soon!')}
                className="bg-[#1C1C1C] hover:bg-[#333] text-white text-sm font-medium py-3 px-4 rounded transition-colors"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
