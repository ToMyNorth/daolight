import Link from "next/link";
import { CircleDot } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--card)]">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 text-[var(--foreground)]">
              <CircleDot className="h-6 w-6 text-[var(--color-primary)]" />
              <span className="text-lg font-bold">{siteConfig.name}</span>
            </Link>
            <p className="mt-3 text-sm text-[var(--muted-foreground)]">
              Ancient Eastern wisdom meets modern AI technology. Explore I Ching,
              Tarot, Horoscopes, and Five Elements personality insights.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--foreground)]">
              Explore
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--color-primary)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--foreground)]">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--color-primary)]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--color-primary)]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--color-primary)]"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--color-primary)]"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-10 border-t border-[var(--border)] pt-6">
          <p className="mb-2 text-xs text-[var(--muted-foreground)]">
            * For entertainment purposes only. Not a substitute for professional advice.
          </p>
          <p className="text-xs text-[var(--muted-foreground)]">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
