import { useState } from 'react';
import { motion } from 'framer-motion';

interface ProgressiveImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderColor?: string;
}

/**
 * ProgressiveImage - Smooth image loading with fade-in effect
 * Features:
 * - Colored placeholder while loading
 * - Smooth opacity transition
 * - Prevents layout shift
 * - Shimmer animation during load
 */
export const ProgressiveImage = ({ 
  src, 
  alt, 
  className = '',
  placeholderColor = 'bg-gray-200'
}: ProgressiveImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Shimmer placeholder */}
      {!isLoaded && !hasError && (
        <div 
          className={`absolute inset-0 ${placeholderColor}`}
          style={{
            background: 'linear-gradient(90deg, #e0e0e0 0%, #f0f0f0 50%, #e0e0e0 100%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 2s infinite'
          }}
        />
      )}
      
      {/* Error state */}
      {hasError && (
        <div className={`absolute inset-0 ${placeholderColor} flex items-center justify-center`}>
          <span className="text-gray-400 text-sm">Failed to load</span>
        </div>
      )}
      
      {/* Actual image */}
      <motion.img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`w-full h-full object-cover ${className}`}
      />
    </div>
  );
};

