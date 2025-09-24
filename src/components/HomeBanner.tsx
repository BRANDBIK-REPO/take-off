import Link from "next/link"

export default function HomeBanner() {
  return (
    <main className="bg-background">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col-reverse gap-12 px-6 py-16 md:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div className="flex flex-1 flex-col gap-8">
          <div className="space-y-6">
            <h1 className="text-balance text-4xl font-semibold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Your Flight to Success is Ready for <span className="italic text-primary">TakeOff</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              TakeOff is more than a network — it’s a launchpad for entrepreneurial growth. We connect SMEs, founders,
              and professionals to think bigger, achieve more, and scale globally.
            </p>
            <Link
              href="#"
              aria-label="Join the TakeOff community"
              className="inline-flex h-14 items-center justify-center gap-3 self-start rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground transition-colors hover:bg-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background md:text-base"
            >
              Join the Community
              <span
                aria-hidden
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-primary"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </span>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground md:text-base">
            Connections | Knowledge | Opportunities | Visibility | Support | Growth
          </p>
        </div>
        <div className="flex flex-1 justify-center">
          <div className="relative w-full max-w-[520px] overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-lg">
            <div className="aspect-[4/3]">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zZpJwZcyOm0cqI8J610z9RjdqBlNuw.png"
                alt="Business leaders meeting in a high-rise boardroom overlooking the city skyline"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
