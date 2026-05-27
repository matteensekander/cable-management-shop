'use client';

import { useState, useMemo } from 'react';
import { products, Product } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

const categories: { label: string; value: Product['category'] | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Trays', value: 'trays' },
  { label: 'Ties', value: 'ties' },
  { label: 'Raceways', value: 'raceways' },
  { label: 'Kits', value: 'kits' },
  { label: 'Sleeves', value: 'sleeves' },
  { label: 'Clips', value: 'clips' },
  { label: 'Boxes', value: 'boxes' },
];

type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'rating';

export default function ShopPage() {
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set(['all']));
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<SortOption>('featured');

  const toggleCategory = (value: string) => {
    setSelectedCategories((prev) => {
      const next = new Set(prev);
      if (value === 'all') {
        return new Set(['all']);
      }
      next.delete('all');
      if (next.has(value)) {
        next.delete(value);
        if (next.size === 0) return new Set(['all']);
      } else {
        next.add(value);
      }
      return next;
    });
  };

  const filteredProducts = useMemo(() => {
    let result = selectedCategories.has('all')
      ? products
      : products.filter((p) => selectedCategories.has(p.category));

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) => p.name.toLowerCase().includes(q) || p.shortDescription.toLowerCase().includes(q)
      );
    }

    if (sort === 'price-asc') result = [...result].sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') result = [...result].sort((a, b) => b.price - a.price);
    else if (sort === 'rating') result = [...result].sort((a, b) => b.rating - a.rating);

    return result;
  }, [selectedCategories, search, sort]);

  const FilterPanel = () => (
    <div className="space-y-1">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#888] mb-4">
        Category
      </p>
      {categories.map(({ label, value }) => (
        <label
          key={value}
          className="flex items-center gap-3 py-1.5 cursor-pointer group"
        >
          <input
            type="checkbox"
            checked={selectedCategories.has(value)}
            onChange={() => toggleCategory(value)}
            className="w-4 h-4 border border-[#E8E6E1] rounded accent-[#1C1C1C] cursor-pointer"
          />
          <span className="text-sm text-[#1C1C1C] group-hover:text-[#555] transition-colors">
            {label}
          </span>
        </label>
      ))}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1C1C1C] mb-6">Shop All Products</h1>
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search */}
          <div className="relative flex-1">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-[#AAA]" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search products…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-[#E8E6E1] rounded text-sm bg-white text-[#1C1C1C] placeholder:text-[#AAA] focus:outline-none focus:border-[#1C1C1C] transition-colors"
            />
          </div>
          {/* Sort */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="border border-[#E8E6E1] rounded px-3 py-2 text-sm bg-white text-[#1C1C1C] focus:outline-none focus:border-[#1C1C1C] transition-colors cursor-pointer"
          >
            <option value="featured">Sort: Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
        <p className="text-xs text-[#888] mt-3">
          {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
        </p>
      </div>

      <div className="flex gap-10">
        {/* Sidebar — desktop */}
        <aside className="hidden md:block w-48 flex-shrink-0">
          <div className="sticky top-24">
            <FilterPanel />
          </div>
        </aside>

        <div className="flex-1 min-w-0">
          {/* Mobile filter button */}
          <div className="md:hidden mb-5">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="flex items-center gap-2 border border-[#E8E6E1] rounded px-4 py-2 text-sm text-[#1C1C1C] hover:border-[#1C1C1C] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="8" y1="12" x2="16" y2="12" />
                <line x1="12" y1="18" x2="12" y2="18" />
              </svg>
              Filter
              {!selectedCategories.has('all') && (
                <span className="bg-[#1C1C1C] text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                  {selectedCategories.size}
                </span>
              )}
            </button>
          </div>

          {/* Product grid */}
          {filteredProducts.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-[#888]">No products found.</p>
              <button
                onClick={() => setSelectedCategories(new Set(['all']))}
                className="mt-4 text-sm underline underline-offset-2 text-[#1C1C1C]"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter drawer */}
      <>
        <div
          className={`fixed inset-0 bg-black/30 z-50 transition-opacity duration-300 md:hidden ${
            mobileFiltersOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div
          className={`fixed bottom-0 left-0 right-0 bg-white z-50 rounded-t-2xl p-6 transform transition-transform duration-300 md:hidden ${
            mobileFiltersOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-[#1C1C1C]">Filter by Category</h3>
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="text-[#888] p-1"
              aria-label="Close filters"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <FilterPanel />
          <button
            onClick={() => setMobileFiltersOpen(false)}
            className="mt-6 w-full bg-[#1C1C1C] text-white py-3 rounded text-sm font-medium"
          >
            Show {filteredProducts.length} results
          </button>
        </div>
      </>
    </div>
  );
}
