import React, { useState } from 'react';
import {
  Scale,
  Users,
  Laptop,
  Car,
  Stethoscope,
  FileText,
  Handshake,
  ArrowRight,
  ArrowLeft,
  LayoutGrid,
  SlidersHorizontal,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PracticeArea } from '../types';

interface PracticeAreasProps {
  practiceAreas: PracticeArea[];
  onSelectPracticeArea: (area: PracticeArea) => void;
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({
  practiceAreas,
  onSelectPracticeArea,
}) => {
  // Only the 7 cases given by the user
  const allUserCases = practiceAreas.slice(0, 7);

  // Slider view state: index of starting card (0 or 3)
  const [startIndex, setStartIndex] = useState<number>(0);
  const [activeCardId, setActiveCardId] = useState<string>(allUserCases[1]?.id || allUserCases[0]?.id || 'family-cases');
  // Option to view all 7 cards at once or in 4-card slider
  const [isGridMode, setIsGridMode] = useState<boolean>(false);

  const cardsPerPage = 4;
  const canGoPrev = startIndex > 0;
  const canGoNext = startIndex + cardsPerPage < allUserCases.length;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(allUserCases.length - cardsPerPage, prev + 1));
  };

  const displayedCards = isGridMode
    ? allUserCases
    : allUserCases.slice(startIndex, startIndex + cardsPerPage);

  const renderIcon = (iconName: PracticeArea['iconName'], isActive: boolean) => {
    const className = `w-6 h-6 transition-colors duration-300 ${
      isActive ? 'text-[#FFFFFF]' : 'text-[#0B0B0B]'
    }`;

    switch (iconName) {
      case 'scales':
        return <Scale className={className} strokeWidth={1.5} />;
      case 'users':
        return <Users className={className} strokeWidth={1.5} />;
      case 'laptop':
        return <Laptop className={className} strokeWidth={1.5} />;
      case 'car':
        return <Car className={className} strokeWidth={1.5} />;
      case 'stethoscope':
        return <Stethoscope className={className} strokeWidth={1.5} />;
      case 'file-text':
        return <FileText className={className} strokeWidth={1.5} />;
      case 'handshake':
        return <Handshake className={className} strokeWidth={1.5} />;
      default:
        return <Scale className={className} strokeWidth={1.5} />;
    }
  };

  return (
    <section
      id="practice-areas"
      className="bg-[#F5F2EA] text-[#0B0B0B] py-20 sm:py-28 relative border-b border-[#0B0B0B]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Left Column: Heading, Subtitle & Slider Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 flex flex-col justify-start text-left"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#0B0B0B]/40" />
              <span className="text-[11px] font-sans tracking-[0.25em] text-[#0B0B0B]/70 uppercase font-semibold">
                Practice Areas
              </span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#0B0B0B] leading-[1.12] tracking-tight font-medium">
              Areas of <br />
              Legal Expertise
            </h2>

            <p className="mt-4 text-xs sm:text-sm font-sans text-[#0B0B0B]/70 leading-relaxed font-light max-w-sm">
              Tailored advocacy built upon extensive precedent research, rigorous drafting, and courtroom poise.
            </p>

            {/* Slider Navigation & Mode Switcher Controls */}
            <div className="mt-8 pt-6 border-t border-[#0B0B0B]/15 flex items-center justify-between gap-4">
              {/* Prev / Next Buttons */}
              {!isGridMode ? (
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={handlePrev}
                    disabled={!canGoPrev}
                    aria-label="Previous practice areas"
                    className="w-9 h-9 rounded-full border border-[#0B0B0B]/20 flex items-center justify-center text-[#0B0B0B] hover:bg-[#0B0B0B] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer shadow-sm active:scale-95"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!canGoNext}
                    aria-label="Next practice areas"
                    className="w-9 h-9 rounded-full border border-[#0B0B0B]/20 flex items-center justify-center text-[#0B0B0B] hover:bg-[#0B0B0B] hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer shadow-sm active:scale-95"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <span className="text-[11px] font-sans text-[#0B0B0B]/60 tracking-wider ml-1">
                    {startIndex + 1}–{startIndex + displayedCards.length} of {allUserCases.length}
                  </span>
                </div>
              ) : (
                <span className="text-[11px] font-sans text-[#0B0B0B]/60 tracking-wider">
                  All {allUserCases.length} Disciplines
                </span>
              )}

              {/* View Toggle: Carousel vs All 7 Grid */}
              <button
                type="button"
                onClick={() => setIsGridMode(!isGridMode)}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-[#0B0B0B]/20 hover:border-[#0B0B0B] text-xs font-sans tracking-wide text-[#0B0B0B] transition-colors cursor-pointer"
              >
                {isGridMode ? (
                  <>
                    <SlidersHorizontal className="w-3.5 h-3.5" />
                    <span>Carousel View</span>
                  </>
                ) : (
                  <>
                    <LayoutGrid className="w-3.5 h-3.5" />
                    <span>View All 7</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Right Column: Practice Cards (Showing ONLY the user's cases in priority order) */}
          <div className="lg:col-span-8">
            <div
              className={`grid gap-4 sm:gap-4.5 ${
                isGridMode
                  ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                  : 'grid-cols-2 md:grid-cols-4'
              }`}
            >
              <AnimatePresence mode="popLayout">
                {displayedCards.map((area, index) => {
                  const isActive = activeCardId === area.id;

                  return (
                    <motion.div
                      key={area.id}
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.4, delay: index * 0.04 }}
                      onMouseEnter={() => setActiveCardId(area.id)}
                      onClick={() => onSelectPracticeArea(area)}
                      className={`group relative rounded-sm p-6 sm:p-7 flex flex-col justify-between min-h-[250px] sm:min-h-[280px] cursor-pointer transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isActive
                          ? 'bg-[#0B0B0B] text-white shadow-2xl scale-[1.02] border-[#0B0B0B]'
                          : 'bg-[#F5F2EA] text-[#0B0B0B] border border-[#0B0B0B]/20 hover:border-[#0B0B0B]/60 hover:shadow-lg'
                      }`}
                    >
                      {/* Top: Icon */}
                      <div className="flex items-start justify-between w-full">
                        <div className="p-1">
                          {renderIcon(area.iconName, isActive)}
                        </div>
                      </div>

                      {/* Bottom: Subtitle Tag, Title & Circle Arrow Button */}
                      <div className="mt-6 flex flex-col gap-2">
                        {/* Subtitle Tag */}
                        {area.subtitle && (
                          <span
                            className={`text-[9px] sm:text-[9.5px] font-sans uppercase tracking-[0.14em] font-semibold leading-tight line-clamp-2 transition-colors duration-300 ${
                              isActive ? 'text-[#F5F2EA]/75' : 'text-[#0B0B0B]/60'
                            }`}
                          >
                            {area.subtitle}
                          </span>
                        )}

                        {/* Main Title in Serif */}
                        <h3
                          className={`font-editorial text-lg sm:text-xl font-medium tracking-tight leading-snug transition-colors duration-300 ${
                            isActive ? 'text-white' : 'text-[#0B0B0B]'
                          }`}
                        >
                          {area.title}
                        </h3>

                        {/* Circular Arrow Button */}
                        <div className="pt-2">
                          <div
                            className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                              isActive
                                ? 'border-white/30 bg-white/10 text-white translate-x-1'
                                : 'border-[#0B0B0B]/20 text-[#0B0B0B] group-hover:border-[#0B0B0B] group-hover:translate-x-1'
                            }`}
                          >
                            <ArrowRight className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Mobile Swipe / Pagination Dots Indicator */}
            {!isGridMode && (
              <div className="flex items-center justify-center gap-1.5 mt-6 lg:hidden">
                {allUserCases.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx >= startIndex && idx < startIndex + displayedCards.length
                        ? 'w-5 bg-[#0B0B0B]'
                        : 'w-1.5 bg-[#0B0B0B]/25'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
