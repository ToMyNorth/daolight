"use client";

import { useState } from "react";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    description: "Perfect for curious explorers",
    features: [
      "Daily horoscope",
      "1 I Ching reading per day",
      "1 Tarot reading per day",
      "Five Elements personality test",
    ],
    cta: "Start Exploring",
    href: "/iching",
    highlight: true,
    active: true,
  },
  {
    name: "Seeker",
    price: "$9.99",
    period: "/mo",
    description: "For dedicated seekers of wisdom",
    features: [
      "Unlimited readings",
      "AI Oracle Chat",
      "Personalized daily insights",
      "Shareable reading cards",
    ],
    cta: "Coming Soon",
    href: null,
    highlight: false,
    active: false,
  },
  {
    name: "Sage",
    price: "$19.99",
    period: "/mo",
    description: "The ultimate wisdom experience",
    features: [
      "Everything in Seeker",
      "Deep analysis reports",
      "Soulmate compatibility readings",
      "Priority AI responses",
    ],
    cta: "Coming Soon",
    href: null,
    highlight: false,
    active: false,
  },
];

const faqs = [
  {
    q: "Is Dao Light really free?",
    a: "Yes! All current features are completely free during our early access period. No credit card required.",
  },
  {
    q: "When will premium features launch?",
    a: "We're working on it! Join our waitlist to be the first to know when premium features become available.",
  },
  {
    q: "What payment methods will you accept?",
    a: "We plan to accept major credit cards via Stripe or LemonSqueezy for secure, global payments.",
  },
];

export default function PricingContent() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero */}
      <section className="px-4 pt-20 pb-12 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-6xl">💎</div>
          <h1 className="mb-3 text-4xl font-bold text-[var(--foreground)] sm:text-5xl">
            Pricing
          </h1>
          <p className="text-lg text-[var(--muted-foreground)] sm:text-xl">
            All features are currently free during our early access period
          </p>
        </div>
      </section>

      {/* Early Access Banner */}
      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-xl border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 p-6 text-center">
            <p className="text-[var(--foreground)]">
              <span className="font-semibold text-[var(--color-primary)]">
                Dao Light is in early access.
              </span>{" "}
              All divination tools and readings are completely free. No account
              required — just start exploring.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-6 transition-all sm:p-8 ${
                  plan.highlight
                    ? "border-[var(--color-primary)] bg-[var(--card)] shadow-lg shadow-[var(--color-primary)]/10"
                    : plan.active
                      ? "border-[var(--border)] bg-[var(--card)]"
                      : "border-dashed border-[var(--border)] bg-[var(--muted)]/30 opacity-75"
                }`}
              >
                {!plan.active && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--muted)] px-4 py-1 text-xs font-semibold text-[var(--muted-foreground)]">
                    Coming Soon
                  </div>
                )}

                {plan.highlight && plan.active && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--color-primary)] px-4 py-1 text-xs font-semibold text-white">
                    Free Now
                  </div>
                )}

                <div className="mb-6 text-center">
                  <h3
                    className={`mb-2 text-xl font-bold ${plan.active ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)]"}`}
                  >
                    {plan.name}
                  </h3>
                  <div className="mb-2">
                    <span
                      className={`text-4xl font-bold ${plan.active ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)]"}`}
                    >
                      {plan.price}
                    </span>
                    <span className="text-[var(--muted-foreground)]">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    {plan.description}
                  </p>
                </div>

                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <span
                        className={`mt-0.5 text-base ${plan.active ? "text-[var(--color-primary)]" : "text-[var(--muted-foreground)]"}`}
                      >
                        ✓
                      </span>
                      <span
                        className={plan.active ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)]"}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {plan.href ? (
                  <Link
                    href={plan.href}
                    className="block w-full rounded-full bg-[var(--color-primary)] py-3 text-center font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
                  >
                    {plan.cta}
                  </Link>
                ) : (
                  <button
                    disabled
                    className="block w-full cursor-not-allowed rounded-full border border-dashed border-[var(--border)] py-3 text-center font-semibold text-[var(--muted-foreground)]"
                  >
                    {plan.cta}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="mb-3 text-2xl font-bold text-[var(--foreground)]">
            Join Our Waitlist
          </h2>
          <p className="mb-6 text-[var(--muted-foreground)]">
            Be notified when premium features launch. No spam, ever.
          </p>
          {submitted ? (
            <div className="rounded-xl border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 p-6">
              <p className="text-lg font-semibold text-[var(--color-primary)]">
                🎉 You&apos;re on the list!
              </p>
              <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                We&apos;ll let you know when premium features are ready.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleWaitlist}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-3 text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-[var(--color-accent)] px-8 py-3 font-semibold text-white transition-colors hover:bg-[var(--color-accent-dark)]"
              >
                Join Waitlist
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-[var(--foreground)]">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6"
              >
                <h3 className="mb-2 text-lg font-semibold text-[var(--foreground)]">
                  {faq.q}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
