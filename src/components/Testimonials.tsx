import { Quote } from 'lucide-react';
import { useReveal } from '../lib/useReveal';

const TESTIMONIALS = [
  {
    text: 'I have searched for years for a coffee that doesn\'t upset my stomach, yet is rich in flavor and quality. Geisha Reserve is the one — natural, delicious, and unlike anything I\'ve tasted.',
    author: 'Maria C.',
    role: 'Member since 2024',
  },
  {
    text: 'I\'m no coffee expert, just an average drinker. But when I was gifted a bag of Geisha Reserve, I was enchanted by the flavor. You can really tell the difference. I\'ll never go back to supermarket coffee.',
    author: 'James R.',
    role: 'Tasting Member',
  },
  {
    text: 'The rich aroma and flavor of this coffee is the perfect way to start my day. The packaging is a beautiful reflection of the care and thought put into every batch. Absolutely worth every penny.',
    author: 'Sophie L.',
    role: 'Reserve Member',
  },
];

export function Testimonials() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-espresso-950 via-espresso-900/30 to-espresso-950" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="mb-14 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-px w-10 bg-gold-400" />
              <span className="text-xs uppercase tracking-[0.3em] text-gold-300">
                Member Voices
              </span>
              <div className="h-px w-10 bg-gold-400" />
            </div>
            <h2 className="font-serif text-4xl font-semibold text-cream-50 sm:text-5xl text-balance">
              Loved by <span className="text-gold-gradient italic">connoisseurs</span>
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={t.author}
                className={`reveal reveal-delay-${i + 1} ${visible ? 'is-visible' : ''} flex flex-col rounded-2xl border border-espresso-700/50 bg-espresso-900/50 p-8`}
              >
                <Quote className="h-8 w-8 text-gold-400/40" />
                <p className="mt-4 flex-1 text-base leading-relaxed text-cream-200">
                  {t.text}
                </p>
                <div className="mt-6 border-t border-espresso-700/50 pt-4">
                  <p className="font-serif text-lg font-semibold text-cream-50">
                    {t.author}
                  </p>
                  <p className="text-sm text-gold-300">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
