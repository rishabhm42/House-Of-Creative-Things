import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Monitor, Smartphone, Film, Sparkles } from 'lucide-react';
import { RoyalJharokhaArch, GoldMandalaCorner, GoldDivider, MarigoldCrest } from './IndianMotif';

interface ShowreelSectionProps {
  onOpenInquiry: () => void;
}

export const ShowreelSection: React.FC<ShowreelSectionProps> = ({ onOpenInquiry }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [aspectMode, setAspectMode] = useState<'cinema' | 'vertical'>('cinema');
  const videoRef = useRef<HTMLVideoElement>(null);

  const cinemaVideoUrl = 'https://assets.mixkit.co/videos/preview/mixkit-fashion-model-posing-in-neon-lights-39878-large.mp4';
  const verticalVideoUrl = 'https://assets.mixkit.co/videos/preview/mixkit-vertical-portrait-of-a-woman-posing-with-dramatic-lighting-42636-large.mp4';

  const currentVideoSrc = aspectMode === 'cinema' ? cinemaVideoUrl : verticalVideoUrl;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section id="showreel" className="py-24 md:py-36 bg-[#2A060B] text-[#FDF9F0] relative border-t border-[#D4AF37]/25 overflow-hidden">
      {/* Background Mandala Accents */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
        <GoldMandalaCorner className="w-56 h-56 text-[#D4AF37]" position="top-right" />
      </div>
      <div className="absolute bottom-0 left-0 opacity-10 pointer-events-none">
        <GoldMandalaCorner className="w-56 h-56 text-[#D4AF37]" position="bottom-left" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Masthead */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 pb-8 border-b border-[#D4AF37]/20">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-[#D4AF37]" />
              <span className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-bold font-mono">
                Screening Room // 2025 Reel
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#FDF9F0] font-normal leading-[1.05]">
              The Cinema <br />
              <span className="italic font-serif gold-gradient-text">& Motion Showreel</span>
            </h2>
          </div>

          {/* Aspect Ratio Switcher */}
          <div className="flex items-center gap-2 bg-[#1E0407]/90 p-1.5 rounded-full border-2 border-[#D4AF37]/40 shadow-xl">
            <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold mr-2 ml-2 font-mono">Format:</span>
            <button
              onClick={() => setAspectMode('cinema')}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.15em] flex items-center gap-1.5 transition-all cursor-pointer ${
                aspectMode === 'cinema'
                  ? 'bg-gradient-to-r from-[#D4AF37] via-[#F4E0A5] to-[#AA820A] text-[#2A060B] font-bold shadow-md'
                  : 'border border-[#D4AF37]/35 text-[#FDF9F0]/80 hover:border-[#D4AF37] hover:text-white'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Cinema 16:9</span>
            </button>

            <button
              onClick={() => setAspectMode('vertical')}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.15em] flex items-center gap-1.5 transition-all cursor-pointer ${
                aspectMode === 'vertical'
                  ? 'bg-gradient-to-r from-[#D4AF37] via-[#F4E0A5] to-[#AA820A] text-[#2A060B] font-bold shadow-md'
                  : 'border border-[#D4AF37]/35 text-[#FDF9F0]/80 hover:border-[#D4AF37] hover:text-white'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Reels 9:16</span>
            </button>
          </div>
        </div>

        {/* Video Canvas Stage with Royal Jali Gold Frame */}
        <div className="relative max-w-5xl mx-auto">
          <div
            className={`relative mx-auto overflow-hidden bg-black shadow-2xl border-2 border-[#D4AF37]/60 transition-all duration-700 rounded-xs ${
              aspectMode === 'cinema' ? 'w-full aspect-[16/9]' : 'w-full max-w-xs sm:max-w-sm aspect-[9/16]'
            }`}
          >
            <video
              ref={videoRef}
              key={currentVideoSrc}
              src={currentVideoSrc}
              className="w-full h-full object-cover filter contrast-105"
              loop
              playsInline
              muted={isMuted}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Ambient Play Overlay */}
            {!isPlaying && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 bg-black/55 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer group transition-all"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F4E0A5] to-[#AA820A] text-[#2A060B] flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                  <Play className="w-8 h-8 ml-1 fill-current" />
                </div>
                <span className="mt-5 text-xs uppercase tracking-[0.3em] font-bold text-[#FDF9F0] font-mono">
                  Click to Experience Film
                </span>
                <span className="text-[11px] text-[#D4AF37] tracking-wider mt-1 font-mono">
                  Social Ads • Editorial Lookbooks • Heritage Films
                </span>
              </div>
            )}

            {/* Video Control Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between text-[#FDF9F0]">
              <div className="flex items-center gap-4">
                <button
                  onClick={togglePlay}
                  className="p-2 hover:text-[#D4AF37] text-[#FDF9F0] transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
                </button>

                <button
                  onClick={toggleMute}
                  className="p-2 hover:text-[#D4AF37] text-[#FDF9F0] transition-colors cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>

                <span className="text-[11px] tracking-[0.2em] uppercase font-mono text-[#D4AF37] font-bold">
                  01:42 // 4K 24FPS
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#D4AF37]/90 font-mono hidden sm:inline">
                  Soundscape: Binaural Heritage Score
                </span>
              </div>
            </div>
          </div>

          {/* Under-player Editorial Notation */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-[#FDF9F0]/85 text-xs">
            <div className="border-l-2 border-[#D4AF37]/40 pl-5 bg-[#1E0407]/60 p-4 rounded-xs">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold block mb-1 font-mono">Editing Discipline</span>
              <p className="font-light leading-relaxed">
                Precision cutdowns, dynamic speed ramps, analog grain textures, and frame-accurate audio synchrony.
              </p>
            </div>
            <div className="border-l-2 border-[#D4AF37]/40 pl-5 bg-[#1E0407]/60 p-4 rounded-xs">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold block mb-1 font-mono">Retention Strategy</span>
              <p className="font-light leading-relaxed">
                Designed to arrest attention within the initial 1.8 seconds across TikTok, Instagram, and premium web displays.
              </p>
            </div>
            <div className="border-l-2 border-[#D4AF37]/40 pl-5 bg-[#1E0407]/60 p-4 rounded-xs flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold block mb-1 font-mono">Commission Reel</span>
                <p className="font-light">Ready to craft your next brand campaign or viral asset?</p>
              </div>
              <button
                onClick={onOpenInquiry}
                className="mt-3 text-left text-xs uppercase tracking-[0.2em] font-bold text-[#D4AF37] hover:text-[#FFF0CA] underline underline-offset-4 transition-colors cursor-pointer"
              >
                Request Video Rate Card & Availability →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
