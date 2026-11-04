import React, { useState, useEffect, useRef } from 'react';
import { Home, User, Scale, MessageCircle, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileControlBarProps {
  onOpenConsultation: () => void;
}

type SectionKey = 'home' | 'about' | 'practice-areas' | 'contact';

export const MobileControlBar: React.FC<MobileControlBarProps> = ({ onOpenConsultation }) => {
  const [activeSection, setActiveSection] = useState<SectionKey>('home');
  const isManualClickRef = useRef(false);
  const manualTimeoutRef = useRef<number | null>(null);

  const navItems = [
    {
      key: 'home' as SectionKey,
      id: 'home',
      label: 'Home',
      icon: Home,
    },
    {
      key: 'about' as SectionKey,
      id: 'about',
      label: 'About',
      icon: User,
    },
    {
      key: 'practice-areas' as SectionKey,
      id: 'practice-areas',
      label: 'Practice Areas',
      icon: Scale,
    },
    {
      key: 'contact' as SectionKey,
      id: 'contact',
      label: 'Contact',
      icon: MessageCircle,
    },
  ];

  // Accurate scroll detection using viewport intersection
  useEffect(() => {
    const handleScroll = () => {
      if (isManualClickRef.current) return;

      // If scrolled near bottom of page, highlight Contact
      const isBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 120;
      if (isBottom) {
        setActiveSection('contact');
        return;
      }

      // Check which section intersects the central region of the viewport (40% from top)
      const focalY = window.innerHeight * 0.4;
      const sectionsOrder: { key: SectionKey; id: string }[] = [
        { key: 'contact', id: 'contact' },
        { key: 'about', id: 'about' },
        { key: 'practice-areas', id: 'practice-areas' },
        { key: 'home', id: 'home' },
      ];

      for (const sec of sectionsOrder) {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= focalY && rect.bottom >= focalY) {
            setActiveSection(sec.key);
            return;
          }
        }
      }

      if (window.scrollY < 300) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string, sectionKey: SectionKey) => {
    setActiveSection(sectionKey);
    isManualClickRef.current = true;
    if (manualTimeoutRef.current) {
      window.clearTimeout(manualTimeoutRef.current);
    }
    manualTimeoutRef.current = window.setTimeout(() => {
      isManualClickRef.current = false;
    }, 900);

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      aria-label="Mobile Bottom Navigation"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 sm:hidden w-[calc(100%-1.5rem)] max-w-[365px] bg-[#0E0E0E]/94 backdrop-blur-2xl border border-white/15 rounded-full p-1.5 shadow-[0_14px_45px_rgba(0,0,0,0.88)] flex items-center justify-between select-none"
    >
      {/* 4 Interactive Navigation Tabs */}
      <div className="flex items-center justify-between flex-1 pr-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.key;

          return (
            <motion.button
              key={item.key}
              type="button"
              whileTap={{ scale: 0.88 }}
              onClick={() => scrollTo(item.id, item.key)}
              className="relative flex-1 flex flex-col items-center justify-center py-1 transition-colors cursor-pointer group focus:outline-none"
              aria-label={`Navigate to ${item.label}`}
            >
              {/* Animated Floating Pill on Active Tab with Spring Physics */}
              <div className="relative w-10 h-7 flex items-center justify-center">
                {isActive && (
                  <motion.div
                    layoutId="controlBarActivePill"
                    className="absolute inset-0 bg-white/20 rounded-xl border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]"
                    transition={{
                      type: 'spring',
                      stiffness: 420,
                      damping: 30,
                    }}
                  />
                )}

                <motion.div
                  animate={{
                    scale: isActive ? 1.08 : 1,
                    color: isActive ? '#FFFFFF' : '#A5A5A5',
                  }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10 flex items-center justify-center"
                >
                  <Icon className="w-4 h-4" strokeWidth={isActive ? 2.2 : 1.8} />
                </motion.div>
              </div>

              {/* Tab Label */}
              <motion.span
                animate={{
                  color: isActive ? '#FFFFFF' : '#A5A5A5',
                  opacity: isActive ? 1 : 0.85,
                }}
                transition={{ duration: 0.2 }}
                className={`font-sans font-medium mt-0.5 leading-tight text-center whitespace-nowrap transition-colors ${
                  item.key === 'practice-areas' ? 'text-[8px] min-[360px]:text-[8.5px]' : 'text-[9.5px]'
                }`}
              >
                {item.label}
              </motion.span>
            </motion.button>
          );
        })}
      </div>

      {/* Vertical Subtle Divider */}
      <div className="w-[1px] h-7 bg-white/20 mx-1 shrink-0" />

      {/* 5. Consult Pill Button on Right */}
      <motion.button
        type="button"
        whileTap={{ scale: 0.92 }}
        onClick={onOpenConsultation}
        className="bg-[#F5F2EA] hover:bg-white text-[#0B0B0B] rounded-[18px] px-3.5 py-1.5 flex flex-col items-center justify-center shrink-0 shadow-md transition-all cursor-pointer group focus:outline-none"
        aria-label="Book a consultation"
      >
        <Calendar className="w-4 h-4 text-[#0B0B0B]" strokeWidth={2} />
        <span className="text-[9.5px] font-sans font-bold text-[#0B0B0B] mt-0.5 leading-none tracking-tight">
          Consult
        </span>
      </motion.button>
    </aside>
  );
};
