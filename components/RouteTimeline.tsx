// components/RouteTimeline.tsx
"use client";

import { Clock, MapPin, Car, Compass } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import type { Locale } from "@/lib/i18n";

interface TimelineStop {
  name: string;
  suggestedArrival?: string;
  driveTime?: string;
  visitTime?: string;
}

interface RouteTimelineProps {
  stops: TimelineStop[];
  suggestedStart?: string;
  lang?: Locale;
}

export function RouteTimeline({
  stops,
  suggestedStart = "8:00 AM",
  lang = "tr",
}: RouteTimelineProps) {
  const isTr = lang === "tr";

  return (
    <Card className="rounded-3xl border-border/70 bg-card/80 backdrop-blur-md overflow-hidden shadow-sm">
      <CardContent className="p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 mb-6 border-b border-border/60">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-heading font-bold text-foreground">
                {isTr
                  ? "Gün Planı & Zaman Çizelgesi"
                  : "Daily Schedule & Itinerary"}
              </h3>
              <p className="text-xs text-muted-foreground">
                {isTr
                  ? "Trafik ve ziyaret sürelerine göre optimize edilmiş zamanlama"
                  : "Optimized for island driving pace and ideal lighting"}
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full text-xs font-medium text-primary">
            <Compass className="h-3.5 w-3.5" />
            <span>
              {isTr ? "Başlangıç: " : "Suggested Departure: "}
              <strong className="text-primary font-bold">{suggestedStart}</strong>
            </span>
          </div>
        </div>

        <div className="space-y-0 relative pl-2">
          {/* Vertical transit line */}
          <div className="absolute left-6 top-4 bottom-8 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20" />

          {stops.map((stop, index) => {
            const isFirst = index === 0;
            const isLast = index === stops.length - 1;

            return (
              <div key={index} className="relative pl-12 pb-7 last:pb-1 group">
                {/* Timeline node */}
                <div
                  className={`absolute left-4 top-1 w-4 h-4 rounded-full -translate-x-1/2 flex items-center justify-center ring-4 ring-background transition-all duration-300 ${
                    isFirst || isLast
                      ? "bg-primary shadow-[0_0_10px_rgba(234,88,12,0.4)]"
                      : "bg-background border-2 border-primary group-hover:bg-primary"
                  }`}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 p-3.5 rounded-2xl transition-colors hover:bg-muted/40">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-heading font-bold text-base text-foreground">
                        {stop.name}
                      </h4>
                      {isFirst && (
                        <span className="text-[11px] font-semibold bg-primary/10 text-primary px-2.5 py-0.5 rounded-full border border-primary/20">
                          {isTr ? "Başlangıç Noktası" : "Start Point"}
                        </span>
                      )}
                      {isLast && (
                        <span className="text-[11px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                          {isTr ? "Varış & Bitiş" : "Final Destination"}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-4 text-xs text-muted-foreground flex-wrap pt-0.5">
                      {stop.visitTime && (
                        <span className="inline-flex items-center gap-1 font-medium">
                          <Clock className="h-3.5 w-3.5 text-muted-foreground/80" />
                          <span>
                            {isTr ? "Ziyaret: " : "Visit: "}
                            {stop.visitTime}
                          </span>
                        </span>
                      )}

                      {stop.driveTime && index > 0 && (
                        <span className="inline-flex items-center gap-1 font-medium text-primary">
                          <Car className="h-3.5 w-3.5" />
                          <span>
                            {stop.driveTime}{" "}
                            {isTr ? "sürüş mesafesi" : "drive time"}
                          </span>
                        </span>
                      )}
                    </div>
                  </div>

                  {stop.suggestedArrival && (
                    <div className="shrink-0 self-start sm:self-center">
                      <span className="font-mono text-xs font-semibold px-3 py-1 rounded-lg bg-muted text-foreground border border-border/60">
                        {stop.suggestedArrival}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
