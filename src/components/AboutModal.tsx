import React, { useEffect } from 'react';
import { X, GraduationCap, Gavel, Shield, MapPin, ArrowRight } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultation,
}) => {
  // Close on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/65 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white border border-[#E5DFD5] rounded-xl shadow-2xl p-5 sm:p-8 text-[#0B0B0B] my-auto max-h-[92vh] overflow-y-auto no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 text-neutral-400 hover:text-[#0B0B0B] transition-colors p-1.5 rounded-full hover:bg-neutral-100 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full overflow-hidden border border-neutral-300 shrink-0 bg-neutral-100 shadow-sm">
            <img
              src="/advocate-real.jpg"
              alt="Adv. Muhammad Ajmal KTV"
              className="w-full h-full object-cover object-[50%_25%] grayscale"
            />
          </div>

          <div>
            <span className="text-[10.5px] font-sans tracking-[0.25em] text-[#8C7A65] uppercase font-semibold">
              Curriculum Vitae & Chambers
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl text-[#0B0B0B] font-medium tracking-tight">
              Adv. Muhammad Ajmal KTV
            </h3>
            <p className="text-xs font-sans text-neutral-600 mt-0.5">
              Advocate • High Court of Kerala
            </p>
          </div>
        </div>

        {/* Narrative Biography */}
        <div className="space-y-4 text-xs sm:text-sm font-sans font-normal text-neutral-700 leading-relaxed border-t border-b border-neutral-200 py-5">
          <p>
            Adv. Muhammad Ajmal KTV is an independent litigating advocate practicing before the High Court of Kerala, District & Sessions Courts, and specialized statutory tribunals. He enrolled with the Bar Council of Kerala following his comprehensive legal education.
          </p>
          <p>
            Over eight years of courtroom practice, he has cultivated a formidable reputation for meticulous trial preparation, incisive pleadings, and persuasive oral advocacy. His chambers specialize in Criminal Defence (NDPS Act, POCSO & Sessions trials), Family & Matrimonial disputes, Cyber Crimes (IT Act & digital fraud), MACT accident claims, Medico-Legal negligence, strategic Legal Notice drafting, and alternative dispute resolution through Mediation.
          </p>
          <p>
            Every brief undertaken at the chambers receives uncompromised personal diligence, prioritizing practical, ethical, and commercially sensible solutions over protracted adversarial deadlocks.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-6">
          <div className="p-3.5 rounded-lg bg-[#FAF8F5] border border-[#EAE5DA] flex items-start gap-3 hover:border-[#C5A880] transition-colors">
            <GraduationCap className="w-5 h-5 text-[#8C7A65] shrink-0 mt-0.5" />
            <div>
              <span className="text-[11.5px] font-sans font-semibold text-[#0B0B0B] block">LL.B (Hons)</span>
              <span className="text-[10.5px] text-neutral-600">Premier Law College Alumni</span>
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-[#FAF8F5] border border-[#EAE5DA] flex items-start gap-3 hover:border-[#C5A880] transition-colors">
            <Shield className="w-5 h-5 text-[#8C7A65] shrink-0 mt-0.5" />
            <div>
              <span className="text-[11.5px] font-sans font-semibold text-[#0B0B0B] block">Bar Enrollment</span>
              <span className="text-[10.5px] text-neutral-600">Bar Council of Kerala (Roll No. K/1842/2016)</span>
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-[#FAF8F5] border border-[#EAE5DA] flex items-start gap-3 hover:border-[#C5A880] transition-colors">
            <Gavel className="w-5 h-5 text-[#8C7A65] shrink-0 mt-0.5" />
            <div>
              <span className="text-[11.5px] font-sans font-semibold text-[#0B0B0B] block">Active Practice</span>
              <span className="text-[10.5px] text-neutral-600">High Court of Kerala & Subordinate Judiciary</span>
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-[#FAF8F5] border border-[#EAE5DA] flex items-start gap-3 hover:border-[#C5A880] transition-colors">
            <MapPin className="w-5 h-5 text-[#8C7A65] shrink-0 mt-0.5" />
            <div>
              <span className="text-[11.5px] font-sans font-semibold text-[#0B0B0B] block">Chambers Address</span>
              <span className="text-[10.5px] text-neutral-600">High Court Junction, Ernakulam 682031</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-100">
          <span className="text-[11px] font-sans text-neutral-500">
            Strict adherence to Bar Council of India Standards
          </span>

          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#0B0B0B] text-white text-xs font-sans font-semibold tracking-wider uppercase hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer group active:scale-95"
          >
            <span>Book a Chamber Session</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
};
