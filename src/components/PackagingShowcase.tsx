import React, { useState } from 'react';
import { InteractivePouch } from './InteractivePouch';
import { 
  ShieldCheck, 
  Award, 
  QrCode, 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  Download, 
  Eye, 
  Maximize2, 
  X,
  Package,
  Layers,
  Printer,
  Scale
} from 'lucide-react';

export const PackagingShowcase: React.FC = () => {
  const [viewMode, setViewMode] = useState<'photo' | 'interactive'>('photo');
  const [activeTab, setActiveTab] = useState<'both' | 'front' | 'back'>('both');
  const [selectedVariant, setSelectedVariant] = useState<'100g' | '200g' | '250g'>('100g');
  const [isZoomOpen, setIsZoomOpen] = useState<boolean>(false);

  const packVariants = [
    { size: '100g', label: '100g Standard Pouch', badge: 'Retail Standup Zip', mrp: '₹135' },
    { size: '200g', label: '200g Eco Saver Pouch', badge: 'Desk Snack Pack', mrp: '₹260' },
    { size: '250g', label: '250g Family Pack', badge: '★ Bestseller', mrp: '₹320' },
  ];

  const handleDownloadSpecs = () => {
    alert('Mourya Foods Pack Design & GS1 GTIN Label Specs downloaded successfully! (PDF Format)');
  };

  return (
    <section className="py-10 md:py-10 bg-gradient-to-b from-[#08291f] via-[#0c382b] to-[#07241b] text-white relative overflow-hidden border-y border-[#1b4e3e]" id="pack-design">
      {/* Background Watermark & Glow */}
      <div className="absolute inset-0 bg-lotus-watermark opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#124233] text-[#d4af37] text-xs font-extrabold uppercase tracking-widest border border-[#d4af37]/40 shadow-sm">
            <Award className="w-3.5 h-3.5" />
            Official Pack Design & Print Specification Studio
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Official 100g Standup Zip Pouch Artwork
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
            Inspect our 100% authentic Mourya Foods Bihar Phool Makhana packaging design — featuring moisture-resistant triple-layer foil, nitrogen-flushed window, FSSAI licence & GS1 GTIN barcode details.
          </p>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto rounded-full" />
        </div>

        {/* View Mode Switcher & Actions Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between bg-[#07241b] border border-[#2d5848] p-2 sm:p-3 rounded-2xl mb-8 max-w-4xl mx-auto shadow-xl">
          
          {/* Mode Switcher: Photo Render vs Interactive Vector Specification */}
          <div className="flex items-center gap-2 bg-[#0c382b] p-1 rounded-xl border border-[#2d5848] w-full sm:w-auto justify-center">
            <button
              onClick={() => setViewMode('photo')}
              className={`px-4 py-2 rounded-lg text-xs font-extrabold transition-all flex items-center gap-1.5 ${
                viewMode === 'photo'
                  ? 'bg-[#d4af37] text-[#0c382b] shadow'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Studio Photo Mockup</span>
            </button>

            <button
              onClick={() => setViewMode('interactive')}
              className={`px-4 py-2 rounded-lg text-xs font-extrabold transition-all flex items-center gap-1.5 ${
                viewMode === 'interactive'
                  ? 'bg-[#d4af37] text-[#0c382b] shadow'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Interactive Label Vector</span>
            </button>
          </div>

          {/* Action Buttons: Zoom & Download Print Specs */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
            <button
              onClick={() => setIsZoomOpen(true)}
              className="bg-[#124233] hover:bg-[#1a4d3e] text-[#d4af37] border border-[#d4af37]/40 px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Inspect Fullscreen</span>
            </button>

            <button
              onClick={handleDownloadSpecs}
              className="bg-gradient-to-r from-[#d4af37] to-[#b88c1d] text-[#0c382b] hover:brightness-110 px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5 shadow"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Print Specs PDF</span>
            </button>
          </div>

        </div>

        {/* Variant Size Selector Bar */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-6">
          {packVariants.map((varItem) => (
            <button
              key={varItem.size}
              onClick={() => setSelectedVariant(varItem.size as any)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 border flex items-center gap-2 ${
                selectedVariant === varItem.size
                  ? 'bg-[#1a4d3e] border-[#d4af37] text-[#d4af37] shadow-lg ring-1 ring-[#d4af37]'
                  : 'bg-[#0c382b] border-[#2d5848] text-gray-300 hover:text-white'
              }`}
            >
              <Package className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{varItem.label}</span>
              <span className="text-[10px] bg-[#d4af37]/20 text-[#d4af37] px-1.5 py-0.2 rounded font-mono">
                {varItem.mrp}
              </span>
            </button>
          ))}
        </div>

        {/* ================= PHOTO STUDIO MOCKUP VIEW ================= */}
        {viewMode === 'photo' && (
          <div className="bg-[#0c382b]/90 border-2 border-[#d4af37]/50 rounded-3xl p-4 sm:p-6 shadow-2xl backdrop-blur-md max-w-5xl mx-auto space-y-6">
            
            <div className="flex items-center justify-between border-b border-[#2d5848] pb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#d4af37]" />
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                  Mourya Foods 100g Standup Pouch Front & Back Studio Render
                </h3>
              </div>
              <span className="bg-[#124233] text-[#d4af37] border border-[#d4af37]/40 px-3 py-1 rounded-full text-xs font-bold hidden sm:inline">
                High-Resolution Artwork
              </span>
            </div>

            {/* High Definition Photo Mockup Render */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#d4af37]/40 bg-black/40 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&q=80&w=1200"
                alt="Mourya Foods Premium Bihar Makhana Pouch Packaging Design Front and Back"
                className="w-full h-[380px] sm:h-[520px] object-cover rounded-2xl group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Overlay Graphical Pack Artwork Showcase Box */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07241b] via-transparent to-black/30 p-6 flex flex-col justify-between">
                
                {/* Top Badges */}
                <div className="flex justify-between items-start">
                  <div className="bg-[#0c382b]/95 border border-[#d4af37] px-3 py-1.5 rounded-xl backdrop-blur-md text-xs font-bold text-[#d4af37]">
                    🌿 100% Organic Bihar Lotus Seeds
                  </div>
                  <div className="bg-[#0c382b]/95 border border-[#d4af37] px-3 py-1.5 rounded-xl backdrop-blur-md text-xs font-bold text-white">
                    FSSAI Lic. 12723999000123
                  </div>
                </div>

                {/* Bottom Pack Specs Bar */}
                <div className="bg-[#07241b]/95 border border-[#d4af37]/60 p-4 rounded-2xl backdrop-blur-md text-xs text-gray-200 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div>
                    <span className="text-[#d4af37] font-bold block text-sm">Resealable Zipper</span>
                    <span className="text-[11px] text-gray-300">Triple-Layer Zip Lock</span>
                  </div>
                  <div>
                    <span className="text-[#d4af37] font-bold block text-sm">Nitrogen Flushed</span>
                    <span className="text-[11px] text-gray-300">9 Months Freshness</span>
                  </div>
                  <div>
                    <span className="text-[#d4af37] font-bold block text-sm">Window View</span>
                    <span className="text-[11px] text-gray-300">Transparent Quality Window</span>
                  </div>
                  <div>
                    <span className="text-[#d4af37] font-bold block text-sm">GS1 GTIN Barcode</span>
                    <span className="text-[11px] text-gray-300">8906122852469</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* ================= INTERACTIVE VECTOR LABEL VIEW ================= */}
        {viewMode === 'interactive' && (
          <div className="space-y-6">
            {/* View Toggle Tabs */}
            <div className="flex justify-center">
              <div className="inline-flex p-1.5 bg-[#07241b] border border-[#2d5848] rounded-2xl">
                <button
                  onClick={() => setActiveTab('both')}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                    activeTab === 'both'
                      ? 'bg-[#d4af37] text-[#0c382b] shadow-md'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Side-by-Side View (Front & Back)
                </button>
                <button
                  onClick={() => setActiveTab('front')}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                    activeTab === 'front'
                      ? 'bg-[#d4af37] text-[#0c382b] shadow-md'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Front Pouch Only
                </button>
                <button
                  onClick={() => setActiveTab('back')}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                    activeTab === 'back'
                      ? 'bg-[#d4af37] text-[#0c382b] shadow-md'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Back Label Only
                </button>
              </div>
            </div>

            {/* Side-by-Side Pouch Display */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center max-w-5xl mx-auto">
              
              {/* FRONT POUCH DISPLAY */}
              {(activeTab === 'both' || activeTab === 'front') && (
                <div className="bg-[#0c382b]/90 border-2 border-[#d4af37]/40 rounded-3xl p-6 shadow-2xl backdrop-blur-md flex flex-col items-center">
                  <div className="w-full flex items-center justify-between pb-3 border-b border-[#2d5848] mb-4 text-xs font-extrabold text-[#d4af37]">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4" />
                      FRONT VIEW - MOURYA POUCH
                    </span>
                    <span className="bg-[#124233] text-gray-200 px-2 py-0.5 rounded text-[10px] border border-[#2d5848]">
                      Standup Zip Pouch ({selectedVariant})
                    </span>
                  </div>

                  <InteractivePouch initialView="front" allowFlip={false} />

                  <div className="mt-4 pt-3 border-t border-[#124233] w-full text-center text-xs text-gray-300 space-y-1">
                    <p className="font-bold text-amber-200">✨ Key Front Features:</p>
                    <p className="text-[11px] text-gray-300">
                      Resealable metallic zip lock • Transparent window • 5 Health Badges • Gold Foil Lotus Emblem
                    </p>
                  </div>
                </div>
              )}

              {/* BACK POUCH DISPLAY */}
              {(activeTab === 'both' || activeTab === 'back') && (
                <div className="bg-[#0c382b]/90 border-2 border-[#d4af37]/40 rounded-3xl p-6 shadow-2xl backdrop-blur-md flex flex-col items-center">
                  <div className="w-full flex items-center justify-between pb-3 border-b border-[#2d5848] mb-4 text-xs font-extrabold text-[#d4af37]">
                    <span className="flex items-center gap-1.5">
                      <FileText className="w-4 h-4" />
                      BACK VIEW - OFFICIAL LABEL
                    </span>
                    <span className="bg-[#124233] text-gray-200 px-2 py-0.5 rounded text-[10px] border border-[#2d5848]">
                      FSSAI & GS1 Verified
                    </span>
                  </div>

                  <InteractivePouch initialView="back" allowFlip={false} />

                  <div className="mt-4 pt-3 border-t border-[#124233] w-full text-center text-xs text-gray-300 space-y-1">
                    <p className="font-bold text-amber-200">🔍 Key Back Specifications:</p>
                    <p className="text-[11px] text-gray-300">
                      Manufacturer: Basti, UP • Batch & Mfg Date • Nutrition Panel • QR Code & Barcode
                    </p>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

        {/* Bottom Verification Banner */}
        <div className="mt-12 max-w-4xl mx-auto bg-[#124233] border border-[#d4af37]/40 rounded-2xl p-6 text-center space-y-4 shadow-xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-bold">
            <div className="p-3 bg-[#0c382b] rounded-xl border border-[#2d5848]">
              <span className="text-[#d4af37] block text-base font-black">FSSAI Lic.</span>
              <span className="text-gray-300 text-[11px]">12723999000123</span>
            </div>
            <div className="p-3 bg-[#0c382b] rounded-xl border border-[#2d5848]">
              <span className="text-[#d4af37] block text-base font-black">GTIN Barcode</span>
              <span className="text-gray-300 text-[11px]">8906122852469</span>
            </div>
            <div className="p-3 bg-[#0c382b] rounded-xl border border-[#2d5848]">
              <span className="text-[#d4af37] block text-base font-black">Processing Unit</span>
              <span className="text-gray-300 text-[11px]">Basti, Uttar Pradesh</span>
            </div>
            <div className="p-3 bg-[#0c382b] rounded-xl border border-[#2d5848]">
              <span className="text-[#d4af37] block text-base font-black">Origin Source</span>
              <span className="text-gray-300 text-[11px]">Mithila, Bihar</span>
            </div>
          </div>
        </div>

      </div>

      {/* Fullscreen Inspector Modal */}
      {isZoomOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#0c382b] border-2 border-[#d4af37] rounded-3xl max-w-4xl w-full p-6 text-white relative shadow-2xl space-y-4 my-8">
            <button
              onClick={() => setIsZoomOpen(false)}
              className="absolute top-4 right-4 bg-[#124233] text-gray-300 hover:text-white p-2 rounded-full border border-[#2d5848]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-1">
              <h3 className="font-serif text-2xl font-bold text-[#d4af37]">
                Mourya Foods High-Definition Packaging Inspector
              </h3>
              <p className="text-xs text-gray-300">
                Front & Back Packaging Label Specifications (100g Standup Foil Zip Pouch)
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="bg-[#07241b] p-4 rounded-2xl border border-[#2d5848] text-center">
                <h4 className="font-bold text-xs text-[#d4af37] mb-2">FRONT POUCH VIEW</h4>
                <InteractivePouch initialView="front" allowFlip={false} />
              </div>
              <div className="bg-[#07241b] p-4 rounded-2xl border border-[#2d5848] text-center">
                <h4 className="font-bold text-xs text-[#d4af37] mb-2">BACK LABEL SPECIFICATION</h4>
                <InteractivePouch initialView="back" allowFlip={false} />
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

