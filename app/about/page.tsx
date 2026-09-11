// app/about/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AboutRedirect() {
  const router = useRouter();

  useEffect(() => {
    try {
      const lang = localStorage.getItem("drive_kktc_lang");
      router.replace(lang === "en" ? "/en/about" : "/tr/about");
    } catch {
      router.replace("/tr/about");
    }
  }, [router]);

  return null;
}
