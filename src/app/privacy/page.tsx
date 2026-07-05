import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Dao Light",
  description:
    "Read the Dao Light privacy policy. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="mb-4 text-5xl">🔒</div>
            <h1 className="mb-3 text-4xl font-bold text-[var(--foreground)]">
              Privacy Policy
            </h1>
            <p className="text-sm text-[var(--muted-foreground)]">
              Last Updated: July 5, 2026
            </p>
          </div>

          <div className="space-y-10 text-[var(--muted-foreground)]">
            {/* Introduction */}
            <p className="leading-relaxed">
              Dao Light (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is
              committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when
              you visit our website at{" "}
              <Link href="/" className="text-[var(--color-primary)] hover:underline">
                daolight.ai
              </Link>
              . Please read this policy carefully. By accessing or using the
              Service, you agree to the collection and use of information in
              accordance with this policy.
            </p>

            {/* Information We Collect */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[var(--foreground)]">
                1. Information We Collect
              </h2>

              <h3 className="mb-2 text-lg font-semibold text-[var(--foreground)]">
                1.1 Information You Provide
              </h3>
              <ul className="mb-6 list-inside list-disc space-y-2 pl-2">
                <li>
                  <strong className="text-[var(--foreground)]">
                    Questions and queries:
                  </strong>{" "}
                  Text you enter when asking the AI Oracle a question or
                  requesting a reading.
                </li>
                <li>
                  <strong className="text-[var(--foreground)]">
                    Test results:
                  </strong>{" "}
                  Results from personality tests and divination sessions you
                  complete on the platform.
                </li>
                <li>
                  <strong className="text-[var(--foreground)]">
                    Waitlist signups:
                  </strong>{" "}
                  Email addresses you voluntarily provide for our waitlist or
                  newsletter.
                </li>
              </ul>
              <div className="mb-6 rounded-lg border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 p-4">
                <p className="text-sm font-medium text-[var(--foreground)]">
                  ⚠️ Note: We do{" "}
                  <span className="text-[var(--color-primary)]">not</span>{" "}
                  collect your date of birth. Our MVP platform does not require
                  this information.
                </p>
              </div>

              <h3 className="mb-2 text-lg font-semibold text-[var(--foreground)]">
                1.2 Information Collected Automatically
              </h3>
              <ul className="list-inside list-disc space-y-2 pl-2">
                <li>
                  <strong className="text-[var(--foreground)]">
                    Device information:
                  </strong>{" "}
                  IP address, browser type and version, operating system, and
                  device type.
                </li>
                <li>
                  <strong className="text-[var(--foreground)]">
                    Usage data:
                  </strong>{" "}
                  Pages visited, time spent on pages, features used, referral
                  source, and other analytics data.
                </li>
                <li>
                  <strong className="text-[var(--foreground)]">
                    Log data:
                  </strong>{" "}
                  Server logs including timestamps, error reports, and request
                  metadata.
                </li>
              </ul>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[var(--foreground)]">
                2. How We Use Your Information
              </h2>
              <p className="mb-3">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-inside list-disc space-y-2 pl-2">
                <li>
                  <strong className="text-[var(--foreground)]">
                    Provide divination services:
                  </strong>{" "}
                  Generate AI-powered readings, horoscopes, and personality
                  insights based on your queries.
                </li>
                <li>
                  <strong className="text-[var(--foreground)]">
                    Improve user experience:
                  </strong>{" "}
                  Personalize content, optimize performance, and develop new
                  features.
                </li>
                <li>
                  <strong className="text-[var(--foreground)]">
                    Analyze usage:
                  </strong>{" "}
                  Understand how visitors interact with our platform to improve
                  our services and content quality.
                </li>
                <li>
                  <strong className="text-[var(--foreground)]">
                    Communicate with you:
                  </strong>{" "}
                  Send waitlist updates, product announcements, and respond to
                  inquiries (only if you opt in).
                </li>
                <li>
                  <strong className="text-[var(--foreground)]">
                    Ensure security:
                  </strong>{" "}
                  Detect, prevent, and address technical issues, fraud, or
                  abuse.
                </li>
              </ul>
            </section>

            {/* Data Storage and Security */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[var(--foreground)]">
                3. Data Storage and Security
              </h2>
              <p className="leading-relaxed">
                Your data is stored securely using industry-standard encryption
                protocols. All data transmitted between your browser and our
                servers is encrypted using TLS (Transport Layer Security). We
                implement appropriate technical and organizational measures to
                protect your personal information against unauthorized access,
                alteration, disclosure, or destruction.
              </p>
              <p className="mt-3 leading-relaxed">
                While we strive to use commercially acceptable means to protect
                your information, no method of transmission over the Internet or
                electronic storage is 100% secure. We cannot guarantee absolute
                security of your data.
              </p>
            </section>

            {/* Your Rights (GDPR) */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[var(--foreground)]">
                4. Your Rights (GDPR &amp; CCPA)
              </h2>
              <p className="mb-3">
                Depending on your location, you may have the following rights
                regarding your personal data:
              </p>
              <ul className="list-inside list-disc space-y-2 pl-2">
                <li>
                  <strong className="text-[var(--foreground)]">
                    Right to access:
                  </strong>{" "}
                  Request a copy of the personal data we hold about you.
                </li>
                <li>
                  <strong className="text-[var(--foreground)]">
                    Right to correct:
                  </strong>{" "}
                  Request correction of inaccurate or incomplete data.
                </li>
                <li>
                  <strong className="text-[var(--foreground)]">
                    Right to delete:
                  </strong>{" "}
                  Request deletion of your personal data, subject to legal
                  obligations.
                </li>
                <li>
                  <strong className="text-[var(--foreground)]">
                    Right to data portability:
                  </strong>{" "}
                  Request a machine-readable copy of your data in a commonly
                  used format.
                </li>
                <li>
                  <strong className="text-[var(--foreground)]">
                    Right to withdraw consent:
                  </strong>{" "}
                  Withdraw your consent for data processing at any time without
                  affecting the lawfulness of prior processing.
                </li>
                <li>
                  <strong className="text-[var(--foreground)]">
                    Right to opt out (CCPA):
                  </strong>{" "}
                  California residents may opt out of the sale of personal
                  information. We do not sell personal information.
                </li>
              </ul>
              <p className="mt-4 leading-relaxed">
                To exercise any of these rights, please contact us at{" "}
                <a
                  href="mailto:privacy@daolight.ai"
                  className="text-[var(--color-primary)] hover:underline"
                >
                  privacy@daolight.ai
                </a>
                . We will respond to your request within 30 days.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[var(--foreground)]">
                5. Cookies and Tracking Technologies
              </h2>
              <p className="mb-3">
                We use cookies and similar tracking technologies to enhance your
                experience. The types of cookies we use include:
              </p>
              <ul className="list-inside list-disc space-y-2 pl-2">
                <li>
                  <strong className="text-[var(--foreground)]">
                    Essential cookies:
                  </strong>{" "}
                  Required for the website to function properly (e.g., session
                  management, security).
                </li>
                <li>
                  <strong className="text-[var(--foreground)]">
                    Analytics cookies:
                  </strong>{" "}
                  Help us understand how visitors interact with our website via
                  Vercel Analytics. These cookies collect anonymous, aggregated
                  data.
                </li>
                <li>
                  <strong className="text-[var(--foreground)]">
                    Preference cookies:
                  </strong>{" "}
                  Remember your settings and preferences (e.g., theme selection).
                </li>
              </ul>
              <p className="mt-3 leading-relaxed">
                You can control cookie preferences through your browser
                settings. However, disabling certain cookies may affect the
                functionality of the website.
              </p>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[var(--foreground)]">
                6. Third-Party Services
              </h2>
              <p className="mb-3">
                We use the following third-party services to operate our
                platform:
              </p>
              <ul className="list-inside list-disc space-y-2 pl-2">
                <li>
                  <strong className="text-[var(--foreground)]">OpenAI:</strong>{" "}
                  Powers our AI reading interpretations. Your query text is sent
                  to OpenAI&apos;s API to generate readings. OpenAI does not
                  retain API data for model training.
                </li>
                <li>
                  <strong className="text-[var(--foreground)]">Vercel:</strong>{" "}
                  Our hosting platform. Vercel processes requests and may log
                  standard server data. See{" "}
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-primary)] hover:underline"
                  >
                    Vercel&apos;s Privacy Policy
                  </a>
                  .
                </li>
                <li>
                  <strong className="text-[var(--foreground)]">
                    Vercel Analytics:
                  </strong>{" "}
                  Provides anonymous, privacy-friendly website analytics. No
                  personal identifiers are stored.
                </li>
              </ul>
              <p className="mt-3 leading-relaxed">
                We do not share your personal information with any third parties
                for their marketing purposes.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[var(--foreground)]">
                7. Children&apos;s Privacy
              </h2>
              <p className="leading-relaxed">
                Dao Light is not directed to individuals under the age of 13. We
                do not knowingly collect personal information from children
                under 13. If we become aware that a child under 13 has provided
                us with personal information, we will take steps to delete such
                information promptly. If you believe we have collected
                information from a child under 13, please contact us at{" "}
                <a
                  href="mailto:privacy@daolight.ai"
                  className="text-[var(--color-primary)] hover:underline"
                >
                  privacy@daolight.ai
                </a>
                .
              </p>
            </section>

            {/* Changes to This Policy */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[var(--foreground)]">
                8. Changes to This Policy
              </h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. We will
                notify you of any material changes by posting the updated policy
                on this page with a revised &quot;Last Updated&quot; date. For
                significant changes, we may also notify you via email or a
                prominent notice on our website. Continued use of the Service
                after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[var(--foreground)]">
                9. Contact Us
              </h2>
              <p className="leading-relaxed">
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or our data practices, please contact us:
              </p>
              <div className="mt-4 rounded-lg border border-[var(--border)] bg-[var(--card)] p-5">
                <p className="font-medium text-[var(--foreground)]">
                  Dao Light — Privacy Team
                </p>
                <p className="mt-1">
                  Email:{" "}
                  <a
                    href="mailto:privacy@daolight.ai"
                    className="text-[var(--color-primary)] hover:underline"
                  >
                    privacy@daolight.ai
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
