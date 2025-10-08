import { motion, AnimatePresence } from 'framer-motion';

interface LoadingButtonProps {
  isLoading: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

/**
 * LoadingButton - Button with integrated loading state
 * Features:
 * - Smooth transition between loading and normal state
 * - Rotating spinner during loading
 * - Disabled interaction while loading
 * - Scale feedback on tap
 * - Maintains button size during state changes
 */
export const LoadingButton = ({ 
  isLoading, 
  children, 
  onClick, 
  className = '',
  type = 'button'
}: LoadingButtonProps) => {
  return (
    <motion.button
      whileTap={{ scale: isLoading ? 1 : 0.95 }}
      onClick={onClick}
      disabled={isLoading}
      type={type}
      className={`relative overflow-hidden ${className} ${isLoading ? 'cursor-wait' : ''}`}
    >
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center gap-2"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
            />
            <span>Sending...</span>
          </motion.div>
        ) : (
          <motion.span
            key="content"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

