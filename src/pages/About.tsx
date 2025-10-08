import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Globe, Users, Award, Zap, Heart, ExternalLink, ArrowRight, Building, CheckCircle, TrendingUp } from "lucide-react";
import backgroundImage from "@/assets/background.jpg";
import Footer from "@/components/Footer";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { RippleButton } from "@/components/ui/ripple-button";
import rashmiImage from "@/assets/Rashmi-founder/rashmi-agarwal-professional.jpg";
import rashmiSpeaking from "@/assets/Rashmi-founder/rashmi-speaking-event.jpg";
import culturalExcellence from "@/assets/values/culturalexcellence.jpg";
import youthEmpowerment from "@/assets/values/Youthempowerment.jpg";
import globalCollab from "@/assets/values/globalcollab.jpg";
import innovation from "@/assets/values/innovation.jpg";

// Partnership logos - Selected partnerships
// Ministries (3 - removed Foreign Affairs)
import ministryCulture from "@/assets/partnerships/ministries/culture/partnership.jpg";
import ministryEducation from "@/assets/partnerships/ministries/education/collaboration.jpg";
import ministryYouthSports from "@/assets/partnerships/ministries/youth-sports/partnership.jpg";

// Government Bodies (2 - removed Qatar National Library)
import qatarFoundation from "@/assets/partnerships/government-bodies/qatar-foundation/partnership.jpg";
import kataraCultural from "@/assets/partnerships/government-bodies/katara-cultural-village/collaboration.jpg";

// Cultural Institutions (3 - removed Philharmonic)
import mathafArabMuseum from "@/assets/partnerships/cultural-institutions/mathaf-arab-museum/collaboration.jpg";
import fireStateArtists from "@/assets/partnerships/cultural-institutions/fire-state-artists/residency.jpg";
import nationalMuseumQatar from "@/assets/partnerships/cultural-institutions/national-museum-qatar/partnership.jpg";

// NGOs (1 - removed Qatar Charity, Al Fakhoora, Reach Out Asia)
import educationAboveAll from "@/assets/partnerships/ngos/education-above-all/programs.jpg";

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeValue, setActiveValue] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % values.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const impactMetrics = [
    { number: 70, suffix: "+", label: "Countries Reached", icon: <Globe className="w-6 h-6" /> },
    { number: 450, suffix: "+", label: "Artists Connected", icon: <Users className="w-6 h-6" /> },
    { number: 11, suffix: "+", label: "Years of Excellence", icon: <Award className="w-6 h-6" /> },
    { number: 500, suffix: "+", label: "Youth Empowered", icon: <Zap className="w-6 h-6" /> }
  ];

  const values = [
    {
      title: "Cultural Excellence",
      text: "We believe in the transformative power of culture to bridge divides and create meaningful connections.",
      image: culturalExcellence,
      icon: <Award className="w-8 h-8" />,
      color: "from-[#E91E63] to-pink-600"
    },
    {
      title: "Youth Empowerment",
      text: "The next generation is our greatest asset. We create platforms for young people to lead and innovate.",
      image: youthEmpowerment,
      icon: <Users className="w-8 h-8" />,
      color: "from-[#00BCD4] to-cyan-600"
    },
    {
      title: "Global Collaboration",
      text: "From Qatar to 70+ countries worldwide, we believe in the power of international collaboration.",
      image: globalCollab,
      icon: <Globe className="w-8 h-8" />,
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Innovation & Creativity",
      text: "We constantly push boundaries, exploring new ways to connect cultures and communities.",
      image: innovation,
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-red-600"
    }
  ];

  const timeline = [
    { year: 2014, title: "Founded", description: "MAPS International WLL established in Doha" },
    { year: 2019, title: "QIAF Begins", description: "First Qatar International Art Festival launched" },
    { year: 2021, title: "Global Expansion", description: "Reached 60+ countries with cultural programs" },
    { year: 2024, title: "KSSP Launches", description: "Katara Space Science Program inspires thousands" },
    { year: 2025, title: "400+ Artists", description: "QIAF grows to 70+ countries participation" }
  ];

  const featuredPartnerships = [
    {
      name: "Qatar Foundation",
      description: "Educational and cultural development initiatives",
      image: qatarFoundation,
      years: "Since 2019"
    },
    {
      name: "Katara Cultural Village",
      description: "Premier cultural destination for exhibitions",
      image: kataraCultural,
      years: "Since 2018"
    },
    {
      name: "Ministry of Culture",
      description: "Strategic partnership for cultural initiatives",
      image: ministryCulture,
      years: "Since 2018"
    },
    {
      name: "Ministry of Education",
      description: "Youth development and educational programs",
      image: ministryEducation,
      years: "Since 2019"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50/20 to-rose-50 overflow-hidden relative">
      {/* ============================================ */}
      {/* ARTISTIC BACKGROUND ELEMENTS - Optimized */}
      {/* ============================================ */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-15">

        {/* Ribbon Flow - Top Right */}
        <motion.svg 
          className="absolute top-1/4 right-20 w-96 h-64 text-purple-500"
          viewBox="0 0 300 200"
          animate={{ 
            y: [0, -30, 20, 0],
            rotate: [0, -10, 5, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        >
          <path 
            d="M50 100 Q 100 50, 150 100 T 250 100" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="6" 
            strokeLinecap="round"
            opacity="0.4"
          />
        </motion.svg>

        {/* Hand-drawn Circle - Top Left */}
        <motion.svg 
          className="absolute top-1/3 left-1/4 w-48 h-48 text-[#00BCD4]"
          viewBox="0 0 150 150"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle 
            cx="75" 
            cy="75" 
            r="60" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeDasharray="8,8"
            strokeLinecap="round"
          />
        </motion.svg>

        {/* Brush Stroke - Bottom */}
        <motion.svg 
          className="absolute bottom-1/4 left-1/3 w-80 h-40 text-[#FF9800]"
          viewBox="0 0 250 120"
          animate={{ 
            x: [0, -40, 30, 0],
            rotate: [0, -5, 5, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        >
          <path 
            d="M20 60 Q 80 30, 140 60 T 230 60" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="5" 
            strokeLinecap="round"
            strokeDasharray="6,10"
          />
        </motion.svg>

        {/* Scattered Paint Dots - Mid Right */}
        <motion.svg 
          className="absolute top-1/2 right-1/4 w-96 h-96 text-gray-700"
          viewBox="0 0 300 300"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="50" cy="80" r="4" fill="currentColor" opacity="0.3" />
          <circle cx="120" cy="40" r="6" fill="currentColor" opacity="0.4" />
          <circle cx="220" cy="100" r="3" fill="currentColor" opacity="0.3" />
          <circle cx="80" cy="180" r="5" fill="currentColor" opacity="0.35" />
          <circle cx="260" cy="220" r="4" fill="currentColor" opacity="0.3" />
        </motion.svg>

        {/* Zigzag Line - Top Center */}
        <motion.svg 
          className="absolute top-10 left-1/2 w-72 h-48 text-[#FF9800]"
          viewBox="0 0 220 150"
          animate={{ 
            x: [0, 30, -20, 0],
            y: [0, 15, -10, 0]
          }}
          transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
        >
          <path 
            d="M10 20 L 40 60 L 70 30 L 100 70 L 130 40 L 160 80 L 190 50" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round"
            strokeDasharray="6,10"
            opacity="0.35"
          />
        </motion.svg>

        {/* Curved Ribbon - Middle Right */}
        <motion.svg 
          className="absolute top-1/2 right-32 w-56 h-80 text-[#E91E63]"
          viewBox="0 0 180 250"
          animate={{ 
            y: [0, -35, 20, 0],
            rotate: [0, 10, -8, 0]
          }}
          transition={{ duration: 23, repeat: Infinity, ease: "easeInOut" }}
        >
          <path 
            d="M90 20 Q 110 80, 90 140 T 90 220" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="7" 
            strokeLinecap="round"
            opacity="0.3"
          />
        </motion.svg>

        {/* Looping Scribble - Bottom Center */}
        <motion.svg 
          className="absolute bottom-10 left-1/2 w-64 h-48 text-purple-400"
          viewBox="0 0 200 150"
          animate={{ 
            y: [0, 25, -15, 0],
            rotate: [0, 8, -5, 0]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        >
          <path 
            d="M20 75 Q 50 50, 80 75 Q 110 100, 140 75 Q 160 60, 180 75" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="4" 
            strokeLinecap="round"
            strokeDasharray="6,9"
            opacity="0.35"
          />
        </motion.svg>
        </div>

      {/* ============================================ */}
      {/* HERO SECTION - Split Layout */}
      {/* ============================================ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-transparent">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-0 items-center max-w-7xl mx-auto">
            {/* Left: Rashmi Speaking Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative h-full"
            >
              <div className="relative w-full h-[400px] sm:h-[500px] md:h-[550px] lg:h-[700px]">
                <img
                  src={rashmiSpeaking}
                  alt="Rashmi Agarwal Speaking"
                  className="w-full h-full object-cover object-center rounded-2xl sm:rounded-3xl shadow-2xl"
                />
                {/* Floating Badge */}
                <div className="absolute bottom-8 left-8 bg-gradient-to-r from-[#E91E63] to-[#FF9800] rounded-2xl p-6 shadow-2xl">
                  <div className="text-white text-center">
                    <div className="text-4xl font-bold">11+</div>
                    <div className="text-sm font-semibold">Years Impact</div>
          </div>
        </div>
        </div>
            </motion.div>

            {/* Right: Story Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="lg:pl-16 px-6 sm:px-0"
            >
              <p className="text-[#E91E63] font-black text-xl sm:text-2xl mb-4 sm:mb-6 relative inline-block tracking-wide">
                THE VISIONARY
                {/* Hand-drawn underline */}
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 150 8" preserveAspectRatio="none">
                  <path d="M0 4 Q 37.5 6, 75 4 T 150 4" fill="none" stroke="#E91E63" strokeWidth="2.5" 
                    style={{ strokeLinecap: 'round' }} />
                </svg>
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                "In 2014, I had a vision"
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6 sm:mb-8 leading-relaxed italic">
                What if culture could be the bridge that connects continents?
              </p>
              <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                <p>
                  Today, MAPS International WLL connects <span className="text-[#E91E63] font-bold">70+ countries</span>,
                  empowers <span className="text-[#FF9800] font-bold">500+ youth</span>, and celebrates
                  <span className="text-[#E91E63] font-bold"> 400+ artists</span> annually.
                </p>
        </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="mt-8"
              >
                <p className="text-gray-900 text-xl mb-2 font-semibold">— Rashmi Agarwal</p>
                <p className="text-gray-600">Founder & CEO, MAPS International WLL</p>
              </motion.div>
            </motion.div>
        </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* ABOUT MAPS - Company Description */}
      {/* ============================================ */}
      <section className="py-32 bg-gradient-to-br from-amber-50 via-orange-50/20 to-rose-50 relative overflow-hidden">
        {/* Background Sketchy Elements */}
        <div className="absolute inset-0 pointer-events-none opacity-8">
          <svg className="absolute top-20 right-[15%] w-48 h-48 text-[#E91E63]" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" strokeWidth="2" 
              strokeDasharray="8,10" style={{ strokeLinecap: 'round' }} />
          </svg>
          
          <svg className="absolute bottom-32 left-[10%] w-56 h-56 text-[#00BCD4]" viewBox="0 0 150 150">
            <circle cx="75" cy="75" r="60" fill="none" stroke="currentColor" strokeWidth="1.5" 
              strokeDasharray="6,8" style={{ strokeLinecap: 'round' }} />
          </svg>
          
          <svg className="absolute top-1/2 left-[20%] w-40 h-40 text-[#FF9800]" viewBox="0 0 100 100">
            <rect x="15" y="15" width="70" height="70" fill="none" stroke="currentColor" strokeWidth="2"
              strokeDasharray="6,8" style={{ strokeLinecap: 'round' }} transform="rotate(20 50 50)" />
          </svg>
          
          <svg className="absolute bottom-1/4 right-[25%] w-32 h-32 text-purple-500" viewBox="0 0 100 100">
            <path d="M20 50 Q 40 30, 60 50 T 80 50" fill="none" stroke="currentColor" strokeWidth="1.5" 
              strokeDasharray="4,6" style={{ strokeLinecap: 'round' }} />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <p className="text-[#E91E63] font-black text-3xl mb-8 tracking-wider relative inline-block">
              ABOUT US
              {/* Hand-drawn underline */}
              <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 8" preserveAspectRatio="none">
                <path d="M0 4 Q 25 6, 50 4 T 100 4" fill="none" stroke="#E91E63" strokeWidth="2.5" 
                  style={{ strokeLinecap: 'round' }} />
              </svg>
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 sm:mb-8 md:mb-10">
              MAPS International WLL
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-8 sm:mb-12 md:mb-16">
              Mapping Possibilities. Building Impact.
            </p>
            
            <div className="space-y-6 sm:space-y-8 md:space-y-10 text-left max-w-4xl mx-auto px-4 sm:px-0">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 leading-[1.7] font-medium">
                <span className="font-black text-gray-900 text-xl sm:text-2xl md:text-3xl lg:text-4xl">MAPS International WLL</span> is a dynamic, Qatar-based enterprise specializing in <span className="font-semibold text-gray-900">arts management</span>, <span className="font-semibold text-gray-900">creative consultancy</span>, <span className="font-semibold text-gray-900">cultural diplomacy</span>, <span className="font-semibold text-gray-900">events</span>, <span className="font-semibold text-gray-900">exhibitions</span>, and <span className="font-semibold text-gray-900">youth development programs</span>.
              </p>
              
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 leading-[1.7] font-medium">
                Founded with a vision to integrate creativity with strategic collaboration, MAPS serves as a catalyst for connecting communities, fostering talent, and enhancing cultural exchange through impactful initiatives.
              </p>
              
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 leading-[1.7] font-medium">
                With a <span className="font-semibold text-gray-900">multidisciplinary approach</span>, our work spans from curating international art festivals to managing corporate branding, public-private partnerships, and community-driven cultural projects.
              </p>
              
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 leading-[1.7] font-medium">
                We believe in <span className="font-bold text-[#E91E63] text-xl sm:text-2xl md:text-3xl lg:text-4xl">innovation</span>, <span className="font-bold text-[#00BCD4] text-xl sm:text-2xl md:text-3xl lg:text-4xl">sustainability</span>, and <span className="font-bold text-[#FF9800] text-xl sm:text-2xl md:text-3xl lg:text-4xl">purpose-driven engagement</span> to create lasting social and cultural value.
              </p>
        </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* VISION & MISSION - Side by Side */}
      {/* ============================================ */}
      <section className="py-32 bg-transparent relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-12 text-white shadow-2xl hover:scale-[1.02] transition-all duration-300"
            >
              <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
        </div>
              <h3 className="text-3xl font-black mb-6">VISION</h3>
              <p className="text-lg leading-relaxed text-white/95">
                To be a leading cultural and creative enterprise in the Middle East and beyond, bridging global communities through art, innovation, and collaboration.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-[#00BCD4] to-cyan-600 rounded-3xl p-12 text-white shadow-2xl hover:scale-[1.02] transition-all duration-300"
            >
              <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
        </div>
              <h3 className="text-3xl font-black mb-6">MISSION</h3>
              <ul className="space-y-4 text-lg leading-relaxed text-white/95">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>To curate transformative art and cultural experiences that inspire, engage, and empower.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>To champion youth innovation and nurture the next generation of creative thinkers and leaders along with Space Science.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>To build strategic alliances with government, NGOs, corporates, and creatives for sustainable impact.</span>
                </li>
              </ul>
            </motion.div>

        </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SERVICES PROVIDED - Icon Grid with Images */}
      {/* ============================================ */}
      <section className="py-32 bg-white/50 backdrop-blur-sm relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="text-[#E91E63] font-black text-2xl mb-6 tracking-wider relative inline-block">
              WHAT WE DO
              {/* Hand-drawn underline */}
              <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 130 8" preserveAspectRatio="none">
                <path d="M0 4 Q 32.5 6, 65 4 T 130 4" fill="none" stroke="#E91E63" strokeWidth="2.5" 
                  style={{ strokeLinecap: 'round' }} />
              </svg>
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Services Provided
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions spanning arts, culture, and community development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Service 1: Arts Management */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&auto=format&fit=crop"
                    alt="Arts Management"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 -mt-12 relative z-10 shadow-lg">
                    <Heart className="w-6 h-6 text-white" />
        </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Arts Management</h3>
                  <p className="text-gray-600 text-sm">Curating and managing art festivals, exhibitions, and cultural programs</p>
        </div>
        </div>
            </motion.div>

            {/* Service 2: Creative Consultancy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-48 bg-gradient-to-br from-[#E91E63] to-red-600 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop"
                    alt="Creative Consultancy"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E91E63] to-red-600 rounded-xl flex items-center justify-center mb-4 -mt-12 relative z-10 shadow-lg">
                    <TrendingUp className="w-6 h-6 text-white" />
        </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Creative Consultancy</h3>
                  <p className="text-gray-600 text-sm">Strategic guidance for branding, creative projects, and cultural initiatives</p>
        </div>
        </div>
            </motion.div>

            {/* Service 3: Cultural Diplomacy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-48 bg-gradient-to-br from-[#00BCD4] to-cyan-600 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?w=800&auto=format&fit=crop"
                    alt="Cultural Diplomacy"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00BCD4] to-cyan-600 rounded-xl flex items-center justify-center mb-4 -mt-12 relative z-10 shadow-lg">
                    <Globe className="w-6 h-6 text-white" />
        </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Cultural Diplomacy</h3>
                  <p className="text-gray-600 text-sm">Building bridges between cultures through international exchange programs</p>
        </div>
        </div>
            </motion.div>

            {/* Service 4: Events & Exhibitions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-48 bg-gradient-to-br from-yellow-500 to-orange-500 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&auto=format&fit=crop"
                    alt="Events & Exhibitions"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-4 -mt-12 relative z-10 shadow-lg">
                    <Award className="w-6 h-6 text-white" />
        </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Events & Exhibitions</h3>
                  <p className="text-gray-600 text-sm">End-to-end event planning and exhibition management services</p>
        </div>
        </div>
            </motion.div>

            {/* Service 5: Youth Development */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-48 bg-gradient-to-br from-green-500 to-emerald-600 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop"
                    alt="Youth Development"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 -mt-12 relative z-10 shadow-lg">
                    <Users className="w-6 h-6 text-white" />
        </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Youth Development</h3>
                  <p className="text-gray-600 text-sm">Programs empowering young minds through education and creative engagement</p>
        </div>
        </div>
            </motion.div>

            {/* Service 6: Space Science Programs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&auto=format&fit=crop"
                    alt="Space Science Programs"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 -mt-12 relative z-10 shadow-lg">
                    <Zap className="w-6 h-6 text-white" />
        </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Space Science Programs</h3>
                  <p className="text-gray-600 text-sm">Inspiring innovation through STEM education and space science initiatives</p>
        </div>
        </div>
            </motion.div>

            {/* Service 7: Public-Private Partnerships */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-48 bg-gradient-to-br from-[#00BCD4] to-cyan-600 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&auto=format&fit=crop"
                    alt="Public-Private Partnerships"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00BCD4] to-cyan-600 rounded-xl flex items-center justify-center mb-4 -mt-12 relative z-10 shadow-lg">
                    <Building className="w-6 h-6 text-white" />
        </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Strategic Partnerships</h3>
                  <p className="text-gray-600 text-sm">Facilitating collaborations between government, corporates, and NGOs</p>
        </div>
        </div>
            </motion.div>

            {/* Service 8: Community Projects */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&auto=format&fit=crop"
                    alt="Community Projects"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 -mt-12 relative z-10 shadow-lg">
                    <Heart className="w-6 h-6 text-white" />
          </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Community Projects</h3>
                  <p className="text-gray-600 text-sm">Grassroots initiatives driving social impact and cultural preservation</p>
      </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* ABOUT RASHMI - Professional Section */}
      {/* ============================================ */}
      <section className="py-32 bg-white/40 backdrop-blur-sm relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              {/* Professional Image */}
              <div className="relative">
                <img
                  src={rashmiImage}
                  alt="Rashmi Agarwal - Founder & CEO"
                  className="w-full h-[500px] object-cover object-center rounded-3xl shadow-2xl"
                />
        </div>
        
              {/* About Text */}
              <div>
                <p className="text-[#E91E63] font-black text-2xl mb-6 relative inline-block tracking-wider">
                  ABOUT RASHMI
                  {/* Hand-drawn underline */}
                  <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 140 8" preserveAspectRatio="none">
                    <path d="M0 4 Q 35 6, 70 4 T 140 4" fill="none" stroke="#E91E63" strokeWidth="2.5" 
                      style={{ strokeLinecap: 'round' }} />
                  </svg>
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Leadership Rooted in Passion
            </h2>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    <span className="font-bold text-gray-900">Rashmi Agarwal</span> is a pioneering entrepreneur and cultural diplomat who founded MAPS International WLL in 2014 with a singular mission: to use culture and art as bridges that connect communities across the globe.
                  </p>
                  <p>
                    With over 11 years of experience in international cultural programming, Rashmi has built strategic partnerships with Qatar's leading institutions, ministries, and cultural organizations, establishing MAPS as a trusted leader in cultural excellence.
                  </p>
                  <p>
                    Under her leadership, MAPS has grown from a local initiative to a global movement, reaching <span className="text-[#E91E63] font-bold">70+ countries</span> and impacting <span className="text-[#FF9800] font-bold">thousands of lives</span> through art festivals, youth empowerment programs, and space science education.
            </p>
          </div>
                </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* THE JOURNEY - Horizontal Timeline */}
      {/* ============================================ */}
      <section className="py-20 bg-transparent relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a vision in 2014 to a global movement spanning 70+ countries
            </p>
          </motion.div>

          {/* Horizontal Timeline */}
          <div className="max-w-7xl mx-auto">
            <div className="relative">
              {/* Horizontal Line */}
              <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-[#E91E63] via-[#00BCD4] to-[#E91E63] hidden md:block" />

              {/* Timeline Items - Horizontal Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative flex flex-col items-center"
                  >
                    {/* Circle Dot */}
                    <div className="w-16 h-16 bg-gradient-to-br from-[#E91E63] to-[#FF9800] rounded-full flex items-center justify-center text-white font-black text-2xl shadow-xl mb-4 relative z-10">
                      {item.year % 100}
          </div>
          
                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                  </motion.div>
                ))}
                      </div>
                    </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* OUR IMPACT - Animated Numbers */}
      {/* ============================================ */}
      <section className="py-32 bg-gradient-to-br from-amber-50 via-orange-50/30 to-rose-50 relative overflow-hidden">
        {/* Artistic Elements */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          {/* Hand-drawn circle */}
          <svg className="absolute top-10 right-20 w-32 h-32 text-[#FF9800]" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" 
              strokeDasharray="5,8" style={{ strokeLinecap: 'round' }} />
          </svg>
          
          {/* Wavy decoration */}
          <svg className="absolute bottom-20 left-10 w-48 h-48 text-[#E91E63]" viewBox="0 0 150 150">
            <path d="M10 75 Q 40 70, 70 75 T 130 75" fill="none" stroke="currentColor" strokeWidth="2" 
              strokeDasharray="4,6" style={{ strokeLinecap: 'round' }} />
          </svg>
          
          {/* Scattered dots */}
          <svg className="absolute top-1/3 left-1/4 w-64 h-64 text-gray-700" viewBox="0 0 200 200">
            <circle cx="30" cy="40" r="2" fill="currentColor" />
            <circle cx="80" cy="20" r="3" fill="currentColor" />
            <circle cx="150" cy="60" r="2" fill="currentColor" />
            <circle cx="50" cy="120" r="2.5" fill="currentColor" />
          </svg>
          </div>
          
        {/* Floating gradient orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-40 w-96 h-96 bg-[#E91E63] rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-20 left-40 w-96 h-96 bg-[#FF9800] rounded-full blur-3xl"
          />
                      </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block">
              Our Impact
              {/* Hand-drawn underline */}
              <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 400 10" preserveAspectRatio="none">
                <path d="M0 5 Q 100 8, 200 5 T 400 5" fill="none" stroke="#E91E63" strokeWidth="2.5" 
                  style={{ strokeLinecap: 'round' }} />
              </svg>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Numbers that tell the story of our global cultural impact
            </p>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-12 gap-6">
              {/* 70+ Countries - Large Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="col-span-12 md:col-span-6 lg:col-span-7"
              >
                <div className="relative bg-gradient-to-br from-cyan-50/40 via-white/80 to-teal-50/30 backdrop-blur-xl rounded-3xl p-12 text-center hover:scale-[1.02] transition-all duration-300 shadow-xl border border-cyan-200/30 h-full flex flex-col items-center justify-center overflow-hidden">
                  {/* Decorative shape */}
                  <svg className="absolute top-4 right-4 w-16 h-16 text-cyan-300/20" viewBox="0 0 60 60">
                    <circle cx="30" cy="30" r="25" fill="none" stroke="currentColor" strokeWidth="2" 
                      strokeDasharray="5,5" style={{ strokeLinecap: 'round' }} />
                  </svg>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="w-20 h-20 bg-gradient-to-r from-[#E91E63] to-[#FF9800] rounded-full flex items-center justify-center mb-6 text-white"
                  >
                    <Globe className="w-10 h-10" />
                  </motion.div>
                  <AnimatedCounter 
                    value={70} 
                    suffix="+" 
                    duration={2500}
                    className="text-7xl md:text-8xl font-black text-gray-900 mb-4"
                  />
                  <div className="text-gray-800 text-2xl font-bold">Countries Reached</div>
                  </div>
              </motion.div>

              {/* 450+ Artists - Medium Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="col-span-12 md:col-span-6 lg:col-span-5"
              >
                <div className="relative bg-gradient-to-br from-teal-50/40 via-white/80 to-cyan-50/30 backdrop-blur-xl rounded-3xl p-10 text-center hover:scale-[1.02] transition-all duration-300 shadow-xl border border-teal-200/30 h-full flex flex-col items-center justify-center overflow-hidden">
                  {/* Decorative shape */}
                  <svg className="absolute bottom-4 left-4 w-14 h-14 text-teal-300/20" viewBox="0 0 50 50">
                    <rect x="10" y="10" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2"
                      strokeDasharray="4,4" style={{ strokeLinecap: 'round' }} transform="rotate(15 25 25)" />
                  </svg>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-gradient-to-r from-[#E91E63] to-[#FF9800] rounded-full flex items-center justify-center mb-4 text-white"
                  >
                    <Users className="w-8 h-8" />
                  </motion.div>
                  <AnimatedCounter 
                    value={450} 
                    suffix="+" 
                    duration={2500}
                    className="text-6xl font-black text-gray-900 mb-3"
                  />
                  <div className="text-gray-800 text-xl font-bold">Artists Connected</div>
                  </div>
              </motion.div>

              {/* 11+ Years - Small Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="col-span-12 md:col-span-6 lg:col-span-5"
              >
                <div className="relative bg-gradient-to-br from-cyan-50/40 via-white/80 to-turquoise-50/30 backdrop-blur-xl rounded-3xl p-10 text-center hover:scale-[1.02] transition-all duration-300 shadow-xl border border-cyan-200/30 h-full flex flex-col items-center justify-center overflow-hidden">
                  {/* Decorative shape */}
                  <svg className="absolute top-4 right-4 w-12 h-12 text-cyan-300/20" viewBox="0 0 40 40">
                    <path d="M5 20 Q 15 10, 25 20 T 35 20" fill="none" stroke="currentColor" strokeWidth="2" 
                      strokeDasharray="3,3" style={{ strokeLinecap: 'round' }} />
                  </svg>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-gradient-to-r from-[#E91E63] to-[#FF9800] rounded-full flex items-center justify-center mb-4 text-white"
                  >
                    <Award className="w-8 h-8" />
                  </motion.div>
                  <AnimatedCounter 
                    value={11} 
                    suffix="+" 
                    duration={2500}
                    className="text-6xl font-black text-gray-900 mb-3"
                  />
                  <div className="text-gray-800 text-xl font-bold">Years of Excellence</div>
                      </div>
              </motion.div>

              {/* 500+ Youth - Medium Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="col-span-12 md:col-span-6 lg:col-span-7"
              >
                <div className="relative bg-gradient-to-br from-teal-50/40 via-white/80 to-cyan-50/30 backdrop-blur-xl rounded-3xl p-12 text-center hover:scale-[1.02] transition-all duration-300 shadow-xl border border-teal-200/30 h-full flex flex-col items-center justify-center overflow-hidden">
                  {/* Decorative shape */}
                  <svg className="absolute bottom-4 right-4 w-16 h-16 text-teal-300/20" viewBox="0 0 60 60">
                    <circle cx="30" cy="30" r="20" fill="none" stroke="currentColor" strokeWidth="2" 
                      strokeDasharray="6,4" style={{ strokeLinecap: 'round' }} />
                  </svg>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="w-20 h-20 bg-gradient-to-r from-[#E91E63] to-[#FF9800] rounded-full flex items-center justify-center mb-6 text-white"
                  >
                    <Zap className="w-10 h-10" />
                  </motion.div>
                  <AnimatedCounter 
                    value={500} 
                    suffix="+" 
                    duration={2500}
                    className="text-7xl md:text-8xl font-black text-gray-900 mb-4"
                  />
                  <div className="text-gray-800 text-2xl font-bold">Youth Empowered</div>
                  </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* OUR VALUES - Bento Grid */}
      {/* ============================================ */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>
          
          {/* Bento Grid - 2x2 */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-12 gap-10">
              {/* Cultural Excellence */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="col-span-12 md:col-span-6 group"
              >
                <div className="bg-black rounded-3xl overflow-hidden border-2 border-gray-800/20 hover:-translate-y-2 transition-all duration-300">
                  {/* Image */}
                  <div className="aspect-[4/3]">
                    <img
                      src={culturalExcellence}
                      alt="Cultural Excellence"
                      className="w-full h-full object-cover object-center"
                    />
                </div>
                  
                  {/* Glassmorphism Text Bar */}
                  <div className="bg-gradient-to-br from-amber-50/95 via-orange-50/90 to-rose-50/95 backdrop-blur-xl border-t border-orange-200/40 px-5 py-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#E91E63] to-[#FF9800] rounded-xl flex items-center justify-center text-white">
                        <Heart className="w-5 h-5" />
              </div>
                      <h3 className="text-xl font-black text-gray-900">Cultural Excellence</h3>
                </div>
                    <p className="text-gray-800 font-semibold text-sm">
                      Celebrating diverse artistic expressions and preserving cultural heritage
              </p>
              </div>
            </div>
              </motion.div>

              {/* Youth Empowerment */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="col-span-12 md:col-span-6 group"
              >
                <div className="bg-black rounded-3xl overflow-hidden border-2 border-gray-800/20 hover:-translate-y-2 transition-all duration-300">
                  {/* Image */}
                  <div className="aspect-[4/3]">
                    <img
                      src={youthEmpowerment}
                      alt="Youth Empowerment"
                      className="w-full h-full object-cover object-center"
                    />
                </div>
          
                  {/* Glassmorphism Text Bar */}
                  <div className="bg-gradient-to-br from-amber-50/95 via-orange-50/90 to-rose-50/95 backdrop-blur-xl border-t border-orange-200/40 px-5 py-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#E91E63] to-[#FF9800] rounded-xl flex items-center justify-center text-white">
                        <Users className="w-5 h-5" />
              </div>
                      <h3 className="text-xl font-black text-gray-900">Youth Empowerment</h3>
                </div>
                    <p className="text-gray-800 font-semibold text-sm">
                      Inspiring the next generation through education, art, and science
                    </p>
              </div>
            </div>
              </motion.div>

              {/* Global Collaboration */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="col-span-12 md:col-span-6 group"
              >
                <div className="bg-black rounded-3xl overflow-hidden border-2 border-gray-800/20 hover:-translate-y-2 transition-all duration-300">
                  {/* Image */}
                  <div className="aspect-[4/3]">
                    <img
                      src={globalCollab}
                      alt="Global Collaboration"
                      className="w-full h-full object-cover object-center"
                    />
                </div>
                
                  {/* Glassmorphism Text Bar */}
                  <div className="bg-gradient-to-br from-amber-50/95 via-orange-50/90 to-rose-50/95 backdrop-blur-xl border-t border-orange-200/40 px-5 py-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#E91E63] to-[#FF9800] rounded-xl flex items-center justify-center text-white">
                        <Globe className="w-5 h-5" />
              </div>
                      <h3 className="text-xl font-black text-gray-900">Global Collaboration</h3>
                </div>
                    <p className="text-gray-800 font-semibold text-sm">
                      From Qatar to 70+ countries worldwide, we believe in the power of international collaboration
                    </p>
              </div>
            </div>
              </motion.div>

              {/* Innovation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="col-span-12 md:col-span-6 group"
              >
                <div className="bg-black rounded-3xl overflow-hidden border-2 border-gray-800/20 hover:-translate-y-2 transition-all duration-300">
                  {/* Image */}
                  <div className="aspect-[4/3]">
                    <img
                      src={innovation}
                      alt="Innovation"
                      className="w-full h-full object-cover object-center"
                    />
                </div>
                  
                  {/* Glassmorphism Text Bar */}
                  <div className="bg-gradient-to-br from-amber-50/95 via-orange-50/90 to-rose-50/95 backdrop-blur-xl border-t border-orange-200/40 px-5 py-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#E91E63] to-[#FF9800] rounded-xl flex items-center justify-center text-white">
                        <TrendingUp className="w-5 h-5" />
              </div>
                      <h3 className="text-xl font-black text-gray-900">Innovation</h3>
                </div>
                    <p className="text-gray-800 font-semibold text-sm">
                      Pioneering new ways to engage communities through technology and creativity
                    </p>
              </div>
            </div>
              </motion.div>
                </div>
              </div>
                </div>
      </section>

      {/* ============================================ */}
      {/* PARTNERSHIPS - Complete Bento Grid */}
      {/* ============================================ */}
      <section className="py-32 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Strategic Partnerships
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building bridges with Qatar's leading cultural and educational institutions
            </p>
          </motion.div>

          {/* Bento Grid for ALL 15 Partnerships */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-12 gap-8">
              
              {/* Row 1: Ministries - PINK/RED GRADIENT */}
              {/* Ministry of Culture - Landscape Large */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="col-span-12 md:col-span-6 lg:col-span-6 group"
              >
                <div className="bg-gradient-to-br from-[#E91E63] to-red-600 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-xl h-[280px]">
                  <div className="h-[220px] bg-white/95 p-4">
                    <img src={ministryCulture} alt="Ministry of Culture" className="w-full h-full object-contain" />
                </div>
                  <div className="bg-white/90 backdrop-blur-xl px-4 py-3">
                    <h3 className="text-lg font-black text-gray-900">Ministry of Culture</h3>
              </div>
                </div>
              </motion.div>

              {/* Ministry of Education - Square */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="col-span-12 md:col-span-6 lg:col-span-3 group"
              >
                <div className="bg-gradient-to-br from-[#E91E63] to-red-600 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-xl h-[280px]">
                  <div className="h-[220px] bg-white/95 p-4">
                    <img src={ministryEducation} alt="Ministry of Education" className="w-full h-full object-contain" />
                </div>
                  <div className="bg-white/90 backdrop-blur-xl px-4 py-3">
                    <h3 className="text-base font-black text-gray-900">Education</h3>
              </div>
                </div>
              </motion.div>

              {/* Row 2: More Ministries (PINK) + Gov Bodies (TEAL) */}
              {/* Ministry Youth & Sports - Landscape - PINK */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="col-span-12 md:col-span-4 lg:col-span-4 group"
              >
                <div className="bg-gradient-to-br from-[#E91E63] to-red-600 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-xl h-[240px]">
                  <div className="h-[180px] bg-white/95 p-3">
                    <img src={ministryYouthSports} alt="Ministry of Youth & Sports" className="w-full h-full object-contain" />
                  </div>
                  <div className="bg-white/90 backdrop-blur-xl px-4 py-3">
                    <h3 className="text-sm font-black text-gray-900">Youth & Sports</h3>
                </div>
                </div>
              </motion.div>

              {/* Qatar Foundation - Landscape - TEAL */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="col-span-12 md:col-span-4 lg:col-span-4 group"
              >
                <div className="bg-gradient-to-br from-[#00BCD4] to-cyan-600 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-xl h-[240px]">
                  <div className="h-[180px] bg-white/95 p-3">
                    <img src={qatarFoundation} alt="Qatar Foundation" className="w-full h-full object-contain" />
              </div>
                  <div className="bg-white/90 backdrop-blur-xl px-4 py-3">
                    <h3 className="text-sm font-black text-gray-900">Qatar Foundation</h3>
                </div>
              </div>
              </motion.div>

              {/* Row 3: Cultural Institutions - PURPLE/PINK & TEAL */}
              {/* Katara Cultural Village - Wide - TEAL (Gov Body) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="col-span-12 md:col-span-6 lg:col-span-4 group"
              >
                <div className="bg-gradient-to-br from-[#00BCD4] to-cyan-600 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-xl h-[200px]">
                  <div className="h-[140px] bg-white/95 p-3">
                    <img src={kataraCultural} alt="Katara Cultural Village" className="w-full h-full object-contain" />
                </div>
                  <div className="bg-white/90 backdrop-blur-xl px-4 py-3">
                    <h3 className="text-sm font-black text-gray-900">Katara Village</h3>
              </div>
                </div>
              </motion.div>

              {/* National Museum Qatar - Square - PURPLE */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="col-span-6 md:col-span-3 lg:col-span-2 group"
              >
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-xl h-[200px]">
                  <div className="h-[140px] bg-white/95 p-2">
                    <img src={nationalMuseumQatar} alt="National Museum Qatar" className="w-full h-full object-contain" />
                </div>
                  <div className="bg-white/90 backdrop-blur-xl px-3 py-2">
                    <h3 className="text-xs font-black text-gray-900">Nat. Museum</h3>
              </div>
                </div>
              </motion.div>

              {/* Mathaf Arab Museum - Landscape - PURPLE */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="col-span-12 md:col-span-6 lg:col-span-4 group"
              >
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-xl h-[200px]">
                  <div className="h-[140px] bg-white/95 p-3">
                    <img src={mathafArabMuseum} alt="Mathaf Arab Museum" className="w-full h-full object-contain" />
                </div>
                  <div className="bg-white/90 backdrop-blur-xl px-4 py-3">
                    <h3 className="text-sm font-black text-gray-900">Mathaf Museum</h3>
              </div>
                </div>
              </motion.div>

              {/* Row 4: More Cultural (PURPLE) + NGOs (GREEN) */}
              {/* Fire State Artists - Very Wide - PURPLE */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="col-span-12 md:col-span-6 lg:col-span-6 group"
              >
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-xl h-[180px]">
                  <div className="h-[120px] bg-white/95 p-3">
                    <img src={fireStateArtists} alt="Fire State Artists" className="w-full h-full object-contain" />
                </div>
                  <div className="bg-white/90 backdrop-blur-xl px-4 py-3">
                    <h3 className="text-sm font-black text-gray-900">Fire State Artists</h3>
              </div>
                </div>
              </motion.div>

              {/* Row 5: NGO - GREEN */}              {/* Education Above All - Square - GREEN */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="col-span-6 md:col-span-3 lg:col-span-3 group"
              >
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-xl h-[240px]">
                  <div className="h-[180px] bg-white/95 p-3">
                    <img src={educationAboveAll} alt="Education Above All" className="w-full h-full object-contain" />
                </div>
                  <div className="bg-white/90 backdrop-blur-xl px-4 py-3">
                    <h3 className="text-sm font-black text-gray-900">Education Above All</h3>
              </div>
                </div>
              </motion.div>

                </div>
              </div>
                </div>
      </section>

      {/* ============================================ */}
      {/* CTA SECTION */}
      {/* ============================================ */}
      <section className="py-32 bg-gradient-to-br from-amber-50 via-orange-50/30 to-rose-50 relative overflow-hidden">
        {/* Artistic Elements */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          {/* Tilted square */}
          <svg className="absolute top-20 left-20 w-24 h-24 text-[#E91E63]" viewBox="0 0 80 80">
            <rect x="10" y="10" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2"
              strokeDasharray="6,6" style={{ strokeLinecap: 'round' }} transform="rotate(15 40 40)" />
          </svg>
          
          {/* Wavy lines */}
          <svg className="absolute bottom-20 right-20 w-48 h-48 text-[#FF9800]" viewBox="0 0 150 150">
            <path d="M20 100 Q 50 95, 80 100 T 140 100" fill="none" stroke="currentColor" strokeWidth="2" 
              strokeDasharray="4,6" style={{ strokeLinecap: 'round' }} />
          </svg>
          
          {/* Scattered dots */}
          <svg className="absolute top-1/2 right-1/4 w-64 h-64 text-gray-700" viewBox="0 0 200 200">
            <circle cx="40" cy="30" r="2.5" fill="currentColor" />
            <circle cx="100" cy="60" r="2" fill="currentColor" />
            <circle cx="160" cy="100" r="3" fill="currentColor" />
          </svg>
                </div>
                
        {/* Floating gradient orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#E91E63] rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#FF9800] rounded-full blur-3xl"
          />
                </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative inline-block">
            Ready to Make an Impact?
            {/* Hand-drawn underline */}
            <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 600 10" preserveAspectRatio="none">
              <path d="M0 5 Q 150 8, 300 5 T 600 5" fill="none" stroke="#E91E63" strokeWidth="2.5" 
                style={{ strokeLinecap: 'round' }} />
            </svg>
          </h2>
            <p className="text-xl text-gray-700 mb-12 leading-relaxed">
            Join us in building bridges across cultures and empowering communities worldwide
          </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => window.location.href = '/work'}
                className="group px-10 py-5 bg-gradient-to-r from-[#E91E63] to-[#FF9800] text-white text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <span className="flex items-center gap-2">
                Explore Our Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button 
                onClick={() => window.location.href = '/connect'}
                className="px-10 py-5 border-2 border-gray-800 text-gray-900 text-lg font-semibold rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </button>
            </div>
          </motion.div>
          </div>
      </section>

      {/* ============================================ */}
      {/* FOOTER */}
      {/* ============================================ */}
      <Footer />
    </div>
  );
};

export default About;
