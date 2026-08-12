import React, { useState } from 'react';
import { Product, OrderDetails } from '../types';
import { 
  X, 
  CheckCircle2, 
  Truck, 
  MapPin, 
  Phone, 
  Mail, 
  User, 
  CreditCard, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  ShoppingBag,
  ArrowRight,
  MessageSquare,
  Building,
  Home,
  Check
} from 'lucide-react';

interface ExpressCheckoutModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onTrackOrder?: (orderId: string) => void;
}

export const ExpressCheckoutModal: React.FC<ExpressCheckoutModalProps> = ({
  product,
  isOpen,
  onClose,
  onTrackOrder,
}) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [step, setStep] = useState<'details' | 'success'>('details');

  // Customer Delivery Details State
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [pincode, setPincode] = useState('');
  const [houseNo, setHouseNo] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [landmark, setLandmark] = useState('');
  const [city, setCity] = useState('');
  const [stateName, setStateName] = useState('Maharashtra');
  const [addressType, setAddressType] = useState<'Home' | 'Office' | 'Other'>('Home');
  const [deliveryNotes, setDeliveryNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'UPI' | 'Card' | 'COD' | 'Netbanking'>('UPI');

  const [confirmedOrder, setConfirmedOrder] = useState<OrderDetails | null>(null);

  if (!isOpen || !product) return null;

  const itemTotal = product.price * quantity;
  const shippingCharge = itemTotal >= 499 ? 0 : 50;
  const grandTotal = itemTotal + shippingCharge;

  // Auto detect city/state based on pincode mock helper
  const handlePincodeChange = (val: string) => {
    setPincode(val);
    if (val.length === 6) {
      if (val.startsWith('400')) {
        setCity('Mumbai');
        setStateName('Maharashtra');
      } else if (val.startsWith('110')) {
        setCity('New Delhi');
        setStateName('Delhi');
      } else if (val.startsWith('560')) {
        setCity('Bengaluru');
        setStateName('Karnataka');
      } else if (val.startsWith('700')) {
        setCity('Kolkata');
        setStateName('West Bengal');
      } else if (val.startsWith('800') || val.startsWith('846')) {
        setCity('Patna / Darbhanga');
        setStateName('Bihar');
      }
    }
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();

    const newOrder: OrderDetails = {
      orderId: 'MF-EXP-' + Math.floor(100000 + Math.random() * 900000),
      customerName: fullName,
      email: email,
      phone: mobile,
      address: `${houseNo}, ${streetAddress} ${landmark ? `(Near ${landmark})` : ''} [${addressType}]`,
      city: `${city}, ${stateName}`,
      pincode: pincode,
      items: [{ product, quantity }],
      totalAmount: grandTotal,
      paymentMethod: paymentMethod,
      status: 'Placed',
      orderDate: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
    };

    // Save order in local storage for order tracking
    try {
      const existing = JSON.parse(localStorage.getItem('mourya_saved_orders') || '[]');
      existing.unshift(newOrder);
      localStorage.setItem('mourya_saved_orders', JSON.stringify(existing));
    } catch (err) {
      console.error('Failed saving order to storage', err);
    }

    setConfirmedOrder(newOrder);
    setStep('success');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 font-sans">
      <div className="bg-[#0c382b] border-2 border-[#d4af37] rounded-3xl max-w-2xl w-full p-5 sm:p-8 text-[#fcf8f2] relative shadow-2xl animate-scaleIn max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-white bg-[#124233] p-2 rounded-full border border-[#2d5848] transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'details' ? (
          <div className="space-y-6">
            
            {/* Modal Header */}
            <div className="border-b border-[#1b4e3e] pb-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#1a4d3e] text-[#d4af37] text-[10px] font-bold uppercase tracking-wider border border-[#d4af37]/30 mb-1">
                <Zap className="w-3 h-3 fill-[#d4af37]" />
                Express Delivery Order
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Enter Delivery Details
              </h2>
              <p className="text-xs text-[#e2d5b6]">
                Provide your address below for 100% insured, fast dispatch from MOURYA FOODS.
              </p>
            </div>

            {/* Selected Product Summary Strip */}
            <div className="bg-[#124233] p-4 rounded-2xl border border-[#2d5848] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 w-full sm:w-auto">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded-xl border border-[#d4af37] shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <span className="text-[10px] text-[#d4af37] font-bold uppercase">{product.variant}</span>
                  <h3 className="font-serif font-bold text-sm text-white">{product.name}</h3>
                  <p className="text-xs text-gray-300">₹{product.price} per pack</p>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto border-t sm:border-t-0 border-[#1b4e3e] pt-3 sm:pt-0">
                <span className="text-xs text-gray-300">Packs:</span>
                <div className="flex items-center border border-[#2d5848] rounded-xl bg-[#0c382b]">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 text-white hover:bg-[#124233] font-bold text-xs"
                  >
                    -
                  </button>
                  <span className="px-3 text-xs font-bold text-[#d4af37]">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 text-white hover:bg-[#124233] font-bold text-xs"
                  >
                    +
                  </button>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-400 block text-[10px]">Total</span>
                  <span className="text-sm font-bold text-[#d4af37]">₹{itemTotal}</span>
                </div>
              </div>
            </div>

            {/* Express Delivery Form */}
            <form onSubmit={handlePlaceOrder} className="space-y-4 text-xs">
              
              {/* Section 1: Personal Info */}
              <div className="space-y-3">
                <h4 className="font-serif font-bold text-sm text-[#d4af37] flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>1. Contact Information</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-gray-300 mb-1 font-semibold">Full Receiver Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-[#124233] border border-[#2d5848] text-white p-3 rounded-xl focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-1 font-semibold">Mobile Number (WhatsApp) *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 9137738436"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      className="w-full bg-[#124233] border border-[#2d5848] text-white p-3 rounded-xl focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-1 font-semibold">Email Address (for Invoice) *</label>
                  <input
                    type="email"
                    required
                    placeholder="yourname@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#124233] border border-[#2d5848] text-white p-3 rounded-xl focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              {/* Section 2: Full Address */}
              <div className="space-y-3 pt-2">
                <h4 className="font-serif font-bold text-sm text-[#d4af37] flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>2. Full Delivery Address</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-gray-300 mb-1 font-semibold">Pincode *</label>
                    <input
                      type="text"
                      required
                      maxLength={6}
                      placeholder="e.g. 400071"
                      value={pincode}
                      onChange={(e) => handlePincodeChange(e.target.value)}
                      className="w-full bg-[#124233] border border-[#2d5848] text-white p-3 rounded-xl focus:outline-none focus:border-[#d4af37] font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-1 font-semibold">City / District *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mumbai"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-[#124233] border border-[#2d5848] text-white p-3 rounded-xl focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-1 font-semibold">State *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maharashtra"
                      value={stateName}
                      onChange={(e) => setStateName(e.target.value)}
                      className="w-full bg-[#124233] border border-[#2d5848] text-white p-3 rounded-xl focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-gray-300 mb-1 font-semibold">Flat / House No., Building Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Flat 309, Building A-3"
                      value={houseNo}
                      onChange={(e) => setHouseNo(e.target.value)}
                      className="w-full bg-[#124233] border border-[#2d5848] text-white p-3 rounded-xl focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-1 font-semibold">Street / Colony / Area *</label>
                    <input
                      type="text"
                      required
                      placeholder="Link Road, Chembur"
                      value={streetAddress}
                      onChange={(e) => setStreetAddress(e.target.value)}
                      className="w-full bg-[#124233] border border-[#2d5848] text-white p-3 rounded-xl focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-gray-300 mb-1 font-semibold">Landmark (Optional)</label>
                    <input
                      type="text"
                      placeholder="Near Mhada Colony"
                      value={landmark}
                      onChange={(e) => setLandmark(e.target.value)}
                      className="w-full bg-[#124233] border border-[#2d5848] text-white p-3 rounded-xl focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-1 font-semibold">Address Tag</label>
                    <div className="flex gap-2 pt-0.5">
                      {[
                        { id: 'Home', icon: Home, label: 'Home' },
                        { id: 'Office', icon: Building, label: 'Office' },
                      ].map((tag) => {
                        const TagIcon = tag.icon;
                        return (
                          <button
                            key={tag.id}
                            type="button"
                            onClick={() => setAddressType(tag.id as any)}
                            className={`flex-1 py-2.5 rounded-xl border font-bold flex items-center justify-center gap-1.5 transition-all ${
                              addressType === tag.id
                                ? 'bg-[#d4af37] text-[#0c382b] border-[#d4af37]'
                                : 'bg-[#124233] text-gray-300 border-[#2d5848]'
                            }`}
                          >
                            <TagIcon className="w-3.5 h-3.5" />
                            <span>{tag.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

              </div>

              {/* Section 3: Payment Mode */}
              <div className="space-y-3 pt-2">
                <h4 className="font-serif font-bold text-sm text-[#d4af37] flex items-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  <span>3. Payment Mode Selection</span>
                </h4>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'UPI', label: '⚡ Instant UPI' },
                    { id: 'Card', label: '💳 Cards / Netbanking' },
                    { id: 'COD', label: '💵 Cash on Delivery' },
                    { id: 'Netbanking', label: '🏛️ Bank Transfer' },
                  ].map((pm) => (
                    <button
                      key={pm.id}
                      type="button"
                      onClick={() => setPaymentMethod(pm.id as any)}
                      className={`p-2.5 rounded-xl border text-xs font-bold text-center transition-all ${
                        paymentMethod === pm.id
                          ? 'bg-[#d4af37] text-[#0c382b] border-[#d4af37] shadow'
                          : 'bg-[#124233] text-gray-300 border-[#2d5848]'
                      }`}
                    >
                      {pm.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Total Calculation Strip */}
              <div className="p-4 bg-[#07241b] rounded-2xl border border-[#2d5848] space-y-2">
                <div className="flex justify-between text-gray-300">
                  <span>Packs ({quantity}x):</span>
                  <span>₹{itemTotal}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Courier Shipping Fee:</span>
                  <span className={shippingCharge === 0 ? 'text-emerald-400 font-bold' : ''}>
                    {shippingCharge === 0 ? 'FREE Pan-India' : `₹${shippingCharge}`}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-white border-t border-[#1b4e3e] pt-2">
                  <span>Grand Total:</span>
                  <span className="text-[#d4af37]">₹{grandTotal}</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#d4af37] via-[#e2bd44] to-[#b88c1d] text-[#0c382b] font-extrabold text-sm rounded-xl shadow-2xl hover:brightness-110 flex items-center justify-center gap-2 transition-all"
                id="place-express-order-btn"
              >
                <Zap className="w-5 h-5 fill-[#0c382b]" />
                <span>Confirm Delivery Address & Place Order (₹{grandTotal})</span>
              </button>

            </form>

          </div>
        ) : (
          /* Success Screen */
          confirmedOrder && (
            <div className="text-center py-6 space-y-6 animate-fadeIn">
              
              <div className="w-20 h-20 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-xl ring-8 ring-emerald-900/50">
                <CheckCircle2 className="w-12 h-12" />
              </div>

              <div className="space-y-1">
                <span className="text-xs bg-[#1a4d3e] text-[#d4af37] px-3 py-1 rounded-full font-mono font-bold uppercase border border-[#d4af37]/30">
                  Order ID: {confirmedOrder.orderId}
                </span>
                <h3 className="font-serif text-3xl font-bold text-white pt-2">
                  Delivery Details Received!
                </h3>
                <p className="text-xs text-[#e2d5b6] max-w-md mx-auto">
                  Thank you, <strong className="text-white">{confirmedOrder.customerName}</strong>! Your MOURYA FOODS package is being packed in nitrogen-sealed pouches and will be dispatched via express courier within 24 hours.
                </p>
              </div>

              {/* Order Invoice Details */}
              <div className="bg-[#124233] p-5 rounded-2xl border border-[#2d5848] text-left text-xs space-y-2.5 font-mono text-gray-200">
                <div className="flex justify-between border-b border-[#1b4e3e] pb-2">
                  <span className="text-gray-400">Item Ordered:</span>
                  <strong className="text-[#d4af37]">{quantity}x {product.name} ({product.variant})</strong>
                </div>
                <div className="flex justify-between border-b border-[#1b4e3e] pb-2">
                  <span className="text-gray-400">Total Paid:</span>
                  <strong className="text-white">₹{confirmedOrder.totalAmount} ({confirmedOrder.paymentMethod})</strong>
                </div>
                <div className="flex justify-between border-b border-[#1b4e3e] pb-2">
                  <span className="text-gray-400">Delivery Address:</span>
                  <strong className="text-white text-right max-w-[240px] truncate">{confirmedOrder.address}, {confirmedOrder.city} - {confirmedOrder.pincode}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Estimated Delivery:</span>
                  <strong className="text-emerald-400">2 - 4 Business Days (Insured Courier)</strong>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                {onTrackOrder && (
                  <button
                    type="button"
                    onClick={() => {
                      const id = confirmedOrder.orderId;
                      setStep('details');
                      onClose();
                      onTrackOrder(id);
                    }}
                    className="w-full py-3.5 bg-[#d4af37] text-[#0c382b] font-extrabold text-xs rounded-xl shadow-lg hover:bg-[#e2bd44] flex items-center justify-center gap-2 border border-[#d4af37]"
                  >
                    <Truck className="w-4 h-4 fill-[#0c382b]" />
                    <span>Track Shipment Live ({confirmedOrder.orderId})</span>
                  </button>
                )}

                <a
                  href={`https://wa.me/919137738436?text=${encodeURIComponent(
                    `Hello MOURYA FOODS, I have placed Order ${confirmedOrder.orderId} for ${quantity}x ${product.name} (${product.variant}). Please send me my tracking link. Name: ${confirmedOrder.customerName}, Phone: ${confirmedOrder.phone}`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs rounded-xl shadow-lg flex items-center justify-center gap-2 border border-emerald-400"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Send Order Confirmation to WhatsApp (+91 9137738436)</span>
                </a>

                <button
                  onClick={() => {
                    setStep('details');
                    onClose();
                  }}
                  className="w-full py-3 bg-[#124233] text-[#d4af37] font-bold text-xs rounded-xl border border-[#2d5848] hover:bg-[#1a4d3e]"
                >
                  Return to Store
                </button>
              </div>

            </div>
          )
        )}

      </div>
    </div>
  );
};
