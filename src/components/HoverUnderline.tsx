'use client'

import { cn } from "@/utils/cn";
import { motion } from "motion/react";

interface Props {
    text: string;
    className?: string;
}

export default function HoverUnderline({ text, className }: Props) {
  return (
    <motion.span
        initial='rest'
        whileHover='hover'
        animate='rest'
        className={cn('relative', className)}
    >
        {text}

        {/* underline */}
        <motion.span className='absolute h-[2px] bg-black left-0 right-0 -bottom-1' variants={{
            rest: { scaleX: 0, transformOrigin: 'right' },
            hover: { scaleX: 1, transformOrigin: 'left' },
        }} 
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        />
    </motion.span>
  )
}
