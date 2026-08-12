import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { 
  Package, 
  Sparkles, 
  CheckCircle2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  X, 
  Zap,
  Award,
  ShieldCheck
} from 'lucide-react';

interface BuildYourBoxProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const BuildYourBox: React.FC<BuildYourBoxProps> = ({
  isOpen,
  onClose,
  onAddToCart,
}) => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  if (!isOpen) return null;

  // Available options for custom box
  const boxOptions = PRODUCTS.filter((p) => p.category !== 'gift');

  const toggleSelect = (prod: Product) => {
    if (selectedProducts.some((p) => p.id === prod.id)) {
      setSelectedProducts((prev) => prev.filter((p) => p.id !== prod.id));
    } else {
      if (selectedProducts.length < 4) {
        setSelectedProducts((prev) => [...prev, prod]);
      }
    }
  };

  const totalRegularPrice = selectedProducts.reduce((sum, p) => sum + p.price, 0);
  
  // Discount tiers: 3 items = 20% off, 4 items = 25% off
  const discountPercent = selectedProducts.length >= 4 ? 25 : selectedProducts.length >= 3 ? 20 : 0;
  const discountAmount = Math.round((totalRegularPrice * discountPercent) / 100);
  const finalBoxPrice = totalRegularPrice - discountAmount;

  const handleAddBoxToCart = () => {
    if (selectedProducts.length < 3) return;

    // Create a composite custom box product object
    const customBoxProduct: Product = {
      id: 'custom-box-' + Date.now(),
      name: `Custom Wholesome Box (${selectedProducts.length} Items)`,
      variant: 'Custom Gift Box',
      sku: 'MF-CUSTOM-BOX',
      gtinBarcode: '8908012345999',
      price: finalBoxPrice,
      mrp: totalRegularPrice,
      weight: `${selectedProducts.length * 100}g Total`,
      weightInGrams: selectedProducts.length * 100,
      category: 'gift',
      image: selectedProducts[0]?.image || 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=600',
      description: `Includes: ${selectedProducts.map((p) => p.name).join(' + ')}`,
      inStock: true,
      rating: 5.0,
      reviewsCount: 340,
    };

    onAddToCart(customBoxProduct, 1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#0c382b] border-2 border-[#d4af37] rounded-3xl max-w-3xl w-full p-6 sm:p-8 text-[#fcf8f2] relative shadow-2xl space-y-6 my-8 animate-scaleIn">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-white bg-[#124233] p-2 rounded-full border border-[#2d5848]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Title */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1a4d3e] text-[#d4af37] text-xs font-bold uppercase tracking-wider border border-[#d4af37]/30">
            <Package className="w-3.5 h-3.5 text-[#d4af37]" />
            Farmley-Style Combo Builder
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-white">
            Build Your Own Wholesome Snack Box 🎁
          </h2>
          <p className="text-xs sm:text-sm text-[#e2d5b6] max-w-xl mx-auto">
            Pick 3 or 4 of your favorite Bihar Phool Makhana & gourmet roasted snacks to unlock up to <strong>25% OFF</strong>!
          </p>
        </div>

        {/* Discount Progress Bar */}
        <div className="bg-[#124233] p-4 rounded-2xl border border-[#2d5848] space-y-2">
          <div className="flex justify-between items-center text-xs font-bold">
            <span className="text-[#d4af37]">
              {selectedProducts.length === 0 && 'Select 3 items to get 20% OFF!'}
              {selectedProducts.length === 1 && 'Add 2 more items to unlock 20% OFF!'}
              {selectedProducts.length === 2 && 'Add 1 more item to unlock 20% OFF!'}
              {selectedProducts.length === 3 && '🎉 3 Items Added! Unlocked 20% OFF (Add 1 more for 25% OFF)'}
              {selectedProducts.length === 4 && '🔥 Maximum Savings! 25% OFF Unlocked!'}
            </span>
            <span className="text-emerald-300 font-mono">{selectedProducts.length} / 4 Selected</span>
          </div>

          <div className="w-full bg-[#0c382b] h-3 rounded-full overflow-hidden border border-[#2d5848] p-0.5">
            <div
              className="bg-gradient-to-r from-amber-500 via-[#d4af37] to-emerald-400 h-full rounded-full transition-all duration-500"
              style={{ width: `${(selectedProducts.length / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* Product Selection Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-72 overflow-y-auto pr-1">
          {boxOptions.map((prod) => {
            const isSelected = selectedProducts.some((p) => p.id === prod.id);
            return (
              <div
                key={prod.id}
                onClick={() => toggleSelect(prod)}
                className={`cursor-pointer p-3 rounded-2xl border transition-all duration-200 flex flex-col justify-between relative ${
                  isSelected
                    ? 'bg-[#1a4d3e] border-[#d4af37] ring-2 ring-[#d4af37]/50 shadow-lg scale-102'
                    : 'bg-[#0e3629] border-[#205141] hover:border-[#d4af37]/60'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-2 right-2 bg-[#d4af37] text-[#0c382b] p-1 rounded-full shadow">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                )}

                <div className="space-y-2">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-20 object-cover rounded-xl border border-[#2d5848]"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <span className="text-[9px] text-[#d4af37] font-extrabold uppercase">{prod.variant}</span>
                    <h4 className="font-serif font-bold text-xs text-white line-clamp-1">{prod.name}</h4>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[#205141] mt-2 text-xs">
                  <span className="font-bold text-[#d4af37]">₹{prod.price}</span>
                  <span className="text-[10px] text-gray-300">{prod.weight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Box Footer Summary & CTA */}
        <div className="bg-[#07241b] p-5 rounded-2xl border border-[#2d5848] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-xs text-gray-300">Total Box Value:</span>
              <span className="font-serif text-2xl font-bold text-[#d4af37]">₹{finalBoxPrice}</span>
              {discountAmount > 0 && (
                <>
                  <span className="text-xs text-gray-400 line-through">₹{totalRegularPrice}</span>
                  <span className="text-xs bg-emerald-900/80 text-emerald-300 px-2 py-0.5 rounded font-bold border border-emerald-500/30">
                    Saved ₹{discountAmount} ({discountPercent}%)
                  </span>
                </>
              )}
            </div>
            <p className="text-[11px] text-[#e2d5b6]/80 mt-1">
              Includes Premium Packaging Box, Nitrogen-Flushed Pouch Seal & Free Shipping!
            </p>
          </div>

          <button
            onClick={handleAddBoxToCart}
            disabled={selectedProducts.length < 3}
            className={`w-full sm:w-auto px-8 py-3.5 rounded-xl font-extrabold text-sm shadow-xl transition-all flex items-center justify-center gap-2 ${
              selectedProducts.length >= 3
                ? 'bg-[#d4af37] text-[#0c382b] hover:bg-[#e2bd44] hover:scale-105'
                : 'bg-gray-700 text-gray-400 cursor-not-allowed'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>
              {selectedProducts.length < 3
                ? `Select ${3 - selectedProducts.length} More Item${3 - selectedProducts.length > 1 ? 's' : ''}`
                : `Add Custom Box to Cart (₹${finalBoxPrice})`}
            </span>
          </button>
        </div>

      </div>
    </div>
  );
};
