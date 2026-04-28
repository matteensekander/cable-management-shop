'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white border border-[#E8E6E1] rounded-[4px] flex flex-col hover:border-[#C8C6C1] transition-colors">
      {/* Image placeholder */}
      <Link href={`/product/${product.slug}`} className="block">
        <div className="bg-[#F0EEE9] aspect-[4/3] rounded-t-[4px] flex items-center justify-center p-6">
          <span className="text-sm text-[#888] text-center leading-snug font-medium">
            {product.name}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="mb-1">
          <span className="text-xs uppercase tracking-widest text-[#888] font-medium">
            {product.category}
          </span>
        </div>
        <Link href={`/product/${product.slug}`}>
          <h3 className="text-[15px] font-semibold text-[#1C1C1C] hover:text-[#555] transition-colors mb-1">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-[#888] leading-relaxed flex-1 mb-4">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#E8E6E1]">
          <span className="text-base font-semibold text-[#1C1C1C]">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => addToCart(product, 1)}
            className="bg-[#1C1C1C] hover:bg-[#333] text-white text-sm font-medium px-4 py-2 rounded transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
