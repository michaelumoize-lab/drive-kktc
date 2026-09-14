// app/[lang]/routes/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRoutes, getRouteBySlug } from "@/data/routes";
import {
  MapPin,
  Clock,
  ArrowLeft,
  Navigation,
  Compass,
  Lightbulb,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShareButton } from "@/components/ShareButton";
import { RouteTimeline } from "@/components/RouteTimeline";
import { RouteMap } from "@/components/RouteMap";
import { RouteStopsSection } from "@/components/RouteStopsSection";
import { PracticalInfoGrid } from "@/components/PracticalInfoGrid";
import { locales, Locale, getDictionary, isValidLocale } from "@/lib/i18n";

// Generate static paths for all languages and routes
export function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  for (const lang of locales) {
    for (const route of getRoutes(lang)) {
      params.push({ lang, slug: route.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const currentLocale: Locale = isValidLocale(lang) ? lang : "tr";
  const route = getRouteBySlug(slug, currentLocale);

  if (!route) {
    return {
      title: currentLocale === "tr" ? "Rota Bulunamadı" : "Route Not Found",
    };
  }

  return {
    title: `${route.seo.title} | Drive North Cyprus`,
    description: route.seo.description,
    alternates: {
      canonical: `/${currentLocale}/routes/${slug}`,
      languages: {
        tr: `/tr/routes/${slug}`,
        en: `/en/routes/${slug}`,
      },
    },
    openGraph: {
      title: route.seo.title,
      description: route.seo.description,
      images: [route.heroImage],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: route.seo.title,
      description: route.seo.description,
      images: [route.heroImage],
    },
  };
}

export default async function RouteDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang: rawLang, slug } = await params;
  const lang: Locale = isValidLocale(rawLang) ? rawLang : "tr";
  const dict = getDictionary(lang);
  const route = getRouteBySlug(slug, lang);

  if (!route) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background pb-24 overflow-x-clip">
      {/* 1. Cinematic Hero Section */}
      <section className="relative h-[60vh] min-h-[480px] flex items-end bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={route.heroImage}
            alt={route.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          {/* Multi-layered lighting scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/30" />
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black/60 to-transparent" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 pb-16">
          <div className="max-w-4xl space-y-4 text-left">
            {/* Back Button Pill */}
            <Link
              href={`/${lang}/routes`}
              className="inline-flex items-center gap-2 text-white/90 hover:text-white bg-black/35 hover:bg-black/50 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all group shadow-sm"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              <span>{dict.common.backToAllRoutes}</span>
            </Link>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="bg-primary text-primary-foreground border-0 shadow-md px-3.5 py-1 font-semibold text-xs rounded-full">
                {route.theme}
              </Badge>
            </div>

            {/* Title & Subtitle */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.08] drop-shadow-sm">
              {route.title}
            </h1>
            <p className="text-base sm:text-xl text-zinc-200 max-w-3xl leading-relaxed text-pretty drop-shadow-sm">
              {route.subtitle}
            </p>

            {/* Local Curator Signature */}
            {route.proposers && route.proposers.length > 0 && (
              <div className="pt-1">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-white/90 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-sm">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  <span className="text-white/70">
                    {lang === "tr" ? "Yerel Öneri: " : "Curated with: "}
                  </span>
                  <span className="font-semibold text-white tracking-wider">
                    {route.proposers.join(", ")}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 2. Floating Quick Stats & Action Ribbon */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-10 relative z-20 mb-14">
        <div className="bg-card/95 backdrop-blur-xl rounded-3xl border border-border/80 shadow-2xl p-6 sm:p-7 flex flex-col 2xl:flex-row items-stretch 2xl:items-center justify-between gap-6">
          {/* Key Metric Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 items-center">
            {/* 1. Duration */}
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary shrink-0 border border-primary/20">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">
                  {dict.common.duration}
                </p>
                <p className="text-sm sm:text-base font-heading font-bold text-foreground whitespace-nowrap">
                  {route.duration}
                </p>
              </div>
            </div>

            {/* 2. Distance */}
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary shrink-0 border border-primary/20">
                <Navigation className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">
                  {dict.common.distance}
                </p>
                <p className="text-sm sm:text-base font-heading font-bold text-foreground whitespace-nowrap">
                  {route.distance}
                </p>
              </div>
            </div>

            {/* 3. Start / Finish */}
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary shrink-0 border border-primary/20">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">
                  {dict.common.startFinish}
                </p>
                <p className="text-sm sm:text-base font-heading font-bold text-foreground truncate">
                  {route.startFinish}
                </p>
              </div>
            </div>

            {/* 4. Total Stops */}
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary shrink-0 border border-primary/20">
                <Compass className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">
                  {dict.common.totalStops}
                </p>
                <p className="text-sm sm:text-base font-heading font-bold text-foreground whitespace-nowrap">
                  {route.stops.length} {dict.common.waypoints}
                </p>
              </div>
            </div>
          </div>

          {/* Action Triggers */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 pt-4 2xl:pt-0 border-t 2xl:border-t-0 2xl:border-l border-border/60 2xl:pl-6 shrink-0">
            <Button
              asChild
              variant="default"
              size="sm"
              className="rounded-xl h-11 px-5 gap-2 font-semibold shadow-md shadow-primary/20 flex-1 sm:flex-none"
            >
              <a href="#stops">
                <MapPin className="h-4 w-4" />
                <span>{dict.common.exploreStops}</span>
              </a>
            </Button>
            {route.mapEmbedUrl && (
              <Button
                asChild
                variant="outline"
                size="sm"
                className="rounded-xl h-11 px-5 gap-2 font-semibold flex-1 sm:flex-none border-border/80"
              >
                <a href="#route-map">
                  <Navigation className="h-4 w-4 text-primary" />
                  <span>{dict.common.interactiveMap}</span>
                </a>
              </Button>
            )}
            <div className="w-full sm:w-32 shrink-0">
              <ShareButton title={route.title} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Page Flow Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">
        {/* 3. Narrative & Overview Section */}
        <section className="max-w-4xl space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full mb-3 border border-primary/20">
              <Compass className="h-3.5 w-3.5" />
              <span>{dict.routeDetail.overviewTag}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">
              {dict.routeDetail.aboutTitle}
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed text-pretty">
              {route.intro}
            </p>
          </div>

          {/* Timeline schedule breakdown */}
          {route.suggestedStart && (
            <RouteTimeline
              stops={route.stops}
              suggestedStart={route.suggestedStart}
              lang={lang}
            />
          )}
        </section>

        {/* 4. Insider Tip Callout */}
        {route.insiderTip && (
          <section className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-500 ring-4 ring-amber-500/10">
                <Lightbulb className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-amber-500">
                  <span>{dict.routeDetail.insiderTipTag}</span>
                </div>
                <p className="text-base sm:text-lg italic text-foreground/90 leading-relaxed font-serif">
                  &ldquo;{route.insiderTip}&rdquo;
                </p>
              </div>
            </div>
          </section>
        )}

        {/* 5. The Stops Journey */}
        <RouteStopsSection stops={route.stops} lang={lang} />

        {/* 6. Interactive Route Map Section */}
        {route.mapEmbedUrl && (
          <section id="route-map" className="scroll-mt-24 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full mb-2 border border-primary/20">
                  <Navigation className="h-3.5 w-3.5" />
                  <span>{dict.routeDetail.gpsTag}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
                  {dict.routeDetail.mapTitle}
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {dict.routeDetail.mapSubtitle}
                </p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-border/80 shadow-xl">
              <RouteMap
                embedUrl={route.mapEmbedUrl}
                title={`${route.title} - Interactive Route Map`}
              />
            </div>
          </section>
        )}

        {/* 7. Practical Information Bento Grid */}
        <section className="pt-4 border-t border-border/60">
          <PracticalInfoGrid info={route.practicalInfo} lang={lang} />
        </section>

        {/* 8. Bottom Navigation & CTA Banner */}
        <section className="rounded-3xl bg-muted/40 border border-border/70 p-8 sm:p-12 text-center space-y-6 shadow-sm">
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
            {dict.routeDetail.ctaTitle}
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            {dict.routeDetail.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
            <Button
              asChild
              size="lg"
              className="rounded-xl px-7 h-12 font-semibold shadow-lg shadow-primary/20 w-full sm:w-auto"
            >
              <Link href={`/${lang}/routes`}>
                {dict.routeDetail.exploreMore}
              </Link>
            </Button>
            <div className="w-full sm:w-44">
              <ShareButton title={route.title} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
