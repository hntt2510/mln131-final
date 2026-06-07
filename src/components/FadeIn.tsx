import type { ElementType, ReactNode } from 'react'
import { useInViewAnimation } from '../hooks/useInViewAnimation'

// Wraps children and applies `animate-fade-in-up` once in view, with an
// optional staggered animation-delay.
export default function FadeIn({
  children,
  delay = 0,
  as: Tag = 'div' as ElementType,
  className = '',
  id,
}: {
  children: ReactNode
  delay?: number
  as?: ElementType
  className?: string
  id?: string
}) {
  const { ref, inView } = useInViewAnimation<HTMLElement>()
  return (
    <Tag
      ref={ref}
      id={id}
      className={`${inView ? 'animate-fade-in-up' : 'opacity-0'} ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </Tag>
  )
}
