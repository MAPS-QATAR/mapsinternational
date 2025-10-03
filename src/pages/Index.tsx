import Hero from "@/components/Hero";
import CardDeck from "@/components/CardDeck";
import ImpactMetrics from "@/components/ImpactMetrics";
import CallToActionWrapper from "@/components/CallToActionWrapper";
import NewsUpdates from "@/components/NewsUpdates";
import SocialMediaSection from "@/components/SocialMediaSection";
import backgroundImage from "@/assets/background.jpg";
import qiafCardImage from "@/assets/projects/qiaf-2025/qiaf-card.jpg";
import { useState, useEffect } from "react";

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const qiafDate = new Date('December 6, 2025 00:00:00');
      const difference = qiafDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
        
        // Debug log to verify countdown
        console.log(`Countdown: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen">
      {/* SEO Meta - handled by document head */}
      <Hero />
      
      {/* Impact Metrics */}
      <ImpactMetrics />
      
      {/* Legacy Projects */}
      <CardDeck />
      
      {/* Upcoming Events - FIXED TYPOGRAPHY & COLORS */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Upcoming Events</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Don't miss our upcoming cultural experiences and transformative events
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            {/* QIAF 2025 Featured Event Card */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
              {/* Countdown Timer - FIXED COLORS */}
              <div className="p-6 text-center" style={{ backgroundColor: '#004344' }}>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-bold text-white">Event Starts In:</h3>
                </div>
                
                {/* Real-time Countdown - FIXED TYPOGRAPHY */}
                <div className="flex justify-center gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 min-w-[80px]">
                    <div className="text-2xl font-bold text-white mb-1">
                      {timeLeft.days.toString().padStart(2, '0')}
                    </div>
                    <div className="text-sm text-white/80 uppercase tracking-wide font-semibold">Days</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 min-w-[80px]">
                    <div className="text-2xl font-bold text-white mb-1">
                      {timeLeft.hours.toString().padStart(2, '0')}
                    </div>
                    <div className="text-sm text-white/80 uppercase tracking-wide font-semibold">Hours</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 min-w-[80px]">
                    <div className="text-2xl font-bold text-white mb-1">
                      {timeLeft.minutes.toString().padStart(2, '0')}
                    </div>
                    <div className="text-sm text-white/80 uppercase tracking-wide font-semibold">Minutes</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 min-w-[80px]">
                    <div className="text-2xl font-bold text-white mb-1">
                      {timeLeft.seconds.toString().padStart(2, '0')}
                    </div>
                    <div className="text-sm text-white/80 uppercase tracking-wide font-semibold">Seconds</div>
                  </div>
                </div>
              </div>

              {/* Main Content - Image Left, Text Right */}
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left Side - QIAF Card Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={qiafCardImage}
                    alt="Qatar International Art Festival 2025 - 7th Edition"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay with Edition Badge - FIXED COLORS */}
                  <div className="absolute top-6 left-6">
                    <div className="text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg" style={{ backgroundColor: '#004344' }}>
                      7th Edition
                    </div>
                  </div>
                  {/* Featured Event Badge - FIXED COLORS */}
                  <div className="absolute top-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-bold text-sm shadow-lg" style={{ color: '#004344' }}>
                      FEATURED EVENT
                    </div>
                  </div>
                </div>

                {/* Right Side - Event Details */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
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
                      <div className="text-gray-800 font-bold">Dec 6-12, 2025</div>
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

                  {/* FIXED: Clear CTA Button */}
                  <button 
                    onClick={() => window.open('https://qiaf.net', '_blank')}
                    className="text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center gap-3 group shadow-lg hover:shadow-xl"
                    style={{ backgroundColor: '#004344' }}
                  >
                    <span>Register at QIAF.net</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToActionWrapper />
      
        {/* News & Updates */}
        <NewsUpdates />
        
        {/* Social Media Section */}
        <SocialMediaSection />
        
        {/* Footer */}
      <footer className="relative py-20 overflow-hidden">
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
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-white" style={{
                textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6)'
              }}>
                MAPS International WLL
              </h3>
              <p className="text-base text-white/90 leading-relaxed mb-4">
                Mapping Possibilities. Building Impact.
              </p>
              <p className="text-sm text-white/70">
                © 2025 MAPS International WLL. All rights reserved.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-white/90">
                <li><a href="/work" className="hover:text-white transition-colors">Our Work</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/connect" className="hover:text-white transition-colors">Connect</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Connect</h4>
              <ul className="space-y-2 text-white/90">
                <li><a href="mailto:info@mapsinternational.qa" className="hover:text-white transition-colors">Email</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
