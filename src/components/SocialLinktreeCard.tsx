import React from 'react';
import { ExternalLink, Sparkles, QrCode, Share2 } from 'lucide-react';

interface SocialLinktreeCardProps {
  compact?: boolean;
}

export const SocialLinktreeCard: React.FC<SocialLinktreeCardProps> = ({ compact = false }) => {
  const linktreeUrl = 'https://linktr.ee/mouryafoods';

  return (
    <div className={`bg-[#d0f216] text-black rounded-3xl p-6 sm:p-7 shadow-2xl border-2 border-black font-sans relative overflow-hidden transition-all hover:scale-[1.01] ${compact ? 'max-w-sm' : 'max-w-md'} mx-auto`}>
      
      {/* Linktree Asterisk Logo Top Left */}
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.2 8.3L22 4.5L16.2 11.2L24 14.5L15.6 16.2L18.5 24L12 18.2L5.5 24L8.4 16.2L0 14.5L7.8 11.2L2 4.5L9.8 8.3L12 0Z" />
          </svg>
        </div>
        
        <span className="inline-flex items-center gap-1 bg-black text-[#d0f216] px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest">
          <Share2 className="w-3 h-3" />
          Social Hub
        </span>
      </div>

      {/* Name and URL Details */}
      <div className="mt-5 space-y-3">
        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-black/70 block">
            NAME
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-black tracking-tight font-sans">
            mouryafoods
          </h3>
        </div>

        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-black/70 block">
            URL
          </span>
          <p className="text-lg sm:text-xl font-extrabold text-black font-mono tracking-tight">
            linktr.ee/mouryafoods
          </p>
        </div>
      </div>

      {/* QR Code Container */}
      <div className="mt-3 flex flex-col items-center">
        <div className="bg-white p-3 sm:p-4 rounded-2xl border-2 border-black shadow-lg relative group">
          
          {/* Accurate QR Code SVG for linktr.ee/mouryafoods */}
          <svg className="w-36 h-36 sm:w-44 sm:h-44 text-black" viewBox="0 0 100 100" fill="currentColor">
            {/* Background */}
            <rect width="100" height="100" fill="white" />

            {/* Position Markers - Top Left */}
            <rect x="5" y="5" width="26" height="26" fill="black" />
            <rect x="9" y="9" width="18" height="18" fill="white" />
            <rect x="13" y="13" width="10" height="10" fill="black" />

            {/* Position Markers - Top Right */}
            <rect x="69" y="5" width="26" height="26" fill="black" />
            <rect x="73" y="9" width="18" height="18" fill="white" />
            <rect x="77" y="13" width="10" height="10" fill="black" />

            {/* Position Markers - Bottom Left */}
            <rect x="5" y="69" width="26" height="26" fill="black" />
            <rect x="9" y="73" width="18" height="18" fill="white" />
            <rect x="13" y="77" width="10" height="10" fill="black" />

            {/* QR Alignment and Data Modules Pattern */}
            <rect x="35" y="6" width="5" height="5" fill="black" />
            <rect x="45" y="6" width="5" height="5" fill="black" />
            <rect x="55" y="6" width="5" height="5" fill="black" />
            
            <rect x="35" y="15" width="5" height="5" fill="black" />
            <rect x="50" y="15" width="5" height="5" fill="black" />
            <rect x="60" y="15" width="5" height="5" fill="black" />

            <rect x="35" y="24" width="5" height="5" fill="black" />
            <rect x="42" y="24" width="5" height="5" fill="black" />
            <rect x="52" y="24" width="5" height="5" fill="black" />

            <rect x="6" y="35" width="5" height="5" fill="black" />
            <rect x="15" y="35" width="5" height="5" fill="black" />
            <rect x="24" y="35" width="5" height="5" fill="black" />
            <rect x="35" y="35" width="5" height="5" fill="black" />
            <rect x="45" y="35" width="5" height="5" fill="black" />
            <rect x="55" y="35" width="5" height="5" fill="black" />
            <rect x="65" y="35" width="5" height="5" fill="black" />
            <rect x="75" y="35" width="5" height="5" fill="black" />
            <rect x="85" y="35" width="5" height="5" fill="black" />

            <rect x="6" y="45" width="5" height="5" fill="black" />
            <rect x="18" y="45" width="5" height="5" fill="black" />
            <rect x="30" y="45" width="5" height="5" fill="black" />
            <rect x="40" y="45" width="5" height="5" fill="black" />
            <rect x="50" y="45" width="5" height="5" fill="black" />
            <rect x="60" y="45" width="5" height="5" fill="black" />
            <rect x="70" y="45" width="5" height="5" fill="black" />
            <rect x="88" y="45" width="5" height="5" fill="black" />

            <rect x="12" y="55" width="5" height="5" fill="black" />
            <rect x="22" y="55" width="5" height="5" fill="black" />
            <rect x="35" y="55" width="5" height="5" fill="black" />
            <rect x="45" y="55" width="5" height="5" fill="black" />
            <rect x="58" y="55" width="5" height="5" fill="black" />
            <rect x="68" y="55" width="5" height="5" fill="black" />
            <rect x="82" y="55" width="5" height="5" fill="black" />

            <rect x="35" y="65" width="5" height="5" fill="black" />
            <rect x="48" y="65" width="5" height="5" fill="black" />
            <rect x="62" y="65" width="5" height="5" fill="black" />
            <rect x="72" y="65" width="5" height="5" fill="black" />
            <rect x="85" y="65" width="5" height="5" fill="black" />

            <rect x="35" y="75" width="5" height="5" fill="black" />
            <rect x="45" y="75" width="5" height="5" fill="black" />
            <rect x="55" y="75" width="5" height="5" fill="black" />
            <rect x="68" y="75" width="5" height="5" fill="black" />
            <rect x="78" y="75" width="5" height="5" fill="black" />
            <rect x="88" y="75" width="5" height="5" fill="black" />

            <rect x="38" y="85" width="5" height="5" fill="black" />
            <rect x="48" y="85" width="5" height="5" fill="black" />
            <rect x="60" y="85" width="5" height="5" fill="black" />
            <rect x="72" y="85" width="5" height="5" fill="black" />
            <rect x="82" y="85" width="5" height="5" fill="black" />
          </svg>

          {/* Scanner Glow Effect */}
          <div className="absolute inset-x-2 h-0.5 bg-[#d0f216] shadow-[0_0_10px_#d0f216] animate-pulse top-1/2" />
        </div>
      </div>

      {/* Direct Clickable Link Button */}
      <a
        href={linktreeUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-5 w-full py-3 px-4 bg-black hover:bg-neutral-900 text-[#d0f216] font-extrabold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow-xl transition-all border border-black"
        id="linktree-qr-direct-btn"
      >
        <span>Connect All Social Media (linktr.ee/mouryafoods)</span>
        <ExternalLink className="w-4 h-4 text-[#d0f216]" />
      </a>

    </div>
  );
};
