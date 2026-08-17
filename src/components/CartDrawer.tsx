import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../lib/cart';
import { CheckoutForm } from './CheckoutForm';
import { useState } from 'react';

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeFromCart, subtotal, itemCount } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  if (!isOpen) return null;

  const shipping = subtotal > 75 ? 0 : 7.95;
  const total = subtotal + shipping;

  return (
    <div className="fixed inset-0 z-[60]">
      <div
        className="absolute inset-0 bg-espresso-950/70 backdrop-blur-sm animate-fade-in"
        onClick={closeCart}
      />
      <div className="absolute right-0 top-0 flex h-full w-full max-w-md animate-slide-in-right flex-col border-l border-espresso-700 bg-espresso-900">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-espresso-700/50 p-5">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-gold-400" strokeWidth={1.5} />
            <h2 className="font-serif text-xl font-semibold text-cream-50">
              Your Cart
            </h2>
            {itemCount > 0 && (
              <span className="text-sm text-cream-400">({itemCount})</span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="flex h-9 w-9 items-center justify-center rounded-full text-cream-200 transition-colors hover:bg-espresso-800 hover:text-gold-300"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {showCheckout ? (
          <CheckoutForm
            subtotal={subtotal}
            shipping={shipping}
            total={total}
            onBack={() => setShowCheckout(false)}
            onSuccess={() => {
              setShowCheckout(false);
              closeCart();
            }}
          />
        ) : items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-espresso-700 bg-espresso-800/50">
              <ShoppingBag className="h-8 w-8 text-cream-500" strokeWidth={1} />
            </div>
            <p className="text-cream-300">Your cart is empty.</p>
            <button
              onClick={closeCart}
              className="rounded-full border border-espresso-600 px-6 py-2.5 text-sm font-medium text-cream-100 transition-all hover:border-gold-400 hover:text-gold-300"
            >
              Browse Coffee
            </button>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="flex-1 overflow-y-auto p-5">
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-4 rounded-xl border border-espresso-700/50 bg-espresso-800/30 p-3"
                  >
                    <img
                      src={item.product.image_url || 'https://images.pexels.com/photos/1695054/pexels-photo-1695054.jpeg'}
                      alt={item.product.name}
                      className="h-20 w-20 shrink-0 rounded-lg object-cover"
                    />
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-serif text-base font-medium text-cream-50">
                          {item.product.name}
                        </h3>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-cream-400 transition-colors hover:text-red-400"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      {item.product.weight && (
                        <p className="text-xs text-cream-400">{item.product.weight}</p>
                      )}
                      <div className="mt-auto flex items-center justify-between pt-2">
                        <div className="flex items-center gap-2 rounded-full border border-espresso-700 bg-espresso-900/50 px-1 py-0.5">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="flex h-7 w-7 items-center justify-center rounded-full text-cream-200 transition-colors hover:text-gold-300"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="min-w-5 text-center text-sm font-medium text-cream-100">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="flex h-7 w-7 items-center justify-center rounded-full text-cream-200 transition-colors hover:text-gold-300"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <span className="font-serif text-lg font-semibold text-gold-300">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="border-t border-espresso-700/50 p-5">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-cream-300">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-cream-300">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-gold-300">
                    Free shipping on orders over $75
                  </p>
                )}
                <div className="flex justify-between border-t border-espresso-700/50 pt-2 font-serif text-lg font-semibold text-cream-50">
                  <span>Total</span>
                  <span className="text-gold-300">${total.toFixed(2)}</span>
                </div>
              </div>
              <button
                onClick={() => setShowCheckout(true)}
                className="mt-4 w-full rounded-full bg-gold-400 px-6 py-3.5 text-sm font-semibold text-espresso-950 transition-all hover:bg-gold-300 hover:shadow-lg hover:shadow-gold-400/20 active:scale-[0.98]"
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
