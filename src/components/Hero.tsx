import { useState, useEffect, useRef } from "react";
import backgroundImage from "@/assets/background.jpg";
import mapsLogo from "@/assets/maps-logo.jpg";
import heroRashmi from "@/assets/hero-rashmi-diplomacy.jpg";
import heroQiaf from "@/assets/projects/qiaf-2025/qiaf-card.jpg";
import heroYouth from "@/assets/hero-youth-platform.jpg";
import heroSpace from "@/assets/projects/kssp/kssp-card.jpg";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    artists: 0,
    countries: 0,
    years: 0
  });
  const [isNumbersVisible, setIsNumbersVisible] = useState(false);
  const numbersRef = useRef<HTMLDivElement>(null);
  
  const heroImages = [
    { src: heroRashmi, alt: "Rashmi Agarwal engaging with international dignitaries at cultural diplomacy event" },
    { src: heroQiaf, alt: "Qatar International Art Festival showcasing 80+ countries cultural celebration" },
    { src: heroYouth, alt: "Young innovators from Qatar engaged in space science and cultural programs" },
    { src: heroSpace, alt: "Katara Space Science Program with students learning astronomy under desert sky" }
  ];

  // Scroll tracking for responsive sizing
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Number ticker animation
  useEffect(() => {
    if (!isNumbersVisible) return;

    const targets = { artists: 500, countries: 80, years: 11 };
    const duration = 2000; // 2 seconds
    const steps = 60; // 60fps
    const stepDuration = duration / steps;

    const animateNumber = (key: keyof typeof targets, target: number) => {
      let current = 0;
      const increment = target / steps;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setAnimatedNumbers(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, stepDuration);
    };

    // Stagger the animations
    setTimeout(() => animateNumber('artists', targets.artists), 0);
    setTimeout(() => animateNumber('countries', targets.countries), 200);
    setTimeout(() => animateNumber('years', targets.years), 400);
  }, [isNumbersVisible]);

  // Intersection Observer for numbers
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsNumbersVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (numbersRef.current) {
      observer.observe(numbersRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const scrollToCardDeck = () => {
    const cardDeck = document.getElementById('card-deck');
    cardDeck?.scrollIntoView({ behavior: 'smooth' });
  };

  const openSponsorModal = () => {
    // This would open a modal in a real implementation
    window.open('mailto:info@mapsinternational.qa?subject=Cultural%20Partnership%20Inquiry', '_blank');
  };

  return (
    <>
      <style>
        {`
          @keyframes typewriter {
            from { width: 0; }
            to { width: 100%; }
          }
          
          @keyframes blink {
            0%, 50% { border-color: #FFFFFF; }
            51%, 100% { border-color: transparent; }
          }
          
          @keyframes neon-pulse {
            0%, 100% { 
              text-shadow: 0 0 5px #FFFFFF, 0 0 10px #FFFFFF, 0 0 15px #FFFFFF;
            }
            50% { 
              text-shadow: 0 0 10px #FFFFFF, 0 0 20px #FFFFFF, 0 0 30px #FFFFFF;
            }
          }
          
          @keyframes electric-glow {
            0%, 100% { 
              text-shadow: 0 0 3px #FFFFFF, 0 0 6px #FFFFFF;
            }
            50% { 
              text-shadow: 0 0 5px #FFFFFF, 0 0 10px #FFFFFF;
            }
          }
          
          .typewriter-text {
            overflow: hidden;
            white-space: nowrap;
            margin: 0 auto;
            letter-spacing: 0.1em;
            animation: typewriter 3s steps(20) 1s 1 normal both;
          }
        `}
      </style>
      <section className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      

      {/* Particle Canvas Placeholder */}
      <canvas className="particle-canvas" id="hero-particles" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        {/* MAPS INTERNATIONAL WLL Logo with Overlapping Text */}
        <div className="relative -mb-4 -mt-8 animate-fade-in">
          <div className="w-[500px] md:w-[700px] transition-all duration-300 hover:scale-105">
            <img
              src={mapsLogo}
              alt="MAPS INTERNATIONAL WLL Logo"
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Overlapping Text - "Mapping Possibilities" */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-full" style={{ top: 'calc(100% - 170px)' }}>
            <h2 className="text-4xl md:text-5xl font-bold typewriter-text text-center" style={{ 
              animationDelay: '0.2s',
              fontFamily: 'monospace'
            }}>
              <span className="inline-block animate-pulse" style={{ 
                color: '#FFFFFF',
                animationDelay: '0s',
                textShadow: '0 0 30px rgba(0, 0, 0, 0.8), 0 0 60px rgba(0, 0, 0, 0.6)'
              }}>Mapping</span> <span className="inline-block animate-pulse" style={{ 
                color: '#FFFFFF',
                animationDelay: '0.2s',
                textShadow: '0 0 30px rgba(0, 0, 0, 0.8), 0 0 60px rgba(0, 0, 0, 0.6)'
              }}>Possibilities</span>
            </h2>
          </div>
        </div>

        {/* Subtitle - FIXED TYPOGRAPHY */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-full" style={{ top: 'calc(100% - 400px)' }}>
          <h3 className="text-4xl md:text-5xl font-bold typewriter-text text-center" style={{ 
            animationDelay: '0.3s',
            fontFamily: 'monospace'
          }}>
            <span className="inline-block animate-pulse" style={{ 
              color: '#FFFFFF',
              animationDelay: '0.4s',
              textShadow: '0 0 30px rgba(0, 0, 0, 0.8), 0 0 60px rgba(0, 0, 0, 0.6)'
            }}>Building</span> <span className="inline-block animate-pulse" style={{ 
              color: '#FFFFFF',
              animationDelay: '0.6s',
              textShadow: '0 0 30px rgba(0, 0, 0, 0.8), 0 0 60px rgba(0, 0, 0, 0.6)'
            }}>Impact</span>
          </h3>
        </div>

        {/* Description - FIXED MOBILE TEXT */}
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-8 max-w-4xl animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <span className="inline-block animate-pulse">Cultural Diplomacy</span> • <span className="inline-block animate-pulse" style={{ animationDelay: '0.2s' }}>Events</span> • <span className="inline-block animate-pulse" style={{ animationDelay: '0.4s' }}>Youth</span> • <span className="inline-block animate-pulse" style={{ animationDelay: '0.6s' }}>Innovation</span>
        </p>

        {/* Action Button - FIXED COLORS */}
        <div className="flex justify-center animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <button 
            onClick={() => window.location.href = '/work'}
            className="bg-magenta hover:bg-magenta-dark text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore Our Work
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex flex-col items-center justify-start pt-2">
          <div className="w-1 h-3 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;



