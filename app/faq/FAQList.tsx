// components/FAQList.tsx
"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const faqs = [
  {
    question: "What is Drive KKTC?",
    answer:
      "Drive KKTC is a curated road trip guide platform for Northern Cyprus. We provide detailed driving routes, stop recommendations, insider tips, and practical information to help you explore the region like a local.",
  },
  {
    question: "Are the routes free?",
    answer:
      "Yes! All routes on Drive KKTC are completely free. We believe that exploring should be accessible to everyone.",
  },
  {
    question: "How many routes do you have?",
    answer:
      "We currently have 5 curated routes covering different regions of Northern Cyprus, from the Kyrenia coast to the Karpaz Peninsula, and from the ancient city of Salamis to the old city of Nicosia.",
  },
  {
    question: "Can I use these routes for a self-drive trip?",
    answer:
      "Absolutely! Every route is designed specifically for self-drive exploration. We include detailed directions, stop descriptions, and practical information to make your journey smooth and enjoyable.",
  },
  {
    question: "Do I need a 4x4 vehicle?",
    answer:
      "Most routes are accessible with a standard sedan. However, some stops on the Karpaz Peninsula route may require a vehicle with higher ground clearance, especially during rainy seasons.",
  },
  {
    question: "What is the best time to visit Northern Cyprus?",
    answer:
      "Spring (April–June) and Autumn (September–November) offer the most pleasant weather for driving and exploring. Summers can be hot, while winters are mild but occasionally rainy.",
  },
  {
    question: "Can I get a printed guide?",
    answer:
      "We currently offer digital guides only. You can access all routes online or print them directly from your browser.",
  },
  {
    question: "How do I get the free road trip guide?",
    answer:
      "Simply sign up for our newsletter on the homepage, and you'll receive a free guidebook with top tips for your Northern Cyprus road trip.",
  },
];

export default function FAQList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know before hitting the road in Northern
              Cyprus.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => toggle(index)}
            >
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold text-foreground">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  )}
                </div>
                {openIndex === index && (
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
