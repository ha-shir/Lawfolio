import React from 'react';
import { ArrowRight, Play, Scale, Handshake, Landmark } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenConsultation: () => void;
  onOpenVideo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onOpenVideo }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-black text-white flex items-center pt-16 min-[400px]:pt-18 sm:pt-24 lg:pt-28 pb-10 sm:pb-16 overflow-hidden"
    >
      {/* Background Architectural Ambiance & Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            opacity: [0.03, 0.08, 0.03],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-full blur-[140px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 min-[380px]:px-5 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-5 lg:gap-10 items-center">
          
          {/* 1. Lawyer Portrait (Mobile Order 1 - Immediately After Navbar; Desktop Order 2 - Right Column) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 lg:col-span-6 w-full flex justify-center lg:justify-end lg:-translate-y-[20px] select-none"
          >
            <div className="relative w-full max-w-[340px] min-[390px]:max-w-[390px] sm:max-w-[480px] lg:max-w-[580px] xl:max-w-[620px] mx-auto group">
              <img
                src="/advocate-constitution.jpg"
                alt="Adv. Muhammad Ajmal KTV holding The Constitution of India"
                className="w-full h-auto object-contain object-center transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                loading="eager"
              />

              {/* Seamless dark gradient fades on all edges to blend naturally into pure black background */}
              <div className="absolute inset-x-0 bottom-0 h-20 sm:h-28 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/40 to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black/40 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* 2. Hero Content (Mobile Order 2 - Below Portrait; Desktop Order 1 - Left Column) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1 lg:col-span-6 flex flex-col justify-center text-center lg:text-left max-w-xl lg:max-w-2xl relative z-20 mx-auto lg:mx-0 w-full"
          >
            {/* Eyebrow: Centered flanked lines on mobile, left line on desktop */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-3 sm:mb-5">
              <span className="w-8 sm:w-14 h-[1px] bg-white/30" />
              <span className="text-[10px] sm:text-xs font-sans tracking-[0.28em] text-[#A5A5A5] uppercase font-semibold">
                ADVOCATE
              </span>
              <span className="w-8 sm:w-14 h-[1px] bg-white/30 lg:hidden" />
            </div>

            {/* Main Heading: Centered on mobile, left on desktop */}
            <h1 className="font-editorial text-3xl min-[380px]:text-[34px] sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[68px] leading-[1.12] sm:leading-[1.05] tracking-tight text-white mb-3.5 sm:mb-5">
              Legal Strategy for <br />
              <span className="italic font-normal text-[#F5F2EA] font-garamond">
                Real Solutions.
              </span>
            </h1>

            {/* Subtext Description */}
            <p className="text-xs min-[380px]:text-[13.5px] sm:text-base md:text-lg font-sans text-[#A5A5A5] leading-relaxed max-w-md sm:max-w-xl font-light mb-6 sm:mb-8 mx-auto lg:mx-0">
              Focused on delivering practical, ethical and result-driven legal representation.
            </p>

            {/* CTA Buttons: Full width on mobile, balanced height */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full">
              {/* Primary Button */}
              <button
                type="button"
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-lg sm:rounded-sm bg-white text-[#0B0B0B] text-xs sm:text-[13px] tracking-wider uppercase font-sans font-bold hover:bg-[#F5F2EA] transition-all duration-300 group cursor-pointer shadow-lg active:scale-98"
              >
                <span>BOOK A CONSULTATION</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#0B0B0B]" />
              </button>

              {/* Secondary Outlined Button */}
              <button
                type="button"
                onClick={onOpenVideo}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3.5 sm:py-4 rounded-lg sm:rounded-sm border border-white/60 text-white text-xs sm:text-[13px] tracking-wider uppercase font-sans font-medium hover:border-white hover:bg-white/[0.05] transition-all duration-300 group cursor-pointer active:scale-98"
              >
                <div className="w-5 h-5 rounded-full border border-white/80 flex items-center justify-center group-hover:border-white transition-colors">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5 text-white" />
                </div>
                <span>WATCH INTRO</span>
              </button>
            </div>

            {/* Service Highlights: Minimal monochrome icons with subtle vertical separators */}
            <div className="grid grid-cols-3 items-center pt-6 sm:pt-8 border-t border-white/10 mt-6 sm:mt-10 w-full">
              {/* Highlight 1: Legal Advice */}
              <div className="flex flex-col items-center justify-center text-center gap-2 border-r border-white/15 pr-2">
                <Scale className="w-5 h-5 sm:w-6 sm:h-6 text-white/90" strokeWidth={1.5} />
                <span className="text-[11px] min-[380px]:text-xs text-[#EAE5DA] font-sans font-medium tracking-tight">
                  Legal Advice
                </span>
              </div>

              {/* Highlight 2: Case Representation */}
              <div className="flex flex-col items-center justify-center text-center gap-2 border-r border-white/15 px-2">
                <Handshake className="w-5 h-5 sm:w-6 sm:h-6 text-white/90" strokeWidth={1.5} />
                <span className="text-[11px] min-[380px]:text-xs text-[#EAE5DA] font-sans font-medium tracking-tight">
                  Case Representation
                </span>
              </div>

              {/* Highlight 3: Dispute Resolution */}
              <div className="flex flex-col items-center justify-center text-center gap-2 pl-2">
                <Landmark className="w-5 h-5 sm:w-6 sm:h-6 text-white/90" strokeWidth={1.5} />
                <span className="text-[11px] min-[380px]:text-xs text-[#EAE5DA] font-sans font-medium tracking-tight">
                  Dispute Resolution
                </span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
