import React, { useState } from 'react';
import {
  Sparkles,
  Camera,
  Play,
  ShoppingBag,
  ExternalLink,
  Award,
  CheckCircle2,
  Heart,
  Share2,
  TrendingUp,
  Tv,
  Instagram,
  Coffee,
  ArrowRight,
  Flame,
  Star
} from 'lucide-react';

interface AdCampaignGalleryProps {
  setActiveTab?: (tab: string) => void;
  onAddToCart?: (productName: string, price: number) => void;
}

export const AdCampaignGallery: React.FC<AdCampaignGalleryProps> = ({
  setActiveTab,
  onAddToCart,
}) => {
  const [activeAdId, setActiveAdId] = useState<string>('gourmet-breakfast');
  const [likedAds, setLikedAds] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string) => {
    setLikedAds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const adCampaigns = [
    {
      id: 'gourmet-breakfast',
      title: 'Gourmet Breakfast & Coffee Pairing Ad',
      subtitle: 'As Seen on Meta & Digital Video Ads',
      badge: 'Featured Commercial Ad',
      description:
        'Our flagship digital commercial highlighting Mourya Makhana as the perfect high-protein, guilt-free companion to morning iced coffee, pastries, and artisanal breakfasts.',
      imageAlt:
        'Aesthetic advertisement photoshoot: Wooden board with fresh golden croissant, iced chocolate mocha with wooden spoon, and a ceramic bowl overflowing with crisp roasted Mourya Makhana on warm linen background.',
      adMetrics: {
        impressions: '4.8M+',
        engagement: '98.4%',
        featuredProduct: 'Mourya Classic Salted & Light Pepper Makhana (200g)',
        price: 240,
      },
      tags: ['Breakfast Pairing', 'Iced Mocha Companion', 'Healthy Morning Fuel'],
    },
    {
      id: 'tea-time-crunch',
      title: 'Royal Indian Chai-Time Snack Campaign',
      subtitle: 'Evening Tea & Office Snack Ad',
      badge: 'Bestseller Ad Campaign',
      description:
        'Promoting traditional roasted Bihar foxnuts as the healthiest alternative to fried potato chips and fried namkeen during evening tea time.',
      imageAlt:
        'Aesthetic afternoon chai setting with steaming brass teacup and roasted pudina makhana in clay bowl.',
      adMetrics: {
        impressions: '3.2M+',
        engagement: '96.2%',
        featuredProduct: 'Mourya Pudina & Peri Peri Roast Makhana (250g)',
        price: 290,
      },
      tags: ['Chai Companion', 'Zero Trans-Fat', 'Evening Snack'],
    },
    {
      id: 'fitness-postworkout',
      title: 'Fit Lifestyle & Post-Workout Fuel Ad',
      subtitle: 'Fitness & Gym Snack Campaign',
      badge: 'High Protein Campaign',
      description:
        'Targeting fitness enthusiasts with low-calorie, high-fiber, and mineral-dense lotus seeds as an instant post-workout energy booster.',
      imageAlt:
        'Fitness gym setting with water bottle, protein shaker, and Mourya raw jumbo makhana pouch.',
      adMetrics: {
        impressions: '2.9M+',
        engagement: '97.8%',
        featuredProduct: 'Mourya Grade-A Jumbo Raw Foxnuts (500g)',
        price: 520,
      },
      tags: ['Post Workout', 'High Fiber', 'Low Calorie'],
    },
  ];

  const currentAd = adCampaigns.find((a) => a.id === activeAdId) || adCampaigns[0];

  return (
    <section className="py-16 bg-gradient-to-b from-[#07241b] via-[#0c382b] to-[#07241b] text-white border-b border-[#1b4e3e] relative overflow-hidden" id="ad-campaigns">
      {/* Background Accents */}
      <div className="absolute inset-0 bg-lotus-watermark opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#124233] text-[#d4af37] text-xs font-extrabold uppercase tracking-widest border border-[#d4af37]/40 shadow-sm">
            <Tv className="w-4 h-4 text-[#d4af37]" />
            Official Ad Campaigns & Media Showcase
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            As Featured In Our Digital Ads
          </h2>
          <p className="text-sm sm:text-base text-gray-300">
            Explore the exact products, lifestyle pairings, and aesthetic commercial shoots featured in our official social media & television ads.
          </p>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto rounded-full" />
        </div>

        {/* Ad Selector Tabs */}
        <div className="flex items-center justify-center gap-3 flex-wrap mb-10 max-w-3xl mx-auto">
          {adCampaigns.map((ad) => {
            const isActive = ad.id === activeAdId;
            return (
              <button
                key={ad.id}
                onClick={() => setActiveAdId(ad.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all border shadow-md ${
                  isActive
                    ? 'bg-[#d4af37] text-[#0c382b] border-[#d4af37] scale-105 shadow-lg'
                    : 'bg-[#0c382b] text-gray-300 border-[#2d5848] hover:border-[#d4af37]/60 hover:text-white'
                }`}
                id={`ad-tab-${ad.id}`}
              >
                <Camera className={`w-4 h-4 ${isActive ? 'text-[#0c382b]' : 'text-[#d4af37]'}`} />
                <span>{ad.title}</span>
              </button>
            );
          })}
        </div>

        {/* Main Ad Showcase Grid */}
        <div className="bg-[#0c382b] border-2 border-[#d4af37] rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Visual Ad Photo Frame */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#d4af37]/60 shadow-2xl group bg-[#fffef8]">
                
                {/* Visual Representation of the Uploaded Photoshoot Image */}
                {activeAdId === 'gourmet-breakfast' ? (
                  <div className="relative aspect-[4/3] w-full bg-[#f6f2e9] p-6 flex items-center justify-center overflow-hidden">
                    {/* Warm Linen Tablecloth Background Texture */}
                    <div className="absolute inset-0 bg-[radial-gradient(#e5dec9_1px,transparent_1px)] [background-size:16px_16px] opacity-70" />

                    {/* Main Lifestyle Photoshoot Graphic */}
                    <div className="relative z-10 w-full max-w-md bg-[#eaddca] rounded-3xl p-6 shadow-2xl border-2 border-[#d4af37]/40 text-center flex flex-col items-center">
                      
                      {/* Top Ad Badge Overlay */}
                      <div className="absolute top-3 right-3 bg-[#0c382b] text-[#d4af37] text-[10px] font-extrabold uppercase px-3 py-1 rounded-full border border-[#d4af37] shadow">
                        Official Ad Photo
                      </div>

                      {/* Photoshoot Elements Display */}
                      <div className="w-full bg-[#fffdf8] rounded-2xl p-5 border border-[#d2c2a5] shadow-inner space-y-4">
                        
                        {/* The Wooden Board Layout Visual */}
                        <div className="bg-[#dfccb0] p-4 rounded-2xl border-2 border-[#b89f78] shadow-md flex items-center justify-between gap-3">
                          
                          {/* Croissant / Pastry */}
                          <div className="flex-1 bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#b45309] p-3 rounded-2xl text-white shadow-md text-left border border-amber-300/40">
                            <span className="text-[10px] font-bold block uppercase text-amber-100">Baked Butter</span>
                            <span className="font-serif font-extrabold text-sm block">🥐 Salted Croissant</span>
                            <span className="text-[9px] text-amber-200">Sugar Dusted</span>
                          </div>

                          {/* Iced Mocha Glass with Wooden Spoon */}
                          <div className="bg-[#451a03] p-3 rounded-2xl text-amber-100 text-center border-2 border-[#78350f] shadow-md shrink-0 w-28">
                            <div className="w-6 h-6 mx-auto mb-1 bg-[#78350f] rounded-full flex items-center justify-center text-amber-200 text-xs">
                              🥄
                            </div>
                            <span className="font-bold text-[11px] block text-white">Iced Mocha</span>
                            <span className="text-[9px] text-amber-300">Glass & Spoon</span>
                          </div>

                        </div>

                        {/* Bowl of Popped Roasted Makhana */}
                        <div className="bg-gradient-to-b from-[#fffef8] to-[#f4ebd0] p-4 rounded-2xl border-2 border-[#d4af37] shadow-lg text-center space-y-2">
                          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#0c382b] text-[#d4af37] text-[10px] font-black uppercase">
                            <Sparkles className="w-3 h-3 text-[#d4af37]" />
                            Mourya Roasted Makhana Bowl
                          </div>
                          
                          <div className="flex items-center justify-center gap-2 flex-wrap py-2">
                            {['⚪', '⚪', '⚪', '⚪', '⚪', '⚪', '⚪', '⚪'].map((dot, i) => (
                              <span key={i} className="text-xl animate-bounce" style={{ animationDelay: `${i * 100}ms` }}>
                                🥣
                              </span>
                            ))}
                          </div>
                          <p className="font-serif font-extrabold text-xs text-[#07241b]">
                            Crisp • Light • High Protein • Zero Trans-Fat
                          </p>
                        </div>

                      </div>

                      {/* Photo Slogan Footer */}
                      <p className="mt-3 text-[11px] font-serif italic text-[#4a3a14] font-bold">
                        "The Ultimate Morning & Afternoon Coffee Snack Pairing"
                      </p>

                    </div>

                  </div>
                ) : (
                  <div className="relative aspect-[4/3] w-full bg-[#08291f] p-8 flex flex-col items-center justify-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 border-2 border-[#d4af37] flex items-center justify-center text-[#d4af37]">
                      <Instagram className="w-8 h-8" />
                    </div>
                    <h4 className="font-serif text-2xl font-bold text-white max-w-sm">
                      {currentAd.title}
                    </h4>
                    <p className="text-xs text-gray-300 max-w-md">
                      {currentAd.description}
                    </p>
                  </div>
                )}

                {/* Floating Social Media Controls Overlay */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2 z-20">
                  <button
                    onClick={() => toggleLike(currentAd.id)}
                    className={`p-2.5 rounded-full backdrop-blur-md border transition-all shadow-lg ${
                      likedAds[currentAd.id]
                        ? 'bg-rose-600 text-white border-rose-500 scale-110'
                        : 'bg-black/60 text-white border-white/30 hover:bg-black/80'
                    }`}
                    title="Like Ad Creative"
                  >
                    <Heart className={`w-4 h-4 ${likedAds[currentAd.id] ? 'fill-current' : ''}`} />
                  </button>

                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: currentAd.title,
                          text: currentAd.description,
                          url: window.location.href,
                        });
                      } else {
                        alert('Link copied to clipboard!');
                      }
                    }}
                    className="p-2.5 rounded-full bg-black/60 text-white border border-white/30 hover:bg-black/80 transition-all shadow-lg"
                    title="Share Ad Campaign"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>

              </div>

              {/* Tag Pills */}
              <div className="flex items-center gap-2 flex-wrap">
                {currentAd.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-bold text-[#d4af37] bg-[#124233] px-3 py-1 rounded-full border border-[#d4af37]/30"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Ad Campaign Info & Product Buy CTA */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1a4d3e] text-[#d4af37] text-xs font-extrabold uppercase border border-[#d4af37]/30">
                  <Star className="w-3.5 h-3.5 fill-[#d4af37] text-[#d4af37]" />
                  {currentAd.badge}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  {currentAd.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#e2d5b6] font-medium">
                  {currentAd.subtitle}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-sans">
                {currentAd.description}
              </p>

              {/* Campaign Stats Card */}
              <div className="grid grid-cols-2 gap-3 bg-[#124233] p-4 rounded-2xl border border-[#2d5848]">
                <div>
                  <span className="text-[10px] text-gray-400 uppercase font-bold block">Ad Impressions</span>
                  <span className="font-serif text-xl font-bold text-[#d4af37]">{currentAd.adMetrics.impressions}</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 uppercase font-bold block">Positive Feedback</span>
                  <span className="font-serif text-xl font-bold text-emerald-400">{currentAd.adMetrics.engagement}</span>
                </div>
              </div>

              {/* Product Featured in Ad Box */}
              <div className="bg-gradient-to-r from-[#0f4535] to-[#124233] p-5 rounded-2xl border-2 border-[#d4af37] space-y-3 shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase text-[#d4af37] tracking-wider flex items-center gap-1">
                    <ShoppingBag className="w-4 h-4 text-[#d4af37]" />
                    Featured In This Ad
                  </span>
                  <span className="font-serif font-black text-lg text-white">
                    ₹{currentAd.adMetrics.price}
                  </span>
                </div>

                <p className="font-serif font-bold text-sm text-white">
                  {currentAd.adMetrics.featuredProduct}
                </p>

                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={() => {
                      if (onAddToCart) {
                        onAddToCart(currentAd.adMetrics.featuredProduct, currentAd.adMetrics.price);
                      } else {
                        alert(`Added "${currentAd.adMetrics.featuredProduct}" to your cart!`);
                      }
                    }}
                    className="flex-1 bg-gradient-to-r from-[#d4af37] to-[#b88c1d] text-[#0c382b] font-black py-3 rounded-xl text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Buy Product In This Ad</span>
                  </button>

                  {setActiveTab && (
                    <button
                      onClick={() => setActiveTab('products')}
                      className="p-3 bg-[#0c382b] text-[#d4af37] border border-[#d4af37]/40 hover:bg-[#124233] rounded-xl transition-all"
                      title="View All Products"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
