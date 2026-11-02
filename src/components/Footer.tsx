import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer id="contact" className="bg-[#0B0B0B] text-white pt-16 sm:pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-14 items-center">
          
          {/* Left: Monogram and Advocate Details (4 cols) */}
          <div className="md:col-span-4 flex items-center gap-4">
            <div className="w-11 h-11 rounded-sm bg-[#151515] border border-white/15 flex items-center justify-center shrink-0">
              <span className="font-editorial text-xl tracking-wider text-[#F5F2EA] font-semibold italic">
                AM
              </span>
            </div>

            <div className="flex flex-col text-left">
              <span className="font-editorial text-lg text-[#F5F2EA] tracking-wide font-medium leading-none">
                Adv. Arjun Menon
              </span>
              <span className="text-[10px] font-sans tracking-[0.25em] text-[#A5A5A5] uppercase mt-1">
                Advocate
              </span>
            </div>
          </div>

          {/* Middle: Contact Coordinates (5 cols) */}
          <div className="md:col-span-5 flex flex-wrap md:flex-nowrap items-center gap-6 sm:gap-8 text-xs font-sans text-[#A5A5A5]">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 hover:text-[#F5F2EA] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-white/60" />
              <span>+91 98765 43210</span>
            </a>

            <a
              href="mailto:contact@arjunmenon.in"
              className="flex items-center gap-2 hover:text-[#F5F2EA] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-white/60" />
              <span>contact@arjunmenon.in</span>
            </a>

            <div className="flex items-center gap-2 text-[#A5A5A5]">
              <MapPin className="w-3.5 h-3.5 text-white/60 shrink-0" />
              <span>Ernakulam, Kerala</span>
            </div>
          </div>

          {/* Right: Social Media Icons (3 cols) */}
          <div className="md:col-span-3 flex items-center md:justify-end gap-3">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-9 h-9 rounded-sm border border-white/15 bg-white/[0.03] flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.96 0 1.74-.78 1.74-1.74a1.74 1.74 0 1 0-3.48 0c0 .96.78 1.74 1.74 1.74m1.39 9.74v-8.37H5.07v8.37h2.78z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="w-9 h-9 rounded-sm border border-white/15 bg-white/[0.03] flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-colors"
            >
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube Channel"
              className="w-9 h-9 rounded-sm border border-white/15 bg-white/[0.03] flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>

        </div>

        {/* Thin Divider */}
        <div className="w-full h-[1px] bg-white/10" />

        {/* Bottom Disclaimer & Legal Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-sans text-[#A5A5A5]/80">
          <p>
            © {new Date().getFullYear()} Adv. Arjun Menon. All rights reserved.
          </p>

          <p className="max-w-xl text-center md:text-right text-[10px] text-[#A5A5A5]/60 leading-normal">
            Disclaimer: As per the rules of the Bar Council of India, advocates are prohibited from soliciting work or advertising. This website is purely intended for informational purposes and does not create an advocate-client relationship.
          </p>
        </div>

      </div>
    </footer>
  );
};
