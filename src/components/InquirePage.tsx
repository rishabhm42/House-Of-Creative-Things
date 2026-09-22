import React from 'react';
import { Mail, Phone, MapPin, Clock, ShieldCheck, HelpCircle } from 'lucide-react';
import { InquirySection } from './InquirySection';
import { RoyalJharokhaArch, GoldMandalaCorner, GoldDivider, MarigoldCrest } from './IndianMotif';
import { ActivePage } from '../types';

interface InquirePageProps {
  preselectedService?: string;
  onNavigateTo: (page: ActivePage) => void;
}

export const InquirePage: React.FC<InquirePageProps> = ({
  preselectedService,
  onNavigateTo,
}) => {
  const faqs = [
    {
      q: 'What is the standard turnaround for an editorial video commission?',
      a: 'For social media reels and commercial video cutdowns, our standard turnaround is 5 to 7 business days from receipt of footage. Expedited rush deliveries (48 hours) can be accommodated depending on studio capacity.',
    },
    {
      q: 'Do you provide raw project files (Premiere / DaVinci)?',
      a: 'Yes. In addition to high-resolution ProRes 4444 and H.265 broadcast masters, full project bundles and color LUTs can be included in the deliverables archive.',
    },
    {
      q: 'How are client revisions handled?',
      a: 'Every commission includes two comprehensive rounds of fine revision. Feedback is received via frame-accurate timestamp review tools (Frame.io) to ensure swift execution.',
    },
    {
      q: 'Do you offer monthly creative retainers?',
      a: 'Yes. We partner with a select group of fashion, lifestyle, and luxury brands on quarterly retainers for ongoing monthly reels, brand stories, and packaging updates.',
    },
  ];

  return (
    <div className="pt-24 md:pt-32">
      {/* Editorial Page Masthead */}
      <section className="px-6 md:px-12 pb-14 border-b border-[#D4AF37]/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-15 pointer-events-none">
          <GoldMandalaCorner className="w-48 h-48 text-[#D4AF37]" position="top-right" />
        </div>
        <div className="absolute bottom-0 left-0 opacity-15 pointer-events-none">
          <GoldMandalaCorner className="w-48 h-48 text-[#D4AF37]" position="bottom-left" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <MarigoldCrest className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37] font-mono font-bold">
              HOCT Studio Commissions
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37]/80 font-mono">
              Direct Royal Inquiry
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div className="max-w-3xl">
              <div className="my-2">
                <RoyalJharokhaArch className="w-24 h-6 text-[#D4AF37]/75" />
              </div>
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#FDF9F0] font-normal leading-[1.05]">
                Commission <br />
                <span className="italic font-serif gold-gradient-text">A Royal Edition</span>
              </h1>
              <p className="text-sm md:text-base text-[#FDF9F0]/85 font-light mt-6 max-w-2xl leading-relaxed">
                Initiate a project dialogue for video editing, cinema reels, or brand identity architecture. Our creative director personally reviews all inquiries and replies within 24 hours.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 text-xs font-mono text-[#FDF9F0]/80">
              <div className="p-4 border-2 border-[#D4AF37]/40 bg-[#1E0407]/90 rounded-xs shadow-lg">
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#D4AF37] block font-bold">Direct Wire:</span>
                <span className="text-[#FFF0CA] font-medium">commissions@hoct.studio</span>
              </div>
              <div className="p-4 border-2 border-[#D4AF37]/40 bg-[#1E0407]/90 rounded-xs shadow-lg">
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#D4AF37] block font-bold">Studio Telephone:</span>
                <span className="text-[#FFF0CA] font-medium">+91 (11) 4890-4628</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Inquiry Form */}
      <InquirySection preselectedService={preselectedService} />

      {/* Studio FAQs Section */}
      <section className="py-24 px-6 md:px-12 border-t border-[#D4AF37]/25 bg-[#230508]/80 relative">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-[0.35em] font-mono text-[#D4AF37] font-bold">
              Commission FAQ
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#FDF9F0] mb-12">
            Frequently Addressed Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, i) => (
              <div key={i} className="border-t-2 border-[#D4AF37]/40 pt-6 space-y-2 bg-[#1E0407]/50 p-5 rounded-xs">
                <h4 className="font-serif text-xl text-[#FDF9F0]">{faq.q}</h4>
                <p className="text-xs text-[#FDF9F0]/80 font-light leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
