import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/testimonials';
import { Star, CheckCircle2, Quote, Sparkles, Building2, Globe, ShoppingBag } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [filterType, setFilterType] = useState<string>('all');

  const filteredTestimonials = TESTIMONIALS.filter((t) => {
    if (filterType === 'all') return true;
    return t.type === filterType;
  });

  return (
    <section className="py-16 md:py-24 bg-[#f9f5eb] text-[#1b3028] font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-[#0c382b] bg-[#e8ddc5] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-[#d4af37]/40">
            Verified Customer & Trade Feedback
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c382b]">
            What Our Customers Say
          </h2>
          <p className="text-sm sm:text-base text-gray-700">
            Trusted by thousands of fitness enthusiasts, supermarket chains, and global importers.
          </p>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto rounded-full" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Reviews (5★)' },
            { id: 'retail', label: '🛒 Retail Shoppers' },
            { id: 'wholesale', label: '🏬 Supermarkets & Distributors' },
            { id: 'export', label: '🌍 Global Importers' },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilterType(btn.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filterType === btn.id
                  ? 'bg-[#0c382b] text-[#d4af37] shadow-md font-bold'
                  : 'bg-white text-gray-700 hover:bg-[#e8ddc5] border border-[#e2d5b6]'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e2d5b6] shadow-md hover:shadow-xl transition-all flex flex-col justify-between space-y-4 relative"
            >
              <Quote className="w-8 h-8 text-[#d4af37]/30 absolute top-6 right-6" />

              <div className="space-y-3">
                {/* Star rating */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-gray-700 italic leading-relaxed">
                  "{t.comment}"
                </p>
              </div>

              {/* User Info */}
              <div className="pt-4 border-t border-[#f0e8d5] flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#d4af37]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-serif font-bold text-sm text-[#0c382b]">
                      {t.name}
                    </h4>
                    {t.verified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" title="Verified Buyer" />
                    )}
                  </div>
                  <p className="text-xs text-gray-500 font-medium">{t.role}</p>
                  <p className="text-[11px] text-[#d4af37] font-bold">{t.location}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
