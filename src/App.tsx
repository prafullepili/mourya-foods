import React, { useState, useEffect } from 'react';
import { Product, CartItem, ThemeId } from './types';
import { PRODUCTS } from './data/products';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProductsSection } from './components/ProductsSection';
import { PackagingShowcase } from './components/PackagingShowcase';
import { BrandLogoShowcase } from './components/BrandLogoShowcase';
import { BiharJourney } from './components/BiharJourney';
import { NutritionSection } from './components/NutritionSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { QualitySafety } from './components/QualitySafety';
import { OnlineMarketplaces } from './components/OnlineMarketplaces';
import { WholesaleSection } from './components/WholesaleSection';
import { ExportSection } from './components/ExportSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { FAQSection } from './components/FAQSection';
import { AdCampaignGallery } from './components/AdCampaignGallery';
import { CartDrawer } from './components/CartDrawer';
import { QRCodeModal } from './components/QRCodeModal';
import { PolicyModal } from './components/PolicyModal';
import { Chatbot } from './components/Chatbot';
import { ExpressCheckoutModal } from './components/ExpressCheckoutModal';
import { OrderTrackingSection } from './components/OrderTrackingSection';
import { ThemeSelectorModal } from './components/ThemeSelectorModal';
import { BackgroundColorBar } from './components/BackgroundColorBar';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { CategoryCircleNav } from './components/CategoryCircleNav';
import { BuildYourBox } from './components/BuildYourBox';
import { SnackFinderQuizModal } from './components/SnackFinderQuizModal';
import { CheckCircle2, MessageSquare, QrCode, ShoppingBag, Sparkles, X, Zap, Palette, Package } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Color Theme State
  const [currentTheme, setCurrentTheme] = useState<ThemeId>(() => {
    try {
      return (localStorage.getItem('mourya_selected_theme') as ThemeId) || 'suvria-organic';
    } catch {
      return 'suvria-organic';
    }
  });
  const [isThemeModalOpen, setIsThemeModalOpen] = useState<boolean>(false);

  useEffect(() => {
    document.body.setAttribute('data-theme', currentTheme);
    console.log(currentTheme);
    try {
      localStorage.setItem('mourya_selected_theme', currentTheme);
    } catch (e) {
      console.error(e);
    }
  }, [currentTheme]);

  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  // Instant Buy Product State
  const [expressProduct, setExpressProduct] = useState<Product | null>(null);

  // Toast notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // QR Code & Policy Modals
  const [isQRModalOpen, setIsQRModalOpen] = useState<boolean>(false);
  const [policyModalType, setPolicyModalType] = useState<string | null>(null);

  // Quick View Product Modal
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Farmley D2C Features Modals & Category Filters
  const [isBuildBoxOpen, setIsBuildBoxOpen] = useState<boolean>(false);
  const [isQuizOpen, setIsQuizOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Scroll to top when tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  // Toast Notification Helper
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Add to Cart Logic
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added ${quantity}x "${product.name}" to cart! 🛒`);
  };

  // Instant Buy Handler
  const handleInstantBuy = (product: Product) => {
    setExpressProduct(product);
  };

  // Update Cart Quantity
  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Remove Item from Cart
  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  // Clear Cart
  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-[#f9f5eb] text-[#1b3028] font-sans flex flex-col relative selection:bg-[#d4af37] selection:text-[#0c382b]">
      {/* Toast Notification Badge */}
      {toastMessage && (
        <div className="fixed bottom-20 right-4 z-50 bg-[#0c382b] text-[#d4af37] border-2 border-[#d4af37] px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-slideUp font-bold text-xs">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
          <button onClick={() => setToastMessage(null)} className="text-gray-300 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Header Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        setIsCartOpen={setIsCartOpen}
        setIsQRModalOpen={setIsQRModalOpen}
        setIsThemeModalOpen={setIsThemeModalOpen}
        currentTheme={currentTheme}
        onSelectTheme={setCurrentTheme}
        onSearch={setSearchQuery}
      />

      {/* Main Page Layout Content based on Active Tab */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <Hero
              setActiveTab={setActiveTab}
              setIsQRModalOpen={setIsQRModalOpen}
            />
            <CategoryCircleNav
              selectedCategory={selectedCategory}
              onSelectCategory={(cat) => {
                setSelectedCategory(cat);
                setActiveTab('products');
              }}
              onOpenBuildBox={() => setIsBuildBoxOpen(true)}
              onOpenQuiz={() => setIsQuizOpen(true)}
            />
            {/* <BackgroundColorBar
              currentTheme={currentTheme}
              onSelectTheme={setCurrentTheme}
              setIsThemeModalOpen={setIsThemeModalOpen}
            /> */}
            <ProductsSection
              onAddToCart={handleAddToCart}
              onInstantBuy={handleInstantBuy}
              searchTerm={searchQuery}
            />
            <NutritionSection />
            <PackagingShowcase />
            {/* <BrandLogoShowcase /> */}
            {/* <AdCampaignGallery setActiveTab={setActiveTab} /> */}
            <BiharJourney />
            <WhyChooseUs />
            <QualitySafety />
            {/* <OnlineMarketplaces setActiveTab={setActiveTab} /> */}
            <WholesaleSection />
            <ExportSection />
            {/* <TestimonialsSection /> */}
            <FAQSection setActiveTab={setActiveTab} />
            <BlogSection />
            {/* <ContactSection /> */}
          </>
        )}

        {activeTab === 'products' && (
          <div>
            {/* <CategoryCircleNav
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              // onOpenBuildBox={() => setIsBuildBoxOpen(true)}
              // onOpenQuiz={() => setIsQuizOpen(true)}
            /> */}
            <ProductsSection
              onAddToCart={handleAddToCart}
              onInstantBuy={handleInstantBuy}
              searchTerm={searchQuery}
            />
          </div>
        )}

        {activeTab === 'pack-design' && (
          <div className="">
            <PackagingShowcase />
            <BrandLogoShowcase />
          </div>
        )}

        {activeTab === 'brand-logo' && (
          <div className="">
            <BrandLogoShowcase />
            <PackagingShowcase />
          </div>
        )}

        {activeTab === 'ad-campaigns' && (
          <div className="">
            <AdCampaignGallery setActiveTab={setActiveTab} />
          </div>
        )}

        {activeTab === 'track' && (
          <div>
            <OrderTrackingSection />
          </div>
        )}

        {activeTab === 'journey' && (
          <div className="">
            <BiharJourney />
            <AboutSection />
          </div>
        )}

        {activeTab === 'wholesale' && (
          <div className="">
            <WholesaleSection />
            <QualitySafety />
          </div>
        )}

        {activeTab === 'export' && (
          <div className="">
            <ExportSection />
            <QualitySafety />
          </div>
        )}

        {activeTab === 'blog' && (
          <div className="py-10">
            <BlogSection />
          </div>
        )}

        {activeTab === 'faq' && (
          <div className="py-10">
            <FAQSection setActiveTab={setActiveTab} />
          </div>
        )}

        {/* {(activeTab === 'themes' || activeTab === 'background-colors') && (
          <div className="py-10 max-w-7xl mx-auto px-4">
            <BackgroundColorBar
              currentTheme={currentTheme}
              onSelectTheme={setCurrentTheme}
              setIsThemeModalOpen={setIsThemeModalOpen}
            />
          </div>
        )} */}

        {activeTab === 'contact' && (
          <div className="">
            <ContactSection />
          </div>
        )}
      </main>

      {/* Footer Navigation & Legal */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenPolicy={(type) => setPolicyModalType(type)}
      />

      {/* Floating Action Buttons (Scroll to top + WhatsApp + Theme + QR Code) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Scroll-to-Top Floating Button */}
        <ScrollToTopButton />

        {/* Physical Pouch QR Floating Trigger */}
        {<button
          onClick={() => setIsQRModalOpen(true)}
          className="bg-[#0c382b] text-[#d4af37] border-2 border-[#d4af37] p-3 rounded-full shadow-2xl hover:scale-110 transition-transform group relative flex items-center justify-center"
          title="Scan Physical Pouch QR Code"
          id="floating-qr-btn"
        >
          <QrCode className="w-6 h-6" />
          <span className="absolute right-14 bg-[#0c382b] text-[#d4af37] text-[10px] font-bold px-2.5 py-1 rounded-lg border border-[#d4af37] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
            Physical Pouch QR Code
          </span>
        </button>}

        {/* Floating Theme Switcher Button */}
        {<button
          onClick={() => setIsThemeModalOpen(true)}
          className="bg-[#d4af37] hover:bg-[#e2bd44] text-[#0c382b] p-3.5 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center border-2 border-white group relative"
          title="Change Website Color Theme"
          id="floating-theme-switcher-btn"
        >
          <Palette className="w-6 h-6 stroke-[2.5]" />
          <span className="absolute right-16 bg-[#0c382b] text-[#d4af37] text-[10px] font-bold px-2.5 py-1 rounded-lg border border-[#d4af37] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
            Customize Website Color Theme
          </span>
        </button>
        }
        {/* Floating WhatsApp Quick Chat */}
        <a
          href="https://wa.me/919137738436?text=Hello%20MOURYA%20FOODS%20Team%2C%20I%20would%20like%20to%20order%20Makhana."
          target="_blank"
          rel="noreferrer"
          className="bg-emerald-600 text-white p-3.5 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center border-2 group relative"
          title="Chat on WhatsApp"
          id="floating-whatsapp-btn"
        >
          <MessageSquare className="w-6 h-6 fill-white" />
          <span className="absolute right-16 bg-emerald-900 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg border border-emerald-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
            Chat on WhatsApp (+91 9137738436)
          </span>
        </a>
      </div>

      {/* AI Assistant Chatbot Component */}
      {<Chatbot
        onInstantBuy={handleInstantBuy}
        setActiveTab={setActiveTab}
      />}

      {/* Instant Delivery Details Checkout Modal */}
      <ExpressCheckoutModal
        product={expressProduct}
        isOpen={!!expressProduct}
        onClose={() => setExpressProduct(null)}
        onTrackOrder={(id) => setActiveTab('track')}
      />

      {/* Cart Side Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onTrackOrder={(id) => setActiveTab('track')}
      />

      {/* Pouch QR Code Modal */}
      <QRCodeModal
        isOpen={isQRModalOpen}
        onClose={() => setIsQRModalOpen(false)}
        setActiveTab={setActiveTab}
      />

      {/* Policy Modal (Privacy, Terms, Shipping, Refund) */}
      <PolicyModal
        isOpen={!!policyModalType}
        type={policyModalType}
        onClose={() => setPolicyModalType(null)}
      />

      {/* Website Color Theme Switcher Modal */}
      <ThemeSelectorModal
        isOpen={isThemeModalOpen}
        onClose={() => setIsThemeModalOpen(false)}
        currentTheme={currentTheme}
        onSelectTheme={(themeId) => {
          setCurrentTheme(themeId);
          showToast(`Website color theme updated to "${themeId}"! 🎨`);
        }}
      />

      {/* Build Your Custom Box Modal */}
      <BuildYourBox
        isOpen={isBuildBoxOpen}
        onClose={() => setIsBuildBoxOpen(false)}
        onAddToCart={handleAddToCart}
      />

      {/* Snack Finder Quiz Modal */}
      {/* <SnackFinderQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onAddToCart={handleAddToCart}
      /> */}

      {/* Quick View Product Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0c382b] border-2 border-[#d4af37] rounded-3xl max-w-xl w-full p-6 text-[#fcf8f2] relative shadow-2xl animate-scaleIn space-y-4">
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-4 right-4 text-gray-300 hover:text-white bg-[#124233] p-2 rounded-full border border-[#2d5848]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <img
                src={quickViewProduct.image}
                alt={quickViewProduct.name}
                className="w-48 h-48 object-cover rounded-2xl border-2 border-[#d4af37] shrink-0"
                referrerPolicy="no-referrer"
              />

              <div className="space-y-2 text-left">
                <span className="bg-[#1a4d3e] text-[#d4af37] text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-[#d4af37]/30">
                  {quickViewProduct.variant}
                </span>

                <h3 className="font-serif font-bold text-xl text-white">
                  {quickViewProduct.name}
                </h3>

                <p className="text-xs text-gray-300 leading-relaxed">
                  {quickViewProduct.description}
                </p>

                <div className="text-xs space-y-1 pt-1 font-mono text-amber-200">
                  <p><strong>Net Weight:</strong> {quickViewProduct.weight}</p>
                  <p><strong>SKU:</strong> {quickViewProduct.sku}</p>
                  <p><strong>Processing:</strong> Slow Hand-Roasted (Non-Fried, No Oil)</p>
                </div>

                <div className="flex items-center gap-3 pt-3">
                  <span className="font-serif text-2xl font-bold text-[#d4af37]">
                    ₹{quickViewProduct.price}
                  </span>
                  <span className="text-xs text-gray-400 line-through">
                    ₹{quickViewProduct.mrp}
                  </span>
                  <span className="text-xs bg-emerald-900/60 text-emerald-300 px-2 py-0.5 rounded font-bold">
                    Save ₹{quickViewProduct.mrp - quickViewProduct.price}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2">
                  <button
                    onClick={() => {
                      handleAddToCart(quickViewProduct);
                      setQuickViewProduct(null);
                    }}
                    className="py-2.5 bg-[#124233] text-[#d4af37] font-bold text-xs rounded-xl border border-[#2d5848] flex items-center justify-center gap-1.5"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Add to Cart</span>
                  </button>

                  <button
                    onClick={() => {
                      setQuickViewProduct(null);
                      handleInstantBuy(quickViewProduct);
                    }}
                    className="py-2.5 bg-[#d4af37] text-[#0c382b] font-extrabold text-xs rounded-xl shadow-lg hover:bg-[#e2bd44] flex items-center justify-center gap-1.5"
                  >
                    <Zap className="w-3.5 h-3.5 fill-[#0c382b]" />
                    <span>Buy Now</span>
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

