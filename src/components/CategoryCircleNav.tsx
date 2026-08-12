import React from 'react';
import { 
  Sparkles, 
  Flame, 
  Gift, 
  Package, 
  Award, 
  Zap, 
  CheckCircle2, 
  Leaf, 
  ShoppingBag
} from 'lucide-react';

interface CategoryCircleNavProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  onOpenBuildBox?: () => void;
  onOpenQuiz?: () => void;
}

export const CategoryCircleNav: React.FC<CategoryCircleNavProps> = ({
  selectedCategory,
  onSelectCategory,
  onOpenBuildBox,
  onOpenQuiz,
}) => {
  const categories = [
    {
      id: 'all',
      name: 'All Snacks',
      badge: '100% Wholesome',
      color: 'from-[#d4af37] to-[#b88c1d]',
      image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&q=80&w=200',
    },
    {
      id: 'raw',
      name: 'Raw Makhana',
      badge: 'Jumbo Graded',
      color: 'from-emerald-600 to-emerald-800',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=200',
    },
    {
      id: 'flavored',
      name: 'Roasted Makhana',
      badge: '★ Bestseller',
      color: 'from-amber-500 to-amber-700',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=200',
    },
    {
      id: 'nuts',
      name: 'Nuts & Dry Fruits',
      badge: 'Handpicked',
      color: 'from-amber-600 to-orange-800',
      image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&q=80&w=200',
    },
    {
      id: 'gift',
      name: 'Gift Hampers',
      badge: 'Festive Box',
      color: 'from-purple-600 to-purple-900',
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=200',
    },
  ];

  return (
    <section className="bg-[#07241b] py-6 border-b border-[#2d5848] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Top Row: Quick Farmley Style Promo Pills */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5 text-xs text-[#e2d5b6]">
          <div className="flex items-center gap-2">
            <span className="bg-[#1a4d3e] text-[#d4af37] px-2.5 py-1 rounded-full font-bold border border-[#d4af37]/40 flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 fill-[#d4af37]" />
              FARM TO PALM
            </span>
            <span className="hidden sm:inline font-medium">Zero Palm Oil • Slow Hand Roasted • Non-Fried</span>
          </div>

          <div className="flex items-center gap-2">
            {onOpenBuildBox && (
              <button
                onClick={onOpenBuildBox}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-[#0c382b] font-extrabold px-3 py-1 rounded-full text-xs shadow transition-transform hover:scale-105 flex items-center gap-1"
                id="build-custom-box-top-btn"
              >
                <Package className="w-3.5 h-3.5 text-[#0c382b]" />
                <span>Build Custom Snack Box (Save 20%)</span>
              </button>
            )}

            {onOpenQuiz && (
              <button
                onClick={onOpenQuiz}
                className="bg-[#124233] text-[#d4af37] border border-[#d4af37]/50 hover:bg-[#1a4d3e] font-bold px-3 py-1 rounded-full text-xs transition-all flex items-center gap-1"
                id="snack-quiz-top-btn"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Find Your Snack Match Quiz</span>
              </button>
            )}
          </div>
        </div>

        {/* Category Circle Cards */}
        <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className="group flex flex-col items-center shrink-0 focus:outline-none"
              >
                {/* Circle Container */}
                <div
                  className={`w-18 h-18 sm:w-22 sm:h-22 rounded-full p-1 transition-all duration-300 relative ${
                    isSelected
                      ? 'bg-gradient-to-tr from-[#d4af37] via-amber-200 to-[#d4af37] scale-105 shadow-xl ring-2 ring-[#d4af37]'
                      : 'bg-[#124233] hover:bg-[#1a4d3e] border-2 border-[#2d5848] group-hover:border-[#d4af37]/60'
                  }`}
                >
                  <div className="w-full h-full rounded-full overflow-hidden relative bg-[#0c382b]">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>

                  {/* Badge */}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#d4af37] text-[#0c382b] font-extrabold text-[9px] uppercase px-1.5 py-0.2 rounded-full shadow border border-amber-200">
                    {cat.badge}
                  </span>
                </div>

                {/* Name */}
                <span
                  className={`mt-2 text-xs sm:text-sm font-semibold transition-colors ${
                    isSelected ? 'text-[#d4af37] font-bold' : 'text-gray-200 group-hover:text-[#d4af37]'
                  }`}
                >
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
