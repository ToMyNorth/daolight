import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Contact Us | Dao Light",
  description:
    "Get in touch with the Dao Light team. Send us your questions, feedback, or collaboration ideas about our AI-powered Eastern wisdom platform.",
  openGraph: {
    title: "Contact Us | Dao Light",
    description:
      "Reach out to the Dao Light team — we'd love to hear from you.",
    url: "/contact",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Dao Light Contact" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Dao Light",
    description: "Reach out to the Dao Light team — we'd love to hear from you.",
    images: ["/og-default.png"],
  },
  alternates: { canonical: "/contact" },
};

const faqs = [
  {
    q: "How quickly will I receive a response?",
    a: "We aim to reply within 24–48 hours on business days. Complex questions may take a little longer.",
  },
  {
    q: "Can I request a new divination feature?",
    a: "Absolutely! We love hearing feature ideas. Send us your suggestion via the form above or email us directly at hello@daolight.one.",
  },
  {
    q: "Is my reading data private?",
    a: "Yes. We do not store personal divination results linked to your identity. All readings are processed in real time and treated as confidential.",
  },
  {
    q: "Do you offer refunds for premium plans?",
    a: "Yes — if you're not satisfied with a Pro or Lifetime plan, contact us within 7 days of purchase for a full refund, no questions asked.",
  },
  {
    q: "Can I collaborate or partner with Dao Light?",
    a: "We're open to collaborations with content creators, spiritual educators, and wellness brands. Reach out with your proposal and we'll get back to you promptly.",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-1/4 text-[200px] leading-none select-none">
            信
          </div>
          <div className="absolute right-1/4 bottom-10 text-[150px] leading-none select-none">
            ✉
          </div>
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mb-6 text-7xl">📬</div>
          <h1 className="mb-4 text-4xl font-bold text-[var(--foreground)] sm:text-5xl">
            Contact{" "}
            <span className="text-[var(--color-primary)]">Us</span>
          </h1>
          <p className="text-lg text-[var(--muted-foreground)] sm:text-xl">
            Questions, feedback, or ideas — we&apos;d love to hear from you
          </p>
        </div>
      </section>

      {/* Email + Form */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Direct email */}
          <div className="mb-10 rounded-2xl border border-[var(--color-primary)]/20 bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-accent)]/5 p-8 text-center">
            <h2 className="mb-2 text-xl font-bold text-[var(--foreground)]">
              Email Us Directly
            </h2>
            <p className="mb-4 text-sm text-[var(--muted-foreground)]">
              For quick questions or business inquiries
            </p>
            <a
              href="mailto:hello@daolight.one"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
            >
              hello@daolight.one
            </a>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 sm:p-10">
            <h2 className="mb-6 text-2xl font-bold text-[var(--foreground)]">
              Send a Message
            </h2>
            <form
              action="mailto:hello@daolight.one"
              method="POST"
              encType="text/plain"
              className="space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-[var(--foreground)]"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-[var(--foreground)]"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-1.5 block text-sm font-medium text-[var(--foreground)]"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="What is this about?"
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-[var(--foreground)]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us what's on your mind…"
                  className="w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[var(--color-primary)] py-3 font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
              >
                Send Message
              </button>
            </form>
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
    </div>
  );
}
