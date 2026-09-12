// components/Hero.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, Compass, MapPin, ShieldCheck } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { HERO_BG, HERO_IMAGES } from "@/lib/assets";
import { getDictionary, Locale } from "@/lib/i18n";

// Slide metadata for regional destination discovery
const SLIDE_METADATA: Record<
  Locale,
  Array<{ region: string; landmark: string }>
> = {
  en: [
    { region: "Kyrenia / Girne", landmark: "Old Venetian Harbour & Castle" },
    { region: "Karpaz Peninsula", landmark: "Golden Beach & Wild Coast" },
    { region: "Famagusta / Gazimağusa", landmark: "Ancient Walled City Ruins" },
    { region: "Nicosia / Lefkoşa", landmark: "Historic Old Town & Venetian Walls" },
  ],
  tr: [
    { region: "Girne", landmark: "Tarihi Venedik Limanı ve Kalesi" },
    { region: "Karpaz Yarımadası", landmark: "Altın Kumsal ve Vahşi Sahil" },
    { region: "Gazimağusa", landmark: "Tarihi Surlar ve Antik Kalıntılar" },
    { region: "Lefkoşa", landmark: "Tarihi Surlar ve Eski Şehir" },
  ],
};

export default function Hero() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const pathname = usePathname();
  const lang: Locale = pathname?.startsWith("/en") ? "en" : "tr";
  const dict = getDictionary(lang);
  const activeMetadata = SLIDE_METADATA[lang] ?? SLIDE_METADATA.en;

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
      className="relative min-h-[calc(100vh-80px)] flex items-center justify-center bg-black overflow-hidden"
      aria-label="Hero"
    >
      {/* Fallback for no-JS / crawlers */}
      <noscript>
        <Image
          src={HERO_BG}
          alt="Northern Cyprus scenic road trip"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </noscript>

      {/* Cinematic Background Carousel */}
      <div className="absolute inset-0 z-0">
        <Carousel
          opts={{ loop: true, align: "start" }}
          plugins={
            prefersReducedMotion
              ? []
              : [
                  Autoplay({
                    delay: 5500,
                    stopOnInteraction: false,
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
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="100vw"
                    className={`object-cover transition-transform duration-1000 ease-out ${
                      current === index ? "scale-105" : "scale-100"
                    }`}
                    priority={index === 0}
                    loading={index === 0 ? undefined : "lazy"}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Multi-layered Atmospheric Scrims */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-black/85 via-black/45 to-black/30" />
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-black/90 via-black/60 to-transparent md:w-3/4" />
      <div className="absolute top-0 inset-x-0 h-32 z-10 pointer-events-none bg-gradient-to-b from-black/60 via-transparent to-transparent" />

      {/* Hero Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 py-16 md:py-20 lg:py-24">
        <div className="max-w-3xl space-y-7 text-white text-left">
          {/* Eyebrow Pill with Live Beacon */}
          <div className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/15 backdrop-blur-md text-white/95 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full border border-white/20 shadow-lg transition-all">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span>{dict.hero.badge}</span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08]">
            {dict.hero.titleLine1} <br />
            <span className="bg-gradient-to-r from-primary via-orange-400 to-amber-300 bg-clip-text text-transparent drop-shadow-sm">
              {dict.hero.titleHighlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-zinc-200 font-normal leading-relaxed max-w-2xl text-pretty drop-shadow-sm">
            {dict.hero.subtitle}
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href={`/${lang}#routes`}
              className="group inline-flex items-center justify-center gap-2.5 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-xl shadow-[0_0_30px_rgba(234,88,12,0.35)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{dict.hero.exploreButton}</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href={`/${lang}/about`}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 active:bg-white/15 backdrop-blur-md text-white font-medium px-7 py-4 rounded-xl border border-white/25 hover:border-white/40 shadow-sm transition-all duration-300"
            >
              <span>{dict.hero.learnMoreButton}</span>
            </Link>
          </div>

          {/* Floating Glassmorphic Stats Strip */}
          <div className="pt-4">
            <div className="inline-grid grid-cols-3 gap-3 sm:gap-6 bg-black/40 backdrop-blur-xl border border-white/15 rounded-2xl p-4 sm:p-5 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex h-10 w-10 shrink-0 rounded-xl bg-primary/20 items-center justify-center border border-primary/30 text-primary">
                  <Compass className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xl sm:text-2xl font-extrabold text-white tabular-nums">
                    {dict.hero.curatedRoutesCount}
                  </span>
                  <span className="text-xs sm:text-sm text-zinc-300 font-medium">
                    {dict.hero.curatedRoutesLabel}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 border-l border-white/15 pl-3 sm:pl-6">
                <div className="hidden sm:flex h-10 w-10 shrink-0 rounded-xl bg-primary/20 items-center justify-center border border-primary/30 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xl sm:text-2xl font-extrabold text-white tabular-nums">
                    {dict.hero.stopsCount}
                  </span>
                  <span className="text-xs sm:text-sm text-zinc-300 font-medium">
                    {dict.hero.stopsLabel}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 border-l border-white/15 pl-3 sm:pl-6">
                <div className="hidden sm:flex h-10 w-10 shrink-0 rounded-xl bg-primary/20 items-center justify-center border border-primary/30 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xl sm:text-2xl font-extrabold text-primary tabular-nums">
                    {dict.hero.localTipsPercent}
                  </span>
                  <span className="text-xs sm:text-sm text-zinc-300 font-medium">
                    {dict.hero.localTipsLabel}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Active Location Card (Bottom Right - Desktop/Tablet) */}
      <div className="hidden md:flex absolute bottom-8 right-8 z-20 items-center gap-3 bg-black/45 backdrop-blur-md border border-white/15 px-4 py-2 rounded-full text-white shadow-xl">
        <MapPin className="h-4 w-4 text-primary shrink-0 animate-pulse" />
        <div className="text-xs">
          <span className="font-semibold text-white">
            {activeMetadata[current]?.region || "Northern Cyprus"}
          </span>
          <span className="text-zinc-400 mx-1.5">•</span>
          <span className="text-zinc-300">
            {activeMetadata[current]?.landmark}
          </span>
        </div>
        <span className="text-[11px] font-mono bg-white/10 px-2 py-0.5 rounded-full text-zinc-300 border border-white/10 ml-1">
          0{current + 1} / 0{HERO_IMAGES.length}
        </span>
      </div>

      {/* Elegant Progress Indicator Pill */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/35 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full"
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
            className={`h-1.5 rounded-full transition-all duration-500 ${
              current === index
                ? "w-8 bg-primary"
                : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
