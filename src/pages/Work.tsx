import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { projects } from "@/data/projects";
import Footer from "@/components/Footer";
import { RippleButton } from "@/components/ui/ripple-button";
import { ProgressiveImage } from "@/components/ui/progressive-image";

const Work = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId: string) => {
    if (projectId === "qiaf-2025") {
      window.open("https://qiaf.net", "_blank", "noopener,noreferrer");
      return;
    }
    if (projectId === "youth-platform") {
      window.open("https://theyouth.qa", "_blank", "noopener,noreferrer");
      return;
    }
    navigate(`/projects/${projectId}`);
  };

  // Find specific projects
  const qiaf = projects.find(p => p.id === "qiaf-2025");
  const kssp = projects.find(p => p.id === "kssp");
  const youth = projects.find(p => p.id === "youth-platform");
  const colors = projects.find(p => p.id === "colours-of-desert");
  const bharat = projects.find(p => p.id === "bharat-vastram");
  const cosmic = projects.find(p => p.id === "cosmic-canvas");
  const astro = projects.find(p => p.id === "astro-fair");

  return (
    <div className="bg-transparent overflow-hidden relative">
      {/* ============================================ */}
      {/* ANIMATED COLOR BALLOONS - Optimized Performance */}
      {/* ============================================ */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Balloon 1 - Pink - Top Left to Bottom Right */}
        <motion.div
          animate={{ 
            x: [-100, 250, -100], 
            y: [-50, 300, -50] 
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-96 h-96 bg-[#E91E63] rounded-full opacity-10 blur-3xl"
        />
        
        {/* Balloon 2 - Teal - Bottom Left Circular */}
        <motion.div
          animate={{ 
            x: [-200, 100, 200, -200], 
            y: [100, 350, 100, 100] 
          }}
          transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00BCD4] rounded-full opacity-10 blur-3xl"
        />
        
        {/* Balloon 3 - Purple - Right Side Float */}
        <motion.div
          animate={{ 
            x: [200, -100, 200], 
            y: [0, -80, 0] 
          }}
          transition={{ duration: 36, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] right-0 w-80 h-80 bg-[#9C27B0] rounded-full opacity-8 blur-3xl"
        />
        
        {/* Balloon 4 - Orange - Bottom Right Drift */}
        <motion.div
          animate={{ 
            x: [100, -50, 100], 
            y: [0, 80, 0] 
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[10%] right-[5%] w-72 h-72 bg-[#FF9800] rounded-full opacity-8 blur-3xl"
        />
      </div>

      {/* ============================================ */}
      {/* HERO SECTION - Artistic & Compact */}
      {/* ============================================ */}
      <section className="relative min-h-[500px] sm:min-h-[450px] md:h-[50vh] flex items-center justify-center overflow-hidden bg-transparent z-10">
        
        {/* Sketchy Artistic Elements */}
        <div className="absolute inset-0 opacity-20">
          {/* Hand-drawn circles */}
          <svg className="absolute top-10 right-20 w-32 h-32 text-gray-800" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1.5" 
              strokeDasharray="3,3" style={{ strokeLinecap: 'round' }} />
          </svg>
          <svg className="absolute bottom-20 left-10 w-24 h-24 text-gray-800" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="2" 
              strokeDasharray="5,8" style={{ strokeLinecap: 'round' }} />
          </svg>
          
          {/* Scattered dots */}
          <svg className="absolute top-1/4 left-1/4 w-64 h-64 text-gray-700" viewBox="0 0 200 200">
            <circle cx="30" cy="40" r="2" fill="currentColor" />
            <circle cx="80" cy="20" r="3" fill="currentColor" />
            <circle cx="150" cy="60" r="2" fill="currentColor" />
            <circle cx="50" cy="120" r="2.5" fill="currentColor" />
            <circle cx="170" cy="140" r="2" fill="currentColor" />
            <circle cx="100" cy="180" r="3" fill="currentColor" />
          </svg>
          
          {/* Hand-drawn lines */}
          <svg className="absolute top-1/3 right-1/4 w-48 h-48 text-gray-800" viewBox="0 0 150 150">
            <path d="M10 75 Q 40 70, 70 75 T 130 75" fill="none" stroke="currentColor" strokeWidth="1.5" 
              strokeDasharray="4,6" style={{ strokeLinecap: 'round' }} />
            <path d="M20 100 Q 50 95, 80 100 T 140 100" fill="none" stroke="currentColor" strokeWidth="1" 
              strokeDasharray="3,5" style={{ strokeLinecap: 'round' }} />
          </svg>
          
          {/* Accent shapes */}
          <svg className="absolute bottom-1/4 right-1/3 w-20 h-20 text-[#E91E63]" viewBox="0 0 80 80">
            <rect x="10" y="10" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2"
              strokeDasharray="6,6" style={{ strokeLinecap: 'round' }} transform="rotate(15 40 40)" />
          </svg>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 sm:mb-8 leading-none relative inline-block px-4 sm:px-0">
              The Work That Matters
              {/* Hand-drawn underline */}
              <svg className="absolute -bottom-3 left-0 w-full h-4" viewBox="0 0 300 10" preserveAspectRatio="none">
                <path d="M0 5 Q 75 8, 150 5 T 300 5" fill="none" stroke="#E91E63" strokeWidth="2.5" 
                  style={{ strokeLinecap: 'round' }} />
              </svg>
            </h1>
            
            {/* Description Copy */}
            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto px-6 sm:px-4">
              <p className="font-semibold">
                Every festival. Every workshop. Every connection.
              </p>
              <p>
                <span className="font-bold text-gray-900">80+ countries.</span> Thousands of minds ignited.
                <br />
                Cultures bridged. Futures reimagined.
              </p>
              <p className="text-sm sm:text-base md:text-lg italic text-gray-600">
                Because impact isn't measured in attendance—
                <br />
                it's measured in lives transformed.
            </p>
          </div>
          </motion.div>
        </div>
        
        {/* Subtle scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowRight className="w-6 h-6 text-gray-400 rotate-90" />
        </motion.div>
      </section>

      {/* ============================================ */}
      {/* BENTO GRID - All Projects + CTA */}
      {/* ============================================ */}
      <section className="relative w-full pt-20 pb-0 bg-transparent z-10">
        <div className="container mx-auto px-8 md:px-12">
          {/* Grid Container - 12 columns, constrained width with padding */}
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
            
            {/* ========== QIAF - HERO CARD (LARGEST) ========== */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -12, scale: 1.02 }}
              onClick={() => handleProjectClick("qiaf-2025")}
              className="md:col-span-6 lg:col-span-6 lg:row-span-2 group cursor-pointer"
            >
              <div className="relative w-full rounded-2xl overflow-hidden bg-white border-2 border-gray-800/20 shadow-none hover:shadow-none transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2">
                {/* Image - 100% PRISTINE, NO OVERLAYS */}
                <div className="relative w-full aspect-square overflow-hidden">
                  <img
                    src={qiaf?.heroImage}
                    alt="QIAF 2025"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                
                {/* Glassmorphism Text Bar */}
                <div className="relative bg-white/80 backdrop-blur-xl border-t border-gray-200/50 px-6 py-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="inline-block bg-gradient-to-r from-emerald-500 to-green-600 text-white px-3 py-1 rounded-full text-[10px] font-bold mb-2 shadow-lg">
                        FLAGSHIP EVENT
                      </div>
                      <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-1 leading-tight">
                        QIAF 2025
                      </h3>
                      <p className="text-sm md:text-base text-gray-800 font-bold">
                        500+ Artists • 80+ Countries
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-emerald-600 group-hover:translate-x-1 transition-transform flex-shrink-0 mt-2" />
                  </div>
          </div>
        </div>
            </motion.div>

            {/* ========== KSSP ========== */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => handleProjectClick("kssp")}
              className="md:col-span-3 lg:col-span-3 group cursor-pointer"
            >
              <div className="relative w-full rounded-2xl overflow-hidden bg-white border-2 border-gray-800/20 shadow-none hover:shadow-none transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2">
                {/* Image - 100% PRISTINE */}
                <div className="relative w-full aspect-square overflow-hidden">
                       <img 
                    src={kssp?.heroImage}
                    alt="KSSP"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700"
                       />
                       </div>

                {/* Glassmorphism Text Bar */}
                <div className="relative bg-white/80 backdrop-blur-xl border-t border-gray-200/50 px-4 py-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="text-base md:text-lg font-black text-gray-900 mb-1 leading-tight">
                        Space Science
                      </h3>
                      <p className="text-xs md:text-sm text-gray-800 font-bold">
                        3,000+ Students
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-purple-600 group-hover:translate-x-1 transition-transform flex-shrink-0 mt-1" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ========== YOUTH PLATFORM ========== */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => handleProjectClick("youth-platform")}
              className="md:col-span-3 lg:col-span-3 group cursor-pointer"
            >
              <div className="relative w-full rounded-2xl overflow-hidden bg-white border-2 border-gray-800/20 shadow-none transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-xl">
                {/* Image - 100% PRISTINE */}
                <div className="relative w-full aspect-square overflow-hidden">
                  <img
                    src={youth?.heroImage}
                    alt="Youth Platform"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Visit theyouth.qa badge */}
                  <div className="absolute top-3 right-3">
                    <div className="bg-gradient-to-r from-[#E91E63] to-[#00BCD4] text-white px-3 py-1 rounded-full text-xs font-bold shadow-xl">
                      Visit theyouth.qa
                    </div>
                  </div>
                       </div>

                {/* Glassmorphism Text Bar */}
                <div className="relative bg-white/80 backdrop-blur-xl border-t border-gray-200/50 px-4 py-3">
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-black text-gray-900 mb-1 leading-tight">
                      Youth Platform
                    </h3>
                    <p className="text-xs md:text-sm text-gray-800 font-bold">
                      500+ Youth • 8 Areas
                    </p>
                  </div>
                         </div>
                     </div>
            </motion.div>

            {/* ========== COLOURS OF DESERT ========== */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => handleProjectClick("colours-of-desert")}
              className="md:col-span-3 lg:col-span-3 group cursor-pointer"
            >
              <div className="relative w-full rounded-2xl overflow-hidden bg-white border-2 border-gray-800/20 shadow-none hover:shadow-none transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2">
                {/* Image - 100% PRISTINE */}
                <div className="relative w-full aspect-square overflow-hidden">
                  <img
                    src={colors?.heroImage}
                    alt="Colours of Desert"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700"
                  />
                     </div>

                {/* Glassmorphism Text Bar */}
                <div className="relative bg-white/80 backdrop-blur-xl border-t border-gray-200/50 px-4 py-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="inline-block bg-orange-500 text-white px-2 py-0.5 rounded-full text-[10px] font-bold mb-1.5">
                        Heritage
                      </div>
                      <h3 className="text-base md:text-lg font-black text-gray-900 leading-tight">
                        Colours of Desert
                       </h3>
                    </div>
                    <ArrowRight className="w-4 h-4 text-orange-600 group-hover:translate-x-1 transition-transform flex-shrink-0 mt-1" />
                  </div>
                </div>
              </div>
            </motion.div>
                       
            {/* ========== BHARAT VASTRAM ========== */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => handleProjectClick("bharat-vastram")}
              className="md:col-span-3 lg:col-span-3 group cursor-pointer"
            >
              <div className="relative w-full rounded-2xl overflow-hidden bg-white border-2 border-gray-800/20 shadow-none hover:shadow-none transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2">
                {/* Image - 100% PRISTINE - Wide Landscape */}
                <div className="relative w-full aspect-[2/1] overflow-hidden">
                  <img
                    src={bharat?.heroImage}
                    alt="Bharat Vastram"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700"
                  />
                       </div>

                {/* Glassmorphism Text Bar */}
                <div className="relative bg-white/80 backdrop-blur-xl border-t border-gray-200/50 px-4 py-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="inline-block bg-rose-500 text-white px-2 py-0.5 rounded-full text-[10px] font-bold mb-1.5">
                        Fashion
                      </div>
                      <h3 className="text-base md:text-lg font-black text-gray-900 leading-tight">
                        Bharat Vastram
                      </h3>
                         </div>
                    <ArrowRight className="w-4 h-4 text-rose-600 group-hover:translate-x-1 transition-transform flex-shrink-0 mt-1" />
                     </div>
                   </div>
                 </div>
            </motion.div>

            {/* ========== COSMIC CANVAS ========== */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => handleProjectClick("cosmic-canvas")}
              className="md:col-span-3 lg:col-span-3 group cursor-pointer"
            >
              <div className="relative w-full rounded-2xl overflow-hidden bg-white border-2 border-gray-800/20 shadow-none hover:shadow-none transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2">
                {/* Image - 100% PRISTINE */}
                <div className="relative w-full aspect-square overflow-hidden">
                  <img
                    src={cosmic?.heroImage}
                    alt="Cosmic Canvas"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                
                {/* Glassmorphism Text Bar */}
                <div className="relative bg-white/80 backdrop-blur-xl border-t border-gray-200/50 px-4 py-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="inline-block bg-violet-500 text-white px-2 py-0.5 rounded-full text-[10px] font-bold mb-1.5">
                        Art
                      </div>
                      <h3 className="text-base md:text-lg font-black text-gray-900 leading-tight">
                        Cosmic Canvas
                      </h3>
                    </div>
                    <ArrowRight className="w-4 h-4 text-violet-600 group-hover:translate-x-1 transition-transform flex-shrink-0 mt-1" />
                  </div>
          </div>
        </div>
            </motion.div>

            {/* ========== ASTRO FAIR ========== */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => handleProjectClick("astro-fair")}
              className="md:col-span-3 lg:col-span-3 group cursor-pointer"
            >
              <div className="relative w-full rounded-2xl overflow-hidden bg-white border-2 border-gray-800/20 shadow-none hover:shadow-none transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2">
                {/* Image - 100% PRISTINE */}
                <div className="relative w-full aspect-square overflow-hidden">
                  <img
                    src={astro?.heroImage}
                    alt="Astro Fair"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                
                {/* Glassmorphism Text Bar */}
                <div className="relative bg-white/80 backdrop-blur-xl border-t border-gray-200/50 px-4 py-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="inline-block bg-indigo-500 text-white px-2 py-0.5 rounded-full text-[10px] font-bold mb-1.5">
                        Science
                      </div>
                      <h3 className="text-base md:text-lg font-black text-gray-900 leading-tight">
                        Astro Fair
                      </h3>
                    </div>
                    <ArrowRight className="w-4 h-4 text-indigo-600 group-hover:translate-x-1 transition-transform flex-shrink-0 mt-1" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ========== COLORFUL CTA CARD ========== */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
                onClick={() => navigate('/connect')}
              className="md:col-span-6 lg:col-span-6 group cursor-pointer"
            >
              <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden bg-gradient-to-br from-[#E91E63] via-[#9C27B0] to-[#00BCD4] border-2 border-gray-800/10 shadow-none hover:shadow-none transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2">
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00BCD4] via-[#9C27B0] to-[#E91E63] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col items-center justify-center text-center">
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="mb-4"
                  >
                    <Sparkles className="w-10 h-10 md:w-14 md:h-14 text-white" />
                  </motion.div>
                  
                  <h3 
                    className="text-2xl md:text-4xl font-black text-white mb-4 leading-tight"
                    style={{
                      textShadow: '0 0 30px rgba(0,0,0,0.5), 0 4px 20px rgba(0,0,0,0.3)'
                    }}
                  >
                    Ready to Create<br />Impact Together?
                  </h3>
                  
                  <p 
                    className="text-sm md:text-lg text-white/90 mb-6 max-w-md font-bold"
                    style={{
                      textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                    }}
                  >
                    Join our mission to connect cultures
                  </p>
                  
                  <div className="inline-flex items-center gap-2 bg-white text-[#E91E63] px-6 py-3 rounded-full text-base font-black shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <span>Partner With Us</span>
                    <Star className="w-5 h-5" />
                  </div>
                </div>
            </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FOOTER */}
      {/* ============================================ */}
      <Footer />
    </div>
  );
};

export default Work;
