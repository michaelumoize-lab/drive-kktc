// app/[lang]/routes/page.tsx
import RoutesPage from "@/app/routes/RoutesPage";
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
      ? "Tüm Sürüş Rotaları – Drive North Cyprus"
      : "All Routes – Drive North Cyprus",
    description: isTr
      ? "Kuzey Kıbrıs'ın tüm rotalarını inceleyin. Girne kalelerinden Karpaz'ın bakir koylarına mükemmel seyahat planları."
      : "Explore all curated driving routes in Northern Cyprus. From Kyrenia's castles to Karpaz's wild beaches – find your perfect road trip.",
    alternates: {
      canonical: `/${lang}/routes`,
      languages: {
        tr: "/tr/routes",
        en: "/en/routes",
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

  return <RoutesPage lang={lang} />;
}
