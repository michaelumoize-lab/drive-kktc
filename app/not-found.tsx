// app/not-found.tsx
import Link from "next/link";
import { Compass, Route, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-[75vh] flex items-center justify-center bg-background px-4 py-16">
      <div className="text-center max-w-xl mx-auto space-y-8">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-primary/10 text-primary shadow-inner">
          <Compass className="h-12 w-12 animate-pulse" />
        </div>

        <div className="space-y-3">
          <p className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
            Error 404 • Hata 404
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Haritanın Dışına Çıktınız • Off the Map
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Aradığınız rota veya sayfa taşınmış ya da bulunamıyor olabilir.
            <br />
            The road or destination you are looking for has moved or does not exist.
          </p>
        </div>

        {/* Bilingual Quick Navigation Bento */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left pt-2">
          {/* Turkish Card */}
          <div className="p-5 rounded-2xl border border-border bg-card/60 backdrop-blur-xs space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-lg">🇹🇷</span>
              <span className="text-xs font-bold text-foreground">Türkçe Yolculuk</span>
            </div>
            <p className="text-xs text-muted-foreground">
              41 özenle seçilmiş Kuzey Kıbrıs rotasını ve sürüş rehberlerini keşfedin.
            </p>
            <div className="pt-1 flex flex-col gap-2">
              <Button asChild size="sm" className="w-full justify-between">
                <Link href="/tr/routes">
                  <span>Tüm Rotalar</span>
                  <Route className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="sm" variant="ghost" className="w-full justify-between text-xs">
                <Link href="/tr">
                  <span>Ana Sayfa</span>
                  <Home className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* English Card */}
          <div className="p-5 rounded-2xl border border-border bg-card/60 backdrop-blur-xs space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-lg">🇬🇧</span>
              <span className="text-xs font-bold text-foreground">English Journey</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Explore 41 curated Northern Cyprus road trips, itineraries and driving guides.
            </p>
            <div className="pt-1 flex flex-col gap-2">
              <Button asChild size="sm" className="w-full justify-between">
                <Link href="/en/routes">
                  <span>Explore Routes</span>
                  <Route className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="sm" variant="ghost" className="w-full justify-between text-xs">
                <Link href="/en">
                  <span>Homepage</span>
                  <Home className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
