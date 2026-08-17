import { useState } from 'react';
import { X, Plus, Minus, MapPin, Ruler, Gauge, Coffee } from 'lucide-react';
import type { Product } from '../lib/types';
import { useCart } from '../lib/cart';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const details = [
    product.origin && { icon: MapPin, label: 'Origin', value: product.origin },
    product.altitude && { icon: Gauge, label: 'Altitude', value: product.altitude },
    product.process && { icon: Coffee, label: 'Process', value: product.process },
    product.weight && { icon: Ruler, label: 'Weight', value: product.weight },
  ].filter(Boolean) as { icon: typeof MapPin; label: string; value: string }[];

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-espresso-950/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-4xl animate-scale-in overflow-hidden rounded-3xl border border-espresso-700 bg-espresso-900">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-espresso-950/50 text-cream-100 transition-colors hover:bg-espresso-950 hover:text-gold-300"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square md:aspect-auto md:h-full">
            <img
              src={product.image_url || 'https://images.pexels.com/photos/1695054/pexels-photo-1695054.jpeg'}
              alt={product.name}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/40 to-transparent md:bg-gradient-to-r" />
          </div>

          {/* Details */}
          <div className="flex max-h-[80vh] flex-col overflow-y-auto p-8">
            {product.origin && (
              <div className="mb-2 flex items-center gap-1.5 text-xs text-cream-400">
                <MapPin className="h-3 w-3" />
                {product.origin}
              </div>
            )}
            <h2 className="font-serif text-3xl font-semibold text-cream-50">
              {product.name}
            </h2>

            {product.long_description && (
              <p className="mt-4 text-sm leading-relaxed text-cream-200">
                {product.long_description}
              </p>
            )}

            {/* Details grid */}
            {details.length > 0 && (
              <div className="mt-6 grid grid-cols-2 gap-3">
                {details.map((detail) => (
                  <div
                    key={detail.label}
                    className="rounded-lg border border-espresso-700/50 bg-espresso-800/40 p-3"
                  >
                    <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-cream-400">
                      <detail.icon className="h-3 w-3" />
                      {detail.label}
                    </div>
                    <p className="mt-1 text-sm font-medium text-cream-100">
                      {detail.value}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Tasting notes */}
            {product.tasting_notes && product.tasting_notes.length > 0 && (
              <div className="mt-6">
                <p className="text-[11px] uppercase tracking-wider text-cream-400">
                  Tasting Notes
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.tasting_notes.map((note) => (
                    <span
                      key={note}
                      className="rounded-md border border-gold-400/30 bg-gold-400/10 px-3 py-1 text-xs font-medium text-gold-300"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity + Add */}
            <div className="mt-auto pt-8">
              <div className="flex items-center justify-between">
                <span className="font-serif text-3xl font-semibold text-gold-300">
                  ${product.price.toFixed(2)}
                </span>
                <div className="flex items-center gap-3 rounded-full border border-espresso-700 bg-espresso-800/50 px-2 py-1">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="flex h-8 w-8 items-center justify-center rounded-full text-cream-200 transition-colors hover:text-gold-300"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="min-w-6 text-center text-sm font-semibold text-cream-100">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="flex h-8 w-8 items-center justify-center rounded-full text-cream-200 transition-colors hover:text-gold-300"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <button
                onClick={() => {
                  addToCart(product, quantity);
                  onClose();
                }}
                className="mt-4 w-full rounded-full bg-gold-400 px-6 py-3.5 text-sm font-semibold text-espresso-950 transition-all hover:bg-gold-300 hover:shadow-lg hover:shadow-gold-400/20 active:scale-[0.98]"
              >
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
