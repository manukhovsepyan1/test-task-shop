
export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  product: Product;
  total: number;
  skip: number;
  limit: number;
  images: Array<string>;
}

export interface Category {
  id: string;
  name: string;
  banner: Banner
}