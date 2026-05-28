import Link from 'next/link';

export const metadata = {
  title: 'About CableCo — Cable Management for the Modern Workspace',
  description: 'CableCo makes simple, minimal cable management products for people who care about their workspace.',
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <p className="text-xs uppercase tracking-widest text-[#888] mb-4 font-medium">Our Story</p>
      <h1 className="text-3xl font-bold text-[#1C1C1C] mb-6 leading-tight">
        We started CableCo because cable chaos is a solved problem — most people just don&apos;t know it yet.
      </h1>

      <div className="space-y-5 text-sm text-[#666] leading-relaxed">
        <p>
          Every desk has the same problem. Cables everywhere. Under the desk, behind the monitor,
          pooling on the floor. It looks messy, it feels messy, and it makes an otherwise great
          workspace feel chaotic.
        </p>
        <p>
          The frustrating part? Fixing it takes less than an hour. The right tray, the right ties,
          the right clips — and your desk looks completely different. The problem isn&apos;t hard.
          It&apos;s just that most people don&apos;t know where to start.
        </p>
        <p>
          That&apos;s why we built CableCo. Simple products, clear purpose, fair prices.
          No overcomplicated systems. No premium markup for a logo. Just the things that
          actually work — with an AI assistant (Cleo) that tells you exactly what you need
          for your specific setup.
        </p>
        <p className="font-medium text-[#1C1C1C]">
          Clean desk. Clear mind. That&apos;s the whole idea.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-3 gap-6 border-t border-[#E8E6E1] pt-10">
        {[
          { stat: '8', label: 'Products' },
          { stat: '30-day', label: 'Return policy' },
          { stat: 'Free', label: 'Shipping always' },
        ].map(({ stat, label }) => (
          <div key={label} className="text-center">
            <p className="text-2xl font-bold text-[#1C1C1C]">{stat}</p>
            <p className="text-xs text-[#888] mt-1">{label}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex gap-4">
        <Link
          href="/shop"
          className="bg-[#1C1C1C] hover:bg-[#333] text-white text-sm font-medium px-6 py-3 rounded transition-colors"
        >
          Shop Now
        </Link>
        <Link
          href="/ai-assistant"
          className="border border-[#E8E6E1] hover:border-[#1C1C1C] text-[#1C1C1C] text-sm font-medium px-6 py-3 rounded transition-colors"
        >
          Talk to Cleo
        </Link>
      </div>
    </div>
  );
}
