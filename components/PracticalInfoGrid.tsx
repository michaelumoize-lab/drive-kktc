// components/PracticalInfoGrid.tsx
import {
  Calendar,
  Car,
  MapPin,
  Fuel,
  Utensils,
  Bus,
  Banknote,
  AlertCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface PracticalInfo {
  bestSeason: string;
  parking: string;
  entranceFees: string;
  fuelStations: string;
  recommendedVehicle: string;
  restaurants: string;
  publicTransport: string;
}

interface PracticalInfoGridProps {
  info: PracticalInfo;
}

export function PracticalInfoGrid({ info }: PracticalInfoGridProps) {
  const items = [
    {
      icon: Calendar,
      title: "Best Season & Weather",
      value: info.bestSeason,
      highlight: "Ideal Travel Window",
    },
    {
      icon: Car,
      title: "Recommended Vehicle",
      value: info.recommendedVehicle,
      highlight: "Road Compatibility",
    },
    {
      icon: MapPin,
      title: "Parking Access",
      value: info.parking,
      highlight: "Convenience",
    },
    {
      icon: Fuel,
      title: "Fuel & Gas Stations",
      value: info.fuelStations,
      highlight: "Vital Warning",
      badgeClass: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    },
    {
      icon: Banknote,
      title: "Entrance Fees & Budget",
      value: info.entranceFees,
      highlight: "Admissions",
    },
    {
      icon: Utensils,
      title: "Food & Dining Spots",
      value: info.restaurants,
      highlight: "Local Culinary",
    },
    {
      icon: Bus,
      title: "Public Transport Reality",
      value: info.publicTransport,
      highlight: "Transit Feasibility",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
          <AlertCircle className="h-3.5 w-3.5" />
          <span>Before You Hit The Road</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Practical Road Trip Information
        </h2>
        <p className="text-muted-foreground text-sm md:text-base mt-1">
          Essential logistics, driving tips, and local conditions to ensure a smooth journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item, idx) => {
          const Icon = item.icon;
          const isWide = idx === 5 || idx === 6; // Dining & Transit can stretch nicely
          return (
            <Card
              key={item.title}
              className={`border-border/60 bg-card/60 backdrop-blur-xs hover:border-primary/40 transition-all duration-200 hover:shadow-md ${
                isWide ? "md:col-span-1 lg:col-span-1" : ""
              }`}
            >
              <CardContent className="p-5 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                      {item.highlight}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.value}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
