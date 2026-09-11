// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  ChevronRight,
  Compass,
  Info,
  Star,
  Car,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { LOGO } from "@/lib/assets";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getDictionary, Locale } from "@/lib/i18n";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Active locale
  const lang: Locale = pathname?.startsWith("/en") ? "en" : "tr";
  const dict = getDictionary(lang);

  const navLinks = [
    { name: dict.nav.exploreItineraries, href: `/${lang}/routes`, icon: Compass },
    { name: dict.nav.about, href: `/${lang}/about`, icon: Info },
    { name: dict.nav.testimonials, href: `/${lang}/testimonials`, icon: Star },
    { name: dict.nav.drivingGuide, href: `/${lang}/guide`, icon: Car },
    { name: dict.nav.faq, href: `/${lang}/faq`, icon: HelpCircle },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Logo */}
        <Link
          href={`/${lang}`}
          className="flex items-center gap-2 shrink-0 font-semibold transition-opacity hover:opacity-90"
        >
          <Image
            src={LOGO}
            alt="Drive North Cyprus"
            width={140}
            height={88}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Center: Navigation (desktop only) */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-1">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.name}>
                <NavigationMenuLink asChild>
                  <Link
                    href={link.href}
                    className="px-3.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary rounded-md"
                  >
                    {link.name}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right: Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Language Switcher */}
          <LanguageSwitcher variant="pill" />

          {/* Theme Toggle (desktop) */}
          <div className="hidden sm:flex">
            <ThemeToggle />
          </div>

          <Button asChild size="sm" className="hidden lg:inline-flex rounded-lg shadow-xs font-medium">
            <Link href={`/${lang}/routes`}>{dict.nav.getStarted}</Link>
          </Button>

          {/* Mobile Navigation Drawer */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="flex flex-col justify-between w-[320px] sm:w-[380px] p-6 sm:p-8 border-l border-border bg-background text-foreground shadow-2xl"
            >
              <div className="flex flex-col gap-6">
                {/* Header with Logo */}
                <SheetHeader className="text-left pb-5 border-b border-border/60">
                  <SheetTitle asChild>
                    <Link
                      href={`/${lang}`}
                      onClick={() => setIsOpen(false)}
                      className="transition-opacity hover:opacity-90 inline-block"
                    >
                      <Image
                        src={LOGO}
                        alt="Drive North Cyprus"
                        width={140}
                        height={88}
                        className="h-9 w-auto"
                      />
                    </Link>
                  </SheetTitle>
                  <SheetDescription className="sr-only">
                    Navigation menu for Drive North Cyprus
                  </SheetDescription>
                </SheetHeader>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-2">
                  {navLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-accent/80 transition-all duration-150 active:scale-[0.98]"
                      >
                        <div className="flex items-center gap-3.5">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                            <Icon className="h-4 w-4" />
                          </div>
                          <span className="text-sm font-medium">{item.name}</span>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground/40 transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Footer Area: Language, Theme & Action */}
              <div className="mt-auto pt-6 border-t border-border/60 flex flex-col gap-3.5">
                {/* Mobile Language Switcher Row */}
                <LanguageSwitcher variant="drawer" />

                {/* Mobile Theme Toggle Row */}
                <div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-muted/40 border border-border/40">
                  <span className="text-sm font-medium text-muted-foreground">{dict.nav.theme}</span>
                  <ThemeToggle />
                </div>

                <Button asChild size="lg" className="w-full h-11 font-medium rounded-xl shadow-xs mt-2">
                  <Link href={`/${lang}/routes`} onClick={() => setIsOpen(false)}>
                    {dict.nav.getStarted}
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
