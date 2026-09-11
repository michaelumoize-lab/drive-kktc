// components/RoutesGrid.tsx
import { getRoutes } from "@/data/routes";
import RouteCard from "@/components/RouteCard";
import { getDictionary, Locale } from "@/lib/i18n";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RoutesGrid({ lang = "tr" }: { lang?: Locale }) {
  const dict = getDictionary(lang);
  const allRoutes = getRoutes(lang);
  
  // Feature top diverse routes on homepage
  const featuredRoutes = allRoutes.slice(0, 6);

  return (
    <section
      id="routes"
      className="py-12 sm:py-16 lg:py-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
            <Compass className="h-3.5 w-3.5" />
            <span>{lang === "tr" ? "Öne Çıkan Güzergahlar" : "Featured Itineraries"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            {dict.routesGrid.title}
          </h2>
          <p className="text-muted-foreground mt-2 text-base">
            {dict.routesGrid.subtitle}
          </p>
        </div>

        <Button asChild variant="outline" className="hidden sm:inline-flex rounded-xl gap-2 font-medium">
          <Link href={`/${lang}/routes`}>
            <span>{lang === "tr" ? "Tüm 41 Rotayı Gör" : "View All 41 Routes"}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredRoutes.map((route) => (
          <RouteCard key={route.slug} route={route} lang={lang} />
        ))}
      </div>

      <div className="mt-12 text-center sm:hidden">
        <Button asChild size="lg" className="w-full rounded-xl gap-2 font-medium">
          <Link href={`/${lang}/routes`}>
            <span>{lang === "tr" ? "Tüm 41 Rotayı Gör" : "View All 41 Routes"}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
