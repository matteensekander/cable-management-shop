import { notFound } from 'next/navigation';
import Image from 'next/image';
import { products, getProductBySlug, getRelatedProducts } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import AddToCartButton from '@/components/AddToCartButton';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return {
    title: `${product.name} — CableCo`,
    description: product.shortDescription,
  };
}

export default function ProductPage({ params }: PageProps) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const related = getRelatedProducts(product.worksWith);

  const paragraphs = product.longDescription
    .split('\n\n')
    .map((p) => p.replace(/\n/g, ' ').trim())
    .filter(Boolean);

  // Detect bullet-style paragraphs starting with •
  const renderParagraph = (text: string, i: number) => {
    if (text.startsWith('•') || text.includes('\n•')) {
      const lines = text.split('\n').filter(Boolean);
      return (
        <ul key={i} className="list-none space-y-1 text-sm text-[#666] leading-relaxed">
          {lines.map((line, j) => (
            <li key={j} className="flex gap-2">
              <span className="text-[#1C1C1C] mt-0.5">•</span>
              <span>{line.replace(/^•\s*/, '')}</span>
            </li>
          ))}
        </ul>
      );
    }
    return (
      <p key={i} className="text-sm text-[#666] leading-relaxed">
        {text}
      </p>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <nav className="text-xs text-[#888] mb-8 flex items-center gap-2">
        <a href="/" className="hover:text-[#1C1C1C] transition-colors">Home</a>
        <span>/</span>
        <a href="/shop" className="hover:text-[#1C1C1C] transition-colors">Shop</a>
        <span>/</span>
        <span className="text-[#1C1C1C]">{product.name}</span>
      </nav>

      {/* Product layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Left: Image gallery */}
        <div>
          {/* Main image */}
          <div className="relative border border-[#E8E6E1] rounded-[4px] aspect-[4/3] overflow-hidden mb-3 bg-[#F0EEE9]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          {/* Thumbnails */}
          <div className="flex gap-3">
            {[0, 20, 80].map((offset, i) => (
              <div
                key={i}
                className="relative border border-[#E8E6E1] rounded-[4px] aspect-square w-20 overflow-hidden cursor-pointer hover:border-[#1C1C1C] transition-colors bg-[#F0EEE9]"
              >
                <Image
                  src={product.image}
                  alt={`${product.name} view ${i + 1}`}
                  fill
                  className="object-cover"
                  style={{ objectPosition: `${offset}% center` }}
                  sizes="80px"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Product info */}
        <div>
          <span className="inline-block text-xs uppercase tracking-widest text-[#888] font-medium border border-[#E8E6E1] rounded px-2.5 py-1 mb-4">
            {product.category}
          </span>
          <h1 className="text-3xl font-bold text-[#1C1C1C] mb-3">{product.name}</h1>
          <p className="text-2xl font-semibold text-[#1C1C1C] mb-6">
            ${product.price.toFixed(2)}
          </p>

          <p className="text-sm text-[#666] leading-relaxed mb-6 border-b border-[#E8E6E1] pb-6">
            {product.shortDescription}
          </p>

          {/* Add to Cart (client component) */}
          <AddToCartButton product={product} />

          {/* Long description */}
          <div className="mt-8 pt-8 border-t border-[#E8E6E1] space-y-4">
            <h2 className="text-sm font-semibold text-[#1C1C1C] uppercase tracking-widest">
              Details
            </h2>
            {paragraphs.map((para, i) => renderParagraph(para, i))}
          </div>
        </div>
      </div>

      {/* Frequently Bought Together */}
      {related.length > 0 && (
        <section className="border-t border-[#E8E6E1] pt-12">
          <h2 className="text-2xl font-bold text-[#1C1C1C] mb-8">
            Frequently Bought Together
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
