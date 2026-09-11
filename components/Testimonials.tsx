// components/Testimonials.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Locale } from "@/lib/i18n";

export default function Testimonials({ lang = "tr" }: { lang?: Locale }) {
  // Get the first 3 testimonials for the homepage
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            {lang === "tr" ? "Gezgin Yorumları" : "Testimonials"}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">
            {lang === "tr" ? "Yol Arkadaşlarımız Ne Diyor?" : "What Our Travelers Say"}
          </h3>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            {lang === "tr"
              ? "Rehberlerimizle Kuzey Kıbrıs'ı keşfe çıkan gezginlerden gerçek deneyimler ve hikayeler."
              : "Real stories from real road-trippers who explored Northern Cyprus with our guides."}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredTestimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-card hover:shadow-lg transition-shadow duration-300 border-border"
            >
              <CardContent className="p-6 space-y-4">
                {/* Quote */}
                <blockquote className="text-muted-foreground text-sm leading-relaxed">
                  <span className="text-primary text-2xl font-serif">
                    &ldquo;
                  </span>
                  {testimonial.quote}
                  <span className="text-primary text-2xl font-serif">
                    &rdquo;
                  </span>
                </blockquote>

                {/* Rating */}
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-muted"
                      }`}
                    />
                  ))}
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.location} • {testimonial.route}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
