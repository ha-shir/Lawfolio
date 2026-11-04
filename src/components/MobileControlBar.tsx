import React, { useState, useEffect } from 'react';
import { Home, User, Scale, MessageCircle, Calendar } from 'lucide-react';

interface MobileControlBarProps {
  onOpenConsultation: () => void;
}

export const MobileControlBar: React.FC<MobileControlBarProps> = ({ onOpenConsultation }) => {
  const [activeSection, setActiveSection] = useState<'home' | 'about' | 'practice-areas' | 'contact'>('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      const contactEl = document.getElementById('contact');
      const practiceEl = document.getElementById('practice-areas');
      const aboutEl = document.getElementById('about');

      if (contactEl && scrollPos >= contactEl.offsetTop) {
        setActiveSection('contact');
      } else if (aboutEl && scrollPos >= aboutEl.offsetTop) {
        setActiveSection('about');
      } else if (practiceEl && scrollPos >= practiceEl.offsetTop) {
        setActiveSection('practice-areas');
      } else {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string, sectionKey: typeof activeSection) => {
    setActiveSection(sectionKey);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      aria-label="Mobile Bottom Navigation"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 sm:hidden w-[calc(100%-1.5rem)] max-w-[365px] bg-[#0E0E0E]/92 backdrop-blur-2xl border border-white/15 rounded-full px-2 py-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.85)] flex items-center justify-between select-none"
    >
      {/* 1. Home */}
      <button
        type="button"
        onClick={() => scrollTo('home', 'home')}
        className="flex-1 flex flex-col items-center justify-center py-1 transition-all group cursor-pointer"
        aria-label="Scroll to Home"
      >
        <div
          className={`flex items-center justify-center px-2.5 py-1 rounded-xl transition-all duration-300 ${
            activeSection === 'home'
              ? 'bg-white/20 text-white shadow-sm'
              : 'text-[#A5A5A5] group-hover:text-white'
          }`}
        >
          <Home className="w-4 h-4" strokeWidth={activeSection === 'home' ? 2.2 : 1.8} />
        </div>
        <span
          className={`text-[9.5px] font-sans font-medium tracking-tight mt-0.5 leading-none transition-colors ${
            activeSection === 'home' ? 'text-white' : 'text-[#A5A5A5] group-hover:text-white'
          }`}
        >
          Home
        </span>
      </button>

      {/* 2. About */}
      <button
        type="button"
        onClick={() => scrollTo('about', 'about')}
        className="flex-1 flex flex-col items-center justify-center py-1 transition-all group cursor-pointer"
        aria-label="Scroll to About"
      >
        <div
          className={`flex items-center justify-center px-2.5 py-1 rounded-xl transition-all duration-300 ${
            activeSection === 'about'
              ? 'bg-white/20 text-white shadow-sm'
              : 'text-[#A5A5A5] group-hover:text-white'
          }`}
        >
          <User className="w-4 h-4" strokeWidth={activeSection === 'about' ? 2.2 : 1.8} />
        </div>
        <span
          className={`text-[9.5px] font-sans font-medium tracking-tight mt-0.5 leading-none transition-colors ${
            activeSection === 'about' ? 'text-white' : 'text-[#A5A5A5] group-hover:text-white'
          }`}
        >
          About
        </span>
      </button>

      {/* 3. Practice Areas */}
      <button
        type="button"
        onClick={() => scrollTo('practice-areas', 'practice-areas')}
        className="flex-1 flex flex-col items-center justify-center py-1 transition-all group cursor-pointer"
        aria-label="Scroll to Practice Areas"
      >
        <div
          className={`flex items-center justify-center px-2.5 py-1 rounded-xl transition-all duration-300 ${
            activeSection === 'practice-areas'
              ? 'bg-white/20 text-white shadow-sm'
              : 'text-[#A5A5A5] group-hover:text-white'
          }`}
        >
          <Scale className="w-4 h-4" strokeWidth={activeSection === 'practice-areas' ? 2.2 : 1.8} />
        </div>
        <span
          className={`text-[8.5px] font-sans font-medium tracking-tight mt-0.5 leading-tight text-center transition-colors ${
            activeSection === 'practice-areas' ? 'text-white' : 'text-[#A5A5A5] group-hover:text-white'
          }`}
        >
          Practice Areas
        </span>
      </button>

      {/* 4. Contact */}
      <button
        type="button"
        onClick={() => scrollTo('contact', 'contact')}
        className="flex-1 flex flex-col items-center justify-center py-1 transition-all group cursor-pointer"
        aria-label="Scroll to Contact"
      >
        <div
          className={`flex items-center justify-center px-2.5 py-1 rounded-xl transition-all duration-300 ${
            activeSection === 'contact'
              ? 'bg-white/20 text-white shadow-sm'
              : 'text-[#A5A5A5] group-hover:text-white'
          }`}
        >
          <MessageCircle className="w-4 h-4" strokeWidth={activeSection === 'contact' ? 2.2 : 1.8} />
        </div>
        <span
          className={`text-[9.5px] font-sans font-medium tracking-tight mt-0.5 leading-none transition-colors ${
            activeSection === 'contact' ? 'text-white' : 'text-[#A5A5A5] group-hover:text-white'
          }`}
        >
          Contact
        </span>
      </button>

      {/* Vertical Divider */}
      <div className="w-[1px] h-7 bg-white/20 mx-1 shrink-0" />

      {/* 5. Consult Pill Button */}
      <button
        type="button"
        onClick={onOpenConsultation}
        className="bg-[#F5F2EA] hover:bg-white text-[#0B0B0B] rounded-[18px] px-3.5 py-1.5 flex flex-col items-center justify-center shrink-0 shadow-md active:scale-95 transition-all cursor-pointer group"
        aria-label="Book a consultation"
      >
        <Calendar className="w-4 h-4 text-[#0B0B0B]" strokeWidth={2} />
        <span className="text-[9.5px] font-sans font-bold text-[#0B0B0B] mt-0.5 leading-none tracking-tight">
          Consult
        </span>
      </button>
    </aside>
  );
};
