import React from "react";

const StatsSection: React.FC = () => {
  return (
    <section className="relative h-[600px] sm:h-[700px] lg:h-[926px] w-full max-w-[1920px] mx-auto overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale"
        style={{
          backgroundImage: `url('/dubai.webp')`,
        }}
      />

      <div className="relative h-full flex flex-col justify-between p-6 sm:p-10 lg:p-16 xl:p-20">
        <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20 pt-16 sm:pt-20 lg:pt-24">
          <div className="flex flex-col">
            <h2 className="font-sans font-semibold text-white text-6xl sm:text-7xl lg:text-8xl not-italic mb-4 sm:mb-7">
              500+
            </h2>
            <p className="font-sans font-normal text-white text-base sm:text-lg lg:text-xl xl:text-2xl ">
              Connections built across UAE & GCC
            </p>
          </div>

          <div className="flex flex-col">
            <h2 className="font-sans font-semibold text-white text-6xl sm:text-7xl lg:text-8xl  not-italic mb-4 sm:mb-7">
              120+
            </h2>
            <p className="font-sans font-normal text-white text-base sm:text-lg lg:text-xl xl:text-2xl">
              SMEs and startups actively scaling through our network
            </p>
          </div>
        </div>

        <div className="flex lg:justify-end">
          <p className="text-left font-sans font-normal text-white text-base lg:text-lg xl:text-xl max-w-xs sm:max-w-sm lg:max-w-xl  leading-relaxed">
            Every number tells a story of collaboration, growth, and impact. At
            TakeOff, milestones aren&apos;t just achievements - they&apos;re
            launchpads for what&apos;s next.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
