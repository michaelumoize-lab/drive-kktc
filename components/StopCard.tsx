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
}

export function StopCard({ stop, index }: StopCardProps) {
  // Direct Google Maps location search URL for Northern Cyprus
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${stop.name}, Northern Cyprus`
  )}`;

  return (
    <Card
      id={`stop-${index}`}
      className="scroll-mt-28 overflow-hidden border-border/70 bg-card shadow-xs hover:shadow-md transition-all duration-300"
    >
      <CardContent className="p-4 sm:p-6 md:p-7">
        <div className="flex flex-col gap-5">
          {/* Header Row: Stop Number, Title, and View on Map Button */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border/50">
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-xs ring-4 ring-primary/10">
                {index + 1}
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    {stop.name}
                  </h3>
                  {stop.suggestedArrival && (
                    <span className="text-xs font-mono font-medium text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                      Arrival ~{stop.suggestedArrival}
                    </span>
                  )}
                </div>
                {stop.driveTime && (
                  <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                    <Car className="h-3 w-3 text-primary" />
                    <span>{stop.driveTime} drive from previous stop</span>
                  </p>
                )}
              </div>
            </div>

            {/* "View on Map" Button */}
            <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="gap-1.5 h-9 rounded-lg font-medium border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-2xs group w-full sm:w-auto justify-center"
              >
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${stop.name} on Google Maps`}
                >
                  <MapPin className="h-4 w-4 text-primary group-hover:text-primary-foreground transition-colors" />
                  <span>View on Map</span>
                  <ExternalLink className="h-3.5 w-3.5 opacity-70 group-hover:opacity-100" />
                </a>
              </Button>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            {stop.description}
          </p>

          {/* Metadata Badges / Info Bar */}
          <div className="flex flex-wrap gap-2.5 text-xs sm:text-sm">
            {stop.visitTime && (
              <div className="flex items-center gap-1.5 bg-muted/60 px-3 py-1.5 rounded-lg text-foreground font-medium border border-border/40">
                <Clock className="h-4 w-4 text-primary shrink-0" />
                <span>Visit: {stop.visitTime}</span>
              </div>
            )}
            {stop.openingHours && (
              <div className="flex items-center gap-1.5 bg-muted/60 px-3 py-1.5 rounded-lg text-foreground font-medium border border-border/40">
                <Clock className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>Hours: {stop.openingHours}</span>
              </div>
            )}
            {stop.entranceFee && (
              <div className="flex items-center gap-1.5 bg-muted/60 px-3 py-1.5 rounded-lg text-foreground font-medium border border-border/40">
                <DollarSign className="h-4 w-4 text-amber-500 shrink-0" />
                <span>Entry: {stop.entranceFee}</span>
              </div>
            )}
          </div>

          {/* Local Tip Box */}
          {stop.tip && (
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex items-start gap-3">
              <div className="p-1.5 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                <Lightbulb className="h-4 w-4" />
              </div>
              <div className="text-xs sm:text-sm">
                <span className="font-semibold text-foreground">Stop Tip: </span>
                <span className="text-muted-foreground leading-relaxed">
                  {stop.tip}
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
