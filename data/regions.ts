// data/regions.ts
import { Locale } from "@/lib/i18n";

export interface RegionInfo {
  id: string;
  name: {
    tr: string;
    en: string;
  };
  tagline: {
    tr: string;
    en: string;
  };
  description: {
    tr: string;
    en: string;
  };
  essentials: {
    tr: string[];
    en: string[];
  };
}

export interface ThemeInfo {
  id: string;
  name: {
    tr: string;
    en: string;
  };
}

export const regions: RegionInfo[] = [
  {
    id: "lefkosa",
    name: { tr: "Lefkoşa", en: "Nicosia" },
    tagline: {
      tr: "Avrupa'nın son bölünmüş başkenti",
      en: "Europe's last divided capital",
    },
    description: {
      tr: "Osmanlı hanları, Gotik kilise-camiler, kapalı çarşılar ve Yeşil Hat boyunca uzanan katmanlı bir tarih.",
      en: "Ottoman caravanserais, Gothic cathedral-mosques, bustling bazaars, and living history along the Green Line.",
    },
    essentials: {
      tr: ["Büyük Han", "Selimiye Camii", "Bandabuliya", "Girne Kapısı", "Bedesten"],
      en: ["Büyük Han", "Selimiye Mosque", "Bandabuliya Market", "Kyrenia Gate", "Bedesten"],
    },
  },
  {
    id: "girne",
    name: { tr: "Girne", en: "Kyrenia" },
    tagline: {
      tr: "Liman, kale ve dağların buluştuğu kıyı",
      en: "Where the harbour, castle, and mountains meet",
    },
    description: {
      tr: "Nal biçimli tarihi liman, Haçlı kalesi, Gotik manastır ve Beşparmak Dağları'nın nefes kesen manzaraları.",
      en: "Horseshoe-shaped Venetian harbour, Crusader castle, Gothic abbey, and panoramic Kyrenia mountain ranges.",
    },
    essentials: {
      tr: ["Girne Limanı", "Girne Kalesi", "Bellapais Manastırı", "St. Hilarion", "Batık Gemi Müzesi"],
      en: ["Kyrenia Harbour", "Kyrenia Castle", "Bellapais Abbey", "St. Hilarion Castle", "Shipwreck Museum"],
    },
  },
  {
    id: "magusa",
    name: { tr: "Gazimağusa", en: "Famagusta" },
    tagline: {
      tr: "Surlar, antik kentler ve kadim tarih",
      en: "Venetian ramparts, ancient kingdoms, and living history",
    },
    description: {
      tr: "Ayakta duran Venedik surları, Lala Mustafa Paşa Camii, antik Salamis ve kapalı Maraş kıyısı.",
      en: "Intact Venetian fortifications, Lala Mustafa Pasha Mosque, ancient Salamis, and the open coast of Varosha.",
    },
    essentials: {
      tr: ["Lala Mustafa Paşa Camii", "Othello Kalesi", "Salamis", "Kapalı Maraş", "St. Barnabas"],
      en: ["Lala Mustafa Pasha Mosque", "Othello Castle", "Ancient Salamis", "Varosha", "St. Barnabas Monastery"],
    },
  },
  {
    id: "iskele",
    name: { tr: "İskele & Doğu", en: "Iskele & East" },
    tagline: {
      tr: "Uzun plajlar, kaleler ve doğu kıyısının huzuru",
      en: "Endless golden beaches, castles, and coastal peace",
    },
    description: {
      tr: "Long Beach kıyısı, Boğaz balıkçı limanı, Kantara Kalesi ve Karpaz'a uzanan sakin doğu kapısı.",
      en: "Long Beach sands, Boğaz fishing harbour, Kantara mountain fortress, and the tranquil eastern coastline.",
    },
    essentials: {
      tr: ["Long Beach", "Kantara Kalesi", "Boğaz Limanı", "Bafra", "İskele Arkeoloji Müzesi"],
      en: ["Long Beach", "Kantara Castle", "Boğaz Harbour", "Bafra Beach", "Iskele Archaeology Museum"],
    },
  },
  {
    id: "karpaz",
    name: { tr: "Karpaz", en: "Karpaz Peninsula" },
    tagline: {
      tr: "Yolun bittiği vahşi yarımada",
      en: "The wild, untouched tip of the island",
    },
    description: {
      tr: "Yabani eşekler, Altınkum'un kilometrelerce kumu, tarihi manastırlar ve Zafer Burnu'na uzanan sonsuzluk.",
      en: "Free-roaming wild donkeys, miles of pristine Golden Beach, historic monasteries, and Cape Apostolos Andreas.",
    },
    essentials: {
      tr: ["Altınkum (Golden Beach)", "Apostolos Andreas", "Dipkarpaz", "Yabani Eşekler", "Zafer Burnu"],
      en: ["Golden Beach", "Apostolos Andreas Monastery", "Dipkarpaz Village", "Wild Donkey Reserve", "Cape Zafer"],
    },
  },
  {
    id: "bati",
    name: { tr: "Güzelyurt & Lefke", en: "West (Güzelyurt & Lefke)" },
    tagline: {
      tr: "Narenciye, antik kentler ve batı kıyısı",
      en: "Citrus groves, ancient kingdoms, and western horizons",
    },
    description: {
      tr: "Portakal bahçeleri, antik Soli ve Vouni Sarayı, Osmanlı su kemerleri ve sakin batı sahilleri.",
      en: "Orange orchards, ancient Soli mosaics, cliffside Vouni Palace, Ottoman aqueducts, and peaceful coastlines.",
    },
    essentials: {
      tr: ["Soli Antik Kenti", "Vouni Sarayı", "St. Mamas", "Gemikonağı", "Yeşilırmak"],
      en: ["Ancient Soli", "Vouni Palace", "St. Mamas Church", "Gemikonağı", "Yeşilırmak Strawberries"],
    },
  },
  {
    id: "daglar",
    name: { tr: "Dağlar & Köyler", en: "Mountains & Villages" },
    tagline: {
      tr: "Beşparmak sırtı, kaleler ve saklı köyler",
      en: "Kyrenia mountain ridge, castles, and traditional villages",
    },
    description: {
      tr: "Buffavento kalesi, çam ormanı patikaları, asırlık zeytinlikler ve otantik Akdeniz köy yaşamı.",
      en: "Buffavento fortress, pine forest trails, monumental olive groves, and traditional village life high in the peaks.",
    },
    essentials: {
      tr: ["Buffavento Kalesi", "Beşparmak Sırtı", "Sourp Magar", "Geçitköy Barajı", "Kalkanlı Zeytinlikleri"],
      en: ["Buffavento Castle", "Beşparmak Ridge Trail", "Sourp Magar Monastery", "Geçitköy Dam", "Monumental Olive Groves"],
    },
  },
];

export const themes: ThemeInfo[] = [
  { id: "history", name: { tr: "Tarih & Kültür", en: "History & Culture" } },
  { id: "coast", name: { tr: "Sahil & Plaj", en: "Coast & Beaches" } },
  { id: "nature", name: { tr: "Doğa & Macera", en: "Nature & Adventure" } },
  { id: "food", name: { tr: "Gastronomi", en: "Gastronomy & Food" } },
  { id: "scenic", name: { tr: "Manzara & Fotoğraf", en: "Scenic & Photography" } },
  { id: "nightlife", name: { tr: "Eğlence & Gece", en: "Nightlife & Leisure" } },
];
