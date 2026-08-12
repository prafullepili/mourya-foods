import React from 'react';
import { WHY_CHOOSE_US } from '../data/products';
import { 
  Sparkles, 
  Dumbbell, 
  Leaf, 
  ShieldCheck, 
  Flame, 
  PackageCheck,
  CheckCircle2
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  // Icon mapper
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return Sparkles;
      case 'Dumbbell': return Dumbbell;
      case 'Leaf': return Leaf;
      case 'ShieldCheck': return ShieldCheck;
      case 'Flame': return Flame;
      case 'PackageCheck': return PackageCheck;
      default: return CheckCircle2;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#0c382b] text-[#fcf8f2] font-sans relative border-t border-[#1b4e3e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[#d4af37] bg-[#1a4d3e] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-[#d4af37]/30">
            Unmatched Brand Value
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Why Choose MOURYA FOODS?
          </h2>
          <p className="text-sm sm:text-base text-[#e2d5b6]">
            Every single pouch is crafted with uncompromising standards of raw seed quality, traditional processing, and cleanroom packaging.
          </p>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto rounded-full" />
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComp = getIcon(item.icon);
            return (
              <div
                key={idx}
                className="bg-[#124233] p-8 rounded-2xl border border-[#2d5848] hover:border-[#d4af37] transition-all duration-300 hover:shadow-2xl group space-y-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#1a4d3e] text-[#d4af37] flex items-center justify-center border border-[#d4af37]/40 group-hover:bg-[#d4af37] group-hover:text-[#0c382b] transition-colors shadow-md">
                  <IconComp className="w-7 h-7" />
                </div>

                <h3 className="font-serif font-bold text-xl text-white group-hover:text-[#d4af37] transition-colors">
                  🌿 {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
