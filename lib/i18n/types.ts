// lib/i18n/types.ts

export type Locale = "tr" | "en";

export interface Dictionary {
  common: {
    backToAllRoutes: string;
    exploreRoutes: string;
    viewRoute: string;
    getStarted: string;
    learnMore: string;
    duration: string;
    distance: string;
    startFinish: string;
    totalStops: string;
    waypoints: string;
    exploreStops: string;
    interactiveMap: string;
    share: string;
    copied: string;
    free: string;
    from: string;
    theme: string;
    difficulty: {
      easy: string;
      moderate: string;
      relaxed: string;
      hard: string;
    };
    stats: {
      curatedRoutes: string;
      stopsToExplore: string;
      localTips: string;
    };
  };
  nav: {
    exploreItineraries: string;
    about: string;
    testimonials: string;
    drivingGuide: string;
    faq: string;
    getStarted: string;
    theme: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    subtitle: string;
    exploreButton: string;
    learnMoreButton: string;
    curatedRoutesCount: string;
    curatedRoutesLabel: string;
    stopsCount: string;
    stopsLabel: string;
    localTipsPercent: string;
    localTipsLabel: string;
  };
  routesGrid: {
    title: string;
    subtitle: string;
    viewRoute: string;
    iconicSpots: string;
    localEats: string;
    greatStays: string;
    springAutumn: string;
  };
  routeDetail: {
    overviewTag: string;
    aboutTitle: string;
    insiderTipTag: string;
    stopsTag: string;
    stopsTitle: string;
    stopsSubtitle: string;
    gpsTag: string;
    mapTitle: string;
    mapSubtitle: string;
    practicalInfoTag: string;
    practicalInfoTitle: string;
    ctaTitle: string;
    ctaSubtitle: string;
    exploreMore: string;
  };
  about: {
    title: string;
    subtitle: string;
    missionTitle: string;
    missionText: string;
    valuesTitle: string;
    values: {
      title: string;
      description: string;
    }[];
    readyTitle: string;
    readySubtitle: string;
    ctaButton: string;
  };
  guide: {
    title: string;
    subtitle: string;
    sections: {
      title: string;
      items: string[];
    }[];
  };
  faq: {
    title: string;
    subtitle: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
  };
  newsletter: {
    badge: string;
    title: string;
    subtitle: string;
    placeholder: string;
    button: string;
    success: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    routes: string;
    regions: string;
    viewAll: string;
    aboutUs: string;
    drivingGuide: string;
    faq: string;
    testimonials: string;
    legal: string;
    privacyPolicy: string;
    termsOfService: string;
    contact: string;
    copyright: string;
  };
}
