// app/guide/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function GuideRedirect() {
  const router = useRouter();

  useEffect(() => {
    try {
      const lang = localStorage.getItem("drive_kktc_lang");
      router.replace(lang === "en" ? "/en/guide" : "/tr/guide");
    } catch {
      router.replace("/tr/guide");
    }
  }, [router]);

  return null;
}
