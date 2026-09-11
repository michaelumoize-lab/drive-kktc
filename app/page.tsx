// app/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("drive_kktc_lang");
      if (savedLang === "en") {
        router.replace("/en");
        return;
      }
    } catch {
      // Ignore
    }
    router.replace("/tr");
  }, [router]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        <p className="text-sm text-muted-foreground animate-pulse">Yükleniyor...</p>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            try {
              var l = localStorage.getItem('drive_kktc_lang');
              window.location.replace(l === 'en' ? '/en' : '/tr');
            } catch(e) {
              window.location.replace('/tr');
            }
          `,
        }}
      />
    </main>
  );
}
