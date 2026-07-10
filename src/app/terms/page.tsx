import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Dao Light",
  description:
    "Read the Dao Light terms of service. Understand the rules, guidelines, and disclaimers for using our platform.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="mb-4 text-5xl">📜</div>
            <h1 className="mb-3 text-4xl font-bold text-[var(--foreground)]">
              Terms of Service
            </h1>
            <p className="text-sm text-[var(--muted-foreground)]">
              Last Updated: July 5, 2026
            </p>
          </div>

          {/* DISCLAIMER — TOP, BOLD */}
          <div className="mb-10 rounded-xl border-2 border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 p-6">
            <p className="text-sm font-bold leading-relaxed text-[var(--foreground)] sm:text-base">
              DISCLAIMER: All content provided by Dao Light is for entertainment
              purposes only. Our readings, interpretations, and personality
              tests are not intended to substitute for professional advice in
              legal, medical, financial, psychological, or other matters.
              Results are generated using AI technology combined with
              traditional divination methods and should not be considered
              scientifically accurate predictions. Users are advised to make
              their own decisions and seek professional counsel when needed.
            </p>
          </div>

          <div className="space-y-10 text-[var(--muted-foreground)]">
            {/* 1. Acceptance of Terms */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[var(--foreground)]">
                1. Acceptance of Terms
              </h2>
              <p className="leading-relaxed">
                By accessing or using the Dao Light website and services
                (collectively, the &quot;Service&quot;) at{" "}
                <Link href="/" className="text-[var(--color-primary)] hover:underline">
                  daolight.one
                </Link>
                , you agree to be bound by these Terms of Service
                (&quot;Terms&quot;). If you do not agree to these Terms, please
                do not use the Service. We reserve the right to update or modify
                these Terms at any time, and Your continued use of the Service
                following any changes constitutes acceptance of the revised
                Terms.
              </p>
            </section>

            {/* 2. Description of Service */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[var(--foreground)]">
                2. Description of Service
              </h2>
              <p className="leading-relaxed">
                Dao Light provides AI-powered divination, personality insights,
                and entertainment content inspired by Eastern and Western wisdom
                traditions. The Service includes, but is not limited to:
              </p>
              <ul className="mt-3 list-inside list-disc space-y-2 pl-2">
                <li>I Ching (Book of Changes) divination readings</li>
                <li>Tarot card readings with AI-generated interpretations</li>
                <li>Daily horoscopes based on Chinese and Western astrology</li>
                <li>Five Elements personality tests and insights</li>
                <li>AI Oracle conversational readings</li>
              </ul>
              <p className="mt-3 leading-relaxed">
                All content is provided for entertainment and self-reflection
                purposes. The Service may be modified, updated, or discontinued
                at any time without prior notice.
              </p>
            </section>

            {/* 3. User Conduct */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[var(--foreground)]">
                3. User Conduct
              </h2>
              <p className="mb-3 leading-relaxed">
                By using the Service, you agree not to:
              </p>
              <ul className="list-inside list-disc space-y-2 pl-2">
                <li>
                  Abuse, harass, or threaten other users or Dao Light personnel.
                </li>
                <li>
                  Attempt to hack, crack, reverse-engineer, or bypass any
                  security measures, rate limits, or usage restrictions of the
                  Service.
                </li>
                <li>
                  Use automated scripts, bots, or scrapers to access the Service
                  without written permission.
                </li>
                <li>
                  Submit content that is illegal, harmful, threatening, abusive,
                  defamatory, or otherwise objectionable.
                </li>
                <li>
                  Impersonate any person or entity, or falsely claim affiliation
                  with any person or entity.
                </li>
                <li>
                  Use the Service for any commercial purpose without prior
                  written consent from Dao Light.
                </li>
              </ul>
              <p className="mt-3 leading-relaxed">
                Violation of these rules may result in immediate termination of
                access to the Service without prior notice.
              </p>
            </section>

            {/* 4. Intellectual Property */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[var(--foreground)]">
                4. Intellectual Property
              </h2>
              <p className="leading-relaxed">
                All content on the Dao Light platform — including but not
                limited to text, graphics, logos, icons, images, audio clips,
                software, and AI-generated interpretations — is the property of
                Dao Light or its licensors and is protected by international
                copyright, trademark, and other intellectual property laws.
              </p>
              <p className="mt-3 leading-relaxed">
                You may not reproduce, distribute, modify, display, perform, or
                use any content from the Service without prior written
                permission from Dao Light, except for personal, non-commercial
                use in accordance with these Terms.
              </p>
            </section>

            {/* 5. AI-Generated Content */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[var(--foreground)]">
                5. AI-Generated Content
              </h2>
              <p className="leading-relaxed">
                You acknowledge that readings, interpretations, and insights
                provided by the Service are generated using artificial
                intelligence technology combined with traditional divination
                methods. While we strive for quality and cultural authenticity:
              </p>
              <ul className="mt-3 list-inside list-disc space-y-2 pl-2">
                <li>
                  AI-generated content may contain inaccuracies,
                  hallucinations, or inconsistencies.
                </li>
                <li>
                  Readings should not be relied upon for making important life
                  decisions.
                </li>
                <li>
                  Results may vary between sessions, even with identical inputs.
                </li>
                <li>
                  Content reflects interpretations of traditional frameworks
                  and should not be considered authoritative scholarly work.
                </li>
              </ul>
            </section>

            {/* 6. Limitation of Liability */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[var(--foreground)]">
                6. Limitation of Liability
              </h2>
              <p className="leading-relaxed">
                To the maximum extent permitted by applicable law, Dao Light,
                its affiliates, directors, employees, and agents shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages arising out of or related to your use of, or
                inability to use, the Service. This includes, but is not limited
                to:
              </p>
              <ul className="mt-3 list-inside list-disc space-y-2 pl-2">
                <li>
                  Any decisions made based on readings, interpretations, or
                  personality test results.
                </li>
                <li>
                  Loss of data, revenue, profits, or business opportunities.
                </li>
                <li>
                  Service interruptions, errors, or delays in AI-generated
                  responses.
                </li>
                <li>
                  Unauthorized access to or alteration of your data.
                </li>
              </ul>
              <p className="mt-3 leading-relaxed">
                Our total liability for any claim arising out of or related to
                the Service shall not exceed the amount you paid to Dao Light
                in the twelve (12) months preceding the claim, or USD $100,
                whichever is greater.
              </p>
            </section>

            {/* 7. Termination */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[var(--foreground)]">
                7. Termination
              </h2>
              <p className="leading-relaxed">
                We reserve the right to suspend or terminate your access to the
                Service at any time, with or without cause and with or without
                notice. Upon termination, your right to use the Service will
                immediately cease. Provisions of these Terms that by their
                nature should survive termination shall remain in full effect,
                including disclaimers, limitations of liability, and
                intellectual property provisions.
              </p>
            </section>

            {/* 8. Governing Law */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[var(--foreground)]">
                8. Governing Law
              </h2>
              <p className="leading-relaxed">
                These Terms shall be governed by and construed in accordance
                with the laws of the jurisdiction in which Dao Light operates,
                without regard to its conflict of law provisions. Any disputes
                arising under or in connection with these Terms shall be subject
                to the exclusive jurisdiction of the competent courts in that
                jurisdiction.
              </p>
            </section>

            {/* 9. Severability */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[var(--foreground)]">
                9. Severability
              </h2>
              <p className="leading-relaxed">
                If any provision of these Terms is found to be invalid,
                illegal, or unenforceable, the remaining provisions shall
                continue in full force and effect. The invalid provision shall
                be modified to the minimum extent necessary to make it valid
                and enforceable.
              </p>
            </section>

            {/* 10. Contact */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[var(--foreground)]">
                10. Contact Us
              </h2>
              <p className="leading-relaxed">
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="mt-4 rounded-lg border border-[var(--border)] bg-[var(--card)] p-5">
                <p className="font-medium text-[var(--foreground)]">
                  Dao Light — Legal Team
                </p>
                <p className="mt-1">
                  Email:{" "}
                  <a
                    href="mailto:legal@daolight.one"
                    className="text-[var(--color-primary)] hover:underline"
                  >
                    legal@daolight.one
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
