import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Testimonial } from '../types';

interface TestimonialSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialSection: React.FC<TestimonialSectionProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slow subtle rotation (8 seconds) that pauses on hover
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length, isPaused]);

  const current = testimonials[currentIndex];

  return (
    <section
      className="bg-[#F5F2EA] text-[#0B0B0B] py-14 sm:py-20 lg:py-24 border-b border-[#0B0B0B]/10 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 min-[380px]:px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#0B0B0B]/60" />
              <span className="text-[10.5px] sm:text-[11px] font-sans tracking-[0.25em] text-[#0B0B0B] uppercase font-bold">
                Testimonial
              </span>
            </div>

            <h2 className="font-editorial text-2xl min-[400px]:text-3xl sm:text-4xl lg:text-5xl text-[#0B0B0B] font-medium tracking-tight">
              Client <br />
              Experiences
            </h2>

            <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm font-sans text-[#0B0B0B] font-medium max-w-xs leading-relaxed">
              Testimonials are published strictly in accordance with ethical transparency and prior client consent.
            </p>
          </div>

          {/* Right Column: Prominent Editorial Testimonial */}
          <div className="lg:col-span-8 flex flex-col justify-between min-h-[160px] sm:min-h-[200px]">
            <div className="relative">
              {/* Large Decorative Quotation Mark */}
              <span className="font-editorial text-5xl sm:text-7xl leading-none text-[#0B0B0B]/25 select-none block -mb-2 sm:-mb-4">
                “
              </span>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-2xl"
                >
                  <p className="font-editorial text-lg min-[400px]:text-xl sm:text-2xl md:text-3xl font-normal text-[#0B0B0B] leading-snug tracking-tight mb-3 sm:mb-4">
                    {current.quote}
                  </p>

                  <div className="flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-[#0B0B0B]/60" />
                    <span className="text-xs sm:text-[13px] font-sans font-semibold text-[#0B0B0B] tracking-wide">
                      {current.clientRole}
                    </span>
                    <span className="text-[10.5px] sm:text-[11px] font-sans text-[#0B0B0B]/85 font-medium">
                      • {current.caseType}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination Indicators */}
            <div className="flex items-center gap-2 mt-6 sm:mt-8">
              {testimonials.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    currentIndex === idx
                      ? 'w-6 h-2 bg-[#0B0B0B]'
                      : 'w-2 h-2 bg-[#0B0B0B]/25 hover:bg-[#0B0B0B]/50'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
