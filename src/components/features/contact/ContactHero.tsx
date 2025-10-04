"use client";

import { PhoneIcon, MailIcon, ChatIcon } from "@/components/icons/icons";

import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="pt-[200px] pb-[60px] lg:pb-[100px] border-b border-border bg-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-6 gap-12 items-center">
          <div className="space-y-6 lg:col-span-2">
            <h1 className="italic text-4xl md:text-5xl lg:text-6xl font-serif text-[#215273]">
              Contact <span className="not-italic font-serif">with us</span>
            </h1>
            <p className="text-sm md:text-base   text-[#506767] max-w-md">
              Whether you&apos;re looking to join our community, partner with
              us, or volunteer your expertise, we&apos;re here to help you
              connect with the right opportunities.
            </p>
          </div>

          <div className="bg-[#506767] rounded gap-10 lg:gap-0  text-white relative overflow-hidden lg:col-span-4 flex flex-col md:flex-row px-4 py-8 lg:py-[100px] lg:pr-[100px] lg:pl-[60px]">
            <div className="relative z-10 space-y-12 flex-1 flex flex-col justify-center ">
              <div className="flex items-center gap-4">
                <div className="bg-[#D9D9D9] rounded-full p-4 flex-shrink-0">
                  <PhoneIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm lg:text-base text-white mb-1">
                    Speak with our team
                  </p>
                  <a
                    href="tel:+971501234567"
                    className="text-lg font-medium hover:text-white/90 transition-colors"
                  >
                    +971 50 123 4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#D9D9D9] rounded-full p-4 flex-shrink-0">
                  <MailIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm lg:text-base text-white mb-1">
                    Get in touch via email
                  </p>
                  <a
                    href="mailto:info@takeoff.ae"
                    className="text-lg font-medium hover:text-white/90 transition-colors break-all"
                  >
                    info@takeoff.ae
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#D9D9D9] rounded-full p-4 flex-shrink-0">
                  <ChatIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm lg:text-base text-white mb-1">
                    Dubai, UAE
                  </p>
                  <p className="text-lg font-medium">DIFC, Level 3</p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden flex-1">
              <Image
                src="/contact.webp"
                alt="Business Team"
                width={488}
                height={366}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
