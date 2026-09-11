// components/RoutesGrid.tsx
import { routes } from "@/data/routes";
import RouteCard from "@/components/RouteCard";

export default function RoutesGrid() {
  // Show all routes on homepage
  return (
    <section
      id="routes"
      className="py-12 sm:py-16 lg:py-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
    >
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
