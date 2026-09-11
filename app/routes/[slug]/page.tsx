// app/routes/[slug]/page.tsx
import { routes } from "@/data/routes";
import { redirect } from "next/navigation";

export function generateStaticParams() {
  return routes.map((route) => ({
    slug: route.slug,
  }));
}

export default async function RouteRedirectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/tr/routes/${slug}`);
}
