import React from 'react';
import { HOCT_LOGO_BASE64 } from './hoctLogoData';

interface HoctLogoProps {
  className?: string;
  color?: string;
  showSubtitle?: boolean;
}

export const HoctLogo: React.FC<HoctLogoProps> = ({
  className = 'h-12 w-auto',
  showSubtitle = false,
}) => {
  return (
    <div className={`inline-flex flex-col items-start select-none ${showSubtitle ? 'gap-1.5' : ''}`}>
      <img
        src={HOCT_LOGO_BASE64}
        alt="HOCT - House of Creative Things"
        className={`brand-logo-img block object-contain select-none pointer-events-auto ${className}`}
        style={{
          filter: 'brightness(110%) contrast(115%) drop-shadow(0 2px 10px rgba(248, 241, 231, 0.2))',
          WebkitFilter: 'brightness(110%) contrast(115%) drop-shadow(0 2px 10px rgba(248, 241, 231, 0.2))',
        }}
        loading="eager"
        decoding="sync"
      />

      {showSubtitle && (
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#F8F1E7] font-mono pl-1 font-semibold whitespace-nowrap">
          House of Creative Things
        </span>
      )}
    </div>
  );
};

