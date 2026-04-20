import { useEffect, useState } from 'react'
import { motion as Motion } from 'framer-motion'
import {
  Award,
  AtSign,
  Coffee,
  Crown,
  Leaf,
  Lock,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  TimerReset,
  Truck,
} from 'lucide-react'

const DRINKS = [
  {
    name: 'Velvet Espresso',
    type: 'Single origin shot',
    image: 'https://pngimg.com/d/coffee_cup_PNG1986.png',
  },
  {
    name: 'Cloud Latte',
    type: 'Steamed oat blend',
    image: 'https://pngimg.com/d/coffee_cup_PNG1994.png',
  },
  {
    name: 'Nitro Iced Brew',
    type: 'Cold extraction',
    image: 'https://pngimg.com/d/coffee_PNG16841.png',
  },
  {
    name: 'Cocoa Velocity',
    type: 'Chocolate shake',
    image: 'https://pngimg.com/d/milkshake_PNG52.png',
  },
  {
    name: 'Caramel Lift',
    type: 'Toffee shake',
    image: 'https://pngimg.com/d/milkshake_PNG15.png',
  },
  {
    name: 'Strawberry Silk',
    type: 'Berry cream shake',
    image: 'https://pngimg.com/d/milkshake_PNG49.png',
  },
]

const LOOP_ITEMS = [...DRINKS, ...DRINKS, ...DRINKS]

const ITEM_WIDTH = 220
const GAP = 48
const SLOT = ITEM_WIDTH + GAP
const TOTAL_WIDTH = DRINKS.length * SLOT

const pillars = [
  {
    icon: Coffee,
    title: 'Bean Precision',
    description: 'Roast profiles are tuned to the second for consistent richness.',
  },
  {
    icon: Sparkles,
    title: 'Texture Engineered',
    description: 'Every foam and shake finish is calibrated for smooth mouthfeel.',
  },
  {
    icon: Leaf,
    title: 'Responsible Sourcing',
    description: 'Transparent farm partnerships and seasonal direct-trade lots.',
  },
  {
    icon: TimerReset,
    title: 'Always Fresh',
    description: 'Small-batch prep windows keep aroma, body, and temperature perfect.',
  },
]

const loyaltyBadges = [
  { name: 'Starter Sip', unlocked: true },
  { name: 'Foam Artist', unlocked: true },
  { name: 'Nitro Hunter', unlocked: true },
  { name: 'Night Owl', unlocked: false },
  { name: 'Shake Champion', unlocked: false },
  { name: 'Gold Brewer', unlocked: false },
]

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showOrderBar, setShowOrderBar] = useState(false)
  const [isCarouselPaused, setIsCarouselPaused] = useState(false)
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 })

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24)
      setShowOrderBar(window.scrollY > 480)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onHeroMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width
    const y = (event.clientY - rect.top) / rect.height
    const maxTilt = 12
    setTilt({
      rotateX: (0.5 - y) * maxTilt * 2,
      rotateY: (x - 0.5) * maxTilt * 2,
    })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          isScrolled
            ? 'border-border/90 bg-background/80 py-3 backdrop-blur-md'
            : 'border-transparent bg-transparent py-5'
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 md:px-10">
          <a href="#top" className="font-heading text-xl font-black uppercase tracking-[0.14em]">
            Brewtopia
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-foreground/85 md:flex">
            <a href="#menu" className="hover:text-primary">Menu</a>
            <a href="#why" className="hover:text-primary">Why Brewtopia</a>
            <a href="#delivery" className="hover:text-primary">Delivery</a>
            <a href="#loyalty" className="hover:text-primary">Loyalty</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
          </nav>
          <button className="rounded-full border border-border p-2 text-foreground md:hidden" aria-label="Open navigation">
            <Menu size={18} />
          </button>
        </div>
      </header>

      <main id="top" className="paper-lines mx-auto flex w-full max-w-7xl flex-col gap-20 px-5 pb-36 pt-28 md:gap-28 md:px-10 md:pt-36">
        <section className="grid items-center gap-12 border-b border-border pb-16 md:grid-cols-2">
          <div className="space-y-8">
            <p className="font-body text-sm uppercase tracking-[0.3em] text-muted">Signature Coffee & Shakes</p>
            <h1 className="font-heading text-[clamp(2.6rem,8vw,6.6rem)] font-black uppercase leading-[0.86] tracking-[-0.03em]">
              MORE THAN COFFEE.
              <br />
              IT&apos;S A VIBE.
            </h1>
            <p className="max-w-xl text-lg text-muted">
              Brewtopia builds premium drinks like product launches: engineered texture,
              dramatic flavor, and instantly recognizable silhouettes.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#menu" className="rounded-full bg-foreground px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-background transition hover:opacity-90">
                Explore Drinks
              </a>
              <a href="#subscription" className="rounded-full border border-border px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition hover:border-foreground/40">
                Join Brew Pass
              </a>
            </div>
            <div className="grid max-w-xl grid-cols-3 gap-3 pt-2">
              <div className="rounded-xl border border-border bg-white/60 p-3 text-center">
                <p className="font-heading text-xl font-black uppercase">6</p>
                <p className="text-xs uppercase tracking-[0.08em] text-muted">Core SKUs</p>
              </div>
              <div className="rounded-xl border border-border bg-white/60 p-3 text-center">
                <p className="font-heading text-xl font-black uppercase">18M</p>
                <p className="text-xs uppercase tracking-[0.08em] text-muted">Delivery SLA</p>
              </div>
              <div className="rounded-xl border border-border bg-white/60 p-3 text-center">
                <p className="font-heading text-xl font-black uppercase">4.9</p>
                <p className="text-xs uppercase tracking-[0.08em] text-muted">Member Score</p>
              </div>
            </div>
          </div>

          <Motion.div
            className="flex justify-center md:justify-end"
            onMouseMove={onHeroMouseMove}
            onMouseLeave={() => setTilt({ rotateX: 0, rotateY: 0 })}
          >
            <Motion.img
              src={DRINKS[1].image}
              alt="Cloud Latte"
              className="h-auto w-[min(78vw,470px)] object-contain"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1, y: [0, -18, 0] }}
              transition={{ opacity: { duration: 0.6 }, scale: { duration: 0.6 }, y: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
              style={{
                rotateX: tilt.rotateX,
                rotateY: tilt.rotateY,
                transformPerspective: 900,
                filter:
                  'drop-shadow(0px 30px 40px rgba(0,0,0,0.22)) drop-shadow(0px 8px 16px rgba(0,0,0,0.12))',
              }}
            />
          </Motion.div>
        </section>

        <section id="menu" className="space-y-8 border-b border-border pb-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-muted">Product Showcase</p>
              <h2 className="mt-3 font-heading text-4xl font-black uppercase tracking-tight md:text-5xl">Signature Lineup</h2>
            </div>
            <p className="hidden max-w-sm text-right text-sm text-muted md:block">
              Hover the lineup to pause and inspect each product.
            </p>
          </div>

          <div
            className="relative overflow-hidden py-8"
            onMouseEnter={() => setIsCarouselPaused(true)}
            onMouseLeave={() => setIsCarouselPaused(false)}
          >
            <div
              className="carousel-track"
              style={{
                ['--carousel-total-width']: `${TOTAL_WIDTH}px`,
                ['--carousel-duration']: `${DRINKS.length * 3.5}s`,
                animationPlayState: isCarouselPaused ? 'paused' : 'running',
              }}
            >
              {LOOP_ITEMS.map((drink, index) => (
                <article key={`${drink.name}-${index}`} className="group flex w-[220px] flex-col items-center text-center">
                  <div className="transition-transform duration-300 group-hover:scale-[1.12]">
                    <img
                      src={drink.image}
                      alt={drink.name}
                      className="h-[260px] w-[200px] object-contain transition-all duration-300 [filter:drop-shadow(0px_18px_28px_rgba(0,0,0,0.18))] group-hover:[filter:drop-shadow(0px_26px_34px_rgba(0,0,0,0.24))]"
                    />
                  </div>
                  <h3 className="mt-3 font-heading text-base font-black uppercase tracking-[0.08em]">{drink.name}</h3>
                  <p className="mt-1 text-sm text-muted">{drink.type}</p>
                </article>
              ))}
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent" />
          </div>
        </section>

        <section id="why" className="space-y-8 border-b border-border pb-16">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-muted">Why We Hit Different</p>
            <h2 className="mt-3 font-heading text-4xl font-black uppercase tracking-tight md:text-5xl">Built Like a Product Team</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <Motion.article
                  key={pillar.title}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-2xl border border-border bg-white/40 p-6 transition-colors hover:border-primary/55"
                >
                  <Icon className="text-primary" size={24} />
                  <h3 className="mt-4 font-heading text-lg font-black uppercase tracking-[0.07em]">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{pillar.description}</p>
                </Motion.article>
              )
            })}
          </div>
        </section>

        <section id="subscription" className="space-y-8 border-b border-border pb-16">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-muted">Subscription</p>
            <h2 className="mt-3 font-heading text-4xl font-black uppercase tracking-tight md:text-5xl">Choose Your Brew Pass</h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-3xl border border-border bg-white/60 p-7">
              <h3 className="font-heading text-2xl font-black uppercase tracking-[0.07em]">Starter</h3>
              <p className="mt-3 text-muted">3 premium drinks weekly + surprise seasonal upgrade.</p>
              <p className="mt-7 font-heading text-4xl font-black uppercase">$29/mo</p>
            </article>

            <article className="rounded-3xl bg-foreground p-7 text-background">
              <p className="inline-flex rounded-full border border-background/30 px-3 py-1 text-xs uppercase tracking-[0.18em]">Most Loved</p>
              <h3 className="mt-4 font-heading text-2xl font-black uppercase tracking-[0.07em]">Black Label</h3>
              <p className="mt-3 text-background/80">Daily coffee access, 50% off shakes, and members-only drops.</p>
              <p className="mt-7 font-heading text-4xl font-black uppercase">$59/mo</p>
            </article>
          </div>
        </section>

        <section id="delivery" className="grid items-center gap-8 rounded-3xl border border-border bg-white/45 p-8 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-muted">Delivery</p>
            <h2 className="mt-3 font-heading text-4xl font-black uppercase tracking-tight">At Your Door in 18</h2>
            <p className="mt-4 max-w-md text-muted">
              We dispatch from micro-hubs so temperature and foam texture survive transit.
            </p>
          </div>

          <div className="flex justify-center">
            <Motion.div
              animate={{ borderRadius: ['38% 62% 53% 47% / 42% 45% 55% 58%', '62% 38% 44% 56% / 54% 60% 40% 46%', '38% 62% 53% 47% / 42% 45% 55% 58%'] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="relative flex h-52 w-52 items-center justify-center border border-border bg-background"
            >
              <Motion.span
                className="absolute inset-0 rounded-full border border-primary/35"
                animate={{ scale: [1, 1.25, 1], opacity: [0.75, 0.2, 0.75] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <Motion.span
                className="absolute inset-4 rounded-full border border-primary/25"
                animate={{ scale: [1, 1.18, 1], opacity: [0.7, 0.25, 0.7] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
              />
              <Truck className="text-primary" size={52} />
            </Motion.div>
          </div>
        </section>

        <section id="loyalty" className="space-y-8 border-b border-border pb-16">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-muted">Loyalty</p>
            <h2 className="mt-3 font-heading text-4xl font-black uppercase tracking-tight md:text-5xl">Unlock The Brew Ladder</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {loyaltyBadges.map((badge) => (
              <article
                key={badge.name}
                className={`flex items-center justify-between rounded-2xl border p-5 ${
                  badge.unlocked
                    ? 'border-border bg-white/70'
                    : 'border-border/80 bg-transparent text-muted'
                }`}
              >
                <div className="flex items-center gap-3">
                  {badge.unlocked ? <Award size={18} className="text-primary" /> : <Lock size={18} />}
                  <p className="font-medium">{badge.name}</p>
                </div>
                {badge.unlocked ? <Crown size={18} className="text-primary" /> : <Lock size={16} />}
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="overflow-hidden rounded-[2rem] border border-foreground/15 bg-foreground px-6 py-10 text-background md:px-10 md:py-14">
          <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-background/70">Contact Brewtopia</p>
              <h2 className="mt-4 font-heading text-[clamp(2rem,5vw,4rem)] font-black uppercase leading-[0.9]">
                Let&apos;s Build
                <br />
                Your Drink Ritual.
              </h2>
              <p className="mt-5 max-w-xl text-background/75">
                Brand events, catering drops, or private office subscriptions. Reach out and we
                will design a custom coffee and shake program for your team.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a href="tel:+18002739867" className="flex items-center gap-3 rounded-xl border border-background/20 bg-background/5 px-4 py-3 transition hover:bg-background/10">
                  <Phone size={18} />
                  <span>+1 (800) BREW-TOP</span>
                </a>
                <a href="mailto:hello@brewtopia.com" className="flex items-center gap-3 rounded-xl border border-background/20 bg-background/5 px-4 py-3 transition hover:bg-background/10">
                  <Mail size={18} />
                  <span>hello@brewtopia.com</span>
                </a>
                <div className="flex items-center gap-3 rounded-xl border border-background/20 bg-background/5 px-4 py-3 sm:col-span-2">
                  <MapPin size={18} />
                  <span>Flagship: 280 Roast Avenue, New York</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-background/20 bg-background/5 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-background/65">Quick Message</p>
              <form className="mt-5 space-y-3">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-background/20 bg-background/10 px-4 py-3 text-sm text-background placeholder:text-background/50 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Work email"
                  className="w-full rounded-xl border border-background/20 bg-background/10 px-4 py-3 text-sm text-background placeholder:text-background/50 focus:outline-none"
                />
                <textarea
                  rows="4"
                  placeholder="Tell us what you need"
                  className="w-full rounded-xl border border-background/20 bg-background/10 px-4 py-3 text-sm text-background placeholder:text-background/50 focus:outline-none"
                />
                <button
                  type="button"
                  className="w-full rounded-full bg-background px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-foreground transition hover:opacity-90"
                >
                  Send Request
                </button>
              </form>
              <div className="mt-6 flex items-center justify-between border-t border-background/20 pt-4 text-sm text-background/80">
                <span>Follow</span>
                <a href="#" className="inline-flex items-center gap-2 hover:text-background">
                  <AtSign size={16} />
                  @brewtopia
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-sm text-muted md:flex-row md:items-center">
          <p className="font-heading text-base font-black uppercase tracking-[0.08em] text-foreground">Brewtopia</p>
          <p>Designed for people who treat drinks like products.</p>
        </footer>
      </main>

      <Motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: showOrderBar ? 0 : 80, opacity: showOrderBar ? 1 : 0 }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
        className="fixed inset-x-4 bottom-4 z-50 rounded-2xl border border-border bg-background/95 p-3 shadow-[0_18px_40px_rgba(0,0,0,0.1)] md:hidden"
      >
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted">Ready to sip?</p>
            <p className="font-heading text-sm font-black uppercase tracking-[0.08em]">Order in 2 taps</p>
          </div>
          <button className="rounded-full bg-foreground px-5 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-background">
            Order Now
          </button>
        </div>
      </Motion.div>
    </div>
  )
}

export default App
