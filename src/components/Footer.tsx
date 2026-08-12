import React from 'react';
import { MouryaLogo } from './MouryaLogo';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Twitter,
  ShieldCheck,
  Award,
  PackageCheck,
  ExternalLink,
  QrCode,
  Share2
} from 'lucide-react';
import { SocialLinktreeCard } from './SocialLinktreeCard';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenPolicy: (policyName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenPolicy }) => {
  return (
    <footer className="bg-[#07241b] text-[#e2d5b6] pt-16 pb-8 border-t-4 border-[#d4af37] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1b4e3e]">

          {/* Col 1: Brand Info & Official Emblem Logo */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <MouryaLogo variant="horizontal" size="lg" />
            </div>

            <p className="text-sm text-[#e2d5b6]/80 leading-relaxed max-w-md">
              MOURYA FOODS is a premium Indian FMCG brand dedicated to bringing authentic, hand-harvested, hygienic, and delicious Bihar Makhana (Foxnuts) directly from wetlands of Mithila to households, supermarkets, and global markets.
            </p>

            {/* Contact Details */}
            <div className="space-y-2.5 text-xs text-[#e2d5b6]/90 pt-1">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <span>
                    309 SRA A 3 CTS No. 2 Type 3 GM, Link Road, Chembur Near Mahada Colony, Mumbai – 400071, Maharashtra, India
                  </span>
                  <a
                    href="https://maps.app.goo.gl/1s8U9H7UpKijhPZm7"
                    target="_blank"
                    rel="noreferrer"
                    className="block text-[#d4af37] hover:underline font-bold text-[11px] pt-0.5"
                  >
                    📍 Open Google Maps Location (maps.app.goo.gl/1s8U9H7UpKijhPZm7)
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a href="tel:+919137738436" className="hover:text-[#d4af37] transition-colors">
                  +91 9137738436 (Call / WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a href="mailto:mouryafoods18@gmail.com" className="hover:text-[#d4af37] transition-colors">
                  mouryafoods18@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>www.mouryafoods.com</span>
              </div>
            </div>

            {/* Social Handles */}
            <div className="pt-2">
              <p className="text-xs text-white font-semibold mb-2.5">Follow Us On Social Media <span className="text-[#d4af37]">@mouryafoods</span></p>
              <div className="flex items-center gap-2">
                {[
                  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/mouryafoods' },
                  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/mouryafoods' },
                  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/mouryafoods' },
                  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@mouryafoods' },
                  { name: 'Twitter/X', icon: Twitter, href: 'https://x.com/mouryafoods' }
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-[#0c382b] border border-[#2d5848] flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-[#07241b] transition-all"
                    aria-label={s.name}
                  >
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-[#1b4e3e] pb-2 text-[#d4af37]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'about', label: 'About MOURYA FOODS' },
                { id: 'products', label: 'Our Products & SKUs' },
                { id: 'track', label: 'Track Order Status' },
                { id: 'nutrition', label: 'Nutrition Facts (100g)' },
                { id: 'journey', label: 'From Bihar to Your Home' },
                { id: 'quality', label: 'Quality & Safety' },
                { id: 'faq', label: 'Frequently Asked Questions (FAQ)' },
                { id: 'blog', label: 'Makhana Health Blog' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      setActiveTab(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#d4af37]">›</span> {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Business & Export */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-[#1b4e3e] pb-2 text-[#d4af37]">
              B2B & Trade
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { id: 'wholesale', label: 'Bulk & Wholesale Orders' },
                { id: 'wholesale', label: 'Supermarket Distribution' },
                { id: 'wholesale', label: 'Retailer Enquiries' },
                { id: 'export', label: 'Global Export Orders' },
                { id: 'export', label: 'USA | UAE | UK | Canada' },
                { id: 'wholesale', label: 'Corporate Gifting Boxes' },
                { id: 'contact', label: 'Customer Care & Feedback' }
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      setActiveTab(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#d4af37]">›</span> {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quality & Legal Policies */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-[#1b4e3e] pb-2 text-[#d4af37]">
              Compliance & Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onOpenPolicy('privacy')} className="hover:text-[#d4af37] transition-colors">
                  › Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('terms')} className="hover:text-[#d4af37] transition-colors">
                  › Terms & Conditions
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('shipping')} className="hover:text-[#d4af37] transition-colors">
                  › Shipping & Delivery Policy
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('returns')} className="hover:text-[#d4af37] transition-colors">
                  › Return / Refund Policy
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('cancellation')} className="hover:text-[#d4af37] transition-colors">
                  › Cancellation Policy
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('quality')} className="hover:text-[#d4af37] transition-colors">
                  › FSSAI Labelling Standards
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('quality')} className="hover:text-[#d4af37] transition-colors">
                  › GS1 India Barcode Standards (890)
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Social Media Linktree QR Code Banner */}
        <div className="my-10 p-6 sm:p-8 bg-[#0c382b] border-2 border-[#d0f216] rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d0f216] text-black font-extrabold text-xs uppercase tracking-wider shadow">
                <Share2 className="w-3.5 h-3.5" />
                Connect All Handles
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                Scan QR Code to Join MOURYA FOODS on Social Media
              </h3>

              <p className="text-sm text-[#e2d5b6] leading-relaxed">
                Connect with us on Instagram, Facebook, YouTube, LinkedIn, Twitter & WhatsApp through our unified Linktree hub: <strong className="text-[#d0f216] font-mono">linktr.ee/mouryafoods</strong>. Stay updated on recipes, wetland harvest videos, and exclusive discounts!
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="https://linktr.ee/mouryafoods"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 bg-[#d0f216] hover:bg-[#b8d810] text-black font-extrabold text-xs rounded-xl flex items-center gap-2 shadow-lg transition-all border border-black"
                  id="footer-linktree-btn"
                >
                  <span>Open linktr.ee/mouryafoods</span>
                  <ExternalLink className="w-4 h-4 text-black" />
                </a>

                <a
                  href="https://instagram.com/mouryafoods"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-3 bg-[#124233] hover:bg-[#1a4d3e] text-white font-bold text-xs rounded-xl flex items-center gap-2 border border-[#2d5848]"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>Instagram @mouryafoods</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <SocialLinktreeCard compact={true} />
            </div>

          </div>
        </div>

        {/* Trust Badges Bar */}
        <div className="my-8 py-6 bg-[#0c382b] rounded-2xl border border-[#2d5848] grid grid-cols-2 md:grid-cols-4 gap-4 px-6 text-center text-xs">
          <div className="flex flex-col items-center justify-center p-2">
            <ShieldCheck className="w-6 h-6 text-[#d4af37] mb-1" />
            <span className="font-bold text-white">FSSAI Compliant</span>
            <span className="text-[11px] text-[#e2d5b6]/70">Strict Hygiene & Labelling</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2">
            <Award className="w-6 h-6 text-[#d4af37] mb-1" />
            <span className="font-bold text-white">GS1 Authorised</span>
            <span className="text-[11px] text-[#e2d5b6]/70">890 GTIN Barcode Series</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2">
            <PackageCheck className="w-6 h-6 text-[#d4af37] mb-1" />
            <span className="font-bold text-white">100% Bihar Sourced</span>
            <span className="text-[11px] text-[#e2d5b6]/70">Mithila Heritage Makhana</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2">
            <Globe className="w-6 h-6 text-[#d4af37] mb-1" />
            <span className="font-bold text-white">Global Export Ready</span>
            <span className="text-[11px] text-[#e2d5b6]/70">Air & Sea Cargo Logistics</span>
          </div>
        </div>

        {/* Copyright & Bottom Note */}
        <div className="pt-6 border-t border-[#1b4e3e] flex flex-col sm:flex-row justify-between items-center text-xs text-[#e2d5b6]/70 gap-2">
          <p>© {new Date().getFullYear()} MOURYA FOODS. All Rights Reserved.</p>
          <p className="flex items-center gap-1 text-[11px]">
            <span>Designed for MOURYA FOODS Premium FMCG Operations</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
