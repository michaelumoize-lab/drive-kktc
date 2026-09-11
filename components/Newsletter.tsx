// components/Newsletter.tsx
"use client";

import { useState, type FormEvent } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Send, Gift, CheckCircle, Sparkles } from "lucide-react";
import { Locale } from "@/lib/i18n";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const lang: Locale = pathname?.startsWith("/en") ? "en" : "tr";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card className="max-w-4xl mx-auto border-primary/20 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardContent className="p-6 sm:p-8 md:p-12">
            <div className="grid lg:grid-cols-5 gap-8 items-center">
              {/* Left Content */}
              <div className="lg:col-span-3 space-y-4">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                  <Gift className="h-3.5 w-3.5" />
                  <span>{lang === "tr" ? "Üyelere Özel Ayrıcalıklar" : "Members' Privileges"}</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  {lang === "tr" ? (
                    <>
                      Kuzey Kıbrıs Yol Rehberini{" "}
                      <span className="text-primary">ÜCRETSİZ</span> Edinin!
                    </>
                  ) : (
                    <>
                      Get Road Trip Guide for{" "}
                      <span className="text-primary">FREE!</span>
                    </>
                  )}
                </h2>

                <p className="text-muted-foreground text-sm">
                  {lang === "tr" ? "Bültenimize katılın, ücretsiz rehber anında gelsin:" : "Join our newsletter, get a free guidebook:"}
                  <span className="block text-foreground font-medium mt-1">
                    {lang === "tr"
                      ? "🌟 Kuzey Kıbrıs Yolculuklarında Yapılan En Büyük 10 Hata!"
                      : "🌟 Top 10 Mistakes in Northern Cyprus Road Trip Planning!"}
                  </span>
                </p>

                {/* Features */}
                <ul className="space-y-2 pt-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span>{lang === "tr" ? "Yerlilerden özel rota ve lezzet tüyoları" : "Exclusive insider tips from locals"}</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span>{lang === "tr" ? "Az bilinen koylar ve tarihi hazineler" : "Best routes and hidden gems revealed"}</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span>{lang === "tr" ? "Hava durumu, yol ve sürüş güvenlik tavsiyeleri" : "Weather, safety, and driving tips"}</span>
                  </li>
                </ul>
              </div>

              {/* Right Content - Form */}
              <div className="lg:col-span-2">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground"
                      >
                        {lang === "tr" ? "E-posta adresiniz" : "Type your e-mail here"}
                      </label>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Input
                          id="email"
                          type="email"
                          placeholder={lang === "tr" ? "ornek@domain.com" : "you@domain.com"}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="flex-1"
                          disabled={isLoading}
                        />
                        <Button
                          type="submit"
                          disabled={isLoading || !email}
                          className="sm:flex-shrink-0"
                        >
                          {isLoading ? (
                            <span className="flex items-center gap-2">
                              <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                              {lang === "tr" ? "Kaydediliyor..." : "Signing Up..."}
                            </span>
                          ) : (
                            <span className="flex items-center gap-2">
                              {lang === "tr" ? "Abone Ol" : "Sign Up"}
                              <Send className="h-4 w-4" />
                            </span>
                          )}
                        </Button>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {lang === "tr"
                        ? "Spam yok, dilediğiniz zaman ayrılabilirsiniz. Verileriniz güvendedir."
                        : "No spam, unsubscribe anytime. Your data is safe with us."}
                    </p>
                  </form>
                ) : (
                  <div className="text-center space-y-3 py-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {lang === "tr" ? "E-postanızı Kontrol Edin! 📬" : "Check Your Email! 📬"}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {lang === "tr"
                        ? "Ücretsiz rehberiniz posta kutunuza doğru yola çıktı."
                        : "Your free road trip guide is on its way to your inbox."}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsSubmitted(false)}
                      className="mt-2"
                    >
                      {lang === "tr" ? "Farklı bir e-posta ile kaydol" : "Sign up another email"}
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
