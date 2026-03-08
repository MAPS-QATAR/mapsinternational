import { useState, useEffect, useRef } from "react";
import { 
  Crown, 
  Palette, 
  Users, 
  GraduationCap, 
  Paintbrush, 
  Shirt, 
  Music, 
  MapPin, 
  Utensils, 
  Car, 
  Gavel, 
  Lightbulb, 
  Award, 
  Sparkles, 
  PartyPopper 
} from "lucide-react";

const QIAFEventComponents = () => {
  const [isVisible, setIsVisible] = useState(false);
  const componentsRef = useRef<HTMLDivElement>(null);

  const eventComponents = [
    {
      id: 1,
      title: "VIP Opening Ceremony",
      icon: Crown,
      description: "Exclusive gala with dignitaries and ambassadors",
      shortTitle: "Opening"
    },
    {
      id: 2,
      title: "International Exhibitions",
      icon: Palette,
      description: "Gallery exhibitions from 500+ artists",
      shortTitle: "Exhibitions"
    },
    {
      id: 3,
      title: "Art Conferences",
      icon: Users,
      description: "Expert panels on culture and innovation",
      shortTitle: "Conferences"
    },
    {
      id: 4,
      title: "Master Classes",
      icon: GraduationCap,
      description: "Hands-on learning with professionals",
      shortTitle: "Workshops"
    },
    {
      id: 5,
      title: "Live Painting",
      icon: Paintbrush,
      description: "Real-time artistic demonstrations",
      shortTitle: "Live Art"
    },
    {
      id: 6,
      title: "Fashion Shows",
      icon: Shirt,
      description: "Sustainable fashion performances",
      shortTitle: "Fashion"
    },
    {
      id: 7,
      title: "Musical Evenings",
      icon: Music,
      description: "Live performances by international artists",
      shortTitle: "Music"
    },
    {
      id: 8,
      title: "Heritage Tours",
      icon: MapPin,
      description: "Guided cultural experiences",
      shortTitle: "Tours"
    },
    {
      id: 9,
      title: "Networking Dinners",
      icon: Utensils,
      description: "Exclusive networking events",
      shortTitle: "Networking"
    },
    {
      id: 10,
      title: "Desert Safari",
      icon: Car,
      description: "Outdoor cultural activities",
      shortTitle: "Safari"
    },
    {
      id: 11,
      title: "Art Auctions",
      icon: Gavel,
      description: "Commercial art transactions",
      shortTitle: "Auctions"
    },
    {
      id: 12,
      title: "Innovation Workshops",
      icon: Lightbulb,
      description: "Technology meets art sessions",
      shortTitle: "Innovation"
    },
    {
      id: 13,
      title: "Award Ceremonies",
      icon: Award,
      description: "Recognition for outstanding artists",
      shortTitle: "Awards"
    },
    {
      id: 14,
      title: "Fashion Integration",
      icon: Sparkles,
      description: "Fashion and art fusion shows",
      shortTitle: "Integration"
    },
    {
      id: 15,
      title: "Closing Ceremony",
      icon: PartyPopper,
      description: "Festival finale celebration",
      shortTitle: "Closing"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (componentsRef.current) {
      observer.observe(componentsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-white py-24" ref={componentsRef}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header - Apple Style */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-black mb-6 tracking-tight">
            Event Components
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
            Fifteen carefully curated experiences that define QIAF 2025
          </p>
        </div>

        {/* Event Components Grid - Smaller Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-20">
          {eventComponents.map((component, index) => {
            const IconComponent = component.icon;
            return (
              <div
                key={component.id}
                className={`group cursor-pointer transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-gray-50 rounded-xl p-6 h-48 flex flex-col justify-between hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                  {/* Icon */}
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-black mb-2 leading-tight">
                      {component.shortTitle}
                    </h3>
                    <p className="text-xs text-gray-500 font-light leading-relaxed">
                      {component.description}
                    </p>
                  </div>

                  {/* Number - Minimal */}
                  <div className="text-right">
                    <div className="text-xs text-gray-400 font-light">
                      {component.id.toString().padStart(2, '0')}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary - Clean Stats */}
        <div className="bg-gray-50 rounded-2xl p-12">
          <div className="text-center">
            <h3 className="text-2xl font-light text-black mb-8">
              QIAF 2025 by the Numbers
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-light text-black mb-2">15</div>
                <div className="text-gray-500 font-light">Components</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-black mb-2">6</div>
                <div className="text-gray-500 font-light">Days</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-black mb-2">500+</div>
                <div className="text-gray-500 font-light">Artists</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-black mb-2">80+</div>
                <div className="text-gray-500 font-light">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QIAFEventComponents;
