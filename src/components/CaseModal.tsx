import React from 'react';
import { X, Scale, FileText, CheckCircle } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseModalProps {
  caseItem: CaseStudy | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const CaseModal: React.FC<CaseModalProps> = ({
  caseItem,
  onClose,
  onOpenConsultation,
}) => {
  if (!caseItem) return null;

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

        {/* Category & Jurisdiction */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-sans tracking-[0.25em] text-[#A5A5A5] uppercase font-semibold">
              {caseItem.category}
            </span>
            <span className="text-[#A5A5A5]">•</span>
            <span className="text-[10px] font-sans tracking-wider text-[#F5F2EA] uppercase">
              {caseItem.jurisdiction}
            </span>
          </div>

          <h3 className="font-editorial text-2xl sm:text-3xl text-white font-medium tracking-tight">
            {caseItem.title}
          </h3>
        </div>

        {/* Sections */}
        <div className="space-y-6 text-xs sm:text-sm font-sans font-light leading-relaxed">
          {/* Brief Background */}
          <div>
            <h4 className="text-[11px] font-sans uppercase tracking-widest text-[#F5F2EA] font-semibold mb-2">
              Context & Dispute
            </h4>
            <p className="text-[#A5A5A5] bg-[#151515] p-4 rounded-sm border border-white/10">
              {caseItem.fullOverview}
            </p>
          </div>

          {/* Legal Strategy */}
          <div>
            <h4 className="text-[11px] font-sans uppercase tracking-widest text-[#F5F2EA] font-semibold mb-2">
              Legal Strategy & Precedent Analysis
            </h4>
            <p className="text-white/90">
              {caseItem.strategy}
            </p>
          </div>

          {/* Outcome */}
          <div>
            <h4 className="text-[11px] font-sans uppercase tracking-widest text-emerald-400 font-semibold mb-2 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4" />
              Outcome & Judicial Resolution
            </h4>
            <p className="text-white/90">
              {caseItem.outcome}
            </p>
          </div>
        </div>

        {/* Ethics Disclaimer */}
        <div className="mt-8 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-sans text-[#A5A5A5]/60 max-w-sm text-left">
            Note: Client identities and identifying details have been strictly anonymized pursuant to Bar Council standards and attorney-client privilege.
          </p>

          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-sm bg-[#F5F2EA] text-[#0B0B0B] text-xs font-sans font-semibold tracking-wider uppercase hover:bg-white transition-colors"
          >
            Discuss Your Case →
          </button>
        </div>

      </div>
    </div>
  );
};
