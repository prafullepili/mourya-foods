export interface Product {
  id: string;
  name: string;
  variant: string;
  sku: string;
  gtinBarcode: string;
  price: number;
  mrp: number;
  weight: string;
  weightInGrams: number;
  category: 'raw' | 'roasted' | 'flavored' | 'gift';
  flavor?: string;
  image: string;
  description: string;
  inStock: boolean;
  rating: number;
  reviewsCount: number;
  isBestseller?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
  verified: boolean;
  type: 'retail' | 'wholesale' | 'export';
}

export interface BulkQuoteRequest {
  name: string;
  businessName: string;
  mobile: string;
  email: string;
  city: string;
  businessType: 'Retailer' | 'Supermarket' | 'Distributor' | 'Wholesaler' | 'Corporate Gifting' | 'Hotel/Restaurant' | 'Exporter' | 'Other';
  packSize: string;
  requiredQuantity: string;
  message: string;
}

export interface NutritionFact {
  nutrient: string;
  valuePer100g: string;
  dailyValuePercentage?: string;
  highlight?: boolean;
}

export type OrderStatus = 'Placed' | 'Processed' | 'Shipped' | 'Delivered';

export interface TrackingStep {
  status: OrderStatus;
  title: string;
  date: string;
  time: string;
  completed: boolean;
  current: boolean;
  description: string;
  location?: string;
}

export interface TrackedOrder {
  orderId: string;
  customerName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  pincode: string;
  items: CartItem[];
  totalAmount: number;
  paymentMethod: string;
  status: OrderStatus;
  orderDate: string;
  estimatedDeliveryDate: string;
  courierName?: string;
  awbNumber?: string;
  trackingHistory: TrackingStep[];
}

export type ThemeId = 
  | 'emerald-gold' 
  | 'suvria-organic' 
  | 'organic-light' 
  | 'golden-harvest' 
  | 'midnight-obsidian' 
  | 'ruby-lotus'
  | 'copper-terracotta'
  | 'teal-peacock'
  | 'sunflower-gold'
  | 'saffron-sunset'
  | 'plum-violet'
  | 'pure-minimal-white';

export interface ThemeOption {
  id: ThemeId;
  name: string;
  subtitle: string;
  bgPreview: string;
  cardPreview: string;
  accentPreview: string;
  textPreview: string;
  isDark: boolean;
  isReady: boolean;
}

export interface OrderDetails {
  orderId: string;
  customerName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  pincode: string;
  items: CartItem[];
  totalAmount: number;
  paymentMethod: string;
  status: OrderStatus;
  orderDate: string;
}
