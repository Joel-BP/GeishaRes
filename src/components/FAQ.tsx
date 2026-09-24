import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useReveal } from '../lib/useReveal';

const FAQS = [
  {
    question: 'What makes Geisha coffee so special?',
    answer: 'The Geisha (or Gesha) varietal is renowned for its floral, tea-like cup profile with notes of jasmine, bergamot, and stone fruit. Originally from Ethiopia, it thrives in the warm subtropical climate of Florida, producing a coffee so distinctive that it has set auction price records for over a decade. It is widely considered one of the finest coffee varietals in the world.',
  },
  {
    question: 'How fresh is the coffee when it arrives?',
    answer: 'We roast to order. Your coffee is roasted within 1–2 days of placing your order and shipped within 48 hours of roasting. We recommend resting the beans for 3–7 days after the roast date before brewing for optimal flavor.',
  },
  {
    question: 'What grind options are available?',
    answer: 'All of our coffees are available as whole bean (recommended for maximum freshness) or pre-ground. If you choose ground, you can select from French press, drip, pour-over, or espresso grinds at checkout.',
  },
  {
    question: 'How does the Reserve Club membership work?',
    answer: 'Choose a plan (monthly or quarterly) and you\'ll receive a hand-selected 250g Geisha lot on each delivery cycle. Your roaster includes tasting notes and the origin story for every lot. Members also get early access to limited releases and discounts on shop purchases. You can cancel or pause anytime.',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Currently we ship to the United States and Canada. We are working on expanding to additional countries — join our waitlist and we\'ll notify you when shipping becomes available in your region.',
  },
  {
    question: 'What is your return policy?',
    answer: 'Because coffee is a perishable product, we do not accept returns on opened bags. However, if your coffee arrives damaged or you are not satisfied with the quality, contact us within 14 days and we will make it right with a replacement or refund.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="faq" className="relative py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="mb-14 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-px w-10 bg-gold-400" />
              <span className="text-xs uppercase tracking-[0.3em] text-gold-300">
                Questions
              </span>
              <div className="h-px w-10 bg-gold-400" />
            </div>
            <h2 className="font-serif text-4xl font-semibold text-cream-50 sm:text-5xl text-balance">
              Frequently <span className="text-gold-gradient italic">asked</span>
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl border border-espresso-700/50 bg-espresso-900/40"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-espresso-900/60"
                >
                  <span className="font-serif text-lg font-medium text-cream-50">
                    {faq.question}
                  </span>
                  {openIndex === i ? (
                    <Minus className="h-5 w-5 shrink-0 text-gold-400" />
                  ) : (
                    <Plus className="h-5 w-5 shrink-0 text-gold-400" />
                  )}
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    openIndex === i
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-cream-300">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
