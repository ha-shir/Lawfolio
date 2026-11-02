import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X, ArrowUpRight, Phone, Mail } from 'lucide-react';

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Practice Areas', href: '#practice-areas' },
    { label: 'Cases', href: '#cases' },
    { label: 'Blog', href: '#insights' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0B0B0B]/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5'
            : 'bg-transparent border-b border-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Left: Monogram and Advocate Title */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-3.5 focus:outline-none"
          >
            {/* MAK Monogram */}
            <div className="w-10 h-10 rounded-sm bg-[#151515] border border-white/15 flex items-center justify-center transition-transform duration-300 group-hover:border-white/40">
              <span className="font-editorial text-sm tracking-wider text-[#F5F2EA] font-semibold italic">
                MAK
              </span>
            </div>

            <div className="flex flex-col text-left">
              <span className="font-editorial text-base sm:text-lg text-[#F5F2EA] tracking-wide font-medium leading-none">
                Adv. Muhammad Ajmal KTV
              </span>
              <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.24em] text-[#A5A5A5] uppercase mt-1">
                Advocate
              </span>
            </div>
          </a>

          {/* Center Navigation Links - Desktop */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] tracking-[0.06em] text-[#EAE5DA]/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative py-1 transition-colors duration-200 hover:text-white group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#F5F2EA] transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Device Showcase Mode Toggle (Visible on desktop/tablet) */}
            {onToggleIPhonePreview && (
              <button
                type="button"
                onClick={onToggleIPhonePreview}
                title={isIPhonePreview ? "Switch to Fullscreen Desktop View" : "Preview in iPhone 16 Pro Mockup Frame"}
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-sans tracking-wide bg-white/5 hover:bg-white/10 text-[#EAE5DA] border border-white/10 transition-colors cursor-pointer"
              >
                <span className="text-xs">{isIPhonePreview ? '🖥️ Desktop View' : '📱 iPhone Frame'}</span>
              </button>
            )}

            {/* Outlined "Book a Consultation" Button */}
            <button
              type="button"
              onClick={onOpenConsultation}
              className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-sm border border-[#F5F2EA]/40 text-[#F5F2EA] text-[12px] sm:text-[13px] tracking-wider uppercase font-sans hover:bg-[#F5F2EA] hover:text-[#0B0B0B] hover:border-[#F5F2EA] transition-all duration-300 group cursor-pointer shadow-sm active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-6 text-[#F5F2EA] group-hover:text-[#0B0B0B]" />
              <span className="font-medium">Book a Consultation</span>
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#F5F2EA] hover:text-white rounded-sm focus:outline-none focus:ring-1 focus:ring-white/20 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl lg:hidden transition-all duration-500 ease-in-out flex flex-col justify-between p-6 pt-24 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex flex-col gap-6 max-w-sm mx-auto w-full pt-4">
          <div className="border-b border-white/10 pb-4">
            <span className="text-[11px] font-sans tracking-[0.25em] text-[#A5A5A5] uppercase">
              Navigation
            </span>
          </div>

          <nav className="flex flex-col space-y-4">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{ transitionDelay: `${idx * 40}ms` }}
                className="group flex items-center justify-between text-xl font-editorial text-[#F5F2EA] hover:text-white py-1 transition-colors"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-[#F5F2EA] text-[#0B0B0B] text-xs font-sans font-semibold tracking-widest uppercase rounded-sm hover:bg-white transition-colors"
            >
              <Calendar className="w-4 h-4 text-[#0B0B0B]" />
              Book a Consultation
            </button>
          </div>
        </div>

        {/* Mobile menu bottom contact */}
        <div className="max-w-sm mx-auto w-full pt-6 border-t border-white/10 flex flex-col gap-2 text-xs text-[#A5A5A5]">
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5" />
            <span>contact@ajmalktv.in</span>
          </div>
        </div>
      </div>
    </>
  );
};
