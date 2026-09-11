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

export function PracticalInfoGrid({ info, lang = "tr" }: PracticalInfoGridProps) {
  const isTr = lang === "tr";

  const items = [
    {
      icon: Calendar,
      title: isTr ? "En İyi Sezon & Hava Durumu" : "Best Season & Weather",
      value: info.bestSeason,
      highlight: isTr ? "İdeal Seyahat Dönemi" : "Ideal Travel Window",
    },
    {
      icon: Car,
      title: isTr ? "Önerilen Araç Tipi" : "Recommended Vehicle",
      value: info.recommendedVehicle,
      highlight: isTr ? "Yol Uygunluğu" : "Road Compatibility",
    },
    {
      icon: MapPin,
      title: isTr ? "Otopark & Erişim" : "Parking Access",
      value: info.parking,
      highlight: isTr ? "Park Kolaylığı" : "Convenience",
    },
    {
      icon: Fuel,
      title: isTr ? "Akaryakıt & Benzinlikler" : "Fuel & Gas Stations",
      value: info.fuelStations,
      highlight: isTr ? "Önemli Tavsiye" : "Vital Advice",
      badgeClass: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    },
    {
      icon: Banknote,
      title: isTr ? "Giriş Ücretleri & Bütçe" : "Entrance Fees & Budget",
      value: info.entranceFees,
      highlight: isTr ? "Biletler & Harcama" : "Admissions",
    },
    {
      icon: Utensils,
      title: isTr ? "Yeme-İçme & Restoranlar" : "Food & Dining Spots",
      value: info.restaurants,
      highlight: isTr ? "Yerel Tatlar" : "Local Culinary",
    },
    {
      icon: Bus,
      title: isTr ? "Toplu Taşıma Durumu" : "Public Transport Reality",
      value: info.publicTransport,
      highlight: isTr ? "Ulaşım Gerçeği" : "Transit Feasibility",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
          <AlertCircle className="h-3.5 w-3.5" />
          <span>{isTr ? "Yola Çıkmadan Önce" : "Before You Hit The Road"}</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          {isTr ? "Pratik Yolculuk Bilgileri" : "Practical Road Trip Information"}
        </h2>
        <p className="text-muted-foreground text-sm md:text-base mt-1">
          {isTr
            ? "Sorunsuz ve güvenli bir seyahat için gerekli lojistik bilgiler ve yerel yol şartları."
            : "Essential logistics, driving tips, and local conditions to ensure a smooth journey."}
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
