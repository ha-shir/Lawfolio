import React from 'react';

export const WhatsAppButton: React.FC = () => {
  const phoneNumber = '918075110582';
  const defaultMessage = encodeURIComponent(
    'Hello Adv. Muhammad Ajmal KTV, I would like to inquire about a legal consultation.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-22 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center justify-end select-none"
    >
      <div className="relative group">
        {/* Desktop Tooltip */}
        <div
          role="tooltip"
          className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-[#0B0B0B] text-white text-xs font-sans font-medium whitespace-nowrap shadow-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden sm:flex items-center gap-1.5"
        >
          <span>Chat on WhatsApp</span>
          <span className="text-emerald-400 font-bold">•</span>
          <span className="text-neutral-400 text-[10px]">Active</span>
          <div className="absolute left-full top-1/2 -translate-y-1/2 -ml-1 border-4 border-transparent border-l-[#0B0B0B]" />
        </div>

        {/* Pulsing Ripple Effect */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none"
          style={{ animationDuration: '2.4s' }}
        />

        {/* Official WhatsApp Floating Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Adv. Muhammad Ajmal KTV on WhatsApp (+91 80751 10582)"
          className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer filter drop-shadow-[0_8px_20px_rgba(37,211,102,0.45)] hover:drop-shadow-[0_12px_28px_rgba(37,211,102,0.65)]"
        >
          {/* Official WhatsApp 2-Color Vector Icon */}
          <svg
            className="w-full h-full"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Authentic WhatsApp Green Speech Bubble with Tail */}
            <path
              fill="#25D366"
              d="M24.02 4C12.97 4 4 12.97 4 24.02c0 3.53.92 6.92 2.67 9.94L4 44l10.33-2.61c2.92 1.59 6.23 2.44 9.69 2.44 11.05 0 20.02-8.97 20.02-20.02C44.04 12.97 35.07 4 24.02 4z"
            />
            {/* Official White Phone Handset */}
            <path
              fill="#FFFFFF"
              d="M35.04 30.13c-.56-.28-3.32-1.64-3.83-1.83-.51-.19-.88-.28-1.25.28-.37.56-1.43 1.83-1.75 2.21-.32.38-.64.43-1.2.15-.56-.28-2.36-.87-4.5-2.77-1.66-1.48-2.78-3.3-3.11-3.85-.33-.56-.03-.86.24-1.14.25-.25.56-.64.84-.96.28-.32.37-.56.56-.93.19-.37.09-.7-.05-.98-.14-.28-1.25-3.01-1.71-4.12-.45-1.09-.91-.94-1.25-.96-.32-.02-.69-.02-1.06-.02-.37 0-.97.14-1.48.69-.51.56-1.95 1.91-1.95 4.66 0 2.75 2 5.41 2.28 5.79.28.38 3.94 6.02 9.55 8.44 1.33.57 2.37.91 3.18 1.17 1.34.43 2.56.37 3.52.22 1.08-.16 3.32-1.36 3.79-2.67.47-1.31.47-2.43.33-2.67-.14-.24-.51-.38-1.07-.66z"
            />
          </svg>
        </a>
      </div>
    </aside>
  );
};
