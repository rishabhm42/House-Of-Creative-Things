/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { WorksPage } from './components/WorksPage';
import { ServicesPage } from './components/ServicesPage';
import { ShowreelPage } from './components/ShowreelPage';
import { AboutPage } from './components/AboutPage';
import { InquirePage } from './components/InquirePage';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ProjectItem, LogoConfig, ActivePage } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<ActivePage>('home');
  const [logoConfig] = useState<LogoConfig>({
    type: 'image',
    textBrand: 'HOCT',
    tagline: 'House of Creative Things',
    imageUrl: '/hoct-logo.svg',
  });

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [inquiryPreselectedService, setInquiryPreselectedService] = useState<string>('');

  // Sync state with URL hash for persistent linking, shareable URLs, and back/forward browser navigation
  useEffect(() => {
    const parseHash = (): ActivePage => {
      const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
      if (['home', 'works', 'services', 'showreel', 'about', 'inquire'].includes(hash)) {
        return hash as ActivePage;
      }
      return 'home';
    };

    setCurrentPage(parseHash());

    const handleHashChange = () => {
      setCurrentPage(parseHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigateTo = (page: ActivePage) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectServiceToInquire = (serviceName: string) => {
    setInquiryPreselectedService(serviceName);
    handleNavigateTo('inquire');
  };

  return (
    <div className="min-h-screen bg-[#3D0A10] text-[#FDF9F0] relative selection:bg-[#F8F1E7] selection:text-[#2A060B]">
      {/* Indian Royal Jali Lattice & Gold Grain Ambient Overlay */}
      <div className="fixed inset-0 pointer-events-none z-40 indian-jali-overlay opacity-60" />
      <div className="fixed inset-0 pointer-events-none z-40 editorial-grain opacity-50" />

      {/* Top Navigation Bar with Page Tabs */}
      <Navbar
        currentPage={currentPage}
        logoConfig={logoConfig}
        onNavigateTo={handleNavigateTo}
      />

      {/* Main Content with Page-Level Transitions */}
      <main id="main-content" className="relative min-h-[80vh]">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <HomePage
                onNavigateTo={handleNavigateTo}
                onSelectProject={(project) => setSelectedProject(project)}
              />
            </motion.div>
          )}

          {currentPage === 'works' && (
            <motion.div
              key="works-page"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <WorksPage
                onSelectProject={(project) => setSelectedProject(project)}
                onNavigateTo={handleNavigateTo}
              />
            </motion.div>
          )}

          {currentPage === 'services' && (
            <motion.div
              key="services-page"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ServicesPage
                onSelectServiceToInquire={handleSelectServiceToInquire}
                onNavigateTo={handleNavigateTo}
              />
            </motion.div>
          )}

          {currentPage === 'showreel' && (
            <motion.div
              key="showreel-page"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ShowreelPage
                onOpenInquiry={() => handleNavigateTo('inquire')}
                onNavigateTo={handleNavigateTo}
              />
            </motion.div>
          )}

          {currentPage === 'about' && (
            <motion.div
              key="about-page"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <AboutPage onNavigateTo={handleNavigateTo} />
            </motion.div>
          )}

          {currentPage === 'inquire' && (
            <motion.div
              key="inquire-page"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <InquirePage
                preselectedService={inquiryPreselectedService}
                onNavigateTo={handleNavigateTo}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Inverted Burgundy Wine Footer */}
      <Footer
        logoConfig={logoConfig}
        onNavigateTo={handleNavigateTo}
        onOpenInquiry={() => handleNavigateTo('inquire')}
      />

      {/* Project Case Study Modal (Accessible across all pages) */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquireSimilar={(title) => {
          setSelectedProject(null);
          handleSelectServiceToInquire(`Case Study: ${title}`);
        }}
      />
    </div>
  );
}
