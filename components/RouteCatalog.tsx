// components/RouteCatalog.tsx
"use client";

import { useState, useMemo, useEffect } from "react";
import { Route } from "@/data/routes";
import RouteCard from "@/components/RouteCard";
import { Locale } from "@/lib/i18n";
import { Search, MapPin, Sparkles, Filter, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface RouteCatalogProps {
  routes: Route[];
  lang: Locale;
}

const regionsList = [
  { id: "all", name: { tr: "Tüm Bölgeler", en: "All Regions" } },
  { id: "girne", name: { tr: "Girne", en: "Kyrenia" } },
  { id: "karpaz", name: { tr: "Karpaz", en: "Karpaz" } },
  { id: "magusa", name: { tr: "Gazimağusa", en: "Famagusta" } },
  { id: "lefkosa", name: { tr: "Lefkoşa", en: "Nicosia" } },
  { id: "iskele", name: { tr: "İskele", en: "Iskele" } },
  { id: "bati", name: { tr: "Güzelyurt & Lefke", en: "West Coast" } },
  { id: "daglar", name: { tr: "Dağlar & Köyler", en: "Mountains" } },
  { id: "signature", name: { tr: "İmza Rotalar", en: "Signature Tours" } },
];

const themesList = [
  { id: "all", name: { tr: "Tüm Temalar", en: "All Themes" } },
  { id: "history", name: { tr: "🏛️ Tarih & Kültür", en: "🏛️ History" } },
  { id: "coast", name: { tr: "🏖️ Sahil & Plaj", en: "🏖️ Coast" } },
  { id: "nature", name: { tr: "🌲 Doğa & Macera", en: "🌲 Nature" } },
  { id: "food", name: { tr: "🍷 Gastronomi", en: "🍷 Food" } },
  { id: "scenic", name: { tr: "📸 Manzara", en: "📸 Scenic" } },
  { id: "nightlife", name: { tr: "✨ Gece Hayatı", en: "✨ Nightlife" } },
];

export function RouteCatalog({ routes, lang }: RouteCatalogProps) {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedTheme, setSelectedTheme] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleUrlSync = () => {
      if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search);
        const reg = params.get("region");
        const thm = params.get("theme");
        if (reg && regionsList.some((r) => r.id === reg)) {
          setSelectedRegion(reg);
        } else if (!reg) {
          setSelectedRegion("all");
        }
        if (thm && themesList.some((t) => t.id === thm)) {
          setSelectedTheme(thm);
        } else if (!thm) {
          setSelectedTheme("all");
        }
      }
    };

    handleUrlSync();
    window.addEventListener("popstate", handleUrlSync);
    return () => window.removeEventListener("popstate", handleUrlSync);
  }, []);

  // Compute count of routes per region
  const regionCounts = useMemo(() => {
    const counts: Record<string, number> = { all: routes.length };
    routes.forEach((r) => {
      counts[r.region] = (counts[r.region] || 0) + 1;
    });
    return counts;
  }, [routes]);

  const filteredRoutes = useMemo(() => {
    return routes.filter((route) => {
      // Region filter
      if (selectedRegion !== "all" && route.region !== selectedRegion) {
        return false;
      }

      // Theme filter
      if (selectedTheme !== "all" && !route.themes?.includes(selectedTheme)) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const inTitle = route.title.toLowerCase().includes(query);
        const inSubtitle = route.subtitle.toLowerCase().includes(query);
        const inStops = route.stops.some((s) =>
          s.name.toLowerCase().includes(query)
        );
        if (!inTitle && !inSubtitle && !inStops) return false;
      }

      return true;
    });
  }, [routes, selectedRegion, selectedTheme, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Luxury Concierge Search & Filter Bar */}
      <div className="bg-card/90 backdrop-blur-xl rounded-3xl p-5 sm:p-7 border border-border/80 shadow-lg shadow-black/5 space-y-6">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
          <input
            type="text"
            placeholder={
              lang === "tr"
                ? "Rota, durak veya bölge ara (örn: Salamis, Bellapais, Kaplıca, Girne Limanı)..."
                : "Search routes, landmarks, or regions (e.g. Salamis, Bellapais, Golden Beach)..."
            }
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 sm:pl-14 pr-12 py-3.5 sm:py-4 bg-background/80 border border-border/70 rounded-2xl text-sm sm:text-base text-foreground placeholder:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all shadow-inner"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1.5 rounded-full hover:bg-muted transition cursor-pointer"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Region Filter Tabs */}
        <div className="space-y-2.5">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            <span>
              {lang === "tr" ? "Bölgeye Göre Keşfet" : "Explore by Destination"}
            </span>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {regionsList.map((reg) => {
              const count = regionCounts[reg.id] ?? 0;
              const isSelected = selectedRegion === reg.id;
              return (
                <button
                  key={reg.id}
                  type="button"
                  onClick={() => setSelectedRegion(reg.id)}
                  className={cn(
                    "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer border",
                    isSelected
                      ? "bg-primary text-primary-foreground border-primary shadow-[0_0_15px_rgba(234,88,12,0.25)] font-semibold scale-[1.02]"
                      : "bg-muted/50 text-muted-foreground border-transparent hover:bg-muted hover:text-foreground"
                  )}
                >
                  <span>{reg.name[lang]}</span>
                  {count > 0 && (
                    <span
                      className={cn(
                        "text-[10px] px-1.5 py-0.2 rounded-full font-mono font-bold",
                        isSelected
                          ? "bg-black/20 text-white"
                          : "bg-background/80 text-muted-foreground"
                      )}
                    >
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Theme Filter Pills */}
        <div className="space-y-2.5 pt-3 border-t border-border/50">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <Filter className="h-3.5 w-3.5 text-primary" />
            <span>
              {lang === "tr" ? "Yolculuk Teması" : "Trip Experience & Vibe"}
            </span>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {themesList.map((thm) => {
              const isSelected = selectedTheme === thm.id;
              return (
                <button
                  key={thm.id}
                  type="button"
                  onClick={() => setSelectedTheme(thm.id)}
                  className={cn(
                    "px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer border",
                    isSelected
                      ? "bg-foreground text-background border-foreground font-semibold shadow-xs"
                      : "border-border/60 bg-background/50 text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                  )}
                >
                  {thm.name[lang]}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Active Results Summary & Reset */}
      <div className="flex items-center justify-between px-1">
        <p className="text-sm font-medium text-muted-foreground">
          <span className="font-heading font-extrabold text-foreground text-lg mr-1.5 tabular-nums">
            {filteredRoutes.length}
          </span>
          {lang === "tr"
            ? "özenle seçilmiş rota listeleniyor"
            : "curated routes available"}
        </p>
        {(selectedRegion !== "all" ||
          selectedTheme !== "all" ||
          searchQuery) && (
          <button
            type="button"
            onClick={() => {
              setSelectedRegion("all");
              setSelectedTheme("all");
              setSearchQuery("");
            }}
            className="inline-flex items-center gap-1 text-xs text-primary font-semibold hover:underline cursor-pointer"
          >
            <span>{lang === "tr" ? "Filtreleri Sıfırla" : "Reset Filters"}</span>
          </button>
        )}
      </div>

      {/* Routes Grid */}
      {filteredRoutes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredRoutes.map((route) => (
            <RouteCard key={route.slug} route={route} lang={lang} />
          ))}
        </div>
      ) : (
        <div className="bg-card/70 backdrop-blur-md rounded-3xl border border-dashed border-border p-12 sm:p-16 text-center space-y-4 shadow-xs">
          <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto ring-8 ring-primary/5">
            <Sparkles className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-heading font-bold text-foreground">
            {lang === "tr" ? "Uygun rota bulunamadı" : "No matching journeys found"}
          </h3>
          <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
            {lang === "tr"
              ? "Arama kriterlerinizi veya filtrelerinizi değiştirerek daha fazla ada rotası keşfedebilirsiniz."
              : "Try adjusting your search criteria or resetting filters to explore more curated road trips."}
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedRegion("all");
              setSelectedTheme("all");
              setSearchQuery("");
            }}
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 transition cursor-pointer"
          >
            {lang === "tr" ? "Tüm Rotaları Göster" : "View All Routes"}
          </button>
        </div>
      )}
    </div>
  );
}

export default RouteCatalog;
