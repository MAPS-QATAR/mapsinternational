import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import backgroundImage from "@/assets/background.jpg";

const Work = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All Projects");
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll for background color changes
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleProjectClick = (projectId: string) => {
    if (projectId === "youth-platform") {
      return; // Coming soon
    }
    navigate(`/projects/${projectId}`);
  };

  // Filter projects
  const filteredProjects = projects.filter(project => {
    if (filter === "All Projects") return true;
    return project.category === filter;
  });

  // Get background color based on scroll position
  const getBackgroundColor = () => {
    const sectionHeight = window.innerHeight;
    const currentSection = Math.floor(scrollY / sectionHeight);
    
    switch (currentSection % 4) {
      case 0: return "#F5F5DC"; // Cream
      case 1: return "#E8F4F8"; // Light Teal
      case 2: return "#FDF2F8"; // Light Magenta
      case 3: return "#F5F5DC"; // Back to Cream
      default: return "#F5F5DC";
    }
  };

  const categories = [
    "All Projects",
    "Arts & Culture", 
    "Youth & Innovation",
    "Education & STEM",
    "Heritage & Culture",
    "Fashion & Heritage",
    "Science & Education",
    "Science & Art"
  ];

  return (
    <div 
      className="min-h-screen transition-colors duration-1000"
      style={{ backgroundColor: getBackgroundColor() }}
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="h-64 md:h-80"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white" style={{
            textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6)'
          }}>
            Our Work
          </h1>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              From <span className="text-magenta font-semibold">cultural diplomacy</span> to <span className="text-teal font-semibold">youth empowerment</span> — discover the projects that have transformed Qatar's cultural landscape and connected communities across <span className="text-magenta font-semibold">70+ countries</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-magenta text-white shadow-lg'
                    : 'bg-white/80 text-gray-700 hover:bg-magenta/10 hover:text-magenta'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid - Mark Kimathi Style */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
             {filteredProjects.map((project, index) => {
               // Get unique colors for each project based on their theme/image
               const getProjectColors = (projectId: string) => {
                 switch (projectId) {
                   case "qiaf-2025":
                     return {
                       card: "bg-gradient-to-br from-emerald-500/20 to-green-600/20",
                       border: "border-emerald-500/30",
                       categoryBadge: "bg-emerald-500/90",
                       yearBadge: "bg-green-600/90",
                       title: "group-hover:text-emerald-600",
                       button: "text-emerald-600 group-hover:text-emerald-700",
                       stats: "bg-emerald-500/10 text-emerald-600"
                     };
                   case "youth-platform":
                     return {
                       card: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
                       border: "border-blue-500/30",
                       categoryBadge: "bg-blue-500/90",
                       yearBadge: "bg-cyan-500/90",
                       title: "group-hover:text-blue-600",
                       button: "text-blue-600 group-hover:text-blue-700",
                       stats: "bg-blue-500/10 text-blue-600"
                     };
                   case "kssp":
                     return {
                       card: "bg-gradient-to-br from-purple-500/20 to-violet-600/20",
                       border: "border-purple-500/30",
                       categoryBadge: "bg-purple-500/90",
                       yearBadge: "bg-violet-600/90",
                       title: "group-hover:text-purple-600",
                       button: "text-purple-600 group-hover:text-purple-700",
                       stats: "bg-purple-500/10 text-purple-600"
                     };
                   case "colours-of-desert":
                     return {
                       card: "bg-gradient-to-br from-orange-500/20 to-amber-500/20",
                       border: "border-orange-500/30",
                       categoryBadge: "bg-orange-500/90",
                       yearBadge: "bg-amber-500/90",
                       title: "group-hover:text-orange-600",
                       button: "text-orange-600 group-hover:text-orange-700",
                       stats: "bg-orange-500/10 text-orange-600"
                     };
                   case "bharat-vastram":
                     return {
                       card: "bg-gradient-to-br from-rose-500/20 to-pink-600/20",
                       border: "border-rose-500/30",
                       categoryBadge: "bg-rose-500/90",
                       yearBadge: "bg-pink-600/90",
                       title: "group-hover:text-rose-600",
                       button: "text-rose-600 group-hover:text-rose-700",
                       stats: "bg-rose-500/10 text-rose-600"
                     };
                   case "astro-fair":
                     return {
                       card: "bg-gradient-to-br from-indigo-500/20 to-blue-600/20",
                       border: "border-indigo-500/30",
                       categoryBadge: "bg-indigo-500/90",
                       yearBadge: "bg-blue-600/90",
                       title: "group-hover:text-indigo-600",
                       button: "text-indigo-600 group-hover:text-indigo-700",
                       stats: "bg-indigo-500/10 text-indigo-600"
                     };
                   case "cosmic-canvas":
                     return {
                       card: "bg-gradient-to-br from-violet-500/20 to-purple-600/20",
                       border: "border-violet-500/30",
                       categoryBadge: "bg-violet-500/90",
                       yearBadge: "bg-purple-600/90",
                       title: "group-hover:text-violet-600",
                       button: "text-violet-600 group-hover:text-violet-700",
                       stats: "bg-violet-500/10 text-violet-600"
                     };
                   default:
                     return {
                       card: "bg-gradient-to-br from-gray-500/20 to-slate-500/20",
                       border: "border-gray-500/30",
                       categoryBadge: "bg-gray-500/90",
                       yearBadge: "bg-slate-500/90",
                       title: "group-hover:text-gray-600",
                       button: "text-gray-600 group-hover:text-gray-700",
                       stats: "bg-gray-500/10 text-gray-600"
                     };
                 }
               };

               const colors = getProjectColors(project.id);

               return (
                 <div
                   key={project.id}
                   onClick={() => handleProjectClick(project.id)}
                   className={`group cursor-pointer transition-all duration-500 hover:scale-105 ${
                     project.id === "youth-platform" ? "opacity-75" : ""
                   }`}
                   style={{
                     animationDelay: `${index * 100}ms`
                   }}
                 >
                   <div className={`${colors.card} backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border ${colors.border}`}>
                     {/* Project Image */}
                     <div className="relative h-48 overflow-hidden">
                       <img 
                         src={project.heroImage} 
                         alt={project.title}
                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                       
                       {/* Category Badge */}
                       <div className="absolute top-4 left-4">
                         <span className={`px-3 py-1 ${colors.categoryBadge} text-white rounded-full text-xs font-semibold backdrop-blur-sm`}>
                           {project.category}
                         </span>
                       </div>

                       {/* Year Badge */}
                       <div className="absolute top-4 right-4">
                         <span className={`px-3 py-1 ${colors.yearBadge} text-white rounded-full text-xs font-semibold backdrop-blur-sm`}>
                           {project.year}
                         </span>
                       </div>

                       {/* Coming Soon Overlay */}
                       {project.id === "youth-platform" && (
                         <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                           <span className="text-white text-lg font-bold">Coming Soon</span>
                         </div>
                       )}
                     </div>

                     {/* Project Content */}
                     <div className="p-6">
                       <h3 className={`text-xl font-bold text-gray-800 mb-3 ${colors.title} transition-colors duration-300`}>
                         {project.title}
                       </h3>
                       <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                         {project.description}
                       </p>
                       
                       {/* Stats */}
                       <div className="flex flex-wrap gap-2 mb-4">
                         {project.stats.artists && (
                           <span className={`px-2 py-1 ${colors.stats} text-xs rounded-full`}>
                             {project.stats.artists} Artists
                           </span>
                         )}
                         {project.stats.countries && (
                           <span className={`px-2 py-1 ${colors.stats} text-xs rounded-full`}>
                             {project.stats.countries} Countries
                           </span>
                         )}
                         {project.stats.editions && (
                           <span className={`px-2 py-1 ${colors.stats} text-xs rounded-full`}>
                             {project.stats.editions} Editions
                           </span>
                         )}
                         {project.stats.participants && (
                           <span className={`px-2 py-1 ${colors.stats} text-xs rounded-full`}>
                             {project.stats.participants} Participants
                           </span>
                         )}
                       </div>

                       {/* View Project Button */}
                       {project.id !== "youth-platform" && (
                         <div className={`flex items-center ${colors.button} text-sm font-medium transition-colors duration-300`}>
                           <span>View Project</span>
                           <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                           </svg>
                         </div>
                       )}
                     </div>
                   </div>
                 </div>
               );
             })}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{
              textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6)'
            }}>
              Ready to Create Impact Together?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join our mission to create meaningful cultural impact across the globe. Let's build something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/connect')}
                className="bg-magenta hover:bg-magenta-dark text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </button>
              <button
                onClick={() => navigate('/about')}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;