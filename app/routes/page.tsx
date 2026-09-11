// app/routes/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RoutesRedirect() {
  const router = useRouter();

  useEffect(() => {
    try {
      const lang = localStorage.getItem("drive_kktc_lang");
      router.replace(lang === "en" ? "/en/routes" : "/tr/routes");
    } catch {
      router.replace("/tr/routes");
    }
  }, [router]);

  return null;
}
