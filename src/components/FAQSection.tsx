import React, { useState } from 'react';
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Search,
  Sparkles,
  Package,
  ShieldCheck,
  Building2,
  Truck,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  PhoneCall,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface FAQItem {
  id: string;
  category: 'sourcing' | 'storage' | 'wholesale' | 'shipping';
  categoryLabel: string;
  question: string;
  answer: string;
  highlights?: string[];
}

const FAQ_DATA: FAQItem[] = [
  // Sourcing & Quality
  {
    id: 'faq-sourcing-origin',
    category: 'sourcing',
    categoryLabel: 'Sourcing & Quality',
    question: 'Where is Mourya Foods Makhana sourced from?',
    answer: 'Our makhana (foxnuts/gorgon nut) is 100% directly sourced from lotus pond farmers in the fertile Mithila region of Bihar, India. Bihar produces over 85% of the world’s finest lotus seeds. Sourcing directly eliminates middlemen and guarantees maximum freshness and fair pay to local farmers.',
    highlights: ['100% Mithila, Bihar Sourced', 'Direct Farmer Fair Trade', 'Fresh Lotus Pond Harvest'],
  },
  {
    id: 'faq-sourcing-grade',
    category: 'sourcing',
    categoryLabel: 'Sourcing & Quality',
    question: 'What quality grade and seed size is Mourya Foods Makhana?',
    answer: 'We exclusively select Grade-A Jumbo 6+ to 8+ size lotus seeds. Every batch undergoes a 5-stage cleaning process: sun-drying, flame-popping, manual sifting to remove unpopped seeds or shell fragments, air-cleaning, and optical color sorting before airtight pouch packaging.',
    highlights: ['Grade-A Jumbo 6+ to 8+ Size', '5-Stage Quality Sorting', 'Zero Hard Shell Bits'],
  },
  {
    id: 'faq-sourcing-organic',
    category: 'sourcing',
    categoryLabel: 'Sourcing & Quality',
    question: 'Is Mourya Foods Makhana certified, pesticide-free, and natural?',
    answer: 'Yes! Our makhana is grown naturally in lotus wetlands without synthetic pesticides, chemical preservatives, or chlorine bleaching agents. It is 100% FSSAI certified, non-GMO, naturally gluten-free, low-GI, and registered with official GS1 India GTIN barcodes.',
    highlights: ['FSSAI Certified', 'Non-GMO & Chemical-Free', 'GS1 GTIN Barcoded'],
  },

  // Storage & Crispness
  {
    id: 'faq-storage-shelflife',
    category: 'storage',
    categoryLabel: 'Storage & Freshness',
    question: 'What is the shelf life of Mourya Foods Makhana?',
    answer: 'Mourya Foods Makhana has a 12-month shelf life from the date of packaging when kept sealed in a cool, dry place away from direct sunlight and humidity. Our multi-layer aluminum foil pouches with nitrogen flushing ensure long-lasting crunch.',
    highlights: ['12 Months Shelf Life', 'Airtight Foil Barrier', 'Nitrogen Flushed Freshness'],
  },
  {
    id: 'faq-storage-pouch',
    category: 'storage',
    categoryLabel: 'Storage & Freshness',
    question: 'How should I store opened makhana pouches to maintain crunchiness?',
    answer: 'Our 100g, 200g, and 250g stand-up pouches come equipped with a heavy-duty resealable zipper lock. Always press out excess air and seal the zipper tightly after each use. In high-humidity coastal regions, transferring to an airtight glass container is recommended.',
    highlights: ['Resealable Zip-Lock Pouches', 'Airtight Moisture Barrier', 'Keep Away From Moisture'],
  },
  {
    id: 'faq-storage-recrisp',
    category: 'storage',
    categoryLabel: 'Storage & Freshness',
    question: 'What should I do if my makhana absorbs air moisture and loses its crunch?',
    answer: 'Don’t worry! Makhana is naturally hygroscopic. Simply dry-roast the makhana in a warm pan or microwave for 60 to 90 seconds with a drop of ghee or olive oil and a pinch of salt. It will instantly regain its crisp, airy crunch!',
    highlights: ['60-Sec Pan Re-roast', 'Instantly Regains Crunch', 'Add Ghee & Spices'],
  },

  // Wholesale & B2B
  {
    id: 'faq-wholesale-moq',
    category: 'wholesale',
    categoryLabel: 'Wholesale & B2B',
    question: 'What is the Minimum Order Quantity (MOQ) for bulk wholesale orders?',
    answer: 'For domestic Indian wholesale buyers (retailers, caterers, distributors), our standard MOQ starts at 50kg for raw makhana or 10 master cartons of retail pouches. For international export shipments, MOQ starts at 500kg with full FOB/CIF pricing.',
    highlights: ['Domestic MOQ: 50 kg', 'Export MOQ: 500 kg', 'Tiered Volume Discounts'],
  },
  {
    id: 'faq-wholesale-private-label',
    category: 'wholesale',
    categoryLabel: 'Wholesale & B2B',
    question: 'Do you offer private labeling, white-label OEM, and corporate gifting?',
    answer: 'Yes! Mourya Foods provides end-to-end OEM contract packaging and white-label services for retail brands, supermarket chains, and corporate gift hampers. We handle custom pouch printing, barcoding, batch coding, and box packaging.',
    highlights: ['Custom Pouch OEM Printing', 'White-Label Supply', 'Corporate Gift Hampers'],
  },
  {
    id: 'faq-wholesale-samples',
    category: 'wholesale',
    categoryLabel: 'Wholesale & B2B',
    question: 'How can I request a B2B wholesale sample kit and GST quotation?',
    answer: 'You can navigate to our "Bulk Wholesale" section or click the "Request B2B Quote" button. Our sales team dispatches sample kits containing raw jumbo seed samples and seasoned pouches within 24–48 hours along with a formal GST tax quote.',
    highlights: ['Sample Kits Dispatched in 24 hrs', 'GST Tax Invoice Provided', 'Pan-India Delivery'],
  },

  // Shipping & Orders
  {
    id: 'faq-shipping-timelines',
    category: 'shipping',
    categoryLabel: 'Shipping & Delivery',
    question: 'What are the delivery charges and shipping timelines across India?',
    answer: 'We offer FREE Express Shipping across India on all orders above ₹499. Orders are packed and dispatched within 24 hours from our Bihar processing hub. Standard doorstep delivery takes 3 to 5 business days via courier partners like BlueDart, Delhivery, and India Post.',
    highlights: ['Free Shipping Above ₹499', '24-Hour Dispatch', '3-5 Business Days Delivery'],
  },
  {
    id: 'faq-shipping-tracking',
    category: 'shipping',
    categoryLabel: 'Shipping & Delivery',
    question: 'How can I track my live order shipment status?',
    answer: 'Once your order is dispatched, you will receive an SMS and WhatsApp alert with your AWB tracking number. You can also visit the "Track Order" page on our header bar and enter your Order ID or mobile number for real-time tracking.',
    highlights: ['Live WhatsApp SMS Updates', 'Online AWB Tracking', 'Dedicated Logistics Support'],
  },
  {
    id: 'faq-shipping-cod',
    category: 'shipping',
    categoryLabel: 'Shipping & Delivery',
    question: 'Do you support Cash on Delivery (COD) and easy returns?',
    answer: 'Yes, Cash on Delivery (COD) is available for eligible pin codes across India. If you receive a damaged or open package, we offer a hassle-free 7-day replacement or refund policy. Contact our support line for instant assistance.',
    highlights: ['COD Available', '7-Day Easy Replacement', 'Instant Customer Support'],
  },
];

interface FAQSectionProps {
  setActiveTab?: (tab: string) => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ setActiveTab }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string | null>('faq-sourcing-origin');
  const [helpfulFeedback, setHelpfulFeedback] = useState<Record<string, 'yes' | 'no'>>({});

  const categories = [
    { id: 'all', label: 'All Questions', icon: HelpCircle },
    { id: 'sourcing', label: 'Sourcing & Quality', icon: ShieldCheck },
    { id: 'storage', label: 'Storage & Freshness', icon: Package },
    { id: 'wholesale', label: 'Wholesale & B2B', icon: Building2 },
    { id: 'shipping', label: 'Shipping & Orders', icon: Truck },
  ];

  // Filter FAQs
  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      faq.question.toLowerCase().includes(q) ||
      faq.answer.toLowerCase().includes(q) ||
      faq.categoryLabel.toLowerCase().includes(q) ||
      (faq.highlights && faq.highlights.some((h) => h.toLowerCase().includes(q)));
    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleFeedback = (id: string, choice: 'yes' | 'no') => {
    setHelpfulFeedback((prev) => ({ ...prev, [id]: choice }));
  };

  return (
    <section className="py-16 bg-[#07241b] text-white border-b border-[#1b4e3e] relative overflow-hidden" id="faq-section">
      {/* Background Subtle Accents */}
      <div className="absolute inset-0 bg-lotus-watermark opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#124233] text-[#d4af37] text-xs font-extrabold uppercase tracking-widest border border-[#d4af37]/40 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#d4af37]" />
            Frequently Asked Questions
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Everything You Need To Know
          </h2>
          <p className="text-sm sm:text-base text-gray-300">
            Clear answers about our Bihar lotus seed sourcing, grade sizes, pouch storage tips, wholesale B2B pricing, and delivery timelines.
          </p>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto rounded-full" />
        </div>

        {/* Search Bar & Category Filter Tabs */}
        <div className="space-y-6 max-w-4xl mx-auto mb-10">
          
          {/* Search Box */}
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. shelf life, Bihar origin, wholesale MOQ, storage)..."
              className="w-full pl-12 pr-10 py-3.5 bg-[#0c382b] border-2 border-[#2d5848] focus:border-[#d4af37] rounded-2xl text-sm text-white placeholder-gray-400 focus:outline-none transition-all shadow-inner"
              id="faq-search-input"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-xs font-bold bg-[#124233] px-2 py-1 rounded-md"
              >
                Clear
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border shadow-sm ${
                    isActive
                      ? 'bg-[#d4af37] text-[#0c382b] border-[#d4af37] shadow-md scale-102'
                      : 'bg-[#0c382b] text-gray-300 border-[#2d5848] hover:border-[#d4af37]/60 hover:text-white'
                  }`}
                  id={`faq-tab-${cat.id}`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#0c382b]' : 'text-[#d4af37]'}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-[#0c382b] rounded-3xl border border-[#2d5848] space-y-3 p-6">
              <HelpCircle className="w-12 h-12 text-[#d4af37] mx-auto opacity-70" />
              <h3 className="font-serif text-xl font-bold text-white">No matching questions found</h3>
              <p className="text-xs text-gray-300 max-w-md mx-auto">
                We couldn't find any FAQs matching "{searchQuery}". Please try searching for different keywords or chat with our support team.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 bg-[#d4af37] text-[#0c382b] font-bold text-xs rounded-xl hover:bg-[#e2bd44] transition-colors"
              >
                Reset Search
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isExpanded = expandedId === faq.id;
              const feedback = helpfulFeedback[faq.id];

              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isExpanded
                      ? 'bg-[#0c382b] border-[#d4af37] shadow-xl ring-1 ring-[#d4af37]/30'
                      : 'bg-[#092e23] border-[#2d5848] hover:border-[#d4af37]/50'
                  }`}
                  id={faq.id}
                >
                  {/* Question Accordion Header */}
                  <button
                    onClick={() => toggleExpand(faq.id)}
                    className="w-full text-left p-5 flex items-start justify-between gap-4 focus:outline-none"
                    aria-expanded={isExpanded}
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="inline-block text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-[#124233] text-[#d4af37] border border-[#d4af37]/30">
                          {faq.categoryLabel}
                        </span>
                      </div>
                      <h3 className="font-serif font-bold text-base sm:text-lg text-white leading-snug">
                        {faq.question}
                      </h3>
                    </div>

                    <div className={`p-2 rounded-xl transition-all shrink-0 mt-1 ${
                      isExpanded ? 'bg-[#d4af37] text-[#0c382b]' : 'bg-[#124233] text-[#d4af37]'
                    }`}>
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {/* Expanded Answer Panel */}
                  {isExpanded && (
                    <div className="px-5 pb-5 pt-1 border-t border-[#124233] space-y-4 animate-fadeIn">
                      <p className="text-sm text-gray-200 leading-relaxed font-sans">
                        {faq.answer}
                      </p>

                      {/* Highlight Bullets */}
                      {faq.highlights && (
                        <div className="flex items-center gap-2 flex-wrap pt-1">
                          {faq.highlights.map((item, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#e2d5b6] bg-[#124233] px-2.5 py-1 rounded-lg border border-[#2d5848]"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                              {item}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Helpful Feedback Bar */}
                      <div className="pt-3 border-t border-[#124233] flex items-center justify-between text-xs text-gray-400">
                        <span>Was this answer helpful?</span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleFeedback(faq.id, 'yes')}
                            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg border transition-all ${
                              feedback === 'yes'
                                ? 'bg-emerald-600 text-white border-emerald-500'
                                : 'bg-[#124233] text-gray-300 border-[#2d5848] hover:text-white'
                            }`}
                          >
                            <ThumbsUp className="w-3.5 h-3.5" />
                            <span>Yes</span>
                          </button>

                          <button
                            onClick={() => handleFeedback(faq.id, 'no')}
                            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg border transition-all ${
                              feedback === 'no'
                                ? 'bg-rose-600 text-white border-rose-500'
                                : 'bg-[#124233] text-gray-300 border-[#2d5848] hover:text-white'
                            }`}
                          >
                            <ThumbsDown className="w-3.5 h-3.5" />
                            <span>No</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still Have Questions CTA Banner */}
        <div className="mt-14 max-w-4xl mx-auto bg-gradient-to-r from-[#0c382b] via-[#124233] to-[#0c382b] border-2 border-[#d4af37] rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2 text-center md:text-left relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#1a4d3e] text-[#d4af37] text-[11px] font-extrabold uppercase">
              <MessageCircle className="w-3.5 h-3.5" />
              Need Immediate Help?
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">
              Have A Specific Sourcing or Wholesale Question?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-lg">
              Our Bihar makhana specialists are online to assist you with bulk quotes, export specs, custom orders, or sample requests.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 relative z-10 w-full md:w-auto">
            {setActiveTab && (
              <button
                onClick={() => setActiveTab('wholesale')}
                className="w-full sm:w-auto px-5 py-3 bg-[#d4af37] text-[#0c382b] hover:bg-[#e2bd44] font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                <span>Bulk Wholesale Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            {setActiveTab && (
              <button
                onClick={() => setActiveTab('contact')}
                className="w-full sm:w-auto px-5 py-3 bg-[#124233] text-white hover:bg-[#1a4d3e] border border-[#d4af37]/50 font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#d4af37]" />
                <span>Contact Us</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
