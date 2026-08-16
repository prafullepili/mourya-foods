import React, { useState } from 'react';
import { MouryaLogo } from './MouryaLogo';
import { InteractivePouch } from './InteractivePouch';
import {
  ShoppingBag,
  Package,
  PhoneCall,
  Sparkles,
  Award,
  ArrowRight,
  Flame,
  Leaf,
  CheckCircle2,
  QrCode,
} from 'lucide-react';

interface HeroProps {
  setActiveTab: (tab: string) => void;
  setIsQRModalOpen: (open: boolean) => void;
  // onOpenQRModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ setActiveTab, setIsQRModalOpen }) => {
  const packSizes = [
    { size: '100g', label: 'Handy Pouch', sku: 'MF-100', highlight: false },
    { size: '200g', label: 'Eco Pack', sku: 'MF-200', highlight: false },
    { size: '250g', label: 'Family Pack', sku: 'MF-250', highlight: true },
    // { size: '500g', label: 'Jumbo Pack', sku: 'MF-500', highlight: false },
    // { size: '1kg', label: 'Bulk Saver', sku: 'MF-1000', highlight: true },
  ];

  return (
    <section className="relative bg-mourya-pouch-pattern bg-lotus-watermark text-[#fcf8f2] py-10 border-b border-[#1b4e3e] bg-[#0c382b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Pill Tagline */}
            <div className="inline-flex items-center gap-2 bg-[#1a4d3e]/90 border border-[#d4af37]/40 px-4 py-1.5 rounded-full text-xs font-semibold text-[#d4af37] shadow-inner">
              <Sparkles className="w-4 h-4 text-[#d4af37] animate-spin" style={{ animationDuration: '6s' }} />
              <span>Direct Sourced from Lotus Ponds of Bihar</span>
            </div>

            {/* Main Brand Headline */}
            <div className="space-y-2">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                MOURYA FOODS
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl font-light text-[#d4af37] tracking-wide font-serif">
                Premium Bihar Makhana
              </p>
            </div>

            {/* Core Brand Value Slogan */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-4 text-sm sm:text-base font-medium text-[#e2d5b6]">
              <span className="flex items-center gap-1.5 bg-[#0c382b] px-3 py-1 rounded-full border border-[#1b4e3e]">
                <Leaf className="w-4 h-4 text-emerald-400" />
                Healthy
              </span>
              <span className="text-[#d4af37]">•</span>
              <span className="flex items-center gap-1.5 bg-[#0c382b] px-3 py-1 rounded-full border border-[#1b4e3e]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Natural
              </span>
              <span className="text-[#d4af37]">•</span>
              <span className="flex items-center gap-1.5 bg-[#0c382b] px-3 py-1 rounded-full border border-[#1b4e3e]">
                <Flame className="w-4 h-4 text-amber-400" />
                Crunchy
              </span>
            </div>

            {/* Suvria-Style Key Health Micro-Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs">
              <span className="bg-suvria-terracotta text-white font-semibold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                🌿 Low GI 35
              </span>
              <span className="bg-[#124233] text-amber-200 font-semibold px-3 py-1 rounded-full border border-[#d4af37]/40 flex items-center gap-1">
                💪 9g Plant Protein
              </span>
              <span className="bg-[#124233] text-emerald-300 font-semibold px-3 py-1 rounded-full border border-[#2d5848] flex items-center gap-1">
                ⚡ 60% Less Cal. vs Chips
              </span>
              <span className="bg-[#124233] text-amber-300 font-semibold px-3 py-1 rounded-full border border-[#2d5848] flex items-center gap-1">
                ⚡ 10-Min Delivery Ready
              </span>
            </div>

            {/* Quote Slogan */}
            <p className="text-lg sm:text-xl font-serif italic text-amber-100/90 py-1 border-l-4 border-[#d4af37] pl-4 my-2 max-w-xl mx-auto lg:mx-0">
              “Taste the Purity of Bihar”
            </p>

            <p className="text-sm sm:text-base text-[#e2d5b6]/90 max-w-xl leading-relaxed mx-auto lg:mx-0">
              Hand-selected, jumbo-sized Phool Makhana processed in certified hygienic facilities. Zero oil, rich in plant protein, and tailored for online retail, bulk wholesale, and international export.
            </p>

            {/* Action Buttons: Shop Now, Wholesale Enquiry, Contact Us */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => {
                  setActiveTab('products');
                  window.scrollTo({ top: 500, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto bg-gradient-to-r from-[#d4af37] via-[#c59b27] to-[#b88c1d] text-[#0c382b] px-7 py-3.5 rounded-xl font-bold text-base shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2 border border-amber-200 group"
                id="hero-shop-now-btn"
              >
                <ShoppingBag className="w-5 h-5 text-[#0c382b]" />
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  setActiveTab('wholesale');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto bg-[#1a4d3e] hover:bg-[#235e4d] text-white px-6 py-3.5 rounded-xl font-semibold text-base border border-[#d4af37]/50 shadow-lg transition-all flex items-center justify-center gap-2"
                id="hero-bulk-enquiry-btn"
              >
                <Package className="w-5 h-5 text-[#d4af37]" />
                <span> Bulk/Wholesale Enquiry</span>
              </button>

              <button
                onClick={() => {
                  setActiveTab('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto bg-transparent hover:bg-[#0c382b] text-[#e2d5b6] hover:text-[#d4af37] px-5 py-3.5 rounded-xl font-medium text-sm transition-all flex items-center justify-center gap-2 border border-[#2d5848]"
                id="hero-contact-us-btn"
              >
                <PhoneCall className="w-4 h-4 text-[#d4af37]" />
                <span> Contact Us</span>
              </button>
            </div>

            {/* Available Pack Sizes Bar */}
            <div className="pt-6 border-t border-[#1b4e3e]">
              <p className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-3">
                Available Packaging Sizes:
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {packSizes.map((pack) => (
                  <button
                    key={pack.size}
                    onClick={() => {
                      setActiveTab('products');
                      window.scrollTo({ top: 500, behavior: 'smooth' });
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${pack.highlight
                      ? 'bg-[#d4af37] text-[#0c382b] shadow-md ring-2 ring-amber-300'
                      : 'bg-[#124233] text-[#e2d5b6] border border-[#2d5848] hover:border-[#d4af37]'
                      }`}
                  >
                    <span>{pack.size}</span>
                    <span className="text-[10px] font-medium">({pack.label})</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Standup Pouch (Front & Back Label View) */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none space-y-4">
              {/* Official Interactive Standup Pouch Container */}
              <div className="relative bg-gradient-to-b from-[#124233] to-[#08291f] p-4 sm:p-6 rounded-3xl border-2 border-[#d4af37]/40 shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between pb-3 border-b border-[#2d5848] mb-4 text-xs font-bold text-amber-200">
                  <div className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-[#d4af37]" />
                    <span>Official 100g Standup Pouch</span>
                  </div>
                  <span className="bg-[#d4af37] text-[#0c382b] px-2 py-0.5 rounded text-[10px] font-extrabold uppercase">
                    Authentic Pack
                  </span>
                </div>

                {/* 3D Interactive Pouch with Flip controls */}
                <InteractivePouch allowFlip={true} />
              </div>

              {/* Quick Action Pouch Barcode CTA */}
              <div className="bg-[#0c382b] border border-[#2d5848] rounded-2xl p-3.5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#124233] text-[#d4af37] rounded-xl border border-[#2d5848]">
                    <QrCode className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Official GS1 Barcode Pouch</span>
                    <span className="text-gray-300 text-[11px]">8906122852469 | Scan for Traceability</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsQRModalOpen(true)}
                  className="px-3 py-1.5 bg-[#d4af37] hover:bg-[#e2bd44] text-[#0c382b] font-extrabold text-[11px] rounded-lg transition-all"
                >
                  Scan Pouch
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
