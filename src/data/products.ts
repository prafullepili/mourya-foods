import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'mf-raw-100',
    name: 'MOURYA FOODS Premium Bihar Makhana',
    variant: '100g Standup Zip Pouch',
    sku: 'MF-100',
    gtinBarcode: '8908027734008',
    price: 135,
    mrp: 160,
    weight: '100g',
    weightInGrams: 100,
    category: 'raw',
    image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&q=80&w=800',
    description: '100% Pure, unseasoned Grade 6+ jumbo Phool Makhana directly sourced from Mithila lotus ponds, Bihar. Nitrogen-sealed in moisture-barrier pouch for crisp crunch.',
    inStock: true,
    rating: 4.9,
    reviewsCount: 128,
    isBestseller: true,
  },
  {
    id: 'mf-raw-200',
    name: 'MOURYA FOODS Premium Bihar Makhana',
    variant: '200g Eco Snack Pack',
    sku: 'MF-200',
    gtinBarcode: '8908027734015',
    price: 260,
    mrp: 310,
    weight: '200g',
    weightInGrams: 200,
    category: 'raw',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&q=80&w=800',
    description: 'Crisp, jumbo-sized white lotus seeds packed in air-tight nitrogen-flushed pouch for maximum crunch and natural goodness.',
    inStock: true,
    rating: 4.8,
    reviewsCount: 94,
  },
  {
    id: 'mf-raw-250',
    name: 'MOURYA FOODS Premium Bihar Makhana',
    variant: '250g Family Heritage Pack',
    sku: 'MF-250',
    gtinBarcode: '8908027734022',
    price: 320,
    mrp: 380,
    weight: '250g',
    weightInGrams: 250,
    category: 'raw',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800',
    description: 'Our #1 most popular family size pouch. Selected 5+ star grade large popped makhana processed under traditional artisan heat.',
    inStock: true,
    rating: 5.0,
    reviewsCount: 215,
    isBestseller: true,
  },
  // {
  //   id: 'mf-flav-peri',
  //   name: 'MOURYA FOODS Roasted Peri Peri Makhana',
  //   variant: '100g Seasoned Gourmet Can',
  //   sku: 'MF-FL-PERI',
  //   gtinBarcode: '8908027734053',
  //   price: 160,
  //   mrp: 190,
  //   weight: '100g',
  //   weightInGrams: 100,
  //   category: 'flavored',
  //   flavor: 'Zesty African Peri Peri Spice',
  //   image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800',
  //   description: 'Slow-roasted in olive oil with zesty African Peri Peri chili spice blend. Spicy, tangy, and 100% guilt-free crunch.',
  //   inStock: true,
  //   rating: 4.7,
  //   reviewsCount: 88,
  // },
  // {
  //   id: 'mf-flav-pudina',
  //   name: 'MOURYA FOODS Roasted Pudina Punch Makhana',
  //   variant: '100g Seasoned Gourmet Pack',
  //   sku: 'MF-FL-PUD',
  //   gtinBarcode: '8908027734060',
  //   price: 160,
  //   mrp: 190,
  //   weight: '100g',
  //   weightInGrams: 100,
  //   category: 'flavored',
  //   flavor: 'Cool Mint & Pudina Herbs',
  //   image: 'https://images.unsplash.com/photo-1514944288352-fffac99f0bdf?auto=format&fit=crop&q=80&w=800',
  //   description: 'Refreshing mint flavor blended with tangy dry mango powder and slow-roasted foxnuts. Perfect tea-time healthy snack.',
  //   inStock: true,
  //   rating: 4.8,
  //   reviewsCount: 76,
  // },
  // {
  //   id: 'mf-flav-salt',
  //   name: 'MOURYA FOODS Himalayan Pink Salt Roasted Makhana',
  //   variant: '100g Ghee Roasted Pack',
  //   sku: 'MF-FL-SALT',
  //   gtinBarcode: '8908027734077',
  //   price: 150,
  //   mrp: 180,
  //   weight: '100g',
  //   weightInGrams: 100,
  //   category: 'flavored',
  //   flavor: 'Pink Himalayan Salt & Ghee',
  //   image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=800',
  //   description: 'Lightly roasted in pure cow ghee and dusted with organic Pink Himalayan rock salt. Mild, buttery, and heart-healthy.',
  //   inStock: true,
  //   rating: 4.9,
  //   reviewsCount: 142,
  //   isBestseller: true,
  // },
  // {
  //   id: 'mf-flav-masala',
  //   name: 'MOURYA FOODS Chatpata Masala Makhana',
  //   variant: '100g Seasoned Gourmet Pack',
  //   sku: 'MF-FL-MAS',
  //   gtinBarcode: '8908027734084',
  //   price: 160,
  //   mrp: 190,
  //   weight: '100g',
  //   weightInGrams: 100,
  //   category: 'flavored',
  //   flavor: 'Authentic Indian Chatpata Masala',
  //   image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800',
  //   description: 'Classic Indian spice blend roasted to perfection. A spicy and sour punch loved by kids and adults alike.',
  //   inStock: true,
  //   rating: 4.8,
  //   reviewsCount: 95,
  // },
];

export const NUTRITION_FACTS = [
  {
    label: 'Macronutrients',
    values: [
      { nutrient: 'Calories', valuePer100g: '347 kcal', highlight: true },
      { nutrient: 'Protein', valuePer100g: '9.7 g', highlight: true },
      { nutrient: 'Carbohydrates', valuePer100g: '76.9 g', highlight: true },
      { nutrient: 'Dietary Fiber', valuePer100g: '14.5 g', highlight: true },
      { nutrient: 'Total Fat', valuePer100g: '0.5 g (Very Low)', highlight: true },
    ]
  },
  {
    label: 'Minerals',
    values: [
      { nutrient: 'Calcium', valuePer100g: '60 mg', highlight: true },
      { nutrient: 'Iron', valuePer100g: '1.4 mg', highlight: true },
      { nutrient: 'Magnesium', valuePer100g: '135 mg', highlight: true },
      { nutrient: 'Potassium', valuePer100g: '358 mg', highlight: true },
    ]
  }
];

export const WHY_CHOOSE_US = [
  {
    icon: 'Sparkles',
    title: 'Premium Bihar Sourced',
    desc: 'Directly hand-harvested from certified lotus ponds in Mithila, Bihar – the world capital of quality Makhana.'
  },
  {
    icon: 'Dumbbell',
    title: 'Rich Source of Protein',
    desc: 'Packed with 9.7g plant protein per 100g, promoting muscle recovery and healthy weight management.'
  },
  {
    icon: 'Leaf',
    title: '100% Vegetarian & Natural',
    desc: 'Pure, unprocessed, non-GMO lotus seeds without any artificial colors or added chemicals.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Zero Preservatives',
    desc: 'Preserved naturally using state-of-the-art nitrogen sealing and triple-layer food grade barrier pouch.'
  },
  {
    icon: 'Flame',
    title: 'Roasted, Not Fried',
    desc: 'Our flavored makhana is slow dry-roasted to retain maximum antioxidants and zero trans fat.'
  },
  {
    icon: 'PackageCheck',
    title: 'Hygienically Packed',
    desc: 'Processed in ISO & FSSAI certified cleanroom facilities with automated untouched packaging.'
  }
];
