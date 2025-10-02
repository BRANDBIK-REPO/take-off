import React from "react";
import Image from "next/image";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import Link from "next/link";

export default function ReadyToLaunch() {
  return (
    <section className="relative w-full h-[400px] sm:h-[500px] mt-8 lg:mt-16 ">
      <div className="absolute inset-0">
        <Image
          src="/ready-to-launch.webp"
          alt="Modern city buildings"
          fill
          className="object-cover grayscale"
          priority
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl xl:text-5xl font-serif text-white mb-2 sm:mb-6 lg:leading-14 not-italic font-normal">
            Ready to Launch Your Business to New Heights?
          </h1>

          <p className="text-base sm:text-lg text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Join Thrive&apos;s vibrant community of entrepreneurs and access
            exclusive resources to help elevate your business to the next level
            and reach your potential.
          </p>

          <Link
            href={"/membership"}
            className="bg-white hover:bg-[#F5F5F5] transition-all duration-300 cursor-pointer  px-4 sm:px-6 py-[10px] group rounded-full max-w-[253px] w-full flex items-center justify-between mx-auto mt-4 sm:mt-6 text-sm sm:text-base"
          >
            <span className="text-[#506767] font-[200] font-sans">
              Read more about us
            </span>
            <ArrowRightIcon
              width={14}
              height={11}
              className="inline ml-2 fill-[#506767] group-hover:translate-x-2 transition-all duration-300"
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
