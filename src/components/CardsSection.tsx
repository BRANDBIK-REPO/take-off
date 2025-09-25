import type { Metadata } from "next"

const highlights = [
  {
    title: "Trusted by the Growth Partner",
    description:
      "We provide the right mix of mentorship, resources, and global opportunities to help your business scale faster.",
  },
  {
    title: "Stronger Connections",
    description:
      "Join a vibrant ecosystem of entrepreneurs, SMEs, and investors — because collaboration fuels success.",
  },
  {
    title: "Tailored Support",
    description: "Every founder's journey is unique. That's why we customize programs to match your goals.",
  },
]

export const metadata: Metadata = {
  title: "Growth Partner Highlights",
}

export default function CardsSection() {
  return (
    <main className="bg-background">
  <section className="mx-auto w-full px-4 sm:px-6 lg:px-20 py-16">
        <div className="rounded-xl border border-border bg-card shadow-sm">
          <div className="flex flex-col md:grid md:grid-cols-3">
            {highlights.map((item, index) => (
              <article
                key={item.title}
                className="[&:not(:first-child)]:border-t [&:not(:first-child)]:border-border md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:border-t-0
                  flex flex-col gap-4 px-6 py-8 sm:px-8 sm:py-10"
              >
                <span aria-hidden="true" className="h-12 w-12 shrink-0 rounded-full bg-[var(--color-brand-navy)]" />
                <div className="space-y-2 text-pretty">
                  <h3 className="font-semibold text-lg text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
