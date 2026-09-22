import React from 'react';
import { ArrowUpRight, MapPin, Feather, Sparkles, Compass } from 'lucide-react';
import { PhilosophySection } from './PhilosophySection';
import { HoctLogo } from './HoctLogo';
import { RoyalJharokhaArch, GoldMandalaCorner, GoldDivider, MarigoldCrest } from './IndianMotif';
import { ActivePage } from '../types';

interface AboutPageProps {
  onNavigateTo: (page: ActivePage) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigateTo }) => {
  const coordinates = [
    { city: 'New Delhi & Jaipur', district: 'Design Quarters & Studios', focus: 'Heritage Art Direction & Studio Archives' },
    { city: 'Mumbai', district: 'Kala Ghoda Arts Precinct & Bandra', focus: 'Cinematic Fashion Reels & High-Frequency Commercial Production' },
    { city: 'London & Mayfair', district: 'Albemarle St & Soho', focus: 'Global Luxury Publishing & Typographic Systems' },
    { city: 'Worldwide', district: 'Bespoke Remote Commissions', focus: '4K Archival Transfers & 24h Synchronous Editing Pipelines' },
  ];

  return (
    <div className="pt-24 md:pt-32">
      {/* Editorial Page Masthead */}
      <section className="px-6 md:px-12 pb-14 border-b border-[#F8F1E7]/20 relative overflow-hidden">
        {/* Subtle Indian Architectural Jali & Corners */}
        <div className="absolute top-0 right-0 opacity-15 pointer-events-none">
          <GoldMandalaCorner className="w-48 h-48 text-[#F8F1E7]" position="top-right" />
        </div>
        <div className="absolute bottom-0 left-0 opacity-15 pointer-events-none">
          <GoldMandalaCorner className="w-48 h-48 text-[#F8F1E7]" position="bottom-left" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <MarigoldCrest className="w-4 h-4 text-[#F8F1E7]" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#F8F1E7] font-mono font-bold">
              HOCT Studio Foundations
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#F8F1E7]" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#F8F1E7]/80 font-mono">
              The Creative Ethos
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div className="max-w-3xl">
              <div className="mb-4">
                <HoctLogo className="h-10 w-auto" />
              </div>

              <div className="my-3">
                <RoyalJharokhaArch className="w-24 h-6 text-[#F8F1E7]/70" />
              </div>

              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#FDF9F0] font-normal leading-[1.05]">
                House of Creative Things <br />
                <span className="italic font-serif gold-gradient-text">& The Studio Ethos</span>
              </h1>
              <p className="text-sm md:text-base text-[#FDF9F0]/85 font-light mt-6 max-w-2xl leading-relaxed">
                Born at the intersection of timeless cultural aesthetics and avant-garde cinematic storytelling, HOCT crafts enduring visual identities and motion narratives with Soft Cream precision.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigateTo('inquire')}
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#F8F1E7] via-[#FCF9F5] to-[#E8DCCB] text-[#2A060B] text-xs uppercase tracking-[0.25em] font-bold hover:shadow-xl hover:shadow-[#F8F1E7]/30 transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Initiate Commission</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Philosophy & Testimonials Component */}
      <PhilosophySection />

      {/* Studio Coordinates & Global Presence */}
      <section className="py-24 px-6 md:px-12 border-t border-[#F8F1E7]/25 bg-[#230508]/80 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-4 h-4 text-[#F8F1E7]" />
            <span className="text-[10px] uppercase tracking-[0.35em] font-mono text-[#F8F1E7] font-bold">
              Global Atelier Presence
            </span>
          </div>

          <div className="flex items-center justify-between mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FDF9F0]">
              Where We Architect & Cut <br />
              <span className="italic font-serif text-[#F8F1E7] text-2xl sm:text-3xl">From Jaipur Courtyards to Global Capitols</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coordinates.map((item, idx) => (
              <div key={idx} className="border-t-2 border-[#F8F1E7]/40 pt-6 space-y-2 bg-[#1E0407]/50 p-5 rounded-xs relative group hover:border-[#F8F1E7] transition-colors">
                <span className="text-xs font-mono text-[#F8F1E7]/75 block font-bold">
                  Atelier Sanctuary // 0{idx + 1}
                </span>
                <h3 className="font-serif text-2xl text-[#FDF9F0]">{item.city}</h3>
                <p className="text-xs text-[#F8F1E7]/90 font-mono">{item.district}</p>
                <p className="text-xs text-[#FDF9F0]/75 font-light pt-1 leading-relaxed">{item.focus}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 sm:p-12 border-2 border-[#F8F1E7]/40 bg-[#1E0407]/90 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
              <GoldMandalaCorner className="w-36 h-36 text-[#F8F1E7]" position="top-right" />
            </div>
            <div className="relative z-10">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#FDF9F0]">
                Commission a bespoke edition with House of Creative Things.
              </h3>
              <p className="text-xs sm:text-sm text-[#FDF9F0]/80 font-light mt-1.5">
                Direct artistic dialogue with our creative director from treatment to final 24K master files.
              </p>
            </div>
            <button
              onClick={() => onNavigateTo('inquire')}
              className="relative z-10 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#F8F1E7] via-[#FCF9F5] to-[#E8DCCB] text-[#2A060B] text-xs uppercase tracking-[0.25em] font-bold hover:shadow-xl hover:shadow-[#F8F1E7]/30 transition-all cursor-pointer shrink-0"
            >
              Start Collaboration
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
