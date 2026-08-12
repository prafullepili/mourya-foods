import React from 'react';

interface MouryaLogoProps {
  variant?: 'full' | 'horizontal' | 'badge' | 'pouch-card' | 'poster';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  showTagline?: boolean;
  lightMode?: boolean;
}

export const MouryaLogo: React.FC<MouryaLogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  className = '',
  showTagline = true,
  lightMode = false,
}) => {
  // Size mappings
  const badgeSizes = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32',
    '2xl': 'w-44 h-44',
  };

  const textSizes = {
    sm: { main: 'text-base', sub: 'text-[9px]', tag: 'text-[8px]' },
    md: { main: 'text-2xl', sub: 'text-[11px]', tag: 'text-[9.5px]' },
    lg: { main: 'text-3xl', sub: 'text-xs', tag: 'text-[11px]' },
    xl: { main: 'text-4xl', sub: 'text-sm', tag: 'text-xs' },
    '2xl': { main: 'text-5xl', sub: 'text-base', tag: 'text-sm' },
  };

  // High-Precision SVG matching the official Mourya Foods logo uploaded by user
  const OfficialLogoSvg = ({ badgeClass = 'w-full h-full' }: { badgeClass?: string }) => (
    <div className={`relative flex items-center justify-center shrink-0 ${badgeClass}`}>
      <svg
        viewBox="0 0 300 300"
        className="w-full h-full drop-shadow-xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f7e698" />
            <stop offset="40%" stopColor="#d4af37" />
            <stop offset="85%" stopColor="#aa820a" />
            <stop offset="100%" stopColor="#876502" />
          </linearGradient>

          <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0d4535" />
            <stop offset="50%" stopColor="#072b21" />
            <stop offset="100%" stopColor="#031711" />
          </linearGradient>

          <linearGradient id="bowlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e8c764" />
            <stop offset="50%" stopColor="#b88c1d" />
            <stop offset="100%" stopColor="#6e4f03" />
          </linearGradient>

          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ================= OUTER GOLDEN LAUREL WREATHS (WHEAT / LEAF BRANCHES) ================= */}
        <g stroke="url(#goldGrad)" fill="url(#goldGrad)">
          {/* Left Laurel Branch */}
          <path d="M 82 220 C 50 190, 42 140, 62 85" strokeWidth="3" fill="none" strokeLinecap="round" />
          {/* Left Leaves */}
          <path d="M 64 88 C 50 75, 38 80, 32 92 C 45 92, 55 86, 64 88 Z" />
          <path d="M 58 110 C 42 98, 30 105, 24 118 C 38 116, 48 108, 58 110 Z" />
          <path d="M 54 135 C 38 126, 26 135, 20 148 C 34 144, 44 135, 54 135 Z" />
          <path d="M 55 160 C 40 155, 28 165, 24 178 C 38 172, 46 161, 55 160 Z" />
          <path d="M 62 185 C 48 184, 38 196, 36 208 C 48 200, 55 188, 62 185 Z" />
          <path d="M 74 206 C 62 210, 54 222, 54 234 C 64 224, 70 212, 74 206 Z" />

          {/* Right Laurel Branch */}
          <path d="M 218 220 C 250 190, 258 140, 238 85" strokeWidth="3" fill="none" strokeLinecap="round" />
          {/* Right Leaves */}
          <path d="M 236 88 C 250 75, 262 80, 268 92 C 255 92, 245 86, 236 88 Z" />
          <path d="M 242 110 C 258 98, 270 105, 276 118 C 262 116, 252 108, 242 110 Z" />
          <path d="M 246 135 C 262 126, 274 135, 280 148 C 266 144, 256 135, 246 135 Z" />
          <path d="M 245 160 C 260 155, 272 165, 276 178 C 262 172, 254 161, 245 160 Z" />
          <path d="M 238 185 C 252 184, 262 196, 264 208 C 252 200, 245 188, 238 185 Z" />
          <path d="M 226 206 C 238 210, 246 222, 246 234 C 236 224, 230 212, 226 206 Z" />
        </g>

        {/* ================= CENTRAL CIRCULAR EMBLEM ================= */}
        {/* Outer Gold Ring Base */}
        <circle cx="150" cy="140" r="92" fill="none" stroke="url(#goldGrad)" strokeWidth="6" />
        <circle cx="150" cy="140" r="86" fill="none" stroke="url(#goldGrad)" strokeWidth="1.5" strokeDasharray="4 2" />

        {/* Inner Circle Dark Green Fill */}
        <circle cx="150" cy="140" r="84" fill="url(#greenGrad)" stroke="url(#goldGrad)" strokeWidth="3" />

        {/* Lotus Crown Motif on Top inside Circle */}
        <g fill="url(#goldGrad)" transform="translate(150, 78) scale(1)">
          {/* Crown Base Line */}
          <path d="M -16 12 C -8 15, 8 15, 16 12 C 10 10, -10 10, -16 12 Z" />
          {/* Crown Spikes/Petals */}
          <path d="M 0 -16 L 4 -2 L -4 -2 Z" />
          <path d="M -10 -11 L -4 1 L -12 2 Z" />
          <path d="M 10 -11 L 4 1 L 12 2 Z" />
          <circle cx="0" cy="-18" r="2.5" />
          <circle cx="-11" cy="-13" r="2" />
          <circle cx="11" cy="-13" r="2" />
        </g>

        {/* Central Regal Serif 'M' Letter */}
        <text
          x="150"
          y="152"
          textAnchor="middle"
          fill="url(#goldGrad)"
          fontSize="72"
          fontWeight="900"
          fontFamily="Georgia, 'Times New Roman', serif"
          filter="url(#glow)"
        >
          M
        </text>

        {/* ================= BOWL FILLED WITH CRISP MAKHANA ================= */}
        <g transform="translate(150, 185)">
          {/* Golden Bowl Shell */}
          <path
            d="M -50 0 C -50 26, 50 26, 50 0 C 42 -2, -42 -2, -50 0 Z"
            fill="url(#bowlGrad)"
            stroke="url(#goldGrad)"
            strokeWidth="2"
          />
          <ellipse cx="0" cy="0" rx="48" ry="8" fill="#876502" />

          {/* Popped White Makhana Balls in Bowl */}
          <g fill="#fefdfa" stroke="#dcd2be" strokeWidth="0.8">
            {/* Back Layer Makhana */}
            <circle cx="-32" cy="-6" r="8" />
            <circle cx="-18" cy="-10" r="9" />
            <circle cx="0" cy="-12" r="10" />
            <circle cx="18" cy="-10" r="9" />
            <circle cx="32" cy="-6" r="8" />

            {/* Front Layer Makhana */}
            <circle cx="-26" cy="-2" r="9" />
            <circle cx="-10" cy="-4" r="10" />
            <circle cx="10" cy="-4" r="10" />
            <circle cx="26" cy="-2" r="9" />
            <circle cx="0" cy="1" r="10.5" />
          </g>

          {/* Natural Brown Roasting Speckles on Makhana */}
          <g fill="#73521e">
            <circle cx="-10" cy="-5" r="1" />
            <circle cx="-7" cy="-2" r="0.8" />
            <circle cx="10" cy="-5" r="1" />
            <circle cx="12" cy="-2" r="0.8" />
            <circle cx="0" cy="1" r="1.2" />
            <circle cx="2" cy="4" r="0.8" />
            <circle cx="-26" cy="-3" r="0.9" />
            <circle cx="26" cy="-3" r="0.9" />
          </g>
        </g>
      </svg>
    </div>
  );

  // 1. BADGE ONLY VARIANT
  if (variant === 'badge') {
    return <OfficialLogoSvg badgeClass={`${badgeSizes[size]} ${className}`} />;
  }

  // 2. HORIZONTAL HEADER / NAV BAR LOGO
  if (variant === 'horizontal') {
    const ts = textSizes[size];
    const textColor = lightMode ? 'text-[#07241b]' : 'text-white';
    const subColor = lightMode ? 'text-[#07241b]' : 'text-[#d4af37]';
    const tagColor = lightMode ? 'text-[#4a3a14]' : 'text-[#e2d5b6]';

    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <OfficialLogoSvg badgeClass={badgeSizes[size]} />
        <div className="flex flex-col text-left">
          <span className={`font-serif font-black tracking-widest leading-none ${ts.main} ${textColor} drop-shadow-sm`}>
            MOURYA
          </span>

          <div className="flex items-center justify-between gap-1 w-full my-0.5">
            <span className="h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent flex-1" />
            <span className={`font-sans font-extrabold tracking-[0.25em] ${subColor} uppercase ${ts.sub}`}>
              FOODS
            </span>
            <span className="h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent flex-1" />
          </div>

          {showTagline && (
            <span className={`font-serif italic ${tagColor} tracking-wider ${ts.tag}`}>
              Pure Makhana • Pure Health • Pure Bihar
            </span>
          )}
        </div>
      </div>
    );
  }

  // 3. FULL LOGO POSTER EMBLEM (Exactly matching user's uploaded logo design poster)
  if (variant === 'full' || variant === 'poster' || variant === 'pouch-card') {
    return (
      <div className={`flex flex-col items-center text-center p-6 sm:p-8 bg-gradient-to-b from-[#fffef8] via-[#fcf8ee] to-[#f4e8d0] text-[#07241b] rounded-3xl border-2 border-[#d4af37] shadow-2xl relative overflow-hidden ${className}`}>
        
        {/* Top Central Official Emblem SVG */}
        <div className="w-36 h-36 sm:w-48 sm:h-48 mb-2">
          <OfficialLogoSvg />
        </div>

        {/* Brand Name: MOURYA */}
        <h2 className="font-serif font-black text-4xl sm:text-5xl tracking-[0.12em] text-[#07241b] uppercase leading-none mt-2">
          MOURYA
        </h2>

        {/* Subtitle with Arrows: —➢ FOODS ➢— */}
        <div className="flex items-center justify-center gap-2 w-full max-w-[280px] my-2">
          <div className="h-[1.5px] bg-[#d4af37] flex-1" />
          <span className="text-[#b88c1d] font-bold text-xs">➔</span>
          <span className="font-sans font-black tracking-[0.35em] text-[#07241b] text-base uppercase">
            FOODS
          </span>
          <span className="text-[#b88c1d] font-bold text-xs">➔</span>
          <div className="h-[1.5px] bg-[#d4af37] flex-1" />
        </div>

        {/* Official Tagline Slogan */}
        <div className="mt-1 mb-2">
          <p className="font-sans font-extrabold text-[11px] sm:text-xs tracking-[0.18em] text-[#07241b] uppercase">
            PURE MAKHANA <span className="text-[#d4af37] mx-1">•</span> PURE HEALTH <span className="text-[#d4af37] mx-1">•</span> PURE BIHAR
          </p>
        </div>

        {/* Bottom Decorative Lotus Petal Flourish */}
        <div className="flex items-center justify-center gap-2 w-full max-w-[200px] pt-2 border-t border-[#d4af37]/40 text-[#0d4535]">
          <div className="h-[1px] bg-[#d4af37] flex-1" />
          <svg className="w-5 h-5 fill-[#0d4535]" viewBox="0 0 24 24">
            <path d="M12 3c-2 3-5 5-8 6 3 2 5 5 8 12 3-7 5-10 8-12-3-1-6-3-8-6z" />
          </svg>
          <div className="h-[1px] bg-[#d4af37] flex-1" />
        </div>

      </div>
    );
  }

  return null;
};

