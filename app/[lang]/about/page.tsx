// app/[lang]/about/page.tsx
import Link from "next/link";
import { Users, Heart, Compass } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Locale, getDictionary, isValidLocale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isTr = lang === "tr";

  return {
    title: isTr ? "Hakkımızda – Drive North Cyprus" : "About Us – Drive North Cyprus",
    description: isTr
      ? "Drive North Cyprus'ın hikayesini keşfedin. Yerliler tarafından gezginler için tasarlanmış Kuzey Kıbrıs yol rehberi."
      : "Discover the story behind Drive North Cyprus – Northern Cyprus' first curated road trip guide platform, built by locals for explorers.",
    alternates: {
      canonical: `/${lang}/about`,
      languages: {
        tr: "/tr/about",
        en: "/en/about",
      },
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Locale = isValidLocale(rawLang) ? rawLang : "tr";
  const dict = getDictionary(lang);

  const icons = [
    <Compass key="compass" className="h-8 w-8 text-primary" />,
    <Heart key="heart" className="h-8 w-8 text-primary" />,
    <Users key="users" className="h-8 w-8 text-primary" />,
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center bg-primary/10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5" />
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              {dict.about.title}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              {dict.about.subtitle}
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Mission */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">{dict.about.missionTitle}</h2>
          <p className="text-muted-foreground leading-relaxed">
            {dict.about.missionText}
          </p>
        </div>

        {/* Values */}
        <h2 className="text-2xl font-bold text-center mb-10">
          {dict.about.valuesTitle}
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {dict.about.values.map((value, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6 space-y-3">
                <div className="flex justify-center">{icons[index % icons.length]}</div>
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
          <h2 className="text-2xl font-bold mb-3">{dict.about.readyTitle}</h2>
          <p className="text-muted-foreground mb-6">
            {dict.about.readySubtitle}
          </p>
          <Link
            href={`/${lang}#routes`}
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            {dict.about.ctaButton}
          </Link>
        </div>
      </div>
    </main>
  );
}
