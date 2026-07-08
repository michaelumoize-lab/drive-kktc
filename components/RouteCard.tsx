// components/RouteCard.tsx
import Link from "next/link";
import Image from "next/image";
import { Route } from "@/data/routes";

export default function RouteCard({ route }: { route: Route }) {
  return (
    <Link href={`/routes/${route.slug}`} className="group block">
      <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-56 w-full">
          <Image
            src={route.heroImage}
            alt={route.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-3 left-3 flex gap-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
            <span>⏱ {route.duration}</span>
            <span>📏 {route.distance}</span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-xl font-bold text-foreground">{route.title}</h3>
          <p className="text-muted-foreground text-sm mt-1">{route.subtitle}</p>
          <span className="inline-block mt-4 text-primary font-semibold group-hover:underline">
            View Route →
          </span>
        </div>
      </div>
    </Link>
  );
}
