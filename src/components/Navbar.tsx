import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { LogoConfig, ActivePage } from '../types';
import { HoctLogo } from './HoctLogo';
import { RunningLeopard } from './RunningLeopard';

interface NavbarProps {
  currentPage: ActivePage;
  logoConfig: LogoConfig;
  onNavigateTo: (page: ActivePage) => void;
  onReplayLoader?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  logoConfig,
  onNavigateTo,
  onReplayLoader,
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
          ? 'bg-[#2A060B]/95 backdrop-blur-md py-2.5 sm:py-3 border-b border-[#F8F1E7]/30 shadow-2xl'
          : 'bg-[#3D0A10]/92 backdrop-blur-sm py-3 sm:py-3.5 border-b border-[#F8F1E7]/20'
      }`}
    >
      {/* Top micro gold filigree line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F8F1E7] to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-4">
        {/* Brand Logo on Left */}
        <div className="flex-1 flex items-center justify-start min-w-0">
          <button
            id="nav-brand-logo-btn"
            onClick={() => handleLinkClick('home')}
            className="text-left group flex items-center gap-3 transition-opacity hover:opacity-90 cursor-pointer"
          >
            {isHoctBrand ? (
              <div className="flex items-center">
                <HoctLogo className="h-10 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]" />
              </div>
            ) : logoConfig.type === 'image' && logoConfig.imageUrl ? (
              <img
                src={logoConfig.imageUrl}
                alt={logoConfig.textBrand}
                className="h-8 sm:h-9 w-auto object-contain filter brightness-200"
              />
            ) : (
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full border border-[#F8F1E7]/60 flex items-center justify-center font-display text-xs tracking-widest text-[#F8F1E7] font-bold group-hover:border-[#FCF9F5] group-hover:bg-[#F8F1E7] group-hover:text-[#2A060B] transition-colors">
                  H
                </span>
                <div>
                  <span className="font-display tracking-[0.25em] text-sm md:text-base font-semibold uppercase text-[#FDF9F0] block leading-none">
                    {logoConfig.textBrand}
                  </span>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#F8F1E7] font-light block mt-1">
                    {logoConfig.tagline}
                  </span>
                </div>
              </div>
            )}
          </button>
        </div>

        {/* Centered Desktop Navigation Links */}
        <div className="hidden lg:flex items-center justify-center flex-shrink-0">
          <nav
            id="desktop-nav-menu"
            className="flex items-center gap-6 text-[11px] xl:text-xs tracking-[0.2em] uppercase font-medium"
          >
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleLinkClick(link.page)}
                  className={`relative py-1.5 transition-colors cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'text-[#F8F1E7] font-semibold border-b border-[#F8F1E7]'
                      : 'text-[#FDF9F0]/70 hover:text-[#FDF9F0]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Utility Controls & Action on Right */}
        <div className="flex-1 flex items-center justify-end gap-3 sm:gap-4">
          {/* Running Leopard Loader Replay Button */}
          {onReplayLoader && (
            <button
              id="nav-replay-loader-btn"
              onClick={onReplayLoader}
              title="Experience Running Leopard Loader"
              className="group hidden sm:inline-flex items-center gap-2 px-3 py-1.5 border border-[#F8F1E7]/30 hover:border-[#F8F1E7] hover:bg-[#F8F1E7]/10 transition-colors text-[10px] xl:text-[11px] uppercase tracking-[0.2em] font-medium text-[#F8F1E7] cursor-pointer"
            >
              <span className="w-5 h-3.5 inline-flex items-center justify-center overflow-hidden">
                <RunningLeopard
                  size="sm"
                  speedMs={80}
                  showDust={false}
                  showSpeedLines={false}
                  showShadow={false}
                  className="w-7 h-auto scale-90 transition-transform group-hover:scale-105"
                  accentColor="currentColor"
                />
              </span>
              <span className="hidden md:inline font-mono">Leopard Intro</span>
            </button>
          )}

          {/* Direct Commission CTA */}
          <button
            id="nav-inquire-cta-btn"
            onClick={() => handleLinkClick('inquire')}
            className={`hidden sm:inline-flex items-center justify-center px-6 py-2 text-[11px] xl:text-xs uppercase tracking-[0.22em] font-bold transition-all cursor-pointer active:scale-95 ${
              currentPage === 'inquire'
                ? 'bg-[#F8F1E7] text-[#2A060B] ring-1 ring-[#F8F1E7]'
                : 'bg-[#F8F1E7] text-[#2A060B] hover:bg-[#FCF9F5] hover:shadow-lg'
            }`}
          >
            <span>Inquire</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#F8F1E7] hover:text-[#FCF9F5] transition-colors cursor-pointer"
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
          className="lg:hidden bg-[#2A060B] border-b border-[#F8F1E7]/30 px-8 py-8 animate-in slide-in-from-top-4 duration-300 shadow-2xl"
        >
          <div className="flex flex-col gap-3 text-sm tracking-[0.25em] uppercase font-medium text-[#FDF9F0]">
            {isHoctBrand && (
              <div className="pb-4 mb-2 border-b border-[#F8F1E7]/20">
                <HoctLogo className="h-10 sm:h-12 w-auto" showSubtitle={true} />
              </div>
            )}

            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleLinkClick(link.page)}
                  className={`text-left py-3 px-2 transition-colors border-b border-[#F8F1E7]/15 flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'text-[#F8F1E7] font-bold'
                      : 'hover:text-[#FCF9F5]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 bg-[#F8F1E7]" />}
                </button>
              );
            })}

            <div className="pt-4 flex flex-col gap-3">
              {onReplayLoader && (
                <button
                  onClick={() => {
                    onReplayLoader();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-center py-2.5 border border-[#F8F1E7]/40 bg-[#1E0407] text-[#F8F1E7] hover:bg-[#F8F1E7] hover:text-[#2A060B] text-xs tracking-[0.2em] font-medium transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <span className="w-5 h-3 overflow-hidden inline-flex items-center justify-center">
                    <RunningLeopard size="sm" speedMs={80} showDust={false} showSpeedLines={false} showShadow={false} className="w-6 h-auto" accentColor="currentColor" />
                  </span>
                  <span>Play Leopard Loader</span>
                </button>
              )}

              <button
                onClick={() => {
                  handleLinkClick('inquire');
                }}
                className="w-full text-center py-3 bg-[#F8F1E7] text-[#2A060B] text-xs tracking-[0.2em] font-bold cursor-pointer"
              >
                Initiate Project Commission
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
