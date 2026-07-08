// app/guide/page.tsx
import { Card, CardContent } from "@/components/ui/card";
import {
  Car,
  FileText,
  MapPin,
  Clock,
  AlertCircle,
  ChevronRight,
} from "lucide-react";

export const metadata = {
  title: "Driving Guide – Drive KKTC",
  description:
    "Essential tips for driving in Northern Cyprus. Everything you need to know about rules, road conditions, and safety.",
};

const tips = [
  {
    icon: <FileText className="h-6 w-6 text-primary" />,
    title: "Documents You Need",
    items: [
      "Valid driving license (International Driving Permit recommended)",
      "Vehicle registration documents",
      "Insurance papers",
      "Passport (for border crossings)",
    ],
  },
  {
    icon: <Car className="h-6 w-6 text-primary" />,
    title: "Road Rules",
    items: [
      "Drive on the left side",
      "Speed limits: 50 km/h in cities, 80 km/h on open roads, 100 km/h on highways",
      "Seat belts are mandatory for all passengers",
      "No alcohol while driving (zero tolerance)",
    ],
  },
  {
    icon: <MapPin className="h-6 w-6 text-primary" />,
    title: "Road Conditions",
    items: [
      "Main roads are well-maintained",
      "Mountain roads can be narrow and winding",
      "Karpaz peninsula roads are mixed (some unpaved sections)",
      "Watch for wild donkeys and animals on roads",
    ],
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: "Practical Tips",
    items: [
      "Fuel stations are available but scarce in rural areas",
      "Carry cash for smaller villages (credit cards accepted in cities)",
      "Mobile coverage is good in cities, patchy in remote areas",
      "Best driving season: Spring (April–June) and Autumn (September–November)",
    ],
  },
];

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Driving Guide
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know before hitting the road in Northern
              Cyprus.
            </p>
          </div>
        </div>
      </section>

      {/* Tips Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tips.map((tip, index) => (
            <Card key={index}>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  {tip.icon}
                  <h2 className="text-xl font-semibold">{tip.title}</h2>
                </div>
                <ul className="space-y-2">
                  {tip.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emergency Info */}
        <div className="max-w-5xl mx-auto mt-12 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-8">
          <div className="flex items-start gap-4">
            <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-amber-800 dark:text-amber-300">
                Emergency Numbers
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-amber-700 dark:text-amber-400">
                <li>
                  Emergency Services (Police, Ambulance, Fire):{" "}
                  <strong>112</strong>
                </li>
                <li>
                  Police: <strong>155</strong>
                </li>
                <li>
                  Ambulance: <strong>112</strong>
                </li>
                <li>
                  Roadside Assistance:{" "}
                  <strong>TÜK (Türk Mukavemet Teşkilatı)</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
