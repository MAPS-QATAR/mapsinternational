import React, { useState, useEffect } from 'react';
import { Edit, Save, X, Image as ImageIcon, Plus } from 'lucide-react';

interface CardData {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  color: string;
  bgColor: string;
  stats: string[];
  image: string;
}

const CallToActionAdmin = ({ onBack }: { onBack?: () => void }) => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [editingCard, setEditingCard] = useState<number | null>(null);
  const [formData, setFormData] = useState<CardData>({
    id: 0,
    title: '',
    description: '',
    buttonText: '',
    buttonLink: '',
    color: 'from-magenta to-pink-500',
    bgColor: 'from-pink-50 to-pink-100',
    stats: [],
    image: ''
  });

  // Default cards data
  const defaultCards: CardData[] = [
    {
      id: 1,
      title: "Join QIAF 2025",
      description: "Be part of the world's most celebrated art festival. Connect with 500+ artists from 80+ countries.",
      buttonText: "Apply as Artist",
      buttonLink: "/connect",
      color: "from-magenta to-pink-500",
      bgColor: "from-pink-50 to-pink-100",
      stats: ["500+ Artists", "80+ Countries", "6 Days"],
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "Become a Partner",
      description: "Partner with us to create meaningful cultural impact and reach global audiences.",
      buttonText: "Partner With Us",
      buttonLink: "/connect",
      color: "from-teal to-cyan-500",
      bgColor: "from-teal-50 to-cyan-100",
      stats: ["Government", "NGOs", "Cultural"],
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "Join Youth Programs",
      description: "Empower the next generation through space science, innovation, and cultural exchange.",
      buttonText: "Get Involved",
      buttonLink: "/connect",
      color: "from-magenta to-pink-500",
      bgColor: "from-pink-50 to-pink-100",
      stats: ["3000+ Youth", "Innovation", "Leadership"],
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 4,
      title: "Attend Events",
      description: "Discover upcoming cultural events, workshops, and exhibitions in Qatar and beyond.",
      buttonText: "View Events",
      buttonLink: "/work",
      color: "from-teal to-cyan-500",
      bgColor: "from-teal-50 to-cyan-100",
      stats: ["15+ Components", "Year Round", "Global"],
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop&crop=center"
    }
  ];

  // Load cards from localStorage on component mount
  useEffect(() => {
    const savedCards = localStorage.getItem('ctaCards');
    if (savedCards) {
      setCards(JSON.parse(savedCards));
    } else {
      setCards(defaultCards);
    }
  }, []);

  // Save cards to localStorage whenever cards change
  useEffect(() => {
    localStorage.setItem('ctaCards', JSON.stringify(cards));
  }, [cards]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleStatsChange = (index: number, value: string) => {
    const newStats = [...formData.stats];
    newStats[index] = value;
    setFormData(prev => ({
      ...prev,
      stats: newStats
    }));
  };

  const addStat = () => {
    setFormData(prev => ({
      ...prev,
      stats: [...prev.stats, '']
    }));
  };

  const removeStat = (index: number) => {
    setFormData(prev => ({
      ...prev,
      stats: prev.stats.filter((_, i) => i !== index)
    }));
  };

  const handleEdit = (card: CardData) => {
    setFormData(card);
    setEditingCard(card.id);
  };

  const handleSave = () => {
    if (editingCard) {
      setCards(prev => prev.map(card => 
        card.id === editingCard ? formData : card
      ));
    }
    setEditingCard(null);
    setFormData({
      id: 0,
      title: '',
      description: '',
      buttonText: '',
      buttonLink: '',
      color: 'from-magenta to-pink-500',
      bgColor: 'from-pink-50 to-pink-100',
      stats: [],
      image: ''
    });
  };

  const handleCancel = () => {
    setEditingCard(null);
    setFormData({
      id: 0,
      title: '',
      description: '',
      buttonText: '',
      buttonLink: '',
      color: 'from-magenta to-pink-500',
      bgColor: 'from-pink-50 to-pink-100',
      stats: [],
      image: ''
    });
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          {onBack && (
            <div className="flex justify-start mb-6">
              <button
                onClick={onBack}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                ← Back to Website
              </button>
            </div>
          )}
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Manage Community Cards
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Edit the images, content, and details for your "Join Our Community" cards.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {cards.map((card) => (
            <div key={card.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group">
              {/* Image Preview */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{card.description}</p>
                
                {/* Stats */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {card.stats.slice(0, 2).map((stat, index) => (
                    <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                      {stat}
                    </span>
                  ))}
                </div>
                
                {/* Edit Button */}
                <button
                  onClick={() => handleEdit(card)}
                  className="w-full bg-magenta hover:bg-magenta-dark text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Edit className="w-4 h-4" />
                  Edit Card
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Edit Form */}
        {editingCard && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Edit Card</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Image URL */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image URL
                </label>
                <div className="flex gap-4">
                  <input
                    type="url"
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    placeholder="https://example.com/image.jpg"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-magenta focus:border-transparent"
                  />
                  {formData.image && (
                    <div className="w-20 h-20 rounded-lg overflow-hidden">
                      <img 
                        src={formData.image} 
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-magenta focus:border-transparent"
                />
              </div>

              {/* Button Text */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Button Text
                </label>
                <input
                  type="text"
                  name="buttonText"
                  value={formData.buttonText}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-magenta focus:border-transparent"
                />
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-magenta focus:border-transparent"
                />
              </div>

              {/* Stats */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Stats
                </label>
                <div className="space-y-2">
                  {formData.stats.map((stat, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={stat}
                        onChange={(e) => handleStatsChange(index, e.target.value)}
                        placeholder={`Stat ${index + 1}`}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-magenta focus:border-transparent"
                      />
                      <button
                        type="button"
                        onClick={() => removeStat(index)}
                        className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addStat}
                    className="flex items-center gap-2 text-magenta hover:text-magenta-dark transition-colors duration-200"
                  >
                    <Plus className="w-4 h-4" />
                    Add Stat
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={handleSave}
                className="bg-magenta hover:bg-magenta-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                Save Changes
              </button>
              
              <button
                onClick={handleCancel}
                className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2"
              >
                <X className="w-4 h-4" />
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CallToActionAdmin;
