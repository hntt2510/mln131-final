import { journey, hypotheses } from '../data/content'
import FadeIn from './FadeIn'
import VisualTile from './VisualTile'

export default function JourneySection() {
  return (
    <section id="hanh-trinh" className="mx-auto max-w-[1200px] px-6 py-12">
      <div className="flex flex-col gap-16 md:gap-20">
        {journey.map((item, i) => (
          <FadeIn key={item.no} delay={0.1} className="w-full">
            <div className="ml-20 md:ml-28">
              <div className="mb-2 font-mono text-sm text-[#051A24]/60">{item.no}</div>
              <h3 className="font-serif text-2xl font-semibold text-[#051A24] md:text-3xl">
                {item.name}
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-[#051A24]/70 md:text-base">{item.desc}</p>
            </div>
            <VisualTile
              tile={item.visual}
              className="mt-6 h-[320px] w-full shadow-lg md:h-[460px]"
            />
            <span className="sr-only">{i + 1}</span>
          </FadeIn>
        ))}
      </div>

      {/* Tổng hợp kiểm định giả thuyết */}
      <FadeIn delay={0.1} className="mt-20">
        <h3 className="font-serif text-2xl font-semibold text-[#051A24] md:text-3xl">
          Kết quả kiểm định
        </h3>
        <p className="mt-2 text-sm text-[#051A24]/70 md:text-base">
          Hồi quy tuyến tính trên 164 mẫu · R² = 46.4% · F = 34.353 (p &lt; .001)
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {hypotheses.map((h) => {
            const accept = h.status === 'accept'
            return (
              <div
                key={h.id}
                className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
              >
                <div
                  className={`flex h-11 w-11 flex-none items-center justify-center rounded-xl font-serif text-lg font-semibold ${
                    accept ? 'bg-[#43e0c0]/15 text-[#0a8f7a]' : 'bg-[#ffb05b]/15 text-[#b5701a]'
                  }`}
                >
                  {h.id}
                </div>
                <div>
                  <div className="font-medium text-[#0D212C]">{h.text}</div>
                  <div className="mt-1 font-mono text-xs text-[#273C46]">{h.stat}</div>
                  <span
                    className={`mt-2 inline-block rounded-full px-3 py-0.5 text-xs ${
                      accept ? 'bg-[#43e0c0]/15 text-[#0a8f7a]' : 'bg-[#ffb05b]/15 text-[#b5701a]'
                    }`}
                  >
                    {accept ? '✓ Chấp nhận' : '⚠ Chưa đủ bằng chứng'}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </FadeIn>
    </section>
  )
}
