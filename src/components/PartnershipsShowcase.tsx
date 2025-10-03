import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { 
  Building, 
  Globe, 
  Award, 
  Users, 
  Calendar, 
  ExternalLink,
  Filter,
  Star,
  CheckCircle,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Link as LinkIcon,
  Crown,
  Heart,
  Zap,
  Target,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause
} from "lucide-react";

// Import partnership images
import ministryCulture from "@/assets/partnerships/ministries/culture/partnership.jpg";
import ministryEducation from "@/assets/partnerships/ministries/education/collaboration.jpg";
import ministryYouth from "@/assets/partnerships/ministries/youth-sports/partnership.jpg";
import ministryForeign from "@/assets/partnerships/ministries/foreign-affairs/diplomacy.jpg";
import kataraCultural from "@/assets/partnerships/government-bodies/katara-cultural-village/collaboration.jpg";
import qatarLibrary from "@/assets/partnerships/government-bodies/qatar-national-library/programs.jpg";
import educationAboveAll from "@/assets/partnerships/ngos/education-above-all/programs.jpg";
import qatarCharity from "@/assets/partnerships/ngos/qatar-charity/initiatives.jpg";
import reachOutAsia from "@/assets/partnerships/ngos/reach-out-asia/programs.jpg";
import alFakhoora from "@/assets/partnerships/ngos/al-fakhoora/education.jpg";
import nationalMuseum from "@/assets/partnerships/cultural-institutions/national-museum-qatar/partnership.jpg";
import fireStateArtists from "@/assets/partnerships/cultural-institutions/fire-state-artists/residency.jpg";
import qatarPhilharmonic from "@/assets/partnerships/cultural-institutions/qatar-philharmonic/collaboration.jpg";

interface Partnership {
  id: string;
  name: string;
  type: "Government" | "Embassy" | "NGO" | "Cultural";
  logo: string;
  description: string;
  website?: string;
  location: string;
  established: string;
  status: "Active" | "Long-term" | "Strategic";
  achievements: string[];
  contact?: {
    email?: string;
    phone?: string;
  };
  featured: boolean;
  impact: {
    projects: number;
    countries: number;
    years: number;
  };
}

// Modern Bento Card Component
const BentoCard = ({ 
  partnership, 
  onImageLoad, 
  getCardSize 
}: { 
  partnership: Partnership; 
  onImageLoad: (id: string, img: HTMLImageElement) => void;
  getCardSize: (partnership: Partnership) => string;
}) => {
  const cardSize = getCardSize(partnership);
  
      const getSizeClasses = () => {
        switch (cardSize) {
          case 'wide':
            return 'w-full h-3/5'; // Landscape - full width, 60% height for better proportions
          case 'tall':
            return 'w-3/5 h-full'; // Portrait - 60% width, full height for better proportions
          default:
            return 'w-4/5 h-4/5'; // Square-ish - 80% of both dimensions for better fit
        }
      };

  return (
    <div className="relative w-full h-full p-8">
      <div className={`mx-auto ${getSizeClasses()} relative group`}>
        {/* Glassmorphism Background */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl group-hover:shadow-3xl transition-all duration-500" />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-magenta/20 via-transparent to-teal/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-gradient-to-r from-magenta to-pink-500 shadow-lg">
                <Building className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black group-hover:text-magenta transition-colors">
                  {partnership.name}
                </h3>
                <p className="text-gray-600 font-medium">{partnership.status}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-magenta">{partnership.impact.projects}</div>
              <div className="text-sm text-gray-600">Projects</div>
            </div>
          </div>

              {/* Image Section */}
              <div className="flex-1 relative mx-6 mb-6">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
                  <img
                    src={partnership.logo}
                    alt={partnership.name}
                    className="group-hover:scale-105 transition-transform duration-700"
                    onLoad={(e) => onImageLoad(partnership.id, e.target as HTMLImageElement)}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const placeholder = target.nextElementSibling as HTMLElement;
                      if (placeholder) placeholder.style.display = 'flex';
                    }}
                    style={{
                      width: 'auto',
                      height: 'auto',
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      objectPosition: 'center'
                    }}
                  />
                  {/* Fallback placeholder when image fails to load */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-magenta/20 to-teal/20"
                    style={{ display: 'none' }}
                  >
                    <div className="text-center">
                      <Building className="w-16 h-16 text-magenta/60 mx-auto mb-2" />
                      <p className="text-magenta/80 font-medium">{partnership.name}</p>
                      <p className="text-magenta/60 text-sm">Logo Coming Soon</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                  
                  {/* Floating Stats */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-bold text-magenta shadow-sm">
                      {partnership.impact.countries} Countries
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-bold text-teal shadow-sm">
                      {partnership.impact.years} Years
                    </div>
                  </div>
                </div>
              </div>

          {/* Description */}
          <div className="px-6 pb-6">
            <p className="text-gray-700 leading-relaxed mb-4 line-clamp-3">
              {partnership.description}
            </p>
            
            {/* Location & Date */}
            <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{partnership.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Since {partnership.established}</span>
              </div>
            </div>

            {/* Action Button */}
            <div className="flex items-center justify-between">
              <button className="px-6 py-3 bg-gradient-to-r from-magenta to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-magenta/25 transition-all duration-300 hover:scale-105">
                Learn More
              </button>
              
              {partnership.website && (
                <a
                  href={partnership.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 hover:bg-magenta hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Animated Border */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-magenta via-teal to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
      </div>
    </div>
  );
};

const PartnershipsShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedType, setSelectedType] = useState("Government");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [imageDimensions, setImageDimensions] = useState<{[key: string]: {width: number, height: number}}>({});
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const slideshowRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  // Real partnership data based on your provided information
  const partnerships: Partnership[] = [
    // Government Ministries
    {
      id: "1",
      name: "Ministry of Culture",
      type: "Government",
      logo: ministryCulture,
      description: "Strategic partnership for cultural initiatives and international arts programs.",
      location: "Doha, Qatar",
      established: "2018",
      status: "Strategic",
      achievements: [
        "Cultural policy development",
        "International arts programs",
        "QIAF endorsement"
      ],
      featured: true,
      impact: { projects: 25, countries: 15, years: 6 }
    },
    {
      id: "2",
      name: "Ministry of Education",
      type: "Government",
      logo: ministryEducation,
      description: "Educational outreach programs and youth development initiatives.",
      location: "Doha, Qatar",
      established: "2019",
      status: "Active",
      achievements: [
        "Educational outreach programs",
        "Youth development initiatives",
        "Curriculum integration"
      ],
      featured: false,
      impact: { projects: 20, countries: 10, years: 5 }
    },
    {
      id: "3",
      name: "Ministry of Youth and Sports",
      type: "Government",
      logo: ministryYouth,
      description: "Youth empowerment through arts and cultural sports programs.",
      location: "Doha, Qatar",
      established: "2020",
      status: "Active",
      achievements: [
        "Youth empowerment programs",
        "Cultural sports initiatives",
        "Community engagement"
      ],
      featured: false,
      impact: { projects: 18, countries: 8, years: 4 }
    },
    {
      id: "4",
      name: "Ministry of Foreign Affairs",
      type: "Government",
      logo: ministryForeign,
      description: "Cultural diplomacy and international cultural exchange programs.",
      location: "Doha, Qatar",
      established: "2021",
      status: "Strategic",
      achievements: [
        "Cultural diplomacy initiatives",
        "International exchange programs",
        "Global outreach"
      ],
      featured: false,
      impact: { projects: 15, countries: 20, years: 3 }
    },
    // Embassy Partnerships
    {
      id: "5",
      name: "Embassy of India",
      type: "Embassy",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/200px-Flag_of_India.svg.png",
      description: "Cultural collaboration with Embassy of India featuring traditional celebrations and art exhibitions.",
      location: "Doha, Qatar",
      established: "2019",
      status: "Long-term",
      achievements: [
        "Cultural exchange programs",
        "Traditional celebrations",
        "Art exhibitions"
      ],
      featured: true,
      impact: { projects: 12, countries: 1, years: 5 }
    },
    {
      id: "6",
      name: "Embassy of France",
      type: "Embassy",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/200px-Flag_of_France.svg.png",
      description: "Franco-Qatari cultural exchange programs and artistic collaboration.",
      location: "Doha, Qatar",
      established: "2020",
      status: "Active",
      achievements: [
        "Arts & cultural exchange",
        "Franco-Qatari programs",
        "Artistic collaboration"
      ],
      featured: false,
      impact: { projects: 10, countries: 1, years: 4 }
    },
    {
      id: "6b",
      name: "Embassy of Spain",
      type: "Embassy",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/200px-Flag_of_Spain.svg.png",
      description: "Spanish cultural programs featuring traditional performances and artistic collaborations.",
      location: "Doha, Qatar",
      established: "2021",
      status: "Active",
      achievements: [
        "Cultural performances",
        "Traditional performances",
        "Artistic collaborations"
      ],
      featured: false,
      impact: { projects: 8, countries: 1, years: 3 }
    },
    {
      id: "6c",
      name: "Embassy of Germany",
      type: "Embassy",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/200px-Flag_of_Germany.svg.png",
      description: "German contemporary art exhibitions and cultural educational programs.",
      location: "Doha, Qatar",
      established: "2022",
      status: "Active",
      achievements: [
        "Contemporary arts",
        "Art exhibitions",
        "Cultural education"
      ],
      featured: false,
      impact: { projects: 6, countries: 1, years: 2 }
    },
    {
      id: "6d",
      name: "Embassy of UK",
      type: "Embassy",
      logo: "https://flagcdn.com/w320/gb.png",
      description: "British cultural heritage programs and literary festival collaborations.",
      location: "Doha, Qatar",
      established: "2020",
      status: "Long-term",
      achievements: [
        "Heritage & literature",
        "Cultural heritage programs",
        "Literary festivals"
      ],
      featured: false,
      impact: { projects: 12, countries: 1, years: 4 }
    },
    {
      id: "6e",
      name: "Embassy of Austria",
      type: "Embassy",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/200px-Flag_of_Austria.svg.png",
      description: "Austrian cultural programs featuring classical music and artistic traditions.",
      location: "Doha, Qatar",
      established: "2022",
      status: "Active",
      achievements: [
        "Classical arts & music",
        "Classical music programs",
        "Artistic traditions"
      ],
      featured: false,
      impact: { projects: 5, countries: 1, years: 2 }
    },
    {
      id: "6f",
      name: "Embassy of Georgia",
      type: "Embassy",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/200px-Flag_of_Georgia.svg.png",
      description: "Georgian cultural heritage programs and traditional arts exchange.",
      location: "Doha, Qatar",
      established: "2023",
      status: "Active",
      achievements: [
        "Heritage & traditional arts",
        "Cultural heritage programs",
        "Traditional arts exchange"
      ],
      featured: false,
      impact: { projects: 4, countries: 1, years: 1 }
    },
    {
      id: "6g",
      name: "Embassy of Liberia",
      type: "Embassy",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Flag_of_Liberia.svg/200px-Flag_of_Liberia.svg.png",
      description: "Liberian cultural exchange programs and community engagement initiatives.",
      location: "Doha, Qatar",
      established: "2023",
      status: "Active",
      achievements: [
        "Community & cultural exchange",
        "Cultural exchange programs",
        "Community engagement"
      ],
      featured: false,
      impact: { projects: 3, countries: 1, years: 1 }
    },
    {
      id: "7",
      name: "Embassy of Italy",
      type: "Embassy",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/200px-Flag_of_Italy.svg.png",
      description: "Italian Renaissance art programs and cultural heritage celebration.",
      location: "Doha, Qatar",
      established: "2021",
      status: "Active",
      achievements: [
        "Heritage & arts programs",
        "Italian Renaissance art",
        "Cultural heritage"
      ],
      featured: false,
      impact: { projects: 8, countries: 1, years: 3 }
    },
    // Government Bodies
    {
      id: "8",
      name: "Qatar National Library",
      type: "Government",
      logo: qatarLibrary,
      description: "Literary and cultural programming in Qatar's premier library space.",
      location: "Doha, Qatar",
      established: "2020",
      status: "Active",
      achievements: [
        "Literary programs",
        "Cultural programming",
        "Library partnerships"
      ],
      featured: false,
      impact: { projects: 12, countries: 5, years: 4 }
    },
    // NGOs
    {
      id: "9",
      name: "Education Above All",
      type: "NGO",
      logo: educationAboveAll,
      description: "Global education initiatives through cultural arts programming.",
      location: "Doha, Qatar",
      established: "2020",
      status: "Strategic",
      achievements: [
        "Educational outreach",
        "Global education initiatives",
        "Cultural arts programming"
      ],
      featured: true,
      impact: { projects: 15, countries: 20, years: 4 }
    },
    {
      id: "9b",
      name: "Qatar Charity",
      type: "NGO",
      logo: qatarCharity,
      description: "Community-focused cultural and educational development programs.",
      location: "Doha, Qatar",
      established: "2019",
      status: "Long-term",
      achievements: [
        "Community development",
        "Educational programs",
        "Community-focused initiatives"
      ],
      featured: false,
      impact: { projects: 22, countries: 15, years: 5 }
    },
    {
      id: "9c",
      name: "Reach Out to Asia",
      type: "NGO",
      logo: reachOutAsia,
      description: "Cross-cultural programs promoting Asian heritage and understanding.",
      location: "Doha, Qatar",
      established: "2021",
      status: "Active",
      achievements: [
        "Asian cultural exchange",
        "Cross-cultural programs",
        "Asian heritage promotion"
      ],
      featured: false,
      impact: { projects: 10, countries: 8, years: 3 }
    },
    {
      id: "9d",
      name: "Al Fakhoora",
      type: "NGO",
      logo: alFakhoora,
      description: "Educational support and cultural development for underserved communities.",
      location: "Doha, Qatar",
      established: "2022",
      status: "Active",
      achievements: [
        "Educational support",
        "Cultural development",
        "Underserved communities"
      ],
      featured: false,
      impact: { projects: 6, countries: 5, years: 2 }
    },
    // Cultural Institutions
    {
      id: "10",
      name: "Katara Cultural Village",
      type: "Cultural",
      logo: kataraCultural,
      description: "Premier cultural destination hosting major art exhibitions and cultural events.",
      location: "Doha, Qatar",
      established: "2018",
      status: "Strategic",
      achievements: [
        "QIAF venue partnership",
        "Art exhibition collaborations",
        "Cultural event hosting"
      ],
      featured: true,
      impact: { projects: 40, countries: 30, years: 6 }
    },
    {
      id: "12b",
      name: "National Museum of Qatar",
      type: "Cultural",
      logo: nationalMuseum,
      description: "Qatari heritage preservation and cultural education initiatives.",
      location: "Doha, Qatar",
      established: "2021",
      status: "Active",
      achievements: [
        "Heritage preservation",
        "Cultural education",
        "Qatari heritage"
      ],
      featured: false,
      impact: { projects: 6, countries: 2, years: 3 }
    },
    {
      id: "12c",
      name: "Fire State Artists in Residence",
      type: "Cultural",
      logo: fireStateArtists,
      description: "International artist residency programs and cultural exchange.",
      location: "Doha, Qatar",
      established: "2019",
      status: "Long-term",
      achievements: [
        "Artist residency",
        "International programs",
        "Cultural exchange"
      ],
      featured: false,
      impact: { projects: 15, countries: 10, years: 5 }
    },
    {
      id: "12d",
      name: "Qatar Philharmonic Orchestra",
      type: "Cultural",
      logo: qatarPhilharmonic,
      description: "Musical collaborations and cross-cultural artistic performances.",
      location: "Doha, Qatar",
      established: "2022",
      status: "Active",
      achievements: [
        "Musical arts",
        "Musical collaborations",
        "Cross-cultural performances"
      ],
      featured: false,
      impact: { projects: 10, countries: 5, years: 2 }
    },
  ];

  const partnershipTypes = ["Government", "Embassy", "NGO", "Cultural"];

  const filteredPartnerships = partnerships.filter(partnership => {
    return partnership.type === selectedType;
  });

  // Slideshow auto-play logic
  useEffect(() => {
    if (isPlaying) {
      slideshowRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % filteredPartnerships.length);
      }, 3000);
    } else {
      if (slideshowRef.current) {
        clearInterval(slideshowRef.current);
      }
    }

    return () => {
      if (slideshowRef.current) {
        clearInterval(slideshowRef.current);
      }
    };
  }, [isPlaying, filteredPartnerships.length]);

  // Reset slide when type changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [selectedType]);

  // Image dimension detection
  const handleImageLoad = (partnershipId: string, img: HTMLImageElement) => {
    setImageDimensions(prev => ({
      ...prev,
      [partnershipId]: {
        width: img.naturalWidth,
        height: img.naturalHeight
      }
    }));
  };

  const getCardSize = (partnership: Partnership) => {
    const dimensions = imageDimensions[partnership.id];
    if (!dimensions) return 'medium';
    
    const aspectRatio = dimensions.width / dimensions.height;
    
    // More generous thresholds for better image fitting
    if (aspectRatio > 1.3) return 'wide'; // Landscape - wider cards for landscape images
    if (aspectRatio < 0.7) return 'tall'; // Portrait - taller cards for portrait images
    return 'medium'; // Square-ish - balanced for square images
  };

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-8xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">Our Partnerships</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Building bridges across cultures through strategic partnerships with government bodies, embassies, NGOs, and cultural institutions worldwide.
          </p>
        </div>

        {/* Partnership Type Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {partnershipTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type as any)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedType === type
                  ? 'bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-lg shadow-gray-700/25'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Single Partnership Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredPartnerships.map((partnership, index) => (
            <motion.div
              key={partnership.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-magenta/20 transition-all duration-500 hover:-translate-y-2 group cursor-pointer overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative h-48 bg-gradient-to-br from-magenta/5 to-teal/5 flex items-center justify-center p-6">
                <img
                  src={partnership.logo}
                  alt={partnership.name}
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  onLoad={(e) => onImageLoad(partnership.id, e.target as HTMLImageElement)}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const placeholder = target.nextElementSibling as HTMLElement;
                    if (placeholder) placeholder.style.display = 'flex';
                  }}
                  style={{
                    width: 'auto',
                    height: 'auto',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    objectPosition: 'center'
                  }}
                />
                {/* Fallback placeholder */}
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-magenta/20 to-teal/20"
                  style={{ display: 'none' }}
                >
                  <div className="text-center">
                    <Building className="w-12 h-12 text-magenta/60 mx-auto mb-2" />
                    <p className="text-magenta/80 font-medium text-sm">{partnership.name}</p>
                  </div>
                </div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    partnership.status === 'Strategic' ? 'bg-gray-700 text-white' :
                    partnership.status === 'Long-term' ? 'bg-gray-600 text-white' :
                    'bg-gray-200 text-gray-700'
                  }`}>
                    {partnership.status}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-gradient-to-r from-gray-600 to-gray-700">
                    <Building className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black group-hover:text-gray-700 transition-colors">
                      {partnership.name}
                    </h3>
                    <p className="text-sm text-gray-600">{partnership.location}</p>
                  </div>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                  {partnership.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipsShowcase;
