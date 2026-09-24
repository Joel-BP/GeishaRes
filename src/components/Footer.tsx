import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="relative border-t border-espresso-700/50 bg-espresso-950 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-cream-300">
              Rare single-origin Geisha coffee, sustainably sourced from the volcanic
              highlands of Panama. Roasted to order, delivered fresh.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-espresso-700 text-cream-300 transition-all hover:border-gold-400 hover:text-gold-300"
                  aria-label="Social media link"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-xs uppercase tracking-[0.2em] text-gold-300">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-cream-300">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold-400" strokeWidth={1.5} />
                hello@geishareserve.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold-400" strokeWidth={1.5} />
                +1 (555) 018-2247
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold-400" strokeWidth={1.5} />
                Florida, USA
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-xs uppercase tracking-[0.2em] text-gold-300">
              Explore
            </h4>
            <ul className="space-y-3 text-sm text-cream-300">
              <li><a href="#story" className="transition-colors hover:text-gold-300">Our Story</a></li>
              <li><a href="#shop" className="transition-colors hover:text-gold-300">Shop Coffee</a></li>
              <li><a href="#club" className="transition-colors hover:text-gold-300">Reserve Club</a></li>
              <li><a href="#faq" className="transition-colors hover:text-gold-300">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-espresso-700/50 pt-6 text-center text-xs text-cream-400">
          © 2026 Geisha Reserve Coffee Club. All rights reserved. · Geishareserve.com
        </div>
      </div>
    </footer>
  );
}
