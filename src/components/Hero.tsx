import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenConsultation: () => void;
  onOpenVideo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onOpenVideo }) => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen bg-black text-white flex items-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden"
    >
      {/* Background Architectural Ambiance & Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft slow-moving ambient light radial */}
        <motion.div
          animate={{
            opacity: [0.04, 0.1, 0.04],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-white/15 via-[#F5F2EA]/10 to-transparent rounded-full blur-[140px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Typography & CTAs (6 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center text-left max-w-2xl relative z-20"
          >
            {/* Small uppercase label */}
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <span className="text-[11px] sm:text-xs font-sans tracking-[0.28em] text-[#A5A5A5] uppercase font-medium">
                Advocate
              </span>
              <span className="w-12 sm:w-16 h-[1px] bg-white/30" />
            </div>

            {/* Main Editorial Heading */}
            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[68px] leading-[1.08] sm:leading-[1.05] tracking-tight text-[#FFFFFF] mb-5 sm:mb-6">
              Legal Strategy for <br />
              <span className="italic font-normal text-[#F5F2EA] font-garamond">
                Real Solutions.
              </span>
            </h1>

            {/* Subtext Description */}
            <p className="text-sm sm:text-base md:text-lg font-sans text-[#A5A5A5] leading-relaxed max-w-xl font-light mb-8 sm:mb-10">
              Focused on delivering practical, ethical and result-driven legal representation.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-5">
              {/* Primary Warm Ivory Button */}
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-sm bg-[#F5F2EA] text-[#0B0B0B] text-xs sm:text-[13px] tracking-wider uppercase font-sans font-semibold hover:bg-white transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-white/5 active:scale-98"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#0B0B0B]" />
              </button>

              {/* Secondary Transparent Outlined Button */}
              <button
                type="button"
                onClick={onOpenVideo}
                className="inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3.5 sm:py-4 rounded-sm border border-white/25 text-[#EAE5DA] text-xs sm:text-[13px] tracking-wider uppercase font-sans font-medium hover:border-white/60 hover:text-white transition-all duration-300 group cursor-pointer hover:bg-white/[0.03] active:scale-98"
              >
                <div className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center group-hover:border-white transition-colors">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </div>
                <span>Watch Intro</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Advocate Photo with The Constitution of India (6 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 xl:col-span-6 relative mt-6 lg:mt-0 flex justify-center lg:justify-end -translate-y-[30px]"
          >
            {/* Seamless blended container matching reference composition */}
            <div className="relative w-full max-w-[460px] sm:max-w-[520px] lg:max-w-[580px] xl:max-w-[620px] select-none group">
              <img
                src="/advocate-constitution.jpg"
                alt="Adv. Muhammad Ajmal KTV holding The Constitution of India"
                className="w-full h-auto object-contain object-center transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                loading="eager"
              />

              {/* Gentle bottom edge fade to melt seamlessly into the boundary */}
              <div className="absolute inset-x-0 bottom-0 h-16 sm:h-24 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
