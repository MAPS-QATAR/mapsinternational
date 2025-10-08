/**
 * SkeletonCard - Loading placeholder with shimmer effect
 * Features:
 * - Animated shimmer gradient
 * - Matches actual card structure
 * - Pulse animation for text blocks
 * - Responsive sizing
 */
export const SkeletonCard = () => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
      {/* Image skeleton */}
      <div 
        className="aspect-[4/3] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"
        style={{
          backgroundSize: '200% 100%',
          animation: 'shimmer 2s infinite'
        }}
      />
      
      {/* Text skeleton */}
      <div className="p-6 space-y-3">
        <div className="h-6 bg-gray-200 rounded-lg w-3/4 animate-pulse" />
        <div className="h-4 bg-gray-200 rounded-lg w-full animate-pulse" />
        <div className="h-4 bg-gray-200 rounded-lg w-5/6 animate-pulse" />
      </div>
    </div>
  );
};

/**
 * SkeletonBento - Loading placeholder for bento grid cards
 */
export const SkeletonBento = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl ${className}`}>
      {/* Image skeleton */}
      <div 
        className="w-full h-48 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"
        style={{
          backgroundSize: '200% 100%',
          animation: 'shimmer 2s infinite'
        }}
      />
      
      {/* Text skeleton */}
      <div className="p-4">
        <div className="h-5 bg-gray-200 rounded-lg w-2/3 animate-pulse" />
      </div>
    </div>
  );
};

