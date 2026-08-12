import React, { useState } from 'react';
import { 
  RotateCw, 
  CheckCircle2, 
  QrCode, 
  Sparkles, 
  Phone, 
  Mail, 
  Globe, 
  ShieldCheck, 
  Instagram, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube,
  Award,
  Maximize2
} from 'lucide-react';
import { MouryaLogo } from './MouryaLogo';

interface InteractivePouchProps {
  className?: string;
  initialView?: 'front' | 'back';
  allowFlip?: boolean;
}

export const InteractivePouch: React.FC<InteractivePouchProps> = ({
  className = '',
  initialView = 'front',
  allowFlip = true,
}) => {
  const [view, setView] = useState<'front' | 'back'>(initialView);
  const [isFlipping, setIsFlipping] = useState(false);

  const toggleView = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setView((prev) => (prev === 'front' ? 'back' : 'front'));
      setIsFlipping(false);
    }, 200);
  };

  return (
    <div className={`flex flex-col items-center space-y-4 ${className}`}>
      
      {/* Flip Controls Bar */}
      {allowFlip && (
        <div className="flex items-center gap-2 p-1.5 bg-[#0c382b] border border-[#d4af37]/40 rounded-2xl shadow-lg z-10">
          <button
            onClick={() => { setView('front'); }}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              view === 'front'
                ? 'bg-[#d4af37] text-[#0c382b] shadow-md'
                : 'text-gray-300 hover:text-white hover:bg-[#124233]'
            }`}
          >
            <span>Front Pouch View</span>
          </button>

          <button
            onClick={toggleView}
            className="p-1.5 text-[#d4af37] hover:text-white bg-[#124233] hover:bg-[#1a4d3e] rounded-xl border border-[#2d5848] transition-all"
            title="Flip Pouch 180°"
          >
            <RotateCw className="w-4 h-4" />
          </button>

          <button
            onClick={() => { setView('back'); }}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              view === 'back'
                ? 'bg-[#d4af37] text-[#0c382b] shadow-md'
                : 'text-gray-300 hover:text-white hover:bg-[#124233]'
            }`}
          >
            <span>Back Label View</span>
          </button>
        </div>
      )}

      {/* Main Standup Pouch Container */}
      <div 
        className={`relative w-full max-w-[380px] sm:max-w-[410px] aspect-[1/1.38] transition-all duration-300 transform ${
          isFlipping ? 'scale-95 opacity-50 rotate-y-90' : 'scale-100 opacity-100'
        }`}
      >
        {/* POUCH SHAPE CONTAINER - Dark Green Foil Seals */}
        <div className="w-full h-full bg-[#07241b] rounded-t-3xl rounded-b-[2.5rem] border-2 border-[#d4af37] shadow-2xl overflow-hidden flex flex-col relative text-[#07241b]">
          
          {/* Top Zipper Seal Header (Dark Green Metallic Ribbed) */}
          <div className="h-7 bg-gradient-to-r from-[#07241b] via-[#0f4e3b] to-[#07241b] border-b border-[#d4af37]/60 flex items-center justify-between px-6 shrink-0 relative overflow-hidden">
            {/* Zipper texture line */}
            <div className="w-full h-1 border-y border-dashed border-[#d4af37]/50" />
          </div>

          {/* Golden Curved Seal Banner */}
          <div className="h-2 bg-gradient-to-r from-[#b37b0d] via-[#f3d775] to-[#b37b0d] shrink-0" />

          {/* ==================== FRONT POUCH DESIGN ==================== */}
          {view === 'front' && (
            <div className="flex-1 bg-gradient-to-b from-[#fffef8] via-[#fcf6e8] to-[#f5e9d2] p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden">
              
              {/* Background Lotus Flower Corner Watermarks */}
              <div className="absolute bottom-24 left-2 w-24 h-24 opacity-20 pointer-events-none">
                <svg viewBox="0 0 100 100" fill="#07241b">
                  <path d="M50 10 C40 30 20 45 20 65 C20 80 35 90 50 90 C65 90 80 80 80 65 C80 45 60 30 50 10 Z" />
                </svg>
              </div>
              <div className="absolute bottom-24 right-2 w-24 h-24 opacity-20 pointer-events-none scale-x-[-1]">
                <svg viewBox="0 0 100 100" fill="#07241b">
                  <path d="M50 10 C40 30 20 45 20 65 C20 80 35 90 50 90 C65 90 80 80 80 65 C80 45 60 30 50 10 Z" />
                </svg>
              </div>

              {/* 100% Veg Symbol Top Right */}
              <div className="absolute top-3 right-4 flex items-center justify-center w-5 h-5 border-2 border-emerald-800 p-0.5 bg-white shadow-sm rounded-xs">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-800" />
              </div>

              {/* Header Crest Logo */}
              <div className="flex flex-col items-center text-center mt-1">
                <MouryaLogo variant="badge" size="lg" className="mb-1" />

                <h1 className="font-serif font-black text-2xl sm:text-3xl tracking-widest text-[#07241b] uppercase leading-none mt-1">
                  MOURYA
                </h1>

                {/* FOODS with Gold Lines */}
                <div className="flex items-center justify-center gap-2 w-full max-w-[200px] my-1">
                  <div className="h-[1.5px] bg-[#d4af37] flex-1" />
                  <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]" />
                  <span className="font-sans font-black tracking-[0.3em] text-[#07241b] text-xs uppercase">
                    FOODS
                  </span>
                  <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]" />
                  <div className="h-[1.5px] bg-[#d4af37] flex-1" />
                </div>

                {/* Premium Script Ribbon */}
                <div className="flex items-center gap-2 text-[#b37b0d] my-0.5">
                  <span className="h-[1px] w-5 bg-[#d4af37]" />
                  <span className="font-serif italic text-sm font-bold">
                    — Premium —
                  </span>
                  <span className="h-[1px] w-5 bg-[#d4af37]" />
                </div>

                {/* Main Product Name */}
                <h2 className="font-serif font-black text-xl sm:text-2xl tracking-wider text-[#07241b] uppercase">
                  BIHAR MAKHANA
                </h2>

                {/* Tagline */}
                <p className="text-[11px] font-bold text-[#5c4718] tracking-wider uppercase mt-0.5">
                  Healthy • Natural • Crunchy
                </p>
              </div>

              {/* Transparent Window Revealing Makhana Inside */}
              <div className="relative my-2 rounded-2xl border-2 border-[#d4af37] bg-black/5 overflow-hidden shadow-inner h-28 sm:h-32 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&q=80&w=800"
                  alt="Crispy Crunchy Phool Makhana Lotus Seeds Inside Pouch"
                  className="w-full h-full object-cover scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                
                {/* Window Badge */}
                <span className="absolute bottom-1.5 right-2 bg-[#0c382b]/90 text-[#d4af37] border border-[#d4af37]/60 text-[9px] font-bold px-2 py-0.5 rounded-full backdrop-blur-xs">
                  Transparent View Window
                </span>
              </div>

              {/* Bottom Dark Green Panel with 5 Feature Icons */}
              <div className="bg-[#0c382b] rounded-2xl p-2.5 text-white border border-[#2d5848] shadow-md space-y-2">
                <div className="grid grid-cols-5 gap-1 text-center text-[8.5px] font-bold uppercase tracking-tighter">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full border border-[#d4af37] flex items-center justify-center bg-[#124233] text-[#d4af37] mb-1">
                      <Sparkles className="w-3 h-3" />
                    </div>
                    <span>High Protein</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full border border-[#d4af37] flex items-center justify-center bg-[#124233] text-[#d4af37] mb-1">
                      <ShieldCheck className="w-3 h-3" />
                    </div>
                    <span>Gluten Free</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full border border-[#d4af37] flex items-center justify-center bg-[#124233] text-[#d4af37] mb-1">
                      <Award className="w-3 h-3" />
                    </div>
                    <span>Roasted Not Fried</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full border border-[#d4af37] flex items-center justify-center bg-[#124233] text-[#d4af37] mb-1">
                      <CheckCircle2 className="w-3 h-3" />
                    </div>
                    <span>No Preserv.</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full border border-[#d4af37] flex items-center justify-center bg-[#124233] text-[#d4af37] mb-1">
                      <span className="text-[10px]">🌿</span>
                    </div>
                    <span>100% Veg</span>
                  </div>
                </div>

                {/* Net Weight Gold Button */}
                <div className="flex justify-center pt-1">
                  <div className="px-5 py-1 bg-gradient-to-r from-[#d4af37] via-[#f3d775] to-[#d4af37] text-[#0c382b] font-black text-xs uppercase tracking-wider rounded-lg border border-[#07241b] shadow-sm flex items-center gap-1">
                    <span>Net Weight</span>
                    <span className="font-mono text-sm">100g</span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* ==================== BACK POUCH DESIGN ==================== */}
          {view === 'back' && (
            <div className="flex-1 bg-[#fffef8] p-4 text-[10px] flex flex-col justify-between text-[#07241b]">
              
              {/* Top 2-Column Info Section */}
              <div className="grid grid-cols-2 gap-3 border-b border-[#e2d5b6] pb-3">
                
                {/* Packaged & Marketed By */}
                <div className="space-y-1">
                  <div className="bg-[#0c382b] text-[#d4af37] font-extrabold px-2 py-0.5 rounded text-[8.5px] uppercase tracking-wider">
                    Packaged & Marketed By
                  </div>
                  <p className="font-serif font-black text-xs text-[#07241b]">
                    MOURYA FOODS
                  </p>
                  <p className="text-gray-700 leading-tight">
                    Village: Rehar Jungle<br />
                    Post: Chauka, Tehsil: Bhanpur<br />
                    District: Basti, UP - 272xxx
                  </p>
                  <p className="font-medium text-[#07241b] flex items-center gap-1 pt-0.5">
                    <Phone className="w-2.5 h-2.5 text-[#b37b0d]" /> +91 9137738436
                  </p>
                  <p className="font-medium text-[#07241b] flex items-center gap-1">
                    <Mail className="w-2.5 h-2.5 text-[#b37b0d]" /> mouryafoods18@gmail.com
                  </p>
                  <p className="font-medium text-[#07241b] flex items-center gap-1">
                    <Globe className="w-2.5 h-2.5 text-[#b37b0d]" /> www.mouryafoods.com
                  </p>
                  <div className="pt-1 flex items-center gap-1 font-bold text-[9px] text-[#0c382b]">
                    <span className="px-1 bg-[#d4af37] rounded text-[8px] font-extrabold text-[#0c382b]">fssai</span>
                    <span>Lic. No. 12723999000123</span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-1">
                  <div className="bg-[#0c382b] text-[#d4af37] font-extrabold px-2 py-0.5 rounded text-[8.5px] uppercase tracking-wider">
                    Product Information
                  </div>
                  <p><strong>Name:</strong> Premium Bihar Makhana</p>
                  <p><strong>Ingredients:</strong> 100% Premium Roasted Makhana (Fox Nuts)</p>
                  <p><strong>Net Weight:</strong> 100g</p>
                  <p><strong>Batch No.:</strong> MF100524</p>
                  <p><strong>Mfg. Date:</strong> 24 MAY 2024</p>
                  <p><strong>Best Before:</strong> 9 Months</p>
                  <p className="text-xs font-bold text-[#0c382b] pt-1">
                    MRP ₹ : <span className="font-mono text-sm font-black">129.00</span>
                  </p>
                  <p className="text-[8px] text-gray-500">(Inclusive of all taxes)</p>
                </div>

              </div>

              {/* Middle Section: Nutrition & Storage & QR */}
              <div className="grid grid-cols-2 gap-3 py-2 border-b border-[#e2d5b6]">
                
                {/* Nutrition Facts Table */}
                <div>
                  <div className="bg-[#0c382b] text-[#d4af37] font-extrabold px-2 py-0.5 rounded text-[8.5px] uppercase tracking-wider mb-1">
                    Nutrition Facts (Per 100g)
                  </div>
                  <table className="w-full text-left text-[9px] border-collapse">
                    <tbody>
                      <tr className="border-b border-[#f0e8d5]">
                        <td className="py-0.5 font-medium">Energy</td>
                        <td className="py-0.5 text-right font-bold">347 kcal</td>
                      </tr>
                      <tr className="border-b border-[#f0e8d5]">
                        <td className="py-0.5 font-medium">Protein</td>
                        <td className="py-0.5 text-right font-bold text-emerald-800">9.7 g</td>
                      </tr>
                      <tr className="border-b border-[#f0e8d5]">
                        <td className="py-0.5 font-medium">Carbohydrates</td>
                        <td className="py-0.5 text-right font-bold">76.9 g</td>
                      </tr>
                      <tr className="border-b border-[#f0e8d5]">
                        <td className="py-0.5 font-medium">Total Fat</td>
                        <td className="py-0.5 text-right font-bold text-emerald-800">0.1 g</td>
                      </tr>
                      <tr>
                        <td className="py-0.5 font-medium">Dietary Fiber</td>
                        <td className="py-0.5 text-right font-bold">14.5 g</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Storage & Scan Social Handles */}
                <div className="space-y-2 flex flex-col justify-between">
                  <div>
                    <div className="bg-[#0c382b] text-[#d4af37] font-extrabold px-2 py-0.5 rounded text-[8.5px] uppercase tracking-wider mb-1">
                      Storage Instructions
                    </div>
                    <p className="text-[8.5px] text-gray-700 leading-tight">
                      Store in a cool, dry and hygienic place. Keep away from direct sunlight and moisture.
                    </p>
                  </div>

                  <div className="bg-[#f5e9d2] p-1.5 rounded-xl border border-[#d4af37]/60 flex items-center gap-2">
                    <div className="w-9 h-9 bg-white p-0.5 rounded border border-[#d4af37] flex items-center justify-center shrink-0">
                      <QrCode className="w-full h-full text-[#07241b]" />
                    </div>
                    <div>
                      <span className="font-extrabold text-[8px] text-[#07241b] uppercase block">
                        Scan to Follow Us
                      </span>
                      <span className="text-[8px] font-bold text-[#b37b0d] block">
                        @mouryafoods
                      </span>
                      <div className="flex gap-1 text-[#0c382b] mt-0.5">
                        <Instagram className="w-2.5 h-2.5" />
                        <Facebook className="w-2.5 h-2.5" />
                        <Twitter className="w-2.5 h-2.5" />
                        <Linkedin className="w-2.5 h-2.5" />
                        <Youtube className="w-2.5 h-2.5" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Section: Barcode & Slogan Ribbon */}
              <div className="pt-1 space-y-1.5">
                
                <div className="flex items-end justify-between px-1">
                  {/* GS1 Barcode */}
                  <div className="flex flex-col items-center">
                    <div className="font-mono text-base tracking-tighter leading-none font-bold text-[#07241b]">
                      ||||| |||| ||||||| ||||
                    </div>
                    <span className="font-mono text-[9px] font-bold tracking-widest text-[#07241b]">
                      8 906122 852469
                    </span>
                  </div>

                  {/* Clean City Icon */}
                  <div className="border border-gray-400 p-1 rounded text-[8px] font-bold text-gray-700 flex items-center gap-1">
                    <span>🚮</span>
                    <span>Keep Your City Clean</span>
                  </div>
                </div>

                {/* Green Bottom Footer Slogan */}
                <div className="bg-[#0c382b] text-[#d4af37] p-1.5 rounded-xl text-center font-bold text-[9px] uppercase tracking-wider border border-[#d4af37]/40 shadow-sm">
                  🌾 PURITY FROM BIHAR, PACKED WITH CARE BY MOURYA FOODS 🌾
                </div>

              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
