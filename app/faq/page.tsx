// app/faq/page.tsx
import FAQList from "./FAQList";

export const metadata = {
  title: "Frequently Asked Questions – Drive KKTC",
  description:
    "Find answers to commonly asked questions about driving routes, road conditions, and planning your Northern Cyprus road trip.",
};

export default function FAQPage() {
  return <FAQList />;
}