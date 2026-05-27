interface StarRatingProps {
  rating: number;
  reviewCount: number;
  size?: 'sm' | 'md';
}

export default function StarRating({ rating, reviewCount, size = 'sm' }: StarRatingProps) {
  const starSize = size === 'sm' ? 12 : 15;
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <svg key={i} width={starSize} height={starSize} viewBox="0 0 24 24" fill="none">
            <defs>
              <linearGradient id={`star-${i}-${rating}`}>
                <stop offset={i <= full ? '100%' : i === full + 1 && half ? '50%' : '0%'} stopColor="#F59E0B" />
                <stop offset={i <= full ? '100%' : i === full + 1 && half ? '50%' : '0%'} stopColor="#E5E7EB" />
              </linearGradient>
            </defs>
            <polygon
              points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
              fill={i <= full ? '#F59E0B' : i === full + 1 && half ? 'url(#star-gradient-half)' : '#E5E7EB'}
            />
          </svg>
        ))}
      </div>
      <span className={`text-[#888] ${size === 'sm' ? 'text-[11px]' : 'text-xs'}`}>
        {rating.toFixed(1)} ({reviewCount.toLocaleString()})
      </span>
    </div>
  );
}
