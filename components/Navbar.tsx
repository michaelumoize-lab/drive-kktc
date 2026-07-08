// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { LOGO } from "@/lib/assets";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Explore Itineraries", href: "/#routes" },
    { name: "About", href: "/about" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Driving Guide", href: "/guide" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-22 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src={LOGO}
            alt="Drive KKTC"
            width={160}
            height={100}
            className="h-full w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.name}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={link.href}
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md px-3 lg:px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      {link.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Button variant="ghost" size="sm" className="gap-1 hidden lg:flex">
            <Globe className="h-4 w-4" />
            <span>EN | TRY 8</span>
          </Button>

          <Button asChild className="hidden lg:inline-flex">
            <Link href="/#routes">Get Started</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[350px] p-4 sm:p-6"
          >
            <SheetHeader className="mb-4">
              <SheetTitle className="flex items-center gap-2">
                <Image
                  src={LOGO}
                  alt="Drive KKTC"
                  width={140}
                  height={88}
                  className="h-12 w-auto"
                />
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="rounded-md px-4 py-3 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="my-2" />
              <div className="flex items-center gap-2 px-4 py-2 text-sm">
                <Globe className="h-4 w-4" />
                <span>EN | TRY 8</span>
              </div>
              <Button
                asChild
                className="mt-2 mx-4"
                onClick={() => setIsOpen(false)}
              >
                <Link href="/#routes">Get Started</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
