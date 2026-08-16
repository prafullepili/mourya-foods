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
    // {
    //   title: 'Customer Satisfaction',
    //   desc: 'Complete batch traceability, customer feedback care line, and hassle-free returns.',
    //   icon: Heart,
    // },
  ];

  return (
    <section id="about" className="py-10 bg-[#07241b] border-t border-bs-[#d4af37] border-b border-[#fff] text-[#d4af37] font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0c382b] text-[#d4af37] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Brand Philosophy
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#fff]/80">
            About MOURYA FOODS
          </h2>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto rounded-full" />
        </div>

        {/* Brand Mission Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-10">
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#0c382b] p-8 rounded-2xl border border-[#e2d5b6] shadow-sm space-y-4">
              <div className="flex items-center gap-4 pb-3 border-b border-[#f0e8d5]">
                <MouryaLogo variant="badge" size="md" />
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#fff]">
                    Bringing the Purity of Bihar Makhana to Every Home
                  </h3>
                  <span className="text-xs text-[#b37b0d] font-bold tracking-widest uppercase">MOURYA FOODS Official Heritage</span>
                </div>
              </div>
              <p className="text-base text-[#fff] leading-relaxed">
                <strong className="text-[#b37b0d]">MOURYA FOODS</strong> is a premium food brand focused on bringing quality Bihar Makhana to customers across India and worldwide. Our aim is to offer carefully selected, hygienically packed, and delicious makhana for everyday snacking.
              </p>
              <p className="text-sm text-[#fff] leading-relaxed">
                Makhana is deeply rooted in the agrarian culture of Mithila, Bihar. By uniting traditional water-farming wisdom with modern cleanroom packing technology, MOURYA FOODS delivers unadulterated goodness in every bite — from quick tea-time snacking to royal festive celebrations.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&q=80&w=800"
                alt="Bihar Lotus Pond Harvest for Mourya Foods"
                className="w-full h-96 object-cover"
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
        <div className="bg-[#0c382b] rounded-3xl p-8 border border-[#e2d5b6] shadow-lg">
          <div className="text-center mb-8 flex flex-col align-center justify-center">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#ffffff]">
              Our Promise
            </h3>
            <p className="text-sm text-gray-300 rounded mt-1 text-center w-fit mx-auto">
              5 Uncompromising Pillars Behind Every Bag of MOURYA FOODS Makhana
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {promises.map((p, idx) => {
              const IconComp = p.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#07241b] p-6 rounded-2xl border border-[#e8ddc5] hover:border-[#d4af37] transition-all hover:shadow-md text-center space-y-3 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0c382b] text-[#d4af37] flex items-center justify-center mx-auto group-hover:bg-[#d4af37] group-hover:text-[#0c382b] transition-colors shadow-sm">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-base text-[#d4af37]">
                    {p.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
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
