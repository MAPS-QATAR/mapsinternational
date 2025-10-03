import { Award, Globe, Users, Star, Crown, Shield, Building, Mic, Camera, Trophy } from "lucide-react";
import rashmiFounder from "@/assets/Rashmi-founder/rashmi-agarwal-professional.jpg";
import background3Image from "@/assets/background3.jpg";

const FounderSection = () => {
  // Expertise & Leadership
  const expertise = [
    {
      title: "Cultural Curation",
      description: "20+ years of curating transformative cultural experiences",
      icon: <Star className="w-8 h-8" />,
      color: "from-magenta/10 to-teal/10",
      borderColor: "border-magenta/20",
      hoverColor: "hover:shadow-magenta/20"
    },
    {
      title: "Strategic Planning",
      description: "Bridging art and business through innovative strategies",
      icon: <Building className="w-8 h-8" />,
      color: "from-teal/10 to-cyan-500/10",
      borderColor: "border-teal/20",
      hoverColor: "hover:shadow-teal/20"
    },
    {
      title: "Global Leadership",
      description: "Leading international organizations and cultural diplomacy",
      icon: <Globe className="w-8 h-8" />,
      color: "from-magenta/10 to-pink-500/10",
      borderColor: "border-magenta/20",
      hoverColor: "hover:shadow-magenta/20"
    },
    {
      title: "Social Impact",
      description: "Driving positive change through art and cultural engagement",
      icon: <Users className="w-8 h-8" />,
      color: "from-teal/10 to-cyan-500/10",
      borderColor: "border-teal/20",
      hoverColor: "hover:shadow-teal/20"
    }
  ];

  const globalPositions = [
    {
      category: "International Organizations",
      icon: <Globe className="w-6 h-6" />,
      color: "from-magenta/10 to-teal/10",
      borderColor: "border-magenta/20",
      hoverColor: "hover:shadow-magenta/20",
      positions: [
        {
          title: "Chairperson & International Director",
          organization: "Human Rights International Federation",
          location: "India",
          description: "Leading global human rights advocacy and policy development"
        },
        {
          title: "International Director & National Chairperson",
          organization: "Anti-Corruption Foundation",
          location: "Qatar",
          description: "Championing transparency and ethical governance"
        },
        {
          title: "Board Member",
          organization: "Silk Painters International",
          location: "USA",
          description: "Supporting global artistic excellence and cultural exchange"
        }
      ]
    },
    {
      category: "Arts & Media",
      icon: <Star className="w-6 h-6" />,
      color: "from-teal/10 to-cyan-500/10",
      borderColor: "border-teal/20",
      hoverColor: "hover:shadow-teal/20",
      positions: [
        {
          title: "Proprietor",
          organization: "Oyster Silk Art Gallery",
          location: "Since 2006",
          description: "Curating and promoting contemporary art and cultural heritage"
        },
        {
          title: "Featured Recognition",
          organization: "Gulf Times, Al Jazeera, Qatar TV, The Peninsula",
          location: "International Media",
          description: "Recognized for cultural leadership and social impact"
        },
        {
          title: "Space Program Recognition",
          organization: "Al Thuraya Planetarium",
          location: "Katara Cultural Village",
          description: "Pioneering space science education and youth engagement"
        }
      ]
    }
  ];

  // Awards & Recognition
  const awards = [
    {
      year: "2023-2024",
      title: "Qatar Ministry of Culture Recognition",
      description: "Official recognition for outstanding contribution to Qatar's cultural landscape",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-magenta/10 to-pink-500/10",
      borderColor: "border-magenta/20",
      hoverColor: "hover:shadow-magenta/20"
    },
    {
      year: "2019",
      title: "Best NRI Women Entrepreneur",
      description: "Celebrating exceptional leadership and innovation in cultural entrepreneurship",
      icon: <Crown className="w-8 h-8" />,
      color: "from-teal/10 to-cyan-500/10",
      borderColor: "border-teal/20",
      hoverColor: "hover:shadow-teal/20"
    },
    {
      year: "2018",
      title: "Asia Pride Award",
      description: "Honoring significant contributions to Asian cultural heritage and social impact",
      icon: <Award className="w-8 h-8" />,
      color: "from-magenta/10 to-teal/10",
      borderColor: "border-magenta/20",
      hoverColor: "hover:shadow-magenta/20"
    }
  ];

  const awardsOld = [
    {
      year: "2023-2024",
      title: "Qatar Ministry of Culture Recognition",
      description: "Official recognition for outstanding contribution to Qatar's cultural landscape",
      icon: <Crown className="w-8 h-8" />
    },
    {
      year: "2019",
      title: "Best NRI Women Entrepreneur",
      description: "Celebrating exceptional leadership and innovation in cultural entrepreneurship",
      icon: <Trophy className="w-8 h-8" />
    },
    {
      year: "2018",
      title: "Asia Pride Award",
      description: "Honoring significant contributions to Asian cultural heritage and social impact",
      icon: <Award className="w-8 h-8" />
    }
  ];


  return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          {/* Enhanced Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-32 h-32 bg-magenta rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-teal rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-cta rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-magenta/10 to-teal/10 rounded-2xl p-4 mb-6 shadow-lg">
              <h2 className="text-4xl md:text-5xl font-bold text-black">
                Meet Our Founder
              </h2>
            </div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              A <span className="text-magenta font-bold">visionary leader</span> fostering <span className="text-teal font-bold">cultural dialogue</span> and <span className="text-magenta font-bold">social impact</span> through art and innovation
            </p>
          </div>

          {/* Enhanced Founder Profile - Swapped Layout */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 mb-16 border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image on the Left */}
              <div className="relative order-1 lg:order-1">
                <div className="aspect-square bg-gradient-to-br from-magenta to-cta rounded-3xl p-1">
                  <div className="w-full h-full rounded-3xl overflow-hidden relative">
                    <img
                      src={rashmiFounder}
                      alt="Rashmi Agarwal - Founder & President of MAPS International WLL"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-dark">20+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </div>

              {/* Text Content on the Right */}
              <div className="space-y-8 order-2 lg:order-2">
                <div>
                  <h3 className="text-4xl font-bold text-dark mb-3">Rashmi Agarwal</h3>
                  <p className="text-2xl text-magenta font-bold mb-4">
                    Founder & President of MAPS International WLL
                  </p>
                  <p className="text-xl text-cta font-semibold mb-6">
                    CEO of Qatar International Art Festival
                  </p>
                  <div className="bg-gradient-to-r from-magenta/15 to-cta/15 rounded-2xl p-6 border-2 border-magenta/20 shadow-lg">
                    <p className="text-xl italic text-dark font-medium">
                      "A Visionary at the Crossroads of Art, Business, and Social Impact"
                    </p>
                    <p className="text-sm text-gray-600 mt-2 font-semibold">— HuffMag Magazine, July 2025</p>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Rashmi Agarwal is a pioneering entrepreneur and strategic leader with over 20 years of experience driving innovation, cultural engagement, and social impact in the fine arts industry. At MAPS International WLL and QIAF, she has been instrumental in elevating the region's art landscape, creating platforms that empower emerging voices and foster meaningful global cultural dialogue.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Her unique blend of expertise in curation, strategic planning, finance, and management has allowed her to bridge the worlds of art and business effectively. Through close collaborations with government bodies, cultural institutions, dignitaries, and globally recognized organizations, she amplifies art's impact for positive social change.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Recent Recognition:</strong> Featured in Huffmag as "A Visionary at the Crossroads of Art, Business, and Social Impact" and recognized by The Arab Leaders as one of the "Top Arab Cultural Leaders 2025". Her work has been covered by major Qatar news outlets including Gulf Times, Qatar News Agency, and Al Raya.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Global Impact:</strong> Under her leadership, MAPS International WLL has connected 400+ artists from 70+ countries, created 150+ transformative events, and empowered 5,000+ young leaders. QIAF has been described as "one of the world's most celebrated art gatherings" and is now integrated into Qatar's educational calendar.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Expertise Grid */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-dark text-center mb-8">Expertise & Leadership</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${item.color} backdrop-blur-lg border ${item.borderColor} rounded-2xl p-6 shadow-lg hover:shadow-xl ${item.hoverColor} transition-all duration-300 hover:-translate-y-2`}
                >
                  <div className="text-gray-700 mb-4">{item.icon}</div>
                  <h4 className="text-lg font-semibold text-dark mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Global Leadership Positions */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-dark text-center mb-8">Global Leadership Positions</h3>
            <div className="space-y-12">
              {globalPositions.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <div className={`bg-gradient-to-r ${category.color} backdrop-blur-lg border ${category.borderColor} rounded-2xl p-6 mb-8 ${category.hoverColor}`}>
                    <div className="flex items-center gap-3">
                      <div className="text-gray-700">{category.icon}</div>
                      <h4 className="text-2xl font-bold text-dark">{category.category}</h4>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.positions.map((position, positionIndex) => (
                      <div
                        key={positionIndex}
                        className={`bg-gradient-to-br ${category.color} backdrop-blur-lg border ${category.borderColor} rounded-2xl p-6 shadow-lg hover:shadow-xl ${category.hoverColor} transition-all duration-300 hover:-translate-y-2`}
                      >
                        <h5 className="text-lg font-semibold text-dark mb-2">{position.title}</h5>
                        <p className="text-gray-700 font-medium mb-1">{position.organization}</p>
                        <p className="text-sm text-gray-600 mb-3">{position.location}</p>
                        <p className="text-sm text-gray-600 leading-relaxed">{position.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Recognition */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-dark text-center mb-8">Awards & Recognition</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${award.color} backdrop-blur-lg border ${award.borderColor} rounded-3xl p-8 shadow-lg hover:shadow-xl ${award.hoverColor} transition-all duration-300 hover:-translate-y-2 text-center`}
                >
                  <div className="text-gray-700 mb-4 flex justify-center">{award.icon}</div>
                  <div className="text-gray-600 font-bold text-lg mb-2">{award.year}</div>
                  <h4 className="text-xl font-bold text-dark mb-4">{award.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{award.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FounderSection;
