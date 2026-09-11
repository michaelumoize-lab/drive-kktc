// app/routes/RoutesPage.tsx
import { getRoutes } from "@/data/routes";
import { RouteCatalog } from "@/components/RouteCatalog";
import { MapPin, Compass, Route } from "lucide-react";
import { getDictionary, Locale } from "@/lib/i18n";

export default function RoutesPage({ lang = "tr" }: { lang?: Locale }) {
  const dict = getDictionary(lang);
  const allRoutes = getRoutes(lang);
  const totalStops = allRoutes.reduce((acc, route) => acc + route.stops.length, 0);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-primary/5 mb-8 sm:mb-12">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              {lang === "tr" ? "Tüm Sürüş Rotaları" : "All Driving Routes"}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              {lang === "tr"
                ? "Kuzey Kıbrıs genelinde özenle seçilmiş 41 benzersiz sürüş ve keşif rotası. Dağ kalelerinden altın kumsallara adanın tüm güzelliklerini keşfedin."
                : "Explore 41 curated driving and road trip routes across Northern Cyprus. From ancient mountain fortresses to pristine beaches, discover the island like a local."}
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-6 mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="bg-card rounded-xl p-4 text-center border border-border shadow-xs">
            <Route className="h-6 w-6 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">
              {allRoutes.length}
            </p>
            <p className="text-xs text-muted-foreground">{dict.common.stats.curatedRoutes}</p>
          </div>
          <div className="bg-card rounded-xl p-4 text-center border border-border shadow-xs">
            <MapPin className="h-6 w-6 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">
              {totalStops}
            </p>
            <p className="text-xs text-muted-foreground">{dict.common.stats.stopsToExplore}</p>
          </div>
          <div className="bg-card rounded-xl p-4 text-center border border-border shadow-xs">
            <Compass className="h-6 w-6 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">%100</p>
            <p className="text-xs text-muted-foreground">{dict.common.stats.localTips}</p>
          </div>
        </div>
      </div>

      {/* Filterable Catalog Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <RouteCatalog routes={allRoutes} lang={lang} />
      </div>
    </main>
  );
}
