// components/Hero.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, MapPin } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { HERO_BG, HERO_IMAGES } from "@/lib/assets";

export default function Hero() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section
      className="relative min-h-[calc(100vh-80px)] flex items-center bg-background overflow-hidden"
      aria-label="Hero"
    >
      {/* Static fallback for no-JS / crawlers */}
      <noscript>
        <Image
          src={HERO_BG}
          alt="Northern Cyprus scenic road trip"
          fill
          className="object-cover"
        />
      </noscript>

      <div className="absolute inset-0 z-0">
        <Carousel
          opts={{ loop: true, align: "start" }}
          plugins={
            prefersReducedMotion
              ? []
              : [
                  Autoplay({
                    delay: 5000,
                    stopOnInteraction: true,
                    stopOnMouseEnter: true,
                  }),
                ]
          }
          setApi={setApi}
          className="w-full h-full"
        >
          <CarouselContent className="h-full ml-0">
            {HERO_IMAGES.map((image, index) => (
              <CarouselItem key={image.src} className="h-full pl-0 basis-full">
                <div className="relative h-full w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority={index === 0}
                    loading={index === 0 ? undefined : "lazy"}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className="left-4 md:left-8 hidden md:flex bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 border-0"
            aria-label="Previous image"
          />
          <CarouselNext
            className="right-4 md:right-8 hidden md:flex bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 border-0"
            aria-label="Next image"
          />
        </Carousel>
      </div>

      {/* Overlay: fixed black gradient — intentional, this sits on a photo, not the page bg, so it stays constant across light/dark mode */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />

      <div className="relative container mx-auto px-4 z-20">
        <div className="max-w-3xl space-y-6 text-white">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full border border-primary/30">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Northern Cyprus Travel Guide</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Discover Northern Cyprus, <br />
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Your Way
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
            Curated driving routes by locals. From hidden mountain castles to
            empty golden beaches. Pick your adventure.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="#routes"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-primary/30"
            >
              Explore Routes
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all"
            >
              Learn More
            </Link>
          </div>

          <div className="flex gap-8 pt-6 text-sm text-white/80 border-t border-white/20">
            <div>
              <span className="block text-2xl font-bold text-primary tabular-nums">
                5+
              </span>
              <span>Curated Routes</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-primary tabular-nums">
                25+
              </span>
              <span>Stops to Explore</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-primary tabular-nums">
                100%
              </span>
              <span>Local Tips</span>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel dot indicators — visible on all breakpoints, since prev/next arrows are desktop-only */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2"
        role="tablist"
        aria-label="Hero image selector"
      >
        {HERO_IMAGES.map((image, index) => (
          <button
            key={image.src}
            type="button"
            role="tab"
            aria-selected={current === index}
            aria-label={`Show image ${index + 1} of ${HERO_IMAGES.length}`}
            onClick={() => api?.scrollTo(index)}
            className={`h-1.5 rounded-full transition-all ${
              current === index
                ? "w-6 bg-primary"
                : "w-1.5 bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
