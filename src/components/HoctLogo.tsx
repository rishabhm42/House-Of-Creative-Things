import React from 'react';

interface HoctLogoProps {
  className?: string;
  color?: string;
  showSubtitle?: boolean;
}

export const HoctLogo: React.FC<HoctLogoProps> = ({
  className = 'h-10 w-auto',
  color = 'currentColor',
  showSubtitle = false,
}) => {
  return (
    <div className={`inline-flex flex-col items-start ${showSubtitle ? 'gap-1' : ''}`}>
      <svg
        viewBox="0 0 540 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="HOCT - House of Creative Things"
        role="img"
      >
        <defs>
          <linearGradient id="hoctGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2D6" />
            <stop offset="40%" stopColor="#E2BE5E" />
            <stop offset="75%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#9C791D" />
          </linearGradient>
        </defs>

        <g fill={color === 'currentColor' ? 'url(#hoctGoldGradient)' : color}>
          {/* Letter H */}
          <path d="M 40 24 L 70 24 L 70 29 L 61 30 C 58.5 30.3 57.5 31.8 57.5 36 L 57.5 86 L 104 86 L 104 36 C 104 31.8 103 30.3 100.5 30 L 91.5 29 L 91.5 24 L 121.5 24 L 121.5 29 L 112.5 30 C 110 30.3 109 31.8 109 36 L 109 144 C 109 148.2 110 149.7 112.5 150 L 121.5 151 L 121.5 156 L 91.5 156 L 91.5 151 L 100.5 150 C 103 149.7 104 148.2 104 144 L 104 93 L 57.5 93 L 57.5 144 C 57.5 148.2 58.5 149.7 61 150 L 70 151 L 70 156 L 40 156 L 40 151 L 49 150 C 51.5 149.7 52.5 148.2 52.5 144 L 52.5 36 C 52.5 31.8 51.5 30.3 49 30 L 40 29 Z" />

          {/* Letter O (High-contrast Vertical Ellipse) */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 190 22 C 224 22 249 52 249 90 C 249 128 224 158 190 158 C 156 158 131 128 131 90 C 131 52 156 22 190 22 Z M 190 28 C 168 28 147 55 147 90 C 147 125 168 152 190 152 C 212 152 233 125 233 90 C 233 55 212 28 190 28 Z"
          />

          {/* Letter C (Didone Serif Arc) */}
          <path d="M 334 42 C 323 29 306 22 286 22 C 248 22 222 52 222 90 C 222 128 248 158 288 158 C 310 158 329 150 340 135 L 335.5 131 C 324 144 306 152 288 152 C 257 152 237 126 237 90 C 237 54 257 28 288 28 C 304 28 318 35 329 46 Z" />

          {/* Letter T (Capital Serif with Bracketed Crossbar) */}
          <path d="M 348 24 L 436 24 L 436 48 L 430 48 C 428.5 36 425 30 412 29 L 399 29 L 399 144 C 399 148.2 400 149.7 402.5 150 L 411.5 151 L 411.5 156 L 374 156 L 374 151 L 383 150 C 385.5 149.7 386.5 148.2 386.5 144 L 386.5 29 L 374 29 C 361 30 357.5 36 356 48 L 350 48 Z" />
        </g>

        {/* Text Inscribed Inside The 'O' */}
        <g
          fill={color === 'currentColor' ? 'url(#hoctGoldGradient)' : color}
          textAnchor="middle"
          fontFamily="'Cinzel', 'Playfair Display', 'Bodoni MT', 'Didot', serif"
          style={{ letterSpacing: '0.18em' }}
        >
          <text x="190" y="78" fontSize="13.5" fontWeight="600">
            HOUSE OF
          </text>
          <text x="190" y="95" fontSize="13" fontWeight="600">
            CREATIVE
          </text>
          <text x="190" y="112" fontSize="13.5" fontWeight="600">
            THINGS
          </text>
        </g>
      </svg>

      {showSubtitle && (
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-mono pl-1">
          House of Creative Things
        </span>
      )}
    </div>
  );
};
