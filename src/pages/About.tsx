import { useEffect, useRef, useState } from "react";
import { Globe, Users, Award, Zap, Heart, Star, Trophy, Calendar, MapPin, Mail, Camera, Image, ExternalLink, ArrowRight, Play, Target, TrendingUp, Clock, CheckCircle, Menu, X, Building } from "lucide-react";
import FounderSection from "@/components/FounderSection";
import PartnershipsShowcase from "@/components/PartnershipsShowcase";
import backgroundImage from "@/assets/background.jpg";
import culturalExcellenceImage from "@/assets/values/culturalexcellence.jpg";
import youthEmpowermentImage from "@/assets/values/Youthempowerment.jpg";
import globalCollabImage from "@/assets/values/globalcollab.jpg";
import innovationImage from "@/assets/values/innovation.jpg";
import rashmiImage from "@/assets/Rashmi-founder/rashmi-agarwal-professional.jpg";
// Partnership images
import ministryCulture from "@/assets/partnerships/ministries/culture/partnership.jpg";
import ministryEducation from "@/assets/partnerships/ministries/education/collaboration.jpg";
import ministryYouth from "@/assets/partnerships/ministries/youth-sports/partnership.jpg";
import ministryForeign from "@/assets/partnerships/ministries/foreign-affairs/diplomacy.jpg";
import qatarLibrary from "@/assets/partnerships/government-bodies/qatar-national-library/programs.jpg";
import kataraCultural from "@/assets/partnerships/government-bodies/katara-cultural-village/collaboration.jpg";
import qatarFoundation from "@/assets/partnerships/government-bodies/qatar-foundation/partnership.jpg";
import qatarMuseums from "@/assets/partnerships/government-bodies/qatar-museums/exhibitions.jpg";
import educationAboveAll from "@/assets/partnerships/ngos/education-above-all/programs.jpg";
import qatarCharity from "@/assets/partnerships/ngos/qatar-charity/initiatives.jpg";
import reachOutAsia from "@/assets/partnerships/ngos/reach-out-asia/programs.jpg";
import alFakhoora from "@/assets/partnerships/ngos/al-fakhoora/education.jpg";
import nationalMuseum from "@/assets/partnerships/cultural-institutions/national-museum-qatar/partnership.jpg";
import fireStateArtists from "@/assets/partnerships/cultural-institutions/fire-state-artists/residency.jpg";
import qatarPhilharmonic from "@/assets/partnerships/cultural-institutions/qatar-philharmonic/collaboration.jpg";
import mathafMuseum from "@/assets/partnerships/cultural-institutions/mathaf-arab-museum/collaboration.jpg";

const About = () => {
  const leadRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const impactRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const leadershipRef = useRef<HTMLDivElement>(null);
  const partnershipsRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [showNav, setShowNav] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  // Navigation items for floating menu
  const navItems = [
    { id: 'story', label: 'Our Story', ref: storyRef },
    { id: 'impact', label: 'Our Impact', ref: impactRef },
    { id: 'services', label: 'What We Do', ref: servicesRef },
    { id: 'values', label: 'Our Values', ref: valuesRef },
    { id: 'leadership', label: 'Leadership', ref: leadershipRef },
    { id: 'partnerships', label: 'Partnerships', ref: partnershipsRef },
    { id: 'team', label: 'Team', ref: teamRef }
  ];

  // Impact metrics with animation
  const impactMetrics = [
    { number: 70, suffix: "+", label: "Countries Reached", icon: <Globe className="w-6 h-6" /> },
    { number: 400, suffix: "+", label: "Artists Connected", icon: <Users className="w-6 h-6" /> },
    { number: 11, suffix: "+", label: "Years of Excellence", icon: <Award className="w-6 h-6" /> },
    { number: 500, suffix: "+", label: "Youth Empowered", icon: <Zap className="w-6 h-6" /> }
  ];

  // What We Do - Services
  const services = [
    {
      title: "Cultural Diplomacy",
      description: "Building bridges between nations through art, culture, and meaningful exchange programs.",
      icon: <Globe className="w-8 h-8" />,
      color: "from-magenta to-pink-500",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop"
    },
    {
      title: "Youth Programs", 
      description: "Empowering the next generation through space science, innovation, and leadership development.",
      icon: <Users className="w-8 h-8" />,
      color: "from-teal to-cyan-500",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
    },
    {
      title: "Art Festivals",
      description: "Creating world-class cultural experiences that celebrate diversity and artistic excellence.",
      icon: <Award className="w-8 h-8" />,
      color: "from-magenta to-pink-500",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop"
    },
    {
      title: "Space Science",
      description: "Bringing cutting-edge space technology education to students across Qatar and beyond.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-teal to-cyan-500",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop"
    },
    {
      title: "Community Building",
      description: "Fostering strong, connected communities through collaborative cultural initiatives.",
      icon: <Heart className="w-8 h-8" />,
      color: "from-magenta to-pink-500",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop"
    }
  ];

  // Our Values with photos
  const values = [
    {
      title: "Cultural Excellence",
      text: "We believe in the transformative power of culture to bridge divides and create meaningful connections. Every project we undertake is driven by our commitment to cultural excellence and authentic representation.",
      image: culturalExcellenceImage,
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Youth Empowerment",
      text: "The next generation is our greatest asset. We create platforms and opportunities for young people to lead, innovate, and shape the future of cultural exchange and community development.",
      image: youthEmpowermentImage,
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Global Collaboration",
      text: "From Qatar to 70+ countries worldwide, we believe in the power of international collaboration. Our partnerships span continents, bringing together diverse perspectives to create something truly extraordinary.",
      image: globalCollabImage,
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "Innovation & Creativity",
      text: "We constantly push boundaries, exploring new ways to connect cultures and communities. Our approach combines traditional wisdom with cutting-edge innovation to create lasting impact.",
      image: innovationImage,
      icon: <Zap className="w-8 h-8" />
    }
  ];


  // Scroll tracking for responsive sizing
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('data-section');
            if (sectionId) {
              setVisibleSections(prev => new Set([...prev, sectionId]));
            }
            
            // Add reveal class to the section
            entry.target.classList.add('reveal');
            
            // Animate individual items with stagger
            const items = entry.target.querySelectorAll('.animate-item');
            items.forEach((item, index) => {
                setTimeout(() => {
                  item.classList.add('reveal');
                }, index * 100);
              });
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections
    [leadRef, storyRef, impactRef, servicesRef, valuesRef, leadershipRef, partnershipsRef, teamRef].forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll to section
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setShowNav(false);
  };

  return (
    <div className="min-h-screen bg-white text-black relative overflow-hidden">
      {/* Cultural & Artistic Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{opacity: 1}}>
        {/* Abstract Art Patterns - Inspired by QIAF */}
        <div className="absolute top-16 left-16 w-48 h-32" style={{opacity: 0.5}}>
          <div className="w-full h-full bg-gradient-to-br from-magenta/60 via-transparent to-teal/60 transform rotate-12" style={{opacity: 1}}></div>
          <div className="absolute top-2 left-2 w-8 h-8 bg-magenta/80 rounded-full" style={{opacity: 1}}></div>
          <div className="absolute bottom-2 right-2 w-6 h-6 bg-teal/80 rounded-full" style={{opacity: 1}}></div>
        </div>

        {/* Cultural Motifs - Geometric Patterns */}
        <div className="absolute top-32 right-24 w-40 h-40" style={{opacity: 0.45}}>
          <div className="w-full h-full border-2 border-magenta/70 transform rotate-45 animate-spin" style={{animationDuration: '120s'}}></div>
          <div className="absolute inset-4 border border-teal/70 transform -rotate-45 animate-spin" style={{animationDuration: '90s'}}></div>
          <div className="absolute inset-8 border border-magenta/60 transform rotate-45 animate-spin" style={{animationDuration: '150s'}}></div>
        </div>

        {/* Artistic Brush Strokes */}
        <div className="absolute bottom-24 left-1/4 w-56 h-20" style={{opacity: 0.55}}>
          <div className="w-full h-full bg-gradient-to-r from-transparent via-magenta/50 to-transparent transform -rotate-6"></div>
          <div className="absolute top-1 w-3/4 h-2 bg-teal/60 transform rotate-3"></div>
          <div className="absolute bottom-1 w-1/2 h-1 bg-magenta/70 transform -rotate-2"></div>
        </div>

        {/* Paint Splashes */}
        <div className="absolute top-1/2 right-16 w-32 h-32" style={{opacity: 0.5}}>
          <div className="w-16 h-16 bg-magenta/70 rounded-full absolute top-0 left-0"></div>
          <div className="w-12 h-12 bg-teal/70 rounded-full absolute top-4 right-0"></div>
          <div className="w-8 h-8 bg-magenta/60 rounded-full absolute bottom-0 left-4"></div>
          <div className="w-6 h-6 bg-teal/60 rounded-full absolute bottom-2 right-4"></div>
        </div>

        {/* Abstract Cultural Symbols */}
        <div className="absolute bottom-32 right-1/3 w-24 h-24" style={{opacity: 0.45}}>
          <div className="w-full h-full border-2 border-magenta/70 rounded-full"></div>
          <div className="absolute inset-2 border border-teal/70 rounded-full"></div>
          <div className="absolute inset-4 border border-magenta/60 rounded-full"></div>
        </div>

        {/* Flowing Artistic Lines */}
        <div className="absolute top-2/3 left-16 w-64 h-8" style={{opacity: 0.5}}>
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-magenta/60 to-teal/60 transform rotate-3"></div>
          <div className="absolute top-2 w-3/4 h-0.5 bg-teal/50 transform -rotate-2"></div>
          <div className="absolute top-4 w-1/2 h-0.5 bg-magenta/50 transform rotate-1"></div>
        </div>

        {/* Cultural Pattern Dots */}
        <div className="absolute top-1/4 left-1/2 w-20 h-20" style={{opacity: 0.4}}>
          <div className="grid grid-cols-3 gap-1 w-full h-full">
            <div className="w-2 h-2 bg-magenta/60 rounded-full"></div>
            <div className="w-2 h-2 bg-teal/60 rounded-full"></div>
            <div className="w-2 h-2 bg-magenta/60 rounded-full"></div>
            <div className="w-2 h-2 bg-teal/60 rounded-full"></div>
            <div className="w-2 h-2 bg-magenta/60 rounded-full"></div>
            <div className="w-2 h-2 bg-teal/60 rounded-full"></div>
            <div className="w-2 h-2 bg-magenta/60 rounded-full"></div>
            <div className="w-2 h-2 bg-teal/60 rounded-full"></div>
            <div className="w-2 h-2 bg-magenta/60 rounded-full"></div>
          </div>
        </div>

        {/* Abstract Art Canvas */}
        <div className="absolute bottom-16 right-1/4 w-40 h-40" style={{opacity: 0.45}}>
          <div className="w-full h-full bg-gradient-to-br from-magenta/40 via-transparent to-teal/40 transform rotate-12"></div>
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-teal/50 transform -rotate-6"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-magenta/50 transform rotate-6"></div>
        </div>

        {/* Cultural Heritage Motifs */}
        <div className="absolute top-1/2 left-1/3 w-16 h-16" style={{opacity: 0.5}}>
          <div className="w-full h-full border-2 border-teal/70 transform rotate-45 animate-spin" style={{animationDuration: '180s'}}></div>
          <div className="absolute inset-2 border border-magenta/70 transform -rotate-45 animate-spin" style={{animationDuration: '150s'}}></div>
        </div>

        {/* Additional Elements - More Coverage */}
        <div className="absolute top-8 right-8 w-24 h-24" style={{opacity: 0.4}}>
          <div className="w-full h-full bg-gradient-to-br from-teal/50 to-magenta/50 rounded-full"></div>
        </div>

        <div className="absolute top-1/3 left-8 w-32 h-16" style={{opacity: 0.45}}>
          <div className="w-full h-full bg-gradient-to-r from-magenta/40 to-teal/40 transform rotate-45"></div>
        </div>

        <div className="absolute bottom-8 left-8 w-20 h-20" style={{opacity: 0.5}}>
          <div className="w-full h-full border-2 border-magenta/60 rounded-full"></div>
        </div>

        <div className="absolute top-3/4 right-1/3 w-28 h-28" style={{opacity: 0.4}}>
          <div className="w-full h-full bg-gradient-to-br from-teal/50 via-transparent to-magenta/50 transform -rotate-12"></div>
        </div>

        <div className="absolute top-1/6 left-1/3 w-16 h-16" style={{opacity: 0.45}}>
          <div className="w-full h-full border border-teal/60 transform rotate-45 animate-spin" style={{animationDuration: '108s'}}></div>
        </div>

        <div className="absolute bottom-1/3 right-8 w-24 h-12" style={{opacity: 0.5}}>
          <div className="w-full h-full bg-gradient-to-r from-magenta/50 to-transparent transform rotate-12"></div>
        </div>

        <div className="absolute top-2/3 left-1/4 w-20 h-20" style={{opacity: 0.4}}>
          <div className="w-full h-full bg-teal/50 rounded-full"></div>
        </div>

        <div className="absolute top-1/4 right-1/4 w-32 h-8" style={{opacity: 0.45}}>
          <div className="w-full h-full bg-gradient-to-r from-transparent via-teal/50 to-magenta/50 transform -rotate-6"></div>
        </div>

        <div className="absolute bottom-1/4 left-1/6 w-16 h-16" style={{opacity: 0.5}}>
          <div className="w-full h-full border-2 border-magenta/70 transform rotate-30"></div>
        </div>

        <div className="absolute top-1/2 right-1/6 w-24 h-24" style={{opacity: 0.4}}>
          <div className="w-full h-full bg-gradient-to-br from-magenta/40 to-teal/40 transform rotate-60"></div>
        </div>

        <div className="absolute bottom-1/6 left-1/2 w-28 h-16" style={{opacity: 0.45}}>
          <div className="w-full h-full bg-gradient-to-r from-teal/50 via-magenta/30 to-teal/50 transform rotate-15"></div>
        </div>

        <div className="absolute top-1/8 right-1/2 w-20 h-20" style={{opacity: 0.5}}>
          <div className="w-full h-full border border-teal/60 rounded-full"></div>
        </div>

        <div className="absolute bottom-1/8 left-1/8 w-24 h-24" style={{opacity: 0.4}}>
          <div className="w-full h-full bg-gradient-to-br from-magenta/50 to-transparent transform -rotate-45"></div>
        </div>

        <div className="absolute top-3/4 left-1/8 w-16 h-16" style={{opacity: 0.45}}>
          <div className="w-full h-full border-2 border-teal/70 transform rotate-90 animate-spin" style={{animationDuration: '132s'}}></div>
        </div>

        <div className="absolute bottom-1/2 right-1/8 w-32 h-8" style={{opacity: 0.5}}>
          <div className="w-full h-full bg-gradient-to-r from-magenta/60 to-teal/60 transform rotate-30"></div>
        </div>

        {/* MASSIVE AMOUNT OF ADDITIONAL BUBBLES AND SHAPES */}
        <div className="absolute top-10 left-10 w-16 h-16" style={{opacity: 0.6}}>
          <div className="w-full h-full bg-magenta/70 rounded-full"></div>
        </div>
        <div className="absolute top-20 right-20 w-12 h-12" style={{opacity: 0.5}}>
          <div className="w-full h-full bg-teal/70 rounded-full"></div>
        </div>
        <div className="absolute top-40 left-1/4 w-20 h-20" style={{opacity: 0.4}}>
          <div className="w-full h-full bg-magenta/60 rounded-full"></div>
        </div>
        <div className="absolute top-60 right-1/3 w-14 h-14" style={{opacity: 0.7}}>
          <div className="w-full h-full bg-teal/80 rounded-full"></div>
        </div>
        <div className="absolute top-80 left-1/2 w-18 h-18" style={{opacity: 0.5}}>
          <div className="w-full h-full bg-magenta/70 rounded-full"></div>
        </div>
        <div className="absolute top-100 right-1/4 w-10 h-10" style={{opacity: 0.6}}>
          <div className="w-full h-full bg-teal/60 rounded-full"></div>
        </div>
        <div className="absolute top-120 left-1/6 w-22 h-22" style={{opacity: 0.4}}>
          <div className="w-full h-full bg-magenta/50 rounded-full"></div>
        </div>
        <div className="absolute top-140 right-1/5 w-16 h-16" style={{opacity: 0.8}}>
          <div className="w-full h-full bg-teal/70 rounded-full"></div>
        </div>
        <div className="absolute top-160 left-2/3 w-12 h-12" style={{opacity: 0.5}}>
          <div className="w-full h-full bg-magenta/60 rounded-full"></div>
        </div>
        <div className="absolute top-180 right-1/6 w-20 h-20" style={{opacity: 0.6}}>
          <div className="w-full h-full bg-teal/80 rounded-full"></div>
        </div>

        {/* MORE SHAPES AND LINES */}
        <div className="absolute top-200 left-1/8 w-24 h-8" style={{opacity: 0.5}}>
          <div className="w-full h-full bg-gradient-to-r from-magenta/60 to-teal/60 transform rotate-45"></div>
        </div>
        <div className="absolute top-220 right-1/7 w-16 h-16" style={{opacity: 0.7}}>
          <div className="w-full h-full border-2 border-magenta/70 rounded-full"></div>
        </div>
        <div className="absolute top-240 left-1/3 w-14 h-14" style={{opacity: 0.4}}>
          <div className="w-full h-full bg-teal/60 rounded-full"></div>
        </div>
        <div className="absolute top-260 right-1/8 w-18 h-18" style={{opacity: 0.6}}>
          <div className="w-full h-full bg-magenta/70 rounded-full"></div>
        </div>
        <div className="absolute top-280 left-1/5 w-12 h-12" style={{opacity: 0.5}}>
          <div className="w-full h-full bg-teal/80 rounded-full"></div>
        </div>
        <div className="absolute top-300 right-1/3 w-20 h-20" style={{opacity: 0.4}}>
          <div className="w-full h-full bg-magenta/60 rounded-full"></div>
        </div>
        <div className="absolute top-320 left-1/7 w-16 h-16" style={{opacity: 0.8}}>
          <div className="w-full h-full bg-teal/70 rounded-full"></div>
        </div>
        <div className="absolute top-340 right-1/4 w-14 h-14" style={{opacity: 0.5}}>
          <div className="w-full h-full bg-magenta/80 rounded-full"></div>
        </div>
        <div className="absolute top-360 left-1/2 w-22 h-22" style={{opacity: 0.6}}>
          <div className="w-full h-full bg-teal/60 rounded-full"></div>
        </div>
        <div className="absolute top-380 right-1/5 w-18 h-18" style={{opacity: 0.4}}>
          <div className="w-full h-full bg-magenta/70 rounded-full"></div>
        </div>

        {/* EVEN MORE BUBBLES */}
        <div className="absolute top-400 left-1/6 w-12 h-12" style={{opacity: 0.7}}>
          <div className="w-full h-full bg-teal/80 rounded-full"></div>
        </div>
        <div className="absolute top-420 right-1/9 w-20 h-20" style={{opacity: 0.5}}>
          <div className="w-full h-full bg-magenta/60 rounded-full"></div>
        </div>
        <div className="absolute top-440 left-1/4 w-16 h-16" style={{opacity: 0.6}}>
          <div className="w-full h-full bg-teal/70 rounded-full"></div>
        </div>
        <div className="absolute top-460 right-1/6 w-14 h-14" style={{opacity: 0.4}}>
          <div className="w-full h-full bg-magenta/80 rounded-full"></div>
        </div>
        <div className="absolute top-480 left-1/8 w-18 h-18" style={{opacity: 0.8}}>
          <div className="w-full h-full bg-teal/60 rounded-full"></div>
        </div>
        <div className="absolute top-500 right-1/2 w-12 h-12" style={{opacity: 0.5}}>
          <div className="w-full h-full bg-magenta/70 rounded-full"></div>
        </div>
        <div className="absolute top-520 left-1/3 w-22 h-22" style={{opacity: 0.6}}>
          <div className="w-full h-full bg-teal/80 rounded-full"></div>
        </div>
        <div className="absolute top-540 right-1/7 w-16 h-16" style={{opacity: 0.4}}>
          <div className="w-full h-full bg-magenta/60 rounded-full"></div>
        </div>
        <div className="absolute top-560 left-1/5 w-20 h-20" style={{opacity: 0.7}}>
          <div className="w-full h-full bg-teal/70 rounded-full"></div>
        </div>
        <div className="absolute top-580 right-1/8 w-14 h-14" style={{opacity: 0.5}}>
          <div className="w-full h-full bg-magenta/80 rounded-full"></div>
        </div>

        {/* GRADIENT SHAPES */}
        <div className="absolute top-600 left-1/7 w-24 h-12" style={{opacity: 0.6}}>
          <div className="w-full h-full bg-gradient-to-r from-magenta/60 to-teal/60 transform rotate-30"></div>
        </div>
        <div className="absolute top-620 right-1/4 w-18 h-18" style={{opacity: 0.4}}>
          <div className="w-full h-full bg-gradient-to-br from-teal/70 to-magenta/70 rounded-full"></div>
        </div>
        <div className="absolute top-640 left-1/2 w-16 h-16" style={{opacity: 0.8}}>
          <div className="w-full h-full bg-gradient-to-br from-magenta/60 to-teal/60 rounded-full"></div>
        </div>
        <div className="absolute top-660 right-1/6 w-20 h-20" style={{opacity: 0.5}}>
          <div className="w-full h-full bg-gradient-to-br from-teal/80 to-magenta/80 rounded-full"></div>
        </div>
        <div className="absolute top-680 left-1/9 w-14 h-14" style={{opacity: 0.6}}>
          <div className="w-full h-full bg-gradient-to-br from-magenta/70 to-teal/70 rounded-full"></div>
        </div>
        <div className="absolute top-700 right-1/3 w-22 h-22" style={{opacity: 0.4}}>
          <div className="w-full h-full bg-gradient-to-br from-teal/60 to-magenta/60 rounded-full"></div>
        </div>
        <div className="absolute top-720 left-1/4 w-18 h-18" style={{opacity: 0.7}}>
          <div className="w-full h-full bg-gradient-to-br from-magenta/80 to-teal/80 rounded-full"></div>
        </div>
        <div className="absolute top-740 right-1/5 w-16 h-16" style={{opacity: 0.5}}>
          <div className="w-full h-full bg-gradient-to-br from-teal/70 to-magenta/70 rounded-full"></div>
        </div>
        <div className="absolute top-760 left-1/6 w-12 h-12" style={{opacity: 0.8}}>
          <div className="w-full h-full bg-gradient-to-br from-magenta/60 to-teal/60 rounded-full"></div>
        </div>
        <div className="absolute top-780 right-1/7 w-20 h-20" style={{opacity: 0.6}}>
          <div className="w-full h-full bg-gradient-to-br from-teal/80 to-magenta/80 rounded-full"></div>
        </div>
      </div>
      {/* Floating Navigation */}
      <div className="fixed top-1/2 right-6 transform -translate-y-1/2 z-50">
        <button
          onClick={() => setShowNav(!showNav)}
          className="bg-magenta text-white p-3 rounded-full shadow-lg hover:bg-magenta-dark transition-all duration-300"
        >
          {showNav ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
        
        {showNav && (
          <div className="absolute right-16 top-0 bg-white rounded-2xl shadow-2xl p-4 min-w-[200px]">
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.ref)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                    visibleSections.has(item.id)
                      ? 'bg-magenta text-white'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Hero Section - Keep as is */}
      <section ref={leadRef} className="relative overflow-hidden z-10">
        <div
          className="h-52 md:h-64"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              About MAPS International WLL
          </h1>
          </div>
        </div>
      </section>

      {/* Our Story Section - New Company Focus */}
      <section ref={storyRef} data-section="story" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden z-10">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-magenta rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-teal rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-magenta rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-32 right-1/3 w-28 h-28 bg-teal rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-magenta to-teal mx-auto mb-8"></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Founded in 2014, MAPS International WLL has been at the forefront of cultural diplomacy and community empowerment. 
                What started as a vision to connect cultures has grown into a global movement spanning 70+ countries.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Our journey began with a simple belief: that art, culture, and meaningful exchange have the power to transform 
                communities and build bridges between nations. Today, we're proud to have connected over 400 artists, 
                empowered 500+ youth, and created lasting impact across the globe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section - New */}
      <section ref={impactRef} data-section="impact" className="py-20 bg-dark text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Impact
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-magenta to-teal mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers that tell the story of our global cultural impact and community reach
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="text-center animate-item">
                <div className="w-20 h-20 bg-gradient-to-r from-magenta to-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  {metric.icon}
                </div>
                <div className="text-4xl font-bold mb-2">
                  {metric.number}{metric.suffix}
                </div>
                <div className="text-gray-300">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section - Enhanced */}
      <section ref={servicesRef} data-section="services" className="py-20 bg-white relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-20 left-20 w-40 h-40 bg-magenta/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-32 h-32 bg-teal/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/3 w-24 h-24 bg-magenta/10 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 right-1/4 w-36 h-36 bg-teal/10 rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              What We Do
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-magenta to-teal mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach to cultural diplomacy and community empowerment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group animate-item">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-magenta/20">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center`}>
                        <div className="text-white">
                          {service.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section - Enhanced */}
      <section ref={valuesRef} data-section="values" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              Our Values
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-magenta to-teal mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and every community we serve
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="animate-item">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 group h-full">
                  <div className="relative h-40 overflow-hidden">
                  <img
                    src={value.image}
                      alt={value.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-3 right-3 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <div className="text-white">
                        {value.icon}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-dark mb-3">{value.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">{value.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section - Enhanced Rashmi Section */}
      <section ref={leadershipRef} data-section="leadership" className="py-20 bg-white relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-16 left-16 w-36 h-36 bg-magenta/10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-24 w-28 h-28 bg-teal/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-24 left-1/4 w-32 h-32 bg-magenta/10 rounded-full animate-pulse delay-2000"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              Leadership
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-magenta to-teal mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visionary leadership driving cultural diplomacy and global impact
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-magenta/5 to-teal/5 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center">
                  <div className="w-80 h-80 mx-auto bg-gradient-to-br from-magenta to-teal rounded-3xl flex items-center justify-center mb-8 shadow-2xl">
                    <img 
                      src={rashmiImage} 
                      alt="Rashmi Agarwal"
                      className="w-72 h-72 rounded-2xl object-cover"
                    />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-4xl font-bold text-dark mb-2">Rashmi Agarwal</h3>
                    <p className="text-2xl text-magenta font-semibold mb-6">Founder & CEO</p>
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    A visionary cultural leader with over 20 years of experience in cultural diplomacy and community empowerment. 
                    Rashmi has led MAPS International WLL to connect 70+ countries and empower thousands of youth worldwide.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Her expertise spans international cultural exchange, youth development, and strategic partnerships. 
                    Under her leadership, MAPS has become a global platform for cultural diplomacy and community impact.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <div className="flex items-center space-x-3 bg-white/50 rounded-lg p-4">
                      <Trophy className="w-6 h-6 text-magenta" />
                      <div>
                        <div className="font-semibold text-dark">20+ Years</div>
                        <div className="text-sm text-gray-600">Experience</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 bg-white/50 rounded-lg p-4">
                      <Globe className="w-6 h-6 text-teal" />
                      <div>
                        <div className="font-semibold text-dark">70+ Countries</div>
                        <div className="text-sm text-gray-600">Global Reach</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 bg-white/50 rounded-lg p-4">
                      <Award className="w-6 h-6 text-magenta" />
                      <div>
                        <div className="font-semibold text-dark">Multiple</div>
                        <div className="text-sm text-gray-600">Awards</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <a 
                      href="https://www.rashmiagarwal.net" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-3 bg-gradient-to-r from-magenta to-teal text-white px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 text-lg font-semibold"
                    >
                      <span>View Portfolio</span>
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section ref={partnershipsRef} data-section="partnerships" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              Our Partnerships
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-magenta to-teal mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building bridges across cultures through strategic partnerships with government bodies, embassies, NGOs, and cultural institutions worldwide.
            </p>
          </div>
          
          {/* Partnership Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Government Ministries */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 group">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={ministryCulture} 
                  alt="Ministry of Culture Partnership"
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-magenta text-white rounded-full text-xs font-semibold">
                    Strategic
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-dark mb-2">Ministry of Culture</h3>
                <p className="text-sm text-gray-600 mb-3">Strategic partnership for cultural initiatives and international arts programs.</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Doha, Qatar</span>
                  <span>Since 2018</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 group">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={ministryEducation} 
                  alt="Ministry of Education Partnership"
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-teal text-white rounded-full text-xs font-semibold">
                    Active
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-dark mb-2">Ministry of Education</h3>
                <p className="text-sm text-gray-600 mb-3">Educational outreach programs and youth development initiatives.</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Doha, Qatar</span>
                  <span>Since 2019</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 group">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={ministryYouth} 
                  alt="Ministry of Youth & Sports Partnership"
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-magenta text-white rounded-full text-xs font-semibold">
                    Active
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-dark mb-2">Ministry of Youth & Sports</h3>
                <p className="text-sm text-gray-600 mb-3">Youth empowerment through arts and cultural sports programs.</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Doha, Qatar</span>
                  <span>Since 2020</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 group">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={ministryForeign} 
                  alt="Ministry of Foreign Affairs Partnership"
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-teal text-white rounded-full text-xs font-semibold">
                    Strategic
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-dark mb-2">Ministry of Foreign Affairs</h3>
                <p className="text-sm text-gray-600 mb-3">Cultural diplomacy and international cultural exchange programs.</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Doha, Qatar</span>
                  <span>Since 2021</span>
                </div>
              </div>
            </div>

            {/* Government Bodies */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 group">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={qatarLibrary} 
                  alt="Qatar National Library Partnership"
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-magenta text-white rounded-full text-xs font-semibold">
                    Active
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-dark mb-2">Qatar National Library</h3>
                <p className="text-sm text-gray-600 mb-3">Literary and cultural programming in Qatar's premier library space.</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Doha, Qatar</span>
                  <span>Since 2020</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 group">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={kataraCultural} 
                  alt="Katara Cultural Village Partnership"
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-teal text-white rounded-full text-xs font-semibold">
                    Strategic
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-dark mb-2">Katara Cultural Village</h3>
                <p className="text-sm text-gray-600 mb-3">Premier cultural destination hosting major art exhibitions and cultural events.</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Doha, Qatar</span>
                  <span>Since 2018</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 group">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={qatarFoundation} 
                  alt="Qatar Foundation Partnership"
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-magenta text-white rounded-full text-xs font-semibold">
                    Strategic
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-dark mb-2">Qatar Foundation</h3>
                <p className="text-sm text-gray-600 mb-3">Educational and cultural development initiatives and programs.</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Doha, Qatar</span>
                  <span>Since 2019</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 group">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src="https://yt3.googleusercontent.com/Beh5SwHH0dzwqs-DHFM1LuoeWHGB0_uv2-El01lCTox_hLakBZtmLyJRe7cKVsBZmKp0gqDPvQ=s900-c-k-c0x00ffffff-no-rj" 
                  alt="Qatar Museums Partnership"
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const placeholder = target.nextElementSibling as HTMLElement;
                      if (placeholder) placeholder.style.display = 'flex';
                    }}
                  />
                {/* Fallback placeholder */}
                  <div 
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-magenta/20 to-teal/20"
                    style={{ display: 'none' }}
                  >
                    <div className="text-center">
                    <Building className="w-12 h-12 text-magenta/60 mx-auto mb-2" />
                    <p className="text-magenta/80 font-medium text-sm">Qatar Museums</p>
                    <p className="text-magenta/60 text-xs">Logo Coming Soon</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-teal text-white rounded-full text-xs font-semibold">
                    Active
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-dark mb-2">Qatar Museums</h3>
                <p className="text-sm text-gray-600 mb-3">Art exhibitions and cultural programming across Qatar's museum network.</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Doha, Qatar</span>
                  <span>Since 2020</span>
                </div>
              </div>
            </div>

            {/* NGOs */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 group">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={educationAboveAll} 
                  alt="Education Above All Partnership"
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-teal text-white rounded-full text-xs font-semibold">
                    Strategic
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-dark mb-2">Education Above All</h3>
                <p className="text-sm text-gray-600 mb-3">Global education initiatives through cultural arts programming.</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Doha, Qatar</span>
                  <span>Since 2020</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 group">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={qatarCharity} 
                  alt="Qatar Charity Partnership"
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-magenta text-white rounded-full text-xs font-semibold">
                    Long-term
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-dark mb-2">Qatar Charity</h3>
                <p className="text-sm text-gray-600 mb-3">Community-focused cultural and educational development programs.</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Doha, Qatar</span>
                  <span>Since 2019</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 group">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={reachOutAsia} 
                  alt="Reach Out to Asia Partnership"
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-teal text-white rounded-full text-xs font-semibold">
                    Active
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-dark mb-2">Reach Out to Asia</h3>
                <p className="text-sm text-gray-600 mb-3">Cross-cultural programs promoting Asian heritage and understanding.</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Doha, Qatar</span>
                  <span>Since 2021</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 group">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={alFakhoora} 
                  alt="Al Fakhoora Partnership"
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-magenta text-white rounded-full text-xs font-semibold">
                    Active
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-dark mb-2">Al Fakhoora</h3>
                <p className="text-sm text-gray-600 mb-3">Educational support and cultural development for underserved communities.</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Doha, Qatar</span>
                  <span>Since 2022</span>
                </div>
              </div>
            </div>

            {/* Cultural Institutions */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 group">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={nationalMuseum} 
                  alt="National Museum of Qatar Partnership"
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-teal text-white rounded-full text-xs font-semibold">
                    Active
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-dark mb-2">National Museum of Qatar</h3>
                <p className="text-sm text-gray-600 mb-3">Qatari heritage preservation and cultural education initiatives.</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Doha, Qatar</span>
                  <span>Since 2021</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 group">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={fireStateArtists} 
                  alt="Fire State Artists Partnership"
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-magenta text-white rounded-full text-xs font-semibold">
                    Long-term
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-dark mb-2">Fire State Artists</h3>
                <p className="text-sm text-gray-600 mb-3">International artist residency programs and cultural exchange.</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Doha, Qatar</span>
                  <span>Since 2019</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 group">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={qatarPhilharmonic} 
                  alt="Qatar Philharmonic Partnership"
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-teal text-white rounded-full text-xs font-semibold">
                    Active
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-dark mb-2">Qatar Philharmonic</h3>
                <p className="text-sm text-gray-600 mb-3">Musical collaborations and cross-cultural artistic performances.</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Doha, Qatar</span>
                  <span>Since 2022</span>
                </div>
                  </div>
                </div>
                
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 group">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={mathafMuseum} 
                  alt="Mathaf Arab Museum Partnership"
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-magenta text-white rounded-full text-xs font-semibold">
                    Active
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-dark mb-2">Mathaf Arab Museum</h3>
                <p className="text-sm text-gray-600 mb-3">Contemporary Arab art exhibitions and cultural programming.</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Doha, Qatar</span>
                  <span>Since 2021</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-magenta to-teal text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join us in building bridges across cultures and empowering communities worldwide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-magenta px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2">
              <span>Explore Our Work</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-magenta transition-all duration-300 flex items-center justify-center space-x-2">
              <span>Get in Touch</span>
              <Mail className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative overflow-hidden">
        <div
          className="h-64"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.2}px)`
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              MAPS International WLL
            </h3>
            <p className="text-lg md:text-xl mb-6 opacity-90">
              Building bridges across cultures, empowering communities, creating lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/work'}
                className="bg-magenta text-white px-6 py-3 rounded-full font-semibold hover:bg-magenta-dark transition-all duration-300"
              >
                Explore Our Work
              </button>
              <button 
                onClick={() => window.location.href = '/connect'}
                className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-magenta transition-all duration-300"
              >
                Connect With Us
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* CSS for animations */}
      <style jsx>{`
        .animate-item {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-item.reveal {
          opacity: 1;
          transform: translateY(0);
        }
        
        .reveal {
          opacity: 1;
          transform: translateY(0);
        }
        
        section {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        section.reveal {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Background elements should NEVER fade */
        .fixed.inset-0 {
          opacity: 1 !important;
        }
        
        .fixed.inset-0 * {
          opacity: inherit !important;
        }
      `}</style>
    </div>
  );
};

export default About;