import React from 'react';

// Elegant Indian Royal Architectural motifs, Jharokha arch filigree, and Mandala corner accents in fine hairline gold vector

export const RoyalJharokhaArch: React.FC<{ className?: string }> = ({ className = 'w-16 h-8 text-[#E2C799]' }) => (
  <svg
    viewBox="0 0 120 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Cusped Mughal / Rajasthani royal arch pinnacle */}
    <path
      d="M 5 38 L 20 38 Q 30 38 35 32 Q 42 22 50 18 Q 57 14 60 4 Q 63 14 70 18 Q 78 22 85 32 Q 90 38 100 38 L 115 38"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M 25 38 Q 33 38 38 34 Q 44 26 50 23 Q 56 19 60 12 Q 64 19 70 23 Q 76 26 82 34 Q 87 38 95 38"
      stroke="currentColor"
      strokeWidth="0.8"
      strokeOpacity="0.7"
      strokeLinecap="round"
    />
    {/* Central royal lotus crest */}
    <circle cx="60" cy="4" r="2" fill="currentColor" />
    <path d="M 60 1 C 57 -3 63 -3 60 1 Z" fill="currentColor" />
    {/* Fine accent dots */}
    <circle cx="50" cy="20" r="1" fill="currentColor" opacity="0.8" />
    <circle cx="70" cy="20" r="1" fill="currentColor" opacity="0.8" />
  </svg>
);

export const GoldMandalaCorner: React.FC<{
  className?: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}> = ({ className = 'w-16 h-16 text-[#D4AF37]', position = 'top-left' }) => {
  const rotationClass = {
    'top-left': '',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  }[position];

  return (
    <div className={`pointer-events-none select-none ${className} ${rotationClass}`}>
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Outer Corner Filigree */}
        <path d="M 2 78 L 2 2 L 78 2" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.8" />
        <path d="M 7 73 L 7 7 L 73 7" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.5" strokeDasharray="2 2" />
        {/* Indian Paisley / Jali Arc */}
        <path
          d="M 2 40 C 15 38 25 30 28 20 C 30 12 35 5 42 2"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeOpacity="0.75"
        />
        <path
          d="M 2 55 C 22 52 38 42 45 28 C 48 18 55 8 60 2"
          stroke="currentColor"
          strokeWidth="0.7"
          strokeOpacity="0.6"
        />
        {/* Radiating Lotus Petals at Corner */}
        <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.9" />
        <circle cx="16" cy="16" r="1.5" fill="currentColor" />
        <path d="M 16 8 Q 20 12 16 16 Q 12 12 16 8 Z" fill="currentColor" opacity="0.7" />
        <path d="M 24 16 Q 20 20 16 16 Q 20 12 24 16 Z" fill="currentColor" opacity="0.7" />
        <path d="M 16 24 Q 12 20 16 16 Q 20 20 16 24 Z" fill="currentColor" opacity="0.7" />
        <path d="M 8 16 Q 12 12 16 16 Q 12 20 8 16 Z" fill="currentColor" opacity="0.7" />
      </svg>
    </div>
  );
};

export const GoldDivider: React.FC<{ className?: string }> = ({ className = 'w-full my-6' }) => (
  <div className={`flex items-center justify-center gap-3 ${className}`}>
    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-[#D4AF37]" />
    <div className="flex items-center gap-1.5 text-[#E6CA65]">
      <span className="w-1 h-1 rotate-45 bg-[#D4AF37]" />
      <svg className="w-5 h-5 text-[#E6CA65]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 2 C13 7 17 11 22 12 C17 13 13 17 12 22 C11 17 7 13 2 12 C7 11 11 7 12 2 Z" fill="currentColor" fillOpacity="0.2" />
      </svg>
      <span className="w-1 h-1 rotate-45 bg-[#D4AF37]" />
    </div>
    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#D4AF37]/50 to-[#D4AF37]" />
  </div>
);

export const MarigoldCrest: React.FC<{ className?: string }> = ({ className = 'w-8 h-8 text-[#D4AF37]' }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    {/* Stylized Indian Heritage Lotus / Marigold Eight-Point Blossom */}
    <circle cx="16" cy="16" r="3" fill="currentColor" />
    <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="0.8" strokeDasharray="1 1.5" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
      <path
        key={i}
        d="M 16 16 C 18 10 20 8 16 4 C 12 8 14 10 16 16 Z"
        fill="currentColor"
        fillOpacity="0.65"
        transform={`rotate(${angle} 16 16)`}
      />
    ))}
  </svg>
);
