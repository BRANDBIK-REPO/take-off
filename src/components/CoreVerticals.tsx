import type { ReactNode } from "react"

type Vertical = {
  id: string
  title: string
  description: string
  hasInset: boolean
}

const verticals: Vertical[] = [
  {
    id: "Verticals 01",
    title: "TakeOff Connect",
    description: "A vibrant ecosystem where entrepreneurs, SMEs, and professionals build meaningful connections.",
    hasInset: true,
  },
  {
    id: "Verticals 02",
    title: "LaunchPad",
    description: "Personalized mentorship programs designed to accelerate your growth journey.",
    hasInset: false,
  },
  {
    id: "Verticals 03",
    title: "Academy",
    description: "Practical learning experiences through business mastery workshops.",
    hasInset: false,
  },
  {
    id: "Verticals 04",
    title: "Global Explore / Tours",
    description:
      "Expand beyond borders with curated global market tours. Gain first-hand access to international business hubs.",
    hasInset: false,
  },
  {
    id: "Verticals 05",
    title: "Capital Access",
    description: "TakeOff connects members with investors, pitch opportunities, and funding avenues.",
    hasInset: false,
  },
  {
    id: "Verticals 06",
    title: "Community+",
    description: "A 24/7 online community where members engage, share, and collaborate.",
    hasInset: false,
  },
]

function CardIcon({ hasInset }: { hasInset: boolean }) {
  return (
    <div className="flex items-center justify-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-primary">
        {hasInset ? <div className="h-10 w-10 rounded-lg bg-muted" /> : null}
      </div>
    </div>
  )
}

function ExploreMoreButton(): ReactNode {
  return (
    <button
      type="button"
      className="mt-auto flex w-full items-center justify-between rounded-lg border border-border px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      <span>Explore more</span>
      <span aria-hidden="true" className="flex items-center justify-center">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 4l4 4-4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      </span>
    </button>
  )
}

function VerticalCard({ vertical }: { vertical: Vertical }) {
  return (
    <article className="relative flex h-full flex-col gap-6 rounded-xl border border-border bg-card px-8 pb-8 pt-14 shadow-sm">
      <span className="absolute -top-3 left-8 inline-flex rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium uppercase tracking-wide text-foreground/70">
        {vertical.id}
      </span>
      <CardIcon hasInset={vertical.hasInset} />
      <div className="space-y-3 text-center">
        <h3 className="text-lg font-semibold text-foreground">{vertical.title}</h3>
        <p className="text-sm leading-relaxed text-foreground/70">{vertical.description}</p>
      </div>
      <ExploreMoreButton />
    </article>
  )
}

export default function CoreVerticals() {
  return (
    <main className="bg-background">
      <section className="mx-auto flex max-w-screen-2xl flex-col gap-12 px-4 py-16 sm:px-6 lg:px-12 xl:px-16">
        <header className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">Verticals 00</p>
          <h2 className="text-pretty text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl">
            Our Core <span className="italic text-primary">Verticals</span>
          </h2>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {verticals.map((vertical) => (
            <VerticalCard key={vertical.id} vertical={vertical} />
          ))}
        </div>
      </section>
    </main>
  )
}
