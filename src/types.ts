export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  subCategory: string;
  imageUrl: string;
  paymentUrl: string;
  badge?: string;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  unitInfo?: string;
}

export type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'name-asc';

export interface CartItem {
  product: Product;
  quantity: number;
}
