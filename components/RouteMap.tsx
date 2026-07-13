// components/RouteMap.tsx
"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Maximize2 } from "lucide-react";

interface RouteMapProps {
  embedUrl: string;
  title?: string;
}

export function RouteMap({ embedUrl, title = "Route Map" }: RouteMapProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <Card className="border-border">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-foreground">{title}</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="gap-1"
          >
            <Maximize2 className="h-4 w-4" />
            {isFullscreen ? "Collapse" : "Expand"}
          </Button>
        </div>
        <div
          className={`relative w-full ${isFullscreen ? "h-[600px]" : "aspect-video"} rounded-lg overflow-hidden bg-muted`}
        >
          <iframe
            src={embedUrl}
            className="w-full h-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Route Map"
          />
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          📍 Click markers for stop details • Zoom in to explore
        </p>
      </CardContent>
    </Card>
  );
}
