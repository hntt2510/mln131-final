import { brand } from '../data/content'
import Button from './Button'

export default function BottomNav() {
  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-4 rounded-full bg-white px-4 py-2 shadow-[0_1px_2px_0_rgba(5,26,36,0.08),0_8px_24px_rgba(5,26,36,0.12),0_2px_6px_rgba(5,26,36,0.06),inset_0_2px_8px_0_rgba(255,255,255,0.6)]">
        <a
          href="#hero"
          className="pl-3 font-serif text-2xl font-semibold text-[#051A24]"
          aria-label="Về đầu trang"
        >
          {brand.short}
        </a>
        <Button href="#dong-hanh" className="!px-5 !py-2">
          Bắt đầu
        </Button>
      </div>
    </div>
  )
}
