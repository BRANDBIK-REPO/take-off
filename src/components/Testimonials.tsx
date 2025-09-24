import type React from "react"
import Image from "next/image"

type Testimonial = {
  rating: string
  badge: string
  quote: string
  author: string
  role: string
  imageAlt: string
}

const testimonials: Testimonial[] = [
  {
    rating: "4.9",
    badge: "A community that fuels real growth",
    quote:
      "TakeOff connected me with mentors and partners I wouldn't have found elsewhere. Every event and interaction has been designed to create genuine opportunities. Being part of this ecosystem has accelerated both my business growth and personal confidence.",
    author: "Aisha Kareem",
    role: "Founder, InnovateHub",
    imageAlt: "Portrait of Aisha Kareem smiling",
  },
  {
    rating: "4.9",
    badge: "More than networking — it’s transformation",
    quote:
      "What I value most about TakeOff is the culture of collaboration over competition. The workshops and mentorship programs gave me actionable strategies, while the global tours opened doors to markets I never thought possible.",
    author: "Ramesh Menon",
    role: "CEO, BrightPath Solutions",
    imageAlt: "Portrait of Ramesh Menon wearing a suit",
  },
]

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M10 1.5 12.47 7l5.53.44-4.2 3.63 1.28 5.43L10 13.95l-5.08 2.58 1.28-5.43L2 7.44 7.53 7 10 1.5Z" />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section className="bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <header className="max-w-xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Our testimonials</p>
          <h1 className="text-balance text-4xl font-semibold text-foreground sm:text-5xl">Growth Journeys</h1>
        </header>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.author}
              className="relative flex h-full flex-col gap-8 rounded-[2.25rem] border border-border bg-card p-8 shadow-sm sm:p-10"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-8 top-8 text-6xl font-serif text-muted-foreground/20 sm:text-7xl"
              >
                &rdquo;
              </span>

              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-3 pr-12">
                  <div
                    className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold leading-none"
                    style={{ backgroundColor: "var(--color-secondary)" }}
                  >
                    <span className="flex items-center gap-1" style={{ color: "var(--color-chart-4)" }}>
                      <StarIcon className="h-4 w-4" />
                      <StarIcon className="h-4 w-4" />
                      <StarIcon className="h-4 w-4" />
                      <StarIcon className="h-4 w-4" />
                      <StarIcon className="h-4 w-4 opacity-70" />
                    </span>
                    <span className="text-foreground">{testimonial.rating}</span>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">{testimonial.badge}</span>
                </div>

                <p className="text-lg leading-relaxed text-muted-foreground">{testimonial.quote}</p>
              </div>

              <div className="space-y-6">
                <div className="h-px w-full bg-border" />
                <div className="flex items-center gap-4">
                  <Image
                    src="/professional-headshot.png"
                    alt={testimonial.imageAlt}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-base font-semibold text-primary">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
