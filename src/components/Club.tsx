import { Check, Crown, Gift, Star } from 'lucide-react';
import { useReveal } from '../lib/useReveal';

const TIERS = [
  {
    name: 'Tasting',
    price: '$110',
    cadence: '/ month',
    icon: Star,
    description: 'A curated 250g Geisha lot delivered monthly.',
    perks: [
      'One curated 250g lot per month',
      'Tasting notes & origin story',
      '10% off all shop purchases',
      'Cancel anytime',
    ],
    highlight: false,
  },
  {
    name: 'Reserve',
    price: '$115',
    cadence: '/ quarter',
    icon: Crown,
    description: 'Our most popular tier — a standout lot every three months.',
    perks: [
      'One curated 250g lot per quarter',
      'Early access to limited releases',
      'Members-only micro-lots',
      '15% off all shop purchases',
      'Virtual cupping invitations',
    ],
    highlight: true,
  },
  {
    name: 'Connoisseur',
    price: '$220',
    cadence: '/ month',
    icon: Gift,
    description: 'Double the coffee, double the exclusivity.',
    perks: [
      'Two curated 250g lots per month',
      'First access to auction lots',
      'Annual farm visit invitation',
      '20% off all shop purchases',
      'Personal roaster consultation',
    ],
    highlight: false,
  },
];

export function Club() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="club" className="relative overflow-hidden py-28">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso-900/50 via-espresso-950 to-espresso-950" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="mb-14 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-px w-10 bg-gold-400" />
              <span className="text-xs uppercase tracking-[0.3em] text-gold-300">
                Membership
              </span>
              <div className="h-px w-10 bg-gold-400" />
            </div>
            <h2 className="font-serif text-4xl font-semibold text-cream-50 sm:text-5xl text-balance">
              Join the <span className="text-gold-gradient italic">Reserve Club</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-cream-300">
              Let our head roaster curate your coffee journey. Members receive
              hand-selected lots, early access to limited releases, and insider
              access to the farm.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {TIERS.map((tier, i) => (
              <div
                key={tier.name}
                className={`reveal reveal-delay-${i + 1} ${visible ? 'is-visible' : ''} relative flex flex-col rounded-2xl border p-8 transition-all ${
                  tier.highlight
                    ? 'border-gold-400/50 bg-gradient-to-b from-espresso-800/60 to-espresso-900/40 shadow-2xl shadow-gold-400/10 lg:scale-105'
                    : 'border-espresso-700/50 bg-espresso-900/40 hover:border-gold-400/30'
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold-400 px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-espresso-950">
                    Most Popular
                  </div>
                )}

                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-espresso-800">
                    <tier.icon className="h-6 w-6 text-gold-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-cream-50">
                      {tier.name}
                    </h3>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-cream-300">
                  {tier.description}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-serif text-4xl font-semibold text-gold-300">
                    {tier.price}
                  </span>
                  <span className="text-sm text-cream-400">{tier.cadence}</span>
                </div>

                <div className="my-6 h-px bg-espresso-700/50" />

                <ul className="flex-1 space-y-3">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2.5 text-sm text-cream-200">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" strokeWidth={2.5} />
                      {perk}
                    </li>
                  ))}
                </ul>

                <a
                  href="#shop"
                  className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-all active:scale-[0.98] ${
                    tier.highlight
                      ? 'bg-gold-400 text-espresso-950 hover:bg-gold-300 hover:shadow-lg hover:shadow-gold-400/20'
                      : 'border border-espresso-600 text-cream-100 hover:border-gold-400 hover:text-gold-300'
                  }`}
                >
                  Join {tier.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
