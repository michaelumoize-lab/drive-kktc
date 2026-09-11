// components/RouteTimeline.tsx
"use client";

import { Clock, MapPin, Car } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TimelineStop {
  name: string;
  suggestedArrival?: string;
  driveTime?: string;
  visitTime?: string;
}

interface RouteTimelineProps {
  stops: TimelineStop[];
  suggestedStart?: string;
}

export function RouteTimeline({
  stops,
  suggestedStart = "8:00 AM",
}: RouteTimelineProps) {
  return (
    <Card className="border-border overflow-hidden">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Clock className="h-5 w-5 text-primary" />
          Day Plan & Estimated Timeline
        </h3>
        <p className="text-sm text-muted-foreground mb-6">
          Suggested start time:{" "}
          <span className="font-medium text-foreground">{suggestedStart}</span>
        </p>

        <div className="space-y-0 relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-6 bottom-6 w-0.5 bg-border/60" />

          {stops.map((stop, index) => (
            <div key={index} className="relative pl-12 pb-8 last:pb-0">
              {/* Timeline dot */}
              <div className="absolute left-3 top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-background z-10" />

              <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                <div className="min-w-[100px]">
                  <span className="text-sm font-mono font-medium text-primary">
                    {stop.suggestedArrival || "—"}
                  </span>
                </div>

                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="font-semibold text-foreground">
                      {stop.name}
                    </h4>
                    {stop.visitTime && (
                      <span className="text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground">
                        ⏱ {stop.visitTime}
                      </span>
                    )}
                  </div>

                  {stop.driveTime && index > 0 && (
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Car className="h-3 w-3" />
                      <span>Drive: {stop.driveTime}</span>
                    </div>
                  )}

                  {index === 0 && (
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span>Start here</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
