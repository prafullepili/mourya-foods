import React, { useState } from 'react';
import { MouryaLogo } from './MouryaLogo';
import {
  ShoppingBag,
  Menu,
  X,
  Phone,
  Mail,
  Globe,
  QrCode,
  Search,
  Sparkles,
  Package,
  Building2,
  FileText,
  Palette
} from 'lucide-react';
import { ThemeId } from '../types';
import { THEMES } from '../data/themes';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  cartCount: number;
  setIsCartOpen: (open: boolean) => void;
  setIsQRModalOpen: (open: boolean) => void;
  setIsThemeModalOpen?: (open: boolean) => void;
  currentTheme?: ThemeId;
  onSelectTheme?: (themeId: ThemeId) => void;
  onSearch: (term: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  cartCount,
  setIsCartOpen,
  setIsQRModalOpen,
  setIsThemeModalOpen,
  currentTheme,
  onSelectTheme,
  onSearch,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'track', label: 'Track Order', badge: 'Live' },
    { id: 'export', label: 'Export' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' },
    //  { id: 'brand-logo', label: 'Brand Logo', badge: 'Official' },
    //     { id: 'ad-campaigns', label: 'Featured Ads', badge: 'Ads' },
    //     { id: 'themes', label: '12 Color Themes', badge: '12 Colors' },
    //     { id: 'nutrition', label: 'Nutrition' },
    //     { id: 'journey', label: 'Bihar Story' },
    //     { id: 'faq', label: 'FAQ', badge: 'Help' },
    //     { id: 'blog', label: 'Blog (SEO)' },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
    setActiveTab('products');
  };

  return (
    <header className="sticky top-0 z-40 shadow-lg font-sans">
      {/* Top Announcement Bar */}
      <div className="bg-[#07241b] text-xs py-2 px-4 border-b border-[#2d5848]">
        {/* <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2"> */}
        <div className="mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1 font-medium text-[#d4af37]">
              <Sparkles className="w-3.5 h-3.5" />
              Premium Bihar Makhana • 100% Natural • FSSAI Certified
            </span>
            <span className="hidden md:inline text-emerald-400/50">|</span>
            <span className="hidden md:inline text-[#d4af37]">GS1 Barcode Authorised (890 Prefix)</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href="tel:+919137738436"
              className="flex items-center gap-1 text-[#d4af37]/90 hover:text-[#d4af37] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#d4af37]/85 hover:text-[#d4af37]" />
              +91 9137738436
            </a>
            <a
              href="mailto:mouryafoods18@gmail.com"
              className="hidden lg:flex items-center gap-1 text-[#d4af37]/80 hover:text-[#d4af37]/100 transition-colors"
            >
              <Mail className="w-3 h-3 text-[#d4af37]/85 hover:text-[#d4af37]" />
              mouryafoods18@gmail.com
            </a>
            {/* Quick 1-Click Color Themes Swatch Bar */}
            {onSelectTheme && (
              <div className="hidden sm:flex items-center gap-1 bg-[#0c382b] px-2 py-0.5 rounded-full border border-[#2d5848]" title="Quick Color Theme Swatch">
                <Palette className="w-4 h-5 text-[#d4af37]" />
                <span className="text-[10px] text-[#d4af37] font-bold mr-0.5">Theme:</span>
                <div className="flex items-center gap-1">
                  {THEMES.map((th) => (
                    <button
                      key={th.id}
                      onClick={() => onSelectTheme(th.id)}
                      className={`w-3.5 h-3.5 rounded-full border transition-all ${th.isReady ? 'cursor-pointer' : ''} ${currentTheme === th.id
                        ? 'border-white scale-125 ring-2 ring-[#d4af37]'
                        : 'border-transparent opacity-80 hover:opacity-100 hover:scale-110'
                        }`}
                      style={{ backgroundColor: th.accentPreview }}
                      // title={`${th.name} (${th.subtitle})`}
                      title={th.isReady ? th.name + ' ' + th.subtitle : 'Coming Soon'}
                      disabled={!th.isReady}
                    />
                  ))}
                </div>
              </div>
            )}

            {setIsThemeModalOpen && (
              <button
                onClick={() => setIsThemeModalOpen(true)}
                className="flex items-center gap-1 bg-[#d4af37] text-[#0c382b] hover:bg-[#e2bd44] px-2.5 py-0.5 rounded-full font-bold text-[11px] transition-all shadow"
                id="header-theme-switcher-btn"
                title="Open Theme Palette Switcher Modal"
              >
                <Palette className="w-3 h-3 text-[#0c382b]" />
                <span>All Themes ({THEMES.length})</span>
              </button>
            )}

            <button
              onClick={() => setIsQRModalOpen(true)}
              className="flex items-center gap-1 bg-[#1a4d3e] hover:bg-[#235e4d] text-[#fff] px-2.5 py-0.5 rounded-full border border-[#d4af37]/40 text-[11px] font-medium transition-all"
              id="qr-pouch-scan-btn"
            >
              <QrCode className="w-3 h-3 text-[#fff]" />
              Scan Pouch QR
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-[#0c382b] text-[#fcf8f2] border-b border-[#1b4e3e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand Logo & Emblem */}
          <button
            onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center text-left group focus:outline-none hover:opacity-95 transition-opacity"
            id="brand-logo-btn"
          >
            <MouryaLogo variant="horizontal" size="md" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    setActiveTab(link.id);
                    // window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`px-3 py-2 rounded-lg text-sm font-medium relative flex items-center gap-1.5 ${isActive
                    ? 'text-[#d4af37] bg-[#1a4d3e] shadow-sm font-semibold'
                    : 'text-[#fcf8f2]/90 hover:bg-[#1a4d3e]/90'
                    }`}
                  id={`nav-link-${link.id}`}
                >
                  {link.label}
                  {link.badge && (
                    <span className="text-[10px] bg-[#d4af37] text-[#0c382b] font-bold px-1.5 py-0.2 rounded uppercase tracking-wider">
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#d4af37] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Tools: Search, Bulk Quote CTA, Shopping Cart */}
          <div className="flex items-center gap-3">
            {/* Search Toggle */}
            <div className="relative">
              {isSearchOpen ? (
                <form onSubmit={handleSearchSubmit} className="flex items-center">
                  <input
                    type="text"
                    placeholder="Search makhana, flavors..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-[#124233] text-white text-xs px-3 py-1.5 rounded-l-md border border-[#2d5848] focus:outline-none focus:border-[#d4af37] w-36 sm:w-48"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="bg-[#d4af37] text-[#0c382b] px-2.5 py-1.5 rounded-r-md text-xs font-bold hover:bg-[#e2bd44]"
                  >
                    Go
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsSearchOpen(false)}
                    className="ml-1 text-gray-500 p-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 text-[#fcf8f2]/90 hover:text-[#d4af37] cursor-pointer rounded-full transition-colors"
                  title="Search Products"
                  id="header-search-btn"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Quick Bulk Quote CTA */}
            {/* <button
              onClick={() => {
                setActiveTab('wholesale');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hidden sm:flex items-center gap-1.5 bg-gradient-to-r from-[#d4af37] to-[#b89228] text-[#0c382b] px-3.5 py-1.5 rounded-full text-xs font-bold shadow-md hover:brightness-110 transition-all border border-amber-200"
              id="header-bulk-quote-btn"
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Wholesale Enquiry</span>
            </button> */}

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 bg-[#1a4d3e] hover:bg-[#235e4d] text-[#fcf8f2] rounded-full border border-[#2d5848] transition-all shadow-md group"
              id="header-cart-btn"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5 text-[#d4af37] group-hover:scale-110 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#0c382b] shadow-sm animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#fcf8f2] hover:text-[#d4af37] focus:outline-none"
              id="mobile-menu-toggle-btn"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#07241b] text-[#fcf8f2] border-b border-[#2d5848] px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setActiveTab(link.id);
                setIsMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between ${activeTab === link.id
                ? 'bg-[#1a4d3e] text-[#d4af37] font-bold border-l-4 border-[#d4af37]'
                : 'text-[#fcf8f2]/90 hover:bg-[#0c382b]'
                }`}
            >
              <span>{link.label}</span>
              {link.badge && (
                <span className="text-[10px] bg-[#d4af37] text-[#0c382b] font-bold px-2 py-0.5 rounded">
                  {link.badge}
                </span>
              )}
            </button>
          ))}

          <div className="pt-4 border-t border-[#1b4e3e] flex flex-col gap-2">
            {setIsThemeModalOpen && (
              <button
                onClick={() => {
                  setIsThemeModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full py-2.5 bg-[#124233] text-[#d4af37] border border-[#d4af37]/40 rounded-lg font-bold text-center text-xs flex items-center justify-center gap-2 shadow"
              >
                <Palette className="w-4 h-4 text-[#d4af37]" />
                🎨 Select Color Theme ({THEMES.length} Available)
              </button>
            )}

            <button
              onClick={() => {
                setActiveTab('wholesale');
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-2.5 bg-[#d4af37] text-[#0c382b] rounded-lg font-bold text-center text-sm shadow"
            >
              📦 Bulk / Wholesale Enquiry
            </button>
            <button
              onClick={() => {
                setIsQRModalOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-2 bg-[#1a4d3e] text-[#e2d5b6] rounded-lg font-medium text-center text-xs flex items-center justify-center gap-2"
            >
              <QrCode className="w-4 h-4 text-[#d4af37]" />
              Scan Physical Pouch Barcode / QR
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
