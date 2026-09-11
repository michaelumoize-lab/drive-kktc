// components/RouteStopsSection.tsx
"use client";

import { useEffect, useState, useRef } from "react";
import { StopCard } from "@/components/StopCard";
import { MapPin, Navigation, Compass } from "lucide-react";
import type { Locale } from "@/lib/i18n";

interface Stop {
  name: string;
  description: string;
  visitTime?: string;
  openingHours?: string;
  entranceFee?: string;
  tip?: string;
  images?: string[];
  suggestedArrival?: string;
  driveTime?: string;
}

interface RouteStopsSectionProps {
  stops: Stop[];
  lang?: Locale;
}

export function RouteStopsSection({ stops, lang = "tr" }: RouteStopsSectionProps) {
  const isTr = lang === "tr";
  const [activeStopIndex, setActiveStopIndex] = useState(0);
  const stopsRef = useRef<HTMLDivElement>(null);
  const mobilePillsRef = useRef<(HTMLButtonElement | null)[]>([]);

  // Set up intersection observer to detect which stop is currently in view
  useEffect(() => {
    const stopElements = stops.map((_, index) =>
      document.getElementById(`stop-${index}`)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.id.replace("stop-", ""));
            if (!isNaN(index)) {
              setActiveStopIndex(index);
              // Auto-center active pill in mobile view
              mobilePillsRef.current[index]?.scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "nearest",
              });
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px", // Trigger when stop card reaches upper portion of viewport
        threshold: 0,
      }
    );

    stopElements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      stopElements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [stops]);

  const handleScrollToStop = (index: number) => {
    setActiveStopIndex(index);
    const element = document.getElementById(`stop-${index}`);
    if (element) {
      // Mobile needs a larger offset because of Navbar (64px) + Mobile Stops Sub-bar (~85px)
      const isMobile = window.innerWidth < 1024;
      const offset = isMobile ? 165 : 100;

      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="stops" className="relative scroll-mt-24">
      {/* Mobile Sticky Sub-Navbar */}
      <div className="lg:hidden sticky top-16 z-40 bg-background/95 backdrop-blur-md border border-border/70 rounded-2xl p-3 mb-6 shadow-md transition-all">
        {/* Active Stop Status Bar */}
        <div className="flex items-center justify-between gap-2 mb-2.5 pb-2 border-b border-border/50">
          <div className="flex items-center gap-1.5 text-xs font-bold text-primary shrink-0">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-[11px]">
              {activeStopIndex + 1}
            </span>
            <span>
              {isTr ? `Durak ${activeStopIndex + 1} / ${stops.length}` : `Stop ${activeStopIndex + 1} of ${stops.length}`}
            </span>
          </div>
          <span className="text-xs font-semibold text-foreground truncate text-right">
            {stops[activeStopIndex]?.name}
          </span>
        </div>

        {/* Horizontal Navigation Stepper */}
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar scroll-smooth">
          {stops.map((stop, idx) => {
            const isActive = activeStopIndex === idx;
            return (
              <button
                key={idx}
                ref={(el) => {
                  mobilePillsRef.current[idx] = el;
                }}
                type="button"
                onClick={() => handleScrollToStop(idx)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium shrink-0 transition-all cursor-pointer ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-xs font-semibold scale-102"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                }`}
              >
                <span
                  className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    isActive
                      ? "bg-primary-foreground text-primary"
                      : "bg-foreground/10 text-foreground"
                  }`}
                >
                  {idx + 1}
                </span>
                <span className="truncate max-w-[110px]">{stop.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Sticky Section Header & Vertical Timeline Indicator (Desktop) */}
        <div className="hidden lg:block lg:col-span-4 sticky top-24 self-start pt-2">
          <div className="p-6 rounded-2xl bg-card/60 border border-border/60 backdrop-blur-xs shadow-xs">
            {/* Section Header */}
            <div className="mb-6 pb-5 border-b border-border/50">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                <Navigation className="h-3.5 w-3.5" />
                <span>{isTr ? "Etkileşimli Güzergah" : "Interactive Itinerary"}</span>
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                {isTr ? "Yol Üstü Durakları" : "Stops Along the Way"}
              </h2>
              <p className="text-xs text-muted-foreground mt-1">
                {isTr
                  ? `${stops.length} özenle seçilmiş durak • Gitmek için bir durağa tıklayın`
                  : `${stops.length} curated waypoints • Click any stop to navigate`}
              </p>
            </div>

            {/* Vertical Numbered Timeline (Matching Reference Design) */}
            <nav
              aria-label="Itinerary stops"
              className="relative flex flex-col py-1"
            >
              {/* Connecting Vertical Line behind numbers */}
              <div
                className="absolute left-[19px] top-6 bottom-6 w-[2px] bg-border/80"
                aria-hidden="true"
              />

              {stops.map((stop, index) => {
                const isActive = activeStopIndex === index;
                const isPast = activeStopIndex > index;

                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleScrollToStop(index)}
                    className="group relative flex items-center gap-4 py-3 text-left transition-all rounded-xl hover:bg-accent/50 px-2 -mx-2 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
                    aria-current={isActive ? "step" : undefined}
                  >
                    {/* Circle Node with Number */}
                    <div
                      className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-bold text-sm transition-all duration-300 ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-md ring-4 ring-primary/20 scale-105"
                          : isPast
                          ? "bg-primary/80 text-primary-foreground"
                          : "bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary"
                      }`}
                    >
                      {index + 1}
                    </div>

                    {/* Stop Title & Meta */}
                    <div className="flex flex-col min-w-0 pr-2">
                      <span
                        className={`text-sm font-semibold transition-colors truncate ${
                          isActive
                            ? "text-primary font-bold"
                            : "text-foreground/80 group-hover:text-foreground"
                        }`}
                      >
                        {stop.name}
                      </span>
                      {stop.suggestedArrival && (
                        <span className="text-[11px] text-muted-foreground font-mono">
                          ~{stop.suggestedArrival}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </nav>

            {/* Hint footer */}
            <div className="mt-4 pt-4 border-t border-border/40 text-[11px] text-muted-foreground flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              <span>{isTr ? "Sayfayla kayar • Durakları incelerken sabitlenir" : "Scrolls with page • Locks while exploring stops"}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Stop Cards List */}
        <div ref={stopsRef} className="lg:col-span-8 space-y-6 sm:space-y-8">
          {stops.map((stop, index) => (
            <StopCard key={stop.name + index} stop={stop} index={index} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}
