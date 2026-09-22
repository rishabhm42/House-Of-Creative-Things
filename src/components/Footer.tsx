import React from 'react';
import { ArrowUp, ArrowUpRight, Instagram, Film, Sparkles } from 'lucide-react';
import { LogoConfig, ActivePage } from '../types';
import { HoctLogo } from './HoctLogo';
import { GoldDivider, RoyalJharokhaArch } from './IndianMotif';

interface FooterProps {
  logoConfig: LogoConfig;
  onNavigateTo: (page: ActivePage) => void;
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  logoConfig,
  onNavigateTo,
  onOpenInquiry,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isHoctBrand =
    logoConfig.textBrand?.toLowerCase().includes('hoct') ||
    logoConfig.imageUrl?.includes('hoct') ||
    (!logoConfig.imageUrl && logoConfig.textBrand === 'HOCT');

  return (
    <footer id="site-footer" className="bg-[#2A060B] text-[#FDF9F0] pt-24 pb-16 relative overflow-hidden border-t-2 border-[#F8F1E7]/30">
      {/* Background Graphic Watermark */}
      <div className="absolute bottom-0 right-0 select-none pointer-events-none opacity-[0.03] font-serif text-[26vw] leading-none whitespace-nowrap text-[#F8F1E7] font-bold tracking-tighter">
        HOCT
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Massive Editorial Invitation Headline */}
        <div className="pb-16 border-b border-[#F8F1E7]/25 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <RoyalJharokhaArch className="w-16 h-6 text-[#F8F1E7]" />
              <span className="text-xs uppercase tracking-[0.35em] text-[#F8F1E7] font-semibold font-mono">
                Studio Commissions
              </span>
            </div>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#FDF9F0] font-normal leading-[0.98]">
              Let’s Construct <br />
              <span className="gold-gradient-text italic font-serif font-medium">The Everlasting.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-4">
            <button
              onClick={onOpenInquiry}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#F8F1E7] via-[#FCF9F5] to-[#E8DCCB] text-[#2A060B] text-xs uppercase tracking-[0.25em] font-bold hover:shadow-xl hover:shadow-[#F8F1E7]/30 transition-all duration-300 shadow-xl flex items-center gap-3 group cursor-pointer"
            >
              <span>Initiate Project Commission</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#F8F1E7] font-mono">
              Creative Director review within 24h
            </span>
          </div>
        </div>

        {/* 4-Column Editorial Directory */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-[#F8F1E7]/20 text-xs">
          {/* Col 1: Studio Monogram & Identity */}
          <div className="space-y-4">
            {isHoctBrand ? (
              <div className="space-y-2">
                <HoctLogo className="h-10 w-auto" showSubtitle={true} />
              </div>
            ) : logoConfig.type === 'image' && logoConfig.imageUrl ? (
              <img
                src={logoConfig.imageUrl}
                alt={logoConfig.textBrand}
                className="h-10 w-auto object-contain filter brightness-200"
              />
            ) : (
              <div>
                <span className="font-display tracking-[0.25em] text-base font-semibold uppercase text-[#FDF9F0] block">
                  {logoConfig.textBrand}
                </span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#F8F1E7] font-light block mt-1 font-mono">
                  {logoConfig.tagline}
                </span>
              </div>
            )}
            <p className="text-[#FDF9F0]/75 font-light leading-relaxed text-xs pt-2">
              HOCT (House of Creative Things) is an independent creative studio uniting timeless aesthetics, precision video editing, and tactile graphic design systems.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#F8F1E7] block mb-4 font-semibold font-mono">
              Pages Directory
            </span>
            <ul className="space-y-2.5 uppercase tracking-[0.15em] text-[#FDF9F0]/80">
              <li>
                <button onClick={() => onNavigateTo('home')} className="hover:text-[#FCF9F5] transition-colors cursor-pointer">
                  Cover / Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('works')} className="hover:text-[#FCF9F5] transition-colors cursor-pointer">
                  Selected Works
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('services')} className="hover:text-[#FCF9F5] transition-colors cursor-pointer">
                  Services Spectrum
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('showreel')} className="hover:text-[#FCF9F5] transition-colors cursor-pointer">
                  Cinema Reel
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('about')} className="hover:text-[#FCF9F5] transition-colors cursor-pointer">
                  Atelier Ethos
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('inquire')} className="hover:text-[#FCF9F5] transition-colors cursor-pointer">
                  Project Commission
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Spectrum */}
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#F8F1E7] block mb-4 font-semibold font-mono">
              Video & Design Focus
            </span>
            <div className="space-y-3">
              <div>
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#F8F1E7]/90 font-mono font-bold block mb-1">
                  Video Editing
                </span>
                <p className="text-[#FDF9F0]/75 text-xs font-light leading-relaxed">
                  Reels, short-form, brand & product videos, ads, animated invites, YouTube & social content.
                </p>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#F8F1E7]/90 font-mono font-bold block mb-1">
                  Graphic Design
                </span>
                <p className="text-[#FDF9F0]/75 text-xs font-light leading-relaxed">
                  Logos, brand identities & guidelines, business cards, brochures, menus, packaging & posters.
                </p>
              </div>
            </div>
          </div>

          {/* Col 4: Studio Coordinates */}
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#F8F1E7] block mb-1 font-semibold font-mono">
              Inquiries & Dispatches
            </span>
            <div className="space-y-1 font-mono text-[#FDF9F0]/80">
              <p>commissions@hoct.studio</p>
              <p>+91 (0141) 256-8800 // +1 (415) 890-4628</p>
            </div>
            <div className="pt-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#F8F1E7] block mb-1 font-mono">
                Atelier Desks
              </span>
              <p className="text-xs text-[#FDF9F0]/80 leading-relaxed font-light">
                Jaipur (Johari Bazaar) · Udaipur · Mumbai (Bandra) · Paris · London
              </p>
            </div>
            <div className="flex items-center gap-3 pt-2 text-[#F8F1E7]">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-[#F8F1E7]/40 flex items-center justify-center hover:border-[#FCF9F5] hover:text-[#FCF9F5] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://vimeo.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-[#F8F1E7]/40 flex items-center justify-center hover:border-[#FCF9F5] hover:text-[#FCF9F5] transition-colors"
                aria-label="Vimeo / Film Portfolio"
              >
                <Film className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Colophon & Return to Top */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-[11px] text-[#FDF9F0]/60 font-mono">
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} HOUSE OF CREATIVE THINGS (HOCT). ALL RIGHTS RESERVED.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#F8F1E7] hover:text-[#FCF9F5] transition-colors group cursor-pointer uppercase tracking-widest text-[10px]"
          >
            <span>Return to Surface</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
};
