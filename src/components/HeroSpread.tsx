import React from 'react';
import { motion } from 'motion/react';
import { Play, ArrowDown, Compass, Sparkles } from 'lucide-react';
import { HoctLogo } from './HoctLogo';
import { RoyalJharokhaArch, GoldMandalaCorner } from './IndianMotif';

interface HeroSpreadProps {
  onExplorePortfolio: () => void;
  onOpenReel: () => void;
}

export const HeroSpread: React.FC<HeroSpreadProps> = ({
  onExplorePortfolio,
  onOpenReel,
}) => {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 md:pt-38 md:pb-24 flex flex-col justify-between overflow-hidden bg-[#3D0A10] text-[#FDF9F0]">
      {/* Corner Golden Mandala Ornaments */}
      <GoldMandalaCorner position="top-left" className="absolute top-20 left-4 w-24 h-24 text-[#D4AF37] opacity-40 hidden md:block" />
      <GoldMandalaCorner position="top-right" className="absolute top-20 right-4 w-24 h-24 text-[#D4AF37] opacity-40 hidden md:block" />

      {/* Background Subtle Royal Indian Jali Lattice */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="max-w-7xl mx-auto h-full px-6 md:px-12 grid grid-cols-4 md:grid-cols-12 gap-6">
          <div className="border-r border-[#D4AF37]/20 h-full col-span-1 hidden md:block"></div>
          <div className="border-r border-[#D4AF37]/20 h-full col-span-3 hidden md:block"></div>
          <div className="border-r border-[#D4AF37]/20 h-full col-span-4 hidden md:block"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full flex-1 flex flex-col justify-between">
        {/* Top Royal Editorial Index & Manifesto */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#D4AF37]/30">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-[10px] tracking-[0.3em] uppercase bg-gradient-to-r from-[#D4AF37] via-[#F4E0A5] to-[#AA820A] text-[#2A060B] font-bold shadow-md shadow-[#D4AF37]/20">
              <Sparkles className="w-3 h-3 text-[#2A060B]" />
              HOCT Atelier
            </span>
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-mono">
              House of Creative Things // Royal Edition
            </span>
          </div>

          <div className="max-w-md text-xs md:text-sm text-[#FDF9F0]/80 leading-relaxed font-light">
            An independent royal creative atelier uniting high-fashion cinematography, viral reels, and gilded graphic identities inspired by classical Indian aesthetics and modern editorial minimalism.
          </div>
        </div>

        {/* Central Asymmetrical Visual & Typography Composition */}
        <div className="py-10 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Monumental Headline Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mb-4 flex items-center gap-4">
                <HoctLogo className="h-10 sm:h-12 w-auto" />
                <RoyalJharokhaArch className="w-20 h-8 text-[#D4AF37]" />
              </div>
              <span className="text-xs tracking-[0.45em] uppercase text-[#D4AF37] font-semibold block mb-3 font-mono">
                ROYAL HERITAGE • MODERN CINEMATOGRAPHY
              </span>
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.98] tracking-tight font-normal">
                Where Cinema <br />
                <span className="gold-gradient-text italic font-serif font-medium">Transcends</span> <br />
                The Ephemeral.
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 text-base md:text-lg text-[#FDF9F0]/85 max-w-xl font-light leading-relaxed"
            >
              Rooted in the timeless grandeur of Indian palatial architecture, gold foil craft, and the quiet intimacy of classic 35mm cinema. We direct reels, documentary brand films, and visual identity bibles that linger in memory.
            </motion.p>

            {/* Editorial Action Cluster */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
            >
              <button
                id="hero-explore-works-btn"
                onClick={onExplorePortfolio}
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F4E0A5] to-[#AA820A] text-[#2A060B] text-xs uppercase tracking-[0.25em] font-bold hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-all duration-300 shadow-md flex items-center gap-3 cursor-pointer group"
              >
                <span>View Selected Works</span>
                <Compass className="w-4 h-4 transition-transform group-hover:rotate-45" />
              </button>

              <button
                id="hero-watch-reel-btn"
                onClick={onOpenReel}
                className="px-6 py-3.5 rounded-full border border-[#D4AF37]/50 text-[#FDF9F0] text-xs uppercase tracking-[0.25em] font-medium hover:border-[#D4AF37] hover:bg-[#D4AF37]/15 transition-all duration-300 flex items-center gap-3 cursor-pointer group shadow-inner"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA820A] text-[#2A060B] flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm">
                  <Play className="w-3 h-3 ml-0.5 fill-current" />
                </div>
                <span>Play Showreel (01:42)</span>
              </button>
            </motion.div>
          </div>

          {/* Editorial Collage Right Column */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
              {/* Primary Large Editorial Portrait Still */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-4/5 h-[85%] overflow-hidden shadow-2xl border-2 border-[#D4AF37]/50 group rounded-xs"
              >
                <img
                  src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=85"
                  alt="Royal Indian Heritage & Editorial Cinematography"
                  className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#AA820A] via-[#F4E0A5] to-[#AA820A]" />
                <div className="absolute bottom-4 left-4 right-4 text-[10px] uppercase tracking-[0.25em] text-[#FDF9F0] bg-[#2A060B]/85 backdrop-blur-xs px-3 py-1.5 flex justify-between items-center border border-[#D4AF37]/40 shadow-lg">
                  <span className="text-[#D4AF37] font-semibold">Udaipur // 35mm</span>
                  <span>Frame 048 // REC</span>
                </div>
              </motion.div>

              {/* Overlapping Secondary Landscape Motion Moment */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-4 right-0 w-3/5 aspect-[16/10] overflow-hidden shadow-2xl border-2 border-[#D4AF37] bg-[#2A060B] p-1.5 group cursor-pointer"
                onClick={onOpenReel}
              >
                <div className="relative w-full h-full overflow-hidden border border-[#D4AF37]/40">
                  <img
                    src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80"
                    alt="Cinema motion preview"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#2A060B]/40 group-hover:bg-[#2A060B]/10 transition-colors flex items-center justify-center">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FFF0CA] to-[#AA820A] text-[#2A060B] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 ml-0.5 fill-current" />
                    </div>
                  </div>
                  <div className="absolute top-2 left-2 text-[9px] tracking-[0.2em] uppercase font-bold text-[#2A060B] bg-[#D4AF37] px-2 py-0.5 shadow">
                    Cinema Reel
                  </div>
                </div>
              </motion.div>

              {/* Decorative Editorial Floating Caption */}
              <div className="absolute -top-6 right-4 hidden sm:block text-right">
                <span className="font-serif italic text-2xl text-[#D4AF37] block">L’Art Impérial</span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#FDF9F0]/70 font-mono">Jaipur • Udaipur • Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Editorial Ticker & Scroll Indicator */}
        <div className="pt-6 pb-2 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[#D4AF37]/25 text-xs tracking-[0.2em] uppercase text-[#FDF9F0]/80">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
              <span className="text-[#D4AF37] font-semibold">Commissions Open</span>
              <span className="hidden sm:inline">2025–2026</span>
            </span>
            <span className="hidden md:inline text-[#D4AF37]/50">•</span>
            <span className="hidden md:inline text-[#FDF9F0]/70">Delhi • Mumbai • Jaipur • London • Paris</span>
          </div>

          <button
            onClick={onExplorePortfolio}
            className="flex items-center gap-2 text-[#D4AF37] hover:text-[#FFF0CA] transition-colors cursor-pointer group"
          >
            <span>Explore Royal Editions</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
