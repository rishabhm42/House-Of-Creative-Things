import React from 'react';
import { ArrowUpRight, Film, Sliders, Volume2, Camera, Sparkles } from 'lucide-react';
import { ShowreelSection } from './ShowreelSection';
import { RoyalJharokhaArch, GoldMandalaCorner, GoldDivider, MarigoldCrest } from './IndianMotif';
import { ActivePage } from '../types';

interface ShowreelPageProps {
  onOpenInquiry: () => void;
  onNavigateTo: (page: ActivePage) => void;
}

export const ShowreelPage: React.FC<ShowreelPageProps> = ({
  onOpenInquiry,
  onNavigateTo,
}) => {
  const cinemaSpecs = [
    { label: 'Capture Format', value: 'ARRI Alexa Mini LF & 35mm Analog Film' },
    { label: 'Optics Profile', value: 'Hawk 2x Anamorphic V-Lite & Cooke Panchro' },
    { label: 'Color Emulation', value: 'Kodak Double-X 250D & 24K Royal Gold Tint' },
    { label: 'Audio Stems', value: '24-bit / 96kHz Binaural & Acoustic Heritage Ambient' },
    { label: 'Master Ratio', value: '2.39:1 CinemaScope & 9:16 Vertical Reel' },
    { label: 'Native Timeline', value: '24.000 fps True Cinema Timecode' },
  ];

  return (
    <div className="pt-24 md:pt-32">
      {/* Editorial Page Masthead */}
      <section className="px-6 md:px-12 pb-14 border-b border-[#D4AF37]/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-15 pointer-events-none">
          <GoldMandalaCorner className="w-48 h-48 text-[#D4AF37]" position="top-right" />
        </div>
        <div className="absolute bottom-0 left-0 opacity-15 pointer-events-none">
          <GoldMandalaCorner className="w-48 h-48 text-[#D4AF37]" position="bottom-left" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <MarigoldCrest className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37] font-mono font-bold">
              HOCT Cinema Screening Room
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37]/80 font-mono">
              2025 Royal Showreel
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div className="max-w-3xl">
              <div className="my-2">
                <RoyalJharokhaArch className="w-24 h-6 text-[#D4AF37]/75" />
              </div>
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#FDF9F0] font-normal leading-[1.05]">
                Cinema Showreel <br />
                <span className="italic font-serif gold-gradient-text">& Royal Motion Showcase</span>
              </h1>
              <p className="text-sm md:text-base text-[#FDF9F0]/85 font-light mt-6 max-w-2xl leading-relaxed">
                Experience our studio showreel in both widescreen cinema scope and vertical 9:16 mobile formats. Each cut explores the tension between architectural stillness and dynamic motion.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigateTo('inquire')}
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F4E0A5] to-[#AA820A] text-[#2A060B] text-xs uppercase tracking-[0.25em] font-bold hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Book Video Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Video Player Showcase */}
      <ShowreelSection onOpenInquiry={onOpenInquiry} />

      {/* Technical Cinema Specifications Grid */}
      <section className="py-24 px-6 md:px-12 border-t border-[#D4AF37]/25 bg-[#230508]/85 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Camera className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-[0.35em] font-mono text-[#D4AF37] font-bold">
              Archival Standards & Camera Rigs
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#FDF9F0] mb-12">
            Technical Finishing Standards
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cinemaSpecs.map((spec, i) => (
              <div key={i} className="p-6 border-2 border-[#D4AF37]/30 bg-[#1E0407]/80 rounded-xs space-y-2 shadow-lg">
                <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-[#D4AF37] block font-bold">
                  {spec.label}
                </span>
                <p className="font-serif text-lg text-[#FDF9F0]">
                  {spec.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 sm:p-12 border-2 border-[#D4AF37]/40 bg-[#1E0407]/90 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
              <GoldMandalaCorner className="w-36 h-36 text-[#D4AF37]" position="top-right" />
            </div>
            <div className="relative z-10">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#FDF9F0]">
                Commission a bespoke cinema edit.
              </h3>
              <p className="text-xs sm:text-sm text-[#FDF9F0]/80 font-light mt-1.5">
                We format high-impact brand cutdowns, fashion reels, and documentary films.
              </p>
            </div>
            <button
              onClick={() => onNavigateTo('inquire')}
              className="relative z-10 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F4E0A5] to-[#AA820A] text-[#2A060B] text-xs uppercase tracking-[0.25em] font-bold hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-all cursor-pointer shrink-0"
            >
              Initiate Booking
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
