"use client";

import Link from "next/link";

/* ── Plan definitions ─────────────────────────────────────────────── */
const plans = [
  {
    name: "Free",
    price: "$0",
    period: "",
    description: "Get a taste of ancient wisdom every day",
    badge: null,
    features: [
      "3 divination readings per day",
      "Daily horoscope for all 12 zodiac signs",
      "Five Elements personality test",
      "Basic AI interpretations",
    ],
    cta: "Start Free",
    href: "/iching",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "/mo",
    description: "Unlimited access for dedicated seekers",
    badge: "Most Popular",
    features: [
      "Unlimited divination readings",
      "AI Oracle Chat with deep analysis",
      "Personalized daily insights & alerts",
      "Shareable reading cards",
      "Soulmate compatibility readings",
      "Priority AI responses",
    ],
    cta: "Upgrade to Pro",
    href: "/iching",
    highlight: true,
  },
  {
    name: "Lifetime",
    price: "$49.99",
    period: " once",
    description: "Pay once, access forever — best value",
    badge: "Best Value",
    features: [
      "Everything in Pro — forever",
      "Lifetime free upgrades",
      "Exclusive seasonal reading packs",
      "Early access to new features",
      "Premium support",
      "No recurring charges",
    ],
    cta: "Get Lifetime Access",
    href: "/iching",
    highlight: false,
  },
];

/* ── Feature comparison rows ──────────────────────────────────────── */
const comparison = [
  { feature: "Daily readings", free: "3 / day", pro: "Unlimited", lifetime: "Unlimited" },
  { feature: "Daily horoscope", free: "✓", pro: "✓", lifetime: "✓" },
  { feature: "Five Elements test", free: "✓", pro: "✓", lifetime: "✓" },
  { feature: "AI interpretations", free: "Basic", pro: "Advanced", lifetime: "Advanced" },
  { feature: "AI Oracle Chat", free: "—", pro: "✓", lifetime: "✓" },
  { feature: "Personalized insights", free: "—", pro: "✓", lifetime: "✓" },
  { feature: "Compatibility readings", free: "—", pro: "✓", lifetime: "✓" },
  { feature: "Shareable cards", free: "—", pro: "✓", lifetime: "✓" },
  { feature: "Priority AI responses", free: "—", pro: "✓", lifetime: "✓" },
  { feature: "Seasonal reading packs", free: "—", pro: "—", lifetime: "✓" },
  { feature: "Lifetime upgrades", free: "—", pro: "—", lifetime: "✓" },
  { feature: "Premium support", free: "—", pro: "—", lifetime: "✓" },
];

/* ── FAQ data ─────────────────────────────────────────────────────── */
const faqs = [
  {
    q: "Can I use Dao Light for free?",
    a: "Yes! The Free plan gives you 3 divination readings per day plus access to daily horoscopes and the Five Elements personality test — no credit card required.",
  },
  {
    q: "What's included in the Pro plan?",
    a: "Pro unlocks unlimited readings, AI Oracle Chat with deep analysis, personalized daily insights, soulmate compatibility readings, shareable reading cards, and priority AI responses.",
  },
  {
    q: "How does the Lifetime plan work?",
    a: "Pay a one-time fee of $49.99 and get full Pro features forever — including all future upgrades, exclusive seasonal reading packs, and premium support. No recurring charges.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept major credit cards and global payment methods via secure payment processors. All transactions are encrypted and safe.",
  },
  {
    q: "Can I cancel or get a refund?",
    a: "Pro subscriptions can be cancelled at any time. Lifetime and Pro plans both come with a 7-day money-back guarantee — no questions asked.",
  },
];

export default function PricingContent() {
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
            Choose the plan that fits your spiritual journey
          </p>
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
                    ? "border-[var(--color-primary)] bg-[var(--card)] shadow-lg shadow-[var(--color-primary)]/10 scale-[1.02]"
                    : "border-[var(--border)] bg-[var(--card)]"
                }`}
              >
                {plan.badge && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-semibold text-white ${
                    plan.highlight
                      ? "bg-[var(--color-primary)]"
                      : "bg-[var(--color-accent)]"
                  }`}>
                    {plan.badge}
                  </div>
                )}

                <div className="mb-6 text-center">
                  <h3 className="mb-2 text-xl font-bold text-[var(--foreground)]">
                    {plan.name}
                  </h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-[var(--foreground)]">
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
                      <span className="mt-0.5 text-base text-[var(--color-primary)]">
                        ✓
                      </span>
                      <span className="text-[var(--foreground)]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={`block w-full rounded-full py-3 text-center font-semibold transition-colors ${
                    plan.highlight
                      ? "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)]"
                      : "border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--muted)]"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-[var(--foreground)]">
            Feature Comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-[var(--border)]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--border)] bg-[var(--muted)]/40">
                  <th className="px-6 py-4 text-left font-semibold text-[var(--foreground)]">
                    Feature
                  </th>
                  <th className="px-4 py-4 text-center font-semibold text-[var(--foreground)]">
                    Free
                  </th>
                  <th className="px-4 py-4 text-center font-semibold text-[var(--color-primary)]">
                    Pro
                  </th>
                  <th className="px-4 py-4 text-center font-semibold text-[var(--color-accent)]">
                    Lifetime
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-[var(--border)] last:border-b-0 ${
                      i % 2 === 0 ? "" : "bg-[var(--muted)]/20"
                    }`}
                  >
                    <td className="px-6 py-3 font-medium text-[var(--foreground)]">
                      {row.feature}
                    </td>
                    <td className="px-4 py-3 text-center text-[var(--muted-foreground)]">
                      {row.free}
                    </td>
                    <td className="px-4 py-3 text-center text-[var(--foreground)]">
                      {row.pro}
                    </td>
                    <td className="px-4 py-3 text-center text-[var(--foreground)]">
                      {row.lifetime}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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

      {/* CTA */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="rounded-2xl border border-[var(--color-primary)]/20 bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-accent)]/5 p-10">
            <h2 className="mb-3 text-2xl font-bold text-[var(--foreground)]">
              Start Your Journey Today
            </h2>
            <p className="mb-6 text-[var(--muted-foreground)]">
              Explore 3,000 years of Eastern wisdom — completely free to start.
            </p>
            <Link
              href="/iching"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-8 py-3 font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
            >
              Try I Ching Divination →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
