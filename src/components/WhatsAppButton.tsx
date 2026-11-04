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

        {/* WhatsApp Floating Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Adv. Muhammad Ajmal KTV on WhatsApp (+91 80751 10582)"
          className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_30px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
        >
          {/* Authentic WhatsApp SVG Icon */}
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.507 14.307l-.009.075c-.238-.12-1.406-.694-1.624-.774-.219-.079-.378-.119-.537.12-.159.239-.616.774-.755.934-.139.159-.279.179-.517.06-.239-.12-1.009-.372-1.923-1.187-.711-.634-1.191-1.417-1.331-1.656-.139-.239-.015-.368.105-.487.108-.107.239-.279.359-.418.12-.14.159-.239.239-.399.079-.159.04-.299-.02-.418-.06-.12-.538-1.296-.737-1.774-.194-.467-.392-.403-.538-.411-.139-.007-.299-.009-.458-.009-.16 0-.418.06-.637.299-.219.239-.837.818-.837 1.994 0 1.176.857 2.312.977 2.472.12.159 1.687 2.576 4.088 3.613.571.247 1.017.394 1.365.505.574.182 1.096.156 1.509.094.46-.069 1.406-.575 1.605-1.131.199-.556.199-1.032.14-1.131-.06-.099-.22-.159-.459-.278zM12.042 21.758h-.008c-1.724 0-3.415-.464-4.893-1.343l-.351-.208-3.642.955.972-3.551-.228-.363c-.966-1.536-1.476-3.315-1.476-5.143 0-5.378 4.377-9.755 9.759-9.755 2.606 0 5.056 1.016 6.899 2.859 1.843 1.844 2.858 4.294 2.858 6.9 0 5.38-4.377 9.756-9.759 9.756zm0-17.758c-4.409 0-7.997 3.588-7.997 7.997 0 1.517.426 2.999 1.233 4.283l.19.303-.578 2.11 2.164-.567.292.173c1.238.735 2.658 1.124 4.114 1.124 4.409 0 7.997-3.588 7.997-7.997 0-4.409-3.588-7.997-7.997-7.997zM12.042 2C6.42 2 1.847 6.573 1.847 12.196c0 1.868.51 3.684 1.476 5.275L2 23.5l6.216-1.3c1.538.839 3.272 1.282 5.042 1.282 5.622 0 10.196-4.574 10.196-10.197 0-2.723-1.061-5.283-2.987-7.21C18.542 4.148 15.982 2 12.042 2z" />
          </svg>
        </a>
      </div>
    </aside>
  );
};
