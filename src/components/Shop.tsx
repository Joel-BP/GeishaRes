import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { Product } from '../lib/types';
import { ProductCard } from './ProductCard';
import { QuickViewModal } from './QuickViewModal';
import { useReveal } from '../lib/useReveal';
import { Loader2 } from 'lucide-react';

const CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'beans', label: 'Coffee Beans' },
  { key: 'subscription', label: 'Club Membership' },
];

export function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const { ref, visible } = useReveal<HTMLDivElement>();

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: true });
      if (error) {
        console.error('Error fetching products:', error);
      }
      if (data) setProducts(data as Product[]);
      setLoading(false);
    }
    fetchProducts();
  }, []);

  const filtered =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="shop" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-px w-10 bg-gold-400" />
              <span className="text-xs uppercase tracking-[0.3em] text-gold-300">
                The Collection
              </span>
              <div className="h-px w-10 bg-gold-400" />
            </div>
            <h2 className="font-serif text-4xl font-semibold text-cream-50 sm:text-5xl text-balance">
              Explore our <span className="text-gold-gradient italic">coffees</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-cream-300">
              Each lot is cupped, scored, and roasted to order. Choose whole bean
              or ground — either way, you'll taste the difference.
            </p>
          </div>

          {/* Category filter */}
          <div className="mb-12 flex justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  activeCategory === cat.key
                    ? 'bg-gold-400 text-espresso-950'
                    : 'border border-espresso-700 text-cream-300 hover:border-gold-400/40 hover:text-gold-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Products grid */}
          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-gold-400" />
            </div>
          ) : filtered.length === 0 ? (
            <p className="py-20 text-center text-cream-400">
              No products available in this category yet.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((product, i) => (
                <div
                  key={product.id}
                  className={`reveal reveal-delay-${(i % 3) + 1} ${visible ? 'is-visible' : ''}`}
                >
                  <ProductCard product={product} onQuickView={setQuickViewProduct} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
    </section>
  );
}
