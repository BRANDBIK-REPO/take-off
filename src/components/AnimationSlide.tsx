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
    <main className="w-full bg-background text-foreground">
      <section className="w-full py-8">
        <div className="w-full border-y border-border bg-card shadow-sm">
          <div className="overflow-hidden w-full">
            <div className="relative flex w-full">
              <ul className="animate-marquee flex min-w-[200%] flex-none items-center w-full">
                {Array.from({ length: 2 }).map((_, loopIndex) => (
                  <h1
                    key={loopIndex}
                    aria-hidden={loopIndex === 1}
                    className="flex flex-none items-center gap-8 whitespace-nowrap px-0 py-4 text-sm italic leading-relaxed text-muted-foreground md:text-base w-full"
                  >
                    {marqueeItems.map((item, itemIndex) => (
                      <span
                        key={`${loopIndex}-${itemIndex}`}
                        className="flex flex-none items-center gap-4 md:gap-8"
                      >
                        <span className="tracking-tight text-foreground/70 text-xs md:text-base">{item}</span>
                        <span aria-hidden className="text-foreground/30 text-lg md:text-xl">
                          {"◦"}
                        </span>
                      </span>
                    ))}
                  </h1>
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

        @media (max-width: 640px) {
          .animate-marquee span {
            font-size: 0.85rem;
            gap: 0.5rem;
          }
          .animate-marquee li {
            gap: 0.5rem;
            padding-left: 0;
            padding-right: 0;
          }
        }
      `}</style>
    </main>
  )
}
