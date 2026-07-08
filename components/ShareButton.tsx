// components/ShareButton.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";

export function ShareButton({ title }: { title: string }) {
  const handleShare = async () => {
    const url = window.location.href;

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title,
          text: `Check out this route: ${title}`,
          url,
        });
      } catch {
        // User cancelled
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        alert("Link copied to clipboard!");
      } catch {
        console.error("Failed to copy link");
      }
    }
  };

  return (
    <Button
      onClick={handleShare}
      variant="outline"
      className="flex items-center gap-2 w-full"
    >
      <Share2 className="h-4 w-4" />
      Share Route
    </Button>
  );
}
