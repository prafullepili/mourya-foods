import React, { useState } from 'react';
import { BulkQuoteRequest } from '../types';
import { 
  Building2, 
  Send, 
  CheckCircle2, 
  Calculator, 
  Sparkles, 
  Package, 
  Store, 
  Globe2, 
  Gift, 
  Hotel,
  ShieldCheck
} from 'lucide-react';

export const WholesaleSection: React.FC = () => {
  const [formData, setFormData] = useState<BulkQuoteRequest>({
    name: '',
    businessName: '',
    mobile: '',
    email: '',
    city: '',
    businessType: 'Retailer',
    packSize: '250g Family Pack',
    requiredQuantity: '100 kg',
    message: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  // Estimator state
  const [calcPack, setCalcPack] = useState<'100g' | '200g' | '250g'>('250g');
  const [calcQtyKg, setCalcQtyKg] = useState<number>(100);

  // Calculate bulk discount rates
  const basePricePerKg = 1190; // for raw
  let discountTier = 0.15; // 15% off
  if (calcQtyKg >= 500) discountTier = 0.28; // 28% off
  else if (calcQtyKg >= 200) discountTier = 0.22; // 22% off
  else if (calcQtyKg >= 50) discountTier = 0.18; // 18% off

  const estRetailValue = calcQtyKg * basePricePerKg;
  const estWholesaleTotal = estRetailValue * (1 - discountTier);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const partnerTypes = [
    { name: 'Retailers & Kirana Stores', icon: Store },
    { name: 'Supermarket Chains', icon: Building2 },
    { name: 'FMCG Distributors', icon: Package },
    { name: 'Bulk Wholesalers', icon: Calculator },
    { name: 'Corporate Gifting', icon: Gift },
    { name: 'Hotels & Restaurants (HORECA)', icon: Hotel },
    { name: 'Global Export Buyers', icon: Globe2 },
  ];

  return (
    <section id="wholesale" className="py-16 md:py-24 bg-[#0c382b] bg-lotus-watermark text-[#fcf8f2] font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[#d4af37] bg-[#1a4d3e] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-[#d4af37]/30">
            B2B Trade & Wholesale Supply
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Become a MOURYA FOODS Partner
          </h2>
          <p className="text-sm sm:text-base text-[#e2d5b6]">
            Direct factory wholesale pricing, customized private labeling, GS1 barcode compliance, and fast container freight dispatch.
          </p>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto rounded-full" />
        </div>

        {/* Partner Categories Badges */}
        <div className="mb-14">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-[#d4af37] mb-6">
            Bulk Orders Available For:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {partnerTypes.map((pt, idx) => {
              const IconComp = pt.icon;
              return (
                <div 
                  key={idx}
                  className="bg-[#124233] px-4 py-2.5 rounded-xl border border-[#2d5848] text-xs font-bold text-white flex items-center gap-2 hover:border-[#d4af37] transition-all shadow"
                >
                  <IconComp className="w-4 h-4 text-[#d4af37]" />
                  <span>{pt.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7 bg-[#124233] p-8 rounded-3xl border-2 border-[#d4af37] shadow-2xl">
            
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Wholesale Enquiry Received!
                </h3>
                <p className="text-sm text-[#e2d5b6] max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formData.name}</strong> ({formData.businessName}). Our B2B trade manager will call you back on <strong className="text-[#d4af37]">{formData.mobile}</strong> or email <strong className="text-white">{formData.email}</strong> within 2 hours with our wholesale catalog & quotation.
                </p>
                <div className="p-4 bg-[#0c382b] rounded-xl border border-[#2d5848] text-xs text-gray-300 max-w-md mx-auto text-left font-mono space-y-1">
                  <p><strong>Required Qty:</strong> {formData.requiredQuantity}</p>
                  <p><strong>Pack Variant:</strong> {formData.packSize}</p>
                  <p><strong>City:</strong> {formData.city}</p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 bg-[#d4af37] text-[#0c382b] font-bold text-xs rounded-lg"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="border-b border-[#2d5848] pb-3 mb-2">
                  <h3 className="font-serif font-bold text-xl text-white">
                    Request Official B2B Wholesale Quote
                  </h3>
                  <p className="text-xs text-gray-300">
                    Fill in your business details below to receive bulk tiered pricing.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#e2d5b6] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dinesh Mourya"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0c382b] border border-[#2d5848] text-white text-sm rounded-xl p-3 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#e2d5b6] mb-1">
                      Business / Store Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mourya Supermarket / Retail"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full bg-[#0c382b] border border-[#2d5848] text-white text-sm rounded-xl p-3 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#e2d5b6] mb-1">
                      Mobile Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 9137738436"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full bg-[#0c382b] border border-[#2d5848] text-white text-sm rounded-xl p-3 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#e2d5b6] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="mouryafoods18@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0c382b] border border-[#2d5848] text-white text-sm rounded-xl p-3 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#e2d5b6] mb-1">
                      City / State *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mumbai, Maharashtra"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-[#0c382b] border border-[#2d5848] text-white text-sm rounded-xl p-3 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#e2d5b6] mb-1">
                      Business Type
                    </label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value as any })}
                      className="w-full bg-[#0c382b] border border-[#2d5848] text-white text-sm rounded-xl p-3 focus:outline-none focus:border-[#d4af37]"
                    >
                      <option value="Retailer">Retailer / Store</option>
                      <option value="Supermarket">Supermarket Chain</option>
                      <option value="Distributor">FMCG Distributor</option>
                      <option value="Wholesaler">Wholesaler</option>
                      <option value="Corporate Gifting">Corporate Gifting</option>
                      <option value="Hotel/Restaurant">Hotel & Restaurant (HORECA)</option>
                      <option value="Exporter">Exporter</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#e2d5b6] mb-1">
                      Required Quantity *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 100 kg / 500 Bags / 1 Ton"
                      value={formData.requiredQuantity}
                      onChange={(e) => setFormData({ ...formData, requiredQuantity: e.target.value })}
                      className="w-full bg-[#0c382b] border border-[#2d5848] text-white text-sm rounded-xl p-3 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#e2d5b6] mb-1">
                      Preferred Pack Size
                    </label>
                    <select
                      value={formData.packSize}
                      onChange={(e) => setFormData({ ...formData, packSize: e.target.value })}
                      className="w-full bg-[#0c382b] border border-[#2d5848] text-white text-sm rounded-xl p-3 focus:outline-none focus:border-[#d4af37]"
                    >
                      <option value="100g Pouch">100g Pouch (MF-100)</option>
                      <option value="200g Eco Pack">200g Pack (MF-200)</option>
                      <option value="250g Family Pack">250g Family Pack (MF-250)</option>
                      <option value="Flavored Seasoned Tins">Flavored Seasoned Line</option>
                      <option value="Raw Unprocessed Loose Bags">Raw Unprocessed Loose Bags (10kg)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#e2d5b6] mb-1">
                    Message / Additional Specifications
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide details like delivery timeline, custom branding, or GST details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#0c382b] border border-[#2d5848] text-white text-sm rounded-xl p-3 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#d4af37] via-[#c59b27] to-[#b88c1d] text-[#0c382b] font-extrabold text-base rounded-xl hover:brightness-110 shadow-xl transition-all flex items-center justify-center gap-2 border border-amber-200"
                  id="submit-wholesale-quote-btn"
                >
                  <Send className="w-5 h-5 fill-[#0c382b]" />
                  <span>GET WHOLESALE QUOTE</span>
                </button>

              </form>
            )}

          </div>

          {/* Right Column: B2B Pricing Calculator & Trade Benefits */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Interactive Wholesale Estimator Card */}
            <div className="bg-[#124233] p-6 rounded-3xl border border-[#d4af37]/40 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-[#d4af37] border-b border-[#2d5848] pb-3">
                <Calculator className="w-5 h-5" />
                <h4 className="font-serif font-bold text-lg text-white">
                  Instant B2B Price Calculator
                </h4>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="block text-gray-300 mb-1">Select Order Volume (in Kg):</label>
                  <div className="flex items-center gap-2">
                    {[50, 100, 250, 500, 1000].map((kg) => (
                      <button
                        key={kg}
                        type="button"
                        onClick={() => setCalcQtyKg(kg)}
                        className={`flex-1 py-1.5 rounded font-bold transition-all ${
                          calcQtyKg === kg
                            ? 'bg-[#d4af37] text-[#0c382b]'
                            : 'bg-[#0c382b] text-white border border-[#2d5848]'
                        }`}
                      >
                        {kg}kg
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-[#0c382b] rounded-xl border border-[#2d5848] space-y-2 font-mono">
                  <div className="flex justify-between text-gray-300">
                    <span>Retail Value ({calcQtyKg}kg):</span>
                    <span className="line-through">₹{estRetailValue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-[#d4af37] font-bold">
                    <span>Tier Discount ({(discountTier * 100).toFixed(0)}% OFF):</span>
                    <span>-₹{(estRetailValue * discountTier).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-white text-sm font-bold border-t border-[#2d5848] pt-2">
                    <span>Estimated B2B Total:</span>
                    <span className="text-[#d4af37]">₹{estWholesaleTotal.toLocaleString()}</span>
                  </div>
                </div>

                <p className="text-[11px] text-gray-300 italic text-center">
                  * Prices are exclusive of GST & transport freight. Official tax invoice provided.
                </p>
              </div>
            </div>

            {/* Why Partner With Us Card */}
            <div className="bg-[#124233] p-6 rounded-3xl border border-[#2d5848] space-y-3">
              <h4 className="font-serif font-bold text-lg text-[#d4af37]">
                MOURYA FOODS Trade Advantages
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-200">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>GST Invoice & Batch Traceability Documents</span>
                </li>
                <li className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>GS1 Barcode (890 Prefix) Ready for POS Retail Scanners</span>
                </li>
                <li className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>Custom Master Carton Packaging for Supermarkets</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
