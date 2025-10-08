import { motion, AnimatePresence } from 'framer-motion';

interface PageLoaderProps {
  isLoading: boolean;
}

/**
 * PageLoader - Full-screen loading overlay with animated spinner
 * Features:
 * - Smooth fade in/out transitions
 * - Rotating spinner with scale pulse
 * - Brand-colored gradient background
 * - Prevents interaction during loading
 */
export const PageLoader = ({ isLoading }: PageLoaderProps) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-gradient-to-br from-amber-50 via-orange-50/20 to-rose-50 flex items-center justify-center"
        >
          <div className="text-center">
            {/* Animated Spinner */}
            <motion.div
              animate={{ 
                rotate: 360,
              }}
              transition={{ 
                rotate: { duration: 1.5, repeat: Infinity, ease: "linear" },
              }}
              className="w-16 h-16 mx-auto mb-6"
            >
              <div className="w-full h-full border-4 border-[#E91E63]/20 border-t-[#E91E63] rounded-full" />
            </motion.div>
            
            {/* Pulsing Text */}
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-700 font-semibold text-lg"
            >
              Loading...
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

