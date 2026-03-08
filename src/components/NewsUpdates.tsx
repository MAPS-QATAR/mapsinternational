import { useState, useEffect } from "react";
import { Calendar, ExternalLink, TrendingUp, Award, Users, Globe } from "lucide-react";

const NewsUpdates = () => {
  const [currentNews, setCurrentNews] = useState(0);

  const newsItems = [
    {
      id: 1,
      title: "QIAF 2025 Final Preparations Underway",
      description: "With just 2 months to go, QIAF 2025 is entering its final preparation phase. 500+ artists from 80+ countries are confirmed to participate in the 7th edition.",
      date: "October 15, 2025",
      category: "Event",
      icon: <Calendar className="w-6 h-6" />,
      color: "from-magenta to-pink-500",
      bgColor: "from-pink-50 to-pink-100",
      link: "https://qiaf.net",
      featured: true
    },
    {
      id: 2,
      title: "New Cultural Partnership with European Union",
      description: "MAPS International WLL announces groundbreaking partnership with EU Cultural Program, expanding our reach to 15 additional European countries.",
      date: "October 12, 2025",
      category: "Partnership",
      icon: <Globe className="w-6 h-6" />,
      color: "from-teal to-cyan-500",
      bgColor: "from-teal-50 to-cyan-100",
      link: "/about",
      featured: false
    },
    {
      id: 3,
      title: "Youth Platform 2025 Exceeds All Expectations",
      description: "The 3-day Youth Platform mega event successfully engaged 750+ young innovators, surpassing our target of 500+ participants across 8 focus areas.",
      date: "October 8, 2025",
      category: "Achievement",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-teal to-cyan-500",
      bgColor: "from-teal-50 to-cyan-100",
      link: "/work",
      featured: true
    },
    {
      id: 4,
      title: "Space Science Program Reaches New Heights",
      description: "KSSP 2025 partners with SpaceX and Blue Origin, bringing cutting-edge space technology education to 500+ students across Qatar.",
      date: "October 5, 2025",
      category: "Education",
      icon: <Award className="w-6 h-6" />,
      color: "from-teal to-cyan-500",
      bgColor: "from-teal-50 to-cyan-100",
      link: "/work",
      featured: false
    },
    {
      id: 5,
      title: "MAPS International WLL Celebrates 11 Years of Impact",
      description: "Founded in 2014, MAPS International WLL marks 11 years of cultural diplomacy excellence, having connected 80+ countries through transformative experiences.",
      date: "October 1, 2025",
      category: "Milestone",
      icon: <Users className="w-6 h-6" />,
      color: "from-teal to-cyan-500",
      bgColor: "from-teal-50 to-cyan-100",
      link: "/about",
      featured: true
    }
  ];

  const upcomingEvents = [
    {
      title: "QIAF 2025 Final Artist Briefing",
      date: "November 15, 2025",
      location: "Katara Cultural Village",
      type: "Briefing"
    },
    {
      title: "Youth Platform 2026 Planning Session",
      date: "November 25, 2025",
      location: "Qatar Foundation",
      type: "Planning"
    },
    {
      title: "QIAF 2025 Opening Ceremony",
      date: "December 6, 2025",
      location: "Katara Cultural Village",
      type: "Ceremony"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNews((prev) => (prev + 1) % newsItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [newsItems.length]);

  const handleNewsClick = (link: string) => {
    if (link.startsWith('/')) {
      window.location.href = link;
    } else {
      window.open(link, '_blank');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">Latest News & Updates</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with our latest achievements, partnerships, and upcoming events in October 2025
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Featured News Carousel */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-dark mb-8">Featured Updates</h3>
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                {newsItems.map((news, index) => (
                  <div
                    key={news.id}
                    className={`transition-all duration-500 ${
                      index === currentNews ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full absolute inset-0'
                    }`}
                  >
                    <div className="p-8">
                      <div className="flex items-start space-x-4">
                        {/* Icon */}
                        <div className={`w-12 h-12 bg-gradient-to-br ${news.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <div className="text-white">
                            {news.icon}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${news.color} text-white`}>
                              {news.category}
                            </span>
                            {news.featured && (
                              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-teal to-cyan-500 text-white">
                                Featured
                              </span>
                            )}
                          </div>
                          
                          <h4 className="text-xl font-bold text-dark mb-3 hover:text-magenta transition-colors duration-300 cursor-pointer"
                              onClick={() => handleNewsClick(news.link)}>
                            {news.title}
                          </h4>
                          
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {news.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">{news.date}</span>
                            <button
                              onClick={() => handleNewsClick(news.link)}
                              className="flex items-center space-x-1 text-magenta hover:text-magenta-dark transition-colors duration-300"
                            >
                              <span className="text-sm font-medium">Read More</span>
                              <ExternalLink className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center space-x-2 mt-6">
                {newsItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentNews(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentNews ? 'bg-magenta scale-125' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to news item ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Upcoming Events Sidebar */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-dark mb-8">Upcoming Events</h3>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  onClick={() => handleNewsClick('/work')}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-magenta to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-dark mb-2 hover:text-magenta transition-colors duration-300">
                        {event.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">{event.date}</p>
                      <p className="text-sm text-gray-500">{event.location}</p>
                      <span className="inline-block text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-700 mt-2">
                        {event.type}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsUpdates;
