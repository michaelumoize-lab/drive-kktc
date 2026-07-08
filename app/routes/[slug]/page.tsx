// app/routes/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { routes } from "@/data/routes";
import {
  MapPin,
  Clock,
  DollarSign,
  Car,
  Fuel,
  Utensils,
  Bus,
  ArrowLeft,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ShareButton } from "@/components/ShareButton";

// Generate static paths for all routes
export function generateStaticParams() {
  return routes.map((route) => ({
    slug: route.slug,
  }));
}

// Generate metadata – async because params is a Promise
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const route = routes.find((r) => r.slug === slug);

  if (!route) {
    return { title: "Route Not Found" };
  }

  return {
    title: route.seo.title,
    description: route.seo.description,
    openGraph: {
      title: route.seo.title,
      description: route.seo.description,
      images: [route.heroImage],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: route.seo.title,
      description: route.seo.description,
      images: [route.heroImage],
    },
  };
}

export default async function RoutePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const route = routes.find((r) => r.slug === slug);

  if (!route) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end bg-background overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={route.heroImage}
            alt={route.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="relative container mx-auto px-4 z-10 pb-12">
          <div className="max-w-4xl">
            <Link
              href="/#routes"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-4"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Routes</span>
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-3">
              <Badge className="bg-primary/20 text-primary-foreground border border-primary/30">
                {route.theme}
              </Badge>
              <div className="flex items-center text-yellow-400">
                {"★".repeat(route.rating)}
                {"☆".repeat(5 - route.rating)}
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
              {route.title}
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl">{route.subtitle}</p>

            <div className="flex flex-wrap gap-4 mt-4 text-sm text-white/80">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {route.duration}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {route.distance}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                Start: {route.startFinish}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                About This Route
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {route.intro}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 text-foreground">
                Stops Along the Way
              </h2>
              <div className="space-y-6">
                {route.stops.map((stop, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                          {index + 1}
                        </div>
                        <div className="flex-1 space-y-3">
                          <h3 className="text-xl font-semibold text-foreground">
                            {stop.name}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {stop.description}
                          </p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm bg-muted/30 p-3 rounded-lg">
                            {stop.visitTime && (
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <Clock className="h-3.5 w-3.5 text-primary" />
                                <span>{stop.visitTime}</span>
                              </div>
                            )}
                            {stop.openingHours &&
                              stop.openingHours !== "24/7" && (
                                <div className="flex items-center gap-2 text-muted-foreground">
                                  <Clock className="h-3.5 w-3.5 text-primary" />
                                  <span>{stop.openingHours}</span>
                                </div>
                              )}
                            {stop.entranceFee && (
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <DollarSign className="h-3.5 w-3.5 text-primary" />
                                <span>{stop.entranceFee}</span>
                              </div>
                            )}
                          </div>

                          {stop.tip && (
                            <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
                              <p className="text-sm flex items-start gap-2">
                                <span className="text-primary font-semibold">
                                  💡 Tip:
                                </span>
                                <span className="text-muted-foreground">
                                  {stop.tip}
                                </span>
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-3">
                  💡 Local&apos;s Insider Tip
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {route.insiderTip}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  Practical Information
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-4 w-4 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Best Season
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {route.practicalInfo.bestSeason}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Parking
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {route.practicalInfo.parking}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <DollarSign className="h-4 w-4 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Entrance Fees
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {route.practicalInfo.entranceFees}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Fuel className="h-4 w-4 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Fuel Stations
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {route.practicalInfo.fuelStations}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Car className="h-4 w-4 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Recommended Vehicle
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {route.practicalInfo.recommendedVehicle}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Utensils className="h-4 w-4 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Restaurants
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {route.practicalInfo.restaurants}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Bus className="h-4 w-4 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Public Transport
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {route.practicalInfo.publicTransport}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <ShareButton title={route.title} />

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  Route Map
                </h3>
                <div className="aspect-video w-full bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 mx-auto mb-2 text-primary/40" />
                    <p className="text-sm">Google Map Embed</p>
                    <p className="text-xs">(Coming Soon)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
