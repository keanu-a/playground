'use client';

import { useMemo } from 'react';
import { cn } from '@/utils/cn';
import { motion } from 'motion/react';

const DELAY_TIME = 0.03;
const DURATION_TIME = 1.3;

interface Props {
  text: string;
  className?: string;
  initialTextColor?: string;
  hoveredTextColor?: string;
}

export default function StaggerReelText({
  text,
  className,
  initialTextColor = 'text-black',
  hoveredTextColor = 'text-black',
}: Props) {

  const letters = useMemo(() => text.split(''), [text]);

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className={cn(className, initialTextColor, 'relative overflow-hidden')}
    >
      <div>
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={{
              initial: { y: 0 },
              hovered: { y: '-100%' },
            }}
            transition={{
              ease,
              duration: DURATION_TIME,
              delay: index * DELAY_TIME,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <div className={cn(hoveredTextColor, 'absolute inset-0')}>
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={{
              initial: { y: '100%' },
              hovered: { y: 0 },
            }}
            transition={{
              ease,
              delay: index * DELAY_TIME,
              duration: DURATION_TIME,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
