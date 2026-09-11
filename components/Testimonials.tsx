// components/Testimonials.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  // Get the first 3 testimonials for the homepage
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Testimonials
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">
            What Our Travelers Say
          </h3>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Real stories from real road-trippers who explored Northern Cyprus
            with our guides.
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

                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.location}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.route} • {testimonial.travelDate}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <p className="text-sm text-muted-foreground">
            Join thousands of happy travelers exploring Northern Cyprus.
          </p>
          <a
            href="#routes"
            className="inline-block mt-3 text-primary font-semibold hover:underline"
          >
            Start Your Journey →
          </a>
        </div>
      </div>
    </section>
  );
}
