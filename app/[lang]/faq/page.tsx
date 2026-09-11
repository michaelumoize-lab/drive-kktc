// app/[lang]/faq/page.tsx
import FAQList from "@/app/faq/FAQList";
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
      ? "Sıkça Sorulan Sorular – Drive North Cyprus"
      : "Frequently Asked Questions – Drive North Cyprus",
    description: isTr
      ? "Kuzey Kıbrıs sürüş rotaları, araç kiralama ve yol koşulları hakkında en çok sorulan soruların yanıtları."
      : "Find answers to commonly asked questions about driving routes, road conditions, and planning your Northern Cyprus road trip.",
    alternates: {
      canonical: `/${lang}/faq`,
      languages: {
        tr: "/tr/faq",
        en: "/en/faq",
      },
    },
  };
}

export default async function FAQPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Locale = isValidLocale(rawLang) ? rawLang : "tr";

  return <FAQList lang={lang} />;
}
