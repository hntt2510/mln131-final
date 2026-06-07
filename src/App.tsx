import { brand, hero, marqueeTiles } from './data/content'
import Button from './components/Button'
import FadeIn from './components/FadeIn'
import VisualTile from './components/VisualTile'
import QuoteSection from './components/QuoteSection'
import MechanismsSection from './components/MechanismsSection'
import FamilyCarousel from './components/FamilyCarousel'
import JourneySection from './components/JourneySection'
import PartnerSection from './components/PartnerSection'
import Footer from './components/Footer'
import CopyrightBar from './components/CopyrightBar'
import BottomNav from './components/BottomNav'

function Hero() {
  return (
    <section id="hero" className="mx-auto max-w-[440px] px-6 pt-12 md:pt-16">
      <FadeIn
        as="h1"
        delay={0.1}
        className="mb-4 font-serif text-[32px] font-semibold tracking-tight text-[#051A24] md:text-[40px] lg:text-[44px]"
      >
        {brand.logo}
      </FadeIn>

      <FadeIn as="p" delay={0.2} className="mb-2 font-mono text-xs text-[#051A24] md:text-sm">
        {brand.tagline}
      </FadeIn>

      <FadeIn
        as="h2"
        delay={0.3}
        className="whitespace-nowrap text-[32px] leading-[1.1] tracking-tight text-[#0D212C] md:text-[40px] lg:text-[44px]"
      >
        Mâu thuẫn <span className="font-serif">thế hệ,</span>
        <br />
        trong <span className="font-serif">gia đình số.</span>
      </FadeIn>

      <FadeIn delay={0.4} className="mt-5 flex flex-col gap-6 text-sm leading-relaxed text-[#051A24] md:mt-6 md:text-base">
        {hero.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </FadeIn>

      <FadeIn delay={0.5} className="mt-5 flex flex-col gap-3 md:mt-6 md:flex-row md:gap-4">
        <Button href="#hanh-trinh">Khám phá nghiên cứu</Button>
        <Button href="#dong-hanh" variant="secondary">
          Xem kết luận
        </Button>
      </FadeIn>
    </section>
  )
}

function Marquee() {
  const loop = [...marqueeTiles, ...marqueeTiles]
  return (
    <section className="mb-16 mt-16 w-full overflow-hidden md:mt-20" aria-hidden>
      <div className="flex w-max animate-marquee">
        {loop.map((tile, i) => (
          <VisualTile
            key={i}
            tile={tile}
            className="mx-3 h-[280px] w-[200px] flex-none shadow-lg md:h-[500px] md:w-[360px]"
          />
        ))}
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white pb-28">
      <Hero />
      <Marquee />
      <QuoteSection />
      <MechanismsSection />
      <FamilyCarousel />
      <JourneySection />
      <PartnerSection />
      <Footer />
      <CopyrightBar />
      <BottomNav />
    </div>
  )
}
