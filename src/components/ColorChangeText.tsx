'use client';

import { cn } from '@/utils/cn';

export default function HoverText({ className }: { className?: string }) {
  return <div className={cn(className, 'hover-text')}>Hover Over Me</div>;
}
