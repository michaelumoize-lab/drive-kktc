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

import type { Locale } from "@/lib/i18n";

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
  lang?: Locale;
}

export function PracticalInfoGrid({
  info,
  lang = "tr",
}: PracticalInfoGridProps) {
  const isTr = lang === "tr";

  const items = [
    {
      icon: Calendar,
      title: isTr ? "En İyi Sezon & Hava Durumu" : "Best Season & Weather",
      value: info.bestSeason,
      highlight: isTr ? "İdeal Seyahat Dönemi" : "Ideal Travel Window",
      iconColor: "text-sky-500 bg-sky-500/10 border-sky-500/20",
    },
    {
      icon: Car,
      title: isTr ? "Önerilen Araç Tipi" : "Recommended Vehicle",
      value: info.recommendedVehicle,
      highlight: isTr ? "Yol Şartları" : "Road Compatibility",
      iconColor: "text-primary bg-primary/10 border-primary/20",
    },
    {
      icon: Fuel,
      title: isTr ? "Akaryakıt & Benzinlikler" : "Fuel & Gas Stations",
      value: info.fuelStations,
      highlight: isTr ? "Önemli Tavsiye" : "Vital Logistics",
      iconColor: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    },
    {
      icon: MapPin,
      title: isTr ? "Otopark & Erişim" : "Parking Access",
      value: info.parking,
      highlight: isTr ? "Park Kolaylığı" : "Accessibility",
      iconColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      icon: Banknote,
      title: isTr ? "Giriş Ücretleri & Bütçe" : "Entrance Fees & Budget",
      value: info.entranceFees,
      highlight: isTr ? "Bilet & Harcama" : "Admissions",
      iconColor: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20",
    },
    {
      icon: Utensils,
      title: isTr ? "Yeme-İçme & Restoranlar" : "Food & Local Dining",
      value: info.restaurants,
      highlight: isTr ? "Ada Lezzetleri" : "Culinary Highlights",
      iconColor: "text-rose-500 bg-rose-500/10 border-rose-500/20",
    },
    {
      icon: Bus,
      title: isTr ? "Toplu Taşıma Durumu" : "Public Transport Reality",
      value: info.publicTransport,
      highlight: isTr ? "Ulaşım Gerçeği" : "Transit Feasibility",
      iconColor: "text-purple-500 bg-purple-500/10 border-purple-500/20",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full mb-3 border border-primary/20">
          <AlertCircle className="h-3.5 w-3.5" />
          <span>
            {isTr ? "Yola Çıkmadan Önce" : "Road Trip Survival Guide"}
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
          {isTr ? "Pratik Yolculuk Bilgileri" : "Practical Road Trip Dossier"}
        </h2>
        <p className="text-muted-foreground text-sm md:text-base mt-1 max-w-2xl">
          {isTr
            ? "Kuzey Kıbrıs yollarında sorunsuz bir deneyim için gerekli yakıt, araç, otopark ve ada lojistiği."
            : "Essential local logistics, fuel advice, vehicle recommendations, and Cyprus driving conditions."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item, idx) => {
          const Icon = item.icon;
          const isWide = idx === 6; // Last item can span cleanly if desired
          return (
            <Card
              key={item.title}
              className={`rounded-3xl border-border/70 bg-card/85 backdrop-blur-sm hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                isWide ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${item.iconColor} shadow-2xs`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-muted/80 text-muted-foreground border border-border/40">
                      {item.highlight}
                    </span>
                  </div>
                  <h3 className="text-base font-heading font-bold text-foreground mb-2">
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
