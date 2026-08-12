import React from 'react';
import { ShieldCheck, Barcode, CheckCircle2, FileCheck2, Award, Lock, Sparkles } from 'lucide-react';

export const QualitySafety: React.FC = () => {
  const commitments = [
    'Hygienic untouched automated handling',
    'Quality-controlled temperature dry roasting',
    'Triple-layer moisture food-grade pouch packaging',
    'Climate-controlled sanitary warehouse storage',
    'Complete batch traceability & lot tracking',
    'FSSAI-compliant pre-packaged labelling standards'
  ];

  const labelRequirements = [
    'Official Product Name & Brand Marking',
    'Complete Ingredient List & Flavoring Details',
    'Approximate Nutritional Information Per 100g',
    'Green 100% Vegetarian Dot Declaration Symbol',
    'Manufacturer & Packer Details (Chembur, Mumbai Address)',
    'Net Weight Quantity (100g, 200g, 250g, 500g, 1kg)',
    'Batch/Lot Number & Manufacturing Date Marking',
    'GS1 India Authorised Barcode (890 Prefix Series)'
  ];

  return (
    <section id="quality" className="py-16 md:py-24 bg-[#07241b] text-[#fcf8f2] font-sans relative border-t border-b border-[#1b4e3e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[#d4af37] bg-[#1a4d3e] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-[#d4af37]/30">
            FSSAI & GS1 India Authorised
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Quality, Safety & FSSAI Standards
          </h2>
          <p className="text-sm sm:text-base text-[#e2d5b6]">
            Every MOURYA FOODS pouch meets stringent Indian food safety regulations, GTIN barcodes, and sanitary export standards.
          </p>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Card 1: Our Quality Commitment */}
          <div className="bg-[#0c382b] p-8 rounded-3xl border border-[#d4af37]/40 shadow-xl space-y-6">
            <div className="flex items-center gap-3 text-[#d4af37] border-b border-[#1b4e3e] pb-4">
              <ShieldCheck className="w-8 h-8 shrink-0" />
              <div>
                <h3 className="font-serif font-bold text-2xl text-white">
                  Our Quality Commitment
                </h3>
                <p className="text-xs text-gray-300">Sanitary processing from pond to pouch</p>
              </div>
            </div>

            <ul className="space-y-3">
              {commitments.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-gray-200">
                  <div className="w-5 h-5 rounded-full bg-[#1a4d3e] text-[#d4af37] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-[#1b4e3e] flex items-center gap-3 text-xs text-[#d4af37]">
              <Award className="w-5 h-5" />
              <span>100% Food Safety and Standards Authority of India (FSSAI) Approved</span>
            </div>
          </div>

          {/* Card 2: Pre-packaged Food Labelling & GS1 Barcodes */}
          <div className="bg-[#0c382b] p-8 rounded-3xl border border-[#d4af37]/40 shadow-xl space-y-6">
            <div className="flex items-center gap-3 text-[#d4af37] border-b border-[#1b4e3e] pb-4">
              <Barcode className="w-8 h-8 shrink-0" />
              <div>
                <h3 className="font-serif font-bold text-2xl text-white">
                  GS1 Barcode & Label Compliance
                </h3>
                <p className="text-xs text-gray-300">Modern retail & supermarket POS ready (890 series)</p>
              </div>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed">
              As per GS1 India standards, each SKU variant has its own unique GTIN starting with <strong>890</strong> (India prefix) for seamless inventory scanning on Amazon, Flipkart, and modern supermarkets.
            </p>

            <ul className="space-y-2 text-xs text-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {labelRequirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-[#124233] p-2 rounded-lg border border-[#2d5848]">
                  <Sparkles className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>

            <div className="p-3 bg-[#124233] rounded-xl border border-[#2d5848] text-xs font-mono text-amber-200">
              <p>SKU GTIN Example: Makhana 250g → <span className="font-bold text-[#d4af37]">8908012345250</span> (MF-250)</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
