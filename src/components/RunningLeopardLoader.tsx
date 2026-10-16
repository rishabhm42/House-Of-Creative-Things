import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RunningLeopard } from './RunningLeopard';
import { HoctLogo } from './HoctLogo';

export interface RunningLeopardLoaderProps {
  isOpen: boolean;
  onComplete: () => void;
  minDurationMs?: number; // total duration to count from 0 to 100
  title?: string;
  allowSkip?: boolean;
}

const STATUS_MESSAGES = [
  'INITIALIZING CREATIVE SUITE',
  'CALIBRATING CINEMATIC FRAMES',
  'CURATING HIGH-CONTRAST PORTFOLIO',
  'AWAKENING THE HOCT INSTINCT',
  'HOUSE OF CREATIVE THINGS • READY',
];

export const RunningLeopardLoader: React.FC<RunningLeopardLoaderProps> = ({
  isOpen,
  onComplete,
  minDurationMs = 2400,
  title = 'HOUSE OF CREATIVE THINGS',
  allowSkip = true,
}) => {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [isFinishing, setIsFinishing] = useState(false);

  // Keyboard shortcut: ESC to skip
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && allowSkip) {
        handleSkip();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, allowSkip]);

  // Smooth loading progression
  useEffect(() => {
    if (!isOpen) {
      setProgress(0);
      setIsFinishing(false);
      setStatusIndex(0);
      return;
    }

    const startTime = performance.now();
    let animationFrameId: number;

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const rawProgress = Math.min((elapsed / minDurationMs) * 100, 100);

      // Natural non-linear easing for luxury tactile feel
      const eased = easeInOutCubic(rawProgress / 100) * 100;
      setProgress(Math.floor(eased));

      // Update status phrases
      if (eased < 25) setStatusIndex(0);
      else if (eased < 50) setStatusIndex(1);
      else if (eased < 75) setStatusIndex(2);
      else if (eased < 95) setStatusIndex(3);
      else setStatusIndex(4);

      if (rawProgress < 100) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        setIsFinishing(true);
        // Brief pause at 100% to let the leopard sprint into the horizon before exit
        setTimeout(() => {
          onComplete();
        }, 500);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isOpen, minDurationMs, onComplete]);

  const handleSkip = () => {
    setProgress(100);
    setIsFinishing(true);
    setTimeout(() => {
      onComplete();
    }, 150);
  };

  // Cubic easing function
  function easeInOutCubic(x: number): number {
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="running-leopard-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-between bg-[#220407] text-[#FDF9F0] overflow-hidden select-none"
        >
          {/* Ambient leopard pattern & luxury editorial grain */}
          <div className="absolute inset-0 leopard-print-overlay opacity-30 pointer-events-none" />
          <div className="absolute inset-0 editorial-grain opacity-40 pointer-events-none" />

          {/* Radial Warm Glow Behind the Running Leopard */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-[#F8F1E7]/10 via-[#F8F1E7]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Top Bar with Brand Logo and Skip Button */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 sm:py-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <HoctLogo className="h-8 sm:h-9 w-auto object-contain filter drop-shadow-md" />
              <div className="hidden sm:block">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#F8F1E7]/70 font-light block">
                  Creative Direction & Visuals
                </span>
              </div>
            </div>

            {allowSkip && (
              <button
                type="button"
                onClick={handleSkip}
                className="group flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F8F1E7]/30 bg-[#3D0A10]/60 hover:bg-[#F8F1E7] hover:text-[#2A060B] transition-all duration-300 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-medium cursor-pointer"
              >
                <span>Enter Site</span>
                <span className="text-xs transition-transform group-hover:translate-x-1">→</span>
              </button>
            )}
          </div>

          {/* Center Stage: The Galloping Leopard */}
          <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full px-6 max-w-4xl">
            {/* Studio Monogram / Felix Titling Headline */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-6 sm:mb-8"
            >
              <span className="text-[11px] sm:text-xs tracking-[0.45em] uppercase text-[#F8F1E7]/80 font-medium block mb-2">
                House of Creative Things
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#FDF9F0] tracking-[0.18em] uppercase">
                {title}
              </h2>
            </motion.div>

            {/* The Running Leopard Gallop Silhouette Animation */}
            <motion.div
              animate={
                isFinishing
                  ? {
                      x: [0, 400],
                      opacity: [1, 0],
                      scale: [1, 1.05],
                      transition: { duration: 0.6, ease: 'easeIn' },
                    }
                  : { x: 0, opacity: 1 }
              }
              className="relative flex items-center justify-center my-2 sm:my-4"
            >
              <RunningLeopard
                size="lg"
                speedMs={88}
                showDust={true}
                showSpeedLines={true}
                showShadow={true}
                accentColor="#F8F1E7"
              />
            </motion.div>

            {/* Editorial Hairline Loading Bar & Sinuous Indicator */}
            <div className="w-full max-w-md sm:max-w-lg mt-6 sm:mt-8">
              {/* Top info line: Status Phrase + Percentage */}
              <div className="flex items-center justify-between text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#F8F1E7]/80 mb-2 font-mono">
                <span className="font-light tracking-[0.2em] truncate mr-2">
                  {STATUS_MESSAGES[statusIndex]}
                </span>
                <span className="font-serif font-bold text-[#FDF9F0] text-sm tracking-wider">
                  {progress < 10 ? `0${progress}` : progress}%
                </span>
              </div>

              {/* Progress Track with Moving Mini Leopard Silhouette */}
              <div className="relative w-full h-[3px] bg-[#3D0A10] rounded-full overflow-visible border border-[#F8F1E7]/15">
                {/* Active Progress Fill with Soft Cream Gradient */}
                <div
                  className="h-full bg-gradient-to-r from-[#D5C1A7] via-[#F8F1E7] to-[#FCF9F5] shadow-[0_0_12px_rgba(248,241,231,0.6)] transition-all duration-75 rounded-full"
                  style={{ width: `${progress}%` }}
                />

                {/* Mini Golden Leopard Icon riding atop the progress track */}
                <div
                  className="absolute -top-3.5 -translate-x-1/2 pointer-events-none transition-all duration-75"
                  style={{ left: `${Math.max(4, Math.min(96, progress))}%` }}
                >
                  <div className="w-8 h-4 relative">
                    <RunningLeopard
                      size="sm"
                      speedMs={75}
                      showDust={false}
                      showSpeedLines={false}
                      showShadow={false}
                      className="w-8 h-auto"
                      accentColor="#FCF9F5"
                    />
                  </div>
                </div>
              </div>

              {/* Subtle tick marks */}
              <div className="flex justify-between items-center px-0.5 mt-2 opacity-30 text-[9px] font-mono tracking-widest text-[#F8F1E7]">
                <span>00</span>
                <span>25</span>
                <span>50</span>
                <span>75</span>
                <span>100</span>
              </div>
            </div>
          </div>

          {/* Bottom Luxury Footer Note */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-3 text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-[#F8F1E7]/60">
            <div>
              <span>Video Editing</span>
              <span className="mx-2 text-[#F8F1E7]/30">•</span>
              <span>Graphic Design</span>
              <span className="mx-2 text-[#F8F1E7]/30">•</span>
              <span>Digital Marketing</span>
            </div>
            <div className="text-[#F8F1E7]/40 font-light">
              Crafted in Soft Cream & Deep Crimson
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
