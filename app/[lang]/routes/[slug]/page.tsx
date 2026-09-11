// app/[lang]/routes/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { routes } from "@/data/routes";
import {
  MapPin,
  Clock,
  ArrowLeft,
  Navigation,
  Compass,
  Lightbulb,
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
    for (const route of routes) {
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
  const route = routes.find((r) => r.slug === slug);

  if (!route) {
    return { title: lang === "tr" ? "Rota Bulunamadı" : "Route Not Found" };
  }

  return {
    title: `${route.seo.title} | Drive North Cyprus`,
    description: route.seo.description,
    alternates: {
      canonical: `/${lang}/routes/${slug}`,
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
  const route = routes.find((r) => r.slug === slug);

  if (!route) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background pb-20 overflow-x-clip">
      {/* 1. Cinematic Hero Section */}
      <section className="relative h-[55vh] min-h-[420px] flex items-end bg-background overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={route.heroImage}
            alt={route.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/25" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 pb-12">
          <div className="max-w-4xl space-y-4 text-left">
            <Link
              href={`/${lang}/routes`}
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors group text-sm font-medium"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span>{dict.common.backToAllRoutes}</span>
            </Link>

            <div className="flex flex-wrap items-center gap-3">
              <Badge className="bg-primary/90 text-primary-foreground border-0 backdrop-blur-md px-3 py-1 font-medium">
                {route.theme}
              </Badge>
              <div className="flex items-center text-yellow-400 text-sm font-bold">
                {"★".repeat(route.rating)}
                {"☆".repeat(5 - route.rating)}
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              {route.title}
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl leading-relaxed">
              {route.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Floating Quick Stats & Action Ribbon */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20 mb-12">
        <div className="bg-card/95 backdrop-blur-md rounded-2xl border border-border/80 shadow-lg p-5 sm:p-6 flex flex-col 2xl:flex-row items-stretch 2xl:items-center justify-between gap-6">
          {/* Key Metric Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {/* 1. Duration */}
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">{dict.common.duration}</p>
                <p className="text-sm font-bold text-foreground whitespace-nowrap">
                  {route.duration}
                </p>
              </div>
            </div>

            {/* 2. Distance */}
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                <Navigation className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">{dict.common.distance}</p>
                <p className="text-sm font-bold text-foreground whitespace-nowrap">
                  {route.distance}
                </p>
              </div>
            </div>

            {/* 3. Start / Finish */}
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">{dict.common.startFinish}</p>
                <p className="text-sm font-bold text-foreground">
                  {route.startFinish}
                </p>
              </div>
            </div>

            {/* 4. Total Stops */}
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                <Compass className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">{dict.common.totalStops}</p>
                <p className="text-sm font-bold text-foreground whitespace-nowrap">
                  {route.stops.length} {dict.common.waypoints}
                </p>
              </div>
            </div>
          </div>

          {/* Action Triggers */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 pt-4 2xl:pt-0 border-t 2xl:border-t-0 2xl:border-l border-border/60 2xl:pl-6 shrink-0">
            <Button asChild variant="default" size="sm" className="rounded-xl gap-2 font-medium flex-1 sm:flex-none">
              <a href="#stops">
                <MapPin className="h-4 w-4" />
                <span>{dict.common.exploreStops}</span>
              </a>
            </Button>
            <Button asChild variant="outline" size="sm" className="rounded-xl gap-2 font-medium flex-1 sm:flex-none">
              <a href="#route-map">
                <Navigation className="h-4 w-4" />
                <span>{dict.common.interactiveMap}</span>
              </a>
            </Button>
            <div className="w-full sm:w-32 shrink-0">
              <ShareButton title={route.title} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Page Flow Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* 3. Narrative & Overview Section */}
        <section className="max-w-4xl space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
              <Compass className="h-3.5 w-3.5" />
              <span>{dict.routeDetail.overviewTag}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              {dict.routeDetail.aboutTitle}
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              {route.intro}
            </p>
          </div>

          {/* Timeline schedule breakdown */}
          {route.suggestedStart && (
            <RouteTimeline
              stops={route.stops}
              suggestedStart={route.suggestedStart}
            />
          )}
        </section>

        {/* 4. Insider Tip Callout */}
        {route.insiderTip && (
          <section className="relative overflow-hidden rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-amber-500 ring-4 ring-amber-500/10">
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
        <RouteStopsSection stops={route.stops} />

        {/* 6. Interactive Route Map Section */}
        {route.mapEmbedUrl && (
          <section id="route-map" className="scroll-mt-24 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full mb-2">
                  <Navigation className="h-3.5 w-3.5" />
                  <span>{dict.routeDetail.gpsTag}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  {dict.routeDetail.mapTitle}
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {dict.routeDetail.mapSubtitle}
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-border/80 shadow-md">
              <RouteMap
                embedUrl={route.mapEmbedUrl}
                title={`${route.title} - Interactive Route Map`}
              />
            </div>
          </section>
        )}

        {/* 7. Practical Information Bento Grid */}
        <section className="pt-4 border-t border-border/60">
          <PracticalInfoGrid info={route.practicalInfo} />
        </section>

        {/* 8. Bottom Navigation & CTA Banner */}
        <section className="rounded-2xl bg-muted/40 border border-border/60 p-8 text-center space-y-6">
          <h3 className="text-2xl font-bold text-foreground">
            {dict.routeDetail.ctaTitle}
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            {dict.routeDetail.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
            <Button asChild size="lg" className="rounded-xl px-6 w-full sm:w-auto">
              <Link href={`/${lang}/routes`}>{dict.routeDetail.exploreMore}</Link>
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
