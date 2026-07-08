// app/not-found.tsx
import Link from "next/link";
import { Compass, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-background">
      <div className="text-center max-w-lg px-4">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-6">
          <Compass className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          Route Not Found
        </h2>
        <p className="text-muted-foreground mb-8">
          Oops! It looks like you've wandered off the map. The page you're
          looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/#routes" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Explore Routes
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
