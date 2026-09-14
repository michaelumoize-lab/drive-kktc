// app/[lang]/page.tsx
import { redirect } from "next/navigation";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import RoutesGrid from "@/components/RoutesGrid";
import Testimonials from "@/components/Testimonials";
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
      ? "Drive North Cyprus – Kuzey Kıbrıs Rota ve Gezi Rehberi"
      : "Drive North Cyprus – Explore Northern Cyprus Routes",
    description: isTr
      ? "Kuzey Kıbrıs'ın en güzel sürüş rotalarını keşfedin. Kalelerden el değmemiş kumsallara, eksiksiz yol rehberi."
      : "Discover the best driving routes in Northern Cyprus. From ancient castles to pristine beaches, plan your perfect road trip.",
    alternates: {
      canonical: isTr ? "/" : `/${lang}`,
      languages: {
        tr: "/",
        en: "/en",
      },
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Locale = isValidLocale(rawLang) ? rawLang : "tr";

  // Redirect /tr to clean root /
  if (lang === "tr") {
    redirect("/");
  }

  return (
    <main>
      <Hero />
      <RoutesGrid lang={lang} />
      <Testimonials lang={lang} />
      <Newsletter />
    </main>
  );
}
