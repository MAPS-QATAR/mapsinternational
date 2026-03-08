import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "MAPS International WLL has been instrumental in bringing together artists from across the globe. QIAF has become a cornerstone of cultural diplomacy in Qatar.",
      author: "H.E. Sheikh Abdulrahman bin Hamad Al Thani",
      position: "Minister of Culture, Qatar",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      quote: "The youth programs at MAPS International WLL have transformed how young people engage with space science and cultural exchange. It's truly inspiring.",
      author: "Dr. Sarah Al-Mahmoud",
      position: "Director, Qatar Foundation",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      quote: "As an artist, QIAF provided me with an incredible platform to showcase my work and connect with fellow artists from 80+ countries. It's a life-changing experience.",
      author: "Victoria De La Serna",
      position: "Contemporary Artist, Argentina",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      quote: "MAPS International WLL's commitment to cultural excellence and youth empowerment is unmatched. They're building bridges between cultures and communities.",
      author: "Ambassador John Smith",
      position: "US Embassy, Doha",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">What People Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from the artists, partners, and leaders who have experienced the magic of MAPS INTERNATIONAL WLL
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Testimonial Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-20 h-20 bg-magenta rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-teal rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cta rounded-full"></div>
              </div>

              {/* Quote Icon */}
              <div className="relative z-10 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-magenta to-teal rounded-full flex items-center justify-center mx-auto">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="relative z-10">
                <blockquote className="text-2xl md:text-3xl font-light text-gray-800 leading-relaxed mb-8 max-w-4xl mx-auto">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].author}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div className="text-left">
                    <h4 className="text-xl font-bold text-dark">{testimonials[currentTestimonial].author}</h4>
                    <p className="text-gray-600">{testimonials[currentTestimonial].position}</p>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-dark rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-dark rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-gradient-to-r from-magenta to-teal scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
