import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, Star, Award, Users, Heart, FileText, MessageCircle, Globe, Sparkles, X, Upload, Instagram, Facebook } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import backgroundImage from "@/assets/background.jpg";
import Footer from "@/components/Footer";
import { LoadingButton } from "@/components/ui/loading-button";
import { RippleButton } from "@/components/ui/ripple-button";

// Web3Forms Configuration
const WEB3FORMS_ACCESS_KEY = 'aacf6a5a-85d1-4445-86d3-4c49e5fae773';

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

  const connectionOptions = [
    {
      id: "sponsor",
      label: "Sponsor",
      title: "Fund Cultural Impact",
      description: "Support world-class cultural events that connect continents",
      icon: <Star className="w-8 h-8" />,
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      id: "partner",
      label: "Partner",
      title: "Collaborate with Us",
      description: "Build long-term partnerships for cultural exchange",
      icon: <Award className="w-8 h-8" />,
      gradient: "from-[#00BCD4] to-cyan-600"
    },
    {
      id: "artist",
      label: "Artist",
      title: "Join Our Network",
      description: "Showcase your work to audiences across 70+ countries",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: "youth",
      label: "Youth",
      title: "Get Empowered",
      description: "Access programs in arts, STEM, and cultural exchange",
      icon: <Heart className="w-8 h-8" />,
      gradient: "from-[#E91E63] to-red-600"
    },
    {
      id: "press",
      label: "Press",
      title: "Cover Our Story",
      description: "Get exclusive access to our cultural initiatives",
      icon: <FileText className="w-8 h-8" />,
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      id: "inquiry",
      label: "General",
      title: "Ask Us Anything",
      description: "Have a question? We're here to help",
      icon: <MessageCircle className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-600"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create FormData for Web3Forms
      const formDataToSend = new FormData();
      
      // Add Web3Forms access key
      formDataToSend.append('access_key', WEB3FORMS_ACCESS_KEY);
      
      // Add form type as subject
      const formType = activeForm?.charAt(0).toUpperCase() + activeForm?.slice(1) || 'General Inquiry';
      formDataToSend.append('subject', `New ${formType} Form - MAPS International`);
      
      // Add all form fields
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('form_type', formType);
      
      // Add optional fields if they exist
      if (formData.phone) formDataToSend.append('phone', formData.phone);
      if (formData.organization) formDataToSend.append('organization', formData.organization);
      if (formData.website) formDataToSend.append('website', formData.website);
      if (formData.message) formDataToSend.append('message', formData.message);
      if (formData.timeline) formDataToSend.append('timeline', formData.timeline);
      if (formData.budget) formDataToSend.append('budget', formData.budget);
      if (formData.type) formDataToSend.append('type', formData.type);
      if (formData.experience) formDataToSend.append('experience', formData.experience);
      if (formData.age) formDataToSend.append('age', formData.age);
      if (formData.school) formDataToSend.append('school', formData.school);
      if (formData.interest) formDataToSend.append('interest', formData.interest);
      if (formData.availability) formDataToSend.append('availability', formData.availability);
      if (formData.artStyle) formDataToSend.append('art_style', formData.artStyle);
      if (formData.medium) formDataToSend.append('medium', formData.medium);
      if (formData.outlet) formDataToSend.append('outlet', formData.outlet);
      if (formData.articleType) formDataToSend.append('article_type', formData.articleType);
      if (formData.deadline) formDataToSend.append('deadline', formData.deadline);
      if (formData.targetAudience) formDataToSend.append('target_audience', formData.targetAudience);
      if (formData.inquiryType) formDataToSend.append('inquiry_type', formData.inquiryType);
      
      // Add uploaded files
      uploadedFiles.forEach((file, index) => {
        formDataToSend.append(`attachment_${index + 1}`, file);
      });
      
      // Send to Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message Sent! ✅",
          description: `Thank you! We'll get back to you at ${formData.email} within 24 hours.`,
        });
      resetForm();
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Please try again or email us directly at info@mapsinternational.net",
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
                         file.type === 'image/jpeg';
      const isValidSize = file.size <= 10 * 1024 * 1024;
      return isValidType && isValidSize;
    });
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

  // Render different form fields based on active form type
  const renderFormFields = () => {
    // Common name and email fields for all forms
    const nameEmailFields = (
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E91E63] focus:border-transparent transition-all"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E91E63] focus:border-transparent transition-all"
            placeholder="your.email@example.com"
          />
        </div>
      </div>
    );

    // SPONSOR FORM - Funding Cultural Impact
    if (activeForm === 'sponsor') {
      return (
        <>
          {nameEmailFields}
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
              <label htmlFor="organization" className="block text-sm font-semibold text-gray-700 mb-2">
                Organization/Company Name *
          </label>
          <input
                type="text"
                id="organization"
                name="organization"
            required
                value={formData.organization}
            onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E91E63] focus:border-transparent transition-all"
                placeholder="Your organization"
          />
        </div>
        <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E91E63] focus:border-transparent transition-all"
                placeholder="+974 XXXX XXXX"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
              <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                Funding Amount Range *
          </label>
          <select
            id="budget"
            name="budget"
            required
            value={formData.budget}
            onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E91E63] focus:border-transparent transition-all"
              >
                <option value="">Select range</option>
                <option value="under-50k">Under $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="100k-250k">$100,000 - $250,000</option>
                <option value="250k-500k">$250,000 - $500,000</option>
                <option value="500k-plus">$500,000+</option>
                <option value="discuss">Prefer to discuss</option>
          </select>
            </div>
        <div>
              <label htmlFor="type" className="block text-sm font-semibold text-gray-700 mb-2">
            Sponsorship Type *
          </label>
          <select
            id="type"
            name="type"
            required
            value={formData.type}
            onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E91E63] focus:border-transparent transition-all"
          >
                <option value="">Select type</option>
            <option value="event">Event Sponsorship</option>
            <option value="program">Program Sponsorship</option>
                <option value="general">General Support</option>
                <option value="naming">Naming Rights</option>
          </select>
          </div>
        </div>
        
      <div>
            <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-2">
              Preferred Timeline *
        </label>
            <input
              type="text"
          id="timeline"
          name="timeline"
              required
          value={formData.timeline}
          onChange={handleInputChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E91E63] focus:border-transparent transition-all"
              placeholder="e.g., Q1 2026, QIAF 2025, 12-month commitment"
            />
        </div>
      
      <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
              Additional Information *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleInputChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E91E63] focus:border-transparent transition-all resize-none"
              placeholder="Tell us about your goals, preferred benefits, or any specific requirements..."
        />
      </div>
        </>
      );
    }

    // PARTNER FORM - Collaborate with Us
    if (activeForm === 'partner') {
      return (
        <>
          {nameEmailFields}
          
      <div className="grid md:grid-cols-2 gap-6">
        <div>
              <label htmlFor="organization" className="block text-sm font-semibold text-gray-700 mb-2">
                Organization/Institution *
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            required
            value={formData.organization}
            onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E91E63] focus:border-transparent transition-all"
            placeholder="Your organization"
          />
        </div>
        <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E91E63] focus:border-transparent transition-all"
                placeholder="+974 XXXX XXXX"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
              <label htmlFor="type" className="block text-sm font-semibold text-gray-700 mb-2">
            Partnership Type *
          </label>
          <select
            id="type"
            name="type"
            required
            value={formData.type}
            onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E91E63] focus:border-transparent transition-all"
              >
                <option value="">Select type</option>
                <option value="government">Government Body</option>
                <option value="ngo">NGO/Non-Profit</option>
                <option value="corporate">Corporate Partnership</option>
                <option value="cultural">Cultural Institution</option>
                <option value="educational">Educational Institution</option>
          </select>
                    </div>
        <div>
              <label htmlFor="website" className="block text-sm font-semibold text-gray-700 mb-2">
                Website
          </label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
            onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E91E63] focus:border-transparent transition-all"
                placeholder="https://yourwebsite.com"
        />
      </div>
    </div>

        <div>
            <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-2">
              Project Timeline *
          </label>
          <input
            type="text"
              id="timeline"
              name="timeline"
            required
              value={formData.timeline}
            onChange={handleInputChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E91E63] focus:border-transparent transition-all"
              placeholder="e.g., 6 months, 2025-2026, Ongoing"
          />
        </div>

        <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
              Partnership Goals & Scope *
          </label>
            <textarea
              id="message"
              name="message"
            required
              rows={5}
              value={formData.message}
            onChange={handleInputChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E91E63] focus:border-transparent transition-all resize-none"
              placeholder="Describe your partnership vision, objectives, and how we can collaborate..."
          />
        </div>
        </>
      );
    }

    // ARTIST FORM - Join Our Network
    if (activeForm === 'artist') {
      return (
        <>
          {nameEmailFields}
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E91E63] focus:border-transparent transition-all"
                placeholder="+974 XXXX XXXX"
          />
        </div>
        <div>
              <label htmlFor="website" className="block text-sm font-semibold text-gray-700 mb-2">
                Portfolio/Instagram *
          </label>
          <input
            type="url"
            id="website"
            name="website"
                required
            value={formData.website}
            onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E91E63] focus:border-transparent transition-all"
                placeholder="https://instagram.com/yourhandle or portfolio link"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
              <label htmlFor="medium" className="block text-sm font-semibold text-gray-700 mb-2">
                Primary Art Medium *
          </label>
          <select
                id="medium"
                name="medium"
            required
                value={formData.medium}
            onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E91E63] focus:border-transparent transition-all"
              >
                <option value="">Select medium</option>
            <option value="painting">Painting</option>
                <option value="sculpture">Sculpture</option>
                <option value="photography">Photography</option>
                <option value="digital">Digital Art</option>
                <option value="mixed">Mixed Media</option>
                <option value="installation">Installation</option>
                <option value="performance">Performance Art</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
              <label htmlFor="artStyle" className="block text-sm font-semibold text-gray-700 mb-2">
                Art Style/Genre
          </label>
              <input
                type="text"
                id="artStyle"
                name="artStyle"
                value={formData.artStyle}
            onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E91E63] focus:border-transparent transition-all"
                placeholder="e.g., Contemporary, Abstract, Realism"
              />
        </div>
      </div>

      <div>
            <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-2">
              Previous Exhibitions/Experience
        </label>
        <input
          type="text"
              id="experience"
              name="experience"
              value={formData.experience}
          onChange={handleInputChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E91E63] focus:border-transparent transition-all"
              placeholder="List major exhibitions, galleries, or projects"
        />
      </div>

      <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Portfolio Upload (Optional)
        </label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-[#E91E63] transition-all">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
          <input
            type="file"
            multiple
                accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileUpload}
            className="hidden"
                id="portfolio-upload"
              />
              <label htmlFor="portfolio-upload" className="cursor-pointer">
                <span className="text-[#E91E63] font-semibold">Click to upload</span>
                <span className="text-gray-600"> or drag and drop</span>
                <p className="text-xs text-gray-500 mt-1">PDF, JPG, PNG up to 10MB</p>
          </label>
        {uploadedFiles.length > 0 && (
                <div className="mt-3 space-y-2">
            {uploadedFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg">
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
      </div>
      
      <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
              About Your Work *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleInputChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E91E63] focus:border-transparent transition-all resize-none"
              placeholder="Tell us about your artistic practice, vision, and why you'd like to join MAPS..."
        />
      </div>
        </>
      );
    }

    // YOUTH FORM - Get Empowered
    if (activeForm === 'youth') {
      return (
        <>
          {nameEmailFields}
          
      <div className="grid md:grid-cols-2 gap-6">
        <div>
              <label htmlFor="age" className="block text-sm font-semibold text-gray-700 mb-2">
            Age *
          </label>
          <input
            type="number"
            id="age"
            name="age"
            required
                min="10"
            max="30"
            value={formData.age}
            onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E91E63] focus:border-transparent transition-all"
            placeholder="Your age"
          />
        </div>
        <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
          </label>
          <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
            onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E91E63] focus:border-transparent transition-all"
                placeholder="+974 XXXX XXXX"
          />
        </div>
          </div>

        <div>
            <label htmlFor="school" className="block text-sm font-semibold text-gray-700 mb-2">
              School/University *
          </label>
          <input
            type="text"
            id="school"
            name="school"
              required
            value={formData.school}
            onChange={handleInputChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E91E63] focus:border-transparent transition-all"
            placeholder="Your school or university"
          />
      </div>

        <div>
            <label htmlFor="interest" className="block text-sm font-semibold text-gray-700 mb-2">
              Areas of Interest *
          </label>
          <select
            id="interest"
            name="interest"
            required
            value={formData.interest}
            onChange={handleInputChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E91E63] focus:border-transparent transition-all"
            >
              <option value="">Select your interests</option>
              <option value="arts">Visual Arts & Culture</option>
              <option value="stem">STEM & Space Science</option>
              <option value="both">Both Arts & STEM</option>
            <option value="leadership">Leadership & Development</option>
              <option value="cultural">Cultural Exchange</option>
          </select>
        </div>

        <div>
            <label htmlFor="availability" className="block text-sm font-semibold text-gray-700 mb-2">
              How did you hear about us?
          </label>
            <input
              type="text"
            id="availability"
            name="availability"
            value={formData.availability}
            onChange={handleInputChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E91E63] focus:border-transparent transition-all"
              placeholder="e.g., School, Friend, Social Media"
            />
      </div>
      
      <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
              Why do you want to join? *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleInputChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E91E63] focus:border-transparent transition-all resize-none"
              placeholder="Tell us about your goals and what you hope to gain from MAPS programs..."
        />
      </div>
        </>
      );
    }

    // PRESS FORM - Cover Our Story
    if (activeForm === 'press') {
      return (
        <>
          {nameEmailFields}
          
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
              <label htmlFor="outlet" className="block text-sm font-semibold text-gray-700 mb-2">
            Media Outlet *
          </label>
          <input
            type="text"
            id="outlet"
            name="outlet"
            required
            value={formData.outlet}
            onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E91E63] focus:border-transparent transition-all"
                placeholder="Publication/Channel name"
          />
        </div>
        <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E91E63] focus:border-transparent transition-all"
                placeholder="+974 XXXX XXXX"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
              <label htmlFor="articleType" className="block text-sm font-semibold text-gray-700 mb-2">
                Coverage Type *
          </label>
          <select
            id="articleType"
            name="articleType"
            required
            value={formData.articleType}
            onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E91E63] focus:border-transparent transition-all"
          >
                <option value="">Select type</option>
                <option value="feature">Feature Article</option>
            <option value="interview">Interview</option>
                <option value="event">Event Coverage</option>
                <option value="news">News Story</option>
                <option value="documentary">Documentary/Video</option>
          </select>
        </div>
        <div>
              <label htmlFor="deadline" className="block text-sm font-semibold text-gray-700 mb-2">
            Deadline
          </label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            value={formData.deadline}
            onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E91E63] focus:border-transparent transition-all"
          />
        </div>
      </div>

      <div>
            <label htmlFor="targetAudience" className="block text-sm font-semibold text-gray-700 mb-2">
              Target Audience/Circulation *
        </label>
        <input
          type="text"
          id="targetAudience"
          name="targetAudience"
              required
          value={formData.targetAudience}
          onChange={handleInputChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E91E63] focus:border-transparent transition-all"
              placeholder="e.g., National Qatar audience, International arts community"
        />
      </div>

      <div>
            <label htmlFor="website" className="block text-sm font-semibold text-gray-700 mb-2">
              Previous Work Sample (Link)
        </label>
          <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E91E63] focus:border-transparent transition-all"
              placeholder="Link to your previous article/video"
            />
      </div>
      
      <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
              Coverage Details *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleInputChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E91E63] focus:border-transparent transition-all resize-none"
              placeholder="Tell us about your story angle, what you'd like to cover, and any specific requirements..."
        />
      </div>
        </>
      );
    }

    // GENERAL INQUIRY FORM (Default)
    return (
      <>
        {nameEmailFields}
                  
      <div className="grid md:grid-cols-2 gap-6">
                  <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E91E63] focus:border-transparent transition-all"
              placeholder="+974 XXXX XXXX"
          />
        </div>
        <div>
            <label htmlFor="inquiryType" className="block text-sm font-semibold text-gray-700 mb-2">
              Inquiry Type
          </label>
          <select
            id="inquiryType"
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleInputChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E91E63] focus:border-transparent transition-all"
            >
              <option value="">Select type</option>
              <option value="general">General Question</option>
              <option value="event">Event Information</option>
              <option value="volunteer">Volunteering</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E91E63] focus:border-transparent transition-all resize-none"
            placeholder="Tell us about your inquiry..."
                    />
                  </div>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* ============================================ */}
      {/* HERO SECTION - Bright & Inviting */}
      {/* ============================================ */}
      <section className="relative py-32 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
        {/* Floating Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-20 w-96 h-96 bg-[#E91E63]/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-20 w-96 h-96 bg-[#00BCD4]/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-[#E91E63] font-semibold text-lg mb-4 tracking-wide">GET IN TOUCH</p>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Let's Create Something<br />
              <span className="bg-gradient-to-r from-[#E91E63] to-[#00BCD4] bg-clip-text text-transparent">
                Extraordinary Together
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Whether you're an artist seeking a platform, a sponsor looking to make impact,
              or a young innovator ready to grow — we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CONNECTION OPTIONS - Beautiful Cards */}
      {/* ============================================ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How Would You Like to Connect?
            </h2>
            <p className="text-xl text-gray-600">
              Choose the option that best describes you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto mb-12 sm:mb-16 px-4 sm:px-0">
            {connectionOptions.map((option, index) => (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setActiveForm(option.id)}
                className={`group cursor-pointer relative overflow-hidden rounded-3xl bg-gradient-to-br ${option.gradient} p-8 text-white hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl ${
                  activeForm === option.id ? 'ring-4 ring-white scale-105' : ''
                }`}
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                    {option.icon}
                    </div>
                  <h3 className="text-2xl font-bold mb-2">{option.title}</h3>
                  <p className="text-white/90 leading-relaxed mb-4">{option.description}</p>
                  <div className="flex items-center gap-2 text-white/90 font-semibold">
                    <span>Select</span>
                    <Sparkles className="w-5 h-5" />
          </div>
      </div>
                {activeForm === option.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-4 right-4"
                  >
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
        </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
            </div>

          {/* FORM - Conversational */}
          <AnimatePresence mode="wait">
            {activeForm && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                className="max-w-3xl mx-auto px-4"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12">
                  <div className="flex items-center justify-between mb-8">
                  <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2 capitalize">
                        {connectionOptions.find(opt => opt.id === activeForm)?.title}
                  </h3>
                      <p className="text-gray-600">
                        Fill out the form below and we'll be in touch within 24 hours
            </p>
          </div>
                  <button
                      onClick={() => setActiveForm(null)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <X className="w-6 h-6" />
                  </button>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    {renderFormFields()}
                  
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6">
                    <LoadingButton
                      type="submit"
                      isLoading={isSubmitting}
                        className="flex-1 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#E91E63] to-[#00BCD4] text-white text-base sm:text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-300"
                    >
                      <span className="flex items-center justify-center gap-2">
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      Send Message
                      </span>
                    </LoadingButton>
                    <RippleButton
                      onClick={() => setActiveForm(null)}
                        className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 text-gray-700 text-base sm:text-lg font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
                    >
                      Cancel
                    </RippleButton>
                  </div>
                </form>
              </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ============================================ */}
      {/* CONTACT INFO - Visual & Interactive */}
      {/* ============================================ */}
      <section className="py-32 bg-gradient-to-br from-amber-50 via-orange-50/30 to-rose-50 relative overflow-hidden">
        {/* Artistic Elements */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          {/* Hand-drawn circles */}
          <svg className="absolute top-20 left-20 w-32 h-32 text-[#E91E63]" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" 
              strokeDasharray="5,8" style={{ strokeLinecap: 'round' }} />
          </svg>
          
          {/* Wavy decoration */}
          <svg className="absolute bottom-20 right-20 w-48 h-48 text-[#FF9800]" viewBox="0 0 150 150">
            <path d="M10 75 Q 40 70, 70 75 T 130 75" fill="none" stroke="currentColor" strokeWidth="2" 
              strokeDasharray="4,6" style={{ strokeLinecap: 'round' }} />
          </svg>
          
          {/* Scattered dots */}
          <svg className="absolute top-1/2 left-1/3 w-64 h-64 text-gray-700" viewBox="0 0 200 200">
            <circle cx="30" cy="40" r="2" fill="currentColor" />
            <circle cx="80" cy="20" r="3" fill="currentColor" />
            <circle cx="150" cy="60" r="2" fill="currentColor" />
            <circle cx="50" cy="120" r="2.5" fill="currentColor" />
          </svg>
              </div>
              
        {/* Floating gradient orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-40 w-96 h-96 bg-[#E91E63] rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-20 left-40 w-96 h-96 bg-[#FF9800] rounded-full blur-3xl"
          />
                </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block">
              Or Reach Us Directly
              {/* Hand-drawn underline */}
              <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 500 10" preserveAspectRatio="none">
                <path d="M0 5 Q 125 8, 250 5 T 500 5" fill="none" stroke="#E91E63" strokeWidth="2.5" 
                  style={{ strokeLinecap: 'round' }} />
              </svg>
            </h2>
            <p className="text-xl text-gray-700">
              We're always happy to hear from you
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-white/80 backdrop-blur-xl rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/90 transition-all duration-300 shadow-lg border border-gray-200/50">
                <Mail className="w-10 h-10 text-[#E91E63]" />
                </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <a
                href="mailto:info@mapsinternational.net"
                className="text-gray-700 hover:text-gray-900 transition-colors text-lg font-semibold"
              >
                info@mapsinternational.net
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-white/80 backdrop-blur-xl rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/90 transition-all duration-300 shadow-lg border border-gray-200/50">
                <Phone className="w-10 h-10 text-[#FF9800]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <a
                href="tel:+97455603845"
                className="text-gray-700 hover:text-gray-900 transition-colors text-lg font-semibold"
              >
                +974 5560 3845
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-white/80 backdrop-blur-xl rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/90 transition-all duration-300 shadow-lg border border-gray-200/50">
                <MapPin className="w-10 h-10 text-[#E91E63]" />
                </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-700 text-lg font-semibold">
                Katara Cultural Village<br />
                    Doha, Qatar
                  </p>
            </motion.div>
              </div>
              
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-xl rounded-full px-8 py-4 shadow-lg border border-gray-200/50">
              <Globe className="w-6 h-6 text-[#E91E63]" />
              <span className="text-lg font-bold text-gray-900">Connecting 70+ Countries Worldwide</span>
                </div>
          </motion.div>

          {/* Social Media CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-gray-700 text-lg font-semibold mb-6">Follow our journey</p>
            <div className="flex justify-center gap-4">
              <motion.a
                href="https://www.instagram.com/mapsinternational.qa"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, rotate: [0, -5, 5, -5, 0] }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#E4405F] to-[#F09433] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </motion.a>
              <motion.a
                href="https://www.facebook.com/themapsinternational"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, rotate: [0, -5, 5, -5, 0] }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#1877F2] to-[#4267B2] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
                <span>Facebook</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* ============================================ */}
      {/* FOOTER */}
      {/* ============================================ */}
      <Footer />
    </div>
  );
};

export default Connect;
