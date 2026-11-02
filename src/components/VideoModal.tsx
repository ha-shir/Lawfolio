import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Shield, Award, CheckCircle } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultation,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-lg">
      <div className="relative w-full max-w-3xl bg-[#0B0B0B] border border-white/20 rounded-sm overflow-hidden shadow-2xl">
        
        {/* Top Header */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-sans tracking-[0.25em] text-[#A5A5A5] uppercase font-medium">
              Chamber Profile & Philosophy
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-white/60 hover:text-white p-1 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Screen / Cinematic Presentation */}
        <div className="relative aspect-video bg-[#121212] overflow-hidden group">
          {/* Background image & mood */}
          <img
            src="/advocate-portrait.jpg"
            alt="Adv. Muhammad Ajmal KTV Chamber Intro"
            className="w-full h-full object-cover grayscale brightness-75 contrast-125"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-black/40 to-black/20" />

          {/* Cinematic Quote Overlay */}
          <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end text-left z-10">
            <div className="max-w-xl">
              <span className="text-[10px] font-sans tracking-widest uppercase text-[#F5F2EA] bg-white/10 backdrop-blur px-2.5 py-1 rounded-sm border border-white/15">
                Editorial Overview
              </span>

              <h4 className="font-editorial text-xl sm:text-3xl text-white font-medium mt-3 mb-2 leading-tight">
                “Every legal brief is a strategic pursuit of justice, clarity, and unyielding dignity.”
              </h4>

              <p className="text-xs sm:text-sm font-sans text-[#A5A5A5] font-light leading-relaxed hidden sm:block">
                Practicing before the High Court of Kerala, Subordinate Courts, and Commercial Tribunals. Committed to empirical legal drafting, strategic cross-examination, and client confidentiality.
              </p>
            </div>
          </div>

          {/* Simulated Controls overlay */}
          <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsMuted(!isMuted)}
              className="p-2 rounded-full bg-black/60 text-white hover:bg-black/90 border border-white/20 transition-colors"
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-full bg-black/60 text-white hover:bg-black/90 border border-white/20 transition-colors"
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Footer info bar */}
        <div className="p-5 sm:p-6 bg-[#151515] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-xs font-sans text-[#A5A5A5]">
            <div className="flex items-center gap-1.5 text-[#F5F2EA]">
              <Shield className="w-4 h-4" />
              <span>Bar Council of Kerala</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5 text-[#F5F2EA]">
              <Award className="w-4 h-4" />
              <span>8+ Years Practice</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="w-full sm:w-auto px-5 py-2.5 bg-[#F5F2EA] text-[#0B0B0B] text-xs font-sans font-semibold tracking-wider uppercase rounded-sm hover:bg-white transition-colors"
          >
            Schedule Consultation →
          </button>
        </div>

      </div>
    </div>
  );
};
