// app/routes/RoutesPage.tsx
import { routes } from "@/data/routes";
import RouteCard from "@/components/RouteCard";
import { MapPin, Compass, Route } from "lucide-react";
import { getDictionary, Locale } from "@/lib/i18n";

export default function RoutesPage({ lang = "tr" }: { lang?: Locale }) {
  const dict = getDictionary(lang);
  const totalStops = routes.reduce((acc, route) => acc + route.stops.length, 0);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-primary/5 mb-8 sm:mb-12">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              {lang === "tr" ? "Tüm Rotalar" : "All Routes"}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              {lang === "tr"
                ? "Kuzey Kıbrıs genelinde yerliler tarafından hazırlanan tüm rotalar. Adanın her köşesini bir kaşif gibi gezin."
                : "Discover all our curated driving routes across Northern Cyprus. Each route is crafted by locals to help you explore like a pro."}
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="bg-card rounded-xl p-4 text-center border border-border shadow-xs">
            <Route className="h-6 w-6 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">
              {routes.length}
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

      {/* Routes Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {routes.map((route) => (
            <RouteCard key={route.slug} route={route} lang={lang} />
          ))}
        </div>
      </div>
    </main>
  );
}
