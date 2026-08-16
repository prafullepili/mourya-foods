import React from 'react';
import { Globe, Plane, Ship, ShieldCheck, CheckCircle2, Award, FileText, ArrowRight } from 'lucide-react';

export const ExportSection: React.FC = () => {
  const exportCountries = [
    { name: 'United Arab Emirates (UAE)', flag: '🇦🇪', desc: 'Dubai & Abu Dhabi Organic Markets' },
    { name: 'United States of America (USA)', flag: '🇺🇸', desc: 'FDA Compliant Retail Packs' },
    { name: 'United Kingdom (UK)', flag: '🇬🇧', desc: 'London & Midlands FMCG Chains' },
    { name: 'Canada', flag: '🇨🇦', desc: 'Toronto & Vancouver Supermarkets' },
    { name: 'Australia', flag: '🇦🇺', desc: 'Sydney & Melbourne Health Food Stores' },
    { name: 'Singapore', flag: '🇸🇬', desc: 'ASEAN Premium Distribution Hub' },
    { name: 'European Union (Europe)', flag: '🇪🇺', desc: 'EU Food Safety Compliant Logistics' },
  ];

  const certifications = [
    'Phytosanitary Certification',
    'APEDA Registered Exporter',
    'FSSAI Export License',
    'Non-GMO & Heavy Metal Test Reports',
    'GS1 GTIN Barcode Accreditation (890 Prefix)',
    'Custom Nitrogen-Flushed Foil Export Pouches'
  ];

  return (
    <section id="export" className="py-10 md:py-10 bg-[#07241b] text-[#fcf8f2] font-sans relative border-t border-b border-[#1b4e3e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 space-y-3">
          <span className="text-[#d4af37] bg-[#1a4d3e] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-[#d4af37]/30">
            Global Trade & Container Shipping
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl pt-2 lg:text-5xl font-bold text-white">
            Export Enquiries
          </h2>
          <p className="font-serif italic text-xl text-[#d4af37]">
            “Bringing premium Indian Makhana to global markets.”
          </p>
          <p className="text-sm text-gray-300">
            Exporting high-grade, lab-tested, phytosanitary certified Bihar Foxnuts to international distributors across North America, Europe, Middle East, and Asia Pacific.
          </p>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto rounded-full" />
        </div>

        {/* Global Target Markets Grid */}
        <div className="mb-14">
          <h3 className="text-center font-serif font-bold text-xl text-white mb-8">
            Established & Expanding Global Target Markets
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {exportCountries.map((c, idx) => (
              <div
                key={idx}
                className="bg-[#0c382b] p-4 rounded-xl border border-[#2d5848] hover:border-[#d4af37] transition-all flex items-center gap-3 group"
              >
                <span className="text-3xl shrink-0">{c.flag}</span>
                <div>
                  <h4 className="font-bold text-sm text-white group-hover:text-[#d4af37] transition-colors">
                    {c.name}
                  </h4>
                  <p className="text-[11px] text-gray-300">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Logistics Spec Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 bg-[#0c382b] p-8 rounded-3xl border border-[#d4af37]/40 shadow-xl space-y-6">
            <div className="flex items-center gap-3 text-[#d4af37]">
              <Award className="w-8 h-8 shrink-0" />
              <div>
                <h3 className="font-serif font-bold text-2xl text-white">
                  Export Compliance & Certifications
                </h3>
                <p className="text-xs text-gray-300">Meeting international customs & food safety standards</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-200">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-center gap-2.5 bg-[#124233] p-3 rounded-xl border border-[#2d5848]">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>

            <div className="p-4 bg-[#124233] rounded-2xl border border-[#2d5848] text-xs text-gray-300 leading-relaxed">
              <strong className="text-[#d4af37] block mb-1">Custom Private Label Packaging Options:</strong>
              We offer full private labeling for international supermarkets and importer brands — including customized net weight pouches (3.5oz, 7oz, 16oz), multi-language nutrition panels (English, Arabic, French, Spanish), and palletized cargo loading.
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#0c382b] p-8 rounded-3xl border border-[#d4af37]/40 shadow-xl space-y-6 text-center lg:text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#1a4d3e] text-[#d4af37] flex items-center justify-center mx-auto lg:mx-0 border border-[#d4af37]/40">
              <Globe className="w-7 h-7" />
            </div>

            <h3 className="font-serif font-bold text-2xl text-white">
              Start International Trade Enquiry
            </h3>

            <p className="text-xs text-gray-300 leading-relaxed">
              Have an international distribution inquiry or requirement for full container load (FCL) / less container load (LCL) makhana cargo?
            </p>

            <div className="pt-2 space-y-2">
              <a
                href="mailto:mouryafoods18@gmail.com?subject=Export%20Enquiry%20MOURYA%20FOODS"
                className="w-full py-3.5 bg-[#d4af37] text-[#0c382b] font-extrabold text-sm rounded-xl hover:bg-[#e2bd44] shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-105"
                id="export-email-btn"
              >
                <FileText className="w-4 h-4" />
                <span>Email Export Division: mouryafoods18@gmail.com</span>
              </a>

              <a
                href="tel:+919137738436"
                className="w-full py-3 bg-[#1a4d3e] text-white font-bold text-xs rounded-xl border border-[#2d5848] hover:border-[#d4af37] flex items-center justify-center gap-2"
                id="export-phone-btn"
              >
                <span>Direct Export Desk: +91 9137738436</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
