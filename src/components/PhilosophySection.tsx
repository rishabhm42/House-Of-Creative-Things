import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Scissors, Eye, PenTool } from 'lucide-react';
import { clientTestimonials } from '../data/portfolioData';
import { RoyalJharokhaArch, GoldMandalaCorner, GoldDivider, MarigoldCrest } from './IndianMotif';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 md:py-36 bg-[#2A060B] text-[#FDF9F0] relative overflow-hidden border-t border-[#F8F1E7]/25">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Asymmetrical Editorial Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Stacked Black & White Photography Stills */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Main Photo (Tall Portrait) */}
              <div className="relative aspect-[3/4] w-4/5 overflow-hidden shadow-2xl border-2 border-[#F8F1E7]/40 group bg-black/40">
                <img
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=85"
                  alt="Video editing console and precision timeline"
                  className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-[#F8F1E7] to-[#E8DCCB] text-[#2A060B] px-3 py-1 text-[9px] uppercase tracking-[0.25em] font-bold">
                  Studio Atelier Notes
                </div>
              </div>

              {/* Offset Detail Photo (Square / Graphic Design Print Proof) */}
              <div className="absolute -bottom-8 -right-4 w-3/5 aspect-square overflow-hidden shadow-2xl border-2 border-[#F8F1E7] bg-[#1E0407] p-1.5 group">
                <img
                  src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=900&q=85"
                  alt="Graphic design identity and print typography"
                  className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Micro Caption */}
            <div className="mt-14 text-[10px] uppercase tracking-[0.25em] text-[#F8F1E7] flex items-center justify-between border-t border-[#F8F1E7]/25 pt-3 font-mono">
              <span>Plate No. 04</span>
              <span>The Video Edit Suite & Graphic Workshop</span>
            </div>
          </div>

          {/* Right Column: Editorial Manifesto & Pillar Cards */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#F8F1E7]" />
              <span className="text-xs uppercase tracking-[0.35em] text-[#F8F1E7] font-bold font-mono">
                The Creative Philosophy
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#FDF9F0] font-normal leading-[1.05]">
              Form Follows Emotion. <br />
              <span className="italic font-serif gold-gradient-text">Rhythm Dictates Memory.</span>
            </h2>

            <p className="mt-8 text-base md:text-lg text-[#FDF9F0]/85 font-light leading-relaxed">
              In a digital landscape flooded with disposable trends and quick templates, we engineer bespoke video edits and timeless graphic designs defined by editorial discipline and thoughtful restraint.
            </p>

            <p className="mt-4 text-sm md:text-base text-[#FDF9F0]/80 font-light leading-relaxed">
              Every video edit is treated like an analog cinema piece: cut to the natural breath of the story, scored with tactile audio stems, and finished with filmic color calibration. Every brand identity is constructed with deliberate proportions and enduring typographical hierarchy.
            </p>

            {/* Three Pillars */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[#F8F1E7]/25">
              <div className="p-4 bg-[#1E0407]/50 border border-[#F8F1E7]/20 rounded-xs">
                <span className="font-mono text-xs text-[#F8F1E7] block mb-2 font-bold">01 / RESTRAINT</span>
                <h4 className="font-serif text-xl text-[#FDF9F0] mb-1">Negative Space</h4>
                <p className="text-xs text-[#FDF9F0]/75 font-light leading-relaxed">
                  Allowing imagery and typography to breathe with generous margins and balanced optical weight.
                </p>
              </div>

              <div className="p-4 bg-[#1E0407]/50 border border-[#F8F1E7]/20 rounded-xs">
                <span className="font-mono text-xs text-[#F8F1E7] block mb-2 font-bold">02 / CADENCE</span>
                <h4 className="font-serif text-xl text-[#FDF9F0] mb-1">Micro Pacing</h4>
                <p className="text-xs text-[#FDF9F0]/75 font-light leading-relaxed">
                  Sub-frame cuts calibrated for immediate attention and sustained retention across reels and long-form cinema.
                </p>
              </div>

              <div className="p-4 bg-[#1E0407]/50 border border-[#F8F1E7]/20 rounded-xs">
                <span className="font-mono text-xs text-[#F8F1E7] block mb-2 font-bold">03 / TACTILITY</span>
                <h4 className="font-serif text-xl text-[#FDF9F0] mb-1">Print & Foil Grade</h4>
                <p className="text-xs text-[#FDF9F0]/75 font-light leading-relaxed">
                  Subtle film grain, bespoke typography, and Soft Cream accents that impart weight on screens and in print.
                </p>
              </div>
            </div>

            {/* Studio Brand Color Palette Specimen Card */}
            <div className="mt-10 p-6 bg-[#1E0407]/80 border-2 border-[#F8F1E7]/30 shadow-xl">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#F8F1E7] font-semibold block mb-3 font-mono">
                Studio Palette Specification // Soft Cream Harmony
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-3 bg-black/40 border border-[#F8F1E7]/30">
                  <div className="w-8 h-8 rounded-xs bg-[#2A060B] border-2 border-[#F8F1E7]" />
                  <div className="text-xs text-[#FDF9F0]">
                    <span className="font-mono font-bold block text-[#F8F1E7]">#2A060B</span>
                    <span className="text-[#FDF9F0]/70 text-[11px]">Deep Burgundy Wine</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-black/40 border border-[#F8F1E7]/30">
                  <div className="w-8 h-8 rounded-xs bg-gradient-to-tr from-[#F8F1E7] to-[#FCF9F5] border border-black/40" />
                  <div className="text-xs text-[#FDF9F0]">
                    <span className="font-mono font-bold block text-[#F8F1E7]">#F8F1E7</span>
                    <span className="text-[#FDF9F0]/70 text-[11px]">Soft Cream Accent</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-black/40 border border-[#F8F1E7]/30">
                  <div className="w-8 h-8 rounded-xs bg-[#FDF9F0] border border-black/40" />
                  <div className="text-xs text-[#FDF9F0]">
                    <span className="font-mono font-bold block text-[#2A060B] bg-[#FDF9F0] px-1 rounded-xs inline">#FDF9F0</span>
                    <span className="text-[#FDF9F0]/70 text-[11px] block mt-0.5">Warm Ivory Paper</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Praise & Testimonial Vignettes */}
        <div id="praise" className="mt-28 pt-16 border-t border-[#F8F1E7]/25 relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.35em] text-[#F8F1E7] font-bold block mb-2 font-mono">
                Client Testimonials & Partners
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#FDF9F0]">
                Editorial Endorsements
              </h3>
            </div>
            <div className="w-40 hidden md:block">
              <GoldDivider className="my-0" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientTestimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-8 border-2 border-[#F8F1E7]/30 bg-[#1E0407]/70 flex flex-col justify-between relative group hover:border-[#F8F1E7] transition-all shadow-xl"
              >
                <div className="font-serif text-5xl text-[#F8F1E7]/40 leading-none select-none mb-4">
                  “
                </div>
                <p className="font-serif text-lg text-[#FDF9F0] leading-relaxed italic mb-6">
                  {t.quote}
                </p>
                <div className="border-t border-[#F8F1E7]/25 pt-4">
                  <span className="text-xs font-semibold text-[#F8F1E7] block font-mono">
                    {t.author}
                  </span>
                  <span className="text-[11px] text-[#FDF9F0]/70 uppercase tracking-wider block mt-0.5 font-mono">
                    {t.role} — {t.organization}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
