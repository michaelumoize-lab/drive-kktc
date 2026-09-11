// components/Footer.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import { LOGO } from "@/lib/assets";
import { getDictionary, Locale } from "@/lib/i18n";

export default function Footer() {
  const pathname = usePathname();
  const lang: Locale = pathname?.startsWith("/en") ? "en" : "tr";
  const dict = getDictionary(lang);
  const currentYear = new Date().getFullYear();

  const socialLinks = {
    facebook: "https://facebook.com/drivenorthcyprus",
    twitter: "https://twitter.com/drivenorthcyprus",
    instagram: "https://instagram.com/drivenorthcyprus",
    youtube: "https://youtube.com/@drivenorthcyprus",
  };

  return (
    <footer className="bg-card border-t border-border" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link
              href={`/${lang}`}
              className="inline-block"
              aria-label="Drive North Cyprus Home"
            >
              <Image
                src={LOGO}
                alt="Drive North Cyprus - Kuzey Kıbrıs Yol Rehberi"
                width={140}
                height={88}
                className="h-12 w-auto"
                priority
              />
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              {dict.footer.tagline}
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="text-muted-foreground hover:text-[#1877F2] transition-colors"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
                className="text-muted-foreground hover:text-[#000000] transition-colors"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="text-muted-foreground hover:text-[#E4405F] transition-colors"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subscribe to our YouTube channel"
                className="text-muted-foreground hover:text-[#FF0000] transition-colors"
              >
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              {dict.footer.quickLinks}
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${lang}#routes`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {dict.footer.routes}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/about`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {dict.footer.aboutUs}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/guide`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {dict.footer.drivingGuide}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/testimonials`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {dict.footer.testimonials}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/faq`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {dict.footer.faq}
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Routes */}
          <div>
            <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              {dict.footer.routes}
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${lang}/routes`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {lang === "tr" ? "Tüm Rotaları İncele" : "View All Routes"}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/routes/kyrenia-heritage-coastal`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {lang === "tr" ? "Girne Sahil & Kale Rotası" : "Kyrenia Heritage Loop"}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/routes/famagusta-history-loop`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {lang === "tr" ? "Gazimağusa Tarih Rotası" : "Famagusta History Loop"}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/routes/karpaz-nature-loop`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {lang === "tr" ? "Karpaz Doğa & Altınkum" : "Karpaz Nature Loop"}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/routes/nicosia-old-city-loop`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {lang === "tr" ? "Lefkoşa Surlariçi Yürüyüşü" : "Nicosia City Loop"}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/routes/guzelyurt-lefke-heritage`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {lang === "tr" ? "Güzelyurt & Lefke Mirası" : "Güzelyurt & Lefke Loop"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              {dict.footer.contact}
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>{lang === "tr" ? "Kuzey Kıbrıs Türk Cumhuriyeti" : "Northern Cyprus"}</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@drivenorthcyprus.com"
                  className="hover:text-primary transition-colors"
                >
                  info@drivenorthcyprus.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+903928887766"
                  className="hover:text-primary transition-colors"
                >
                  +90 392 888 77 66
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Drive North Cyprus. {dict.footer.copyright}
          </p>
          <nav className="flex gap-6 text-xs" aria-label="Legal">
            <span className="text-muted-foreground">
              {dict.footer.privacyPolicy}
            </span>
            <span className="text-muted-foreground">
              {dict.footer.termsOfService}
            </span>
          </nav>
        </div>
      </div>
    </footer>
  );
}
