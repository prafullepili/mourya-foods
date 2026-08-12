import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { 
  Sparkles, 
  X, 
  CheckCircle2, 
  ArrowRight, 
  RotateCcw, 
  ShoppingBag, 
  Zap,
  Flame,
  Leaf,
  Award
} from 'lucide-react';

interface SnackFinderQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const SnackFinderQuizModal: React.FC<SnackFinderQuizModalProps> = ({
  isOpen,
  onClose,
  onAddToCart,
}) => {
  const [step, setStep] = useState<number>(1);
  const [goal, setGoal] = useState<string>('');
  const [flavor, setFlavor] = useState<string>('');

  if (!isOpen) return null;

  const handleReset = () => {
    setStep(1);
    setGoal('');
    setFlavor('');
  };

  // Compute recommended product based on answers
  const getRecommendation = (): Product => {
    if (flavor === 'spicy') {
      return PRODUCTS.find((p) => p.id === 'mf-flav-peri') || PRODUCTS[0];
    }
    if (flavor === 'mint') {
      return PRODUCTS.find((p) => p.id === 'mf-flav-pudina') || PRODUCTS[0];
    }
    if (flavor === 'chatpata') {
      return PRODUCTS.find((p) => p.id === 'mf-flav-chatpata') || PRODUCTS[0];
    }
    if (goal === 'weightloss' || flavor === 'pure') {
      return PRODUCTS.find((p) => p.id === 'mf-raw-250') || PRODUCTS[0];
    }
    return PRODUCTS.find((p) => p.id === 'mf-flav-pink-salt') || PRODUCTS[0];
  };

  const recommendedProduct = getRecommendation();

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#0c382b] border-2 border-[#d4af37] rounded-3xl max-w-xl w-full p-6 sm:p-8 text-[#fcf8f2] relative shadow-2xl space-y-6 animate-scaleIn">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-white bg-[#124233] p-2 rounded-full border border-[#2d5848]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="text-center space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1a4d3e] text-[#d4af37] text-xs font-bold uppercase tracking-wider border border-[#d4af37]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            Snack Match Recommendation Engine
          </div>
          <h3 className="font-serif text-2xl font-bold text-white">
            Find Your Perfect Wholesome Snack Match 🎯
          </h3>
          <p className="text-xs text-[#e2d5b6]">
            Answer 2 quick questions to discover your ideal Bihar Phool Makhana variant!
          </p>
        </div>

        {/* Step 1: Snacking Goal */}
        {step === 1 && (
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-sm text-[#d4af37]">
              Step 1: What is your main health or snacking goal?
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { id: 'protein', label: '🏋️‍♂️ High Protein / Fitness Energy', desc: '9g plant protein per serving' },
                { id: 'weightloss', label: '🧘‍♀️ Weight Loss & Guilt-Free Munching', desc: 'Low GI 35 & 60% less calories vs chips' },
                { id: 'teatime', label: '☕ 4 PM Office Teatime Crunch', desc: 'Non-fried, slow roasted in Desi Ghee' },
                { id: 'gifting', label: '🎁 Healthy Family & Festive Treat', desc: 'Zero cholesterol, 100% natural lotus seeds' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setGoal(item.id);
                    setStep(2);
                  }}
                  className="p-3.5 rounded-2xl bg-[#124233] hover:bg-[#1a4d3e] border border-[#2d5848] hover:border-[#d4af37] text-left transition-all group"
                >
                  <span className="font-bold text-xs text-white block group-hover:text-[#d4af37]">
                    {item.label}
                  </span>
                  <span className="text-[11px] text-gray-300 block mt-1 leading-snug">
                    {item.desc}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Flavor Profile */}
        {step === 2 && (
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-sm text-[#d4af37]">
              Step 2: What flavor profile do you crave right now?
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { id: 'spicy', label: '🌶️ Zesty Peri Peri Spice', desc: 'African bird eye chili seasoning' },
                { id: 'mint', label: '🍃 Pudina Punch Herb', desc: 'Refreshing spearmint & rock salt' },
                { id: 'chatpata', label: '🥭 Chatpata Masala Kick', desc: 'Traditional North Indian spices' },
                { id: 'salted', label: '🧂 Himalayan Pink Salt & Ghee', desc: 'Classy, subtle hand-roasted flavor' },
                { id: 'pure', label: '🥣 Pure & Natural Raw Lotus', desc: 'Unflavored jumbo makhana for cooking' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setFlavor(item.id);
                    setStep(3);
                  }}
                  className="p-3.5 rounded-2xl bg-[#124233] hover:bg-[#1a4d3e] border border-[#2d5848] hover:border-[#d4af37] text-left transition-all group"
                >
                  <span className="font-bold text-xs text-white block group-hover:text-[#d4af37]">
                    {item.label}
                  </span>
                  <span className="text-[11px] text-gray-300 block mt-1 leading-snug">
                    {item.desc}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Recommendation Result */}
        {step === 3 && (
          <div className="space-y-4 bg-[#124233] p-5 rounded-2xl border border-[#2d5848]">
            <div className="flex items-center justify-between">
              <span className="bg-emerald-900/80 text-emerald-300 text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border border-emerald-500/40">
                100% Match For You
              </span>
              <button
                onClick={handleReset}
                className="text-xs text-amber-200 hover:text-white flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Quiz</span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <img
                src={recommendedProduct.image}
                alt={recommendedProduct.name}
                className="w-32 h-32 object-cover rounded-xl border-2 border-[#d4af37] shrink-0"
                referrerPolicy="no-referrer"
              />

              <div className="space-y-1 text-left">
                <span className="text-[10px] text-[#d4af37] font-bold uppercase">{recommendedProduct.variant}</span>
                <h4 className="font-serif font-bold text-lg text-white">{recommendedProduct.name}</h4>
                <p className="text-xs text-gray-300 line-clamp-2">{recommendedProduct.description}</p>
                <div className="flex items-center gap-3 pt-2">
                  <span className="font-serif text-xl font-bold text-[#d4af37]">₹{recommendedProduct.price}</span>
                  <span className="text-xs text-gray-400 line-through">₹{recommendedProduct.mrp}</span>
                  <span className="text-[11px] text-emerald-300 font-bold">★ {recommendedProduct.rating} Rating</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  onAddToCart(recommendedProduct, 1);
                  onClose();
                }}
                className="w-full py-3 bg-[#d4af37] text-[#0c382b] font-extrabold text-xs rounded-xl hover:bg-[#e2bd44] shadow-xl flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 text-[#0c382b]" />
                <span>Add Recommended Pack to Cart (₹{recommendedProduct.price})</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
