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
      <section className="py-20 md:py-28 px-6 md:px-12 border-b border-[#D4AF37]/20 bg-[#2A060B]/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-2">
                <MarigoldCrest className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37] font-mono font-bold block">
                  Atelier Manifesto // 01
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#FDF9F0] font-normal leading-tight">
                Crafting visual tension between Indian heritage & modern rhythm.
              </h2>
              <div className="pt-2">
                <button
                  onClick={() => onNavigateTo('about')}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D4AF37] hover:text-[#FFF0CA] cursor-pointer font-mono group"
                >
                  <span>Explore Atelier Ethos</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 text-[#FDF9F0]/85 text-sm font-light leading-relaxed">
              <p>
                <strong className="text-[#FFF0CA] font-medium font-serif">HOUSE OF CREATIVE THINGS (HOCT)</strong> is an independent creative studio dedicated to refined video editing, royal cinematography, viral reels, and gilded brand design systems. Inspired by classical Indian aesthetics—from the grand jharokhas of Rajasthan to ancient Varanasi zari weaves—we avoid disposable digital noise in favor of tactile royal permanence.
              </p>
              <p>
                Every motion timeline is paced like music; every brand identity is engineered with the golden ratio. Whether cutting 4K high-fashion lookbooks for international luxury houses or drafting 24K gold foil monograms and heirloom packaging, we craft work that commands undivided reverence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Works Preview */}
      <section className="py-24 px-6 md:px-12 border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header with Direct Page Link */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#D4AF37]/25">
            <div>
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37] font-mono font-bold block mb-2">
                Curated Selection // Spotlight Editions
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl text-[#FDF9F0] font-normal tracking-tight">
                Selected Works
              </h2>
            </div>

            <button
              onClick={() => onNavigateTo('works')}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#D4AF37]/50 text-xs uppercase tracking-[0.2em] font-semibold text-[#D4AF37] hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#AA820A] hover:text-[#2A060B] transition-all duration-300 cursor-pointer group shadow-sm"
            >
              <span>View All 8 Case Studies</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* 3-Column Spotlight Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer flex flex-col space-y-4"
              >
                {/* Image Container with Gold Editorial Frame */}
                <div className="relative aspect-[4/5] overflow-hidden bg-black/40 border border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-colors shadow-xl">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#3D0A10]/30 opacity-60 group-hover:opacity-10 transition-opacity" />

                  {/* Golden top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-[9px] uppercase tracking-[0.25em] font-mono bg-[#2A060B]/90 text-[#FDF9F0] border border-[#D4AF37]/40 shadow-sm">
                      {project.category === 'video' ? 'Cinema & Video' : 'Design & Identity'}
                    </span>
                  </div>

                  {/* Play / Expand Indicator */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA820A] text-[#2A060B] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-xl">
                    {project.videoUrl ? <Play className="w-4 h-4 fill-current ml-0.5" /> : <Eye className="w-4 h-4" />}
                  </div>
                </div>

                {/* Meta details */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#D4AF37] uppercase tracking-widest">
                    <span>{project.client}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#FDF9F0] group-hover:text-[#FFF0CA] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#FDF9F0]/75 font-light line-clamp-2 leading-relaxed pt-1">
                    {project.tagline}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Full Archive Banner Callout */}
          <div className="mt-14 p-8 border border-[#D4AF37]/35 bg-[#2A060B]/70 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 w-32 h-32 opacity-10 pointer-events-none">
              <RoyalJharokhaArch className="w-full h-full text-[#D4AF37]" />
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#D4AF37] block mb-1">
                The Complete Royal Monograph
              </span>
              <h4 className="font-serif text-2xl text-[#FDF9F0]">
                Explore our full archive of viral reels, brand videos & gilded identities.
              </h4>
            </div>
            <button
              onClick={() => onNavigateTo('works')}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F4E0A5] to-[#AA820A] text-[#2A060B] text-xs uppercase tracking-[0.2em] font-bold hover:shadow-lg hover:shadow-[#D4AF37]/25 transition-all shrink-0 cursor-pointer"
            >
              Enter Works Gallery →
            </button>
          </div>
        </div>
      </section>

      {/* 4. Disciplines & Services Teaser */}
      <section className="py-24 px-6 md:px-12 border-b border-[#D4AF37]/20 bg-[#2A060B]/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#D4AF37]/25">
            <div>
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37] font-mono font-bold block mb-2">
                Expertise & Formats
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl text-[#FDF9F0] font-normal tracking-tight">
                Studio Disciplines
              </h2>
            </div>

            <button
              onClick={() => onNavigateTo('services')}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#D4AF37]/50 text-xs uppercase tracking-[0.2em] font-semibold text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#2A060B] transition-all duration-300 cursor-pointer group"
            >
              <span>Explore All Services & Pricing</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
            {/* Discipline 1: Video Editing */}
            <div className="border border-[#D4AF37]/25 p-8 sm:p-10 bg-[#1E0407]/60 space-y-6 flex flex-col justify-between shadow-xl">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full border border-[#D4AF37]/60 flex items-center justify-center text-[#D4AF37] bg-[#2A060B]">
                  <Film className="w-5 h-5" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#D4AF37] block">
                  Discipline // 01
                </span>
                <h3 className="font-serif text-3xl text-[#FDF9F0]">
                  Cinema & Video Editing
                </h3>
                <p className="text-xs text-[#FDF9F0]/80 font-light leading-relaxed">
                  High-speed editorial cutting, analog 35mm grain emulation, classical Indian & orchestral sound design, and color grading tailored for luxury, fashion, and royal heritage institutions.
                </p>
                <ul className="space-y-2.5 pt-2 text-xs font-mono text-[#FDF9F0]/85">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span>Viral Social Media Reels & TikTok Sequences</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span>Brand Films & Documentary Short-Form</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span>Animated Digital Invitations & Royal Save-the-Dates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span>YouTube Video Editing & Long-form Narrative</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => onNavigateTo('services')}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-[#D4AF37] hover:text-[#FFF0CA] pt-4 cursor-pointer"
              >
                <span>View Video Capabilities</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Discipline 2: Graphic Architecture */}
            <div className="border border-[#D4AF37]/25 p-8 sm:p-10 bg-[#1E0407]/60 space-y-6 flex flex-col justify-between shadow-xl">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full border border-[#D4AF37]/60 flex items-center justify-center text-[#D4AF37] bg-[#2A060B]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#D4AF37] block">
                  Discipline // 02
                </span>
                <h3 className="font-serif text-3xl text-[#FDF9F0]">
                  Graphic Architecture & Identity
                </h3>
                <p className="text-xs text-[#FDF9F0]/80 font-light leading-relaxed">
                  Bespoke typographic identities, luxury 24K gold foil debossed packaging dielines, physical royal invitations, posters, and museum-grade brand monographs.
                </p>
                <ul className="space-y-2.5 pt-2 text-xs font-mono text-[#FDF9F0]/85">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span>Logo & Monogram Design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span>Holistic Brand Guidelines & Systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span>Apothecary & Heirloom Vessel Packaging Dielines</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span>Editorial Menus, Stationery & Royal Collaterals</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => onNavigateTo('services')}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-[#D4AF37] hover:text-[#FFF0CA] pt-4 cursor-pointer"
              >
                <span>View Design Capabilities</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Cinema Reel Teaser Banner */}
      <section className="py-20 px-6 md:px-12 border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto">
          <div className="relative aspect-[21/9] sm:aspect-[2.39/1] overflow-hidden bg-black/60 border-2 border-[#D4AF37]/40 flex items-center justify-center p-8 group shadow-2xl">
            {/* Background Atmosphere */}
            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1600&q=85"
              alt="Cinema Reel Backdrop"
              className="absolute inset-0 w-full h-full object-cover filter contrast-125 opacity-30 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-[#2A060B]/70" />

            {/* Center Content */}
            <div className="relative z-10 text-center max-w-xl space-y-4">
              <span className="text-[10px] uppercase tracking-[0.4em] font-mono text-[#D4AF37] block">
                Official Screening Room
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FDF9F0]">
                2025 Studio Cinema Reel
              </h3>
              <p className="text-xs text-[#FDF9F0]/85 font-light">
                A 90-second montage of deliberate cuts, anamorphic lenses, and acoustic Indian sitar soundscapes.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigateTo('showreel')}
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F4E0A5] to-[#AA820A] text-[#2A060B] text-xs uppercase tracking-[0.25em] font-bold hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-all inline-flex items-center gap-3 cursor-pointer shadow-lg"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Enter Cinema Reel</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Quick Invitation Section */}
      <section className="py-20 px-6 md:px-12 bg-[#2A060B]/80">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex justify-center">
            <HoctLogo className="h-10 w-auto" />
          </div>
          <GoldDivider className="max-w-md mx-auto my-3" />
          <h3 className="font-serif text-3xl sm:text-4xl text-[#FDF9F0]">
            Begin a royal collaboration with House of Creative Things.
          </h3>
          <p className="text-sm text-[#FDF9F0]/80 font-light max-w-lg mx-auto leading-relaxed">
            We accept a limited number of video editing and graphic identity commissions per quarter to preserve uncompromised quality.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigateTo('inquire')}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F4E0A5] to-[#AA820A] text-[#2A060B] text-xs uppercase tracking-[0.25em] font-bold hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-all cursor-pointer shadow-lg"
            >
              Initiate Royal Commission
            </button>
            <button
              onClick={() => onNavigateTo('about')}
              className="px-8 py-3.5 rounded-full border border-[#D4AF37]/50 text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-semibold hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors cursor-pointer"
            >
              Read Atelier Ethos
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
