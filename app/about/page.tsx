// app/about/page.tsx
import Image from "next/image";
import Link from "next/link";
import { MapPin, Users, Heart, Compass } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "About Us – Drive KKTC",
  description:
    "Discover the story behind Drive KKTC – Northern Cyprus' first curated road trip guide platform, built by locals for explorers.",
};

export default function AboutPage() {
  const values = [
    {
      icon: <Compass className="h-8 w-8 text-primary" />,
      title: "Curated by Locals",
      description:
        "Every route is crafted by locals who know Northern Cyprus inside out. No tourist traps – just authentic experiences.",
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Built with Passion",
      description:
        "We love Northern Cyprus and want to share its hidden gems with the world. Every route is designed with care and attention to detail.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Community First",
      description:
        "Drive KKTC is for travelers, by travelers. Share your experiences, discover new routes, and join our community of explorers.",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center bg-primary/10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5" />
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Drive KKTC
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Northern Cyprus&apos; first curated road trip guide platform – built by
              locals, for explorers.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Mission */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            Drive KKTC was born from a simple idea: make exploring Northern
            Cyprus easy, authentic, and unforgettable. We believe that the best
            travel experiences come from local knowledge and genuine
            connections. That's why we created a platform where travelers can
            discover curated routes, hidden gems, and insider tips – all from
            people who call Cyprus home.
          </p>
        </div>

        {/* Values */}
        <h2 className="text-2xl font-bold text-center mb-10">
          What We Stand For
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {values.map((value, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6 space-y-3">
                <div className="flex justify-center">{value.icon}</div>
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-muted/30 rounded-2xl p-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Ready to Explore?</h2>
          <p className="text-muted-foreground mb-6">
            Join thousands of travelers discovering the real Northern Cyprus.
          </p>
          <Link
            href="/#routes"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Explore Routes
          </Link>
        </div>
      </div>
    </main>
  );
}
