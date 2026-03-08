import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Facebook, ArrowUp, Send, Globe, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { RippleButton } from "@/components/ui/ripple-button";

// Web3Forms Configuration
const WEB3FORMS_ACCESS_KEY = 'aacf6a5a-85d1-4445-86d3-4c49e5fae773';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create FormData for Web3Forms
      const formData = new FormData();
      formData.append('access_key', WEB3FORMS_ACCESS_KEY);
      formData.append('subject', 'New Newsletter Subscription - MAPS International');
      formData.append('email', email);
      formData.append('from_name', 'Newsletter Subscription');
      formData.append('message', `New newsletter subscription from: ${email}`);
      
      // Send to Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSubscribed(true);
        setTimeout(() => {
          setEmail("");
          setIsSubscribed(false);
        }, 5000);
      } else {
        throw new Error(data.message || 'Subscription failed');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      alert('Failed to subscribe. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-amber-50 via-orange-50/30 to-rose-50 border-t border-gray-200/50 z-10 overflow-hidden">
      {/* Sketchy Artistic Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {/* Hand-drawn circles */}
        <svg className="absolute top-10 right-20 w-32 h-32 text-[#E91E63]" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1.5" 
            strokeDasharray="5,8" style={{ strokeLinecap: 'round' }} />
        </svg>
        <svg className="absolute bottom-20 left-10 w-24 h-24 text-[#00BCD4]" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="2" 
            strokeDasharray="4,6" style={{ strokeLinecap: 'round' }} />
        </svg>
        
        {/* Scattered dots */}
        <svg className="absolute top-1/2 left-1/4 w-64 h-64 text-gray-700" viewBox="0 0 200 200">
          <circle cx="30" cy="40" r="2" fill="currentColor" />
          <circle cx="80" cy="20" r="3" fill="currentColor" />
          <circle cx="150" cy="60" r="2" fill="currentColor" />
          <circle cx="50" cy="120" r="2.5" fill="currentColor" />
        </svg>
        
        {/* Wavy line */}
        <svg className="absolute bottom-1/3 right-1/4 w-48 h-48 text-[#FF9800]" viewBox="0 0 150 150">
          <path d="M10 75 Q 40 70, 70 75 T 130 75" fill="none" stroke="currentColor" strokeWidth="1.5" 
            strokeDasharray="4,6" style={{ strokeLinecap: 'round' }} />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 pt-12 sm:pt-16 md:pt-20 pb-0 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 md:gap-12 mb-2">
          
          {/* Brand Section - Wider */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-3xl font-black text-gray-900 mb-4 relative inline-block">
              MAPS International WLL
              {/* Hand-drawn underline */}
              <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 200 6" preserveAspectRatio="none">
                <path d="M0 3 Q 50 5, 100 3 T 200 3" fill="none" stroke="#E91E63" strokeWidth="2" 
                  style={{ strokeLinecap: 'round' }} opacity="0.3" />
              </svg>
            </h3>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              Connecting cultures, inspiring minds, and empowering communities across 80+ countries worldwide.
            </p>
            
            {/* Impact Badge */}
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-xl rounded-full px-5 py-3 shadow-lg border border-gray-200/50">
              <Globe className="w-5 h-5 text-[#E91E63]" />
              <span className="text-gray-900 font-bold text-sm">80+ Countries</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1"
          >
            <h4 className="text-gray-900 font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-700 hover:text-gray-900 transition-colors text-base font-semibold hover:translate-x-1 inline-block transition-transform">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-700 hover:text-gray-900 transition-colors text-base font-semibold hover:translate-x-1 inline-block transition-transform">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-gray-700 hover:text-gray-900 transition-colors text-base font-semibold hover:translate-x-1 inline-block transition-transform">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/connect" className="text-gray-700 hover:text-gray-900 transition-colors text-base font-semibold hover:translate-x-1 inline-block transition-transform">
                  Connect
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <h4 className="text-gray-900 font-bold mb-6 text-lg">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-gradient-to-r from-[#E91E63] to-[#FF9800] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <a href="mailto:info@mapsinternational.net" className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-semibold break-words leading-relaxed">
                  info@mapsinternational.net
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-gradient-to-r from-[#00BCD4] to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <a href="tel:+97455603845" className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-semibold">
                  +974 5560 3845
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700 text-sm font-semibold">
                  Katara Cultural Village<br />Doha, Qatar
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-1"
          >
            <h4 className="text-gray-900 font-bold mb-6 text-lg">Stay Connected</h4>
            
            {/* Social Media Icons */}
            <div className="flex gap-3 mb-6">
              <motion.a
                href="https://www.instagram.com/mapsinternational.qa"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 rounded-full bg-gradient-to-r from-[#E4405F] to-[#F09433] hover:shadow-lg flex items-center justify-center transition-all duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/themapsinternational"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 rounded-full bg-gradient-to-r from-[#1877F2] to-[#4267B2] hover:shadow-lg flex items-center justify-center transition-all duration-300"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </motion.a>
            </div>

            {/* Newsletter Form */}
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="w-full px-4 py-3 bg-white/80 backdrop-blur-xl border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#E91E63] transition-colors text-sm"
                />
              </div>
              <RippleButton
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-gradient-to-r from-[#E91E63] to-[#00BCD4] text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    />
                    Subscribing...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Subscribe
                  </>
                )}
              </RippleButton>
              {isSubscribed && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-600 text-sm font-semibold text-center"
                >
                  ✓ Subscribed successfully! Check your email.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-8 border-t border-gray-300/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <p className="text-gray-600 text-sm font-semibold">
                © {new Date().getFullYear()} MAPS International WLL. All rights reserved.
              </p>
              <div className="hidden md:flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2">
                <Award className="w-4 h-4 text-[#E91E63]" />
                <span className="text-gray-700 text-xs font-bold">11+ Years of Excellence</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-semibold">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-semibold">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-[#E91E63] to-[#00BCD4] rounded-full shadow-lg flex items-center justify-center group hover:shadow-xl transition-all duration-300"
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </motion.button>
    </footer>
  );
};

export default Footer;
