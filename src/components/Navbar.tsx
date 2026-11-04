import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowRight, ArrowUpRight, Phone, Mail } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when overlay is active
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Handle ESC key press to close overlay
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', number: '01' },
    { label: 'About', href: '#about', number: '02' },
    { label: 'Practice Areas', href: '#practice-areas', number: '03' },
    { label: 'Cases', href: '#cases', number: '04' },
    { label: 'Blog', href: '#insights', number: '05' },
    { label: 'Contact', href: '#contact', number: '06' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Fixed Header: borders & background hidden on hero section, revealed on scroll */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0B0B]/95 backdrop-blur-md border-b border-white/15 shadow-2xl pt-3.5 pb-2.5 sm:py-3'
            : 'bg-transparent border-b border-transparent pt-4 sm:pt-5 pb-3 sm:pb-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-8 lg:px-12 flex items-center justify-between">
          
          {/* Left: Vertical accent bar + Advocate Name & Subtitle */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-2.5 sm:gap-3.5 focus:outline-none select-none"
          >
            {/* Vertical accent divider line */}
            <span className="w-[1.5px] h-5 sm:h-7 bg-white/40 group-hover:bg-white/70 transition-colors shrink-0" />

            <div className="flex flex-col text-left">
              <span className="font-editorial text-[13.5px] min-[390px]:text-[15px] sm:text-lg md:text-[19px] text-white font-medium tracking-wide leading-none group-hover:text-[#F5F2EA] transition-colors whitespace-nowrap">
                Adv. Muhammad Ajmal KTV
              </span>
              <span className="text-[8.5px] min-[390px]:text-[9.5px] sm:text-[10px] font-sans font-medium tracking-[0.22em] sm:tracking-[0.28em] text-[#A5A5A5] uppercase mt-0.5 sm:mt-1">
                ADVOCATE
              </span>
            </div>
          </a>

          {/* Right: Solid Pill "Book a Consultation" + Rounded-Square Hamburger Button */}
          <div className="flex items-center gap-2 sm:gap-3 z-20">
            {/* Solid Pill "Book a Consultation →" Button */}
            <button
              type="button"
              onClick={onOpenConsultation}
              className="h-8.5 sm:h-10 px-3 sm:px-5 rounded-full bg-[#F5F2EA] hover:bg-white text-[#0B0B0B] text-xs sm:text-[12.5px] font-sans font-semibold tracking-wide transition-all duration-300 flex items-center gap-1.5 sm:gap-2.5 shadow-md active:scale-95 cursor-pointer group"
              aria-label="Book a consultation"
            >
              <Calendar className="w-3.5 h-3.5 text-[#0B0B0B] shrink-0" />
              <span className="whitespace-nowrap font-sans">
                <span className="hidden sm:inline">Book a Consultation</span>
                <span className="inline sm:hidden">Consult</span>
              </span>
              <ArrowRight className="hidden sm:inline w-3.5 h-3.5 text-[#0B0B0B] transition-transform duration-300 group-hover:translate-x-0.5 shrink-0" />
            </button>

            {/* Hamburger Button with Rounded-Square Border */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-8.5 h-8.5 sm:w-10 sm:h-10 rounded-lg border border-white/20 hover:border-white/50 bg-[#121212] hover:bg-[#1c1c1c] flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-white/30 cursor-pointer shadow-sm group active:scale-95 shrink-0"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
            >
              <div className="w-4 sm:w-5 h-4 sm:h-5 relative flex items-center justify-center">
                <span
                  className={`absolute w-3.5 sm:w-4.5 h-[1.5px] bg-[#EAE5DA] transition-all duration-300 ease-in-out ${
                    menuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
                  }`}
                />
                <span
                  className={`absolute w-3.5 sm:w-4.5 h-[1.5px] bg-[#EAE5DA] transition-all duration-200 ease-in-out ${
                    menuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
                  }`}
                />
                <span
                  className={`absolute w-3.5 sm:w-4.5 h-[1.5px] bg-[#EAE5DA] transition-all duration-300 ease-in-out ${
                    menuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
                  }`}
                />
              </div>
            </button>
          </div>

        </div>
      </header>

      {/* Full-Screen Luxury Navigation Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-[#0B0B0B]/98 backdrop-blur-2xl flex flex-col justify-between overflow-y-auto no-scrollbar"
          >
            {/* Overlay Top Bar (Seamless alignment with top header) */}
            <div className="w-full border-b border-white/15 bg-[#0B0B0B]/60 py-2.5 sm:py-3.5">
              <div className="max-w-7xl mx-auto px-3.5 sm:px-8 lg:px-12 flex items-center justify-between">
                
                {/* Left Branding */}
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, '#home')}
                  className="group flex items-center gap-2.5 sm:gap-3.5 focus:outline-none select-none"
                >
                  <span className="w-[1.5px] h-5 sm:h-7 bg-white/40 group-hover:bg-white/70 transition-colors shrink-0" />
                  <div className="flex flex-col text-left">
                    <span className="font-editorial text-[13.5px] min-[390px]:text-[15px] sm:text-lg md:text-[19px] text-white font-medium tracking-wide leading-none group-hover:text-[#F5F2EA] transition-colors whitespace-nowrap">
                      Adv. Muhammad Ajmal KTV
                    </span>
                    <span className="text-[8.5px] min-[390px]:text-[9.5px] sm:text-[10px] font-sans font-medium tracking-[0.22em] sm:tracking-[0.28em] text-[#A5A5A5] uppercase mt-0.5 sm:mt-1">
                      ADVOCATE
                    </span>
                  </div>
                </a>

                {/* Right buttons inside overlay top bar */}
                <div className="flex items-center gap-2 sm:gap-3 z-20">
                  <button
                    type="button"
                    onClick={() => {
                      setMenuOpen(false);
                      onOpenConsultation();
                    }}
                    className="h-8.5 sm:h-10 px-3 sm:px-5 rounded-full bg-[#F5F2EA] hover:bg-white text-[#0B0B0B] text-xs sm:text-[12.5px] font-sans font-semibold tracking-wide transition-all duration-300 flex items-center gap-1.5 sm:gap-2.5 shadow-md active:scale-95 cursor-pointer group"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#0B0B0B] shrink-0" />
                    <span className="whitespace-nowrap font-sans">
                      <span className="hidden sm:inline">Book a Consultation</span>
                      <span className="inline sm:hidden">Consult</span>
                    </span>
                    <ArrowRight className="hidden sm:inline w-3.5 h-3.5 text-[#0B0B0B] transition-transform duration-300 group-hover:translate-x-0.5 shrink-0" />
                  </button>

                  {/* Close Button in exact same position as hamburger button */}
                  <button
                    type="button"
                    onClick={() => setMenuOpen(false)}
                    className="w-8.5 h-8.5 sm:w-10 sm:h-10 rounded-lg border border-white/20 hover:border-white/50 bg-[#121212] hover:bg-[#1c1c1c] flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-white/30 cursor-pointer shadow-sm group active:scale-95 shrink-0"
                    aria-label="Close navigation menu"
                  >
                    <div className="w-4 sm:w-5 h-4 sm:h-5 relative flex items-center justify-center">
                      <span className="absolute w-3.5 sm:w-4.5 h-[1.5px] bg-[#EAE5DA] rotate-45 transition-transform duration-300" />
                      <span className="absolute w-3.5 sm:w-4.5 h-[1.5px] bg-[#EAE5DA] -rotate-45 transition-transform duration-300" />
                    </div>
                  </button>
                </div>

              </div>
            </div>

            {/* Overlay Navigation Links */}
            <div className="max-w-4xl mx-auto w-full px-5 sm:px-12 py-6 sm:py-12 flex flex-col items-center justify-center flex-1">
              <nav className="w-full flex flex-col items-center space-y-2.5 sm:space-y-5">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{
                      delay: 0.05 + idx * 0.04,
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="w-full text-center"
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="group inline-flex items-center justify-center gap-2.5 sm:gap-5 py-1.5 sm:py-2 transition-all duration-300 focus:outline-none"
                    >
                      <span className="font-sans text-[10px] sm:text-xs tracking-[0.25em] text-[#C5A880]/70 group-hover:text-[#C5A880] transition-colors">
                        {link.number}
                      </span>
                      <span className="font-editorial text-2xl sm:text-4xl md:text-5xl text-white/90 group-hover:text-white font-normal tracking-wide transition-colors">
                        {link.label}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#C5A880] opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                    </a>
                  </motion.div>
                ))}
              </nav>

              {/* Action Button inside overlay */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.32, duration: 0.35 }}
                className="mt-6 sm:mt-10 flex flex-wrap items-center justify-center gap-3.5 w-full sm:w-auto"
              >
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 rounded-full bg-[#F5F2EA] hover:bg-white text-[#0B0B0B] text-xs sm:text-sm tracking-wider uppercase font-sans font-semibold transition-all duration-300 cursor-pointer shadow-lg active:scale-95"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </div>

            {/* Overlay Bottom Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.38, duration: 0.35 }}
              className="w-full max-w-7xl mx-auto px-5 sm:px-12 py-4 sm:py-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3 text-xs text-[#A5A5A5]"
            >
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2 hover:text-[#C5A880] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>+91 98765 43210</span>
                </a>
                <a
                  href="mailto:contact@ajmalktv.in"
                  className="flex items-center gap-2 hover:text-[#C5A880] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>contact@ajmalktv.in</span>
                </a>
              </div>
              <div className="text-[10px] sm:text-[10.5px] text-[#707070] tracking-widest uppercase text-center sm:text-right">
                Adv. Muhammad Ajmal KTV &bull; Chamber Practice
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
