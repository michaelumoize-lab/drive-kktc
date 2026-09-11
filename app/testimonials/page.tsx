// app/testimonials/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function TestimonialsRedirect() {
  const router = useRouter();

  useEffect(() => {
    try {
      const lang = localStorage.getItem("drive_kktc_lang");
      router.replace(lang === "en" ? "/en/testimonials" : "/tr/testimonials");
    } catch {
      router.replace("/tr/testimonials");
    }
  }, [router]);

  return null;
}
