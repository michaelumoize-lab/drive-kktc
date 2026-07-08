// app/page.tsx
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <main>
      <Hero />

      {/* Temporary placeholder for the Routes section */}
      <section id="routes" className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">
          Routes Coming Soon...
        </h2>
      </section>
    </main>
  );
}
