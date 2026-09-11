// data/testimonials.ts
export interface Testimonial {
  id: number;
  name: string;
  location: string;
  route: string;
  travelDate: string;
  quote: string;
  rating: number;
  initials: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "S.R.",
    location: "United Kingdom",
    route: "Kyrenia Heritage Loop",
    travelDate: "May 2025",
    quote:
      "The Kyrenia Heritage Loop was the highlight of our Cyprus trip! St. Hilarion Castle is absolutely breathtaking, and the insider tip to visit early morning was spot on. Having the route map and stop-by-stop guide made our self-drive holiday completely stress-free.",
    rating: 5,
    initials: "SR",
  },
  {
    id: 2,
    name: "M.K.",
    location: "Germany",
    route: "Karpaz Nature Loop",
    travelDate: "Apr 2025",
    quote:
      "Drive North Cyprus made exploring the Karpaz Peninsula so easy. The directions were perfect, and we saw wild donkeys, swam at Golden Beach, and visited the monastery – exactly as promised. The insider tips really made it special. We felt like locals, not tourists.",
    rating: 5,
    initials: "MK",
  },
  {
    id: 3,
    name: "L.T.",
    location: "Canada",
    route: "Famagusta History Loop",
    travelDate: "Oct 2024",
    quote:
      "I've been recommending Drive North Cyprus to everyone planning a trip to North Cyprus. The Famagusta loop was incredibly well-researched – from Ancient Salamis to Othello Castle, everything was covered. The free guide saved us hours of research!",
    rating: 5,
    initials: "LT",
  },
  {
    id: 4,
    name: "J.P.",
    location: "Australia",
    route: "Nicosia Old City Loop",
    travelDate: "Mar 2025",
    quote:
      "Walking through Nicosia's old city with Drive North Cyprus' guide was like having a local friend show you around. The Büyük Han, Selimiye Mosque, and the hidden courtyard cafe made our visit unforgettable. Absolutely brilliant work!",
    rating: 5,
    initials: "JP",
  },
  {
    id: 5,
    name: "E.V.",
    location: "Netherlands",
    route: "Güzelyurt & Lefke Heritage Loop",
    travelDate: "Sep 2024",
    quote:
      "We would have completely missed Soli and Vouni Palace without this guide. The route took us through beautiful countryside, and the stop at the lemon groves was a lovely surprise. Drive North Cyprus is a must-have for any serious explorer!",
    rating: 4,
    initials: "EV",
  },
];
