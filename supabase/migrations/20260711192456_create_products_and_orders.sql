/*
# Create products and orders tables for Geisha Reserve Coffee Club

1. New Tables
- `products` — coffee products available in the shop
  - id (uuid, primary key)
  - name (text, not null)
  - slug (text, unique, not null) — URL-friendly identifier
  - description (text, not null)
  - long_description (text) — extended product story
  - price (numeric, not null) — price in USD
  - roast_level (text) — e.g. 'Light', 'Medium', 'Dark'
  - origin (text) — e.g. 'Boquete, Panama'
  - altitude (text) — e.g. '1,600–1,900 m'
  - weight (text) — e.g. '250g'
  - process (text) — e.g. 'Washed', 'Natural', 'Honey'
  - tasting_notes (text[]) — flavor descriptors
  - image_url (text) — product photo URL
  - category (text) — 'beans' | 'subscription' | 'merch'
  - featured (boolean, default false) — show on homepage
  - stock (integer, default 0)
  - created_at (timestamptz)
- `orders` — customer checkout orders
  - id (uuid, primary key)
  - customer_name (text, not null)
  - email (text, not null)
  - phone (text)
  - shipping_address (text, not null)
  - city (text, not null)
  - state (text)
  - zip_code (text, not null)
  - country (text, default 'United States')
  - items (jsonb, not null) — array of {product_id, name, price, quantity}
  - subtotal (numeric, not null)
  - shipping (numeric, default 0)
  - total (numeric, not null)
  - status (text, default 'pending') — pending | processing | shipped | delivered
  - created_at (timestamptz)

2. Security
- Enable RLS on both tables.
- products: public read (anon + authenticated), no public write (managed via seed).
- orders: public insert (anon + authenticated can place orders), no public read/update/delete (orders are private to the shop owner).

3. Indexes
- products_slug_idx on products(slug)
- products_category_idx on products(category)
- products_featured_idx on products(featured)
- orders_status_idx on orders(status)
- orders_created_at_idx on orders(created_at)
*/

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text NOT NULL,
  long_description text,
  price numeric(10,2) NOT NULL,
  roast_level text,
  origin text,
  altitude text,
  weight text,
  process text,
  tasting_notes text[],
  image_url text,
  category text NOT NULL DEFAULT 'beans',
  featured boolean NOT NULL DEFAULT false,
  stock integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  email text NOT NULL,
  phone text,
  shipping_address text NOT NULL,
  city text NOT NULL,
  state text,
  zip_code text NOT NULL,
  country text NOT NULL DEFAULT 'United States',
  items jsonb NOT NULL,
  subtotal numeric(10,2) NOT NULL,
  shipping numeric(10,2) NOT NULL DEFAULT 0,
  total numeric(10,2) NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS products_slug_idx ON products(slug);
CREATE INDEX IF NOT EXISTS products_category_idx ON products(category);
CREATE INDEX IF NOT EXISTS products_featured_idx ON products(featured);
CREATE INDEX IF NOT EXISTS orders_status_idx ON orders(status);
CREATE INDEX IF NOT EXISTS orders_created_at_idx ON orders(created_at);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- products: public read only
DROP POLICY IF EXISTS "public_read_products" ON products;
CREATE POLICY "public_read_products" ON products FOR SELECT
  TO anon, authenticated USING (true);

-- orders: public insert only (customers can place orders; only shop owner reads them server-side)
DROP POLICY IF EXISTS "public_insert_orders" ON orders;
CREATE POLICY "public_insert_orders" ON orders FOR INSERT
  TO anon, authenticated WITH CHECK (true);
