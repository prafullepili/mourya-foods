import React from 'react';
import { MouryaLogo } from './MouryaLogo';
import { ShieldCheck, Sparkles, CheckCircle2, Heart, Award, Leaf } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const promises = [
    {
      title: 'Premium Quality',
      desc: 'Selected grade 6+ jumbo popped lotus seeds free from hard pericarp hull fragments.',
      icon: Award,
    },
    {
      title: 'Hygienic Packaging',
      desc: 'Multi-layer barrier pouches flushed with inert gas to seal crunchiness without preservatives.',
      icon: ShieldCheck,
    },
    {
      title: 'Carefully Selected Makhana',
      desc: '3-stage automated air cleaning and hand sorting ensures uniform size and color.',
      icon: Sparkles,
    },
    {
      title: 'Natural Taste',
      desc: 'No artificial flavor enhancers, MSG, or synthetic food colors. Pure authentic taste.',
      icon: Leaf,
    },
    {
      title: 'Customer Satisfaction',
      desc: 'Complete batch traceability, customer feedback care line, and hassle-free returns.',
      icon: Heart,
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-[#f9f5eb] text-[#1b3028] font-sans relative overflow-hidden">
      
      {/* Decorative Lotus watermark in background */}
      <div className="absolute top-1/2 right-4 -translate-y-1/2 opacity-5 pointer-events-none">
        <svg className="w-96 h-96 text-[#0c382b]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3C10.5 6 7 8 7 11.5C7 14 9 16 12 16C15 16 17 14 17 11.5C17 8 13.5 6 12 3Z"/>
          <path d="M12 16C8.5 16 4 13.5 2 11C3.5 15.5 8 19 12 19C16 19 20.5 15.5 22 11C20 13.5 15.5 16 12 16Z"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0c382b] text-[#d4af37] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Brand Philosophy
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c382b]">
            About MOURYA FOODS
          </h2>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto rounded-full" />
        </div>

        {/* Brand Mission Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white p-8 rounded-2xl border border-[#e2d5b6] shadow-sm space-y-4">
              <div className="flex items-center gap-4 pb-3 border-b border-[#f0e8d5]">
                <MouryaLogo variant="badge" size="md" />
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#0c382b]">
                    Bringing the Purity of Bihar Makhana to Every Home
                  </h3>
                  <span className="text-xs text-[#b37b0d] font-bold tracking-widest uppercase">MOURYA FOODS Official Heritage</span>
                </div>
              </div>
              <p className="text-base text-gray-700 leading-relaxed">
                <strong className="text-[#0c382b]">MOURYA FOODS</strong> is a premium food brand focused on bringing quality Bihar Makhana to customers across India and worldwide. Our aim is to offer carefully selected, hygienically packed, and delicious makhana for everyday snacking.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Makhana is deeply rooted in the agrarian culture of Mithila, Bihar. By uniting traditional water-farming wisdom with modern cleanroom packing technology, MOURYA FOODS delivers unadulterated goodness in every bite — from quick tea-time snacking to royal festive celebrations.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1509358217973-895809452b68?auto=format&fit=crop&q=80&w=800"
                alt="Bihar Lotus Pond Harvest for Mourya Foods"
                className="w-full h-80 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c382b] via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs text-[#d4af37] font-bold tracking-widest uppercase">Mithila Lotus Ponds</span>
                <p className="font-serif text-lg font-bold">100% Sourced from Certified Farmers in Bihar</p>
              </div>
            </div>
          </div>

        </div>

        {/* Our Promise Section */}
        <div className="mt-12 bg-white rounded-3xl p-8 sm:p-12 border border-[#e2d5b6] shadow-lg">
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0c382b]">
              Our Promise
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              5 Uncompromising Pillars Behind Every Bag of MOURYA FOODS Makhana
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {promises.map((p, idx) => {
              const IconComp = p.icon;
              return (
                <div 
                  key={idx}
                  className="bg-[#fcf8f2] p-6 rounded-2xl border border-[#e8ddc5] hover:border-[#d4af37] transition-all hover:shadow-md text-center space-y-3 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0c382b] text-[#d4af37] flex items-center justify-center mx-auto group-hover:bg-[#d4af37] group-hover:text-[#0c382b] transition-colors shadow-sm">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif font-bold text-base text-[#0c382b]">
                    {p.title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
