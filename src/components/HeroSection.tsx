import Image from "next/image";
import PlayIcon from "./icons/PlayIcon";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[526px] w-full items-center justify-center overflow-hidden bg-[var(--color-background)] ">
      <Image
        src="/handshake.webp"
        alt="Close-up handshake symbolizing partnership"
        fill
        priority
        className="object-cover grayscale"
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundColor:
            "color-mix(in srgb, var(--color-foreground) 40%, transparent)",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 flex w-full flex-col items-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl flex w-full flex-col items-center gap-8 px-4 sm:px-6 lg:px-20">
          <h1 className="text-pretty text-2xl leading-9 lg:leading-14 font-normal not-italic  text-primary-foreground sm:text-3xl md:text-4xl xl:text-5xl">
            Join a trusted community of entrepreneurs, founders, and innovators
            building the future together.
          </h1>
          <button
            type="button"
            className="flex h-16 w-16 items-center justify-center rounded-full border bg-[var(--color-background)] text-primary transition-transform duration-300 hover:scale-105  focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-primary-foreground)] "
          >
            <span className="sr-only">Play introduction video</span>
            <PlayIcon aria-hidden="true" className=" fill-black" />
          </button>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="flex flex-col bg-black/50 items-center gap-1 px-4 py-4 lg:py-6 backdrop-blur-3xl text-center sm:flex-row sm:justify-center sm:gap-2 lg:text-base">
          <span className="text-base  tracking-wide text-white">
            ready to takeoff...
          </span>
          <Link
            href="#join"
            className="text-base font-bold text-white underline underline-offset-4 hover:opacity-90 "
          >
            Click here to join us a member...
          </Link>
        </div>
      </div>
    </section>
  );
}
