import React, { useEffect } from 'react';
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
  // Close on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (practiceArea) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [practiceArea, onClose]);

  if (!practiceArea) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/65 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-white border border-[#E5DFD5] rounded-xl shadow-2xl p-5 sm:p-8 text-[#0B0B0B] my-auto max-h-[92vh] overflow-y-auto no-scrollbar"
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
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10.5px] font-sans tracking-[0.25em] text-[#8C7A65] uppercase font-semibold">
              Practice Area {practiceArea.number}
            </span>
          </div>
          <h3 className="font-editorial text-2xl sm:text-3xl text-[#0B0B0B] font-medium tracking-tight">
            {practiceArea.title}
          </h3>
          <p className="text-xs sm:text-sm font-sans text-neutral-600 mt-2.5 font-normal leading-relaxed">
            {practiceArea.extendedDescription}
          </p>
        </div>

        {/* Key Services List */}
        <div className="mb-8">
          <h4 className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#0B0B0B] font-semibold mb-3.5">
            Core Legal Representation
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {practiceArea.keyServices.map((service) => (
              <div
                key={service}
                className="flex items-center gap-2.5 p-3 rounded-lg bg-[#FAF8F5] border border-[#EAE5DA] text-xs font-sans text-neutral-800 font-medium hover:border-[#C5A880] transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-[#8C7A65] shrink-0" />
                <span className="leading-snug">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-neutral-300 text-xs font-sans tracking-wider uppercase text-neutral-700 hover:text-black hover:border-black hover:bg-neutral-50 transition-all font-medium cursor-pointer"
          >
            Close
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenConsultationWithArea(practiceArea.title);
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#0B0B0B] text-white text-xs font-sans font-semibold tracking-wider uppercase hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer group active:scale-95"
          >
            <span>Consult on {practiceArea.title}</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
