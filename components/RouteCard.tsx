// components/RouteCard.tsx
import { Badge } from "@/components/ui/badge";
import { Route } from "@/data/routes";
import {
  Calendar,
  Clock,
  Hotel,
  MapPin,
  Navigation,
  TrendingUp,
  Utensils,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function RouteCard({ route }: { route: Route }) {
  // Calculate difficulty based on distance with better readability
  const getDifficulty = () => {
    const distance = parseInt(route.distance);
    if (distance > 100) {
      return {
        label: "Moderate",
        color: "bg-yellow-500/30 text-yellow-200 border-yellow-500/50",
      };
    }
    if (distance > 50) {
      return {
        label: "Easy",
        color: "bg-green-500/30 text-green-200 border-green-500/50",
      };
    }
    return {
      label: "Relaxed",
      color: "bg-blue-500/30 text-blue-200 border-blue-500/50",
    };
  };

  // ✨ NEW: Extract entrance fee info from route data
  const getEntranceFee = (route: Route) => {
    const feeText = route.practicalInfo.entranceFees;

    // If it says "free", return "Free"
    if (feeText.toLowerCase().includes("free")) {
      return "Free";
    }

    // Try to extract the first Euro amount (e.g., €3, €2.50)
    const match = feeText.match(/€(\d+(?:\.\d+)?)/);
    if (match) {
      return `From €${match[1]}`;
    }

    // Fallback: show the raw text (truncated if too long)
    return feeText.length > 20 ? feeText.slice(0, 18) + "…" : feeText;
  };

  const difficulty = getDifficulty();

  return (
    <Link href={`/routes/${route.slug}`} className="group block h-full">
      <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col border border-border">
        {/* Image Container */}
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={route.heroImage}
            alt={route.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Route Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="text-xl font-bold text-white line-clamp-2">
              {route.title}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <Badge
                variant="secondary"
                className={`text-xs font-medium ${difficulty.color} border backdrop-blur-sm`}
              >
                {difficulty.label}
              </Badge>
              <div className="flex items-center text-yellow-400 text-xs">
                {"★".repeat(route.rating)}
                {"☆".repeat(5 - route.rating)}
              </div>
            </div>
          </div>

          {/* Top-left badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1">
            <Badge className="bg-primary/90 text-primary-foreground border-0 text-xs shadow-lg">
              {route.theme.split(" • ")[0]}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          <p className="text-sm text-muted-foreground line-clamp-1 mb-3">
            {route.subtitle}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Navigation className="h-3.5 w-3.5 text-primary" />
              <span>{route.distance}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5 text-primary" />
              <span>{route.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="h-3.5 w-3.5 text-primary" />
              <span>Spring • Autumn</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              <span>{route.stops.length} Stops</span>
            </div>
          </div>

          {/* What's Included */}
          <div className="flex flex-wrap gap-3 mb-4 text-xs text-muted-foreground pt-3 border-t border-border">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3 text-primary" />
              {route.stops.length} Iconic Spots
            </span>
            <span className="flex items-center gap-1">
              <Utensils className="h-3 w-3 text-primary" />
              Local Eats
            </span>
            <span className="flex items-center gap-1">
              <Hotel className="h-3 w-3 text-primary" />
              Great Stays
            </span>
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
            <div>
              {/* ✅ Dynamically displays the correct price from route data */}
              <span className="text-sm font-bold text-foreground">
                {getEntranceFee(route)}
              </span>
            </div>
            <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
              View Route
              <TrendingUp className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
