import { useState, type FormEvent } from 'react';
import { ArrowLeft, CheckCircle2, Loader2 } from 'lucide-react';
import { useCart } from '../lib/cart';
import { supabase } from '../lib/supabase';
import type { OrderItem } from '../lib/types';

interface CheckoutFormProps {
  subtotal: number;
  shipping: number;
  total: number;
  onBack: () => void;
  onSuccess: () => void;
}

export function CheckoutForm({ subtotal, shipping, total, onBack, onSuccess }: CheckoutFormProps) {
  const { items, clearCart } = useCart();
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const orderItems: OrderItem[] = items.map((item) => ({
    product_id: item.product.id,
    name: item.product.name,
    price: item.product.price,
    quantity: item.quantity,
  }));

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const orderData = {
      customer_name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone') || null,
      shipping_address: formData.get('address'),
      city: formData.get('city'),
      state: formData.get('state') || null,
      zip_code: formData.get('zip'),
      country: 'United States',
      items: orderItems,
      subtotal,
      shipping,
      total,
      status: 'pending',
    };

    const { error: insertError } = await supabase.from('orders').insert(orderData);

    if (insertError) {
      setError('Something went wrong placing your order. Please try again.');
      setSubmitting(false);
      return;
    }

    setSuccess(true);
    clearCart();
    setSubmitting(false);
  }

  if (success) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-5 p-8 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-forest-600/20">
          <CheckCircle2 className="h-10 w-10 text-forest-400" strokeWidth={1.5} />
        </div>
        <h2 className="font-serif text-2xl font-semibold text-cream-50">
          Order placed!
        </h2>
        <p className="max-w-xs text-sm text-cream-300">
          Thank you for your order. We'll send a confirmation to your email and roast
          your coffee fresh within 1–2 days.
        </p>
        <button
          onClick={onSuccess}
          className="mt-2 rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-espresso-950 transition-all hover:bg-gold-300"
        >
          Continue
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col overflow-y-auto">
      <div className="flex items-center gap-3 border-b border-espresso-700/50 p-5">
        <button
          onClick={onBack}
          className="flex h-9 w-9 items-center justify-center rounded-full text-cream-200 transition-colors hover:bg-espresso-800 hover:text-gold-300"
          aria-label="Back to cart"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h2 className="font-serif text-xl font-semibold text-cream-50">Checkout</h2>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-1 flex-col p-5">
        <div className="space-y-4">
          <div>
            <h3 className="mb-3 text-xs uppercase tracking-[0.2em] text-gold-300">
              Contact
            </h3>
            <div className="grid gap-3">
              <input
                name="name"
                placeholder="Full name"
                required
                className="w-full rounded-lg border border-espresso-700 bg-espresso-800/50 px-4 py-3 text-sm text-cream-100 placeholder-cream-500 outline-none transition-colors focus:border-gold-400"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full rounded-lg border border-espresso-700 bg-espresso-800/50 px-4 py-3 text-sm text-cream-100 placeholder-cream-500 outline-none transition-colors focus:border-gold-400"
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone (optional)"
                  className="w-full rounded-lg border border-espresso-700 bg-espresso-800/50 px-4 py-3 text-sm text-cream-100 placeholder-cream-500 outline-none transition-colors focus:border-gold-400"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-xs uppercase tracking-[0.2em] text-gold-300">
              Shipping Address
            </h3>
            <div className="grid gap-3">
              <input
                name="address"
                placeholder="Street address"
                required
                className="w-full rounded-lg border border-espresso-700 bg-espresso-800/50 px-4 py-3 text-sm text-cream-100 placeholder-cream-500 outline-none transition-colors focus:border-gold-400"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  name="city"
                  placeholder="City"
                  required
                  className="w-full rounded-lg border border-espresso-700 bg-espresso-800/50 px-4 py-3 text-sm text-cream-100 placeholder-cream-500 outline-none transition-colors focus:border-gold-400"
                />
                <input
                  name="state"
                  placeholder="State"
                  className="w-full rounded-lg border border-espresso-700 bg-espresso-800/50 px-4 py-3 text-sm text-cream-100 placeholder-cream-500 outline-none transition-colors focus:border-gold-400"
                />
              </div>
              <input
                name="zip"
                placeholder="ZIP code"
                required
                className="w-full rounded-lg border border-espresso-700 bg-espresso-800/50 px-4 py-3 text-sm text-cream-100 placeholder-cream-500 outline-none transition-colors focus:border-gold-400"
              />
            </div>
          </div>
        </div>

        {/* Order summary */}
        <div className="mt-6 rounded-xl border border-espresso-700/50 bg-espresso-800/30 p-4">
          <h3 className="mb-3 text-xs uppercase tracking-[0.2em] text-gold-300">
            Order Summary
          </h3>
          <div className="space-y-1.5 text-sm">
            {items.map((item) => (
              <div key={item.product.id} className="flex justify-between text-cream-300">
                <span className="truncate pr-2">
                  {item.product.name} × {item.quantity}
                </span>
                <span>${(item.product.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="mt-2 border-t border-espresso-700/50 pt-2">
              <div className="flex justify-between text-cream-300">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-cream-300">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between border-t border-espresso-700/50 pt-2 font-serif text-lg font-semibold text-cream-50">
                <span>Total</span>
                <span className="text-gold-300">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {error && (
          <p className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-gold-400 px-6 py-3.5 text-sm font-semibold text-espresso-950 transition-all hover:bg-gold-300 hover:shadow-lg hover:shadow-gold-400/20 active:scale-[0.98] disabled:opacity-60"
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Placing order...
            </>
          ) : (
            `Place Order — $${total.toFixed(2)}`
          )}
        </button>
      </form>
    </div>
  );
}
