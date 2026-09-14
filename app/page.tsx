// app/page.tsx
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import RoutesGrid from "@/components/RoutesGrid";
import Testimonials from "@/components/Testimonials";

export const metadata = {
  title: "Drive North Cyprus – Kuzey Kıbrıs Rota ve Gezi Rehberi",
  description:
    "Kuzey Kıbrıs'ın en güzel sürüş rotalarını keşfedin. Kalelerden el değmemiş kumsallara, eksiksiz yol rehberi.",
  alternates: {
    canonical: "/",
    languages: {
      tr: "/",
      en: "/en",
    },
  },
};

export default function RootPage() {
  return (
    <main>
      <Hero />
      <RoutesGrid lang="tr" />
      <Testimonials lang="tr" />
      <Newsletter />
    </main>
  );
}
