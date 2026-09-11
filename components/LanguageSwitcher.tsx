// components/LanguageSwitcher.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";

// Crisp vector flag for Turkey (works on all operating systems including Windows)
function TurkeyFlag({ className = "w-4 h-3 rounded-[2px] shrink-0" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 800"
      className={className}
      aria-hidden="true"
    >
      <rect width="1200" height="800" fill="#E30A17" />
      <circle cx="425" cy="400" r="250" fill="#ffffff" />
      <circle cx="475" cy="400" r="200" fill="#E30A17" />
      <polygon
        points="583.33,400 706.74,439.99 630.46,335.03 630.46,464.97 706.74,360.01"
        fill="#ffffff"
      />
    </svg>
  );
}

// Crisp vector flag for United Kingdom
function UKFlag({ className = "w-4 h-3 rounded-[2px] shrink-0" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 30"
      className={className}
      aria-hidden="true"
    >
      <clipPath id="uk-clip">
        <path d="M0,0 v30 h60 v-30 z" />
      </clipPath>
      <clipPath id="uk-diag">
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <g clipPath="url(#uk-clip)">
        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#ffffff" strokeWidth="6" />
        <path
          d="M0,0 L60,30 M60,0 L0,30"
          clipPath="url(#uk-diag)"
          stroke="#C8102E"
          strokeWidth="4"
        />
        <path d="M30,0 v30 M0,15 h60" stroke="#ffffff" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}

interface LanguageSwitcherProps {
  variant?: "pill" | "compact" | "drawer";
  className?: string;
}

export function LanguageSwitcher({
  variant = "pill",
  className,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  // Extract current language from URL (default to tr if not found)
  const currentLang: Locale = pathname?.startsWith("/en") ? "en" : "tr";

  const handleSwitch = (newLang: Locale) => {
    if (newLang === currentLang) return;

    try {
      localStorage.setItem("drive_kktc_lang", newLang);
    } catch {
      // Ignore localStorage errors
    }

    let newPath = pathname;
    if (pathname.startsWith("/en")) {
      newPath = pathname.replace(/^\/en/, `/${newLang}`);
    } else if (pathname.startsWith("/tr")) {
      newPath = pathname.replace(/^\/tr/, `/${newLang}`);
    } else {
      newPath = `/${newLang}${pathname === "/" ? "" : pathname}`;
    }

    router.push(newPath);
  };

  if (variant === "drawer") {
    return (
      <div className={cn("flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-muted/40 border border-border/40", className)}>
        <span className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <Globe className="h-4 w-4" />
          <span>Dil / Language</span>
        </span>
        <div className="inline-flex rounded-lg p-1 bg-background border border-border/80 shadow-2xs">
          <button
            type="button"
            onClick={() => handleSwitch("tr")}
            className={cn(
              "px-3 py-1.5 text-xs font-semibold rounded-md transition-all flex items-center gap-1.5 cursor-pointer",
              currentLang === "tr"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <TurkeyFlag className="w-4 h-2.5 rounded-[1px]" />
            <span>TR</span>
          </button>
          <button
            type="button"
            onClick={() => handleSwitch("en")}
            className={cn(
              "px-3 py-1.5 text-xs font-semibold rounded-md transition-all flex items-center gap-1.5 cursor-pointer",
              currentLang === "en"
                ? "bg-primary text-primary-foreground shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <UKFlag className="w-4 h-2.5 rounded-[1px]" />
            <span>EN</span>
          </button>
        </div>
      </div>
    );
  }

  // Default sleek desktop pill
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-lg p-1 bg-muted/60 border border-border/60 backdrop-blur-sm text-xs font-medium",
        className
      )}
      role="group"
      aria-label="Language Switcher"
    >
      <button
        type="button"
        onClick={() => handleSwitch("tr")}
        aria-pressed={currentLang === "tr"}
        className={cn(
          "flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all duration-200 cursor-pointer",
          currentLang === "tr"
            ? "bg-background text-foreground font-semibold shadow-xs border border-border/50 scale-[1.02]"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        <TurkeyFlag className="w-4 h-2.5 rounded-[1px]" />
        <span>TR</span>
      </button>

      <button
        type="button"
        onClick={() => handleSwitch("en")}
        aria-pressed={currentLang === "en"}
        className={cn(
          "flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all duration-200 cursor-pointer",
          currentLang === "en"
            ? "bg-background text-foreground font-semibold shadow-xs border border-border/50 scale-[1.02]"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        <UKFlag className="w-4 h-2.5 rounded-[1px]" />
        <span>EN</span>
      </button>
    </div>
  );
}
export default LanguageSwitcher;
