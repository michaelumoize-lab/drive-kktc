// app/faq/FAQList.tsx
"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Locale } from "@/lib/i18n";

const faqsEn = [
  {
    question: "What is Drive North Cyprus?",
    answer:
      "Drive North Cyprus is a curated road trip guide platform for Northern Cyprus. We provide detailed driving routes, stop recommendations, insider tips, and practical information to help you explore the region like a local.",
  },
  {
    question: "Are the routes free?",
    answer:
      "Yes! All routes on Drive North Cyprus are completely free. We believe that exploring should be accessible to everyone.",
  },
  {
    question: "How many routes do you have?",
    answer:
      "We currently feature 41 curated itineraries covering all 7 regions of Northern Cyprus (Kyrenia, Famagusta, Karpaz Peninsula, Nicosia, Iskele, Güzelyurt & Lefke, and the Beşparmak Mountains), plus 5 epic multi-day signature tours.",
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
    question: "How do I get the free road trip guide?",
    answer:
      "Simply sign up for our newsletter on the homepage, and you'll receive a free guidebook with top tips for your Northern Cyprus road trip.",
  },
];

const faqsTr = [
  {
    question: "Drive North Cyprus nedir?",
    answer:
      "Drive North Cyprus, Kuzey Kıbrıs için hazırlanmış küratörlü yol rehberi platformudur. Bölgeyi bir yerli gibi keşfetmeniz için detaylı sürüş rotaları, durak önerileri, yerel tavsiyeler ve pratik bilgiler sunuyoruz.",
  },
  {
    question: "Rotalar ücretsiz mi?",
    answer:
      "Evet! Drive North Cyprus üzerindeki tüm rotalar ve rehberler tamamen ücretsizdir. Keşfetmenin herkes için erişilebilir olması gerektiğine inanıyoruz.",
  },
  {
    question: "Sitede kaç rota var?",
    answer:
      "Şu anda Kuzey Kıbrıs'ın 7 bölgesini (Girne, Gazimağusa, Karpaz Yarımadası, Lefkoşa, İskele, Güzelyurt & Lefke ve Beşparmak Dağları) kapsayan 41 özenle hazırlanmış güzergah ve 5 kapsamlı çok günlük imza rota sunuyoruz.",
  },
  {
    question: "Kendi aracımla veya kiralık araçla gezebilir miyim?",
    answer:
      "Kesinlikle! Tüm rotalar bireysel araç sürüşü düşünülerek tasarlandı. Detaylı yol tarifleri, durak süreleri ve pratik önerilerle yolculuğunuz son derece konforlu geçecektir.",
  },
  {
    question: "4x4 arazi aracı gerekli mi?",
    answer:
      "Rotaların büyük bölümü standart binek otomobillerle kolaylıkla gezilebilir. Yalnızca Karpaz'ın en uç stabilize yollarında ve bazı dağ patikalarında yüksek araçlar ek rahatlık sağlar.",
  },
  {
    question: "Kuzey Kıbrıs'ı gezmek için en uygun dönem hangisidir?",
    answer:
      "İlkbahar (Nisan–Haziran) ve Sonbahar (Eylül–Kasım) ayları sürüş ve açık hava keşifleri için en ideal ılıman havaya sahiptir.",
  },
  {
    question: "Ücretsiz yol rehberini nasıl edinebilirim?",
    answer:
      "Ana sayfamızdaki bültene e-posta adresinizi bırakmanız yeterlidir; Kuzey Kıbrıs yolculuk ipuçları kitapçığı anında posta kutunuza iletilir.",
  },
];

export default function FAQList({ lang = "tr" }: { lang?: Locale }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = lang === "tr" ? faqsTr : faqsEn;

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-primary/5">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              {lang === "tr" ? "Sıkça Sorulan Sorular" : "Frequently Asked Questions"}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              {lang === "tr"
                ? "Kuzey Kıbrıs'ta yola çıkmadan önce bilmeniz gereken tüm detaylar ve pratik cevaplar."
                : "Everything you need to know before hitting the road in Northern Cyprus."}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Card
                key={index}
                className="overflow-hidden border-border transition-colors hover:border-primary/50"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 cursor-pointer"
                >
                  <span className="font-semibold text-lg text-foreground">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronDown className="h-5 w-5 text-primary shrink-0 transition-transform" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-muted-foreground shrink-0 transition-transform" />
                  )}
                </button>
                {isOpen && (
                  <CardContent className="px-6 pb-6 pt-0 text-muted-foreground text-sm leading-relaxed border-t border-border/50">
                    <p className="pt-4">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </main>
  );
}
