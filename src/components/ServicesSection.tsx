import React, { useState } from 'react';
import { Film, Palette, Check, ArrowRight, Clock, Layers, Sparkles } from 'lucide-react';
import { videoServices, graphicDesignServices } from '../data/servicesData';
import { ServiceItem } from '../types';
import { RoyalJharokhaArch, GoldMandalaCorner, GoldDivider, MarigoldCrest } from './IndianMotif';

interface ServicesSectionProps {
  onSelectServiceToInquire: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceToInquire,
}) => {
  const [activeTab, setActiveTab] = useState<'video' | 'design'>('video');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const currentServices = activeTab === 'video' ? videoServices : graphicDesignServices;

  return (
    <section id="services" className="py-24 md:py-36 bg-[#2A060B] text-[#FDF9F0] relative border-t border-[#D4AF37]/25 overflow-hidden">
      {/* Background Mandala Accents */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
        <GoldMandalaCorner className="w-56 h-56 text-[#D4AF37]" position="top-right" />
      </div>
      <div className="absolute bottom-0 left-0 opacity-10 pointer-events-none">
        <GoldMandalaCorner className="w-56 h-56 text-[#D4AF37]" position="bottom-left" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-[#D4AF37]/25">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-[#D4AF37]" />
              <span className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-bold font-mono">
                Royal Disciplines & Capabilities
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#FDF9F0] font-normal leading-[1.05]">
              Editorial Services <br />
              <span className="italic font-serif gold-gradient-text">& Royal Brand Architecture</span>
            </h2>
          </div>

          {/* Toggle between Video Editing & Graphic Design */}
          <div className="flex items-center bg-[#1E0407]/90 p-1.5 rounded-full border-2 border-[#D4AF37]/40 shadow-xl">
            <button
              id="services-tab-video"
              onClick={() => {
                setActiveTab('video');
                setSelectedService(null);
              }}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 cursor-pointer ${
                activeTab === 'video'
                  ? 'bg-gradient-to-r from-[#D4AF37] via-[#F4E0A5] to-[#AA820A] text-[#2A060B] font-bold shadow-md'
                  : 'text-[#D4AF37]/80 hover:text-white'
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span>Video Editing ({videoServices.length})</span>
            </button>

            <button
              id="services-tab-design"
              onClick={() => {
                setActiveTab('design');
                setSelectedService(null);
              }}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 cursor-pointer ${
                activeTab === 'design'
                  ? 'bg-gradient-to-r from-[#D4AF37] via-[#F4E0A5] to-[#AA820A] text-[#2A060B] font-bold shadow-md'
                  : 'text-[#D4AF37]/80 hover:text-white'
              }`}
            >
              <Palette className="w-3.5 h-3.5" />
              <span>Graphic Design ({graphicDesignServices.length})</span>
            </button>
          </div>
        </div>

        {/* Lead Narrative Banner */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-[#D4AF37]/20">
          <div className="md:col-span-8">
            <p className="text-base sm:text-lg text-[#FDF9F0]/90 font-light leading-relaxed">
              {activeTab === 'video'
                ? 'We edit with the rhythmic intuition of cinema: pacing each cut to emotional crescendo, optimizing visual retention for digital algorithms, and color-grading with nuanced 35mm richness and warm golden highlights.'
                : 'We design brand systems that endure. From bespoke logotypes and tactile gold foil packaging to complete editorial brand bibles, every element is balanced with typographic rigor and royal equilibrium.'}
            </p>
          </div>
          <div className="md:col-span-4 flex items-center justify-end gap-6 text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-mono">
            <span>Precision Turnarounds</span>
            <span>•</span>
            <span>Worldwide Delivery</span>
          </div>
        </div>

        {/* Services List / Editorial Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentServices.map((service, index) => {
            const isSelected = selectedService?.id === service.id;
            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(isSelected ? null : service)}
                className={`group relative p-8 border-2 transition-all duration-300 cursor-pointer flex flex-col justify-between rounded-xs ${
                  isSelected
                    ? 'border-[#D4AF37] bg-[#D4AF37]/15 ring-2 ring-[#D4AF37]/50 shadow-2xl'
                    : 'border-[#D4AF37]/30 hover:border-[#D4AF37] bg-[#1E0407]/60 hover:bg-[#1E0407]/90'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-[#D4AF37] font-bold">
                      {String(index + 1).padStart(2, '0')} //
                    </span>
                    {service.featured && (
                      <span className="px-3 py-0.5 rounded-full text-[9px] uppercase tracking-[0.2em] bg-gradient-to-r from-[#D4AF37] to-[#AA820A] text-[#2A060B] font-bold shadow-xs">
                        Core Discipline
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-2xl text-[#FDF9F0] group-hover:text-[#FFF0CA] transition-colors mb-2">
                    {service.name}
                  </h3>

                  <p className="text-xs text-[#FDF9F0]/80 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div>
                  {/* Deliverables Preview */}
                  <div className="border-t border-[#D4AF37]/20 pt-4 mb-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] block mb-2 font-mono font-bold">
                      Key Deliverables:
                    </span>
                    <ul className="space-y-1.5">
                      {service.deliverables.slice(0, 2).map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-[11px] text-[#FDF9F0]/90 font-light">
                          <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                          <span>{item}</span>
                        </li>
                      ))}
                      {service.deliverables.length > 2 && (
                        <li className="text-[10px] text-[#D4AF37]/75 font-mono italic">
                          +{service.deliverables.length - 2} additional deliverables
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Footer & Action */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="flex items-center gap-1.5 text-[11px] text-[#D4AF37]/80 font-mono">
                      <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{service.typicalTimeline}</span>
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectServiceToInquire(service.name);
                      }}
                      className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] font-semibold text-[#D4AF37] group-hover:text-white transition-colors"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Service Inspection Drawer (if selected) */}
        {selectedService && (
          <div className="mt-10 p-8 border-2 border-[#D4AF37] bg-[#1E0407]/95 relative animate-in fade-in duration-300 shadow-2xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-bold font-mono">
                  Selected Specification // {selectedService.category === 'video' ? 'Video Editing' : 'Graphic Design'}
                </span>
                <h4 className="font-serif text-3xl text-[#FDF9F0] mt-1">
                  {selectedService.name}
                </h4>
                <p className="text-xs text-[#FDF9F0]/80 mt-1 max-w-xl font-light leading-relaxed">
                  {selectedService.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedService.deliverables.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#2A060B] text-[11px] text-[#D4AF37] border border-[#D4AF37]/40 font-mono"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => onSelectServiceToInquire(selectedService.name)}
                  className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F4E0A5] to-[#AA820A] text-[#2A060B] text-xs uppercase tracking-[0.2em] font-bold hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-all shadow-lg cursor-pointer"
                >
                  Book Commission for {selectedService.name}
                </button>
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-3 text-xs uppercase tracking-[0.2em] text-[#D4AF37]/80 hover:text-white cursor-pointer"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
