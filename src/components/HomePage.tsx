import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Play, Film, Sparkles, Compass, Eye, ArrowRight } from 'lucide-react';
import { HeroSpread } from './HeroSpread';
import { portfolioProjects } from '../data/portfolioData';
import { ProjectItem, ActivePage } from '../types';
import { HoctLogo } from './HoctLogo';
import { RoyalJharokhaArch, GoldDivider, MarigoldCrest } from './IndianMotif';

interface HomePageProps {
  onNavigateTo: (page: ActivePage) => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigateTo,
  onSelectProject,
}) => {
  // Select top 3 marquee projects to feature on the home page
  const featuredProjects = portfolioProjects.slice(0, 3);

  return (
    <div className="space-y-0 bg-[#3D0A10]">
      {/* 1. Iconic Hero Spread */}
      <HeroSpread
        onExplorePortfolio={() => onNavigateTo('works')}
        onOpenReel={() => onNavigateTo('showreel')}
      />

      {/* 2. Editorial Studio Statement & Royal Manifesto */}
      <section className="py-24 md:py-32 px-6 md:px-12 border-b border-[#F8F1E7]/20 bg-[#2A060B]/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#F8F1E7]/60" />
                <span className="text-[11px] uppercase tracking-[0.35em] text-[#F8F1E7] font-mono font-bold block">
                  Studio Manifesto · 01
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FDF9F0] font-normal leading-tight text-balance">
                Crafting visual tension between Indian heritage & modern rhythm.
              </h2>
              <div className="pt-2">
                <button
                  onClick={() => onNavigateTo('about')}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#F8F1E7] hover:text-[#FCF9F5] cursor-pointer font-mono group underline underline-offset-8 decoration-[#F8F1E7]/40 hover:decoration-[#F8F1E7] transition-colors"
                >
                  <span>Explore Atelier Ethos</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 text-[#FDF9F0]/85 text-sm md:text-base font-light leading-relaxed">
              <p>
                <strong className="text-[#FCF9F5] font-medium font-serif">HOUSE OF CREATIVE THINGS (HOCT)</strong> is an independent creative studio dedicated to refined video editing, brand films, viral reels, and bespoke graphic design systems. Inspired by classical architectural aesthetics and modern visual rhythm, we avoid disposable digital noise in favor of timeless, tactile permanence.
              </p>
              <p>
                Every motion timeline is paced like music; every brand identity is engineered with intentional proportions. Whether cutting 4K high-fashion lookbooks for modern brands or drafting tactile monograms and packaging systems, we craft work that commands undivided focus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Works Preview */}
      <section className="py-24 md:py-32 px-6 md:px-12 border-b border-[#F8F1E7]/20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header with Direct Page Link */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#F8F1E7]/25">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-[1px] bg-[#F8F1E7]/60" />
                <span className="text-[11px] uppercase tracking-[0.35em] text-[#F8F1E7] font-mono font-bold block">
                  Curated Selection · Spotlight Editions
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#FDF9F0] font-normal tracking-tight text-balance">
                Selected Works
              </h2>
            </div>

            <button
              onClick={() => onNavigateTo('works')}
              className="inline-flex items-center justify-center px-7 py-3.5 border border-[#F8F1E7]/50 text-xs uppercase tracking-[0.2em] font-semibold text-[#F8F1E7] hover:bg-[#F8F1E7] hover:text-[#2A060B] transition-colors cursor-pointer group active:scale-95"
            >
              <span>View All Folios & Case Studies</span>
            </button>
          </div>

          {/* 3-Column Spotlight Grid with Distinct Editorial Proportions */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pt-12 items-start">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                onClick={() => onSelectProject(project)}
                className={`group cursor-pointer flex flex-col space-y-4 ${
                  idx === 0
                    ? 'md:col-span-5'
                    : idx === 1
                    ? 'md:col-span-4'
                    : 'md:col-span-3'
                }`}
              >
                {/* Image Container with Refined Hairline Editorial Frame */}
                <div className={`relative overflow-hidden bg-[#180205] border border-[#F8F1E7]/30 group-hover:border-[#F8F1E7] transition-colors flex items-center justify-center ${
                  idx === 0 ? 'aspect-[4/5]' : idx === 1 ? 'aspect-[3/4]' : 'aspect-[4/5]'
                }`}>
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className={`w-full h-full transition-transform duration-700 group-hover:scale-[1.02] filter contrast-105 ${
                      project.aspectRatio === 'portrait' ? 'object-contain' : 'object-cover'
                    }`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#3D0A10]/20 opacity-60 group-hover:opacity-10 transition-opacity" />

                  {/* Clean unboxed category label */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-[#F8F1E7] bg-[#2A060B]/90 px-3 py-1 font-semibold border-b border-[#F8F1E7]/50">
                      {project.category === 'video' ? 'Cinema & Video' : 'Design & Identity'}
                    </span>
                  </div>

                  {/* Play / Expand Indicator */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 bg-[#F8F1E7] text-[#2A060B] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                    {project.videoUrl ? <Play className="w-3.5 h-3.5 fill-current ml-0.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </div>
                </div>

                {/* Meta details */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#F8F1E7] uppercase tracking-widest font-medium">
                    <span>{project.client}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#FDF9F0] group-hover:text-[#FCF9F5] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#FDF9F0]/80 font-light line-clamp-2 leading-relaxed">
                    {project.tagline}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Full Archive Banner Callout */}
          <div className="mt-20 p-8 sm:p-12 border-t border-b border-[#F8F1E7]/30 bg-[#2A060B]/40 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#F8F1E7] block mb-2 font-semibold">
                The Complete Studio Monograph
              </span>
              <h4 className="font-serif text-2xl sm:text-3xl text-[#FDF9F0]">
                Explore our full archive of viral reels, brand videos & bespoke identities.
              </h4>
            </div>
            <button
              onClick={() => onNavigateTo('works')}
              className="px-8 py-3.5 bg-[#F8F1E7] text-[#2A060B] text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#FCF9F5] transition-all shrink-0 cursor-pointer active:scale-95"
            >
              Enter Works Gallery
            </button>
          </div>
        </div>
      </section>

      {/* 4. Disciplines & Services Teaser */}
      <section className="py-24 md:py-32 px-6 md:px-12 border-b border-[#F8F1E7]/20 bg-[#2A060B]/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#F8F1E7]/25">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-[1px] bg-[#F8F1E7]/60" />
                <span className="text-[11px] uppercase tracking-[0.35em] text-[#F8F1E7] font-mono font-bold block">
                  Expertise & Core Formats
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#FDF9F0] font-normal tracking-tight text-balance">
                Studio Disciplines
              </h2>
            </div>

            <button
              onClick={() => onNavigateTo('services')}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-[#F8F1E7]/50 text-xs uppercase tracking-[0.2em] font-semibold text-[#F8F1E7] hover:bg-[#F8F1E7] hover:text-[#2A060B] transition-all duration-300 cursor-pointer group shadow-sm active:scale-95"
            >
              <span>Explore All Services & Pricing</span>
            </button>
          </div>

          {/* Distinct Architectural Ledger Layout for Disciplines */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 items-start">
            {/* Discipline 1: Video Editing (Column 1 - 6 cols) */}
            <div className="lg:col-span-6 space-y-8 border-t border-[#F8F1E7]/40 pt-8">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#F8F1E7] font-bold">
                  01. Cinema & Video Editing
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#F8F1E7]/70">
                  Post-Production · Direction
                </span>
              </div>

              <div>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#FDF9F0] leading-tight">
                  Rhythmic pacing & 35mm grain calibration.
                </h3>
                <p className="mt-4 text-sm text-[#FDF9F0]/85 font-light leading-relaxed">
                  High-speed editorial cutting, analog 35mm grain emulation, classical Indian & orchestral sound design, and color grading tailored for luxury, fashion, and royal heritage institutions.
                </p>
              </div>

              <div className="border-t border-[#F8F1E7]/15 pt-6">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-[#FDF9F0]/90">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#F8F1E7]" />
                    <span>Social Media Reels</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#F8F1E7]" />
                    <span>Brand Commercials</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#F8F1E7]" />
                    <span>Video Ads & Invites</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#F8F1E7]" />
                    <span>YouTube Feature Cuts</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigateTo('services')}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-bold text-[#F8F1E7] hover:text-[#FCF9F5] underline underline-offset-8 decoration-[#F8F1E7]/40 hover:decoration-[#F8F1E7] transition-all cursor-pointer"
                >
                  <span>View Video Capabilities</span>
                </button>
              </div>
            </div>

            {/* Discipline 2: Graphic Architecture (Column 2 - 6 cols) */}
            <div className="lg:col-span-6 space-y-8 border-t border-[#F8F1E7]/40 pt-8 lg:mt-8">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.3em] font-mono text-[#F8F1E7] font-bold">
                  02. Graphic Architecture & Identity
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#F8F1E7]/70">
                  Brand Systems · Print
                </span>
              </div>

              <div>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#FDF9F0] leading-tight">
                  Tactile print systems & luxury marks.
                </h3>
                <p className="mt-4 text-sm text-[#FDF9F0]/85 font-light leading-relaxed">
                  Bespoke typographic identities, luxury 24K gold foil debossed packaging dielines, physical royal invitations, posters, and museum-grade brand monographs.
                </p>
              </div>

              <div className="border-t border-[#F8F1E7]/15 pt-6">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-[#FDF9F0]/90">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#F8F1E7]" />
                    <span>Logo & Brand Identity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#F8F1E7]" />
                    <span>Packaging & Menus</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#F8F1E7]" />
                    <span>Posters & Collateral</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#F8F1E7]" />
                    <span>Marketing Collaterals</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigateTo('services')}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-bold text-[#F8F1E7] hover:text-[#FCF9F5] underline underline-offset-8 decoration-[#F8F1E7]/40 hover:decoration-[#F8F1E7] transition-all cursor-pointer"
                >
                  <span>View Design Capabilities</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
