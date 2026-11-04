import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaseStudy } from '../types';

interface SelectedCasesProps {
  cases: CaseStudy[];
  onSelectCase: (caseItem: CaseStudy) => void;
}

export const SelectedCases: React.FC<SelectedCasesProps> = ({ cases, onSelectCase }) => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? Math.max(0, cases.length - itemsPerPage) : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + itemsPerPage >= cases.length ? 0 : prev + 1));
  };

  const visibleCases = cases.slice(startIndex, startIndex + itemsPerPage);
  // If fewer than 3 remain at end, wrap around
  if (visibleCases.length < itemsPerPage && cases.length >= itemsPerPage) {
    visibleCases.push(...cases.slice(0, itemsPerPage - visibleCases.length));
  }

  return (
    <section id="cases" className="bg-[#0B0B0B] text-white py-14 sm:py-20 lg:py-28 border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 min-[380px]:px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Heading and Description */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <div className="flex items-center gap-3 mb-3.5">
              <span className="text-[10.5px] sm:text-[11px] font-sans tracking-[0.25em] text-[#A5A5A5] uppercase font-semibold">
                Selected Cases
              </span>
            </div>

            <h2 className="font-editorial text-2xl min-[400px]:text-3xl sm:text-4xl lg:text-5xl text-white font-medium tracking-tight mb-3 sm:mb-4">
              Notable Cases
            </h2>

            <p className="text-xs sm:text-sm font-sans text-[#A5A5A5] font-light leading-relaxed max-w-sm mb-5 sm:mb-6">
              Anonymized legal briefs illustrating strategic courtroom representation, dispute mediation, and procedural precision.
            </p>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-3 pt-1 sm:pt-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous case"
                className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-all cursor-pointer hover:bg-white/5 active:scale-95"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next case"
                className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-all cursor-pointer hover:bg-white/5 active:scale-95"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: 3 Cases in Horizontal Layout */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <AnimatePresence mode="popLayout">
                {visibleCases.map((caseItem, idx) => (
                  <motion.div
                    key={`${caseItem.id}-${startIndex}-${idx}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.45, delay: idx * 0.08 }}
                    onClick={() => onSelectCase(caseItem)}
                    className="group relative bg-[#151515] hover:bg-[#1A1A1A] border border-white/10 hover:border-white/30 rounded-sm p-4.5 min-[380px]:p-5 sm:p-7 flex flex-col justify-between min-h-[190px] min-[380px]:min-h-[200px] sm:min-h-[220px] transition-all duration-300 cursor-pointer shadow-lg hover:shadow-black/60"
                  >
                    <div>
                      {/* Category Label */}
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <span className="text-[9.5px] sm:text-[10px] font-sans tracking-[0.2em] uppercase text-[#A5A5A5] group-hover:text-white transition-colors">
                          {caseItem.category}
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>

                      {/* Case Short Summary */}
                      <p className="text-xs sm:text-sm font-sans text-white/80 group-hover:text-white font-light leading-relaxed">
                        {caseItem.shortDescription}
                      </p>
                    </div>

                    {/* Bottom Status / Jurisdiction */}
                    <div className="pt-4 sm:pt-6 border-t border-white/10 flex items-center justify-between text-[10.5px] sm:text-[11px] text-[#A5A5A5]">
                      <span>{caseItem.jurisdiction.split('&')[0]}</span>
                      <span className="text-xs text-[#F5F2EA] group-hover:underline">Read Brief →</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
