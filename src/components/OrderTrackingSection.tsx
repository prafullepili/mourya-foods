import React, { useState, useEffect } from 'react';
import { 
  Package, 
  Search, 
  CheckCircle2, 
  Clock, 
  Truck, 
  MapPin, 
  Calendar, 
  ExternalLink, 
  PhoneCall, 
  MessageSquare, 
  FileText, 
  Sparkles, 
  RefreshCw, 
  AlertCircle, 
  ChevronRight,
  ShieldCheck,
  User,
  ShoppingBag,
  ArrowRight,
  Zap,
  Info
} from 'lucide-react';
import { OrderStatus, TrackedOrder, TrackingStep } from '../types';
import { PRODUCTS } from '../data/products';

// Mock sample orders database for instant lookup
const INITIAL_MOCK_ORDERS: Record<string, TrackedOrder> = {
  'MF-849201': {
    orderId: 'MF-849201',
    customerName: 'Ananya Sharma',
    email: 'ananya.s@gmail.com',
    phone: '+91 98201 44821',
    address: 'B-402, Green Acres Apt, Lokhandwala Complex, Andheri West',
    city: 'Mumbai, Maharashtra',
    pincode: '400053',
    items: [
      { product: PRODUCTS[0], quantity: 2 }, // 100g raw
      { product: PRODUCTS[1], quantity: 1 }, // Pudina
    ],
    totalAmount: 488,
    paymentMethod: 'UPI (GPay)',
    status: 'Shipped',
    orderDate: 'Aug 09, 2026',
    estimatedDeliveryDate: 'Aug 12, 2026',
    courierName: 'Blue Dart Express',
    awbNumber: 'BD-892014829IN',
    trackingHistory: [
      {
        status: 'Placed',
        title: 'Order Placed & Verified',
        date: 'Aug 09, 2026',
        time: '10:30 AM',
        completed: true,
        current: false,
        description: 'Payment confirmed via UPI. Order sent to processing queue.',
        location: 'Online Store Portal',
      },
      {
        status: 'Processed',
        title: 'Quality Tested & Nitrogen Sealed',
        date: 'Aug 09, 2026',
        time: '03:15 PM',
        completed: true,
        current: false,
        description: 'Makhana batch inspected for 6+ size grade, nitrogen flushed & pouch sealed.',
        location: 'MITHILA CENTRAL PLANT, BIHAR',
      },
      {
        status: 'Shipped',
        title: 'In Transit with Courier',
        date: 'Aug 10, 2026',
        time: '08:45 AM',
        completed: true,
        current: true,
        description: 'Handed over to Blue Dart Express. Package arrived at Mumbai Hub.',
        location: 'MUMBAI LOGISTICS HUB, MAHARASHTRA',
      },
      {
        status: 'Delivered',
        title: 'Out for Delivery / Delivered',
        date: 'Aug 12, 2026',
        time: 'Expected by 5:00 PM',
        completed: false,
        current: false,
        description: 'Executive will deliver package to your doorstep.',
        location: 'DESTINATION: MUMBAI 400053',
      },
    ],
  },
  'MF-102938': {
    orderId: 'MF-102938',
    customerName: 'Rajesh Verma',
    email: 'rajesh.v@outlook.com',
    phone: '+91 99100 22391',
    address: 'Plot 45, Sector 18, Near Cyber City',
    city: 'Gurugram, Haryana',
    pincode: '122002',
    items: [
      { product: PRODUCTS[4], quantity: 1 }, // 1kg
      { product: PRODUCTS[7], quantity: 2 }, // Peri Peri
    ],
    totalAmount: 1228,
    paymentMethod: 'Credit Card',
    status: 'Delivered',
    orderDate: 'Aug 05, 2026',
    estimatedDeliveryDate: 'Aug 08, 2026',
    courierName: 'Delhivery Surface',
    awbNumber: 'DEL-90214812IN',
    trackingHistory: [
      {
        status: 'Placed',
        title: 'Order Received',
        date: 'Aug 05, 2026',
        time: '11:00 AM',
        completed: true,
        current: false,
        description: 'Order confirmed successfully.',
        location: 'Online Store Portal',
      },
      {
        status: 'Processed',
        title: 'Packed at Bihar Processing Facility',
        date: 'Aug 05, 2026',
        time: '04:00 PM',
        completed: true,
        current: false,
        description: 'Packed in master corrugated shipping box.',
        location: 'DARBHANGA HUB, BIHAR',
      },
      {
        status: 'Shipped',
        title: 'Dispatched via Express Courier',
        date: 'Aug 06, 2026',
        time: '09:00 AM',
        completed: true,
        current: false,
        description: 'In transit via Delhivery Express.',
        location: 'DELHI NCR HUB',
      },
      {
        status: 'Delivered',
        title: 'Delivered Successfully',
        date: 'Aug 08, 2026',
        time: '02:30 PM',
        completed: true,
        current: true,
        description: 'Package delivered to recipient. Signed by Rajesh.',
        location: 'GURUGRAM, HARYANA 122002',
      },
    ],
  },
  'MF-993812': {
    orderId: 'MF-993812',
    customerName: 'Kavita Patel',
    email: 'kavita.p@yahoo.com',
    phone: '+91 97233 11892',
    address: '702, Shivalik Towers, Satellite Road',
    city: 'Ahmedabad, Gujarat',
    pincode: '380015',
    items: [
      { product: PRODUCTS[6], quantity: 3 }, // Himalayan Salt
    ],
    totalAmount: 417,
    paymentMethod: 'Cash on Delivery',
    status: 'Processed',
    orderDate: 'Aug 10, 2026',
    estimatedDeliveryDate: 'Aug 14, 2026',
    courierName: 'Ecom Express',
    awbNumber: 'EC-44102910IN',
    trackingHistory: [
      {
        status: 'Placed',
        title: 'Order Placed (COD)',
        date: 'Aug 10, 2026',
        time: '02:15 PM',
        completed: true,
        current: false,
        description: 'COD order verified via phone OTP.',
        location: 'MOURYA FOODS Portal',
      },
      {
        status: 'Processed',
        title: 'Packed & Quality Certified',
        date: 'Aug 10, 2026',
        time: '06:30 PM',
        completed: true,
        current: true,
        description: 'Slow roasted, seasoned and packed in fresh nitrogen pouch.',
        location: 'MITHILA CENTRAL WAREHOUSE',
      },
      {
        status: 'Shipped',
        title: 'Awaiting Dispatch to Courier',
        date: 'Aug 11, 2026',
        time: 'Scheduled 10:00 AM',
        completed: false,
        current: false,
        description: 'Scheduled for courier pickup.',
        location: 'DARBHANGA HUB',
      },
      {
        status: 'Delivered',
        title: 'Pending Delivery',
        date: 'Aug 14, 2026',
        time: 'Expected',
        completed: false,
        current: false,
        description: 'Expected within 3-4 days.',
        location: 'AHMEDABAD, GUJARAT',
      },
    ],
  },
};

export const OrderTrackingSection: React.FC = () => {
  const [searchId, setSearchId] = useState('');
  const [activeOrder, setActiveOrder] = useState<TrackedOrder | null>(null);
  const [ordersDatabase, setOrdersDatabase] = useState<Record<string, TrackedOrder>>(INITIAL_MOCK_ORDERS);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [recentOrderIds, setRecentOrderIds] = useState<string[]>([]);

  // On mount, load default order and check local storage for user created orders
  useEffect(() => {
    // Default show first sample order
    setActiveOrder(INITIAL_MOCK_ORDERS['MF-849201']);
    setSearchId('MF-849201');

    // Load any user created orders from localStorage if present
    try {
      const stored = localStorage.getItem('mourya_saved_orders');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const newDb = { ...INITIAL_MOCK_ORDERS };
          const ids: string[] = [];

          parsed.forEach((ord: any) => {
            if (ord.orderId) {
              ids.push(ord.orderId);
              newDb[ord.orderId] = buildTrackedOrderFromDetails(ord);
            }
          });

          setOrdersDatabase(newDb);
          setRecentOrderIds(ids);

          // Auto select the most recent saved order!
          if (ids.length > 0 && newDb[ids[0]]) {
            setActiveOrder(newDb[ids[0]]);
            setSearchId(ids[0]);
          }
        }
      }
    } catch (e) {
      console.error('Failed reading stored orders:', e);
    }
  }, []);

  // Helper to convert basic OrderDetails into a rich TrackedOrder object
  const buildTrackedOrderFromDetails = (ord: any): TrackedOrder => {
    const status: OrderStatus = ord.status || 'Placed';
    const isPlaced = true;
    const isProcessed = status === 'Processed' || status === 'Shipped' || status === 'Delivered';
    const isShipped = status === 'Shipped' || status === 'Delivered';
    const isDelivered = status === 'Delivered';

    return {
      orderId: ord.orderId,
      customerName: ord.customerName || 'Valued Customer',
      email: ord.email || 'customer@mouryafoods.com',
      phone: ord.phone || '+91 9137738436',
      address: ord.address || 'Address provided at checkout',
      city: ord.city || 'Mumbai',
      pincode: ord.pincode || '400071',
      items: ord.items || [{ product: PRODUCTS[0], quantity: 1 }],
      totalAmount: ord.totalAmount || 250,
      paymentMethod: ord.paymentMethod || 'UPI',
      status: status,
      orderDate: ord.orderDate || new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      estimatedDeliveryDate: '3 - 4 Business Days',
      courierName: 'Delhivery Express Courier',
      awbNumber: 'AWB-' + Math.floor(10000000 + Math.random() * 90000000),
      trackingHistory: [
        {
          status: 'Placed',
          title: 'Order Placed & Confirmed',
          date: ord.orderDate || 'Today',
          time: 'Just Now',
          completed: isPlaced,
          current: status === 'Placed',
          description: 'Payment verified. Order queued for fresh nitrogen packing in Bihar plant.',
          location: 'MOURYA FOODS Web Portal',
        },
        {
          status: 'Processed',
          title: 'Packed & Quality Verified',
          date: 'Next 12 Hours',
          time: 'Pending',
          completed: isProcessed,
          current: status === 'Processed',
          description: 'Inspected for 6+ grade large foxnuts & nitrogen sealed pouch.',
          location: 'MITHILA CENTRAL PROCESSING PLANT, BIHAR',
        },
        {
          status: 'Shipped',
          title: 'In Transit via Courier',
          date: 'Within 24 Hours',
          time: 'Pending',
          completed: isShipped,
          current: status === 'Shipped',
          description: 'Handed over to express courier. Tracking AWB generated.',
          location: 'DISPATCH HUB, DARBHANGA, BIHAR',
        },
        {
          status: 'Delivered',
          title: 'Doorstep Delivery',
          date: 'Estimated 3-4 Days',
          time: 'By 6:00 PM',
          completed: isDelivered,
          current: status === 'Delivered',
          description: 'Package handed over to customer.',
          location: `DESTINATION: ${ord.city || 'Your Address'}`,
        },
      ],
    };
  };

  // Handle Search Submission
  const handleSearch = (e?: React.FormEvent, customId?: string) => {
    if (e) e.preventDefault();
    const query = (customId || searchId).trim().toUpperCase();

    if (!query) return;

    if (ordersDatabase[query]) {
      setActiveOrder(ordersDatabase[query]);
      setSearchId(query);
      setErrorMessage(null);
    } else {
      // Auto generate a dynamic order if query follows pattern MF-XXXXXX
      if (query.startsWith('MF-') || query.length >= 5) {
        const generated = buildTrackedOrderFromDetails({
          orderId: query,
          customerName: 'Valued Customer',
          email: 'customer@mouryafoods.com',
          phone: '+91 9137738436',
          address: 'Delivery Address',
          city: 'Mumbai',
          pincode: '400071',
          items: [{ product: PRODUCTS[0], quantity: 2 }],
          totalAmount: 398,
          paymentMethod: 'UPI',
          status: 'Shipped',
          orderDate: 'Aug 10, 2026',
        });

        setOrdersDatabase((prev) => ({ ...prev, [query]: generated }));
        setActiveOrder(generated);
        setSearchId(query);
        setErrorMessage(null);
      } else {
        setErrorMessage(`Order ID "${query}" not found. Please try sample IDs like MF-849201, MF-102938, or MF-993812.`);
      }
    }
  };

  // Dynamic State Manager Controls (Toggle Order Status)
  const handleUpdateOrderStatus = (newStatus: OrderStatus) => {
    if (!activeOrder) return;

    const updatedOrder: TrackedOrder = {
      ...activeOrder,
      status: newStatus,
      trackingHistory: activeOrder.trackingHistory.map((step) => {
        const statuses: OrderStatus[] = ['Placed', 'Processed', 'Shipped', 'Delivered'];
        const activeIdx = statuses.indexOf(newStatus);
        const stepIdx = statuses.indexOf(step.status);

        return {
          ...step,
          completed: stepIdx <= activeIdx,
          current: step.status === newStatus,
        };
      }),
    };

    setActiveOrder(updatedOrder);
    setOrdersDatabase((prev) => ({
      ...prev,
      [updatedOrder.orderId]: updatedOrder,
    }));
  };

  const statusSteps: { key: OrderStatus; label: string; desc: string }[] = [
    { key: 'Placed', label: '1. Placed', desc: 'Order received & confirmed' },
    { key: 'Processed', label: '2. Processed', desc: 'Quality checked & packed' },
    { key: 'Shipped', label: '3. Shipped', desc: 'In transit with courier' },
    { key: 'Delivered', label: '4. Delivered', desc: 'Safely delivered' },
  ];

  return (
    <section className="py-12 bg-[#07241b] text-[#fcf8f2] min-h-[85vh] font-sans" id="order-tracking-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1a4d3e] border border-[#d4af37]/40 text-[#d4af37] text-xs font-bold uppercase tracking-wider shadow">
            <Truck className="w-4 h-4 text-[#d4af37]" />
            Live Shipment Tracker
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Track Your Makhana Package
          </h1>
          <p className="text-sm text-[#e2d5b6] leading-relaxed">
            Enter your <strong>MOURYA FOODS Order ID</strong> (e.g. <span className="font-mono text-[#d4af37]">MF-849201</span>) to check live status, courier AWB tracking, and estimated delivery dates.
          </p>
        </div>

        {/* Search Bar & Sample ID Pills */}
        <div className="max-w-2xl mx-auto space-y-4">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Enter Order ID (e.g. MF-849201)"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                className="w-full bg-[#0c382b] border-2 border-[#2d5848] focus:border-[#d4af37] text-white placeholder-gray-400 text-sm rounded-2xl px-4 py-3.5 pl-11 focus:outline-none transition-all shadow-inner font-mono font-bold uppercase"
              />
              <Package className="w-5 h-5 text-[#d4af37] absolute left-3.5 top-4" />
            </div>
            <button
              type="submit"
              className="bg-[#d4af37] hover:bg-[#e2bd44] text-[#0c382b] px-6 py-3.5 rounded-2xl font-extrabold text-sm shadow-xl flex items-center gap-2 transition-all shrink-0"
              id="track-order-submit-btn"
            >
              <Search className="w-4 h-4 fill-[#0c382b]" />
              <span>Track Order</span>
            </button>
          </form>

          {/* Quick Demo Sample Order Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="text-gray-400 text-[11px] font-medium">Try Sample Orders:</span>
            {[
              { id: 'MF-849201', label: 'MF-849201 (Shipped)' },
              { id: 'MF-102938', label: 'MF-102938 (Delivered)' },
              { id: 'MF-993812', label: 'MF-993812 (Processed)' },
            ].map((sample) => (
              <button
                key={sample.id}
                type="button"
                onClick={() => handleSearch(undefined, sample.id)}
                className={`px-3 py-1 rounded-full border text-[11px] font-mono font-bold transition-all ${
                  searchId.toUpperCase() === sample.id
                    ? 'bg-[#d4af37] text-[#0c382b] border-[#d4af37]'
                    : 'bg-[#0c382b] text-[#d4af37] border-[#2d5848] hover:border-[#d4af37]'
                }`}
              >
                {sample.label}
              </button>
            ))}
          </div>

          {/* User's Recently Placed Orders in Session */}
          {recentOrderIds.length > 0 && (
            <div className="bg-[#0c382b] p-3 rounded-2xl border border-[#2d5848] flex items-center justify-between text-xs">
              <span className="text-gray-300 font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                Your Recent Orders:
              </span>
              <div className="flex gap-2">
                {recentOrderIds.slice(0, 3).map((id) => (
                  <button
                    key={id}
                    onClick={() => handleSearch(undefined, id)}
                    className="px-2.5 py-0.5 bg-[#124233] text-[#d4af37] rounded-lg border border-[#d4af37]/40 font-mono font-bold text-[11px] hover:bg-[#1a4d3e]"
                  >
                    {id}
                  </button>
                ))}
              </div>
            </div>
          )}

          {errorMessage && (
            <div className="p-3 bg-red-950/60 border border-red-500/50 rounded-xl text-red-200 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}
        </div>

        {/* ACTIVE ORDER DISPLAY CARD */}
        {activeOrder && (
          <div className="bg-[#0c382b] border-2 border-[#d4af37] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-8 animate-fadeIn">
            
            {/* Top Bar: Order ID, Status Badge & Quick State Management Control */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#1b4e3e] pb-6">
              
              <div className="space-y-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
                    Order ID: <span className="font-mono text-[#d4af37]">{activeOrder.orderId}</span>
                  </h2>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold font-mono uppercase tracking-wider border ${
                      activeOrder.status === 'Delivered'
                        ? 'bg-emerald-950 text-emerald-300 border-emerald-500'
                        : activeOrder.status === 'Shipped'
                        ? 'bg-amber-950 text-amber-300 border-amber-500 animate-pulse'
                        : activeOrder.status === 'Processed'
                        ? 'bg-blue-950 text-blue-300 border-blue-500'
                        : 'bg-purple-950 text-purple-300 border-purple-500'
                    }`}
                  >
                    ● {activeOrder.status}
                  </span>
                </div>
                <p className="text-xs text-gray-300">
                  Placed on <strong className="text-white">{activeOrder.orderDate}</strong> • Total Paid: <strong className="text-[#d4af37]">₹{activeOrder.totalAmount}</strong> ({activeOrder.paymentMethod})
                </p>
              </div>

              {/* State Management Tracker Switcher (interactive control) */}
              <div className="bg-[#124233] p-2.5 rounded-2xl border border-[#2d5848] space-y-1">
                <div className="flex items-center justify-between text-[11px] text-gray-300 font-semibold px-1">
                  <span className="flex items-center gap-1 text-[#d4af37]">
                    <RefreshCw className="w-3 h-3 text-[#d4af37]" />
                    Simulate Status:
                  </span>
                  <span className="text-[10px] text-gray-400">(Interactive State Control)</span>
                </div>
                <div className="flex gap-1 overflow-x-auto no-scrollbar">
                  {statusSteps.map((s) => (
                    <button
                      key={s.key}
                      onClick={() => handleUpdateOrderStatus(s.key)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all shrink-0 border ${
                        activeOrder.status === s.key
                          ? 'bg-[#d4af37] text-[#0c382b] border-[#d4af37]'
                          : 'bg-[#0c382b] text-gray-300 border-[#2d5848] hover:bg-[#1a4d3e]'
                      }`}
                    >
                      {s.key}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* STATUS TIMELINE PROGRESS BAR */}
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-lg text-[#d4af37] flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#d4af37]" />
                <span>Shipment Timeline Status</span>
              </h3>

              {/* Progress Line */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                {activeOrder.trackingHistory.map((step, idx) => {
                  return (
                    <div
                      key={idx}
                      className={`relative p-4 rounded-2xl border transition-all ${
                        step.current
                          ? 'bg-[#1a4d3e] border-[#d4af37] shadow-lg ring-1 ring-[#d4af37]/50'
                          : step.completed
                          ? 'bg-[#124233] border-[#2d5848]'
                          : 'bg-[#07241b]/60 border-[#1c4236] opacity-60'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold text-xs ${
                            step.completed
                              ? 'bg-[#d4af37] text-[#0c382b]'
                              : 'bg-[#124233] text-gray-400 border border-[#2d5848]'
                          }`}
                        >
                          {step.completed ? <CheckCircle2 className="w-5 h-5" /> : idx + 1}
                        </div>

                        {step.current && (
                          <span className="px-2 py-0.5 rounded-full bg-[#d4af37] text-[#0c382b] font-extrabold text-[9px] uppercase tracking-wider animate-pulse">
                            Current Status
                          </span>
                        )}
                      </div>

                      <h4 className="font-serif font-bold text-sm text-white">{step.title}</h4>
                      <p className="text-[11px] text-[#d4af37] font-semibold mt-0.5">{step.date} • {step.time}</p>
                      
                      <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                        {step.description}
                      </p>

                      {step.location && (
                        <p className="text-[10px] text-gray-400 mt-2 flex items-center gap-1 border-t border-[#1b4e3e] pt-1.5 font-mono">
                          <MapPin className="w-3 h-3 text-[#d4af37]" />
                          <span className="truncate">{step.location}</span>
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* TWO COLUMN DETAILS: COURIER & DESTINATION / ORDER ITEMS */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
              
              {/* Courier & Dispatch Box */}
              <div className="bg-[#124233] p-5 rounded-2xl border border-[#2d5848] space-y-4">
                <h4 className="font-serif font-bold text-sm text-[#d4af37] flex items-center gap-2 border-b border-[#1b4e3e] pb-2">
                  <Truck className="w-4 h-4" />
                  <span>Courier & Delivery Info</span>
                </h4>

                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-gray-400 block text-[10px]">Courier Partner:</span>
                    <strong className="text-white text-sm">{activeOrder.courierName || 'Delhivery Express'}</strong>
                  </div>

                  <div>
                    <span className="text-gray-400 block text-[10px]">AWB Tracking Number:</span>
                    <strong className="text-[#d4af37] font-mono text-sm">{activeOrder.awbNumber || 'BD-892014829IN'}</strong>
                  </div>

                  <div>
                    <span className="text-gray-400 block text-[10px]">Estimated Delivery Date:</span>
                    <strong className="text-emerald-400 font-bold text-sm flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {activeOrder.estimatedDeliveryDate}
                    </strong>
                  </div>

                  <div className="pt-2 border-t border-[#1b4e3e]">
                    <span className="text-gray-400 block text-[10px] mb-1">Destination Address:</span>
                    <p className="text-white font-medium leading-tight">
                      <strong>{activeOrder.customerName}</strong><br />
                      {activeOrder.address}, {activeOrder.city} - {activeOrder.pincode}<br />
                      📞 {activeOrder.phone}
                    </p>
                  </div>

                  <a
                    href={`https://wa.me/919137738436?text=${encodeURIComponent(
                      `Hello MOURYA FOODS, please give me live tracking updates for my Order ID: ${activeOrder.orderId}`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 bg-[#1a4d3e] hover:bg-[#235e4d] text-[#d4af37] font-bold text-xs rounded-xl border border-[#d4af37]/40 flex items-center justify-center gap-2 transition-all mt-3"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Inquire on WhatsApp (+91 9137738436)</span>
                  </a>
                </div>
              </div>

              {/* Items Summary Table */}
              <div className="lg:col-span-2 bg-[#124233] p-5 rounded-2xl border border-[#2d5848] space-y-4">
                <h4 className="font-serif font-bold text-sm text-[#d4af37] flex items-center gap-2 border-b border-[#1b4e3e] pb-2">
                  <ShoppingBag className="w-4 h-4" />
                  <span>Items In Package ({activeOrder.items.length})</span>
                </h4>

                <div className="space-y-3">
                  {activeOrder.items.map((item, i) => (
                    <div key={i} className="bg-[#07241b] p-3 rounded-xl border border-[#2d5848] flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={item.product?.image}
                          alt={item.product?.name}
                          className="w-14 h-14 object-cover rounded-lg border border-[#2d5848] shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <h5 className="font-bold text-white text-xs">{item.product?.name}</h5>
                          <p className="text-[11px] text-[#d4af37] font-semibold">{item.product?.variant} • ₹{item.product?.price} each</p>
                          <span className="text-[10px] text-gray-400">Slow Roasted • Nitrogen Sealed</span>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-xs text-gray-300 block font-semibold">Qty: {item?.quantity}</span>
                        <strong className="text-sm text-white font-mono">₹{item.product?.price * item?.quantity}</strong>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Dispatch Origin Guarantee Note */}
                <div className="p-3 bg-[#07241b] rounded-xl border border-[#1b4e3e] flex items-center gap-3 text-xs text-gray-300">
                  <ShieldCheck className="w-5 h-5 text-[#d4af37] shrink-0" />
                  <p className="leading-tight">
                    <strong className="text-white">Authentic Bihar Wetland Sourcing:</strong> All products in this package are directly packed in nitrogen-flushed, moisture-barrier pouches at our certified Darbhanga facility.
                  </p>
                </div>

              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
