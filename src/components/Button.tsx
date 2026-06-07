import type { ReactNode, MouseEventHandler } from 'react'

type Variant = 'primary' | 'secondary' | 'tertiary'

// Layered shadows are central to the design feel.
const PRIMARY_SHADOW =
  'shadow-[0_1px_2px_0_rgba(5,26,36,0.1),0_4px_4px_0_rgba(5,26,36,0.09),0_9px_6px_0_rgba(5,26,36,0.05),0_17px_7px_0_rgba(5,26,36,0.01),0_26px_7px_0_rgba(5,26,36,0),inset_0_2px_8px_0_rgba(255,255,255,0.2)]'
const SECONDARY_SHADOW =
  'shadow-[0_0_0_0.5px_rgba(0,0,0,0.05),0_4px_30px_rgba(0,0,0,0.08)]'
const TERTIARY_SHADOW =
  'shadow-[0_0_0_0.5px_rgba(0,0,0,0.05),0_4px_30px_rgba(0,0,0,0.08),inset_0_2px_8px_0_rgba(255,255,255,0.6)]'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap'

const variants: Record<Variant, string> = {
  primary: `bg-[#051A24] text-white ${PRIMARY_SHADOW}`,
  secondary: `bg-white text-[#051A24] ${SECONDARY_SHADOW}`,
  tertiary: `bg-white text-[#051A24] ${TERTIARY_SHADOW}`,
}

type Props = {
  children: ReactNode
  variant?: Variant
  href?: string
  external?: boolean
  onClick?: MouseEventHandler<HTMLElement>
  className?: string
}

export default function Button({
  children,
  variant = 'primary',
  href,
  external,
  onClick,
  className = '',
}: Props) {
  const cls = `${base} ${variants[variant]} ${className}`
  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={cls}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }
  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  )
}
