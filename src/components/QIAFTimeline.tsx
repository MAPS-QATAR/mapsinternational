import { useState, useEffect, useRef } from "react";
import { qiafEditions } from "@/data/projects";
import { Users, Globe, TrendingUp } from "lucide-react";

const QIAFTimeline = () => {
  const [activeYear, setActiveYear] = useState(2025);
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const activeEdition = qiafEditions.find(edition => edition.year === activeYear);

  return (
    <div className="w-full bg-white py-24" ref={timelineRef}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header - Apple Style */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-black mb-6 tracking-tight">
            QIAF Evolution
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
            From 232 artists to 500+ artists. Seven years of cultural excellence.
          </p>
        </div>

        {/* Minimalist Timeline */}
        <div className="relative mb-20">
          {/* Timeline Line - Subtle */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-200 transform -translate-y-1/2"></div>
          
          {/* Timeline Points */}
          <div className="relative flex justify-between items-center">
            {qiafEditions.map((edition, index) => (
              <div
                key={edition.year}
                className={`relative cursor-pointer transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onClick={() => setActiveYear(edition.year)}
              >
                {/* Timeline Point - Clean Circle */}
                <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  activeYear === edition.year
                    ? 'bg-black scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}></div>
                
                {/* Year Label - Minimal */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                  <div className={`text-sm font-medium transition-all duration-300 ${
                    activeYear === edition.year
                      ? 'text-black'
                      : 'text-gray-400'
                  }`}>
                    {edition.year}
                  </div>
                </div>

                {/* Artist Count - Subtle */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <div className={`text-xs font-light transition-all duration-300 ${
                    activeYear === edition.year
                      ? 'text-black'
                      : 'text-gray-400'
                  }`}>
                    {edition.artists}+
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Edition - Clean Card */}
        {activeEdition && (
          <div className="animate-fade-in">
            <div className="bg-gray-50 rounded-2xl p-12 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Left - Edition Info */}
                <div>
                  <div className="mb-8">
                    <h3 className="text-3xl font-light text-black mb-3">
                      {activeEdition.edition}
                    </h3>
                    <p className="text-lg text-gray-600 font-light mb-6">
                      {activeEdition.dates}
                    </p>
                    <div className="inline-block bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
                      {activeEdition.theme}
                    </div>
                  </div>

                  {/* Clean Stats */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <Users className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                      <div className="text-2xl font-light text-black">{activeEdition.artists}+</div>
                      <div className="text-sm text-gray-500 font-light">Artists</div>
                    </div>
                    <div className="text-center">
                      <Globe className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                      <div className="text-2xl font-light text-black">{activeEdition.countries}+</div>
                      <div className="text-sm text-gray-500 font-light">Countries</div>
                    </div>
                  </div>
                </div>

                {/* Right - Highlights */}
                <div>
                  <h4 className="text-xl font-medium text-black mb-6">Key Highlights</h4>
                  <div className="space-y-3">
                    {activeEdition.highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 py-2"
                      >
                        <div className="w-1 h-1 bg-black rounded-full"></div>
                        <span className="text-gray-600 font-light">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Growth Metrics - Minimal */}
        <div className="mt-20">
          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <TrendingUp className="w-8 h-8 text-gray-400 mx-auto mb-4" />
              <div className="text-4xl font-light text-black mb-2">72%</div>
              <div className="text-gray-500 font-light">Artist Growth</div>
            </div>
            <div className="text-center">
              <Globe className="w-8 h-8 text-gray-400 mx-auto mb-4" />
              <div className="text-4xl font-light text-black mb-2">9%</div>
              <div className="text-gray-500 font-light">Country Growth</div>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="text-4xl font-light text-black mb-2">7</div>
              <div className="text-gray-500 font-light">Editions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QIAFTimeline;
