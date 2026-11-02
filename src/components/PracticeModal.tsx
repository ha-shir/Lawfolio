import React from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { PracticeArea } from '../types';

interface PracticeModalProps {
  practiceArea: PracticeArea | null;
  onClose: () => void;
  onOpenConsultationWithArea: (areaTitle: string) => void;
}

export const PracticeModal: React.FC<PracticeModalProps> = ({
  practiceArea,
  onClose,
  onOpenConsultationWithArea,
}) => {
  if (!practiceArea) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-xl bg-[#0B0B0B] border border-white/20 rounded-sm shadow-2xl p-6 sm:p-9 text-white my-8">
        
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
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-sans tracking-[0.25em] text-[#A5A5A5] uppercase font-semibold">
              Practice Area {practiceArea.number}
            </span>
          </div>
          <h3 className="font-editorial text-2xl sm:text-3xl text-white font-medium tracking-tight">
            {practiceArea.title}
          </h3>
          <p className="text-xs sm:text-sm font-sans text-[#A5A5A5] mt-2 font-light leading-relaxed">
            {practiceArea.extendedDescription}
          </p>
        </div>

        {/* Key Services List */}
        <div className="mb-8">
          <h4 className="text-[11px] font-sans uppercase tracking-widest text-[#F5F2EA] mb-3">
            Core Legal Representation
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {practiceArea.keyServices.map((service) => (
              <div
                key={service}
                className="flex items-center gap-2.5 p-3 rounded-sm bg-[#151515] border border-white/10 text-xs font-sans text-white/90"
              >
                <CheckCircle2 className="w-4 h-4 text-[#F5F2EA] shrink-0" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-sm border border-white/20 text-xs font-sans tracking-wider uppercase text-white/70 hover:text-white transition-colors"
          >
            Close
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenConsultationWithArea(practiceArea.title);
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-sm bg-[#F5F2EA] text-[#0B0B0B] text-xs font-sans font-semibold tracking-wider uppercase hover:bg-white transition-colors flex items-center justify-center gap-2"
          >
            <span>Consult on {practiceArea.title}</span>
            <ArrowRight className="w-4 h-4 text-[#0B0B0B]" />
          </button>
        </div>

      </div>
    </div>
  );
};
