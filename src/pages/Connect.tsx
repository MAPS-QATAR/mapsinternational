import { useState } from "react";
import { Mail, Phone, MapPin, Send, Star, Award, Users, Calendar, Globe, FileText, Heart, Upload, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useRipple } from "@/hooks/useAdvancedAnimations";
import ParticleSystem from "@/components/ParticleSystem";
import backgroundImage from "@/assets/background.jpg";
import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_maps_international'; // You'll need to replace this with your actual service ID
const EMAILJS_TEMPLATE_ID = 'template_contact_form'; // You'll need to replace this with your actual template ID
const EMAILJS_PUBLIC_KEY = 'your_public_key_here'; // You'll need to replace this with your actual public key

const Connect = () => {
  const [activeForm, setActiveForm] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    website: "",
    message: "",
    timeline: "",
    budget: "",
    type: "",
    experience: "",
    age: "",
    school: "",
    interest: "",
    availability: "",
    artStyle: "",
    medium: "",
    outlet: "",
    articleType: "",
    deadline: "",
    targetAudience: "",
    inquiryType: ""
  });
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const { toast } = useToast();


  const ctaButtons = [
    { id: "sponsor", label: "Sponsor", icon: <Star className="w-5 h-5" />, color: "magenta" },
    { id: "partner", label: "Partner", icon: <Award className="w-5 h-5" />, color: "teal" },
    { id: "artist", label: "Artist", icon: <Users className="w-5 h-5" />, color: "accent" },
    { id: "youth", label: "Youth", icon: <Heart className="w-5 h-5" />, color: "cta" },
    { id: "press", label: "Press", icon: <FileText className="w-5 h-5" />, color: "teal" },
    { id: "inquiry", label: "Inquiry", icon: <Mail className="w-5 h-5" />, color: "magenta" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        form_type: activeForm?.charAt(0).toUpperCase() + activeForm?.slice(1) || 'Inquiry',
        name: formData.name,
        organization: formData.organization || 'Not provided',
        email: formData.email,
        phone: formData.phone || 'Not provided',
        website: formData.website || 'Not provided',
        message: formData.message,
        timeline: formData.timeline || 'Not specified',
        budget: formData.budget || 'Not specified',
        type: formData.type || 'Not specified',
        experience: formData.experience || 'Not specified',
        age: formData.age || 'Not provided',
        school: formData.school || 'Not provided',
        interest: formData.interest || 'Not specified',
        availability: formData.availability || 'Not specified',
        art_style: formData.artStyle || 'Not specified',
        medium: formData.medium || 'Not specified',
        outlet: formData.outlet || 'Not provided',
        article_type: formData.articleType || 'Not specified',
        deadline: formData.deadline || 'Not specified',
        target_audience: formData.targetAudience || 'Not specified',
        inquiry_type: formData.inquiryType || 'Not specified',
        files_count: uploadedFiles.length,
        files_info: uploadedFiles.map(file => `${file.name} (${(file.size / 1024 / 1024).toFixed(2)}MB)`).join(', ') || 'No files uploaded',
        to_email: 'info@mapsinternational.net',
        reply_to: formData.email
      };

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

    toast({
      title: "Message Sent!",
        description: `Thank you for your ${activeForm} inquiry! We'll get back to you within 24 hours.`,
    });

    // Reset form
      resetForm();
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Error",
        description: "Sorry, there was an error sending your message. Please try again or contact us directly at info@mapsinternational.net",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const validFiles = files.filter(file => {
      const isValidType = file.type === 'application/pdf' || 
                         file.type === 'image/png' || 
                         file.type === 'image/jpeg' || 
                         file.type === 'image/jpg';
      const isValidSize = file.size <= 10 * 1024 * 1024; // 10MB limit
      return isValidType && isValidSize;
    });
    
    if (validFiles.length !== files.length) {
      toast({
        title: "Invalid Files",
        description: "Some files were rejected. Only PDF, PNG, and JPEG files under 10MB are allowed.",
        variant: "destructive"
      });
    }
    
    setUploadedFiles(prev => [...prev, ...validFiles]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      organization: "",
      email: "",
      phone: "",
      website: "",
      message: "",
      timeline: "",
      budget: "",
      type: "",
      experience: "",
      age: "",
      school: "",
      interest: "",
      availability: "",
      artStyle: "",
      medium: "",
      outlet: "",
      articleType: "",
      deadline: "",
      targetAudience: "",
      inquiryType: ""
    });
    setUploadedFiles([]);
    setActiveForm(null);
  };

  // Form field renderers for different categories
  const renderSponsorForm = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-magenta focus:border-transparent transition-all"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="organization" className="block text-sm font-medium text-dark mb-2">
            Organization *
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            required
            value={formData.organization}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-magenta focus:border-transparent transition-all"
            placeholder="Your organization"
          />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-magenta focus:border-transparent transition-all"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-dark mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-magenta focus:border-transparent transition-all"
            placeholder="+1 (555) 123-4567"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-dark mb-2">
            Budget Range *
          </label>
          <select
            id="budget"
            name="budget"
            required
            value={formData.budget}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-magenta focus:border-transparent transition-all"
          >
            <option value="">Select budget range</option>
            <option value="1k-5k">$1,000 - $5,000</option>
            <option value="5k-25k">$5,000 - $25,000</option>
            <option value="25k-100k">$25,000 - $100,000</option>
            <option value="100k+">$100,000+</option>
          </select>
            </div>
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-dark mb-2">
            Sponsorship Type *
          </label>
          <select
            id="type"
            name="type"
            required
            value={formData.type}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-magenta focus:border-transparent transition-all"
          >
            <option value="">Select sponsorship type</option>
            <option value="event">Event Sponsorship</option>
            <option value="program">Program Sponsorship</option>
            <option value="general">General Sponsorship</option>
          </select>
          </div>
        </div>
        
      <div>
        <label htmlFor="timeline" className="block text-sm font-medium text-dark mb-2">
          Expected Timeline
        </label>
        <select
          id="timeline"
          name="timeline"
          value={formData.timeline}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-magenta focus:border-transparent transition-all"
        >
          <option value="">Select timeline</option>
          <option value="immediate">Immediate (1-2 weeks)</option>
          <option value="short">Short term (1-3 months)</option>
          <option value="medium">Medium term (3-6 months)</option>
          <option value="long">Long term (6+ months)</option>
        </select>
        </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
          Sponsorship Goals & Details *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-magenta focus:border-transparent transition-all resize-none"
          placeholder="Tell us about your sponsorship goals, target audience, and how you'd like to collaborate..."
        />
      </div>
    </div>
  );

  const renderPartnerForm = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-teal focus:border-transparent transition-all"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="organization" className="block text-sm font-medium text-dark mb-2">
            Organization *
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            required
            value={formData.organization}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-teal focus:border-transparent transition-all"
            placeholder="Your organization"
          />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-teal focus:border-transparent transition-all"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-dark mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-teal focus:border-transparent transition-all"
            placeholder="+1 (555) 123-4567"
          />
        </div>
      </div>

      <div>
        <label htmlFor="website" className="block text-sm font-medium text-dark mb-2">
          Organization Website
        </label>
        <input
          type="url"
          id="website"
          name="website"
          value={formData.website}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-teal focus:border-transparent transition-all"
          placeholder="https://your-organization.com"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-dark mb-2">
            Partnership Type *
          </label>
          <select
            id="type"
            name="type"
            required
            value={formData.type}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-teal focus:border-transparent transition-all"
          >
            <option value="">Select partnership type</option>
            <option value="cultural-exchange">Cultural Exchange</option>
            <option value="educational">Educational</option>
            <option value="event">Event Partnership</option>
            <option value="long-term">Long-term Collaboration</option>
          </select>
                    </div>
        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-dark mb-2">
            Organization Size
          </label>
          <select
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-teal focus:border-transparent transition-all"
          >
            <option value="">Select organization size</option>
            <option value="small">Small (1-50 employees)</option>
            <option value="medium">Medium (51-200 employees)</option>
            <option value="large">Large (201-1000 employees)</option>
            <option value="enterprise">Enterprise (1000+ employees)</option>
          </select>
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
          Partnership Vision & Previous Collaborations *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-teal focus:border-transparent transition-all resize-none"
          placeholder="Tell us about your partnership vision, previous collaborations, and how you'd like to work together..."
        />
      </div>
    </div>
  );

  const renderArtistForm = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
            placeholder="your.email@example.com"
          />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-dark mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
            placeholder="+1 (555) 123-4567"
          />
        </div>
        <div>
          <label htmlFor="website" className="block text-sm font-medium text-dark mb-2">
            Portfolio Website
          </label>
          <input
            type="url"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
            placeholder="https://your-portfolio.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="artStyle" className="block text-sm font-medium text-dark mb-2">
            Art Style *
          </label>
          <select
            id="artStyle"
            name="artStyle"
            required
            value={formData.artStyle}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
          >
            <option value="">Select art style</option>
            <option value="digital">Digital Art</option>
            <option value="traditional">Traditional Art</option>
            <option value="mixed-media">Mixed Media</option>
            <option value="photography">Photography</option>
            <option value="sculpture">Sculpture</option>
            <option value="painting">Painting</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-dark mb-2">
            Experience Level *
          </label>
          <select
            id="experience"
            name="experience"
            required
            value={formData.experience}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
          >
            <option value="">Select experience level</option>
            <option value="emerging">Emerging Artist</option>
            <option value="mid-career">Mid-career Artist</option>
            <option value="established">Established Artist</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="medium" className="block text-sm font-medium text-dark mb-2">
          Preferred Medium
        </label>
        <input
          type="text"
          id="medium"
          name="medium"
          value={formData.medium}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
          placeholder="e.g., Oil on canvas, Digital illustration, Watercolor..."
        />
      </div>

      {/* File Upload Section */}
      <div>
        <label className="block text-sm font-medium text-dark mb-2">
          Portfolio & Artwork Samples *
        </label>
        <div className="border-2 border-dashed border-accent/30 rounded-xl p-6 text-center hover:border-accent/50 transition-colors">
          <Upload className="w-8 h-8 text-accent mx-auto mb-2" />
          <p className="text-sm text-gray-600 mb-2">
            Upload your portfolio (PDF) and artwork samples (PNG/JPEG)
          </p>
          <p className="text-xs text-gray-500 mb-4">
            Max 5 files, 10MB each. Supported: PDF, PNG, JPEG
          </p>
          <input
            type="file"
            multiple
            accept=".pdf,.png,.jpg,.jpeg"
            onChange={handleFileUpload}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="bg-accent text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-accent/90 transition-colors"
          >
            Choose Files
          </label>
        </div>
        
        {/* File Preview */}
        {uploadedFiles.length > 0 && (
          <div className="mt-4 space-y-2">
            <p className="text-sm font-medium text-dark">Uploaded Files:</p>
            {uploadedFiles.map((file, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded-lg">
                <span className="text-sm text-gray-700">{file.name}</span>
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <X className="w-4 h-4" />
                  </button>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
          Artistic Vision & Goals *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
          placeholder="Tell us about your artistic vision, what you hope to achieve through collaboration with MAPS INTERNATIONAL WLL, and your creative goals..."
        />
      </div>
    </div>
  );

  const renderYouthForm = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-cta focus:border-transparent transition-all"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="age" className="block text-sm font-medium text-dark mb-2">
            Age *
          </label>
          <input
            type="number"
            id="age"
            name="age"
            required
            min="13"
            max="30"
            value={formData.age}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-cta focus:border-transparent transition-all"
            placeholder="Your age"
          />
        </div>
            </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-cta focus:border-transparent transition-all"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label htmlFor="school" className="block text-sm font-medium text-dark mb-2">
            School/University
          </label>
          <input
            type="text"
            id="school"
            name="school"
            value={formData.school}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-cta focus:border-transparent transition-all"
            placeholder="Your school or university"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="interest" className="block text-sm font-medium text-dark mb-2">
            Interest Area *
          </label>
          <select
            id="interest"
            name="interest"
            required
            value={formData.interest}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-cta focus:border-transparent transition-all"
          >
            <option value="">Select interest area</option>
            <option value="arts">Arts & Culture</option>
            <option value="stem">STEM & Science</option>
            <option value="leadership">Leadership & Development</option>
            <option value="cultural-exchange">Cultural Exchange</option>
            <option value="social-impact">Social Impact</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="availability" className="block text-sm font-medium text-dark mb-2">
            Availability *
          </label>
          <select
            id="availability"
            name="availability"
            required
            value={formData.availability}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-cta focus:border-transparent transition-all"
          >
            <option value="">Select availability</option>
            <option value="weekends">Weekends</option>
            <option value="evenings">Evenings</option>
            <option value="school-breaks">School breaks</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
          Goals & Aspirations *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-cta focus:border-transparent transition-all resize-none"
          placeholder="Tell us about your goals, what you hope to learn, and how you'd like to contribute to MAPS INTERNATIONAL WLL's mission..."
        />
      </div>
    </div>
  );

  const renderPressForm = () => (
    <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
            className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-teal focus:border-transparent transition-all"
                        placeholder="Your full name"
                      />
        </div>
        <div>
          <label htmlFor="outlet" className="block text-sm font-medium text-dark mb-2">
            Media Outlet *
          </label>
          <input
            type="text"
            id="outlet"
            name="outlet"
            required
            value={formData.outlet}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-teal focus:border-transparent transition-all"
            placeholder="Your media outlet"
          />
        </div>
                    </div>
                    
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-teal focus:border-transparent transition-all"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-dark mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-teal focus:border-transparent transition-all"
            placeholder="+1 (555) 123-4567"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="articleType" className="block text-sm font-medium text-dark mb-2">
            Article Type *
          </label>
          <select
            id="articleType"
            name="articleType"
            required
            value={formData.articleType}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-teal focus:border-transparent transition-all"
          >
            <option value="">Select article type</option>
            <option value="news">News Article</option>
            <option value="feature">Feature Story</option>
            <option value="interview">Interview</option>
            <option value="press-release">Press Release</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="deadline" className="block text-sm font-medium text-dark mb-2">
            Deadline
          </label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            value={formData.deadline}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-teal focus:border-transparent transition-all"
          />
        </div>
      </div>

      <div>
        <label htmlFor="targetAudience" className="block text-sm font-medium text-dark mb-2">
          Target Audience
        </label>
        <input
          type="text"
          id="targetAudience"
          name="targetAudience"
          value={formData.targetAudience}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-teal focus:border-transparent transition-all"
          placeholder="e.g., General public, Art enthusiasts, Cultural community..."
        />
      </div>

      {/* File Upload Section */}
      <div>
        <label className="block text-sm font-medium text-dark mb-2">
          Press Kit & Previous Articles
        </label>
        <div className="border-2 border-dashed border-teal/30 rounded-xl p-6 text-center hover:border-teal/50 transition-colors">
          <Upload className="w-8 h-8 text-teal mx-auto mb-2" />
          <p className="text-sm text-gray-600 mb-2">
            Upload press kit (PDF) and previous articles (PDF)
          </p>
          <p className="text-xs text-gray-500 mb-4">
            Max 5 files, 10MB each. Supported: PDF
          </p>
          <input
            type="file"
            multiple
            accept=".pdf"
            onChange={handleFileUpload}
            className="hidden"
            id="press-file-upload"
          />
          <label
            htmlFor="press-file-upload"
            className="bg-teal text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-teal/90 transition-colors"
          >
            Choose Files
          </label>
        </div>
        
        {/* File Preview */}
        {uploadedFiles.length > 0 && (
          <div className="mt-4 space-y-2">
            <p className="text-sm font-medium text-dark">Uploaded Files:</p>
            {uploadedFiles.map((file, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded-lg">
                <span className="text-sm text-gray-700">{file.name}</span>
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
          Coverage Goals & Story Angle *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-teal focus:border-transparent transition-all resize-none"
          placeholder="Tell us about your coverage goals, story angle, and what aspects of MAPS INTERNATIONAL WLL you'd like to highlight..."
        />
      </div>
    </div>
  );

  const renderInquiryForm = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-magenta focus:border-transparent transition-all"
            placeholder="Your full name"
          />
        </div>
                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium text-dark mb-2">
                        Organization
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-magenta focus:border-transparent transition-all"
                        placeholder="Your organization"
                      />
                    </div>
                  </div>
                  
      <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-magenta focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-dark mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-magenta focus:border-transparent transition-all"
            placeholder="+1 (555) 123-4567"
          />
        </div>
                  </div>
                  
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="inquiryType" className="block text-sm font-medium text-dark mb-2">
            Inquiry Type *
          </label>
          <select
            id="inquiryType"
            name="inquiryType"
            required
            value={formData.inquiryType}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-magenta focus:border-transparent transition-all"
          >
            <option value="">Select inquiry type</option>
            <option value="general">General Inquiry</option>
            <option value="event">Event Related</option>
            <option value="partnership">Partnership</option>
            <option value="media">Media Inquiry</option>
            <option value="other">Other</option>
          </select>
        </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-dark mb-2">
            Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-magenta focus:border-transparent transition-all"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate (1-2 weeks)</option>
                      <option value="short">Short term (1-3 months)</option>
                      <option value="medium">Medium term (3-6 months)</option>
                      <option value="long">Long term (6+ months)</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-dark mb-2">
          Budget Range
        </label>
        <select
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-magenta focus:border-transparent transition-all"
        >
          <option value="">Select budget range</option>
          <option value="under-1k">Under $1,000</option>
          <option value="1k-5k">$1,000 - $5,000</option>
          <option value="5k-25k">$5,000 - $25,000</option>
          <option value="25k-100k">$25,000 - $100,000</option>
          <option value="100k+">$100,000+</option>
          <option value="discuss">To be discussed</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
          Specific Inquiry Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-magenta focus:border-transparent transition-all resize-none"
          placeholder="Please provide specific details about your inquiry, what you're looking for, and how we can help..."
                    />
                  </div>
    </div>
  );

  // Function to render the appropriate form based on activeForm
  const renderForm = () => {
    switch (activeForm) {
      case 'sponsor':
        return renderSponsorForm();
      case 'partner':
        return renderPartnerForm();
      case 'artist':
        return renderArtistForm();
      case 'youth':
        return renderYouthForm();
      case 'press':
        return renderPressForm();
      case 'inquiry':
        return renderInquiryForm();
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative">
      {/* Particle System Background */}
      <ParticleSystem 
        particleCount={30} 
        colors={['#e91e63', '#00bcd4', '#ff9800', '#4caf50']}
        mouseInteraction={true}
      />
      {/* Hero Section - Clean Title on Image */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div
          className="h-52 md:h-64"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Title Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white" style={{
            textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6)'
          }}>
            Connect
          </h1>
        </div>
      </section>

      {/* Description Section - Below Image */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Join our mission to <span className="text-pink-500 font-semibold">connect cultures</span>, <span className="text-cyan-500 font-semibold">empower youth</span>, and create lasting impact across <span className="text-pink-500 font-semibold">70+ countries</span>.
            </p>
          </div>
        </div>
      </section>


      {/* Dynamic Forms Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-dark text-center mb-12">How Would You Like to Connect?</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
              {ctaButtons.map((button) => {
                const rippleRef = useRipple();
                return (
                  <button
                    key={button.id}
                    ref={rippleRef}
                    onClick={() => setActiveForm(activeForm === button.id ? null : button.id)}
                    className={`group liquid-button ripple bg-white border-2 border-gray-200 text-gray-700 p-6 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex flex-col items-center gap-2 hover:border-${button.color} hover:text-${button.color} ${
                      activeForm === button.id ? `border-${button.color} text-${button.color} bg-${button.color}/5` : ''
                    }`}
                    style={{
                      background: activeForm === button.id 
                        ? `linear-gradient(135deg, rgba(233, 30, 99, 0.05) 0%, rgba(0, 188, 212, 0.05) 100%)`
                        : 'white'
                    }}
                  >
                    <div className={`group-hover:scale-110 transition-transform duration-300 group-hover:text-glow`}>
                      {button.icon}
                    </div>
                    <span className="text-sm md:text-base text-morphing">{button.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Contact Form */}
            {activeForm && (
              <div className="bg-white rounded-2xl shadow-elegant p-8 animate-scale-in">
                <div className="flex items-center gap-3 mb-6">
                  {ctaButtons.find(btn => btn.id === activeForm)?.icon}
                  <h3 className="text-2xl font-semibold text-dark capitalize">
                    {activeForm} Collaboration Form
                  </h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {renderForm()}
                  
                  <div className="flex gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`neu-button text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 pulse-glow disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 ${
                        activeForm === 'sponsor' || activeForm === 'inquiry' ? 'bg-magenta hover:bg-magenta/90' :
                        activeForm === 'partner' || activeForm === 'press' ? 'bg-teal hover:bg-teal/90' :
                        activeForm === 'artist' ? 'bg-accent hover:bg-accent/90' :
                        'bg-cta hover:bg-cta/90'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                      <Send className="w-5 h-5" />
                      Send Message
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveForm(null)}
                      className="neu-button text-gray-700 px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Work Opportunities Section */}
      <section className="py-20 bg-gradient-light">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-dark mb-6">Work with us</h2>
            <p className="text-xl text-gray-600 mb-12">
              Currently, we don't have any open positions, but we're always looking for passionate individuals who share our vision of cultural excellence and social impact.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-2">No Open Positions</h3>
                <p className="text-gray-600 mb-6">
                  We're not currently hiring, but we'd love to hear from talented individuals who are passionate about cultural diplomacy and youth empowerment.
                </p>
                <button 
                  onClick={() => window.open('mailto:careers@mapsinternational.net', '_blank')}
                  className="bg-gradient-primary text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Send Us Your CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dark text-center mb-12">Our Location</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="group cursor-pointer bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-magenta group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-dark group-hover:text-gray-700 transition-colors duration-300">
                        Doha
                      </h3>
                      <p className="text-gray-600 group-hover:text-gray-500 transition-colors duration-300">
                        Katara Cultural Village, Building 12
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                    Doha, Qatar
                  </p>
                </div>
                
                <div className="group cursor-pointer bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-teal group-hover:scale-110 transition-transform duration-300">
                      <Globe className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-dark group-hover:text-gray-700 transition-colors duration-300">
                        Everywhere
                      </h3>
                      <p className="text-gray-600 group-hover:text-gray-500 transition-colors duration-300">
                        We create cultural magic globally
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                    info@mapsinternational.net
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-light rounded-2xl p-8 text-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-4">Global Reach</h3>
                <p className="text-gray-600 leading-relaxed">
                  From our base in Doha, we connect cultures across 70+ countries, 
                  creating meaningful partnerships and cultural exchanges worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Footer */}
      <section className="py-20 relative overflow-hidden">
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
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6" style={{
              textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6)'
            }}>
              Ready to Connect?
            </h2>
            <p className="text-base md:text-lg text-white/90 mb-12 leading-relaxed">
              Join us in creating extraordinary cultural experiences that inspire, engage, and empower communities worldwide.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Get in Touch</h3>
                <p className="text-white/80 text-sm">info@mapsinternational.net</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-white/80 text-sm">+974 5560 3845</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-white/80 text-sm">Katara Cultural Village</p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => window.open('mailto:info@mapsinternational.net', '_blank')}
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Send Email
              </button>
              <button 
                onClick={() => window.open('tel:+97455603845', '_blank')}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Call Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Connect;
