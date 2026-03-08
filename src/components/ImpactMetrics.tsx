import { useState, useEffect, useRef } from "react";
import { Users, Globe, Award, TrendingUp } from "lucide-react";

const ImpactMetrics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({
    artists: 0,
    countries: 0,
    years: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  const metrics = [
    {
      icon: <Users className="w-8 h-8" />,
      value: 500,
      label: "Artists Connected",
      suffix: "+",
      color: "from-magenta to-pink-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      value: 80,
      label: "Countries Reached",
      suffix: "+",
      color: "from-teal to-cyan-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: 11,
      label: "Years of Excellence",
      suffix: "+",
      color: "from-magenta to-pink-500"
    }
  ];

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('Impact section is visible, starting animation');
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animation effect
  useEffect(() => {
    if (!isVisible) {
      console.log('Animation not visible yet');
      return;
    }

    console.log('Starting animation with isVisible:', isVisible);

    const duration = 2000; // 2 seconds
    const steps = 60; // 60fps
    const stepDuration = duration / steps;

    const animateValue = (key: string, target: number) => {
      console.log(`Animating ${key} to ${target}`);
      let current = 0;
      const increment = target / steps;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setAnimatedValues(prev => {
          const newValues = { ...prev, [key]: Math.floor(current) };
          console.log('Updated values:', newValues);
          return newValues;
        });
      }, stepDuration);
    };

    // Stagger the animations
    setTimeout(() => animateValue('artists', 500), 0);
    setTimeout(() => animateValue('countries', 80), 200);
    setTimeout(() => animateValue('years', 11), 400);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark">
            Our Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Numbers that tell the story of our global cultural impact and community reach
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="group relative overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 text-center hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-magenta/10"
              style={{
                animationDelay: `${index * 200}ms`,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
              }}
            >
              {/* Animated Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className="relative z-10 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${metric.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="text-white">
                    {metric.icon}
                  </div>
                </div>
              </div>

              {/* Number */}
              <div className="relative z-10 mb-4">
                <div className="text-4xl md:text-5xl font-bold text-dark mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-magenta group-hover:to-teal transition-all duration-300">
                  {isVisible ? (() => {
                    // Map the metric labels to the correct keys
                    if (metric.label === "Artists Connected") return animatedValues.artists;
                    if (metric.label === "Countries Reached") return animatedValues.countries;
                    if (metric.label === "Years of Excellence") return animatedValues.years;
                    return 0;
                  })() : 0}{metric.suffix}
                </div>
                <div className="text-lg font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  {metric.label}
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-magenta/20 rounded-3xl transition-all duration-300"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ImpactMetrics;
