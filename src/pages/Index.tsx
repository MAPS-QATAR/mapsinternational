import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowDown, Sparkles, Globe, Users, Zap, Calendar } from "lucide-react";
import mapsLogo from "@/assets/maps-logo.jpg";
import qiafCardImage from "@/assets/projects/qiaf-2025/qiaf-card.jpg";
import heroQiaf from "@/assets/hero-qiaf-festival.jpg";
import heroYouth from "@/assets/hero-youth-platform.jpg";
import heroSpace from "@/assets/hero-space-science.jpg";
import ksspCard from "@/assets/projects/kssp/kssp-card.jpg";
import youthCard from "@/assets/projects/youth-platform/youth-card.jpg";
import Footer from "@/components/Footer";
import { RippleButton } from "@/components/ui/ripple-button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { ProgressiveImage } from "@/components/ui/progressive-image";

const Index = () => {
  // Calculate initial countdown immediately
  const calculateInitialTime = () => {
    const now = new Date();
    const qiafDate = new Date('December 7, 2025 00:00:00');
    const difference = qiafDate.getTime() - now.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateInitialTime());
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  const heroImages = [heroQiaf, heroYouth, heroSpace];
  
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const qiafDate = new Date('December 7, 2025 00:00:00');
      const difference = qiafDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      quote: "QIAF has transformed how we think about cultural exchange. It's not just an art festival—it's a movement.",
      author: "International Artist",
      country: "70+ Countries Represented",
      stars: 5
    },
    {
      quote: "The Space Science Program ignited my daughter's passion for astronomy. She now dreams of becoming an astrophysicist.",
      author: "Parent",
      country: "Qatar",
      stars: 5
    },
    {
      quote: "MAPS International doesn't just organize events—they create experiences that change lives.",
      author: "Cultural Partner",
      country: "Ministry of Culture",
      stars: 5
    }
  ];

  return (
    <main className="min-h-screen bg-white overflow-hidden relative">
      {/* ============================================ */}
      {/* ARTISTIC SKETCHY ELEMENTS - Background Layer */}
      {/* ============================================ */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
        {/* Scattered hand-drawn circles */}
        <svg className="absolute top-20 right-32 w-40 h-40 text-gray-800" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1.5" 
            strokeDasharray="3,4" style={{ strokeLinecap: 'round' }} />
        </svg>
        
        <svg className="absolute top-[40%] left-20 w-32 h-32 text-[#E91E63]" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="2" 
            strokeDasharray="6,6" style={{ strokeLinecap: 'round' }} />
        </svg>
        
        <svg className="absolute bottom-[30%] right-[15%] w-36 h-36 text-[#00BCD4]" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1.8" 
            strokeDasharray="4,5" style={{ strokeLinecap: 'round' }} />
        </svg>
        
        {/* Artistic dots constellation */}
        <svg className="absolute top-[25%] right-[40%] w-72 h-72 text-gray-700" viewBox="0 0 200 200">
          <circle cx="30" cy="40" r="2.5" fill="currentColor" />
          <circle cx="80" cy="20" r="3" fill="currentColor" />
          <circle cx="150" cy="60" r="2" fill="currentColor" />
          <circle cx="50" cy="120" r="2.5" fill="currentColor" />
          <circle cx="170" cy="140" r="2" fill="currentColor" />
          <circle cx="100" cy="180" r="3.5" fill="currentColor" />
          <line x1="30" y1="40" x2="80" y2="20" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,3" />
          <line x1="80" y1="20" x2="150" y2="60" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,3" />
        </svg>
        
        {/* Wavy lines */}
        <svg className="absolute bottom-[45%] left-[30%] w-64 h-64 text-gray-800" viewBox="0 0 200 200">
          <path d="M20 100 Q 60 90, 100 100 T 180 100" fill="none" stroke="currentColor" strokeWidth="1.5" 
            strokeDasharray="5,8" style={{ strokeLinecap: 'round' }} />
          <path d="M30 130 Q 70 120, 110 130 T 190 130" fill="none" stroke="currentColor" strokeWidth="1" 
            strokeDasharray="4,6" style={{ strokeLinecap: 'round' }} />
        </svg>
        
        {/* Geometric shapes */}
        <svg className="absolute top-[60%] right-[25%] w-28 h-28 text-[#9C27B0]" viewBox="0 0 80 80">
          <rect x="15" y="15" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="2"
            strokeDasharray="7,7" style={{ strokeLinecap: 'round' }} transform="rotate(20 40 40)" />
        </svg>
        
        <svg className="absolute bottom-20 left-[20%] w-32 h-32 text-[#FF9800]" viewBox="0 0 100 100">
          <polygon points="50,15 85,85 15,85" fill="none" stroke="currentColor" strokeWidth="2"
            strokeDasharray="5,5" style={{ strokeLinecap: 'round' }} />
        </svg>
      </div>

      {/* ============================================ */}
      {/* HERO SECTION - Cinematic Opening */}
      {/* ============================================ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden z-10">
        {/* Animated Background Images - Crossfade */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentHeroImage}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${heroImages[currentHeroImage]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </AnimatePresence>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        {/* Hero Content */}
        <motion.div 
          style={{ opacity, scale }}
          className="relative z-10 container mx-auto px-6 text-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-8"
          >
            <img
              src={mapsLogo}
              alt="MAPS International WLL"
              className="w-[280px] sm:w-[400px] md:w-[500px] lg:w-[600px] max-w-[90vw] mx-auto drop-shadow-2xl"
            />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4"
            style={{ 
              textShadow: '0 4px 20px rgba(0,0,0,0.5), 0 0 40px rgba(255,255,255,0.1)'
            }}
          >
            Bridging Cultures.<br />
            Empowering Futures.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
          >
            From Doha to <span className="text-[#E91E63] font-semibold">70+ countries</span>, connecting{' '}
            <span className="text-[#00BCD4] font-semibold">400+ artists</span> and empowering{' '}
            <span className="text-[#E91E63] font-semibold">thousands of youth</span> through culture, innovation, and impact.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <RippleButton
              onClick={() => window.location.href = '/work'}
              className="group relative px-10 py-5 bg-white text-gray-900 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-white/20"
            >
              <span className="relative z-10 flex items-center gap-2">
                Discover Our Story
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Sparkles className="w-5 h-5" />
                </motion.div>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#E91E63] to-[#00BCD4] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 text-white font-semibold transition-opacity duration-300">
                Discover Our Story
                <Sparkles className="w-5 h-5 rotate-12" />
              </span>
            </RippleButton>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-8 h-8 text-white/70" />
          </motion.div>
        </motion.div>
      </section>

      {/* ============================================ */}
      {/* MANIFESTO SECTION - One Powerful Statement */}
      {/* ============================================ */}
      <section className="relative py-32 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
        {/* Artistic Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Gradient Orbs with slower motion */}
          <motion.div
            animate={{ 
              x: [0, 80, 0],
              y: [0, -40, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-20 w-96 h-96 bg-[#E91E63]/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              x: [0, -80, 0],
              y: [0, 40, 0],
              scale: [1, 1.15, 1]
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-20 w-96 h-96 bg-[#00BCD4]/10 rounded-full blur-3xl"
          />
          
          {/* Hand-drawn decorative elements */}
          <svg className="absolute top-10 right-[10%] w-48 h-48 text-gray-800 opacity-10" viewBox="0 0 150 150">
            <path d="M20 75 Q 50 50, 75 75 T 130 75" fill="none" stroke="currentColor" strokeWidth="2" 
              strokeDasharray="6,8" style={{ strokeLinecap: 'round' }} />
          </svg>
          
          <svg className="absolute bottom-20 left-[15%] w-40 h-40 text-[#9C27B0] opacity-15" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2.5" 
              strokeDasharray="5,7" style={{ strokeLinecap: 'round' }} />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-5xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-8 relative">
              We don't just organize events.<br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#E91E63] to-[#00BCD4] bg-clip-text text-transparent">
                  We create moments
                </span>
                {/* Hand-drawn underline */}
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 400 12" preserveAspectRatio="none">
                  <path d="M0 6 Q 100 9, 200 6 T 400 6" fill="none" stroke="#E91E63" strokeWidth="3" 
                    style={{ strokeLinecap: 'round' }} opacity="0.6" />
                </svg>
              </span>{' '}
              that connect cultures,<br />
              ignite curiosity, and shape futures.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FEATURED IMPACT - Visual Stories */}
      {/* ============================================ */}
      <section className="relative py-32 bg-gradient-to-br from-gray-50 via-white to-amber-50/30 overflow-hidden">
        {/* Artistic decorative elements */}
        <div className="absolute inset-0 pointer-events-none opacity-8">
          <svg className="absolute top-10 left-[10%] w-56 h-56 text-[#E91E63]" viewBox="0 0 150 150">
            <circle cx="75" cy="75" r="60" fill="none" stroke="currentColor" strokeWidth="2" 
              strokeDasharray="8,10" style={{ strokeLinecap: 'round' }} />
          </svg>
          
          <svg className="absolute bottom-20 right-[15%] w-64 h-64 text-[#00BCD4]" viewBox="0 0 200 200">
            <path d="M30 100 Q 70 80, 100 100 T 170 100" fill="none" stroke="currentColor" strokeWidth="3" 
              strokeDasharray="10,12" style={{ strokeLinecap: 'round' }} />
          </svg>
          
          {/* Additional decorative elements */}
          <svg className="absolute top-1/2 right-[30%] w-40 h-40 text-[#FF9800]" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1.5" 
              strokeDasharray="6,8" style={{ strokeLinecap: 'round' }} />
          </svg>
          
          <svg className="absolute bottom-[30%] left-[20%] w-48 h-48 text-purple-500" viewBox="0 0 120 120">
            <rect x="20" y="20" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="2"
              strokeDasharray="8,10" style={{ strokeLinecap: 'round' }} transform="rotate(15 60 60)" />
          </svg>
        </div>
        
        {/* Floating gradient orbs for depth */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ 
              x: [0, 40, 0],
              y: [0, -25, 0],
              scale: [1, 1.08, 1]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-40 w-80 h-80 bg-[#E91E63]/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              x: [0, -40, 0],
              y: [0, 25, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-20 left-40 w-80 h-80 bg-[#00BCD4]/5 rounded-full blur-3xl"
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
              Our Impact in Action
              {/* Sketchy underline */}
              <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 500 10" preserveAspectRatio="none">
                <path d="M0 5 Q 125 8, 250 5 T 500 5" fill="none" stroke="#00BCD4" strokeWidth="2.5" 
                  style={{ strokeLinecap: 'round' }} opacity="0.5" />
              </svg>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              Real stories. Real change. Real futures.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* QIAF Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 aspect-[4/5] cursor-pointer shadow-xl hover:shadow-2xl transition-shadow duration-500"
              whileHover={{ y: -12, scale: 1.02 }}
            >
              <div className="absolute inset-0">
                <img
                  src={heroQiaf}
                  alt="Qatar International Art Festival"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Globe className="w-10 h-10 text-[#E91E63] mb-4" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white mb-2">QIAF 2025</h3>
                  <p className="text-white/80 text-lg mb-4">
                    400+ Artists from 70+ Countries
                  </p>
                  <div className="flex gap-4 text-sm text-white/60">
                    <span>Dec 7-12</span>
                    <span>•</span>
                    <span>Katara</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* KSSP Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900 to-purple-900 aspect-[4/5] cursor-pointer"
              whileHover={{ y: -8 }}
            >
              <div className="absolute inset-0">
                <img
                  src={heroSpace}
                  alt="Katara Space Science Program"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Zap className="w-10 h-10 text-[#00BCD4] mb-4" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white mb-2">Space Science</h3>
                  <p className="text-white/80 text-lg mb-4">
                    3,000+ Students Inspired
                  </p>
                  <div className="flex gap-4 text-sm text-white/60">
                    <span>6 Editions</span>
                    <span>•</span>
                    <span>37 Nationalities</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Youth Platform Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-900 to-red-900 aspect-[4/5] cursor-pointer"
              whileHover={{ y: -8 }}
            >
              <div className="absolute inset-0">
                <img
                  src={heroYouth}
                  alt="Youth Platform"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Users className="w-10 h-10 text-[#E91E63] mb-4" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white mb-2">Youth Platform</h3>
                  <p className="text-white/80 text-lg mb-4">
                    500+ Youth Empowered
                  </p>
                  <div className="flex gap-4 text-sm text-white/60">
                    <span>Coming 2025</span>
                    <span>•</span>
                    <span>8 Focus Areas</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* QIAF COUNTDOWN - Enhanced */}
      {/* ============================================ */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        {/* Artistic background decorations */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <svg className="absolute top-10 right-[20%] w-48 h-48 text-[#9C27B0]" viewBox="0 0 120 120">
            <rect x="20" y="20" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="3"
              strokeDasharray="10,10" style={{ strokeLinecap: 'round' }} transform="rotate(15 60 60)" />
          </svg>
          
          <svg className="absolute bottom-10 left-[10%] w-56 h-56 text-[#FF9800]" viewBox="0 0 150 150">
            <circle cx="75" cy="75" r="65" fill="none" stroke="currentColor" strokeWidth="2.5" 
              strokeDasharray="12,10" style={{ strokeLinecap: 'round' }} />
          </svg>
          </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Countdown Timer */}
              <div className="p-8 text-center bg-gradient-to-r from-[#004344] to-[#006667]">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Calendar className="w-7 h-7 text-white" />
                  <h3 className="text-2xl font-bold text-white">Event Starts In</h3>
                </div>
                
                {/* Real-time Countdown */}
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                  <motion.div 
                    key="countdown-days"
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 sm:p-4 min-w-[70px] sm:min-w-[90px]"
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                      {timeLeft.days.toString().padStart(2, '0')}
                    </div>
                    <div className="text-xs sm:text-sm text-white/80 uppercase tracking-wide font-semibold">Days</div>
                  </motion.div>
                  <motion.div
                    key="countdown-hours"
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 sm:p-4 min-w-[70px] sm:min-w-[90px]"
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                      {timeLeft.hours.toString().padStart(2, '0')}
                    </div>
                    <div className="text-xs sm:text-sm text-white/80 uppercase tracking-wide font-semibold">Hours</div>
                  </motion.div>
                  <motion.div
                    key="countdown-minutes"
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 sm:p-4 min-w-[70px] sm:min-w-[90px]"
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                      {timeLeft.minutes.toString().padStart(2, '0')}
                    </div>
                    <div className="text-xs sm:text-sm text-white/80 uppercase tracking-wide font-semibold">Minutes</div>
                  </motion.div>
                  <motion.div
                    key="countdown-seconds"
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 sm:p-4 min-w-[70px] sm:min-w-[90px]"
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                      {timeLeft.seconds.toString().padStart(2, '0')}
                    </div>
                    <div className="text-xs sm:text-sm text-white/80 uppercase tracking-wide font-semibold">Seconds</div>
                  </motion.div>
                </div>
              </div>

              {/* Main Content - Image Left, Text Right */}
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left Side - QIAF Card Image */}
                <div className="relative overflow-hidden h-[350px] sm:h-[400px] md:h-[450px] lg:h-auto">
                  <img
                    src={qiafCardImage}
                    alt="Qatar International Art Festival 2025 - 7th Edition"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-6 left-6">
                    <div className="bg-[#004344] text-white px-5 py-2 rounded-full font-bold text-base shadow-xl">
                      7th Edition
                    </div>
                  </div>
                  <div className="absolute top-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm px-5 py-2 rounded-full font-bold text-sm shadow-xl text-[#004344]">
                      FEATURED EVENT
                    </div>
                  </div>
                </div>

                {/* Right Side - Event Details */}
                <div className="p-10 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50">
                  <div className="mb-6">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 leading-tight">
                      Qatar International Art Festival 2025
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                      Join 400+ artists from 70+ countries for the world's most celebrated art festival. 
                      Experience 15 major event components including VIP ceremonies, international exhibitions, 
                      and cultural exchanges.
                    </p>
                  </div>


                  {/* Event Info Cards - FIXED COLORS */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#004344' }}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm font-semibold text-gray-600">DATES</span>
                      </div>
                      <div className="text-gray-800 font-bold">Dec 7-12, 2025</div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#004344' }}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-sm font-semibold text-gray-600">VENUE</span>
                      </div>
                      <div className="text-gray-800 font-bold">Katara Cultural Village</div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#004344' }}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="text-sm font-semibold text-gray-600">SCALE</span>
                      </div>
                      <div className="text-gray-800 font-bold">400+ Artists, 70+ Countries</div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button 
                    onClick={() => window.open('https://qiaf.net', '_blank')}
                    className="group bg-[#004344] hover:bg-[#006667] text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center gap-3 shadow-xl hover:shadow-2xl hover:scale-105"
                  >
                    <span>Register at QIAF.net</span>
                    <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* ============================================ */}
      {/* TESTIMONIALS SECTION - Rotating Stories */}
      {/* ============================================ */}
      <section className="py-32 bg-gradient-to-br from-amber-50 via-orange-50/30 to-rose-50 relative overflow-hidden">
        {/* Artistic Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <svg className="absolute top-20 left-[10%] w-64 h-64 text-[#FF9800]" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="3" 
              strokeDasharray="12,10" style={{ strokeLinecap: 'round' }} />
          </svg>
          
          <svg className="absolute bottom-20 right-[15%] w-72 h-72 text-[#E91E63]" viewBox="0 0 200 200">
            <path d="M40 100 Q 80 80, 120 100 T 180 100" fill="none" stroke="currentColor" strokeWidth="3" 
              strokeDasharray="10,10" style={{ strokeLinecap: 'round' }} />
          </svg>
        </div>
        
        {/* Soft floating gradient orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ 
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-20 w-96 h-96 bg-[#E91E63]/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              x: [0, -50, 0],
              y: [0, 30, 0],
              scale: [1, 1.15, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 left-20 w-96 h-96 bg-[#FF9800]/10 rounded-full blur-3xl"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block">
              What They Say
              {/* Hand-drawn underline */}
              <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 500 10" preserveAspectRatio="none">
                <path d="M0 5 Q 125 8, 250 5 T 500 5" fill="none" stroke="#E91E63" strokeWidth="2.5" 
                  style={{ strokeLinecap: 'round' }} opacity="0.5" />
              </svg>
            </h2>
            <p className="text-xl text-gray-700">
              Stories from artists, students, and partners across 70+ countries
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="relative bg-gradient-to-br from-white/90 via-cyan-50/30 to-teal-50/40 backdrop-blur-xl rounded-3xl p-12 text-center shadow-2xl border border-cyan-200/30 overflow-hidden"
              >
                {/* Turquoise accent overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-100/10 to-teal-100/20 pointer-events-none" />
                
                {/* Content wrapper */}
                <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-amber-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
            </div>
                <p className="text-2xl md:text-3xl text-gray-800 font-light italic mb-8 leading-relaxed">
                  "{testimonials[activeTestimonial].quote}"
                </p>
                <p className="text-xl text-gray-900 font-semibold">
                  {testimonials[activeTestimonial].author}
                </p>
                <p className="text-lg text-gray-600">
                  {testimonials[activeTestimonial].country}
                </p>
            </div>
              </motion.div>
            </AnimatePresence>

            {/* Testimonial Indicators */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? 'bg-gradient-to-r from-[#E91E63] to-[#00BCD4] w-8'
                      : 'bg-gray-400 hover:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* ============================================ */}
      {/* FOOTER */}
      {/* ============================================ */}
      <Footer />
    </main>
  );
};

export default Index;
