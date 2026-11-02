import React, { useState } from 'react';
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

    // Simulate reliable API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#F5F2EA', '#D4AF37', '#FFFFFF', '#0B0B0B'],
        });
      } catch (err) {
        // Safe fallback
      }
    }, 1000);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md transition-opacity">
      <div className="relative w-full max-w-xl bg-[#0B0B0B] border border-white/20 rounded-sm shadow-2xl p-6 sm:p-9 text-white my-8">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={handleReset}
          className="absolute top-5 right-5 text-white/50 hover:text-white transition-colors p-1"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-[#F5F2EA]/10 border border-[#F5F2EA]/40 flex items-center justify-center mb-5 text-[#F5F2EA]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-[11px] font-sans tracking-[0.25em] text-[#A5A5A5] uppercase">
              Appointment Requested
            </span>

            <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-white mt-2 mb-3">
              Consultation Scheduled
            </h3>

            <p className="text-sm font-sans text-[#A5A5A5] max-w-md font-light leading-relaxed mb-6">
              Thank you, <span className="text-white font-medium">{formData.fullName}</span>. Our chambers office has received your request for <span className="text-white font-medium">{formData.preferredDate}</span> at <span className="text-white font-medium">{formData.preferredTime}</span>. You will receive an official confirmation call and email at <span className="text-white">{formData.email}</span> within 4 business hours.
            </p>

            <div className="w-full bg-[#151515] border border-white/10 rounded-sm p-4 text-xs font-sans text-left mb-6 space-y-1.5">
              <div className="flex justify-between">
                <span className="text-[#A5A5A5]">Matter:</span>
                <span className="text-white">{formData.practiceArea}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#A5A5A5]">Chamber Location:</span>
                <span className="text-white">High Court Junction, Ernakulam</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#A5A5A5]">Confidentiality:</span>
                <span className="text-emerald-400">Protected under Section 126 IEA</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-2.5 rounded-sm bg-[#F5F2EA] text-[#0B0B0B] text-xs font-sans font-semibold tracking-wider uppercase hover:bg-white transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-sans tracking-[0.25em] text-[#A5A5A5] uppercase font-semibold">
                  Chambers of Adv. Muhammad Ajmal KTV
                </span>
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl text-white font-medium tracking-tight">
                Schedule a Consultation
              </h3>
              <p className="text-xs sm:text-sm font-sans text-[#A5A5A5] mt-1 font-light">
                Direct preliminary case evaluation and legal strategy guidance.
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 rounded-sm bg-red-950/40 border border-red-800/40 text-red-200 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-wider text-[#A5A5A5] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ramesh Varma"
                    className="w-full bg-[#151515] border border-white/15 focus:border-[#F5F2EA] rounded-sm px-3.5 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-wider text-[#A5A5A5] mb-1.5">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98470 00000"
                    className="w-full bg-[#151515] border border-white/15 focus:border-[#F5F2EA] rounded-sm px-3.5 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-wider text-[#A5A5A5] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full bg-[#151515] border border-white/15 focus:border-[#F5F2EA] rounded-sm px-3.5 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-wider text-[#A5A5A5] mb-1.5">
                    Practice Area
                  </label>
                  <select
                    value={formData.practiceArea}
                    onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                    className="w-full bg-[#151515] border border-white/15 focus:border-[#F5F2EA] rounded-sm px-3 py-2.5 text-sm text-white focus:outline-none transition-colors"
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
                  <label className="block text-[11px] font-sans uppercase tracking-wider text-[#A5A5A5] mb-1.5">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-[#151515] border border-white/15 focus:border-[#F5F2EA] rounded-sm px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors [color-scheme:dark]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-wider text-[#A5A5A5] mb-1.5">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full bg-[#151515] border border-white/15 focus:border-[#F5F2EA] rounded-sm px-3 py-2.5 text-sm text-white focus:outline-none transition-colors"
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
                <label className="block text-[11px] font-sans uppercase tracking-wider text-[#A5A5A5] mb-1.5">
                  Brief Overview of Matter (Optional & Confidential)
                </label>
                <textarea
                  rows={3}
                  value={formData.summary}
                  onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                  placeholder="Outline key facts or court notices received..."
                  className="w-full bg-[#151515] border border-white/15 focus:border-[#F5F2EA] rounded-sm p-3 text-sm text-white placeholder-white/20 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Ethical notice */}
              <div className="flex items-start gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="ethical-check"
                  checked={formData.acknowledgement}
                  onChange={(e) => setFormData({ ...formData, acknowledgement: e.target.checked })}
                  className="mt-1 rounded border-white/30 text-[#0B0B0B] focus:ring-0 cursor-pointer"
                />
                <label htmlFor="ethical-check" className="text-[11px] font-sans text-[#A5A5A5] cursor-pointer">
                  I understand that this consultation request is governed by advocate confidentiality rules and does not create an advocate-client relationship until mutually agreed.
                </label>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#F5F2EA] text-[#0B0B0B] text-xs font-sans font-semibold tracking-wider uppercase rounded-sm hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-[#0B0B0B] border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Confirm & Book Consultation</span>
                      <ArrowRight className="w-4 h-4 text-[#0B0B0B]" />
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
