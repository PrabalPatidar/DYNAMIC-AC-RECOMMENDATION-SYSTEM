// ============================================================
// AC Product Data Store
// This file is the single source of truth for all product data.
// Update prices, affiliate links, and product info here.
// In Phase 2, this can be replaced with a CMS/API fetch.
// ============================================================

export interface ACProduct {
  id: string;
  product_name: string;
  brand: string;
  model_number: string;
  tonnage: number;
  type: string;
  star_rating: number;
  price: number;
  mrp: number;
  affiliate_link: string;
  image: string;
  rating: number;
  review_count: number;
  features: string[];
  badge?: string;
  warranty_product: string;
  warranty_compressor: string;
  annual_savings?: number;
  recommended_order: number;
  status: 'active' | 'inactive';
}

export type BadgeType =
  | 'Best Overall'
  | 'Best Value'
  | 'Premium Pick'
  | '#1 Recommended'
  | 'Great Performance';

export const BADGE_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  'Best Overall': { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-400' },
  'Best Value': { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-400' },
  'Premium Pick': { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-400' },
  '#1 Recommended': { bg: 'bg-emerald-100', text: 'text-emerald-700', border: 'border-emerald-400' },
  'Great Performance': { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-400' },
};

// Last updated: May 2026
// Update monthly — change prices, affiliate links, and status as needed
export const products: ACProduct[] = [
  // ======================= 1.0 TON =======================
  {
    id: '1t-lg-01',
    product_name: 'LG 1.0 Ton 3 Star DUAL Inverter Split AC',
    brand: 'LG',
    model_number: 'TS-Q10ENXE',
    tonnage: 1.0,
    type: 'inverter',
    star_rating: 3,
    price: 32990,
    mrp: 46990,
    affiliate_link: 'https://www.amazon.in/dp/B0EXAMPLE1?tag=ahmedabadac-21',
    image: '/images/ac/real-ac.png',
    rating: 4.5,
    review_count: 1256,
    features: [
      'Dual Inverter Compressor',
      'Copper Condenser',
      'AI Convertible 4-in-1 Cooling',
      'Low Gas Detection',
    ],
    badge: 'Best Overall',
    warranty_product: '1 Year Product Warranty',
    warranty_compressor: '10 Year Compressor Warranty',
    annual_savings: 2300,
    recommended_order: 1,
    status: 'active',
  },
  {
    id: '1t-daikin-02',
    product_name: 'Daikin 1.0 Ton 3 Star Inverter Split AC',
    brand: 'Daikin',
    model_number: 'MTKL35U',
    tonnage: 1.0,
    type: 'inverter',
    star_rating: 3,
    price: 34990,
    mrp: 50500,
    affiliate_link: 'https://www.amazon.in/dp/B0EXAMPLE2?tag=ahmedabadac-21',
    image: '/images/ac/real-ac.png',
    rating: 4.3,
    review_count: 982,
    features: [
      'Power Chill Operation',
      'PM 2.5 Filter',
      'Coanda Airflow',
      'Stabilizer Inside',
    ],
    badge: 'Best Value',
    warranty_product: '1 Year Product Warranty',
    warranty_compressor: '5 Year Compressor Warranty',
    annual_savings: 2500,
    recommended_order: 2,
    status: 'active',
  },
  {
    id: '1t-panasonic-03',
    product_name: 'Panasonic 1.0 Ton 5 Star Inverter Split AC',
    brand: 'Panasonic',
    model_number: 'CS/CU-NU9XKYF',
    tonnage: 1.0,
    type: 'inverter',
    star_rating: 5,
    price: 38990,
    mrp: 58700,
    affiliate_link: 'https://www.amazon.in/dp/B0EXAMPLE3?tag=ahmedabadac-21',
    image: '/images/ac/real-ac.png',
    rating: 4.6,
    review_count: 753,
    features: [
      '7-in-1 Convertible Cooling',
      'Aerowings for Better Airflow',
      'PM 0.1 Filter',
      'Smart Wi-Fi Control',
    ],
    badge: 'Premium Pick',
    warranty_product: '1 Year Product Warranty',
    warranty_compressor: '10 Year Compressor Warranty',
    annual_savings: 3200,
    recommended_order: 3,
    status: 'active',
  },
  {
    id: '1t-samsung-04',
    product_name: 'Samsung 1.0 Ton 3 Star Inverter Split AC',
    brand: 'Samsung',
    model_number: 'AR10CYLANWK',
    tonnage: 1.0,
    type: 'inverter',
    star_rating: 3,
    price: 31490,
    mrp: 44900,
    affiliate_link: 'https://www.amazon.in/dp/B0EXAMPLE4?tag=ahmedabadac-21',
    image: '/images/ac/real-ac.png',
    rating: 4.2,
    review_count: 641,
    features: [
      'Digital Inverter Boost',
      'Anti-Bacterial Filter',
      'Copper Condenser',
      'Wind-Free Cooling',
    ],
    warranty_product: '1 Year Product Warranty',
    warranty_compressor: '10 Year Compressor Warranty',
    annual_savings: 2100,
    recommended_order: 4,
    status: 'active',
  },
  {
    id: '1t-voltas-05',
    product_name: 'Voltas 1.0 Ton 3 Star Inverter Split AC',
    brand: 'Voltas',
    model_number: '123V CZTT',
    tonnage: 1.0,
    type: 'inverter',
    star_rating: 3,
    price: 29990,
    mrp: 42500,
    affiliate_link: 'https://www.amazon.in/dp/B0EXAMPLE5?tag=ahmedabadac-21',
    image: '/images/ac/real-ac.png',
    rating: 4.1,
    review_count: 1102,
    features: [
      'Steady Cool Compressor',
      'Multi-Stage Filtration',
      'High Ambient Cooling',
      'Copper Condenser',
    ],
    warranty_product: '1 Year Product Warranty',
    warranty_compressor: '5 Year Compressor Warranty',
    annual_savings: 1800,
    recommended_order: 5,
    status: 'active',
  },

  // ======================= 1.5 TON =======================
  {
    id: '15t-daikin-01',
    product_name: 'Daikin 1.5 Ton 3 Star Inverter Split AC',
    brand: 'Daikin',
    model_number: 'MTKL50U',
    tonnage: 1.5,
    type: 'inverter',
    star_rating: 3,
    price: 44990,
    mrp: 52500,
    affiliate_link: 'https://www.amazon.in/dp/B0EXAMPLE6?tag=ahmedabadac-21',
    image: '/images/ac/real-ac.png',
    rating: 4.6,
    review_count: 1248,
    features: [
      'Power Chill Operation',
      'Low Power Consumption',
      'Copper Condenser',
      'PM 2.5 Filter',
    ],
    badge: '#1 Recommended',
    warranty_product: '1 Year Product Warranty',
    warranty_compressor: '10 Year Compressor Warranty',
    annual_savings: 3100,
    recommended_order: 1,
    status: 'active',
  },
  {
    id: '15t-lg-02',
    product_name: 'LG 1.5 Ton 5 Star Dual Inverter Split AC',
    brand: 'LG',
    model_number: 'TS-Q19YNZE',
    tonnage: 1.5,
    type: 'inverter',
    star_rating: 5,
    price: 41990,
    mrp: 48990,
    affiliate_link: 'https://www.amazon.in/dp/B0EXAMPLE7?tag=ahmedabadac-21',
    image: '/images/ac/real-ac.png',
    rating: 4.5,
    review_count: 987,
    features: [
      'AI Convertible 6-in-1',
      'Dual Inverter Compressor',
      'Copper Condenser',
      'HD Filter',
    ],
    badge: 'Best Value',
    warranty_product: '1 Year Product Warranty',
    warranty_compressor: '10 Year Compressor Warranty',
    annual_savings: 3500,
    recommended_order: 2,
    status: 'active',
  },
  {
    id: '15t-panasonic-03',
    product_name: 'Panasonic 1.5 Ton 3 Star Inverter Split AC',
    brand: 'Panasonic',
    model_number: 'CS/CU-KU18ZKYF',
    tonnage: 1.5,
    type: 'inverter',
    star_rating: 3,
    price: 39990,
    mrp: 46900,
    affiliate_link: 'https://www.amazon.in/dp/B0EXAMPLE8?tag=ahmedabadac-21',
    image: '/images/ac/real-ac.png',
    rating: 4.4,
    review_count: 756,
    features: [
      'True AI Mode',
      'Aerowings for Better Airflow',
      'Copper Condenser',
      'Anti-dust Filter',
    ],
    badge: 'Great Performance',
    warranty_product: '1 Year Product Warranty',
    warranty_compressor: '10 Year Compressor Warranty',
    annual_savings: 2800,
    recommended_order: 3,
    status: 'active',
  },
  {
    id: '15t-samsung-04',
    product_name: 'Samsung 1.5 Ton 5 Star Inverter Split AC',
    brand: 'Samsung',
    model_number: 'AR18CYLANWK',
    tonnage: 1.5,
    type: 'inverter',
    star_rating: 5,
    price: 43490,
    mrp: 56900,
    affiliate_link: 'https://www.amazon.in/dp/B0EXAMPLE9?tag=ahmedabadac-21',
    image: '/images/ac/real-ac.png',
    rating: 4.4,
    review_count: 834,
    features: [
      'Wind-Free Cooling 2.0',
      'AI Auto Comfort',
      'Triple Protector Plus',
      'Copper Condenser',
    ],
    warranty_product: '1 Year Product Warranty',
    warranty_compressor: '10 Year Compressor Warranty',
    annual_savings: 3600,
    recommended_order: 4,
    status: 'active',
  },
  {
    id: '15t-voltas-05',
    product_name: 'Voltas 1.5 Ton 3 Star Inverter Split AC',
    brand: 'Voltas',
    model_number: '183V CZTT',
    tonnage: 1.5,
    type: 'inverter',
    star_rating: 3,
    price: 36990,
    mrp: 47500,
    affiliate_link: 'https://www.amazon.in/dp/B0EXAMPLE10?tag=ahmedabadac-21',
    image: '/images/ac/real-ac.png',
    rating: 4.2,
    review_count: 1341,
    features: [
      'Steady Cool Compressor',
      'Adjustable Cooling',
      'Anti-Dust Filter',
      'High Ambient Cooling',
    ],
    warranty_product: '1 Year Product Warranty',
    warranty_compressor: '5 Year Compressor Warranty',
    annual_savings: 2500,
    recommended_order: 5,
    status: 'active',
  },

  // ======================= 2.0 TON =======================
  {
    id: '2t-lg-01',
    product_name: 'LG 2.0 Ton 3 Star Dual Inverter Split AC',
    brand: 'LG',
    model_number: 'TS-Q24ENXE',
    tonnage: 2.0,
    type: 'inverter',
    star_rating: 3,
    price: 52990,
    mrp: 68900,
    affiliate_link: 'https://www.amazon.in/dp/B0EXAMPLE11?tag=ahmedabadac-21',
    image: '/images/ac/real-ac.png',
    rating: 4.5,
    review_count: 678,
    features: [
      'Dual Inverter Compressor',
      'AI Convertible 6-in-1',
      'Copper Condenser',
      'Ocean Black Protection',
    ],
    badge: 'Best Overall',
    warranty_product: '1 Year Product Warranty',
    warranty_compressor: '10 Year Compressor Warranty',
    annual_savings: 4200,
    recommended_order: 1,
    status: 'active',
  },
  {
    id: '2t-daikin-02',
    product_name: 'Daikin 2.0 Ton 3 Star Inverter Split AC',
    brand: 'Daikin',
    model_number: 'MTKL60U',
    tonnage: 2.0,
    type: 'inverter',
    star_rating: 3,
    price: 54990,
    mrp: 67500,
    affiliate_link: 'https://www.amazon.in/dp/B0EXAMPLE12?tag=ahmedabadac-21',
    image: '/images/ac/real-ac.png',
    rating: 4.4,
    review_count: 543,
    features: [
      'Power Chill Operation',
      'Triple Display',
      'Copper Condenser',
      'Stabilizer Inside',
    ],
    badge: '#1 Recommended',
    warranty_product: '1 Year Product Warranty',
    warranty_compressor: '10 Year Compressor Warranty',
    annual_savings: 3800,
    recommended_order: 2,
    status: 'active',
  },
  {
    id: '2t-samsung-03',
    product_name: 'Samsung 2.0 Ton 3 Star Inverter Split AC',
    brand: 'Samsung',
    model_number: 'AR24CYLANWK',
    tonnage: 2.0,
    type: 'inverter',
    star_rating: 3,
    price: 49990,
    mrp: 62900,
    affiliate_link: 'https://www.amazon.in/dp/B0EXAMPLE13?tag=ahmedabadac-21',
    image: '/images/ac/real-ac.png',
    rating: 4.3,
    review_count: 489,
    features: [
      'Wind-Free Cooling',
      'Digital Inverter Boost',
      'Anti-Bacterial Filter',
      'Copper Condenser',
    ],
    badge: 'Best Value',
    warranty_product: '1 Year Product Warranty',
    warranty_compressor: '10 Year Compressor Warranty',
    annual_savings: 3500,
    recommended_order: 3,
    status: 'active',
  },
  {
    id: '2t-panasonic-04',
    product_name: 'Panasonic 2.0 Ton 5 Star Inverter Split AC',
    brand: 'Panasonic',
    model_number: 'CS/CU-KU24ZKYF',
    tonnage: 2.0,
    type: 'inverter',
    star_rating: 5,
    price: 58990,
    mrp: 74900,
    affiliate_link: 'https://www.amazon.in/dp/B0EXAMPLE14?tag=ahmedabadac-21',
    image: '/images/ac/real-ac.png',
    rating: 4.6,
    review_count: 412,
    features: [
      'Nanoe-G Air Purification',
      '7-in-1 Convertible',
      'Smart Wi-Fi Control',
      'Copper Condenser',
    ],
    badge: 'Premium Pick',
    warranty_product: '1 Year Product Warranty',
    warranty_compressor: '10 Year Compressor Warranty',
    annual_savings: 5100,
    recommended_order: 4,
    status: 'active',
  },
  {
    id: '2t-voltas-05',
    product_name: 'Voltas 2.0 Ton 3 Star Inverter Split AC',
    brand: 'Voltas',
    model_number: '243V CZTT',
    tonnage: 2.0,
    type: 'inverter',
    star_rating: 3,
    price: 46990,
    mrp: 58500,
    affiliate_link: 'https://www.amazon.in/dp/B0EXAMPLE15?tag=ahmedabadac-21',
    image: '/images/ac/real-ac.png',
    rating: 4.1,
    review_count: 876,
    features: [
      'Steady Cool Compressor',
      'Multi-Stage Filtration',
      'High Ambient Cooling',
      'Adjustable Cooling',
    ],
    warranty_product: '1 Year Product Warranty',
    warranty_compressor: '5 Year Compressor Warranty',
    annual_savings: 3100,
    recommended_order: 5,
    status: 'active',
  },
];

// ============================================================
// Query helpers
// ============================================================

export function getProductsByTonnage(tonnage: number): ACProduct[] {
  return products
    .filter((p) => p.tonnage === tonnage && p.status === 'active')
    .sort((a, b) => a.recommended_order - b.recommended_order);
}

export function getAvailableBrands(tonnage: number): string[] {
  const brands = new Set(
    products
      .filter((p) => p.tonnage === tonnage && p.status === 'active')
      .map((p) => p.brand)
  );
  return Array.from(brands).sort();
}

export function getAllTonnages(): number[] {
  const tonnages = new Set(products.map((p) => p.tonnage));
  return Array.from(tonnages).sort((a, b) => a - b);
}

export function formatPrice(price: number): string {
  return '₹' + price.toLocaleString('en-IN');
}

export function getDiscountPercent(price: number, mrp: number): number {
  return Math.round(((mrp - price) / mrp) * 100);
}
