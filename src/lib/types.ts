export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  long_description: string | null;
  price: number;
  roast_level: string | null;
  origin: string | null;
  altitude: string | null;
  weight: string | null;
  process: string | null;
  tasting_notes: string[] | null;
  image_url: string | null;
  category: string;
  featured: boolean;
  stock: number;
  created_at: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface OrderItem {
  product_id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: string;
  customer_name: string;
  email: string;
  phone: string | null;
  shipping_address: string;
  city: string;
  state: string | null;
  zip_code: string;
  country: string;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  total: number;
  status: string;
  created_at: string;
}
