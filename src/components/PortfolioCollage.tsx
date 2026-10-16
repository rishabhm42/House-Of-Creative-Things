import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Play, Eye, Sparkles, Filter, BookOpen, ListFilter, Film, Layers, Check } from 'lucide-react';
import { ProjectItem } from '../types';
import { portfolioProjects } from '../data/portfolioData';
import { RoyalJharokhaArch, GoldMandalaCorner, GoldDivider, MarigoldCrest } from './IndianMotif';

interface PortfolioCollageProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const PortfolioCollage: React.FC<PortfolioCollageProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'video' | 'design'>('all');
  const [viewMode, setViewMode] = useState<'magazine' | 'index'>('magazine');
  const [hoveredIndexProject, setHoveredIndexProject] = useState<ProjectItem>(portfolioProjects[0]);

  const filteredProjects = portfolioProjects.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter || item.category === 'both';
  });

  return (
    <section id="portfolio" className="py-24 md:py-36 bg-[#2A060B] text-[#FDF9F0] relative selection:bg-[#F8F1E7] selection:text-[#2A060B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header with Large Editorial Typography & Interactive Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-[#F8F1E7]/25">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#F8F1E7]" />
              <span className="text-[11px] uppercase tracking-[0.35em] text-[#F8F1E7] font-bold font-mono">
                Volume XXV · Studio Monograph
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#FDF9F0] font-normal leading-[1.05] text-balance">
              Curated Works <br />
              <span className="italic font-serif gold-gradient-text">& Cinematic Folios</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* View Mode Toggle: Magazine Spreads vs Editorial Index */}
            <div className="flex items-center bg-[#1E0407] border border-[#F8F1E7]/30 p-1">
              <button
                id="portfolio-view-magazine"
                onClick={() => setViewMode('magazine')}
                className={`px-5 py-2 text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer ${
                  viewMode === 'magazine'
                    ? 'bg-[#F8F1E7] text-[#2A060B] font-bold'
                    : 'text-[#F8F1E7]/70 hover:text-white'
                }`}
              >
                <span>Magazine Spreads</span>
              </button>
              <button
                id="portfolio-view-index"
                onClick={() => setViewMode('index')}
                className={`px-5 py-2 text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer ${
                  viewMode === 'index'
                    ? 'bg-[#F8F1E7] text-[#2A060B] font-bold'
                    : 'text-[#F8F1E7]/70 hover:text-white'
                }`}
              >
                <span>Editorial Index</span>
              </button>
            </div>

            {/* Category Filter Navigation */}
            <div className="flex flex-nowrap items-center bg-[#1E0407] border border-[#F8F1E7]/30 p-1 shrink-0 overflow-x-auto">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 text-[11px] uppercase tracking-[0.2em] transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  activeFilter === 'all'
                    ? 'bg-[#F8F1E7] text-[#2A060B] font-bold'
                    : 'text-[#F8F1E7]/70 hover:text-white'
                }`}
              >
                All ({portfolioProjects.length})
              </button>
              <button
                onClick={() => setActiveFilter('video')}
                className={`px-4 py-2 text-[11px] uppercase tracking-[0.2em] transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  activeFilter === 'video'
                    ? 'bg-[#F8F1E7] text-[#2A060B] font-bold'
                    : 'text-[#F8F1E7]/70 hover:text-white'
                }`}
              >
                Video ({portfolioProjects.filter((p) => p.category === 'video' || p.category === 'both').length})
              </button>
              <button
                onClick={() => setActiveFilter('design')}
                className={`px-4 py-2 text-[11px] uppercase tracking-[0.2em] transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  activeFilter === 'design'
                    ? 'bg-[#F8F1E7] text-[#2A060B] font-bold'
                    : 'text-[#F8F1E7]/70 hover:text-white'
                }`}
              >
                Design ({portfolioProjects.filter((p) => p.category === 'design' || p.category === 'both').length})
              </button>
            </div>
          </div>
        </div>

        {/* VIEW MODE 1: Asymmetrical High-End Editorial Magazine Spreads */}
        {viewMode === 'magazine' && (
          <div className="mt-16 space-y-28 md:space-y-40">
            {/* SPREAD 01: Monumental Artwork Anchor + Rich Integrated Text Column */}
            {filteredProjects[0] && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center border-b border-[#F8F1E7]/25 pb-24 md:pb-32">
                {/* Left Column: Monumental Image with pristine framing and zero cropping */}
                <div className="lg:col-span-7 relative">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.8 }}
                    onClick={() => onSelectProject(filteredProjects[0])}
                    className="group cursor-pointer relative overflow-hidden border-2 border-[#F8F1E7]/40 bg-[#1E0407] shadow-2xl rounded-xs"
                  >
                    <div className={`relative overflow-hidden flex items-center justify-center bg-[#180205] ${
                      filteredProjects[0].aspectRatio === 'portrait'
                        ? 'aspect-[3/4] sm:aspect-[896/1200] max-h-[780px] w-full'
                        : 'aspect-[16/10] w-full'
                    }`}>
                      <img
                        src={filteredProjects[0].coverImage}
                        alt={filteredProjects[0].title}
                        className={`w-full h-full filter contrast-105 transition-transform duration-700 group-hover:scale-[1.01] ${
                          filteredProjects[0].aspectRatio === 'portrait' ? 'object-contain' : 'object-cover'
                        }`}
                      />
                      <div className="absolute inset-0 bg-[#2A060B]/10 group-hover:bg-[#2A060B]/0 transition-colors duration-500 pointer-events-none" />
                      
                      {/* Meta Badge */}
                      <div className="absolute top-4 left-4 bg-[#2A060B]/90 backdrop-blur-xs px-3.5 py-1 text-[10px] uppercase tracking-[0.25em] text-[#F8F1E7] border border-[#F8F1E7]/40 font-semibold font-mono">
                        {filteredProjects[0].category === 'video' ? '35mm Film Scan // 4K' : 'Visual Identity'}
                      </div>

                      {filteredProjects[0].videoUrl && (
                        <div className="absolute bottom-5 right-5 w-12 h-12 rounded-full bg-gradient-to-r from-[#F8F1E7] via-[#FCF9F5] to-[#E8DCCB] text-[#2A060B] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                          <Play className="w-4 h-4 ml-0.5 fill-current" />
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* Right Column: Integrated Narrative & Editorial Storytelling */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center justify-between border-b border-[#F8F1E7]/25 pb-3 mb-4">
                      <span className="text-[11px] uppercase tracking-[0.3em] text-[#F8F1E7] font-mono font-bold">
                        Plate No. 01 • {filteredProjects[0].year}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.25em] bg-[#F8F1E7]/15 text-[#F8F1E7] px-3 py-1 rounded-full border border-[#F8F1E7]/35 font-medium">
                        {filteredProjects[0].subcategory}
                      </span>
                    </div>

                    <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FDF9F0] font-normal leading-tight">
                      {filteredProjects[0].title}
                    </h3>
                    <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[#F8F1E7] font-medium font-mono">
                      Client: {filteredProjects[0].client}
                    </p>

                    <blockquote className="mt-6 border-l-2 border-[#F8F1E7] pl-4 font-serif italic text-lg sm:text-xl text-[#FCF9F5] leading-snug">
                      "{filteredProjects[0].tagline}"
                    </blockquote>

                    {/* Integrated Project Text Description */}
                    <div className="mt-6 text-sm text-[#FDF9F0]/85 leading-relaxed font-light">
                      <p>{filteredProjects[0].synopsis}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectProject(filteredProjects[0])}
                    className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#F8F1E7] text-[#2A060B] text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#FCF9F5] transition-all w-fit cursor-pointer active:scale-95"
                  >
                    <span>Read Full Monograph</span>
                  </button>
                </div>
              </div>
            )}

            {/* SPREAD 02: Reversed Asymmetry with Aspect-Adaptive Framing */}
            {filteredProjects[1] && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center border-b border-[#F8F1E7]/25 pb-24 md:pb-32">
                {/* Left Column: Integrated Text Description */}
                <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center justify-between border-b border-[#F8F1E7]/25 pb-3 mb-4">
                      <span className="text-[11px] uppercase tracking-[0.3em] text-[#F8F1E7] font-mono font-bold">
                        Plate No. 02 · {filteredProjects[1].year}
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.2em] text-[#F8F1E7] font-mono font-medium">
                        {filteredProjects[1].subcategory}
                      </span>
                    </div>

                    <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FDF9F0] font-normal leading-tight">
                      {filteredProjects[1].title}
                    </h3>
                    <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[#F8F1E7] font-medium font-mono">
                      Client: {filteredProjects[1].client}
                    </p>

                    <blockquote className="mt-6 border-l-2 border-[#F8F1E7] pl-4 font-serif italic text-lg sm:text-xl text-[#FCF9F5] leading-snug">
                      "{filteredProjects[1].tagline}"
                    </blockquote>

                    {/* Integrated Project Text Description */}
                    <div className="mt-6 text-sm text-[#FDF9F0]/85 leading-relaxed font-light">
                      <p>{filteredProjects[1].synopsis}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectProject(filteredProjects[1])}
                    className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#F8F1E7] text-[#2A060B] text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#FCF9F5] transition-all w-fit cursor-pointer active:scale-95"
                  >
                    <span>Inspect Case Study</span>
                  </button>
                </div>

                {/* Right Column: Editorial Master Artwork */}
                <div className="lg:col-span-7 order-1 lg:order-2">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.8 }}
                    onClick={() => onSelectProject(filteredProjects[1])}
                    className="group cursor-pointer relative overflow-hidden border-2 border-[#F8F1E7]/40 bg-[#1E0407] shadow-2xl rounded-xs"
                  >
                    <div className={`relative overflow-hidden flex items-center justify-center bg-[#180205] ${
                      filteredProjects[1].aspectRatio === 'portrait'
                        ? 'aspect-[3/4] sm:aspect-[896/1200] max-h-[780px] w-full'
                        : 'aspect-[16/10] w-full'
                    }`}>
                      <img
                        src={filteredProjects[1].coverImage}
                        alt={filteredProjects[1].title}
                        className={`w-full h-full filter contrast-105 transition-transform duration-700 group-hover:scale-[1.01] ${
                          filteredProjects[1].aspectRatio === 'portrait' ? 'object-contain' : 'object-cover'
                        }`}
                      />
                      <div className="absolute inset-0 bg-[#2A060B]/10 group-hover:bg-[#2A060B]/0 transition-colors duration-500 pointer-events-none" />
                      
                      <div className="absolute top-4 left-4 bg-[#2A060B]/90 backdrop-blur-xs px-3.5 py-1 text-[10px] uppercase tracking-[0.25em] text-[#F8F1E7] border border-[#F8F1E7]/40 font-semibold font-mono">
                        {filteredProjects[1].category === 'video' ? 'Cinema Reel' : 'Identity Folio'}
                      </div>

                      <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-xs px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-[#F8F1E7] font-mono">
                        Plate II // 02
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            )}

            {/* SPREAD 03 FOR DESIGN: Plate No. 03 (Bunelle Patisserie) */}
            {activeFilter === 'design' && filteredProjects[2] && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center border-b border-[#F8F1E7]/25 pb-24 md:pb-32">
                {/* Left Column: Monumental Artwork */}
                <div className="lg:col-span-7 relative">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.8 }}
                    onClick={() => onSelectProject(filteredProjects[2])}
                    className="group cursor-pointer relative overflow-hidden border-2 border-[#F8F1E7]/40 bg-[#1E0407] shadow-2xl rounded-xs"
                  >
                    <div className="relative overflow-hidden flex items-center justify-center bg-[#180205] aspect-[3/4] sm:aspect-[896/1200] max-h-[780px] w-full">
                      <img
                        src={filteredProjects[2].coverImage}
                        alt={filteredProjects[2].title}
                        className="w-full h-full object-contain filter contrast-105 transition-transform duration-700 group-hover:scale-[1.01]"
                      />
                      <div className="absolute inset-0 bg-[#2A060B]/10 group-hover:bg-[#2A060B]/0 transition-colors duration-500 pointer-events-none" />
                      
                      <div className="absolute top-4 left-4 bg-[#2A060B]/90 backdrop-blur-xs px-3.5 py-1 text-[10px] uppercase tracking-[0.25em] text-[#F8F1E7] border border-[#F8F1E7]/40 font-semibold font-mono">
                        Packaging Suite
                      </div>

                      <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-xs px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-[#F8F1E7] font-mono">
                        Plate III // 03
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Right Column: Integrated Narrative */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center justify-between border-b border-[#F8F1E7]/25 pb-3 mb-4">
                      <span className="text-[11px] uppercase tracking-[0.3em] text-[#F8F1E7] font-mono font-bold">
                        Plate No. 03 · {filteredProjects[2].year}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.25em] bg-[#F8F1E7]/15 text-[#F8F1E7] px-3 py-1 rounded-full border border-[#F8F1E7]/35 font-medium">
                        {filteredProjects[2].subcategory}
                      </span>
                    </div>

                    <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FDF9F0] font-normal leading-tight">
                      {filteredProjects[2].title}
                    </h3>
                    <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[#F8F1E7] font-medium font-mono">
                      Client: {filteredProjects[2].client}
                    </p>

                    <blockquote className="mt-6 border-l-2 border-[#F8F1E7] pl-4 font-serif italic text-lg sm:text-xl text-[#FCF9F5] leading-snug">
                      "{filteredProjects[2].tagline}"
                    </blockquote>

                    <div className="mt-6 text-sm text-[#FDF9F0]/85 leading-relaxed font-light">
                      <p>{filteredProjects[2].synopsis}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectProject(filteredProjects[2])}
                    className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#F8F1E7] text-[#2A060B] text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#FCF9F5] transition-all w-fit cursor-pointer active:scale-95"
                  >
                    <span>Read Full Monograph</span>
                  </button>
                </div>
              </div>
            )}

            {/* SPREAD 03 FOR CINEMA/ALL: Full-Bleed Panoramic 2.39:1 Cinematic Feature Spread */}
            {activeFilter !== 'design' && (filteredProjects.find(p => p.aspectRatio === 'cinematic') || filteredProjects.find(p => p.category === 'video')) && (() => {
              const cinemaProject = filteredProjects.find(p => p.aspectRatio === 'cinematic') || filteredProjects.find(p => p.category === 'video')!;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.9 }}
                  className="relative overflow-hidden border-2 border-[#F8F1E7]/50 bg-black/50 shadow-2xl group rounded-xs"
                >
                  <div className="relative aspect-[21/9] min-h-[380px] sm:min-h-[440px] overflow-hidden">
                    <img
                      src={cinemaProject.coverImage}
                      alt={cinemaProject.title}
                      className="w-full h-full object-cover filter contrast-115 group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

                    {/* Asymmetrical Floating Editorial Text Card */}
                    <div className="absolute inset-0 p-6 sm:p-10 md:p-14 flex flex-col justify-between text-[#FDF9F0]">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <span className="px-3.5 py-1 bg-gradient-to-r from-[#F8F1E7] to-[#E8DCCB] text-[#2A060B] text-[10px] uppercase tracking-[0.3em] font-bold">
                            Cinema Master 2.39:1
                          </span>
                          <span className="text-xs font-mono tracking-widest text-[#F8F1E7] hidden sm:inline">
                            ARRI ALEXA 4K SENSOR
                          </span>
                        </div>

                        <span className="text-xs font-mono text-[#F8F1E7]">
                          [ REC • 24 FPS ]
                        </span>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                        <div className="lg:col-span-8">
                          <span className="text-xs uppercase tracking-[0.3em] text-[#F8F1E7] block mb-1 font-mono">
                            {cinemaProject.client} • {cinemaProject.year}
                          </span>
                          <h3 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#FDF9F0] font-normal leading-tight">
                            {cinemaProject.title}
                          </h3>
                          <p className="mt-3 text-sm text-[#FDF9F0]/90 font-light max-w-2xl leading-relaxed">
                            {cinemaProject.synopsis}
                          </p>

                        </div>

                        <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3">
                          <button
                            onClick={() => onSelectProject(cinemaProject)}
                            className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#F8F1E7] via-[#FCF9F5] to-[#E8DCCB] text-[#2A060B] text-xs uppercase tracking-[0.2em] font-bold hover:shadow-xl hover:shadow-[#F8F1E7]/30 transition-all shadow-xl flex items-center gap-2 cursor-pointer"
                          >
                            <Play className="w-3.5 h-3.5 fill-current" />
                            <span>Watch Feature Reel</span>
                          </button>
                          <span className="text-[10px] uppercase tracking-[0.2em] text-[#F8F1E7]/80 font-mono">
                            {cinemaProject.tagline}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })()}

            {/* SPREAD 04: Editorial Archive Folio (Shown on ALL/VIDEO for remaining items) */}
            {activeFilter !== 'design' && filteredProjects.slice(2).length > 0 && (
              <div className="pt-6">
                <div className="flex items-center gap-3 mb-10 pb-4 border-b border-[#F8F1E7]/25">
                  <span className="w-6 h-[1px] bg-[#F8F1E7]" />
                  <span className="text-xs uppercase tracking-[0.35em] text-[#F8F1E7] font-bold font-mono">
                    Plate Series III // Form & Heritage Architecture
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                  {filteredProjects.slice(2).filter(p => p.id !== 'solitude-24fps').map((project, idx) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.8, delay: idx * 0.15 }}
                      onClick={() => onSelectProject(project)}
                      className={`group cursor-pointer relative flex flex-col justify-between border-2 border-[#F8F1E7]/30 bg-[#1E0407]/70 rounded-xs shadow-xl ${
                        idx === 1 ? 'lg:-translate-y-8' : idx === 2 ? 'lg:translate-y-6' : ''
                      }`}
                    >
                      <div>
                        {/* Asymmetrical Image Container with exact containment */}
                        <div className={`relative overflow-hidden border-b-2 border-[#F8F1E7]/30 bg-[#150204] flex items-center justify-center ${
                          project.aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-[16/10]'
                        }`}>
                          <img
                            src={project.coverImage}
                            alt={project.title}
                            className={`w-full h-full filter contrast-105 transition-transform duration-700 group-hover:scale-[1.01] ${
                              project.aspectRatio === 'portrait' ? 'object-contain' : 'object-cover'
                            }`}
                          />
                          <div className="absolute inset-0 bg-[#2A060B]/10 group-hover:bg-[#2A060B]/0 transition-colors pointer-events-none" />

                          <div className="absolute top-3 left-3 bg-[#2A060B]/90 px-3 py-1 text-[9px] uppercase tracking-[0.25em] text-[#F8F1E7] border border-[#F8F1E7]/40 font-semibold font-mono">
                            {project.category === 'video' ? 'Video' : 'Design'}
                          </div>
                        </div>

                        {/* Integrated Text Description */}
                        <div className="p-6 space-y-4">
                          <div className="flex items-center justify-between text-xs text-[#F8F1E7] font-mono">
                            <span>{project.subcategory}</span>
                            <span>{project.year}</span>
                          </div>

                          <h4 className="font-serif text-2xl text-[#FDF9F0] group-hover:text-[#FCF9F5] transition-colors">
                            {project.title}
                          </h4>

                          <p className="text-xs uppercase tracking-[0.2em] text-[#F8F1E7]/80 font-mono">
                            {project.client}
                          </p>

                          <p className="text-xs text-[#FDF9F0]/80 leading-relaxed font-light line-clamp-3">
                            {project.synopsis}
                          </p>

                        </div>
                      </div>

                      <div className="p-6 pt-0 flex items-center justify-between border-t border-[#F8F1E7]/20 mt-4">
                        <span className="text-[10px] uppercase tracking-[0.25em] text-[#F8F1E7] font-bold group-hover:text-white font-mono">
                          Open Project Folio
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* VIEW MODE 2: Editorial Index & Interactive Directory */}
        {viewMode === 'index' && (
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Interactive Table of Contents List */}
            <div className="lg:col-span-7 divide-y divide-[#F8F1E7]/20 border-y border-[#F8F1E7]/25">
              {filteredProjects.map((project, idx) => {
                const isSelected = hoveredIndexProject.id === project.id;
                return (
                  <div
                    key={project.id}
                    onMouseEnter={() => setHoveredIndexProject(project)}
                    onClick={() => onSelectProject(project)}
                    className={`py-6 px-4 transition-all duration-300 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                      isSelected
                        ? 'bg-[#F8F1E7]/15 pl-6 border-l-2 border-[#F8F1E7]'
                        : 'hover:bg-[#F8F1E7]/5'
                    }`}
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-[#F8F1E7] font-bold">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h4 className="font-serif text-2xl sm:text-3xl text-[#FDF9F0]">
                          {project.title}
                        </h4>
                        <div className="flex items-center gap-3 mt-1 text-xs text-[#FDF9F0]/80 font-light">
                          <span>{project.client}</span>
                          <span>•</span>
                          <span className="italic text-[#F8F1E7]">{project.subcategory}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono text-[#F8F1E7]">
                        {project.year}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Sticky Split-Screen Preview with aspect adaptation */}
            <div className="lg:col-span-5 sticky top-32 border-2 border-[#F8F1E7]/50 bg-[#1E0407]/90 p-6 shadow-2xl rounded-xs">
              <div className="relative">
                {/* Large Preview Image */}
                <div className={`relative overflow-hidden border border-[#F8F1E7]/40 bg-[#150204] flex items-center justify-center ${
                  hoveredIndexProject.aspectRatio === 'portrait' ? 'aspect-[3/4] max-h-[520px]' : 'aspect-[16/10]'
                }`}>
                  <img
                    src={hoveredIndexProject.coverImage}
                    alt={hoveredIndexProject.title}
                    className={`w-full h-full filter contrast-110 ${
                      hoveredIndexProject.aspectRatio === 'portrait' ? 'object-contain' : 'object-cover'
                    }`}
                  />
                  <div className="absolute top-2 left-2 bg-[#2A060B] border border-[#F8F1E7]/40 px-2.5 py-0.5 text-[9px] uppercase tracking-[0.2em] font-bold text-[#F8F1E7] font-mono">
                    {hoveredIndexProject.category === 'video' ? 'Video Edit' : 'Design System'}
                  </div>
                </div>
              </div>

              {/* Integrated Text Description */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center justify-between text-xs text-[#F8F1E7] font-mono">
                  <span>{hoveredIndexProject.subcategory}</span>
                  <span>{hoveredIndexProject.year}</span>
                </div>
                <h3 className="font-serif text-3xl text-[#FDF9F0]">
                  {hoveredIndexProject.title}
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#F8F1E7]/80 font-mono">
                  Client: {hoveredIndexProject.client}
                </p>
                <p className="font-serif italic text-sm text-[#FCF9F5] pt-1">
                  "{hoveredIndexProject.tagline}"
                </p>
                <p className="text-xs text-[#FDF9F0]/85 leading-relaxed font-light pt-2">
                  {hoveredIndexProject.synopsis}
                </p>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    onClick={() => onSelectProject(hoveredIndexProject)}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-[#F8F1E7] via-[#FCF9F5] to-[#E8DCCB] text-[#2A060B] text-xs uppercase tracking-[0.2em] font-bold hover:shadow-xl hover:shadow-[#F8F1E7]/30 transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>Read Monograph</span>
                  </button>
                  <span className="text-[10px] font-mono text-[#F8F1E7]">
                    {hoveredIndexProject.deliverables.length} Deliverables
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
