// components/RouteCard.tsx
import { Badge } from "@/components/ui/badge";
import { Route } from "@/data/routes";
import {
  Calendar,
  Clock,
  MapPin,
  Navigation,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getDictionary, Locale } from "@/lib/i18n";

const regionNames: Record<string, { tr: string; en: string }> = {
  lefkosa: { tr: "Lefkoşa", en: "Nicosia" },
  girne: { tr: "Girne", en: "Kyrenia" },
  magusa: { tr: "Gazimağusa", en: "Famagusta" },
  iskele: { tr: "İskele & Doğu", en: "Iskele & East" },
  karpaz: { tr: "Karpaz", en: "Karpaz" },
  bati: { tr: "Güzelyurt & Lefke", en: "West Coast" },
  daglar: { tr: "Dağlar & Köyler", en: "Mountains" },
  signature: { tr: "İmza Tur", en: "Signature Tour" },
};

export default function RouteCard({
  route,
  lang = "tr",
}: {
  route: Route;
  lang?: Locale;
}) {
  const dict = getDictionary(lang);

  // Calculate difficulty based on distance
  const getDifficulty = () => {
    const distance = parseInt(route.distance);
    if (distance > 100) {
      return {
        label: dict.common.difficulty.moderate,
        dotColor: "bg-amber-400",
        badgeBg: "bg-amber-500/15 border-amber-400/30 text-amber-200",
      };
    }
    if (distance > 50) {
      return {
        label: dict.common.difficulty.easy,
        dotColor: "bg-emerald-400",
        badgeBg: "bg-emerald-500/15 border-emerald-400/30 text-emerald-200",
      };
    }
    return {
      label: dict.common.difficulty.relaxed,
      dotColor: "bg-sky-400",
      badgeBg: "bg-sky-500/15 border-sky-400/30 text-sky-200",
    };
  };

  const getEntranceFee = (route: Route) => {
    const feeText = route.practicalInfo.entranceFees;

    if (
      feeText.toLowerCase().includes("free") ||
      feeText.toLowerCase().includes("ücretsiz")
    ) {
      return dict.common.free;
    }

    const match = feeText.match(/€(\d+(?:\.\d+)?)/);
    if (match) {
      return `${dict.common.from} €${match[1]}`;
    }

    return feeText.length > 20 ? feeText.slice(0, 18) + "…" : feeText;
  };

  const difficulty = getDifficulty();
  const regionLabel = regionNames[route.region]?.[lang] || route.region;

  return (
    <Link
      href={`/${lang}/routes/${route.slug}`}
      className="group block h-full select-none"
    >
      <div className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1.5 h-full flex flex-col border border-border/80">
        {/* Cover Photo Container (16:10 ratio) */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
          <Image
            src={route.heroImage}
            alt={route.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Multi-layered Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

          {/* Top Header Badges */}
          <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2 z-10">
            <div className="flex flex-wrap gap-1.5">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground shadow-md">
                {regionLabel}
              </span>
              {route.theme && (
                <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-black/40 backdrop-blur-md text-white/90 border border-white/20">
                  {route.theme}
                </span>
              )}
            </div>

            {/* Difficulty Badge with Status Dot */}
            <div
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium backdrop-blur-md border shadow-xs ${difficulty.badgeBg}`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${difficulty.dotColor}`}
              />
              <span>{difficulty.label}</span>
            </div>
          </div>

          {/* Title on Image Bottom */}
          <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10">
            <h3 className="text-lg sm:text-xl font-heading font-bold text-white leading-snug line-clamp-2 drop-shadow-sm group-hover:text-primary-foreground/90 transition-colors">
              {route.title}
            </h3>
          </div>
        </div>

        {/* Card Content & Telemetry */}
        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
          <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
            {route.subtitle}
          </p>

          {/* Modern Telemetry Grid */}
          <div className="grid grid-cols-2 gap-2.5 p-3 rounded-xl bg-muted/40 border border-border/50 text-xs mb-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Navigation className="h-3.5 w-3.5 text-primary shrink-0" />
              <span className="font-medium text-foreground truncate">
                {route.distance}
              </span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-3.5 w-3.5 text-primary shrink-0" />
              <span className="font-medium text-foreground truncate">
                {route.duration}
              </span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-3.5 w-3.5 text-primary shrink-0" />
              <span className="truncate">{dict.routesGrid.springAutumn}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
              <span>
                {route.stops.length} {dict.common.waypoints}
              </span>
            </div>
          </div>

          {/* Proposer / Contributor Badge */}
          {route.proposers && route.proposers.length > 0 && (
            <div className="mb-4 pt-1 text-[11px] text-muted-foreground flex items-center gap-1.5">
              <Sparkles className="h-3 w-3 text-primary shrink-0" />
              <span className="text-muted-foreground/80">
                {lang === "tr" ? "Yerel Öneri: " : "Curated by: "}
              </span>
              <span className="font-semibold text-foreground truncate">
                {route.proposers.join(", ")}
              </span>
            </div>
          )}

          {/* Card Footer & Action Button */}
          <div className="flex items-center justify-between pt-3 border-t border-border/60 mt-auto">
            <div>
              <span className="text-xs text-muted-foreground block">
                {lang === "tr" ? "Tahmini Giriş" : "Est. Entry"}
              </span>
              <span className="text-sm font-bold text-foreground">
                {getEntranceFee(route)}
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-xs sm:text-sm group-hover:gap-2.5 transition-all">
              <span>{dict.routesGrid.viewRoute}</span>
              <TrendingUp className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
