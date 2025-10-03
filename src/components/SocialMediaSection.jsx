import React, { useState, useEffect } from 'react';
import { RefreshCw, Instagram, Facebook, Users, Calendar, Settings, Plus } from 'lucide-react';
import SocialMediaCard from './SocialMediaCard';
import ManualSocialMedia from './ManualSocialMedia';
import socialMediaScraper from '../services/socialMediaScraper';

const SocialMediaSection = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [isManualMode, setIsManualMode] = useState(false);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const socialPosts = await socialMediaScraper.getAllPosts();
      setPosts(socialPosts);
      setLastUpdated(new Date());
    } catch (err) {
      setError('Failed to fetch social media posts');
      console.error('Error fetching posts:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isManualMode) {
      fetchPosts();
    }
  }, [isManualMode]);

  const featuredPosts = posts.filter((_, index) => index < 2);
  const regularPosts = posts.slice(2);

  // If in manual mode, show the manual management component
  if (isManualMode) {
    return <ManualSocialMedia onBack={() => setIsManualMode(false)} />;
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest from Our Social Media
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Stay connected with our latest updates, behind-the-scenes content, and community highlights from our social media channels.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="flex items-center gap-2 text-gray-600">
              <Instagram className="w-5 h-5" />
              <span className="font-semibold">@qiaf_festival</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Facebook className="w-5 h-5" />
              <span className="font-semibold">@irashmiagarwal</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Users className="w-5 h-5" />
              <span className="font-semibold">70+ Countries</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button
              onClick={fetchPosts}
              disabled={loading}
              className="flex items-center gap-2 bg-magenta hover:bg-magenta-dark text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              {loading ? 'Refreshing...' : 'Refresh Posts'}
            </button>
            
            <button
              onClick={() => setIsManualMode(true)}
              className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200"
            >
              <Settings className="w-4 h-4" />
              Manage Posts Manually
            </button>
            
            {lastUpdated && (
              <p className="text-sm text-gray-500 flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Last updated: {lastUpdated.toLocaleTimeString()}
              </p>
            )}
          </div>
        </div>

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8 text-center">
            <p className="text-red-600 font-semibold">{error}</p>
            <button
              onClick={fetchPosts}
              className="mt-2 text-red-600 hover:text-red-700 underline"
            >
              Try again
            </button>
          </div>
        )}

        {/* Loading State */}
        {loading && posts.length === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-6 animate-pulse">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-20"></div>
                    <div className="h-3 bg-gray-200 rounded w-16"></div>
                  </div>
                </div>
                <div className="h-48 bg-gray-200 rounded-xl mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Posts Grid */}
        {!loading && posts.length > 0 && (
          <>
            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Featured Posts
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {featuredPosts.map((post) => (
                    <SocialMediaCard key={post.id} post={post} featured={true} />
                  ))}
                </div>
              </div>
            )}

            {/* Regular Posts */}
            {regularPosts.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Recent Updates
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {regularPosts.map((post) => (
                    <SocialMediaCard key={post.id} post={post} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* Empty State */}
        {!loading && posts.length === 0 && !error && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No posts with images found</h3>
            <p className="text-gray-600 mb-6">We're working on getting real images from your social media accounts. This may take a few moments.</p>
            <button
              onClick={fetchPosts}
              className="bg-magenta hover:bg-magenta-dark text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-magenta to-pink-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Follow Us for More Updates!</h3>
            <p className="text-lg mb-6 opacity-90">
              Stay connected with our latest news, events, and community highlights.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.instagram.com/qiaf_festival"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-xl font-semibold transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
                Follow QIAF
              </a>
              <a
                href="https://www.instagram.com/rashmiagarwal.qa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-xl font-semibold transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
                Follow Rashmi
              </a>
              <a
                href="https://www.facebook.com/irashmiagarwal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-xl font-semibold transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
                Like Facebook Page
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
