import React from 'react';
import { ArrowRight, GraduationCap, Gavel, Award } from 'lucide-react';
import { motion } from 'framer-motion';

interface AboutSectionProps {
  onOpenAboutModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenAboutModal }) => {
  const credentials = [
    {
      title: 'Criminal & Trial Specialist',
      subtitle: 'NDPS, POCSO, Sessions Trials & High Court Bail',
      icon: <Gavel className="w-5 h-5 text-[#0B0B0B]" strokeWidth={1.5} />,
    },
    {
      title: 'Certified Dispute Mediator',
      subtitle: 'Amicable Family & Out-of-Court Settlements',
      icon: <Award className="w-5 h-5 text-[#0B0B0B]" strokeWidth={1.5} />,
    },
    {
      title: 'MACT & Medical Legal Counsel',
      subtitle: 'Tribunal Claims, Negligence & Consumer Forums',
      icon: <GraduationCap className="w-5 h-5 text-[#0B0B0B]" strokeWidth={1.5} />,
    },
  ];

  return (
    <section
      id="about"
      className="bg-[#F5F2EA] text-[#0B0B0B] py-20 sm:py-28 relative border-b border-[#0B0B0B]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Real Advocate Portrait Organic/Circular Image (4 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 flex justify-center lg:justify-start"
          >
            <div className="relative group">
              {/* Circular border ring */}
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border border-[#0B0B0B]/20 p-2 bg-[#F5F2EA] shadow-xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#0B0B0B]">
                  <img
                    src="/advocate-real.jpg"
                    alt="Adv. Muhammad Ajmal KTV - Advocate High Court of Kerala"
                    className="w-full h-full object-cover object-[50%_25%] grayscale contrast-[1.08] brightness-[0.98] transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Minimal floating badge */}
              <div className="absolute -bottom-2 right-4 bg-[#0B0B0B] text-white px-3.5 py-1.5 rounded-full text-[10px] font-sans tracking-widest uppercase border border-white/20 shadow-lg hidden sm:block">
                Advocate • High Court
              </div>
            </div>
          </motion.div>

          {/* Center Column: Text & CTA (4 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-4 flex flex-col justify-center text-left"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#0B0B0B]/40" />
              <span className="text-[11px] font-sans tracking-[0.25em] text-[#0B0B0B]/70 uppercase font-semibold">
                About
              </span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[42px] leading-tight text-[#0B0B0B] font-medium mb-4">
              Adv. Muhammad Ajmal KTV
            </h2>

            <p className="text-sm sm:text-base font-sans text-[#0B0B0B]/80 font-light leading-relaxed mb-6">
              A practicing advocate committed to upholding justice with integrity, clarity and practical insight.
            </p>

            <div>
              <button
                type="button"
                onClick={onOpenAboutModal}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-[#0B0B0B] rounded-sm text-xs font-sans tracking-wider uppercase font-semibold text-[#0B0B0B] hover:bg-[#0B0B0B] hover:text-white transition-all duration-300 group cursor-pointer"
              >
                <span>Know More</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: 3 Credentials (4 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-4 flex flex-col space-y-6 sm:space-y-7 lg:border-l lg:border-[#0B0B0B]/15 lg:pl-8"
          >
            {credentials.map((cred) => (
              <div key={cred.title} className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-sm bg-white/40 border border-[#0B0B0B]/15 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[#0B0B0B] group-hover:border-[#0B0B0B] group-hover:text-white">
                  <div className="group-hover:filter group-hover:invert transition-all">
                    {cred.icon}
                  </div>
                </div>

                <div className="flex flex-col text-left">
                  <h4 className="font-editorial text-base sm:text-lg font-medium text-[#0B0B0B] tracking-tight">
                    {cred.title}
                  </h4>
                  <p className="text-xs font-sans text-[#0B0B0B]/60 font-light mt-0.5">
                    {cred.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
