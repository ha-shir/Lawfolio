import React, { useState } from 'react';
import { Scale, Users, Laptop, Car, FileText, Handshake, Stethoscope, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PracticeArea } from '../types';

interface PracticeAreasProps {
  practiceAreas: PracticeArea[];
  onSelectPracticeArea: (area: PracticeArea) => void;
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({
  practiceAreas,
  onSelectPracticeArea,
}) => {
  // Let default active card be the 3rd card (Cyber Crimes) or 1st card as seen in screenshots
  const [activeCardId, setActiveCardId] = useState<string>(
    practiceAreas[2]?.id || practiceAreas[0]?.id || 'criminal-cases'
  );

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
      case 'file-text':
        return <FileText className={className} strokeWidth={1.5} />;
      case 'handshake':
        return <Handshake className={className} strokeWidth={1.5} />;
      case 'stethoscope':
        return <Stethoscope className={className} strokeWidth={1.5} />;
      default:
        return <Scale className={className} strokeWidth={1.5} />;
    }
  };

  // Top 4 prioritized cards
  const prioritizedCards = practiceAreas.slice(0, 4);
  // Additional disciplines: Medical Legal Cases, Legal Notice, Mediation
  const additionalDisciplines = practiceAreas.slice(4);

  return (
    <section
      id="practice-areas"
      className="bg-[#F5F2EA] text-[#0B0B0B] py-20 sm:py-28 relative border-b border-[#0B0B0B]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Left Column: Heading, Subtitle & Additional Disciplines */}
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

            {/* Additional Practice Disciplines (Legal Notice, Mediation, Medical Legal Cases) */}
            {additionalDisciplines.length > 0 && (
              <div className="mt-8 pt-6 border-t border-[#0B0B0B]/15 flex flex-col gap-3">
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] font-semibold text-[#0B0B0B]/60">
                  Pre-Litigation & Advisory Disciplines:
                </span>
                <div className="flex flex-wrap gap-2">
                  {additionalDisciplines.map((area) => (
                    <button
                      key={area.id}
                      type="button"
                      onClick={() => onSelectPracticeArea(area)}
                      className="px-3 py-1.5 rounded-sm bg-[#0B0B0B]/[0.04] hover:bg-[#0B0B0B] hover:text-white border border-[#0B0B0B]/15 text-[#0B0B0B] text-xs font-sans tracking-wide transition-all cursor-pointer flex items-center gap-1.5 group"
                    >
                      <span className="font-medium">{area.title}</span>
                      <ArrowRight className="w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Right Column: 4 Prioritized Cards (Criminal Cases, Family Cases, Cyber Crimes, MACT Cases) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-4.5">
              {prioritizedCards.map((area, index) => {
                const isActive = activeCardId === area.id;

                return (
                  <motion.div
                    key={area.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    onMouseEnter={() => setActiveCardId(area.id)}
                    onClick={() => onSelectPracticeArea(area)}
                    className={`group relative rounded-sm p-6 sm:p-7 flex flex-col justify-between min-h-[250px] sm:min-h-[280px] cursor-pointer transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isActive
                        ? 'bg-[#0B0B0B] text-white shadow-2xl scale-[1.02] border-[#0B0B0B]'
                        : 'bg-[#F5F2EA] text-[#0B0B0B] border border-[#0B0B0B]/20 hover:border-[#0B0B0B]/60 hover:shadow-lg'
                    }`}
                  >
                    {/* Top: Icon & Number */}
                    <div className="flex items-start justify-between w-full">
                      <div className="p-1">
                        {renderIcon(area.iconName, isActive)}
                      </div>
                      <span
                        className={`text-[10px] font-mono tracking-widest ${
                          isActive ? 'text-white/40' : 'text-[#0B0B0B]/40'
                        }`}
                      >
                        {area.number}
                      </span>
                    </div>

                    {/* Bottom: Subtitle, Title & Circle Arrow Button */}
                    <div className="mt-8 flex flex-col gap-2.5">
                      {/* Subtitle tag (NDPS, POCSO & All Types, etc.) */}
                      {area.subtitle && (
                        <span
                          className={`text-[9px] sm:text-[9.5px] font-sans uppercase tracking-[0.15em] font-semibold transition-colors duration-300 ${
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
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
