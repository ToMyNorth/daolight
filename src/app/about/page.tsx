import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us - Our Mission | Dao Light",
  description:
    "Learn about Dao Light — our mission to bridge 5,000 years of ancient Eastern wisdom with modern AI technology for personal growth and self-discovery.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-1/4 text-[200px] leading-none select-none">
            道
          </div>
          <div className="absolute right-1/4 bottom-10 text-[150px] leading-none select-none">
            ☯
          </div>
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mb-6 text-7xl">☯</div>
          <h1 className="mb-4 text-4xl font-bold text-[var(--foreground)] sm:text-5xl">
            About{" "}
            <span className="text-[var(--color-primary)]">Dao Light</span>
          </h1>
          <p className="text-lg text-[var(--muted-foreground)] sm:text-xl">
            Bridging 5,000 years of Eastern wisdom with modern AI technology
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 sm:p-10">
            <h2 className="mb-6 text-2xl font-bold text-[var(--foreground)]">
              Our Story
            </h2>
            <div className="space-y-5 leading-relaxed text-[var(--muted-foreground)]">
              <p>
                In a world that moves faster every day, people are searching for
                something deeper — a way to understand themselves, find clarity,
                and connect with timeless wisdom. That search led us to create{" "}
                <strong className="text-[var(--foreground)]">Dao Light</strong>.
              </p>
              <p>
                The name carries our essence.{" "}
                <strong className="text-[var(--color-primary)]">
                  Dao (道)
                </strong>{" "}
                represents the fundamental principle of the universe — the
                underlying order that flows through all things.{" "}
                <strong className="text-[var(--color-accent)]">Light</strong>{" "}
                represents clarity and insight — the illumination that comes when
                ancient knowledge meets modern understanding. Together, we
                illuminate ancient wisdom for modern seekers.
              </p>
              <p>
                Our mission is to bridge 5,000 years of Eastern wisdom with
                modern AI technology. We believe that ancient divination systems
                like the I Ching and Five Elements are not superstitions — they
                are sophisticated frameworks for self-reflection and personal
                growth, validated by thinkers like Carl Jung, who recognized the
                I Ching as a profound tool for exploring the unconscious mind.
              </p>
              <p>
                We built Dao Light because we saw a gap: traditional Eastern
                wisdom was either locked behind dense scholarly texts or
                watered down into superficial fortune-telling apps. We wanted
                to create something different — a platform that respects the
                depth of these traditions while making them genuinely
                accessible and meaningful for today&apos;s global audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-[var(--foreground)]">
            How We Blend{" "}
            <span className="text-[var(--color-primary)]">Tradition</span> &{" "}
            <span className="text-[var(--color-accent)]">Technology</span>
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
              <div className="mb-3 text-3xl">🤖</div>
              <h3 className="mb-2 text-lg font-semibold text-[var(--foreground)]">
                AI-Powered Interpretation
              </h3>
              <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                Our AI interprets traditional readings using advanced language
                models trained on authentic Eastern philosophical texts. Every
                hexagram, every card, every elemental reading is grounded in
                real tradition.
              </p>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
              <div className="mb-3 text-3xl">🌏</div>
              <h3 className="mb-2 text-lg font-semibold text-[var(--foreground)]">
                Cross-Cultural Experience
              </h3>
              <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                We combine Western tarot tradition with Eastern divination to
                create a unique cross-cultural experience. Whether you draw a
                tarot card or cast I Ching coins, the wisdom speaks across
                cultures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-[var(--foreground)]">
            Our Values
          </h2>
          <div className="space-y-4">
            {[
              {
                icon: "🎭",
                title: "Entertainment & Self-Reflection",
                text: "For entertainment and self-reflection — not fortune telling. Our tools are designed to spark introspection, not predict the future.",
              },
              {
                icon: "🙏",
                title: "Respect for Cultural Traditions",
                text: "We deeply respect the cultural and philosophical traditions behind every practice we offer. We aim to honor, not appropriate.",
              },
              {
                icon: "🌐",
                title: "Accessible to Everyone",
                text: "Accessible to everyone, regardless of cultural background. You don't need to be an expert in Eastern philosophy to benefit from these timeless insights.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="flex gap-4 rounded-xl border border-[var(--border)] bg-[var(--card)] p-6"
              >
                <div className="shrink-0 text-3xl">{value.icon}</div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-[var(--foreground)]">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                    {value.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="rounded-2xl border border-[var(--color-primary)]/20 bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-accent)]/5 p-10">
            <h2 className="mb-3 text-2xl font-bold text-[var(--foreground)]">
              Get in Touch
            </h2>
            <p className="mb-6 text-[var(--muted-foreground)]">
              We&apos;d love to hear from you. Reach out with questions,
              feedback, or collaboration ideas.
            </p>
            <a
              href="mailto:hello@daolight.one"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
            >
              hello@daolight.one
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
