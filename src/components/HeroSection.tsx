import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[70vh] w-full items-center justify-center overflow-hidden bg-[var(--color-background)] lg:min-h-screen">
      <Image
        src="/images/hero-community.png"
        alt="Close-up handshake symbolizing partnership"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "color-mix(in srgb, var(--color-foreground) 40%, transparent)",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 flex w-full flex-col items-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-8">
          <h1 className="text-pretty text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            Join a trusted community of entrepreneurs, founders, and innovators building the future together.
          </h1>
          <button
            type="button"
            className="flex h-16 w-16 items-center justify-center rounded-full border bg-[var(--color-background)] text-primary transition-transform duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-primary-foreground)] sm:h-20 sm:w-20"
          >
            <span className="sr-only">Play introduction video</span>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-7 w-7 fill-[var(--color-primary-foreground)] sm:h-9 sm:w-9"
            >
              <path d="M9 7.5v9l8-4.5-8-4.5z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div
          className="flex flex-col items-center gap-1 px-4 py-3 text-center sm:flex-row sm:justify-center sm:gap-2 lg:text-base"
          style={{
            backgroundColor: "color-mix(in srgb, var(--color-foreground) 20%, transparent)",
          }}
        >
          <span className="text-xs uppercase tracking-wide text-muted-foreground sm:text-sm">ready to takeoff...</span>
          <a
            href="#join"
            className="text-sm font-medium text-primary-foreground underline underline-offset-4 hover:opacity-90 sm:text-base"
          >
            Click here to join us a member...
          </a>
        </div>
      </div>
    </section>
  )
}
