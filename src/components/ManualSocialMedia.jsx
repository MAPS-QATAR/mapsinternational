import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Save, X, ArrowLeft } from 'lucide-react';
import SocialMediaCard from './SocialMediaCard';

const ManualSocialMedia = ({ onBack }) => {
  const [posts, setPosts] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    platform: 'instagram',
    content: '',
    image: '',
    url: '',
    likes: 0,
    comments: 0,
    shares: 0
  });

  // Load posts from localStorage on component mount
  useEffect(() => {
    const savedPosts = localStorage.getItem('manualSocialPosts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  // Save posts to localStorage whenever posts change
  useEffect(() => {
    localStorage.setItem('manualSocialPosts', JSON.stringify(posts));
  }, [posts]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'likes' || name === 'comments' || name === 'shares' 
        ? parseInt(value) || 0 
        : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingId) {
      // Update existing post
      setPosts(prev => prev.map(post => 
        post.id === editingId 
          ? { ...post, ...formData, date: new Date().toISOString() }
          : post
      ));
      setEditingId(null);
    } else {
      // Add new post
      const newPost = {
        id: `manual_${Date.now()}`,
        platform: formData.platform,
        content: formData.content,
        image: formData.image,
        url: formData.url,
        date: new Date().toISOString(),
        engagement: {
          likes: formData.likes,
          comments: formData.comments,
          shares: formData.shares
        }
      };
      setPosts(prev => [newPost, ...prev]);
    }
    
    // Reset form
    setFormData({
      platform: 'instagram',
      content: '',
      image: '',
      url: '',
      likes: 0,
      comments: 0,
      shares: 0
    });
    setIsAdding(false);
  };

  const handleEdit = (post) => {
    setFormData({
      platform: post.platform,
      content: post.content,
      image: post.image,
      url: post.url,
      likes: post.engagement.likes,
      comments: post.engagement.comments,
      shares: post.engagement.shares
    });
    setEditingId(post.id);
    setIsAdding(true);
  };

  const handleDelete = (id) => {
    setPosts(prev => prev.filter(post => post.id !== id));
  };

  const handleCancel = () => {
    setFormData({
      platform: 'instagram',
      content: '',
      image: '',
      url: '',
      likes: 0,
      comments: 0,
      shares: 0
    });
    setIsAdding(false);
    setEditingId(null);
  };

  const featuredPosts = posts.filter((_, index) => index < 2);
  const regularPosts = posts.slice(2);

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
                <ArrowLeft className="w-5 h-5" />
                Back to Auto Mode
              </button>
            </div>
          )}
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Social Media Management
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Manage your social media posts manually. Add, edit, or remove posts to showcase your latest updates.
          </p>
          
          <button
            onClick={() => setIsAdding(true)}
            className="bg-magenta hover:bg-magenta-dark text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-200 flex items-center gap-2 mx-auto"
          >
            <Plus className="w-5 h-5" />
            Add New Post
          </button>
        </div>

        {/* Add/Edit Form */}
        {isAdding && (
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {editingId ? 'Edit Post' : 'Add New Post'}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Platform
                  </label>
                  <select
                    name="platform"
                    value={formData.platform}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-magenta focus:border-transparent"
                  >
                    <option value="instagram">Instagram</option>
                    <option value="facebook">Facebook</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Post URL
                  </label>
                  <input
                    type="url"
                    name="url"
                    value={formData.url}
                    onChange={handleInputChange}
                    placeholder="https://instagram.com/p/..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-magenta focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image URL
                </label>
                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  placeholder="https://example.com/image.jpg"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-magenta focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Post Content
                </label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Enter your post content..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-magenta focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Likes
                  </label>
                  <input
                    type="number"
                    name="likes"
                    value={formData.likes}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-magenta focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Comments
                  </label>
                  <input
                    type="number"
                    name="comments"
                    value={formData.comments}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-magenta focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Shares
                  </label>
                  <input
                    type="number"
                    name="shares"
                    value={formData.shares}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-magenta focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="bg-magenta hover:bg-magenta-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  {editingId ? 'Update Post' : 'Add Post'}
                </button>
                
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2"
                >
                  <X className="w-4 h-4" />
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Posts Display */}
        {posts.length > 0 ? (
          <>
            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Featured Posts
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {featuredPosts.map((post) => (
                    <div key={post.id} className="relative group">
                      <SocialMediaCard post={post} featured={true} />
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(post)}
                            className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors duration-200"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(post.id)}
                            className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition-colors duration-200"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Regular Posts */}
            {regularPosts.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Recent Posts
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {regularPosts.map((post) => (
                    <div key={post.id} className="relative group">
                      <SocialMediaCard post={post} />
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(post)}
                            className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors duration-200"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(post.id)}
                            className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition-colors duration-200"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Plus className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No posts yet</h3>
            <p className="text-gray-600 mb-6">Add your first social media post to get started.</p>
            <button
              onClick={() => setIsAdding(true)}
              className="bg-magenta hover:bg-magenta-dark text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200"
            >
              Add Your First Post
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManualSocialMedia;
