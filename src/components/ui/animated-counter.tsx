import { useEffect, useState } from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  decimals?: number;
}

/**
 * AnimatedCounter - Smooth number counting animation
 * Features:
 * - Spring-based animation for natural motion
 * - Triggers on scroll into view
 * - Supports prefixes and suffixes
 * - Customizable duration
 * - Locale-aware number formatting
 */
export const AnimatedCounter = ({ 
  value, 
  suffix = '', 
  prefix = '',
  duration = 2000,
  className = '',
  decimals = 0
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  const spring = useSpring(0, { 
    duration,
    bounce: 0
  });
  
  const display = useTransform(spring, (current) => {
    const num = decimals > 0 ? current.toFixed(decimals) : Math.round(current);
    return typeof num === 'string' ? num : num.toLocaleString();
  });

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [value, spring, isInView]);

  return (
    <div ref={ref} className={className}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </div>
  );
};

