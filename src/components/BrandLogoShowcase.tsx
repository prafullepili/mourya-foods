import React from 'react';
import { MouryaLogo } from './MouryaLogo';
import { Award, ShieldCheck, Download, Sparkles, CheckCircle2, Palette, Layers, Star } from 'lucide-react';

export const BrandLogoShowcase: React.FC = () => {
  const handleDownloadLogo = () => {
    alert('Official Mourya Foods Brand Logo & Design Vector Kit downloaded successfully! (SVG & HD PNG format)');
  };

  return (
    <section className="py-16 bg-gradient-to-b from-[#08291f] via-[#0c382b] to-[#07241b] text-white border-b border-[#1b4e3e] relative overflow-hidden" id="brand-logo">
      {/* Background Watermarks */}
      <div className="absolute inset-0 bg-lotus-watermark opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#124233] text-[#d4af37] text-xs font-extrabold uppercase tracking-widest border border-[#d4af37]/40 shadow-sm">
            <Award className="w-4 h-4" />
            Official Brand Identity & Emblem Studio
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Mourya Foods Brand Logo & Design
          </h2>
          <p className="text-sm sm:text-base text-gray-300">
            Discover the visual heritage, craftsmanship, and regal symbolism behind the official Mourya Foods trademark emblem and packaging design.
          </p>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto rounded-full" />
        </div>

        {/* Main Grid: Left Poster Logo Card vs Right Brand Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Official Poster Emblem Card */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="w-full max-w-md relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#d4af37] to-[#b88c1d] rounded-3xl blur opacity-30 animate-pulse" />
              <MouryaLogo variant="full" className="relative z-10 w-full shadow-2xl" />
            </div>

            <button
              onClick={handleDownloadLogo}
              className="mt-6 bg-gradient-to-r from-[#d4af37] to-[#b88c1d] text-[#0c382b] font-black px-6 py-3 rounded-xl text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-lg w-full max-w-md"
            >
              <Download className="w-4 h-4" />
              <span>Download Brand Logo HD Kit (SVG / PNG)</span>
            </button>
          </div>

          {/* Right Column: Breakdown of Brand Logo Elements */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-[#0c382b] border border-[#d4af37]/40 p-6 rounded-2xl shadow-xl space-y-4">
              <h3 className="font-serif text-xl font-bold text-[#d4af37] flex items-center gap-2 border-b border-[#2d5848] pb-3">
                <Sparkles className="w-5 h-5 text-[#d4af37]" />
                Brand Emblem Design Breakdown
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-gray-200">
                
                {/* 1. Crown & M Crest */}
                <div className="flex items-start gap-3 bg-[#124233] p-3.5 rounded-xl border border-[#2d5848]">
                  <div className="p-2 bg-[#d4af37]/20 text-[#d4af37] rounded-lg shrink-0 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Crown Lotus & Regal 'M' Crest</h4>
                    <p className="text-gray-300 text-xs mt-0.5">
                      The top lotus crown pays homage to Mithila's sacred lotus ponds, while the central serif 'M' represents the royal heritage of the Mauryan empire & premium food craftsmanship.
                    </p>
                  </div>
                </div>

                {/* 2. Golden Laurel Wreath */}
                <div className="flex items-start gap-3 bg-[#124233] p-3.5 rounded-xl border border-[#2d5848]">
                  <div className="p-2 bg-[#d4af37]/20 text-[#d4af37] rounded-lg shrink-0 mt-0.5">
                    <Star className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Golden Wheat & Laurel Wreaths</h4>
                    <p className="text-gray-300 text-xs mt-0.5">
                      Twin golden paddy stalks frame the central emblem, symbolizing organic agricultural purity, hand-harvested lotus seeds, and farming prosperity.
                    </p>
                  </div>
                </div>

                {/* 3. Bowl of Makhana */}
                <div className="flex items-start gap-3 bg-[#124233] p-3.5 rounded-xl border border-[#2d5848]">
                  <div className="p-2 bg-[#d4af37]/20 text-[#d4af37] rounded-lg shrink-0 mt-0.5">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Golden Bowl of Popped Makhana</h4>
                    <p className="text-gray-300 text-xs mt-0.5">
                      A central golden vessel filled with crisp white foxnuts decorated with natural brown roasting speckles — representing authentic, unadulterated food purity.
                    </p>
                  </div>
                </div>

                {/* 4. Tri-Core Slogan */}
                <div className="flex items-start gap-3 bg-[#124233] p-3.5 rounded-xl border border-[#2d5848]">
                  <div className="p-2 bg-[#d4af37]/20 text-[#d4af37] rounded-lg shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Tri-Core Quality Slogan</h4>
                    <p className="text-xs font-mono text-[#d4af37] uppercase font-bold mt-0.5">
                      "PURE MAKHANA • PURE HEALTH • PURE BIHAR"
                    </p>
                    <p className="text-gray-300 text-xs mt-1">
                      Our brand promise: 100% Grade-A lotus seed quality, zero chemicals or artificial additives, sourced straight from Bihar farmers.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Brand Colors Palette Cards */}
            <div className="bg-[#0c382b] border border-[#2d5848] p-5 rounded-2xl shadow-xl space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#d4af37] flex items-center gap-1.5">
                <Palette className="w-4 h-4" />
                Official Brand Color Palette Specs
              </h4>

              <div className="grid grid-cols-3 gap-3 text-center text-xs">
                <div className="bg-[#0d4535] p-3 rounded-xl border border-[#2d5848]">
                  <div className="w-full h-6 rounded bg-[#0d4535] border border-[#2d5848] mb-1.5" />
                  <span className="font-bold block text-white">Forest Emerald</span>
                  <span className="text-[10px] font-mono text-gray-400">#0D4535</span>
                </div>

                <div className="bg-[#124233] p-3 rounded-xl border border-[#2d5848]">
                  <div className="w-full h-6 rounded bg-[#d4af37] mb-1.5" />
                  <span className="font-bold block text-white">Royal Gold</span>
                  <span className="text-[10px] font-mono text-amber-300">#D4AF37</span>
                </div>

                <div className="bg-[#124233] p-3 rounded-xl border border-[#2d5848]">
                  <div className="w-full h-6 rounded bg-[#fffef8] border border-gray-300 mb-1.5" />
                  <span className="font-bold block text-white">Lotus Ivory</span>
                  <span className="text-[10px] font-mono text-gray-300">#FFFEF8</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
