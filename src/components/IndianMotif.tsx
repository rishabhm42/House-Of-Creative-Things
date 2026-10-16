import React from 'react';

// Architectural motifs disabled per user specification
export const RoyalJharokhaArch: React.FC<{ className?: string }> = () => null;

export const GoldMandalaCorner: React.FC<{
  className?: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}> = () => null;

export const MarigoldCrest: React.FC<{ className?: string }> = () => null;

export const GoldDivider: React.FC<{ className?: string }> = ({ className = 'w-full my-6' }) => (
  <div className={`flex items-center justify-center gap-3 ${className}`}>
    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#F8F1E7]/30 to-transparent" />
  </div>
);
