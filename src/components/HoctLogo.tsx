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
      <img
        src="/hoct-logo-new.png"
        alt="HOCT - House of Creative Things"
        className={className}
      />

      {showSubtitle && (
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#F8F1E7] font-mono pl-1">
          House of Creative Things
        </span>
      )}
    </div>
  );
};
