import React from 'react';
import { X, Calendar, Clock, BookOpen, ArrowRight } from 'lucide-react';
import { Article } from '../types';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onOpenConsultation,
}) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#0B0B0B] border border-white/20 rounded-sm shadow-2xl text-white my-8 max-h-[90vh] overflow-y-auto">
        
        {/* Top Image Banner */}
        <div className="relative aspect-[21/9] bg-[#151515] overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover grayscale contrast-125 brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] to-transparent" />

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/60 backdrop-blur text-white/70 hover:text-white p-1.5 rounded-full border border-white/20 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-sans text-[#A5A5A5] mb-3">
            <span className="uppercase tracking-widest text-[#F5F2EA] font-semibold">
              {article.category}
            </span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{article.date}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h2 className="font-editorial text-2xl sm:text-3xl text-white font-medium tracking-tight mb-4 leading-tight">
            {article.title}
          </h2>

          <div className="w-12 h-[1px] bg-white/20 mb-6" />

          {/* Paragraphs */}
          <div className="space-y-4 text-xs sm:text-sm font-sans font-light text-white/80 leading-relaxed">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            <p className="pt-2 text-white/70 italic font-editorial text-base">
              “Procedural vigilance at the inception of a legal controversy is often the decisive factor between prolonged stalemate and swift resolution.” — Adv. Arjun Menon
            </p>
          </div>

          {/* Footer CTA */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-sans text-[#A5A5A5]">
              Facing an issue relating to {article.category.toLowerCase()}?
            </span>

            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="w-full sm:w-auto px-5 py-2.5 bg-[#F5F2EA] text-[#0B0B0B] text-xs font-sans font-semibold tracking-wider uppercase rounded-sm hover:bg-white transition-colors flex items-center justify-center gap-2"
            >
              <span>Request Advice</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#0B0B0B]" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
