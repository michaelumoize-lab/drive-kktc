// data/routes.ts
export interface Route {
  slug: string;
  title: string;
  subtitle: string;
  theme: string;
  startFinish: string;
  heroImage: string;
  duration: string;
  distance: string;
  rating: number;
  intro: string;
  stops: {
    name: string;
    description: string;
    image?: string;
    visitTime?: string;
    openingHours?: string;
    entranceFee?: string;
    tip?: string;
  }[];
  practicalInfo: {
    bestSeason: string;
    parking: string;
    entranceFees: string;
    fuelStations: string;
    recommendedVehicle: string;
    restaurants: string;
    publicTransport: string;
  };
  insiderTip: string;
  seo: {
    title: string;
    description: string;
  };
}

export const routes: Route[] = [
  {
    slug: "kyrenia-heritage-coastal",
    title: "Kyrenia Heritage & Coastal Loop",
    subtitle: "Harbour views, mountain castles, and turtle beaches",
    theme: "History • Coast • Mountains",
    startFinish: "Kyrenia Harbour",
    heroImage: "/images/routes/kyrenia-loop.jpg",
    duration: "1 Day",
    distance: "45 km",
    rating: 5,
    intro:
      "This route combines Northern Cyprus' most famous harbour, a medieval castle, a stunning hilltop abbey, a mountain fortress, and a protected turtle beach. Perfect for history lovers and nature enthusiasts alike, the Kyrenia Heritage & Coastal Loop offers a day of diverse experiences within a short driving distance from the picturesque Kyrenia Harbour. From the ancient walls of Kyrenia Castle to the serene atmosphere of Bellapais Abbey, and from the panoramic views of St. Hilarion to the pristine sands of Alagadi Beach, this route showcases the best of the Kyrenia region in one unforgettable journey.",
    stops: [
      {
        name: "Kyrenia Harbour",
        description:
          "Start your journey at this picturesque horseshoe-shaped harbour, lined with charming restaurants, cafes, and fishing boats. The harbour is the heart of Kyrenia and one of the most photographed spots in Northern Cyprus. Watch the fishing boats bob in the turquoise water, dine at one of the waterfront seafood restaurants, and soak in the Mediterranean atmosphere. The harbour is also home to the Kyrenia Castle, which dominates the eastern end of the bay.",
        visitTime: "30-45 minutes",
        openingHours: "24/7 (Restaurants open until late)",
        entranceFee: "Free",
        tip: "Visit early morning (7-9 AM) for the best photos of the harbour with the mountains in the background – the light is perfect and the harbour is quiet.",
      },
      {
        name: "Kyrenia Castle",
        description:
          "Dominating the eastern end of Kyrenia Harbour, this impressive 16th-century Venetian castle is a must-visit. The castle houses the Shipwreck Museum, which contains one of the oldest shipwrecks in the world (4th century BC). Walk the ramparts for breathtaking views of the harbour and the Kyrenia Mountains. Explore the underground dungeons, the Royal Apartments, and the stunning chapel inside the castle walls.",
        visitTime: "1-1.5 hours",
        openingHours: "9:00 AM – 5:00 PM (Closed Mondays)",
        entranceFee: "€3 (€1.50 for students)",
        tip: "The Shipwreck Museum is the highlight – don't rush through it. The preserved 4th-century BC shipwreck is one of the best-preserved ancient ships ever found.",
      },
      {
        name: "Bellapais Abbey",
        description:
          "Perched on the slopes of the Kyrenia Mountains, this stunning 13th-century Gothic monastery offers panoramic views over the northern coast. The abbey is known for its beautiful cloisters, the magnificent refectory with its intricate carved ceiling, and the peaceful garden. The village of Bellapais beneath the abbey is equally charming, with its narrow streets and traditional stone houses. The abbey also hosts a famous music festival every summer.",
        visitTime: "1-1.5 hours",
        openingHours: "9:00 AM – 5:00 PM (Closed Mondays)",
        entranceFee: "€2.50",
        tip: "Climb to the top of the abbey's watchtower for the best view – you can see clear across to the Mediterranean Sea on a clear day. Visit around sunset for a truly magical experience.",
      },
      {
        name: "St. Hilarion Castle",
        description:
          "Sitting at 630 meters above sea level, St. Hilarion Castle is the most spectacular of the three Kyrenia mountain fortresses. The castle is surrounded by the legend that this castle inspired Walt Disney's Snow White castle. Explore the Prince's Palace, the Royal Apartments, and the Queen's Window, which offers the most dramatic view of the coast. The climb is rewarding with panoramic views of Kyrenia, the sea, and the surrounding mountains.",
        visitTime: "1.5-2 hours",
        openingHours: "9:00 AM – 5:00 PM (Closed Mondays)",
        entranceFee: "€3",
        tip: "Arrive early (8:30 AM) to avoid the crowds and the heat. The climb is steep, so wear comfortable shoes and bring water. The view from the Queen's Window is where the Snow White legend comes from – it's breathtaking.",
      },
      {
        name: "Alagadi Turtle Beach",
        description:
          "Also known as 'Turtle Beach', this protected sandy bay is one of the most important nesting sites for endangered Loggerhead and Green sea turtles. The beach stretches for over 2 kilometers of golden sand. During the summer months (May-October), you can see turtle nests marked with protective cages. Swimming here is clean and the water is crystal clear. The beach is backed by sand dunes and is undeveloped, preserving its natural beauty.",
        visitTime: "1-2 hours (or more for swimming)",
        openingHours: "24/7 (day access)",
        entranceFee: "Free",
        tip: "Visit early morning or late evening to see the turtle nests. If you're lucky, you might see hatchlings making their way to the sea between July and September. Don't use flash photography near the nests.",
      },
    ],
    practicalInfo: {
      bestSeason:
        "Spring (April-May) or Autumn (September-October) – mild temperatures and wildflowers",
      parking:
        "Available at all stops – free parking at the harbour, castle, and beach",
      entranceFees: "€3 per person per castle/museum (€1.50 for students)",
      fuelStations:
        "Main fuel stations on the Girne bypass before heading to St. Hilarion",
      recommendedVehicle:
        "Sedan or SUV – the road to St. Hilarion is winding but accessible",
      restaurants:
        "Kyrenia Harbour has excellent seafood restaurants. Try the sea bass or grilled octopus at Nautilus Restaurant.",
      publicTransport: "Limited – best explored with your own vehicle",
    },
    insiderTip:
      "Instead of rushing between stops, take the winding mountain road from Bellapais to St. Hilarion via the 'Five Finger Mountain' viewpoint. There's a hidden pull-over spot halfway where you can see all three Kyrenia castles (St. Hilarion, Buffavento, and Kantara) in one panoramic view – your local guide won't tell you about it.",
    seo: {
      title: "Kyrenia Heritage & Coastal Loop – Castles, Abbey & Turtle Beach",
      description:
        "Discover North Cyprus' most iconic route combining Kyrenia Harbour, medieval castles, Bellapais Abbey, St. Hilarion, and Alagadi Turtle Beach in one unforgettable day.",
    },
  },
  {
    slug: "famagusta-history-loop",
    title: "Famagusta History Loop",
    subtitle: "Ancient civilizations and medieval kingdoms",
    theme: "Ancient civilizations • Medieval history",
    startFinish: "Famagusta Walled City",
    heroImage: "/images/routes/famagusta-loop.jpg",
    duration: "1 Day",
    distance: "15 km",
    rating: 5,
    intro:
      "Famagusta is a city where history comes alive around every corner. This loop takes you through 3,000 years of history, from the ancient city of Salamis to the medieval walls of Famagusta, the Venetian fortress of Othello Castle, and the haunting viewpoint over Varosha. This is one of the richest historical routes in North Cyprus, offering a deep dive into the ancient civilizations and medieval kingdoms that shaped the region.",
    stops: [
      {
        name: "Famagusta Walled City",
        description:
          "Start your journey at the impressive Venetian walls that surround the old city. These 15th-century fortifications are among the best-preserved in the Mediterranean. Walk along the walls for panoramic views over the city and the sea. Inside the walls, you'll find a maze of narrow streets, ancient churches, and the famous Lala Mustafa Pasha Mosque (originally a cathedral). The walls themselves are a testament to the city's strategic importance throughout history.",
        visitTime: "1-2 hours",
        openingHours: "24/7 (Walls accessible at all times)",
        entranceFee: "Free to walk the walls",
        tip: "Start early at the walls before the midday heat. The view from the south wall at sunrise is spectacular, with the sun rising over the Mediterranean.",
      },
      {
        name: "Othello Castle",
        description:
          "This 14th-century citadel at the southern tip of the Famagusta walls takes its name from Shakespeare's play, set in Cyprus. The castle's impressive fortifications and sea views make it a highlight of the route. Inside, explore the military quarters and enjoy the stunning views of the Mediterranean. The castle's history is tied to the Venetian rule of Cyprus (1489-1571), and it served as a crucial defensive point against Ottoman attacks.",
        visitTime: "45 minutes",
        openingHours: "9:00 AM – 5:00 PM (Closed Mondays)",
        entranceFee: "€2",
        tip: "Climb to the top of the sea-facing wall for the best view. The dramatic silhouette of the castle against the sunset is one of Famagusta's iconic images.",
      },
      {
        name: "Ancient Salamis",
        description:
          "Just 6 kilometers north of Famagusta lies Salamis, one of the most impressive ancient cities in the Mediterranean. This Greco-Roman city was the ancient capital of Cyprus and dates back to the 11th century BC. Walk through the Roman Forum, the massive gymnasium with its marble columns, the theatre that held 15,000 spectators, and the Byzantine basilicas. The scale of the ruins is breathtaking, and the seaside location adds to the dramatic atmosphere.",
        visitTime: "2-3 hours",
        openingHours: "9:00 AM – 5:00 PM (Closed Mondays)",
        entranceFee: "€3",
        tip: "Bring a hat and water – there's little shade. The gymnasium and the Roman theatre are the most impressive sights. Visit in the late afternoon when the sun lights up the marble columns with a golden hue.",
      },
      {
        name: "St. Barnabas Monastery",
        description:
          "Located near Salamis, this 18th-century monastery is dedicated to Saint Barnabas, the founder of the Cypriot Orthodox Church. The monastery houses a museum with an impressive collection of icons, religious artifacts, and archaeological finds. The highlight is the Church of St. Barnabas, which contains the saint's tomb. The monastery's peaceful courtyard and colorful frescoes make it a serene stop on the route.",
        visitTime: "45 minutes – 1 hour",
        openingHours: "9:00 AM – 5:00 PM (Closed Mondays)",
        entranceFee: "€2",
        tip: "The icon collection in the museum is world-class – take time to admire the Byzantine-style religious paintings, some dating back to the 12th century.",
      },
      {
        name: "Varosha Viewpoint",
        description:
          "Varosha (Maras) is the abandoned quarter of Famagusta, closed to the public since 1974. This viewpoint offers a haunting perspective on the city's recent history. From the beachfront, you can see the high-rise hotels frozen in time, with Mediterranean waves lapping against the wall. The sight of the abandoned buildings and the contrast between the decaying structures and the beautiful sea makes for a powerful, thought-provoking experience.",
        visitTime: "20-30 minutes",
        openingHours: "24/7 (Viewing from designated areas)",
        entranceFee: "Free",
        tip: "The best time to visit is late afternoon when the setting sun creates dramatic shadows across the abandoned buildings. Photography is allowed from the designated viewing areas.",
      },
    ],
    practicalInfo: {
      bestSeason:
        "Spring (April-May) and Autumn (October-November) – comfortable temperatures for walking",
      parking:
        "Available at all stops – pay parking at Salamis and St. Barnabas",
      entranceFees:
        "€3 for Salamis, €2 for St. Barnabas, €2 for Othello Castle",
      fuelStations:
        "Multiple stations near the roundabout before the historic center",
      recommendedVehicle:
        "Sedan is fine for all stops – everything is accessible",
      restaurants:
        "Try 'Trikomo' restaurant in the old city for authentic Cypriot meze. Also, 'Petek' bakery for traditional pastries.",
      publicTransport: "Limited dolmus (minibus) services – car recommended",
    },
    insiderTip:
      "There's a lesser-known viewpoint on the top of the Famagusta city walls near the 'Sea Gate'. From here, you can simultaneously see the medieval walled city, the ruins of Salamis on the horizon, and the haunting skyline of Varosha in one frame – it's the perfect photo spot that most tourists walk right past.",
    seo: {
      title:
        "Famagusta History Loop – Ancient Salamis, Othello Castle & Varosha",
      description:
        "Explore 3,000 years of history on this loop through Famagusta's ancient ruins, medieval walls, Venetian castle, and the haunting views of Varosha's abandoned city.",
    },
  },
  {
    slug: "karpaz-nature-loop",
    title: "Karpaz Nature Loop",
    subtitle: "Wild donkeys, golden beaches, and untouched landscapes",
    theme: "Nature • Beaches • Wildlife",
    startFinish: "Dipkarpaz Village",
    heroImage: "/images/routes/karpaz-loop.jpg",
    duration: "1 Day",
    distance: "80 km",
    rating: 5,
    intro:
      "The Karpaz Peninsula is North Cyprus' last wilderness – a remote, unspoiled paradise where wild donkeys roam freely, golden beaches stretch for miles, and time seems to stand still. This loop takes you through the heart of the peninsula, from the traditional village of Dipkarpaz to the iconic Apostolos Andreas Monastery, past the wild donkey herds to Golden Beach, and along the northern coast. This is arguably the most scenic route in all of North Cyprus and offers a true escape from the modern world.",
    stops: [
      {
        name: "Dipkarpaz Village",
        description:
          "Start your journey in this traditional village, the largest settlement on the Karpaz Peninsula. Dipkarpaz (meaning 'flat hill') is known for its friendly locals, traditional Cypriot houses, and the beautiful 18th-century church of Agios Synesios. The village serves as the perfect base for exploring the peninsula. Visit the local market to stock up on supplies, and admire the unique architecture that blends Greek and Ottoman influences.",
        visitTime: "30-45 minutes",
        openingHours: "24/7 (Markets open during daytime)",
        entranceFee: "Free",
        tip: "Buy a traditional 'halloumi' cheese from the village dairy shop – it's made fresh daily and is one of the best in all of Cyprus. Also, try the locally produced olive oil.",
      },
      {
        name: "Golden Beach",
        description:
          "Often described as one of the most beautiful beaches in the Mediterranean, Golden Beach stretches for 3 kilometers of pristine, golden sand. The beach is backed by sand dunes and is largely undeveloped, preserving its natural beauty. The water is shallow, warm, and crystal clear, making it perfect for swimming. The beach is also a nesting site for sea turtles, adding to its protected status.",
        visitTime: "2-3 hours (or more for swimming)",
        openingHours: "24/7",
        entranceFee: "Free",
        tip: "Arrive as early as possible (before 9 AM) to experience the beach almost entirely to yourself – the tranquility is unmatched. Don't forget to bring plenty of water, sunscreen, and snacks, as there are no facilities.",
      },
      {
        name: "Wild Donkey Area",
        description:
          "The Karpaz Peninsula is famous for its herds of wild donkeys that roam freely across the landscape. These donkeys are descendants of animals used in agriculture and are now protected. You'll see them grazing, crossing the road, and interacting with each other. This is one of the few places in the world where you can encounter wild donkeys in their natural habitat. Visitors are advised to admire them from a distance and not to feed them.",
        visitTime: "15-30 minutes (or more if spotting)",
        openingHours: "24/7",
        entranceFee: "Free",
        tip: "The best places to spot donkeys are along the road from Dipkarpaz to the monastery, especially near the windmills around the 15-kilometer marker. Bring a zoom lens if you're interested in photography.",
      },
      {
        name: "Apostolos Andreas Monastery",
        description:
          "This iconic monastery sits at the very tip of the Karpaz Peninsula, at the northeastern point of Cyprus. The monastery is dedicated to St. Andrew and is a significant pilgrimage site for Orthodox Christians. The monastery's beautiful dome and bell tower are visible from miles away. Inside, you'll find a stunning iconostasis and the spring of St. Andrew, which is said to have healing properties.",
        visitTime: "1 hour",
        openingHours: "9:00 AM – 5:00 PM",
        entranceFee: "Free (donations welcomed)",
        tip: "Climb to the top of the bell tower for an unobstructed panoramic view of the peninsula and the Mediterranean Sea stretching to Turkey. The view at sunset is particularly breathtaking.",
      },
      {
        name: "Ayios Philon",
        description:
          "Located on the northern coast of the Karpaz Peninsula, Ayios Philon is the site of a 12th-century Byzantine church built on the remains of a 4th-century basilica. The ruins sit on a hilltop overlooking the Mediterranean, offering stunning coastal views. The church ruins, including the beautiful stonework and the partly intact apse, are fascinating to explore. The location is peaceful and off the main tourist path, making it a hidden gem.",
        visitTime: "30-45 minutes",
        openingHours: "24/7",
        entranceFee: "Free",
        tip: "The viewpoint from the church ruins offers one of the most spectacular sunset spots on the entire peninsula – bring a picnic and watch the sun sink into the sea.",
      },
    ],
    practicalInfo: {
      bestSeason:
        "Spring (April-June) or Autumn (September-October) – mild weather and fewer visitors",
      parking: "Parking available at Golden Beach and the monastery",
      entranceFees: "Free for all stops – donations welcomed at the monastery",
      fuelStations:
        "Last fuel station in Dipkarpaz – fill up before heading further",
      recommendedVehicle:
        "SUV recommended for the rougher roads beyond Dipkarpaz, but a sedan is manageable",
      restaurants:
        "Limited options – bring a picnic. There's a small cafe at the monastery and a few village restaurants in Dipkarpaz.",
      publicTransport:
        "Very limited – a private vehicle is absolutely essential",
    },
    insiderTip:
      "For the ultimate experience, take the 2-kilometer dirt track that leads west from the main road just before Golden Beach. It takes you to 'Lighthouse Beach', a completely wild, empty stretch of coast with crystal-clear water where you might be the only person for miles – it's the hidden gem of the Karpaz.",
    seo: {
      title:
        "Karpaz Nature Loop – Wild Donkeys, Golden Beach & Apostolos Andreas",
      description:
        "Experience the wild beauty of North Cyprus' Karpaz Peninsula with this loop of untouched beaches, free-roaming donkeys, and the iconic Apostolos Andreas Monastery.",
    },
  },
  {
    slug: "nicosia-old-city-loop",
    title: "Nicosia Old City Loop",
    subtitle: "Culture, architecture, and local life",
    theme: "Culture • Architecture • Local life",
    startFinish: "Büyük Han",
    heroImage: "/images/routes/nicosia-loop.jpg",
    duration: "Half Day",
    distance: "3 km",
    rating: 5,
    intro:
      "Nicosia, the world's last divided capital, offers a fascinating blend of cultures, religions, and architectural styles. This loop takes you through the heart of the old city, from the Ottoman-era Büyük Han to the Gothic Selimiye Mosque, past the Byzantine Bedesten, through the Venetian city walls, and into the bustling local market. Everything is within walking distance, making this the perfect city exploration route that can be completed in just a few hours, giving you a deep insight into the city's rich and layered history.",
    stops: [
      {
        name: "Büyük Han",
        description:
          "Start at this magnificent Ottoman caravanserai, built in 1572 by the first Ottoman governor of Cyprus, Mehmet Pasha. The Büyük Han (Great Inn) is the largest and best-preserved caravanserai in Cyprus. The two-story building features 68 rooms arranged around a central courtyard, which now houses cafes, artisan workshops, and exhibition spaces. The Han was used as a prison during the British colonial period and restored in the 1980s, making it a living monument to Nicosia's layered history.",
        visitTime: "45 minutes – 1 hour",
        openingHours: "8:00 AM – 8:00 PM (cafes until late)",
        entranceFee: "Free",
        tip: "Climb to the upper floor and walk around the arcade for an excellent view of the courtyard. The souvenir shops inside sell genuine local crafts, not mass-produced items – look for traditional hand-painted ceramics.",
      },
      {
        name: "Selimiye Mosque",
        description:
          "Originally a medieval Gothic cathedral (St. Sophia) built between 1209 and 1326, this building is the largest surviving Gothic structure in Cyprus. After the Ottoman conquest, it was converted into a mosque and two minarets were added. The blend of Gothic architecture with Islamic elements is stunning – tall pointed arches, rose windows, and arabesque decorations coexist in harmony. The mosque is still active and holds Friday prayers, making it a vivid example of Nicosia's multi-layered history.",
        visitTime: "30-45 minutes",
        openingHours: "9:00 AM – 6:00 PM (not during prayer times)",
        entranceFee: "Free (donations appreciated)",
        tip: "Remove your shoes before entering and dress modestly. Look up at the Gothic ceilings and try to spot the Islamic calligraphy mixed with Christian motifs – it's a unique blend you won't see anywhere else.",
      },
      {
        name: "Bedesten",
        description:
          "This Byzantine church, built in the 6th century, was converted into a covered market (Bedesten) during the Ottoman era. The building features a fascinating mix of Byzantine and Ottoman architecture. Today, it serves as a cultural center and exhibition space. The church's original apse and dome are still visible, while the Ottoman additions, including the market stalls, tell the story of Nicosia's multicultural past.",
        visitTime: "20-30 minutes",
        openingHours: "9:00 AM – 6:00 PM (exhibition hours)",
        entranceFee: "Free",
        tip: "Check if there's an ongoing exhibition – the acoustics in the building are incredible for classical music and cultural events.",
      },
      {
        name: "Kyrenia Gate",
        description:
          "This is one of the three original Venetian gates of the city walls, built during the 16th-century Venetian occupation. The gate is still intact and marks the entrance to the old city from the north. It features the characteristic Venetian style with a massive arch and stone fortifications. Walking through the gate feels like stepping back in time, entering a different century. The gate is also a reference point for the old city and the start of the northern district.",
        visitTime: "15-20 minutes",
        openingHours: "24/7",
        entranceFee: "Free",
        tip: "Take a moment to walk on the city walls near the gate for a panoramic view of both the old and new parts of the city.",
      },
      {
        name: "Bandabuliya Market",
        description:
          "This renovated covered market is Nicosia's main food market, where locals come to buy fresh produce, local cheeses, olives, and traditional sweets. The market has been a trading hub for centuries, and the recent restoration has revived its vibrant atmosphere. The market features a beautiful glass roof that floods the aisles with natural light, creating a lively and colorful shopping experience.",
        visitTime: "30-45 minutes",
        openingHours: "8:00 AM – 7:00 PM (closed on Sundays)",
        entranceFee: "Free",
        tip: "Try the freshly made halloumi cheese and the traditional Cypriot pastries. Also, sample the local olives and pick up some dried fruits for a snack. The market is also excellent for photography with its colorful stalls and bustling atmosphere.",
      },
    ],
    practicalInfo: {
      bestSeason:
        "Year-round – but spring and autumn are most comfortable for walking",
      parking:
        "Limited paid parking at the edges of the old city – park near the main entrance and walk",
      entranceFees: "All stops are free – donations welcomed at the mosque",
      fuelStations: "Fuel stations at the city entrance (outside the walls)",
      recommendedVehicle:
        "Park at the city entrance and explore on foot – all stops are within walking distance",
      restaurants:
        "Traditional Cypriot cuisine at 'Meze Evim' near Büyük Han, or 'Turkish Restaurant' in the market area.",
      publicTransport:
        "Minibuses (dolmus) from the city center – walking is the best option",
    },
    insiderTip:
      "There's a hidden courtyard behind the Bedesten called the 'Secret Garden' – a quiet, shady spot with a small cafe that serves the best Turkish coffee in the city. It's not marked on any map and most visitors walk right past it. Ask a local to point you in the right direction.",
    seo: {
      title:
        "Nicosia Old City Loop – Büyük Han, Selimiye Mosque & Local Markets",
      description:
        "Explore the world's last divided capital on this walking route through Nicosia's Ottoman caravanserai, Gothic mosque, Byzantine market, and vibrant local culture.",
    },
  },
  {
    slug: "guzelyurt-lefke-heritage",
    title: "Güzelyurt & Lefke Heritage Loop",
    subtitle: "Archaeology, ancient kingdoms, and rural Cyprus",
    theme: "Archaeology • Ancient kingdoms • Rural Cyprus",
    startFinish: "Güzelyurt Town Centre",
    heroImage: "/images/routes/guzelyurt-loop.jpg",
    duration: "1 Day",
    distance: "35 km",
    rating: 4,
    intro:
      "This loop takes you through the heart of North Cyprus' archaeological heritage, visiting some of the most important ancient sites on the island. From the ancient city of Soli to the hilltop palace of Vouni, and from the Byzantine church of St. Mamas to the fascinating museums of Güzelyurt, this route offers a deep dive into the ancient civilizations that flourished on the island. The journey also passes through the scenic countryside, with views of the mountains and the sea, providing a glimpse of rural Cypriot life.",
    stops: [
      {
        name: "Güzelyurt Town Centre",
        description:
          "Start your journey in the charming town of Güzelyurt ('Beautiful Place'), known for its citrus orchards and archaeological heritage. The town has a laid-back atmosphere and is the center of North Cyprus' citrus production. The main square features a fountain and is surrounded by cafes and shops. Güzelyurt is also home to the Güzelyurt Archaeology & Nature Museum, which houses important artifacts from the ancient sites in the region.",
        visitTime: "30-45 minutes",
        openingHours: "24/7 (Museums have set hours)",
        entranceFee: "Free to walk around town",
        tip: "Visit the town during the annual Citrus Festival in May or June, when the streets fill with music, dance, and the sweet aroma of orange blossoms.",
      },
      {
        name: "St. Mamas Church",
        description:
          "This 18th-century Orthodox church is dedicated to Saint Mamas, the patron saint of Cyprus. According to legend, Mamas was martyred in the 3rd century and his relics are kept here. The church is beautifully preserved, with stunning icons and a peaceful courtyard. The building itself blends Byzantine and Ottoman architectural influences, reflecting the island's complex history. The church is still active and holds regular services.",
        visitTime: "30-45 minutes",
        openingHours: "9:00 AM – 5:00 PM (Closed Mondays)",
        entranceFee: "Free (donations appreciated)",
        tip: "Look for the icon of St. Mamas with a lion – according to legend, he tamed a lion that was terrorizing the village, and the lion became his companion.",
      },
      {
        name: "Güzelyurt Archaeology & Nature Museum",
        description:
          "This modern museum houses a rich collection of artifacts from the ancient sites in the surrounding area, including Soli and Vouni. The museum's highlights include exquisite terracotta figurines, ancient pottery, bronze tools, and jewelry dating back to the Bronze Age. The museum also has a section dedicated to the natural history and geology of the region, providing context for the archaeological discoveries.",
        visitTime: "1 hour",
        openingHours: "9:00 AM – 5:00 PM (Closed Mondays)",
        entranceFee: "€2",
        tip: "The highlight is the collection of terracotta figurines from the 6th century BC – these are some of the finest examples of Cypro-Archaic art ever found on the island.",
      },
      {
        name: "Soli Ancient City",
        description:
          "Soli was one of the most important ancient city-kingdoms of Cyprus, established in the 11th century BC. The city flourished during the Roman period and continued into the Byzantine era. Today, the ruins include the impressive Roman theatre, the 6th-century basilica with its beautiful mosaics, the ancient agora, and the city walls. The theatre, which held up to 4,000 people, offers stunning views of the surrounding countryside and the sea.",
        visitTime: "1-1.5 hours",
        openingHours: "9:00 AM – 5:00 PM (Closed Mondays)",
        entranceFee: "€3",
        tip: "Don't miss the Roman theatre's mosaic floors – the geometric patterns are incredibly well-preserved. Climb to the top tier of the theatre for the best view of the basilica and the sea.",
      },
      {
        name: "Vouni Palace",
        description:
          "Perched on a hilltop overlooking the sea, the Palace of Vouni is one of the most spectacular ancient sites in North Cyprus. The palace was built in the 5th century BC and served as the residence of a local king allied with the Persians. The ruins include the royal quarters, a large courtyard, storage rooms, and a bathhouse. The views from the palace hilltop are breathtaking, spanning the entire coastline from Kyrenia to Lefke.",
        visitTime: "1-1.5 hours",
        openingHours: "9:00 AM – 5:00 PM (Closed Mondays)",
        entranceFee: "€3",
        tip: "Bring binoculars – on a clear day, you can see the Kyrenia Mountains and even the outline of the Karpaz Peninsula in the distance. The sunset from here is spectacular.",
      },
    ],
    practicalInfo: {
      bestSeason:
        "Spring (March-May) – the citrus orchards are in bloom and the weather is perfect",
      parking: "Available at all sites",
      entranceFees: "€3 per person per site (€2 for museums)",
      fuelStations: "Fuel stations in Güzelyurt town",
      recommendedVehicle:
        "Sedan is fine for all stops – roads are well-maintained",
      restaurants:
        "Try 'Morfou' restaurant in Güzelyurt for authentic Cypriot dishes. Also, small village restaurants in Lefke.",
      publicTransport: "Limited – a private vehicle is essential",
    },
    insiderTip:
      "After visiting Vouni Palace, take the road down to the coast at Gemikonağı. There's a hidden beach with spectacular views of the palace on the hill above and the crystal-clear water below. It's not marked on any map, but locals will point you in the right direction – it's worth the detour.",
    seo: {
      title:
        "Güzelyurt & Lefke Heritage Loop – Ancient Soli, Vouni Palace & Museums",
      description:
        "Journey through North Cyprus' archaeological heart on this route visiting the ancient city of Soli, the hilltop palace of Vouni, and the historic museums of Güzelyurt.",
    },
  },
];
