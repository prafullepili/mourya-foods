import React from 'react';
import { Waves, Filter, Sparkles, Flame, PackageCheck, Truck, ArrowRight } from 'lucide-react';

export const BiharJourney: React.FC = () => {
  const journeySteps = [
    {
      step: '01',
      title: 'Ethical Sourcing',
      desc: 'Sourced directly from certified wetlands in Mithila, Bihar, where lotus flowers bloom in nutrient-dense natural waters.',
      icon: Waves,
    },
    {
      step: '02',
      title: 'Quality Selection',
      desc: 'Hand-picked seeds undergo strict size grading. Only Grade 6+ jumbo lotus seeds are selected for popping.',
      icon: Filter,
    },
    {
      step: '03',
      title: '3-Stage Air Cleaning',
      desc: 'Pneumatic seed cleaning removes husk fragments, dust particles, and unpopped hard pericarp bits.',
      icon: Sparkles,
    },
    {
      step: '04',
      title: 'Artisan Dry Roasting',
      desc: 'Slow dry roasted in traditional heat ovens without oil to lock in crispness and preserve nutrients.',
      icon: Flame,
    },
    {
      step: '05',
      title: 'Cleanroom Packing',
      desc: 'Hygienically packaged in food-grade nitrogen-flushed barrier pouches under strict FSSAI guidelines.',
      icon: PackageCheck,
    },
    {
      step: '06',
      title: 'Fast Express Delivery',
      desc: 'Dispatched through Pan-India logistics networks & global container shipment pipelines to your doorstep.',
      icon: Truck,
    },
  ];

  return (
    <section id="journey" className="py-10 md:py-10 bg-[#07241b] text-[#fcf8f2] font-sans relative overflow-hidden border-t border-b border-[#1b4e3e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-[#d4af37] text-xs font-bold uppercase tracking-widest bg-[#1a4d3e] px-3.5 py-1 rounded-full border border-[#d4af37]/30">
            Purity Traceability Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white pt-3">
            From Bihar to Your Home
          </h2>
          <p className="font-serif italic text-xl text-[#d4af37]">
            “From the fields of Bihar to your home.”
          </p>
          <p className="text-sm text-gray-300">
            A transparent 6-step quality process ensuring every single makhana pop is pure, crunchy, and hygienic.
          </p>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto rounded-full" />
        </div>

        {/* Steps Grid / Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {journeySteps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={idx}
                className="bg-[#0c382b] rounded-2xl p-6 border border-[#2d5848] hover:border-[#d4af37] transition-all duration-300 hover:shadow-2xl relative group"
              >
                {/* Step number badge */}
                <div className="flex justify-between items-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1a4d3e] text-[#d4af37] flex items-center justify-center border border-[#d4af37]/40 group-hover:bg-[#d4af37] group-hover:text-[#0c382b] transition-colors shadow">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="font-serif font-extrabold text-3xl text-[#d4af37]/40 group-hover:text-[#d4af37] transition-colors">
                    {step.step}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-xl text-white mb-2 group-hover:text-[#d4af37] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-gray-300 leading-relaxed">
                  {step.desc}
                </p>

                {/* Arrow connector indicator on desktop */}
                {idx < journeySteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-5 top-1/2 -translate-y-1/2 z-10 text-[#d4af37]/40">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
