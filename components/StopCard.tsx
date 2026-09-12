// components/StopCard.tsx
import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  DollarSign,
  MapPin,
  ExternalLink,
  Car,
  Lightbulb,
} from "lucide-react";
import { StopGallery } from "@/components/StopGallery";
import { Button } from "@/components/ui/button";

import type { Locale } from "@/lib/i18n";

interface StopCardProps {
  stop: {
    name: string;
    description: string;
    visitTime?: string;
    openingHours?: string;
    entranceFee?: string;
    tip?: string;
    images?: string[];
    suggestedArrival?: string;
    driveTime?: string;
  };
  index: number;
  lang?: Locale;
}

export function StopCard({ stop, index, lang = "tr" }: StopCardProps) {
  const isTr = lang === "tr";

  // Direct Google Maps location search URL for Northern Cyprus
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${stop.name}, Northern Cyprus`
  )}`;

  const stopNumber = (index + 1).toString().padStart(2, "0");

  return (
    <Card
      id={`stop-${index}`}
      className="scroll-mt-28 overflow-hidden rounded-3xl border-border/70 bg-card/90 backdrop-blur-sm shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300"
    >
      <CardContent className="p-5 sm:p-7 md:p-8">
        <div className="flex flex-col gap-6">
          {/* Header Row: Stop Number, Title, Arrival & View on Map Button */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-border/60">
            <div className="flex items-start sm:items-center gap-4">
              {/* Magazine-style Number Badge */}
              <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-heading font-extrabold text-base shadow-md shadow-primary/20 ring-4 ring-primary/10">
                {stopNumber}
              </div>

              <div>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground">
                    {stop.name}
                  </h3>
                  {stop.suggestedArrival && (
                    <span className="text-xs font-mono font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
                      {isTr ? "Varış ~" : "Arrival ~"}
                      {stop.suggestedArrival}
                    </span>
                  )}
                </div>
                {stop.driveTime && (
                  <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1.5 font-medium">
                    <Car className="h-3.5 w-3.5 text-primary" />
                    <span>
                      {stop.driveTime}{" "}
                      {isTr
                        ? "önceki duraktan sürüş"
                        : "drive from previous stop"}
                    </span>
                  </p>
                )}
              </div>
            </div>

            {/* "View on Map" GPS Trigger */}
            <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="gap-2 h-10 px-4 rounded-xl font-semibold border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 shadow-xs group w-full sm:w-auto justify-center"
              >
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={
                    isTr
                      ? `${stop.name} konumunu Google Haritalar'da gör`
                      : `View ${stop.name} on Google Maps`
                  }
                >
                  <MapPin className="h-4 w-4 text-primary group-hover:text-primary-foreground transition-colors" />
                  <span>{isTr ? "Haritada Gör" : "Open in Maps"}</span>
                  <ExternalLink className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              </Button>
            </div>
          </div>

          {/* Stop Narrative Description */}
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed text-pretty">
            {stop.description}
          </p>

          {/* Telemetry Badges / Info Bar */}
          <div className="flex flex-wrap gap-2.5 text-xs sm:text-sm">
            {stop.visitTime && (
              <div className="flex items-center gap-2 bg-muted/60 px-3.5 py-1.5 rounded-xl text-foreground font-medium border border-border/50">
                <Clock className="h-4 w-4 text-primary shrink-0" />
                <span>
                  {isTr ? "Önerilen Süre: " : "Recommended Time: "}
                  <strong className="text-foreground">{stop.visitTime}</strong>
                </span>
              </div>
            )}
            {stop.openingHours && (
              <div className="flex items-center gap-2 bg-muted/60 px-3.5 py-1.5 rounded-xl text-foreground font-medium border border-border/50">
                <Clock className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>
                  {isTr ? "Açık Saatler: " : "Hours: "}
                  <strong className="text-foreground">
                    {stop.openingHours}
                  </strong>
                </span>
              </div>
            )}
            {stop.entranceFee && (
              <div className="flex items-center gap-2 bg-muted/60 px-3.5 py-1.5 rounded-xl text-foreground font-medium border border-border/50">
                <DollarSign className="h-4 w-4 text-amber-500 shrink-0" />
                <span>
                  {isTr ? "Giriş: " : "Admission: "}
                  <strong className="text-foreground">
                    {stop.entranceFee}
                  </strong>
                </span>
              </div>
            )}
          </div>

          {/* Local Tip Card */}
          {stop.tip && (
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 p-4 sm:p-5 flex items-start gap-3.5">
              <div className="p-2 rounded-xl bg-amber-500/15 text-amber-500 shrink-0 mt-0.5">
                <Lightbulb className="h-4 w-4" />
              </div>
              <div className="text-xs sm:text-sm leading-relaxed">
                <span className="font-bold text-foreground block mb-0.5">
                  {isTr ? "Yerel Sürücü İpucu" : "Local Driver Tip"}
                </span>
                <span className="text-muted-foreground italic">
                  &ldquo;{stop.tip}&rdquo;
                </span>
              </div>
            </div>
          )}

          {/* Stop Photo Gallery */}
          {stop.images && stop.images.length > 0 && (
            <div className="pt-2">
              <StopGallery images={stop.images} stopName={stop.name} />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
