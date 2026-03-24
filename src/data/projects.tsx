import { Users, Trophy, Star, Globe } from "lucide-react";
import heroQiaf from "@/assets/projects/qiaf-2025/qiaf-card.jpg";
import heroYouth from "@/assets/projects/youth-platform/youth-card.jpg";
import heroSpace from "@/assets/projects/kssp/kssp-card.jpg";
import colorsDesert from "@/assets/events/colors-of-desert-2025.jpg";
import bharatVastram from "@/assets/projects/bharat-vastram/exhibition.jpg";
import astroFair from "@/assets/projects/astro-fair/astro-fair-card.jpg";
import cosmicCanvas from "@/assets/projects/cosmic-canvas/cosmic-card.jpg";
import kataraFootball from "@/assets/projects/katara-football-card/katara-football-card.jpg";

const colorsDesert2026Gallery = Object.values(
  import.meta.glob("@/assets/colors of desert 2026/*.jpg", {
    eager: true,
    import: "default",
  })
) as string[];

export interface Project {
  id: string;
  title: string;
  year: number;
  edition?: string;
  dates?: string;
  venue?: string;
  theme?: string;
  description: string;
  longDescription?: string;
  stats: {
    editions?: number;
    artists?: number;
    countries?: number;
    engagements?: number;
    youth_engaged?: number;
    focus_areas?: number;
    students?: number;
    agencies?: number;
    institutions?: number;
    duration_days?: number;
    hours?: number;
    presentations?: number;
    residencies?: number;
    exchanges?: number;
    ambassadors?: number;
    embassies?: number;
    workshops?: number;
    participants?: number;
    instructors?: number;
    years_active?: number;
  };
  heroImage: string;
  gallery?: string[];
  category: string;
  iconType: 'globe' | 'users' | 'star' | 'trophy';
  featured?: boolean; // For legacy projects carousel
  eventComponents?: string[];
  mediaCoverage?: {
    gulf_times?: string;
    qatar_news?: string;
    al_raya?: string;
    international?: string;
  };
  hashtags?: string[];
  focusAreas?: string[];
  programs?: string[];
  activities?: string[];
  partnerships?: string[];
  achievements?: string[];
  exchangeTypes?: string[];
  workshopTypes?: string[];
}

export const projects: Project[] = [
  {
    id: "qiaf-2025",
    title: "QIAF — Qatar International Art Festival",
    year: 2025,
    edition: "7th Edition",
    dates: "December 7-12, 2025",
    venue: "Katara Cultural Village, Building 12",
    theme: "Sustainability and Innovation in Art",
    description: "One of the world's most celebrated art gatherings, connecting 500+ artists from 80+ countries through 15 major event components.",
    longDescription: "The Qatar International Art Festival (QIAF) stands as one of the most prestigious cultural events in the Middle East, bringing together artists, curators, and art enthusiasts from over 80 countries. Since its inception in 2018, QIAF has grown from 232 artists from 64 countries to 500+ artists from 80+ countries, establishing itself as a global platform for cultural exchange, artistic innovation, and international collaboration. The 2025 edition features 15 major event components including VIP opening ceremonies, international exhibitions, master classes, live painting symposiums, sustainable fashion shows, cultural musical evenings, heritage tours, networking dinners, desert safari experiences, art auctions, innovation workshops, award ceremonies, and grand closing events.",
    stats: { 
      editions: 7, 
      artists: 500, 
      countries: 80, 
      engagements: 54603
    },
    heroImage: heroQiaf,
    category: "Arts & Culture",
    iconType: 'globe',
    featured: true,
    eventComponents: [
      "Red Carpet VIP Opening Ceremony",
      "International Painting & Sculpture Exhibitions", 
      "Art Conferences & Expert Panel Discussions",
      "Master Classes & Professional Workshops",
      "Live Painting Symposiums & Demonstrations",
      "Sustainable Fashion Shows",
      "Cultural Musical Evenings",
      "Qatar Cultural Heritage Tours",
      "High-Profile Networking Dinners",
      "Desert Safari Cultural Experiences",
      "Art Auctions & Sales",
      "Creative Innovation Workshops",
      "Award Felicitation Ceremonies",
      "Fashion & Art Integration Shows",
      "Grand Closing Ceremony"
    ],
    mediaCoverage: {
      gulf_times: "Regular QIAF coverage and partnership announcements",
      qatar_news: "Official government event coverage",
      al_raya: "Cultural sector reporting",
      international: "Global festival recognition"
    },
    hashtags: [
      "#qatarinternationalartfestival",
      "#kataraculturalvillage", 
      "#qatar",
      "#qiaf2025",
      "#qiaf",
      "#artfestival",
      "#art",
      "#artists",
      "#artandculture",
      "#mapsqatar"
    ]
  },
  {
    id: "youth-platform",
    title: "The YOUTH Platform - Coming Soon",
    year: 2025,
    description: "A comprehensive 3-day mega event empowering 500+ young innovators across 8 focus areas including technology, arts, culture, and STEM. Launching soon!",
    longDescription: "The YOUTH Platform is MAPS International WLL's flagship youth empowerment initiative, designed as a 3-day mega event that brings together 500+ young people from 50+ educational institutions. This comprehensive platform spans 8 critical focus areas: Innovation & Technology (coding, AI, robotics, startup competitions), Art & Creative Expression (live painting, digital art, sculpture, photography), Culture & Heritage (Qatari heritage, international exchange, language learning), Sports & Physical Wellness (sports innovation, fitness, team building), Education & Learning (study skills, research methodology, critical thinking), Music & Performance (live music competitions, music production, cultural exchange), Fashion & Design (sustainable fashion, traditional clothing innovation), and STEM & Scientific Research (science fairs, lab skills, space science, environmental research).",
    stats: { 
      focus_areas: 8, 
      youth_engaged: 500,
      institutions: 50,
      duration_days: 3,
      hours: 72
    },
    heroImage: heroYouth,
    category: "Youth & Innovation",
    iconType: 'users',
    featured: true,
    focusAreas: [
      "Innovation & Technology - Coding, AI, robotics, startup competitions",
      "Art & Creative Expression - Live painting, digital art, sculpture, photography", 
      "Culture & Heritage - Qatari heritage, international exchange, language learning",
      "Sports & Physical Wellness - Sports innovation, fitness, team building",
      "Education & Learning - Study skills, research methodology, critical thinking",
      "Music & Performance - Live music competitions, music production, cultural exchange",
      "Fashion & Design - Sustainable fashion, traditional clothing innovation",
      "STEM & Scientific Research - Science fairs, lab skills, space science, environmental research"
    ],
    programs: [
      "Startup Competitions - Young entrepreneur showcases",
      "Tech Innovation Labs - Hands-on technology workshops", 
      "Live Painting Competitions - Real-time artistic creation",
      "Science Fair Competitions - Research project showcases",
      "Cultural Music Exchange - International musical traditions"
    ]
  },
  {
    id: "kssp",
    title: "Katara Space Science Program",
    year: 2025,
    edition: "6th Edition",
    dates: "December 12-14, 2024",
    venue: "Al Thuraya Planetarium, Katara Cultural Village",
    theme: "Our Outer Solar System",
    description: "A groundbreaking 6-edition space science program that has engaged 3,000+ participants in just 6 months, featuring hands-on rocket launches, telescope building, and direct interaction with NASA and ISRO scientists.",
    longDescription: "The Katara Space Science Program (KSSP) stands as Qatar's most prestigious space science education initiative, hosted at the world-class Al Thuraya Planetarium in Katara Cultural Village. This revolutionary program has achieved unprecedented success, completing 6 editions in just 6 months (June-December 2024) and engaging over 3,000 participants from 100+ schools across 37+ nationalities. KSSP has become a cornerstone of Qatar's educational calendar, featuring direct collaboration with NASA, ISRO, Canadian Space Agency, and SANSA scientists. The program's unique hands-on approach includes rocket launching (18 rockets reaching 150+ meters), telescope building (300+ telescopes constructed), magnetometer production (highest globally), and solar observation sessions. Each edition focuses on specific themes like 'James Webb Space Telescope', 'Mars Exploration', and 'Deep Space Exploration', providing participants with authentic signed certificates and creating lasting inspiration for future space scientists.",
    stats: { 
      editions: 6, 
      total_participants: 3000,
      students: 551, 
      schools: 100,
      nationalities: 37,
      agencies: 4,
      institutions: 92,
      presentations: 25,
      rockets_launched: 18,
      telescopes_built: 300,
      months_active: 6
    },
    heroImage: heroSpace,
    category: "Education & STEM",
    iconType: 'star',
    featured: true,
    eventComponents: [
      "Rocket Launching Workshops (18 rockets, 150+ meters altitude)",
      "Telescope Building Sessions (300+ telescopes constructed)",
      "Solar Observation with Professional Equipment",
      "Magnetometer Production (Global record achievement)",
      "Stargazing Sessions with Expert Astrophotographers",
      "Scientific Presentations by NASA & ISRO Scientists",
      "Interactive Q&A Sessions with Space Experts",
      "Hands-on Planetary Surface Exploration",
      "Certificate Distribution with Scientist Signatures",
      "Cosmic Canvas Space Art Integration"
    ],
    activities: [
      "Rocket Launching - Preparation and launch of 18 rockets reaching 150+ meters",
      "Telescope Building - Construction of 300+ scientific refractor telescopes",
      "Solar Observation - Professional telescope sessions exploring celestial bodies",
      "Magnetometer Production - Creating instruments for Earth's magnetic field detection",
      "Stargazing Sessions - Moon, planets, and constellation observation",
      "Scientific Presentations - Direct interaction with NASA and ISRO scientists",
      "Interactive Workshops - Hands-on space science experiments",
      "Quiz Competitions - Dynamic Q&A sessions with prizes and recognition",
      "Certificate Distribution - Authentic signed certificates from esteemed scientists",
      "Career Guidance - Professional development in space sciences"
    ],
    partnerships: [
      "NASA - Dr. Henry Throop (Planetary Science Division), Jim Adams (Former Chief Technologist)",
      "ISRO - Prof. PV Venkitakrishnan, Dr. Brinda V (Distinguished Scientists)",
      "Canadian Space Agency - International cooperation and expertise sharing",
      "SANSA - Dr. Stefan Lotz (Geomagnetic Scientist), Ms. Anelda Jonker (STEM Specialist)",
      "University of Southern California - Dr. Essam Heggy (Space & Radar Scientist)",
      "Planetary Science Institute - Dr. Kirby Daniel Runyon, Dr. Amanda A Sickafoose"
    ],
    achievements: [
      "Appreciation Award from Al Thuraya Planetarium for Innovation & Science",
      "3,000+ participants engaged in just 6 months",
      "Passport Book system introduced for student identification",
      "Global record in magnetometer production",
      "Cornerstone event in Qatar's educational calendar",
      "37+ nationalities represented across all editions",
      "100+ schools and institutions participating",
      "5 Cosmic Canvas Space Art Exhibitions integrated",
      "Astro Fair 2024 successfully launched",
      "Growing Qatari youth interest in space sciences documented"
    ],
    mediaCoverage: {
      gulf_times: "Regular KSSP coverage and scientific achievements",
      qatar_news: "Official government event coverage and recognition",
      al_raya: "Educational sector reporting and student engagement",
      international: "NASA and ISRO collaboration recognition"
    },
    hashtags: [
      "#kataraspacescienceprogramme",
      "#katarassp",
      "#althurayaplanetarium",
      "#kataraqatar",
      "#spacescience",
      "#nasa",
      "#isro",
      "#stem",
      "#astronomy",
      "#mapsqatar"
    ],
    themes: [
      "Is there Weather in Space? (June 2024)",
      "Deep Space Exploration & Artemis Program (July 2024)", 
      "James Webb Space Telescope (August 2024)",
      "Mars Exploration & Climate Research (September 2024)",
      "Astro Fair Innovation & STEM (October 2024)",
      "Our Outer Solar System (December 2024)"
    ]
  },
      {
        id: "colours-of-desert",
        title: "Colours of Desert",
        year: 2026,
        edition: "8th Edition",
        dates: "February 22 - April 30, 2026",
        venue: "Pullman Doha West Bay",
        theme: "Cultural Reflection",
        description: "MAPS International WLL inaugurates its Art Gallery at Pullman Doha West Bay with the 8th Edition of Colours of Desert 2026 - A curated gallery experience celebrating cultural reflection through professional paintings and sculptures.",
        longDescription: "MAPS International WLL proudly inaugurates its Art Gallery hosted at Pullman Doha West Bay by bringing the 8th Edition of Colours of Desert 2026. Theme: Cultural Reflection - 'Every grain of sand holds a story - Timeless sands. Timeless stories. Timeless art. We let ART tell it.' The 8th Edition evolves into a refined, curated gallery experience, presenting selected professional paintings and sculptures that explore identity, heritage, and contemporary expression. The Gallery showcase prioritizes artistic depth, aesthetic sophistication, and meaningful cultural dialogue through immersive and thoughtfully designed workshops. Join us where art becomes reflection, and culture becomes conversation.",
        stats: { 
          editions: 8, 
          artists: 200, 
          exhibitions: 30,
          duration_days: 68,
          workshops: 15
        },
        heroImage: colorsDesert,
        gallery: colorsDesert2026Gallery,
        category: "Art Gallery & Heritage",
        iconType: 'trophy',
        featured: true,
        eventComponents: [
          "Art Gallery Inauguration at Pullman Doha West Bay",
          "Professional Paintings Exhibition",
          "Sculpture Showcase",
          "Immersive Art Workshops",
          "Cultural Reflection Dialogues",
          "Heritage & Contemporary Expression Integration",
          "Identity Exploration Through Art",
          "Aesthetic Sophistication Presentations",
          "Artist Networking & Collaboration Sessions",
          "Gallery Tours & Curator Talks"
        ],
        activities: [
          "Curated Gallery Experience - Selected professional artworks exploring cultural themes",
          "Painting Exhibition - Contemporary and traditional artistic expressions",
          "Sculpture Showcase - Three-dimensional cultural narratives",
          "Immersive Workshops - Hands-on creative sessions with professional artists",
          "Cultural Dialogue Sessions - Meaningful conversations about identity and heritage",
          "Artist Talks - Insights into creative processes and cultural inspirations",
          "Gallery Tours - Guided explorations of exhibited works",
          "Networking Events - Connecting artists, collectors, and cultural enthusiasts"
        ],
        partnerships: [
          "Pullman Doha West Bay - Main venue partner and gallery host",
          "Qatar Tourism Authority - Cultural promotion and support",
          "Local Art Galleries - Collaboration and artist selection",
          "International Art Networks - Global artist participation"
        ],
        achievements: [
          "Inaugural MAPS International Art Gallery at Pullman Doha West Bay",
          "8th Edition milestone achievement",
          "Evolution to curated gallery experience format",
          "Focus on professional artistic depth and sophistication",
          "Integration of cultural reflection and contemporary expression",
          "Extended 68-day gallery showcase",
          "Meaningful cultural dialogue platform creation"
        ],
        hashtags: [
          "#coloursofdesert",
          "#coloursofdesert2026",
          "#culturalreflection",
          "#pullmanwestbay",
          "#mapsartgallery",
          "#qatarart",
          "#desertart",
          "#timelessart",
          "#mapsqatar",
          "#dohaartgallery"
        ]
      },
      {
        id: "bharat-vastram",
        title: "Bharat Vastram",
        year: 2019,
        edition: "India Qatar Year of Culture 2019",
        dates: "2019",
        venue: "VCUarts Qatar, Qatar Foundation",
        theme: "भारत वस्त्रम - Colors of India in Synthesis with Qatar",
        description: "A spectacular cultural fashion showcase featuring 29 State Ambassadors representing India's diverse heritage through traditional attire, organized as part of India Qatar Year of Culture 2019.",
        longDescription: "Bharat Vastram (भारत वस्त्रम - Vastram meaning 'Attire' in Sanskrit) was a groundbreaking cultural event that brought together 29 State Ambassadors from the Indian community in Qatar, each representing their respective Indian state through traditional clothing, accessories, and fashion culture. Organized by MAPS International WLL in collaboration with Qatar Foundation as part of the India Qatar Year of Culture 2019, this event showcased the incredible diversity and unity of India's cultural heritage. The event featured meticulously choreographed performances, traditional music, cinematography, and stunning visual presentations that mesmerized over 200 elite dignitaries from Qatar's multicultural community. Each State Ambassador represented their region's unique identity through authentic traditional costumes, creating a living tapestry of India's rich cultural legacy in the heart of Doha.",
        stats: { 
          state_ambassadors: 29,
          audience: 200,
          states_represented: 29,
          cultural_year: 2019,
          organizations: 3,
          months_planning: 6
        },
        heroImage: bharatVastram,
        category: "Fashion & Heritage",
        iconType: 'trophy',
        featured: false,
        eventComponents: [
          "29 State Ambassador Fashion Show",
          "Traditional Music & Cinematography",
          "Cultural Choreography & Ramp Walk",
          "Exclusive Invitation Cards Design",
          "Informative Colorful Booklets",
          "Traditional Costume & Accessory Showcase",
          "Multi-Cultural Audience Engagement",
          "Qatar Foundation Partnership",
          "VCUarts Qatar Venue Collaboration",
          "India Qatar Cultural Year Integration"
        ],
        activities: [
          "State Ambassador Selection & Training - 29 representatives from Indian community",
          "Traditional Costume Curation - Authentic attire from all 29 Indian states",
          "Cultural Choreography - Professional ramp walk and performance training",
          "Music & Cinematography - Traditional Indian music and visual storytelling",
          "Event Design & Branding - Exclusive invitation cards and informative booklets",
          "Cultural Heritage Presentation - Showcasing India's diverse traditions",
          "Multi-Cultural Engagement - Connecting Indian and Qatari communities",
          "Professional Photography - Documenting the cultural celebration"
        ],
        partnerships: [
          "Qatar Foundation - Main organizing partner and venue support",
          "VCUarts Qatar - Venue collaboration and cultural integration",
          "Embassy of India, Doha - Cultural year coordination and support",
          "Indian Community Qatar - State Ambassador participation and cultural representation"
        ],
        achievements: [
          "Successfully represented all 29 Indian states through authentic cultural ambassadors",
          "Mesmerized 200+ elite dignitaries from Qatar's multicultural community",
          "Part of official India Qatar Year of Culture 2019 celebrations",
          "Showcased India's cultural diversity and unity in Qatar",
          "Created lasting cultural bridge between India and Qatar",
          "Professional event execution with meticulous attention to detail",
          "Received widespread appreciation for cultural authenticity",
          "Established MAPS International WLL as cultural event specialist"
        ],
        mediaCoverage: {
          gulf_times: "Cultural event coverage and community appreciation",
          qatar_news: "India Qatar Cultural Year official coverage",
          embassy_publication: "Featured in Embassy of India souvenir publication",
          community_media: "Extensive coverage in Indian community media"
        },
        hashtags: [
          "#bharatvastram",
          "#indiaqatarculturalyear2019",
          "#qatarfoundation",
          "#vcuartsqatar",
          "#indianheritage",
          "#culturalfashion",
          "#mapsqatar",
          "#traditionalattire",
          "#culturalbridge",
          "#doha"
        ],
        culturalSignificance: [
          "भारत वस्त्रम - Sanskrit meaning 'Attire of India'",
          "Represented all 29 Indian states with authentic traditional costumes",
          "Showcased India's unity in diversity through cultural expression",
          "Created cultural bridge between Indian and Qatari communities",
          "Preserved and promoted traditional Indian textile heritage",
          "Demonstrated professional cultural event management capabilities"
        ],
        testimonials: [
          "BHARAT VASTRAM - an event to be cherished!! It was a great experience working with you Rashmi and team! Representing KARNATAKA was indeed a proud moment for me!! (Costume represents COORG - The Scotland of India)",
          "The diverse traditions and rich heritage from each of the 29 states of India was witnessed by over 200 elite women. The Audience was mesmerized by the stunning colours and breathtaking performance of ramp walk by each participant.",
          "We have received many appreciations for work and with words of praise on how beautiful to see the real attires of different States of India."
        ]
      },
      {
        id: "astro-fair",
        title: "Astro Fair",
        year: 2024,
        description: "Astronomical workshops and stargazing sessions bringing space science education to the community",
        longDescription: "Astro Fair is a comprehensive astronomy education program that brings the wonders of space science directly to the community. Through hands-on workshops, stargazing sessions, and interactive learning experiences, participants explore the cosmos and develop a deeper understanding of astronomy. The program combines theoretical knowledge with practical observation, making space science accessible and engaging for all ages.",
        stats: { sessions: 12, participants: 300, workshops: 8 },
        heroImage: astroFair,
        category: "Science & Education",
        iconType: 'star',
        featured: false
      },
      {
        id: "cosmic-canvas",
        title: "Cosmic Canvas",
        year: 2024,
        description: "Art & astronomy fusion where desert sky inspiration meets cultural heritage",
        longDescription: "Cosmic Canvas is a unique artistic initiative that bridges the gap between astronomy and cultural expression. This innovative program brings together artists, astronomers, and cultural enthusiasts to explore the cosmos through creative interpretation. Participants engage in art creation inspired by celestial phenomena, desert sky observations, and cultural heritage, resulting in stunning artworks that celebrate the intersection of science, art, and tradition.",
        stats: { sessions: 15, participants: 400, artworks: 100 },
        heroImage: cosmicCanvas,
        category: "Science & Art",
        iconType: 'star',
        featured: false
      },
      {
        id: "katara-football",
        title: "Katara Football",
        year: 2024,
        venue: "Katara Cultural Village",
        description: "Community football and cultural engagement at Katara—bringing youth, families, and international visitors together through sport in Qatar’s flagship cultural district.",
        longDescription: "Katara Football is a MAPS International WLL initiative rooted in Katara Cultural Village, combining the energy of the game with cultural programming. The project supports youth participation, community tournaments, and cross-cultural connection—aligning athletic excellence with Katara’s mission as a hub for arts, heritage, and dialogue. Activities emphasize teamwork, inclusion, and visibility for Qatar’s sporting and cultural landscape.",
        stats: {
          focus_areas: 3,
          participants: 250,
          workshops: 6
        },
        heroImage: kataraFootball,
        category: "Sports & Culture",
        iconType: 'trophy',
        featured: false,
        activities: [
          "Youth and community football sessions",
          "Tournaments and friendly matches at Katara",
          "Cultural tie-ins with Katara’s arts and heritage programming",
          "Team-building and inclusion-focused outreach"
        ],
        partnerships: [
          "Katara Cultural Village",
          "Local schools and youth organizations"
        ],
        hashtags: [
          "#katara",
          "#kataraqatar",
          "#football",
          "#youthsports",
          "#mapsqatar"
        ]
      },
];

// QIAF Editions Data
export const qiafEditions = [
  {
    year: 2019,
    edition: "2nd Edition",
    dates: "October 30 - November 5, 2019",
    artists: 232,
    countries: 64,
    theme: "Cultural Exchange Through Art",
    highlights: ["International exhibitions", "Artist residencies", "Cultural workshops"]
  },
  {
    year: 2021,
    edition: "3rd Edition", 
    dates: "October 24-28, 2021",
    artists: 250,
    countries: 65,
    theme: "Art in the Digital Age",
    highlights: ["Virtual exhibitions", "Online masterclasses", "Digital art showcase"]
  },
  {
    year: 2022,
    edition: "4th Edition",
    dates: "November 15-20, 2022", 
    artists: 300,
    countries: 67,
    theme: "Sustainability in Art",
    highlights: ["Eco-friendly materials", "Sustainable practices", "Environmental awareness"]
  },
  {
    year: 2023,
    edition: "5th Edition",
    dates: "December 5-10, 2023",
    artists: 350,
    countries: 68,
    theme: "Innovation and Technology",
    highlights: ["AI in art", "Digital installations", "Tech workshops"]
  },
  {
    year: 2024,
    edition: "6th Edition",
    dates: "December 8-13, 2024",
    artists: 380,
    countries: 69,
    theme: "Cultural Heritage and Modernity",
    highlights: ["Heritage preservation", "Modern interpretations", "Cultural dialogue"]
  },
  {
    year: 2025,
    edition: "7th Edition",
    dates: "December 7-12, 2025",
    artists: 500,
    countries: 80,
    theme: "Sustainability and Innovation in Art",
    highlights: ["15 major components", "VIP ceremonies", "International recognition"]
  }
];

// Helper function to get project by ID
export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

// Helper function to get featured projects (for legacy carousel)
export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

// Helper function to render icon based on iconType
export const renderIcon = (iconType: Project['iconType'], className: string = "w-6 h-6") => {
  switch (iconType) {
    case 'globe':
      return <Globe className={className} />;
    case 'users':
      return <Users className={className} />;
    case 'star':
      return <Star className={className} />;
    case 'trophy':
      return <Trophy className={className} />;
    default:
      return <Globe className={className} />;
  }
};