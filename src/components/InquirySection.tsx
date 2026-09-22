import React, { useState } from 'react';
import { Send, CheckCircle2, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { InquiryFormData } from '../types';
import { RoyalJharokhaArch, GoldMandalaCorner, GoldDivider, MarigoldCrest } from './IndianMotif';

interface InquirySectionProps {
  preselectedService?: string;
  onInquirySubmitted?: () => void;
}

export const InquirySection: React.FC<InquirySectionProps> = ({
  preselectedService,
  onInquirySubmitted,
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    clientName: '',
    companyName: '',
    email: '',
    services: preselectedService ? [preselectedService] : ['Brand Videos'],
    timeline: 'Within 2–4 Weeks',
    budget: '$5,000 – $10,000',
    vision: '',
    referenceUrl: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const availableServices = [
    'Social Media Reels',
    'Short-form Content',
    'Brand Videos',
    'Product Videos',
    'Video Ads',
    'Animated Invites',
    'YouTube Videos',
    'Logo Design',
    'Brand Identity',
    'Brand Guidelines',
    'Packaging Design',
    'Menu Card Design',
    'Poster & Collaterals',
  ];

  const budgetTiers = [
    '< $3,000',
    '$3,000 – $5,000',
    '$5,000 – $10,000',
    '$10,000 – $25,000+',
  ];

  const timelines = [
    'Urgent (Under 2 Weeks)',
    'Within 2–4 Weeks',
    'Next Quarter',
    'Ongoing Monthly Retainer',
  ];

  const toggleService = (svc: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(svc);
      if (exists) {
        return { ...prev, services: prev.services.filter((s) => s !== svc) };
      } else {
        return { ...prev, services: [...prev.services, svc] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onInquirySubmitted) onInquirySubmitted();
    }, 900);
  };

  return (
    <section id="inquire" className="py-24 md:py-36 bg-[#2A060B] text-[#FDF9F0] relative border-t border-[#D4AF37]/25 overflow-hidden">
      {/* Background Mandala Accents */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
        <GoldMandalaCorner className="w-56 h-56 text-[#D4AF37]" position="top-right" />
      </div>
      <div className="absolute bottom-0 left-0 opacity-10 pointer-events-none">
        <GoldMandalaCorner className="w-56 h-56 text-[#D4AF37]" position="bottom-left" />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex justify-center mb-3">
            <RoyalJharokhaArch className="w-24 h-6 text-[#D4AF37]/80" />
          </div>
          <span className="text-xs uppercase tracking-[0.35em] text-[#D4AF37] font-bold block mb-3 font-mono">
            Commission A Royal Edition
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#FDF9F0] font-normal leading-[1.05]">
            Let’s Author Something <br />
            <span className="italic font-serif gold-gradient-text">Unforgettable</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#FDF9F0]/85 font-light leading-relaxed">
            Whether you require high-fashion social reels, a documentary brand film, or a complete graphic design overhaul, our atelier calendar is open for discerning partners.
          </p>
        </div>

        {submitted ? (
          <div className="p-12 md:p-16 border-2 border-[#D4AF37] bg-[#1E0407]/90 text-center animate-in fade-in duration-500 shadow-2xl relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA820A] text-[#2A060B] flex items-center justify-center mx-auto mb-6 shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold block mb-2 font-mono">
              Dispatch Received // Confidential Archive
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#FDF9F0] mb-4">
              Thank You, {formData.clientName || 'Partner'}
            </h3>
            <p className="text-sm text-[#FDF9F0]/85 max-w-lg mx-auto font-light leading-relaxed mb-8">
              Your inquiry regarding <strong className="font-medium text-[#D4AF37]">{formData.services.join(', ')}</strong> has been cataloged. Our Creative Director will review your brief and reply within 24 business hours.
            </p>

            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  clientName: '',
                  companyName: '',
                  email: '',
                  services: ['Brand Videos'],
                  timeline: 'Within 2–4 Weeks',
                  budget: '$5,000 – $10,000',
                  vision: '',
                  referenceUrl: '',
                });
              }}
              className="px-7 py-3 rounded-full border border-[#D4AF37] text-xs uppercase tracking-[0.2em] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#2A060B] transition-colors cursor-pointer"
            >
              Submit Another Commission Request
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="p-8 sm:p-12 md:p-14 border-2 border-[#D4AF37]/35 bg-[#1E0407]/85 shadow-2xl space-y-10 rounded-xs"
          >
            {/* 1. Client Identity */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-medium mb-2 font-mono">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Julian Vane"
                  value={formData.clientName}
                  onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                  className="w-full px-4 py-3 bg-[#2A060B]/70 border border-[#D4AF37]/40 text-sm text-[#FDF9F0] focus:outline-hidden focus:border-[#D4AF37] placeholder:text-[#FDF9F0]/30"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-medium mb-2 font-mono">
                  Brand / Studio Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vane & Sons London"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-4 py-3 bg-[#2A060B]/70 border border-[#D4AF37]/40 text-sm text-[#FDF9F0] focus:outline-hidden focus:border-[#D4AF37] placeholder:text-[#FDF9F0]/30"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-medium mb-2 font-mono">
                  Contact Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="julian@vaneandsons.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-[#2A060B]/70 border border-[#D4AF37]/40 text-sm text-[#FDF9F0] focus:outline-hidden focus:border-[#D4AF37] placeholder:text-[#FDF9F0]/30"
                />
              </div>
            </div>

            {/* 2. Services Needed (Multi-select) */}
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-medium mb-3 font-mono">
                Select Required Disciplines & Services (Click all that apply)
              </label>
              <div className="flex flex-wrap gap-2.5">
                {availableServices.map((svc) => {
                  const active = formData.services.includes(svc);
                  return (
                    <button
                      type="button"
                      key={svc}
                      onClick={() => toggleService(svc)}
                      className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                        active
                          ? 'bg-gradient-to-r from-[#D4AF37] via-[#F4E0A5] to-[#AA820A] text-[#2A060B] border border-[#D4AF37] font-bold shadow-md'
                          : 'border border-[#D4AF37]/35 text-[#FDF9F0]/80 hover:border-[#D4AF37] hover:text-white bg-[#2A060B]/40'
                      }`}
                    >
                      {active && '✓ '}
                      {svc}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Budget & Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-[#D4AF37]/20">
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-medium mb-2 font-mono">
                  Estimated Production Budget
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 bg-[#2A060B] border border-[#D4AF37]/40 text-sm text-[#FDF9F0] focus:outline-hidden focus:border-[#D4AF37]"
                >
                  {budgetTiers.map((b) => (
                    <option key={b} value={b} className="bg-[#2A060B] text-[#FDF9F0]">
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-medium mb-2 font-mono">
                  Desired Timeline
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full px-4 py-3 bg-[#2A060B] border border-[#D4AF37]/40 text-sm text-[#FDF9F0] focus:outline-hidden focus:border-[#D4AF37]"
                >
                  {timelines.map((t) => (
                    <option key={t} value={t} className="bg-[#2A060B] text-[#FDF9F0]">
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* 4. Project Narrative & Moodboard */}
            <div className="space-y-4 pt-2">
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-medium mb-2 font-mono">
                  Brief Synopsis & Creative Vision
                </label>
                <textarea
                  rows={4}
                  placeholder="Outline the aesthetic mood, deliverables required, target audience, and any specific visual directions you admire..."
                  value={formData.vision}
                  onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
                  className="w-full px-4 py-3 bg-[#2A060B]/70 border border-[#D4AF37]/40 text-sm text-[#FDF9F0] focus:outline-hidden focus:border-[#D4AF37] placeholder:text-[#FDF9F0]/30 leading-relaxed"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-medium mb-2 font-mono">
                  Inspiration / Reference Link (e.g. Dropbox, Figma, Google Drive, Website)
                </label>
                <input
                  type="url"
                  placeholder="https://pinterest.com/... or https://instagram.com/..."
                  value={formData.referenceUrl}
                  onChange={(e) => setFormData({ ...formData, referenceUrl: e.target.value })}
                  className="w-full px-4 py-3 bg-[#2A060B]/70 border border-[#D4AF37]/40 text-sm text-[#FDF9F0] focus:outline-hidden focus:border-[#D4AF37] placeholder:text-[#FDF9F0]/30"
                />
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-6 border-t border-[#D4AF37]/25 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-2 text-xs text-[#D4AF37]/80 font-mono">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>All client briefs remain strictly confidential.</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F4E0A5] to-[#AA820A] text-[#2A060B] text-xs uppercase tracking-[0.25em] font-bold hover:shadow-xl hover:shadow-[#D4AF37]/40 transition-all duration-300 shadow-xl flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Transmitting Dossier...</span>
                ) : (
                  <>
                    <span>Transmit Commission Brief</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
