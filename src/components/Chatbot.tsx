import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  Send, 
  X, 
  Sparkles, 
  User, 
  MessageSquare, 
  ShoppingBag, 
  Zap, 
  Phone, 
  CheckCircle2,
  RefreshCw,
  HelpCircle,
  ChevronRight
} from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  recommendedProducts?: Product[];
  actionType?: 'whatsapp' | 'wholesale' | 'checkout';
}

interface ChatbotProps {
  onInstantBuy: (product: Product) => void;
  setActiveTab: (tab: string) => void;
}

export const Chatbot: React.FC<ChatbotProps> = ({ onInstantBuy, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialMessages: Message[] = [
    {
      id: 'msg-1',
      sender: 'bot',
      text: 'Namaste! 🙏 Welcome to MOURYA FOODS. I am your AI Makhana Assistant. How can I help you today?',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ];

  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const quickQuestions = [
    { label: '🌿 Origin & GI Tag', query: 'Where is your makhana sourced from?' },
    { label: '💪 Health & Calories', query: 'What are the health benefits and calories of Makhana?' },
    { label: '🔥 Flavors Available', query: 'What makhana flavors do you sell?' },
    { label: '📦 Bulk / Wholesale', query: 'I want to place a wholesale order' },
    { label: '🚚 Shipping & Delivery', query: 'How long does delivery take?' },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg: Message = {
      id: 'user-' + Date.now(),
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      generateResponse(query);
      setIsTyping(false);
    }, 800);
  };

  const generateResponse = (q: string) => {
    const lower = q.toLowerCase();
    let botReply = '';
    let recs: Product[] | undefined = undefined;

    if (lower.includes('origin') || lower.includes('sourced') || lower.includes('bihar') || lower.includes('mithila') || lower.includes('gi tag')) {
      botReply = 'All MOURYA FOODS Makhana (Foxnuts) is 100% authentically sourced directly from certified lotus wetland farms in Mithila, Bihar – the world capital of premium GI-Tagged Makhana. We use traditional popping methods and nitrogen-sealed moisture barrier pouches for peak freshness!';
    } else if (lower.includes('health') || lower.includes('benefit') || lower.includes('calorie') || lower.includes('protein') || lower.includes('weight loss') || lower.includes('diabetes')) {
      botReply = 'Makhana is a superfood! Per 100g serving: \n• 9.7g Plant Protein\n• 14.5g Dietary Fiber\n• Low GI (Great for Diabetics)\n• 0% Trans Fat & Gluten-Free\nIt aids weight loss, boosts heart health, and supplies natural magnesium & potassium!';
    } else if (lower.includes('flavor') || lower.includes('flavours') || lower.includes('peri peri') || lower.includes('pudina') || lower.includes('spicy') || lower.includes('salt')) {
      botReply = 'We offer slow-roasted, non-fried flavored Makhana crafted with pure ingredients: \n1. Pink Himalayan Salt (Cow Ghee roasted)\n2. Zesty African Peri Peri Spice\n3. Cool Pudina & Mint Punch\n4. Chatpata Indian Masala\n5. Royal Assorted Gift Boxes!';
      recs = PRODUCTS.filter(p => p.category === 'flavored' || p.category === 'gift').slice(0, 3);
    } else if (lower.includes('wholesale') || lower.includes('bulk') || lower.includes('distributor') || lower.includes('supermarket') || lower.includes('export') || lower.includes('kg')) {
      botReply = 'We offer direct factory wholesale rates with MOQs from 50kg to multi-ton export shipments. We supply pan-India supermarkets and global importers with custom branding and phytosanitary certificates. Call our B2B desk directly at +91 9137738436 or visit our Wholesale section!';
      recs = PRODUCTS.filter(p => p.sku === 'MF-1000' || p.sku === 'MF-500');
    } else if (lower.includes('shipping') || lower.includes('delivery') || lower.includes('day') || lower.includes('track') || lower.includes('cod')) {
      botReply = '🚚 We offer FREE Pan-India Shipping on orders above ₹499! Standard dispatch takes 24 hours. Metros receive orders in 2-3 days, and tier-2/3 towns in 3-5 days. Cash on Delivery (COD) & UPI options available!';
    } else if (lower.includes('bestseller') || lower.includes('recommend') || lower.includes('buy') || lower.includes('shop') || lower.includes('price')) {
      botReply = 'Here are our top customer favorite MOURYA FOODS Makhana packs available for instant home delivery:';
      recs = PRODUCTS.filter(p => p.isBestseller).slice(0, 3);
    } else if (lower.includes('contact') || lower.includes('phone') || lower.includes('email') || lower.includes('whatsapp') || lower.includes('mumbai') || lower.includes('office')) {
      botReply = '📍 MOURYA FOODS Head Office:\n309 SRA A 3 CTS No. 2, Link Road, Chembur, Mumbai - 400071\n📞 WhatsApp / Call: +91 9137738436\n✉️ Email: mouryafoods18@gmail.com\n🌐 Portal: www.mouryafoods.com';
    } else {
      botReply = `Thank you for asking! MOURYA FOODS provides 100% natural, crisp Bihar Makhana in raw and gourmet roasted variants. How else can I assist you with your order?`;
      recs = PRODUCTS.slice(0, 2);
    }

    const botMsg: Message = {
      id: 'bot-' + Date.now(),
      sender: 'bot',
      text: botReply,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      recommendedProducts: recs,
    };

    setMessages((prev) => [...prev, botMsg]);
  };

  return (
    <>
      {/* Floating Chat Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 z-40 bg-[#0c382b] text-[#d4af37] border-2 border-[#d4af37] p-3.5 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center gap-2 group shadow-[#0c382b]/50"
          id="chatbot-open-btn"
          title="MOURYA FOODS Assistant"
        >
          <div className="relative">
            <Bot className="w-6 h-6 text-[#d4af37]" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#0c382b] animate-ping" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#0c382b]" />
          </div>
          <span className="text-xs font-bold tracking-wide pr-1 hidden sm:inline">
            Ask Mourya AI
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 w-[calc(100vw-2rem)] sm:w-96 h-[540px] max-h-[85vh] bg-[#0c382b] border-2 border-[#d4af37] rounded-3xl shadow-2xl flex flex-col overflow-hidden font-sans text-[#fcf8f2] animate-slideUp">
          
          {/* Header */}
          <div className="p-4 bg-[#07241b] border-b border-[#1b4e3e] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1a4d3e] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shadow">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-serif font-bold text-sm text-white">Mourya AI Assistant</h3>
                  <span className="w-2 h-2 bg-emerald-400 rounded-full" title="Online" />
                </div>
                <p className="text-[11px] text-[#d4af37] font-semibold">MOURYA FOODS Support</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full bg-[#124233] text-gray-300 hover:text-white border border-[#2d5848]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-full bg-[#1a4d3e] text-[#d4af37] flex items-center justify-center shrink-0 border border-[#d4af37]/30 mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div className={`max-w-[80%] space-y-2 ${m.sender === 'user' ? 'text-right' : 'text-left'}`}>
                  
                  <div
                    className={`p-3 rounded-2xl leading-relaxed whitespace-pre-line shadow ${
                      m.sender === 'user'
                        ? 'bg-[#d4af37] text-[#0c382b] font-semibold rounded-tr-none'
                        : 'bg-[#124233] text-gray-100 border border-[#2d5848] rounded-tl-none'
                    }`}
                  >
                    {m.text}
                  </div>

                  {/* Product Recommendation Cards inside Chat */}
                  {m.recommendedProducts && m.recommendedProducts.length > 0 && (
                    <div className="space-y-2 pt-1 text-left">
                      <p className="text-[10px] font-bold text-[#d4af37] uppercase tracking-wider">
                        Recommended Items:
                      </p>
                      {m.recommendedProducts.map((prod) => (
                        <div
                          key={prod.id}
                          className="bg-[#07241b] p-2.5 rounded-xl border border-[#2d5848] flex items-center gap-2.5"
                        >
                          <img
                            src={prod.image}
                            alt={prod.name}
                            className="w-12 h-12 object-cover rounded-lg border border-[#2d5848] shrink-0"
                            referrerPolicy="no-referrer"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-white text-[11px] truncate">{prod.name}</h4>
                            <p className="text-[10px] text-[#d4af37] font-semibold">{prod.variant} • ₹{prod.price}</p>
                          </div>
                          <button
                            onClick={() => {
                              setIsOpen(false);
                              onInstantBuy(prod);
                            }}
                            className="px-2.5 py-1 bg-[#d4af37] text-[#0c382b] font-extrabold text-[10px] rounded-lg shadow hover:bg-[#e2bd44] shrink-0 flex items-center gap-1"
                          >
                            <Zap className="w-3 h-3 fill-[#0c382b]" />
                            <span>Buy</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  <span className="text-[9px] text-gray-400 px-1 block">
                    {m.time}
                  </span>
                </div>

                {m.sender === 'user' && (
                  <div className="w-7 h-7 rounded-full bg-[#d4af37] text-[#0c382b] flex items-center justify-center shrink-0 font-bold text-[10px] mt-1">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 items-center text-xs text-[#d4af37]">
                <Bot className="w-4 h-4 animate-spin" />
                <span className="italic">Mourya AI is typing...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Action Pills */}
          <div className="px-3 py-2 bg-[#07241b] border-t border-[#1b4e3e] flex gap-1.5 overflow-x-auto no-scrollbar">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q.query)}
                className="px-2.5 py-1 bg-[#124233] hover:bg-[#1a4d3e] text-gray-200 border border-[#2d5848] rounded-full text-[10px] font-semibold whitespace-nowrap shrink-0 transition-colors"
              >
                {q.label}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-3 bg-[#07241b] border-t border-[#1b4e3e] flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask anything about Makhana..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 bg-[#124233] border border-[#2d5848] text-white text-xs rounded-xl px-3 py-2.5 focus:outline-none focus:border-[#d4af37]"
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim()}
              className="p-2.5 bg-[#d4af37] text-[#0c382b] rounded-xl hover:bg-[#e2bd44] disabled:opacity-50 transition-all shadow"
              id="chatbot-send-btn"
            >
              <Send className="w-4 h-4 fill-[#0c382b]" />
            </button>
          </div>

        </div>
      )}
    </>
  );
};
