import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, Globe, Users, Award, Star } from "lucide-react";
import { getProjectById, renderIcon } from "@/data/projects";
import BrandAmbassadors from "@/components/BrandAmbassadors";
import QIAFTimeline from "@/components/QIAFTimeline";
import QIAFEventComponents from "@/components/QIAFEventComponents";
import QIAFMediaGallery from "@/components/QIAFMediaGallery";
import qiafHeaderImage from "@/assets/projects-details/qiaf/qiaf-header.jpg";
import ksspHeaderImage from "@/assets/projects-details/kssp/kssp-header.jpg";
import cosmicHeaderImage from "@/assets/projects-details/cosmiccanvas/cosmic-header.jpg";

// QIAF Photos
import qiaf2019LivePainting from "@/assets/projects-details/qiaf/qiaf-2019/Live Painting Session Qatar 2019.jpg";
import qiaf2019Awards from "@/assets/projects-details/qiaf/qiaf-2019/QIAF 2019 Award Ceremony.jpg";
import qiaf2019Gallery from "@/assets/projects-details/qiaf/qiaf-2019/QIAF 2019 Gallery.jpg";
import qiaf2019Photo1 from "@/assets/projects-details/qiaf/qiaf-2019/QIAF 2019 Photo 1.jpg";
import qiaf2019Photo5 from "@/assets/projects-details/qiaf/qiaf-2019/QIAF 2019 Photo 5.jpg";
import qiaf2019Photo6 from "@/assets/projects-details/qiaf/qiaf-2019/QIAF 2019 Photo 6.jpg";

import qiaf2021ArtGallery from "@/assets/projects-details/qiaf/qiaf-2021/artgallery.jpg";
import qiaf2021ArtistFashion from "@/assets/projects-details/qiaf/qiaf-2021/artist-fashion.jpg";
import qiaf2021AwardCeremony from "@/assets/projects-details/qiaf/qiaf-2021/awardceremony.jpg";
import qiaf2021CulturalEvening from "@/assets/projects-details/qiaf/qiaf-2021/cultural-evening.jpg";
import qiaf2021Masterclass from "@/assets/projects-details/qiaf/qiaf-2021/masterclass.jpg";
import qiaf2021RedCarpet from "@/assets/projects-details/qiaf/qiaf-2021/redcarpet.jpg";

import qiaf2022ArrivalNight from "@/assets/projects-details/qiaf/qiaf-2022/Arrival-Night.jpg";
import qiaf2022FashionShow from "@/assets/projects-details/qiaf/qiaf-2022/Artistic-Fashion-Show.jpg";
import qiaf2022AwardNight from "@/assets/projects-details/qiaf/qiaf-2022/Award-Night.jpg";
import qiaf2022CulturalEvening from "@/assets/projects-details/qiaf/qiaf-2022/Cultural-Evening.jpg";
import qiaf2022Masterclass from "@/assets/projects-details/qiaf/qiaf-2022/Master-class.jpg";
import qiaf2022NetworkingDinner from "@/assets/projects-details/qiaf/qiaf-2022/Networking-Dinner.jpg";
import qiaf2022Paintings from "@/assets/projects-details/qiaf/qiaf-2022/Paintings-n-Sculptures.jpg";
import qiaf2022PanelTalkshow from "@/assets/projects-details/qiaf/qiaf-2022/Panel-Talkshow.jpg";
import qiaf2022CulturalTour from "@/assets/projects-details/qiaf/qiaf-2022/QIAF-2022_Cultural-Tour.jpg";
import qiaf2022RedCarpet from "@/assets/projects-details/qiaf/qiaf-2022/Red-Carpet-Vip-Opening.jpg";

import qiaf2023FashionShow from "@/assets/projects-details/qiaf/qiaf-2023/QIAF-2023-Artistic-Fashion-Show.jpg";
import qiaf2023Awards from "@/assets/projects-details/qiaf/qiaf-2023/QIAF-2023-Award-and-Felicitaion.jpg";
import qiaf2023Opening from "@/assets/projects-details/qiaf/qiaf-2023/QIAF-2023-Day1_Opening.jpg";
import qiaf2023Paintings from "@/assets/projects-details/qiaf/qiaf-2023/QIAF-2023-Paintings-and-Sculptures.jpg";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = id ? getProjectById(id) : null;

  // Function to get the appropriate header image
  const getHeaderImage = (projectId: string) => {
    switch (projectId) {
      case 'qiaf-2025':
        return qiafHeaderImage;
      case 'kssp':
        return ksspHeaderImage;
      case 'cosmic-canvas':
        return cosmicHeaderImage;
      default:
        // Fallback to the original project image for projects without header images
        return project?.heroImage;
    }
  };

  // QIAF Evolution Timeline Data
  const qiafEvolution = [
    {
      year: 2018,
      artists: 232,
      countries: 64,
      image: qiaf2019LivePainting,
      highlights: ["Live Painting Sessions", "Award Ceremonies", "Gallery Exhibitions"]
    },
    {
      year: 2021,
      artists: 250,
      countries: 65,
      image: qiaf2021RedCarpet,
      highlights: ["Red Carpet Events", "Cultural Evenings", "Master Classes"]
    },
    {
      year: 2022,
      artists: 300,
      countries: 67,
      image: qiaf2022FashionShow,
      highlights: ["Fashion Shows", "Networking Dinners", "Cultural Tours"]
    },
    {
      year: 2023,
      artists: 350,
      countries: 68,
      image: qiaf2023Opening,
      highlights: ["Opening Ceremonies", "Artistic Fashion", "Award Celebrations"]
    },
    {
      year: 2025,
      artists: 500,
      countries: 80,
      image: qiafHeaderImage,
      highlights: ["15 Major Components", "VIP Ceremonies", "International Recognition"]
    }
  ];

  // QIAF Event Components with Real Photos
  const qiafEventComponents = [
    {
      id: 1,
      title: "Red Carpet VIP Opening",
      description: "Exclusive gala with dignitaries and ambassadors",
      image: qiaf2022RedCarpet,
      category: "Ceremony"
    },
    {
      id: 2,
      title: "International Exhibitions",
      description: "Gallery exhibitions from 500+ artists",
      image: qiaf2021ArtGallery,
      category: "Exhibition"
    },
    {
      id: 3,
      title: "Art Conferences",
      description: "Expert panels on culture and innovation",
      image: qiaf2022PanelTalkshow,
      category: "Conference"
    },
    {
      id: 4,
      title: "Master Classes",
      description: "Hands-on learning with professionals",
      image: qiaf2021Masterclass,
      category: "Education"
    },
    {
      id: 5,
      title: "Live Painting Sessions",
      description: "Real-time artistic demonstrations",
      image: qiaf2019LivePainting,
      category: "Live Art"
    },
    {
      id: 6,
      title: "Fashion Shows",
      description: "Sustainable fashion performances",
      image: qiaf2023FashionShow,
      category: "Fashion"
    },
    {
      id: 7,
      title: "Cultural Evenings",
      description: "Live performances by international artists",
      image: qiaf2021CulturalEvening,
      category: "Performance"
    },
    {
      id: 8,
      title: "Cultural Tours",
      description: "Guided cultural experiences",
      image: qiaf2022CulturalTour,
      category: "Experience"
    },
    {
      id: 9,
      title: "Networking Dinners",
      description: "Exclusive networking events",
      image: qiaf2022NetworkingDinner,
      category: "Networking"
    },
    {
      id: 10,
      title: "Award Ceremonies",
      description: "Recognition for outstanding artists",
      image: qiaf2023Awards,
      category: "Recognition"
    }
  ];

  // QIAF Media Gallery
  const qiafMediaGallery = [
    {
      id: 1,
      title: "Opening Ceremony",
      image: qiaf2023Opening,
      category: "Ceremony",
      year: "2023"
    },
    {
      id: 2,
      title: "Live Painting Sessions",
      image: qiaf2019LivePainting,
      category: "Live Art",
      year: "2019"
    },
    {
      id: 3,
      title: "Award Ceremony",
      image: qiaf2023Awards,
      category: "Awards",
      year: "2023"
    },
    {
      id: 4,
      title: "Fashion Show",
      image: qiaf2022FashionShow,
      category: "Fashion",
      year: "2022"
    },
    {
      id: 5,
      title: "Cultural Evening",
      image: qiaf2021CulturalEvening,
      category: "Performance",
      year: "2021"
    },
    {
      id: 6,
      title: "Art Gallery",
      image: qiaf2021ArtGallery,
      category: "Exhibition",
      year: "2021"
    },
    {
      id: 7,
      title: "Master Class",
      image: qiaf2022Masterclass,
      category: "Education",
      year: "2022"
    },
    {
      id: 8,
      title: "Networking Dinner",
      image: qiaf2022NetworkingDinner,
      category: "Networking",
      year: "2022"
    }
  ];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-light to-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-dark mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/')}
            className="btn-hero"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button - Fixed Left Side */}
      <button
        onClick={handleBack}
        className="fixed left-6 top-20 z-50 bg-white/95 backdrop-blur-md hover:bg-white text-dark rounded-full p-4 shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3 border border-white/20 animate-pulse hover:animate-none group"
        aria-label="Go back"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
        <span className="hidden sm:inline font-semibold">Back</span>
      </button>

      {/* Hero Section - New 50/50 Layout */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image Frame */}
            <div className="order-2 lg:order-1">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <img
                  src={getHeaderImage(project.id)}
                  alt={project.title}
                  className="w-full h-auto rounded-2xl object-cover shadow-lg"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="order-1 lg:order-2 space-y-8">
              {/* Category & Icon */}
              <div className="flex items-center gap-3">
                <div className="text-magenta">{renderIcon(project.iconType, "w-6 h-6")}</div>
                <span className="text-gray-600 text-lg font-medium">{project.category}</span>
                <div className="w-1 h-1 bg-gray-400 rounded-full" />
                <span className="text-gray-500">{project.year}</span>
              </div>

              {/* Title */}
              <h1 className="text-dark text-4xl md:text-5xl font-bold leading-tight">
                {project.title}
              </h1>

              {/* Description */}
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                {project.description}
              </p>

              {/* Enhanced Stats Grid */}
              <div className="bg-gradient-to-r from-magenta/5 to-teal/5 rounded-3xl p-8 border border-magenta/10">
                <h3 className="text-2xl font-bold text-black mb-8 text-center">Project Impact</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {Object.entries(project.stats).slice(0, 8).map(([key, value]) => (
                    <div key={key} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <div className="text-3xl md:text-4xl font-bold text-magenta mb-2">{value}+</div>
                      <div className="text-sm font-medium text-gray-700 capitalize leading-tight">{key.replace('_', ' ')}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Event Details */}
              {(project.dates || project.venue || project.theme) && (
                <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-dark mb-4">Event Details</h3>
                  <div className="space-y-3">
                    {project.dates && (
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-magenta" />
                        <span className="text-gray-700">{project.dates}</span>
                      </div>
                    )}
                    {project.venue && (
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-magenta" />
                        <span className="text-gray-700">{project.venue}</span>
                      </div>
                    )}
                    {project.theme && (
                      <div className="flex items-center gap-3">
                        <Star className="w-5 h-5 text-magenta" />
                        <span className="text-gray-700">{project.theme}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Ambassadors Section - Only for QIAF */}
      {project.id === "qiaf-2025" && <BrandAmbassadors />}

      {/* QIAF Evolution Timeline - Only for QIAF */}
      {project.id === 'qiaf-2025' && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-dark mb-16">QIAF Evolution</h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-magenta via-teal to-cta transform -translate-y-1/2 hidden lg:block"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                {qiafEvolution.map((edition, index) => (
                  <div key={edition.year} className="relative group">
                    {/* Timeline Dot */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-magenta rounded-full border-4 border-white shadow-lg hidden lg:block group-hover:scale-125 transition-transform duration-300"></div>
                    
                    {/* Edition Card */}
                    <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 group-hover:scale-105">
                      <div className="aspect-square mb-4 rounded-2xl overflow-hidden">
                        <img
                          src={edition.image}
                          alt={`QIAF ${edition.year}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-dark mb-2">{edition.year}</h3>
                        <div className="space-y-1 mb-4">
                          <div className="text-lg font-semibold text-magenta">{edition.artists}+ Artists</div>
                          <div className="text-sm text-gray-600">{edition.countries} Countries</div>
                        </div>
                        <div className="space-y-1">
                          {edition.highlights.map((highlight, idx) => (
                            <div key={idx} className="text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1">
                              {highlight}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Event Components - Only for QIAF */}
      {project.id === 'qiaf-2025' && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-dark mb-16">Event Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {qiafEventComponents.map((component) => (
                <div key={component.id} className="group cursor-pointer">
                  <div className="aspect-square mb-4 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
                    <img
                      src={component.image}
                      alt={component.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-xs font-semibold bg-magenta/80 rounded-full px-3 py-1 inline-block mb-2">
                        {component.category}
                      </div>
                      <h3 className="text-lg font-bold mb-1">{component.title}</h3>
                      <p className="text-sm text-white/90">{component.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Media Gallery - Only for QIAF */}
      {project.id === 'qiaf-2025' && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-dark mb-16">QIAF Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {qiafMediaGallery.map((media) => (
                <div key={media.id} className="group cursor-pointer">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
                    <img
                      src={media.image}
                      alt={media.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-xs font-semibold bg-teal/80 rounded-full px-3 py-1 inline-block mb-2">
                        {media.year}
                      </div>
                      <h3 className="text-lg font-bold mb-1">{media.title}</h3>
                      <p className="text-sm text-white/90">{media.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Project Content - For non-QIAF projects */}
      {project.id !== 'qiaf-2025' && (
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            {/* Enhanced About Section - Generic for all projects */}
            {project.longDescription && (
              <div className="mb-20">
                <div className="bg-gradient-to-r from-magenta/10 to-teal/10 rounded-3xl p-8 md:p-12 border-2 border-magenta/20 shadow-xl">
                  <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 tracking-tight text-center">
                    About This Project
                  </h2>
                  <div className="max-w-5xl mx-auto">
                    <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium text-center">
                      {project.longDescription}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Partnerships Section - For KSSP */}
            {project.id === 'kssp' && project.partnerships && (
              <div className="mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 text-center">
                  Our Partners
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {project.partnerships.map((partnership, index) => (
                    <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-magenta/20 to-teal/20 rounded-full flex items-center justify-center">
                          <Star className="w-8 h-8 text-magenta" />
                        </div>
                        <h3 className="text-lg font-bold text-black mb-2">{partnership.split(' - ')[0]}</h3>
                        <p className="text-sm text-gray-600">{partnership.split(' - ')[1]}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}


            {/* Gallery Section */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="mb-20">
                <h2 className="text-4xl font-light text-black mb-8 tracking-tight">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {project.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-video rounded-2xl overflow-hidden bg-gray-100 hover:bg-gray-200 transition-all duration-300 hover:scale-105"
                    >
                      <img
                        src={image}
                        alt={`${project.title} gallery image ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}


    </div>
  );
};

export default ProjectDetail;