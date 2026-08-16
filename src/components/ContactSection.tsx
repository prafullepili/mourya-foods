import React, { useState } from 'react';
import { MapPin, Phone, Mail, Globe, Send, MessageSquare, Clock, CheckCircle2, Headphones, Sparkles, Share2 } from 'lucide-react';
import { SocialLinktreeCard } from './SocialLinktreeCard';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Feedback / General Enquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-10 md:py-10 bg-[#07241b] text-[#fcf8f2] font-sans relative border-t border-[#1b4e3e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-[#d4af37] bg-[#1a4d3e] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-[#d4af37]/30">
            Head Office & Customer Care
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mt-3 font-bold text-white">
            Contact MOURYA FOODS
          </h2>
          <p className="text-sm sm:text-base text-[#e2d5b6]">
            Have questions about retail packs, corporate orders, or feedback? Get in touch with our team today.
          </p>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Official Contact Card */}
          <div className="lg:col-span-5 bg-[#0c382b] p-8 rounded-3xl border-2 border-[#d4af37] shadow-2xl space-y-6">
            
            <div className="border-b border-[#1b4e3e] pb-4">
              <h3 className="font-serif font-bold text-2xl text-white">
                MOURYA FOODS
              </h3>
              <p className="text-xs text-[#d4af37] font-semibold tracking-wider uppercase">
                Taste the Purity of Bihar
              </p>
            </div>

            <div className="space-y-4 text-sm text-gray-200">
              
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#1a4d3e] text-[#d4af37] flex items-center justify-center shrink-0 border border-[#d4af37]/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-[#d4af37]">Headquarters Address</h4>
                  <p className="text-xs leading-relaxed text-gray-300 pt-0.5">
                    309 SRA A 3 CTS No. 2 Type 3 GM, Link Road, Chembur Near Mahada Colony, Mumbai – 400071, Maharashtra, India
                  </p>
                  <a
                    href="https://maps.app.goo.gl/1s8U9H7UpKijhPZm7"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#d4af37] hover:text-white font-bold pt-1.5 transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Open in Google Maps 📍</span>
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#1a4d3e] text-[#d4af37] flex items-center justify-center shrink-0 border border-[#d4af37]/30">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-[#d4af37]">Phone / WhatsApp</h4>
                  <a href="tel:+919137738436" className="text-xs hover:text-[#d4af37] transition-colors font-semibold">
                    +91 9137738436
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#1a4d3e] text-[#d4af37] flex items-center justify-center shrink-0 border border-[#d4af37]/30">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-[#d4af37]">Official Email</h4>
                  <a href="mailto:mouryafoods18@gmail.com" className="text-xs hover:text-[#d4af37] transition-colors font-semibold">
                    mouryafoods18@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#1a4d3e] text-[#d4af37] flex items-center justify-center shrink-0 border border-[#d4af37]/30">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider text-[#d4af37]">Official Portal</h4>
                  <p className="text-xs text-gray-300">www.mouryafoods.com</p>
                </div>
              </div>

            </div>

            {/* Customer Care Box */}
            <div className="p-4 bg-[#124233] rounded-2xl border border-[#2d5848] space-y-2">
              <div className="flex items-center gap-2 text-[#d4af37] font-bold text-xs uppercase">
                <Headphones className="w-4 h-4" />
                <span>Customer Care & Feedback Helpline</span>
              </div>
              <p className="text-xs text-gray-300">
                For product feedback, complaints, or packaging enquiries, reach us on <strong>+91 9137738436</strong> or email <strong>mouryafoods18@gmail.com</strong>.
              </p>
            </div>

            {/* WhatsApp Direct Button */}
            <a
              href="https://wa.me/919137738436?text=Hello%20MOURYA%20FOODS%20Team%2C%20I%20would%20like%20to%20enquire%20about%20your%20Makhana%20products."
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all border border-emerald-400"
              id="whatsapp-direct-btn"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat directly on WhatsApp (+91 9137738436)</span>
            </a>

            {/* Social Media Linktree QR Code */}
            <div className="pt-2 border-t border-[#1b4e3e]">
              <p className="text-xs font-bold text-[#d4af37] uppercase tracking-wider mb-3">
                Scan QR for All Social Media Handles
              </p>
              <SocialLinktreeCard compact={true} />
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-[#0c382b] p-8 rounded-3xl border border-[#2d5848] shadow-xl">
            
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-[#e2d5b6] max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Our customer support team will get back to you shortly at <strong className="text-[#d4af37]">{formData.email}</strong> or <strong className="text-white">{formData.phone}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 bg-[#d4af37] text-[#0c382b] font-bold text-xs rounded-lg"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="border-b border-[#1b4e3e] pb-3 mb-2">
                  <h3 className="font-serif font-bold text-xl text-white">
                    Send Us a Direct Message
                  </h3>
                  <p className="text-xs text-gray-300">
                    Fill in the form below for instant assistance from customer support.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#e2d5b6] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#124233] border border-[#2d5848] text-white text-sm rounded-xl p-3 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#e2d5b6] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="yourname@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#124233] border border-[#2d5848] text-white text-sm rounded-xl p-3 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#e2d5b6] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 9137738436"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#124233] border border-[#2d5848] text-white text-sm rounded-xl p-3 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#e2d5b6] mb-1">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#124233] border border-[#2d5848] text-white text-sm rounded-xl p-3 focus:outline-none focus:border-[#d4af37]"
                    >
                      <option value="Feedback / General Enquiry">Feedback / General Enquiry</option>
                      <option value="Product Quality & Complaints">Product Quality & Complaints</option>
                      <option value="Order Status & Delivery">Order Status & Delivery</option>
                      <option value="Wholesale & Bulk Inquiry">Wholesale & Bulk Inquiry</option>
                      <option value="Export Inquiry">Export Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#e2d5b6] mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your message or inquiry details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#124233] border border-[#2d5848] text-white text-sm rounded-xl p-3 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#d4af37] text-[#0c382b] font-extrabold text-sm rounded-xl hover:bg-[#e2bd44] shadow-lg transition-all flex items-center justify-center gap-2"
                  id="contact-form-submit-btn"
                >
                  <Send className="w-4 h-4 fill-[#0c382b]" />
                  <span>Send Message</span>
                </button>

              </form>
            )}

          </div>

        </div>

        {/* Interactive Google Maps Location Section */}
        <div className="mt-12 bg-[#0c382b] border-2 border-[#d4af37]/50 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1b4e3e] pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#124233] text-[#d4af37] text-xs font-extrabold uppercase tracking-wider border border-[#2d5848] mb-2">
                <MapPin className="w-3.5 h-3.5" />
                Verified Google Maps Location
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                Visit MOURYA FOODS Head Office
              </h3>
              <p className="text-xs text-[#e2d5b6] mt-1">
                309 SRA A 3 CTS No. 2 Type 3 GM, Link Road, Chembur Near Mahada Colony, Mumbai – 400071, Maharashtra
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="https://maps.app.goo.gl/1s8U9H7UpKijhPZm7"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 bg-[#d4af37] hover:bg-[#e2bd44] text-[#0c382b] font-extrabold text-xs rounded-xl shadow-lg flex items-center gap-2 transition-all border border-[#d4af37]"
                id="open-google-maps-location-btn"
              >
                <MapPin className="w-4 h-4" />
                <span>Open Google Maps Location (https://maps.app.goo.gl/1s8U9H7UpKijhPZm7)</span>
              </a>
            </div>
          </div>

          {/* Embedded Google Map Frame */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-[#2d5848] shadow-inner h-72 sm:h-96">
            <iframe
              src="https://maps.google.com/maps?q=MOURYA+FOODS+309+SRA+A+3+CTS+No+2+Type+3+GM+Link+Road+Chembur+Near+Mahada+Colony+Mumbai+400071&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MOURYA FOODS Google Maps Location"
              className="w-full h-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
