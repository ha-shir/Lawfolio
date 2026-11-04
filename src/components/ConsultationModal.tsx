import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle2, AlertCircle, ArrowRight, Shield } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ConsultationFormData } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPracticeArea?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedPracticeArea,
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    phone: '',
    email: '',
    practiceArea: preselectedPracticeArea || 'Criminal Cases (NDPS, POCSO & All Types)',
    preferredDate: '',
    preferredTime: '10:30 AM',
    summary: '',
    acknowledgement: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submittedWaUrl, setSubmittedWaUrl] = useState<string>('');

  // Close on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleReset();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Validation
    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit contact telephone number.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please enter a valid email address for appointment confirmation.');
      return;
    }
    if (!formData.preferredDate) {
      setErrorMsg('Please choose your preferred consultation date.');
      return;
    }

    setIsSubmitting(true);

    // Format all inquiry details for Adv. Muhammad Ajmal KTV (+91 80751 10582) WhatsApp
    const targetWhatsAppNumber = '918075110582';
    const waMessage =
      `*NEW LEGAL CONSULTATION REQUEST*\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `*Client Name:* ${formData.fullName.trim()}\n` +
      `*Contact Phone:* ${formData.phone.trim()}\n` +
      `*Email:* ${formData.email.trim()}\n` +
      `*Practice Area:* ${formData.practiceArea}\n` +
      `*Preferred Date:* ${formData.preferredDate}\n` +
      `*Preferred Time:* ${formData.preferredTime}\n` +
      `*Case Overview:* ${formData.summary.trim() || 'None provided'}\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `🏛️ _Chambers of Adv. Muhammad Ajmal KTV (High Court of Kerala)_`;

    const generatedWaUrl = `https://wa.me/${targetWhatsAppNumber}?text=${encodeURIComponent(waMessage)}`;
    setSubmittedWaUrl(generatedWaUrl);

    // Forward to WhatsApp & show confirmation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        window.open(generatedWaUrl, '_blank', 'noopener,noreferrer');
      } catch (err) {
        // Fallback available via direct button on success screen
      }
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#0B0B0B', '#C5A880', '#D4AF37', '#766A59'],
        });
      } catch (err) {
        // Safe fallback
      }
    }, 800);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/65 backdrop-blur-sm transition-opacity"
      onClick={handleReset}
    >
      <div
        className="relative w-full max-w-xl bg-white border border-[#E5DFD5] rounded-xl shadow-2xl p-5 sm:p-8 text-[#0B0B0B] my-auto max-h-[92vh] overflow-y-auto no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleReset}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 text-neutral-400 hover:text-[#0B0B0B] transition-colors p-1.5 rounded-full hover:bg-neutral-100 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-6 sm:py-8 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-4 text-emerald-600 shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-[11px] font-sans tracking-[0.25em] text-emerald-800 uppercase font-semibold">
              Appointment Requested
            </span>

            <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-[#0B0B0B] mt-2 mb-2">
              Consultation Scheduled
            </h3>

            <p className="text-xs sm:text-sm font-sans text-neutral-600 max-w-md font-normal leading-relaxed mb-5">
              Thank you, <span className="text-[#0B0B0B] font-semibold">{formData.fullName}</span>. Your consultation request has been forwarded directly to <span className="text-[#0B0B0B] font-semibold">Adv. Muhammad Ajmal KTV (+91 80751 10582)</span> via WhatsApp. You will receive an official confirmation call and email at <span className="text-[#0B0B0B] font-medium">{formData.email}</span> within 4 business hours.
            </p>

            <div className="w-full bg-[#FAF8F5] border border-[#EAE5DA] rounded-lg p-3.5 text-xs font-sans text-left mb-5 space-y-2">
              <div className="flex justify-between">
                <span className="text-neutral-500 font-medium">Matter:</span>
                <span className="text-neutral-900 font-medium">{formData.practiceArea}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500 font-medium">Date & Time:</span>
                <span className="text-neutral-900 font-medium">{formData.preferredDate} at {formData.preferredTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500 font-medium">Direct WhatsApp:</span>
                <span className="text-emerald-700 font-semibold">+91 80751 10582</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500 font-medium">Chamber Location:</span>
                <span className="text-neutral-900 font-medium">High Court Junction, Ernakulam</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500 font-medium">Confidentiality:</span>
                <span className="text-emerald-700 font-semibold">Protected under Section 126 IEA</span>
              </div>
            </div>

            <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3">
              {submittedWaUrl && (
                <a
                  href={submittedWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-sans font-semibold tracking-wider uppercase transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M17.507 14.307l-.009.075c-.238-.12-1.406-.694-1.624-.774-.219-.079-.378-.119-.537.12-.159.239-.616.774-.755.934-.139.159-.279.179-.517.06-.239-.12-1.009-.372-1.923-1.187-.711-.634-1.191-1.417-1.331-1.656-.139-.239-.015-.368.105-.487.108-.107.239-.279.359-.418.12-.14.159-.239.239-.399.079-.159.04-.299-.02-.418-.06-.12-.538-1.296-.737-1.774-.194-.467-.392-.403-.538-.411-.139-.007-.299-.009-.458-.009-.16 0-.418.06-.637.299-.219.239-.837.818-.837 1.994 0 1.176.857 2.312.977 2.472.12.159 1.687 2.576 4.088 3.613.571.247 1.017.394 1.365.505.574.182 1.096.156 1.509.094.46-.069 1.406-.575 1.605-1.131.199-.556.199-1.032.14-1.131-.06-.099-.22-.159-.459-.278zM12.042 21.758h-.008c-1.724 0-3.415-.464-4.893-1.343l-.351-.208-3.642.955.972-3.551-.228-.363c-.966-1.536-1.476-3.315-1.476-5.143 0-5.378 4.377-9.755 9.759-9.755 2.606 0 5.056 1.016 6.899 2.859 1.843 1.844 2.858 4.294 2.858 6.9 0 5.38-4.377 9.756-9.759 9.756zm0-17.758c-4.409 0-7.997 3.588-7.997 7.997 0 1.517.426 2.999 1.233 4.283l.19.303-.578 2.11 2.164-.567.292.173c1.238.735 2.658 1.124 4.114 1.124 4.409 0 7.997-3.588 7.997-7.997 0-4.409-3.588-7.997-7.997-7.997zM12.042 2C6.42 2 1.847 6.573 1.847 12.196c0 1.868.51 3.684 1.476 5.275L2 23.5l6.216-1.3c1.538.839 3.272 1.282 5.042 1.282 5.622 0 10.196-4.574 10.196-10.197 0-2.723-1.061-5.283-2.987-7.21C18.542 4.148 15.982 2 12.042 2z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              )}

              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto px-7 py-3 rounded-lg bg-[#0B0B0B] text-white text-xs font-sans font-semibold tracking-wider uppercase hover:bg-neutral-800 transition-colors shadow-md cursor-pointer active:scale-95"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10.5px] font-sans tracking-[0.25em] text-[#8C7A65] uppercase font-semibold">
                  Chambers of Adv. Muhammad Ajmal KTV
                </span>
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#0B0B0B] font-medium tracking-tight">
                Schedule a Consultation
              </h3>
              <p className="text-xs sm:text-sm font-sans text-neutral-600 mt-1 font-normal">
                Direct preliminary case evaluation and legal strategy guidance.
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-[0.14em] text-neutral-700 font-semibold mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ramesh Varma"
                    className="w-full bg-[#FAF8F5] border border-[#D5CFBF] focus:border-[#0B0B0B] focus:bg-white rounded-lg px-3.5 py-2.5 text-sm text-[#0B0B0B] placeholder-neutral-400 focus:outline-none transition-all shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-[0.14em] text-neutral-700 font-semibold mb-1.5">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 80751 10582"
                    className="w-full bg-[#FAF8F5] border border-[#D5CFBF] focus:border-[#0B0B0B] focus:bg-white rounded-lg px-3.5 py-2.5 text-sm text-[#0B0B0B] placeholder-neutral-400 focus:outline-none transition-all shadow-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-[0.14em] text-neutral-700 font-semibold mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full bg-[#FAF8F5] border border-[#D5CFBF] focus:border-[#0B0B0B] focus:bg-white rounded-lg px-3.5 py-2.5 text-sm text-[#0B0B0B] placeholder-neutral-400 focus:outline-none transition-all shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-[0.14em] text-neutral-700 font-semibold mb-1.5">
                    Practice Area
                  </label>
                  <select
                    value={formData.practiceArea}
                    onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#D5CFBF] focus:border-[#0B0B0B] focus:bg-white rounded-lg px-3 py-2.5 text-sm text-[#0B0B0B] focus:outline-none transition-all shadow-sm cursor-pointer"
                  >
                    <option value="Criminal Cases (NDPS, POCSO & All Types)">Criminal Cases (NDPS, POCSO & All Types)</option>
                    <option value="Family Cases (Matrimonial & Custody)">Family Cases (Matrimonial & Custody)</option>
                    <option value="Cyber Crimes & IT Act">Cyber Crimes & IT Act</option>
                    <option value="MACT Cases (Motor Accident Claims)">MACT Cases (Motor Accident Claims)</option>
                    <option value="Medical Legal Cases">Medical Legal Cases</option>
                    <option value="Legal Notice Drafting & Response">Legal Notice Drafting & Response</option>
                    <option value="Mediation & Dispute Settlement">Mediation & Dispute Settlement</option>
                    <option value="General Legal Advisory">General Legal Advisory</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-[0.14em] text-neutral-700 font-semibold mb-1.5">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#D5CFBF] focus:border-[#0B0B0B] focus:bg-white rounded-lg px-3.5 py-2.5 text-sm text-[#0B0B0B] focus:outline-none transition-all shadow-sm [color-scheme:light]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-[0.14em] text-neutral-700 font-semibold mb-1.5">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#D5CFBF] focus:border-[#0B0B0B] focus:bg-white rounded-lg px-3 py-2.5 text-sm text-[#0B0B0B] focus:outline-none transition-all shadow-sm cursor-pointer"
                  >
                    <option value="10:00 AM">10:00 AM - Morning Chamber</option>
                    <option value="11:30 AM">11:30 AM - Morning Chamber</option>
                    <option value="02:30 PM">02:30 PM - Post-Court Session</option>
                    <option value="04:30 PM">04:30 PM - Evening Consultation</option>
                    <option value="06:00 PM">06:00 PM - Evening Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.14em] text-neutral-700 font-semibold mb-1.5">
                  Brief Overview of Matter (Optional & Confidential)
                </label>
                <textarea
                  rows={3}
                  value={formData.summary}
                  onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                  placeholder="Outline key facts or court notices received..."
                  className="w-full bg-[#FAF8F5] border border-[#D5CFBF] focus:border-[#0B0B0B] focus:bg-white rounded-lg p-3 text-sm text-[#0B0B0B] placeholder-neutral-400 focus:outline-none transition-all resize-none shadow-sm"
                />
              </div>

              {/* Ethical notice */}
              <div className="flex items-start gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="ethical-check"
                  checked={formData.acknowledgement}
                  onChange={(e) => setFormData({ ...formData, acknowledgement: e.target.checked })}
                  className="mt-1 rounded border-neutral-400 text-[#0B0B0B] focus:ring-0 cursor-pointer accent-[#0B0B0B]"
                />
                <label htmlFor="ethical-check" className="text-[11px] font-sans text-neutral-600 cursor-pointer leading-normal">
                  I understand that this consultation request is governed by advocate confidentiality rules and does not create an advocate-client relationship until mutually agreed.
                </label>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#0B0B0B] text-white text-xs font-sans font-semibold tracking-wider uppercase rounded-lg hover:bg-neutral-800 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-md active:scale-95 group"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Confirm & Book Consultation</span>
                      <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
