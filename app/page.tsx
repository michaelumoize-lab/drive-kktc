// app/page.tsx
import Hero from "@/components/Hero";
import RoutesGrid from "@/components/RoutesGrid";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <RoutesGrid />
      <Testimonials />
    </main>
  );
}
