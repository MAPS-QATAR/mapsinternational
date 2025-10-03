import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import mapsLogo from "@/assets/maps-logo.jpg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Work", path: "/work" },
    { name: "Connect", path: "/connect" }
  ];

  const isActive = (path: string) => {
    if (path === "/about" && location.pathname === "/") return true;
    return location.pathname === path;
  };

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  // Check if we're on a dark background page for white text
  const isDarkPage = location.pathname === "/about" || location.pathname.startsWith("/projects/") || location.pathname === "/" || location.pathname === "/connect" || location.pathname === "/work";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isDarkPage 
        ? 'bg-black/20 backdrop-blur-md border-b border-white/10' 
        : 'bg-white/90 backdrop-blur-md border-b border-gray-200/50'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="cursor-pointer transition-all duration-300 hover:scale-105"
            onClick={() => navigate("/")}
          >
            {isDarkPage ? (
              // Option 1: Clean MAPS Logo for dark pages
              <div className="flex items-center gap-3">
                <img 
                  src={mapsLogo} 
                  alt="MAPS International WLL" 
                  className="w-12 h-12 object-contain hover:scale-110 transition-transform duration-300"
                />
                <span className="text-xl font-bold text-white text-glow">MAPS INTERNATIONAL WLL</span>
              </div>
            ) : (
              // Option 2: Clean MAPS Logo for light pages
              <div className="flex items-center gap-3">
                <img 
                  src={mapsLogo} 
                  alt="MAPS International WLL" 
                  className="w-12 h-12 object-contain hover:scale-110 transition-transform duration-300"
                />
                <span className="text-xl font-bold text-dark">MAPS INTERNATIONAL WLL</span>
              </div>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.path)}
                className={`text-lg font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? isDarkPage 
                      ? "text-white border-b-2 border-white pb-1 font-bold" 
                      : "text-gray-900 border-b-2 border-gray-900 pb-1 font-bold"
                    : isDarkPage
                      ? "text-white/90 hover:text-white hover:scale-105"
                      : "text-gray-700 hover:text-gray-900 hover:scale-105"
                }`}
                style={{
                  textShadow: isDarkPage ? '0 0 10px rgba(255, 255, 255, 0.5)' : 'none',
                  filter: isDarkPage ? 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (isDarkPage) {
                    e.currentTarget.style.color = '#E91E63'; // Brand magenta
                    e.currentTarget.style.textShadow = '0 0 20px rgba(233, 30, 99, 0.8)';
                    e.currentTarget.style.filter = 'drop-shadow(0 0 12px rgba(233, 30, 99, 0.6))';
                  }
                }}
                onMouseLeave={(e) => {
                  if (isDarkPage) {
                    e.currentTarget.style.color = '';
                    e.currentTarget.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
                    e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))';
                  }
                }}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${
              isDarkPage ? "text-white" : "text-dark"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={`md:hidden transition-all duration-300 ${
            isDarkPage 
              ? "border-t border-white/20 bg-black/80 backdrop-blur-sm" 
              : "border-t border-gray-200 bg-white/95 backdrop-blur-sm"
          }`}>
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.path)}
                  className={`block w-full text-left text-lg font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? isDarkPage ? "text-white font-bold" : "text-gray-900 font-bold"
                      : isDarkPage 
                        ? "text-white/90 hover:text-white" 
                        : "text-gray-700 hover:text-gray-900"
                  }`}
                  style={{
                    textShadow: isDarkPage ? '0 0 10px rgba(255, 255, 255, 0.5)' : 'none',
                    filter: isDarkPage ? 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (isDarkPage) {
                      e.currentTarget.style.color = '#E91E63'; // Brand magenta
                      e.currentTarget.style.textShadow = '0 0 20px rgba(233, 30, 99, 0.8)';
                      e.currentTarget.style.filter = 'drop-shadow(0 0 12px rgba(233, 30, 99, 0.6))';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isDarkPage) {
                      e.currentTarget.style.color = '';
                      e.currentTarget.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
                      e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))';
                    }
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
