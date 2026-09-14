// app/sitemap.ts
import { MetadataRoute } from "next";
import { getRoutes } from "@/data/routes";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://drivenorthcyprus.com";
  const routes = getRoutes("en");
  const languages = ["tr", "en"] as const;
  const staticPaths = ["", "/routes", "/about", "/guide", "/faq", "/testimonials"];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Static pages for each language
  languages.forEach((lang) => {
    staticPaths.forEach((path) => {
      const isHome = path === "";
      const isRoutesCatalog = path === "/routes";
      const url = lang === "tr" && isHome ? baseUrl : `${baseUrl}/${lang}${path}`;

      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: isHome ? "daily" : isRoutesCatalog ? "daily" : "weekly",
        priority: isHome ? 1.0 : isRoutesCatalog ? 0.9 : 0.7,
        alternates: {
          languages: {
            tr: isHome ? baseUrl : `${baseUrl}/tr${path}`,
            en: `${baseUrl}/en${path}`,
          },
        },
      });
    });
  });

  // Individual route detail pages (41 routes in both languages)
  routes.forEach((route) => {
    languages.forEach((lang) => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}/routes/${route.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
        alternates: {
          languages: {
            tr: `${baseUrl}/tr/routes/${route.slug}`,
            en: `${baseUrl}/en/routes/${route.slug}`,
          },
        },
      });
    });
  });

  return sitemapEntries;
}
