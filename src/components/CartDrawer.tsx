import React, { useState } from 'react';
import { CartItem, OrderDetails } from '../types';
import { 
  X, 
  Trash2, 
  ShoppingBag, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  CreditCard, 
  PhoneCall, 
  MapPin, 
  User, 
  Sparkles, 
  Zap,
  Truck
} from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onTrackOrder?: (orderId: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onTrackOrder,
}) => {
  const [step, setStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  
  // Checkout Form State
  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'UPI' | 'Card' | 'COD' | 'Razorpay'>('UPI');
  const [completedOrder, setCompletedOrder] = useState<OrderDetails | null>(null);

  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscountPercent, setAppliedDiscountPercent] = useState(0);
  const [appliedCouponName, setAppliedCouponName] = useState('');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountAmount = Math.round((subtotal * appliedDiscountPercent) / 100);
  const shippingFee = subtotal >= 399 || subtotal === 0 ? 0 : 50;
  const totalAmount = Math.max(0, subtotal - discountAmount) + shippingFee;

  const handleApplyCoupon = (codeToApply?: string) => {
    const code = (codeToApply || couponCode).toUpperCase().trim();
    if (code === 'FARMLEY10' || code === 'MOURYA10') {
      setAppliedDiscountPercent(10);
      setAppliedCouponName(code);
      setCouponCode(code);
    } else if (code === 'HEALTHY20') {
      setAppliedDiscountPercent(20);
      setAppliedCouponName(code);
      setCouponCode(code);
    } else {
      alert('Invalid coupon code. Try FARMLEY10 or HEALTHY20!');
    }
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrder: OrderDetails = {
      orderId: 'MF-' + Math.floor(100000 + Math.random() * 900000),
      customerName,
      email,
      phone,
      address,
      city,
      pincode,
      items: [...cartItems],
      totalAmount,
      paymentMethod,
      status: 'Placed',
      orderDate: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
    };

    // Save order in local storage
    try {
      const existing = JSON.parse(localStorage.getItem('mourya_saved_orders') || '[]');
      existing.unshift(newOrder);
      localStorage.setItem('mourya_saved_orders', JSON.stringify(existing));
    } catch (err) {
      console.error('Failed saving order to storage', err);
    }

    setCompletedOrder(newOrder);
    setStep('success');
    onClearCart();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end">
      <div className="bg-[#0c382b] text-[#fcf8f2] w-full max-w-lg h-full shadow-2xl border-l-2 border-[#d4af37] flex flex-col justify-between font-sans animate-slideLeft">
        
        {/* Cart Header */}
        <div className="p-5 bg-[#07241b] border-b border-[#1b4e3e] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#d4af37]" />
            <h3 className="font-serif font-bold text-lg text-white">
              {step === 'cart' && `Your Cart (${cartItems.reduce((acc, item) => acc + item.quantity, 0)} Items)`}
              {step === 'checkout' && 'Express Delivery Checkout'}
              {step === 'success' && 'Order Confirmed! 🎉'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-white p-1 rounded-full bg-[#124233]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          
          {step === 'cart' && (
            <>
              {cartItems.length === 0 ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#124233] text-[#d4af37] flex items-center justify-center mx-auto border border-[#2d5848]">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-white">Your Cart is Empty</h4>
                  <p className="text-xs text-[#e2d5b6] max-w-xs mx-auto">
                    Add our healthy, crunchy Bihar Makhana pouches to your cart to enjoy free express delivery above ₹499!
                  </p>
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 bg-[#d4af37] text-[#0c382b] font-bold text-xs rounded-xl hover:bg-[#e2bd44]"
                  >
                    Browse Makhana Store
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div
                      key={item.product.id}
                      className="bg-[#124233] p-3.5 rounded-2xl border border-[#2d5848] flex items-center gap-3"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded-xl border border-[#2d5848] shrink-0"
                        referrerPolicy="no-referrer"
                      />

                      <div className="flex-1 space-y-1">
                        <span className="text-[10px] text-[#d4af37] font-bold uppercase">{item.product.variant}</span>
                        <h4 className="font-serif font-bold text-xs text-white line-clamp-1">{item.product.name}</h4>
                        <div className="flex items-center justify-between text-xs pt-1">
                          <span className="font-bold text-[#d4af37]">₹{item.product.price}</span>
                          
                          {/* Qty Counter */}
                          <div className="flex items-center border border-[#2d5848] rounded-lg bg-[#0c382b]">
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                              className="px-2 py-0.5 text-xs text-white hover:bg-[#124233]"
                            >
                              -
                            </button>
                            <span className="px-2 text-xs font-bold text-[#d4af37]">{item.quantity}</span>
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                              className="px-2 py-0.5 text-xs text-white hover:bg-[#124233]"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-red-400 hover:text-red-300 p-1"
                        title="Remove Item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}

                  {/* Farmley-Style Gamified Progress Bars */}
                  <div className="bg-[#124233] p-3.5 rounded-2xl border border-[#2d5848] space-y-3">
                    {/* Free Delivery Bar */}
                    <div className="space-y-1">
                      <div className="flex justify-between items-center text-xs">
                        <span className="flex items-center gap-1 text-gray-200">
                          <Truck className="w-3.5 h-3.5 text-[#d4af37]" />
                          <span>FREE Express Shipping:</span>
                        </span>
                        <span className="font-bold text-[#d4af37]">
                          {subtotal >= 399 ? 'UNLOCKED 🎉' : `Add ₹${399 - subtotal} more`}
                        </span>
                      </div>
                      <div className="w-full bg-[#0c382b] h-2 rounded-full overflow-hidden border border-[#2d5848]">
                        <div
                          className="bg-emerald-400 h-full rounded-full transition-all duration-500"
                          style={{ width: `${Math.min(100, (subtotal / 399) * 100)}%` }}
                        />
                      </div>
                    </div>

                    {/* Free Sample Gift Bar */}
                    <div className="space-y-1">
                      <div className="flex justify-between items-center text-xs">
                        <span className="flex items-center gap-1 text-gray-200">
                          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                          <span>FREE 50g Roasted Makhana Sample:</span>
                        </span>
                        <span className="font-bold text-amber-300">
                          {subtotal >= 699 ? 'UNLOCKED 🎁' : `Add ₹${699 - subtotal} more`}
                        </span>
                      </div>
                      <div className="w-full bg-[#0c382b] h-2 rounded-full overflow-hidden border border-[#2d5848]">
                        <div
                          className="bg-gradient-to-r from-amber-500 to-[#d4af37] h-full rounded-full transition-all duration-500"
                          style={{ width: `${Math.min(100, (subtotal / 699) * 100)}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Promo Coupon Box */}
                  <div className="bg-[#124233] p-3.5 rounded-2xl border border-[#2d5848] space-y-2">
                    <label className="text-xs font-bold text-[#d4af37] block">Apply Promo Coupon Code:</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="e.g. FARMLEY10"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        className="flex-1 bg-[#0c382b] border border-[#2d5848] text-white px-3 py-1.5 rounded-xl text-xs uppercase font-mono focus:outline-none focus:border-[#d4af37]"
                      />
                      <button
                        type="button"
                        onClick={() => handleApplyCoupon()}
                        className="bg-[#d4af37] text-[#0c382b] px-4 py-1.5 rounded-xl font-bold text-xs hover:bg-[#e2bd44]"
                      >
                        Apply
                      </button>
                    </div>

                    {/* Quick Coupon Buttons */}
                    <div className="flex items-center gap-2 pt-1 text-[10px]">
                      <span className="text-gray-300">Tap to apply:</span>
                      <button
                        type="button"
                        onClick={() => handleApplyCoupon('FARMLEY10')}
                        className="bg-[#1a4d3e] text-[#d4af37] border border-[#d4af37]/40 px-2 py-0.5 rounded font-mono font-bold hover:bg-[#235e4d]"
                      >
                        FARMLEY10 (10% OFF)
                      </button>
                      <button
                        type="button"
                        onClick={() => handleApplyCoupon('HEALTHY20')}
                        className="bg-[#1a4d3e] text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded font-mono font-bold hover:bg-[#235e4d]"
                      >
                        HEALTHY20 (20% OFF)
                      </button>
                    </div>

                    {appliedCouponName && (
                      <p className="text-xs text-emerald-300 font-bold pt-1">
                        ✓ Coupon "{appliedCouponName}" Applied! ({appliedDiscountPercent}% Discount)
                      </p>
                    )}
                  </div>
                </div>
              )}
            </>
          )}

          {step === 'checkout' && (
            <form id="checkout-form" onSubmit={handlePlaceOrder} className="space-y-4 text-xs">
              
              <div className="space-y-3">
                <h4 className="font-serif font-bold text-sm text-[#d4af37] border-b border-[#1b4e3e] pb-1">
                  1. Shipping & Contact Details
                </h4>

                <div>
                  <label className="block text-gray-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dinesh Mourya"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-[#124233] border border-[#2d5848] text-white p-2.5 rounded-xl focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-gray-300 mb-1">Mobile (WhatsApp) *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 9137738436"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#124233] border border-[#2d5848] text-white p-2.5 rounded-xl focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="yourname@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#124233] border border-[#2d5848] text-white p-2.5 rounded-xl focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-1">Delivery Address *</label>
                  <input
                    type="text"
                    required
                    placeholder="House/Flat No., Building, Street Name"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full bg-[#124233] border border-[#2d5848] text-white p-2.5 rounded-xl focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-gray-300 mb-1">City / Town *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mumbai"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-[#124233] border border-[#2d5848] text-white p-2.5 rounded-xl focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-1">Pincode *</label>
                    <input
                      type="text"
                      required
                      placeholder="400071"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      className="w-full bg-[#124233] border border-[#2d5848] text-white p-2.5 rounded-xl focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method Selection */}
              <div className="space-y-2 pt-2">
                <h4 className="font-serif font-bold text-sm text-[#d4af37] border-b border-[#1b4e3e] pb-1">
                  2. Select Payment Method
                </h4>

                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'UPI', label: 'UPI / PhonePe / GPay' },
                    { id: 'Razorpay', label: 'Razorpay Gateway' },
                    { id: 'Card', label: 'Debit / Credit Card' },
                    { id: 'COD', label: 'Cash on Delivery (COD)' },
                  ].map((pm) => (
                    <button
                      key={pm.id}
                      type="button"
                      onClick={() => setPaymentMethod(pm.id as any)}
                      className={`p-2.5 rounded-xl border text-xs font-bold text-left transition-all ${
                        paymentMethod === pm.id
                          ? 'bg-[#d4af37] text-[#0c382b] border-[#d4af37]'
                          : 'bg-[#124233] text-gray-300 border-[#2d5848]'
                      }`}
                    >
                      {pm.label}
                    </button>
                  ))}
                </div>
              </div>

            </form>
          )}

          {step === 'success' && completedOrder && (
            <div className="text-center py-6 space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-1">
                <span className="text-xs text-[#d4af37] font-bold uppercase">Order ID: {completedOrder.orderId}</span>
                <h4 className="font-serif text-2xl font-bold text-white">Order Successfully Placed!</h4>
                <p className="text-xs text-gray-300">
                  Thank you <strong className="text-white">{completedOrder.customerName}</strong>! Your order confirmation has been emailed to <strong>{completedOrder.email}</strong>.
                </p>
              </div>

              <div className="bg-[#124233] p-4 rounded-2xl border border-[#2d5848] text-left text-xs space-y-2 font-mono">
                <p><strong>Total Amount:</strong> ₹{completedOrder.totalAmount}</p>
                <p><strong>Payment Mode:</strong> {completedOrder.paymentMethod}</p>
                <p><strong>Delivery Address:</strong> {completedOrder.address}, {completedOrder.city} - {completedOrder.pincode}</p>
                <p><strong>Expected Delivery:</strong> 2 - 4 Business Days</p>
              </div>

              <div className="space-y-2 pt-2">
                {onTrackOrder && (
                  <button
                    onClick={() => {
                      const id = completedOrder.orderId;
                      setStep('cart');
                      onClose();
                      onTrackOrder(id);
                    }}
                    className="w-full py-3 bg-[#d4af37] text-[#0c382b] font-extrabold text-xs rounded-xl shadow-lg hover:bg-[#e2bd44] flex items-center justify-center gap-2"
                  >
                    <Truck className="w-4 h-4 fill-[#0c382b]" />
                    <span>Track Shipment Live ({completedOrder.orderId})</span>
                  </button>
                )}

                <button
                  onClick={() => {
                    setStep('cart');
                    onClose();
                  }}
                  className="w-full py-2.5 bg-[#124233] text-[#d4af37] font-bold text-xs rounded-xl border border-[#2d5848]"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions / Summary */}
        {cartItems.length > 0 && step !== 'success' && (
          <div className="p-5 bg-[#07241b] border-t border-[#1b4e3e] space-y-3">
            
            <div className="space-y-1.5 text-xs text-gray-300 font-mono">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>₹{subtotal}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-400 font-bold">
                  <span>Coupon Discount ({appliedCouponName}):</span>
                  <span>-₹{discountAmount}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping Fee:</span>
                <span className={shippingFee === 0 ? 'text-emerald-400 font-bold' : ''}>
                  {shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}
                </span>
              </div>
              <div className="flex justify-between text-base font-bold text-white font-sans border-t border-[#1b4e3e] pt-2">
                <span>Total Amount:</span>
                <span className="text-[#d4af37]">₹{totalAmount}</span>
              </div>
            </div>

            {step === 'cart' ? (
              <button
                onClick={() => setStep('checkout')}
                className="w-full py-3.5 bg-gradient-to-r from-[#d4af37] via-[#c59b27] to-[#b88c1d] text-[#0c382b] font-extrabold text-sm rounded-xl shadow-xl hover:brightness-110 flex items-center justify-center gap-2"
                id="cart-proceed-checkout-btn"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={() => setStep('cart')}
                  className="w-1/3 py-3 bg-[#124233] text-gray-300 font-bold text-xs rounded-xl border border-[#2d5848]"
                >
                  Back
                </button>
                <button
                  type="submit"
                  form="checkout-form"
                  className="w-2/3 py-3 bg-[#d4af37] text-[#0c382b] font-extrabold text-xs rounded-xl shadow-lg hover:bg-[#e2bd44]"
                  id="cart-confirm-order-btn"
                >
                  Confirm & Pay ₹{totalAmount}
                </button>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
};
