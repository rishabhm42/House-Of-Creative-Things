import React from 'react';
import { ArrowUpRight, CheckCircle2, Clock, Sparkles, Layers, Sliders, Film } from 'lucide-react';
import { ServicesSection } from './ServicesSection';
import { RoyalJharokhaArch, GoldMandalaCorner, GoldDivider, MarigoldCrest } from './IndianMotif';
import { ActivePage } from '../types';

interface ServicesPageProps {
  onSelectServiceToInquire: (serviceName: string) => void;
  onNavigateTo: (page: ActivePage) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onSelectServiceToInquire,
  onNavigateTo,
}) => {
  const processSteps = [
    {
      num: '01',
      title: 'Aesthetic Treatment & Curation',
      desc: 'We begin by establishing the royal conceptual register: analyzing reference cinema, defining aspect ratios (1.33:1, 2.39:1, 9:16), curating typographic pairings, and scoring classical acoustic stems.',
    },
    {
      num: '02',
      title: 'Assembly & Rhythmic Pacing',
      desc: 'Footage is edited frame-by-frame with deliberate musical pacing. For graphic design, layouts undergo stringent architectural grid testing inspired by classical Indian palace symmetry.',
    },
    {
      num: '03',
      title: '24K Color Grading & Emulation',
      desc: 'Application of custom 35mm film emulation curves, sound effect layering (rich ambient acoustic resonance, tactile film noise), and gold foil stamping dieline checks for physical packages.',
    },
    {
      num: '04',
      title: 'Master Delivery & Multi-Ratio Archival',
      desc: 'Delivery of ProRes 4444 master files, social cutdowns optimized for compression algorithms, vector identity bibles, and print-ready metallic gold CMYK collateral.',
    },
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
              HOCT Studio Disciplines
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37]/80 font-mono">
              Commission Guide
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div className="max-w-3xl">
              <div className="my-2">
                <RoyalJharokhaArch className="w-24 h-6 text-[#D4AF37]/75" />
              </div>
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#FDF9F0] font-normal leading-[1.05]">
                Services <br />
                <span className="italic font-serif gold-gradient-text">& Studio Disciplines</span>
              </h1>
              <p className="text-sm md:text-base text-[#FDF9F0]/85 font-light mt-6 max-w-2xl leading-relaxed">
                We operate as an agile creative atelier providing bespoke video post-production, viral reel direction, and timeless graphic architectures for fashion, luxury, and heritage institutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigateTo('inquire')}
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F4E0A5] to-[#AA820A] text-[#2A060B] text-xs uppercase tracking-[0.25em] font-bold hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Initiate Custom Brief</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Process Section */}
      <section className="py-20 px-6 md:px-12 border-b border-[#D4AF37]/20 bg-[#230508]/70 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-[0.35em] font-mono text-[#D4AF37] font-bold">
              Atelier Methodology
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#FDF9F0] mb-12">
            How Every Royal Commission Unfolds
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.num} className="border-t-2 border-[#D4AF37]/40 pt-6 space-y-3 bg-[#1E0407]/60 p-6 rounded-xs relative group hover:border-[#D4AF37] transition-colors shadow-lg">
                <span className="text-xs font-mono text-[#D4AF37] block font-bold">
                  Phase // {step.num}
                </span>
                <h3 className="font-serif text-xl text-[#FDF9F0]">
                  {step.title}
                </h3>
                <p className="text-xs text-[#FDF9F0]/80 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Interactive Services Catalog */}
      <ServicesSection onSelectServiceToInquire={onSelectServiceToInquire} />

      {/* Turnaround & Inquiries Guarantee Banner */}
      <section className="py-24 px-6 md:px-12 border-t border-[#D4AF37]/25 bg-[#230508]/85">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border-2 border-[#D4AF37]/30 bg-[#1E0407]/80 space-y-4 rounded-xs shadow-xl">
            <Clock className="w-6 h-6 text-[#D4AF37]" />
            <h4 className="font-serif text-2xl text-[#FDF9F0]">Turnaround Precision</h4>
            <p className="text-xs sm:text-sm text-[#FDF9F0]/80 font-light leading-relaxed">
              Standard turnaround is 5–10 business days for editorial reels and 2–3 weeks for complete brand identity systems. Expedited rush deliveries available on request.
            </p>
          </div>

          <div className="p-8 border-2 border-[#D4AF37]/30 bg-[#1E0407]/80 space-y-4 rounded-xs shadow-xl">
            <Sliders className="w-6 h-6 text-[#D4AF37]" />
            <h4 className="font-serif text-2xl text-[#FDF9F0]">Bespoke Royal Adaptability</h4>
            <p className="text-xs sm:text-sm text-[#FDF9F0]/80 font-light leading-relaxed">
              Every commission is tailored to your brand’s specific guidelines. We supply both native edit project files (Premiere / DaVinci) and flattened 24K broadcast masters.
            </p>
          </div>

          <div className="p-8 border-2 border-[#D4AF37]/30 bg-[#1E0407]/80 space-y-4 rounded-xs shadow-xl">
            <Sparkles className="w-6 h-6 text-[#D4AF37]" />
            <h4 className="font-serif text-2xl text-[#FDF9F0]">Direct Collaboration</h4>
            <p className="text-xs sm:text-sm text-[#FDF9F0]/80 font-light leading-relaxed">
              You collaborate directly with our senior creative director. No intermediary account managers or diluted feedback loops.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
