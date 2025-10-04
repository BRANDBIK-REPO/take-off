import Image from "next/image";
import MissionIcon from "../../icons/MissionIcon";
import VisionIcon from "../../icons/VisionIcon";

export default function OurPromise() {
  return (
    <section className="py-6 sm:py-8 lg:py-16  px-4 sm:px-6 lg:px-8 bg-white ">
      <div className="max-w-[1700px] mx-auto">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col">
            <p className=" text-[#506767] font-light mb-2">Our Promise</p>
            <h2 className="text-3xl font-serif text-[var(--primary)] sm:text-4xl not-italic lg:text-5xl leading-tight mb-4 xl:mb-6">
              Shaping the{" "}
              <span className="italic font-serif">Future Together</span>{" "}
            </h2>
            <p className="text-[#506767] text-base sm:text-lg xl:text-xl leading-9 w-full max-w-5xl font-normal">
              Access to exclusive networks, Actionable growth strategies, and
              Advancement opportunities that propel your business forward.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="relative border border-[rgba(31,49,48,0.1)]  group-hover:grayscale-0 transition-all duration-300 lg:border-r-0 p-8 sm:p-10 lg:p-12  group">
              <div className="flex flex-col justify-center h-full max-w-[530px]  2xl:mx-auto ">
                <div className="absolute bottom-0 left-0 w-full h-0 bg-[var(--primary)] group-hover:h-2 transition-all duration-300 ease-out"></div>

                <div className="mb-8">
                  <VisionIcon className="w-16 h-16" />
                </div>

                <h3 className="text-xl sm:text-[46px] font-serif text-[#506767] mb-4 italic">
                  Our Vision
                </h3>

                <p className="text-[#506767] text-base sm:text-lg lg:text-[22px] leading-relaxed mb-8 font-light ">
                  Empower members with trusted connections, curated
                  opportunities, and actionable insights that drive measurable
                  business growth.
                </p>

                <div className="mt-auto">
                  <div className="aspect-video w-full bg-gray-100 rounded overflow-hidden">
                    <Image
                      src="/vision.webp"
                      width={500}
                      height={500}
                      alt="City skyline representing vision"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative border border-[rgba(31,49,48,0.1)]  group p-8 sm:p-10 lg:p-12   group">
              <div className="flex flex-col h-full max-w-[530px] 2xl:mx-auto ">
                <div className="absolute bottom-0 left-0 w-full h-0 bg-[var(--primary)] group-hover:h-2 transition-all duration-300 ease-out"></div>

                <div className="mb-8">
                  <MissionIcon className="w-16 h-16" />
                </div>

                <h3 className="text-xl sm:text-[46px] font-serif text-[#506767] mb-4 italic">
                  Our Mission
                </h3>

                <p className="text-[#506767] text-base sm:text-lg lg:text-[22px] leading-relaxed mb-8 font-normal">
                  To become the premier ecosystem where entrepreneurs transform
                  local success into global impact through collaborative
                  innovation.
                </p>

                <div className="mt-auto">
                  <div className="aspect-video w-full bg-gray-100 rounded overflow-hidden">
                    <Image
                      src="/mission.webp"
                      width={500}
                      height={500}
                      alt="Business collaboration representing mission"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
