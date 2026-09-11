// components/Footer.tsx
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import { LOGO } from "@/lib/assets";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Social media links - update with your actual URLs
  const socialLinks = {
    facebook: "https://facebook.com/drivekktc",
    twitter: "https://twitter.com/drivekktc",
    instagram: "https://instagram.com/drivekktc",
    youtube: "https://youtube.com/@drivekktc",
  };

  return (
    <footer className="bg-card border-t border-border" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block"
              aria-label="Drive KKTC Home"
            >
              <Image
                src={LOGO}
                alt="Drive KKTC - Northern Cyprus Travel Guide"
                width={140}
                height={88}
                className="h-12 w-auto"
                priority
              />
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              Curated driving routes and travel guides for Northern Cyprus.
              Explore hidden castles, golden beaches, and local culture.
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
              Quick Links
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#routes"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Explore Routes
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/guide"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Driving Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Routes */}
          <div>
            <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Popular Routes
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/routes"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  View All Routes
                </Link>
              </li>
              <li>
                <Link
                  href="/routes/kyrenia-heritage-coastal"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Kyrenia Heritage Loop
                </Link>
              </li>
              <li>
                <Link
                  href="/routes/famagusta-history-loop"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Famagusta History Loop
                </Link>
              </li>
              <li>
                <Link
                  href="/routes/karpaz-nature-loop"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Karpaz Nature Loop
                </Link>
              </li>
              <li>
                <Link
                  href="/routes/nicosia-old-city-loop"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Nicosia City Loop
                </Link>
              </li>
              {/* ✅ Added Güzelyurt */}
              <li>
                <Link
                  href="/routes/guzelyurt-lefke-heritage"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Güzelyurt & Lefke Loop
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Contact
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Northern Cyprus</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@drivekktc.com"
                  className="hover:text-primary transition-colors"
                >
                  info@drivekktc.com
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
            © {currentYear} Drive KKTC. All rights reserved.
          </p>
          <nav className="flex gap-6 text-xs" aria-label="Legal">
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Cookie Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
