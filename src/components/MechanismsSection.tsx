import { mechanisms } from '../data/content'
import type { MechanismCard } from '../data/content'
import Button from './Button'
import FadeIn from './FadeIn'

function Card({ card, delay }: { card: MechanismCard; delay: number }) {
  const dark = card.variant === 'dark'
  return (
    <FadeIn
      delay={delay}
      className={`rounded-[40px] pb-10 pl-10 pr-10 pt-8 md:pr-24 ${
        dark
          ? 'bg-[#051A24] shadow-[inset_0_2px_20px_rgba(255,255,255,0.06),0_20px_60px_rgba(5,26,36,0.25)]'
          : 'bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)]'
      }`}
    >
      <h3 className={`text-[22px] font-medium ${dark ? 'text-[#F6FCFF]' : 'text-[#0D212C]'}`}>
        {card.title}
      </h3>

      <div className={`mt-3 space-y-1 text-sm ${dark ? 'text-[#E0EBF0]' : 'text-[#273C46]'}`}>
        {card.desc.map((d, i) => (
          <p key={i}>{d}</p>
        ))}
      </div>

      <div className="mt-8">
        <div className={`text-2xl font-semibold ${dark ? 'text-[#F6FCFF]' : 'text-[#0D212C]'}`}>
          {card.value}
        </div>
        <div className={`text-sm ${dark ? 'text-[#E0EBF0]/70' : 'text-[#273C46]/80'}`}>
          {card.valueLabel}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href={card.primary.href} variant={dark ? 'tertiary' : 'primary'}>
          {card.primary.label}
        </Button>
        {card.secondary && (
          <Button href={card.secondary.href} variant="secondary">
            {card.secondary.label}
          </Button>
        )}
      </div>
    </FadeIn>
  )
}

export default function MechanismsSection() {
  return (
    <section id="co-che" className="w-full px-6 py-12">
      <div className="mx-auto grid grid-cols-1 gap-8 md:ml-auto md:max-w-4xl md:grid-cols-2">
        {mechanisms.map((card, i) => (
          <Card key={card.title} card={card} delay={0.1 + i * 0.1} />
        ))}
      </div>
    </section>
  )
}
