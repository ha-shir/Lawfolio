import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface FinalConsultationCTAProps {
  onOpenConsultation: () => void;
}

export const FinalConsultationCTA: React.FC<FinalConsultationCTAProps> = ({
  onOpenConsultation,
}) => {
  return (
    <section className="relative bg-[#0B0B0B] text-white py-20 sm:py-28 overflow-hidden border-b border-white/10">
      {/* Subtle Monochrome Law Books Image on Left with Seamless Blend */}
      <div className="absolute left-0 top-0 bottom-0 w-full sm:w-1/2 lg:w-2/5 overflow-hidden pointer-events-none opacity-30 sm:opacity-40">
        <img
          src="/law-books.jpg"
          alt="Classical Law Library Volumes"
          className="w-full h-full object-cover grayscale contrast-125 brightness-75"
        />
        {/* Gradients blending image into the deep black background */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0B0B0B]/70 to-[#0B0B0B]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-[#0B0B0B]" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center"
          >
            <span className="text-[11px] font-sans tracking-[0.25em] text-[#A5A5A5] uppercase font-medium mb-3">
              Confidential & Ethical Counsel
            </span>

            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-white font-medium tracking-tight mb-4">
              Need Legal Guidance?
            </h2>

            <p className="text-sm sm:text-base font-sans text-[#A5A5A5] font-light max-w-md mb-8">
              Schedule a consultation to discuss your legal concerns.
            </p>

            {/* Inverting Button: Ivory to Transparent with Ivory Border on Hover */}
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-sm bg-[#F5F2EA] text-[#0B0B0B] border border-[#F5F2EA] text-xs sm:text-[13px] tracking-wider uppercase font-sans font-semibold hover:bg-transparent hover:text-[#F5F2EA] transition-all duration-300 group cursor-pointer shadow-lg active:scale-98"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
