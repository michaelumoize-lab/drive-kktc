// components/RoutesGrid.tsx
import { routes } from "@/data/routes";
import RouteCard from "@/components/RouteCard";

export default function RoutesGrid() {
  return (
    <section id="routes" className="py-20 container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-2 text-foreground">
        Choose Your Drive
      </h2>
      <p className="text-muted-foreground mb-10">
        5 unique routes. Pick the one that fits your vibe.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {routes.map((route) => (
          <RouteCard key={route.slug} route={route} />
        ))}
      </div>
    </section>
  );
}
