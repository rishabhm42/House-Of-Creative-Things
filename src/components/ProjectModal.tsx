import React, { useEffect, useRef, useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, ArrowRight, CheckCircle2, Film } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquireSimilar: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onInquireSimilar,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div
      id="project-case-study-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#1E0407]/95 backdrop-blur-md flex flex-col items-center justify-start p-4 sm:p-6 md:p-12 animate-in fade-in duration-300 text-[#FDF9F0]"
    >
      {/* Top Floating Control Bar */}
      <div className="w-full max-w-5xl flex items-center justify-between py-4 mb-6 border-b border-[#F8F1E7]/30 sticky top-0 bg-[#2A060B]/90 backdrop-blur-md z-30">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#F8F1E7] animate-pulse" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#F8F1E7] font-mono font-bold">
            Case Study // {project.client}
          </span>
        </div>

        <button
          id="close-project-modal-btn"
          onClick={onClose}
          className="p-2.5 rounded-full bg-[#F8F1E7]/10 hover:bg-[#F8F1E7] text-[#F8F1E7] hover:text-[#2A060B] transition-all cursor-pointer flex items-center gap-2 text-xs uppercase tracking-wider font-semibold border border-[#F8F1E7]/30"
          aria-label="Close project modal"
        >
          <span className="hidden sm:inline">Close Monograph</span>
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Main Editorial Case Study Container */}
      <div className="w-full max-w-5xl bg-[#2A060B] border-2 border-[#F8F1E7]/30 shadow-2xl p-6 sm:p-10 md:p-14 mb-16 relative">
        {/* Title Header */}
        <div className="mb-10 pb-8 border-b border-[#F8F1E7]/25">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1 bg-gradient-to-r from-[#F8F1E7] to-[#E8DCCB] text-[#2A060B] text-[10px] uppercase tracking-[0.3em] font-bold">
              {project.category === 'video' ? 'Video Editing' : project.category === 'design' ? 'Graphic Architecture' : 'Motion & Design'}
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-[#F8F1E7]/90 font-mono">
              {project.subcategory} • Year {project.year}
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#FDF9F0] font-normal leading-[1.05]">
            {project.title}
          </h2>
          <p className="mt-3 text-lg font-serif italic gold-gradient-text">
            "{project.tagline}"
          </p>
        </div>

        {/* Video Player or Large Hero Image */}
        {project.videoUrl ? (
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-black mb-12 border-2 border-[#F8F1E7]/40 shadow-2xl">
            <video
              ref={videoRef}
              src={project.videoUrl}
              className="w-full h-full object-cover filter contrast-105"
              autoPlay
              loop
              playsInline
              muted={isMuted}
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-[#1E0407]/85 backdrop-blur-xs p-3 text-[#FDF9F0] text-xs border border-[#F8F1E7]/30">
              <div className="flex items-center gap-3">
                <button onClick={toggleVideo} className="text-[#F8F1E7] hover:text-[#FCF9F5] transition-colors cursor-pointer">
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                </button>
                <button onClick={toggleAudio} className="text-[#F8F1E7] hover:text-[#FCF9F5] transition-colors cursor-pointer">
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span className="font-mono text-[11px] tracking-wider text-[#F8F1E7]">PROJECT MASTER EDIT</span>
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#F8F1E7] hidden sm:inline font-mono">
                Double-X 35mm & 24K Color Grade
              </span>
            </div>
          </div>
        ) : (
          <div className="relative aspect-[16/10] w-full overflow-hidden mb-12 border-2 border-[#F8F1E7]/40 shadow-2xl">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover filter contrast-105"
            />
          </div>
        )}

        {/* Two-Column Editorial Details */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-8 border-b border-[#F8F1E7]/25">
          <div className="md:col-span-7 space-y-6">
            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] text-[#F8F1E7] font-bold mb-2 font-mono">
                The Brief & Creative Thesis
              </h4>
              <p className="text-[#FDF9F0]/90 text-base sm:text-lg font-light leading-relaxed">
                {project.synopsis}
              </p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] text-[#F8F1E7] font-bold mb-2 font-mono">
                Visual Art Direction
              </h4>
              <p className="text-[#FDF9F0]/85 text-sm sm:text-base font-light leading-relaxed">
                {project.creativeDirection}
              </p>
            </div>
          </div>

          <div className="md:col-span-5 space-y-6 bg-[#1E0407]/70 p-6 border-l-2 border-[#F8F1E7]">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#F8F1E7] block mb-1 font-mono">
                Client / Brand
              </span>
              <span className="text-sm font-medium text-[#FDF9F0] block">{project.client}</span>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#F8F1E7] block mb-1 font-mono">
                Production Deliverables
              </span>
              <ul className="space-y-1.5 mt-2">
                {project.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-[#FDF9F0]/90 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#F8F1E7]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#F8F1E7]/20">
              <button
                onClick={() => {
                  onClose();
                  onInquireSimilar(project.title);
                }}
                className="w-full py-3 rounded-full bg-gradient-to-r from-[#F8F1E7] via-[#FCF9F5] to-[#E8DCCB] text-[#2A060B] text-xs uppercase tracking-[0.2em] font-bold hover:shadow-lg hover:shadow-[#F8F1E7]/30 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Commission Similar Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Gallery Spread / Additional Editorial Shots */}
        {project.editorialImages.length > 1 && (
          <div className="mt-12">
            <h4 className="text-xs uppercase tracking-[0.3em] text-[#F8F1E7] font-bold mb-6 font-mono">
              Visual Monograph & Process Spreads
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.editorialImages.slice(1).map((imgUrl, i) => (
                <div key={i} className="aspect-[4/3] overflow-hidden border border-[#F8F1E7]/30 group">
                  <img
                    src={imgUrl}
                    alt={`${project.title} spread ${i + 1}`}
                    className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
