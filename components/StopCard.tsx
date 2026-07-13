// components/StopCard.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Clock, DollarSign } from "lucide-react";
import { StopGallery } from "@/components/StopGallery";

interface StopCardProps {
  stop: {
    name: string;
    description: string;
    visitTime?: string;
    openingHours?: string;
    entranceFee?: string;
    tip?: string;
    images?: string[];
  };
  index: number;
}

export function StopCard({ stop, index }: StopCardProps) {
  return (
    <Card className="overflow-hidden border-border">
      <CardContent className="p-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
              {index + 1}
            </div>
            <div className="flex-1 space-y-3">
              <h3 className="text-xl font-semibold text-foreground">
                {stop.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {stop.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm bg-muted/30 p-3 rounded-lg">
                {stop.visitTime && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-3.5 w-3.5 text-primary" />
                    <span>{stop.visitTime}</span>
                  </div>
                )}
                {stop.openingHours && stop.openingHours !== "24/7" && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-3.5 w-3.5 text-primary" />
                    <span>{stop.openingHours}</span>
                  </div>
                )}
                {stop.entranceFee && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <DollarSign className="h-3.5 w-3.5 text-primary" />
                    <span>{stop.entranceFee}</span>
                  </div>
                )}
              </div>

              {stop.tip && (
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
                  <p className="text-sm flex items-start gap-2">
                    <span className="text-primary font-semibold">💡 Tip:</span>
                    <span className="text-muted-foreground">{stop.tip}</span>
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* ✅ Gallery */}
          {stop.images && stop.images.length > 0 && (
            <div className="ml-14">
              <StopGallery images={stop.images} stopName={stop.name} />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
