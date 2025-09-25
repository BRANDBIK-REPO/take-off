import Image from "next/image"

const stats = [
  {
    value: "1000+",
    title: "Connections Built & Growing",
    description:
      "Our consultants provide the highest quality advice and technical support and will assist your organization.",
    backgroundVar: "--color-brand-navy",
  },
  {
    value: "24/7",
    title: "Community Support",
    description:
      "A global digital platform where members connect, share, and collaborate anytime — beyond events and borders.",
    backgroundVar: "--color-brand-gold",
  },
  {
    value: "95%",
    title: "Member Satisfaction",
    description:
      "Entrepreneurs and SMEs trust our network for curated opportunities, mentorship, and global market access.",
    backgroundVar: "--color-brand-teal",
  },
]

export default function AboutUs() {
  return (
    <main className="bg-[var(--color-neutral-50)] px-4 py-16 sm:py-20 lg:py-24">
  <div className="mx-auto w-full px-4 sm:px-6 lg:px-20">
        <section className="flex flex-col gap-16">
          <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  value: "1000+",
                  title: "Connections Built & Growing",
                  description:
                    "Our Consultants provide the highest quality advice and technical support and will assist your organization",
                  bg: "#215273",
                },
                {
                  value: "24/7",
                  title: "Community Support",
                  description:
                    "A global digital platform where members connect, share, and collaborate anytime — beyond events and borders.",
                  bg: "#C09755",
                },
                {
                  value: "95%",
                  title: "Member Satisfaction",
                  description:
                    "Entrepreneurs and SMEs trust TakeOff for curated opportunities, mentorship, and global market access.",
                  bg: "#359D9E",
                },
              ].map((stat, idx) => (
                <article
                  key={stat.title}
                  className="rounded-[1.5rem] shadow-sm flex flex-col justify-between min-h-[320px]"
                  style={{ backgroundColor: stat.bg }}
                >
                  <div className="px-8 pt-10">
                    <h1 className="text-5xl font-semibold tracking-tight text-white lg:text-[2.75rem]">{stat.value}</h1>
                  </div>
                  <div className="px-8 pb-10">
                    <h2 className="text-xl font-semibold italic text-white mb-2">{stat.title}</h2>
                    <p className="mt-2 text-base leading-relaxed text-white opacity-90">{stat.description}</p>
                  </div>
                </article>
              ))}
          </div>

          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
            <figure className="relative h-[360px] overflow-hidden rounded-[2rem] bg-[var(--color-brand-navy)] sm:h-[420px] lg:h-full">
              <Image
                src="/images/network-boardroom.png"
                alt="Business leaders collaborating around a conference table"
                fill
                priority
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(200deg, rgba(13,27,42,0.86) 12%, rgba(13,27,42,0.45) 58%, rgba(13,27,42,0.12) 100%)",
                }}
              />
              <div className="absolute left-6 top-10 flex flex-col items-start text-[var(--color-neutral-50)] md:left-10">
                <span
                  className="text-sm font-semibold tracking-[0.25em] uppercase"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  Built for Your Growth
                </span>
                <p className="mt-8 max-w-[220px] text-sm leading-6">
                  Empower members with trusted connections, curated opportunities, and actionable insights.
                </p>
              </div>
              <figcaption className="absolute bottom-10 left-10 right-10 text-[var(--color-neutral-50)]">
                <p className="text-xl font-semibold tracking-wide">Access. Action. Advancement.</p>
              </figcaption>
            </figure>

            <div className="flex flex-col">
              <span className="text-sm font-semibold uppercase tracking-[0.6em] text-[var(--color-brand-gold)]">
                Know about us more
              </span>
              <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight text-[var(--color-neutral-950)] md:text-4xl lg:text-[2.85rem]">
                More than a network –{" "}
                <span className="mt-3 block font-light italic text-[var(--color-brand-navy)]">
                  launchpad for entrepreneurial growth.
                </span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-neutral-950)] opacity-80">
                Born in the UAE with deep Kerala–GCC roots, we connect SMEs, founders, and professionals who want to
                think bigger and achieve more. We are a trusted ecosystem where ambition-driven entrepreneurs come
                together to connect, collaborate, and scale.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--color-neutral-950)] opacity-80">
                Relationships turn into partnerships, knowledge becomes strategy, and opportunities transform into
                results. Whether you&apos;re an aspiring founder, an established SME owner, or a growth-stage innovator,
                we provide the runway to explore new markets, access investors, and elevate your brand.
              </p>
              <div className="mt-10">
                <button
                  type="button"
                  className="inline-flex items-center rounded-full bg-[var(--color-brand-navy)] px-7 py-3 text-sm font-semibold text-[var(--color-neutral-50)] transition-colors hover:bg-[var(--color-brand-teal)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-gold)]"
                >
                  Join the Community
                  <span aria-hidden className="ml-3 text-base">
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
