import Link from 'next/link';
import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

const featuredSlugs = [
  'complete-desk-cable-kit',
  'dual-monitor-cable-kit',
  'under-desk-cable-tray',
  'cable-management-box',
];

const testimonials = [
  {
    quote:
      "I spent 30 minutes on a Sunday with the Complete Desk Cable Kit and my home office looks like something from a design magazine. My wife thought I bought a new desk.",
    name: 'Marcus T.',
    setup: 'Dual monitor home office',
  },
  {
    quote:
      "The under-desk tray was the missing piece. I had tried everything else. Now my cables are just... gone. You don't see them at all. It's addicting.",
    name: 'Priya K.',
    setup: 'Standing desk with MacBook',
  },
  {
    quote:
      "Bought the Dual Monitor Kit on a whim. Genuinely one of the best $40 I've spent on my setup. The raceway makes it look like a professional install.",
    name: 'James W.',
    setup: 'Gaming + work desk combo',
  },
];

const solutions = [
  {
    problem: 'Tangled cables',
    solution: 'Cable trays & sleeves',
    description: 'Bundle and route cables neatly under your desk or behind your setup — completely out of sight.',
  },
  {
    problem: 'Desktop clutter',
    solution: 'Management boxes & clips',
    description: 'Hide your power strip completely. Route cables exactly where you want them with adhesive clips.',
  },
  {
    problem: 'Monitor madness',
    solution: 'Raceway & tie bundles',
    description: 'Run cables along walls cleanly and bundle multiple monitor cables into a single organized route.',
  },
];

export default function HomePage() {
  const featuredProducts = featuredSlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean) as typeof products;

  return (
    <div>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
        <p className="text-xs uppercase tracking-widest text-[#888] mb-6 font-medium">
          Cable Management for the Modern Desk
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-[#1C1C1C] leading-tight mb-6 tracking-tight">
          Your Desk.<br />Perfectly Organized.
        </h1>
        <p className="text-lg md:text-xl text-[#666] max-w-2xl mx-auto mb-10 leading-relaxed">
          Cable management products for the modern workspace. Simple, minimal, effective.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/shop"
            className="bg-[#1C1C1C] hover:bg-[#333] text-white font-medium px-8 py-3.5 rounded text-sm transition-colors"
          >
            Shop Now
          </Link>
          <Link
            href="/ai-assistant"
            className="text-sm text-[#1C1C1C] hover:text-[#555] transition-colors font-medium"
          >
            Talk to Cleo &rarr;
          </Link>
        </div>
      </section>

      {/* Problem → Solution section */}
      <section className="border-t border-[#E8E6E1] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map(({ problem, solution, description }) => (
              <div key={problem} className="text-center px-4">
                <div className="w-12 h-12 bg-[#F8F7F4] border border-[#E8E6E1] rounded flex items-center justify-center mx-auto mb-5 text-[#1C1C1C]">
                  <span className="text-lg">⚡</span>
                </div>
                <p className="text-xs uppercase tracking-widest text-[#888] mb-2 font-medium">
                  Problem: {problem}
                </p>
                <h3 className="text-lg font-semibold text-[#1C1C1C] mb-3">
                  {solution}
                </h3>
                <p className="text-sm text-[#666] leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="text-2xl font-bold text-[#1C1C1C]">Best Sellers</h2>
          <Link
            href="/shop"
            className="text-sm text-[#888] hover:text-[#1C1C1C] transition-colors"
          >
            View all &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-[#E8E6E1] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-[#1C1C1C] text-center mb-12">
            Clean desks, happy people.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ quote, name, setup }) => (
              <div
                key={name}
                className="bg-[#F8F7F4] border border-[#E8E6E1] rounded-[4px] p-6"
              >
                <p className="text-[15px] text-[#1C1C1C] leading-relaxed mb-5">
                  &ldquo;{quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-semibold text-[#1C1C1C]">{name}</p>
                  <p className="text-xs text-[#888] mt-0.5">{setup}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-[#1C1C1C] rounded-[4px] px-8 py-12 text-center">
          <p className="text-xs uppercase tracking-widest text-[#888] mb-4 font-medium">
            AI-powered
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Not sure where to start?
          </h2>
          <p className="text-[#AAA] mb-8 max-w-md mx-auto text-sm leading-relaxed">
            Tell Cleo about your desk setup and she&apos;ll recommend exactly what you need — no guesswork.
          </p>
          <Link
            href="/ai-assistant"
            className="bg-white hover:bg-[#F0EEE9] text-[#1C1C1C] font-medium px-8 py-3 rounded text-sm transition-colors inline-block"
          >
            Chat with Cleo
          </Link>
        </div>
      </section>
    </div>
  );
}
