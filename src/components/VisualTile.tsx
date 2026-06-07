import type { VisualTile as Tile } from '../data/content'

// Themed gradient tile used wherever the original design used a stock GIF/photo.
// Reliable (no external assets) and on-brand for the digital-family topic.
export default function VisualTile({
  tile,
  className = '',
  rounded = 'rounded-2xl',
}: {
  tile: Tile
  className?: string
  rounded?: string
}) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden ${rounded} ${className}`}
      style={{ background: `linear-gradient(135deg, ${tile.from}, ${tile.to})` }}
    >
      {/* subtle grid texture */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/20 blur-2xl" />
      <span className="relative z-10 text-4xl md:text-5xl drop-shadow-sm">{tile.icon}</span>
      <span className="relative z-10 mt-3 px-4 text-center text-sm font-medium text-white/95 md:text-base">
        {tile.label}
      </span>
    </div>
  )
}
