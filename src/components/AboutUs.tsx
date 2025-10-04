import Image from "next/image";
import ArrowRightIcon from "./icons/ArrowRightIcon";

export default function AboutUs() {
  return (
    <main className=" pt-16 pb-8 flex flex-col gap-16">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-20 max-w-[1600px] ">
        <section className="flex flex-col gap-16">
          <div className="grid gap-6 sm:gap-12 md:grid-cols-3">
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
                className="rounded flex flex-col "
                style={{ backgroundColor: stat.bg }}
              >
                <div className=" px-8 pt-14">
                  <h1 className="text-5xl font-medium font-sans not-italic tracking-tight text-white lg:text-[2.75rem]">
                    {stat.value}
                  </h1>
                </div>
                <div className="px-8 py-10">
                  <h2 className="text-xl font-regular  italic text-white mb-2">
                    {stat.title}
                  </h2>
                  <p className="mt-2 text-base leading-relaxed text-[rgba(255,255,255,0.8)] font-normal ">
                    {stat.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
        <figure className="relative h-[360px] overflow-hidden  sm:h-[420px] lg:h-full">
          <Image
            src="/meeting.webp"
            alt="Business leaders collaborating around a conference table"
            fill
            priority
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover"
          />
          <div className="absolute left-6 top-10 flex flex-col items-start text-[var(--color-neutral-50)] md:left-20">
            <p className="mb-10 lg:mb-14 max-w-[280px] text-sm leading-6">
              Empower members with trusted connections, curated opportunities,
              and actionable insights.
            </p>
            <span className="text-xl md:text-2xl lg:text-[34px] text-white/50 font-serif leading-0 [writing-mode:vertical-lr] rotate-180">
              Built for Your Growth
            </span>
          </div>
          <figcaption className="absolute bottom-6 right-6 md:bottom-10 md:right-10  text-white">
            <p className="text-xl lg:text-3xl font-serif  not-italic">
              Access. Action. Advancement.
            </p>
          </figcaption>
        </figure>

        <div className="flex flex-col p-4 lg:p-8">
          <span className="text-sm lg:text-base  text-[#1F3130]">
            Know about us more
          </span>
          <h2 className="mt-5 text-balance text-3xl not-italic leading-4 md:leading-10 text-[#215273] md:text-4xl lg:text-4xl">
            More than a network –{" "}
            <span className="mt-3 block font-serif italic leading-10 text-[var(--color-brand-navy)]">
              launchpad for entrepreneurial growth.
            </span>
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-[#506767]">
            Born in the UAE with deep Kerala–GCC roots, we connect SMEs,
            founders, and professionals who want to think bigger and achieve
            more. We are a trusted ecosystem where ambition-driven entrepreneurs
            come together to connect, collaborate, and scale.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#506767]">
            Relationships turn into partnerships, knowledge becomes strategy,
            and opportunities transform into results. Whether you&apos;re an
            aspiring founder, an established SME owner, or a growth-stage
            innovator, we provide the runway to explore new markets, access
            investors, and elevate your brand.
          </p>

          <button className="bg-[#215273] hover:bg-[var(--primary)] w-[252px] h-[52px] gap-[35px] transition-all duration-300 cursor-pointer text-white px-4 sm:px-6 py-[10px] group rounded-full  flex items-center justify-between  mt-10 sm:mt-14 text-sm sm:text-base">
            <span className="text-[#ffffff] font-[200] font-sans">
              Join the community
            </span>
            <ArrowRightIcon
              width={14}
              height={11}
              className="inline fill-white group-hover:translate-x-2 transition-all duration-300"
              aria-hidden
            />
          </button>
        </div>
      </div>
    </main>
  );
}
