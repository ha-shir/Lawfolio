import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowUpRight, Phone, Mail } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
  isIPhonePreview?: boolean;
  onToggleIPhonePreview?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenConsultation,
  isIPhonePreview,
  onToggleIPhonePreview,
}) => {
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
      {/* Top Fixed Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0B0B]/95 backdrop-blur-md border-b border-[#C5A880]/15 shadow-2xl py-2.5 sm:py-3.5'
            : 'bg-[#0B0B0B]/90 backdrop-blur-sm border-b border-white/[0.06] py-3.5 sm:py-4.5'
        }`}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between min-h-[48px] sm:min-h-[56px]">
          {/* Left spacer to ensure balanced layout */}
          <div className="w-8 sm:w-10 md:w-12 h-9 sm:h-10 opacity-0 pointer-events-none flex-shrink-0" aria-hidden="true" />

          {/* Center: Advocate Name & Subtitle (Mathematically Centered, Overlap-Protected) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-auto max-w-[46vw] sm:max-w-[52vw] md:max-w-none">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="group inline-flex flex-col items-center justify-center focus:outline-none"
            >
              <span className="font-editorial text-[13px] min-[400px]:text-sm sm:text-lg md:text-xl lg:text-2xl text-white font-medium tracking-wide leading-tight group-hover:text-[#F5F2EA] transition-colors whitespace-nowrap truncate max-w-full">
                Adv. Muhammad Ajmal KTV
              </span>
              <div className="flex items-center justify-center gap-1.5 sm:gap-2.5 md:gap-3.5 mt-0.5 sm:mt-1">
                <span className="h-[1px] w-3 min-[400px]:w-5 sm:w-10 md:w-14 bg-[#C5A880]/90" />
                <span className="text-[7.5px] min-[400px]:text-[8.5px] sm:text-[10px] md:text-[10.5px] font-sans font-medium tracking-[0.24em] sm:tracking-[0.32em] text-[#C5A880] uppercase select-none whitespace-nowrap">
                  ADVOCATE
                </span>
                <span className="h-[1px] w-3 min-[400px]:w-5 sm:w-10 md:w-14 bg-[#C5A880]/90" />
              </div>
            </a>
          </div>

          {/* Right: Book a Consultation & Minimal Hamburger Menu in a Horizontal Row */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 md:gap-3 z-20">
            {/* BOOK A CONSULTATION Button */}
            <button
              type="button"
              onClick={onOpenConsultation}
              className="h-9 sm:h-10 md:h-10.5 px-2.5 sm:px-3.5 md:px-4.5 rounded-lg border border-[#C5A880]/50 hover:border-[#C5A880] bg-black/40 hover:bg-[#C5A880]/15 text-[#F5F2EA] flex items-center gap-1.5 sm:gap-2 transition-all duration-300 group cursor-pointer shadow-sm active:scale-95 focus:outline-none focus:ring-1 focus:ring-[#C5A880]/40"
              aria-label="Book a consultation"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C5A880] group-hover:text-white transition-colors duration-300 flex-shrink-0" />
              <span className="font-sans font-medium text-[9.5px] sm:text-[11px] md:text-xs tracking-[0.14em] sm:tracking-[0.18em] uppercase text-[#F5F2EA] group-hover:text-white transition-colors whitespace-nowrap">
                <span className="hidden sm:inline">BOOK A </span>
                <span className="hidden min-[420px]:inline sm:hidden">BOOK </span>
                <span className="inline min-[380px]:hidden">CONSULT</span>
                <span className="hidden min-[380px]:inline">CONSULTATION</span>
              </span>
            </button>

            {/* Hamburger Button with Rounded-Square Gold Border */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-9 h-9 sm:w-10 sm:h-10 md:w-10.5 md:h-10.5 rounded-lg border border-[#C5A880]/60 hover:border-[#C5A880] bg-black/40 hover:bg-[#C5A880]/15 flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-[#C5A880]/40 cursor-pointer shadow-sm group active:scale-95 flex-shrink-0"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
            >
              <div className="w-5 h-5 relative flex items-center justify-center">
                <span
                  className={`absolute w-4.5 sm:w-5 h-[1.5px] bg-[#C5A880] transition-all duration-300 ease-in-out ${
                    menuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
                  }`}
                />
                <span
                  className={`absolute w-4.5 sm:w-5 h-[1.5px] bg-[#C5A880] transition-all duration-200 ease-in-out ${
                    menuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
                  }`}
                />
                <span
                  className={`absolute w-4.5 sm:w-5 h-[1.5px] bg-[#C5A880] transition-all duration-300 ease-in-out ${
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
            <div className="w-full border-b border-white/[0.06] bg-[#0B0B0B]/60 py-2.5 sm:py-3.5">
              <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between min-h-[48px] sm:min-h-[56px]">
                <div className="w-8 sm:w-10 md:w-12 h-9 sm:h-10 opacity-0 pointer-events-none flex-shrink-0" aria-hidden="true" />

                {/* Centered advocate name inside overlay */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-auto max-w-[46vw] sm:max-w-[52vw] md:max-w-none">
                  <a
                    href="#home"
                    onClick={(e) => handleNavClick(e, '#home')}
                    className="group inline-flex flex-col items-center justify-center focus:outline-none"
                  >
                    <span className="font-editorial text-[13px] min-[400px]:text-sm sm:text-lg md:text-xl lg:text-2xl text-white font-medium tracking-wide leading-tight group-hover:text-[#F5F2EA] transition-colors whitespace-nowrap truncate max-w-full">
                      Adv. Muhammad Ajmal KTV
                    </span>
                    <div className="flex items-center justify-center gap-1.5 sm:gap-2.5 md:gap-3.5 mt-0.5 sm:mt-1">
                      <span className="h-[1px] w-3 min-[400px]:w-5 sm:w-10 md:w-14 bg-[#C5A880]/90" />
                      <span className="text-[7.5px] min-[400px]:text-[8.5px] sm:text-[10px] md:text-[10.5px] font-sans font-medium tracking-[0.24em] sm:tracking-[0.32em] text-[#C5A880] uppercase select-none whitespace-nowrap">
                        ADVOCATE
                      </span>
                      <span className="h-[1px] w-3 min-[400px]:w-5 sm:w-10 md:w-14 bg-[#C5A880]/90" />
                    </div>
                  </a>
                </div>

                {/* Right buttons inside overlay top bar */}
                <div className="flex items-center gap-1.5 sm:gap-2.5 md:gap-3 z-20">
                  <button
                    type="button"
                    onClick={() => {
                      setMenuOpen(false);
                      onOpenConsultation();
                    }}
                    className="h-9 sm:h-10 md:h-10.5 px-2.5 sm:px-3.5 md:px-4.5 rounded-lg border border-[#C5A880]/50 hover:border-[#C5A880] bg-black/40 hover:bg-[#C5A880]/15 text-[#F5F2EA] flex items-center gap-1.5 sm:gap-2 transition-all duration-300 group cursor-pointer shadow-sm active:scale-95 focus:outline-none focus:ring-1 focus:ring-[#C5A880]/40"
                    aria-label="Book a consultation"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#C5A880] group-hover:text-white transition-colors duration-300 flex-shrink-0" />
                    <span className="font-sans font-medium text-[9.5px] sm:text-[11px] md:text-xs tracking-[0.14em] sm:tracking-[0.18em] uppercase text-[#F5F2EA] group-hover:text-white transition-colors whitespace-nowrap">
                      <span className="hidden sm:inline">BOOK A </span>
                      <span className="hidden min-[420px]:inline sm:hidden">BOOK </span>
                      <span className="inline min-[380px]:hidden">CONSULT</span>
                      <span className="hidden min-[380px]:inline">CONSULTATION</span>
                    </span>
                  </button>

                  {/* Close Button in exact same position as hamburger button */}
                  <button
                    type="button"
                    onClick={() => setMenuOpen(false)}
                    className="w-9 h-9 sm:w-10 sm:h-10 md:w-10.5 md:h-10.5 rounded-lg border border-[#C5A880]/60 hover:border-[#C5A880] bg-black/40 hover:bg-[#C5A880]/15 flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-[#C5A880]/40 cursor-pointer shadow-sm group active:scale-95 flex-shrink-0"
                    aria-label="Close navigation menu"
                  >
                    <div className="w-5 h-5 relative flex items-center justify-center">
                      <span className="absolute w-4.5 sm:w-5 h-[1.5px] bg-[#C5A880] rotate-45 transition-transform duration-300" />
                      <span className="absolute w-4.5 sm:w-5 h-[1.5px] bg-[#C5A880] -rotate-45 transition-transform duration-300" />
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Overlay Navigation Links */}
            <div className="max-w-4xl mx-auto w-full px-6 sm:px-12 py-8 sm:py-12 flex flex-col items-center justify-center flex-1">
              <nav className="w-full flex flex-col items-center space-y-3 sm:space-y-5">
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
                      className="group inline-flex items-center justify-center gap-3 sm:gap-5 py-1.5 sm:py-2 transition-all duration-300 focus:outline-none"
                    >
                      <span className="font-sans text-[11px] sm:text-xs tracking-[0.25em] text-[#C5A880]/70 group-hover:text-[#C5A880] transition-colors">
                        {link.number}
                      </span>
                      <span className="font-editorial text-2xl sm:text-4xl md:text-5xl text-white/90 group-hover:text-white font-normal tracking-wide transition-colors">
                        {link.label}
                      </span>
                      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#C5A880] opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                    </a>
                  </motion.div>
                ))}
              </nav>

              {/* Action Buttons inside overlay */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.32, duration: 0.35 }}
                className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3.5"
              >
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3 rounded-full border border-[#C5A880] bg-[#C5A880]/10 hover:bg-[#C5A880] text-[#F5F2EA] hover:text-[#0B0B0B] text-xs sm:text-sm tracking-wider uppercase font-sans font-medium transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[#C5A880]/20 active:scale-95"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Consultation</span>
                </button>

                {onToggleIPhonePreview && (
                  <button
                    type="button"
                    onClick={() => {
                      setMenuOpen(false);
                      onToggleIPhonePreview();
                    }}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-sans tracking-wide bg-white/5 hover:bg-white/10 text-[#EAE5DA] border border-white/10 transition-colors cursor-pointer"
                  >
                    <span>{isIPhonePreview ? '🖥️ Desktop View' : '📱 iPhone Frame Preview'}</span>
                  </button>
                )}
              </motion.div>
            </div>

            {/* Overlay Bottom Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.38, duration: 0.35 }}
              className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-5 sm:py-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#A5A5A5]"
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
              <div className="text-[10.5px] text-[#707070] tracking-widest uppercase text-center sm:text-right">
                Adv. Muhammad Ajmal KTV &bull; Chamber Practice
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
