// components/RouteCatalog.tsx
"use client";

import { useState, useMemo, useEffect } from "react";
import { Route } from "@/data/routes";
import RouteCard from "@/components/RouteCard";
import { Locale } from "@/lib/i18n";
import { Search, MapPin, Sparkles, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

interface RouteCatalogProps {
  routes: Route[];
  lang: Locale;
}

const regionsList = [
  { id: "all", name: { tr: "Tümü", en: "All Regions" } },
  { id: "lefkosa", name: { tr: "Lefkoşa", en: "Nicosia" } },
  { id: "girne", name: { tr: "Girne", en: "Kyrenia" } },
  { id: "magusa", name: { tr: "Gazimağusa", en: "Famagusta" } },
  { id: "iskele", name: { tr: "İskele", en: "Iskele" } },
  { id: "karpaz", name: { tr: "Karpaz", en: "Karpaz" } },
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
        const inStops = route.stops.some((s) => s.name.toLowerCase().includes(query));
        if (!inTitle && !inSubtitle && !inStops) return false;
      }

      return true;
    });
  }, [routes, selectedRegion, selectedTheme, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Search & Filter Bar */}
      <div className="bg-card/80 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-border shadow-xs space-y-5">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder={
              lang === "tr"
                ? "Rota, durak veya bölge ara (örn: Salamis, Bellapais, Kaplıca)..."
                : "Search routes, stops, or regions (e.g. Salamis, Bellapais, Golden Beach)..."
            }
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-primary/40 transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground px-2 py-1 rounded-md cursor-pointer"
            >
              {lang === "tr" ? "Temizle" : "Clear"}
            </button>
          )}
        </div>

        {/* Region Filter Tabs */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            <span>{lang === "tr" ? "Bölgeye Göre Filtrele" : "Filter by Region"}</span>
          </div>
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-none">
            {regionsList.map((reg) => (
              <button
                key={reg.id}
                type="button"
                onClick={() => setSelectedRegion(reg.id)}
                className={cn(
                  "px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer",
                  selectedRegion === reg.id
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {reg.name[lang]}
              </button>
            ))}
          </div>
        </div>

        {/* Theme Filter Pills */}
        <div className="space-y-2 pt-2 border-t border-border/50">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <Filter className="h-3.5 w-3.5 text-primary" />
            <span>{lang === "tr" ? "Temaya Göre Filtrele" : "Filter by Theme"}</span>
          </div>
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-none">
            {themesList.map((thm) => (
              <button
                key={thm.id}
                type="button"
                onClick={() => setSelectedTheme(thm.id)}
                className={cn(
                  "px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-all cursor-pointer border",
                  selectedTheme === thm.id
                    ? "bg-foreground text-background border-foreground shadow-xs"
                    : "border-border/60 text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                )}
              >
                {thm.name[lang]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active Results Summary */}
      <div className="flex items-center justify-between px-1">
        <p className="text-sm font-medium text-muted-foreground">
          <span className="font-bold text-foreground text-base mr-1">
            {filteredRoutes.length}
          </span>
          {lang === "tr" ? "rota bulundu" : "routes available"}
        </p>
        {(selectedRegion !== "all" || selectedTheme !== "all" || searchQuery) && (
          <button
            type="button"
            onClick={() => {
              setSelectedRegion("all");
              setSelectedTheme("all");
              setSearchQuery("");
            }}
            className="text-xs text-primary font-medium hover:underline cursor-pointer"
          >
            {lang === "tr" ? "Filtreleri Sıfırla" : "Reset Filters"}
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
        <div className="bg-card rounded-2xl border border-dashed border-border p-12 text-center space-y-4">
          <Sparkles className="h-10 w-10 text-muted-foreground mx-auto" />
          <h3 className="text-lg font-bold text-foreground">
            {lang === "tr" ? "Uygun rota bulunamadı" : "No matching routes found"}
          </h3>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            {lang === "tr"
              ? "Arama kriterlerinizi veya filtrelerinizi değiştirerek tekrar deneyebilirsiniz."
              : "Try adjusting your search criteria or resetting filters to explore more journeys."}
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedRegion("all");
              setSelectedTheme("all");
              setSearchQuery("");
            }}
            className="inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-semibold bg-primary text-primary-foreground hover:opacity-90 transition"
          >
            {lang === "tr" ? "Tüm Rotaları Göster" : "View All Routes"}
          </button>
        </div>
      )}
    </div>
  );
}
export default RouteCatalog;
