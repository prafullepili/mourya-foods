import React, { useState } from 'react';
import { QrCode, X, Globe, Instagram, ShoppingBag, PhoneCall, Sparkles, CheckCircle2, ArrowRight, Share2, ExternalLink } from 'lucide-react';
import { SocialLinktreeCard } from './SocialLinktreeCard';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  setActiveTab: (tab: string) => void;
}

export const QRCodeModal: React.FC<QRCodeModalProps> = ({
  isOpen,
  onClose,
  setActiveTab,
}) => {
  const [activeQrType, setActiveQrType] = useState<'social' | 'pouch'>('social');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#0c382b] border-2 border-[#d4af37] rounded-3xl max-w-lg w-full p-6 sm:p-7 text-[#fcf8f2] relative shadow-2xl animate-scaleIn text-center space-y-5 my-8 max-h-[90vh] overflow-y-auto no-scrollbar">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-white bg-[#124233] p-2 rounded-full border border-[#2d5848] transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1 pt-2">
          <div className="inline-flex items-center gap-1.5 bg-[#1a4d3e] text-[#d4af37] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-[#d4af37]/30">
            <QrCode className="w-3.5 h-3.5" />
            Official QR Code Hub
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Connect With MOURYA FOODS
          </h3>
          <p className="text-xs text-[#e2d5b6]">
            Scan to follow all our official social media handles or verify physical pouch authenticity.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex bg-[#124233] p-1.5 rounded-2xl border border-[#2d5848] text-xs font-bold gap-1">
          <button
            onClick={() => setActiveQrType('social')}
            className={`flex-1 py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              activeQrType === 'social'
                ? 'bg-[#d0f216] text-black shadow-lg font-black'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            <Share2 className="w-4 h-4" />
            <span>Social Handles QR</span>
          </button>
          
          <button
            onClick={() => setActiveQrType('pouch')}
            className={`flex-1 py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              activeQrType === 'pouch'
                ? 'bg-[#d4af37] text-[#0c382b] shadow-lg font-black'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            <QrCode className="w-4 h-4" />
            <span>Pouch Smart QR</span>
          </button>
        </div>

        {/* TAB 1: SOCIAL MEDIA LINKTREE QR CARD */}
        {activeQrType === 'social' && (
          <div className="space-y-4 animate-fadeIn">
            <SocialLinktreeCard />
            <p className="text-[11px] text-gray-300">
              Scans directly to <strong className="text-[#d0f216] font-mono">linktr.ee/mouryafoods</strong> for Instagram, Facebook, WhatsApp, YouTube & LinkedIn.
            </p>
          </div>
        )}

        {/* TAB 2: PHYSICAL POUCH QR */}
        {activeQrType === 'pouch' && (
          <div className="space-y-5 animate-fadeIn">
            {/* QR Code Visual / Scan Simulator */}
            <div className="relative mx-auto w-44 h-44 bg-white p-4 rounded-2xl border-4 border-[#d4af37] shadow-inner flex flex-col items-center justify-center group">
              <svg className="w-full h-full text-[#0c382b]" viewBox="0 0 100 100" fill="currentColor">
                <rect x="5" y="5" width="25" height="25" fill="#0c382b"/>
                <rect x="9" y="9" width="17" height="17" fill="white"/>
                <rect x="13" y="13" width="9" height="9" fill="#0c382b"/>

                <rect x="70" y="5" width="25" height="25" fill="#0c382b"/>
                <rect x="74" y="9" width="17" height="17" fill="white"/>
                <rect x="78" y="13" width="9" height="9" fill="#0c382b"/>

                <rect x="5" y="70" width="25" height="25" fill="#0c382b"/>
                <rect x="9" y="74" width="17" height="17" fill="white"/>
                <rect x="13" y="78" width="9" height="9" fill="#0c382b"/>

                <circle cx="50" cy="50" r="14" fill="#0c382b"/>
                <circle cx="50" cy="50" r="12" fill="#d4af37"/>

                <rect x="35" y="10" width="6" height="6" fill="#0c382b"/>
                <rect x="45" y="10" width="6" height="6" fill="#0c382b"/>
                <rect x="55" y="10" width="6" height="6" fill="#0c382b"/>
                <rect x="35" y="20" width="6" height="6" fill="#0c382b"/>
                <rect x="50" y="20" width="6" height="6" fill="#0c382b"/>
                
                <rect x="10" y="35" width="6" height="6" fill="#0c382b"/>
                <rect x="20" y="35" width="6" height="6" fill="#0c382b"/>
                <rect x="10" y="45" width="6" height="6" fill="#0c382b"/>
                <rect x="20" y="55" width="6" height="6" fill="#0c382b"/>

                <rect x="70" y="35" width="6" height="6" fill="#0c382b"/>
                <rect x="85" y="35" width="6" height="6" fill="#0c382b"/>
                <rect x="75" y="45" width="6" height="6" fill="#0c382b"/>
                <rect x="80" y="55" width="6" height="6" fill="#0c382b"/>

                <rect x="35" y="70" width="6" height="6" fill="#0c382b"/>
                <rect x="45" y="75" width="6" height="6" fill="#0c382b"/>
                <rect x="55" y="70" width="6" height="6" fill="#0c382b"/>
                <rect x="40" y="85" width="6" height="6" fill="#0c382b"/>
                <rect x="60" y="85" width="6" height="6" fill="#0c382b"/>
                <rect x="75" y="75" width="6" height="6" fill="#0c382b"/>
                <rect x="85" y="85" width="6" height="6" fill="#0c382b"/>
              </svg>

              <div className="absolute inset-x-2 h-1 bg-emerald-500 shadow-[0_0_15px_#10b981] animate-bounce" />
            </div>

            <p className="text-xs text-amber-200 font-mono">
              URL Encoded: <strong className="text-white">www.mouryafoods.com</strong>
            </p>
          </div>
        )}

        {/* Quick Action Navigation Menu */}
        <div className="space-y-2 pt-2 border-t border-[#1b4e3e]">
          <p className="text-xs font-bold text-[#d4af37] uppercase tracking-wider text-left">
            Quick Links:
          </p>

          <a
            href="https://linktr.ee/mouryafoods"
            target="_blank"
            rel="noreferrer"
            className="w-full py-2.5 px-4 bg-[#124233] hover:bg-[#1a4d3e] text-[#d0f216] rounded-xl text-xs font-extrabold flex items-center justify-between border border-[#d0f216]/40"
          >
            <span className="flex items-center gap-2">
              <Share2 className="w-4 h-4 text-[#d0f216]" />
              Open Linktree Social Hub (linktr.ee/mouryafoods)
            </span>
            <ExternalLink className="w-3.5 h-3.5 text-[#d0f216]" />
          </a>

          <button
            onClick={() => {
              setActiveTab('products');
              onClose();
            }}
            className="w-full py-2.5 px-4 bg-[#124233] hover:bg-[#1a4d3e] text-white rounded-xl text-xs font-bold flex items-center justify-between border border-[#2d5848]"
          >
            <span className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-[#d4af37]" />
              Browse Makhana Products
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-[#d4af37]" />
          </button>

          <a
            href="https://instagram.com/mouryafoods"
            target="_blank"
            rel="noreferrer"
            className="w-full py-2.5 px-4 bg-[#124233] hover:bg-[#1a4d3e] text-white rounded-xl text-xs font-bold flex items-center justify-between border border-[#2d5848]"
          >
            <span className="flex items-center gap-2">
              <Instagram className="w-4 h-4 text-pink-400" />
              Follow Instagram (@mouryafoods)
            </span>
            <ExternalLink className="w-3.5 h-3.5 text-[#d4af37]" />
          </a>
        </div>

      </div>
    </div>
  );
};

