"use client";

import Image from "next/image";
import Link from "next/link";

export default function MembershipHero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] bg-white overflow-hidden">
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-[200px] pb-[100px]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif">
              <span className="block">Unlock Your</span>
              <span className="block italic text-[#C09755]">TakeOff</span>
              <span className="block font-serif not-italic">Membership</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 max-w-lg leading-relaxed">
              More than a network — it's a launchpad for entrepreneuring growth.
              Connect with SMEs, founders, and professionals who think bigger
              and achieve more.
            </p>

            <div className="pt-4">
              <Link
                href="/membership/apply"
                className="inline-flex items-center gap-3 bg-[#215273] hover:bg-[#215273]/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Apply for the Membership
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C09755] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#215273] mb-2">
                      Join a powerful ecosystem
                    </h3>
                    <p className="text-[#506767] leading-relaxed">
                      Join a powerful ecosystem of entrepreneurs, gain exclusive
                      access to resources, and accelerate your growth journey
                      from local success to global scale.
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <button className="text-[#C09755] font-medium hover:text-[#C09755]/80 transition-colors flex items-center gap-2">
                    Learn more
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Decorative arrow pointing to the card */}
            <div className="absolute -top-4 -right-4 text-white/60">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
