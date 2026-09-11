// app/faq/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function FAQRedirect() {
  const router = useRouter();

  useEffect(() => {
    try {
      const lang = localStorage.getItem("drive_kktc_lang");
      router.replace(lang === "en" ? "/en/faq" : "/tr/faq");
    } catch {
      router.replace("/tr/faq");
    }
  }, [router]);

  return null;
}