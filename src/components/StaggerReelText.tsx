'use client';

import React from 'react';
import { cn } from '@/utils/cn';
import { motion } from 'motion/react';

const DELAY_TIME = 0.03;

export default function StaggerReelText({
  children,
  className,
  initialTextColor = 'text-black',
  hoveredTextColor = 'text-black',
}: {
  children: React.ReactNode;
  className?: string;
  initialTextColor?: string;
  hoveredTextColor?: string;
}) {
  const text = React.Children.toArray(children).join('');

  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className={cn(className, initialTextColor, 'relative overflow-hidden')}
    >
      <div>
        {text.split('').map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={{
              initial: { y: 0 },
              hovered: { y: '-100%' },
            }}
            transition={{
              ease: 'easeInOut',
              delay: index * DELAY_TIME,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <div className={cn(hoveredTextColor, 'absolute inset-0')}>
        {text.split('').map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={{
              initial: { y: '100%' },
              hovered: { y: 0 },
            }}
            transition={{
              ease: 'easeInOut',
              delay: index * DELAY_TIME,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
