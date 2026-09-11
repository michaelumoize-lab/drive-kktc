// app/[lang]/testimonials/page.tsx
import TestimonialsPage from "@/app/testimonials/TestimonialsPage";
import { Locale, isValidLocale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isTr = lang === "tr";

  return {
    title: isTr
      ? "Gezgin Yorumları – Drive North Cyprus"
      : "Testimonials – Drive North Cyprus",
    description: isTr
      ? "Drive North Cyprus ile yola çıkan gezginlerin gerçek deneyim ve yorumlarını inceleyin."
      : "Read real reviews from travelers who explored Northern Cyprus with Drive North Cyprus.",
    alternates: {
      canonical: `/${lang}/testimonials`,
      languages: {
        tr: "/tr/testimonials",
        en: "/en/testimonials",
      },
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Locale = isValidLocale(rawLang) ? rawLang : "tr";

  return <TestimonialsPage lang={lang} />;
}
