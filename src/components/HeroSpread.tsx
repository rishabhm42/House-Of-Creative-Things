import React from 'react';
import { motion } from 'motion/react';
import { Play, ArrowDown, Compass } from 'lucide-react';
import { HoctLogo } from './HoctLogo';

interface HeroSpreadProps {
  onExplorePortfolio: () => void;
  onOpenReel: () => void;
}

export const HeroSpread: React.FC<HeroSpreadProps> = ({
  onExplorePortfolio,
  onOpenReel,
}) => {
  return (
    <section id="hero" className="relative min-h-screen pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-20 flex flex-col justify-between overflow-hidden bg-[#3D0A10] text-[#FDF9F0]">
      {/* Background Subtle Editorial Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="max-w-7xl mx-auto h-full px-6 md:px-12 grid grid-cols-4 md:grid-cols-12 gap-6">
          <div className="border-r border-[#F8F1E7]/20 h-full col-span-1 hidden md:block"></div>
          <div className="border-r border-[#F8F1E7]/20 h-full col-span-3 hidden md:block"></div>
          <div className="border-r border-[#F8F1E7]/20 h-full col-span-4 hidden md:block"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full flex-1 flex flex-col justify-between">
        {/* Top Editorial Index & Manifesto */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 md:pb-8 border-b border-[#F8F1E7]/30">
          <div className="flex items-center gap-4 sm:gap-6">
            <HoctLogo
              className="h-10 sm:h-12 md:h-14 w-auto object-contain"
              showSubtitle={false}
            />
            <div className="h-6 w-[1px] bg-[#F8F1E7]/30 hidden sm:block" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#F8F1E7] font-mono">
              House of Creative Things // Video & Design
            </span>
          </div>

          <div className="max-w-md text-xs md:text-sm text-[#FDF9F0]/80 leading-relaxed font-light">
            An independent creative studio uniting video editing, short-form storytelling, and graphic design systems with modern editorial precision.
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
              <span className="text-xs tracking-[0.45em] uppercase text-[#F8F1E7] font-semibold block mb-3 font-mono">
                VIDEO EDITING • GRAPHIC DESIGN
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
              Focused on modern video editing and comprehensive graphic design. We edit high-retention reels, brand commercials, and documentary cuts, while architecting logos, packaging, and brand identities that leave a lasting mark.
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
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#F8F1E7] via-[#FCF9F5] to-[#E8DCCB] text-[#2A060B] text-xs uppercase tracking-[0.25em] font-bold hover:shadow-xl hover:shadow-[#F8F1E7]/30 transition-all duration-300 shadow-md flex items-center gap-3 cursor-pointer group"
              >
                <span>View Selected Works</span>
                <Compass className="w-4 h-4 transition-transform group-hover:rotate-45" />
              </button>

              <button
                id="hero-watch-reel-btn"
                onClick={onOpenReel}
                className="px-6 py-3.5 rounded-full border border-[#F8F1E7]/50 text-[#FDF9F0] text-xs uppercase tracking-[0.25em] font-medium hover:border-[#F8F1E7] hover:bg-[#F8F1E7]/15 transition-all duration-300 flex items-center gap-3 cursor-pointer group shadow-inner"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#F8F1E7] to-[#E8DCCB] text-[#2A060B] flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm">
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
                className="relative w-4/5 h-[85%] overflow-hidden shadow-2xl border-2 border-[#F8F1E7]/50 group rounded-xs"
              >
                <img
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=85"
                  alt="Video Editing suite timeline production"
                  className="w-full h-full object-cover filter grayscale contrast-115 brightness-95 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E8DCCB] via-[#FCF9F5] to-[#E8DCCB]" />
                <div className="absolute bottom-4 left-4 right-4 text-[10px] uppercase tracking-[0.25em] text-[#FDF9F0] bg-[#2A060B]/85 backdrop-blur-xs px-3 py-1.5 flex justify-between items-center border border-[#F8F1E7]/40 shadow-lg">
                  <span className="text-[#F8F1E7] font-semibold">Timeline // 4K</span>
                  <span>Video Suite // REC</span>
                </div>
              </motion.div>

              {/* Overlapping Secondary Landscape Graphic Design Moment */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-4 right-0 w-3/5 aspect-[16/10] overflow-hidden shadow-2xl border-2 border-[#F8F1E7] bg-[#2A060B] p-1.5 group cursor-pointer"
                onClick={onOpenReel}
              >
                <div className="relative w-full h-full overflow-hidden border border-[#F8F1E7]/40">
                  <img
                    src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=900&q=80"
                    alt="Graphic design identity & brand collateral"
                    className="w-full h-full object-cover filter grayscale contrast-115 brightness-95 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#2A060B]/40 group-hover:bg-[#2A060B]/10 transition-colors flex items-center justify-center">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-r from-[#F8F1E7] via-[#FCF9F5] to-[#E8DCCB] text-[#2A060B] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 ml-0.5 fill-current" />
                    </div>
                  </div>
                  <div className="absolute top-2 left-2 text-[9px] tracking-[0.2em] uppercase font-bold text-[#2A060B] bg-[#F8F1E7] px-2 py-0.5 shadow">
                    Cinema Reel
                  </div>
                </div>
              </motion.div>

              {/* Decorative Editorial Floating Caption */}
              <div className="absolute -top-6 right-4 hidden sm:block text-right">
                <span className="font-serif italic text-2xl text-[#F8F1E7] block">Studio Works</span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#FDF9F0]/70 font-mono">Jaipur • Mumbai • Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Editorial Ticker & Scroll Indicator */}
        <div className="pt-6 pb-2 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[#F8F1E7]/25 text-xs tracking-[0.2em] uppercase text-[#FDF9F0]/80">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F8F1E7] animate-ping" />
              <span className="text-[#F8F1E7] font-semibold">Commissions Open</span>
              <span className="hidden sm:inline">2025–2026</span>
            </span>
            <span className="hidden md:inline text-[#F8F1E7]/50">•</span>
            <span className="hidden md:inline text-[#FDF9F0]/70">Delhi • Mumbai • Jaipur • London • Paris</span>
          </div>

          <button
            onClick={onExplorePortfolio}
            className="flex items-center gap-2 text-[#F8F1E7] hover:text-[#FCF9F5] transition-colors cursor-pointer group"
          >
            <span>Explore Portfolio Editions</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
