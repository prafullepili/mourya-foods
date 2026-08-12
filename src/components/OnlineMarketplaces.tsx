import React from 'react';
import { ShoppingCart, ExternalLink, ShieldCheck, Truck, Zap } from 'lucide-react';

interface OnlineMarketplacesProps {
  setActiveTab: (tab: string) => void;
}

export const OnlineMarketplaces: React.FC<OnlineMarketplacesProps> = ({ setActiveTab }) => {
  return (
    <section className="py-16 bg-[#f9f5eb] text-[#1b3028] font-sans border-b border-[#e2d5b6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#0c382b] text-white rounded-3xl p-8 sm:p-12 border-2 border-[#d4af37] shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              <span className="text-xs text-white font-extrabold uppercase tracking-widest bg-suvria-terracotta px-3.5 py-1 rounded-full shadow-md">
                ⚡ 10-Min Quick Commerce & National Delivery
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Get MOURYA FOODS Delivered in Minutes
              </h2>
              <p className="text-sm text-gray-200 max-w-xl">
                Order directly from our official store for factory-fresh prices and bulk discounts, or get instant 10-minute doorstep delivery on your favorite quick-commerce apps.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                
                {/* Direct Website Button */}
                <button
                  onClick={() => {
                    setActiveTab('products');
                    window.scrollTo({ top: 500, behavior: 'smooth' });
                  }}
                  className="bg-[#d4af37] hover:bg-[#e2bd44] text-[#0c382b] font-extrabold px-6 py-3 rounded-xl text-sm shadow-lg flex items-center gap-2 transition-transform hover:scale-105"
                  id="buy-direct-website-btn"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>🛒 Direct Store (Best Price Guarantee)</span>
                </button>

                {/* Blinkit Badge */}
                <a
                  href="https://blinkit.com"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold px-4 py-3 rounded-xl text-xs flex items-center gap-1.5 shadow-md transition-all hover:scale-105"
                  id="buy-blinkit-btn"
                >
                  <span className="bg-black text-yellow-400 text-[10px] font-black px-1.5 py-0.5 rounded">10 MIN</span>
                  <span>Blinkit</span>
                </a>

                {/* Zepto Badge */}
                <a
                  href="https://www.zeptonow.com"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-purple-900 hover:bg-purple-800 text-white font-extrabold px-4 py-3 rounded-xl text-xs flex items-center gap-1.5 border border-purple-400/30 transition-all hover:scale-105"
                  id="buy-zepto-btn"
                >
                  <span className="text-purple-300 font-black">Zepto</span>
                </a>

                {/* Amazon Badge */}
                <a
                  href="https://www.amazon.in"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#124233] hover:bg-[#1a4d3e] text-white border border-[#2d5848] font-bold px-4 py-3 rounded-xl text-xs flex items-center gap-1.5 transition-all hover:border-[#d4af37]"
                  id="buy-amazon-btn"
                >
                  <span className="text-amber-400 font-extrabold">amazon.in</span>
                  <ExternalLink className="w-3 h-3 text-gray-400" />
                </a>

                {/* Flipkart Badge */}
                <a
                  href="https://www.flipkart.com"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#124233] hover:bg-[#1a4d3e] text-white border border-[#2d5848] font-bold px-4 py-3 rounded-xl text-xs flex items-center gap-1.5 transition-all hover:border-[#d4af37]"
                  id="buy-flipkart-btn"
                >
                  <span className="text-blue-400 font-extrabold">Flipkart</span>
                  <ExternalLink className="w-3 h-3 text-gray-400" />
                </a>

              </div>
            </div>

            <div className="lg:col-span-5 bg-[#124233] p-6 rounded-2xl border border-[#2d5848] space-y-3 text-xs text-gray-200">
              <h4 className="font-serif font-bold text-base text-[#d4af37] border-b border-[#2d5848] pb-2">
                Why Buy Directly From MouryaFoods.com?
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#d4af37]" />
                  <span>100% Freshest Batch Guaranteed (Direct from Factory)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#d4af37]" />
                  <span>Free Express Delivery Across India on Orders Above ₹499</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                  <span>Instant UPI / PhonePe / Razorpay / COD Options</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
