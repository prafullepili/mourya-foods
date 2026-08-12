import React from 'react';
import { X, ShieldCheck, FileText, RefreshCw, Truck, Lock } from 'lucide-react';

interface PolicyModalProps {
  isOpen: boolean;
  type: string | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({
  isOpen,
  type,
  onClose,
}) => {
  if (!isOpen || !type) return null;

  const renderContent = () => {
    switch (type) {
      case 'privacy':
        return (
          <div className="space-y-4 text-xs text-gray-200 leading-relaxed">
            <h3 className="font-serif text-2xl font-bold text-white border-b border-[#1b4e3e] pb-2">
              Privacy Policy - MOURYA FOODS
            </h3>
            <p>
              At MOURYA FOODS (www.mouryafoods.com), accessible from Chembur, Mumbai, Maharashtra, one of our main priorities is the privacy of our visitors and customers. This Privacy Policy document contains types of information that is collected and recorded by MOURYA FOODS and how we use it.
            </p>
            
            <h4 className="font-bold text-[#d4af37] text-sm pt-2">1. Information We Collect</h4>
            <p>
              We collect personal information that you provide to us when placing an order, contacting customer support, or subscribing to our updates. This includes name, email address, phone number, delivery address, and payment credentials processed securely via encrypted payment gateways.
            </p>

            <h4 className="font-bold text-[#d4af37] text-sm pt-2">2. How We Use Your Information</h4>
            <p>
              We use the collected information to fulfill retail & bulk orders, process payments, dispatch courier packages via Pan-India logistics partners, communicate order tracking details, and provide dedicated customer service via WhatsApp and phone (+91 9137738436).
            </p>

            <h4 className="font-bold text-[#d4af37] text-sm pt-2">3. Data Security & Encryption</h4>
            <p>
              MOURYA FOODS employs industry-standard 256-bit SSL encryption for all transaction data. We do not store credit/debit card PINs or passwords. Payment operations are routed via PCI-DSS compliant payment processing platforms like Razorpay and verified UPI nodes.
            </p>

            <h4 className="font-bold text-[#d4af37] text-sm pt-2">4. Contact Information</h4>
            <p>
              For privacy enquiries or data requests, email <strong>mouryafoods18@gmail.com</strong> or call <strong>+91 9137738436</strong>.
            </p>
          </div>
        );

      case 'terms':
        return (
          <div className="space-y-4 text-xs text-gray-200 leading-relaxed">
            <h3 className="font-serif text-2xl font-bold text-white border-b border-[#1b4e3e] pb-2">
              Terms & Conditions - MOURYA FOODS
            </h3>
            <p>
              Welcome to MOURYA FOODS! These terms and conditions outline the rules and regulations for the use of MOURYA FOODS Website, located at www.mouryafoods.com.
            </p>

            <h4 className="font-bold text-[#d4af37] text-sm pt-2">1. Intellectual Property Rights</h4>
            <p>
              Unless otherwise stated, MOURYA FOODS and/or its licensors own the intellectual property rights for all material, logo branding, package visual designs, and copy on MOURYA FOODS. All intellectual property rights are reserved.
            </p>

            <h4 className="font-bold text-[#d4af37] text-sm pt-2">2. FSSAI & Food Compliance</h4>
            <p>
              All products manufactured and sold by MOURYA FOODS comply with FSSAI regulations (Lic No. 11524998000451). Products are guaranteed 100% natural, vegetarian, non-GMO, and free from synthetic preservatives.
            </p>

            <h4 className="font-bold text-[#d4af37] text-sm pt-2">3. Wholesale & Export Contracts</h4>
            <p>
              Wholesale distribution and export contracts signed with MOURYA FOODS are subject to agreed MOQs, export documentation, Phytosanitary certification, and shipping terms as specified in formal Proforma Invoices.
            </p>
          </div>
        );

      case 'shipping':
        return (
          <div className="space-y-4 text-xs text-gray-200 leading-relaxed">
            <h3 className="font-serif text-2xl font-bold text-white border-b border-[#1b4e3e] pb-2">
              Shipping & Delivery Policy
            </h3>
            
            <div className="p-3 bg-[#124233] border border-[#2d5848] rounded-xl text-amber-200 font-semibold">
              🚚 Pan-India Shipping: FREE Delivery on orders above ₹499! Standard shipping fee of ₹50 applies for orders below ₹499.
            </div>

            <h4 className="font-bold text-[#d4af37] text-sm pt-2">1. Dispatch Timeline</h4>
            <p>
              Orders placed on www.mouryafoods.com are processed and packed in airtight nitrogen-flushed pouches within 24 hours of confirmation.
            </p>

            <h4 className="font-bold text-[#d4af37] text-sm pt-2">2. Estimated Delivery Duration</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              <li>Metro Cities (Mumbai, Delhi, Bengaluru, Kolkata, Chennai, Hyderabad): 2 to 3 Business Days</li>
              <li>Tier 2 / Tier 3 Towns across India: 4 to 6 Business Days</li>
              <li>Global Air / Sea Freight Exports: 7 to 15 Business Days depending on port clearance</li>
            </ul>

            <h4 className="font-bold text-[#d4af37] text-sm pt-2">3. Order Tracking</h4>
            <p>
              Once dispatched, customers receive an SMS and WhatsApp update containing the AWB Tracking Number and logistics link (Bluedart / Delhivery / Speed Post).
            </p>
          </div>
        );

      case 'refund':
        return (
          <div className="space-y-4 text-xs text-gray-200 leading-relaxed">
            <h3 className="font-serif text-2xl font-bold text-white border-b border-[#1b4e3e] pb-2">
              Return, Replacement & Refund Policy
            </h3>

            <p>
              Due to the perishable nature of gourmet food items, MOURYA FOODS accepts returns or replacements under the following strict quality assurance guidelines:
            </p>

            <h4 className="font-bold text-[#d4af37] text-sm pt-2">1. Conditions for Replacement / Refund</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              <li>Product package received in damaged / torn state.</li>
              <li>Wrong flavor or product variant delivered compared to invoice order.</li>
              <li>Product quality or seal seal compromise reported within 48 hours of delivery.</li>
            </ul>

            <h4 className="font-bold text-[#d4af37] text-sm pt-2">2. How to Claim</h4>
            <p>
              Please send a photo/video of the unboxing to WhatsApp <strong>+91 9137738436</strong> or email <strong>mouryafoods18@gmail.com</strong> with your Order ID. Our customer support team will immediately dispatch a fresh replacement pouch at zero extra cost or process a full refund to your original payment account within 3-5 business days.
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#0c382b] border-2 border-[#d4af37] rounded-3xl max-w-2xl w-full p-6 sm:p-8 text-[#fcf8f2] relative shadow-2xl animate-scaleIn max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-white bg-[#124233] p-2 rounded-full border border-[#2d5848]"
        >
          <X className="w-5 h-5" />
        </button>

        {renderContent()}

      </div>
    </div>
  );
};
