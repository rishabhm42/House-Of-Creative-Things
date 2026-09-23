import React, { useState } from 'react';
import { Send, CheckCircle2, ArrowRight, ShieldCheck, Phone, Mail, User, Building, MessageSquare, Sparkles } from 'lucide-react';
import { InquiryFormData } from '../types';

interface InquirySectionProps {
  preselectedService?: string;
  onInquirySubmitted?: () => void;
}

export const InquirySection: React.FC<InquirySectionProps> = ({
  preselectedService,
  onInquirySubmitted,
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyOrBrand: '',
    message: '',
    serviceInterest: preselectedService || '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onInquirySubmitted) onInquirySubmitted();
    }, 800);
  };

  return (
    <section id="inquire" className="py-24 md:py-36 bg-[#2A060B] text-[#FDF9F0] relative border-t border-[#F8F1E7]/25 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.35em] text-[#F8F1E7] font-bold block mb-3 font-mono">
            Direct Inquiries
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#FDF9F0] font-normal leading-[1.05]">
            Connect With <br />
            <span className="italic font-serif gold-gradient-text">Our Studio</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#FDF9F0]/85 font-light leading-relaxed">
            Leave your contact details below and our team will get in touch with you promptly to discuss your video editing or graphic design requirements.
          </p>
        </div>

        {submitted ? (
          <div className="p-10 md:p-14 border-2 border-[#F8F1E7] bg-[#1E0407]/90 text-center animate-in fade-in duration-500 shadow-2xl relative rounded-xs">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#F8F1E7] to-[#E8DCCB] text-[#2A060B] flex items-center justify-center mx-auto mb-6 shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#F8F1E7] font-bold block mb-2 font-mono">
              Inquiry Dispatched // Received
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#FDF9F0] mb-3">
              Thank You, {formData.fullName || 'Partner'}
            </h3>
            <p className="text-sm text-[#FDF9F0]/85 max-w-md mx-auto font-light leading-relaxed mb-8">
              We have received your contact details. Our team will contact you directly via email at <strong className="text-[#F8F1E7] font-medium">{formData.email}</strong> or phone within 24 hours.
            </p>

            <button
              id="submit-another-inquiry-btn"
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  fullName: '',
                  email: '',
                  phone: '',
                  companyOrBrand: '',
                  message: '',
                  serviceInterest: preselectedService || '',
                });
              }}
              className="px-7 py-3 rounded-full border border-[#F8F1E7] text-xs uppercase tracking-[0.2em] text-[#F8F1E7] hover:bg-[#F8F1E7] hover:text-[#2A060B] transition-colors cursor-pointer"
            >
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          <form
            id="contact-details-form"
            onSubmit={handleSubmit}
            className="p-8 sm:p-12 border-2 border-[#F8F1E7]/35 bg-[#1E0407]/85 shadow-2xl space-y-7 rounded-xs"
          >
            {/* Preselected service pill if applicable */}
            {formData.serviceInterest && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#F8F1E7]/40 bg-[#2A060B] text-xs text-[#F8F1E7] font-mono">
                <Sparkles className="w-3 h-3 text-[#F8F1E7]" />
                <span>Regarding: {formData.serviceInterest}</span>
              </div>
            )}

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label htmlFor="inquiry-full-name" className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#F8F1E7] font-medium font-mono">
                  <User className="w-3.5 h-3.5 text-[#F8F1E7]" />
                  <span>Full Name *</span>
                </label>
                <input
                  id="inquiry-full-name"
                  type="text"
                  required
                  placeholder="e.g. Julian Vane"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 bg-[#2A060B]/80 border border-[#F8F1E7]/40 text-sm text-[#FDF9F0] focus:outline-hidden focus:border-[#F8F1E7] placeholder:text-[#FDF9F0]/30 transition-colors"
                />
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <label htmlFor="inquiry-email" className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#F8F1E7] font-medium font-mono">
                  <Mail className="w-3.5 h-3.5 text-[#F8F1E7]" />
                  <span>Email Address *</span>
                </label>
                <input
                  id="inquiry-email"
                  type="email"
                  required
                  placeholder="julian@vaneandsons.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-[#2A060B]/80 border border-[#F8F1E7]/40 text-sm text-[#FDF9F0] focus:outline-hidden focus:border-[#F8F1E7] placeholder:text-[#FDF9F0]/30 transition-colors"
                />
              </div>

              {/* Phone / WhatsApp Number */}
              <div className="space-y-2">
                <label htmlFor="inquiry-phone" className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#F8F1E7] font-medium font-mono">
                  <Phone className="w-3.5 h-3.5 text-[#F8F1E7]" />
                  <span>Phone Number / WhatsApp *</span>
                </label>
                <input
                  id="inquiry-phone"
                  type="tel"
                  required
                  placeholder="+91 98765 43210 or +1 (555) 019-2834"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-[#2A060B]/80 border border-[#F8F1E7]/40 text-sm text-[#FDF9F0] focus:outline-hidden focus:border-[#F8F1E7] placeholder:text-[#FDF9F0]/30 transition-colors"
                />
              </div>

              {/* Company / Brand Name */}
              <div className="space-y-2">
                <label htmlFor="inquiry-company" className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#F8F1E7] font-medium font-mono">
                  <Building className="w-3.5 h-3.5 text-[#F8F1E7]" />
                  <span>Company / Brand Name</span>
                </label>
                <input
                  id="inquiry-company"
                  type="text"
                  placeholder="e.g. Vane & Sons London"
                  value={formData.companyOrBrand}
                  onChange={(e) => setFormData({ ...formData, companyOrBrand: e.target.value })}
                  className="w-full px-4 py-3 bg-[#2A060B]/80 border border-[#F8F1E7]/40 text-sm text-[#FDF9F0] focus:outline-hidden focus:border-[#F8F1E7] placeholder:text-[#FDF9F0]/30 transition-colors"
                />
              </div>
            </div>

            {/* Message / Project Note */}
            <div className="space-y-2 pt-2">
              <label htmlFor="inquiry-message" className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#F8F1E7] font-medium font-mono">
                <MessageSquare className="w-3.5 h-3.5 text-[#F8F1E7]" />
                <span>Message / Project Details (Optional)</span>
              </label>
              <textarea
                id="inquiry-message"
                rows={3}
                placeholder="Tell us briefly about what you are looking for, or any question you have..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-[#2A060B]/80 border border-[#F8F1E7]/40 text-sm text-[#FDF9F0] focus:outline-hidden focus:border-[#F8F1E7] placeholder:text-[#FDF9F0]/30 leading-relaxed transition-colors"
              />
            </div>

            {/* Form Footer Action */}
            <div className="pt-4 border-t border-[#F8F1E7]/25 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="flex items-center gap-2 text-xs text-[#F8F1E7]/80 font-mono">
                <ShieldCheck className="w-4 h-4 text-[#F8F1E7]" />
                <span>Your contact details are kept strictly private.</span>
              </div>

              <button
                id="submit-contact-details-btn"
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-9 py-3.5 rounded-full bg-gradient-to-r from-[#F8F1E7] via-[#FCF9F5] to-[#E8DCCB] text-[#2A060B] text-xs uppercase tracking-[0.2em] font-bold hover:shadow-xl hover:shadow-[#F8F1E7]/40 transition-all duration-300 shadow-xl flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending Details...</span>
                ) : (
                  <>
                    <span>Send Contact Details</span>
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
