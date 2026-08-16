import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { 
  ShoppingBag, 
  Zap, 
  Star, 
  Check, 
  Info, 
  Barcode, 
  Sparkles, 
  Flame, 
  Eye,
  X,
  Share2,
  CheckCircle2,
  ShieldCheck,
  Scale,
  Package,
  Award,
  TrendingDown
} from 'lucide-react';

interface ProductsSectionProps {
  onAddToCart: (product: Product, quantity: number) => void;
  onInstantBuy: (product: Product) => void;
  searchTerm?: string;
  categoryFilter?: string;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onAddToCart,
  onInstantBuy,
  searchTerm = '',
  categoryFilter,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(categoryFilter || 'all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [addedProductId, setAddedProductId] = useState<string | null>(null);
  const [cardQuantities, setCardQuantities] = useState<Record<string, number>>({});
  const [selectedQty, setSelectedQty] = useState<number>(1);

  // Synchronize categoryFilter if updated from external CategoryCircleNav
  React.useEffect(() => {
    if (categoryFilter) {
      setActiveCategory(categoryFilter);
    }
  }, [categoryFilter]);

  const getCardQty = (id: string) => cardQuantities[id] || 1;

  const updateCardQty = (id: string, delta: number) => {
    setCardQuantities((prev) => {
      const current = prev[id] || 1;
      const next = Math.max(1, current + delta);
      return { ...prev, [id]: next };
    });
  };

  // Filter products
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = 
      activeCategory === 'all' || 
      (activeCategory === 'raw' && product.category === 'raw') ||
      (activeCategory === 'flavored' && product.category === 'flavored')
      // (activeCategory === 'gift' && product.category === 'gift');

    const matchesSearch = 
      searchTerm === '' || 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.variant.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (product.flavor && product.flavor.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const handleAddToCartClick = (product: Product, qty: number = 1) => {
    onAddToCart(product, qty);
    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 2000);
  };

  return (
    <section id="products" className="py-10 md:py-10 bg-[#0c382b] bg-lotus-watermark text-[#fcf8f2] font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-6 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1a4d3e] text-[#d4af37] text-xs font-bold uppercase tracking-wider border border-[#d4af37]/30">
            <Sparkles className="w-3.5 h-3.5" />
            Direct Online Store
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Our Products & Pack Variants
          </h2>
          <p className="text-sm sm:text-base text-[#d8c292] max-w-xl mx-auto">
            Choose from pure unseasoned Bihar Phool Makhana in 100g to 1kg sizes, or indulge in our chef-curated slow-roasted flavored line.
          </p>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto rounded-full" />
        </div>

        {/* Category Filter Tabs */}
        {/* <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Products (10)' },
            { id: 'raw', label: '🌿 Raw Premium Bihar Makhana (100g - 1kg)' },
            { id: 'flavored', label: '🔥 Seasoned Roasted Makhana' },
            // { id: 'gift', label: '🎁 Gift & Festival Boxes' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#d4af37] text-[#0c382b] shadow-lg font-bold scale-105 ring-2 ring-amber-200'
                  : 'bg-[#124233] text-[#e2d5b6] hover:bg-[#1a4d3e] border border-[#2d5848]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div> */}

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const discountPercent = Math.round(((product.mrp - product.price) / product.mrp) * 100);
            const isAdded = addedProductId === product.id;

            return (
              <div
                key={product.id}
                className="bg-[#124233] rounded-2xl border border-[#2d5848] hover:border-[#d4af37] transition-all duration-300 hover:shadow-2xl flex flex-col justify-between overflow-hidden group relative"
              >
                {/* Badges */}
                <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
                  {product.isBestseller && (
                    <span className="bg-[#d4af37] text-[#0c382b] font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-md shadow">
                      ★ Bestseller
                    </span>
                  )}
                  {discountPercent > 0 && (
                    <span className="bg-red-600 text-[#fff]/90 font-bold text-[10px] px-2 py-0.5 rounded-md shadow">
                      {discountPercent}% OFF
                    </span>
                  )}
                </div>

                <div className="absolute top-3 right-3 z-10">
                  <span className="bg-[#07241b]/90 text-[#d4af37] text-[10px] font-mono px-2 py-1 rounded border border-[#2d5848] flex items-center gap-1 shadow">
                    <Barcode className="w-3 h-3" />
                    {product.sku}
                  </span>
                </div>

                {/* Product Image Area */}
                <div className="relative h-52 bg-[#08291f] overflow-hidden cursor-pointer" onClick={() => setSelectedProduct(product)}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#124233] via-transparent to-transparent opacity-60" />
                  
                  {/* Quick View Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(product);
                    }}
                    className="absolute bottom-3 right-3 bg-[#0c382b]/90 hover:bg-[#d4af37] hover:text-[#0c382b] text-[#fff] p-2 rounded-full border border-[#2d5848] transition-all opacity-0 group-hover:opacity-100 shadow-md"
                    title="Quick View Details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    {/* Category / Weight Tag */}
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-[#d4af37] font-semibold">
                        {product.variant}
                      </span>
                      <span className="text-gray-300 text-[11px] flex items-center gap-0.5">
                        <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                        {product.rating} ({product.reviewsCount})
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3 className="font-serif font-bold text-base text-white group-hover:text-[#d4af37] transition-colors line-clamp-2">
                      {product.name}
                    </h3>

                    {product.flavor && (
                      <p className="text-xs text-amber-200/90 flex items-center gap-1">
                        <Flame className="w-3 h-3 text-amber-400" />
                        Flavor: <span className="font-semibold">{product.flavor}</span>
                      </p>
                    )}

                    <p className="text-xs text-gray-300/80 line-clamp-2 pt-1">
                      {product.description}
                    </p>
                  </div>

                  {/* Inline Quantity Selector & Price */}
                  <div className="pt-2 border-t border-[#1b4e3e] space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-bold text-xl text-white">₹{product.price * getCardQty(product.id)}</span>
                        <span className="text-xs text-gray-400 line-through ml-1.5">₹{product.mrp * getCardQty(product.id)}</span>
                      </div>

                      {/* Card Qty Increment/Decrement */}
                      <div className="flex items-center border border-[#2d5848] rounded-lg bg-[#0c382b] overflow-hidden">
                        <button
                          onClick={() => updateCardQty(product.id, -1)}
                          className="px-2 py-0.5 text-xs text-white hover:bg-[#124233] font-bold"
                          title="Decrease Quantity"
                        >
                          -
                        </button>
                        <span className="px-2.5 text-xs font-bold text-[#d4af37] min-w-[20px] text-center">
                          {getCardQty(product.id)}
                        </span>
                        <button
                          onClick={() => updateCardQty(product.id, 1)}
                          className="px-2 py-0.5 text-xs text-white hover:bg-[#124233] font-bold"
                          title="Increase Quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons: Add to Cart & Buy Now */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      onClick={() => handleAddToCartClick(product, getCardQty(product.id))}
                      className={`w-full py-2 px-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 border ${
                        isAdded
                          ? 'bg-emerald-600 text-white border-emerald-500'
                          : 'bg-[#1a4d3e] hover:bg-[#235e4d] text-white border-[#2d5848] hover:border-[#d4af37]'
                      }`}
                      id={`add-to-cart-${product.sku}`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-white" />
                          <span>Added!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5 text-[#d4af37]" />
                          <span>Add to Cart</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => onInstantBuy(product)}
                      className="w-full py-2 px-2.5 rounded-lg text-xs font-bold bg-gradient-to-r from-[#d4af37] to-[#b88c1d] text-[#0c382b] hover:brightness-110 transition-all flex items-center justify-center gap-1 shadow"
                      id={`buy-now-${product.sku}`}
                    >
                      <Zap className="w-3.5 h-3.5 fill-[#0c382b]" />
                      <span>Buy Now</span>
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Pack Size & Value Comparison Section */}
        <div className="mt-16 bg-[#124233] border border-[#2d5848] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1a4d3e] text-[#d4af37] text-xs font-bold uppercase tracking-wider border border-[#d4af37]/30">
              <Scale className="w-3.5 h-3.5" />
              Pack Size & Value Guide
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Which Pack Variant is Right For You?
            </h3>
            <p className="text-xs sm:text-sm text-[#e2d5b6]/80">
              Compare prices per 100g across our Bihar Phool Makhana raw pack variants to find the best savings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                size: '100g Pouch',
                product: PRODUCTS.find((p) => p.id === 'mf-raw-100')!,
                tag: 'Trial & Travel',
                pricePer100g: 135,
                savings: 'Standard Rate',
                bestFor: 'Snacking on the go & single-use trials',
              },
              {
                size: '200g Eco Pack',
                product: PRODUCTS.find((p) => p.id === 'mf-raw-200')!,
                tag: 'Weekly Snack',
                pricePer100g: 130,
                savings: 'Save 3.7%',
                bestFor: 'Workplace desk snack & office tea breaks',
              },
              {
                size: '250g Family Pack',
                product: PRODUCTS.find((p) => p.id === 'mf-raw-250')!,
                tag: '★ Bestseller',
                highlight: true,
                pricePer100g: 128,
                savings: 'Save 5.1%',
                bestFor: 'Healthy family snacking & weekly roasting',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 relative border ${
                  item.highlight
                    ? 'bg-[#1a4d3e] border-[#d4af37] ring-2 ring-[#d4af37]/40 shadow-xl scale-102'
                    : 'bg-[#0e3629] border-[#205141] hover:border-[#d4af37]/60'
                }`}
              >
                <div>
                  <span
                    className={`inline-block text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md mb-2 ${
                      item.highlight
                        ? 'bg-[#d4af37] text-[#0c382b]'
                        : 'bg-[#1e5443] text-[#d4af37]'
                    }`}
                  >
                    {item.tag}
                  </span>
                  <h4 className="font-serif font-bold text-lg text-white mb-1">{item.size}</h4>
                  <p className="text-[11px] text-[#e2d5b6]/80 min-h-[32px] mb-3 leading-snug">
                    {item.bestFor}
                  </p>

                  <div className="py-2 border-y border-[#205141] my-2 space-y-1">
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs text-gray-300">Total Price:</span>
                      <span className="font-bold text-base text-[#d4af37]">₹{item.product?.price}</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-gray-400">Price / 100g:</span>
                      <span className="font-semibold text-emerald-300">₹{item.pricePer100g}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-[10px] text-amber-300 font-bold mb-3">
                    <TrendingDown className="w-3 h-3 text-emerald-400" />
                    <span>{item.savings}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleAddToCartClick(item.product, 1)}
                  className={`w-full py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    item.highlight
                      ? 'bg-[#d4af37] text-[#0c382b] hover:bg-[#e2bd44] shadow'
                      : 'bg-[#1a4d3e] text-white hover:bg-[#235e4d] border border-[#2d5848]'
                  }`}
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add {item.size}</span>
                </button>
              </div>
            ))}
          </div>

          {/* Quality Standards Assurance Footer */}
          {/* <div className="mt-8 pt-6 border-t border-[#205141] grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex items-center justify-center gap-2 text-xs text-[#e2d5b6]">
              <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
              <span>Triple-Layer Zip Seal</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs text-[#e2d5b6]">
              <Package className="w-4 h-4 text-[#d4af37]" />
              <span>Nitrogen Flushed Pack</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs text-[#e2d5b6]">
              <Award className="w-4 h-4 text-[#d4af37]" />
              <span>FSSAI & GS1 GTIN Certified</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs text-[#e2d5b6]">
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
              <span>Direct Mithila Lotus Ponds</span>
            </div>
          </div> */}

        </div>

      </div>

      {/* Quick View Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0c382b] border-2 border-[#d4af37] rounded-3xl max-w-2xl w-full p-6 sm:p-8 text-[#fcf8f2] relative shadow-2xl animate-scaleIn max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => { setSelectedProduct(null); setSelectedQty(1); }}
              className="absolute top-4 right-4 text-gray-300 hover:text-white bg-[#124233] p-2 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
              
              <div className="space-y-3">
                <div className="rounded-2xl overflow-hidden h-64 border border-[#2d5848]">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="bg-[#124233] p-3 rounded-xl border border-[#2d5848] text-xs space-y-1 font-mono">
                  <p><strong className="text-[#d4af37]">SKU Code:</strong> {selectedProduct.sku}</p>
                  <p><strong className="text-[#d4af37]">GS1 Barcode:</strong> {selectedProduct.gtinBarcode}</p>
                  <p><strong className="text-[#d4af37]">Net Weight:</strong> {selectedProduct.weight}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-xs text-[#d4af37] font-bold uppercase tracking-wider">
                    {selectedProduct.variant}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {selectedProduct.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center text-amber-400">
                      <Star className="w-4 h-4 fill-amber-400" />
                      <span className="text-xs font-bold ml-1 text-white">{selectedProduct.rating}</span>
                    </div>
                    <span className="text-xs text-gray-400">({selectedProduct.reviewsCount} customer reviews)</span>
                  </div>
                </div>

                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-[#d4af37]">₹{selectedProduct.price}</span>
                  <span className="text-sm text-gray-400 line-through">₹{selectedProduct.mrp}</span>
                  <span className="text-xs bg-red-600/80 text-white px-2 py-0.5 rounded font-bold">
                    Save ₹{selectedProduct.mrp - selectedProduct.price}
                  </span>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed">
                  {selectedProduct.description}
                </p>

                {/* Quantity selector */}
                <div className="flex items-center gap-3 py-2">
                  <span className="text-xs font-semibold text-[#e2d5b6]">Quantity:</span>
                  <div className="flex items-center border border-[#2d5848] rounded-lg bg-[#124233]">
                    <button
                      onClick={() => setSelectedQty(Math.max(1, selectedQty - 1))}
                      className="px-3 py-1 text-white font-bold hover:bg-[#1a4d3e]"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 text-xs font-bold text-[#d4af37]">{selectedQty}</span>
                    <button
                      onClick={() => setSelectedQty(selectedQty + 1)}
                      className="px-3 py-1 text-white font-bold hover:bg-[#1a4d3e]"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => {
                      handleAddToCartClick(selectedProduct, selectedQty);
                      setSelectedProduct(null);
                      setSelectedQty(1);
                    }}
                    className="w-full py-3 bg-[#d4af37] text-[#0c382b] font-bold text-sm rounded-xl hover:bg-[#e2bd44] shadow-lg flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add {selectedQty} to Cart (₹{selectedProduct.price * selectedQty})</span>
                  </button>

                  <button
                    onClick={() => {
                      onInstantBuy(selectedProduct);
                      setSelectedProduct(null);
                    }}
                    className="w-full py-2.5 bg-[#1a4d3e] text-white font-bold text-xs rounded-xl border border-[#d4af37]/40 hover:bg-[#235e4d] flex items-center justify-center gap-2"
                  >
                    <Zap className="w-4 h-4 text-[#d4af37]" />
                    <span>Buy Now Immediately</span>
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
