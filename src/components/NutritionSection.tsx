import React, { useState } from 'react';
import { NUTRITION_FACTS } from '../data/products';
import { Activity, Dumbbell, Heart, ShieldCheck, Flame, Scale, CheckCircle2 } from 'lucide-react';

export const NutritionSection: React.FC = () => {
  const [portionSize, setPortionSize] = useState<number>(100); // 30g, 50g, 100g

  const scaleFactor = portionSize / 100;

  return (
    <section id="nutrition" className="py-16 md:py-24 bg-[#f9f5eb] text-[#1b3028] font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[#0c382b] bg-[#e8ddc5] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-[#d4af37]/40">
            Certified Nutritional Profile
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c382b]">
            Nutritional Value & Health Profile
          </h2>
          <p className="text-sm sm:text-base text-gray-700">
            MOURYA FOODS Bihar Makhana is an extraordinary plant-based nutrient storehouse — zero trans fat, high fiber, and rich in vital minerals.
          </p>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Nutrition Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#d4af37] shadow-xl space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#f0e8d5] pb-4">
              <div>
                <h3 className="font-serif font-bold text-2xl text-[#0c382b]">
                  Nutritional Value
                </h3>
                <p className="text-xs text-gray-500">
                  Approximate Value Per {portionSize}g Serving
                </p>
              </div>

              {/* Portion size selector pill */}
              <div className="flex items-center gap-1 bg-[#f0e8d5] p-1 rounded-xl">
                {[30, 50, 100].map((size) => (
                  <button
                    key={size}
                    onClick={() => setPortionSize(size)}
                    className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                      portionSize === size
                        ? 'bg-[#0c382b] text-[#d4af37] shadow'
                        : 'text-gray-700 hover:text-[#0c382b]'
                    }`}
                  >
                    {size}g
                  </button>
                ))}
              </div>
            </div>

            {/* Main Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-[#0c382b] text-[#d4af37] font-serif text-xs uppercase tracking-wider">
                    <th className="py-3 px-4 rounded-l-lg">Nutrient</th>
                    <th className="py-3 px-4 text-right rounded-r-lg">
                      Value ({portionSize}g)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f0e8d5]">
                  {NUTRITION_FACTS.map((item, idx) => {
                    // Calculate scaled value
                    let displayVal = item.valuePer100g;
                    if (portionSize !== 100) {
                      const num = parseFloat(item.valuePer100g);
                      if (!isNaN(num)) {
                        const scaled = (num * scaleFactor).toFixed(1);
                        const unit = item.valuePer100g.replace(/[0-9.]/g, '').trim();
                        displayVal = `${scaled} ${unit}`;
                      }
                    }

                    return (
                      <tr 
                        key={idx} 
                        className={`hover:bg-[#fcf8f2] transition-colors ${
                          item.highlight ? 'font-semibold text-[#0c382b] bg-[#fdfaf3]' : 'text-gray-700'
                        }`}
                      >
                        <td className="py-3 px-4 flex items-center gap-2">
                          {item.highlight && (
                            <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                          )}
                          <span>{item.nutrient}</span>
                        </td>
                        <td className="py-3 px-4 text-right font-mono font-bold text-[#0c382b]">
                          {displayVal}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="p-3 bg-[#fcf8f2] rounded-xl border border-[#e8ddc5] text-xs text-gray-600 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#0c382b] shrink-0" />
              <span>* Percentage Daily Values (%DV) are based on a 2,000 calorie diet as per FSSAI regulations.</span>
            </div>

          </div>

          {/* Right Column: Health Highlights Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Low Glycemic Badge Card */}
            <div className="bg-[#0c382b] text-white p-5 rounded-2xl border border-[#d4af37]/40 shadow-lg space-y-2 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#d4af37]">
                  <Activity className="w-5 h-5" />
                  <h4 className="font-serif font-bold text-lg">Low Glycemic Index (GI 35)</h4>
                </div>
                <span className="bg-suvria-terracotta text-white font-extrabold text-[10px] px-2.5 py-0.5 rounded-full uppercase">
                  Diabetic Friendly
                </span>
              </div>
              <p className="text-xs text-gray-200 leading-relaxed">
                Slow-release complex carbohydrates with 14.5g dietary fiber ensure zero sudden glucose spikes and long-lasting energy.
              </p>
            </div>

            {/* Calorie Comparison vs Potato Chips */}
            <div className="bg-white p-5 rounded-2xl border-2 border-[#d4af37] shadow-lg space-y-3">
              <div className="flex items-center justify-between border-b border-[#f0e8d5] pb-2">
                <h4 className="font-serif font-bold text-base text-[#0c382b]">
                  🔥 Calorie Comparison (100g)
                </h4>
                <span className="text-[11px] font-black text-suvria-terracotta uppercase">
                  60% Less Calories
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div>
                  <div className="flex justify-between font-bold mb-1">
                    <span className="text-emerald-800">MOURYA FOODS Bihar Makhana</span>
                    <span className="font-mono text-emerald-800">347 kcal</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-700 h-full w-[55%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-bold text-gray-500 mb-1">
                    <span>Standard Fried Potato Chips</span>
                    <span className="font-mono text-red-600">536 kcal</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-red-500 h-full w-[95%]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0c382b] text-white p-5 rounded-2xl border border-[#d4af37]/40 shadow-lg space-y-2">
              <div className="flex items-center gap-2 text-[#d4af37]">
                <Dumbbell className="w-5 h-5" />
                <h4 className="font-serif font-bold text-lg">9.7g Pure Plant Protein</h4>
              </div>
              <p className="text-xs text-gray-200 leading-relaxed">
                Rich in essential amino acids (glutamine, arginine) aiding post-workout muscle recovery, cellular repair, and daily stamina.
              </p>
            </div>

            <div className="bg-[#0c382b] text-white p-5 rounded-2xl border border-[#d4af37]/40 shadow-lg space-y-2">
              <div className="flex items-center gap-2 text-[#d4af37]">
                <Heart className="w-5 h-5" />
                <h4 className="font-serif font-bold text-lg">Zero Trans Fat & Heart Healthy</h4>
              </div>
              <p className="text-xs text-gray-200 leading-relaxed">
                High in Magnesium (135 mg) and Potassium (358 mg), with 0.1g saturated fat and zero cholesterol for optimal cardiovascular health.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
