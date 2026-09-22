import React from 'react';
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { PortfolioCollage } from './PortfolioCollage';
import { ProjectItem, ActivePage } from '../types';
import { GoldDivider, MarigoldCrest } from './IndianMotif';

interface WorksPageProps {
  onSelectProject: (project: ProjectItem) => void;
  onNavigateTo: (page: ActivePage) => void;
}

export const WorksPage: React.FC<WorksPageProps> = ({
  onSelectProject,
  onNavigateTo,
}) => {
  return (
    <div className="pt-24 md:pt-32 bg-[#3D0A10]">
      {/* Editorial Page Masthead */}
      <section className="px-6 md:px-12 pb-12 border-b border-[#F8F1E7]/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <MarigoldCrest className="w-4 h-4 text-[#F8F1E7]" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#F8F1E7] font-mono font-bold">
              HOCT Studio Archive // Portfolio Folio
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#F8F1E7]" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#F8F1E7]/80 font-mono">
              Curated Works
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#FDF9F0] font-normal leading-[1.05]">
                Selected Works <br />
                <span className="gold-gradient-text italic font-serif">& Creative Folios</span>
              </h1>
              <p className="text-sm md:text-base text-[#FDF9F0]/85 font-light mt-6 max-w-2xl leading-relaxed">
                A permanent catalog of video editing, commercial cinematography, viral social reels, and bespoke graphic design identities crafted for ambitious brands worldwide.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigateTo('services')}
                className="px-6 py-3 rounded-full border border-[#F8F1E7]/50 text-xs uppercase tracking-[0.2em] font-semibold text-[#F8F1E7] hover:bg-[#F8F1E7] hover:text-[#2A060B] transition-all cursor-pointer flex items-center gap-2 shadow-sm"
              >
                <span>View Services Spectrum</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Portfolio Spreads & Index */}
      <PortfolioCollage onSelectProject={onSelectProject} />

      {/* Bottom Commission Invitation Card */}
      <section className="py-20 px-6 md:px-12 border-t border-[#F8F1E7]/25 bg-[#2A060B]/70">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#F8F1E7] block mb-2">
              Commission A Project
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#FDF9F0]">
              Have a video editing or graphic design vision in mind?
            </h3>
            <p className="text-xs text-[#FDF9F0]/80 font-light mt-2 max-w-lg">
              We collaborate with fashion labels, boutique brands, creators, and modern businesses.
            </p>
          </div>

          <button
            onClick={() => onNavigateTo('inquire')}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#F8F1E7] via-[#FCF9F5] to-[#E8DCCB] text-[#2A060B] text-xs uppercase tracking-[0.25em] font-bold hover:shadow-xl hover:shadow-[#F8F1E7]/30 transition-all shadow-xl flex items-center gap-3 shrink-0 cursor-pointer"
          >
            <span>Initiate Project Inquiry</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
