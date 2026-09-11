// app/[lang]/guide/page.tsx
import { Card, CardContent } from "@/components/ui/card";
import {
  Car,
  FileText,
  MapPin,
  Clock,
  AlertCircle,
  ChevronRight,
} from "lucide-react";
import { Locale, getDictionary, isValidLocale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isTr = lang === "tr";

  return {
    title: isTr ? "Sürüş Rehberi – Drive North Cyprus" : "Driving Guide – Drive North Cyprus",
    description: isTr
      ? "Kuzey Kıbrıs'ta araç kullanırken dikkat edilmesi gerekenler. Kurallar, yol koşulları ve güvenlik tüyoları."
      : "Essential tips for driving in Northern Cyprus. Everything you need to know about rules, road conditions, and safety.",
    alternates: {
      canonical: `/${lang}/guide`,
      languages: {
        tr: "/tr/guide",
        en: "/en/guide",
      },
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Locale = isValidLocale(rawLang) ? rawLang : "tr";
  const dict = getDictionary(lang);

  const icons = [
    <FileText key="docs" className="h-6 w-6 text-primary" />,
    <Car key="rules" className="h-6 w-6 text-primary" />,
    <MapPin key="cond" className="h-6 w-6 text-primary" />,
    <Clock key="tips" className="h-6 w-6 text-primary" />,
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-primary/5">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              {dict.guide.title}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              {dict.guide.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Tips Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {dict.guide.sections.map((section, index) => (
            <Card key={index}>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  {icons[index % icons.length]}
                  <h2 className="text-xl font-semibold">{section.title}</h2>
                </div>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emergency Info */}
        <div className="max-w-5xl mx-auto mt-12 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-8">
          <div className="flex items-start gap-4">
            <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-amber-800 dark:text-amber-300">
                {lang === "tr" ? "Acil Durum Numaraları" : "Emergency Numbers"}
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-amber-700 dark:text-amber-400">
                <li>
                  {lang === "tr" ? "Acil Yardım (Polis, Ambulans, İtfaiye): " : "Emergency Services (Police, Ambulance, Fire): "}
                  <strong>112</strong>
                </li>
                <li>
                  {lang === "tr" ? "Polis İmdat: " : "Police: "}
                  <strong>155</strong>
                </li>
                <li>
                  {lang === "tr" ? "Orman Yangın İhbar: " : "Forest Fire Hotline: "}
                  <strong>177</strong>
                </li>
                <li>
                  {lang === "tr" ? "Sahil Güvenlik: " : "Coast Guard: "}
                  <strong>158</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
