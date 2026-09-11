// data/routes.ts
import { Locale } from "@/lib/i18n";

export interface RouteStop {
  name: string;
  description: string;
  images?: string[];
  visitTime?: string;
  openingHours?: string;
  entranceFee?: string;
  tip?: string;
  suggestedArrival?: string;
  driveTime?: string;
}

export interface PracticalInfo {
  bestSeason: string;
  parking: string;
  entranceFees: string;
  fuelStations: string;
  recommendedVehicle: string;
  restaurants: string;
  publicTransport: string;
}

export interface Route {
  id: string;
  slug: string;
  region: string;
  themes: string[];
  title: string;
  subtitle: string;
  theme: string;
  startFinish: string;
  heroImage: string;
  duration: string;
  distance: string;
  rating: number;
  mapEmbedUrl?: string;
  intro: string;
  suggestedStart?: string;
  stops: RouteStop[];
  practicalInfo: PracticalInfo;
  insiderTip: string;
  proposers: string[]; // Formatted initials (e.g. ["M.U.", "H.G."])
  seo: {
    title: string;
    description: string;
  };
}

interface RawRouteItem {
  id: string;
  slug: string;
  region: string;
  themes: string[];
  rating: number;
  distance: string;
  duration: { tr: string; en: string };
  difficulty: { tr: string; en: string };
  startFinish: { tr: string; en: string };
  heroImage: string;
  mapEmbedUrl?: string;
  title: { tr: string; en: string };
  subtitle: { tr: string; en: string };
  intro: { tr: string; en: string };
  insiderTip: { tr: string; en: string };
  proposers: string[];
  stops: {
    tr: RouteStop[];
    en: RouteStop[];
  };
  practicalInfo: {
    tr: PracticalInfo;
    en: PracticalInfo;
  };
}

export const rawRoutes: RawRouteItem[] = [
  {
    "id": "lef-oldcity",
    "slug": "nicosia-old-city-loop",
    "region": "lefkosa",
    "themes": [
      "history"
    ],
    "rating": 5,
    "distance": "35–65 km",
    "duration": {
      "tr": "3–4 saat",
      "en": "3–4 hours"
    },
    "difficulty": {
      "tr": "Kolay (yürüyüş)",
      "en": "Easy (walking)"
    },
    "startFinish": {
      "tr": "Girne Kapısı",
      "en": "Büyük Han & Kyrenia Gate"
    },
    "heroImage": "/images/routes/nicosia-loop.jpg",
    "title": {
      "tr": "Surlariçi Kültür & Sokak Yürüyüşü",
      "en": "Walled City Culture & Historic Walking Loop"
    },
    "subtitle": {
      "tr": "Şehir kapılarından tarihi hanlara, çarşı sokaklarından meydanlara uzanan kompakt bir surlariçi rotası. Her şey yürüme mesafesinde.",
      "en": "A compact walking tour stretching from historic city gates to caravanserais and lively bazaars. Everything within easy walking distance."
    },
    "intro": {
      "tr": "Şehir kapılarından tarihi hanlara, çarşı sokaklarından meydanlara uzanan kompakt bir surlariçi rotası. Her şey yürüme mesafesinde. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "A compact walking tour stretching from historic city gates to caravanserais and lively bazaars. Everything within easy walking distance. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Gün batımına doğru gidin — tur grupları dağılınca Selimiye'ye vuran altın ışık ve sessiz sokaklar şehrin en güzel atmosferini yaratır.",
      "en": "Go towards sunset — once the tour groups disperse, the golden hour light hitting Selimiye and the quiet cobbled alleys create the city’s finest atmosphere."
    },
    "proposers": [
      "E.A.",
      "H.G.",
      "B.S.",
      "B.K.",
      "E.P.",
      "M.U.",
      "M.M.",
      "D.O.",
      "K.A.",
      "A.S."
    ],
    "stops": {
      "tr": [
        {
          "name": "Girne Kapısı",
          "description": "Girne Kapısı, Surlariçi Kültür & Sokak Yürüyüşü güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk",
          "images": [
            "/images/routes/nicosia/kyrenia-gate/1.jpg",
            "/images/routes/nicosia/kyrenia-gate/2.jpg",
            "/images/routes/nicosia/kyrenia-gate/3.jpg",
            "/images/routes/nicosia/kyrenia-gate/4.jpg",
            "/images/routes/nicosia/kyrenia-gate/5.jpg"
          ]
        },
        {
          "name": "Sarayönü / Atatürk Meydanı",
          "description": "Sarayönü / Atatürk Meydanı, Surlariçi Kültür & Sokak Yürüyüşü güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Büyük Han",
          "description": "Büyük Han, Surlariçi Kültür & Sokak Yürüyüşü güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk",
          "images": [
            "/images/routes/nicosia/büyük-han/1.jpg",
            "/images/routes/nicosia/büyük-han/2.jpg",
            "/images/routes/nicosia/büyük-han/3.jpg",
            "/images/routes/nicosia/büyük-han/4.jpg",
            "/images/routes/nicosia/büyük-han/5.jpg"
          ]
        },
        {
          "name": "Selimiye Camii",
          "description": "Selimiye Camii, Surlariçi Kültür & Sokak Yürüyüşü güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk",
          "images": [
            "/images/routes/nicosia/selimiye-mosque/1.jpg",
            "/images/routes/nicosia/selimiye-mosque/2.jpg",
            "/images/routes/nicosia/selimiye-mosque/3.jpg",
            "/images/routes/nicosia/selimiye-mosque/4.jpg",
            "/images/routes/nicosia/selimiye-mosque/5.jpg"
          ]
        },
        {
          "name": "Bandabuliya",
          "description": "Bandabuliya, Surlariçi Kültür & Sokak Yürüyüşü güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk",
          "images": [
            "/images/routes/nicosia/bandabuliya-market/1.jpg",
            "/images/routes/nicosia/bandabuliya-market/2.jpg",
            "/images/routes/nicosia/bandabuliya-market/3.jpg",
            "/images/routes/nicosia/bandabuliya-market/4.jpg",
            "/images/routes/nicosia/bandabuliya-market/5.jpg",
            "/images/routes/nicosia/bandabuliya-market/6.jpg",
            "/images/routes/nicosia/bandabuliya-market/7.jpg"
          ]
        },
        {
          "name": "Arasta Sokağı",
          "description": "Arasta Sokağı, Surlariçi Kültür & Sokak Yürüyüşü güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Samanbahçe Evleri",
          "description": "Samanbahçe Evleri, Surlariçi Kültür & Sokak Yürüyüşü güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "18:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Kyrenia Gate",
          "description": "Kyrenia Gate is an essential milestone along the Walled City Culture & Historic Walking Loop. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "9:00",
          "driveTime": "0 min",
          "images": [
            "/images/routes/nicosia/kyrenia-gate/1.jpg",
            "/images/routes/nicosia/kyrenia-gate/2.jpg",
            "/images/routes/nicosia/kyrenia-gate/3.jpg",
            "/images/routes/nicosia/kyrenia-gate/4.jpg",
            "/images/routes/nicosia/kyrenia-gate/5.jpg"
          ]
        },
        {
          "name": "Sarayönü / Atatürk Square",
          "description": "Sarayönü / Atatürk Square is an essential milestone along the Walled City Culture & Historic Walking Loop. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Büyük Han (Great Inn)",
          "description": "Büyük Han (Great Inn) is an essential milestone along the Walled City Culture & Historic Walking Loop. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min",
          "images": [
            "/images/routes/nicosia/büyük-han/1.jpg",
            "/images/routes/nicosia/büyük-han/2.jpg",
            "/images/routes/nicosia/büyük-han/3.jpg",
            "/images/routes/nicosia/büyük-han/4.jpg",
            "/images/routes/nicosia/büyük-han/5.jpg"
          ]
        },
        {
          "name": "Selimiye Mosque (St. Sophia Cathedral)",
          "description": "Selimiye Mosque (St. Sophia Cathedral) is an essential milestone along the Walled City Culture & Historic Walking Loop. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min",
          "images": [
            "/images/routes/nicosia/selimiye-mosque/1.jpg",
            "/images/routes/nicosia/selimiye-mosque/2.jpg",
            "/images/routes/nicosia/selimiye-mosque/3.jpg",
            "/images/routes/nicosia/selimiye-mosque/4.jpg",
            "/images/routes/nicosia/selimiye-mosque/5.jpg"
          ]
        },
        {
          "name": "Bandabuliya Municipal Market",
          "description": "Bandabuliya Municipal Market is an essential milestone along the Walled City Culture & Historic Walking Loop. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min",
          "images": [
            "/images/routes/nicosia/bandabuliya-market/1.jpg",
            "/images/routes/nicosia/bandabuliya-market/2.jpg",
            "/images/routes/nicosia/bandabuliya-market/3.jpg",
            "/images/routes/nicosia/bandabuliya-market/4.jpg",
            "/images/routes/nicosia/bandabuliya-market/5.jpg",
            "/images/routes/nicosia/bandabuliya-market/6.jpg",
            "/images/routes/nicosia/bandabuliya-market/7.jpg"
          ]
        },
        {
          "name": "Arasta Pedestrian Street",
          "description": "Arasta Pedestrian Street is an essential milestone along the Walled City Culture & Historic Walking Loop. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Samanbahçe Traditional Quarter",
          "description": "Samanbahçe Traditional Quarter is an essential milestone along the Walled City Culture & Historic Walking Loop. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "18:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "İlkbahar (Nisan–Haziran) & Sonbahar (Eylül–Kasım)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "Spring (April–June) & Autumn (September–November)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    }
  },
  {
    "id": "lef-museums",
    "slug": "lef-museums",
    "region": "lefkosa",
    "themes": [
      "history"
    ],
    "rating": 5,
    "distance": "35–65 km",
    "duration": {
      "tr": "Yarım gün",
      "en": "Half day"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "Girne Kapısı",
      "en": "Kyrenia Gate"
    },
    "heroImage": "/images/routes/nicosia-loop.jpg",
    "title": {
      "tr": "Müzeler & Osmanlı Mirası",
      "en": "Museums & Ottoman Heritage of Nicosia"
    },
    "subtitle": {
      "tr": "Mevlevi Tekke'den Derviş Paşa Konağı'na, Rüstem Kitabevi'nden Lüzinyan Evi'ne — başkentin katmanlı geçmişine odaklanan bir müze rotası.",
      "en": "From Mevlevi Tekke to Dervish Pasha Mansion, Rüstem Bookshop, and Lusignan House — a deep dive into the capital’s layered history."
    },
    "intro": {
      "tr": "Mevlevi Tekke'den Derviş Paşa Konağı'na, Rüstem Kitabevi'nden Lüzinyan Evi'ne — başkentin katmanlı geçmişine odaklanan bir müze rotası. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "From Mevlevi Tekke to Dervish Pasha Mansion, Rüstem Bookshop, and Lusignan House — a deep dive into the capital’s layered history. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Rüstem Kitabevi'nin arka bahçesindeki kafe, yürüyüş arası kahve molası için ideal ve çoğu turistin gözünden kaçar.",
      "en": "The courtyard cafe tucked behind Rüstem Bookshop is ideal for a quiet coffee break between walking segments and is often missed by tourists."
    },
    "proposers": [
      "E.A.",
      "U.S.",
      "M.M."
    ],
    "stops": {
      "tr": [
        {
          "name": "Girne Kapısı",
          "description": "Girne Kapısı, Müzeler & Osmanlı Mirası güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk",
          "images": [
            "/images/routes/nicosia/kyrenia-gate/1.jpg",
            "/images/routes/nicosia/kyrenia-gate/2.jpg",
            "/images/routes/nicosia/kyrenia-gate/3.jpg",
            "/images/routes/nicosia/kyrenia-gate/4.jpg",
            "/images/routes/nicosia/kyrenia-gate/5.jpg"
          ]
        },
        {
          "name": "Mevlevi Tekke Müzesi",
          "description": "Mevlevi Tekke Müzesi, Müzeler & Osmanlı Mirası güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Derviş Paşa Etnografya Müzesi",
          "description": "Derviş Paşa Etnografya Müzesi, Müzeler & Osmanlı Mirası güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Rüstem Kitabevi",
          "description": "Rüstem Kitabevi, Müzeler & Osmanlı Mirası güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Kumarcılar Hanı",
          "description": "Kumarcılar Hanı, Müzeler & Osmanlı Mirası güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Lüzinyan Evi",
          "description": "Lüzinyan Evi, Müzeler & Osmanlı Mirası güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Kyrenia Gate",
          "description": "Kyrenia Gate is an essential milestone along the Museums & Ottoman Heritage of Nicosia. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "9:00",
          "driveTime": "0 min",
          "images": [
            "/images/routes/nicosia/kyrenia-gate/1.jpg",
            "/images/routes/nicosia/kyrenia-gate/2.jpg",
            "/images/routes/nicosia/kyrenia-gate/3.jpg",
            "/images/routes/nicosia/kyrenia-gate/4.jpg",
            "/images/routes/nicosia/kyrenia-gate/5.jpg"
          ]
        },
        {
          "name": "Mevlevi Tekke Museum",
          "description": "Mevlevi Tekke Museum is an essential milestone along the Museums & Ottoman Heritage of Nicosia. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Dervish Pasha Ethnographic Museum",
          "description": "Dervish Pasha Ethnographic Museum is an essential milestone along the Museums & Ottoman Heritage of Nicosia. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Rüstem Bookshop & Cultural Courtyard",
          "description": "Rüstem Bookshop & Cultural Courtyard is an essential milestone along the Museums & Ottoman Heritage of Nicosia. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Kumarcılar Han (Gamblers Inn)",
          "description": "Kumarcılar Han (Gamblers Inn) is an essential milestone along the Museums & Ottoman Heritage of Nicosia. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Lusignan Medieval Mansion",
          "description": "Lusignan Medieval Mansion is an essential milestone along the Museums & Ottoman Heritage of Nicosia. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "İlkbahar (Nisan–Haziran) & Sonbahar (Eylül–Kasım)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "Spring (April–June) & Autumn (September–November)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    }
  },
  {
    "id": "lef-modern",
    "slug": "lef-modern",
    "region": "lefkosa",
    "themes": [
      "history",
      "food",
      "nightlife"
    ],
    "rating": 5,
    "distance": "35–65 km",
    "duration": {
      "tr": "Tam gün",
      "en": "Full day"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "Klasik Araba Müzesi (YDÜ)",
      "en": "Dereboyu Avenue"
    },
    "heroImage": "/images/routes/nicosia-loop.jpg",
    "title": {
      "tr": "Modern Lefkoşa: Alışveriş, Müze & Gece",
      "en": "Modern Nicosia: Shopping, Classic Cars & Zahra Street"
    },
    "subtitle": {
      "tr": "Klasik Araba Müzesi'nden Dereboyu'nun sokak modasına, tarihi konaklardan çağdaş kafe ve barlara — başkentin eski ve yeni yüzü.",
      "en": "From the Classic Car Museum to Dereboyu fashion street, historical mansions, and contemporary cafes — the vibrant faces of the capital."
    },
    "intro": {
      "tr": "Klasik Araba Müzesi'nden Dereboyu'nun sokak modasına, tarihi konaklardan çağdaş kafe ve barlara — başkentin eski ve yeni yüzü. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "From the Classic Car Museum to Dereboyu fashion street, historical mansions, and contemporary cafes — the vibrant faces of the capital. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Dereboyu akşam üstü canlanır; gündüz alışveriş, akşam ise kafe-bar atmosferi için ideal. Zahra Sokak gece atmosferinin kalbi.",
      "en": "Dereboyu comes alive in the late afternoon; ideal for daytime boutique shopping and evening cafe culture. Zahra Street is the true heartbeat of the old quarter at night."
    },
    "proposers": [
      "A.T.",
      "B.K.",
      "A.K."
    ],
    "stops": {
      "tr": [
        {
          "name": "Klasik Araba Müzesi (YDÜ)",
          "description": "Klasik Araba Müzesi (YDÜ), Modern Lefkoşa: Alışveriş, Müze & Gece güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Dereboyu Caddesi",
          "description": "Dereboyu Caddesi, Modern Lefkoşa: Alışveriş, Müze & Gece güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Surlariçi",
          "description": "Surlariçi, Modern Lefkoşa: Alışveriş, Müze & Gece güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Zahra Sokağı",
          "description": "Zahra Sokağı, Modern Lefkoşa: Alışveriş, Müze & Gece güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Mooi Cafe",
          "description": "Mooi Cafe, Modern Lefkoşa: Alışveriş, Müze & Gece güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Sedo Ice Cream & Cakes",
          "description": "Sedo Ice Cream & Cakes, Modern Lefkoşa: Alışveriş, Müze & Gece güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Cyprus Classic Car Museum (NEU)",
          "description": "Cyprus Classic Car Museum (NEU) is an essential milestone along the Modern Nicosia: Shopping, Classic Cars & Zahra Street. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Dereboyu Avenue Promenade",
          "description": "Dereboyu Avenue Promenade is an essential milestone along the Modern Nicosia: Shopping, Classic Cars & Zahra Street. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Walled City Old Quarters",
          "description": "Walled City Old Quarters is an essential milestone along the Modern Nicosia: Shopping, Classic Cars & Zahra Street. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Zahra Street Night Scene",
          "description": "Zahra Street Night Scene is an essential milestone along the Modern Nicosia: Shopping, Classic Cars & Zahra Street. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Mooi Artisan Cafe",
          "description": "Mooi Artisan Cafe is an essential milestone along the Modern Nicosia: Shopping, Classic Cars & Zahra Street. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Sedo Traditional Patisserie",
          "description": "Sedo Traditional Patisserie is an essential milestone along the Modern Nicosia: Shopping, Classic Cars & Zahra Street. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "İlkbahar (Nisan–Haziran) & Sonbahar (Eylül–Kasım)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "Spring (April–June) & Autumn (September–November)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    }
  },
  {
    "id": "gir-classic",
    "slug": "kyrenia-heritage-coastal",
    "region": "girne",
    "themes": [
      "history",
      "scenic",
      "coast"
    ],
    "rating": 5,
    "distance": "35–65 km",
    "duration": {
      "tr": "Tam gün",
      "en": "Full day"
    },
    "difficulty": {
      "tr": "Orta (kale tırmanışı)",
      "en": "Moderate (castle climb)"
    },
    "startFinish": {
      "tr": "Girne Limanı",
      "en": "Kyrenia Harbour"
    },
    "heroImage": "/images/routes/kyrenia-loop.jpg",
    "title": {
      "tr": "Girne Klasik: Liman, Kale, Bellapais & St. Hilarion",
      "en": "Kyrenia Heritage & Coastal Loop"
    },
    "subtitle": {
      "tr": "Adanın en ikonik rotası: nal biçimli tarihi liman, Haçlı kalesi, Batık Gemi Müzesi, Gotik Bellapais Manastırı ve masalsı St. Hilarion. Dağdan kıyıya bütün Girne bir günde.",
      "en": "The island’s most iconic route: picturesque horseshoe harbour, Crusader castle, 4th-century BC Shipwreck Museum, Gothic Bellapais Abbey, and fairy-tale St. Hilarion."
    },
    "intro": {
      "tr": "Adanın en ikonik rotası: nal biçimli tarihi liman, Haçlı kalesi, Batık Gemi Müzesi, Gotik Bellapais Manastırı ve masalsı St. Hilarion. Dağdan kıyıya bütün Girne bir günde. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "The island’s most iconic route: picturesque horseshoe harbour, Crusader castle, 4th-century BC Shipwreck Museum, Gothic Bellapais Abbey, and fairy-tale St. Hilarion. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "St. Hilarion'a sabah erken çıkın — sıcak basmadan tırmanış çok daha keyifli ve Kraliçe'nin Penceresi'nden manzara sissizken en berrak.",
      "en": "Climb St. Hilarion Castle in the early morning before midday heat. The view from the Queen’s Window across the coastline is clearest in the early hours."
    },
    "proposers": [
      "H.G.",
      "A.T.",
      "B.S.",
      "B.K.",
      "F.Y.",
      "E.P.",
      "T.C.",
      "V.R.",
      "E.A.",
      "M.U.",
      "K.A.",
      "M.M.",
      "D.O.",
      "S.A."
    ],
    "stops": {
      "tr": [
        {
          "name": "Girne Limanı",
          "description": "Girne Limanı, Girne Klasik: Liman, Kale, Bellapais & St. Hilarion güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk",
          "images": [
            "/images/routes/kyrenia/kyrenia-harbour/1.jpg",
            "/images/routes/kyrenia/kyrenia-harbour/2.jpg",
            "/images/routes/kyrenia/kyrenia-harbour/3.jpg",
            "/images/routes/kyrenia/kyrenia-harbour/4.jpg",
            "/images/routes/kyrenia/kyrenia-harbour/5.jpg"
          ]
        },
        {
          "name": "Girne Kalesi",
          "description": "Girne Kalesi, Girne Klasik: Liman, Kale, Bellapais & St. Hilarion güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk",
          "images": [
            "/images/routes/kyrenia/kyrenia-castle/1.jpg",
            "/images/routes/kyrenia/kyrenia-castle/2.jpg",
            "/images/routes/kyrenia/kyrenia-castle/3.jpg",
            "/images/routes/kyrenia/kyrenia-castle/4.jpg",
            "/images/routes/kyrenia/kyrenia-castle/5.jpg",
            "/images/routes/kyrenia/kyrenia-castle/6.jpg"
          ]
        },
        {
          "name": "Batık Gemi Müzesi",
          "description": "Batık Gemi Müzesi, Girne Klasik: Liman, Kale, Bellapais & St. Hilarion güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Bellapais Köyü & Manastırı",
          "description": "Bellapais Köyü & Manastırı, Girne Klasik: Liman, Kale, Bellapais & St. Hilarion güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk",
          "images": [
            "/images/routes/kyrenia/bellapais-abbey/1.jpg",
            "/images/routes/kyrenia/bellapais-abbey/2.jpg",
            "/images/routes/kyrenia/bellapais-abbey/3.jpg",
            "/images/routes/kyrenia/bellapais-abbey/4.jpg",
            "/images/routes/kyrenia/bellapais-abbey/5.jpg"
          ]
        },
        {
          "name": "St. Hilarion Kalesi",
          "description": "St. Hilarion Kalesi, Girne Klasik: Liman, Kale, Bellapais & St. Hilarion güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk",
          "images": [
            "/images/routes/kyrenia/st-hilarion-castle/1.jpg",
            "/images/routes/kyrenia/st-hilarion-castle/2.jpg",
            "/images/routes/kyrenia/st-hilarion-castle/3.jpg"
          ]
        },
        {
          "name": "Beşparmak Manzara Noktası",
          "description": "Beşparmak Manzara Noktası, Girne Klasik: Liman, Kale, Bellapais & St. Hilarion güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Kyrenia Old Harbour",
          "description": "Kyrenia Old Harbour is an essential milestone along the Kyrenia Heritage & Coastal Loop. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "9:00",
          "driveTime": "0 min",
          "images": [
            "/images/routes/kyrenia/kyrenia-harbour/1.jpg",
            "/images/routes/kyrenia/kyrenia-harbour/2.jpg",
            "/images/routes/kyrenia/kyrenia-harbour/3.jpg",
            "/images/routes/kyrenia/kyrenia-harbour/4.jpg",
            "/images/routes/kyrenia/kyrenia-harbour/5.jpg"
          ]
        },
        {
          "name": "Kyrenia Castle",
          "description": "Kyrenia Castle is an essential milestone along the Kyrenia Heritage & Coastal Loop. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min",
          "images": [
            "/images/routes/kyrenia/kyrenia-castle/1.jpg",
            "/images/routes/kyrenia/kyrenia-castle/2.jpg",
            "/images/routes/kyrenia/kyrenia-castle/3.jpg",
            "/images/routes/kyrenia/kyrenia-castle/4.jpg",
            "/images/routes/kyrenia/kyrenia-castle/5.jpg",
            "/images/routes/kyrenia/kyrenia-castle/6.jpg"
          ]
        },
        {
          "name": "Ancient Shipwreck Museum",
          "description": "Ancient Shipwreck Museum is an essential milestone along the Kyrenia Heritage & Coastal Loop. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Bellapais Village & Abbey",
          "description": "Bellapais Village & Abbey is an essential milestone along the Kyrenia Heritage & Coastal Loop. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min",
          "images": [
            "/images/routes/kyrenia/bellapais-abbey/1.jpg",
            "/images/routes/kyrenia/bellapais-abbey/2.jpg",
            "/images/routes/kyrenia/bellapais-abbey/3.jpg",
            "/images/routes/kyrenia/bellapais-abbey/4.jpg",
            "/images/routes/kyrenia/bellapais-abbey/5.jpg"
          ]
        },
        {
          "name": "St. Hilarion Mountain Fortress",
          "description": "St. Hilarion Mountain Fortress is an essential milestone along the Kyrenia Heritage & Coastal Loop. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min",
          "images": [
            "/images/routes/kyrenia/st-hilarion-castle/1.jpg",
            "/images/routes/kyrenia/st-hilarion-castle/2.jpg",
            "/images/routes/kyrenia/st-hilarion-castle/3.jpg"
          ]
        },
        {
          "name": "Five Finger Mountain Lookout",
          "description": "Five Finger Mountain Lookout is an essential milestone along the Kyrenia Heritage & Coastal Loop. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "İlkbahar (Nisan–Haziran) & Sonbahar (Eylül–Kasım)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "Spring (April–June) & Autumn (September–November)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    }
  },
  {
    "id": "gir-coastal",
    "slug": "gir-coastal",
    "region": "girne",
    "themes": [
      "coast",
      "scenic"
    ],
    "rating": 5,
    "distance": "35–65 km",
    "duration": {
      "tr": "Yarım gün",
      "en": "Half day"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "Lapta Sahil Yürüyüş Yolu",
      "en": "Lapta Coastal Promenade"
    },
    "heroImage": "/images/routes/kyrenia-loop.jpg",
    "title": {
      "tr": "Girne Sahil Şeridi & Gizli Plajlar",
      "en": "Kyrenia Coastline & Secret Swimming Coves"
    },
    "subtitle": {
      "tr": "Girne'den batıya uzanan sahil yolu boyunca altın plajlar, seyir noktaları ve saklı koylar; Alagadi kaplumbağa plajından Lapta yürüyüş yoluna. Nisan–Ekim arası ideal.",
      "en": "Stretching west along the coast with golden beaches, scenic lookouts, and hidden bays — from the Lapta walkway to protected Alagadi turtle beach."
    },
    "intro": {
      "tr": "Girne'den batıya uzanan sahil yolu boyunca altın plajlar, seyir noktaları ve saklı koylar; Alagadi kaplumbağa plajından Lapta yürüyüş yoluna. Nisan–Ekim arası ideal. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "Stretching west along the coast with golden beaches, scenic lookouts, and hidden bays — from the Lapta walkway to protected Alagadi turtle beach. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Yazın yol kenarındaki meyve tezgahlarında taze incir ve frenk inciri satılır — molada mutlaka deneyin.",
      "en": "In summer, roadside stalls along the coast sell fresh figs and prickly pears — essential refreshment during your road stops."
    },
    "proposers": [
      "B.S.",
      "A.M.",
      "A.T.",
      "D.O."
    ],
    "stops": {
      "tr": [
        {
          "name": "Lapta Sahil Yürüyüş Yolu",
          "description": "Lapta Sahil Yürüyüş Yolu, Girne Sahil Şeridi & Gizli Plajlar güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Escape Beach",
          "description": "Escape Beach, Girne Sahil Şeridi & Gizli Plajlar güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Karaoğlanoğlu Kıyısı",
          "description": "Karaoğlanoğlu Kıyısı, Girne Sahil Şeridi & Gizli Plajlar güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Alagadi Kaplumbağa Plajı",
          "description": "Alagadi Kaplumbağa Plajı, Girne Sahil Şeridi & Gizli Plajlar güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk",
          "images": [
            "/images/routes/kyrenia/alagadi-turtle-beach/1.jpg",
            "/images/routes/kyrenia/alagadi-turtle-beach/2.jpeg",
            "/images/routes/kyrenia/alagadi-turtle-beach/3.jpg"
          ]
        },
        {
          "name": "Gizli Yüzme Koyları",
          "description": "Gizli Yüzme Koyları, Girne Sahil Şeridi & Gizli Plajlar güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Esentepe Seyir Noktaları",
          "description": "Esentepe Seyir Noktaları, Girne Sahil Şeridi & Gizli Plajlar güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Lapta Coastal Boardwalk",
          "description": "Lapta Coastal Boardwalk is an essential milestone along the Kyrenia Coastline & Secret Swimming Coves. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Escape Beach Cove",
          "description": "Escape Beach Cove is an essential milestone along the Kyrenia Coastline & Secret Swimming Coves. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Karaoğlanoğlu Rocky Shore",
          "description": "Karaoğlanoğlu Rocky Shore is an essential milestone along the Kyrenia Coastline & Secret Swimming Coves. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Alagadi Turtle Sanctuary Beach",
          "description": "Alagadi Turtle Sanctuary Beach is an essential milestone along the Kyrenia Coastline & Secret Swimming Coves. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min",
          "images": [
            "/images/routes/kyrenia/alagadi-turtle-beach/1.jpg",
            "/images/routes/kyrenia/alagadi-turtle-beach/2.jpeg",
            "/images/routes/kyrenia/alagadi-turtle-beach/3.jpg"
          ]
        },
        {
          "name": "Hidden Mediterranean Coves",
          "description": "Hidden Mediterranean Coves is an essential milestone along the Kyrenia Coastline & Secret Swimming Coves. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Esentepe Coastal Viewpoints",
          "description": "Esentepe Coastal Viewpoints is an essential milestone along the Kyrenia Coastline & Secret Swimming Coves. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "İlkbahar (Nisan–Haziran) & Sonbahar (Eylül–Kasım)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "Spring (April–June) & Autumn (September–November)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    }
  },
  {
    "id": "gir-sunset",
    "slug": "gir-sunset",
    "region": "girne",
    "themes": [
      "scenic",
      "coast"
    ],
    "rating": 5,
    "distance": "35–65 km",
    "duration": {
      "tr": "Yarım gün",
      "en": "Half day"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "Mavi Köşk (Blue House)",
      "en": "Bellapais Village"
    },
    "heroImage": "/images/routes/kyrenia-loop.jpg",
    "title": {
      "tr": "Gün Batımı & Fotoğraf Noktaları",
      "en": "Kyrenia Sunset Panoramas & Photography Trail"
    },
    "subtitle": {
      "tr": "Işık ve manzara etrafında kurulu rota: Mavi Köşk, Bellapais terasları, sahil kulüplerinin gün batımı deck'leri ve Instagram'lık sahiller.",
      "en": "A photography journey crafted around light and dramatic elevations: Mavi Köşk (Blue House), Bellapais terrace gardens, and coastal sunset decks."
    },
    "intro": {
      "tr": "Işık ve manzara etrafında kurulu rota: Mavi Köşk, Bellapais terasları, sahil kulüplerinin gün batımı deck'leri ve Instagram'lık sahiller. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "A photography journey crafted around light and dramatic elevations: Mavi Köşk (Blue House), Bellapais terrace gardens, and coastal sunset decks. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Bellapais terasındaki kafelerde günbatımı için erken gidip masa kapın; manzaralı masalar akşamüstü hızla dolar.",
      "en": "Arrive early at the Bellapais village cafe terraces to secure a sea-view table; the prime sunset spots fill quickly in the late afternoon."
    },
    "proposers": [
      "E.A.",
      "E.P.",
      "V.R.",
      "A.S.",
      "R.J.",
      "M.M."
    ],
    "stops": {
      "tr": [
        {
          "name": "Mavi Köşk (Blue House)",
          "description": "Mavi Köşk (Blue House), Gün Batımı & Fotoğraf Noktaları güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Bellapais Terası",
          "description": "Bellapais Terası, Gün Batımı & Fotoğraf Noktaları güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk",
          "images": [
            "/images/routes/kyrenia/bellapais-abbey/1.jpg",
            "/images/routes/kyrenia/bellapais-abbey/2.jpg",
            "/images/routes/kyrenia/bellapais-abbey/3.jpg",
            "/images/routes/kyrenia/bellapais-abbey/4.jpg",
            "/images/routes/kyrenia/bellapais-abbey/5.jpg"
          ]
        },
        {
          "name": "St. Hilarion Seyir Noktası",
          "description": "St. Hilarion Seyir Noktası, Gün Batımı & Fotoğraf Noktaları güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk",
          "images": [
            "/images/routes/kyrenia/st-hilarion-castle/1.jpg",
            "/images/routes/kyrenia/st-hilarion-castle/2.jpg",
            "/images/routes/kyrenia/st-hilarion-castle/3.jpg"
          ]
        },
        {
          "name": "Acapulco / Escape Beach Deck",
          "description": "Acapulco / Escape Beach Deck, Gün Batımı & Fotoğraf Noktaları güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Camelot Beach",
          "description": "Camelot Beach, Gün Batımı & Fotoğraf Noktaları güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Gün Batımı Noktası",
          "description": "Gün Batımı Noktası, Gün Batımı & Fotoğraf Noktaları güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Mavi Köşk (The Blue Mansion)",
          "description": "Mavi Köşk (The Blue Mansion) is an essential milestone along the Kyrenia Sunset Panoramas & Photography Trail. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Bellapais Panoramic Terrace",
          "description": "Bellapais Panoramic Terrace is an essential milestone along the Kyrenia Sunset Panoramas & Photography Trail. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min",
          "images": [
            "/images/routes/kyrenia/bellapais-abbey/1.jpg",
            "/images/routes/kyrenia/bellapais-abbey/2.jpg",
            "/images/routes/kyrenia/bellapais-abbey/3.jpg",
            "/images/routes/kyrenia/bellapais-abbey/4.jpg",
            "/images/routes/kyrenia/bellapais-abbey/5.jpg"
          ]
        },
        {
          "name": "St. Hilarion Sunset Lookout",
          "description": "St. Hilarion Sunset Lookout is an essential milestone along the Kyrenia Sunset Panoramas & Photography Trail. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min",
          "images": [
            "/images/routes/kyrenia/st-hilarion-castle/1.jpg",
            "/images/routes/kyrenia/st-hilarion-castle/2.jpg",
            "/images/routes/kyrenia/st-hilarion-castle/3.jpg"
          ]
        },
        {
          "name": "Acapulco & Escape Sunset Decks",
          "description": "Acapulco & Escape Sunset Decks is an essential milestone along the Kyrenia Sunset Panoramas & Photography Trail. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Camelot Beach Cove",
          "description": "Camelot Beach Cove is an essential milestone along the Kyrenia Sunset Panoramas & Photography Trail. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Kyrenia Coast Golden Hour Point",
          "description": "Kyrenia Coast Golden Hour Point is an essential milestone along the Kyrenia Sunset Panoramas & Photography Trail. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "İlkbahar (Nisan–Haziran) & Sonbahar (Eylül–Kasım)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "Spring (April–June) & Autumn (September–November)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    }
  },
  {
    "id": "gir-nightlife",
    "slug": "gir-nightlife",
    "region": "girne",
    "themes": [
      "nightlife",
      "food",
      "coast"
    ],
    "rating": 5,
    "distance": "35–65 km",
    "duration": {
      "tr": "Öğleden akşama",
      "en": "Afternoon to night"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "Escape Beach Club",
      "en": "Kyrenia Marina"
    },
    "heroImage": "/images/routes/kyrenia-loop.jpg",
    "title": {
      "tr": "Girne Eğlence & Gece Hayatı",
      "en": "Kyrenia Glamour: Beach Clubs, Dining & Nightlife"
    },
    "subtitle": {
      "tr": "Sahil kulüpleri, seçkin restoranlar ve gece kulüpleriyle Girne'nin lüks ve enerjik yüzü. Gündüz plaj, akşam DJ.",
      "en": "Chic beach clubs, seaside marina seafood restaurants, and panoramic rooftop lounges showcasing Kyrenia’s vibrant nightlife."
    },
    "intro": {
      "tr": "Sahil kulüpleri, seçkin restoranlar ve gece kulüpleriyle Girne'nin lüks ve enerjik yüzü. Gündüz plaj, akşam DJ. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "Chic beach clubs, seaside marina seafood restaurants, and panoramic rooftop lounges showcasing Kyrenia’s vibrant nightlife. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Sahil kulüplerinde şezlong için hafta sonu rezervasyon şart; akşam Sky Lounge'ın panoramik terası en iyi manzarayı verir.",
      "en": "Reservations are recommended for beach club sunbeds on weekends; in the evening, Sky Lounge terrace provides the finest 360-degree harbour view."
    },
    "proposers": [
      "E.A.",
      "R.J.",
      "A.K.",
      "M.M."
    ],
    "stops": {
      "tr": [
        {
          "name": "Escape Beach Club",
          "description": "Escape Beach Club, Girne Eğlence & Gece Hayatı güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "The House / Marina",
          "description": "The House / Marina, Girne Eğlence & Gece Hayatı güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Eziç Restaurant",
          "description": "Eziç Restaurant, Girne Eğlence & Gece Hayatı güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Sky Lounge Bar",
          "description": "Sky Lounge Bar, Girne Eğlence & Gece Hayatı güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Cage / La Nouba Club",
          "description": "Cage / La Nouba Club, Girne Eğlence & Gece Hayatı güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Escape Beach Club",
          "description": "Escape Beach Club is an essential milestone along the Kyrenia Glamour: Beach Clubs, Dining & Nightlife. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "The House Marina Lounge",
          "description": "The House Marina Lounge is an essential milestone along the Kyrenia Glamour: Beach Clubs, Dining & Nightlife. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Eziç Premier Waterfront Dining",
          "description": "Eziç Premier Waterfront Dining is an essential milestone along the Kyrenia Glamour: Beach Clubs, Dining & Nightlife. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Sky Lounge Panoramic Rooftop",
          "description": "Sky Lounge Panoramic Rooftop is an essential milestone along the Kyrenia Glamour: Beach Clubs, Dining & Nightlife. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Cage & La Nouba Open-Air Club",
          "description": "Cage & La Nouba Open-Air Club is an essential milestone along the Kyrenia Glamour: Beach Clubs, Dining & Nightlife. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "İlkbahar (Nisan–Haziran) & Sonbahar (Eylül–Kasım)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "Spring (April–June) & Autumn (September–November)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    }
  },
  {
    "id": "gir-lapta",
    "slug": "gir-lapta",
    "region": "girne",
    "themes": [
      "nature",
      "history",
      "coast"
    ],
    "rating": 5,
    "distance": "35–65 km",
    "duration": {
      "tr": "Yarım gün",
      "en": "Half day"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "Lapta Eski Köy",
      "en": "Lapta Old Village"
    },
    "heroImage": "/images/routes/kyrenia-loop.jpg",
    "title": {
      "tr": "Lapta Pınarları, Eski Köy & Sahil Yürüyüşü",
      "en": "Lapta Mountain Springs, Old Village & Coastal Promenade"
    },
    "subtitle": {
      "tr": "Tarihi üst köy, geleneksel su kaynakları ve Girne'nin batısındaki uzun sahil yürüyüş yolunu birleştiren sakin bir rota.",
      "en": "A serene trail connecting historic upper village stone houses, natural hillside water springs, and Kyrenia’s longest seaside walking path."
    },
    "intro": {
      "tr": "Tarihi üst köy, geleneksel su kaynakları ve Girne'nin batısındaki uzun sahil yürüyüş yolunu birleştiren sakin bir rota. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "A serene trail connecting historic upper village stone houses, natural hillside water springs, and Kyrenia’s longest seaside walking path. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Az bilinen bir rota — köyün üst kısmındaki tarihi su kanalları serin ve gölgeli, yaz sıcağında ideal bir mola.",
      "en": "A true insider gem — the historic stone aqueducts in the upper village are shaded and refreshingly cool, offering a tranquil escape from summer heat."
    },
    "proposers": [
      "C.A."
    ],
    "stops": {
      "tr": [
        {
          "name": "Lapta Eski Köy",
          "description": "Lapta Eski Köy, Lapta Pınarları, Eski Köy & Sahil Yürüyüşü güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Başpınar",
          "description": "Başpınar, Lapta Pınarları, Eski Köy & Sahil Yürüyüşü güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Tarihi Lapta Su Kanalları",
          "description": "Tarihi Lapta Su Kanalları, Lapta Pınarları, Eski Köy & Sahil Yürüyüşü güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Lapta Sahil Yürüyüş Yolu",
          "description": "Lapta Sahil Yürüyüş Yolu, Lapta Pınarları, Eski Köy & Sahil Yürüyüşü güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Karşıyaka Gün Batımı Kıyısı",
          "description": "Karşıyaka Gün Batımı Kıyısı, Lapta Pınarları, Eski Köy & Sahil Yürüyüşü güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Lapta Old Stone Village",
          "description": "Lapta Old Stone Village is an essential milestone along the Lapta Mountain Springs, Old Village & Coastal Promenade. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Başpınar Natural Spring",
          "description": "Başpınar Natural Spring is an essential milestone along the Lapta Mountain Springs, Old Village & Coastal Promenade. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Historic Lapta Aqueducts",
          "description": "Historic Lapta Aqueducts is an essential milestone along the Lapta Mountain Springs, Old Village & Coastal Promenade. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Lapta Seaside Promenade",
          "description": "Lapta Seaside Promenade is an essential milestone along the Lapta Mountain Springs, Old Village & Coastal Promenade. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Karşıyaka Sunset Shoreline",
          "description": "Karşıyaka Sunset Shoreline is an essential milestone along the Lapta Mountain Springs, Old Village & Coastal Promenade. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "İlkbahar (Nisan–Haziran) & Sonbahar (Eylül–Kasım)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "Spring (April–June) & Autumn (September–November)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    }
  },
  {
    "id": "mag-walledcity",
    "slug": "famagusta-history-loop",
    "region": "magusa",
    "themes": [
      "history"
    ],
    "rating": 5,
    "distance": "35–65 km",
    "duration": {
      "tr": "Tam gün",
      "en": "Full day"
    },
    "difficulty": {
      "tr": "Orta (yürüyüş)",
      "en": "Moderate (walking)"
    },
    "startFinish": {
      "tr": "Akkule (Land Gate)",
      "en": "Land Gate (Akkule)"
    },
    "heroImage": "/images/routes/famagusta-loop.jpg",
    "title": {
      "tr": "Surlariçi & Ortaçağ Mirası",
      "en": "Famagusta Walled City & Medieval Heritage"
    },
    "subtitle": {
      "tr": "Ayakta duran Venedik surları, Gotik Lala Mustafa Paşa Camii, Othello Kalesi ve Namık Kemal Zindanı. Tarihseverler için zengin bir rota.",
      "en": "Standing Venetian ramparts, the soaring Gothic Lala Mustafa Pasha Mosque, Othello Castle, and historic dungeons for deep history lovers."
    },
    "intro": {
      "tr": "Ayakta duran Venedik surları, Gotik Lala Mustafa Paşa Camii, Othello Kalesi ve Namık Kemal Zindanı. Tarihseverler için zengin bir rota. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "Standing Venetian ramparts, the soaring Gothic Lala Mustafa Pasha Mosque, Othello Castle, and historic dungeons for deep history lovers. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Petek Pastanesi surlariçinin kalbinde; geleneksel Kıbrıs tatlıları için tarihi turun ortasında mola verin.",
      "en": "Petek Patisserie sits at the heart of the walled city — pause here for authentic traditional Cypriot sweets and lemonade in a historic setting."
    },
    "proposers": [
      "H.G.",
      "B.K.",
      "T.C.",
      "K.A.",
      "A.K."
    ],
    "stops": {
      "tr": [
        {
          "name": "Akkule (Land Gate)",
          "description": "Akkule (Land Gate), Surlariçi & Ortaçağ Mirası güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Lala Mustafa Paşa Camii",
          "description": "Lala Mustafa Paşa Camii, Surlariçi & Ortaçağ Mirası güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk",
          "images": [
            "/images/routes/famagusta/famagusta-walled-city/1.jpg",
            "/images/routes/famagusta/famagusta-walled-city/2.jpg",
            "/images/routes/famagusta/famagusta-walled-city/3.jpg",
            "/images/routes/famagusta/famagusta-walled-city/4.jpg",
            "/images/routes/famagusta/famagusta-walled-city/5.jpg"
          ]
        },
        {
          "name": "Venedik Sarayı Kalıntıları",
          "description": "Venedik Sarayı Kalıntıları, Surlariçi & Ortaçağ Mirası güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Namık Kemal Zindanı",
          "description": "Namık Kemal Zindanı, Surlariçi & Ortaçağ Mirası güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Othello Kalesi",
          "description": "Othello Kalesi, Surlariçi & Ortaçağ Mirası güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk",
          "images": [
            "/images/routes/famagusta/othello-castle/1.jpg",
            "/images/routes/famagusta/othello-castle/2.jpg",
            "/images/routes/famagusta/othello-castle/3.jpg",
            "/images/routes/famagusta/othello-castle/4.jpg",
            "/images/routes/famagusta/othello-castle/5.jpg",
            "/images/routes/famagusta/othello-castle/6.jpg"
          ]
        },
        {
          "name": "Canbulat Müzesi",
          "description": "Canbulat Müzesi, Surlariçi & Ortaçağ Mirası güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Şehir Surları",
          "description": "Şehir Surları, Surlariçi & Ortaçağ Mirası güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "18:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Land Gate (Akkule Fort)",
          "description": "Land Gate (Akkule Fort) is an essential milestone along the Famagusta Walled City & Medieval Heritage. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Lala Mustafa Pasha Mosque (St. Nicholas Cathedral)",
          "description": "Lala Mustafa Pasha Mosque (St. Nicholas Cathedral) is an essential milestone along the Famagusta Walled City & Medieval Heritage. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min",
          "images": [
            "/images/routes/famagusta/famagusta-walled-city/1.jpg",
            "/images/routes/famagusta/famagusta-walled-city/2.jpg",
            "/images/routes/famagusta/famagusta-walled-city/3.jpg",
            "/images/routes/famagusta/famagusta-walled-city/4.jpg",
            "/images/routes/famagusta/famagusta-walled-city/5.jpg"
          ]
        },
        {
          "name": "Venetian Palace Courtyard Ruins",
          "description": "Venetian Palace Courtyard Ruins is an essential milestone along the Famagusta Walled City & Medieval Heritage. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Namık Kemal Dungeon & Quarters",
          "description": "Namık Kemal Dungeon & Quarters is an essential milestone along the Famagusta Walled City & Medieval Heritage. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Othello Castle & Citadel",
          "description": "Othello Castle & Citadel is an essential milestone along the Famagusta Walled City & Medieval Heritage. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min",
          "images": [
            "/images/routes/famagusta/othello-castle/1.jpg",
            "/images/routes/famagusta/othello-castle/2.jpg",
            "/images/routes/famagusta/othello-castle/3.jpg",
            "/images/routes/famagusta/othello-castle/4.jpg",
            "/images/routes/famagusta/othello-castle/5.jpg",
            "/images/routes/famagusta/othello-castle/6.jpg"
          ]
        },
        {
          "name": "Canbulat Bastion & Museum",
          "description": "Canbulat Bastion & Museum is an essential milestone along the Famagusta Walled City & Medieval Heritage. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Venetian Ramparts Promenade",
          "description": "Venetian Ramparts Promenade is an essential milestone along the Famagusta Walled City & Medieval Heritage. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "18:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "İlkbahar (Nisan–Haziran) & Sonbahar (Eylül–Kasım)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "Spring (April–June) & Autumn (September–November)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    }
  },
  {
    "id": "mag-salamis",
    "slug": "mag-salamis",
    "region": "magusa",
    "themes": [
      "history",
      "coast"
    ],
    "rating": 5,
    "distance": "35–65 km",
    "duration": {
      "tr": "Tam gün",
      "en": "Full day"
    },
    "difficulty": {
      "tr": "Orta",
      "en": "Moderate"
    },
    "startFinish": {
      "tr": "Salamis Harabeleri",
      "en": "Ancient Salamis Ruins"
    },
    "heroImage": "/images/routes/famagusta-loop.jpg",
    "title": {
      "tr": "Salamis Antik Kenti & St. Barnabas",
      "en": "Ancient Salamis & St. Barnabas Monastery"
    },
    "subtitle": {
      "tr": "Roma jimnazyumu, tiyatrosu ve bazilikasıyla adanın en önemli antik kenti, ardından St. Barnabas Manastırı, Kral Mezarları ve Glapsides plajı.",
      "en": "Roman gymnasium, marble amphitheatre, and royal necropolis of the island’s most prominent ancient kingdom, followed by Glapsides beach."
    },
    "intro": {
      "tr": "Roma jimnazyumu, tiyatrosu ve bazilikasıyla adanın en önemli antik kenti, ardından St. Barnabas Manastırı, Kral Mezarları ve Glapsides plajı. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "Roman gymnasium, marble amphitheatre, and royal necropolis of the island’s most prominent ancient kingdom, followed by Glapsides beach. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Salamis'te gölge neredeyse yok — sabah gidin. Saat 11'den sonra taşların üzerindeki sıcak bunaltıcı olur.",
      "en": "There is minimal shade at ancient Salamis — visit in the morning hours before 11:00 AM when the sun heats the marble columns."
    },
    "proposers": [
      "U.S.",
      "A.T.",
      "B.S.",
      "F.Y.",
      "M.U.",
      "D.O.",
      "K.A."
    ],
    "stops": {
      "tr": [
        {
          "name": "Salamis Harabeleri",
          "description": "Salamis Harabeleri, Salamis Antik Kenti & St. Barnabas güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk",
          "images": [
            "/images/routes/famagusta/ancient-salamis/1.jpg",
            "/images/routes/famagusta/ancient-salamis/2.jpg",
            "/images/routes/famagusta/ancient-salamis/3.jpg",
            "/images/routes/famagusta/ancient-salamis/4.jpg",
            "/images/routes/famagusta/ancient-salamis/5.jpg",
            "/images/routes/famagusta/ancient-salamis/6.jpg"
          ]
        },
        {
          "name": "Roma Tiyatrosu",
          "description": "Roma Tiyatrosu, Salamis Antik Kenti & St. Barnabas güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "St. Barnabas Manastırı & İkon Müzesi",
          "description": "St. Barnabas Manastırı & İkon Müzesi, Salamis Antik Kenti & St. Barnabas güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk",
          "images": [
            "/images/routes/famagusta/st-barnabas-monastery/1.jpg",
            "/images/routes/famagusta/st-barnabas-monastery/3.jpg",
            "/images/routes/famagusta/st-barnabas-monastery/4.jpg",
            "/images/routes/famagusta/st-barnabas-monastery/5.jpg",
            "/images/routes/famagusta/st-barnabas-monastery/6.jpg",
            "/images/routes/famagusta/st-barnabas-monastery/7.jpg"
          ]
        },
        {
          "name": "Kral Mezarları",
          "description": "Kral Mezarları, Salamis Antik Kenti & St. Barnabas güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Glapsides Plajı",
          "description": "Glapsides Plajı, Salamis Antik Kenti & St. Barnabas güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk",
          "images": [
            "/images/routes/karpaz/golden-beach/1.jpg",
            "/images/routes/karpaz/golden-beach/2.jpg",
            "/images/routes/karpaz/golden-beach/3.jpg",
            "/images/routes/karpaz/golden-beach/4.jpg",
            "/images/routes/karpaz/golden-beach/5.jpg"
          ]
        }
      ],
      "en": [
        {
          "name": "Salamis Ancient Ruins & Gymnasium",
          "description": "Salamis Ancient Ruins & Gymnasium is an essential milestone along the Ancient Salamis & St. Barnabas Monastery. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "9:00",
          "driveTime": "0 min",
          "images": [
            "/images/routes/famagusta/ancient-salamis/1.jpg",
            "/images/routes/famagusta/ancient-salamis/2.jpg",
            "/images/routes/famagusta/ancient-salamis/3.jpg",
            "/images/routes/famagusta/ancient-salamis/4.jpg",
            "/images/routes/famagusta/ancient-salamis/5.jpg",
            "/images/routes/famagusta/ancient-salamis/6.jpg"
          ]
        },
        {
          "name": "Roman Marble Amphitheatre",
          "description": "Roman Marble Amphitheatre is an essential milestone along the Ancient Salamis & St. Barnabas Monastery. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "St. Barnabas Monastery & Icon Museum",
          "description": "St. Barnabas Monastery & Icon Museum is an essential milestone along the Ancient Salamis & St. Barnabas Monastery. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min",
          "images": [
            "/images/routes/famagusta/st-barnabas-monastery/1.jpg",
            "/images/routes/famagusta/st-barnabas-monastery/3.jpg",
            "/images/routes/famagusta/st-barnabas-monastery/4.jpg",
            "/images/routes/famagusta/st-barnabas-monastery/5.jpg",
            "/images/routes/famagusta/st-barnabas-monastery/6.jpg",
            "/images/routes/famagusta/st-barnabas-monastery/7.jpg"
          ]
        },
        {
          "name": "Royal Tombs Necropolis",
          "description": "Royal Tombs Necropolis is an essential milestone along the Ancient Salamis & St. Barnabas Monastery. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Glapsides Golden Beach",
          "description": "Glapsides Golden Beach is an essential milestone along the Ancient Salamis & St. Barnabas Monastery. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min",
          "images": [
            "/images/routes/karpaz/golden-beach/1.jpg",
            "/images/routes/karpaz/golden-beach/2.jpg",
            "/images/routes/karpaz/golden-beach/3.jpg",
            "/images/routes/karpaz/golden-beach/4.jpg",
            "/images/routes/karpaz/golden-beach/5.jpg"
          ]
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "İlkbahar (Nisan–Haziran) & Sonbahar (Eylül–Kasım)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "Spring (April–June) & Autumn (September–November)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    }
  },
  {
    "id": "mag-varosha",
    "slug": "mag-varosha",
    "region": "magusa",
    "themes": [
      "history",
      "coast"
    ],
    "rating": 5,
    "distance": "35–65 km",
    "duration": {
      "tr": "Yarım–tam gün",
      "en": "Half to full day"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "Kapalı Maraş (Açık Bölgeler)",
      "en": "Varosha Entrance"
    },
    "heroImage": "/images/routes/famagusta-loop.jpg",
    "title": {
      "tr": "Kapalı Maraş & Palm Beach",
      "en": "Varosha Ghost City & Palm Beach Coastline"
    },
    "subtitle": {
      "tr": "Yakın tarihin sessizliğiyle sahil keyfini birleştiren rota: hayalet şehir Maraş'ın açık bölümleri, ardından Palm Beach'te yüzme, yemek ve mola.",
      "en": "Witness the silence of recent history across reopened boulevards, followed by turquoise waters and relaxation at iconic Palm Beach."
    },
    "intro": {
      "tr": "Yakın tarihin sessizliğiyle sahil keyfini birleştiren rota: hayalet şehir Maraş'ın açık bölümleri, ardından Palm Beach'te yüzme, yemek ve mola. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "Witness the silence of recent history across reopened boulevards, followed by turquoise waters and relaxation at iconic Palm Beach. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Maraş'ta bisiklet kiralama alanları var; açık bölgeleri pedallayarak gezmek yürümekten çok daha rahat. Su ve güneş koruması getirin.",
      "en": "Bicycle rentals are available right at the entrance of Varosha; pedalling through the open boulevards is much more comfortable than walking."
    },
    "proposers": [
      "B.S.",
      "E.A.",
      "M.M.",
      "K.A.",
      "A.S.",
      "S.A.",
      "A.K."
    ],
    "stops": {
      "tr": [
        {
          "name": "Kapalı Maraş (Açık Bölgeler)",
          "description": "Kapalı Maraş (Açık Bölgeler), Kapalı Maraş & Palm Beach güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk",
          "images": [
            "/images/routes/famagusta/varosha-viewpoint/1.jpg",
            "/images/routes/famagusta/varosha-viewpoint/2.jpg",
            "/images/routes/famagusta/varosha-viewpoint/3.jpg",
            "/images/routes/famagusta/varosha-viewpoint/4.jpg",
            "/images/routes/famagusta/varosha-viewpoint/5.jpg"
          ]
        },
        {
          "name": "Maraş Sahili",
          "description": "Maraş Sahili, Kapalı Maraş & Palm Beach güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk",
          "images": [
            "/images/routes/famagusta/varosha-viewpoint/1.jpg",
            "/images/routes/famagusta/varosha-viewpoint/2.jpg",
            "/images/routes/famagusta/varosha-viewpoint/3.jpg",
            "/images/routes/famagusta/varosha-viewpoint/4.jpg",
            "/images/routes/famagusta/varosha-viewpoint/5.jpg"
          ]
        },
        {
          "name": "Palm Beach",
          "description": "Palm Beach, Kapalı Maraş & Palm Beach güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Petek Pastanesi",
          "description": "Petek Pastanesi, Kapalı Maraş & Palm Beach güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Sahil Kafeleri",
          "description": "Sahil Kafeleri, Kapalı Maraş & Palm Beach güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Varosha (Open Boulevards)",
          "description": "Varosha (Open Boulevards) is an essential milestone along the Varosha Ghost City & Palm Beach Coastline. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "9:00",
          "driveTime": "0 min",
          "images": [
            "/images/routes/famagusta/varosha-viewpoint/1.jpg",
            "/images/routes/famagusta/varosha-viewpoint/2.jpg",
            "/images/routes/famagusta/varosha-viewpoint/3.jpg",
            "/images/routes/famagusta/varosha-viewpoint/4.jpg",
            "/images/routes/famagusta/varosha-viewpoint/5.jpg"
          ]
        },
        {
          "name": "Varosha Coastal Boulevard",
          "description": "Varosha Coastal Boulevard is an essential milestone along the Varosha Ghost City & Palm Beach Coastline. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min",
          "images": [
            "/images/routes/famagusta/varosha-viewpoint/1.jpg",
            "/images/routes/famagusta/varosha-viewpoint/2.jpg",
            "/images/routes/famagusta/varosha-viewpoint/3.jpg",
            "/images/routes/famagusta/varosha-viewpoint/4.jpg",
            "/images/routes/famagusta/varosha-viewpoint/5.jpg"
          ]
        },
        {
          "name": "Palm Beach Waterfront",
          "description": "Palm Beach Waterfront is an essential milestone along the Varosha Ghost City & Palm Beach Coastline. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Petek Traditional Confectionery",
          "description": "Petek Traditional Confectionery is an essential milestone along the Varosha Ghost City & Palm Beach Coastline. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Coastal Seaside Cafes",
          "description": "Coastal Seaside Cafes is an essential milestone along the Varosha Ghost City & Palm Beach Coastline. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "İlkbahar (Nisan–Haziran) & Sonbahar (Eylül–Kasım)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "Spring (April–June) & Autumn (September–November)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    }
  },
  {
    "id": "mag-enkomi",
    "slug": "mag-enkomi",
    "region": "magusa",
    "themes": [
      "history",
      "nature"
    ],
    "rating": 5,
    "distance": "35–65 km",
    "duration": {
      "tr": "Yarım gün",
      "en": "Half day"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "Enkomi Antik Kenti",
      "en": "Enkomi Ancient Site"
    },
    "heroImage": "/images/routes/famagusta-loop.jpg",
    "title": {
      "tr": "Enkomi Bronz Çağı & Kırsal Mağusa",
      "en": "Enkomi Bronze Age Capital & Rural Famagusta"
    },
    "subtitle": {
      "tr": "Adanın Bronz Çağı kalıntılarını — Enkomi antik kentini — ziyaret edip sakin kırsal manzaralarla tamamlanan az bilinen bir arkeoloji rotası.",
      "en": "Explore the Bronze Age ruins of Enkomi — birthplace of ancient copper commerce — paired with peaceful countryside vistas away from crowds."
    },
    "intro": {
      "tr": "Adanın Bronz Çağı kalıntılarını — Enkomi antik kentini — ziyaret edip sakin kırsal manzaralarla tamamlanan az bilinen bir arkeoloji rotası. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "Explore the Bronze Age ruins of Enkomi — birthplace of ancient copper commerce — paired with peaceful countryside vistas away from crowds. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Enkomi'yi çoğu ziyaretçi atlar — turist otobüsü yok, antik kenti neredeyse tek başınıza gezersiniz.",
      "en": "Most tourists overlook Enkomi — there are no tour bus crowds, allowing you to wander this ancient Bronze Age capital in total tranquility."
    },
    "proposers": [
      "A.M."
    ],
    "stops": {
      "tr": [
        {
          "name": "Enkomi Antik Kenti",
          "description": "Enkomi Antik Kenti, Enkomi Bronz Çağı & Kırsal Mağusa güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Mağusa Kırsal Yolu",
          "description": "Mağusa Kırsal Yolu, Enkomi Bronz Çağı & Kırsal Mağusa güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Eski Nehir Yatağı Manzarası",
          "description": "Eski Nehir Yatağı Manzarası, Enkomi Bronz Çağı & Kırsal Mağusa güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Tuzla Köy Kafesi",
          "description": "Tuzla Köy Kafesi, Enkomi Bronz Çağı & Kırsal Mağusa güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Gazimağusa Surlarına Yaklaşım",
          "description": "Gazimağusa Surlarına Yaklaşım, Enkomi Bronz Çağı & Kırsal Mağusa güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Enkomi Bronze Age Ruins",
          "description": "Enkomi Bronze Age Ruins is an essential milestone along the Enkomi Bronze Age Capital & Rural Famagusta. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Famagusta Countryside Lane",
          "description": "Famagusta Countryside Lane is an essential milestone along the Enkomi Bronze Age Capital & Rural Famagusta. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Ancient Riverbed Panorama",
          "description": "Ancient Riverbed Panorama is an essential milestone along the Enkomi Bronze Age Capital & Rural Famagusta. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Tuzla Village Traditional Cafe",
          "description": "Tuzla Village Traditional Cafe is an essential milestone along the Enkomi Bronze Age Capital & Rural Famagusta. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Approaching Famagusta Ramparts",
          "description": "Approaching Famagusta Ramparts is an essential milestone along the Enkomi Bronze Age Capital & Rural Famagusta. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "İlkbahar (Nisan–Haziran) & Sonbahar (Eylül–Kasım)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "Spring (April–June) & Autumn (September–November)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    }
  },
  {
    "id": "isk-longbeach",
    "slug": "isk-longbeach",
    "region": "iskele",
    "themes": [
      "coast",
      "history"
    ],
    "rating": 5,
    "distance": "35–65 km",
    "duration": {
      "tr": "Tam gün",
      "en": "Full day"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "İskele Arkeoloji Müzesi",
      "en": "Iskele Town Center"
    },
    "heroImage": "/images/routes/famagusta-loop.jpg",
    "title": {
      "tr": "İskele Sahil & Miras Rotası",
      "en": "Iskele Golden Sands & Coastal Heritage Trail"
    },
    "subtitle": {
      "tr": "Altın kumlu Long Beach, Boğaz balıkçı limanı, arkeoloji ve ikon müzeleri. Doğal güzellikle kültürel mirasın dengeli birleşimi.",
      "en": "Golden-sand Long Beach, Boğaz fishing harbour, and archaeology and icon museums. A balanced day combining coastal relaxation with culture."
    },
    "intro": {
      "tr": "Altın kumlu Long Beach, Boğaz balıkçı limanı, arkeoloji ve ikon müzeleri. Doğal güzellikle kültürel mirasın dengeli birleşimi. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "Golden-sand Long Beach, Boğaz fishing harbour, and archaeology and icon museums. A balanced day combining coastal relaxation with culture. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Boğaz Limanı'nda öğleden sonra balıkçılar taze tuttukları balığı doğrudan satar; akşam yemeği için buradan alınabilir.",
      "en": "At Boğaz Harbour in the afternoon, local fishermen sell their fresh catch directly at the docks; perfect for an authentic seafood lunch."
    },
    "proposers": [
      "A.T.",
      "B.S.",
      "M.M.",
      "D.O."
    ],
    "stops": {
      "tr": [
        {
          "name": "İskele Arkeoloji Müzesi",
          "description": "İskele Arkeoloji Müzesi, İskele Sahil & Miras Rotası güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk",
          "images": [
            "/images/routes/guzelyurt/güzelyurt-archaeology/1.jpg",
            "/images/routes/guzelyurt/güzelyurt-archaeology/2.jpg",
            "/images/routes/guzelyurt/güzelyurt-archaeology/3.jpg",
            "/images/routes/guzelyurt/güzelyurt-archaeology/4.jpg"
          ]
        },
        {
          "name": "Panayia Theotokos İkon Müzesi",
          "description": "Panayia Theotokos İkon Müzesi, İskele Sahil & Miras Rotası güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Long Beach (Altınkum)",
          "description": "Long Beach (Altınkum), İskele Sahil & Miras Rotası güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk",
          "images": [
            "/images/routes/karpaz/golden-beach/1.jpg",
            "/images/routes/karpaz/golden-beach/2.jpg",
            "/images/routes/karpaz/golden-beach/3.jpg",
            "/images/routes/karpaz/golden-beach/4.jpg",
            "/images/routes/karpaz/golden-beach/5.jpg"
          ]
        },
        {
          "name": "Boğaz Balıkçı Limanı",
          "description": "Boğaz Balıkçı Limanı, İskele Sahil & Miras Rotası güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Kalecik Halk Plajı",
          "description": "Kalecik Halk Plajı, İskele Sahil & Miras Rotası güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Iskele Archaeology Museum",
          "description": "Iskele Archaeology Museum is an essential milestone along the Iskele Golden Sands & Coastal Heritage Trail. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "9:00",
          "driveTime": "0 min",
          "images": [
            "/images/routes/guzelyurt/güzelyurt-archaeology/1.jpg",
            "/images/routes/guzelyurt/güzelyurt-archaeology/2.jpg",
            "/images/routes/guzelyurt/güzelyurt-archaeology/3.jpg",
            "/images/routes/guzelyurt/güzelyurt-archaeology/4.jpg"
          ]
        },
        {
          "name": "Panayia Theotokos Icon Museum",
          "description": "Panayia Theotokos Icon Museum is an essential milestone along the Iskele Golden Sands & Coastal Heritage Trail. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Long Beach Golden Sands Promenade",
          "description": "Long Beach Golden Sands Promenade is an essential milestone along the Iskele Golden Sands & Coastal Heritage Trail. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min",
          "images": [
            "/images/routes/karpaz/golden-beach/1.jpg",
            "/images/routes/karpaz/golden-beach/2.jpg",
            "/images/routes/karpaz/golden-beach/3.jpg",
            "/images/routes/karpaz/golden-beach/4.jpg",
            "/images/routes/karpaz/golden-beach/5.jpg"
          ]
        },
        {
          "name": "Boğaz Picturesque Fishing Harbour",
          "description": "Boğaz Picturesque Fishing Harbour is an essential milestone along the Iskele Golden Sands & Coastal Heritage Trail. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Kalecik Public Beach & Cove",
          "description": "Kalecik Public Beach & Cove is an essential milestone along the Iskele Golden Sands & Coastal Heritage Trail. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "İlkbahar (Nisan–Haziran) & Sonbahar (Eylül–Kasım)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "Spring (April–June) & Autumn (September–November)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    }
  },
  {
    "id": "isk-kantara",
    "slug": "isk-kantara",
    "region": "iskele",
    "themes": [
      "history",
      "nature",
      "scenic"
    ],
    "rating": 5,
    "distance": "35–65 km",
    "duration": {
      "tr": "Tam gün",
      "en": "Full day"
    },
    "difficulty": {
      "tr": "Orta",
      "en": "Moderate"
    },
    "startFinish": {
      "tr": "Kantara Kalesi",
      "en": "Kantara Castle Entrance"
    },
    "heroImage": "/images/routes/famagusta-loop.jpg",
    "title": {
      "tr": "Kantara Kalesi & Doğu Panoraması",
      "en": "Kantara Mountain Fortress & Dual-Coast Panorama"
    },
    "subtitle": {
      "tr": "Adanın en doğudaki dağ kalesinden ormanlara, kırsal köylere ve sessiz kıyıya uzanan manzara rotası. Buffavento ile birleştirilebilen çoklu kale seçeneği de mevcut.",
      "en": "The easternmost Crusader mountain fortress looking out across pine forests, quiet villages, and both the northern and southern seas simultaneously."
    },
    "intro": {
      "tr": "Adanın en doğudaki dağ kalesinden ormanlara, kırsal köylere ve sessiz kıyıya uzanan manzara rotası. Buffavento ile birleştirilebilen çoklu kale seçeneği de mevcut. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "The easternmost Crusader mountain fortress looking out across pine forests, quiet villages, and both the northern and southern seas simultaneously. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Kantara üç dağ kalesinin en iyi korunmuşu ve en doğudakidir; açık havada hem kuzey hem güney sahilleri aynı anda görünür.",
      "en": "Kantara is the best preserved of the three mountain fortresses; on clear days you can gaze out at the Mediterranean on both sides of the peninsula."
    },
    "proposers": [
      "A.T.",
      "C.A.",
      "O.O.",
      "T.C.",
      "B.K.",
      "E.A."
    ],
    "stops": {
      "tr": [
        {
          "name": "Kantara Kalesi",
          "description": "Kantara Kalesi, Kantara Kalesi & Doğu Panoraması güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Kantara Köyü",
          "description": "Kantara Köyü, Kantara Kalesi & Doğu Panoraması güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Mersinlik Ormanı",
          "description": "Mersinlik Ormanı, Kantara Kalesi & Doğu Panoraması güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Kaplıca Sahili",
          "description": "Kaplıca Sahili, Kantara Kalesi & Doğu Panoraması güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Tatlısu Kıyısı",
          "description": "Tatlısu Kıyısı, Kantara Kalesi & Doğu Panoraması güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Kantara Crusader Castle",
          "description": "Kantara Crusader Castle is an essential milestone along the Kantara Mountain Fortress & Dual-Coast Panorama. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Kantara Mountain Village",
          "description": "Kantara Mountain Village is an essential milestone along the Kantara Mountain Fortress & Dual-Coast Panorama. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Mersinlik Pine Forest Path",
          "description": "Mersinlik Pine Forest Path is an essential milestone along the Kantara Mountain Fortress & Dual-Coast Panorama. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Kaplıca Sandy Coast",
          "description": "Kaplıca Sandy Coast is an essential milestone along the Kantara Mountain Fortress & Dual-Coast Panorama. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Tatlısu Coastal Shoreline",
          "description": "Tatlısu Coastal Shoreline is an essential milestone along the Kantara Mountain Fortress & Dual-Coast Panorama. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "İlkbahar (Nisan–Haziran) & Sonbahar (Eylül–Kasım)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "Spring (April–June) & Autumn (September–November)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    }
  },
  {
    "id": "isk-bafra",
    "slug": "isk-bafra",
    "region": "iskele",
    "themes": [
      "food",
      "nature",
      "coast"
    ],
    "rating": 5,
    "distance": "35–65 km",
    "duration": {
      "tr": "Tam gün",
      "en": "Full day"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "Mehmetçik Köyü",
      "en": "Mehmetçik Village"
    },
    "heroImage": "/images/routes/famagusta-loop.jpg",
    "title": {
      "tr": "Mehmetçik Bağları, Bafra & Boğaz Kıyısı",
      "en": "Mehmetçik Vineyards, Bafra Beach & Boğaz Harbour"
    },
    "subtitle": {
      "tr": "Köy hayatı ve üzüm bağı manzaralarından Bafra sahiline ve Boğaz balıkçı limanına uzanan sakin, gastronomik bir gün. Kimsenin listesine girmeyen bir bölge.",
      "en": "Gentle village life and vineyard panoramas leading to pristine Bafra sands and the charming seafood harbor of Boğaz. Unhurried and authentic."
    },
    "intro": {
      "tr": "Köy hayatı ve üzüm bağı manzaralarından Bafra sahiline ve Boğaz balıkçı limanına uzanan sakin, gastronomik bir gün. Kimsenin listesine girmeyen bir bölge. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "Gentle village life and vineyard panoramas leading to pristine Bafra sands and the charming seafood harbor of Boğaz. Unhurried and authentic. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Bölge küçük aile şarap üreticileriyle dolu; acele etmeyin ve uzun bir öğle yemeği için plan yapın.",
      "en": "The region is home to small family grape and wine producers; don’t rush, plan for a relaxed and leisurely lunch."
    },
    "proposers": [
      "C.A."
    ],
    "stops": {
      "tr": [
        {
          "name": "Mehmetçik Köyü",
          "description": "Mehmetçik Köyü, Mehmetçik Bağları, Bafra & Boğaz Kıyısı güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Mehmetçik Festival Meydanı",
          "description": "Mehmetçik Festival Meydanı, Mehmetçik Bağları, Bafra & Boğaz Kıyısı güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Üzüm Bağı Manzarası",
          "description": "Üzüm Bağı Manzarası, Mehmetçik Bağları, Bafra & Boğaz Kıyısı güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Bafra Halk Plajı",
          "description": "Bafra Halk Plajı, Mehmetçik Bağları, Bafra & Boğaz Kıyısı güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Boğaz Balıkçı Limanı",
          "description": "Boğaz Balıkçı Limanı, Mehmetçik Bağları, Bafra & Boğaz Kıyısı güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Mehmetçik Grape Village",
          "description": "Mehmetçik Grape Village is an essential milestone along the Mehmetçik Vineyards, Bafra Beach & Boğaz Harbour. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Mehmetçik Festival Square",
          "description": "Mehmetçik Festival Square is an essential milestone along the Mehmetçik Vineyards, Bafra Beach & Boğaz Harbour. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Rolling Vineyards Viewpoint",
          "description": "Rolling Vineyards Viewpoint is an essential milestone along the Mehmetçik Vineyards, Bafra Beach & Boğaz Harbour. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Bafra Public Beach",
          "description": "Bafra Public Beach is an essential milestone along the Mehmetçik Vineyards, Bafra Beach & Boğaz Harbour. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Boğaz Seafood Harbour",
          "description": "Boğaz Seafood Harbour is an essential milestone along the Mehmetçik Vineyards, Bafra Beach & Boğaz Harbour. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "İlkbahar (Nisan–Haziran) & Sonbahar (Eylül–Kasım)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "Spring (April–June) & Autumn (September–November)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    }
  },
  {
    "id": "isk-wetland",
    "slug": "isk-wetland",
    "region": "iskele",
    "themes": [
      "nature",
      "coast"
    ],
    "rating": 5,
    "distance": "35–65 km",
    "duration": {
      "tr": "Yarım gün",
      "en": "Half day"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "Boğaz Balıkçı Limanı",
      "en": "Boğaz Harbour"
    },
    "heroImage": "/images/routes/famagusta-loop.jpg",
    "title": {
      "tr": "Boğaz Sulak Alan & Kuş Gözlem",
      "en": "Boğaz Wetlands, Salt Flats & Birdwatching Trail"
    },
    "subtitle": {
      "tr": "Boğaz balıkçı limanından başlayıp Gastria sulak alanları ve Kaplıca kıyısını keşfeden, tuz düzlüğü ve kuş gözlem noktalı bir doğa rotası.",
      "en": "Starting from Boğaz harbour, exploring the Gastria coastal wetlands, salt flats, and migratory birdwatching lookout points."
    },
    "intro": {
      "tr": "Boğaz balıkçı limanından başlayıp Gastria sulak alanları ve Kaplıca kıyısını keşfeden, tuz düzlüğü ve kuş gözlem noktalı bir doğa rotası. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "Starting from Boğaz harbour, exploring the Gastria coastal wetlands, salt flats, and migratory birdwatching lookout points. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Sabah erken saatler kuş gözlemi için en verimli; dürbün getirmeyi unutmayın. Kıyı ve sulak alan kuş çeşitliliği açısından zengindir.",
      "en": "Early morning is by far the most rewarding window for birdwatching; bring binoculars to spot flamingos and migratory waterfowl."
    },
    "proposers": [
      "A.M.",
      "J.A."
    ],
    "stops": {
      "tr": [
        {
          "name": "Boğaz Balıkçı Limanı",
          "description": "Boğaz Balıkçı Limanı, Boğaz Sulak Alan & Kuş Gözlem güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Gastria Sulak Alanı",
          "description": "Gastria Sulak Alanı, Boğaz Sulak Alan & Kuş Gözlem güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Kaplıca Sahili",
          "description": "Kaplıca Sahili, Boğaz Sulak Alan & Kuş Gözlem güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Tuz Düzlüğü Manzarası",
          "description": "Tuz Düzlüğü Manzarası, Boğaz Sulak Alan & Kuş Gözlem güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Kıyı Kuş Gözlem Noktası",
          "description": "Kıyı Kuş Gözlem Noktası, Boğaz Sulak Alan & Kuş Gözlem güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Boğaz Harbour Docks",
          "description": "Boğaz Harbour Docks is an essential milestone along the Boğaz Wetlands, Salt Flats & Birdwatching Trail. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Gastria Coastal Wetland",
          "description": "Gastria Coastal Wetland is an essential milestone along the Boğaz Wetlands, Salt Flats & Birdwatching Trail. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Kaplıca Natural Bay",
          "description": "Kaplıca Natural Bay is an essential milestone along the Boğaz Wetlands, Salt Flats & Birdwatching Trail. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Coastal Salt Flats Vista",
          "description": "Coastal Salt Flats Vista is an essential milestone along the Boğaz Wetlands, Salt Flats & Birdwatching Trail. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Coastal Bird Sanctuary Point",
          "description": "Coastal Bird Sanctuary Point is an essential milestone along the Boğaz Wetlands, Salt Flats & Birdwatching Trail. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "İlkbahar (Nisan–Haziran) & Sonbahar (Eylül–Kasım)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "Spring (April–June) & Autumn (September–November)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    }
  },
  {
    "id": "kar-classic",
    "slug": "karpaz-nature-loop",
    "region": "karpaz",
    "themes": [
      "nature",
      "scenic",
      "coast"
    ],
    "rating": 5,
    "distance": "35–65 km",
    "duration": {
      "tr": "Tam gün (uzun sürüş)",
      "en": "Full day (scenic drive)"
    },
    "difficulty": {
      "tr": "Kolay (yürüyüş) / Uzun sürüş",
      "en": "Easy walk / long drive"
    },
    "startFinish": {
      "tr": "Dipkarpaz Köyü",
      "en": "Dipkarpaz Village"
    },
    "heroImage": "/images/routes/karpaz-loop.jpg",
    "title": {
      "tr": "Klasik Karpaz: Eşekler, Altınkum & Apostolos Andreas",
      "en": "Classic Karpaz: Wild Donkeys, Golden Beach & Cape Apostolos"
    },
    "subtitle": {
      "tr": "Adanın en doğusuna tam günlük yol yolculuğu: köy hayatı, açık manzaralar, yabani eşekler, kilometrelerce Altınkum ve efsanevi manastır. Karpaz'ın imza rotası.",
      "en": "A full-day scenic road odyssey to Cyprus’ eastern edge: traditional villages, wild roaming donkeys, miles of pristine Golden Beach, and the historic monastery."
    },
    "intro": {
      "tr": "Adanın en doğusuna tam günlük yol yolculuğu: köy hayatı, açık manzaralar, yabani eşekler, kilometrelerce Altınkum ve efsanevi manastır. Karpaz'ın imza rotası. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "A full-day scenic road odyssey to Cyprus’ eastern edge: traditional villages, wild roaming donkeys, miles of pristine Golden Beach, and the historic monastery. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Yabani eşekler yol kenarında yaklaşır ama beslemeyin — yasak ve onlar için zararlı. Uzun sürüş için depoyu Dipkarpaz öncesi doldurun.",
      "en": "Wild donkeys will approach your vehicle along the roadside, but please do not feed them. Always top up your fuel tank before leaving Dipkarpaz."
    },
    "proposers": [
      "E.A.",
      "H.G.",
      "A.T.",
      "B.K.",
      "F.Y.",
      "E.P.",
      "T.C.",
      "O.O.",
      "M.U.",
      "D.O.",
      "K.A.",
      "A.S.",
      "R.J.",
      "S.A.",
      "M.M."
    ],
    "stops": {
      "tr": [
        {
          "name": "Dipkarpaz Köyü",
          "description": "Dipkarpaz Köyü, Klasik Karpaz: Eşekler, Altınkum & Apostolos Andreas güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk",
          "images": [
            "/images/routes/karpaz/dipkarpaz-village/1.jpg",
            "/images/routes/karpaz/dipkarpaz-village/2.jpg",
            "/images/routes/karpaz/dipkarpaz-village/3.jpg",
            "/images/routes/karpaz/dipkarpaz-village/4.jpg"
          ]
        },
        {
          "name": "Karpaz Manzaralı Sürüş",
          "description": "Karpaz Manzaralı Sürüş, Klasik Karpaz: Eşekler, Altınkum & Apostolos Andreas güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Yabani Eşek Bölgesi",
          "description": "Yabani Eşek Bölgesi, Klasik Karpaz: Eşekler, Altınkum & Apostolos Andreas güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk",
          "images": [
            "/images/routes/karpaz/karpaz-national-park/1.jpg",
            "/images/routes/karpaz/karpaz-national-park/2.jpg",
            "/images/routes/karpaz/karpaz-national-park/3.jpg",
            "/images/routes/karpaz/karpaz-national-park/4.jpg",
            "/images/routes/karpaz/karpaz-national-park/5.jpg"
          ]
        },
        {
          "name": "Altınkum (Golden Beach)",
          "description": "Altınkum (Golden Beach), Klasik Karpaz: Eşekler, Altınkum & Apostolos Andreas güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk",
          "images": [
            "/images/routes/karpaz/golden-beach/1.jpg",
            "/images/routes/karpaz/golden-beach/2.jpg",
            "/images/routes/karpaz/golden-beach/3.jpg",
            "/images/routes/karpaz/golden-beach/4.jpg",
            "/images/routes/karpaz/golden-beach/5.jpg"
          ]
        },
        {
          "name": "Ayios Philon Kilisesi",
          "description": "Ayios Philon Kilisesi, Klasik Karpaz: Eşekler, Altınkum & Apostolos Andreas güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk",
          "images": [
            "/images/routes/karpaz/ayios-philon/1.jpg",
            "/images/routes/karpaz/ayios-philon/2.jpg",
            "/images/routes/karpaz/ayios-philon/3.jpg"
          ]
        },
        {
          "name": "Apostolos Andreas Manastırı",
          "description": "Apostolos Andreas Manastırı, Klasik Karpaz: Eşekler, Altınkum & Apostolos Andreas güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 dk",
          "images": [
            "/images/routes/karpaz/apostolos-andreas-monastery/1.jpg",
            "/images/routes/karpaz/apostolos-andreas-monastery/2.jpg",
            "/images/routes/karpaz/apostolos-andreas-monastery/3.jpg",
            "/images/routes/karpaz/apostolos-andreas-monastery/4.jpg",
            "/images/routes/karpaz/apostolos-andreas-monastery/5.jpg"
          ]
        },
        {
          "name": "Zafer Burnu",
          "description": "Zafer Burnu, Klasik Karpaz: Eşekler, Altınkum & Apostolos Andreas güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "18:00",
          "driveTime": "15–20 dk",
          "images": [
            "/images/routes/karpaz/apostolos-andreas-monastery/1.jpg",
            "/images/routes/karpaz/apostolos-andreas-monastery/2.jpg",
            "/images/routes/karpaz/apostolos-andreas-monastery/3.jpg",
            "/images/routes/karpaz/apostolos-andreas-monastery/4.jpg",
            "/images/routes/karpaz/apostolos-andreas-monastery/5.jpg"
          ]
        }
      ],
      "en": [
        {
          "name": "Dipkarpaz Village Center",
          "description": "Dipkarpaz Village Center is an essential milestone along the Classic Karpaz: Wild Donkeys, Golden Beach & Cape Apostolos. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "9:00",
          "driveTime": "0 min",
          "images": [
            "/images/routes/karpaz/dipkarpaz-village/1.jpg",
            "/images/routes/karpaz/dipkarpaz-village/2.jpg",
            "/images/routes/karpaz/dipkarpaz-village/3.jpg",
            "/images/routes/karpaz/dipkarpaz-village/4.jpg"
          ]
        },
        {
          "name": "Karpaz Scenic National Highway",
          "description": "Karpaz Scenic National Highway is an essential milestone along the Classic Karpaz: Wild Donkeys, Golden Beach & Cape Apostolos. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Wild Donkey Sanctuary Zone",
          "description": "Wild Donkey Sanctuary Zone is an essential milestone along the Classic Karpaz: Wild Donkeys, Golden Beach & Cape Apostolos. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min",
          "images": [
            "/images/routes/karpaz/karpaz-national-park/1.jpg",
            "/images/routes/karpaz/karpaz-national-park/2.jpg",
            "/images/routes/karpaz/karpaz-national-park/3.jpg",
            "/images/routes/karpaz/karpaz-national-park/4.jpg",
            "/images/routes/karpaz/karpaz-national-park/5.jpg"
          ]
        },
        {
          "name": "Golden Beach (Altınkum)",
          "description": "Golden Beach (Altınkum) is an essential milestone along the Classic Karpaz: Wild Donkeys, Golden Beach & Cape Apostolos. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min",
          "images": [
            "/images/routes/karpaz/golden-beach/1.jpg",
            "/images/routes/karpaz/golden-beach/2.jpg",
            "/images/routes/karpaz/golden-beach/3.jpg",
            "/images/routes/karpaz/golden-beach/4.jpg",
            "/images/routes/karpaz/golden-beach/5.jpg"
          ]
        },
        {
          "name": "Ayios Philon Ancient Church",
          "description": "Ayios Philon Ancient Church is an essential milestone along the Classic Karpaz: Wild Donkeys, Golden Beach & Cape Apostolos. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min",
          "images": [
            "/images/routes/karpaz/ayios-philon/1.jpg",
            "/images/routes/karpaz/ayios-philon/2.jpg",
            "/images/routes/karpaz/ayios-philon/3.jpg"
          ]
        },
        {
          "name": "Apostolos Andreas Monastery",
          "description": "Apostolos Andreas Monastery is an essential milestone along the Classic Karpaz: Wild Donkeys, Golden Beach & Cape Apostolos. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 min",
          "images": [
            "/images/routes/karpaz/apostolos-andreas-monastery/1.jpg",
            "/images/routes/karpaz/apostolos-andreas-monastery/2.jpg",
            "/images/routes/karpaz/apostolos-andreas-monastery/3.jpg",
            "/images/routes/karpaz/apostolos-andreas-monastery/4.jpg",
            "/images/routes/karpaz/apostolos-andreas-monastery/5.jpg"
          ]
        },
        {
          "name": "Cape Apostolos Andreas (Zafer Burnu)",
          "description": "Cape Apostolos Andreas (Zafer Burnu) is an essential milestone along the Classic Karpaz: Wild Donkeys, Golden Beach & Cape Apostolos. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "18:00",
          "driveTime": "15–20 min",
          "images": [
            "/images/routes/karpaz/apostolos-andreas-monastery/1.jpg",
            "/images/routes/karpaz/apostolos-andreas-monastery/2.jpg",
            "/images/routes/karpaz/apostolos-andreas-monastery/3.jpg",
            "/images/routes/karpaz/apostolos-andreas-monastery/4.jpg",
            "/images/routes/karpaz/apostolos-andreas-monastery/5.jpg"
          ]
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "İlkbahar (Nisan–Haziran) & Sonbahar (Eylül–Kasım)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "Spring (April–June) & Autumn (September–November)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    }
  },
  {
    "id": "kar-seacaves",
    "slug": "kar-seacaves",
    "region": "karpaz",
    "themes": [
      "coast",
      "nature",
      "scenic"
    ],
    "rating": 5,
    "distance": "35–65 km",
    "duration": {
      "tr": "Tam gün",
      "en": "Full day"
    },
    "difficulty": {
      "tr": "Orta",
      "en": "Moderate"
    },
    "startFinish": {
      "tr": "Blue House Deniz Mağarası",
      "en": "Kaplıca Coast"
    },
    "heroImage": "/images/routes/karpaz-loop.jpg",
    "title": {
      "tr": "Gizli Koylar & Deniz Mağaraları",
      "en": "Hidden Karpaz Coves & Glowing Sea Caves"
    },
    "subtitle": {
      "tr": "Akdeniz'in kendi mimarisini oyduğu yer: mavi ışıltılı deniz mağarası, Camel Point, Horseshoe Beach ve Altınkum'un daha az kalabalık ucu. Mayo şart.",
      "en": "Where the Mediterranean carved natural architecture: glowing sea caves, Camel Point, Horseshoe Beach, and secluded swimming stretches. Swimwear required."
    },
    "intro": {
      "tr": "Akdeniz'in kendi mimarisini oyduğu yer: mavi ışıltılı deniz mağarası, Camel Point, Horseshoe Beach ve Altınkum'un daha az kalabalık ucu. Mayo şart. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "Where the Mediterranean carved natural architecture: glowing sea caves, Camel Point, Horseshoe Beach, and secluded swimming stretches. Swimwear required. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Birkaç durak yüzmeyi gerektiriyor — mayo ve su ayakkabısı getirin. Deniz mağarasının içindeki mavi ışık öğle saatlerinde en belirgin.",
      "en": "Several stops require wading or swimming — bring water shoes and snorkeling goggles. The azure light inside the sea cave is most striking at midday."
    },
    "proposers": [
      "O.O."
    ],
    "stops": {
      "tr": [
        {
          "name": "Blue House Deniz Mağarası",
          "description": "Blue House Deniz Mağarası, Gizli Koylar & Deniz Mağaraları güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Camel Point",
          "description": "Camel Point, Gizli Koylar & Deniz Mağaraları güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Horseshoe Beach",
          "description": "Horseshoe Beach, Gizli Koylar & Deniz Mağaraları güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Kaplıca Sahili",
          "description": "Kaplıca Sahili, Gizli Koylar & Deniz Mağaraları güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Altınkum (Az Kalabalık Uç)",
          "description": "Altınkum (Az Kalabalık Uç), Gizli Koylar & Deniz Mağaraları güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk",
          "images": [
            "/images/routes/karpaz/golden-beach/1.jpg",
            "/images/routes/karpaz/golden-beach/2.jpg",
            "/images/routes/karpaz/golden-beach/3.jpg",
            "/images/routes/karpaz/golden-beach/4.jpg",
            "/images/routes/karpaz/golden-beach/5.jpg"
          ]
        },
        {
          "name": "Zafer Burnu Kayalıkları",
          "description": "Zafer Burnu Kayalıkları, Gizli Koylar & Deniz Mağaraları güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 dk",
          "images": [
            "/images/routes/karpaz/apostolos-andreas-monastery/1.jpg",
            "/images/routes/karpaz/apostolos-andreas-monastery/2.jpg",
            "/images/routes/karpaz/apostolos-andreas-monastery/3.jpg",
            "/images/routes/karpaz/apostolos-andreas-monastery/4.jpg",
            "/images/routes/karpaz/apostolos-andreas-monastery/5.jpg"
          ]
        }
      ],
      "en": [
        {
          "name": "Blue Sea Cave & Grotto",
          "description": "Blue Sea Cave & Grotto is an essential milestone along the Hidden Karpaz Coves & Glowing Sea Caves. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Camel Point Rock Formation",
          "description": "Camel Point Rock Formation is an essential milestone along the Hidden Karpaz Coves & Glowing Sea Caves. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Horseshoe Cove",
          "description": "Horseshoe Cove is an essential milestone along the Hidden Karpaz Coves & Glowing Sea Caves. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Kaplıca Sand Beach",
          "description": "Kaplıca Sand Beach is an essential milestone along the Hidden Karpaz Coves & Glowing Sea Caves. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Golden Beach (Quiet Far End)",
          "description": "Golden Beach (Quiet Far End) is an essential milestone along the Hidden Karpaz Coves & Glowing Sea Caves. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min",
          "images": [
            "/images/routes/karpaz/golden-beach/1.jpg",
            "/images/routes/karpaz/golden-beach/2.jpg",
            "/images/routes/karpaz/golden-beach/3.jpg",
            "/images/routes/karpaz/golden-beach/4.jpg",
            "/images/routes/karpaz/golden-beach/5.jpg"
          ]
        },
        {
          "name": "Cape Zafer Sea Cliffs",
          "description": "Cape Zafer Sea Cliffs is an essential milestone along the Hidden Karpaz Coves & Glowing Sea Caves. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 min",
          "images": [
            "/images/routes/karpaz/apostolos-andreas-monastery/1.jpg",
            "/images/routes/karpaz/apostolos-andreas-monastery/2.jpg",
            "/images/routes/karpaz/apostolos-andreas-monastery/3.jpg",
            "/images/routes/karpaz/apostolos-andreas-monastery/4.jpg",
            "/images/routes/karpaz/apostolos-andreas-monastery/5.jpg"
          ]
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "İlkbahar (Nisan–Haziran) & Sonbahar (Eylül–Kasım)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "Spring (April–June) & Autumn (September–November)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    }
  },
  {
    "id": "kar-wildnature",
    "slug": "kar-wildnature",
    "region": "karpaz",
    "themes": [
      "nature",
      "scenic"
    ],
    "rating": 5,
    "distance": "35–65 km",
    "duration": {
      "tr": "Tam gün",
      "en": "Full day"
    },
    "difficulty": {
      "tr": "Orta",
      "en": "Moderate"
    },
    "startFinish": {
      "tr": "Yenierenköy",
      "en": "Yenierenköy"
    },
    "heroImage": "/images/routes/karpaz-loop.jpg",
    "title": {
      "tr": "Karpaz Vahşi Doğa (70 km Yarımada)",
      "en": "Karpaz 70 km Wild Nature Peninsula Drive"
    },
    "subtitle": {
      "tr": "Yarımadanın tüm uzunluğunu, tarım arazisinden deniz fenerine kadar kat eden rota. Avrupa kıyısından çok ıssız bir adayı andıran manzaralar.",
      "en": "Traversing the entire wild length of the peninsula from rural farmland to the historic lighthouse. Landscapes reminiscent of a secluded desert island."
    },
    "intro": {
      "tr": "Yarımadanın tüm uzunluğunu, tarım arazisinden deniz fenerine kadar kat eden rota. Avrupa kıyısından çok ıssız bir adayı andıran manzaralar. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "Traversing the entire wild length of the peninsula from rural farmland to the historic lighthouse. Landscapes reminiscent of a secluded desert island. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Ronnas Koyu neredeyse hiç bilinmez ve genelde bomboştur — yarımadanın en sakin yüzme noktalarından biri.",
      "en": "Ronnas Bay is almost completely unknown to travelers and usually entirely deserted — one of the most serene swimming spots in Cyprus."
    },
    "proposers": [
      "O.O."
    ],
    "stops": {
      "tr": [
        {
          "name": "Yenierenköy",
          "description": "Yenierenköy, Karpaz Vahşi Doğa (70 km Yarımada) güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Karpaz Milli Parkı",
          "description": "Karpaz Milli Parkı, Karpaz Vahşi Doğa (70 km Yarımada) güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk",
          "images": [
            "/images/routes/karpaz/karpaz-national-park/1.jpg",
            "/images/routes/karpaz/karpaz-national-park/2.jpg",
            "/images/routes/karpaz/karpaz-national-park/3.jpg",
            "/images/routes/karpaz/karpaz-national-park/4.jpg",
            "/images/routes/karpaz/karpaz-national-park/5.jpg"
          ]
        },
        {
          "name": "Altınkum",
          "description": "Altınkum, Karpaz Vahşi Doğa (70 km Yarımada) güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk",
          "images": [
            "/images/routes/karpaz/golden-beach/1.jpg",
            "/images/routes/karpaz/golden-beach/2.jpg",
            "/images/routes/karpaz/golden-beach/3.jpg",
            "/images/routes/karpaz/golden-beach/4.jpg",
            "/images/routes/karpaz/golden-beach/5.jpg"
          ]
        },
        {
          "name": "Dipkarpaz Köyü",
          "description": "Dipkarpaz Köyü, Karpaz Vahşi Doğa (70 km Yarımada) güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk",
          "images": [
            "/images/routes/karpaz/dipkarpaz-village/1.jpg",
            "/images/routes/karpaz/dipkarpaz-village/2.jpg",
            "/images/routes/karpaz/dipkarpaz-village/3.jpg",
            "/images/routes/karpaz/dipkarpaz-village/4.jpg"
          ]
        },
        {
          "name": "Zafer Burnu",
          "description": "Zafer Burnu, Karpaz Vahşi Doğa (70 km Yarımada) güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk",
          "images": [
            "/images/routes/karpaz/apostolos-andreas-monastery/1.jpg",
            "/images/routes/karpaz/apostolos-andreas-monastery/2.jpg",
            "/images/routes/karpaz/apostolos-andreas-monastery/3.jpg",
            "/images/routes/karpaz/apostolos-andreas-monastery/4.jpg",
            "/images/routes/karpaz/apostolos-andreas-monastery/5.jpg"
          ]
        },
        {
          "name": "Apostolos Andreas",
          "description": "Apostolos Andreas, Karpaz Vahşi Doğa (70 km Yarımada) güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 dk",
          "images": [
            "/images/routes/karpaz/apostolos-andreas-monastery/1.jpg",
            "/images/routes/karpaz/apostolos-andreas-monastery/2.jpg",
            "/images/routes/karpaz/apostolos-andreas-monastery/3.jpg",
            "/images/routes/karpaz/apostolos-andreas-monastery/4.jpg",
            "/images/routes/karpaz/apostolos-andreas-monastery/5.jpg"
          ]
        },
        {
          "name": "Ronnas Koyu",
          "description": "Ronnas Koyu, Karpaz Vahşi Doğa (70 km Yarımada) güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "18:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Yenierenköy Coastal Hub",
          "description": "Yenierenköy Coastal Hub is an essential milestone along the Karpaz 70 km Wild Nature Peninsula Drive. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Karpaz National Park Gateway",
          "description": "Karpaz National Park Gateway is an essential milestone along the Karpaz 70 km Wild Nature Peninsula Drive. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min",
          "images": [
            "/images/routes/karpaz/karpaz-national-park/1.jpg",
            "/images/routes/karpaz/karpaz-national-park/2.jpg",
            "/images/routes/karpaz/karpaz-national-park/3.jpg",
            "/images/routes/karpaz/karpaz-national-park/4.jpg",
            "/images/routes/karpaz/karpaz-national-park/5.jpg"
          ]
        },
        {
          "name": "Golden Beach Dunes",
          "description": "Golden Beach Dunes is an essential milestone along the Karpaz 70 km Wild Nature Peninsula Drive. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min",
          "images": [
            "/images/routes/karpaz/golden-beach/1.jpg",
            "/images/routes/karpaz/golden-beach/2.jpg",
            "/images/routes/karpaz/golden-beach/3.jpg",
            "/images/routes/karpaz/golden-beach/4.jpg",
            "/images/routes/karpaz/golden-beach/5.jpg"
          ]
        },
        {
          "name": "Dipkarpaz Traditional Quarter",
          "description": "Dipkarpaz Traditional Quarter is an essential milestone along the Karpaz 70 km Wild Nature Peninsula Drive. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min",
          "images": [
            "/images/routes/karpaz/dipkarpaz-village/1.jpg",
            "/images/routes/karpaz/dipkarpaz-village/2.jpg",
            "/images/routes/karpaz/dipkarpaz-village/3.jpg",
            "/images/routes/karpaz/dipkarpaz-village/4.jpg"
          ]
        },
        {
          "name": "Cape Zafer Edge",
          "description": "Cape Zafer Edge is an essential milestone along the Karpaz 70 km Wild Nature Peninsula Drive. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min",
          "images": [
            "/images/routes/karpaz/apostolos-andreas-monastery/1.jpg",
            "/images/routes/karpaz/apostolos-andreas-monastery/2.jpg",
            "/images/routes/karpaz/apostolos-andreas-monastery/3.jpg",
            "/images/routes/karpaz/apostolos-andreas-monastery/4.jpg",
            "/images/routes/karpaz/apostolos-andreas-monastery/5.jpg"
          ]
        },
        {
          "name": "Apostolos Andreas Grounds",
          "description": "Apostolos Andreas Grounds is an essential milestone along the Karpaz 70 km Wild Nature Peninsula Drive. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 min",
          "images": [
            "/images/routes/karpaz/apostolos-andreas-monastery/1.jpg",
            "/images/routes/karpaz/apostolos-andreas-monastery/2.jpg",
            "/images/routes/karpaz/apostolos-andreas-monastery/3.jpg",
            "/images/routes/karpaz/apostolos-andreas-monastery/4.jpg",
            "/images/routes/karpaz/apostolos-andreas-monastery/5.jpg"
          ]
        },
        {
          "name": "Ronnas Secluded Bay",
          "description": "Ronnas Secluded Bay is an essential milestone along the Karpaz 70 km Wild Nature Peninsula Drive. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "18:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "İlkbahar (Nisan–Haziran) & Sonbahar (Eylül–Kasım)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "Spring (April–June) & Autumn (September–November)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    }
  },
  {
    "id": "kar-yudi",
    "slug": "kar-yudi",
    "region": "karpaz",
    "themes": [
      "nature",
      "coast"
    ],
    "rating": 5,
    "distance": "35–65 km",
    "duration": {
      "tr": "Tam gün",
      "en": "Full day"
    },
    "difficulty": {
      "tr": "Zor (yürüyüş)",
      "en": "Challenging (hike)"
    },
    "startFinish": {
      "tr": "Yudi Dağı Yürüyüş Parkuru",
      "en": "Mount Yudi Trailhead"
    },
    "heroImage": "/images/routes/karpaz-loop.jpg",
    "title": {
      "tr": "Yudi Dağı Yürüyüşü & Karpaz Gate Marina",
      "en": "Mount Yudi Trail Hike & Karpaz Gate Marina"
    },
    "subtitle": {
      "tr": "Yudi Dağı'nda zorlu bir yürüyüş, Yeni Erenköy plajında yüzme ve Karpaz Gate Marina'da sakin bir gün batımı finali. Aktif gezginler için.",
      "en": "An exhilarating scenic ridge hike on Mount Yudi, swimming at Yenierenköy beach, and relaxing with marina yachts and sunset dining."
    },
    "intro": {
      "tr": "Yudi Dağı'nda zorlu bir yürüyüş, Yeni Erenköy plajında yüzme ve Karpaz Gate Marina'da sakin bir gün batımı finali. Aktif gezginler için. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "An exhilarating scenic ridge hike on Mount Yudi, swimming at Yenierenköy beach, and relaxing with marina yachts and sunset dining. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Yudi Dağı tırmanışı için sağlam ayakkabı ve bol su şart; marina ise yürüyüş sonrası konforlu bir toparlanma durağı.",
      "en": "Sturdy hiking shoes and plenty of drinking water are essential for the Yudi climb; the modern marina afterwards offers a comfortable relaxation haven."
    },
    "proposers": [
      "K.A."
    ],
    "stops": {
      "tr": [
        {
          "name": "Yudi Dağı Yürüyüş Parkuru",
          "description": "Yudi Dağı Yürüyüş Parkuru, Yudi Dağı Yürüyüşü & Karpaz Gate Marina güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Yeni Erenköy Halk Plajı",
          "description": "Yeni Erenköy Halk Plajı, Yudi Dağı Yürüyüşü & Karpaz Gate Marina güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Karpaz Gate Marina",
          "description": "Karpaz Gate Marina, Yudi Dağı Yürüyüşü & Karpaz Gate Marina güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Gün Batımı Noktası",
          "description": "Gün Batımı Noktası, Yudi Dağı Yürüyüşü & Karpaz Gate Marina güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Revaklı Ev Konağı",
          "description": "Revaklı Ev Konağı, Yudi Dağı Yürüyüşü & Karpaz Gate Marina güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Mount Yudi Hiking Trail",
          "description": "Mount Yudi Hiking Trail is an essential milestone along the Mount Yudi Trail Hike & Karpaz Gate Marina. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Yeni Erenköy Public Beach",
          "description": "Yeni Erenköy Public Beach is an essential milestone along the Mount Yudi Trail Hike & Karpaz Gate Marina. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Karpaz Gate Marina Promenade",
          "description": "Karpaz Gate Marina Promenade is an essential milestone along the Mount Yudi Trail Hike & Karpaz Gate Marina. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Marina Pier Sunset View",
          "description": "Marina Pier Sunset View is an essential milestone along the Mount Yudi Trail Hike & Karpaz Gate Marina. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Revaklı Ev Heritage Mansion",
          "description": "Revaklı Ev Heritage Mansion is an essential milestone along the Mount Yudi Trail Hike & Karpaz Gate Marina. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "İlkbahar (Nisan–Haziran) & Sonbahar (Eylül–Kasım)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "Spring (April–June) & Autumn (September–November)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    }
  },
  {
    "id": "kar-caves",
    "slug": "kar-caves",
    "region": "karpaz",
    "themes": [
      "history",
      "nature",
      "coast"
    ],
    "rating": 5,
    "distance": "35–65 km",
    "duration": {
      "tr": "Tam gün",
      "en": "Full day"
    },
    "difficulty": {
      "tr": "Orta",
      "en": "Moderate"
    },
    "startFinish": {
      "tr": "Hill Coffee",
      "en": "Hill Coffee Lookout"
    },
    "heroImage": "/images/routes/karpaz-loop.jpg",
    "title": {
      "tr": "Karpaz Mağaraları & Antik İzler",
      "en": "Karpaz Caves & Ancient Coastal Antiquities"
    },
    "subtitle": {
      "tr": "Antik mağaralar, Agla Trias, tarihi kiliseler ve uçsuz plajlarla Karpaz'ın en uç noktasına — dünyanın kenarındaymış hissi veren bir rota.",
      "en": "Ancient cave dwellings, Agla Trias mosaics, historic churches, and vast empty sands leading to the edge-of-the-world tip of Karpaz."
    },
    "intro": {
      "tr": "Antik mağaralar, Agla Trias, tarihi kiliseler ve uçsuz plajlarla Karpaz'ın en uç noktasına — dünyanın kenarındaymış hissi veren bir rota. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "Ancient cave dwellings, Agla Trias mosaics, historic churches, and vast empty sands leading to the edge-of-the-world tip of Karpaz. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Uzun bir sürüş rotası — sabah erken çıkın ve Dipkarpaz sonrası benzin istasyonu olmadığını unutmayın.",
      "en": "This is a long and remote drive — depart early in the morning and note that there are zero gas stations past the village of Dipkarpaz."
    },
    "proposers": [
      "A.T."
    ],
    "stops": {
      "tr": [
        {
          "name": "Hill Coffee",
          "description": "Hill Coffee, Karpaz Mağaraları & Antik İzler güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Antik Mağaralar",
          "description": "Antik Mağaralar, Karpaz Mağaraları & Antik İzler güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Agla Trias",
          "description": "Agla Trias, Karpaz Mağaraları & Antik İzler güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Aylos Kilisesi",
          "description": "Aylos Kilisesi, Karpaz Mağaraları & Antik İzler güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Big Sand Beach",
          "description": "Big Sand Beach, Karpaz Mağaraları & Antik İzler güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Rizokarpaso (Uç Nokta)",
          "description": "Rizokarpaso (Uç Nokta), Karpaz Mağaraları & Antik İzler güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Hill Coffee Hillside Lookout",
          "description": "Hill Coffee Hillside Lookout is an essential milestone along the Karpaz Caves & Ancient Coastal Antiquities. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Ancient Rock-Cut Caves",
          "description": "Ancient Rock-Cut Caves is an essential milestone along the Karpaz Caves & Ancient Coastal Antiquities. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Agla Trias Basilica Mosaics",
          "description": "Agla Trias Basilica Mosaics is an essential milestone along the Karpaz Caves & Ancient Coastal Antiquities. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Aylos Historic Chapel",
          "description": "Aylos Historic Chapel is an essential milestone along the Karpaz Caves & Ancient Coastal Antiquities. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Big Sand Beach Shoreline",
          "description": "Big Sand Beach Shoreline is an essential milestone along the Karpaz Caves & Ancient Coastal Antiquities. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Rizokarpaso Wilderness Point",
          "description": "Rizokarpaso Wilderness Point is an essential milestone along the Karpaz Caves & Ancient Coastal Antiquities. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "İlkbahar (Nisan–Haziran) & Sonbahar (Eylül–Kasım)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "Spring (April–June) & Autumn (September–November)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    }
  },
  {
    "id": "kar-buyukkonuk",
    "slug": "kar-buyukkonuk",
    "region": "karpaz",
    "themes": [
      "nature",
      "food",
      "history"
    ],
    "rating": 5,
    "distance": "35–65 km",
    "duration": {
      "tr": "Yarım–tam gün",
      "en": "Half to full day"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "İskele Arkeoloji Müzesi",
      "en": "Büyükkonuk Village"
    },
    "heroImage": "/images/routes/karpaz-loop.jpg",
    "title": {
      "tr": "Büyükkonuk Eko-Köy & Doğu Kapısı",
      "en": "Büyükkonuk Eco-Village & Traditional Village Crafts"
    },
    "subtitle": {
      "tr": "KKTC'nin ilk eko-turizm köyü Büyükkonuk üzerinden Karpaz'a giriş: geleneksel el sanatları, yerel yemek ve köy yaşamı.",
      "en": "Enter Karpaz through Northern Cyprus’ first certified eco-tourism village: traditional artisan crafts, halloumi making, and genuine village hospitality."
    },
    "intro": {
      "tr": "KKTC'nin ilk eko-turizm köyü Büyükkonuk üzerinden Karpaz'a giriş: geleneksel el sanatları, yerel yemek ve köy yaşamı. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "Enter Karpaz through Northern Cyprus’ first certified eco-tourism village: traditional artisan crafts, halloumi making, and genuine village hospitality. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Büyükkonuk'ta eko-gün festivalleri düzenlenir; denk gelirseniz geleneksel hellim yapımı ve zeytin ezme gösterilerini kaçırmayın.",
      "en": "Büyükkonuk frequently hosts traditional eco-day festivals; if your trip coincides, don’t miss live halloumi making and olive bread baking."
    },
    "proposers": [
      "U.S."
    ],
    "stops": {
      "tr": [
        {
          "name": "İskele Arkeoloji Müzesi",
          "description": "İskele Arkeoloji Müzesi, Büyükkonuk Eko-Köy & Doğu Kapısı güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk",
          "images": [
            "/images/routes/guzelyurt/güzelyurt-archaeology/1.jpg",
            "/images/routes/guzelyurt/güzelyurt-archaeology/2.jpg",
            "/images/routes/guzelyurt/güzelyurt-archaeology/3.jpg",
            "/images/routes/guzelyurt/güzelyurt-archaeology/4.jpg"
          ]
        },
        {
          "name": "Kantara Kalesi",
          "description": "Kantara Kalesi, Büyükkonuk Eko-Köy & Doğu Kapısı güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Büyükkonuk Eko-Köy",
          "description": "Büyükkonuk Eko-Köy, Büyükkonuk Eko-Köy & Doğu Kapısı güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Dipkarpaz Köyü",
          "description": "Dipkarpaz Köyü, Büyükkonuk Eko-Köy & Doğu Kapısı güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk",
          "images": [
            "/images/routes/karpaz/dipkarpaz-village/1.jpg",
            "/images/routes/karpaz/dipkarpaz-village/2.jpg",
            "/images/routes/karpaz/dipkarpaz-village/3.jpg",
            "/images/routes/karpaz/dipkarpaz-village/4.jpg"
          ]
        },
        {
          "name": "Ayios Philon Kilisesi",
          "description": "Ayios Philon Kilisesi, Büyükkonuk Eko-Köy & Doğu Kapısı güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk",
          "images": [
            "/images/routes/karpaz/ayios-philon/1.jpg",
            "/images/routes/karpaz/ayios-philon/2.jpg",
            "/images/routes/karpaz/ayios-philon/3.jpg"
          ]
        }
      ],
      "en": [
        {
          "name": "Iskele Archaeology Museum",
          "description": "Iskele Archaeology Museum is an essential milestone along the Büyükkonuk Eco-Village & Traditional Village Crafts. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "9:00",
          "driveTime": "0 min",
          "images": [
            "/images/routes/guzelyurt/güzelyurt-archaeology/1.jpg",
            "/images/routes/guzelyurt/güzelyurt-archaeology/2.jpg",
            "/images/routes/guzelyurt/güzelyurt-archaeology/3.jpg",
            "/images/routes/guzelyurt/güzelyurt-archaeology/4.jpg"
          ]
        },
        {
          "name": "Kantara Castle Foothills",
          "description": "Kantara Castle Foothills is an essential milestone along the Büyükkonuk Eco-Village & Traditional Village Crafts. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Büyükkonuk Eco-Village Square",
          "description": "Büyükkonuk Eco-Village Square is an essential milestone along the Büyükkonuk Eco-Village & Traditional Village Crafts. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Dipkarpaz Village Lanes",
          "description": "Dipkarpaz Village Lanes is an essential milestone along the Büyükkonuk Eco-Village & Traditional Village Crafts. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min",
          "images": [
            "/images/routes/karpaz/dipkarpaz-village/1.jpg",
            "/images/routes/karpaz/dipkarpaz-village/2.jpg",
            "/images/routes/karpaz/dipkarpaz-village/3.jpg",
            "/images/routes/karpaz/dipkarpaz-village/4.jpg"
          ]
        },
        {
          "name": "Ayios Philon Seaside Church",
          "description": "Ayios Philon Seaside Church is an essential milestone along the Büyükkonuk Eco-Village & Traditional Village Crafts. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min",
          "images": [
            "/images/routes/karpaz/ayios-philon/1.jpg",
            "/images/routes/karpaz/ayios-philon/2.jpg",
            "/images/routes/karpaz/ayios-philon/3.jpg"
          ]
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "İlkbahar (Nisan–Haziran) & Sonbahar (Eylül–Kasım)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "Spring (April–June) & Autumn (September–November)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    }
  },
  {
    "id": "bati-soli",
    "slug": "guzelyurt-lefke-heritage",
    "region": "bati",
    "themes": [
      "history",
      "scenic"
    ],
    "rating": 5,
    "distance": "35–65 km",
    "duration": {
      "tr": "Yarım–tam gün",
      "en": "Half to full day"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "Soli Bazilikası",
      "en": "Ancient Soli Ruins"
    },
    "heroImage": "/images/routes/guzelyurt-loop.jpg",
    "title": {
      "tr": "Soli Antik Kenti & Vouni Sarayı",
      "en": "Ancient Soli & Vouni Cliffside Palace"
    },
    "subtitle": {
      "tr": "Kuğu mozaiğiyle ünlü Soli, tepedeki Vouni Sarayı ve batı kıyısının sessiz antik kentleri. Turist otobüsleri buraya pek uğramaz.",
      "en": "Ancient Soli renowned for its delicate swan mosaic, the hilltop Persian palace of Vouni, and the serene western coast away from tour buses."
    },
    "intro": {
      "tr": "Kuğu mozaiğiyle ünlü Soli, tepedeki Vouni Sarayı ve batı kıyısının sessiz antik kentleri. Turist otobüsleri buraya pek uğramaz. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "Ancient Soli renowned for its delicate swan mosaic, the hilltop Persian palace of Vouni, and the serene western coast away from tour buses. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Vouni Sarayı'ndan gün batımı batı kıyısının en güzellerinden biri ve popüler noktalara göre çok daha sakin.",
      "en": "Sunset from the ruins of Vouni Palace is one of the most stunning spectacles in Cyprus, with vast views over Morphou Bay and far fewer crowds."
    },
    "proposers": [
      "U.S.",
      "E.P.",
      "A.A.",
      "O.O.",
      "M.U.",
      "K.A.",
      "M.M.",
      "S.A."
    ],
    "stops": {
      "tr": [
        {
          "name": "Soli Bazilikası",
          "description": "Soli Bazilikası, Soli Antik Kenti & Vouni Sarayı güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk",
          "images": [
            "/images/routes/guzelyurt/soli-ancient-city/1.jpg",
            "/images/routes/guzelyurt/soli-ancient-city/2.jpg",
            "/images/routes/guzelyurt/soli-ancient-city/3.jpg",
            "/images/routes/guzelyurt/soli-ancient-city/4.jpg"
          ]
        },
        {
          "name": "Soli Roma Tiyatrosu",
          "description": "Soli Roma Tiyatrosu, Soli Antik Kenti & Vouni Sarayı güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk",
          "images": [
            "/images/routes/guzelyurt/soli-ancient-city/1.jpg",
            "/images/routes/guzelyurt/soli-ancient-city/2.jpg",
            "/images/routes/guzelyurt/soli-ancient-city/3.jpg",
            "/images/routes/guzelyurt/soli-ancient-city/4.jpg"
          ]
        },
        {
          "name": "Antik Agora",
          "description": "Antik Agora, Soli Antik Kenti & Vouni Sarayı güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Vouni Sarayı",
          "description": "Vouni Sarayı, Soli Antik Kenti & Vouni Sarayı güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk",
          "images": [
            "/images/routes/guzelyurt/vouni-palace/1.jpg",
            "/images/routes/guzelyurt/vouni-palace/2.jpg",
            "/images/routes/guzelyurt/vouni-palace/3.jpg",
            "/images/routes/guzelyurt/vouni-palace/4.jpg",
            "/images/routes/guzelyurt/vouni-palace/5.jpg"
          ]
        },
        {
          "name": "Manzara Noktası",
          "description": "Manzara Noktası, Soli Antik Kenti & Vouni Sarayı güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Soli Basilica & Swan Mosaic",
          "description": "Soli Basilica & Swan Mosaic is an essential milestone along the Ancient Soli & Vouni Cliffside Palace. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "9:00",
          "driveTime": "0 min",
          "images": [
            "/images/routes/guzelyurt/soli-ancient-city/1.jpg",
            "/images/routes/guzelyurt/soli-ancient-city/2.jpg",
            "/images/routes/guzelyurt/soli-ancient-city/3.jpg",
            "/images/routes/guzelyurt/soli-ancient-city/4.jpg"
          ]
        },
        {
          "name": "Soli Roman Amphitheatre",
          "description": "Soli Roman Amphitheatre is an essential milestone along the Ancient Soli & Vouni Cliffside Palace. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min",
          "images": [
            "/images/routes/guzelyurt/soli-ancient-city/1.jpg",
            "/images/routes/guzelyurt/soli-ancient-city/2.jpg",
            "/images/routes/guzelyurt/soli-ancient-city/3.jpg",
            "/images/routes/guzelyurt/soli-ancient-city/4.jpg"
          ]
        },
        {
          "name": "Ancient Roman Agora",
          "description": "Ancient Roman Agora is an essential milestone along the Ancient Soli & Vouni Cliffside Palace. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Vouni Cliffside Palace",
          "description": "Vouni Cliffside Palace is an essential milestone along the Ancient Soli & Vouni Cliffside Palace. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min",
          "images": [
            "/images/routes/guzelyurt/vouni-palace/1.jpg",
            "/images/routes/guzelyurt/vouni-palace/2.jpg",
            "/images/routes/guzelyurt/vouni-palace/3.jpg",
            "/images/routes/guzelyurt/vouni-palace/4.jpg",
            "/images/routes/guzelyurt/vouni-palace/5.jpg"
          ]
        },
        {
          "name": "Morphou Bay Scenic Lookout",
          "description": "Morphou Bay Scenic Lookout is an essential milestone along the Ancient Soli & Vouni Cliffside Palace. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "İlkbahar (Nisan–Haziran) & Sonbahar (Eylül–Kasım)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "Spring (April–June) & Autumn (September–November)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    }
  },
  {
    "id": "bati-guzelyurt",
    "slug": "bati-guzelyurt",
    "region": "bati",
    "themes": [
      "history",
      "nature",
      "food"
    ],
    "rating": 5,
    "distance": "35–65 km",
    "duration": {
      "tr": "Tam gün",
      "en": "Full day"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "Güzelyurt Merkez",
      "en": "Güzelyurt Town Center"
    },
    "heroImage": "/images/routes/guzelyurt-loop.jpg",
    "title": {
      "tr": "Güzelyurt Arkeoloji & Portakal Kasabası",
      "en": "Güzelyurt Archaeology & Citrus Capital"
    },
    "subtitle": {
      "tr": "Tarım bahçeleri, bölge kasabası pazarları ve müze tarihleri etrafında kurulu sakin bir batı rotası; St. Mamas ve portakal bahçeleri.",
      "en": "Fragrant citrus orchards, regional farmers markets, and rich archaeological history centered around St. Mamas Church and gold relics."
    },
    "intro": {
      "tr": "Tarım bahçeleri, bölge kasabası pazarları ve müze tarihleri etrafında kurulu sakin bir batı rotası; St. Mamas ve portakal bahçeleri. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "Fragrant citrus orchards, regional farmers markets, and rich archaeological history centered around St. Mamas Church and gold relics. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Sabah erken gidin — yerel çiftçiler taze portakal ve limon getirdiğinde pazar en canlı halinde olur.",
      "en": "Arrive early in the morning when local growers bring fresh oranges, lemons, and mandarins — the village market is at its liveliest."
    },
    "proposers": [
      "E.A.",
      "H.G.",
      "D.O."
    ],
    "stops": {
      "tr": [
        {
          "name": "Güzelyurt Merkez",
          "description": "Güzelyurt Merkez, Güzelyurt Arkeoloji & Portakal Kasabası güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk",
          "images": [
            "/images/routes/guzelyurt/güzelyurt-town-centre/1.jpg"
          ]
        },
        {
          "name": "Arkeoloji & Doğa Tarihi Müzesi",
          "description": "Arkeoloji & Doğa Tarihi Müzesi, Güzelyurt Arkeoloji & Portakal Kasabası güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk",
          "images": [
            "/images/routes/guzelyurt/güzelyurt-archaeology/1.jpg",
            "/images/routes/guzelyurt/güzelyurt-archaeology/2.jpg",
            "/images/routes/guzelyurt/güzelyurt-archaeology/3.jpg",
            "/images/routes/guzelyurt/güzelyurt-archaeology/4.jpg"
          ]
        },
        {
          "name": "St. Mamas Kilisesi & İkon Müzesi",
          "description": "St. Mamas Kilisesi & İkon Müzesi, Güzelyurt Arkeoloji & Portakal Kasabası güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk",
          "images": [
            "/images/routes/guzelyurt/st-mamas-church/1.jpg",
            "/images/routes/guzelyurt/st-mamas-church/2.jpg",
            "/images/routes/guzelyurt/st-mamas-church/3.jpg",
            "/images/routes/guzelyurt/st-mamas-church/4.jpg",
            "/images/routes/guzelyurt/st-mamas-church/5.jpg"
          ]
        },
        {
          "name": "Portakal Bahçeleri",
          "description": "Portakal Bahçeleri, Güzelyurt Arkeoloji & Portakal Kasabası güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Yakın Köyler",
          "description": "Yakın Köyler, Güzelyurt Arkeoloji & Portakal Kasabası güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Güzelyurt Town Center",
          "description": "Güzelyurt Town Center is an essential milestone along the Güzelyurt Archaeology & Citrus Capital. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "9:00",
          "driveTime": "0 min",
          "images": [
            "/images/routes/guzelyurt/güzelyurt-town-centre/1.jpg"
          ]
        },
        {
          "name": "Archaeology & Nature Museum",
          "description": "Archaeology & Nature Museum is an essential milestone along the Güzelyurt Archaeology & Citrus Capital. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min",
          "images": [
            "/images/routes/guzelyurt/güzelyurt-archaeology/1.jpg",
            "/images/routes/guzelyurt/güzelyurt-archaeology/2.jpg",
            "/images/routes/guzelyurt/güzelyurt-archaeology/3.jpg",
            "/images/routes/guzelyurt/güzelyurt-archaeology/4.jpg"
          ]
        },
        {
          "name": "St. Mamas Church & Icon Museum",
          "description": "St. Mamas Church & Icon Museum is an essential milestone along the Güzelyurt Archaeology & Citrus Capital. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min",
          "images": [
            "/images/routes/guzelyurt/st-mamas-church/1.jpg",
            "/images/routes/guzelyurt/st-mamas-church/2.jpg",
            "/images/routes/guzelyurt/st-mamas-church/3.jpg",
            "/images/routes/guzelyurt/st-mamas-church/4.jpg",
            "/images/routes/guzelyurt/st-mamas-church/5.jpg"
          ]
        },
        {
          "name": "Citrus & Orange Groves Trail",
          "description": "Citrus & Orange Groves Trail is an essential milestone along the Güzelyurt Archaeology & Citrus Capital. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Surrounding Countryside Villages",
          "description": "Surrounding Countryside Villages is an essential milestone along the Güzelyurt Archaeology & Citrus Capital. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "İlkbahar (Nisan–Haziran) & Sonbahar (Eylül–Kasım)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "Spring (April–June) & Autumn (September–November)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    }
  },
  {
    "id": "bati-lefke",
    "slug": "bati-lefke",
    "region": "bati",
    "themes": [
      "history",
      "nature",
      "food"
    ],
    "rating": 5,
    "distance": "35–65 km",
    "duration": {
      "tr": "Tam gün",
      "en": "Full day"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "Lefke Merkez",
      "en": "Lefke Town Center"
    },
    "heroImage": "/images/routes/guzelyurt-loop.jpg",
    "title": {
      "tr": "Lefke Narenciye & Osmanlı Su Kemerleri",
      "en": "Lefke Citrus Groves, Date Palms & Ottoman Aqueducts"
    },
    "subtitle": {
      "tr": "Portakal kokulu tarihi sokaklar, Osmanlı konakları, su kemerleri ve Piri Mehmet Paşa Camii. Kalabalıktan uzak otantik bir Kıbrıs.",
      "en": "Historic streets fragrant with orange blossoms, Ottoman town mansions, stone aqueducts, and Piri Mehmet Pasha Mosque. Authentic Cyprus at its purest."
    },
    "intro": {
      "tr": "Portakal kokulu tarihi sokaklar, Osmanlı konakları, su kemerleri ve Piri Mehmet Paşa Camii. Kalabalıktan uzak otantik bir Kıbrıs. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "Historic streets fragrant with orange blossoms, Ottoman town mansions, stone aqueducts, and Piri Mehmet Pasha Mosque. Authentic Cyprus at its purest. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Sabah erken, yerel çiftçiler taze portakal ve limon getirdiğinde uğrayın. İlkbaharda narenciye çiçeği kokusu tüm kasabayı sarar.",
      "en": "Visit in early morning or spring when citrus blossoms fill the entire valley with perfume. Traditional coffee houses welcome visitors warmly."
    },
    "proposers": [
      "A.A.",
      "V.R.",
      "E.A.",
      "A.K."
    ],
    "stops": {
      "tr": [
        {
          "name": "Lefke Merkez",
          "description": "Lefke Merkez, Lefke Narenciye & Osmanlı Su Kemerleri güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Piri Mehmet Paşa Camii",
          "description": "Piri Mehmet Paşa Camii, Lefke Narenciye & Osmanlı Su Kemerleri güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Osmanlı Su Kemeri",
          "description": "Osmanlı Su Kemeri, Lefke Narenciye & Osmanlı Su Kemerleri güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Narenciye Bahçeleri",
          "description": "Narenciye Bahçeleri, Lefke Narenciye & Osmanlı Su Kemerleri güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Yerel Kahvehaneler",
          "description": "Yerel Kahvehaneler, Lefke Narenciye & Osmanlı Su Kemerleri güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Citrus Pazarı",
          "description": "Citrus Pazarı, Lefke Narenciye & Osmanlı Su Kemerleri güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Lefke Historic Center",
          "description": "Lefke Historic Center is an essential milestone along the Lefke Citrus Groves, Date Palms & Ottoman Aqueducts. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Piri Mehmet Pasha Ottoman Mosque",
          "description": "Piri Mehmet Pasha Ottoman Mosque is an essential milestone along the Lefke Citrus Groves, Date Palms & Ottoman Aqueducts. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Historic Ottoman Aqueduct",
          "description": "Historic Ottoman Aqueduct is an essential milestone along the Lefke Citrus Groves, Date Palms & Ottoman Aqueducts. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Lefke Date & Citrus Orchards",
          "description": "Lefke Date & Citrus Orchards is an essential milestone along the Lefke Citrus Groves, Date Palms & Ottoman Aqueducts. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Traditional Village Coffeehouses",
          "description": "Traditional Village Coffeehouses is an essential milestone along the Lefke Citrus Groves, Date Palms & Ottoman Aqueducts. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Local Farmers Citrus Market",
          "description": "Local Farmers Citrus Market is an essential milestone along the Lefke Citrus Groves, Date Palms & Ottoman Aqueducts. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "İlkbahar (Nisan–Haziran) & Sonbahar (Eylül–Kasım)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "Spring (April–June) & Autumn (September–November)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    }
  },
  {
    "id": "bati-cmc",
    "slug": "bati-cmc",
    "region": "bati",
    "themes": [
      "history",
      "coast"
    ],
    "rating": 5,
    "distance": "35–65 km",
    "duration": {
      "tr": "Yarım gün",
      "en": "Half day"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "Eski CMC Yapıları",
      "en": "Gemikonağı Pier"
    },
    "heroImage": "/images/routes/guzelyurt-loop.jpg",
    "title": {
      "tr": "Gemikonağı Endüstri Hafızası & CMC Mirası",
      "en": "Gemikonağı Industrial Heritage & CMC Mining Relics"
    },
    "subtitle": {
      "tr": "Lefke'nin madencilik tarihini anlatan eski CMC yapıları, maden demiryolu ve Gemikonağı'nın kıyı manzarası. Çoğu ziyaretçinin bilmediği bir endüstri rotası.",
      "en": "Uncovering the 20th-century copper mining legacy of CMC, vintage narrow-gauge railway relics, and the coastal piers of Gemikonağı."
    },
    "intro": {
      "tr": "Lefke'nin madencilik tarihini anlatan eski CMC yapıları, maden demiryolu ve Gemikonağı'nın kıyı manzarası. Çoğu ziyaretçinin bilmediği bir endüstri rotası. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "Uncovering the 20th-century copper mining legacy of CMC, vintage narrow-gauge railway relics, and the coastal piers of Gemikonağı. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Gemikonağı'nın eski iskelesi fotoğraf için mükemmel; bu bölgenin Kıbrıs bakır madenciliğindeki tarihi rolünü çoğu kişi bilmez.",
      "en": "The rusted old shipping pier at Gemikonağı offers dramatic photography; few travelers know the crucial role this port played in ancient and modern copper trade."
    },
    "proposers": [
      "B.K.",
      "F.Y.",
      "A.A.",
      "M.M."
    ],
    "stops": {
      "tr": [
        {
          "name": "Eski CMC Yapıları",
          "description": "Eski CMC Yapıları, Gemikonağı Endüstri Hafızası & CMC Mirası güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Maden Demiryolu Alanı",
          "description": "Maden Demiryolu Alanı, Gemikonağı Endüstri Hafızası & CMC Mirası güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Cengiz Topel Anıtı",
          "description": "Cengiz Topel Anıtı, Gemikonağı Endüstri Hafızası & CMC Mirası güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Gemikonağı Limanı & İskele",
          "description": "Gemikonağı Limanı & İskele, Gemikonağı Endüstri Hafızası & CMC Mirası güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Sahil Yürüyüş Yolu",
          "description": "Sahil Yürüyüş Yolu, Gemikonağı Endüstri Hafızası & CMC Mirası güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Historic CMC Mining Structures",
          "description": "Historic CMC Mining Structures is an essential milestone along the Gemikonağı Industrial Heritage & CMC Mining Relics. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Vintage Mine Railway Yard",
          "description": "Vintage Mine Railway Yard is an essential milestone along the Gemikonağı Industrial Heritage & CMC Mining Relics. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Cengiz Topel Coastal Memorial",
          "description": "Cengiz Topel Coastal Memorial is an essential milestone along the Gemikonağı Industrial Heritage & CMC Mining Relics. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Gemikonağı Port & Historic Pier",
          "description": "Gemikonağı Port & Historic Pier is an essential milestone along the Gemikonağı Industrial Heritage & CMC Mining Relics. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Gemikonağı Sea Promenade",
          "description": "Gemikonağı Sea Promenade is an essential milestone along the Gemikonağı Industrial Heritage & CMC Mining Relics. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "İlkbahar (Nisan–Haziran) & Sonbahar (Eylül–Kasım)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "Spring (April–June) & Autumn (September–November)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    }
  },
  {
    "id": "bati-yesilirmak",
    "slug": "bati-yesilirmak",
    "region": "bati",
    "themes": [
      "nature",
      "food",
      "coast"
    ],
    "rating": 5,
    "distance": "35–65 km",
    "duration": {
      "tr": "Tam gün",
      "en": "Full day"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "Soli Antik Kenti",
      "en": "Yeşilırmak Village"
    },
    "heroImage": "/images/routes/guzelyurt-loop.jpg",
    "title": {
      "tr": "Yeşilırmak Çilek Bahçeleri & Batı Kıyısı",
      "en": "Yeşilırmak Strawberry Terraces & Far West Shore"
    },
    "subtitle": {
      "tr": "Soli ve Vouni'den başlayıp Lefke ve Yeşilırmak'ta yerel molalarla ilerleyen, çilek sezonunda bahçe ziyareti ve Yedidalga plajıyla biten batı rotası.",
      "en": "From Soli and Vouni to local stops in Lefke and the lush strawberry fields of Yeşilırmak, finishing with a swim at Yedidalga beach."
    },
    "intro": {
      "tr": "Soli ve Vouni'den başlayıp Lefke ve Yeşilırmak'ta yerel molalarla ilerleyen, çilek sezonunda bahçe ziyareti ve Yedidalga plajıyla biten batı rotası. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "From Soli and Vouni to local stops in Lefke and the lush strawberry fields of Yeşilırmak, finishing with a swim at Yedidalga beach. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Çilek sezonu (ilkbahar) için zamanlayın; Yeşilırmak'ın dev çilek heykeli ve yerel çilek ürünleri sezonun simgesi.",
      "en": "Time your trip for strawberry season in spring; pick your own sweet strawberries and pose beside the famous giant strawberry monument."
    },
    "proposers": [
      "B.S.",
      "E.A.",
      "S.A."
    ],
    "stops": {
      "tr": [
        {
          "name": "Soli Antik Kenti",
          "description": "Soli Antik Kenti, Yeşilırmak Çilek Bahçeleri & Batı Kıyısı güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk",
          "images": [
            "/images/routes/guzelyurt/soli-ancient-city/1.jpg",
            "/images/routes/guzelyurt/soli-ancient-city/2.jpg",
            "/images/routes/guzelyurt/soli-ancient-city/3.jpg",
            "/images/routes/guzelyurt/soli-ancient-city/4.jpg"
          ]
        },
        {
          "name": "Vouni Sarayı",
          "description": "Vouni Sarayı, Yeşilırmak Çilek Bahçeleri & Batı Kıyısı güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk",
          "images": [
            "/images/routes/guzelyurt/vouni-palace/1.jpg",
            "/images/routes/guzelyurt/vouni-palace/2.jpg",
            "/images/routes/guzelyurt/vouni-palace/3.jpg",
            "/images/routes/guzelyurt/vouni-palace/4.jpg",
            "/images/routes/guzelyurt/vouni-palace/5.jpg"
          ]
        },
        {
          "name": "Lefke Yerel Durak",
          "description": "Lefke Yerel Durak, Yeşilırmak Çilek Bahçeleri & Batı Kıyısı güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Yeşilırmak Çilek Bahçeleri",
          "description": "Yeşilırmak Çilek Bahçeleri, Yeşilırmak Çilek Bahçeleri & Batı Kıyısı güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Dev Çilek Heykeli",
          "description": "Dev Çilek Heykeli, Yeşilırmak Çilek Bahçeleri & Batı Kıyısı güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Yedidalga Plajı",
          "description": "Yedidalga Plajı, Yeşilırmak Çilek Bahçeleri & Batı Kıyısı güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Ancient Soli",
          "description": "Ancient Soli is an essential milestone along the Yeşilırmak Strawberry Terraces & Far West Shore. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "9:00",
          "driveTime": "0 min",
          "images": [
            "/images/routes/guzelyurt/soli-ancient-city/1.jpg",
            "/images/routes/guzelyurt/soli-ancient-city/2.jpg",
            "/images/routes/guzelyurt/soli-ancient-city/3.jpg",
            "/images/routes/guzelyurt/soli-ancient-city/4.jpg"
          ]
        },
        {
          "name": "Vouni Palace",
          "description": "Vouni Palace is an essential milestone along the Yeşilırmak Strawberry Terraces & Far West Shore. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min",
          "images": [
            "/images/routes/guzelyurt/vouni-palace/1.jpg",
            "/images/routes/guzelyurt/vouni-palace/2.jpg",
            "/images/routes/guzelyurt/vouni-palace/3.jpg",
            "/images/routes/guzelyurt/vouni-palace/4.jpg",
            "/images/routes/guzelyurt/vouni-palace/5.jpg"
          ]
        },
        {
          "name": "Lefke Village Rest Stop",
          "description": "Lefke Village Rest Stop is an essential milestone along the Yeşilırmak Strawberry Terraces & Far West Shore. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Yeşilırmak Strawberry Fields",
          "description": "Yeşilırmak Strawberry Fields is an essential milestone along the Yeşilırmak Strawberry Terraces & Far West Shore. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Giant Strawberry Monument",
          "description": "Giant Strawberry Monument is an essential milestone along the Yeşilırmak Strawberry Terraces & Far West Shore. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Yedidalga Seaside Fish Tavern Beach",
          "description": "Yedidalga Seaside Fish Tavern Beach is an essential milestone along the Yeşilırmak Strawberry Terraces & Far West Shore. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "İlkbahar (Nisan–Haziran) & Sonbahar (Eylül–Kasım)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "Spring (April–June) & Autumn (September–November)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    }
  },
  {
    "id": "bati-kormakitis",
    "slug": "bati-kormakitis",
    "region": "bati",
    "themes": [
      "coast",
      "nature",
      "scenic"
    ],
    "rating": 5,
    "distance": "35–65 km",
    "duration": {
      "tr": "Yarım–tam gün",
      "en": "Half to full day"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "Kormakitis Burnu Kıyısı",
      "en": "Sadrazamköy & Kyrenia Pier"
    },
    "heroImage": "/images/routes/guzelyurt-loop.jpg",
    "title": {
      "tr": "Kormakitis Burnu & Blue Lagoon Tekne Turu",
      "en": "Cape Kormakitis & Blue Lagoon Snorkel Cruise"
    },
    "subtitle": {
      "tr": "Girne'nin batısında kıyı boyunca tekne turu: Kormakitis Burnu, Blue Lagoon'da yüzme, şnorkelli resif keşfi ve sakin Sadrazamköy sahili.",
      "en": "A scenic coastal cruise along the wild western cape: Cape Kormakitis, snorkeling the pristine Blue Lagoon reefs, and peaceful Sadrazamköy beaches."
    },
    "intro": {
      "tr": "Girne'nin batısında kıyı boyunca tekne turu: Kormakitis Burnu, Blue Lagoon'da yüzme, şnorkelli resif keşfi ve sakin Sadrazamköy sahili. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "A scenic coastal cruise along the wild western cape: Cape Kormakitis, snorkeling the pristine Blue Lagoon reefs, and peaceful Sadrazamköy beaches. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Blue Lagoon'un berrak suyu şnorkel için ideal; tekne turları genelde Girne limanından kalkar, sabah slotunu tercih edin.",
      "en": "The crystalline waters of the Blue Lagoon are fantastic for snorkeling; boats usually depart from Kyrenia harbour, so book a morning slot."
    },
    "proposers": [
      "A.M.",
      "J.A."
    ],
    "stops": {
      "tr": [
        {
          "name": "Kormakitis Burnu Kıyısı",
          "description": "Kormakitis Burnu Kıyısı, Kormakitis Burnu & Blue Lagoon Tekne Turu güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Blue Lagoon Yüzme Durağı",
          "description": "Blue Lagoon Yüzme Durağı, Kormakitis Burnu & Blue Lagoon Tekne Turu güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Şnorkel Resif Alanı",
          "description": "Şnorkel Resif Alanı, Kormakitis Burnu & Blue Lagoon Tekne Turu güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Sadrazamköy Sahili",
          "description": "Sadrazamköy Sahili, Kormakitis Burnu & Blue Lagoon Tekne Turu güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Kyrenia Limanı Dönüş",
          "description": "Kyrenia Limanı Dönüş, Kormakitis Burnu & Blue Lagoon Tekne Turu güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Cape Kormakitis Dramatic Shore",
          "description": "Cape Kormakitis Dramatic Shore is an essential milestone along the Cape Kormakitis & Blue Lagoon Snorkel Cruise. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Blue Lagoon Snorkeling Bay",
          "description": "Blue Lagoon Snorkeling Bay is an essential milestone along the Cape Kormakitis & Blue Lagoon Snorkel Cruise. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Crystal Reef Diving Spot",
          "description": "Crystal Reef Diving Spot is an essential milestone along the Cape Kormakitis & Blue Lagoon Snorkel Cruise. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Sadrazamköy Peaceful Beach",
          "description": "Sadrazamköy Peaceful Beach is an essential milestone along the Cape Kormakitis & Blue Lagoon Snorkel Cruise. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Kyrenia Pier Return",
          "description": "Kyrenia Pier Return is an essential milestone along the Cape Kormakitis & Blue Lagoon Snorkel Cruise. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "İlkbahar (Nisan–Haziran) & Sonbahar (Eylül–Kasım)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "Spring (April–June) & Autumn (September–November)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    }
  },
  {
    "id": "bati-maronit",
    "slug": "bati-maronit",
    "region": "bati",
    "themes": [
      "history",
      "food",
      "coast"
    ],
    "rating": 5,
    "distance": "35–65 km",
    "duration": {
      "tr": "Yarım–tam gün",
      "en": "Half to full day"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "Koruçam Köy Meydanı",
      "en": "Koruçam Village Square"
    },
    "heroImage": "/images/routes/guzelyurt-loop.jpg",
    "title": {
      "tr": "Koruçam Maronit Kültürü & Kormakitis Burnu",
      "en": "Koruçam Maronite Culture, Cuisine & Western Coast"
    },
    "subtitle": {
      "tr": "Kendine özgü Maronit köyü, dini mirası, geleneksel yemek kültürü ve batının uzak kıyısı. Postkarta hiç girmemiş bir Kıbrıs.",
      "en": "Experience the unique Maronite village of Koruçam: centuries-old Arabic-dialect heritage, stone cathedral, and famous hospitable tavern dining."
    },
    "intro": {
      "tr": "Kendine özgü Maronit köyü, dini mirası, geleneksel yemek kültürü ve batının uzak kıyısı. Postkarta hiç girmemiş bir Kıbrıs. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "Experience the unique Maronite village of Koruçam: centuries-old Arabic-dialect heritage, stone cathedral, and famous hospitable tavern dining. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Köyde yabancılara el sallanır ve içemeyeceğiniz kadar kahve ikram edilir — acele etmeyin, bu rotanın ruhu yavaşlıkta.",
      "en": "Locals in the village square will greet you with genuine warmth and Turkish coffee — take your time, the beauty of this route is in its slow pace."
    },
    "proposers": [
      "C.A.",
      "F.Y.",
      "O.O.",
      "R.J."
    ],
    "stops": {
      "tr": [
        {
          "name": "Koruçam Köy Meydanı",
          "description": "Koruçam Köy Meydanı, Koruçam Maronit Kültürü & Kormakitis Burnu güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "St. George Maronit Katedrali",
          "description": "St. George Maronit Katedrali, Koruçam Maronit Kültürü & Kormakitis Burnu güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Geleneksel Maronit Yemek Durağı",
          "description": "Geleneksel Maronit Yemek Durağı, Koruçam Maronit Kültürü & Kormakitis Burnu güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Koruçam Sahili",
          "description": "Koruçam Sahili, Koruçam Maronit Kültürü & Kormakitis Burnu güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Kormakitis Burnu",
          "description": "Kormakitis Burnu, Koruçam Maronit Kültürü & Kormakitis Burnu güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Koruçam Village Square",
          "description": "Koruçam Village Square is an essential milestone along the Koruçam Maronite Culture, Cuisine & Western Coast. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "St. George Maronite Cathedral",
          "description": "St. George Maronite Cathedral is an essential milestone along the Koruçam Maronite Culture, Cuisine & Western Coast. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Traditional Maronite Tavern Lunch",
          "description": "Traditional Maronite Tavern Lunch is an essential milestone along the Koruçam Maronite Culture, Cuisine & Western Coast. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Koruçam Coastal Shore",
          "description": "Koruçam Coastal Shore is an essential milestone along the Koruçam Maronite Culture, Cuisine & Western Coast. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Cape Kormakitis Lighthouse Edge",
          "description": "Cape Kormakitis Lighthouse Edge is an essential milestone along the Koruçam Maronite Culture, Cuisine & Western Coast. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "İlkbahar (Nisan–Haziran) & Sonbahar (Eylül–Kasım)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "Spring (April–June) & Autumn (September–November)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    }
  },
  {
    "id": "bati-eul",
    "slug": "bati-eul",
    "region": "bati",
    "themes": [
      "coast",
      "food",
      "scenic"
    ],
    "rating": 5,
    "distance": "35–65 km",
    "duration": {
      "tr": "Yarım gün",
      "en": "Half day"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "LAÜ Kampüsü",
      "en": "EUL Campus & Aphrodite Coast"
    },
    "heroImage": "/images/routes/guzelyurt-loop.jpg",
    "title": {
      "tr": "Lefke Üniversite Çevresi & Aphrodite Sahili",
      "en": "Lefke Campus Vibes & Aphrodite Beachfront"
    },
    "subtitle": {
      "tr": "Lefke Avrupa Üniversitesi çevresinden başlayıp sahil restoranları ve gün batımı noktalarıyla ilerleyen, akademik enerjiyle kıyı huzurunu birleştiren rahat bir rota.",
      "en": "Starting from European University of Lefke, strolling through town, and concluding at seaside restaurants for western sunset views."
    },
    "intro": {
      "tr": "Lefke Avrupa Üniversitesi çevresinden başlayıp sahil restoranları ve gün batımı noktalarıyla ilerleyen, akademik enerjiyle kıyı huzurunu birleştiren rahat bir rota. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "Starting from European University of Lefke, strolling through town, and concluding at seaside restaurants for western sunset views. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Aphrodite sahilindeki restoranlar gün batımına karşı konumlanmış; akşam yemeği için bu saati kollayın.",
      "en": "The beachfront restaurants around Aphrodite beach are oriented directly towards sunset; plan your dinner reservation for dusk."
    },
    "proposers": [
      "V.R."
    ],
    "stops": {
      "tr": [
        {
          "name": "LAÜ Kampüsü",
          "description": "LAÜ Kampüsü, Lefke Üniversite Çevresi & Aphrodite Sahili güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Lefke Merkez",
          "description": "Lefke Merkez, Lefke Üniversite Çevresi & Aphrodite Sahili güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Aphrodite Sahil Restoranı",
          "description": "Aphrodite Sahil Restoranı, Lefke Üniversite Çevresi & Aphrodite Sahili güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Sahil Yürüyüşü",
          "description": "Sahil Yürüyüşü, Lefke Üniversite Çevresi & Aphrodite Sahili güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Gün Batımı Noktası",
          "description": "Gün Batımı Noktası, Lefke Üniversite Çevresi & Aphrodite Sahili güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "EUL University Campus",
          "description": "EUL University Campus is an essential milestone along the Lefke Campus Vibes & Aphrodite Beachfront. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Lefke Historic Center",
          "description": "Lefke Historic Center is an essential milestone along the Lefke Campus Vibes & Aphrodite Beachfront. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Aphrodite Beachfront Restaurant",
          "description": "Aphrodite Beachfront Restaurant is an essential milestone along the Lefke Campus Vibes & Aphrodite Beachfront. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Sunset Sea Walkway",
          "description": "Sunset Sea Walkway is an essential milestone along the Lefke Campus Vibes & Aphrodite Beachfront. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Western Horizon Sunset Point",
          "description": "Western Horizon Sunset Point is an essential milestone along the Lefke Campus Vibes & Aphrodite Beachfront. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "İlkbahar (Nisan–Haziran) & Sonbahar (Eylül–Kasım)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "Spring (April–June) & Autumn (September–November)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    }
  },
  {
    "id": "dag-buffavento",
    "slug": "dag-buffavento",
    "region": "daglar",
    "themes": [
      "nature",
      "history",
      "scenic"
    ],
    "rating": 5,
    "distance": "35–65 km",
    "duration": {
      "tr": "Tam gün",
      "en": "Full day"
    },
    "difficulty": {
      "tr": "Zor (tırmanış)",
      "en": "Challenging (climb)"
    },
    "startFinish": {
      "tr": "Buffavento Kalesi",
      "en": "Alevkaya Forest Gateway"
    },
    "heroImage": "/images/hero-bg.jpg",
    "title": {
      "tr": "Buffavento & Unutulmuş Manastırlar",
      "en": "Buffavento Castle & Lost Mountain Monasteries"
    },
    "subtitle": {
      "tr": "Kuzey kıyısının üzerinde saklı dramatik dağ rotası: Buffavento Kalesi, orman manzaraları, Sourp Magar Ermeni Manastırı ve Antiphonitis Kilisesi.",
      "en": "A dramatic mountain adventure perched high in the clouds: Buffavento Fortress, pine trails, Armenian monastery Sourp Magar, and Antiphonitis."
    },
    "intro": {
      "tr": "Kuzey kıyısının üzerinde saklı dramatik dağ rotası: Buffavento Kalesi, orman manzaraları, Sourp Magar Ermeni Manastırı ve Antiphonitis Kilisesi. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "A dramatic mountain adventure perched high in the clouds: Buffavento Fortress, pine trails, Armenian monastery Sourp Magar, and Antiphonitis. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Buffavento 'rüzgarların meydan okuyanı' demek; zirveye 30–40 dakikalık tırmanışta gölge yok, sabah serinde çıkın. Ödül 360 derece manzara.",
      "en": "Buffavento means \"Defier of the Winds\" — the 30–40 minute uphill hike has no shade, so climb early in the morning for rewarding 360-degree views."
    },
    "proposers": [
      "U.S.",
      "C.A.",
      "A.S.",
      "S.A."
    ],
    "stops": {
      "tr": [
        {
          "name": "Buffavento Kalesi",
          "description": "Buffavento Kalesi, Buffavento & Unutulmuş Manastırlar güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Alevkaya Piknik Alanı",
          "description": "Alevkaya Piknik Alanı, Buffavento & Unutulmuş Manastırlar güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Sourp Magar Ermeni Manastırı",
          "description": "Sourp Magar Ermeni Manastırı, Buffavento & Unutulmuş Manastırlar güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Antiphonitis Kilisesi",
          "description": "Antiphonitis Kilisesi, Buffavento & Unutulmuş Manastırlar güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Esentepe Dağ Seyir Noktası",
          "description": "Esentepe Dağ Seyir Noktası, Buffavento & Unutulmuş Manastırlar güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Buffavento Mountain Fortress",
          "description": "Buffavento Mountain Fortress is an essential milestone along the Buffavento Castle & Lost Mountain Monasteries. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Alevkaya Forest Picnic Grounds",
          "description": "Alevkaya Forest Picnic Grounds is an essential milestone along the Buffavento Castle & Lost Mountain Monasteries. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Sourp Magar Armenian Monastery",
          "description": "Sourp Magar Armenian Monastery is an essential milestone along the Buffavento Castle & Lost Mountain Monasteries. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Antiphonitis Byzantine Church",
          "description": "Antiphonitis Byzantine Church is an essential milestone along the Buffavento Castle & Lost Mountain Monasteries. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Esentepe Mountain Ridge Lookout",
          "description": "Esentepe Mountain Ridge Lookout is an essential milestone along the Buffavento Castle & Lost Mountain Monasteries. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "İlkbahar (Nisan–Haziran) & Sonbahar (Eylül–Kasım)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "Spring (April–June) & Autumn (September–November)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    }
  },
  {
    "id": "dag-ridge",
    "slug": "dag-ridge",
    "region": "daglar",
    "themes": [
      "nature",
      "scenic"
    ],
    "rating": 5,
    "distance": "35–65 km",
    "duration": {
      "tr": "Yarım–tam gün",
      "en": "Half to full day"
    },
    "difficulty": {
      "tr": "Orta",
      "en": "Moderate"
    },
    "startFinish": {
      "tr": "Değirmenlik Orman Girişi",
      "en": "Değirmenlik Forest Gateway"
    },
    "heroImage": "/images/hero-bg.jpg",
    "title": {
      "tr": "Beşparmak Sırtı & Orman Kaçamağı",
      "en": "Beşparmak Mountain Ridge & Forest Scenic Drive"
    },
    "subtitle": {
      "tr": "Değirmenlik orman girişinden başlayıp Beşparmak sırt yolu boyunca panoramik manzaralarla ilerleyen, piknik ve köy kafesi molalı bir dağ rotası.",
      "en": "Beginning at Değirmenlik forest gateway, winding along the panoramic high crest of the Beşparmak mountains with picnics and mountain cafes."
    },
    "intro": {
      "tr": "Değirmenlik orman girişinden başlayıp Beşparmak sırt yolu boyunca panoramik manzaralarla ilerleyen, piknik ve köy kafesi molalı bir dağ rotası. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "Beginning at Değirmenlik forest gateway, winding along the panoramic high crest of the Beşparmak mountains with picnics and mountain cafes. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "İlkbahar (Mart–Nisan) yaban çiçekleri ve orkidelerin dağ yamaçlarını kapladığı en iyi dönem.",
      "en": "Spring (March–April) is the prime window when rare wild orchids and alpine wildflowers carpet the mountain slopes."
    },
    "proposers": [
      "A.T.",
      "D.O.",
      "A.M.",
      "J.A."
    ],
    "stops": {
      "tr": [
        {
          "name": "Değirmenlik Orman Girişi",
          "description": "Değirmenlik Orman Girişi, Beşparmak Sırtı & Orman Kaçamağı güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Beşparmak Sırt Yolu",
          "description": "Beşparmak Sırt Yolu, Beşparmak Sırtı & Orman Kaçamağı güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Panoramik Seyir Noktası",
          "description": "Panoramik Seyir Noktası, Beşparmak Sırtı & Orman Kaçamağı güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Orman Piknik Alanı",
          "description": "Orman Piknik Alanı, Beşparmak Sırtı & Orman Kaçamağı güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Herbaryum (Alevkaya)",
          "description": "Herbaryum (Alevkaya), Beşparmak Sırtı & Orman Kaçamağı güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Köy Kafesi",
          "description": "Köy Kafesi, Beşparmak Sırtı & Orman Kaçamağı güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Değirmenlik Forest Trailhead",
          "description": "Değirmenlik Forest Trailhead is an essential milestone along the Beşparmak Mountain Ridge & Forest Scenic Drive. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Beşparmak Crest Mountain Road",
          "description": "Beşparmak Crest Mountain Road is an essential milestone along the Beşparmak Mountain Ridge & Forest Scenic Drive. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Dual-Sea High Viewpoint",
          "description": "Dual-Sea High Viewpoint is an essential milestone along the Beşparmak Mountain Ridge & Forest Scenic Drive. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Pine Forest Picnic Glade",
          "description": "Pine Forest Picnic Glade is an essential milestone along the Beşparmak Mountain Ridge & Forest Scenic Drive. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Alevkaya Herbarium & Botanical Station",
          "description": "Alevkaya Herbarium & Botanical Station is an essential milestone along the Beşparmak Mountain Ridge & Forest Scenic Drive. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Traditional Mountain Village Cafe",
          "description": "Traditional Mountain Village Cafe is an essential milestone along the Beşparmak Mountain Ridge & Forest Scenic Drive. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "İlkbahar (Nisan–Haziran) & Sonbahar (Eylül–Kasım)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "Spring (April–June) & Autumn (September–November)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    }
  },
  {
    "id": "dag-dam",
    "slug": "dag-dam",
    "region": "daglar",
    "themes": [
      "nature",
      "scenic"
    ],
    "rating": 5,
    "distance": "35–65 km",
    "duration": {
      "tr": "Yarım gün",
      "en": "Half day"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "Geçitköy Barajı",
      "en": "Geçitköy Dam"
    },
    "heroImage": "/images/hero-bg.jpg",
    "title": {
      "tr": "Geçitköy Barajı & Çam Ormanı",
      "en": "Geçitköy Turquoise Dam & Pine Forest Escape"
    },
    "subtitle": {
      "tr": "Geçitköy Barajı'nın sessiz suları, çam ormanları, taş evli köyler ve manzara noktalarını birleştiren sakin bir kırsal rota. Değirmenlik köyleriyle birleştirilebilir.",
      "en": "The turquoise mirror waters of Geçitköy Dam, fragrant pine forests, stone villages, and panoramic scenic lookouts."
    },
    "intro": {
      "tr": "Geçitköy Barajı'nın sessiz suları, çam ormanları, taş evli köyler ve manzara noktalarını birleştiren sakin bir kırsal rota. Değirmenlik köyleriyle birleştirilebilir. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "The turquoise mirror waters of Geçitköy Dam, fragrant pine forests, stone villages, and panoramic scenic lookouts. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Doğa yürüyüşü ve piknik için ideal; hafta içi neredeyse tamamen sizindir. Değirmenlik ve Gönyeli köyleriyle birleştirilebilir.",
      "en": "Perfect for tranquil nature walks and picnics; on weekdays you will have the reservoir and forest trails virtually to yourself."
    },
    "proposers": [
      "A.M.",
      "J.A."
    ],
    "stops": {
      "tr": [
        {
          "name": "Geçitköy Barajı",
          "description": "Geçitköy Barajı, Geçitköy Barajı & Çam Ormanı güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Çam Ormanı Patikası",
          "description": "Çam Ormanı Patikası, Geçitköy Barajı & Çam Ormanı güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Geçitköy Köyü (Taş Evler)",
          "description": "Geçitköy Köyü (Taş Evler), Geçitköy Barajı & Çam Ormanı güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Piknik Alanı",
          "description": "Piknik Alanı, Geçitköy Barajı & Çam Ormanı güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Panoramik Baraj Manzarası",
          "description": "Panoramik Baraj Manzarası, Geçitköy Barajı & Çam Ormanı güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Geçitköy Reservoir Dam",
          "description": "Geçitköy Reservoir Dam is an essential milestone along the Geçitköy Turquoise Dam & Pine Forest Escape. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Pine Forest Nature Trail",
          "description": "Pine Forest Nature Trail is an essential milestone along the Geçitköy Turquoise Dam & Pine Forest Escape. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Geçitköy Stone Village",
          "description": "Geçitköy Stone Village is an essential milestone along the Geçitköy Turquoise Dam & Pine Forest Escape. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Lakeside Picnic Area",
          "description": "Lakeside Picnic Area is an essential milestone along the Geçitköy Turquoise Dam & Pine Forest Escape. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Panoramic Dam Lookout",
          "description": "Panoramic Dam Lookout is an essential milestone along the Geçitköy Turquoise Dam & Pine Forest Escape. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "İlkbahar (Nisan–Haziran) & Sonbahar (Eylül–Kasım)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "Spring (April–June) & Autumn (September–November)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    }
  },
  {
    "id": "dag-olive",
    "slug": "dag-olive",
    "region": "daglar",
    "themes": [
      "nature",
      "scenic"
    ],
    "rating": 5,
    "distance": "35–65 km",
    "duration": {
      "tr": "Yarım gün",
      "en": "Half day"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "Anıtsal Zeytinlik",
      "en": "Kalkanlı Village"
    },
    "heroImage": "/images/hero-bg.jpg",
    "title": {
      "tr": "Kalkanlı Anıtsal Zeytinlikler & ODTÜ",
      "en": "Kalkanlı Monumental Olive Trees & Nature Valley"
    },
    "subtitle": {
      "tr": "Yüzlerce yaşında anıtsal zeytin ağaçları, vadi manzaraları, Çoban Mağarası ve ODTÜ kampüsünün huzurlu çevresi. Fotoğrafçılar için özel.",
      "en": "Ancient monumental olive trees hundreds of years old, valley vistas, Shepherd’s Cave, and the serene surroundings of the METU campus."
    },
    "intro": {
      "tr": "Yüzlerce yaşında anıtsal zeytin ağaçları, vadi manzaraları, Çoban Mağarası ve ODTÜ kampüsünün huzurlu çevresi. Fotoğrafçılar için özel. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "Ancient monumental olive trees hundreds of years old, valley vistas, Shepherd’s Cave, and the serene surroundings of the METU campus. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Zeytin ağaçlarının bazıları binlerce yıllık; en iyi ışık için sabah erken ya da gün batımına yakın gidin.",
      "en": "Some of these monumental olive trees are over 800 years old; early morning or late afternoon light creates striking silhouettes for photography."
    },
    "proposers": [
      "A.M."
    ],
    "stops": {
      "tr": [
        {
          "name": "Anıtsal Zeytinlik",
          "description": "Anıtsal Zeytinlik, Kalkanlı Anıtsal Zeytinlikler & ODTÜ güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Çoban Mağarası",
          "description": "Çoban Mağarası, Kalkanlı Anıtsal Zeytinlikler & ODTÜ güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Kalkanlı Vadi Manzarası",
          "description": "Kalkanlı Vadi Manzarası, Kalkanlı Anıtsal Zeytinlikler & ODTÜ güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "ODTÜ Kampüs Alanı",
          "description": "ODTÜ Kampüs Alanı, Kalkanlı Anıtsal Zeytinlikler & ODTÜ güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Anı Ağaçları Dinlenme Noktası",
          "description": "Anı Ağaçları Dinlenme Noktası, Kalkanlı Anıtsal Zeytinlikler & ODTÜ güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Monumental Olive Grove Sanctuary",
          "description": "Monumental Olive Grove Sanctuary is an essential milestone along the Kalkanlı Monumental Olive Trees & Nature Valley. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Shepherd’s Cave",
          "description": "Shepherd’s Cave is an essential milestone along the Kalkanlı Monumental Olive Trees & Nature Valley. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Kalkanlı Valley Viewpoint",
          "description": "Kalkanlı Valley Viewpoint is an essential milestone along the Kalkanlı Monumental Olive Trees & Nature Valley. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "METU NCC Green Grounds",
          "description": "METU NCC Green Grounds is an essential milestone along the Kalkanlı Monumental Olive Trees & Nature Valley. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Heritage Trees Rest Spot",
          "description": "Heritage Trees Rest Spot is an essential milestone along the Kalkanlı Monumental Olive Trees & Nature Valley. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "İlkbahar (Nisan–Haziran) & Sonbahar (Eylül–Kasım)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "Spring (April–June) & Autumn (September–November)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    }
  },
  {
    "id": "dag-beylerbeyi",
    "slug": "dag-beylerbeyi",
    "region": "daglar",
    "themes": [
      "history",
      "food",
      "nature"
    ],
    "rating": 5,
    "distance": "35–65 km",
    "duration": {
      "tr": "Yarım gün",
      "en": "Half day"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "Beylerbeyi Köy Meydanı",
      "en": "Beylerbeyi Village Square"
    },
    "heroImage": "/images/hero-bg.jpg",
    "title": {
      "tr": "Beylerbeyi Zanaat & Zeytinlik Turu",
      "en": "Beylerbeyi Artisan Pottery & Village Olive Groves"
    },
    "subtitle": {
      "tr": "Beylerbeyi'nin çömlek atölyeleri, zeytinlikleri ve sade köy hayatını keşfeden, yerel lezzetlerle biten bir kültür-doğa rotası.",
      "en": "Discover working ceramic studios, olive groves, and classic village life in Beylerbeyi (Bellapais), ending with traditional lunch."
    },
    "intro": {
      "tr": "Beylerbeyi'nin çömlek atölyeleri, zeytinlikleri ve sade köy hayatını keşfeden, yerel lezzetlerle biten bir kültür-doğa rotası. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "Discover working ceramic studios, olive groves, and classic village life in Beylerbeyi (Bellapais), ending with traditional lunch. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Çömlek atölyesinde ustaların çalışmasını izleyebilir, hatta kendi parçanızı yapabilirsiniz — çocuklu aileler için ideal.",
      "en": "You can watch master potters at work in the local workshop and even sculpt your own souvenir clay piece — wonderful for families."
    },
    "proposers": [
      "A.M."
    ],
    "stops": {
      "tr": [
        {
          "name": "Beylerbeyi Köy Meydanı",
          "description": "Beylerbeyi Köy Meydanı, Beylerbeyi Zanaat & Zeytinlik Turu güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Çalışan Çömlek Atölyesi",
          "description": "Çalışan Çömlek Atölyesi, Beylerbeyi Zanaat & Zeytinlik Turu güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Zeytinlikler",
          "description": "Zeytinlikler, Beylerbeyi Zanaat & Zeytinlik Turu güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Köy Öğle Yemeği Durağı",
          "description": "Köy Öğle Yemeği Durağı, Beylerbeyi Zanaat & Zeytinlik Turu güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Beylerbeyi Village Square",
          "description": "Beylerbeyi Village Square is an essential milestone along the Beylerbeyi Artisan Pottery & Village Olive Groves. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Working Artisan Pottery Studio",
          "description": "Working Artisan Pottery Studio is an essential milestone along the Beylerbeyi Artisan Pottery & Village Olive Groves. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Ancient Village Olive Groves",
          "description": "Ancient Village Olive Groves is an essential milestone along the Beylerbeyi Artisan Pottery & Village Olive Groves. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Village Meze Tavern Lunch",
          "description": "Village Meze Tavern Lunch is an essential milestone along the Beylerbeyi Artisan Pottery & Village Olive Groves. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "İlkbahar (Nisan–Haziran) & Sonbahar (Eylül–Kasım)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "Spring (April–June) & Autumn (September–November)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    }
  },
  {
    "id": "dag-villages",
    "slug": "dag-villages",
    "region": "daglar",
    "themes": [
      "history",
      "food"
    ],
    "rating": 5,
    "distance": "35–65 km",
    "duration": {
      "tr": "Tam gün",
      "en": "Full day"
    },
    "difficulty": {
      "tr": "Kolay",
      "en": "Easy"
    },
    "startFinish": {
      "tr": "Karmi Köyü",
      "en": "Karmi (Karaman)"
    },
    "heroImage": "/images/hero-bg.jpg",
    "title": {
      "tr": "Gizli Köyler & Otantik Yerel Hayat",
      "en": "Secret Mountain Villages & Timeless Island Life"
    },
    "subtitle": {
      "tr": "Kale yok, kalabalık yok — sadece zeytinlikler, taş kiliseler ve haftanın en büyük olayının hâlâ pazar günü olduğu köyler. Karmi'den Koruçam'a.",
      "en": "No tourist rush — only olive groves, stone chapels, and mountain villages where life moves at the gentle pace of traditional Sunday markets."
    },
    "intro": {
      "tr": "Kale yok, kalabalık yok — sadece zeytinlikler, taş kiliseler ve haftanın en büyük olayının hâlâ pazar günü olduğu köyler. Karmi'den Koruçam'a. Bu rota, bölgenin en seçkin duraklarını, doğal güzelliklerini ve yerel lezzetlerini bir araya getirerek keyifli ve akıcı bir keşif deneyimi sunar.",
      "en": "No tourist rush — only olive groves, stone chapels, and mountain villages where life moves at the gentle pace of traditional Sunday markets. Crafted by locals, this itinerary connects the most captivating viewpoints, historical milestones, and scenic highlights for an unforgettable journey."
    },
    "insiderTip": {
      "tr": "Rota planlı değil, keşif için — bir köyde durup kahve içmek, yabancılarla sohbet etmek bu rotanın asıl amacı.",
      "en": "This itinerary is built for serendipitous discovery — stopping for a Turkish coffee and chatting with village elders is the true soul of this route."
    },
    "proposers": [
      "O.O.",
      "R.J."
    ],
    "stops": {
      "tr": [
        {
          "name": "Karmi Köyü",
          "description": "Karmi Köyü, Gizli Köyler & Otantik Yerel Hayat güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "9:00",
          "driveTime": "0 dk"
        },
        {
          "name": "Ozanköy",
          "description": "Ozanköy, Gizli Köyler & Otantik Yerel Hayat güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Çatalköy",
          "description": "Çatalköy, Gizli Köyler & Otantik Yerel Hayat güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Tepebaşı (Lale Köyü)",
          "description": "Tepebaşı (Lale Köyü), Gizli Köyler & Otantik Yerel Hayat güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Sadrazamköy",
          "description": "Sadrazamköy, Gizli Köyler & Otantik Yerel Hayat güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 dk"
        },
        {
          "name": "Koruçam",
          "description": "Koruçam, Gizli Köyler & Otantik Yerel Hayat güzergahının en karakteristik duraklarından biridir. Bölgenin tarihi dokusu, dingin atmosferi ve eşsiz fotoğraf açılarıyla ziyaretçilerine otantik bir Kuzey Kıbrıs deneyimi sunar.",
          "visitTime": "30–60 dakika",
          "tip": "Fotoğraf çekmek için erken sabah veya gün batımı saatlerini tercih edin. Çevredeki yerel kahvehanelerde mola vermeyi unutmayın.",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 dk"
        }
      ],
      "en": [
        {
          "name": "Karmi (Karaman) Picturesque Village",
          "description": "Karmi (Karaman) Picturesque Village is an essential milestone along the Secret Mountain Villages & Timeless Island Life. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "9:00",
          "driveTime": "0 min"
        },
        {
          "name": "Ozanköy Historic Quarter",
          "description": "Ozanköy Historic Quarter is an essential milestone along the Secret Mountain Villages & Timeless Island Life. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "10:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Çatalköy Foothills",
          "description": "Çatalköy Foothills is an essential milestone along the Secret Mountain Villages & Timeless Island Life. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "12:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Tepebaşı (Tulip Village)",
          "description": "Tepebaşı (Tulip Village) is an essential milestone along the Secret Mountain Villages & Timeless Island Life. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "13:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Sadrazamköy Rural Outpost",
          "description": "Sadrazamköy Rural Outpost is an essential milestone along the Secret Mountain Villages & Timeless Island Life. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "15:00",
          "driveTime": "15–20 min"
        },
        {
          "name": "Koruçam Traditional Settlement",
          "description": "Koruçam Traditional Settlement is an essential milestone along the Secret Mountain Villages & Timeless Island Life. Offering panoramic vistas, authentic local character, and rich heritage, it is an essential highlight on your itinerary.",
          "visitTime": "30–60 mins",
          "tip": "Arrive early morning or late afternoon for the softest photography light and fewer crowds. Be sure to stop by local village cafes nearby.",
          "suggestedArrival": "16:00",
          "driveTime": "15–20 min"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "İlkbahar (Nisan–Haziran) & Sonbahar (Eylül–Kasım)",
        "parking": "Durakların büyük bölümünde rahat ve ücretsiz park alanları mevcuttur.",
        "entranceFees": "Çoğu durak ücretsiz; tarihi alanlarda cüzi müze kart / giriş ücreti uygulanır.",
        "fuelStations": "Şehir merkezlerinde yaygın; kırsal ve dağlık geçişlerden önce deponuzu doldurunuz.",
        "recommendedVehicle": "Standart binek otomobil uygundur.",
        "restaurants": "Güzergah üzerinde geleneksel Kıbrıs köy lokantaları ve kafeleri bulunmaktadır.",
        "publicTransport": "Kişisel veya kiralık araçla seyahat edilmesi tavsiye edilir."
      },
      "en": {
        "bestSeason": "Spring (April–June) & Autumn (September–November)",
        "parking": "Ample and free parking available at most stops and scenic viewpoints.",
        "entranceFees": "Most natural sites are free; nominal admissions for selected historical museums.",
        "fuelStations": "Abundant in urban hubs; refill before venturing into rural mountain stretches.",
        "recommendedVehicle": "Standard sedan or compact car is well-suited.",
        "restaurants": "Authentic local taverns, seaside cafes, and village bakeries along the way.",
        "publicTransport": "Self-drive by private or rental vehicle strongly recommended for flexibility."
      }
    }
  },
  {
    "id": "sig-grand",
    "slug": "sig-grand",
    "region": "signature",
    "themes": [
      "scenic",
      "nature",
      "history"
    ],
    "rating": 5,
    "distance": "150–350 km",
    "duration": {
      "tr": "3–5 gün",
      "en": "3–5 Days"
    },
    "difficulty": {
      "tr": "Manzaralı Yolculuk",
      "en": "Scenic Road Odyssey"
    },
    "startFinish": {
      "tr": "Girne (Liman & Bellapais)",
      "en": "Kyrenia Harbour (Finish: Cape Zafer)"
    },
    "heroImage": "/images/hero-kyrenia.jpg",
    "title": {
      "tr": "Büyük Kıbrıs Turu",
      "en": "The Grand Cyprus Cross-Island Road Odyssey"
    },
    "subtitle": {
      "tr": "Adanın uçtan uca en manzaralı sürüşü",
      "en": "From mountain fortresses and Crusader castles to the wild golden sands of Cape Zafer — the definitive 3 to 5-day cross-island road trip."
    },
    "intro": {
      "tr": "Dağ köyü, üç kale, dramatik sırt yolu ve Zafer Burnu'na kadar uzanan vahşi Karpaz — otelden otele, adanın nihai yol yolculuğu. Bir ucundan diğerine Kuzey Kıbrıs'ın ruhunu hissettiren, özenle tasarlanmış çok günlük veya tematik bir yol macerası.",
      "en": "From mountain fortresses and Crusader castles to the wild golden sands of Cape Zafer — the definitive 3 to 5-day cross-island road trip. An epic thematic and multi-day journey traversing the breadth of Northern Cyprus for true road trip explorers."
    },
    "insiderTip": {
      "tr": "Otel ve konaklama rezervasyonlarınızı rota güzergahındaki farklı köylere ve sahil kasabalarına yayarak adayı tam anlamıyla yaşayın.",
      "en": "Spread your overnight hotel stays across quaint coastal villages and mountain retreats to experience the authentic heartbeat of the island."
    },
    "proposers": [
      "N.P.",
      "D.O.",
      "F.Y.",
      "O.O."
    ],
    "stops": {
      "tr": [
        {
          "name": "Girne (Liman & Bellapais)",
          "description": "Girne (Liman & Bellapais), Büyük Kıbrıs Turu rotasının en önemli aşamalarından birini temsil eder. Farklı coğrafyaları, kültürleri ve manzaraları birbirine bağlar.",
          "visitTime": "Yarım–Tam gün",
          "tip": "Fotoğraf çekimi ve yerel keşifler için geniş vakit ayırınız.",
          "suggestedArrival": "Gün 1",
          "driveTime": "Bölgesel Geçiş",
          "images": [
            "/images/routes/kyrenia/bellapais-abbey/1.jpg",
            "/images/routes/kyrenia/bellapais-abbey/2.jpg",
            "/images/routes/kyrenia/bellapais-abbey/3.jpg",
            "/images/routes/kyrenia/bellapais-abbey/4.jpg",
            "/images/routes/kyrenia/bellapais-abbey/5.jpg"
          ]
        },
        {
          "name": "Dağlar (Üç Kale)",
          "description": "Dağlar (Üç Kale), Büyük Kıbrıs Turu rotasının en önemli aşamalarından birini temsil eder. Farklı coğrafyaları, kültürleri ve manzaraları birbirine bağlar.",
          "visitTime": "Yarım–Tam gün",
          "tip": "Fotoğraf çekimi ve yerel keşifler için geniş vakit ayırınız.",
          "suggestedArrival": "Gün 2",
          "driveTime": "Bölgesel Geçiş"
        },
        {
          "name": "Gazimağusa (Salamis & Surlar)",
          "description": "Gazimağusa (Salamis & Surlar), Büyük Kıbrıs Turu rotasının en önemli aşamalarından birini temsil eder. Farklı coğrafyaları, kültürleri ve manzaraları birbirine bağlar.",
          "visitTime": "Yarım–Tam gün",
          "tip": "Fotoğraf çekimi ve yerel keşifler için geniş vakit ayırınız.",
          "suggestedArrival": "Gün 3",
          "driveTime": "Bölgesel Geçiş",
          "images": [
            "/images/routes/famagusta/ancient-salamis/1.jpg",
            "/images/routes/famagusta/ancient-salamis/2.jpg",
            "/images/routes/famagusta/ancient-salamis/3.jpg",
            "/images/routes/famagusta/ancient-salamis/4.jpg",
            "/images/routes/famagusta/ancient-salamis/5.jpg",
            "/images/routes/famagusta/ancient-salamis/6.jpg"
          ]
        },
        {
          "name": "Karpaz (Altınkum & Zafer Burnu)",
          "description": "Karpaz (Altınkum & Zafer Burnu), Büyük Kıbrıs Turu rotasının en önemli aşamalarından birini temsil eder. Farklı coğrafyaları, kültürleri ve manzaraları birbirine bağlar.",
          "visitTime": "Yarım–Tam gün",
          "tip": "Fotoğraf çekimi ve yerel keşifler için geniş vakit ayırınız.",
          "suggestedArrival": "Gün 4",
          "driveTime": "Bölgesel Geçiş",
          "images": [
            "/images/routes/karpaz/golden-beach/1.jpg",
            "/images/routes/karpaz/golden-beach/2.jpg",
            "/images/routes/karpaz/golden-beach/3.jpg",
            "/images/routes/karpaz/golden-beach/4.jpg",
            "/images/routes/karpaz/golden-beach/5.jpg"
          ]
        },
        {
          "name": "Batı (Antik Kentler)",
          "description": "Batı (Antik Kentler), Büyük Kıbrıs Turu rotasının en önemli aşamalarından birini temsil eder. Farklı coğrafyaları, kültürleri ve manzaraları birbirine bağlar.",
          "visitTime": "Yarım–Tam gün",
          "tip": "Fotoğraf çekimi ve yerel keşifler için geniş vakit ayırınız.",
          "suggestedArrival": "Gün 5",
          "driveTime": "Bölgesel Geçiş",
          "images": [
            "/images/routes/guzelyurt/soli-ancient-city/1.jpg",
            "/images/routes/guzelyurt/soli-ancient-city/2.jpg",
            "/images/routes/guzelyurt/soli-ancient-city/3.jpg",
            "/images/routes/guzelyurt/soli-ancient-city/4.jpg"
          ]
        }
      ],
      "en": [
        {
          "name": "Kyrenia (Old Harbour & Bellapais Abbey)",
          "description": "Kyrenia (Old Harbour & Bellapais Abbey) is a premier milestone of The Grand Cyprus Cross-Island Road Odyssey, seamlessly connecting the island's most iconic landscapes and cultural treasures.",
          "visitTime": "Half to Full day",
          "tip": "Allow ample time for photography, local dining, and hidden gem exploration.",
          "suggestedArrival": "Day 1",
          "driveTime": "Scenic regional drive",
          "images": [
            "/images/routes/kyrenia/bellapais-abbey/1.jpg",
            "/images/routes/kyrenia/bellapais-abbey/2.jpg",
            "/images/routes/kyrenia/bellapais-abbey/3.jpg",
            "/images/routes/kyrenia/bellapais-abbey/4.jpg",
            "/images/routes/kyrenia/bellapais-abbey/5.jpg"
          ]
        },
        {
          "name": "Kyrenia Mountains (Three Crusader Fortresses)",
          "description": "Kyrenia Mountains (Three Crusader Fortresses) is a premier milestone of The Grand Cyprus Cross-Island Road Odyssey, seamlessly connecting the island's most iconic landscapes and cultural treasures.",
          "visitTime": "Half to Full day",
          "tip": "Allow ample time for photography, local dining, and hidden gem exploration.",
          "suggestedArrival": "Day 2",
          "driveTime": "Scenic regional drive"
        },
        {
          "name": "Famagusta (Ancient Salamis & Venetian Ramparts)",
          "description": "Famagusta (Ancient Salamis & Venetian Ramparts) is a premier milestone of The Grand Cyprus Cross-Island Road Odyssey, seamlessly connecting the island's most iconic landscapes and cultural treasures.",
          "visitTime": "Half to Full day",
          "tip": "Allow ample time for photography, local dining, and hidden gem exploration.",
          "suggestedArrival": "Day 3",
          "driveTime": "Scenic regional drive",
          "images": [
            "/images/routes/famagusta/ancient-salamis/1.jpg",
            "/images/routes/famagusta/ancient-salamis/2.jpg",
            "/images/routes/famagusta/ancient-salamis/3.jpg",
            "/images/routes/famagusta/ancient-salamis/4.jpg",
            "/images/routes/famagusta/ancient-salamis/5.jpg",
            "/images/routes/famagusta/ancient-salamis/6.jpg"
          ]
        },
        {
          "name": "Karpaz Peninsula (Golden Beach & Cape Zafer)",
          "description": "Karpaz Peninsula (Golden Beach & Cape Zafer) is a premier milestone of The Grand Cyprus Cross-Island Road Odyssey, seamlessly connecting the island's most iconic landscapes and cultural treasures.",
          "visitTime": "Half to Full day",
          "tip": "Allow ample time for photography, local dining, and hidden gem exploration.",
          "suggestedArrival": "Day 4",
          "driveTime": "Scenic regional drive",
          "images": [
            "/images/routes/karpaz/golden-beach/1.jpg",
            "/images/routes/karpaz/golden-beach/2.jpg",
            "/images/routes/karpaz/golden-beach/3.jpg",
            "/images/routes/karpaz/golden-beach/4.jpg",
            "/images/routes/karpaz/golden-beach/5.jpg"
          ]
        },
        {
          "name": "West Coast (Ancient Soli & Vouni Palace)",
          "description": "West Coast (Ancient Soli & Vouni Palace) is a premier milestone of The Grand Cyprus Cross-Island Road Odyssey, seamlessly connecting the island's most iconic landscapes and cultural treasures.",
          "visitTime": "Half to Full day",
          "tip": "Allow ample time for photography, local dining, and hidden gem exploration.",
          "suggestedArrival": "Day 5",
          "driveTime": "Scenic regional drive",
          "images": [
            "/images/routes/guzelyurt/soli-ancient-city/1.jpg",
            "/images/routes/guzelyurt/soli-ancient-city/2.jpg",
            "/images/routes/guzelyurt/soli-ancient-city/3.jpg",
            "/images/routes/guzelyurt/soli-ancient-city/4.jpg"
          ]
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "İlkbahar ve Sonbahar ayları idealdir.",
        "parking": "Otel ve duraklarda geniş park imkanları bulunmaktadır.",
        "entranceFees": "Güzergahtaki tarihi ve kültürel duraklara göre değişkenlik gösterir.",
        "fuelStations": "Bölge geçişlerinde ana otoyollardaki istasyonları tercih ediniz.",
        "recommendedVehicle": "Konforlu binek araç veya SUV önerilir.",
        "restaurants": "Her durağında farklı bir yöresel lezzet ve taze deniz mahsulleri mevcuttur.",
        "publicTransport": "Özel veya kiralık araçla keşfedilmesi zorunludur."
      },
      "en": {
        "bestSeason": "Spring and Autumn provide perfect road-tripping weather.",
        "parking": "Comfortable parking facilities at hotels and key itinerary waypoints.",
        "entranceFees": "Varies according to historic museums and heritage landmarks visited.",
        "fuelStations": "Refuel at main highway junctions between regional crossings.",
        "recommendedVehicle": "Comfortable sedan or compact SUV recommended.",
        "restaurants": "Wide variety of authentic meze taverns, seaside fish harbors, and village cafes.",
        "publicTransport": "Rental car or private vehicle is essential for this cross-island route."
      }
    }
  },
  {
    "id": "sig-gastronomy",
    "slug": "sig-gastronomy",
    "region": "signature",
    "themes": [
      "scenic",
      "nature",
      "history"
    ],
    "rating": 5,
    "distance": "150–350 km",
    "duration": {
      "tr": "2–3 gün",
      "en": "2–3 Days"
    },
    "difficulty": {
      "tr": "Manzaralı Yolculuk",
      "en": "Relaxed Culinary Tour"
    },
    "startFinish": {
      "tr": "Girne Limanı Kahvaltı",
      "en": "Kyrenia Harbour"
    },
    "heroImage": "/images/hero-kyrenia.jpg",
    "title": {
      "tr": "Gastronomi Yolculuğu",
      "en": "Cyprus Culinary & Artisan Gastronomy Trail"
    },
    "subtitle": {
      "tr": "Bir köy mutfağı, bir sonraki durak",
      "en": "Tracing fresh halloumi, citrus orchards, wild thyme honey, and village meze taverns across family farms and scenic seaside tables."
    },
    "intro": {
      "tr": "Narenciye, hellim, zeytin ve keçiboynuzu — Kıbrıs mutfağının ham maddelerini yetiştiği tarlalardan aile sofralarına kadar takip eden, otelden otele rota. Bir ucundan diğerine Kuzey Kıbrıs'ın ruhunu hissettiren, özenle tasarlanmış çok günlük veya tematik bir yol macerası.",
      "en": "Tracing fresh halloumi, citrus orchards, wild thyme honey, and village meze taverns across family farms and scenic seaside tables. An epic thematic and multi-day journey traversing the breadth of Northern Cyprus for true road trip explorers."
    },
    "insiderTip": {
      "tr": "Otel ve konaklama rezervasyonlarınızı rota güzergahındaki farklı köylere ve sahil kasabalarına yayarak adayı tam anlamıyla yaşayın.",
      "en": "Never rush a meal in Cyprus — the traditional multi-course meze lunch is an art of slow living and shared conversation."
    },
    "proposers": [
      "N.P.",
      "O.O."
    ],
    "stops": {
      "tr": [
        {
          "name": "Girne Limanı Kahvaltı",
          "description": "Girne Limanı Kahvaltı, Gastronomi Yolculuğu rotasının en önemli aşamalarından birini temsil eder. Farklı coğrafyaları, kültürleri ve manzaraları birbirine bağlar.",
          "visitTime": "Yarım–Tam gün",
          "tip": "Fotoğraf çekimi ve yerel keşifler için geniş vakit ayırınız.",
          "suggestedArrival": "Gün 1",
          "driveTime": "Bölgesel Geçiş",
          "images": [
            "/images/routes/kyrenia/kyrenia-harbour/1.jpg",
            "/images/routes/kyrenia/kyrenia-harbour/2.jpg",
            "/images/routes/kyrenia/kyrenia-harbour/3.jpg",
            "/images/routes/kyrenia/kyrenia-harbour/4.jpg",
            "/images/routes/kyrenia/kyrenia-harbour/5.jpg"
          ]
        },
        {
          "name": "Bellapais Köyü",
          "description": "Bellapais Köyü, Gastronomi Yolculuğu rotasının en önemli aşamalarından birini temsil eder. Farklı coğrafyaları, kültürleri ve manzaraları birbirine bağlar.",
          "visitTime": "Yarım–Tam gün",
          "tip": "Fotoğraf çekimi ve yerel keşifler için geniş vakit ayırınız.",
          "suggestedArrival": "Gün 2",
          "driveTime": "Bölgesel Geçiş",
          "images": [
            "/images/routes/kyrenia/bellapais-abbey/1.jpg",
            "/images/routes/kyrenia/bellapais-abbey/2.jpg",
            "/images/routes/kyrenia/bellapais-abbey/3.jpg",
            "/images/routes/kyrenia/bellapais-abbey/4.jpg",
            "/images/routes/kyrenia/bellapais-abbey/5.jpg"
          ]
        },
        {
          "name": "Zeytinlik Köyü",
          "description": "Zeytinlik Köyü, Gastronomi Yolculuğu rotasının en önemli aşamalarından birini temsil eder. Farklı coğrafyaları, kültürleri ve manzaraları birbirine bağlar.",
          "visitTime": "Yarım–Tam gün",
          "tip": "Fotoğraf çekimi ve yerel keşifler için geniş vakit ayırınız.",
          "suggestedArrival": "Gün 3",
          "driveTime": "Bölgesel Geçiş"
        },
        {
          "name": "Lefke & Vouni",
          "description": "Lefke & Vouni, Gastronomi Yolculuğu rotasının en önemli aşamalarından birini temsil eder. Farklı coğrafyaları, kültürleri ve manzaraları birbirine bağlar.",
          "visitTime": "Yarım–Tam gün",
          "tip": "Fotoğraf çekimi ve yerel keşifler için geniş vakit ayırınız.",
          "suggestedArrival": "Gün 4",
          "driveTime": "Bölgesel Geçiş",
          "images": [
            "/images/routes/guzelyurt/vouni-palace/1.jpg",
            "/images/routes/guzelyurt/vouni-palace/2.jpg",
            "/images/routes/guzelyurt/vouni-palace/3.jpg",
            "/images/routes/guzelyurt/vouni-palace/4.jpg",
            "/images/routes/guzelyurt/vouni-palace/5.jpg"
          ]
        },
        {
          "name": "Değirmenlik Meze Öğle Yemeği",
          "description": "Değirmenlik Meze Öğle Yemeği, Gastronomi Yolculuğu rotasının en önemli aşamalarından birini temsil eder. Farklı coğrafyaları, kültürleri ve manzaraları birbirine bağlar.",
          "visitTime": "Yarım–Tam gün",
          "tip": "Fotoğraf çekimi ve yerel keşifler için geniş vakit ayırınız.",
          "suggestedArrival": "Gün 5",
          "driveTime": "Bölgesel Geçiş"
        }
      ],
      "en": [
        {
          "name": "Kyrenia Waterfront Breakfast",
          "description": "Kyrenia Waterfront Breakfast is a premier milestone of Cyprus Culinary & Artisan Gastronomy Trail, seamlessly connecting the island's most iconic landscapes and cultural treasures.",
          "visitTime": "Half to Full day",
          "tip": "Allow ample time for photography, local dining, and hidden gem exploration.",
          "suggestedArrival": "Day 1",
          "driveTime": "Scenic regional drive",
          "images": [
            "/images/routes/kyrenia/kyrenia-harbour/1.jpg",
            "/images/routes/kyrenia/kyrenia-harbour/2.jpg",
            "/images/routes/kyrenia/kyrenia-harbour/3.jpg",
            "/images/routes/kyrenia/kyrenia-harbour/4.jpg",
            "/images/routes/kyrenia/kyrenia-harbour/5.jpg"
          ]
        },
        {
          "name": "Bellapais Village Heritage Dining",
          "description": "Bellapais Village Heritage Dining is a premier milestone of Cyprus Culinary & Artisan Gastronomy Trail, seamlessly connecting the island's most iconic landscapes and cultural treasures.",
          "visitTime": "Half to Full day",
          "tip": "Allow ample time for photography, local dining, and hidden gem exploration.",
          "suggestedArrival": "Day 2",
          "driveTime": "Scenic regional drive",
          "images": [
            "/images/routes/kyrenia/bellapais-abbey/1.jpg",
            "/images/routes/kyrenia/bellapais-abbey/2.jpg",
            "/images/routes/kyrenia/bellapais-abbey/3.jpg",
            "/images/routes/kyrenia/bellapais-abbey/4.jpg",
            "/images/routes/kyrenia/bellapais-abbey/5.jpg"
          ]
        },
        {
          "name": "Zeytinlik Olive & Halloumi Farm",
          "description": "Zeytinlik Olive & Halloumi Farm is a premier milestone of Cyprus Culinary & Artisan Gastronomy Trail, seamlessly connecting the island's most iconic landscapes and cultural treasures.",
          "visitTime": "Half to Full day",
          "tip": "Allow ample time for photography, local dining, and hidden gem exploration.",
          "suggestedArrival": "Day 3",
          "driveTime": "Scenic regional drive"
        },
        {
          "name": "Lefke Citrus Orchards & Sea Taverns",
          "description": "Lefke Citrus Orchards & Sea Taverns is a premier milestone of Cyprus Culinary & Artisan Gastronomy Trail, seamlessly connecting the island's most iconic landscapes and cultural treasures.",
          "visitTime": "Half to Full day",
          "tip": "Allow ample time for photography, local dining, and hidden gem exploration.",
          "suggestedArrival": "Day 4",
          "driveTime": "Scenic regional drive",
          "images": [
            "/images/routes/guzelyurt/vouni-palace/1.jpg",
            "/images/routes/guzelyurt/vouni-palace/2.jpg",
            "/images/routes/guzelyurt/vouni-palace/3.jpg",
            "/images/routes/guzelyurt/vouni-palace/4.jpg",
            "/images/routes/guzelyurt/vouni-palace/5.jpg"
          ]
        },
        {
          "name": "Değirmenlik Traditional Meze Feast",
          "description": "Değirmenlik Traditional Meze Feast is a premier milestone of Cyprus Culinary & Artisan Gastronomy Trail, seamlessly connecting the island's most iconic landscapes and cultural treasures.",
          "visitTime": "Half to Full day",
          "tip": "Allow ample time for photography, local dining, and hidden gem exploration.",
          "suggestedArrival": "Day 5",
          "driveTime": "Scenic regional drive"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "İlkbahar ve Sonbahar ayları idealdir.",
        "parking": "Otel ve duraklarda geniş park imkanları bulunmaktadır.",
        "entranceFees": "Güzergahtaki tarihi ve kültürel duraklara göre değişkenlik gösterir.",
        "fuelStations": "Bölge geçişlerinde ana otoyollardaki istasyonları tercih ediniz.",
        "recommendedVehicle": "Konforlu binek araç veya SUV önerilir.",
        "restaurants": "Her durağında farklı bir yöresel lezzet ve taze deniz mahsulleri mevcuttur.",
        "publicTransport": "Özel veya kiralık araçla keşfedilmesi zorunludur."
      },
      "en": {
        "bestSeason": "Spring and Autumn provide perfect road-tripping weather.",
        "parking": "Comfortable parking facilities at hotels and key itinerary waypoints.",
        "entranceFees": "Varies according to historic museums and heritage landmarks visited.",
        "fuelStations": "Refuel at main highway junctions between regional crossings.",
        "recommendedVehicle": "Comfortable sedan or compact SUV recommended.",
        "restaurants": "Wide variety of authentic meze taverns, seaside fish harbors, and village cafes.",
        "publicTransport": "Rental car or private vehicle is essential for this cross-island route."
      }
    }
  },
  {
    "id": "sig-adventure",
    "slug": "sig-adventure",
    "region": "signature",
    "themes": [
      "scenic",
      "nature",
      "history"
    ],
    "rating": 5,
    "distance": "150–350 km",
    "duration": {
      "tr": "1–2 gün",
      "en": "1–2 Days"
    },
    "difficulty": {
      "tr": "Manzaralı Yolculuk",
      "en": "Active & Adventurous"
    },
    "startFinish": {
      "tr": "Cemsa Karting (Ortaköy)",
      "en": "Nicosia & Kyrenia"
    },
    "heroImage": "/images/hero-kyrenia.jpg",
    "title": {
      "tr": "Macera & Eğlence",
      "en": "High-Adrenaline Adventure, Diving & Safari"
    },
    "subtitle": {
      "tr": "Tam gaz bir gün, adanın bir ucundan diğerine",
      "en": "Go-karting, underwater scuba reef diving, off-road quad buggy safaris, and western sunset surf — an exhilarating active adventure."
    },
    "intro": {
      "tr": "Lefkoşa dışında karting, resif dalışı, at binme, ATV safari ve batı kıyısında gün batımı sörfü — otelden otele dolu dizgin bir macera günü. Bir ucundan diğerine Kuzey Kıbrıs'ın ruhunu hissettiren, özenle tasarlanmış çok günlük veya tematik bir yol macerası.",
      "en": "Go-karting, underwater scuba reef diving, off-road quad buggy safaris, and western sunset surf — an exhilarating active adventure. An epic thematic and multi-day journey traversing the breadth of Northern Cyprus for true road trip explorers."
    },
    "insiderTip": {
      "tr": "Otel ve konaklama rezervasyonlarınızı rota güzergahındaki farklı köylere ve sahil kasabalarına yayarak adayı tam anlamıyla yaşayın.",
      "en": "Pre-book your scuba dive slot for the morning when underwater visibility is crystal clear; bring a change of clothes for buggy safari dust."
    },
    "proposers": [
      "N.P.",
      "E.A.",
      "M.M."
    ],
    "stops": {
      "tr": [
        {
          "name": "Cemsa Karting (Ortaköy)",
          "description": "Cemsa Karting (Ortaköy), Macera & Eğlence rotasının en önemli aşamalarından birini temsil eder. Farklı coğrafyaları, kültürleri ve manzaraları birbirine bağlar.",
          "visitTime": "Yarım–Tam gün",
          "tip": "Fotoğraf çekimi ve yerel keşifler için geniş vakit ayırınız.",
          "suggestedArrival": "Gün 1",
          "driveTime": "Bölgesel Geçiş"
        },
        {
          "name": "Lapta Resif Dalışı",
          "description": "Lapta Resif Dalışı, Macera & Eğlence rotasının en önemli aşamalarından birini temsil eder. Farklı coğrafyaları, kültürleri ve manzaraları birbirine bağlar.",
          "visitTime": "Yarım–Tam gün",
          "tip": "Fotoğraf çekimi ve yerel keşifler için geniş vakit ayırınız.",
          "suggestedArrival": "Gün 2",
          "driveTime": "Bölgesel Geçiş"
        },
        {
          "name": "ATV / Buggy Safari",
          "description": "ATV / Buggy Safari, Macera & Eğlence rotasının en önemli aşamalarından birini temsil eder. Farklı coğrafyaları, kültürleri ve manzaraları birbirine bağlar.",
          "visitTime": "Yarım–Tam gün",
          "tip": "Fotoğraf çekimi ve yerel keşifler için geniş vakit ayırınız.",
          "suggestedArrival": "Gün 3",
          "driveTime": "Bölgesel Geçiş"
        },
        {
          "name": "St. Hilarion Seyir",
          "description": "St. Hilarion Seyir, Macera & Eğlence rotasının en önemli aşamalarından birini temsil eder. Farklı coğrafyaları, kültürleri ve manzaraları birbirine bağlar.",
          "visitTime": "Yarım–Tam gün",
          "tip": "Fotoğraf çekimi ve yerel keşifler için geniş vakit ayırınız.",
          "suggestedArrival": "Gün 4",
          "driveTime": "Bölgesel Geçiş",
          "images": [
            "/images/routes/kyrenia/st-hilarion-castle/1.jpg",
            "/images/routes/kyrenia/st-hilarion-castle/2.jpg",
            "/images/routes/kyrenia/st-hilarion-castle/3.jpg"
          ]
        },
        {
          "name": "Escape Beach Gün Batımı",
          "description": "Escape Beach Gün Batımı, Macera & Eğlence rotasının en önemli aşamalarından birini temsil eder. Farklı coğrafyaları, kültürleri ve manzaraları birbirine bağlar.",
          "visitTime": "Yarım–Tam gün",
          "tip": "Fotoğraf çekimi ve yerel keşifler için geniş vakit ayırınız.",
          "suggestedArrival": "Gün 5",
          "driveTime": "Bölgesel Geçiş"
        }
      ],
      "en": [
        {
          "name": "Cemsa International Karting Circuit",
          "description": "Cemsa International Karting Circuit is a premier milestone of High-Adrenaline Adventure, Diving & Safari, seamlessly connecting the island's most iconic landscapes and cultural treasures.",
          "visitTime": "Half to Full day",
          "tip": "Allow ample time for photography, local dining, and hidden gem exploration.",
          "suggestedArrival": "Day 1",
          "driveTime": "Scenic regional drive"
        },
        {
          "name": "Lapta Reef Scuba Diving Spot",
          "description": "Lapta Reef Scuba Diving Spot is a premier milestone of High-Adrenaline Adventure, Diving & Safari, seamlessly connecting the island's most iconic landscapes and cultural treasures.",
          "visitTime": "Half to Full day",
          "tip": "Allow ample time for photography, local dining, and hidden gem exploration.",
          "suggestedArrival": "Day 2",
          "driveTime": "Scenic regional drive"
        },
        {
          "name": "Mountain Foothills ATV Buggy Trail",
          "description": "Mountain Foothills ATV Buggy Trail is a premier milestone of High-Adrenaline Adventure, Diving & Safari, seamlessly connecting the island's most iconic landscapes and cultural treasures.",
          "visitTime": "Half to Full day",
          "tip": "Allow ample time for photography, local dining, and hidden gem exploration.",
          "suggestedArrival": "Day 3",
          "driveTime": "Scenic regional drive"
        },
        {
          "name": "St. Hilarion High Peak Lookout",
          "description": "St. Hilarion High Peak Lookout is a premier milestone of High-Adrenaline Adventure, Diving & Safari, seamlessly connecting the island's most iconic landscapes and cultural treasures.",
          "visitTime": "Half to Full day",
          "tip": "Allow ample time for photography, local dining, and hidden gem exploration.",
          "suggestedArrival": "Day 4",
          "driveTime": "Scenic regional drive",
          "images": [
            "/images/routes/kyrenia/st-hilarion-castle/1.jpg",
            "/images/routes/kyrenia/st-hilarion-castle/2.jpg",
            "/images/routes/kyrenia/st-hilarion-castle/3.jpg"
          ]
        },
        {
          "name": "Escape Beach Sunset Chill & Water Sports",
          "description": "Escape Beach Sunset Chill & Water Sports is a premier milestone of High-Adrenaline Adventure, Diving & Safari, seamlessly connecting the island's most iconic landscapes and cultural treasures.",
          "visitTime": "Half to Full day",
          "tip": "Allow ample time for photography, local dining, and hidden gem exploration.",
          "suggestedArrival": "Day 5",
          "driveTime": "Scenic regional drive"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "İlkbahar ve Sonbahar ayları idealdir.",
        "parking": "Otel ve duraklarda geniş park imkanları bulunmaktadır.",
        "entranceFees": "Güzergahtaki tarihi ve kültürel duraklara göre değişkenlik gösterir.",
        "fuelStations": "Bölge geçişlerinde ana otoyollardaki istasyonları tercih ediniz.",
        "recommendedVehicle": "Konforlu binek araç veya SUV önerilir.",
        "restaurants": "Her durağında farklı bir yöresel lezzet ve taze deniz mahsulleri mevcuttur.",
        "publicTransport": "Özel veya kiralık araçla keşfedilmesi zorunludur."
      },
      "en": {
        "bestSeason": "Spring and Autumn provide perfect road-tripping weather.",
        "parking": "Comfortable parking facilities at hotels and key itinerary waypoints.",
        "entranceFees": "Varies according to historic museums and heritage landmarks visited.",
        "fuelStations": "Refuel at main highway junctions between regional crossings.",
        "recommendedVehicle": "Comfortable sedan or compact SUV recommended.",
        "restaurants": "Wide variety of authentic meze taverns, seaside fish harbors, and village cafes.",
        "publicTransport": "Rental car or private vehicle is essential for this cross-island route."
      }
    }
  },
  {
    "id": "sig-family",
    "slug": "sig-family",
    "region": "signature",
    "themes": [
      "scenic",
      "nature",
      "history"
    ],
    "rating": 5,
    "distance": "150–350 km",
    "duration": {
      "tr": "1 gün",
      "en": "1 Day"
    },
    "difficulty": {
      "tr": "Manzaralı Yolculuk",
      "en": "Family Friendly"
    },
    "startFinish": {
      "tr": "Ocean Akvaryum",
      "en": "Kyrenia Coast"
    },
    "heroImage": "/images/hero-kyrenia.jpg",
    "title": {
      "tr": "Aile Rotası",
      "en": "Family Fun Road Trip: Shallow Bays, Boat Tour & Sweets"
    },
    "subtitle": {
      "tr": "Çocukların gerçekten sevdiği bir gün",
      "en": "Safe shallow swimming bays, gentle glass-bottom boat cruise, amusement attractions, and artisanal ice cream parlours designed for all ages."
    },
    "intro": {
      "tr": "Klimalı akvaryum, sakin tekne turu, lunapark ve sığ, güvenli yüzme — küçük çocuklarla gerçekten işe yarayan duraklarla kurulmuş, otelden otele yarım-tam gün. Bir ucundan diğerine Kuzey Kıbrıs'ın ruhunu hissettiren, özenle tasarlanmış çok günlük veya tematik bir yol macerası.",
      "en": "Safe shallow swimming bays, gentle glass-bottom boat cruise, amusement attractions, and artisanal ice cream parlours designed for all ages. An epic thematic and multi-day journey traversing the breadth of Northern Cyprus for true road trip explorers."
    },
    "insiderTip": {
      "tr": "Otel ve konaklama rezervasyonlarınızı rota güzergahındaki farklı köylere ve sahil kasabalarına yayarak adayı tam anlamıyla yaşayın.",
      "en": "Escape Beach and Alagadi offer gentle shallow shelving waters safe for young children; head out on the morning harbour boat cruise before wind picks up."
    },
    "proposers": [
      "N.P.",
      "A.K."
    ],
    "stops": {
      "tr": [
        {
          "name": "Ocean Akvaryum",
          "description": "Ocean Akvaryum, Aile Rotası rotasının en önemli aşamalarından birini temsil eder. Farklı coğrafyaları, kültürleri ve manzaraları birbirine bağlar.",
          "visitTime": "Yarım–Tam gün",
          "tip": "Fotoğraf çekimi ve yerel keşifler için geniş vakit ayırınız.",
          "suggestedArrival": "Gün 1",
          "driveTime": "Bölgesel Geçiş"
        },
        {
          "name": "Girne Marina Tekne Turu",
          "description": "Girne Marina Tekne Turu, Aile Rotası rotasının en önemli aşamalarından birini temsil eder. Farklı coğrafyaları, kültürleri ve manzaraları birbirine bağlar.",
          "visitTime": "Yarım–Tam gün",
          "tip": "Fotoğraf çekimi ve yerel keşifler için geniş vakit ayırınız.",
          "suggestedArrival": "Gün 2",
          "driveTime": "Bölgesel Geçiş",
          "images": [
            "/images/routes/kyrenia/kyrenia-harbour/1.jpg",
            "/images/routes/kyrenia/kyrenia-harbour/2.jpg",
            "/images/routes/kyrenia/kyrenia-harbour/3.jpg",
            "/images/routes/kyrenia/kyrenia-harbour/4.jpg",
            "/images/routes/kyrenia/kyrenia-harbour/5.jpg"
          ]
        },
        {
          "name": "Escape Beach (Sığ Koy)",
          "description": "Escape Beach (Sığ Koy), Aile Rotası rotasının en önemli aşamalarından birini temsil eder. Farklı coğrafyaları, kültürleri ve manzaraları birbirine bağlar.",
          "visitTime": "Yarım–Tam gün",
          "tip": "Fotoğraf çekimi ve yerel keşifler için geniş vakit ayırınız.",
          "suggestedArrival": "Gün 3",
          "driveTime": "Bölgesel Geçiş"
        },
        {
          "name": "Lunapark",
          "description": "Lunapark, Aile Rotası rotasının en önemli aşamalarından birini temsil eder. Farklı coğrafyaları, kültürleri ve manzaraları birbirine bağlar.",
          "visitTime": "Yarım–Tam gün",
          "tip": "Fotoğraf çekimi ve yerel keşifler için geniş vakit ayırınız.",
          "suggestedArrival": "Gün 4",
          "driveTime": "Bölgesel Geçiş"
        },
        {
          "name": "Dondurma Kafesi",
          "description": "Dondurma Kafesi, Aile Rotası rotasının en önemli aşamalarından birini temsil eder. Farklı coğrafyaları, kültürleri ve manzaraları birbirine bağlar.",
          "visitTime": "Yarım–Tam gün",
          "tip": "Fotoğraf çekimi ve yerel keşifler için geniş vakit ayırınız.",
          "suggestedArrival": "Gün 5",
          "driveTime": "Bölgesel Geçiş"
        }
      ],
      "en": [
        {
          "name": "Ocean Aquarium & Marine Exhibits",
          "description": "Ocean Aquarium & Marine Exhibits is a premier milestone of Family Fun Road Trip: Shallow Bays, Boat Tour & Sweets, seamlessly connecting the island's most iconic landscapes and cultural treasures.",
          "visitTime": "Half to Full day",
          "tip": "Allow ample time for photography, local dining, and hidden gem exploration.",
          "suggestedArrival": "Day 1",
          "driveTime": "Scenic regional drive"
        },
        {
          "name": "Kyrenia Harbour Family Boat Tour",
          "description": "Kyrenia Harbour Family Boat Tour is a premier milestone of Family Fun Road Trip: Shallow Bays, Boat Tour & Sweets, seamlessly connecting the island's most iconic landscapes and cultural treasures.",
          "visitTime": "Half to Full day",
          "tip": "Allow ample time for photography, local dining, and hidden gem exploration.",
          "suggestedArrival": "Day 2",
          "driveTime": "Scenic regional drive",
          "images": [
            "/images/routes/kyrenia/kyrenia-harbour/1.jpg",
            "/images/routes/kyrenia/kyrenia-harbour/2.jpg",
            "/images/routes/kyrenia/kyrenia-harbour/3.jpg",
            "/images/routes/kyrenia/kyrenia-harbour/4.jpg",
            "/images/routes/kyrenia/kyrenia-harbour/5.jpg"
          ]
        },
        {
          "name": "Escape Beach Safe Shallow Cove",
          "description": "Escape Beach Safe Shallow Cove is a premier milestone of Family Fun Road Trip: Shallow Bays, Boat Tour & Sweets, seamlessly connecting the island's most iconic landscapes and cultural treasures.",
          "visitTime": "Half to Full day",
          "tip": "Allow ample time for photography, local dining, and hidden gem exploration.",
          "suggestedArrival": "Day 3",
          "driveTime": "Scenic regional drive"
        },
        {
          "name": "Kyrenia Seaside Amusement Park",
          "description": "Kyrenia Seaside Amusement Park is a premier milestone of Family Fun Road Trip: Shallow Bays, Boat Tour & Sweets, seamlessly connecting the island's most iconic landscapes and cultural treasures.",
          "visitTime": "Half to Full day",
          "tip": "Allow ample time for photography, local dining, and hidden gem exploration.",
          "suggestedArrival": "Day 4",
          "driveTime": "Scenic regional drive"
        },
        {
          "name": "Traditional Ice Cream Parlour",
          "description": "Traditional Ice Cream Parlour is a premier milestone of Family Fun Road Trip: Shallow Bays, Boat Tour & Sweets, seamlessly connecting the island's most iconic landscapes and cultural treasures.",
          "visitTime": "Half to Full day",
          "tip": "Allow ample time for photography, local dining, and hidden gem exploration.",
          "suggestedArrival": "Day 5",
          "driveTime": "Scenic regional drive"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "İlkbahar ve Sonbahar ayları idealdir.",
        "parking": "Otel ve duraklarda geniş park imkanları bulunmaktadır.",
        "entranceFees": "Güzergahtaki tarihi ve kültürel duraklara göre değişkenlik gösterir.",
        "fuelStations": "Bölge geçişlerinde ana otoyollardaki istasyonları tercih ediniz.",
        "recommendedVehicle": "Konforlu binek araç veya SUV önerilir.",
        "restaurants": "Her durağında farklı bir yöresel lezzet ve taze deniz mahsulleri mevcuttur.",
        "publicTransport": "Özel veya kiralık araçla keşfedilmesi zorunludur."
      },
      "en": {
        "bestSeason": "Spring and Autumn provide perfect road-tripping weather.",
        "parking": "Comfortable parking facilities at hotels and key itinerary waypoints.",
        "entranceFees": "Varies according to historic museums and heritage landmarks visited.",
        "fuelStations": "Refuel at main highway junctions between regional crossings.",
        "recommendedVehicle": "Comfortable sedan or compact SUV recommended.",
        "restaurants": "Wide variety of authentic meze taverns, seaside fish harbors, and village cafes.",
        "publicTransport": "Rental car or private vehicle is essential for this cross-island route."
      }
    }
  },
  {
    "id": "sig-sunset",
    "slug": "sig-sunset",
    "region": "signature",
    "themes": [
      "scenic",
      "nature",
      "history"
    ],
    "rating": 5,
    "distance": "150–350 km",
    "duration": {
      "tr": "1 gün",
      "en": "1 Day"
    },
    "difficulty": {
      "tr": "Manzaralı Yolculuk",
      "en": "Scenic & Romantic"
    },
    "startFinish": {
      "tr": "St. Hilarion Seyir Noktası",
      "en": "St. Hilarion Castle"
    },
    "heroImage": "/images/hero-kyrenia.jpg",
    "title": {
      "tr": "Gün Batımı & Yıldız Gözlemi",
      "en": "Chasing the Light: Castles, Sunsets & Dark Sky Stargazing"
    },
    "subtitle": {
      "tr": "Işığın peşinde bütün kuzey kıyısı",
      "en": "Golden hour at mountain castles, blue hour at cliffside terraces, and stargazing under the purest unpolluted dark skies in the Eastern Mediterranean."
    },
    "intro": {
      "tr": "Tümüyle ışık etrafında kurulmuş rota — dağ kalesinde altın saat, terasta mavi saat ve Doğu Akdeniz'in en az ışık kirliliğine sahip göklerinde tam karanlık. Bir ucundan diğerine Kuzey Kıbrıs'ın ruhunu hissettiren, özenle tasarlanmış çok günlük veya tematik bir yol macerası.",
      "en": "Golden hour at mountain castles, blue hour at cliffside terraces, and stargazing under the purest unpolluted dark skies in the Eastern Mediterranean. An epic thematic and multi-day journey traversing the breadth of Northern Cyprus for true road trip explorers."
    },
    "insiderTip": {
      "tr": "Otel ve konaklama rezervasyonlarınızı rota güzergahındaki farklı köylere ve sahil kasabalarına yayarak adayı tam anlamıyla yaşayın.",
      "en": "Bring a light jacket for mountain elevations at night; the stargazing on the remote Karpaz peninsula offers crystal-clear Milky Way visibility."
    },
    "proposers": [
      "O.O.",
      "A.A.",
      "V.R."
    ],
    "stops": {
      "tr": [
        {
          "name": "St. Hilarion Seyir Noktası",
          "description": "St. Hilarion Seyir Noktası, Gün Batımı & Yıldız Gözlemi rotasının en önemli aşamalarından birini temsil eder. Farklı coğrafyaları, kültürleri ve manzaraları birbirine bağlar.",
          "visitTime": "Yarım–Tam gün",
          "tip": "Fotoğraf çekimi ve yerel keşifler için geniş vakit ayırınız.",
          "suggestedArrival": "Gün 1",
          "driveTime": "Bölgesel Geçiş",
          "images": [
            "/images/routes/kyrenia/st-hilarion-castle/1.jpg",
            "/images/routes/kyrenia/st-hilarion-castle/2.jpg",
            "/images/routes/kyrenia/st-hilarion-castle/3.jpg"
          ]
        },
        {
          "name": "Bellapais Terası",
          "description": "Bellapais Terası, Gün Batımı & Yıldız Gözlemi rotasının en önemli aşamalarından birini temsil eder. Farklı coğrafyaları, kültürleri ve manzaraları birbirine bağlar.",
          "visitTime": "Yarım–Tam gün",
          "tip": "Fotoğraf çekimi ve yerel keşifler için geniş vakit ayırınız.",
          "suggestedArrival": "Gün 2",
          "driveTime": "Bölgesel Geçiş",
          "images": [
            "/images/routes/kyrenia/bellapais-abbey/1.jpg",
            "/images/routes/kyrenia/bellapais-abbey/2.jpg",
            "/images/routes/kyrenia/bellapais-abbey/3.jpg",
            "/images/routes/kyrenia/bellapais-abbey/4.jpg",
            "/images/routes/kyrenia/bellapais-abbey/5.jpg"
          ]
        },
        {
          "name": "Sadrazamköy Gün Batımı",
          "description": "Sadrazamköy Gün Batımı, Gün Batımı & Yıldız Gözlemi rotasının en önemli aşamalarından birini temsil eder. Farklı coğrafyaları, kültürleri ve manzaraları birbirine bağlar.",
          "visitTime": "Yarım–Tam gün",
          "tip": "Fotoğraf çekimi ve yerel keşifler için geniş vakit ayırınız.",
          "suggestedArrival": "Gün 3",
          "driveTime": "Bölgesel Geçiş"
        },
        {
          "name": "Kormakitis Burnu",
          "description": "Kormakitis Burnu, Gün Batımı & Yıldız Gözlemi rotasının en önemli aşamalarından birini temsil eder. Farklı coğrafyaları, kültürleri ve manzaraları birbirine bağlar.",
          "visitTime": "Yarım–Tam gün",
          "tip": "Fotoğraf çekimi ve yerel keşifler için geniş vakit ayırınız.",
          "suggestedArrival": "Gün 4",
          "driveTime": "Bölgesel Geçiş"
        },
        {
          "name": "Karpaz Gece Göğü",
          "description": "Karpaz Gece Göğü, Gün Batımı & Yıldız Gözlemi rotasının en önemli aşamalarından birini temsil eder. Farklı coğrafyaları, kültürleri ve manzaraları birbirine bağlar.",
          "visitTime": "Yarım–Tam gün",
          "tip": "Fotoğraf çekimi ve yerel keşifler için geniş vakit ayırınız.",
          "suggestedArrival": "Gün 5",
          "driveTime": "Bölgesel Geçiş"
        }
      ],
      "en": [
        {
          "name": "St. Hilarion Golden Hour Pinnacle",
          "description": "St. Hilarion Golden Hour Pinnacle is a premier milestone of Chasing the Light: Castles, Sunsets & Dark Sky Stargazing, seamlessly connecting the island's most iconic landscapes and cultural treasures.",
          "visitTime": "Half to Full day",
          "tip": "Allow ample time for photography, local dining, and hidden gem exploration.",
          "suggestedArrival": "Day 1",
          "driveTime": "Scenic regional drive",
          "images": [
            "/images/routes/kyrenia/st-hilarion-castle/1.jpg",
            "/images/routes/kyrenia/st-hilarion-castle/2.jpg",
            "/images/routes/kyrenia/st-hilarion-castle/3.jpg"
          ]
        },
        {
          "name": "Bellapais Blue Hour Terrace",
          "description": "Bellapais Blue Hour Terrace is a premier milestone of Chasing the Light: Castles, Sunsets & Dark Sky Stargazing, seamlessly connecting the island's most iconic landscapes and cultural treasures.",
          "visitTime": "Half to Full day",
          "tip": "Allow ample time for photography, local dining, and hidden gem exploration.",
          "suggestedArrival": "Day 2",
          "driveTime": "Scenic regional drive",
          "images": [
            "/images/routes/kyrenia/bellapais-abbey/1.jpg",
            "/images/routes/kyrenia/bellapais-abbey/2.jpg",
            "/images/routes/kyrenia/bellapais-abbey/3.jpg",
            "/images/routes/kyrenia/bellapais-abbey/4.jpg",
            "/images/routes/kyrenia/bellapais-abbey/5.jpg"
          ]
        },
        {
          "name": "Sadrazamköy Western Cape Sunset",
          "description": "Sadrazamköy Western Cape Sunset is a premier milestone of Chasing the Light: Castles, Sunsets & Dark Sky Stargazing, seamlessly connecting the island's most iconic landscapes and cultural treasures.",
          "visitTime": "Half to Full day",
          "tip": "Allow ample time for photography, local dining, and hidden gem exploration.",
          "suggestedArrival": "Day 3",
          "driveTime": "Scenic regional drive"
        },
        {
          "name": "Cape Kormakitis Dusk Horizon",
          "description": "Cape Kormakitis Dusk Horizon is a premier milestone of Chasing the Light: Castles, Sunsets & Dark Sky Stargazing, seamlessly connecting the island's most iconic landscapes and cultural treasures.",
          "visitTime": "Half to Full day",
          "tip": "Allow ample time for photography, local dining, and hidden gem exploration.",
          "suggestedArrival": "Day 4",
          "driveTime": "Scenic regional drive"
        },
        {
          "name": "Karpaz Wilderness Dark Sky Stargazing",
          "description": "Karpaz Wilderness Dark Sky Stargazing is a premier milestone of Chasing the Light: Castles, Sunsets & Dark Sky Stargazing, seamlessly connecting the island's most iconic landscapes and cultural treasures.",
          "visitTime": "Half to Full day",
          "tip": "Allow ample time for photography, local dining, and hidden gem exploration.",
          "suggestedArrival": "Day 5",
          "driveTime": "Scenic regional drive"
        }
      ]
    },
    "practicalInfo": {
      "tr": {
        "bestSeason": "İlkbahar ve Sonbahar ayları idealdir.",
        "parking": "Otel ve duraklarda geniş park imkanları bulunmaktadır.",
        "entranceFees": "Güzergahtaki tarihi ve kültürel duraklara göre değişkenlik gösterir.",
        "fuelStations": "Bölge geçişlerinde ana otoyollardaki istasyonları tercih ediniz.",
        "recommendedVehicle": "Konforlu binek araç veya SUV önerilir.",
        "restaurants": "Her durağında farklı bir yöresel lezzet ve taze deniz mahsulleri mevcuttur.",
        "publicTransport": "Özel veya kiralık araçla keşfedilmesi zorunludur."
      },
      "en": {
        "bestSeason": "Spring and Autumn provide perfect road-tripping weather.",
        "parking": "Comfortable parking facilities at hotels and key itinerary waypoints.",
        "entranceFees": "Varies according to historic museums and heritage landmarks visited.",
        "fuelStations": "Refuel at main highway junctions between regional crossings.",
        "recommendedVehicle": "Comfortable sedan or compact SUV recommended.",
        "restaurants": "Wide variety of authentic meze taverns, seaside fish harbors, and village cafes.",
        "publicTransport": "Rental car or private vehicle is essential for this cross-island route."
      }
    }
  }
];

export function getRoutes(lang: Locale = "tr"): Route[] {
  const isTr = lang === "tr";
  const themeMap: Record<string, { tr: string; en: string }> = {
    history: { tr: "Tarih", en: "History" },
    coast: { tr: "Sahil", en: "Coast" },
    nature: { tr: "Doğa", en: "Nature" },
    food: { tr: "Gastronomi", en: "Food" },
    scenic: { tr: "Manzara", en: "Scenic" },
    nightlife: { tr: "Gece", en: "Nightlife" },
  };

  return rawRoutes.map((r) => ({
    id: r.id,
    slug: r.slug,
    region: r.region,
    themes: r.themes,
    title: isTr ? r.title.tr : r.title.en,
    subtitle: isTr ? r.subtitle.tr : r.subtitle.en,
    theme: r.themes
      .map((t) => (themeMap[t] ? (isTr ? themeMap[t].tr : themeMap[t].en) : t.toUpperCase()))
      .join(" • "),
    startFinish: isTr ? r.startFinish.tr : r.startFinish.en,
    heroImage: r.heroImage,
    duration: isTr ? r.duration.tr : r.duration.en,
    distance: r.distance,
    rating: r.rating || 5,
    mapEmbedUrl: r.mapEmbedUrl,
    intro: isTr ? r.intro.tr : r.intro.en,
    insiderTip: isTr ? r.insiderTip.tr : r.insiderTip.en,
    proposers: r.proposers || [],
    stops: isTr ? r.stops.tr : r.stops.en,
    practicalInfo: isTr ? r.practicalInfo.tr : r.practicalInfo.en,
    seo: {
      title: isTr ? r.title.tr : r.title.en,
      description: isTr ? r.subtitle.tr : r.subtitle.en,
    },
  }));
}

export function getRouteBySlug(slug: string, lang: Locale = "tr"): Route | undefined {
  const all = getRoutes(lang);
  return all.find((r) => r.slug === slug || r.id === slug);
}

export const routes: Route[] = getRoutes("tr");
