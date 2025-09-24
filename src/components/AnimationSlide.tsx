"use client"

const marqueeItems = [
  "Flight to Success is Ready for Takeoff",
  "Connecting Entrepreneurs Across UAE, Kerala & GCC",
  "1000+ Business Connections Built & Growing",
  "Signature Events, Pitch Clubs & Business Brews",
  "Workshops, Masterclasses & Global Market Tours",
]

export default function AnimationSlide() {
  return (
    <main className="  bg-background text-foreground">
      <section className="mx-auto w-full max-w-6xl px-4 py-16">
        <div className="rounded-md border border-border bg-card shadow-sm">
          <div className="overflow-hidden border-y border-border">
            <div className="relative flex w-full">
              <ul className="animate-marquee flex min-w-[200%] flex-none items-center">
                {Array.from({ length: 2 }).map((_, loopIndex) => (
                  <li
                    key={loopIndex}
                    aria-hidden={loopIndex === 1}
                    className="flex flex-none items-center gap-8 whitespace-nowrap px-6 py-4 text-sm italic leading-relaxed text-muted-foreground md:text-base"
                  >
                    {marqueeItems.map((item, itemIndex) => (
                      <span key={`${loopIndex}-${itemIndex}`} className="flex flex-none items-center gap-8">
                        <span className="tracking-tight text-foreground/70">{item}</span>
                        <span aria-hidden className="text-foreground/30">
                          {"◦"}
                        </span>
                      </span>
                    ))}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <style jsx global>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 22s linear infinite;
        }
      `}</style>
    </main>
  )
}
