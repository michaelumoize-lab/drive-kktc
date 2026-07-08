// components/RoutesPage.tsx
import { routes } from "@/data/routes";
import RouteCard from "@/components/RouteCard";
import { MapPin, Compass, Route } from "lucide-react";

export default function RoutesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary/5 mb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              All Routes
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover all our curated driving routes across Northern Cyprus.
              Each route is crafted by locals to help you explore like a pro.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="container mx-auto px-4 -mt-6 ">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="bg-card rounded-xl p-4 text-center border border-border shadow-sm">
            <Route className="h-6 w-6 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">
              {routes.length}
            </p>
            <p className="text-xs text-muted-foreground">Curated Routes</p>
          </div>
          <div className="bg-card rounded-xl p-4 text-center border border-border shadow-sm">
            <MapPin className="h-6 w-6 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">
              {routes.reduce((acc, route) => acc + route.stops.length, 0)}
            </p>
            <p className="text-xs text-muted-foreground">Total Stops</p>
          </div>
          <div className="bg-card rounded-xl p-4 text-center border border-border shadow-sm">
            <Compass className="h-6 w-6 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">100%</p>
            <p className="text-xs text-muted-foreground">Local Tips</p>
          </div>
        </div>
      </div>

      {/* Routes Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {routes.map((route) => (
            <RouteCard key={route.slug} route={route} />
          ))}
        </div>
      </div>
    </main>
  );
}
