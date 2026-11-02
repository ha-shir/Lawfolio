import React from 'react';
import { Wifi, BatteryMedium, Signal, X } from 'lucide-react';

interface IPhonePreviewProps {
  children: React.ReactNode;
  onClose: () => void;
}

export const IPhonePreview: React.FC<IPhonePreviewProps> = ({ children, onClose }) => {
  return (
    <div className="min-h-screen bg-[#080808] py-8 sm:py-12 px-4 flex flex-col items-center justify-center relative">
      
      {/* Top Showcase Toolbar */}
      <div className="w-full max-w-4xl flex items-center justify-between mb-6 px-4">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-sans tracking-[0.2em] text-[#F5F2EA] uppercase font-medium">
            iPhone 16 Pro Mobile Presentation Showcase
          </span>
          <span className="text-[11px] text-[#A5A5A5] hidden sm:inline">
            (Interactive live scroll inside device frame)
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-[#F5F2EA] text-xs font-sans tracking-wide transition-colors"
        >
          <span>Exit to Fullscreen</span>
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* iPhone 16 Pro Device Mockup Container */}
      <div className="relative w-[390px] sm:w-[410px] h-[844px] bg-[#1a1a1a] rounded-[52px] p-[10px] shadow-[0_0_80px_rgba(0,0,0,0.9),0_0_40px_rgba(255,255,255,0.05)] border-[4px] border-[#383838] ring-1 ring-white/20">
        
        {/* Outer Titanium Bezel Highlights */}
        <div className="absolute inset-0 rounded-[48px] pointer-events-none border border-white/10" />

        {/* Volume Buttons & Power Button simulation */}
        <div className="absolute -left-[7px] top-[140px] w-[3px] h-[32px] bg-[#4a4a4a] rounded-l" />
        <div className="absolute -left-[7px] top-[190px] w-[3px] h-[48px] bg-[#4a4a4a] rounded-l" />
        <div className="absolute -left-[7px] top-[248px] w-[3px] h-[48px] bg-[#4a4a4a] rounded-l" />
        <div className="absolute -right-[7px] top-[180px] w-[3px] h-[64px] bg-[#4a4a4a] rounded-r" />

        {/* Screen Bezel & Display */}
        <div className="relative w-full h-full bg-[#0B0B0B] rounded-[42px] overflow-hidden flex flex-col border border-black shadow-inner">
          
          {/* iOS Status Bar */}
          <div className="absolute top-0 left-0 right-0 z-50 h-11 px-7 flex items-center justify-between text-white text-[12px] font-sans font-semibold pointer-events-none select-none">
            {/* Time */}
            <span>9:41</span>

            {/* Dynamic Island */}
            <div className="w-[110px] h-[28px] bg-black rounded-full flex items-center justify-end pr-2.5 shadow-sm">
              <div className="w-3 h-3 rounded-full bg-[#121212] border border-white/10 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#061026]" />
              </div>
            </div>

            {/* Status Icons */}
            <div className="flex items-center gap-1.5 text-white">
              <Signal className="w-3.5 h-3.5 fill-current" />
              <Wifi className="w-3.5 h-3.5" />
              <BatteryMedium className="w-4 h-4" />
            </div>
          </div>

          {/* Scrollable Device Web Content */}
          <div className="w-full h-full overflow-y-auto overflow-x-hidden pt-11 pb-8 no-scrollbar scroll-smooth">
            {children}
          </div>

          {/* iOS Home Indicator Bar */}
          <div className="absolute bottom-1.5 left-0 right-0 flex justify-center pointer-events-none z-50">
            <div className="w-32 h-1 bg-white/40 rounded-full" />
          </div>

        </div>
      </div>

      {/* Bottom hint */}
      <div className="mt-4 text-center text-xs text-[#A5A5A5] font-sans">
        Tip: Scroll inside the iPhone screen to experience touch navigation, practice cards, and animations.
      </div>
    </div>
  );
};
