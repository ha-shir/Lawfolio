import React from 'react';
import { X, GraduationCap, Gavel, Award, Shield, MapPin, CheckCircle2 } from 'lucide-react';

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
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#0B0B0B] border border-white/20 rounded-sm shadow-2xl p-6 sm:p-9 text-white my-8 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-white/50 hover:text-white transition-colors p-1"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full overflow-hidden border border-white/20 shrink-0 bg-[#0B0B0B]">
            <img
              src="/advocate-real.jpg"
              alt="Adv. Muhammad Ajmal KTV"
              className="w-full h-full object-cover object-[50%_25%] grayscale"
            />
          </div>

          <div>
            <span className="text-[10px] font-sans tracking-[0.25em] text-[#A5A5A5] uppercase font-semibold">
              Curriculum Vitae & Chambers
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl text-white font-medium tracking-tight">
              Adv. Muhammad Ajmal KTV
            </h3>
            <p className="text-xs font-sans text-[#F5F2EA]/80 mt-0.5">
              Advocate • High Court of Kerala
            </p>
          </div>
        </div>

        {/* Narrative Biography */}
        <div className="space-y-4 text-xs sm:text-sm font-sans font-light text-white/80 leading-relaxed border-t border-b border-white/10 py-5">
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
          <div className="p-3.5 rounded-sm bg-[#151515] border border-white/10 flex items-start gap-3">
            <GraduationCap className="w-5 h-5 text-[#F5F2EA] shrink-0 mt-0.5" />
            <div>
              <span className="text-[11px] font-sans font-medium text-white block">LL.B (Hons)</span>
              <span className="text-[10px] text-[#A5A5A5]">Premier Law College Alumni</span>
            </div>
          </div>

          <div className="p-3.5 rounded-sm bg-[#151515] border border-white/10 flex items-start gap-3">
            <Shield className="w-5 h-5 text-[#F5F2EA] shrink-0 mt-0.5" />
            <div>
              <span className="text-[11px] font-sans font-medium text-white block">Bar Enrollment</span>
              <span className="text-[10px] text-[#A5A5A5]">Bar Council of Kerala (Roll No. K/1842/2016)</span>
            </div>
          </div>

          <div className="p-3.5 rounded-sm bg-[#151515] border border-white/10 flex items-start gap-3">
            <Gavel className="w-5 h-5 text-[#F5F2EA] shrink-0 mt-0.5" />
            <div>
              <span className="text-[11px] font-sans font-medium text-white block">Active Practice</span>
              <span className="text-[10px] text-[#A5A5A5]">High Court of Kerala & Subordinate Judiciary</span>
            </div>
          </div>

          <div className="p-3.5 rounded-sm bg-[#151515] border border-white/10 flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#F5F2EA] shrink-0 mt-0.5" />
            <div>
              <span className="text-[11px] font-sans font-medium text-white block">Chambers Address</span>
              <span className="text-[10px] text-[#A5A5A5]">High Court Junction, Ernakulam 682031</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[11px] font-sans text-[#A5A5A5]">
            Strict adherence to Bar Council of India Standards
          </span>

          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-sm bg-[#F5F2EA] text-[#0B0B0B] text-xs font-sans font-semibold tracking-wider uppercase hover:bg-white transition-colors"
          >
            Book a Chamber Session →
          </button>
        </div>

      </div>
    </div>
  );
};
