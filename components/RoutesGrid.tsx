// components/RoutesGrid.tsx
import { routes } from "@/data/routes";
import RouteCard from "@/components/RouteCard";
import { getDictionary, Locale } from "@/lib/i18n";

export default function RoutesGrid({ lang = "tr" }: { lang?: Locale }) {
  const dict = getDictionary(lang);

  return (
    <section
      id="routes"
      className="py-12 sm:py-16 lg:py-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl font-bold mb-2 text-foreground">
        {dict.routesGrid.title}
      </h2>
      <p className="text-muted-foreground mb-10">
        {dict.routesGrid.subtitle}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {routes.map((route) => (
          <RouteCard key={route.slug} route={route} lang={lang} />
        ))}
      </div>
    </section>
  );
}
