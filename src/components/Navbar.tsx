import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { LogoConfig, ActivePage } from '../types';
import { HoctLogo } from './HoctLogo';

interface NavbarProps {
  currentPage: ActivePage;
  logoConfig: LogoConfig;
  onNavigateTo: (page: ActivePage) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  logoConfig,
  onNavigateTo,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: ActivePage }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Selected Works', page: 'works' },
    { label: 'Services', page: 'services' },
    { label: 'Cinema Reel', page: 'showreel' },
    { label: 'Atelier Ethos', page: 'about' },
    { label: 'Inquire', page: 'inquire' },
  ];

  const handleLinkClick = (page: ActivePage) => {
    onNavigateTo(page);
    setMobileMenuOpen(false);
  };

  const isHoctBrand =
    logoConfig.textBrand?.toLowerCase().includes('hoct') ||
    logoConfig.imageUrl?.includes('hoct') ||
    (!logoConfig.imageUrl && logoConfig.textBrand === 'HOCT');

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#2A060B]/95 backdrop-blur-md py-3.5 border-b border-[#D4AF37]/30 shadow-2xl'
          : 'bg-[#3D0A10]/90 backdrop-blur-sm py-4 md:py-5 border-b border-[#D4AF37]/20'
      }`}
    >
      {/* Top micro gold filigree line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo & Editorial Monogram */}
        <button
          id="nav-brand-logo-btn"
          onClick={() => handleLinkClick('home')}
          className="text-left group flex items-center gap-3 transition-opacity hover:opacity-90 cursor-pointer"
        >
          {isHoctBrand ? (
            <div className="flex items-center gap-2">
              <HoctLogo className="h-9 sm:h-10 w-auto" />
            </div>
          ) : logoConfig.type === 'image' && logoConfig.imageUrl ? (
            <img
              src={logoConfig.imageUrl}
              alt={logoConfig.textBrand}
              className="h-9 w-auto object-contain filter brightness-200"
            />
          ) : (
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full border border-[#D4AF37]/60 flex items-center justify-center font-display text-xs tracking-widest text-[#D4AF37] font-bold group-hover:border-[#F4E0A5] group-hover:bg-[#D4AF37] group-hover:text-[#2A060B] transition-colors">
                H
              </span>
              <div>
                <span className="font-display tracking-[0.25em] text-sm md:text-base font-semibold uppercase text-[#FDF9F0] block leading-none">
                  {logoConfig.textBrand}
                </span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-light block mt-1">
                  {logoConfig.tagline}
                </span>
              </div>
            </div>
          )}
        </button>

        {/* Desktop Navigation Links */}
        <nav
          id="desktop-nav-menu"
          className="hidden lg:flex items-center gap-1.5 text-xs tracking-[0.18em] uppercase font-medium bg-[#1E0407]/60 px-3 py-1.5 rounded-full border border-[#D4AF37]/30 shadow-inner"
        >
          {navLinks.map((link) => {
            const isActive = currentPage === link.page;
            return (
              <button
                key={link.page}
                onClick={() => handleLinkClick(link.page)}
                className={`relative px-4 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#D4AF37] via-[#F4E0A5] to-[#D4AF37] text-[#2A060B] font-bold shadow-md shadow-[#D4AF37]/20'
                    : 'text-[#FDF9F0]/80 hover:text-[#F4E0A5] hover:bg-[#D4AF37]/10'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Utility Controls & Action Pill */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Direct Commission CTA */}
          <button
            id="nav-inquire-cta-btn"
            onClick={() => handleLinkClick('inquire')}
            className={`hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 shadow-md cursor-pointer ${
              currentPage === 'inquire'
                ? 'bg-gradient-to-r from-[#FFF0CA] to-[#D4AF37] text-[#2A060B] ring-2 ring-[#D4AF37]'
                : 'bg-gradient-to-r from-[#D4AF37] to-[#AA820A] text-[#2A060B] hover:from-[#F4E0A5] hover:to-[#D4AF37] hover:shadow-lg hover:shadow-[#D4AF37]/25'
            }`}
          >
            <span>Inquire</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#D4AF37] hover:text-[#FFF0CA] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden bg-[#2A060B] border-b border-[#D4AF37]/30 px-8 py-8 animate-in slide-in-from-top-4 duration-300 shadow-2xl"
        >
          <div className="flex flex-col gap-3 text-sm tracking-[0.25em] uppercase font-medium text-[#FDF9F0]">
            {isHoctBrand && (
              <div className="pb-4 mb-2 border-b border-[#D4AF37]/20">
                <HoctLogo className="h-8 w-auto" showSubtitle={true} />
              </div>
            )}

            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleLinkClick(link.page)}
                  className={`text-left py-3 px-4 rounded-md transition-colors border-b border-[#D4AF37]/15 flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA820A] text-[#2A060B] font-bold'
                      : 'hover:text-[#F4E0A5] hover:bg-[#D4AF37]/10'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#2A060B]" />}
                </button>
              );
            })}

            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  handleLinkClick('inquire');
                }}
                className="w-full text-center py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA820A] text-[#2A060B] text-xs tracking-[0.2em] font-bold cursor-pointer shadow-lg"
              >
                Initiate Royal Commission
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
