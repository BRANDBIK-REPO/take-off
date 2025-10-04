import ArrowRightIcon from "./icons/ArrowRightIcon";

export default function HomeBanner() {
  return (
    <main className="bg-background w-full pt-[110px]">
      <section
        style={{
          maxWidth: "1700px",
          margin: "0 auto",
        }}
        className="flex flex-col sm:flex-row items-center gap-10 justify-between max-w-[1400px] mx-auto pt-[100px] pb-[60px] sm:pt-[80px] px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-1 flex-col gap-8 lg:gap-24">
          <div className="space-y-6">
            <h1
              style={{
                color: "#215273",
                fontWeight: 400,
                lineHeight: 1.1,
                fontStyle: "normal",
                marginBottom: "24px",
              }}
              className="text-3xl sm:text-4xl lg:text-5xl"
            >
              Your Flight to Success is
              <br />
              Ready for{" "}
              <span
                className="font-serif"
                style={{ fontStyle: "italic", fontWeight: 500 }}
              >
                TakeOff
              </span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed  md:text-lg mb-7 text-[#506767] ">
              TakeOff is more than a network — it’s a launchpad for
              entrepreneurial growth. We connect SMEs, founders, and
              professionals to think bigger, achieve more, and scale globally.
            </p>
            <button className="bg-[#215273] hover:bg-[var(--primary)] w-[252px] h-[52px] gap-[35px] transition-all duration-300 cursor-pointer text-white px-4 sm:px-6 py-[10px] group rounded-full  flex items-center justify-between  mt-4 sm:mt-6 text-sm sm:text-base">
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
          <p className="text-sm text-[#506767] md:text-base">
            Connections | Knowledge | Opportunities | Visibility | Support |
            Growth
          </p>
        </div>

        <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
          <img
            src="/banner.png"
            alt="TakeOff Banner"
            className="w-full object-cover"
            style={{
              borderRadius: "25px",
              boxShadow: "0 4px 32px rgba(33,82,115,0.10)",
              objectFit: "cover",
            }}
          />
        </div>
      </section>
    </main>
  );
}
