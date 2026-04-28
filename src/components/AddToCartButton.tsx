'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Product } from '@/lib/products';

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  const handleChange = (delta: number) => {
    setQty((prev) => Math.max(1, prev + delta));
  };

  return (
    <div>
      {/* Quantity selector */}
      <div className="flex items-center gap-3 mb-4">
        <label className="text-sm text-[#888]">Qty:</label>
        <div className="flex items-center border border-[#E8E6E1] rounded overflow-hidden">
          <button
            onClick={() => handleChange(-1)}
            className="px-3 py-2 text-[#1C1C1C] hover:bg-[#F0EEE9] transition-colors text-sm"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="px-4 py-2 text-sm text-[#1C1C1C] border-x border-[#E8E6E1] min-w-[3rem] text-center">
            {qty}
          </span>
          <button
            onClick={() => handleChange(1)}
            className="px-3 py-2 text-[#1C1C1C] hover:bg-[#F0EEE9] transition-colors text-sm"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      {/* Add to Cart button */}
      <button
        onClick={() => addToCart(product, qty)}
        className="w-full bg-[#1C1C1C] hover:bg-[#333] text-white font-medium py-3.5 rounded text-sm transition-colors"
      >
        Add to Cart — ${(product.price * qty).toFixed(2)}
      </button>
    </div>
  );
}
