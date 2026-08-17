import { Plus, MapPin, Sparkles } from 'lucide-react';
import type { Product } from '../lib/types';
import { useCart } from '../lib/cart';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export function ProductCard({ product, onQuickView }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-espresso-700/50 bg-espresso-900/40 transition-all duration-500 hover:border-gold-400/40 hover:shadow-2xl hover:shadow-espresso-950/50">
      {/* Image */}
      <button
        onClick={() => onQuickView(product)}
        className="relative aspect-[4/5] overflow-hidden"
        aria-label={`View ${product.name}`}
      >
        <img
          src={product.image_url || 'https://images.pexels.com/photos/1695054/pexels-photo-1695054.jpeg'}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-transparent to-transparent" />

        {/* Badges */}
        <div className="absolute left-4 top-4 flex flex-col gap-2">
          {product.category === 'subscription' && (
            <span className="flex items-center gap-1 rounded-full bg-forest-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-cream-50">
              <Sparkles className="h-3 w-3" />
              Membership
            </span>
          )}
          {product.roast_level && (
            <span className="rounded-full bg-espresso-950/80 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-gold-300 backdrop-blur-sm">
              {product.roast_level} Roast
            </span>
          )}
        </div>
      </button>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {product.origin && (
          <div className="mb-2 flex items-center gap-1.5 text-xs text-cream-400">
            <MapPin className="h-3 w-3" />
            {product.origin}
          </div>
        )}
        <button
          onClick={() => onQuickView(product)}
          className="text-left font-serif text-xl font-semibold text-cream-50 transition-colors hover:text-gold-300"
        >
          {product.name}
        </button>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-cream-300 line-clamp-2">
          {product.description}
        </p>

        {/* Tasting notes */}
        {product.tasting_notes && product.tasting_notes.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {product.tasting_notes.slice(0, 3).map((note) => (
              <span
                key={note}
                className="rounded-md border border-espresso-700/50 bg-espresso-800/50 px-2 py-1 text-[11px] text-cream-300"
              >
                {note}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between">
          <span className="font-serif text-2xl font-semibold text-gold-300">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => addToCart(product)}
            className="flex items-center gap-1.5 rounded-full bg-gold-400 px-5 py-2.5 text-sm font-semibold text-espresso-950 transition-all hover:bg-gold-300 hover:shadow-lg hover:shadow-gold-400/20 active:scale-95"
          >
            <Plus className="h-4 w-4" strokeWidth={2.5} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
