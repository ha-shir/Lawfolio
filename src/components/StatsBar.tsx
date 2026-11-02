import React from 'react';
import { Briefcase, Scale, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { StatItem } from '../types';

interface StatsBarProps {
  stats: StatItem[];
}

export const StatsBar: React.FC<StatsBarProps> = ({ stats }) => {
  const renderIcon = (icon: StatItem['icon']) => {
    switch (icon) {
      case 'wreath':
        return (
          // Bespoke minimal legal laurel wreath icon
          <svg className="w-5 h-5 text-[#EAE5DA]/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M7 19c-2.5-2-4-5-4-9 0-2 .5-4 1.5-6M17 19c2.5-2 4-5 4-9 0-2-.5-4-1.5-6" />
            <path d="M5 9c1.5 0 2.5-1 3-2M19 9c-1.5 0-2.5-1-3-2M6 14c1.5 0 2.5-1 3-2M18 14c-1.5 0-2.5-1-3-2M8 18c1.2 0 2-.8 2.5-1.5M16 18c-1.2 0-2-.8-2.5-1.5" />
          </svg>
        );
      case 'briefcase':
        return <Briefcase className="w-5 h-5 text-[#EAE5DA]/80" strokeWidth={1.5} />;
      case 'scales':
        return <Scale className="w-5 h-5 text-[#EAE5DA]/80" strokeWidth={1.5} />;
      default:
        return <Award className="w-5 h-5 text-[#EAE5DA]/80" strokeWidth={1.5} />;
    }
  };

  return (
    <section className="bg-[#0B0B0B] border-y border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="py-6 sm:py-8 px-4 sm:px-8 flex items-center justify-start sm:justify-center gap-5 group"
            >
              {/* Minimal Line Icon */}
              <div className="w-11 h-11 rounded-sm bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:border-white/30 group-hover:bg-white/[0.06]">
                {renderIcon(stat.icon)}
              </div>

              {/* Number and Label */}
              <div className="flex flex-col text-left">
                <span className="font-editorial text-3xl sm:text-4xl text-[#FFFFFF] tracking-tight font-medium leading-none mb-1">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-[13px] font-sans tracking-wide text-[#A5A5A5] font-normal">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
