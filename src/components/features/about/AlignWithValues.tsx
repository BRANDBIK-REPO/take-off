import Image from "next/image";
import React from "react";
import CheckIcon from "../../icons/CheckIcon";

export default function AlignWithValues() {
  const benefits = [
    "Unlock exclusive opportunities for business growth",
    "Collaborate with like-minded innovators",
    "Drive meaningful impact in the entrepreneurial world",
  ];

  return (
    <section className="pt-8 lg:py-16 max-w-[1920px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 overflow-hidden">
        <div className="relative col-span-1 lg:col-span-3  min-h-[400px]">
          <Image
            src="/align-with-values.webp"
            alt="Professional looking at city skyline"
            className="w-full h-full object-cover"
            fill
          />
        </div>

        <div className="bg-[#E5EBEA] px-4 py-8 col-span-1 lg:col-span-2 sm:p-10 lg:p-16 flex flex-col justify-center">
          <div className="xl:max-w-md xl:mx-auto w-full">
            <h2 className="text-3xl sm:text-4xl leading-10 xl:leading-16 xl:text-5xl font-serif text-[#215273] mb-2 sm:mb-6 font-normal">
              Ready to Align with <br className="hidden xl:block" />{" "}
              <span className="italic font-serif">Our Values</span>
            </h2>

            <p className="text-[#506767] font-medium font-sans mb-8 leading-7">
              Join a community that shares your commitment to growth,
              collaboration, and making a meaningful impact in the world of
              business.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <CheckIcon />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
