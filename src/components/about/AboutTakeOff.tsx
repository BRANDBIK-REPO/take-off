import Image from "next/image";
import GroupIcon from "../icons/Group";
import GlobeIcon from "../icons/Globe";

export default function AboutTakeOff() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1700px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-3 flex flex-row lg:flex-col gap-12 lg:gap-16 justify-center lg:justify-start">
            <div className="flex flex-col items-center lg:items-start">
              <div className="w-10 h-10 mb-3 flex items-center justify-center">
                <GroupIcon />
              </div>
              <div className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-[#506767] mb-2">
                7
              </div>
              <div className="text-sm text-[#506767]">GCC Countries</div>
            </div>

            <div className="flex flex-col items-center lg:items-start">
              <div className="w-10 h-10 mb-3 flex items-center justify-center">
                <GlobeIcon />
              </div>
              <div className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-[#506767] mb-2">
                500+
              </div>
              <div className="text-sm text-[#506767]">Members</div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="relative  overflow-hidden ">
              <Image
                src="/about.webp"
                alt="Professional working on laptop in modern office"
                className="w-full object-cover grayscale [filter:grayscale(1)] hover:grayscale-0 transition duration-500"
                width={540}
                height={530}
              />
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6 flex flex-col justify-end">
            <div>
              <p className="text-sm text-[#506767] mb-3 font-light">
                About TakeOff
              </p>
              <h2 className="text-3xl text-[#215273] sm:text-4xl lg:text-5xl leading-tight mb-6">
                <span className="font-serif font-normal">
                  From local connections to{" "}
                </span>
                <span className="font-serif italic">global impact</span>
              </h2>
            </div>

            <div className="space-y-4 text-[#506767] font-light leading-relaxed">
              <p>
                {
                  "TakeOff is more than a network — it's a launchpad for entrepreneurial growth. Born in the UAE with deep Kerala-GCC roots, we connect SMEs, founders, and professionals who want to think bigger and achieve more."
                }
              </p>

              <p>
                We are a trusted ecosystem where ambition-driven entrepreneurs
                come together to connect, collaborate, and scale. At TakeOff,
                relationships turn into partnerships, knowledge becomes
                strategy, and opportunities transform into results.
              </p>

              <p>
                {
                  "This is not just about events — it's about building a results-driven, high-trust community that helps entrepreneurs move from local success to global scale."
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
